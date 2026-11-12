"""Gato Múltiple: regresión lineal múltiple leída desde la salida de R (lm). Coeficientes ceteris paribus, variable
dummy, predicción, t = coef/EE, valores p, qué variable sacar, R² y R² ajustado, test F global."""
import numpy as np
from scipy import stats
from comun import Q, P, CASO, alts, alts_txt, t, s, variantes

MODELOS = [  # ctx, y, [(nombre en R, descripción, unidad, rango, coef verdadero, es_dummy)], intercepto, ruido
    ('Inmobiliaria · Viña del Mar', 'el precio de un departamento (millones de pesos)', 'precio',
     [('m2', 'la superficie (m²)', 'm²', (40, 120), 1.4, False), ('dorm', 'el número de dormitorios', 'dormitorios', (1, 4), 6.0, False),
      ('dist', 'la distancia al mar (km)', 'km', (0, 8), -4.5, False)], 20, 14),
    ('Recursos humanos', 'el sueldo (cientos de miles de pesos)', 'sueldo',
     [('exper', 'los años de experiencia', 'años', (0, 20), 0.35, False), ('educ', 'los años de estudio', 'años', (8, 18), 0.55, False),
      ('jefatura', 'si tiene cargo de jefatura (1 = sí)', '', (0, 1), 3.0, True)], 2, 2.2),
    ('Salud · Glicemia', 'la glicemia en ayunas (mg/dl)', 'glicemia',
     [('edad', 'la edad (años)', 'años', (25, 70), 0.45, False), ('imc', 'el índice de masa corporal', 'puntos de IMC', (19, 38), 1.6, False),
      ('ejercicio', 'las horas de ejercicio semanales', 'horas', (0, 8), -1.0, False)], 40, 9),
    ('Agro · Rendimiento', 'el rendimiento de trigo (qq/ha)', 'rend',
     [('lluvia', 'la lluvia (cientos de mm)', 'cientos de mm', (2, 9), 3.2, False), ('fert', 'el fertilizante (kg/ha)', 'kg/ha', (50, 200), 0.08, False),
      ('riego', 'si tiene riego tecnificado (1 = sí)', '', (0, 1), 6.0, True)], 15, 4),
]


def _ajuste(rng):
    ctx, ydesc, yname, vars_, b0, ruido = rng.choice(MODELOS)
    n = rng.choice([30, 40, 50, 60])
    X = []
    for (nm, d, u, (lo, hi), b, dummy) in vars_:
        X.append(np.array([rng.randint(0, 1) if dummy else rng.uniform(lo, hi) for _ in range(n)]))
    # coeficientes "verdaderos" con algo de azar; a veces una variable sin efecto
    betas = [b * rng.choice([0.8, 1, 1.2]) for (*_, b, _d) in vars_]
    nulo = rng.random() < 0.6
    if nulo:
        j = rng.randrange(len(betas))
        betas[j] = 0.0
    nr = np.random.default_rng(rng.randrange(10 ** 9))
    y = b0 + sum(bj * xj for bj, xj in zip(betas, X)) + nr.normal(0, ruido, n)
    A = np.column_stack([np.ones(n)] + X)
    coef, *_ = np.linalg.lstsq(A, y, rcond=None)
    coef = np.round(coef, 4)          # lo que se imprime es lo que se usa en las claves
    res = y - A @ coef
    p = A.shape[1]
    s2 = res @ res / (n - p)
    cov = s2 * np.linalg.inv(A.T @ A)
    se = np.round(np.sqrt(np.diag(cov)), 4)
    tv = coef / se
    pv = 2 * (1 - stats.t.cdf(np.abs(tv), n - p))
    sct = ((y - y.mean()) ** 2).sum()
    R2 = round(float(1 - (res @ res) / sct), 4)
    R2a = round(1 - (1 - R2) * (n - 1) / (n - p), 4)
    F = (R2 / (p - 1)) / ((1 - R2) / (n - p))
    pF = 1 - stats.f.cdf(F, p - 1, n - p)
    nombres = ['(Intercept)'] + [v[0] for v in vars_]
    lineas = [f"{nm:<12}{c:10.4f}{e:11.4f}{tt:8.3f}  {('<2e-16' if pp < 2e-16 else f'{pp:.2e}' if pp < 1e-4 else f'{pp:.4f}'):>8}" for nm, c, e, tt, pp in zip(nombres, coef, se, tv, pv)]
    rout = (f"lm(formula = {yname} ~ {' + '.join(v[0] for v in vars_)})\n\nCoefficients:\n            Estimate  Std. Error t value  Pr(>|t|)\n" + '\n'.join(lineas) +
            f"\n---\nResidual standard error: {s2 ** 0.5:.3f} on {n - p} degrees of freedom\nMultiple R-squared: {R2:.4f},  Adjusted R-squared: {R2a:.4f}\n"
            f"F-statistic: {F:.2f} on {p - 1} and {n - p} DF,  p-value: {('< 2.2e-16' if pF < 2.2e-16 else f'{pF:.4g}')}")
    return dict(ctx=ctx, ydesc=ydesc, yname=yname, vars=vars_, n=n, p=p, coef=coef, se=se, tv=tv, pv=pv, R2=R2, R2a=R2a, F=F, pF=pF, rout=rout)


