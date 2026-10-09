/* Contenido de "PAES Química" (Fabimath, beta) · Unidad 3 · Soluciones químicas.
   Temario oficial Admisión 2027, área «Reacciones químicas y estequiometría», parte de soluciones:
   características y propiedades de las soluciones, solubilidad y sus factores, unidades de concentración
   físicas (% m/m, % m/v, % v/v, ppm) y químicas (mol/L, mol/kg, fracción molar), dilución y mezclas.
   Tipos de pregunta modelados en PAES Invierno 2026, PAES Regular 2026 y PAES Invierno 2027 (paes/quimica/fuentes/).
   Figuras TikZ: paes/quimica/tikz/sol_*.tex → paes/quimica/fig/sol_*.svg. Cálculos verificados en _tmp/verifica_soluciones.py. */
const QUI_SOLUCIONES = [

/* =====================================================================
   1. CARACTERÍSTICAS DE LAS SOLUCIONES Y SOLUBILIDAD
   ===================================================================== */
{
  id: 'qui_soluciones', unit: 'Unidad 3 · Soluciones químicas', icon: '🧂',
  title: 'Características de las soluciones y solubilidad',
  desc: 'Soluto y solvente, propiedades de las soluciones, soluciones insaturadas, saturadas y sobresaturadas, solubilidad y los factores que la cambian, y cómo leer una curva de solubilidad.',
  slides: [
    { t: '¿Qué es una solución?', b: r`
      <div class="cols"><div>
      <p>Una <b>solución</b> (o disolución) es una <b>mezcla homogénea</b>: a simple vista, e incluso con microscopio, se ve una sola fase. Tiene dos tipos de componentes:</p>
      <ul><li><b>Soluto</b>: lo que se disuelve. Por lo general está en menor cantidad, y puede haber más de uno.</li>
      <li><b>Solvente</b> (o disolvente): lo que disuelve. Está en mayor cantidad y define el estado de la solución. El agua es el solvente más común, por eso se le llama <b>solvente universal</b>; las soluciones en agua se llaman <b>acuosas</b>.</li></ul>
      <p>Las masas se suman: <b>masa de solución = masa de soluto + masa de solvente</b>. Si disuelves 10 g de sal en 90 g de agua, obtienes 100 g de solución. Los volúmenes, en cambio, no siempre se suman exactamente (50 mL de etanol con 50 mL de agua dan unos 97 mL). Por eso los problemas dicen "considere volúmenes aditivos" cuando quieren que los sumes.</p>
      <div class="qfig"><img class="tikz" src="paes/quimica/fig/sol_particulas.svg" alt="Cristales de sal (soluto) más agua (solvente) forman una solución de una sola fase"></div>
      </div><div>
      <div class="box"><b>Soluciones en los tres estados</b><table><thead><tr><th>Solución</th><th>Soluto en solvente</th><th>Ejemplo</th></tr></thead><tbody>
      <tr><td>Gaseosa</td><td>gas en gas</td><td>aire (O<sub>2</sub>, Ar y CO<sub>2</sub> en N<sub>2</sub>)</td></tr>
      <tr><td>Líquida</td><td>sólido en líquido</td><td>agua de mar, suero fisiológico</td></tr>
      <tr><td>Líquida</td><td>gas en líquido</td><td>bebida gaseosa (CO<sub>2</sub> en agua)</td></tr>
      <tr><td>Líquida</td><td>líquido en líquido</td><td>vinagre (ácido acético en agua), vino</td></tr>
      <tr><td>Sólida</td><td>sólido en sólido</td><td>bronce (estaño en cobre), acero (carbono en hierro)</td></tr></tbody></table></div>
      <div class="box alert"><b>¿Quién es el solvente?</b> El que define el estado de la solución y, casi siempre, el que está en mayor cantidad. En el aire es el nitrógeno (78 %). En una bebida con mucha azúcar, el solvente sigue siendo el agua.</div>
      </div></div>` },
    { t: 'Propiedades de las soluciones', b: r`
      <div class="cols"><div>
      <p>Una solución verdadera cumple con todo esto:</p>
      <ul><li><b>Una sola fase</b>: es homogénea; cualquier gota tiene la misma composición.</li>
      <li><b>Es transparente</b>, aunque puede tener color (el sulfato de cobre(II) en agua es azul).</li>
      <li><b>El soluto no sedimenta</b>: aunque la dejes reposar días, no se va al fondo.</li>
      <li><b>No se separa por filtración</b>: el soluto atraviesa el papel filtro. Sí se separa con métodos que cambian de estado, como la <b>evaporación</b> (queda el sólido) o la <b>destilación</b>.</li>
      <li><b>Composición variable</b>: puedes poner más o menos soluto (hasta un límite) y sigue siendo solución. Un compuesto, en cambio, tiene composición fija.</li>
      <li><b>Conduce la corriente</b> solo si el soluto es un <b>electrolito</b> (sales como NaCl, ácidos, bases), que libera iones. Si el soluto es molecular, como el azúcar o el etanol, no conduce.</li></ul>
      </div><div>
      <div class="box"><b>Ejemplo: agua con sal y agua con arena</b><table><thead><tr><th>Propiedad</th><th>Agua con sal</th><th>Agua con arena</th></tr></thead><tbody>
      <tr><td>Fases</td><td>1</td><td>2</td></tr>
      <tr><td>¿Sedimenta al reposar?</td><td>No</td><td>Sí</td></tr>
      <tr><td>¿Se separa al filtrar?</td><td>No</td><td>Sí</td></tr>
      <tr><td>¿Conduce la corriente?</td><td>Sí (iones Na<sup>+</sup> y Cl<sup>−</sup>)</td><td>No (como el agua pura, casi nada)</td></tr>
      <tr><td>Tipo de mezcla</td><td>Solución</td><td>Mezcla heterogénea</td></tr></tbody></table></div>
      <div class="box alert"><b>Disolver no es reaccionar</b> Cuando el azúcar se disuelve, sus moléculas se separan y se rodean de agua, pero siguen siendo azúcar: es un cambio físico. Si evaporas el agua, recuperas el azúcar.</div>
      </div></div>` },
    { t: 'Insaturada, saturada y sobresaturada', b: r`
      <div class="cols"><div>
      <p><b>1. Diluida o concentrada.</b> Es una comparación entre soluciones: un jugo con poco polvo está <b>diluido</b> y uno con mucho, <b>concentrado</b>. Son términos relativos: no dicen si cabe más soluto.</p>
      <p><b>2. Según la solubilidad.</b> Cada soluto tiene un máximo que se disuelve en cierta cantidad de solvente a una temperatura: su <b>solubilidad</b>. Comparando con ese máximo:</p>
      <ul><li><b>Insaturada</b>: tiene menos soluto que el máximo. Si agregas más, se disuelve.</li>
      <li><b>Saturada</b>: tiene justo el máximo. Si agregas más, queda sin disolver en el fondo, y la solución sigue saturada.</li>
      <li><b>Sobresaturada</b>: tiene disuelto más que el máximo. Se logra disolviendo en caliente y enfriando sin mover el recipiente. Es <b>inestable</b>: un golpe o un cristal "semilla" hace que el exceso precipite de golpe, y queda saturada.</li></ul>
      <div class="qfig"><img class="tikz" src="paes/quimica/fig/sol_clasificacion.svg" alt="Cuatro vasos con 100 g de agua: insaturada con 20 g de sal, saturada con 36 g, saturada con 14 g de exceso en el fondo, y sobresaturada"></div>
      </div><div>
      <div class="box"><b>Ejemplo resuelto</b> La solubilidad de una sal es 36 g por 100 g de agua a 20 °C. ¿Qué pasa si agregas 50 g de sal a 200 g de agua a 20 °C?<br>
      <b>Paso 1.</b> Escala el máximo a la masa de agua: 200 g de agua disuelven $2\cdot 36 = 72$ g.<br>
      <b>Paso 2.</b> Compara: $50 \lt 72$, así que se disuelve todo. La solución es <b>insaturada</b> y todavía caben $72 - 50 = 22$ g.<br>
      <b>Paso 3.</b> ¿Y si los 50 g van en solo 100 g de agua? Se disuelven 36 g y quedan $50 - 36 = 14$ g en el fondo: <b>saturada</b> con exceso.</div>
      <div class="box alert"><b>Sobresaturada no es "con sal en el fondo"</b> Si queda sólido en el fondo, la solución está <b>saturada</b>. Sobresaturada es tener disuelto más que el máximo, sin sólido, y es inestable.</div>
      </div></div>` },
    { t: 'La solubilidad y sus factores', b: r`
      <div class="cols"><div>
      <p>La <b>solubilidad</b> es la máxima cantidad de soluto que se disuelve en una cantidad dada de solvente a cierta temperatura (y presión). Se suele dar en <b>g de soluto por 100 g de agua</b>. Depende de tres factores:</p>
      <p><b>1. Naturaleza del soluto y del solvente.</b> "Lo semejante disuelve a lo semejante": las sustancias <b>polares</b> o iónicas se disuelven en solventes polares, como el agua; las <b>apolares</b>, en solventes apolares. La sal y el azúcar se disuelven en agua; el aceite no, y forma dos fases. El yodo (apolar) casi no se disuelve en agua, pero sí en hexano.</p>
      <p><b>2. Temperatura.</b> En la mayoría de los sólidos, la solubilidad <b>aumenta</b> al subir la temperatura (algunas sales, como el carbonato de litio, hacen lo contrario). En los <b>gases</b> siempre <b>disminuye</b>: el agua tibia retiene menos gas. Por eso una bebida tibia pierde el gas más rápido y un río con agua tibia tiene menos oxígeno para los peces.</p>
      <p><b>3. Presión.</b> Afecta casi solo a los <b>gases</b>: a mayor presión del gas sobre el líquido, más gas se disuelve (ley de Henry). La bebida se embotella con CO<sub>2</sub> a alta presión; al abrirla, la presión baja y el gas escapa en burbujas.</p>
      </div><div>
      <div class="qfig"><img class="tikz" src="paes/quimica/fig/sol_gas.svg" alt="Gráfico: la masa de gas disuelto en un litro de agua baja al subir la temperatura y es el doble a 2 atm que a 1 atm"></div>
      <p>Datos inventados para un gas cualquiera, con la forma real: al calentar baja la solubilidad, y al duplicar la presión se duplica.</p>
      <div class="box alert"><b>Solubilidad no es rapidez</b> Agitar o moler el soluto hace que se disuelva <b>más rápido</b>, pero no cambia <b>cuánto</b> se disuelve como máximo. De los factores de la vida diaria, solo la temperatura (y, en gases, la presión) cambia la solubilidad.</div>
      <div class="box"><b>Pistas en un ensayo de solubilidad</b> Dos líquidos que se mezclan en una sola fase son del mismo tipo (los dos polares o los dos apolares). Si forman dos fases, son de distinto tipo; arriba queda el menos denso.</div>
      </div></div>` },
    { t: 'Curvas de solubilidad', b: r`
      <div class="cols"><div>
      <div class="qfig"><img class="tikz" src="paes/quimica/fig/sol_curvas.svg" alt="Curvas de solubilidad de tres sales entre 0 y 80 °C: la A sube de 15 a 150 g, la B casi constante cerca de 36 g y la C baja de 60 a 20 g"></div>
      <p>Una <b>curva de solubilidad</b> muestra la solubilidad de una sustancia (eje vertical) a cada temperatura (eje horizontal). El gráfico tiene datos inventados para tres sales: la A se comporta como el nitrato de potasio (sube mucho al calentar), la B como el cloruro de sodio (casi no cambia) y la C como el carbonato de litio (baja al calentar).</p>
      <p><b>Cómo leerla.</b> Sube desde la temperatura hasta la curva y lee a la izquierda: la sal A a 40 °C tiene una solubilidad de 60 g por 100 g de agua.</p>
      <p><b>Dónde está tu solución.</b> Ubica el punto (temperatura; g de soluto por 100 g de agua): <b>justo en la curva</b>, saturada; <b>debajo</b>, insaturada; <b>por encima</b>, sobresaturada (o saturada con el exceso sin disolver). Si dos curvas se cortan, las dos sales tienen la misma solubilidad a esa temperatura: A y C, a 30 °C, con 45 g.</p>
      </div><div>
      <div class="box"><b>Ejemplo resuelto: masa que cristaliza al enfriar</b> Una solución saturada de sal A con 200 g de agua a 60 °C se enfría hasta 20 °C. ¿Cuántos gramos de sal cristalizan?<br>
      <b>Paso 1. Lee la curva.</b> A 60 °C: 100 g por 100 g de agua. A 20 °C: 30 g por 100 g de agua.<br>
      <b>Paso 2. Escala a 200 g de agua</b> (multiplica por 2): a 60 °C hay 200 g de sal disuelta; a 20 °C caben solo 60 g.<br>
      <b>Paso 3. Lo que no cabe, cristaliza:</b> $200 - 60 = 140$ g.<br>
      <b>Comprobación:</b> 60 g disueltos + 140 g de cristales = 200 g, toda la sal que había. ✔</div>
      <div class="box alert"><b>Escala por la masa de agua</b> La curva está hecha para 100 g de agua. Con 50 g de agua, divide por 2; con 300 g, multiplica por 3. Y con una sal como la C pasa al revés: cristaliza al <b>calentar</b>.</div>
      </div></div>` },
    { t: 'Lo clave del tema', b: r`
      <div class="cols"><div>
      <table><thead><tr><th>Concepto</th><th>Lo esencial</th></tr></thead><tbody>
      <tr><td>Solución</td><td>Mezcla homogénea de soluto y solvente. masa solución = masa soluto + masa solvente.</td></tr>
      <tr><td>Propiedades</td><td>Una fase, no sedimenta, no se separa al filtrar, composición variable; conduce si el soluto es electrolito.</td></tr>
      <tr><td>Insaturada / saturada / sobresaturada</td><td>Menos / igual / más soluto disuelto que la solubilidad.</td></tr>
      <tr><td>Solubilidad</td><td>Máximo de soluto por 100 g de agua a una temperatura.</td></tr>
      <tr><td>Factores</td><td>Naturaleza (semejante disuelve a semejante); temperatura (sólidos: casi siempre sube; gases: baja); presión (solo gases: sube).</td></tr>
      <tr><td>Curva</td><td>En la curva, saturada; debajo, insaturada. Cristaliza = lo disuelto antes − lo que cabe después, escalado a la masa de agua.</td></tr></tbody></table>
      </div><div>
      <div class="box"><b>Recuerda</b><br>· Si queda sal en el fondo, la solución está saturada; la sobresaturada no deja sólido.<br>· La curva de solubilidad es por 100 g de agua: multiplica por (g de agua)/100.<br>· Agitar solo hace que se disuelva más rápido; no cambia la solubilidad.<br>· Los gases se disuelven menos al calentar y más al subir la presión.</div>
      <div class="box"><b>Método para la PAES</b> 1. Identifica soluto, solvente y temperatura. 2. Si te dan la solubilidad, escálala a la masa de agua y compara. 3. En curvas, lee los dos puntos, escala y resta. 4. En experimentos, busca qué variable cambia entre ensayos y cuáles se mantienen.</div>
      </div></div>` }
  ],
  example: {
    src: 'PAES Invierno 2027, adaptada',
    enun: r`Daniela investiga la solubilidad del cloruro de potasio (KCl) en agua a 20 °C. En tres matraces Erlenmeyer pone 100 g de agua y agrega distintas masas de KCl sólido. Agita cada mezcla durante 10 minutos, las deja reposar y registra lo que observa en la tabla. Finalmente, filtra la mezcla del matraz 3, evapora el agua del líquido filtrado y obtiene 34,0 g de KCl.<br>De acuerdo con estos resultados, ¿cuál es una inferencia correcta?`,
    fig: { type: 'table', head: ['Matraz', 'Masa de KCl agregada (g)', '¿Queda sólido sin disolver?'], rows: [['1', '30,0', 'No'], ['2', '34,0', 'No'], ['3', '38,0', 'Sí']] },
    alts: ['La solución del matraz 1 está saturada.', 'La solución del matraz 2 contiene la máxima masa de KCl que se disuelve en 100 g de agua a 20 °C.', 'La solución del matraz 3 contiene 38,0 g de KCl disueltos.', 'La solución del matraz 3 está sobresaturada, porque se agregó más KCl que su solubilidad.'],
    ok: 1,
    sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Una inferencia: una conclusión que se deduce de los datos. Primero hay que encontrar la solubilidad del KCl a 20 °C.</p>
      <p><b>Paso 2. Encuentra la solubilidad.</b> En el matraz 3 quedó sólido sin disolver, así que el líquido de arriba es una solución <b>saturada</b>. Al filtrar se separa el sólido; al evaporar el agua del líquido filtrado queda justo lo que estaba disuelto: 34,0 g. Entonces la solubilidad es <b>34 g de KCl por 100 g de agua</b> a 20 °C.</p>
      <p><b>Paso 3. Clasifica cada matraz</b> (todos tienen 100 g de agua):</p>
      <ul><li>Matraz 1: $30 \lt 34$, se disuelve todo y caben 4 g más: <b>insaturada</b>.</li>
      <li>Matraz 2: $34 = 34$, se disuelve todo y no cabe nada más: <b>saturada</b>, con la máxima masa posible.</li>
      <li>Matraz 3: se disuelven 34 g y quedan $38 - 34 = 4$ g en el fondo: <b>saturada con exceso</b>.</li></ul>
      <p><b>Respuesta:</b> la solución del matraz 2 contiene la máxima masa de KCl que se disuelve en 100 g de agua a 20 °C.</p>
      <p><b>Comprobación:</b> en el matraz 3, 34 g disueltos + 4 g en el fondo = 38 g, lo que se agregó. Si Daniela secara el sólido retenido en el filtro, debería pesar unos 4 g.</p>
      <p><b>¿Por qué no las otras?</b> «Matraz 1 saturada»: tiene 30 g y el máximo es 34 g, así que aún caben 4 g. «Matraz 3 con 38,0 g disueltos»: 4 g no se disolvieron y quedaron en el filtro, por eso al evaporar se obtuvieron 34 g y no 38 g. «Matraz 3 sobresaturada»: una solución con sólido en el fondo está saturada; la sobresaturada tiene disuelto más que el máximo, sin sólido, y es inestable.</p>`,
    conc: 'Al filtrar una mezcla saturada y evaporar el líquido obtienes justo la solubilidad: lo que sobra quedó en el fondo, no en la solución.'
  },
  bank: [
    /* Tipo 1 · Clasificar soluciones con la solubilidad (I, II y III) — PAES Invierno 2027 (pregunta 80) */
    { src: 'PAES Invierno 2027, adaptada',
      enun: r`La solubilidad de una sal X en agua es 40 g por cada 100 g de agua a 25 °C. A esa temperatura, ¿cuál(es) de las siguientes afirmaciones es (son) correcta(s)?<br>I) Al agregar 30 g de X a 100 g de agua se forma una solución insaturada.<br>II) Al agregar 30 g de X a 50 g de agua quedan 10 g de X sin disolver.<br>III) Al agregar 60 g de X a 200 g de agua quedan 20 g de X sin disolver.`,
      alts: ['Solo I', 'Solo I y II', 'Solo II y III', 'I, II y III'], ok: 1,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Revisar cada afirmación comparando la sal agregada con el máximo que cabe en esa masa de agua.</p>
      <p><b>Paso 2. Afirmación I.</b> 100 g de agua disuelven 40 g; $30 \lt 40$: se disuelve todo y es insaturada. <b>Correcta.</b></p>
      <p><b>Paso 3. Afirmación II.</b> 50 g de agua disuelven la mitad: $40 \cdot \dfrac{50}{100} = 20$ g. Quedan $30 - 20 = 10$ g sin disolver. <b>Correcta.</b></p>
      <p><b>Paso 4. Afirmación III.</b> 200 g de agua disuelven el doble: $2\cdot 40 = 80$ g. Como $60 \lt 80$, se disuelve todo. <b>Incorrecta.</b></p>
      <p><b>Respuesta:</b> solo I y II.</p>
      <p><b>¿Por qué no las otras?</b> «Solo I» olvida escalar en II: con 50 g de agua el máximo no es 40 g sino 20 g. «Solo II y III» y «I, II y III» comparan en III los 60 g con 40 g sin multiplicar por 2 la masa de agua.</p>`,
      conc: 'La solubilidad es por 100 g de agua: antes de comparar, escálala a la masa de agua que tienes.' },
    { src: 'PAES Invierno 2027, adaptada',
      enun: r`La solubilidad del cloruro de sodio (NaCl) en agua es 36 g por cada 100 g de agua a 20 °C. A esa temperatura, ¿cuál(es) de las siguientes afirmaciones es (son) correcta(s)?<br>I) Al agregar 40 g de NaCl a 100 g de agua, se disuelve todo.<br>II) Al agregar 18 g de NaCl a 50 g de agua se forma una solución saturada, sin sólido en el fondo.<br>III) Al agregar 50 g de NaCl a 150 g de agua se forma una solución insaturada.`,
      alts: ['Solo I', 'Solo II', 'Solo II y III', 'I, II y III'], ok: 2,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Comparar, en cada caso, la sal agregada con el máximo que cabe en esa masa de agua.</p>
      <p><b>Paso 2. Afirmación I.</b> En 100 g de agua caben 36 g; con 40 g quedan $40 - 36 = 4$ g sin disolver. <b>Incorrecta.</b></p>
      <p><b>Paso 3. Afirmación II.</b> En 50 g de agua caben $36 \cdot \dfrac{50}{100} = 18$ g: justo lo que se agregó. Saturada y sin exceso. <b>Correcta.</b></p>
      <p><b>Paso 4. Afirmación III.</b> En 150 g de agua caben $36 \cdot 1{,}5 = 54$ g. Como $50 \lt 54$, se disuelve todo: insaturada. <b>Correcta.</b></p>
      <p><b>Respuesta:</b> solo II y III.</p>
      <p><b>¿Por qué no las otras?</b> «Solo I» y «I, II y III» aceptan I, pero 40 g supera el máximo de 36 g. «Solo II» descarta III comparando 50 g con 36 g sin escalar a 150 g de agua.</p>`,
      conc: 'Con exactamente el máximo, la solución está saturada; con menos, insaturada; con más, sobra sólido.' },
    { src: 'PAES Invierno 2027, adaptada',
      enun: r`La solubilidad de una sal Y en agua es 50 g por cada 100 g de agua a 40 °C. A esa temperatura, ¿cuál(es) de las siguientes afirmaciones es (son) correcta(s)?<br>I) Al agregar 25 g de Y a 100 g de agua se forma una solución insaturada.<br>II) Al agregar 40 g de Y a 50 g de agua quedan 15 g de Y sin disolver.<br>III) Al agregar 110 g de Y a 200 g de agua quedan 10 g de Y sin disolver.`,
      alts: ['Solo I', 'Solo II', 'Solo I y III', 'I, II y III'], ok: 3,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Revisar cada afirmación con el máximo escalado a la masa de agua.</p>
      <p><b>Paso 2. Afirmación I.</b> En 100 g de agua caben 50 g; $25 \lt 50$: insaturada. <b>Correcta.</b></p>
      <p><b>Paso 3. Afirmación II.</b> En 50 g de agua caben $50 \cdot \dfrac{50}{100} = 25$ g. Quedan $40 - 25 = 15$ g sin disolver. <b>Correcta.</b></p>
      <p><b>Paso 4. Afirmación III.</b> En 200 g de agua caben $2\cdot 50 = 100$ g. Quedan $110 - 100 = 10$ g sin disolver. <b>Correcta.</b></p>
      <p><b>Respuesta:</b> I, II y III.</p>
      <p><b>¿Por qué no las otras?</b> «Solo I» y «Solo I y III» fallan en II al comparar 40 g con 50 g sin ver que en 50 g de agua solo caben 25 g. «Solo II» descarta I y III, que también se cumplen al escalar bien.</p>`,
      conc: 'Masa sin disolver = masa agregada − solubilidad · (g de agua / 100).' },

    /* Tipo 2 · Curva de solubilidad: masa que cristaliza — Estilo PAES (guía del profe) */
    { src: 'Estilo PAES',
      enun: r`El gráfico muestra las curvas de solubilidad de tres sales. Una solución saturada de la sal A, preparada con 100 g de agua a 60 °C, se enfría hasta 20 °C. ¿Qué masa de sal A cristaliza (se separa como sólido)?`,
      fig: { type: 'img', src: 'paes/quimica/fig/sol_curvas.svg', alt: 'Curvas de solubilidad: sal A sube de 15 g a 0 °C a 150 g a 80 °C; sal B casi constante cerca de 36 g; sal C baja de 60 g a 20 g', cap: 'Datos inventados para el ejercicio.' },
      alts: ['130 g', '100 g', '70 g', '30 g'], ok: 2,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> La masa de sal que deja de caber en el agua al enfriar.</p>
      <p><b>Paso 2. Lee la curva de A.</b> A 60 °C la solubilidad es 100 g por 100 g de agua; a 20 °C es 30 g.</p>
      <p><b>Paso 3. Resta.</b> Hay 100 g de agua, así que no hay que escalar: había 100 g disueltos y ahora caben 30 g. Cristalizan $100 - 30 = 70$ g.</p>
      <p><b>Respuesta:</b> 70 g.</p>
      <p><b>Comprobación:</b> 30 g que siguen disueltos + 70 g de cristales = 100 g, la sal que había. ✔</p>
      <p><b>¿Por qué no las otras?</b> 30 g es lo que queda disuelto a 20 °C, no lo que cristaliza. 100 g es toda la sal disuelta a 60 °C. 130 g suma las dos lecturas en vez de restarlas.</p>`,
      conc: 'Masa que cristaliza = lo disuelto a la temperatura alta − lo que cabe a la temperatura baja.' },
    { src: 'Estilo PAES',
      enun: r`El gráfico muestra las curvas de solubilidad de tres sales. Una solución saturada de la sal A, preparada con 200 g de agua a 40 °C, se enfría hasta 20 °C. ¿Qué masa de sal A cristaliza?`,
      fig: { type: 'img', src: 'paes/quimica/fig/sol_curvas.svg', alt: 'Curvas de solubilidad: sal A sube de 15 g a 0 °C a 150 g a 80 °C; sal B casi constante cerca de 36 g; sal C baja de 60 g a 20 g', cap: 'Datos inventados para el ejercicio.' },
      alts: ['30 g', '60 g', '90 g', '120 g'], ok: 1,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> La masa de sal A que se separa al enfriar 200 g de agua saturada.</p>
      <p><b>Paso 2. Lee la curva de A.</b> A 40 °C: 60 g por 100 g de agua. A 20 °C: 30 g por 100 g de agua.</p>
      <p><b>Paso 3. Escala a 200 g de agua</b> (por 2): a 40 °C hay $2\cdot 60 = 120$ g disueltos; a 20 °C caben $2\cdot 30 = 60$ g.</p>
      <p><b>Paso 4. Resta:</b> $120 - 60 = 60$ g.</p>
      <p><b>Respuesta:</b> 60 g.</p>
      <p><b>Comprobación:</b> 60 g disueltos + 60 g de cristales = 120 g. ✔</p>
      <p><b>¿Por qué no las otras?</b> 30 g es $60 - 30$ sin escalar a 200 g de agua. 90 g escala solo una de las lecturas: $120 - 30$. 120 g es toda la sal disuelta a 40 °C.</p>`,
      conc: 'Escala las dos lecturas de la curva a la masa de agua antes de restar.' },
    { src: 'Estilo PAES',
      enun: r`El gráfico muestra las curvas de solubilidad de tres sales. Una solución saturada de la sal C, preparada con 100 g de agua a 20 °C, se calienta hasta 60 °C. ¿Qué masa de sal C se separa como sólido?`,
      fig: { type: 'img', src: 'paes/quimica/fig/sol_curvas.svg', alt: 'Curvas de solubilidad: sal A sube de 15 g a 0 °C a 150 g a 80 °C; sal B casi constante cerca de 36 g; sal C baja de 60 g a 20 g', cap: 'Datos inventados para el ejercicio.' },
      alts: ['50 g', '30 g', '20 g', '0 g'], ok: 2,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Cuánta sal C deja de caber al calentar. Ojo: la curva de C <b>baja</b> con la temperatura.</p>
      <p><b>Paso 2. Lee la curva de C.</b> A 20 °C: 50 g por 100 g de agua. A 60 °C: 30 g por 100 g de agua.</p>
      <p><b>Paso 3. Resta.</b> Había 50 g disueltos y a 60 °C caben solo 30 g: se separan $50 - 30 = 20$ g.</p>
      <p><b>Respuesta:</b> 20 g.</p>
      <p><b>Comprobación:</b> 30 g disueltos + 20 g de sólido = 50 g. ✔</p>
      <p><b>¿Por qué no las otras?</b> 0 g supone que al calentar siempre cabe más sal, lo que no ocurre con C. 30 g es lo que queda disuelto a 60 °C. 50 g es toda la sal disuelta al inicio.</p>`,
      conc: 'No todas las sales se disuelven más al calentar: mira si la curva sube o baja.' },

    /* Tipo 3 · Variables de un ensayo de solubilidad — PAES Invierno 2027 (pregunta 18) */
    { src: 'PAES Invierno 2027, adaptada',
      enun: r`Un grupo de estudiantes quiere averiguar qué factores influyen en la solubilidad del dióxido de carbono (CO<sub>2</sub>) en agua. Para ello, en recipientes cerrados disuelve CO<sub>2</sub> en agua en cuatro ensayos, con las condiciones de la tabla.<br>¿Cuál de las siguientes relaciones permite analizar correctamente el efecto de uno de los factores?`,
      fig: { type: 'table', head: ['Ensayo', 'Temperatura (°C)', 'Presión de CO<sub>2</sub> (atm)', 'Volumen de agua (mL)'], rows: [['1', '10', '1', '500'], ['2', '10', '2', '500'], ['3', '30', '1', '500'], ['4', '30', '2', '250']] },
      alts: ['Relacionar los ensayos 1 y 2 permite analizar el efecto de la temperatura.', 'Relacionar los ensayos 1 y 3 permite analizar el efecto de la temperatura.', 'Relacionar los ensayos 2 y 4 permite analizar el efecto de la presión.', 'Relacionar los ensayos 3 y 4 permite analizar el efecto de la presión.'], ok: 1,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Un par de ensayos en que cambie <b>solo un</b> factor; así cualquier diferencia se debe a ese factor.</p>
      <p><b>Paso 2. Compara cada par.</b></p>
      <ul><li>1 y 2: cambia solo la presión (1 y 2 atm). Sirve para la presión, no para la temperatura.</li>
      <li>1 y 3: cambia solo la temperatura (10 y 30 °C); presión y volumen iguales. ✔</li>
      <li>2 y 4: cambian la temperatura y el volumen de agua.</li>
      <li>3 y 4: cambian la presión y el volumen de agua.</li></ul>
      <p><b>Respuesta:</b> relacionar los ensayos 1 y 3 permite analizar el efecto de la temperatura.</p>
      <p><b>¿Por qué no las otras?</b> En 1 y 2 la temperatura es la misma, así que no se puede estudiar su efecto. En 2 y 4, y en 3 y 4, cambian dos factores a la vez y no se sabe cuál causó la diferencia.</p>`,
      conc: 'Para estudiar un factor, compara ensayos en que solo ese factor cambia y todo lo demás se mantiene.' },
    { src: 'PAES Invierno 2027, adaptada',
      enun: r`Para estudiar la solubilidad del yodo (I<sub>2</sub>), una investigadora realiza cuatro ensayos con las condiciones de la tabla.<br>¿Cuál de las siguientes relaciones permite analizar correctamente el efecto de uno de los factores?`,
      fig: { type: 'table', head: ['Ensayo', 'Temperatura (°C)', 'Solvente', 'Masa de solvente (g)'], rows: [['1', '20', 'agua', '100'], ['2', '40', 'agua', '100'], ['3', '40', 'hexano', '100'], ['4', '20', 'hexano', '50']] },
      alts: ['Relacionar los ensayos 1 y 3 permite analizar el efecto del tipo de solvente.', 'Relacionar los ensayos 1 y 4 permite analizar el efecto del tipo de solvente.', 'Relacionar los ensayos 3 y 4 permite analizar el efecto de la temperatura.', 'Relacionar los ensayos 2 y 3 permite analizar el efecto del tipo de solvente.'], ok: 3,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El par de ensayos en que cambia un solo factor.</p>
      <p><b>Paso 2. Compara cada par.</b></p>
      <ul><li>1 y 3: cambian la temperatura y el solvente.</li>
      <li>1 y 4: cambian el solvente y la masa de solvente.</li>
      <li>3 y 4: cambian la temperatura y la masa de solvente.</li>
      <li>2 y 3: cambia solo el solvente (agua y hexano); temperatura y masa iguales. ✔</li></ul>
      <p><b>Respuesta:</b> relacionar los ensayos 2 y 3 permite analizar el efecto del tipo de solvente.</p>
      <p><b>¿Por qué no las otras?</b> En los otros tres pares cambian dos condiciones a la vez, así que no se puede atribuir el resultado a una sola.</p>`,
      conc: 'Un buen control cambia una sola variable; las demás se dejan fijas.' },
    { src: 'PAES Invierno 2027, adaptada',
      enun: r`El carbonato de litio (Li<sub>2</sub>CO<sub>3</sub>) se obtiene precipitándolo desde una solución acuosa. Un grupo de investigadores estudia qué parámetros afectan su solubilidad en cuatro ensayos, con las condiciones de la tabla.<br>¿Cuál de las siguientes relaciones permite analizar correctamente el efecto de uno de los parámetros?`,
      fig: { type: 'table', head: ['Ensayo', 'Temperatura (°C)', 'Agitación (rpm)', 'Concentración inicial de Li<sub>2</sub>CO<sub>3</sub> (mol/L)'], rows: [['1', '25', '150', '2'], ['2', '25', '300', '2'], ['3', '45', '300', '2'], ['4', '45', '150', '1']] },
      alts: ['Relacionar los ensayos 2 y 3 permite analizar el efecto de la temperatura.', 'Relacionar los ensayos 1 y 3 permite analizar el efecto de la temperatura.', 'Relacionar los ensayos 1 y 2 permite analizar el efecto de la concentración inicial.', 'Relacionar los ensayos 3 y 4 permite analizar el efecto de la concentración inicial.'], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El par de ensayos en que cambia un solo parámetro.</p>
      <p><b>Paso 2. Compara cada par.</b></p>
      <ul><li>2 y 3: cambia solo la temperatura (25 y 45 °C); agitación y concentración iguales. ✔</li>
      <li>1 y 3: cambian la temperatura y la agitación.</li>
      <li>1 y 2: cambia solo la agitación; la concentración es la misma.</li>
      <li>3 y 4: cambian la agitación y la concentración.</li></ul>
      <p><b>Respuesta:</b> relacionar los ensayos 2 y 3 permite analizar el efecto de la temperatura.</p>
      <p><b>¿Por qué no las otras?</b> 1 y 3, y 3 y 4, cambian dos parámetros a la vez. 1 y 2 sí cambian uno solo, pero es la agitación, no la concentración.</p>`,
      conc: 'Lee la tabla columna por columna: el par correcto difiere en una sola columna, y es la que nombra la alternativa.' },

    /* Tipo 4 · Ensayos de miscibilidad (lo semejante disuelve a lo semejante) — PAES Invierno 2027 (pregunta 17) */
    { src: 'PAES Invierno 2027, adaptada',
      enun: r`Una profesora entrega cuatro líquidos desconocidos, W, X, Y y Z. Cada uno es polar o apolar. Sus estudiantes los mezclan de a pares y obtienen los resultados de la figura.<br>Si los ensayos se hicieron correctamente, ¿qué se observará al mezclar X, Y y Z en un mismo vaso?`,
      fig: { type: 'img', src: 'paes/quimica/fig/sol_misc_1.svg', alt: 'Cuatro vasos: W con Y forma 2 fases; X con Z, 1 fase; W con X, 1 fase; X con Y, 2 fases' },
      alts: ['Una sola fase, con X, Y y Z.', 'Dos fases: una con X e Y, y otra con Z.', 'Dos fases: una con X y Z, y otra con Y.', 'Tres fases: una de cada líquido.'], ok: 2,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Predecir cuántas fases habrá y qué líquidos quedan juntos. Regla: lo semejante disuelve a lo semejante; una fase significa mismo tipo y dos fases, distinto tipo.</p>
      <p><b>Paso 2. Agrupa.</b> X + Z da una fase: X y Z son del mismo tipo. X + Y da dos fases: Y es del otro tipo. (W + X da una fase y W + Y dos, lo que confirma que W va con X y Z.)</p>
      <p><b>Paso 3. Mezcla X, Y y Z.</b> X y Z se disuelven entre sí y forman una fase; Y queda aparte.</p>
      <p><b>Respuesta:</b> dos fases, una con X y Z y otra con Y.</p>
      <p><b>¿Por qué no las otras?</b> Una sola fase exigiría que Y se mezcle con X, pero X + Y da dos fases. Juntar X con Y contradice ese mismo ensayo. Tres fases exigiría que X y Z no se mezclen, pero X + Z da una fase.</p>`,
      conc: 'Si dos líquidos dan una fase son del mismo tipo (polar o apolar); si dan dos fases, de distinto tipo.' },
    { src: 'PAES Invierno 2027, adaptada',
      enun: r`Un estudiante tiene cuatro líquidos desconocidos, P, Q, R y S. Cada uno es polar o apolar. Los mezcla de a pares y obtiene los resultados de la figura.<br>Si los ensayos se hicieron correctamente, ¿qué se observará al mezclar P, R y S en un mismo vaso?`,
      fig: { type: 'img', src: 'paes/quimica/fig/sol_misc_2.svg', alt: 'Cuatro vasos: P con Q forma 1 fase; Q con R, 2 fases; P con S, 2 fases; R con S, 1 fase' },
      alts: ['Una sola fase, con P, R y S.', 'Dos fases: una con P y R, y otra con S.', 'Tres fases: una de cada líquido.', 'Dos fases: una con P, y otra con R y S.'], ok: 3,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Qué líquidos quedan juntos al mezclar P, R y S.</p>
      <p><b>Paso 2. Agrupa.</b> R + S da una fase: R y S son del mismo tipo. P + S da dos fases: P es del otro tipo, y por lo tanto tampoco se mezcla con R. (P + Q da una fase y Q + R dos: Q va con P.)</p>
      <p><b>Paso 3. Mezcla P, R y S.</b> R y S forman una fase; P queda en otra.</p>
      <p><b>Respuesta:</b> dos fases, una con P y otra con R y S.</p>
      <p><b>¿Por qué no las otras?</b> Una fase exigiría que P se mezcle con S, y no lo hace. Juntar P con R contradice que P y R son de distinto tipo. Tres fases exigiría que R y S no se mezclen, pero R + S da una fase.</p>`,
      conc: 'Agrupa los líquidos en dos equipos (polares y apolares): cada equipo forma una fase.' },
    { src: 'PAES Invierno 2027, adaptada',
      enun: r`En un laboratorio se tienen cuatro líquidos desconocidos, K, L, M y N. Cada uno es polar o apolar. Se mezclan de a pares y se obtienen los resultados de la figura.<br>Si los ensayos se hicieron correctamente, ¿qué se observará al mezclar K, L y N en un mismo vaso?`,
      fig: { type: 'img', src: 'paes/quimica/fig/sol_misc_3.svg', alt: 'Cuatro vasos: K con L forma 2 fases; L con M, 1 fase; K con N, 1 fase; M con N, 2 fases' },
      alts: ['Dos fases: una con K y N, y otra con L.', 'Dos fases: una con K y L, y otra con N.', 'Una sola fase, con K, L y N.', 'Tres fases: una de cada líquido.'], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Qué líquidos quedan juntos al mezclar K, L y N.</p>
      <p><b>Paso 2. Agrupa.</b> K + N da una fase: K y N son del mismo tipo. K + L da dos fases: L es del otro tipo. (L + M da una fase y M + N dos: M va con L.)</p>
      <p><b>Paso 3. Mezcla K, L y N.</b> K y N forman una fase; L queda en otra.</p>
      <p><b>Respuesta:</b> dos fases, una con K y N y otra con L.</p>
      <p><b>¿Por qué no las otras?</b> Juntar K con L contradice el ensayo K + L, que da dos fases. Una sola fase exigiría lo mismo. Tres fases exigiría que K y N no se mezclen, pero K + N da una fase.</p>`,
      conc: 'Una fase = mismo tipo de polaridad; dos fases = tipos distintos.' },

    /* Tipo 5 · Leer el gráfico de solubilidad de un gas — Estilo PAES */
    { src: 'Estilo PAES',
      enun: r`El gráfico muestra la masa de un gas que se disuelve en 1 L de agua a distintas temperaturas, a 1 atm y a 2 atm. Un litro de agua saturada con el gas a 0 °C y 1 atm se entibia hasta 20 °C, a la misma presión. ¿Qué masa de gas escapa del agua?`,
      fig: { type: 'img', src: 'paes/quimica/fig/sol_gas.svg', alt: 'Gas disuelto por litro: a 1 atm, 14 mg a 0 °C, 11 a 10 °C, 9 a 20 °C, 6,5 a 40 °C y 5 a 60 °C; a 2 atm, el doble', cap: 'Datos inventados para el ejercicio.' },
      alts: ['5 mg', '9 mg', '10 mg', '14 mg'], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El gas que deja de caber al calentar, a 1 atm.</p>
      <p><b>Paso 2. Lee la curva de 1 atm.</b> A 0 °C: 14 mg por litro. A 20 °C: 9 mg por litro.</p>
      <p><b>Paso 3. Resta.</b> Hay 1 L, así que escapan $14 - 9 = 5$ mg.</p>
      <p><b>Respuesta:</b> 5 mg.</p>
      <p><b>Comprobación:</b> 9 mg que siguen disueltos + 5 mg que escapan = 14 mg. ✔</p>
      <p><b>¿Por qué no las otras?</b> 9 mg es lo que queda disuelto. 14 mg es todo el gas inicial. 10 mg sale de leer la curva de 2 atm ($28 - 18$).</p>`,
      conc: 'Los gases se disuelven menos al calentar: el gas que escapa es la diferencia entre las dos lecturas.' },
    { src: 'Estilo PAES',
      enun: r`El gráfico muestra la masa de un gas que se disuelve en 1 L de agua a distintas temperaturas, a 1 atm y a 2 atm. Dos litros de agua saturada con el gas a 20 °C y 2 atm se calientan hasta 40 °C, a la misma presión. ¿Qué masa de gas escapa del agua?`,
      fig: { type: 'img', src: 'paes/quimica/fig/sol_gas.svg', alt: 'Gas disuelto por litro: a 2 atm, 28 mg a 0 °C, 22 a 10 °C, 18 a 20 °C, 13 a 40 °C y 10 a 60 °C; a 1 atm, la mitad', cap: 'Datos inventados para el ejercicio.' },
      alts: ['5 mg', '10 mg', '26 mg', '36 mg'], ok: 1,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El gas que escapa de 2 L de agua al calentar, a 2 atm.</p>
      <p><b>Paso 2. Lee la curva de 2 atm.</b> A 20 °C: 18 mg por litro. A 40 °C: 13 mg por litro.</p>
      <p><b>Paso 3. Por litro escapan</b> $18 - 13 = 5$ mg.</p>
      <p><b>Paso 4. Escala a 2 L:</b> $2 \cdot 5 = 10$ mg.</p>
      <p><b>Respuesta:</b> 10 mg.</p>
      <p><b>Comprobación:</b> al inicio hay $2\cdot 18 = 36$ mg; al final quedan $2\cdot 13 = 26$ mg; $36 - 26 = 10$ mg. ✔</p>
      <p><b>¿Por qué no las otras?</b> 5 mg olvida que son 2 L. 26 mg es lo que queda disuelto. 36 mg es todo el gas inicial.</p>`,
      conc: 'El gráfico es por litro: multiplica por los litros que tienes.' },
    { src: 'Estilo PAES',
      enun: r`El gráfico muestra la masa de un gas que se disuelve en 1 L de agua a distintas temperaturas, a 1 atm y a 2 atm. Cuatro litros de agua saturada con el gas a 20 °C y 1 atm se calientan hasta 60 °C, a la misma presión. ¿Qué masa de gas escapa del agua?`,
      fig: { type: 'img', src: 'paes/quimica/fig/sol_gas.svg', alt: 'Gas disuelto por litro: a 1 atm, 14 mg a 0 °C, 9 a 20 °C, 6,5 a 40 °C y 5 a 60 °C; a 2 atm, el doble', cap: 'Datos inventados para el ejercicio.' },
      alts: ['36 mg', '20 mg', '16 mg', '4 mg'], ok: 2,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El gas que escapa de 4 L de agua al calentar de 20 °C a 60 °C, a 1 atm.</p>
      <p><b>Paso 2. Lee la curva de 1 atm.</b> A 20 °C: 9 mg por litro. A 60 °C: 5 mg por litro.</p>
      <p><b>Paso 3. Por litro escapan</b> $9 - 5 = 4$ mg.</p>
      <p><b>Paso 4. Escala a 4 L:</b> $4 \cdot 4 = 16$ mg.</p>
      <p><b>Respuesta:</b> 16 mg.</p>
      <p><b>Comprobación:</b> al inicio hay $4\cdot 9 = 36$ mg; al final quedan $4\cdot 5 = 20$ mg; $36 - 20 = 16$ mg. ✔</p>
      <p><b>¿Por qué no las otras?</b> 4 mg es lo que escapa de un solo litro. 20 mg es lo que queda disuelto. 36 mg es todo el gas inicial.</p>`,
      conc: 'Gas que escapa = (lectura a temperatura baja − lectura a temperatura alta) · litros de agua.' }
  ]
},

