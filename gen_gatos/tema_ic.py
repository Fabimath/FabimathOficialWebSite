"""Gato de Intervalos (extra): IC para la varianza y la desviación estándar (χ²), tamaño de muestra (media y proporción),
diferencia de medias (σ conocidas y varianzas iguales), margen de error, interpretación y decisión con un IC.
Formulario AES: IC σ² = [(n−1)s²/χ²_{1−α/2;(n−1)} ; (n−1)s²/χ²_{α/2;(n−1)}] con χ² de cola inferior."""
from math import ceil
from comun import Q, P, CASO, alts, alts_txt, t, s, variantes, chiq, tq, ZQ


def iv(a, b, d=4):
    return f"$[\\,{t(a, d)}\\ ;\\ {t(b, d)}\\,]$"


def alts_iv(ok, cands, d=4):
    out, vis = [iv(*ok, d)], {iv(*ok, d)}
    for c in cands:
        f = iv(*c, d)
        if f not in vis and abs(c[0] - ok[0]) + abs(c[1] - ok[1]) > 2 * 10 ** -d:
            out.append(f)
            vis.add(f)
        if len(out) == 4:
            return out
    raise ValueError('faltan distractores de intervalo')


CTX = [('Industria · Llenado', 'el contenido (ml) de botellas', 'ml', 500, 3.0),
       ('Farmacia · Comprimidos', 'el peso (mg) de comprimidos', 'mg', 250, 2.5),
       ('Laboratorio · Glicemia', 'la glicemia (mg/dl) medida por un equipo', 'mg/dl', 95, 4.0),
       ('Logística · Tiempos', 'el tiempo de entrega (horas)', 'horas', 30, 5.0),
       ('Educación · Notas', 'la nota final de un curso', 'puntos', 5.1, 0.8)]


def _var(rng):
    ctx, var, u, mu, sg = rng.choice(CTX)
    n = rng.choice([10, 12, 15, 16, 20, 25, 30])
    s_ = round(sg * rng.uniform(0.8, 1.2), 2)
    conf = rng.choice([0.90, 0.95, 0.99])
    a = 1 - conf
    ql, qu = chiq(a / 2, n - 1), chiq(1 - a / 2, n - 1)
    lo, hi = (n - 1) * s_ ** 2 / qu, (n - 1) * s_ ** 2 / ql
    return ctx, var, u, n, s_, conf, a, ql, qu, lo, hi


def ic_var(rng, desv=None):
    ctx, var, u, n, s_, conf, a, ql, qu, lo, hi = _var(rng)
    desv = rng.random() < 0.5 if desv is None else desv
    enun = f"Se mide {var} en una muestra de {n} unidades de una población normal, obteniendo $s={t(s_)}$ {u}."
    st = [f"Confianza {s(100 * conf, 0)} %: $\\alpha={t(a, 2)}$, gl $={n - 1}$. Tabla: $\\chi^2_{{{t(a / 2, 3)};({n - 1})}}={t(ql, 3)}$ y $\\chi^2_{{{t(1 - a / 2, 3)};({n - 1})}}={t(qu, 3)}$.",
          f"$IC_{{\\sigma^2}}=\\left[\\dfrac{{{n - 1}\\cdot{t(s_)}^2}}{{{t(qu, 3)}}}\\ ;\\ \\dfrac{{{n - 1}\\cdot{t(s_)}^2}}{{{t(ql, 3)}}}\\right]={iv(lo, hi)[1:-1]}$"]
    malos = [((n - 1) * s_ ** 2 / ql, (n - 1) * s_ ** 2 / qu), ((n - 1) * s_ / qu, (n - 1) * s_ / ql), (n * s_ ** 2 / qu, n * s_ ** 2 / ql),
             ((n - 1) * s_ ** 2 / chiq(1 - a, n - 1), (n - 1) * s_ ** 2 / chiq(a, n - 1)), ((n - 1) * s_ ** 2 / chiq(1 - a / 2, n), (n - 1) * s_ ** 2 / chiq(a / 2, n))]
    if desv:
        st.append(f"Para $\\sigma$ se saca raíz a ambos extremos: $IC_\\sigma={iv(lo ** 0.5, hi ** 0.5)[1:-1]}$")
        ok = (lo ** 0.5, hi ** 0.5)
        malos = [(x ** 0.5 if x > 0 else 0, y ** 0.5) for x, y in malos[:1] + malos[2:]] + [(lo, hi), (s_ - (hi ** 0.5 - s_), s_ + (hi ** 0.5 - s_))]
        conc = f"Con {s(100 * conf, 0)} % de confianza, la desviación estándar poblacional está entre {s(ok[0])} y {s(ok[1])} {u}."
        tipo = 'Desviación estándar (χ²)'
    else:
        ok = (lo, hi)
        conc = f"Con {s(100 * conf, 0)} % de confianza, la varianza poblacional está entre {s(lo)} y {s(hi)} {u}². El intervalo no es simétrico en torno a $s^2$."
        tipo = 'Varianza (χ²)'
    return Q(tipo, ctx, enun, f"Construya el intervalo de {s(100 * conf, 0)} % de confianza para {'la desviación estándar $\\sigma$' if desv else 'la varianza $\\sigma^2$'}.",
             alts_iv(ok, malos), st, conc, sub='Varianza y desviación')


