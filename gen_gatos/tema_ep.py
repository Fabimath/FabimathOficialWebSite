"""Gato Estimador: estimación puntual por momentos y máxima verosimilitud (Poisson, exponencial, Bernoulli, geométrica,
uniforme(0,θ), densidad θx^(θ−1), normal), verosimilitud, insesgamiento, ECM/eficiencia e invarianza.
Estilo del examen AES510 (MV de Poisson con L(λ), ℓ(λ), ℓ'(λ)=0 y valor numérico interpretado)."""
from math import log, exp
from comun import Q, P, CASO, alts, alts_txt, t, s, variantes

MODELOS = {
    'poi': ('Poisson', 'el número de vehículos que llegan a un peaje en un minuto', '\\lambda', 'X\\sim Poi(\\lambda)'),
    'exp': ('Exponencial', 'el tiempo (min) entre llegadas de clientes a una caja', '\\lambda', 'X\\sim Exp(\\lambda)'),
    'ber': ('Bernoulli', 'si un cliente compra (1) o no (0)', 'p', 'X\\sim Ber(p)'),
    'geo': ('Geométrica', 'el número de llamadas hasta lograr una venta', 'p', 'X\\sim Geo(p)'),
    'uni': ('Uniforme', 'el retraso (min) de una micro, uniforme en $[0,\\theta]$', '\\theta', 'X\\sim Unif(0,\\theta)'),
    'pot': ('Potencia', 'la proporción de un terreno con riego tecnificado', '\\theta', 'f(x)=\\theta x^{\\theta-1},\\ 0<x<1'),
}


def _datos(rng, k):
    n = rng.choice([5, 6, 8])
    if k == 'poi':
        xs = [rng.randint(0, 6) for _ in range(n)]
    elif k == 'exp':
        xs = [round(rng.uniform(0.5, 6), 1) for _ in range(n)]
    elif k == 'ber':
        xs = [1 if rng.random() < 0.4 else 0 for _ in range(10)]
    elif k == 'geo':
        xs = [rng.randint(1, 6) for _ in range(n)]
    elif k == 'uni':
        xs = [round(rng.uniform(1, 14), 1) for _ in range(n)]
    else:
        xs = [round(rng.uniform(0.3, 0.95), 2) for _ in range(n)]
    if len(set(xs)) < 2:
        return None
    return xs


def _est(k, xs, met):
    n, xb = len(xs), sum(xs) / len(xs)
    if k in ('poi', 'ber'):
        return xb, f"\\bar x={t(xb)}"
    if k in ('exp', 'geo'):
        return 1 / xb, f"\\dfrac{{1}}{{\\bar x}}=\\dfrac{{1}}{{{t(xb)}}}={t(1 / xb)}"
    if k == 'uni':
        return (2 * xb, f"2\\bar x=2\\cdot{t(xb)}={t(2 * xb)}") if met == 'mom' else (max(xs), f"\\max_i x_i={t(max(xs))}")
    if met == 'mom':
        return xb / (1 - xb), f"\\dfrac{{\\bar x}}{{1-\\bar x}}=\\dfrac{{{t(xb)}}}{{{t(1 - xb)}}}={t(xb / (1 - xb))}"
    sl = sum(log(x) for x in xs)
    return -n / sl, f"-\\dfrac{{n}}{{\\sum\\ln x_i}}=-\\dfrac{{{n}}}{{{t(sl)}}}={t(-n / sl)}"


MOM_RAZON = {'poi': '$E(X)=\\lambda$, se iguala a $\\bar x$', 'exp': '$E(X)=1/\\lambda=\\bar x$', 'ber': '$E(X)=p=\\bar x$', 'geo': '$E(X)=1/p=\\bar x$',
             'uni': '$E(X)=\\theta/2=\\bar x$', 'pot': '$E(X)=\\dfrac{\\theta}{\\theta+1}=\\bar x$'}
