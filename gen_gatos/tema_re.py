"""Gato Exponencial: regresión y = α e^{βx} linealizada con w = ln y. Coeficientes desde sumas de (x, w),
α̂ = e^{β̂0} (olvidar exponenciar es el error crítico), predicción, factor e^β y porcentaje de cambio,
tiempo de duplicación, comparación con el modelo lineal por R². Estilo: guía de regresión AES y C2/examen AES510."""
from math import exp, log
import numpy as np
from comun import Q, P, CASO, alts, alts_txt, t, s, variantes

CTX = [('Microbiología', 'las horas de cultivo', 'el número de bacterias (miles)', 1.2, 0.35, (0, 8)),
       ('Ventas · Lanzamiento', 'los meses desde el lanzamiento', 'las ventas mensuales (millones)', 2.0, 0.22, (1, 10)),
       ('Redes sociales', 'las semanas desde la apertura de una cuenta', 'los seguidores (miles)', 0.8, 0.30, (1, 9)),
       ('Farmacología', 'las horas desde la dosis', 'la concentración del fármaco (mg/l)', 40, -0.25, (0, 10)),
       ('Automotora', 'la antigüedad del auto (años)', 'el precio (millones)', 18, -0.12, (0, 12)),
       ('Fondos de inversión', 'los meses de inversión', 'el saldo (millones)', 5, 0.04, (0, 12))]


def _datos(rng):
    ctx, vx, vy, a0, b, (lo, hi) = rng.choice(CTX)
    n = rng.choice([5, 6, 7, 8])
    xs = sorted(rng.sample(range(lo, hi + 1), n))
    ys = [round(a0 * exp(b * x) * exp(rng.gauss(0, 0.04)), 2) for x in xs]
    x, y = np.array(xs, float), np.array(ys, float)
    R = lambda v, k=4: round(float(v), k)
    w = np.round(np.log(y), 4)
    Sx, Sw, Sxw, Sx2 = R(x.sum(), 2), R(w.sum()), R((x * w).sum()), R((x * x).sum(), 2)
    xb, wb = R(Sx / n), R(Sw / n)
    cov = R((Sxw - n * xb * wb) / (n - 1))
    sx2 = R((Sx2 - n * xb * xb) / (n - 1))
    b1 = R(cov / sx2)
    b0 = R(wb - b1 * xb)
    alfa = R(exp(b0))
    sst = float(((y - y.mean()) ** 2).sum())
    R2e = R(1 - float(((y - alfa * np.exp(b1 * x)) ** 2).sum()) / sst)      # R² del exponencial en la escala original de y
    bl1 = np.cov(x, y, ddof=1)[0, 1] / x.var(ddof=1)
    bl0 = y.mean() - bl1 * x.mean()
    R2l = R(1 - float(((y - bl0 - bl1 * x) ** 2).sum()) / sst)
    return dict(ctx=ctx, vx=vx, vy=vy, n=n, xs=xs, ys=ys, w=list(w), Sx=Sx, Sw=Sw, Sxw=Sxw, Sx2=Sx2,
                xb=xb, wb=wb, sx2=sx2, cov=cov, b1=b1, b0=b0, alfa=alfa, R2e=R2e, R2l=R2l, bl1=bl1, rango=(min(xs), max(xs)))


def _enun(d):
    tb = {'head': ['$x$'] + [str(v) for v in d['xs']], 'rows': [['$y$'] + [s(v, 2) for v in d['ys']], ['$w=\\ln y$'] + [s(v, 4) for v in d['w']]]}
    enun = (f"Se estudia {d['vy']} ($Y$) según {d['vx']} ($X$) con el modelo $y=\\alpha e^{{\\beta x}}$. "
            f"Se linealiza con $w=\\ln y$. Sumas: $\\sum x_i={t(d['Sx'])}$, $\\sum w_i={t(d['Sw'])}$, $\\sum x_iw_i={t(d['Sxw'])}$, $\\sum x_i^2={t(d['Sx2'])}$ ($n={d['n']}$).")
    return enun, tb


def _st(d):
    return [f"$\\bar x={t(d['xb'])}$, $\\bar w={t(d['wb'])}$",
            f"$Cov(x,w)=\\dfrac{{\\sum x_iw_i-n\\bar x\\bar w}}{{n-1}}={t(d['cov'])}$, $s_x^2={t(d['sx2'])}$",
            f"$\\hat\\beta_1=\\dfrac{{{t(d['cov'])}}}{{{t(d['sx2'])}}}={t(d['b1'])}$, $\\hat\\beta_0=\\bar w-\\hat\\beta_1\\bar x={t(d['b0'])}$"]


