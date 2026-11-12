"""Gato Bivariado: vectores aleatorios (X, Y).
Discreto (tabla conjunta): marginales, condicionales, independencia, E(XY), Cov, ρ, E y V de aX+bY.
Continuo sin integrales: (X, Y) uniforme en una región (áreas). Con integrales: f(x,y)=c(x+y) o c·xy en un rectángulo."""
from fractions import Fraction as Fr
from comun import Q, P, CASO, alts, alts_txt, t, s, variantes, frac

CTX = [('Retail · Ventas', 'el número de notebooks', 'el número de impresoras', 'vendidos en una hora'),
       ('Salud · Urgencias', 'el número de ingresos por accidente', 'el número de ingresos respiratorios', 'en una hora de un SAPU'),
       ('Banca · Atención', 'el número de clientes en caja', 'el número de clientes en plataforma', 'que llegan en 10 minutos'),
       ('Hogar · Familias', 'el número de hijos', 'el número de autos', 'de una familia elegida al azar'),
       ('Logística · Reclamos', 'el número de reclamos por retraso', 'el número de reclamos por daño', 'en un día')]

TABLAS = [  # probabilidades conjuntas (filas x = 0,1,2; columnas y = 0,1,2) en centésimas
    [[10, 10, 5], [15, 20, 10], [5, 10, 15]],
    [[12, 8, 0], [18, 22, 10], [5, 10, 15]],
    [[20, 10, 5], [10, 20, 10], [5, 5, 15]],
    [[6, 9, 15], [8, 12, 20], [6, 9, 15]],      # independiente
    [[5, 10, 10], [10, 25, 10], [10, 15, 5]],
    [[8, 12, 0], [12, 18, 10], [0, 20, 20]],
    [[3, 6, 6], [6, 12, 12], [11, 22, 22]],     # independiente
]


def _vec(rng):
    ctx, vx, vy, cuando = rng.choice(CTX)
    m = [[c / 100 for c in fila] for fila in rng.choice(TABLAS)]
    if rng.random() < 0.5:  # transponer para variar
        m = [list(r) for r in zip(*m)]
    xs = ys = [0, 1, 2]
    px = [sum(r) for r in m]
    py = [sum(m[i][j] for i in range(3)) for j in range(3)]
    EX = sum(x * p for x, p in zip(xs, px))
    EY = sum(y * p for y, p in zip(ys, py))
    EXY = sum(xs[i] * ys[j] * m[i][j] for i in range(3) for j in range(3))
    VX = sum(x * x * p for x, p in zip(xs, px)) - EX ** 2
    VY = sum(y * y * p for y, p in zip(ys, py)) - EY ** 2
    enun = f"Sea $X$ {vx} e $Y$ {vy} {cuando}. Su función de cuantía conjunta $p(x,y)=P(X=x,Y=y)$ es:"
    tabla = {'head': ['$x\\backslash y$', '0', '1', '2'], 'rows': [[str(x)] + [s(m[x][j], 2) for j in range(3)] for x in xs]}
    return dict(ctx=ctx, enun=enun, tabla=tabla, m=m, px=px, py=py, EX=EX, EY=EY, EXY=EXY, VX=VX, VY=VY, cov=EXY - EX * EY)


def fz(r):
    if abs(r) < 1e-9:
        return 'no hay relación lineal'
    return 'relación lineal ' + ('débil' if abs(r) < 0.3 else 'moderada' if abs(r) < 0.7 else 'fuerte') + (' directa' if r > 0 else ' inversa')


