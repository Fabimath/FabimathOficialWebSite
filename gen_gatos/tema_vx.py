"""Gato Aleatorio Continuo. Dos mitades:
- Sin integrales (AES500 2026-2): densidades lineales/triangulares, probabilidades como áreas de triángulos y
  trapecios, acumulada dada → derivar, percentiles desde F.
- Con integrales (MAT033): constante k, probabilidades, F, E, V, percentil, condicional, truncar al recorrido, E[g(X)]."""
from fractions import Fraction as Fr
from comun import Q, P, CASO, alts, alts_txt, t, s, variantes, frac, trunc

CTX = [('Logística · Tiempos', 'el tiempo (en horas) que demora un despacho', 'horas'),
       ('Salud · Atención', 'el tiempo de espera (en decenas de minutos) en un SAPU', 'decenas de minutos'),
       ('Industria · Fallas', 'el tiempo (en años) hasta la primera falla de un compresor', 'años'),
       ('Finanzas · Pérdidas', 'la pérdida diaria (en millones de pesos) de una cartera', 'millones'),
       ('Telecomunicaciones', 'la duración (en minutos) de una llamada a soporte técnico', 'minutos'),
       ('Agroindustria', 'la proporción de fruta dañada en un pallet, multiplicada por 10', 'unidades')]


class Pot:
    """f(x) = (n+1) x^n / c^(n+1) en [0,c] (sube, inc=True) o (n+1)(c-x)^n / c^(n+1) (baja)."""

    def __init__(self, n, c, inc):
        self.n, self.c, self.inc = n, c, inc
        self.k = Fr(n + 1, c ** (n + 1))

    def F(self, x):
        x = min(max(x, 0), self.c)
        return (x / self.c) ** (self.n + 1) if self.inc else 1 - ((self.c - x) / self.c) ** (self.n + 1)

    def P(self, a, b):
        return self.F(b) - self.F(a)

    @property
    def E(self):
        n, c = self.n, self.c
        return (n + 1) * c / (n + 2) if self.inc else c / (n + 2)

    @property
    def E2(self):
        n, c = self.n, self.c
        ey, ey2 = (n + 1) * c / (n + 2), (n + 1) * c * c / (n + 3)
        return ey2 if self.inc else c * c - 2 * c * ey + ey2

    @property
    def V(self):
        return self.E2 - self.E ** 2

    def q(self, p):
        n, c = self.n, self.c
        return c * p ** (1 / (n + 1)) if self.inc else c - c * (1 - p) ** (1 / (n + 1))

    def tex(self):
        base = 'x' if self.inc else f'({self.c}-x)'
        pot = base if self.n == 1 else f"{base}^{self.n}"
        k = self.k
        if k.denominator == 1:
            return pot if k.numerator == 1 else f"{k.numerator}{pot}"
        return f"\\dfrac{{{pot}}}{{{k.denominator}}}" if k.numerator == 1 else f"\\dfrac{{{k.numerator}{pot}}}{{{k.denominator}}}"

    def Ftex(self):
        e = self.n + 1
        if self.inc:
            return f"\\dfrac{{x^{e}}}{{{self.c ** e}}}"
        return f"1-\\dfrac{{({self.c}-x)^{e}}}{{{self.c ** e}}}"

    def chart(self, xlab='x'):
        c = self.c
        pts = [[i * c / 20, float(self.k) * ((i * c / 20) if self.inc else (c - i * c / 20)) ** self.n] for i in range(21)]
        return {'type': 'dens', 'pts': pts, 'xt': list(range(0, c + 1)), 'yt': [float(self.k * c ** self.n)],
                'ytl': [str(self.k * c ** self.n)],
                'xlab': xlab}


def _dens(rng, n=None):
    ctx, var, unid = rng.choice(CTX)
    n = n or rng.choice([1, 2, 3])
    c = rng.choice([2, 3, 4, 5, 6, 10] if n == 1 else [1, 2, 3, 4])
    return ctx, var, unid, Pot(n, c, rng.random() < 0.5)


def _enun(var, d):
    return f"Sea $X$ {var}, con densidad $f_X(x)={d.tex()}$ para $0\\le x\\le {d.c}$ y $0$ en otro caso."