def tam_media(rng):
    ctx, var, u, mu, sg = rng.choice(CTX)
    conf = rng.choice([0.90, 0.95, 0.99])
    z = ZQ[conf]
    E = round(sg * rng.choice([0.2, 0.25, 0.3, 0.5]), 2)
    nn = (z * sg / E) ** 2
    v = ceil(nn - 1e-9)
    st = [f"$n=\\left(\\dfrac{{z_{{1-\\alpha/2}}\\,\\sigma}}{{E}}\\right)^2=\\left(\\dfrac{{{t(z, 3)}\\cdot{t(sg)}}}{{{t(E)}}}\\right)^2={t(nn)}$",
          f"Se redondea hacia arriba: $n={v}$."]
    return Q('Tamaño de muestra (media)', ctx, f"Se quiere estimar la media de {var}, con $\\sigma={t(sg)}$ {u} conocida por estudios previos.",
             f"¿Qué tamaño de muestra se necesita para un error máximo de ${t(E)}$ {u} con {s(100 * conf, 0)} % de confianza?",
             alts(v, [int(nn), ceil(z * sg / E), ceil((ZQ[0.95 if conf != 0.95 else 0.90] * sg / E) ** 2), ceil((z * sg * sg / E) ** 2) if sg > 1 else 2 * v], d=0),
             st, f"Se necesitan al menos <b>{v}</b> unidades (siempre se redondea hacia arriba).", sub='Tamaño de muestra')


def tam_prop(rng):
    conf = rng.choice([0.90, 0.95, 0.99])
    z = ZQ[conf]
    E = rng.choice([0.02, 0.03, 0.04, 0.05])
    previo = rng.choice([None, 0.2, 0.3, 0.4])
    p = previo or 0.5
    nn = z * z * p * (1 - p) / E ** 2
    v = ceil(nn - 1e-9)
    ctx, que = rng.choice([('Elecciones · Encuesta', 'la proporción de votantes que apoya a una candidata'), ('Salud · Tabaquismo', 'la proporción de fumadores de una comuna'),
                           ('Retail · Satisfacción', 'la proporción de clientes satisfechos')])
    sup = f"Un estudio previo estimó $\\hat p={t(p)}$." if previo else 'No hay información previa sobre $p$.'
    st = [("Sin información previa se usa $p=0{,}5$ (caso más conservador)." if not previo else f"Se usa $\\hat p={t(p)}$ del estudio previo."),
          f"$n=\\dfrac{{z^2\\,p(1-p)}}{{E^2}}=\\dfrac{{{t(z, 3)}^2\\cdot{t(p)}\\cdot{t(1 - p)}}}{{{t(E)}^2}}={t(nn)}\\Rightarrow n={v}$"]
    return Q('Tamaño de muestra (proporción)', ctx, f"Se quiere estimar {que}. {sup}",
             f"¿Qué tamaño de muestra asegura un error máximo de {s(100 * E, 0)} puntos porcentuales con {s(100 * conf, 0)} % de confianza?",
             alts(v, [int(nn), ceil(z * 0.25 / E ** 2), ceil(z * z * 0.25 / E ** 2) if previo else ceil(z * z * 0.21 / E ** 2), ceil(z * (p * (1 - p)) ** 0.5 / E)], d=0),
             st, f"Se necesita una muestra de al menos <b>{v}</b> personas.", sub='Tamaño de muestra')


