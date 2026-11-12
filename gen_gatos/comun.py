"""Utilidades compartidas por los generadores de bancos de los Gatos de Estadística.

Cada módulo tema_xx.py define `generar(rng)` que devuelve la lista de preguntas del gato.
Convenciones (cursos AES y MAT033):
- resultados finales truncados a 4 decimales, coma decimal;
- z a 2 decimales y Φ de la tabla (4 decimales); t y χ² de tabla con 3 decimales;
- P(A|B), E(X), V(X); s² con n−1.
Formato de una pregunta (mix=True: textos con $…$ en vez de fórmula entera):
  {tipo, ctx, enun, ask, alts, correct, pautaHead, pautaSteps, conc, mix, sub?, table?, chart?, rout?}
Caso largo: {tipo, ctx, enun, parts:[{ask, alts, correct, pautaSteps, conc}], mix, sub?, table?…}
"""
import json
import math
import re
from pathlib import Path

from scipy import stats

RAIZ = Path(__file__).resolve().parents[1]


# ---------------------------------------------------------------- números
def trunc(x, d=4):
    """Trunca a d decimales (regla AES: «trunque los resultados finales a cuatro decimales»)."""
    f = 10 ** d
    v = math.floor(abs(x) * f + 1e-7) / f
    return -v if x < 0 else v


def rnd(x, d=4):
    return round(x + (1e-12 if x >= 0 else -1e-12), d)


def s(x, d=4, cut=True, fijo=False):
    """Número con coma decimal. cut=True trunca; fijo=True conserva ceros finales."""
    v = trunc(x, d) if cut else rnd(x, d)
    if v == 0:
        v = 0.0
    t = f"{v:.{d}f}"
    if not fijo and '.' in t:
        t = t.rstrip('0').rstrip('.')
    if t in ('-0', ''):
        t = '0'
    ent, _, dec = t.partition('.')
    neg = ent.startswith('-')
    ent = ent.lstrip('-')
    if len(ent) > 4:  # separador de miles en enteros grandes
        ent = f"{int(ent):,}".replace(',', '.')
    return ('-' if neg else '') + ent + (',' + dec if dec else '')


def t(x, d=4, cut=True, fijo=False):
    """Número para KaTeX: 0{,}2177 y 15.000 → 15{.}000."""
    return s(x, d, cut, fijo).replace(',', '{,}').replace('.', '{.}')


def pct(x, d=2):
    return s(100 * x, d) + ' %'


def m(x, d=4, cut=True):
    """Número en modo matemático completo: $0{,}2177$."""
    return f"${t(x, d, cut)}$"


# ---------------------------------------------------------------- tablas
def phi(z):
    """Φ(z) de la tabla: z a 2 decimales, Φ a 4 decimales."""
    return round(float(stats.norm.cdf(round(z, 2))), 4)


def z2(z):
    return round(z + (1e-9 if z >= 0 else -1e-9), 2)


ZQ = {0.90: 1.645, 0.95: 1.96, 0.98: 2.326, 0.99: 2.576}      # z_{1-α/2}
ZQ1 = {0.90: 1.282, 0.95: 1.645, 0.975: 1.96, 0.99: 2.326}    # z_{1-α}


def tq(p, gl):
    return round(float(stats.t.ppf(p, gl)), 3)


def chiq(p, gl):
    return round(float(stats.chi2.ppf(p, gl)), 3)


def fq(p, g1, g2):
    return round(float(stats.f.ppf(p, g1, g2)), 3)


# ---------------------------------------------------------------- alternativas
def alts(correcta, candidatas, d=4, cut=True, fmt=None, rel=0.02, ab=None):
    """Arma 4 alternativas: la correcta primero y 3 distractores distintos y lejanos.

    correcta, candidatas: números (se formatean con fmt o con t()).
    Se descartan candidatas iguales a la correcta tras formatear o demasiado cercanas
    (|Δ| ≤ max(rel·|x|, ab)). Si faltan, se rellena con perturbaciones de la correcta."""
    f = fmt or (lambda v: f"${t(v, d, cut)}$")
    if abs(correcta) < 1e-12:
        correcta = 0.0
    ab = ab if ab is not None else 5 * 10 ** (-d)
    prob = 0 < correcta < 1  # si la clave es una probabilidad, se descartan distractores fuera de [0, 1]
    out_v, out_s = [correcta], [f(correcta)]

    def lejos(v):
        return all(abs(v - w) > max(rel * max(abs(v), abs(w)), ab) for w in out_v)

    for c in candidatas:
        if c is None or (isinstance(c, float) and (math.isnan(c) or math.isinf(c))):
            continue
        if prob and not 0 <= c <= 1:
            continue
        fc = f(c)
        if fc in out_s or not lejos(c):
            continue
        out_v.append(c)
        out_s.append(fc)
        if len(out_s) == 4:
            return out_s
    k = 1
    while len(out_s) < 4:
        for fac in (1 + 0.13 * k, 1 - 0.11 * k, 1 + 0.27 * k, 1 - 0.23 * k):
            c = correcta * fac if correcta else (fac - 1) * 0.4
            if 0 < correcta <= 1 and not 0 < c < 1:
                continue
            fc = f(c)
            if fc not in out_s and lejos(c):
                out_v.append(c)
                out_s.append(fc)
                if len(out_s) == 4:
                    break
        k += 1
        if k > 20:
            raise ValueError(f'No se pudieron armar distractores para {correcta}')
    return out_s


