"""Gato Clásico: probabilidad clásica, conteo, Venn de 2 y 3 eventos, independencia vs incompatibilidad.
Estilo: guía pye_09 (AES500), Cátedra 1, talleres 5-6 y guía 2 de MAT033."""
from math import comb
from comun import Q, P, CASO, alts, alts_txt, t, s, trunc, variantes, frac

# contextos de dos eventos: (ctx, población, A, B, texto A, texto B)
DOS = [
    ('Banca · Productos', 'clientes de un banco', 'T', 'C', 'tiene tarjeta de crédito', 'tiene cuenta de ahorro'),
    ('Streaming · Suscripciones', 'hogares encuestados en Viña del Mar', 'N', 'S', 'está suscrito a Netflix', 'está suscrito a Spotify'),
    ('E-commerce · Compras', 'compras de una tienda en línea', 'C', 'D', 'usó un cupón de descuento', 'pidió despacho express'),
    ('Telecomunicaciones', 'hogares de Quilpué', 'I', 'V', 'contrata internet fibra', 'contrata TV cable'),
    ('Salud · Atención primaria', 'pacientes de un CESFAM', 'H', 'D', 'tiene hipertensión', 'tiene diabetes'),
    ('Retail · Fidelización', 'clientes de una multitienda', 'A', 'R', 'usa la aplicación', 'compró en promoción'),
    ('Universidad · Asignaturas', 'estudiantes de primer año', 'M', 'F', 'aprobó Matemática', 'aprobó Física'),
    ('Nutrición · Hábitos', 'adultos encuestados en Valparaíso', 'F', 'E', 'consume fruta a diario', 'hace ejercicio tres veces por semana'),
]


