"""Gato Bivariado Descriptivo: tablas de doble entrada (frecuencias conjuntas, marginales y condicionales, completar,
comparar grupos, asociación) y covarianza y correlación (datos, sumas, gráfico de dispersión, interpretación, escala,
causalidad). Estilo: guía pye_07 de estadística bivariada (escala de r: débil < 0,3 ≤ moderada < 0,7 ≤ fuerte)."""
import numpy as np
from comun import Q, P, CASO, alts, alts_txt, t, s, variantes, frac

TAB = [('Universidad · Trabajo', 'estudiantes', 'el año que cursa', ['Primer año', 'Segundo año', 'Tercer año'], 'si trabaja', ['Trabaja', 'No trabaja']),
       ('Salud · Tabaquismo', 'pacientes', 'el sexo', ['Hombre', 'Mujer'], 'el hábito de fumar', ['Fumador', 'Exfumador', 'No fumador']),
       ('Retail · Medios de pago', 'clientes', 'el grupo de edad', ['Joven', 'Adulto', 'Adulto mayor'], 'el medio de pago', ['Débito', 'Crédito', 'Efectivo']),
       ('Educación · Tutorías', 'estudiantes', 'la asistencia a tutorías', ['Con tutoría', 'Sin tutoría'], 'el resultado', ['Aprobado', 'Reprobado']),
       ('Transporte · Comunas', 'trabajadores', 'la comuna', ['Viña del Mar', 'Valparaíso', 'Quilpué'], 'el medio de transporte', ['Auto', 'Micro', 'Metro'])]


def _tabla(rng, indep=None):
    ctx, pob, vf, filas, vc, cols = rng.choice(TAB)
    r, c = len(filas), len(cols)
    indep = rng.random() < 0.25 if indep is None else indep
    if indep:  # filas proporcionales: condicionales iguales
        base = [rng.randint(2, 6) for _ in range(c)]
        m = [[b * rng.choice([3, 4, 5, 6, 8]) for b in base] for _ in range(r)]
        m = [[x * k for x in base] for k in (rng.sample([3, 4, 5, 6, 8, 10], r))]
    else:
        m = [[rng.randint(8, 60) for _ in range(c)] for _ in range(r)]
    fi = [sum(f) for f in m]
    fj = [sum(m[i][j] for i in range(r)) for j in range(c)]
    n = sum(fi)
    table = {'head': [f"{vf[0].upper() + vf[1:]} / {vc}"] + cols + ['Total'],
             'rows': [[filas[i]] + m[i] + [fi[i]] for i in range(r)] + [['Total'] + fj + [n]]}
    enun = f"Se clasificó a {n} {pob} según {vf} y {vc}:"
    return dict(vf=vf, ctx=ctx, pob=pob, filas=filas, cols=cols, m=m, fi=fi, fj=fj, n=n, r=r, c=c, table=table, enun=enun, indep=indep)