/* =====================================================================
   2. UNIDADES DE CONCENTRACIÓN FÍSICAS
   ===================================================================== */
{
  id: 'qui_conc_fisicas', unit: 'Unidad 3 · Soluciones químicas', icon: '⚖️',
  title: 'Concentración: % m/m, % m/v, % v/v y ppm',
  desc: 'Qué es la concentración y cómo calcularla con las unidades físicas: porcentaje masa/masa, masa/volumen y volumen/volumen, partes por millón, y la densidad para pasar de volumen a masa.',
  slides: [
    { t: '¿Qué es la concentración?', b: r`
      <div class="cols"><div>
      <p>La <b>concentración</b> dice cuánto soluto hay en cierta cantidad de solución. No importa el tamaño del vaso, sino la <b>proporción</b>: una cucharada de un suero al 0,9 % también está al 0,9 %. Por eso la concentración no cambia si tomas una muestra más grande o más chica de la misma solución.</p>
      <p>Las <b>unidades físicas</b> usan solo masas y volúmenes (sin moles):</p>
      <table><thead><tr><th>Unidad</th><th>Significa</th><th>Fórmula</th></tr></thead><tbody>
      <tr><td>% m/m</td><td>g de soluto en 100 g de solución</td><td>$\dfrac{\text{g soluto}}{\text{g solución}}\cdot 100$</td></tr>
      <tr><td>% m/v</td><td>g de soluto en 100 mL de solución</td><td>$\dfrac{\text{g soluto}}{\text{mL solución}}\cdot 100$</td></tr>
      <tr><td>% v/v</td><td>mL de soluto en 100 mL de solución</td><td>$\dfrac{\text{mL soluto}}{\text{mL solución}}\cdot 100$</td></tr>
      <tr><td>ppm</td><td>mg de soluto en 1 L (o 1 kg) de solución</td><td>$\dfrac{\text{mg soluto}}{\text{L solución}}$</td></tr></tbody></table>
      </div><div>
      <div class="qfig"><img class="tikz" src="paes/quimica/fig/sol_porcentajes.svg" alt="Tres ejemplos: 20 g de soluto en 100 g de solución es 20 % m/m; 0,9 g de NaCl en 100 mL de solución es 0,9 % m/v; 12 mL de etanol en 100 mL de vino es 12 % v/v"></div>
      <div class="box alert"><b>Siempre sobre la solución</b> En las cuatro unidades el denominador es la <b>solución completa</b> (soluto + solvente), no el solvente solo.</div>
      </div></div>` },
    { t: 'Porcentaje masa/masa (% m/m)', b: r`
      <div class="cols"><div>
      <p>Indica cuántos gramos de soluto hay en 100 g de solución:</p>
      $$\%\,\text{m/m} = \dfrac{m_{\text{soluto}}}{m_{\text{soluto}} + m_{\text{solvente}}}\cdot 100$$
      <p><b>Ejemplo 1.</b> Se disuelven 25 g de sal en 100 g de agua. ¿Cuál es el % m/m?</p>
      <p><b>Paso 1.</b> Masa de solución: $25 + 100 = 125$ g.</p>
      <p><b>Paso 2.</b> $\dfrac{25}{125}\cdot 100 = 20$ %. La solución es 20 % m/m.</p>
      <p><b>Ejemplo 2 (al revés).</b> ¿Cómo preparas 250 g de solución de azúcar al 8 % m/m?</p>
      <p><b>Paso 1.</b> Soluto: $\dfrac{8}{100}\cdot 250 = 20$ g de azúcar.</p>
      <p><b>Paso 2.</b> Agua: lo que falta para 250 g, $250 - 20 = 230$ g.</p>
      <p><b>Comprobación:</b> $\dfrac{20}{20 + 230}\cdot 100 = \dfrac{20}{250}\cdot 100 = 8$ %. ✔</p>
      </div><div>
      <div class="box"><b>Léelo como receta</b> 20 % m/m significa: 20 g de soluto por cada 100 g de solución, o sea, 20 g de soluto + 80 g de agua.</div>
      <div class="box alert"><b>Error típico</b> En el ejemplo 1, dividir por el agua da $\dfrac{25}{100}\cdot 100 = 25$ %, que está mal: los 100 g son solo el solvente. La solución pesa 125 g.</div>
      <div class="box">La escala <b>Brix</b> de la industria del vino y los jugos es un % m/m de azúcar: 1 °Bx es 1 g de azúcar en 100 g de solución.</div>
      </div></div>` },
    { t: 'Porcentaje masa/volumen (% m/v)', b: r`
      <div class="cols"><div>
      <p>Indica cuántos gramos de soluto hay en 100 mL de solución:</p>
      $$\%\,\text{m/v} = \dfrac{m_{\text{soluto}}\ (\text{g})}{V_{\text{solución}}\ (\text{mL})}\cdot 100$$
      <p><b>Ejemplo 1.</b> El suero fisiológico es NaCl al 0,9 % m/v. ¿Cuánto NaCl tiene una bolsa de 500 mL?</p>
      <p><b>Paso 1.</b> 0,9 g en cada 100 mL. 500 mL son 5 veces 100 mL.</p>
      <p><b>Paso 2.</b> $5 \cdot 0{,}9 = 4{,}5$ g de NaCl.</p>
      <p><b>Ejemplo 2.</b> Se disuelven 12 g de glucosa en agua hasta completar 300 mL de solución. ¿Cuál es el % m/v?</p>
      <p><b>Paso 1.</b> $\dfrac{12}{300}\cdot 100 = 4$ %. La solución es 4 % m/v.</p>
      </div><div>
      <div class="box alert"><b>"Hasta completar" no es "se agregan"</b> "Se disuelve en agua hasta completar 300 mL" significa que la <b>solución</b> mide 300 mL. "Se agregan 300 mL de agua" deja una solución de algo más de 300 mL. En % m/v siempre va el volumen de la solución.</div>
      <div class="box"><b>Truco útil</b> 4 % m/v = 4 g en 100 mL = <b>40 g en 1 L</b>. Multiplicar el % m/v por 10 te da los gramos por litro, y con eso pasas fácil a mol/L.</div>
      </div></div>` },
    { t: 'Porcentaje volumen/volumen (% v/v)', b: r`
      <div class="cols"><div>
      <p>Se usa cuando el soluto es un líquido, como el alcohol en las bebidas. Indica cuántos mL de soluto hay en 100 mL de solución:</p>
      $$\%\,\text{v/v} = \dfrac{V_{\text{soluto}}\ (\text{mL})}{V_{\text{solución}}\ (\text{mL})}\cdot 100$$
      <p><b>Ejemplo 1.</b> Un vino tiene 12 % v/v de etanol (los "12 grados" de la etiqueta). ¿Cuánto etanol hay en una botella de 750 mL?</p>
      <p><b>Paso 1.</b> $\dfrac{12}{100}\cdot 750 = 90$ mL de etanol.</p>
      <p><b>Ejemplo 2.</b> Se mezclan 30 mL de etanol con agua hasta completar 200 mL. ¿Cuál es el % v/v?</p>
      <p><b>Paso 1.</b> $\dfrac{30}{200}\cdot 100 = 15$ %. La solución es 15 % v/v.</p>
      </div><div>
      <div class="box alert"><b>Volúmenes que no se suman</b> Al mezclar etanol y agua, el volumen final es un poco menor que la suma. Por eso las recetas dicen "completar hasta" un volumen. Si un problema dice "considere volúmenes aditivos", entonces sí puedes restar: en el vino, $750 - 90 = 660$ mL de agua.</div>
      <div class="box"><b>Ejemplo diario</b> El alcohol gel al 70 % v/v tiene 70 mL de etanol en cada 100 mL de gel.</div>
      </div></div>` },
    { t: 'Partes por millón (ppm)', b: r`
      <div class="cols"><div>
      <p>Para concentraciones muy bajas, como contaminantes o el flúor del agua potable, los porcentajes dan números incómodos. Se usan las <b>partes por millón</b>: 1 ppm es 1 g de soluto en 1.000.000 g de solución, o sea, <b>1 mg por kg</b>. En soluciones acuosas diluidas, 1 L pesa casi 1 kg, así que:</p>
      $$\text{ppm} = \dfrac{\text{mg de soluto}}{\text{L de solución}} \qquad \text{(o mg de soluto por kg, en sólidos)}$$
      <p><b>Ejemplo 1.</b> Un análisis encuentra 3 mg de ion fluoruro en 2 L de agua potable. $\dfrac{3\ \text{mg}}{2\ \text{L}} = 1{,}5$ ppm.</p>
      <p><b>Ejemplo 2.</b> La norma de agua potable permite hasta 0,01 mg/L de arsénico, es decir, 0,01 ppm. En 5 L de esa agua puede haber como máximo $0{,}01 \cdot 5 = 0{,}05$ mg.</p>
      </div><div>
      <div class="box"><b>Para comparar</b> 1 % m/m = 1 g en 100 g = 10.000 mg en 1 kg = <b>10.000 ppm</b>.</div>
      <div class="box alert"><b>Cuida las unidades</b> ppm es mg por <b>litro</b> (no por mL) y por <b>miligramo</b> (no gramo). Si te dan mL, pásalos a L: 500 mL = 0,5 L. Si te dan gramos, pásalos a mg: 0,02 g = 20 mg.</div>
      </div></div>` },
    { t: 'La densidad: de volumen a masa', b: r`
      <div class="cols"><div>
      <p>Muchas veces te dan el volumen de una solución pero la concentración en % m/m. La <b>densidad</b> conecta las dos cosas:</p>
      $$d = \dfrac{m}{V} \qquad\Rightarrow\qquad m = d\cdot V$$
      <p><b>Ejemplo.</b> Un frasco tiene 200 mL de solución de NaOH al 10 % m/m, con densidad 1,2 g/mL. ¿Cuánto NaOH contiene y cuál es su % m/v?</p>
      <p><b>Paso 1. Masa de la solución.</b> $m = 1{,}2 \cdot 200 = 240$ g.</p>
      <p><b>Paso 2. Masa de soluto.</b> El 10 % de 240 g: $0{,}10 \cdot 240 = 24$ g de NaOH.</p>
      <p><b>Paso 3. % m/v.</b> $\dfrac{24}{200}\cdot 100 = 12$ % m/v.</p>
      <p><b>Comprobación:</b> % m/v = % m/m · densidad: $10 \cdot 1{,}2 = 12$. ✔</p>
      </div><div>
      <div class="box alert"><b>¿Densidad de qué?</b> Usa la densidad de la <b>solución</b>, no la del agua. El ácido clorhídrico comercial al 37 % m/m tiene densidad cercana a 1,19 g/mL: 100 mL de él pesan unos 119 g, no 100 g.</div>
      <div class="box"><b>Si d = 1 g/mL</b> Los gramos y los mililitros de solución son el mismo número: 500 mL de solución pesan 500 g. Muchos problemas PAES lo dan así para simplificar.</div>
      </div></div>` },
    { t: 'Lo clave del tema', b: r`
      <div class="cols"><div>
      <table><thead><tr><th>Unidad</th><th>Cálculo</th><th>Ejemplo</th></tr></thead><tbody>
      <tr><td>% m/m</td><td>g soluto / g solución · 100</td><td>25 g en 100 g de agua → 20 %</td></tr>
      <tr><td>% m/v</td><td>g soluto / mL solución · 100</td><td>4,5 g en 500 mL → 0,9 %</td></tr>
      <tr><td>% v/v</td><td>mL soluto / mL solución · 100</td><td>90 mL en 750 mL → 12 %</td></tr>
      <tr><td>ppm</td><td>mg soluto / L solución</td><td>3 mg en 2 L → 1,5 ppm</td></tr>
      <tr><td>Densidad</td><td>m = d · V</td><td>200 mL · 1,2 g/mL = 240 g</td></tr></tbody></table>
      </div><div>
      <div class="box"><b>Recuerda</b><br>· % m/m: divide por la masa de solución (soluto + agua).<br>· 15 % m/m son 15 g por cada 100 g de solución; escala a la masa real.<br>· ppm = mg por L.<br>· Si d ≠ 1, pasa de mL a gramos con m = d · V.</div>
      <div class="box"><b>Método para la PAES</b> 1. Anota qué es soluto y qué es solución, con unidades. 2. Elige la fórmula según la unidad pedida. 3. Pasa las unidades (mL ↔ L, g ↔ mg, volumen ↔ masa con la densidad). 4. Comprueba al revés: con tu resultado, ¿vuelves al dato?</div>
      </div></div>` }
  ],
  example: {
    src: 'PAES Invierno 2027, adaptada',
    enun: r`Para preparar 0,5 L de una solución acuosa al 15 % m/m de un compuesto soluble en agua (densidad de la solución = 1,0 g/mL), se deben mezclar`,
    alts: ['15 g del compuesto y 485 g de agua.', '75 g del compuesto y 500 g de agua.', '75 g del compuesto y 425 g de agua.', '15 g del compuesto y 85 g de agua.'],
    ok: 2,
    sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Las masas de compuesto (soluto) y de agua (solvente) que forman 0,5 L de solución al 15 % m/m.</p>
      <p><b>Paso 2. Pasa el volumen a masa.</b> 0,5 L = 500 mL. Con la densidad: $m = d\cdot V = 1{,}0 \cdot 500 = 500$ g de solución.</p>
      <p><b>Paso 3. Masa de soluto.</b> 15 % m/m es 15 g por cada 100 g de solución: $\dfrac{15}{100}\cdot 500 = 75$ g de compuesto.</p>
      <p><b>Paso 4. Masa de agua.</b> Lo que falta para completar 500 g: $500 - 75 = 425$ g de agua.</p>
      <p><b>Respuesta:</b> 75 g del compuesto y 425 g de agua.</p>
      <p><b>Comprobación:</b> $\dfrac{75}{75 + 425}\cdot 100 = \dfrac{75}{500}\cdot 100 = 15$ %. ✔ Y la masa total, 500 g, con d = 1,0 g/mL ocupa 500 mL = 0,5 L. ✔</p>
      <p><b>¿Por qué no las otras?</b> «15 g y 485 g» toma el 15 % como 15 g totales: da $\dfrac{15}{500}\cdot 100 = 3$ %. «75 g y 500 g» suma el soluto a 500 g de agua: la solución pesa 575 g y queda en $\dfrac{75}{575}\cdot 100 \approx 13$ %. «15 g y 85 g» sí está al 15 %, pero son solo 100 g de solución, no los 500 g pedidos.</p>`,
    conc: 'En % m/m, masa de soluto = % · masa de solución / 100, y el agua es lo que falta para completar la solución.'
  },
  bank: [
    /* Tipo 1 · Comparar concentraciones de tres soluciones — PAES Invierno 2026 (pregunta 76) */
    { src: 'PAES Invierno 2026, adaptada',
      enun: r`Un grupo de estudiantes prepara tres soluciones acuosas de una sal X a 20 °C, con las masas de la tabla. En las tres se disolvió toda la sal.<br>¿Cuál de las siguientes opciones compara correctamente las soluciones según su concentración?`,
      fig: { type: 'table', head: ['Solución', 'Masa de X (g)', 'Masa de agua (g)'], rows: [['1', '50', '250'], ['2', '30', '100'], ['3', '60', '200']] },
      alts: ['Solución 1 &lt; Solución 2 = Solución 3', 'Solución 1 = Solución 2 = Solución 3', 'Solución 3 &gt; Solución 1 &gt; Solución 2', 'Solución 1 &gt; Solución 3 &gt; Solución 2'], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Ordenar por concentración, es decir, por la <b>proporción</b> de sal respecto del agua, no por la cantidad de sal.</p>
      <p><b>Paso 2. Gramos de sal por cada 100 g de agua.</b> Solución 1: $\dfrac{50}{250}\cdot 100 = 20$ g. Solución 2: $\dfrac{30}{100}\cdot 100 = 30$ g. Solución 3: $\dfrac{60}{200}\cdot 100 = 30$ g.</p>
      <p><b>Paso 3. Compara.</b> 1 tiene menos; 2 y 3 tienen lo mismo.</p>
      <p><b>Respuesta:</b> Solución 1 &lt; Solución 2 = Solución 3.</p>
      <p><b>Comprobación con % m/m:</b> 1: $\dfrac{50}{300}\cdot 100 \approx 16{,}7$ %; 2: $\dfrac{30}{130}\cdot 100 \approx 23{,}1$ %; 3: $\dfrac{60}{260}\cdot 100 \approx 23{,}1$ %. Mismo orden. ✔</p>
      <p><b>¿Por qué no las otras?</b> «Todas iguales» ignora las distintas proporciones. «3 &gt; 1 &gt; 2» ordena por la masa de sal (60, 50, 30). «1 &gt; 3 &gt; 2» ordena por la masa de agua (250, 200, 100).</p>`,
      conc: 'La concentración es una proporción: compara soluto por cada 100 g de agua, no la masa de soluto sola.' },
    { src: 'PAES Invierno 2026, adaptada',
      enun: r`Un grupo de estudiantes prepara tres soluciones acuosas de una sal X a 20 °C, con las masas de la tabla. En las tres se disolvió toda la sal.<br>¿Cuál de las siguientes opciones compara correctamente las soluciones según su concentración?`,
      fig: { type: 'table', head: ['Solución', 'Masa de X (g)', 'Masa de agua (g)'], rows: [['1', '40', '200'], ['2', '20', '50'], ['3', '30', '150']] },
      alts: ['Solución 1 &gt; Solución 3 &gt; Solución 2', 'Solución 1 = Solución 2 = Solución 3', 'Solución 1 = Solución 3 &lt; Solución 2', 'Solución 1 &lt; Solución 3 &lt; Solución 2'], ok: 2,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Ordenar por la proporción de sal respecto del agua.</p>
      <p><b>Paso 2. Gramos de sal por cada 100 g de agua.</b> Solución 1: $\dfrac{40}{200}\cdot 100 = 20$ g. Solución 2: $\dfrac{20}{50}\cdot 100 = 40$ g. Solución 3: $\dfrac{30}{150}\cdot 100 = 20$ g.</p>
      <p><b>Paso 3. Compara.</b> 1 y 3 son iguales; 2 es la más concentrada.</p>
      <p><b>Respuesta:</b> Solución 1 = Solución 3 &lt; Solución 2.</p>
      <p><b>Comprobación con % m/m:</b> 1: $\dfrac{40}{240}\cdot 100 \approx 16{,}7$ %; 2: $\dfrac{20}{70}\cdot 100 \approx 28{,}6$ %; 3: $\dfrac{30}{180}\cdot 100 \approx 16{,}7$ %. ✔</p>
      <p><b>¿Por qué no las otras?</b> «1 &gt; 3 &gt; 2» ordena por la masa de sal (40, 30, 20). «Todas iguales» no calcula proporciones. «1 &lt; 3 &lt; 2» acierta en que 2 es la mayor, pero 1 y 3 tienen la misma proporción.</p>`,
      conc: 'Dos soluciones con distinta masa de sal pueden tener la misma concentración si la proporción es igual.' },
    { src: 'PAES Invierno 2026, adaptada',
      enun: r`Un grupo de estudiantes prepara tres soluciones acuosas de una sal X a 20 °C, con las masas de la tabla. En las tres se disolvió toda la sal.<br>¿Cuál de las siguientes opciones compara correctamente las soluciones según su concentración?`,
      fig: { type: 'table', head: ['Solución', 'Masa de X (g)', 'Masa de agua (g)'], rows: [['1', '15', '50'], ['2', '30', '200'], ['3', '40', '200']] },
      alts: ['Solución 3 &gt; Solución 2 &gt; Solución 1', 'Solución 1 = Solución 2 = Solución 3', 'Solución 2 = Solución 3 &gt; Solución 1', 'Solución 1 &gt; Solución 3 &gt; Solución 2'], ok: 3,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Ordenar por la proporción de sal respecto del agua.</p>
      <p><b>Paso 2. Gramos de sal por cada 100 g de agua.</b> Solución 1: $\dfrac{15}{50}\cdot 100 = 30$ g. Solución 2: $\dfrac{30}{200}\cdot 100 = 15$ g. Solución 3: $\dfrac{40}{200}\cdot 100 = 20$ g.</p>
      <p><b>Paso 3. Ordena:</b> 30 &gt; 20 &gt; 15.</p>
      <p><b>Respuesta:</b> Solución 1 &gt; Solución 3 &gt; Solución 2.</p>
      <p><b>Comprobación con % m/m:</b> 1: $\dfrac{15}{65}\cdot 100 \approx 23{,}1$ %; 3: $\dfrac{40}{240}\cdot 100 \approx 16{,}7$ %; 2: $\dfrac{30}{230}\cdot 100 \approx 13{,}0$ %. ✔</p>
      <p><b>¿Por qué no las otras?</b> «3 &gt; 2 &gt; 1» ordena por la masa de sal (40, 30, 15). «2 = 3 &gt; 1» ordena por la masa de agua (200, 200, 50). «Todas iguales» no calcula proporciones.</p>`,
      conc: 'La solución con menos sal puede ser la más concentrada si tiene muy poca agua.' },

    /* Tipo 2 · Calcular el % m/m — Estilo PAES (guía del profe) */
    { src: 'Estilo PAES',
      enun: r`Se disuelven completamente 25 g de cloruro de sodio en 100 g de agua. ¿Cuál es la concentración de la solución, en % m/m?`,
      alts: ['0,2 %', '20 %', '25 %', '80 %'], ok: 1,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Gramos de soluto por cada 100 g de <b>solución</b>.</p>
      <p><b>Paso 2. Masa de solución:</b> $25 + 100 = 125$ g.</p>
      <p><b>Paso 3.</b> $\dfrac{25}{125}\cdot 100 = 20$ %.</p>
      <p><b>Respuesta:</b> 20 % m/m.</p>
      <p><b>Comprobación:</b> el 20 % de 125 g es $0{,}2 \cdot 125 = 25$ g de sal. ✔</p>
      <p><b>¿Por qué no las otras?</b> 25 % divide por el agua (100 g) y no por la solución. 80 % es el porcentaje de agua ($\dfrac{100}{125}\cdot 100$). 0,2 % olvida multiplicar por 100.</p>`,
      conc: 'En % m/m divide por la masa de solución: soluto + solvente.' },
    { src: 'Estilo PAES',
      enun: r`Se disuelven completamente 20 g de azúcar en 60 g de agua. ¿Cuál es la concentración de la solución, en % m/m?`,
      alts: ['75 %', '33,3 %', '25 %', '0,25 %'], ok: 2,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Gramos de azúcar por cada 100 g de solución.</p>
      <p><b>Paso 2. Masa de solución:</b> $20 + 60 = 80$ g.</p>
      <p><b>Paso 3.</b> $\dfrac{20}{80}\cdot 100 = 25$ %.</p>
      <p><b>Respuesta:</b> 25 % m/m.</p>
      <p><b>Comprobación:</b> el 25 % de 80 g es 20 g de azúcar. ✔</p>
      <p><b>¿Por qué no las otras?</b> 33,3 % divide por el agua: $\dfrac{20}{60}\cdot 100$. 75 % es el porcentaje de agua. 0,25 % olvida multiplicar por 100.</p>`,
      conc: 'El denominador del % m/m incluye al soluto.' },
    { src: 'Estilo PAES',
      enun: r`Se disuelven completamente 18 g de urea en 102 g de agua. ¿Cuál es la concentración de la solución, en % m/m?`,
      alts: ['15 %', '17,6 %', '18 %', '85 %'], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Gramos de urea por cada 100 g de solución.</p>
      <p><b>Paso 2. Masa de solución:</b> $18 + 102 = 120$ g.</p>
      <p><b>Paso 3.</b> $\dfrac{18}{120}\cdot 100 = 15$ %.</p>
      <p><b>Respuesta:</b> 15 % m/m.</p>
      <p><b>Comprobación:</b> el 15 % de 120 g es $0{,}15 \cdot 120 = 18$ g de urea. ✔</p>
      <p><b>¿Por qué no las otras?</b> 17,6 % divide por el agua: $\dfrac{18}{102}\cdot 100$. 18 % toma los gramos de soluto como si fueran el porcentaje. 85 % es el porcentaje de agua.</p>`,
      conc: '% m/m = soluto / (soluto + solvente) · 100.' },

    /* Tipo 3 · % m/v: masa de soluto para preparar una solución — Estilo PAES */
    { src: 'Estilo PAES',
      enun: r`El suero fisiológico es una solución acuosa de cloruro de sodio (NaCl) al 0,9 % m/v. ¿Qué masa de NaCl se necesita para preparar 500 mL de suero?`,
      alts: ['0,45 g', '0,9 g', '4,5 g', '45 g'], ok: 2,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> La masa de soluto en 500 mL de solución al 0,9 % m/v.</p>
      <p><b>Paso 2. Interpreta.</b> 0,9 % m/v son 0,9 g de NaCl en cada 100 mL de solución.</p>
      <p><b>Paso 3. Escala.</b> 500 mL son 5 veces 100 mL: $5 \cdot 0{,}9 = 4{,}5$ g.</p>
      <p><b>Respuesta:</b> 4,5 g.</p>
      <p><b>Comprobación:</b> $\dfrac{4{,}5}{500}\cdot 100 = 0{,}9$ %. ✔</p>
      <p><b>¿Por qué no las otras?</b> 0,9 g es lo que hay en solo 100 mL. 45 g y 0,45 g corren la coma: multiplican por 50 o por 0,5 en vez de por 5.</p>`,
      conc: 'En % m/v, masa de soluto = % · mL de solución / 100.' },
    { src: 'Estilo PAES',
      enun: r`¿Qué masa de glucosa se necesita para preparar 250 mL de una solución acuosa de glucosa al 5 % m/v?`,
      alts: ['125 g', '12,5 g', '5 g', '1,25 g'], ok: 1,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> La masa de glucosa en 250 mL de solución al 5 % m/v.</p>
      <p><b>Paso 2. Interpreta.</b> 5 g de glucosa en cada 100 mL de solución.</p>
      <p><b>Paso 3. Escala.</b> $\dfrac{5}{100}\cdot 250 = 12{,}5$ g.</p>
      <p><b>Respuesta:</b> 12,5 g.</p>
      <p><b>Comprobación:</b> $\dfrac{12{,}5}{250}\cdot 100 = 5$ %. ✔</p>
      <p><b>¿Por qué no las otras?</b> 5 g es lo que hay en solo 100 mL. 125 g y 1,25 g corren la coma un lugar.</p>`,
      conc: 'El % m/v se lee como gramos por cada 100 mL de solución.' },
    { src: 'Estilo PAES',
      enun: r`¿Qué masa de soluto contienen 2 L de una solución acuosa de bicarbonato de sodio al 3 % m/v?`,
      alts: ['3 g', '6 g', '600 g', '60 g'], ok: 3,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> La masa de soluto en 2 L de solución al 3 % m/v.</p>
      <p><b>Paso 2. Pasa a mL.</b> 2 L = 2.000 mL.</p>
      <p><b>Paso 3. Escala.</b> 3 g en cada 100 mL: $\dfrac{3}{100}\cdot 2.000 = 60$ g.</p>
      <p><b>Respuesta:</b> 60 g.</p>
      <p><b>Comprobación:</b> con el truco de multiplicar por 10, 3 % m/v son 30 g por litro; en 2 L, 60 g. ✔</p>
      <p><b>¿Por qué no las otras?</b> 3 g es lo que hay en 100 mL. 6 g toma 2 L como si fueran 200 mL. 600 g corre la coma: toma 2 L como 20.000 mL.</p>`,
      conc: 'Antes de usar el % m/v, pasa el volumen a mL.' },

    /* Tipo 4 · % v/v: volumen de soluto en una bebida — Estilo PAES */
    { src: 'Estilo PAES',
      enun: r`La etiqueta de un vino indica 12 % v/v de etanol. ¿Qué volumen de etanol contiene una botella de 750 mL de ese vino?`,
      alts: ['12 mL', '62,5 mL', '90 mL', '660 mL'], ok: 2,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El volumen de soluto (etanol) en 750 mL de solución.</p>
      <p><b>Paso 2. Interpreta.</b> 12 % v/v son 12 mL de etanol en cada 100 mL de vino.</p>
      <p><b>Paso 3. Escala.</b> $\dfrac{12}{100}\cdot 750 = 90$ mL.</p>
      <p><b>Respuesta:</b> 90 mL.</p>
      <p><b>Comprobación:</b> $\dfrac{90}{750}\cdot 100 = 12$ %. ✔</p>
      <p><b>¿Por qué no las otras?</b> 12 mL es lo que hay en solo 100 mL. 62,5 mL divide 750 por 12. 660 mL es el resto de la botella, que no es etanol.</p>`,
      conc: 'Volumen de soluto = % v/v · volumen de solución / 100.' },
    { src: 'Estilo PAES',
      enun: r`Una cerveza tiene 5 % v/v de etanol. ¿Qué volumen de etanol contiene una lata de 350 mL?`,
      alts: ['17,5 mL', '5 mL', '70 mL', '332,5 mL'], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El volumen de etanol en 350 mL de cerveza.</p>
      <p><b>Paso 2. Interpreta.</b> 5 mL de etanol en cada 100 mL.</p>
      <p><b>Paso 3. Escala.</b> $\dfrac{5}{100}\cdot 350 = 17{,}5$ mL.</p>
      <p><b>Respuesta:</b> 17,5 mL.</p>
      <p><b>Comprobación:</b> $\dfrac{17{,}5}{350}\cdot 100 = 5$ %. ✔</p>
      <p><b>¿Por qué no las otras?</b> 5 mL es lo de 100 mL. 70 mL divide 350 por 5. 332,5 mL es el resto de la lata.</p>`,
      conc: 'El % v/v se lee como mL de soluto por cada 100 mL de solución.' },
    { src: 'Estilo PAES',
      enun: r`Un alcohol gel contiene etanol al 70 % v/v. ¿Qué volumen de etanol hay en un frasco de 500 mL de ese gel?`,
      alts: ['35 mL', '70 mL', '150 mL', '350 mL'], ok: 3,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El volumen de etanol en 500 mL de gel.</p>
      <p><b>Paso 2. Interpreta.</b> 70 mL de etanol en cada 100 mL de gel.</p>
      <p><b>Paso 3. Escala.</b> $\dfrac{70}{100}\cdot 500 = 350$ mL.</p>
      <p><b>Respuesta:</b> 350 mL.</p>
      <p><b>Comprobación:</b> $\dfrac{350}{500}\cdot 100 = 70$ %. ✔</p>
      <p><b>¿Por qué no las otras?</b> 70 mL es lo de 100 mL. 35 mL corre la coma. 150 mL es el resto del gel, que no es etanol.</p>`,
      conc: 'Aquí el etanol es la mayor parte, pero igual se calcula como soluto: % v/v · volumen / 100.' },

    /* Tipo 5 · Partes por millón — Estilo PAES */
    { src: 'Estilo PAES',
      enun: r`Un análisis detecta 3 mg de ion fluoruro (F<sup>−</sup>) en 2 L de agua potable. ¿Cuál es la concentración de fluoruro, en ppm?`,
      alts: ['1,5 ppm', '3 ppm', '6 ppm', '1.500 ppm'], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Miligramos de soluto por litro de solución.</p>
      <p><b>Paso 2.</b> $\dfrac{3\ \text{mg}}{2\ \text{L}} = 1{,}5$ mg/L.</p>
      <p><b>Respuesta:</b> 1,5 ppm.</p>
      <p><b>Comprobación:</b> 1,5 mg en cada litro · 2 L = 3 mg. ✔</p>
      <p><b>¿Por qué no las otras?</b> 3 ppm no divide por los 2 L. 6 ppm multiplica en vez de dividir. 1.500 ppm multiplica por 1.000 sin motivo, como si pasara de mg a µg.</p>`,
      conc: 'ppm = mg de soluto / L de solución.' },
    { src: 'Estilo PAES',
      enun: r`En una muestra de 500 mL de agua de un estero se encuentran 0,4 mg de plomo. ¿Cuál es la concentración de plomo, en ppm?`,
      alts: ['0,0008 ppm', '0,2 ppm', '0,4 ppm', '0,8 ppm'], ok: 3,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Miligramos de plomo por litro.</p>
      <p><b>Paso 2. Pasa a litros.</b> 500 mL = 0,5 L.</p>
      <p><b>Paso 3.</b> $\dfrac{0{,}4\ \text{mg}}{0{,}5\ \text{L}} = 0{,}8$ mg/L.</p>
      <p><b>Respuesta:</b> 0,8 ppm.</p>
      <p><b>Comprobación:</b> 0,8 mg por litro · 0,5 L = 0,4 mg. ✔</p>
      <p><b>¿Por qué no las otras?</b> 0,0008 ppm divide por 500 mL sin pasar a litros. 0,2 ppm multiplica por 0,5 en vez de dividir. 0,4 ppm olvida que la muestra no es de 1 L.</p>`,
      conc: 'En ppm el volumen va en litros: pasa los mL a L antes de dividir.' },
    { src: 'Estilo PAES',
      enun: r`En una muestra de 5 kg de suelo cercano a una fundición se encuentran 25 mg de cobre. ¿Cuál es la concentración de cobre en el suelo, en ppm?`,
      alts: ['0,005 ppm', '5 ppm', '25 ppm', '125 ppm'], ok: 1,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> En sólidos, ppm son miligramos de soluto por kilogramo de muestra.</p>
      <p><b>Paso 2.</b> $\dfrac{25\ \text{mg}}{5\ \text{kg}} = 5$ mg/kg.</p>
      <p><b>Respuesta:</b> 5 ppm.</p>
      <p><b>Comprobación:</b> 5 mg en cada kg · 5 kg = 25 mg. ✔</p>
      <p><b>¿Por qué no las otras?</b> 0,005 ppm divide por 5.000 g en vez de 5 kg. 25 ppm no divide por la masa. 125 ppm multiplica en vez de dividir.</p>`,
      conc: 'En sólidos, ppm = mg de soluto / kg de muestra.' }
  ]
},