def _pts(d, rng):
    c = d.c
    cand = sorted({x for x in [c / 4, c / 2, 3 * c / 4, 1, 2, c / 5, 2 * c / 5, 3 * c / 5] if 0 < x < c and abs(x * 4 - round(x * 4)) < 1e-9})
    return cand


# ---------------------------------------------------------------- sin integrales
def area_k(rng):
    ctx, var, unid = rng.choice(CTX)
    c = rng.choice([2, 3, 4, 5, 6, 8, 10])
    forma = rng.choice(['sube', 'baja', 'trap'])
    if forma == 'sube':
        k, f, desc = Fr(2, c * c), 'kx', f"Triángulo de base ${c}$ y altura $f({c})={c}k$: área $\\dfrac{{{c}\\cdot {c}k}}{{2}}={Fr(c * c, 2)}k$."
    elif forma == 'baja':
        k, f, desc = Fr(2, c * c), f'k({c}-x)', f"Triángulo de base ${c}$ y altura $f(0)={c}k$: área $\\dfrac{{{c}\\cdot {c}k}}{{2}}={Fr(c * c, 2)}k$."
    else:
        a = rng.choice([1, 2])
        area = Fr(c * c, 2) + a * c
        k, f, desc = 1 / area, f'k(x+{a})', f"Trapecio de bases $f(0)={a}k$ y $f({c})={c + a}k$, altura ${c}$: área $\\dfrac{{({a}k+{c + a}k)\\,{c}}}{{2}}={area}k$."
    enun = f"Sea $X$ {var}, con densidad $f_X(x)={f}$ para $0\\le x\\le {c}$ y $0$ en otro caso. Responda sin integrales, usando áreas."
    v = float(k)
    st = [desc, f"El área total bajo la densidad es 1, luego $k={frac(k.numerator, k.denominator)}={t(v)}$"]
    return Q('Constante k por área', ctx, enun, '¿Cuál es el valor de $k$?', alts(v, [1 / c, 2 / c, 1 / (c * c), v * 2, v / 2]), st,
             f"$k={frac(k.numerator, k.denominator)}$.", sub='Sin integrales (áreas)')


def area_p(rng):
    ctx, var, unid, d = _dens(rng, 1)
    pts = _pts(d, rng)
    a = rng.choice(pts)
    bs = [x for x in pts if x > a]
    k = rng.choice(['mayor', 'menor'] + (['entre'] if bs else []))
    c = d.c
    h = lambda x: float(d.k) * (x if d.inc else c - x)  # altura de la densidad
    if k == 'mayor':
        v = 1 - d.F(a)
        expr = f"P(X>{t(a)})"
        geo = (f"Trapecio de bases $f({t(a)})={t(h(a))}$ y $f({c})={t(h(c))}$ con ancho ${t(c - a)}$" if d.inc
               else f"Triángulo de base ${t(c - a)}$ y altura $f({t(a)})={t(h(a))}$")
    elif k == 'menor':
        v = d.F(a)
        expr = f"P(X\\le {t(a)})"
        geo = (f"Triángulo de base ${t(a)}$ y altura $f({t(a)})={t(h(a))}$" if d.inc
               else f"Trapecio de bases $f(0)={t(h(0))}$ y $f({t(a)})={t(h(a))}$ con ancho ${t(a)}$")
    else:
        b = rng.choice(bs)
        v = d.P(a, b)
        expr = f"P({t(a)}<X<{t(b)})"
        geo = f"Trapecio de bases $f({t(a)})={t(h(a))}$ y $f({t(b)})={t(h(b))}$ con ancho ${t(b - a)}$"
    enun = _enun(var, d) + ' Responda sin integrales: la probabilidad es un área bajo la densidad.'
    st = [geo + '.', f"${expr}={t(v)}$"]
    return Q('Probabilidad como área', ctx, enun, f"¿Cuál es ${expr}$?", alts(v, [1 - v, h(a), a / c, 1 - a / c, v / 2, h(a) * a]),
             st, f"${expr}={t(v)}$.", chart=d.chart(), sub='Sin integrales (áreas)')


