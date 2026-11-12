"""Gato de los Modelos Discretos: Bernoulli, binomial, geométrica, binomial negativa, Poisson (λt), hipergeométrica,
aproximación de Poisson. Geo y BinNeg cuentan ensayos (Rec desde 1 y desde k), como el formulario AES.
Acumuladas binomiales de a lo más 3 términos. Estilo: Cátedra 2 P3-P4 AES500, clase 09, Tutoría 6."""
from math import comb, exp, factorial
from comun import Q, P, CASO, alts, alts_txt, t, s, variantes

BIN = [('Retail · Pagos', 'compras', 'se paga con tarjeta de crédito', 'pagadas con crédito'),
       ('Call center', 'llamadas', 'termina en reclamo', 'que terminan en reclamo'),
       ('Salud · Vacunación', 'pacientes', 'presenta una reacción leve a la vacuna', 'con reacción leve'),
       ('Control de calidad', 'piezas', 'sale defectuosa', 'defectuosas'),
       ('Educación', 'estudiantes', 'aprueba el control', 'que aprueban'),
       ('Banca', 'solicitudes de crédito', 'es rechazada', 'rechazadas')]


def bpmf(n, p, k):
    return comb(n, k) * p ** k * (1 - p) ** (n - k)


def _bin(rng):
    ctx, cosas, evento, adj = rng.choice(BIN)
    n = rng.choice([5, 6, 8, 10, 12])
    p = rng.choice([0.1, 0.15, 0.2, 0.25, 0.3, 0.35])
    enun = f"Se eligen al azar {n} {cosas} independientes; cada una {evento} con probabilidad ${t(p)}$. Sea $X$ el número de {cosas} {adj}."
    return ctx, cosas, adj, n, p, enun


def binomial(rng):
    ctx, cosas, adj, n, p, enun = _bin(rng)
    k = rng.choice(['igual', 'alomas', 'almenos', 'E', 'V'])
    head = f"$X\\sim Bin(n={n},\\ p={t(p)})$: $f_X(x)=\\binom{{{n}}}{{x}}{t(p)}^x\\,{t(1 - p)}^{{{n}-x}}$."
    if k == 'igual':
        x = rng.choice([1, 2, 3])
        v = bpmf(n, p, x)
        ask = f"¿Cuál es $P(X={x})$, la probabilidad de que $X$ valga exactamente {x}?"
        st = [f"$P(X={x})=\\binom{{{n}}}{{{x}}}{t(p)}^{x}\\,{t(1 - p)}^{{{n - x}}}={comb(n, x)}\\cdot{t(p ** x)}\\cdot{t((1 - p) ** (n - x))}={t(v)}$"]
        dist = [p ** x * (1 - p) ** (n - x), bpmf(n, p, x - 1), bpmf(n, p, x + 1), x / n, sum(bpmf(n, p, j) for j in range(x + 1))]
    elif k == 'alomas':
        x = rng.choice([1, 2])
        v = sum(bpmf(n, p, j) for j in range(x + 1))
        ask = f"¿Cuál es $P(X\\le {x})$, la probabilidad de que $X$ sea a lo más {x}?"
        st = [f"$P(X\\le {x})=" + '+'.join(f"P(X={j})" for j in range(x + 1)) + '$',
              f"$=" + '+'.join(t(bpmf(n, p, j)) for j in range(x + 1)) + f"={t(v)}$"]
        dist = [bpmf(n, p, x), 1 - v, sum(bpmf(n, p, j) for j in range(x)), v + bpmf(n, p, x + 1)]
    elif k == 'almenos':
        x = rng.choice([1, 2])
        v = 1 - sum(bpmf(n, p, j) for j in range(x))
        ask = f"¿Cuál es $P(X\\ge {x})$, la probabilidad de que $X$ sea al menos {x}?"
        st = [f"$P(X\\ge {x})=1-P(X\\le {x - 1})=1-(" + '+'.join(t(bpmf(n, p, j)) for j in range(x)) + f")={t(v)}$"]
        dist = [1 - sum(bpmf(n, p, j) for j in range(x + 1)), sum(bpmf(n, p, j) for j in range(x)), bpmf(n, p, x), 1 - p ** x]
    elif k == 'E':
        v = n * p
        ask = f"¿Cuántas {cosas} {adj} se esperan, $E(X)$?"
        st = [f"$E(X)=np={n}\\cdot{t(p)}={t(v)}$"]
        dist = [n * p * (1 - p), p, n * (1 - p), (n * p * (1 - p)) ** 0.5]
    else:
        v = n * p * (1 - p)
        ask = '¿Cuál es la varianza $V(X)$?'
        st = [f"$V(X)=np(1-p)={n}\\cdot{t(p)}\\cdot{t(1 - p)}={t(v)}$"]
        dist = [n * p, v ** 0.5, p * (1 - p), n * p * p]
    return Q('Binomial', ctx, enun, ask, alts(v, dist), st, f"Resultado: <b>{s(v)}</b>.", head, sub='Binomial y Bernoulli')