def marginal(rng):
    d = _vec(rng)
    x = rng.choice([0, 1, 2])
    if rng.random() < 0.5:
        v, ask = d['px'][x], f"¿Cuál es $P(X={x})$?"
        st = [f"Marginal de $X$: se suma la fila $x={x}$: ${'+'.join(t(c) for c in d['m'][x])}={t(v)}$"]
        dist = [d['py'][x], d['m'][x][x], d['px'][(x + 1) % 3], sum(d['px'][:x + 1])]
    else:
        v, ask = d['py'][x], f"¿Cuál es $P(Y={x})$?"
        st = [f"Marginal de $Y$: se suma la columna $y={x}$: ${'+'.join(t(d['m'][i][x]) for i in range(3))}={t(v)}$"]
        dist = [d['px'][x], d['m'][x][x], d['py'][(x + 1) % 3], sum(d['py'][:x + 1])]
    return Q('Marginales desde la conjunta', d['ctx'], d['enun'], ask, alts(v, dist), st, f"Resultado: <b>{s(v)}</b>.", table=d['tabla'], sub='Discreta (tabla)')


def evento(rng):
    d = _vec(rng)
    m = d['m']
    k = rng.choice(['suma', 'mayor', 'igual'])
    if k == 'suma':
        c = rng.choice([1, 2, 3])
        f, ask, cond = (lambda i, j: i + j <= c), f"¿Cuál es $P(X+Y\\le {c})$?", f"x+y\\le {c}"
    elif k == 'mayor':
        f, ask, cond = (lambda i, j: i > j), '¿Cuál es $P(X>Y)$?', 'x>y'
    else:
        f, ask, cond = (lambda i, j: i == j), '¿Cuál es $P(X=Y)$?', 'x=y'
    v = sum(m[i][j] for i in range(3) for j in range(3) if f(i, j))
    celdas = [f"p({i},{j})" for i in range(3) for j in range(3) if f(i, j)]
    st = [f"Se suman las celdas con ${cond}$: ${'+'.join(celdas)}={t(v)}$"]
    otros = [sum(m[i][j] for i in range(3) for j in range(3) if i < j), sum(m[i][i] for i in range(3)), 1 - v,
             sum(m[i][j] for i in range(3) for j in range(3) if i + j < 2)]
    return Q('Eventos con la conjunta', d['ctx'], d['enun'], ask, alts(v, otros), st, f"Resultado: <b>{s(v)}</b>.", table=d['tabla'], sub='Discreta (tabla)')


def condicional(rng):
    d = _vec(rng)
    x, y = rng.choice([0, 1, 2]), rng.choice([0, 1, 2])
    if d['px'][x] == 0 or d['m'][x][y] == 0:
        return None
    v = d['m'][x][y] / d['px'][x]
    st = [f"$P(Y={y}|X={x})=\\dfrac{{p({x},{y})}}{{P(X={x})}}=\\dfrac{{{t(d['m'][x][y])}}}{{{t(d['px'][x])}}}={t(v)}$"]
    return Q('Distribución condicional', d['ctx'], d['enun'], f"¿Cuál es $P(Y={y}|X={x})$?",
             alts(v, [d['m'][x][y], d['m'][x][y] / d['py'][y], d['py'][y], d['px'][x] * d['py'][y]]), st, f"Resultado: <b>{s(v)}</b>.",
             table=d['tabla'], sub='Discreta (tabla)')


def independencia(rng):
    d = _vec(rng)
    m, px, py = d['m'], d['px'], d['py']
    ind = all(abs(m[i][j] - px[i] * py[j]) < 1e-9 for i in range(3) for j in range(3))
    if ind:
        ok = "Son independientes: $p(x,y)=P(X=x)P(Y=y)$ en todas las celdas"
        st = [f"Por ejemplo $p(0,0)={t(m[0][0])}$ y $P(X=0)P(Y=0)={t(px[0])}\\cdot{t(py[0])}={t(px[0] * py[0])}$; lo mismo ocurre en las nueve celdas."]
    else:
        i, j = next((i, j) for i in range(3) for j in range(3) if abs(m[i][j] - px[i] * py[j]) > 1e-9)
        ok = f"No son independientes: $p({i},{j})={t(m[i][j])}\\ne P(X={i})P(Y={j})={t(px[i] * py[j])}$"
        st = [f"$P(X={i})={t(px[i])}$, $P(Y={j})={t(py[j])}$, producto ${t(px[i] * py[j])}$, distinto de $p({i},{j})={t(m[i][j])}$.",
              'Basta una celda donde no se cumpla para concluir dependencia.']
    malas = ["Son independientes porque las probabilidades conjuntas suman 1",
             "No son independientes porque alguna celda tiene probabilidad mayor que 0,1",
             "Son independientes porque $E(X)=E(Y)$" if not ind else "No son independientes porque $p(0,0)\\ne p(1,1)$"]
    return Q('Independencia de X e Y', d['ctx'], d['enun'], '¿Son independientes $X$ e $Y$?', alts_txt(ok, malas), st,
             'Independencia: la conjunta es el producto de las marginales en TODAS las celdas.', table=d['tabla'], sub='Discreta (tabla)')


