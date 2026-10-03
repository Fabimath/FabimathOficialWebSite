/* Contenido de "PAES Funciones" (Fabimath).
   Temario oficial PAES M1 Admisión 2027, eje Álgebra y funciones (parte de funciones):
     1. Función lineal y afín (concepto, tablas y gráficos, problemas en diversos contextos).
     2. Función cuadrática (ecuaciones de segundo grado, tablas y gráficos con variación de
        parámetros, vértice, ceros e intersección con los ejes, problemas en diversos contextos).
   Estilo de preguntas tomado de las tres últimas pruebas publicadas por el DEMRE
   (PAES Invierno 2026, PAES Regular 2026 y PAES Invierno 2027), en paes/fuentes/.
   Notación chilena: coma decimal, punto de miles; montos en pesos dentro de <span class="peso">.
   Se carga después de paes_data.js: reutiliza r (String.raw) y SLIDE_FIGS.
   Figuras de funciones: { type: 'plot', x: [min, max, paso], y: [min, max, paso], fns, marks, vline } (fig() en paes.html).
   Cada pregunta: enun (HTML + $latex$), fig opcional, alts (4), ok (índice correcto), sol, conc. */

const TOPICS_FUN = [

/* =====================================================================
   UNIDAD 1 · FUNCIÓN LINEAL Y AFÍN
   ===================================================================== */
{
  id: 'funcion_concepto', unit: 'Unidad 1 · Función lineal y afín', icon: '🔣',
  title: 'Concepto de función',
  desc: 'Qué es una función, cómo se evalúa, imagen y preimagen, y cómo leerla en una tabla o en un gráfico.',
  slides: [
    { t: '¿Qué es una función?', b: r`
      <div class="cols"><div>
      <p>Una <b>función</b> $f$ es una regla que a cada valor de entrada $x$ le asigna <b>un único</b> valor de salida $f(x)$.</p>
      <p>$x$ es la <b>variable independiente</b> y $y = f(x)$ la <b>dependiente</b>: depende de lo que valga $x$.</p>
      <p>Ejemplo: si el kilo de pan cuesta <span class="peso">$2000</span>, el precio de $x$ kilos es $f(x) = 2000x$.</p>
      </div><div>
      <div class="box"><b>Un único valor</b> A cada entrada le corresponde una sola salida. Dos entradas distintas sí pueden tener la misma salida: $(1, 5)$ y $(2, 5)$ está bien; $(1, 5)$ y $(1, 7)$ no es función.</div>
      <div class="box alert"><b>En la PAES</b> Todas las funciones tienen como dominio los números reales, salvo que se diga otra cosa.</div>
      </div></div>` },
    { t: 'Evaluar una función', b: r`
      <div class="cols"><div>
      <p>Evaluar es <b>reemplazar</b> $x$ por un número, siempre <b>entre paréntesis</b>.</p>
      $$f(x) = 2x^2 - 7x + 1$$
      $$f(-3) = 2(-3)^2 - 7(-3) + 1 = 18 + 21 + 1 = 40$$
      </div><div>
      <div class="box alert"><b>Dos trampas</b><br>· $(-3)^2 = 9$, pero $-3^2 = -9$: sin paréntesis el signo queda fuera de la potencia.<br>· $-7\cdot(-3) = +21$: menos por menos es más.</div>
      <div class="box">$f(2) + f(3)$ no es lo mismo que $f(5)$: se evalúa cada uno por separado y después se suma.</div>
      </div></div>` },
    { t: 'Imagen y preimagen', b: r`
      <div class="cols"><div>
      <p>Si $f(a) = b$, decimos que $b$ es la <b>imagen</b> de $a$ y que $a$ es una <b>preimagen</b> de $b$.</p>
      <p><b>Imagen</b>: me dan $x$, calculo $f(x)$.<br><b>Preimagen</b>: me dan $f(x)$, despejo $x$ en una ecuación.</p>
      </div><div>
      <div class="box"><b>Ejemplo</b> $g(x) = 8x - 5$. ¿Para qué $x$ vale $g(x) = 35$?
      $$8x - 5 = 35 \;\Rightarrow\; 8x = 40 \;\Rightarrow\; x = 5$$</div>
      <div class="box alert"><b>Puede haber varias</b> Con $h(x) = x^2$, la imagen de $3$ y de $-3$ es $9$: el $9$ tiene dos preimágenes.</div>
      </div></div>` },
    { t: 'Tablas y gráficos', b: r`
      <div class="cols"><div>
      <p>Cada par $(x, f(x))$ es un <b>punto</b> del gráfico. Para leer $f(a)$: subo o bajo desde $x = a$ hasta la curva y miro la altura.</p>
      <p>Para resolver $f(x) = b$: busco en qué puntos la curva tiene altura $b$ y leo sus $x$.</p>
      <div class="box"><b>¿Es función?</b> Una recta vertical no puede cortar el gráfico en más de un punto.</div>
      </div><div>
      <div class="qfig">${''}</div>
      </div></div>` },
    { t: 'Resumen', b: r`
      <table><thead><tr><th>Me piden</th><th>Hago</th></tr></thead><tbody>
      <tr><td>$f(a)$, la imagen de $a$</td><td>reemplazo $x = a$ con paréntesis</td></tr>
      <tr><td>$x$ tal que $f(x) = b$</td><td>resuelvo la ecuación $f(x) = b$</td></tr>
      <tr><td>$f(a)$ en un gráfico</td><td>altura de la curva en $x = a$</td></tr>
      <tr><td>Fórmula a partir de una tabla</td><td>pruebo la fórmula con <b>todas</b> las filas, no solo con una</td></tr></tbody></table>
      <div class="box" style="margin-top:14px"><b>Método PAES</b> Lee qué te dan: si es la $x$, evalúa; si es el resultado, iguala y despeja. Comprueba siempre reemplazando tu respuesta.</div>` }
  ],
  example: {
    src: 'PAES Invierno 2026',
    enun: r`<p>Considera la función $g$ definida por $g(x) = 8x - 5$, con dominio el conjunto de los números reales.</p><p>Si $g(x) = 35$, ¿cuál es el valor de $x$?</p>`,
    alts: [r`$\dfrac{15}{4}$`, r`$5$`, r`$240$`, r`$275$`], ok: 1,
    sol: r`<p>Nos dan el resultado, así que se iguala y se despeja: $8x - 5 = 35 \Rightarrow 8x = 40 \Rightarrow x = 5$.</p><p>Comprobación: $g(5) = 40 - 5 = 35$. ✔</p><p>$\dfrac{15}{4}$ resta 5 en vez de sumarlo ($8x = 30$); 275 es $g(35)$, evalúa en vez de despejar; 240 es $8\cdot 30$.</p>`,
    conc: 'Si te dan f(x), iguala y despeja x; si te dan x, evalúa.'
  },
  bank: [
    { enun: r`<p>Considera la función $f$ definida por $f(x) = 2x^2 - 7x + 1$.</p><p>¿Cuál es el valor de $f(-3)$?</p>`, src: 'PAES Invierno 2027, adaptada',
      alts: [r`$40$`, r`$4$`, r`$-2$`, r`$58$`], ok: 0,
      sol: r`<p>$f(-3) = 2(-3)^2 - 7(-3) + 1 = 2\cdot 9 + 21 + 1 = 40$.</p><p>4 usa $-3^2 = -9$; $-2$ calcula $-7\cdot(-3)$ como $-21$; 58 eleva $(2\cdot(-3))^2 = 36$, como si el 2 estuviera dentro del cuadrado.</p>`, conc: 'Reemplaza siempre con paréntesis: (−3)² = 9.' },
    { enun: r`<p>Sea $f(x) = 3x - 4$. ¿Cuál es el valor de $f(2) + f(-1)$?</p>`,
      alts: [r`$-5$`, r`$-1$`, r`$9$`, r`$3$`], ok: 0,
      sol: r`<p>$f(2) = 6 - 4 = 2$ y $f(-1) = -3 - 4 = -7$. Suma: $2 + (-7) = -5$.</p><p>$-1$ es $f(1)$: suma las entradas antes de evaluar; 9 toma $f(-1) = 7$; 3 olvida los dos $-4$.</p>`, conc: 'f(a) + f(b) ≠ f(a + b): evalúa cada uno por separado.' },
    { enun: r`<p>Considera la función $h(x) = x^2 - 5$.</p><p>¿Cuáles son todas las preimágenes de $4$?</p>`,
      alts: [r`Solo $3$`, r`$3$ y $-3$`, r`$11$`, r`$-1$`], ok: 1,
      sol: r`<p>Se busca $x$ con $h(x) = 4$: $x^2 - 5 = 4 \Rightarrow x^2 = 9 \Rightarrow x = 3$ o $x = -3$.</p><p>"Solo 3" olvida la raíz negativa; 11 es $h(4)$, la imagen de 4; $-1$ es $4 - 5$.</p>`, conc: 'x² = k tiene dos soluciones: √k y −√k.' },
    { enun: r`<p>En la siguiente tabla se muestran algunos valores de una función $f$.</p><p>¿Cuál de las siguientes expresiones puede corresponder a $f(x)$?</p>`,
      fig: { type: 'table', head: ['$x$', '$f(x)$'], rows: [['0', '5'], ['1', '8'], ['2', '11'], ['3', '14']] },
      alts: [r`$f(x) = 5x + 3$`, r`$f(x) = 3x + 5$`, r`$f(x) = x + 5$`, r`$f(x) = 8x$`], ok: 1,
      sol: r`<p>$f(0) = 5$ y cada vez que $x$ sube 1, $f(x)$ sube 3. Con $3x + 5$: $5, 8, 11, 14$. ✔</p><p>$5x + 3$ da $f(0) = 3$; $x + 5$ sirve solo para $x = 0$; $8x$ sirve solo para $x = 1$.</p>`, conc: 'Prueba la fórmula con todas las filas de la tabla.' },
    { enun: r`<p>En el gráfico se representa la función $f$.</p><p>¿Para qué valor de $x$ se cumple que $f(x) = 3$?</p>`,
      fig: { type: 'plot', x: [-2, 4], y: [-3, 6], fns: [{ f: x => 2 * x - 1, lab: 'f', at: [3.3, 5.6] }] },
      alts: [r`$2$`, r`$5$`, r`$3$`, r`$1$`], ok: 0,
      sol: r`<p>Se busca la altura 3 en el eje $Y$ y se baja hasta el eje $X$: la recta pasa por $(2, 3)$, así que $x = 2$.</p><p>5 es $f(3)$: lee al revés; 3 confunde la altura con la $x$; 1 es $f(1)$.</p>`, conc: 'f(x) = b: busca la altura b y lee la x.' },
    { enun: r`<p>¿Cuál de los siguientes conjuntos de pares $(x, y)$ <b>no</b> puede representar una función de $x$?</p>`,
      alts: [r`$\{(1, 2),\ (2, 2),\ (3, 2)\}$`, r`$\{(1, 4),\ (2, 5),\ (1, 6)\}$`, r`$\{(-1, 1),\ (0, 0),\ (1, 1)\}$`, r`$\{(0, 3),\ (5, -3),\ (7, 0)\}$`], ok: 1,
      sol: r`<p>En $\{(1, 4), (2, 5), (1, 6)\}$ la entrada $1$ tiene dos salidas, $4$ y $6$: no es función.</p><p>En los demás cada $x$ aparece una sola vez. Que varias $x$ tengan la misma $y$, como en el primero o en el tercero, sí está permitido.</p>`, conc: 'Función: cada x tiene una sola imagen; una y puede repetirse.' },
    { enun: r`<p>Sea $f(x) = \dfrac{x + 1}{2}$. Si $f(a) = 6$, ¿cuál es el valor de $a$?</p>`,
      alts: [r`$11$`, r`$\dfrac{7}{2}$`, r`$13$`, r`$5$`], ok: 0,
      sol: r`<p>$\dfrac{a + 1}{2} = 6 \Rightarrow a + 1 = 12 \Rightarrow a = 11$.</p><p>$\dfrac{7}{2}$ es $f(6)$, evalúa en vez de despejar; 13 suma 1 en vez de restarlo; 5 es $6 - 1$, olvida el 2.</p>`, conc: 'Despeja deshaciendo las operaciones en orden inverso.' },
    { enun: r`<p>La temperatura del aire, en °C, a $h$ kilómetros de altura sobre cierta ciudad se modela con $T(h) = 20 - 6h$.</p><p>¿Cuál es la temperatura a 2,5 km de altura?</p>`,
      alts: ['5 °C', '35 °C', '14 °C', '17,5 °C'], ok: 0,
      sol: r`<p>$T(2{,}5) = 20 - 6\cdot 2{,}5 = 20 - 15 = 5$ °C.</p><p>35 °C suma en vez de restar; 14 °C resta 6 una sola vez; 17,5 °C resta 2,5 sin multiplicar por 6.</p>`, conc: 'Evaluar en contexto: reemplaza y respeta la prioridad de operaciones.' },
    { enun: r`<p>Considera la función $f(x) = x^2 - 2x$.</p><p>¿Cuál(es) de las siguientes afirmaciones es (son) verdadera(s)?</p><p>I) $f(0) = 0$<br>II) $f(2) = 0$<br>III) $f(-1) = -1$</p>`,
      alts: ['Solo I', 'Solo I y II', 'Solo III', 'I, II y III'], ok: 1,
      sol: r`<p>I) $f(0) = 0 - 0 = 0$. Verdadera.</p><p>II) $f(2) = 4 - 4 = 0$. Verdadera.</p><p>III) $f(-1) = (-1)^2 - 2(-1) = 1 + 2 = 3$. Falsa: $-1$ sale de calcular $-2\cdot(-1)$ como $-2$.</p>`, conc: 'Cuidado con −2·(−1) = +2.' },
    { enun: r`<p>Considera la función $g(x) = -x^2 + 4$. ¿Cuál es el valor de $g(-2)$?</p>`,
      alts: [r`$0$`, r`$8$`, r`$-8$`, r`$4$`], ok: 0,
      sol: r`<p>$g(-2) = -(-2)^2 + 4 = -4 + 4 = 0$. El signo de adelante no está dentro del cuadrado.</p><p>8 calcula $(-(-2))^2 = 4$ y suma; $-8$ además resta el 4; 4 olvida el término $-x^2$.</p>`, conc: '−x² significa −(x²): primero el cuadrado, después el signo.' },
    { enun: r`<p>Sea $f(x) = ax + 3$, con $a$ constante. Si $f(2) = 11$, ¿cuál es el valor de $a$?</p>`,
      alts: [r`$4$`, r`$7$`, r`$8$`, r`$25$`], ok: 0,
      sol: r`<p>$f(2) = 2a + 3 = 11 \Rightarrow 2a = 8 \Rightarrow a = 4$.</p><p>7 suma el 3 en vez de restarlo: $\dfrac{11 + 3}{2}$; 8 es $2a$, falta dividir por 2; 25 es $2\cdot 11 + 3$.</p>`, conc: 'Un dato f(a) = b se traduce en una ecuación.' },
    { enun: r`<p>En la siguiente gráfica se representa la posición de un automóvil, en km, en distintos tiempos, en horas.</p><p>¿Cuánto tiempo estuvo detenido el automóvil?</p>`, src: 'PAES Invierno 2027, adaptada',
      fig: { type: 'plot', x: [0, 4, 0.5], y: [0, 160, 20], xlab: 't (h)', ylab: 'km', fns: [{ pts: [[0, 0], [1, 60], [2.5, 60], [4, 150]] }] },
      alts: ['1 hora', '1,5 horas', '2,5 horas', '4 horas'], ok: 1,
      sol: r`<p>Detenido = la posición no cambia = tramo horizontal. Va desde $t = 1$ hasta $t = 2{,}5$: $2{,}5 - 1 = 1{,}5$ horas.</p><p>1 hora es lo que tarda el primer tramo; 2,5 horas es el instante en que vuelve a moverse; 4 horas es el viaje completo.</p>`, conc: 'Tramo horizontal en un gráfico posición-tiempo = detenido.' }
  ]
},

{
  id: 'lineal_afin', unit: 'Unidad 1 · Función lineal y afín', icon: '📈',
  title: 'Función lineal y afín',
  desc: 'Pendiente, coeficiente de posición, proporcionalidad directa y cómo pasar entre fórmula, tabla y gráfico.',
  slides: [
    { t: 'Lineal y afín', b: r`
      <div class="cols"><div>
      <p><b>Función lineal</b>: $f(x) = mx$. Su gráfico es una recta que pasa por el origen. Es una <b>proporcionalidad directa</b>: $\dfrac{f(x)}{x} = m$ siempre.</p>
      <p><b>Función afín</b>: $f(x) = mx + n$, con $n \neq 0$. Recta que corta al eje $Y$ en $(0, n)$.</p>
      </div><div>
      <div class="box"><b>Nombres</b><br>· $m$: <b>pendiente</b>, cuánto cambia $f(x)$ cuando $x$ aumenta en 1.<br>· $n$: <b>coeficiente de posición</b>, el valor inicial $f(0)$.</div>
      <div class="box alert"><b>Ojo</b> $f(x) = 3x + 2$ no es proporcional: si $x$ se duplica, $f(x)$ no se duplica.</div>
      </div></div>` },
    { t: 'La pendiente', b: r`
      <div class="cols"><div>
      $$m = \frac{y_2 - y_1}{x_2 - x_1}$$
      <p>Entre $(1, 3)$ y $(3, 7)$: $m = \dfrac{7 - 3}{3 - 1} = 2$.</p>
      <p>· $m > 0$: creciente.<br>· $m < 0$: decreciente.<br>· $m = 0$: constante (recta horizontal).</p>
      <p>Mientras mayor es $|m|$, más inclinada es la recta.</p>
      </div><div>
      <div class="qfig">${''}</div>
      </div></div>` },
    { t: 'De la tabla o el gráfico a la fórmula', b: r`
      <div class="cols"><div>
      <p>1. Calcula $m$ con dos puntos.<br>2. Calcula $n$: es $f(0)$, o despeja de $y = mx + n$ con un punto.</p>
      <p>Tabla $(2, 7)$, $(4, 11)$: $m = \dfrac{4}{2} = 2$; $7 = 2\cdot 2 + n \Rightarrow n = 3$. Entonces $f(x) = 2x + 3$.</p>
      </div><div>
      <div class="box"><b>Corte con el eje X</b> Es el cero de la función: $mx + n = 0 \Rightarrow x = -\dfrac{n}{m}$. Con $f(x) = -2x + 6$: $x = 3$, punto $(3, 0)$.</div>
      <div class="box alert"><b>Puntos</b> El corte con $Y$ es $(0, n)$ y el corte con $X$ es $(x, 0)$: no los inviertas.</div>
      </div></div>` },
    { t: 'Variar los parámetros', b: r`
      <div class="cols"><div>
      <p>Si cambia $m$ y $n$ queda igual, la recta <b>gira</b> en torno al punto $(0, n)$.</p>
      <p>Si cambia $n$ y $m$ queda igual, la recta se <b>traslada</b> hacia arriba o hacia abajo.</p>
      </div><div>
      <div class="box"><b>Rectas paralelas</b> Tienen la misma pendiente: $y = 3x - 1$ e $y = 3x + 5$ son paralelas.</div>
      <div class="box">Con $f(x) = mx + n$: si $m < 0$ y $n > 0$, la recta baja y corta al eje $Y$ sobre el origen.</div>
      </div></div>` },
    { t: 'Resumen', b: r`
      <table><thead><tr><th>Idea</th><th>Cómo se ve</th></tr></thead><tbody>
      <tr><td>Lineal $f(x) = mx$</td><td>recta por el origen, proporcionalidad directa</td></tr>
      <tr><td>Afín $f(x) = mx + n$</td><td>recta que corta al eje $Y$ en $(0, n)$</td></tr>
      <tr><td>Pendiente $m$</td><td>$\dfrac{\Delta y}{\Delta x}$; signo = sube o baja</td></tr>
      <tr><td>Cero</td><td>$x = -\dfrac{n}{m}$</td></tr>
      <tr><td>Paralelas</td><td>misma $m$</td></tr></tbody></table>
      <div class="box" style="margin-top:14px"><b>Método PAES</b> En las preguntas con tabla, primero ve si es proporcional (el cociente $y/x$ es constante): entonces es lineal y basta una regla de tres.</div>` }
  ],
  example: {
    src: 'PAES Invierno 2026',
    enun: r`<p>La distancia de reacción es la distancia recorrida por un vehículo desde que el conductor se percata de un obstáculo hasta que comienza a pisar el pedal de freno. La distancia de reacción $f$ y la rapidez del vehículo se relacionan mediante una función de la forma $f(x) = ax$, con $a$ constante.</p><p>En la siguiente tabla se presentan algunos ejemplos.</p><p>¿Cuál es la distancia de reacción de un vehículo que tiene una rapidez de 30 km/h?</p>`,
    fig: { type: 'table', head: ['Rapidez del vehículo', 'Distancia de reacción'], rows: [['110 km/h', '33 m'], ['70 km/h', '21 m']] },
    alts: ['15 m', '10 m', '9 m', '1 m'], ok: 2,
    sol: r`<p>Es lineal, así que $a = \dfrac{f(x)}{x} = \dfrac{33}{110} = \dfrac{21}{70} = 0{,}3$. Entonces $f(30) = 0{,}3\cdot 30 = 9$ m.</p><p>10 m es $\dfrac{30}{3}$, como si $a = \dfrac{1}{3}$; 15 m es la mitad de 30; ninguna de las otras mantiene la razón $0{,}3$ entre distancia y rapidez.</p>`,
    conc: 'Función lineal: a = y/x es constante en toda la tabla.'
  },
  bank: [
    { enun: r`<p>¿Cuál es la pendiente de la recta que pasa por los puntos $(1, 3)$ y $(3, 7)$?</p>`,
      alts: [r`$2$`, r`$\dfrac{1}{2}$`, r`$5$`, r`$4$`], ok: 0,
      sol: r`<p>$m = \dfrac{7 - 3}{3 - 1} = \dfrac{4}{2} = 2$.</p><p>$\dfrac{1}{2}$ invierte el cociente ($\Delta x / \Delta y$); 5 es el promedio de 3 y 7; 4 es solo $\Delta y$.</p>`, conc: 'm = (y₂ − y₁) / (x₂ − x₁): las y arriba.' },
    { enun: r`<p>¿En qué punto la gráfica de $f(x) = -2x + 6$ corta al eje $X$?</p>`,
      alts: [r`$(3, 0)$`, r`$(0, 6)$`, r`$(-3, 0)$`, r`$(6, 0)$`], ok: 0,
      sol: r`<p>Corte con $X$: $f(x) = 0 \Rightarrow -2x + 6 = 0 \Rightarrow x = 3$. Punto $(3, 0)$.</p><p>$(0, 6)$ es el corte con el eje $Y$; $(-3, 0)$ equivoca el signo al despejar; $(6, 0)$ usa $n$ como si fuera el cero.</p>`, conc: 'Corte con X: iguala f(x) a 0.' },
    { enun: r`<p>¿Cuál de las siguientes funciones es <b>lineal</b>?</p>`,
      alts: [r`$f(x) = 3x + 2$`, r`$g(x) = -\dfrac{2}{5}x$`, r`$h(x) = x^2$`, r`$k(x) = 7$`], ok: 1,
      sol: r`<p>Lineal es de la forma $mx$: $g(x) = -\dfrac{2}{5}x$ pasa por el origen.</p><p>$3x + 2$ es afín (no pasa por el origen); $x^2$ es cuadrática; $k(x) = 7$ es constante.</p>`, conc: 'Lineal = mx, sin término independiente.' },
    { enun: r`<p>En el gráfico se representa una función afín $f$.</p><p>¿Cuál es la expresión de $f(x)$?</p>`,
      fig: { type: 'plot', x: [-2, 4], y: [-3, 4], fns: [{ f: x => -x + 2, lab: 'f', at: [-1.6, 3.6] }], marks: [[0, 2], [3, -1]] },
      alts: [r`$f(x) = -x + 2$`, r`$f(x) = x + 2$`, r`$f(x) = 2x - 1$`, r`$f(x) = -2x + 2$`], ok: 0,
      sol: r`<p>Corta al eje $Y$ en $(0, 2)$, así que $n = 2$. Pasa por $(3, -1)$: $m = \dfrac{-1 - 2}{3 - 0} = -1$. Entonces $f(x) = -x + 2$.</p><p>$x + 2$ tiene el signo de la pendiente al revés (sería creciente); $2x - 1$ intercambia $m$ y el corte; $-2x + 2$ da $f(3) = -4$.</p>`, conc: 'n = corte con Y; m con un segundo punto.' },
    { enun: r`<p>La siguiente tabla muestra valores de una función afín $f$.</p><p>¿Cuál es la expresión de $f(x)$?</p>`,
      fig: { type: 'table', head: ['$x$', '$f(x)$'], rows: [['2', '7'], ['4', '11'], ['6', '15']] },
      alts: [r`$f(x) = 3x + 1$`, r`$f(x) = 2x + 3$`, r`$f(x) = x + 5$`, r`$f(x) = 4x - 1$`], ok: 1,
      sol: r`<p>$m = \dfrac{11 - 7}{4 - 2} = 2$ y $7 = 2\cdot 2 + n \Rightarrow n = 3$. Con $2x + 3$: $7, 11, 15$. ✔</p><p>Las otras tres también dan 7 en $x = 2$, pero fallan en $x = 4$: $3x + 1$ da 13, $x + 5$ da 9 y $4x - 1$ da 15.</p>`, conc: 'Un solo punto no basta: comprueba con dos o más.' },
    { enun: r`<p>El peso $p$ de un cuerpo, en newtons, se modela con $p = g\cdot m$, donde $m$ es su masa en kg y $g$ depende del planeta: en Mercurio $g \approx 3{,}7$ y en la Tierra $g \approx 10$.</p><p>¿Cuál de las siguientes afirmaciones sobre los gráficos de $p$ en función de $m$ es verdadera?</p>`, src: 'PAES Invierno 2027, adaptada',
      alts: ['Ambos pasan por el origen y el de la Tierra es más inclinado.', 'Ambos pasan por el origen y el de Mercurio es más inclinado.', 'Son rectas paralelas.', 'El de la Tierra corta al eje del peso en 10.'], ok: 0,
      sol: r`<p>Las dos son lineales ($p = 3{,}7m$ y $p = 10m$): pasan por el origen. La pendiente de la Tierra es mayor, así que su recta es más inclinada.</p><p>Paralelas exigiría la misma pendiente; el corte con el eje del peso es 0 en ambas, no 10.</p>`, conc: 'Más pendiente = recta más inclinada.' },
    { enun: r`<p>El gráfico de $f(x) = mx + n$ es una recta decreciente que corta al eje $Y$ sobre el origen.</p><p>¿Qué se puede afirmar de $m$ y $n$?</p>`,
      alts: [r`$m > 0$ y $n > 0$`, r`$m < 0$ y $n > 0$`, r`$m < 0$ y $n < 0$`, r`$m > 0$ y $n < 0$`], ok: 1,
      sol: r`<p>Decreciente $\Rightarrow m < 0$. Corta al eje $Y$ en $(0, n)$ por encima del origen $\Rightarrow n > 0$.</p>`, conc: 'Signo de m = sube o baja; signo de n = dónde corta al eje Y.' },
    { enun: r`<p>Una función afín cumple $f(0) = 4$ y $f(2) = 10$.</p><p>¿Cuál es el valor de $f(5)$?</p>`,
      alts: [r`$19$`, r`$25$`, r`$20$`, r`$14$`], ok: 0,
      sol: r`<p>$n = f(0) = 4$ y $m = \dfrac{10 - 4}{2} = 3$. Entonces $f(5) = 3\cdot 5 + 4 = 19$.</p><p>25 la trata como proporcional ($\dfrac{10}{2}\cdot 5$); 20 es $4\cdot 5$; 14 suma $10 + 4$.</p>`, conc: 'Afín no es proporcional: no sirve la regla de tres.' },
    { enun: r`<p>En una feria, 4 kg de manzanas cuestan <span class="peso">$6000</span> y el precio es directamente proporcional a la cantidad.</p><p>¿Qué función modela el precio $f(x)$, en pesos, de $x$ kg de manzanas?</p>`,
      alts: [r`$f(x) = 1500x$`, r`$f(x) = 6000x$`, r`$f(x) = 4x + 6000$`, r`$f(x) = \dfrac{x}{1500}$`], ok: 0,
      sol: r`<p>Proporcionalidad directa: $f(x) = ax$ con $a = \dfrac{6000}{4} = 1500$ pesos por kg.</p><p>$6000x$ toma el precio de 4 kg como precio por kg; $4x + 6000$ no es proporcional; $\dfrac{x}{1500}$ invierte la constante.</p>`, conc: 'Proporcional: constante = precio por unidad.' },
    { enun: r`<p>¿Cuál es la ecuación de la recta paralela a $y = 3x - 1$ que pasa por el punto $(0, 5)$?</p>`,
      alts: [r`$y = 3x + 5$`, r`$y = -3x + 5$`, r`$y = \dfrac{1}{3}x + 5$`, r`$y = 5x + 3$`], ok: 0,
      sol: r`<p>Paralela: misma pendiente, $m = 3$. Pasa por $(0, 5)$: $n = 5$. Entonces $y = 3x + 5$.</p><p>$-3$ y $\dfrac{1}{3}$ cambian la pendiente; $5x + 3$ intercambia $m$ y $n$.</p>`, conc: 'Paralelas = misma pendiente.' },
    { enun: r`<p>Considera la función $f(x) = -\dfrac{1}{2}x + 4$.</p><p>¿Cuál(es) de las siguientes afirmaciones es (son) verdadera(s)?</p><p>I) $f$ es decreciente.<br>II) Su gráfica corta al eje $X$ en $(8, 0)$.<br>III) $f(2) = 5$</p>`,
      alts: ['Solo I', 'Solo I y II', 'Solo II y III', 'I, II y III'], ok: 1,
      sol: r`<p>I) $m = -\dfrac{1}{2} < 0$. Verdadera.</p><p>II) $-\dfrac{1}{2}x + 4 = 0 \Rightarrow x = 8$. Verdadera.</p><p>III) $f(2) = -1 + 4 = 3$. Falsa.</p>`, conc: 'Pendiente negativa = decreciente.' },
    { enun: r`<p>En la función $f(x) = mx + n$ se aumenta el valor de $m$ y se mantiene el de $n$, con $m > 0$.</p><p>¿Qué le ocurre a su gráfica?</p>`,
      alts: ['Gira en torno al punto (0, n) y queda más inclinada.', 'Se traslada hacia arriba.', 'Se traslada hacia la derecha.', 'Queda paralela al eje X.'], ok: 0,
      sol: r`<p>$n$ no cambia, así que el corte $(0, n)$ queda fijo. Una pendiente mayor hace la recta más inclinada: gira en torno a ese punto.</p><p>Trasladarse hacia arriba ocurre al cambiar $n$; paralela al eje $X$ sería $m = 0$.</p>`, conc: 'Cambia m: gira. Cambia n: se traslada.' }
  ]
},

{
  id: 'afin_modelos', unit: 'Unidad 1 · Función lineal y afín', icon: '🧾',
  title: 'Modelar con funciones afines',
  desc: 'Cargo fijo más cargo variable, estanques que se vacían, costo, ingreso y ganancia, comparar planes y leer gráficos de situaciones.',
  slides: [
    { t: 'Cargo fijo + cargo variable', b: r`
      <div class="cols"><div>
      $$f(x) = \underbrace{(\text{precio por unidad})}_{m}\cdot x + \underbrace{(\text{cargo fijo})}_{n}$$
      <p>Una imprenta cobra <span class="peso">$115</span> por página más una tarifa fija de <span class="peso">$27.000</span>: $f(x) = 115x + 27.000$.</p>
      </div><div>
      <div class="box alert"><b>Errores típicos</b><br>· $(115 + 27.000)x$: multiplica también lo fijo.<br>· $115 + 27.000x$: intercambia lo fijo con lo variable.</div>
      <div class="box">Pregúntate: ¿qué se paga <b>una vez</b> ($n$) y qué se paga <b>por cada</b> unidad ($m$)?</div>
      </div></div>` },
    { t: 'Cantidades que disminuyen', b: r`
      <div class="cols"><div>
      <p>Un estanque con 720 L se vacía a 3 L por minuto:</p>
      $$f(x) = -3x + 720$$
      <p>La pendiente es negativa porque el agua <b>baja</b>. Se vacía cuando $f(x) = 0$: $x = 240$ minutos.</p>
      </div><div>
      <div class="box"><b>Variación constante en el tiempo</b> Si en 2021 hubo 57,4 y en 2022 hubo 59,4, el aumento es 2 por año. En 2030 (9 años después de 2021): $57{,}4 + 9\cdot 2 = 75{,}4$.</div>
      </div></div>` },
    { t: 'Costo, ingreso y ganancia', b: r`
      <div class="cols"><div>
      $$G(x) = I(x) - C(x)$$
      <p>Ingreso: lo que entra por vender. Costo: lo que se gasta. Ganancia: la diferencia.</p>
      <p>Si $I(x) = 1000x + 600.000$ y $G(x) = 750x + 450.000$, entonces $C(x) = I(x) - G(x) = 250x + 150.000$.</p>
      </div><div>
      <div class="box"><b>Comparar planes</b> Plan A: $10.000 + 20x$. Plan B: $50x$. Se igualan para hallar dónde cuestan lo mismo: $10.000 + 20x = 50x \Rightarrow x \approx 333{,}3$. Después de ese punto conviene A.</div>
      </div></div>` },
    { t: 'Gráficos de situaciones', b: r`
      <div class="cols"><div>
      <p>En un gráfico distancia-tiempo:</p>
      <p>· Tramo <b>horizontal</b>: detenido.<br>· Tramo <b>más inclinado</b>: va más rápido.<br>· La pendiente es la rapidez: $\dfrac{\text{km}}{\text{h}}$.</p>
      </div><div>
      <div class="box">Si después de 4 horas se suma una segunda máquina que pinta igual de rápido, la recta sigue pero con el <b>doble</b> de pendiente.</div>
      </div></div>` },
    { t: 'Resumen', b: r`
      <table><thead><tr><th>Situación</th><th>Modelo</th></tr></thead><tbody>
      <tr><td>Fijo + por unidad</td><td>$f(x) = (\text{por unidad})\,x + \text{fijo}$</td></tr>
      <tr><td>Disminuye a ritmo constante</td><td>$f(x) = \text{inicial} - (\text{ritmo})\,x$</td></tr>
      <tr><td>Ganancia</td><td>$G = I - C$</td></tr>
      <tr><td>¿Cuándo cuestan igual?</td><td>igualar las dos funciones</td></tr></tbody></table>
      <div class="box" style="margin-top:14px"><b>Método PAES</b> Comprueba el modelo con un caso fácil: con $x = 0$ debe dar el valor inicial, y con $x = 1$ debe sumar una vez lo variable.</div>` }
  ],
  example: {
    src: 'PAES Invierno 2027',
    enun: r`<p>Una empresa contrata a una persona para que publique videos mostrando los beneficios de sus productos. La empresa le paga <span class="peso">$150.000</span>, más <span class="peso">$100.000</span> por cada video publicado.</p><p>¿Cuál de las siguientes funciones modela el dinero que recibirá la persona tras publicar $x$ videos para la empresa?</p>`,
    alts: [r`$f(x) = 150.000x + 100.000$`, r`$g(x) = 100.000x + 150.000$`, r`$h(x) = 100.000\cdot(x + 150.000)$`, r`$k(x) = x\cdot(100.000 + 150.000)$`], ok: 1,
    sol: r`<p>Lo que se paga por cada video ($100.000$) multiplica a $x$; lo fijo ($150.000$) se suma una vez: $g(x) = 100.000x + 150.000$.</p><p>Comprobación: sin videos recibe $g(0) = 150.000$. ✔</p><p>$f$ intercambia lo fijo con lo variable; $h$ multiplica el fijo por 100.000; $k$ cobra el fijo por cada video.</p>`,
    conc: 'Variable multiplica a x; fijo se suma una vez.'
  },
  bank: [
    { enun: r`<p>Un estanque contiene 720 litros de agua y, cada vez que se abre la llave, se vacía a razón de 3 litros por minuto.</p><p>¿Cuál de las siguientes funciones modela la cantidad de agua que queda en el estanque, si $x$ son los minutos transcurridos desde que se abre la llave?</p>`, src: 'PAES Regular 2026',
      alts: [r`$f(x) = -3x + 720$`, r`$g(x) = 3x - 720$`, r`$p(x) = \dfrac{x - 720}{3}$`, r`$h(x) = \dfrac{-x + 720}{3}$`], ok: 0,
      sol: r`<p>Parte con 720 y pierde 3 por minuto: $f(x) = 720 - 3x$. Con $x = 0$ da 720. ✔</p><p>$g(0) = -720$, imposible; $p$ y $h$ dividen por 3 en vez de multiplicar: $h(0) = 240$, que son los minutos que tarda en vaciarse, no los litros.</p>`, conc: 'Disminuye: pendiente negativa; f(0) = cantidad inicial.' },
    { enun: r`<p>En el año 2021 se produjeron 57,4 millones de toneladas de basura tecnológica y en el año 2022, 59,4 millones.</p><p>Si el aumento es el mismo cada año, ¿cuántos millones de toneladas se producirían en el año 2030?</p>`, src: 'PAES Invierno 2026',
      alts: ['77,4', '75,4', '73,4', '71,4'], ok: 1,
      sol: r`<p>Aumento anual: $59{,}4 - 57{,}4 = 2$. De 2021 a 2030 hay 9 años: $57{,}4 + 9\cdot 2 = 75{,}4$.</p><p>77,4 cuenta 10 aumentos; 73,4 cuenta 8; 71,4 cuenta 7.</p>`, conc: 'Cuenta bien los períodos: de 2021 a 2030 son 9.' },
    { enun: r`<p>El ingreso y la ganancia de una empresa, en pesos, se modelan según la cantidad $x$ de artículos producidos:</p><p>· Ingreso: $I(x) = 1000x + 600.000$<br>· Ganancia: $G(x) = 750x + 450.000$</p><p>Si $G(x) = I(x) - C(x)$, ¿cuál es la función de costo $C$?</p>`, src: 'PAES Regular 2026',
      alts: [r`$C(x) = 250x + 150.000$`, r`$C(x) = 250x - 150.000$`, r`$C(x) = 1750x - 1.050.000$`, r`$C(x) = 1750x + 1.050.000$`], ok: 0,
      sol: r`<p>$C(x) = I(x) - G(x) = (1000 - 750)x + (600.000 - 450.000) = 250x + 150.000$.</p><p>$250x - 150.000$ resta mal el término constante; las de 1750 suman $I + G$ en vez de restar.</p>`, conc: 'G = I − C ⟹ C = I − G.' },
    { enun: r`<p>Un taxi cobra <span class="peso">$500</span> de bajada de bandera más <span class="peso">$150</span> por cada 200 metros recorridos.</p><p>¿Cuánto cuesta un viaje de 3 km?</p>`,
      alts: ['<span class="peso">$2750</span>', '<span class="peso">$950</span>', '<span class="peso">$2250</span>', '<span class="peso">$2900</span>'], ok: 0,
      sol: r`<p>3 km = 3000 m = $\dfrac{3000}{200} = 15$ tramos. Costo: $500 + 15\cdot 150 = 2750$.</p><p>950 cobra por kilómetro ($3\cdot 150$); 2250 olvida la bajada de bandera; 2900 cuenta 16 tramos.</p>`, conc: 'Pasa a la unidad del cobro antes de multiplicar.' },
    { enun: r`<p>El plan A de un celular cobra <span class="peso">$10.000</span> fijos más <span class="peso">$20</span> por minuto, y el plan B cobra <span class="peso">$50</span> por minuto, sin cargo fijo.</p><p>¿Desde cuántos minutos enteros el plan A es más barato que el B?</p>`,
      alts: ['Desde 334 minutos', 'Desde 200 minutos', 'Desde 500 minutos', 'Desde 143 minutos'], ok: 0,
      sol: r`<p>$10.000 + 20x < 50x \Rightarrow 10.000 < 30x \Rightarrow x > 333{,}3$. El primer entero es 334.</p><p>200 divide 10.000 por 50; 500 lo divide por 20; 143 lo divide por $50 + 20$.</p>`, conc: 'Iguala (o compara) los dos modelos completos.' },
    { enun: r`<p>Una vela de 30 cm se consume a razón de 2 cm por hora.</p><p>¿Después de cuántas horas medirá 12 cm?</p>`,
      alts: ['9 horas', '6 horas', '21 horas', '15 horas'], ok: 0,
      sol: r`<p>$h(t) = 30 - 2t = 12 \Rightarrow 2t = 18 \Rightarrow t = 9$.</p><p>6 horas es $\dfrac{12}{2}$; 21 horas suma $\dfrac{30 + 12}{2}$; 15 horas es lo que tarda en consumirse entera.</p>`, conc: 'Modelo: inicial − ritmo·t; iguala al valor pedido.' },
    { enun: r`<p>El gráfico muestra la distancia, en km, recorrida por un automóvil según el tiempo, en horas.</p><p>¿Cuál de las siguientes afirmaciones es verdadera?</p>`,
      fig: { type: 'plot', x: [0, 5, 1], y: [0, 200, 40], xlab: 't (h)', ylab: 'km', fns: [{ pts: [[0, 0], [2, 120], [3, 120], [5, 200]] }] },
      alts: ['En las primeras 2 horas viajó a 60 km/h.', 'Estuvo detenido 3 horas.', 'Entre las 3 y las 5 horas viajó más rápido que al inicio.', 'Recorrió 320 km en total.'], ok: 0,
      sol: r`<p>Primer tramo: $\dfrac{120}{2} = 60$ km/h. ✔</p><p>Detenido estuvo de 2 a 3 horas: 1 hora. Entre 3 y 5 horas: $\dfrac{200 - 120}{2} = 40$ km/h, más lento. En total recorrió 200 km, no $120 + 200$.</p>`, conc: 'Rapidez = pendiente de cada tramo.' },
    { enun: r`<p>La temperatura en grados Fahrenheit se obtiene de la temperatura en grados Celsius con $F(C) = 1{,}8C + 32$.</p><p>¿A cuántos °F equivalen 25 °C?</p>`,
      alts: ['77 °F', '45 °F', '57 °F', '102,6 °F'], ok: 0,
      sol: r`<p>$F(25) = 1{,}8\cdot 25 + 32 = 45 + 32 = 77$.</p><p>45 olvida sumar 32; 57 olvida multiplicar por 1,8; 102,6 multiplica $1{,}8\cdot(25 + 32)$.</p>`, conc: 'Primero la multiplicación, después la suma.' },
    { enun: r`<p>Para calcular el valor de la estadía en dos estacionamientos se usa $p\cdot(t - 15)$, donde $p$ es la tarifa por minuto y $t$ los minutos de estadía. El estacionamiento R cobra <span class="peso">$16</span> por minuto y el Q, <span class="peso">$30</span> por minuto.</p><p>En una estadía de 55 minutos, ¿cuánto más caro es Q que R?</p>`, src: 'PAES Invierno 2027',
      alts: ['<span class="peso">$1200</span>', '<span class="peso">$770</span>', '<span class="peso">$640</span>', '<span class="peso">$560</span>'], ok: 3,
      sol: r`<p>Minutos cobrados: $55 - 15 = 40$. Diferencia: $(30 - 16)\cdot 40 = 14\cdot 40 = 560$.</p><p>1200 es lo que cobra Q; 640 es lo que cobra R; 770 es $14\cdot 55$, olvida los 15 minutos gratis.</p>`, conc: 'Lee el modelo completo: aquí los primeros 15 minutos no se cobran.' },
    { enun: r`<p>Un gimnasio cobra una matrícula más una mensualidad fija. Por 3 meses se pagan <span class="peso">$55.000</span> en total y por 7 meses, <span class="peso">$115.000</span>.</p><p>¿Cuánto cuesta la matrícula?</p>`,
      alts: ['<span class="peso">$10.000</span>', '<span class="peso">$15.000</span>', '<span class="peso">$18.333</span>', '<span class="peso">$40.000</span>'], ok: 0,
      sol: r`<p>Mensualidad: $m = \dfrac{115.000 - 55.000}{7 - 3} = 15.000$. Matrícula: $55.000 - 3\cdot 15.000 = 10.000$.</p><p>15.000 es la mensualidad; 18.333 divide 55.000 en 3 como si no hubiera matrícula; 40.000 resta una sola mensualidad.</p>`, conc: 'Pendiente = costo por mes; n = lo fijo.' },
    { enun: r`<p>La cantidad de agua, en litros, en un bidón que se está llenando se modela con $f(x) = 0{,}5x + 2$, donde $x$ son los minutos transcurridos.</p><p>¿Qué representa el número 2 en el modelo?</p>`,
      alts: ['Los litros de agua que había en el bidón al comenzar.', 'Los litros que entran por minuto.', 'Los minutos que tarda en llenarse.', 'La capacidad total del bidón.'], ok: 0,
      sol: r`<p>$f(0) = 2$: es la cantidad inicial, el coeficiente de posición.</p><p>Los litros por minuto son la pendiente, 0,5. El modelo no dice cuándo se llena ni la capacidad.</p>`, conc: 'n = valor inicial; m = ritmo de cambio.' },
    { enun: r`<p>El arriendo de una bicicleta cuesta $f(x) = 1000x + 2000$ pesos por $x$ horas. Juan pagó <span class="peso">$9000</span>.</p><p>¿Cuántas horas arrendó la bicicleta?</p>`,
      alts: ['7 horas', '9 horas', '11 horas', '4,5 horas'], ok: 0,
      sol: r`<p>$1000x + 2000 = 9000 \Rightarrow 1000x = 7000 \Rightarrow x = 7$.</p><p>9 horas olvida el cargo fijo; 11 horas lo suma en vez de restarlo; 4,5 horas divide 9000 por 2000.</p>`, conc: 'Resta el cargo fijo antes de dividir.' }
  ]
},

/* =====================================================================
   UNIDAD 2 · FUNCIÓN CUADRÁTICA
   ===================================================================== */
{
  id: 'ec_cuadratica', unit: 'Unidad 2 · Función cuadrática', icon: '🟰',
  title: 'Ecuaciones de segundo grado',
  desc: 'Ecuaciones incompletas, factorización, fórmula general, discriminante y problemas de áreas.',
  slides: [
    { t: 'Ecuaciones incompletas', b: r`
      <div class="cols"><div>
      <p>Forma general: $ax^2 + bx + c = 0$, con $a \neq 0$.</p>
      <p><b>Sin término en $x$</b>: $x^2 = k$ con $k > 0$ tiene <b>dos</b> soluciones, $\pm\sqrt{k}$.<br>$2x^2 = 50 \Rightarrow x^2 = 25 \Rightarrow x = 5$ o $x = -5$.</p>
      </div><div>
      <p><b>Sin término independiente</b>: se factoriza $x$.<br>$x^2 = 3x \Rightarrow x^2 - 3x = 0 \Rightarrow x(x - 3) = 0 \Rightarrow x = 0$ o $x = 3$.</p>
      <div class="box alert"><b>No dividas por x</b> Si divides $x^2 = 3x$ por $x$, pierdes la solución $x = 0$.</div>
      </div></div>` },
    { t: 'Factorizar', b: r`
      <div class="cols"><div>
      <p>$x^2 + bx + c = (x + p)(x + q)$ cuando $p + q = b$ y $p\cdot q = c$.</p>
      <p>$x^2 - 5x + 6$: dos números que sumen $-5$ y multiplicados den $6$: $-2$ y $-3$.</p>
      $$x^2 - 5x + 6 = (x - 2)(x - 3) = 0 \Rightarrow x = 2 \text{ o } x = 3$$
      </div><div>
      <div class="box"><b>Producto cero</b> Si $A\cdot B = 0$, entonces $A = 0$ o $B = 0$. Por eso se iguala a cero antes de factorizar.</div>
      </div></div>` },
    { t: 'Fórmula general y discriminante', b: r`
      <div class="cols"><div>
      $$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$
      <p>$2x^2 - 3x - 2 = 0$: $a = 2$, $b = -3$, $c = -2$.<br>$\Delta = 9 + 16 = 25$, $x = \dfrac{3 \pm 5}{4}$: $x = 2$ o $x = -\dfrac{1}{2}$.</p>
      </div><div>
      <div class="box"><b>Discriminante</b> $\Delta = b^2 - 4ac$<br>· $\Delta > 0$: dos soluciones reales distintas.<br>· $\Delta = 0$: una solución (doble).<br>· $\Delta < 0$: ninguna solución real.</div>
      <div class="box alert"><b>Ojo</b> $-b$ cambia el signo de $b$, y el $2a$ divide a <b>todo</b> el numerador.</div>
      </div></div>` },
    { t: 'Problemas', b: r`
      <div class="cols"><div>
      <p>Un terreno rectangular tiene un largo 5 m mayor que el ancho y un área de 104 m².</p>
      $$x(x + 5) = 104 \Rightarrow x^2 + 5x - 104 = 0 \Rightarrow (x + 13)(x - 8) = 0$$
      <p>$x = 8$ (se descarta $-13$: una medida no es negativa). Largo 13, perímetro $2(8 + 13) = 42$ m.</p>
      </div><div>
      <div class="box"><b>Pasos</b> 1. Nombra la incógnita. 2. Plantea la ecuación. 3. Iguala a cero y resuelve. 4. Descarta lo que no tiene sentido. 5. Responde lo que se pregunta (¿el lado? ¿el perímetro?).</div>
      </div></div>` },
    { t: 'Resumen', b: r`
      <table><thead><tr><th>Ecuación</th><th>Método</th></tr></thead><tbody>
      <tr><td>$ax^2 = k$</td><td>despeja y saca raíz: $\pm$</td></tr>
      <tr><td>$ax^2 + bx = 0$</td><td>factoriza $x$: una solución es $0$</td></tr>
      <tr><td>$x^2 + bx + c = 0$</td><td>busca dos números: suma $b$, producto $c$</td></tr>
      <tr><td>Cualquiera</td><td>fórmula general</td></tr>
      <tr><td>¿Cuántas soluciones?</td><td>signo de $\Delta = b^2 - 4ac$</td></tr></tbody></table>
      <div class="box" style="margin-top:14px"><b>Método PAES</b> En las alternativas suelen estar las dos soluciones, la negativa descartable y el dato intermedio. Lee qué piden al final.</div>` }
  ],
  example: {
    src: 'PAES Regular 2026',
    enun: r`<p>Una persona dispone de un terreno de forma rectangular. Se sabe que el terreno tiene un área de 192 m² y que su ancho mide 4 m menos que su largo.</p><p>¿Cuánto mide el largo del terreno?</p>`,
    alts: ['12 m', '16 m', '20 m', '24 m'], ok: 1,
    sol: r`<p>Largo $L$, ancho $L - 4$: $L(L - 4) = 192 \Rightarrow L^2 - 4L - 192 = 0 \Rightarrow (L - 16)(L + 12) = 0$.</p><p>$L = 16$ (se descarta $-12$). Comprobación: $16\cdot 12 = 192$. ✔</p><p>12 m es el ancho; 20 y 24 no cumplen el área: $20\cdot 16 = 320$ y $24\cdot 20 = 480$.</p>`,
    conc: 'Plantea, iguala a cero, factoriza y descarta lo negativo.'
  },
  bank: [
    { enun: r`<p>¿Cuáles son las soluciones de $x^2 - 7x + 12 = 0$?</p>`,
      alts: [r`$3$ y $4$`, r`$-3$ y $-4$`, r`$2$ y $6$`, r`$1$ y $12$`], ok: 0,
      sol: r`<p>Dos números que sumen $-7$ y multiplicados den $12$: $-3$ y $-4$. Entonces $(x - 3)(x - 4) = 0$: $x = 3$ o $x = 4$.</p><p>$-3$ y $-4$ son los números de la factorización, no las soluciones; $2$ y $6$, y también $1$ y $12$, multiplican 12 pero no suman 7.</p>`, conc: '(x − p)(x − q) = 0 ⟹ x = p o x = q.' },
    { enun: r`<p>¿Cuáles son las soluciones de $2x^2 = 50$?</p>`,
      alts: [r`$5$ y $-5$`, r`Solo $5$`, r`$25$ y $-25$`, r`$10$ y $-10$`], ok: 0,
      sol: r`<p>$x^2 = 25 \Rightarrow x = \pm 5$.</p><p>"Solo 5" olvida la raíz negativa; $\pm 25$ no saca la raíz; $\pm 10$ divide 50 en 5 en vez de sacar la raíz de 25.</p>`, conc: 'x² = k ⟹ x = ±√k.' },
    { enun: r`<p>¿Cuáles son todas las soluciones de $x^2 = 3x$?</p>`,
      alts: [r`$0$ y $3$`, r`Solo $3$`, r`$0$ y $-3$`, r`$3$ y $-3$`], ok: 0,
      sol: r`<p>$x^2 - 3x = 0 \Rightarrow x(x - 3) = 0 \Rightarrow x = 0$ o $x = 3$.</p><p>"Solo 3" divide por $x$ y pierde el 0; $-3$ equivoca el signo; $3$ y $-3$ la trata como $x^2 = 9$.</p>`, conc: 'No dividas por x: factoriza.' },
    { enun: r`<p>¿Para qué valor de $k$ la ecuación $x^2 - 4x + k = 0$ tiene exactamente una solución real?</p>`,
      alts: [r`$4$`, r`$-4$`, r`$16$`, r`$2$`], ok: 0,
      sol: r`<p>Una solución: $\Delta = 0$. $(-4)^2 - 4\cdot 1\cdot k = 16 - 4k = 0 \Rightarrow k = 4$. Queda $(x - 2)^2 = 0$.</p><p>$-4$ equivoca el signo; 16 olvida el $4ac$; 2 es la solución, no $k$.</p>`, conc: 'Una solución ⟺ Δ = b² − 4ac = 0.' },
    { enun: r`<p>La empresa CIELOS construye casas en terrenos rectangulares, en los que siempre el largo mide 5 m más que el ancho.</p><p>Si el área de uno de los terrenos es 104 m², ¿cuál es el perímetro del terreno?</p>`, src: 'PAES Invierno 2026',
      alts: ['62 m', '42 m', '31 m', '21 m'], ok: 1,
      sol: r`<p>$x(x + 5) = 104 \Rightarrow x^2 + 5x - 104 = 0 \Rightarrow (x - 8)(x + 13) = 0$, $x = 8$. Lados 8 y 13: perímetro $2(8 + 13) = 42$ m.</p><p>21 m es el semiperímetro; 62 m toma 13 como ancho (lados 13 y 18); 31 m es la mitad de ese error.</p>`, conc: 'Responde lo que preguntan: aquí el perímetro, no el lado.' },
    { enun: r`<p>¿Cuáles son las soluciones de $3x^2 - 5x - 2 = 0$?</p>`,
      alts: [r`$2$ y $-\dfrac{1}{3}$`, r`$-2$ y $\dfrac{1}{3}$`, r`$4$ y $-\dfrac{2}{3}$`, r`$6$ y $-1$`], ok: 0,
      sol: r`<p>$\Delta = 25 + 24 = 49$. $x = \dfrac{5 \pm 7}{6}$: $x = 2$ o $x = -\dfrac{1}{3}$.</p><p>$-2$ y $\dfrac{1}{3}$ no cambian el signo de $b$; $4$ y $-\dfrac{2}{3}$ dividen por $a$ y no por $2a$; $6$ y $-1$ dividen por 2.</p>`, conc: 'x = (−b ± √Δ) / 2a: ojo con −b y con 2a.' },
    { enun: r`<p>¿Cuántas soluciones reales tiene la ecuación $x^2 + 2x + 5 = 0$?</p>`,
      alts: ['Ninguna', 'Una', 'Dos', 'Infinitas'], ok: 0,
      sol: r`<p>$\Delta = 2^2 - 4\cdot 1\cdot 5 = 4 - 20 = -16 < 0$: ninguna solución real.</p>`, conc: 'Δ < 0 ⟹ sin soluciones reales.' },
    { enun: r`<p>La distancia $d$, en metros, que recorre un móvil que parte del reposo está dada por $d(t) = a\cdot\dfrac{t^2}{2}$, donde $t$ es el tiempo en segundos y $a$ la aceleración en m/s².</p><p>Si el móvil acelera a 10 m/s², ¿cuántos segundos tardará en recorrer 45 metros?</p>`, src: 'PAES Regular 2026',
      alts: ['3', '4,5', '9', r`$\sqrt{4{,}5}$`], ok: 0,
      sol: r`<p>$10\cdot\dfrac{t^2}{2} = 45 \Rightarrow 5t^2 = 45 \Rightarrow t^2 = 9 \Rightarrow t = 3$ (el tiempo no es negativo).</p><p>4,5 es $\dfrac{45}{10}$, sin el cuadrado; 9 es $t^2$, falta la raíz; $\sqrt{4{,}5}$ olvida dividir por 2.</p>`, conc: 'Despeja t² y después saca raíz.' },
    { enun: r`<p>El cuadrado de un número más el doble del mismo número es 48.</p><p>¿Cuáles son los números que cumplen esta condición?</p>`,
      alts: [r`$6$ y $-8$`, r`$-6$ y $8$`, r`Solo $6$`, r`$4$ y $-12$`], ok: 0,
      sol: r`<p>$x^2 + 2x = 48 \Rightarrow x^2 + 2x - 48 = 0 \Rightarrow (x + 8)(x - 6) = 0$: $x = 6$ o $x = -8$.</p><p>$-6$ y $8$ invierten los signos; "solo 6" descarta el negativo, que aquí sí sirve (es un número, no una medida); $4$ y $-12$ multiplican $-48$ pero suman $-8$.</p>`, conc: 'Descarta negativos solo si el contexto lo exige.' },
    { enun: r`<p>El producto de dos números enteros positivos consecutivos es 132.</p><p>¿Cuál es la suma de ambos números?</p>`,
      alts: [r`$23$`, r`$25$`, r`$21$`, r`$66$`], ok: 0,
      sol: r`<p>$x(x + 1) = 132 \Rightarrow x^2 + x - 132 = 0 \Rightarrow (x + 12)(x - 11) = 0$, $x = 11$. Los números son 11 y 12: suman 23.</p><p>25 es $12 + 13$; 21 es $10 + 11$; 66 es la mitad de 132.</p>`, conc: 'Consecutivos: x y x + 1.' },
    { enun: r`<p>Para resolver $x^2 - 6x + 5 = 0$ con la fórmula general se realizó el siguiente procedimiento, cometiéndose un error.</p><p>Paso 1: se identifican $a = 1$, $b = -6$ y $c = 5$.<br>Paso 2: se calcula el discriminante, obteniéndose $36 - 20 = 16$.<br>Paso 3: se reemplaza en la fórmula, obteniéndose $x = \dfrac{-6 \pm 4}{2}$.<br>Paso 4: se calculan las soluciones, obteniéndose $x = -1$ y $x = -5$.</p><p>¿En cuál de los pasos se cometió el error?</p>`,
      alts: ['En el Paso 1', 'En el Paso 2', 'En el Paso 3', 'En el Paso 4'], ok: 2,
      sol: r`<p>Paso 1 y Paso 2 son correctos. En el Paso 3, $-b = -(-6) = 6$, no $-6$: debió quedar $x = \dfrac{6 \pm 4}{2}$.</p><p>El Paso 4 opera bien lo que recibió. Lo correcto es $x = 5$ o $x = 1$; comprobación: $25 - 30 + 5 = 0$. ✔</p>`, conc: '−b con b negativo da positivo.' },
    { enun: r`<p>Una de las soluciones de $x^2 + bx - 10 = 0$ es $x = 2$.</p><p>¿Cuál es la otra solución?</p>`,
      alts: [r`$-5$`, r`$5$`, r`$-2$`, r`$3$`], ok: 0,
      sol: r`<p>Con $x = 2$: $4 + 2b - 10 = 0 \Rightarrow b = 3$. Queda $x^2 + 3x - 10 = (x + 5)(x - 2) = 0$: la otra es $-5$.</p><p>Otra forma: el producto de las soluciones es $c = -10$, así que $2\cdot x_2 = -10$. 5 tiene el signo al revés; 3 es $b$; $-2$ supone que las soluciones son opuestas.</p>`, conc: 'Reemplaza la solución conocida para hallar el coeficiente que falta.' }
  ]
},

{
  id: 'cuadratica_grafico', unit: 'Unidad 2 · Función cuadrática', icon: '⛰️',
  title: 'Gráfico de la función cuadrática',
  desc: 'Concavidad, intersección con los ejes, vértice, eje de simetría y cómo cambia la parábola al variar sus parámetros.',
  slides: [
    { t: 'La parábola', b: r`
      <div class="cols"><div>
      <p>$f(x) = ax^2 + bx + c$, con $a \neq 0$, tiene por gráfico una <b>parábola</b>.</p>
      <p>· $a > 0$: abre hacia <b>arriba</b> (tiene mínimo).<br>· $a < 0$: abre hacia <b>abajo</b> (tiene máximo).<br>· Mayor $|a|$: más angosta.</p>
      <p>Corta al eje $Y$ en $(0, c)$, porque $f(0) = c$.</p>
      </div><div>
      <div class="qfig">${''}</div>
      </div></div>` },
    { t: 'Ceros: cortes con el eje X', b: r`
      <div class="cols"><div>
      <p>Los <b>ceros</b> son las $x$ con $f(x) = 0$: se resuelve $ax^2 + bx + c = 0$.</p>
      <p>$f(x) = x^2 - 6x + 8 = (x - 2)(x - 4)$: corta al eje $X$ en $(2, 0)$ y $(4, 0)$.</p>
      </div><div>
      <div class="box"><b>Según el discriminante</b><br>· $\Delta > 0$: corta al eje $X$ en dos puntos.<br>· $\Delta = 0$: lo toca en uno (el vértice).<br>· $\Delta < 0$: no lo corta.</div>
      </div></div>` },
    { t: 'Vértice y eje de simetría', b: r`
      <div class="cols"><div>
      $$x_v = -\frac{b}{2a} \qquad y_v = f(x_v)$$
      <p>$f(x) = x^2 + 2x - 1$: $x_v = -\dfrac{2}{2} = -1$, $y_v = 1 - 2 - 1 = -2$. Vértice $(-1, -2)$.</p>
      <p>El <b>eje de simetría</b> es la recta $x = x_v$.</p>
      <div class="box">Si $f(p) = f(q)$, el eje está justo al medio: $x_v = \dfrac{p + q}{2}$.</div>
      </div><div>
      <div class="qfig">${''}</div>
      </div></div>` },
    { t: 'Forma canónica y traslaciones', b: r`
      <div class="cols"><div>
      $$f(x) = a(x - h)^2 + k \quad \Rightarrow \quad \text{vértice } (h, k)$$
      <p>$(x - 2)^2 + 1$ tiene vértice $(2, 1)$: es $x^2$ trasladada 2 a la derecha y 1 hacia arriba.</p>
      </div><div>
      <div class="box"><b>Variar parámetros</b><br>· $x^2 + k$: sube ($k > 0$) o baja ($k < 0$).<br>· $(x - h)^2$: se mueve a la derecha si $h > 0$.<br>· $ax^2$: cambia la apertura; con $a < 0$ se da vuelta.</div>
      <div class="box alert"><b>Ojo</b> $(x + 3)^2$ se mueve a la <b>izquierda</b>: $h = -3$.</div>
      </div></div>` },
    { t: 'Resumen', b: r`
      <table><thead><tr><th>Elemento</th><th>Cómo se obtiene</th></tr></thead><tbody>
      <tr><td>Concavidad</td><td>signo de $a$</td></tr>
      <tr><td>Corte con $Y$</td><td>$(0, c)$</td></tr>
      <tr><td>Ceros</td><td>resolver $f(x) = 0$</td></tr>
      <tr><td>Vértice</td><td>$x_v = -\dfrac{b}{2a}$, $y_v = f(x_v)$</td></tr>
      <tr><td>Eje de simetría</td><td>$x = x_v$; también el punto medio entre dos $x$ con igual imagen</td></tr></tbody></table>
      <div class="box" style="margin-top:14px"><b>Método PAES</b> Para reconocer una parábola en un gráfico, revisa en este orden: hacia dónde abre, dónde corta al eje $Y$ y dónde están el vértice o los ceros.</div>` }
  ],
  example: {
    src: 'PAES Regular 2026, adaptada',
    enun: r`<p>Considera la función cuadrática $f$, con dominio el conjunto de los números reales. En la figura se representa su gráfica, con su eje de simetría $x = -1$, y el punto $(2, 7)$.</p><p>¿Para cuál de los siguientes valores de $x$ se tiene que $f(x) = 7$?</p>`,
    fig: { type: 'plot', x: [-6, 4], y: [-3, 9], fns: [{ f: x => x * x + 2 * x - 1, lab: 'f', at: [2.6, 8.6] }], vline: -1, marks: [[2, 7, '(2, 7)']] },
    alts: [r`$4$`, r`$-3$`, r`$-4$`, r`$-5$`], ok: 2,
    sol: r`<p>La parábola es simétrica respecto de $x = -1$. El punto $x = 2$ está 3 unidades a la derecha del eje, así que su gemelo está 3 a la izquierda: $-1 - 3 = -4$. Entonces $f(-4) = 7$.</p><p>4 refleja respecto del eje $Y$ y no del eje de simetría $x = -1$; $-3$ cuenta solo 2 unidades desde el eje; $-5$ cuenta 4.</p>`,
    conc: 'Puntos con igual altura están a la misma distancia del eje de simetría.'
  },
  bank: [
    { enun: r`<p>¿Cuál es el vértice de la parábola $f(x) = -2x^2 + 8x - 3$?</p>`,
      alts: [r`$(2, 5)$`, r`$(-2, -27)$`, r`$(4, -3)$`, r`$(2, 21)$`], ok: 0,
      sol: r`<p>$x_v = -\dfrac{8}{2\cdot(-2)} = 2$ e $y_v = f(2) = -8 + 16 - 3 = 5$.</p><p>$(-2, -27)$ olvida el signo de $a$ en $x_v$; $(4, -3)$ usa $-\dfrac{b}{a}$ sin el 2; $(2, 21)$ calcula $-2\cdot 2^2$ como $+8$.</p>`, conc: 'x_v = −b/(2a) y luego evalúa.' },
    { enun: r`<p>¿En qué valores de $x$ la gráfica de $f(x) = x^2 - 6x + 8$ corta al eje $X$?</p>`,
      alts: [r`$2$ y $4$`, r`$-2$ y $-4$`, r`$0$ y $8$`, r`Solo en $3$`], ok: 0,
      sol: r`<p>$x^2 - 6x + 8 = (x - 2)(x - 4) = 0$: $x = 2$ y $x = 4$.</p><p>$-2$ y $-4$ invierten los signos; 8 es el corte con el eje $Y$; 3 es la $x$ del vértice.</p>`, conc: 'Ceros: resuelve f(x) = 0.' },
    { enun: r`<p>¿Cuál de las siguientes afirmaciones describe la gráfica de $f(x) = -x^2 + 3x + 4$?</p>`,
      alts: ['Abre hacia abajo y corta al eje Y en (0, 4).', 'Abre hacia arriba y corta al eje Y en (0, 4).', 'Abre hacia abajo y corta al eje Y en (0, 3).', 'Abre hacia arriba y corta al eje Y en (4, 0).'], ok: 0,
      sol: r`<p>$a = -1 < 0$: abre hacia abajo. $f(0) = 4$: corta al eje $Y$ en $(0, 4)$.</p><p>3 es $b$, no el corte; $(4, 0)$ está en el eje $X$ (de hecho $f(4) = 0$, es un cero).</p>`, conc: 'Signo de a = apertura; c = corte con Y.' },
    { enun: r`<p>En el gráfico se representa una función cuadrática $f$.</p><p>¿Cuál de las siguientes expresiones corresponde a $f(x)$?</p>`,
      fig: { type: 'plot', x: [-3, 5], y: [-5, 6], fns: [{ f: x => x * x - 2 * x - 3, lab: 'f', at: [4.2, 5.4] }], marks: [[-1, 0], [3, 0], [0, -3], [1, -4]] },
      alts: [r`$f(x) = x^2 - 2x - 3$`, r`$f(x) = -x^2 + 2x + 3$`, r`$f(x) = x^2 + 2x - 3$`, r`$f(x) = (x - 1)^2 + 4$`], ok: 0,
      sol: r`<p>Abre hacia arriba, corta al eje $Y$ en $-3$ y sus ceros son $-1$ y $3$: $f(x) = (x + 1)(x - 3) = x^2 - 2x - 3$.</p><p>$-x^2 + 2x + 3$ abre hacia abajo; $x^2 + 2x - 3$ tiene ceros $1$ y $-3$; $(x - 1)^2 + 4$ tiene vértice $(1, 4)$, no $(1, -4)$.</p>`, conc: 'Con los ceros p y q: f(x) = a(x − p)(x − q).' },
    { enun: r`<p>Considera las funciones $f(x) = x^2$ y $g(x) = x^2 + 3$.</p><p>¿Cómo se obtiene la gráfica de $g$ a partir de la de $f$?</p>`,
      alts: ['Trasladándola 3 unidades hacia arriba.', 'Trasladándola 3 unidades hacia abajo.', 'Trasladándola 3 unidades a la derecha.', 'Trasladándola 3 unidades a la izquierda.'], ok: 0,
      sol: r`<p>Sumar 3 fuera del cuadrado sube cada punto en 3: el vértice pasa de $(0, 0)$ a $(0, 3)$.</p><p>Moverla a la derecha sería $(x - 3)^2$; a la izquierda, $(x + 3)^2$.</p>`, conc: '+k afuera: vertical; dentro del paréntesis: horizontal.' },
    { enun: r`<p>¿Cuál es el vértice de la parábola $h(x) = (x - 2)^2 + 1$?</p>`,
      alts: [r`$(2, 1)$`, r`$(-2, 1)$`, r`$(2, -1)$`, r`$(1, 2)$`], ok: 0,
      sol: r`<p>Forma $a(x - h)^2 + k$ con $h = 2$ y $k = 1$: vértice $(2, 1)$.</p><p>$(-2, 1)$ toma el signo que se ve; $(2, -1)$ cambia el signo de $k$; $(1, 2)$ invierte las coordenadas.</p>`, conc: '(x − h)² + k ⟹ vértice (h, k).' },
    { enun: r`<p>Se compara la gráfica de $f(x) = x^2$ con la de $g(x) = 3x^2$.</p><p>¿Cuál de las siguientes afirmaciones es verdadera?</p>`,
      alts: ['La de g es más angosta y tiene el mismo vértice.', 'La de g es más ancha y tiene el mismo vértice.', 'La de g está trasladada 3 unidades hacia arriba.', 'La de g abre hacia abajo.'], ok: 0,
      sol: r`<p>Con $|a|$ mayor, la parábola crece más rápido: es más angosta. Ambas tienen vértice $(0, 0)$.</p><p>Trasladar hacia arriba sería $x^2 + 3$; abrir hacia abajo requiere $a < 0$.</p>`, conc: 'Mayor |a| = más angosta.' },
    { enun: r`<p>¿Para qué valores de $c$ la gráfica de $f(x) = x^2 - 4x + c$ <b>no</b> corta al eje $X$?</p>`,
      alts: [r`$c > 4$`, r`$c < 4$`, r`$c = 4$`, r`$c > 16$`], ok: 0,
      sol: r`<p>No corta $\Leftrightarrow \Delta < 0$: $16 - 4c < 0 \Rightarrow c > 4$.</p><p>$c < 4$ da dos cortes; $c = 4$ da un solo punto de contacto; $c > 16$ olvida dividir por 4.</p>`, conc: 'No corta al eje X ⟺ Δ < 0.' },
    { enun: r`<p>La siguiente gráfica de una función cuadrática representa la altura, en cm, que alcanza un chorro de agua según la distancia horizontal, en cm, recorrida desde el punto en que emerge.</p><p>¿Cuál de las siguientes afirmaciones es verdadera?</p>`, src: 'PAES Invierno 2026, adaptada',
      fig: { type: 'plot', x: [0, 60, 10], y: [0, 30, 5], xlab: 'distancia', ylab: 'altura', fns: [{ f: x => -x * (x - 60) / 36 }] },
      alts: ['La distancia horizontal máxima recorrida es 25 cm.', 'La altura máxima alcanzada es 60 cm.', 'La altura a los 10 cm horizontales es igual a la altura a los 50 cm.', 'La altura máxima se alcanza a los 60 cm horizontales.'], ok: 2,
      sol: r`<p>La parábola es simétrica respecto de $x = 30$ (punto medio entre los ceros 0 y 60). 10 y 50 están ambos a 20 del eje: tienen la misma altura. ✔</p><p>25 cm es la altura máxima, no la distancia; 60 cm es la distancia máxima, no la altura; la altura máxima se alcanza a los 30 cm.</p>`, conc: 'Eje de simetría = punto medio de los ceros.' },
    { enun: r`<p>¿En qué punto la gráfica de $f(x) = 2x^2 - 3x - 5$ corta al eje $Y$?</p>`,
      alts: [r`$(0, -5)$`, r`$(-5, 0)$`, r`$(0, 2)$`, r`$\left(\dfrac{5}{2}, 0\right)$`], ok: 0,
      sol: r`<p>Corte con $Y$: $x = 0$, $f(0) = -5$. Punto $(0, -5)$.</p><p>$(-5, 0)$ invierte las coordenadas; 2 es $a$; $\left(\dfrac{5}{2}, 0\right)$ es un cero, el corte con el eje $X$.</p>`, conc: 'Corte con Y = (0, c).' },
    { enun: r`<p>Considera la función $f(x) = -(x + 1)^2 + 4$.</p><p>¿Cuál(es) de las siguientes afirmaciones es (son) verdadera(s)?</p><p>I) Su vértice es $(-1, 4)$.<br>II) Su valor máximo es 4.<br>III) Sus ceros son $-3$ y $1$.</p>`,
      alts: ['Solo I', 'Solo I y II', 'Solo II y III', 'I, II y III'], ok: 3,
      sol: r`<p>I) $(x + 1)^2 = (x - (-1))^2$: vértice $(-1, 4)$. Verdadera.</p><p>II) $a = -1 < 0$: abre hacia abajo y el máximo es $y_v = 4$. Verdadera.</p><p>III) $(x + 1)^2 = 4 \Rightarrow x + 1 = \pm 2 \Rightarrow x = 1$ o $x = -3$. Verdadera.</p>`, conc: 'Con a < 0, el vértice es el punto más alto.' },
    { enun: r`<p>Una función cuadrática $f$ cumple que $f(1) = f(7)$.</p><p>¿Cuál es la ecuación de su eje de simetría?</p>`,
      alts: [r`$x = 4$`, r`$x = 3$`, r`$x = 6$`, r`$x = 8$`], ok: 0,
      sol: r`<p>Puntos con igual imagen están a la misma distancia del eje: $x = \dfrac{1 + 7}{2} = 4$.</p><p>3 es la mitad de la distancia; 6 es $7 - 1$; 8 es $1 + 7$, sin dividir.</p>`, conc: 'f(p) = f(q) ⟹ eje x = (p + q)/2.' }
  ]
},

{
  id: 'cuadratica_problemas', unit: 'Unidad 2 · Función cuadrática', icon: '🏀',
  title: 'Problemas con función cuadrática',
  desc: 'Lanzamientos, áreas máximas, ganancias y otros contextos: qué significan el vértice, los ceros y el corte con el eje Y.',
  slides: [
    { t: 'Lanzamientos', b: r`
      <div class="cols"><div>
      <p>La altura de un objeto lanzado hacia arriba se modela con</p>
      $$h(t) = -5t^2 + v_0 t + h_0$$
      <p>· $h(0) = h_0$: altura inicial.<br>· Vértice: altura máxima y el momento en que se alcanza.<br>· Cero positivo: cuándo toca el suelo.</p>
      </div><div>
      <div class="box"><b>Ejemplo</b> $h(t) = -5t^2 + 20t$. $t_v = -\dfrac{20}{2\cdot(-5)} = 2$ s y $h(2) = -20 + 40 = 20$ m. Toca el suelo cuando $-5t(t - 4) = 0$: a los 4 s.</div>
      </div></div>` },
    { t: 'Áreas máximas', b: r`
      <div class="cols"><div>
      <p>Con 40 m de cerca se arma un rectángulo. Si un lado mide $x$, el otro mide $20 - x$:</p>
      $$A(x) = x(20 - x) = -x^2 + 20x$$
      <p>Máximo en $x_v = 10$: un cuadrado de 10 × 10, área 100 m².</p>
      </div><div>
      <div class="box alert"><b>Contra un muro</b> Si un lado no lleva cerca, el perímetro usado es $2x + y$: cambia el modelo y el máximo ya no es un cuadrado.</div>
      </div></div>` },
    { t: 'Ganancias', b: r`
      <div class="cols"><div>
      <p>Si la ganancia es $G(x) = -x^2 + 40x - 300$ (en miles de pesos, $x$ unidades vendidas):</p>
      <p>· Máxima en $x_v = 20$: $G(20) = 100$ mil pesos.<br>· $G(x) = 0$ en $x = 10$ y $x = 30$: entre esos valores hay ganancia positiva.</p>
      </div><div>
      <div class="box"><b>Qué responder</b> "¿Cuántas unidades?" es la $x$ del vértice. "¿Cuál es la ganancia máxima?" es la $y$ del vértice. No confundirlas es medio punto ganado.</div>
      </div></div>` },
    { t: 'Resumen', b: r`
      <table><thead><tr><th>En el contexto</th><th>En la parábola</th></tr></thead><tbody>
      <tr><td>Valor inicial</td><td>$f(0) = c$</td></tr>
      <tr><td>Máximo o mínimo</td><td>$y_v$</td></tr>
      <tr><td>Cuándo o con cuánto se logra</td><td>$x_v = -\dfrac{b}{2a}$</td></tr>
      <tr><td>Llega al suelo, se anula</td><td>ceros: $f(x) = 0$</td></tr></tbody></table>
      <div class="box" style="margin-top:14px"><b>Método PAES</b> Antes de calcular, identifica si te piden una $x$ (tiempo, cantidad, medida) o una $y$ (altura, área, ganancia).</div>` }
  ],
  example: {
    src: 'Ejemplo tipo PAES',
    enun: r`<p>La altura $h$, en metros, de una pelota lanzada verticalmente hacia arriba está dada por $h(t) = -5t^2 + 20t$, con $t$ en segundos.</p><p>¿Cuál es la altura máxima que alcanza la pelota?</p>`,
    alts: ['20 m', '2 m', '40 m', '15 m'], ok: 0,
    sol: r`<p>Vértice: $t_v = -\dfrac{20}{2\cdot(-5)} = 2$ s. Altura: $h(2) = -5\cdot 4 + 40 = 20$ m.</p><p>2 es el tiempo, no la altura; 40 m olvida el término $-5t^2$; 15 m es $h(1)$.</p>`,
    conc: 'Altura máxima = y del vértice.'
  },
  bank: [
    { enun: r`<p>La altura de una pelota, en metros, es $h(t) = -5t^2 + 20t$, con $t$ en segundos.</p><p>¿Después de cuántos segundos vuelve a tocar el suelo?</p>`,
      alts: ['4 s', '2 s', '20 s', '5 s'], ok: 0,
      sol: r`<p>$h(t) = 0 \Rightarrow -5t(t - 4) = 0 \Rightarrow t = 0$ o $t = 4$. En $t = 0$ es el lanzamiento: vuelve al suelo a los 4 s.</p><p>2 s es cuando alcanza la altura máxima; 20 s divide 20 por 1; 5 s confunde el coeficiente.</p>`, conc: 'Toca el suelo: cero positivo de h.' },
    { enun: r`<p>La altura de un objeto lanzado desde un edificio es $h(t) = -5t^2 + 10t + 15$, en metros, con $t$ en segundos.</p><p>¿Desde qué altura se lanzó?</p>`,
      alts: ['15 m', '10 m', '20 m', '3 m'], ok: 0,
      sol: r`<p>Altura inicial: $h(0) = 15$ m.</p><p>10 es la velocidad inicial; 20 m es la altura máxima ($h(1)$); 3 es el tiempo en que llega al suelo.</p>`, conc: 'Valor inicial = f(0) = c.' },
    { enun: r`<p>La altura de un objeto es $h(t) = -5t^2 + 10t + 15$, en metros, con $t$ en segundos.</p><p>¿Cuál es la altura máxima que alcanza?</p>`,
      alts: ['20 m', '15 m', '1 m', '30 m'], ok: 0,
      sol: r`<p>$t_v = -\dfrac{10}{2\cdot(-5)} = 1$ s y $h(1) = -5 + 10 + 15 = 20$ m.</p><p>15 m es la altura inicial; 1 es el tiempo del vértice; 30 m suma $5 + 10 + 15$.</p>`, conc: 'Máximo = h(t_v).' },
    { enun: r`<p>Con 40 m de cerca se quiere cercar un terreno rectangular.</p><p>¿Cuál es el área máxima que se puede cercar?</p>`,
      alts: ['100 m²', '400 m²', '40 m²', '96 m²'], ok: 0,
      sol: r`<p>Lados $x$ y $20 - x$: $A(x) = -x^2 + 20x$, con máximo en $x = 10$. $A(10) = 100$ m².</p><p>400 m² usa lado 20 (todo el perímetro en dos lados); 40 m² confunde área con perímetro; 96 m² ($8\cdot 12$) es posible, pero no es el máximo.</p>`, conc: 'Perímetro fijo, área máxima: cuadrado.' },
    { enun: r`<p>Se quiere cercar un corral rectangular junto a un muro, con 60 m de malla para los otros tres lados. Si los lados perpendiculares al muro miden $x$, el área es $A(x) = x(60 - 2x)$.</p><p>¿Cuál es el área máxima?</p>`,
      alts: ['450 m²', '225 m²', '900 m²', '400 m²'], ok: 0,
      sol: r`<p>$A(x) = -2x^2 + 60x$, $x_v = -\dfrac{60}{2\cdot(-2)} = 15$. Lados 15 y 30: $A = 450$ m².</p><p>225 m² es un cuadrado de 15; 900 m² es un cuadrado de 30; 400 m² ($x = 20$, lados 20 y 20) no es el máximo.</p>`, conc: 'Junto a un muro el máximo no es cuadrado.' },
    { enun: r`<p>La ganancia de una empresa, en miles de pesos, al vender $x$ unidades es $G(x) = -x^2 + 40x - 300$.</p><p>¿Cuántas unidades debe vender para obtener la ganancia máxima?</p>`,
      alts: ['20', '100', '10', '40'], ok: 0,
      sol: r`<p>$x_v = -\dfrac{40}{2\cdot(-1)} = 20$ unidades.</p><p>100 es la ganancia máxima, $G(20)$; 10 es un cero; 40 es $-\dfrac{b}{a}$, sin el 2.</p>`, conc: '¿Cuántas unidades? = x del vértice.' },
    { enun: r`<p>La ganancia de una empresa, en miles de pesos, al vender $x$ unidades es $G(x) = -x^2 + 40x - 300$.</p><p>¿Para qué cantidades de unidades vendidas la ganancia es positiva?</p>`,
      alts: ['Entre 10 y 30 unidades, sin incluirlas.', 'Menos de 10 unidades.', 'Más de 30 unidades.', 'Solo con 20 unidades.'], ok: 0,
      sol: r`<p>$G(x) = 0 \Rightarrow x^2 - 40x + 300 = 0 \Rightarrow (x - 10)(x - 30) = 0$. Como la parábola abre hacia abajo, está sobre el eje entre los ceros: $10 < x < 30$.</p><p>Fuera de ese intervalo la ganancia es negativa; con 20 unidades es máxima, pero no es la única positiva.</p>`, conc: 'a < 0: positiva entre los ceros.' },
    { enun: r`<p>La trayectoria de un chorro de agua se modela con $h(x) = -0{,}1x^2 + 2x$, donde $x$ es la distancia horizontal y $h$ la altura, ambas en metros.</p><p>¿A qué distancia horizontal cae el agua al suelo?</p>`,
      alts: ['20 m', '10 m', '2 m', '40 m'], ok: 0,
      sol: r`<p>$h(x) = 0 \Rightarrow x(-0{,}1x + 2) = 0 \Rightarrow x = 0$ o $x = 20$. Cae a los 20 m.</p><p>10 m es donde alcanza la altura máxima; 2 es el coeficiente $b$; 40 m duplica el resultado.</p>`, conc: 'Alcance = cero distinto de 0.' },
    { enun: r`<p>El área de un cuadrado de lado $\ell$ es $A(\ell) = \ell^2$.</p><p>Si el lado se triplica, ¿qué le ocurre al área?</p>`,
      alts: ['Se multiplica por 9.', 'Se multiplica por 3.', 'Se multiplica por 6.', 'Se multiplica por 27.'], ok: 0,
      sol: r`<p>$A(3\ell) = (3\ell)^2 = 9\ell^2$: se multiplica por 9.</p><p>Por 3 supone que es lineal; por 6 multiplica $3\cdot 2$; por 27 es lo que pasa con el volumen de un cubo.</p>`, conc: 'Cuadrática: si x se multiplica por k, f se multiplica por k².' },
    { enun: r`<p>La distancia de frenado de un auto, en metros, es aproximadamente $d(v) = \dfrac{v^2}{100}$, con $v$ en km/h.</p><p>¿Cuál es la distancia de frenado a 80 km/h?</p>`,
      alts: ['64 m', '0,8 m', '6,4 m', '160 m'], ok: 0,
      sol: r`<p>$d(80) = \dfrac{6400}{100} = 64$ m.</p><p>0,8 m olvida el cuadrado; 6,4 m divide por 1000; 160 m es $2\cdot 80$.</p>`, conc: 'Evalúa primero la potencia.' },
    { enun: r`<p>Un objeto se deja caer desde 80 m de altura. Su altura es $h(t) = 80 - 5t^2$, con $t$ en segundos.</p><p>¿Cuánto tarda en llegar al suelo?</p>`,
      alts: ['4 s', '16 s', '8 s', '15 s'], ok: 0,
      sol: r`<p>$80 - 5t^2 = 0 \Rightarrow t^2 = 16 \Rightarrow t = 4$ (el tiempo es positivo).</p><p>16 s es $t^2$, falta la raíz; 8 s divide 80 por 10; 15 s resta 5 y divide por 5.</p>`, conc: 'Despeja t² y saca raíz positiva.' },
    { enun: r`<p>En una reunión, cada persona saluda una vez a cada una de las demás. Con $n$ personas, la cantidad de saludos es $S(n) = \dfrac{n(n - 1)}{2}$.</p><p>Si hubo 45 saludos, ¿cuántas personas había?</p>`,
      alts: ['10', '9', '15', '90'], ok: 0,
      sol: r`<p>$\dfrac{n(n - 1)}{2} = 45 \Rightarrow n^2 - n - 90 = 0 \Rightarrow (n - 10)(n + 9) = 0$, $n = 10$.</p><p>9 es $n - 1$; 15 es $\dfrac{45}{3}$; 90 es $n(n - 1)$, el doble de los saludos.</p>`, conc: 'Plantea la ecuación cuadrática y descarta la solución negativa.' }
  ]
}
];