def conjunta(rng):
    d = _tabla(rng)
    i, j = rng.randrange(d['r']), rng.randrange(d['c'])
    F, C, m, n = d['filas'][i], d['cols'][j], d['m'], d['n']
    k = rng.choice(['fij', 'hij', 'fi', 'hj'])
    if k == 'fij':
        return Q('Frecuencia conjunta y marginal', d['ctx'], d['enun'], f"¿Cuántos {d['pob']} son de «{F}» y a la vez «{C}»?",
                 alts(m[i][j], [d['fi'][i], d['fj'][j], m[i][(j + 1) % d['c']], n - m[i][j]], d=0),
                 [f"Es la frecuencia conjunta de la celda (fila «{F}», columna «{C}»): $f_{{{i + 1}{j + 1}}}={m[i][j]}$."], f"<b>{m[i][j]}</b> {d['pob']}.", table=d['table'], sub='Tablas de doble entrada')
    if k == 'fi':
        return Q('Frecuencia conjunta y marginal', d['ctx'], d['enun'], f"¿Cuántos {d['pob']} son de «{F}» en total?",
                 alts(d['fi'][i], [m[i][j], d['fj'][j], n - d['fi'][i], d['fi'][(i + 1) % d['r']]], d=0),
                 [f"Frecuencia marginal de la fila: $f_{{{i + 1}\\cdot}}={'+'.join(map(str, m[i]))}={d['fi'][i]}$."], f"<b>{d['fi'][i]}</b> {d['pob']}.", table=d['table'], sub='Tablas de doble entrada')
    if k == 'hij':
        v = 100 * m[i][j] / n
        return Q('Frecuencia relativa conjunta', d['ctx'], d['enun'], f"¿Qué porcentaje del total son de «{F}» y «{C}»?",
                 alts(v, [100 * m[i][j] / d['fi'][i], 100 * m[i][j] / d['fj'][j], 100 * d['fi'][i] / n], d=2, fmt=lambda x: f"${t(x, 2)}\\ \\%$"),
                 [f"$h_{{{i + 1}{j + 1}}}=\\dfrac{{f_{{{i + 1}{j + 1}}}}}{{n}}=\\dfrac{{{m[i][j]}}}{{{n}}}={t(m[i][j] / n)}$, es decir, ${t(v, 2)}\\ \\%$."],
                 f"El {s(v, 2)} % del total.", table=d['table'], sub='Tablas de doble entrada')
    v = 100 * d['fj'][j] / n
    return Q('Frecuencia relativa marginal', d['ctx'], d['enun'], f"¿Qué porcentaje del total es «{C}»?",
             alts(v, [100 * m[i][j] / n, 100 * m[i][j] / d['fi'][i], 100 * d['fi'][i] / n], d=2, fmt=lambda x: f"${t(x, 2)}\\ \\%$"),
             [f"Marginal de la columna: $f_{{\\cdot {j + 1}}}={d['fj'][j]}$; $h_{{\\cdot {j + 1}}}=\\dfrac{{{d['fj'][j]}}}{{{n}}}={t(d['fj'][j] / n)}$."],
             f"El {s(v, 2)} % del total.", table=d['table'], sub='Tablas de doble entrada')


def condicional(rng):
    d = _tabla(rng)
    i, j = rng.randrange(d['r']), rng.randrange(d['c'])
    F, C, m = d['filas'][i], d['cols'][j], d['m']
    if rng.random() < 0.5:
        v = 100 * m[i][j] / d['fi'][i]
        ask = f"De los {d['pob']} de «{F}», ¿qué porcentaje es «{C}»?"
        st = [f"Se condiciona a la fila «{F}»: $h_{{{j + 1}|{i + 1}}}=\\dfrac{{f_{{{i + 1}{j + 1}}}}}{{f_{{{i + 1}\\cdot}}}}=\\dfrac{{{m[i][j]}}}{{{d['fi'][i]}}}={t(m[i][j] / d['fi'][i])}$"]
    else:
        v = 100 * m[i][j] / d['fj'][j]
        ask = f"De los {d['pob']} que son «{C}», ¿qué porcentaje es de «{F}»?"
        st = [f"Se condiciona a la columna «{C}»: $h_{{{i + 1}|{j + 1}}}=\\dfrac{{f_{{{i + 1}{j + 1}}}}}{{f_{{\\cdot {j + 1}}}}}=\\dfrac{{{m[i][j]}}}{{{d['fj'][j]}}}={t(m[i][j] / d['fj'][j])}$"]
    otros = [100 * m[i][j] / d['n'], 100 * m[i][j] / d['fi'][i], 100 * m[i][j] / d['fj'][j], 100 * d['fi'][i] / d['n']]
    return Q('Porcentaje condicional', d['ctx'], d['enun'], ask, alts(v, otros, d=2, fmt=lambda x: f"${t(x, 2)}\\ \\%$"), st,
             f"El {s(v, 2)} %. El denominador es el total del grupo al que se condiciona.", table=d['table'], sub='Tablas de doble entrada')