MV_RAZON = {'poi': '$\\ell(\\lambda)=-n\\lambda+\\sum x_i\\ln\\lambda-\\sum\\ln x_i!$; $\\ell\'(\\lambda)=-n+\\dfrac{\\sum x_i}{\\lambda}=0$',
            'exp': '$\\ell(\\lambda)=n\\ln\\lambda-\\lambda\\sum x_i$; $\\ell\'(\\lambda)=\\dfrac{n}{\\lambda}-\\sum x_i=0$',
            'ber': '$\\ell(p)=\\sum x_i\\ln p+(n-\\sum x_i)\\ln(1-p)$; $\\ell\'(p)=0$',
            'geo': '$\\ell(p)=n\\ln p+(\\sum x_i-n)\\ln(1-p)$; $\\ell\'(p)=\\dfrac{n}{p}-\\dfrac{\\sum x_i-n}{1-p}=0$',
            'uni': '$L(\\theta)=\\theta^{-n}$ si $\\theta\\ge\\max x_i$: decrece en $\\theta$, se maximiza en el menor valor posible',
            'pot': '$\\ell(\\theta)=n\\ln\\theta+(\\theta-1)\\sum\\ln x_i$; $\\ell\'(\\theta)=\\dfrac{n}{\\theta}+\\sum\\ln x_i=0$'}


def numerico(rng, met=None):
    k = rng.choice(list(MODELOS))
    met = met or rng.choice(['mom', 'mv'])
    xs = _datos(rng, k)
    if not xs:
        return None
    nombre, var, par, dist = MODELOS[k]
    v, expr = _est(k, xs, met)
    xb = sum(xs) / len(xs)
    otro, _ = _est(k, xs, 'mv' if met == 'mom' else 'mom')
    met_txt = 'el método de momentos' if met == 'mom' else 'máxima verosimilitud'
    enun = f"Sea $X$ {var}, con ${dist}$. Una muestra aleatoria entregó: {', '.join('$' + t(x) + '$' for x in xs)}."
    razon = MOM_RAZON[k] if met == 'mom' else MV_RAZON[k]
    st = [razon + '.', f"$\\hat{{{par}}}={expr}$"]
    dist_ = [xb, 1 / xb, 2 * xb, max(xs), otro, xb / (1 - xb) if xb < 1 else xb / 2, xb * xb]
    return Q('Estimación numérica', 'Inferencia · ' + nombre, enun, f"Estime ${par}$ por {met_txt}.", alts(v, dist_), st,
             f"$\\hat{{{par}}}={t(v)}$.", sub='Momentos' if met == 'mom' else 'Máxima verosimilitud')


FORMULAS = {  # k: (correcta MV, correcta momentos, distractores)
    'poi': ('$\\hat\\lambda=\\bar X$', '$\\hat\\lambda=\\bar X$', ['$\\hat\\lambda=1/\\bar X$', '$\\hat\\lambda=S^2/\\bar X$', '$\\hat\\lambda=\\sum X_i$']),
    'exp': ('$\\hat\\lambda=1/\\bar X$', '$\\hat\\lambda=1/\\bar X$', ['$\\hat\\lambda=\\bar X$', '$\\hat\\lambda=n/\\bar X$', '$\\hat\\lambda=\\bar X^2$']),
    'uni': ('$\\hat\\theta=\\max_i X_i$', '$\\hat\\theta=2\\bar X$', ['$\\hat\\theta=\\bar X$', '$\\hat\\theta=\\bar X/2$', '$\\hat\\theta=\\min_i X_i$']),
    'pot': ('$\\hat\\theta=-\\dfrac{n}{\\sum\\ln X_i}$', '$\\hat\\theta=\\dfrac{\\bar X}{1-\\bar X}$', ['$\\hat\\theta=\\dfrac{1-\\bar X}{\\bar X}$', '$\\hat\\theta=\\bar X$', '$\\hat\\theta=\\sum\\ln X_i$']),
    'geo': ('$\\hat p=1/\\bar X$', '$\\hat p=1/\\bar X$', ['$\\hat p=\\bar X$', '$\\hat p=1-\\bar X$', '$\\hat p=n/\\sum X_i^2$']),
}


def formula(rng):
    k = rng.choice(list(FORMULAS))
    met = rng.choice(['mom', 'mv'])
    nombre, var, par, dist = MODELOS[k]
    mv, mom, malas = FORMULAS[k]
    ok = mv if met == 'mv' else mom
    otros = [x for x in [mom if met == 'mv' else mv] + malas if x != ok]
    return Q('Expresión del estimador', 'Inferencia · ' + nombre, f"Sea $X_1,\\dots,X_n$ una muestra aleatoria de ${dist}$.",
             f"¿Cuál es el estimador de ${par}$ por {'máxima verosimilitud' if met == 'mv' else 'el método de momentos'}?",
             alts_txt(ok, otros), [(MV_RAZON if met == 'mv' else MOM_RAZON)[k] + '.', 'Despejando: ' + ok + '.'], f"Estimador: {ok}.",
             sub='Máxima verosimilitud' if met == 'mv' else 'Momentos')


