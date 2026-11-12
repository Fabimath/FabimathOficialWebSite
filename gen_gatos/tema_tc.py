"""Gato Muestral: distribución de la media (σ conocida), TCL para media, suma y proporción, error estándar,
χ² para S² y t para la media con S (valores de tabla). Cuantiles de tabla: χ²_{α;(n−1)} cola inferior, t^{(n−1)}_{1−α}."""
from comun import Q, P, CASO, alts, alts_txt, t, s, variantes, phi, z2, chiq, tq

POB = [('Salud · Hemoglobina', 'la hemoglobina (g/dl) de mujeres adultas', 13.5, 1.2, 'g/dl', True),
       ('Industria · Llenado', 'el contenido (ml) de una lata', 350, 4, 'ml', True),
       ('Banca · Transacciones', 'el monto (miles de pesos) de una transferencia', 85, 40, 'miles de pesos', False),
       ('Call center · Duración', 'la duración (min) de una llamada', 6, 6, 'min', False),
       ('Retail · Boletas', 'el monto (miles de pesos) de una boleta', 24, 15, 'miles de pesos', False),
       ('Educación · Sueño', 'las horas de sueño de un estudiante', 6.5, 1.4, 'horas', True)]


def media(rng):
    ctx, var, mu, sg, u, normal = rng.choice(POB)
    n = rng.choice([16, 25, 36] if normal else [36, 40, 49, 64, 100])
    se = sg / n ** 0.5
    c = round(mu + rng.choice([-1.5, -1, 0.75, 1, 1.25, 2]) * se, 2)
    z = z2((c - mu) / se)
    mayor = c > mu
    v = 1 - phi(z) if mayor else phi(z)
    base = 'Normal' if normal else 'no es normal (es asimétrica)'
    enun = f"Se sabe que {var} tiene media ${t(mu)}$ y desviación ${t(sg)}$; su distribución {base}. Se toma una muestra aleatoria de {n}."
    st = [("Población normal: $\\bar X$ es exactamente normal." if normal else f"$n={n}\\ge 30$: por el TCL, $\\bar X$ es aproximadamente normal."),
          f"$\\bar X\\sim N$ con media ${t(mu)}$ y desviación $\\dfrac{{\\sigma}}{{\\sqrt n}}=\\dfrac{{{t(sg)}}}{{\\sqrt{{{n}}}}}={t(se)}$",
          f"$z=\\dfrac{{{t(c, 2)}-{t(mu)}}}{{{t(se)}}}={t(z, 2)}$; $P={'1-' if mayor else ''}\\Phi({t(z, 2)})={t(v)}$"]
    zmal = z2((c - mu) / sg)
    return Q('Distribución de la media (TCL)', ctx, enun, f"¿Cuál es la probabilidad de que el promedio muestral sea {'mayor' if mayor else 'menor'} que ${t(c, 2)}$ {u}?",
             alts(v, [1 - phi(zmal) if mayor else phi(zmal), 1 - v, phi(z) if mayor else 1 - phi(z), 1 - phi(z2(z / 2)) if mayor else phi(z2(z * 2))]), st,
             f"Resultado: <b>{s(v)}</b>. Se divide por $\\sqrt{{n}}$: el promedio varía menos que una observación.", sub='Media y suma')


def total(rng):
    ctx, var, mu, sg, u, normal = rng.choice([p for p in POB if not p[5]])
    n = rng.choice([40, 50, 64, 100])
    M, S = n * mu, sg * n ** 0.5
    c = round(M + rng.choice([1, 1.5, 2, -1]) * S, 2)
    z = z2((c - M) / S)
    v = 1 - phi(z)
    enun = f"Se sabe que {var} tiene media ${t(mu)}$ y desviación ${t(sg)}$. Un día se registran {n} casos independientes."
    st = [f"Por el TCL, $T=\\sum X_i$ es aproximadamente normal con media $n\\mu={t(M)}$ y desviación $\\sigma\\sqrt{{n}}={t(S)}$",
          f"$z=\\dfrac{{{t(c, 2)}-{t(M)}}}{{{t(S)}}}={t(z, 2)}$; $P(T>{t(c, 2)})=1-\\Phi({t(z, 2)})={t(v)}$"]
    return Q('TCL para la suma', ctx, enun, f"¿Cuál es la probabilidad de que el total del día supere ${t(c, 2)}$ {u}?",
             alts(v, [1 - phi(z2((c - M) / (sg * n))), 1 - phi(z2((c - M) / sg)), phi(z), 1 - phi(z2((c / n - mu) / sg))]), st, f"Resultado: <b>{s(v)}</b>.", sub='Media y suma')


PROP = [('Salud · Vacunación', 'adultos vacunados', 0.7), ('Retail · Pago móvil', 'clientes que pagan con app', 0.35),
        ('Elecciones · Encuesta', 'votantes que apoyan una propuesta', 0.52), ('Educación', 'estudiantes que trabajan', 0.4)]