def covarianza(rng):
    d = _vec(rng)
    k = rng.choice(['EXY', 'cov', 'rho'])
    rho = d['cov'] / (d['VX'] * d['VY']) ** 0.5
    val = {'EXY': d['EXY'], 'cov': d['cov'], 'rho': rho}[k]
    st = [f"$E(XY)=\\sum\\sum x\\,y\\,p(x,y)={t(d['EXY'])}$"]
    if k != 'EXY':
        st += [f"$E(X)={t(d['EX'])}$, $E(Y)={t(d['EY'])}$", f"$Cov(X,Y)=E(XY)-E(X)E(Y)={t(d['EXY'])}-{t(d['EX'])}\\cdot{t(d['EY'])}={t(d['cov'])}$"]
    if k == 'rho':
        st.append(f"$\\rho=\\dfrac{{Cov(X,Y)}}{{\\sqrt{{V(X)V(Y)}}}}=\\dfrac{{{t(d['cov'])}}}{{\\sqrt{{{t(d['VX'])}\\cdot{t(d['VY'])}}}}}={t(rho)}$")
    nombre = {'EXY': '$E(XY)$', 'cov': 'la covarianza $Cov(X,Y)$', 'rho': 'el coeficiente de correlación $\\rho(X,Y)$'}[k]
    conc = {'EXY': f"$E(XY)={t(d['EXY'])}$.",
            'cov': f"$Cov={t(d['cov'])}$: " + ('relación lineal directa.' if d['cov'] > 0 else 'relación lineal inversa.' if d['cov'] < 0 else 'no hay relación lineal.'),
            'rho': f"$\\rho={t(rho)}$: " + fz(rho) + '.'}[k]
    return Q('E(XY), covarianza y correlación', d['ctx'], d['enun'], f"¿Cuál es {nombre}?",
             alts(val, [d['EXY'], d['cov'], rho, d['EX'] * d['EY'], d['cov'] / (d['VX'] + d['VY']), -val if val else 0.1]), st, conc,
             table=d['tabla'], sub='Discreta (tabla)')


def combinacion(rng):
    d = _vec(rng)
    a, b = rng.choice([(1, 1), (2, 1), (1, -1), (3, 2), (1, 2)])
    k = rng.choice(['E', 'V'])
    nombre = f"{'' if a == 1 else a}X{'+' if b > 0 else '-'}{'' if abs(b) == 1 else abs(b)}Y"
    if k == 'E':
        v = a * d['EX'] + b * d['EY']
        st = [f"$E({nombre})={a}\\,E(X){'+' if b > 0 else '-'}{abs(b)}\\,E(Y)={a}\\cdot{t(d['EX'])}{'+' if b > 0 else '-'}{abs(b)}\\cdot{t(d['EY'])}={t(v)}$"]
        dist = [d['EX'] + d['EY'], a * d['EX'] - b * d['EY'], a * a * d['EX'] + b * b * d['EY']]
    else:
        v = a * a * d['VX'] + b * b * d['VY'] + 2 * a * b * d['cov']
        st = [f"$V(X)={t(d['VX'])}$, $V(Y)={t(d['VY'])}$, $Cov(X,Y)={t(d['cov'])}$",
              f"$V({nombre})={a * a}V(X)+{b * b}V(Y){'+' if a * b > 0 else '-'}{abs(2 * a * b)}Cov(X,Y)={t(v)}$"]
        dist = [a * a * d['VX'] + b * b * d['VY'], a * d['VX'] + b * d['VY'], a * a * d['VX'] + b * b * d['VY'] - 2 * a * b * d['cov'], abs(a) * d['VX'] + abs(b) * d['VY'] + 2 * d['cov']]
    return Q('E y V de una combinación lineal', d['ctx'], d['enun'], f"¿Cuál es ${'E' if k == 'E' else 'V'}({nombre})$?", alts(v, dist), st,
             f"Resultado: <b>{s(v)}</b>." + (' Si hubiera independencia, la covarianza sería 0.' if k == 'V' else ''), table=d['tabla'], sub='Discreta (tabla)')


