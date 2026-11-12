"""Gato de los Modelos Continuos: uniforme y exponencial (tasa λ). Probabilidades, E, V, parámetros desconocidos,
costos lineales, percentiles y garantía, falta de memoria, puente Poisson–exponencial y cambio de unidades.
Estilo: guía pye_11 y clase 10/10b AES500, Cátedra 2 P4."""
from math import exp, log
from comun import Q, P, CASO, alts, alts_txt, t, s, variantes

UNI = [('Transporte · Micro', 'el tiempo de espera (min) de una micro que pasa cada {b} minutos', 0, [10, 12, 15, 20], 'minutos'),
       ('Industria · Envasado', 'el peso (g) de una bolsa de arroz', 995, [1005, 1010, 1015], 'gramos'),
       ('Notaría · Atención', 'el tiempo de atención (min) en una notaría', 30, [50, 54, 60], 'minutos'),
       ('Logística · Proveedor', 'el retraso (días) de un proveedor', 0, [4, 5, 6, 8], 'días'),
       ('Inspección', 'la hora de llegada de un inspector, medida en horas desde las 9:00', 0, [8], 'horas')]


def _uni(rng):
    ctx, var, a, bs, u = rng.choice(UNI)
    b = rng.choice(bs)
    return ctx, var.format(b=b), a, b, u


def uniforme(rng):
    ctx, var, a, b, u = _uni(rng)
    L = b - a
    k = rng.choice(['mayor', 'entre', 'E', 'V', 'costo'])
    enun = f"Sea $X$ {var}, con $X\\sim Unif({a},{b})$."
    head = f"$f_X(x)=\\dfrac{{1}}{{{L}}}$ en $[{a},{b}]$, $F_X(x)=\\dfrac{{x-{a}}}{{{L}}}$, $E(X)=\\dfrac{{a+b}}{{2}}$, $V(X)=\\dfrac{{(b-a)^2}}{{12}}$."
    c = a + L * rng.choice([0.2, 0.25, 0.4, 0.5, 0.6, 0.75])
    d = a + L * rng.choice([0.8, 0.9])
    if k == 'mayor':
        v = (b - c) / L
        ask, st = f"¿Cuál es $P(X>{t(c)})$?", [f"$P(X>{t(c)})=\\dfrac{{{b}-{t(c)}}}{{{L}}}={t(v)}$ (largo del intervalo sobre largo total)"]
        dist = [(c - a) / L, 1 / L, c / b, (b - c) / b]
    elif k == 'entre':
        v = (d - c) / L
        ask, st = f"¿Cuál es $P({t(c)}<X<{t(d)})$?", [f"$P=\\dfrac{{{t(d)}-{t(c)}}}{{{L}}}={t(v)}$"]
        dist = [(d - a) / L, (c - a) / L, 1 - v, (d - c) / b]
    elif k == 'E':
        v = (a + b) / 2
        ask, st = '¿Cuál es $E(X)$?', [f"$E(X)=\\dfrac{{{a}+{b}}}{{2}}={t(v)}$"]
        dist = [L / 2, L * L / 12, b / 2 + 1, (L * L / 12) ** 0.5]
    elif k == 'V':
        v = L * L / 12
        ask, st = '¿Cuál es $V(X)$?', [f"$V(X)=\\dfrac{{({b}-{a})^2}}{{12}}=\\dfrac{{{L * L}}}{{12}}={t(v)}$"]
        dist = [L / 12, (L * L / 12) ** 0.5, L * L / 4, (a + b) / 2]
    else:
        f0, f1 = rng.choice([(3000, 2500), (1000, 500), (12000, -100), (5000, 200)])
        v = f0 + f1 * (a + b) / 2
        sg = '+' if f1 > 0 else '-'
        ask = f"Si el costo asociado es $C={f0}{sg}{abs(f1)}X$ pesos, ¿cuál es $E(C)$?"
        st = [f"$E(X)={t((a + b) / 2)}$", f"$E(C)={f0}{sg}{abs(f1)}\\cdot{t((a + b) / 2)}={t(v, 2)}$"]
        dist = [f1 * (a + b) / 2, f0 + f1 * L / 2, f0 + f1 * b, f0 + f1 * f1 * L * L / 12]
        return Q('Uniforme', ctx, enun, ask, alts(v, dist, d=2, rel=0.01), st, f"$E(C)={t(v, 2)}$ pesos.", head, sub='Uniforme')
    return Q('Uniforme', ctx, enun, ask, alts(v, dist), st, f"Resultado: <b>{s(v)}</b>.", head, sub='Uniforme')


