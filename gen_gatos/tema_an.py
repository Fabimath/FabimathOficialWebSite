"""Gato ANOVA: análisis de varianza de un factor. Completar la tabla, F y decisión con F de tabla, sumas de cuadrados
desde medias y desviaciones por grupo, hipótesis, η², supuestos y comparaciones posteriores."""
from comun import Q, P, CASO, alts, alts_txt, t, s, variantes, fq

CTX = [('Salud · Dietas', 'la baja de peso (kg) tras 8 semanas', ['Dieta A', 'Dieta B', 'Dieta C', 'Dieta D'], (3, 7), 1.6),
       ('Educación · Metodologías', 'el puntaje en una prueba', ['Clase expositiva', 'Aula invertida', 'Tutorías', 'Online'], (55, 72), 9),
       ('Agro · Fertilizantes', 'el rendimiento (qq/ha)', ['Fertilizante 1', 'Fertilizante 2', 'Fertilizante 3', 'Control'], (40, 55), 5),
       ('Retail · Sucursales', 'el tiempo de atención (min)', ['Viña', 'Valparaíso', 'Quilpué', 'Villa Alemana'], (6, 10), 2.0),
       ('Laboratorio · Equipos', 'la glicemia medida (mg/dl) de una misma muestra patrón', ['Equipo 1', 'Equipo 2', 'Equipo 3', 'Equipo 4'], (95, 101), 3)]


def _anova(rng):
    ctx, var, grupos, (lo, hi), sg = rng.choice(CTX)
    k = rng.choice([3, 4])
    ns = [rng.choice([5, 6, 8, 10]) for _ in range(k)]
    if rng.random() < 0.5:
        ns = [ns[0]] * k
    efecto = rng.choice([0.5, 1.0, 1.5, 2.0])
    medias = [round(rng.uniform(lo, hi) * efecto + (lo + hi) / 2 * (1 - efecto), 1) for _ in range(k)]
    sds = [round(sg * rng.uniform(0.5, 1.0), 2) for _ in range(k)]
    N = sum(ns)
    gm = round(sum(n * m for n, m in zip(ns, medias)) / N, 4)
    sce = round(sum(n * (m - gm) ** 2 for n, m in zip(ns, medias)), 2)
    scd = round(sum((n - 1) * sd ** 2 for n, sd in zip(ns, sds)), 2)
    gl1, gl2 = k - 1, N - k
    cme, cmd = round(sce / gl1, 2), round(scd / gl2, 2)
    if cmd <= 0:
        return None
    F = round(cme / cmd, 3)
    Fc = fq(0.95, gl1, gl2)
    tabla_g = {'head': ['Grupo', '$n_i$', '$\\bar y_i$', '$s_i$'], 'rows': [[g, n, s(m, 1), s(sd, 2)] for g, n, m, sd in zip(grupos[:k], ns, medias, sds)]}
    return dict(ctx=ctx, var=var, grupos=grupos[:k], k=k, ns=ns, medias=medias, sds=sds, N=N, gm=gm, sce=sce, scd=scd, sct=sce + scd,
                gl1=gl1, gl2=gl2, cme=cme, cmd=cmd, F=F, Fc=Fc, tabla_g=tabla_g)


def _tabla_anova(d, ocultar=None):
    cel = {'sce': t(d['sce'], 2), 'scd': t(d['scd'], 2), 'sct': t(d['sct'], 2), 'gl1': str(d['gl1']), 'gl2': str(d['gl2']), 'glt': str(d['N'] - 1),
           'cme': t(d['cme'], 2), 'cmd': t(d['cmd'], 2), 'F': t(d['F'], 3)}
    if ocultar:
        for o in ocultar:
            cel[o] = '?'
    m = lambda x: x if x == '?' else f"${x}$"
    return {'head': ['Fuente', 'SC', 'gl', 'CM', 'F'],
            'rows': [['Entre grupos', m(cel['sce']), m(cel['gl1']), m(cel['cme']), m(cel['F'])],
                     ['Dentro (error)', m(cel['scd']), m(cel['gl2']), m(cel['cmd']), ''],
                     ['Total', m(cel['sct']), m(cel['glt']), '', '']]}


def _enun(d):
    return f"Se compara {d['var']} entre {d['k']} grupos independientes ({', '.join(d['grupos'])}), con $N={d['N']}$ observaciones en total."


