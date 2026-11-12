"""Gato de Posición: cuartiles, deciles y percentiles en los tres casos del formulario.
- Datos sueltos (discretos sin tabla): posición k(n+1)/100 sobre los datos ordenados, interpolando si no es entera.
- Tabla de frecuencias (no agrupada): P_k es el primer valor x_i con F_i ≥ kn/100.
- Datos agrupados en clases: P_k = L_i + ((kn/100 − F_{i−1}) / f_i)·A (clase 3 de AES500).
Además: RIQ, bigotes y atípicos (Tukey), percentil inverso e interpretación."""
import math
from comun import Q, P, CASO, alts, alts_txt, t, s, variantes

SUELTOS = [('Salud · Urgencias', 'pacientes atendidos por hora en un SAPU', 'pacientes', (3, 18)),
           ('Retail · Reclamos', 'reclamos diarios de una tienda', 'reclamos', (0, 15)),
           ('Educación · Inasistencias', 'inasistencias en el semestre de un grupo de estudiantes', 'inasistencias', (0, 12)),
           ('Logística · Entregas', 'entregas diarias de un repartidor', 'entregas', (8, 30)),
           ('Banca · Transferencias', 'transferencias rechazadas por día', 'transferencias', (0, 10))]

NOMBRE = {25: '$Q_1$ (percentil 25)', 50: 'la mediana $Q_2$', 75: '$Q_3$ (percentil 75)', 10: 'el decil $D_1$ (percentil 10)',
          90: 'el decil $D_9$ (percentil 90)', 20: 'el percentil 20', 40: 'el percentil 40', 60: 'el percentil 60', 80: 'el percentil 80'}


def pos_suelto(xs, k):
    """Percentil por posición k(n+1)/100 con interpolación lineal."""
    n = len(xs)
    L = k * (n + 1) / 100
    L = min(max(L, 1), n)
    a = int(math.floor(L))
    fr = L - a
    if fr == 0 or a >= n:
        return xs[a - 1], L, a, fr
    return xs[a - 1] + fr * (xs[a] - xs[a - 1]), L, a, fr


def _sueltos(rng, n=None):
    ctx, var, u, (lo, hi) = rng.choice(SUELTOS)
    n = n or rng.choice([9, 10, 11, 12, 14, 15])
    xs = sorted(rng.randint(lo, hi) for _ in range(n))
    return ctx, var, u, xs


def _enun_s(var, xs, ordenados=False):
    datos = ', '.join(str(x) for x in (xs if ordenados else xs))
    return f"Se registró el número de {var} en {len(xs)} ocasiones (datos ya ordenados): {datos}."


def _st_pos(xs, k):
    v, L, a, fr = pos_suelto(xs, k)
    n = len(xs)
    st = [f"Posición: $\\dfrac{{k(n+1)}}{{100}}=\\dfrac{{{k}\\cdot{n + 1}}}{{100}}={t(k * (n + 1) / 100, 2)}$"]
    if fr == 0:
        st.append(f"Es entera: $P_{{{k}}}=x_{{({a})}}={t(v)}$")
    else:
        st.append(f"Está entre $x_{{({a})}}={xs[a - 1]}$ y $x_{{({a + 1})}}={xs[a]}$: $P_{{{k}}}={xs[a - 1]}+{t(fr, 2)}\\cdot({xs[a]}-{xs[a - 1]})={t(v)}$")
    return v, st


def suelto_percentil(rng):
    ctx, var, u, xs = _sueltos(rng)
    k = rng.choice([10, 20, 25, 40, 50, 60, 75, 80, 90])
    v, st = _st_pos(xs, k)
    n = len(xs)
    otros = [xs[min(n - 1, max(0, round(k * n / 100) - 1))], xs[min(n - 1, int(k * n / 100))], pos_suelto(xs, 100 - k)[0], sum(xs) / n, xs[min(n - 1, int(k * (n + 1) / 100))]]
    return Q('Percentil con datos sueltos', ctx, _enun_s(var, xs), f"Calcule {NOMBRE[k]}.", alts(v, otros), st,
             f"$P_{{{k}}}={t(v)}$: aproximadamente el {k} % de los registros tuvo a lo más {s(v)} {u}.", sub='Datos sueltos')


