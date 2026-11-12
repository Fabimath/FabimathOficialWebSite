"""Gato Lineal: covarianza y correlación desde sumas, recta de mínimos cuadrados, interpretación de coeficientes,
R², predicción y extrapolación, σ̂² del error, inferencia sobre β1 (t e IC) y lectura de la salida de R.
Formulario AES: β̂1 = Cov/s_x², β̂0 = ȳ − β̂1 x̄, r = Cov/(s_x s_y), σ̂² = s_y²(1−r²)(n−1)/(n−2), V(β̂1) = σ̂²/((n−1)s_x²)."""
import numpy as np
from comun import Q, P, CASO, alts, alts_txt, t, s, variantes, tq

CTX = [('Heladería', 'la temperatura (°C)', 'las ventas de helados (cientos)', 'X', 'Y', (12, 32), 0.45, 1.5),
       ('Recursos humanos', 'los años de experiencia', 'el sueldo (cientos de miles de pesos)', 'X', 'Y', (1, 15), 0.6, 6),
       ('Marketing', 'el gasto en publicidad (millones)', 'las ventas (millones)', 'X', 'Y', (2, 12), 3.5, 20),
       ('Salud · Ejercicio', 'las horas semanales de ejercicio', 'la presión sistólica (mmHg)', 'X', 'Y', (0, 10), -1.8, 135),
       ('Educación', 'las horas de estudio semanales', 'la nota final', 'X', 'Y', (2, 14), 0.22, 3.2),
       ('Automotora', 'la antigüedad del auto (años)', 'el precio de reventa (millones)', 'X', 'Y', (1, 12), -0.75, 14),
       ('Supermercado', 'el precio (miles de pesos)', 'las unidades vendidas (decenas)', 'X', 'Y', (1, 8), -2.2, 30)]


def _datos(rng):
    ctx, vx, vy, X, Y, (a, b), b1, b0 = rng.choice(CTX)
    n = rng.choice([6, 7, 8, 10])
    xs = sorted(rng.sample(range(a, b + 1), n))
    ruido = abs(b1) * (b - a) * rng.choice([0.04, 0.08, 0.15])
    ys = [round(b0 + b1 * x + rng.gauss(0, ruido), 1) for x in xs]
    x, y = np.array(xs, float), np.array(ys, float)
    R = lambda v, k=4: round(float(v), k)
    d = dict(ctx=ctx, vx=vx, vy=vy, n=n, xs=xs, ys=ys, Sx=R(x.sum(), 2), Sy=R(y.sum(), 2), Sxy=R((x * y).sum(), 2), Sx2=R((x * x).sum(), 2), Sy2=R((y * y).sum(), 2))
    d['xb'], d['yb'] = R(d['Sx'] / n), R(d['Sy'] / n)
    d['cov'] = R((d['Sxy'] - n * d['xb'] * d['yb']) / (n - 1))
    d['sx2'] = R((d['Sx2'] - n * d['xb'] ** 2) / (n - 1))
    d['sy2'] = R((d['Sy2'] - n * d['yb'] ** 2) / (n - 1))
    if d['sy2'] <= 0 or d['sx2'] <= 0:
        return None
    d['r'] = R(d['cov'] / (d['sx2'] * d['sy2']) ** 0.5)
    d['b1'] = R(d['cov'] / d['sx2'])
    d['b0'] = R(d['yb'] - d['b1'] * d['xb'])
    d['s2e'] = R(d['sy2'] * (1 - d['r'] ** 2) * (n - 1) / (n - 2))
    d['se1'] = R((d['s2e'] / ((n - 1) * d['sx2'])) ** 0.5)
    d['rango'] = (min(xs), max(xs))
    return d


def _enun(d, tabla=True):
    base = f"Se estudia la relación entre {d['vx']} ($X$) y {d['vy']} ($Y$) en {d['n']} observaciones."
    sumas = (f" Sumas: $\\sum x_i={t(d['Sx'])}$, $\\sum y_i={t(d['Sy'])}$, $\\sum x_iy_i={t(d['Sxy'])}$, "
             f"$\\sum x_i^2={t(d['Sx2'])}$, $\\sum y_i^2={t(d['Sy2'])}$.")
    tb = {'head': ['$x$'] + [str(v) for v in d['xs']], 'rows': [['$y$'] + [s(v, 1) for v in d['ys']]]} if tabla else None
    return base + sumas, tb