GEO = [('Seguros · Cotizaciones', 'cotizaciones', 'el cliente contrata el seguro', 'la primera contratación de un seguro'),
       ('Vida diaria · Dado', 'lanzamientos de un dado', 'sale un 6', 'el primer 6'),
       ('Telemarketing', 'llamadas', 'el cliente acepta la oferta', 'la primera aceptación'),
       ('Laboratorio', 'muestras analizadas', 'la muestra es positiva', 'el primer positivo'),
       ('Reclutamiento', 'entrevistas', 'el postulante es contratado', 'la primera contratación')]


def _geo(rng):
    ctx, ensayos, exito, primer = rng.choice(GEO)
    p = 1 / 6 if 'dado' in ensayos else rng.choice([0.1, 0.15, 0.2, 0.25, 0.3, 0.35])
    enun = (f"Se hacen {ensayos} uno tras otro y en cada intento, de forma independiente, {exito} con probabilidad ${t(p) if p != 1 / 6 else '1/6'}$. "
            f"Sea $X$ el número de {ensayos} hasta {primer}, contando ese intento.")
    return ctx, ensayos, primer, p, enun


def geometrica(rng):
    ctx, ensayos, primer, p, enun = _geo(rng)
    k = rng.choice(['igual', 'mayor', 'alomas', 'E', 'memoria'])
    q = 1 - p
    head = f"$X\\sim Geo(p={t(p)})$, $Rec(X)=\\{{1,2,\\dots\\}}$, $f_X(x)=p(1-p)^{{x-1}}$, $P(X>x)=(1-p)^x$."
    if k == 'igual':
        x = rng.choice([2, 3, 4])
        v = p * q ** (x - 1)
        ask, st = f"¿Cuál es la probabilidad de que {primer} ocurra en el intento {x}?", [f"$P(X={x})={t(p)}\\cdot{t(q)}^{{{x - 1}}}={t(v)}$"]
        dist = [p * q ** x, q ** (x - 1), p ** (x - 1) * q, 1 - q ** x]
    elif k == 'mayor':
        x = rng.choice([2, 3, 4, 5])
        v = q ** x
        ask, st = f"¿Cuál es la probabilidad de necesitar más de {x} intentos?", [f"Más de {x} intentos = los primeros {x} fracasan: $P(X>{x})={t(q)}^{{{x}}}={t(v)}$"]
        dist = [q ** (x - 1), 1 - q ** x, p * q ** x, q ** (x + 1)]
    elif k == 'alomas':
        x = rng.choice([2, 3, 4])
        v = 1 - q ** x
        ask, st = f"¿Cuál es la probabilidad de lograrlo en a lo más {x} intentos?", [f"$P(X\\le {x})=1-P(X>{x})=1-{t(q)}^{{{x}}}={t(v)}$"]
        dist = [q ** x, 1 - q ** (x - 1), p * q ** (x - 1), x * p]
    elif k == 'E':
        v = 1 / p
        ask, st = '¿Cuántos intentos se esperan, $E(X)$?', [f"$E(X)=\\dfrac{{1}}{{p}}=\\dfrac{{1}}{{{t(p)}}}={t(v)}$"]
        dist = [q / p ** 2, q / p, p, 1 / q]
    else:
        a, b = rng.choice([(3, 2), (5, 3), (4, 2), (2, 3)])
        v = q ** b
        ask = f"Si ya van {a} intentos sin éxito, ¿cuál es la probabilidad de necesitar más de {a + b} en total?"
        st = [f"Falta de memoria: $P(X>{a + b}|X>{a})=\\dfrac{{P(X>{a + b})}}{{P(X>{a})}}=\\dfrac{{{t(q)}^{{{a + b}}}}}{{{t(q)}^{{{a}}}}}={t(q)}^{{{b}}}={t(v)}$"]
        dist = [q ** (a + b), q ** a, 1 - q ** b, p * q ** b]
    return Q('Geométrica', ctx, enun, ask, alts(v, dist), st, f"Resultado: <b>{s(v)}</b>.", head, sub='Geométrica y binomial negativa')