/* =====================================================================
   3. UNIDADES DE CONCENTRACIÓN QUÍMICAS
   ===================================================================== */
{
  id: 'qui_conc_quimicas', unit: 'Unidad 3 · Soluciones químicas', icon: '⚗️',
  title: 'Concentración molar, molal y fracción molar',
  desc: 'Cómo pasar de gramos a moles y calcular la concentración molar (mol/L), la concentración molal (mol/kg de solvente) y la fracción molar; cómo se prepara una solución y cómo pasar de % m/v a mol/L.',
  slides: [
    { t: 'Del gramo al mol', b: r`
      <div class="cols"><div>
      <p>Las unidades químicas cuentan el soluto en <b>moles</b>, porque las reacciones ocurren partícula a partícula. Para pasar de gramos a moles se usa la <b>masa molar</b> ($M$, en g/mol):</p>
      $$n = \dfrac{m}{M}$$
      <p><b>Ejemplo 1.</b> Masa molar del NaOH (Na = 23, O = 16, H = 1): $23 + 16 + 1 = 40$ g/mol. Entonces 20 g de NaOH son $n = \dfrac{20}{40} = 0{,}5$ mol.</p>
      <p><b>Ejemplo 2.</b> Glucosa, C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> (C = 12, H = 1, O = 16): $6\cdot 12 + 12\cdot 1 + 6\cdot 16 = 72 + 12 + 96 = 180$ g/mol. Entonces 9 g son $\dfrac{9}{180} = 0{,}05$ mol.</p>
      <p><b>Al revés:</b> $m = n \cdot M$. Por ejemplo, 0,1 mol de NaOH pesan $0{,}1 \cdot 40 = 4$ g.</p>
      </div><div>
      <div class="box alert"><b>Divide, no multipliques</b> De gramos a moles se divide por la masa molar. Si multiplicas, $20 \cdot 40 = 800$, el número no tiene sentido: 20 g de algo no pueden ser 800 mol.</div>
      <div class="box"><b>Masas molares que conviene tener a mano</b> (la PAES las entrega)<br>H<sub>2</sub>O = 18 g/mol · NaOH = 40 g/mol · NaCl = 58,5 g/mol · KOH = 56 g/mol · HCl = 36,5 g/mol · C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> = 180 g/mol · C<sub>2</sub>H<sub>5</sub>OH = 46 g/mol</div>
      </div></div>` },
    { t: 'Concentración molar (mol/L)', b: r`
      <div class="cols"><div>
      <p>La <b>concentración molar</b> (antes llamada molaridad) indica cuántos moles de soluto hay en <b>1 litro de solución</b>:</p>
      $$C = \dfrac{n_{\text{soluto}}\ (\text{mol})}{V_{\text{solución}}\ (\text{L})}$$
      <p><b>Ejemplo 1.</b> Se disuelven 20 g de NaOH ($M$ = 40 g/mol) en agua hasta completar 500 mL. Moles: $\dfrac{20}{40} = 0{,}5$ mol. Volumen: 500 mL = 0,5 L. $C = \dfrac{0{,}5}{0{,}5} = 1$ mol/L.</p>
      <p><b>Ejemplo 2 (al revés).</b> ¿Cuántos gramos de glucosa ($M$ = 180 g/mol) se necesitan para 250 mL de solución 0,2 mol/L? Moles: $n = C\cdot V = 0{,}2 \cdot 0{,}25 = 0{,}05$ mol. Masa: $0{,}05 \cdot 180 = 9$ g.</p>
      <div class="box"><b>Así se prepara</b> 1. Masa el soluto. 2. Disuélvelo en un poco de agua dentro de un <b>matraz aforado</b>. 3. Agrega agua hasta la marca (el aforo). 4. Tapa y agita. Así el volumen final de solución es exacto.</div>
      </div><div>
      <div class="qfig"><img class="tikz" src="paes/quimica/fig/sol_molar_molal.svg" alt="A la izquierda, 1 mol de soluto en un matraz aforado completado hasta 1 L de solución: 1 mol/L. A la derecha, 1 mol de soluto en 1 kg de agua: 1 mol/kg"></div>
      <div class="box alert"><b>Dos errores clásicos</b> 1. Dejar el volumen en mL: $\dfrac{0{,}5}{500} = 0{,}001$ está mal; pasa 500 mL a 0,5 L. 2. Disolver el soluto en 250 mL de agua: la solución queda con más de 250 mL. Se completa <b>hasta</b> 250 mL.</div>
      </div></div>` },
    { t: 'Concentración molal (mol/kg)', b: r`
      <div class="cols"><div>
      <p>La <b>concentración molal</b> (molalidad) indica cuántos moles de soluto hay por cada <b>kilogramo de solvente</b> (no de solución):</p>
      $$b = \dfrac{n_{\text{soluto}}\ (\text{mol})}{m_{\text{solvente}}\ (\text{kg})}$$
      <p><b>Ejemplo 1.</b> Se disuelven 20 g de NaOH ($M$ = 40 g/mol) en 500 g de agua. Moles: 0,5 mol. Solvente: 500 g = 0,5 kg. $b = \dfrac{0{,}5}{0{,}5} = 1$ mol/kg.</p>
      <p><b>Ejemplo 2.</b> 9 g de glucosa ($M$ = 180 g/mol) en 250 g de agua: $\dfrac{0{,}05}{0{,}25} = 0{,}2$ mol/kg.</p>
      </div><div>
      <table><thead><tr><th></th><th>Molar</th><th>Molal</th></tr></thead><tbody>
      <tr><td>Unidad</td><td>mol/L</td><td>mol/kg</td></tr>
      <tr><td>Denominador</td><td>L de <b>solución</b></td><td>kg de <b>solvente</b></td></tr>
      <tr><td>Se mide con</td><td>matraz aforado</td><td>balanza</td></tr>
      <tr><td>¿Cambia con la temperatura?</td><td>Sí (el volumen se dilata)</td><td>No (la masa no cambia)</td></tr></tbody></table>
      <div class="box alert"><b>Ojo</b> En molal el denominador es <b>solo el solvente</b> y va en <b>kilogramos</b>: 500 g de agua son 0,5 kg. Si divides por gramos, el resultado sale 1.000 veces más chico.</div>
      </div></div>` },
    { t: 'Fracción molar', b: r`
      <div class="cols"><div>
      <p>La <b>fracción molar</b> ($X$) de un componente es la parte de los moles totales que le corresponde:</p>
      $$X_{\text{soluto}} = \dfrac{n_{\text{soluto}}}{n_{\text{soluto}} + n_{\text{solvente}}}$$
      <p>No tiene unidades, está entre 0 y 1, y las fracciones de todos los componentes <b>suman 1</b>.</p>
      <p><b>Ejemplo.</b> Se mezclan 46 g de etanol ($M$ = 46 g/mol) con 72 g de agua ($M$ = 18 g/mol).</p>
      <p><b>Paso 1. Moles.</b> Etanol: $\dfrac{46}{46} = 1$ mol. Agua: $\dfrac{72}{18} = 4$ mol. Total: 5 mol.</p>
      <p><b>Paso 2. Fracciones.</b> $X_{\text{etanol}} = \dfrac{1}{5} = 0{,}2$ y $X_{\text{agua}} = \dfrac{4}{5} = 0{,}8$.</p>
      <p><b>Comprobación:</b> $0{,}2 + 0{,}8 = 1$. ✔</p>
      </div><div>
      <div class="box alert"><b>Tres errores frecuentes</b><br>· Dividir por los moles del solvente: $\dfrac{1}{4} = 0{,}25$. El denominador es el <b>total</b>.<br>· Usar masas en vez de moles: $\dfrac{46}{118} \approx 0{,}39$ es una fracción de masa, no molar.<br>· Entregar la fracción del otro componente (0,8 en vez de 0,2).</div>
      <div class="box"><b>Para qué sirve</b> Se usa en mezclas de líquidos y de gases (el aire tiene $X_{\text{N}_2} \approx 0{,}78$) y en las propiedades que dependen del número de partículas.</div>
      </div></div>` },
    { t: 'Pasar de una unidad a otra', b: r`
      <div class="cols"><div>
      <p><b>De % m/v a mol/L.</b> Multiplica el % m/v por 10 para tener gramos por litro y divide por la masa molar.</p>
      <p><b>Ejemplo.</b> NaOH al 4 % m/v ($M$ = 40 g/mol): 4 g en 100 mL = 40 g en 1 L. $\dfrac{40}{40} = 1$ mol en 1 L, o sea, <b>1 mol/L</b>.</p>
      <p><b>De mol/L a % m/v.</b> NaCl 2 mol/L ($M$ = 58,5 g/mol): en 1 L hay $2\cdot 58{,}5 = 117$ g, o sea, 11,7 g en 100 mL: <b>11,7 % m/v</b>.</p>
      <p><b>De % m/m a mol/L, con densidad.</b> NaOH al 10 % m/m con d = 1,2 g/mL. Toma 1 L de solución.</p>
      <p><b>Paso 1.</b> Masa de 1 L: $1{,}2 \cdot 1.000 = 1.200$ g.</p>
      <p><b>Paso 2.</b> Soluto: el 10 % de 1.200 g = 120 g de NaOH.</p>
      <p><b>Paso 3.</b> Moles: $\dfrac{120}{40} = 3$ mol en 1 L: <b>3 mol/L</b>.</p>
      </div><div>
      <div class="box"><b>Fórmula atajo</b> $C\ (\text{mol/L}) = \dfrac{\%\,\text{m/v} \cdot 10}{M}$</div>
      <div class="box alert"><b>Elige 1 L de base</b> Cuando la concentración no depende de cuánto tengas, imagina 1 L (o 100 g) de solución: los cálculos salen con números redondos.</div>
      </div></div>` },
    { t: 'Lo clave del tema', b: r`
      <div class="cols"><div>
      <table><thead><tr><th>Unidad</th><th>Fórmula</th><th>Ejemplo</th></tr></thead><tbody>
      <tr><td>Moles</td><td>$n = m / M$</td><td>20 g de NaOH = 0,5 mol</td></tr>
      <tr><td>Molar</td><td>mol de soluto / L de solución</td><td>0,5 mol en 500 mL → 1 mol/L</td></tr>
      <tr><td>Molal</td><td>mol de soluto / kg de solvente</td><td>0,5 mol en 500 g de agua → 1 mol/kg</td></tr>
      <tr><td>Fracción molar</td><td>$n_i$ / $n_{\text{total}}$, sin unidades</td><td>1 mol etanol + 4 mol agua → 0,2</td></tr>
      <tr><td>% m/v → mol/L</td><td>% m/v · 10 / M</td><td>4 % de NaOH → 1 mol/L</td></tr></tbody></table>
      </div><div>
      <div class="box"><b>Recuerda</b><br>· Molaridad: primero pasa los gramos a moles ($m/M$).<br>· Volumen en litros (molar) y masa de solvente en kg (molal).<br>· Molalidad: divide solo por la masa del solvente.<br>· Para preparar V mL de solución, completa hasta V mL en un matraz aforado.</div>
      <div class="box"><b>Método para la PAES</b> 1. Pasa la masa a moles. 2. Mira el denominador que pide la unidad (L de solución, kg de solvente o moles totales). 3. Convierte unidades. 4. Comprueba al revés: $n = C\cdot V$ debe devolverte los moles.</div>
      </div></div>` }
  ],
  example: {
    src: 'PAES Invierno 2027, adaptada',
    enun: r`En una clase de química, la profesora pide preparar 250 mL de una solución acuosa de hidróxido de sodio (NaOH) de concentración 0,4 mol/L (masa molar del NaOH = 40 g/mol). ¿Cuál de los siguientes procedimientos es el adecuado?`,
    alts: ['Masar 4 g de NaOH y disolverlos en 250 mL de agua.', 'Masar 4 g de NaOH, disolverlos en un poco de agua dentro de un matraz aforado de 250 mL y luego agregar agua hasta el aforo.', 'Masar 16 g de NaOH, disolverlos en un poco de agua dentro de un matraz aforado de 250 mL y luego agregar agua hasta el aforo.', 'Masar 4 g de NaOH, disolverlos en agua y completar con agua hasta 1 L de solución.'],
    ok: 1,
    sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Dos cosas: la masa correcta de NaOH y la forma correcta de lograr 250 mL <b>de solución</b>.</p>
      <p><b>Paso 2. Moles necesarios.</b> $n = C\cdot V = 0{,}4\ \text{mol/L} \cdot 0{,}25\ \text{L} = 0{,}1$ mol.</p>
      <p><b>Paso 3. Masa.</b> $m = n\cdot M = 0{,}1 \cdot 40 = 4$ g de NaOH.</p>
      <p><b>Paso 4. Procedimiento.</b> El volumen de la fórmula es el de la <b>solución</b>. Por eso se disuelven los 4 g en un poco de agua dentro de un matraz aforado de 250 mL y se completa con agua hasta la marca: el volumen final es exactamente 250 mL.</p>
      <p><b>Respuesta:</b> masar 4 g de NaOH, disolverlos en un poco de agua dentro de un matraz aforado de 250 mL y agregar agua hasta el aforo.</p>
      <p><b>Comprobación:</b> $C = \dfrac{4/40}{0{,}25} = \dfrac{0{,}1}{0{,}25} = 0{,}4$ mol/L. ✔</p>
      <p><b>¿Por qué no las otras?</b> «4 g en 250 mL de agua»: la masa está bien, pero el soluto agrega volumen y la solución queda con más de 250 mL, así que la concentración queda bajo 0,4 mol/L. «16 g hasta el aforo»: 16 g son 0,4 mol; en 0,25 L dan $\dfrac{0{,}4}{0{,}25} = 1{,}6$ mol/L (confunde 0,4 mol/L con 0,4 mol). «4 g hasta 1 L»: da $\dfrac{0{,}1}{1} = 0{,}1$ mol/L.</p>`,
    conc: 'Para preparar una solución: n = C · V, m = n · M, y se completa HASTA el volumen pedido en un matraz aforado.'
  },
  bank: [
    /* Tipo 1 · Calcular la concentración molar — PAES Invierno 2027 (pregunta 15) */
    { src: 'PAES Invierno 2027, adaptada',
      enun: r`¿Cuál es la concentración de una solución acuosa que contiene 0,5 mol de cloruro de potasio (KCl) en 250 mL de solución?`,
      alts: ['0,002 mol/L', '0,125 mol/L', '0,5 mol/L', '2,0 mol/L'], ok: 3,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Moles de soluto por litro de solución.</p>
      <p><b>Paso 2. Pasa a litros.</b> 250 mL = 0,25 L.</p>
      <p><b>Paso 3.</b> $C = \dfrac{0{,}5}{0{,}25} = 2{,}0$ mol/L.</p>
      <p><b>Respuesta:</b> 2,0 mol/L.</p>
      <p><b>Comprobación:</b> $n = C\cdot V = 2{,}0 \cdot 0{,}25 = 0{,}5$ mol. ✔</p>
      <p><b>¿Por qué no las otras?</b> 0,002 mol/L divide por 250 sin pasar a litros. 0,125 mol/L multiplica en vez de dividir. 0,5 mol/L confunde los moles con la concentración: sería cierto solo si hubiera 1 L.</p>`,
      conc: 'C = n / V, con V en litros de solución.' },
    { src: 'PAES Invierno 2027, adaptada',
      enun: r`Se disuelven 20 g de hidróxido de sodio (NaOH, masa molar = 40 g/mol) en agua hasta completar 500 mL de solución. ¿Cuál es la concentración molar de la solución?`,
      alts: ['0,04 mol/L', '0,25 mol/L', '1,0 mol/L', '40 mol/L'], ok: 2,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Moles de NaOH por litro de solución.</p>
      <p><b>Paso 2. Moles.</b> $n = \dfrac{20}{40} = 0{,}5$ mol.</p>
      <p><b>Paso 3. Volumen.</b> 500 mL = 0,5 L.</p>
      <p><b>Paso 4.</b> $C = \dfrac{0{,}5}{0{,}5} = 1{,}0$ mol/L.</p>
      <p><b>Respuesta:</b> 1,0 mol/L.</p>
      <p><b>Comprobación:</b> en 0,5 L de solución 1,0 mol/L hay 0,5 mol, que pesan $0{,}5 \cdot 40 = 20$ g. ✔</p>
      <p><b>¿Por qué no las otras?</b> 40 mol/L divide los gramos por el volumen sin pasar a moles ($20/0{,}5$). 0,04 mol/L divide gramos por mL ($20/500$). 0,25 mol/L multiplica los moles por el volumen.</p>`,
      conc: 'Primero gramos a moles, después divide por los litros.' },
    { src: 'PAES Invierno 2027, adaptada',
      enun: r`Se disuelven 9 g de glucosa (C<sub>6</sub>H<sub>12</sub>O<sub>6</sub>, masa molar = 180 g/mol) en agua hasta completar 200 mL de solución. ¿Cuál es la concentración molar de la solución?`,
      alts: ['45 mol/L', '0,25 mol/L', '0,05 mol/L', '0,01 mol/L'], ok: 1,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Moles de glucosa por litro de solución.</p>
      <p><b>Paso 2. Moles.</b> $n = \dfrac{9}{180} = 0{,}05$ mol.</p>
      <p><b>Paso 3. Volumen.</b> 200 mL = 0,2 L.</p>
      <p><b>Paso 4.</b> $C = \dfrac{0{,}05}{0{,}2} = 0{,}25$ mol/L.</p>
      <p><b>Respuesta:</b> 0,25 mol/L.</p>
      <p><b>Comprobación:</b> $n = 0{,}25 \cdot 0{,}2 = 0{,}05$ mol, y $0{,}05 \cdot 180 = 9$ g. ✔</p>
      <p><b>¿Por qué no las otras?</b> 45 mol/L divide los gramos por el volumen sin pasar a moles. 0,05 mol/L son los moles, no la concentración. 0,01 mol/L multiplica los moles por el volumen.</p>`,
      conc: 'La concentración molar es moles divididos por litros, nunca gramos divididos por litros.' },

    /* Tipo 2 · Masa de soluto para preparar una solución — PAES Regular 2026 (pregunta 78) */
    { src: 'PAES Regular 2026, adaptada',
      enun: r`Para una práctica de laboratorio se deben preparar 0,250 L de una solución acuosa de hidróxido de sodio (NaOH, masa molar = 40 g/mol) de concentración 2 mol/L. ¿Qué masa de NaOH debe contener la solución?`,
      alts: ['20 g', '10 g', '8 g', '0,5 g'], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> La masa de soluto para 0,250 L a 2 mol/L.</p>
      <p><b>Paso 2. Moles.</b> $n = C\cdot V = 2 \cdot 0{,}250 = 0{,}5$ mol.</p>
      <p><b>Paso 3. Masa.</b> $m = n\cdot M = 0{,}5 \cdot 40 = 20$ g.</p>
      <p><b>Respuesta:</b> 20 g.</p>
      <p><b>Comprobación:</b> $\dfrac{20/40}{0{,}25} = \dfrac{0{,}5}{0{,}25} = 2$ mol/L. ✔</p>
      <p><b>¿Por qué no las otras?</b> 0,5 g toma los moles como si fueran gramos. 8 g divide la concentración por el volumen ($2/0{,}25$). 10 g multiplica el volumen por la masa molar y olvida la concentración ($0{,}25\cdot 40$).</p>`,
      conc: 'Masa de soluto = C · V · M.' },
    { src: 'PAES Regular 2026, adaptada',
      enun: r`Se deben preparar 0,400 L de una solución acuosa de glucosa (masa molar = 180 g/mol) de concentración 0,5 mol/L. ¿Qué masa de glucosa debe contener la solución?`,
      alts: ['0,2 g', '1,25 g', '36 g', '72 g'], ok: 2,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> La masa de glucosa para 0,400 L a 0,5 mol/L.</p>
      <p><b>Paso 2. Moles.</b> $n = 0{,}5 \cdot 0{,}400 = 0{,}2$ mol.</p>
      <p><b>Paso 3. Masa.</b> $m = 0{,}2 \cdot 180 = 36$ g.</p>
      <p><b>Respuesta:</b> 36 g.</p>
      <p><b>Comprobación:</b> $\dfrac{36/180}{0{,}4} = \dfrac{0{,}2}{0{,}4} = 0{,}5$ mol/L. ✔</p>
      <p><b>¿Por qué no las otras?</b> 0,2 g toma los moles como gramos. 1,25 g divide la concentración por el volumen. 72 g multiplica el volumen por la masa molar y olvida la concentración ($0{,}4\cdot 180$).</p>`,
      conc: 'Primero n = C · V; después m = n · M.' },
    { src: 'PAES Regular 2026, adaptada',
      enun: r`Para neutralizar un ácido se necesitan 0,200 L de una solución acuosa de hidróxido de potasio (KOH, masa molar = 56 g/mol) de concentración 1,5 mol/L. ¿Qué masa de KOH debe contener la solución?`,
      alts: ['0,3 g', '7,5 g', '11,2 g', '16,8 g'], ok: 3,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> La masa de KOH para 0,200 L a 1,5 mol/L.</p>
      <p><b>Paso 2. Moles.</b> $n = 1{,}5 \cdot 0{,}200 = 0{,}3$ mol.</p>
      <p><b>Paso 3. Masa.</b> $m = 0{,}3 \cdot 56 = 16{,}8$ g.</p>
      <p><b>Respuesta:</b> 16,8 g.</p>
      <p><b>Comprobación:</b> $\dfrac{16{,}8}{56} = 0{,}3$ mol, y $\dfrac{0{,}3}{0{,}2} = 1{,}5$ mol/L. ✔</p>
      <p><b>¿Por qué no las otras?</b> 0,3 g toma los moles como gramos. 7,5 g divide la concentración por el volumen. 11,2 g multiplica el volumen por la masa molar y olvida la concentración ($0{,}2\cdot 56$).</p>`,
      conc: 'm = C · V · M: tres datos, se multiplican los tres.' },

    /* Tipo 3 · Concentración molal — PAES Invierno 2027 (pregunta 76) */
    { src: 'PAES Invierno 2027, adaptada',
      enun: r`Si 8 g de NaOH (masa molar = 40 g/mol) se disuelven en 400 g de agua, ¿cuál es la concentración molal de la solución?`,
      alts: ['0,02 mol/kg', '0,08 mol/kg', '0,5 mol/kg', '20 mol/kg'], ok: 2,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Moles de soluto por kilogramo de <b>solvente</b>.</p>
      <p><b>Paso 2. Moles.</b> $n = \dfrac{8}{40} = 0{,}2$ mol.</p>
      <p><b>Paso 3. Solvente en kg.</b> 400 g = 0,4 kg.</p>
      <p><b>Paso 4.</b> $b = \dfrac{0{,}2}{0{,}4} = 0{,}5$ mol/kg.</p>
      <p><b>Respuesta:</b> 0,5 mol/kg.</p>
      <p><b>Comprobación:</b> en 0,4 kg de agua a 0,5 mol/kg hay $0{,}5\cdot 0{,}4 = 0{,}2$ mol $= 8$ g. ✔</p>
      <p><b>¿Por qué no las otras?</b> 0,02 mol/kg divide gramos por gramos ($8/400$). 0,08 mol/kg multiplica los moles por la masa de agua. 20 mol/kg divide los gramos por los kilogramos, sin pasar a moles.</p>`,
      conc: 'Molal = moles de soluto / kg de solvente.' },
    { src: 'PAES Invierno 2027, adaptada',
      enun: r`Si 18 g de glucosa (masa molar = 180 g/mol) se disuelven en 250 g de agua, ¿cuál es la concentración molal de la solución?`,
      alts: ['72 mol/kg', '0,4 mol/kg', '0,1 mol/kg', '0,025 mol/kg'], ok: 1,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Moles de glucosa por kilogramo de agua.</p>
      <p><b>Paso 2. Moles.</b> $n = \dfrac{18}{180} = 0{,}1$ mol.</p>
      <p><b>Paso 3. Solvente en kg.</b> 250 g = 0,25 kg.</p>
      <p><b>Paso 4.</b> $b = \dfrac{0{,}1}{0{,}25} = 0{,}4$ mol/kg.</p>
      <p><b>Respuesta:</b> 0,4 mol/kg.</p>
      <p><b>Comprobación:</b> $0{,}4 \cdot 0{,}25 = 0{,}1$ mol $= 18$ g. ✔</p>
      <p><b>¿Por qué no las otras?</b> 72 mol/kg divide los gramos por los kilogramos sin pasar a moles. 0,1 mol/kg son los moles, sin dividir por la masa de agua. 0,025 mol/kg multiplica en vez de dividir.</p>`,
      conc: 'Pasa los gramos de soluto a moles y los gramos de agua a kilogramos.' },
    { src: 'PAES Invierno 2027, adaptada',
      enun: r`Si 30 g de urea (masa molar = 60 g/mol) se disuelven en 2.000 g de agua, ¿cuál es la concentración molal de la solución?`,
      alts: ['0,25 mol/kg', '0,015 mol/kg', '1,0 mol/kg', '15 mol/kg'], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Moles de urea por kilogramo de agua.</p>
      <p><b>Paso 2. Moles.</b> $n = \dfrac{30}{60} = 0{,}5$ mol.</p>
      <p><b>Paso 3. Solvente en kg.</b> 2.000 g = 2 kg.</p>
      <p><b>Paso 4.</b> $b = \dfrac{0{,}5}{2} = 0{,}25$ mol/kg.</p>
      <p><b>Respuesta:</b> 0,25 mol/kg.</p>
      <p><b>Comprobación:</b> $0{,}25 \cdot 2 = 0{,}5$ mol $= 30$ g. ✔</p>
      <p><b>¿Por qué no las otras?</b> 0,015 mol/kg divide gramos por gramos ($30/2.000$). 1,0 mol/kg multiplica los moles por los kilogramos. 15 mol/kg divide los gramos por los kilogramos sin pasar a moles.</p>`,
      conc: 'En molal, el denominador es el solvente en kilogramos.' },

    /* Tipo 4 · Fracción molar — Estilo PAES (temario 2027) */
    { src: 'Estilo PAES',
      enun: r`Se mezclan 46 g de etanol (C<sub>2</sub>H<sub>5</sub>OH, masa molar = 46 g/mol) con 72 g de agua (masa molar = 18 g/mol). ¿Cuál es la fracción molar del etanol en la mezcla?`,
      alts: ['0,2', '0,25', '0,39', '0,8'], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Los moles de etanol divididos por los moles totales.</p>
      <p><b>Paso 2. Moles.</b> Etanol: $\dfrac{46}{46} = 1$ mol. Agua: $\dfrac{72}{18} = 4$ mol. Total: 5 mol.</p>
      <p><b>Paso 3.</b> $X_{\text{etanol}} = \dfrac{1}{5} = 0{,}2$.</p>
      <p><b>Respuesta:</b> 0,2.</p>
      <p><b>Comprobación:</b> $X_{\text{agua}} = \dfrac{4}{5} = 0{,}8$ y $0{,}2 + 0{,}8 = 1$. ✔</p>
      <p><b>¿Por qué no las otras?</b> 0,25 divide por los moles de agua y no por el total. 0,39 usa masas: $\dfrac{46}{118}$. 0,8 es la fracción molar del agua.</p>`,
      conc: 'Fracción molar = moles del componente / moles totales; todas suman 1.' },
    { src: 'Estilo PAES',
      enun: r`Se mezclan 64 g de metanol (CH<sub>3</sub>OH, masa molar = 32 g/mol) con 108 g de agua (masa molar = 18 g/mol). ¿Cuál es la fracción molar del agua en la mezcla?`,
      alts: ['0,25', '0,63', '0,75', '3'], ok: 2,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Los moles de agua divididos por los moles totales.</p>
      <p><b>Paso 2. Moles.</b> Metanol: $\dfrac{64}{32} = 2$ mol. Agua: $\dfrac{108}{18} = 6$ mol. Total: 8 mol.</p>
      <p><b>Paso 3.</b> $X_{\text{agua}} = \dfrac{6}{8} = 0{,}75$.</p>
      <p><b>Respuesta:</b> 0,75.</p>
      <p><b>Comprobación:</b> $X_{\text{metanol}} = \dfrac{2}{8} = 0{,}25$ y $0{,}75 + 0{,}25 = 1$. ✔</p>
      <p><b>¿Por qué no las otras?</b> 0,25 es la fracción del metanol. 0,63 usa masas: $\dfrac{108}{172}$. 3 divide moles de agua por moles de metanol; una fracción molar nunca pasa de 1.</p>`,
      conc: 'Una fracción molar está siempre entre 0 y 1.' },
    { src: 'Estilo PAES',
      enun: r`Se disuelven 46 g de glicerina (C<sub>3</sub>H<sub>8</sub>O<sub>3</sub>, masa molar = 92 g/mol) en 81 g de agua (masa molar = 18 g/mol). ¿Cuál es la fracción molar de la glicerina en la solución?`,
      alts: ['0,9', '0,36', '0,11', '0,1'], ok: 3,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Los moles de glicerina divididos por los moles totales.</p>
      <p><b>Paso 2. Moles.</b> Glicerina: $\dfrac{46}{92} = 0{,}5$ mol. Agua: $\dfrac{81}{18} = 4{,}5$ mol. Total: 5 mol.</p>
      <p><b>Paso 3.</b> $X_{\text{glicerina}} = \dfrac{0{,}5}{5} = 0{,}1$.</p>
      <p><b>Respuesta:</b> 0,1.</p>
      <p><b>Comprobación:</b> $X_{\text{agua}} = \dfrac{4{,}5}{5} = 0{,}9$ y $0{,}1 + 0{,}9 = 1$. ✔</p>
      <p><b>¿Por qué no las otras?</b> 0,11 divide por los moles de agua ($0{,}5/4{,}5$) y no por el total. 0,36 usa masas: $\dfrac{46}{127}$. 0,9 es la fracción molar del agua.</p>`,
      conc: 'En el denominador van los moles de TODOS los componentes.' },

    /* Tipo 5 · Afirmaciones I, II y III sobre una solución (moles, mol/L, % m/v) — PAES Invierno 2026 (pregunta 79) */
    { src: 'PAES Invierno 2026, adaptada',
      enun: r`Se disuelven 4 g de NaOH (masa molar = 40 g/mol) en agua hasta completar 200 mL de solución. Al respecto, ¿cuál(es) de las siguientes afirmaciones es (son) correcta(s)?<br>I) La solución contiene 0,1 mol de NaOH.<br>II) La concentración de la solución es 0,5 mol/L.<br>III) La concentración de la solución es 4 % m/v.`,
      alts: ['Solo I', 'Solo I y II', 'Solo II y III', 'I, II y III'], ok: 1,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Revisar moles, concentración molar y % m/v de la misma solución.</p>
      <p><b>Paso 2. Afirmación I.</b> $n = \dfrac{4}{40} = 0{,}1$ mol. <b>Correcta.</b></p>
      <p><b>Paso 3. Afirmación II.</b> $C = \dfrac{0{,}1}{0{,}2} = 0{,}5$ mol/L. <b>Correcta.</b></p>
      <p><b>Paso 4. Afirmación III.</b> $\dfrac{4}{200}\cdot 100 = 2$ % m/v, no 4 %. <b>Incorrecta.</b></p>
      <p><b>Respuesta:</b> solo I y II.</p>
      <p><b>Comprobación:</b> con el atajo, 2 % m/v · 10 / 40 = 0,5 mol/L, igual que en II. ✔</p>
      <p><b>¿Por qué no las otras?</b> «Solo I» olvida pasar 200 mL a 0,2 L en II. «Solo II y III» y «I, II y III» aceptan III, que confunde los 4 g con 4 g en 100 mL.</p>`,
      conc: 'Una misma solución se puede describir en mol/L y en % m/v: los dos valores deben ser coherentes.' },
    { src: 'PAES Invierno 2026, adaptada',
      enun: r`Se disuelven 9 g de glucosa (masa molar = 180 g/mol) en agua hasta completar 500 mL de solución. Al respecto, ¿cuál(es) de las siguientes afirmaciones es (son) correcta(s)?<br>I) La solución contiene 0,05 mol de glucosa.<br>II) La concentración de la solución es 0,025 mol/L.<br>III) La concentración de la solución es 1,8 % m/v.`,
      alts: ['Solo I', 'Solo II', 'Solo I y III', 'I, II y III'], ok: 2,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Revisar moles, mol/L y % m/v.</p>
      <p><b>Paso 2. Afirmación I.</b> $n = \dfrac{9}{180} = 0{,}05$ mol. <b>Correcta.</b></p>
      <p><b>Paso 3. Afirmación II.</b> $C = \dfrac{0{,}05}{0{,}5} = 0{,}1$ mol/L, no 0,025. <b>Incorrecta.</b> (0,025 sale de multiplicar $0{,}05 \cdot 0{,}5$.)</p>
      <p><b>Paso 4. Afirmación III.</b> $\dfrac{9}{500}\cdot 100 = 1{,}8$ % m/v. <b>Correcta.</b></p>
      <p><b>Respuesta:</b> solo I y III.</p>
      <p><b>Comprobación:</b> 1,8 % m/v · 10 / 180 = 0,1 mol/L. ✔</p>
      <p><b>¿Por qué no las otras?</b> «Solo I» descarta III, que se cumple. «Solo II» y «I, II y III» aceptan II, que multiplica los moles por el volumen en vez de dividir.</p>`,
      conc: 'C = n / V: si multiplicas, el error se nota al comprobar con el % m/v.' },
    { src: 'PAES Invierno 2026, adaptada',
      enun: r`Se disuelven 12 g de NaOH (masa molar = 40 g/mol) en agua hasta completar 600 mL de solución. Al respecto, ¿cuál(es) de las siguientes afirmaciones es (son) correcta(s)?<br>I) La solución contiene 0,3 mol de NaOH.<br>II) La concentración de la solución es 0,5 mol/L.<br>III) La concentración de la solución es 2 % m/v.`,
      alts: ['Solo I', 'Solo II', 'Solo I y II', 'I, II y III'], ok: 3,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Revisar moles, mol/L y % m/v.</p>
      <p><b>Paso 2. Afirmación I.</b> $n = \dfrac{12}{40} = 0{,}3$ mol. <b>Correcta.</b></p>
      <p><b>Paso 3. Afirmación II.</b> $C = \dfrac{0{,}3}{0{,}6} = 0{,}5$ mol/L. <b>Correcta.</b></p>
      <p><b>Paso 4. Afirmación III.</b> $\dfrac{12}{600}\cdot 100 = 2$ % m/v. <b>Correcta.</b></p>
      <p><b>Respuesta:</b> I, II y III.</p>
      <p><b>Comprobación:</b> 2 % m/v · 10 / 40 = 0,5 mol/L, igual que en II. ✔</p>
      <p><b>¿Por qué no las otras?</b> Las demás dejan fuera alguna afirmación que sí se cumple; las tres se verifican con los cálculos anteriores.</p>`,
      conc: 'Comprueba el mol/L con el % m/v: C = % m/v · 10 / M.' }
  ]
},