def alts_txt(correcta, otras):
    """Alternativas de texto: la correcta primero; deben ser 3 distintas."""
    o = [x for x in dict.fromkeys(otras) if x != correcta][:3]
    assert len(o) == 3, (correcta, otras)
    return [correcta] + o


# ---------------------------------------------------------------- constructores
_PEV = re.compile(r'(?<![A-Z\\_])(P(?=\s*(?:\(|\[|=|\\left))|[EV](?=\s*(?:\(|\[|\\left)))')
_MATH = re.compile(r'\$\$[\s\S]+?\$\$|\$[^$]+?\$')


def pizarra_tex(m):
    """Dentro de una fórmula: P( → \\mathbb{P}(, E( → \\mathbb{E}(, V( → \\mathbb{V}( (notación del formulario)."""
    return _PEV.sub(lambda g: '\\mathbb{' + g.group(1) + '}', m)


def pizarra(s):
    """Aplica pizarra_tex solo a los segmentos $…$ de un texto mixto."""
    return _MATH.sub(lambda g: pizarra_tex(g.group(0)), s)


def pizarra_txt(s):
    """Para textos sin KaTeX (nombres de tipo): ℙ(, 𝔼(, 𝕍(."""
    return re.sub(r'(?<![A-Za-z])([PEV])(?=\()', lambda g: {'P': 'ℙ', 'E': '𝔼', 'V': '𝕍'}[g.group(1)], s)


def limpia(x, clave=None):
    """Concordancia de las plantillas (de el → del, a el → al) y notación ℙ, 𝔼, 𝕍."""
    if isinstance(x, str):
        if clave == 'tipo':
            return pizarra_txt(x)
        for a, b in ((' de el ', ' del '), (' a el ', ' al '), ('De el ', 'Del ')):
            x = x.replace(a, b)
        return pizarra(x)
    if isinstance(x, list):
        return [limpia(v, clave) for v in x]
    if isinstance(x, dict):
        if clave == 'table':
            return {k: limpia(v) for k, v in x.items()}
        return {k: (limpia(v, k) if k not in ('chart', 'rout') else v) for k, v in x.items()}
    return x


def Q(tipo, ctx, enun, ask, alternativas, steps, conc, head='', sub=None, **extra):
    q = {'tipo': tipo, 'ctx': ctx, 'enun': enun, 'ask': ask, 'alts': alternativas, 'correct': 0,
         'pautaHead': head, 'pautaSteps': steps, 'conc': conc, 'mix': True}
    if sub:
        q['sub'] = sub
    q.update({k: v for k, v in extra.items() if v is not None})
    return limpia(q)


def P(ask, alternativas, steps, conc, head=''):
    return limpia({'ask': ask, 'alts': alternativas, 'correct': 0, 'pautaHead': head, 'pautaSteps': steps, 'conc': conc})


def CASO(tipo, ctx, enun, partes, sub=None, **extra):
    q = {'tipo': tipo, 'ctx': ctx, 'enun': enun, 'parts': partes, 'mix': True}
    if sub:
        q['sub'] = sub
    q.update({k: v for k, v in extra.items() if v is not None})
    return limpia(q)


def variantes(rng, fn, n, intentos=60):
    """Llama fn(rng) hasta juntar n preguntas con enunciado distinto."""
    out, vistos = [], set()
    fallas = 0
    for _ in range(n * intentos):
        try:
            q = fn(rng)
        except (AssertionError, ValueError, ZeroDivisionError) as e:
            fallas += 1
            if fallas > 3 * n:
                raise
            continue
        if q is None:
            continue
        clave = q['enun'] + '|' + q.get('ask', '') + '|' + q.get('rout', '') + '|' + json.dumps(q.get('table')) + json.dumps(q.get('chart'))
        if clave in vistos:
            continue
        vistos.add(clave)
        out.append(q)
        if len(out) == n:
            break
    if len(out) < n:
        print(f"  ! {fn.__name__}: {len(out)} de {n} variantes")
    return out


def escribir(nombre_var, preguntas, archivo, titulo):
    lineas = [f"// {titulo}. Generado por gen_gatos/ (no editar a mano: cambiar el generador).",
              f"window.{nombre_var} = ["]
    lineas += [json.dumps(q, ensure_ascii=False) + ',' for q in preguntas]
    lineas.append('];')
    (RAIZ / archivo).write_text('\n'.join(lineas) + '\n', encoding='utf-8')
    tipos = {}
    for q in preguntas:
        tipos[q['tipo']] = tipos.get(q['tipo'], 0) + 1
    print(f"{archivo}: {len(preguntas)} preguntas, {sum('parts' in q for q in preguntas)} casos")


def frac(a, b):
    return str(a) if b == 1 else rf"\dfrac{{{a}}}{{{b}}}"