def suelto_atipico(rng):
    ctx, var, u, xs = _sueltos(rng, rng.choice([11, 15]))
    if rng.random() < 0.7:
        xs = sorted(xs[:-1] + [xs[-1] + rng.choice([10, 15, 20])])
    q1, st1 = _st_pos(xs, 25)
    q3, st3 = _st_pos(xs, 75)
    riq = q3 - q1
    ls, li = q3 + 1.5 * riq, q1 - 1.5 * riq
    at = [x for x in xs if x > ls or x < li]
    k = rng.choice(['riq', 'bs', 'atip'])
    base = [f"$Q_1={t(q1)}$ y $Q_3={t(q3)}$ (posiciones $\\frac{{n+1}}{{4}}$ y $\\frac{{3(n+1)}}{{4}}$).", f"$RIQ=Q_3-Q_1={t(riq)}$"]
    if k == 'riq':
        return Q('RIQ con datos sueltos', ctx, _enun_s(var, xs), 'Calcule el rango intercuartílico $RIQ$.', alts(riq, [xs[-1] - xs[0], q3 + q1, riq / 2, pos_suelto(xs, 50)[0]]),
                 base, f"$RIQ={t(riq)}$: el 50 % central de los registros varía en un rango de {s(riq)} {u}.", sub='Datos sueltos')
    if k == 'bs':
        v = min(xs[-1], ls)
        return Q('Bigotes del diagrama de caja', ctx, _enun_s(var, xs), 'Calcule el bigote superior $BS=\\min\\{x_{(n)},\\ Q_3+1{,}5\\cdot RIQ\\}$.',
                 alts(v, [ls, xs[-1], q3 + riq, q3 + 3 * riq]), base + [f"$Q_3+1{{,}}5\\cdot RIQ={t(ls)}$; $x_{{(n)}}={xs[-1]}$; $BS={t(v)}$"],
                 f"$BS={t(v)}$." + (' El máximo supera la valla: hay atípicos.' if xs[-1] > ls else ' Ningún dato supera la valla.'), sub='Datos sueltos')
    ok = (f"Sí: {', '.join(map(str, sorted(set(at))))} {'queda' if len(set(at)) == 1 else 'quedan'} fuera de $[{t(li)};\\ {t(ls)}]$" if at
          else f"No: todos los datos están dentro de $[{t(li)};\\ {t(ls)}]$")
    malas = [f"Sí: {xs[-1]}, porque es el máximo" if not at else f"No: todos los datos están dentro de $[{t(li)};\\ {t(ls)}]$",
             f"Sí: {xs[0]}, porque es el mínimo", f"No se puede saber sin la media y la desviación estándar"]
    return Q('Datos atípicos', ctx, _enun_s(var, xs), '¿Hay datos atípicos según el criterio de las vallas $Q_1-1{,}5\\,RIQ$ y $Q_3+1{,}5\\,RIQ$?',
             alts_txt(ok, malas), base + [f"Vallas: $Q_1-1{{,}}5\\cdot RIQ={t(li)}$ y $Q_3+1{{,}}5\\cdot RIQ={t(ls)}$."], ok + '.', sub='Datos sueltos')


def suelto_inverso(rng):
    ctx, var, u, xs = _sueltos(rng)
    v0 = rng.choice(xs[2:-2])
    c = sum(1 for x in xs if x <= v0)
    v = 100 * c / len(xs)
    return Q('Porcentaje bajo un valor', ctx, _enun_s(var, xs), f"¿Qué porcentaje de los registros tuvo a lo más {v0} {u}?",
             alts(v, [100 * (c - xs.count(v0)) / len(xs), 100 - v, 100 * c / (len(xs) + 1), 100 * (c + 1) / len(xs)], d=2, fmt=lambda x: f"${t(x, 2)}\\ \\%$"),
             [f"Datos menores o iguales a {v0}: {c} de {len(xs)}.", f"$\\dfrac{{{c}}}{{{len(xs)}}}\\cdot 100={t(v, 2)}\\ \\%$"],
             f"El {s(v, 2)} % de los registros: {v0} es aproximadamente el percentil {s(v, 0, cut=False)}.", sub='Datos sueltos')


# ---------------------------------------------------------------- tabla de frecuencias (no agrupada)
TABS = [('Familias · Hijos', 'el número de hijos por familia', 'hijos', [0, 1, 2, 3, 4, 5]),
        ('Salud · Controles', 'el número de controles prenatales por paciente', 'controles', [3, 4, 5, 6, 7, 8]),
        ('Seguros · Siniestros', 'el número de siniestros por asegurado en el año', 'siniestros', [0, 1, 2, 3, 4]),
        ('Retail · Productos', 'el número de productos por compra', 'productos', [1, 2, 3, 4, 5, 6])]