def proporcion(rng):
    ctx, qui, p = rng.choice(PROP)
    n = rng.choice([100, 150, 200, 400])
    se = (p * (1 - p) / n) ** 0.5
    c = p + rng.choice([-1.5, -1, 1, 1.5, 2]) * se
    c = round(c, 2)
    z = z2((c - p) / se)
    mayor = c > p
    v = 1 - phi(z) if mayor else phi(z)
    enun = f"En la población, el {s(100 * p)} % son {qui}. Se toma una muestra aleatoria de {n} personas; $\\hat p$ es la proporción muestral."
    st = [f"$np={t(n * p)}$ y $n(1-p)={t(n * (1 - p))}$ son mayores que 5: $\\hat p\\approx N\\left({t(p)};\\ \\sqrt{{\\dfrac{{{t(p)}\\cdot{t(1 - p)}}}{{{n}}}}}={t(se)}\\right)$",
          f"$z=\\dfrac{{{t(c)}-{t(p)}}}{{{t(se)}}}={t(z, 2)}$; $P={'1-' if mayor else ''}\\Phi({t(z, 2)})={t(v)}$"]
    return Q('TCL para la proporción', ctx, enun, f"¿Cuál es la probabilidad de que $\\hat p$ sea {'mayor' if mayor else 'menor'} que ${t(c)}$?",
             alts(v, [1 - v, 1 - phi(z2((c - p) / (p * (1 - p)))) if mayor else phi(z2((c - p) / (p * (1 - p)))), 1 - phi(z2((c - p) * n / 10)) if mayor else 0.5, phi(z2(z / 2)) if not mayor else 1 - phi(z2(z / 2))]),
             st, f"Resultado: <b>{s(v)}</b>.", sub='Proporción')


def error_estandar(rng):
    ctx, var, mu, sg, u, normal = rng.choice(POB)
    n = rng.choice([25, 36, 49, 64, 100])
    k = rng.choice(['se', 'cuadruplicar'])
    if k == 'se':
        v = sg / n ** 0.5
        return Q('Error estándar', ctx, f"Se sabe que {var} tiene desviación ${t(sg)}$. Se toma una muestra de {n}.",
                 '¿Cuál es el error estándar de $\\bar X$?', alts(v, [sg / n, sg * sg / n, sg, (sg / n) ** 0.5]),
                 [f"$EE(\\bar X)=\\dfrac{{\\sigma}}{{\\sqrt{{n}}}}=\\dfrac{{{t(sg)}}}{{\\sqrt{{{n}}}}}={t(v)}$"], f"$EE={t(v)}$ {u}.", sub='Media y suma')
    ok = f"Hay que multiplicar el tamaño por 4: $n={4 * n}$"
    return Q('Error estándar', ctx, f"Con una muestra de {n}, el error estándar de $\\bar X$ es ${t(sg / n ** 0.5)}$.",
             '¿Qué tamaño de muestra reduce el error estándar a la mitad?', alts_txt(ok, [f"Hay que duplicar el tamaño: $n={2 * n}$",
                                                                                        f"Basta agregar la mitad: $n={n + n // 2}$", "No depende del tamaño de la muestra"]),
             ["$EE=\\dfrac{\\sigma}{\\sqrt n}$: para dividirlo por 2 hay que multiplicar $\\sqrt n$ por 2, o sea $n$ por 4."], 'El error baja con la raíz de $n$.', sub='Media y suma')


ALFAS = [0.01, 0.025, 0.05, 0.10]


def chi2_s2(rng):
    ctx, var, mu, sg, u, normal = rng.choice([p for p in POB if p[5]])
    n = rng.choice([10, 13, 16, 21, 25])
    a = rng.choice(ALFAS)
    q = chiq(1 - a, n - 1)
    c = q * sg * sg / (n - 1)
    st = [f"$\\dfrac{{(n-1)S^2}}{{\\sigma^2}}\\sim\\chi^2_{{({n - 1})}}$ (población normal).",
          f"$P(S^2>{t(c, 3)})=P\\left(\\chi^2_{{({n - 1})}}>\\dfrac{{{n - 1}\\cdot{t(c, 3)}}}{{{t(sg * sg)}}}={t(q, 3)}\\right)$",
          f"En la tabla, $\\chi^2_{{{t(1 - a, 3)};({n - 1})}}={t(q, 3)}$, luego la probabilidad es ${t(a, 3)}$."]
    return Q('χ² para la varianza muestral', ctx, f"Se sabe que {var} es normal con $\\sigma={t(sg)}$. Se toma una muestra de {n} y se calcula $S^2$.",
             f"¿Cuál es $P(S^2>{t(c, 3)})$?", alts(a, [1 - a, a / 2, 2 * a if a < 0.5 else 0.2, 0.5], d=3), st,
             f"La probabilidad es <b>{s(a, 3)}</b>: una varianza muestral tan grande sería poco frecuente.", sub='χ² y t')


