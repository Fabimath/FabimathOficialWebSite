"""Gato de Test (extra): proporción (Z), varianza (χ²), valor p, errores tipo I y II, potencia, plantear hipótesis,
dos medias con varianzas iguales y muestras pareadas. H0 siempre con «=», como el formulario AES.
Estilo: examen AES510 (a hipótesis, b estadístico y distribución, c región crítica, decisión y conclusión)."""
from comun import Q, P, CASO, alts, alts_txt, t, s, variantes, phi, z2, chiq, tq, ZQ, ZQ1

PROP = [('Salud · Vacunación', 'la proporción de adultos mayores vacunados', 0.70, 'supera el 70 %', '>'),
        ('Retail · Devoluciones', 'la proporción de pedidos devueltos', 0.08, 'es menor al 8 %', '<'),
        ('Elecciones', 'la proporción de votantes que apoya un proyecto', 0.50, 'difiere del 50 %', '!='),
        ('Educación · Aprobación', 'la tasa de aprobación de un ramo', 0.60, 'es distinta del 60 %', '!='),
        ('Banca · Morosidad', 'la tasa de morosidad de una cartera', 0.05, 'es mayor al 5 %', '>')]

SIG = {'>': '>', '<': '<', '!=': '\\ne'}


def _crit(alt, a):
    return ZQ1[1 - a] if alt != '!=' else ZQ[1 - a]


def _decide(z, alt, c):
    return (z >= c) if alt == '>' else (z <= -c) if alt == '<' else (abs(z) >= c)


def _region(alt, c, sym='z'):
    return {'>': f"{sym}^*\\ge {t(c, 3)}", '<': f"{sym}^*\\le -{t(c, 3)}", '!=': f"|{sym}^*|\\ge {t(c, 3)}"}[alt]


def prop(rng):
    ctx, par, p0, txt, alt = rng.choice(PROP)
    n = rng.choice([100, 150, 200, 250, 400])
    a = rng.choice([0.05, 0.01, 0.10])
    efecto = rng.choice([0, 1, 1.5, 2.5, 3])
    sgn = {'>': 1, '<': -1, '!=': rng.choice([-1, 1])}[alt]
    x = round(n * (p0 + sgn * efecto * (p0 * (1 - p0) / n) ** 0.5))
    ph = x / n
    z = round((ph - p0) / (p0 * (1 - p0) / n) ** 0.5, 2)   # z se informa con 2 decimales (tabla)
    c = _crit(alt, a)
    rech = _decide(z, alt, c)
    enun = f"Se quiere probar si {par} {txt}. En una muestra aleatoria de {n} casos, {x} cumplen la condición. Use $\\alpha={t(a, 2)}$."
    st = [f"$H_0: p={t(p0)}$ vs. $H_1: p{SIG[alt]}{t(p0)}$; $\\hat p={x}/{n}={t(ph)}$",
          f"$z^*=\\dfrac{{\\hat p-p_0}}{{\\sqrt{{p_0(1-p_0)/n}}}}=\\dfrac{{{t(ph)}-{t(p0)}}}{{\\sqrt{{{t(p0)}\\cdot{t(1 - p0)}/{n}}}}}={t(z, 2)}$",
          f"Región de rechazo: ${_region(alt, c)}$. {'Se rechaza' if rech else 'No se rechaza'} $H_0$."]
    ok = f"$z^*={t(z, 2)}$; {'se rechaza' if rech else 'no se rechaza'} $H_0$"
    zmal = (ph - p0) / (ph * (1 - ph) / n) ** 0.5 if 0 < ph < 1 else z + 1
    malas = [f"$z^*={t(z, 2)}$; {'no se rechaza' if rech else 'se rechaza'} $H_0$", f"$z^*={t((ph - p0) / (p0 * (1 - p0)) ** 0.5, 2)}$; no se rechaza $H_0$",
             f"$z^*={t(zmal + (0.5 if abs(zmal - z) < 0.01 else 0), 2)}$; {'se rechaza' if not rech else 'no se rechaza'} $H_0$"]
    conc = (f"{'Hay' if rech else 'No hay'} evidencia significativa, al {s(100 * a, 0)} %, de que {par} {txt}.")
    return Q('Proporción (Z)', ctx, enun, '¿Cuál es el estadístico de prueba y la decisión?', alts_txt(ok, malas), st, conc, sub='Una población')


