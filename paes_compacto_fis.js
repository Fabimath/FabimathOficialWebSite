/* Versión compacta de las clases de Física (solo Módulo Común): ver COMPACTO en paes.html. */
var COMPACTO = COMPACTO || {};

/* Versión compacta · Física (Ondas, Movimiento, Fuerzas), solo lo que entra en la PAES de Ciencias. */
Object.assign(COMPACTO, {
  fis_ondas_elementos: [
    { t: 'Onda y sus elementos', b: r`
      <div class="cols"><div>
      <p>Una onda transporta <b>energía sin transportar materia</b>. <b>Mecánicas</b> (sonido, cuerda, olas): necesitan medio y no viajan en el vacío. <b>Electromagnéticas</b> (luz, radio, microondas, rayos X): viajan también en el vacío.</p>
      <ul><li>Amplitud $A$: del equilibrio a la cresta (cresta a valle $= 2A$); ligada a la energía.</li>
      <li>Longitud de onda $\lambda$: de cresta a cresta consecutivas.</li>
      <li>Período $T$: tiempo de un ciclo. Frecuencia $f$: ciclos por segundo (Hz). $f = 1/T$: 20 oscilaciones en 10 s dan $f = 2$ Hz.</li></ul>
      </div><div><div class="qfig"><img class="tikz" src="paes/fisica/fig/ond_elementos.svg" alt="Onda sinusoidal dibujada sobre la posición de equilibrio. Una flecha horizontal entre dos crestas consecutivas marca la longitud de onda lambda; una flecha vertical desde la posición de equilibrio hasta una cresta marca la amplitud A; se rotulan una cresta y dos valles, y una flecha indica la dirección de propagación con rapidez v"></div></div></div>` },
    { t: 'v = λf y cambio de medio', b: r`
      <p style="text-align:center">$v = \lambda f = \dfrac{\lambda}{T}$ &nbsp;·&nbsp; $c = 3{,}0\times10^{8}$ m/s en el vacío y el aire</p>
      <ul><li><b>Mismo medio:</b> misma $v$; $\lambda$ y $f$ inversamente proporcionales ($\lambda f$ constante). AM de 1000 kHz y FM de 100 MHz: la AM tiene $\lambda$ 100 veces mayor.</li>
      <li><b>Cambia de medio:</b> la <b>$f$ no cambia</b> (la fija la fuente; el color se mantiene). Cambian $v$ y $\lambda$ en la misma proporción: $v$ a la mitad, $\lambda$ a la mitad.</li></ul>
      <div class="box alert">Pasa a SI: MHz $= 10^{6}$ Hz, GHz $= 10^{9}$ Hz, nm $= 10^{-9}$ m. $\lambda = v/f$, no $f/v$ ni $v\cdot f$.</div>` },
    { t: 'La luz viaja en línea recta', b: r`
      <p>En un medio homogéneo: <b>sombras</b> (nítidas con fuente pequeña; con fuente grande, penumbra), <b>eclipses</b> y <b>cámara oscura</b> (imagen invertida: los rayos se cruzan en el orificio).</p>
      <p>Fuente puntual: la sombra crece con la distancia a la fuente. Tarjeta de 10 cm a 1 m, pared a 3 m: sombra de 30 cm.</p>` }
  ],

  fis_espectro: [
    { t: 'Orden del espectro', b: r`
      <div class="qfig"><img class="tikz" src="paes/fisica/fig/ond_espectro.svg" alt="Barra del espectro electromagnético con, de izquierda a derecha, radio (longitudes de onda de km a cm), microondas (cm a mm), infrarrojo (cerca de 10 micrómetros), luz visible (700 a 400 nm), ultravioleta (cerca de 100 nm), rayos X (cerca de 1 nm) y rayos gamma (menos de 0,01 nm). Una flecha hacia la derecha indica que la frecuencia y la energía aumentan; otra hacia la izquierda, que la longitud de onda aumenta"></div>
      <p><b>radio → microondas → infrarrojo → visible → ultravioleta → rayos X → gamma</b>: sube $f$ (y la energía), baja $\lambda$. Todas viajan a $c$ en el vacío.</p>
      <p>Visible, entre IR y UV: rojo (700 nm, menor $f$) a violeta (400 nm, mayor $f$). UV, X y gamma son ionizantes y dañan las células.</p>` },
    { t: 'Usos', b: r`
      <table><tbody>
      <tr><td>Radio</td><td>AM, FM, TV, radiotelescopios</td></tr>
      <tr><td>Microondas</td><td>horno, wifi, celular, radar, satélites, GPS</td></tr>
      <tr><td>Infrarrojo</td><td>control remoto, cámaras térmicas y nocturnas (captan el IR de los cuerpos tibios)</td></tr>
      <tr><td>Ultravioleta</td><td>esterilizar, billetes; quema la piel</td></tr>
      <tr><td>Rayos X</td><td>radiografías: los huesos los absorben más que los tejidos blandos</td></tr>
      <tr><td>Gamma</td><td>radioterapia, esterilizar alimentos</td></tr></tbody></table>
      <div class="box alert">Comparar fuera y dentro de la atmósfera dice cuánto retiene en cada rango: retiene la mayor parte del UV.</div>` },
    { t: 'Interferencia y difracción', b: r`
      <p><b>Interferencia:</b> ondas superpuestas se refuerzan (cresta con cresta) o se anulan (cresta con valle). <b>Young:</b> luz de una frecuencia (láser) por dos rendijas finas, de tamaño comparable a $\lambda$: franjas claras y oscuras.</p>
      <p><b>Difracción:</b> la onda rodea obstáculos o se abre en aberturas de tamaño comparable a $\lambda$. Radio AM ($\lambda$ de cientos de metros) rodea cerros; la luz se difracta en una ranura del grosor de un cabello, no en una ventana. Para mostrarla: un frente de ondas pasando por una abertura pequeña.</p>` }
  ],

  fis_luz: [
    { t: 'Absorción, transmisión y reflexión', b: r`
      <p>Incidente = reflejada + absorbida + transmitida. Lo que se mide al otro lado del material es lo <b>transmitido</b> (70 % adentro de la bodega: transmite el 70 %).</p>
      <p>Transparente, translúcido u opaco, según el rango: el agua transmite parte del UV (protector solar bajo el agua). Negro absorbe y se calienta; blanco refleja.</p>
      <p><b>Reflexión:</b> ángulos medidos <b>desde la normal</b>: incidencia = reflexión; incidente, reflejado y normal en un mismo plano. Lisa: especular (imagen); rugosa: difusa. No cambian $v$, $f$ ni $\lambda$.</p>
      <div class="box alert">30° con el espejo son 60° con la normal: reflexión de 60°. Para verificar la ley se miden ángulos: transportador.</div>` },
    { t: 'Refracción', b: r`
      <p>Cambio de dirección al pasar de medio, causado por el <b>cambio de rapidez</b>. $n = c/v$: aire 1,00, agua 1,33, vidrio 1,5.</p>
      <ul><li>Hacia un medio más lento (mayor $n$): se <b>acerca</b> a la normal. Hacia uno más rápido: se aleja.</li>
      <li>Incidencia perpendicular: no se desvía, pero cambia su rapidez.</li>
      <li>Cambian $v$, $\lambda$ y dirección; la <b>frecuencia (el color) no</b>. Medir la frecuencia de los rayos es comparar su color.</li>
      <li>Cuchara quebrada; piscina menos profunda. Del medio lento al rápido, sobre el ángulo límite: reflexión total interna.</li></ul>
      <div class="box alert">Ordena los medios por rapidez: aire→agua se acerca y vidrio→agua se aleja, entonces el vidrio es el más lento y aire→vidrio se acerca a la normal.</div>` },
    { t: 'El color de los objetos', b: r`
      <p>Un objeto se ve del color que refleja (o transmite) y absorbe el resto; si la luz no trae su color, se ve <b>negro</b> (bandera con luz roja: blanco, rojo y estrella rojos; azul negro). Un filtro verde transmite solo verde.</p>
      <p>Mezcla de luces: rojo + verde = amarillo; rojo + azul = magenta; verde + azul = cian; los tres = blanco.</p>
      <div class="box alert">Dos focos (rojo y verde) y un cubo: la pared se ve amarilla y cada sombra, del color de la <b>otra</b> luz (sombra roja y verde).</div>` }
  ],

  fis_espejos_lentes: [
    { t: 'Imágenes y espejo plano', b: r`
      <p><b>Real:</b> los rayos se cruzan, se proyecta en pantalla, invertida. <b>Virtual:</b> se cruzan las prolongaciones, no se proyecta, derecha.</p>
      <p><b>Espejo plano:</b> virtual, derecha, igual tamaño, a la misma distancia detrás del espejo; intercambia izquierda y derecha (AMBULANCIA al revés). A 1 m del espejo, estás a 2 m de tu imagen. Las prolongaciones de las visuales se cortan en la imagen.</p>` },
    { t: 'Espejos curvos', b: r`
      <div class="cols"><div>
      <p>Cóncavo (converge) y convexo (diverge). F es el punto medio entre C y V. Rayos: paralelo → por F; por F → paralelo; por C → vuelve sobre sí. Fuente en F: haz paralelo (faros, focos).</p>
      <table><tbody>
      <tr><td>Más allá de C</td><td>real, invertida, menor</td></tr>
      <tr><td>En C</td><td>real, invertida, igual</td></tr>
      <tr><td>Entre C y F</td><td>real, invertida, mayor</td></tr>
      <tr><td>En F</td><td>no se forma</td></tr>
      <tr><td>Entre F y V</td><td>virtual, derecha, mayor (maquillaje)</td></tr></tbody></table>
      <p><b>Convexo:</b> siempre virtual, derecha y menor; gran campo visual (espejos laterales: «más cerca de lo que aparentan»; tiendas, curvas).</p>
      </div><div><div class="qfig"><img class="tikz" src="paes/fisica/fig/ond_espejo_concavo.svg" alt="Espejo cóncavo con vértice V, foco F y centro de curvatura C sobre el eje. Un objeto ubicado más allá de C envía tres rayos: uno paralelo al eje que se refleja por el foco, otro que pasa por el foco y se refleja paralelo, y otro que pasa por C y se refleja sobre sí mismo. Se cruzan entre C y F formando una imagen real, invertida y de menor tamaño"></div></div></div>` },
    { t: 'Lentes', b: r`
      <div class="cols"><div>
      <p><b>Convergente</b> (gruesa al centro): paralelo → por F del otro lado; por el centro no se desvía. Dos láseres paralelos al eje se cruzan en F.</p>
      <table><tbody>
      <tr><td>Más allá de 2F</td><td>real, invertida, menor (cámara)</td></tr>
      <tr><td>Entre 2F y F</td><td>real, invertida, mayor (proyector)</td></tr>
      <tr><td>Entre F y lente</td><td>virtual, derecha, mayor (lupa)</td></tr></tbody></table>
      <p><b>Divergente:</b> siempre virtual, derecha y menor (mirilla, miopía).</p>
      </div><div><div class="qfig"><img class="tikz" src="paes/fisica/fig/ond_lente_conv.svg" alt="Lente convergente con focos F y puntos 2F a ambos lados. Un objeto ubicado más allá de 2F envía un rayo paralelo que sale por el foco, un rayo por el centro que no se desvía y un rayo por el foco que sale paralelo. Se cruzan al otro lado, entre F y 2F, formando una imagen real, invertida y de menor tamaño"></div></div></div>
      <div class="box alert">Invertida = real = cóncavo o convergente. Derecha y menor = convexo o divergente. Derecha e igual = plano. Para estudiar una variable (el radio de la lente), cambia solo esa.</div>` }
  ],

  fis_dispositivos: [
    { t: 'Comunicación, radar y antenas', b: r`
      <p>Radio, TV, celular, wifi y GPS usan <b>radio y microondas</b>: emisor → antena → receptor que sintoniza una frecuencia (AM o FM). Celular de 1,5 GHz: $\lambda = c/f = 0{,}20$ m.</p>
      <p><b>Radar:</b> las microondas se <b>propagan y se reflejan</b>; ida y vuelta: $d = \dfrac{c\,t}{2}$. Satélite a $d$: la señal vuelve en $t = 2d/c$.</p>
      <p><b>Antena parabólica y radiotelescopio:</b> reflejan y concentran las ondas en el <b>foco</b>, donde va el receptor. ALMA está en Atacama porque el vapor de agua absorbe las ondas milimétricas.</p>` },
    { t: 'Telescopios, prismáticos y fibra', b: r`
      <div class="cols"><div>
      <ul><li><b>Refractor:</b> lentes (objetivo convergente y ocular). <b>Reflector:</b> espejo cóncavo; los grandes son reflectores: el espejo puede ser enorme y sostenerse por detrás.</li>
      <li><b>Prismáticos:</b> prismas con reflexión total interna que enderezan la imagen y acortan el instrumento.</li>
      <li><b>Fibra óptica:</b> núcleo de mayor índice que el revestimiento; reflexión total interna.</li>
      <li><b>Faro:</b> ampolleta en el foco de un espejo cóncavo; si los rayos no salen paralelos, el espejo tiene irregularidades.</li></ul>
      </div><div><div class="qfig"><img class="tikz" src="paes/fisica/fig/ond_fibra.svg" alt="Corte de una fibra óptica: un núcleo central de mayor índice de refracción rodeado por un revestimiento de menor índice. Un rayo de luz entra al núcleo y avanza en zigzag reflejándose por completo cada vez que llega al límite con el revestimiento (reflexión total interna)"></div></div></div>` },
    { t: 'Láser, pantallas y control remoto', b: r`
      <p><b>Láser:</b> una sola frecuencia, coherente y haz que casi no se abre (concentra energía). <b>Pantallas:</b> píxeles rojo, verde y azul por mezcla aditiva (rojo + verde = amarillo). <b>Control remoto:</b> infrarrojo, que un libro absorbe; el wifi (microondas) atraviesa paredes.</p>
      <div class="box alert">En investigaciones: independiente = lo que se cambia (material de la caja); dependiente = lo que se mide (señal). Resultados: gráfico de la dependiente en función de la independiente.</div>` }
  ],

  fis_cinematica: [
    { t: 'Posición, desplazamiento y distancia', b: r`
      <div class="cols"><div>
      <p>Sistema de referencia: origen, sentido positivo y reloj. El movimiento es relativo: ¿respecto de qué?</p>
      <ul><li>Desplazamiento $\Delta x = x_f - x_i$ (con signo); no depende del origen elegido.</li>
      <li>Distancia recorrida: largo total del camino. Igual a $|\Delta x|$ solo en línea recta sin devolverse. Vuelta completa: $\Delta x = 0$.</li></ul>
      </div><div><div class="qfig"><img class="tikz" src="paes/fisica/fig/mov_trayecto.svg" alt="Recta numérica de −1 a 11 metros. Un carrito parte en x = 2 m, avanza 8 m hasta x = 10 m y luego vuelve 4 m hasta x = 6 m. Bajo el eje, una flecha de x = 2 m a x = 6 m indica un desplazamiento de +4 m"></div></div></div>` },
    { t: 'Rapidez, velocidad y aceleración', b: r`
      <p>Rapidez media $= d/\Delta t$; velocidad media $= \Delta x/\Delta t$. Velocímetro: rapidez instantánea. km/h $\div 3{,}6$ = m/s.</p>
      <p>$a = \dfrac{\Delta v}{\Delta t}$ (m/s²). Hay aceleración si cambia la rapidez o la <b>dirección</b> (curva con velocímetro fijo).</p>
      <div class="box alert">Rapidez media = distancia total / tiempo total, con detenciones; no es el promedio de rapideces (6 km a 12 km/h y 6 km a 6 km/h: 12 km en 1,5 h = 8 km/h). 40 m al norte y 30 m al este: $|\Delta x| = 50$ m.</div>` },
    { t: 'Relatividad de Galileo', b: r`
      <div class="cols"><div>
      <p>Las leyes del movimiento son iguales en sistemas con velocidad constante entre sí; cambian posiciones, velocidades y trayectorias. En una recta: $v_{\text{suelo}} = v_{\text{relativa}} + v_{\text{sistema}}$, con signo.</p>
      <p>Tren 20 m/s y pasajero 2 m/s hacia adelante: 22 m/s. Escalera de 15 m a 0,5 m/s y persona a 1 m/s: 10 s. Bote 4 m/s, río 1 m/s: 5 m/s abajo, 3 m/s arriba.</p>
      <div class="box alert">En un tren o avión con velocidad constante, la moneda o el agua caen como en reposo (en vertical para el pasajero; en curva vista desde el suelo). Concluir algo a partir de lo observado es una inferencia.</div>
      </div><div><div class="qfig"><img class="tikz" src="paes/fisica/fig/mov_tren.svg" alt="Vagón de tren que avanza hacia la derecha con velocidad v tren respecto del andén; dentro, un pasajero camina hacia la derecha con velocidad v p respecto del tren; a la izquierda, un observador de pie en el andén"></div></div></div>` }
  ],

  fis_mru: [
    { t: 'Ecuación y gráficos', b: r`
      <div class="cols"><div>
      <p>MRU: velocidad constante, $a = 0$, <b>distancias iguales en tiempos iguales</b>. $x(t) = x_0 + v\,t$; el signo de $v$ es el sentido. $\Delta x = v\,t$.</p>
      <ul><li>$x$–$t$: recta; corte = $x_0$, <b>pendiente = $v$</b>; sube (+), baja (−), horizontal (reposo); más inclinada, más rápida.</li>
      <li>$v$–$t$: recta horizontal; <b>área = desplazamiento</b> (bajo el eje, negativo). Distancia: todas las áreas positivas.</li></ul>
      </div><div><div class="qfig"><img class="tikz" src="paes/fisica/fig/mov_mru_xt.svg" alt="Gráfico de posición en metros versus tiempo en segundos, de 0 a 8 s. Recta A desde 0 m hasta 32 m a los 8 s; recta B desde 24 m hasta 0 m a los 8 s; recta horizontal C en 12 m"></div></div></div>
      <div class="box alert">$x$–$t$ no es la trayectoria. Volver al inicio: velocidad media 0, rapidez media no.</div>` },
    { t: 'Encuentros', b: r`
      <p>Un solo origen para ambos: iguala $x_A(t) = x_B(t)$, despeja $t$ y reemplaza. Atajo: uno hacia el otro $t = \dfrac{D}{v_A + v_B}$; uno persigue al otro $t = \dfrac{D}{v_A - v_B}$.</p>
      <p>900 m, a 4 y 5 m/s: $t = 100$ s, a 400 m de la primera. Trueno 3 s después del relámpago: $340\cdot 3 = 1020$ m.</p>
      <div class="box alert">En $x$–$t$ el cruce es encuentro; en $v$–$t$, solo igual velocidad.</div>` }
  ],

  fis_mrua: [
    { t: 'Ecuaciones', b: r`
      <p>$v = v_0 + a\,t$ &nbsp; $x = x_0 + v_0\,t + \tfrac{1}{2}a\,t^2$ &nbsp; $\Delta x = \dfrac{v_0 + v}{2}\,t$ &nbsp; $v^2 = v_0^2 + 2a\,\Delta x$</p>
      <p>«Parte del reposo»: $v_0 = 0$; «se detiene»: $v = 0$. Frena si $a$ y $v$ tienen signos opuestos. Desde el reposo: $x = \tfrac{1}{2}a t^2$, lo recorrido en cada segundo crece 1 : 3 : 5 : 7 (aumenta siempre lo mismo).</p>
      <div class="box alert">En $x = 5 + 2t + 3t^2$ el 3 es $a/2$: $a = 6$ m/s².</div>` },
    { t: 'Gráficos', b: r`
      <div class="qfig"><img class="tikz" src="paes/fisica/fig/mov_mrua_graficos.svg" alt="Tres gráficos de un mismo MRUA con velocidad inicial 2 m/s y aceleración 2 m/s², de 0 a 4 s. Posición–tiempo: una parábola que sube de 0 a 24 m. Velocidad–tiempo: una recta que sube de 2 a 10 m/s, con el área bajo ella sombreada y marcados Δv y Δt para la pendiente. Aceleración–tiempo: una recta horizontal en 2 m/s², con el área bajo ella sombreada"></div>
      <p>$x$–$t$: parábola. $v$–$t$: recta; <b>pendiente = $a$</b>, <b>área = desplazamiento</b> (triángulos y rectángulos). $a$–$t$: horizontal. Tramo horizontal en $v$–$t$: MRU, no reposo; cruce: igual velocidad (compara posiciones con áreas).</p>` },
    { t: 'Caída libre y frenado', b: r`
      <p>Sin aire, todo cae con $g = 10$ m/s² hacia abajo, sin importar la masa: $v = g t$, $h = 5t^2$. Lanzado hacia arriba: sube $v_0/g$, $h_{\text{máx}} = v_0^2/2g$; en $v$–$t$, una recta de pendiente $-g$ que cruza el cero.</p>
      <p>Frenado parejo hasta 0: $d = \dfrac{v_0}{2}\,t$ (72 km/h en 4 s: 40 m) o $d = \dfrac{v_0^2}{2a}$: el doble de rapidez, <b>cuatro veces</b> la distancia.</p>
      <div class="box alert">En el punto más alto $v = 0$, pero $a = g$. Variable controlada: la que se mantiene igual (la distancia que se cronometra).</div>` }
  ],

  fis_newton: [
    { t: 'Fuerza neta, inercia y segunda ley', b: r`
      <div class="cols"><div>
      <p>Fuerza: interacción de un cuerpo sobre otro; vector, en N, con dinamómetro. Fuerza neta: suma con signo (30 N y 10 N opuestas: 20 N).</p>
      <p><b>1.ª ley:</b> fuerza neta 0 ⇔ reposo o velocidad constante (bus que frena, sonda sin motor). La masa mide la inercia.</p>
      <p><b>2.ª ley:</b> $F_{\text{neta}} = m\,a$; $a$ apunta como la fuerza neta, no como la velocidad. Fuerza $2F$ sobre $3m$: $\tfrac{2}{3}a$.</p>
      </div><div><div class="qfig"><img class="tikz" src="paes/fisica/fig/fza_vt_newton.svg" alt="Gráfico de rapidez en función del tiempo de un carro: en el tramo I, de 0 a 2 s, la rapidez sube de 0 a 6 m/s; en el tramo II, de 2 a 5 s, se mantiene en 6 m/s; en el tramo III, de 5 a 8 s, baja de 6 m/s a 0"></div></div></div>
      <div class="box alert">Velocidad constante no es «sin fuerzas»: se equilibran. En $v$–$t$, pendiente × masa = fuerza neta; tramo horizontal: 0. Roce igual a $F$ (alfombra): $a = 0$.</div>` },
    { t: 'Acción y reacción, DCL', b: r`
      <div class="cols"><div>
      <p><b>3.ª ley:</b> igual magnitud, sentido contrario, sobre <b>cuerpos distintos</b> (nunca se anulan), mismo tipo. Camión y auto chocan con igual fuerza; el auto, 10 veces menos masivo, acelera 10 veces más.</p>
      <p><b>DCL:</b> solo las fuerzas sobre el cuerpo: peso + cada contacto (normal, roce, tensión). Velocidad constante: flechas opuestas iguales.</p>
      </div><div><div class="qfig"><img class="tikz" src="paes/fisica/fig/fza_pares.svg" alt="Libro sobre una mesa, dibujados por separado. Par de contacto, en azul: la mesa empuja al libro hacia arriba con la normal y el libro empuja a la mesa hacia abajo. Par gravitacional, en naranjo: la Tierra atrae al libro hacia abajo con el peso y el libro atrae a la Tierra hacia arriba"></div></div></div>
      <div class="box alert">Peso y normal sobre un libro <b>no</b> son par: actúan sobre el mismo cuerpo. Reacción del peso: el libro atrae a la Tierra. Con masa fija, medir $a$ es medir la fuerza neta. Controlada: lo que no cambia (la compresión del resorte).</div>` }
  ],

  fis_fuerzas: [
    { t: 'Peso, normal y tensión', b: r`
      <div class="cols"><div>
      <p><b>Masa</b> (kg, balanza): igual en todo lugar. <b>Peso</b> $P = m\,g$ (N, dinamómetro); Luna $g = 1{,}6$. Pesa 600 N en la Tierra y 240 N en X: $m = 60$ kg, $g = 4$ m/s².</p>
      <p><b>Normal:</b> perpendicular a la superficie, sale del DCL. Tirar hacia arriba con $F$: $N = P - F$; caja encima: $N = P + P_2$.</p>
      <p><b>Tensión:</b> tira a lo largo de la cuerda, igual en toda cuerda ideal; la polea ideal solo cambia la dirección. Colgante en reposo: $T = m\,g$. Cuerda gruesa (no ideal): mayor tensión arriba.</p>
      </div><div><div class="qfig"><img class="tikz" src="paes/fisica/fig/fza_polea.svg" alt="Caja sobre una mesa horizontal, atada a una cuerda que pasa por una polea en el borde de la mesa; del otro extremo de la cuerda cuelga un cuerpo de masa m"></div></div></div>
      <div class="box alert">¿La tensión depende del lugar? Mide con el dinamómetro en dos puntos de la <b>misma</b> cuerda.</div>` },
    { t: 'Ley de Hooke', b: r`
      <div class="cols"><div>
      <p>$F = k\,\Delta x$, con $\Delta x = L - L_0$. $k$ = pendiente de $F$–$\Delta x$; mayor $k$, más rígido. Proporcional: 30 N estiran 20 cm, para 45 cm hacen falta 67,5 N.</p>
      <p>Cumple Hooke si a iguales aumentos de $F$ hay iguales aumentos de $\Delta x$. Vale hasta el límite elástico: si todos los datos están en una recta, no se sabe dónde está.</p>
      </div><div><div class="qfig"><img class="tikz" src="paes/fisica/fig/fza_hooke_grafico.svg" alt="Gráfico de fuerza en newton en función de la deformación en centímetros para dos resortes. La recta del resorte A pasa por 20 N con 4 cm y llega a 30 N con 6 cm. La recta del resorte B pasa por 20 N con 10 cm y llega a 24 N con 12 cm"></div></div></div>
      <div class="box alert">Usa la deformación, no la longitud total.</div>` }
  ],

  fis_roce: [
    { t: 'Roce estático y cinético', b: r`
      <p>Paralelo a las superficies, se opone al deslizamiento. Depende del par de superficies ($\mu$, sin unidad) y de la <b>normal</b>; no del área ni de la rapidez (afirmarlo tras medir es una conclusión).</p>
      <ul><li><b>Estático</b> (en reposo): iguala a la fuerza que tiende a moverlo, hasta $\mu_s N$. Caja de 40 kg, $\mu_s = 0{,}5$, empujada con 150 N: tope 200 N, roce 150 N.</li>
      <li><b>Cinético</b> (desliza): $f_k = \mu_k N$, constante, $\mu_k &lt; \mu_s$. Velocidad constante: $F = f_k$. Si $F &gt; f_k$: $a = (F - f_k)/m$.</li></ul>
      <div class="box alert">$\mu_s N$ es el máximo, no el valor de siempre. Doble normal (bloque encima): doble roce. $\mu$ no cambia con la carga.</div>` },
    { t: 'Gráficos del roce', b: r`
      <div class="cols"><div>
      <p>P–Q: reposo, roce = fuerza aplicada. Q: estático máximo, empieza a deslizar. Q–R: cinético constante.</p>
      <p>$F$–$t$: el valor al arrancar es $\mu_s N$; el tramo con velocidad constante da $f_k = \mu_k N$. Si se quita $F$, el roce queda solo: fuerza neta contraria al movimiento, frena. Datos: dinamómetro y cronómetro.</p>
      </div><div><div class="qfig"><img class="tikz" src="paes/fisica/fig/fza_roce_grafico.svg" alt="Gráfico de fuerza de roce en función de la fuerza aplicada. Del punto P en el origen al punto Q, en 12 N, el roce estático crece igual que la fuerza aplicada. En Q el roce baja de golpe a 8 N y desde ahí, hasta el punto R en 20 N de fuerza aplicada, se mantiene constante en 8 N como roce cinético"></div></div></div>
      <div class="box alert">Libro apretado contra la pared: $N = F$ y $f_r = P$.</div>` },
    { t: 'Roce con el aire', b: r`
      <div class="cols"><div>
      <p>Crece con la rapidez, el área frontal y depende de la forma. <b>Velocidad límite:</b> roce = peso. Al abrir el paracaídas el roce supera al peso y frena hasta una velocidad límite menor.</p>
      <p>Masas iguales y distinta caída: distinta área de paracaídas (deducirlo es una inferencia). En el vacío todo cae igual.</p>
      </div><div><div class="qfig"><img class="tikz" src="paes/fisica/fig/fza_paracaidas.svg" alt="Gráfico de rapidez en función del tiempo de un paracaidista. Tramo I: la rapidez aumenta cada vez más lento. Tramo II: constante en v1. Al inicio del tramo III se abre el paracaídas y la rapidez baja rápidamente. Tramo IV: constante en v2, mucho menor que v1"></div></div></div>` }
  ]
});