# ---------------------------------------------------------------- continua
def uniforme_region(rng):
    a = rng.choice([1, 2, 3, 4])
    ctx = rng.choice(['Logística · Llegadas', 'Física · Señales', 'Vida diaria · Encuentros'])
    k = rng.choice(['xmenory', 'suma', 'ambos'])
    enun = f"El vector $(X,Y)$ es uniforme en el cuadrado $[0,{a}]\\times[0,{a}]$: su densidad es constante $f(x,y)=\\dfrac{{1}}{{{a * a}}}$. Responda con áreas."
    if k == 'xmenory':
        v, ask = 0.5, '¿Cuál es $P(X<Y)$?'
        st = ['La diagonal divide el cuadrado en dos triángulos iguales.', '$P(X<Y)=\\dfrac{1}{2}$']
        dist = [0.25, 1 / a, 1 / (a * a)]
    elif k == 'suma':
        c = rng.choice([x for x in [1, 2, 3, 4, 5] if 0 < x < a] or [a / 2])
        v = c * c / 2 / (a * a)
        ask = f"¿Cuál es $P(X+Y\\le {t(c)})$?"
        st = [f"Región $x+y\\le {t(c)}$: triángulo de catetos ${t(c)}$, área $\\dfrac{{{t(c)}^2}}{{2}}={t(c * c / 2)}$", f"$P=\\dfrac{{{t(c * c / 2)}}}{{{a * a}}}={t(v)}$"]
        dist = [c / a, c * c / (a * a), 1 - v, c / (2 * a)]
    else:
        c = rng.choice([x for x in [0.5, 1, 1.5, 2, 3] if 0 < x < a])
        v = (c / a) ** 2
        ask = f"¿Cuál es $P(X\\le {t(c)},\\ Y\\le {t(c)})$?"
        st = [f"Cuadrado $[0,{t(c)}]^2$ de área ${t(c * c)}$", f"$P=\\dfrac{{{t(c * c)}}}{{{a * a}}}={t(v)}$; también $=P(X\\le {t(c)})P(Y\\le {t(c)})$ porque son independientes."]
        dist = [c / a, 2 * c / a, 1 - v, c * c / (2 * a * a)]
    return Q('Uniforme en una región (áreas)', ctx, enun, ask, alts(v, dist), st, f"Resultado: <b>{s(v)}</b>.", sub='Continua sin integrales')


def _rect(rng):
    a, b = rng.choice([(1, 1), (1, 2), (2, 1), (2, 2)])
    forma = rng.choice(['suma', 'prod'])
    if forma == 'suma':  # f = c(x+y) en [0,a]x[0,b]
        integ = Fr(a * a * b, 2) + Fr(a * b * b, 2)
        c = 1 / integ
        EX = c * (Fr(a ** 3 * b, 3) + Fr(a * a * b * b, 4))
        EY = c * (Fr(a * a * b * b, 4) + Fr(a * b ** 3, 3))
        EXY = c * (Fr(a ** 3 * b * b, 6) + Fr(a * a * b ** 3, 6))
        ftex = 'c\\,(x+y)'
    else:  # f = c·xy
        integ = Fr(a * a, 2) * Fr(b * b, 2)
        c = 1 / integ
        EX, EY = Fr(2 * a, 3), Fr(2 * b, 3)
        EXY = EX * EY
        ftex = 'c\\,xy'
    return a, b, forma, c, EX, EY, EXY, ftex