def binneg(rng):
    ctx, ensayos, primer, p, enun0 = _geo(rng)
    r = rng.choice([2, 3])
    nombre = primer.replace('la primera', f'la {r}.ª').replace('el primer', f'el {r}.º').replace('el primero', f'el {r}.º')
    enun = enun0.split('Sea')[0] + f"Sea $X$ el número de {ensayos} hasta {nombre}, contando ese intento."
    q = 1 - p
    k = rng.choice(['igual', 'E', 'alomas'])
    head = f"$X\\sim BinNeg(k={r},\\ p={t(p)})$, $Rec(X)=\\{{{r},{r + 1},\\dots\\}}$, $f_X(x)=\\binom{{x-1}}{{{r - 1}}}p^{{{r}}}(1-p)^{{x-{r}}}$."
    f = lambda x: comb(x - 1, r - 1) * p ** r * q ** (x - r)
    if k == 'igual':
        x = r + rng.choice([1, 2, 3])
        v = f(x)
        ask = f"¿Cuál es la probabilidad de que {nombre} ocurra exactamente en el intento {x}?"
        st = [f"$P(X={x})=\\binom{{{x - 1}}}{{{r - 1}}}{t(p)}^{{{r}}}{t(q)}^{{{x - r}}}={comb(x - 1, r - 1)}\\cdot{t(p ** r)}\\cdot{t(q ** (x - r))}={t(v)}$"]
        dist = [comb(x, r) * p ** r * q ** (x - r), p ** r * q ** (x - r), bpmf(x, p, r), f(x + 1)]
    elif k == 'alomas':
        x = r + 1
        v = f(r) + f(r + 1)
        ask = f"¿Cuál es la probabilidad de que {nombre} ocurra a lo más en el intento {x}?"
        st = [f"$P(X\\le {x})=P(X={r})+P(X={x})={t(f(r))}+{t(f(x))}={t(v)}$"]
        dist = [f(x), f(r), 1 - v, f(r) + f(x) + f(x + 1)]
    else:
        v = r / p
        ask = '¿Cuántos intentos se esperan, $E(X)$?'
        st = [f"$E(X)=\\dfrac{{k}}{{p}}=\\dfrac{{{r}}}{{{t(p)}}}={t(v)}$"]
        dist = [r * q / p ** 2, 1 / p, r * p, r * q / p]
    return Q('Binomial negativa', ctx, enun, ask, alts(v, dist), st, f"Resultado: <b>{s(v)}</b>.", head, sub='Geométrica y binomial negativa')


POI = [('Cafetería · Pedidos', 'pedidos por aplicación', 'minuto', 'minutos', [0.15, 0.25, 0.5]),
       ('Correo · Bandeja de entrada', 'correos', 'hora', 'horas', [2, 3, 4]),
       ('Salud · Urgencias', 'llegadas de pacientes', 'hora', 'horas', [3, 4, 6]),
       ('Banca · Transferencias', 'transferencias rechazadas', 'día', 'días', [1, 1.5, 2]),
       ('Tránsito · Autopista', 'accidentes', 'semana', 'semanas', [0.5, 1, 2])]