def _enun(d):
    desc = '; '.join(f"<b>{v[0]}</b>: {v[1]}" for v in d['vars'])
    return f"Se ajustó un modelo de regresión múltiple para {d['ydesc']} con {d['n']} observaciones. Variables: {desc}. Salida de R:"


def coef_interp(rng):
    d = _ajuste(rng)
    j = rng.randrange(1, d['p'])
    nm, desc, u, _, _, dummy = d['vars'][j - 1]
    b = d['coef'][j]
    if dummy:
        ok = f"Quienes tienen {nm} = 1 tienen, en promedio, {s(abs(b))} {'más' if b > 0 else 'menos'} de {d['yname']} que quienes no, con las demás variables fijas"
        malas = [f"Por cada unidad de {nm}, {d['yname']} cambia {s(b)} sin importar las otras variables",
                 f"El {s(abs(b))} % de quienes tienen {nm} = 1 tiene mayor {d['yname']}", f"Quienes tienen {nm} = 1 tienen {s(abs(b))} {'menos' if b > 0 else 'más'} de {d['yname']}"]
    else:
        ok = f"Por cada unidad adicional de {nm} ({u}), {d['yname']} {'aumenta' if b > 0 else 'disminuye'} en promedio {s(abs(b))}, manteniendo constantes las demás variables"
        malas = [f"Por cada unidad adicional de {nm} ({u}), {d['yname']} {'disminuye' if b > 0 else 'aumenta'} en promedio {s(abs(b))}, manteniendo constantes las demás",
                 f"Cuando {nm} vale 0, {d['yname']} vale {s(b)}", f"{nm} explica el {s(abs(b) * 100 if abs(b) < 1 else abs(b), 2)} % de la variabilidad de {d['yname']}"]
    return Q('Interpretar un coeficiente', d['ctx'], _enun(d), f"¿Cómo se interpreta el coeficiente de <b>{nm}</b>?", alts_txt(ok, malas),
             [f"$\\hat\\beta_{{{nm}}}={t(b)}$ (columna Estimate).", 'En regresión múltiple cada coeficiente es un efecto parcial: «ceteris paribus».'],
             ok + '.', rout=d['rout'], sub='Coeficientes')