def verosimilitud(rng):
    k = rng.choice(['poi', 'exp', 'ber'])
    ok, malas = {
        'poi': ('$L(\\lambda)=\\dfrac{e^{-n\\lambda}\\lambda^{\\sum x_i}}{\\prod x_i!}$',
                ['$L(\\lambda)=\\dfrac{e^{-\\lambda}\\lambda^{\\sum x_i}}{\\prod x_i!}$', '$L(\\lambda)=\\sum_i \\dfrac{e^{-\\lambda}\\lambda^{x_i}}{x_i!}$', '$L(\\lambda)=e^{-n\\lambda}\\lambda^{n}$']),
        'exp': ('$L(\\lambda)=\\lambda^n e^{-\\lambda\\sum x_i}$', ['$L(\\lambda)=\\lambda e^{-\\lambda\\sum x_i}$', '$L(\\lambda)=\\sum_i\\lambda e^{-\\lambda x_i}$', '$L(\\lambda)=\\lambda^n e^{-n\\lambda}$']),
        'ber': ('$L(p)=p^{\\sum x_i}(1-p)^{n-\\sum x_i}$', ['$L(p)=p^{n}(1-p)^{\\sum x_i}$', '$L(p)=\\sum_i p^{x_i}(1-p)^{1-x_i}$', '$L(p)=np(1-p)$'])}[k]
    nombre, var, par, dist = MODELOS[k]
    return Q('Función de verosimilitud', 'Inferencia · ' + nombre, f"Sea $X_1,\\dots,X_n$ una muestra aleatoria (independiente) de ${dist}$.",
             f"¿Cuál es la función de verosimilitud $L({par})$?", alts_txt(ok, malas),
             ['La verosimilitud es el PRODUCTO de las densidades o cuantías evaluadas en la muestra (independencia).']
             + (['Al multiplicar $n$ términos $e^{-\\lambda}$ queda $e^{-n\\lambda}$: olvidar la $n$ es el error típico.'] if k == 'poi' else
                ['Al multiplicar $n$ términos $\\lambda e^{-\\lambda x_i}$ queda $\\lambda^n e^{-\\lambda\\sum x_i}$.'] if k == 'exp' else
                ['Al multiplicar $p^{x_i}(1-p)^{1-x_i}$ se suman los exponentes: $p^{\\sum x_i}(1-p)^{n-\\sum x_i}$.']),
             f"$L$ correcta: {ok}.", sub='Máxima verosimilitud')


def insesgado(rng):
    k = rng.choice(['media', 'var', 'uni'])
    if k == 'media':
        ok = "$T_1$ y $T_2$ son insesgados; $T_3$ no"
        enun = "Sea $X_1,X_2,X_3$ una muestra aleatoria con media $\\mu$. Se proponen $T_1=\\bar X$, $T_2=\\dfrac{X_1+X_3}{2}$ y $T_3=\\dfrac{X_1+X_2+X_3}{2}$."
        st = ["$E(T_1)=\\mu$, $E(T_2)=\\dfrac{\\mu+\\mu}{2}=\\mu$, $E(T_3)=\\dfrac{3\\mu}{2}\\ne\\mu$."]
        malas = ["Solo $T_1$ es insesgado", "Los tres son insesgados", "Solo $T_3$ es insesgado, porque usa todos los datos"]
        conc = 'Un estimador es insesgado si su esperanza es el parámetro.'
    elif k == 'var':
        ok = "$S^2=\\dfrac{1}{n-1}\\sum(X_i-\\bar X)^2$ es insesgado; $\\hat\\sigma^2=\\dfrac{1}{n}\\sum(X_i-\\bar X)^2$ subestima a $\\sigma^2$"
        enun = "Para estimar $\\sigma^2$ de una población se comparan $S^2$ (divide por $n-1$) y $\\hat\\sigma^2$ (divide por $n$, el estimador MV en la normal)."
        st = ["$E(S^2)=\\sigma^2$.", "$E(\\hat\\sigma^2)=\\dfrac{n-1}{n}\\sigma^2$: sesgo $-\\dfrac{\\sigma^2}{n}$, que desaparece cuando $n$ crece."]
        malas = ["Ambos son insesgados", "$\\hat\\sigma^2$ es insesgado y $S^2$ sobreestima", "Ninguno es insesgado"]
        conc = 'Por eso en el curso la varianza muestral divide por $n-1$.'
    else:
        ok = "$2\\bar X$ es insesgado; $\\max X_i$ tiene sesgo negativo"
        enun = "Para $X\\sim Unif(0,\\theta)$ se proponen $\\hat\\theta_1=2\\bar X$ (momentos) y $\\hat\\theta_2=\\max X_i$ (MV). Se sabe que $E(\\max X_i)=\\dfrac{n}{n+1}\\theta$."
        st = ["$E(2\\bar X)=2\\cdot\\dfrac{\\theta}{2}=\\theta$.", "$E(\\max X_i)=\\dfrac{n}{n+1}\\theta<\\theta$: subestima en promedio."]
        malas = ["Ambos son insesgados", "$\\max X_i$ es insesgado y $2\\bar X$ no", "Ninguno es insesgado"]
        conc = 'El máximo nunca supera a $\\theta$, por eso lo subestima.'
    return Q('Insesgamiento', 'Inferencia · Propiedades', enun, '¿Qué afirmación es correcta?', alts_txt(ok, malas), st, conc, sub='Propiedades')


