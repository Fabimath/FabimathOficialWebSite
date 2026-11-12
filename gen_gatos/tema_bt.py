"""Gato de Bayes (extra): probabilidad total y Bayes con tres causas, Bayes sobre el complemento,
Bayes inverso, tamizaje con prevalencia baja y casos tipo cátedra (Cátedra 2 AES500, C2 AES519, Certamen 2 MAT033)."""
from comun import Q, P, CASO, alts, t, s, variantes

TRES = [  # ctx, objeto, causas, evento, texto evento
    ('Seguros · Sucursales', 'reclamo de seguro', ['sucursal Viña', 'sucursal Valparaíso', 'sucursal Quilpué'], 'A', 'es apelado', 'sea apelado'),
    ('Industria · Proveedores', 'repuesto', ['proveedor A', 'proveedor B', 'proveedor C'], 'F', 'sale defectuoso', 'salga defectuoso'),
    ('Salud · Derivación', 'paciente de urgencia', ['Pediatría', 'Medicina interna', 'Traumatología'], 'H', 'queda hospitalizado', 'quede hospitalizado'),
    ('Logística · Despachos', 'despacho', ['camión propio', 'empresa externa', 'courier'], 'R', 'llega con retraso', 'llegue con retraso'),
    ('Banca · Segmentos', 'cliente', ['segmento joven', 'segmento adulto', 'segmento senior'], 'M', 'cae en mora', 'caiga en mora'),
]


def _tres(rng):
    ctx, obj, causas, E, te, ts = rng.choice(TRES)
    pr = rng.choice([(0.5, 0.3, 0.2), (0.45, 0.35, 0.2), (0.6, 0.25, 0.15), (0.4, 0.4, 0.2), (0.25, 0.35, 0.4)])
    cond = [rng.choice([0.02, 0.03, 0.04, 0.05, 0.06, 0.08, 0.1, 0.12, 0.15]) for _ in range(3)]
    if len(set(cond)) < 3:
        return None
    enun = (f"Cada {obj} proviene de {causas[0]} ({s(100 * pr[0])} %), {causas[1]} ({s(100 * pr[1])} %) o {causas[2]} ({s(100 * pr[2])} %). "
            f"Según el registro histórico, {te} el {s(100 * cond[0])} % de los de {causas[0]}, el {s(100 * cond[1])} % de los de {causas[1]} "
            f"y el {s(100 * cond[2])} % de los de {causas[2]}. Se elige un {obj} al azar.")
    tot = sum(p * c for p, c in zip(pr, cond))
    return ctx, obj, causas, E, te, pr, cond, tot, enun, ts


def _total_steps(E, pr, cond, tot):
    terms = '+'.join(f"{t(c)}\\cdot{t(p)}" for p, c in zip(pr, cond))
    return [f"Partición $C_1,C_2,C_3$ con $P(C_i)$ = {', '.join('$' + t(p) + '$' for p in pr)}.",
            f"$P({E})=\\sum P({E}|C_i)P(C_i)={terms}={t(tot)}$"]


def total3(rng):
    r = _tres(rng)
    if not r:
        return None
    ctx, obj, causas, E, te, pr, cond, tot, enun, ts = r
    return Q('Probabilidad total (3 causas)', ctx, enun, f"¿Cuál es la probabilidad de que el {obj} elegido {ts}?",
             alts(tot, [sum(cond) / 3, sum(cond), max(cond) * max(pr), pr[0] * cond[0]]), _total_steps(E, pr, cond, tot),
             f"$P({E})={t(tot)}$: alrededor del {s(100 * tot, 2)} % de los {obj}s {te}.", sub='Tres causas')


