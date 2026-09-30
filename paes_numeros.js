/* Contenido de "PAES Números" (Fabimath).
   Temario oficial PAES M1 Admisión 2027, eje Números:
     1. Conjunto de los números enteros y racionales (operaciones y comparación en enteros
        y en racionales; problemas en diversos contextos).
     2. Porcentaje (concepto y cálculo; problemas en diversos contextos).
     3. Potencias y raíces enésimas (propiedades de potencias de base racional y exponente
        racional; descomposición y propiedades de raíces enésimas en los reales; problemas).
   Estilo de preguntas tomado de las tres últimas pruebas publicadas por el DEMRE
   (PAES Invierno 2026, selección PAES Regular 2026 y PAES Invierno 2027), en paes/fuentes/.
   Notación chilena: coma decimal ($0{,}25$), punto de miles (30.000); montos en pesos dentro
   de <span class="peso">, que KaTeX ignora.
   Se carga después de paes_data.js: reutiliza r (String.raw) y SLIDE_FIGS.
   Cada pregunta: enun (HTML + $latex$), fig opcional, alts (4), ok (índice correcto), sol, conc. */

const TOPICS_NUM = [

/* =====================================================================
   UNIDAD 1 · ENTEROS Y RACIONALES
   ===================================================================== */
{
  id: 'enteros', unit: 'Unidad 1 · Enteros y racionales', icon: '➕',
  title: 'Números enteros',
  desc: 'Sumar, restar, multiplicar y dividir con signos, prioridad de operaciones y comparación en la recta numérica.',
  slides: [
    { t: 'Los enteros y la recta numérica', b: r`
      <div class="cols"><div>
      <p>Los <b>números enteros</b> son $\mathbb{Z} = \{\dots, -3, -2, -1, 0, 1, 2, 3, \dots\}$: los naturales, el cero y los negativos.</p>
      <p>En la recta, un número es <b>mayor</b> mientras más a la derecha está: $-7 < -2 < 0 < 3$.</p>
      <p>El <b>valor absoluto</b> $|a|$ es la distancia al cero: $|-5| = |5| = 5$.</p>
      </div><div>
      <div class="box alert"><b>Entre negativos</b> El de mayor valor absoluto es el <b>menor</b>: $-12 < -7$, porque $-12$ está más lejos del cero, a la izquierda. Una temperatura de $-12$ °C es más fría que una de $-7$ °C.</div>
      <div class="box"><b>Contextos típicos</b> temperaturas bajo cero, pisos subterráneos, profundidad bajo el nivel del mar, años antes de Cristo, deudas y puntajes que restan.</div>
      </div></div>` },
    { t: 'Sumar y restar con signos', b: r`
      <div class="cols"><div>
      <ul><li><b>Mismo signo</b>: se suman los valores absolutos y se conserva el signo: $-4 + (-6) = -10$.</li>
      <li><b>Distinto signo</b>: se restan los valores absolutos y queda el signo del de mayor valor absoluto: $-9 + 4 = -5$.</li>
      <li><b>Restar es sumar el opuesto</b>: $3 - (-5) = 3 + 5 = 8$.</li></ul>
      </div><div>
      <div class="box"><b>En contexto</b> A las 7:00 la temperatura era $-3$ °C y al mediodía había subido 8 °C: $-3 + 8 = 5$ °C.<br>Arquímedes nació el 287 a. C. y murió el 212 a. C.: vivió $-212 - (-287) = 75$ años.</div>
      </div></div>` },
    { t: 'Multiplicar y dividir: regla de los signos', b: r`
      <div class="cols"><div>
      <table><thead><tr><th>Signos</th><th>Resultado</th><th>Ejemplo</th></tr></thead><tbody>
      <tr><td>$(+)\cdot(+)$</td><td>$+$</td><td>$3\cdot 4 = 12$</td></tr>
      <tr><td>$(-)\cdot(-)$</td><td>$+$</td><td>$(-3)(-8) = 24$</td></tr>
      <tr><td>$(+)\cdot(-)$</td><td>$-$</td><td>$5\cdot(-2) = -10$</td></tr>
      <tr><td>$(-) : (+)$</td><td>$-$</td><td>$-18 : 3 = -6$</td></tr></tbody></table>
      </div><div>
      <p>Con varias multiplicaciones, cuenta los factores negativos: si son una cantidad <b>par</b>, el resultado es positivo; si es <b>impar</b>, negativo. Por eso $(-2)^6 = 64$ y $(-2)^3 = -8$.</p>
      <div class="box alert"><b>Ojo con el paréntesis</b> $(-2)^4 = 16$, pero $-2^4 = -(2^4) = -16$: sin paréntesis, la potencia afecta solo al 2.</div>
      </div></div>` },
    { t: 'Prioridad de operaciones', b: r`
      <div class="cols"><div>
      <div class="box"><b>Orden</b><br>1) Paréntesis (de adentro hacia afuera).<br>2) Potencias.<br>3) Multiplicaciones y divisiones, <b>de izquierda a derecha</b>.<br>4) Sumas y restas, de izquierda a derecha.</div>
      <p>$1 - (-3)(-2 - 6) = 1 - (-3)(-8) = 1 - 24 = -23$.</p>
      </div><div>
      <div class="box alert"><b>Error frecuente</b> Operar en el orden en que se lee. En $1 - (-3)(-8)$ no se resta primero $1 - (-3)$: la multiplicación va antes. Y en $20 - 8 : 4\cdot 2$ la división y la multiplicación se hacen de izquierda a derecha: $8 : 4 = 2$, $2\cdot 2 = 4$, y queda $20 - 4 = 16$.</div>
      </div></div>` },
    { t: 'Resumen', b: r`
      <table><thead><tr><th>Operación</th><th>Regla</th><th>Ejemplo</th></tr></thead><tbody>
      <tr><td>Suma, mismo signo</td><td>se suman, se conserva el signo</td><td>$-4 + (-6) = -10$</td></tr>
      <tr><td>Suma, distinto signo</td><td>se restan, signo del mayor $|\ |$</td><td>$-9 + 4 = -5$</td></tr>
      <tr><td>Resta</td><td>sumar el opuesto</td><td>$3 - (-5) = 8$</td></tr>
      <tr><td>Producto y cociente</td><td>signos iguales $+$, distintos $-$</td><td>$(-3)(-8) = 24$</td></tr>
      <tr><td>Comparación</td><td>más a la derecha, mayor</td><td>$-12 < -7 < 0$</td></tr></tbody></table>
      <div class="box" style="margin-top:14px"><b>Método PAES</b> 1) Resuelve los paréntesis. 2) Marca las multiplicaciones y divisiones antes de sumar. 3) Anota el signo en cada paso. En las preguntas de "¿en cuál paso se cometió el error?", rehaz cada paso por separado: el error suele ser un signo o un orden de operaciones.</div>` }
  ],
  example: {
    src: 'PAES Invierno 2026, adaptada',
    enun: r`<p>¿Cuál es el valor de $2 - (-3)(-4 - 5)$?</p>`,
    alts: [r`$-45$`, r`$-25$`, r`$-15$`, r`$29$`], ok: 1,
    sol: r`<p>Primero el paréntesis: $-4 - 5 = -9$. Luego la multiplicación: $(-3)(-9) = 27$. Al final la resta: $2 - 27 = -25$.</p><p>$-45$ sale de restar primero $2 - (-3) = 5$ y multiplicar después por $-9$; $29$ usa $(-3)(-9) = -27$ (error de signo); $-15$ ignora el paréntesis y calcula $2 - (-3)(-4) - 5 = 2 - 12 - 5$.</p>`,
    conc: 'Paréntesis, luego multiplicación, luego resta. Menos por menos es más.'
  },
  bank: [
    { enun: r`<p>A las 6:00 la temperatura en Punta Arenas era de $-4$ °C. Hasta el mediodía subió 9 °C y desde el mediodía hasta la noche bajó 7 °C.</p><p>¿Cuál era la temperatura en la noche?</p>`,
      alts: ['−20 °C', '2 °C', '12 °C', '−2 °C'], ok: 3,
      sol: r`<p>$-4 + 9 - 7 = 5 - 7 = -2$ °C.</p><p>$-20$ resta todo ($-4 - 9 - 7$); $2$ pierde el signo del resultado; $12$ calcula $9 + 7 - 4$.</p>`, conc: 'Subir es sumar, bajar es restar; el signo del resultado importa.' },
    { enun: r`<p>¿Cuál es el valor de $-2^4 + (-2)^3$?</p>`,
      alts: [r`$-24$`, r`$-8$`, r`$8$`, r`$24$`], ok: 0,
      sol: r`<p>$-2^4 = -(2^4) = -16$, porque sin paréntesis la potencia afecta solo al 2. $(-2)^3 = -8$, exponente impar.</p><p>$-16 + (-8) = -24$.</p><p>$8$ toma $-2^4$ como $16$; $-8$ calcula $-16 + 8$; $24$ considera ambas potencias positivas.</p>`, conc: '−2⁴ es −16; (−2)⁴ es 16.' },
    { enun: r`<p>¿Cuál de los siguientes ordenamientos de los números $-7$, $3$, $-12$ y $0$ está de <b>menor a mayor</b>?</p>`,
      alts: [r`$-7 < -12 < 0 < 3$`, r`$0 < 3 < -7 < -12$`, r`$-12 < 0 < -7 < 3$`, r`$-12 < -7 < 0 < 3$`], ok: 3,
      sol: r`<p>En la recta, $-12$ está más a la izquierda que $-7$; después vienen el $0$ y el $3$: $-12 < -7 < 0 < 3$.</p><p>El primer ordenamiento compara los negativos por su valor absoluto, que es justamente el error típico.</p>`, conc: 'Entre negativos, mayor valor absoluto significa menor número.' },
    { enun: r`<p>En un concurso de 20 preguntas, cada respuesta correcta suma 5 puntos, cada respuesta incorrecta resta 3 puntos y cada pregunta omitida vale 0 puntos. Una persona tuvo 12 respuestas correctas, 5 incorrectas y omitió 3.</p><p>¿Cuál de las siguientes expresiones representa su puntaje final?</p>`,
      alts: [r`$12\cdot 5 - 5\cdot(-3)$`, r`$(12 + 5)\cdot(5 - 3)$`, r`$12\cdot 5 + 5\cdot(-3)$`, r`$12\cdot 5 + 8\cdot(-3)$`], ok: 2,
      sol: r`<p>Las 12 correctas aportan $12\cdot 5$ y las 5 incorrectas aportan $5\cdot(-3)$; las omitidas no aportan. Puntaje: $12\cdot 5 + 5\cdot(-3) = 60 - 15 = 45$.</p><p>$12\cdot 5 - 5\cdot(-3)$ termina <b>sumando</b> 15 puntos por las incorrectas; la última expresión descuenta también las 3 omitidas.</p>`, conc: 'Cada tipo de respuesta: cantidad por su valor con signo, y luego se suma.' },
    { enun: r`<p>Para calcular el valor de $20 - 8 : 4\cdot 2 + (-3)^2$ se realizó el siguiente procedimiento, cometiéndose un error.</p><p>Paso 1: se calcula $4\cdot 2$, obteniéndose $20 - 8 : 8 + (-3)^2$.<br>Paso 2: se calcula $8 : 8$, obteniéndose $20 - 1 + (-3)^2$.<br>Paso 3: se calcula la potencia, obteniéndose $20 - 1 + 9$.<br>Paso 4: se resuelven la resta y la suma, obteniéndose $28$.</p><p>¿En cuál de los pasos se cometió el error?</p>`,
      alts: ['En el Paso 1', 'En el Paso 2', 'En el Paso 3', 'En el Paso 4'], ok: 0,
      sol: r`<p>La división y la multiplicación tienen la misma prioridad y se hacen <b>de izquierda a derecha</b>: primero $8 : 4 = 2$ y después $2\cdot 2 = 4$. El Paso 1 hace la multiplicación antes y cambia el resultado.</p><p>Lo correcto es $20 - 4 + 9 = 25$. Los pasos 2, 3 y 4 están bien hechos a partir de lo que tenían.</p>`, conc: 'Multiplicaciones y divisiones: de izquierda a derecha, en el orden en que aparecen.' },
    { enun: r`<p>Arquímedes nació el año 287 a. C. y murió el año 212 a. C.</p><p>¿Cuántos años vivió aproximadamente?</p>`,
      alts: ['212 años', '75 años', '287 años', '499 años'], ok: 1,
      sol: r`<p>Los años antes de Cristo se representan con negativos: nació en $-287$ y murió en $-212$.</p><p>Años vividos: $-212 - (-287) = -212 + 287 = 75$.</p><p>499 suma los dos años ($287 + 212$) como si uno fuera d. C.; 212 y 287 son solo los años de muerte y de nacimiento.</p>`, conc: 'Tiempo transcurrido = final − inicial, también con negativos.' },
    { enun: r`<p>Sean $a = -3$ y $b = 5$.</p><p>¿Cuál(es) de las siguientes afirmaciones es (son) verdadera(s)?</p><p>I) $a\cdot b < 0$<br>II) $a - b > 0$<br>III) $a^2 > b$</p>`,
      alts: ['Solo I', 'Solo I y III', 'Solo II y III', 'I, II y III'], ok: 1,
      sol: r`<p>I) $a\cdot b = (-3)\cdot 5 = -15 < 0$. Verdadera.</p><p>II) $a - b = -3 - 5 = -8$, que no es mayor que 0. Falsa.</p><p>III) $a^2 = (-3)^2 = 9 > 5$. Verdadera.</p>`, conc: 'Reemplaza con paréntesis: (−3)² = 9.' },
    { enun: r`<p>Un buzo se encuentra a $-18$ m respecto del nivel del mar y asciende a razón de 3 m por minuto.</p><p>¿Cuántos minutos tarda en llegar a $-6$ m?</p>`,
      alts: ['8', '6', '4', '2'], ok: 2,
      sol: r`<p>Distancia que sube: $-6 - (-18) = 12$ m. A 3 m por minuto: $12 : 3 = 4$ minutos.</p><p>8 sale de $(18 + 6) : 3$, como si tuviera que subir hasta la superficie y bajar; 6 es el tiempo para llegar a la superficie ($18 : 3$).</p>`, conc: 'Distancia entre dos enteros = mayor − menor.' }
  ]
},

{
  id: 'racionales', unit: 'Unidad 1 · Enteros y racionales', icon: '🍕',
  title: 'Fracciones y racionales',
  desc: 'Amplificar y simplificar, sumar, restar, multiplicar y dividir fracciones, números mixtos y "fracción de lo que queda".',
  slides: [
    { t: '¿Qué es un número racional?', b: r`
      <div class="cols"><div>
      <p>Un <b>racional</b> es un cociente de enteros: $\mathbb{Q} = \left\{ \dfrac{a}{b} : a, b \in \mathbb{Z},\ b \neq 0 \right\}$. Todo entero es racional: $-3 = \dfrac{-3}{1}$.</p>
      <p><b>Amplificar</b>: multiplicar numerador y denominador por lo mismo, $\dfrac{3}{4} = \dfrac{6}{8} = \dfrac{9}{12}$.<br><b>Simplificar</b>: dividir ambos por un divisor común, $\dfrac{18}{24} = \dfrac{3}{4}$ (por 6).</p>
      <p><b>Número mixto</b>: $2\tfrac{1}{4} = 2 + \dfrac{1}{4} = \dfrac{9}{4}$.</p>
      </div><div>
      <div class="box alert"><b>Solo se simplifican factores</b> $\dfrac{2\cdot 5}{2} = 5$, pero $\dfrac{2 + 5}{2} = \dfrac{7}{2}$, no $6$. Si hay una suma, no se "tacha" un sumando.</div>
      </div></div>` },
    { t: 'Sumar y restar fracciones', b: r`
      <div class="cols"><div>
      <p>Con igual denominador se suman los numeradores: $\dfrac{2}{7} + \dfrac{3}{7} = \dfrac{5}{7}$.</p>
      <p>Con distinto denominador se amplifica a un <b>denominador común</b> (el mínimo común múltiplo):</p>
      $$\frac{1}{4} + \frac{5}{6} = \frac{3}{12} + \frac{10}{12} = \frac{13}{12}$$
      </div><div>
      <div class="box"><b>Números mixtos</b> Se pueden operar por separado la parte entera y la fraccionaria:
      $$2\tfrac{1}{4} - 1\tfrac{1}{8} = (2 - 1) + \left(\tfrac{1}{4} - \tfrac{1}{8}\right) = 1\tfrac{1}{8}$$</div>
      <div class="box alert"><b>Nunca</b> $\dfrac{1}{3} + \dfrac{1}{3} = \dfrac{2}{6}$: el denominador no se suma.</div>
      </div></div>` },
    { t: 'Multiplicar y dividir', b: r`
      <div class="cols"><div>
      $$\frac{a}{b}\cdot\frac{c}{d} = \frac{a\cdot c}{b\cdot d} \qquad \frac{a}{b} : \frac{c}{d} = \frac{a}{b}\cdot\frac{d}{c}$$
      <p>Dividir es multiplicar por el <b>inverso</b>: $\dfrac{3}{4} : \dfrac{9}{8} = \dfrac{3}{4}\cdot\dfrac{8}{9} = \dfrac{24}{36} = \dfrac{2}{3}$.</p>
      <p>Conviene simplificar en cruz antes de multiplicar para trabajar con números chicos.</p>
      </div><div>
      <div class="box"><b>"Fracción de" = multiplicar</b> $\dfrac{2}{3}$ de 45 es $\dfrac{2}{3}\cdot 45 = 30$.<br><b>"¿Cuántas caben?" = dividir</b> ¿Cuántas botellas de $\dfrac{3}{4}$ L se llenan con 12 L? $12 : \dfrac{3}{4} = 12\cdot\dfrac{4}{3} = 16$.</div>
      </div></div>` },
    { t: 'Problemas: del total o de lo que queda', b: r`
      <p>La PAES juega con repartos sucesivos. Lee con cuidado <b>de qué</b> es cada fracción.</p>
      <div class="cols"><div>
      <div class="box"><b>Del total</b> Una caja de 12 huevos: se aparta $\dfrac{1}{6}$ y $\dfrac{1}{3}$ <b>del total</b>: $2 + 4 = 6$ huevos, quedan 6.</div>
      <div class="box"><b>De lo que queda</b> Si luego se usa la mitad <b>de los restantes</b>: $\dfrac{1}{2}\cdot 6 = 3$, quedan 3.</div>
      </div><div>
      <div class="box alert"><b>Sueldo</b> Si se gastan $\dfrac{3}{5}$ del sueldo $M$, se ahorra el resto, $\dfrac{2}{5}M$ (no $\dfrac{1}{5}M$). En un año de sueldo fijo: $12\cdot\dfrac{2}{5}M = \dfrac{24}{5}M$.</div>
      </div></div>` },
    { t: 'Resumen', b: r`
      <table><thead><tr><th>Operación</th><th>Cómo</th></tr></thead><tbody>
      <tr><td>Simplificar / amplificar</td><td>dividir / multiplicar arriba y abajo por lo mismo</td></tr>
      <tr><td>Suma y resta</td><td>denominador común, luego sumar numeradores</td></tr>
      <tr><td>Multiplicación</td><td>numerador por numerador, denominador por denominador</td></tr>
      <tr><td>División</td><td>multiplicar por el inverso</td></tr>
      <tr><td>Comparar $\dfrac{a}{b}$ y $\dfrac{c}{d}$ ($b, d > 0$)</td><td>$\dfrac{a}{b} < \dfrac{c}{d} \iff a\cdot d < b\cdot c$</td></tr></tbody></table>
      <div class="box" style="margin-top:14px"><b>Método PAES</b> Escribe cada dato como fracción, decide si se multiplica ("de") o se divide ("cuántas caben", "repartir") y simplifica al final. Si las alternativas son expresiones, busca la que respeta el orden de las operaciones del enunciado.</div>` }
  ],
  example: {
    src: 'PAES Invierno 2027, adaptada',
    enun: r`<p>Una botella de agua tiene una capacidad de $2\tfrac{1}{4}$ L y otra de $1\tfrac{1}{8}$ L.</p><p>¿Cuál de las siguientes expresiones representa la diferencia de capacidad entre ambas botellas, en litros?</p>`,
    alts: [r`$(2 - 1) - \left(\dfrac{1}{4} + \dfrac{1}{8}\right)$`, r`$(2 - 1) + \left(\dfrac{1}{4} - \dfrac{1}{8}\right)$`, r`$(2 - 1) + \left(\dfrac{1}{8} - \dfrac{1}{4}\right)$`, r`$(2 + 1) - \left(\dfrac{1}{4} + \dfrac{1}{8}\right)$`], ok: 1,
    sol: r`<p>$2\tfrac{1}{4} - 1\tfrac{1}{8} = \left(2 + \tfrac{1}{4}\right) - \left(1 + \tfrac{1}{8}\right) = (2 - 1) + \left(\tfrac{1}{4} - \tfrac{1}{8}\right) = 1 + \tfrac{1}{8} = 1\tfrac{1}{8}$ L.</p><p>La primera alternativa resta mal el paréntesis: $-\left(1 + \tfrac{1}{8}\right)$ solo le cambia el signo a $\tfrac{1}{8}$, no a $\tfrac{1}{4}$. La tercera invierte la resta de las fracciones y la cuarta suma las partes enteras.</p>`,
    conc: 'Un número mixto es una suma: entero + fracción. Al restarlo, el signo afecta a ambas partes.'
  },
  bank: [
    { enun: r`<p>¿Cuál es el valor de $\dfrac{2}{3} + \dfrac{1}{4}\cdot 2$?</p>`,
      alts: [r`$\dfrac{11}{6}$`, r`$\dfrac{7}{6}$`, r`$\dfrac{3}{7}$`, r`$\dfrac{19}{24}$`], ok: 1,
      sol: r`<p>Primero la multiplicación: $\dfrac{1}{4}\cdot 2 = \dfrac{2}{4} = \dfrac{1}{2}$. Luego $\dfrac{2}{3} + \dfrac{1}{2} = \dfrac{4}{6} + \dfrac{3}{6} = \dfrac{7}{6}$.</p><p>$\dfrac{11}{6}$ suma antes de multiplicar: $\left(\dfrac{2}{3} + \dfrac{1}{4}\right)\cdot 2$. $\dfrac{3}{7}$ suma numeradores y denominadores. $\dfrac{19}{24}$ toma $\dfrac{1}{4}\cdot 2$ como $\dfrac{1}{8}$.</p>`, conc: 'La prioridad de operaciones vale igual con fracciones.' },
    { enun: r`<p>El sueldo líquido mensual de una persona es de $M$ pesos. Todos los meses gasta las tres quintas partes y el resto lo ahorra.</p><p>Si el sueldo se mantiene fijo durante doce meses, ¿cuál de las siguientes expresiones representa el ahorro, en pesos, de la persona en ese periodo?</p>`,
      alts: [r`$\dfrac{2}{5}M$`, r`$\dfrac{36}{5}M$`, r`$\dfrac{24}{5}M$`, r`$\dfrac{12}{5}M$`], ok: 2,
      sol: r`<p>Si gasta $\dfrac{3}{5}$, ahorra $1 - \dfrac{3}{5} = \dfrac{2}{5}$ del sueldo cada mes. En doce meses: $12\cdot\dfrac{2}{5}M = \dfrac{24}{5}M$.</p><p>$\dfrac{2}{5}M$ es el ahorro de un solo mes; $\dfrac{36}{5}M$ es lo que gasta en el año; $\dfrac{12}{5}M$ supone que ahorra $\dfrac{1}{5}$ al mes.</p>`, conc: 'El resto de 3/5 es 2/5. Luego se multiplica por la cantidad de meses.' },
    { enun: r`<p>Una receta para 4 personas usa $\dfrac{3}{4}$ de taza de azúcar.</p><p>Si se quiere preparar la receta para 10 personas manteniendo las proporciones, ¿cuántas tazas de azúcar se necesitan?</p>`,
      alts: [r`$1\tfrac{7}{8}$`, r`$2\tfrac{1}{2}$`, r`$3\tfrac{3}{4}$`, r`$7\tfrac{1}{2}$`], ok: 0,
      sol: r`<p>Por persona: $\dfrac{3}{4} : 4 = \dfrac{3}{16}$ de taza. Para 10 personas: $10\cdot\dfrac{3}{16} = \dfrac{30}{16} = \dfrac{15}{8} = 1\tfrac{7}{8}$ tazas.</p><p>$2\tfrac{1}{2} = \dfrac{10}{4}$ es solo el factor de escala; $3\tfrac{3}{4}$ multiplica $\dfrac{3}{4}$ por 5; $7\tfrac{1}{2}$ multiplica $\dfrac{3}{4}$ por 10, como si la receta fuera para una persona.</p>`, conc: 'Primero la cantidad por persona (o el factor 10/4), después se escala.' },
    { enun: r`<p>¿Cuántas botellas de $\dfrac{3}{4}$ L se pueden llenar completamente con 12 L de jugo?</p>`,
      alts: ['9', '16', '36', '48'], ok: 1,
      sol: r`<p>Se pregunta cuántas veces cabe $\dfrac{3}{4}$ en 12: $12 : \dfrac{3}{4} = 12\cdot\dfrac{4}{3} = 16$ botellas.</p><p>9 es $12\cdot\dfrac{3}{4}$ (multiplicar en vez de dividir); 36 y 48 multiplican 12 por el numerador o por el denominador.</p>`, conc: '"¿Cuántas caben?" se responde dividiendo.' },
    { enun: r`<p>¿Cuál(es) de las siguientes afirmaciones es (son) verdadera(s)?</p><p>I) $\dfrac{6}{8} = \dfrac{9}{12}$<br>II) $\dfrac{2 + 5}{2} = 1 + 5$<br>III) $\dfrac{1}{3} + \dfrac{1}{3} = \dfrac{2}{6}$</p>`,
      alts: ['Solo I', 'Solo II', 'Solo I y III', 'I, II y III'], ok: 0,
      sol: r`<p>I) Ambas se simplifican a $\dfrac{3}{4}$. Verdadera.</p><p>II) $\dfrac{2 + 5}{2} = \dfrac{7}{2} = 3{,}5$, y $1 + 5 = 6$. Falsa: no se puede simplificar un sumando.</p><p>III) $\dfrac{1}{3} + \dfrac{1}{3} = \dfrac{2}{3}$; $\dfrac{2}{6} = \dfrac{1}{3}$. Falsa: el denominador no se suma.</p>`, conc: 'Simplificar solo factores; en la suma, el denominador común se mantiene.' },
    { enun: r`<p>Una persona tiene una caja con 12 huevos y realiza lo siguiente:</p><p>· aparta $\dfrac{1}{6}$ y $\dfrac{1}{3}$ del total de huevos para una tortilla y para huevos revueltos, respectivamente;<br>· utiliza la mitad de los huevos restantes para preparar un queque;<br>· al guardar la caja se le rompe un huevo y lo elimina.</p><p>¿Cuántos huevos le quedan en la caja?</p>`,
      alts: ['6', '5', '3', '2'], ok: 3,
      sol: r`<p>Aparta $\dfrac{1}{6}\cdot 12 = 2$ y $\dfrac{1}{3}\cdot 12 = 4$: quedan $12 - 6 = 6$.</p><p>Usa la mitad de los <b>restantes</b>: $\dfrac{1}{2}\cdot 6 = 3$, quedan 3. Se rompe uno: quedan <b>2</b>.</p><p>3 olvida el huevo roto; 5 salta el queque; 6 se queda en el primer paso.</p>`, conc: 'Distingue "del total" de "de los restantes" y sigue los pasos en orden.' },
    { enun: r`<p>Para calcular $\dfrac{5}{6} - \dfrac{1}{2} : \dfrac{3}{4}$ se realizó el siguiente procedimiento, cometiéndose un error.</p><p>Paso 1: se escribe la división como multiplicación, obteniéndose $\dfrac{5}{6} - \dfrac{1}{2}\cdot\dfrac{4}{3}$.<br>Paso 2: se multiplica, obteniéndose $\dfrac{5}{6} - \dfrac{2}{3}$.<br>Paso 3: se restan numeradores y denominadores, obteniéndose $\dfrac{3}{3}$.<br>Paso 4: se simplifica, obteniéndose $1$.</p><p>¿En cuál de los pasos se cometió el error?</p>`,
      alts: ['En el Paso 1', 'En el Paso 2', 'En el Paso 3', 'En el Paso 4'], ok: 2,
      sol: r`<p>Pasos 1 y 2 están bien: $\dfrac{1}{2}\cdot\dfrac{4}{3} = \dfrac{4}{6} = \dfrac{2}{3}$.</p><p>En el Paso 3 no se pueden restar los denominadores: hay que igualarlos, $\dfrac{5}{6} - \dfrac{4}{6} = \dfrac{1}{6}$. El Paso 4 simplifica correctamente lo que recibió.</p>`, conc: 'Para sumar o restar fracciones: denominador común, nunca restar denominadores.' },
    { enun: r`<p>¿Cuál de las siguientes fracciones es la <b>mayor</b>?</p>`,
      alts: [r`$\dfrac{5}{8}$`, r`$\dfrac{3}{5}$`, r`$\dfrac{7}{12}$`, r`$\dfrac{2}{3}$`], ok: 3,
      sol: r`<p>En decimal: $\dfrac{5}{8} = 0{,}625$; $\dfrac{3}{5} = 0{,}6$; $\dfrac{7}{12} = 0{,}58\overline{3}$; $\dfrac{2}{3} = 0{,}\overline{6}$.</p><p>La mayor es $\dfrac{2}{3}$. También con denominador común 120: $75$, $72$, $70$ y $80$ ciento-veinteavos.</p><p>Tener numerador o denominador más grande no hace mayor a una fracción: $\dfrac{7}{12}$ es la menor.</p>`, conc: 'Para comparar: pasar a decimal o a denominador común.' }
  ]
},

{
  id: 'decimales_orden', unit: 'Unidad 1 · Enteros y racionales', icon: '📍',
  title: 'Decimales, orden y recta numérica',
  desc: 'Decimales finitos y periódicos, conversión a fracción, operar con decimales, comparar y ordenar racionales.',
  slides: [
    { t: 'Decimal y fracción', b: r`
      <div class="cols"><div>
      <p><b>Decimal finito → fracción</b>: se escribe sobre 10, 100, 1000… y se simplifica.</p>
      <p>$0{,}25 = \dfrac{25}{100} = \dfrac{1}{4}$ &nbsp; $1{,}6 = \dfrac{16}{10} = \dfrac{8}{5}$ &nbsp; $0{,}075 = \dfrac{75}{1000} = \dfrac{3}{40}$</p>
      <p><b>Fracción → decimal</b>: se divide el numerador por el denominador: $\dfrac{3}{8} = 3 : 8 = 0{,}375$.</p>
      </div><div>
      <div class="box"><b>¿Finito o periódico?</b> Una fracción irreducible da decimal <b>finito</b> si su denominador solo tiene los factores primos 2 y 5 ($\dfrac{3}{40}$, $\dfrac{7}{25}$). Si tiene otro factor (3, 7, 11…), el decimal es <b>periódico</b> ($\dfrac{1}{3} = 0{,}\overline{3}$).</div>
      </div></div>` },
    { t: 'Periódicos y semiperiódicos a fracción', b: r`
      <div class="cols"><div>
      <p><b>Periódico puro</b>: el período sobre tantos 9 como cifras tenga.</p>
      $$0{,}\overline{3} = \frac{3}{9} = \frac{1}{3} \qquad 0{,}\overline{27} = \frac{27}{99} = \frac{3}{11}$$
      <p><b>Semiperiódico</b>: (todas las cifras decimales − las que no se repiten) sobre tantos 9 como cifras del período, seguidos de tantos 0 como cifras del anteperíodo.</p>
      $$0{,}1\overline{6} = \frac{16 - 1}{90} = \frac{15}{90} = \frac{1}{6}$$
      </div><div>
      <div class="box"><b>Con parte entera</b> $1{,}\overline{2} = 1 + \dfrac{2}{9} = \dfrac{11}{9}$.</div>
      <div class="box alert"><b>Curiosidad que la PAES pregunta</b> $0{,}\overline{9} = \dfrac{9}{9} = 1$. No es "casi 1": es exactamente 1.</div>
      </div></div>` },
    { t: 'Operar con decimales', b: r`
      <div class="cols"><div>
      <ul><li><b>Sumar y restar</b>: alinear la coma. $2{,}5 + 0{,}75 = 3{,}25$.</li>
      <li><b>Multiplicar</b>: multiplicar sin coma y dejar tantos decimales como sumen los factores. $0{,}3\cdot 0{,}02 = 0{,}006$ (1 + 2 = 3 decimales).</li>
      <li><b>Dividir</b>: amplificar para quitar la coma del divisor. $2{,}4 : 0{,}15 = 240 : 15 = 16$.</li></ul>
      </div><div>
      <div class="box"><b>Por potencias de 10</b> Multiplicar por 10 corre la coma un lugar a la derecha; dividir por 10, a la izquierda. Dividir por $0{,}1$ es multiplicar por 10.</div>
      <div class="box alert"><b>"El número cuya tercera parte es 0,09"</b> Si la tercera parte es $0{,}09$, el número es $3\cdot 0{,}09 = 0{,}27$, no $0{,}09 : 3 = 0{,}03$.</div>
      </div></div>` },
    { t: 'Comparar, ordenar y ubicar en la recta', b: r`
      <div class="cols"><div>
      <p><b>Decimales</b>: completar con ceros y comparar cifra a cifra. $0{,}5 = 0{,}50 > 0{,}45$.</p>
      <p><b>Negativos</b>: el orden se invierte, $-0{,}5 < -0{,}45$.</p>
      <p><b>Fracciones y decimales mezclados</b>: pasar todo a decimal (con 3 o 4 cifras basta) o todo a fracción con denominador común.</p>
      </div><div>
      <div class="box"><b>Entre dos racionales siempre hay otro</b> Por ejemplo, el promedio: entre $\dfrac{1}{3}$ y $\dfrac{1}{2}$ está $\dfrac{1}{2}\left(\dfrac{1}{3} + \dfrac{1}{2}\right) = \dfrac{5}{12}$.</div>
      <div class="box alert"><b>Trampa</b> $12{,}08$ es menor que $12{,}1$: la cantidad de cifras no dice cuál es mayor.</div>
      </div></div>` },
    { t: 'Resumen', b: r`
      <table><thead><tr><th>Tipo</th><th>Ejemplo</th><th>Fracción</th></tr></thead><tbody>
      <tr><td>Finito</td><td>$0{,}75$</td><td>$\dfrac{75}{100} = \dfrac{3}{4}$</td></tr>
      <tr><td>Periódico puro</td><td>$0{,}\overline{36}$</td><td>$\dfrac{36}{99} = \dfrac{4}{11}$</td></tr>
      <tr><td>Semiperiódico</td><td>$0{,}1\overline{6}$</td><td>$\dfrac{16 - 1}{90} = \dfrac{1}{6}$</td></tr>
      <tr><td>Con parte entera</td><td>$1{,}\overline{2}$</td><td>$1 + \dfrac{2}{9} = \dfrac{11}{9}$</td></tr></tbody></table>
      <div class="box" style="margin-top:14px"><b>Método PAES</b> Para ordenar, escribe todos los números con la misma cantidad de decimales y compara. Para operar, decide si es más cómodo trabajar en decimal o en fracción; los periódicos, siempre como fracción.</div>` }
  ],
  example: {
    src: 'PAES Regular 2026, adaptada',
    enun: r`<p>¿Cuál es el número cuya cuarta parte es $0{,}06$?</p>`,
    alts: ['2,4', '0,24', '0,15', '0,015'], ok: 1,
    sol: r`<p>Si la cuarta parte del número es $0{,}06$, el número es $4\cdot 0{,}06 = 0{,}24$.</p><p>$0{,}015$ divide $0{,}06$ por 4 (calcula la cuarta parte de $0{,}06$, que no es lo pedido); $0{,}15$ es ese mismo error con la coma corrida; $2{,}4$ es el resultado correcto con la coma mal ubicada.</p>`,
    conc: 'Si x/4 = 0,06, entonces x = 4 · 0,06. Cuida la posición de la coma.'
  },
  bank: [
    { enun: r`<p>¿Cuál de las siguientes fracciones es igual a $0{,}\overline{36}$?</p>`,
      alts: [r`$\dfrac{9}{25}$`, r`$\dfrac{2}{5}$`, r`$\dfrac{4}{11}$`, r`$\dfrac{36}{10}$`], ok: 2,
      sol: r`<p>Periódico puro de dos cifras: $0{,}\overline{36} = \dfrac{36}{99} = \dfrac{4}{11}$ (simplificando por 9).</p><p>$\dfrac{9}{25} = \dfrac{36}{100} = 0{,}36$ es el decimal finito; $\dfrac{2}{5} = \dfrac{36}{90}$ usa el denominador de un semiperiódico; $\dfrac{36}{10} = 3{,}6$.</p>`, conc: 'Periódico puro: período sobre tantos 9 como cifras tenga.' },
    { enun: r`<p>¿Cuál de las siguientes fracciones es igual a $0{,}1\overline{6}$?</p>`,
      alts: [r`$\dfrac{1}{6}$`, r`$\dfrac{16}{99}$`, r`$\dfrac{16}{90}$`, r`$\dfrac{4}{25}$`], ok: 0,
      sol: r`<p>Semiperiódico: $0{,}1\overline{6} = \dfrac{16 - 1}{90} = \dfrac{15}{90} = \dfrac{1}{6}$.</p><p>Comprobación: $1 : 6 = 0{,}1666\ldots$</p><p>$\dfrac{16}{99}$ lo trata como periódico puro; $\dfrac{16}{90}$ olvida restar el anteperíodo; $\dfrac{4}{25} = 0{,}16$ es el decimal finito.</p>`, conc: 'Semiperiódico: (todo − anteperíodo) / (9 por cada cifra del período, 0 por cada cifra del anteperíodo).' },
    { enun: r`<p>Considera los números $a = 0{,}4$, $b = \dfrac{3}{8}$, $c = 0{,}\overline{4}$ y $d = \dfrac{5}{12}$.</p><p>¿Cuál de los siguientes ordenamientos es correcto?</p>`,
      alts: [r`$a < b < d < c$`, r`$b < a < d < c$`, r`$b < d < a < c$`, r`$a < d < b < c$`], ok: 1,
      sol: r`<p>En decimal: $a = 0{,}4000$; $b = 0{,}3750$; $c = 0{,}4444\ldots$; $d = 0{,}4166\ldots$</p><p>Orden: $0{,}375 < 0{,}4 < 0{,}41\overline{6} < 0{,}\overline{4}$, es decir, $b < a < d < c$.</p>`, conc: 'Pasa todo a decimal con 4 cifras y compara.' },
    { enun: r`<p>¿Cuál de los siguientes números está entre $\dfrac{1}{3}$ y $\dfrac{1}{2}$?</p>`,
      alts: ['0,3', r`$0{,}\overline{3}$`, '0,55', '0,45'], ok: 3,
      sol: r`<p>$\dfrac{1}{3} = 0{,}333\ldots$ y $\dfrac{1}{2} = 0{,}5$. Entre ellos está $0{,}45$.</p><p>$0{,}3$ es menor que $\dfrac{1}{3}$; $0{,}\overline{3}$ es <b>igual</b> a $\dfrac{1}{3}$, así que no está entre ambos; $0{,}55$ es mayor que $\dfrac{1}{2}$.</p>`, conc: '0,3 < 1/3: el periódico 0,333… es un poco mayor.' },
    { enun: r`<p>En una carrera de 100 metros, cuatro atletas registraron los siguientes tiempos.</p><p>¿Quién ganó la carrera, es decir, quién hizo el <b>menor</b> tiempo?</p>`,
      fig: { type: 'table', head: ['Atleta', 'Tiempo (s)'], rows: [['Ana', '12,08'], ['Bea', '12,8'], ['Carla', '12,008'], ['Dora', '12,1']] },
      alts: ['Ana', 'Bea', 'Carla', 'Dora'], ok: 2,
      sol: r`<p>Con tres decimales: Ana $12{,}080$; Bea $12{,}800$; Carla $12{,}008$; Dora $12{,}100$.</p><p>El menor es $12{,}008$ s: ganó <b>Carla</b>. Bea hizo el mayor tiempo, aunque "8" parezca poco.</p>`, conc: 'Completa con ceros hasta igualar la cantidad de decimales.' },
    { enun: r`<p>¿Cuál es el valor de $0{,}3\cdot 0{,}02 : 0{,}1$?</p>`,
      alts: ['0,6', '0,06', '0,006', '0,0006'], ok: 1,
      sol: r`<p>De izquierda a derecha: $0{,}3\cdot 0{,}02 = 0{,}006$ (tres decimales). Dividir por $0{,}1$ es multiplicar por 10: $0{,}006 : 0{,}1 = 0{,}06$.</p><p>$0{,}006$ olvida la división; $0{,}0006$ divide por 10 en vez de multiplicar; $0{,}6$ corre la coma de más.</p>`, conc: 'Dividir por 0,1 = multiplicar por 10.' },
    { enun: r`<p>¿Cuál(es) de las siguientes afirmaciones es (son) verdadera(s)?</p><p>I) $0{,}\overline{9} = 1$<br>II) $0{,}5 < 0{,}\overline{4}$<br>III) $-0{,}7 < -0{,}69$</p>`,
      alts: ['Solo I y III', 'Solo I', 'Solo III', 'I, II y III'], ok: 0,
      sol: r`<p>I) $0{,}\overline{9} = \dfrac{9}{9} = 1$. Verdadera.</p><p>II) $0{,}\overline{4} = 0{,}444\ldots < 0{,}5$. Falsa.</p><p>III) $-0{,}70$ está a la izquierda de $-0{,}69$ en la recta. Verdadera.</p>`, conc: 'Entre negativos manda la recta: más a la izquierda, menor.' },
    { enun: r`<p>Una moneda tiene un grosor de $0{,}15$ cm.</p><p>¿Cuántas de estas monedas, apiladas una sobre otra, forman una torre de $2{,}4$ cm de altura?</p>`,
      alts: ['1,6', '0,36', '160', '16'], ok: 3,
      sol: r`<p>$2{,}4 : 0{,}15 = \dfrac{240}{15} = 16$ monedas (se amplificó por 100 para quitar la coma).</p><p>$0{,}36 = 2{,}4\cdot 0{,}15$ multiplica en vez de dividir; $1{,}6$ y $160$ son el resultado con la coma mal ubicada (además, no puede haber 1,6 monedas).</p>`, conc: 'Para dividir por un decimal, amplifica hasta que el divisor sea entero.' }
  ]
},

/* =====================================================================
   UNIDAD 2 · PORCENTAJE
   ===================================================================== */
{
  id: 'porcentaje', unit: 'Unidad 2 · Porcentaje', icon: '💯',
  title: 'Porcentaje',
  desc: 'El porcentaje como fracción de 100: el p % de una cantidad, qué porcentaje es una cantidad de otra y cómo encontrar el total.',
  slides: [
    { t: '¿Qué es un porcentaje?', b: r`
      <div class="cols"><div>
      <p>$p\,\%$ significa $p$ de cada 100: $p\,\% = \dfrac{p}{100}$.</p>
      <table><thead><tr><th>%</th><th>Decimal</th><th>Fracción</th></tr></thead><tbody>
      <tr><td>$50\%$</td><td>$0{,}5$</td><td>$\dfrac{1}{2}$</td></tr>
      <tr><td>$25\%$</td><td>$0{,}25$</td><td>$\dfrac{1}{4}$</td></tr>
      <tr><td>$20\%$</td><td>$0{,}2$</td><td>$\dfrac{1}{5}$</td></tr>
      <tr><td>$10\%$</td><td>$0{,}1$</td><td>$\dfrac{1}{10}$</td></tr>
      <tr><td>$12{,}5\%$</td><td>$0{,}125$</td><td>$\dfrac{1}{8}$</td></tr>
      <tr><td>$75\%$</td><td>$0{,}75$</td><td>$\dfrac{3}{4}$</td></tr></tbody></table>
      </div><div>
      <div class="box"><b>Justificar un porcentaje</b> "5 es el 25 % de 20" porque 5 es la <b>cuarta parte</b> de 20: $\dfrac{5}{20} = \dfrac{1}{4} = 25\%$.</div>
      <div class="box alert"><b>Más de 100 %</b> El 200 % de 15 es $2\cdot 15 = 30$. Un porcentaje mayor que 100 da una cantidad mayor que la original.</div>
      </div></div>` },
    { t: 'Los tres cálculos de porcentaje', b: r`
      <table><thead><tr><th>Pregunta</th><th>Fórmula</th><th>Ejemplo</th></tr></thead><tbody>
      <tr><td>¿Cuánto es el $p\%$ de $C$?</td><td>$\dfrac{p}{100}\cdot C$</td><td>$15\%$ de 480: $0{,}15\cdot 480 = 72$</td></tr>
      <tr><td>¿Qué % es $A$ de $B$?</td><td>$\dfrac{A}{B}\cdot 100\%$</td><td>120 de 3000: $\dfrac{120}{3000}\cdot 100\% = 4\%$</td></tr>
      <tr><td>$A$ es el $p\%$ de $T$, ¿cuánto es $T$?</td><td>$T = \dfrac{100\cdot A}{p}$</td><td>120 páginas son el 40 %: $T = \dfrac{100\cdot 120}{40} = 300$</td></tr></tbody></table>
      <div class="box alert" style="margin-top:14px"><b>Con letras</b> Si $p$ es el $25\%$ de $k$, entonces $p = \dfrac{25}{100}k$ y $k = \dfrac{100\cdot p}{25} = 4p$. La PAES pide muy seguido esta expresión despejada.</div>` },
    { t: 'Regla de tres y cálculo mental', b: r`
      <div class="cols"><div>
      <p>Todos los cálculos salen de una proporción directa:</p>
      <table><thead><tr><th>Cantidad</th><th>%</th></tr></thead><tbody>
      <tr><td>$C$ (total)</td><td>$100$</td></tr>
      <tr><td>$x$</td><td>$p$</td></tr></tbody></table>
      $$\frac{x}{C} = \frac{p}{100}$$
      </div><div>
      <div class="box"><b>Sin calculadora</b><br>· 10 %: correr la coma un lugar ($10\%$ de 360 = 36).<br>· 5 %: la mitad del 10 % (18).<br>· 1 %: correr la coma dos lugares (3,6).<br>· 15 % = 10 % + 5 % = $36 + 18 = 54$.</div>
      </div></div>` },
    { t: 'Porcentaje de un porcentaje', b: r`
      <div class="cols"><div>
      <p>"El $a\%$ del $b\%$ de $C$" se calcula <b>multiplicando</b>:</p>
      $$\frac{a}{100}\cdot\frac{b}{100}\cdot C$$
      <p>El 75 % del 75 % de 100: $0{,}75\cdot 0{,}75\cdot 100 = 56{,}25$.</p>
      </div><div>
      <div class="box"><b>Votación</b> El 45 % de los electores no votó, así que votó el 55 %. El ganador obtuvo 6 de cada 10 votos, es decir, el 60 % <b>de los que votaron</b>: $0{,}6\cdot 0{,}55 = 0{,}33 = 33\%$ de los electores.</div>
      <div class="box alert"><b>Error típico</b> Sumar o restar los porcentajes ($75\% + 75\%$, $60\% - 45\%$). Cuando un porcentaje se aplica sobre una parte, se multiplica.</div>
      </div></div>` },
    { t: 'Resumen', b: r`
      <table><thead><tr><th>Idea</th><th>Clave</th></tr></thead><tbody>
      <tr><td>$p\%$</td><td>$\dfrac{p}{100}$</td></tr>
      <tr><td>Parte</td><td>$\dfrac{p}{100}\cdot\text{total}$</td></tr>
      <tr><td>Porcentaje</td><td>$\dfrac{\text{parte}}{\text{total}}\cdot 100\%$</td></tr>
      <tr><td>Total</td><td>$\dfrac{100\cdot\text{parte}}{p}$</td></tr>
      <tr><td>% de un %</td><td>multiplicar los decimales</td></tr></tbody></table>
      <div class="box" style="margin-top:14px"><b>Método PAES</b> Identifica siempre <b>el total de referencia</b> ("con respecto a…", "de los que votaron", "del total de licencias clase A"). Casi todos los distractores usan un total equivocado o ponen el 100 en el lugar incorrecto.</div>` }
  ],
  example: {
    src: 'PAES Invierno 2026, adaptada',
    enun: r`<p>En una elección, el 40 % de los electores no votó y el candidato ganador obtuvo 7 de cada 10 votos.</p><p>¿Qué porcentaje de los electores votó por el candidato ganador?</p>`,
    alts: ['4,2 %', '28 %', '42 %', '70 %'], ok: 2,
    sol: r`<p>Votó el $100\% - 40\% = 60\%$ de los electores. El ganador obtuvo el $70\%$ de esos votos:</p>$$0{,}7\cdot 0{,}6 = 0{,}42 = 42\%$$<p>28 % aplica el 70 % a los que <b>no</b> votaron ($0{,}7\cdot 0{,}4$); 70 % es el porcentaje respecto de los votantes, no de los electores; 4,2 % es el resultado con la coma corrida.</p>`,
    conc: 'Un porcentaje de una parte se multiplica: 70 % del 60 % = 0,7 · 0,6.'
  },
  bank: [
    { enun: r`<p>¿Qué número corresponde al 15 % de 360?</p>`,
      alts: ['24', '36', '54', '2400'], ok: 2,
      sol: r`<p>$0{,}15\cdot 360 = 54$. Mentalmente: $10\%$ es 36, $5\%$ es 18, y $36 + 18 = 54$.</p><p>24 es $360 : 15$; 36 es solo el 10 %; 2400 es $\dfrac{360\cdot 100}{15}$, la fórmula del total.</p>`, conc: 'p % de C = (p/100) · C.' },
    { enun: r`<p>Si $p$ es el 20 % de $k$, ¿cuál de las siguientes expresiones representa el valor de $k$?</p>`,
      alts: [r`$\dfrac{20\cdot p}{100}$`, r`$\dfrac{100\cdot p}{20}$`, r`$\dfrac{100\cdot p}{80}$`, r`$\dfrac{80\cdot p}{100}$`], ok: 1,
      sol: r`<p>$p = \dfrac{20}{100}\cdot k$. Despejando: $k = \dfrac{100\cdot p}{20} = 5p$.</p><p>$\dfrac{20\cdot p}{100}$ calcula el 20 % de $p$, no de $k$. Las otras usan 80, que es el porcentaje que <b>no</b> corresponde a $p$.</p>`, conc: 'Si p es el a % de k, entonces k = 100 · p / a.' },
    { enun: r`<p>En un curso de 32 estudiantes, 8 usan lentes.</p><p>¿Qué porcentaje del curso usa lentes?</p>`,
      alts: ['4 %', '25 %', '75 %', '8 %'], ok: 1,
      sol: r`<p>$\dfrac{8}{32}\cdot 100\% = \dfrac{1}{4}\cdot 100\% = 25\%$.</p><p>4 % sale de $32 : 8$ (cociente al revés); 75 % es el porcentaje que <b>no</b> usa lentes; 8 % confunde la cantidad con el porcentaje.</p>`, conc: 'Porcentaje = parte / total · 100 %.' },
    { enun: r`<p>¿Cuál de las siguientes afirmaciones permite justificar que 6 es el 20 % de 30?</p>`,
      alts: ['Que 6 es divisor de 30.', 'Que 6 y 30 son múltiplos de 3.', 'Que 30 − 6 = 24.', 'Que 6 es la quinta parte de 30.'], ok: 3,
      sol: r`<p>$20\% = \dfrac{20}{100} = \dfrac{1}{5}$. Entonces el 20 % de 30 es la quinta parte de 30, y $30 : 5 = 6$.</p><p>Que 6 divida a 30 no dice qué porcentaje es (también 5 y 10 dividen a 30). Las otras dos afirmaciones son verdaderas, pero no tienen relación con el 20 %.</p>`, conc: '20 % = 1/5, 25 % = 1/4, 50 % = 1/2: úsalos para justificar.' },
    { enun: r`<p>Un estudiante ha leído 120 páginas de un libro, que corresponden al 40 % del total.</p><p>¿Cuántas páginas tiene el libro?</p>`,
      alts: ['48', '160', '168', '300'], ok: 3,
      sol: r`<p>$0{,}4\cdot T = 120 \Rightarrow T = \dfrac{120}{0{,}4} = \dfrac{100\cdot 120}{40} = 300$ páginas.</p><p>48 es el 40 % de 120; 160 suma $120 + 40$; 168 es $120\cdot 1{,}4$, que aumenta 120 en un 40 % en vez de encontrar el total.</p>`, conc: 'Conocida la parte y su porcentaje: total = parte / (p/100).' },
    { enun: r`<p>¿Cuánto es el 40 % del 30 % de 500?</p>`,
      alts: ['60', '6', '350', '6000'], ok: 0,
      sol: r`<p>$0{,}4\cdot 0{,}3\cdot 500 = 0{,}12\cdot 500 = 60$.</p><p>350 suma los porcentajes ($70\%$ de 500); 6000 multiplica $40\cdot 30\cdot 5$ sin dividir por 100 las dos veces; 6 corre la coma.</p>`, conc: 'Porcentaje de un porcentaje: se multiplican los decimales.' },
    { enun: r`<p>En la siguiente tabla se presenta la cantidad de estudiantes inscritos en cada taller de un colegio. Cada estudiante está inscrito en un solo taller.</p><p>¿Cuál de las siguientes expresiones representa el porcentaje de inscritos en ajedrez con respecto al total de inscritos en los talleres de <b>fútbol, básquetbol y ajedrez</b>?</p>`,
      fig: { type: 'table', head: ['Taller', 'Inscritos'], rows: [['Fútbol', 48], ['Básquetbol', 27], ['Ajedrez', 15], ['Teatro', 30]] },
      alts: [r`$\dfrac{15\cdot 100}{90}\%$`, r`$\dfrac{15}{90\cdot 100}\%$`, r`$\dfrac{15\cdot 100}{120}\%$`, r`$\dfrac{15}{120\cdot 100}\%$`], ok: 0,
      sol: r`<p>El total de referencia son solo tres talleres: $48 + 27 + 15 = 90$.</p><p>Porcentaje: $\dfrac{15}{90}\cdot 100\% = \dfrac{15\cdot 100}{90}\%$.</p><p>Las alternativas con 120 usan el total de todos los talleres (incluye teatro); las que tienen el 100 en el denominador dividen en vez de multiplicar.</p>`, conc: 'Lee "con respecto a…": ese es el denominador.' },
    { enun: r`<p>¿Cuál(es) de las siguientes afirmaciones es (son) verdadera(s)?</p><p>I) El 50 % de 80 es igual al 80 % de 50.<br>II) El 10 % de una cantidad es la décima parte de ella.<br>III) El 200 % de 15 es 17.</p>`,
      alts: ['Solo I', 'Solo II', 'Solo I y II', 'I, II y III'], ok: 2,
      sol: r`<p>I) $0{,}5\cdot 80 = 40$ y $0{,}8\cdot 50 = 40$. Verdadera: en general, $a\%$ de $b$ = $b\%$ de $a$.</p><p>II) $10\% = \dfrac{10}{100} = \dfrac{1}{10}$. Verdadera.</p><p>III) $200\%$ de 15 es $2\cdot 15 = 30$. Falsa: 17 sale de sumar 2 a 15.</p>`, conc: 'El a % de b es igual al b % de a.' }
  ]
},

{
  id: 'variacion_pct', unit: 'Unidad 2 · Porcentaje', icon: '🏷️',
  title: 'Aumentos, descuentos e interés',
  desc: 'Aumentar y descontar con un factor, porcentajes sucesivos, IVA, variación porcentual e interés simple y compuesto.',
  slides: [
    { t: 'El factor de cambio', b: r`
      <div class="cols"><div>
      <p>En vez de calcular el porcentaje y sumarlo o restarlo, se multiplica por un <b>factor</b>:</p>
      <ul><li>Aumentar un $p\%$: multiplicar por $\left(1 + \dfrac{p}{100}\right)$. Aumento de 12 % → $\cdot 1{,}12$.</li>
      <li>Descontar un $p\%$: multiplicar por $\left(1 - \dfrac{p}{100}\right)$. Descuento de 20 % → $\cdot 0{,}8$.</li></ul>
      </div><div>
      <div class="box"><b>Ejemplo</b> Un estacionamiento cobra 25 pesos por minuto y la tarifa sube un 12 %: $25\cdot 1{,}12 = 28$ pesos por minuto. Diez minutos cuestan $280$ pesos.</div>
      <div class="box alert"><b>Descuento de 20 %</b> significa pagar el <b>80 %</b>. Las alternativas PAES suelen poner $0{,}2$ donde va $0{,}8$.</div>
      </div></div>` },
    { t: 'Porcentajes sucesivos', b: r`
      <div class="cols"><div>
      <p>Cuando un cambio se aplica sobre el precio <b>ya cambiado</b>, los factores se multiplican:</p>
      <p>Rebaja de 20 % y luego de 25 % sobre el precio rebajado: $0{,}8\cdot 0{,}75 = 0{,}6$. Se paga el 60 %: el descuento total es <b>40 %</b>, no 45 %.</p>
      </div><div>
      <div class="box alert"><b>Subir y bajar lo mismo no deja igual</b> Subir 10 % y luego bajar 10 %: $1{,}1\cdot 0{,}9 = 0{,}99$. El precio final es 1 % menor que el original.</div>
      <div class="box"><b>Con expresiones</b> Precio 25.000, rebaja de 20 % y luego de 25 %: $0{,}8\cdot 0{,}75\cdot 25.000 = 15.000$ pesos.</div>
      </div></div>` },
    { t: 'Variación porcentual e IVA', b: r`
      <div class="cols"><div>
      $$\text{variación} = \frac{\text{final} - \text{inicial}}{\text{inicial}}\cdot 100\%$$
      <p>De 3000 a 3120 millones: $\dfrac{120}{3000}\cdot 100\% = 4\%$ de aumento.</p>
      <p>Siempre se divide por el valor <b>inicial</b>.</p>
      </div><div>
      <div class="box"><b>IVA (19 %)</b> Precio con IVA = neto $\cdot 1{,}19$. Para volver al neto se <b>divide</b> por 1,19: si el total es 23.800, el neto es $\dfrac{23.800}{1{,}19} = 20.000$.</div>
      <div class="box alert"><b>No</b> se obtiene el neto restando el 19 % del total: $23.800\cdot 0{,}81 = 19.278 \neq 20.000$. El 19 % se calculó sobre el neto, no sobre el total.</div>
      </div></div>` },
    { t: 'Interés simple y compuesto', b: r`
      <div class="cols"><div>
      <p><b>Interés simple</b>: cada período se gana el $i\%$ del capital <b>inicial</b>.</p>
      $$C_f = C_i\left(1 + \frac{i\cdot n}{100}\right)$$
      <p>100.000 pesos al 20 % simple mensual durante 5 meses: $100.000\cdot(1 + 1) = 200.000$.</p>
      </div><div>
      <p><b>Interés compuesto</b>: cada período se gana sobre lo acumulado.</p>
      $$C_f = C_i\left(1 + \frac{i}{100}\right)^n$$
      <p>100.000 pesos al 10 % compuesto por 2 años: $100.000\cdot 1{,}1^2 = 121.000$.</p>
      <div class="box">El mismo modelo sirve para poblaciones que crecen un porcentaje fijo por período: $F = P(1 + r)^t$.</div>
      </div></div>` },
    { t: 'Resumen', b: r`
      <table><thead><tr><th>Situación</th><th>Cálculo</th></tr></thead><tbody>
      <tr><td>Aumento de $p\%$</td><td>$C\cdot\left(1 + \dfrac{p}{100}\right)$</td></tr>
      <tr><td>Descuento de $p\%$</td><td>$C\cdot\left(1 - \dfrac{p}{100}\right)$</td></tr>
      <tr><td>Cambios sucesivos</td><td>multiplicar los factores</td></tr>
      <tr><td>Variación porcentual</td><td>$\dfrac{\text{final} - \text{inicial}}{\text{inicial}}\cdot 100\%$</td></tr>
      <tr><td>Quitar el IVA</td><td>dividir por $1{,}19$</td></tr>
      <tr><td>Interés simple / compuesto</td><td>$C_i\left(1 + \dfrac{in}{100}\right)$ / $C_i\left(1 + \dfrac{i}{100}\right)^n$</td></tr></tbody></table>
      <div class="box" style="margin-top:14px"><b>Método PAES</b> Escribe el factor de cada cambio, en el orden del enunciado, y multiplícalos. Revisa sobre qué monto se aplica cada descuento y si hay condiciones ("más de tres servicios", "sobre el precio ya rebajado").</div>` }
  ],
  example: {
    src: 'PAES Regular 2026, adaptada',
    enun: r`<p>Una tienda vendía un producto a <span class="peso">$30.000</span>. Como no se vendía lo suficiente, rebajó su precio un 20 %. Tiempo después, rebajó un 15 % el precio ya rebajado.</p><p>¿Cuál de las siguientes expresiones representa el precio del producto luego de los dos descuentos, en pesos?</p>`,
    alts: [r`$0{,}2\cdot 0{,}15\cdot 30.000$`, r`$(0{,}2 + 0{,}15)\cdot 30.000$`, r`$0{,}8\cdot 0{,}85\cdot 30.000$`, r`$(0{,}8 + 0{,}85)\cdot 30.000$`], ok: 2,
    sol: r`<p>Tras la primera rebaja se paga el 80 %: $0{,}8\cdot 30.000$. La segunda rebaja se aplica sobre ese precio, y se paga el 85 % de él:</p>$$0{,}85\cdot(0{,}8\cdot 30.000) = 0{,}8\cdot 0{,}85\cdot 30.000 = 20.400$$<p>$0{,}2\cdot 0{,}15\cdot 30.000$ multiplica los porcentajes de descuento, no lo que se paga; $(0{,}2 + 0{,}15)\cdot 30.000$ es el monto descontado si ambas rebajas fueran sobre el precio original; la última suma factores y da más que el precio inicial.</p>`,
    conc: 'Descuentos sucesivos: multiplicar los factores (1 − p/100).'
  },
  bank: [
    { enun: r`<p>Un estacionamiento cobra una tarifa de <span class="peso">$30</span> por cada minuto. Por un aumento de costos, la tarifa por minuto sube un 10 %.</p><p>¿Cuánto se debe pagar por usar el estacionamiento 20 minutos después del aumento?</p>`,
      alts: ['<span class="peso">$600</span>', '<span class="peso">$610</span>', '<span class="peso">$900</span>', '<span class="peso">$660</span>'], ok: 3,
      sol: r`<p>Nueva tarifa: $30\cdot 1{,}1 = 33$ pesos por minuto. Por 20 minutos: $33\cdot 20 = 660$ pesos.</p><p>600 es el precio sin aumento; 610 suma 10 pesos en vez de un 10 %; 900 calcula $30\cdot(20 + 10)$.</p>`, conc: 'Aumento de 10 % → multiplicar por 1,1.' },
    { enun: r`<p>El precio de un producto, con el IVA de 19 % incluido, es <span class="peso">$23.800</span>.</p><p>¿Cuál es el precio del producto sin IVA?</p>`,
      alts: ['<span class="peso">$4522</span>', '<span class="peso">$19.278</span>', '<span class="peso">$20.000</span>', '<span class="peso">$28.322</span>'], ok: 2,
      sol: r`<p>Precio con IVA = neto $\cdot 1{,}19$, así que neto $= \dfrac{23.800}{1{,}19} = 20.000$ pesos.</p><p>19.278 resta el 19 % del total ($23.800\cdot 0{,}81$), pero el 19 % se calcula sobre el neto; 4522 es el 19 % de 23.800; 28.322 agrega otra vez el IVA.</p>`, conc: 'Para quitar un aumento de p %, se divide por (1 + p/100).' },
    { enun: r`<p>Se estimó que en 2022 la cantidad de personas a las que les gustaba jugar videojuegos era de 2500 millones. En 2023 esa cantidad aumentó en 150 millones respecto del año anterior.</p><p>¿Cuál fue el porcentaje de aumento en 2023, respecto de 2022?</p>`,
      alts: ['1,5 %', '6 %', '15 %', '60 %'], ok: 1,
      sol: r`<p>$\dfrac{150}{2500}\cdot 100\% = \dfrac{15.000}{2500}\% = 6\%$.</p><p>1,5 % y 15 % toman el aumento (150) como si fuera el porcentaje; 60 % es un error al correr la coma.</p>`, conc: 'Variación % = aumento / valor inicial · 100 %.' },
    { enun: r`<p>Para calcular el monto final con un interés simple mensual del $i\,\%$ durante $n$ meses se usa la expresión $C_f = C_i\left(1 + \dfrac{i\cdot n}{100}\right)$, donde $C_i$ es el monto inicial.</p><p>Si se invierten <span class="peso">$200.000</span> a un interés simple mensual del 5 %, ¿cuánto dinero se tendrá después de 6 meses?</p>`,
      alts: ['<span class="peso">$60.000</span>', '<span class="peso">$210.000</span>', '<span class="peso">$260.000</span>', '<span class="peso">$268.019</span>'], ok: 2,
      sol: r`<p>$C_f = 200.000\cdot\left(1 + \dfrac{5\cdot 6}{100}\right) = 200.000\cdot 1{,}3 = 260.000$ pesos.</p><p>60.000 es solo el interés ganado; 210.000 considera un único mes; 268.019 es aproximadamente $200.000\cdot 1{,}05^6$, que corresponde a interés <b>compuesto</b>.</p>`, conc: 'Interés simple: el porcentaje siempre se calcula sobre el monto inicial.' },
    { enun: r`<p>El precio de un producto sube un 20 % y, un mes después, el nuevo precio baja un 20 %.</p><p>Con respecto al precio original, ¿qué ocurre con el precio final?</p>`,
      alts: ['Disminuye un 4 %.', 'Queda igual.', 'Aumenta un 4 %.', 'Disminuye un 40 %.'], ok: 0,
      sol: r`<p>Factores: $1{,}2\cdot 0{,}8 = 0{,}96$. El precio final es el 96 % del original: disminuye un 4 %.</p><p>No queda igual porque el 20 % de bajada se calcula sobre un precio mayor que el original. Por ejemplo, 100 pesos pasan a 120 y luego a 96.</p>`, conc: 'Subir y bajar el mismo % no se anula: 1,2 · 0,8 = 0,96.' },
    { enun: r`<p>Una empresa de lavado de autos cobra <span class="peso">$18.000</span> por el lavado exterior y un adicional de <span class="peso">$4000</span> por cada servicio extra. Si se contratan <b>más de tres</b> servicios extras, se descuenta un 10 % del total a pagar.</p><p>Si una persona contrata el lavado exterior con cuatro servicios extras, ¿cuánto debe pagar?</p>`,
      alts: ['<span class="peso">$30.600</span>', '<span class="peso">$32.400</span>', '<span class="peso">$34.000</span>', '<span class="peso">$37.400</span>'], ok: 0,
      sol: r`<p>Total sin descuento: $18.000 + 4\cdot 4000 = 34.000$ pesos. Como 4 es más de tres, hay descuento del 10 % sobre el total: $0{,}9\cdot 34.000 = 30.600$ pesos.</p><p>32.400 descuenta solo los extras ($18.000 + 0{,}9\cdot 16.000$); 34.000 no aplica el descuento; 37.400 suma el 10 % en vez de restarlo.</p>`, conc: 'Revisa la condición del descuento y sobre qué monto se aplica.' },
    { enun: r`<p>En 2020 la capacidad mundial de almacenamiento de datos era de 6,7 zettabytes. Según algunas estimaciones, esa capacidad aumentaría un 20 % cada año, respecto del año anterior.</p><p>¿Cuál de las siguientes expresiones representa la capacidad estimada para 2025, en zettabytes?</p>`,
      alts: [r`$6{,}7\cdot 0{,}2^5$`, r`$6{,}7\cdot(1 + 0{,}2\cdot 5)$`, r`$6{,}7 + 1{,}2^5$`, r`$6{,}7\cdot 1{,}2^5$`], ok: 3,
      sol: r`<p>Cada año se multiplica por $1{,}2$ lo del año anterior. De 2020 a 2025 hay 5 aumentos: $6{,}7\cdot 1{,}2^5$.</p><p>$6{,}7\cdot(1 + 0{,}2\cdot 5)$ calcula el 20 % siempre sobre 6,7 (crecimiento simple); $6{,}7\cdot 0{,}2^5$ usa el porcentaje sin el 1; la tercera suma en vez de multiplicar.</p>`, conc: 'Aumento de p % respecto del año anterior, n veces: (1 + p/100)ⁿ.' },
    { enun: r`<p>Una cafetería vende cada café a <span class="peso">$2000</span>, pero tiene una promoción: 5 cafés por <span class="peso">$8000</span>. Un grupo de cinco personas compra la promoción y divide el total en partes iguales.</p><p>¿Qué porcentaje de descuento obtuvo cada persona al pagar su café?</p>`,
      alts: ['4 %', '20 %', '25 %', '80 %'], ok: 1,
      sol: r`<p>Cada persona paga $8000 : 5 = 1600$ pesos en vez de 2000: ahorra 400 pesos.</p><p>Descuento: $\dfrac{400}{2000}\cdot 100\% = 20\%$.</p><p>25 % divide el ahorro por lo pagado ($\tfrac{400}{1600}$ o $\tfrac{2000}{8000}$); 80 % es lo que paga, no lo que se descuenta; 4 % divide el ahorro de una persona por el total sin promoción (10.000).</p>`, conc: 'El descuento se mide respecto del precio original.' }
  ]
},

/* =====================================================================
   UNIDAD 3 · POTENCIAS Y RAÍCES
   ===================================================================== */
{
  id: 'potencias', unit: 'Unidad 3 · Potencias y raíces', icon: '⚡',
  title: 'Potencias',
  desc: 'Propiedades de potencias de base racional, exponente cero, negativo y racional, notación científica y crecimiento por duplicación.',
  slides: [
    { t: '¿Qué es una potencia?', b: r`
      <div class="cols"><div>
      $$a^n = \underbrace{a\cdot a\cdots a}_{n \text{ veces}}$$
      <p>$a$ es la <b>base</b> y $n$ el <b>exponente</b>. Con base fracción: $\left(\dfrac{2}{3}\right)^3 = \dfrac{8}{27}$.</p>
      <p><b>Signo</b>: base negativa con exponente par da positivo, con exponente impar da negativo: $(-2)^6 = 64$, $(-2)^5 = -32$.</p>
      </div><div>
      <div class="box alert"><b>Tres confusiones</b><br>· $2^3 = 8$, no $2\cdot 3 = 6$.<br>· $-3^2 = -9$, pero $(-3)^2 = 9$.<br>· $(a + b)^2 \neq a^2 + b^2$: $(1 + 2)^2 = 9$ y $1^2 + 2^2 = 5$.</div>
      </div></div>` },
    { t: 'Propiedades', b: r`
      <table><thead><tr><th>Propiedad</th><th>Ejemplo</th></tr></thead><tbody>
      <tr><td>$a^m\cdot a^n = a^{m+n}$</td><td>$2^3\cdot 2^4 = 2^7$</td></tr>
      <tr><td>$a^m : a^n = a^{m-n}$</td><td>$5^6 : 5^2 = 5^4$</td></tr>
      <tr><td>$(a^m)^n = a^{m\cdot n}$</td><td>$(3^2)^3 = 3^6$</td></tr>
      <tr><td>$(a\cdot b)^n = a^n\cdot b^n$</td><td>$(2\cdot 5)^3 = 2^3\cdot 5^3 = 1000$</td></tr>
      <tr><td>$\left(\dfrac{a}{b}\right)^n = \dfrac{a^n}{b^n}$</td><td>$\left(\dfrac{3}{4}\right)^2 = \dfrac{9}{16}$</td></tr>
      <tr><td>$a^0 = 1$ ($a \neq 0$)</td><td>$7^0 = 1$</td></tr></tbody></table>
      <div class="box alert" style="margin-top:14px"><b>Solo con igual base</b> $2^3\cdot 3^4$ no se simplifica sumando exponentes. Para trabajar con bases distintas, descompón en primos: $4 = 2^2$, $27 = 3^3$, $125 = 5^3$.</div>` },
    { t: 'Exponente negativo y exponente racional', b: r`
      <div class="cols"><div>
      <p><b>Negativo</b>: invierte la base.</p>
      $$a^{-n} = \frac{1}{a^n} \qquad \left(\frac{2}{3}\right)^{-2} = \left(\frac{3}{2}\right)^2 = \frac{9}{4}$$
      <p>El signo del exponente no cambia el signo del resultado: $2^{-3} = \dfrac{1}{8} > 0$.</p>
      </div><div>
      <p><b>Racional</b>: el denominador del exponente es el índice de una raíz.</p>
      $$a^{\frac{m}{n}} = \sqrt[n]{a^m} = \left(\sqrt[n]{a}\right)^m$$
      <p>$8^{\frac{2}{3}} = \left(\sqrt[3]{8}\right)^2 = 2^2 = 4$ &nbsp; $16^{-\frac{1}{2}} = \dfrac{1}{\sqrt{16}} = \dfrac{1}{4}$</p>
      </div></div>` },
    { t: 'Notación científica', b: r`
      <div class="cols"><div>
      <p>Un número en notación científica es $a\cdot 10^n$ con $1 \le a < 10$ y $n$ entero.</p>
      <p>$150.000.000 = 1{,}5\cdot 10^8$ (la coma se corre 8 lugares a la izquierda).<br>$0{,}00045 = 4{,}5\cdot 10^{-4}$ (4 lugares a la derecha).</p>
      </div><div>
      <div class="box"><b>Operar</b> Se multiplican los coeficientes y se suman los exponentes, y luego se ajusta:
      $$(4\cdot 10^{-3})(5\cdot 10^6) = 20\cdot 10^3 = 2\cdot 10^4$$</div>
      <div class="box">Un <b>gúgol</b> es un 1 seguido de 100 ceros: $10^{100}$.</div>
      </div></div>` },
    { t: 'Crecimiento por duplicación', b: r`
      <div class="cols"><div>
      <p>Si una cantidad inicial $P$ se duplica en cada período, después de $t$ períodos hay $P\cdot 2^t$.</p>
      <p>100 bacterias que se duplican cada hora: en 24 horas hay $100\cdot 2^{24}$.</p>
      </div><div>
      <div class="box"><b>Al revés</b> Una bacteria se duplica cada 4 minutos. ¿Cuándo hay 64? Como $64 = 2^6$, se necesitan 6 duplicaciones: $6\cdot 4 = 24$ minutos.</div>
      <div class="box alert"><b>Ojo</b> $100\cdot 2^{24} \neq 200^{24}$: la potencia afecta solo al 2.</div>
      </div></div>` },
    { t: 'Resumen', b: r`
      <table><thead><tr><th>Caso</th><th>Regla</th></tr></thead><tbody>
      <tr><td>Multiplicar / dividir con igual base</td><td>sumar / restar exponentes</td></tr>
      <tr><td>Potencia de potencia</td><td>multiplicar exponentes</td></tr>
      <tr><td>Exponente 0</td><td>$a^0 = 1$</td></tr>
      <tr><td>Exponente negativo</td><td>invertir la base: $a^{-n} = \dfrac{1}{a^n}$</td></tr>
      <tr><td>Exponente racional</td><td>$a^{m/n} = \sqrt[n]{a^m}$</td></tr>
      <tr><td>Notación científica</td><td>$a\cdot 10^n$, $1 \le a < 10$</td></tr></tbody></table>
      <div class="box" style="margin-top:14px"><b>Método PAES</b> Descompón todas las bases en factores primos, agrupa por base y aplica las propiedades. En los problemas de "¿en cuál paso está el error?", el error típico es sumar exponentes donde había que multiplicarlos (o al revés).</div>` }
  ],
  example: {
    src: 'PAES Invierno 2026, adaptada',
    enun: r`<p>Se representará la expresión $(4\cdot 27)^3$ como producto de potencias de base 2 y 3, para lo cual se realiza el siguiente procedimiento, cometiéndose un error.</p><p>Paso 1: se reescriben los factores de la base, obteniéndose $(2^2\cdot 3^3)^3$.<br>Paso 2: se aplica la propiedad de la potencia de un producto, obteniéndose $(2^2)^3\cdot(3^3)^3$.<br>Paso 3: se aplica la propiedad de la potencia de una potencia, obteniéndose $2^{2+3}\cdot 3^{3+3}$.<br>Paso 4: se resuelve la suma de los exponentes, obteniéndose $2^5\cdot 3^6$.</p><p>¿En cuál de los pasos se cometió el error?</p>`,
    alts: ['En el Paso 1', 'En el Paso 2', 'En el Paso 3', 'En el Paso 4'], ok: 2,
    sol: r`<p>Paso 1: $4 = 2^2$ y $27 = 3^3$. Correcto. Paso 2: $(a\cdot b)^3 = a^3\cdot b^3$. Correcto.</p><p>Paso 3: en una potencia de potencia los exponentes se <b>multiplican</b>: $(2^2)^3 = 2^{2\cdot 3} = 2^6$ y $(3^3)^3 = 3^9$. Ahí se sumaron: es el error.</p><p>El Paso 4 suma bien lo que recibió. El resultado correcto es $2^6\cdot 3^9$.</p>`,
    conc: '(aᵐ)ⁿ = aᵐ·ⁿ: potencia de potencia multiplica exponentes.'
  },
  bank: [
    { enun: r`<p>¿Cuál es el valor de $\dfrac{2^5\cdot 3^2}{8\cdot 3}$?</p>`,
      alts: ['4', '12', '36', '288'], ok: 1,
      sol: r`<p>$8 = 2^3$. Entonces $\dfrac{2^5\cdot 3^2}{2^3\cdot 3} = 2^{5-3}\cdot 3^{2-1} = 2^2\cdot 3 = 12$.</p><p>4 simplifica los 2 pero olvida el 3; 36 es $2^2\cdot 3^2$, sin dividir por 3; 288 es solo el numerador.</p>`, conc: 'Descompón en primos y resta exponentes de igual base.' },
    { enun: r`<p>¿Cuál es el valor de $\left(\dfrac{2}{3}\right)^{-2}$?</p>`,
      alts: [r`$\dfrac{4}{9}$`, r`$-\dfrac{4}{9}$`, r`$-\dfrac{4}{3}$`, r`$\dfrac{9}{4}$`], ok: 3,
      sol: r`<p>Exponente negativo: se invierte la base. $\left(\dfrac{2}{3}\right)^{-2} = \left(\dfrac{3}{2}\right)^2 = \dfrac{9}{4}$.</p><p>$\dfrac{4}{9}$ ignora el signo del exponente; $-\dfrac{4}{9}$ cree que el exponente negativo hace negativo el resultado; $-\dfrac{4}{3}$ multiplica la base por $-2$.</p>`, conc: 'a⁻ⁿ = 1/aⁿ: el exponente negativo invierte, no cambia el signo.' },
    { enun: r`<p>Un gúgol es un número cuyos dígitos son un 1 seguido de cien ceros. Un gúgolplex es un número cuyos dígitos son un 1 seguido de un gúgol de ceros.</p><p>¿Cuál de los siguientes números equivale a un gúgolplex?</p>`,
      alts: [r`$10^{10^{100}}$`, r`$10^{100}\cdot 10^{100}$`, r`$2\cdot 10^{100}$`, r`$10^{101}$`], ok: 0,
      sol: r`<p>Un 1 seguido de $k$ ceros es $10^k$. El gúgol es $10^{100}$. Un gúgolplex tiene un gúgol de ceros: $10^{\text{gúgol}} = 10^{10^{100}}$.</p><p>$10^{100}\cdot 10^{100} = 10^{200}$ tiene solo 200 ceros; $2\cdot 10^{100}$ es el doble de un gúgol; $10^{101}$ tiene 101 ceros.</p>`, conc: '1 seguido de k ceros = 10ᵏ.' },
    { enun: r`<p>La distancia media entre la Tierra y el Sol es de aproximadamente 150.000.000 km.</p><p>¿Cuál de las siguientes expresiones representa esa distancia en notación científica?</p>`,
      alts: [r`$15\cdot 10^{8}$ km`, r`$1{,}5\cdot 10^{7}$ km`, r`$1{,}5\cdot 10^{8}$ km`, r`$1{,}5\cdot 10^{9}$ km`], ok: 2,
      sol: r`<p>Para llegar a $1{,}5$ se corre la coma 8 lugares a la izquierda: $150.000.000 = 1{,}5\cdot 10^8$.</p><p>$15\cdot 10^8$ vale el décuplo y además no cumple $1 \le a < 10$; $10^7$ y $10^9$ cuentan mal los lugares.</p>`, conc: 'Notación científica: 1 ≤ a < 10 y el exponente cuenta los lugares que se movió la coma.' },
    { enun: r`<p>En un laboratorio se determinó que un tipo de bacteria se duplica cada 5 minutos.</p><p>Si en un instante se tenía una de estas bacterias, ¿cuánto tiempo transcurrirá hasta tener 128 bacterias?</p>`,
      alts: ['7 minutos', '30 minutos', '35 minutos', '640 minutos'], ok: 2,
      sol: r`<p>Después de $t$ duplicaciones hay $2^t$ bacterias. Como $128 = 2^7$, se necesitan 7 duplicaciones de 5 minutos: $7\cdot 5 = 35$ minutos.</p><p>7 es la cantidad de duplicaciones, no el tiempo; 30 minutos da $2^6 = 64$ bacterias; 640 es $128\cdot 5$, como si aumentara de a una bacteria.</p>`, conc: 'Duplicar t veces = multiplicar por 2ᵗ.' },
    { enun: r`<p>¿Cuál es el valor de $27^{\frac{2}{3}}$?</p>`,
      alts: [r`$9$`, r`$18$`, r`$\dfrac{1}{9}$`, r`$\sqrt{27^3}$`], ok: 0,
      sol: r`<p>$27^{\frac{2}{3}} = \left(\sqrt[3]{27}\right)^2 = 3^2 = 9$.</p><p>18 multiplica $27\cdot\dfrac{2}{3}$; $\dfrac{1}{9}$ trata el exponente como negativo; $\sqrt{27^3} = 27^{\frac{3}{2}}$ invierte numerador y denominador del exponente.</p>`, conc: 'a^(m/n): el denominador n es el índice de la raíz.' },
    { enun: r`<p>¿Cuál(es) de las siguientes igualdades es (son) verdadera(s)?</p><p>I) $2^3\cdot 2^4 = 2^7$<br>II) $(3^2)^3 = 9^3$<br>III) $5^0 + 5^{-1} = \dfrac{6}{5}$</p>`,
      alts: ['Solo I', 'Solo I y II', 'Solo I y III', 'I, II y III'], ok: 3,
      sol: r`<p>I) Igual base: se suman los exponentes, $3 + 4 = 7$. Verdadera.</p><p>II) $(3^2)^3 = 9^3$, porque $3^2 = 9$. (También $= 3^6 = 729$.) Verdadera.</p><p>III) $5^0 = 1$ y $5^{-1} = \dfrac{1}{5}$, así que la suma es $\dfrac{6}{5}$. Verdadera.</p>`, conc: 'a⁰ = 1 y a⁻¹ = 1/a.' },
    { enun: r`<p>¿Cuál es el valor de $(4\cdot 10^{-3})\cdot(5\cdot 10^{6})$ en notación científica?</p>`,
      alts: [r`$2\cdot 10^{3}$`, r`$2\cdot 10^{4}$`, r`$20\cdot 10^{-18}$`, r`$9\cdot 10^{3}$`], ok: 1,
      sol: r`<p>Coeficientes: $4\cdot 5 = 20$. Potencias: $10^{-3}\cdot 10^6 = 10^3$. Resultado: $20\cdot 10^3 = 2\cdot 10\cdot 10^3 = 2\cdot 10^4$.</p><p>$2\cdot 10^3$ olvida ajustar el exponente al pasar de 20 a 2; $20\cdot 10^{-18}$ multiplica los exponentes; $9\cdot 10^3$ suma los coeficientes.</p>`, conc: 'Multiplica coeficientes, suma exponentes y ajusta a 1 ≤ a < 10.' }
  ]
},

{
  id: 'raices', unit: 'Unidad 3 · Potencias y raíces', icon: '🌱',
  title: 'Raíces enésimas',
  desc: 'Raíz como potencia de exponente racional, propiedades, descomposición en primos, raíces semejantes y racionalización.',
  slides: [
    { t: '¿Qué es una raíz enésima?', b: r`
      <div class="cols"><div>
      $$\sqrt[n]{a} = b \iff b^n = a$$
      <p>$\sqrt{49} = 7$ porque $7^2 = 49$; $\sqrt[3]{-8} = -2$ porque $(-2)^3 = -8$.</p>
      <p>En los reales, la raíz de <b>índice par</b> de un número negativo no existe: $\sqrt{-4} \notin \mathbb{R}$.</p>
      <p>Como potencia: $\sqrt[n]{a^m} = a^{\frac{m}{n}}$, por ejemplo $\sqrt{x} = x^{\frac{1}{2}}$.</p>
      </div><div>
      <div class="box alert"><b>La raíz no se reparte en sumas</b> $\sqrt{9 + 16} = \sqrt{25} = 5$, pero $\sqrt{9} + \sqrt{16} = 7$. En general, $\sqrt{a^2 + b^2} \neq a + b$.</div>
      </div></div>` },
    { t: 'Propiedades', b: r`
      <table><thead><tr><th>Propiedad</th><th>Ejemplo</th></tr></thead><tbody>
      <tr><td>$\sqrt[n]{a\cdot b} = \sqrt[n]{a}\cdot\sqrt[n]{b}$</td><td>$\sqrt{2}\cdot\sqrt{8} = \sqrt{16} = 4$</td></tr>
      <tr><td>$\sqrt[n]{\dfrac{a}{b}} = \dfrac{\sqrt[n]{a}}{\sqrt[n]{b}}$</td><td>$\sqrt{\dfrac{9}{25}} = \dfrac{3}{5}$</td></tr>
      <tr><td>$\left(\sqrt[n]{a}\right)^n = a$</td><td>$\left(\sqrt{3}\right)^2 = 3$</td></tr>
      <tr><td>$\sqrt[m]{\sqrt[n]{a}} = \sqrt[m\cdot n]{a}$</td><td>$\sqrt{\sqrt[3]{5}} = \sqrt[6]{5}$</td></tr></tbody></table>
      <div class="box alert" style="margin-top:14px"><b>Mismo índice</b> Solo se multiplican directamente raíces de igual índice. $\sqrt{5}\cdot\sqrt{5} = 5$, no $\sqrt{10}$. Si el índice es par, estas reglas valen para $a, b \geq 0$.</div>` },
    { t: 'Descomponer y simplificar', b: r`
      <div class="cols"><div>
      <p>Se busca el mayor factor que sea potencia exacta del índice:</p>
      <p>$\sqrt{72} = \sqrt{36\cdot 2} = 6\sqrt{2}$. Con primos: $72 = 2^3\cdot 3^2$, así que $\sqrt{72} = 2\cdot 3\cdot\sqrt{2}$.</p>
      <p>$\sqrt[3]{54} = \sqrt[3]{27\cdot 2} = 3\sqrt[3]{2}$.</p>
      </div><div>
      <div class="box"><b>Raíces semejantes</b> Mismo índice y mismo radicando: se suman los coeficientes.
      $$\sqrt{8} + \sqrt{18} = 2\sqrt{2} + 3\sqrt{2} = 5\sqrt{2}$$</div>
      <div class="box alert"><b>Error típico</b> $\sqrt{2} + \sqrt{3} \neq \sqrt{5}$. Si no son semejantes, la suma queda indicada.</div>
      </div></div>` },
    { t: 'Multiplicar expresiones con raíces', b: r`
      <div class="cols"><div>
      <p>Se multiplican los números de afuera entre sí y las raíces entre sí:</p>
      $$2\cdot\left(2\sqrt{3}\right)\cdot\sqrt{3} = 4\cdot\sqrt{3}\cdot\sqrt{3} = 4\cdot 3 = 12$$
      $$3\sqrt{2}\cdot 2\sqrt{5} = 6\sqrt{10}$$
      </div><div>
      <div class="box"><b>Suma por diferencia</b> $\left(\sqrt{5} + 1\right)\left(\sqrt{5} - 1\right) = 5 - 1 = 4$.</div>
      <div class="box"><b>En contexto</b> La diagonal de una caja de aristas $a$, $b$, $c$ mide $\sqrt{a^2 + b^2 + c^2}$. Si la diagonal mide $\sqrt{70}$ y dos aristas miden 3 y 5, la tercera cumple $9 + 25 + c^2 = 70$.</div>
      </div></div>` },
    { t: 'Racionalizar', b: r`
      <div class="cols"><div>
      <p><b>Racionalizar</b> es eliminar la raíz del denominador amplificando por ella:</p>
      $$\frac{6}{\sqrt{3}} = \frac{6}{\sqrt{3}}\cdot\frac{\sqrt{3}}{\sqrt{3}} = \frac{6\sqrt{3}}{3} = 2\sqrt{3}$$
      $$\frac{1}{\sqrt{2}} = \frac{\sqrt{2}}{2}$$
      </div><div>
      <div class="box"><b>Por qué funciona</b> Multiplicar por $\dfrac{\sqrt{a}}{\sqrt{a}} = 1$ no cambia el valor, y $\sqrt{a}\cdot\sqrt{a} = a$ deja un denominador entero.</div>
      </div></div>` },
    { t: 'Resumen', b: r`
      <table><thead><tr><th>Caso</th><th>Regla</th></tr></thead><tbody>
      <tr><td>Raíz como potencia</td><td>$\sqrt[n]{a^m} = a^{m/n}$</td></tr>
      <tr><td>Producto y cociente</td><td>se reparte: $\sqrt[n]{ab} = \sqrt[n]{a}\sqrt[n]{b}$</td></tr>
      <tr><td>Suma</td><td>no se reparte; solo se suman raíces semejantes</td></tr>
      <tr><td>Simplificar</td><td>sacar factores que sean potencia exacta del índice</td></tr>
      <tr><td>Racionalizar $\dfrac{k}{\sqrt{a}}$</td><td>$\dfrac{k\sqrt{a}}{a}$</td></tr></tbody></table>
      <div class="box" style="margin-top:14px"><b>Método PAES</b> Descompón cada radicando en primos, saca lo que puedas y recién ahí suma o multiplica. Si hay exponentes fraccionarios, pasa todo a potencias con la misma base y usa las propiedades de potencias.</div>` }
  ],
  example: {
    src: 'PAES Invierno 2026, adaptada',
    enun: r`<p>La diagonal de un prisma recto de base rectangular se calcula como $\sqrt{a^2 + b^2 + c^2}$, donde $a$, $b$ y $c$ son las medidas de sus aristas.</p><p>La diagonal de un prisma de este tipo mide $\sqrt{70}$ cm y dos de sus aristas miden 3 cm y 5 cm. ¿Cuánto mide la arista faltante?</p>`,
    alts: ['6 cm', '8 cm', '36 cm', '62 cm'], ok: 0,
    sol: r`<p>$\sqrt{3^2 + 5^2 + c^2} = \sqrt{70} \Rightarrow 9 + 25 + c^2 = 70 \Rightarrow c^2 = 36 \Rightarrow c = 6$ cm.</p><p>36 es $c^2$ (falta sacar la raíz); 62 resta $70 - 3 - 5$ sin elevar al cuadrado; 8 suma las aristas conocidas.</p>`,
    conc: 'Si dos raíces cuadradas son iguales, sus radicandos son iguales.'
  },
  bank: [
    { enun: r`<p>¿Cuál es el valor de $3\cdot\left(2\sqrt{5}\right)\cdot\sqrt{5}$?</p>`,
      alts: [r`$6\sqrt{10}$`, r`$30$`, r`$30\sqrt{5}$`, r`$60$`], ok: 1,
      sol: r`<p>$3\cdot 2\cdot\sqrt{5}\cdot\sqrt{5} = 6\cdot 5 = 30$, porque $\sqrt{5}\cdot\sqrt{5} = 5$.</p><p>$6\sqrt{10}$ toma $\sqrt{5}\cdot\sqrt{5}$ como $\sqrt{10}$; $30\sqrt{5}$ deja una raíz sin multiplicar; 60 calcula $6\cdot 10$.</p>`, conc: '√a · √a = a.' },
    { enun: r`<p>¿Cuál es el resultado de $\sqrt{72} + \sqrt{8}$?</p>`,
      alts: [r`$\sqrt{80}$`, r`$6\sqrt{2}$`, r`$8\sqrt{4}$`, r`$8\sqrt{2}$`], ok: 3,
      sol: r`<p>$\sqrt{72} = \sqrt{36\cdot 2} = 6\sqrt{2}$ y $\sqrt{8} = \sqrt{4\cdot 2} = 2\sqrt{2}$. Son semejantes: $6\sqrt{2} + 2\sqrt{2} = 8\sqrt{2}$.</p><p>$\sqrt{80}$ suma los radicandos, lo que no está permitido; $6\sqrt{2}$ olvida el segundo término; $8\sqrt{4}$ suma también los radicandos $2 + 2$.</p>`, conc: 'Primero simplificar; luego sumar solo raíces semejantes.' },
    { enun: r`<p>¿Cuál de las siguientes expresiones es igual a $\dfrac{10}{\sqrt{5}}$?</p>`,
      alts: [r`$2\sqrt{5}$`, r`$10\sqrt{5}$`, r`$\dfrac{\sqrt{5}}{2}$`, r`$\sqrt{2}$`], ok: 0,
      sol: r`<p>$\dfrac{10}{\sqrt{5}}\cdot\dfrac{\sqrt{5}}{\sqrt{5}} = \dfrac{10\sqrt{5}}{5} = 2\sqrt{5}$.</p><p>$10\sqrt{5}$ olvida dividir por 5; $\dfrac{\sqrt{5}}{2}$ invierte la fracción; $\sqrt{2} = \sqrt{\tfrac{10}{5}}$ mete el 10 dentro de la raíz.</p>`, conc: 'Racionalizar: amplificar por la raíz del denominador.' },
    { enun: r`<p>Si $x > 0$, ¿cuál de las siguientes expresiones es igual a $\sqrt[3]{x^2}\cdot\sqrt{x}$?</p>`,
      alts: [r`$x^{\frac{1}{3}}$`, r`$x^{\frac{1}{6}}$`, r`$x^{\frac{7}{6}}$`, r`$x^{\frac{3}{5}}$`], ok: 2,
      sol: r`<p>$\sqrt[3]{x^2} = x^{\frac{2}{3}}$ y $\sqrt{x} = x^{\frac{1}{2}}$. Al multiplicar se suman los exponentes: $\dfrac{2}{3} + \dfrac{1}{2} = \dfrac{4}{6} + \dfrac{3}{6} = \dfrac{7}{6}$.</p><p>$x^{\frac{1}{3}}$ multiplica los exponentes; $x^{\frac{1}{6}}$ los resta; $x^{\frac{3}{5}}$ suma numeradores y denominadores.</p>`, conc: 'Raíces de distinto índice: pásalas a potencias y suma exponentes.' },
    { enun: r`<p>¿Cuál(es) de las siguientes igualdades es (son) verdadera(s)?</p><p>I) $\sqrt{9 + 16} = 7$<br>II) $\sqrt{0{,}04} = 0{,}2$<br>III) $\sqrt[3]{-27} = -3$</p>`,
      alts: ['Solo II', 'Solo III', 'Solo II y III', 'I, II y III'], ok: 2,
      sol: r`<p>I) $\sqrt{9 + 16} = \sqrt{25} = 5$. Falsa: 7 es $\sqrt{9} + \sqrt{16}$.</p><p>II) $0{,}2^2 = 0{,}04$. Verdadera.</p><p>III) $(-3)^3 = -27$ y el índice es impar. Verdadera.</p>`, conc: 'La raíz no se reparte en sumas; las de índice impar admiten negativos.' },
    { enun: r`<p>Un terreno cuadrado tiene un área de 180 m².</p><p>¿Cuánto mide cada lado del terreno?</p>`,
      alts: [r`$6\sqrt{5}$ m`, r`$5\sqrt{6}$ m`, r`$45$ m`, r`$90$ m`], ok: 0,
      sol: r`<p>Lado $= \sqrt{180} = \sqrt{36\cdot 5} = 6\sqrt{5}$ m (entre 13 y 14 m).</p><p>$5\sqrt{6} = \sqrt{150}$ intercambia los números; 45 divide el área por 4, como si fuera el perímetro; 90 la divide por 2.</p>`, conc: 'Lado del cuadrado = √área; simplifica sacando el mayor cuadrado perfecto.' },
    { enun: r`<p>¿Cuál es el resultado de $\sqrt[3]{54} + \sqrt[3]{16}$?</p>`,
      alts: [r`$\sqrt[3]{70}$`, r`$6\sqrt[3]{2}$`, r`$5\sqrt[3]{4}$`, r`$5\sqrt[3]{2}$`], ok: 3,
      sol: r`<p>$54 = 27\cdot 2$ y $16 = 8\cdot 2$, con $27 = 3^3$ y $8 = 2^3$. Entonces $\sqrt[3]{54} = 3\sqrt[3]{2}$ y $\sqrt[3]{16} = 2\sqrt[3]{2}$.</p><p>Suma: $3\sqrt[3]{2} + 2\sqrt[3]{2} = 5\sqrt[3]{2}$.</p><p>$\sqrt[3]{70}$ suma radicandos; $6\sqrt[3]{2}$ multiplica los coeficientes; $5\sqrt[3]{4}$ suma también los radicandos.</p>`, conc: 'Raíz cúbica: busca factores que sean cubos perfectos (8, 27, 64, 125).' },
    { enun: r`<p>Para simplificar $\sqrt{50} - \sqrt{18} + \sqrt{2}$ se realizó el siguiente procedimiento, cometiéndose un error.</p><p>Paso 1: se descompone cada radicando, obteniéndose $\sqrt{25\cdot 2} - \sqrt{9\cdot 2} + \sqrt{2}$.<br>Paso 2: se extraen las raíces exactas, obteniéndose $25\sqrt{2} - 9\sqrt{2} + \sqrt{2}$.<br>Paso 3: se factoriza por $\sqrt{2}$, obteniéndose $(25 - 9 + 1)\sqrt{2}$.<br>Paso 4: se resuelve el paréntesis, obteniéndose $17\sqrt{2}$.</p><p>¿En cuál de los pasos se cometió el error?</p>`,
      alts: ['En el Paso 1', 'En el Paso 2', 'En el Paso 3', 'En el Paso 4'], ok: 1,
      sol: r`<p>El Paso 1 es correcto. En el Paso 2 hay que sacar la <b>raíz</b> de 25 y de 9: $\sqrt{25\cdot 2} = 5\sqrt{2}$ y $\sqrt{9\cdot 2} = 3\sqrt{2}$. Se sacaron 25 y 9 sin extraer la raíz.</p><p>Los pasos 3 y 4 están bien hechos a partir de lo anterior. Lo correcto es $(5 - 3 + 1)\sqrt{2} = 3\sqrt{2}$.</p>`, conc: 'Al sacar un factor de la raíz, sale su raíz: √(25·2) = 5√2.' }
  ]
}
];