def continua_int(rng):
    a, b, forma, c, EX, EY, EXY, ftex = _rect(rng)
    ctx = rng.choice(['Industria · Componentes', 'Finanzas · Rendimientos', 'Agro · Riego'])
    enun = f"El vector $(X,Y)$ tiene densidad conjunta $f(x,y)={ftex}$ para $0\\le x\\le {a}$, $0\\le y\\le {b}$, y $0$ en otro caso."
    k = rng.choice(['c', 'EX', 'cov', 'indep'])
    if k == 'c':
        v = float(c)
        integ = f"\\int_0^{{{b}}}\\!\\int_0^{{{a}}} {'(x+y)' if forma == 'suma' else 'xy'}\\,dx\\,dy={1 / c}"
        return Q('Constante de la densidad conjunta', ctx, enun, '¿Cuál es el valor de $c$?', alts(v, [1 / (a * b), 2 / (a * b), float(c) * 2, float(c) / 2]),
                 [f"${integ}$", f"$c\\cdot{1 / c}=1\\Rightarrow c={frac(c.numerator, c.denominator) if c.denominator != 1 else c.numerator}$"], f"$c={frac(c.numerator, c.denominator) if c.denominator != 1 else c.numerator}$.", sub='Continua con integrales')
    if k == 'EX':
        v = float(EX)
        marg = (f"$f_X(x)=\\int_0^{{{b}}} c(x+y)\\,dy=c\\left({b}x+\\dfrac{{{b * b}}}{{2}}\\right)$" if forma == 'suma'
                else f"$f_X(x)=\\int_0^{{{b}}} c\\,xy\\,dy=\\dfrac{{2x}}{{{a * a}}}$")
        return Q('Marginal y esperanza (integral)', ctx, enun + f" (Use $c={frac(c.numerator, c.denominator)}$.)", '¿Cuál es $E(X)$?',
                 alts(v, [a / 2, float(EY) if EY != EX else a / 3, float(EXY), a * 0.75]), [marg, f"$E(X)=\\int_0^{{{a}}} x\\,f_X(x)\\,dx={t(v)}$"],
                 f"$E(X)={t(v)}$.", sub='Continua con integrales')
    if k == 'cov':
        v = float(EXY - EX * EY)
        return Q('Covarianza con integrales', ctx, enun + f" (Use $c={frac(c.numerator, c.denominator)}$.)", '¿Cuál es $Cov(X,Y)$?',
                 alts(v, [float(EXY), float(EX * EY), -v if v else 0.05, float(EXY) / 2]),
                 [f"$E(X)={t(float(EX))}$, $E(Y)={t(float(EY))}$", f"$E(XY)=\\iint xy\\,f(x,y)\\,dx\\,dy={t(float(EXY))}$", f"$Cov=E(XY)-E(X)E(Y)={t(v)}$"],
                 f"$Cov(X,Y)={t(v)}$" + (': no hay relación lineal (son independientes).' if abs(v) < 1e-12 else '.'), sub='Continua con integrales')
    ind = forma == 'prod'
    ok = ("Sí: la densidad se factoriza $c\\,xy=g(x)h(y)$ en un rectángulo" if ind else "No: $c(x+y)$ no se puede escribir como $g(x)h(y)$")
    malas = ["Sí: el recorrido es un rectángulo, así que siempre son independientes", "No: toda densidad conjunta implica dependencia",
             "Sí: porque $E(X)=E(Y)$" if not ind else "No: porque $c\\ne 1$"]
    return Q('Independencia en el caso continuo', ctx, enun, '¿Son independientes $X$ e $Y$?', alts_txt(ok, malas),
             ["$X$ e $Y$ son independientes si $f(x,y)=f_X(x)f_Y(y)$ para todo $(x,y)$.", ok + '.'],
             'Criterio práctico: soporte rectangular y densidad factorizable en una parte de $x$ por una de $y$.', sub='Continua con integrales')


