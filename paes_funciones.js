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
  desc: 'Paso a paso: qué es una ecuación cuadrática, los casos incompletos, factorizar, fórmula general, discriminante y problemas de áreas.',
  slides: [
    { t: '¿Qué es una ecuación de segundo grado?', b: r`
      <div class="cols"><div>
      <p>Es una ecuación donde la incógnita aparece <b>al cuadrado</b> ($x^2$) y no hay potencias mayores. Siempre se puede ordenar así:</p>
      $$ax^2 + bx + c = 0, \quad a \neq 0$$
      <p>· $a$ es el número que acompaña a $x^2$.<br>· $b$ es el número que acompaña a $x$.<br>· $c$ es el número solo, sin $x$.</p>
      <p><b>Ejemplo</b> En $2x^2 - 3x - 2 = 0$: $a = 2$, $b = -3$, $c = -2$. El signo va pegado al número: si hay un menos, el número es negativo.</p>
      </div><div>
      <div class="box"><b>¿Qué es una solución?</b> Un número que, al reemplazarlo en lugar de $x$, deja la igualdad en $0 = 0$.<br>Con $x^2 - 5x + 6 = 0$ y $x = 2$: $4 - 10 + 6 = 0$. ✔ Entonces $2$ es solución.</div>
      <div class="box"><b>¿Cuántas tiene?</b> Normalmente <b>dos</b>, a veces una y a veces ninguna. Por eso, cuando encuentres una, sigue buscando la otra.</div>
      <div class="box alert"><b>Primer paso siempre</b> Deja todo a un lado del igual y un $0$ al otro. Por ejemplo, $x^2 = 3x$ se escribe $x^2 - 3x = 0$.</div>
      </div></div>` },
    { t: 'Caso 1: falta el término con x', b: r`
      <div class="cols"><div>
      <p>Son ecuaciones como $2x^2 = 50$: solo hay $x^2$ y números. Se resuelven <b>despejando</b>.</p>
      <p><b>Paso 1.</b> Deja $x^2$ solo. Aquí el 2 multiplica, así que pasa dividiendo:<br>$x^2 = \dfrac{50}{2} = 25$.</p>
      <p><b>Paso 2.</b> Pregúntate: ¿qué número al cuadrado da 25? Hay <b>dos</b>: $5$ y $-5$, porque $5^2 = 25$ y $(-5)^2 = 25$.</p>
      <p><b>Paso 3.</b> Respuesta: $x = 5$ o $x = -5$. Se escribe corto $x = \pm 5$.</p>
      </div><div>
      <div class="box alert"><b>El error más común</b> Quedarse solo con el $5$ positivo. Al sacar raíz en una ecuación siempre aparecen el $+$ y el $-$.</div>
      <div class="box"><b>Casos especiales</b><br>· $x^2 = 0$: una sola solución, $x = 0$.<br>· $x^2 = -9$: ninguna solución real, porque ningún número al cuadrado da negativo.</div>
      </div></div>` },
    { t: 'Caso 2: falta el número solo', b: r`
      <div class="cols"><div>
      <p>Son ecuaciones como $x^2 = 3x$: todos los términos tienen $x$. Se resuelven <b>sacando $x$ como factor común</b>.</p>
      <p><b>Paso 1.</b> Pasa todo a un lado: $x^2 - 3x = 0$.</p>
      <p><b>Paso 2.</b> La $x$ está en los dos términos, así que la sacas afuera: $x(x - 3) = 0$. Comprueba multiplicando: $x\cdot x - x\cdot 3 = x^2 - 3x$. ✔</p>
      <p><b>Paso 3.</b> Una multiplicación da cero solo si uno de los factores es cero: $x = 0$ o $x - 3 = 0$, es decir, $x = 3$.</p>
      </div><div>
      <div class="box alert"><b>No dividas por x</b> Si divides $x^2 = 3x$ por $x$ te queda $x = 3$ y pierdes la solución $x = 0$. En este caso una solución es <b>siempre</b> $0$.</div>
      <div class="box"><b>Regla del producto cero</b> Si $A\cdot B = 0$, entonces $A = 0$ o $B = 0$. Por eso hay que tener un $0$ al otro lado antes de factorizar.</div>
      </div></div>` },
    { t: 'Caso 3: factorizar buscando dos números', b: r`
      <div class="cols"><div>
      <p>Sirve cuando $a = 1$, como en $x^2 - 5x + 6 = 0$.</p>
      <p><b>Paso 1.</b> Busca dos números que <b>multiplicados</b> den $c = 6$ y <b>sumados</b> den $b = -5$.</p>
      <p><b>Paso 2.</b> Prueba parejas que multiplicadas den 6:<br>$1$ y $6$ suman $7$; $2$ y $3$ suman $5$; $-1$ y $-6$ suman $-7$; $-2$ y $-3$ suman $-5$. ✔</p>
      <p><b>Paso 3.</b> Escribe la factorización con esos números: $(x - 2)(x - 3) = 0$.</p>
      <p><b>Paso 4.</b> Iguala cada paréntesis a cero: $x - 2 = 0 \Rightarrow x = 2$ y $x - 3 = 0 \Rightarrow x = 3$.</p>
      </div><div>
      <div class="box"><b>Truco de los signos</b><br>· Si $c$ es positivo, los dos números tienen el <b>mismo</b> signo, el de $b$.<br>· Si $c$ es negativo, tienen signos <b>distintos</b> y el más grande lleva el signo de $b$.</div>
      <div class="box alert"><b>Ojo con el signo final</b> Los números de la factorización fueron $-2$ y $-3$, pero las soluciones son $2$ y $3$: el signo se da vuelta al despejar.</div>
      <div class="box"><b>Comprueba</b> $x = 3$: $9 - 15 + 6 = 0$. ✔</div>
      </div></div>` },
    { t: 'Caso 4: la fórmula general, que sirve siempre', b: r`
      <div class="cols"><div>
      $$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$
      <p>Ejemplo: $2x^2 - 3x - 2 = 0$.</p>
      <p><b>Paso 1.</b> Anota los coeficientes con su signo: $a = 2$, $b = -3$, $c = -2$.</p>
      <p><b>Paso 2.</b> Calcula lo de adentro de la raíz, el <b>discriminante</b>:<br>$\Delta = b^2 - 4ac = (-3)^2 - 4\cdot 2\cdot(-2) = 9 + 16 = 25$.</p>
      <p><b>Paso 3.</b> Saca la raíz: $\sqrt{25} = 5$.</p>
      <p><b>Paso 4.</b> Reemplaza: $-b = -(-3) = 3$ y $2a = 4$, así que $x = \dfrac{3 \pm 5}{4}$.</p>
      <p><b>Paso 5.</b> Separa en dos cuentas: con $+$, $\dfrac{3 + 5}{4} = 2$; con $-$, $\dfrac{3 - 5}{4} = -\dfrac{1}{2}$.</p>
      </div><div>
      <div class="box alert"><b>Tres trampas</b><br>· $-b$ cambia el signo de $b$: si $b = -3$, entonces $-b = +3$.<br>· Los negativos van entre paréntesis: $(-3)^2 = 9$, no $-9$.<br>· El $2a$ divide a <b>todo</b> el numerador, no solo a la raíz.</div>
      <div class="box"><b>¿Cuándo usarla?</b> Cuando no encuentras rápido los dos números, o cuando $a$ no es 1. Es más larga, pero nunca falla.</div>
      </div></div>` },
    { t: 'El discriminante: ¿cuántas soluciones hay?', b: r`
      <div class="cols"><div>
      <p>Sin resolver toda la ecuación, el número $\Delta = b^2 - 4ac$ te dice cuántas soluciones tiene:</p>
      <p>· $\Delta > 0$: <b>dos</b> soluciones distintas (la raíz da un número y el $\pm$ abre dos caminos).<br>· $\Delta = 0$: <b>una</b> solución (sumar o restar 0 da lo mismo).<br>· $\Delta < 0$: <b>ninguna</b> solución real (no existe la raíz de un negativo).</p>
      </div><div>
      <div class="box"><b>Ejemplo con Δ = 0</b> $x^2 - 4x + 4 = 0$: $\Delta = 16 - 16 = 0$. Una sola solución, $x = 2$, porque $x^2 - 4x + 4 = (x - 2)^2$.</div>
      <div class="box"><b>Ejemplo con Δ &lt; 0</b> $x^2 + 2x + 5 = 0$: $\Delta = 4 - 20 = -16$. No tiene soluciones reales.</div>
      </div></div>` },
    { t: 'Problemas con enunciado', b: r`
      <div class="cols"><div>
      <p>Un terreno rectangular tiene un largo 5 m mayor que el ancho y un área de 104 m².</p>
      <p><b>Paso 1. Nombra la incógnita.</b> Ancho $= x$. Como el largo mide 5 más, largo $= x + 5$.</p>
      <p><b>Paso 2. Plantea la ecuación.</b> Área = largo · ancho: $x(x + 5) = 104$.</p>
      <p><b>Paso 3. Iguala a cero.</b> $x^2 + 5x - 104 = 0$.</p>
      <p><b>Paso 4. Resuelve.</b> Dos números que multiplicados den $-104$ y sumados $5$: $13$ y $-8$. Queda $(x + 13)(x - 8) = 0$, así que $x = -13$ o $x = 8$.</p>
      <p><b>Paso 5. Descarta.</b> Un lado no puede medir $-13$: el ancho es $8$ y el largo $13$.</p>
      <p><b>Paso 6. Responde lo pedido.</b> Si piden el perímetro: $2\cdot 8 + 2\cdot 13 = 42$ m.</p>
      </div><div>
      <div class="box"><b>Traducciones útiles</b><br>· "5 más que $x$": $x + 5$.<br>· "4 menos que $L$": $L - 4$.<br>· "el doble de $x$": $2x$.<br>· "el cuadrado de $x$": $x^2$.<br>· "dos números consecutivos": $x$ y $x + 1$.</div>
      <div class="box alert"><b>Descarta con criterio</b> Una medida o un tiempo no pueden ser negativos. Pero si la pregunta es por "un número", el negativo sí puede servir.</div>
      </div></div>` },
    { t: 'Resumen', b: r`
      <table><thead><tr><th>Si la ecuación se ve así</th><th>Haz esto</th></tr></thead><tbody>
      <tr><td>$ax^2 = k$ (sin término con $x$)</td><td>despeja $x^2$ y saca raíz: $\pm$</td></tr>
      <tr><td>$ax^2 + bx = 0$ (sin número solo)</td><td>saca $x$ factor común: una solución es $0$</td></tr>
      <tr><td>$x^2 + bx + c = 0$</td><td>busca dos números: producto $c$, suma $b$</td></tr>
      <tr><td>Cualquier otra</td><td>fórmula general</td></tr>
      <tr><td>¿Cuántas soluciones?</td><td>signo de $\Delta = b^2 - 4ac$</td></tr></tbody></table>
      <div class="box" style="margin-top:14px"><b>Método PAES</b> 1. Iguala a cero. 2. Elige el caso. 3. Resuelve. 4. Comprueba reemplazando. 5. Lee de nuevo qué te piden: en las alternativas suelen estar la solución negativa descartable y los datos intermedios.</div>` }
  ],
  example: {
    src: 'PAES Regular 2026',
    enun: r`<p>Una persona dispone de un terreno de forma rectangular. Se sabe que el terreno tiene un área de 192 m² y que su ancho mide 4 m menos que su largo.</p><p>¿Cuánto mide el largo del terreno?</p>`,
    alts: ['12 m', '16 m', '20 m', '24 m'], ok: 1,
    sol: r`<p><b>Paso 1. Nombra la incógnita.</b> Nos preguntan por el largo: largo $= L$. El ancho mide 4 menos, así que ancho $= L - 4$.</p><p><b>Paso 2. Plantea la ecuación.</b> El área de un rectángulo es largo por ancho: $L(L - 4) = 192$.</p><p><b>Paso 3. Iguala a cero.</b> Multiplica: $L^2 - 4L = 192$, y pasa el 192 restando: $L^2 - 4L - 192 = 0$.</p><p><b>Paso 4. Factoriza.</b> Buscamos dos números que multiplicados den $-192$ y sumados den $-4$: son $-16$ y $12$, porque $-16\cdot 12 = -192$ y $-16 + 12 = -4$. Queda $(L - 16)(L + 12) = 0$.</p><p><b>Paso 5. Despeja y descarta.</b> $L = 16$ o $L = -12$. Un largo no puede ser negativo, así que $L = 16$ m.</p><p><b>Paso 6. Comprueba.</b> Ancho $16 - 4 = 12$ y área $16\cdot 12 = 192$. ✔</p><p><b>Por qué no las otras:</b> 12 m es el ancho, no el largo; 20 y 24 no cumplen el área: $20\cdot 16 = 320$ y $24\cdot 20 = 480$.</p>`,
    conc: 'Plantea, iguala a cero, factoriza y descarta lo negativo.'
  },
  bank: [
    { enun: r`<p>¿Cuáles son las soluciones de $x^2 - 7x + 12 = 0$?</p>`,
      alts: [r`$3$ y $4$`, r`$-3$ y $-4$`, r`$2$ y $6$`, r`$1$ y $12$`], ok: 0,
      sol: r`<p><b>Paso 1.</b> Ya está igualada a cero y $a = 1$: buscamos dos números con producto $12$ y suma $-7$.</p><p><b>Paso 2.</b> El producto es positivo y la suma negativa, así que los dos son negativos. Probamos: $-1$ y $-12$ suman $-13$; $-2$ y $-6$ suman $-8$; $-3$ y $-4$ suman $-7$. ✔</p><p><b>Paso 3.</b> Factorizamos: $(x - 3)(x - 4) = 0$.</p><p><b>Paso 4.</b> Cada paréntesis igual a cero: $x = 3$ o $x = 4$.</p><p><b>Comprobación</b> con $x = 3$: $9 - 21 + 12 = 0$. ✔</p><p><b>Por qué no las otras:</b> $-3$ y $-4$ son los números de la factorización, no las soluciones; $2$ y $6$, y también $1$ y $12$, multiplican 12 pero no suman 7.</p>`, conc: '(x − p)(x − q) = 0 ⟹ x = p o x = q.' },
    { enun: r`<p>¿Cuáles son las soluciones de $2x^2 = 50$?</p>`,
      alts: [r`$5$ y $-5$`, r`Solo $5$`, r`$25$ y $-25$`, r`$10$ y $-10$`], ok: 0,
      sol: r`<p><b>Paso 1.</b> Deja $x^2$ solo: el 2 pasa dividiendo, $x^2 = 25$.</p><p><b>Paso 2.</b> ¿Qué números al cuadrado dan 25? El $5$ y el $-5$, porque $(-5)^2 = 25$ también.</p><p><b>Comprobación:</b> $2\cdot(-5)^2 = 2\cdot 25 = 50$. ✔</p><p><b>Por qué no las otras:</b> "solo 5" olvida la raíz negativa; $\pm 25$ no saca la raíz; $\pm 10$ divide 50 en 5 en vez de sacar la raíz de 25.</p>`, conc: 'x² = k ⟹ x = ±√k.' },
    { enun: r`<p>¿Cuáles son todas las soluciones de $x^2 = 3x$?</p>`,
      alts: [r`$0$ y $3$`, r`Solo $3$`, r`$0$ y $-3$`, r`$3$ y $-3$`], ok: 0,
      sol: r`<p><b>Paso 1.</b> Pasa todo a un lado: $x^2 - 3x = 0$.</p><p><b>Paso 2.</b> Saca $x$ como factor común: $x(x - 3) = 0$.</p><p><b>Paso 3.</b> Producto cero: $x = 0$ o $x - 3 = 0$, o sea $x = 3$.</p><p><b>Comprobación</b> con $x = 0$: $0^2 = 3\cdot 0$, es decir $0 = 0$. ✔</p><p><b>Por qué no las otras:</b> "solo 3" divide por $x$ y pierde el 0; $-3$ equivoca el signo; $3$ y $-3$ la trata como si fuera $x^2 = 9$.</p>`, conc: 'No dividas por x: factoriza.' },
    { enun: r`<p>¿Para qué valor de $k$ la ecuación $x^2 - 4x + k = 0$ tiene exactamente una solución real?</p>`,
      alts: [r`$4$`, r`$-4$`, r`$16$`, r`$2$`], ok: 0,
      sol: r`<p><b>Paso 1. La idea.</b> Una ecuación cuadrática tiene una sola solución cuando el discriminante vale cero: $\Delta = 0$.</p><p><b>Paso 2.</b> Coeficientes: $a = 1$, $b = -4$, $c = k$.</p><p><b>Paso 3.</b> $\Delta = (-4)^2 - 4\cdot 1\cdot k = 16 - 4k$.</p><p><b>Paso 4.</b> Igualamos a cero: $16 - 4k = 0 \Rightarrow 4k = 16 \Rightarrow k = 4$.</p><p><b>Comprobación:</b> $x^2 - 4x + 4 = (x - 2)^2 = 0$ tiene una sola solución, $x = 2$. ✔</p><p><b>Por qué no las otras:</b> $-4$ equivoca el signo; 16 olvida el $4ac$; 2 es la solución de la ecuación, no el valor de $k$.</p>`, conc: 'Una solución ⟺ Δ = b² − 4ac = 0.' },
    { enun: r`<p>La empresa CIELOS construye casas en terrenos rectangulares, en los que siempre el largo mide 5 m más que el ancho.</p><p>Si el área de uno de los terrenos es 104 m², ¿cuál es el perímetro del terreno?</p>`, src: 'PAES Invierno 2026',
      alts: ['62 m', '42 m', '31 m', '21 m'], ok: 1,
      sol: r`<p><b>Paso 1.</b> Ancho $= x$ y largo $= x + 5$.</p><p><b>Paso 2.</b> Área: $x(x + 5) = 104$.</p><p><b>Paso 3.</b> Igualamos a cero: $x^2 + 5x - 104 = 0$.</p><p><b>Paso 4.</b> Dos números con producto $-104$ y suma $5$: $13$ y $-8$. Queda $(x + 13)(x - 8) = 0$, así que $x = 8$ (el $-13$ se descarta, es una medida).</p><p><b>Paso 5.</b> Lados: ancho 8 y largo 13. Comprobación: $8\cdot 13 = 104$. ✔</p><p><b>Paso 6.</b> Lo que piden es el perímetro, la suma de los cuatro lados: $8 + 13 + 8 + 13 = 42$ m.</p><p><b>Por qué no las otras:</b> 21 m es el semiperímetro (solo dos lados); 62 m toma 13 como ancho (lados 13 y 18); 31 m es la mitad de ese error.</p>`, conc: 'Responde lo que preguntan: aquí el perímetro, no el lado.' },
    { enun: r`<p>¿Cuáles son las soluciones de $3x^2 - 5x - 2 = 0$?</p>`,
      alts: [r`$2$ y $-\dfrac{1}{3}$`, r`$-2$ y $\dfrac{1}{3}$`, r`$4$ y $-\dfrac{2}{3}$`, r`$6$ y $-1$`], ok: 0,
      sol: r`<p><b>Paso 1.</b> Como $a = 3$, usamos la fórmula general. Coeficientes: $a = 3$, $b = -5$, $c = -2$.</p><p><b>Paso 2.</b> $\Delta = (-5)^2 - 4\cdot 3\cdot(-2) = 25 + 24 = 49$.</p><p><b>Paso 3.</b> $\sqrt{49} = 7$.</p><p><b>Paso 4.</b> $-b = 5$ y $2a = 6$: $x = \dfrac{5 \pm 7}{6}$.</p><p><b>Paso 5.</b> Con $+$: $\dfrac{12}{6} = 2$. Con $-$: $\dfrac{-2}{6} = -\dfrac{1}{3}$.</p><p><b>Por qué no las otras:</b> $-2$ y $\dfrac{1}{3}$ no cambian el signo de $b$; $4$ y $-\dfrac{2}{3}$ dividen por $a$ y no por $2a$; $6$ y $-1$ dividen por 2.</p>`, conc: 'x = (−b ± √Δ) / 2a: ojo con −b y con 2a.' },
    { enun: r`<p>¿Cuántas soluciones reales tiene la ecuación $x^2 + 2x + 5 = 0$?</p>`,
      alts: ['Ninguna', 'Una', 'Dos', 'Infinitas'], ok: 0,
      sol: r`<p><b>Paso 1.</b> No hace falta resolverla: basta el discriminante. Coeficientes: $a = 1$, $b = 2$, $c = 5$.</p><p><b>Paso 2.</b> $\Delta = 2^2 - 4\cdot 1\cdot 5 = 4 - 20 = -16$.</p><p><b>Paso 3.</b> $\Delta$ es negativo, y no existe ningún número real que al cuadrado dé $-16$: la ecuación no tiene soluciones reales.</p>`, conc: 'Δ < 0 ⟹ sin soluciones reales.' },
    { enun: r`<p>La distancia $d$, en metros, que recorre un móvil que parte del reposo está dada por $d(t) = a\cdot\dfrac{t^2}{2}$, donde $t$ es el tiempo en segundos y $a$ la aceleración en m/s².</p><p>Si el móvil acelera a 10 m/s², ¿cuántos segundos tardará en recorrer 45 metros?</p>`, src: 'PAES Regular 2026',
      alts: ['3', '4,5', '9', r`$\sqrt{4{,}5}$`], ok: 0,
      sol: r`<p><b>Paso 1.</b> Reemplazamos los datos: $a = 10$ y $d = 45$, así que $10\cdot\dfrac{t^2}{2} = 45$.</p><p><b>Paso 2.</b> Simplificamos: $\dfrac{10}{2} = 5$, queda $5t^2 = 45$.</p><p><b>Paso 3.</b> Dividimos por 5: $t^2 = 9$.</p><p><b>Paso 4.</b> Raíz: $t = 3$ o $t = -3$. El tiempo no es negativo, así que $t = 3$ segundos.</p><p><b>Comprobación:</b> $10\cdot\dfrac{9}{2} = 45$. ✔</p><p><b>Por qué no las otras:</b> 4,5 es $\dfrac{45}{10}$, sin el cuadrado; 9 es $t^2$, falta la raíz; $\sqrt{4{,}5}$ olvida dividir por 2.</p>`, conc: 'Despeja t² y después saca raíz.' },
    { enun: r`<p>El cuadrado de un número más el doble del mismo número es 48.</p><p>¿Cuáles son los números que cumplen esta condición?</p>`,
      alts: [r`$6$ y $-8$`, r`$-6$ y $8$`, r`Solo $6$`, r`$4$ y $-12$`], ok: 0,
      sol: r`<p><b>Paso 1. Traduce.</b> El número es $x$; su cuadrado, $x^2$; su doble, $2x$. La ecuación es $x^2 + 2x = 48$.</p><p><b>Paso 2.</b> Igualamos a cero: $x^2 + 2x - 48 = 0$.</p><p><b>Paso 3.</b> Dos números con producto $-48$ y suma $2$: $8$ y $-6$. Queda $(x + 8)(x - 6) = 0$.</p><p><b>Paso 4.</b> $x = -8$ o $x = 6$. Aquí no se descarta nada: es "un número", no una medida.</p><p><b>Comprobación:</b> $6^2 + 2\cdot 6 = 36 + 12 = 48$ ✔ y $(-8)^2 + 2\cdot(-8) = 64 - 16 = 48$. ✔</p><p><b>Por qué no las otras:</b> $-6$ y $8$ invierten los signos; "solo 6" descarta el negativo, que aquí sí sirve; $4$ y $-12$ multiplican $-48$ pero suman $-8$.</p>`, conc: 'Descarta negativos solo si el contexto lo exige.' },
    { enun: r`<p>El producto de dos números enteros positivos consecutivos es 132.</p><p>¿Cuál es la suma de ambos números?</p>`,
      alts: [r`$23$`, r`$25$`, r`$21$`, r`$66$`], ok: 0,
      sol: r`<p><b>Paso 1. Traduce.</b> Consecutivos significa uno detrás del otro: $x$ y $x + 1$.</p><p><b>Paso 2.</b> Su producto es 132: $x(x + 1) = 132$, o sea $x^2 + x - 132 = 0$.</p><p><b>Paso 3.</b> Dos números con producto $-132$ y suma $1$: $12$ y $-11$. Queda $(x + 12)(x - 11) = 0$.</p><p><b>Paso 4.</b> $x = 11$ (el $-12$ se descarta, porque piden positivos). Los números son 11 y 12.</p><p><b>Paso 5.</b> Lo que piden es la suma: $11 + 12 = 23$. Comprobación: $11\cdot 12 = 132$. ✔</p><p><b>Por qué no las otras:</b> 25 es $12 + 13$; 21 es $10 + 11$; 66 es la mitad de 132.</p>`, conc: 'Consecutivos: x y x + 1.' },
    { enun: r`<p>Para resolver $x^2 - 6x + 5 = 0$ con la fórmula general se realizó el siguiente procedimiento, cometiéndose un error.</p><p>Paso 1: se identifican $a = 1$, $b = -6$ y $c = 5$.<br>Paso 2: se calcula el discriminante, obteniéndose $36 - 20 = 16$.<br>Paso 3: se reemplaza en la fórmula, obteniéndose $x = \dfrac{-6 \pm 4}{2}$.<br>Paso 4: se calculan las soluciones, obteniéndose $x = -1$ y $x = -5$.</p><p>¿En cuál de los pasos se cometió el error?</p>`,
      alts: ['En el Paso 1', 'En el Paso 2', 'En el Paso 3', 'En el Paso 4'], ok: 2,
      sol: r`<p>Revisamos cada paso, uno por uno.</p><p><b>Paso 1:</b> $a = 1$, $b = -6$, $c = 5$. Correcto.</p><p><b>Paso 2:</b> $(-6)^2 - 4\cdot 1\cdot 5 = 36 - 20 = 16$. Correcto.</p><p><b>Paso 3:</b> la fórmula empieza con $-b$, y $-b = -(-6) = +6$. Se escribió $-6$: <b>aquí está el error</b>. Debió quedar $x = \dfrac{6 \pm 4}{2}$.</p><p><b>Paso 4:</b> opera bien con lo que recibió, $\dfrac{-6 + 4}{2} = -1$ y $\dfrac{-6 - 4}{2} = -5$; el problema venía de antes.</p><p>Lo correcto es $x = 5$ o $x = 1$. Comprobación: $25 - 30 + 5 = 0$. ✔</p>`, conc: '−b con b negativo da positivo.' },
    { enun: r`<p>Una de las soluciones de $x^2 + bx - 10 = 0$ es $x = 2$.</p><p>¿Cuál es la otra solución?</p>`,
      alts: [r`$-5$`, r`$5$`, r`$-2$`, r`$3$`], ok: 0,
      sol: r`<p><b>Paso 1.</b> Si $x = 2$ es solución, al reemplazarlo la ecuación se cumple: $2^2 + 2b - 10 = 0$, o sea $4 + 2b - 10 = 0$.</p><p><b>Paso 2.</b> Despejamos $b$: $2b = 6 \Rightarrow b = 3$.</p><p><b>Paso 3.</b> La ecuación completa es $x^2 + 3x - 10 = 0$. Dos números con producto $-10$ y suma $3$: $5$ y $-2$. Queda $(x + 5)(x - 2) = 0$.</p><p><b>Paso 4.</b> Las soluciones son $2$, que ya conocíamos, y $-5$.</p><p><b>Atajo:</b> cuando $a = 1$, las dos soluciones multiplicadas dan $c$. Entonces $2\cdot x_2 = -10$ y $x_2 = -5$.</p><p><b>Por qué no las otras:</b> 5 tiene el signo al revés; 3 es el valor de $b$; $-2$ supone que las soluciones son opuestas.</p>`, conc: 'Reemplaza la solución conocida para hallar el coeficiente que falta.' }
  ]
},