def comparar(rng):
    d = _tabla(rng, indep=False)
    j = rng.randrange(d['c'])
    C = d['cols'][j]
    pr = [d['m'][i][j] / d['fi'][i] for i in range(d['r'])]
    if len(set(round(x, 4) for x in pr)) < d['r']:
        return None
    imax = max(range(d['r']), key=lambda i: pr[i])
    imas = max(range(d['r']), key=lambda i: d['m'][i][j])
    ok = f"«{d['filas'][imax]}», con ${t(100 * pr[imax], 2)}\\ \\%$ de «{C}» dentro del grupo"
    malas = [f"«{d['filas'][k]}», con ${t(100 * pr[k], 2)}\\ \\%$ de «{C}» dentro del grupo" for k in range(d['r']) if k != imax]
    if imas != imax:
        malas.insert(0, f"«{d['filas'][imas]}», porque tiene más {d['pob']} «{C}» ({d['m'][imas][j]})")
    malas.append(f"No se puede comparar porque los grupos tienen distinto tamaño")
    st = ['Para comparar grupos de distinto tamaño se usan porcentajes condicionales por fila, no frecuencias absolutas.'] + \
         ['; '.join(f"«{d['filas'][i]}»: $\\dfrac{{{d['m'][i][j]}}}{{{d['fi'][i]}}}={t(100 * pr[i], 2)}\\ \\%$" for i in range(d['r']))]
    return Q('Comparar grupos', d['ctx'], d['enun'], f"Según {d['vf']}, ¿qué grupo tiene la mayor proporción de «{C}»?",
             alts_txt(ok, malas[:3]), st, f"Mayor proporción: <b>«{d['filas'][imax]}»</b>.", table=d['table'], sub='Tablas de doble entrada')


def completar(rng):
    d = _tabla(rng)
    i, j = rng.randrange(d['r']), rng.randrange(d['c'])
    tb = {'head': d['table']['head'], 'rows': [list(r) for r in d['table']['rows']]}
    tb['rows'][i][j + 1] = '?'
    v = d['m'][i][j]
    st = [f"Por la marginal de la fila: $f_{{{i + 1}{j + 1}}}=f_{{{i + 1}\\cdot}}-\\sum_{{k\\ne {j + 1}}}f_{{{i + 1}k}}={d['fi'][i]}-({'+'.join(str(d['m'][i][k]) for k in range(d['c']) if k != j)})={v}$",
          f"Comprobación con la columna: ${d['fj'][j]}-({'+'.join(str(d['m'][k][j]) for k in range(d['r']) if k != i)})={v}$"]
    return Q('Completar la tabla', d['ctx'], d['enun'] + ' (falta una celda)', '¿Qué valor va en la celda marcada con «?»?',
             alts(v, [d['fi'][i] - v + 3, d['fj'][j] - d['fi'][i] if d['fj'][j] > d['fi'][i] else v + 7, d['n'] - d['fi'][i], v + d['r']], d=0),
             st, f"La celda vale <b>{v}</b>: las marginales permiten despejarla.", table=tb, sub='Tablas de doble entrada')


def asociacion(rng):
    d = _tabla(rng)
    m, n = d['m'], d['n']
    esper = [[d['fi'][i] * d['fj'][j] / n for j in range(d['c'])] for i in range(d['r'])]
    indep = all(abs(m[i][j] - esper[i][j]) < 1e-9 for i in range(d['r']) for j in range(d['c']))
    j = 0
    pr = ', '.join(f"«{d['filas'][i]}» ${t(100 * m[i][j] / d['fi'][i], 2)}\\ \\%$" for i in range(d['r']))
    if indep:
        ok = 'No hay asociación: los porcentajes condicionales son iguales en todos los grupos'
        malas = ['Hay asociación, porque las frecuencias de las celdas son distintas', 'Hay asociación, porque los grupos tienen distinto tamaño',
                 'No se puede saber sin calcular la correlación']
    else:
        ok = 'Hay asociación: los porcentajes condicionales cambian de un grupo a otro'
        malas = ['No hay asociación, porque todas las celdas tienen datos', 'No hay asociación, porque el total de cada columna es mayor que 0',
                 'No se puede saber sin calcular la correlación']
    st = [f"Porcentaje de «{d['cols'][0]}» dentro de cada grupo: {pr}.",
          'Si fueran iguales, la distribución de una variable no dependería de la otra (cada celda sería $\\frac{f_{i\\cdot}f_{\\cdot j}}{n}$).']
    return Q('Asociación entre variables', d['ctx'], d['enun'], '¿Hay asociación entre las dos variables?', alts_txt(ok, malas), st, ok + '.',
             table=d['table'], sub='Tablas de doble entrada')