def caso_tabla(rng):
    d = _vec(rng)
    m, px, py = d['m'], d['px'], d['py']
    x = rng.choice([1, 2])
    rho = d['cov'] / (d['VX'] * d['VY']) ** 0.5
    p1 = P(f"$P(X={x})$.", alts(px[x], [py[x], m[x][x], sum(px[:x + 1])]), [f"Suma de la fila $x={x}$: ${t(px[x])}$"], f"<b>{s(px[x])}</b>.")
    y = 1
    v2 = m[x][y] / px[x]
    p2 = P(f"$P(Y={y}|X={x})$.", alts(v2, [m[x][y], m[x][y] / py[y], py[y]]), [f"$\\dfrac{{p({x},{y})}}{{P(X={x})}}=\\dfrac{{{t(m[x][y])}}}{{{t(px[x])}}}={t(v2)}$"], f"<b>{s(v2)}</b>.")
    p3 = P('$E(X)$ y $E(Y)$.', alts_txt(f"$E(X)={t(d['EX'])}$ y $E(Y)={t(d['EY'])}$",
                                         [f"$E(X)={t(d['EY'])}$ y $E(Y)={t(d['EX'])}$" if d['EX'] != d['EY'] else f"$E(X)={t(d['EX'] + 0.1)}$ y $E(Y)={t(d['EY'])}$",
                                          "$E(X)=1$ y $E(Y)=1$", f"$E(X)={t(d['EXY'])}$ y $E(Y)={t(d['EX'] * d['EY'])}$"]),
           [f"$E(X)=\\sum x\\,P(X=x)={t(d['EX'])}$", f"$E(Y)=\\sum y\\,P(Y=y)={t(d['EY'])}$"], 'Se usan las marginales.')
    p4 = P('$Cov(X,Y)$.', alts(d['cov'], [d['EXY'], d['EX'] * d['EY'], -d['cov'] if d['cov'] else 0.1]),
           [f"$E(XY)={t(d['EXY'])}$", f"$Cov={t(d['EXY'])}-{t(d['EX'])}\\cdot{t(d['EY'])}={t(d['cov'])}$"], f"$Cov={t(d['cov'])}$.")
    p5 = P('$\\rho(X,Y)$ e interpretación.', alts_txt(f"$\\rho={t(rho)}$: " + fz(rho),
                                                       [f"$\\rho={t(d['cov'])}$: relación lineal perfecta", f"$\\rho={t(-rho if rho else 0.5)}$: relación lineal inversa" if rho >= 0 else f"$\\rho={t(-rho)}$: relación lineal directa",
                                                        "$\\rho=1$: las variables son independientes"]),
           [f"$\\rho=\\dfrac{{{t(d['cov'])}}}{{\\sqrt{{{t(d['VX'])}\\cdot{t(d['VY'])}}}}}={t(rho)}$"], 'El signo da la dirección; el valor absoluto, la fuerza.')
    return CASO('Caso: vector aleatorio discreto', d['ctx'], d['enun'], [p1, p2, p3, p4, p5], table=d['tabla'], sub='Discreta (tabla)')


def generar(rng):
    qs = []
    for fn, n in [(marginal, 10), (evento, 10), (condicional, 10), (independencia, 8), (covarianza, 14), (combinacion, 10),
                  (uniforme_region, 8), (continua_int, 14)]:
        qs += variantes(rng, fn, n)
    qs += variantes(rng, caso_tabla, 5)
    return qs


