"""Pasa la materia de Ciencias del sitio (temas.json, de dump_temas.js) a los capítulos LaTeX del libro.

Cada área da un archivo cap_<area>.tex: una portadilla de la ciencia, un capítulo por unidad, una sección por tema
(las diapositivas full son subsecciones) y al final de cada tema el ejemplo tipo PAES resuelto.
El HTML de las clases usa pocas etiquetas; cualquier etiqueta, clase o carácter que no esté contemplado detiene el
script en vez de perderse en silencio.

Uso: node dump_temas.js && python html2tex.py
"""
import html, json, pathlib, re
from html.parser import HTMLParser
from motivaciones import MOTIV

AQUI = pathlib.Path(__file__).resolve().parent
ELECTIVO = {'qui_e_moleculas', 'qui_e_isomeros', 'qui_e_estequiometria', 'qui_e_soluciones'}  # igual que en paes.html
CARPETA = {'quimica': 'qui', 'fisica': 'fis', 'biologia': 'bio'}
TIPS = ('Truco', 'Atajo', 'Regla rápida', 'Para recordar el orden')  # cajas que pasan a globo de gatito
GATOS = [r'\gatonaranjo', r'\gatogris', r'\gatonegro', r'\gatoatigrado', r'\gatolila', r'\gatoblanco']

UNI = {'–': '--', '—': '---', '…': r'\dots{}', '→': r'\ensuremath{\rightarrow}', '−': r'\ensuremath{-}',
       '↔': r'\ensuremath{\leftrightarrow}', '≡': r'\ensuremath{\equiv}', '≠': r'\ensuremath{\neq}', '≈': r'\ensuremath{\approx}',
       'Ω': r'\ensuremath{\Omega}', 'π': r'\ensuremath{\pi}', 'σ': r'\ensuremath{\sigma}', 'Δ': r'\ensuremath{\Delta}',
       'λ': r'\ensuremath{\lambda}', '₁': r'\textsubscript{1}', '₂': r'\textsubscript{2}', '✔': r'\ding{52}', '✘': r'\ding{56}',
       '\u00a0': '~', '\u03bc': r'\ensuremath{\mu}', '\u03b1': r'\ensuremath{\alpha}', '\u03b2': r'\ensuremath{\beta}',
       '\u03b3': r'\ensuremath{\gamma}', '\u03b8': r'\ensuremath{\theta}', '\u03c1': r'\ensuremath{\rho}', '\u2264': r'\ensuremath{\leq}',
       '\u2265': r'\ensuremath{\geq}'}
ESC = {'\\': r'\textbackslash{}', '{': r'\{', '}': r'\}', '%': r'\%', '&': r'\&', '#': r'\#', '_': r'\_', '$': r'\$',
       '~': r'\textasciitilde{}', '^': r'\^{}'}
MATH = re.compile(r'\$\$(.+?)\$\$|\$(.+?)\$', re.S)


class Nodo:
    def __init__(self, tag, attrs):
        self.tag, self.attrs, self.hijos = tag, dict(attrs), []


class Arbol(HTMLParser):
    VACIAS = {'br', 'img'}

    def __init__(self):
        super().__init__()
        self.raiz = Nodo('raiz', [])
        self.pila = [self.raiz]

    def handle_starttag(self, tag, attrs):
        n = Nodo(tag, attrs)
        self.pila[-1].hijos.append(n)
        if tag not in self.VACIAS:
            self.pila.append(n)

    def handle_endtag(self, tag):
        if tag in self.VACIAS:
            return
        if self.pila[-1].tag != tag:
            raise ValueError(f'HTML mal cerrado: </{tag}> dentro de <{self.pila[-1].tag}>')
        self.pila.pop()

    def handle_data(self, data):
        self.pila[-1].hijos.append(data)


