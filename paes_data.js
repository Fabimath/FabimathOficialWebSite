/* Contenido de "PAES Estadística y Probabilidad" (Fabimath).
   Temario oficial PAES M1 Admisión 2027, eje Probabilidad y Estadística:
     1. Representación de datos a través de tablas y gráficos (frecuencias, gráficos, promedio).
     2. Medidas de posición (cuartiles, percentiles, diagrama de cajón).
     3. Reglas de las probabilidades (probabilidad de un evento, regla aditiva y multiplicativa).
   Estilo de preguntas tomado de las tres últimas pruebas publicadas por el DEMRE
   (PAES Invierno 2026, selección PAES Regular 2026 y PAES Invierno 2027), en paes/fuentes/.
   Notación: PAES (promedio, frecuencia, "al menos") mezclada con la de AES500
   (f_i, h_i, F_i, H_i, x̄, Q1, Me, Q3, P_k, ℙ(A), Ω, #).
   Cada pregunta: enun (HTML + $latex$), fig opcional, alts (4), ok (índice correcto), sol, conc. */
const r = String.raw;

const TOPICS = [

/* =====================================================================
   UNIDAD 1 · TABLAS Y GRÁFICOS
   ===================================================================== */
{
  id: 'tablas', unit: 'Unidad 1 · Representación de datos', icon: '📋',
  title: 'Tablas de frecuencia',
  desc: 'Frecuencia absoluta, relativa y acumulada. Leer "al menos", "a lo más" y categorías como "5 o más".',
  slides: [
    { t: '¿Para qué sirve una tabla de frecuencia?', b: r`
      <p>Cuando tenemos muchos datos, la tabla los <b>resume</b>: en una columna van los valores o categorías y en la otra, cuántas veces aparece cada uno.</p>
      <div class="box"><b>Vocabulario</b><br>
      · $x_i$: valor o categoría de la fila $i$.<br>
      · $f_i$: <b>frecuencia absoluta</b>, cuántos datos hay con ese valor (la PAES le dice "cantidad" o "frecuencia").<br>
      · $n = \sum f_i$: el <b>total</b> de datos. Siempre se obtiene sumando toda la columna de frecuencias.</div>
      <p>Ejemplo: puntajes de una prueba en un curso.</p>
      <div class="qfig">${''}</div>` },
    { t: 'Frecuencia relativa: la parte del total', b: r`
      <div class="cols"><div>
      <p>La <b>frecuencia relativa</b> convierte la cantidad en una fracción del total:</p>
      $$h_i = \frac{f_i}{n} \qquad h_i\% = \frac{f_i}{n}\cdot 100\%$$
      <p>Las $h_i$ siempre suman $1$ (o $100\%$).</p>
      <div class="box alert"><b>Ojo</b> La PAES casi siempre pide la <b>expresión</b>, no el número: por ejemplo $\frac{13}{50}\cdot 100\%$. Aprende a reconocer el numerador (los casos que cumplen) y el denominador ($n$).</div>
      </div><div>
      <table><thead><tr><th>Mascotas</th><th>$f_i$</th><th>$h_i$</th></tr></thead><tbody>
      <tr><td>0</td><td>12</td><td>$12/50 = 0{,}24$</td></tr>
      <tr><td>1</td><td>10</td><td>$0{,}20$</td></tr>
      <tr><td>2</td><td>15</td><td>$0{,}30$</td></tr>
      <tr><td>3</td><td>6</td><td>$0{,}12$</td></tr>
      <tr><td>4</td><td>5</td><td>$0{,}10$</td></tr>
      <tr><td>5 o más</td><td>2</td><td>$0{,}04$</td></tr>
      <tr><th>Total</th><th>$n=50$</th><th>$1$</th></tr></tbody></table>
      </div></div>` },
    { t: 'Frecuencias acumuladas: "a lo más" y "al menos"', b: r`
      <p>La <b>acumulada</b> $F_i$ suma las frecuencias desde la primera fila hasta la fila $i$; $H_i = F_i / n$ es la relativa acumulada.</p>
      <div class="cols"><div>
      <div class="box"><b>Traducción</b><br>
      · "<b>a lo más</b> 2" = 2 o menos $\Rightarrow$ $F$ hasta la fila 2.<br>
      · "<b>al menos</b> 3" = 3 o más $\Rightarrow$ se suman las filas desde 3 hasta el final, o bien $n - F_2$.<br>
      · "<b>más de</b> 3" = 4 o más (el 3 no entra).<br>
      · "<b>menos de</b> 3" = 0, 1 o 2.</div>
      </div><div>
      <p>Con la tabla de mascotas ($n=50$):</p>
      <p>Familias con <b>3 o más</b> mascotas: $6 + 5 + 2 = 13$.<br>
      Porcentaje: $\dfrac{13}{50}\cdot 100\% = 26\%$.</p>
      <p>Familias con <b>a lo más 2</b>: $12 + 10 + 15 = 37$, es decir $F_3 = 37$ y $H_3 = 0{,}74$.</p>
      </div></div>` },
    { t: 'Categorías abiertas e intervalos', b: r`
      <p>Muchas tablas PAES traen filas como <b>"5 o más"</b> o intervalos como <b>18 – 24 años</b>. Ahí no sabemos el valor exacto de cada dato, solo cuántos hay en la fila.</p>
      <div class="box alert"><b>Pregunta típica</b> "¿Cuál es la <b>mayor</b> cantidad de trabajadores que podría tener a lo más 40 años?" Si la tabla tiene la fila 35 – 44 con 14 personas, <b>todas</b> podrían tener 40 o menos: se suman completas las filas anteriores más esa fila. Si preguntan la <b>menor</b> cantidad, esa fila aporta 0.</div>
      <p>Regla práctica: cuando el límite pedido cae <b>dentro</b> de un intervalo, la fila entera cuenta para el máximo y nada para el mínimo. Cuando el límite coincide con el borde del intervalo, no hay duda.</p>` },
    { t: 'Resumen', b: r`
      <table><thead><tr><th>Símbolo</th><th>Qué es</th><th>Cómo se calcula</th></tr></thead><tbody>
      <tr><td>$f_i$</td><td>frecuencia absoluta</td><td>se cuenta</td></tr>
      <tr><td>$n$</td><td>total de datos</td><td>$\sum f_i$</td></tr>
      <tr><td>$h_i$</td><td>frecuencia relativa</td><td>$f_i / n$ (o $\cdot 100\%$)</td></tr>
      <tr><td>$F_i$</td><td>acumulada</td><td>$f_1 + \dots + f_i$</td></tr>
      <tr><td>$H_i$</td><td>relativa acumulada</td><td>$F_i / n$</td></tr></tbody></table>
      <div class="box" style="margin-top:14px"><b>Método PAES</b> 1) Lee la condición y márcala en la tabla ("3 o más" = tres filas). 2) Suma esas frecuencias. 3) Si piden porcentaje, divide por $n$ y multiplica por 100. 4) Compara con las alternativas: suelen poner el numerador correcto con denominador equivocado y viceversa.</div>` }
  ],
  example: {
    src: 'PAES Invierno 2027, adaptada',
    enun: r`<p>En la siguiente tabla se presenta el tiempo que las personas han trabajado en un colegio.</p>`,
    fig: { type: 'table', head: ['Tiempo de trabajo en años', 'Cantidad de personas'], rows: [['1', 2], ['2', 4], ['3', 5], ['4', 4], ['5', 2], ['6', 6], ['7', 2], ['8', 5], ['9', 3], ['10', 2]] },
    alts: ['12', '17', '18', '23'], ok: 2,
    sol: r`<p>"Como mínimo 6 años" significa <b>6 o más</b>: se suman las filas 6, 7, 8, 9 y 10.</p><p>$f_6 + f_7 + f_8 + f_9 + f_{10} = 6 + 2 + 5 + 3 + 2 = 18$ personas.</p><p>Los distractores: 12 es sumar desde 7 (dejar fuera el 6); 17 es sumar de 1 a 5 (los que <b>no</b> reciben bono); 23 es sumar desde 5.</p>`,
    conc: '"Como mínimo 6" incluye al 6. Marca las filas antes de sumar.'
  },
  bank: [
    { enun: r`<p>En la siguiente tabla se resume la distribución de los puntajes de una prueba en un curso.</p><p>¿Cuál es el total de estudiantes del curso que rindió la prueba?</p>`,
      fig: { type: 'table', head: ['Puntaje', 'Frecuencia'], rows: [['1', 2], ['2', 4], ['3', 4], ['4', 5], ['5', 7], ['6', 3], ['7', 5]] },
      alts: ['7', '21', '30', '63'], ok: 2,
      sol: r`<p>El total es la suma de la columna de frecuencias: $n = 2+4+4+5+7+3+5 = 30$.</p><p>7 es la cantidad de filas, 21 no viene de nada y 63 es sumar los puntajes multiplicados: ninguno es el total de estudiantes.</p>`, conc: 'n = suma de las f_i, nunca de los valores.' },
    { enun: r`<p>Una municipalidad realizó una encuesta sobre la cantidad de mascotas por familia en cierto sector. Los resultados se presentan en la siguiente tabla.</p><p>La municipalidad dará un beneficio a las familias que tengan <b>a lo más 2</b> mascotas. ¿Cuál de las siguientes expresiones representa el porcentaje de familias beneficiadas?</p>`,
      fig: { type: 'table', head: ['Cantidad de mascotas', 'Cantidad de familias'], rows: [['0', 12], ['1', 10], ['2', 15], ['3', 6], ['4', 5], ['5 o más', 2]] },
      alts: [r`$\dfrac{37}{50}\cdot 100\%$`, r`$\dfrac{13}{50}\cdot 100\%$`, r`$\dfrac{25}{50}\cdot 100\%$`, r`$\dfrac{37}{13}\cdot 100\%$`], ok: 0,
      sol: r`<p>Total de familias: $n = 12+10+15+6+5+2 = 50$.</p><p>"A lo más 2" = 0, 1 o 2 mascotas: $F_3 = 12 + 10 + 15 = 37$.</p><p>Porcentaje: $h = \dfrac{37}{50}\cdot 100\% = 74\%$.</p>`, conc: 'A lo más 2 → acumulada hasta la fila del 2. El denominador siempre es n.' },
    { enun: r`<p>En un curso de 40 estudiantes se preguntó cuántos hermanos tiene cada uno. Seis estudiantes respondieron que tienen 3 hermanos.</p><p>¿Cuál es la frecuencia relativa porcentual de los estudiantes que tienen 3 hermanos?</p>`,
      alts: ['6 %', '15 %', '20 %', '25 %'], ok: 1,
      sol: r`<p>$h_i\% = \dfrac{f_i}{n}\cdot 100\% = \dfrac{6}{40}\cdot 100\% = 0{,}15 \cdot 100\% = 15\%$.</p>`, conc: 'Relativa = parte / total.' },
    { enun: r`<p>El encargado de personal de una empresa resume las edades de sus trabajadores en la siguiente tabla.</p><p>La empresa dará un beneficio a los trabajadores cuya edad <b>no supere los 40 años</b>. ¿Cuál es la <b>mayor</b> cantidad de trabajadores que podría acceder al beneficio?</p>`,
      fig: { type: 'table', head: ['Edad en años', 'Cantidad'], rows: [['18 – 24', 5], ['25 – 34', 7], ['35 – 44', 14], ['45 – 54', 11], ['55 o más', 13]] },
      alts: ['12', '14', '26', '37'], ok: 2,
      sol: r`<p>Las filas 18 – 24 y 25 – 34 cumplen seguro: $5 + 7 = 12$.</p><p>La fila 35 – 44 contiene el límite 40: en el <b>mejor caso</b> los 14 tienen 40 años o menos, así que el máximo es $12 + 14 = 26$.</p><p>12 sería la <b>menor</b> cantidad posible; 37 incluye la fila 45 – 54, que no cumple.</p>`, conc: 'Cuando el límite cae dentro de un intervalo: la fila completa para el máximo, cero para el mínimo.' },
    { enun: r`<p>En una tabla de frecuencias de los goles anotados por partido, la frecuencia acumulada de la tercera fila es $F_3 = 20$ y la de la segunda fila es $F_2 = 14$.</p><p>¿Cuál es la frecuencia absoluta $f_3$ de la tercera fila?</p>`,
      alts: ['6', '14', '20', '34'], ok: 0,
      sol: r`<p>Como $F_3 = F_2 + f_3$, se despeja $f_3 = F_3 - F_2 = 20 - 14 = 6$.</p>`, conc: 'La acumulada crece fila a fila: la diferencia entre acumuladas consecutivas es la frecuencia de la fila.' },
    { enun: r`<p>En una encuesta a 200 personas sobre su medio de transporte, el gráfico de frecuencias relativas mostró que el 35 % usa bus.</p><p>¿Cuántas personas encuestadas usan bus?</p>`,
      alts: ['35', '65', '70', '130'], ok: 2,
      sol: r`<p>De $h_i = \dfrac{f_i}{n}$ se despeja $f_i = h_i \cdot n = 0{,}35 \cdot 200 = 70$ personas.</p><p>130 son las que <b>no</b> usan bus ($65\%$ de 200).</p>`, conc: 'Porcentaje → cantidad: multiplicar por n.' },
    { enun: r`<p>La siguiente tabla muestra la frecuencia relativa de las notas finales de un curso.</p><p>¿Qué porcentaje de los estudiantes obtuvo nota <b>al menos 6</b>?</p>`,
      fig: { type: 'table', head: ['Nota', '$h_i$'], rows: [['4', '0,10'], ['5', '0,25'], ['6', '0,40'], ['7', '0,25']] },
      alts: ['40 %', '60 %', '65 %', '75 %'], ok: 2,
      sol: r`<p>"Al menos 6" = nota 6 o 7: $h_6 + h_7 = 0{,}40 + 0{,}25 = 0{,}65 = 65\%$.</p><p>Otra forma: $1 - H_5 = 1 - (0{,}10 + 0{,}25) = 0{,}65$.</p>`, conc: 'Con frecuencias relativas se suma directo; "al menos" incluye el valor.' },
    { enun: r`<p>En las tablas se presenta la cantidad de estudiantes con "baja" y "no baja" asistencia en los distintos niveles de un colegio.</p><p>El colegio hará seguimiento primero al nivel con <b>mayor porcentaje</b> de estudiantes con baja asistencia. ¿Con cuál nivel se comenzará?</p>`,
      fig: { type: 'table', head: ['Nivel', 'Baja', 'No baja'], rows: [['Primeros medios', 20, 60], ['Segundos medios', 25, 100], ['Terceros medios', 20, 100], ['Cuartos medios', 25, 150]] },
      alts: ['Con los primeros medios', 'Con los segundos medios', 'Con los terceros medios', 'Con los cuartos medios'], ok: 0,
      sol: r`<p>Se compara la frecuencia relativa de "baja" en cada nivel ($n$ es el total del nivel):</p><p>1.°: $\dfrac{20}{80} = 25\%$; 2.°: $\dfrac{25}{125} = 20\%$; 3.°: $\dfrac{20}{120} \approx 16{,}7\%$; 4.°: $\dfrac{25}{175} \approx 14{,}3\%$.</p><p>El mayor porcentaje es el de los primeros medios, aunque los segundos y cuartos tengan más alumnos con baja asistencia en cantidad.</p>`, conc: 'Comparar grupos de distinto tamaño exige porcentajes, no cantidades.' }
  ]
},

{
  id: 'graficos', unit: 'Unidad 1 · Representación de datos', icon: '📊',
  title: 'Gráficos',
  desc: 'Barras, circular, líneas y pictogramas: leer, comparar, elegir el gráfico correcto y detectar escalas engañosas.',
  slides: [
    { t: 'Cada gráfico cuenta algo distinto', b: r`
      <div class="cols"><div>
      <p><b>Barras</b>: compara categorías. La altura es $f_i$ (o $h_i\%$).</p>
      <p><b>Circular</b>: muestra partes de un todo. Cada sector es $h_i$; el ángulo es $h_i \cdot 360^\circ$.</p>
      <p><b>Líneas</b>: evolución en el tiempo (meses, años). Interesa la tendencia, los máximos y mínimos, las subidas y bajadas.</p>
      <p><b>Pictograma</b>: cada ícono vale una cantidad fija ("cada 👤 representa 4 personas").</p>
      </div><div>
      <div class="box"><b>Para elegir gráfico</b><br>· ¿categorías que se comparan? → barras.<br>· ¿porcentajes que suman 100 %? → circular.<br>· ¿algo que cambia en el tiempo? → líneas.</div>
      <div class="box alert"><b>La PAES pregunta</b> "¿cuál de los gráficos representa mejor esta información?" o "¿cuál afirmación se deduce del gráfico?". No calcules de más: lee el eje, la escala y la leyenda.</div>
      </div></div>` },
    { t: 'Gráfico circular: del porcentaje al ángulo y a la cantidad', b: r`
      <div class="cols"><div>
      $$\text{ángulo}_i = h_i \cdot 360^\circ \qquad f_i = h_i \cdot n$$
      <p>Un sector de $90^\circ$ es $\dfrac{90}{360} = \dfrac{1}{4} = 25\%$ del total.</p>
      <p>Si el total es $n = 240$ personas, ese sector son $0{,}25 \cdot 240 = 60$ personas.</p>
      </div><div>
      <div class="box"><b>Al revés</b> Si conoces la cantidad de un sector y su porcentaje, obtienes el total:
      $$n = \frac{f_i}{h_i}$$
      Semillas fueron 85 artículos y son el 25 %: $n = \dfrac{85}{0{,}25} = 340$.</div>
      </div></div>` },
    { t: 'Gráfico de líneas: leer la evolución', b: r`
      <div class="cols"><div>
      <ul><li><b>Máximo / mínimo</b>: el punto más alto y el más bajo.</li>
      <li><b>Aumentó mes a mes</b>: cada punto está más arriba que el anterior. Basta una bajada para que sea falso.</li>
      <li><b>Mayor aumento</b>: la diferencia más grande entre dos puntos consecutivos, no el punto más alto.</li>
      <li>Si un mes no aparece en el eje, el gráfico <b>no informa nada</b> de ese mes.</li></ul>
      </div><div>
      <div class="box alert"><b>Afirmaciones típicas</b> "Hasta agosto la producción aumentó mes a mes" se verifica punto por punto. "En enero no hubo producción" es falsa si enero simplemente no está en el gráfico: ausencia de dato no es cero.</div>
      </div></div>` },
    { t: 'Gráficos engañosos', b: r`
      <p>La PAES incluye preguntas de <b>argumentar</b>: por qué un gráfico dificulta la comparación.</p>
      <ul><li><b>Escalas distintas</b> en dos gráficos que se comparan: una barra del 20 % puede verse más alta que otra del 30 %.</li>
      <li><b>Eje vertical que no parte de 0</b>: exagera las diferencias.</li>
      <li><b>Sectores 3D o barras de ancho distinto</b>: distorsionan el área.</li></ul>
      <div class="box"><b>Clave</b> Antes de comparar dos gráficos, mira que compartan escala y unidad. Si no, la comparación visual no vale y hay que ir a los números.</div>` },
    { t: 'Resumen', b: r`
      <table><thead><tr><th>Gráfico</th><th>Se usa para</th><th>Cómo se lee</th></tr></thead><tbody>
      <tr><td>Barras</td><td>comparar categorías</td><td>altura = $f_i$ o $h_i\%$</td></tr>
      <tr><td>Circular</td><td>partes de un total</td><td>sector = $h_i$; ángulo $= h_i \cdot 360^\circ$</td></tr>
      <tr><td>Líneas</td><td>cambio en el tiempo</td><td>tendencia, máximos, diferencias consecutivas</td></tr>
      <tr><td>Pictograma</td><td>cantidades con íconos</td><td>íconos $\times$ valor de cada ícono</td></tr></tbody></table>
      <div class="box" style="margin-top:14px"><b>Método PAES</b> 1) Identifica qué variable está en cada eje y su unidad. 2) Anota los valores que necesitas (no todos). 3) Descarta alternativas que hablen de datos que el gráfico no muestra.</div>` }
  ],
  example: {
    src: 'PAES Invierno 2026, adaptada',
    enun: r`<p>Los artículos de una tienda de jardinería están clasificados en cinco categorías. La cantidad de artículos vendidos en cierta semana se presenta en el siguiente gráfico circular.</p><p>Si esa semana se vendieron 85 semillas, ¿cuál fue el total de artículos vendidos?</p>`,
    fig: { type: 'pie', labels: ['Flores', 'Árboles', 'Semillas', 'Tierra', 'Arbustos'], pct: [30, 20, 25, 15, 10] },
    alts: ['200', '300', '340', '500'], ok: 2,
    sol: r`<p>Semillas es el $25\%$ del total y corresponde a 85 artículos: $0{,}25 \cdot n = 85$.</p><p>$$n = \frac{85}{0{,}25} = 85 \cdot 4 = 340$$</p><p>Comprobación: $30\%$ de 340 son 102 flores, $20\%$ son 68 árboles, etc.; todo suma 340.</p>`,
    conc: 'Un sector conocido en cantidad y porcentaje entrega el total: n = f_i / h_i.'
  },
  bank: [
    { enun: r`<p>En el gráfico se presenta la cantidad de celulares vendidos por Antonia cada día de una semana de trabajo. La meta de la tienda es vender <b>al menos 5</b> celulares por día.</p><p>¿Cuántos días de esa semana Antonia cumplió la meta?</p>`,
      fig: { type: 'bar', labels: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie'], values: [3, 6, 5, 2, 7], mono: true, ylab: 'celulares' },
      alts: ['2', '3', '4', '5'], ok: 1,
      sol: r`<p>"Al menos 5" = 5 o más. Días que cumplen: martes (6), miércoles (5) y viernes (7): <b>3 días</b>.</p><p>El error común es dejar fuera el miércoles, pero 5 sí es "al menos 5".</p>`, conc: 'Al menos 5 incluye el 5.' },
    { enun: r`<p>En un gráfico circular, el sector correspondiente a "transporte público" tiene un ángulo de $90^\circ$. La encuesta se aplicó a 240 personas.</p><p>¿Cuántas personas eligieron transporte público?</p>`,
      alts: ['25', '60', '90', '120'], ok: 1,
      sol: r`<p>$h = \dfrac{90^\circ}{360^\circ} = \dfrac{1}{4} = 25\%$. Entonces $f = 0{,}25 \cdot 240 = 60$ personas.</p><p>25 es el porcentaje, no la cantidad; 90 es el ángulo.</p>`, conc: 'Ángulo / 360° = fracción del total.' },
    { enun: r`<p>El gráfico muestra la producción mensual de una fábrica, en miles de unidades, durante el primer semestre.</p><p>¿Entre qué meses consecutivos se produjo el <b>mayor aumento</b> de producción?</p>`,
      fig: { type: 'line', labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'], values: [10, 12, 15, 14, 20, 18] },
      alts: ['Entre enero y febrero', 'Entre febrero y marzo', 'Entre abril y mayo', 'Entre mayo y junio'], ok: 2,
      sol: r`<p>Diferencias consecutivas: Ene→Feb $+2$; Feb→Mar $+3$; Mar→Abr $-1$; Abr→May $+6$; May→Jun $-2$.</p><p>El mayor aumento es $+6$, entre abril y mayo. Mayo es además el máximo, pero la pregunta es por el <b>aumento</b>, que se calcula entre puntos consecutivos.</p>`, conc: 'Aumento = diferencia entre puntos consecutivos, no el valor más alto.' },
    { enun: r`<p>En el gráfico se presenta el porcentaje de estudiantes de un colegio de 80 alumnos según el deporte que practican.</p><p>¿Cuántos estudiantes practican básquetbol?</p>`,
      fig: { type: 'bar', labels: ['Fútbol', 'Básquetbol', 'Vóleibol', 'Natación'], values: [40, 25, 20, 15], mono: true, ylab: '%' },
      alts: ['15', '20', '25', '32'], ok: 1,
      sol: r`<p>El gráfico está en porcentaje: básquetbol es $25\%$ de 80 estudiantes.</p><p>$f = 0{,}25 \cdot 80 = 20$ estudiantes.</p><p>25 es el porcentaje leído sin convertir; 32 es el $40\%$ (fútbol).</p>`, conc: 'Mira la unidad del eje: si es %, hay que multiplicar por n.' },
    { enun: r`<p>En los siguientes pictogramas se representa la cantidad de personas en cuatro grupos.</p><p>¿Cuál es el promedio de personas por grupo?</p>`,
      fig: { type: 'picto', labels: ['Grupo 1', 'Grupo 2', 'Grupo 3', 'Grupo 4'], counts: [3, 5, 2, 6], icon: '👤', each: 4, unit: 'personas' },
      alts: ['4', '16', '20', '64'], ok: 1,
      sol: r`<p>Íconos: $3 + 5 + 2 + 6 = 16$ íconos, cada uno vale 4 personas: $16 \cdot 4 = 64$ personas en total.</p><p>Promedio por grupo: $\bar{x} = \dfrac{64}{4} = 16$ personas.</p><p>4 es el promedio de íconos, no de personas; 64 es el total.</p>`, conc: 'En un pictograma, primero convierte íconos a cantidades.' },
    { enun: r`<p>Dos supermercados presentan en gráficos de barras separados el porcentaje de alimentos orgánicos vendidos en tres años. Al mirarlos, una barra del 20 % en el supermercado A se ve más alta que una del 30 % en el supermercado B.</p><p>¿Cuál de los siguientes argumentos explica por qué la comparación visual no es válida?</p>`,
      alts: ['Los gráficos están graduados en distintas escalas.', 'Los porcentajes aumentaron en ambos supermercados.', 'Las barras están una al lado de la otra.', 'Los porcentajes están escritos sobre las barras.'], ok: 0,
      sol: r`<p>Si una barra de 20 % supera en altura a una de 30 %, los ejes verticales <b>no usan la misma escala</b>. Eso invalida comparar alturas entre los dos gráficos; hay que comparar los números.</p><p>Las otras opciones describen aspectos que no afectan la comparación.</p>`, conc: 'Dos gráficos solo se comparan a ojo si comparten escala.' },
    { enun: r`<p>El gráfico representa la cantidad de horas extras realizadas por 140 trabajadores en un mes. Por cada hora extra se pagan $15 000.</p><p>¿Cuál fue el pago por horas extras <b>más frecuente</b> ese mes?</p>`,
      fig: { type: 'bar', labels: ['1 hora', '2 horas', '3 horas', '4 horas'], values: [20, 45, 50, 25], mono: true, ylab: 'trabajadores' },
      alts: ['$15 000', '$30 000', '$45 000', '$60 000'], ok: 2,
      sol: r`<p>La barra más alta es la de <b>3 horas</b> (50 trabajadores): esa es la moda $Mo$.</p><p>Pago correspondiente: $3 \cdot 15\,000 = 45\,000$ pesos.</p><p>No se pide el promedio ni el total: "más frecuente" es la categoría con mayor $f_i$.</p>`, conc: '"Más frecuente" = moda = barra más alta.' },
    { enun: r`<p>Un estudiante quiere mostrar cómo cambió la temperatura de su ciudad hora a hora durante un día completo.</p><p>¿Cuál es el gráfico más adecuado para representar esa información?</p>`,
      alts: ['Gráfico de barras', 'Gráfico circular', 'Gráfico de líneas', 'Pictograma'], ok: 2,
      sol: r`<p>La temperatura es una variable que <b>evoluciona en el tiempo</b>: el gráfico de líneas muestra la tendencia, las subidas y bajadas entre horas consecutivas.</p><p>El circular sirve para partes de un total; barras y pictograma comparan categorías, no muestran continuidad temporal.</p>`, conc: 'Cambio en el tiempo → líneas.' }
  ]
},

{
  id: 'promedio', unit: 'Unidad 1 · Representación de datos', icon: '⚖️',
  title: 'Promedio',
  desc: 'Media de datos sueltos y de tablas, promedio de promedios, despejar un dato y cómo cambia al mover personas de grupo.',
  slides: [
    { t: 'El promedio reparte el total en partes iguales', b: r`
      <div class="cols"><div>
      $$\bar{x} = \frac{x_1 + x_2 + \dots + x_n}{n} = \frac{\sum x_i}{n}$$
      <p>Gasto en almuerzo de una semana: 3200, 5300, 7200, 2500, 11 400, 12 000 y 6000 pesos.</p>
      <p>Suma $= 47\,600$; $\bar{x} = \dfrac{47\,600}{7} = 6800$ pesos diarios.</p>
      </div><div>
      <div class="box"><b>Al revés</b> Si sabes el promedio y $n$, recuperas el total: $\sum x_i = n \cdot \bar{x}$. Es la clave para "¿qué nota necesito?".</div>
      <div class="box alert"><b>Cuidado</b> El promedio no tiene por qué ser uno de los datos y puede quedar lejos de la mayoría si hay valores extremos.</div>
      </div></div>` },
    { t: 'Promedio desde una tabla de frecuencias', b: r`
      <div class="cols"><div>
      <p>Cada valor $x_i$ aparece $f_i$ veces, así que se multiplica antes de sumar:</p>
      $$\bar{x} = \frac{\sum f_i\, x_i}{n} = \sum h_i\, x_i$$
      <p>Con valores 0, 1 y 2 y frecuencias $P$, $Q$ y $R$:</p>
      $$\bar{x} = \frac{0\cdot P + 1\cdot Q + 2\cdot R}{P + Q + R}$$
      </div><div>
      <table><thead><tr><th>Mascotas $x_i$</th><th>$f_i$</th><th>$f_i x_i$</th></tr></thead><tbody>
      <tr><td>0</td><td>12</td><td>0</td></tr><tr><td>1</td><td>10</td><td>10</td></tr><tr><td>2</td><td>15</td><td>30</td></tr><tr><td>3</td><td>6</td><td>18</td></tr><tr><td>4</td><td>5</td><td>20</td></tr>
      <tr><th>Total</th><th>48</th><th>78</th></tr></tbody></table>
      <p>$\bar{x} = \dfrac{78}{48} = 1{,}625$ mascotas por familia.</p>
      </div></div>` },
    { t: 'Propiedades que la PAES pregunta', b: r`
      <ul><li>Si a <b>todos</b> los datos se les suma $k$, el promedio aumenta en $k$. Si se multiplican por $k$, el promedio se multiplica por $k$.</li>
      <li>Si se <b>agrega</b> un dato mayor que $\bar{x}$, el promedio sube; si es menor, baja. Si es igual, no cambia.</li>
      <li>Si se <b>quita</b> un dato mayor que $\bar{x}$, el promedio baja; si se quita uno menor, sube.</li>
      <li><b>Promedio de promedios</b>: solo se puede promediar directamente si los grupos tienen el <b>mismo tamaño</b>. Si no, hay que ponderar por $n$ de cada grupo.</li></ul>
      <div class="box"><b>Mover una persona de un grupo a otro</b> Grupo A con promedio 30 y grupo B con promedio 40. Para que <b>ambos</b> promedios suban, la persona que se mueve debe ser <b>menor que 40</b> (para que B suba al perderla) y <b>mayor que 30</b> (para que A suba al recibirla): alguien de entre 30 y 40 años pasando de B a A.</div>` },
    { t: 'Despejar un dato desconocido', b: r`
      <div class="cols"><div>
      <p>Cuatro notas: 5,0; 6,0; 4,5 y $x$. El promedio debe ser 5,5.</p>
      $$\frac{5{,}0 + 6{,}0 + 4{,}5 + x}{4} = 5{,}5 \;\Rightarrow\; 15{,}5 + x = 22 \;\Rightarrow\; x = 6{,}5$$
      </div><div>
      <div class="box"><b>Método</b> 1) Total necesario $= n \cdot \bar{x}$. 2) Resta lo que ya tienes. 3) Lo que falta es el dato.</div>
      <div class="box alert"><b>Crecimiento promedio</b> Un brote midió 2 cm y cinco semanas después 14 cm: creció $14 - 2 = 12$ cm en 5 semanas, es decir $\dfrac{12}{5} = 2{,}4$ cm por semana. El promedio se calcula sobre el <b>cambio</b>, no sobre la altura final.</div>
      </div></div>` },
    { t: 'Resumen', b: r`
      <table><thead><tr><th>Situación</th><th>Fórmula</th></tr></thead><tbody>
      <tr><td>Datos sueltos</td><td>$\bar{x} = \dfrac{\sum x_i}{n}$</td></tr>
      <tr><td>Tabla de frecuencias</td><td>$\bar{x} = \dfrac{\sum f_i x_i}{n}$</td></tr>
      <tr><td>Dato que falta</td><td>$x = n\bar{x} - (\text{suma conocida})$</td></tr>
      <tr><td>Promedio de grupos de distinto tamaño</td><td>$\bar{x} = \dfrac{n_A \bar{x}_A + n_B \bar{x}_B}{n_A + n_B}$</td></tr></tbody></table>
      <div class="box" style="margin-top:14px"><b>Método PAES</b> Cuando las alternativas son expresiones (con $P$, $Q$, $R$), verifica dos cosas: el numerador multiplica cada valor por su frecuencia, y el denominador es la suma de <b>todas</b> las frecuencias.</div>` }
  ],
  example: {
    src: 'PAES Invierno 2027, adaptada',
    enun: r`<p>El promedio de edad de un grupo A de personas es 30 años, mientras que el promedio de edad de un grupo B es 40 años.</p><p>Si se quiere cambiar solo a una persona de grupo, ¿en cuál de los siguientes casos el promedio <b>aumentará en ambos grupos</b>?</p>`,
    alts: ['Que se cambie una persona de 45 años del grupo B al grupo A.', 'Que se cambie una persona de 35 años del grupo B al grupo A.', 'Que se cambie una persona de 45 años del grupo A al grupo B.', 'Que se cambie una persona de 30 años del grupo A al grupo B.'], ok: 1,
    sol: r`<p>Para que el grupo que <b>pierde</b> a la persona suba su promedio, la persona debe ser menor que ese promedio. Para que el grupo que la <b>recibe</b> suba, la persona debe ser mayor que su promedio.</p><p>Una persona de 35 años que sale de B ($35 < 40$): B sube. Entra a A ($35 > 30$): A sube. ✔</p><p>45 de B a A: B baja al perder a alguien mayor que 40. 45 de A a B: A baja al perder a alguien mayor que 30. 30 de A a B: A no cambia y B baja.</p>`,
    conc: 'Quitar un dato menor que la media la sube; agregar un dato mayor que la media la sube.'
  },
  bank: [
    { enun: r`<p>En la siguiente tabla se presenta el gasto diario en almuerzo de una persona durante una semana.</p><p>¿Cuánto dinero gastó en promedio diariamente en almuerzo esa semana?</p>`,
      fig: { type: 'table', head: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'], rows: [['$3200', '$5300', '$7200', '$2500', '$11 400', '$12 000', '$6000']] },
      alts: ['$2500', '$6000', '$6800', '$9520'], ok: 2,
      sol: r`<p>Suma: $3200 + 5300 + 7200 + 2500 + 11\,400 + 12\,000 + 6000 = 47\,600$.</p><p>$\bar{x} = \dfrac{47\,600}{7} = 6800$ pesos.</p><p>2500 es el mínimo, 6000 es la mediana y 9520 es dividir por 5 en vez de por 7.</p>`, conc: 'Divide por la cantidad de datos, incluidos los del fin de semana.' },
    { enun: r`<p>Considera la siguiente tabla, donde $P$, $Q$ y $R$ son frecuencias.</p><p>¿Cuál de las siguientes expresiones permite determinar el promedio de los valores?</p>`,
      fig: { type: 'table', head: ['Valor', 'Frecuencia'], rows: [['0', '$P$'], ['1', '$Q$'], ['2', '$R$']] },
      alts: [r`$\dfrac{0\cdot P + 1\cdot Q + 2\cdot R}{P + Q + R}$`, r`$\dfrac{P + Q + 2R}{3}$`, r`$\dfrac{P + Q + R}{3}$`, r`$\dfrac{0 + 1 + 2}{P + Q + R}$`], ok: 0,
      sol: r`<p>Cada valor se multiplica por su frecuencia y se divide por el total de datos $n = P + Q + R$:</p>$$\bar{x} = \frac{0\cdot P + 1\cdot Q + 2\cdot R}{P + Q + R}$$<p>Dividir por 3 sería promediar las frecuencias; sumar $0+1+2$ ignora cuántas veces aparece cada valor.</p>`, conc: 'Promedio de tabla: Σ f_i x_i / Σ f_i.' },
    { enun: r`<p>En la tabla se presentan los milímetros de precipitación de cada mes en cierta ciudad.</p><p>¿Cuál es el promedio de precipitaciones de junio, julio, agosto y septiembre?</p>`,
      fig: { type: 'table', head: ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'], rows: [['0', '1', '2', '13', '42', '54', '47', '36', '16', '7', '2', '1']] },
      alts: ['20,09 mm', '38,25 mm', '41,50 mm', '76,50 mm'], ok: 1,
      sol: r`<p>Solo los cuatro meses pedidos: $54 + 47 + 36 + 16 = 153$.</p><p>$\bar{x} = \dfrac{153}{4} = 38{,}25$ mm.</p><p>20,09 es el promedio de los 12 meses; 76,5 es dividir por 2.</p>`, conc: 'Promedia solo los datos que la pregunta selecciona.' },
    { enun: r`<p>Un estudiante tiene las notas 5,0; 6,0 y 4,5. Le queda una cuarta nota y necesita que el promedio de las cuatro sea exactamente 5,5.</p><p>¿Qué nota debe obtener en la cuarta evaluación?</p>`,
      alts: ['5,5', '6,0', '6,5', '7,0'], ok: 2,
      sol: r`<p>Total necesario: $4 \cdot 5{,}5 = 22$. Ya tiene $5{,}0 + 6{,}0 + 4{,}5 = 15{,}5$.</p><p>Falta $22 - 15{,}5 = 6{,}5$.</p>`, conc: 'Total = n · promedio; el dato que falta es la diferencia.' },
    { enun: r`<p>Una encuesta registró la cantidad de mascotas por familia en 48 familias.</p><p>¿Cuál es el promedio de mascotas por familia?</p>`,
      fig: { type: 'table', head: ['Cantidad de mascotas', 'Cantidad de familias'], rows: [['0', 12], ['1', 10], ['2', 15], ['3', 6], ['4', 5]] },
      alts: ['1,5', '1,625', '2', '2,5'], ok: 1,
      sol: r`<p>$\sum f_i x_i = 0\cdot 12 + 1\cdot 10 + 2\cdot 15 + 3\cdot 6 + 4\cdot 5 = 0 + 10 + 30 + 18 + 20 = 78$.</p><p>$\bar{x} = \dfrac{78}{48} = 1{,}625$.</p><p>2 es el promedio de los valores 0 a 4 sin considerar frecuencias.</p>`, conc: 'Multiplica cada valor por su frecuencia antes de sumar.' },
    { enun: r`<p>Una persona plantó un brote de 2 cm y lo midió cinco semanas después: medía 14 cm.</p><p>¿Cuántos centímetros creció el brote, en promedio, por semana?</p>`,
      alts: ['2 cm', '2,4 cm', '2,8 cm', '3 cm'], ok: 1,
      sol: r`<p>Crecimiento total: $14 - 2 = 12$ cm en 5 semanas.</p><p>Promedio semanal: $\dfrac{12}{5} = 2{,}4$ cm.</p><p>2,8 sale de dividir 14 por 5, olvidando que partió en 2 cm.</p>`, conc: 'El crecimiento promedio se calcula sobre lo que cambió.' },
    { enun: r`<p>En el gráfico se presenta el promedio de las puntuaciones que ha recibido un hotel en seis categorías. Todas las personas contestaron todas las categorías.</p><p>¿Cuál es el promedio general de puntuación del hotel considerando estas seis categorías?</p>`,
      fig: { type: 'bar', labels: ['Limpieza', 'Ubicación', 'Servicio', 'Comida', 'Habitación', 'Precio'], values: [4.5, 4.8, 5.0, 4.6, 4.9, 5.0], mono: true },
      alts: ['4,7 puntos', '4,8 puntos', '4,9 puntos', '5 puntos'], ok: 1,
      sol: r`<p>Como todas las personas respondieron todas las categorías, cada promedio tiene el mismo $n$ y se pueden promediar directamente:</p><p>$\dfrac{4{,}5 + 4{,}8 + 5{,}0 + 4{,}6 + 4{,}9 + 5{,}0}{6} = \dfrac{28{,}8}{6} = 4{,}8$.</p>`, conc: 'Promedio de promedios solo si los grupos tienen el mismo tamaño.' },
    { enun: r`<p>El promedio de las edades de un grupo de personas es 24 años. Si a cada persona se le suman 3 años, ¿qué ocurre con el promedio?</p>`,
      alts: ['Se mantiene en 24 años.', 'Aumenta en 3 años.', 'Se multiplica por 3.', 'Aumenta en 3/n años.'], ok: 1,
      sol: r`<p>Si cada dato aumenta en 3, la suma aumenta en $3n$ y al dividir por $n$ el promedio aumenta exactamente en 3: pasa a 27 años.</p>`, conc: 'Sumar k a todos los datos suma k al promedio.' }
  ]
},

/* =====================================================================
   UNIDAD 2 · MEDIDAS DE POSICIÓN
   ===================================================================== */
{
  id: 'cuartiles', unit: 'Unidad 2 · Medidas de posición', icon: '📏',
  title: 'Cuartiles y percentiles',
  desc: 'Ordenar, mediana, Q1 y Q3, percentiles y qué significa "al menos el 75 % de los datos".',
  slides: [
    { t: 'Primero, ordenar', b: r`
      <p>Las medidas de posición dividen los datos <b>ordenados de menor a mayor</b> en partes con la misma cantidad de datos.</p>
      <div class="cols"><div>
      <div class="box"><b>Mediana $Me = Q_2$</b> Deja la mitad de los datos a cada lado.<br>· $n$ impar: el dato del centro.<br>· $n$ par: el promedio de los dos centrales.</div>
      <p>Datos: 3, 5, 7, 8, 10, 12 ($n = 6$): $Me = \dfrac{7 + 8}{2} = 7{,}5$.</p>
      </div><div>
      <div class="box alert"><b>Error frecuente</b> Tomar "el del medio" sin ordenar. En 4-0-0-2-3-3-1-0-3 el dato central <b>después de ordenar</b> (0,0,0,1,<b>2</b>,3,3,3,4) es 2.</div>
      </div></div>` },
    { t: 'Cuartiles: cuatro partes iguales', b: r`
      <div class="cols"><div>
      <ul><li>$Q_1$: mediana de la <b>mitad inferior</b> (los datos antes de $Me$).</li>
      <li>$Q_2 = Me$.</li>
      <li>$Q_3$: mediana de la <b>mitad superior</b> (los datos después de $Me$).</li></ul>
      <p>Si $n$ es impar, la mediana <b>no</b> se incluye en ninguna mitad.</p>
      </div><div>
      <p>Datos ordenados: 0, 0, 0, 1, <b>2</b>, 3, 3, 3, 4.</p>
      <p>Mitad inferior 0, 0, 0, 1 $\Rightarrow Q_1 = \dfrac{0+0}{2} = 0$.</p>
      <p>Mitad superior 3, 3, 3, 4 $\Rightarrow Q_3 = \dfrac{3+3}{2} = 3$.</p>
      <div class="box"><b>Rango intercuartil</b> $RIC = Q_3 - Q_1 = 3 - 0 = 3$: ancho del 50 % central.</div>
      </div></div>` },
    { t: 'Percentiles: cien partes', b: r`
      <div class="cols"><div>
      <p>El <b>percentil $P_k$</b> es el valor que deja <b>al menos el $k\,\%$</b> de los datos en $P_k$ o por debajo.</p>
      <p>Equivalencias: $P_{25} = Q_1$, $P_{50} = Me$, $P_{75} = Q_3$.</p>
      <div class="box"><b>Interpretar</b> "$P_{80} = 65$ puntos" significa que al menos el 80 % de las personas obtuvo 65 puntos o menos (y a lo más el 20 % obtuvo más de 65).</div>
      </div><div>
      <div class="box alert"><b>Percentil de un dato</b> Si en un grupo de 40 personas un estudiante supera a 30, está sobre el $\dfrac{30}{40} = 75\%$: su puntaje está en el percentil 75.</div>
      <p>Las alternativas confunden el <b>valor</b> del percentil (65 puntos) con el <b>porcentaje</b> (80 %). No son intercambiables.</p>
      </div></div>` },
    { t: 'Cuartiles desde una tabla de frecuencias', b: r`
      <div class="cols"><div>
      <p>Con $n = 30$ la mediana está entre las posiciones 15 y 16. Se usa la acumulada $F_i$ para ubicar esas posiciones.</p>
      <table><thead><tr><th>Puntaje</th><th>$f_i$</th><th>$F_i$</th></tr></thead><tbody>
      <tr><td>1</td><td>2</td><td>2</td></tr><tr><td>2</td><td>4</td><td>6</td></tr><tr><td>3</td><td>4</td><td>10</td></tr><tr><td>4</td><td>5</td><td>15</td></tr><tr><td>5</td><td>7</td><td>22</td></tr><tr><td>6</td><td>3</td><td>25</td></tr><tr><td>7</td><td>5</td><td>30</td></tr></tbody></table>
      </div><div>
      <p>Posición 15: la primera fila con $F_i \ge 15$ es el puntaje 4.<br>Posición 16: la primera fila con $F_i \ge 16$ es el puntaje 5.</p>
      $$Me = \frac{4 + 5}{2} = 4{,}5$$
      <div class="box"><b>Método</b> ubica la posición que buscas ($n/4$, $n/2$, $3n/4$) y mira en qué fila la acumulada la alcanza.</div>
      </div></div>` },
    { t: 'Resumen', b: r`
      <table><thead><tr><th>Medida</th><th>Deja por debajo</th><th>Cómo se obtiene</th></tr></thead><tbody>
      <tr><td>$Q_1 = P_{25}$</td><td>al menos 25 %</td><td>mediana de la mitad inferior</td></tr>
      <tr><td>$Me = Q_2 = P_{50}$</td><td>al menos 50 %</td><td>dato central (o promedio de los dos centrales)</td></tr>
      <tr><td>$Q_3 = P_{75}$</td><td>al menos 75 %</td><td>mediana de la mitad superior</td></tr>
      <tr><td>$RIC$</td><td>—</td><td>$Q_3 - Q_1$</td></tr></tbody></table>
      <div class="box" style="margin-top:14px"><b>Método PAES</b> 1) Ordena. 2) Cuenta $n$. 3) Mediana. 4) Parte en dos mitades (sin la mediana si $n$ es impar) y saca la mediana de cada una. 5) Revisa que $Q_1 \le Me \le Q_3$.</div>` }
  ],
  example: {
    src: 'PAES Invierno 2027, adaptada',
    enun: r`<p>Para una tarea, una estudiante debe representar con un diagrama de cajón las anotaciones positivas de sus amigos: 4 – 0 – 0 – 2 – 3 – 3 – 1 – 0 – 3.</p><p>Realiza los siguientes pasos, cometiendo un error:</p><p><b>Paso 1:</b> ordena los datos de menor a mayor y determina que el dato central es 2.<br><b>Paso 2:</b> identifica el mínimo y el máximo, obteniendo 0 y 4.<br><b>Paso 3:</b> determina el primer cuartil como 1, ya que se encuentra entre 0 y 2, y el tercer cuartil como 3, ya que se encuentra entre 2 y 4.<br><b>Paso 4:</b> construye el diagrama con esos cinco valores.</p><p>¿En cuál de los pasos cometió el error?</p>`,
    alts: ['En el Paso 1', 'En el Paso 2', 'En el Paso 3', 'En el Paso 4'], ok: 2,
    sol: r`<p>Ordenados: 0, 0, 0, 1, <b>2</b>, 3, 3, 3, 4. Paso 1 correcto ($Me = 2$); Paso 2 correcto (mínimo 0, máximo 4).</p><p>Paso 3: $Q_1$ es la <b>mediana de la mitad inferior</b> 0, 0, 0, 1, o sea $0$, no "el número que está entre 0 y 2". $Q_3$ es la mediana de 3, 3, 3, 4, que es 3 (ese le resultó bien por casualidad).</p><p>El error está en el Paso 3: los cuartiles no son puntos medios entre el mínimo y la mediana, sino medianas de las mitades de los <b>datos</b>.</p>`,
    conc: 'Q1 y Q3 se calculan con los datos, no promediando extremos.'
  },
  bank: [
    { enun: r`<p>Considera el siguiente grupo de datos: 18, 19, 20, 21, 21, 27, 30, 30, 31, 34 y 35.</p><p>¿Cuál es el valor del tercer cuartil $Q_3$?</p>`,
      alts: ['27', '30', '31', '34'], ok: 2,
      sol: r`<p>$n = 11$ (impar). Mediana: posición 6, $Me = 27$.</p><p>Mitad superior (sin la mediana): 30, 30, 31, 34, 35. Su mediana es el tercer valor: $Q_3 = 31$.</p><p>Para comprobar: mitad inferior 18, 19, 20, 21, 21 da $Q_1 = 20$.</p>`, conc: 'Con n impar, la mediana no entra en las mitades.' },
    { enun: r`<p>Los tiempos, en minutos, que tardaron seis personas en resolver un problema fueron: 3, 5, 7, 8, 10 y 12.</p><p>¿Cuál es la mediana de los tiempos?</p>`,
      alts: ['7', '7,5', '8', '8,5'], ok: 1,
      sol: r`<p>$n = 6$ es par: la mediana es el promedio de los datos en las posiciones 3 y 4: $Me = \dfrac{7 + 8}{2} = 7{,}5$ minutos.</p>`, conc: 'n par → promedio de los dos centrales.' },
    { enun: r`<p>En una prueba de 100 puntos, el percentil 80 fue 65 puntos.</p><p>¿Cuál de las siguientes afirmaciones es correcta?</p>`,
      alts: ['Al menos el 80 % de las personas obtuvo 65 puntos o menos.', 'El 65 % de las personas obtuvo 80 puntos o menos.', 'El 80 % de las personas obtuvo más de 65 puntos.', 'El promedio de la prueba fue 65 puntos.'], ok: 0,
      sol: r`<p>$P_{80} = 65$: el valor 65 deja al menos el 80 % de los datos en 65 o por debajo. La opción que cambia 80 y 65 confunde porcentaje con puntaje; el percentil no informa el promedio.</p>`, conc: 'P_k = valor; k = porcentaje acumulado hasta ese valor.' },
    { enun: r`<p>Las edades de ocho integrantes de un taller son: 2, 4, 4, 6, 9, 10, 12 y 15 años.</p><p>¿Cuál es el valor del tercer cuartil?</p>`,
      alts: ['9', '10', '11', '12'], ok: 2,
      sol: r`<p>$n = 8$ (par). Mitad inferior: 2, 4, 4, 6 y mitad superior: 9, 10, 12, 15.</p><p>$Q_3$ = mediana de la mitad superior $= \dfrac{10 + 12}{2} = 11$.</p><p>Aunque 11 no es uno de los datos, sí es el cuartil.</p>`, conc: 'Un cuartil puede no coincidir con ningún dato.' },
    { enun: r`<p>En un grupo de 40 estudiantes, Camila obtuvo un puntaje mayor que el de 30 de sus compañeros.</p><p>¿En qué percentil se ubica, aproximadamente, el puntaje de Camila?</p>`,
      alts: ['Percentil 25', 'Percentil 30', 'Percentil 70', 'Percentil 75'], ok: 3,
      sol: r`<p>Camila supera a $\dfrac{30}{40} = 0{,}75 = 75\%$ del grupo: su puntaje está en el percentil 75, que coincide con $Q_3$.</p><p>30 es la cantidad de personas, no el porcentaje.</p>`, conc: 'Percentil de un dato = porcentaje de datos que quedan por debajo.' },
    { enun: r`<p>En un conjunto de datos, el primer cuartil es 12 y el tercer cuartil es 20.</p><p>¿Cuál es el rango intercuartil?</p>`,
      alts: ['4', '8', '16', '32'], ok: 1,
      sol: r`<p>$RIC = Q_3 - Q_1 = 20 - 12 = 8$. Es el ancho del 50 % central de los datos.</p><p>16 sería el promedio de ambos cuartiles y 32 su suma.</p>`, conc: 'RIC = Q3 − Q1.' },
    { enun: r`<p>Dos grupos completaron un circuito deportivo. En el grupo A el tercer cuartil de los tiempos fue 16 minutos y en el grupo B fue 20 minutos.</p><p>¿Cuál de las siguientes afirmaciones se puede asegurar?</p>`,
      alts: ['Al menos el 75 % del grupo A terminó en 16 minutos o menos.', 'El grupo A tiene más integrantes que el grupo B.', 'El 16 % del grupo A terminó en a lo más 16 minutos.', 'La persona más rápida del grupo A demoró 16 minutos.'], ok: 0,
      sol: r`<p>$Q_3 = 16$ en A significa que al menos el 75 % de sus tiempos son 16 minutos o menos. Los cuartiles no informan la cantidad de personas ni el mínimo; "16 %" confunde el valor del cuartil con un porcentaje.</p>`, conc: 'Q3 → al menos 75 % de los datos en Q3 o menos.' },
    { enun: r`<p>En la tabla se resume la distribución de los puntajes de una prueba en un curso de 30 estudiantes.</p><p>¿Cuál es la mediana de los puntajes?</p>`,
      fig: { type: 'table', head: ['Puntaje', 'Frecuencia'], rows: [['1', 2], ['2', 4], ['3', 4], ['4', 5], ['5', 7], ['6', 3], ['7', 5]] },
      alts: ['4', '4,5', '5', '5,5'], ok: 1,
      sol: r`<p>Acumuladas: 2, 6, 10, 15, 22, 25, 30. Con $n = 30$ la mediana promedia las posiciones 15 y 16.</p><p>Posición 15 → primera fila con $F_i \ge 15$: puntaje 4. Posición 16 → primera fila con $F_i \ge 16$: puntaje 5.</p><p>$Me = \dfrac{4 + 5}{2} = 4{,}5$.</p>`, conc: 'Usa la acumulada para ubicar las posiciones centrales.' }
  ]
},

{
  id: 'cajon', unit: 'Unidad 2 · Medidas de posición', icon: '📦',
  title: 'Diagrama de cajón',
  desc: 'Los cinco números, qué dice y qué no dice el cajón, construirlo desde datos y comparar grupos.',
  slides: [
    { t: 'Cinco números, un dibujo', b: r`
      <div class="cols"><div>
      <p>El diagrama de cajón (boxplot) resume los datos con <b>mínimo, $Q_1$, $Me$, $Q_3$ y máximo</b>.</p>
      <ul><li>La <b>caja</b> va de $Q_1$ a $Q_3$: contiene el 50 % central.</li>
      <li>La <b>línea</b> dentro de la caja es la mediana.</li>
      <li>Los <b>bigotes</b> llegan al mínimo y al máximo.</li></ul>
      </div><div>
      <div class="qfig">${''}</div>
      <div class="box"><b>Cada tramo ≈ 25 % de los datos</b><br>mín→$Q_1$ · $Q_1$→$Me$ · $Me$→$Q_3$ · $Q_3$→máx</div>
      </div></div>` },
    { t: 'Lo que el cajón dice (y lo que no)', b: r`
      <div class="cols"><div>
      <div class="box"><b>Sí se puede afirmar</b><br>· Al menos el 25 % de los datos es $\le Q_1$.<br>· Al menos el 50 % es $\le Me$.<br>· Al menos el 75 % es $\le Q_3$.<br>· Al menos el 25 % está entre $Me$ y $Q_3$ (y entre $Q_1$ y $Me$).<br>· Ningún dato es menor que el mínimo ni mayor que el máximo.</div>
      </div><div>
      <div class="box alert"><b>No se puede afirmar</b><br>· El <b>promedio</b>: el cajón no lo muestra.<br>· <b>Cuántos</b> datos hay (si no lo dicen aparte).<br>· Que "la mitad tiene exactamente $Me$": la mediana es un punto de corte, no un valor repetido.</div>
      <p>Ejemplo: en el cajón de seguidores (80, 140, 270, 400, 600) es correcto decir "al menos el 25 % tiene entre 140 y 270 seguidores".</p>
      </div></div>` },
    { t: 'Construir el cajón desde los datos', b: r`
      <div class="cols"><div>
      <p>Datos: 18, 19, 20, 21, 21, 27, 30, 30, 31, 34, 35.</p>
      <ul><li>mínimo $= 18$, máximo $= 35$.</li><li>$Me = 27$ (posición 6 de 11).</li><li>$Q_1$ = mediana de 18, 19, 20, 21, 21 $= 20$.</li><li>$Q_3$ = mediana de 30, 30, 31, 34, 35 $= 31$.</li></ul>
      </div><div>
      <div class="qfig">${''}</div>
      <div class="box"><b>Para elegir entre cuatro cajones</b> compara primero los extremos, luego la mediana y al final los cuartiles: descartas rápido.</div>
      </div></div>` },
    { t: 'Comparar grupos', b: r`
      <div class="cols"><div>
      <ul><li>Mediana más a la derecha → ese grupo tiene, en general, valores mayores.</li>
      <li>Caja más ancha (mayor $RIC$) → el 50 % central está más <b>disperso</b>.</li>
      <li>Bigote largo hacia un lado → datos estirados hacia ese lado (asimetría).</li>
      <li>Dos cajones pueden tener el mismo mínimo y máximo y ser muy distintos por dentro.</li></ul>
      </div><div>
      <div class="qfig">${''}</div>
      <p>Aquí B tiene mayor mediana y mayor $RIC$ que A: valores más altos pero más dispersos.</p>
      </div></div>` },
    { t: 'Resumen', b: r`
      <table><thead><tr><th>Elemento</th><th>Significado</th></tr></thead><tbody>
      <tr><td>Extremo izquierdo del bigote</td><td>mínimo</td></tr>
      <tr><td>Borde izquierdo de la caja</td><td>$Q_1$: al menos 25 % de los datos hasta ahí</td></tr>
      <tr><td>Línea interior</td><td>$Me$: al menos 50 % hasta ahí</td></tr>
      <tr><td>Borde derecho de la caja</td><td>$Q_3$: al menos 75 % hasta ahí</td></tr>
      <tr><td>Extremo derecho del bigote</td><td>máximo</td></tr>
      <tr><td>Ancho de la caja</td><td>$RIC = Q_3 - Q_1$</td></tr></tbody></table>
      <div class="box" style="margin-top:14px"><b>Método PAES</b> Ante "¿qué representa el 16 en el diagrama?", ubica el 16: si es el borde derecho de la caja es $Q_3$ y la afirmación válida habla de "al menos el 75 %".</div>` }
  ],
  example: {
    src: 'PAES Invierno 2027, adaptada',
    enun: r`<p>En el siguiente diagrama de cajón se presenta el tiempo, en minutos, que tardó un grupo de personas en completar un circuito deportivo.</p><p>¿Qué representa el 16 en el diagrama de cajón?</p>`,
    fig: { type: 'box', scale: [6, 24], ticks: 6, series: [{ min: 8, q1: 12, me: 14, q3: 16, max: 22 }] },
    alts: ['Que al menos un 75 % de las personas terminó el circuito en 16 minutos o menos.', 'Que un 16 % de las personas terminó el circuito en a lo más 16 minutos.', 'Que la dieciseisava persona que terminó el circuito demoró 16 minutos.', 'Que la cuarta persona que terminó el circuito demoró 16 minutos.'], ok: 0,
    sol: r`<p>El 16 es el borde derecho de la caja: es $Q_3$, el tercer cuartil.</p><p>$Q_3$ deja al menos el 75 % de los datos en 16 o menos: eso es exactamente la alternativa correcta.</p><p>Las otras confunden el valor 16 con un porcentaje o con una posición en el orden de llegada, cosas que el cajón no informa.</p>`,
    conc: 'Borde derecho de la caja = Q3 = al menos 75 % de los datos hasta ahí.'
  },
  bank: [
    { enun: r`<p>La distribución de seguidores en redes sociales de un grupo de estudiantes está representada en el siguiente diagrama de cajón.</p><p>¿Cuál de las siguientes afirmaciones se puede deducir a partir del diagrama?</p>`,
      fig: { type: 'box', scale: [0, 700], ticks: 7, series: [{ min: 80, q1: 140, me: 270, q3: 400, max: 600 }] },
      alts: ['Al menos un 25 % de los estudiantes tiene desde 140 hasta 270 seguidores.', 'El promedio de seguidores del grupo es 270.', 'La mitad de los estudiantes tiene 270 seguidores.', 'Hay 60 estudiantes que tienen entre 80 y 140 seguidores.'], ok: 0,
      sol: r`<p>Entre $Q_1 = 140$ y $Me = 270$ hay al menos el 25 % de los datos. ✔</p><p>El cajón no muestra el promedio, la mediana no es "el valor de la mitad" y no se conoce la cantidad de estudiantes (60 es la distancia 140 − 80, no una cantidad de personas).</p>`, conc: 'Cada tramo del cajón reúne al menos un 25 % de los datos.' },
    { enun: r`<p>Considera el grupo de datos 18, 19, 20, 21, 21, 27, 30, 30, 31, 34 y 35.</p><p>¿Cuál de los siguientes diagramas de cajón representa a este grupo de datos?</p>`,
      fig: { type: 'box', scale: [15, 40], ticks: 5, labels: false, series: [{ name: 'A', min: 18, q1: 20, me: 27, q3: 31, max: 35 }, { name: 'B', min: 18, q1: 21, me: 27, q3: 30, max: 35 }, { name: 'C', min: 18, q1: 20, me: 26.5, q3: 31, max: 34 }, { name: 'D', min: 19, q1: 21, me: 27, q3: 31, max: 35 }] },
      alts: ['Diagrama A', 'Diagrama B', 'Diagrama C', 'Diagrama D'], ok: 0,
      sol: r`<p>Mínimo 18 y máximo 35 (descarta C y D). $Me = 27$ (posición 6). $Q_1$ = mediana de 18, 19, 20, 21, 21 $= 20$ y $Q_3$ = mediana de 30, 30, 31, 34, 35 $= 31$.</p><p>Solo el diagrama A tiene la caja de 20 a 31 con la mediana en 27.</p>`, conc: 'Compara extremos, luego mediana, luego cuartiles.' },
    { enun: r`<p>En el diagrama de cajón de las notas de un curso, la caja va desde 4,5 hasta 6,0 y la mediana es 5,5.</p><p>¿Cuál es el rango intercuartil de las notas?</p>`,
      alts: ['1,0', '1,5', '2,5', '10,5'], ok: 1,
      sol: r`<p>Los bordes de la caja son $Q_1 = 4{,}5$ y $Q_3 = 6{,}0$: $RIC = 6{,}0 - 4{,}5 = 1{,}5$.</p><p>La mediana no interviene en el $RIC$.</p>`, conc: 'RIC = ancho de la caja.' },
    { enun: r`<p>Los diagramas de cajón muestran las edades de los participantes de dos talleres.</p><p>¿Cuál de las siguientes afirmaciones es correcta?</p>`,
      fig: { type: 'box', scale: [10, 60], ticks: 5, series: [{ name: 'Taller A', min: 15, q1: 20, me: 26, q3: 30, max: 40 }, { name: 'Taller B', min: 18, q1: 28, me: 38, q3: 48, max: 55 }] },
      alts: ['La mediana de edad del taller B es mayor que la del taller A.', 'El taller A tiene más participantes que el taller B.', 'El promedio de edad del taller A es 26 años.', 'Todos los participantes del taller B son mayores que los del taller A.'], ok: 0,
      sol: r`<p>$Me_B = 38 > Me_A = 26$. ✔</p><p>El cajón no indica cantidad de personas ni promedio, y como el mínimo de B (18) es menor que el máximo de A (40), no todos los de B son mayores que los de A.</p>`, conc: 'Comparar medianas es leer las líneas interiores.' },
    { enun: r`<p>En un diagrama de cajón, el tercer cuartil es 16.</p><p>¿Qué porcentaje de los datos, como mínimo, es mayor o igual que 16?</p>`,
      alts: ['16 %', '25 %', '50 %', '75 %'], ok: 1,
      sol: r`<p>Hasta $Q_3$ se acumula al menos el 75 % de los datos, así que desde $Q_3$ hacia arriba queda, como mínimo, el 25 % restante.</p>`, conc: 'Sobre Q3 hay al menos un 25 % de los datos.' },
    { enun: r`<p>Las anotaciones positivas de nueve amigos fueron 4, 0, 0, 2, 3, 3, 1, 0 y 3.</p><p>¿Cuáles son los cinco valores (mínimo, $Q_1$, mediana, $Q_3$, máximo) del diagrama de cajón?</p>`,
      alts: ['0 · 0 · 2 · 3 · 4', '0 · 1 · 2 · 3 · 4', '0 · 0 · 3 · 3 · 4', '0 · 1 · 3 · 3 · 4'], ok: 0,
      sol: r`<p>Ordenados: 0, 0, 0, 1, 2, 3, 3, 3, 4. Mínimo 0, máximo 4, $Me = 2$.</p><p>$Q_1$ = mediana de 0, 0, 0, 1 $= 0$; $Q_3$ = mediana de 3, 3, 3, 4 $= 3$.</p>`, conc: 'Los cuartiles salen de las mitades de los datos.' },
    { enun: r`<p>¿Cuál de las siguientes medidas <b>no</b> se puede leer directamente en un diagrama de cajón?</p>`,
      alts: ['La mediana', 'El valor mínimo', 'El promedio', 'El tercer cuartil'], ok: 2,
      sol: r`<p>El cajón se construye con mínimo, $Q_1$, $Me$, $Q_3$ y máximo. El promedio no aparece: dos grupos con el mismo cajón pueden tener promedios distintos.</p>`, conc: 'El cajón es de posición, no de promedio.' },
    { enun: r`<p>Los diagramas muestran los tiempos de espera, en minutos, en dos sucursales de un banco.</p><p>¿En cuál sucursal el 50 % central de los tiempos es más disperso?</p>`,
      fig: { type: 'box', scale: [0, 40], ticks: 4, series: [{ name: 'Sucursal 1', min: 5, q1: 12, me: 16, q3: 20, max: 30 }, { name: 'Sucursal 2', min: 4, q1: 8, me: 18, q3: 28, max: 35 }] },
      alts: ['En la sucursal 1, porque su mediana es menor.', 'En la sucursal 2, porque su caja es más ancha.', 'En la sucursal 1, porque su bigote derecho es más corto.', 'En ninguna, porque ambas tienen mediana parecida.'], ok: 1,
      sol: r`<p>La dispersión del 50 % central se mide con el $RIC$: sucursal 1: $20 - 12 = 8$; sucursal 2: $28 - 8 = 20$.</p><p>La caja más ancha (sucursal 2) indica mayor dispersión central. La mediana no mide dispersión.</p>`, conc: 'Caja más ancha = mayor RIC = más dispersión en el centro.' }
  ]
},

/* =====================================================================
   UNIDAD 3 · REGLAS DE LAS PROBABILIDADES
   ===================================================================== */
{
  id: 'laplace', unit: 'Unidad 3 · Reglas de las probabilidades', icon: '🎲',
  title: 'Probabilidad de un evento',
  desc: 'Espacio muestral, regla de Laplace, dados, monedas, tablas de doble entrada y dados cargados.',
  slides: [
    { t: 'Experimento, espacio muestral y evento', b: r`
      <div class="cols"><div>
      <ul><li><b>Experimento aleatorio</b>: se conocen los resultados posibles, no cuál saldrá (lanzar un dado).</li>
      <li><b>Espacio muestral $\Omega$</b>: todos los resultados posibles. Dado común: $\Omega = \{1,2,3,4,5,6\}$, $\#\Omega = 6$.</li>
      <li><b>Evento $A$</b>: un subconjunto de $\Omega$. "Sale par": $A = \{2,4,6\}$.</li></ul>
      </div><div>
      <div class="box"><b>Regla de Laplace</b> Si todos los resultados son igualmente probables,
      $$\mathbb{P}(A) = \frac{\#\,\text{casos favorables}}{\#\,\text{casos totales}} = \frac{\#A}{\#\Omega}$$
      $\mathbb{P}(\text{par}) = \dfrac{3}{6} = \dfrac{1}{2}$.</div>
      <p>Siempre $0 \le \mathbb{P}(A) \le 1$: 0 es imposible, 1 es seguro.</p>
      </div></div>` },
    { t: 'Contar bien los casos', b: r`
      <div class="cols"><div>
      <p><b>Dos dados</b>: $\#\Omega = 6 \cdot 6 = 36$ pares ordenados. La suma 7 sale con (1,6), (2,5), (3,4), (4,3), (5,2), (6,1): $\mathbb{P}(\text{suma } 7) = \dfrac{6}{36}$, la más probable.</p>
      <p><b>Tres monedas</b>: $\#\Omega = 2^3 = 8$ resultados: CCC, CCS, CSC, SCC, CSS, SCS, SSC, SSS.</p>
      </div><div>
      <div class="box alert"><b>Memorice</b> Con 20 tarjetas, ya volteaste un rayo. Quedan <b>19</b> tarjetas y solo <b>1</b> es el otro rayo: $\mathbb{P} = \dfrac{1}{19}$, no $\dfrac{1}{20}$. Lo que ya salió cambia $\Omega$.</div>
      <div class="box"><b>Gráficos y tablas</b> Si el enunciado da frecuencias, los casos totales son $n$ y los favorables, la frecuencia de la categoría: de 28 personas, 9 prefieren computador $\Rightarrow \dfrac{9}{28}$.</div>
      </div></div>` },
    { t: 'Tablas de doble entrada', b: r`
      <div class="cols"><div>
      <table><thead><tr><th>Área</th><th>Hombre</th><th>Mujer</th></tr></thead><tbody>
      <tr><td>Científica</td><td>7</td><td>10</td></tr><tr><td>Humanista</td><td>4</td><td>6</td></tr><tr><td>Matemática</td><td>8</td><td>9</td></tr><tr><td>Artística</td><td>3</td><td>5</td></tr></tbody></table>
      <p>Total: $n = 52$.</p>
      </div><div>
      <p>"Mujer <b>y</b> artística": una sola celda, $\mathbb{P} = \dfrac{5}{52}$.</p>
      <p>"Mujer": una columna completa, $\dfrac{30}{52}$.</p>
      <p>"Artística": una fila completa, $\dfrac{8}{52}$.</p>
      <div class="box"><b>Clave</b> "y" apunta a una celda; una característica sola apunta a una fila o columna. El denominador es el total de la tabla, salvo que la pregunta restrinja el grupo ("si se elige una mujer al azar…" → denominador 30).</div>
      </div></div>` },
    { t: 'Cuando los resultados no son equiprobables', b: r`
      <div class="cols"><div>
      <p>Un <b>dado cargado</b> viene con su tabla de probabilidades, que debe sumar 1. Ya no se cuentan casos: se <b>suman las probabilidades</b> de los resultados favorables.</p>
      <table><thead><tr><th>Cara</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th></tr></thead><tbody><tr><th>$\mathbb{P}$</th><td>0,2</td><td>0,1</td><td>0,1</td><td>0,1</td><td>0,4</td><td>0,1</td></tr></tbody></table>
      </div><div>
      <p>$\mathbb{P}(\text{mayor que } 4) = \mathbb{P}(5) + \mathbb{P}(6) = 0{,}4 + 0{,}1 = 0{,}5$.</p>
      <p>$\mathbb{P}(\text{par}) = 0{,}1 + 0{,}1 + 0{,}1 = 0{,}3$.</p>
      <p>Comparado con un dado común: $\mathbb{P}(6) = 0{,}1 < \dfrac{1}{6}$, y $\mathbb{P}(1 \text{ o } 2) = 0{,}3 \ne \dfrac{2}{6}$.</p>
      <div class="box"><b>Complemento</b> $\mathbb{P}(A^{c}) = 1 - \mathbb{P}(A)$. Si $\mathbb{P}(\text{lluvia}) = 0{,}3$, entonces $\mathbb{P}(\text{no lluvia}) = 0{,}7$.</div>
      </div></div>` },
    { t: 'Resumen', b: r`
      <table><thead><tr><th>Situación</th><th>Qué hacer</th></tr></thead><tbody>
      <tr><td>Resultados equiprobables</td><td>$\mathbb{P}(A) = \#A / \#\Omega$ (Laplace)</td></tr>
      <tr><td>Dos dados / varias monedas</td><td>$\#\Omega = 36$ / $2^k$; listar los favorables</td></tr>
      <tr><td>Tabla o gráfico de frecuencias</td><td>favorables = frecuencia, totales = $n$</td></tr>
      <tr><td>Tabla de doble entrada</td><td>"y" = celda; una condición = fila o columna</td></tr>
      <tr><td>Probabilidades dadas (dado cargado)</td><td>sumar las probabilidades favorables</td></tr>
      <tr><td>"No ocurre A"</td><td>$1 - \mathbb{P}(A)$</td></tr></tbody></table>
      <div class="box" style="margin-top:14px"><b>Método PAES</b> Escribe primero el denominador (¿cuántos casos totales hay <b>ahora</b>?) y después cuenta los favorables. La mayoría de los distractores tienen el denominador equivocado.</div>` }
  ],
  example: {
    src: 'PAES Invierno 2026, adaptada',
    enun: r`<p>En la tabla se presentan los resultados de una encuesta a un grupo de estudiantes sobre el área de preferencia para sus estudios superiores.</p><p>Si se selecciona al azar a una persona del grupo, ¿cuál es la probabilidad de que sea mujer y que escoja el área artística?</p>`,
    fig: { type: 'table', head: ['Área de preferencia', 'Hombre', 'Mujer'], rows: [['Científica', 7, 10], ['Humanista', 4, 6], ['Matemática', 8, 9], ['Artística', 3, 5]] },
    alts: [r`$\dfrac{5}{52}$`, r`$\dfrac{1}{5}$`, r`$\dfrac{5}{8}$`, r`$\dfrac{5}{30}$`], ok: 0,
    sol: r`<p>Casos totales: toda la tabla, $n = 7+10+4+6+8+9+3+5 = 52$.</p><p>Casos favorables: la celda "mujer y artística" $= 5$.</p><p>$$\mathbb{P} = \frac{5}{52}$$</p><p>$\dfrac{5}{8}$ sería restringir a los del área artística y $\dfrac{5}{30}$, restringir a las mujeres; ninguna restricción aparece en el enunciado.</p>`,
    conc: 'Sin condición en el enunciado, el denominador es el total de la tabla.'
  },
  bank: [
    { enun: r`<p>En un memorice de 20 tarjetas (10 pares), una persona voltea una tarjeta y aparece un rayo. No conoce la figura de ninguna de las otras tarjetas.</p><p>¿Cuál es la probabilidad de que encuentre el segundo rayo al voltear al azar la segunda tarjeta?</p>`,
      alts: [r`$\dfrac{1}{20}$`, r`$\dfrac{1}{19}$`, r`$\dfrac{2}{20}$`, r`$\dfrac{2}{19}$`], ok: 1,
      sol: r`<p>Quedan 19 tarjetas sin voltear y exactamente 1 tiene el otro rayo: $\mathbb{P} = \dfrac{1}{19}$.</p><p>El 20 ya no vale como total porque una tarjeta ya se descubrió.</p>`, conc: 'Actualiza Ω con lo que ya ocurrió.' },
    { enun: r`<p>Un juego consiste en escoger un número entre 2 y 12 y luego lanzar dos dados comunes y sumar los puntos. Si la suma coincide con el número escogido, se gana un punto.</p><p>¿Qué número debería escoger una persona para tener mayor probabilidad de ganar?</p>`,
      alts: ['12', '10', '7', '6'], ok: 2,
      sol: r`<p>De los 36 resultados posibles, la suma 7 aparece en 6 (1+6, 2+5, 3+4, 4+3, 5+2, 6+1); la suma 6 en 5; la 10 en 3; la 12 en 1.</p><p>$\mathbb{P}(7) = \dfrac{6}{36}$ es la mayor.</p>`, conc: 'Con dos dados, el 7 es la suma con más combinaciones.' },
    { enun: r`<p>En la tabla se presenta la probabilidad de obtener cada cara de un dado cargado.</p><p>¿Cuál de las siguientes afirmaciones es verdadera?</p>`,
      fig: { type: 'table', head: ['Cara', '1', '2', '3', '4', '5', '6'], rows: [['Probabilidad', '0,2', '0,1', '0,1', '0,1', '0,4', '0,1']] },
      alts: ['La probabilidad de obtener un número mayor que 4 es 0,5.', 'La probabilidad de obtener un 6 es la misma que en un dado común.', 'La probabilidad de obtener un número par es 0,1.', 'La probabilidad de obtener 1 o 2 es la misma que en un dado común.'], ok: 0,
      sol: r`<p>Mayor que 4: $\mathbb{P}(5) + \mathbb{P}(6) = 0{,}4 + 0{,}1 = 0{,}5$. ✔</p><p>$\mathbb{P}(6) = 0{,}1 \ne \dfrac{1}{6}$; par: $0{,}1 + 0{,}1 + 0{,}1 = 0{,}3$; "1 o 2": $0{,}3 \ne \dfrac{2}{6}$.</p>`, conc: 'Con probabilidades dadas se suman, no se cuentan casos.' },
    { enun: r`<p>Un juego consiste en lanzar tres monedas. El puntaje es $c - 2s$, donde $c$ y $s$ son la cantidad de caras y sellos obtenidos.</p><p>¿Cuál es la probabilidad de obtener un puntaje negativo en un lanzamiento?</p>`,
      alts: [r`$\dfrac{1}{8}$`, r`$\dfrac{1}{4}$`, r`$\dfrac{3}{8}$`, r`$\dfrac{1}{2}$`], ok: 3,
      sol: r`<p>$\#\Omega = 2^3 = 8$. Puntaje según sellos: $s=0$: $3$; $s=1$: $2-2=0$; $s=2$: $1-4=-3$; $s=3$: $-6$.</p><p>Negativo cuando $s \ge 2$: con 2 sellos hay 3 resultados (CSS, SCS, SSC) y con 3 sellos, 1 (SSS): $\dfrac{4}{8} = \dfrac{1}{2}$.</p>`, conc: 'Lista los 8 resultados y evalúa la condición en cada uno.' },
    { enun: r`<p>En el gráfico se presentan las preferencias de un grupo de personas respecto al dispositivo que usan para tomar notas.</p><p>Si se selecciona al azar una persona del grupo, ¿cuál es la probabilidad de que prefiera el computador?</p>`,
      fig: { type: 'bar', labels: ['Computador', 'Celular', 'Papel', 'Tablet'], values: [9, 10, 6, 3], mono: true, ylab: 'personas' },
      alts: [r`$\dfrac{1}{9}$`, r`$\dfrac{1}{4}$`, r`$\dfrac{9}{19}$`, r`$\dfrac{9}{28}$`], ok: 3,
      sol: r`<p>Total: $9 + 10 + 6 + 3 = 28$ personas. Favorables: 9.</p><p>$\mathbb{P} = \dfrac{9}{28}$. La opción $\dfrac{9}{19}$ usa como total solo computador + celular; $\dfrac{1}{4}$ cuenta categorías en vez de personas.</p>`, conc: 'El total es la suma de todas las barras.' },
    { enun: r`<p>Según un estudio, en la Región de Valparaíso hay 441 guías de turismo registrados. Las comunas con más guías son Rapa Nui (172), Valparaíso (64) y Viña del Mar (51).</p><p>Si se escoge al azar un guía de la región, ¿cuál expresión representa la probabilidad de que esté registrado en Valparaíso o en Viña del Mar?</p>`,
      alts: [r`$\dfrac{64 + 51}{441}$`, r`$\dfrac{64}{64 + 51}$`, r`$\dfrac{64 + 51}{172}$`, r`$\dfrac{64 + 51}{441 - 172}$`], ok: 0,
      sol: r`<p>Casos totales: los 441 guías de la región. Favorables: los de Valparaíso <b>o</b> Viña, $64 + 51 = 115$ (comunas distintas, no se repiten).</p><p>$\mathbb{P} = \dfrac{64 + 51}{441}$.</p>`, conc: '"O" entre categorías excluyentes: se suman los favorables sobre el mismo total.' },
    { enun: r`<p>Una ruleta está dividida en nueve partes de igual área: cuatro con estrella, tres con diamante y dos con fantasma.</p><p>¿Cuál es la probabilidad de que en un giro <b>no</b> salga fantasma?</p>`,
      alts: [r`$\dfrac{2}{9}$`, r`$\dfrac{4}{9}$`, r`$\dfrac{7}{9}$`, r`$\dfrac{7}{2}$`], ok: 2,
      sol: r`<p>$\mathbb{P}(\text{fantasma}) = \dfrac{2}{9}$, así que $\mathbb{P}(\text{no fantasma}) = 1 - \dfrac{2}{9} = \dfrac{7}{9}$.</p><p>Directo: estrellas + diamantes $= 4 + 3 = 7$ de 9 partes.</p>`, conc: 'Complemento: 1 − P(A).' },
    { enun: r`<p>El pronóstico indica que la probabilidad de que llueva mañana es 0,3.</p><p>¿Cuál es la probabilidad de que <b>no</b> llueva mañana?</p>`,
      alts: ['0,3', '0,5', '0,7', '1,3'], ok: 2,
      sol: r`<p>$\mathbb{P}(\text{no llueva}) = 1 - \mathbb{P}(\text{llueva}) = 1 - 0{,}3 = 0{,}7$.</p><p>1,3 es imposible: ninguna probabilidad supera 1.</p>`, conc: 'Un evento y su complemento suman 1.' }
  ]
},

{
  id: 'reglas', unit: 'Unidad 3 · Reglas de las probabilidades', icon: '🌳',
  title: 'Regla aditiva y multiplicativa',
  desc: '"O" y "y": eventos excluyentes, independientes, con y sin reposición, diagramas de árbol y "al menos uno".',
  slides: [
    { t: 'Regla aditiva: "A o B"', b: r`
      <div class="cols"><div>
      <p>Si $A$ y $B$ <b>no pueden ocurrir juntos</b> (mutuamente excluyentes, $A \cap B = \emptyset$):</p>
      $$\mathbb{P}(A \cup B) = \mathbb{P}(A) + \mathbb{P}(B)$$
      <p>Dado común, "sale 1 o 2": $\dfrac{1}{6} + \dfrac{1}{6} = \dfrac{2}{6} = \dfrac{1}{3}$.</p>
      </div><div>
      <p>Si <b>pueden ocurrir juntos</b>, lo común se contó dos veces y se descuenta:</p>
      $$\mathbb{P}(A \cup B) = \mathbb{P}(A) + \mathbb{P}(B) - \mathbb{P}(A \cap B)$$
      <p>"Par o mayor que 4": pares $\{2,4,6\}$, mayores que 4 $\{5,6\}$, común $\{6\}$: $\dfrac{3}{6} + \dfrac{2}{6} - \dfrac{1}{6} = \dfrac{4}{6}$. Comprobación: $\{2,4,5,6\}$ son 4 casos.</p>
      </div></div>` },
    { t: 'Regla multiplicativa: "A y luego B"', b: r`
      <div class="cols"><div>
      <p>Si los experimentos son <b>independientes</b> (uno no cambia al otro):</p>
      $$\mathbb{P}(A \cap B) = \mathbb{P}(A) \cdot \mathbb{P}(B)$$
      <p>Dado y moneda: "par y cara" $= \dfrac{1}{2}\cdot\dfrac{1}{2} = \dfrac{1}{4}$. Dos seis seguidos: $\dfrac{1}{6}\cdot\dfrac{1}{6} = \dfrac{1}{36}$.</p>
      </div><div>
      <div class="box"><b>Con reposición</b> se devuelve lo extraído: las probabilidades no cambian. Bolsa con 3 rojas y 2 azules, dos rojas: $\dfrac{3}{5}\cdot\dfrac{3}{5} = \dfrac{9}{25}$.</div>
      <div class="box alert"><b>Sin reposición</b> la segunda extracción tiene una bola menos y, si la primera fue roja, una roja menos: $\dfrac{3}{5}\cdot\dfrac{2}{4} = \dfrac{6}{20} = \dfrac{3}{10}$.</div>
      </div></div>` },
    { t: 'Diagrama de árbol', b: r`
      <div class="cols"><div>
      <p>Cada rama lleva su probabilidad. <b>A lo largo</b> de una rama se multiplica; <b>entre ramas</b> distintas que sirven se suma.</p>
      <p>$\mathbb{P}(\text{lluvia}) = 0{,}3$. Si llueve, $\mathbb{P}(\text{atraso}) = 0{,}5$; si no llueve, $0{,}1$.</p>
      $$\mathbb{P}(\text{atraso}) = 0{,}3 \cdot 0{,}5 + 0{,}7 \cdot 0{,}1 = 0{,}15 + 0{,}07 = 0{,}22$$
      </div><div>
      <div class="box"><b>Leer una expresión</b> La ruleta (4 estrellas, 3 diamantes, 2 fantasmas de 9) da $\mathbb{P}(\text{estrella}) = \frac{4}{9}$, $\mathbb{P}(\text{diamante}) = \frac{3}{9}$, $\mathbb{P}(\text{fantasma}) = \frac{2}{9}$. El término $\frac{4}{9}\cdot\frac{4}{9}\cdot\frac{2}{9}$ se lee <b>estrella, estrella, fantasma</b>: tres giros, en ese orden. La PAES pregunta qué representa cada término.</div>
      </div></div>` },
    { t: '"Al menos uno" y "ninguno"', b: r`
      <div class="cols"><div>
      <p>"Al menos uno" es lo contrario de "ninguno":</p>
      $$\mathbb{P}(\text{al menos uno}) = 1 - \mathbb{P}(\text{ninguno})$$
      <p>Dos monedas, al menos una cara: $\mathbb{P}(\text{ninguna cara}) = \mathbb{P}(SS) = \dfrac{1}{4}$, así que $1 - \dfrac{1}{4} = \dfrac{3}{4}$.</p>
      </div><div>
      <div class="box"><b>Traducción</b><br>· "y" → multiplicar (si son independientes o secuenciales).<br>· "o" → sumar (restar lo común si se solapan).<br>· "al menos uno" → 1 − ninguno.<br>· "no" → 1 − probabilidad.</div>
      </div></div>` },
    { t: 'Resumen', b: r`
      <table><thead><tr><th>Regla</th><th>Fórmula</th><th>Cuándo</th></tr></thead><tbody>
      <tr><td>Aditiva (excluyentes)</td><td>$\mathbb{P}(A\cup B) = \mathbb{P}(A) + \mathbb{P}(B)$</td><td>no pueden darse juntos</td></tr>
      <tr><td>Aditiva general</td><td>$\mathbb{P}(A) + \mathbb{P}(B) - \mathbb{P}(A\cap B)$</td><td>pueden darse juntos</td></tr>
      <tr><td>Multiplicativa</td><td>$\mathbb{P}(A\cap B) = \mathbb{P}(A)\cdot\mathbb{P}(B)$</td><td>independientes / con reposición</td></tr>
      <tr><td>Sin reposición</td><td>$\mathbb{P}(A)\cdot\mathbb{P}(B\,|\,A)$</td><td>la segunda cambia según la primera</td></tr>
      <tr><td>Complemento</td><td>$1 - \mathbb{P}(A)$</td><td>"no", "al menos uno"</td></tr></tbody></table>
      <div class="box" style="margin-top:14px"><b>Método PAES</b> Dibuja el árbol aunque sea pequeño, escribe la probabilidad en cada rama y verifica que las ramas que salen de un mismo punto sumen 1.</div>` }
  ],
  example: {
    src: 'PAES Invierno 2027, adaptada',
    enun: r`<p>Una ruleta está dividida en nueve partes de igual área: cuatro con estrella, tres con diamante y dos con fantasma. Un juego consiste en realizar 3 giros, pero si en alguno sale fantasma el juego termina. El premio es la suma de lo obtenido: cada estrella vale $50 000 y cada diamante $100 000.</p><p>La probabilidad de ganar exactamente $100 000 se calcula con la expresión</p>$$\frac{4}{9}\cdot\frac{4}{9}\cdot\frac{2}{9} + \frac{3}{9}\cdot\frac{2}{9}$$<p>¿Qué representa el término $\dfrac{4}{9}\cdot\dfrac{4}{9}\cdot\dfrac{2}{9}$ en la expresión anterior?</p>`,
    alts: ['La probabilidad de sacar estrella en el primer giro, estrella en el segundo y fantasma en el tercero.', 'La probabilidad de sacar diamante en el primer giro y estrella en el segundo.', 'La probabilidad de sacar diamante en el primer giro y fantasma en el segundo.', 'La probabilidad de sacar dos estrellas en los dos primeros giros y un diamante en el tercero.'], ok: 0,
    sol: r`<p>Cada factor es un giro: $\dfrac{4}{9}$ es estrella, $\dfrac{3}{9}$ diamante y $\dfrac{2}{9}$ fantasma.</p><p>$\dfrac{4}{9}\cdot\dfrac{4}{9}\cdot\dfrac{2}{9}$ = estrella, estrella, fantasma: $50\,000 + 50\,000 = 100\,000$ y el fantasma termina el juego. ✔</p><p>El otro término, $\dfrac{3}{9}\cdot\dfrac{2}{9}$, es diamante y luego fantasma: también suma exactamente $100\,000$.</p>`,
    conc: 'En un producto de probabilidades, cada factor es una etapa del experimento, en orden.'
  },
  bank: [
    { enun: r`<p>Una bolsa contiene 3 bolitas rojas y 2 azules. Se extraen dos bolitas al azar, una tras otra, <b>sin reposición</b>.</p><p>¿Cuál es la probabilidad de que ambas sean rojas?</p>`,
      alts: [r`$\dfrac{9}{25}$`, r`$\dfrac{3}{10}$`, r`$\dfrac{6}{25}$`, r`$\dfrac{1}{5}$`], ok: 1,
      sol: r`<p>Primera roja: $\dfrac{3}{5}$. Sin reposición quedan 4 bolitas y 2 rojas: $\dfrac{2}{4}$.</p><p>$\mathbb{P} = \dfrac{3}{5}\cdot\dfrac{2}{4} = \dfrac{6}{20} = \dfrac{3}{10}$. Con reposición habría dado $\dfrac{9}{25}$.</p>`, conc: 'Sin reposición: el denominador y los favorables bajan en la segunda extracción.' },
    { enun: r`<p>Una bolsa contiene 3 bolitas rojas y 2 azules. Se extrae una bolita, se anota su color y <b>se devuelve</b> a la bolsa; luego se extrae otra.</p><p>¿Cuál es la probabilidad de que ambas sean rojas?</p>`,
      alts: [r`$\dfrac{9}{25}$`, r`$\dfrac{3}{10}$`, r`$\dfrac{6}{10}$`, r`$\dfrac{3}{5}$`], ok: 0,
      sol: r`<p>Con reposición las extracciones son independientes y cada una tiene $\mathbb{P}(\text{roja}) = \dfrac{3}{5}$.</p><p>$\mathbb{P} = \dfrac{3}{5}\cdot\dfrac{3}{5} = \dfrac{9}{25}$.</p>`, conc: 'Con reposición se repite la misma probabilidad.' },
    { enun: r`<p>Se lanza un dado común y una moneda.</p><p>¿Cuál es la probabilidad de obtener un número par en el dado y cara en la moneda?</p>`,
      alts: [r`$\dfrac{1}{2}$`, r`$\dfrac{1}{3}$`, r`$\dfrac{1}{4}$`, r`$\dfrac{1}{12}$`], ok: 2,
      sol: r`<p>Son independientes: $\mathbb{P}(\text{par}) = \dfrac{3}{6} = \dfrac{1}{2}$ y $\mathbb{P}(\text{cara}) = \dfrac{1}{2}$.</p><p>$\mathbb{P} = \dfrac{1}{2}\cdot\dfrac{1}{2} = \dfrac{1}{4}$. Con Laplace: 3 casos favorables de 12.</p>`, conc: '"Y" entre experimentos independientes: multiplicar.' },
    { enun: r`<p>Se lanza un dado común.</p><p>¿Cuál es la probabilidad de obtener un 1 o un 2?</p>`,
      alts: [r`$\dfrac{1}{36}$`, r`$\dfrac{1}{6}$`, r`$\dfrac{1}{3}$`, r`$\dfrac{2}{3}$`], ok: 2,
      sol: r`<p>"Sale 1" y "sale 2" son excluyentes: $\mathbb{P} = \dfrac{1}{6} + \dfrac{1}{6} = \dfrac{2}{6} = \dfrac{1}{3}$.</p><p>$\dfrac{1}{36}$ es multiplicar en vez de sumar.</p>`, conc: '"O" entre excluyentes: sumar.' },
    { enun: r`<p>Se lanza un dado común.</p><p>¿Cuál es la probabilidad de obtener un número par <b>o</b> un número mayor que 4?</p>`,
      alts: [r`$\dfrac{5}{6}$`, r`$\dfrac{2}{3}$`, r`$\dfrac{1}{2}$`, r`$\dfrac{1}{6}$`], ok: 1,
      sol: r`<p>Par: $\{2,4,6\}$; mayor que 4: $\{5,6\}$; en común: $\{6\}$.</p><p>$\mathbb{P} = \dfrac{3}{6} + \dfrac{2}{6} - \dfrac{1}{6} = \dfrac{4}{6} = \dfrac{2}{3}$. Directo: $\{2,4,5,6\}$ son 4 de 6.</p><p>$\dfrac{5}{6}$ olvida restar el 6 contado dos veces.</p>`, conc: 'Si los eventos se solapan, resta la intersección.' },
    { enun: r`<p>Se lanzan dos monedas.</p><p>¿Cuál es la probabilidad de obtener <b>al menos una</b> cara?</p>`,
      alts: [r`$\dfrac{1}{4}$`, r`$\dfrac{1}{2}$`, r`$\dfrac{3}{4}$`, r`$1$`], ok: 2,
      sol: r`<p>"Al menos una cara" es lo contrario de "ninguna cara" (sello y sello): $\mathbb{P}(SS) = \dfrac{1}{2}\cdot\dfrac{1}{2} = \dfrac{1}{4}$.</p><p>$\mathbb{P}(\text{al menos una}) = 1 - \dfrac{1}{4} = \dfrac{3}{4}$. Comprobación: CC, CS, SC son 3 de 4.</p>`, conc: 'Al menos uno = 1 − ninguno.' },
    { enun: r`<p>La probabilidad de que mañana llueva es 0,3. Si llueve, la probabilidad de que un bus llegue atrasado es 0,5; si no llueve, es 0,1.</p><p>¿Cuál es la probabilidad de que mañana el bus llegue atrasado?</p>`,
      alts: ['0,15', '0,22', '0,40', '0,60'], ok: 1,
      sol: r`<p>Dos ramas llevan al atraso: llueve y se atrasa, $0{,}3\cdot 0{,}5 = 0{,}15$; no llueve y se atrasa, $0{,}7\cdot 0{,}1 = 0{,}07$.</p><p>$\mathbb{P}(\text{atraso}) = 0{,}15 + 0{,}07 = 0{,}22$.</p><p>0,15 considera solo la rama con lluvia; 0,6 suma probabilidades de ramas sin multiplicar.</p>`, conc: 'Árbol: multiplicar a lo largo de la rama, sumar las ramas que sirven.' },
    { enun: r`<p>Se lanza un dado común dos veces.</p><p>¿Cuál es la probabilidad de obtener un 6 en ambos lanzamientos?</p>`,
      alts: [r`$\dfrac{1}{3}$`, r`$\dfrac{1}{6}$`, r`$\dfrac{1}{12}$`, r`$\dfrac{1}{36}$`], ok: 3,
      sol: r`<p>Los lanzamientos son independientes: $\mathbb{P} = \dfrac{1}{6}\cdot\dfrac{1}{6} = \dfrac{1}{36}$.</p><p>$\dfrac{1}{3}$ sería sumar, $\dfrac{1}{12}$ multiplicar solo uno por $\dfrac{1}{2}$.</p>`, conc: 'Repeticiones independientes: se multiplican las probabilidades.' }
  ]
}
];

/* Figuras incrustadas en diapositivas (se rellenan al cargar la página con fig()). */
const SLIDE_FIGS = {
  tablas: { 0: { type: 'table', head: ['Puntaje $x_i$', 'Frecuencia $f_i$'], rows: [['1', 2], ['2', 4], ['3', 4], ['4', 5], ['5', 7], ['6', 3], ['7', 5], ['Total', '$n = 30$']] } },
  cajon: {
    0: { type: 'box', scale: [0, 40], ticks: 4, series: [{ min: 4, q1: 12, me: 18, q3: 26, max: 36 }] },
    2: { type: 'box', scale: [15, 40], ticks: 5, series: [{ min: 18, q1: 20, me: 27, q3: 31, max: 35 }] },
    3: { type: 'box', scale: [0, 60], ticks: 6, labels: false, series: [{ name: 'A', min: 10, q1: 18, me: 24, q3: 30, max: 42 }, { name: 'B', min: 14, q1: 26, me: 36, q3: 48, max: 58 }] }
  }
};