/* =====================================================================
   4. DILUCIÓN Y MEZCLAS DE SOLUCIONES
   ===================================================================== */
{
  id: 'qui_dilucion', unit: 'Unidad 3 · Soluciones químicas', icon: '💧',
  title: 'Dilución y mezclas de soluciones',
  desc: 'Qué pasa al agregar agua a una solución, cómo usar C₁·V₁ = C₂·V₂ para calcular volúmenes y concentraciones, cuánta agua agregar, diluciones sucesivas y la concentración al mezclar soluciones del mismo soluto.',
  slides: [
    { t: '¿Qué es diluir?', b: r`
      <div class="cols"><div>
      <p><b>Diluir</b> es agregar solvente a una solución. Pasan tres cosas:</p>
      <ul><li>Los <b>moles (y gramos) de soluto no cambian</b>: no agregaste soluto ni lo sacaste.</li>
      <li>El <b>volumen aumenta</b>.</li>
      <li>La <b>concentración baja</b>: el mismo soluto queda repartido en más volumen.</li></ul>
      <p>El <b>factor de dilución</b> dice cuántas veces creció el volumen: $\dfrac{V_2}{V_1}$. La concentración baja esas mismas veces. Si llevas 5 mL de una solución a 25 mL en un matraz aforado, el volumen crece 5 veces y la concentración queda en <b>un quinto</b> de la original, sea cual sea la unidad (% m/m, mol/L…).</p>
      <p>Lo contrario, <b>evaporar solvente</b>, sube la concentración: los moles siguen iguales en menos volumen.</p>
      </div><div>
      <div class="qfig"><img class="tikz" src="paes/quimica/fig/sol_dilucion.svg" alt="100 mL de HCl 6 mol/L con 0,6 mol más 300 mL de agua dan 400 mL de HCl 1,5 mol/L con los mismos 0,6 mol"></div>
      <div class="box alert"><b>Diluir no saca soluto</b> "Al diluir hay menos soluto" es falso. Hay el mismo soluto; lo que hay es menos soluto <b>por cada mL</b>.</div>
      </div></div>` },
    { t: 'La fórmula C₁·V₁ = C₂·V₂', b: r`
      <div class="cols"><div>
      <p>Como los moles no cambian, $n_1 = n_2$. Y como $n = C\cdot V$:</p>
      $$C_1 \cdot V_1 = C_2 \cdot V_2$$
      <p>El subíndice 1 es la solución inicial (concentrada) y el 2, la final (diluida). Con tres datos, despejas el cuarto.</p>
      <p><b>Ejemplo.</b> Tienes 100 mL de HCl 6 mol/L y quieres llevarlo a 1,5 mol/L. ¿Qué volumen final tendrá y cuánta agua agregas?</p>
      <p><b>Paso 1.</b> $6 \cdot 100 = 1{,}5 \cdot V_2$.</p>
      <p><b>Paso 2.</b> $V_2 = \dfrac{600}{1{,}5} = 400$ mL.</p>
      <p><b>Paso 3. Agua:</b> $V_2 - V_1 = 400 - 100 = 300$ mL.</p>
      <p><b>Comprobación:</b> moles antes, $6 \cdot 0{,}1 = 0{,}6$ mol; después, $1{,}5 \cdot 0{,}4 = 0{,}6$ mol. ✔</p>
      </div><div>
      <div class="box"><b>Unidades</b> Los dos volúmenes deben ir en la misma unidad (los dos en mL o los dos en L), y las dos concentraciones también. No hace falta pasar a litros si ambos están en mL.</div>
      <div class="box alert"><b>V₂ es el volumen final, no el agua</b> El error más común es responder 400 mL cuando preguntan cuánta agua agregar. Agua = $V_2 - V_1$ (con volúmenes aditivos).</div>
      </div></div>` },
    { t: 'Cuánta agua agregar', b: r`
      <div class="cols"><div>
      <p><b>Ejemplo 1.</b> Se tienen 0,5 L de H<sub>2</sub>SO<sub>4</sub> 4,0 mol/L y se necesita 0,2 mol/L. ¿Cuánta agua se agrega (volúmenes aditivos)?</p>
      <p><b>Paso 1.</b> $V_2 = \dfrac{C_1 V_1}{C_2} = \dfrac{4{,}0 \cdot 0{,}5}{0{,}2} = 10$ L.</p>
      <p><b>Paso 2.</b> Agua: $10 - 0{,}5 = 9{,}5$ L.</p>
      <p><b>Ejemplo 2, con % m/v.</b> Se tienen 50 mL de NaOH al 4 % m/v ($M$ = 40 g/mol) y se quiere 0,5 mol/L.</p>
      <p><b>Paso 1. Pasa a mol/L.</b> 4 % m/v = 40 g/L = 1 mol/L.</p>
      <p><b>Paso 2.</b> $V_2 = \dfrac{1 \cdot 50}{0{,}5} = 100$ mL. Agua: $100 - 50 = 50$ mL.</p>
      </div><div>
      <div class="box"><b>Preparar desde una solución madre</b> Quieres 1 L de NaOH 0,03 mol/L a partir de NaOH 1,0 mol/L. $V_1 = \dfrac{0{,}03 \cdot 1.000}{1{,}0} = 30$ mL de solución madre, más agua hasta 1.000 mL: <b>30 mL + 970 mL de agua</b>. Mezclar 30 mL con 1.000 mL de agua daría 1.030 mL y una concentración un poco menor.</div>
      <div class="box alert"><b>Las dos concentraciones en la misma unidad</b> Si una está en % m/v y la otra en mol/L, convierte primero.</div>
      </div></div>` },
    { t: 'Diluciones sucesivas y material', b: r`
      <div class="cols"><div>
      <p>A veces se diluye en dos pasos. Se resuelve un paso a la vez: la concentración final del primero es la inicial del segundo.</p>
      <p><b>Ejemplo.</b> A 500 mL de NaCl 1,5 mol/L se le agrega 1 L de agua (solución X). Luego se toman 10 mL de X y se completan con agua hasta 50 mL (solución Y). ¿Concentración de Y?</p>
      <p><b>Paso 1. Solución X.</b> Volumen: $500 + 1.000 = 1.500$ mL. $C_X = \dfrac{1{,}5 \cdot 500}{1.500} = 0{,}5$ mol/L.</p>
      <p><b>Paso 2. Solución Y.</b> $C_Y = \dfrac{0{,}5 \cdot 10}{50} = 0{,}1$ mol/L.</p>
      <p><b>Comprobación con factores:</b> el primer paso diluye 3 veces y el segundo 5 veces: en total 15 veces. $\dfrac{1{,}5}{15} = 0{,}1$. ✔</p>
      </div><div>
      <div class="box"><b>Material de laboratorio</b><br>· <b>Pipeta</b> (aforada o graduada): para tomar un volumen exacto de la solución concentrada.<br>· <b>Matraz aforado</b>: para completar un volumen final exacto. Es el material indispensable cuando la variable que se controla es el volumen final.<br>· Vaso de precipitados y probeta: medidas aproximadas; no sirven para un volumen final exacto.</div>
      <div class="box alert"><b>"Toma 10 mL de X"</b> Tomar una parte de una solución no cambia su concentración: los 10 mL de X siguen siendo 0,5 mol/L.</div>
      </div></div>` },
    { t: 'Mezclas de soluciones del mismo soluto', b: r`
      <div class="cols"><div>
      <p>Al mezclar dos soluciones del <b>mismo soluto</b>, los moles se suman y los volúmenes también (si son aditivos):</p>
      $$C_f = \dfrac{C_1 V_1 + C_2 V_2}{V_1 + V_2}$$
      <div class="qfig"><img class="tikz" src="paes/quimica/fig/sol_mezcla_0.svg" alt="200 mL de solución 1,0 mol/L más 300 mL de solución 0,5 mol/L dan 500 mL de solución 0,7 mol/L"></div>
      <p><b>Ejemplo.</b> 200 mL de NaCl 1,0 mol/L + 300 mL de NaCl 0,5 mol/L.</p>
      <p><b>Paso 1. Moles.</b> $1{,}0 \cdot 0{,}2 = 0{,}2$ mol y $0{,}5 \cdot 0{,}3 = 0{,}15$ mol. Total: 0,35 mol.</p>
      <p><b>Paso 2. Volumen.</b> $0{,}2 + 0{,}3 = 0{,}5$ L.</p>
      <p><b>Paso 3.</b> $C_f = \dfrac{0{,}35}{0{,}5} = 0{,}7$ mol/L.</p>
      </div><div>
      <div class="box"><b>Para comprobar</b> La concentración final siempre queda <b>entre</b> las dos iniciales (0,5 &lt; 0,7 &lt; 1,0), más cerca de la que aporta más volumen. Si mezclas soluciones de <b>igual</b> concentración, la mezcla tiene esa misma concentración, aunque tenga el doble de soluto.</div>
      <div class="box"><b>Con tres soluciones</b> 10 mL de HCl 1,0 mol/L + 20 mL de HCl 0,5 mol/L + 50 mL de HCl 0,2 mol/L: moles $0{,}01 + 0{,}01 + 0{,}01 = 0{,}03$ mol en 0,08 L: $\dfrac{0{,}03}{0{,}08} = 0{,}375$ mol/L.</div>
      <div class="box alert"><b>No promedies las concentraciones</b> $\dfrac{1{,}0 + 0{,}5}{2} = 0{,}75$ está mal, salvo que los volúmenes sean iguales. Suma moles y divide por el volumen total.</div>
      </div></div>` },
    { t: 'Lo clave del tema', b: r`
      <div class="cols"><div>
      <table><thead><tr><th>Situación</th><th>Qué hacer</th></tr></thead><tbody>
      <tr><td>Dilución</td><td>$C_1 V_1 = C_2 V_2$; los moles no cambian.</td></tr>
      <tr><td>Agua a agregar</td><td>$V_2 - V_1$ (volúmenes aditivos).</td></tr>
      <tr><td>Factor de dilución</td><td>$V_2 / V_1$: la concentración se divide por ese número.</td></tr>
      <tr><td>Dos diluciones seguidas</td><td>Una a la vez, o multiplica los factores.</td></tr>
      <tr><td>Mezcla del mismo soluto</td><td>$C_f = (C_1V_1 + C_2V_2)/(V_1 + V_2)$; queda entre las dos.</td></tr>
      <tr><td>Evaporar solvente</td><td>Sube la concentración; los moles no cambian.</td></tr></tbody></table>
      </div><div>
      <div class="box"><b>Recuerda</b><br>· El agua agregada es $V_2 - V_1$.<br>· Al diluir, el volumen final es mayor que el inicial.<br>· Al mezclar soluciones, suma moles y suma volúmenes.<br>· Al diluir, los moles de soluto no cambian; solo baja la concentración.</div>
      <div class="box"><b>Método para la PAES</b> 1. Escribe qué es 1 (inicial) y qué es 2 (final). 2. Iguala moles. 3. Fíjate si piden volumen final o agua agregada. 4. Comprueba: la concentración diluida debe ser menor y la de una mezcla, intermedia.</div>
      </div></div>` }
  ],
  example: {
    src: 'PAES Invierno 2026, adaptada',
    enun: r`Algunos productos para el alisado del cabello contienen hidróxido de sodio (NaOH, masa molar = 40 g/mol), cuya concentración no debe superar cierto valor para evitar daños. Considerando volúmenes aditivos, ¿qué volumen de agua se debe agregar a 100 mL de una solución de NaOH al 2 % m/v para obtener una solución de concentración 0,2 mol/L?`,
    alts: ['40 mL', '150 mL', '250 mL', '900 mL'],
    ok: 1,
    sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El volumen de <b>agua</b> que hay que agregar, no el volumen final. Las dos concentraciones vienen en unidades distintas, así que primero hay que igualarlas.</p>
      <p><b>Paso 2. Pasa el 2 % m/v a mol/L.</b> 2 % m/v son 2 g en 100 mL, o sea, 20 g en 1 L. En moles: $\dfrac{20}{40} = 0{,}5$ mol en 1 L. Entonces $C_1 = 0{,}5$ mol/L.</p>
      <p><b>Paso 3. Usa la dilución.</b> $C_1 V_1 = C_2 V_2$: $0{,}5 \cdot 100 = 0{,}2 \cdot V_2$, así que $V_2 = \dfrac{50}{0{,}2} = 250$ mL.</p>
      <p><b>Paso 4. Agua a agregar.</b> $250 - 100 = 150$ mL.</p>
      <p><b>Respuesta:</b> 150 mL.</p>
      <p><b>Comprobación:</b> moles de NaOH: al inicio, $0{,}5 \cdot 0{,}1 = 0{,}05$ mol (son los 2 g: $2/40 = 0{,}05$); al final, $0{,}2 \cdot 0{,}25 = 0{,}05$ mol. ✔</p>
      <p><b>¿Por qué no las otras?</b> 250 mL es el volumen final, no el agua agregada. 40 mL despeja la fórmula al revés: $\dfrac{0{,}2 \cdot 100}{0{,}5}$, un volumen final menor que el inicial, lo que es imposible al diluir. 900 mL toma el 2 % como si fuera 2 mol/L: $V_2 = \dfrac{2 \cdot 100}{0{,}2} = 1.000$ mL y resta 100 mL.</p>`,
    conc: 'Antes de usar C₁V₁ = C₂V₂, pon las dos concentraciones en la misma unidad; y si piden agua, resta V₁.'
  },
  bank: [
    /* Tipo 1 · Volumen de agua para diluir — PAES Invierno 2027 (pregunta 79) */
    { src: 'PAES Invierno 2027, adaptada',
      enun: r`En un laboratorio se requiere preparar una solución acuosa de ácido sulfúrico (H<sub>2</sub>SO<sub>4</sub>) de concentración 0,5 mol/L a partir de 0,2 L de una solución de H<sub>2</sub>SO<sub>4</sub> de concentración 3,0 mol/L. Considerando volúmenes aditivos, ¿qué volumen de agua se debe agregar?`,
      alts: ['1,0 L', '1,2 L', '1,4 L', '0,6 L'], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El agua a agregar: $V_2 - V_1$.</p>
      <p><b>Paso 2. Volumen final.</b> $3{,}0 \cdot 0{,}2 = 0{,}5 \cdot V_2$, así que $V_2 = \dfrac{0{,}6}{0{,}5} = 1{,}2$ L.</p>
      <p><b>Paso 3. Agua.</b> $1{,}2 - 0{,}2 = 1{,}0$ L.</p>
      <p><b>Respuesta:</b> 1,0 L.</p>
      <p><b>Comprobación:</b> 0,6 mol de H<sub>2</sub>SO<sub>4</sub> en 1,2 L dan $0{,}6/1{,}2 = 0{,}5$ mol/L. ✔</p>
      <p><b>¿Por qué no las otras?</b> 1,2 L es el volumen final. 1,4 L suma el volumen inicial en vez de restarlo. 0,6 L confunde los moles (0,6 mol) con un volumen.</p>`,
      conc: 'Agua agregada = volumen final − volumen inicial.' },
    { src: 'PAES Invierno 2027, adaptada',
      enun: r`Se quiere diluir 50 mL de una solución acuosa de ácido clorhídrico (HCl) de concentración 2,0 mol/L hasta que su concentración sea 0,25 mol/L. Considerando volúmenes aditivos, ¿qué volumen de agua se debe agregar?`,
      alts: ['6,25 mL', '350 mL', '400 mL', '450 mL'], ok: 1,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El agua a agregar.</p>
      <p><b>Paso 2. Volumen final.</b> $2{,}0 \cdot 50 = 0{,}25 \cdot V_2$, así que $V_2 = \dfrac{100}{0{,}25} = 400$ mL.</p>
      <p><b>Paso 3. Agua.</b> $400 - 50 = 350$ mL.</p>
      <p><b>Respuesta:</b> 350 mL.</p>
      <p><b>Comprobación:</b> la concentración bajó 8 veces ($2{,}0/0{,}25$) y el volumen creció 8 veces ($400/50$). ✔</p>
      <p><b>¿Por qué no las otras?</b> 400 mL es el volumen final. 450 mL suma en vez de restar. 6,25 mL despeja al revés ($0{,}25\cdot 50/2{,}0$): un volumen final menor que el inicial.</p>`,
      conc: 'Al diluir, el volumen crece las mismas veces que baja la concentración.' },
    { src: 'PAES Invierno 2027, adaptada',
      enun: r`Se tienen 0,1 L de una solución acuosa de hidróxido de sodio (NaOH) de concentración 5,0 mol/L y se necesita una solución de 0,5 mol/L. Considerando volúmenes aditivos, ¿qué volumen de agua se debe agregar?`,
      alts: ['0,01 L', '1,1 L', '1,0 L', '0,9 L'], ok: 3,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El agua a agregar.</p>
      <p><b>Paso 2. Volumen final.</b> $5{,}0 \cdot 0{,}1 = 0{,}5 \cdot V_2$, así que $V_2 = \dfrac{0{,}5}{0{,}5} = 1{,}0$ L.</p>
      <p><b>Paso 3. Agua.</b> $1{,}0 - 0{,}1 = 0{,}9$ L.</p>
      <p><b>Respuesta:</b> 0,9 L.</p>
      <p><b>Comprobación:</b> 0,5 mol de NaOH en 1,0 L dan 0,5 mol/L. ✔</p>
      <p><b>¿Por qué no las otras?</b> 1,0 L es el volumen final. 1,1 L suma el volumen inicial. 0,01 L despeja al revés y da un volumen menor que el inicial.</p>`,
      conc: 'Si piden agua, no te quedes en V₂: resta lo que ya tenías.' },

    /* Tipo 2 · Diluciones sucesivas — PAES Regular 2026 (pregunta 80) */
    { src: 'PAES Regular 2026, adaptada',
      enun: r`Un estudiante tiene 200 mL de una solución acuosa de cloruro de potasio (KCl) de concentración 2,0 mol/L y le agrega 600 mL de agua, formando la solución X. Luego toma 20 mL de X y agrega agua hasta completar 100 mL, formando la solución Y. Considerando volúmenes aditivos, ¿cuál es la concentración de la solución Y?`,
      alts: ['2,0 mol/L', '0,5 mol/L', '0,4 mol/L', '0,1 mol/L'], ok: 3,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> La concentración después de dos diluciones.</p>
      <p><b>Paso 2. Solución X.</b> Volumen: $200 + 600 = 800$ mL. $C_X = \dfrac{2{,}0 \cdot 200}{800} = 0{,}5$ mol/L.</p>
      <p><b>Paso 3. Solución Y.</b> $C_Y = \dfrac{0{,}5 \cdot 20}{100} = 0{,}1$ mol/L.</p>
      <p><b>Respuesta:</b> 0,1 mol/L.</p>
      <p><b>Comprobación con factores:</b> el primer paso diluye 4 veces ($800/200$) y el segundo 5 veces ($100/20$): 20 veces en total. $2{,}0/20 = 0{,}1$. ✔</p>
      <p><b>¿Por qué no las otras?</b> 2,0 mol/L es la concentración inicial, como si no se diluyera. 0,5 mol/L es la de X: se queda en el primer paso. 0,4 mol/L aplica solo el segundo paso a la solución inicial ($2{,}0 \cdot 20/100$).</p>`,
      conc: 'En diluciones sucesivas, la concentración final de un paso es la inicial del siguiente.' },
    { src: 'PAES Regular 2026, adaptada',
      enun: r`A 100 mL de una solución acuosa de cloruro de sodio (NaCl) de concentración 3,0 mol/L se le agregan 200 mL de agua, formando la solución X. Luego se toman 25 mL de X y se agrega agua hasta completar 100 mL, formando la solución Y. Considerando volúmenes aditivos, ¿cuál es la concentración de la solución Y?`,
      alts: ['0,25 mol/L', '0,75 mol/L', '1,0 mol/L', '3,0 mol/L'], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> La concentración después de dos diluciones.</p>
      <p><b>Paso 2. Solución X.</b> Volumen: $100 + 200 = 300$ mL. $C_X = \dfrac{3{,}0 \cdot 100}{300} = 1{,}0$ mol/L.</p>
      <p><b>Paso 3. Solución Y.</b> $C_Y = \dfrac{1{,}0 \cdot 25}{100} = 0{,}25$ mol/L.</p>
      <p><b>Respuesta:</b> 0,25 mol/L.</p>
      <p><b>Comprobación con factores:</b> 3 veces y luego 4 veces: 12 veces. $3{,}0/12 = 0{,}25$. ✔</p>
      <p><b>¿Por qué no las otras?</b> 3,0 mol/L es la inicial. 1,0 mol/L es la de X. 0,75 mol/L aplica solo el segundo paso a la solución inicial ($3{,}0 \cdot 25/100$).</p>`,
      conc: 'Factor total de dilución = producto de los factores de cada paso.' },
    { src: 'PAES Regular 2026, adaptada',
      enun: r`A 50 mL de una solución acuosa de sulfato de cobre(II) (CuSO<sub>4</sub>) de concentración 1,2 mol/L se le agregan 250 mL de agua, formando la solución X. Luego se toman 10 mL de X y se agrega agua hasta completar 40 mL, formando la solución Y. Considerando volúmenes aditivos, ¿cuál es la concentración de la solución Y?`,
      alts: ['0,2 mol/L', '0,05 mol/L', '0,3 mol/L', '1,2 mol/L'], ok: 1,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> La concentración después de dos diluciones.</p>
      <p><b>Paso 2. Solución X.</b> Volumen: $50 + 250 = 300$ mL. $C_X = \dfrac{1{,}2 \cdot 50}{300} = 0{,}2$ mol/L.</p>
      <p><b>Paso 3. Solución Y.</b> $C_Y = \dfrac{0{,}2 \cdot 10}{40} = 0{,}05$ mol/L.</p>
      <p><b>Respuesta:</b> 0,05 mol/L.</p>
      <p><b>Comprobación con factores:</b> 6 veces y luego 4 veces: 24 veces. $1{,}2/24 = 0{,}05$. ✔</p>
      <p><b>¿Por qué no las otras?</b> 1,2 mol/L es la inicial. 0,2 mol/L es la de X. 0,3 mol/L aplica solo el segundo paso a la solución inicial ($1{,}2 \cdot 10/40$).</p>`,
      conc: 'Resuelve las diluciones en orden, una a la vez.' },

    /* Tipo 3 · Concentración de una mezcla de soluciones — PAES Invierno 2026 (pregunta 18) */
    { src: 'PAES Invierno 2026, adaptada',
      enun: r`Se mezclan 100 mL de una solución acuosa de HCl de concentración 1,0 mol/L con 300 mL de una solución acuosa de HCl de concentración 0,2 mol/L. Considerando volúmenes aditivos, ¿cuál es la concentración de la solución resultante?`,
      alts: ['0,16 mol/L', '0,4 mol/L', '0,6 mol/L', '1,2 mol/L'], ok: 1,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Moles totales divididos por volumen total.</p>
      <p><b>Paso 2. Moles.</b> $1{,}0 \cdot 0{,}1 = 0{,}1$ mol y $0{,}2 \cdot 0{,}3 = 0{,}06$ mol. Total: 0,16 mol.</p>
      <p><b>Paso 3. Volumen total.</b> $0{,}1 + 0{,}3 = 0{,}4$ L.</p>
      <p><b>Paso 4.</b> $C = \dfrac{0{,}16}{0{,}4} = 0{,}4$ mol/L.</p>
      <p><b>Respuesta:</b> 0,4 mol/L.</p>
      <p><b>Comprobación:</b> queda entre 0,2 y 1,0, más cerca de 0,2, que aporta más volumen. ✔</p>
      <p><b>¿Por qué no las otras?</b> 0,16 mol/L son los moles totales, sin dividir por el volumen. 0,6 mol/L promedia las concentraciones sin considerar los volúmenes. 1,2 mol/L las suma.</p>`,
      conc: 'Mezcla: suma moles, suma volúmenes, divide.' },
    { src: 'PAES Invierno 2026, adaptada',
      enun: r`Se mezclan las siguientes soluciones acuosas de NaCl: 20 mL de concentración 2,0 mol/L, 30 mL de concentración 0,5 mol/L y 50 mL de concentración 0,1 mol/L. Considerando volúmenes aditivos, ¿cuál es la concentración de la solución resultante?`,
      alts: ['2,6 mol/L', '0,87 mol/L', '0,6 mol/L', '0,06 mol/L'], ok: 2,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Moles totales divididos por volumen total.</p>
      <p><b>Paso 2. Moles.</b> $2{,}0 \cdot 0{,}02 = 0{,}04$; $0{,}5 \cdot 0{,}03 = 0{,}015$; $0{,}1 \cdot 0{,}05 = 0{,}005$. Total: 0,06 mol.</p>
      <p><b>Paso 3. Volumen total.</b> $20 + 30 + 50 = 100$ mL = 0,1 L.</p>
      <p><b>Paso 4.</b> $C = \dfrac{0{,}06}{0{,}1} = 0{,}6$ mol/L.</p>
      <p><b>Respuesta:</b> 0,6 mol/L.</p>
      <p><b>Comprobación:</b> queda entre la menor (0,1) y la mayor (2,0) concentración. ✔</p>
      <p><b>¿Por qué no las otras?</b> 0,06 mol/L son los moles, sin dividir por el volumen. 0,87 mol/L promedia las tres concentraciones ($2{,}6/3$). 2,6 mol/L las suma.</p>`,
      conc: 'Con tres o más soluciones el método es el mismo: moles totales / volumen total.' },
    { src: 'PAES Invierno 2026, adaptada',
      enun: r`Se mezclan 500 mL de una solución acuosa de glucosa de concentración 0,8 mol/L con 1.500 mL de una solución acuosa de glucosa de concentración 0,4 mol/L. Considerando volúmenes aditivos, ¿cuál es la concentración de la solución resultante?`,
      alts: ['1,2 mol/L', '1,0 mol/L', '0,6 mol/L', '0,5 mol/L'], ok: 3,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Moles totales divididos por volumen total.</p>
      <p><b>Paso 2. Moles.</b> $0{,}8 \cdot 0{,}5 = 0{,}4$ mol y $0{,}4 \cdot 1{,}5 = 0{,}6$ mol. Total: 1,0 mol.</p>
      <p><b>Paso 3. Volumen total.</b> $0{,}5 + 1{,}5 = 2{,}0$ L.</p>
      <p><b>Paso 4.</b> $C = \dfrac{1{,}0}{2{,}0} = 0{,}5$ mol/L.</p>
      <p><b>Respuesta:</b> 0,5 mol/L.</p>
      <p><b>Comprobación:</b> queda entre 0,4 y 0,8, más cerca de 0,4, que aporta el triple de volumen. ✔</p>
      <p><b>¿Por qué no las otras?</b> 0,6 mol/L promedia las concentraciones como si los volúmenes fueran iguales. 1,0 mol/L son los moles totales, sin dividir por los 2 L. 1,2 mol/L suma las concentraciones.</p>`,
      conc: 'El promedio simple solo sirve si los volúmenes son iguales.' },

    /* Tipo 4 · Mezcla de soluciones de igual concentración (con figura) — PAES Invierno 2026 (pregunta 77) */
    { src: 'PAES Invierno 2026, adaptada',
      enun: r`En el laboratorio, un grupo de estudiantes obtiene la solución 3 mezclando dos soluciones acuosas de glucosa de igual concentración, como se representa en la figura.<br>Considerando volúmenes aditivos, ¿cuál de las siguientes opciones describe correctamente la solución 3?`,
      fig: { type: 'img', src: 'paes/quimica/fig/sol_mezcla_1.svg', alt: 'Solución 1: 0,5 mol/L y 100 mL, más solución 2: 0,5 mol/L y 100 mL, dan la solución 3 de 200 mL y concentración desconocida' },
      alts: ['Su concentración es 1,0 mol/L.', 'Contiene 0,1 mol de glucosa.', 'Contiene la misma cantidad de glucosa, en mol, que la solución 1.', 'Tiene menos glucosa por cada mililitro que la solución 1.'], ok: 1,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Comparar la mezcla con las soluciones de partida: moles y concentración.</p>
      <p><b>Paso 2. Moles.</b> Cada solución tiene $0{,}5 \cdot 0{,}1 = 0{,}05$ mol. La mezcla: $0{,}05 + 0{,}05 = 0{,}1$ mol.</p>
      <p><b>Paso 3. Concentración.</b> $\dfrac{0{,}1}{0{,}2} = 0{,}5$ mol/L: la misma de antes.</p>
      <p><b>Respuesta:</b> contiene 0,1 mol de glucosa.</p>
      <p><b>¿Por qué no las otras?</b> «1,0 mol/L» suma las concentraciones; al duplicar soluto y volumen, la concentración no cambia. «Misma cantidad que la solución 1»: tiene el doble de moles. «Menos glucosa por mL»: la concentración es la misma, 0,5 mol/L.</p>`,
      conc: 'Mezclar soluciones de igual concentración suma el soluto, pero la concentración no cambia.' },
    { src: 'PAES Invierno 2026, adaptada',
      enun: r`En el laboratorio, un grupo de estudiantes obtiene la solución 3 mezclando dos soluciones acuosas de glucosa de igual concentración, como se representa en la figura.<br>Considerando volúmenes aditivos, ¿cuál de las siguientes opciones describe correctamente la solución 3?`,
      fig: { type: 'img', src: 'paes/quimica/fig/sol_mezcla_2.svg', alt: 'Solución 1: 2,0 mol/L y 50 mL, más solución 2: 2,0 mol/L y 150 mL, dan la solución 3 de 200 mL y concentración desconocida' },
      alts: ['Su concentración es 2,0 mol/L.', 'Su concentración es 4,0 mol/L.', 'Contiene 0,1 mol de glucosa, igual que la solución 1.', 'Tiene el doble de glucosa por cada mililitro que la solución 2.'], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Moles y concentración de la mezcla.</p>
      <p><b>Paso 2. Moles.</b> Solución 1: $2{,}0 \cdot 0{,}05 = 0{,}1$ mol. Solución 2: $2{,}0 \cdot 0{,}15 = 0{,}3$ mol. Mezcla: 0,4 mol.</p>
      <p><b>Paso 3. Concentración.</b> $\dfrac{0{,}4}{0{,}2} = 2{,}0$ mol/L.</p>
      <p><b>Respuesta:</b> su concentración es 2,0 mol/L.</p>
      <p><b>¿Por qué no las otras?</b> «4,0 mol/L» suma las concentraciones. «0,1 mol, igual que la solución 1»: la mezcla tiene 0,4 mol. «El doble por mL que la solución 2»: tiene la misma concentración, 2,0 mol/L.</p>`,
      conc: 'Si las dos soluciones tienen la misma concentración, la mezcla también, sin importar los volúmenes.' },
    { src: 'PAES Invierno 2026, adaptada',
      enun: r`En el laboratorio, un grupo de estudiantes obtiene la solución 3 mezclando dos soluciones acuosas de glucosa de igual concentración, como se representa en la figura.<br>Considerando volúmenes aditivos, ¿cuál de las siguientes opciones describe correctamente la solución 3?`,
      fig: { type: 'img', src: 'paes/quimica/fig/sol_mezcla_3.svg', alt: 'Solución 1: 0,2 mol/L y 300 mL, más solución 2: 0,2 mol/L y 200 mL, dan la solución 3 de 500 mL y concentración desconocida' },
      alts: ['Su concentración es 0,4 mol/L.', 'Contiene 0,06 mol de glucosa, igual que la solución 1.', 'Contiene 0,1 mol de glucosa.', 'Tiene más glucosa por cada mililitro que la solución 1.'], ok: 2,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Moles y concentración de la mezcla.</p>
      <p><b>Paso 2. Moles.</b> Solución 1: $0{,}2 \cdot 0{,}3 = 0{,}06$ mol. Solución 2: $0{,}2 \cdot 0{,}2 = 0{,}04$ mol. Mezcla: 0,1 mol.</p>
      <p><b>Paso 3. Concentración.</b> $\dfrac{0{,}1}{0{,}5} = 0{,}2$ mol/L, igual que antes.</p>
      <p><b>Respuesta:</b> contiene 0,1 mol de glucosa.</p>
      <p><b>¿Por qué no las otras?</b> «0,4 mol/L» suma las concentraciones. «0,06 mol, igual que la solución 1»: esos son solo los moles de la solución 1. «Más glucosa por mL»: la concentración sigue siendo 0,2 mol/L.</p>`,
      conc: 'Mezclar suma moles y volúmenes; con igual concentración, la proporción no cambia.' },

    /* Tipo 5 · Diseño experimental de una dilución: variable controlada — PAES Invierno 2026 (pregunta 16), Regular 2026 (17) e Invierno 2027 (13) */
    { src: 'PAES Regular 2026, adaptada',
      enun: r`Un grupo de estudiantes prepara diluciones de un colorante alimentario a partir de una solución madre de concentración 0,1 mol/L. Toma 1, 2 y 4 mL de la solución madre y, en cada caso, agrega agua hasta completar 50 mL en un matraz aforado. Luego mide la intensidad del color de cada dilución con un colorímetro, a la misma temperatura.<br>¿Cuál de las siguientes opciones corresponde a una variable controlada en este experimento?`,
      alts: ['El volumen de solución madre que se toma.', 'La concentración de cada dilución.', 'La intensidad del color de cada dilución.', 'El volumen final de cada dilución.'], ok: 3,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Una variable <b>controlada</b>: algo que se mantiene igual en todos los ensayos para que no afecte el resultado.</p>
      <p><b>Paso 2. Clasifica.</b> Lo que los estudiantes cambian a propósito es el volumen de solución madre (1, 2 y 4 mL), y con eso la concentración de cada dilución: variable <b>independiente</b>. Lo que miden es la intensidad del color: variable <b>dependiente</b>. Lo que se mantiene igual es el volumen final (50 mL), la temperatura y la concentración de la solución madre: variables <b>controladas</b>.</p>
      <p><b>Respuesta:</b> el volumen final de cada dilución.</p>
      <p><b>¿Por qué no las otras?</b> El volumen que se toma y la concentración de cada dilución cambian entre ensayos: son la variable independiente. La intensidad del color es lo que se mide: la variable dependiente.</p>`,
      conc: 'Independiente: lo que cambias; dependiente: lo que mides; controlada: lo que mantienes igual.' },
    { src: 'PAES Invierno 2027, adaptada',
      enun: r`Un grupo de estudiantes prepara 100 mL de cuatro soluciones acuosas de permanganato de potasio (KMnO<sub>4</sub>) de concentraciones 1,0; 0,2; 0,01 y 0,002 mol/L. Todas se mantienen a 25 °C, se agitan durante 60 segundos y se guardan en frascos iguales. Luego, los estudiantes comparan la tonalidad del color de cada solución.<br>¿Cuál de las siguientes opciones corresponde a una variable controlada en este experimento?`,
      alts: ['La concentración de cada solución.', 'La tonalidad del color de cada solución.', 'La temperatura de las soluciones.', 'La masa de KMnO<sub>4</sub> disuelta en cada solución.'], ok: 2,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Algo que se mantiene igual en todas las soluciones.</p>
      <p><b>Paso 2. Clasifica.</b> La concentración cambia a propósito: variable independiente. La tonalidad es lo que se observa: variable dependiente. La temperatura (25 °C), el volumen (100 mL), el tiempo de agitación y el tipo de frasco se mantienen iguales: variables controladas.</p>
      <p><b>Respuesta:</b> la temperatura de las soluciones.</p>
      <p><b>¿Por qué no las otras?</b> La concentración es la variable independiente. La tonalidad es la dependiente. La masa de KMnO<sub>4</sub> disuelta cambia con la concentración (los volúmenes son iguales), así que tampoco se mantiene fija.</p>`,
      conc: 'Si una magnitud cambia junto con la variable independiente, no es controlada.' },
    { src: 'PAES Invierno 2026, adaptada',
      enun: r`Para evaluar el poder desinfectante de soluciones caseras, unos investigadores extraen distintos volúmenes de un mismo frasco de agua oxigenada comercial y agregan agua destilada hasta alcanzar un volumen final, como muestra la tabla.<br>Considerando el procedimiento, ¿cuál de las siguientes opciones corresponde a una variable fija?`,
      fig: { type: 'table', head: ['Volumen de solución comercial (mL)', 'Volumen de solución final (mL)'], rows: [['5,0', '50'], ['5,0', '250'], ['1,0', '250']] },
      alts: ['La concentración de la solución comercial de agua oxigenada.', 'El volumen de solución comercial que se extrae.', 'El volumen de solución final.', 'La concentración de agua oxigenada en la solución final.'], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Algo que no cambia en ningún ensayo.</p>
      <p><b>Paso 2. Revisa la tabla.</b> El volumen extraído cambia (5,0 y 1,0 mL) y el volumen final también (50 y 250 mL). Por eso la concentración final cambia: $\dfrac{50}{5} = 10$, $\dfrac{250}{5} = 50$ y $\dfrac{250}{1} = 250$ veces diluida.</p>
      <p><b>Paso 3.</b> Lo único que se mantiene es la solución de partida: todas salen del mismo frasco comercial, con la misma concentración.</p>
      <p><b>Respuesta:</b> la concentración de la solución comercial de agua oxigenada.</p>
      <p><b>¿Por qué no las otras?</b> El volumen extraído y el volumen final toman distintos valores en la tabla. La concentración final depende de ellos y es distinta en cada ensayo.</p>`,
      conc: 'Una variable fija tiene el mismo valor en todos los ensayos; revisa la tabla fila por fila.' }
  ]
}

];