class Conversor:
    def __init__(self):
        self.mates, self.ngato = [], 0

    def arbol(self, h):
        """HTML -> árbol, con las fórmulas $...$ guardadas aparte para que el parser no toque sus < y &."""
        def guarda(m):
            dis = m.group(1) is not None
            x = html.unescape(m.group(1) if dis else m.group(2))
            x = re.sub(r'\\lt\b', '<', re.sub(r'\\gt\b', '>', x))
            x = x.replace(r'\,\%', r'\%')  # babel spanish ya pone el espacio fino antes de % (y con \, falla)
            self.mates.append(r'\[ ' + x + r' \]' if dis else '$' + x + '$')
            return f'\ue000{len(self.mates) - 1}\ue001'
        p = Arbol()
        p.feed(MATH.sub(guarda, h))
        p.close()
        return p.raiz

    def texto(self, s):
        s = re.sub(r'\s+', ' ', s)
        out = []
        for c in s:
            if c in ESC:
                out.append(ESC[c])
            elif c in UNI:
                out.append(UNI[c])
            elif ord(c) > 0xFF and c not in '\ue000\ue001':
                raise ValueError(f'carácter sin traducir: {c!r} U+{ord(c):04X} en «{s[:60]}»')
            else:
                out.append(c)
        return re.sub('\ue000(\\d+)\ue001', lambda m: self.mates[int(m.group(1))],''.join(out))

    def hijos(self, n, tabla=False):
        return ''.join(self.nodo(h, tabla) for h in n.hijos)

    def nodo(self, n, tabla=False):
        if isinstance(n, str):
            return self.texto(n)
        t, cls, sty = n.tag, n.attrs.get('class', ''), n.attrs.get('style', '')
        if t == 'b':
            return r'\textbf{' + self.hijos(n, tabla) + '}'
        if t == 'i':
            return r'\emph{' + self.hijos(n, tabla) + '}'
        if t == 'sub':
            return r'\textsubscript{' + self.hijos(n, tabla) + '}'
        if t == 'sup':
            return r'\textsuperscript{' + self.hijos(n, tabla) + '}'
        if t == 'span' and sty == 'color:#6e6e73':
            return r'\textcolor{gris}{' + self.hijos(n, tabla) + '}'
        if t == 'br':
            return r'\newline ' if tabla else '\\par '
        if t == 'p' and not cls:
            cuerpo = self.hijos(n).strip()
            if sty == 'text-align:center':
                return '\n\\begin{center}\n' + cuerpo + '\n\\end{center}\n'
            if not sty:
                return '\n\n' + cuerpo + '\n\n'
        if t in ('ul', 'ol') and not cls:
            env = 'itemize' if t == 'ul' else 'enumerate'
            items = []
            for h in n.hijos:
                if isinstance(h, str):
                    if h.strip():
                        raise ValueError(f'texto suelto en <{t}>: {h[:40]}')
                    continue
                if h.tag != 'li':
                    raise ValueError(f'<{h.tag}> dentro de <{t}>')
                items.append('  \\item ' + self.hijos(h).strip())
            return f'\n\\begin{{{env}}}\n' + '\n'.join(items) + f'\n\\end{{{env}}}\n'
        if t == 'div' and (cls == 'cols' or not (cls or sty)):  # columnas de la web: en el libro van una tras otra
            return self.hijos(n)
        if t == 'div' and cls == 'qfig':
            return '\n\\begin{center}\n' + self.hijos(n).strip() + '\n\\end{center}\n'
        if t == 'img' and cls == 'tikz':
            return self.imagen(n.attrs['src'])
        if t == 'div' and cls in ('box', 'box alert'):
            return self.caja(n, cls == 'box alert')
        if t == 'table' and not cls:
            filas = []
            for parte in n.hijos:
                if isinstance(parte, str):
                    continue
                if parte.tag not in ('thead', 'tbody'):
                    raise ValueError(f'<{parte.tag}> dentro de <table>')
                for tr in parte.hijos:
                    if isinstance(tr, str):
                        continue
                    celdas = [(c.tag, int(c.attrs.get('colspan', 1)), self.hijos(c, True).strip(), self.plano(c))
                              for c in tr.hijos if not isinstance(c, str)]
                    if any(c[0] not in ('th', 'td') for c in celdas):
                        raise ValueError('celda rara en tabla')
                    filas.append((parte.tag == 'thead', celdas))
            return self.tabla(filas)
        raise ValueError(f'etiqueta sin traducir: <{t} class="{cls}" style="{sty}">')

    def plano(self, n):
        return n if isinstance(n, str) else ''.join(self.plano(h) for h in n.hijos)

    def imagen(self, src):
        m = re.fullmatch(r'paes/(quimica|fisica|biologia)/fig/([\w-]+)\.svg', src)
        if not m:
            raise ValueError('imagen rara: ' + src)
        return r'\includegraphics[max width=0.92\linewidth,max height=8.5cm]{' + CARPETA[m.group(1)] + '/' + m.group(2) + '}'

    def caja(self, n, alerta):
        hs = [h for h in n.hijos if not (isinstance(h, str) and not h.strip())]
        titulo = ''
        if hs and not isinstance(hs[0], str) and hs[0].tag == 'b':
            titulo = self.hijos(hs[0]).strip()
            hs = hs[1:]
        cuerpo = ''.join(self.nodo(h) for h in hs).strip()
        cuerpo = re.sub(r'^(\\par\s*)+', '', cuerpo)
        plano = self.plano(n.hijos[0]) if not isinstance(n.hijos[0], str) else ''
        if alerta:
            return f'\n\\begin{{ojo}}[{{{titulo or "Ojo"}}}] {cuerpo}\\end{{ojo}}\n'
        if plano.startswith(TIPS):
            self.ngato += 1
            return f'\n\\gatotip[{GATOS[self.ngato % len(GATOS)]}]{{\\textbf{{{titulo}.}} {cuerpo}}}\n'
        if plano.startswith('Ejemplo'):
            return f'\n\\begin{{ejemplo}}[{{{titulo}}}] {cuerpo}\\end{{ejemplo}}\n'
        return f'\n\\begin{{clave}}[{{{titulo}}}] {cuerpo}\\end{{clave}}\n'

    def tabla(self, filas):
        ncol = max(sum(c[1] for c in f) for _, f in filas)
        ancho, palabra = [0] * ncol, [0] * ncol
        for _, f in filas:
            i = 0
            for c in f:
                if c[1] == 1:
                    ancho[i] = max(ancho[i], len(c[3]))
                    palabra[i] = max([palabra[i]] + [len(w) for w in c[3].split()])
                i += c[1]
        larga = sum(ancho) > 62 or any('\\newline' in c[2] for _, f in filas for c in f)
        if larga:
            # ancho de cada columna según su texto más largo (tope 40), sin bajar de su palabra más larga
            peso = [max(min(a, 40), p + 3) for a, p in zip(ancho, palabra)]
            fmt = ''.join(r'>{\raggedright\arraybackslash\hsize=%.2f\hsize}X' % (ncol * w / sum(peso)) for w in peso)
            ini, fin = r'\begin{tabularx}{\linewidth}{@{}' + fmt + '@{}}', r'\end{tabularx}'
        else:
            ini, fin = r'\begin{tabular}{@{}' + 'l' * ncol + '@{}}', r'\end{tabular}'
        lineas = [r'\toprule']
        cab = True
        for es_cab, f in filas:
            if cab and not es_cab:
                lineas.append(r'\midrule')
                cab = False
            celdas = []
            for tag, span, tex, _ in f:
                tex = r'\textbf{' + tex + '}' if tag == 'th' and tex else tex
                celdas.append(r'\multicolumn{%d}{@{}l@{}}{%s}' % (span, tex) if span > 1 else tex)
            lineas.append(' & '.join(celdas) + r' \\')
        lineas.append(r'\bottomrule')
        return '\n\\begin{center}\\small\n' + ini + '\n' + '\n'.join(lineas) + '\n' + fin + '\n\\end{center}\n'

    def html(self, h):
        tex = self.hijos(self.arbol(h)).strip()
        return re.sub(r'\n{3,}', '\n\n', tex)

    def ejemplo(self, e):
        out = [r'\begin{elejemplo}{' + self.html(e['src']) + '}', self.html(e['enun'])]
        f = e.get('fig')
        if f:
            if f['type'] == 'img':
                out.append('\\begin{center}\n' + self.imagen(f['src']) + '\n\\end{center}')
            elif f['type'] == 'table':
                filas = [(True, [('th', 1, self.html(x), x) for x in f['head']])]
                filas += [(False, [('th' if i == 0 else 'td', 1, self.html(x), x) for i, x in enumerate(r)]) for r in f['rows']]
                out.append(self.tabla(filas).strip())
            else:
                raise ValueError('figura sin traducir: ' + f['type'])
            if f.get('cap'):
                out.append(r'{\centering\small\color{gris}' + self.html(f['cap']) + r'\par}')
        alts = [self.html(a) for a in e['alts']]
        if len(alts) != 4:
            raise ValueError('el ejemplo no tiene 4 alternativas')
        larga = max(len(re.sub(r'\\\w+|[{}$]', '', a)) for a in alts) > 38
        out.append((r'\altslargas' if larga else r'\alts') + ''.join('{' + a + '}' for a in alts))
        sol = self.html(e['sol'])
        if e.get('conc'):
            sol += '\n\n' + r'\textbf{\color{cienciaD}Para recordar.} ' + self.html(e['conc'])
        out.append(r'\solucion{' + sol + '}{' + 'ABCD'[e['ok']] + '}')
        out.append(r'\end{elejemplo}')
        return '\n'.join(out)