def area_percentil(rng):
    ctx, var, unid, d = _dens(rng, 1)
    p = rng.choice([0.25, 0.5, 0.75, 0.9, 0.1, 0.36, 0.64])
    v = d.q(p)
    c = d.c
    if d.inc:
        st = [f"$F_X(x)=$ área del triángulo $[0,x]$ $=\\dfrac{{x\\cdot f(x)}}{{2}}=\\dfrac{{x^2}}{{{c * c}}}$",
              f"$\\dfrac{{x^2}}{{{c * c}}}={t(p)}\\Rightarrow x={c}\\sqrt{{{t(p)}}}={t(v)}$"]
    else:
        st = [f"$P(X>x)=$ triángulo $[x,{c}]$ $=\\dfrac{{({c}-x)^2}}{{{c * c}}}$, luego $F_X(x)=1-\\dfrac{{({c}-x)^2}}{{{c * c}}}$",
              f"$1-\\dfrac{{({c}-x)^2}}{{{c * c}}}={t(p)}\\Rightarrow x={c}-{c}\\sqrt{{{t(1 - p)}}}={t(v)}$"]
    nombre = 'la mediana' if p == 0.5 else f"el percentil {s(100 * p, 0)}"
    return Q('Mediana y percentiles por áreas', ctx, _enun(var, d) + ' Responda sin integrales.', f"¿Cuál es {nombre} de $X$?",
             alts(v, [p * c, c - v if abs(c - v - v) > 0.01 else v * 1.2, c * p ** 2, c / 2, d.E]), st,
             f"{nombre[0].upper() + nombre[1:]} es <b>{s(v)}</b> {unid}: el {s(100 * p, 0)} % de los casos queda bajo ese valor.",
             chart=d.chart(), sub='Sin integrales (áreas)')


def F_dada(rng):
    ctx, var, unid, d = _dens(rng)
    pts = _pts(d, rng)
    a = rng.choice(pts)
    b = rng.choice([x for x in pts if x > a] or [d.c])
    k = rng.choice(['entre', 'mayor', 'f'])
    enun = (f"Sea $X$ {var}, con función de distribución acumulada $F_X(x)={d.Ftex()}$ para $0\\le x\\le {d.c}$, "
            f"$F_X(x)=0$ si $x<0$ y $F_X(x)=1$ si $x>{d.c}$.")
    if k == 'entre':
        v = d.P(a, b)
        return Q('Probabilidades desde F', ctx, enun, f"¿Cuál es $P({t(a)}<X\\le {t(b)})$?", alts(v, [d.F(b), d.F(a), 1 - v, d.F(b) + d.F(a)]),
                 [f"$P({t(a)}<X\\le {t(b)})=F_X({t(b)})-F_X({t(a)})={t(d.F(b))}-{t(d.F(a))}={t(v)}$"], f"Resultado: <b>{s(v)}</b>.",
                 sub='Sin integrales (áreas)')
    if k == 'mayor':
        v = 1 - d.F(a)
        return Q('Probabilidades desde F', ctx, enun, f"¿Cuál es $P(X>{t(a)})$?", alts(v, [d.F(a), 1 - d.F(a / 2), d.F(a) / 2]),
                 [f"$P(X>{t(a)})=1-F_X({t(a)})=1-{t(d.F(a))}={t(v)}$"], f"Resultado: <b>{s(v)}</b>.", sub='Sin integrales (áreas)')
    ok = f"$f_X(x)={d.tex()}$"
    e = d.n + 1
    malas = [f"$f_X(x)={d.Ftex()}$", f"$f_X(x)=\\dfrac{{x^{{{e + 1}}}}}{{{(e + 1) * d.c ** e}}}$",
             f"$f_X(x)=\\dfrac{{{e}x^{{{e}}}}}{{{d.c ** e}}}$" if d.inc else f"$f_X(x)=\\dfrac{{({d.c}-x)^{{{d.n}}}}}{{{d.c ** e}}}$"]
    return Q('Densidad desde F (derivar)', ctx, enun, '¿Cuál es la densidad $f_X(x)$ en $0<x<' + str(d.c) + '$?', alts_txt(ok, malas),
             [f"$f_X(x)=F_X'(x)$; derivando la expresión de $F_X$ se obtiene ${d.tex()}$."],
             'La densidad es la derivada de la acumulada (no hace falta integrar).', sub='Sin integrales (áreas)')


