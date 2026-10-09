/* Contenido de "PAES Química" (Fabimath, beta) · Unidad 2 · Química orgánica.
   Temario oficial PAES Ciencias Admisión 2027, área «Química orgánica»: átomo de carbono (tetravalencia, hibridación,
   enlaces simple/doble/triple, energía, longitud y ángulo de enlace), modelos de representación, hidrocarburos y
   grupos funcionales. Estilo de preguntas tomado de PAES Invierno 2026, Regular 2026 e Invierno 2027 (paes/quimica/fuentes).
   Nomenclatura: recomendaciones IUPAC vigentes, con el localizador delante del sufijo (but-2-eno, propan-2-ol,
   pentan-2-ona), igual que en las pruebas DEMRE. Figuras: paes/quimica/tikz/org_*.tex -> paes/quimica/fig/org_*.svg. */
const QUI_ORGANICA = [

/* =====================================================================
   1. EL ÁTOMO DE CARBONO
   ===================================================================== */
{
  id: 'qui_carbono', unit: 'Unidad 2 · Química orgánica', icon: '🔗',
  title: 'El átomo de carbono',
  desc: 'Por qué el carbono forma cuatro enlaces, cómo contar enlaces sigma y pi, cómo reconocer la hibridación sp³, sp² y sp de cada carbono y cómo cambian la energía, la longitud y el ángulo de enlace.',
  slides: [
    { t: 'Tetravalencia: el carbono siempre forma 4 enlaces', b: r`
      <div class="cols"><div>
      <p>El carbono tiene $Z = 6$: su configuración es 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>2</sup>. Tiene <b>4 electrones de valencia</b> y los comparte todos: forma siempre <b>4 enlaces covalentes</b>. A esto se le llama <b>tetravalencia</b>.</p>
      <p>Los 4 enlaces pueden repartirse de varias formas: cuatro simples, un doble y dos simples, un triple y un simple, o dos dobles. Lo que nunca cambia es la suma: <b>4</b>.</p>
      <p>Además, el carbono se une fácilmente con otros carbonos (<b>concatenación</b>): forma cadenas largas, ramificadas y anillos. Por eso existen millones de compuestos orgánicos.</p>
      <table><thead><tr><th>Átomo</th><th>N.º de enlaces que forma</th></tr></thead><tbody>
      <tr><td>C</td><td>4</td></tr><tr><td>N</td><td>3</td></tr><tr><td>O, S</td><td>2</td></tr><tr><td>H, F, Cl, Br, I</td><td>1</td></tr></tbody></table>
      </div><div>
      <div class="box"><b>Ejemplo: revisa una estructura</b> En CH<sub>2</sub>=CH–CH<sub>3</sub> (propeno):<br>· C1: doble (cuenta 2) + 2 H = 4 ✔<br>· C2: doble (2) + 1 H + 1 simple = 4 ✔<br>· C3: 1 simple + 3 H = 4 ✔</div>
      <div class="box alert"><b>Error típico</b> Contar un enlace doble como 1. Un doble "gasta" 2 de los 4 enlaces del carbono y un triple gasta 3. Por eso el CH de un doble enlace tiene un solo H, y el C de un triple interno no tiene ninguno.</div>
      </div></div>` },
    { t: 'Enlaces simple, doble y triple: sigma y pi', b: r`
      <div class="cols"><div>
      <p>Cada línea de una fórmula es un par de electrones compartidos. Pero no todos los enlaces son iguales:</p>
      <ul><li><b>Enlace simple</b> (C–C, C–H): 1 enlace <b>sigma</b> ($\sigma$).</li>
      <li><b>Enlace doble</b> (C=C, C=O): 1 $\sigma$ + 1 <b>pi</b> ($\pi$).</li>
      <li><b>Enlace triple</b> (C≡C, C≡N): 1 $\sigma$ + 2 $\pi$.</li></ul>
      <p>El enlace $\sigma$ une los núcleos de frente; el $\pi$ se forma por los lados, con orbitales p que quedaron sin mezclar. Entre dos átomos hay <b>como máximo un</b> $\sigma$.</p>
      <div class="box"><b>Método para contar</b> 1. Dibuja (o imagina) todos los H. 2. Cada enlace, sea simple, doble o triple, aporta <b>exactamente 1</b> $\sigma$. 3. Los $\pi$ son las líneas extra: 1 por cada doble y 2 por cada triple.</div>
      <div class="box"><b>Atajo</b> En una molécula sin anillos, n.º de $\sigma$ = n.º de átomos − 1. Por cada anillo, suma 1. Benceno C<sub>6</sub>H<sub>6</sub>: $12 - 1 + 1 = 12$ enlaces $\sigma$.</div>
      </div><div>
      <div class="qfig"><img class="tikz" src="paes/quimica/fig/org_sigma_pi.svg" alt="Fórmula desarrollada del but-1-en-3-ino con sus enlaces sigma y pi contados"></div>
      <div class="box alert"><b>Error típico</b> Contar el triple como 3 $\sigma$, o "olvidar" los C–H porque no se dibujan en la fórmula topológica. Los C–H también son enlaces $\sigma$.</div>
      </div></div>` },
    { t: 'Hibridación: sp³, sp² y sp', b: r`
      <p>Para formar sus enlaces, el carbono "mezcla" su orbital 2s con orbitales 2p y obtiene orbitales nuevos, iguales entre sí: los <b>orbitales híbridos</b>. Cuántos mezcla depende de cuántos enlaces $\pi$ tenga que formar.</p>
      <div class="qfig"><img class="tikz" src="paes/quimica/fig/org_geometrias.svg" alt="Geometrías del carbono: tetraédrica sp3 con 109,5°, trigonal plana sp2 con 120° y lineal sp con 180°"></div>
      <table><thead><tr><th>Hibridación</th><th>Enlaces del C</th><th>Átomos unidos al C</th><th>Geometría</th><th>Ángulo</th><th>Ejemplo</th></tr></thead><tbody>
      <tr><td>sp<sup>3</sup></td><td>4 simples</td><td>4</td><td>tetraédrica</td><td>109,5°</td><td>CH<sub>4</sub>, alcanos, C de un CH<sub>3</sub></td></tr>
      <tr><td>sp<sup>2</sup></td><td>1 doble + 2 simples</td><td>3</td><td>trigonal plana</td><td>120°</td><td>eteno, C=O, benceno</td></tr>
      <tr><td>sp</td><td>1 triple + 1 simple, o 2 dobles</td><td>2</td><td>lineal</td><td>180°</td><td>etino, C≡N, C del CO<sub>2</sub></td></tr></tbody></table>
      <div class="box"><b>Regla rápida</b> Mira solo al carbono que te preguntan: <b>solo simples → sp³</b>; <b>un doble → sp²</b>; <b>un triple o dos dobles → sp</b>. También sirve contar los átomos unidos a él: 4 → sp³, 3 → sp², 2 → sp.</div>` },
    { t: 'Energía, longitud y ángulo de enlace', b: r`
      <div class="cols"><div>
      <p>Mientras más pares de electrones comparten dos carbonos, más <b>cerca</b> quedan sus núcleos y más <b>energía</b> cuesta separarlos.</p>
      <table><thead><tr><th>Enlace</th><th>Hibridación</th><th>Longitud</th><th>Energía de enlace</th></tr></thead><tbody>
      <tr><td>C–C</td><td>sp<sup>3</sup></td><td>154 pm (0,154 nm)</td><td>347 kJ/mol</td></tr>
      <tr><td>C=C</td><td>sp<sup>2</sup></td><td>134 pm (0,134 nm)</td><td>614 kJ/mol</td></tr>
      <tr><td>C≡C</td><td>sp</td><td>120 pm (0,120 nm)</td><td>839 kJ/mol</td></tr></tbody></table>
      <p><b>Longitud de enlace</b>: distancia entre los núcleos. Disminuye: C–C &gt; C=C &gt; C≡C.<br><b>Energía de enlace</b>: energía necesaria para romperlo. Aumenta: C–C &lt; C=C &lt; C≡C.<br><b>Ángulo de enlace</b>: depende de la hibridación (109,5°, 120° o 180°).</p>
      </div><div>
      <div class="box"><b>Ejemplo resuelto</b> ¿El doble enlace vale el doble que el simple? $2 \cdot 347 = 694$ kJ/mol, pero el C=C tiene 614. El enlace $\pi$ aporta solo $614 - 347 = 267$ kJ/mol: es <b>más débil</b> que el $\sigma$. Por eso alquenos y alquinos son más reactivos que los alcanos: el $\pi$ se rompe primero.</div>
      <div class="box alert"><b>Ojo con las unidades</b> El DEMRE puede dar las longitudes en nm (0,154) o en pm (154). $1\ \text{nm} = 1000\ \text{pm}$. Para comparar, usa la misma unidad en todas.</div>
      <div class="box alert"><b>Error típico</b> Creer que "más enlaces = más largo". Es al revés: el triple es el <b>más corto</b> y el <b>más fuerte</b>.</div>
      </div></div>` },
    { t: 'Ejemplo: hibridación y enlaces átomo por átomo', b: r`
      <div class="cols"><div>
      <p>El acrilonitrilo, CH<sub>2</sub>=CH–C≡N, se usa para fabricar fibras acrílicas. Analicemos cada carbono, numerando de izquierda a derecha.</p>
      <p><b>Paso 1. C1 (CH<sub>2</sub>=).</b> Tiene un doble enlace y dos H: 3 átomos unidos → <b>sp²</b>, 120°.</p>
      <p><b>Paso 2. C2 (=CH–).</b> Un doble, un H y un simple: 3 átomos unidos → <b>sp²</b>, 120°.</p>
      <p><b>Paso 3. C3 (–C≡N).</b> Un simple y un triple: 2 átomos unidos → <b>sp</b>, 180°. Por eso C2, C3 y N están en línea recta.</p>
      <p><b>Paso 4. Enlaces.</b> Átomos: 3 C + 3 H + 1 N = 7, sin anillos → $7 - 1 = 6$ enlaces $\sigma$. Enlaces $\pi$: 1 (del doble) + 2 (del triple) = 3.</p>
      <p><b>Comprobación:</b> contando uno por uno: 3 C–H + C1=C2 + C2–C3 + C3≡N = 6 enlaces, cada uno con 1 $\sigma$. ✔</p>
      </div><div>
      <div class="box"><b>Lo mismo con un grupo carbonilo</b> En el ácido acético, CH<sub>3</sub>–COOH: el C del CH<sub>3</sub> es sp³ y el C del COOH es <b>sp²</b>, porque tiene un doble enlace C=O. Los dobles con O o N también cuentan.</div>
      <div class="box alert"><b>Error típico</b> Pensar que un C unido a un OH es sp³ "porque el OH es simple". Mira <b>todos</b> sus enlaces: el C del COOH tiene un C=O, así que es sp².</div>
      </div></div>` },
    { t: 'Lo clave del tema', b: r`
      <table><thead><tr><th>Enlaces del carbono</th><th>Hibridación</th><th>Geometría y ángulo</th><th>$\sigma$ y $\pi$ de ese enlace</th><th>Longitud / energía</th></tr></thead><tbody>
      <tr><td>4 simples</td><td>sp<sup>3</sup></td><td>tetraédrica, 109,5°</td><td>simple: 1 $\sigma$</td><td>C–C: la más larga, la más débil</td></tr>
      <tr><td>1 doble + 2 simples</td><td>sp<sup>2</sup></td><td>trigonal plana, 120°</td><td>doble: 1 $\sigma$ + 1 $\pi$</td><td>C=C: intermedia</td></tr>
      <tr><td>1 triple + 1 simple (o 2 dobles)</td><td>sp</td><td>lineal, 180°</td><td>triple: 1 $\sigma$ + 2 $\pi$</td><td>C≡C: la más corta, la más fuerte</td></tr></tbody></table>
      <div class="cols"><div>
      <div class="box"><b>Recuerda</b><br>· El triple enlace tiene 1 $\sigma$ y 2 $\pi$.<br>· Cada C–H es un enlace $\sigma$.<br>· El C de un C=O es sp².<br>· Más enlaces entre dos átomos: enlace más corto y más fuerte.</div>
      </div><div>
      <div class="box"><b>Método PAES</b> 1. Completa los H que faltan (4 enlaces por C). 2. Para hibridación, mira cada carbono por separado y cuenta sus átomos vecinos. 3. Para $\sigma$: un $\sigma$ por cada enlace (o átomos − 1, más 1 por anillo). Para $\pi$: 1 por doble, 2 por triple. 4. Revisa si te piden el total o solo los C–C.</div>
      </div></div>` }
  ],
  example: {
    src: 'PAES Invierno 2027, adaptada',
    enun: r`<p>La siguiente figura representa la molécula de etinilbenceno (fenilacetileno), usada en la síntesis de polímeros conductores.</p><p>Al respecto, ¿qué opción contiene el número correcto de enlaces de la molécula?</p>`,
    fig: { type: 'img', src: 'paes/quimica/fig/org_fenilacetileno.svg', alt: 'Fórmula topológica del etinilbenceno: anillo bencénico unido a un grupo C≡CH', cap: 'Etinilbenceno (fórmula topológica)' },
    alts: [r`8 $\sigma$ (C–C), 5 $\pi$ (C–C) y 6 $\sigma$ (C–H)`, r`8 $\sigma$ (C–C), 2 $\pi$ (C–C) y 6 $\sigma$ (C–H)`, r`7 $\sigma$ (C–C), 5 $\pi$ (C–C) y 5 $\sigma$ (C–H)`, r`10 $\sigma$ (C–C), 5 $\pi$ (C–C) y 6 $\sigma$ (C–H)`],
    ok: 0,
    sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Tres conteos: enlaces $\sigma$ entre carbonos, enlaces $\pi$ entre carbonos y enlaces $\sigma$ C–H.</p>
      <p><b>Paso 2. Cuenta los carbonos.</b> El anillo tiene 6 vértices (6 C) y la cadena lateral tiene 2 C (el vértice unido al anillo y el extremo del triple). Total: 8 C, fórmula C<sub>8</sub>H<sub>6</sub>.</p>
      <p><b>Paso 3. Enlaces C–C y sus $\sigma$.</b> En el anillo hay 6 enlaces C–C; el anillo se une a la cadena con 1 enlace; y el triple es 1 enlace más. Son 8 enlaces C–C, y cada uno tiene exactamente 1 $\sigma$: <b>8 $\sigma$ (C–C)</b>.</p>
      <p><b>Paso 4. Enlaces $\pi$.</b> El anillo dibujado tiene 3 dobles (3 $\pi$) y el triple aporta 2 $\pi$: <b>5 $\pi$</b>.</p>
      <p><b>Paso 5. Enlaces C–H.</b> Completa a 4 enlaces cada C del anillo: el C unido a la cadena tiene 3 vecinos (2 del anillo y 1 de la cadena) y uno de esos enlaces es doble, así que ya suma 4 y no lleva H; los otros 5 C del anillo llevan 1 H cada uno. El C terminal del triple lleva 1 H (3 del triple + 1 H = 4). Total: <b>6 $\sigma$ (C–H)</b>.</p>
      <p><b>Respuesta:</b> 8 $\sigma$ (C–C), 5 $\pi$ (C–C) y 6 $\sigma$ (C–H).</p>
      <p><b>Comprobación:</b> la molécula tiene $8 + 6 = 14$ átomos y 1 anillo, así que debe tener $14 - 1 + 1 = 14$ enlaces $\sigma$ en total: $8 + 6 = 14$. ✔</p>
      <p><b>¿Por qué no las otras?</b> "2 $\pi$" cuenta solo el triple y olvida los 3 dobles del anillo. "7 $\sigma$ y 5 C–H" olvida el enlace entre el anillo y la cadena, y el H del extremo del triple. "10 $\sigma$" cuenta el triple como 3 enlaces $\sigma$, pero un triple tiene 1 $\sigma$ y 2 $\pi$.</p>`,
    conc: 'Cada enlace (simple, doble o triple) aporta un solo sigma; los pi son las líneas extra: 1 por doble y 2 por triple.'
  },
  bank: [
    /* Tipo 1: contar enlaces sigma y pi en una fórmula semidesarrollada (Regular 2026 p. 63; Invierno 2026 p. 64) */
    { src: 'PAES Regular 2026, adaptada',
      enun: r`<p>Una docente escribe en la pizarra la estructura del buta-1,3-dieno, materia prima del caucho sintético:</p><p style="text-align:center">CH<sub>2</sub>=CH–CH=CH<sub>2</sub></p><p>¿Cuál es el número total de enlaces sigma de esta molécula?</p>`,
      alts: ['9', '2', '11', '3'], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Todos los enlaces $\sigma$: los C–C y también los C–H.</p>
        <p><b>Paso 2. Completa los H.</b> CH<sub>2</sub> + CH + CH + CH<sub>2</sub>: 6 H. Fórmula C<sub>4</sub>H<sub>6</sub>: 10 átomos.</p>
        <p><b>Paso 3. Cuenta.</b> Enlaces C–H: 6, cada uno 1 $\sigma$. Enlaces C–C: 3 (dos dobles y un simple), cada uno con 1 $\sigma$. Total: $6 + 3 = 9$ $\sigma$.</p>
        <p><b>Respuesta:</b> 9.</p>
        <p><b>Comprobación:</b> sin anillos, $\sigma = \text{átomos} - 1 = 10 - 1 = 9$. ✔</p>
        <p><b>¿Por qué no las otras?</b> 2 es el número de enlaces $\pi$. 11 suma $\sigma$ y $\pi$ (cuenta todas las líneas). 3 cuenta solo los $\sigma$ C–C y olvida los C–H.</p>`,
      conc: 'Los enlaces C–H también son sigma: en una cadena abierta, sigma = átomos − 1.' },
    { src: 'PAES Invierno 2026, adaptada',
      enun: r`<p>En un libro de ejercicios se pregunta por una estructura que presenta, en total, <b>tres enlaces sigma por cada enlace pi</b>. ¿Cuál de las siguientes estructuras cumple esa condición?</p>`,
      alts: [r`HC≡C–C≡CH`, r`H<sub>2</sub>C=CH<sub>2</sub>`, r`HC≡C–CH<sub>3</sub>`, r`HC≡C–CH=CH<sub>2</sub>`], ok: 2,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> La estructura en que $\sigma : \pi = 3 : 1$.</p>
        <p><b>Paso 2. Cuenta en cada una</b> (σ = átomos − 1; π = 1 por doble y 2 por triple):</p>
        <ul><li>HC≡C–C≡CH (C<sub>4</sub>H<sub>2</sub>): 5 $\sigma$ y 4 $\pi$ → 5 : 4.</li>
        <li>H<sub>2</sub>C=CH<sub>2</sub> (C<sub>2</sub>H<sub>4</sub>): 5 $\sigma$ y 1 $\pi$ → 5 : 1.</li>
        <li>HC≡C–CH<sub>3</sub> (C<sub>3</sub>H<sub>4</sub>): 6 $\sigma$ y 2 $\pi$ → 6 : 2 = <b>3 : 1</b>.</li>
        <li>HC≡C–CH=CH<sub>2</sub> (C<sub>4</sub>H<sub>4</sub>): 7 $\sigma$ y 3 $\pi$ → 7 : 3.</li></ul>
        <p><b>Respuesta:</b> HC≡C–CH<sub>3</sub> (propino).</p>
        <p><b>Comprobación:</b> en el propino: 4 C–H + 1 C–C simple + 1 $\sigma$ del triple = 6 $\sigma$; el triple aporta 2 $\pi$. $6/2 = 3$. ✔</p>
        <p><b>¿Por qué no las otras?</b> Si cuentas el triple como 3 $\sigma$ o no cuentas los C–H, las razones cambian y puedes elegir el butadiino o el but-1-en-3-ino por error. El eteno tiene 5 $\sigma$ por cada $\pi$.</p>`,
      conc: 'Para comparar razones sigma/pi, cuenta ambos tipos en cada molécula completa, con todos sus H.' },
    { src: 'PAES Regular 2026, adaptada',
      enun: r`<p>El pent-1-en-3-ino tiene la siguiente fórmula semidesarrollada:</p><p style="text-align:center">CH<sub>2</sub>=CH–C≡C–CH<sub>3</sub></p><p>¿Cuántos enlaces sigma y cuántos enlaces pi tiene en total la molécula?</p>`,
      alts: [r`4 $\sigma$ y 3 $\pi$`, r`13 $\sigma$ y 3 $\pi$`, r`10 $\sigma$ y 2 $\pi$`, r`10 $\sigma$ y 3 $\pi$`], ok: 3,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Todos los $\sigma$ y todos los $\pi$.</p>
        <p><b>Paso 2. Completa los H.</b> CH<sub>2</sub> (2) + CH (1) + C (0) + C (0) + CH<sub>3</sub> (3) = 6 H. Fórmula C<sub>5</sub>H<sub>6</sub>: 11 átomos.</p>
        <p><b>Paso 3. Sigma.</b> 6 C–H + 4 enlaces C–C (cada uno con 1 $\sigma$) = 10 $\sigma$.</p>
        <p><b>Paso 4. Pi.</b> Doble: 1 $\pi$; triple: 2 $\pi$. Total: 3 $\pi$.</p>
        <p><b>Respuesta:</b> 10 $\sigma$ y 3 $\pi$.</p>
        <p><b>Comprobación:</b> $\sigma = 11 - 1 = 10$. ✔</p>
        <p><b>¿Por qué no las otras?</b> "4 $\sigma$" cuenta solo los enlaces C–C. "13 $\sigma$" cuenta cada línea como un $\sigma$ (también las de los dobles y triples). "2 $\pi$" cuenta el triple como si tuviera 1 solo $\pi$.</p>`,
      conc: 'Doble = 1 sigma + 1 pi; triple = 1 sigma + 2 pi.' },
    /* Tipo 2: hibridación de cada carbono numerado (Regular 2026 p. 64) */
    { src: 'PAES Regular 2026, adaptada',
      enun: r`<p>Un docente presenta la estructura de la butinona (but-3-in-2-ona) con sus carbonos numerados:</p><p>¿Qué opción indica correctamente la hibridación de cada carbono?</p>`,
      fig: { type: 'img', src: 'paes/quimica/fig/org_hib_a.svg', alt: 'CH3–C(=O)–C≡CH con los carbonos numerados del 1 al 4' },
      alts: ['C1: sp³ · C2: sp² · C3: sp · C4: sp', 'C1: sp³ · C2: sp³ · C3: sp · C4: sp', 'C1: sp · C2: sp² · C3: sp³ · C4: sp³', 'C1: sp³ · C2: sp² · C3: sp² · C4: sp'], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> La hibridación de cada carbono, uno por uno.</p>
        <p><b>Paso 2. C1 (CH<sub>3</sub>).</b> Solo enlaces simples (3 H y 1 C): <b>sp³</b>.</p>
        <p><b>Paso 3. C2 (C=O).</b> Tiene un doble enlace con el O y dos simples: <b>sp²</b>.</p>
        <p><b>Paso 4. C3 y C4.</b> Ambos participan en el triple enlace: <b>sp</b> los dos.</p>
        <p><b>Respuesta:</b> sp³, sp², sp, sp.</p>
        <p><b>Comprobación:</b> cuenta vecinos: C1 tiene 4 (sp³), C2 tiene 3 (sp²), C3 tiene 2 (sp), C4 tiene 2 (C3 y un H: sp). ✔</p>
        <p><b>¿Por qué no las otras?</b> Poner sp³ en C2 ignora el doble enlace C=O. La opción "sp, sp², sp³, sp³" asigna sp³ al triple: está al revés. Poner sp² en C3 confunde el triple con un doble.</p>`,
      conc: 'El carbono de un C=O es sp²; los dos carbonos de un triple enlace son sp.' },
    { src: 'PAES Regular 2026, adaptada',
      enun: r`<p>Se muestra la estructura del ácido but-3-enoico, con sus carbonos numerados según la prioridad del grupo funcional:</p><p>¿Qué opción relaciona correctamente cada carbono con su hibridación?</p>`,
      fig: { type: 'img', src: 'paes/quimica/fig/org_hib_b.svg', alt: 'H2C=CH–CH2–COOH con los carbonos numerados 4, 3, 2 y 1 de izquierda a derecha' },
      alts: ['C1: sp³ · C2: sp³ · C3: sp² · C4: sp²', 'C1: sp² · C2: sp² · C3: sp² · C4: sp²', 'C1: sp² · C2: sp³ · C3: sp² · C4: sp²', 'C1: sp² · C2: sp³ · C3: sp³ · C4: sp²'], ok: 2,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> La hibridación de C1 a C4.</p>
        <p><b>Paso 2. C1 (COOH).</b> Tiene un C=O, un O–H y un enlace con C2: un doble → <b>sp²</b>.</p>
        <p><b>Paso 3. C2 (CH<sub>2</sub>).</b> Cuatro enlaces simples → <b>sp³</b>.</p>
        <p><b>Paso 4. C3 y C4.</b> Forman el doble enlace C=C → <b>sp²</b> los dos.</p>
        <p><b>Respuesta:</b> sp², sp³, sp², sp².</p>
        <p><b>Comprobación:</b> vecinos: C1 tiene 3 (O, O, C), C2 tiene 4, C3 tiene 3, C4 tiene 3. ✔</p>
        <p><b>¿Por qué no las otras?</b> Poner sp³ en C1 olvida el C=O del grupo carboxilo. "Todos sp²" olvida que el CH<sub>2</sub> del medio solo tiene simples. Poner sp³ en C3 olvida que C3 es parte del doble enlace.</p>`,
      conc: 'Revisa cada carbono por separado: un solo doble enlace en ese carbono basta para que sea sp².' },
    { src: 'PAES Regular 2026, adaptada',
      enun: r`<p>El pent-4-in-1-ol se usa en síntesis orgánica. Su estructura, con los carbonos numerados, es:</p><p>¿Qué opción presenta la hibridación correcta de los carbonos 1 a 5?</p>`,
      fig: { type: 'img', src: 'paes/quimica/fig/org_hib_c.svg', alt: 'HO–CH2–CH2–CH2–C≡CH con los carbonos numerados del 1 al 5' },
      alts: ['sp³, sp³, sp³, sp², sp²', 'sp³, sp³, sp², sp, sp', 'sp, sp, sp³, sp³, sp³', 'sp³, sp³, sp³, sp, sp'], ok: 3,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> La hibridación de C1, C2, C3, C4 y C5, en ese orden.</p>
        <p><b>Paso 2. C1, C2 y C3.</b> Son CH<sub>2</sub> con solo enlaces simples (C1 está unido al OH por un simple): <b>sp³</b>.</p>
        <p><b>Paso 3. C4 y C5.</b> Forman el triple enlace: <b>sp</b>.</p>
        <p><b>Respuesta:</b> sp³, sp³, sp³, sp, sp.</p>
        <p><b>Comprobación:</b> C3 tiene 4 vecinos (2 H, C2 y C4): aunque está junto al triple, sus propios enlaces son simples, así que es sp³. ✔</p>
        <p><b>¿Por qué no las otras?</b> "sp², sp²" en el triple confunde triple con doble. Poner sp² en C3 "contagia" la hibridación del vecino. "sp, sp, sp³…" está numerado al revés: la numeración la fija el OH (C1).</p>`,
      conc: 'La hibridación depende de los enlaces de ese carbono, no de los de sus vecinos.' },
    /* Tipo 3: longitud y energía de enlace con datos (Invierno 2027 p. 63; Invierno 2026 p. 63) */
    { src: 'PAES Invierno 2027, adaptada',
      enun: r`<p>Un grupo de estudiantes investiga la relación entre la hibridación de los átomos de carbono y la longitud del enlace entre ellos. Disponen de la siguiente información:</p><p>Considerando la hibridación de los carbonos en cada molécula, ¿cuál es una conclusión correcta?</p>`,
      fig: { type: 'table', head: ['Molécula', 'Longitud del enlace C–C (pm)'], rows: [['H<sub>3</sub>C–CH<sub>3</sub>', '153,5'], ['H<sub>2</sub>C=CH<sub>2</sub>', '133,9'], ['HC≡CH', '120,3']] },
      alts: ['La unión entre carbonos sp es la más larga, porque comparten más electrones.', 'La unión entre carbonos sp² es más larga que la unión entre carbonos sp³.', 'La unión entre carbonos sp³ es la más larga; le siguen la unión entre carbonos sp² y la unión entre carbonos sp.', 'La longitud del enlace no depende de la hibridación, porque las tres moléculas tienen dos carbonos.'], ok: 2,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Relacionar hibridación con longitud usando la tabla.</p>
        <p><b>Paso 2. Hibridación de cada molécula.</b> Etano (solo simples): sp³. Eteno (doble): sp². Etino (triple): sp.</p>
        <p><b>Paso 3. Ordena por longitud.</b> 153,5 (sp³) &gt; 133,9 (sp²) &gt; 120,3 (sp).</p>
        <p><b>Respuesta:</b> la unión entre carbonos sp³ es la más larga, luego sp² y luego sp.</p>
        <p><b>¿Por qué no las otras?</b> Compartir más electrones acerca los núcleos: el enlace sp es el más <b>corto</b>, no el más largo. sp² (133,9) es más corto que sp³ (153,5). Y la longitud sí cambia aunque las tres tengan 2 C: la tabla muestra valores distintos.</p>`,
      conc: 'De sp³ a sp² a sp, el enlace C–C se acorta.' },
    { src: 'PAES Invierno 2026, adaptada',
      enun: r`<p>Se tienen las siguientes longitudes de enlace entre átomos de carbono:</p><p>Considerando solo la <b>suma de las longitudes de los enlaces carbono–carbono</b> de cada cadena, ¿cuál de los siguientes compuestos de 6 carbonos tiene la menor suma?</p>`,
      fig: { type: 'table', head: ['Enlace', 'Longitud (pm)'], rows: [['C–C', '154'], ['C=C', '134'], ['C≡C', '120']] },
      alts: ['Hexano', 'Hex-1-eno', 'Hex-1-ino', 'Hexa-1,3-dieno'], ok: 3,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> La menor suma de los 5 enlaces C–C de cada cadena de 6 carbonos.</p>
        <p><b>Paso 2. Calcula.</b></p>
        <ul><li>Hexano: 5 simples → $5 \cdot 154 = 770$ pm.</li>
        <li>Hex-1-eno: 4 simples + 1 doble → $4 \cdot 154 + 134 = 750$ pm.</li>
        <li>Hex-1-ino: 4 simples + 1 triple → $4 \cdot 154 + 120 = 736$ pm.</li>
        <li>Hexa-1,3-dieno: 3 simples + 2 dobles → $3 \cdot 154 + 2 \cdot 134 = 730$ pm.</li></ul>
        <p><b>Respuesta:</b> hexa-1,3-dieno (730 pm).</p>
        <p><b>Comprobación:</b> cada doble "ahorra" $154 - 134 = 20$ pm y cada triple $154 - 120 = 34$ pm. Dos dobles ahorran 40 pm; un triple, solo 34. ✔</p>
        <p><b>¿Por qué no las otras?</b> El hexano no tiene enlaces cortos. El hex-1-ino tiene el enlace más corto, pero solo uno: ahorra menos que dos dobles. Elegirlo es mirar solo el enlace más corto sin hacer la suma.</p>`,
      conc: 'Cuando piden un total, suma enlace por enlace: no basta con mirar el enlace más corto.' },
    { src: 'PAES Invierno 2026, adaptada',
      enun: r`<p>La tabla presenta las energías de enlace entre átomos de carbono:</p><p>Respecto de estos datos, se afirma que:</p><p>I. El enlace triple es el que requiere más energía para romperse.<br>II. El enlace $\pi$ del doble enlace aporta menos energía que el enlace $\sigma$.<br>III. El enlace doble tiene exactamente el doble de energía que el simple.</p><p>¿Cuál(es) de las afirmaciones es (son) correcta(s)?</p>`,
      fig: { type: 'table', head: ['Enlace', 'Energía de enlace (kJ/mol)'], rows: [['C–C', '347'], ['C=C', '614'], ['C≡C', '839']] },
      alts: ['Solo I', 'Solo I y II', 'Solo II y III', 'I, II y III'], ok: 1,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Revisar cada afirmación con la tabla.</p>
        <p><b>Paso 2. Afirmación I.</b> 839 &gt; 614 &gt; 347: el triple es el más fuerte. <b>Correcta.</b></p>
        <p><b>Paso 3. Afirmación II.</b> El doble tiene 1 $\sigma$ + 1 $\pi$. Si el $\sigma$ vale como un simple (347), el $\pi$ aporta $614 - 347 = 267$ kJ/mol, menos que 347. <b>Correcta.</b></p>
        <p><b>Paso 4. Afirmación III.</b> El doble de 347 es 694, y el C=C tiene 614. <b>Incorrecta.</b></p>
        <p><b>Respuesta:</b> Solo I y II.</p>
        <p><b>¿Por qué no las otras?</b> "Solo I" olvida que II se deduce de la tabla. Las opciones con III suponen que la energía se duplica, pero el enlace $\pi$ es más débil que el $\sigma$.</p>`,
      conc: 'El enlace pi es más débil que el sigma: por eso los dobles y triples son más reactivos.' },
    /* Tipo 4: identificar el compuesto que cumple una descripción de hibridación (Invierno 2027 p. 64 y 66) */
    { src: 'PAES Invierno 2027, adaptada',
      enun: r`<p>En un informe, un estudiante describe un hidrocarburo así: "tiene exactamente <b>dos átomos de carbono con hibridación sp</b> y todos los demás carbonos tienen hibridación sp³". ¿Cuál de los siguientes compuestos coincide con la descripción?</p>`,
      alts: [r`CH<sub>2</sub>=CH–CH<sub>2</sub>–CH<sub>3</sub>`, r`CH<sub>3</sub>–C≡C–CH<sub>2</sub>–CH<sub>3</sub>`, r`HC≡C–C≡CH`, r`CH<sub>3</sub>–CH=CH–C≡CH`], ok: 1,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Un compuesto con 2 C sp (un triple enlace) y el resto sp³ (sin dobles).</p>
        <p><b>Paso 2. Revisa cada uno.</b></p>
        <ul><li>CH<sub>2</sub>=CH–CH<sub>2</sub>–CH<sub>3</sub>: 2 sp² y 2 sp³; no tiene sp.</li>
        <li>CH<sub>3</sub>–C≡C–CH<sub>2</sub>–CH<sub>3</sub>: los 2 C del triple son sp; los otros 3 son sp³. ✔</li>
        <li>HC≡C–C≡CH: sus 4 C son sp.</li>
        <li>CH<sub>3</sub>–CH=CH–C≡CH: 1 sp³, 2 sp² y 2 sp.</li></ul>
        <p><b>Respuesta:</b> CH<sub>3</sub>–C≡C–CH<sub>2</sub>–CH<sub>3</sub> (pent-2-ino).</p>
        <p><b>¿Por qué no las otras?</b> El but-1-eno tiene sp², no sp. El butadiino tiene 4 C sp. El pent-3-en-1-ino tiene 2 C sp, pero también 2 C sp², así que no cumple "todos los demás sp³".</p>`,
      conc: 'Un triple enlace aporta dos carbonos sp; un doble, dos carbonos sp².' },
    { src: 'PAES Invierno 2027, adaptada',
      enun: r`<p>Un compuesto aromático usado como solvente tiene <b>seis carbonos con hibridación sp²</b> y <b>un carbono con hibridación sp³</b>. ¿Cuál de los siguientes compuestos corresponde a esa descripción?</p>`,
      alts: ['Benceno, C<sub>6</sub>H<sub>6</sub>', 'Metilciclohexano, C<sub>7</sub>H<sub>14</sub>', 'Estireno (vinilbenceno), C<sub>8</sub>H<sub>8</sub>', 'Tolueno (metilbenceno), C<sub>7</sub>H<sub>8</sub>'], ok: 3,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> 6 C sp² (un anillo bencénico) y 1 C sp³ (un CH<sub>3</sub> u otro C con solo simples).</p>
        <p><b>Paso 2. Revisa.</b> Benceno: 6 sp², ningún sp³. Metilciclohexano: el anillo no tiene dobles: 7 sp³. Estireno: anillo (6 sp²) + CH=CH<sub>2</sub> (2 sp²): 8 sp². Tolueno: anillo (6 sp²) + CH<sub>3</sub> (sp³). ✔</p>
        <p><b>Respuesta:</b> tolueno (metilbenceno).</p>
        <p><b>¿Por qué no las otras?</b> El benceno no tiene carbono sp³. El metilciclohexano tiene 7 C, pero es un anillo saturado: todos sp³. El estireno tiene un doble enlace fuera del anillo: sus 8 C son sp².</p>`,
      conc: 'En el anillo bencénico los seis carbonos son sp²; un CH₃ unido a él es sp³.' },
    { src: 'PAES Invierno 2027, adaptada',
      enun: r`<p>En un informe de laboratorio se reporta un compuesto desconocido: "es un hidrocarburo <b>alifático de cadena abierta</b>, con <b>cinco átomos de carbono</b>, todos con hibridación sp³". ¿Cuál de los siguientes compuestos coincide con esas características?</p>`,
      alts: ['Ciclopentano', 'Pent-1-eno', '2-metilbutano', '2-metilbuta-1,3-dieno'], ok: 2,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Tres condiciones a la vez: cadena abierta, 5 C, todos sp³ (solo enlaces simples).</p>
        <p><b>Paso 2. Revisa.</b> Ciclopentano: 5 C sp³, pero es un anillo (no es cadena abierta). Pent-1-eno: tiene un doble (2 C sp²). 2-metilbutano: CH<sub>3</sub>–CH(CH<sub>3</sub>)–CH<sub>2</sub>–CH<sub>3</sub>, 5 C, solo simples, cadena abierta. ✔ 2-metilbuta-1,3-dieno (isopreno): dos dobles, 4 C sp².</p>
        <p><b>Respuesta:</b> 2-metilbutano.</p>
        <p><b>¿Por qué no las otras?</b> El ciclopentano cumple la hibridación pero no "cadena abierta". El pent-1-eno y el isopreno tienen carbonos sp².</p>`,
      conc: 'Todos los carbonos sp³ = solo enlaces simples: alcano (si es abierto) o cicloalcano (si es anillo).' },
    /* Tipo 5: habilidades científicas aplicadas al carbono (Invierno 2026 p. 5) */
    { src: 'PAES Invierno 2026, adaptada',
      enun: r`<p>Una estudiante quiere saber si existe relación entre la hibridación de los carbonos de un hidrocarburo y su temperatura de ebullición. Para que otros factores no influyan, decide controlar el largo de la cadena y la presencia de átomos distintos de C e H. ¿Cuál de los siguientes procedimientos es adecuado para su objetivo?</p>`,
      alts: ['Medir la temperatura de ebullición de etano, propeno y but-1-ino.', 'Medir la temperatura de ebullición de etano, eteno y etino.', 'Medir la temperatura de ebullición de un solo hidrocarburo que tenga un enlace doble y uno triple.', 'Medir la temperatura de ebullición de etano, etanol y etino.'], ok: 1,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Un procedimiento que cambie solo la hibridación (variable independiente) y mantenga constantes el largo de cadena y los elementos.</p>
        <p><b>Paso 2. Revisa.</b> Etano (sp³), eteno (sp²) y etino (sp): los tres tienen 2 C y solo C e H. Cambia solo la hibridación. ✔</p>
        <p><b>Respuesta:</b> medir la temperatura de ebullición de etano, eteno y etino.</p>
        <p><b>¿Por qué no las otras?</b> Etano, propeno y but-1-ino tienen 2, 3 y 4 C: cambian dos variables a la vez. Un solo compuesto no permite comparar. El etanol tiene oxígeno, que es justo lo que se quería controlar.</p>`,
      conc: 'Un buen diseño cambia solo la variable independiente y mantiene todo lo demás igual.' },
    { src: 'Estilo PAES',
      enun: r`<p>Un grupo de estudiantes busca en tablas la energía necesaria para romper el enlace carbono–carbono en el etano, el eteno y el etino, con el fin de estudiar cómo influye el tipo de enlace entre los carbonos en esa energía. En esta investigación, ¿cuál es la variable independiente?</p>`,
      alts: ['La energía de enlace.', 'El número de átomos de carbono de cada molécula.', 'La temperatura a la que se midieron los datos.', 'El tipo de enlace entre los carbonos (simple, doble o triple).'], ok: 3,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> La variable que los estudiantes eligen cambiar para ver su efecto.</p>
        <p><b>Paso 2. Identifica.</b> Comparan etano (simple), eteno (doble) y etino (triple): lo que cambia a propósito es el <b>tipo de enlace</b>. Lo que miden como resultado es la energía de enlace (variable dependiente). El número de C (2 en las tres) es una variable controlada.</p>
        <p><b>Respuesta:</b> el tipo de enlace entre los carbonos.</p>
        <p><b>¿Por qué no las otras?</b> La energía de enlace es la dependiente (el resultado). El número de C es igual en las tres: está controlado. La temperatura no se menciona como variable del estudio.</p>`,
      conc: 'Independiente = lo que cambias a propósito; dependiente = lo que mides como respuesta.' },
    { src: 'Estilo PAES',
      enun: r`<p>Unos estudiantes miden la longitud del enlace carbono–carbono en el etano, el eteno y el etino. ¿Cuál de las siguientes es una hipótesis que se puede poner a prueba con esta investigación?</p>`,
      alts: ['¿Cómo varía la longitud del enlace entre carbonos según el tipo de enlace?', 'Si aumenta el número de pares de electrones compartidos entre dos carbonos, entonces disminuye la longitud del enlace.', 'El etino es más reactivo que el etano.', 'La longitud del enlace C–C depende de la temperatura de ebullición de cada sustancia.'], ok: 1,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Una hipótesis: una respuesta tentativa que relacione la variable que se cambia con la que se mide.</p>
        <p><b>Paso 2. Revisa.</b> "Si aumentan los pares compartidos, entonces disminuye la longitud" relaciona el tipo de enlace (simple: 1 par, doble: 2, triple: 3) con la longitud medida. Se puede comprobar con los tres compuestos. ✔</p>
        <p><b>Respuesta:</b> "Si aumenta el número de pares de electrones compartidos entre dos carbonos, entonces disminuye la longitud del enlace".</p>
        <p><b>¿Por qué no las otras?</b> La que termina en signo de interrogación es una pregunta de investigación, no una hipótesis. La reactividad no se mide en este estudio. La temperatura de ebullición tampoco se mide y no explica la longitud de un enlace.</p>`,
      conc: 'Una hipótesis es una afirmación comprobable que relaciona la variable independiente con la dependiente.' }
  ]
},