def prediccion(rng):
    d = _ajuste(rng)
    xs = []
    for (nm, desc, u, (lo, hi), b, dummy) in d['vars']:
        xs.append(rng.randint(0, 1) if dummy else round(rng.uniform(lo, hi)))
    v = d['coef'][0] + sum(c * x for c, x in zip(d['coef'][1:], xs))
    cond = ', '.join(f"{v_[0]} = {x}" for v_, x in zip(d['vars'], xs))
    expr = f"{t(d['coef'][0])}" + ''.join(f"{'+' if c >= 0 else '-'}{t(abs(c))}\\cdot{x}" for c, x in zip(d['coef'][1:], xs))
    return Q('Predicción', d['ctx'], _enun(d), f"¿Cuál es el valor estimado de {d['yname']} para {cond}?",
             alts(v, [v - d['coef'][0], d['coef'][0] + sum(c for c in d['coef'][1:]), v + d['coef'][1] * 2, sum(e * x for e, x in zip(d['se'][1:], xs)) + d['coef'][0]], rel=0.01),
             [f"$\\hat y={expr}={t(v)}$"], f"$\\hat y={t(v)}$.", rout=d['rout'], sub='Predicción y ajuste')


def significancia(rng):
    d = _ajuste(rng)
    sig = [v[0] for v, pp in zip(d['vars'], d['pv'][1:]) if pp < 0.05]
    nosig = [v[0] for v, pp in zip(d['vars'], d['pv'][1:]) if pp >= 0.05]
    fmt = lambda L: ', '.join(L) if L else 'ninguna'
    ok = f"Significativas: {fmt(sig)}; no significativas: {fmt(nosig)}"
    todas = [v[0] for v in d['vars']]
    malas = [f"Significativas: {fmt(nosig)}; no significativas: {fmt(sig)}", f"Significativas: {fmt(todas)}; no significativas: ninguna",
             f"Significativas: {fmt([v for v, e in zip(todas, d['coef'][1:]) if abs(e) > 1])}; no significativas: {fmt([v for v, e in zip(todas, d['coef'][1:]) if abs(e) <= 1])}"]
    if len(set(malas + [ok])) < 4:
        malas[2] = 'Solo el intercepto es significativo'
        if len(set(malas + [ok])) < 4:
            return None
    st = [f"Se compara cada valor p (columna Pr(>|t|)) con 0,05: " + '; '.join(f"{v[0]}: ${t(pp, 4, False, True)}$" for v, pp in zip(d['vars'], d['pv'][1:]))]
    return Q('Significancia individual', d['ctx'], _enun(d), '¿Qué variables son significativas al 5 %?', alts_txt(ok, malas), st,
             'Un coeficiente es significativo si su valor p es menor que $\\alpha$ ($H_0:\\beta_j=0$).', rout=d['rout'], sub='Coeficientes')


def t_valor(rng):
    d = _ajuste(rng)
    j = rng.randrange(1, d['p'])
    v = d['coef'][j] / d['se'][j]
    nm = d['vars'][j - 1][0]
    rout = d['rout'].replace(f"{d['tv'][j]:8.3f}", '     ???', 1)
    return Q('Estadístico t de un coeficiente', d['ctx'], _enun(d) + ' (Se borró un valor de la columna t value.)', f"¿Cuál es el valor t de <b>{nm}</b>?",
             alts(v, [d['coef'][j] * d['se'][j], d['se'][j] / d['coef'][j], d['coef'][j] / d['se'][j] ** 2, v * (d['n'] ** 0.5) / 3], d=3),
             [f"$t=\\dfrac{{\\hat\\beta}}{{EE}}=\\dfrac{{{t(d['coef'][j])}}}{{{t(d['se'][j])}}}={t(v, 3)}$", f"Se compara con $t^{{({d['n'] - d['p']})}}$."],
             f"$t={t(v, 3)}$.", rout=rout, sub='Coeficientes')