def punto(rng):
    ctx, var, unid, d = _dens(rng, 1)
    a = rng.choice(_pts(d, rng))
    ok = f"$0$, porque en una variable continua la probabilidad de un valor puntual es cero"
    malas = [f"$f_X({t(a)})={t(float(d.k) * (a if d.inc else d.c - a))}$", f"$F_X({t(a)})={t(d.F(a))}$", f"$\\dfrac{{1}}{{{d.c}}}$, porque todos los valores son igual de probables"]
    return Q('Probabilidad de un valor puntual', ctx, _enun(var, d), f"¿Cuánto vale $P(X={t(a)})$?", alts_txt(ok, malas),
             [f"$P(X={t(a)})=$ área de un segmento de ancho cero $=0$.", "Por eso $P(X\\le a)=P(X<a)$ en variables continuas."],
             'La densidad no es una probabilidad: la probabilidad es un área.', sub='Sin integrales (áreas)')


# ---------------------------------------------------------------- con integrales
def int_k(rng):
    ctx, var, unid, d = _dens(rng)
    n, c = d.n, d.c
    base = 'x' if d.inc else f'({c}-x)'
    pot = base if n == 1 else f"{base}^{n}"
    v = float(d.k)
    enun = f"Sea $X$ {var}, con densidad $f_X(x)=k\\,{pot}$ para $0\\le x\\le {c}$ y $0$ en otro caso."
    st = [f"$\\int_0^{{{c}}} k\\,{pot}\\,dx=k\\left[\\dfrac{{{'x' if d.inc else '-(' + str(c) + '-x)'}^{{{n + 1}}}}}{{{n + 1}}}\\right]_0^{{{c}}}=k\\,\\dfrac{{{c ** (n + 1)}}}{{{n + 1}}}=1$",
          f"$k=\\dfrac{{{n + 1}}}{{{c ** (n + 1)}}}={t(v)}$"]
    return Q('Constante k (integral)', ctx, enun, '¿Cuál es el valor de $k$?', alts(v, [1 / c ** (n + 1), n / c ** (n + 1), (n + 1) / c ** n, 1 / c]),
             st, f"$k={frac(d.k.numerator, d.k.denominator)}$.", sub='Con integrales')


def int_p(rng):
    ctx, var, unid, d = _dens(rng)
    pts = _pts(d, rng)
    a = rng.choice(pts)
    b = rng.choice([x for x in pts if x > a] or [d.c])
    v = d.P(a, b)
    e = d.n + 1
    prim = f"\\dfrac{{x^{e}}}{{{d.c ** e}}}" if d.inc else f"-\\dfrac{{({d.c}-x)^{e}}}{{{d.c ** e}}}"
    st = [f"$P({t(a)}<X<{t(b)})=\\int_{{{t(a)}}}^{{{t(b)}}} {d.tex()}\\,dx=\\left[{prim}\\right]_{{{t(a)}}}^{{{t(b)}}}$",
          f"$={t(d.F(b))}-{t(d.F(a))}={t(v)}$"]
    fa = float(d.k) * ((a if d.inc else d.c - a) ** d.n)
    fb = float(d.k) * ((b if d.inc else d.c - b) ** d.n)
    return Q('Probabilidad con integral', ctx, _enun(var, d), f"¿Cuál es $P({t(a)}<X<{t(b)})$?",
             alts(v, [fb - fa, (b - a) / d.c, d.F(b), 1 - v, abs(fb - fa) / 2]), st, f"Resultado: <b>{s(v)}</b>.", sub='Con integrales')


def int_F(rng):
    ctx, var, unid, d = _dens(rng)
    ok = f"$F_X(x)={d.Ftex()}$"
    e = d.n + 1
    malas = [f"$F_X(x)={d.tex()}$", f"$F_X(x)=\\dfrac{{x^{e}}}{{{e}}}$",
             f"$F_X(x)=\\dfrac{{({d.c}-x)^{e}}}{{{d.c ** e}}}$" if not d.inc else f"$F_X(x)=1-\\dfrac{{x^{e}}}{{{d.c ** e}}}$"]
    st = [f"$F_X(x)=\\int_0^x f_X(u)\\,du$ para $0\\le x\\le {d.c}$.", f"Resulta $F_X(x)={d.Ftex()}$; se comprueba que $F_X({d.c})=1$."]
    return Q('Acumulada desde f (integrar)', ctx, _enun(var, d), f'¿Cuál es $F_X(x)$ para $0\\le x\\le {d.c}$?', alts_txt(ok, malas), st,
             'La acumulada es la integral de la densidad desde el inicio del recorrido.', sub='Con integrales')