DOS = [('Salud · Presión arterial', 'la presión sistólica (mmHg)', 'tratamiento A', 'tratamiento B', 'mmHg'),
       ('Educación · Métodos', 'el puntaje en una prueba', 'método tradicional', 'método con tutorías', 'puntos'),
       ('Agro · Fertilizantes', 'el rendimiento (qq/ha)', 'fertilizante 1', 'fertilizante 2', 'qq/ha')]


def dif_medias(rng):
    ctx, var, g1, g2, u = rng.choice(DOS)
    n1, n2 = rng.choice([(10, 12), (12, 12), (8, 10), (15, 13)])
    m1 = rng.choice([120, 128, 64, 70, 45])
    m2 = m1 + rng.choice([-6, -4, 3, 5, 8])
    s1, s2 = round(rng.uniform(4, 9), 1), round(rng.uniform(4, 9), 1)
    conf = 0.95
    gl = n1 + n2 - 2
    tv = tq(0.975, gl)
    sp2 = ((n1 - 1) * s1 ** 2 + (n2 - 1) * s2 ** 2) / gl
    ee = (sp2 * (1 / n1 + 1 / n2)) ** 0.5
    d = m1 - m2
    lo, hi = d - tv * ee, d + tv * ee
    enun = (f"Se compara {var} entre dos grupos independientes de poblaciones normales con varianzas iguales: "
            f"{g1} ($n_1={n1}$, $\\bar x_1={t(m1)}$, $s_1={t(s1)}$) y {g2} ($n_2={n2}$, $\\bar x_2={t(m2)}$, $s_2={t(s2)}$).")
    st = [f"$s_p^2=\\dfrac{{{n1 - 1}\\cdot{t(s1)}^2+{n2 - 1}\\cdot{t(s2)}^2}}{{{gl}}}={t(sp2)}$",
          f"$EE=\\sqrt{{s_p^2\\left(\\tfrac{{1}}{{{n1}}}+\\tfrac{{1}}{{{n2}}}\\right)}}={t(ee)}$, $t^{{({gl})}}_{{0{{,}}975}}={t(tv, 3)}$",
          f"$IC=({t(d)})\\mp{t(tv, 3)}\\cdot{t(ee)}={iv(lo, hi)[1:-1]}$"]
    z = 1.96
    malos = [(d - z * ee, d + z * ee), (d - tv * (s1 ** 2 / n1 + s2 ** 2 / n2), d + tv * (s1 ** 2 / n1 + s2 ** 2 / n2)),
             (d - tq(0.975, gl - 1) * ee * 1.3, d + tq(0.975, gl - 1) * ee * 1.3), (-hi, -lo), (d - tv * sp2 ** 0.5, d + tv * sp2 ** 0.5)]
    contiene = lo <= 0 <= hi
    conc = (f"El intervalo {'contiene' if contiene else 'no contiene'} al 0: con 95 % de confianza "
            + ('no hay evidencia de diferencia entre las medias.' if contiene else f"las medias difieren ({'el primer grupo tiene media mayor' if lo > 0 else 'el segundo grupo tiene media mayor'})."))
    return Q('Diferencia de medias (varianzas iguales)', ctx, enun, 'Construya el IC de 95 % para $\\mu_1-\\mu_2$.', alts_iv((lo, hi), malos), st, conc, sub='Dos poblaciones')


