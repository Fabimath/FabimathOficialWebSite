"""Gato de la Normal (extra): percentil inverso, despejar σ, varianza dada (trampa de usar σ²), suma y diferencia de
normales independientes, aproximación normal a la binomial con corrección por continuidad, regla de las k desviaciones,
y casos completos. z a 2 decimales y Φ de tabla."""
from math import comb
from scipy import stats
from comun import Q, P, CASO, alts, alts_txt, t, s, variantes, phi, z2

CTX = [('Salud · Recién nacidos', 'el peso (kg) de un recién nacido', 3.2, 0.4, 'kg'),
       ('Urgencias · Espera', 'el tiempo de espera (min) en urgencias', 45, 8, 'min'),
       ('Educación · PAES', 'el puntaje PAES de Matemática', 600, 100, 'puntos'),
       ('Industria · Envasado', 'el contenido (ml) de una botella de jugo', 1000, 6, 'ml'),
       ('Nutrición · Colesterol', 'el colesterol total (mg/dl) de un adulto', 190, 25, 'mg/dl'),
       ('Agro · Paltas', 'el peso (g) de una palta Hass', 220, 30, 'g')]


def zq(p):
    """z de tabla para un percentil: se busca en Φ y se redondea a 2 decimales."""
    return round(float(stats.norm.ppf(p)), 2)


def percentil(rng):
    ctx, var, mu, sg, u = rng.choice(CTX)
    p = rng.choice([0.05, 0.1, 0.2, 0.75, 0.8, 0.9, 0.95, 0.99])
    z = zq(p)
    v = mu + z * sg
    alto = p > 0.5
    ask = (f"¿Qué valor deja al {s(100 * (1 - p), 0)} % superior de la distribución?" if alto else f"¿Bajo qué valor queda el {s(100 * p, 0)} % inferior?")
    st = [f"Se busca $z$ con $\\Phi(z)={t(p)}$: en la tabla, $z={t(z, 2)}$.", f"$x=\\mu+z\\sigma={t(mu)}+({t(z, 2)})\\cdot{t(sg)}={t(v)}$"]
    return Q('Percentil inverso', ctx, f"Sea $X$ {var}, con $X\\sim N(\\mu={t(mu)};\\ \\sigma={t(sg)})$.", ask,
             alts(v, [mu - z * sg, mu + z * sg * sg if sg < 5 else mu + z, mu + p * sg, mu + zq(1 - p / 2) * sg], rel=0.002), st,
             f"El valor es <b>{s(v)}</b> {u}.", sub='Percentiles y parámetros')


def despejar(rng):
    ctx, var, mu, sg, u = rng.choice(CTX)
    p = rng.choice([0.9, 0.95, 0.8, 0.975])
    z = zq(p)
    x = mu + z * sg
    enun = f"Sea $X$ {var}, normal con media ${t(mu)}$. Se sabe que el {s(100 * (1 - p), 1)} % de los casos supera ${t(x)}$ {u}."
    st = [f"$P(X\\le {t(x)})={t(p)}\\Rightarrow \\dfrac{{{t(x)}-{t(mu)}}}{{\\sigma}}={t(z, 2)}$",
          f"$\\sigma=\\dfrac{{{t(x - mu)}}}{{{t(z, 2)}}}={t(sg)}$"]
    return Q('Despejar σ', ctx, enun, '¿Cuál es la desviación estándar $\\sigma$?', alts(sg, [(x - mu) / zq(1 - p) * -1 + 0.13 * sg, (x - mu) * z, (x - mu) / p, ((x - mu) / z) ** 2]),
             st, f"$\\sigma={t(sg)}$ {u}.", sub='Percentiles y parámetros')


def trampa(rng):
    ctx, var, mu, sg, u = rng.choice([c for c in CTX if c[3] < 10])
    var2 = sg * sg
    a = mu + rng.choice([-1.5, -1, 1, 1.25]) * sg
    z = z2((a - mu) / sg)
    v = phi(z)
    zm = z2((a - mu) / var2)
    st = [f"Ojo: $N(\\mu,\\sigma^2)$ entrega la varianza. $\\sigma=\\sqrt{{{t(var2)}}}={t(sg)}$.",
          f"$z=\\dfrac{{{t(a)}-{t(mu)}}}{{{t(sg)}}}={t(z, 2)}$, $P(X<{t(a)})=\\Phi({t(z, 2)})={t(v)}$"]
    return Q('Varianza dada: no confundir σ con σ²', ctx, f"Sea $X$ {var}, con $X\\sim N({t(mu)};\\ \\sigma^2={t(var2)})$.", f"¿Cuál es $P(X<{t(a)})$?",
             alts(v, [phi(zm), 1 - v, phi(z2((a - mu) / (var2 ** 0.5 * 2)))]), st, f"$P={t(v)}$. Usar ${t(var2)}$ como desviación sería un error.",
             sub='Percentiles y parámetros')