def int_EV(rng):
    ctx, var, unid, d = _dens(rng)
    k = rng.choice(['E', 'V', 'de'])
    val = {'E': d.E, 'V': d.V, 'de': d.V ** 0.5}[k]
    e = d.n
    st = [f"$E(X)=\\int_0^{{{d.c}}} x\\,f_X(x)\\,dx={t(d.E)}$", f"$E(X^2)=\\int_0^{{{d.c}}} x^2 f_X(x)\\,dx={t(d.E2)}$"]
    if k != 'E':
        st.append(f"$V(X)=E(X^2)-E(X)^2={t(d.E2)}-{t(d.E)}^2={t(d.V)}$")
    if k == 'de':
        st.append(f"$d.e.(X)=\\sqrt{{{t(d.V)}}}={t(val)}$")
    nombre = {'E': 'el valor esperado $E(X)$', 'V': 'la varianza $V(X)$', 'de': 'la desviación estándar de $X$'}[k]
    return Q('E(X) y V(X) con integrales', ctx, _enun(var, d), f"¿Cuál es {nombre}?",
             alts(val, [d.E, d.V, d.V ** 0.5, d.E2, d.c / 2, d.c - d.E]), st, f"Resultado: <b>{s(val)}</b> {unid if k != 'V' else '(unidades al cuadrado)'}.",
             sub='Con integrales')


def int_percentil(rng):
    ctx, var, unid, d = _dens(rng)
    p = rng.choice([0.1, 0.25, 0.5, 0.75, 0.9, 0.95])
    v = d.q(p)
    e = d.n + 1
    if d.inc:
        st = [f"$F_X(x)={d.Ftex()}={t(p)}$", f"$x={d.c}\\cdot {t(p)}^{{1/{e}}}={t(v)}$"]
    else:
        st = [f"$F_X(x)={d.Ftex()}={t(p)}$", f"$({d.c}-x)^{e}={t(1 - p)}\\cdot{d.c ** e}\\Rightarrow x={d.c}-{d.c}\\cdot{t(1 - p)}^{{1/{e}}}={t(v)}$"]
    nombre = 'la mediana' if p == 0.5 else f"el percentil {s(100 * p, 0)}"
    umbral = f"Se clasifica como «crítico» un caso que supera el {s(100 * (1 - p), 0)} % más alto. " if p >= 0.9 else ''
    return Q('Percentil inverso', ctx, umbral + _enun(var, d), f"¿Cuál es {nombre} de $X$?",
             alts(v, [p * d.c, d.c * p ** e, d.E, d.c - v if abs(d.c - 2 * v) > 0.02 else v + 0.3, d.c * (1 - p) ** (1 / e)]), st,
             f"{nombre[0].upper() + nombre[1:]} es <b>{s(v)}</b>: $P(X\\le {t(v)})={t(p)}$.", sub='Con integrales')


def int_cond(rng):
    ctx, var, unid, d = _dens(rng)
    pts = _pts(d, rng)
    if len(pts) < 2:
        return None
    a, b = sorted(rng.sample(pts, 2))
    num, den = 1 - d.F(b), 1 - d.F(a)
    v = num / den
    st = [f"$P(X>{t(b)}|X>{t(a)})=\\dfrac{{P(X>{t(b)})}}{{P(X>{t(a)})}}=\\dfrac{{1-F_X({t(b)})}}{{1-F_X({t(a)})}}$",
          f"$=\\dfrac{{{t(num)}}}{{{t(den)}}}={t(v)}$"]
    return Q('Probabilidad condicional', ctx, _enun(var, d), f"Si ya se sabe que $X>{t(a)}$, ¿cuál es la probabilidad de que $X>{t(b)}$?",
             alts(v, [num, 1 - d.F(b - a), num * den, d.P(a, b) / den]), st, f"Resultado: <b>{s(v)}</b>.", sub='Con integrales')