def t_media(rng):
    ctx, var, mu, sg, u, normal = rng.choice([p for p in POB if p[5]])
    n = rng.choice([9, 12, 16, 20, 25])
    a = rng.choice(ALFAS)
    tv = tq(1 - a, n - 1)
    st = [f"Con $\\sigma$ desconocida se estandariza con $S$: $T=\\dfrac{{\\bar X-\\mu}}{{S/\\sqrt n}}\\sim t^{{({n - 1})}}$ (población normal).",
          f"En la tabla, $t^{{({n - 1})}}_{{{t(1 - a, 3)}}}={t(tv, 3)}$: deja una cola superior de ${t(a, 3)}$.", f"$P(T>{t(tv, 3)})={t(a, 3)}$"]
    return Q('t de Student para la media', ctx, f"Se sabe que {var} es normal con media ${t(mu)}$. Se toma una muestra de {n} y se calcula $T=\\dfrac{{\\bar X-\\mu}}{{S/\\sqrt{{{n}}}}}$.",
             f"¿Cuál es la probabilidad de que $T$ supere ${t(tv, 3)}$?", alts(a, [1 - a, a / 2, 2 * a, 0.5], d=3), st,
             f"<b>{s(a, 3)}</b>. Con $\\sigma$ desconocida y $n$ pequeño se usa la t con $n-1={n - 1}$ grados de libertad.", sub='χ² y t')


QUE = [("Población normal con $\\sigma$ conocida; se estudia $\\bar X$ con $n=12$.", "Normal: $Z=\\dfrac{\\bar X-\\mu}{\\sigma/\\sqrt n}$"),
       ("Población normal con $\\sigma$ desconocida; se estudia $\\bar X$ con $n=12$ usando $S$.", "t de Student con 11 grados de libertad"),
       ("Población normal; se estudia la varianza muestral $S^2$ con $n=12$.", "Chi-cuadrado con 11 grados de libertad para $(n-1)S^2/\\sigma^2$"),
       ("Población asimétrica de media y desviación conocidas; se estudia $\\bar X$ con $n=80$.", "Normal aproximada por el teorema central del límite")]


def cual(rng):
    esc, ok = rng.choice(QUE)
    # «Normal exacta con Z» y «Normal aproximada por el TCL» no deben aparecer juntas: ambas serían defendibles
    otras = [o for _, o in QUE if o != ok and not ({ok, o} == {QUE[0][1], QUE[3][1]})] + ['Poisson con media $n\\mu$']
    otras = otras[:3]
    return Q('¿Qué distribución usar?', 'Inferencia · Distribuciones muestrales', esc, '¿Qué distribución corresponde?', alts_txt(ok, otras),
             [ok + '.'], 'Depende de qué se conoce ($\\sigma$ o $S$), del estadístico y de si la población es normal o $n$ es grande.', sub='χ² y t')


def caso_tcl(rng):
    ctx, var, mu, sg, u, normal = rng.choice([p for p in POB if not p[5]])
    n = 64
    se = sg / 8
    c1 = mu + se
    z1 = z2(1.0)
    enun = f"Se sabe que {var} tiene media ${t(mu)}$ y desviación ${t(sg)}$, con distribución asimétrica. Se toma una muestra de $n={n}$."
    p1 = P('Distribución aproximada de $\\bar X$.', alts_txt(f"$\\bar X$ es aproximadamente normal, con media ${t(mu)}$ y desviación ${t(se)}$, por el TCL",
                                                              [f"$\\bar X$ es aproximadamente normal, con media ${t(mu)}$ y desviación ${t(sg)}$", f"$\\bar X\\sim t^{{(63)}}$ exacta", "No se puede saber porque la población no es normal"]),
           [f"$n=64\\ge 30$: $\\bar X\\approx N\\left(\\mu,\\ \\dfrac{{\\sigma}}{{\\sqrt{{64}}}}={t(se)}\\right)$"], 'El TCL no exige población normal si $n$ es grande.')
    p2 = P(f"$P(\\bar X>{t(c1)})$.", alts(1 - phi(z1), [phi(z1), 1 - phi(z2(se / sg)), 0.5]), [f"$z=1$, $1-\\Phi(1)={t(1 - phi(1))}$"], f"<b>{s(1 - phi(1))}</b>.")
    lo, hi = mu - 2 * se, mu + 2 * se
    p3 = P(f"$P({t(lo)}<\\bar X<{t(hi)})$.", alts(2 * phi(2) - 1, [phi(2), 2 * phi(1) - 1, 0.95]), [f"$z=\\pm2$: $2\\Phi(2)-1={t(2 * phi(2) - 1)}$"], f"<b>{s(2 * phi(2) - 1)}</b>.")
    p4 = P('Si se cuadruplica $n$, ¿qué pasa con el error estándar?', alts_txt('Se reduce a la mitad', ['Se reduce a la cuarta parte', 'Se duplica', 'No cambia']),
           ['$EE=\\sigma/\\sqrt n$; con $4n$ queda $\\sigma/(2\\sqrt n)$.'], 'El error estándar baja con $\\sqrt n$.')
    return CASO('Caso: teorema central del límite', ctx, enun, [p1, p2, p3, p4], sub='Media y suma')


def generar(rng):
    qs = []
    for fn, n in [(media, 16), (total, 10), (proporcion, 12), (error_estandar, 8), (chi2_s2, 10), (t_media, 10), (cual, 4)]:
        qs += variantes(rng, fn, n)
    qs += variantes(rng, caso_tcl, 3)
    return qs