def _st_base(d):
    n = d['n']
    return [f"$\\bar x={t(d['xb'])}$, $\\bar y={t(d['yb'])}$",
            f"$Cov(X,Y)=\\dfrac{{\\sum x_iy_i-n\\bar x\\bar y}}{{n-1}}=\\dfrac{{{t(d['Sxy'])}-{n}\\cdot{t(d['xb'])}\\cdot{t(d['yb'])}}}{{{n - 1}}}={t(d['cov'])}$",
            f"$s_x^2=\\dfrac{{\\sum x_i^2-n\\bar x^2}}{{n-1}}={t(d['sx2'])}$, $s_y^2={t(d['sy2'])}$"]


def fuerza(r):
    a = abs(r)
    f = 'muy fuerte' if a >= 0.9 else 'fuerte' if a >= 0.7 else 'moderada' if a >= 0.4 else 'débil' if a >= 0.2 else 'muy débil o nula'
    return f + (' directa' if r > 0 else ' inversa')


def correlacion(rng):
    d = _datos(rng)
    if not d:
        return None
    enun, tb = _enun(d)
    k = rng.choice(['cov', 'r'])
    if k == 'cov':
        v = d['cov']
        return Q('Covarianza', d['ctx'], enun, '¿Cuál es la covarianza muestral $Cov(X,Y)$?',
                 alts(v, [d['cov'] * (d['n'] - 1) / d['n'], d['Sxy'] / d['n'], d['r'], d['Sxy'] - d['n'] * d['xb'] * d['yb']]), _st_base(d)[:2],
                 f"$Cov={t(v)}$: la relación es {'directa' if v > 0 else 'inversa'}.", table=tb, sub='Correlación')
    v = d['r']
    st = _st_base(d) + [f"$r=\\dfrac{{Cov}}{{s_xs_y}}=\\dfrac{{{t(d['cov'])}}}{{\\sqrt{{{t(d['sx2'])}\\cdot{t(d['sy2'])}}}}}={t(v)}$"]
    return Q('Coeficiente de correlación', d['ctx'], enun, '¿Cuál es $r$ y su interpretación?',
             alts_txt(f"$r={t(v)}$: asociación lineal {fuerza(v)}", [f"$r={t(-v)}$: asociación lineal {fuerza(-v)}", f"$r={t(v * v)}$: asociación lineal {fuerza(v * v if v > 0 else -v * v)}",
                                                                      f"$r={t(d['cov'] / d['sx2'])}$: pendiente de la recta" if abs(d['cov'] / d['sx2']) <= 1 else f"$r={t(v)}$: no hay asociación lineal"]),
             st, f"$r={t(v)}$: asociación lineal {fuerza(v)}.", table=tb, sub='Correlación')


def recta(rng):
    d = _datos(rng)
    if not d:
        return None
    enun, tb = _enun(d)
    b0, b1 = d['b0'], d['b1']
    st = _st_base(d) + [f"$\\hat\\beta_1=\\dfrac{{Cov}}{{s_x^2}}=\\dfrac{{{t(d['cov'])}}}{{{t(d['sx2'])}}}={t(b1)}$",
                        f"$\\hat\\beta_0=\\bar y-\\hat\\beta_1\\bar x={t(d['yb'])}-({t(b1)})\\cdot{t(d['xb'])}={t(b0)}$"]
    fm = lambda b0_, b1_: f"$\\hat y={t(b0_)}{'+' if b1_ >= 0 else '-'}{t(abs(b1_))}\\,x$"
    b1m = d['cov'] / d['sy2']
    ok = fm(b0, b1)
    malas = [fm(d['yb'] - b1m * d['xb'], b1m), fm(b1, b0), fm(d['yb'] + b1 * d['xb'], b1)]
    return Q('Recta de mínimos cuadrados', d['ctx'], enun, '¿Cuál es la recta de regresión de $Y$ sobre $X$?', alts_txt(ok, malas), st,
             f"Recta: {ok}.", table=tb, sub='Recta y predicción')