# ---------------------------------------------------------------- cuantitativas
PARES = [('Educación · Notas', 'las horas de estudio semanales', 'la nota final', (2, 14), 0.25, 3.0, 1),
         ('Marketing', 'el gasto en publicidad (millones)', 'las ventas (millones)', (1, 10), 3.0, 12, 1),
         ('Heladería', 'la temperatura (°C)', 'los helados vendidos (cientos)', (12, 32), 0.4, -2, 1),
         ('Automotora', 'la antigüedad del auto (años)', 'el precio de reventa (millones)', (1, 12), -0.8, 14, 1),
         ('Deporte', 'las horas de entrenamiento semanales', 'el tiempo en 10 km (minutos)', (2, 12), -1.5, 62, 1),
         ('Salud · Hijos', 'el número de hijos', 'el colesterol (mg/dl)', (0, 5), 0.0, 190, 0)]


def fuerza(r):
    if abs(r) < 1e-9:
        return 'no hay relación lineal'
    a = abs(r)
    f = 'perfecta' if a >= 0.9999 else 'fuerte' if a >= 0.7 else 'moderada' if a >= 0.3 else 'débil'
    return f"relación lineal {f} {'directa' if r > 0 else 'inversa'}"


def _pares(rng, n=None):
    ctx, vx, vy, (a, b), b1, b0, dec = rng.choice(PARES)
    n = n or rng.choice([5, 6])
    xs = sorted(rng.sample(range(a, b + 1), n))
    ruido = max(abs(b1) * (b - a) * rng.choice([0.05, 0.15, 0.3]), 3 if b1 == 0 else 0.1)
    ys = [round(b0 + b1 * x + rng.gauss(0, ruido), dec) for x in xs]
    if b1 == 0:
        ys = [round(190 + rng.gauss(0, 20)) for _ in xs]
    R = lambda v, k=4: round(float(v), k)
    x, y = np.array(xs, float), np.array(ys, float)
    d = dict(ctx=ctx, vx=vx, vy=vy, n=n, xs=xs, ys=ys, Sx=R(x.sum(), 2), Sy=R(y.sum(), 2), Sxy=R((x * y).sum(), 2), Sx2=R((x * x).sum(), 2), Sy2=R((y * y).sum(), 2))
    # las sumas son exactas: todo se calcula con precisión completa y se trunca solo al mostrar
    d['xb'], d['yb'] = d['Sx'] / n, d['Sy'] / n
    d['cov'] = (d['Sxy'] - n * d['xb'] * d['yb']) / (n - 1)
    d['sx2'] = (d['Sx2'] - n * d['xb'] ** 2) / (n - 1)
    d['sy2'] = (d['Sy2'] - n * d['yb'] ** 2) / (n - 1)
    if d['sx2'] <= 0 or d['sy2'] <= 0:
        return None
    d['r'] = d['cov'] / (d['sx2'] * d['sy2']) ** 0.5
    d['tb'] = {'head': ['$x$'] + [s(v, 1) for v in xs], 'rows': [['$y$'] + [s(v, 1) for v in ys]]}
    d['chart'] = {'type': 'scatter', 'pts': [[float(a_), float(b_)] for a_, b_ in zip(xs, ys)], 'xlab': 'x', 'ylab': 'y'}
    return d


def _st_cov(d):
    n = d['n']
    return [f"$\\bar x={t(d['xb'])}$, $\\bar y={t(d['yb'])}$; $\\sum x_iy_i={t(d['Sxy'])}$",
            f"$Cov(x,y)=\\dfrac{{\\sum x_iy_i-n\\bar x\\bar y}}{{n-1}}=\\dfrac{{{t(d['Sxy'])}-{n}\\cdot{t(d['xb'])}\\cdot{t(d['yb'])}}}{{{n - 1}}}={t(d['cov'])}$"]


def covarianza(rng):
    d = _pares(rng)
    if not d:
        return None
    enun = f"Se registró {d['vx']} ($X$) y {d['vy']} ($Y$) en {d['n']} casos:"
    v = d['cov']
    return Q('Covarianza desde los datos', d['ctx'], enun, '¿Cuál es la covarianza muestral $Cov(x,y)$?',
             alts(v, [v * (d['n'] - 1) / d['n'], d['Sxy'] / d['n'], d['r'], v * (d['n'] - 1)]), _st_cov(d),
             f"$Cov={t(v)}$: " + ('relación directa.' if v > 0 else 'relación inversa.' if v < 0 else 'sin relación lineal.'), table=d['tb'], sub='Covarianza y correlación')