def _tab(rng):
    ctx, var, u, xs = rng.choice(TABS)
    fs = [rng.randint(3, 25) for _ in xs]
    F = [sum(fs[:i + 1]) for i in range(len(fs))]
    n = F[-1]
    table = {'head': ['$x_i$', '$f_i$', '$F_i$'], 'rows': [[str(x), f, Fi] for x, f, Fi in zip(xs, fs, F)] + [['Total', n, '']]}
    return ctx, var, u, xs, fs, F, n, table


def tab_pk(xs, F, n, k):
    lim = k * n / 100
    i = next(i for i, Fi in enumerate(F) if Fi >= lim - 1e-9)
    return xs[i], i, lim


def tabla_percentil(rng):
    ctx, var, u, xs, fs, F, n, table = _tab(rng)
    k = rng.choice([10, 25, 50, 75, 80, 90])
    v, i, lim = tab_pk(xs, F, n, k)
    otros = [xs[max(0, i - 1)], xs[min(len(xs) - 1, i + 1)], xs[fs.index(max(fs))], sum(x * f for x, f in zip(xs, fs)) / n]
    st = [f"$\\dfrac{{k\\,n}}{{100}}=\\dfrac{{{k}\\cdot{n}}}{{100}}={t(lim, 2)}$", f"Primer valor con $F_i\\ge {t(lim, 2)}$: $x={v}$ (su $F_i={F[i]}$" + (f"; el anterior tiene $F={F[i - 1]}$)" if i else ")")]
    return Q('Percentil desde la tabla', ctx, f"La tabla resume {var} en {n} casos:", f"Calcule {NOMBRE[k]}.",
             alts(v, otros, d=2), st, f"$P_{{{k}}}={v}$: al menos el {k} % de los casos tiene a lo más {v} {u}.", table=table, sub='Tabla de frecuencias')


def tabla_riq(rng):
    ctx, var, u, xs, fs, F, n, table = _tab(rng)
    q1, *_ = tab_pk(xs, F, n, 25)
    q3, *_ = tab_pk(xs, F, n, 75)
    v = q3 - q1
    if v <= 0:
        return None
    st = [f"$Q_1$: primer valor con $F_i\\ge {t(n / 4, 2)}$, $Q_1={q1}$.", f"$Q_3$: primer valor con $F_i\\ge {t(3 * n / 4, 2)}$, $Q_3={q3}$.", f"$RIQ={q3}-{q1}={v}$"]
    return Q('RIQ desde la tabla', ctx, f"La tabla resume {var} en {n} casos:", 'Calcule el rango intercuartílico $RIQ=Q_3-Q_1$.',
             alts(v, [xs[-1] - xs[0], q3 + q1, v + 1, max(1, v - 1) if v > 1 else 3], d=0), st, f"$RIQ={v}$ {u}.", table=table, sub='Tabla de frecuencias')


INTERP = [('sueldos mensuales', 'empleados', 'pesos', 200, 80, '850.000'), ('puntajes de admisión', 'postulantes', 'puntos', 500, 90, '720'),
          ('tiempos de entrega', 'entregas', 'minutos', 150, 25, '18'), ('pesos al nacer', 'recién nacidos', 'gramos', 120, 75, '3.400')]


def interpretar(rng):
    que, quienes, u, n, k, val = rng.choice(INTERP)
    v = round(k * n / 100)
    ok = f"Aproximadamente {v} {quienes} quedan en {val} {u} o menos, y unos {n - v} lo superan"
    malas = [f"Aproximadamente {n - v} {quienes} quedan en {val} {u} o menos", f"Exactamente {k} {quienes} quedan bajo {val} {u}",
             f"El promedio de los {que} es {val} {u}"]
    return Q('Interpretar un percentil', 'Interpretación', f"Entre {n} {quienes}, el percentil {k} de los {que} es $P_{{{k}}}={val}$ {u}.",
             '¿Qué significa?', alts_txt(ok, malas), [f"$P_{{{k}}}$ deja aproximadamente el {k} % de los datos en o bajo su valor: $\\dfrac{{{k}}}{{100}}\\cdot{n}={v}$."],
             ok + '.', sub='Tabla de frecuencias')