def interpretar(rng):
    d = _datos(rng)
    if not d:
        return None
    b0, b1 = d['b0'], d['b1']
    k = rng.choice(['b1', 'b0'])
    enun = f"Se ajustó la recta $\\hat y={t(b0)}{'+' if b1 >= 0 else '-'}{t(abs(b1))}\\,x$, donde $X$ representa {d['vx']} (observada entre {d['rango'][0]} y {d['rango'][1]}) e $Y$ representa {d['vy']}."
    if k == 'b1':
        ok = f"Por cada unidad adicional de $X$, $Y$ {'aumenta' if b1 > 0 else 'disminuye'} en promedio {s(abs(b1))}"
        malas = [f"Por cada unidad adicional de $X$, $Y$ {'disminuye' if b1 > 0 else 'aumenta'} en promedio {s(abs(b1))}",
                 f"Cuando $X=0$, $Y$ vale en promedio {s(b1)}", f"El {s(abs(b1) * 100 if abs(b1) < 1 else abs(b1), 2)} % de la variabilidad de $Y$ se explica por $X$"]
        return Q('Interpretar la pendiente', d['ctx'], enun, '¿Cómo se interpreta $\\hat\\beta_1$?', alts_txt(ok, malas),
                 [f"$\\hat\\beta_1={t(b1)}$ es el cambio promedio de $Y$ por unidad de $X$."], ok + '.', sub='Recta y predicción')
    dentro = d['rango'][0] <= 0
    ok = f"Es el valor promedio estimado de $Y$ cuando $X=0$ ({s(b0)})" + ('' if dentro else '; ojo: $X=0$ está fuera del rango observado, así que es solo una extrapolación')
    malas = [f"Es lo que cambia $Y$ por cada unidad de $X$ ({s(b0)})", f"Es el promedio de $Y$ en la muestra ({s(b0)})", "No tiene ninguna interpretación posible"]
    return Q('Interpretar el intercepto', d['ctx'], enun, '¿Cómo se interpreta $\\hat\\beta_0$?', alts_txt(ok, malas),
             [f"$\\hat\\beta_0={t(b0)}$ es $\\hat y$ en $x=0$."], 'El intercepto solo tiene sentido práctico si $X=0$ es posible y está cerca de los datos.', sub='Recta y predicción')


def r2(rng):
    d = _datos(rng)
    if not d:
        return None
    enun, tb = _enun(d)
    v = d['r'] ** 2
    st = _st_base(d) + [f"$r={t(d['r'])}$", f"$R^2=r^2={t(v)}$"]
    return Q('Coeficiente de determinación', d['ctx'], enun, '¿Cuál es $R^2$ y qué significa?',
             alts_txt(f"$R^2={t(v)}$: el modelo explica el {s(100 * v, 2)} % de la variabilidad de $Y$",
                      [f"$R^2={t(abs(d['r']))}$: el modelo explica el {s(100 * abs(d['r']), 2)} % de la variabilidad de $Y$",
                       f"$R^2={t(v)}$: el {s(100 * v, 2)} % de las predicciones son exactas", f"$R^2={t(1 - v)}$: el modelo explica el {s(100 * (1 - v), 2)} % de la variabilidad de $Y$"]),
             st, f"$R^2={t(v)}$.", table=tb, sub='Correlación')