def modelo(rng):
    d = _datos(rng)
    enun, tb = _enun(d)
    fm = lambda a, b: f"$\\hat y={t(a)}\\,e^{{{t(b)}x}}$"
    ok = fm(d['alfa'], d['b1'])
    malas = [fm(d['b0'], d['b1']), fm(d['alfa'], d['b0']), fm(exp(d['b1']), d['b0']) if d['b0'] > 0 else fm(d['alfa'], exp(d['b1']))]
    st = _st(d) + [f"$\\hat\\alpha=e^{{\\hat\\beta_0}}=e^{{{t(d['b0'])}}}={t(d['alfa'])}$"]
    return Q('Ajuste del modelo exponencial', d['ctx'], enun, '¿Cuál es el modelo ajustado?', alts_txt(ok, malas), st,
             f"Modelo: {ok}. Error crítico: dejar $\\hat\\beta_0$ sin exponenciar.", table=tb, sub='Ajuste')


def coef(rng):
    d = _datos(rng)
    enun, tb = _enun(d)
    k = rng.choice(['b1', 'alfa'])
    if k == 'b1':
        return Q('Pendiente linealizada', d['ctx'], enun, '¿Cuánto vale $\\hat\\beta=\\hat\\beta_1$?', alts(d['b1'], [d['bl1'], d['b0'], exp(d['b1']), d['cov']]),
                 _st(d), f"$\\hat\\beta={t(d['b1'])}$: " + ('crecimiento.' if d['b1'] > 0 else 'decrecimiento.'), table=tb, sub='Ajuste')
    return Q('Constante α', d['ctx'], enun, '¿Cuánto vale $\\hat\\alpha$?', alts(d['alfa'], [d['b0'], exp(d['b1']), log(abs(d['b0'])) if d['b0'] > 0 else d['alfa'] * 1.5, d['ys'][0]]),
             _st(d) + [f"$\\hat\\alpha=e^{{{t(d['b0'])}}}={t(d['alfa'])}$"], f"$\\hat\\alpha={t(d['alfa'])}$: valor estimado de $Y$ en $x=0$.", table=tb, sub='Ajuste')


def prediccion(rng):
    d = _datos(rng)
    x0 = rng.choice(range(d['rango'][0], d['rango'][1] + 1))
    v = d['alfa'] * exp(d['b1'] * x0)
    enun = f"Para {d['vy']} según {d['vx']} se ajustó $\\hat y={t(d['alfa'])}\\,e^{{{t(d['b1'])}x}}$."
    st = [f"$\\hat y={t(d['alfa'])}\\cdot e^{{{t(d['b1'])}\\cdot{x0}}}={t(d['alfa'])}\\cdot{t(exp(d['b1'] * x0))}={t(v)}$"]
    return Q('Predicción', d['ctx'], enun, f"¿Cuál es el valor estimado de $Y$ para $x={x0}$?",
             alts(v, [d['b0'] + d['b1'] * x0, d['alfa'] + d['b1'] * x0, d['alfa'] * exp(d['b1']) * x0, log(v) if v > 1 else v * 2]), st, f"$\\hat y={t(v)}$.", sub='Interpretación')


def factor(rng):
    d = _datos(rng)
    f = exp(d['b1'])
    v = 100 * (f - 1)
    enun = f"Para {d['vy']} según {d['vx']} se ajustó $\\hat y={t(d['alfa'])}\\,e^{{{t(d['b1'])}x}}$."
    ok = f"$Y$ se multiplica por $e^{{{t(d['b1'])}}}={t(f)}$: {'aumenta' if v > 0 else 'disminuye'} un {s(abs(v), 2)} % por cada unidad de $X$"
    malas = [f"$Y$ {'aumenta' if v > 0 else 'disminuye'} {s(abs(d['b1']), 4)} unidades por cada unidad de $X$",
             f"$Y$ {'aumenta' if v > 0 else 'disminuye'} un {s(abs(100 * d['b1']) * 1.5 + 0.7, 2)} % por cada unidad de $X$",
             f"$Y$ se multiplica por ${t(d['alfa'])}$ por cada unidad de $X$"]
    return Q('Factor multiplicativo e^β', d['ctx'], enun, '¿Cómo se interpreta $\\hat\\beta$?', alts_txt(ok, malas),
             [f"Al pasar de $x$ a $x+1$: $\\dfrac{{\\hat y(x+1)}}{{\\hat y(x)}}=e^{{\\hat\\beta}}={t(f)}$", f"Cambio porcentual: $({t(f)}-1)\\cdot 100={t(v, 2)}\\ \\%$"],
             'En el modelo exponencial el cambio es porcentual, no absoluto.', sub='Interpretación')