{
  id: 'cuadratica_grafico', unit: 'Unidad 2 · Función cuadrática', icon: '⛰️',
  title: 'Gráfico de la función cuadrática',
  desc: 'Paso a paso: hacia dónde abre la parábola, tabla de valores, cortes con los ejes, vértice, eje de simetría y cómo cambia al variar sus parámetros.',
  slides: [
    { t: 'La parábola', b: r`
      <div class="cols"><div>
      <p>La función $f(x) = ax^2 + bx + c$, con $a \neq 0$, se dibuja como una curva en forma de U llamada <b>parábola</b>.</p>
      <p><b>¿Hacia dónde abre?</b> Mira solo el signo de $a$:<br>· $a > 0$: abre hacia <b>arriba</b>, como una U. Tiene un punto más bajo: un <b>mínimo</b>.<br>· $a < 0$: abre hacia <b>abajo</b>, como una U dada vuelta. Tiene un punto más alto: un <b>máximo</b>.</p>
      <p><b>¿Qué tan abierta?</b> Mientras más grande es $a$ (sin mirar el signo), más angosta es.</p>
      <p><b>¿Dónde corta al eje Y?</b> Reemplaza $x = 0$: todo se anula menos $c$, así que el corte es $(0, c)$.</p>
      </div><div>
      <div class="qfig">${''}</div>
      <div class="box">En el dibujo: $x^2$ y $3x^2$ abren hacia arriba ($a > 0$) y $3x^2$ es más angosta; $-x^2 + 4$ abre hacia abajo ($a < 0$) y corta al eje $Y$ en $4$.</div>
      </div></div>` },
    { t: 'Tabla de valores', b: r`
      <div class="cols"><div>
      <p>Para ver cómo es una parábola, se eligen algunos valores de $x$ y se calcula $f(x)$ para cada uno. Ejemplo: $f(x) = x^2 - 2x - 3$.</p>
      <table><thead><tr><th>$x$</th><th>cuenta</th><th>$f(x)$</th></tr></thead><tbody>
      <tr><td>$-1$</td><td>$1 + 2 - 3$</td><td>$0$</td></tr>
      <tr><td>$0$</td><td>$0 - 0 - 3$</td><td>$-3$</td></tr>
      <tr><td>$1$</td><td>$1 - 2 - 3$</td><td>$-4$</td></tr>
      <tr><td>$2$</td><td>$4 - 4 - 3$</td><td>$-3$</td></tr>
      <tr><td>$3$</td><td>$9 - 6 - 3$</td><td>$0$</td></tr></tbody></table>
      </div><div>
      <div class="box"><b>Lo que muestra la tabla</b><br>· Donde $f(x) = 0$ ($x = -1$ y $x = 3$) la parábola corta al eje $X$.<br>· Los valores se repiten como en un espejo alrededor de $x = 1$: $-3, -4, -3$. Ese $x = 1$ es el <b>eje de simetría</b> y $(1, -4)$ es el <b>vértice</b>.</div>
      <div class="box alert"><b>Al reemplazar</b> usa paréntesis con los negativos: $(-1)^2 = 1$ y $-2\cdot(-1) = +2$.</div>
      </div></div>` },
    { t: 'Ceros: dónde corta al eje X', b: r`
      <div class="cols"><div>
      <p>Los <b>ceros</b> son los valores de $x$ donde la parábola toca el eje $X$, es decir, donde la altura es $0$.</p>
      <p><b>Paso 1.</b> Iguala la función a cero: $x^2 - 6x + 8 = 0$.</p>
      <p><b>Paso 2.</b> Resuelve la ecuación como aprendiste: dos números con producto $8$ y suma $-6$ son $-2$ y $-4$, así que $(x - 2)(x - 4) = 0$.</p>
      <p><b>Paso 3.</b> Los ceros son $x = 2$ y $x = 4$; los puntos de corte son $(2, 0)$ y $(4, 0)$.</p>
      </div><div>
      <div class="box"><b>¿Cuántos cortes? Lo dice el discriminante</b><br>· $\Delta > 0$: corta al eje $X$ en dos puntos.<br>· $\Delta = 0$: lo toca en un solo punto, que es el vértice.<br>· $\Delta < 0$: no lo toca; queda entera arriba o entera abajo.</div>
      <div class="box alert"><b>No confundas</b> El corte con $Y$ es $(0, c)$: la $x$ vale 0. Los cortes con $X$ son $(x, 0)$: la $y$ vale 0.</div>
      </div></div>` },
    { t: 'Vértice y eje de simetría', b: r`
      <div class="cols"><div>
      <p>El <b>vértice</b> es la punta de la parábola: su punto más bajo o más alto. Se calcula en dos pasos.</p>
      $$x_v = -\frac{b}{2a} \qquad y_v = f(x_v)$$
      <p>Ejemplo: $f(x) = x^2 + 2x - 1$.</p>
      <p><b>Paso 1.</b> Coeficientes: $a = 1$, $b = 2$.</p>
      <p><b>Paso 2.</b> $x_v = -\dfrac{2}{2\cdot 1} = -1$.</p>
      <p><b>Paso 3.</b> Reemplaza ese valor en la función: $y_v = (-1)^2 + 2(-1) - 1 = 1 - 2 - 1 = -2$.</p>
      <p><b>Paso 4.</b> Vértice $(-1, -2)$. El <b>eje de simetría</b> es la recta vertical que pasa por él: $x = -1$.</p>
      </div><div>
      <div class="qfig">${''}</div>
      <div class="box"><b>Atajo del espejo</b> La parábola es simétrica: si dos puntos tienen la misma altura, $f(p) = f(q)$, el eje está justo al medio: $x_v = \dfrac{p + q}{2}$. En el dibujo, $(-3, 2)$ y $(1, 2)$ tienen el eje en $\dfrac{-3 + 1}{2} = -1$.</div>
      </div></div>` },
    { t: 'Forma canónica y traslaciones', b: r`
      <div class="cols"><div>
      <p>A veces la función viene escrita así, y el vértice se lee directo:</p>
      $$f(x) = a(x - h)^2 + k \quad \Rightarrow \quad \text{vértice } (h, k)$$
      <p><b>Cómo leerlo:</b> el número de <b>adentro</b> del paréntesis se toma con el signo <b>cambiado</b>; el de <b>afuera</b>, tal cual.</p>
      <p>· $(x - 2)^2 + 1$: vértice $(2, 1)$.<br>· $(x + 3)^2 - 4$: vértice $(-3, -4)$.</p>
      <p><b>¿Por qué?</b> En $(x - 2)^2 + 1$, el paréntesis al cuadrado nunca es negativo y vale $0$ justo cuando $x = 2$. Ahí la función llega a su valor más bajo: $0 + 1 = 1$.</p>
      </div><div>
      <div class="box"><b>Cómo se mueve la parábola</b> (partiendo de $x^2$)<br>· $x^2 + k$: sube $k$ si es positivo, baja si es negativo.<br>· $(x - h)^2$: se corre a la derecha si $h > 0$.<br>· $ax^2$: cambia lo abierta; con $a < 0$ se da vuelta.</div>
      <div class="box alert"><b>Ojo</b> $(x + 3)^2$ se corre a la <b>izquierda</b>, porque $x + 3 = x - (-3)$: $h = -3$.</div>
      </div></div>` },
    { t: 'Resumen', b: r`
      <table><thead><tr><th>Quiero saber</th><th>Cómo lo obtengo</th></tr></thead><tbody>
      <tr><td>Hacia dónde abre</td><td>signo de $a$: positivo arriba, negativo abajo</td></tr>
      <tr><td>Corte con el eje $Y$</td><td>$(0, c)$</td></tr>
      <tr><td>Cortes con el eje $X$ (ceros)</td><td>resolver $f(x) = 0$</td></tr>
      <tr><td>Vértice</td><td>$x_v = -\dfrac{b}{2a}$ y después $y_v = f(x_v)$</td></tr>
      <tr><td>Vértice en $a(x - h)^2 + k$</td><td>$(h, k)$, con el signo de adentro cambiado</td></tr>
      <tr><td>Eje de simetría</td><td>$x = x_v$; o el punto medio entre dos $x$ con igual altura</td></tr></tbody></table>
      <div class="box" style="margin-top:14px"><b>Método PAES</b> Para reconocer una parábola en un gráfico, revisa en este orden y ve descartando alternativas: 1. hacia dónde abre; 2. dónde corta al eje $Y$; 3. dónde están el vértice o los ceros.</div>` }
  ],
  example: {
    src: 'PAES Regular 2026, adaptada',
    enun: r`<p>Considera la función cuadrática $f$, con dominio el conjunto de los números reales. En la figura se representa su gráfica, con su eje de simetría $x = -1$, y el punto $(2, 7)$.</p><p>¿Para cuál de los siguientes valores de $x$ se tiene que $f(x) = 7$?</p>`,
    fig: { type: 'plot', x: [-6, 4], y: [-3, 9], fns: [{ f: x => x * x + 2 * x - 1, lab: 'f', at: [2.6, 8.6] }], vline: -1, marks: [[2, 7, '(2, 7)']] },
    alts: [r`$4$`, r`$-3$`, r`$-4$`, r`$-5$`], ok: 2,
    sol: r`<p><b>Paso 1. La idea.</b> La parábola es como un espejo respecto de su eje $x = -1$: cada punto tiene un gemelo a la misma altura, al otro lado y a la misma distancia del eje.</p><p><b>Paso 2.</b> Ya conocemos un punto con altura 7: $x = 2$. Su distancia al eje es $2 - (-1) = 3$ unidades, hacia la derecha.</p><p><b>Paso 3.</b> El gemelo está 3 unidades hacia la izquierda del eje: $-1 - 3 = -4$.</p><p><b>Paso 4.</b> Entonces $f(-4) = 7$.</p><p><b>Por qué no las otras:</b> 4 refleja respecto del eje $Y$ y no del eje de simetría $x = -1$; $-3$ cuenta solo 2 unidades desde el eje; $-5$ cuenta 4.</p>`,
    conc: 'Puntos con igual altura están a la misma distancia del eje de simetría.'
  },
  bank: [
    { enun: r`<p>¿Cuál es el vértice de la parábola $f(x) = -2x^2 + 8x - 3$?</p>`,
      alts: [r`$(2, 5)$`, r`$(-2, -27)$`, r`$(4, -3)$`, r`$(2, 21)$`], ok: 0,
      sol: r`<p><b>Paso 1.</b> Coeficientes: $a = -2$, $b = 8$.</p><p><b>Paso 2.</b> $x_v = -\dfrac{b}{2a} = -\dfrac{8}{2\cdot(-2)} = -\dfrac{8}{-4} = 2$.</p><p><b>Paso 3.</b> Reemplaza $x = 2$: $y_v = -2\cdot 2^2 + 8\cdot 2 - 3 = -8 + 16 - 3 = 5$.</p><p><b>Paso 4.</b> Vértice $(2, 5)$.</p><p><b>Por qué no las otras:</b> $(-2, -27)$ olvida el signo de $a$ en $x_v$; $(4, -3)$ usa $-\dfrac{b}{a}$ sin el 2; $(2, 21)$ calcula $-2\cdot 2^2$ como $+8$.</p>`, conc: 'x_v = −b/(2a) y luego evalúa.' },
    { enun: r`<p>¿En qué valores de $x$ la gráfica de $f(x) = x^2 - 6x + 8$ corta al eje $X$?</p>`,
      alts: [r`$2$ y $4$`, r`$-2$ y $-4$`, r`$0$ y $8$`, r`Solo en $3$`], ok: 0,
      sol: r`<p><b>Paso 1.</b> Cortar al eje $X$ significa altura cero: $x^2 - 6x + 8 = 0$.</p><p><b>Paso 2.</b> Dos números con producto $8$ y suma $-6$: $-2$ y $-4$. Queda $(x - 2)(x - 4) = 0$.</p><p><b>Paso 3.</b> $x = 2$ y $x = 4$: los cortes son $(2, 0)$ y $(4, 0)$.</p><p><b>Por qué no las otras:</b> $-2$ y $-4$ invierten los signos; 8 es el corte con el eje $Y$; 3 es la $x$ del vértice.</p>`, conc: 'Ceros: resuelve f(x) = 0.' },
    { enun: r`<p>¿Cuál de las siguientes afirmaciones describe la gráfica de $f(x) = -x^2 + 3x + 4$?</p>`,
      alts: ['Abre hacia abajo y corta al eje Y en (0, 4).', 'Abre hacia arriba y corta al eje Y en (0, 4).', 'Abre hacia abajo y corta al eje Y en (0, 3).', 'Abre hacia arriba y corta al eje Y en (4, 0).'], ok: 0,
      sol: r`<p><b>Paso 1. ¿Hacia dónde abre?</b> El número que acompaña a $x^2$ es $a = -1$, negativo: abre hacia abajo. Eso ya descarta dos alternativas.</p><p><b>Paso 2. ¿Dónde corta al eje Y?</b> Reemplaza $x = 0$: $f(0) = 0 + 0 + 4 = 4$. El punto es $(0, 4)$.</p><p><b>Por qué no las otras:</b> 3 es $b$, no el corte; $(4, 0)$ está en el eje $X$ (de hecho $f(4) = 0$, es un cero).</p>`, conc: 'Signo de a = apertura; c = corte con Y.' },
    { enun: r`<p>En el gráfico se representa una función cuadrática $f$.</p><p>¿Cuál de las siguientes expresiones corresponde a $f(x)$?</p>`,
      fig: { type: 'plot', x: [-3, 5], y: [-5, 6], fns: [{ f: x => x * x - 2 * x - 3, lab: 'f', at: [4.2, 5.4] }], marks: [[-1, 0], [3, 0], [0, -3], [1, -4]] },
      alts: [r`$f(x) = x^2 - 2x - 3$`, r`$f(x) = -x^2 + 2x + 3$`, r`$f(x) = x^2 + 2x - 3$`, r`$f(x) = (x - 1)^2 + 4$`], ok: 0,
      sol: r`<p><b>Paso 1. ¿Hacia dónde abre?</b> Hacia arriba, así que $a > 0$. Se descarta $-x^2 + 2x + 3$.</p><p><b>Paso 2. Lee los ceros.</b> Corta al eje $X$ en $-1$ y $3$. Una parábola con esos ceros se escribe $f(x) = (x + 1)(x - 3)$.</p><p><b>Paso 3. Multiplica.</b> $(x + 1)(x - 3) = x^2 - 3x + x - 3 = x^2 - 2x - 3$.</p><p><b>Paso 4. Comprueba con otros puntos del gráfico.</b> Corte con $Y$: $f(0) = -3$ ✔. Vértice: $f(1) = 1 - 2 - 3 = -4$ ✔.</p><p><b>Por qué no las otras:</b> $x^2 + 2x - 3$ tiene ceros $1$ y $-3$; $(x - 1)^2 + 4$ tiene vértice $(1, 4)$, no $(1, -4)$.</p>`, conc: 'Con los ceros p y q: f(x) = a(x − p)(x − q).' },
    { enun: r`<p>Considera las funciones $f(x) = x^2$ y $g(x) = x^2 + 3$.</p><p>¿Cómo se obtiene la gráfica de $g$ a partir de la de $f$?</p>`,
      alts: ['Trasladándola 3 unidades hacia arriba.', 'Trasladándola 3 unidades hacia abajo.', 'Trasladándola 3 unidades a la derecha.', 'Trasladándola 3 unidades a la izquierda.'], ok: 0,
      sol: r`<p><b>Paso 1. Compara con números.</b> Con $x = 0$: $f(0) = 0$ y $g(0) = 3$. Con $x = 1$: $f(1) = 1$ y $g(1) = 4$.</p><p><b>Paso 2.</b> Para la misma $x$, $g$ siempre da 3 más: cada punto sube 3. El vértice pasa de $(0, 0)$ a $(0, 3)$.</p><p><b>Por qué no las otras:</b> moverla a la derecha sería $(x - 3)^2$; a la izquierda, $(x + 3)^2$; hacia abajo, $x^2 - 3$.</p>`, conc: '+k afuera: vertical; dentro del paréntesis: horizontal.' },
    { enun: r`<p>¿Cuál es el vértice de la parábola $h(x) = (x - 2)^2 + 1$?</p>`,
      alts: [r`$(2, 1)$`, r`$(-2, 1)$`, r`$(2, -1)$`, r`$(1, 2)$`], ok: 0,
      sol: r`<p><b>Paso 1.</b> Está en la forma $a(x - h)^2 + k$: adentro hay $-2$, así que $h = 2$ (signo cambiado); afuera hay $+1$, así que $k = 1$.</p><p><b>Paso 2.</b> Vértice $(2, 1)$.</p><p><b>Para entenderlo:</b> $(x - 2)^2$ nunca es negativo y vale 0 cuando $x = 2$. Ahí $h$ alcanza su valor más bajo, $0 + 1 = 1$.</p><p><b>Por qué no las otras:</b> $(-2, 1)$ toma el signo que se ve; $(2, -1)$ cambia el signo de $k$; $(1, 2)$ invierte las coordenadas.</p>`, conc: '(x − h)² + k ⟹ vértice (h, k).' },
    { enun: r`<p>Se compara la gráfica de $f(x) = x^2$ con la de $g(x) = 3x^2$.</p><p>¿Cuál de las siguientes afirmaciones es verdadera?</p>`,
      alts: ['La de g es más angosta y tiene el mismo vértice.', 'La de g es más ancha y tiene el mismo vértice.', 'La de g está trasladada 3 unidades hacia arriba.', 'La de g abre hacia abajo.'], ok: 0,
      sol: r`<p><b>Paso 1. Compara con números.</b> Con $x = 1$: $f = 1$ y $g = 3$. Con $x = 2$: $f = 4$ y $g = 12$. La de $g$ sube el triple de rápido, así que se ve más cerrada: más angosta.</p><p><b>Paso 2. Vértice.</b> Con $x = 0$ las dos valen 0: ambas tienen vértice $(0, 0)$.</p><p><b>Por qué no las otras:</b> trasladar hacia arriba sería $x^2 + 3$; abrir hacia abajo requiere $a < 0$, y aquí $a = 3$.</p>`, conc: 'Mayor |a| = más angosta.' },
    { enun: r`<p>¿Para qué valores de $c$ la gráfica de $f(x) = x^2 - 4x + c$ <b>no</b> corta al eje $X$?</p>`,
      alts: [r`$c > 4$`, r`$c < 4$`, r`$c = 4$`, r`$c > 16$`], ok: 0,
      sol: r`<p><b>Paso 1. La idea.</b> No cortar al eje $X$ significa que $f(x) = 0$ no tiene solución, y eso pasa cuando $\Delta < 0$.</p><p><b>Paso 2.</b> Coeficientes: $a = 1$, $b = -4$, $c = c$. Entonces $\Delta = (-4)^2 - 4\cdot 1\cdot c = 16 - 4c$.</p><p><b>Paso 3.</b> $16 - 4c < 0 \Rightarrow 16 < 4c \Rightarrow 4 < c$, es decir, $c > 4$.</p><p><b>Por qué no las otras:</b> $c < 4$ da dos cortes; $c = 4$ da un solo punto de contacto; $c > 16$ olvida dividir por 4.</p>`, conc: 'No corta al eje X ⟺ Δ < 0.' },
    { enun: r`<p>La siguiente gráfica de una función cuadrática representa la altura, en cm, que alcanza un chorro de agua según la distancia horizontal, en cm, recorrida desde el punto en que emerge.</p><p>¿Cuál de las siguientes afirmaciones es verdadera?</p>`, src: 'PAES Invierno 2026, adaptada',
      fig: { type: 'plot', x: [0, 60, 10], y: [0, 30, 5], xlab: 'distancia', ylab: 'altura', fns: [{ f: x => -x * (x - 60) / 36 }] },
      alts: ['La distancia horizontal máxima recorrida es 25 cm.', 'La altura máxima alcanzada es 60 cm.', 'La altura a los 10 cm horizontales es igual a la altura a los 50 cm.', 'La altura máxima se alcanza a los 60 cm horizontales.'], ok: 2,
      sol: r`<p><b>Paso 1. Lee el gráfico.</b> El chorro sale en $0$ y cae en $60$: esos son los ceros. La punta llega a 25 cm de altura.</p><p><b>Paso 2. Eje de simetría.</b> Está justo al medio de los ceros: $\dfrac{0 + 60}{2} = 30$. Ahí se alcanza la altura máxima.</p><p><b>Paso 3. Revisa la alternativa correcta.</b> 10 está 20 a la izquierda del eje ($30 - 10 = 20$) y 50 está 20 a la derecha ($50 - 30 = 20$). Como la parábola es simétrica, tienen la misma altura. ✔</p><p><b>Por qué no las otras:</b> 25 cm es la altura máxima, no la distancia; 60 cm es la distancia máxima, no la altura; la altura máxima se alcanza a los 30 cm, no a los 60.</p>`, conc: 'Eje de simetría = punto medio de los ceros.' },
    { enun: r`<p>¿En qué punto la gráfica de $f(x) = 2x^2 - 3x - 5$ corta al eje $Y$?</p>`,
      alts: [r`$(0, -5)$`, r`$(-5, 0)$`, r`$(0, 2)$`, r`$\left(\dfrac{5}{2}, 0\right)$`], ok: 0,
      sol: r`<p><b>Paso 1.</b> En el eje $Y$ la $x$ vale 0, así que reemplazamos $x = 0$.</p><p><b>Paso 2.</b> $f(0) = 2\cdot 0 - 3\cdot 0 - 5 = -5$. El punto es $(0, -5)$: siempre es $(0, c)$.</p><p><b>Por qué no las otras:</b> $(-5, 0)$ invierte las coordenadas; 2 es $a$; $\left(\dfrac{5}{2}, 0\right)$ es un cero, un corte con el eje $X$.</p>`, conc: 'Corte con Y = (0, c).' },
    { enun: r`<p>Considera la función $f(x) = -(x + 1)^2 + 4$.</p><p>¿Cuál(es) de las siguientes afirmaciones es (son) verdadera(s)?</p><p>I) Su vértice es $(-1, 4)$.<br>II) Su valor máximo es 4.<br>III) Sus ceros son $-3$ y $1$.</p>`,
      alts: ['Solo I', 'Solo I y II', 'Solo II y III', 'I, II y III'], ok: 3,
      sol: r`<p>Revisamos cada afirmación por separado.</p><p><b>I)</b> Adentro hay $+1$, así que $h = -1$ (signo cambiado); afuera hay $+4$, así que $k = 4$. Vértice $(-1, 4)$. Verdadera.</p><p><b>II)</b> El signo de adelante es negativo ($a = -1$): abre hacia abajo y el vértice es el punto más alto. El máximo es $y_v = 4$. Verdadera.</p><p><b>III)</b> Igualamos a cero: $-(x + 1)^2 + 4 = 0 \Rightarrow (x + 1)^2 = 4$. Sacamos raíz con $\pm$: $x + 1 = 2$ o $x + 1 = -2$, así que $x = 1$ o $x = -3$. Verdadera.</p><p>Las tres son verdaderas.</p>`, conc: 'Con a < 0, el vértice es el punto más alto.' },
    { enun: r`<p>Una función cuadrática $f$ cumple que $f(1) = f(7)$.</p><p>¿Cuál es la ecuación de su eje de simetría?</p>`,
      alts: [r`$x = 4$`, r`$x = 3$`, r`$x = 6$`, r`$x = 8$`], ok: 0,
      sol: r`<p><b>Paso 1. La idea.</b> $f(1) = f(7)$ dice que en $x = 1$ y en $x = 7$ la parábola tiene la misma altura: son puntos gemelos.</p><p><b>Paso 2.</b> Los gemelos están a igual distancia del eje, así que el eje está justo al medio: $x = \dfrac{1 + 7}{2} = 4$.</p><p><b>Comprobación:</b> de 1 a 4 hay 3 y de 4 a 7 hay 3. ✔</p><p><b>Por qué no las otras:</b> 3 es la mitad de la distancia; 6 es $7 - 1$; 8 es $1 + 7$ sin dividir.</p>`, conc: 'f(p) = f(q) ⟹ eje x = (p + q)/2.' }
  ]
},

