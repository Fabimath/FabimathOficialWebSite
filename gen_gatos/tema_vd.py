"""Gato Aleatorio Discreto: cuantía, constante k, acumulada, E(X), V(X), transformaciones,
cuantía desde eventos independientes y condicionales. Estilo: Cátedra 2 P2 AES500, Tutoría 5, Guía 3 MAT033."""
from fractions import Fraction as Fr
from itertools import product
from comun import Q, P, CASO, alts, alts_txt, t, s, variantes, frac

CTX = [('Retail · Bicicletas', 'el número de bicicletas arrendadas en una hora', 'bicicletas', 4000),
       ('Servicio al cliente', 'el número de reclamos recibidos en una hora', 'reclamos', -8000),
       ('Pastelería', 'el número de tortas vendidas en una mañana', 'tortas', 12000),
       ('Logística', 'el número de despachos con retraso en un día', 'despachos', -20000),
       ('Salud · Urgencias', 'el número de ingresos por accidente en un turno', 'ingresos', -50000),
       ('E-commerce', 'el número de devoluciones diarias de una tienda en línea', 'devoluciones', -6000),
       ('Automotora', 'el número de autos vendidos en una semana', 'autos', 400000)]

PROBS = [(0.35, 0.3, 0.2, 0.15), (0.15, 0.25, 0.35, 0.25), (0.2, 0.3, 0.3, 0.2), (0.05, 0.25, 0.4, 0.3),
         (0.3, 0.3, 0.25, 0.15), (0.1, 0.15, 0.2, 0.25, 0.3), (0.25, 0.35, 0.2, 0.15, 0.05), (0.05, 0.1, 0.4, 0.3, 0.15)]


def _tabla(xs, ps, lbl='$f_X(x)$'):
    return {'head': ['$x$'] + [str(x) for x in xs], 'rows': [[lbl] + [s(p, 4) for p in ps]]}


def _va(rng):
    ctx, var, unid, gan = rng.choice(CTX)
    ps = rng.choice(PROBS)
    x0 = rng.choice([0, 1])
    xs = list(range(x0, x0 + len(ps)))
    E = sum(x * p for x, p in zip(xs, ps))
    E2 = sum(x * x * p for x, p in zip(xs, ps))
    return ctx, var, unid, gan, xs, list(ps), E, E2, E2 - E * E


def _ev(xs, ps, lo, hi):  # P(lo <= X <= hi)
    return sum(p for x, p in zip(xs, ps) if lo <= x <= hi)


def probas(rng):
    ctx, var, unid, gan, xs, ps, E, E2, V = _va(rng)
    a = rng.choice(xs[1:-1])
    b = rng.choice([x for x in xs if x > a] or [a])
    tipos = [(f"P(X\\ge {a})", _ev(xs, ps, a, 99), f"al menos {a} {unid}", f"suma de $f_X(x)$ para $x\\ge {a}$"),
             (f"P(X< {a})", _ev(xs, ps, -99, a - 1), f"menos de {a} {unid}", f"suma para $x\\le {a - 1}$ (el $<$ excluye a ${a}$)"),
             (f"P({a}\\le X\\le {b})", _ev(xs, ps, a, b), f"entre {a} y {b} {unid}, inclusive", f"suma para ${a}\\le x\\le {b}$"),
             (f"P(X> {a})", _ev(xs, ps, a + 1, 99), f"más de {a} {unid}", f"suma para $x\\ge {a + 1}$")]
    expr, v, txt, como = rng.choice(tipos)
    dist = [_ev(xs, ps, a, 99), _ev(xs, ps, -99, a - 1), _ev(xs, ps, a + 1, 99), _ev(xs, ps, -99, a), _ev(xs, ps, a, b), _ev(xs, ps, a + 1, b)]
    enun = f"Sea $X$ {var}. Su función de cuantía $f_X(x)=P(X=x)$ es:"
    return Q('Probabilidades desde la cuantía', ctx, enun, f"¿Cuál es ${expr}$, la probabilidad de {txt}?", alts(v, dist),
             [f"${expr}$: {como}.", f"${expr}={t(v)}$"], f"La probabilidad de {txt} es <b>{s(v)}</b>.", table=_tabla(xs, ps), sub='Cuantía y acumulada')