def completar(rng):
    d = _anova(rng)
    if not d:
        return None
    que = rng.choice(['F', 'cmd', 'scd', 'gl2'])
    ocultar = {'F': ['F'], 'cmd': ['cmd', 'F'], 'scd': ['scd', 'cmd', 'F'], 'gl2': ['gl2', 'cmd', 'F']}[que]
    v = {'F': d['F'], 'cmd': d['cmd'], 'scd': d['scd'], 'gl2': d['gl2']}[que]
    nombre = {'F': 'el estadístico $F$', 'cmd': 'el cuadrado medio dentro ($CM_D$)', 'scd': 'la suma de cuadrados dentro ($SC_D$)', 'gl2': 'los grados de libertad dentro'}[que]
    st = {'F': [f"$F=\\dfrac{{CM_E}}{{CM_D}}=\\dfrac{{{t(d['cme'], 2)}}}{{{t(d['cmd'], 2)}}}={t(d['F'], 3)}$"],
          'cmd': [f"$gl_D=N-k={d['N']}-{d['k']}={d['gl2']}$", f"$CM_D=\\dfrac{{SC_D}}{{gl_D}}=\\dfrac{{{t(d['scd'], 2)}}}{{{d['gl2']}}}={t(d['cmd'], 2)}$"],
          'scd': [f"$SC_D=SC_T-SC_E={t(d['sct'], 2)}-{t(d['sce'], 2)}={t(d['scd'], 2)}$"],
          'gl2': [f"$gl_D=N-k={d['N']}-{d['k']}={d['gl2']}$ (o $gl_T-gl_E={d['N'] - 1}-{d['gl1']}$)"]}[que]
    dist = {'F': [d['cmd'] / d['cme'], d['sce'] / d['scd'], d['cme'] / d['cmd'] * d['gl1'] / d['gl2'] + 0.2, d['F'] * 1.5],
            'cmd': [d['scd'] / d['gl1'], d['scd'] / (d['N'] - 1), d['sct'] / d['gl2'], d['cme']],
            'scd': [d['sct'] + d['sce'], d['sce'], d['sct'] / 2, d['sct'] - d['cme']],
            'gl2': [d['N'] - 1, d['N'], d['k'] - 1, d['N'] - 2]}[que]
    return Q('Completar la tabla ANOVA', d['ctx'], _enun(d) + ' La tabla ANOVA quedó incompleta:', f"Calcule {nombre}.",
             alts(v, dist, d=0 if que == 'gl2' else 3 if que == 'F' else 2), st, f"Resultado: <b>{s(v, 3)}</b>.", table=_tabla_anova(d, ocultar), sub='Tabla ANOVA')


def decision(rng):
    d = _anova(rng)
    if not d:
        return None
    rech = d['F'] >= d['Fc']
    ok = f"$F={t(d['F'], 3)}$ {'≥' if rech else '<'} $F_{{0{{,}}95;({d['gl1']},{d['gl2']})}}={t(d['Fc'], 3)}$: {'se rechaza' if rech else 'no se rechaza'} $H_0$"
    malas = [f"$F={t(d['F'], 3)}$ frente a ${t(d['Fc'], 3)}$: {'no se rechaza' if rech else 'se rechaza'} $H_0$",
             f"$F={t(d['F'], 3)}$ frente a $F_{{0{{,}}95;({d['gl2']},{d['gl1']})}}={t(fq(0.95, d['gl2'], d['gl1']), 3)}$: {'se rechaza' if not rech else 'no se rechaza'} $H_0$",
             f"$F={t(1 / d['F'], 3)}$: {'se rechaza' if not rech else 'no se rechaza'} $H_0$"]
    conc = ('Hay evidencia, al 5 %, de que al menos una media difiere.' if rech else 'No hay evidencia, al 5 %, de diferencias entre las medias.')
    return Q('F y decisión', d['ctx'], _enun(d) + ' La tabla ANOVA es:', '¿Qué se decide al 5 %?', alts_txt(ok, malas),
             [f"Crítico de la tabla F con $({d['gl1']};\\ {d['gl2']})$ gl: ${t(d['Fc'], 3)}$.", 'Se rechaza $H_0$ si $F\\ge F_{crítico}$.'], conc,
             table=_tabla_anova(d), sub='Tabla ANOVA')