def tema(cv, t):
    mod = r'\modmencion' if t['id'] in ELECTIVO else r'\modcomun'
    titulo = cv.html(t['title'])
    corto = titulo + (' (Mención)' if t['id'] in ELECTIVO else '')
    out = ['%% ' + '=' * 69, f'%% {t["id"]}', f'\\section[{corto}]{{{titulo}}}',
           mod + r'\ \ {\color{gris}\itshape ' + cv.html(t['desc']) + r'\par}']
    for s in t['slides']:
        out.append(r'\subsection{' + cv.html(s['t']) + '}')
        out.append(cv.html(s['b']))
    out.append(cv.ejemplo(t['example']))
    out.append(r'\motivacion{' + MOTIV[t['id']] + '}')
    return '\n'.join(out) + '\n'


INTRO = {  # párrafo de entrada de cada capítulo, por unidad
    'Profundización electivo': r'Este capítulo es \textbf{solo para la Mención Química}: sus temas no salen en el Módulo Común, únicamente en las 26 preguntas del Módulo Electivo. Profundiza lo de los capítulos anteriores con moléculas más complejas, isómeros y problemas de estequiometría y soluciones en varios pasos.',
}
TITULO = {'Profundización electivo': 'Solo Mención Química'}
CABEZA = {'Profundización electivo': 'Química · Solo Mención'}  # encabezado distinto desde ese capítulo