def correlacion(rng):
    d = _pares(rng, rng.choice([6, 8, 10]))
    if not d:
        return None
    enun = (f"Se estudia la relación entre {d['vx']} ($X$) y {d['vy']} ($Y$) en {d['n']} casos. Sumas: $\\sum x_i={t(d['Sx'])}$, $\\sum y_i={t(d['Sy'])}$, "
            f"$\\sum x_iy_i={t(d['Sxy'])}$, $\\sum x_i^2={t(d['Sx2'])}$, $\\sum y_i^2={t(d['Sy2'])}$.")
    r = d['r']
    st = _st_cov(d) + [f"$s_x^2={t(d['sx2'])}$, $s_y^2={t(d['sy2'])}$", f"$r=\\dfrac{{{t(d['cov'])}}}{{\\sqrt{{{t(d['sx2'])}\\cdot{t(d['sy2'])}}}}}={t(r)}$"]
    ok = f"$r={t(r)}$: {fuerza(r)}"
    malas = [f"$r={t(-r)}$: {fuerza(-r)}" if r else "$r=0{,}5$: relación lineal moderada directa", f"$r={t(r * r)}$: {fuerza(r * r)}" if abs(r * r - r) > 1e-4 and r else f"$r={t(r / 2 + 0.31)}$: {fuerza(r / 2 + 0.31)}",
             f"$r={t(d['cov'])}$: {fuerza(max(-1, min(1, d['cov'])))}" if abs(d['cov'] - r) > 1e-4 else f"$r={t(r)}$: no hay relación"]
    return Q('Coeficiente de correlación', d['ctx'], enun, '¿Cuál es $r$ y cómo se interpreta?', alts_txt(ok, malas), st, ok + '.', sub='Covarianza y correlación')


def interpretar(rng):
    ctx, vx, vy, *_ = rng.choice(PARES)
    r = rng.choice([-0.92, -0.75, -0.55, -0.18, 0.12, 0.42, 0.68, 0.81, 0.97])
    ok = fuerza(r).capitalize()
    otras = [fuerza(x).capitalize() for x in (-r, r * 0.3 if abs(r) >= 0.3 else (0.85 if r > 0 else -0.85), 0.5 if abs(r - 0.5) > 0.2 else -0.5)]
    return Q('Interpretar r', ctx, f"Entre {vx} y {vy} se obtuvo $r={t(r)}$.", '¿Cómo se describe la relación?', alts_txt(ok, otras),
             [f"Signo {'positivo: directa' if r > 0 else 'negativo: inversa'}; $|r|={t(abs(r))}$.", 'Escala: débil bajo 0,3; moderada entre 0,3 y 0,7; fuerte desde 0,7.'],
             f"{ok}.", sub='Covarianza y correlación')


def dispersion(rng):
    objetivo = rng.choice([-0.95, -0.6, 0.0, 0.6, 0.95])
    ctx, vx, vy, (a, b), *_ = rng.choice(PARES)
    n = 12
    nr = np.random.default_rng(rng.randrange(10 ** 9))
    x = nr.uniform(0, 10, n)
    e = nr.normal(0, 1, n)
    rho = objetivo
    y = rho * (x - x.mean()) / x.std() + (1 - rho ** 2) ** 0.5 * e
    y = 50 + 8 * y
    r = float(np.corrcoef(x, y)[0, 1])
    cand = {-0.95: '$r\\approx -0{,}95$', -0.6: '$r\\approx -0{,}6$', 0.0: '$r\\approx 0$', 0.6: '$r\\approx 0{,}6$', 0.95: '$r\\approx 0{,}95$'}
    cerca = min(cand, key=lambda k: abs(k - r))
    if cerca != objetivo:
        return None
    ok = cand[objetivo]
    otras = [v for k, v in cand.items() if k != objetivo and (abs(k - objetivo) > 0.5 or k == -objetivo)][:3]
    while len(otras) < 3:
        otras.append([v for k, v in cand.items() if k != objetivo and v not in otras][0])
    chart = {'type': 'scatter', 'pts': [[round(float(p), 2), round(float(q), 2)] for p, q in zip(x, y)], 'xlab': 'x', 'ylab': 'y'}
    return Q('Gráfico de dispersión', 'Lectura de gráficos', f"El gráfico muestra {n} pares $(x,y)$.",
             '¿Qué valor de $r$ corresponde mejor a la nube de puntos?', alts_txt(ok, otras),
             [f"La nube {'sube' if r > 0.2 else 'baja' if r < -0.2 else 'no muestra tendencia'}{' y está muy alineada' if abs(r) > 0.85 else ' con bastante dispersión' if abs(r) > 0.2 else ''}.",
              f"El valor calculado con los puntos es $r={t(r, 2, False)}$."], f"Corresponde {ok}.", chart=chart, sub='Covarianza y correlación')