VAR = [('Industria · Llenado', 'la variabilidad del llenado', 'ml', 2.0), ('Farmacia · Dosis', 'la variabilidad de la dosis', 'mg', 1.5),
       ('Laboratorio · Equipo', 'la variabilidad de las mediciones', 'mg/dl', 3.0)]


def varianza(rng):
    ctx, que, u, s0 = rng.choice(VAR)
    n = rng.choice([10, 15, 20, 25])
    a = rng.choice([0.05, 0.01])
    s_ = round(s0 * rng.choice([1.1, 1.3, 1.5, 1.7]), 2)
    chi = (n - 1) * s_ ** 2 / s0 ** 2
    c = chiq(1 - a, n - 1)
    rech = chi >= c
    enun = (f"La norma exige que la desviación estándar no supere ${t(s0)}$ {u}. Se sospecha que {que} aumentó: "
            f"una muestra de {n} unidades (población normal) dio $s={t(s_)}$ {u}. Use $\\alpha={t(a, 2)}$.")
    st = [f"$H_0:\\sigma^2={t(s0 * s0)}$ vs. $H_1:\\sigma^2>{t(s0 * s0)}$",
          f"$\\chi^{{2*}}=\\dfrac{{(n-1)s^2}}{{\\sigma_0^2}}=\\dfrac{{{n - 1}\\cdot{t(s_)}^2}}{{{t(s0 * s0)}}}={t(chi, 3)}$",
          f"Crítico: $\\chi^2_{{{t(1 - a, 2)};({n - 1})}}={t(c, 3)}$. {'Se rechaza' if rech else 'No se rechaza'} $H_0$."]
    ok = f"$\\chi^{{2*}}={t(chi, 3)}$ {'≥' if rech else '<'} ${t(c, 3)}$: {'se rechaza' if rech else 'no se rechaza'} $H_0$"
    malas = [f"$\\chi^{{2*}}={t(n * s_ ** 2 / s0 ** 2, 3)}$ frente a ${t(chiq(1 - a, n), 3)}$: {'se rechaza' if not rech else 'no se rechaza'} $H_0$",
             f"$\\chi^{{2*}}={t((n - 1) * s_ / s0, 3)}$: {'no se rechaza' if rech else 'se rechaza'} $H_0$",
             f"$\\chi^{{2*}}={t(chi, 3)}$ frente a ${t(chiq(a, n - 1), 3)}$: {'no se rechaza' if rech else 'se rechaza'} $H_0$"]
    return Q('Varianza (χ²)', ctx, enun, '¿Cuál es el estadístico, el valor crítico y la decisión?', alts_txt(ok, malas), st,
             f"{'Hay' if rech else 'No hay'} evidencia de que la variabilidad supera la norma.", sub='Una población')