def bayes3(rng):
    r = _tres(rng)
    if not r:
        return None
    ctx, obj, causas, E, te, pr, cond, tot, enun, ts = r
    i = rng.randrange(3)
    v = pr[i] * cond[i] / tot
    st = _total_steps(E, pr, cond, tot) + [f"$P(C_{i + 1}|{E})=\\dfrac{{P({E}|C_{i + 1})P(C_{i + 1})}}{{P({E})}}=\\dfrac{{{t(cond[i])}\\cdot{t(pr[i])}}}{{{t(tot)}}}={t(v)}$"]
    return Q('Bayes (3 causas)', ctx, enun, f"Si el {obj} {te}, ¿cuál es la probabilidad de que provenga de {causas[i]}?",
             alts(v, [pr[i] * cond[i], cond[i], pr[i], cond[i] / sum(cond), pr[i] * cond[i] / sum(cond)]), st,
             f"<b>{s(v)}</b>. Antes de saberlo la probabilidad de {causas[i]} era {s(pr[i])}; la información la actualiza.", sub='Tres causas')


def bayes_comp(rng):
    r = _tres(rng)
    if not r:
        return None
    ctx, obj, causas, E, te, pr, cond, tot, enun, ts = r
    i = rng.randrange(3)
    v = pr[i] * (1 - cond[i]) / (1 - tot)
    st = _total_steps(E, pr, cond, tot) + [f"$P({E}^c)=1-{t(tot)}={t(1 - tot)}$",
                                            f"$P(C_{i + 1}|{E}^c)=\\dfrac{{(1-{t(cond[i])})\\cdot{t(pr[i])}}}{{{t(1 - tot)}}}={t(v)}$"]
    return Q('Bayes sobre el complemento', ctx, enun, f"Si el {obj} NO {te}, ¿cuál es la probabilidad de que provenga de {causas[i]}?",
             alts(v, [pr[i] * cond[i] / tot, pr[i] * (1 - cond[i]), pr[i], (1 - cond[i]) / (1 - tot)]), st,
             f"La probabilidad es <b>{s(v)}</b>.", sub='Tres causas')


DOS = [('Educación · Preuniversitario', 'estudiante', 'asistió al preuniversitario', 'A', 'ingresa a la carrera que quería', 'I'),
       ('Salud · Fumadores', 'paciente', 'es fumador', 'F', 'presenta enfermedad respiratoria', 'R'),
       ('Seguros · Conductores', 'asegurado', 'es conductor joven', 'J', 'tiene un siniestro en el año', 'S')]


def bayes_inverso(rng):
    ctx, q, ta, A, tb, B = rng.choice(DOS)
    pa = rng.choice([0.2, 0.25, 0.3, 0.35, 0.4])
    p1, p0 = rng.choice([(0.6, 0.3), (0.7, 0.4), (0.5, 0.2), (0.45, 0.15), (0.8, 0.5)])
    pb = pa * p1 + (1 - pa) * p0
    enun = (f"Para un {q} elegido al azar, sea ${A}$: {ta} y ${B}$: {tb}. Se sabe que $P({B}|{A})={t(p1)}$, "
            f"$P({B}|{A}^c)={t(p0)}$ y que, en total, $P({B})={t(pb)}$.")
    st = [f"Probabilidad total como ecuación: ${t(pb)}={t(p1)}\\,P({A})+{t(p0)}\\,(1-P({A}))$",
          f"${t(pb)}-{t(p0)}=({t(p1)}-{t(p0)})P({A})\\Rightarrow P({A})=\\dfrac{{{t(pb - p0)}}}{{{t(p1 - p0)}}}={t(pa)}$"]
    return Q('Bayes inverso: despejar la previa', ctx, enun, f"¿Cuál es $P({A})$, la proporción de {q}s que {ta}?",
             alts(pa, [pb / p1, pb - p0, 1 - pa, (pb - p0) / p1, pb * p1]), st,
             f"$P({A})={t(pa)}$: la fórmula de probabilidad total se usa como ecuación.", sub='Dos causas')


