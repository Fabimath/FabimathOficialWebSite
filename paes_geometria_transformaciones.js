/* Contenido de "PAES Geometría: transformaciones y semejanza" (Fabimath).
   Temario oficial PAES M1 Admisión 2027, eje Geometría:
     3. Transformaciones isométricas: puntos y vectores en el plano cartesiano; rotación, traslación y
        reflexión de figuras geométricas; problemas en diversos contextos.
     4. Semejanza y proporcionalidad: propiedades de semejanza y de proporcionalidad aplicadas a modelos
        a escala y a otras situaciones de la vida diaria y de otras asignaturas.
   Estilo de preguntas tomado de las tres últimas pruebas publicadas por el DEMRE
   (PAES Invierno 2026, PAES Regular 2026 y PAES Invierno 2027), en paes/fuentes/.
   Notación chilena: coma decimal, punto de miles; pares ordenados (a, b); vectores $\vec{v} = (a, b)$.
   Sentido antihorario = contrario a los punteros del reloj.
   Figuras en TikZ: fuentes en paes/m1/tikz/tra_*.tex y sem_*.tex, compiladas a paes/m1/fig/*.svg
   con paes/m1/build_figs.py. Respuestas verificadas con _tmp/verifica_geo_transf.py.
   Se carga después de paes_data.js: reutiliza r (String.raw).
   Cada pregunta: enun (HTML + $latex$), fig opcional, alts (4), ok (índice correcto), sol, conc. */