def valor_p(rng):
    alt = rng.choice(['>', '<', '!='])
    z = round(rng.choice([0.8, 1.2, 1.5, 1.75, 1.96, 2.1, 2.4, 2.75, 3.1]) * (1 if alt != '<' else -1) * (rng.choice([1, -1]) if alt == '!=' else 1), 2)
    v = {'>': 1 - phi(z), '<': phi(z), '!=': 2 * (1 - phi(abs(z)))}[alt]
    a = 0.05
    rech = v < a
    st = [{'>': f"Unilateral derecho: $p=P(Z\\ge {t(z, 2)})=1-\\Phi({t(z, 2)})={t(v)}$",
           '<': f"Unilateral izquierdo: $p=P(Z\\le {t(z, 2)})=\\Phi({t(z, 2)})={t(v)}$",
           '!=': f"Bilateral: $p=2P(Z\\ge |{t(z, 2)}|)=2(1-\\Phi({t(abs(z), 2)}))={t(v)}$"}[alt],
          f"Como $p{'<' if rech else '\\ge'}0{{,}}05$, {'se rechaza' if rech else 'no se rechaza'} $H_0$ al 5 %."]
    ctx = rng.choice(['Salud · Ensayo clínico', 'Industria · Calidad', 'Educación · Rendimiento'])
    return Q('Valor p', ctx, f"En un test con $H_1:\\mu{SIG[alt]}\\mu_0$ se obtuvo $z^*={t(z, 2)}$.", '¿Cuál es el valor p?',
             alts(v, [1 - phi(abs(z)), 2 * (1 - phi(abs(z))), phi(abs(z)), 1 - v, (1 - phi(abs(z))) / 2]), st,
             f"Valor p $={t(v)}$: es la probabilidad, bajo $H_0$, de un resultado tan extremo o más que el observado.", sub='Conceptos')


ERRORES = [
    ("Un laboratorio prueba $H_0$: «el nuevo fármaco no es mejor que el actual». Concluye que es mejor, pero en realidad no lo es.", "Error tipo I"),
    ("Una fábrica prueba $H_0$: «la máquina está bien calibrada». No rechaza $H_0$, pero la máquina estaba descalibrada.", "Error tipo II"),
    ("Un tribunal parte de $H_0$: «el acusado es inocente». Condena a un inocente.", "Error tipo I"),
    ("Un test de tamizaje parte de $H_0$: «la persona está sana». Da negativo a una persona enferma.", "Error tipo II"),
    ("Se rechaza $H_0$ y $H_0$ era falsa.", "Decisión correcta (potencia)"),
]


def errores(rng):
    esc, ok = rng.choice(ERRORES)
    otras = ['Error tipo I', 'Error tipo II', 'Decisión correcta (potencia)', 'Decisión correcta (confianza)']
    return Q('Errores tipo I y II', 'Inferencia · Errores', esc, '¿Qué ocurrió?', alts_txt(ok, otras),
             ['Tipo I: rechazar $H_0$ siendo verdadera (probabilidad $\\alpha$).', 'Tipo II: no rechazar $H_0$ siendo falsa (probabilidad $\\beta$). Potencia $=1-\\beta$.'],
             f"Corresponde a: <b>{ok}</b>.", sub='Conceptos')


PLANT = [("Una clínica afirma que el tiempo medio de espera es 30 minutos; los pacientes reclaman que es mayor.", "$H_0:\\mu=30$ vs. $H_1:\\mu>30$",
          ["$H_0:\\mu>30$ vs. $H_1:\\mu=30$", "$H_0:\\mu=30$ vs. $H_1:\\mu\\ne 30$", "$H_0:\\bar x=30$ vs. $H_1:\\bar x>30$"]),
         ("Un fabricante declara que sus ampolletas duran en promedio 1.000 horas; un cliente sospecha que duran menos.", "$H_0:\\mu=1000$ vs. $H_1:\\mu<1000$",
          ["$H_0:\\mu<1000$ vs. $H_1:\\mu=1000$", "$H_0:\\mu=1000$ vs. $H_1:\\mu>1000$", "$H_0:\\bar x=1000$ vs. $H_1:\\bar x<1000$"]),
         ("Se quiere saber si la proporción de clientes satisfechos cambió respecto del 80 % del año pasado.", "$H_0:p=0{,}8$ vs. $H_1:p\\ne 0{,}8$",
          ["$H_0:p\\ne 0{,}8$ vs. $H_1:p=0{,}8$", "$H_0:p=0{,}8$ vs. $H_1:p>0{,}8$", "$H_0:\\hat p=0{,}8$ vs. $H_1:\\hat p\\ne 0{,}8$"])]


