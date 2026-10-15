/* Contenido de "PAES Geometría: figuras y cuerpos" (Fabimath).
   Temario oficial PAES M1 Admisión 2027, eje Geometría:
     Unidad 1 · Figuras geométricas: teorema de Pitágoras; perímetro y área de triángulos, paralelogramos,
       trapecios y círculos; problemas en diversos contextos.
     Unidad 2 · Cuerpos geométricos: área de superficie y volumen de paralelepípedos, cubos y cilindros;
       problemas en diversos contextos.
   Estilo de preguntas tomado de las tres últimas pruebas publicadas por el DEMRE
   (PAES Invierno 2026, PAES Regular 2026 y PAES Invierno 2027), en paes/fuentes/.
   Notación chilena: coma decimal, punto de miles; montos en pesos dentro de <span class="peso">.
   Figuras TikZ en paes/m1/tikz/geo_*.tex, compiladas a paes/m1/fig/ con paes/m1/build_figs.py.
   Se carga después de paes_data.js: reutiliza r (String.raw).
   Cada pregunta: enun (HTML + $latex$), fig opcional, alts (4), ok (índice correcto), sol, conc. */

const GEO_FIGURAS = [

/* =====================================================================
   UNIDAD 1 · FIGURAS GEOMÉTRICAS
   ===================================================================== */
{
  id: 'geo_pitagoras', unit: 'Unidad 1 · Figuras geométricas', icon: '📐',
  title: 'Teorema de Pitágoras',
  desc: 'Catetos e hipotenusa, cómo calcular el lado que falta, tríos pitagóricos, el recíproco y sus usos: escaleras, diagonales de rectángulos y cajas, y distancia entre dos puntos del plano.',
  slides: [
    { t: 'El triángulo rectángulo y el teorema', b: r`
      <div class="cols"><div>
      <p>Un <b>triángulo rectángulo</b> tiene un ángulo de 90° (un ángulo recto), que se marca con un cuadradito.</p>
      <p>Los dos lados que forman el ángulo recto se llaman <b>catetos</b>. El lado que está al frente del ángulo recto es la <b>hipotenusa</b>: siempre es el lado más largo.</p>
      <p><b>Teorema de Pitágoras.</b> Si los catetos miden $a$ y $b$ y la hipotenusa mide $c$, entonces
      $$a^2 + b^2 = c^2$$</p>
      <p>En la figura, los catetos miden 3 y 4 y la hipotenusa mide 5. Si construimos un cuadrado sobre cada lado y contamos cuadraditos: $3^2 + 4^2 = 9 + 16 = 25 = 5^2$. ✔ Los dos cuadrados chicos juntos tienen la misma área que el cuadrado grande.</p>
      </div><div>
      <div class="qfig"><img class="tikz" src="paes/m1/fig/geo_pit_cuadrados.svg" alt="Triángulo rectángulo de catetos 3 y 4 e hipotenusa 5, con un cuadrado cuadriculado sobre cada lado: 9, 16 y 25 cuadraditos"></div>
      <div class="box alert"><b>Solo para triángulos rectángulos</b> Si el triángulo no tiene un ángulo de 90°, el teorema no se cumple. Y la hipotenusa va sola en un lado de la igualdad: es la que queda al frente del ángulo recto.</div>
      </div></div>` },
    { t: 'Calcular la hipotenusa', b: r`
      <div class="cols"><div>
      <p>Ejemplo: los catetos miden 6 cm y 8 cm. ¿Cuánto mide la hipotenusa $c$?</p>
      <p><b>Paso 1. Escribe el teorema.</b> $c^2 = 6^2 + 8^2$.</p>
      <p><b>Paso 2. Calcula los cuadrados.</b> $6^2 = 36$ y $8^2 = 64$. Queda $c^2 = 36 + 64 = 100$.</p>
      <p><b>Paso 3. Saca raíz cuadrada.</b> $c = \sqrt{100} = 10$ cm.</p>
      <p><b>Comprobación:</b> la hipotenusa debe ser el lado más largo, pero más corta que la suma de los catetos: $8 < 10 < 14$. ✔</p>
      <p>Otro ejemplo: catetos 5 y 12. $c^2 = 25 + 144 = 169$, así que $c = \sqrt{169} = 13$.</p>
      </div><div>
      <div class="qfig"><img class="tikz" src="paes/m1/fig/geo_pit_hip.svg" alt="Triángulo rectángulo de catetos 6 cm y 8 cm; la hipotenusa c está destacada"></div>
      <div class="box alert"><b>La raíz no se reparte</b> $\sqrt{36 + 64}$ <b>no</b> es $\sqrt{36} + \sqrt{64} = 6 + 8 = 14$. Primero se suma y después se saca la raíz: $\sqrt{100} = 10$.</div>
      <div class="box"><b>No olvides la raíz</b> $c^2 = 100$ todavía no es la respuesta: 100 es el área del cuadrado, la hipotenusa mide $\sqrt{100} = 10$.</div>
      </div></div>` },
    { t: 'Calcular un cateto', b: r`
      <div class="cols"><div>
      <p>Si conoces la hipotenusa y un cateto, el otro cateto se obtiene <b>restando</b>.</p>
      <p>Ejemplo: una escalera de 5 m está apoyada en un muro, con su pie a 3 m de la base del muro. ¿A qué altura $h$ llega?</p>
      <p><b>Paso 1. ¿Cuál es la hipotenusa?</b> La escalera, que está al frente del ángulo recto que forman el muro y el suelo: mide 5 m.</p>
      <p><b>Paso 2. Escribe el teorema.</b> $3^2 + h^2 = 5^2$, o sea $9 + h^2 = 25$.</p>
      <p><b>Paso 3. Despeja.</b> $h^2 = 25 - 9 = 16$, así que $h = \sqrt{16} = 4$ m.</p>
      <p><b>Comprobación:</b> $3^2 + 4^2 = 9 + 16 = 25 = 5^2$. ✔</p>
      </div><div>
      <div class="qfig"><img class="tikz" src="paes/m1/fig/geo_pit_escalera.svg" alt="Escalera de 5 m apoyada en un muro, con el pie a 3 m del muro; la altura h está marcada en el muro"></div>
      <div class="box"><b>Regla rápida</b><br>· Falta la hipotenusa: <b>suma</b> los cuadrados, $c = \sqrt{a^2 + b^2}$.<br>· Falta un cateto: <b>resta</b> los cuadrados, al más grande el más chico, $a = \sqrt{c^2 - b^2}$.</div>
      <div class="box alert"><b>Un cateto es más corto que la hipotenusa</b> Si te da un cateto más largo que la hipotenusa, sumaste cuando había que restar.</div>
      </div></div>` },
    { t: 'Tríos pitagóricos y el recíproco', b: r`
      <div class="cols"><div>
      <p>Un <b>trío pitagórico</b> son tres números enteros que cumplen $a^2 + b^2 = c^2$. Conviene reconocerlos: ahorran cuentas.</p>
      <table><thead><tr><th>Trío</th><th>Comprobación</th></tr></thead><tbody>
      <tr><td>3, 4, 5</td><td>$9 + 16 = 25$</td></tr>
      <tr><td>5, 12, 13</td><td>$25 + 144 = 169$</td></tr>
      <tr><td>8, 15, 17</td><td>$64 + 225 = 289$</td></tr>
      <tr><td>7, 24, 25</td><td>$49 + 576 = 625$</td></tr></tbody></table>
      <p>Si multiplicas un trío por un mismo número, sigue siendo trío: 6, 8, 10 (el doble de 3, 4, 5) o 0,3; 0,4; 0,5.</p>
      </div><div>
      <div class="box"><b>Recíproco del teorema</b> Si en un triángulo el cuadrado del lado mayor es igual a la suma de los cuadrados de los otros dos, el triángulo <b>es rectángulo</b>, y el ángulo recto está al frente del lado mayor.</div>
      <p><b>Ejemplo 1.</b> Lados 9, 12 y 15: $9^2 + 12^2 = 81 + 144 = 225 = 15^2$. ✔ Es rectángulo.</p>
      <p><b>Ejemplo 2.</b> Lados 4, 5 y 6: $4^2 + 5^2 = 16 + 25 = 41$, pero $6^2 = 36$. No es rectángulo.</p>
      <div class="box alert"><b>Compara con el lado mayor</b> El lado más largo es el que va solo. Con 5, 12 y 13, revisa $5^2 + 12^2$ contra $13^2$, no $5^2 + 13^2$ contra $12^2$.</div>
      </div></div>` },
    { t: 'Diagonales de rectángulos y de cajas', b: r`
      <div class="cols"><div>
      <p>La <b>diagonal</b> de un rectángulo lo parte en dos triángulos rectángulos: los lados son los catetos y la diagonal es la hipotenusa.</p>
      <p><b>Ejemplo.</b> Una pantalla de 48 cm de alto y 64 cm de ancho: $d^2 = 48^2 + 64^2 = 2304 + 4096 = 6400$, así que $d = 80$ cm. (Es el trío 3, 4, 5 multiplicado por 16.)</p>
      <p><b>Cuadrado.</b> Si el lado mide $\ell$: $d^2 = \ell^2 + \ell^2 = 2\ell^2$, y $d = \ell\sqrt{2}$.</p>
      <p><b>Caja (paralelepípedo).</b> La diagonal que cruza la caja por dentro cumple $D^2 = a^2 + b^2 + c^2$. Se obtiene aplicando Pitágoras dos veces: primero la diagonal del piso, $a^2 + b^2$, y después con la altura.</p>
      <p><b>Ejemplo.</b> Caja de 2, 3 y 6 cm: $D^2 = 4 + 9 + 36 = 49$, así que $D = 7$ cm.</p>
      </div><div>
      <div class="qfig"><img class="tikz" src="paes/m1/fig/geo_pit_diagonales.svg" alt="A la izquierda un rectángulo de lados a y b con su diagonal d; a la derecha una caja de aristas a, b y c con la diagonal del piso y la diagonal interior D"></div>
      <div class="box"><b>Pantallas en pulgadas</b> El "tamaño" de una pantalla es la medida de su diagonal. Si la razón alto : ancho es $9 : 16$, se escribe alto $= 9x$, ancho $= 16x$ y $(9x)^2 + (16x)^2 = d^2$.</div>
      </div></div>` },
    { t: 'Distancia entre dos puntos del plano', b: r`
      <div class="cols"><div>
      <p>Para medir la distancia entre $A(4, 2)$ y $B(10, 10)$ dibujamos un triángulo rectángulo con lados horizontal y vertical.</p>
      <p><b>Paso 1. Cateto horizontal.</b> Resta las coordenadas $x$: $10 - 4 = 6$.</p>
      <p><b>Paso 2. Cateto vertical.</b> Resta las coordenadas $y$: $10 - 2 = 8$.</p>
      <p><b>Paso 3. Pitágoras.</b> $d^2 = 6^2 + 8^2 = 36 + 64 = 100$, así que $d = 10$.</p>
      <p>En general, entre $(x_1, y_1)$ y $(x_2, y_2)$:
      $$d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$$</p>
      </div><div>
      <div class="qfig"><img class="tikz" src="paes/m1/fig/geo_pit_distancia.svg" alt="Plano cartesiano con los puntos A(4, 2) y B(10, 10) unidos por un segmento d, y el triángulo rectángulo de catetos 6 y 8"></div>
      <div class="box alert"><b>Ojo con los negativos</b> Entre $(-2, 1)$ y $(4, 9)$ el cateto horizontal es $4 - (-2) = 6$, no $4 - 2 = 2$. Y como se eleva al cuadrado, da lo mismo restar en un orden o en el otro.</div>
      </div></div>` },
    { t: 'Errores típicos y resumen', b: r`
      <table><thead><tr><th>Error</th><th>Así no</th><th>Así sí</th></tr></thead><tbody>
      <tr><td>Sumar los lados sin elevar</td><td>catetos 6 y 8: $c = 6 + 8 = 14$</td><td>$c = \sqrt{36 + 64} = 10$</td></tr>
      <tr><td>Repartir la raíz</td><td>$\sqrt{9 + 16} = 3 + 4$</td><td>$\sqrt{9 + 16} = \sqrt{25} = 5$</td></tr>
      <tr><td>Sumar cuando falta un cateto</td><td>hip. 13, cateto 5: $\sqrt{169 + 25}$</td><td>$\sqrt{169 - 25} = \sqrt{144} = 12$</td></tr>
      <tr><td>Olvidar la raíz</td><td>$c^2 = 100 \Rightarrow c = 100$</td><td>$c = \sqrt{100} = 10$</td></tr>
      <tr><td>Elegir mal la hipotenusa</td><td>ponerla como cateto</td><td>es el lado al frente del ángulo recto (el mayor)</td></tr>
      <tr><td>Signos en el plano</td><td>$4 - (-2) = 2$</td><td>$4 - (-2) = 6$</td></tr></tbody></table>
      <div class="box" style="margin-top:14px"><b>Método PAES</b> 1. Busca (o dibuja) el triángulo rectángulo. 2. Marca cuál es la hipotenusa. 3. Escribe $a^2 + b^2 = c^2$ con los datos. 4. Despeja: suma si falta la hipotenusa, resta si falta un cateto. 5. Saca la raíz. 6. Revisa que la hipotenusa sea el lado más largo.</div>` }
  ],
  example: {
    src: 'PAES Invierno 2026, adaptada',
    enun: r`<p>Una persona debe confeccionar una repisa con dos tensores, tal como se representa en la imagen. Cada tensor une el borde superior del panel vertical, de 200 cm de alto, con el borde exterior de la tabla horizontal, de 150 cm de ancho.</p><p>Si la persona quiere calcular la medida que debe tener cada uno de los tensores, en centímetros, ¿cuál de las siguientes expresiones debe utilizar?</p>`,
    fig: { type: 'img', src: 'paes/m1/fig/geo_pit_repisa.svg', alt: 'Repisa: un panel vertical de 200 cm de alto y una tabla horizontal de 150 cm forman un ángulo recto; dos tensores unen el borde superior del panel con el borde de la tabla' },
    alts: [r`$\sqrt{200^2 - 150^2}$`, r`$200^2 - 150^2$`, r`$\sqrt{200^2 + 150^2}$`, r`$200^2 + 150^2$`], ok: 2,
    sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> La expresión para calcular el largo de un tensor. Buscamos un triángulo rectángulo en la figura.</p><p><b>Paso 2. Encuentra el triángulo.</b> El panel vertical (200 cm) y la tabla horizontal (150 cm) forman un ángulo recto. El tensor une sus extremos: es el lado al frente del ángulo recto, o sea, la <b>hipotenusa</b>.</p><p><b>Paso 3. Escribe el teorema.</b> Si el tensor mide $t$: $t^2 = 200^2 + 150^2$.</p><p><b>Paso 4. Despeja.</b> Sacamos raíz: $t = \sqrt{200^2 + 150^2}$.</p><p><b>Respuesta:</b> $\sqrt{200^2 + 150^2}$.</p><p><b>Comprobación:</b> $\sqrt{40.000 + 22.500} = \sqrt{62.500} = 250$ cm. Es más largo que 200 y que 150, como debe ser una hipotenusa. ✔ (Es el trío 3, 4, 5 multiplicado por 50.)</p><p><b>¿Por qué no las otras?</b> $\sqrt{200^2 - 150^2}$ resta, como si faltara un cateto; daría unos 132 cm, más corto que el panel, y un tensor inclinado no puede ser más corto que el panel. $200^2 - 150^2$ y $200^2 + 150^2$ olvidan la raíz: dan el cuadrado del largo (17.500 y 62.500), no el largo.</p>`,
    conc: 'Si falta la hipotenusa, suma los cuadrados de los catetos y saca raíz.'
  },
  bank: [
    { enun: r`<p>En el triángulo rectángulo de la figura, ¿cuál es la medida del lado $x$?</p>`,
      fig: { type: 'img', src: 'paes/m1/fig/geo_pit_b01.svg', alt: 'Triángulo rectángulo de catetos 12 cm y 9 cm; la hipotenusa mide x' },
      alts: ['21 cm', r`$\sqrt{63}$ cm`, '15 cm', '225 cm'], ok: 2,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El lado $x$, que está al frente del ángulo recto: es la hipotenusa. Los catetos miden 12 cm y 9 cm.</p><p><b>Paso 2. Escribe el teorema.</b> $x^2 = 12^2 + 9^2$.</p><p><b>Paso 3. Calcula.</b> $x^2 = 144 + 81 = 225$.</p><p><b>Paso 4. Saca raíz.</b> $x = \sqrt{225} = 15$ cm.</p><p><b>Respuesta:</b> 15 cm.</p><p><b>Comprobación:</b> 15 es mayor que 12 (la hipotenusa es el lado más largo) y $9, 12, 15$ es el trío $3, 4, 5$ multiplicado por 3. ✔</p><p><b>¿Por qué no las otras?</b> 21 cm suma los catetos sin elevarlos: $12 + 9$. $\sqrt{63}$ cm resta los cuadrados, $144 - 81 = 63$, como si faltara un cateto. 225 cm olvida sacar la raíz.</p>`, conc: 'Hipotenusa: suma los cuadrados de los catetos y saca raíz.' },
    { enun: r`<p>En la parte superior de un poste de 3 metros de altura, perpendicular al suelo, se atan dos cuerdas tensas de 4 metros cada una, tal como se representa en la figura adjunta.</p><p>Para determinar la distancia $x$ entre el poste y el punto donde una cuerda toca el suelo, se realiza el siguiente procedimiento, cometiéndose un error.</p><p>Paso 1: se usa el teorema de Pitágoras y se reemplazan los valores, obteniéndose $x^2 + 3^2 = 4^2$.<br>Paso 2: se calculan las potencias, obteniéndose $x^2 + 9 = 16$.<br>Paso 3: se despeja $x^2$, obteniéndose $x^2 = 16 + 9$.<br>Paso 4: se calcula la raíz cuadrada, obteniéndose una distancia de 5 metros.</p><p>¿En cuál de los pasos se cometió el error?</p>`, src: 'PAES Invierno 2027, adaptada',
      fig: { type: 'img', src: 'paes/m1/fig/geo_pit_poste.svg', alt: 'Poste vertical de 3 m con dos cuerdas de 4 m que bajan hasta el suelo, una a cada lado; x es la distancia del poste al punto donde una cuerda toca el suelo' },
      alts: ['En el Paso 1', 'En el Paso 2', 'En el Paso 3', 'En el Paso 4'], ok: 2,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El paso con el error. Rehacemos cada paso y lo comparamos.</p><p><b>Paso 2. Revisa el Paso 1.</b> El poste y el suelo forman el ángulo recto; la cuerda (4 m) está al frente: es la hipotenusa. Los catetos son el poste (3 m) y $x$. Entonces $x^2 + 3^2 = 4^2$. <b>Correcto.</b></p><p><b>Paso 3. Revisa el Paso 2.</b> $3^2 = 9$ y $4^2 = 16$: $x^2 + 9 = 16$. <b>Correcto.</b></p><p><b>Paso 4. Revisa el Paso 3.</b> El 9 está sumando: pasa al otro lado <b>restando</b>. Debe quedar $x^2 = 16 - 9 = 7$. Se escribió $16 + 9$. <b>Aquí está el error.</b></p><p><b>Paso 5. Revisa el Paso 4.</b> $\sqrt{25} = 5$ está bien calculado; el resultado está malo porque arrastra el error.</p><p><b>Lo correcto:</b> $x = \sqrt{7} \approx 2{,}65$ m.</p><p><b>Comprobación:</b> un cateto debe ser más corto que la hipotenusa. Con $x = 5$ m, el cateto sería más largo que la cuerda de 4 m: imposible. Con $x \approx 2{,}65$ m sí tiene sentido. ✔</p><p><b>¿Por qué no las otras?</b> Los pasos 1 y 2 están bien hechos. El Paso 4 calcula bien la raíz de lo que recibió.</p>`, conc: 'Si falta un cateto, se resta: el cuadrado de la hipotenusa menos el del otro cateto.' },
    { enun: r`<p>En el triángulo rectángulo de la figura, la hipotenusa mide 26 cm y uno de los catetos mide 10 cm.</p><p>¿Cuál es la medida del cateto $x$?</p>`,
      fig: { type: 'img', src: 'paes/m1/fig/geo_pit_b03.svg', alt: 'Triángulo rectángulo con un cateto de 10 cm, hipotenusa de 26 cm y el otro cateto x' },
      alts: ['24 cm', '16 cm', r`$\sqrt{776}$ cm`, '36 cm'], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Un cateto. Conocemos la hipotenusa (26 cm) y el otro cateto (10 cm): hay que <b>restar</b> cuadrados.</p><p><b>Paso 2. Escribe el teorema.</b> $x^2 + 10^2 = 26^2$, o sea $x^2 + 100 = 676$.</p><p><b>Paso 3. Despeja.</b> $x^2 = 676 - 100 = 576$.</p><p><b>Paso 4. Saca raíz.</b> $x = \sqrt{576} = 24$ cm.</p><p><b>Respuesta:</b> 24 cm.</p><p><b>Comprobación:</b> $10^2 + 24^2 = 100 + 576 = 676 = 26^2$. ✔ Es el trío 5, 12, 13 multiplicado por 2.</p><p><b>¿Por qué no las otras?</b> 16 cm resta los lados sin elevar: $26 - 10$. $\sqrt{776}$ cm suma los cuadrados, $676 + 100$, como si $x$ fuera la hipotenusa; daría un cateto más largo que la hipotenusa. 36 cm suma los lados: $26 + 10$.</p>`, conc: 'Cateto: hipotenusa al cuadrado menos el otro cateto al cuadrado, y raíz.' },
    { enun: r`<p>Un proyector de imágenes tiene una proporción de $9 : 16$ entre la altura y el ancho de su proyección rectangular, siendo su altura el lado menor. Al situar el proyector a cierta distancia de la pared, la diagonal del rectángulo de proyección mide 100 pulgadas, tal como se representa en la imagen.</p><p>Para calcular la altura de este rectángulo se utiliza el modelo $(9x)^2 + (16x)^2 = 100^2$.</p><p>¿Qué representa $16x$ en el modelo?</p>`, src: 'PAES Invierno 2027, adaptada',
      fig: { type: 'img', src: 'paes/m1/fig/geo_pit_proyector.svg', alt: 'Un proyector ilumina un rectángulo en la pared; la diagonal del rectángulo mide 100 pulgadas' },
      alts: ['El factor de proporcionalidad', 'La altura del rectángulo de proyección', 'La distancia desde el proyector hasta la pared', 'El ancho del rectángulo de proyección'], ok: 3,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Qué significa $16x$ en el modelo. Interpretamos cada parte.</p><p><b>Paso 2. La proporción.</b> Altura : ancho $= 9 : 16$. Eso significa que la altura es 9 partes iguales y el ancho es 16 de esas partes. Si cada parte mide $x$, la altura es $9x$ y el ancho es $16x$. El número $x$ es el <b>factor de proporcionalidad</b>.</p><p><b>Paso 3. El modelo.</b> La diagonal parte el rectángulo en dos triángulos rectángulos: los catetos son la altura y el ancho, y la hipotenusa es la diagonal. Por eso $(9x)^2 + (16x)^2 = 100^2$.</p><p><b>Respuesta:</b> $16x$ es el ancho del rectángulo de proyección.</p><p><b>Comprobación:</b> resolviendo, $337x^2 = 10.000$ y $x \approx 5{,}45$. El ancho sería $16x \approx 87$ pulgadas y la altura $9x \approx 49$: el ancho es el lado mayor, como dice el enunciado. ✔</p><p><b>¿Por qué no las otras?</b> El factor de proporcionalidad es $x$, no $16x$. La altura es $9x$, el lado menor. La distancia del proyector a la pared no aparece en el modelo: el triángulo está en la pared.</p>`, conc: 'En una razón a : b, las medidas son ax y bx, con x el factor de proporcionalidad.' },
    { enun: r`<p>Una escalera de 2,5 m de largo está apoyada en un muro vertical, con su pie a 0,7 m de la base del muro, como muestra la figura.</p><p>¿A qué altura $h$ del suelo llega la parte superior de la escalera?</p>`,
      fig: { type: 'img', src: 'paes/m1/fig/geo_pit_escalera2.svg', alt: 'Escalera de 2,5 m apoyada en un muro, con el pie a 0,7 m del muro; h es la altura que alcanza en el muro' },
      alts: ['3,2 m', '1,8 m', '2,4 m', '2,6 m'], ok: 2,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> La altura $h$. El muro y el suelo forman un ángulo recto; la escalera está al frente: es la hipotenusa (2,5 m). Los catetos son 0,7 m y $h$.</p><p><b>Paso 2. Escribe el teorema.</b> $0{,}7^2 + h^2 = 2{,}5^2$.</p><p><b>Paso 3. Calcula los cuadrados.</b> $0{,}7^2 = 0{,}49$ y $2{,}5^2 = 6{,}25$.</p><p><b>Paso 4. Despeja.</b> $h^2 = 6{,}25 - 0{,}49 = 5{,}76$.</p><p><b>Paso 5. Saca raíz.</b> $h = \sqrt{5{,}76} = 2{,}4$ m, porque $2{,}4 \cdot 2{,}4 = 5{,}76$.</p><p><b>Respuesta:</b> 2,4 m.</p><p><b>Comprobación:</b> $0{,}49 + 5{,}76 = 6{,}25$. ✔ Es el trío 7, 24, 25 dividido por 10.</p><p><b>¿Por qué no las otras?</b> 3,2 m suma los lados: $2{,}5 + 0{,}7$. 1,8 m los resta sin elevar: $2{,}5 - 0{,}7$. 2,6 m suma los cuadrados, $\sqrt{6{,}25 + 0{,}49} \approx 2{,}6$: sería más largo que la escalera, imposible para un cateto.</p>`, conc: 'Escalera, muro y suelo: la escalera es la hipotenusa.' },
    { enun: r`<p>¿Cuál de los siguientes tríos de números corresponde a las medidas de los lados de un triángulo rectángulo?</p>`,
      alts: ['2, 3 y 4', '6, 8 y 12', '7, 8 y 9', '10, 24 y 26'], ok: 3,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Usamos el recíproco del teorema: el triángulo es rectángulo si el cuadrado del lado <b>mayor</b> es igual a la suma de los cuadrados de los otros dos.</p><p><b>Paso 2. 2, 3 y 4.</b> $2^2 + 3^2 = 4 + 9 = 13$ y $4^2 = 16$. No.</p><p><b>Paso 3. 6, 8 y 12.</b> $36 + 64 = 100$ y $12^2 = 144$. No. (Con 10 sí sería.)</p><p><b>Paso 4. 7, 8 y 9.</b> $49 + 64 = 113$ y $9^2 = 81$. No.</p><p><b>Paso 5. 10, 24 y 26.</b> $100 + 576 = 676$ y $26^2 = 676$. ✔ Sí.</p><p><b>Respuesta:</b> 10, 24 y 26.</p><p><b>Comprobación:</b> es el trío 5, 12, 13 multiplicado por 2. ✔</p><p><b>¿Por qué no las otras?</b> Son números consecutivos o "parecidos" a un trío, pero no cumplen la igualdad. 6, 8 y 12 engaña porque 6 y 8 son del trío 6, 8, 10.</p>`, conc: 'Recíproco: compara el cuadrado del lado mayor con la suma de los otros dos cuadrados.' },
    { enun: r`<p>En el plano cartesiano de la figura se ubican los puntos $A(-2, 1)$ y $B(4, 9)$.</p><p>¿Cuál es la distancia entre $A$ y $B$?</p>`,
      fig: { type: 'img', src: 'paes/m1/fig/geo_pit_plano.svg', alt: 'Plano cartesiano con el punto A en (-2, 1) y el punto B en (4, 9), unidos por un segmento' },
      alts: ['10', '14', r`$\sqrt{68}$`, '100'], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> La distancia entre $A$ y $B$. Formamos un triángulo rectángulo con un cateto horizontal y uno vertical.</p><p><b>Paso 2. Cateto horizontal.</b> $4 - (-2) = 4 + 2 = 6$.</p><p><b>Paso 3. Cateto vertical.</b> $9 - 1 = 8$.</p><p><b>Paso 4. Pitágoras.</b> $d^2 = 6^2 + 8^2 = 36 + 64 = 100$, así que $d = \sqrt{100} = 10$.</p><p><b>Respuesta:</b> 10.</p><p><b>Comprobación:</b> en la cuadrícula, de $A$ a $B$ se avanzan 6 cuadros a la derecha y 8 hacia arriba. ✔</p><p><b>¿Por qué no las otras?</b> 14 suma los catetos sin Pitágoras: $6 + 8$. $\sqrt{68}$ resta mal el negativo: $4 - 2 = 2$ y $\sqrt{4 + 64} = \sqrt{68}$. 100 olvida sacar la raíz.</p>`, conc: 'Distancia: resta coordenadas (cuidando los negativos) y aplica Pitágoras.' },
    { enun: r`<p>¿Cuál es la medida de la diagonal $d$ del cuadrado de la figura, de lado 5 cm?</p>`,
      fig: { type: 'img', src: 'paes/m1/fig/geo_pit_cuadrado.svg', alt: 'Cuadrado de lado 5 cm con su diagonal d' },
      alts: ['10 cm', r`$5\sqrt{2}$ cm`, r`$\sqrt{10}$ cm`, '50 cm'], ok: 1,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> La diagonal. Parte al cuadrado en dos triángulos rectángulos con catetos de 5 cm; la diagonal es la hipotenusa.</p><p><b>Paso 2. Escribe el teorema.</b> $d^2 = 5^2 + 5^2 = 25 + 25 = 50$.</p><p><b>Paso 3. Saca raíz.</b> $d = \sqrt{50}$.</p><p><b>Paso 4. Simplifica.</b> $50 = 25 \cdot 2$, así que $\sqrt{50} = \sqrt{25}\cdot\sqrt{2} = 5\sqrt{2}$ cm.</p><p><b>Respuesta:</b> $5\sqrt{2}$ cm.</p><p><b>Comprobación:</b> $5\sqrt{2} \approx 5 \cdot 1{,}41 = 7{,}05$ cm: más largo que el lado (5) y más corto que dos lados (10). ✔</p><p><b>¿Por qué no las otras?</b> 10 cm suma los lados: $5 + 5$. $\sqrt{10}$ cm suma los lados sin elevarlos y después saca raíz. 50 cm olvida la raíz.</p>`, conc: 'La diagonal de un cuadrado de lado ℓ mide ℓ√2.' },
    { enun: r`<p>La diagonal $D$ de un prisma recto de base rectangular se calcula como $D = \sqrt{a^2 + b^2 + c^2}$, con $a$, $b$ y $c$ las medidas de sus aristas.</p><p>Considera que la diagonal de un prisma recto de base rectangular mide $\sqrt{83}$ cm y que dos de sus aristas miden 3 cm y 5 cm, como en la figura.</p><p>¿Cuánto mide la arista faltante $c$?</p>`, src: 'PAES Invierno 2026, adaptada',
      fig: { type: 'img', src: 'paes/m1/fig/geo_pit_prisma_diag.svg', alt: 'Prisma recto de base rectangular con aristas de 5 cm, 3 cm y c; su diagonal interior mide raíz de 83 cm' },
      alts: ['4 cm', '19 cm', '7 cm', '49 cm'], ok: 2,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> La arista $c$. Reemplazamos en la fórmula y despejamos.</p><p><b>Paso 2. Reemplaza.</b> $\sqrt{83} = \sqrt{3^2 + 5^2 + c^2}$.</p><p><b>Paso 3. Eleva al cuadrado.</b> Para sacar las raíces, elevamos ambos lados: $83 = 9 + 25 + c^2$, o sea $83 = 34 + c^2$.</p><p><b>Paso 4. Despeja.</b> $c^2 = 83 - 34 = 49$.</p><p><b>Paso 5. Saca raíz.</b> $c = \sqrt{49} = 7$ cm.</p><p><b>Respuesta:</b> 7 cm.</p><p><b>Comprobación:</b> $3^2 + 5^2 + 7^2 = 9 + 25 + 49 = 83$. ✔</p><p><b>¿Por qué no las otras?</b> 4 cm sale de usar el trío 3, 4, 5, que no tiene que ver aquí. 19 cm suma las aristas antes de elevar: $83 - (3 + 5)^2 = 83 - 64 = 19$. 49 cm olvida la raíz del final.</p>`, conc: 'Eleva al cuadrado para quitar la raíz, despeja y al final saca raíz.' },
    { enun: r`<p>Una cancha rectangular mide 40 m de largo y 30 m de ancho. Para ir de la esquina $A$ a la esquina $B$, una persona puede caminar por el borde de la cancha o cruzarla en línea recta por la diagonal, como en la figura.</p><p>¿Cuántos metros se ahorra si cruza por la diagonal?</p>`,
      fig: { type: 'img', src: 'paes/m1/fig/geo_pit_cancha.svg', alt: 'Cancha rectangular de 40 m por 30 m; un camino va por el borde de A a B y otro cruza en diagonal' },
      alts: ['20 m', '10 m', '50 m', '70 m'], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> La diferencia entre los dos caminos. Calculamos cada uno y restamos.</p><p><b>Paso 2. Por el borde.</b> $40 + 30 = 70$ m.</p><p><b>Paso 3. Por la diagonal.</b> Es la hipotenusa de un triángulo de catetos 40 y 30: $d^2 = 1600 + 900 = 2500$, así que $d = 50$ m.</p><p><b>Paso 4. Resta.</b> $70 - 50 = 20$ m.</p><p><b>Respuesta:</b> 20 m.</p><p><b>Comprobación:</b> 30, 40, 50 es el trío 3, 4, 5 multiplicado por 10. ✔</p><p><b>¿Por qué no las otras?</b> 10 m es la diferencia entre el largo y el ancho. 50 m es lo que mide la diagonal, no lo que se ahorra. 70 m es el camino por el borde.</p>`, conc: 'Lee qué piden: aquí no es la diagonal, sino cuánto se ahorra.' },
    { enun: r`<p>En la siguiente figura se representa un cuadrilátero cuyas medidas están en centímetros.</p><p>¿Cuál de las siguientes expresiones corresponde al perímetro del cuadrilátero?</p>`, src: 'PAES Invierno 2027, adaptada',
      fig: { type: 'img', src: 'paes/m1/fig/geo_pit_cuadrilatero.svg', alt: 'Cuadrilátero con base de 6 cm, lado izquierdo vertical de 4 cm y lado derecho vertical de 7 cm, ambos perpendiculares a la base; el cuarto lado es inclinado' },
      alts: [r`$(17 + \sqrt{3})$ cm`, r`$(17 + \sqrt{85})$ cm`, '23 cm', r`$(17 + \sqrt{45})$ cm`], ok: 3,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El perímetro: la suma de los cuatro lados. Conocemos tres (6, 4 y 7); falta el lado inclinado.</p><p><b>Paso 2. Arma el triángulo.</b> Traza una horizontal desde la parte de arriba del lado de 4 cm hasta el lado de 7 cm. Se forma un triángulo rectángulo con un cateto horizontal de 6 cm y un cateto vertical de $7 - 4 = 3$ cm. El lado inclinado es la hipotenusa.</p><p><b>Paso 3. Pitágoras.</b> $\ell^2 = 6^2 + 3^2 = 36 + 9 = 45$, así que $\ell = \sqrt{45}$ cm.</p><p><b>Paso 4. Suma.</b> $6 + 4 + 7 + \sqrt{45} = 17 + \sqrt{45}$.</p><p><b>Respuesta:</b> $(17 + \sqrt{45})$ cm.</p><p><b>Comprobación:</b> $\sqrt{45} \approx 6{,}7$: el lado inclinado es un poco más largo que la base de 6, como se ve en la figura. ✔</p><p><b>¿Por qué no las otras?</b> $(17 + \sqrt{3})$ saca raíz a la diferencia de alturas, $7 - 4 = 3$, sin usar Pitágoras. $(17 + \sqrt{85})$ usa el lado de 7 completo como cateto: $36 + 49 = 85$. 23 cm supone que el lado inclinado mide lo mismo que la base.</p>`, conc: 'En un trapecio rectángulo, el cateto vertical del triángulo es la diferencia entre los lados paralelos.' },
    { enun: r`<p>Se construirá una rampa para que sillas de ruedas suban a una altura de 1,2 m, como en la figura. La base horizontal de la rampa mide 3,5 m.</p><p>¿Cuál es el largo $x$ de la rampa?</p>`,
      fig: { type: 'img', src: 'paes/m1/fig/geo_pit_rampa.svg', alt: 'Rampa: triángulo rectángulo con base horizontal de 3,5 m, altura de 1,2 m y la rampa inclinada x' },
      alts: ['3,7 m', '4,7 m', '3,3 m', '13,69 m'], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El largo de la rampa, que está al frente del ángulo recto: es la hipotenusa.</p><p><b>Paso 2. Escribe el teorema.</b> $x^2 = 3{,}5^2 + 1{,}2^2$.</p><p><b>Paso 3. Calcula.</b> $3{,}5^2 = 12{,}25$ y $1{,}2^2 = 1{,}44$. Queda $x^2 = 13{,}69$.</p><p><b>Paso 4. Saca raíz.</b> $x = \sqrt{13{,}69} = 3{,}7$ m, porque $3{,}7 \cdot 3{,}7 = 13{,}69$.</p><p><b>Respuesta:</b> 3,7 m.</p><p><b>Comprobación:</b> la rampa (3,7 m) es más larga que la base (3,5 m), como corresponde a una hipotenusa. ✔ Es el trío 12, 35, 37 dividido por 10.</p><p><b>¿Por qué no las otras?</b> 4,7 m suma los lados: $3{,}5 + 1{,}2$. 3,3 m resta los cuadrados, $\sqrt{12{,}25 - 1{,}44} \approx 3{,}3$, como si la rampa fuera un cateto. 13,69 m olvida la raíz.</p>`, conc: 'La rampa es la hipotenusa: suma de cuadrados y raíz.' },
    { enun: r`<p>Un excursionista parte desde un refugio y camina 2 km al este, luego 3 km al norte, después 6 km al este y finalmente 3 km al norte, como se muestra en la figura.</p><p>¿A qué distancia en línea recta $d$ queda del refugio?</p>`,
      fig: { type: 'img', src: 'paes/m1/fig/geo_pit_ruta.svg', alt: 'Cuadrícula con un recorrido: 2 km al este, 3 km al norte, 6 km al este y 3 km al norte; una línea punteada d une el inicio con la llegada' },
      alts: ['10 km', '14 km', r`$\sqrt{14}$ km`, '100 km'], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> La distancia en línea recta entre el inicio y la llegada. Juntamos todo lo que avanzó hacia el este y todo lo que avanzó hacia el norte.</p><p><b>Paso 2. Este.</b> $2 + 6 = 8$ km.</p><p><b>Paso 3. Norte.</b> $3 + 3 = 6$ km.</p><p><b>Paso 4. Pitágoras.</b> Las dos direcciones forman un ángulo recto: $d^2 = 8^2 + 6^2 = 64 + 36 = 100$, así que $d = 10$ km.</p><p><b>Respuesta:</b> 10 km.</p><p><b>Comprobación:</b> 6, 8, 10 es el trío 3, 4, 5 multiplicado por 2. En la cuadrícula se ve que la línea punteada es más corta que el camino. ✔</p><p><b>¿Por qué no las otras?</b> 14 km es lo que caminó en total ($2 + 3 + 6 + 3$), no la distancia en línea recta. $\sqrt{14}$ km suma 8 y 6 sin elevarlos y saca raíz. 100 km olvida la raíz.</p>`, conc: 'Junta los avances en cada dirección y aplica Pitágoras una sola vez.' },
    { enun: r`<p>La diagonal del rectángulo de la figura mide 13 cm y uno de sus lados mide 5 cm.</p><p>¿Cuál es el perímetro del rectángulo?</p>`,
      fig: { type: 'img', src: 'paes/m1/fig/geo_pit_rect_diag.svg', alt: 'Rectángulo con un lado de 5 cm y una diagonal de 13 cm' },
      alts: ['30 cm', '34 cm', '36 cm', '60 cm'], ok: 1,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El perímetro. Para eso falta el otro lado, que es un cateto del triángulo que forma la diagonal.</p><p><b>Paso 2. Pitágoras.</b> $\ell^2 + 5^2 = 13^2$, o sea $\ell^2 = 169 - 25 = 144$, y $\ell = 12$ cm.</p><p><b>Paso 3. Perímetro.</b> Un rectángulo tiene dos lados de cada medida: $2\cdot 12 + 2\cdot 5 = 24 + 10 = 34$ cm.</p><p><b>Respuesta:</b> 34 cm.</p><p><b>Comprobación:</b> 5, 12, 13 es un trío pitagórico. ✔</p><p><b>¿Por qué no las otras?</b> 30 cm suma los lados del triángulo, $5 + 12 + 13$: la diagonal no es parte del borde. 36 cm usa la diagonal como lado: $2(5 + 13)$. 60 cm es el área, $12 \cdot 5$.</p>`, conc: 'La diagonal no es parte del perímetro: úsala solo para hallar el lado que falta.' },
    { enun: r`<p>En el triángulo isósceles de la figura, los lados iguales miden 10 cm y la base mide 12 cm.</p><p>¿Cuál es la medida de la altura $h$ sobre la base?</p>`,
      fig: { type: 'img', src: 'paes/m1/fig/geo_pit_isosceles.svg', alt: 'Triángulo isósceles con lados iguales de 10 cm y base de 12 cm; la altura h cae al punto medio de la base' },
      alts: [r`$\sqrt{44}$ cm`, r`$\sqrt{136}$ cm`, '6 cm', '8 cm'], ok: 3,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> La altura. En un triángulo isósceles, la altura sobre la base cae justo en su punto medio y forma dos triángulos rectángulos iguales.</p><p><b>Paso 2. Mira uno de los triángulos.</b> Hipotenusa: 10 cm (el lado igual). Un cateto: la mitad de la base, $12 \div 2 = 6$ cm. El otro cateto: $h$.</p><p><b>Paso 3. Pitágoras.</b> $h^2 + 6^2 = 10^2$, o sea $h^2 = 100 - 36 = 64$.</p><p><b>Paso 4. Saca raíz.</b> $h = 8$ cm.</p><p><b>Respuesta:</b> 8 cm.</p><p><b>Comprobación:</b> 6, 8, 10 es un trío pitagórico. ✔</p><p><b>¿Por qué no las otras?</b> $\sqrt{44}$ cm usa la base completa y resta al revés: $144 - 100$. $\sqrt{136}$ cm suma los cuadrados, $100 + 36$, como si $h$ fuera la hipotenusa. 6 cm es la mitad de la base, no la altura.</p>`, conc: 'La altura de un isósceles parte la base por la mitad: usa la mitad como cateto.' },
    { enun: r`<p>Un triángulo tiene lados que miden 9 cm, 40 cm y 41 cm.</p><p>¿Cuál(es) de las siguientes afirmaciones es (son) verdadera(s)?</p><p>I) El triángulo es rectángulo.<br>II) La hipotenusa mide 41 cm.<br>III) El ángulo recto está al frente del lado de 40 cm.</p>`,
      alts: ['Solo I', 'Solo I y II', 'Solo I y III', 'I, II y III'], ok: 1,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Revisar cada afirmación. Primero vemos si el triángulo es rectángulo con el recíproco del teorema.</p><p><b>Paso 2. Afirmación I.</b> Lado mayor: 41. $9^2 + 40^2 = 81 + 1600 = 1681$ y $41^2 = 1681$. Son iguales: el triángulo es rectángulo. <b>Verdadera.</b></p><p><b>Paso 3. Afirmación II.</b> La hipotenusa es el lado mayor: 41 cm. <b>Verdadera.</b></p><p><b>Paso 4. Afirmación III.</b> El ángulo recto está al frente de la hipotenusa, o sea del lado de 41 cm, no del de 40 cm. <b>Falsa.</b></p><p><b>Respuesta:</b> Solo I y II.</p><p><b>¿Por qué no las otras?</b> "Solo I" deja fuera II, que es verdadera. "Solo I y III" y "I, II y III" incluyen III, que es falsa.</p>`, conc: 'El ángulo recto siempre está al frente del lado mayor, la hipotenusa.' },
    { enun: r`<p>¿Cuál de los siguientes puntos del plano cartesiano está a 13 unidades de distancia del punto $(1, 1)$?</p>`,
      alts: [r`$(5,\,12)$`, r`$(8,\,7)$`, r`$(13,\,13)$`, r`$(6,\,13)$`], ok: 3,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Cuál punto está a distancia 13 de $(1, 1)$. Para cada uno restamos coordenadas y aplicamos Pitágoras; debe dar $d^2 = 169$.</p><p><b>Paso 2. $(5, 12)$.</b> Diferencias: 4 y 11. $16 + 121 = 137$. No.</p><p><b>Paso 3. $(8, 7)$.</b> Diferencias: 7 y 6. $49 + 36 = 85$. No.</p><p><b>Paso 4. $(13, 13)$.</b> Diferencias: 12 y 12. $144 + 144 = 288$. No.</p><p><b>Paso 5. $(6, 13)$.</b> Diferencias: 5 y 12. $25 + 144 = 169 = 13^2$. ✔</p><p><b>Respuesta:</b> $(6, 13)$.</p><p><b>¿Por qué no las otras?</b> $(5, 12)$ está a 13 unidades del origen $(0, 0)$, no de $(1, 1)$: olvida restar. $(8, 7)$ cumple que $7 + 6 = 13$, pero las diferencias no se suman, se usan en Pitágoras. $(13, 13)$ confunde las coordenadas con la distancia.</p>`, conc: 'Distancia entre puntos: resta coordenadas, eleva al cuadrado, suma y saca raíz.' },
    { enun: r`<p>Las diagonales del rombo de la figura miden 30 cm y 16 cm.</p><p>¿Cuál es el perímetro del rombo?</p>`,
      fig: { type: 'img', src: 'paes/m1/fig/geo_pit_rombo.svg', alt: 'Rombo con diagonales de 30 cm y 16 cm que se cortan en ángulo recto' },
      alts: ['17 cm', '68 cm', '92 cm', '240 cm'], ok: 1,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El perímetro: los cuatro lados del rombo, que miden lo mismo. Hay que encontrar un lado.</p><p><b>Paso 2. Usa las diagonales.</b> En un rombo, las diagonales se cortan en su punto medio y en ángulo recto. Forman cuatro triángulos rectángulos con catetos $30 \div 2 = 15$ y $16 \div 2 = 8$. El lado del rombo es la hipotenusa.</p><p><b>Paso 3. Pitágoras.</b> $\ell^2 = 15^2 + 8^2 = 225 + 64 = 289$, así que $\ell = 17$ cm.</p><p><b>Paso 4. Perímetro.</b> $4 \cdot 17 = 68$ cm.</p><p><b>Respuesta:</b> 68 cm.</p><p><b>Comprobación:</b> 8, 15, 17 es un trío pitagórico. ✔</p><p><b>¿Por qué no las otras?</b> 17 cm es un solo lado. 92 cm suma las diagonales dos veces: $2(30 + 16)$; las diagonales no son el borde. 240 cm es el área del rombo, $\dfrac{30 \cdot 16}{2}$.</p>`, conc: 'Las diagonales de un rombo se cortan por la mitad y en ángulo recto: usa las mitades como catetos.' }
  ]
},
{
  id: 'geo_areas', unit: 'Unidad 1 · Figuras geométricas', icon: '📏',
  title: 'Perímetro y área de triángulos, paralelogramos y trapecios',
  desc: 'Perímetro y área de rectángulos, cuadrados, triángulos, paralelogramos, rombos y trapecios: cómo elegir la altura correcta, figuras compuestas que se suman o se restan, y problemas en contexto.',
  slides: [
    { t: 'Perímetro y área: no son lo mismo', b: r`
      <div class="cols"><div>
      <p>El <b>perímetro</b> es el largo del borde: la suma de todos los lados. Se mide en unidades de largo: cm, m, km.</p>
      <p>El <b>área</b> es lo que mide la superficie de adentro: cuántos cuadraditos de $1 \times 1$ caben. Se mide en unidades cuadradas: cm$^2$, m$^2$.</p>
      <p><b>Ejemplo.</b> Un rectángulo de 6 cm por 4 cm:</p>
      <p>· Perímetro: $6 + 4 + 6 + 4 = 2(6 + 4) = 20$ cm.</p>
      <p>· Área: caben 6 cuadraditos por fila y hay 4 filas: $6 \cdot 4 = 24$ cm$^2$.</p>
      <p><b>Cuadrado de lado $\ell$:</b> perímetro $4\ell$ y área $\ell^2$. Un cuadrado de lado 5 cm tiene perímetro 20 cm y área 25 cm$^2$.</p>
      </div><div>
      <div class="qfig"><img class="tikz" src="paes/m1/fig/geo_ar_rect.svg" alt="Rectángulo de 6 cm por 4 cm dividido en 24 cuadraditos de 1 centímetro cuadrado"></div>
      <div class="box"><b>Fórmulas del rectángulo</b> Si mide $a$ por $b$: perímetro $P = 2(a + b)$ y área $A = a \cdot b$.</div>
      <div class="box alert"><b>Cuidado con las unidades</b> Si te preguntan el perímetro, la respuesta va en cm; si te preguntan el área, en cm$^2$. Y antes de calcular, pasa todo a la misma unidad: no multipliques metros por centímetros.</div>
      </div></div>` },
    { t: 'Área del triángulo: la altura correcta', b: r`
      <div class="cols"><div>
      <p>Todo triángulo es la mitad de un rectángulo (o de un paralelogramo) con la misma base y la misma altura. Por eso:
      $$A = \frac{b \cdot h}{2}$$</p>
      <p>La <b>altura</b> es el segmento <b>perpendicular</b> a la base que llega al vértice de enfrente. No es un lado inclinado.</p>
      <p>· En un triángulo rectángulo, los catetos son base y altura: $A = \dfrac{\text{cateto} \cdot \text{cateto}}{2}$.</p>
      <p>· En un triángulo obtusángulo, la altura puede caer <b>fuera</b> del triángulo, sobre la prolongación de la base.</p>
      <p><b>Ejemplo.</b> Base 10 cm y altura 7 cm: $A = \dfrac{10 \cdot 7}{2} = 35$ cm$^2$.</p>
      </div><div>
      <div class="qfig"><img class="tikz" src="paes/m1/fig/geo_ar_alturas.svg" alt="Tres triángulos con su base b y su altura h: en el acutángulo la altura cae dentro, en el rectángulo es un cateto y en el obtusángulo cae fuera, sobre la prolongación de la base"></div>
      <div class="box alert"><b>No olvides dividir por 2</b> $b \cdot h$ es el área del rectángulo completo; el triángulo es la mitad.</div>
      <div class="box"><b>Despejar la altura</b> Si conoces el área y la base: $h = \dfrac{2A}{b}$. Con área 30 y base 12: $h = \dfrac{60}{12} = 5$.</div>
      </div></div>` },
    { t: 'Paralelogramo y rombo', b: r`
      <div class="cols"><div>
      <p>Un <b>paralelogramo</b> tiene dos pares de lados paralelos. Si cortas el triángulo de la izquierda y lo pegas a la derecha, se forma un rectángulo con la misma base y la misma altura. Por eso:
      $$A = b \cdot h$$</p>
      <p><b>Ejemplo.</b> Base 8, lado inclinado 5 y altura 4: $A = 8 \cdot 4 = 32$. El lado de 5 <b>no</b> se usa en el área, pero sí en el perímetro: $P = 2(8 + 5) = 26$.</p>
      <p>Un <b>rombo</b> es un paralelogramo con los cuatro lados iguales. Sus diagonales se cortan en ángulo recto, y su área se puede calcular con ellas:
      $$A = \frac{D \cdot d}{2}$$</p>
      <p><b>Ejemplo.</b> Diagonales 10 y 6: $A = \dfrac{10 \cdot 6}{2} = 30$.</p>
      </div><div>
      <div class="qfig"><img class="tikz" src="paes/m1/fig/geo_ar_paralelogramo.svg" alt="Paralelogramo de base 8, lado inclinado 5 y altura 4; el triángulo de la izquierda se traslada a la derecha y se forma un rectángulo"></div>
      <div class="box alert"><b>Altura, no lado</b> El error más común es multiplicar base por lado inclinado: $8 \cdot 5 = 40$. Ese número es más grande que el área real porque el lado inclinado es más largo que la altura.</div>
      </div></div>` },
    { t: 'Trapecio', b: r`
      <div class="cols"><div>
      <p>Un <b>trapecio</b> tiene un par de lados paralelos: la base mayor $B$ y la base menor $b$. La altura $h$ es la distancia perpendicular entre ellas.
      $$A = \frac{(B + b) \cdot h}{2}$$</p>
      <p>Se puede pensar como "el promedio de las bases por la altura": dos trapecios iguales, uno dado vuelta, forman un paralelogramo de base $B + b$.</p>
      <p><b>Ejemplo.</b> Bases 12 y 8, altura 5: $A = \dfrac{(12 + 8) \cdot 5}{2} = \dfrac{100}{2} = 50$.</p>
      <p><b>Trapecio rectángulo:</b> uno de los lados no paralelos es perpendicular a las bases, así que ese lado <b>es</b> la altura.</p>
      <p><b>Trapecio isósceles:</b> los lados no paralelos son iguales. Si falta la altura, sale con Pitágoras: cada "esquina" mide $\dfrac{B - b}{2}$.</p>
      </div><div>
      <div class="qfig"><img class="tikz" src="paes/m1/fig/geo_ar_trapecio.svg" alt="Trapecio con base mayor B, base menor b y altura h perpendicular a las bases"></div>
      <div class="box alert"><b>Primero suma las bases</b> $(B + b)$ va entre paréntesis: $\dfrac{(12 + 8)\cdot 5}{2}$, no $12 + \dfrac{8 \cdot 5}{2}$.</div>
      </div></div>` },
    { t: 'Figuras compuestas: sumar o restar', b: r`
      <div class="cols"><div>
      <p>Muchas figuras de la PAES se arman con figuras simples. Hay dos estrategias:</p>
      <p><b>Sumar.</b> Divide la figura en partes conocidas. La casita es un rectángulo de $6 \cdot 4 = 24$ m$^2$ más un triángulo de $\dfrac{6 \cdot 3}{2} = 9$ m$^2$: en total $33$ m$^2$.</p>
      <p><b>Restar.</b> Calcula la figura grande y quítale lo que sobra. El marco es un cuadrado de $7 \cdot 7 = 49$ m$^2$ menos el hueco de $3 \cdot 3 = 9$ m$^2$: quedan $40$ m$^2$.</p>
      <p><b>Perímetro de una figura compuesta.</b> Se recorre <b>solo el borde de afuera</b>. Las líneas interiores que usaste para dividir no cuentan.</p>
      </div><div>
      <div class="qfig"><img class="tikz" src="paes/m1/fig/geo_ar_compuesta.svg" alt="A la izquierda una casita formada por un rectángulo de 6 m por 4 m y un triángulo de altura 3 m; a la derecha un cuadrado de 7 m con un hueco cuadrado de 3 m"></div>
      <div class="box"><b>Región sombreada</b> Casi siempre conviene restar: área total menos área en blanco.</div>
      <div class="box alert"><b>Lados que no se ven</b> En una figura en L, los lados que faltan se obtienen restando: si el largo total es 8 y un tramo mide 3, el otro mide 5.</div>
      </div></div>` },
    { t: 'Errores típicos y resumen', b: r`
      <table><thead><tr><th>Figura</th><th>Perímetro</th><th>Área</th></tr></thead><tbody>
      <tr><td>Rectángulo $a \times b$</td><td>$2(a + b)$</td><td>$a \cdot b$</td></tr>
      <tr><td>Cuadrado de lado $\ell$</td><td>$4\ell$</td><td>$\ell^2$</td></tr>
      <tr><td>Triángulo</td><td>suma de los 3 lados</td><td>$\dfrac{b \cdot h}{2}$</td></tr>
      <tr><td>Paralelogramo</td><td>$2(b + \text{lado})$</td><td>$b \cdot h$</td></tr>
      <tr><td>Rombo</td><td>$4\ell$</td><td>$\dfrac{D \cdot d}{2}$</td></tr>
      <tr><td>Trapecio</td><td>suma de los 4 lados</td><td>$\dfrac{(B + b)\cdot h}{2}$</td></tr></tbody></table>
      <div class="box alert" style="margin-top:14px"><b>Errores típicos</b> · Usar el lado inclinado como altura. · Olvidar el "dividido por 2" del triángulo, el rombo y el trapecio. · Contar líneas interiores en el perímetro. · Confundir perímetro (cm) con área (cm$^2$). · Si se duplican todas las medidas, el área <b>no</b> se duplica: se multiplica por 4.</div>
      <div class="box"><b>Método PAES</b> 1. Identifica la figura (o divídela). 2. Marca base y altura perpendicular. 3. Si falta una medida, búscala restando lados o con Pitágoras. 4. Aplica la fórmula. 5. Revisa la unidad.</div>` }
  ],
  example: {
    src: 'PAES Regular 2026, adaptada',
    enun: r`<p>En la figura adjunta se representa un trapecio rectángulo de área $0{,}76$ m$^2$.</p><p>¿Cuál es la medida de su altura?</p>`,
    fig: { type: 'img', src: 'paes/m1/fig/geo_ar_ej_trapecio.svg', alt: 'Trapecio rectángulo con base menor de 0,6 m arriba y base mayor de 1,3 m abajo; el lado izquierdo es perpendicular a ambas bases' },
    alts: ['1,444 m', '0,80 m', '0,722 m', '0,40 m'], ok: 1,
    sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> La altura $h$. Conocemos el área (0,76 m$^2$) y las dos bases (1,3 m y 0,6 m). Usamos la fórmula del trapecio y despejamos $h$.</p><p><b>Paso 2. Escribe la fórmula.</b> $A = \dfrac{(B + b)\cdot h}{2}$, o sea $0{,}76 = \dfrac{(1{,}3 + 0{,}6)\cdot h}{2}$.</p><p><b>Paso 3. Suma las bases.</b> $1{,}3 + 0{,}6 = 1{,}9$. Queda $0{,}76 = \dfrac{1{,}9\,h}{2}$.</p><p><b>Paso 4. Quita el 2.</b> Multiplicamos ambos lados por 2: $1{,}52 = 1{,}9\,h$.</p><p><b>Paso 5. Despeja.</b> Dividimos por 1,9: $h = \dfrac{1{,}52}{1{,}9} = 0{,}8$ m.</p><p><b>Respuesta:</b> 0,80 m.</p><p><b>Comprobación:</b> $\dfrac{(1{,}3 + 0{,}6)\cdot 0{,}8}{2} = \dfrac{1{,}52}{2} = 0{,}76$ m$^2$. ✔</p><p><b>¿Por qué no las otras?</b> 1,444 m multiplica en vez de dividir: $0{,}76 \cdot 1{,}9$. 0,722 m hace lo mismo y además divide por 2. 0,40 m olvida el 2 de la fórmula: $\dfrac{0{,}76}{1{,}9} = 0{,}4$.</p>`,
    conc: 'Para despejar la altura de un trapecio: h = 2A ÷ (B + b).'
  },
  bank: [
    { enun: r`<p>Una empresa construye casas en terrenos rectangulares de distintas áreas, cumpliéndose siempre que el largo de cada terreno mide 5 m más que su ancho.</p><p>Si el área de uno de los terrenos es 104 m$^2$, ¿cuál es el perímetro de ese terreno?</p>`, src: 'PAES Invierno 2026, adaptada',
      fig: { type: 'img', src: 'paes/m1/fig/geo_ar_terreno.svg', alt: 'Terreno rectangular de ancho x y largo x + 5, con área de 104 metros cuadrados' },
      alts: ['21 m', '26 m', '42 m', '52 m'], ok: 2,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El perímetro. Para eso necesitamos el ancho y el largo. Si el ancho es $x$, el largo es $x + 5$ y el área es $x(x + 5) = 104$.</p><p><b>Paso 2. Busca dos números.</b> Necesitamos dos números que se diferencien en 5 y cuyo producto sea 104. Probamos: $7 \cdot 12 = 84$ (poco), $8 \cdot 13 = 104$ ✔.</p><p><b>Paso 3. Las medidas.</b> Ancho 8 m y largo 13 m.</p><p><b>Paso 4. Perímetro.</b> $2(8 + 13) = 2 \cdot 21 = 42$ m.</p><p><b>Respuesta:</b> 42 m.</p><p><b>Comprobación:</b> $13 - 8 = 5$ ✔ y $8 \cdot 13 = 104$ ✔.</p><p><b>¿Por qué no las otras?</b> 21 m suma solo un ancho y un largo: es la mitad del perímetro. 26 m cuenta solo los dos largos. 52 m multiplica el largo por 4, como si fuera un cuadrado.</p>`, conc: 'El perímetro del rectángulo suma dos anchos y dos largos: 2(a + b).' },
    { enun: r`<p>Una malla rectangular está formada por cuadrados de 3 cm de lado. La malla tiene 50 cuadrados de alto y 120 cuadrados de largo, como se representa en la figura.</p><p>¿Cuál es el perímetro de la malla?</p>`, src: 'PAES Invierno 2026, adaptada',
      fig: { type: 'img', src: 'paes/m1/fig/geo_ar_malla.svg', alt: 'Malla rectangular de cuadraditos de 3 cm de lado: 50 cuadrados de alto y 120 de largo' },
      alts: ['340 cm', '510 cm', '54.000 cm', '1020 cm'], ok: 3,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El perímetro de la malla en centímetros. Primero pasamos los cuadrados a centímetros.</p><p><b>Paso 2. Alto.</b> 50 cuadrados de 3 cm: $50 \cdot 3 = 150$ cm.</p><p><b>Paso 3. Largo.</b> 120 cuadrados de 3 cm: $120 \cdot 3 = 360$ cm.</p><p><b>Paso 4. Perímetro.</b> $2(150 + 360) = 2 \cdot 510 = 1020$ cm.</p><p><b>Respuesta:</b> 1020 cm.</p><p><b>Comprobación:</b> el borde tiene $2(50 + 120) = 340$ lados de cuadrado, y cada uno mide 3 cm: $340 \cdot 3 = 1020$. ✔</p><p><b>¿Por qué no las otras?</b> 340 cm cuenta lados de cuadrado pero no los multiplica por 3 cm. 510 cm suma un alto y un largo: es la mitad del perímetro. 54.000 cm es $150 \cdot 360$: eso es el área, y estaría en cm$^2$.</p>`, conc: 'Pasa todo a la misma unidad antes de calcular el perímetro.' },
    { enun: r`<p>El área de la siguiente figura, formada por 10 cuadrados congruentes entre sí, es 250 cm$^2$.</p><p>Se realiza el siguiente procedimiento para determinar el perímetro de la figura, cometiéndose un error.</p><p>Paso 1: se determina el área de cada cuadrado dividiendo el área total por la cantidad de cuadrados, obteniéndose 25 cm$^2$.<br>Paso 2: se determina la medida del lado de un cuadrado dividiendo su área por 4, obteniéndose 6,25 cm.<br>Paso 3: se cuentan los lados de cuadrado que forman el borde de la figura, obteniéndose 16 lados.<br>Paso 4: se calcula el perímetro multiplicando $16 \cdot 6{,}25$, obteniéndose 100 cm.</p><p>¿En cuál de los pasos se cometió el error?</p>`, src: 'PAES Invierno 2026, adaptada',
      fig: { type: 'img', src: 'paes/m1/fig/geo_ar_diez.svg', alt: 'Figura formada por 10 cuadrados iguales: una fila de 6 abajo y una fila de 4 arriba, alineadas a la izquierda' },
      alts: ['En el Paso 1', 'En el Paso 2', 'En el Paso 3', 'En el Paso 4'], ok: 1,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El paso con el error. Rehacemos cada uno.</p><p><b>Paso 2. Revisa el Paso 1.</b> $250 \div 10 = 25$ cm$^2$ por cuadrado. <b>Correcto.</b></p><p><b>Paso 3. Revisa el Paso 2.</b> El área de un cuadrado es lado por lado: $\ell^2 = 25$. Entonces el lado es $\sqrt{25} = 5$ cm. Dividir por 4 confunde el área con el perímetro. <b>Aquí está el error.</b></p><p><b>Paso 4. Revisa el Paso 3.</b> Recorremos el borde: abajo 6, a la derecha 1, el escalón 2, arriba a la derecha 1, arriba 4 y a la izquierda 2. Total: $6 + 1 + 2 + 1 + 4 + 2 = 16$ lados. <b>Correcto.</b></p><p><b>Paso 5. Revisa el Paso 4.</b> $16 \cdot 6{,}25 = 100$ está bien multiplicado, pero arrastra el error.</p><p><b>Lo correcto:</b> $16 \cdot 5 = 80$ cm.</p><p><b>¿Por qué no las otras?</b> Los pasos 1 y 3 están bien hechos y el Paso 4 solo multiplica lo que recibió.</p>`, conc: 'El lado de un cuadrado es la raíz de su área, no el área dividida por 4.' },
    { enun: r`<p>Las diagonales de un rombo miden 24 cm y 30 cm, como en la figura.</p><p>¿Cuál es su área?</p>`, src: 'PAES Invierno 2027, adaptada',
      fig: { type: 'img', src: 'paes/m1/fig/geo_ar_rombo.svg', alt: 'Rombo con diagonales de 30 cm y 24 cm' },
      alts: ['720 cm$^2$', '1440 cm$^2$', '360 cm$^2$', '180 cm$^2$'], ok: 2,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El área del rombo. Conocemos sus diagonales: usamos $A = \dfrac{D \cdot d}{2}$.</p><p><b>Paso 2. Multiplica las diagonales.</b> $24 \cdot 30 = 720$.</p><p><b>Paso 3. Divide por 2.</b> $720 \div 2 = 360$ cm$^2$.</p><p><b>Respuesta:</b> 360 cm$^2$.</p><p><b>Comprobación:</b> el rombo está dentro de un rectángulo de $30 \times 24 = 720$ cm$^2$ y ocupa justo la mitad (las cuatro esquinas que sobran juntas forman otro rombo igual). ✔</p><p><b>¿Por qué no las otras?</b> 720 cm$^2$ olvida dividir por 2: es el rectángulo que lo contiene. 1440 cm$^2$ multiplica por 2 en vez de dividir. 180 cm$^2$ multiplica las mitades de las diagonales, $12 \cdot 15$, y es solo la mitad del área.</p>`, conc: 'Área del rombo: diagonal mayor por diagonal menor, dividido por 2.' },
    { enun: r`<p>¿Cuál es el área del triángulo de la figura?</p>`,
      fig: { type: 'img', src: 'paes/m1/fig/geo_ar_obtuso.svg', alt: 'Triángulo obtusángulo de base 6 cm y un lado de 5 cm; su altura de 4 cm cae fuera del triángulo, sobre la prolongación de la base' },
      alts: ['12 cm$^2$', '15 cm$^2$', '24 cm$^2$', '30 cm$^2$'], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El área. Necesitamos una base y su altura perpendicular.</p><p><b>Paso 2. Elige base y altura.</b> La base es 6 cm. La altura es el segmento perpendicular desde el vértice de arriba hasta la recta de la base: mide 4 cm, aunque cae fuera del triángulo. El lado de 5 cm es inclinado: no es la altura.</p><p><b>Paso 3. Aplica la fórmula.</b> $A = \dfrac{6 \cdot 4}{2} = \dfrac{24}{2} = 12$ cm$^2$.</p><p><b>Respuesta:</b> 12 cm$^2$.</p><p><b>¿Por qué no las otras?</b> 15 cm$^2$ usa el lado inclinado como altura: $\dfrac{6 \cdot 5}{2}$. 24 cm$^2$ olvida dividir por 2. 30 cm$^2$ comete los dos errores: $6 \cdot 5$.</p>`, conc: 'La altura es perpendicular a la base; en un obtusángulo puede caer afuera.' },
    { enun: r`<p>¿Cuál es el área del paralelogramo de la figura?</p>`,
      fig: { type: 'img', src: 'paes/m1/fig/geo_ar_paral.svg', alt: 'Paralelogramo de base 10 cm, lado inclinado de 6 cm y altura de 5 cm' },
      alts: ['25 cm$^2$', '32 cm$^2$', '60 cm$^2$', '50 cm$^2$'], ok: 3,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El área del paralelogramo: base por altura.</p><p><b>Paso 2. Identifica.</b> Base: 10 cm. Altura (perpendicular a la base): 5 cm. El lado de 6 cm es inclinado.</p><p><b>Paso 3. Multiplica.</b> $A = 10 \cdot 5 = 50$ cm$^2$.</p><p><b>Respuesta:</b> 50 cm$^2$.</p><p><b>¿Por qué no las otras?</b> 25 cm$^2$ divide por 2 como si fuera un triángulo. 32 cm$^2$ es el perímetro, $2(10 + 6)$, y estaría en cm. 60 cm$^2$ multiplica la base por el lado inclinado.</p>`, conc: 'Paralelogramo: base por altura, sin dividir por 2.' },
    { enun: r`<p>En la figura se muestra el plano de una sala con forma de L.</p><p>¿Cuál es el área de la sala?</p>`,
      fig: { type: 'img', src: 'paes/m1/fig/geo_ar_ele.svg', alt: 'Figura en forma de L: 8 m de ancho abajo, 6 m de alto a la izquierda; en la esquina superior derecha falta un rectángulo de 3 m por 2 m' },
      alts: ['48 m$^2$', '42 m$^2$', '54 m$^2$', '28 m$^2$'], ok: 1,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El área de la L. La forma más rápida es restar: el rectángulo completo menos la esquina que falta.</p><p><b>Paso 2. Rectángulo completo.</b> $8 \cdot 6 = 48$ m$^2$.</p><p><b>Paso 3. Esquina que falta.</b> $3 \cdot 2 = 6$ m$^2$.</p><p><b>Paso 4. Resta.</b> $48 - 6 = 42$ m$^2$.</p><p><b>Respuesta:</b> 42 m$^2$.</p><p><b>Comprobación (sumando):</b> parte de abajo $8 \cdot 4 = 32$ más parte de arriba a la izquierda $(8 - 3)\cdot 2 = 10$: $32 + 10 = 42$. ✔</p><p><b>¿Por qué no las otras?</b> 48 m$^2$ no descuenta la esquina. 54 m$^2$ la suma en vez de restarla. 28 m$^2$ es el perímetro de la L, $2(8 + 6)$, en metros.</p>`, conc: 'Figura en L: rectángulo completo menos la esquina que falta.' },
    { enun: r`<p>En el rectángulo de la figura se dibujó un triángulo cuya base es el lado inferior del rectángulo y cuyo vértice está en el lado superior.</p><p>¿Cuál es el área de la región sombreada?</p>`,
      fig: { type: 'img', src: 'paes/m1/fig/geo_ar_sombra_tri.svg', alt: 'Rectángulo de 10 cm por 6 cm; un triángulo blanco tiene como base el lado inferior y su vértice en el lado superior; las dos regiones de los costados están sombreadas' },
      alts: ['60 cm$^2$', '15 cm$^2$', '90 cm$^2$', '30 cm$^2$'], ok: 3,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El área sombreada. Restamos: rectángulo menos triángulo blanco.</p><p><b>Paso 2. Rectángulo.</b> $10 \cdot 6 = 60$ cm$^2$.</p><p><b>Paso 3. Triángulo.</b> Base 10 cm. Su altura va del vértice superior a la base: es el alto del rectángulo, 6 cm. $A = \dfrac{10 \cdot 6}{2} = 30$ cm$^2$.</p><p><b>Paso 4. Resta.</b> $60 - 30 = 30$ cm$^2$.</p><p><b>Respuesta:</b> 30 cm$^2$.</p><p><b>Dato útil:</b> no importa dónde esté el vértice en el lado de arriba: el triángulo siempre ocupa la mitad del rectángulo, y lo sombreado, la otra mitad.</p><p><b>¿Por qué no las otras?</b> 60 cm$^2$ es el rectángulo completo. 15 cm$^2$ divide el triángulo por 2 dos veces. 90 cm$^2$ suma el triángulo en vez de restarlo.</p>`, conc: 'Región sombreada: figura grande menos la parte en blanco.' },
    { enun: r`<p>¿Cuál es el área del trapecio isósceles de la figura?</p>`,
      fig: { type: 'img', src: 'paes/m1/fig/geo_ar_trap_isos.svg', alt: 'Trapecio isósceles con base mayor de 14 cm, base menor de 8 cm y lados no paralelos de 5 cm' },
      alts: ['55 cm$^2$', '88 cm$^2$', '44 cm$^2$', '40 cm$^2$'], ok: 2,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El área. Tenemos las bases, pero falta la altura: la sacamos con Pitágoras.</p><p><b>Paso 2. Las esquinas.</b> Si bajamos las alturas desde la base menor, la base mayor queda dividida en $3 + 8 + 3$, porque $(14 - 8) \div 2 = 3$.</p><p><b>Paso 3. Pitágoras.</b> Cada esquina es un triángulo rectángulo con hipotenusa 5 y cateto 3: $h^2 = 25 - 9 = 16$, así que $h = 4$ cm.</p><p><b>Paso 4. Área.</b> $A = \dfrac{(14 + 8)\cdot 4}{2} = \dfrac{88}{2} = 44$ cm$^2$.</p><p><b>Respuesta:</b> 44 cm$^2$.</p><p><b>¿Por qué no las otras?</b> 55 cm$^2$ usa el lado inclinado (5) como altura: $\dfrac{22 \cdot 5}{2}$. 88 cm$^2$ olvida dividir por 2. 40 cm$^2$ multiplica la base menor por el lado: $8 \cdot 5$.</p>`, conc: 'Si falta la altura del trapecio isósceles, usa Pitágoras con (B − b) ÷ 2.' },
    { enun: r`<p>El perímetro de un cuadrado es 36 cm.</p><p>¿Cuál es su área?</p>`,
      alts: ['81 cm$^2$', '324 cm$^2$', '1296 cm$^2$', '18 cm$^2$'], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El área. Primero necesitamos el lado.</p><p><b>Paso 2. El lado.</b> El cuadrado tiene 4 lados iguales: $36 \div 4 = 9$ cm.</p><p><b>Paso 3. El área.</b> $9^2 = 81$ cm$^2$.</p><p><b>Respuesta:</b> 81 cm$^2$.</p><p><b>Comprobación:</b> perímetro $4 \cdot 9 = 36$. ✔</p><p><b>¿Por qué no las otras?</b> 324 cm$^2$ divide el perímetro por 2 en vez de 4: $18^2$. 1296 cm$^2$ eleva el perímetro al cuadrado. 18 cm$^2$ es la mitad del perímetro.</p>`, conc: 'Del perímetro al área del cuadrado: divide por 4 y eleva al cuadrado.' },
    { enun: r`<p>Los catetos de un triángulo rectángulo miden 7 cm y 24 cm, como en la figura.</p><p>¿Cuál es el perímetro del triángulo?</p>`,
      fig: { type: 'img', src: 'paes/m1/fig/geo_ar_tri_rect.svg', alt: 'Triángulo rectángulo de catetos 7 cm y 24 cm' },
      alts: ['56 cm', '31 cm', '84 cm', '168 cm'], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El perímetro: la suma de los tres lados. Falta la hipotenusa.</p><p><b>Paso 2. Pitágoras.</b> $c^2 = 7^2 + 24^2 = 49 + 576 = 625$, así que $c = 25$ cm.</p><p><b>Paso 3. Suma.</b> $7 + 24 + 25 = 56$ cm.</p><p><b>Respuesta:</b> 56 cm.</p><p><b>¿Por qué no las otras?</b> 31 cm suma solo los catetos. 84 cm es el área, $\dfrac{7 \cdot 24}{2}$, en cm$^2$. 168 cm es $7 \cdot 24$.</p>`, conc: 'Para el perímetro necesitas los tres lados: la hipotenusa sale con Pitágoras.' },
    { enun: r`<p>Si la base y la altura de un rectángulo se triplican, ¿qué ocurre con su área?</p>`,
      alts: ['Se triplica.', 'Se multiplica por 6.', 'Se multiplica por 9.', 'Se multiplica por 27.'], ok: 2,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Cómo cambia el área. Probamos con un ejemplo y después en general.</p><p><b>Paso 2. Ejemplo.</b> Rectángulo de 2 por 5: área 10. Triplicado: 6 por 15, área 90. $90 \div 10 = 9$.</p><p><b>Paso 3. En general.</b> $(3b)\cdot(3h) = 9\,b h$: el área se multiplica por $3 \cdot 3 = 9$.</p><p><b>Respuesta:</b> se multiplica por 9.</p><p><b>¿Por qué no las otras?</b> "Se triplica" cambia solo una medida. "Por 6" suma los factores, $3 + 3$, en vez de multiplicarlos. "Por 27" es lo que pasa con un volumen, que tiene tres medidas: $3^3$.</p>`, conc: 'Si todas las medidas se multiplican por k, el área se multiplica por k².' },
    { enun: r`<p>Se pintará un muro rectangular de 5 m de largo y 2,4 m de alto, que tiene una ventana de 1,5 m por 1,2 m que no se pinta, como en la figura.</p><p>¿Cuál es el área que se pintará?</p>`,
      fig: { type: 'img', src: 'paes/m1/fig/geo_ar_muro.svg', alt: 'Muro de 5 m por 2,4 m con una ventana de 1,5 m por 1,2 m' },
      alts: ['10,2 m$^2$', '13,8 m$^2$', '12 m$^2$', '8,4 m$^2$'], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El área del muro sin la ventana. Restamos.</p><p><b>Paso 2. Muro.</b> $5 \cdot 2{,}4 = 12$ m$^2$.</p><p><b>Paso 3. Ventana.</b> $1{,}5 \cdot 1{,}2 = 1{,}8$ m$^2$.</p><p><b>Paso 4. Resta.</b> $12 - 1{,}8 = 10{,}2$ m$^2$.</p><p><b>Respuesta:</b> 10,2 m$^2$.</p><p><b>¿Por qué no las otras?</b> 13,8 m$^2$ suma la ventana. 12 m$^2$ no la descuenta. 8,4 m$^2$ la descuenta dos veces: $12 - 3{,}6$.</p>`, conc: 'Lo que no se pinta se resta del área total.' },
    { enun: r`<p>El área del triángulo de la figura es 27 cm$^2$ y su base mide 9 cm.</p><p>¿Cuál es la medida de la altura $h$?</p>`,
      fig: { type: 'img', src: 'paes/m1/fig/geo_ar_tri_h.svg', alt: 'Triángulo de base 9 cm y área 27 centímetros cuadrados, con su altura h' },
      alts: ['3 cm', '6 cm', '18 cm', '243 cm'], ok: 1,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> La altura. Reemplazamos en $A = \dfrac{b \cdot h}{2}$ y despejamos.</p><p><b>Paso 2. Reemplaza.</b> $27 = \dfrac{9h}{2}$.</p><p><b>Paso 3. Quita el 2.</b> $54 = 9h$.</p><p><b>Paso 4. Despeja.</b> $h = 54 \div 9 = 6$ cm.</p><p><b>Respuesta:</b> 6 cm.</p><p><b>Comprobación:</b> $\dfrac{9 \cdot 6}{2} = 27$. ✔</p><p><b>¿Por qué no las otras?</b> 3 cm olvida el 2 de la fórmula: $27 \div 9$. 18 cm resta, $27 - 9$, en vez de despejar. 243 cm multiplica el área por la base.</p>`, conc: 'Altura del triángulo: h = 2A ÷ b.' },
    { enun: r`<p>Con 40 m de malla se cerca un corral rectangular por sus cuatro lados, usando toda la malla. Uno de los lados del corral mide 12 m.</p><p>¿Cuál es el área del corral?</p>`,
      fig: { type: 'img', src: 'paes/m1/fig/geo_ar_corral.svg', alt: 'Corral rectangular cercado con malla; uno de sus lados mide 12 m' },
      alts: ['336 m$^2$', '480 m$^2$', '64 m$^2$', '96 m$^2$'], ok: 3,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El área. Falta el otro lado, que sale del perímetro.</p><p><b>Paso 2. El perímetro.</b> La malla es el perímetro: $2(12 + x) = 40$.</p><p><b>Paso 3. Despeja.</b> $12 + x = 20$, así que $x = 8$ m.</p><p><b>Paso 4. Área.</b> $12 \cdot 8 = 96$ m$^2$.</p><p><b>Respuesta:</b> 96 m$^2$.</p><p><b>Comprobación:</b> $12 + 8 + 12 + 8 = 40$ m. ✔</p><p><b>¿Por qué no las otras?</b> 336 m$^2$ toma el otro lado como $40 - 12 = 28$, olvidando que hay dos lados de 12 y dos del otro. 480 m$^2$ multiplica 12 por la malla completa. 64 m$^2$ es $8^2$: usa solo el lado que se calculó.</p>`, conc: 'El perímetro tiene dos lados de cada medida: P = 2(a + b).' },
    { enun: r`<p>Un terreno rectangular de 24 m por 14 m tiene un jardín rectangular en el centro, rodeado por un camino de 2 m de ancho que llega hasta el borde del terreno, como en la figura.</p><p>¿Cuál es el área del camino?</p>`,
      fig: { type: 'img', src: 'paes/m1/fig/geo_ar_camino.svg', alt: 'Terreno de 24 m por 14 m con un jardín rectangular al centro y un camino de 2 m de ancho alrededor' },
      alts: ['136 m$^2$', '152 m$^2$', '200 m$^2$', '336 m$^2$'], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El área del camino: terreno menos jardín.</p><p><b>Paso 2. Terreno.</b> $24 \cdot 14 = 336$ m$^2$.</p><p><b>Paso 3. Jardín.</b> El camino ocupa 2 m por <b>cada</b> lado: el jardín mide $24 - 4 = 20$ m por $14 - 4 = 10$ m. Área: $200$ m$^2$.</p><p><b>Paso 4. Resta.</b> $336 - 200 = 136$ m$^2$.</p><p><b>Respuesta:</b> 136 m$^2$.</p><p><b>¿Por qué no las otras?</b> 152 m$^2$ multiplica el perímetro del terreno por el ancho del camino, $76 \cdot 2$: así se cuentan dos veces las esquinas. 200 m$^2$ es el jardín. 336 m$^2$ es el terreno completo.</p>`, conc: 'Un borde de ancho 2 le quita 4 a cada medida (2 por cada lado).' },
    { enun: r`<p>En el plano cartesiano de la figura se representa un triángulo con vértices en $(0, 0)$, $(8, 0)$ y $(6, 5)$.</p><p>¿Cuál es su área, en unidades cuadradas?</p>`,
      fig: { type: 'img', src: 'paes/m1/fig/geo_ar_tri_grid.svg', alt: 'Plano cartesiano con un triángulo de vértices (0, 0), (8, 0) y (6, 5)' },
      alts: ['40', '20', '30', '10'], ok: 1,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El área del triángulo. Usamos como base el lado que está sobre el eje $X$.</p><p><b>Paso 2. Base.</b> De $(0, 0)$ a $(8, 0)$: 8 unidades.</p><p><b>Paso 3. Altura.</b> La distancia del vértice $(6, 5)$ al eje $X$ es su coordenada $y$: 5 unidades.</p><p><b>Paso 4. Área.</b> $\dfrac{8 \cdot 5}{2} = 20$.</p><p><b>Respuesta:</b> 20 unidades cuadradas.</p><p><b>¿Por qué no las otras?</b> 40 olvida dividir por 2. 30 multiplica las coordenadas del vértice, $6 \cdot 5$. 10 divide por 2 dos veces.</p>`, conc: 'Si la base está sobre un eje, la altura es la otra coordenada del vértice opuesto.' },
    { enun: r`<p>Un cuadrado de 6 cm de lado y un rectángulo de 8 cm por 4 cm tienen el mismo perímetro, 24 cm.</p><p>¿Cuál(es) de las siguientes afirmaciones es (son) verdadera(s)?</p><p>I) El área del cuadrado es 36 cm$^2$.<br>II) El área del rectángulo es 32 cm$^2$.<br>III) Como tienen el mismo perímetro, tienen la misma área.</p>`,
      fig: { type: 'img', src: 'paes/m1/fig/geo_ar_cuad_rect.svg', alt: 'Un cuadrado de 6 cm de lado y un rectángulo de 8 cm por 4 cm' },
      alts: ['Solo I', 'Solo III', 'Solo I y II', 'I, II y III'], ok: 2,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Revisar cada afirmación.</p><p><b>Paso 2. Afirmación I.</b> $6 \cdot 6 = 36$ cm$^2$. <b>Verdadera.</b></p><p><b>Paso 3. Afirmación II.</b> $8 \cdot 4 = 32$ cm$^2$. <b>Verdadera.</b></p><p><b>Paso 4. Afirmación III.</b> Tienen el mismo perímetro ($4 \cdot 6 = 24$ y $2(8 + 4) = 24$), pero las áreas son 36 y 32: distintas. <b>Falsa.</b></p><p><b>Respuesta:</b> Solo I y II.</p><p><b>¿Por qué no las otras?</b> "Solo I" deja fuera II. "Solo III" y "I, II y III" incluyen III, que es falsa: igual perímetro no significa igual área.</p>`, conc: 'Mismo perímetro no implica misma área.' }
  ]
},
{
  id: 'geo_circulo', unit: 'Unidad 1 · Figuras geométricas', icon: '⭕',
  title: 'Circunferencia y círculo',
  desc: 'Radio y diámetro, perímetro 2πr y área πr², semicírculos, cuartos de círculo y sectores, regiones sombreadas y coronas, con π ≈ 3,14 o dejando el resultado en π como hace la PAES.',
  slides: [
    { t: 'Circunferencia, círculo, radio y diámetro', b: r`
      <div class="cols"><div>
      <p>La <b>circunferencia</b> es la línea curva: todos los puntos que están a la misma distancia de un punto fijo, el <b>centro</b> $O$. El <b>círculo</b> es la región que encierra.</p>
      <p>· <b>Radio</b> $r$: segmento del centro a la circunferencia.</p>
      <p>· <b>Diámetro</b> $d$: segmento que une dos puntos de la circunferencia pasando por el centro. Es el doble del radio: $d = 2r$.</p>
      <p>· <b>Cuerda</b>: segmento que une dos puntos de la circunferencia. El diámetro es la cuerda más larga.</p>
      <p><b>Ejemplo.</b> Si el diámetro de una moneda es 2,6 cm, su radio es $2{,}6 \div 2 = 1{,}3$ cm.</p>
      </div><div>
      <div class="qfig"><img class="tikz" src="paes/m1/fig/geo_ci_partes.svg" alt="Circunferencia de centro O con un radio r, un diámetro d y una cuerda; se distingue el borde (circunferencia) de la región (círculo)"></div>
      <div class="box alert"><b>Lee bien el dato</b> Muchos errores de la PAES vienen de usar el diámetro como si fuera el radio. Antes de reemplazar en una fórmula, pregúntate: ¿me dieron $r$ o $d$?</div>
      </div></div>` },
    { t: 'Perímetro de la circunferencia', b: r`
      <div class="cols"><div>
      <p>En toda circunferencia, el largo del borde dividido por el diámetro da siempre el mismo número: $\pi \approx 3{,}14$. Por eso el perímetro (o longitud) es
      $$P = 2\pi r = \pi d$$</p>
      <p><b>Ejemplo 1.</b> Radio 5 cm: $P = 2\pi \cdot 5 = 10\pi$ cm. Con $\pi \approx 3{,}14$: $P \approx 31{,}4$ cm.</p>
      <p><b>Ejemplo 2.</b> Una rueda de 60 cm de diámetro avanza en una vuelta $\pi \cdot 60 = 60\pi \approx 188{,}4$ cm. En 10 vueltas avanza $1884$ cm, o sea 18,84 m.</p>
      <p><b>¿π o 3,14?</b> La PAES suele dejar las respuestas en $\pi$ (por ejemplo, $10\pi$ cm). Si el enunciado dice "considera $\pi \approx 3{,}14$", reemplaza al final.</p>
      </div><div>
      <div class="qfig"><img class="tikz" src="paes/m1/fig/geo_ci_rueda.svg" alt="Una rueda de radio r rueda una vuelta completa sobre el suelo y avanza una distancia igual a 2 pi r"></div>
      <div class="box"><b>Al revés</b> Si conoces el perímetro, despeja: $r = \dfrac{P}{2\pi}$. Con $P = 31{,}4$ y $\pi \approx 3{,}14$: $r = \dfrac{31{,}4}{6{,}28} = 5$.</div>
      </div></div>` },
    { t: 'Área del círculo', b: r`
      <div class="cols"><div>
      <p>Si cortas un círculo en muchos sectores y los ordenas alternando, se forma casi un paralelogramo de base "media circunferencia" ($\pi r$) y altura $r$. Por eso:
      $$A = \pi r^2$$</p>
      <p><b>Ejemplo 1.</b> Radio 5 cm: $A = \pi \cdot 5^2 = 25\pi$ cm$^2 \approx 78{,}5$ cm$^2$.</p>
      <p><b>Ejemplo 2.</b> Diámetro 8 cm: primero el radio, $r = 4$. $A = \pi \cdot 4^2 = 16\pi$ cm$^2$.</p>
      </div><div>
      <div class="qfig"><img class="tikz" src="paes/m1/fig/geo_ci_area.svg" alt="Un círculo cortado en 12 sectores que se reordenan alternados formando casi un paralelogramo de base pi r y altura r"></div>
      <div class="box alert"><b>$r^2$ no es $2r$</b> Con $r = 5$: $r^2 = 25$, pero $2r = 10$. $2\pi r$ es el perímetro; $\pi r^2$ es el área. Y el cuadrado afecta solo al radio: $\pi r^2 = \pi \cdot (r \cdot r)$, no $(\pi r)^2$.</div>
      <div class="box"><b>Si el radio se duplica</b> El perímetro se duplica, pero el área se multiplica por 4: $\pi (2r)^2 = 4\pi r^2$.</div>
      </div></div>` },
    { t: 'Semicírculos, cuartos y sectores', b: r`
      <div class="cols"><div>
      <p>Un <b>sector circular</b> es un "trozo de pizza": la región entre dos radios. Si su ángulo es $\alpha$, es la fracción $\dfrac{\alpha}{360°}$ del círculo:
      $$A_{\text{sector}} = \frac{\alpha}{360°}\,\pi r^2 \qquad \text{arco} = \frac{\alpha}{360°}\,2\pi r$$</p>
      <p>· Semicírculo ($180°$): la mitad. Cuarto de círculo ($90°$): la cuarta parte.</p>
      <p><b>Ejemplo.</b> Sector de $60°$ y radio 6: $\dfrac{60}{360} = \dfrac{1}{6}$, así que $A = \dfrac{1}{6}\cdot 36\pi = 6\pi$ y el arco mide $\dfrac{1}{6}\cdot 12\pi = 2\pi$.</p>
      <p><b>Perímetro de un semicírculo.</b> Es la mitad de la circunferencia <b>más el diámetro</b>: con $r = 5$, $P = 5\pi + 10$.</p>
      </div><div>
      <div class="qfig"><img class="tikz" src="paes/m1/fig/geo_ci_sectores.svg" alt="Un semicírculo, un cuarto de círculo y un sector de 60 grados, con la fracción del área del círculo que representa cada uno"></div>
      <div class="box alert"><b>No olvides los lados rectos</b> El borde de un semicírculo o de un sector incluye los radios (o el diámetro), no solo el arco.</div>
      </div></div>` },
    { t: 'Regiones sombreadas y coronas', b: r`
      <div class="cols"><div>
      <p>Igual que con los polígonos: <b>área grande menos área en blanco</b>.</p>
      <p><b>Círculo dentro de un cuadrado.</b> Cuadrado de 10 cm con un círculo que toca sus cuatro lados: el radio es la mitad del lado, 5 cm. Sombreado: $100 - 25\pi$ cm$^2$ $\approx 100 - 78{,}5 = 21{,}5$ cm$^2$.</p>
      <p><b>Corona circular.</b> Es el anillo entre dos circunferencias con el mismo centro, de radios $R$ y $r$:
      $$A = \pi R^2 - \pi r^2 = \pi(R^2 - r^2)$$
      Con $R = 5$ y $r = 3$: $\pi(25 - 9) = 16\pi$.</p>
      </div><div>
      <div class="qfig"><img class="tikz" src="paes/m1/fig/geo_ci_sombra.svg" alt="A la izquierda un cuadrado de 10 cm con un círculo inscrito de radio 5 cm, sombreado afuera del círculo; a la derecha una corona circular de radios R y r"></div>
      <div class="box alert"><b>Corona: resta las áreas, no los radios</b> $\pi(5 - 3)^2 = 4\pi$ está mal. Primero eleva cada radio y después resta: $\pi(25 - 9)$.</div>
      </div></div>` },
    { t: 'Errores típicos y resumen', b: r`
      <table><thead><tr><th>Error</th><th>Así no</th><th>Así sí</th></tr></thead><tbody>
      <tr><td>Usar el diámetro como radio</td><td>$d = 10$: $A = \pi\cdot 10^2$</td><td>$r = 5$: $A = 25\pi$</td></tr>
      <tr><td>Confundir fórmulas</td><td>área $= 2\pi r$</td><td>área $= \pi r^2$, perímetro $= 2\pi r$</td></tr>
      <tr><td>$r^2$ como $2r$</td><td>$r = 6$: $\pi \cdot 12$</td><td>$\pi \cdot 36$</td></tr>
      <tr><td>Corona restando radios</td><td>$\pi(5 - 3)^2$</td><td>$\pi(5^2 - 3^2) = 16\pi$</td></tr>
      <tr><td>Borde del semicírculo</td><td>solo $\pi r$</td><td>$\pi r + 2r$</td></tr>
      <tr><td>Unidades</td><td>área en cm</td><td>área en cm$^2$</td></tr></tbody></table>
      <div class="box" style="margin-top:14px"><b>Método PAES</b> 1. Encuentra el radio (si te dan el diámetro, divide por 2). 2. ¿Piden borde o región? Borde: $2\pi r$; región: $\pi r^2$. 3. Si es una parte del círculo, multiplica por la fracción. 4. Si hay sombreado, resta. 5. Deja en $\pi$ o reemplaza $\pi \approx 3{,}14$ según lo que pidan las alternativas.</div>` }
  ],
  example: {
    enun: r`<p>En cada esquina de un cuadrado de 8 cm de lado se dibujó un cuarto de círculo con centro en el vértice y radio 4 cm, como se muestra en la figura.</p><p>¿Cuál es el área de la región sombreada?</p>`,
    fig: { type: 'img', src: 'paes/m1/fig/geo_ci_ej.svg', alt: 'Cuadrado de 8 cm de lado con cuatro cuartos de círculo de radio 4 cm en sus esquinas; la región central que queda entre ellos está sombreada' },
    alts: [r`$(64 - 4\pi)$ cm$^2$`, r`$16\pi$ cm$^2$`, r`$(64 - 16\pi)$ cm$^2$`, r`$(64 - 8\pi)$ cm$^2$`], ok: 2,
    sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El área sombreada: lo que queda del cuadrado al quitar los cuatro cuartos de círculo.</p><p><b>Paso 2. Área del cuadrado.</b> $8 \cdot 8 = 64$ cm$^2$.</p><p><b>Paso 3. Los cuatro cuartos.</b> Cuatro cuartos de círculo del mismo radio forman un círculo completo de radio 4: $\pi \cdot 4^2 = 16\pi$ cm$^2$.</p><p><b>Paso 4. Resta.</b> $64 - 16\pi$ cm$^2$.</p><p><b>Respuesta:</b> $(64 - 16\pi)$ cm$^2$.</p><p><b>Comprobación:</b> con $\pi \approx 3{,}14$, $16\pi \approx 50{,}24$ y lo sombreado mide unos $13{,}8$ cm$^2$: positivo y más chico que lo blanco, como se ve en la figura. ✔</p><p><b>¿Por qué no las otras?</b> $(64 - 4\pi)$ resta un solo cuarto de círculo ($\dfrac{16\pi}{4}$), no los cuatro. $16\pi$ es el área de los cuartos de círculo, la parte en blanco. $(64 - 8\pi)$ usa el perímetro de la circunferencia de radio 4 en vez de su área.</p>`,
    conc: 'Cuatro cuartos de círculo iguales forman un círculo completo.'
  },
  bank: [
    { enun: r`<p>La rueda de una bicicleta tiene 70 cm de diámetro.</p><p>Considerando $\pi \approx 3{,}14$, ¿qué distancia recorre la bicicleta cuando la rueda da 100 vueltas completas?</p>`,
      fig: { type: 'img', src: 'paes/m1/fig/geo_ci_bici.svg', alt: 'Rueda de bicicleta de 70 cm de diámetro' },
      alts: ['439,6 m', '219,8 m', '109,9 m', '21,98 m'], ok: 1,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> La distancia en 100 vueltas. En cada vuelta, la bicicleta avanza el perímetro de la rueda.</p><p><b>Paso 2. Una vuelta.</b> $P = \pi d = 3{,}14 \cdot 70 = 219{,}8$ cm.</p><p><b>Paso 3. Cien vueltas.</b> $219{,}8 \cdot 100 = 21.980$ cm.</p><p><b>Paso 4. Pasa a metros.</b> 100 cm = 1 m: $21.980 \div 100 = 219{,}8$ m.</p><p><b>Respuesta:</b> 219,8 m.</p><p><b>¿Por qué no las otras?</b> 439,6 m usa 70 como radio: $2 \cdot 3{,}14 \cdot 70 \cdot 100$ cm. 109,9 m usa $\pi r$ con $r = 35$: la mitad de la vuelta. 21,98 m divide por 1000 al pasar de cm a m.</p>`, conc: 'En cada vuelta la rueda avanza su perímetro, πd.' },
    { enun: r`<p>¿Cuál es el área del círculo de la figura, cuyo diámetro mide 12 cm?</p>`,
      fig: { type: 'img', src: 'paes/m1/fig/geo_ci_d12.svg', alt: 'Círculo con un diámetro de 12 cm' },
      alts: [r`$144\pi$ cm$^2$`, r`$12\pi$ cm$^2$`, r`$6\pi$ cm$^2$`, r`$36\pi$ cm$^2$`], ok: 3,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El área. La fórmula usa el radio, y el dato es el diámetro.</p><p><b>Paso 2. Radio.</b> $r = 12 \div 2 = 6$ cm.</p><p><b>Paso 3. Área.</b> $A = \pi \cdot 6^2 = 36\pi$ cm$^2$.</p><p><b>Respuesta:</b> $36\pi$ cm$^2$.</p><p><b>¿Por qué no las otras?</b> $144\pi$ usa el diámetro como radio: $\pi \cdot 12^2$. $12\pi$ es el perímetro, $2\pi \cdot 6$. $6\pi$ multiplica $\pi$ por el radio sin elevarlo.</p>`, conc: 'Si te dan el diámetro, divídelo por 2 antes de usar πr².' },
    { enun: r`<p>El perímetro de una circunferencia es 31,4 cm.</p><p>Considerando $\pi \approx 3{,}14$, ¿cuál es el área del círculo correspondiente?</p>`,
      alts: ['15,7 cm$^2$', '314 cm$^2$', '78,5 cm$^2$', '31,4 cm$^2$'], ok: 2,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El área. Primero encontramos el radio con el perímetro.</p><p><b>Paso 2. Radio.</b> $2\pi r = 31{,}4$, o sea $6{,}28\,r = 31{,}4$, y $r = 31{,}4 \div 6{,}28 = 5$ cm.</p><p><b>Paso 3. Área.</b> $A = 3{,}14 \cdot 5^2 = 3{,}14 \cdot 25 = 78{,}5$ cm$^2$.</p><p><b>Respuesta:</b> 78,5 cm$^2$.</p><p><b>¿Por qué no las otras?</b> 15,7 cm$^2$ calcula $\pi \cdot 5$, sin elevar el radio. 314 cm$^2$ usa 10 (el diámetro) como radio: $3{,}14 \cdot 100$. 31,4 cm$^2$ repite el perímetro.</p>`, conc: 'Del perímetro sale el radio: r = P ÷ 2π; después aplica πr².' },
    { enun: r`<p>Una ventana tiene la forma de un rectángulo de 80 cm de ancho y 100 cm de alto, coronado por un semicírculo cuyo diámetro es el lado superior del rectángulo, como en la figura.</p><p>¿Cuál es el área de la ventana?</p>`,
      fig: { type: 'img', src: 'paes/m1/fig/geo_ci_ventana.svg', alt: 'Ventana formada por un rectángulo de 80 cm de ancho y 100 cm de alto con un semicírculo encima, de diámetro 80 cm' },
      alts: [r`$(8000 + 800\pi)$ cm$^2$`, r`$(8000 + 1600\pi)$ cm$^2$`, r`$(8000 + 3200\pi)$ cm$^2$`, r`$(8000 + 400\pi)$ cm$^2$`], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El área total: rectángulo más semicírculo.</p><p><b>Paso 2. Rectángulo.</b> $80 \cdot 100 = 8000$ cm$^2$.</p><p><b>Paso 3. Radio del semicírculo.</b> El diámetro es 80 cm: $r = 40$ cm.</p><p><b>Paso 4. Semicírculo.</b> $\dfrac{\pi \cdot 40^2}{2} = \dfrac{1600\pi}{2} = 800\pi$ cm$^2$.</p><p><b>Paso 5. Suma.</b> $(8000 + 800\pi)$ cm$^2$.</p><p><b>Respuesta:</b> $(8000 + 800\pi)$ cm$^2$.</p><p><b>¿Por qué no las otras?</b> $1600\pi$ es el círculo completo: falta dividir por 2. $3200\pi$ usa el diámetro como radio y divide por 2: $\dfrac{\pi \cdot 80^2}{2}$. $400\pi$ es un cuarto de círculo, no la mitad.</p>`, conc: 'Semicírculo: la mitad de πr², con r la mitad del diámetro.' },
    { enun: r`<p>Una pista atlética está formada por dos tramos rectos de 100 m y dos semicircunferencias de 60 m de diámetro, como en la figura.</p><p>Considerando $\pi \approx 3{,}14$, ¿cuál es el largo de una vuelta a la pista?</p>`,
      fig: { type: 'img', src: 'paes/m1/fig/geo_ci_pista.svg', alt: 'Pista formada por dos tramos rectos de 100 m y dos semicircunferencias en los extremos, de 60 m de diámetro' },
      alts: ['320 m', '388,4 m', '576,8 m', '294,2 m'], ok: 1,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El perímetro de la pista: dos rectas más dos semicircunferencias.</p><p><b>Paso 2. Rectas.</b> $2 \cdot 100 = 200$ m.</p><p><b>Paso 3. Curvas.</b> Dos semicircunferencias del mismo diámetro forman una circunferencia completa: $\pi d = 3{,}14 \cdot 60 = 188{,}4$ m.</p><p><b>Paso 4. Suma.</b> $200 + 188{,}4 = 388{,}4$ m.</p><p><b>Respuesta:</b> 388,4 m.</p><p><b>¿Por qué no las otras?</b> 320 m reemplaza cada curva por su diámetro, $200 + 60 + 60$, pero la curva es más larga que el diámetro. 576,8 m usa 60 como radio: $200 + 2 \cdot 3{,}14 \cdot 60$. 294,2 m cuenta un solo tramo recto: $100 + 188{,}4$.</p>`, conc: 'Dos semicircunferencias iguales forman una circunferencia completa.' },
    { enun: r`<p>¿Cuál es el área de la corona circular sombreada de la figura, formada por dos circunferencias con el mismo centro y radios 3 cm y 5 cm?</p>`,
      fig: { type: 'img', src: 'paes/m1/fig/geo_ci_corona.svg', alt: 'Corona circular sombreada entre dos circunferencias concéntricas de radios 3 cm y 5 cm' },
      alts: [r`$4\pi$ cm$^2$`, r`$25\pi$ cm$^2$`, r`$34\pi$ cm$^2$`, r`$16\pi$ cm$^2$`], ok: 3,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El anillo: círculo grande menos círculo chico.</p><p><b>Paso 2. Círculo grande.</b> $\pi \cdot 5^2 = 25\pi$.</p><p><b>Paso 3. Círculo chico.</b> $\pi \cdot 3^2 = 9\pi$.</p><p><b>Paso 4. Resta.</b> $25\pi - 9\pi = 16\pi$ cm$^2$.</p><p><b>Respuesta:</b> $16\pi$ cm$^2$.</p><p><b>¿Por qué no las otras?</b> $4\pi$ resta los radios antes de elevar: $\pi(5 - 3)^2$. $25\pi$ es el círculo grande completo. $34\pi$ suma los círculos en vez de restarlos.</p>`, conc: 'Corona: π(R² − r²); eleva cada radio antes de restar.' },
    { enun: r`<p>¿Cuál es el área del sector circular de la figura, de radio 6 cm y ángulo de 60°?</p>`,
      fig: { type: 'img', src: 'paes/m1/fig/geo_ci_sector.svg', alt: 'Sector circular de radio 6 cm y ángulo central de 60 grados' },
      alts: [r`$2\pi$ cm$^2$`, r`$6\pi$ cm$^2$`, r`$36\pi$ cm$^2$`, r`$12\pi$ cm$^2$`], ok: 1,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El área del sector: una fracción del círculo.</p><p><b>Paso 2. La fracción.</b> $\dfrac{60°}{360°} = \dfrac{1}{6}$.</p><p><b>Paso 3. Círculo completo.</b> $\pi \cdot 6^2 = 36\pi$.</p><p><b>Paso 4. Sector.</b> $\dfrac{1}{6} \cdot 36\pi = 6\pi$ cm$^2$.</p><p><b>Respuesta:</b> $6\pi$ cm$^2$.</p><p><b>¿Por qué no las otras?</b> $2\pi$ es el largo del arco, $\dfrac{1}{6}\cdot 12\pi$, que se mide en cm. $36\pi$ es el círculo completo. $12\pi$ es el perímetro de la circunferencia completa.</p>`, conc: 'Sector de α grados: (α/360)·πr².' },
    { enun: r`<p>En la figura, una circunferencia de radio 5 cm está inscrita en un cuadrado: toca sus cuatro lados.</p><p>Considerando $\pi \approx 3{,}14$, ¿cuál es el área de la región sombreada?</p>`,
      fig: { type: 'img', src: 'paes/m1/fig/geo_ci_inscrito.svg', alt: 'Cuadrado con un círculo de radio 5 cm que toca sus cuatro lados; las esquinas fuera del círculo están sombreadas' },
      alts: ['21,5 cm$^2$', '78,5 cm$^2$', '68,6 cm$^2$', '37,2 cm$^2$'], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Lo sombreado: cuadrado menos círculo.</p><p><b>Paso 2. Lado del cuadrado.</b> El círculo toca los cuatro lados, así que el lado es igual al diámetro: $2 \cdot 5 = 10$ cm.</p><p><b>Paso 3. Cuadrado.</b> $10 \cdot 10 = 100$ cm$^2$.</p><p><b>Paso 4. Círculo.</b> $3{,}14 \cdot 5^2 = 78{,}5$ cm$^2$.</p><p><b>Paso 5. Resta.</b> $100 - 78{,}5 = 21{,}5$ cm$^2$.</p><p><b>Respuesta:</b> 21,5 cm$^2$.</p><p><b>¿Por qué no las otras?</b> 78,5 cm$^2$ es el círculo, la parte en blanco. 68,6 cm$^2$ resta el perímetro de la circunferencia, $2 \cdot 3{,}14 \cdot 5 = 31{,}4$, en vez del área. 37,2 cm$^2$ resta $62{,}8$, el perímetro de una circunferencia de radio 10.</p>`, conc: 'Círculo inscrito en un cuadrado: el lado del cuadrado es el diámetro.' },
    { enun: r`<p>De una lámina cuadrada de 20 cm de lado se recortan cuatro círculos iguales, lo más grandes posible, como en la figura.</p><p>¿Cuál es el área de la lámina que sobra?</p>`,
      fig: { type: 'img', src: 'paes/m1/fig/geo_ci_cuatro.svg', alt: 'Cuadrado de 20 cm de lado con cuatro círculos iguales, dos por fila, que se tocan entre sí y tocan los bordes' },
      alts: [r`$(400 - 25\pi)$ cm$^2$`, r`$(400 - 40\pi)$ cm$^2$`, r`$100\pi$ cm$^2$`, r`$(400 - 100\pi)$ cm$^2$`], ok: 3,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Lo que sobra: lámina menos los cuatro círculos.</p><p><b>Paso 2. Radio.</b> En cada fila caben dos diámetros a lo largo de 20 cm: diámetro 10 cm, radio 5 cm.</p><p><b>Paso 3. Lámina.</b> $20 \cdot 20 = 400$ cm$^2$.</p><p><b>Paso 4. Círculos.</b> Cada uno: $\pi \cdot 5^2 = 25\pi$. Los cuatro: $100\pi$ cm$^2$.</p><p><b>Paso 5. Resta.</b> $(400 - 100\pi)$ cm$^2$, que es aproximadamente $400 - 314 = 86$ cm$^2$.</p><p><b>Respuesta:</b> $(400 - 100\pi)$ cm$^2$.</p><p><b>¿Por qué no las otras?</b> $(400 - 25\pi)$ resta un solo círculo. $(400 - 40\pi)$ resta los perímetros: $4 \cdot 2\pi \cdot 5$. $100\pi$ es el área de los círculos, lo que se recorta.</p>`, conc: 'Cuenta cuántos diámetros caben en el lado para encontrar el radio.' },
    { enun: r`<p>El minutero de un reloj mide 12 cm.</p><p>Considerando $\pi \approx 3{,}14$, ¿cuántos centímetros recorre la punta del minutero en 15 minutos?</p>`,
      fig: { type: 'img', src: 'paes/m1/fig/geo_ci_reloj.svg', alt: 'Reloj con el minutero de 12 cm; una flecha marca el arco que recorre la punta desde las 12 hasta las 3' },
      alts: ['18,84 cm', '75,36 cm', '113,04 cm', '37,68 cm'], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El largo del arco que recorre la punta. La punta dibuja una circunferencia de radio 12 cm.</p><p><b>Paso 2. Fracción.</b> En 60 minutos da una vuelta completa; en 15 minutos, $\dfrac{15}{60} = \dfrac{1}{4}$ de vuelta.</p><p><b>Paso 3. Vuelta completa.</b> $2 \cdot 3{,}14 \cdot 12 = 75{,}36$ cm.</p><p><b>Paso 4. Un cuarto.</b> $75{,}36 \div 4 = 18{,}84$ cm.</p><p><b>Respuesta:</b> 18,84 cm.</p><p><b>¿Por qué no las otras?</b> 75,36 cm es la vuelta completa (60 minutos). 113,04 cm es el área del cuarto de círculo, $\dfrac{3{,}14 \cdot 144}{4}$, que además estaría en cm$^2$. 37,68 cm es media vuelta (30 minutos).</p>`, conc: 'Arco: la fracción de vuelta por 2πr.' },
    { enun: r`<p>Se quiere poner una cerca alrededor de un jardín circular de 14 m de diámetro.</p><p>Considerando $\pi \approx 3{,}14$, ¿cuántos metros de cerca se necesitan?</p>`,
      alts: ['87,92 m', '153,86 m', '43,96 m', '21,98 m'], ok: 2,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El largo de la cerca: el perímetro del jardín.</p><p><b>Paso 2. Perímetro.</b> $P = \pi d = 3{,}14 \cdot 14 = 43{,}96$ m.</p><p><b>Respuesta:</b> 43,96 m.</p><p><b>Comprobación:</b> con el radio, $2 \cdot 3{,}14 \cdot 7 = 43{,}96$. ✔</p><p><b>¿Por qué no las otras?</b> 87,92 m usa 14 como radio: $2 \cdot 3{,}14 \cdot 14$. 153,86 m es el área, $3{,}14 \cdot 7^2$, en m$^2$. 21,98 m es $\pi r$: media circunferencia.</p>`, conc: 'Cercar es perímetro; cubrir es área.' },
    { enun: r`<p>Si el radio de un círculo se duplica, ¿cuál(es) de las siguientes afirmaciones es (son) verdadera(s)?</p><p>I) Su perímetro se duplica.<br>II) Su área se duplica.<br>III) Su área se cuadruplica.</p>`,
      alts: ['Solo I', 'Solo II', 'Solo I y III', 'Solo II y III'], ok: 2,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Cómo cambian perímetro y área al pasar de $r$ a $2r$. Probamos con $r = 3$ y $r = 6$.</p><p><b>Paso 2. Afirmación I.</b> Perímetros: $6\pi$ y $12\pi$. Se duplica. En general, $2\pi(2r) = 2 \cdot 2\pi r$. <b>Verdadera.</b></p><p><b>Paso 3. Afirmación II.</b> Áreas: $9\pi$ y $36\pi$. $36\pi$ no es el doble de $9\pi$. <b>Falsa.</b></p><p><b>Paso 4. Afirmación III.</b> $36\pi = 4 \cdot 9\pi$. En general, $\pi(2r)^2 = 4\pi r^2$. <b>Verdadera.</b></p><p><b>Respuesta:</b> Solo I y III.</p><p><b>¿Por qué no las otras?</b> "Solo I" deja fuera III. "Solo II" y "Solo II y III" incluyen II, que es falsa: el radio está al cuadrado en el área.</p>`, conc: 'Al multiplicar el radio por k, el perímetro se multiplica por k y el área por k².' },
    { enun: r`<p>Dentro de un círculo de 12 cm de diámetro se dibujaron dos círculos iguales que se tocan en el centro y tocan al círculo grande, como en la figura.</p><p>¿Cuál es el área de la región sombreada?</p>`,
      fig: { type: 'img', src: 'paes/m1/fig/geo_ci_dos.svg', alt: 'Círculo de 12 cm de diámetro con dos círculos blancos iguales dentro, alineados sobre un diámetro; el resto del círculo grande está sombreado' },
      alts: [r`$27\pi$ cm$^2$`, r`$72\pi$ cm$^2$`, r`$9\pi$ cm$^2$`, r`$18\pi$ cm$^2$`], ok: 3,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Lo sombreado: círculo grande menos los dos chicos.</p><p><b>Paso 2. Radios.</b> Grande: $12 \div 2 = 6$ cm. Los dos chicos ocupan el diámetro grande: cada diámetro chico mide 6 cm, y su radio, 3 cm.</p><p><b>Paso 3. Grande.</b> $\pi \cdot 6^2 = 36\pi$.</p><p><b>Paso 4. Chicos.</b> $2 \cdot \pi \cdot 3^2 = 18\pi$.</p><p><b>Paso 5. Resta.</b> $36\pi - 18\pi = 18\pi$ cm$^2$.</p><p><b>Respuesta:</b> $18\pi$ cm$^2$.</p><p><b>Dato curioso:</b> lo sombreado es exactamente la mitad del círculo grande.</p><p><b>¿Por qué no las otras?</b> $27\pi$ resta un solo círculo chico. $72\pi$ usa los diámetros como radios: $144\pi - 2\cdot 36\pi$. $9\pi$ es el área de un círculo chico.</p>`, conc: 'Encuentra cada radio antes de restar áreas.' },
    { enun: r`<p>En un cuadrado de 6 cm de lado se dibujó un cuarto de círculo con centro en un vértice y radio igual al lado del cuadrado, como en la figura.</p><p>¿Cuál es el área de la región sombreada?</p>`,
      fig: { type: 'img', src: 'paes/m1/fig/geo_ci_cuarto.svg', alt: 'Cuadrado de 6 cm de lado con un cuarto de círculo de radio 6 cm con centro en el vértice inferior izquierdo; la esquina superior derecha, fuera del cuarto de círculo, está sombreada' },
      alts: [r`$(36 - 9\pi)$ cm$^2$`, r`$(36 - 18\pi)$ cm$^2$`, r`$(36 - 3\pi)$ cm$^2$`, r`$9\pi$ cm$^2$`], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Lo sombreado: cuadrado menos cuarto de círculo.</p><p><b>Paso 2. Cuadrado.</b> $6 \cdot 6 = 36$ cm$^2$.</p><p><b>Paso 3. Cuarto de círculo.</b> $\dfrac{\pi \cdot 6^2}{4} = \dfrac{36\pi}{4} = 9\pi$ cm$^2$.</p><p><b>Paso 4. Resta.</b> $(36 - 9\pi)$ cm$^2$, aproximadamente $36 - 28{,}26 = 7{,}74$ cm$^2$.</p><p><b>Respuesta:</b> $(36 - 9\pi)$ cm$^2$.</p><p><b>¿Por qué no las otras?</b> $(36 - 18\pi)$ resta un semicírculo; además daría un número negativo. $(36 - 3\pi)$ resta el arco, $\dfrac{2\pi \cdot 6}{4} = 3\pi$, que es un largo. $9\pi$ es el cuarto de círculo, la parte clara.</p>`, conc: 'Cuarto de círculo: πr² ÷ 4.' },
    { enun: r`<p>¿Cuál es el perímetro del semicírculo de la figura, cuyo diámetro mide 10 cm?</p>`,
      fig: { type: 'img', src: 'paes/m1/fig/geo_ci_semi.svg', alt: 'Semicírculo de 10 cm de diámetro' },
      alts: [r`$5\pi$ cm`, r`$(10\pi + 10)$ cm`, r`$(5\pi + 10)$ cm`, r`$10\pi$ cm`], ok: 2,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El borde completo: el arco más el diámetro.</p><p><b>Paso 2. Arco.</b> La mitad de la circunferencia: $\dfrac{\pi \cdot 10}{2} = 5\pi$ cm.</p><p><b>Paso 3. Diámetro.</b> 10 cm.</p><p><b>Paso 4. Suma.</b> $(5\pi + 10)$ cm.</p><p><b>Respuesta:</b> $(5\pi + 10)$ cm.</p><p><b>¿Por qué no las otras?</b> $5\pi$ olvida el lado recto. $(10\pi + 10)$ usa la circunferencia completa. $10\pi$ es la circunferencia completa sin el diámetro.</p>`, conc: 'El borde del semicírculo incluye el diámetro.' },
    { enun: r`<p>La rueda de un carro tiene 0,3 m de radio.</p><p>Considerando $\pi \approx 3{,}14$, ¿cuántas vueltas completas da la rueda para recorrer 942 m?</p>`,
      alts: ['1000', '250', '1570', '500'], ok: 3,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Cuántas vueltas. Dividimos la distancia por lo que avanza en una vuelta.</p><p><b>Paso 2. Una vuelta.</b> $2 \cdot 3{,}14 \cdot 0{,}3 = 1{,}884$ m.</p><p><b>Paso 3. Divide.</b> $942 \div 1{,}884 = 500$ vueltas.</p><p><b>Respuesta:</b> 500.</p><p><b>Comprobación:</b> $500 \cdot 1{,}884 = 942$. ✔</p><p><b>¿Por qué no las otras?</b> 1000 divide por $\pi r = 0{,}942$: media vuelta. 250 usa el diámetro 0,6 como radio. 1570 divide por el diámetro sin $\pi$: $942 \div 0{,}6$.</p>`, conc: 'Número de vueltas = distancia ÷ perímetro de la rueda.' },
    { enun: r`<p>Una pizza circular de 30 cm de diámetro se corta en 8 trozos iguales.</p><p>Considerando $\pi \approx 3{,}14$, ¿cuál es, aproximadamente, el área de un trozo?</p>`,
      fig: { type: 'img', src: 'paes/m1/fig/geo_ci_pizza.svg', alt: 'Pizza circular de 30 cm de diámetro cortada en 8 trozos iguales, con un trozo destacado' },
      alts: ['353,25 cm$^2$', '88,3 cm$^2$', '11,8 cm$^2$', '706,5 cm$^2$'], ok: 1,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Un octavo del área de la pizza.</p><p><b>Paso 2. Radio.</b> $30 \div 2 = 15$ cm.</p><p><b>Paso 3. Pizza completa.</b> $3{,}14 \cdot 15^2 = 3{,}14 \cdot 225 = 706{,}5$ cm$^2$.</p><p><b>Paso 4. Un trozo.</b> $706{,}5 \div 8 \approx 88{,}3$ cm$^2$.</p><p><b>Respuesta:</b> aproximadamente 88,3 cm$^2$.</p><p><b>¿Por qué no las otras?</b> 353,25 cm$^2$ usa el diámetro como radio: $3{,}14 \cdot 900 \div 8$. 11,8 cm$^2$ divide el perímetro, $94{,}2 \div 8$. 706,5 cm$^2$ es la pizza completa.</p>`, conc: 'Trozo de n partes iguales: πr² ÷ n.' },
    { enun: r`<p>En una pizzería se puede pedir una pizza grande de 40 cm de diámetro o dos pizzas medianas de 28 cm de diámetro cada una, del mismo grosor.</p><p>¿Cuál de las siguientes afirmaciones es verdadera?</p>`,
      fig: { type: 'img', src: 'paes/m1/fig/geo_ci_pizzas.svg', alt: 'Una pizza grande de 40 cm de diámetro y dos pizzas medianas de 28 cm de diámetro' },
      alts: ['Las dos medianas juntas tienen más área que la grande.', 'Las dos medianas juntas tienen el doble de área que la grande.', 'La grande tiene más área que las dos medianas juntas.', 'Tienen la misma área.'], ok: 2,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Comparar áreas.</p><p><b>Paso 2. Grande.</b> Radio 20: $\pi \cdot 400 = 400\pi$ cm$^2$.</p><p><b>Paso 3. Medianas.</b> Radio 14: cada una $\pi \cdot 196 = 196\pi$; las dos, $392\pi$ cm$^2$.</p><p><b>Paso 4. Compara.</b> $400\pi > 392\pi$: la grande tiene un poco más.</p><p><b>Respuesta:</b> la grande tiene más área que las dos medianas juntas.</p><p><b>¿Por qué no las otras?</b> Que $28 + 28 = 56$ sea mayor que 40 no importa: el área depende del radio al cuadrado. Por eso las medianas no tienen más área, ni el doble, ni la misma.</p>`, conc: 'Para comparar círculos, compara áreas (r²), no diámetros.' }
  ]
},

/* =====================================================================
   UNIDAD 2 · CUERPOS GEOMÉTRICOS
   ===================================================================== */
{
  id: 'geo_area_cuerpos', unit: 'Unidad 2 · Cuerpos geométricos', icon: '📦',
  title: 'Área de superficie de cubos, paralelepípedos y cilindros',
  desc: 'Caras, aristas y vértices, redes o desarrollos planos, área lateral y área total del cubo, del paralelepípedo y del cilindro, y problemas de pintar, forrar y fabricar envases.',
  slides: [
    { t: 'Los cuerpos y sus partes', b: r`
      <div class="cols"><div>
      <p>Un <b>paralelepípedo</b> (o prisma recto de base rectangular) es una caja: tiene 6 caras rectangulares, opuestas de a pares e iguales.</p>
      <p>Un <b>cubo</b> es un paralelepípedo con todas sus aristas iguales: sus 6 caras son cuadrados iguales.</p>
      <p>· <b>Cara</b>: cada superficie plana. · <b>Arista</b>: donde se juntan dos caras. · <b>Vértice</b>: la esquina donde se juntan tres aristas.</p>
      <p>Cubo y paralelepípedo tienen 6 caras, 12 aristas y 8 vértices.</p>
      <p>Un <b>cilindro</b> tiene dos bases circulares iguales y una cara lateral curva, como una lata.</p>
      </div><div>
      <div class="qfig"><img class="tikz" src="paes/m1/fig/geo_ac_cuerpos.svg" alt="Un cubo con una cara, una arista y un vértice señalados, un paralelepípedo y un cilindro; las aristas ocultas se dibujan con línea punteada"></div>
      <div class="box"><b>Cómo leer el dibujo</b> Las líneas punteadas son aristas que quedan detrás, ocultas a la vista. Las caras que se ven inclinadas son en realidad rectángulos.</div>
      </div></div>` },
    { t: 'Redes: el cuerpo desarmado', b: r`
      <div class="cols"><div>
      <p>Si desarmas una caja y la estiras sobre la mesa, obtienes su <b>red</b> o <b>desarrollo plano</b>. El área de la superficie del cuerpo es el área de su red.</p>
      <p>· La red del cubo tiene 6 cuadrados iguales.</p>
      <p>· La red del paralelepípedo tiene 3 pares de rectángulos iguales.</p>
      <p>No cualquier figura de 6 cuadrados arma un cubo. Para revisar, imagina que doblas: cada cuadrado debe quedar en una cara distinta, sin que dos caigan en el mismo lugar.</p>
      <p><b>Sirven:</b> la cruz y las de "1 – 4 – 1" (una fila de 4 con un cuadrado arriba y otro abajo, en cualquier columna).</p>
      <p><b>No sirven:</b> un bloque de $2 \times 3$, o una fila de 4 con dos cuadrados del mismo lado.</p>
      </div><div>
      <div class="qfig"><img class="tikz" src="paes/m1/fig/geo_ac_redes.svg" alt="Red de un cubo en forma de cruz con 6 cuadrados y red de un paralelepípedo con la base al centro y sus cuatro caras laterales y la tapa alrededor"></div>
      <div class="box alert"><b>Truco</b> En una fila de 4 cuadrados, esos 4 forman las paredes alrededor. Los otros dos deben ser tapa y fondo: uno a cada lado de la fila.</div>
      </div></div>` },
    { t: 'Área del cubo', b: r`
      <div class="cols"><div>
      <p>Si la arista mide $a$, cada cara mide $a^2$ y hay 6 caras:
      $$A_{\text{cubo}} = 6a^2$$</p>
      <p><b>Ejemplo 1.</b> Arista 4 cm: cada cara $16$ cm$^2$ y en total $6 \cdot 16 = 96$ cm$^2$.</p>
      <p><b>Ejemplo 2 (al revés).</b> Un cubo tiene 150 cm$^2$ de área total. Cada cara: $150 \div 6 = 25$ cm$^2$. La arista: $\sqrt{25} = 5$ cm.</p>
      <p><b>Cubo sin tapa:</b> 5 caras, $5a^2$.</p>
      </div><div>
      <div class="box alert"><b>No confundas con el volumen</b> El área total es $6a^2$ (cm$^2$); el volumen es $a^3$ (cm$^3$). Con $a = 6$ dan el mismo número, 216, pero significan cosas distintas.</div>
      <div class="box"><b>Si la arista se duplica</b> Cada cara pasa de $a^2$ a $(2a)^2 = 4a^2$: el área se multiplica por 4.</div>
      </div></div>` },
    { t: 'Área del paralelepípedo', b: r`
      <div class="cols"><div>
      <p>Con aristas $a$, $b$ y $c$ hay tres tipos de cara, cada una repetida dos veces:
      $$A = 2(ab + bc + ac)$$</p>
      <p><b>Ejemplo.</b> Caja de 8 cm, 5 cm y 3 cm:</p>
      <p>· piso y tapa: $8 \cdot 5 = 40$ cada una;</p>
      <p>· frente y fondo: $8 \cdot 3 = 24$ cada una;</p>
      <p>· costados: $5 \cdot 3 = 15$ cada uno.</p>
      <p>Total: $2(40 + 24 + 15) = 2 \cdot 79 = 158$ cm$^2$.</p>
      <p><b>Sin una cara.</b> Si la caja no tiene tapa, o si no se pinta la base, se resta esa cara al total.</p>
      </div><div>
      <div class="qfig"><img class="tikz" src="paes/m1/fig/geo_ac_caja.svg" alt="Paralelepípedo de aristas a, b y c; sus caras miden a por b, b por c y a por c"></div>
      <div class="box alert"><b>Lee qué caras se cuentan</b> "Pintar el exterior sin la base", "caja sin tapa", "forrar las paredes": cada frase deja fuera caras distintas. Haz una lista antes de sumar.</div>
      </div></div>` },
    { t: 'Área del cilindro', b: r`
      <div class="cols"><div>
      <p>Si abres un cilindro, la cara lateral es un <b>rectángulo</b>: su largo es el perímetro de la base, $2\pi r$, y su ancho es la altura $h$.</p>
      <p>· Área lateral: $A_L = 2\pi r h$.</p>
      <p>· Cada base: $\pi r^2$.</p>
      <p>· Área total: $A_T = 2\pi r h + 2\pi r^2$.</p>
      <p><b>Ejemplo.</b> Lata de radio 3 cm y altura 10 cm: lateral $2\pi \cdot 3 \cdot 10 = 60\pi$; bases $2 \cdot 9\pi = 18\pi$; total $78\pi$ cm$^2$ $\approx 244{,}9$ cm$^2$.</p>
      <p>La etiqueta de una lata es justamente el área lateral.</p>
      </div><div>
      <div class="qfig"><img class="tikz" src="paes/m1/fig/geo_ac_red_cil.svg" alt="Cilindro de radio r y altura h y su red: un rectángulo de largo 2 pi r y alto h, con dos círculos de radio r"></div>
      <div class="box alert"><b>Con diámetro</b> Si te dan el diámetro, el lateral es $\pi d h$. No uses el diámetro como radio en $2\pi r h$: duplicarías el resultado.</div>
      </div></div>` },
    { t: 'Errores típicos y resumen', b: r`
      <table><thead><tr><th>Cuerpo</th><th>Área lateral</th><th>Área total</th></tr></thead><tbody>
      <tr><td>Cubo de arista $a$</td><td>$4a^2$</td><td>$6a^2$</td></tr>
      <tr><td>Paralelepípedo $a \times b \times c$ (alto $c$)</td><td>$2(a + b)\,c$</td><td>$2(ab + bc + ac)$</td></tr>
      <tr><td>Cilindro de radio $r$ y altura $h$</td><td>$2\pi r h$</td><td>$2\pi r h + 2\pi r^2$</td></tr></tbody></table>
      <div class="box alert" style="margin-top:14px"><b>Errores típicos</b> · Contar solo 3 caras de la caja (falta el "por 2"). · Olvidar restar la tapa cuando el cuerpo no la tiene. · Confundir área (cm$^2$) con volumen (cm$^3$). · Usar el diámetro como radio. · En cuerpos pegados, olvidar que las caras que se tocan dejan de estar afuera.</div>
      <div class="box"><b>Método PAES</b> 1. Dibuja o imagina la red. 2. Haz la lista de caras que se cuentan. 3. Calcula el área de cada una. 4. Suma y revisa la unidad (cm$^2$, m$^2$).</div>` }
  ],
  example: {
    src: 'PAES Invierno 2026, adaptada',
    enun: r`<p>Un carpintero restaurará el siguiente mueble con forma de prisma recto de base rectangular, de 90 cm de ancho, 50 cm de fondo y 200 cm de alto.</p><p>Para la restauración, debe pintar el exterior de la estructura, sin incluir la base inferior.</p><p>¿Cuál es la medida de la superficie por pintar?</p>`,
    fig: { type: 'img', src: 'paes/m1/fig/geo_ac_mueble.svg', alt: 'Mueble con forma de paralelepípedo de 90 cm de ancho, 50 cm de fondo y 200 cm de alto, con dos puertas al frente' },
    alts: ['32.500 cm$^2$', '56.000 cm$^2$', '60.500 cm$^2$', '65.000 cm$^2$'], ok: 2,
    sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El área exterior del mueble, sin la base de abajo. Calculamos el área total y le restamos esa cara.</p><p><b>Paso 2. Frente y espalda.</b> $90 \cdot 200 = 18.000$ cm$^2$ cada una: $36.000$.</p><p><b>Paso 3. Costados.</b> $50 \cdot 200 = 10.000$ cm$^2$ cada uno: $20.000$.</p><p><b>Paso 4. Tapa y base.</b> $90 \cdot 50 = 4500$ cm$^2$ cada una: $9000$.</p><p><b>Paso 5. Área total.</b> $36.000 + 20.000 + 9000 = 65.000$ cm$^2$.</p><p><b>Paso 6. Quita la base inferior.</b> $65.000 - 4500 = 60.500$ cm$^2$.</p><p><b>Respuesta:</b> 60.500 cm$^2$.</p><p><b>Comprobación (sumando solo lo que se pinta):</b> $36.000 + 20.000 + 4500 = 60.500$. ✔</p><p><b>¿Por qué no las otras?</b> 32.500 cm$^2$ cuenta una sola cara de cada par: $18.000 + 10.000 + 4500$. 56.000 cm$^2$ quita la base y también la tapa, pero la tapa sí se pinta. 65.000 cm$^2$ incluye la base inferior.</p>`,
    conc: 'Calcula el área total y resta las caras que no se cuentan.'
  },
  bank: [
    { enun: r`<p>¿Cuál es el área total de la superficie del cubo de la figura, de arista 5 cm?</p>`,
      fig: { type: 'img', src: 'paes/m1/fig/geo_ac_cubo5.svg', alt: 'Cubo de arista 5 cm' },
      alts: ['125 cm$^2$', '150 cm$^2$', '100 cm$^2$', '25 cm$^2$'], ok: 1,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El área de las 6 caras del cubo.</p><p><b>Paso 2. Una cara.</b> $5 \cdot 5 = 25$ cm$^2$.</p><p><b>Paso 3. Seis caras.</b> $6 \cdot 25 = 150$ cm$^2$.</p><p><b>Respuesta:</b> 150 cm$^2$.</p><p><b>¿Por qué no las otras?</b> 125 cm$^2$ es $5^3$, el volumen (en cm$^3$). 100 cm$^2$ cuenta solo 4 caras: el área lateral. 25 cm$^2$ es una sola cara.</p>`, conc: 'Área del cubo: 6a².' },
    { enun: r`<p>Una empresa fabrica cajas cúbicas de madera para guardar joyas. El precio de venta de cada caja se determina como <span class="peso">$800</span>$\cdot k$, donde $k$ es el área exterior total de la caja, en cm$^2$.</p><p>Si el área de una cara exterior de estas cajas es 49 cm$^2$, ¿cuál de las siguientes expresiones representa $k$?</p>`, src: 'PAES Regular 2026, adaptada',
      fig: { type: 'img', src: 'paes/m1/fig/geo_ac_joyero.svg', alt: 'Caja cúbica con una cara destacada de 49 centímetros cuadrados' },
      alts: [r`$7^2$`, r`$6\cdot 7^3$`, r`$6\cdot 7^4$`, r`$6\cdot 7^2$`], ok: 3,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El área exterior total $k$, escrita como potencia.</p><p><b>Paso 2. Una cara.</b> $49 = 7^2$: la arista mide 7 cm.</p><p><b>Paso 3. Seis caras.</b> $k = 6 \cdot 49 = 6 \cdot 7^2$ (que es 294 cm$^2$).</p><p><b>Respuesta:</b> $6 \cdot 7^2$.</p><p><b>¿Por qué no las otras?</b> $7^2$ es una sola cara. $6 \cdot 7^3$ mezcla el área con el volumen ($7^3$). $6 \cdot 7^4$ eleva al cuadrado el área de la cara: $49^2 = 7^4$.</p>`, conc: 'Si conoces una cara del cubo, el área total es 6 veces esa cara.' },
    { enun: r`<p>¿Cuál es el área total de la superficie del paralelepípedo de la figura?</p>`,
      fig: { type: 'img', src: 'paes/m1/fig/geo_ac_caja853.svg', alt: 'Paralelepípedo de 8 cm de largo, 5 cm de fondo y 3 cm de alto' },
      alts: ['158 cm$^2$', '120 cm$^2$', '79 cm$^2$', '316 cm$^2$'], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El área de las 6 caras: tres pares de rectángulos iguales.</p><p><b>Paso 2. Cada par.</b> $8 \cdot 5 = 40$, $8 \cdot 3 = 24$ y $5 \cdot 3 = 15$.</p><p><b>Paso 3. Suma y duplica.</b> $2(40 + 24 + 15) = 2 \cdot 79 = 158$ cm$^2$.</p><p><b>Respuesta:</b> 158 cm$^2$.</p><p><b>¿Por qué no las otras?</b> 120 cm$^2$ es $8 \cdot 5 \cdot 3$, el volumen. 79 cm$^2$ cuenta una sola cara de cada par. 316 cm$^2$ duplica dos veces.</p>`, conc: 'Paralelepípedo: 2(ab + bc + ac).' },
    { enun: r`<p>Se fabricará una caja sin tapa, con forma de paralelepípedo, de 30 cm de largo, 20 cm de ancho y 10 cm de alto, como en la figura.</p><p>¿Cuánto cartón se necesita, sin considerar pestañas ni uniones?</p>`,
      fig: { type: 'img', src: 'paes/m1/fig/geo_ac_sintapa.svg', alt: 'Caja sin tapa de 30 cm de largo, 20 cm de ancho y 10 cm de alto' },
      alts: ['2200 cm$^2$', '1600 cm$^2$', '1100 cm$^2$', '6000 cm$^2$'], ok: 1,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El área de 5 caras: todas menos la tapa.</p><p><b>Paso 2. Base.</b> $30 \cdot 20 = 600$ cm$^2$.</p><p><b>Paso 3. Frente y fondo.</b> $2 \cdot (30 \cdot 10) = 600$ cm$^2$.</p><p><b>Paso 4. Costados.</b> $2 \cdot (20 \cdot 10) = 400$ cm$^2$.</p><p><b>Paso 5. Suma.</b> $600 + 600 + 400 = 1600$ cm$^2$.</p><p><b>Respuesta:</b> 1600 cm$^2$.</p><p><b>¿Por qué no las otras?</b> 2200 cm$^2$ incluye la tapa. 1100 cm$^2$ cuenta una sola cara de cada tipo. 6000 cm$^2$ es el volumen, $30 \cdot 20 \cdot 10$, en cm$^3$.</p>`, conc: 'Sin tapa: área total menos una base.' },
    { enun: r`<p>En la figura se muestran cuatro figuras, cada una formada por 6 cuadrados iguales.</p><p>¿Con cuál(es) de ellas se puede armar un cubo, doblando por los lados de los cuadrados?</p>`,
      fig: { type: 'img', src: 'paes/m1/fig/geo_ac_redes4.svg', alt: 'Cuatro figuras de 6 cuadrados: I es una cruz; II es una fila de 4 con un cuadrado arriba del primero y otro abajo del último; III es un bloque de 2 por 3; IV es una fila de 4 con dos cuadrados arriba de los dos primeros' },
      alts: ['Solo I', 'Solo II y IV', 'Solo I y II', 'Solo I, II y III'], ok: 2,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Cuáles figuras son redes de un cubo. Imaginamos el doblado: cada cuadrado debe ser una cara distinta.</p><p><b>Paso 2. Figura I (cruz).</b> La fila de 4 forma las paredes alrededor; el de arriba y el de abajo son tapa y fondo. <b>Sí.</b></p><p><b>Paso 3. Figura II.</b> Fila de 4 (las paredes), un cuadrado arriba en un extremo y otro abajo en el otro: uno es tapa y el otro fondo. <b>Sí.</b></p><p><b>Paso 4. Figura III ($2 \times 3$).</b> Al doblar, la fila de abajo forma tres paredes y la de arriba se encima sobre ellas: quedan caras repetidas y lados abiertos. <b>No.</b></p><p><b>Paso 5. Figura IV.</b> Los dos cuadrados de arriba están del mismo lado de la fila: los dos serían tapa y se encimarían; falta el fondo. <b>No.</b></p><p><b>Respuesta:</b> Solo I y II.</p><p><b>¿Por qué no las otras?</b> "Solo I" deja fuera II. "Solo II y IV" y "Solo I, II y III" incluyen figuras que no cierran el cubo.</p>`, conc: 'En una fila de 4 paredes, tapa y fondo van uno a cada lado de la fila.' },
    { enun: r`<p>Una lata cilíndrica tiene 4 cm de radio y 10 cm de altura. Su etiqueta cubre toda la cara lateral, sin superponerse.</p><p>¿Cuál es el área de la etiqueta?</p>`,
      fig: { type: 'img', src: 'paes/m1/fig/geo_ac_lata.svg', alt: 'Lata cilíndrica de radio 4 cm y altura 10 cm con una etiqueta en su cara lateral' },
      alts: [r`$40\pi$ cm$^2$`, r`$160\pi$ cm$^2$`, r`$112\pi$ cm$^2$`, r`$80\pi$ cm$^2$`], ok: 3,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El área lateral del cilindro: al despegar la etiqueta queda un rectángulo.</p><p><b>Paso 2. Largo del rectángulo.</b> Da una vuelta a la lata: $2\pi r = 2\pi \cdot 4 = 8\pi$ cm.</p><p><b>Paso 3. Ancho.</b> La altura, 10 cm.</p><p><b>Paso 4. Área.</b> $8\pi \cdot 10 = 80\pi$ cm$^2$ (unos 251 cm$^2$).</p><p><b>Respuesta:</b> $80\pi$ cm$^2$.</p><p><b>¿Por qué no las otras?</b> $40\pi$ usa $\pi r h$, sin el 2. $160\pi$ usa el diámetro como radio. $112\pi$ suma las dos bases ($32\pi$): es el área total, pero la etiqueta no cubre las tapas.</p>`, conc: 'Área lateral del cilindro: 2πrh.' },
    { enun: r`<p>¿Cuál es el área total de la superficie del cilindro de la figura, de radio 3 cm y altura 5 cm?</p>`,
      fig: { type: 'img', src: 'paes/m1/fig/geo_ac_cil35.svg', alt: 'Cilindro de radio 3 cm y altura 5 cm' },
      alts: [r`$48\pi$ cm$^2$`, r`$39\pi$ cm$^2$`, r`$30\pi$ cm$^2$`, r`$33\pi$ cm$^2$`], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Lateral más las dos bases.</p><p><b>Paso 2. Lateral.</b> $2\pi \cdot 3 \cdot 5 = 30\pi$.</p><p><b>Paso 3. Bases.</b> $2 \cdot \pi \cdot 3^2 = 18\pi$.</p><p><b>Paso 4. Suma.</b> $30\pi + 18\pi = 48\pi$ cm$^2$.</p><p><b>Respuesta:</b> $48\pi$ cm$^2$.</p><p><b>¿Por qué no las otras?</b> $39\pi$ cuenta una sola base. $30\pi$ es solo el lateral. $33\pi$ usa $\pi r h$ en el lateral ($15\pi$) más las dos bases.</p>`, conc: 'Área total del cilindro: 2πrh + 2πr².' },
    { enun: r`<p>En la figura se muestra la red de un cilindro. La cara lateral es un rectángulo de 31,4 cm por 12 cm, y el lado de 31,4 cm rodea completamente cada base.</p><p>Considerando $\pi \approx 3{,}14$, ¿cuál es el radio de las bases?</p>`,
      fig: { type: 'img', src: 'paes/m1/fig/geo_ac_red_cil_b.svg', alt: 'Red de un cilindro: un rectángulo de 31,4 cm por 12 cm con un círculo arriba y otro abajo' },
      alts: ['10 cm', '5 cm', '15,7 cm', '2,5 cm'], ok: 1,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El radio. El lado de 31,4 cm es el perímetro de la base.</p><p><b>Paso 2. Plantea.</b> $2\pi r = 31{,}4$, o sea $6{,}28\,r = 31{,}4$.</p><p><b>Paso 3. Despeja.</b> $r = 31{,}4 \div 6{,}28 = 5$ cm.</p><p><b>Respuesta:</b> 5 cm.</p><p><b>Comprobación:</b> $2 \cdot 3{,}14 \cdot 5 = 31{,}4$. ✔</p><p><b>¿Por qué no las otras?</b> 10 cm es el diámetro ($31{,}4 \div 3{,}14$). 15,7 cm divide 31,4 por 2, sin $\pi$. 2,5 cm es la mitad del radio.</p>`, conc: 'En la red del cilindro, el largo del rectángulo es 2πr.' },
    { enun: r`<p>Una habitación tiene forma de paralelepípedo de 5 m de largo, 4 m de ancho y 2,5 m de alto. Se pintarán las cuatro paredes y el techo, pero no el piso. No hay que descontar puertas ni ventanas.</p><p>¿Cuál es el área que se pintará?</p>`,
      fig: { type: 'img', src: 'paes/m1/fig/geo_ac_pieza.svg', alt: 'Habitación con forma de paralelepípedo de 5 m de largo, 4 m de ancho y 2,5 m de alto' },
      alts: ['45 m$^2$', '85 m$^2$', '65 m$^2$', '50 m$^2$'], ok: 2,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Cuatro paredes más el techo.</p><p><b>Paso 2. Paredes largas.</b> $2 \cdot (5 \cdot 2{,}5) = 25$ m$^2$.</p><p><b>Paso 3. Paredes cortas.</b> $2 \cdot (4 \cdot 2{,}5) = 20$ m$^2$.</p><p><b>Paso 4. Techo.</b> $5 \cdot 4 = 20$ m$^2$.</p><p><b>Paso 5. Suma.</b> $25 + 20 + 20 = 65$ m$^2$.</p><p><b>Respuesta:</b> 65 m$^2$.</p><p><b>¿Por qué no las otras?</b> 45 m$^2$ son solo las paredes. 85 m$^2$ incluye el piso. 50 m$^2$ es el volumen, $5 \cdot 4 \cdot 2{,}5$, en m$^3$.</p>`, conc: 'Haz la lista de caras que se pintan antes de sumar.' },
    { enun: r`<p>Se pegan dos cubos de arista 2 cm, cara con cara, formando el cuerpo de la figura.</p><p>¿Cuál es el área total de la superficie del cuerpo formado?</p>`,
      fig: { type: 'img', src: 'paes/m1/fig/geo_ac_dos_cubos.svg', alt: 'Dos cubos de 2 cm de arista pegados por una cara, formando un paralelepípedo de 4 cm por 2 cm por 2 cm' },
      alts: ['48 cm$^2$', '44 cm$^2$', '40 cm$^2$', '16 cm$^2$'], ok: 2,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El área exterior del cuerpo pegado.</p><p><b>Paso 2. Separados.</b> Cada cubo: $6 \cdot 2^2 = 24$ cm$^2$. Los dos: $48$ cm$^2$.</p><p><b>Paso 3. Lo que se tapa.</b> Al pegarlos, una cara de cada cubo queda adentro: se pierden $2 \cdot 4 = 8$ cm$^2$.</p><p><b>Paso 4. Resta.</b> $48 - 8 = 40$ cm$^2$.</p><p><b>Respuesta:</b> 40 cm$^2$.</p><p><b>Comprobación:</b> es un paralelepípedo de $4 \times 2 \times 2$: $2(8 + 4 + 8) = 40$. ✔</p><p><b>¿Por qué no las otras?</b> 48 cm$^2$ no descuenta las caras pegadas. 44 cm$^2$ descuenta solo una de las dos. 16 cm$^2$ es el volumen, $2 \cdot 8$.</p>`, conc: 'Al pegar dos cuerpos, se pierden las dos caras que se tocan.' },
    { enun: r`<p>El área total de la superficie de un dado cúbico es 96 cm$^2$.</p><p>¿Cuánto mide su arista?</p>`,
      alts: ['4 cm', '16 cm', '24 cm', '8 cm'], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> La arista $a$. Sabemos que $6a^2 = 96$.</p><p><b>Paso 2. Una cara.</b> $96 \div 6 = 16$ cm$^2$.</p><p><b>Paso 3. La arista.</b> $a^2 = 16$, así que $a = 4$ cm.</p><p><b>Respuesta:</b> 4 cm.</p><p><b>Comprobación:</b> $6 \cdot 4^2 = 96$. ✔</p><p><b>¿Por qué no las otras?</b> 16 cm es el área de una cara: falta la raíz. 24 cm divide 96 por 4, como si el cubo tuviera 4 caras. 8 cm divide 96 por 12, el número de aristas.</p>`, conc: 'Del área del cubo a la arista: divide por 6 y saca raíz.' },
    { enun: r`<p>Un estanque cilíndrico sin tapa tiene 1 m de radio y 2 m de altura. Se pintará por fuera, incluyendo la base, como en la figura.</p><p>Considerando $\pi \approx 3{,}14$, ¿cuál es el área por pintar?</p>`,
      fig: { type: 'img', src: 'paes/m1/fig/geo_ac_tanque.svg', alt: 'Estanque cilíndrico sin tapa, de 1 m de radio y 2 m de altura' },
      alts: ['18,84 m$^2$', '12,56 m$^2$', '15,7 m$^2$', '9,42 m$^2$'], ok: 2,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Lateral más una sola base (no tiene tapa).</p><p><b>Paso 2. Lateral.</b> $2\pi \cdot 1 \cdot 2 = 4\pi$.</p><p><b>Paso 3. Base.</b> $\pi \cdot 1^2 = \pi$.</p><p><b>Paso 4. Suma.</b> $4\pi + \pi = 5\pi \approx 5 \cdot 3{,}14 = 15{,}7$ m$^2$.</p><p><b>Respuesta:</b> 15,7 m$^2$.</p><p><b>¿Por qué no las otras?</b> 18,84 m$^2$ ($6\pi$) cuenta las dos bases. 12,56 m$^2$ ($4\pi$) es solo el lateral. 9,42 m$^2$ ($3\pi$) usa $\pi r h$ en el lateral.</p>`, conc: 'Sin tapa: lateral más una base.' },
    { enun: r`<p>¿Cuál(es) de las siguientes afirmaciones sobre un cubo es (son) verdadera(s)?</p><p>I) Tiene 6 caras.<br>II) Tiene 8 aristas.<br>III) Tiene 8 vértices.</p>`,
      alts: ['Solo I y III', 'Solo I', 'Solo I y II', 'I, II y III'], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Revisar cada afirmación contando en un cubo.</p><p><b>Paso 2. Afirmación I.</b> Arriba, abajo, adelante, atrás, izquierda y derecha: 6 caras. <b>Verdadera.</b></p><p><b>Paso 3. Afirmación II.</b> 4 aristas en la tapa, 4 en la base y 4 verticales: 12 aristas. <b>Falsa.</b></p><p><b>Paso 4. Afirmación III.</b> 4 esquinas arriba y 4 abajo: 8 vértices. <b>Verdadera.</b></p><p><b>Respuesta:</b> Solo I y III.</p><p><b>¿Por qué no las otras?</b> "Solo I" deja fuera III. "Solo I y II" y "I, II y III" incluyen II, que confunde aristas con vértices.</p>`, conc: 'Cubo: 6 caras, 12 aristas y 8 vértices.' },
    { enun: r`<p>Si la arista de un cubo se duplica, ¿qué ocurre con el área total de su superficie?</p>`,
      alts: ['Se duplica.', 'Se cuadruplica.', 'Se multiplica por 6.', 'Se multiplica por 8.'], ok: 1,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Cómo cambia $6a^2$ al pasar de $a$ a $2a$.</p><p><b>Paso 2. Ejemplo.</b> Arista 1: área 6. Arista 2: área $6 \cdot 4 = 24$. $24 \div 6 = 4$.</p><p><b>Paso 3. En general.</b> $6(2a)^2 = 6 \cdot 4a^2 = 4 \cdot 6a^2$.</p><p><b>Respuesta:</b> se cuadruplica.</p><p><b>¿Por qué no las otras?</b> "Se duplica" olvida que la arista está al cuadrado. "Por 6" confunde con el número de caras. "Por 8" es lo que pasa con el volumen: $2^3$.</p>`, conc: 'Al multiplicar las aristas por k, el área se multiplica por k².' },
    { enun: r`<p>Un paralelepípedo tiene una base cuadrada de 4 cm de lado y su área total es 160 cm$^2$, como en la figura.</p><p>¿Cuál es su altura $h$?</p>`,
      fig: { type: 'img', src: 'paes/m1/fig/geo_ac_base_cuad.svg', alt: 'Paralelepípedo de base cuadrada de 4 cm por 4 cm y altura h' },
      alts: ['10 cm', '9 cm', '6 cm', '8 cm'], ok: 3,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> La altura. Escribimos el área total con $h$ y despejamos.</p><p><b>Paso 2. Bases.</b> Dos cuadrados de $4 \cdot 4 = 16$: $32$ cm$^2$.</p><p><b>Paso 3. Caras laterales.</b> Cuatro rectángulos de $4 \cdot h$: $16h$.</p><p><b>Paso 4. Plantea.</b> $32 + 16h = 160$, así que $16h = 128$ y $h = 8$ cm.</p><p><b>Respuesta:</b> 8 cm.</p><p><b>Comprobación:</b> $2 \cdot 16 + 4 \cdot 32 = 32 + 128 = 160$. ✔</p><p><b>¿Por qué no las otras?</b> 10 cm divide 160 por 16 sin restar las bases. 9 cm resta una sola base: $(160 - 16) \div 16$. 6 cm resta cuatro cuadrados de 16 en vez de dos.</p>`, conc: 'Escribe el área con la incógnita y despeja como en una ecuación.' },
    { enun: r`<p>Un cilindro tiene diámetro $d$ y altura $h$, como en la figura.</p><p>¿Cuál de las siguientes expresiones representa su área lateral?</p>`,
      fig: { type: 'img', src: 'paes/m1/fig/geo_ac_cil_dh.svg', alt: 'Cilindro con diámetro d en la tapa y altura h' },
      alts: [r`$2\pi d h$`, r`$\pi d h$`, r`$\dfrac{\pi d^2 h}{4}$`, r`$\pi d + h$`], ok: 1,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El área lateral escrita con el diámetro.</p><p><b>Paso 2. La fórmula.</b> $A_L = 2\pi r h$.</p><p><b>Paso 3. Cambia el radio.</b> $r = \dfrac{d}{2}$, así que $2\pi \cdot \dfrac{d}{2} \cdot h = \pi d h$.</p><p><b>Respuesta:</b> $\pi d h$.</p><p><b>¿Por qué no las otras?</b> $2\pi d h$ usa el diámetro como radio: da el doble. $\dfrac{\pi d^2 h}{4}$ es el volumen. $\pi d + h$ suma el perímetro con la altura en vez de multiplicar.</p>`, conc: 'Con diámetro: área lateral = πdh.' },
    { enun: r`<p>Tres pelotas de tenis de 3 cm de radio caben justo en un tubo cilíndrico: tocan sus paredes, y la de abajo y la de arriba tocan las tapas, como en la figura.</p><p>¿Cuál es el área lateral del tubo?</p>`,
      fig: { type: 'img', src: 'paes/m1/fig/geo_ac_pelotas.svg', alt: 'Tubo cilíndrico con tres pelotas de 3 cm de radio apiladas que tocan las paredes y las tapas' },
      alts: [r`$54\pi$ cm$^2$`, r`$216\pi$ cm$^2$`, r`$126\pi$ cm$^2$`, r`$108\pi$ cm$^2$`], ok: 3,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El área lateral: $2\pi r h$. Necesitamos $r$ y $h$ del tubo.</p><p><b>Paso 2. Radio del tubo.</b> Las pelotas tocan las paredes: el radio del tubo es el de una pelota, 3 cm.</p><p><b>Paso 3. Altura.</b> Tres diámetros apilados: $3 \cdot 6 = 18$ cm.</p><p><b>Paso 4. Área lateral.</b> $2\pi \cdot 3 \cdot 18 = 108\pi$ cm$^2$.</p><p><b>Respuesta:</b> $108\pi$ cm$^2$.</p><p><b>¿Por qué no las otras?</b> $54\pi$ olvida el 2: $\pi r h$. $216\pi$ usa 6 (el diámetro) como radio. $126\pi$ suma las dos tapas ($18\pi$): es el área total.</p>`, conc: 'Objetos que caben justo: el radio y la altura salen de sus medidas.' },
    { enun: r`<p>La figura muestra la red de un paralelepípedo, con sus medidas.</p><p>¿Cuál es el área total de la superficie del paralelepípedo que se arma con ella?</p>`,
      fig: { type: 'img', src: 'paes/m1/fig/geo_ac_red_caja.svg', alt: 'Red de un paralelepípedo de 6 cm de largo, 4 cm de ancho y 2 cm de alto' },
      alts: ['88 cm$^2$', '48 cm$^2$', '44 cm$^2$', '96 cm$^2$'], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El área de la red, que es el área total del cuerpo. Las aristas miden 6, 4 y 2 cm.</p><p><b>Paso 2. Cada par.</b> $6 \cdot 4 = 24$, $6 \cdot 2 = 12$ y $4 \cdot 2 = 8$.</p><p><b>Paso 3. Total.</b> $2(24 + 12 + 8) = 2 \cdot 44 = 88$ cm$^2$.</p><p><b>Respuesta:</b> 88 cm$^2$.</p><p><b>Comprobación:</b> en la red se ven dos rectángulos de $6 \times 4$, dos de $6 \times 2$ y dos de $4 \times 2$. ✔</p><p><b>¿Por qué no las otras?</b> 48 cm$^2$ es el volumen, $6 \cdot 4 \cdot 2$. 44 cm$^2$ cuenta una cara de cada par. 96 cm$^2$ cuenta cuatro caras de $6 \times 4$.</p>`, conc: 'El área de la red es el área total del cuerpo.' }
  ]
},
{
  id: 'geo_volumen', unit: 'Unidad 2 · Cuerpos geométricos', icon: '🧊',
  title: 'Volumen de cubos, paralelepípedos y cilindros',
  desc: 'Qué mide el volumen, fórmulas del cubo, el paralelepípedo y el cilindro, capacidad en litros (1 L = 1 dm³), llenado de estanques y caudal, objetos sumergidos y qué pasa con el volumen al duplicar las medidas.',
  slides: [
    { t: '¿Qué es el volumen?', b: r`
      <div class="cols"><div>
      <p>El <b>volumen</b> mide cuánto espacio ocupa un cuerpo: cuántos cubitos de $1 \times 1 \times 1$ caben dentro. Se mide en unidades cúbicas: cm$^3$, m$^3$.</p>
      <p><b>Ejemplo.</b> En una caja de 4 cm de largo, 3 cm de ancho y 2 cm de alto:</p>
      <p>· en el piso caben $4 \cdot 3 = 12$ cubitos;</p>
      <p>· hay 2 capas iguales;</p>
      <p>· en total, $12 \cdot 2 = 24$ cubitos: el volumen es 24 cm$^3$.</p>
      <p><b>Cubo de arista $a$:</b> $V = a \cdot a \cdot a = a^3$. Un cubo de arista 5 cm tiene volumen $125$ cm$^3$.</p>
      </div><div>
      <div class="qfig"><img class="tikz" src="paes/m1/fig/geo_vo_cubitos.svg" alt="Caja de 4 cm por 3 cm por 2 cm dividida en 24 cubitos de 1 centímetro cúbico"></div>
      <div class="box alert"><b>Tres unidades distintas</b> Largo: cm. Área: cm$^2$. Volumen: cm$^3$. Si la respuesta es un volumen, debe llevar el "al cubo".</div>
      </div></div>` },
    { t: 'Volumen del paralelepípedo', b: r`
      <div class="cols"><div>
      <p>Para cualquier prisma recto (y el paralelepípedo lo es):
      $$V = \text{área de la base} \cdot \text{altura}$$</p>
      <p>Para una caja de largo $a$, ancho $b$ y alto $c$: $V = a \cdot b \cdot c$.</p>
      <p><b>Ejemplo 1.</b> Caja de 20 cm, 5 cm y 30 cm: $V = 20 \cdot 5 \cdot 30 = 3000$ cm$^3$.</p>
      <p><b>Ejemplo 2.</b> Si esa caja se hace un 10 % más alta, la altura pasa a $30 \cdot 1{,}1 = 33$ cm y el volumen a $20 \cdot 5 \cdot 33 = 3300$ cm$^3$: también aumenta un 10 %.</p>
      <p><b>Al revés.</b> Si conoces el volumen y dos medidas, divide: con $V = 600$, largo 10 y ancho 6, la altura es $600 \div 60 = 10$.</p>
      </div><div>
      <div class="box"><b>Una sola medida cambia</b> Si solo una medida se multiplica por un número, el volumen se multiplica por ese mismo número. Si cambian las tres, se multiplican los tres factores.</div>
      <div class="box alert"><b>No sumes las aristas</b> $20 + 5 + 30 = 55$ no tiene que ver con el volumen. El volumen siempre es un producto.</div>
      </div></div>` },
    { t: 'Volumen del cilindro', b: r`
      <div class="cols"><div>
      <p>El cilindro también es "base por altura", con base circular:
      $$V = \pi r^2 h$$</p>
      <p><b>Ejemplo 1.</b> Lata de radio 3 cm y altura 10 cm: $V = \pi \cdot 9 \cdot 10 = 90\pi$ cm$^3 \approx 282{,}6$ cm$^3$.</p>
      <p><b>Ejemplo 2.</b> Diámetro 8 cm y altura 5 cm: el radio es 4. $V = \pi \cdot 16 \cdot 5 = 80\pi$ cm$^3$.</p>
      </div><div>
      <div class="qfig"><img class="tikz" src="paes/m1/fig/geo_vo_cil.svg" alt="Cilindro de radio r y altura h con su base circular destacada, de área pi r al cuadrado"></div>
      <div class="box alert"><b>Errores típicos</b> · Usar el diámetro como radio (el volumen te sale 4 veces más grande). · Escribir $2\pi r h$, que es el área lateral, no el volumen. · Olvidar elevar el radio al cuadrado.</div>
      </div></div>` },
    { t: 'Capacidad: litros y metros cúbicos', b: r`
      <div class="cols"><div>
      <p>La <b>capacidad</b> es el volumen que cabe dentro de un recipiente. La conexión clave:
      $$1 \text{ L} = 1 \text{ dm}^3 = 1000 \text{ cm}^3$$</p>
      <p>Un cubo de 10 cm de arista ($10 \cdot 10 \cdot 10 = 1000$ cm$^3$) contiene exactamente 1 litro.</p>
      <table><thead><tr><th>Volumen</th><th>Capacidad</th></tr></thead><tbody>
      <tr><td>1 cm$^3$</td><td>1 mL</td></tr>
      <tr><td>1 dm$^3$ = 1000 cm$^3$</td><td>1 L</td></tr>
      <tr><td>1 m$^3$ = 1000 dm$^3$</td><td>1000 L</td></tr></tbody></table>
      <p><b>Ejemplo.</b> Un estanque de $2 \times 1{,}5 \times 1$ m tiene $3$ m$^3$, o sea $3000$ L.</p>
      </div><div>
      <div class="qfig"><img class="tikz" src="paes/m1/fig/geo_vo_litro.svg" alt="Cubo de 10 cm de arista que contiene 1 litro"></div>
      <div class="box alert"><b>De m a cm se multiplica por 100, pero de m$^3$ a cm$^3$ por un millón</b> Porque son tres medidas: $100 \cdot 100 \cdot 100 = 1.000.000$. Lo más seguro: pasa las medidas a la unidad que quieras <b>antes</b> de multiplicar.</div>
      </div></div>` },
    { t: 'Llenado, nivel del agua y caudal', b: r`
      <div class="cols"><div>
      <p>El agua dentro de un recipiente con forma de caja forma otra caja: misma base, y de alto el nivel del agua.
      $$V_{\text{agua}} = \text{largo} \cdot \text{ancho} \cdot \text{altura del agua}$$</p>
      <p><b>Altura que alcanza.</b> Si echas 6 L ($6000$ cm$^3$) en una pecera de base $30 \times 20$ cm: $h = 6000 \div 600 = 10$ cm.</p>
      <p><b>Objeto sumergido.</b> Si al hundir una piedra el agua sube 2 cm en esa pecera, la piedra tiene el volumen del agua "desplazada": $30 \cdot 20 \cdot 2 = 1200$ cm$^3$.</p>
      <p><b>Caudal.</b> Es el volumen que sale por unidad de tiempo: $Q = \dfrac{V}{t}$. Para llenar 3000 L en 10 minutos se necesita $300$ L/min.</p>
      </div><div>
      <div class="qfig"><img class="tikz" src="paes/m1/fig/geo_vo_pecera.svg" alt="Pecera con forma de caja con agua hasta cierta altura; el agua forma una caja de la misma base"></div>
      <div class="box alert"><b>Lo que importa es la altura del agua</b> Si el recipiente no está lleno, usa la altura del agua, no la del recipiente.</div>
      </div></div>` },
    { t: 'Cambios de escala', b: r`
      <div class="cols"><div>
      <p>Si todas las aristas se multiplican por $k$, el volumen se multiplica por $k^3$ (y el área, por $k^2$).</p>
      <p><b>Ejemplo.</b> Si se duplican las aristas de un cubo, caben $2 \cdot 2 \cdot 2 = 8$ cubos como el original: el volumen se multiplica por 8.</p>
      <table><thead><tr><th>Cambio</th><th>Volumen</th></tr></thead><tbody>
      <tr><td>se duplica una arista (o la altura del cilindro)</td><td>$\times 2$</td></tr>
      <tr><td>se duplica el radio del cilindro</td><td>$\times 4$</td></tr>
      <tr><td>se duplican todas las aristas</td><td>$\times 8$</td></tr>
      <tr><td>se duplican radio y altura del cilindro</td><td>$\times 8$</td></tr>
      <tr><td>se triplican todas las aristas</td><td>$\times 27$</td></tr></tbody></table>
      </div><div>
      <div class="qfig"><img class="tikz" src="paes/m1/fig/geo_vo_escala.svg" alt="Un cubo de arista 1 y un cubo de arista 2 formado por 8 cubos como el primero"></div>
      <div class="box alert"><b>El radio cuenta doble</b> En $\pi r^2 h$ el radio está al cuadrado: duplicarlo multiplica el volumen por 4.</div>
      </div></div>` },
    { t: 'Errores típicos y resumen', b: r`
      <table><thead><tr><th>Cuerpo</th><th>Volumen</th></tr></thead><tbody>
      <tr><td>Cubo de arista $a$</td><td>$a^3$</td></tr>
      <tr><td>Paralelepípedo $a \times b \times c$</td><td>$a \cdot b \cdot c$</td></tr>
      <tr><td>Cilindro de radio $r$ y altura $h$</td><td>$\pi r^2 h$</td></tr></tbody></table>
      <div class="box alert" style="margin-top:14px"><b>Errores típicos</b> · Sumar en vez de multiplicar las aristas. · Calcular el área ($6a^2$) cuando piden volumen ($a^3$). · Usar el diámetro como radio. · Mezclar unidades (m con cm) o convertir mal a litros. · Usar la altura del recipiente en vez de la del agua.</div>
      <div class="box"><b>Método PAES</b> 1. Identifica el cuerpo y sus medidas (radio, no diámetro). 2. Pasa todo a la misma unidad. 3. Aplica base por altura. 4. Si piden litros: 1 dm$^3$ = 1 L y 1 m$^3$ = 1000 L. 5. Revisa la unidad cúbica.</div>` }
  ],
  example: {
    src: 'PAES Invierno 2027, adaptada',
    enun: r`<p>Un estanque de agua tiene forma de prisma recto de base rectangular, cuya base mide 4 m de largo y 3 m de ancho. Se debe llenar hasta 2 m de altura con agua proveniente de un ducto.</p><p>Para calcular el caudal del agua que sale de un ducto se puede usar la expresión $\dfrac{V}{t}$, donde $V$ es el volumen de agua que sale del ducto durante $t$ unidades de tiempo.</p><p>¿Cuál de las siguientes expresiones corresponde al caudal de agua, en $\dfrac{\text{m}^3}{\text{h}}$, que debe salir del ducto para que el estanque se llene hasta 2 m de altura en 10 horas?</p>`,
    fig: { type: 'img', src: 'paes/m1/fig/geo_vo_estanque.svg', alt: 'Estanque con forma de caja de base 4 m por 3 m, con agua hasta 2 m de altura, que se llena desde un ducto' },
    alts: [r`$\dfrac{4 \cdot 3 \cdot 2}{10}$`, r`$\dfrac{4 + 3 + 2}{10}$`, r`$\dfrac{2(4 + 3)}{10}$`, r`$\dfrac{2(4 \cdot 3 + 2 \cdot 4 + 2 \cdot 3)}{10}$`], ok: 0,
    sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El caudal: volumen de agua dividido por el tiempo. Primero el volumen.</p><p><b>Paso 2. Volumen del agua.</b> El agua forma una caja de $4 \times 3$ m de base y 2 m de alto: $V = 4 \cdot 3 \cdot 2 = 24$ m$^3$.</p><p><b>Paso 3. Tiempo.</b> $t = 10$ horas.</p><p><b>Paso 4. Caudal.</b> $\dfrac{V}{t} = \dfrac{4 \cdot 3 \cdot 2}{10}$, que es $2{,}4$ m$^3$ por hora.</p><p><b>Respuesta:</b> $\dfrac{4 \cdot 3 \cdot 2}{10}$.</p><p><b>Comprobación:</b> en 10 horas salen $2{,}4 \cdot 10 = 24$ m$^3$, justo el volumen pedido. ✔</p><p><b>¿Por qué no las otras?</b> $\dfrac{4 + 3 + 2}{10}$ suma las medidas en vez de multiplicarlas. $\dfrac{2(4 + 3)}{10}$ usa el perímetro de la base por la altura: eso es parte del área lateral. $\dfrac{2(4 \cdot 3 + 2 \cdot 4 + 2 \cdot 3)}{10}$ usa el área total de la caja: mide superficie, no volumen.</p>`,
    conc: 'Volumen de una caja: largo por ancho por alto; caudal: volumen ÷ tiempo.'
  },
  bank: [
    { enun: r`<p>Una empresa vende cereal en cajas con forma de paralelepípedo de 25 cm de largo, 6 cm de fondo y 30 cm de alto. Para una oferta, diseña una caja con el mismo largo y fondo, pero un 20 % más alta, como se representa en la figura.</p><p>¿Cuál es el volumen de la caja de la oferta?</p>`, src: 'PAES Invierno 2027, adaptada',
      fig: { type: 'img', src: 'paes/m1/fig/geo_vo_cereal.svg', alt: 'Caja original de 25 cm por 6 cm por 30 cm y caja de oferta con el mismo largo y fondo, un 20 % más alta' },
      alts: ['900 cm$^3$', '4500 cm$^3$', '5400 cm$^3$', '7776 cm$^3$'], ok: 2,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El volumen de la caja nueva. Solo cambia la altura.</p><p><b>Paso 2. Nueva altura.</b> El 20 % de 30 es $30 \cdot 0{,}2 = 6$: la altura nueva es $30 + 6 = 36$ cm.</p><p><b>Paso 3. Volumen.</b> $25 \cdot 6 \cdot 36 = 5400$ cm$^3$.</p><p><b>Respuesta:</b> 5400 cm$^3$.</p><p><b>Comprobación:</b> la caja original tiene $25 \cdot 6 \cdot 30 = 4500$ cm$^3$, y $4500 \cdot 1{,}2 = 5400$. ✔</p><p><b>¿Por qué no las otras?</b> 900 cm$^3$ es solo el aumento, $4500 \cdot 0{,}2$. 4500 cm$^3$ es la caja original. 7776 cm$^3$ aumenta un 20 % las tres medidas: $30 \cdot 7{,}2 \cdot 36$.</p>`, conc: 'Si solo una medida aumenta un 20 %, el volumen aumenta un 20 %.' },
    { enun: r`<p>¿Cuál es el volumen de un cubo de 6 cm de arista?</p>`,
      alts: ['36 cm$^3$', '216 cm$^3$', '18 cm$^3$', '72 cm$^3$'], ok: 1,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El volumen: $a^3$.</p><p><b>Paso 2. Calcula.</b> $6 \cdot 6 \cdot 6 = 216$ cm$^3$.</p><p><b>Respuesta:</b> 216 cm$^3$.</p><p><b>¿Por qué no las otras?</b> 36 cm$^3$ es $6^2$, el área de una cara. 18 cm$^3$ es $6 \cdot 3$: confunde "al cubo" con "por 3". 72 cm$^3$ es $6 \cdot 12$, la suma de las 12 aristas.</p>`, conc: 'Volumen del cubo: a·a·a, no 3·a.' },
    { enun: r`<p>Un tronco de árbol tiene forma aproximada de cilindro, con 0,4 m de diámetro y 6 m de largo, como en la figura.</p><p>Considerando $\pi \approx 3$, ¿cuál es el volumen aproximado de madera del tronco?</p>`, src: 'PAES Invierno 2027, adaptada',
      fig: { type: 'img', src: 'paes/m1/fig/geo_vo_tronco.svg', alt: 'Tronco con forma de cilindro acostado, de 0,4 m de diámetro y 6 m de largo' },
      alts: ['2,88 m$^3$', '7,2 m$^3$', '3,6 m$^3$', '0,72 m$^3$'], ok: 3,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El volumen del cilindro, $\pi r^2 h$. Aquí la "altura" es el largo del tronco.</p><p><b>Paso 2. Radio.</b> $0{,}4 \div 2 = 0{,}2$ m.</p><p><b>Paso 3. Base.</b> $3 \cdot 0{,}2^2 = 3 \cdot 0{,}04 = 0{,}12$ m$^2$.</p><p><b>Paso 4. Volumen.</b> $0{,}12 \cdot 6 = 0{,}72$ m$^3$.</p><p><b>Respuesta:</b> 0,72 m$^3$.</p><p><b>¿Por qué no las otras?</b> 2,88 m$^3$ usa el diámetro como radio: $3 \cdot 0{,}16 \cdot 6$. 7,2 m$^3$ es el área lateral, $2 \cdot 3 \cdot 0{,}2 \cdot 6$, en m$^2$. 3,6 m$^3$ olvida elevar el radio: $3 \cdot 0{,}2 \cdot 6$.</p>`, conc: 'Cilindro acostado: la altura es el largo; el radio sale del diámetro.' },
    { enun: r`<p>Una lata cilíndrica tiene 4 cm de radio y 12 cm de altura.</p><p>Considerando $\pi \approx 3{,}14$, ¿cuál es, aproximadamente, su capacidad?</p>`,
      fig: { type: 'img', src: 'paes/m1/fig/geo_vo_lata.svg', alt: 'Lata cilíndrica de radio 4 cm y altura 12 cm' },
      alts: ['0,6 L', '6 L', '60 L', '2,4 L'], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> La capacidad en litros. Calculamos el volumen en cm$^3$ y lo pasamos a litros.</p><p><b>Paso 2. Volumen.</b> $3{,}14 \cdot 4^2 \cdot 12 = 3{,}14 \cdot 16 \cdot 12 = 602{,}88$ cm$^3$.</p><p><b>Paso 3. A litros.</b> 1000 cm$^3$ = 1 L: $602{,}88 \div 1000 \approx 0{,}6$ L.</p><p><b>Respuesta:</b> aproximadamente 0,6 L (unos 600 mL).</p><p><b>¿Por qué no las otras?</b> 6 L y 60 L dividen por 100 o por 10 al pasar a litros. 2,4 L usa el diámetro (8 cm) como radio: $3{,}14 \cdot 64 \cdot 12 \approx 2411{,}5$ cm$^3$.</p>`, conc: '1000 cm³ = 1 L.' },
    { enun: r`<p>Una pecera con forma de paralelepípedo mide 50 cm de largo, 30 cm de ancho y 40 cm de alto. Tiene agua hasta 30 cm de altura, como en la figura.</p><p>¿Cuántos litros de agua contiene?</p>`,
      fig: { type: 'img', src: 'paes/m1/fig/geo_vo_pecera2.svg', alt: 'Pecera de 50 cm de largo, 30 cm de ancho y 40 cm de alto, con agua hasta 30 cm de altura' },
      alts: ['60 L', '45 L', '450 L', '4,5 L'], ok: 1,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El volumen del agua, en litros. El agua llega a 30 cm, no a 40.</p><p><b>Paso 2. Volumen del agua.</b> $50 \cdot 30 \cdot 30 = 45.000$ cm$^3$.</p><p><b>Paso 3. A litros.</b> $45.000 \div 1000 = 45$ L.</p><p><b>Respuesta:</b> 45 L.</p><p><b>¿Por qué no las otras?</b> 60 L usa la altura de la pecera: $50 \cdot 30 \cdot 40 = 60.000$ cm$^3$, la pecera llena. 450 L y 4,5 L dividen por 100 o por 10.000 al pasar a litros.</p>`, conc: 'Usa la altura del agua, no la del recipiente.' },
    { enun: r`<p>Una pecera tiene una base rectangular de 40 cm por 25 cm y contiene agua. Al sumergir completamente una piedra, el nivel del agua sube 2 cm, como en la figura.</p><p>¿Cuál es el volumen de la piedra?</p>`,
      fig: { type: 'img', src: 'paes/m1/fig/geo_vo_piedra.svg', alt: 'Pecera de base 40 cm por 25 cm con una piedra sumergida; el nivel del agua sube 2 cm' },
      alts: ['1000 cm$^3$', '200 cm$^3$', '2000 cm$^3$', '20.000 cm$^3$'], ok: 2,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El volumen de la piedra. La piedra empuja hacia arriba una cantidad de agua igual a su volumen.</p><p><b>Paso 2. Agua que subió.</b> Es una capa con la base de la pecera y 2 cm de alto: $40 \cdot 25 \cdot 2 = 2000$ cm$^3$.</p><p><b>Respuesta:</b> 2000 cm$^3$ (2 litros).</p><p><b>¿Por qué no las otras?</b> 1000 cm$^3$ es el área de la base, $40 \cdot 25$, sin multiplicar por la subida. 200 cm$^3$ y 20.000 cm$^3$ corren la coma: errores de cálculo en $1000 \cdot 2$.</p>`, conc: 'Volumen del objeto sumergido = área de la base × lo que sube el agua.' },
    { enun: r`<p>Se tiene un cubo de 3 cm de arista y otro de 6 cm de arista.</p><p>¿Cuántas veces mayor es el volumen del cubo grande que el del cubo pequeño?</p>`,
      alts: ['2 veces', '4 veces', '6 veces', '8 veces'], ok: 3,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Comparar los volúmenes dividiendo.</p><p><b>Paso 2. Volúmenes.</b> $3^3 = 27$ cm$^3$ y $6^3 = 216$ cm$^3$.</p><p><b>Paso 3. Divide.</b> $216 \div 27 = 8$.</p><p><b>Respuesta:</b> 8 veces.</p><p><b>Atajo:</b> la arista se duplica, así que el volumen se multiplica por $2^3 = 8$.</p><p><b>¿Por qué no las otras?</b> 2 veces compara solo las aristas. 4 veces compara las áreas ($2^2$). 6 veces suma o confunde con las caras del cubo.</p>`, conc: 'Si las aristas se multiplican por k, el volumen se multiplica por k³.' },
    { enun: r`<p>Considera un cilindro. ¿Cuál(es) de las siguientes afirmaciones es (son) verdadera(s)?</p><p>I) Si se duplica su altura y se mantiene el radio, su volumen se duplica.<br>II) Si se duplica su radio y se mantiene la altura, su volumen se duplica.<br>III) Si se duplican el radio y la altura, su volumen se multiplica por 8.</p>`,
      alts: ['Solo I', 'Solo II', 'Solo I y III', 'I, II y III'], ok: 2,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Revisar cómo cambia $V = \pi r^2 h$ en cada caso.</p><p><b>Paso 2. Afirmación I.</b> $\pi r^2 (2h) = 2\pi r^2 h$: se duplica. <b>Verdadera.</b></p><p><b>Paso 3. Afirmación II.</b> $\pi (2r)^2 h = 4\pi r^2 h$: se cuadruplica, no se duplica. <b>Falsa.</b></p><p><b>Paso 4. Afirmación III.</b> $\pi (2r)^2 (2h) = 8\pi r^2 h$. <b>Verdadera.</b></p><p><b>Respuesta:</b> Solo I y III.</p><p><b>¿Por qué no las otras?</b> "Solo I" deja fuera III. "Solo II" y "I, II y III" incluyen II, que olvida que el radio está al cuadrado.</p>`, conc: 'En πr²h, el radio cuenta al cuadrado y la altura una vez.' },
    { enun: r`<p>Un estanque cilíndrico tiene 1,5 m de radio y 2 m de altura.</p><p>Considerando $\pi \approx 3{,}14$, ¿cuántos litros de agua caben en el estanque?</p>`,
      fig: { type: 'img', src: 'paes/m1/fig/geo_vo_tanque.svg', alt: 'Estanque cilíndrico de 1,5 m de radio y 2 m de altura' },
      alts: ['14.130 L', '56.520 L', '1413 L', '9420 L'], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> La capacidad en litros.</p><p><b>Paso 2. Volumen.</b> $3{,}14 \cdot 1{,}5^2 \cdot 2 = 3{,}14 \cdot 2{,}25 \cdot 2 = 14{,}13$ m$^3$.</p><p><b>Paso 3. A litros.</b> 1 m$^3$ = 1000 L: $14{,}13 \cdot 1000 = 14.130$ L.</p><p><b>Respuesta:</b> 14.130 L.</p><p><b>¿Por qué no las otras?</b> 56.520 L usa 3 m (el diámetro) como radio. 1413 L multiplica por 100 en vez de 1000. 9420 L olvida elevar el radio: $3{,}14 \cdot 1{,}5 \cdot 2 = 9{,}42$ m$^3$.</p>`, conc: '1 m³ = 1000 L.' },
    { enun: r`<p>Un jarro cilíndrico de 5 cm de radio y 20 cm de altura está lleno de jugo. Con él se llenan vasos de 250 mL, como en la figura.</p><p>Considerando $\pi \approx 3{,}14$, ¿cuántos vasos se pueden llenar completamente?</p>`,
      fig: { type: 'img', src: 'paes/m1/fig/geo_vo_jarro.svg', alt: 'Jarro cilíndrico de 5 cm de radio y 20 cm de altura, junto a un vaso de 250 mL' },
      alts: ['7', '25', '1', '6'], ok: 3,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Cuántos vasos completos salen. Dividimos el volumen del jarro por 250 mL.</p><p><b>Paso 2. Volumen del jarro.</b> $3{,}14 \cdot 5^2 \cdot 20 = 3{,}14 \cdot 500 = 1570$ cm$^3$ = 1570 mL.</p><p><b>Paso 3. Divide.</b> $1570 \div 250 = 6{,}28$.</p><p><b>Paso 4. Vasos completos.</b> Se llenan 6 vasos y sobra un poco (70 mL), que no alcanza para un séptimo.</p><p><b>Respuesta:</b> 6.</p><p><b>¿Por qué no las otras?</b> 7 redondea hacia arriba, pero el séptimo vaso no se llena. 25 usa 10 (el diámetro) como radio: $6280 \div 250 \approx 25$. 1 olvida elevar el radio: $3{,}14 \cdot 5 \cdot 20 = 314$ mL.</p>`, conc: '1 cm³ = 1 mL; "completos" significa redondear hacia abajo.' },
    { enun: r`<p>Un estanque con forma de cubo de 2 m de arista está vacío. Se llena con una llave que entrega 20 litros por minuto.</p><p>¿Cuánto tiempo tarda en llenarse?</p>`,
      alts: ['0,4 min', '400 min', '40 min', '1200 min'], ok: 1,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El tiempo: volumen dividido por caudal, en las mismas unidades.</p><p><b>Paso 2. Volumen.</b> $2^3 = 8$ m$^3$.</p><p><b>Paso 3. A litros.</b> $8 \cdot 1000 = 8000$ L.</p><p><b>Paso 4. Tiempo.</b> $8000 \div 20 = 400$ minutos (6 horas y 40 minutos).</p><p><b>Respuesta:</b> 400 min.</p><p><b>¿Por qué no las otras?</b> 0,4 min no pasa los m$^3$ a litros: $8 \div 20$. 40 min usa 1 m$^3$ = 100 L. 1200 min usa el área total del cubo ($6 \cdot 4 = 24$ m$^2$) en vez del volumen.</p>`, conc: 'Tiempo de llenado = volumen ÷ caudal, con unidades iguales.' },
    { enun: r`<p>Una piscina tiene forma de paralelepípedo de 10 m de largo, 5 m de ancho y 1,5 m de profundidad, como en la figura.</p><p>¿Cuántos litros de agua se necesitan para llenarla?</p>`,
      fig: { type: 'img', src: 'paes/m1/fig/geo_vo_piscina.svg', alt: 'Piscina con forma de paralelepípedo de 10 m de largo, 5 m de ancho y 1,5 m de profundidad' },
      alts: ['75.000 L', '75 L', '7500 L', '750.000 L'], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> La capacidad en litros.</p><p><b>Paso 2. Volumen.</b> $10 \cdot 5 \cdot 1{,}5 = 75$ m$^3$.</p><p><b>Paso 3. A litros.</b> $75 \cdot 1000 = 75.000$ L.</p><p><b>Respuesta:</b> 75.000 L.</p><p><b>¿Por qué no las otras?</b> 75 L confunde m$^3$ con litros. 7500 L multiplica por 100. 750.000 L multiplica por 10.000.</p>`, conc: 'Para pasar de m³ a litros, multiplica por 1000.' },
    { enun: r`<p>Un recipiente con forma de cubo tiene una capacidad de exactamente 1 litro.</p><p>¿Cuánto mide su arista?</p>`,
      alts: ['1 cm', r`$\sqrt{1000}$ cm`, '100 cm', '10 cm'], ok: 3,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> La arista $a$ tal que $a^3 = 1$ L.</p><p><b>Paso 2. A cm$^3$.</b> 1 L = 1000 cm$^3$.</p><p><b>Paso 3. Busca la arista.</b> $a^3 = 1000$: ¿qué número multiplicado tres veces por sí mismo da 1000? $10 \cdot 10 \cdot 10 = 1000$. Entonces $a = 10$ cm.</p><p><b>Respuesta:</b> 10 cm.</p><p><b>¿Por qué no las otras?</b> 1 cm daría 1 cm$^3$ = 1 mL. $\sqrt{1000}$ cm saca raíz cuadrada en vez de cúbica (sería unos 31,6 cm, un cubo de más de 31 litros). 100 cm daría 1 m$^3$ = 1000 L.</p>`, conc: '1 L es un cubo de 10 cm de arista: 1 dm³.' },
    { enun: r`<p>Un contenedor con forma de paralelepípedo mide 2 m de largo, 1 m de ancho y 1,5 m de alto. Se quiere llenar con cajas cúbicas de 50 cm de arista, como en la figura.</p><p>¿Cuántas cajas caben, como máximo?</p>`,
      fig: { type: 'img', src: 'paes/m1/fig/geo_vo_contenedor.svg', alt: 'Contenedor de 2 m por 1 m por 1,5 m y una caja cúbica de 50 cm de arista' },
      alts: ['6', '24', '12', '3'], ok: 1,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Cuántas cajas caben. Contamos cuántas entran a lo largo de cada medida.</p><p><b>Paso 2. Pasa a cm.</b> 200 cm, 100 cm y 150 cm.</p><p><b>Paso 3. Cajas por medida.</b> Largo: $200 \div 50 = 4$. Ancho: $100 \div 50 = 2$. Alto: $150 \div 50 = 3$.</p><p><b>Paso 4. Multiplica.</b> $4 \cdot 2 \cdot 3 = 24$ cajas.</p><p><b>Respuesta:</b> 24.</p><p><b>Comprobación con volúmenes:</b> contenedor $2 \cdot 1 \cdot 1{,}5 = 3$ m$^3$; caja $0{,}5^3 = 0{,}125$ m$^3$; $3 \div 0{,}125 = 24$. ✔</p><p><b>¿Por qué no las otras?</b> 6 divide el volumen por la arista: $3 \div 0{,}5$. 12 divide por el área de una cara: $3 \div 0{,}25$. 3 es el volumen del contenedor en m$^3$.</p>`, conc: 'Cuenta cuántas caben por cada medida y multiplica.' },
    { enun: r`<p>Dentro de una caja cúbica de 10 cm de arista se pone un cilindro de 5 cm de radio y 10 cm de altura, que cabe justo, como en la figura.</p><p>¿Cuál es el volumen del espacio que queda vacío dentro de la caja?</p>`,
      fig: { type: 'img', src: 'paes/m1/fig/geo_vo_cil_caja.svg', alt: 'Caja cúbica de 10 cm de arista con un cilindro dentro, de 5 cm de radio y 10 cm de altura' },
      alts: [r`$(1000 - 100\pi)$ cm$^3$`, r`$(1000 - 250\pi)$ cm$^3$`, r`$(1000 - 50\pi)$ cm$^3$`, r`$250\pi$ cm$^3$`], ok: 1,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Lo que sobra: cubo menos cilindro.</p><p><b>Paso 2. Cubo.</b> $10^3 = 1000$ cm$^3$.</p><p><b>Paso 3. Cilindro.</b> $\pi \cdot 5^2 \cdot 10 = 250\pi$ cm$^3$.</p><p><b>Paso 4. Resta.</b> $(1000 - 250\pi)$ cm$^3$, aproximadamente $1000 - 785 = 215$ cm$^3$.</p><p><b>Respuesta:</b> $(1000 - 250\pi)$ cm$^3$.</p><p><b>¿Por qué no las otras?</b> $(1000 - 100\pi)$ resta el área lateral del cilindro, $2\pi \cdot 5 \cdot 10$. $(1000 - 50\pi)$ olvida elevar el radio. $250\pi$ es el volumen del cilindro, no el espacio vacío.</p>`, conc: 'Espacio vacío = volumen del recipiente − volumen de lo que hay dentro.' },
    { enun: r`<p>Se vierten 2 litros de agua en un recipiente vacío con forma de paralelepípedo, cuya base mide 20 cm por 10 cm, como en la figura.</p><p>¿Qué altura $h$ alcanza el agua?</p>`,
      fig: { type: 'img', src: 'paes/m1/fig/geo_vo_recipiente.svg', alt: 'Recipiente con base de 20 cm por 10 cm con agua hasta una altura h' },
      alts: ['10 cm', '1 cm', '100 cm', '0,1 cm'], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> La altura del agua. Volumen = base · altura, así que altura = volumen ÷ base.</p><p><b>Paso 2. Volumen en cm$^3$.</b> 2 L = 2000 cm$^3$.</p><p><b>Paso 3. Área de la base.</b> $20 \cdot 10 = 200$ cm$^2$.</p><p><b>Paso 4. Divide.</b> $h = 2000 \div 200 = 10$ cm.</p><p><b>Respuesta:</b> 10 cm.</p><p><b>Comprobación:</b> $20 \cdot 10 \cdot 10 = 2000$ cm$^3$ = 2 L. ✔</p><p><b>¿Por qué no las otras?</b> 1 cm usa 1 L = 100 cm$^3$. 100 cm usa 1 L = 10.000 cm$^3$. 0,1 cm no convierte los litros: $20 \div 200$.</p>`, conc: 'Altura del agua = volumen ÷ área de la base.' },
    { enun: r`<p>Un cubo de metal de 6 cm de arista se funde y, con todo el metal, se fabrican cubitos de 2 cm de arista, como en la figura.</p><p>¿Cuántos cubitos se obtienen?</p>`,
      fig: { type: 'img', src: 'paes/m1/fig/geo_vo_funde.svg', alt: 'Cubo de 6 cm de arista dividido en cubitos y un cubito de 2 cm de arista' },
      alts: ['3', '9', '54', '27'], ok: 3,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Cuántos cubitos se forman con el mismo volumen de metal.</p><p><b>Paso 2. Volumen grande.</b> $6^3 = 216$ cm$^3$.</p><p><b>Paso 3. Volumen de un cubito.</b> $2^3 = 8$ cm$^3$.</p><p><b>Paso 4. Divide.</b> $216 \div 8 = 27$.</p><p><b>Respuesta:</b> 27.</p><p><b>Comprobación:</b> en cada arista caben $6 \div 2 = 3$ cubitos: $3 \cdot 3 \cdot 3 = 27$. ✔</p><p><b>¿Por qué no las otras?</b> 3 divide solo las aristas. 9 cuenta una sola capa ($3 \cdot 3$). 54 divide 216 por 4, el área de una cara del cubito.</p>`, conc: 'Al fundir y rehacer, el volumen se conserva.' },
    { enun: r`<p>De una lámina rectangular de 30 cm por 20 cm se recorta un cuadrado de lado $x$ en cada esquina y se doblan los bordes hacia arriba para formar una caja sin tapa, como en la figura.</p><p>¿Cuál de las siguientes expresiones representa el volumen de la caja, en cm$^3$?</p>`,
      fig: { type: 'img', src: 'paes/m1/fig/geo_vo_lamina.svg', alt: 'Lámina de 30 cm por 20 cm con un cuadrado de lado x recortado en cada esquina y líneas punteadas donde se dobla' },
      alts: [r`$x(30 - x)(20 - x)$`, r`$600x$`, r`$x(30 - 2x)(20 - 2x)$`, r`$(30 - 2x)(20 - 2x)$`], ok: 2,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El volumen de la caja: largo · ancho · alto, con $x$.</p><p><b>Paso 2. Alto.</b> Los bordes doblados miden $x$: el alto es $x$.</p><p><b>Paso 3. Largo.</b> Al largo de 30 se le quita un cuadrado en cada extremo: $30 - 2x$.</p><p><b>Paso 4. Ancho.</b> Igual: $20 - 2x$.</p><p><b>Paso 5. Volumen.</b> $x(30 - 2x)(20 - 2x)$.</p><p><b>Respuesta:</b> $x(30 - 2x)(20 - 2x)$.</p><p><b>Comprobación:</b> con $x = 5$: caja de $20 \times 10 \times 5 = 1000$ cm$^3$, y la expresión da $5 \cdot 20 \cdot 10 = 1000$. ✔</p><p><b>¿Por qué no las otras?</b> $x(30 - x)(20 - x)$ quita un solo cuadrado por lado. $600x$ no descuenta los cortes. $(30 - 2x)(20 - 2x)$ es el área del fondo: falta multiplicar por la altura.</p>`, conc: 'Recortar x en cada esquina quita 2x a cada medida y deja altura x.' }
  ]
}
];