const GEO_TRANSFORMACIONES = [

/* =====================================================================
   UNIDAD 3 · TRANSFORMACIONES ISOMÉTRICAS
   ===================================================================== */
{
  id: 'geo_vectores', unit: 'Unidad 3 · Transformaciones isométricas', icon: '📍',
  title: 'Puntos y vectores en el plano',
  desc: 'Paso a paso: el plano cartesiano y sus cuadrantes, cómo leer y ubicar puntos, qué es un vector, el vector entre dos puntos, la suma de vectores y cómo trasladar un punto con un vector.',
  slides: [
    { t: 'El plano cartesiano y los cuadrantes', b: r`
      <div class="cols"><div>
      <p>El <b>plano cartesiano</b> tiene dos rectas numéricas que se cortan en ángulo recto: el <b>eje X</b> (horizontal) y el <b>eje Y</b> (vertical). Se cortan en el <b>origen</b> $O = (0, 0)$.</p>
      <p>Cada punto se nombra con un <b>par ordenado</b> $(x, y)$: primero cuánto avanzas en horizontal y después cuánto subes o bajas.</p>
      <p><b>Ejemplo.</b> Para ubicar $A(3, 2)$: <b>Paso 1.</b> Parte en el origen. <b>Paso 2.</b> Avanza 3 a la derecha (el 3 es positivo). <b>Paso 3.</b> Sube 2 (el 2 es positivo). Ahí está $A$.</p>
      <p>Para $C(-2, -3)$: 2 a la <b>izquierda</b> y 3 hacia <b>abajo</b>, porque los dos números son negativos.</p>
      </div><div>
      <div class="qfig"><img class="tikz" src="paes/m1/fig/tra_plano_cuadrantes.svg" alt="Plano cartesiano con los cuatro cuadrantes y los puntos A(3, 2), B(-4, 1), C(-2, -3) y D(4, -2)"></div>
      <table><thead><tr><th>Cuadrante</th><th>Signo de $x$</th><th>Signo de $y$</th></tr></thead><tbody>
      <tr><td>I (arriba a la derecha)</td><td>$+$</td><td>$+$</td></tr>
      <tr><td>II (arriba a la izquierda)</td><td>$-$</td><td>$+$</td></tr>
      <tr><td>III (abajo a la izquierda)</td><td>$-$</td><td>$-$</td></tr>
      <tr><td>IV (abajo a la derecha)</td><td>$+$</td><td>$-$</td></tr></tbody></table>
      </div></div>` },
    { t: 'Leer coordenadas sin equivocarse', b: r`
      <div class="cols"><div>
      <p><b>El orden importa.</b> $(2, 5)$ y $(5, 2)$ son puntos distintos: el primero está 2 a la derecha y 5 arriba; el segundo, 5 a la derecha y 2 arriba.</p>
      <p><b>Puntos sobre los ejes.</b> Si un punto está sobre el eje X, no sube ni baja: su $y$ vale 0, como $(4, 0)$. Si está sobre el eje Y, no avanza a los lados: su $x$ vale 0, como $(0, -3)$. Los puntos de los ejes no pertenecen a ningún cuadrante.</p>
      <p><b>Ejemplo.</b> Si $P(a, b)$ está en el cuadrante II, entonces $a &lt; 0$ y $b &gt; 0$. ¿Dónde está $Q(b, a)$? Su primera coordenada, $b$, es positiva y la segunda, $a$, es negativa: $Q$ está en el cuadrante IV.</p>
      </div><div>
      <div class="box"><b>Truco para leer un punto</b> Desde el punto, baja (o sube) en línea recta hasta el eje X: ese número es la $x$. Después ve en horizontal hasta el eje Y: ese número es la $y$.</div>
      <div class="box alert"><b>Error típico</b> Leer primero la altura. En $(x, y)$ siempre va primero lo horizontal, como en el abecedario: la $x$ va antes que la $y$.</div>
      <div class="box"><b>Distancia en una misma fila</b> Entre $(-2, 4)$ y $(5, 4)$ hay $5 - (-2) = 7$ unidades: tienen la misma altura y solo cambia la $x$.</div>
      </div></div>` },
    { t: '¿Qué es un vector?', b: r`
      <div class="cols"><div>
      <p>Un <b>vector</b> es una flecha que indica un <b>desplazamiento</b>: cuánto se mueve algo en horizontal y cuánto en vertical. Se escribe $\vec{u} = (a, b)$.</p>
      <p>En $\vec{u} = (3, 2)$: 3 unidades a la derecha y 2 hacia arriba. Cuando no se dice otra cosa, el vector parte en el origen y termina en el punto $(3, 2)$.</p>
      <p>Un vector tiene tres características:</p>
      <p>· <b>Magnitud</b>: lo que mide la flecha (su largo).<br>· <b>Dirección</b>: la recta sobre la que está, su inclinación.<br>· <b>Sentido</b>: hacia cuál de los dos lados de esa recta apunta.</p>
      <p>Las tres flechas azules del dibujo son <b>el mismo vector</b>: igual magnitud, dirección y sentido, aunque partan en lugares distintos. La flecha roja, $-\vec{u} = (-3, -2)$, tiene la misma magnitud y dirección, pero <b>sentido contrario</b>.</p>
      </div><div>
      <div class="qfig"><img class="tikz" src="paes/m1/fig/tra_vector_equipolentes.svg" alt="Tres flechas iguales que representan el vector u = (3, 2) dibujadas en distintos lugares, y una flecha del vector -u que apunta al revés"></div>
      <div class="box"><b>El opuesto</b> El vector opuesto de $(a, b)$ es $(-a, -b)$: se cambian los dos signos y la flecha queda dada vuelta.</div>
      </div></div>` },
    { t: 'El vector entre dos puntos: final menos inicial', b: r`
      <div class="cols"><div>
      <p>Para ir de $A$ a $B$ se usa el vector $\overrightarrow{AB}$. Se calcula restando las coordenadas: <b>el punto final menos el punto inicial</b>.</p>
      <p><b>Ejemplo.</b> $A(1, 2)$ y $B(5, -1)$.</p>
      <p><b>Paso 1. Horizontal.</b> $5 - 1 = 4$: avanza 4 a la derecha.</p>
      <p><b>Paso 2. Vertical.</b> $-1 - 2 = -3$: baja 3.</p>
      <p><b>Paso 3.</b> $\overrightarrow{AB} = (4, -3)$.</p>
      <p><b>Comprobación:</b> si a $A(1, 2)$ le sumas $(4, -3)$ llegas a $(1 + 4, 2 - 3) = (5, -1)$, que es $B$. ✔</p>
      <p><b>Magnitud.</b> La flecha es la hipotenusa de un triángulo rectángulo de catetos 4 y 3: mide $\sqrt{4^2 + 3^2} = \sqrt{25} = 5$.</p>
      </div><div>
      <div class="qfig"><img class="tikz" src="paes/m1/fig/tra_vector_ab.svg" alt="Vector de A(1, 2) a B(5, -1); en línea segmentada, 4 unidades a la derecha y 3 hacia abajo"></div>
      <div class="box alert"><b>Al revés cambia el signo</b> $\overrightarrow{BA} = A - B = (1 - 5, 2 - (-1)) = (-4, 3)$. Es el opuesto de $\overrightarrow{AB}$: misma flecha, apuntando al otro lado.</div>
      </div></div>` },
    { t: 'Sumar vectores y multiplicarlos por un número', b: r`
      <div class="cols"><div>
      <p><b>Suma.</b> Se suman las coordenadas que están en el mismo lugar: $(a, b) + (c, d) = (a + c, b + d)$.</p>
      <p><b>Ejemplo.</b> $\vec{u} = (4, 1)$ y $\vec{v} = (1, 3)$. Entonces $\vec{u} + \vec{v} = (4 + 1, 1 + 3) = (5, 4)$.</p>
      <p>En el dibujo, la suma es hacer un desplazamiento y después el otro: pones el inicio de $\vec{v}$ en la punta de $\vec{u}$. La flecha que va del inicio de $\vec{u}$ a la punta de $\vec{v}$ es $\vec{u} + \vec{v}$.</p>
      <p><b>Resta.</b> $\vec{u} - \vec{v} = (4 - 1, 1 - 3) = (3, -2)$.</p>
      <p><b>Por un número.</b> $2\vec{u} = (2\cdot 4, 2\cdot 1) = (8, 2)$: el doble de largo, misma dirección y sentido. Multiplicar por un número negativo da vuelta el sentido.</p>
      </div><div>
      <div class="qfig"><img class="tikz" src="paes/m1/fig/tra_suma_vectores.svg" alt="Vector u = (4, 1) desde el origen; a continuación el vector v = (1, 3); en línea segmentada, el vector suma (5, 4)"></div>
      <div class="box alert"><b>No se multiplican coordenadas</b> $(4, 1) + (1, 3)$ no es $(4\cdot 1, 1\cdot 3)$. Para sumar o restar vectores se opera cada coordenada con la del mismo lugar.</div>
      </div></div>` },
    { t: 'Trasladar un punto con un vector', b: r`
      <div class="cols"><div>
      <p>Trasladar el punto $P$ según el vector $\vec{v}$ es moverlo lo que indica el vector. La imagen se llama $P'$ y se calcula sumando: $P' = P + \vec{v}$.</p>
      <p><b>Ejemplo.</b> $P(-3, 4)$ y $\vec{v} = (5, -6)$.</p>
      <p><b>Paso 1.</b> $x$: $-3 + 5 = 2$.</p>
      <p><b>Paso 2.</b> $y$: $4 + (-6) = -2$.</p>
      <p><b>Paso 3.</b> $P' = (2, -2)$.</p>
      <p><b>Al revés.</b> Si conoces la imagen y el vector, el punto original se obtiene restando: $P = P' - \vec{v}$. Si $P'(1, 1)$ y $\vec{v} = (4, -2)$, entonces $P = (1 - 4, 1 - (-2)) = (-3, 3)$.</p>
      <p><b>Dos traslaciones seguidas</b> equivalen a una sola, con la suma de los vectores: trasladar según $(2, 1)$ y después según $(3, -4)$ es lo mismo que trasladar según $(5, -3)$.</p>
      </div><div>
      <div class="box"><b>Puntos cardinales</b> Pon el norte hacia arriba, como en un mapa:<br>· este: $x$ positivo · oeste: $x$ negativo<br>· norte: $y$ positivo · sur: $y$ negativo.<br>"3 km al oeste y 2 km al norte" es el vector $(-3, 2)$.</div>
      <div class="box alert"><b>Ojo con el signo al restar</b> $1 - (-2) = 1 + 2 = 3$. Restar un negativo es sumar.</div>
      </div></div>` },
    { t: 'Errores típicos y resumen', b: r`
      <table><thead><tr><th>Error</th><th>Así no</th><th>Así sí</th></tr></thead><tbody>
      <tr><td>Dar vuelta el par</td><td>3 a la derecha y 5 arriba $= (5, 3)$</td><td>$(3, 5)$: primero la $x$</td></tr>
      <tr><td>Restar al revés</td><td>$\overrightarrow{AB} = A - B$</td><td>$\overrightarrow{AB} = B - A$ (final menos inicial)</td></tr>
      <tr><td>Sumar los puntos</td><td>$\overrightarrow{AB} = A + B$</td><td>se restan, no se suman</td></tr>
      <tr><td>Olvidar la escala de la cuadrícula</td><td>contar cuadros cuando cada uno vale 2</td><td>multiplica los cuadros por lo que vale cada uno</td></tr>
      <tr><td>Confundir trasladar con restar</td><td>$P' = P - \vec{v}$</td><td>$P' = P + \vec{v}$</td></tr>
      <tr><td>Magnitud como suma</td><td>$|(6, 8)| = 6 + 8 = 14$</td><td>$\sqrt{6^2 + 8^2} = 10$</td></tr></tbody></table>
      <div class="box" style="margin-top:14px"><b>Método PAES</b> 1. Lee bien cada punto: primero $x$, después $y$. 2. Vector entre puntos: final menos inicial. 3. Trasladar: suma el vector. 4. Si te dan la imagen, resta el vector. 5. Comprueba: el punto original más el vector debe dar la imagen.</div>` }
  ],
  example: {
    src: 'PAES Invierno 2026, adaptada',
    enun: r`<p>Un barco que inicia un recorrido realiza los siguientes movimientos, en este orden:</p><p>4 kilómetros al oeste<br>6 kilómetros al norte<br>7 kilómetros al este<br>9 kilómetros al sur<br>5 kilómetros al oeste</p><p>¿Cuál es la ubicación final del barco con respecto a su ubicación inicial?</p>`,
    alts: ['2 kilómetros al este y 3 kilómetros al norte', '16 kilómetros al oeste y 15 kilómetros al sur', '2 kilómetros al oeste y 3 kilómetros al sur', '3 kilómetros al oeste y 2 kilómetros al sur'], ok: 2,
    sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Dónde termina el barco respecto de donde partió. Cada movimiento es un vector; el desplazamiento total es la suma de todos.</p><p><b>Paso 2. Escribe cada movimiento como vector</b> (este y norte positivos; oeste y sur negativos): $(-4, 0)$, $(0, 6)$, $(7, 0)$, $(0, -9)$ y $(-5, 0)$.</p><p><b>Paso 3. Suma lo horizontal.</b> $-4 + 7 - 5 = -2$: 2 km hacia el oeste.</p><p><b>Paso 4. Suma lo vertical.</b> $6 - 9 = -3$: 3 km hacia el sur.</p><p><b>Respuesta:</b> 2 kilómetros al oeste y 3 kilómetros al sur, o sea el vector $(-2, -3)$.</p><div class="qfig"><img class="tikz" src="paes/m1/fig/tra_barco.svg" alt="Recorrido del barco en una cuadrícula: 4 km al oeste, 6 al norte, 7 al este, 9 al sur y 5 al oeste; la flecha naranja une el inicio con el final, 2 km al oeste y 3 km al sur"></div><p><b>Comprobación:</b> en la cuadrícula, la flecha naranja que va del inicio al final avanza 2 cuadros a la izquierda y baja 3. ✔</p><p><b>¿Por qué no las otras?</b> "2 al este y 3 al norte" tiene los números bien, pero con los sentidos al revés. "16 al oeste y 15 al sur" suma todos los kilómetros sin fijarse en el sentido: $4 + 7 + 5 = 16$ y $6 + 9 = 15$; los movimientos al este descuentan a los del oeste. "3 al oeste y 2 al sur" intercambia lo horizontal con lo vertical.</p>`,
    conc: 'Convierte cada movimiento en un vector con signo y suma por separado lo horizontal y lo vertical.'
  },
  bank: [
    { enun: r`<p>En el plano cartesiano de la figura se representan los puntos $P$, $Q$, $R$ y $S$.</p><p>¿Cuál de ellos tiene coordenadas $(-3, 2)$?</p>`,
      fig: { type: 'img', src: 'paes/m1/fig/tra_v_puntos.svg', alt: 'Plano cartesiano con cuatro puntos: P en (2, -3), Q en (-3, 2), R en (3, -2) y S en (-2, 3)' },
      alts: ['El punto $P$', 'El punto $Q$', 'El punto $R$', 'El punto $S$'], ok: 1,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El punto que está en $x = -3$, $y = 2$.</p><p><b>Paso 2. Primero la x.</b> $-3$: desde el origen, 3 unidades a la izquierda.</p><p><b>Paso 3. Después la y.</b> $2$: 2 unidades hacia arriba. Llegamos al punto $Q$.</p><p><b>Respuesta:</b> el punto $Q$.</p><p><b>Comprobación:</b> desde $Q$, bajando en vertical llegas al $-3$ del eje X y yendo en horizontal llegas al 2 del eje Y. ✔</p><p><b>¿Por qué no las otras?</b> $P$ es $(2, -3)$: tiene los números con el orden y los signos cambiados. $R$ es $(3, -2)$: los dos signos al revés. $S$ es $(-2, 3)$: el par dado vuelta, leyendo primero la altura.</p>`, conc: 'En (x, y) va primero lo horizontal y después lo vertical, cada uno con su signo.' },
    { enun: r`<p>El punto $P(a, b)$ está ubicado en el cuarto cuadrante del plano cartesiano.</p><p>¿En qué cuadrante está ubicado el punto $Q(-a, b)$?</p>`,
      alts: ['En el primer cuadrante', 'En el segundo cuadrante', 'En el tercer cuadrante', 'En el cuarto cuadrante'], ok: 2,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El cuadrante de $Q$. Para eso necesitamos los signos de sus coordenadas.</p><p><b>Paso 2. Signos de P.</b> En el cuarto cuadrante, $x$ es positivo y $y$ negativo: $a &gt; 0$ y $b &lt; 0$.</p><p><b>Paso 3. Signos de Q.</b> Primera coordenada: $-a$. Si $a$ es positivo, $-a$ es negativo. Segunda coordenada: $b$, que es negativo.</p><p><b>Paso 4.</b> $(-, -)$ corresponde al tercer cuadrante.</p><p><b>Respuesta:</b> en el tercer cuadrante.</p><p><b>Comprobación con números:</b> $P(2, -5)$ está en el cuarto cuadrante; $Q(-2, -5)$ está abajo a la izquierda, en el tercero. ✔</p><p><b>¿Por qué no las otras?</b> Primero sale de cambiar el signo de las dos coordenadas. Segundo sale de pensar que $b$ es positivo. Cuarto es donde está $P$: olvida que $-a$ cambia el signo de la $x$.</p>`, conc: 'Escribe los signos de cada coordenada; un menos delante de una letra le cambia el signo.' },
    { enun: r`<p>En el plano cartesiano de la figura se representa el vector $\overrightarrow{AB}$.</p><p>¿Cuáles son las coordenadas de $\overrightarrow{AB}$?</p>`,
      fig: { type: 'img', src: 'paes/m1/fig/tra_v_ab.svg', alt: 'Vector que parte en A(-2, 1) y termina en B(3, 4)' },
      alts: ['$(1, 5)$', '$(-5, -3)$', '$(3, 5)$', '$(5, 3)$'], ok: 3,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El desplazamiento que lleva de $A$ a $B$. Se calcula como el punto final menos el inicial.</p><p><b>Paso 2. Lee los puntos.</b> $A(-2, 1)$ y $B(3, 4)$.</p><p><b>Paso 3. Horizontal.</b> $3 - (-2) = 3 + 2 = 5$.</p><p><b>Paso 4. Vertical.</b> $4 - 1 = 3$.</p><p><b>Respuesta:</b> $\overrightarrow{AB} = (5, 3)$.</p><p><b>Comprobación:</b> $A + (5, 3) = (-2 + 5, 1 + 3) = (3, 4) = B$. ✔ En la cuadrícula, de $A$ a $B$ hay 5 cuadros a la derecha y 3 hacia arriba.</p><p><b>¿Por qué no las otras?</b> $(1, 5)$ suma los puntos en vez de restarlos: $(-2 + 3, 1 + 4)$. $(-5, -3)$ resta al revés, inicio menos final: es $\overrightarrow{BA}$. $(3, 5)$ tiene los números bien, pero el par dado vuelta.</p>`, conc: 'El vector de A a B es B menos A: final menos inicial.' },
    { enun: r`<p>En el plano cartesiano se representa una figura y la figura obtenida al trasladarla:</p><p>¿Cuáles son las coordenadas del vector de traslación?</p>`, src: 'PAES Invierno 2026, adaptada',
      fig: { type: 'img', src: 'paes/m1/fig/tra_v_casa_traslacion.svg', alt: 'Cuadrícula: figura original con forma de casa, con vértices (2, 9), (6, 9), (6, 12), (4, 14) y (2, 12); figura trasladada con vértices (13, 3), (17, 3), (17, 6), (15, 8) y (13, 6)' },
      alts: ['$(-11, 6)$', '$(11, -6)$', '$(11, 6)$', '$(-11, -6)$'], ok: 1,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El vector que lleva la figura original a la trasladada. Basta con seguir un vértice y su imagen.</p><p><b>Paso 2. Elige un vértice.</b> El vértice de abajo a la izquierda de la original está en $(2, 9)$. Su imagen, el de abajo a la izquierda de la trasladada, está en $(13, 3)$.</p><p><b>Paso 3. Final menos inicial.</b> $x$: $13 - 2 = 11$. $y$: $3 - 9 = -6$.</p><p><b>Respuesta:</b> $(11, -6)$.</p><p><b>Comprobación con otro vértice:</b> la punta del techo va de $(4, 14)$ a $(15, 8)$: $15 - 4 = 11$ y $8 - 14 = -6$. ✔ La figura se movió a la derecha (positivo) y hacia abajo (negativo).</p><p><b>¿Por qué no las otras?</b> $(-11, 6)$ resta al revés, como si la figura trasladada fuera la original. $(11, 6)$ y $(-11, -6)$ equivocan uno de los signos: la figura se mueve a la derecha y baja.</p>`, conc: 'Sigue un vértice y su imagen: vector = imagen menos original.' },
    { enun: r`<p>En la cuadrícula de la figura se representa el plano de un videojuego. En ella se ubican un tesoro y los pies de una persona, ambos al centro de sus casillas. El lado de cada casilla mide 2 unidades.</p><p>¿Cuál de los siguientes vectores lleva a la persona sobre la casilla del tesoro?</p>`, src: 'PAES Regular 2026, adaptada',
      fig: { type: 'img', src: 'paes/m1/fig/tra_v_videojuego.svg', alt: 'Cuadrícula de 7 por 7 casillas de 2 unidades de lado; los pies están en la casilla 1 de izquierda a derecha y 5 de abajo hacia arriba; el tesoro está en la casilla 6 de izquierda a derecha y 2 de abajo hacia arriba' },
      alts: ['$(5, -3)$', '$(-10, 6)$', '$(10, -6)$', '$(6, -10)$'], ok: 2,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El desplazamiento de la persona al tesoro, en unidades, no en casillas.</p><p><b>Paso 2. Cuenta casillas.</b> De la columna de los pies (la 1.ª) a la del tesoro (la 6.ª) hay 5 casillas hacia la derecha. De la fila de los pies (la 5.ª desde abajo) a la del tesoro (la 2.ª) hay 3 casillas hacia abajo.</p><p><b>Paso 3. En casillas.</b> $(5, -3)$: a la derecha es positivo y hacia abajo, negativo.</p><p><b>Paso 4. Pasa a unidades.</b> Cada casilla mide 2: $(5\cdot 2, -3\cdot 2) = (10, -6)$.</p><p><b>Respuesta:</b> $(10, -6)$.</p><p><b>Comprobación:</b> los pies están en el punto $(1, 9)$ y el tesoro en $(11, 3)$; $(11 - 1, 3 - 9) = (10, -6)$. ✔</p><p><b>¿Por qué no las otras?</b> $(5, -3)$ cuenta casillas y olvida que cada una mide 2 unidades. $(-10, 6)$ va del tesoro a la persona. $(6, -10)$ intercambia lo horizontal con lo vertical.</p>`, conc: 'Cuenta cuadros, ponles signo y multiplica por lo que mide cada cuadro.' },
    { enun: r`<p>Considera los vectores $\vec{u}$ y $\vec{v}$ representados en el plano cartesiano.</p><p>¿Cuál de las siguientes afirmaciones es verdadera respecto de los vectores del gráfico?</p>`, src: 'PAES Regular 2026, adaptada',
      fig: { type: 'img', src: 'paes/m1/fig/tra_v_uv.svg', alt: 'Vector u que va de (-1, 4) a (-5, 2) y vector v que va de (1, 1) a (5, 3)' },
      alts: ['Tienen distinta dirección.', 'Tienen distinta magnitud.', 'Están en el semieje positivo del eje X.', 'Tienen distinto sentido.'], ok: 3,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Comparar magnitud, dirección y sentido. Lo más fácil es calcular las coordenadas de cada vector.</p><p><b>Paso 2. Vector u.</b> Va de $(-1, 4)$ a $(-5, 2)$: $(-5 - (-1), 2 - 4) = (-4, -2)$.</p><p><b>Paso 3. Vector v.</b> Va de $(1, 1)$ a $(5, 3)$: $(5 - 1, 3 - 1) = (4, 2)$.</p><p><b>Paso 4. Compara.</b> $\vec{u} = -\vec{v}$: son opuestos. Tienen la misma inclinación (misma dirección) y el mismo largo (misma magnitud), pero $\vec{u}$ apunta hacia abajo a la izquierda y $\vec{v}$ hacia arriba a la derecha: <b>distinto sentido</b>.</p><p><b>Respuesta:</b> tienen distinto sentido.</p><p><b>Comprobación de la magnitud:</b> las dos miden $\sqrt{4^2 + 2^2} = \sqrt{20}$. ✔</p><p><b>¿Por qué no las otras?</b> Distinta dirección es falso: las dos flechas son paralelas. Distinta magnitud es falso: las dos miden $\sqrt{20}$. Ninguno está sobre el eje X: $\vec{u}$ está a la izquierda del eje Y y ninguno está sobre la recta $y = 0$.</p>`, conc: 'Dirección es la inclinación; sentido es hacia dónde apunta la flecha.' },
    { enun: r`<p>En el plano cartesiano de la figura se representan los vectores $\vec{u}$ y $\vec{v}$, que parten en el origen.</p><p>¿Cuáles son las coordenadas del vector $\vec{u} + \vec{v}$?</p>`,
      fig: { type: 'img', src: 'paes/m1/fig/tra_v_suma.svg', alt: 'Vector u desde el origen hasta (3, -1) y vector v desde el origen hasta (-5, 4)' },
      alts: ['$(-2, 3)$', '$(8, -5)$', '$(2, -3)$', '$(-15, -4)$'], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> La suma de los vectores. Primero leemos sus coordenadas: como parten en el origen, son las de la punta.</p><p><b>Paso 2. Lee.</b> $\vec{u} = (3, -1)$ y $\vec{v} = (-5, 4)$.</p><p><b>Paso 3. Suma por coordenadas.</b> $x$: $3 + (-5) = -2$. $y$: $-1 + 4 = 3$.</p><p><b>Respuesta:</b> $(-2, 3)$.</p><p><b>Comprobación:</b> si pones $\vec{v}$ a continuación de $\vec{u}$, partes en $(3, -1)$, vas 5 a la izquierda y 4 arriba y llegas a $(-2, 3)$. ✔</p><p><b>¿Por qué no las otras?</b> $(8, -5)$ es $\vec{u} - \vec{v}$. $(2, -3)$ es el opuesto de la suma: tiene los signos cambiados. $(-15, -4)$ multiplica las coordenadas en vez de sumarlas.</p>`, conc: 'Para sumar vectores, suma las x entre sí y las y entre sí.' },
    { enun: r`<p>El punto $P(-4, 2)$ se traslada según el vector $\vec{v} = (6, -5)$.</p><p>¿Cuáles son las coordenadas de la imagen de $P$?</p>`,
      alts: ['$(-10, 7)$', '$(2, 7)$', '$(-24, -10)$', '$(2, -3)$'], ok: 3,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El punto al que llega $P$. Trasladar es sumar el vector.</p><p><b>Paso 2. x.</b> $-4 + 6 = 2$.</p><p><b>Paso 3. y.</b> $2 + (-5) = -3$.</p><p><b>Respuesta:</b> $P' = (2, -3)$.</p><p><b>Comprobación:</b> de $P'$ a $P$ hay $(-4 - 2, 2 - (-3)) = (-6, 5)$, el opuesto de $\vec{v}$. ✔</p><p><b>¿Por qué no las otras?</b> $(-10, 7)$ resta el vector: $P - \vec{v}$. $(2, 7)$ suma bien la $x$ pero en la $y$ resta el $-5$: $2 - (-5) = 7$. $(-24, -10)$ multiplica las coordenadas.</p>`, conc: 'Trasladar un punto es sumarle el vector, coordenada a coordenada.' },
    { enun: r`<p>Al trasladar un punto $P$ según el vector $\vec{v} = (4, -3)$ se obtiene el punto $Q(1, -2)$.</p><p>¿Cuáles son las coordenadas de $P$?</p>`,
      alts: ['$(5, -5)$', '$(-3, 1)$', '$(3, -1)$', '$(-3, -5)$'], ok: 1,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El punto original. Si $P + \vec{v} = Q$, entonces $P = Q - \vec{v}$: deshacemos el movimiento.</p><p><b>Paso 2. x.</b> $1 - 4 = -3$.</p><p><b>Paso 3. y.</b> $-2 - (-3) = -2 + 3 = 1$.</p><p><b>Respuesta:</b> $P(-3, 1)$.</p><p><b>Comprobación:</b> $(-3, 1) + (4, -3) = (1, -2) = Q$. ✔</p><p><b>¿Por qué no las otras?</b> $(5, -5)$ suma el vector a $Q$, como si $Q$ fuera el punto original. $(3, -1)$ resta al revés: $\vec{v} - Q$. $(-3, -5)$ olvida que restar $-3$ es sumar 3: $-2 - 3 = -5$.</p>`, conc: 'Si conoces la imagen, resta el vector para volver al punto original.' },
    { enun: r`<p>En un plano cartesiano, el norte apunta en el sentido positivo del eje Y y el este, en el sentido positivo del eje X. Cada unidad equivale a 1 metro.</p><p>Un dron parte del punto $(-1, 2)$ y hace los siguientes movimientos: 3 metros al norte, 5 metros al este, 7 metros al sur y 2 metros al oeste.</p><p>¿En qué punto termina el dron?</p>`,
      alts: ['$(3, -4)$', '$(-4, 6)$', '$(2, -2)$', '$(6, 12)$'], ok: 2,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El punto final. Sumamos al punto de partida todos los movimientos.</p><p><b>Paso 2. Movimientos como vectores.</b> Norte $(0, 3)$, este $(5, 0)$, sur $(0, -7)$, oeste $(-2, 0)$.</p><p><b>Paso 3. Desplazamiento total.</b> $x$: $5 - 2 = 3$. $y$: $3 - 7 = -4$. Total: $(3, -4)$.</p><p><b>Paso 4. Súmalo al punto de partida.</b> $(-1 + 3, 2 + (-4)) = (2, -2)$.</p><p><b>Respuesta:</b> $(2, -2)$.</p><p><b>Comprobación paso a paso:</b> $(-1, 2) \to (-1, 5) \to (4, 5) \to (4, -2) \to (2, -2)$. ✔</p><p><b>¿Por qué no las otras?</b> $(3, -4)$ es solo el desplazamiento: olvida que el dron no partió del origen. $(-4, 6)$ cambia los sentidos (toma el sur como positivo y el este como negativo). $(6, 12)$ suma todos los metros sin signo.</p>`, conc: 'Punto final = punto de partida + suma de todos los desplazamientos.' },
    { enun: r`<p>A un punto del plano se le aplica una traslación según el vector $(2, -3)$ y, a continuación, otra traslación según el vector $(-5, 1)$.</p><p>¿Según cuál vector hay que trasladar el punto para obtener el mismo resultado con una sola traslación?</p>`,
      alts: ['$(-3, -2)$', '$(7, -4)$', '$(-10, -3)$', '$(3, 2)$'], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Un solo vector que haga lo mismo que los dos seguidos. Dos traslaciones seguidas equivalen a trasladar según la suma de los vectores.</p><p><b>Paso 2. Suma.</b> $x$: $2 + (-5) = -3$. $y$: $-3 + 1 = -2$.</p><p><b>Respuesta:</b> $(-3, -2)$.</p><p><b>Comprobación con un punto:</b> $(0, 0) \to (2, -3) \to (2 - 5, -3 + 1) = (-3, -2)$. Y trasladando $(0, 0)$ según $(-3, -2)$ se llega al mismo lugar. ✔</p><p><b>¿Por qué no las otras?</b> $(7, -4)$ resta los vectores. $(-10, -3)$ los multiplica coordenada a coordenada. $(3, 2)$ es el opuesto de la suma: deshace el movimiento.</p>`, conc: 'Dos traslaciones seguidas = una traslación con la suma de los vectores.' },
    { enun: r`<p>El triángulo $ABC$ de la figura se traslada según el vector $\vec{v} = (-3, 4)$.</p><p>¿Cuáles son las coordenadas de la imagen del vértice $C$?</p>`,
      fig: { type: 'img', src: 'paes/m1/fig/tra_v_triangulo.svg', alt: 'Triángulo de vértices A(-3, -2), B(1, -3) y C(2, -1)' },
      alts: ['$(5, -5)$', '$(-3, 4)$', '$(-6, -4)$', '$(-1, 3)$'], ok: 3,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Dónde queda $C$ después de la traslación: $C' = C + \vec{v}$.</p><p><b>Paso 2. Lee C.</b> En la figura, $C(2, -1)$.</p><p><b>Paso 3. Suma.</b> $x$: $2 + (-3) = -1$. $y$: $-1 + 4 = 3$.</p><p><b>Respuesta:</b> $C'(-1, 3)$.</p><p><b>Comprobación:</b> de $C$ a $C'$: $(-1 - 2, 3 - (-1)) = (-3, 4) = \vec{v}$. ✔</p><p><b>¿Por qué no las otras?</b> $(5, -5)$ resta el vector en vez de sumarlo. $(-3, 4)$ es el vector, no la imagen. $(-6, -4)$ multiplica coordenadas.</p>`, conc: 'Cada vértice de la figura se mueve sumándole el mismo vector.' },
    { enun: r`<p>Sean los puntos $A(1, 1)$ y $B(7, 9)$.</p><p>¿Cuál es la magnitud del vector $\overrightarrow{AB}$?</p>`,
      alts: ['$14$', '$100$', '$10$', r`$\sqrt{14}$`], ok: 2,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El largo de la flecha de $A$ a $B$. Primero el vector, después Pitágoras.</p><p><b>Paso 2. Vector.</b> $\overrightarrow{AB} = (7 - 1, 9 - 1) = (6, 8)$.</p><p><b>Paso 3. Pitágoras.</b> La flecha es la hipotenusa de un triángulo rectángulo de catetos 6 y 8: $\sqrt{6^2 + 8^2} = \sqrt{36 + 64} = \sqrt{100} = 10$.</p><p><b>Respuesta:</b> $10$.</p><p><b>Comprobación:</b> $6^2 + 8^2 = 100 = 10^2$. ✔</p><p><b>¿Por qué no las otras?</b> $14$ suma los catetos: $6 + 8$. Un camino en escalera es más largo que la flecha. $100$ olvida sacar la raíz. $\sqrt{14}$ suma los catetos sin elevarlos al cuadrado.</p>`, conc: 'Magnitud de (a, b): raíz de a² + b².' },
    { enun: r`<p>El punto $P(3, -2)$ se traslada según el vector $\vec{v} = (a, 5)$ y su imagen queda sobre el eje Y.</p><p>¿Cuál es el valor de $a$?</p>`,
      alts: ['$-3$', '$3$', '$-5$', '$0$'], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El valor de $a$. Un punto sobre el eje Y tiene su primera coordenada igual a 0.</p><p><b>Paso 2. Imagen.</b> $P' = (3 + a, -2 + 5) = (3 + a, 3)$.</p><p><b>Paso 3. Plantea.</b> $3 + a = 0$, así que $a = -3$.</p><p><b>Respuesta:</b> $a = -3$.</p><p><b>Comprobación:</b> $(3, -2) + (-3, 5) = (0, 3)$, que está sobre el eje Y. ✔</p><p><b>¿Por qué no las otras?</b> $3$ deja la imagen en $(6, 3)$, lejos del eje. $-5$ confunde las coordenadas. $0$ deja la imagen en $(3, 3)$: no se movió en horizontal.</p>`, conc: 'Sobre el eje Y la x vale 0; sobre el eje X la y vale 0.' },
    { enun: r`<p>En un plano cartesiano se proyecta la sombra de una casa, como se representa a continuación:</p><p>¿Cuál de los siguientes puntos pertenece a la sombra de la casa?</p>`, src: 'PAES Invierno 2027, adaptada',
      fig: { type: 'img', src: 'paes/m1/fig/tra_v_sombra_casa.svg', alt: 'Sombra gris con forma de casa en el plano: base de (-3, -2) a (3, -2), paredes hasta (-3, 2) y (3, 2) y punta del techo en (0, 5)' },
      alts: ['$(2, 4)$', '$(4, 1)$', '$(-1, 3)$', '$(1, -3)$'], ok: 2,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El punto que cae dentro de la sombra. Ubicamos cada punto: primero la $x$, después la $y$.</p><p><b>Paso 2. (2, 4).</b> 2 a la derecha y 4 arriba. A esa distancia del centro, el techo llega solo hasta la altura 3: el punto queda fuera, sobre el techo.</p><p><b>Paso 3. (4, 1).</b> La sombra llega solo hasta $x = 3$: queda fuera, a la derecha.</p><p><b>Paso 4. (−1, 3).</b> 1 a la izquierda y 3 arriba. A esa distancia del centro, el techo llega hasta la altura 4: el punto queda dentro.</p><p><b>Paso 5. (1, −3).</b> La base de la sombra está en $y = -2$: queda fuera, por debajo.</p><p><b>Respuesta:</b> $(-1, 3)$.</p><p><b>¿Por qué no las otras?</b> Las otras tres quedan fuera, como vimos. Un error común es leer $(-1, 3)$ al revés, como $(3, -1)$, o confundir $(1, -3)$ con $(-1, 3)$.</p>`, conc: 'Ubica cada punto con cuidado: x horizontal primero, y vertical después.' },
    { enun: r`<p>Sean los puntos $A(2, -1)$ y $B(-3, 4)$.</p><p>¿Cuál(es) de las siguientes afirmaciones es (son) verdadera(s)?</p><p>I) $\overrightarrow{AB} = (-5, 5)$<br>II) $\overrightarrow{BA} = (5, -5)$<br>III) $\overrightarrow{AB} = \overrightarrow{BA}$</p>`,
      alts: ['Solo I y II', 'Solo I', 'Solo III', 'I, II y III'], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Revisar cada afirmación. Recuerda: final menos inicial.</p><p><b>Paso 2. Afirmación I.</b> $\overrightarrow{AB} = B - A = (-3 - 2, 4 - (-1)) = (-5, 5)$. <b>Verdadera.</b></p><p><b>Paso 3. Afirmación II.</b> $\overrightarrow{BA} = A - B = (2 - (-3), -1 - 4) = (5, -5)$. <b>Verdadera.</b></p><p><b>Paso 4. Afirmación III.</b> $(-5, 5)$ y $(5, -5)$ no son iguales: son opuestos, apuntan en sentidos contrarios. <b>Falsa.</b></p><p><b>Respuesta:</b> Solo I y II.</p><p><b>¿Por qué no las otras?</b> "Solo I" deja fuera II, que también es verdadera. "Solo III" e "I, II y III" incluyen III, que es falsa.</p>`, conc: 'AB y BA tienen igual magnitud y dirección, pero sentido contrario: son opuestos.' },
    { enun: r`<p>Sean los vectores $\vec{u} = (1, -2)$ y $\vec{v} = (3, 1)$.</p><p>¿Cuáles son las coordenadas del vector $2\vec{u} - \vec{v}$?</p>`,
      alts: ['$(5, -3)$', '$(-1, -5)$', '$(-2, -3)$', '$(-1, -3)$'], ok: 1,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Primero duplicar $\vec{u}$ y después restarle $\vec{v}$.</p><p><b>Paso 2. Duplica.</b> $2\vec{u} = (2\cdot 1, 2\cdot(-2)) = (2, -4)$.</p><p><b>Paso 3. Resta.</b> $(2 - 3, -4 - 1) = (-1, -5)$.</p><p><b>Respuesta:</b> $(-1, -5)$.</p><p><b>Comprobación:</b> $(-1, -5) + \vec{v} = (-1 + 3, -5 + 1) = (2, -4) = 2\vec{u}$. ✔</p><p><b>¿Por qué no las otras?</b> $(5, -3)$ suma $\vec{v}$ en vez de restarlo. $(-2, -3)$ olvida multiplicar por 2: es $\vec{u} - \vec{v}$. $(-1, -3)$ multiplica por 2 solo la primera coordenada.</p>`, conc: 'El número multiplica a las dos coordenadas; después se resta coordenada a coordenada.' },
    { enun: r`<p>En el plano cartesiano de la figura se representan tres vértices, $A$, $B$ y $C$, del paralelogramo $ABCD$.</p><p>¿Cuáles son las coordenadas del vértice $D$?</p>`,
      fig: { type: 'img', src: 'paes/m1/fig/tra_v_paralelogramo.svg', alt: 'Puntos A(1, 1), B(5, 2) y C(6, 5) unidos por los segmentos AB y BC' },
      alts: ['$(10, 6)$', '$(2, 4)$', '$(0, -2)$', '$(4, 1)$'], ok: 1,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El cuarto vértice. En un paralelogramo, los lados opuestos son paralelos y de igual largo: el desplazamiento de $B$ a $C$ es el mismo que el de $A$ a $D$.</p><p><b>Paso 2. Vector de B a C.</b> $C - B = (6 - 5, 5 - 2) = (1, 3)$.</p><p><b>Paso 3. Trasládalo desde A.</b> $D = A + (1, 3) = (1 + 1, 1 + 3) = (2, 4)$.</p><p><b>Respuesta:</b> $D(2, 4)$.</p><p><b>Comprobación:</b> $\overrightarrow{DC} = (6 - 2, 5 - 4) = (4, 1)$ y $\overrightarrow{AB} = (5 - 1, 2 - 1) = (4, 1)$: lados opuestos iguales. ✔</p><p><b>¿Por qué no las otras?</b> $(10, 6)$ es $B + C - A$: forma otro paralelogramo, con los vértices en otro orden. $(0, -2)$ es $A + B - C$. $(4, 1)$ es el vector $\overrightarrow{AB}$, no un punto.</p>`, conc: 'En un paralelogramo ABCD, el vector de A a D es igual al de B a C.' }
  ]
},