def ppmf(lam, k):
    return exp(-lam) * lam ** k / factorial(k)


def poisson(rng):
    ctx, ev, u, us, lams = rng.choice(POI)
    lam = rng.choice(lams)
    tt = rng.choice([1, 2, 3] if lam >= 1 else [5, 10, 20])
    L = lam * tt
    if L > 8:
        return None
    k = rng.choice(['igual', 'cero', 'almenos1', 'alomas', 'EV'])
    enun = f"El número de {ev} sigue un proceso de Poisson con una tasa de ${t(lam)}$ por {u}. Sea $X$ el número de {ev} en {tt} {us if tt != 1 else u}."
    head = f"$X\\sim Poi(\\lambda t={t(lam)}\\cdot{tt}={t(L)})$, $f_X(x)=\\dfrac{{e^{{-{t(L)}}}{t(L)}^x}}{{x!}}$."
    if k == 'igual':
        x = rng.choice([1, 2, 3])
        v = ppmf(L, x)
        ask, st = f"¿Cuál es la probabilidad de exactamente {x}?", [f"$P(X={x})=\\dfrac{{e^{{-{t(L)}}}\\,{t(L)}^{{{x}}}}}{{{x}!}}={t(v)}$"]
        dist = [ppmf(lam, x), ppmf(L, x - 1), ppmf(L, x + 1), exp(-L)]
    elif k == 'cero':
        v = exp(-L)
        ask, st = '¿Cuál es la probabilidad de que no ocurra ninguna?', [f"$P(X=0)=e^{{-{t(L)}}}={t(v)}$"]
        dist = [exp(-lam), 1 - v, L * exp(-L), 1 / (1 + L)]
    elif k == 'almenos1':
        v = 1 - exp(-L)
        ask, st = '¿Cuál es la probabilidad de al menos una?', [f"$P(X\\ge 1)=1-P(X=0)=1-e^{{-{t(L)}}}={t(v)}$"]
        dist = [exp(-L), 1 - exp(-lam), L * exp(-L), 1 - exp(-L) - L * exp(-L)]
    elif k == 'alomas':
        v = ppmf(L, 0) + ppmf(L, 1) + ppmf(L, 2)
        ask, st = '¿Cuál es la probabilidad de a lo más 2?', [f"$P(X\\le 2)=e^{{-{t(L)}}}\\left(1+{t(L)}+\\dfrac{{{t(L)}^2}}{{2}}\\right)={t(v)}$"]
        dist = [ppmf(L, 2), 1 - v, ppmf(L, 0) + ppmf(L, 1), ppmf(lam, 0) + ppmf(lam, 1) + ppmf(lam, 2)]
    else:
        v = L
        ask, st = '¿Cuánto valen $E(X)$ y $V(X)$?', [f"En Poisson $E(X)=V(X)=\\lambda t={t(L)}$"]
        return Q('Poisson (λt)', ctx, enun, ask, alts_txt(f"$E(X)=V(X)={t(L)}$", [f"$E(X)={t(L)}$ y $V(X)={t(L ** 0.5)}$", f"$E(X)=V(X)={t(lam)}$",
                                                                                  f"$E(X)={t(L)}$ y $V(X)={t(L * L)}$"]), st,
                 f"Se esperan {s(L)} {ev} en ese período, con varianza también {s(L)}.", head, sub='Poisson')
    return Q('Poisson (λt)', ctx, enun, ask, alts(v, dist), st, f"Resultado: <b>{s(v)}</b>.", head, sub='Poisson')


HIP = [('Control de calidad', 'lote de {N} notebooks', 'tienen falla de pantalla', 'con falla', 'notebooks'),
       ('Auditoría', 'carpeta de {N} facturas', 'tienen errores', 'con error', 'facturas'),
       ('Salud · Muestras', 'refrigerador con {N} vacunas', 'perdieron la cadena de frío', 'dañadas', 'vacunas')]