def margen(rng):
    ctx, var, u, mu, sg = rng.choice(CTX)
    n = rng.choice([25, 36, 49, 64, 100])
    conf = rng.choice([0.90, 0.95, 0.99])
    z = ZQ[conf]
    v = z * sg / n ** 0.5
    st = [f"$E=z_{{1-\\alpha/2}}\\dfrac{{\\sigma}}{{\\sqrt n}}={t(z, 3)}\\cdot\\dfrac{{{t(sg)}}}{{\\sqrt{{{n}}}}}={t(v)}$", f"La amplitud del intervalo es $2E={t(2 * v)}$."]
    return Q('Margen de error', ctx, f"Se estima la media de {var} con $\\sigma={t(sg)}$ {u} y una muestra de {n}.",
             f"¿Cuál es el margen de error de un IC de {s(100 * conf, 0)} %?", alts(v, [2 * v, z * sg / n, sg / n ** 0.5, ZQ[0.95 if conf != 0.95 else 0.99] * sg / n ** 0.5]),
             st, f"$E={t(v)}$ {u}. Más confianza o menos datos agrandan el margen.", sub='Interpretación')


def interpretar(rng):
    ctx, var, u, mu, sg = rng.choice(CTX)
    lo = round(mu - sg * 0.6, 2)
    hi = round(mu + sg * 0.6, 2)
    ok = f"Si se repitiera el muestreo muchas veces, el 95 % de los intervalos así construidos contendría a la media poblacional; este es uno de ellos"
    malas = [f"La media poblacional está entre {s(lo)} y {s(hi)} con probabilidad 0,95, y cambia de una muestra a otra",
             f"El 95 % de las unidades tiene {var.split('(')[0].replace('el ', '').replace('la ', '').strip()} entre {s(lo)} y {s(hi)}",
             f"El promedio muestral está entre {s(lo)} y {s(hi)} con 95 % de probabilidad"]
    return Q('Interpretación del IC', ctx, f"Con una muestra se obtuvo el IC de 95 % para la media de {var}: $[{t(lo)};\\ {t(hi)}]$ {u}.",
             '¿Cuál es la interpretación correcta?', alts_txt(ok, malas),
             ['La confianza es del método: el parámetro es fijo y lo aleatorio es el intervalo.', 'El IC habla de la media poblacional, no de unidades individuales ni del promedio muestral.'],
             'Se dice «con 95 % de confianza, la media poblacional está entre … y …».', sub='Interpretación')


def decision(rng):
    ctx, var, u, mu, sg = rng.choice(CTX)
    lo, hi = round(mu - sg * 0.4, 2), round(mu + sg * 0.5, 2)
    ref = rng.choice([round(mu - sg * 0.2, 2), round(mu + sg * 0.9, 2), round(mu - sg * 0.7, 2)])
    dentro = lo <= ref <= hi
    ok = (f"No: ${t(ref)}$ está dentro del intervalo, así que es un valor plausible para $\\mu$" if dentro
          else f"Sí: ${t(ref)}$ queda fuera del intervalo, hay evidencia de que $\\mu\\ne {t(ref)}$")
    malas = [(f"Sí: ${t(ref)}$ está dentro del intervalo" if dentro else f"No: ${t(ref)}$ queda fuera, así que es plausible"),
             "No se puede decidir sin hacer un test de hipótesis aparte", "Sí, porque el intervalo no es simétrico"]
    return Q('Decidir con un IC', ctx, f"El IC de 95 % para la media de {var} es $[{t(lo)};\\ {t(hi)}]$ {u}. La norma indica un valor de referencia de ${t(ref)}$.",
             '¿Hay evidencia, al 5 %, de que la media difiere del valor de referencia?', alts_txt(ok, malas),
             ['Un IC de $1-\\alpha$ equivale a un test bilateral de nivel $\\alpha$: se rechaza $H_0:\\mu=\\mu_0$ si $\\mu_0$ queda fuera.'], ok + '.', sub='Interpretación')