/* Figuras de las diapositivas de funciones */
Object.assign(SLIDE_FIGS, {
  funcion_concepto: { 3: { type: 'plot', x: [-3, 3], y: [-1, 9], fns: [{ f: x => x * x, lab: 'f(x) = x²', at: [1.1, 8.4] }], marks: [[2, 4, '(2, 4)'], [-2, 4, '(−2, 4)']] } },
  lineal_afin: { 1: { type: 'plot', x: [-3, 3], y: [-4, 6], fns: [{ f: x => 2 * x, lab: 'm = 2', at: [1.7, 5.4] }, { f: x => -x + 1, lab: 'm = −1', at: [-2.9, 5.4] }, { f: () => 3, lab: 'm = 0', at: [1.9, 3.5] }] } },
  cuadratica_grafico: {
    0: { type: 'plot', x: [-3, 3], y: [-5, 9], fns: [{ f: x => x * x, lab: 'x²', at: [2.4, 4.6] }, { f: x => 3 * x * x, lab: '3x²', at: [0.9, 8.4] }, { f: x => -x * x + 4, lab: '−x² + 4', at: [-2.9, -3.6] }] },
    2: { type: 'plot', x: [-5, 3], y: [-3, 7], fns: [{ f: x => x * x + 2 * x - 1 }], vline: -1, marks: [[-1, -2, 'vértice'], [1, 2], [-3, 2]] }
  }
});