def uni_param(rng):
    ctx = rng.choice(['Notaría · Atención', 'Proveedor · Retrasos'])
    if rng.random() < 0.5:
        b = rng.choice([50, 54, 60, 70])
        E = rng.choice([x for x in [38, 40, 42, 45] if x < b])
        a = 2 * E - b
        enun = f"El tiempo de atención $X$ (min) es $Unif(a,{b})$ y su valor esperado es {E} minutos."
        st = [f"$E(X)=\\dfrac{{a+{b}}}{{2}}={E}\\Rightarrow a=2\\cdot{E}-{b}={a}$"]
        return Q('Uniforme: parámetro desconocido', ctx, enun, '¿Cuál es el valor de $a$?', alts(a, [E - b / 2 + E, b - E, E / 2, 2 * E + b], d=2),
                 st, f"$a={a}$ minutos.", sub='Uniforme')
    p, x0 = rng.choice([(0.4, 2), (0.25, 1), (0.5, 3), (0.2, 1)])
    b = x0 / p
    enun = f"El retraso $X$ (días) de un proveedor es $Unif(0,b)$ y se sabe que $P(X\\le {x0})={t(p)}$."
    st = [f"$P(X\\le {x0})=\\dfrac{{{x0}}}{{b}}={t(p)}\\Rightarrow b=\\dfrac{{{x0}}}{{{t(p)}}}={t(b)}$"]
    return Q('Uniforme: parámetro desconocido', ctx, enun, '¿Cuál es el valor de $b$?', alts(b, [x0 * p, x0 / (1 - p), b / 2, 2 * b]), st, f"$b={t(b)}$ días.", sub='Uniforme')


EXP = [('Servidores · Fallas', 'el tiempo (horas) hasta la falla de un servidor', 'horas', [200, 500, 1000]),
       ('Farmacia · Fila', 'el tiempo de atención (minutos) en una farmacia', 'minutos', [3, 4, 5]),
       ('E-commerce · Pedidos', 'el tiempo (minutos) entre pedidos consecutivos', 'minutos', [2, 4, 8]),
       ('Electrodomésticos', 'la vida útil (años) del compresor de un refrigerador', 'años', [5, 8, 10]),
       ('Call center', 'la duración (minutos) de una llamada', 'minutos', [4, 6, 10])]


def _exp(rng):
    ctx, var, u, medias = rng.choice(EXP)
    mu = rng.choice(medias)
    return ctx, var, u, mu, 1 / mu