def caso_var(rng):
    ctx, var, u, n, s_, conf, a, ql, qu, lo, hi = _var(rng)
    enun = f"Se mide {var} en una muestra de {n} unidades de una población normal, obteniendo $s={t(s_)}$ {u}."
    p1 = P(f"Cuantiles $\\chi^2$ para {s(100 * conf, 0)} % de confianza.", alts_txt(f"$\\chi^2_{{{t(a / 2, 3)};({n - 1})}}={t(ql, 3)}$ y $\\chi^2_{{{t(1 - a / 2, 3)};({n - 1})}}={t(qu, 3)}$",
                                                                                  [f"$\\chi^2_{{{t(a / 2, 3)};({n})}}={t(chiq(a / 2, n), 3)}$ y $\\chi^2_{{{t(1 - a / 2, 3)};({n})}}={t(chiq(1 - a / 2, n), 3)}$",
                                                                                   f"$\\chi^2_{{{t(a, 3)};({n - 1})}}={t(chiq(a, n - 1), 3)}$ y $\\chi^2_{{{t(1 - a, 3)};({n - 1})}}={t(chiq(1 - a, n - 1), 3)}$",
                                                                                   f"$z={t(ZQ[conf], 3)}$ en ambos extremos"]),
           [f"gl $=n-1={n - 1}$; se dejan $\\alpha/2={t(a / 2, 3)}$ en cada cola."], 'Tabla chi-cuadrado con $n-1$ grados de libertad.')
    p2 = P('IC para $\\sigma^2$.', alts_iv((lo, hi), [((n - 1) * s_ ** 2 / ql, (n - 1) * s_ ** 2 / qu), (n * s_ ** 2 / qu, n * s_ ** 2 / ql), ((n - 1) * s_ / qu, (n - 1) * s_ / ql)]),
           [f"$\\left[\\dfrac{{{n - 1}\\cdot{t(s_ * s_)}}}{{{t(qu, 3)}}};\\dfrac{{{n - 1}\\cdot{t(s_ * s_)}}}{{{t(ql, 3)}}}\\right]$"], f"$IC_{{\\sigma^2}}={iv(lo, hi)[1:-1]}$.")
    p3 = P('IC para $\\sigma$.', alts_iv((lo ** 0.5, hi ** 0.5), [(lo, hi), (s_ - 1, s_ + 1), (((n - 1) * s_ ** 2 / qu) ** 0.5 * 0.9, ((n - 1) * s_ ** 2 / ql) ** 0.5 * 0.9)]),
           ['Raíz cuadrada de cada extremo.'], f"$IC_\\sigma={iv(lo ** 0.5, hi ** 0.5)[1:-1]}$.")
    lim = round(s_ * 1.6, 1)
    cumple = hi ** 0.5 < lim
    p4 = P(f"La norma exige $\\sigma<{t(lim)}$ {u}. ¿Qué se concluye?", alts_txt(
        f"{'Se cumple' if cumple else 'No se puede asegurar que se cumpla'}: el extremo superior del IC para $\\sigma$ es ${t(hi ** 0.5)}$",
        [f"{'No se cumple' if cumple else 'Se cumple'}, porque $s={t(s_)}$", 'Se cumple siempre que $s^2$ esté dentro del IC', 'No se puede concluir nada con un intervalo']),
           [f"El IC para $\\sigma$ llega hasta ${t(hi ** 0.5)}$, que es {'menor' if cumple else 'mayor'} que ${t(lim)}$."], 'Se compara la norma con todo el intervalo, no solo con $s$.')
    return CASO('Caso: variabilidad de un proceso', ctx, enun, [p1, p2, p3, p4], sub='Varianza y desviación')


def generar(rng):
    qs = []
    qs += variantes(rng, lambda r: ic_var(r, False), 12)
    qs += variantes(rng, lambda r: ic_var(r, True), 12)
    for fn, n in [(tam_media, 10), (tam_prop, 10), (dif_medias, 10), (margen, 8), (interpretar, 5), (decision, 6)]:
        qs += variantes(rng, fn, n)
    qs += variantes(rng, caso_var, 4)
    return qs