def constante(rng):
    ctx, var, unid, gan = rng.choice(CTX)
    forma = rng.choice(['lineal', 'tabla'])
    if forma == 'lineal':
        n = rng.choice([3, 4, 5])
        c = rng.choice([1, 2])
        xs = list(range(0, n + 1))
        S = sum(x + c for x in xs)
        k = Fr(1, S)
        enun = f"Sea $X$ {var}, con función de cuantía $f_X(x)=k\\,(x+{c})$ para $x\\in\\{{{','.join(map(str, xs))}\\}}$ y $0$ en otro caso."
        st = [f"La suma de la cuantía debe ser 1: $k\\sum_x (x+{c})=k({'+'.join(str(x + c) for x in xs)})={S}k=1$", f"$k={frac(1, S)}={t(1 / S)}$"]
        dist = [1 / (S - c), 1 / len(xs), 1 / sum(xs) if sum(xs) else 0.3, c / S]
    else:
        m = rng.choice([(1, 3, 2, 2), (1, 1, 2, 4), (2, 3, 4, 1), (1, 2, 2, 3), (3, 2, 1, 2)])
        xs = list(range(1, 5))
        S = sum(m)
        k = Fr(1, S)
        coef = ['k' if c == 1 else f'{c}k' for c in m]
        enun = f"Sea $X$ {var}. Su cuantía es $f_X(1)={coef[0]}$, $f_X(2)={coef[1]}$, $f_X(3)={coef[2]}$ y $f_X(4)={coef[3]}$."
        st = [f"${'+'.join(coef)}={S}k=1$", f"$k={frac(1, S)}={t(1 / S)}$"]
        dist = [1 / 4, 1 / (S + 1), 1 / (S - 1), max(m) / S]
    return Q('Constante k de la cuantía', ctx, enun, '¿Cuál es el valor de $k$ que hace de $f_X$ una función de cuantía?',
             alts(float(k), dist), st, f"$k={frac(1, S)}\\approx {t(1 / S)}$, porque las probabilidades deben sumar 1.", sub='Cuantía y acumulada')


def desde_F(rng):
    ctx, var, unid, gan, xs, ps, E, E2, V = _va(rng)
    F = [sum(ps[:i + 1]) for i in range(len(ps))]
    i = rng.randrange(1, len(xs))
    v = ps[i]
    tabla = {'head': ['$x$'] + [str(x) for x in xs], 'rows': [['$F_X(x)$'] + [s(f, 4) for f in F]]}
    enun = f"Sea $X$ {var}. Se conoce su función de distribución acumulada $F_X(x)=P(X\\le x)$ en los valores del recorrido:"
    st = [f"La cuantía es el salto de $F$: $P(X={xs[i]})=F_X({xs[i]})-F_X({xs[i - 1]})={t(F[i])}-{t(F[i - 1])}={t(v)}$"]
    return Q('Cuantía desde la acumulada', ctx, enun, f"¿Cuál es $P(X={xs[i]})$?", alts(v, [F[i], F[i - 1], 1 - F[i], F[i] + F[i - 1] - 1 if F[i] + F[i - 1] > 1 else F[i] / 2]),
             st, f"$P(X={xs[i]})={t(v)}$.", table=tabla, sub='Cuantía y acumulada')


def acumulada(rng):
    ctx, var, unid, gan, xs, ps, E, E2, V = _va(rng)
    x = rng.choice(xs[:-1]) + 0.5
    v = _ev(xs, ps, -99, x)
    enun = f"Sea $X$ {var}, con la cuantía de la tabla."
    st = [f"$F_X({t(x, 1)})=P(X\\le {t(x, 1)})=\\sum_{{x_i\\le {t(x, 1)}}} f_X(x_i)={t(v)}$", "Entre dos valores del recorrido la acumulada no cambia (es escalonada)."]
    return Q('Función acumulada F(x)', ctx, enun, f"¿Cuánto vale $F_X({t(x, 1)})$?", alts(v, [_ev(xs, ps, -99, x + 1), _ev(xs, ps, -99, x - 1), 1 - v, ps[xs.index(int(x))]]),
             st, f"$F_X({t(x, 1)})={t(v)}$.", table=_tabla(xs, ps), sub='Cuantía y acumulada')


def esperanza(rng):
    ctx, var, unid, gan, xs, ps, E, E2, V = _va(rng)
    terms = '+'.join(f"{x}\\cdot{t(p)}" for x, p in zip(xs, ps))
    return Q('Esperanza E(X)', ctx, f"Sea $X$ {var}, con la cuantía de la tabla.", '¿Cuál es el valor esperado $E(X)$?',
             alts(E, [sum(xs) / len(xs), E2, sum(ps) * max(xs) / 2, xs[ps.index(max(ps))], E + 0.5]),
             [f"$E(X)=\\sum x\\,f_X(x)={terms}={t(E)}$"],
             f"$E(X)={t(E)}$: en promedio, a la larga, se esperan {s(E)} {unid} por período (no tiene que ser un valor posible).",
             table=_tabla(xs, ps), sub='Esperanza y varianza')