{
  id: 'geo_traslacion_reflexion', unit: 'Unidad 3 · Transformaciones isométricas', icon: '🪞',
  title: 'Traslación y reflexión',
  desc: 'Paso a paso: qué es una transformación isométrica, cómo trasladar una figura, cómo reflejarla respecto de los ejes, de rectas como x = a o y = b y de la recta y = x, qué se conserva y cómo encadenar dos transformaciones.',
  slides: [
    { t: 'Transformaciones isométricas', b: r`
      <div class="cols"><div>
      <p>Una <b>transformación isométrica</b> mueve una figura sin deformarla: la imagen tiene <b>la misma forma y el mismo tamaño</b> que la original. "Isométrica" significa "de igual medida".</p>
      <p>Hay tres tipos:</p>
      <p>· <b>Traslación</b>: desliza la figura en línea recta, según un vector.<br>· <b>Reflexión</b>: la refleja como en un espejo, respecto de una recta (o de un punto).<br>· <b>Rotación</b>: la gira en torno a un punto.</p>
      <p>A cada punto $A$ de la figura le corresponde un punto de la imagen, que se escribe $A'$ y se lee "A prima".</p>
      </div><div>
      <table><thead><tr><th>¿Qué se conserva?</th><th>Traslación</th><th>Reflexión</th><th>Rotación</th></tr></thead><tbody>
      <tr><td>Longitudes de los lados</td><td>sí</td><td>sí</td><td>sí</td></tr>
      <tr><td>Medida de los ángulos</td><td>sí</td><td>sí</td><td>sí</td></tr>
      <tr><td>Perímetro y área</td><td>sí</td><td>sí</td><td>sí</td></tr>
      <tr><td>Orientación (sentido de recorrido de los vértices)</td><td>sí</td><td><b>no</b>, se invierte</td><td>sí</td></tr></tbody></table>
      <div class="box"><b>La pista de la orientación</b> En un espejo, tu mano derecha se ve como izquierda. Por eso la reflexión es la única que deja la figura "dada vuelta".</div>
      </div></div>` },
    { t: 'Traslación de una figura', b: r`
      <div class="cols"><div>
      <p>Para trasladar una figura según un vector $\vec{v}$, se traslada <b>cada vértice</b> con el mismo vector y se unen las imágenes.</p>
      <p><b>Ejemplo.</b> Triángulo $A(-5, 1)$, $B(-2, 1)$, $C(-4, 4)$ y $\vec{v} = (6, -3)$: 6 a la derecha y 3 hacia abajo.</p>
      <p><b>Paso 1.</b> $A' = (-5 + 6, 1 - 3) = (1, -2)$.</p>
      <p><b>Paso 2.</b> $B' = (-2 + 6, 1 - 3) = (4, -2)$.</p>
      <p><b>Paso 3.</b> $C' = (-4 + 6, 4 - 3) = (2, 1)$.</p>
      <p>Las flechas segmentadas que unen cada vértice con su imagen son todas iguales: paralelas y del mismo largo.</p>
      </div><div>
      <div class="qfig"><img class="tikz" src="paes/m1/fig/tra_tras_triangulo.svg" alt="Triángulo ABC con A(-5, 1), B(-2, 1) y C(-4, 4) y su trasladado A'(1, -2), B'(4, -2) y C'(2, 1) según el vector (6, -3)"></div>
      <div class="box"><b>Regla</b> Traslación según $(a, b)$: $(x, y) \to (x + a, y + b)$. La figura no gira ni se da vuelta: solo cambia de lugar.</div>
      </div></div>` },
    { t: 'Reflexión respecto de los ejes', b: r`
      <div class="cols"><div>
      <p>En una reflexión, cada punto y su imagen quedan <b>a la misma distancia del eje de reflexión</b>, uno a cada lado, en una línea perpendicular al eje.</p>
      <p><b>Respecto del eje X</b> (el espejo es horizontal): la $x$ queda igual y la $y$ cambia de signo.<br>$(x, y) \to (x, -y)$. Ejemplo: $(3, 5) \to (3, -5)$.</p>
      <p><b>Respecto del eje Y</b> (el espejo es vertical): la $y$ queda igual y la $x$ cambia de signo.<br>$(x, y) \to (-x, y)$. Ejemplo: $(3, 5) \to (-3, 5)$.</p>
      <p>Mira la letra F del dibujo: sus reflejos quedan "al revés", como en un espejo.</p>
      </div><div>
      <div class="qfig"><img class="tikz" src="paes/m1/fig/tra_refl_ejes.svg" alt="Una figura con forma de letra F en el primer cuadrante, su reflejo respecto del eje Y en el segundo cuadrante y su reflejo respecto del eje X en el cuarto cuadrante"></div>
      <div class="box alert"><b>Para no confundirte</b> Respecto del eje X cambia la $y$; respecto del eje Y cambia la $x$. La coordenada que cambia es la que <b>no</b> lleva el nombre del eje. Comprueba con el dibujo: reflejar respecto del eje X manda la figura hacia abajo.</div>
      </div></div>` },
    { t: 'Reflexión respecto de las rectas x = a e y = b', b: r`
      <div class="cols"><div>
      <p>Cuando el espejo es otra recta vertical u horizontal, cuenta la <b>distancia</b> del punto a la recta y pasa la misma distancia al otro lado.</p>
      <p><b>Ejemplo.</b> Refleja $B(1, 1)$ respecto de la recta $x = 3$.</p>
      <p><b>Paso 1.</b> De $x = 1$ a la recta $x = 3$ hay 2 unidades.</p>
      <p><b>Paso 2.</b> Pasa 2 unidades más allá de la recta: $3 + 2 = 5$.</p>
      <p><b>Paso 3.</b> La altura no cambia, porque la recta es vertical: $B' = (5, 1)$.</p>
      <p><b>Fórmulas.</b> Respecto de $x = a$: $(x, y) \to (2a - x, y)$. Respecto de $y = b$: $(x, y) \to (x, 2b - y)$. Con $B$: $2\cdot 3 - 1 = 5$. ✔</p>
      </div><div>
      <div class="qfig"><img class="tikz" src="paes/m1/fig/tra_refl_recta.svg" alt="Triángulo A(-1, 1), B(1, 1), C(1, 4) y su reflejo respecto de la recta x = 3: A'(7, 1), B'(5, 1), C'(5, 4); B y B' están a 2 unidades de la recta"></div>
      <div class="box"><b>La recta es el punto medio</b> El eje queda justo al medio entre un punto y su imagen: el promedio de $1$ y $5$ es $3$. Así puedes encontrar el eje si te dan el punto y su imagen.</div>
      </div></div>` },
    { t: 'Reflexión respecto de y = x y respecto del origen', b: r`
      <div class="cols"><div>
      <p><b>Respecto de la recta y = x</b> (la diagonal que pasa por $(1, 1)$, $(2, 2)$…): las coordenadas <b>se intercambian</b>.<br>$(x, y) \to (y, x)$. Ejemplos: $P(4, 1) \to P'(1, 4)$ y $Q(-2, 3) \to Q'(3, -2)$.</p>
      <p><b>Respecto del origen</b> (reflexión respecto de un punto): las dos coordenadas cambian de signo.<br>$(x, y) \to (-x, -y)$. Ejemplo: $(4, 1) \to (-4, -1)$. Es lo mismo que reflejar respecto del eje X y después respecto del eje Y, y lo mismo que girar $180^\circ$ en torno al origen.</p>
      </div><div>
      <div class="qfig"><img class="tikz" src="paes/m1/fig/tra_refl_yx.svg" alt="Recta y = x; el punto P(4, 1) y su reflejo P'(1, 4); el punto Q(-2, 3) y su reflejo Q'(3, -2)"></div>
      <table><thead><tr><th>Reflexión respecto de</th><th>Regla</th></tr></thead><tbody>
      <tr><td>eje X</td><td>$(x, y) \to (x, -y)$</td></tr>
      <tr><td>eje Y</td><td>$(x, y) \to (-x, y)$</td></tr>
      <tr><td>recta $x = a$</td><td>$(x, y) \to (2a - x, y)$</td></tr>
      <tr><td>recta $y = b$</td><td>$(x, y) \to (x, 2b - y)$</td></tr>
      <tr><td>recta $y = x$</td><td>$(x, y) \to (y, x)$</td></tr>
      <tr><td>origen</td><td>$(x, y) \to (-x, -y)$</td></tr></tbody></table>
      </div></div>` },
    { t: 'Dos transformaciones seguidas', b: r`
      <div class="cols"><div>
      <p>Cuando se aplican dos transformaciones, se hace la primera y a su resultado se le aplica la segunda. <b>El orden importa.</b></p>
      <p><b>Ejemplo.</b> $P(2, 3)$: reflexión respecto del eje X y luego traslación según $(1, 4)$.</p>
      <p><b>Paso 1.</b> Reflexión: $(2, 3) \to (2, -3)$.</p>
      <p><b>Paso 2.</b> Traslación: $(2 + 1, -3 + 4) = (3, 1)$.</p>
      <p><b>En otro orden</b> da otra cosa: trasladar primero da $(3, 7)$ y reflejar después da $(3, -7)$.</p>
      <p><b>Leer una regla.</b> Si la imagen de $(x, y)$ es $(x + 1, 4 - y)$, eso es "cambiar el signo de la $y$" (reflexión respecto del eje X) y después "sumar $(1, 4)$" (traslación). Para usarla, reemplaza: la imagen de $(5, -2)$ es $(5 + 1, 4 - (-2)) = (6, 6)$.</p>
      </div><div>
      <div class="box"><b>Dos reflexiones</b><br>· Respecto del mismo eje dos veces: el punto vuelve a su lugar.<br>· Respecto de dos rectas paralelas: equivale a una traslación del doble de la distancia entre las rectas.<br>· Respecto del eje X y luego del eje Y: equivale a la reflexión respecto del origen.</div>
      <div class="box alert"><b>Doblar papel es reflejar</b> Si doblas una hoja y la perforas, al abrirla aparece la perforación reflejada respecto de la línea del doblez.</div>
      </div></div>` },
    { t: 'Errores típicos y resumen', b: r`
      <table><thead><tr><th>Error</th><th>Así no</th><th>Así sí</th></tr></thead><tbody>
      <tr><td>Equivocar el eje</td><td>respecto del eje X: $(3, 5) \to (-3, 5)$</td><td>$(3, -5)$: cambia la $y$</td></tr>
      <tr><td>Reflejar respecto de $x = a$ como si fuera el eje Y</td><td>$(1, 1)$ respecto de $x = 3$: $(-1, 1)$</td><td>$(2\cdot 3 - 1, 1) = (5, 1)$</td></tr>
      <tr><td>Respecto de $y = x$ cambiar signos</td><td>$(4, -1) \to (1, -4)$</td><td>solo se intercambian: $(-1, 4)$</td></tr>
      <tr><td>Cambiar el orden</td><td>trasladar primero si piden reflejar primero</td><td>sigue el orden del enunciado</td></tr>
      <tr><td>Creer que la reflexión es una traslación</td><td>la imagen está "dada vuelta" y dices traslación</td><td>si la orientación se invierte, hubo reflexión</td></tr></tbody></table>
      <div class="box" style="margin-top:14px"><b>Método PAES</b> 1. Identifica la transformación y su eje o vector. 2. Aplícala a uno o dos vértices con la regla. 3. Comprueba en el dibujo: en una reflexión, el eje queda al medio entre el punto y su imagen. 4. Si son dos transformaciones, respeta el orden.</div>` }
  ],
  example: {
    src: 'PAES Invierno 2026, adaptada',
    enun: r`<p>A una figura se le aplica una reflexión y luego una traslación. La imagen del vértice $(x, y)$ es $(x - 3, 4 - y)$.</p><p>A otra figura se le aplican las mismas transformaciones isométricas y en el mismo orden.</p><p>Si $(-2, -5)$ es un vértice de esta figura, ¿cuáles son las coordenadas de la imagen de este vértice?</p>`,
    alts: ['$(-5, -1)$', '$(5, 9)$', '$(-5, 9)$', '$(-5, -9)$'], ok: 2,
    sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> La imagen de $(-2, -5)$. La regla ya está dada: basta reemplazar $x = -2$ e $y = -5$ en $(x - 3, 4 - y)$.</p><p><b>Paso 2. Primera coordenada.</b> $x - 3 = -2 - 3 = -5$.</p><p><b>Paso 3. Segunda coordenada.</b> $4 - y = 4 - (-5) = 4 + 5 = 9$.</p><p><b>Respuesta:</b> $(-5, 9)$.</p><p><b>Comprobación por pasos:</b> la regla es una reflexión respecto del eje X, $(x, y) \to (x, -y)$, seguida de una traslación según $(-3, 4)$. Reflejamos: $(-2, -5) \to (-2, 5)$. Trasladamos: $(-2 - 3, 5 + 4) = (-5, 9)$. ✔</p><p><b>¿Por qué no las otras?</b> $(-5, -1)$ calcula $4 + y$ en vez de $4 - y$: $4 + (-5) = -1$. $(5, 9)$ cambia el signo de la $x$: hace $-(-2) + 3$. $(-5, -9)$ se equivoca con el menos: escribe $4 - (-5)$ como $-(4 + 5)$.</p>`,
    conc: 'Si te dan la regla de la transformación, reemplaza con cuidado los signos.'
  },
  bank: [
    { enun: r`<p>El triángulo $ABC$ de la figura se refleja respecto del eje Y.</p><p>¿Cuáles son las coordenadas de la imagen del vértice $B$?</p>`,
      fig: { type: 'img', src: 'paes/m1/fig/tra_r_triangulo.svg', alt: 'Triángulo de vértices A(1, 1), B(4, 2) y C(2, 5)' },
      alts: ['$(4, -2)$', '$(-4, -2)$', '$(-4, 2)$', '$(2, 4)$'], ok: 2,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Dónde queda $B$ al reflejarlo respecto del eje Y, el eje vertical.</p><p><b>Paso 2. Lee B.</b> $B(4, 2)$.</p><p><b>Paso 3. Aplica la regla.</b> Respecto del eje Y, la altura se mantiene y la $x$ cambia de signo: $(x, y) \to (-x, y)$. Queda $B'(-4, 2)$.</p><p><b>Respuesta:</b> $(-4, 2)$.</p><p><b>Comprobación:</b> $B$ está 4 unidades a la derecha del eje Y; $B'$ está 4 unidades a la izquierda, a la misma altura. ✔</p><p><b>¿Por qué no las otras?</b> $(4, -2)$ refleja respecto del eje X. $(-4, -2)$ refleja respecto del origen: cambia los dos signos. $(2, 4)$ refleja respecto de la recta $y = x$: intercambia las coordenadas.</p>`, conc: 'Respecto del eje Y cambia el signo de la x; la altura no cambia.' },
    { enun: r`<p>En el plano cartesiano de la figura se representan el punto $P$ y la recta de ecuación $x = 2$.</p><p>¿Cuáles son las coordenadas de la imagen de $P$ al reflejarlo respecto de esa recta?</p>`,
      fig: { type: 'img', src: 'paes/m1/fig/tra_r_recta_x2.svg', alt: 'Punto P en (-1, 3) y recta vertical x = 2 dibujada en línea segmentada' },
      alts: ['$(5, 3)$', '$(1, 3)$', '$(-1, 1)$', '$(-5, 3)$'], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El reflejo de $P(-1, 3)$ respecto de la recta vertical $x = 2$.</p><p><b>Paso 2. Distancia a la recta.</b> De $x = -1$ a $x = 2$ hay $2 - (-1) = 3$ unidades.</p><p><b>Paso 3. Pasa al otro lado.</b> 3 unidades a la derecha de la recta: $2 + 3 = 5$.</p><p><b>Paso 4. La altura no cambia.</b> $P' = (5, 3)$.</p><p><b>Respuesta:</b> $(5, 3)$.</p><p><b>Comprobación con la fórmula:</b> $(2\cdot 2 - (-1), 3) = (4 + 1, 3) = (5, 3)$. Y la recta queda al medio: $\dfrac{-1 + 5}{2} = 2$. ✔</p><p><b>¿Por qué no las otras?</b> $(1, 3)$ refleja respecto del eje Y, no respecto de $x = 2$. $(-1, 1)$ refleja respecto de la recta horizontal $y = 2$. $(-5, 3)$ se mueve 3 unidades más hacia la izquierda, alejándose de la recta en vez de cruzarla.</p>`, conc: 'Mide la distancia del punto a la recta y pasa la misma distancia al otro lado.' },
    { enun: r`<p>El punto $A(4, -1)$ se refleja respecto de la recta de ecuación $y = x$.</p><p>¿Cuáles son las coordenadas de su imagen?</p>`,
      alts: ['$(1, -4)$', '$(-4, 1)$', '$(4, 1)$', '$(-1, 4)$'], ok: 3,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El reflejo respecto de la diagonal $y = x$. Esa reflexión intercambia las coordenadas: $(x, y) \to (y, x)$.</p><p><b>Paso 2. Intercambia.</b> $(4, -1) \to (-1, 4)$. Los signos acompañan a cada número.</p><p><b>Respuesta:</b> $(-1, 4)$.</p><p><b>Comprobación:</b> el punto medio entre $A$ y su imagen es $\left(\dfrac{4 - 1}{2}, \dfrac{-1 + 4}{2}\right) = (1{,}5;\ 1{,}5)$, que está sobre la recta $y = x$. ✔</p><p><b>¿Por qué no las otras?</b> $(1, -4)$ intercambia y además cambia los dos signos: es la reflexión respecto de la recta $y = -x$. $(-4, 1)$ es la reflexión respecto del origen. $(4, 1)$ es la reflexión respecto del eje X.</p>`, conc: 'Respecto de y = x solo se intercambian las coordenadas, con su signo.' },
    { enun: r`<p>En el plano cartesiano de la figura adjunta se representan los puntos cardinales y una flecha negra que apunta al noreste (NE).</p><p>¿Cuál de las siguientes transformaciones isométricas, aplicada a la flecha negra, permite obtener una flecha que apunte al noroeste (NO)?</p>`, src: 'PAES Regular 2026, adaptada',
      fig: { type: 'img', src: 'paes/m1/fig/tra_flecha_cardinal.svg', alt: 'Plano con los puntos cardinales: norte en el eje Y positivo, este en el eje X positivo, y las diagonales NE, NO, SE y SO. Una flecha negra va desde cerca del origen hasta el punto (3, 3), apuntando al noreste' },
      alts: ['Una reflexión respecto del eje X.', 'Una reflexión respecto del eje Y.', 'Una reflexión respecto de la recta $y = x$.', 'Una reflexión respecto del origen.'], ok: 1,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> La transformación que hace que la flecha apunte al noroeste: hacia arriba y a la izquierda. La flecha apunta en la dirección $(1, 1)$: derecha y arriba.</p><p><b>Paso 2. Eje X.</b> $(x, y) \to (x, -y)$: $(1, 1) \to (1, -1)$, derecha y abajo. Apunta al sureste.</p><p><b>Paso 3. Eje Y.</b> $(x, y) \to (-x, y)$: $(1, 1) \to (-1, 1)$, izquierda y arriba. Apunta al <b>noroeste</b>. ✔</p><p><b>Paso 4. Recta y = x.</b> $(1, 1) \to (1, 1)$: la flecha está sobre esa recta y queda igual. Sigue apuntando al noreste.</p><p><b>Paso 5. Origen.</b> $(1, 1) \to (-1, -1)$: apunta al suroeste.</p><p><b>Respuesta:</b> una reflexión respecto del eje Y.</p><p><b>¿Por qué no las otras?</b> Como vimos, dejan la flecha apuntando al sureste, al noreste y al suroeste.</p>`, conc: 'Para ver hacia dónde apunta una flecha transformada, aplica la regla a su dirección.' },
    { enun: r`<p>Al punto $P(2, 3)$ se le aplica una reflexión respecto del eje X y, a continuación, una traslación según el vector $(-4, 1)$.</p><p>¿Cuáles son las coordenadas de la imagen final de $P$?</p>`,
      alts: ['$(-2, -4)$', '$(6, -2)$', '$(-2, -2)$', '$(-2, 4)$'], ok: 2,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El punto final después de dos transformaciones, en el orden indicado.</p><p><b>Paso 2. Reflexión respecto del eje X.</b> Cambia el signo de la $y$: $(2, 3) \to (2, -3)$.</p><p><b>Paso 3. Traslación.</b> $(2 - 4, -3 + 1) = (-2, -2)$.</p><p><b>Respuesta:</b> $(-2, -2)$.</p><p><b>Comprobación hacia atrás:</b> $(-2, -2) - (-4, 1) = (2, -3)$, y su reflejo respecto del eje X es $(2, 3) = P$. ✔</p><p><b>¿Por qué no las otras?</b> $(-2, -4)$ hace las transformaciones en el orden contrario: traslada a $(-2, 4)$ y después refleja. $(6, -2)$ resta el vector en vez de sumarlo. $(-2, 4)$ olvida la reflexión: solo traslada.</p>`, conc: 'En dos transformaciones seguidas, aplica la primera y al resultado la segunda.' },
    { enun: r`<p>En el plano cartesiano de la figura, la figura $G$ es la imagen de la figura $F$ mediante una transformación isométrica.</p><p>¿Cuál es esa transformación?</p>`,
      fig: { type: 'img', src: 'paes/m1/fig/tra_r_identifica.svg', alt: 'Figura F con forma de letra F entre x = -4 y x = -1; figura G con la misma forma pero invertida, como en un espejo, entre x = 3 y x = 6, a la misma altura' },
      alts: ['Una reflexión respecto del eje Y.', 'Una traslación según el vector $(7, 0)$.', 'Una reflexión respecto de la recta $x = 1$.', 'Una reflexión respecto de la recta $x = 2$.'], ok: 2,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> La transformación que lleva $F$ a $G$. Primero miramos la orientación: $G$ está "dada vuelta" respecto de $F$ (las barras de la F apuntan hacia el otro lado). Eso indica una reflexión respecto de una recta vertical.</p><p><b>Paso 2. Busca la recta.</b> $F$ va de $x = -4$ a $x = -1$ y $G$ de $x = 3$ a $x = 6$. El borde derecho de $F$ ($x = -1$) se refleja en el borde izquierdo de $G$ ($x = 3$). La recta queda al medio: $\dfrac{-1 + 3}{2} = 1$.</p><p><b>Respuesta:</b> una reflexión respecto de la recta $x = 1$.</p><p><b>Comprobación con otro borde:</b> el borde izquierdo de $F$, $x = -4$, se refleja en $2\cdot 1 - (-4) = 6$, el borde derecho de $G$. ✔</p><p><b>¿Por qué no las otras?</b> Respecto del eje Y, $F$ quedaría entre $x = 1$ y $x = 4$. La traslación según $(7, 0)$ deja la figura entre $x = 3$ y $x = 6$, pero sin darla vuelta: la F seguiría mirando hacia el mismo lado. Respecto de $x = 2$, quedaría entre $x = 5$ y $x = 8$.</p>`, conc: 'Si la imagen está dada vuelta, es una reflexión; el eje queda al medio entre la figura y su imagen.' },
    { enun: r`<p>A un triángulo se le aplica una reflexión respecto de una recta.</p><p>¿Cuál(es) de las siguientes características del triángulo se mantiene(n) en su imagen?</p><p>I) La medida de sus lados.<br>II) Su área.<br>III) El sentido en que se recorren sus vértices $A$, $B$ y $C$.</p>`,
      alts: ['Solo I', 'Solo I y II', 'Solo II y III', 'I, II y III'], ok: 1,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Qué se conserva en una reflexión, que es una transformación isométrica.</p><p><b>Paso 2. Afirmación I.</b> Las isometrías no cambian las longitudes: los lados miden lo mismo. <b>Se mantiene.</b></p><p><b>Paso 3. Afirmación II.</b> Si los lados y los ángulos son iguales, el triángulo es idéntico y su área no cambia. <b>Se mantiene.</b></p><p><b>Paso 4. Afirmación III.</b> Si en el original los vértices $A$, $B$, $C$ van en sentido antihorario, en el reflejo van en sentido horario, como en un espejo. <b>No se mantiene.</b></p><p><b>Respuesta:</b> Solo I y II.</p><p><b>¿Por qué no las otras?</b> "Solo I" olvida que el área también se conserva. "Solo II y III" e "I, II y III" incluyen III, que cambia en toda reflexión.</p>`, conc: 'La reflexión conserva medidas y área, pero invierte la orientación.' },
    { enun: r`<p>En la figura adjunta se representan los asientos de un teatro, cuya distribución es simétrica respecto de la línea segmentada. Los asientos ocupados están pintados.</p><p>¿Qué asiento libre debe ocuparse para que la distribución de los asientos ocupados sea simétrica respecto de la línea segmentada?</p>`, src: 'PAES Invierno 2027, adaptada',
      fig: { type: 'img', src: 'paes/m1/fig/tra_r_teatro.svg', alt: 'Cuatro filas de 8 asientos, A a D, con una línea segmentada entre los asientos 4 y 5. Ocupados: fila A asientos 2 y 7; fila B asiento 7; fila C asientos 3 y 6; fila D asientos 1 y 8' },
      alts: ['El asiento 1 de la fila B', 'El asiento 3 de la fila B', 'El asiento 2 de la fila C', 'El asiento 2 de la fila B'], ok: 3,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Que cada asiento ocupado tenga su reflejo ocupado. La línea está entre los asientos 4 y 5: el 1 se refleja en el 8, el 2 en el 7, el 3 en el 6 y el 4 en el 5 (los dos números suman 9).</p><p><b>Paso 2. Revisa cada fila.</b> Fila A: 2 y 7 ✔. Fila C: 3 y 6 ✔. Fila D: 1 y 8 ✔. Fila B: el 7 está ocupado, pero su reflejo, el 2, está libre.</p><p><b>Respuesta:</b> el asiento 2 de la fila B.</p><p><b>Comprobación:</b> el 7 está a 3 asientos de la línea hacia la derecha (5, 6, 7) y el 2 está a 3 asientos hacia la izquierda (4, 3, 2). ✔ Además, el reflejo no cambia de fila.</p><p><b>¿Por qué no las otras?</b> El asiento 1 se refleja en el 8, no en el 7. El asiento 3 se refleja en el 6. El asiento 2 de la fila C cambia de fila: una reflexión respecto de una línea vertical no cambia la fila.</p>`, conc: 'Respecto de una línea vertical, el reflejo queda en la misma fila y a la misma distancia de la línea.' },
    { enun: r`<p>El punto $A(2, 3)$ se refleja respecto de la recta de ecuación $y = -1$.</p><p>¿Cuáles son las coordenadas de su imagen?</p>`,
      alts: ['$(2, -3)$', '$(2, -5)$', '$(-4, 3)$', '$(2, -4)$'], ok: 1,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El reflejo de $A$ respecto de una recta horizontal. La $x$ no cambia; la $y$ pasa al otro lado de la recta.</p><p><b>Paso 2. Distancia a la recta.</b> De $y = 3$ a $y = -1$ hay $3 - (-1) = 4$ unidades.</p><p><b>Paso 3. Pasa al otro lado.</b> 4 unidades por debajo de la recta: $-1 - 4 = -5$.</p><p><b>Respuesta:</b> $(2, -5)$.</p><p><b>Comprobación con la fórmula:</b> $(2, 2\cdot(-1) - 3) = (2, -5)$. La recta queda al medio: $\dfrac{3 + (-5)}{2} = -1$. ✔</p><p><b>¿Por qué no las otras?</b> $(2, -3)$ refleja respecto del eje X. $(-4, 3)$ refleja respecto de la recta vertical $x = -1$. $(2, -4)$ resta la coordenada a la recta, $-1 - 3$, en vez de restar la distancia.</p>`, conc: 'Respecto de y = b: misma x, y la y pasa al otro lado a la misma distancia.' },
    { enun: r`<p>Al reflejar el punto $P(-3, 4)$ respecto de una recta vertical se obtiene el punto $P'(5, 4)$.</p><p>¿Cuál es la ecuación de esa recta?</p>`,
      alts: ['$x = 1$', '$x = 4$', '$x = 8$', '$y = 4$'], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El eje de reflexión. El eje queda justo al medio entre el punto y su imagen.</p><p><b>Paso 2. Punto medio de las x.</b> $\dfrac{-3 + 5}{2} = \dfrac{2}{2} = 1$.</p><p><b>Respuesta:</b> $x = 1$.</p><p><b>Comprobación:</b> de $-3$ a $1$ hay 4 unidades y de $1$ a $5$ también hay 4. ✔</p><p><b>¿Por qué no las otras?</b> $x = 4$ es la mitad de la distancia entre los puntos, no la ubicación de la recta. $x = 8$ es la distancia entre los puntos. $y = 4$ es una recta horizontal que pasa por los dos puntos: no puede ser el eje.</p>`, conc: 'El eje de reflexión pasa por el punto medio entre un punto y su imagen.' },
    { enun: r`<p>El cuadrilátero $ABCD$ de la figura se traslada de modo que el vértice $A$ llega al punto $A'$.</p><p>¿Cuáles son las coordenadas de la imagen del vértice $C$?</p>`,
      fig: { type: 'img', src: 'paes/m1/fig/tra_r_cuadrilatero.svg', alt: 'Cuadrilátero de vértices A(-4, -1), B(-1, -2), C(-1, 2) y D(-3, 2); punto A\' en (1, -3)' },
      alts: ['$(-6, 4)$', '$(5, -2)$', '$(1, -3)$', '$(4, 0)$'], ok: 3,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Dónde queda $C$. Primero averiguamos el vector de traslación con $A$ y $A'$.</p><p><b>Paso 2. Vector.</b> $A(-4, -1)$ y $A'(1, -3)$: $\vec{v} = (1 - (-4), -3 - (-1)) = (5, -2)$.</p><p><b>Paso 3. Traslada C.</b> $C(-1, 2)$: $C' = (-1 + 5, 2 - 2) = (4, 0)$.</p><p><b>Respuesta:</b> $(4, 0)$.</p><p><b>Comprobación:</b> de $C$ a $C'$ hay 5 a la derecha y 2 hacia abajo, igual que de $A$ a $A'$. ✔</p><p><b>¿Por qué no las otras?</b> $(-6, 4)$ resta el vector a $C$. $(5, -2)$ es el vector, no la imagen. $(1, -3)$ es $A'$, la imagen de otro vértice.</p>`, conc: 'Saca el vector con un vértice y su imagen, y súmalo a los demás vértices.' },
    { enun: r`<p>Un triángulo tiene 12 cm de perímetro y 6 cm² de área. Se le aplica una reflexión respecto de una recta y, a continuación, una traslación.</p><p>¿Cuáles son el perímetro y el área del triángulo obtenido?</p>`,
      alts: ['12 cm de perímetro y 6 cm² de área', '24 cm de perímetro y 12 cm² de área', '12 cm de perímetro y 12 cm² de área', '6 cm de perímetro y 3 cm² de área'], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Cómo cambian el perímetro y el área. La reflexión y la traslación son transformaciones isométricas: no cambian el tamaño.</p><p><b>Paso 2. Lados.</b> Cada lado mide lo mismo después de cada transformación, así que el perímetro sigue siendo 12 cm.</p><p><b>Paso 3. Área.</b> El triángulo es idéntico al original, solo cambió de lugar y quedó dado vuelta: el área sigue siendo 6 cm².</p><p><b>Respuesta:</b> 12 cm de perímetro y 6 cm² de área.</p><p><b>¿Por qué no las otras?</b> Duplicar o reducir a la mitad sale de pensar que cada transformación cambia el tamaño, o que "dos transformaciones" duplican la figura. Eso pasa en una ampliación (semejanza), no en una isometría.</p>`, conc: 'Las transformaciones isométricas no cambian ni el perímetro ni el área.' },
    { enun: r`<p>El punto $P(-2, 5)$ se refleja respecto del origen del plano cartesiano.</p><p>¿Cuáles son las coordenadas de su imagen?</p>`,
      alts: ['$(2, 5)$', '$(-2, -5)$', '$(5, -2)$', '$(2, -5)$'], ok: 3,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El reflejo respecto de un punto, el origen. El origen queda al medio entre $P$ y su imagen, así que las dos coordenadas cambian de signo: $(x, y) \to (-x, -y)$.</p><p><b>Paso 2. Aplica.</b> $(-2, 5) \to (2, -5)$.</p><p><b>Respuesta:</b> $(2, -5)$.</p><p><b>Comprobación:</b> el punto medio entre $(-2, 5)$ y $(2, -5)$ es $(0, 0)$. ✔</p><p><b>¿Por qué no las otras?</b> $(2, 5)$ refleja respecto del eje Y. $(-2, -5)$ refleja respecto del eje X. $(5, -2)$ intercambia las coordenadas: es otra transformación.</p>`, conc: 'Reflexión respecto del origen: cambian de signo las dos coordenadas.' },
    { enun: r`<p>Una transformación isométrica lleva cada punto $(x, y)$ del plano al punto $(x, 6 - y)$.</p><p>¿Cuál es esta transformación?</p>`,
      alts: ['Una reflexión respecto de la recta $y = 6$.', 'Una reflexión respecto de la recta $y = 3$.', 'Una traslación según el vector $(0, 6)$.', 'Una reflexión respecto del eje X.'], ok: 1,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Reconocer la transformación a partir de su regla. La $x$ no cambia y la $y$ se "da vuelta": suena a reflexión respecto de una recta horizontal.</p><p><b>Paso 2. Compara con la fórmula.</b> Respecto de $y = b$: $(x, y) \to (x, 2b - y)$. Aquí $2b = 6$, así que $b = 3$.</p><p><b>Respuesta:</b> una reflexión respecto de la recta $y = 3$.</p><p><b>Comprobación con un punto:</b> $(7, 1) \to (7, 5)$. El punto medio de las alturas es $\dfrac{1 + 5}{2} = 3$: la recta $y = 3$ queda al medio. ✔ Y los puntos de la recta no se mueven: $(0, 3) \to (0, 6 - 3) = (0, 3)$.</p><p><b>¿Por qué no las otras?</b> Respecto de $y = 6$, el punto $(7, 1)$ iría a $(7, 11)$. La traslación según $(0, 6)$ daría $(x, y + 6)$, sin dar vuelta la $y$. Respecto del eje X daría $(x, -y)$: le faltaría sumar 6.</p>`, conc: 'Respecto de y = b la regla es (x, 2b − y): el número de la regla es el doble de b.' },
    { enun: r`<p>El punto $P(0, 2)$ se refleja respecto de la recta $x = 1$ y, a continuación, la imagen obtenida se refleja respecto de la recta $x = 4$.</p><p>¿Cuáles son las coordenadas de la imagen final?</p>`,
      alts: ['$(2, 2)$', '$(8, 2)$', '$(6, 2)$', '$(-6, 2)$'], ok: 2,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El punto después de dos reflexiones, en el orden indicado.</p><p><b>Paso 2. Primera reflexión, x = 1.</b> $P$ está a 1 unidad a la izquierda de la recta; pasa a 1 unidad a la derecha: $(2, 2)$.</p><p><b>Paso 3. Segunda reflexión, x = 4.</b> $(2, 2)$ está a 2 unidades a la izquierda de la recta; pasa a 2 unidades a la derecha: $(6, 2)$.</p><p><b>Respuesta:</b> $(6, 2)$.</p><p><b>Comprobación:</b> dos reflexiones respecto de rectas paralelas equivalen a una traslación del doble de la distancia entre ellas: $2\cdot(4 - 1) = 6$. Y $(0, 2) + (6, 0) = (6, 2)$. ✔</p><p><b>¿Por qué no las otras?</b> $(2, 2)$ hace solo la primera reflexión. $(8, 2)$ refleja $P$ directamente respecto de $x = 4$, sin la primera. $(-6, 2)$ aplica las reflexiones en el orden contrario.</p>`, conc: 'Dos reflexiones respecto de rectas paralelas equivalen a una traslación.' },
    { enun: r`<p>Una hoja de papel rectangular se ubica en un plano cartesiano, con vértices en $(0, 0)$ y $(8, 6)$. Se dobla primero por la recta $x = 4$, llevando la mitad derecha sobre la izquierda, y luego por la recta $y = 3$, llevando la mitad de arriba sobre la de abajo. Con el papel doblado se hace una perforación en el punto $(1, 2)$, como se representa a continuación:</p><p>¿Cuál de los siguientes puntos corresponde a una de las perforaciones que tendrá el papel al extenderse?</p>`, src: 'PAES Invierno 2027, adaptada',
      fig: { type: 'img', src: 'paes/m1/fig/tra_r_papel.svg', alt: 'Hoja de 8 por 6 con las líneas de doblez x = 4 e y = 3; a la derecha, el papel doblado, de 4 por 3, con una perforación triangular en (1, 2)' },
      alts: ['$(7, 4)$', '$(5, 2)$', '$(1, 5)$', '$(7, 1)$'], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Dónde aparecen las perforaciones al desdoblar. Desdoblar es reflejar: cada perforación aparece también reflejada respecto de la línea de cada doblez.</p><p><b>Paso 2. Deshaz el segundo doblez (y = 3).</b> $(1, 2)$ está 1 unidad por debajo de la recta; su reflejo queda 1 unidad por encima: $(1, 4)$. Ahora hay perforaciones en $(1, 2)$ y $(1, 4)$.</p><p><b>Paso 3. Deshaz el primer doblez (x = 4).</b> Cada una se refleja respecto de $x = 4$: $(1, 2) \to (7, 2)$ y $(1, 4) \to (7, 4)$.</p><p><b>Paso 4. Perforaciones.</b> $(1, 2)$, $(1, 4)$, $(7, 2)$ y $(7, 4)$.</p><p><b>Respuesta:</b> $(7, 4)$.</p><p><b>¿Por qué no las otras?</b> $(5, 2)$ traslada 4 unidades en vez de reflejar: el reflejo de $x = 1$ respecto de $x = 4$ es $2\cdot 4 - 1 = 7$. $(1, 5)$ traslada 3 unidades hacia arriba en vez de reflejar. $(7, 1)$ refleja bien la $x$, pero calcula la $y$ como $3 - 2$, sin pasar al otro lado de la recta.</p>`, conc: 'Desdoblar un papel es reflejar respecto de la línea del doblez.' },
    { enun: r`<p>A un punto $P$ se le aplica una reflexión respecto del eje Y y, a continuación, una traslación según el vector $(3, -2)$, obteniéndose el punto $(1, 4)$.</p><p>¿Cuáles son las coordenadas de $P$?</p>`,
      alts: ['$(-2, 6)$', '$(2, 6)$', '$(-4, 2)$', '$(2, 2)$'], ok: 1,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El punto original. Deshacemos las transformaciones en orden inverso: primero la traslación y después la reflexión.</p><p><b>Paso 2. Deshaz la traslación.</b> Restamos el vector: $(1 - 3, 4 - (-2)) = (-2, 6)$.</p><p><b>Paso 3. Deshaz la reflexión.</b> Reflejar respecto del eje Y otra vez devuelve el punto: $(-2, 6) \to (2, 6)$.</p><p><b>Respuesta:</b> $P(2, 6)$.</p><p><b>Comprobación hacia adelante:</b> $(2, 6) \to (-2, 6) \to (-2 + 3, 6 - 2) = (1, 4)$. ✔</p><p><b>¿Por qué no las otras?</b> $(-2, 6)$ deshace solo la traslación y olvida la reflexión. $(-4, 2)$ deshace en el orden equivocado y suma el vector: $(1 + 3, 4 - 2) = (4, 2)$ y luego refleja. $(2, 2)$ aplica las transformaciones hacia adelante al punto final, en vez de deshacerlas.</p>`, conc: 'Para volver al original, deshaz las transformaciones en orden inverso.' },
    { enun: r`<p>¿Cuál(es) de las siguientes afirmaciones es (son) verdadera(s)?</p><p>I) Si un punto se refleja dos veces seguidas respecto del eje X, vuelve a su posición inicial.<br>II) Reflejar un punto respecto del eje X y luego respecto del eje Y es lo mismo que reflejarlo respecto del origen.<br>III) Una traslación invierte la orientación de una figura.</p>`,
      alts: ['Solo I', 'Solo II', 'Solo I y II', 'Solo II y III'], ok: 2,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Revisar cada afirmación. Probamos con un punto, por ejemplo $(3, 2)$.</p><p><b>Paso 2. Afirmación I.</b> $(3, 2) \to (3, -2) \to (3, 2)$. Vuelve. <b>Verdadera.</b></p><p><b>Paso 3. Afirmación II.</b> Eje X: $(3, 2) \to (3, -2)$. Eje Y: $(3, -2) \to (-3, -2)$. Respecto del origen: $(3, 2) \to (-3, -2)$. Es lo mismo. <b>Verdadera.</b></p><p><b>Paso 4. Afirmación III.</b> La traslación solo desliza la figura: no la gira ni la da vuelta. La que invierte la orientación es la reflexión. <b>Falsa.</b></p><p><b>Respuesta:</b> Solo I y II.</p><p><b>¿Por qué no las otras?</b> "Solo I" y "Solo II" dejan fuera una afirmación verdadera. "Solo II y III" incluye III, que es falsa.</p>`, conc: 'Pruébalo con un punto concreto: así revisas cualquier afirmación sobre transformaciones.' }
  ]
},