def ecm(rng):
    sg2 = rng.choice([4, 9, 16, 25])
    n = rng.choice([5, 10, 20])
    sesgo = rng.choice([0.5, 1, 1.5])
    v1 = sg2 / n
    v2 = sg2 / (n + 2) * 0.8
    e2 = v2 + sesgo ** 2
    mejor = 'T_1' if v1 < e2 else 'T_2'
    enun = (f"Dos estimadores de $\\mu$: $T_1$ insesgado con $V(T_1)={t(v1)}$, y $T_2$ con sesgo ${t(sesgo)}$ y $V(T_2)={t(v2)}$.")
    st = [f"$ECM(T)=V(T)+\\text{{sesgo}}^2$.", f"$ECM(T_1)={t(v1)}$; $ECM(T_2)={t(v2)}+{t(sesgo)}^2={t(e2)}$."]
    ok = f"${mejor}$, porque tiene menor error cuadrático medio"
    malas = [f"${'T_2' if mejor == 'T_1' else 'T_1'}$, porque tiene menor ECM", "$T_1$, porque todo estimador insesgado es mejor", "$T_2$, porque tiene menor varianza"]
    if mejor == 'T_2':
        malas[2] = "Son equivalentes porque ambos estiman $\\mu$"
    return Q('Error cuadrático medio', 'Inferencia · Propiedades', enun, '¿Qué estimador conviene según el ECM?', alts_txt(ok, malas), st,
             f"ECM: ${t(v1)}$ frente a ${t(e2)}$.", sub='Propiedades')


def invarianza(rng):
    xs = [round(rng.uniform(1, 8), 1) for _ in range(rng.choice([5, 6]))]
    xb = sum(xs) / len(xs)
    t0 = rng.choice([2, 3, 5])
    v = exp(-t0 / xb)
    enun = f"El tiempo (horas) hasta la falla de un equipo es $Exp(\\lambda)$. Una muestra entregó {', '.join('$' + t(x) + '$' for x in xs)}."
    st = [f"$\\hat\\lambda_{{MV}}=1/\\bar x=1/{t(xb)}={t(1 / xb)}$.",
          f"Invarianza: el MV de $P(X>{t0})=e^{{-{t0}\\lambda}}$ es $e^{{-{t0}\\hat\\lambda}}=e^{{-{t0}/{t(xb)}}}={t(v)}$."]
    return Q('Invarianza del estimador MV', 'Inferencia · Exponencial', enun, f"Estime por máxima verosimilitud la probabilidad de que un equipo dure más de {t0} horas.",
             alts(v, [exp(-t0 * xb), 1 - v, t0 / xb, exp(-xb / t0)]), st, f"$\\widehat{{P}}(X>{t0})={t(v)}$.", sub='Máxima verosimilitud')