def plantear(rng):
    esc, ok, malas = rng.choice(PLANT)
    return Q('Plantear las hipótesis', 'Inferencia · Hipótesis', esc, '¿Cuáles son las hipótesis correctas?', alts_txt(ok, malas),
             ['$H_0$ lleva la igualdad y habla del parámetro (no del estadístico muestral).', '$H_1$ es lo que se quiere demostrar: su signo sale del enunciado.'],
             f"Hipótesis: {ok}.", sub='Conceptos')


def potencia(rng):
    mu0 = rng.choice([30, 50, 100])
    sg = rng.choice([5, 8, 10])
    n = rng.choice([16, 25, 36])
    a = 0.05
    mu1 = mu0 + rng.choice([2, 3, 4])
    se = sg / n ** 0.5
    xc = mu0 + 1.645 * se
    zb = z2((xc - mu1) / se)
    beta = phi(zb)
    k = rng.choice(['beta', 'pot'])
    v = beta if k == 'beta' else 1 - beta
    enun = (f"Se prueba $H_0:\\mu={mu0}$ vs. $H_1:\\mu>{mu0}$ con $\\sigma={sg}$, $n={n}$ y $\\alpha=0{{,}}05$. Suponga que en realidad $\\mu={mu1}$.")
    st = [f"Se rechaza si $\\bar x\\ge {mu0}+1{{,}}645\\cdot\\dfrac{{{sg}}}{{\\sqrt{{{n}}}}}={t(xc)}$",
          f"$\\beta=P(\\bar X<{t(xc)}|\\mu={mu1})=\\Phi\\left(\\dfrac{{{t(xc)}-{mu1}}}{{{t(se)}}}\\right)=\\Phi({t(zb, 2)})={t(beta)}$"]
    if k == 'pot':
        st.append(f"Potencia $=1-\\beta={t(1 - beta)}$")
    return Q('Error tipo II y potencia', 'Inferencia · Potencia', enun, f"¿Cuál es {'la probabilidad de error tipo II, $\\beta$' if k == 'beta' else 'la potencia del test'}?",
             alts(v, [1 - v, 0.05, 0.95, phi(z2((mu0 - mu1) / se))]), st,
             f"{'$\\beta$' if k == 'beta' else 'Potencia'} $={t(v)}$.", sub='Conceptos')


DOS = [('Salud · Dietas', 'la baja de peso (kg)', 'dieta A', 'dieta B'), ('Educación · Métodos', 'el puntaje', 'curso con tutorías', 'curso sin tutorías'),
       ('Agro · Variedades', 'el rendimiento (kg por planta)', 'variedad 1', 'variedad 2')]