def sumas(rng):
    d = _anova(rng)
    if not d:
        return None
    que = rng.choice(['sce', 'scd', 'gm'])
    if que == 'gm':
        v = d['gm']
        st = [f"$\\bar y=\\dfrac{{\\sum n_i\\bar y_i}}{{N}}=\\dfrac{{{'+'.join(f'{n}\\cdot{t(m, 1)}' for n, m in zip(d['ns'], d['medias']))}}}{{{d['N']}}}={t(v)}$"]
        dist = [sum(d['medias']) / d['k'] + (0.37 if len(set(d['ns'])) == 1 else 0), max(d['medias']), (max(d['medias']) + min(d['medias'])) / 2 + 0.11, v * 1.1]
        nombre = 'la media general $\\bar y$'
    elif que == 'sce':
        v = d['sce']
        st = [f"Media general $\\bar y={t(d['gm'])}$.", f"$SC_E=\\sum n_i(\\bar y_i-\\bar y)^2={t(v, 2)}$"]
        dist = [sum((m - d['gm']) ** 2 for m in d['medias']), d['scd'], v / d['gl1'], sum(n * (m - d['gm']) for n, m in zip(d['ns'], d['medias'])) ** 2 + 1]
        nombre = 'la suma de cuadrados entre grupos $SC_E$'
    else:
        v = d['scd']
        st = [f"$SC_D=\\sum (n_i-1)s_i^2={'+'.join(f'{n - 1}\\cdot{t(sd, 2)}^2' for n, sd in zip(d['ns'], d['sds']))}={t(v, 2)}$"]
        dist = [sum(n * sd ** 2 for n, sd in zip(d['ns'], d['sds'])), sum((n - 1) * sd for n, sd in zip(d['ns'], d['sds'])), sum(sd ** 2 for sd in d['sds']), d['sce']]
        nombre = 'la suma de cuadrados dentro $SC_D$'
    return Q('Sumas de cuadrados desde los grupos', d['ctx'], _enun(d) + ' Resumen por grupo:', f"¿Cuál es {nombre}?", alts(v, dist, d=2, rel=0.01), st,
             f"Resultado: <b>{s(v, 2)}</b>.", table=d['tabla_g'], sub='Cálculo')


def hipotesis(rng):
    d = _anova(rng)
    if not d:
        return None
    mus = '=' .join(f"\\mu_{i + 1}" for i in range(d['k']))
    ok = f"$H_0:{mus}$ vs. $H_1$: al menos una media es distinta"
    malas = [f"$H_0:{mus}$ vs. $H_1$: todas las medias son distintas", f"$H_0:\\bar y_1=\\dots=\\bar y_{d['k']}$ vs. $H_1$: alguna difiere",
             f"$H_0:\\sigma_1^2=\\dots=\\sigma_{d['k']}^2$ vs. $H_1$: alguna varianza difiere"]
    return Q('Hipótesis del ANOVA', d['ctx'], _enun(d), '¿Qué hipótesis contrasta el ANOVA de un factor?', alts_txt(ok, malas),
             ['El ANOVA compara medias poblacionales (aunque usa varianzas para hacerlo).', 'Rechazar $H_0$ no dice cuál difiere: para eso están las comparaciones posteriores.'],
             ok + '.', sub='Conceptos')


def eta(rng):
    d = _anova(rng)
    if not d:
        return None
    v = d['sce'] / d['sct']
    return Q('Proporción explicada (η²)', d['ctx'], _enun(d) + ' La tabla ANOVA es:', '¿Qué proporción de la variabilidad total explica el factor ($\\eta^2$)?',
             alts(v, [d['sce'] / d['scd'], d['scd'] / d['sct'], d['cme'] / (d['cme'] + d['cmd']), d['F'] / (d['F'] + d['gl2'])]),
             [f"$\\eta^2=\\dfrac{{SC_E}}{{SC_T}}=\\dfrac{{{t(d['sce'], 2)}}}{{{t(d['sct'], 2)}}}={t(v)}$"],
             f"El factor explica el {s(100 * v, 2)} % de la variabilidad de {d['var']}.", table=_tabla_anova(d), sub='Tabla ANOVA')