def exponencial(rng):
    ctx, var, u, mu, lam = _exp(rng)
    k = rng.choice(['menor', 'mayor', 'entre', 'lam', 'de'])
    a = mu * rng.choice([0.5, 1, 1.5, 2])
    b = a + mu * rng.choice([0.5, 1])
    enun = f"Sea $T$ {var}. $T$ tiene distribución exponencial con media {s(mu)} {u}."
    head = f"$T\\sim Exp(\\lambda)$ con $\\lambda=\\dfrac{{1}}{{E(T)}}={t(lam, 4)}$; $F_T(t)=1-e^{{-\\lambda t}}$, $P(T>t)=e^{{-\\lambda t}}$."
    if k == 'menor':
        v = 1 - exp(-lam * a)
        ask, st = f"¿Cuál es $P(T\\le {t(a)})$?", [f"$P(T\\le {t(a)})=1-e^{{-{t(lam)}\\cdot{t(a)}}}=1-e^{{-{t(lam * a)}}}={t(v)}$"]
        dist = [exp(-lam * a), 1 - exp(-a / mu / 2), a / (2 * mu), lam * exp(-lam * a)]
    elif k == 'mayor':
        v = exp(-lam * a)
        ask, st = f"¿Cuál es $P(T>{t(a)})$?", [f"$P(T>{t(a)})=e^{{-{t(lam * a)}}}={t(v)}$"]
        dist = [1 - v, exp(-a * mu / 100), lam * v, exp(-lam * a / 2)]
    elif k == 'entre':
        v = exp(-lam * a) - exp(-lam * b)
        ask, st = f"¿Cuál es $P({t(a)}<T<{t(b)})$?", [f"$P=F_T({t(b)})-F_T({t(a)})=e^{{-{t(lam * a)}}}-e^{{-{t(lam * b)}}}={t(v)}$"]
        dist = [exp(-lam * (b - a)), 1 - exp(-lam * (b - a)), exp(-lam * b), (b - a) / (2 * mu)]
    elif k == 'lam':
        v = lam
        ask, st = '¿Cuál es la tasa $\\lambda$ del modelo?', [f"$E(T)=\\dfrac{{1}}{{\\lambda}}={t(mu)}\\Rightarrow \\lambda={t(lam)}$ por {u[:-1]}"]
        dist = [mu, lam * lam, 1 / mu ** 2, 2 * lam]
    else:
        v = mu
        ask, st = '¿Cuál es la desviación estándar de $T$?', [f"$V(T)=\\dfrac{{1}}{{\\lambda^2}}={t(mu * mu)}$, $d.e.(T)=\\dfrac{{1}}{{\\lambda}}={t(mu)}$"]
        dist = [mu * mu, mu ** 0.5, lam, mu / 2]
    return Q('Exponencial', ctx, enun, ask, alts(v, dist), st, f"Resultado: <b>{s(v)}</b>.", head, sub='Exponencial')


def exp_percentil(rng):
    ctx, var, u, mu, lam = _exp(rng)
    k = rng.choice([5, 8, 10, 50, 90])
    v = -log(1 - k / 100) / lam
    enun = f"Sea $T$ {var}, exponencial con media {s(mu)} {u}, es decir, $\\lambda=1/{s(mu)}$."
    if k <= 10 and ctx.startswith(('Servidores', 'Electrodomésticos')):
        ask = f"El fabricante quiere fijar una garantía tal que solo el {k} % de las unidades falle antes de ese plazo. ¿Qué plazo debe fijar?"
    elif k == 50:
        ask = '¿Cuál es la mediana de $T$?'
    else:
        ask = f"¿Cuál es el percentil {k} de $T$?"
    st = [f"$F_T(x_{{{k}}})=1-e^{{-\\lambda x}}={t(k / 100)}\\Rightarrow x=-\\dfrac{{\\ln(1-{t(k / 100)})}}{{\\lambda}}$",
          f"$x=-\\ln({t(1 - k / 100)})\\cdot {t(mu)}={t(v)}$ {u}"]
    return Q('Percentiles y garantía', ctx, enun, ask, alts(v, [k / 100 * mu, -log(k / 100) / lam, mu, v * lam, mu * log(2) if k != 50 else mu]), st,
             f"<b>{s(v)}</b> {u}" + (" (la mediana es menor que la media: la exponencial es asimétrica a la derecha)." if k == 50 else '.'), sub='Exponencial')


