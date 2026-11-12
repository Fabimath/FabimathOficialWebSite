"""Gato Condicional (extra): tablas diagnósticas, extracciones sin reemplazo, condicionar en una unión,
independencia en tablas y regla multiplicativa. Estilo: Tutoría 4 AES500, C2 AES519, Taller 6 MAT033."""
from comun import Q, P, CASO, alts, alts_txt, t, s, variantes, frac

ENF = [('Salud · Tamizaje de diabetes', 'diabetes', 'un test rápido de glicemia', 'personas'),
       ('Salud · Infección viral', 'la infección', 'un test de antígeno', 'personas'),
       ('Salud · Hipertensión', 'hipertensión', 'una medición en farmacia', 'personas'),
       ('Veterinaria · Leucemia felina', 'leucemia felina', 'un test rápido en la clínica', 'gatos')]


def _diag(rng):
    ctx, enf, test, quienes = rng.choice(ENF)
    N = rng.choice([400, 500, 600, 800, 1000])
    E = rng.randint(N // 8, N // 3)
    tp = round(E * rng.choice([0.80, 0.85, 0.88, 0.90, 0.92]))
    tn = round((N - E) * rng.choice([0.85, 0.90, 0.93, 0.95]))
    fn, fp = E - tp, N - E - tn
    table = {'head': ['', 'Enfermo ($E$)', 'Sano ($E^c$)', 'Total'],
             'rows': [['Test positivo ($+$)', tp, fp, tp + fp], ['Test negativo ($-$)', fn, tn, fn + tn], ['Total', E, N - E, N]]}
    enun = f"Se aplicó {test} a {N} {quienes} cuya condición respecto de {enf} se confirmó después con el examen de referencia."
    return ctx, enf, table, enun, N, E, tp, fp, fn, tn


MEDIDAS = {
    'Sensibilidad': ('la sensibilidad del test, $P(+|E)$', lambda d: d['tp'] / d['E'], 'tp', 'E', 'P(+|E)'),
    'Especificidad': ('la especificidad del test, $P(-|E^c)$', lambda d: d['tn'] / (d['N'] - d['E']), 'tn', 'NE', 'P(-|E^c)'),
    'Valor predictivo positivo': ('el valor predictivo positivo, $P(E|+)$', lambda d: d['tp'] / (d['tp'] + d['fp']), 'tp', 'pos', 'P(E|+)'),
    'Valor predictivo negativo': ('el valor predictivo negativo, $P(E^c|-)$', lambda d: d['tn'] / (d['fn'] + d['tn']), 'tn', 'neg', 'P(E^c|-)'),
    'Falsos positivos': ('la tasa de falsos positivos, $P(+|E^c)$', lambda d: d['fp'] / (d['N'] - d['E']), 'fp', 'NE', 'P(+|E^c)'),
}
INTERP = {'Sensibilidad': 'de cada 100 enfermos, el test detecta como positivos a unos {p}',
          'Especificidad': 'de cada 100 sanos, el test da negativo en unos {p}',
          'Valor predictivo positivo': 'de cada 100 personas con test positivo, unas {p} están realmente enfermas',
          'Valor predictivo negativo': 'de cada 100 personas con test negativo, unas {p} están realmente sanas',
          'Falsos positivos': 'de cada 100 sanos, unos {p} reciben un positivo erróneo'}


def _medida(dd, nombre):
    texto, f, num, den, simb = MEDIDAS[nombre]
    v = f(dd)
    dens = {'E': dd['E'], 'NE': dd['N'] - dd['E'], 'pos': dd['tp'] + dd['fp'], 'neg': dd['fn'] + dd['tn']}
    otros = [g(dd) for k, (_, g, *_r) in MEDIDAS.items() if k != nombre] + [dd[num] / dd['N']]
    st = [f"Se condiciona a la columna o fila que corresponde: ${simb}=\\dfrac{{{dd[num]}}}{{{dens[den]}}}={t(v)}$"]
    return v, otros, st, texto


def diagnostico(rng):
    ctx, enf, table, enun, N, E, tp, fp, fn, tn = _diag(rng)
    dd = dict(N=N, E=E, tp=tp, fp=fp, fn=fn, tn=tn)
    nombre = rng.choice(list(MEDIDAS))
    v, otros, st, texto = _medida(dd, nombre)
    return Q(f'Tabla diagnóstica · {nombre.lower()}', ctx, enun, f"Calcule {texto}.", alts(v, otros), st,
             f"<b>{s(v)}</b>: {INTERP[nombre].format(p=s(100 * v, 0, cut=False))}.", table=table, sub='Tablas')


URNAS = [('Control de calidad', 'Una caja tiene {r} piezas buenas y {b} defectuosas', 'buena', 'defectuosa'),
         ('Farmacia', 'Un cajón tiene {r} cajas de paracetamol y {b} de ibuprofeno', 'de paracetamol', 'de ibuprofeno'),
         ('Retail · Sorteo', 'Una tómbola tiene {r} fichas de premio menor y {b} fichas de premio mayor', 'de premio menor', 'de premio mayor')]


def sin_reemplazo(rng):
    ctx, txt, nr, nb = rng.choice(URNAS)
    r, b = rng.randint(4, 9), rng.randint(2, 6)
    n = r + b
    k = rng.choice(['ab', 'segunda', 'atras', 'ambas'])
    enun = txt.format(r=r, b=b) + '. Se extraen dos al azar, una tras otra y sin reemplazo.'
    if k == 'ab':
        v = r / n * b / (n - 1)
        ask = f"¿Cuál es la probabilidad de que la primera sea {nr} y la segunda {nb}?"
        st = [f"Regla multiplicativa: $P(R_1\\cap B_2)=P(R_1)P(B_2|R_1)=\\dfrac{{{r}}}{{{n}}}\\cdot\\dfrac{{{b}}}{{{n - 1}}}={t(v)}$"]
        dist = [r / n * b / n, 2 * r * b / (n * (n - 1)), b / n, r * b / n ** 2 * 2]
    elif k == 'ambas':
        v = b / n * (b - 1) / (n - 1)
        ask = f"¿Cuál es la probabilidad de que ambas sean {nb}?"
        st = [f"$P(B_1\\cap B_2)=\\dfrac{{{b}}}{{{n}}}\\cdot\\dfrac{{{b - 1}}}{{{n - 1}}}={t(v)}$"]
        dist = [(b / n) ** 2, b / n * b / (n - 1), (b - 1) / (n - 1), 2 * v]
    elif k == 'segunda':
        v = b / n
        ask = f"¿Cuál es la probabilidad de que la segunda extraída sea {nb}?"
        st = [f"Probabilidad total: $P(B_2)=P(R_1)P(B_2|R_1)+P(B_1)P(B_2|B_1)$",
              f"$=\\dfrac{{{r}}}{{{n}}}\\cdot\\dfrac{{{b}}}{{{n - 1}}}+\\dfrac{{{b}}}{{{n}}}\\cdot\\dfrac{{{b - 1}}}{{{n - 1}}}={frac(b, n)}={t(v)}$",
              "Es igual a $P(B_1)$: sin información de la primera, la segunda tiene la misma probabilidad."]
        dist = [(b - 1) / (n - 1), b / (n - 1), r / n * b / (n - 1), b * (b - 1) / (n * (n - 1))]
    else:
        v = (b - 1) / (n - 1)
        ask = f"Si la segunda resultó {nb}, ¿cuál es la probabilidad de que la primera también lo haya sido?"
        st = [f"$P(B_1|B_2)=\\dfrac{{P(B_1\\cap B_2)}}{{P(B_2)}}=\\dfrac{{\\frac{{{b}}}{{{n}}}\\cdot\\frac{{{b - 1}}}{{{n - 1}}}}}{{{frac(b, n)}}}={frac(b - 1, n - 1)}={t(v)}$"]
        dist = [b / n, b * (b - 1) / (n * (n - 1)), (b - 1) / n, b / (n - 1)]
    return Q('Extracciones sin reemplazo', ctx, enun, ask, alts(v, dist), st, f"La probabilidad es <b>{s(v)}</b>.", sub='Regla multiplicativa')


TAB3 = [('Transporte · Encuesta', 'usuarios del transporte público', ['Metro', 'Micro', 'Colectivo'], ['Satisfecho', 'No satisfecho']),
        ('Salud · Urgencias', 'pacientes atendidos', ['Pediatría', 'Adulto', 'Adulto mayor'], ['Hospitalizado', 'Alta']),
        ('Retail · Canales', 'pedidos', ['Web', 'App', 'Tienda'], ['Con reclamo', 'Sin reclamo'])]


def _tab3(rng):
    ctx, pob, filas, cols = rng.choice(TAB3)
    m = [[rng.randint(15, 90) for _ in range(2)] for _ in range(3)]
    N = sum(map(sum, m))
    rows = [[filas[i], m[i][0], m[i][1], sum(m[i])] for i in range(3)]
    rows.append(['Total', m[0][0] + m[1][0] + m[2][0], m[0][1] + m[1][1] + m[2][1], N])
    return ctx, pob, filas, cols, m, N, {'head': ['', cols[0], cols[1], 'Total'], 'rows': rows}


def union_cond(rng):
    ctx, pob, filas, cols, m, N, table = _tab3(rng)
    i, j = rng.sample(range(3), 2)
    num, den = m[i][0] + m[j][0], sum(m[i]) + sum(m[j])
    v = num / den
    enun = f"La tabla clasifica a {N} {pob}. Se elige uno al azar."
    ask = f"Si se sabe que es de «{filas[i]}» o de «{filas[j]}», ¿cuál es la probabilidad de que sea «{cols[0]}»?"
    st = [f"Se condiciona a la unión de las dos filas: total ${sum(m[i])}+{sum(m[j])}={den}$.",
          f"Favorables en esas filas: ${m[i][0]}+{m[j][0]}={num}$.", f"$P={frac(num, den)}={t(v)}$"]
    dist = [num / N, m[i][0] / sum(m[i]) + m[j][0] / sum(m[j]), (m[i][0] / sum(m[i]) + m[j][0] / sum(m[j])) / 2 + 0.03, den / N, num / (m[0][0] + m[1][0] + m[2][0])]
    return Q('Condicionar en una unión', ctx, enun, ask, alts(v, dist), st, f"La probabilidad es <b>{s(v)}</b>.", table=table, sub='Tablas')


def indep_tabla(rng):
    ctx, pob, filas, cols, m, N, table = _tab3(rng)
    i = rng.randrange(3)
    pa = sum(m[i]) / N
    pb = (m[0][0] + m[1][0] + m[2][0]) / N
    pab = m[i][0] / N
    indep = abs(pab - pa * pb) < 1e-9
    ok = (f"No son independientes: $P(F\\cap C)={t(pab)}\\ne P(F)P(C)={t(pa * pb)}$" if not indep else
          f"Son independientes: $P(F\\cap C)=P(F)P(C)={t(pab)}$")
    otras = [f"Son independientes, porque $P(F\\cap C)\\ne 0$", f"Son incompatibles, porque $P(F\\cap C)={t(pab)}$",
             f"Son independientes, porque $P(C|F)={t(pab / pa)}$ es menor que 1"]
    enun = (f"La tabla clasifica a {N} {pob}. Sean $F$: «es de {filas[i]}» y $C$: «es {cols[0]}».")
    st = [f"$P(F)={frac(sum(m[i]), N)}={t(pa)}$, $P(C)={frac(m[0][0] + m[1][0] + m[2][0], N)}={t(pb)}$, $P(F\\cap C)={frac(m[i][0], N)}={t(pab)}$",
          f"$P(F)P(C)={t(pa * pb)}$" + ('' if indep else f", distinto de ${t(pab)}$."),
          f"Equivalente: $P(C|F)={t(pab / pa)}$ frente a $P(C)={t(pb)}$."]
    return Q('Independencia en una tabla', ctx, enun, '¿Son independientes $F$ y $C$?', alts_txt(ok, otras), st,
             'Para decidir se compara la conjunta con el producto de las marginales (o la condicional con la marginal).', table=table, sub='Tablas')


MULT = [('Banca · Créditos', 'un cliente que solicita un crédito', 'S', 'tiene seguro de desgravamen', 'A', 'el crédito es aprobado'),
        ('Educación · Ramos', 'un estudiante que rinde el examen', 'T', 'asistió a la tutoría', 'A', 'aprueba el examen'),
        ('Salud · Vacunación', 'un adulto mayor', 'V', 'está vacunado contra la influenza', 'H', 'se hospitaliza en invierno')]


def multiplicativa(rng):
    ctx, quien, B, tb, A, ta = rng.choice(MULT)
    pb = rng.choice([0.3, 0.4, 0.45, 0.6, 0.7])
    pab_ = rng.choice([0.2, 0.25, 0.6, 0.75, 0.8])
    pa = rng.choice([x for x in [0.35, 0.4, 0.5, 0.55, 0.6] if x > pb * pab_ + 0.02])
    inter = pb * pab_
    k = rng.choice(['inter', 'inversa'])
    enun = (f"Para {quien} elegido al azar, sea ${B}$: {tb} y ${A}$: {ta}. Se sabe que $P({B})={t(pb)}$, "
            f"$P({A}|{B})={t(pab_)}$ y $P({A})={t(pa)}$.")
    if k == 'inter':
        v, ask = inter, f"¿Cuál es $P({A}\\cap {B})$?"
        st = [f"$P({A}\\cap {B})=P({A}|{B})P({B})={t(pab_)}\\cdot{t(pb)}={t(v)}$"]
        dist = [pa * pb, pab_, pab_ / pb if pab_ < pb else pab_ * pa, inter / pa]
    else:
        v, ask = inter / pa, f"¿Cuál es $P({B}|{A})$?"
        st = [f"$P({A}\\cap {B})=P({A}|{B})P({B})={t(pab_)}\\cdot{t(pb)}={t(inter)}$",
              f"$P({B}|{A})=\\dfrac{{P({A}\\cap {B})}}{{P({A})}}=\\dfrac{{{t(inter)}}}{{{t(pa)}}}={t(v)}$"]
        dist = [inter, pab_, pb, inter / pb]
    return Q('Regla multiplicativa', ctx, enun, ask, alts(v, dist), st, f"El resultado es <b>{s(v)}</b>.", sub='Regla multiplicativa')


def caso_tabla(rng):
    ctx, pob, filas, cols, m, N, table = _tab3(rng)
    i = rng.randrange(3)
    c0 = m[0][0] + m[1][0] + m[2][0]
    F, C = filas[i], cols[0]
    vals = [(f"Probabilidad de que sea «{C}».", c0 / N, [f"$P(C)={frac(c0, N)}={t(c0 / N)}$"]),
            (f"Probabilidad de que sea de «{F}» y «{C}».", m[i][0] / N, [f"$P(F\\cap C)={frac(m[i][0], N)}={t(m[i][0] / N)}$"]),
            (f"Probabilidad de que sea de «{F}» o «{C}».", (sum(m[i]) + c0 - m[i][0]) / N,
             [f"$P(F\\cup C)=\\dfrac{{{sum(m[i])}+{c0}-{m[i][0]}}}{{{N}}}={t((sum(m[i]) + c0 - m[i][0]) / N)}$"]),
            (f"Si es de «{F}», probabilidad de que sea «{C}».", m[i][0] / sum(m[i]), [f"$P(C|F)={frac(m[i][0], sum(m[i]))}={t(m[i][0] / sum(m[i]))}$"]),
            (f"Si es «{C}», probabilidad de que sea de «{F}».", m[i][0] / c0, [f"$P(F|C)={frac(m[i][0], c0)}={t(m[i][0] / c0)}$"])]
    todos = [v for _, v, _ in vals] + [sum(m[i]) / N]
    partes = [P(a, alts(v, todos), st, f"Resultado: <b>{s(v)}</b>.") for a, v, st in vals]
    return CASO('Caso: tabla de contingencia completa', ctx, f"La tabla clasifica a {N} {pob}. Se elige uno al azar; $F$: «es de {F}» y $C$: «es {C}».",
                partes, table=table, sub='Tablas')


def caso_diag(rng):
    ctx, enf, table, enun, N, E, tp, fp, fn, tn = _diag(rng)
    dd = dict(N=N, E=E, tp=tp, fp=fp, fn=fn, tn=tn)
    partes = [P(f"Probabilidad de que una persona elegida al azar esté enferma (prevalencia).", alts(E / N, [tp / N, (tp + fp) / N, tp / (tp + fp)]),
                [f"$P(E)={frac(E, N)}={t(E / N)}$"], f"La prevalencia en la muestra es <b>{s(E / N)}</b>.")]
    for nombre in ['Sensibilidad', 'Especificidad', 'Valor predictivo positivo', 'Valor predictivo negativo']:
        v, otros, st, texto = _medida(dd, nombre)
        partes.append(P(f"Calcule {texto}.", alts(v, otros), st, f"<b>{s(v)}</b>: {INTERP[nombre].format(p=s(100 * v, 0, cut=False))}."))
    return CASO('Caso: evaluación de un test diagnóstico', ctx, enun, partes, table=table, sub='Tablas')


def generar(rng):
    qs = []
    for fn, n in [(diagnostico, 20), (sin_reemplazo, 14), (union_cond, 10), (indep_tabla, 8), (multiplicativa, 10)]:
        qs += variantes(rng, fn, n)
    for fn, n in [(caso_tabla, 4), (caso_diag, 4)]:
        qs += variantes(rng, fn, n)
    return qs