SUMA = [('Envíos · Pesos', 'el peso (kg) de una caja', 'cajas', 'kg', 12, 1.5),
        ('Atención · Tiempos', 'la duración (min) de una atención', 'atenciones', 'min', 15, 4),
        ('Cocina · Insumos', 'el peso (g) de una porción', 'porciones', 'g', 250, 20)]


def suma(rng):
    ctx, var, cosas, u, mu, sg = rng.choice(SUMA)
    n = rng.choice([2, 3, 4])
    k = rng.choice(['suma', 'dif'])
    if k == 'suma':
        M, S = n * mu, (n * sg * sg) ** 0.5
        c = M + rng.choice([-1, 0.5, 1, 1.5]) * S
        z = z2((c - M) / S)
        v = 1 - phi(z)
        enun = f"Sea {var} normal con media ${t(mu)}$ y desviación ${t(sg)}$. Se juntan {n} {cosas} independientes."
        ask = f"¿Cuál es la probabilidad de que el total supere ${t(c, 2)}$ {u}?"
        st = [f"$T=X_1+\\dots+X_{n}\\sim N({n}\\cdot{t(mu)};\\ {n}\\cdot{t(sg)}^2)$: media ${t(M)}$, desviación $\\sqrt{{{t(n * sg * sg)}}}={t(S)}$",
              f"$z=\\dfrac{{{t(c, 2)}-{t(M)}}}{{{t(S)}}}={t(z, 2)}$, $P(T>{t(c, 2)})=1-\\Phi({t(z, 2)})={t(v)}$"]
        dist = [1 - phi(z2((c - M) / (n * sg))), phi(z), 1 - phi(z2((c - M) / sg)), 1 - phi(z2((c - M) / (n * sg * sg)))]
    else:
        mu2 = mu + rng.choice([-1, 1]) * sg * rng.choice([0.5, 1])
        S = (2 * sg * sg) ** 0.5
        z = z2((0 - (mu - mu2)) / S)
        v = 1 - phi(z)
        enun = (f"Se mide {var}. En la sucursal A es normal con $\\mu={t(mu)}$ y $\\sigma={t(sg)}$, y en la B con $\\mu={t(mu2)}$ y $\\sigma={t(sg)}$, de forma independiente.")
        ask = 'Si se elige uno de cada sucursal, ¿cuál es la probabilidad de que el de A supere al de B?'
        st = [f"$D=X_A-X_B\\sim N({t(mu)}-{t(mu2)};\\ {t(sg)}^2+{t(sg)}^2)$: media ${t(mu - mu2)}$, desviación ${t(S)}$ (las varianzas se suman)",
              f"$P(D>0)=1-\\Phi\\left(\\dfrac{{0-({t(mu - mu2)})}}{{{t(S)}}}\\right)=1-\\Phi({t(z, 2)})={t(v)}$"]
        dist = [1 - phi(z2(-(mu - mu2) / (2 * sg))), 1 - phi(z2(-(mu - mu2) / sg)), phi(z), 0.5]
    return Q('Suma y diferencia de normales', ctx, enun, ask, alts(v, dist), st, f"Resultado: <b>{s(v)}</b>.", sub='Combinaciones y aproximación')


def aprox_bin(rng):
    n = rng.choice([50, 80, 100, 150, 200])
    p = rng.choice([0.2, 0.3, 0.4, 0.5])
    mu, sg = n * p, (n * p * (1 - p)) ** 0.5
    c = int(mu + rng.choice([-1, 1, 1.5]) * sg)
    z = z2((c + 0.5 - mu) / sg)
    v = phi(z)
    exacto = float(stats.binom.cdf(c, n, p))
    ctx, txt = rng.choice([('Salud · Vacunas', 'pacientes que presentan reacción leve'), ('Retail · Pagos', 'clientes que pagan con app'),
                           ('Educación', 'estudiantes que aprueban')])
    enun = f"De {n} casos independientes, cada uno es un éxito con probabilidad ${t(p)}$. Sea $X$ el número de {txt}."
    st = [f"$X\\sim Bin({n};{t(p)})$, $np={t(mu)}$ y $n(1-p)={t(n * (1 - p))}$ grandes: $X$ es aproximadamente normal con media ${t(mu)}$ y desviación ${t(sg)}$",
          f"Corrección por continuidad: $P(X\\le {c})\\approx P(Y\\le {c}{{,}}5)$",
          f"$z=\\dfrac{{{c}{{,}}5-{t(mu)}}}{{{t(sg)}}}={t(z, 2)}$, $\\Phi({t(z, 2)})={t(v)}$ (el valor exacto es ${t(exacto)}$)"]
    return Q('Aproximación normal a la binomial', ctx, enun, f"Usando la aproximación normal con corrección por continuidad, ¿cuánto vale $P(X\\le {c})$?",
             alts(v, [phi(z2((c - mu) / sg)), phi(z2((c - 0.5 - mu) / sg)), 1 - v, phi(z2((c + 0.5 - mu) / (sg * sg)))]), st,
             f"$P(X\\le {c})\\approx {t(v)}$.", sub='Combinaciones y aproximación')