def memoria(rng):
    ctx, var, u, mu, lam = _exp(rng)
    s0, t0 = mu * rng.choice([0.5, 1, 2]), mu * rng.choice([0.5, 1, 1.5])
    v = exp(-lam * t0)
    enun = f"Sea $T$ {var}, exponencial con media {s(mu)} {u} ($\\lambda=1/{s(mu)}$). Ya pasaron {s(s0)} {u if s0 != 1 else u[:-1]} sin que ocurra el evento."
    st = [f"$P(T>{t(s0 + t0)}|T>{t(s0)})=\\dfrac{{e^{{-\\lambda\\cdot{t(s0 + t0)}}}}}{{e^{{-\\lambda\\cdot{t(s0)}}}}}=e^{{-{t(t0)}/{t(mu)}}}={t(v)}$",
          'Falta de memoria: lo que ya pasó no cambia la probabilidad de lo que falta.']
    return Q('Falta de memoria', ctx, enun, f"¿Cuál es la probabilidad de que el tiempo total supere {s(s0 + t0)} {u}?",
             alts(v, [exp(-lam * (s0 + t0)), 1 - v, exp(-lam * s0), exp(-lam * (s0 + t0)) * exp(-lam * s0)]), st, f"Resultado: <b>{s(v)}</b>.", sub='Exponencial')


POI = [('Cafetería', 'pedidos por aplicación', 'minuto', [0.15, 0.25, 0.5]), ('Urgencias', 'llegadas', 'hora', [2, 3, 4]),
       ('Soporte técnico', 'tickets', 'hora', [1.5, 2, 5])]


def puente(rng):
    ctx, ev, u, lams = rng.choice(POI)
    lam = rng.choice(lams)
    t0 = rng.choice([5, 10, 20]) if lam < 1 else rng.choice([0.5, 1, 1.5])
    v = exp(-lam * t0)
    enun = (f"Los eventos ({ev}) llegan según un proceso de Poisson de tasa ${t(lam)}$ por {u}: $N(t)\\sim Poi({t(lam)}\\,t)$. "
            f"Sea $T$ el tiempo hasta la próxima.")
    st = [f"$T>{t(t0)}$ equivale a que no haya ninguna en ${t(t0)}$ {u + 's' if t0 != 1 else u}: $P(T>{t(t0)})=P(N({t(t0)})=0)=e^{{-{t(lam * t0)}}}$",
          f"Por eso $T\\sim Exp(\\lambda={t(lam)})$ y $P(T>{t(t0)})={t(v)}$"]
    return Q('Puente Poisson–exponencial', ctx, enun, f"¿Cuál es la probabilidad de esperar más de {s(t0)} {u + 's' if t0 != 1 else u}?",
             alts(v, [1 - v, exp(-t0 / lam), lam * t0 * exp(-lam * t0), exp(-lam)]), st, f"Resultado: <b>{s(v)}</b>.", sub='Exponencial')


def unidades(rng):
    mu_h = rng.choice([0.5, 0.25, 2])
    x_min = rng.choice([10, 15, 30, 45])
    lam_min = 1 / (mu_h * 60)
    v = exp(-lam_min * x_min)
    enun = f"El tiempo de reparación $T$ es exponencial con media {s(mu_h)} horas."
    st = [f"Media en minutos: ${t(mu_h)}\\cdot 60={t(mu_h * 60)}$ min, $\\lambda=\\dfrac{{1}}{{{t(mu_h * 60)}}}$ por minuto.",
          f"$P(T>{x_min}\\text{{ min}})=e^{{-{x_min}/{t(mu_h * 60)}}}={t(v)}$"]
    return Q('Cambio de unidades', 'Servicio técnico', enun, f"¿Cuál es la probabilidad de que una reparación dure más de {x_min} minutos?",
             alts(v, [exp(-x_min / mu_h), exp(-x_min * mu_h), 1 - v, exp(-x_min / (mu_h * 100))]), st,
             'Antes de calcular hay que expresar la media y el tiempo en la misma unidad.', sub='Exponencial')