def hiper(rng):
    ctx, lote, mal, adj, cosas = rng.choice(HIP)
    N, D, n = rng.choice([20, 25, 30]), rng.choice([3, 4, 5, 6]), rng.choice([4, 5])
    x = rng.choice([0, 1, 2])
    v = comb(D, x) * comb(N - D, n - x) / comb(N, n)
    enun = f"De un {lote.format(N=N)}, {D} {mal}. Un auditor elige {n} {cosas} al azar sin reemplazo. Sea $X$ el número de {cosas} {adj} en la muestra."
    head = f"$X\\sim Hiper(N={N},\\ D={D},\\ n={n})$: $P(X=x)=\\dfrac{{\\binom{{{D}}}{{x}}\\binom{{{N - D}}}{{{n}-x}}}}{{\\binom{{{N}}}{{{n}}}}}$."
    st = [f"$P(X={x})=\\dfrac{{\\binom{{{D}}}{{{x}}}\\binom{{{N - D}}}{{{n - x}}}}}{{\\binom{{{N}}}{{{n}}}}}=\\dfrac{{{comb(D, x)}\\cdot{comb(N - D, n - x)}}}{{{comb(N, n)}}}={t(v)}$",
          f"$E(X)=n\\dfrac{{D}}{{N}}={t(n * D / N)}$ (como referencia)."]
    return Q('Hipergeométrica', ctx, enun, f"¿Cuál es $P(X={x})$?", alts(v, [bpmf(n, D / N, x), comb(D, x) / comb(N, n), 1 - v, n * D / N / 10 + 0.05]),
             st, f"Resultado: <b>{s(v)}</b>. Se usa hipergeométrica porque la extracción es sin reemplazo de un lote pequeño.", head, sub='Poisson')


ESCENAS = [
    ("Se cuenta cuántas de 20 cajas de un envío llegan dañadas, si cada caja se daña con probabilidad 0,05 de forma independiente.", 'Binomial'),
    ("Se cuenta cuántos clientes llegan a una farmacia entre las 10:00 y las 11:00, con una tasa promedio de 12 por hora.", 'Poisson'),
    ("Se cuenta cuántos tiros libres lanza un basquetbolista hasta encestar el primero.", 'Geométrica'),
    ("Se cuenta cuántas llamadas hace un vendedor hasta concretar su tercera venta.", 'Binomial negativa'),
    ("De un curso de 30 estudiantes, 8 son de regiones; se eligen 5 sin reemplazo y se cuenta cuántos son de regiones.", 'Hipergeométrica'),
    ("Se registra si un paciente elegido al azar es fumador (1) o no (0).", 'Bernoulli'),
    ("Se cuenta el número de errores de digitación en una página de un informe, con un promedio de 0,8 errores por página.", 'Poisson'),
    ("Se cuenta cuántos de 15 pacientes tratados se recuperan, si cada uno se recupera con probabilidad 0,7 independientemente.", 'Binomial'),
    ("Se cuenta cuántos dados hay que lanzar hasta obtener el segundo seis.", 'Binomial negativa'),
    ("Se cuenta cuántas cartas hay que sacar, con reposición, hasta obtener el primer as.", 'Geométrica'),
]
MODELOS = ['Binomial', 'Poisson', 'Geométrica', 'Binomial negativa', 'Hipergeométrica', 'Bernoulli']
JUST = {'Binomial': 'número fijo de ensayos independientes con la misma probabilidad de éxito; se cuentan los éxitos.',
        'Poisson': 'se cuentan ocurrencias en un intervalo de tiempo o espacio, con una tasa promedio.',
        'Geométrica': 'se cuentan ensayos independientes hasta el primer éxito.',
        'Binomial negativa': 'se cuentan ensayos independientes hasta el k-ésimo éxito.',
        'Hipergeométrica': 'muestra sin reemplazo de una población finita con dos tipos de elementos.',
        'Bernoulli': 'un solo ensayo con dos resultados posibles.'}