def tamizaje(rng):
    enf, ctx = rng.choice([('una enfermedad rara', 'Salud · Tamizaje neonatal'), ('cáncer de mama', 'Salud · Mamografía'),
                           ('VIH', 'Salud · Test rápido')])
    prev = rng.choice([0.005, 0.01, 0.02, 0.03, 0.05])
    sens = rng.choice([0.9, 0.95, 0.98, 0.99])
    esp = rng.choice([0.9, 0.95, 0.97, 0.98])
    pos = sens * prev + (1 - esp) * (1 - prev)
    v = sens * prev / pos
    enun = (f"La prevalencia de {enf} en la población es {s(100 * prev, 2)} %. Un test tiene sensibilidad "
            f"$P(+|E)={t(sens)}$ y especificidad $P(-|E^c)={t(esp)}$.")
    st = [f"$P(+)=P(+|E)P(E)+P(+|E^c)P(E^c)={t(sens)}\\cdot{t(prev)}+{t(1 - esp)}\\cdot{t(1 - prev)}={t(pos)}$",
          f"$P(E|+)=\\dfrac{{{t(sens)}\\cdot{t(prev)}}}{{{t(pos)}}}={t(v)}$"]
    return Q('Tamizaje: valor predictivo positivo', ctx, enun, 'Si una persona da positivo, ¿cuál es la probabilidad de que esté enferma?',
             alts(v, [sens, esp, sens * prev, prev, 1 - esp]), st,
             f"Solo <b>{s(v)}</b>: con prevalencia baja, la mayoría de los positivos son falsos positivos.", sub='Dos causas')


def caso_catedra(rng):
    r = _tres(rng)
    if not r:
        return None
    ctx, obj, causas, E, te, pr, cond, tot, enun, ts = r
    i = rng.randrange(3)
    j = (i + 1) % 3
    post = [p * c / tot for p, c in zip(pr, cond)]
    p1 = P(f"Si el {obj} proviene de {causas[i]}, ¿cuál es la probabilidad de que {ts}? Elija la notación y el valor.",
           [f"$P({E}|C_{i + 1})={t(cond[i])}$", f"$P(C_{i + 1}|{E})={t(cond[i])}$", f"$P({E}\\cap C_{i + 1})={t(cond[i])}$", f"$P({E}|C_{i + 1})={t(pr[i] * cond[i])}$"],
           [f"El dato «{s(100 * cond[i])} % de los de {causas[i]}» es una probabilidad condicional a la causa: $P({E}|C_{i + 1})={t(cond[i])}$."],
           'Se lee directo del enunciado; el error típico es invertir la condición.')
    p2 = P(f"Probabilidad de que un {obj} elegido al azar {ts}.", alts(tot, [sum(cond) / 3, sum(cond), pr[i] * cond[i]]),
           _total_steps(E, pr, cond, tot), f"$P({E})={t(tot)}$.")
    p3 = P(f"Si el {obj} {te}, probabilidad de que provenga de {causas[j]}.", alts(post[j], [pr[j] * cond[j], cond[j], pr[j], post[i]]),
           [f"$P(C_{j + 1}|{E})=\\dfrac{{{t(cond[j])}\\cdot{t(pr[j])}}}{{{t(tot)}}}={t(post[j])}$"], f"Resultado: <b>{s(post[j])}</b>.")
    p4 = P(f"Si el {obj} {te}, ¿de qué origen es más probable que provenga?",
           [f"De {causas[post.index(max(post))]}, con probabilidad ${t(max(post))}$"] + [f"De {causas[k]}, con probabilidad ${t(post[k])}$" for k in range(3) if post[k] != max(post)][:2]
           + [f"De {causas[pr.index(max(pr))]}, porque es el origen más frecuente" if pr.index(max(pr)) != post.index(max(post)) else f"De {causas[cond.index(min(cond))]}, porque tiene la menor tasa"],
           [f"Posteriores: " + ', '.join(f"$P(C_{k + 1}|{E})={t(post[k])}$" for k in range(3)) + f"; suman ${t(sum(post), 2, cut=False)}$."],
           'Se compara la probabilidad a posteriori de cada causa, no la previa ni la tasa sola.')
    if len(set(p4['alts'])) < 4:
        return None
    return CASO('Caso: probabilidad total y Bayes', ctx, enun, [p1, p2, p3, p4], sub='Tres causas')


def generar(rng):
    qs = []
    for fn, n in [(total3, 12), (bayes3, 14), (bayes_comp, 10), (bayes_inverso, 10), (tamizaje, 10)]:
        qs += variantes(rng, fn, n)
    qs += variantes(rng, caso_catedra, 6)
    return qs