SUP = [("¿Cuál NO es un supuesto del ANOVA de un factor?", "Que los grupos tengan el mismo tamaño",
        ["Que las observaciones sean independientes", "Que cada grupo provenga de una población normal", "Que las varianzas poblacionales de los grupos sean iguales"]),
       ("¿Cuál es un supuesto del ANOVA de un factor?", "Varianzas poblacionales iguales en todos los grupos (homocedasticidad)",
        ["Medias muestrales iguales en todos los grupos", "Al menos 30 datos por grupo", "Que el factor sea cuantitativo"]),
       ("Se rechazó $H_0$ en este ANOVA. ¿Qué corresponde hacer?", "Comparaciones múltiples (por ejemplo, Tukey) para ver qué medias difieren",
        ["Concluir que todas las medias son distintas entre sí", "Repetir el ANOVA con otro nivel de significancia", "Hacer todos los test t por pares al 5 % sin corregir nada"])]


def supuestos(rng):
    preg, ok, malas = rng.choice(SUP)
    d = _anova(rng)
    if not d:
        return None
    return Q('Supuestos y comparaciones', d['ctx'], _enun(d), preg, alts_txt(ok, malas),
             ['Supuestos: independencia, normalidad en cada grupo y varianzas iguales.', 'Tras rechazar $H_0$, Tukey compara pares controlando el error global.'],
             ok + '.', sub='Conceptos')


def caso(rng):
    d = _anova(rng)
    if not d:
        return None
    rech = d['F'] >= d['Fc']
    mus = '='.join(f"\\mu_{i + 1}" for i in range(d['k']))
    p1 = P('Hipótesis.', alts_txt(f"$H_0:{mus}$ vs. $H_1$: al menos una difiere", [f"$H_0:{mus}$ vs. $H_1$: todas difieren",
                                                                                   "$H_0$: las varianzas son iguales", "$H_0$: las medias muestrales son iguales"]),
           ['Se comparan medias poblacionales.'], 'ANOVA de un factor.')
    p2 = P('Suma de cuadrados entre grupos $SC_E$.', alts(d['sce'], [d['scd'], sum((m - d['gm']) ** 2 for m in d['medias']), d['sce'] / d['gl1']], d=2, rel=0.01),
           [f"$\\bar y={t(d['gm'])}$; $SC_E=\\sum n_i(\\bar y_i-\\bar y)^2={t(d['sce'], 2)}$"], f"$SC_E={t(d['sce'], 2)}$.")
    p3 = P('Suma de cuadrados dentro $SC_D$.', alts(d['scd'], [sum(n * sd ** 2 for n, sd in zip(d['ns'], d['sds'])), d['sce'], sum(sd ** 2 for sd in d['sds'])], d=2, rel=0.01),
           [f"$SC_D=\\sum(n_i-1)s_i^2={t(d['scd'], 2)}$"], f"$SC_D={t(d['scd'], 2)}$.")
    p4 = P('Estadístico $F$.', alts(d['F'], [d['sce'] / d['scd'], d['cmd'] / d['cme'], d['F'] * d['gl1']], d=3),
           [f"$CM_E={t(d['cme'], 2)}$, $CM_D={t(d['cmd'], 2)}$, $F={t(d['F'], 3)}$"], f"$F={t(d['F'], 3)}$.")
    p5 = P('Decisión al 5 %.', alts_txt(f"{'Se rechaza' if rech else 'No se rechaza'} $H_0$ ($F_{{crít}}={t(d['Fc'], 3)}$)",
                                        [f"{'No se rechaza' if rech else 'Se rechaza'} $H_0$ ($F_{{crít}}={t(d['Fc'], 3)}$)", 'Se rechaza $H_0$ porque $F>1$', 'No se puede decidir sin el valor p']),
           [f"$F_{{0{{,}}95;({d['gl1']},{d['gl2']})}}={t(d['Fc'], 3)}$"], 'Hay diferencias entre las medias.' if rech else 'No hay evidencia de diferencias.')
    return CASO('Caso: ANOVA desde los resúmenes por grupo', d['ctx'], _enun(d) + ' Resumen por grupo:', [p1, p2, p3, p4, p5], table=d['tabla_g'], sub='Cálculo')


def generar(rng):
    qs = []
    for fn, n in [(completar, 14), (decision, 12), (sumas, 14), (hipotesis, 4), (eta, 8), (supuestos, 6)]:
        qs += variantes(rng, fn, n)
    qs += variantes(rng, caso, 6)
    return qs