def prediccion(rng):
    d = _datos(rng)
    if not d:
        return None
    b0, b1 = d['b0'], d['b1']
    lo, hi = d['rango']
    afuera = rng.random() < 0.3
    x0 = hi + (hi - lo) if afuera else round((lo + hi) / 2 + rng.choice([-1, 0, 1]))
    v = b0 + b1 * x0
    enun = f"Con {d['n']} datos ($X$ entre {lo} y {hi}) se ajustó $\\hat y={t(b0)}{'+' if b1 >= 0 else '-'}{t(abs(b1))}\\,x$, donde $X$ representa {d['vx']} e $Y$ representa {d['vy']}."
    if afuera:
        ok = f"$\\hat y={t(v)}$, pero es una extrapolación poco confiable: $x={x0}$ está fuera del rango observado"
        malas = [f"$\\hat y={t(v)}$, y es muy confiable porque $r$ es alto", f"$\\hat y={t(b0 * x0 + b1)}$, confiable", "No se puede calcular ningún valor"]
        return Q('Predicción y extrapolación', d['ctx'], enun, f"¿Qué se puede decir de la predicción para $x={x0}$?", alts_txt(ok, malas),
                 [f"$\\hat y={t(b0)}+({t(b1)})\\cdot{x0}={t(v)}$", 'Fuera del rango de los datos, la relación lineal puede no mantenerse.'], 'No extrapolar.', sub='Recta y predicción')
    return Q('Predicción', d['ctx'], enun, f"¿Cuál es el valor estimado de $Y$ para $x={x0}$?",
             alts(v, [b0 * x0 + b1, b1 * x0, b0 + b1 * (x0 + 1), (v - b0) / b1 if b1 else v + 1]), [f"$\\hat y={t(b0)}+({t(b1)})\\cdot{x0}={t(v)}$"],
             f"$\\hat y={t(v)}$.", sub='Recta y predicción')


def inferencia(rng):
    d = _datos(rng)
    if not d:
        return None
    n = d['n']
    enun, tb = _enun(d)
    tt = d['b1'] / d['se1']
    c = tq(0.975, n - 2)
    k = rng.choice(['s2', 'test', 'ic'])
    base = _st_base(d) + [f"$r={t(d['r'])}$, $\\hat\\beta_1={t(d['b1'])}$",
                          f"$\\hat\\sigma^2_\\varepsilon=s_y^2(1-r^2)\\dfrac{{n-1}}{{n-2}}={t(d['sy2'])}(1-{t(d['r'] ** 2)})\\dfrac{{{n - 1}}}{{{n - 2}}}={t(d['s2e'])}$"]
    if k == 's2':
        v = d['s2e']
        return Q('Varianza del error', d['ctx'], enun, '¿Cuál es $\\hat\\sigma^2_\\varepsilon$?', alts(v, [d['sy2'] * (1 - d['r'] ** 2), d['sy2'] * d['r'] ** 2, d['s2e'] ** 0.5, d['sy2']]),
                 base, f"$\\hat\\sigma^2_\\varepsilon={t(v)}$.", table=tb, sub='Inferencia')
    base.append(f"$EE(\\hat\\beta_1)=\\sqrt{{\\dfrac{{\\hat\\sigma^2_\\varepsilon}}{{(n-1)s_x^2}}}}={t(d['se1'])}$")
    if k == 'test':
        rech = abs(tt) >= c
        base.append(f"$t^*=\\dfrac{{\\hat\\beta_1}}{{EE}}={t(tt, 3)}$; $t^{{({n - 2})}}_{{0{{,}}975}}={t(c, 3)}$")
        ok = f"$t^*={t(tt, 3)}$: {'se rechaza' if rech else 'no se rechaza'} $H_0:\\beta_1=0$"
        malas = [f"$t^*={t(tt, 3)}$: {'no se rechaza' if rech else 'se rechaza'} $H_0:\\beta_1=0$", f"$t^*={t(d['b1'] / d['s2e'], 3)}$: {'no se rechaza' if rech else 'se rechaza'} $H_0$",
                 f"$t^*={t(tt, 3)}$ frente a $t^{{({n - 1})}}$: no se rechaza $H_0$" if rech else f"$t^*={t(tt * 2.5, 3)}$: se rechaza $H_0$"]
        return Q('Test para la pendiente', d['ctx'], enun, '¿Es significativa la pendiente al 5 %?', alts_txt(ok, malas), base,
                 f"{'La pendiente es significativa: X ayuda a explicar Y.' if rech else 'No hay evidencia de relación lineal.'}", table=tb, sub='Inferencia')
    lo, hi = d['b1'] - c * d['se1'], d['b1'] + c * d['se1']
    base.append(f"$IC_{{95\\%}}(\\beta_1)={t(d['b1'])}\\mp{t(c, 3)}\\cdot{t(d['se1'])}=[{t(lo)};\\ {t(hi)}]$")
    fm = lambda a, b: f"$[\\,{t(a)}\\ ;\\ {t(b)}\\,]$"
    ok = fm(lo, hi)
    cz = 1.96
    malas = [fm(d['b1'] - cz * d['se1'], d['b1'] + cz * d['se1']), fm(d['b1'] - c * d['s2e'], d['b1'] + c * d['s2e']), fm(d['b1'] - tq(0.975, n - 1) * d['se1'] * 1.2, d['b1'] + tq(0.975, n - 1) * d['se1'] * 1.2)]
    return Q('IC para la pendiente', d['ctx'], enun, 'Construya el IC de 95 % para $\\beta_1$.', alts_txt(ok, malas), base,
             f"$IC={ok[1:-1]}$" + ('; no contiene al 0: la pendiente es significativa.' if lo > 0 or hi < 0 else '; contiene al 0: no es significativa.'), table=tb, sub='Inferencia')