def varianza(rng):
    ctx, var, unid, gan, xs, ps, E, E2, V = _va(rng)
    k = rng.choice(['V', 'de', 'CV'])
    val = {'V': V, 'de': V ** 0.5, 'CV': V ** 0.5 / E}[k]
    st = [f"$E(X)={t(E)}$", f"$E(X^2)=\\sum x^2 f_X(x)={'+'.join(f'{x * x}\\cdot{t(p)}' for x, p in zip(xs, ps))}={t(E2)}$",
          f"$V(X)=E(X^2)-E(X)^2={t(E2)}-{t(E)}^2={t(V)}$"]
    if k == 'de':
        st.append(f"$d.e.(X)=\\sqrt{{{t(V)}}}={t(val)}$")
    if k == 'CV':
        st.append(f"$CV=\\dfrac{{d.e.(X)}}{{E(X)}}=\\dfrac{{{t(V ** 0.5)}}}{{{t(E)}}}={t(val)}$")
    nombre = {'V': 'la varianza $V(X)$', 'de': 'la desviación estándar $d.e.(X)$', 'CV': 'el coeficiente de variación $CV(X)$'}[k]
    dist = [V, V ** 0.5, E2, E2 - E, V / E, V ** 0.5 / E, E2 ** 0.5]
    return Q('Varianza y desviación estándar', ctx, f"Sea $X$ {var}, con la cuantía de la tabla.", f"¿Cuál es {nombre}?",
             alts(val, dist), st, f"El resultado es <b>{s(val)}</b>.", table=_tabla(xs, ps), sub='Esperanza y varianza')


def lineal(rng):
    ctx, var, unid, gan, xs, ps, E, E2, V = _va(rng)
    a = abs(gan)
    c = rng.choice([5000, 10000, 20000, 30000]) if a < 100000 else 500000
    signo = gan > 0
    k = rng.choice(['E', 'V', 'de'])
    if signo:
        desc = f"La utilidad del período es $G={s(a, 0)}\\,X-{s(c, 0)}$ pesos"
        b0, b1 = -c, a
    else:
        desc = f"El costo asociado es $C={s(c, 0)}+{s(a, 0)}\\,X$ pesos"
        b0, b1 = c, a
    Y = 'G' if signo else 'C'
    EY, VY = b0 + b1 * E, b1 * b1 * V
    val = {'E': EY, 'V': VY, 'de': b1 * V ** 0.5}[k]
    fm = lambda v: f"${t(v, 2)}$"
    st = [f"$E(X)={t(E)}$ y $V(X)={t(V)}$ (de la tabla)."]
    if k == 'E':
        st.append(f"$E({Y})={b1}\\,E(X){'+' if b0 > 0 else '-'}{abs(b0)}={b1}\\cdot{t(E)}{'+' if b0 > 0 else '-'}{abs(b0)}={t(EY, 2)}$")
        dist = [b1 * E, b1 * E - b0, VY, b1 * E2 + b0]
    elif k == 'V':
        st.append(f"$V({Y})={b1}^2\\,V(X)={b1 * b1}\\cdot{t(V)}={t(VY, 2)}$ (la constante no cambia la varianza)")
        dist = [b1 * V, b1 * b1 * V + b0, b1 * b1 * V + b0 * b0, (b1 * V) ** 2 / 3]
    else:
        st.append(f"$d.e.({Y})=|{b1}|\\cdot d.e.(X)={b1}\\cdot\\sqrt{{{t(V)}}}={t(val, 2)}$")
        dist = [b1 * V, (b1 * b1 * V) ** 0.5 + abs(b0), (b1 * V) ** 0.5, b1 * b1 * V]
    nombre = {'E': f'el valor esperado $E({Y})$', 'V': f'la varianza $V({Y})$', 'de': f'la desviación estándar de ${Y}$'}[k]
    return Q('Transformación lineal: ganancia o costo', ctx, f"Sea $X$ {var}, con la cuantía de la tabla. {desc}.",
             f"¿Cuál es {nombre}?", alts(val, dist, fmt=fm, rel=0.01), st,
             f"Resultado: <b>{s(val, 2)}</b>. Propiedades: $E(aX+b)=aE(X)+b$ y $V(aX+b)=a^2V(X)$.", table=_tabla(xs, ps), sub='Esperanza y varianza')