# ---------------------------------------------------------------- datos agrupados
AGR = [('Call center · Espera', 'el tiempo de espera (segundos) en un call center', 's', 20, 10),
       ('Salud · Colesterol', 'el colesterol total (mg/dl) de adultos', 'mg/dl', 150, 20),
       ('Retail · Boletas', 'el monto de las boletas (miles de pesos)', 'miles', 0, 10),
       ('Agro · Paltas', 'el peso de las paltas (g)', 'g', 160, 20),
       ('Fondos regionales', 'el monto de la ayuda (miles de pesos)', 'miles', 0, 100)]


def _agr(rng):
    ctx, var, u, a0, A = rng.choice(AGR)
    kcl = rng.choice([5, 6])
    fs = [rng.randint(4, 30) for _ in range(kcl)]
    L = [a0 + A * i for i in range(kcl + 1)]
    F = [sum(fs[:i + 1]) for i in range(kcl)]
    n = F[-1]
    table = {'head': ['Clase', '$f_i$', '$F_i$'], 'rows': [[f"$[{L[i]};\\ {L[i + 1]})$", fs[i], F[i]] for i in range(kcl)] + [['Total', n, '']]}
    return ctx, var, u, A, L, fs, F, n, table


def agr_pk(L, fs, F, n, A, k):
    lim = k * n / 100
    i = next(i for i, Fi in enumerate(F) if Fi >= lim - 1e-9)
    Fa = F[i - 1] if i else 0
    return L[i] + (lim - Fa) / fs[i] * A, i, lim, Fa


def _st_agr(L, fs, F, n, A, k):
    v, i, lim, Fa = agr_pk(L, fs, F, n, A, k)
    return v, [f"$\\dfrac{{k\\,n}}{{100}}=\\dfrac{{{k}\\cdot{n}}}{{100}}={t(lim, 2)}$: clase del percentil $[{L[i]};\\ {L[i + 1]})$ (primera con $F_i\\ge {t(lim, 2)}$).",
               f"$P_{{{k}}}=L_i+\\left(\\dfrac{{\\frac{{kn}}{{100}}-F_{{i-1}}}}{{f_i}}\\right)A={L[i]}+\\left(\\dfrac{{{t(lim, 2)}-{Fa}}}{{{fs[i]}}}\\right)\\cdot{A}={t(v)}$"]


def agr_percentil(rng):
    ctx, var, u, A, L, fs, F, n, table = _agr(rng)
    k = rng.choice([10, 20, 25, 40, 50, 60, 75, 80, 90])
    v, st = _st_agr(L, fs, F, n, A, k)
    _, i, lim, Fa = agr_pk(L, fs, F, n, A, k)
    otros = [L[i] + (lim - F[i]) / fs[i] * A if lim != F[i] else L[i], L[i] + (lim - Fa) / fs[i], L[i + 1] - (lim - Fa) / fs[i] * A, (L[i] + L[i + 1]) / 2, L[i] + (k * (n + 1) / 100 - Fa) / fs[i] * A]
    return Q('Percentil interpolado', ctx, f"La tabla resume {var} en {n} casos:", f"Calcule {NOMBRE[k]}.", alts(v, otros), st,
             f"$P_{{{k}}}={t(v)}$ {u}: el {k} % de los casos queda bajo ese valor.", table=table, sub='Datos agrupados')


def agr_riq(rng):
    ctx, var, u, A, L, fs, F, n, table = _agr(rng)
    q1, s1 = _st_agr(L, fs, F, n, A, 25)
    q3, s3 = _st_agr(L, fs, F, n, A, 75)
    v = q3 - q1
    return Q('Cuartiles y RIQ agrupados', ctx, f"La tabla resume {var} en {n} casos:", 'Calcule el rango intercuartílico $RIQ=Q_3-Q_1$.',
             alts(v, [q3 + q1, L[-1] - L[0], q3 - L[0], v / 2]), s1[1:] + s3[1:] + [f"$RIQ={t(q3)}-{t(q1)}={t(v)}$"],
             f"$RIQ={t(v)}$ {u}: el ancho del 50 % central.", table=table, sub='Datos agrupados')