{
  id: 'cuadratica_problemas', unit: 'Unidad 2 · Función cuadrática', icon: '🏀',
  title: 'Problemas con función cuadrática',
  desc: 'Paso a paso: lanzamientos, áreas máximas, ganancias y otros contextos; qué significan el vértice, los ceros y el corte con el eje Y.',
  slides: [
    { t: 'Primero: ¿me piden una x o una y?', b: r`
      <div class="cols"><div>
      <p>En los problemas, cada parte de la parábola tiene un significado. Antes de calcular, decide qué te están pidiendo:</p>
      <p>· "¿<b>Cuándo</b>...?", "¿<b>cuántas</b> unidades...?", "¿<b>qué medida</b>...?": es una $x$.<br>· "¿<b>Qué altura</b>...?", "¿<b>cuánta</b> área o ganancia...?": es una $y$, el valor de la función.</p>
      </div><div>
      <div class="box"><b>Las tres preguntas típicas</b><br>· "¿Cuál es el valor inicial?": reemplaza $x = 0$.<br>· "¿Cuál es el máximo (o mínimo)?": calcula el vértice.<br>· "¿Cuándo llega al suelo o se hace cero?": iguala la función a cero.</div>
      </div></div>` },
    { t: 'Lanzamientos', b: r`
      <div class="cols"><div>
      <p>La altura de un objeto lanzado hacia arriba se modela con $h(t) = -5t^2 + v_0 t + h_0$. Ejemplo: $h(t) = -5t^2 + 20t$.</p>
      <p><b>¿Desde qué altura parte?</b> $h(0) = 0$: sale desde el suelo.</p>
      <p><b>¿Cuándo llega a lo más alto?</b> Es la $x$ del vértice: $t_v = -\dfrac{20}{2\cdot(-5)} = -\dfrac{20}{-10} = 2$ s.</p>
      <p><b>¿Qué altura máxima alcanza?</b> Reemplaza ese tiempo: $h(2) = -5\cdot 4 + 20\cdot 2 = -20 + 40 = 20$ m.</p>
      <p><b>¿Cuándo vuelve al suelo?</b> Altura cero: $-5t^2 + 20t = 0 \Rightarrow -5t(t - 4) = 0$, así que $t = 0$ (el lanzamiento) o $t = 4$ s.</p>
      </div><div>
      <div class="box"><b>Por qué abre hacia abajo</b> El $-5$ hace que la pelota suba, frene y vuelva a caer: el vértice es el punto más alto.</div>
      <div class="box alert"><b>No confundas</b> 2 s es <b>cuándo</b> llega arriba; 20 m es <b>qué tan alto</b> llega. Las dos suelen aparecer como alternativas.</div>
      </div></div>` },
    { t: 'Áreas máximas', b: r`
      <div class="cols"><div>
      <p>Con 40 m de cerca se arma un rectángulo. ¿Qué medidas dan el área más grande?</p>
      <p><b>Paso 1.</b> Un lado mide $x$. Los dos lados distintos suman la mitad del perímetro: $x + y = 20$, así que el otro lado mide $20 - x$.</p>
      <p><b>Paso 2.</b> Área = lado por lado: $A(x) = x(20 - x) = -x^2 + 20x$.</p>
      <p><b>Paso 3.</b> $a = -1$ es negativo: la parábola abre hacia abajo y el vértice es el máximo. $x_v = -\dfrac{20}{2\cdot(-1)} = 10$.</p>
      <p><b>Paso 4.</b> Los lados miden 10 y $20 - 10 = 10$: un cuadrado. Área máxima: $10\cdot 10 = 100$ m².</p>
      </div><div>
      <div class="box alert"><b>Contra un muro</b> Si un lado no lleva cerca, la malla cubre solo tres lados: $2x + y$. El modelo cambia y el máximo ya no es un cuadrado.</div>
      </div></div>` },
    { t: 'Ganancias', b: r`
      <div class="cols"><div>
      <p>Si la ganancia es $G(x) = -x^2 + 40x - 300$ (en miles de pesos, con $x$ unidades vendidas):</p>
      <p><b>¿Cuántas unidades dan la ganancia máxima?</b> $x_v = -\dfrac{40}{2\cdot(-1)} = 20$ unidades.</p>
      <p><b>¿Cuál es esa ganancia máxima?</b> $G(20) = -400 + 800 - 300 = 100$ mil pesos.</p>
      <p><b>¿Cuándo no se gana ni se pierde?</b> $G(x) = 0$. Multiplicando por $-1$: $x^2 - 40x + 300 = 0 \Rightarrow (x - 10)(x - 30) = 0$, en $x = 10$ y $x = 30$.</p>
      </div><div>
      <div class="box"><b>¿Dónde hay ganancia?</b> La parábola abre hacia abajo, así que está sobre el eje entre los dos ceros: vendiendo entre 10 y 30 unidades la ganancia es positiva.</div>
      <div class="box alert"><b>Qué responder</b> "¿Cuántas unidades?" es la $x$ del vértice. "¿Cuál es la ganancia máxima?" es la $y$ del vértice. No confundirlas es medio punto ganado.</div>
      </div></div>` },
    { t: 'Resumen', b: r`
      <table><thead><tr><th>En el contexto</th><th>En la parábola</th><th>Cómo se calcula</th></tr></thead><tbody>
      <tr><td>Valor inicial</td><td>corte con el eje $Y$</td><td>$f(0) = c$</td></tr>
      <tr><td>Cuándo o con cuánto se logra el máximo</td><td>$x$ del vértice</td><td>$x_v = -\dfrac{b}{2a}$</td></tr>
      <tr><td>Máximo o mínimo</td><td>$y$ del vértice</td><td>$f(x_v)$</td></tr>
      <tr><td>Llega al suelo, se anula</td><td>ceros</td><td>resolver $f(x) = 0$</td></tr></tbody></table>
      <div class="box" style="margin-top:14px"><b>Método PAES</b> 1. Subraya qué te preguntan. 2. Decide si es una $x$ o una $y$. 3. Elige la herramienta de la tabla. 4. Revisa que la respuesta tenga sentido: un tiempo o una medida no pueden ser negativos.</div>` }
  ],
  example: {
    src: 'Ejemplo tipo PAES',
    enun: r`<p>La altura $h$, en metros, de una pelota lanzada verticalmente hacia arriba está dada por $h(t) = -5t^2 + 20t$, con $t$ en segundos.</p><p>¿Cuál es la altura máxima que alcanza la pelota?</p>`,
    alts: ['20 m', '2 m', '40 m', '15 m'], ok: 0,
    sol: r`<p><b>Paso 1. ¿Qué piden?</b> Una altura, o sea una $y$: la del vértice, porque es la más alta.</p><p><b>Paso 2. Cuándo llega arriba.</b> Con $a = -5$ y $b = 20$: $t_v = -\dfrac{20}{2\cdot(-5)} = -\dfrac{20}{-10} = 2$ s.</p><p><b>Paso 3. Qué altura tiene en ese momento.</b> $h(2) = -5\cdot 2^2 + 20\cdot 2 = -5\cdot 4 + 40 = -20 + 40 = 20$ m.</p><p><b>Por qué no las otras:</b> 2 es el tiempo, no la altura; 40 m olvida el término $-5t^2$; 15 m es $h(1)$, la altura al primer segundo.</p>`,
    conc: 'Altura máxima = y del vértice.'
  },
  bank: [
    { enun: r`<p>La altura de una pelota, en metros, es $h(t) = -5t^2 + 20t$, con $t$ en segundos.</p><p>¿Después de cuántos segundos vuelve a tocar el suelo?</p>`,
      alts: ['4 s', '2 s', '20 s', '5 s'], ok: 0,
      sol: r`<p><b>Paso 1.</b> Tocar el suelo es altura cero: $-5t^2 + 20t = 0$.</p><p><b>Paso 2.</b> Saca factor común $-5t$: $-5t(t - 4) = 0$. Comprueba: $-5t\cdot t = -5t^2$ y $-5t\cdot(-4) = 20t$. ✔</p><p><b>Paso 3.</b> $t = 0$ o $t = 4$. En $t = 0$ la pelota recién se lanza, así que vuelve al suelo a los 4 s.</p><p><b>Por qué no las otras:</b> 2 s es cuando alcanza la altura máxima; 20 s divide 20 por 1; 5 s confunde el coeficiente.</p>`, conc: 'Toca el suelo: cero positivo de h.' },
    { enun: r`<p>La altura de un objeto lanzado desde un edificio es $h(t) = -5t^2 + 10t + 15$, en metros, con $t$ en segundos.</p><p>¿Desde qué altura se lanzó?</p>`,
      alts: ['15 m', '10 m', '20 m', '3 m'], ok: 0,
      sol: r`<p><b>Paso 1.</b> "Desde qué altura se lanzó" es la altura al comienzo, cuando $t = 0$.</p><p><b>Paso 2.</b> $h(0) = -5\cdot 0 + 10\cdot 0 + 15 = 15$ m. Es el número solo, $c$.</p><p><b>Por qué no las otras:</b> 10 es la velocidad inicial; 20 m es la altura máxima, $h(1)$; 3 es el tiempo en que llega al suelo.</p>`, conc: 'Valor inicial = f(0) = c.' },
    { enun: r`<p>La altura de un objeto es $h(t) = -5t^2 + 10t + 15$, en metros, con $t$ en segundos.</p><p>¿Cuál es la altura máxima que alcanza?</p>`,
      alts: ['20 m', '15 m', '1 m', '30 m'], ok: 0,
      sol: r`<p><b>Paso 1.</b> Altura máxima = $y$ del vértice. Primero el tiempo: $a = -5$, $b = 10$, $t_v = -\dfrac{10}{2\cdot(-5)} = -\dfrac{10}{-10} = 1$ s.</p><p><b>Paso 2.</b> Altura en ese instante: $h(1) = -5 + 10 + 15 = 20$ m.</p><p><b>Por qué no las otras:</b> 15 m es la altura inicial; 1 es el tiempo del vértice; 30 m suma $5 + 10 + 15$ sin respetar el signo.</p>`, conc: 'Máximo = h(t_v).' },
    { enun: r`<p>Con 40 m de cerca se quiere cercar un terreno rectangular.</p><p>¿Cuál es el área máxima que se puede cercar?</p>`,
      alts: ['100 m²', '400 m²', '40 m²', '96 m²'], ok: 0,
      sol: r`<p><b>Paso 1.</b> Un lado mide $x$; como dos lados distintos suman la mitad de 40, el otro mide $20 - x$.</p><p><b>Paso 2.</b> Área: $A(x) = x(20 - x) = -x^2 + 20x$.</p><p><b>Paso 3.</b> Abre hacia abajo, así que el vértice es el máximo: $x_v = -\dfrac{20}{2\cdot(-1)} = 10$.</p><p><b>Paso 4.</b> Lados 10 y 10: $A(10) = 100$ m².</p><p><b>Por qué no las otras:</b> 400 m² usa lado 20 (todo el perímetro en dos lados); 40 m² confunde área con perímetro; 96 m² ($8\cdot 12$) es posible, pero no es el máximo.</p>`, conc: 'Perímetro fijo, área máxima: cuadrado.' },
    { enun: r`<p>Se quiere cercar un corral rectangular junto a un muro, con 60 m de malla para los otros tres lados. Si los lados perpendiculares al muro miden $x$, el área es $A(x) = x(60 - 2x)$.</p><p>¿Cuál es el área máxima?</p>`,
      alts: ['450 m²', '225 m²', '900 m²', '400 m²'], ok: 0,
      sol: r`<p><b>Paso 1.</b> Multiplica para ver $a$ y $b$: $A(x) = 60x - 2x^2 = -2x^2 + 60x$.</p><p><b>Paso 2.</b> Vértice: $x_v = -\dfrac{60}{2\cdot(-2)} = -\dfrac{60}{-4} = 15$.</p><p><b>Paso 3.</b> Los lados miden 15 y $60 - 2\cdot 15 = 30$.</p><p><b>Paso 4.</b> Área máxima: $15\cdot 30 = 450$ m².</p><p><b>Por qué no las otras:</b> 225 m² es un cuadrado de 15; 900 m² es un cuadrado de 30; 400 m² ($x = 20$, lados 20 y 20) no es el máximo.</p>`, conc: 'Junto a un muro el máximo no es cuadrado.' },
    { enun: r`<p>La ganancia de una empresa, en miles de pesos, al vender $x$ unidades es $G(x) = -x^2 + 40x - 300$.</p><p>¿Cuántas unidades debe vender para obtener la ganancia máxima?</p>`,
      alts: ['20', '100', '10', '40'], ok: 0,
      sol: r`<p><b>Paso 1.</b> "¿Cuántas unidades?" pide una $x$: la del vértice.</p><p><b>Paso 2.</b> $a = -1$, $b = 40$: $x_v = -\dfrac{40}{2\cdot(-1)} = -\dfrac{40}{-2} = 20$ unidades.</p><p><b>Por qué no las otras:</b> 100 es la ganancia máxima, $G(20)$, una $y$; 10 es un cero; 40 es $-\dfrac{b}{a}$, sin el 2.</p>`, conc: '¿Cuántas unidades? = x del vértice.' },
    { enun: r`<p>La ganancia de una empresa, en miles de pesos, al vender $x$ unidades es $G(x) = -x^2 + 40x - 300$.</p><p>¿Para qué cantidades de unidades vendidas la ganancia es positiva?</p>`,
      alts: ['Entre 10 y 30 unidades, sin incluirlas.', 'Menos de 10 unidades.', 'Más de 30 unidades.', 'Solo con 20 unidades.'], ok: 0,
      sol: r`<p><b>Paso 1. Busca los ceros.</b> $-x^2 + 40x - 300 = 0$. Multiplicando todo por $-1$: $x^2 - 40x + 300 = 0$.</p><p><b>Paso 2.</b> Dos números con producto $300$ y suma $-40$: $-10$ y $-30$. Queda $(x - 10)(x - 30) = 0$: $x = 10$ y $x = 30$.</p><p><b>Paso 3. Mira la forma.</b> $a = -1$: abre hacia abajo, como una colina. La colina está sobre el eje $X$ entre los dos ceros: $10 < x < 30$.</p><p><b>Comprobación:</b> $G(20) = 100 > 0$ ✔ y $G(5) = -25 + 200 - 300 = -125 < 0$ ✔.</p><p><b>Por qué no las otras:</b> fuera de ese intervalo la ganancia es negativa; con 20 unidades es máxima, pero no es la única positiva.</p>`, conc: 'a < 0: positiva entre los ceros.' },
    { enun: r`<p>La trayectoria de un chorro de agua se modela con $h(x) = -0{,}1x^2 + 2x$, donde $x$ es la distancia horizontal y $h$ la altura, ambas en metros.</p><p>¿A qué distancia horizontal cae el agua al suelo?</p>`,
      alts: ['20 m', '10 m', '2 m', '40 m'], ok: 0,
      sol: r`<p><b>Paso 1.</b> Caer al suelo es altura cero: $-0{,}1x^2 + 2x = 0$.</p><p><b>Paso 2.</b> Saca $x$ factor común: $x(-0{,}1x + 2) = 0$.</p><p><b>Paso 3.</b> $x = 0$ (donde sale el chorro) o $-0{,}1x + 2 = 0 \Rightarrow 0{,}1x = 2 \Rightarrow x = 20$.</p><p><b>Paso 4.</b> Cae a los 20 m.</p><p><b>Por qué no las otras:</b> 10 m es donde alcanza la altura máxima (la mitad del camino); 2 es el coeficiente $b$; 40 m duplica el resultado.</p>`, conc: 'Alcance = cero distinto de 0.' },
    { enun: r`<p>El área de un cuadrado de lado $\ell$ es $A(\ell) = \ell^2$.</p><p>Si el lado se triplica, ¿qué le ocurre al área?</p>`,
      alts: ['Se multiplica por 9.', 'Se multiplica por 3.', 'Se multiplica por 6.', 'Se multiplica por 27.'], ok: 0,
      sol: r`<p><b>Paso 1.</b> El nuevo lado es $3\ell$. Su área: $A(3\ell) = (3\ell)^2 = 3\ell\cdot 3\ell = 9\ell^2$.</p><p><b>Paso 2.</b> Comparando con $\ell^2$, el área se multiplicó por 9.</p><p><b>Con números:</b> lado 2 da área 4; lado 6 da área 36, y $36 = 9\cdot 4$. ✔</p><p><b>Por qué no las otras:</b> por 3 supone que es lineal; por 6 multiplica $3\cdot 2$; por 27 es lo que pasa con el volumen de un cubo.</p>`, conc: 'Cuadrática: si x se multiplica por k, f se multiplica por k².' },
    { enun: r`<p>La distancia de frenado de un auto, en metros, es aproximadamente $d(v) = \dfrac{v^2}{100}$, con $v$ en km/h.</p><p>¿Cuál es la distancia de frenado a 80 km/h?</p>`,
      alts: ['64 m', '0,8 m', '6,4 m', '160 m'], ok: 0,
      sol: r`<p><b>Paso 1.</b> Reemplaza $v = 80$ y calcula primero la potencia: $80^2 = 6400$.</p><p><b>Paso 2.</b> Divide: $\dfrac{6400}{100} = 64$ m.</p><p><b>Por qué no las otras:</b> 0,8 m olvida el cuadrado; 6,4 m divide por 1000; 160 m es $2\cdot 80$.</p>`, conc: 'Evalúa primero la potencia.' },
    { enun: r`<p>Un objeto se deja caer desde 80 m de altura. Su altura es $h(t) = 80 - 5t^2$, con $t$ en segundos.</p><p>¿Cuánto tarda en llegar al suelo?</p>`,
      alts: ['4 s', '16 s', '8 s', '15 s'], ok: 0,
      sol: r`<p><b>Paso 1.</b> Llegar al suelo es altura cero: $80 - 5t^2 = 0$.</p><p><b>Paso 2.</b> Pasa el $5t^2$ al otro lado: $5t^2 = 80$.</p><p><b>Paso 3.</b> Divide por 5: $t^2 = 16$.</p><p><b>Paso 4.</b> Raíz: $t = 4$ o $t = -4$. El tiempo es positivo: 4 s.</p><p><b>Por qué no las otras:</b> 16 s es $t^2$, falta la raíz; 8 s divide 80 por 10; 15 s resta 5 y divide por 5.</p>`, conc: 'Despeja t² y saca raíz positiva.' },
    { enun: r`<p>En una reunión, cada persona saluda una vez a cada una de las demás. Con $n$ personas, la cantidad de saludos es $S(n) = \dfrac{n(n - 1)}{2}$.</p><p>Si hubo 45 saludos, ¿cuántas personas había?</p>`,
      alts: ['10', '9', '15', '90'], ok: 0,
      sol: r`<p><b>Paso 1.</b> Nos dan el resultado, así que igualamos: $\dfrac{n(n - 1)}{2} = 45$.</p><p><b>Paso 2.</b> El 2 pasa multiplicando: $n(n - 1) = 90$, o sea $n^2 - n - 90 = 0$.</p><p><b>Paso 3.</b> Dos números con producto $-90$ y suma $-1$: $-10$ y $9$. Queda $(n - 10)(n + 9) = 0$.</p><p><b>Paso 4.</b> $n = 10$ o $n = -9$. No hay personas negativas: había 10.</p><p><b>Comprobación:</b> $\dfrac{10\cdot 9}{2} = 45$. ✔</p><p><b>Por qué no las otras:</b> 9 es $n - 1$; 15 es $\dfrac{45}{3}$; 90 es $n(n - 1)$, el doble de los saludos.</p>`, conc: 'Plantea la ecuación cuadrática y descarta la solución negativa.' }
  ]
}
];