def eliminar(rng):
    d = _ajuste(rng)
    pv = list(d['pv'][1:])
    j = int(np.argmax(pv))
    if pv[j] < 0.05:
        return None
    nm = d['vars'][j][0]
    otras = [v[0] for k, v in enumerate(d['vars']) if k != j]
    ok = f"Sacar <b>{nm}</b> (valor p ${t(pv[j], 4, False, True)}>0{{,}}05$) y volver a ajustar"
    malas = [f"Sacar <b>{otras[0]}</b>, porque tiene el coeficiente más chico", f"Sacar <b>{otras[1]}</b>", 'Sacar el intercepto, porque no es una variable']
    return Q('¿Qué variable sacar?', d['ctx'], _enun(d), 'Para simplificar el modelo, ¿qué conviene hacer primero?', alts_txt(ok, malas),
             ['Se elimina de a una la variable con mayor valor p no significativo, y se reajusta.', 'El tamaño del coeficiente depende de las unidades: no sirve para decidir.'],
             ok + '.', rout=d['rout'], sub='Coeficientes')


def r2aj(rng):
    d = _ajuste(rng)
    k = rng.choice(['calc', 'interp'])
    if k == 'calc':
        v = 1 - (1 - d['R2']) * (d['n'] - 1) / (d['n'] - d['p'])
        rout = d['rout'].replace(f"Adjusted R-squared: {d['R2a']:.4f}", 'Adjusted R-squared: ???')
        return Q('R² ajustado', d['ctx'], _enun(d), f"Calcule el $R^2$ ajustado ($n={d['n']}$, $k={d['p'] - 1}$ predictores).",
                 alts(v, [d['R2'], 1 - (1 - d['R2']) * d['n'] / (d['n'] - d['p']), 1 - (1 - d['R2']) * (d['n'] - 1) / (d['n'] - 1 - d['p']) - 0.01, d['R2'] ** 2]),
                 [f"$R^2_{{aj}}=1-(1-R^2)\\dfrac{{n-1}}{{n-k-1}}=1-(1-{t(d['R2'])})\\dfrac{{{d['n'] - 1}}}{{{d['n'] - d['p']}}}={t(v)}$"],
                 f"$R^2_{{aj}}={t(v)}$: penaliza agregar variables que no aportan.", rout=rout, sub='Predicción y ajuste')
    ok = f"El modelo explica el {s(100 * d['R2'], 2)} % de la variabilidad de {d['yname']}; el $R^2$ ajustado (${t(d['R2a'])}$) corrige por el número de variables"
    malas = [f"El modelo acierta el {s(100 * d['R2'], 2)} % de las predicciones", f"El modelo explica el {s(100 * d['R2a'], 2)} % y el $R^2$ ajustado siempre es mayor",
             f"Cada variable explica el {s(100 * d['R2'] / (d['p'] - 1), 2)} % de la variabilidad"]
    return Q('R² y R² ajustado', d['ctx'], _enun(d), '¿Cómo se interpretan $R^2$ y $R^2$ ajustado?', alts_txt(ok, malas),
             ['$R^2$ nunca baja al agregar variables; el ajustado sí puede bajar.'], ok + '.', rout=d['rout'], sub='Predicción y ajuste')


def test_f(rng):
    d = _ajuste(rng)
    rech = d['pF'] < 0.05
    nombres = '='.join(f"\\beta_{{{v[0]}}}" for v in d['vars'])
    ok = f"$H_0:{nombres}=0$; como el valor p del test F es {'menor' if rech else 'mayor'} que 0,05, {'se rechaza' if rech else 'no se rechaza'} $H_0$: {'al menos una variable aporta' if rech else 'el modelo no aporta'}"
    malas = [f"$H_0:{nombres}=0$; {'no se rechaza' if rech else 'se rechaza'} $H_0$", "$H_0$: todas las variables son significativas; se rechaza si $R^2>0{,}5$",
             f"$H_0:\\beta_0=0$; {'se rechaza' if rech else 'no se rechaza'}: el intercepto es significativo"]
    return Q('Test F global', d['ctx'], _enun(d), '¿Qué hipótesis prueba el test F y qué se concluye al 5 %?', alts_txt(ok, malas),
             [f"$F={t(d['F'], 2)}$ con $({d['p'] - 1};\\ {d['n'] - d['p']})$ gl; valor p en la última línea."], 'El test F evalúa el modelo completo.', rout=d['rout'], sub='Predicción y ajuste')