def caso_poisson(rng):
    xs = [rng.randint(1, 6) for _ in range(rng.choice([3, 4, 5]))]
    n, S = len(xs), sum(xs)
    xb = S / n
    enun = (f"El número de vehículos que llegan por minuto a una plaza de peaje sigue una distribución $Poi(\\lambda)$. "
            f"Se observaron {n} minutos independientes: {', '.join(map(str, xs))} vehículos.")
    p1 = P('Función de verosimilitud $L(\\lambda)$.', alts_txt('$L(\\lambda)=\\dfrac{e^{-n\\lambda}\\lambda^{\\sum x_i}}{\\prod x_i!}$',
                                                                ['$L(\\lambda)=\\dfrac{e^{-\\lambda}\\lambda^{\\sum x_i}}{\\prod x_i!}$', '$L(\\lambda)=\\sum \\dfrac{e^{-\\lambda}\\lambda^{x_i}}{x_i!}$', '$L(\\lambda)=\\lambda^n e^{-\\sum x_i}$']),
           ['Producto de las $n$ cuantías.'], 'Se multiplican las cuantías.')
    p2 = P('Log-verosimilitud $\\ell(\\lambda)$.', alts_txt('$\\ell(\\lambda)=-n\\lambda+\\left(\\sum x_i\\right)\\ln\\lambda-\\sum\\ln(x_i!)$',
                                                           ['$\\ell(\\lambda)=-\\lambda+\\left(\\sum x_i\\right)\\ln\\lambda$', '$\\ell(\\lambda)=-n\\lambda\\cdot\\sum x_i\\ln\\lambda$', '$\\ell(\\lambda)=n\\ln\\lambda-\\lambda\\sum x_i$']),
           ['Logaritmo del producto = suma de logaritmos.'], 'Ahora se deriva.')
    p3 = P('Estimador $\\hat\\lambda$ al resolver $\\ell\'(\\lambda)=0$.', alts_txt('$\\hat\\lambda=\\bar X$', ['$\\hat\\lambda=1/\\bar X$', '$\\hat\\lambda=\\sum X_i$', '$\\hat\\lambda=n\\bar X$']),
           ['$\\ell\'(\\lambda)=-n+\\dfrac{\\sum x_i}{\\lambda}=0\\Rightarrow \\hat\\lambda=\\dfrac{\\sum x_i}{n}=\\bar X$'], 'El MV de la tasa de Poisson es el promedio.')
    p4 = P('Estimación con los datos e interpretación.', alts(xb, [S, 1 / xb, xb * xb], fmt=lambda v: f"$\\hat\\lambda={t(v)}$ vehículos por minuto"),
           [f"$\\hat\\lambda=\\dfrac{{{'+'.join(map(str, xs))}}}{{{n}}}={t(xb)}$"], f"Se estima que llegan en promedio {s(xb)} vehículos por minuto.")
    return CASO('Caso: máxima verosimilitud en Poisson', 'Transporte · Peaje', enun, [p1, p2, p3, p4], sub='Máxima verosimilitud')


def caso_uniforme(rng):
    xs = [round(rng.uniform(1, 12), 1) for _ in range(5)]
    xb = sum(xs) / 5
    if 2 * xb < max(xs):
        return None
    enun = f"El retraso (min) de una micro es $Unif(0,\\theta)$. Se observaron cinco retrasos: {', '.join('$' + t(x) + '$' for x in xs)}."
    p1 = P('Estimación por momentos.', alts(2 * xb, [xb, max(xs), xb / 2], fmt=lambda v: f"$\\hat\\theta={t(v)}$"), [f"$\\theta/2=\\bar x\\Rightarrow\\hat\\theta=2\\cdot{t(xb)}={t(2 * xb)}$"], f"$\\hat\\theta_M={t(2 * xb)}$.")
    p2 = P('Estimación por máxima verosimilitud.', alts(max(xs), [2 * xb, xb, min(xs)], fmt=lambda v: f"$\\hat\\theta={t(v)}$"),
           ['$L(\\theta)=\\theta^{-5}$ si $\\theta\\ge\\max x_i$; decrece, así que se toma el menor $\\theta$ posible.', f"$\\hat\\theta={t(max(xs))}$"], f"$\\hat\\theta_{{MV}}={t(max(xs))}$.")
    p3 = P('¿Cuál es insesgado?', alts_txt('El de momentos ($2\\bar X$); el MV subestima en promedio', ['El MV; el de momentos sobreestima', 'Ambos son insesgados', 'Ninguno, porque $n=5$ es pequeño']),
           ['$E(2\\bar X)=\\theta$; $E(\\max X_i)=\\tfrac{5}{6}\\theta$.'], 'Insesgado: esperanza igual al parámetro.')
    return CASO('Caso: momentos vs. máxima verosimilitud', 'Transporte · Micro', enun, [p1, p2, p3], sub='Momentos')


def generar(rng):
    qs = []
    qs += variantes(rng, lambda r: numerico(r, 'mom'), 12)
    qs += variantes(rng, lambda r: numerico(r, 'mv'), 14)
    for fn, n in [(formula, 12), (verosimilitud, 6), (insesgado, 6), (ecm, 8), (invarianza, 6)]:
        qs += variantes(rng, fn, n)
    for fn, n in [(caso_poisson, 4), (caso_uniforme, 3)]:
        qs += variantes(rng, fn, n)
    return qs