SIST = [('Banca · Medios de pago', 'medios de pago', 'disponibles', 'esté disponible'),
        ('Salud · Turnos', 'médicos de turno', 'que llegan a tiempo', 'llegue a tiempo'),
        ('Logística · Proveedores', 'proveedores', 'que entregan a tiempo', 'entregue a tiempo'),
        ('Tecnología', 'servidores', 'funcionando', 'esté funcionando')]


def eventos_va(rng):
    ctx, cosas, adj, cond = rng.choice(SIST)
    ps = [rng.choice([0.7, 0.75, 0.8, 0.85, 0.9]) for _ in range(3)]
    dist_ = {k: 0.0 for k in range(4)}
    for bits in product([0, 1], repeat=3):
        pr = 1
        for b, p in zip(bits, ps):
            pr *= p if b else 1 - p
        dist_[sum(bits)] += pr
    k = rng.choice([0, 1, 2, 3, 'E'])
    enun = (f"Tres {cosas} operan de forma independiente. Las probabilidades de que cada uno {cond} son "
            f"${t(ps[0])}$, ${t(ps[1])}$ y ${t(ps[2])}$. Sea $X$ el número de {cosas} {adj}.")
    if k == 'E':
        v = sum(ps)
        ask = '¿Cuál es $E(X)$?'
        st = [f"$X=I_1+I_2+I_3$ (indicadoras), luego $E(X)={t(ps[0])}+{t(ps[1])}+{t(ps[2])}={t(v)}$"]
        dist = [3 * max(ps), ps[0] * ps[1] * ps[2] * 3, sum(dist_[j] for j in (2, 3)) * 3, 1.5]
    else:
        v = dist_[k]
        ask = f"¿Cuál es $P(X={k})$?"
        st = [f"$P(X={k})$ suma los casos con exactamente {k} {cosas} {adj}, multiplicando por independencia.", f"$P(X={k})={t(v)}$"]
        dist = [dist_[j] for j in range(4) if j != k] + [ps[0] * ps[1] * ps[2], 1 - v]
    return Q('Cuantía desde eventos independientes', ctx, enun, ask, alts(v, dist), st, f"Resultado: <b>{s(v)}</b>.", sub='Cuantía y acumulada')


def condicional(rng):
    ctx, var, unid, gan, xs, ps, E, E2, V = _va(rng)
    a = rng.choice(xs[1:-1])
    b = a + 1
    num, den = _ev(xs, ps, b, 99), _ev(xs, ps, a, 99)
    v = num / den
    st = [f"$P(X\\ge {b}|X\\ge {a})=\\dfrac{{P(X\\ge {b})}}{{P(X\\ge {a})}}=\\dfrac{{{t(num)}}}{{{t(den)}}}={t(v)}$",
          f"El evento $X\\ge {b}$ está contenido en $X\\ge {a}$, por eso la intersección es $X\\ge {b}$."]
    return Q('Probabilidad condicional', ctx, f"Sea $X$ {var}, con la cuantía de la tabla.",
             f"Si ya se sabe que hubo al menos {a} {unid}, ¿cuál es la probabilidad de que haya al menos {b}?",
             alts(v, [num, num * den, den, 1 - v, ps[xs.index(b)] / den]), st, f"Resultado: <b>{s(v)}</b>.", table=_tabla(xs, ps), sub='Esperanza y varianza')


def limites_ev(rng):
    ctx, var, unid, gan, xs, ps, E, E2, V = _va(rng)
    d = V ** 0.5
    lo, hi = E - d, E + d
    v = sum(p for x, p in zip(xs, ps) if lo < x < hi)
    st = [f"$E(X)={t(E)}$, $d.e.(X)={t(d)}$, intervalo $({t(lo)};\\ {t(hi)})$.",
          f"Valores enteros dentro: {', '.join(str(x) for x in xs if lo < x < hi) or 'ninguno'}.", f"$P={t(v)}$"]
    return Q('Eventos con E(X) y d.e.(X)', ctx, f"Sea $X$ {var}, con la cuantía de la tabla.",
             '¿Cuál es $P\\big(E(X)-d.e.(X)<X<E(X)+d.e.(X)\\big)$?',
             alts(v, [sum(p for x, p in zip(xs, ps) if lo <= x + 1 and x - 1 <= hi), 0.68, 1 - v, sum(p for x, p in zip(xs, ps) if x < hi)]),
             st, f"Primero se calculan los límites con $E(X)$ y $V(X)$ y luego se suman las probabilidades de los valores dentro. Resultado: <b>{s(v)}</b>.",
             table=_tabla(xs, ps), sub='Esperanza y varianza')