def caso(rng):
    d = _ajuste(rng)
    j = 1
    nm, desc, u, _, _, dummy = d['vars'][0]
    b = d['coef'][1]
    p1 = P(f"Interpretación del coeficiente de <b>{nm}</b>.", alts_txt(
        f"Por cada unidad más de {nm}, {d['yname']} {'aumenta' if b > 0 else 'disminuye'} en promedio {s(abs(b))}, con las demás fijas",
        [f"Por cada unidad más de {nm}, {d['yname']} {'disminuye' if b > 0 else 'aumenta'} {s(abs(b))}", f"Si {nm} = 0, {d['yname']} = {s(b)}", f"{nm} explica el {s(abs(b), 2)} %"]),
           [f"En la columna Estimate, $\\hat\\beta_{{{nm}}}={t(b)}$.", 'En regresión múltiple es un efecto parcial: se mantienen fijas las demás variables (ceteris paribus).'],
           'El coeficiente se interpreta con «en promedio» y «manteniendo constantes las demás».')
    sig = [v[0] for v, pp in zip(d['vars'], d['pv'][1:]) if pp < 0.05]
    fmt = lambda L: ', '.join(L) if L else 'ninguna'
    todas = [v[0] for v in d['vars']]
    nosig = [x for x in todas if x not in sig]
    alt2 = [f"Significativas: {fmt(nosig)}", f"Significativas: {fmt(todas)}", 'Significativas: solo el intercepto']
    if fmt(sig) == fmt(todas):
        alt2[1] = f"Significativas: {fmt(todas[:1])}"
    p2 = P('Variables significativas al 5 %.', alts_txt(f"Significativas: {fmt(sig)}", alt2),
           ['Se compara el valor p de cada variable (columna Pr(>|t|)) con 0,05: ' + '; '.join(f"{v[0]}: ${t(pp, 4, False, True)}$" for v, pp in zip(d['vars'], d['pv'][1:]))],
           f"Significativas: {fmt(sig)}.")
    rech = d['pF'] < 0.05
    p3 = P('Test F global.', alts_txt(f"{'Se rechaza' if rech else 'No se rechaza'} $H_0$: {'el modelo es útil' if rech else 'el modelo no es útil'}",
                                      [f"{'No se rechaza' if rech else 'Se rechaza'} $H_0$", 'No se puede decidir sin el $R^2$ ajustado', 'Se rechaza porque hay más de una variable']),
           ["Valor p del test F: " + ('menor que $0{,}0001$' if d['pF'] < 1e-4 else f"${t(d['pF'], 4, False, True)}$") + '.'], 'Evalúa todas las pendientes a la vez.')
    p4 = P('Porcentaje de variabilidad explicada.', alts(100 * d['R2'], [100 * d['R2a'], 100 * d['R2'] ** 0.5, 100 * (1 - d['R2'])], d=2, fmt=lambda v: f"${t(v, 2)}\\ \\%$"),
           [f"$R^2={t(d['R2'])}$"], f"El modelo explica el {s(100 * d['R2'], 2)} %.")
    return CASO('Caso: lectura completa de una regresión múltiple', d['ctx'], _enun(d), [p1, p2, p3, p4], rout=d['rout'], sub='Coeficientes')


def generar(rng):
    qs = []
    for fn, n in [(coef_interp, 12), (prediccion, 10), (significancia, 10), (t_valor, 8), (eliminar, 8), (r2aj, 10), (test_f, 8)]:
        qs += variantes(rng, fn, n)
    qs += variantes(rng, caso, 5)
    return qs