def agr_inverso(rng):
    ctx, var, u, A, L, fs, F, n, table = _agr(rng)
    i = rng.randrange(1, len(fs) - 1)
    x0 = L[i] + A * rng.choice([0.25, 0.4, 0.5, 0.6, 0.75])
    Fa = F[i - 1]
    bajo = Fa + (x0 - L[i]) / A * fs[i]
    k = 100 * bajo / n
    mayor = rng.random() < 0.5
    v = 100 - k if mayor else k
    st = [f"$x={t(x0)}$ está en la clase $[{L[i]};\\ {L[i + 1]})$.",
          f"Despejando $k$ de $P_k$: ${t(x0)}={L[i]}+\\left(\\dfrac{{\\frac{{k\\cdot{n}}}{{100}}-{Fa}}}{{{fs[i]}}}\\right)\\cdot{A}\\Rightarrow k={t(k, 2)}$"]
    if mayor:
        st.append(f"Sobre ${t(x0)}$ queda el $100-{t(k, 2)}={t(v, 2)}\\ \\%$.")
    return Q('Percentil inverso (agrupados)', ctx, f"La tabla resume {var} en {n} casos:",
             f"¿Qué porcentaje de los casos tiene un valor {'mayor' if mayor else 'menor'} que ${t(x0)}$?",
             alts(v, [100 - v, 100 * Fa / n, 100 * F[i] / n, 100 * (Fa + fs[i] / 2) / n], d=2, fmt=lambda x: f"${t(x, 2)}\\ \\%$"), st,
             f"El {s(v, 2)} % de los casos.", table=table, sub='Datos agrupados')


def agr_entre(rng):
    ctx, var, u, A, L, fs, F, n, table = _agr(rng)
    i1, i2 = 1, len(fs) - 2
    x1, x2 = L[i1] + A * rng.choice([0.25, 0.5]), L[i2] + A * rng.choice([0.5, 0.75])
    k1 = 100 * (F[i1 - 1] + (x1 - L[i1]) / A * fs[i1]) / n
    k2 = 100 * (F[i2 - 1] + (x2 - L[i2]) / A * fs[i2]) / n
    v = k2 - k1
    st = [f"$P_{{k_1}}={t(x1)}\\Rightarrow k_1={t(k1, 2)}$", f"$P_{{k_2}}={t(x2)}\\Rightarrow k_2={t(k2, 2)}$", f"Entre ambos: $k_2-k_1={t(v, 2)}\\ \\%$"]
    return Q('Porcentaje entre dos valores', ctx, f"La tabla resume {var} en {n} casos:",
             f"¿Qué porcentaje de los casos está entre ${t(x1)}$ y ${t(x2)}$?", alts(v, [k2, 100 - k1, 100 * (F[i2] - F[i1 - 1]) / n, (k2 + k1) / 2], d=2, fmt=lambda x: f"${t(x, 2)}\\ \\%$"),
             st, f"El {s(v, 2)} % de los casos está entre esos valores.", table=table, sub='Datos agrupados')