def identificar(rng):
    esc, ok = rng.choice(ESCENAS)
    otras = [m for m in MODELOS if m != ok]
    rng.shuffle(otras)
    return Q('Identificar el modelo', 'Modelos · Reconocimiento', esc, '¿Qué modelo describe mejor a la variable?',
             alts_txt(ok, otras), [f"{ok}: {JUST[ok]}"], f"El modelo adecuado es <b>{ok}</b>.", sub='Binomial y Bernoulli')


def aprox(rng):
    n = rng.choice([100, 200, 300, 500])
    p = rng.choice([0.005, 0.01, 0.02])
    x = rng.choice([0, 1, 2, 3])
    L = n * p
    if L > 6:
        return None
    ex, ap = bpmf(n, p, x), ppmf(L, x)
    ctx = rng.choice(['Banca · Transferencias', 'Industria · Tornillos', 'Seguros · Siniestros'])
    enun = f"Cada uno de {n} casos independientes presenta un problema con probabilidad ${t(p)}$. Sea $X$ el número de casos con problema."
    st = [f"$n$ grande y $p$ chico: $X\\approx Poi(np={n}\\cdot{t(p)}={t(L)})$", f"$P(X={x})\\approx \\dfrac{{e^{{-{t(L)}}}{t(L)}^{{{x}}}}}{{{x}!}}={t(ap)}$",
          f"(El valor binomial exacto es ${t(ex)}$: la aproximación es muy buena.)"]
    return Q('Aproximación de Poisson a la binomial', ctx, enun, f"Usando la aproximación de Poisson, ¿cuánto vale $P(X={x})$?",
             alts(ap, [ppmf(L, x + 1), exp(-p), p ** x, ppmf(L / 2, x), 1 - ap]), st, f"$P(X={x})\\approx {t(ap)}$.", sub='Poisson')


def interpretar(rng):
    ctx, cosas, adj, n, p, enun = _bin(rng)
    E = n * p
    ok = f"Si se repitiera la selección de {n} {cosas} muchas veces, en promedio habría {s(E)} {cosas} {adj}"
    malas = [f"Siempre habrá exactamente {s(E)} {cosas} {adj}", f"La probabilidad de que haya {s(E)} {cosas} {adj} es ${t(p)}$",
             f"El {s(100 * p)} % de las veces habrá {s(E)} {cosas} {adj}"]
    return Q('Interpretar E(X)', ctx, enun + f" Se calculó $E(X)={t(E)}$.", '¿Cuál es la interpretación correcta de $E(X)$?', alts_txt(ok, malas),
             [f"$E(X)=np={t(E)}$ es un promedio a largo plazo; no es un valor que deba observarse ni una probabilidad."],
             'La esperanza se interpreta como valor promedio en muchas repeticiones.', sub='Binomial y Bernoulli')