def dos_medias(rng):
    ctx, var, g1, g2 = rng.choice(DOS)
    n1, n2 = rng.choice([(10, 10), (12, 10), (8, 12)])
    m1 = round(rng.uniform(5, 60), 1)
    s1, s2 = round(rng.uniform(1.5, 5), 1), round(rng.uniform(1.5, 5), 1)
    gl = n1 + n2 - 2
    sp = (((n1 - 1) * s1 ** 2 + (n2 - 1) * s2 ** 2) / gl) ** 0.5
    m2 = round(m1 - rng.choice([0.3, 1, 2, 3]) * sp * (1 / n1 + 1 / n2) ** 0.5, 1)
    tt = (m1 - m2) / (sp * (1 / n1 + 1 / n2) ** 0.5)
    c = tq(0.975, gl)
    rech = abs(tt) >= c
    enun = (f"Se compara {var} entre {g1} ($n_1={n1}$, $\\bar x_1={t(m1)}$, $s_1={t(s1)}$) y {g2} ($n_2={n2}$, $\\bar x_2={t(m2)}$, $s_2={t(s2)}$). "
            f"Poblaciones normales, independientes y con varianzas iguales; $\\alpha=0{{,}}05$, $H_1:\\mu_1\\ne\\mu_2$.")
    st = [f"$s_p=\\sqrt{{\\dfrac{{{n1 - 1}\\cdot{t(s1)}^2+{n2 - 1}\\cdot{t(s2)}^2}}{{{gl}}}}}={t(sp)}$",
          f"$t^*=\\dfrac{{{t(m1)}-{t(m2)}}}{{{t(sp)}\\sqrt{{1/{n1}+1/{n2}}}}}={t(tt, 3)}$", f"$t^{{({gl})}}_{{0{{,}}975}}={t(c, 3)}$: {'se rechaza' if rech else 'no se rechaza'} $H_0$"]
    ok = f"$t^*={t(tt, 3)}$ con {gl} gl; {'se rechaza' if rech else 'no se rechaza'} $H_0$"
    malas = [f"$t^*={t(tt, 3)}$ con {gl} gl; {'no se rechaza' if rech else 'se rechaza'} $H_0$", f"$t^*={t((m1 - m2) / (s1 ** 2 / n1 + s2 ** 2 / n2), 3)}$ con {gl} gl; {'se rechaza' if not rech else 'no se rechaza'} $H_0$",
             f"$t^*={t(tt * 1.4 + 0.3, 3)}$ con {n1 + n2} gl; se rechaza $H_0$"]
    return Q('Dos medias (varianzas iguales)', ctx, enun, '¿Cuál es el estadístico y la decisión?', alts_txt(ok, malas), st,
             f"{'Hay' if rech else 'No hay'} evidencia de que las medias difieran.", sub='Dos poblaciones')


def pareadas(rng):
    n = rng.choice([6, 7, 8])
    ds = [round(rng.uniform(-1, 5), 1) for _ in range(n)]
    db = sum(ds) / n
    sd = (sum((d - db) ** 2 for d in ds) / (n - 1)) ** 0.5
    if sd == 0:
        return None
    tt = db / (sd / n ** 0.5)
    c = tq(0.95, n - 1)
    rech = tt >= c
    ctx, que = rng.choice([('Salud · Presión', 'la baja de presión sistólica (mmHg) tras un programa de ejercicio, calculada como antes menos después'),
                           ('Educación · Taller', 'el aumento de puntaje tras un taller de estrategias, calculado como después menos antes')])
    enun = (f"Se mide {que}, en las mismas {n} personas: {', '.join('$' + t(d) + '$' for d in ds)}. "
            f"¿Hay evidencia, al 5 %, de un efecto positivo?")
    st = [f"Muestras pareadas: se trabaja con las diferencias. $\\bar d={t(db)}$, $s_d={t(sd)}$",
          f"$H_0:\\mu_d=0$ vs. $H_1:\\mu_d>0$; $t^*=\\dfrac{{{t(db)}}}{{{t(sd)}/\\sqrt{{{n}}}}}={t(tt, 3)}$",
          f"$t^{{({n - 1})}}_{{0{{,}}95}}={t(c, 3)}$: {'se rechaza' if rech else 'no se rechaza'} $H_0$"]
    ok = f"$t^*={t(tt, 3)}$ frente a ${t(c, 3)}$: {'se rechaza' if rech else 'no se rechaza'} $H_0$"
    malas = [f"$t^*={t(tt, 3)}$ frente a ${t(c, 3)}$: {'no se rechaza' if rech else 'se rechaza'} $H_0$", f"$t^*={t(db / sd, 3)}$ frente a ${t(c, 3)}$: no se rechaza $H_0$",
             f"$t^*={t(tt, 3)}$ frente a ${t(tq(0.95, 2 * n - 2), 3)}$ (muestras independientes): {'se rechaza' if not rech else 'no se rechaza'} $H_0$"]
    return Q('Muestras pareadas', ctx, enun, '¿Cuál es el estadístico y la decisión?', alts_txt(ok, malas), st,
             f"{'Hay' if rech else 'No hay'} evidencia de un efecto positivo.", sub='Dos poblaciones')