def escala(rng):
    ctx, vx, vy, *_ = rng.choice(PARES[:5])
    signo = rng.choice([1, -1])                     # Cov y r siempre tienen el mismo signo
    cov = round(rng.uniform(2, 30), 2) * signo
    r = round(rng.uniform(0.4, 0.95), 2) * signo
    k = rng.choice([10, 100, 1000])
    if rng.random() < 0.5:
        ok = f"La covarianza se divide por {k} (queda ${t(cov / k)}$) y $r$ no cambia (${t(r)}$)"
        malas = [f"Ambas se dividen por {k}", f"La covarianza no cambia y $r$ se divide por {k}", f"La covarianza se divide por ${k}^2$ y $r$ no cambia"]
        ask = f"Si $Y$ se expresa en una unidad {k} veces mayor (los valores de $Y$ se dividen por {k}), ¿qué pasa?"
    else:
        ok = f"$r$ sigue siendo ${t(r)}$: no depende de las unidades"
        malas = [f"$r$ pasa a ser ${t(r / k)}$", f"$r$ cambia de signo", "$r$ deja de tener sentido"]
        ask = f"Si $X$ se mide en otra unidad (cada valor se multiplica por {k}), ¿qué pasa con $r$?"
    return Q('Cambio de escala', ctx, f"Entre {vx} ($X$) y {vy} ($Y$) se obtuvo $Cov(x,y)={t(cov)}$ y $r={t(r)}$.", ask, alts_txt(ok, malas),
             ['$Cov(ax,by)=ab\\,Cov(x,y)$: la covarianza depende de las unidades.', '$r$ no tiene unidades: no cambia si las escalas se multiplican por constantes positivas.'],
             ok + '.', sub='Covarianza y correlación')


CAUS = [("En las comunas con más heladerías hay más casos de quemaduras de sol ($r=0{,}86$).", "La temperatura y la estación del año influyen en ambas: la correlación no prueba que una cause la otra"),
        ("Los estudiantes que duermen más tienen mejores notas ($r=0{,}52$).", "Hay relación lineal moderada directa, pero el estudio no prueba que dormir más cause mejores notas"),
        ("En un hospital, los pacientes con más días de hospitalización reciben más visitas ($r=0{,}71$).", "Hay relación lineal fuerte directa, pero no indica que las visitas alarguen la hospitalización")]


def causalidad(rng):
    esc, ok = rng.choice(CAUS)
    malas = ['Una variable causa a la otra, porque la correlación es positiva', 'Como $r$ no vale 1, no hay ninguna relación', 'La correlación prueba causalidad cuando $|r|>0{,}5$']
    return Q('Correlación y causalidad', 'Interpretación', esc, '¿Qué conclusión es correcta?', alts_txt(ok, malas),
             ['La correlación mide asociación lineal, no causa y efecto.', 'Una tercera variable puede mover a ambas (variable de confusión).'], ok + '.', sub='Covarianza y correlación')