def caso(rng):
    ctx, var, unid, gan, xs, ps, E, E2, V = _va(rng)
    if gan < 0:
        return None
    a = rng.choice(xs[1:-1])
    p1 = P(f"Probabilidad de vender al menos {a} {unid}.", alts(_ev(xs, ps, a, 99), [_ev(xs, ps, a + 1, 99), _ev(xs, ps, -99, a), _ev(xs, ps, -99, a - 1)]),
           [f"$P(X\\ge {a})={t(_ev(xs, ps, a, 99))}$"], f"<b>{s(_ev(xs, ps, a, 99))}</b>.")
    p2 = P("Valor esperado $E(X)$.", alts(E, [sum(xs) / len(xs), E2, xs[ps.index(max(ps))]]),
           [f"$E(X)={'+'.join(f'{x}\\cdot{t(p)}' for x, p in zip(xs, ps))}={t(E)}$"], f"$E(X)={t(E)}$ {unid} por período.")
    p3 = P("Varianza $V(X)$.", alts(V, [V ** 0.5, E2, E2 - E]),
           [f"$E(X^2)={t(E2)}$", f"$V(X)={t(E2)}-{t(E)}^2={t(V)}$"], f"$V(X)={t(V)}$.")
    fm = lambda v: f"${t(v, 0)}$ pesos"
    p4 = P(f"Si se gana {s(gan, 0)} pesos por cada unidad vendida, ¿cuál es la ganancia esperada por período?",
           alts(gan * E, [gan * E2, gan * xs[ps.index(max(ps))], gan * sum(xs) / len(xs)], fmt=fm, rel=0.01),
           [f"$E({gan}X)={gan}\\,E(X)={gan}\\cdot{t(E)}={t(gan * E, 0)}$"], f"Ganancia esperada: <b>{s(gan * E, 0)} pesos</b> diarios.")
    return CASO('Caso: cuantía, esperanza y ganancia', ctx, f"Sea $X$ {var}. Su función de cuantía es:", [p1, p2, p3, p4],
                table=_tabla(xs, ps), sub='Esperanza y varianza')


def caso_k(rng):
    ctx, var, unid, gan = rng.choice(CTX)
    n = rng.choice([3, 4])
    xs = list(range(0, n + 1))
    S = sum(x + 1 for x in xs)
    ps = [(x + 1) / S for x in xs]
    E = sum(x * p for x, p in zip(xs, ps))
    E2 = sum(x * x * p for x, p in zip(xs, ps))
    enun = f"Sea $X$ {var}, con $f_X(x)=k\\,(x+1)$ para $x\\in\\{{{','.join(map(str, xs))}\\}}$ y $0$ en otro caso."
    p1 = P('Valor de $k$.', alts(1 / S, [1 / (S - 1), 1 / len(xs), 1 / (S + 1)]), [f"$k({'+'.join(str(x + 1) for x in xs)})={S}k=1\\Rightarrow k={frac(1, S)}$"], f"$k={frac(1, S)}$.")
    v2 = _ev(xs, ps, 1, n - 1)
    p2 = P(f"$P(1\\le X<{n})$.", alts(v2, [_ev(xs, ps, 1, n), _ev(xs, ps, 2, n - 1), _ev(xs, ps, 0, n - 1)]),
           [f"$P(1\\le X<{n})=f_X(1)+\\dots+f_X({n - 1})={t(v2)}$"], f"<b>{s(v2)}</b>.")
    p3 = P('$E(X)$.', alts(E, [sum(xs) / len(xs), E2, n / 2 + 0.5]), [f"$E(X)=\\sum x\\,\\dfrac{{x+1}}{{{S}}}={t(E)}$"], f"$E(X)={t(E)}$.")
    p4 = P('$V(X)$.', alts(E2 - E * E, [E2, (E2 - E * E) ** 0.5, E2 - E]), [f"$E(X^2)={t(E2)}$", f"$V(X)={t(E2)}-{t(E)}^2={t(E2 - E * E)}$"], f"$V(X)={t(E2 - E * E)}$.")
    return CASO('Caso: cuantía con constante k', ctx, enun, [p1, p2, p3, p4], sub='Cuantía y acumulada')


def generar(rng):
    qs = []
    for fn, n in [(probas, 16), (constante, 10), (desde_F, 10), (acumulada, 8), (esperanza, 10), (varianza, 12), (lineal, 12),
                  (eventos_va, 10), (condicional, 8), (limites_ev, 8)]:
        qs += variantes(rng, fn, n)
    for fn, n in [(caso, 4), (caso_k, 3)]:
        qs += variantes(rng, fn, n)
    return qs