/* Figuras de las diapositivas de funciones */
Object.assign(SLIDE_FIGS, {
  funcion_concepto: { 3: { type: 'plot', x: [-3, 3], y: [-1, 9], fns: [{ f: x => x * x, lab: 'f(x) = x²', at: [1.1, 8.4] }], marks: [[2, 4, '(2, 4)'], [-2, 4, '(−2, 4)']] } },
  lineal_afin: { 1: { type: 'plot', x: [-3, 3], y: [-4, 6], fns: [{ f: x => 2 * x, lab: 'm = 2', at: [1.7, 5.4] }, { f: x => -x + 1, lab: 'm = −1', at: [-2.9, 5.4] }, { f: () => 3, lab: 'm = 0', at: [1.9, 3.5] }] } },
  cuadratica_grafico: {
    0: { type: 'plot', x: [-3, 3], y: [-5, 9], fns: [{ f: x => x * x, lab: 'x²', at: [2.4, 4.6] }, { f: x => 3 * x * x, lab: '3x²', at: [0.9, 8.4] }, { f: x => -x * x + 4, lab: '−x² + 4', at: [-2.9, -3.6] }] },
    3: { type: 'plot', x: [-5, 3], y: [-3, 7], fns: [{ f: x => x * x + 2 * x - 1 }], vline: -1, marks: [[-1, -2, 'vértice'], [1, 2], [-3, 2]] }
  }
});