def _dos(rng):
    ctx, pob, A, B, ta, tb = rng.choice(DOS)
    N = rng.choice([200, 240, 250, 300, 400, 500, 600, 800])
    nab = rng.randint(N // 20, N // 6)
    na = nab + rng.randint(N // 10, N // 3)
    nb = nab + rng.randint(N // 10, N // 3)
    if na + nb - nab >= N:
        return None
    return ctx, pob, A, B, ta, tb, N, na, nb, nab


PLURAL = {'tiene': 'tienen', 'está': 'están', 'usó': 'usaron', 'pidió': 'pidieron', 'contrata': 'contratan', 'usa': 'usan',
          'compró': 'compraron', 'aprobó': 'aprobaron', 'consume': 'consumen', 'hace': 'hacen'}


def plural(v):
    p, _, r = v.partition(' ')
    return PLURAL.get(p, p) + ' ' + r


def _enun2(pob, A, B, ta, tb, N, na, nb, nab):
    return (f"En un estudio de {N} {pob}, {na} {plural(ta)} (evento ${A}$), {nb} {plural(tb)} (evento ${B}$) "
            f"y {nab} cumplen ambas condiciones. Se elige uno al azar.")


PREG2 = [
    ('union', lambda A, B: f"¿Cuál es la probabilidad de que cumpla al menos una de las dos condiciones, $P({A}\\cup {B})$?"),
    ('solo', lambda A, B: f"¿Cuál es la probabilidad de que cumpla ${A}$ pero no ${B}$, $P({A}\\cap {B}^c)$?"),
    ('ninguno', lambda A, B: f"¿Cuál es la probabilidad de que no cumpla ninguna de las dos, $P({A}^c\\cap {B}^c)$?"),
    ('exacto', lambda A, B: "¿Cuál es la probabilidad de que cumpla exactamente una de las dos condiciones?"),
    ('noambas', lambda A, B: f"¿Cuál es la probabilidad de que no cumpla ambas a la vez, $P(({A}\\cap {B})^c)$?"),
]


def laplace2(rng, cual=None, d=None):
    d = d or _dos(rng)
    if not d:
        return None
    ctx, pob, A, B, ta, tb, N, na, nb, nab = d
    k, ask = rng.choice(PREG2) if cual is None else next(p for p in PREG2 if p[0] == cual)
    nu = na + nb - nab
    val = {'union': nu, 'solo': na - nab, 'ninguno': N - nu, 'exacto': nu - nab, 'noambas': N - nab}
    c = val[k] / N
    dist = [na / N + nb / N, nab / N, (na - nab) / N, (N - nu) / N, nu / N, (nu - nab) / N, (N - na - nb) / N, (nb - nab) / N]
    head = (f"Laplace: $P(E)=\\dfrac{{\\#E}}{{\\#\\Omega}}$ con $\\#\\Omega={N}$. "
            f"Datos: $\\#{A}={na}$, $\\#{B}={nb}$, $\\#({A}\\cap {B})={nab}$.")
    steps = [f"$\\#({A}\\cup {B})=\\#{A}+\\#{B}-\\#({A}\\cap {B})={na}+{nb}-{nab}={nu}$"]
    if k == 'union':
        steps.append(f"$P({A}\\cup {B})={frac(nu, N)}={t(c)}$")
    elif k == 'solo':
        steps.append(f"$\\#({A}\\cap {B}^c)=\\#{A}-\\#({A}\\cap {B})={na}-{nab}={na - nab}$")
        steps.append(f"$P({A}\\cap {B}^c)={frac(na - nab, N)}={t(c)}$")
    elif k == 'ninguno':
        steps.append(f"Por De Morgan, ${A}^c\\cap {B}^c=({A}\\cup {B})^c$: $\\#={N}-{nu}={N - nu}$")
        steps.append(f"$P({A}^c\\cap {B}^c)={frac(N - nu, N)}={t(c)}$")
    elif k == 'exacto':
        steps.append(f"Exactamente una $=({A}\\cup {B})$ menos la intersección: ${nu}-{nab}={nu - nab}$")
        steps.append(f"$P={frac(nu - nab, N)}={t(c)}$")
    else:
        steps = [f"$P(({A}\\cap {B})^c)=1-P({A}\\cap {B})=1-{frac(nab, N)}={t(c)}$"]
    return Q('Laplace con conteos', ctx, _enun2(pob, A, B, ta, tb, N, na, nb, nab), ask(A, B),
             alts(c, dist), steps, f"La probabilidad pedida es <b>{s(c)}</b>, es decir, el {s(100 * c, 2)} % del total.",
             head, sub='Dos eventos')


def despejar(rng):
    ctx, pob, A, B, ta, tb = rng.choice(DOS)
    pa, pb_ = rng.choice([0.35, 0.40, 0.45, 0.50, 0.55, 0.60]), rng.choice([0.25, 0.30, 0.35, 0.40, 0.45])
    pab = rng.choice([0.10, 0.12, 0.15, 0.18, 0.20])
    if pab >= min(pa, pb_):
        return None
    ning = round(1 - (pa + pb_ - pab), 2)
    if ning <= 0.02:
        return None
    enun = (f"En un estudio de {pob}, el {s(100 * pa)} % {ta} (${A}$), el {s(100 * pb_)} % {tb} (${B}$) "
            f"y el {s(100 * ning)} % no cumple ninguna de las dos condiciones.")
    u = 1 - ning
    steps = [f"Ninguna $=({A}\\cup {B})^c$, luego $P({A}\\cup {B})=1-{t(ning)}={t(u)}$",
             f"$P({A}\\cap {B})=P({A})+P({B})-P({A}\\cup {B})={t(pa)}+{t(pb_)}-{t(u)}={t(pab)}$"]
    return Q('Despejar la intersección', ctx, enun, f"¿Cuál es $P({A}\\cap {B})$, la probabilidad de cumplir ambas?",
             alts(pab, [pa * pb_, ning, pa + pb_ - ning, u - pa, pa + pb_ - 1]), steps,
             f"$P({A}\\cap {B})={t(pab)}$: el {s(100 * pab)} % cumple ambas condiciones.", sub='Dos eventos')


TRES = [  # ctx, población, verbo, eventos
    ('Banca · Productos', 'clientes', 'tiene', ('T', 'tarjeta de crédito'), ('C', 'crédito de consumo'), ('H', 'crédito hipotecario')),
    ('E-commerce · Medios de pago', 'compradores', 'ha pagado con', ('D', 'débito'), ('C', 'crédito'), ('W', 'billetera digital')),
    ('Streaming', 'hogares', 'tiene', ('N', 'Netflix'), ('D', 'Disney+'), ('M', 'Max')),
    ('Salud · Factores de riesgo', 'pacientes adultos', 'presenta', ('H', 'hipertensión'), ('O', 'obesidad'), ('S', 'sedentarismo')),
    ('Universidad · Ramos', 'estudiantes', 'aprobó', ('M', 'Matemática'), ('Q', 'Química'), ('F', 'Física')),
]


def _tres(rng):
    abc = rng.choice([4, 5, 6, 8])
    ab, ac, bc = (abc + rng.randint(3, 10) for _ in range(3))
    a = ab + ac - abc + rng.randint(8, 20)
    b = ab + bc - abc + rng.randint(8, 20)
    c = ac + bc - abc + rng.randint(5, 18)
    u = a + b + c - ab - ac - bc + abc
    if u >= 97:
        return None
    return a, b, c, ab, ac, bc, abc, u


def venn3_calc(v, k):
    a, b, c, ab, ac, bc, abc, u = v
    dos = ab + ac + bc - 3 * abc
    uno = u - dos - abc
    return {'exactamente dos': dos, 'exactamente una': uno, 'ninguna': 100 - u, 'al menos dos': dos + abc,
            'solo la primera': a - ab - ac + abc, 'al menos una': u}[k]


def _venn3_steps(v, L, k):
    a, b, c, ab, ac, bc, abc, u = v
    A, B, C = L
    st = [f"Inclusión-exclusión: $P({A}\\cup {B}\\cup {C})={t(a / 100)}+{t(b / 100)}+{t(c / 100)}-{t(ab / 100)}-{t(ac / 100)}-{t(bc / 100)}+{t(abc / 100)}={t(u / 100)}$"]
    dos = ab + ac + bc - 3 * abc
    if k in ('exactamente dos', 'al menos dos', 'exactamente una'):
        st.append(f"Exactamente dos: $[P({A}{B})+P({A}{C})+P({B}{C})]-3P({A}{B}{C})={t((ab + ac + bc) / 100)}-3\\cdot{t(abc / 100)}={t(dos / 100)}$")
    if k == 'al menos dos':
        st.append(f"Al menos dos = exactamente dos + las tres: ${t(dos / 100)}+{t(abc / 100)}={t((dos + abc) / 100)}$")
    if k == 'exactamente una':
        st.append(f"Exactamente una = al menos una − exactamente dos − las tres: ${t(u / 100)}-{t(dos / 100)}-{t(abc / 100)}={t((u - dos - abc) / 100)}$")
    if k == 'ninguna':
        st.append(f"Ninguna $=1-P({A}\\cup {B}\\cup {C})=1-{t(u / 100)}={t(1 - u / 100)}$")
    if k == 'solo la primera':
        st.append(f"Solo ${A}$: $P({A})-P({A}{B})-P({A}{C})+P({A}{B}{C})={t(a / 100)}-{t(ab / 100)}-{t(ac / 100)}+{t(abc / 100)}={t((a - ab - ac + abc) / 100)}$")
    return st


def _venn3_enun(rng):
    ctx, pob, verbo, *ev = rng.choice(TRES)
    v = _tres(rng)
    if not v:
        return None
    a, b, c, ab, ac, bc, abc, u = v
    (A, na), (B, nb), (C, nc) = ev
    enun = (f"En un estudio de {pob}, el {a} % {verbo} {na} (${A}$), el {b} % {nb} (${B}$) y el {c} % {nc} (${C}$). "
            f"Además, el {ab} % {verbo} {na} y {nb}, el {ac} % {na} y {nc}, el {bc} % {nb} y {nc}, y el {abc} % las tres.")
    return ctx, pob, (A, B, C), (na, nb, nc), v, enun


def venn3(rng):
    r = _venn3_enun(rng)
    if not r:
        return None
    ctx, pob, L, nombres, v, enun = r
    k = rng.choice(['exactamente dos', 'exactamente una', 'ninguna', 'al menos dos', 'solo la primera'])
    val = venn3_calc(v, k) / 100
    otros = [venn3_calc(v, j) / 100 for j in ['exactamente dos', 'exactamente una', 'ninguna', 'al menos dos', 'solo la primera', 'al menos una']]
    a, b, c, ab, ac, bc, abc, u = v
    otros += [(ab + ac + bc) / 100, (a + b + c) / 100 - 1 if a + b + c > 100 else (ab + ac + bc - abc) / 100]
    txt = {'solo la primera': f"cumpla solo ${L[0]}$ ({nombres[0]})"}.get(k, f"cumpla {k} de las tres condiciones")
    return Q('Venn de tres eventos', ctx, enun, f"Si se elige uno al azar, ¿cuál es la probabilidad de que {txt}?",
             alts(val, otros), _venn3_steps(v, L, k), f"La probabilidad es <b>{s(val)}</b>.", sub='Tres eventos')


def indep(rng):
    ctx, pob, A, B, ta, tb = rng.choice(DOS)
    tipo = rng.choice(['ind', 'inc', 'ninguna'])
    pa = rng.choice([0.2, 0.3, 0.4, 0.5, 0.6])
    pb_ = rng.choice([0.2, 0.25, 0.3, 0.4, 0.5])
    if tipo == 'ind':
        pab = pa * pb_
    elif tipo == 'inc':
        if pa + pb_ > 1:
            return None
        pab = 0.0
    else:
        pab = round(pa * pb_ + rng.choice([-0.04, 0.05, 0.08]), 2)
        if pab <= 0 or pab >= min(pa, pb_):
            return None
    pu = pa + pb_ - pab
    enun = (f"Para un {pob[:-1] if pob.endswith('s') else pob} elegido al azar, sea ${A}$: {ta} y ${B}$: {tb}. "
            f"Se sabe que $P({A})={t(pa)}$, $P({B})={t(pb_)}$ y $P({A}\\cup {B})={t(pu)}$.")
    ops = {'ind': f"${A}$ y ${B}$ son independientes, pero no incompatibles",
           'inc': f"${A}$ y ${B}$ son incompatibles, pero no independientes",
           'ninguna': f"${A}$ y ${B}$ no son independientes ni incompatibles",
           'ambas': f"${A}$ y ${B}$ son independientes e incompatibles a la vez"}
    steps = [f"$P({A}\\cap {B})=P({A})+P({B})-P({A}\\cup {B})={t(pa)}+{t(pb_)}-{t(pu)}={t(pab)}$",
             f"Incompatibles si $P({A}\\cap {B})=0$: {'sí' if pab == 0 else 'no'}.",
             f"Independientes si $P({A}\\cap {B})=P({A})P({B})={t(pa)}\\cdot{t(pb_)}={t(pa * pb_)}$: {'sí' if abs(pab - pa * pb_) < 1e-9 else 'no'}."]
    conc = {'ind': 'Pueden ocurrir juntos (no son incompatibles) y saber que ocurre uno no cambia la probabilidad del otro.',
            'inc': 'No pueden ocurrir juntos; por eso saber que ocurre uno cambia la probabilidad del otro a 0: son dependientes.',
            'ninguna': 'Pueden ocurrir juntos y la intersección no coincide con el producto: son dependientes.'}[tipo]
    return Q('Independencia vs. incompatibilidad', ctx, enun, '¿Cuál afirmación es correcta?',
             alts_txt(ops[tipo], [v for k, v in ops.items() if k != tipo]), steps, conc, sub='Dos eventos')


COMPONENTES = [
    ('Banca · Medios de pago', 'medios de pago de un comercio (débito, crédito y transferencia)', 'esté disponible', 'disponible'),
    ('Logística · Proveedores', 'proveedores que despachan un mismo insumo', 'entregue a tiempo', 'a tiempo'),
    ('Salud · Exámenes', 'exámenes independientes que se aplican a un paciente enfermo', 'detecte la enfermedad', 'detecta'),
    ('Tecnología · Servidores', 'servidores que respaldan un sitio web', 'funcione durante el día', 'funcionando'),
]


def tres_indep(rng):
    ctx, que, verbo, adj = rng.choice(COMPONENTES)
    ps = [rng.choice([0.7, 0.75, 0.8, 0.85, 0.9, 0.95]) for _ in range(3)]
    k = rng.choice(['al menos uno', 'todos', 'ninguno', 'solo el tercero falla'])
    q1, q2, q3 = (1 - p for p in ps)
    val = {'al menos uno': 1 - q1 * q2 * q3, 'todos': ps[0] * ps[1] * ps[2], 'ninguno': q1 * q2 * q3,
           'solo el tercero falla': ps[0] * ps[1] * q3}[k]
    pregunta = {'al menos uno': f"al menos uno {verbo.replace('esté', 'esté').replace('entregue', 'entregue')}",
                'todos': f"los tres cumplan (todos {adj})", 'ninguno': 'ninguno cumpla',
                'solo el tercero falla': 'únicamente el tercero falle'}[k]
    enun = (f"Se consideran tres {que}. Cada uno funciona de forma independiente de los demás, con probabilidades "
            f"${t(ps[0])}$, ${t(ps[1])}$ y ${t(ps[2])}$ de que {verbo}.")
    steps = {'al menos uno': [f"Al menos uno $=1-P(\\text{{ninguno}})=1-{t(q1)}\\cdot{t(q2)}\\cdot{t(q3)}={t(val)}$"],
             'todos': [f"Por independencia: ${t(ps[0])}\\cdot{t(ps[1])}\\cdot{t(ps[2])}={t(val)}$"],
             'ninguno': [f"Por independencia: $(1-{t(ps[0])})(1-{t(ps[1])})(1-{t(ps[2])})={t(val)}$"],
             'solo el tercero falla': [f"$P(A\\cap B\\cap C^c)={t(ps[0])}\\cdot{t(ps[1])}\\cdot{t(q3)}={t(val)}$"]}[k]
    return Q('Eventos independientes', ctx, enun, f"¿Cuál es la probabilidad de que {pregunta}?",
             alts(val, [1 - ps[0] * ps[1] * ps[2], ps[0] * ps[1] * ps[2], q1 * q2 * q3, sum(ps) / 3, 1 - val, q1 + q2 + q3]),
             steps, f"La probabilidad es <b>{s(val)}</b>.", sub='Independencia')


LOTES = [('Control de calidad', 'un lote de {N} ampolletas', 'defectuosas', 'ampolletas'),
         ('Farmacia · Inventario', 'una caja de {N} frascos de jarabe', 'vencidos', 'frascos'),
         ('Retail · Auditoría', 'un grupo de {N} boletas', 'con error de digitación', 'boletas'),
         ('Laboratorio · Muestras', 'una bandeja de {N} muestras de sangre', 'contaminadas', 'muestras')]


def conteo(rng):
    ctx, lote, mal, cosas = rng.choice(LOTES)
    N = rng.choice([10, 12, 15, 20])
    D = rng.randint(2, 5)
    n = rng.choice([3, 4])
    k = rng.choice(['exactamente uno', 'ninguno', 'al menos uno', 'exactamente dos'])
    tot = comb(N, n)
    fav = {'exactamente uno': comb(D, 1) * comb(N - D, n - 1), 'ninguno': comb(N - D, n),
           'al menos uno': tot - comb(N - D, n), 'exactamente dos': comb(D, 2) * comb(N - D, n - 2)}[k]
    val = fav / tot
    enun = (f"De {lote.format(N=N)}, {D} están {mal}. Se eligen {n} {cosas} al azar y sin reemplazo.")
    st = [f"Casos totales: $\\binom{{{N}}}{{{n}}}={tot}$"]
    if k == 'exactamente uno':
        st.append(f"Favorables: $\\binom{{{D}}}{{1}}\\binom{{{N - D}}}{{{n - 1}}}={D}\\cdot{comb(N - D, n - 1)}={fav}$")
    elif k == 'exactamente dos':
        st.append(f"Favorables: $\\binom{{{D}}}{{2}}\\binom{{{N - D}}}{{{n - 2}}}={comb(D, 2)}\\cdot{comb(N - D, n - 2)}={fav}$")
    elif k == 'ninguno':
        st.append(f"Favorables: $\\binom{{{N - D}}}{{{n}}}={fav}$")
    else:
        st.append(f"Complemento de «ninguno»: ${tot}-\\binom{{{N - D}}}{{{n}}}={tot}-{comb(N - D, n)}={fav}$")
    st.append(f"$P={frac(fav, tot)}={t(val)}$")
    dist = [comb(D, 1) * comb(N - D, n - 1) / tot, comb(N - D, n) / tot, 1 - comb(N - D, n) / tot,
            n * (D / N) * (1 - D / N) ** (n - 1), (D / N) ** 1, comb(D, 2) * comb(N - D, n - 2) / tot]
    return Q('Conteo sin reemplazo', ctx, enun, f"¿Cuál es la probabilidad de obtener {k} {mal}?",
             alts(val, dist), st, f"La probabilidad es <b>{s(val)}</b>.", sub='Conteo')


def geometrica(rng):
    T = rng.choice([4, 5, 6, 10, 12])
    w = rng.choice([x for x in range(1, T) if x <= T // 2])
    unidad, ctx, quien = rng.choice([('horas', 'Logística · Bodega', 'dos camiones llegan a una bodega'),
                                     ('decenas de minutos', 'Salud · Laboratorio', 'dos muestras llegan al laboratorio'),
                                     ('horas', 'Vida diaria · Encuentro', 'dos amigos llegan a un café')])
    val = 1 - (T - w) ** 2 / T ** 2
    enun = (f"{quien[0].upper() + quien[1:]} en instantes $X$ e $Y$ independientes y uniformes en $[0,{T}]$ ({unidad}). "
            f"Se dice que «coinciden» si la diferencia entre sus llegadas es a lo más {w}.")
    st = [f"$\\Omega=[0,{T}]^2$, área ${T}^2={T * T}$.",
          f"El complemento $|X-Y|>{w}$ son dos triángulos de catetos ${T}-{w}={T - w}$: área $({T - w})^2={(T - w) ** 2}$.",
          f"$P(|X-Y|\\le {w})=1-\\dfrac{{{(T - w) ** 2}}}{{{T * T}}}={t(val)}$"]
    return Q('Probabilidad geométrica', ctx, enun, f"¿Cuál es $P(|X-Y|\\le {w})$?",
             alts(val, [w / T, 2 * w / T, (T - w) ** 2 / T ** 2, 1 - (T - w) ** 2 / (2 * T ** 2)]), st,
             f"La probabilidad de que coincidan es <b>{s(val)}</b>; se calcula como cociente de áreas.", sub='Conteo')


NOTAC = [("ocurre $A$ pero no $B$", "$A\\cap B^c$", ["$A\\cup B^c$", "$A^c\\cap B$", "$(A\\cap B)^c$"]),
         ("no ocurre ninguno de los dos", "$A^c\\cap B^c$", ["$A^c\\cup B^c$", "$(A\\cap B)^c$", "$A\\cap B^c$"]),
         ("no ocurren ambos a la vez", "$A^c\\cup B^c$", ["$A^c\\cap B^c$", "$A\\cup B$", "$A\\cap B^c$"]),
         ("ocurre exactamente uno de los dos", "$(A\\cap B^c)\\cup(A^c\\cap B)$", ["$A\\cup B$", "$(A\\cap B)^c$", "$A^c\\cap B^c$"]),
         ("ocurre al menos uno de los dos", "$A\\cup B$", ["$A\\cap B$", "$(A\\cap B^c)\\cup(A^c\\cap B)$", "$A^c\\cup B^c$"])]


def notacion(rng):
    ctx, pob, A, B, ta, tb = rng.choice(DOS)
    desc, ok, malas = rng.choice(NOTAC)
    sus = lambda x: x.replace('A', A).replace('B', B)
    enun = f"Sea ${A}$: «{ta}» y ${B}$: «{tb}», para uno de los {pob} elegido al azar."
    return Q('Notación de eventos', ctx, enun, f"¿Qué expresión representa el evento «{sus(desc)}»?",
             alts_txt(sus(ok), [sus(x) for x in malas]),
             [f"«{sus(desc)}» se escribe {sus(ok)}.", "Recuerde De Morgan: $(A\\cup B)^c=A^c\\cap B^c$ y $(A\\cap B)^c=A^c\\cup B^c$."],
             f"La expresión correcta es {sus(ok)}.", sub='Dos eventos')


# ---------------------------------------------------------------- casos largos
def caso_venn3(rng):
    r = _venn3_enun(rng)
    if not r:
        return None
    ctx, pob, L, nombres, v, enun = r
    partes = []
    for k, txt in [('exactamente dos', 'cumpla exactamente dos de las tres condiciones'), ('exactamente una', 'cumpla solamente una'),
                   ('ninguna', 'no cumpla ninguna'), ('al menos dos', 'cumpla al menos dos')]:
        val = venn3_calc(v, k) / 100
        otros = [venn3_calc(v, j) / 100 for j in ['exactamente dos', 'exactamente una', 'ninguna', 'al menos dos', 'al menos una']]
        partes.append(P(f"Probabilidad de que un elegido al azar {txt}.", alts(val, otros + [(v[3] + v[4] + v[5]) / 100]),
                        _venn3_steps(v, L, k), f"Resultado: <b>{s(val)}</b>."))
    return CASO('Caso: Venn de tres eventos', ctx, enun + ' Se elige uno al azar.', partes, sub='Tres eventos')


def caso_indep(rng):
    ctx, pob, A, B, ta, tb = rng.choice(DOS)
    pa, pb_ = rng.choice([0.4, 0.6, 0.7]), rng.choice([0.3, 0.5])
    pab = pa * pb_
    pu = pa + pb_ - pab
    enun = (f"Sea ${A}$: «{ta}» y ${B}$: «{tb}» para uno de los {pob} elegido al azar, con "
            f"$P({A})={t(pa)}$, $P({B})={t(pb_)}$ y $P({A}\\cup {B})={t(pu)}$.")
    ning = 1 - pu
    p1 = P(f"Calcule $P({A}\\cap {B})$.", alts(pab, [pa + pb_ - 1 if pa + pb_ > 1 else 0.05, pu - pa, ning, pa * (1 - pb_)]),
           [f"$P({A}\\cap {B})={t(pa)}+{t(pb_)}-{t(pu)}={t(pab)}$"], f"$P({A}\\cap {B})={t(pab)}$.")
    p2 = P(f"Calcule $P({A}|{B})$ y compárela con $P({A})$.",
           alts_txt(f"$P({A}|{B})={t(pa)}=P({A})$: son independientes",
                    [f"$P({A}|{B})={t(pab)}$: son incompatibles", f"$P({A}|{B})={t(pb_)}$: son dependientes",
                     f"$P({A}|{B})={t(pab / pa)}\\ne P({A})$: son dependientes" if abs(pab / pa - pa) > 1e-9 else f"$P({A}|{B})={t(min(0.99, pa + 0.1))}$: son dependientes"]),
           [f"$P({A}|{B})=\\dfrac{{P({A}\\cap {B})}}{{P({B})}}=\\dfrac{{{t(pab)}}}{{{t(pb_)}}}={t(pa)}$", f"Coincide con $P({A})$: saber que ocurre ${B}$ no cambia la probabilidad de ${A}$."],
           "Son independientes, aunque no incompatibles (la intersección no es vacía).")
    p3 = P(f"Calcule $P({A}^c\\cap {B}^c)$.", alts(ning, [(1 - pa) + (1 - pb_), 1 - pab, pab, (1 - pa) * pb_]),
           [f"$P({A}^c\\cap {B}^c)=1-P({A}\\cup {B})=1-{t(pu)}={t(ning)}$", f"Además ${t(1 - pa)}\\cdot{t(1 - pb_)}={t((1 - pa) * (1 - pb_))}$: los complementos también son independientes."],
           f"$P({A}^c\\cap {B}^c)={t(ning)}$.")
    pe, pf = rng.choice([(0.3, 0.45), (0.25, 0.5), (0.2, 0.35)])
    p4 = P(f"Para otros dos eventos $E$ y $F$ se sabe que $P(E)={t(pe)}$, $P(F)={t(pf)}$ y $P(E\\cup F)={t(pe + pf)}$. ¿Qué se concluye?",
           alts_txt("$E$ y $F$ son incompatibles y, por lo tanto, dependientes",
                    ["$E$ y $F$ son independientes", "$E$ y $F$ son independientes e incompatibles", "No se puede concluir nada"]),
           [f"$P(E\\cap F)={t(pe)}+{t(pf)}-{t(pe + pf)}=0$: incompatibles.", f"$P(E)P(F)={t(pe * pf)}\\ne 0$: no son independientes."],
           "Incompatibles con probabilidades positivas implica dependientes.")
    return CASO('Caso: independencia vs. incompatibilidad', ctx, enun, [p1, p2, p3, p4], sub='Dos eventos')


def caso_conteos2(rng):
    d = _dos(rng)
    if not d:
        return None
    ctx, pob, A, B, ta, tb, N, na, nb, nab = d
    enun = _enun2(pob, A, B, ta, tb, N, na, nb, nab)
    partes = []
    for k, txt in [('union', f'cumpla al menos una condición, $P({A}\\cup {B})$'), ('solo', f'cumpla ${A}$ pero no ${B}$'),
                   ('ninguno', 'no cumpla ninguna'), ('exacto', 'cumpla exactamente una')]:
        q = laplace2(rng, k, d)
        partes.append(P(f"Probabilidad de que {txt}.", q['alts'], q['pautaSteps'], q['conc']))
    return CASO('Caso: dos eventos con conteos', ctx, enun, partes, sub='Dos eventos')


def generar(rng):
    qs = []
    for fn, n in [(laplace2, 16), (despejar, 8), (venn3, 14), (indep, 10), (tres_indep, 10), (conteo, 12),
                  (geometrica, 6), (notacion, 8)]:
        qs += variantes(rng, fn, n)
    for fn, n in [(caso_venn3, 4), (caso_indep, 3), (caso_conteos2, 3)]:
        qs += variantes(rng, fn, n)
    return qs