def salida_r(rng):
    d = _datos(rng)
    if not d:
        return None
    n = d['n']
    tt = d['b1'] / d['se1']
    se0 = (d['s2e'] * (1 / n + d['xb'] ** 2 / ((n - 1) * d['sx2']))) ** 0.5
    from scipy import stats
    p1 = 2 * (1 - stats.t.cdf(abs(tt), n - 2))
    p0 = 2 * (1 - stats.t.cdf(abs(d['b0'] / se0), n - 2))
    F = tt ** 2
    rout = (f"Coefficients:\n             Estimate Std. Error t value Pr(>|t|)\n(Intercept)  {d['b0']:8.4f}  {se0:8.4f} {d['b0'] / se0:7.3f}  {p0:.4f}\n"
            f"x            {d['b1']:8.4f}  {d['se1']:8.4f} {tt:7.3f}  {p1:.4f}\n---\nResidual standard error: {d['s2e'] ** 0.5:.3f} on {n - 2} degrees of freedom\n"
            f"Multiple R-squared: {d['r'] ** 2:.4f},  Adjusted R-squared: {1 - (1 - d['r'] ** 2) * (n - 1) / (n - 2):.4f}\nF-statistic: {F:.3f} on 1 and {n - 2} DF,  p-value: {p1:.4f}")
    k = rng.choice(['ec', 'sig', 'r2'])
    enun = f"Se ajustó en R el modelo lm(y ~ x), con $X$: {d['vx']} e $Y$: {d['vy']}. La salida fue:"
    if k == 'ec':
        fm = lambda a, b: f"$\\hat y={t(a)}{'+' if b >= 0 else '-'}{t(abs(b))}\\,x$"
        return Q('Leer la salida de R', d['ctx'], enun, '¿Cuál es la recta ajustada?', alts_txt(fm(d['b0'], d['b1']), [fm(d['b1'], d['b0']), fm(d['b0'], d['se1']), fm(se0, d['b1'])]),
                 ['La columna «Estimate» trae $\\hat\\beta_0$ (Intercept) y $\\hat\\beta_1$ (x).'], 'Se leen los coeficientes en «Estimate».', rout=rout, sub='Salida de R')
    if k == 'sig':
        rech = p1 < 0.05
        ok = f"Valor p de x $={t(p1, 4, False, True)}$" + (": la pendiente es significativa al 5 %" if rech else ": la pendiente no es significativa al 5 %")
        malas = [f"Valor p de x $={t(p1, 4, False, True)}$" + (": la pendiente no es significativa" if rech else ": la pendiente es significativa"),
                 f"Valor p del intercepto $={t(p0, 4, False, True)}$: decide sobre la pendiente", f"$R^2={t(d['r'] ** 2)}$: lo que importa es si supera 0,5"]
        return Q('Leer la salida de R', d['ctx'], enun, '¿Es significativa la variable $X$ al 5 %?', alts_txt(ok, malas),
                 ['Se mira el valor p de la fila «x» (o el del test F, que en regresión simple coincide).', f"$H_0:\\beta_1=0$; se rechaza si $p<0{{,}}05$."], ok + '.', rout=rout, sub='Salida de R')
    v = d['r'] ** 2
    ok = f"El modelo explica el {s(100 * v, 2)} % de la variabilidad de $Y$"
    malas = [f"El modelo explica el {s(100 * abs(d['r']), 2)} % de la variabilidad de $Y$" if abs(abs(d['r']) - v) > 0.001 else 'El modelo no explica nada',
             f"El {s(100 * v, 2)} % de los datos están sobre la recta", f"La correlación es {s(v)}"]
    return Q('Leer la salida de R', d['ctx'], enun, '¿Cómo se interpreta «Multiple R-squared»?', alts_txt(ok, malas), [f"$R^2={t(v)}$."], ok + '.', rout=rout, sub='Salida de R')