def caso_exp(rng):
    ctx, var, u, mu, lam = _exp(rng)
    a, s0 = mu, mu / 2
    enun = f"Sea $T$ {var}. Su función de distribución acumulada es $F_T(t)=1-e^{{-{t(lam)}t}}$ para $t\\ge 0$."
    p1 = P('Identifique el modelo y su parámetro.', alts_txt(f"$T\\sim Exp(\\lambda={t(lam)})$, con media {s(mu)} {u}",
                                                             [f"$T\\sim Exp(\\lambda={t(mu)})$, con media {s(lam)} {u}", f"$T\\sim Poi({t(lam)})$", f"$T\\sim Unif(0,{t(2 * mu)})$"]),
           [f"$f_T(t)=F_T'(t)={t(lam)}e^{{-{t(lam)}t}}$: exponencial de tasa ${t(lam)}$."], f"$E(T)={t(mu)}$ {u}.")
    p2 = P(f"$P(T>{t(a)})$.", alts(exp(-1), [1 - exp(-1), 0.5, exp(-lam)]), [f"$e^{{-{t(lam)}\\cdot{t(a)}}}=e^{{-1}}={t(exp(-1))}$"], f"<b>{s(exp(-1))}</b>: más de la mitad dura menos que la media.")
    x = -log(0.92) / lam
    p3 = P('Plazo de garantía para que solo el 8 % falle antes.', alts(x, [0.08 * mu, -log(0.08) / lam, mu]), [f"$x_8=-\\dfrac{{\\ln 0{{,}}92}}{{{t(lam)}}}={t(x)}$"], f"<b>{s(x)}</b> {u}.")
    p4 = P(f"Si ya funcionó {s(s0)} {u}, probabilidad de que dure más de {s(s0 + a)} en total.", alts(exp(-1), [exp(-1.5), 1 - exp(-1), exp(-0.5)]),
           [f"Falta de memoria: $P(T>{t(s0 + a)}|T>{t(s0)})=P(T>{t(a)})=e^{{-1}}={t(exp(-1))}$"], 'Igual que en el inciso b): no tiene memoria.')
    return CASO('Caso: exponencial completo', ctx, enun, [p1, p2, p3, p4], sub='Exponencial')


def caso_uni(rng):
    ctx, var, a, b, u = _uni(rng)
    L = b - a
    c = a + L * 0.25
    enun = f"Sea $X$ {var}, $X\\sim Unif({a},{b})$."
    p1 = P(f"$P(X>{t(c)})$.", alts(0.75, [0.25, c / b, 1 / L]), [f"$\\dfrac{{{b}-{t(c)}}}{{{L}}}=0{{,}}75$"], '<b>0,75</b>.')
    p2 = P('$E(X)$ y $d.e.(X)$.', alts_txt(f"$E(X)={t((a + b) / 2)}$ y $d.e.(X)={t(L / 12 ** 0.5)}$",
                                          [f"$E(X)={t((a + b) / 2)}$ y $d.e.(X)={t(L * L / 12)}$", f"$E(X)={t(L)}$ y $d.e.(X)={t(L / 12 ** 0.5)}$", f"$E(X)={t((a + b) / 2)}$ y $d.e.(X)={t(L / 12)}$"]),
           [f"$E(X)={t((a + b) / 2)}$, $V(X)=\\dfrac{{{L}^2}}{{12}}={t(L * L / 12)}$, $d.e.={t(L / 12 ** 0.5)}$"], 'La desviación es la raíz de la varianza.')
    p90 = a + 0.9 * L
    p3 = P('Percentil 90 de $X$.', alts(p90, [0.9 * L, b - 0.9, a + 0.1 * L]), [f"$\\dfrac{{x-{a}}}{{{L}}}=0{{,}}9\\Rightarrow x={t(p90)}$"], f"<b>{s(p90)}</b> {u}.")
    return CASO('Caso: uniforme completo', ctx, enun, [p1, p2, p3], sub='Uniforme')


def generar(rng):
    qs = []
    for fn, n in [(uniforme, 16), (uni_param, 6), (exponencial, 18), (exp_percentil, 10), (memoria, 8), (puente, 8), (unidades, 5)]:
        qs += variantes(rng, fn, n)
    for fn, n in [(caso_exp, 4), (caso_uni, 3)]:
        qs += variantes(rng, fn, n)
    return qs