# ---------------------------------------------------------------- casos
def caso_tabla(rng):
    d = _tabla(rng, indep=False)
    i, j = rng.randrange(d['r']), rng.randrange(d['c'])
    F, C, m, n = d['filas'][i], d['cols'][j], d['m'], d['n']
    pct = lambda x: f"${t(x, 2)}\\ \\%$"
    p1 = P(f"¿Cuántos {d['pob']} son de «{F}» y «{C}»?", alts(m[i][j], [d['fi'][i], d['fj'][j], n - m[i][j]], d=0), [f"Celda de la tabla: $f_{{{i + 1}{j + 1}}}={m[i][j]}$."], f"<b>{m[i][j]}</b>.")
    p2 = P(f"Porcentaje del total que es «{C}».", alts(100 * d['fj'][j] / n, [100 * m[i][j] / n, 100 * m[i][j] / d['fi'][i], 100 * d['fi'][i] / n], d=2, fmt=pct),
           [f"Marginal: $\\dfrac{{{d['fj'][j]}}}{{{n}}}={t(d['fj'][j] / n)}$"], f"El {s(100 * d['fj'][j] / n, 2)} %.")
    p3 = P(f"De los {d['pob']} de «{F}», porcentaje que es «{C}».", alts(100 * m[i][j] / d['fi'][i], [100 * m[i][j] / n, 100 * m[i][j] / d['fj'][j], 100 * d['fi'][i] / n], d=2, fmt=pct),
           [f"Condicional por fila: $\\dfrac{{{m[i][j]}}}{{{d['fi'][i]}}}={t(m[i][j] / d['fi'][i])}$"], f"El {s(100 * m[i][j] / d['fi'][i], 2)} %.")
    pr = [m[k][j] / d['fi'][k] for k in range(d['r'])]
    asoc = len(set(round(x, 6) for x in pr)) > 1
    p4 = P(f"Comparando el porcentaje de «{C}» entre los grupos, ¿hay asociación?",
           alts_txt('Sí: el porcentaje cambia de un grupo a otro' if asoc else 'No: el porcentaje es el mismo en todos los grupos',
                    ['No: todas las celdas tienen datos' if asoc else 'Sí: las celdas tienen frecuencias distintas', 'No se puede saber sin un gráfico de dispersión', 'Sí, porque el total es mayor que 100']),
           ['; '.join(f"«{d['filas'][k]}»: ${t(100 * pr[k], 2)}\\ \\%$" for k in range(d['r']))], 'Se comparan distribuciones condicionales.')
    return CASO('Caso: tabla de doble entrada', d['ctx'], d['enun'], [p1, p2, p3, p4], table=d['table'], sub='Tablas de doble entrada')


def caso_corr(rng):
    d = _pares(rng, 6)
    if not d or abs(d['r']) < 0.3:
        return None
    enun = f"Se registró {d['vx']} ($X$) y {d['vy']} ($Y$) en {d['n']} casos:"
    r = d['r']
    p1 = P('¿Qué muestra el gráfico de dispersión?', alts_txt(f"Una tendencia {'creciente: relación directa' if r > 0 else 'decreciente: relación inversa'}",
                                                            [f"Una tendencia {'decreciente: relación inversa' if r > 0 else 'creciente: relación directa'}", 'Ninguna tendencia', 'Una relación perfecta']),
           [f"La nube {'sube' if r > 0 else 'baja'} de izquierda a derecha."], 'Primero se mira el gráfico.')
    p2 = P('Covarianza $Cov(x,y)$.', alts(d['cov'], [d['cov'] * (d['n'] - 1) / d['n'], d['Sxy'] / d['n'], r]), _st_cov(d), f"$Cov={t(d['cov'])}$.")
    p3 = P('Coeficiente de correlación $r$.', alts(r, [-r, r * r, d['cov']] if abs(d['cov']) <= 1 else [-r, r * r, r / 2]),
           [f"$s_x^2={t(d['sx2'])}$, $s_y^2={t(d['sy2'])}$", f"$r=\\dfrac{{{t(d['cov'])}}}{{\\sqrt{{{t(d['sx2'])}\\cdot{t(d['sy2'])}}}}}={t(r)}$"], f"$r={t(r)}$.")
    p4 = P('Interpretación.', alts_txt(fuerza(r).capitalize(), [fuerza(-r).capitalize(), 'No hay relación lineal', 'Una variable causa la otra']),
           ['Escala: débil bajo 0,3; moderada entre 0,3 y 0,7; fuerte desde 0,7.'], f"{fuerza(r).capitalize()}.")
    return CASO('Caso: de la dispersión a la correlación', d['ctx'], enun, [p1, p2, p3, p4], table=d['tb'], chart=d['chart'], sub='Covarianza y correlación')


def generar(rng):
    qs = []
    for fn, n in [(conjunta, 16), (condicional, 14), (comparar, 10), (completar, 10), (asociacion, 10),
                  (covarianza, 12), (correlacion, 12), (interpretar, 9), (dispersion, 10), (escala, 8), (causalidad, 3)]:
        qs += variantes(rng, fn, n)
    for fn, n in [(caso_tabla, 5), (caso_corr, 5)]:
        qs += variantes(rng, fn, n)
    return qs