def tiempo(rng):
    d = _datos(rng)
    crece = d['b1'] > 0
    v = log(2) / abs(d['b1'])
    enun = f"Para {d['vy']} según {d['vx']} se ajustó $\\hat y={t(d['alfa'])}\\,e^{{{t(d['b1'])}x}}$."
    ask = '¿Cada cuántas unidades de $X$ se duplica $Y$?' if crece else '¿Cada cuántas unidades de $X$ se reduce $Y$ a la mitad?'
    st = [f"$e^{{{t(d['b1'])}\\,\\Delta x}}={'2' if crece else '\\tfrac12'}\\Rightarrow \\Delta x=\\dfrac{{\\ln 2}}{{{t(abs(d['b1']))}}}={t(v)}$"]
    return Q('Tiempo de duplicación o vida media', d['ctx'], enun, ask, alts(v, [2 / abs(d['b1']), abs(d['b1']) * log(2), 1 / abs(d['b1']), log(2 * d['alfa']) / abs(d['b1'])]),
             st, f"$\\Delta x={t(v)}$ unidades de $X$.", sub='Interpretación')


def comparar(rng):
    d = _datos(rng)
    mejor = 'exponencial' if d['R2e'] > d['R2l'] else 'lineal'
    enun = (f"Para {d['vy']} según {d['vx']} se ajustaron dos modelos: lineal ($R^2={t(d['R2l'])}$) y exponencial, "
            f"($R^2={t(d['R2e'])}$). Ambos $R^2$ se calcularon con los residuos en la escala original de $y$, para que sean comparables.")
    ok = f"El {mejor}, porque su $R^2$ es mayor (explica más variabilidad)"
    otro = 'lineal' if mejor == 'exponencial' else 'exponencial'
    malas = [f"El {otro}, porque su $R^2$ es mayor", "Ambos son iguales: el $R^2$ no sirve para comparar", f"El {otro}, porque es más simple siempre"]
    return Q('Comparar lineal y exponencial', d['ctx'], enun, '¿Qué modelo conviene, según $R^2$?', alts_txt(ok, malas),
             [f"$R^2$ lineal ${t(d['R2l'])}$ frente a exponencial ${t(d['R2e'])}$.", 'Además conviene mirar el gráfico de dispersión: si la nube se curva, el exponencial ajusta mejor.'],
             ok + '.', sub='Interpretación')


def caso(rng):
    d = _datos(rng)
    enun, tb = _enun(d)
    fm = lambda a, b: f"$\\hat y={t(a)}\\,e^{{{t(b)}x}}$"
    p1 = P('$\\hat\\beta_1$ de la recta en $(x,w)$.', alts(d['b1'], [d['bl1'], d['b0'], exp(d['b1'])]), _st(d)[:2] + [f"$\\hat\\beta_1={t(d['b1'])}$"], f"$\\hat\\beta_1={t(d['b1'])}$.")
    p2 = P('Modelo en la escala original.', alts_txt(fm(d['alfa'], d['b1']), [fm(d['b0'], d['b1']), fm(d['alfa'], d['b0']), f"$\\hat y={t(d['b0'])}+{t(d['b1'])}x$"]),
           [f"$\\hat\\beta_0={t(d['b0'])}$, $\\hat\\alpha=e^{{{t(d['b0'])}}}={t(d['alfa'])}$"], fm(d['alfa'], d['b1']) + '.')
    f = exp(d['b1'])
    p3 = P('Interpretación de $\\hat\\beta$.', alts_txt(f"Por cada unidad de $X$, $Y$ {'aumenta' if f > 1 else 'disminuye'} un {s(abs(100 * (f - 1)), 2)} %",
                                                       [f"Por cada unidad de $X$, $Y$ cambia {s(d['b1'])} unidades", f"$Y$ {'disminuye' if f > 1 else 'aumenta'} un {s(abs(100 * (f - 1)), 2)} %",
                                                        f"$Y$ se multiplica por {s(d['alfa'])}"]), [f"$e^{{{t(d['b1'])}}}={t(f)}$"], 'Cambio porcentual constante.')
    x0 = d['rango'][1]
    v = d['alfa'] * exp(d['b1'] * x0)
    p4 = P(f"Predicción para $x={x0}$.", alts(v, [d['b0'] + d['b1'] * x0, d['alfa'] + d['b1'] * x0, d['alfa'] * f * x0]), [f"$\\hat y={t(d['alfa'])}e^{{{t(d['b1'])}\\cdot{x0}}}={t(v)}$"], f"$\\hat y={t(v)}$.")
    return CASO('Caso: modelo exponencial completo', d['ctx'], enun, [p1, p2, p3, p4], table=tb, sub='Ajuste')


def generar(rng):
    qs = []
    for fn, n in [(modelo, 12), (coef, 10), (prediccion, 10), (factor, 10), (tiempo, 8), (comparar, 8)]:
        qs += variantes(rng, fn, n)
    qs += variantes(rng, caso, 5)
    return qs