# ---------------------------------------------------------------- casos
def caso_sueltos(rng):
    ctx, var, u, xs = _sueltos(rng, 11)
    xs = sorted(xs[:-1] + [xs[-1] + rng.choice([0, 12])])
    q1, s1 = _st_pos(xs, 25)
    me, sm = _st_pos(xs, 50)
    q3, s3 = _st_pos(xs, 75)
    riq = q3 - q1
    ls = q3 + 1.5 * riq
    p1 = P('Mediana.', alts(me, [sum(xs) / len(xs), xs[len(xs) // 2 - 1], (xs[0] + xs[-1]) / 2]), sm, f"$Me={t(me)}$.")
    p2 = P('$Q_1$ y $Q_3$.', alts_txt(f"$Q_1={t(q1)}$ y $Q_3={t(q3)}$", [f"$Q_1={t(xs[2])}$ y $Q_3={t(xs[8])}$" if (xs[2], xs[8]) != (q1, q3) else f"$Q_1={t(q1 + 1)}$ y $Q_3={t(q3 + 1)}$",
                                                                          f"$Q_1={t(q3)}$ y $Q_3={t(q1)}$" if q1 != q3 else f"$Q_1={t(q1 - 1)}$ y $Q_3={t(q3 + 2)}$", f"$Q_1={t(xs[0])}$ y $Q_3={t(xs[-1])}$"]),
           s1 + s3, f"$Q_1={t(q1)}$, $Q_3={t(q3)}$.")
    p3 = P('$RIQ$.', alts(riq, [xs[-1] - xs[0], q3 + q1, riq / 2]), [f"$RIQ={t(q3)}-{t(q1)}={t(riq)}$"], f"$RIQ={t(riq)}$.")
    at = xs[-1] > ls
    p4 = P('¿El máximo es atípico?', alts_txt(f"{'Sí' if at else 'No'}: la valla superior es $Q_3+1{{,}}5\\,RIQ={t(ls)}$ y el máximo es {xs[-1]}",
                                             [f"{'No' if at else 'Sí'}: la valla superior es ${t(ls)}$", 'Sí: todo máximo es atípico', 'No se puede saber sin la media']),
           [f"Valla superior: ${t(q3)}+1{{,}}5\\cdot{t(riq)}={t(ls)}$."], 'Criterio de Tukey.')
    return CASO('Caso: posición con datos sueltos', ctx, _enun_s(var, xs), [p1, p2, p3, p4], sub='Datos sueltos')


def caso_tabla(rng):
    ctx, var, u, xs, fs, F, n, table = _tab(rng)
    me, i, _ = tab_pk(xs, F, n, 50)
    q1, *_ = tab_pk(xs, F, n, 25)
    q3, *_ = tab_pk(xs, F, n, 75)
    p90, *_ = tab_pk(xs, F, n, 90)
    mal = lambda v: [x for x in xs if x != v][:3]
    p1 = P('Mediana.', alts(me, mal(me), d=0), [f"Primer valor con $F_i\\ge {t(n / 2, 2)}$: ${me}$."], f"$Me={me}$.")
    p2 = P('$Q_1$.', alts(q1, mal(q1), d=0), [f"Primer valor con $F_i\\ge {t(n / 4, 2)}$: ${q1}$."], f"$Q_1={q1}$.")
    p3 = P('$Q_3$.', alts(q3, mal(q3), d=0), [f"Primer valor con $F_i\\ge {t(3 * n / 4, 2)}$: ${q3}$."], f"$Q_3={q3}$.")
    p4 = P('Percentil 90 e interpretación.', alts_txt(f"$P_{{90}}={p90}$: al menos el 90 % tiene a lo más {p90} {u}", [f"$P_{{90}}={x}$: al menos el 90 % tiene a lo más {x} {u}" for x in mal(p90)]),
           [f"Primer valor con $F_i\\ge {t(0.9 * n, 2)}$: ${p90}$."], f"$P_{{90}}={p90}$.")
    return CASO('Caso: posición desde la tabla de frecuencias', ctx, f"La tabla resume {var} en {n} casos:", [p1, p2, p3, p4], table=table, sub='Tabla de frecuencias')


def caso_agrupado(rng):
    ctx, var, u, A, L, fs, F, n, table = _agr(rng)
    q1, s1 = _st_agr(L, fs, F, n, A, 25)
    me, sm = _st_agr(L, fs, F, n, A, 50)
    q3, s3 = _st_agr(L, fs, F, n, A, 75)
    p1 = P('Mediana.', alts(me, [(L[0] + L[-1]) / 2, me + A / 2, q1]), sm, f"$Me={t(me)}$ {u}.")
    p2 = P('$Q_1$.', alts(q1, [q1 + A / 2, me, L[1]]), s1, f"$Q_1={t(q1)}$.")
    p3 = P('$Q_3$.', alts(q3, [q3 - A / 2, me, L[-2]]), s3, f"$Q_3={t(q3)}$.")
    p4 = P('$RIQ$ e interpretación.', alts_txt(f"$RIQ={t(q3 - q1)}$: el 50 % central de los casos está entre ${t(q1)}$ y ${t(q3)}$",
                                              [f"$RIQ={t(q3 + q1)}$: el 50 % central está entre ${t(q1)}$ y ${t(q3)}$", f"$RIQ={t(q3 - q1)}$: el 25 % de los casos está entre ${t(q1)}$ y ${t(q3)}$",
                                               f"$RIQ={t(L[-1] - L[0])}$: es el rango de los datos"]), [f"$RIQ={t(q3)}-{t(q1)}={t(q3 - q1)}$"], 'El RIQ mide la dispersión del 50 % central.')
    return CASO('Caso: posición con datos agrupados', ctx, f"La tabla resume {var} en {n} casos:", [p1, p2, p3, p4], table=table, sub='Datos agrupados')


def generar(rng):
    qs = []
    for fn, n in [(suelto_percentil, 16), (suelto_atipico, 12), (suelto_inverso, 8), (tabla_percentil, 14), (tabla_riq, 8), (interpretar, 4),
                  (agr_percentil, 16), (agr_riq, 8), (agr_inverso, 10), (agr_entre, 8)]:
        qs += variantes(rng, fn, n)
    for fn, n in [(caso_sueltos, 4), (caso_tabla, 4), (caso_agrupado, 4)]:
        qs += variantes(rng, fn, n)
    return qs