def caso_geo_bin(rng):
    ctx, ensayos, primer, p, enun = _geo(rng)
    if p == 1 / 6:
        return None
    q = 1 - p
    n = 6
    p1 = P('¿Qué distribución tiene $X$?', alts_txt(f"$X\\sim Geo({t(p)})$: ensayos independientes hasta el primer éxito",
                                                      [f"$X\\sim Bin({n};{t(p)})$: número de éxitos", f"$X\\sim Poi({t(p)})$: ocurrencias en un tiempo", f"$X\\sim BinNeg(2;{t(p)})$: hasta el segundo éxito"]),
           ['Se repiten ensayos independientes con la misma $p$ y se cuenta hasta el primer éxito.'], f"$X\\sim Geo(p={t(p)})$.")
    p2 = P(f"Probabilidad de que {primer} ocurra en el intento 3.", alts(p * q * q, [p * q ** 3, q * q, p ** 2 * q]),
           [f"$P(X=3)={t(p)}\\cdot{t(q)}^2={t(p * q * q)}$"], f"<b>{s(p * q * q)}</b>.")
    p3 = P('Probabilidad de necesitar más de 3 intentos.', alts(q ** 3, [q ** 2, 1 - q ** 3, p * q ** 3]), [f"$P(X>3)={t(q)}^3={t(q ** 3)}$"], f"<b>{s(q ** 3)}</b>.")
    y2 = bpmf(n, p, 2)
    p4 = P(f"Si en un día hace exactamente {n} intentos independientes, sea $Y$ el número de éxitos. ¿$P(Y=2)$?",
           alts(y2, [p * p * q ** 4, bpmf(n, p, 1), 1 - bpmf(n, p, 0) - bpmf(n, p, 1)]),
           [f"$Y\\sim Bin({n};{t(p)})$", f"$P(Y=2)=\\binom{{6}}{{2}}{t(p)}^2{t(q)}^4={t(y2)}$"], f"<b>{s(y2)}</b>.")
    al2 = 1 - bpmf(n, p, 0) - bpmf(n, p, 1)
    p5 = P('Probabilidad de al menos 2 éxitos ese día.', alts(al2, [y2, bpmf(n, p, 0) + bpmf(n, p, 1), 1 - bpmf(n, p, 0)]),
           [f"$P(Y\\ge 2)=1-P(Y=0)-P(Y=1)=1-{t(bpmf(n, p, 0))}-{t(bpmf(n, p, 1))}={t(al2)}$"], f"<b>{s(al2)}</b>.")
    return CASO('Caso: geométrica y binomial', ctx, enun, [p1, p2, p3, p4, p5], sub='Geométrica y binomial negativa')


def caso_poisson(rng):
    ctx, ev, u, us, lams = rng.choice(POI)
    lam = rng.choice(lams)
    t1, t2 = (5, 10) if lam < 1 else (1, 2)
    L1, L2 = lam * t1, lam * t2
    if L2 > 8:
        return None
    enun = f"El número de {ev} sigue un proceso de Poisson con una tasa de ${t(lam)}$ por {u}."
    p1 = P(f"Probabilidad de ninguna en {t1} {us if t1 > 1 else u}.", alts(exp(-L1), [exp(-lam), 1 - exp(-L1), L1 * exp(-L1)]),
           [f"$X\\sim Poi({t(L1)})$: $P(X=0)=e^{{-{t(L1)}}}={t(exp(-L1))}$"], f"<b>{s(exp(-L1))}</b>.")
    p2 = P(f"Probabilidad de al menos una en {t2} {us}.", alts(1 - exp(-L2), [exp(-L2), 1 - exp(-L1), 1 - exp(-lam)]),
           [f"$Poi({t(L2)})$: $1-e^{{-{t(L2)}}}={t(1 - exp(-L2))}$"], f"<b>{s(1 - exp(-L2))}</b>.")
    p3 = P(f"Probabilidad de exactamente 2 en {t2} {us}.", alts(ppmf(L2, 2), [ppmf(L1, 2), ppmf(L2, 1), exp(-L2)]),
           [f"$\\dfrac{{e^{{-{t(L2)}}}{t(L2)}^2}}{{2!}}={t(ppmf(L2, 2))}$"], f"<b>{s(ppmf(L2, 2))}</b>.")
    p4 = P(f"Número esperado en {t2} {us} y su varianza.", alts_txt(f"$E(X)=V(X)={t(L2)}$", [f"$E(X)={t(L2)}$, $V(X)={t(L2 ** 0.5)}$", f"$E(X)=V(X)={t(lam)}$", f"$E(X)={t(L2)}$, $V(X)={t(L2 * L2)}$"]),
           [f"$E(X)=V(X)=\\lambda t={t(L2)}$"], f"Se esperan {s(L2)} {ev}.")
    return CASO('Caso: proceso de Poisson', ctx, enun, [p1, p2, p3, p4], sub='Poisson')


def generar(rng):
    qs = []
    for fn, n in [(identificar, 10), (binomial, 18), (geometrica, 16), (binneg, 10), (poisson, 16), (hiper, 8), (aprox, 6), (interpretar, 6)]:
        qs += variantes(rng, fn, n)
    for fn, n in [(caso_geo_bin, 4), (caso_poisson, 4)]:
        qs += variantes(rng, fn, n)
    return qs