def truncar(rng):
    ctx, var, unid, d = _dens(rng)
    E, de = trunc(d.E), trunc(d.V ** 0.5)   # la clave se calcula con los valores mostrados
    m = rng.choice([2, 3])
    hi = E + m * de
    lo = E - de
    v = d.F(hi) - d.F(lo)
    st = [f"$E(X)={t(E)}$, $d.e.(X)={t(de)}$.",
          f"Límites: $E-d.e.={t(lo)}$ y $E+{m}\\,d.e.={t(hi)}$" + (f", que supera el recorrido: se trunca en ${d.c}$." if hi > d.c else '.'),
          f"$P={t(d.F(min(hi, d.c)))}-{t(d.F(lo))}={t(v)}$"]
    return Q('Límites con E(X) y d.e.: truncar al recorrido', ctx, _enun(var, d), f"¿Cuál es $P\\big(E(X)-d.e.(X)<X<E(X)+{m}\\,d.e.(X)\\big)$?",
             alts(v, [0.68 if m == 1 else 0.8186 if m == 2 else 0.84, 1 - d.F(lo), d.F(min(hi, d.c)), 1 - v]), st,
             'Si un límite cae fuera del recorrido, se reemplaza por el extremo del recorrido.', sub='Con integrales')


def g_lineal(rng):
    ctx, var, unid, d = _dens(rng)
    a, b = rng.choice([2, 5, 10]), rng.choice([1, 2, 3])
    v = a + b * d.E2
    st = [f"$E(Y)=E({a}+{'' if b == 1 else b}X^2)={a}+{'' if b == 1 else b}\\,E(X^2)$ por linealidad (no hay que integrar de nuevo).",
          f"$E(X^2)=\\int_0^{{{d.c}}} x^2 f_X(x)\\,dx={t(d.E2)}$", f"$E(Y)={a}+{b}\\cdot{t(d.E2)}={t(v)}$"]
    return Q('Esperanza de una función de X', ctx, _enun(var, d) + f" El costo asociado es $Y={a}+{'' if b == 1 else b}X^2$.", '¿Cuál es $E(Y)$?',
             alts(v, [a + b * d.E ** 2, a + b * d.E, b * d.E2, a + b * d.V]), st, f"$E(Y)={t(v)}$.", sub='Con integrales')


# ---------------------------------------------------------------- casos
def caso_areas(rng):
    ctx, var, unid, d = _dens(rng, 1)
    c = d.c
    pts = _pts(d, rng)
    if len(pts) < 2:
        return None
    a, b = sorted(rng.sample(pts, 2))
    tri = f"$\\dfrac{{{c}\\cdot {t(float(d.k) * c)}}}{{2}}=1$"
    p1 = P('¿Es $f_X$ una densidad? Verifique el área total.', alts_txt(f"Sí: el triángulo tiene área {tri}", [
        f"No: el área es ${t(float(d.k) * c)}$", "No: la densidad debe valer a lo más 1 en todo punto", f"Sí, porque $f_X({c // 2})<1$"]),
           [f"Triángulo de base ${c}$ y altura ${t(float(d.k) * c)}$: área {tri}."], 'Una densidad es no negativa y encierra área 1.')
    p2 = P(f"$P(X>{t(b)})$.", alts(1 - d.F(b), [d.F(b), 1 - b / c, d.F(c - b)]), [f"$P(X>{t(b)})=1-F_X({t(b)})={t(1 - d.F(b))}$ (área a la derecha)."], f"<b>{s(1 - d.F(b))}</b>.")
    p3 = P(f"$P({t(a)}\\le X\\le {t(b)})$.", alts(d.P(a, b), [(b - a) / c, d.F(b), 1 - d.P(a, b)]), [f"Trapecio entre ${t(a)}$ y ${t(b)}$: ${t(d.F(b))}-{t(d.F(a))}={t(d.P(a, b))}$"], f"<b>{s(d.P(a, b))}</b>.")
    p4 = P(f"Si ya se sabe que $X>{t(a)}$, probabilidad de que $X>{t(b)}$.", alts((1 - d.F(b)) / (1 - d.F(a)), [1 - d.F(b), 1 - d.F(b - a), (1 - d.F(b)) * (1 - d.F(a))]),
           [f"$\\dfrac{{P(X>{t(b)})}}{{P(X>{t(a)})}}=\\dfrac{{{t(1 - d.F(b))}}}{{{t(1 - d.F(a))}}}={t((1 - d.F(b)) / (1 - d.F(a)))}$"], f"<b>{s((1 - d.F(b)) / (1 - d.F(a)))}</b>.")
    p5 = P('Mediana de $X$.', alts(d.q(0.5), [c / 2, d.E, c * 0.25]), [f"Se busca $x$ con área $0{{,}}5$ a la izquierda: $x={t(d.q(0.5))}$"], f"Mediana: <b>{s(d.q(0.5))}</b>.")
    return CASO('Caso sin integrales: densidad triangular', ctx, _enun(var, d) + ' Responda sin integrales.', [p1, p2, p3, p4, p5],
                chart=d.chart(), sub='Sin integrales (áreas)')