def kdesv(rng):
    ctx, var, mu, sg, u = rng.choice(CTX)
    k = rng.choice([1, 1.5, 2, 2.5, 3])
    v = 2 * phi(k) - 1
    st = [f"$P(\\mu-{t(k)}\\sigma<X<\\mu+{t(k)}\\sigma)=P(-{t(k)}<Z<{t(k)})=2\\Phi({t(k)})-1=2\\cdot{t(phi(k))}-1={t(v)}$"]
    return Q('Proporción a k desviaciones', ctx, f"Sea $X$ {var}, normal con $\\mu={t(mu)}$ y $\\sigma={t(sg)}$.",
             f"¿Qué proporción de los casos está entre ${t(mu - k * sg)}$ y ${t(mu + k * sg)}$ {u}?",
             alts(v, [phi(k), 1 - phi(k), 2 * phi(k), phi(k) - 0.5]), st, f"El {s(100 * v, 2)} % de los casos queda a menos de {s(k)} desviaciones de la media.",
             sub='Percentiles y parámetros')


def caso_normal(rng):
    ctx, var, mu, sg, u = rng.choice(CTX)
    a = mu - sg * rng.choice([0.5, 1, 1.25])
    b = mu + sg * rng.choice([0.75, 1, 1.5])
    za, zb = z2((a - mu) / sg), z2((b - mu) / sg)
    enun = f"Sea $X$ {var}, $X\\sim N(\\mu={t(mu)};\\ \\sigma={t(sg)})$."
    p1 = P(f"$P(X<{t(a)})$.", alts(phi(za), [1 - phi(za), phi(-za), phi(z2(za / 2))]), [f"$z={t(za, 2)}$, $\\Phi({t(za, 2)})={t(phi(za))}$"], f"<b>{s(phi(za))}</b>.")
    vab = phi(zb) - phi(za)
    p2 = P(f"$P({t(a)}<X<{t(b)})$.", alts(vab, [phi(zb), phi(zb) + phi(za), 1 - vab]), [f"$\\Phi({t(zb, 2)})-\\Phi({t(za, 2)})={t(phi(zb))}-{t(phi(za))}={t(vab)}$"], f"<b>{s(vab)}</b>.")
    z90 = zq(0.9)
    p3 = P('Valor que solo es superado por el 10 % de los casos.', alts(mu + z90 * sg, [mu - z90 * sg, mu + 0.9 * sg, mu + 1.645 * sg]),
           [f"$\\Phi(z)=0{{,}}9\\Rightarrow z={t(z90, 2)}$", f"$x={t(mu)}+{t(z90, 2)}\\cdot{t(sg)}={t(mu + z90 * sg)}$"], f"<b>{s(mu + z90 * sg)}</b> {u}.")
    vc = (1 - phi(zb)) / (1 - phi(za))
    p4 = P(f"Si se sabe que $X>{t(a)}$, probabilidad de que $X>{t(b)}$.", alts(vc, [1 - phi(zb), (1 - phi(zb)) * (1 - phi(za)), 1 - vab]),
           [f"$\\dfrac{{P(X>{t(b)})}}{{P(X>{t(a)})}}=\\dfrac{{{t(1 - phi(zb))}}}{{{t(1 - phi(za))}}}={t(vc)}$"], f"<b>{s(vc)}</b>.")
    return CASO('Caso: Normal completa', ctx, enun, [p1, p2, p3, p4], sub='Percentiles y parámetros')


def generar(rng):
    qs = []
    for fn, n in [(percentil, 14), (despejar, 8), (trampa, 8), (suma, 12), (aprox_bin, 10), (kdesv, 8)]:
        qs += variantes(rng, fn, n)
    qs += variantes(rng, caso_normal, 5)
    return qs