def area(clave, temas, archivo):
    cv = Conversor()
    out = [f'%% Generado por html2tex.py desde temas.json ({clave}). No editar a mano: corregir la clase en el .js del sitio y regenerar.',
           f'\\parteciencia{{{clave}}}']
    unidad = None
    for t in temas:
        if t['unit'] != unidad:
            unidad = t['unit']
            nombre = unidad.split(' · ', 1)[1]
            if nombre in CABEZA:
                out.append(r'\clearpage\renewcommand{\cabeza}{' + CABEZA[nombre] + '}')
            out.append(f'\\chapter{{{TITULO.get(nombre, nombre)}}}')
            if nombre in INTRO:
                out.append(INTRO[nombre] + '\n')
        out.append(tema(cv, t))
    tex = '\n'.join(out)
    (AQUI / archivo).write_text(tex, encoding='utf8')
    return tex


if __name__ == '__main__':
    d = json.loads((AQUI / 'temas.json').read_text(encoding='utf8'))
    ids = {t['id'] for v in d.values() for t in v}
    assert ids == set(MOTIV), f'temas sin mensaje: {ids - set(MOTIV)}; mensajes sin tema: {set(MOTIV) - ids}'
    for clave, archivo in (('qui', 'cap_quimica.tex'), ('fis', 'cap_fisica.tex'), ('bio', 'cap_biologia.tex')):
        tex = area(clave, d[clave], archivo)
        assert not re.search('[\ue000\ue001]', tex)
        print(f'{archivo}: {len(d[clave])} temas, {len(tex) // 1024} KB')