/* =====================================================================
   2. MODELOS DE REPRESENTACIÓN
   ===================================================================== */
{
  id: 'qui_representaciones', unit: 'Unidad 2 · Química orgánica', icon: '✏️',
  title: 'Modelos de representación de moléculas',
  desc: 'Fórmula molecular, empírica, desarrollada, semidesarrollada, condensada y topológica, y los modelos de esferas y varillas y compacto: qué muestra cada una y cómo pasar de una a otra contando C e H.',
  slides: [
    { t: 'Fórmula molecular y fórmula empírica', b: r`
      <div class="cols"><div>
      <p>La <b>fórmula molecular</b> dice qué átomos tiene una molécula y <b>cuántos exactamente</b>. El butano es C<sub>4</sub>H<sub>10</sub>: 4 C y 10 H.</p>
      <p>La <b>fórmula empírica</b> da solo la <b>proporción mínima entera</b> entre los átomos. Se obtiene dividiendo todos los subíndices por su máximo común divisor (MCD).</p>
      <p><b>Paso 1.</b> Escribe la fórmula molecular: C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> (glucosa).<br><b>Paso 2.</b> Busca el MCD de 6, 12 y 6: es 6.<br><b>Paso 3.</b> Divide: C<sub>1</sub>H<sub>2</sub>O<sub>1</sub> → <b>CH<sub>2</sub>O</b>.</p>
      <table><thead><tr><th>Compuesto</th><th>Molecular</th><th>Empírica</th></tr></thead><tbody>
      <tr><td>butano</td><td>C<sub>4</sub>H<sub>10</sub></td><td>C<sub>2</sub>H<sub>5</sub></td></tr>
      <tr><td>benceno</td><td>C<sub>6</sub>H<sub>6</sub></td><td>CH</td></tr>
      <tr><td>etino</td><td>C<sub>2</sub>H<sub>2</sub></td><td>CH</td></tr>
      <tr><td>ácido etanoico</td><td>C<sub>2</sub>H<sub>4</sub>O<sub>2</sub></td><td>CH<sub>2</sub>O</td></tr>
      <tr><td>cloroformo</td><td>CHCl<sub>3</sub></td><td>CHCl<sub>3</sub></td></tr></tbody></table>
      </div><div>
      <div class="box"><b>Ya es mínima</b> Si el MCD es 1, la empírica es igual a la molecular. Le pasa al cloroformo (CHCl<sub>3</sub>), a la vanilina (C<sub>8</sub>H<sub>8</sub>O<sub>3</sub>) y al propano (C<sub>3</sub>H<sub>8</sub>).</div>
      <div class="box alert"><b>Error típico</b> Dividir solo algunos subíndices, o dividir aunque no den enteros. En C<sub>8</sub>H<sub>8</sub>O<sub>3</sub>, el 3 no se puede dividir por 8: la fórmula ya es empírica.</div>
      <div class="box alert"><b>Ojo</b> Distintas sustancias pueden tener la misma empírica: el etino y el benceno son ambos CH. La empírica sola no identifica un compuesto.</div>
      </div></div>` },
    { t: 'Desarrollada, semidesarrollada, condensada y topológica', b: r`
      <p>Las fórmulas estructurales muestran, además, <b>cómo están unidos</b> los átomos. Mira las cuatro formas de escribir el butano:</p>
      <div class="qfig"><img class="tikz" src="paes/quimica/fig/org_repr_butano.svg" alt="El butano en fórmula desarrollada, semidesarrollada, condensada y topológica"></div>
      <div class="cols"><div>
      <ul><li><b>Desarrollada o expandida</b>: todos los átomos y todos los enlaces, uno por uno.</li>
      <li><b>Semidesarrollada</b>: se agrupan los H con su carbono (CH<sub>3</sub>, CH<sub>2</sub>) y se dibujan los enlaces entre carbonos.</li></ul>
      </div><div>
      <ul><li><b>Condensada</b>: todo en una línea, sin guiones; los grupos repetidos van entre paréntesis.</li>
      <li><b>Lineal o topológica</b>: solo un zig-zag; cada vértice y cada extremo es un carbono.</li></ul>
      </div></div>` },
    { t: 'Cómo leer una fórmula topológica', b: r`
      <div class="cols"><div>
      <p>La fórmula topológica es la más usada en la PAES, porque es rápida de dibujar. Sus reglas:</p>
      <ul><li>Cada <b>vértice</b> y cada <b>extremo</b> de línea es un átomo de C.</li>
      <li>Los H unidos a carbono <b>no se dibujan</b>: cada C tiene los H que le faltan para llegar a 4 enlaces.</li>
      <li>Los otros átomos (O, N, Cl, S) <b>sí se escriben</b>, con sus H (OH, NH<sub>2</sub>).</li>
      <li>Una línea doble es un enlace doble; una triple, un triple.</li></ul>
      <div class="qfig"><img class="tikz" src="paes/quimica/fig/org_topo_prenol.svg" alt="3-metilbut-2-en-1-ol en fórmula topológica y semidesarrollada"></div>
      </div><div>
      <div class="box"><b>Ejemplo resuelto: contar C e H</b> En la figura (3-metilbut-2-en-1-ol):<br><b>Paso 1. Carbonos.</b> 2 extremos arriba e izquierda + el vértice que los une + el vértice del doble + el vértice antes del OH = 5 C.<br><b>Paso 2. H de cada C</b> = 4 − (enlaces que ya tiene):<br>· los dos CH<sub>3</sub> de los extremos: 3 + 3<br>· el C con el doble y dos ramas: 4 − 4 = 0<br>· el =CH–: 4 − 3 = 1<br>· el CH<sub>2</sub> unido al OH: 4 − 2 = 2<br>· el H del OH: 1<br><b>Paso 3.</b> Total: $3 + 3 + 0 + 1 + 2 + 1 = 10$ H. Fórmula: <b>C<sub>5</sub>H<sub>10</sub>O</b>.</div>
      <div class="box alert"><b>Errores típicos</b> Olvidar los carbonos de los extremos, olvidar el H del OH, o poner H en un carbono que ya tiene 4 enlaces (por ejemplo, el que tiene un doble y dos ramas).</div>
      </div></div>` },
    { t: 'Modelos tridimensionales: esferas y varillas, y compacto', b: r`
      <div class="qfig"><img class="tikz" src="paes/quimica/fig/org_modelos.svg" alt="Etanol en modelo de esferas y varillas y en modelo compacto"></div>
      <div class="cols"><div>
      <p><b>Modelo de esferas y varillas</b>: cada átomo es una esfera y cada enlace es una varilla. Muestra la <b>forma 3D</b>, los <b>ángulos de enlace</b> (109,5°, 120°, 180°) y cómo se ordenan los átomos en el espacio.</p>
      <p><b>Modelo compacto</b> (o de espacio lleno): las esferas se tocan y se superponen, a escala de su tamaño real. Muestra el <b>volumen</b> y la <b>forma externa</b> de la molécula, pero los enlaces y ángulos se ven poco.</p>
      </div><div>
      <div class="box"><b>Colores habituales</b> C: gris o negro · H: blanco · O: rojo · N: azul · Cl: verde.</div>
      <div class="box alert"><b>Clave PAES</b> Si dos formas de una molécula se diferencian solo en cómo se ordenan sus átomos <b>en el espacio</b>, ninguna fórmula escrita en el plano (molecular, empírica, condensada) las distingue: se necesita un modelo 3D, como el de esferas y varillas.</div>
      </div></div>` },
    { t: 'Comparar representaciones y moléculas', b: r`
      <table><thead><tr><th>Representación</th><th>¿Cuántos átomos de cada tipo?</th><th>¿Cómo se unen?</th><th>¿Forma 3D?</th></tr></thead><tbody>
      <tr><td>Empírica</td><td>solo la proporción</td><td>no</td><td>no</td></tr>
      <tr><td>Molecular</td><td>sí</td><td>no</td><td>no</td></tr>
      <tr><td>Condensada / semidesarrollada</td><td>sí</td><td>sí (por grupos)</td><td>no</td></tr>
      <tr><td>Desarrollada / topológica</td><td>sí</td><td>sí</td><td>no (dibujo plano)</td></tr>
      <tr><td>Esferas y varillas / compacto</td><td>sí</td><td>sí</td><td>sí</td></tr></tbody></table>
      <div class="cols"><div>
      <div class="box"><b>Ejemplo resuelto</b> Etanol, CH<sub>3</sub>–CH<sub>2</sub>–OH, y metoximetano, CH<sub>3</sub>–O–CH<sub>3</sub>. <b>Paso 1.</b> Cuenta: los dos tienen 2 C, 6 H y 1 O: fórmula molecular C<sub>2</sub>H<sub>6</sub>O. <b>Paso 2.</b> Masa molar (H = 1, C = 12, O = 16): $2 \cdot 12 + 6 \cdot 1 + 16 = 46$ g/mol los dos. <b>Paso 3.</b> Pero la semidesarrollada muestra que son <b>distintos</b>: uno tiene O–H y el otro C–O–C. Son <b>isómeros</b>.</div>
      </div><div>
      <div class="box alert"><b>Ojo con la masa molar</b> Igual fórmula molecular implica igual masa molar. Pero igual masa molar <b>no</b> implica igual fórmula: el butan-2-ol (C<sub>4</sub>H<sub>10</sub>O) y el ácido propanoico (C<sub>3</sub>H<sub>6</sub>O<sub>2</sub>) pesan ambos 74 g/mol.</div>
      </div></div>` },
    { t: 'Lo clave del tema', b: r`
      <table><thead><tr><th>Representación</th><th>Butano</th><th>Lo que la distingue</th></tr></thead><tbody>
      <tr><td>Molecular</td><td>C<sub>4</sub>H<sub>10</sub></td><td>número exacto de átomos</td></tr>
      <tr><td>Empírica</td><td>C<sub>2</sub>H<sub>5</sub></td><td>proporción mínima (divide por el MCD)</td></tr>
      <tr><td>Desarrollada</td><td>todos los H y enlaces dibujados</td><td>todos los enlaces</td></tr>
      <tr><td>Semidesarrollada</td><td>CH<sub>3</sub>–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>3</sub></td><td>grupos CH<sub>n</sub> + enlaces C–C</td></tr>
      <tr><td>Condensada</td><td>CH<sub>3</sub>(CH<sub>2</sub>)<sub>2</sub>CH<sub>3</sub></td><td>una línea, sin enlaces</td></tr>
      <tr><td>Topológica</td><td>zig-zag de 4 vértices</td><td>vértices y extremos = C; H implícitos</td></tr>
      <tr><td>Esferas y varillas / compacto</td><td>modelo 3D</td><td>ángulos / volumen</td></tr></tbody></table>
      <div class="cols"><div>
      <div class="box"><b>Recuerda</b><br>· En la fórmula topológica, cada extremo es un CH<sub>3</sub> (si no hay otro átomo escrito).<br>· C<sub>8</sub>H<sub>8</sub>O<sub>3</sub> ya es empírica: el MCD de 8, 8 y 3 es 1.<br>· Isómeros = misma fórmula molecular.</div>
      </div><div>
      <div class="box"><b>Método PAES para contar</b> 1. Marca cada vértice y extremo (C). 2. Para cada C: H = 4 − enlaces dibujados (doble cuenta 2, triple cuenta 3). 3. Suma los H de OH, NH<sub>2</sub>, CHO escritos. 4. Escribe C, H y luego los demás átomos. 5. Si piden la empírica, divide por el MCD.</div>
      </div></div>` }
  ],
  example: {
    src: 'PAES Invierno 2026, adaptada',
    enun: r`<p>Durante una clase de química orgánica, cuatro estudiantes analizan las estructuras de los compuestos X, Y y Z (masas atómicas: H = 1, C = 12, O = 16):</p><p>Luego, cada uno escribe en su cuaderno lo siguiente:</p><p>Estudiante 1: X e Y tienen la misma fórmula molecular.<br>Estudiante 2: Z tiene más átomos de carbono que X.<br>Estudiante 3: X y Z tienen la misma fórmula molecular, porque tienen la misma masa molar.<br>Estudiante 4: Y tiene el doble de átomos de hidrógeno que Z.</p><p>¿Cuál de los estudiantes escribe una conclusión correcta?</p>`,
    fig: { type: 'img', src: 'paes/quimica/fig/org_xyz.svg', alt: 'Fórmulas topológicas: X, butan-2-ol; Y, etoxietano; Z, ácido propanoico' },
    alts: ['El estudiante 1.', 'El estudiante 2.', 'El estudiante 3.', 'El estudiante 4.'],
    ok: 0,
    sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> La única afirmación correcta. Para eso necesitamos la fórmula molecular de X, Y y Z.</p>
      <p><b>Paso 2. Compuesto X.</b> Cuatro vértices/extremos: 4 C. H: extremo izquierdo CH<sub>3</sub> (3), vértice con OH: tiene 2 C y el O, le falta 1 H (1), siguiente vértice CH<sub>2</sub> (2), extremo CH<sub>3</sub> (3), más el H del OH (1). Total 10 H. <b>X = C<sub>4</sub>H<sub>10</sub>O</b> (butan-2-ol).</p>
      <p><b>Paso 3. Compuesto Y.</b> Dos C a cada lado del O: 4 C. Extremos CH<sub>3</sub> (3 + 3) y vértices junto al O, CH<sub>2</sub> (2 + 2). Total 10 H. <b>Y = C<sub>4</sub>H<sub>10</sub>O</b> (etoxietano).</p>
      <p><b>Paso 4. Compuesto Z.</b> 3 C: extremo CH<sub>3</sub> (3), vértice CH<sub>2</sub> (2) y el C del COOH (0 H sobre el C), más el H del OH (1). Total 6 H. <b>Z = C<sub>3</sub>H<sub>6</sub>O<sub>2</sub></b> (ácido propanoico).</p>
      <p><b>Paso 5. Revisa cada estudiante.</b> 1: X e Y son ambos C<sub>4</sub>H<sub>10</sub>O. ✔ 2: Z tiene 3 C y X tiene 4. ✘ 3: X (C<sub>4</sub>H<sub>10</sub>O) y Z (C<sub>3</sub>H<sub>6</sub>O<sub>2</sub>) son fórmulas distintas. ✘ 4: Y tiene 10 H y Z tiene 6; el doble de 6 sería 12. ✘</p>
      <p><b>Respuesta:</b> el estudiante 1.</p>
      <p><b>Comprobación:</b> masas molares: X = $4 \cdot 12 + 10 + 16 = 74$ g/mol; Z = $3 \cdot 12 + 6 + 2 \cdot 16 = 74$ g/mol. Tienen igual masa molar, pero distinta fórmula: por eso el estudiante 3 se equivoca, aunque su dato de masa sea cierto.</p>
      <p><b>¿Por qué no las otras?</b> El estudiante 2 no cuenta el carbono del extremo izquierdo de X o cuenta uno de más en Z. El estudiante 3 confunde "misma masa molar" con "misma fórmula". El estudiante 4 olvida que el doble de 6 es 12, no 10.</p>`,
    conc: 'Para comparar moléculas dibujadas, primero escribe la fórmula molecular de cada una: igual masa molar no significa igual fórmula.'
  },
  bank: [
    /* Tipo 1: de la fórmula topológica a la fórmula molecular (Invierno 2026 p. 70; Invierno 2027 p. 67) */
    { src: 'PAES Invierno 2027, adaptada',
      enun: r`<p>El ibuprofeno es un antiinflamatorio de uso común. Su estructura es la siguiente:</p><p>Si se desea escribir su fórmula molecular, ¿cuál es la representación correcta?</p>`,
      fig: { type: 'img', src: 'paes/quimica/fig/org_ibuprofeno.svg', alt: 'Fórmula topológica del ibuprofeno' },
      alts: ['C<sub>13</sub>H<sub>18</sub>O<sub>2</sub>', 'C<sub>13</sub>H<sub>22</sub>O<sub>2</sub>', 'C<sub>12</sub>H<sub>18</sub>O<sub>2</sub>', 'C<sub>13</sub>H<sub>17</sub>O<sub>2</sub>'], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Contar C, H y O del dibujo.</p>
        <p><b>Paso 2. Carbonos.</b> Cadena de la izquierda: 2 CH<sub>3</sub> + CH + CH<sub>2</sub> = 4 C. Anillo: 6 C. Derecha: CH + CH<sub>3</sub> + C del COOH = 3 C. Total: 13 C.</p>
        <p><b>Paso 3. Hidrógenos.</b> Izquierda: $3 + 3 + 1 + 2 = 9$. Anillo: 4 C con H (1 cada uno) = 4; los 2 C unidos a las cadenas no llevan H. Derecha: CH (1) + CH<sub>3</sub> (3) + OH (1) = 5. Total: $9 + 4 + 5 = 18$ H.</p>
        <p><b>Paso 4. Oxígenos.</b> El grupo COOH tiene 2 O.</p>
        <p><b>Respuesta:</b> C<sub>13</sub>H<sub>18</sub>O<sub>2</sub>.</p>
        <p><b>Comprobación:</b> cada doble enlace o anillo resta 2 H respecto del alcano C<sub>13</sub>H<sub>28</sub>. Aquí hay 1 anillo + 3 dobles del anillo + 1 C=O = 5 → $28 - 10 = 18$ H. ✔</p>
        <p><b>¿Por qué no las otras?</b> 22 H resulta de poner 2 H en cada C del anillo, como si no tuviera dobles enlaces. 12 C olvida el carbono del COOH. 17 H olvida el H del grupo OH.</p>`,
      conc: 'En el anillo bencénico, cada C sin sustituyente lleva un solo H.' },
    { src: 'PAES Invierno 2026, adaptada',
      enun: r`<p>El limoneno es el compuesto responsable del olor de la cáscara de limón y de naranja. Su estructura es:</p><p>¿Cuántos átomos de hidrógeno tiene, en total, una molécula de limoneno?</p>`,
      fig: { type: 'img', src: 'paes/quimica/fig/org_limoneno.svg', alt: 'Fórmula topológica del limoneno: anillo de seis carbonos con un doble enlace, un metilo y un grupo isopropenilo' },
      alts: ['14', '16', '18', '20'], ok: 1,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El total de H; no se dibujan, hay que deducirlos.</p>
        <p><b>Paso 2. Carbonos.</b> Anillo: 6. Metilo de arriba: 1. Grupo de abajo: el C unido al anillo + CH<sub>2</sub> del doble + CH<sub>3</sub> = 3. Total: 10 C.</p>
        <p><b>Paso 3. H de cada carbono.</b> Metilo: 3. C del anillo con el metilo (doble + 2 simples): 0. =CH del anillo: 1. Tres CH<sub>2</sub> del anillo: 6. CH del anillo unido al grupo de abajo: 1. C central del grupo de abajo (doble + 2 simples): 0. =CH<sub>2</sub>: 2. CH<sub>3</sub>: 3. Total: $3 + 0 + 1 + 6 + 1 + 0 + 2 + 3 = 16$.</p>
        <p><b>Respuesta:</b> 16 (fórmula C<sub>10</sub>H<sub>16</sub>).</p>
        <p><b>Comprobación:</b> el alcano de 10 C sería C<sub>10</sub>H<sub>22</sub>; el limoneno tiene 1 anillo y 2 dobles: $22 - 3 \cdot 2 = 16$. ✔</p>
        <p><b>¿Por qué no las otras?</b> 18 olvida restar los H de uno de los dobles enlaces. 20 trata la molécula como si no tuviera dobles enlaces (como un cicloalcano). 14 resta H de más, por ejemplo dejando sin H al CH del anillo.</p>`,
      conc: 'Cada doble enlace y cada anillo le quitan 2 H a la molécula.' },
    { src: 'PAES Invierno 2026, adaptada',
      enun: r`<p>El eugenol es el componente principal del aceite de clavo de olor, usado en odontología como antiséptico. Su estructura es:</p><p>¿Cuál es su fórmula molecular?</p>`,
      fig: { type: 'img', src: 'paes/quimica/fig/org_eugenol.svg', alt: 'Fórmula topológica del eugenol: anillo bencénico con OH, un grupo metoxi y una cadena alilo' },
      alts: ['C<sub>10</sub>H<sub>14</sub>O<sub>2</sub>', 'C<sub>9</sub>H<sub>12</sub>O<sub>2</sub>', 'C<sub>10</sub>H<sub>12</sub>O<sub>2</sub>', 'C<sub>10</sub>H<sub>11</sub>O<sub>2</sub>'], ok: 2,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> La fórmula molecular: C, H y O.</p>
        <p><b>Paso 2. Carbonos.</b> Anillo: 6. Cadena de la derecha: CH<sub>2</sub>–CH=CH<sub>2</sub> = 3. El extremo de la línea unida al O de arriba es un CH<sub>3</sub>: 1. Total: 10 C.</p>
        <p><b>Paso 3. Hidrógenos.</b> Anillo: 3 C sin sustituyente → 3 H. Cadena: $2 + 1 + 2 = 5$. CH<sub>3</sub> del O: 3. OH: 1. Total: $3 + 5 + 3 + 1 = 12$.</p>
        <p><b>Paso 4. Oxígenos.</b> El OH y el O del grupo metoxi: 2.</p>
        <p><b>Respuesta:</b> C<sub>10</sub>H<sub>12</sub>O<sub>2</sub>.</p>
        <p><b>¿Por qué no las otras?</b> 14 H ignora el doble enlace de la cadena (pone CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>3</sub>). 9 C olvida que el extremo de la línea unida al O es un carbono (CH<sub>3</sub>). 11 H olvida el H del OH.</p>`,
      conc: 'Un extremo de línea sin letra es un CH₃, aunque esté unido a un oxígeno.' },
    /* Tipo 2: identificar el tipo de representación (Invierno 2026 p. 66) */
    { src: 'PAES Invierno 2026, adaptada',
      enun: r`<p>Un fármaco X existe en dos formas. En cada una, los mismos átomos, unidos de la misma manera, se ordenan de forma distinta en el espacio, y eso hace que tengan efectos biológicos diferentes. ¿Cuál de las siguientes representaciones permite distinguir las dos formas?</p>`,
      alts: ['Fórmula molecular', 'Fórmula empírica', 'Modelo de esferas y varillas', 'Fórmula condensada'], ok: 2,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Una representación que muestre el ordenamiento <b>en el espacio</b> (3D).</p>
        <p><b>Paso 2. Revisa.</b> Las dos formas tienen los mismos átomos (misma fórmula molecular y empírica) y los mismos enlaces (misma condensada). Solo un modelo tridimensional muestra la posición de cada átomo en el espacio.</p>
        <p><b>Respuesta:</b> el modelo de esferas y varillas.</p>
        <p><b>¿Por qué no las otras?</b> La molecular y la empírica solo cuentan átomos: son idénticas para ambas formas. La condensada muestra qué grupos están unidos, pero en una línea, sin geometría.</p>`,
      conc: 'Para ver diferencias en el espacio se necesita un modelo 3D.' },
    { src: 'Estilo PAES',
      enun: r`<p>En una guía aparece la siguiente representación del 2-metilpropan-1-ol:</p><p style="text-align:center">CH<sub>3</sub>–CH(CH<sub>3</sub>)–CH<sub>2</sub>–OH</p><p>¿Qué tipo de representación es?</p>`,
      alts: ['Fórmula desarrollada', 'Fórmula semidesarrollada', 'Fórmula topológica', 'Fórmula molecular'], ok: 1,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Reconocer el tipo de fórmula.</p>
        <p><b>Paso 2. Observa.</b> Los H están agrupados con su carbono (CH<sub>3</sub>, CH, CH<sub>2</sub>) y se dibujan los enlaces entre los carbonos y con el O. Eso es una fórmula <b>semidesarrollada</b>.</p>
        <p><b>Respuesta:</b> fórmula semidesarrollada.</p>
        <p><b>¿Por qué no las otras?</b> En la desarrollada se dibuja cada enlace C–H por separado. En la topológica no se escriben los C ni sus H, solo el zig-zag. La molecular sería C<sub>4</sub>H<sub>10</sub>O, sin mostrar enlaces.</p>`,
      conc: 'Semidesarrollada: grupos CH₃, CH₂, CH y enlaces entre carbonos.' },
    { src: 'Estilo PAES',
      enun: r`<p>Una profesora muestra la siguiente representación del etanol, en que el gris es carbono, el blanco hidrógeno y el rojo oxígeno:</p><p>¿Qué opción identifica correctamente esta representación y lo que muestra mejor?</p>`,
      fig: { type: 'img', src: 'paes/quimica/fig/org_modelo_q.svg', alt: 'Modelo de esferas superpuestas del etanol' },
      alts: ['Modelo de esferas y varillas: muestra con claridad los ángulos de enlace.', 'Fórmula desarrollada: muestra cada enlace con una línea.', 'Fórmula topológica: cada vértice es un átomo de carbono.', 'Modelo compacto: muestra el volumen que ocupa la molécula.'], ok: 3,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El nombre del modelo y su utilidad.</p>
        <p><b>Paso 2. Observa.</b> Las esferas se superponen y no hay varillas: es un <b>modelo compacto</b> (de espacio lleno). Muestra el tamaño relativo de los átomos y el volumen de la molécula.</p>
        <p><b>Respuesta:</b> modelo compacto: muestra el volumen que ocupa la molécula.</p>
        <p><b>¿Por qué no las otras?</b> En el modelo de esferas y varillas las esferas están separadas y unidas por barras. La desarrollada y la topológica son dibujos planos con letras o líneas, no esferas.</p>`,
      conc: 'Esferas separadas por varillas: ángulos. Esferas superpuestas: volumen.' },
    /* Tipo 3: fórmula empírica (Invierno 2026 p. 69; Invierno 2027 p. 68) */
    { src: 'PAES Invierno 2026, adaptada',
      enun: r`<p>El ácido etanoico (ácido acético), responsable del sabor del vinagre, tiene fórmula molecular C<sub>2</sub>H<sub>4</sub>O<sub>2</sub>. ¿Cuál es su fórmula empírica?</p>`,
      alts: ['C<sub>2</sub>H<sub>4</sub>O<sub>2</sub>', 'CH<sub>2</sub>O', 'CHO', 'CH<sub>4</sub>O<sub>2</sub>'], ok: 1,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> La proporción mínima entera de átomos.</p>
        <p><b>Paso 2. MCD.</b> Subíndices 2, 4 y 2: el MCD es 2.</p>
        <p><b>Paso 3. Divide.</b> C: $2/2 = 1$; H: $4/2 = 2$; O: $2/2 = 1$ → CH<sub>2</sub>O.</p>
        <p><b>Respuesta:</b> CH<sub>2</sub>O.</p>
        <p><b>Comprobación:</b> CH<sub>2</sub>O multiplicada por 2 vuelve a dar C<sub>2</sub>H<sub>4</sub>O<sub>2</sub>. ✔</p>
        <p><b>¿Por qué no las otras?</b> C<sub>2</sub>H<sub>4</sub>O<sub>2</sub> es la molecular, sin simplificar. CHO divide el H por 4 y los demás por 2: cambia la proporción. CH<sub>4</sub>O<sub>2</sub> divide solo el carbono.</p>`,
      conc: 'La fórmula empírica se obtiene dividiendo todos los subíndices por el mismo número.' },
    { src: 'PAES Invierno 2027, adaptada',
      enun: r`<p>El naftaleno es el compuesto de las antiguas bolitas de naftalina, usadas contra las polillas. Su estructura es:</p><p>¿Cuál es su fórmula empírica?</p>`,
      fig: { type: 'img', src: 'paes/quimica/fig/org_naftaleno.svg', alt: 'Fórmula topológica del naftaleno: dos anillos bencénicos fusionados' },
      alts: ['C<sub>10</sub>H<sub>8</sub>', 'CH', 'C<sub>5</sub>H<sub>5</sub>', 'C<sub>5</sub>H<sub>4</sub>'], ok: 3,
      sol: r`<p><b>Paso 1. Fórmula molecular.</b> Vértices: 10 C. Los 2 C compartidos por ambos anillos tienen 3 vecinos y un doble: 0 H. Los otros 8 C tienen 1 H cada uno: 8 H. Molecular: C<sub>10</sub>H<sub>8</sub>.</p>
        <p><b>Paso 2. MCD</b> de 10 y 8: 2.</p>
        <p><b>Paso 3. Divide.</b> C<sub>5</sub>H<sub>4</sub>.</p>
        <p><b>Respuesta:</b> C<sub>5</sub>H<sub>4</sub>.</p>
        <p><b>¿Por qué no las otras?</b> C<sub>10</sub>H<sub>8</sub> es la fórmula molecular. CH es la empírica del benceno: el naftaleno no tiene un H por cada C. C<sub>5</sub>H<sub>5</sub> sale de poner H también en los 2 carbonos compartidos (C<sub>10</sub>H<sub>10</sub>).</p>`,
      conc: 'Primero cuenta la molecular; después simplifica.' },
    { src: 'PAES Invierno 2027, adaptada',
      enun: r`<p>La cafeína, presente en el café y el té, tiene fórmula molecular C<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O<sub>2</sub>. ¿Cuál es su fórmula empírica?</p>`,
      alts: ['C<sub>4</sub>H<sub>5</sub>N<sub>2</sub>O', 'C<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O<sub>2</sub>', 'C<sub>4</sub>H<sub>5</sub>N<sub>4</sub>O<sub>2</sub>', 'C<sub>2</sub>H<sub>5</sub>NO'], ok: 0,
      sol: r`<p><b>Paso 1. MCD</b> de 8, 10, 4 y 2: es 2.</p>
        <p><b>Paso 2. Divide todo por 2.</b> C: 4; H: 5; N: 2; O: 1 → C<sub>4</sub>H<sub>5</sub>N<sub>2</sub>O.</p>
        <p><b>Respuesta:</b> C<sub>4</sub>H<sub>5</sub>N<sub>2</sub>O.</p>
        <p><b>Comprobación:</b> $2 \times$ C<sub>4</sub>H<sub>5</sub>N<sub>2</sub>O = C<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O<sub>2</sub>. ✔ Y 4, 5, 2 y 1 no tienen otro divisor común.</p>
        <p><b>¿Por qué no las otras?</b> C<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O<sub>2</sub> no está simplificada. C<sub>4</sub>H<sub>5</sub>N<sub>4</sub>O<sub>2</sub> divide solo C y H. C<sub>2</sub>H<sub>5</sub>NO divide por números distintos: no mantiene la proporción.</p>`,
      conc: 'Se divide por el MCD de todos los subíndices, incluidos N y O.' },
    /* Tipo 4: de la fórmula molecular a la estructura (Regular 2026 p. 67) */
    { src: 'PAES Regular 2026, adaptada',
      enun: r`<p>Una docente presenta la fórmula molecular C<sub>4</sub>H<sub>8</sub>O<sub>2</sub> y pregunta por una estructura que le corresponda. ¿Cuál de las siguientes respuestas es correcta?</p>`,
      alts: [r`CH<sub>3</sub>–CO–CO–CH<sub>3</sub>`, r`CH<sub>2</sub>=CH–CH<sub>2</sub>–COOH`, r`CH<sub>3</sub>–CH<sub>2</sub>–CH(OH)–CH<sub>2</sub>OH`, r`CH<sub>3</sub>–CH<sub>2</sub>–CH<sub>2</sub>–COOH`], ok: 3,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> La estructura con exactamente 4 C, 8 H y 2 O.</p>
        <p><b>Paso 2. Cuenta en cada una.</b></p>
        <ul><li>CH<sub>3</sub>–CO–CO–CH<sub>3</sub>: 4 C, $3 + 3 = 6$ H, 2 O → C<sub>4</sub>H<sub>6</sub>O<sub>2</sub>.</li>
        <li>CH<sub>2</sub>=CH–CH<sub>2</sub>–COOH: 4 C, $2 + 1 + 2 + 1 = 6$ H → C<sub>4</sub>H<sub>6</sub>O<sub>2</sub>.</li>
        <li>CH<sub>3</sub>–CH<sub>2</sub>–CH(OH)–CH<sub>2</sub>OH: $3 + 2 + 1 + 1 + 2 + 1 = 10$ H → C<sub>4</sub>H<sub>10</sub>O<sub>2</sub>.</li>
        <li>CH<sub>3</sub>–CH<sub>2</sub>–CH<sub>2</sub>–COOH: $3 + 2 + 2 + 1 = 8$ H → <b>C<sub>4</sub>H<sub>8</sub>O<sub>2</sub></b>. ✔</li></ul>
        <p><b>Respuesta:</b> CH<sub>3</sub>–CH<sub>2</sub>–CH<sub>2</sub>–COOH (ácido butanoico).</p>
        <p><b>¿Por qué no las otras?</b> Las dos primeras tienen 2 H menos, por el doble enlace extra (C=O o C=C). El diol tiene 2 H más: no tiene ningún doble enlace.</p>`,
      conc: 'Cada doble enlace (C=C o C=O) resta 2 H: úsalo para descartar rápido.' },
    { src: 'PAES Regular 2026, adaptada',
      enun: r`<p>¿Cuál de las siguientes estructuras corresponde a la fórmula molecular C<sub>3</sub>H<sub>6</sub>O?</p>`,
      alts: [r`CH<sub>3</sub>–CO–CH<sub>3</sub>`, r`CH<sub>3</sub>–CH<sub>2</sub>–CH<sub>2</sub>–OH`, r`CH<sub>2</sub>=CH–CHO`, r`CH<sub>3</sub>–CO–CHO`], ok: 0,
      sol: r`<p><b>Paso 1. Cuenta C, H y O.</b></p>
        <ul><li>CH<sub>3</sub>–CO–CH<sub>3</sub>: 3 C, 6 H, 1 O → <b>C<sub>3</sub>H<sub>6</sub>O</b>. ✔</li>
        <li>CH<sub>3</sub>–CH<sub>2</sub>–CH<sub>2</sub>–OH: 3 C, 8 H, 1 O → C<sub>3</sub>H<sub>8</sub>O.</li>
        <li>CH<sub>2</sub>=CH–CHO: 3 C, 4 H, 1 O → C<sub>3</sub>H<sub>4</sub>O.</li>
        <li>CH<sub>3</sub>–CO–CHO: 3 C, 4 H, 2 O → C<sub>3</sub>H<sub>4</sub>O<sub>2</sub>.</li></ul>
        <p><b>Respuesta:</b> CH<sub>3</sub>–CO–CH<sub>3</sub> (propanona o acetona).</p>
        <p><b>¿Por qué no las otras?</b> El propan-1-ol no tiene dobles: 2 H de más. El propenal tiene dos dobles (C=C y C=O): 2 H de menos. La última tiene dos O.</p>`,
      conc: 'Cuenta también los H escondidos en CHO y OH.' },
    { src: 'PAES Regular 2026, adaptada',
      enun: r`<p>¿Cuál de las siguientes estructuras tiene fórmula molecular C<sub>5</sub>H<sub>10</sub>?</p>`,
      alts: [r`HC≡C–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>3</sub>`, r`CH<sub>2</sub>=CH–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>3</sub>`, r`CH<sub>3</sub>–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>3</sub>`, r`CH<sub>2</sub>=CH–CH=CH–CH<sub>3</sub>`], ok: 1,
      sol: r`<p><b>Paso 1. Cuenta H</b> (todas tienen 5 C).</p>
        <ul><li>HC≡C–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>3</sub>: $1 + 2 + 2 + 3 = 8$ → C<sub>5</sub>H<sub>8</sub>.</li>
        <li>CH<sub>2</sub>=CH–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>3</sub>: $2 + 1 + 2 + 2 + 3 = 10$ → <b>C<sub>5</sub>H<sub>10</sub></b>. ✔</li>
        <li>Pentano: 12 H → C<sub>5</sub>H<sub>12</sub>.</li>
        <li>CH<sub>2</sub>=CH–CH=CH–CH<sub>3</sub>: $2 + 1 + 1 + 1 + 3 = 8$ → C<sub>5</sub>H<sub>8</sub>.</li></ul>
        <p><b>Respuesta:</b> CH<sub>2</sub>=CH–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>3</sub> (pent-1-eno).</p>
        <p><b>¿Por qué no las otras?</b> El alquino y el dieno restan 4 H respecto del alcano; el pentano no resta ninguno. C<sub>5</sub>H<sub>10</sub> tiene una sola insaturación (un doble o un anillo).</p>`,
      conc: 'CₙH₂ₙ indica una sola insaturación: un doble enlace o un anillo.' },
    /* Tipo 5: comparar compuestos dibujados (Regular 2026 p. 65; Invierno 2026 p. 65) */
    { src: 'PAES Regular 2026, adaptada',
      enun: r`<p>Un docente dibuja las siguientes estructuras (masas atómicas: H = 1, C = 12):</p><p>¿Qué opción presenta los compuestos ordenados de menor a mayor masa molar?</p>`,
      fig: { type: 'img', src: 'paes/quimica/fig/org_comp_masa.svg', alt: 'Fórmulas topológicas: W, 2-metilbutano; X, 3-metilpent-2-eno; Y, 2,3-dimetilpentano' },
      alts: ['W &lt; X &lt; Y', 'X &lt; W &lt; Y', 'W &lt; Y &lt; X', 'Y &lt; X &lt; W'], ok: 0,
      sol: r`<p><b>Paso 1. Fórmula de cada uno.</b> W: 5 C, solo simples → C<sub>5</sub>H<sub>12</sub>. X: 6 C con un doble → C<sub>6</sub>H<sub>12</sub>. Y: 7 C, solo simples → C<sub>7</sub>H<sub>16</sub>.</p>
        <p><b>Paso 2. Masas molares.</b> W: $5 \cdot 12 + 12 = 72$ g/mol. X: $6 \cdot 12 + 12 = 84$ g/mol. Y: $7 \cdot 12 + 16 = 100$ g/mol.</p>
        <p><b>Respuesta:</b> W &lt; X &lt; Y.</p>
        <p><b>Comprobación:</b> un C pesa 12 y dos H pesan 2: agregar un carbono pesa mucho más que lo que se pierde por un doble enlace. ✔</p>
        <p><b>¿Por qué no las otras?</b> "X &lt; W" cree que el doble enlace baja mucho la masa, pero X tiene un C más que W. "Y &lt; X" o "Y &lt; W" invierten el orden: Y tiene más carbonos que ambos.</p>`,
      conc: 'En hidrocarburos, la masa molar depende sobre todo del número de carbonos.' },
    { src: 'PAES Invierno 2026, adaptada',
      enun: r`<p>Observa las estructuras P, Q y R (masas atómicas: H = 1, C = 12, O = 16):</p><p>Al respecto, se afirma que:</p><p>I. P y Q son isómeros.<br>II. R tiene dos átomos de hidrógeno más que Q.<br>III. Los tres compuestos tienen la misma masa molar.</p><p>¿Cuál(es) es (son) correcta(s)?</p>`,
      fig: { type: 'img', src: 'paes/quimica/fig/org_comp_isom.svg', alt: 'Fórmulas topológicas: P, ciclohexanol; Q, hexanal; R, hexan-1-ol' },
      alts: ['Solo I', 'Solo III', 'Solo I y II', 'I, II y III'], ok: 2,
      sol: r`<p><b>Paso 1. Fórmulas.</b> P (ciclohexanol): 6 C en anillo, 5 CH<sub>2</sub> (10 H) + CH (1) + OH (1) = 12 H → C<sub>6</sub>H<sub>12</sub>O. Q (hexanal): CH<sub>3</sub> (3) + 4 CH<sub>2</sub> (8) + CHO (1) = 12 H → C<sub>6</sub>H<sub>12</sub>O. R (hexan-1-ol): CH<sub>3</sub> (3) + 5 CH<sub>2</sub> (10) + OH (1) = 14 H → C<sub>6</sub>H<sub>14</sub>O.</p>
        <p><b>Paso 2. Revisa.</b> I: P y Q tienen igual fórmula molecular y distinta estructura: isómeros. ✔ II: R tiene 14 H y Q 12: dos más. ✔ III: P y Q pesan $72 + 12 + 16 = 100$ g/mol, pero R pesa 102. ✘</p>
        <p><b>Respuesta:</b> Solo I y II.</p>
        <p><b>¿Por qué no las otras?</b> "Solo I" no revisa II. Las opciones con III suponen que los tres tienen la misma fórmula porque todos tienen 6 C y 1 O, pero R tiene 2 H más.</p>`,
      conc: 'Un anillo o un C=O restan 2 H: por eso el ciclohexanol y el hexanal son isómeros.' },
    { src: 'PAES Invierno 2026, adaptada',
      enun: r`<p>Cuatro estudiantes analizan los compuestos A, B y C (masas atómicas: H = 1, C = 12, O = 16) y escriben:</p><p>Estudiante 1: C tiene más átomos de carbono que A.<br>Estudiante 2: B y C tienen la misma masa molar.<br>Estudiante 3: A y B tienen la misma fórmula molecular.<br>Estudiante 4: C tiene el doble de átomos de hidrógeno que B.</p><p>¿Cuál de los estudiantes escribe una conclusión correcta?</p>`,
      fig: { type: 'img', src: 'paes/quimica/fig/org_comp_c4.svg', alt: 'Fórmulas topológicas: A, butanal; B, butan-2-ona; C, ácido butanoico' },
      alts: ['El estudiante 1.', 'El estudiante 2.', 'El estudiante 3.', 'El estudiante 4.'], ok: 2,
      sol: r`<p><b>Paso 1. Fórmulas.</b> A (butanal): CH<sub>3</sub>–CH<sub>2</sub>–CH<sub>2</sub>–CHO → C<sub>4</sub>H<sub>8</sub>O. B (butan-2-ona): CH<sub>3</sub>–CO–CH<sub>2</sub>–CH<sub>3</sub> → C<sub>4</sub>H<sub>8</sub>O. C (ácido butanoico): CH<sub>3</sub>–CH<sub>2</sub>–CH<sub>2</sub>–COOH → C<sub>4</sub>H<sub>8</sub>O<sub>2</sub>.</p>
        <p><b>Paso 2. Revisa.</b> 1: A y C tienen 4 C. ✘ 2: B pesa $48 + 8 + 16 = 72$ y C pesa $48 + 8 + 32 = 88$ g/mol. ✘ 3: A y B son C<sub>4</sub>H<sub>8</sub>O. ✔ 4: B y C tienen 8 H cada uno. ✘</p>
        <p><b>Respuesta:</b> el estudiante 3.</p>
        <p><b>¿Por qué no las otras?</b> El estudiante 1 cuenta el C del COOH como si fuera extra. El 2 olvida el segundo oxígeno de C. El 4 confunde "2 O más" con "el doble de H".</p>`,
      conc: 'El aldehído y la cetona con el mismo número de C son isómeros de función.' }
  ]
},

/* =====================================================================
   3. HIDROCARBUROS Y NOMENCLATURA
   ===================================================================== */
{
  id: 'qui_hidrocarburos', unit: 'Unidad 2 · Química orgánica', icon: '⛽',
  title: 'Hidrocarburos y nomenclatura IUPAC',
  desc: 'Alcanos, alquenos, alquinos, cíclicos y aromáticos: sus fórmulas generales, cómo encontrar la cadena principal, cómo numerarla y nombrar con ramificaciones, y qué son los isómeros.',
  slides: [
    { t: 'Clasificación de los hidrocarburos', b: r`
      <div class="cols"><div>
      <p>Los <b>hidrocarburos</b> son compuestos formados <b>solo por C e H</b>. Son la base del petróleo, del gas natural y de los combustibles.</p>
      <ul><li><b>Alifáticos</b> (cadena abierta, lineal o ramificada):
        <ul><li><b>alcanos</b>: solo enlaces simples (<b>saturados</b>), sufijo <b>-ano</b>;</li>
        <li><b>alquenos</b>: al menos un C=C, sufijo <b>-eno</b>;</li>
        <li><b>alquinos</b>: al menos un C≡C, sufijo <b>-ino</b>.</li></ul></li>
      <li><b>Cíclicos</b>: la cadena se cierra en un anillo (prefijo <b>ciclo-</b>): ciclopropano, ciclohexano, ciclohexeno.</li>
      <li><b>Aromáticos</b>: tienen el anillo del <b>benceno</b>.</li></ul>
      <p>Alquenos y alquinos son <b>insaturados</b>: tienen enlaces $\pi$ y dan reacciones de adición (por ejemplo, con H<sub>2</sub> o Br<sub>2</sub>).</p>
      </div><div>
      <div class="qfig"><img class="tikz" src="paes/quimica/fig/org_familias.svg" alt="Etano, eteno, etino, ciclohexano y benceno con su familia y fórmula molecular"></div>
      </div></div>` },
    { t: 'Fórmulas generales y prefijos', b: r`
      <div class="cols"><div>
      <table><thead><tr><th>Familia</th><th>Fórmula general</th><th>Ejemplo</th></tr></thead><tbody>
      <tr><td>Alcano</td><td>C<sub>n</sub>H<sub>2n+2</sub></td><td>propano C<sub>3</sub>H<sub>8</sub></td></tr>
      <tr><td>Alqueno (un doble)</td><td>C<sub>n</sub>H<sub>2n</sub></td><td>propeno C<sub>3</sub>H<sub>6</sub></td></tr>
      <tr><td>Alquino (un triple)</td><td>C<sub>n</sub>H<sub>2n−2</sub></td><td>propino C<sub>3</sub>H<sub>4</sub></td></tr>
      <tr><td>Cicloalcano</td><td>C<sub>n</sub>H<sub>2n</sub></td><td>ciclopropano C<sub>3</sub>H<sub>6</sub></td></tr>
      <tr><td>Benceno</td><td>C<sub>6</sub>H<sub>6</sub></td><td>—</td></tr></tbody></table>
      <div class="box"><b>Regla de los 2 H</b> Parte del alcano (C<sub>n</sub>H<sub>2n+2</sub>) y resta <b>2 H</b> por cada doble enlace o anillo, y <b>4 H</b> por cada triple. Ejemplo: C<sub>6</sub>H<sub>10</sub> = $14 - 4$: puede ser un hexino, un hexadieno o un ciclohexeno.</div>
      </div><div>
      <table><thead><tr><th>N.º de C</th><th>Prefijo</th><th>N.º de C</th><th>Prefijo</th></tr></thead><tbody>
      <tr><td>1</td><td>met-</td><td>6</td><td>hex-</td></tr>
      <tr><td>2</td><td>et-</td><td>7</td><td>hept-</td></tr>
      <tr><td>3</td><td>prop-</td><td>8</td><td>oct-</td></tr>
      <tr><td>4</td><td>but-</td><td>9</td><td>non-</td></tr>
      <tr><td>5</td><td>pent-</td><td>10</td><td>dec-</td></tr></tbody></table>
      <div class="box alert"><b>Ojo</b> Un alqueno y un cicloalcano con los mismos C tienen la misma fórmula: el propeno y el ciclopropano son ambos C<sub>3</sub>H<sub>6</sub>.</div>
      </div></div>` },
    { t: 'Nombrar cadenas sin ramificar: la convención que usamos', b: r`
      <div class="cols"><div>
      <p>En este curso usamos las <b>recomendaciones IUPAC vigentes</b>, las mismas de las pruebas DEMRE: el número que indica la posición del doble o triple enlace (el <b>localizador</b>) va <b>justo antes del sufijo</b>.</p>
      <p><b>Paso 1.</b> Cuenta los C de la cadena que contiene el enlace múltiple: da el prefijo.<br><b>Paso 2.</b> Numera desde el extremo más cercano al enlace múltiple.<br><b>Paso 3.</b> Escribe prefijo + localizador + sufijo.</p>
      <table><thead><tr><th>Estructura</th><th>Nombre</th></tr></thead><tbody>
      <tr><td>CH<sub>2</sub>=CH–CH<sub>2</sub>–CH<sub>3</sub></td><td>but-1-eno</td></tr>
      <tr><td>CH<sub>3</sub>–CH=CH–CH<sub>3</sub></td><td>but-2-eno</td></tr>
      <tr><td>CH<sub>3</sub>–C≡C–CH<sub>2</sub>–CH<sub>3</sub></td><td>pent-2-ino</td></tr>
      <tr><td>CH<sub>2</sub>=CH–CH=CH<sub>2</sub></td><td>buta-1,3-dieno</td></tr></tbody></table>
      </div><div>
      <div class="box alert"><b>Nombres antiguos</b> En libros más antiguos verás "2-buteno", "1-butino" o "2-pentino": son los <b>mismos compuestos</b> que but-2-eno, but-1-ino y pent-2-ino. Solo cambia dónde se escribe el número. En la PAES aparece la forma nueva ("penta-2-ino", "butan-2-ona").</div>
      <div class="box"><b>Detalles de escritura</b> Con dos dobles se agrega una "a" al prefijo: <b>buta</b>-1,3-dieno. Si hay doble y triple, el "-eno" va antes: pent-1-en-3-ino. Con 1 o 2 carbonos no hace falta localizador: eteno, etino, propeno.</div>
      <div class="box"><b>Grupos alquilo (ramificaciones)</b> –CH<sub>3</sub> metil · –CH<sub>2</sub>CH<sub>3</sub> etil · –CH<sub>2</sub>CH<sub>2</sub>CH<sub>3</sub> propil · –CH(CH<sub>3</sub>)<sub>2</sub> isopropil.</div>
      </div></div>` },
    { t: 'Nombrar con ramificaciones, paso a paso', b: r`
      <div class="qfig"><img class="tikz" src="paes/quimica/fig/org_nom_ejemplo.svg" alt="4-etil-2-metilhexano con la cadena principal numerada del 1 al 6"></div>
      <div class="cols"><div>
      <p><b>Paso 1. Cadena principal.</b> La más larga (y, si hay dobles o triples, la que los contiene). Aquí: 6 C → <b>hexano</b>. Ojo: la cadena más larga puede doblar por una ramificación; no tiene que ser la horizontal.</p>
      <p><b>Paso 2. Numera</b> desde el extremo que dé los números más bajos: primero al enlace múltiple; si no hay, a las ramificaciones. Desde la izquierda: 2 y 4. Desde la derecha: 3 y 5. Gana la izquierda.</p>
      <p><b>Paso 3. Nombra las ramificaciones</b>: metil en C2, etil en C4.</p>
      <p><b>Paso 4. Ordena alfabéticamente</b> (etil antes que metil) y escribe: <b>4-etil-2-metilhexano</b>.</p>
      </div><div>
      <div class="box"><b>Más reglas</b><br>· Ramificaciones repetidas: di-, tri-, tetra-: 2,3-dimetilbutano. Estos prefijos no cuentan para el orden alfabético.<br>· Números con comas entre sí y guion entre número y letra: 2,2-dimetilpropano.<br>· Si dos cadenas igual de largas compiten, se elige la que tiene más ramificaciones.</div>
      <div class="box"><b>Ejemplo con doble enlace</b> CH<sub>2</sub>=C(CH<sub>3</sub>)–CH<sub>2</sub>–CH<sub>3</sub>: cadena de 4 C con el doble; se numera desde el doble (C1). Metil en C2: <b>2-metilbut-1-eno</b>.</div>
      </div></div>` },
    { t: 'Hidrocarburos cíclicos y aromáticos', b: r`
      <div class="cols"><div>
      <p><b>Cicloalcanos</b>: anillos de C con solo enlaces simples. Se nombran con <b>ciclo-</b> + el nombre del alcano: ciclopropano, ciclopentano, ciclohexano (C<sub>6</sub>H<sub>12</sub>). Con una ramificación: metilciclohexano.</p>
      <p><b>Aromáticos</b>: contienen el <b>benceno</b>, C<sub>6</sub>H<sub>6</sub>. Se dibuja con tres dobles alternados o con un círculo dentro del hexágono: sus electrones $\pi$ están <b>deslocalizados</b> en todo el anillo. Por eso el benceno es muy estable y, a diferencia de los alquenos, da reacciones de <b>sustitución</b> y no de adición.</p>
      <p>Los 6 C del benceno son sp², el anillo es plano y sus ángulos miden 120°.</p>
      </div><div>
      <table><thead><tr><th>Aromático</th><th>Fórmula</th><th>Uso</th></tr></thead><tbody>
      <tr><td>benceno</td><td>C<sub>6</sub>H<sub>6</sub></td><td>materia prima industrial (tóxico)</td></tr>
      <tr><td>tolueno (metilbenceno)</td><td>C<sub>7</sub>H<sub>8</sub></td><td>solvente de pinturas</td></tr>
      <tr><td>estireno (vinilbenceno)</td><td>C<sub>8</sub>H<sub>8</sub></td><td>fabricación de plumavit (poliestireno)</td></tr>
      <tr><td>naftaleno</td><td>C<sub>10</sub>H<sub>8</sub></td><td>antiguas bolitas de naftalina</td></tr></tbody></table>
      <div class="box alert"><b>Error típico</b> Contar 2 H en cada C del benceno, como si fuera ciclohexano. En el benceno cada C tiene 1 H (o 0 si lleva un sustituyente).</div>
      </div></div>` },
    { t: 'Isómeros y temperatura de ebullición', b: r`
      <div class="cols"><div>
      <p>Los <b>isómeros</b> tienen la <b>misma fórmula molecular</b> pero <b>distinta estructura</b>, y por eso distintas propiedades.</p>
      <ul><li><b>De cadena</b>: cambia el esqueleto. Butano y metilpropano (C<sub>4</sub>H<sub>10</sub>).</li>
      <li><b>De posición</b>: cambia la ubicación del doble enlace o del grupo. But-1-eno y but-2-eno.</li>
      <li><b>De función</b>: cambia el tipo de compuesto. Etanol y metoximetano (C<sub>2</sub>H<sub>6</sub>O); hex-1-eno y ciclohexano (C<sub>6</sub>H<sub>12</sub>).</li></ul>
      <div class="box"><b>Dos tendencias que pregunta la PAES</b><br>1. En una serie de alcanos lineales, <b>a más carbonos, mayor temperatura de ebullición</b> (más superficie de contacto entre moléculas).<br>2. Entre isómeros, <b>a más ramificación, menor temperatura de ebullición</b> (la molécula es más compacta y se atrae menos con sus vecinas).</div>
      </div><div>
      <div class="qfig"><img class="tikz" src="paes/quimica/fig/org_isomeros_c5.svg" alt="Los tres isómeros de C5H12: pentano, 2-metilbutano y 2,2-dimetilpropano, con sus temperaturas de ebullición"></div>
      <div class="box alert"><b>Ojo</b> "3-metilbutano" no existe como nombre: numerado bien, es el 2-metilbutano. Y "1-metilbutano" es en realidad el pentano. Antes de contar isómeros, nombra cada uno para no repetir.</div>
      </div></div>` },
    { t: 'Lo clave del tema', b: r`
      <table><thead><tr><th>Familia</th><th>Enlace clave</th><th>Fórmula</th><th>Sufijo</th><th>Ejemplo</th></tr></thead><tbody>
      <tr><td>Alcano</td><td>solo simples</td><td>C<sub>n</sub>H<sub>2n+2</sub></td><td>-ano</td><td>2-metilbutano</td></tr>
      <tr><td>Alqueno</td><td>C=C</td><td>C<sub>n</sub>H<sub>2n</sub></td><td>-eno</td><td>but-2-eno</td></tr>
      <tr><td>Alquino</td><td>C≡C</td><td>C<sub>n</sub>H<sub>2n−2</sub></td><td>-ino</td><td>pent-2-ino</td></tr>
      <tr><td>Cicloalcano</td><td>anillo, simples</td><td>C<sub>n</sub>H<sub>2n</sub></td><td>ciclo-…-ano</td><td>ciclohexano</td></tr>
      <tr><td>Aromático</td><td>anillo bencénico</td><td>C<sub>6</sub>H<sub>6</sub> (benceno)</td><td>-benceno</td><td>metilbenceno</td></tr></tbody></table>
      <div class="cols"><div>
      <div class="box"><b>Recuerda</b><br>· La cadena principal es la más larga, aunque se doble.<br>· Los sustituyentes van en orden alfabético: 4-etil-2-metilhexano.<br>· El doble enlace lleva el número más bajo: pent-2-eno.<br>· Isómeros = misma fórmula molecular.</div>
      </div><div>
      <div class="box"><b>Método PAES para nombrar</b> 1. Busca la cadena más larga que contenga el doble o triple. 2. Numera para que el enlace múltiple (o, si no hay, las ramas) tenga el número más bajo. 3. Identifica ramas y su posición. 4. Escribe en orden alfabético: localizador-rama + prefijo + localizador + sufijo. 5. Revisa: ¿el total de C del nombre coincide con el dibujo?</div>
      </div></div>` }
  ],
  example: {
    src: 'PAES Invierno 2027, adaptada',
    enun: r`<p>Respecto de la siguiente estructura de un hidrocarburo:</p><p>¿Cuál es su nombre correcto, según la IUPAC?</p>`,
    fig: { type: 'img', src: 'paes/quimica/fig/org_ej_nombre.svg', alt: 'Fórmula topológica de un alqueno ramificado de 9 carbonos' },
    alts: ['3,6-dimetilhept-4-eno', '2,5-dimetilheptano', '5-etil-2-metilhex-3-eno', '2,5-dimetilhept-3-eno'],
    ok: 3,
    sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El nombre IUPAC: cadena principal, numeración, ramificaciones y sufijo.</p>
      <p><b>Paso 2. Tipo de compuesto.</b> Solo C e H y una línea doble: es un <b>alqueno</b> (sufijo -eno).</p>
      <p><b>Paso 3. Cadena principal.</b> Busca la cadena más larga que contenga el doble enlace. Partiendo del extremo inferior izquierdo: 1 C, sube al vértice ramificado, baja, doble, sube, baja al otro vértice ramificado, y sigue por la derecha 2 C más. Son <b>7 C</b>: hept-. Las dos líneas que salen hacia arriba y hacia abajo de los vértices ramificados son metilos.</p>
      <p><b>Paso 4. Numeración.</b> Desde la izquierda, el doble enlace queda entre C3 y C4 → localizador 3. Desde la derecha quedaría en 4. Gana la izquierda: <b>hept-3-eno</b>.</p>
      <p><b>Paso 5. Ramificaciones.</b> Con esa numeración, los metilos están en C2 y C5: <b>2,5-dimetil</b>.</p>
      <p><b>Respuesta:</b> 2,5-dimetilhept-3-eno.</p>
      <p><b>Comprobación:</b> el nombre indica $7 + 2 = 9$ C y el dibujo tiene 9 vértices y extremos. Fórmula: C<sub>9</sub>H<sub>18</sub> = C<sub>n</sub>H<sub>2n</sub>, como corresponde a un alqueno. ✔</p>
      <p><b>¿Por qué no las otras?</b> "3,6-dimetilhept-4-eno" numera desde la derecha y le da al doble un número mayor (4 en vez de 3). "2,5-dimetilheptano" ignora el doble enlace (sería un alcano, C<sub>9</sub>H<sub>20</sub>). "5-etil-2-metilhex-3-eno" elige una cadena de 6 C cuando hay una de 7, y además deja una rama etilo que debería ser parte de la cadena.</p>`,
    conc: 'Cadena más larga con el doble enlace, numerada para que el doble tenga el número más bajo; luego las ramas en orden alfabético.'
  },
  bank: [
    /* Tipo 1: número de carbonos de la cadena principal (Invierno 2026 p. 6) */
    { src: 'PAES Invierno 2026, adaptada',
      enun: r`<p>La siguiente representación corresponde a un alcano presente en la gasolina:</p><p>¿Cuál es el número de átomos de carbono de la cadena principal?</p>`,
      fig: { type: 'img', src: 'paes/quimica/fig/org_cad_a.svg', alt: 'Fórmula topológica de un alcano ramificado de 11 carbonos' },
      alts: ['7', '8', '9', '11'], ok: 1,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> La cadena continua más larga de carbonos, no el total de carbonos.</p>
        <p><b>Paso 2. Cuenta los caminos.</b> La fila horizontal tiene 7 C. Pero del tercer vértice baja una rama de 3 C. Si empiezas en el extremo de esa rama, subes al tercer vértice y sigues hacia la derecha hasta el final: $3 + 5 = 8$ C.</p>
        <p><b>Paso 3. Revisa otros caminos.</b> Desde la rama de abajo hasta el extremo izquierdo: $3 + 3 = 6$. Desde la rama de abajo hasta el metilo de arriba a la derecha: $3 + 4 + 1 = 8$. Ninguno supera 8.</p>
        <p><b>Respuesta:</b> 8.</p>
        <p><b>¿Por qué no las otras?</b> 7 es la fila horizontal: no considera que la cadena puede doblar por una rama. 11 es el total de carbonos de la molécula. 9 sale de contar un vértice dos veces.</p>`,
      conc: 'La cadena principal es el camino más largo, aunque doble por una ramificación.' },
    { src: 'PAES Invierno 2026, adaptada',
      enun: r`<p>Se muestra la estructura de un hidrocarburo usado como combustible:</p><p>¿Cuántos átomos de carbono tiene su cadena principal?</p>`,
      fig: { type: 'img', src: 'paes/quimica/fig/org_cad_b.svg', alt: 'Fórmula topológica de un alcano muy ramificado de 13 carbonos' },
      alts: ['8', '10', '9', '13'], ok: 2,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El camino continuo más largo.</p>
        <p><b>Paso 2. Identifica las ramas.</b> En la fila horizontal hay 8 C. De ella salen: un metilo arriba a la izquierda (1 C), un etilo hacia abajo (2 C) y una rama de 3 C hacia arriba a la derecha.</p>
        <p><b>Paso 3. Combina los extremos más largos.</b> Empieza en el extremo del etilo de abajo (2 C), pasa por los 4 C centrales de la fila (desde el vértice del etilo hasta el vértice de la rama de 3) y termina en la rama de 3 C: $2 + 4 + 3 = 9$ C.</p>
        <p><b>Paso 4. Revisa.</b> Usando la parte izquierda en vez del etilo: $2 + 4 + 3 = 9$ también. Usando la parte derecha (2 C) en vez de la rama de 3: solo 8.</p>
        <p><b>Respuesta:</b> 9.</p>
        <p><b>¿Por qué no las otras?</b> 8 es la fila horizontal. 13 es el total de C. 10 suma un carbono que no está en el mismo camino.</p>`,
      conc: 'Prueba cada par de extremos y quédate con el camino más largo.' },
    { src: 'PAES Invierno 2026, adaptada',
      enun: r`<p>Observa la siguiente fórmula topológica:</p><p>¿Cuál es el número de átomos de carbono de la cadena principal?</p>`,
      fig: { type: 'img', src: 'paes/quimica/fig/org_cad_c.svg', alt: 'Fórmula topológica de un alcano con una cadena horizontal de 7 carbonos y una rama larga hacia abajo' },
      alts: ['7', '8', '12', '10'], ok: 3,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El camino más largo de carbonos seguidos.</p>
        <p><b>Paso 2. Ubica la ramificación.</b> En la fila de arriba hay 7 C; del quinto vértice (contando desde la izquierda) baja una rama de 5 C.</p>
        <p><b>Paso 3. Camino más largo.</b> Desde el extremo izquierdo hasta el quinto vértice hay 5 C; luego bajas por la rama: 5 C más. Total: $5 + 5 = 10$.</p>
        <p><b>Paso 4. Revisa.</b> Desde la derecha: 3 C hasta el vértice ramificado + 5 de la rama = 8. La fila sola: 7. Gana 10.</p>
        <p><b>Respuesta:</b> 10.</p>
        <p><b>¿Por qué no las otras?</b> 7 es solo la fila de arriba. 8 usa el lado corto. 12 es el total de C de la molécula.</p>`,
      conc: 'La rama más larga puede ser parte de la cadena principal.' },
    /* Tipo 2: nombre IUPAC de una estructura (Invierno 2027 p. 6; Invierno 2026 p. 63) */
    { src: 'PAES Invierno 2027, adaptada',
      enun: r`<p>Respecto de la siguiente estructura:</p><p>¿Cuál es su nombre correcto según la IUPAC?</p>`,
      fig: { type: 'img', src: 'paes/quimica/fig/org_nom_a.svg', alt: 'Fórmula topológica de un alcano de 9 carbonos con tres ramificaciones' },
      alts: ['2,4-dimetil-3-etilpentano', '3-etil-2,4-dimetilpentano', '3-isopropil-2-metilpentano', '3-etil-2,4-dimetilhexano'], ok: 1,
      sol: r`<p><b>Paso 1. Cadena principal.</b> Hay varias cadenas de 5 C. Por ejemplo, la fila horizontal (5 C) o el camino que baja por el etilo (también 5 C). Cuando empatan, se elige la que tiene <b>más ramificaciones</b>: la fila horizontal tiene 3 ramas (metil, etil, metil); la otra, solo 2. Cadena: <b>pentano</b>.</p>
        <p><b>Paso 2. Numeración.</b> Desde cualquier extremo las ramas quedan en 2, 3 y 4 (la molécula es simétrica).</p>
        <p><b>Paso 3. Ramas.</b> Metil en C2 y C4 (dimetil) y etil en C3.</p>
        <p><b>Paso 4. Orden alfabético.</b> "etil" va antes que "metil" (el di- no cuenta): <b>3-etil-2,4-dimetilpentano</b>.</p>
        <p><b>Respuesta:</b> 3-etil-2,4-dimetilpentano.</p>
        <p><b>Comprobación:</b> $5 + 2 + 1 + 1 = 9$ C, igual que en el dibujo. ✔</p>
        <p><b>¿Por qué no las otras?</b> "2,4-dimetil-3-etilpentano" no respeta el orden alfabético. "3-isopropil-2-metilpentano" elige una cadena de 5 C con menos ramificaciones. "…hexano" cuenta 6 C en la cadena principal, y no hay ningún camino de 6.</p>`,
      conc: 'Las ramas se escriben en orden alfabético, sin contar di- ni tri-.' },
    { src: 'PAES Invierno 2026, adaptada',
      enun: r`<p>¿Cuál es el nombre IUPAC del siguiente hidrocarburo?</p>`,
      fig: { type: 'img', src: 'paes/quimica/fig/org_nom_b.svg', alt: 'Fórmula topológica: CH3–C≡C–CH(CH3)–CH3' },
      alts: ['2-metilpent-3-ino', '4-metilpent-2-eno', '4-metilpent-2-ino', '2-metilhex-3-ino'], ok: 2,
      sol: r`<p><b>Paso 1. Tipo.</b> Hay una línea triple: alquino (-ino).</p>
        <p><b>Paso 2. Cadena principal.</b> Desde el extremo izquierdo, pasa por el triple y llega al vértice ramificado; de ahí sigue por una de las dos líneas: 5 C → <b>pent-</b>. La otra línea es un metilo.</p>
        <p><b>Paso 3. Numeración.</b> Desde la izquierda, el triple está entre C2 y C3 → 2. Desde la derecha estaría en 3. Gana la izquierda: <b>pent-2-ino</b>, con el metilo en C4.</p>
        <p><b>Respuesta:</b> 4-metilpent-2-ino.</p>
        <p><b>¿Por qué no las otras?</b> "2-metilpent-3-ino" numera para favorecer al metilo, pero el enlace triple tiene prioridad. "pent-2-eno" confunde el triple con un doble. "hex-3-ino" cuenta los 6 C totales como si fueran todos de la cadena.</p>`,
      conc: 'El enlace múltiple manda en la numeración, por sobre las ramificaciones.' },
    { src: 'PAES Invierno 2027, adaptada',
      enun: r`<p>¿Cuál es el nombre correcto, según la IUPAC, del siguiente compuesto?</p>`,
      fig: { type: 'img', src: 'paes/quimica/fig/org_nom_c.svg', alt: 'Fórmula topológica: CH3–CH=C(CH2CH3)–CH2–CH3' },
      alts: ['3-etilpent-3-eno', '3-etilpentano', '2-etilbut-2-eno', '3-etilpent-2-eno'], ok: 3,
      sol: r`<p><b>Paso 1. Tipo.</b> Una línea doble: alqueno (-eno).</p>
        <p><b>Paso 2. Cadena principal.</b> La cadena más larga que contiene el doble: desde el extremo izquierdo, el doble, el vértice ramificado y una de las dos ramas de 2 C: 5 C → <b>pent-</b>. La otra rama de 2 C es un etilo.</p>
        <p><b>Paso 3. Numeración.</b> Desde la izquierda, el doble queda entre C2 y C3 → <b>pent-2-eno</b>. El etilo está en C3.</p>
        <p><b>Respuesta:</b> 3-etilpent-2-eno.</p>
        <p><b>Comprobación:</b> $5 + 2 = 7$ C; fórmula C<sub>7</sub>H<sub>14</sub> = C<sub>n</sub>H<sub>2n</sub>. ✔</p>
        <p><b>¿Por qué no las otras?</b> "pent-3-eno" numera desde el extremo equivocado. "3-etilpentano" ignora el doble enlace. "2-etilbut-2-eno" usa una cadena de 4 C cuando hay una de 5.</p>`,
      conc: 'Revisa al final que el total de carbonos del nombre coincida con el dibujo.' },
    /* Tipo 3: fórmulas generales (Invierno 2027 p. 64) */
    { src: 'PAES Invierno 2027, adaptada',
      enun: r`<p>Un hidrocarburo de cadena abierta tiene fórmula molecular C<sub>6</sub>H<sub>10</sub>. ¿Cuál de los siguientes compuestos podría ser?</p>`,
      alts: ['Hexano', 'Hex-1-eno', 'Hex-2-ino', 'Ciclohexano'], ok: 2,
      sol: r`<p><b>Paso 1. Compara con el alcano.</b> El alcano de 6 C es C<sub>6</sub>H<sub>14</sub>. A C<sub>6</sub>H<sub>10</sub> le faltan 4 H: un triple enlace (o dos dobles, o un doble y un anillo).</p>
        <p><b>Paso 2. Revisa.</b> Hexano: C<sub>6</sub>H<sub>14</sub>. Hex-1-eno: C<sub>6</sub>H<sub>12</sub>. Hex-2-ino: C<sub>6</sub>H<sub>10</sub>. ✔ Ciclohexano: C<sub>6</sub>H<sub>12</sub> (y además no es de cadena abierta).</p>
        <p><b>Respuesta:</b> hex-2-ino.</p>
        <p><b>¿Por qué no las otras?</b> El hexano es saturado (2n + 2). El hex-1-eno y el ciclohexano siguen C<sub>n</sub>H<sub>2n</sub>: les sobran 2 H.</p>`,
      conc: 'Alquino: CₙH₂ₙ₋₂, 4 H menos que el alcano.' },
    { src: 'Estilo PAES',
      enun: r`<p>Respecto de un hidrocarburo de fórmula C<sub>5</sub>H<sub>10</sub>, se afirma que:</p><p>I. Puede ser un alqueno.<br>II. Puede ser un cicloalcano.<br>III. Puede ser un alcano de cadena abierta.</p><p>¿Cuál(es) es (son) correcta(s)?</p>`,
      alts: ['Solo I', 'Solo III', 'I, II y III', 'Solo I y II'], ok: 3,
      sol: r`<p><b>Paso 1.</b> C<sub>5</sub>H<sub>10</sub> sigue C<sub>n</sub>H<sub>2n</sub> ($2 \cdot 5 = 10$): le faltan 2 H respecto del alcano C<sub>5</sub>H<sub>12</sub>. Tiene un doble enlace <b>o</b> un anillo.</p>
        <p><b>Paso 2.</b> I: el pent-1-eno es C<sub>5</sub>H<sub>10</sub>. ✔ II: el ciclopentano es C<sub>5</sub>H<sub>10</sub>. ✔ III: un alcano abierto de 5 C tiene 12 H. ✘</p>
        <p><b>Respuesta:</b> Solo I y II.</p>
        <p><b>¿Por qué no las otras?</b> "Solo I" olvida que un anillo también resta 2 H. Las opciones con III confunden C<sub>n</sub>H<sub>2n</sub> con la fórmula de los alcanos (C<sub>n</sub>H<sub>2n+2</sub>).</p>`,
      conc: 'CₙH₂ₙ puede ser alqueno o cicloalcano: son isómeros.' },
    { src: 'Estilo PAES',
      enun: r`<p>Un alcano de cadena abierta tiene una masa molar de 72 g/mol (masas atómicas: H = 1, C = 12). ¿Cuál es su fórmula molecular?</p>`,
      alts: ['C<sub>5</sub>H<sub>12</sub>', 'C<sub>5</sub>H<sub>10</sub>', 'C<sub>4</sub>H<sub>10</sub>', 'C<sub>6</sub>H<sub>14</sub>'], ok: 0,
      sol: r`<p><b>Paso 1. Plantea.</b> Alcano: C<sub>n</sub>H<sub>2n+2</sub>. Masa: $12n + (2n + 2) = 14n + 2$.</p>
        <p><b>Paso 2. Resuelve.</b> $14n + 2 = 72$ → $14n = 70$ → $n = 5$. Fórmula: C<sub>5</sub>H<sub>12</sub>.</p>
        <p><b>Respuesta:</b> C<sub>5</sub>H<sub>12</sub>.</p>
        <p><b>Comprobación:</b> $5 \cdot 12 + 12 \cdot 1 = 60 + 12 = 72$ g/mol. ✔</p>
        <p><b>¿Por qué no las otras?</b> C<sub>5</sub>H<sub>10</sub> pesa 70 g/mol y no es alcano (es C<sub>n</sub>H<sub>2n</sub>). C<sub>4</sub>H<sub>10</sub> pesa 58 g/mol. C<sub>6</sub>H<sub>14</sub> pesa 86 g/mol.</p>`,
      conc: 'Masa molar de un alcano: 14n + 2.' },
    /* Tipo 4: temperatura de ebullición, ramificación y largo de cadena (Invierno 2026 p. 67; Invierno 2027 p. 8) */
    { src: 'PAES Invierno 2026, adaptada',
      enun: r`<p>Un grupo de estudiantes recopila la temperatura de ebullición, a 1 atm, de tres hidrocarburos de fórmula C<sub>5</sub>H<sub>12</sub>:</p><p>¿Qué conclusión es coherente con estos datos?</p>`,
      fig: { type: 'table', head: ['Compuesto', 'Ramificaciones', 'T. de ebullición (°C)'], rows: [['pentano', '0', '36,1'], ['2-metilbutano', '1', '27,8'], ['2,2-dimetilpropano', '2', '9,5']] },
      alts: ['A mayor masa molar, menor temperatura de ebullición.', 'En isómeros de igual fórmula molecular, a mayor ramificación, menor temperatura de ebullición.', 'La temperatura de ebullición aumenta con el número de ramificaciones.', 'La temperatura de ebullición depende solo del número de átomos de carbono.'], ok: 1,
      sol: r`<p><b>Paso 1. ¿Qué cambia y qué se mantiene?</b> Los tres son C<sub>5</sub>H<sub>12</sub>: igual número de C y misma masa molar (72 g/mol). Cambia solo la ramificación.</p>
        <p><b>Paso 2. Tendencia.</b> 0 ramas: 36,1 °C; 1 rama: 27,8 °C; 2 ramas: 9,5 °C. A más ramificación, menor temperatura de ebullición.</p>
        <p><b>Respuesta:</b> en isómeros de igual fórmula, a mayor ramificación, menor temperatura de ebullición.</p>
        <p><b>¿Por qué no las otras?</b> La masa molar es igual en los tres: no puede explicar la diferencia. La tendencia es la contraria a "aumenta con las ramificaciones". Y si dependiera solo del número de C, las tres temperaturas serían iguales.</p>`,
      conc: 'Más ramificada = más compacta = menos contacto entre moléculas = menor temperatura de ebullición.' },
    { src: 'PAES Invierno 2027, adaptada',
      enun: r`<p>Un estudiante encuentra en un libro la temperatura de ebullición, a 1 atm, de varios alcanos lineales (sin ramificar) y elabora el siguiente gráfico:</p><p>¿Qué afirmación describe correctamente la información del gráfico?</p>`,
      fig: { type: 'img', src: 'paes/quimica/fig/org_graf_eb.svg', alt: 'Gráfico de temperatura de ebullición versus número de carbonos de alcanos lineales: sube desde −42 °C con 3 C hasta 151 °C con 9 C' },
      alts: ['A medida que aumenta el número de carbonos, la temperatura de ebullición es menor que cero.', 'La temperatura de ebullición se mantiene constante para los alcanos de más de 7 carbonos.', 'A medida que disminuye el número de carbonos, la temperatura de ebullición disminuye.', 'La temperatura de ebullición disminuye al aumentar la masa molar del alcano.'], ok: 2,
      sol: r`<p><b>Paso 1. Lee el gráfico.</b> Con 3 C la temperatura es cerca de −42 °C; con 9 C, cerca de 151 °C. La curva siempre sube.</p>
        <p><b>Paso 2. Interpreta.</b> Más carbonos → mayor temperatura de ebullición. Dicho al revés: si disminuye el número de carbonos, la temperatura disminuye.</p>
        <p><b>Respuesta:</b> a medida que disminuye el número de carbonos, la temperatura de ebullición disminuye.</p>
        <p><b>¿Por qué no las otras?</b> Desde 5 C las temperaturas son positivas. Después de 7 C la curva sigue subiendo, no es constante. Y más carbonos significa más masa molar: la temperatura <b>aumenta</b> con la masa molar en esta serie.</p>`,
      conc: 'En alcanos lineales, la temperatura de ebullición sube con el número de carbonos.' },
    { src: 'PAES Invierno 2026, adaptada',
      enun: r`<p>Se tienen las temperaturas de ebullición, a 1 atm, de tres isómeros de fórmula C<sub>6</sub>H<sub>14</sub>:</p><p>Considerando la tendencia de los datos, ¿cuál es la temperatura de ebullición más probable del 2,3-dimetilbutano, que también es C<sub>6</sub>H<sub>14</sub>?</p>`,
      fig: { type: 'table', head: ['Compuesto', 'Ramificaciones', 'T. de ebullición (°C)'], rows: [['hexano', '0', '68,7'], ['2-metilpentano', '1', '60,3'], ['2,2-dimetilbutano', '2 (en el mismo C)', '49,7']] },
      alts: ['76,7 °C', '98,4 °C', '58,0 °C', '36,1 °C'], ok: 2,
      sol: r`<p><b>Paso 1. Ubica el compuesto.</b> El 2,3-dimetilbutano tiene 2 ramificaciones, en carbonos distintos: es más ramificado que el 2-metilpentano (1 rama) y algo menos compacto que el 2,2-dimetilbutano (2 ramas en el mismo C).</p>
        <p><b>Paso 2. Estima.</b> Su temperatura debe estar entre 49,7 °C y 60,3 °C.</p>
        <p><b>Respuesta:</b> 58,0 °C.</p>
        <p><b>¿Por qué no las otras?</b> 76,7 °C y 98,4 °C son mayores que la del hexano, que no tiene ramas: contradice la tendencia. 36,1 °C es la del pentano, un compuesto con menos carbonos; para un isómero de 6 C sería demasiado baja.</p>`,
      conc: 'Para estimar, ubica el compuesto entre los dos datos que lo rodean en la tendencia.' },
    /* Tipo 5: isómeros (Invierno 2026 p. 65) */
    { src: 'Estilo PAES',
      enun: r`<p>¿Cuál de los siguientes pares corresponde a <b>isómeros de cadena</b>?</p>`,
      alts: ['But-1-eno y but-2-eno', 'Etanol y metoximetano', 'Propano y propeno', 'Butano y metilpropano'], ok: 3,
      sol: r`<p><b>Paso 1. Definición.</b> Isómeros de cadena: misma fórmula molecular, distinto esqueleto de carbonos (lineal o ramificado).</p>
        <p><b>Paso 2. Revisa.</b> Butano (lineal) y metilpropano (ramificado): ambos C<sub>4</sub>H<sub>10</sub>. ✔ But-1-eno y but-2-eno: misma cadena, cambia la posición del doble → isómeros de posición. Etanol y metoximetano: distinto grupo funcional → isómeros de función. Propano (C<sub>3</sub>H<sub>8</sub>) y propeno (C<sub>3</sub>H<sub>6</sub>): no son isómeros.</p>
        <p><b>Respuesta:</b> butano y metilpropano.</p>
        <p><b>¿Por qué no las otras?</b> Los demás pares son isómeros de otro tipo o ni siquiera son isómeros, porque tienen distinta fórmula.</p>`,
      conc: 'Cadena: cambia el esqueleto. Posición: cambia dónde está el grupo. Función: cambia el grupo.' },
    { src: 'Estilo PAES',
      enun: r`<p>¿Cuál de los siguientes compuestos es isómero del hex-1-eno?</p>`,
      alts: ['Hexano', 'Ciclohexano', 'Hex-1-ino', 'Benceno'], ok: 1,
      sol: r`<p><b>Paso 1. Fórmula del hex-1-eno.</b> 6 C con un doble: C<sub>6</sub>H<sub>12</sub>.</p>
        <p><b>Paso 2. Revisa.</b> Hexano: C<sub>6</sub>H<sub>14</sub>. Ciclohexano: C<sub>6</sub>H<sub>12</sub>. ✔ Hex-1-ino: C<sub>6</sub>H<sub>10</sub>. Benceno: C<sub>6</sub>H<sub>6</sub>.</p>
        <p><b>Respuesta:</b> ciclohexano.</p>
        <p><b>¿Por qué no las otras?</b> Tener 6 C no basta: los isómeros deben tener también el mismo número de H. Solo el ciclohexano tiene 12 H, porque su anillo resta los mismos 2 H que el doble enlace.</p>`,
      conc: 'Un anillo y un doble enlace restan los mismos 2 H: alquenos y cicloalcanos pueden ser isómeros.' },
    { src: 'Estilo PAES',
      enun: r`<p>¿Cuántos isómeros estructurales (alcanos distintos) tienen la fórmula C<sub>5</sub>H<sub>12</sub>?</p>`,
      alts: ['2', '3', '4', '5'], ok: 1,
      sol: r`<p><b>Paso 1. Cadena de 5.</b> Pentano.</p>
        <p><b>Paso 2. Cadena de 4 + 1 metilo.</b> El metilo solo puede ir en C2: 2-metilbutano. (Ponerlo en C3 da la misma molécula numerada al revés; en C1 alarga la cadena y vuelve a ser pentano.)</p>
        <p><b>Paso 3. Cadena de 3 + 2 metilos.</b> Ambos en el C central: 2,2-dimetilpropano.</p>
        <p><b>Respuesta:</b> 3 isómeros.</p>
        <p><b>Comprobación:</b> los tres aparecen en tablas con distinta temperatura de ebullición (36,1, 27,8 y 9,5 °C): son sustancias distintas. ✔</p>
        <p><b>¿Por qué no las otras?</b> 4 o 5 cuentan como distintos "3-metilbutano" o "1-metilbutano", que son el 2-metilbutano y el pentano con otro nombre. 2 olvida el 2,2-dimetilpropano.</p>`,
      conc: 'Para contar isómeros, nombra cada uno: si dos tienen el mismo nombre, son el mismo compuesto.' }
  ]
},

/* =====================================================================
   4. GRUPOS FUNCIONALES
   ===================================================================== */
{
  id: 'qui_funcionales', unit: 'Unidad 2 · Química orgánica', icon: '🧴',
  title: 'Grupos funcionales',
  desc: 'Haluros, alcoholes, fenoles, éteres, sulfuros, aldehídos, cetonas, ácidos carboxílicos, ésteres, anhídridos, amidas, aminas y nitrilos: cómo se escriben, cómo se nombran, cómo reconocerlos en fármacos y aromas, y para qué se usan.',
  slides: [
    { t: '¿Qué es un grupo funcional?', b: r`
      <div class="cols"><div>
      <p>Un <b>grupo funcional</b> es un átomo o grupo de átomos (casi siempre con O, N, S o un halógeno) que le da a la molécula sus propiedades químicas. Moléculas con el mismo grupo funcional se comportan de forma parecida.</p>
      <p>Se escribe <b>R</b> para el resto de la molécula (la parte de C e H). Así, R–OH es "cualquier alcohol": CH<sub>3</sub>–OH, CH<sub>3</sub>–CH<sub>2</sub>–OH, etc.</p>
      <p>Cuando una molécula tiene varios grupos, el de <b>mayor prioridad</b> da el sufijo del nombre y los demás se nombran como prefijos:</p>
      <p style="text-align:center"><b>ácido carboxílico &gt; anhídrido &gt; éster &gt; amida &gt; nitrilo &gt; aldehído &gt; cetona &gt; alcohol &gt; amina &gt; éter &gt; haluro</b></p>
      </div><div>
      <div class="box"><b>Ejemplo</b> HO–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>2</sub>–COOH tiene un alcohol y un ácido. Manda el ácido: la cadena se numera desde el COOH (C1) y el OH queda en C4 como prefijo "hidroxi": <b>ácido 4-hidroxibutanoico</b>.</div>
      <div class="box alert"><b>Nombres comunes</b> El temario acepta nombres IUPAC o comunes. Conviene saber los dos para los compuestos famosos: acetona = propanona, ácido acético = ácido etanoico, formaldehído = metanal, cloroformo = triclorometano.</div>
      </div></div>` },
    { t: 'Oxígeno con enlaces simples: alcoholes, fenoles y éteres', b: r`
      <div class="qfig"><img class="tikz" src="paes/quimica/fig/org_grupos_o.svg" alt="Fórmulas generales de alcohol, fenol, éter, aldehído y cetona"></div>
      <div class="cols"><div>
      <p><b>Alcohol, R–OH.</b> Sufijo <b>-ol</b>, con localizador: propan-2-ol. Ejemplos: metanol (tóxico), etanol (bebidas, alcohol gel, combustible), propan-2-ol (alcohol isopropílico, desinfectante), glicerol (cosméticos). Según el C que lleva el OH, son primarios (el C tiene 1 C vecino), secundarios (2) o terciarios (3). Forman <b>puentes de hidrógeno</b>: temperaturas de ebullición altas y los pequeños son solubles en agua.</p>
      <p><b>Fenol, OH unido a un anillo bencénico.</b> El fenol, C<sub>6</sub>H<sub>5</sub>OH, es desinfectante; los fenoles son antioxidantes y están en el timol del tomillo y en la vanilina. Son más ácidos que los alcoholes.</p>
      </div><div>
      <p><b>Éter, R–O–R'.</b> El O está <b>entre dos carbonos</b>. IUPAC: el grupo pequeño con O se nombra "alcoxi": CH<sub>3</sub>–O–CH<sub>2</sub>–CH<sub>3</sub> es <b>metoxietano</b> (común: etil metil éter). El etoxietano (dietil éter) fue un anestésico y hoy es solvente. No forman puentes de hidrógeno entre sí: hierven a menor temperatura que el alcohol isómero.</p>
      <div class="box alert"><b>Alcohol o fenol</b> Si el OH está en un C del anillo bencénico, es fenol; si está en un C con solo enlaces simples, es alcohol.</div>
      </div></div>` },
    { t: 'El grupo carbonilo: aldehídos y cetonas', b: r`
      <div class="cols"><div>
      <p>El <b>carbonilo</b> es un C=O. Su posición define la familia:</p>
      <p><b>Aldehído, R–CHO.</b> El C=O está en un <b>extremo</b> de la cadena: el C lleva un H. Sufijo <b>-al</b>, sin número (el C del CHO siempre es C1): metanal, etanal, butanal. Ejemplos: metanal o formaldehído (la formalina conserva tejidos), benzaldehído (aroma de almendras), cinamaldehído (canela), vanilina (vainilla).</p>
      <p><b>Cetona, R–CO–R'.</b> El C=O está <b>entre dos carbonos</b>. Sufijo <b>-ona</b>, con localizador: pentan-2-ona, pentan-3-ona. La propanona (acetona) es el solvente del quitaesmalte; la butan-2-ona se usa en pinturas.</p>
      </div><div>
      <div class="box"><b>Ejemplo resuelto</b> CH<sub>3</sub>–CH<sub>2</sub>–CH(CH<sub>3</sub>)–CH<sub>2</sub>–CHO. <b>Paso 1.</b> Cadena más larga con el CHO: 5 C → pentanal. <b>Paso 2.</b> El CHO es C1, así que el metilo queda en C3. <b>Nombre:</b> 3-metilpentanal. <b>Fórmula:</b> C<sub>6</sub>H<sub>12</sub>O.</div>
      <div class="box alert"><b>Error típico</b> Llamar cetona a todo C=O. Mira los vecinos del carbono del C=O: si uno es H, es aldehído; si son dos C, es cetona; si uno es O o N, es ácido, éster o amida (siguiente sección).</div>
      <div class="box"><b>Oxidación</b> Alcohol primario → aldehído → ácido carboxílico. Alcohol secundario → cetona.</div>
      </div></div>` },
    { t: 'Ácidos carboxílicos y sus derivados: ésteres, anhídridos y amidas', b: r`
      <div class="qfig"><img class="tikz" src="paes/quimica/fig/org_grupos_co.svg" alt="Fórmulas generales de ácido carboxílico, éster, anhídrido y amida"></div>
      <div class="cols"><div>
      <p><b>Ácido carboxílico, R–COOH.</b> "ácido …-oico": ácido metanoico (fórmico, de las hormigas), ácido etanoico (acético, del vinagre), ácido butanoico (mantequilla rancia). Son ácidos débiles y forman puentes de hidrógeno.</p>
      <p><b>Éster, R–COO–R'.</b> Se forma por <b>esterificación</b>: ácido + alcohol → éster + agua. Nombre: la parte del ácido termina en <b>-ato</b> y la del alcohol en <b>-ilo</b>: CH<sub>3</sub>–COO–CH<sub>2</sub>–CH<sub>3</sub> es <b>etanoato de etilo</b> (acetato de etilo). Dan los <b>aromas frutales</b>: etanoato de 3-metilbutilo (plátano), butanoato de etilo (piña). Las grasas y aceites son ésteres.</p>
      </div><div>
      <p><b>Anhídrido, R–CO–O–CO–R.</b> Dos grupos acilo unidos por un O (como dos ácidos que perdieron una molécula de agua). El anhídrido etanoico (acético) se usa para fabricar la aspirina.</p>
      <p><b>Amida, R–CO–NH<sub>2</sub>.</b> Sufijo <b>-amida</b>: etanamida. La urea es una amida; el <b>enlace peptídico</b> que une los aminoácidos en las proteínas es una amida, igual que el nailon y el paracetamol.</p>
      <div class="box alert"><b>Éster o éter</b> Los dos tienen C–O–C, pero el éster tiene además un C=O pegado a ese O. Sin C=O, es éter.</div>
      </div></div>` },
    { t: 'Nitrógeno, azufre y halógenos: aminas, nitrilos, sulfuros y haluros', b: r`
      <div class="qfig"><img class="tikz" src="paes/quimica/fig/org_grupos_nsx.svg" alt="Fórmulas generales de amina, nitrilo, sulfuro y haluro"></div>
      <div class="cols"><div>
      <p><b>Amina, R–NH<sub>2</sub></b> (también R<sub>2</sub>NH y R<sub>3</sub>N). Sufijo <b>-amina</b>: metanamina (metilamina). Son <b>básicas</b> y las pequeñas huelen a pescado. Están en los aminoácidos, la adrenalina, la anilina (colorantes) y alcaloides como la cafeína y la nicotina.</p>
      <p><b>Nitrilo, R–C≡N.</b> Sufijo <b>-nitrilo</b>, contando el C del CN: CH<sub>3</sub>–CN es etanonitrilo (acetonitrilo, un solvente). El propenonitrilo (acrilonitrilo) se usa para fibras acrílicas.</p>
      </div><div>
      <p><b>Sulfuro (tioéter), R–S–R'.</b> Como un éter, pero con S: CH<sub>3</sub>–S–CH<sub>3</sub> es el sulfuro de dimetilo (olor a mar y a repollo cocido). El sulfuro de dialilo da parte del olor del ajo. No confundir con los tioles (R–SH), que se agregan al gas para detectar fugas.</p>
      <p><b>Haluro de alquilo, R–X</b> (X = F, Cl, Br, I). Se nombran con prefijos: clorometano, 2-bromopropano. El triclorometano (cloroformo) fue anestésico y hoy es solvente; los CFC dañan la capa de ozono; el PVC y el teflón son polímeros halogenados.</p>
      </div></div>` },
    { t: 'Reconocer grupos en moléculas reales', b: r`
      <div class="qfig"><img class="tikz" src="paes/quimica/fig/org_reales.svg" alt="Cinamaldehído y etanoato de 3-metilbutilo con sus grupos funcionales"></div>
      <div class="cols"><div>
      <p>En la PAES aparecen fármacos, aromas e insecticidas dibujados en fórmula topológica. Para reconocer sus grupos, mira cada heteroátomo (O, N, S, halógeno) y a sus <b>vecinos</b>:</p>
      <table><thead><tr><th>Lo que ves</th><th>Grupo</th></tr></thead><tbody>
      <tr><td>OH en C con solo simples</td><td>alcohol</td></tr>
      <tr><td>OH en el anillo bencénico</td><td>fenol</td></tr>
      <tr><td>C–O–C, sin C=O al lado</td><td>éter</td></tr>
      <tr><td>C=O en un extremo (con H)</td><td>aldehído</td></tr>
      <tr><td>C=O entre dos C</td><td>cetona</td></tr>
      <tr><td>C=O con OH en el mismo C</td><td>ácido carboxílico</td></tr>
      <tr><td>C=O con O–C en el mismo C</td><td>éster</td></tr>
      <tr><td>C=O con N en el mismo C</td><td>amida</td></tr>
      <tr><td>N con solo enlaces simples a C o H</td><td>amina</td></tr>
      <tr><td>C≡N</td><td>nitrilo</td></tr></tbody></table>
      </div><div>
      <div class="box"><b>Ejemplo resuelto: paracetamol</b> HO–C<sub>6</sub>H<sub>4</sub>–NH–CO–CH<sub>3</sub>. <b>Paso 1.</b> El OH está sobre el anillo: <b>fenol</b>. <b>Paso 2.</b> El N está unido a un C que tiene un C=O: no es amina, es <b>amida</b>. <b>Paso 3.</b> No hay ácido ni éster: el único C=O es parte de la amida.</div>
      <div class="box alert"><b>Error típico</b> Mirar un átomo solo. Un O puede ser alcohol, éter, cetona, éster o ácido según sus vecinos, y un N puede ser amina o amida. Revisa siempre el carbono de al lado.</div>
      </div></div>` },
    { t: 'Lo clave del tema', b: r`
      <table><thead><tr><th>Grupo</th><th>Fórmula</th><th>Nombre (ejemplo)</th><th>Uso o característica</th></tr></thead><tbody>
      <tr><td>Haluro</td><td>R–X</td><td>triclorometano (cloroformo)</td><td>solventes, CFC, PVC</td></tr>
      <tr><td>Alcohol</td><td>R–OH</td><td>etanol</td><td>bebidas, desinfectante; puentes de H</td></tr>
      <tr><td>Fenol</td><td>Ar–OH</td><td>fenol</td><td>desinfectante, antioxidante</td></tr>
      <tr><td>Éter</td><td>R–O–R'</td><td>etoxietano (dietil éter)</td><td>anestésico antiguo, solvente</td></tr>
      <tr><td>Sulfuro</td><td>R–S–R'</td><td>sulfuro de dimetilo</td><td>olores (ajo, mar)</td></tr>
      <tr><td>Aldehído</td><td>R–CHO</td><td>metanal (formaldehído)</td><td>conservante (formalina), aromas</td></tr>
      <tr><td>Cetona</td><td>R–CO–R'</td><td>propanona (acetona)</td><td>solvente, quitaesmalte</td></tr>
      <tr><td>Ácido carboxílico</td><td>R–COOH</td><td>ácido etanoico (acético)</td><td>vinagre; ácido débil</td></tr>
      <tr><td>Éster</td><td>R–COO–R'</td><td>etanoato de etilo</td><td>aromas frutales, grasas</td></tr>
      <tr><td>Anhídrido</td><td>R–CO–O–CO–R</td><td>anhídrido etanoico</td><td>síntesis de aspirina</td></tr>
      <tr><td>Amida</td><td>R–CO–NH<sub>2</sub></td><td>etanamida</td><td>proteínas, nailon, paracetamol</td></tr>
      <tr><td>Amina</td><td>R–NH<sub>2</sub></td><td>metanamina (metilamina)</td><td>básicas, olor a pescado, alcaloides</td></tr>
      <tr><td>Nitrilo</td><td>R–C≡N</td><td>etanonitrilo (acetonitrilo)</td><td>solventes, fibras acrílicas</td></tr></tbody></table>
      <div class="cols"><div>
      <div class="box"><b>Recuerda</b><br>· En un C=O mira los vecinos: H (aldehído), 2 C (cetona), OH (ácido), O–C (éster), N (amida).<br>· N–C=O es una amida.<br>· Etanoato de propilo y propanoato de etilo son distintos: "-ato" es la parte del ácido (con el C=O) y "-ilo" la del alcohol.</div>
      </div><div>
      <div class="box"><b>Método PAES</b> 1. Encierra cada heteroátomo. 2. Mira sus vecinos y usa la tabla de la sección anterior. 3. Si te piden el nombre, busca el grupo de mayor prioridad: da el sufijo y fija la numeración (C1 en el CHO o el COOH). 4. Si te piden un uso, asocia: éster–aroma, amida–proteínas, cetona–acetona, ácido–vinagre, amina–olor a pescado.</div>
      </div></div>` }
  ],
  example: {
    src: 'PAES Regular 2026, adaptada',
    enun: r`<p>El ácido acetilsalicílico (aspirina) es uno de los analgésicos más usados del mundo. Su estructura es la siguiente:</p><p>¿Cuáles grupos funcionales están presentes en esta molécula, además del anillo aromático?</p>`,
    fig: { type: 'img', src: 'paes/quimica/fig/org_aspirina.svg', alt: 'Fórmula topológica de la aspirina: anillo bencénico con un grupo COOH y un grupo O–CO–CH3 en posiciones vecinas' },
    alts: ['Cetona y éter', 'Ácido carboxílico y éster', 'Aldehído y alcohol', 'Ácido carboxílico y cetona'],
    ok: 1,
    sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Nombrar los grupos funcionales que se ven en la estructura.</p>
      <p><b>Paso 2. Encierra los heteroátomos.</b> Hay 4 O, en dos grupos: uno a la derecha (C=O y OH) y otro arriba a la izquierda (un O unido al anillo y un C=O).</p>
      <p><b>Paso 3. Grupo de la derecha.</b> Un carbono tiene un C=O y un OH a la vez: es un <b>ácido carboxílico</b> (–COOH).</p>
      <p><b>Paso 4. Grupo de arriba.</b> El O unido al anillo está unido, del otro lado, a un C que tiene un C=O (y un CH<sub>3</sub>). Un O entre dos C, con C=O al lado: es un <b>éster</b> (–O–CO–CH<sub>3</sub>). No es éter, porque hay un C=O pegado; no es cetona, porque el C del C=O está unido a un O.</p>
      <p><b>Respuesta:</b> ácido carboxílico y éster.</p>
      <p><b>Comprobación:</b> la aspirina se fabrica haciendo reaccionar el ácido salicílico (que tiene un fenol) con anhídrido etanoico: el OH del fenol se convierte en el éster. Su fórmula es C<sub>9</sub>H<sub>8</sub>O<sub>4</sub>: los 4 O son los 2 del ácido y los 2 del éster. ✔</p>
      <p><b>¿Por qué no las otras?</b> "Cetona y éter" mira el C=O y el C–O–C por separado, sin notar que están unidos: juntos son un éster. "Aldehído y alcohol" confunde el COOH con un CHO más un OH. "Ácido carboxílico y cetona" acierta el ácido, pero el otro C=O no está entre dos C: tiene un O al lado.</p>`,
    conc: 'Antes de nombrar un C=O o un O, mira a sus vecinos: juntos pueden formar un grupo distinto.'
  },
  bank: [
    /* Tipo 1: clasificar un compuesto simple (Invierno 2026 p. 8; Regular 2026 p. 70) */
    { src: 'PAES Invierno 2026, adaptada',
      enun: r`<p>El siguiente compuesto orgánico se usa como solvente en pinturas:</p><p style="text-align:center">CH<sub>3</sub>–CH<sub>2</sub>–CO–CH<sub>3</sub></p><p>¿Qué grupo funcional presenta?</p>`,
      alts: ['Aldehído', 'Éster', 'Cetona', 'Éter'], ok: 2,
      sol: r`<p><b>Paso 1. Ubica el heteroátomo.</b> El O está en el grupo CO: un C=O (carbonilo).</p>
        <p><b>Paso 2. Mira los vecinos del C del carbonilo.</b> A un lado hay un CH<sub>2</sub> y al otro un CH<sub>3</sub>: dos carbonos.</p>
        <p><b>Respuesta:</b> cetona (es la butan-2-ona).</p>
        <p><b>¿Por qué no las otras?</b> En un aldehído el C=O estaría en un extremo, con un H (CHO). En un éster el C=O tendría un O–C al lado (COO). En un éter no hay C=O, sino un O entre dos C.</p>`,
      conc: 'C=O entre dos carbonos: cetona.' },
    { src: 'PAES Regular 2026, adaptada',
      enun: r`<p>El siguiente compuesto se encuentra en el aroma de algunas frutas:</p><p style="text-align:center">CH<sub>3</sub>–CH<sub>2</sub>–COO–CH<sub>3</sub></p><p>¿Cómo se clasifica este compuesto?</p>`,
      alts: ['Como ácido carboxílico', 'Como éster', 'Como cetona', 'Como éter'], ok: 1,
      sol: r`<p><b>Paso 1. Lee el grupo COO.</b> Significa un C con un =O y un –O– que sigue hacia otro carbono (el CH<sub>3</sub> de la derecha).</p>
        <p><b>Paso 2. Clasifica.</b> C=O + O–C en el mismo carbono: <b>éster</b>. Su nombre es propanoato de metilo.</p>
        <p><b>Respuesta:</b> como éster.</p>
        <p><b>¿Por qué no las otras?</b> Un ácido carboxílico terminaría en COOH (con H en el O). Una cetona no tiene el segundo O. Un éter no tiene C=O.</p>`,
      conc: 'COO entre dos carbonos (R–COO–R\') es éster; COOH es ácido.' },
    { src: 'PAES Regular 2026, adaptada',
      enun: r`<p>La siguiente fórmula representa un compuesto usado como solvente en la industria:</p><p style="text-align:center">CH<sub>3</sub>–CH<sub>2</sub>–C≡N</p><p>Dada su fórmula, ¿cómo se clasifica?</p>`,
      alts: ['Como amina', 'Como amida', 'Como alquino', 'Como nitrilo'], ok: 3,
      sol: r`<p><b>Paso 1. Ubica el heteroátomo.</b> Un N unido por un triple enlace a un carbono: C≡N.</p>
        <p><b>Paso 2. Clasifica.</b> El grupo –C≡N es el grupo <b>nitrilo</b>. Contando el C del CN, la cadena tiene 3 C: propanonitrilo.</p>
        <p><b>Respuesta:</b> como nitrilo.</p>
        <p><b>¿Por qué no las otras?</b> Una amina tiene N con solo enlaces simples (–NH<sub>2</sub>). Una amida tiene N unido a un C=O. Un alquino tiene un triple enlace entre dos carbonos y solo C e H.</p>`,
      conc: 'Triple enlace C≡N: nitrilo.' },
    /* Tipo 2: grupos funcionales en moléculas reales (Regular 2026 p. 6; Invierno 2027 p. 70) */
    { src: 'PAES Regular 2026, adaptada',
      enun: r`<p>El paracetamol es un analgésico y antipirético de uso común. Su estructura es:</p><p>¿Qué grupos funcionales están presentes en el paracetamol?</p>`,
      fig: { type: 'img', src: 'paes/quimica/fig/org_paracetamol.svg', alt: 'Fórmula topológica del paracetamol: anillo bencénico con OH y con un grupo NH–CO–CH3 en posiciones opuestas' },
      alts: ['Amina y cetona', 'Amida y alcohol', 'Amida y fenol', 'Éster y fenol'], ok: 2,
      sol: r`<p><b>Paso 1. Heteroátomos.</b> Un O a la izquierda (OH), un N y un O a la derecha.</p>
        <p><b>Paso 2. El OH.</b> Está unido directamente a un C del anillo bencénico: <b>fenol</b>.</p>
        <p><b>Paso 3. El N.</b> Está unido a un C que tiene un C=O: N–C=O es una <b>amida</b>.</p>
        <p><b>Respuesta:</b> amida y fenol.</p>
        <p><b>¿Por qué no las otras?</b> "Amina y cetona" separa el N y el C=O, pero están unidos: juntos son amida. "Alcohol" no sirve, porque el OH está en el anillo aromático. "Éster" requiere un O unido al C=O, y aquí lo que está unido es un N.</p>`,
      conc: 'N unido a un C=O es amida, no amina; OH sobre el anillo es fenol, no alcohol.' },
    { src: 'PAES Invierno 2027, adaptada',
      enun: r`<p>La vanilina es el compuesto responsable del aroma de la vainilla y se usa como saborizante. Su estructura es:</p><p>¿Qué grupos funcionales contiene?</p>`,
      fig: { type: 'img', src: 'paes/quimica/fig/org_vanilina.svg', alt: 'Fórmula de la vanilina: anillo bencénico con un grupo CHO, un grupo O–CH3 y un OH' },
      alts: ['Aldehído, éster y fenol', 'Aldehído, éter y fenol', 'Cetona, éster y alcohol', 'Ácido carboxílico, éter y alcohol'], ok: 1,
      sol: r`<p><b>Paso 1. Arriba.</b> Un C con C=O y un H, unido al anillo: CHO, <b>aldehído</b>.</p>
        <p><b>Paso 2. A la derecha.</b> Un O entre el anillo y un CH<sub>3</sub>, sin C=O al lado: <b>éter</b> (grupo metoxi).</p>
        <p><b>Paso 3. Abajo.</b> Un OH unido al anillo: <b>fenol</b>.</p>
        <p><b>Respuesta:</b> aldehído, éter y fenol.</p>
        <p><b>Comprobación:</b> fórmula C<sub>8</sub>H<sub>8</sub>O<sub>3</sub>: tres O, uno por grupo. ✔</p>
        <p><b>¿Por qué no las otras?</b> "Éster" necesitaría que el C=O y el O–CH<sub>3</sub> estuvieran en el mismo carbono, y están separados. "Cetona" necesitaría el C=O entre dos C, pero aquí tiene un H. "Ácido carboxílico" necesitaría el OH en el mismo C que el C=O. Y el OH está sobre el anillo: es fenol, no alcohol.</p>`,
      conc: 'Revisa cada O por separado y mira con qué está unido.' },
    { src: 'PAES Regular 2026, adaptada',
      enun: r`<p>La adrenalina es una hormona y neurotransmisor que prepara al cuerpo para reaccionar ante el peligro. Su estructura es:</p><p>¿Cuál de los siguientes grupos funcionales <b>no</b> está presente en la adrenalina?</p>`,
      fig: { type: 'img', src: 'paes/quimica/fig/org_adrenalina.svg', alt: 'Fórmula de la adrenalina: anillo bencénico con dos OH y una cadena con un OH y un grupo NH–CH3' },
      alts: ['Amina', 'Alcohol', 'Fenol', 'Amida'], ok: 3,
      sol: r`<p><b>Paso 1. Los OH del anillo.</b> Dos OH unidos al anillo bencénico: <b>fenol</b> (presente).</p>
        <p><b>Paso 2. El OH de la cadena.</b> Está en un C con solo enlaces simples: <b>alcohol</b> (presente).</p>
        <p><b>Paso 3. El N.</b> Está unido a un CH<sub>2</sub>, a un H y a un CH<sub>3</sub>, sin C=O: <b>amina</b> (presente).</p>
        <p><b>Paso 4.</b> En toda la molécula no hay ningún C=O, así que no puede haber amida.</p>
        <p><b>Respuesta:</b> amida.</p>
        <p><b>¿Por qué no las otras?</b> Amina, alcohol y fenol sí están. Confundir amina con amida es el error típico: la amida necesita un C=O unido al N.</p>`,
      conc: 'Sin C=O no hay aldehído, cetona, ácido, éster, anhídrido ni amida.' },
    /* Tipo 3: nombrar compuestos con grupo funcional (Regular 2026 p. 68; Invierno 2027 p. 6) */
    { src: 'PAES Regular 2026, adaptada',
      enun: r`<p>Una docente presenta la siguiente estructura y pide escribir su nombre:</p><p>¿Cuál de los nombres entregados por los estudiantes es correcto?</p>`,
      fig: { type: 'img', src: 'paes/quimica/fig/org_pentanona.svg', alt: 'Fórmula topológica de una cadena de 5 carbonos con un C=O en el segundo carbono' },
      alts: ['Pentanal', 'Pentan-4-ona', 'Pentan-2-ol', 'Pentan-2-ona'], ok: 3,
      sol: r`<p><b>Paso 1. Grupo.</b> El C=O está en un vértice interno, entre dos C: <b>cetona</b> (-ona).</p>
        <p><b>Paso 2. Cadena.</b> 5 C → pentan-.</p>
        <p><b>Paso 3. Numeración.</b> Desde la izquierda, el C=O queda en C2; desde la derecha, en C4. Se elige el número más bajo: 2.</p>
        <p><b>Respuesta:</b> pentan-2-ona.</p>
        <p><b>¿Por qué no las otras?</b> "Pentanal" sería un C=O en el extremo. "Pentan-4-ona" numera desde el extremo equivocado. "Pentan-2-ol" sería un OH, no un C=O.</p>`,
      conc: 'La cetona lleva localizador y se numera para que el C=O tenga el número más bajo.' },
    { src: 'Estilo PAES',
      enun: r`<p>El siguiente éster aporta aroma frutal a algunos jugos:</p><p style="text-align:center">CH<sub>3</sub>–CH<sub>2</sub>–COO–CH<sub>2</sub>–CH<sub>3</sub></p><p>¿Cuál es su nombre?</p>`,
      alts: ['Etanoato de propilo', 'Pentan-3-ona', 'Propanoato de etilo', 'Ácido pentanoico'], ok: 2,
      sol: r`<p><b>Paso 1. Separa el éster</b> en el O que no tiene doble enlace: CH<sub>3</sub>–CH<sub>2</sub>–CO– | –O–CH<sub>2</sub>–CH<sub>3</sub>.</p>
        <p><b>Paso 2. Parte del ácido</b> (la que tiene el C=O): 3 C → propanoato.</p>
        <p><b>Paso 3. Parte del alcohol</b> (unida al O): 2 C → etilo.</p>
        <p><b>Respuesta:</b> propanoato de etilo.</p>
        <p><b>Comprobación:</b> se forma con ácido propanoico + etanol, liberando agua. ✔</p>
        <p><b>¿Por qué no las otras?</b> "Etanoato de propilo" intercambia las partes: sería CH<sub>3</sub>–COO–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>3</sub>. "Pentan-3-ona" no tiene el segundo O. "Ácido pentanoico" tendría un COOH al final.</p>`,
      conc: 'En un éster, "-ato" es la parte con el C=O y "-ilo" la parte unida al O.' },
    { src: 'PAES Invierno 2027, adaptada',
      enun: r`<p>Respecto de la siguiente estructura de un compuesto orgánico:</p><p>¿Cuál es su nombre correcto, según la IUPAC?</p>`,
      fig: { type: 'img', src: 'paes/quimica/fig/org_metilpentanol.svg', alt: 'Fórmula topológica: cadena de 5 carbonos con OH en el segundo carbono y un metilo en el cuarto' },
      alts: ['4-metilpentan-2-ol', '2-metilpentan-4-ol', '4-metilpentan-2-ona', '2-metilpentanal'], ok: 0,
      sol: r`<p><b>Paso 1. Grupo.</b> Un OH en un C con solo simples: alcohol (-ol).</p>
        <p><b>Paso 2. Cadena.</b> La más larga que contiene el C del OH: 5 C → pentan-. La línea que sube del cuarto vértice es un metilo.</p>
        <p><b>Paso 3. Numeración.</b> El grupo funcional tiene prioridad sobre las ramas: desde la izquierda el OH queda en C2 (desde la derecha quedaría en C4). El metilo queda en C4.</p>
        <p><b>Respuesta:</b> 4-metilpentan-2-ol.</p>
        <p><b>¿Por qué no las otras?</b> "2-metilpentan-4-ol" numera para favorecer al metilo, pero el OH manda. "…-2-ona" sería una cetona (C=O, no OH). "Pentanal" sería un aldehído.</p>`,
      conc: 'El grupo funcional fija la numeración antes que las ramificaciones.' },
    /* Tipo 4: características y aplicaciones (Invierno 2026 p. 69) */
    { src: 'PAES Invierno 2026, adaptada',
      enun: r`<p>Muchos sabores artificiales de dulces y bebidas, como los de plátano, piña o frutilla, se obtienen haciendo reaccionar un ácido carboxílico con un alcohol. ¿A qué familia pertenecen esos compuestos aromáticos?</p>`,
      alts: ['Ésteres', 'Aminas', 'Éteres', 'Haluros'], ok: 0,
      sol: r`<p><b>Paso 1. Reacción.</b> Ácido carboxílico + alcohol → éster + agua (esterificación).</p>
        <p><b>Paso 2. Asocia.</b> Los ésteres pequeños son volátiles y tienen olores frutales: etanoato de 3-metilbutilo (plátano), butanoato de etilo (piña).</p>
        <p><b>Respuesta:</b> ésteres.</p>
        <p><b>¿Por qué no las otras?</b> Las aminas pequeñas huelen a pescado. Los éteres no se forman a partir de un ácido carboxílico. Los haluros llevan halógenos (Cl, Br) y no se obtienen así.</p>`,
      conc: 'Ácido + alcohol → éster + agua: los ésteres dan aromas frutales.' },
    { src: 'Estilo PAES',
      enun: r`<p>El etanol (CH<sub>3</sub>–CH<sub>2</sub>–OH) hierve a 78 °C y el metoximetano (CH<sub>3</sub>–O–CH<sub>3</sub>) a −24 °C, a 1 atm. Al respecto, se afirma que:</p><p>I. Son isómeros de función.<br>II. El etanol forma puentes de hidrógeno entre sus moléculas.<br>III. El metoximetano hierve a mayor temperatura porque tiene mayor masa molar.</p><p>¿Cuál(es) es (son) correcta(s)?</p>`,
      alts: ['Solo I', 'Solo II', 'Solo I y II', 'I, II y III'], ok: 2,
      sol: r`<p><b>Paso 1. Afirmación I.</b> Ambos son C<sub>2</sub>H<sub>6</sub>O, pero uno es alcohol y el otro éter: isómeros de función. ✔</p>
        <p><b>Paso 2. Afirmación II.</b> El etanol tiene un H unido a O: forma puentes de hidrógeno. ✔</p>
        <p><b>Paso 3. Afirmación III.</b> Tienen la misma masa molar (46 g/mol) y, además, el metoximetano hierve a <b>menor</b> temperatura (−24 °C). ✘</p>
        <p><b>Respuesta:</b> Solo I y II.</p>
        <p><b>¿Por qué no las otras?</b> "Solo I" o "Solo II" dejan fuera una afirmación correcta. III contradice los datos y la fórmula.</p>`,
      conc: 'A igual fórmula, el alcohol hierve a mayor temperatura que el éter por los puentes de hidrógeno.' },
    { src: 'Estilo PAES',
      enun: r`<p>El enlace que une a los aminoácidos en las proteínas también está presente en el nailon y en el paracetamol. ¿Qué grupo funcional forma ese enlace?</p>`,
      alts: ['Amina', 'Éster', 'Amida', 'Cetona'], ok: 2,
      sol: r`<p><b>Paso 1.</b> Al unirse dos aminoácidos, el COOH de uno reacciona con el NH<sub>2</sub> del otro y se libera agua.</p>
        <p><b>Paso 2.</b> El nuevo enlace es –CO–NH–: un C=O unido a un N, es decir, una <b>amida</b> (enlace peptídico).</p>
        <p><b>Respuesta:</b> amida.</p>
        <p><b>¿Por qué no las otras?</b> El aminoácido tiene un grupo amina, pero al formar el enlace ese N queda unido a un C=O: pasa a ser amida. Un éster tendría O en vez de N. Una cetona no tiene N.</p>`,
      conc: 'Enlace peptídico = amida (–CO–NH–).' },
    /* Tipo 5: habilidades científicas con grupos funcionales (Regular 2026 p. 5; Invierno 2027 p. 69) */
    { src: 'PAES Regular 2026, adaptada',
      enun: r`<p>Un estudiante plantea: "El reactivo de Tollens sirve para diferenciar aldehídos de cetonas". Para comprobarlo, agrega el reactivo a cinco tubos con muestras conocidas y anota los resultados:</p><p>En relación con lo planteado y con los datos, ¿cuál opción es correcta?</p>`,
      fig: { type: 'table', head: ['Tubo', 'Compuesto', 'Reacción con Tollens'], rows: [['1', 'Metanal', '(+)'], ['2', 'Etanal', '(+)'], ['3', 'Propanal', '(+)'], ['4', 'Butanal', '(+)'], ['5', 'Benzaldehído', '(+)']], cap: '(+): hay reacción; (−): no hay reacción' },
      alts: ['Los datos confirman que el reactivo diferencia aldehídos de cetonas.', 'El procedimiento está mal planteado, porque solo ensaya aldehídos y no incluye cetonas.', 'El procedimiento está mal planteado, porque usa demasiados aldehídos distintos.', 'Los datos demuestran que las cetonas no reaccionan con el reactivo de Tollens.'], ok: 1,
      sol: r`<p><b>Paso 1. ¿Qué quiere probar?</b> Que el reactivo <b>diferencia</b> dos familias: aldehídos y cetonas.</p>
        <p><b>Paso 2. ¿Qué hizo?</b> Ensayó solo aldehídos. Todos reaccionaron, pero sin ninguna cetona no hay con qué comparar.</p>
        <p><b>Respuesta:</b> el procedimiento está mal planteado, porque solo ensaya aldehídos.</p>
        <p><b>¿Por qué no las otras?</b> Los datos no pueden confirmar una diferencia si solo hay una familia. Usar varios aldehídos no es un error: el problema es que falta la otra familia. Y nada en la tabla dice cómo reaccionan las cetonas.</p>`,
      conc: 'Para comprobar que algo diferencia dos grupos, hay que ensayar ambos grupos.' },
    { src: 'PAES Invierno 2027, adaptada',
      enun: r`<p>Una profesora pide a sus estudiantes buscar la temperatura de ebullición, a 1 atm, de distintos alcoholes de fórmula C<sub>4</sub>H<sub>10</sub>O. Recopilan lo siguiente:</p><p>De acuerdo con la situación, ¿cuál fue el propósito de buscar esta información?</p>`,
      fig: { type: 'table', head: ['Compuesto', 'Fórmula semidesarrollada', 'T. de ebullición (°C)'], rows: [['butan-1-ol', 'CH<sub>3</sub>–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>2</sub>OH', '117,7'], ['butan-2-ol', 'CH<sub>3</sub>–CH<sub>2</sub>–CH(OH)–CH<sub>3</sub>', '99,5'], ['2-metilpropan-2-ol', '(CH<sub>3</sub>)<sub>3</sub>C–OH', '82,4']] },
      alts: ['Comparar la temperatura de ebullición de alcoholes con distinto largo de cadena.', 'Analizar el efecto de la cantidad de grupos OH en la temperatura de ebullición.', 'Analizar el efecto de la ubicación del grupo OH (alcohol primario, secundario o terciario) en la temperatura de ebullición de isómeros.', 'Comparar la temperatura de ebullición de alcoholes y éteres de igual fórmula molecular.'], ok: 2,
      sol: r`<p><b>Paso 1. ¿Qué tienen en común?</b> Los tres son C<sub>4</sub>H<sub>10</sub>O (isómeros), tienen 4 C y un solo OH.</p>
        <p><b>Paso 2. ¿Qué cambia?</b> El carbono que lleva el OH: en el butan-1-ol está en un extremo (primario), en el butan-2-ol en un C interno (secundario) y en el 2-metilpropan-2-ol en un C unido a otros 3 C (terciario).</p>
        <p><b>Respuesta:</b> analizar el efecto de la ubicación del grupo OH en la temperatura de ebullición de isómeros.</p>
        <p><b>¿Por qué no las otras?</b> El número de carbonos es el mismo en los tres (4). Todos tienen un solo OH. Y en la tabla no hay ningún éter.</p>`,
      conc: 'El propósito de una búsqueda se deduce de lo único que cambia entre los datos.' },
    { src: 'Estilo PAES',
      enun: r`<p>Unos estudiantes comparan la temperatura de ebullición, a 1 atm, de dos pares de compuestos con igual fórmula molecular:</p><p>¿Qué conclusión es coherente con los datos?</p>`,
      fig: { type: 'table', head: ['Compuesto', 'Fórmula molecular', 'Familia', 'T. de ebullición (°C)'], rows: [['etanol', 'C<sub>2</sub>H<sub>6</sub>O', 'alcohol', '78'], ['metoximetano', 'C<sub>2</sub>H<sub>6</sub>O', 'éter', '−24'], ['propan-1-ol', 'C<sub>3</sub>H<sub>8</sub>O', 'alcohol', '97'], ['metoxietano', 'C<sub>3</sub>H<sub>8</sub>O', 'éter', '7']] },
      alts: ['A igual fórmula molecular, el éter hierve a mayor temperatura que el alcohol.', 'La temperatura de ebullición depende solo de la masa molar.', 'Los éteres forman puentes de hidrógeno más fuertes que los alcoholes.', 'A igual fórmula molecular, el alcohol hierve a mayor temperatura que el éter.'], ok: 3,
      sol: r`<p><b>Paso 1. Compara cada par.</b> C<sub>2</sub>H<sub>6</sub>O: alcohol 78 °C, éter −24 °C. C<sub>3</sub>H<sub>8</sub>O: alcohol 97 °C, éter 7 °C.</p>
        <p><b>Paso 2. Tendencia.</b> En ambos pares, con la misma fórmula (y la misma masa molar), el alcohol hierve a mayor temperatura.</p>
        <p><b>Respuesta:</b> a igual fórmula molecular, el alcohol hierve a mayor temperatura que el éter.</p>
        <p><b>Explicación:</b> el alcohol tiene un H unido a O y forma puentes de hidrógeno entre sus moléculas; el éter no.</p>
        <p><b>¿Por qué no las otras?</b> La primera dice lo contrario de los datos. Si dependiera solo de la masa molar, cada par tendría la misma temperatura. Los éteres no tienen H unido a O: no forman puentes de hidrógeno entre sí.</p>`,
      conc: 'Con igual masa molar, los puentes de hidrógeno explican la temperatura de ebullición más alta del alcohol.' }
  ]
},

];