/* Versión compacta · Física (Tierra, Electricidad, Habilidades), solo contenidos del Módulo Común. */
Object.assign(COMPACTO, {
  fis_deriva: [
    { t: 'Deriva continental', b: r`
      <p><b>Wegener</b> (1912): los continentes formaron <b>Pangea</b> y se desplazaron. Evidencias independientes:</p>
      <ul><li><b>Encaje</b> de las costas de América del Sur y África.</li>
      <li><b>Fósiles</b> iguales en continentes separados: <i>Mesosaurus</i>, reptil de agua dulce, no cruzaba océanos.</li>
      <li><b>Rocas y cordilleras</b> de igual tipo y edad que continúan de un continente a otro.</li>
      <li><b>Paleoclimas</b>: huellas glaciares en India, África y Brasil; bosques en la Antártica → estuvieron en otras latitudes: los continentes cambian de posición.</li></ul>
      <div class="box alert">Se rechazó porque Wegener <b>no explicó qué fuerza</b> movía los continentes, no por falta de evidencias. Los fósiles no viajan con las corrientes.</div>` },
    { t: 'Expansión del fondo oceánico', b: r`
      <p><b>Hess</b> (años 60): en las <b>dorsales</b> sube magma y se forma corteza nueva que se desplaza a ambos lados; en las <b>fosas</b> se hunde (subducción).</p>
      <ul><li>Roca más <b>antigua</b> cuanto más <b>lejos</b> del eje; a igual distancia, una a cada lado, <b>igual edad</b>. Con expansión constante la edad es proporcional a la distancia: 50 km → 2 millones de años, 100 km → 4.</li>
      <li><b>Bandas magnéticas</b> simétricas: los minerales registran el campo magnético al solidificarse.</li>
      <li>Rapidez de separación = distancia entre rocas formadas juntas ÷ tiempo (cm por año).</li>
      <li>Dorsal sin fosas: el océano se ensancha y sus orillas se <b>alejan</b>.</li></ul>` },
    { t: 'Límites de placas y Chile', b: r`
      <p>La <b>litosfera</b> está dividida en placas que se mueven sobre la <b>astenosfera</b>: la tectónica de placas da el mecanismo. Sismos y volcanes se concentran en los bordes.</p>
      <table><thead><tr><th>Límite</th><th>Movimiento</th><th>Resultado</th></tr></thead><tbody>
      <tr><td>Divergente</td><td>se separan</td><td>dorsal, corteza nueva (Islandia)</td></tr>
      <tr><td>Convergente oceánica-continental</td><td>la oceánica, más densa, subduce</td><td>fosa, cordillera, volcanes, sismos</td></tr>
      <tr><td>Convergente continental-continental</td><td>chocan sin hundirse</td><td>cordillera por plegamiento (Himalaya)</td></tr>
      <tr><td>Transformante</td><td>se deslizan lateralmente</td><td>fallas y sismos, sin volcanes (San Andrés, Scotia)</td></tr></tbody></table>
      <p><b>Chile:</b> Nazca subduce bajo la Sudamericana: fosa, sismos con hipocentros más profundos hacia el este, volcanes (magma a unos 100 km) y Andes por compresión. Menor ángulo de subducción, más compresión y cordillera más alta.</p>
      <div class="box alert">Flechas que se alejan: divergente; que se acercan: convergente. Mide entre estaciones de placas <b>distintas</b> y durante <b>años</b>: se mueven cm por año.</div>` }
  ],

  fis_interior: [
    { t: 'Capas y ondas sísmicas', b: r`
      <table><tbody>
      <tr><td><b>Modelo estático</b> (composición)</td><td>corteza (continental 5–70 km, oceánica 5–10 km), manto hasta 2900 km, núcleo de hierro y níquel</td></tr>
      <tr><td><b>Modelo dinámico</b> (estado físico)</td><td>litosfera <b>rígida</b> (corteza + manto superior, forma las placas), astenosfera <b>plástica</b> (sólida, fluye lento), mesosfera sólida, núcleo externo <b>líquido</b>, núcleo interno sólido por la presión</td></tr></tbody></table>
      <p>El interior se conoce por las <b>ondas sísmicas</b> (la perforación más profunda llega a unos 12 km). <b>P</b>: longitudinales, las más rápidas, viajan por sólidos y líquidos. <b>S</b>: transversales, más lentas, <b>solo por sólidos</b>. Las S no cruzan de 2900 a 5150 km: el núcleo externo es líquido.</p>
      <div class="box alert">Litosfera ≠ corteza. La astenosfera no es roca fundida. P y S nacen juntas: las P llegan antes por ser más rápidas.</div>` },
    { t: 'Sismos: magnitud e intensidad', b: r`
      <p>Las rocas trabadas en los bordes acumulan <b>energía elástica</b> y la liberan de golpe como ondas sísmicas. <b>Hipocentro</b>: punto interior donde empieza la ruptura; <b>epicentro</b>: punto de la superficie justo encima. Un sismo en el mar puede generar un <b>tsunami</b>, más rápido mientras más profunda es el agua.</p>
      <p>Distancia: $\dfrac{d}{v_S} - \dfrac{d}{v_P} = \Delta t$. Con 6 y 4 km/s y 20 s: $\dfrac{d}{12} = 20$, $d = 240$ km.</p>
      <table><thead><tr><th></th><th>Magnitud</th><th>Intensidad</th></tr></thead><tbody>
      <tr><td>Mide</td><td>energía liberada</td><td>efectos en un lugar</td></tr>
      <tr><td>Valores</td><td>uno por sismo</td><td>uno por lugar</td></tr>
      <tr><td>Escala</td><td>Richter o Mw, logarítmica: +1 ≈ 32 veces la energía</td><td>Mercalli, I a XII</td></tr></tbody></table>
      <div class="box alert">2 grados más no son 2 ni 64 veces: $32\cdot 32 \approx 1000$. Para estimar la magnitud posible de una falla, compárala con fallas similares; dos años de registro no bastan.</div>` }
  ],

  fis_corriente_ohm: [
    { t: 'Corriente, voltaje y resistencia', b: r`
      <ul><li><b>Corriente</b>: flujo de cargas en un circuito cerrado; $I = \dfrac{q}{t}$ en A = C/s, con $t$ en segundos (30 C en 1 min: 0,5 A).</li>
      <li>En un metal se mueven los <b>electrones</b>, del polo − al + por fuera; el <b>sentido convencional</b> es el contrario. La corriente no se gasta en la ampolleta: lo que se transforma es energía.</li>
      <li><b>Voltaje</b> $V$: energía por carga (V = J/C); impulsa la corriente.</li>
      <li><b>Resistencia</b> $R$ (Ω): aumenta con el <b>largo</b> y la temperatura, disminuye con el <b>grosor</b>, depende del material. La menor: corto y grueso.</li></ul>
      <div class="box alert">Analogía del agua: altura = voltaje, tubo = conductor (largo, radio = sección), caudal = corriente. Para relacionar $R$ con el largo o el diámetro, mide también esa variable (regla, pie de metro).</div>` },
    { t: 'Ley de Ohm y gráficos', b: r`
      <p>$V = I\cdot R$, así $I = V/R$ y $R = V/I$. Con $R$ fija, $I$ es proporcional a $V$: si 1,5 V dan 0,3 A, 4,5 V dan 0,9 A. Etiqueta 220 V y 5 A: 44 Ω. Más corriente: más voltaje (otra pila en serie) o menos resistencia.</p>
      <ul><li>$V$ en función de $I$: recta por el origen (óhmico), pendiente $= R$; más inclinada, mayor $R$.</li>
      <li>$I$ en función de $V$: pendiente $= 1/R$; $R$ es el inverso de la pendiente.</li>
      <li>Curva (filamento, LED): no óhmico; el filamento aumenta su $R$ al calentarse.</li></ul>
      <div class="box alert">Convierte: 200 mA = 0,2 A; 2 kΩ = 2000 Ω. Óhmico exige $V/I$ constante, no solo que $I$ crezca.</div>` },
    { t: 'Medir', b: r`
      <p><b>Amperímetro</b> en <b>serie</b>; <b>voltímetro</b> en <b>paralelo</b> con el elemento; óhmetro con el elemento desconectado. Para $R$: mide $V$ e $I$ y divide. Anotar $I$ cada cierto tiempo responde «¿cómo cambia la corriente con el tiempo de funcionamiento?».</p>` }
  ],

  fis_circuitos: [
    { t: 'Serie y paralelo', b: r`
      <table><thead><tr><th></th><th>Serie</th><th>Paralelo</th></tr></thead><tbody>
      <tr><td>Corriente</td><td>la misma en todos</td><td>se reparte: $I = I_1 + I_2$</td></tr>
      <tr><td>Voltaje</td><td>se reparte: $V = V_1 + V_2$; la mayor $R$ recibe más</td><td>el mismo que la fuente</td></tr>
      <tr><td>$R_{\text{eq}}$</td><td>$R_1 + R_2$, mayor que cada una</td><td>$\dfrac{R_1 R_2}{R_1 + R_2}$ o $R/n$, menor que cada una</td></tr>
      <tr><td>Al agregar uno</td><td>$R_{\text{eq}}$ sube, $I$ baja</td><td>$R_{\text{eq}}$ baja, $I$ total sube</td></tr>
      <tr><td>Si uno se funde</td><td>se apagan todos</td><td>los demás siguen igual</td></tr></tbody></table>
      <p>2, 3 y 7 Ω en serie a 24 V: $I = 2$ A, $V_7 = 14$ V. 6 y 12 Ω en paralelo: $72/18 = 4$ Ω. Una casa es un paralelo a 220 V: al encender otro artefacto sube la corriente total y el voltaje de cada uno no cambia.</p>` },
    { t: 'Mixtos, nudos y datos', b: r`
      <p><b>Mixto:</b> reduce cada paralelo, suma lo que queda en serie, $I = V/R_{\text{eq}}$ y vuelve atrás. $R_1 = 2$ Ω en serie con $R_2 = 6$ Ω $\parallel R_3 = 3$ Ω, a 12 V: paralelo 2 Ω, $R_{\text{eq}} = 4$ Ω, $I = 3$ A; al paralelo le quedan 6 V, por $R_3$ pasan 2 A.</p>
      <p><b>Nudo:</b> la corriente que entra es igual a la que sale (3 A entran, 1,2 A por una rama, 1,8 A por la otra).</p>
      <p><b>Desde los datos:</b> misma corriente y voltajes distintos: serie, y el de más voltaje tiene mayor $R$. Mismo voltaje: paralelo, y la corriente total es la suma. Misma fuente y misma potencia: misma $R_{\text{eq}}$.</p>
      <p><b>Brillo</b> (ampolletas iguales): brilla más la de más corriente. $L_1$ seguida de $L_2 \parallel L_3$: $L_1$ brilla más; si $L_3$ se funde, $L_1$ brilla menos y $L_2$ más. Con baterías iguales, la menor corriente es la del circuito todo en serie.</p>
      <div class="box alert">En un paralelo, cada rama tiene el voltaje de la fuente y <b>menos</b> corriente que la total. Comprueba: voltajes en serie suman el total; corrientes de las ramas suman la total.</div>` }
  ],

  fis_potencia: [
    { t: 'Potencia y energía', b: r`
      <p>$P = V\cdot I = I^2 R = \dfrac{V^2}{R}$, en W = J/s. 20 Ω y 3 A: 180 W. Estufa de 220 V y 2200 W: $R = 22$ Ω.</p>
      <ul><li>Igual voltaje (paralelo, casa): menor $R$, mayor $P$. La ampolleta de 60 W tiene más $R$ y menos corriente que la de 100 W. Con baterías iguales, la mayor potencia la da la menor $R_{\text{eq}}$ (todo en paralelo).</li>
      <li>Igual corriente (serie): mayor $R$, mayor $P$.</li>
      <li>Para hervir la misma agua: más potencia, menos tiempo.</li></ul>
      <p>$E = P\cdot t$: con W y s da J (100 W en 1 min = 6000 J); con kW y h da kWh (1 kWh = 3 600 000 J). Costo = kWh × precio: 2000 W, 15 min al día, 30 días = 15 kWh; a 180 pesos, 2700 pesos.</p>
      <div class="box alert">Pasa W a kW y minutos a horas. La potencia no es el consumo: este depende también del tiempo de uso.</div>` },
    { t: 'Instalación domiciliaria', b: r`
      <ul><li><b>Medidor</b>: registra la energía consumida (kWh); con él se conoce el consumo y se calcula la cuenta.</li>
      <li><b>Tablero</b>: reparte la energía en circuitos y contiene las protecciones. <b>Diferencial</b>: detecta fugas a tierra y protege a las personas. <b>Tierra</b>: une la carcasa metálica con tierra.</li>
      <li>Enchufes y ampolletas en <b>paralelo</b> a 220 V; cada interruptor en serie con su ampolleta. Se comprueba el paralelo midiendo el mismo voltaje en cada enchufe; una maqueta se modela con todo en paralelo a la pila.</li>
      <li><b>Transformador</b>: reduce los 220 V para cargadores.</li></ul>` },
  ],

  fis_hab_investigacion: [
    { t: 'Pregunta, hipótesis y predicción', b: r`
      <ul><li><b>Pregunta investigable</b>: se responde midiendo; «¿cómo influye A en B?». Calza con lo que se varió y lo que se midió: si se anota la corriente cada 5 min, la pregunta es cómo cambia la corriente con el tiempo.</li>
      <li><b>Hipótesis</b>: respuesta tentativa, previa y comprobable, que relaciona la variable que cambia con la que se mide («la temperatura del agua influye en la refracción»; «el color del prisma influye en la luz que transmite»).</li>
      <li><b>Predicción</b>: resultado concreto esperado, «si…, entonces…», dicho antes de medir.</li>
      <li><b>Objetivo</b>: verbo en infinitivo con esas dos variables («determinar el efecto del ángulo sobre la aceleración»).</li></ul>
      <div class="box alert">Descarta hipótesis, preguntas u objetivos que hablan de variables que no cambiaron. Un experimento apoya o contradice una hipótesis; no la «demuestra».</div>` },
    { t: 'Variables y comparación justa', b: r`
      <ul><li><b>Independiente</b>: la que se cambia a propósito. <b>Dependiente</b>: la que se mide. <b>Controladas</b>: las que se dejan iguales. Frase: «el efecto de [independiente] sobre [dependiente]».</li>
      <li>Cambiar el material de la superficie es cambiar el <b>roce</b>. Si cambias la masa, también cambian el peso y la normal: <b>no</b> son controladas (sí lo son la compresión del resorte, la superficie o el área de apoyo).</li>
      <li>Compara solo ensayos que difieren en <b>una</b> variable; si cambian dos, no se sabe cuál causó el efecto.</li>
      <li>Para cumplir un objetivo, varía justo su variable independiente y deja lo demás igual (otra lente de distinto radio, sin mover objeto ni cámara). <b>Ensayo de referencia</b>: medir sin el factor estudiado.</li></ul>` },
    { t: 'Instrumentos', b: r`
      <table><tbody>
      <tr><td>longitud, deformación, diámetro</td><td>regla, pie de metro</td></tr>
      <tr><td>masa / fuerza</td><td>balanza / dinamómetro</td></tr>
      <tr><td>tiempo / ángulos</td><td>cronómetro / transportador</td></tr>
      <tr><td>posición y rapidez</td><td>sensor de movimiento</td></tr>
      <tr><td>corriente / voltaje / resistencia</td><td>amperímetro en serie / voltímetro en paralelo / óhmetro</td></tr>
      <tr><td>energía eléctrica</td><td>medidor (kWh)</td></tr></tbody></table>
      <div class="box alert">Hay que poder medir las <b>dos</b> variables de la relación: para $R$ y longitud, óhmetro y regla. El instrumento de la variable dependiente delata qué se mide (fuerza mínima para mover → dinamómetro).</div>` },
    { t: 'Componentes de una investigación', b: r`
      <table><tbody>
      <tr><td><b>Marco conceptual</b></td><td>lo que ya se sabe (leyes, teorías)</td></tr>
      <tr><td><b>Procedimiento</b></td><td>«se colgó, se midió, se repitió»</td></tr>
      <tr><td><b>Observación</b></td><td>lo que se percibe: «no llegaron al suelo al mismo tiempo»</td></tr>
      <tr><td><b>Resultado</b></td><td>los datos obtenidos</td></tr>
      <tr><td><b>Inferencia</b></td><td>va más allá de lo observado: «los paracaídas deben ser de distinto tamaño»</td></tr>
      <tr><td><b>Conclusión</b></td><td>responde la pregunta con los propios resultados: «el roce no depende del área de contacto»</td></tr></tbody></table>
      <div class="box alert">«Debe ser», «sugiere» → inferencia; «si…, entonces… ocurrirá» → predicción. Observar es registrar; inferir es proponer lo que no se vio.</div>` }
  ],

  fis_hab_evidencia: [
    { t: 'Tablas y gráficos', b: r`
      <p>Lee encabezados y unidades, identifica qué se cambió, describe la tendencia y compara de a pares. Con varias columnas, cada alternativa relaciona solo dos: revisa el <b>sentido</b> («disminuye cuando disminuye» ≠ «disminuye cuando aumenta»).</p>
      <p>En un gráfico mira ejes, forma, zonas donde cambia el comportamiento y huecos. Un resorte con recta por el origen cumple Hooke; donde la deformación crece más rápido, deja de cumplirla (límite elástico).</p>
      <ul><li>Con la misma fuerza, el sistema que más se comprime es el más <b>flexible</b>.</li>
      <li>Tramo horizontal en posición vs tiempo: <b>reposo</b>.</li>
      <li>Solo se valida lo que relaciona la variable cambiada con la medida: si solo cambia el espejo y cambia la formación de la imagen, esta depende de su curvatura.</li></ul>` },
    { t: 'Relaciones y pendiente', b: r`
      <table><tbody>
      <tr><td>Directamente proporcional</td><td>$y/x$ constante, recta por el origen ($F = kx$, $V = IR$)</td></tr>
      <tr><td>Lineal no proporcional</td><td>aumentos iguales, no pasa por el origen</td></tr>
      <tr><td>Inversamente proporcional</td><td>$x\cdot y$ constante ($\lambda f = v$: 10 Hz · 2 m = 20 m/s)</td></tr>
      <tr><td>Raíz</td><td>péndulo: para doblar $T$, cuadruplicar $L$</td></tr></tbody></table>
      <p><b>Pendiente:</b> $F$ vs $x$ → $k$; $V$ vs $I$ → $R$; $I$ vs $V$ → $1/R$; posición vs tiempo → velocidad; velocidad vs tiempo → aceleración.</p>
      <div class="box alert">«Aumentan juntas» no es «proporcionales»: prueba el cociente y el producto.</div>` },
    { t: 'Predecir y concluir', b: r`
      <ul><li><b>Interpolar</b> (dentro del rango) sigue la tendencia: con 2 cm/N, entre 3 y 6 N la deformación va de 6 a 12 cm. <b>Extrapolar</b> es riesgoso.</li>
      <li>Si $T$ crece con $\sqrt{L}$: 1 m → 2 s, así que 6 s exige $3^2 = 9$ veces el largo: 9 m.</li>
      <li>Una conclusión habla de las variables <b>medidas</b>, respeta el sentido de la tendencia, no sale del rango y no afirma causas que los datos no muestran.</li></ul>
      <div class="box alert">Lo que no se varió no se puede descartar ni afirmar como causa. Una relación «directa» solo usa las variables de la tabla (profundidad y rapidez del tsunami, no altura de olas).</div>` }
  ],

  fis_hab_evaluar: [
    { t: 'Ley, teoría y modelo', b: r`
      <ul><li><b>Ley</b>: qué pasa, una regularidad, a menudo matemática (Hooke, Ohm, reflexión).</li>
      <li><b>Teoría</b>: por qué pasa, explicación amplia con muchas evidencias (tectónica de placas).</li>
      <li><b>Modelo</b>: representación simplificada para calcular o explicar (cuerda ideal, polea sin roce, rayo de luz).</li></ul>
      <table><tbody>
      <tr><td>Cuerda ideal</td><td>falla si la tensión es mayor arriba que abajo (cuerda pesada)</td></tr>
      <tr><td>Resorte de Hooke</td><td>falla sobre el límite elástico</td></tr>
      <tr><td>Resistor óhmico</td><td>falla si $V/I$ cambia (filamento que se calienta)</td></tr>
      <tr><td>Rayo de luz</td><td>falla con aberturas comparables a λ (franjas por dos ranuras finas)</td></tr></tbody></table>
      <div class="box alert">Una ley no se convierte en teoría ni al revés. Que la corriente crezca con el voltaje no basta para cumplir Ohm.</div>` },
    { t: 'Validez y confiabilidad', b: r`
      <ul><li><b>Validez</b>: el diseño responde la pregunta; falla si cambian dos variables a la vez (alambres de distinto material, grosor y largo).</li>
      <li><b>Confiabilidad</b>: al repetir se obtiene algo parecido; mejora con repeticiones e instrumentos precisos. Medir 10 oscilaciones, dividir por 10 y repetir reduce el error del cronómetro.</li>
      <li><b>Precisas</b>: juntas entre sí. <b>Exactas</b>: cerca del valor real. Repetir no corrige un error de calibración.</li></ul>` },
    { t: 'Evaluar, replicar y comunicar', b: r`
      <ul><li>Una conclusión vale en el <b>rango medido</b>: probar hasta 5 N no dice nada de fuerzas mayores; si el gráfico no muestra quiebre, el límite elástico es desconocido.</li>
      <li>Si en el mismo período cambian otros factores (se agrega un televisor) y no hay datos de uso, no se puede aislar el efecto de un artefacto.</li>
      <li><b>Replicar</b>: mantener las condiciones de las que depende el fenómeno (profundidad de los orificios bajo el agua; rendijas igual de finas y juntas).</li>
      <li><b>Comunicar</b>: dependencia entre variables → gráfico de la dependiente en función de la independiente; valores exactos → tabla; fenómeno → esquema; instalación → plano; población → afiche.</li>
      <li><b>Tecnología</b>: la ebullición depende de la presión atmosférica (sensor de presión); radar, infrarrojo nocturno, piezoeléctricos.</li></ul>
      <div class="box alert">Desconfía de «siempre», «cualquier» y «demuestra»: lo correcto suele ser prudente.</div>` }
  ],
});