def caso_integrales(rng):
    ctx, var, unid, d = _dens(rng)
    n, c = d.n, d.c
    base = 'x' if d.inc else f'({c}-x)'
    pot = base if n == 1 else f"{base}^{n}"
    pts = _pts(d, rng)
    if len(pts) < 2:
        return None
    a, b = sorted(rng.sample(pts, 2))
    p0 = 0.9
    enun = f"Sea $X$ {var}, con densidad $f_X(x)=k\\,{pot}$ para $0\\le x\\le {c}$ y $0$ en otro caso."
    p1 = P('Valor de $k$.', alts(float(d.k), [1 / c ** (n + 1), (n + 1) / c ** n, n / c ** (n + 1)]), [f"$k\\,\\dfrac{{{c ** (n + 1)}}}{{{n + 1}}}=1\\Rightarrow k={frac(d.k.numerator, d.k.denominator)}$"], f"$k={frac(d.k.numerator, d.k.denominator)}$.")
    p2 = P(f"$P(X<{t(b)})$.", alts(d.F(b), [1 - d.F(b), b / c, d.F(a)]), [f"$F_X({t(b)})={t(d.F(b))}$ con $F_X(x)={d.Ftex()}$"], f"<b>{s(d.F(b))}</b>.")
    p3 = P('$E(X)$ y $V(X)$.', alts_txt(f"$E(X)={t(d.E)}$ y $V(X)={t(d.V)}$", [f"$E(X)={t(d.E)}$ y $V(X)={t(d.E2)}$",
                                                                             f"$E(X)={t(c / 2)}$ y $V(X)={t(c * c / 12)}$", f"$E(X)={t(d.E2)}$ y $V(X)={t(d.V ** 0.5)}$"]),
           [f"$E(X)={t(d.E)}$, $E(X^2)={t(d.E2)}$", f"$V(X)={t(d.E2)}-{t(d.E)}^2={t(d.V)}$"], 'Varianza por la fórmula corta $E(X^2)-E(X)^2$.')
    p4 = P(f"Valor $x_0$ que solo es superado por el 10 % de los casos.", alts(d.q(p0), [p0 * c, d.q(0.1), c * p0 ** (n + 1)]),
           [f"$F_X(x_0)=0{{,}}9\\Rightarrow x_0={t(d.q(p0))}$"], f"$x_0={t(d.q(p0))}$.")
    p5 = P(f"Si $X>{t(a)}$, probabilidad de que $X>{t(b)}$.", alts((1 - d.F(b)) / (1 - d.F(a)), [1 - d.F(b), 1 - d.F(b - a), d.P(a, b)]),
           [f"$\\dfrac{{1-F_X({t(b)})}}{{1-F_X({t(a)})}}={t((1 - d.F(b)) / (1 - d.F(a)))}$"], f"<b>{s((1 - d.F(b)) / (1 - d.F(a)))}</b>.")
    return CASO('Caso con integrales: densidad completa', ctx, enun, [p1, p2, p3, p4, p5], sub='Con integrales')


def generar(rng):
    qs = []
    for fn, n in [(area_k, 10), (area_p, 16), (area_percentil, 10), (F_dada, 14), (punto, 5),
                  (int_k, 10), (int_p, 12), (int_F, 8), (int_EV, 12), (int_percentil, 10), (int_cond, 8), (truncar, 8), (g_lineal, 8)]:
        qs += variantes(rng, fn, n)
    for fn, n in [(caso_areas, 4), (caso_integrales, 4)]:
        qs += variantes(rng, fn, n)
    return qs