def caso_prop(rng):
    ctx, par, p0, txt, alt = rng.choice([p for p in PROP if p[4] != '!='])
    n = 200
    x = round(n * (p0 + (1 if alt == '>' else -1) * 2.2 * (p0 * (1 - p0) / n) ** 0.5))
    ph = x / n
    z = round((ph - p0) / (p0 * (1 - p0) / n) ** 0.5, 2)
    c = ZQ1[0.95]
    rech = _decide(z, alt, c)
    enun = f"Se quiere probar si {par} {txt}. En una muestra aleatoria de {n} casos, {x} cumplen la condición. Use $\\alpha=0{{,}}05$."
    p1 = P('Hipótesis.', alts_txt(f"$H_0:p={t(p0)}$ vs. $H_1:p{SIG[alt]}{t(p0)}$", [f"$H_0:p={t(p0)}$ vs. $H_1:p\\ne {t(p0)}$", f"$H_0:\\hat p={t(p0)}$ vs. $H_1:\\hat p{SIG[alt]}{t(p0)}$",
                                                                                   f"$H_0:p{SIG[alt]}{t(p0)}$ vs. $H_1:p={t(p0)}$"]), ['El signo de $H_1$ sale de «' + txt + '».'], 'Unilateral.')
    p2 = P('Estadístico de prueba.', alts(z, [(ph - p0) / (ph * (1 - ph) / n) ** 0.5, (ph - p0) / (p0 * (1 - p0)) ** 0.5, -z], d=2,
                                          fmt=lambda v: f"$z^*={t(v, 2)}$"), [f"$z^*=\\dfrac{{{t(ph)}-{t(p0)}}}{{\\sqrt{{{t(p0)}\\cdot{t(1 - p0)}/{n}}}}}={t(z, 2)}$"], f"$z^*={t(z, 2)}$.")
    p3 = P('Región crítica y decisión.', alts_txt(f"${_region(alt, c)}$; {'se rechaza' if rech else 'no se rechaza'} $H_0$",
                                                  [f"$|z^*|\\ge 1{{,}}96$; {'no se rechaza' if rech else 'se rechaza'} $H_0$", f"${_region(alt, c)}$; {'no se rechaza' if rech else 'se rechaza'} $H_0$",
                                                   f"$z^*\\ge 2{{,}}326$; no se rechaza $H_0$"]), [f"Unilateral al 5 %: $z_{{0{{,}}95}}=1{{,}}645$."], 'Decisión según la región crítica.')
    pv = 1 - phi(z2(z)) if alt == '>' else phi(z2(z))
    p4 = P('Valor p y conclusión.', alts_txt(f"$p={t(pv)}$: {'hay' if rech else 'no hay'} evidencia de que {par} {txt}",
                                            [f"$p={t(2 * pv)}$: no hay evidencia", f"$p={t(1 - pv)}$: {'no hay' if rech else 'hay'} evidencia", f"$p={t(pv)}$: se acepta $H_0$ como verdadera"]),
           [f"$p={t(pv)}$ {'<' if pv < 0.05 else '\\ge'} 0{{,}}05."], 'La conclusión se escribe en el contexto.')
    return CASO('Caso: test para una proporción', ctx, enun, [p1, p2, p3, p4], sub='Una población')


def generar(rng):
    qs = []
    for fn, n in [(prop, 14), (varianza, 10), (valor_p, 10), (errores, 5), (plantear, 3), (potencia, 8), (dos_medias, 10), (pareadas, 8)]:
        qs += variantes(rng, fn, n)
    qs += variantes(rng, caso_prop, 4)
    return qs