def caso(rng):
    d = _datos(rng)
    if not d:
        return None
    enun, tb = _enun(d)
    b0, b1, r = d['b0'], d['b1'], d['r']
    fm = lambda a, b: f"$\\hat y={t(a)}{'+' if b >= 0 else '-'}{t(abs(b))}\\,x$"
    p1 = P('Coeficiente de correlación e interpretación.', alts_txt(f"$r={t(r)}$: asociación lineal {fuerza(r)}", [f"$r={t(r * r)}$: asociación lineal {fuerza(r * r if r > 0 else -r * r)}",
                                                                                                                  f"$r={t(-r)}$: asociación lineal {fuerza(-r)}", f"$r={t(d['cov'])}$: asociación lineal perfecta"]),
           _st_base(d) + [f"$r={t(r)}$"], f"$r={t(r)}$.")
    b1m = d['cov'] / d['sy2']
    p2 = P('Recta de regresión de $Y$ sobre $X$.', alts_txt(fm(b0, b1), [fm(b1, b0), fm(d['yb'] - b1m * d['xb'], b1m), fm(d['yb'] + b1 * d['xb'], b1)]),
           [f"$\\hat\\beta_1={t(b1)}$, $\\hat\\beta_0={t(b0)}$"], fm(b0, b1) + '.')
    p3 = P('Interpretación de la pendiente.', alts_txt(f"Por cada unidad más de $X$, $Y$ {'aumenta' if b1 > 0 else 'disminuye'} en promedio {s(abs(b1))}",
                                                       [f"Por cada unidad más de $X$, $Y$ {'disminuye' if b1 > 0 else 'aumenta'} en promedio {s(abs(b1))}",
                                                        f"Cuando $X=0$, $Y$ vale {s(b1)}", f"$Y$ cambia {s(abs(b1))} % por cada unidad de $X$"]),
           ['La pendiente es el cambio promedio de $Y$ por unidad de $X$.'], 'Siempre en el contexto.')
    p4 = P('$R^2$ e interpretación.', alts_txt(f"$R^2={t(r * r)}$: explica el {s(100 * r * r, 2)} % de la variabilidad de $Y$",
                                              [f"$R^2={t(abs(r))}$: explica el {s(100 * abs(r), 2)} %", f"$R^2={t(r * r)}$: acierta el {s(100 * r * r, 2)} % de las predicciones", f"$R^2={t(1 - r * r)}$: explica el {s(100 * (1 - r * r), 2)} %"]),
           [f"$R^2=r^2={t(r * r)}$"], 'Proporción de variabilidad explicada.')
    x0 = round(sum(d['rango']) / 2)
    p5 = P(f"Predicción para $x={x0}$.", alts(b0 + b1 * x0, [b1 + b0 * x0, b1 * x0, b0 + b1 * (x0 + 1)]), [f"$\\hat y={t(b0)}+({t(b1)})\\cdot{x0}={t(b0 + b1 * x0)}$"],
           f"$\\hat y={t(b0 + b1 * x0)}$ (dentro del rango de los datos).")
    return CASO('Caso: regresión lineal completa', d['ctx'], enun, [p2, p3, p4, p5], table=tb, sub='Recta y predicción')


def generar(rng):
    qs = []
    for fn, n in [(recta, 12), (interpretar, 10), (r2, 8), (prediccion, 10), (inferencia, 14), (salida_r, 12)]:
        qs += variantes(rng, fn, n)
    qs += variantes(rng, caso, 5)
    return qs