{
  id: 'geo_rotacion', unit: 'Unidad 3 · Transformaciones isométricas', icon: '🔄',
  title: 'Rotación',
  desc: 'Paso a paso: qué es una rotación, los sentidos horario y antihorario, las reglas para girar 90°, 180° y 270° en torno al origen, cómo rotar en torno a otro punto y cómo reconocer qué transformación lleva una figura a otra.',
  slides: [
    { t: '¿Qué es una rotación?', b: r`
      <div class="cols"><div>
      <p>Una <b>rotación</b> gira una figura en torno a un punto fijo, llamado <b>centro de rotación</b>. Para describirla se necesitan tres datos:</p>
      <p>· el <b>centro</b> (casi siempre el origen $O$);<br>· el <b>ángulo</b> (en la PAES: $90^\circ$, $180^\circ$ o $270^\circ$);<br>· el <b>sentido</b>: <b>horario</b> (como los punteros del reloj) o <b>antihorario</b> (al revés del reloj).</p>
      <p>En el dibujo, $P(4, 1)$ gira $90^\circ$ en sentido antihorario en torno a $O$ y llega a $P'(-1, 4)$. Los segmentos $OP$ y $OP'$ miden lo mismo y forman un ángulo recto.</p>
      </div><div>
      <div class="qfig"><img class="tikz" src="paes/m1/fig/tra_rot_concepto.svg" alt="El punto P(4, 1) gira 90 grados en sentido antihorario en torno al origen O y llega a P'(-1, 4)"></div>
      <div class="box"><b>Cada punto se mantiene a la misma distancia del centro</b> Por eso la rotación es isométrica: la figura no cambia de forma ni de tamaño, y tampoco se da vuelta como en un espejo.</div>
      </div></div>` },
    { t: 'Rotación de 90° en sentido antihorario', b: r`
      <div class="cols"><div>
      <p><b>Regla:</b> $(x, y) \to (-y, x)$. Se intercambian las coordenadas y la nueva primera coordenada cambia de signo.</p>
      <p><b>Ejemplo.</b> Triángulo $A(1, 1)$, $B(4, 1)$, $C(4, 3)$.</p>
      <p><b>Paso 1.</b> $A(1, 1) \to (-1, 1)$.</p>
      <p><b>Paso 2.</b> $B(4, 1) \to (-1, 4)$.</p>
      <p><b>Paso 3.</b> $C(4, 3) \to (-3, 4)$.</p>
      <p>El triángulo pasó del primer cuadrante al segundo: girar $90^\circ$ antihorario mueve los puntos al cuadrante siguiente, en el orden I → II → III → IV → I.</p>
      </div><div>
      <div class="qfig"><img class="tikz" src="paes/m1/fig/tra_rot90.svg" alt="Triángulo A(1, 1), B(4, 1), C(4, 3) en el primer cuadrante y su imagen A'(-1, 1), B'(-1, 4), C'(-3, 4) al rotarlo 90 grados en sentido antihorario en torno al origen"></div>
      <div class="box alert"><b>Comprueba con un punto fácil</b> $(1, 0)$, que está a la derecha del origen, al girar $90^\circ$ antihorario debe quedar arriba: $(1, 0) \to (-0, 1) = (0, 1)$. ✔ Si tu regla lo manda hacia abajo, giraste al revés.</div>
      </div></div>` },
    { t: 'Las reglas de 90°, 180° y 270°', b: r`
      <div class="cols"><div>
      <table><thead><tr><th>Rotación en torno al origen</th><th>Regla</th><th>$P(4, 2)$</th></tr></thead><tbody>
      <tr><td>$90^\circ$ antihorario</td><td>$(x, y) \to (-y, x)$</td><td>$(-2, 4)$</td></tr>
      <tr><td>$180^\circ$ (cualquier sentido)</td><td>$(x, y) \to (-x, -y)$</td><td>$(-4, -2)$</td></tr>
      <tr><td>$270^\circ$ antihorario $=$ $90^\circ$ horario</td><td>$(x, y) \to (y, -x)$</td><td>$(2, -4)$</td></tr>
      <tr><td>$360^\circ$</td><td>$(x, y) \to (x, y)$</td><td>$(4, 2)$</td></tr></tbody></table>
      <p><b>Ejemplo de 90° horario.</b> $P(-2, 5)$: se intercambian, $(5, -2)$, y la nueva segunda coordenada cambia de signo: $(5, 2)$.</p>
      </div><div>
      <div class="qfig"><img class="tikz" src="paes/m1/fig/tra_rot_tabla.svg" alt="El punto P(4, 2) y sus imágenes al rotarlo en torno al origen 90 grados (-2, 4), 180 grados (-4, -2) y 270 grados (2, -4), todas en sentido antihorario"></div>
      <div class="box"><b>Equivalencias</b> $270^\circ$ antihorario es lo mismo que $90^\circ$ horario (las dos vueltas suman $360^\circ$). $180^\circ$ da lo mismo en un sentido o en el otro, y es igual a la reflexión respecto del origen.</div>
      </div></div>` },
    { t: 'Trucos para no girar al revés', b: r`
      <div class="cols"><div>
      <p><b>Truco 1: los cuadrantes.</b> Con $90^\circ$ antihorario, un punto del cuadrante I pasa al II, uno del II al III, y así. Con $90^\circ$ horario, al revés: del I al IV. Con $180^\circ$, al cuadrante opuesto: del I al III.</p>
      <p><b>Truco 2: gira la hoja.</b> Dibuja el punto y gira el papel un cuarto de vuelta en el sentido pedido: donde queda el punto respecto de los ejes de la hoja sin girar, ahí está la imagen.</p>
      <p><b>Truco 3: el segmento al centro.</b> El segmento del centro al punto y el del centro a la imagen miden lo mismo y, si el giro es de $90^\circ$, forman un ángulo recto.</p>
      <p><b>Ejemplo.</b> $Q(-2, 3)$ está en el cuadrante II. Con $90^\circ$ antihorario debe ir al III: la regla da $(-3, -2)$, que está en el III. ✔</p>
      </div><div>
      <div class="box alert"><b>Antihorario es el sentido "positivo"</b> En matemática, si no se dice el sentido, se entiende antihorario. Pero en la PAES siempre lo indican: léelo con cuidado.</div>
      <div class="box"><b>Varias rotaciones seguidas</b> se suman: dos de $90^\circ$ antihorario son una de $180^\circ$; tres son una de $270^\circ$ antihorario, que equivale a $90^\circ$ horario; cuatro devuelven la figura a su lugar.</div>
      </div></div>` },
    { t: 'Rotar en torno a otro punto', b: r`
      <div class="cols"><div>
      <p>Si el centro no es el origen, usa tres pasos: <b>mira el punto desde el centro, gíralo y vuelve.</b></p>
      <p><b>Ejemplo.</b> Rota $P(5, 2)$ en $90^\circ$ antihorario en torno a $C(2, 1)$.</p>
      <p><b>Paso 1. Desde el centro.</b> $P - C = (5 - 2, 2 - 1) = (3, 1)$: $P$ está 3 a la derecha y 1 arriba de $C$.</p>
      <p><b>Paso 2. Gira.</b> $(3, 1) \to (-1, 3)$ con la regla de $90^\circ$ antihorario.</p>
      <p><b>Paso 3. Vuelve.</b> Súmale el centro: $(-1 + 2, 3 + 1) = (1, 4)$.</p>
      <p>$P' = (1, 4)$.</p>
      </div><div>
      <div class="qfig"><img class="tikz" src="paes/m1/fig/tra_rot_centro.svg" alt="Centro C(2, 1); el punto P(5, 2), que está 3 a la derecha y 1 arriba de C, gira 90 grados antihorario y llega a P'(1, 4), que está 1 a la izquierda y 3 arriba de C"></div>
      <div class="box alert"><b>No olvides volver</b> El error más común es quedarse con $(-1, 3)$, que es la posición respecto de $C$ y no respecto del origen.</div>
      <div class="box"><b>Con 180°</b> el centro queda al medio entre el punto y su imagen: $P' = 2C - P$.</div>
      </div></div>` },
    { t: '¿Qué transformación es?', b: r`
      <div class="cols"><div>
      <p>Para reconocer qué transformación lleva una figura $F$ a otra, fíjate en dos cosas:</p>
      <p><b>1. ¿Está dada vuelta?</b> Si la imagen se ve como en un espejo (la F mira hacia el otro lado), es una <b>reflexión</b>.</p>
      <p><b>2. Si no está dada vuelta, ¿está girada?</b> Si la figura apunta en otra dirección, es una <b>rotación</b>. Si apunta igual y solo cambió de lugar, es una <b>traslación</b>.</p>
      <p>Después confirma con un vértice: aplica la regla y revisa que caiga sobre su imagen.</p>
      </div><div>
      <div class="qfig"><img class="tikz" src="paes/m1/fig/tra_rot_identificar.svg" alt="Una figura con forma de F en el primer cuadrante; abajo, la misma F trasladada; a la izquierda, su reflexión respecto del eje Y, que se ve al revés; y en el tercer cuadrante, su rotación en 180 grados, cabeza abajo"></div>
      <div class="box"><b>Ojo con 180°</b> La F girada en $180^\circ$ queda cabeza abajo, pero no se ve como en un espejo: puedes leerla girando la hoja. La reflejada no se puede leer aunque gires la hoja.</div>
      </div></div>` },
    { t: 'Errores típicos y resumen', b: r`
      <table><thead><tr><th>Error</th><th>Así no</th><th>Así sí</th></tr></thead><tbody>
      <tr><td>Girar al revés</td><td>$90^\circ$ antihorario: $(4, 2) \to (2, -4)$</td><td>$(-2, 4)$; comprueba con el cuadrante</td></tr>
      <tr><td>Solo intercambiar</td><td>$90^\circ$: $(4, 2) \to (2, 4)$</td><td>eso es reflejar respecto de $y = x$</td></tr>
      <tr><td>Equivocar el signo al aplicar la regla</td><td>$(4, -1) \to (-1, 4)$ con $(-y, x)$</td><td>$-y = -(-1) = 1$: $(1, 4)$</td></tr>
      <tr><td>Olvidar el centro</td><td>girar en torno al origen cuando el centro es $C$</td><td>resta $C$, gira y suma $C$</td></tr>
      <tr><td>Confundir rotación de 180° con reflexión respecto de un eje</td><td>$180^\circ$: $(3, 2) \to (3, -2)$</td><td>$(-3, -2)$: cambian las dos</td></tr></tbody></table>
      <div class="box" style="margin-top:14px"><b>Método PAES</b> 1. Anota centro, ángulo y sentido. 2. Si el centro no es el origen, resta el centro. 3. Aplica la regla. 4. Suma el centro de vuelta. 5. Comprueba con el cuadrante: $90^\circ$ antihorario avanza un cuadrante en el orden I → II → III → IV.</div>` }
  ],
  example: {
    src: 'PAES Invierno 2027, adaptada',
    enun: r`<p>En el siguiente gráfico se representa una simulación bidimensional de una proteína con su grupo metilo, localizado en el punto $P(5, 3)$, con el objetivo de estudiar su desplazamiento.</p><div class="qfig"><img class="tikz" src="paes/m1/fig/tra_rot_proteina.svg" alt="Proteína representada como un grupo de círculos grises, con el grupo metilo en el punto P(5, 3)"></div><p>Dicha proteína con su grupo metilo es sometida a una rotación de $90^\circ$ en sentido antihorario con respecto al origen del sistema de coordenadas cartesianas.</p><p>¿Cuáles son las coordenadas del grupo metilo después de la rotación?</p>`,
    alts: ['$(3, -5)$', '$(-3, 5)$', '$(-5, -3)$', '$(5, -3)$'], ok: 1,
    sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Dónde queda el punto $P(5, 3)$ al girarlo $90^\circ$ en sentido antihorario en torno al origen.</p><p><b>Paso 2. Regla.</b> $90^\circ$ antihorario: $(x, y) \to (-y, x)$.</p><p><b>Paso 3. Aplica.</b> $x = 5$, $y = 3$: $(-3, 5)$.</p><p><b>Respuesta:</b> $(-3, 5)$.</p><div class="qfig"><img class="tikz" src="paes/m1/fig/tra_rot_proteina_sol.svg" alt="La proteína original con el grupo metilo en (5, 3) y la proteína rotada 90 grados antihorario, con el grupo metilo en (-3, 5)"></div><p><b>Comprobación:</b> $P$ estaba en el cuadrante I y la imagen está en el II, como corresponde a $90^\circ$ antihorario. Además, la distancia al origen se mantiene: $\sqrt{5^2 + 3^2} = \sqrt{34}$ y $\sqrt{(-3)^2 + 5^2} = \sqrt{34}$. ✔</p><p><b>¿Por qué no las otras?</b> $(3, -5)$ gira $90^\circ$ en sentido horario: queda en el cuadrante IV. $(-5, -3)$ gira $180^\circ$. $(5, -3)$ refleja respecto del eje X.</p>`,
    conc: '90° antihorario en torno al origen: (x, y) → (−y, x); revisa que avance un cuadrante.'
  },
  bank: [
    { enun: r`<p>El punto $P(4, -1)$ se rota en $90^\circ$ en sentido antihorario con centro en el origen.</p><p>¿Cuáles son las coordenadas de su imagen?</p>`,
      alts: ['$(-1, -4)$', '$(1, 4)$', '$(-4, 1)$', '$(-1, 4)$'], ok: 1,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> La imagen de $P$ al girarlo un cuarto de vuelta, al revés del reloj, en torno al origen.</p><p><b>Paso 2. Regla.</b> $(x, y) \to (-y, x)$.</p><p><b>Paso 3. Aplica con cuidado el signo.</b> $y = -1$, así que $-y = -(-1) = 1$. La segunda coordenada es $x = 4$. Queda $(1, 4)$.</p><p><b>Respuesta:</b> $(1, 4)$.</p><p><b>Comprobación con los cuadrantes:</b> $P$ está en el cuadrante IV; al girar $90^\circ$ antihorario pasa al I. $(1, 4)$ está en el I. ✔</p><p><b>¿Por qué no las otras?</b> $(-1, -4)$ gira en sentido horario: queda en el III. $(-4, 1)$ gira $180^\circ$. $(-1, 4)$ escribe $-y$ como $-1$ sin cambiarle el signo al $-1$.</p>`, conc: 'En (−y, x), si y es negativo, −y es positivo.' },
    { enun: r`<p>El triángulo $ABC$ de la figura se rota en $180^\circ$ con centro en el origen.</p><p>¿Cuáles son las coordenadas de la imagen del vértice $C$?</p>`,
      fig: { type: 'img', src: 'paes/m1/fig/tra_o_triangulo.svg', alt: 'Triángulo de vértices A(-4, 3), B(-2, 4) y C(-3, 2), en el segundo cuadrante' },
      alts: ['$(3, -2)$', '$(-3, -2)$', '$(3, 2)$', '$(-2, -3)$'], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Dónde queda $C$ tras media vuelta en torno al origen.</p><p><b>Paso 2. Lee C.</b> $C(-3, 2)$.</p><p><b>Paso 3. Regla de 180°.</b> Las dos coordenadas cambian de signo: $(x, y) \to (-x, -y)$. Queda $(3, -2)$.</p><p><b>Respuesta:</b> $(3, -2)$.</p><p><b>Comprobación:</b> el origen queda al medio entre $C$ y su imagen: $\left(\dfrac{-3 + 3}{2}, \dfrac{2 - 2}{2}\right) = (0, 0)$. ✔ Y pasa del cuadrante II al IV, el opuesto.</p><p><b>¿Por qué no las otras?</b> $(-3, -2)$ refleja respecto del eje X. $(3, 2)$ refleja respecto del eje Y. $(-2, -3)$ gira solo $90^\circ$ antihorario.</p>`, conc: 'Rotar 180° en torno al origen cambia el signo de las dos coordenadas.' },
    { enun: r`<p>El punto $P(-2, 5)$ se rota en $90^\circ$ en sentido horario con centro en el origen.</p><p>¿Cuáles son las coordenadas de su imagen?</p>`,
      alts: ['$(-5, -2)$', '$(2, -5)$', '$(5, 2)$', '$(5, -2)$'], ok: 2,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> La imagen de $P$ al girarlo un cuarto de vuelta en el sentido del reloj.</p><p><b>Paso 2. Regla de 90° horario.</b> $(x, y) \to (y, -x)$.</p><p><b>Paso 3. Aplica.</b> $y = 5$; $-x = -(-2) = 2$. Queda $(5, 2)$.</p><p><b>Respuesta:</b> $(5, 2)$.</p><p><b>Comprobación con los cuadrantes:</b> $P$ está en el II; girando en sentido horario pasa al I. $(5, 2)$ está en el I. ✔</p><p><b>¿Por qué no las otras?</b> $(-5, -2)$ gira en sentido antihorario: queda en el III. $(2, -5)$ gira $180^\circ$. $(5, -2)$ olvida que $-x = -(-2)$ es positivo.</p>`, conc: '90° horario: (x, y) → (y, −x); avanza un cuadrante hacia atrás (II → I).' },
    { enun: r`<p>Al rotar un punto $Q$ en $90^\circ$ en sentido antihorario con centro en el origen, se obtiene el punto $Q'(-3, 2)$.</p><p>¿Cuáles son las coordenadas de $Q$?</p>`,
      alts: ['$(-2, -3)$', '$(3, -2)$', '$(3, 2)$', '$(2, 3)$'], ok: 3,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El punto original. Para deshacer un giro de $90^\circ$ antihorario, giramos $Q'$ en $90^\circ$ en sentido horario.</p><p><b>Paso 2. Regla de 90° horario.</b> $(x, y) \to (y, -x)$.</p><p><b>Paso 3. Aplica a Q'(−3, 2).</b> $(2, -(-3)) = (2, 3)$.</p><p><b>Respuesta:</b> $Q(2, 3)$.</p><p><b>Comprobación hacia adelante:</b> $90^\circ$ antihorario a $(2, 3)$: $(-3, 2)$. ✔</p><p><b>¿Por qué no las otras?</b> $(-2, -3)$ vuelve a girar $Q'$ en sentido antihorario en vez de deshacer el giro. $(3, -2)$ gira $Q'$ en $180^\circ$. $(3, 2)$ solo le cambia el signo a la primera coordenada de $Q'$: es su reflejo respecto del eje Y.</p>`, conc: 'Para deshacer una rotación, gira el mismo ángulo en el sentido contrario.' },
    { enun: r`<p>En el plano cartesiano de la figura se representan los puntos $P$ y $C$.</p><p>Si $P$ se rota en $90^\circ$ en sentido antihorario con centro en $C$, ¿cuáles son las coordenadas de su imagen?</p>`,
      fig: { type: 'img', src: 'paes/m1/fig/tra_o_centro.svg', alt: 'Punto P en (6, 3) y punto C en (2, 1)' },
      alts: ['$(-3, 6)$', '$(4, -3)$', '$(0, 5)$', '$(-2, 4)$'], ok: 2,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Girar $P(6, 3)$ en torno a $C(2, 1)$, no en torno al origen. Usamos los tres pasos: restar el centro, girar y sumar el centro.</p><p><b>Paso 2. Desde el centro.</b> $P - C = (6 - 2, 3 - 1) = (4, 2)$.</p><p><b>Paso 3. Gira 90° antihorario.</b> $(4, 2) \to (-2, 4)$.</p><p><b>Paso 4. Vuelve.</b> $(-2 + 2, 4 + 1) = (0, 5)$.</p><p><b>Respuesta:</b> $(0, 5)$.</p><p><b>Comprobación:</b> desde $C$, $P$ está 4 a la derecha y 2 arriba; la imagen está 2 a la izquierda y 4 arriba. Las dos están a la misma distancia de $C$ y forman un ángulo recto. ✔</p><p><b>¿Por qué no las otras?</b> $(-3, 6)$ gira en torno al origen. $(4, -3)$ gira en torno a $C$, pero en sentido horario. $(-2, 4)$ olvida sumar el centro al final.</p>`, conc: 'Rotar en torno a C: resta C, gira con la regla y vuelve a sumar C.' },
    { enun: r`<p>En el plano cartesiano de la figura adjunta se representan los puntos cardinales y una flecha negra que apunta al noreste (NE).</p><p>¿En cuál de las siguientes opciones las transformaciones isométricas aplicadas a la flecha negra permiten que la imagen obtenida sea una flecha que apunta al sur?</p>`, src: 'PAES Regular 2026, adaptada',
      fig: { type: 'img', src: 'paes/m1/fig/tra_flecha_cardinal.svg', alt: 'Plano con los puntos cardinales: norte en el eje Y positivo, este en el eje X positivo, y las diagonales NE, NO, SE y SO. Una flecha negra va desde cerca del origen hasta el punto (3, 3), apuntando al noreste' },
      alts: ['Una reflexión con respecto al eje X y luego, una rotación en $45^\circ$ en sentido antihorario con centro en el origen.', 'Una rotación en $90^\circ$ en sentido horario con centro en el origen y luego, una reflexión con respecto al eje Y.', 'Una reflexión con respecto al origen del plano cartesiano y luego, una rotación en $45^\circ$ en sentido antihorario con centro en el origen.', 'Una traslación según el vector $(0, -3)$.'], ok: 2,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> La opción que deja la flecha apuntando al sur. Seguimos la dirección de la flecha en cada opción. Al noreste corresponde la dirección de $45^\circ$ (entre el este, $0^\circ$, y el norte, $90^\circ$); el sur es $270^\circ$.</p><p><b>Paso 2. Primera opción.</b> Reflejar respecto del eje X la manda al sureste ($-45^\circ$). Girar $45^\circ$ antihorario la deja en $0^\circ$: apunta al <b>este</b>.</p><p><b>Paso 3. Segunda opción.</b> Girar $90^\circ$ horario la manda al sureste. Reflejar respecto del eje Y la manda al <b>suroeste</b>.</p><p><b>Paso 4. Tercera opción.</b> Reflejar respecto del origen la da vuelta: apunta al suroeste ($225^\circ$). Girar $45^\circ$ antihorario: $225^\circ + 45^\circ = 270^\circ$, el <b>sur</b>. ✔</p><p><b>Paso 5. Cuarta opción.</b> Trasladar solo cambia el lugar: sigue apuntando al <b>noreste</b>.</p><p><b>Respuesta:</b> la reflexión respecto del origen y luego la rotación en $45^\circ$ en sentido antihorario.</p>`, conc: 'Sigue la dirección de la flecha paso a paso; la traslación nunca cambia hacia dónde apunta.' },
    { enun: r`<p>En el plano cartesiano de la figura, la figura $G$ es la imagen de la figura $F$ mediante una transformación isométrica.</p><p>¿Cuál es esa transformación?</p>`,
      fig: { type: 'img', src: 'paes/m1/fig/tra_o_identifica.svg', alt: 'Figura F con forma de letra F en el primer cuadrante, entre x = 1 y x = 4 y entre y = 1 e y = 5; figura G en el segundo cuadrante, entre x = -5 y x = -1 y entre y = 1 e y = 4, que es la F acostada' },
      alts: ['Una reflexión respecto del eje Y.', 'Una rotación en $90^\circ$ en sentido horario con centro en el origen.', 'Una traslación según el vector $(-6, 0)$.', 'Una rotación en $90^\circ$ en sentido antihorario con centro en el origen.'], ok: 3,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> La transformación que lleva $F$ a $G$. $G$ no está dada vuelta como en un espejo, pero está acostada: la figura giró un cuarto de vuelta.</p><p><b>Paso 2. Prueba con un vértice.</b> La esquina de abajo a la derecha del palo de la F está en $(2, 1)$. Con $90^\circ$ antihorario: $(2, 1) \to (-1, 2)$, que es un vértice de $G$. La esquina de arriba a la derecha de la barra superior, $(4, 5)$, va a $(-5, 4)$, que también es un vértice de $G$. ✔</p><p><b>Paso 3. Cuadrantes.</b> $F$ está en el cuadrante I y $G$ en el II: un cuarto de vuelta antihorario.</p><p><b>Respuesta:</b> una rotación en $90^\circ$ en sentido antihorario con centro en el origen.</p><p><b>¿Por qué no las otras?</b> La reflexión respecto del eje Y dejaría la F parada, vista como en un espejo. La rotación de $90^\circ$ horario llevaría $F$ al cuadrante IV. La traslación no gira la figura: la F seguiría parada.</p>`, conc: 'Si la imagen está girada y no dada vuelta, es una rotación; el cuadrante te dice el sentido.' },
    { enun: r`<p>A una figura se le aplican, una tras otra, tres rotaciones de $90^\circ$ en sentido antihorario, todas con centro en el origen.</p><p>¿A cuál de las siguientes transformaciones equivale lo anterior?</p>`,
      alts: ['Una rotación de 270° en sentido horario.', 'Una rotación de 90° en sentido horario.', 'Una reflexión respecto del origen.', 'Dejar la figura en su posición inicial.'], ok: 1,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Una transformación equivalente a las tres rotaciones juntas.</p><p><b>Paso 2. Suma los ángulos.</b> Rotaciones con el mismo centro se suman: $3\cdot 90^\circ = 270^\circ$ en sentido antihorario.</p><p><b>Paso 3. Mira la vuelta completa.</b> Girar $270^\circ$ antihorario deja la figura a $90^\circ$ de completar la vuelta, que es lo mismo que girar $90^\circ$ hacia el otro lado: $90^\circ$ en sentido horario.</p><p><b>Respuesta:</b> una rotación de $90^\circ$ en sentido horario.</p><p><b>Comprobación con un punto:</b> $(1, 0) \to (0, 1) \to (-1, 0) \to (0, -1)$. Y $90^\circ$ horario lleva $(1, 0)$ a $(0, -1)$. ✔</p><p><b>¿Por qué no las otras?</b> $270^\circ$ horario es lo mismo que $90^\circ$ antihorario: llevaría $(1, 0)$ a $(0, 1)$. La reflexión respecto del origen equivale a dos rotaciones de $90^\circ$, no a tres. Volver a la posición inicial requiere cuatro.</p>`, conc: '270° en un sentido equivale a 90° en el sentido contrario.' },
    { enun: r`<p>Helena dibujó en el cuadrado $ABCD$ la figura que se presenta a continuación, donde $O$ es el centro del cuadrado.</p><p>Si el cuadrado se rota en $90^\circ$ en sentido antihorario con centro en $O$, ¿en qué posición queda el vértice $A$?</p>`, src: 'PAES Invierno 2026, adaptada',
      fig: { type: 'img', src: 'paes/m1/fig/tra_o_cuadrado.svg', alt: 'Cuadrado ABCD con A abajo a la izquierda, B abajo a la derecha, C arriba a la derecha y D arriba a la izquierda; su centro O; una línea ondulada vertical cerca del lado BC' },
      alts: ['En la posición del vértice $B$', 'En la posición del vértice $D$', 'En la posición del vértice $C$', 'En la misma posición del vértice $A$'], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> A dónde llega la esquina $A$ al girar el cuadrado un cuarto de vuelta, al revés del reloj, en torno a su centro.</p><p><b>Paso 2. Ubica A respecto de O.</b> $A$ está abajo a la izquierda del centro.</p><p><b>Paso 3. Gira.</b> Al revés del reloj, lo que está abajo a la izquierda pasa a abajo a la derecha (como en los cuadrantes: III → IV). Ahí está $B$.</p><p><b>Comprobación con coordenadas:</b> pon $O$ en el origen y $A(-2, -2)$. Con $(x, y) \to (-y, x)$: $(2, -2)$, la esquina de abajo a la derecha, $B$. ✔</p><p><b>Respuesta:</b> en la posición del vértice $B$.</p><p><b>¿Por qué no las otras?</b> $D$ sale de girar en sentido horario. $C$ sale de girar $180^\circ$. Quedarse en $A$ solo pasa con un giro de $360^\circ$.</p>`, conc: 'Ubica el punto respecto del centro y gíralo como si el centro fuera el origen.' },
    { enun: r`<p>¿Cuál(es) de las siguientes afirmaciones es (son) verdadera(s)?</p><p>I) Rotar un punto en $180^\circ$ con centro en el origen es lo mismo que reflejarlo respecto del origen.<br>II) Rotar un punto en $180^\circ$ en sentido horario o en sentido antihorario, con el mismo centro, da la misma imagen.<br>III) Al rotar el punto $(1, 1)$ en $90^\circ$ con centro en el origen, la imagen es el mismo punto $(1, 1)$.</p>`,
      alts: ['Solo I', 'Solo I y II', 'Solo I y III', 'I, II y III'], ok: 1,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Revisar cada afirmación.</p><p><b>Paso 2. Afirmación I.</b> $180^\circ$: $(x, y) \to (-x, -y)$. Reflexión respecto del origen: $(x, y) \to (-x, -y)$. Son la misma regla. <b>Verdadera.</b></p><p><b>Paso 3. Afirmación II.</b> Media vuelta hacia un lado o hacia el otro deja el punto en el mismo lugar. Por ejemplo, $(1, 0)$ llega a $(-1, 0)$ por arriba o por abajo. <b>Verdadera.</b></p><p><b>Paso 4. Afirmación III.</b> Con $90^\circ$ antihorario, $(1, 1) \to (-1, 1)$; con $90^\circ$ horario, $(1, 1) \to (1, -1)$. En ningún caso queda en $(1, 1)$: el único punto que no se mueve al girar es el centro. <b>Falsa.</b></p><p><b>Respuesta:</b> Solo I y II.</p><p><b>¿Por qué no las otras?</b> "Solo I" deja fuera II. "Solo I y III" e "I, II y III" incluyen III, que es falsa. Ojo: $(1, 1)$ sí queda fijo al reflejarlo respecto de $y = x$, no al rotarlo.</p>`, conc: 'Rotar 180° es reflejar respecto del centro; al rotar, solo el centro queda fijo.' },
    { enun: r`<p>En la imagen se representa un reloj que marca las 10:00.</p><p>¿Cuántos grados y en qué sentido gira el minutero desde las 10:00 hasta las 10:20?</p>`,
      fig: { type: 'img', src: 'paes/m1/fig/tra_o_reloj.svg', alt: 'Reloj análogo que marca las 10 en punto: el minutero apunta al 12 y el horario al 10' },
      alts: ['120° en sentido horario', '120° en sentido antihorario', '20° en sentido horario', '60° en sentido horario'], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El ángulo y el sentido del giro del minutero en 20 minutos.</p><p><b>Paso 2. Sentido.</b> Los punteros del reloj giran en sentido horario (por eso se llama así).</p><p><b>Paso 3. Ángulo.</b> En 60 minutos el minutero da una vuelta completa, $360^\circ$. En 1 minuto gira $\dfrac{360^\circ}{60} = 6^\circ$. En 20 minutos: $20\cdot 6^\circ = 120^\circ$.</p><p><b>Respuesta:</b> $120^\circ$ en sentido horario.</p><p><b>Comprobación:</b> a las 10:20 el minutero apunta al 4. Del 12 al 4 hay 4 de las 12 marcas: $\dfrac{4}{12}$ de vuelta $= \dfrac{1}{3}\cdot 360^\circ = 120^\circ$. ✔</p><p><b>¿Por qué no las otras?</b> En sentido antihorario el reloj iría hacia atrás. $20^\circ$ confunde minutos con grados. $60^\circ$ es lo que gira en 10 minutos.</p>`, conc: 'El minutero gira 6° por minuto, en sentido horario.' },
    { enun: r`<p>El segmento $AB$, con $A(1, 2)$ y $B(4, 6)$, se rota en $90^\circ$ en sentido antihorario con centro en el origen, obteniéndose el segmento $A'B'$.</p><p>¿Cuáles son las coordenadas de $B'$?</p>`,
      alts: ['$(6, -4)$', '$(-6, 4)$', '$(-4, -6)$', '$(-4, 6)$'], ok: 1,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> La imagen de $B$ con la regla de $90^\circ$ antihorario: $(x, y) \to (-y, x)$.</p><p><b>Paso 2. Aplica.</b> $B(4, 6) \to (-6, 4)$.</p><p><b>Respuesta:</b> $B'(-6, 4)$.</p><p><b>Comprobación con las medidas:</b> $A' = (-2, 1)$. El segmento $AB$ mide $\sqrt{3^2 + 4^2} = 5$ y $A'B'$ mide $\sqrt{(-6 + 2)^2 + (4 - 1)^2} = \sqrt{16 + 9} = 5$: la rotación conservó la medida. ✔</p><p><b>¿Por qué no las otras?</b> $(6, -4)$ gira en sentido horario. $(-4, -6)$ gira $180^\circ$. $(-4, 6)$ refleja respecto del eje Y: no hay giro.</p>`, conc: 'Aplica la regla a cada extremo; el segmento rotado mide lo mismo.' },
    { enun: r`<p>El punto $P$ está ubicado en el segundo cuadrante del plano cartesiano. Se rota en $90^\circ$ en sentido antihorario con centro en el origen.</p><p>¿En qué cuadrante queda su imagen?</p>`,
      alts: ['En el primer cuadrante', 'En el segundo cuadrante', 'En el cuarto cuadrante', 'En el tercer cuadrante'], ok: 3,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El cuadrante de la imagen. Con $90^\circ$ antihorario, cada punto avanza un cuadrante en el orden I → II → III → IV.</p><p><b>Paso 2.</b> Desde el II se avanza al III.</p><p><b>Comprobación con un punto:</b> $P(-2, 3)$ está en el II. $(x, y) \to (-y, x)$: $(-3, -2)$, en el III. ✔</p><p><b>Respuesta:</b> en el tercer cuadrante.</p><p><b>¿Por qué no las otras?</b> El primero sale de girar en sentido horario. El cuarto sale de girar $180^\circ$. Quedarse en el segundo solo pasa con un giro de $360^\circ$.</p>`, conc: '90° antihorario: avanza un cuadrante (I → II → III → IV).' },
    { enun: r`<p>El punto $Q(1, 2)$ se rota en $180^\circ$ con centro en el punto $C(-1, 2)$.</p><p>¿Cuáles son las coordenadas de la imagen de $Q$?</p>`,
      alts: ['$(-1, -2)$', '$(-2, 0)$', '$(0, 4)$', '$(-3, 2)$'], ok: 3,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Media vuelta de $Q$ en torno a $C$. Con $180^\circ$, $C$ queda al medio entre $Q$ y su imagen.</p><p><b>Paso 2. Desde el centro.</b> $Q - C = (1 - (-1), 2 - 2) = (2, 0)$: $Q$ está 2 a la derecha de $C$.</p><p><b>Paso 3. Gira 180°.</b> $(2, 0) \to (-2, 0)$: 2 a la izquierda de $C$.</p><p><b>Paso 4. Vuelve.</b> $(-2 + (-1), 0 + 2) = (-3, 2)$.</p><p><b>Respuesta:</b> $(-3, 2)$.</p><p><b>Comprobación:</b> el punto medio entre $(1, 2)$ y $(-3, 2)$ es $(-1, 2) = C$. ✔</p><p><b>¿Por qué no las otras?</b> $(-1, -2)$ gira en torno al origen. $(-2, 0)$ olvida sumar el centro al final. $(0, 4)$ suma $Q$ y $C$ en vez de girar.</p>`, conc: 'Con 180° en torno a C, el centro es el punto medio: imagen = 2C − P.' },
    { enun: r`<p>Al aplicar una rotación con centro en el origen al punto $P(3, 4)$ se obtiene el punto $P'(-4, 3)$.</p><p>¿Cuál de las siguientes rotaciones se aplicó?</p>`,
      alts: ['Una rotación de 90° en sentido antihorario.', 'Una rotación de 90° en sentido horario.', 'Una rotación de 180°.', 'Una rotación de 270° en sentido antihorario.'], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Qué giro lleva $(3, 4)$ a $(-4, 3)$. Probamos las reglas.</p><p><b>Paso 2. 90° antihorario.</b> $(x, y) \to (-y, x)$: $(3, 4) \to (-4, 3)$. ✔ Coincide.</p><p><b>Paso 3. Revisa las demás.</b> $90^\circ$ horario: $(4, -3)$. $180^\circ$: $(-3, -4)$. $270^\circ$ antihorario es lo mismo que $90^\circ$ horario: $(4, -3)$.</p><p><b>Respuesta:</b> una rotación de $90^\circ$ en sentido antihorario.</p><p><b>Comprobación con cuadrantes:</b> $P$ está en el I y $P'$ en el II: avanzó un cuadrante en sentido antihorario. ✔</p><p><b>¿Por qué no las otras?</b> Como vimos, llevan $P$ a $(4, -3)$ o a $(-3, -4)$, no a $(-4, 3)$.</p>`, conc: 'Si no sabes cuál rotación es, prueba las reglas con el punto dado.' },
    { enun: r`<p>Al punto $P(2, 5)$ se le aplica una reflexión respecto del eje X y, a continuación, una rotación en $90^\circ$ en sentido antihorario con centro en el origen.</p><p>¿Cuáles son las coordenadas de la imagen final?</p>`,
      alts: ['$(5, 2)$', '$(-5, -2)$', '$(5, -2)$', '$(-5, 2)$'], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El punto final después de dos transformaciones, en el orden dado.</p><p><b>Paso 2. Reflexión respecto del eje X.</b> $(2, 5) \to (2, -5)$.</p><p><b>Paso 3. Rotación de 90° antihorario.</b> $(x, y) \to (-y, x)$: $(2, -5) \to (5, 2)$.</p><p><b>Respuesta:</b> $(5, 2)$.</p><p><b>Comprobación:</b> el resultado es intercambiar las coordenadas de $P$: estas dos transformaciones juntas equivalen a reflejar respecto de la recta $y = x$. ✔</p><p><b>¿Por qué no las otras?</b> $(-5, -2)$ hace primero la rotación, $(-5, 2)$, y después la reflexión. $(5, -2)$ se equivoca en el signo: $-y = -(-5) = 5$ y la segunda coordenada es $x = 2$. $(-5, 2)$ hace solo la rotación.</p>`, conc: 'Aplica cada transformación al resultado de la anterior, en el orden indicado.' },
    { enun: r`<p>En el plano cartesiano de la figura, el triángulo $A'B'C'$ es la imagen del triángulo $ABC$ mediante una rotación de $180^\circ$.</p><p>¿Cuáles son las coordenadas del centro de esa rotación?</p>`,
      fig: { type: 'img', src: 'paes/m1/fig/tra_o_centro180.svg', alt: 'Triángulo A(-4, 1), B(-2, 1), C(-4, 3) y triángulo A\'(6, -1), B\'(4, -1), C\'(6, -3)' },
      alts: ['$(0, 0)$', '$(5, -1)$', '$(1, 0)$', '$(10, -2)$'], ok: 2,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El centro de giro. En una rotación de $180^\circ$, el centro queda justo al medio entre cada punto y su imagen.</p><p><b>Paso 2. Lee A y A'.</b> $A(-4, 1)$ y $A'(6, -1)$.</p><p><b>Paso 3. Punto medio.</b> $\left(\dfrac{-4 + 6}{2}, \dfrac{1 + (-1)}{2}\right) = (1, 0)$.</p><p><b>Respuesta:</b> $(1, 0)$.</p><p><b>Comprobación con otro vértice:</b> $B(-2, 1)$ y $B'(4, -1)$: $\left(\dfrac{-2 + 4}{2}, \dfrac{1 - 1}{2}\right) = (1, 0)$. ✔</p><p><b>¿Por qué no las otras?</b> $(0, 0)$ supone que toda rotación es en torno al origen; con centro en el origen, $A$ iría a $(4, -1)$. $(5, -1)$ es la mitad de $A' - A = (10, -2)$: es la mitad del desplazamiento, no un punto medio. $(10, -2)$ es el desplazamiento completo de $A$ a $A'$.</p>`, conc: 'Con 180°, el centro es el punto medio entre un punto y su imagen.' },
    { enun: r`<p>En un plano cartesiano se representa una rueda de la fortuna con centro en el origen y radio 10 m, como se muestra en la figura. La cabina $K$ está en el punto más bajo de la rueda.</p><p>Si la rueda gira $90^\circ$ en sentido antihorario, ¿cuáles son las coordenadas de la nueva posición de la cabina $K$?</p>`,
      fig: { type: 'img', src: 'paes/m1/fig/tra_o_rueda.svg', alt: 'Rueda de la fortuna de radio 10 centrada en el origen, con cabinas; la cabina K está en el punto más bajo, (0, -10); una flecha indica el giro en sentido antihorario' },
      alts: ['$(-10, 0)$', '$(0, 10)$', '$(10, -10)$', '$(10, 0)$'], ok: 3,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Dónde queda la cabina después de un cuarto de vuelta antihorario.</p><p><b>Paso 2. Posición inicial.</b> En el punto más bajo de una rueda de radio 10 centrada en el origen: $K(0, -10)$.</p><p><b>Paso 3. Regla de 90° antihorario.</b> $(x, y) \to (-y, x)$: $(0, -10) \to (10, 0)$.</p><p><b>Respuesta:</b> $(10, 0)$.</p><p><b>Comprobación:</b> girando al revés del reloj, la cabina sube por el lado derecho de la rueda: desde abajo llega al punto de más a la derecha. ✔</p><p><b>¿Por qué no las otras?</b> $(-10, 0)$ gira en sentido horario. $(0, 10)$ gira $180^\circ$. $(10, -10)$ no está sobre la rueda: está a más de 10 m del centro.</p>`, conc: 'Al girar, la cabina sigue a la misma distancia del centro.' }
  ]
},

/* =====================================================================
   UNIDAD 4 · SEMEJANZA Y PROPORCIONALIDAD
   ===================================================================== */
{
  id: 'geo_semejanza', unit: 'Unidad 4 · Semejanza y proporcionalidad', icon: '📐',
  title: 'Semejanza y escalas',
  desc: 'Paso a paso: qué son las figuras semejantes, la razón de semejanza y los lados homólogos, triángulos semejantes con sombras y postes, planos y mapas a escala 1 : n, y cómo cambian el perímetro y el área.',
  slides: [
    { t: 'Figuras semejantes', b: r`
      <div class="cols"><div>
      <p>Dos figuras son <b>semejantes</b> si tienen <b>la misma forma</b>, aunque distinto tamaño: una es una ampliación o una reducción de la otra, como una foto y su ampliación. Se escribe $\sim$.</p>
      <p>En figuras semejantes:</p>
      <p>· los <b>ángulos</b> correspondientes son iguales;<br>· los <b>lados</b> correspondientes son <b>proporcionales</b>: todos se multiplican por el mismo número $k$, la <b>razón de semejanza</b>.</p>
      <p><b>Ejemplo.</b> $R$ mide $3 \times 2$ y $S$ mide $6 \times 4$. $\dfrac{6}{3} = 2$ y $\dfrac{4}{2} = 2$: los dos lados se multiplican por 2. Son semejantes, con $k = 2$.</p>
      <p>$T$ mide $6 \times 3$: $\dfrac{6}{3} = 2$, pero $\dfrac{3}{2} = 1{,}5$. No es semejante a $R$: está "más estirado".</p>
      </div><div>
      <div class="qfig"><img class="tikz" src="paes/m1/fig/sem_rectangulos.svg" alt="Rectángulo R de 3 cm por 2 cm, rectángulo S de 6 cm por 4 cm y rectángulo T de 6 cm por 3 cm"></div>
      <div class="box alert"><b>Proporcional no es "sumar lo mismo"</b> A $3 \times 2$ sumarle 3 a cada lado da $6 \times 5$, que no es semejante. En la semejanza se <b>multiplica</b>, no se suma.</div>
      </div></div>` },
    { t: 'Lados homólogos y razón de semejanza', b: r`
      <div class="cols"><div>
      <p>Los <b>lados homólogos</b> son los que se corresponden: están entre ángulos iguales. Si $\triangle ABC \sim \triangle DEF$, el orden de las letras lo dice: $A$ con $D$, $B$ con $E$, $C$ con $F$; y $AB$ con $DE$, $BC$ con $EF$, $AC$ con $DF$.</p>
      <p><b>Ejemplo.</b> $\triangle ABC \sim \triangle DEF$ con $AB = 3$, $BC = 4$, $AC = 5$, $DE = 6$ y $DF = 10$. ¿Cuánto mide $EF$?</p>
      <p><b>Paso 1. Razón.</b> Con un par de lados homólogos conocidos: $k = \dfrac{DE}{AB} = \dfrac{6}{3} = 2$.</p>
      <p><b>Paso 2. Comprueba con otro par.</b> $\dfrac{DF}{AC} = \dfrac{10}{5} = 2$. ✔</p>
      <p><b>Paso 3. Lado pedido.</b> $EF = 2\cdot BC = 2\cdot 4 = 8$.</p>
      </div><div>
      <div class="qfig"><img class="tikz" src="paes/m1/fig/sem_triangulos.svg" alt="Triángulo rectángulo ABC de lados 3, 4 y 5, y triángulo rectángulo DEF de lados 6, x y 10, con los ángulos correspondientes marcados"></div>
      <div class="box"><b>Con una proporción</b> $\dfrac{EF}{BC} = \dfrac{DE}{AB}$, o sea $\dfrac{x}{4} = \dfrac{6}{3}$. Multiplicando cruzado: $3x = 24$ y $x = 8$.</div>
      </div></div>` },
    { t: 'Triángulos semejantes: basta con dos ángulos', b: r`
      <div class="cols"><div>
      <p>Dos triángulos son semejantes si tienen <b>dos ángulos iguales</b> (el tercero también lo será, porque los tres suman $180^\circ$). Este es el criterio <b>AA</b> y es el que más se usa.</p>
      <p><b>Triángulos encajados.</b> Si en el triángulo $ABC$ se traza $DE$ paralelo a $BC$, el triángulo chico $ADE$ es semejante al grande $ABC$: comparten el ángulo $A$, y las paralelas forman ángulos iguales con el lado $AB$.</p>
      <p><b>Ejemplo.</b> $AD = 2$, $DB = 4$ y $DE = 3$. ¿Cuánto mide $BC$?</p>
      <p><b>Paso 1. Lado completo.</b> $AB = AD + DB = 2 + 4 = 6$.</p>
      <p><b>Paso 2. Razón.</b> $k = \dfrac{AB}{AD} = \dfrac{6}{2} = 3$.</p>
      <p><b>Paso 3.</b> $BC = 3\cdot DE = 3\cdot 3 = 9$.</p>
      </div><div>
      <div class="qfig"><img class="tikz" src="paes/m1/fig/sem_encajados.svg" alt="Triángulo ABC con el segmento DE paralelo a BC; AD = 2, DB = 4, DE = 3 y BC = x"></div>
      <div class="box alert"><b>El error clásico</b> Comparar $DE$ con $DB$. El lado homólogo de $AB$ (el lado entero del grande) es $AD$ (el lado entero del chico), no el pedazo $DB$.</div>
      <div class="box"><b>Otros criterios</b> También son semejantes si sus tres lados son proporcionales (LLL), o si dos lados son proporcionales y el ángulo entre ellos es igual (LAL).</div>
      </div></div>` },
    { t: 'Sombras, postes y alturas', b: r`
      <div class="cols"><div>
      <p>A la misma hora, los rayos del sol llegan <b>paralelos</b>. Un objeto vertical, su sombra y el rayo forman un triángulo rectángulo, y todos esos triángulos son semejantes (tienen el ángulo recto y el ángulo del sol iguales).</p>
      <p><b>Ejemplo.</b> Un poste de 4 m da una sombra de 6 m. A la misma hora, ¿qué sombra da una persona de 1,6 m?</p>
      <p><b>Paso 1. Plantea</b> la proporción altura : sombra, igual en los dos: $\dfrac{1{,}6}{x} = \dfrac{4}{6}$.</p>
      <p><b>Paso 2. Multiplica cruzado.</b> $4x = 1{,}6\cdot 6 = 9{,}6$.</p>
      <p><b>Paso 3.</b> $x = \dfrac{9{,}6}{4} = 2{,}4$ m.</p>
      <p><b>Comprobación:</b> en los dos casos la sombra es 1,5 veces la altura: $4\cdot 1{,}5 = 6$ y $1{,}6\cdot 1{,}5 = 2{,}4$. ✔</p>
      </div><div>
      <div class="qfig"><img class="tikz" src="paes/m1/fig/sem_sombras.svg" alt="Un poste de 4 m con sombra de 6 m y una persona de 1,6 m con sombra x; los rayos del sol son paralelos"></div>
      <div class="box"><b>Ordena antes de calcular</b> Escribe arriba las alturas y abajo las sombras, en las dos fracciones. Si en una pones altura sobre sombra y en la otra sombra sobre altura, el resultado sale al revés.</div>
      </div></div>` },
    { t: 'Planos, mapas y maquetas a escala', b: r`
      <div class="cols"><div>
      <p>Una <b>escala 1 : n</b> significa que 1 cm en el dibujo representa $n$ cm en la realidad. Es una semejanza de razón $n$.</p>
      <p><b>Ejemplo 1 (mapa).</b> Escala 1 : 50.000. En el mapa hay 6 cm entre dos pueblos.</p>
      <p><b>Paso 1.</b> Distancia real: $6\cdot 50.000 = 300.000$ cm.</p>
      <p><b>Paso 2. Pasa a metros</b> (divide por 100): 3000 m. <b>A kilómetros</b> (divide por 1000): 3 km.</p>
      <p><b>Ejemplo 2 (de la realidad al dibujo).</b> Un edificio de 45 m en una maqueta a escala 1 : 300 mide $\dfrac{45}{300} = 0{,}15$ m, o sea 15 cm.</p>
      <p><b>Ejemplo 3 (encontrar la escala).</b> Si 2 cm del mapa son 200 m reales: $200\text{ m} = 20.000$ cm, y 1 cm son $\dfrac{20.000}{2} = 10.000$ cm. La escala es 1 : 10.000.</p>
      </div><div>
      <table><thead><tr><th>Conversión</th><th>Equivale a</th></tr></thead><tbody>
      <tr><td>1 m</td><td>100 cm</td></tr>
      <tr><td>1 km</td><td>1000 m $=$ 100.000 cm</td></tr>
      <tr><td>1 m²</td><td>10.000 cm²</td></tr></tbody></table>
      <div class="box alert"><b>Mismas unidades</b> La escala 1 : n no tiene unidades: compara centímetros con centímetros. Antes de comparar, pasa todo a la misma unidad.</div>
      <div class="box"><b>Escala gráfica</b> Algunos mapas traen una barra, por ejemplo "2 cm = 1 km". Se usa igual: cuenta cuántas veces cabe la barra en la distancia medida.</div>
      </div></div>` },
    { t: 'Perímetro por k, área por k²', b: r`
      <div class="cols"><div>
      <p>Si una figura se amplía con razón $k$:</p>
      <p>· cada <b>longitud</b> (lados, perímetro, alturas) se multiplica por $k$;<br>· el <b>área</b> se multiplica por $k^2$.</p>
      <p><b>¿Por qué $k^2$?</b> Un cuadrado de lado 1 tiene área 1. Si duplicas el lado, caben $2\cdot 2 = 4$ cuadraditos; si lo triplicas, caben $3\cdot 3 = 9$.</p>
      <p><b>Ejemplo.</b> Un triángulo de perímetro 10 cm y área 4 cm² se amplía con $k = 3$. Perímetro nuevo: $10\cdot 3 = 30$ cm. Área nueva: $4\cdot 3^2 = 4\cdot 9 = 36$ cm².</p>
      <p><b>Al revés.</b> Si las áreas de dos cuadrados semejantes son 9 y 36, la razón de las áreas es $\dfrac{36}{9} = 4 = k^2$, así que $k = 2$.</p>
      </div><div>
      <div class="qfig"><img class="tikz" src="paes/m1/fig/sem_areas.svg" alt="Tres cuadrados de lado 1, 2 y 3 divididos en cuadraditos: caben 1, 4 y 9"></div>
      <div class="box alert"><b>El error más común</b> Pensar que si el lado se duplica, el área también se duplica. Se cuadruplica.</div>
      <div class="box"><b>En planos</b> Con escala 1 : 100, las longitudes se multiplican por 100, pero las áreas por $100^2 = 10.000$.</div>
      </div></div>` },
    { t: 'Errores típicos y resumen', b: r`
      <table><thead><tr><th>Error</th><th>Así no</th><th>Así sí</th></tr></thead><tbody>
      <tr><td>Sumar en vez de multiplicar</td><td>$3 \times 2$ ampliado "en 3": $6 \times 5$</td><td>$k = 2$: $6 \times 4$</td></tr>
      <tr><td>Proporción al revés</td><td>$\dfrac{1{,}6}{x} = \dfrac{6}{4}$</td><td>$\dfrac{1{,}6}{x} = \dfrac{4}{6}$ (altura sobre sombra en las dos)</td></tr>
      <tr><td>Usar un pedazo del lado</td><td>$\dfrac{BC}{DE} = \dfrac{DB}{AD}$</td><td>$\dfrac{BC}{DE} = \dfrac{AB}{AD}$</td></tr>
      <tr><td>Área por $k$</td><td>$k = 3$: área $\times 3$</td><td>área $\times 9$</td></tr>
      <tr><td>Olvidar convertir unidades</td><td>$6\cdot 50.000 = 300.000$ km</td><td>son cm: 3 km</td></tr></tbody></table>
      <div class="box" style="margin-top:14px"><b>Método PAES</b> 1. Identifica las figuras semejantes y los lados homólogos. 2. Calcula la razón $k$ con un par conocido. 3. Multiplica (o divide) los demás lados por $k$; las áreas, por $k^2$. 4. Revisa las unidades. 5. Comprueba que lo grande quedó grande y lo chico, chico.</div>` }
  ],
  example: {
    src: 'PAES Invierno 2027, adaptada',
    enun: r`<p>Martina debe ir de su casa al colegio y para esto revisa un mapa. En la figura adjunta se presenta el mapa y la medida, en el mapa, del recorrido que debe hacer. Se sabe que 3 cm en el mapa equivalen a 150 m de distancia en la realidad.</p><div class="qfig"><img class="tikz" src="paes/m1/fig/sem_mapa_ruta.svg" alt="Mapa de calles con el recorrido de la casa al colegio marcado en naranjo; el recorrido mide 13 cm en el mapa"></div><p>¿Cuál es la distancia real que debe recorrer Martina?</p>`,
    alts: ['450 m', '650 m', '1950 m', '50 m'], ok: 1,
    sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> La distancia real del recorrido, que en el mapa mide 13 cm.</p><p><b>Paso 2. ¿Cuánto vale 1 cm?</b> Si 3 cm son 150 m, entonces 1 cm es $\dfrac{150}{3} = 50$ m.</p><p><b>Paso 3. Multiplica.</b> 13 cm: $13\cdot 50 = 650$ m.</p><p><b>Respuesta:</b> 650 m.</p><p><b>Comprobación con una proporción:</b> $\dfrac{3}{150} = \dfrac{13}{x}$, así que $3x = 1950$ y $x = 650$. ✔</p><p><b>¿Por qué no las otras?</b> 450 m multiplica los 150 m por 3, no por la cantidad de veces que cabe 3 cm en 13 cm. 1950 m multiplica 13 por 150, como si cada centímetro valiera 150 m. 50 m es lo que vale un solo centímetro.</p>`,
    conc: 'Averigua cuánto vale 1 cm del mapa y multiplica por la medida del dibujo.'
  },
  bank: [
    { enun: r`<p>A cierta hora del día, un árbol proyecta una sombra de 9 m. A la misma hora, una vara vertical de 1,5 m proyecta una sombra de 2 m, como se representa en la figura.</p><p>¿Cuál es la altura $h$ del árbol?</p>`,
      fig: { type: 'img', src: 'paes/m1/fig/sem_b_arbol.svg', alt: 'Un árbol de altura h con sombra de 9 m y una vara de 1,5 m con sombra de 2 m; los rayos del sol son paralelos' },
      alts: ['12 m', '6,75 m', '8,5 m', '13,5 m'], ok: 1,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> La altura del árbol. A la misma hora, los triángulos altura-sombra son semejantes: la razón altura : sombra es la misma.</p><p><b>Paso 2. Plantea.</b> $\dfrac{h}{9} = \dfrac{1{,}5}{2}$.</p><p><b>Paso 3. Despeja.</b> $h = \dfrac{1{,}5\cdot 9}{2} = \dfrac{13{,}5}{2} = 6{,}75$ m.</p><p><b>Respuesta:</b> 6,75 m.</p><p><b>Comprobación:</b> la vara mide $\dfrac{1{,}5}{2} = 0{,}75$ veces su sombra, y el árbol, $\dfrac{6{,}75}{9} = 0{,}75$ veces la suya. ✔</p><p><b>¿Por qué no las otras?</b> 12 m da vuelta la proporción: $\dfrac{9\cdot 2}{1{,}5}$. Además, con sombras más largas que los objetos, el árbol debe medir menos que 9 m. 8,5 m resta en vez de usar proporción: la vara es 0,5 m más corta que su sombra y supone lo mismo para el árbol. 13,5 m multiplica $9\cdot 1{,}5$ y olvida dividir por 2.</p>`, conc: 'Altura sobre sombra es igual para todos los objetos a la misma hora.' },
    { enun: r`<p>Los triángulos $ABC$ y $DEF$ son semejantes, con $\triangle ABC \sim \triangle DEF$. Se sabe que $AB = 4$ cm, $BC = 6$ cm y $DE = 10$ cm.</p><p>¿Cuál es la medida de $EF$?</p>`,
      alts: ['12 cm', '2,4 cm', '25 cm', '15 cm'], ok: 3,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El lado $EF$. Por el orden de las letras, $AB$ corresponde a $DE$ y $BC$ corresponde a $EF$.</p><p><b>Paso 2. Razón.</b> $k = \dfrac{DE}{AB} = \dfrac{10}{4} = 2{,}5$.</p><p><b>Paso 3. Multiplica el homólogo.</b> $EF = 2{,}5\cdot BC = 2{,}5\cdot 6 = 15$ cm.</p><p><b>Respuesta:</b> 15 cm.</p><p><b>Comprobación:</b> $\dfrac{EF}{BC} = \dfrac{15}{6} = 2{,}5 = \dfrac{DE}{AB}$. ✔</p><p><b>¿Por qué no las otras?</b> 12 cm suma: como $DE$ es 6 más que $AB$, le suma 6 a $BC$. En la semejanza se multiplica. 2,4 cm usa la razón al revés: $6\cdot\dfrac{4}{10}$. 25 cm compara $DE$ consigo mismo: $10\cdot 2{,}5$.</p>`, conc: 'El orden de las letras en ∼ indica los lados homólogos; la razón multiplica, no suma.' },
    { enun: r`<p>En el triángulo $ABC$ de la figura, el segmento $DE$ es paralelo a $BC$. Las medidas están en centímetros.</p><p>¿Cuál es la medida de $BC$?</p>`,
      fig: { type: 'img', src: 'paes/m1/fig/sem_b_thales.svg', alt: 'Triángulo ABC con D en AB y E en AC, DE paralelo a BC; AD = 3, DB = 6, DE = 4 y BC = x' },
      alts: ['12 cm', '8 cm', '7 cm', '6 cm'], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El lado $BC$. Como $DE$ es paralelo a $BC$, el triángulo $ADE$ es semejante al triángulo $ABC$.</p><p><b>Paso 2. Lados homólogos.</b> $AD$ (lado del chico) corresponde a $AB$ (lado del grande). $AB = AD + DB = 3 + 6 = 9$.</p><p><b>Paso 3. Razón.</b> $k = \dfrac{AB}{AD} = \dfrac{9}{3} = 3$.</p><p><b>Paso 4.</b> $BC = 3\cdot DE = 3\cdot 4 = 12$ cm.</p><p><b>Respuesta:</b> 12 cm.</p><p><b>Comprobación:</b> $\dfrac{BC}{DE} = \dfrac{12}{4} = 3 = \dfrac{9}{3}$. ✔</p><p><b>¿Por qué no las otras?</b> 8 cm compara con el pedazo $DB$ en vez del lado completo: $4\cdot\dfrac{6}{3}$. 7 cm suma 3 a $DE$, como si fuera un problema de diferencias. 6 cm confunde $BC$ con $DB$.</p>`, conc: 'En triángulos encajados, compara lados completos: AD con AB, no AD con DB.' },
    { enun: r`<p>En un mapa a escala 1 : 50.000, la distancia entre dos pueblos es de 6 cm.</p><p>¿Cuál es la distancia real entre los pueblos?</p>`,
      alts: ['300 m', '3 km', '30 km', '300 km'], ok: 1,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> La distancia real. Escala 1 : 50.000: cada centímetro del mapa son 50.000 cm reales.</p><p><b>Paso 2. Multiplica.</b> $6\cdot 50.000 = 300.000$ cm.</p><p><b>Paso 3. Convierte.</b> $300.000$ cm $= 3000$ m (dividiendo por 100) $= 3$ km (dividiendo por 1000).</p><p><b>Respuesta:</b> 3 km.</p><p><b>Comprobación:</b> 1 cm del mapa son 50.000 cm $= 500$ m; 6 cm son $6\cdot 500 = 3000$ m. ✔</p><p><b>¿Por qué no las otras?</b> 300 m divide por 1000 en vez de por 100 al pasar de cm a m. 30 km y 300 km se equivocan en la cantidad de ceros al convertir.</p>`, conc: 'Multiplica por n y convierte con cuidado: 100 cm = 1 m y 1000 m = 1 km.' },
    { enun: r`<p>En la figura se presenta el plano de un departamento, dibujado a escala 1 : 100.</p><p>¿Cuál es el área real del dormitorio?</p>`,
      fig: { type: 'img', src: 'paes/m1/fig/sem_b_plano.svg', alt: 'Plano de un departamento a escala 1 : 100: living de 4 cm por 6 cm, baño, cocina y dormitorio de 4 cm por 3 cm' },
      alts: ['0,12 m²', '1200 m²', '12 m²', '24 m²'], ok: 2,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El área real del dormitorio. Primero pasamos cada medida a la realidad y después multiplicamos.</p><p><b>Paso 2. Medidas reales.</b> Escala 1 : 100: 1 cm del plano son 100 cm $= 1$ m reales. El dormitorio mide 4 cm × 3 cm en el plano: 4 m × 3 m en la realidad.</p><p><b>Paso 3. Área.</b> $4\cdot 3 = 12$ m².</p><p><b>Respuesta:</b> 12 m².</p><p><b>Comprobación con k²:</b> área en el plano: $4\cdot 3 = 12$ cm². Se multiplica por $100^2 = 10.000$: $120.000$ cm² $= 12$ m² (1 m² son 10.000 cm²). ✔</p><p><b>¿Por qué no las otras?</b> 0,12 m² multiplica el área del plano solo por 100, no por $100^2$. 1200 m² multiplica por 100 los 12 cm² y lo lee como si fueran metros cuadrados. 24 m² es el área del living (4 m × 6 m), no la del dormitorio.</p>`, conc: 'Pasa primero las medidas a la realidad y después calcula el área.' },
    { enun: r`<p>Dos triángulos son semejantes y la razón de semejanza entre el mayor y el menor es 3. El área del triángulo menor es 5 cm².</p><p>¿Cuál es el área del triángulo mayor?</p>`,
      alts: ['15 cm²', '45 cm²', '135 cm²', '8 cm²'], ok: 1,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El área del triángulo grande. Si los lados se multiplican por $k$, el área se multiplica por $k^2$.</p><p><b>Paso 2.</b> $k = 3$, así que $k^2 = 9$.</p><p><b>Paso 3.</b> $5\cdot 9 = 45$ cm².</p><p><b>Respuesta:</b> 45 cm².</p><p><b>Comprobación con un ejemplo:</b> un triángulo de base 2 y altura 5 tiene área $\dfrac{2\cdot 5}{2} = 5$. Triplicado: base 6 y altura 15, área $\dfrac{6\cdot 15}{2} = 45$. ✔</p><p><b>¿Por qué no las otras?</b> 15 cm² multiplica el área por $k$, como si fuera una longitud. 135 cm² multiplica por $k^3 = 27$, que corresponde a volúmenes. 8 cm² suma 3.</p>`, conc: 'Longitudes por k, áreas por k².' },
    { enun: r`<p>En un mapa, dos ciudades que en la realidad están a 12 km de distancia aparecen separadas por 8 cm.</p><p>¿Cuál es la escala del mapa?</p>`,
      alts: ['1 : 1500', '1 : 15.000', '1 : 150.000', '1 : 1.500.000'], ok: 2,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> La escala 1 : n, o sea, cuántos centímetros reales representa 1 cm del mapa.</p><p><b>Paso 2. Misma unidad.</b> 12 km $= 12.000$ m $= 1.200.000$ cm.</p><p><b>Paso 3. Un centímetro.</b> $\dfrac{1.200.000}{8} = 150.000$ cm.</p><p><b>Respuesta:</b> 1 : 150.000.</p><p><b>Comprobación:</b> $8\cdot 150.000 = 1.200.000$ cm $= 12$ km. ✔</p><p><b>¿Por qué no las otras?</b> 1 : 1500 trabaja en metros y olvida dividir correctamente: $\dfrac{12.000}{8} = 1500$, pero eso son metros por cada centímetro, no centímetros. 1 : 15.000 y 1 : 1.500.000 se equivocan en la cantidad de ceros al convertir kilómetros a centímetros.</p>`, conc: 'Para la escala, pasa la distancia real a la misma unidad del mapa (cm) y divide.' },
    { enun: r`<p>Un arquitecto construye la maqueta de un edificio a escala 1 : 300. El edificio real mide 45 m de altura.</p><p>¿Cuál es la altura del edificio en la maqueta?</p>`,
      alts: ['1,5 cm', '150 cm', '13,5 cm', '15 cm'], ok: 3,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Cuánto mide el edificio en la maqueta. Ahora vamos de la realidad al modelo: se divide por 300.</p><p><b>Paso 2. Convierte.</b> 45 m $= 4500$ cm.</p><p><b>Paso 3. Divide.</b> $\dfrac{4500}{300} = 15$ cm.</p><p><b>Respuesta:</b> 15 cm.</p><p><b>Comprobación:</b> $15\cdot 300 = 4500$ cm $= 45$ m. ✔</p><p><b>¿Por qué no las otras?</b> 1,5 cm y 150 cm se equivocan al convertir metros a centímetros. 13,5 cm multiplica 45 por 0,3 en vez de dividir por 300.</p>`, conc: 'Del modelo a la realidad se multiplica por n; de la realidad al modelo se divide.' },
    { enun: r`<p>En la figura se presentan el rectángulo $R$ y cuatro rectángulos numerados. Las medidas están en centímetros.</p><p>¿Cuál de los rectángulos numerados <b>no</b> es semejante al rectángulo $R$?</p>`,
      fig: { type: 'img', src: 'paes/m1/fig/sem_b_rectangulos.svg', alt: 'Rectángulo R de 2 por 3; rectángulo 1 de 4 por 6; rectángulo 2 de 6 por 9; rectángulo 3 de 4 por 5; rectángulo 4 de 1 por 1,5' },
      alts: ['El rectángulo 1', 'El rectángulo 2', 'El rectángulo 3', 'El rectángulo 4'], ok: 2,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El rectángulo que no tiene la misma forma que $R$ ($2 \times 3$). Para ser semejante, el ancho y el alto deben multiplicarse por el mismo número.</p><p><b>Paso 2. Rectángulo 1 ($4 \times 6$).</b> $\dfrac{4}{2} = 2$ y $\dfrac{6}{3} = 2$. Semejante.</p><p><b>Paso 3. Rectángulo 2 ($6 \times 9$).</b> $\dfrac{6}{2} = 3$ y $\dfrac{9}{3} = 3$. Semejante.</p><p><b>Paso 4. Rectángulo 3 ($4 \times 5$).</b> $\dfrac{4}{2} = 2$, pero $\dfrac{5}{3} \approx 1{,}67$. <b>No es semejante.</b></p><p><b>Paso 5. Rectángulo 4 ($1 \times 1{,}5$).</b> $\dfrac{1}{2} = 0{,}5$ y $\dfrac{1{,}5}{3} = 0{,}5$. Semejante (es una reducción).</p><p><b>Respuesta:</b> el rectángulo 3.</p><p><b>¿Por qué no las otras?</b> Los rectángulos 1, 2 y 4 tienen sus dos lados multiplicados por un mismo número. El 3 le suma 2 a cada lado, y sumar no conserva la forma.</p>`, conc: 'Semejantes: el ancho y el alto se multiplican por el mismo número (también si es menor que 1).' },
    { enun: r`<p>Una fotografía de 10 cm de ancho y 15 cm de alto se amplía de manera proporcional, de modo que el ancho de la ampliación es 25 cm.</p><p>¿Cuál es el alto de la ampliación?</p>`,
      alts: ['37,5 cm', '30 cm', '6 cm', '62,5 cm'], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El alto de la foto ampliada. Ampliar de manera proporcional es una semejanza: el ancho y el alto se multiplican por el mismo número.</p><p><b>Paso 2. Razón.</b> $k = \dfrac{25}{10} = 2{,}5$.</p><p><b>Paso 3. Alto.</b> $15\cdot 2{,}5 = 37{,}5$ cm.</p><p><b>Respuesta:</b> 37,5 cm.</p><p><b>Comprobación:</b> en las dos fotos, el alto es 1,5 veces el ancho: $10\cdot 1{,}5 = 15$ y $25\cdot 1{,}5 = 37{,}5$. ✔</p><p><b>¿Por qué no las otras?</b> 30 cm suma 15 cm al alto porque el ancho aumentó 15 cm; así la foto se deforma. 6 cm usa la razón al revés: $15\cdot\dfrac{10}{25}$, y una ampliación no puede achicar el alto. 62,5 cm multiplica el ancho nuevo por $k$: $25\cdot 2{,}5$.</p>`, conc: 'Amplía multiplicando todas las medidas por la misma razón k.' },
    { enun: r`<p>Dos figuras son semejantes y la razón de semejanza entre la mayor y la menor es 2.</p><p>¿Cuál(es) de las siguientes afirmaciones es (son) verdadera(s)?</p><p>I) Los ángulos correspondientes de ambas figuras miden lo mismo.<br>II) El perímetro de la figura mayor es el doble del perímetro de la menor.<br>III) El área de la figura mayor es el doble del área de la menor.</p>`,
      alts: ['Solo I y II', 'Solo I', 'Solo III', 'I, II y III'], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Revisar cada afirmación con lo que se sabe de figuras semejantes.</p><p><b>Paso 2. Afirmación I.</b> Las figuras semejantes tienen la misma forma: sus ángulos son iguales. <b>Verdadera.</b></p><p><b>Paso 3. Afirmación II.</b> Cada lado se multiplica por 2, así que la suma de los lados (el perímetro) también. <b>Verdadera.</b></p><p><b>Paso 4. Afirmación III.</b> El área se multiplica por $k^2 = 4$, no por 2. Un cuadrado de lado 1 (área 1) ampliado al doble tiene lado 2 y área 4. <b>Falsa.</b></p><p><b>Respuesta:</b> Solo I y II.</p><p><b>¿Por qué no las otras?</b> "Solo I" deja fuera II, que es verdadera. "Solo III" e "I, II y III" incluyen III, que es falsa.</p>`, conc: 'En la semejanza los ángulos no cambian, el perímetro se multiplica por k y el área por k².' },
    { enun: r`<p>Para calcular la altura de un edificio, una persona pone un espejo en el suelo y se aleja hasta ver en él la parte más alta del edificio, como se representa en la figura. Sus ojos están a 1,5 m del suelo, ella está a 2 m del espejo y el espejo está a 30 m del edificio.</p><p>Considerando que los triángulos formados son semejantes, ¿cuál es la altura $x$ del edificio?</p>`,
      fig: { type: 'img', src: 'paes/m1/fig/sem_b_espejo.svg', alt: 'Persona con los ojos a 1,5 m del suelo, a 2 m de un espejo en el suelo; el espejo está a 30 m de un edificio de altura x; el rayo de luz va de la punta del edificio al espejo y del espejo a los ojos' },
      alts: ['40 m', '45 m', '22,5 m', '31,5 m'], ok: 2,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> La altura del edificio. Hay dos triángulos rectángulos semejantes: el chico (persona, 1,5 m de alto y 2 m de base) y el grande (edificio, $x$ de alto y 30 m de base).</p><p><b>Paso 2. Plantea.</b> Altura sobre base en los dos: $\dfrac{x}{30} = \dfrac{1{,}5}{2}$.</p><p><b>Paso 3. Despeja.</b> $x = \dfrac{1{,}5\cdot 30}{2} = \dfrac{45}{2} = 22{,}5$ m.</p><p><b>Respuesta:</b> 22,5 m.</p><p><b>Comprobación:</b> el triángulo grande es $\dfrac{30}{2} = 15$ veces el chico, y $1{,}5\cdot 15 = 22{,}5$. ✔</p><p><b>¿Por qué no las otras?</b> 40 m da vuelta una de las fracciones: $\dfrac{2\cdot 30}{1{,}5}$. 45 m multiplica $1{,}5\cdot 30$ y olvida dividir por 2. 31,5 m suma la altura de la persona a la distancia, en vez de usar proporción.</p>`, conc: 'Identifica los dos triángulos y escribe la misma razón (altura sobre base) en ambos.' },
    { enun: r`<p>Una rampa recta sube 0,8 m a lo largo de 6 m de distancia horizontal. Se quiere poner un soporte vertical bajo la rampa a 4,5 m del inicio, medidos horizontalmente, como se representa en la figura.</p><p>¿Cuál es la altura $h$ del soporte?</p>`,
      fig: { type: 'img', src: 'paes/m1/fig/sem_b_rampa.svg', alt: 'Rampa: triángulo rectángulo de base 6 m y altura 0,8 m; un soporte vertical de altura h a 4,5 m del inicio de la rampa' },
      alts: ['0,2 m', '0,6 m', '3,6 m', '0,75 m'], ok: 1,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> La altura del soporte. El triángulo que forma la rampa hasta el soporte es semejante al de la rampa completa: comparten el ángulo del inicio y los dos tienen un ángulo recto.</p><p><b>Paso 2. Plantea.</b> $\dfrac{h}{4{,}5} = \dfrac{0{,}8}{6}$.</p><p><b>Paso 3. Despeja.</b> $h = \dfrac{0{,}8\cdot 4{,}5}{6} = \dfrac{3{,}6}{6} = 0{,}6$ m.</p><p><b>Respuesta:</b> 0,6 m.</p><p><b>Comprobación:</b> 4,5 m son $\dfrac{3}{4}$ de los 6 m, y $\dfrac{3}{4}$ de 0,8 m es 0,6 m. ✔</p><p><b>¿Por qué no las otras?</b> 0,2 m usa los 1,5 m que faltan para llegar al final, en vez de los 4,5 m recorridos. 3,6 m multiplica $0{,}8\cdot 4{,}5$ y olvida dividir por 6. 0,75 m es $\dfrac{4{,}5}{6}$, la razón de semejanza, no la altura.</p>`, conc: 'Un triángulo dentro de otro con un lado paralelo es semejante: usa la misma razón.' },
    { enun: r`<p>En el plano de un terreno, dibujado a escala 1 : 200, el terreno es un rectángulo de 5 cm por 4 cm.</p><p>¿Cuál es el área real del terreno?</p>`,
      alts: ['0,4 m²', '36 m²', '80 m²', '4000 m²'], ok: 2,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El área real. Pasamos primero cada lado a la realidad.</p><p><b>Paso 2. Lados reales.</b> $5\cdot 200 = 1000$ cm $= 10$ m y $4\cdot 200 = 800$ cm $= 8$ m.</p><p><b>Paso 3. Área.</b> $10\cdot 8 = 80$ m².</p><p><b>Respuesta:</b> 80 m².</p><p><b>Comprobación con k²:</b> en el plano el área es $5\cdot 4 = 20$ cm². Por $200^2 = 40.000$: $800.000$ cm² $= 80$ m². ✔</p><p><b>¿Por qué no las otras?</b> 0,4 m² multiplica el área del plano solo por 200: $20\cdot 200 = 4000$ cm². 36 m² es el perímetro real, $2\cdot(10 + 8) = 36$ m, no el área. 4000 m² multiplica 20 por 200 y lo lee como metros cuadrados.</p>`, conc: 'Con escala 1 : n, las longitudes se multiplican por n y las áreas por n².' },
    { enun: r`<p>Dos cuadrados tienen áreas de 9 cm² y 36 cm². El perímetro del cuadrado menor es 12 cm.</p><p>¿Cuál es el perímetro del cuadrado mayor?</p>`,
      alts: ['48 cm', '36 cm', '15 cm', '24 cm'], ok: 3,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El perímetro del cuadrado grande. Todos los cuadrados son semejantes; primero hallamos la razón $k$ a partir de las áreas.</p><p><b>Paso 2. Razón de áreas.</b> $\dfrac{36}{9} = 4 = k^2$, así que $k = 2$.</p><p><b>Paso 3. Perímetro.</b> El perímetro se multiplica por $k$: $12\cdot 2 = 24$ cm.</p><p><b>Respuesta:</b> 24 cm.</p><p><b>Comprobación con los lados:</b> área 9 → lado 3, perímetro 12 ✔. Área 36 → lado 6, perímetro $4\cdot 6 = 24$. ✔</p><p><b>¿Por qué no las otras?</b> 48 cm multiplica el perímetro por 4, la razón de las áreas. 36 cm es el área del cuadrado mayor, no su perímetro. 15 cm suma 3 al perímetro.</p>`, conc: 'Si conoces la razón de áreas, la razón de longitudes es su raíz cuadrada.' },
    { enun: r`<p>A la misma hora, un edificio de 12 m de altura proyecta una sombra de 8 m y otro edificio proyecta una sombra de 14 m, como se representa en la figura.</p><p>¿Cuál es la altura $x$ del segundo edificio?</p>`,
      fig: { type: 'img', src: 'paes/m1/fig/sem_b_edificios.svg', alt: 'Edificio de 12 m con sombra de 8 m y otro edificio de altura x con sombra de 14 m; rayos de sol paralelos' },
      alts: ['21 m', '18 m', '14 m', '28 m'], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> La altura del segundo edificio. Los triángulos altura-sombra son semejantes.</p><p><b>Paso 2. Plantea.</b> $\dfrac{x}{14} = \dfrac{12}{8}$.</p><p><b>Paso 3. Despeja.</b> $x = \dfrac{12\cdot 14}{8} = \dfrac{168}{8} = 21$ m.</p><p><b>Respuesta:</b> 21 m.</p><p><b>Comprobación:</b> en los dos edificios la altura es 1,5 veces la sombra: $8\cdot 1{,}5 = 12$ y $14\cdot 1{,}5 = 21$. ✔</p><p><b>¿Por qué no las otras?</b> 18 m suma: la sombra creció 6 m y le suma 6 m a la altura. 14 m supone que la altura es igual a la sombra. 28 m supone que la altura es el doble de la sombra.</p>`, conc: 'Con sombras, la razón altura : sombra es la misma para todos.' },
    { enun: r`<p>En el siguiente mapa se presenta una escala gráfica: el segmento de 2 cm representa 1 km. La distancia en el mapa entre el pueblo A y el pueblo B es de 7 cm.</p><p>¿Cuál es la distancia real entre los pueblos?</p>`,
      fig: { type: 'img', src: 'paes/m1/fig/sem_b_escala.svg', alt: 'Mapa con dos pueblos, A y B, separados por 7 cm; escala gráfica: una barra de 2 cm equivale a 1 km' },
      alts: ['7 km', '14 km', '0,35 km', '3,5 km'], ok: 3,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> La distancia real. La escala gráfica dice que 2 cm del mapa son 1 km.</p><p><b>Paso 2. Cuántas veces cabe la barra.</b> $\dfrac{7}{2} = 3{,}5$ veces.</p><p><b>Paso 3.</b> $3{,}5\cdot 1$ km $= 3{,}5$ km.</p><p><b>Respuesta:</b> 3,5 km.</p><p><b>Comprobación:</b> 1 cm son 0,5 km, y $7\cdot 0{,}5 = 3{,}5$ km. ✔</p><p><b>¿Por qué no las otras?</b> 7 km supone que 1 cm es 1 km, sin mirar la barra. 14 km multiplica por 2 en vez de dividir. 0,35 km se equivoca en la coma.</p>`, conc: 'Con escala gráfica, cuenta cuántas veces cabe la barra en la distancia medida.' },
    { enun: r`<p>Para medir el ancho de un río sin cruzarlo, una persona marca los puntos $B$, $C$, $D$ y $E$ en su orilla, frente a un árbol $A$ de la otra orilla, de modo que $A$, $C$ y $E$ quedan alineados y los ángulos en $B$ y en $D$ son rectos, como se representa en la figura.</p><p>Si $BC = 20$ m, $CD = 5$ m y $DE = 6$ m, ¿cuál es el ancho $x$ del río?</p>`,
      fig: { type: 'img', src: 'paes/m1/fig/sem_b_rio.svg', alt: 'Río con un árbol A en la orilla opuesta; en la orilla cercana, B frente a A, C a 20 m de B y D a 5 m de C; desde D se baja 6 m hasta E, perpendicular a la orilla; A, C y E están alineados. El ancho AB es x' },
      alts: ['24 m', '1,5 m', '21 m', '4 m'], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El ancho $AB$ del río. Los triángulos $ABC$ y $EDC$ son semejantes: tienen un ángulo recto ($B$ y $D$) y los ángulos en $C$ son opuestos por el vértice, iguales.</p><p><b>Paso 2. Lados homólogos.</b> $AB$ corresponde a $ED$, y $BC$ corresponde a $DC$.</p><p><b>Paso 3. Plantea.</b> $\dfrac{x}{6} = \dfrac{20}{5}$.</p><p><b>Paso 4. Despeja.</b> $x = 6\cdot 4 = 24$ m.</p><p><b>Respuesta:</b> 24 m.</p><p><b>Comprobación:</b> el triángulo grande es 4 veces el chico: $5\cdot 4 = 20$ y $6\cdot 4 = 24$. ✔</p><p><b>¿Por qué no las otras?</b> 1,5 m usa la razón al revés: $6\cdot\dfrac{5}{20}$. 21 m suma y resta las medidas: $20 + 6 - 5$. 4 m es la razón de semejanza, no el ancho.</p>`, conc: 'Busca los dos triángulos semejantes, empareja lados homólogos y usa la razón.' }
  ]
}

];