def caso_continua(rng):
    a, b = rng.choice([(1, 1), (1, 2), (2, 1), (2, 2)])
    integ = Fr(a * a * b, 2) + Fr(a * b * b, 2)
    c = 1 / integ
    EX = c * (Fr(a ** 3 * b, 3) + Fr(a * a * b * b, 4))
    EY = c * (Fr(a * a * b * b, 4) + Fr(a * b ** 3, 3))
    EXY = c * (Fr(a ** 3 * b * b, 6) + Fr(a * a * b ** 3, 6))
    ha, hb = Fr(a, 2), Fr(b, 2)
    pq = c * (ha * ha * hb / 2 + ha * hb * hb / 2)
    cs = frac(c.numerator, c.denominator)
    cp = '' if c == 1 else cs          # coeficiente que antecede a un paréntesis
    bx = 'x' if b == 1 else f'{b}x'
    ctx = rng.choice(['Industria · Componentes', 'Agro · Riego', 'Finanzas · Rendimientos'])
    enun = f"El vector $(X,Y)$ tiene densidad conjunta $f(x,y)=c\\,(x+y)$ para $0\\le x\\le {a}$, $0\\le y\\le {b}$, y $0$ en otro caso."
    p1 = P('Valor de $c$.', alts(float(c), [1 / (a * b), 2 / (a * b), float(c) * 2]),
           [f"$\\int_0^{{{b}}}\\!\\int_0^{{{a}}}(x+y)\\,dx\\,dy=\\dfrac{{{a}^2\\cdot{b}}}{{2}}+\\dfrac{{{a}\\cdot{b}^2}}{{2}}={frac(integ.numerator, integ.denominator)}$", f"$c={cs}$"], f"$c={cs}$.")
    p2 = P('Densidad marginal de $X$.', alts_txt(f"$f_X(x)={cp}\\left({bx}+{frac((Fr(b * b, 2)).numerator, (Fr(b * b, 2)).denominator)}\\right)$, $0\\le x\\le {a}$",
                                                [f"$f_X(x)={cp}\\,(x+y)$", f"$f_X(x)={cp}\\left(x+\\dfrac{{x^2}}{{2}}\\right)$", f"$f_X(x)={cp}\\,x$" if c != 1 else "$f_X(x)=2x$"]),
           [f"$f_X(x)=\\int_0^{{{b}}} c(x+y)\\,dy=c\\left({bx}+\\dfrac{{{b}^2}}{{2}}\\right)$"], 'La marginal se obtiene integrando la otra variable en todo su recorrido.')
    p3 = P('$E(X)$.', alts(float(EX), [a / 2, float(EY) if EY != EX else a / 3, float(EXY)]), [f"$E(X)=\\int_0^{{{a}}} x\\,f_X(x)\\,dx={t(float(EX))}$"], f"$E(X)={t(float(EX))}$.")
    p4 = P(f"$P(X\\le {t(float(ha))},\\ Y\\le {t(float(hb))})$.", alts(float(pq), [0.25, float(pq) * 2, 1 - float(pq)]),
           [f"$\\int_0^{{{t(float(hb))}}}\\!\\int_0^{{{t(float(ha))}}} c(x+y)\\,dx\\,dy={t(float(pq))}$"], f"<b>{s(float(pq))}</b>.")
    cov = float(EXY - EX * EY)
    p5 = P('$Cov(X,Y)$ e independencia.', alts_txt(f"$Cov={t(cov)}\\ne 0$: no son independientes", [f"$Cov=0$: son independientes", f"$Cov={t(float(EXY))}$: son independientes",
                                                                                                 f"$Cov={t(-cov)}$: relación directa"]),
           [f"$E(XY)={t(float(EXY))}$, $E(X)E(Y)={t(float(EX * EY))}$", f"$Cov={t(cov)}$; como no es 0, $X$ e $Y$ no son independientes."], 'Además $c(x+y)$ no se factoriza como $g(x)h(y)$.')
    return CASO('Caso: densidad conjunta continua', ctx, enun, [p1, p2, p3, p4, p5], sub='Continua con integrales')


_generar_base = generar


def generar(rng):
    return _generar_base(rng) + variantes(rng, caso_continua, 4)
