/* Versión compacta de las clases de bio y módulo (Común/Electivo) de cada diapositiva full: ver COMPACTO y MODULO en paes.html. */
var COMPACTO = COMPACTO || {}, MODULO = MODULO || {};

/* Versión compacta · Biología (Célula, Sistema nervioso, Reproducción)
   Común/Electivo por diapositiva según las pruebas DEMRE Invierno 2026, Regular 2026 e Invierno 2027: en el MC (preguntas 1-18 de Biología)
   salen bacteria y flagelo (Inv26 n.º 1), REL (Inv26 n.º 2), células beta (Inv26 n.º 3), nucléolo y vacuola (Reg26 n.º 1 y 2), enterocito (Reg26 n.º 4),
   mitocondria y endosimbiosis, ruta RER-Golgi y citoesqueleto (Inv27 n.º 1, 2 y 4), y toda la reproducción: gametos, fecundación, ciclo,
   anticonceptivos e ITS (Inv26 n.º 4-9, Reg26 n.º 6-8, Inv27 n.º 5-9). Solo en el ME (55-80): clasificar y comparar tipos celulares (Reg26 n.º 55, 57 y 58),
   la neurona y la teoría neuronal (Inv26 n.º 57 y 59, Inv27 n.º 57) y la fibra muscular (Inv26 n.º 59). Ninguna de las tres pruebas pregunta
   impulso, sinapsis, arco reflejo, drogas ni cuidado del sistema nervioso: impulso y sinapsis siguen a la neurona (electivo); arco reflejo,
   sustancias, cuidados y organización general del sistema nervioso quedan como Común por defecto. */
Object.assign(MODULO, {
  bio_celulas: 'cccceec',
  bio_especializadas: 'cceeccc',
  bio_neurona: 'ceeeeec',
  bio_sinapsis: 'eeccccc',
});
Object.assign(COMPACTO, {
  bio_celulas: [
    { t: 'Teoría celular y procariontes', b: r`
      <p><b>Teoría celular:</b> todo ser vivo está hecho de células; la célula es la unidad estructural y funcional; <b>toda célula viene de otra preexistente</b> (por división); contiene el ADN hereditario. Se consolidó recién en el siglo XIX porque dependía de la <b>microscopía</b> (células de 1 a 100 µm).</p>
      <p><b>Procarionte</b> (bacterias): <b>sin núcleo</b> (ADN circular en el <b>nucleoide</b>) y sin organelos con membrana.</p>
      <table><tbody>
      <tr><td>Pared celular</td><td><b>peptidoglicano</b>: forma y resistencia al agua que entra. La penicilina impide formarla: la bacteria revienta</td></tr>
      <tr><td>Cápsula</td><td>polisacáridos por fuera de la pared: adherirse y <b>evitar la fagocitosis</b></td></tr>
      <tr><td>Flagelo / pili</td><td>nadar en un líquido / adherirse e intercambiar ADN</td></tr>
      <tr><td>Plásmidos</td><td>ADN circular extra (resistencia a antibióticos)</td></tr>
      <tr><td>Ribosomas, membrana</td><td>proteínas / límite que regula el paso</td></tr></tbody></table>` },
    { t: 'Eucariontes: animal y vegetal', b: r`
      <p><b>Eucarionte:</b> núcleo con envoltura doble y poros, organelos con membrana, citoesqueleto, ADN lineal con histonas.</p>
      <ul><li><b>Solo vegetal:</b> pared de <b>celulosa</b>, <b>cloroplastos</b>, <b>vacuola central</b> (agua, iones, pigmentos solubles como el de la betarraga; da turgencia: al marchitarse pierde agua).</li>
      <li><b>Solo animal:</b> <b>centriolos</b> (no en plantas con flor), lisosomas típicos, forma variable.</li>
      <li><b>Ambas:</b> membrana, núcleo, ribosomas, RE, Golgi y <b>mitocondrias</b>.</li></ul>
      <div class="box"><b>Endosimbiosis</b> (Margulis): mitocondrias y cloroplastos fueron procariontes incorporados sin digerir. Evidencias: <b>doble membrana</b>, <b>ADN circular propio</b>, ribosomas tipo bacteriano, se dividen solos.</div>` },
    { t: 'Comparar y clasificar', m: 'e', b: r`
      <table><thead><tr><th></th><th>Bacteria</th><th>Hongo</th><th>Vegetal</th><th>Animal</th></tr></thead><tbody>
      <tr><td>Núcleo / mitocondrias</td><td>no</td><td>sí</td><td>sí</td><td>sí</td></tr>
      <tr><td>Pared</td><td>peptidoglicano</td><td>quitina</td><td>celulosa</td><td>no</td></tr>
      <tr><td>Cloroplastos</td><td>no</td><td>no</td><td>sí</td><td>no</td></tr>
      <tr><td>Centriolos</td><td>no</td><td>no</td><td>no</td><td>sí</td></tr></tbody></table>
      <p>Orden: ¿núcleo? (no → procarionte) → ¿pared? (no → animal) → ¿cloroplastos? (sí → vegetal; pared de quitina sin cloroplastos → hongo).</p>
      <div class="box alert">Membrana, citoplasma, ribosomas y ADN están en <b>todas</b>: no sirven para clasificar. Producir ATP, usar O<sub>2</sub> o liberar CO<sub>2</sub> tampoco (ambas respiran): solo <b>fijar CO<sub>2</sub> y liberar O<sub>2</sub> con luz</b> prueba que es vegetal. Vegetal sin cloroplastos (raíz, epidermis de cebolla): se reconoce por pared de celulosa y vacuola central.</div>` },
  ],

  bio_organelos: [
    { t: 'Membrana, citoesqueleto y núcleo', b: r`
      <p><b>Membrana plasmática:</b> bicapa de fosfolípidos con proteínas y colesterol; semipermeable; glicoproteínas para el reconocimiento. <b>Doble membrana:</b> núcleo, mitocondrias, cloroplastos. <b>Sin membrana:</b> ribosomas, citoesqueleto, centriolos, nucléolo.</p>
      <ul><li><b>Citoesqueleto:</b> forma, resistencia mecánica, transporte de vesículas, migración. Microfilamentos (actina): pseudópodos, contracción, microvellosidades. Filamentos intermedios: tensión. Microtúbulos: rieles de vesículas, <b>huso mitótico</b>, cilios y flagelos (la colchicina los impide).</li>
      <li><b>Cilios</b> (cortos, muchos: tráquea, oviducto) y <b>flagelo</b> (espermatozoide) tienen el mismo esqueleto de microtúbulos: si fallan los cilios, también el flagelo. <b>Centriolos:</b> organizan microtúbulos (animal).</li>
      <li><b>Núcleo:</b> ADN y control; poros. <b>Nucléolo:</b> ARN ribosomal y <b>subunidades de ribosomas</b>.</li>
      <li><b>Ribosomas libres:</b> proteínas que quedan en el citoplasma (hexoquinasa). <b>En el RER:</b> proteínas de secreción (insulina, anticuerpos), de membrana y de lisosomas.</li></ul>` },
    { t: 'Qué hace cada organelo', b: r`
      <table><thead><tr><th>Organelo</th><th>Función</th><th>Si falla…</th></tr></thead><tbody>
      <tr><td>RER</td><td>sintetiza proteínas de secreción</td><td>no se forman</td></tr>
      <tr><td>REL</td><td>lípidos, esteroides, <b>detoxificación</b> (hígado), Ca<sup>2+</sup></td><td>tóxicos acumulados; con fármacos crónicos el REL crece</td></tr>
      <tr><td>Golgi (pila de cisternas)</td><td>modifica, clasifica, empaqueta</td><td>proteínas sin secretar</td></tr>
      <tr><td>Lisosoma</td><td>digestión intracelular (enzimas ácidas)</td><td>material sin digerir acumulado</td></tr>
      <tr><td>Peroxisoma</td><td>oxida ácidos grasos; catalasa degrada H<sub>2</sub>O<sub>2</sub></td><td>H<sub>2</sub>O<sub>2</sub> acumulado</td></tr>
      <tr><td>Mitocondria (crestas)</td><td>respiración celular: ATP</td><td>menos O<sub>2</sub> consumido y menos ATP</td></tr>
      <tr><td>Cloroplasto (tilacoides, estroma)</td><td>fotosíntesis</td><td>sin glucosa ni O<sub>2</sub></td></tr>
      <tr><td>Vacuola central</td><td>agua, reservas, turgencia</td><td>marchitez</td></tr></tbody></table>` },
    { t: 'Ruta de secreción', b: r`
      <p><b>RER → vesícula de transporte → Golgi → vesícula de secreción → membrana (exocitosis).</b></p>
      <p><b>Pulso y caza:</b> aminoácido radiactivo por minutos y luego sin marca; la marca aparece en ese orden. Si un fármaco bloquea un paso, la marca se <b>acumula en el compartimento anterior</b> al bloqueo.</p>
      <div class="box alert">Pide el efecto <b>directo</b> (el primero): nucléolo dañado → menos ribosomas (no "menos proteínas"). Variable independiente = lo que se cambia a propósito; dependiente = lo que se mide (por ejemplo, % de radiactividad); controlada = lo que se mantiene igual.</div>` },
  ],

  bio_especializadas: [
    { t: 'Abunda lo que más se usa', b: r`
      <table><thead><tr><th>Si la célula…</th><th>tiene muchos…</th><th>Ejemplos</th></tr></thead><tbody>
      <tr><td>secreta proteínas</td><td>RER, Golgi, vesículas</td><td>acinar del páncreas, célula beta (insulina), plasmática (anticuerpos)</td></tr>
      <tr><td>hace esteroides o detoxifica</td><td>REL</td><td>Leydig (testosterona), hepatocito</td></tr>
      <tr><td>gasta mucha energía</td><td>mitocondrias</td><td>músculo de vuelo largo, enterocito</td></tr>
      <tr><td>fagocita y digiere</td><td>lisosomas</td><td>neutrófilo, macrófago</td></tr>
      <tr><td>absorbe</td><td>microvellosidades</td><td>enterocito, túbulo renal</td></tr>
      <tr><td>se mueve o mueve líquidos</td><td>flagelo o cilios</td><td>espermatozoide, tráquea</td></tr></tbody></table>
      <div class="box alert">En tablas de % de volumen compara <b>entre células</b>: busca el organelo que destaca y tradúcelo a función.</div>` },
    { t: 'Enterocito y célula acinar', b: r`
      <ul><li><b>Enterocito</b> (intestino delgado, absorbe): <b>microvellosidades</b> apicales (más superficie; si se acortan, se absorbe menos glucosa por unidad de tiempo), <b>mitocondrias</b> basales (transporte activo, bomba Na<sup>+</sup>/K<sup>+</sup>), <b>uniones estrechas</b> (las sustancias pasan a través de la célula), REL y Golgi para las grasas.</li>
      <li><b>Célula acinar</b> (secreta enzimas digestivas): pirámide truncada polarizada. De base a ápice: <b>núcleo y RER</b> (nucléolo grande) → <b>Golgi</b> → <b>gránulos de secreción</b> (exocitosis).</li></ul>` },
    { t: 'Fibra muscular esquelética', m: 'e', b: r`
      <p>Célula larga, <b>multinucleada</b> (núcleos periféricos), estriada: miofibrillas de <b>actina y miosina</b>; muchas mitocondrias; <b>retículo sarcoplásmico</b> (REL que guarda Ca<sup>2+</sup>).</p>
      <div class="box alert">Sin ATP (mitocondrias bloqueadas) la fibra se <b>fatiga antes</b>. Sin liberación de Ca<sup>2+</sup> <b>no se contrae</b> aunque el estímulo nervioso llegue bien.</div>` },
    { t: 'Neurona', m: 'e', b: r`
      <p><b>Dendritas</b> reciben → <b>soma</b> (núcleo, mucho RER) → <b>axón</b> conduce → <b>terminales</b> (mitocondrias y vesículas: liberan neurotransmisores por exocitosis). <b>Mielina</b> (Schwann u oligodendrocitos): aísla y hace saltar el impulso entre nodos de Ranvier; si se pierde (esclerosis múltiple) la conducción se hace <b>más lenta</b>. Ramón y Cajal: cada neurona es una célula independiente.</p>` },
  ],

  bio_neurona: [
    { t: 'Organización del sistema nervioso', b: r`
      <p>Coordina la respuesta a estímulos: receptor (sensitiva) → SNC (integradora) → efector, músculo o glándula (motora).</p>
      <ul><li><b>SNC:</b> encéfalo (cerebro, cerebelo, tronco) y <b>médula espinal</b>; protegido por cráneo, columna, meninges y líquido cefalorraquídeo.</li>
      <li><b>SNP:</b> nervios (12 pares craneales, 31 raquídeos) y ganglios. <b>Somático:</b> músculo esquelético, voluntario. <b>Autónomo:</b> corazón, músculo liso y glándulas, involuntario.</li></ul>
      <table><thead><tr><th>Simpático: «lucha o huida»</th><th>Parasimpático: «reposo y digestión»</th></tr></thead><tbody>
      <tr><td>sube la frecuencia cardíaca, dilata pupilas y bronquios, frena la digestión</td><td>baja la frecuencia cardíaca, contrae pupilas, saliva y aumenta los movimientos del tubo digestivo</td></tr></tbody></table>
      <div class="box alert">El autónomo <b>no</b> controla el músculo esquelético: eso es somático.</div>` },
    { t: 'La neurona', m: 'e', b: r`
      <p><b>Dendritas</b> reciben → <b>soma</b> integra (núcleo) → <b>axón</b> conduce → <b>terminales axónicos</b> liberan neurotransmisor. <b>Mielina</b> (Schwann en SNP, oligodendrocitos en SNC) con <b>nódulos de Ranvier</b>. Tipos: sensitivas (aferentes, al SNC), interneuronas (dentro del SNC), motoras (eferentes, al efector).</p>
      <div class="box">Ramón y Cajal: neuronas independientes. Evidencia: un colorante inyectado en un soma llena esa neurona y <b>no pasa</b> a las vecinas.</div>` },
    { t: 'Potencial de reposo y de acción', m: 'e', b: r`
      <div class="qfig"><img class="tikz" src="paes/biologia/fig/ner_potencial.svg" alt="Gráfico del potencial de membrana en el tiempo: en reposo está en −70 mV; tras el estímulo sube hasta el umbral de −55 mV, luego sube rápido hasta +35 mV (despolarización, entra Na+), baja rápido (repolarización, sale K+), cae hasta −80 mV (hiperpolarización) y vuelve a −70 mV"></div>
      <table><tbody>
      <tr><td>Reposo, −70 mV</td><td>canales de K<sup>+</sup> de fuga; <b>bomba Na<sup>+</sup>/K<sup>+</sup></b> saca 3 Na<sup>+</sup> y mete 2 K<sup>+</sup> gastando ATP</td></tr>
      <tr><td>Despolarización</td><td>umbral ≈ −55 mV: se abren canales de Na<sup>+</sup>, <b>entra Na<sup>+</sup></b> (hasta +30/+40 mV)</td></tr>
      <tr><td>Repolarización</td><td>canales de K<sup>+</sup>: <b>sale K<sup>+</sup></b></td></tr>
      <tr><td>Hiperpolarización</td><td>K<sup>+</sup> sigue saliendo: ≈ −80 mV</td></tr></tbody></table>
      <div class="box alert">Sin bomba (ouabaína, sin ATP): el Na<sup>+</sup> se acumula dentro y el reposo se hace <b>menos negativo</b> (para probarlo, mide el Na<sup>+</sup> interno). Na<sup>+</sup> bloqueado: la curva no sube; K<sup>+</sup> bloqueado: baja lento. La bomba no produce el potencial de acción: lo hacen los canales.</div>` },
    { t: 'Todo o nada y conducción', m: 'e', b: r`
      <ul><li><b>Todo o nada:</b> bajo el umbral no hay impulso; sobre él, siempre la <b>misma amplitud</b>. La intensidad se codifica en la <b>frecuencia</b>.</li>
      <li><b>Período refractario:</b> canales de Na<sup>+</sup> inactivados; el impulso no se devuelve (viaja en un sentido).</li>
      <li><b>Conducción saltatoria:</b> canales de Na<sup>+</sup> concentrados en los nódulos; el impulso salta de nódulo en nódulo, rápido y con menos gasto. Más rapidez: <b>mielina</b> y mayor <b>diámetro</b> (un axón delgado con mielina iguala a uno gigante sin mielina, como el del calamar).</li></ul>` },
  ],

  bio_sinapsis: [
    { t: 'Sinapsis química', m: 'e', b: r`
      <p>Potencial de acción al terminal → entran <b>Ca<sup>2+</sup></b> → vesículas liberan el <b>neurotransmisor</b> (exocitosis) → se une a <b>receptores</b> postsinápticos → cambia el potencial. Espacio de unos 20 nm: solo visible con microscopio electrónico. <b>Unidireccional:</b> vesículas solo en la presináptica, receptores solo en la postsináptica.</p>
      <p>Excitatoria: entra Na<sup>+</sup> (glutamato). Inhibitoria: entra Cl<sup>−</sup> (GABA). Retiro: <b>degradación</b> (acetilcolinesterasa) o <b>recaptación</b> (dopamina, serotonina, noradrenalina).</p>
      <table><tbody>
      <tr><td>Bloquea canales de Ca<sup>2+</sup></td><td>menos neurotransmisor liberado</td></tr>
      <tr><td>Bloquea receptores</td><td>sin efecto (cafeína con adenosina)</td></tr>
      <tr><td>Imita al neurotransmisor</td><td>activa receptores (nicotina con acetilcolina)</td></tr>
      <tr><td>Bloquea recaptación o enzima</td><td>el neurotransmisor dura más (cocaína; insecticidas que inhiben la acetilcolinesterasa)</td></tr></tbody></table>` },
    { t: 'Arco reflejo', b: r`
      <p>Respuesta rápida, involuntaria y predecible: <b>receptor → vía aferente</b> (neurona sensitiva) <b>→ centro elaborador</b> (médula, a menudo con interneurona) <b>→ vía eferente</b> (neurona motora) <b>→ efector</b> (músculo o glándula).</p>
      <p>Es rápido porque se elabora en la médula con pocas sinapsis; la información sube después al encéfalo: retiras la mano y <b>luego</b> sientes el dolor. Rotuliano: sin interneurona.</p>
      <div class="box alert">Corte en una parte del arco: lo de antes funciona, lo de después no. Cortada la vía eferente con la médula sana: <b>siente</b> el pinchazo, pero <b>no hay reflejo</b>.</div>` },
    { t: 'Café, alcohol y drogas', b: r`
      <ul><li><b>Cafeína:</b> ocupa los receptores de <b>adenosina</b> (la señal de cansancio) sin activarlos: menos sueño. Dura horas (≈ 5 h para bajar a la mitad). Exceso: insomnio, ansiedad, taquicardia.</li>
      <li><b>Alcohol:</b> <b>depresor</b> del SNC: alarga el <b>tiempo de reacción</b> aun en dosis bajas, descoordina. En Chile: bajo la influencia &gt; 0,3 g/L; ebriedad desde 0,8 g/L.</li>
      <li><b>Nicotina, cocaína, anfetaminas:</b> estimulantes; <b>marihuana:</b> memoria y coordinación. Las drogas suben la <b>dopamina</b> del circuito de recompensa: <b>tolerancia</b>, abstinencia y adicción.</li></ul>
      <div class="box alert">Para afirmar que una sustancia tiene efecto falta siempre un <b>grupo control</b> sin ella.</div>` },
    { t: 'Cuidar el sistema nervioso', b: r`
      <p><b>Sueño:</b> consolida la memoria. Adolescentes (13-18 años): <b>8 a 10 h</b>; adultos 7 a 9 h. <b>Traumatismos:</b> las neuronas del SNC casi no se reemplazan; casco y cinturón. Lesión de la médula: se pierde sensibilidad y movimiento voluntario <b>bajo</b> la lesión (por ejemplo, al lanzarse de cabeza a aguas poco profundas).</p>` },
  ],

  bio_reproduccion: [
    { t: 'Sistemas reproductores', b: r`
      <table><tbody>
      <tr><td>Ovario</td><td>folículos y ovocitos; estrógeno y progesterona</td></tr>
      <tr><td>Trompa uterina</td><td>fimbrias captan el ovocito; <b>fecundación</b> (tercio externo); cilios lo llevan al útero</td></tr>
      <tr><td>Útero</td><td><b>endometrio</b> (implantación; se desprende en la menstruación); miometrio (parto). Cuello: moco cervical</td></tr>
      <tr><td>Testículo</td><td>túbulos seminíferos: espermatozoides; células de Leydig: testosterona</td></tr>
      <tr><td>Escroto</td><td>2 a 3 °C bajo la temperatura corporal, necesario para formar espermatozoides</td></tr>
      <tr><td>Epidídimo</td><td>maduran (ganan <b>movilidad</b>) y se almacenan</td></tr>
      <tr><td>Conducto deferente</td><td>une el epidídimo con la uretra (se corta en la vasectomía)</td></tr>
      <tr><td>Glándulas</td><td>vesículas seminales (fructosa), próstata (contra la acidez vaginal), bulbouretrales (lubrican)</td></tr></tbody></table>
      <div class="box alert">Trompas obstruidas: ovula y menstrúa, pero los gametos no se encuentran.</div>` },
    { t: 'Gametos y fecundación', b: r`
      <ul><li><b>Espermatozoide:</b> <b>acrosoma</b> (enzimas que digieren corona radiada y zona pelúcida), núcleo con 23 cromosomas (<b>X o Y</b>: define el sexo), pieza intermedia con <b>mitocondrias</b> (ATP del flagelo; si fallan, no se mueve).</li>
      <li><b>Ovocito:</b> 23 cromosomas (siempre X), casi todo el citoplasma y las mitocondrias del cigoto, gránulos corticales; detenido en meiosis II hasta ser fecundado.</li></ul>
      <p><b>Fecundación</b> (trompa): capacitación y orientación (químicos, temperatura) → atraviesa la corona → <b>reacción acrosómica</b> en la zona pelúcida → fusión de membranas → <b>reacción cortical</b> (evita la polispermia) → cigoto de 46.</p>
      <div class="box alert">Las enzimas del acrosoma sirven para la zona pelúcida, no para la fusión de membranas. La ICSI (espermatozoide inyectado) salta acrosoma y reconocimiento, pero no corrige una meiosis anómala ni un endometrio que no permite implantar.</div>` },
    { t: 'Implantación y sexualidad', b: r`
      <p>Cigoto → segmentación (mitosis) → <b>mórula</b> (día 3-4) → <b>blastocisto</b> → se implanta en el <b>endometrio</b> (día 6-7) y produce <b>hCG</b> (la detecta el test de embarazo, solo tras implantarse). Fuera del útero: embarazo ectópico.</p>
      <p><b>Sexualidad:</b> dimensión biológica (hormonas, pubertad), psicológica y afectiva (emociones, vínculos) y social (normas, cultura). Relaciones sanas: <b>consentimiento</b> libre, informado y revocable; respeto, cuidado (preservativo, exámenes de ITS), responsabilidad y comunicación.</p>` },
  ],

  bio_ciclo: [
    { t: 'Ciclo ovárico y uterino', b: r`
      <div class="qfig"><img class="tikz" src="paes/biologia/fig/rep_ciclo_hormonas.svg" alt="Tres paneles alineados en 28 días: FSH y LH con un pico de LH cerca del día 14; barra del ciclo ovárico con fase folicular, ovulación y fase lútea; estrógeno con un máximo antes del día 14 y otro menor en la fase lútea, y progesterona alta solo en la fase lútea; grosor del endometrio que baja en la fase menstrual y sube en las fases proliferativa y secretora"></div>
      <table><thead><tr><th>Días (ciclo de 28)</th><th>Ovario</th><th>Endometrio</th></tr></thead><tbody>
      <tr><td>1-5</td><td>inicio fase folicular</td><td><b>menstrual</b> (cae la progesterona)</td></tr>
      <tr><td>6-13</td><td><b>folicular</b>: FSH hace crecer folículos; uno dominante produce <b>estrógeno</b></td><td><b>proliferativa</b> (estrógeno)</td></tr>
      <tr><td>≈ 14</td><td><b>ovulación</b> por el <b>pico de LH</b></td><td>fin de la proliferativa</td></tr>
      <tr><td>15-28</td><td><b>lútea</b>: el folículo roto forma el <b>cuerpo lúteo</b> (progesterona)</td><td><b>secretora</b> (progesterona)</td></tr></tbody></table>
      <div class="box alert">La fase lútea dura ≈ 14 días fijos: ovulación = duración del ciclo − 14 (ciclo de 32: día 18; ciclo de 30: lútea días 17-30). Pistas: pico agudo = LH; sube solo tras la ovulación = progesterona; dos subidas = estrógeno. Folículo maduro que colapsa y luego cuerpo lúteo = hubo ovulación.</div>` },
    { t: 'Regulación y embarazo', b: r`
      <p><b>Hipotálamo</b> (GnRH) → <b>hipófisis</b> (FSH, LH) → <b>ovario</b> (estrógeno, progesterona) → endometrio.</p>
      <ul><li><b>Retroalimentación negativa:</b> estrógeno y progesterona altos frenan GnRH, FSH y LH: no hay ovulación (así actúa la píldora). Si el ovario deja de producirlas (menopausia), FSH y LH <b>suben</b>. Bloquear la GnRH: sin FSH ni LH, no hay ovulación.</li>
      <li><b>Retroalimentación positiva:</b> estrógeno alto y sostenido provoca el pico de LH (los test de ovulación lo detectan en la orina).</li>
      <li><b>Sin fecundación:</b> el cuerpo lúteo degenera, cae la progesterona y llega la menstruación. <b>Con fecundación:</b> la <b>hCG</b> del embrión mantiene el cuerpo lúteo, la progesterona sigue alta y no hay menstruación; luego la placenta toma el relevo.</li></ul>
      <div class="box alert">Una hormona solo actúa con su receptor: bloquear los receptores de progesterona o tener un endometrio delgado dificulta la <b>implantación</b>.</div>` },
  ],

  bio_natalidad: [
    { t: 'Métodos anticonceptivos', b: r`
      <table><thead><tr><th>Método</th><th>Cómo actúa</th><th>Tipo</th></tr></thead><tbody>
      <tr><td>Billings, calendario, temperatura basal</td><td>evitar los días fértiles</td><td>natural</td></tr>
      <tr><td>Píldora, inyección, implante, anillo, parche</td><td>frenan FSH y LH (retroalimentación negativa): <b>no hay ovulación</b>; espesan el moco</td><td>artificial reversible, hormonal</td></tr>
      <tr><td>Preservativo, diafragma, espermicida</td><td>los gametos no se encuentran; el espermicida inmoviliza o mata espermatozoides</td><td>artificial reversible, barrera</td></tr>
      <tr><td>DIU de cobre</td><td>el cobre afecta a los espermatozoides</td><td>artificial reversible</td></tr>
      <tr><td>Vasectomía (conductos deferentes), ligadura (trompas)</td><td>los gametos no pasan; hormonas, eyaculación y menstruación no cambian</td><td>parcialmente reversible</td></tr></tbody></table>
      <ul><li><b>Días fértiles:</b> de unos 5 días antes de la ovulación al día siguiente. <b>Billings:</b> moco abundante, transparente y elástico = fértil. <b>Temperatura basal:</b> sube 0,3-0,5 °C <b>después</b> de ovular (progesterona); sin alza = no hubo ovulación. Natural = baja eficacia, solo con ciclos regulares.</li>
      <li>La vasectomía (o su reversión) se comprueba con un <b>examen de semen al microscopio</b>.</li></ul>
      <div class="box alert">Solo el <b>preservativo</b> protege además de las ITS. Más eficaces en uso real: los que no dependen de usarse cada vez (implante, DIU, quirúrgicos).</div>` },
    { t: 'Infecciones de transmisión sexual', b: r`
      <table><thead><tr><th>ITS</th><th>Agente</th><th>Claves</th></tr></thead><tbody>
      <tr><td>VIH / sida</td><td>virus</td><td>sexual, sangre, madre-hijo; destruye linfocitos T CD4; antirretrovirales controlan, no curan</td></tr>
      <tr><td>Herpes genital</td><td>virus (VHS)</td><td>contacto de piel o mucosa: el preservativo protege <b>menos</b>; latente, sin cura</td></tr>
      <tr><td>Gonorrea, clamidia, sífilis</td><td>bacterias</td><td>antibióticos; a menudo sin síntomas; clamidia y gonorrea dañan las trompas (infertilidad)</td></tr></tbody></table>
      <p><b>Prevención:</b> preservativo siempre, exámenes periódicos, no compartir jeringas, consultar ante síntomas.</p>
      <div class="box alert">Bacteria → antibiótico; virus → antiviral. Un test es <b>específico</b> si reacciona solo con su agente. En estudios, la pregunta de investigación nombra lo que se compara y lo que se mide.</div>` },
  ],
});

/* Versión compacta · Biología (División celular, Evolución, Ambiente, Habilidades)
   Común/Electivo por diapositiva según las pruebas DEMRE Invierno 2026, Regular 2026 e Invierno 2027: preguntas 1–18 = MC Biología, 55–80 = ME Biología (verificado en los tres cuadernillos).
   En el MC salen ciclo celular y compactación (Inv26 n.º 10), puntos de control (Reg26 n.º 11), cáncer (Inv26 n.º 11, Inv27 n.º 10), etapas de mitosis (Inv27 n.º 11),
   meiosis I y II (Inv26 n.º 12-13, Reg26 n.º 12, Inv27 n.º 12), transgénicos y aplicaciones (Reg26 n.º 13, Inv27 n.º 13), evidencias de la evolución (Reg26 n.º 15, Inv26 n.º 14-15, Inv27 n.º 15),
   selección natural (Reg26 n.º 14, Inv27 n.º 14), fotosíntesis global, factores y experimentos (Inv26 n.º 16-17, Reg26 n.º 16, Inv27 n.º 16-18) y flujo de energía y tramas (Inv26 n.º 18, Reg26 n.º 18).
   Solo en el ME: gráficos de ADN 2c/4c y conteo de cromátidas por etapa (Inv26 n.º 75, Reg26 n.º 68 y 74), enzimas de restricción, plásmidos y pasos de clonación (Inv26 n.º 74, Reg26 n.º 76, Inv27 n.º 69),
   Lamarck (Inv26 n.º 68 y 70), cloroplasto, etapa fotodependiente y ciclo de Calvin (Inv26 n.º 76 y 80, Reg26 n.º 77 y 80, Inv27 n.º 76-78 y 80) y punto de compensación (Inv26 n.º 77, Reg26 n.º 79).
   Lo que no aparece en ninguna prueba (anatomía comparada, árboles, pirámides, indicadores) queda como Común; las habilidades son transversales. */
Object.assign(MODULO, {
  bio_ciclo_celular: 'ccccecc',
  bio_mitosis: 'ccccec',
  bio_ingenieria: 'ceecccc',
  bio_seleccion: 'ecceccc',
  bio_fotosintesis: 'ceeeccc',
  bio_respiracion: 'ccccecc',
});
Object.assign(COMPACTO, {
  bio_ciclo_celular: [
    { t: 'Cromatina y cromosomas', b: r`
      <p><b>Cromatina</b> = ADN + histonas. Compactación: nucleosoma (ADN enrollado en 8 histonas) → fibra → cromosoma. <b>Interfase</b>: descondensada, para leer genes y replicar. <b>División</b>: condensada al máximo en la <b>metafase</b> (ahí se fotografían y cuentan, cariotipo).</p>
      <p>Tras la fase S cada cromosoma tiene dos <b>cromátidas hermanas</b> idénticas unidas por el <b>centrómero</b>. N.º de cromosomas = n.º de centrómeros. <b>Homólogos</b>: par materno + paterno, mismos genes, alelos posiblemente distintos (2n = 46 en humanos).</p>
      <div class="box alert"><b>Trampa</b> Cromátidas hermanas (copias idénticas) ≠ homólogos (uno de cada progenitor).</div>` },
    { t: 'Ciclo, puntos de control y cáncer', b: r`
      <table><tbody>
      <tr><td>G1</td><td>crece, fabrica proteínas, cumple su función. Puede salir a <b>G0</b> (no se divide: neuronas, músculo cardíaco)</td></tr>
      <tr><td>S</td><td>replicación del ADN (incorpora timidina marcada)</td></tr>
      <tr><td>G2</td><td>sigue creciendo, se prepara</td></tr>
      <tr><td>M</td><td>mitosis + citocinesis</td></tr></tbody></table>
      <p>La interfase es &gt;90 % del ciclo: en una muestra al azar, la mayoría de las células está en interfase (n.º de células en una etapa ∝ su duración).</p>
      <table><thead><tr><th>Control</th><th>Revisa</th></tr></thead><tbody>
      <tr><td>G1–S</td><td>tamaño, nutrientes, señales, ADN sin daño (p. ej. tras radiación UV)</td></tr>
      <tr><td>G2–M</td><td>ADN replicado completo y sin daño</td></tr>
      <tr><td>Metafase</td><td>todos los cromosomas unidos al huso</td></tr></tbody></table>
      <p>Si falla algo, el ciclo se detiene; si no se repara, <b>apoptosis</b>. Sin huso (colchicina) → células acumuladas en metafase. <b>Cáncer</b>: mutaciones en protooncogenes (acelerador → oncogén) y supresores de tumores (freno, como <b>p53</b>); sin p53, células con ADN dañado siguen dividiéndose.</p>
      <div class="box alert"><b>Experimento con fármaco</b> Compara con el control: si se acumulan células en una etapa, el fármaco bloquea el paso a la siguiente (más G1 y menos S → bloquea G1–S). Sin cultivo control no se puede atribuir el efecto.</div>` },
    { t: 'Cantidad de ADN en el ciclo', m: 'e', b: r`
      <p>G1: <b>2c</b> → S: sube en rampa → G2 y mitosis: <b>4c</b> → cada hija: <b>2c</b>. El número de cromosomas no cambia (2n): en S se duplican las cromátidas, no los cromosomas (2n = 40: G1 40 cromosomas y 2c; G2 40 cromosomas, 80 cromátidas y 4c).</p>
      <div class="box alert"><b>Gráfico</b> Rampa = fase S. Meseta alta = G2 y M. Caída brusca a la mitad = la célula se dividió. Valores intermedios entre 2c y 4c = células en S.</div>` }
  ],

  bio_mitosis: [
    { t: 'Etapas de la mitosis', b: r`
      <p>Mitosis + citocinesis: 2 células hijas <b>idénticas</b>, 2n → 2n. Cada hija recibe una cromátida de cada cromosoma. Sirve para crecer, desarrollarse, <b>reparar tejidos</b> (cicatrizar) y reproducción asexual (estolones: hija idéntica). Los gametos no se forman por mitosis.</p>
      <table><tbody>
      <tr><td>Profase</td><td>se condensa la cromatina, se desarma la envoltura nuclear, se arma el huso (microtúbulos). Es la <b>más larga</b></td></tr>
      <tr><td>Metafase</td><td>cromosomas duplicados en el plano ecuatorial; punto de control</td></tr>
      <tr><td>Anafase</td><td>se separan las <b>cromátidas hermanas</b> a polos opuestos. Es la <b>más corta</b></td></tr>
      <tr><td>Telofase</td><td>dos núcleos (se rearman las cariotecas), se descondensa</td></tr>
      <tr><td>Citocinesis</td><td>animal: surco de actina y miosina; vegetal: <b>placa celular</b> desde vesículas del Golgi</td></tr></tbody></table>` },
    { t: 'Reconocer en un dibujo', b: r`
      <p>Cromosomas en X = duplicados (2 cromátidas); en V o bastón = simples. Núcleo sin cromosomas visibles = interfase; X en fila al centro = metafase; dos grupos de V hacia los polos = anafase; dos núcleos y surco = telofase.</p>
      <div class="box alert"><b>Trampas</b> Sin actina: hay mitosis pero no citocinesis → células con dos núcleos. Un cromosoma que no se separa (no disyunción) en una célula 2n = 46 → hijas con 47 y 45. Menos células en mitosis → menos crecimiento (p. ej. de la raíz).</div>` },
    { t: 'Cromosomas, cromátidas y ADN', m: 'e', b: r`
      <table><thead><tr><th>2n = 46</th><th>Cromosomas</th><th>Cromátidas</th><th>ADN</th></tr></thead><tbody>
      <tr><td>G1</td><td>46</td><td>46</td><td>2c</td></tr>
      <tr><td>Profase y metafase</td><td>46</td><td>92</td><td>4c</td></tr>
      <tr><td>Anafase (célula completa)</td><td>92</td><td>92</td><td>4c</td></tr>
      <tr><td>Cada hija</td><td>46</td><td>46</td><td>2c</td></tr></tbody></table>
      <p>Cuenta centrómeros para los cromosomas. El ADN sigue en 4c hasta la citocinesis.</p>` }
  ],

  bio_meiosis: [
    { t: 'Meiosis I y II', b: r`
      <p>En células germinales (testículos, ovarios, anteras): <b>una replicación y dos divisiones</b>; de una célula 2n salen <b>4 células n distintas</b>. Fecundación: n + n → 2n.</p>
      <table><tbody>
      <tr><td>Profase I</td><td>homólogos apareados (sinapsis, complejo sinaptonémico) = bivalentes; <b>entrecruzamiento</b></td></tr>
      <tr><td>Metafase I</td><td><b>pares</b> de homólogos en el ecuador, uno a cada lado</td></tr>
      <tr><td>Anafase I</td><td>se separan los <b>homólogos</b> (siguen en X): división reduccional</td></tr>
      <tr><td>Telofase I</td><td>2 células <b>n</b> con cromosomas de 2 cromátidas</td></tr>
      <tr><td>Meiosis II</td><td>sin replicación previa; anafase II separa <b>cromátidas hermanas</b> (como la mitosis)</td></tr></tbody></table>
      <div class="box alert"><b>Dibujo</b> Van X hacia los polos → anafase I. Van V: si cada polo tiene uno de cada tipo (sin pares) → anafase II; si tiene pares → mitosis. 2n = 6 → gametos con 3 cromosomas.</div>` },
    { t: 'Variabilidad y errores', b: r`
      <ul><li><b>Entrecruzamiento</b> (profase I): las cromátidas internas intercambian segmentos en el <b>quiasma</b>; AB y ab dan además Ab y aB (recombinantes).</li>
      <li><b>Permutación</b> (metafase I): orientación al azar de cada par; 2<sup>n</sup> combinaciones (2n = 8 → 2<sup>4</sup> = 16).</li>
      <li>Fecundación al azar. La condensación no genera variabilidad.</li></ul>
      <p>Los quiasmas y la cohesión mantienen unidos a los homólogos hasta la anafase I: <b>menos quiasmas → más no disyunción</b> → gametos n + 1 o n − 1. Gameto n + 1 con uno normal: 2n + 1 (2n = 12 → 13).</p>
      <div class="box alert"><b>Sin meiosis</b> (apomixis, por mitosis): descendencia clon de la madre, menor variabilidad.</div>` },
    { t: 'ADN y comparación con mitosis', b: r`
      <p>2n = 4: G1 2c → metafase I 4c → fin meiosis I: 2 cromosomas, 2 cromátidas c/u, 2c → gametos: c. Perro 2n = 78: tras meiosis I, 39 cromosomas y 78 cromátidas. El gráfico tiene <b>dos caídas</b> (4c → 2c → c).</p>
      <table><thead><tr><th></th><th>Mitosis</th><th>Meiosis</th></tr></thead><tbody>
      <tr><td>Células</td><td>somáticas</td><td>germinales</td></tr>
      <tr><td>Resultado</td><td>2 células 2n idénticas</td><td>4 células n distintas</td></tr>
      <tr><td>Apareamiento y entrecruzamiento</td><td>no</td><td>sí (profase I)</td></tr>
      <tr><td>Se separan</td><td>cromátidas</td><td>homólogos (I), cromátidas (II)</td></tr></tbody></table>` }
  ],

  bio_ingenieria: [
    { t: 'Conceptos y aplicaciones', b: r`
      <p><b>Manipulación genética</b>: modificar el ADN (cortar, copiar, trasladar genes). <b>ADN recombinante</b>: ADN de dos orígenes unido. <b>Transgénico</b>: lleva y expresa un gen de <b>otra especie</b> (cabra con gen humano). Un clon (Dolly) o un cruzamiento no son transgénicos. Funciona porque el <b>código genético es universal</b>: la bacteria fabrica la misma proteína humana.</p>
      <table><tbody>
      <tr><td>Alimentos</td><td>maíz Bt (gen de la toxina de <i>Bacillus thuringiensis</i>, más producción); arroz dorado (genes de betacaroteno insertados en el ADN del arroz)</td></tr>
      <tr><td>Detergentes</td><td>proteasas (sangre, proteínas), lipasas (grasa), amilasas (almidón)</td></tr>
      <tr><td>Vestuario</td><td>algodón Bt: se protege solo de larvas, menos insecticida</td></tr>
      <tr><td>Fármacos</td><td>insulina humana en bacterias: idéntica a la humana, en gran cantidad, sin animales</td></tr></tbody></table>
      <div class="box alert"><b>Debate</b> Riesgos investigables: paso del gen a plantas silvestres por polinización, plagas resistentes, alergias. Las preguntas de valores (patentes, etiquetado) no se responden con experimentos.</div>` },
    { t: 'Herramientas y clonación de un gen', m: 'e', b: r`
      <ul><li><b>Enzima de restricción</b>: corta en una secuencia específica y deja extremos cohesivos. Gen y plásmido con la <b>misma</b> enzima para que encajen.</li>
      <li><b>ADN ligasa</b>: une los fragmentos (aquí se forma el ADN recombinante).</li>
      <li><b>Plásmido</b>: ADN circular bacteriano, vector; suele llevar genes de resistencia a antibióticos.</li></ul>
      <p><b>Orden</b>: obtener el gen → cortar gen y plásmido → unir con ligasa → introducir en la bacteria → seleccionar con antibiótico → multiplicar y producir la proteína (finalidad). En plantas, el plásmido de <i>Agrobacterium tumefaciens</i> inserta el gen.</p>
      <div class="box alert"><b>Trampas</b> Lineal con k cortes: k + 1 fragmentos; circular: k. Si el gen se inserta dentro de un gen de resistencia, esa resistencia se pierde (crece en ampicilina, no en tetraciclina).</div>` }
  ],

  bio_evidencias: [
    { t: 'Anatomía y embriología', b: r`
      <p>Evolución: cambio heredable de las <b>poblaciones</b> en generaciones; descendencia con modificación desde un <b>ancestro común</b> (un individuo no evoluciona).</p>
      <table><tbody>
      <tr><td>Homólogas</td><td>mismo origen y plan, función distinta → ancestro común (divergencia): brazo, aleta de delfín o ballena, ala de murciélago, todos con húmero, radio y cúbito, carpos, metacarpos y falanges</td></tr>
      <tr><td>Análogas</td><td>misma función, distinto origen → convergencia, no parentesco: ala de mariposa y de ave</td></tr>
      <tr><td>Vestigiales</td><td>reducidas → ancestros con la estructura desarrollada: pelvis de ballena, cóccix</td></tr>
      <tr><td>Embriología</td><td>embriones de vertebrados con arcos faríngeos y cola → ancestro común</td></tr></tbody></table>
      <div class="box alert"><b>Variables</b> Si se comparan embriones de dos especies: independiente = la especie; dependiente = lo medido (día en que aparece la estructura).</div>` },
    { t: 'Molecular, fósiles y árboles', b: r`
      <p><b>Biología molecular</b>: comparar un mismo gen o proteína (citocromo c, hemoglobina). <b>Menos diferencias o más % de similitud = ancestro común más reciente</b>. Es lo más directo para saber parentesco (no el tamaño, color o metabolismo).</p>
      <p><b>Registro fósil</b>: en estratos no alterados, <b>más abajo = más antiguo</b>; mismo estrato = misma época. Fósiles de transición: <i>Tiktaalik</i> (pez-tetrápodo), <i>Archaeopteryx</i> (reptil-ave).</p>
      <p><b>Árbol</b>: cada nodo es un ancestro común; más emparentadas = nodo compartido más reciente (lagarto más cercano al ave que al ratón). Girar ramas no cambia el árbol; las especies actuales no descienden unas de otras, comparten ancestros.</p>
      <img class="tikz" src="paes/biologia/fig/evo_arbol.svg" alt="Árbol filogenético con pez, rana, ratón, lagarto y ave; primero se separa el pez, luego la rana, luego el ratón, y lagarto y ave son las especies más emparentadas">
      <div class="box alert"><b>Qué no permite concluir</b> Una tabla de similitud no dice qué especie apareció primero ni descarta parentesco (similitudes de 40 % ya indican relación). Los estratos no dicen la causa de una extinción ni quién desciende de quién.</div>` }
  ],

  bio_seleccion: [
    { t: 'Lamarck frente a Darwin', m: 'e', b: r`
      <p><b>Lamarck</b> (1809): uso y desuso, <b>herencia de los caracteres adquiridos</b>, cambio por necesidad (jirafa que estira el cuello). Se descarta: lo adquirido no modifica el ADN de los gametos (Weismann cortó colas de ratones: crías con cola normal).</p>
      <table><thead><tr><th></th><th>Lamarck</th><th>Darwin y Wallace</th></tr></thead><tbody>
      <tr><td>Variación</td><td>surge durante la vida</td><td>ya existe y es heredable</td></tr>
      <tr><td>Ambiente</td><td>provoca el cambio</td><td>selecciona</td></tr>
      <tr><td>Cambia</td><td>el individuo</td><td>la población</td></tr></tbody></table>
      <div class="box alert">«Se acostumbrarán y lo heredarán», «se atrofió por no usarse y se heredó» = lamarckista.</div>` },
    { t: 'Selección natural', b: r`
      <p>Darwin y Wallace llegaron por separado (1858); Darwin publicó <i>El origen de las especies</i> (1859).</p>
      <p><b>Orden</b>: variación heredable → sobreproducción y competencia → supervivencia y <b>reproducción diferencial</b> → aumenta la frecuencia del rasgo favorable en la población.</p>
      <p><b>Adaptación</b>: rasgo heredable que aumenta la supervivencia o el <b>éxito reproductivo</b> (cola larga que atrae hembras también lo es). La selección actúa sobre individuos; cambia la población.</p>
      <div class="box alert"><b>Condición indispensable</b> Variación heredable previa (plantas con distinta tolerancia al cobre). La variación surge al azar (mutación, recombinación); el ambiente no la crea.</div>` },
    { t: 'Ejemplos y predicciones', b: r`
      <ul><li><b>Camuflaje</b>: polilla moteada (troncos oscuros → más oscuras; troncos limpios → bajan), saltamontes o ratones según el color del suelo: aumenta la variante menos visible para el depredador.</li>
      <li><b>Pinzones</b>: tras sequía con semillas duras, sobreviven los de pico profundo; desde un ancestro, picos distintos según el alimento de cada isla.</li>
      <li><b>Antibióticos y pesticidas</b>: los resistentes ya estaban; el producto es la <b>presión de selección</b>, mata a los sensibles y los resistentes se multiplican. Antibióticos no sirven contra virus; usarlos sin necesidad aumenta la resistencia.</li></ul>
      <div class="box alert"><b>Tabla de + y −</b> por tiempo y producto: la pregunta es «¿cuánto tiempo de exposición tarda en aparecer la resistencia a cada uno?», no el mecanismo.</div>` }
  ],

  bio_fotosintesis: [
    { t: 'Ecuación y factores', b: r`
      <p style="text-align:center"><b>6 CO<sub>2</sub> + 6 H<sub>2</sub>O → C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6 O<sub>2</sub></b> (luz, clorofila)</p>
      <p>Autótrofos fotosintéticos. CO<sub>2</sub> entra por los estomas; la glucosa se usa o se guarda como <b>almidón</b>; energía luminosa → química. El <b>O<sub>2</sub> viene del agua</b>; el carbono de la glucosa, del CO<sub>2</sub>.</p>
      <ul><li>Luz y CO<sub>2</sub>: la tasa sube y se satura. Temperatura: <b>óptimo</b>; fuera del rango las enzimas no funcionan (no hay O<sub>2</sub>).</li>
      <li><b>Factor limitante</b>: el que al aumentarlo sube la tasa. En la meseta de la curva de luz limita otro factor (CO<sub>2</sub>): con más CO<sub>2</sub> la meseta sube.</li></ul>
      <div class="box alert">Menos producción de hidratos de carbono → baja luz (más CO<sub>2</sub> no la baja). Compara curvas en el mismo valor del eje x.</div>` },
    { t: 'Experimentos', b: r`
      <ul><li><b>Elodea</b>: independiente = distancia de la lámpara (intensidad de luz); dependiente = burbujas de O<sub>2</sub>/min; controladas = temperatura y bicarbonato. Más cerca, más burbujas.</li>
      <li><b>Isótopos</b>: un grupo con H<sub>2</sub>O marcada y CO<sub>2</sub> normal, otro al revés: el O<sub>2</sub> sale marcado solo con agua marcada.</li>
      <li><b>Lugol</b> tiñe el almidón: hojas con estomas tapados (sin CO<sub>2</sub>) se tiñen menos; en hojas variegadas solo las zonas verdes (con clorofila).</li></ul>` },
    { t: 'Cloroplasto y etapas', m: 'e', b: r`
      <img class="tikz" src="paes/biologia/fig/amb_etapas.svg" alt="Esquema de las dos etapas: en los tilacoides entran luz y agua, sale O2 y se forman ATP y NADPH que pasan al estroma; en el estroma entra CO2, el ciclo de Calvin lo fija con la RuBisCO y sale glucosa; ADP, Pi y NADP+ vuelven a los tilacoides">
      <table><thead><tr><th>Etapa</th><th>Lugar</th><th>Entra</th><th>Sale</th></tr></thead><tbody>
      <tr><td>Fotodependiente</td><td>membrana de los <b>tilacoides</b> (clorofila)</td><td>luz, H<sub>2</sub>O</td><td>O<sub>2</sub> (fotólisis), ATP, NADPH</td></tr>
      <tr><td>Ciclo de Calvin</td><td><b>estroma</b> (RuBisCO)</td><td>CO<sub>2</sub>, ATP, NADPH</td><td>glucosa, ADP, NADP<sup>+</sup></td></tr></tbody></table>
      <div class="box alert">Fijar CO<sub>2</sub> o «captar carbono» → estroma. Producir O<sub>2</sub> → tilacoides. A oscuras el Calvin sigue un instante y se detiene (se agotan ATP y NADPH). Si más CO<sub>2</sub> sube la tasa, las enzimas del Calvin estaban subutilizadas.</div>` }
  ],

  bio_respiracion: [
    { t: 'Nutrición y respiración celular', b: r`
      <p><b>Autótrofos</b>: carbono del CO<sub>2</sub>; fotosintéticos (luz) o <b>quimiosintéticos</b> (energía química, p. ej. bacterias de fuentes hidrotermales que oxidan H<sub>2</sub>S). <b>Heterótrofos</b>: materia orgánica de otros. <b>Todos respiran</b>.</p>
      <p style="text-align:center"><b>C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6 O<sub>2</sub> → 6 CO<sub>2</sub> + 6 H<sub>2</sub>O + ATP y calor</b></p>
      <p>Glucólisis en el citoplasma (2 ATP); ciclo de Krebs en la matriz (libera CO<sub>2</sub>); cadena en las crestas (O<sub>2</sub> → H<sub>2</sub>O, casi todo el ATP). Sin O<sub>2</sub>: fermentación, 2 ATP.</p>
      <div class="box alert">Reactantes: glucosa y O<sub>2</sub> (CO<sub>2</sub> y H<sub>2</sub>O son productos). Mitocondrias + distintas [O<sub>2</sub>] + ATP medido → hipótesis: la síntesis de ATP depende del O<sub>2</sub>.</div>` },
    { t: 'Procesos complementarios e indicadores', b: r`
      <p>Los productos de una son los reactantes de la otra: la materia circula, la energía no (entra como luz, sale como calor). Fotosíntesis: cloroplasto, solo con luz, almacena energía. Respiración: mitocondria, <b>siempre</b> (también de día en las plantas), libera energía. El CO<sub>2</sub> de la respiración de un coral o una salamandra puede terminar en la glucosa de sus algas.</p>
      <p><b>Azul de bromotimol</b>: amarillo = más CO<sub>2</sub>; azul = menos. Elodea a la luz → azul; a oscuras, caracol o aire soplado → amarillo. Semillas germinando: CO<sub>2</sub> y calor.</p>
      <div class="box alert"><b>Control</b> Tubo sin organismo o semillas hervidas: muestra que el cambio se debe a seres vivos.</div>` },
    { t: 'Punto de compensación', m: 'e', b: r`
      <p>De noche solo respira. <b>Pc</b>: fotosíntesis = respiración; O<sub>2</sub> producido = consumido, intercambio neto cero (ambos procesos ocurren). Con más luz que Pc capta CO<sub>2</sub> y crece; con menos, gasta más materia orgánica de la que fabrica. En 24 h hay dos Pc (amanecer y atardecer); entre ellos capta más CO<sub>2</sub> del que libera.</p>` }
  ],

  bio_flujo: [
    { t: 'Niveles y tramas', b: r`
      <p><b>Productores</b> (autótrofos) → consumidores <b>primarios</b> (herbívoros) → secundarios → terciarios. <b>Descomponedores</b> (hongos, bacterias) degradan restos y devuelven CO<sub>2</sub> y minerales (sin ellos se acumulan restos y el suelo se empobrece). Flechas: del alimento a quien lo come.</p>
      <ul><li>Contar cadenas: desde cada productor, todos los caminos hasta el último consumidor (no olvides las cortas).</li>
      <li>Una especie puede tener dos niveles (secundario y terciario).</li>
      <li>Si desaparece una presa, queda sin alimento solo quien come <b>únicamente</b> esa presa.</li></ul>
      <div class="box alert">En tablas de biomasa por año, describe solo la tendencia de los números (Y y Z bajan juntos), sin inventar causas.</div>` },
    { t: 'Energía y pirámides', b: r`
      <p>Luz → energía química → calor. Flujo <b>unidireccional</b>; la materia se recicla. En cada nivel la mayor parte se usa en la <b>respiración</b> y se pierde como calor: pasa cerca del <b>10 %</b> (×0,1 hacia arriba, ×10 hacia abajo: 150 kJ en secundarios → 15 000 kJ en productores).</p>
      <p>Eficiencia de una planta = biomasa / luz absorbida. Pirámide de <b>energía</b>: nunca se invierte; de números (un árbol, miles de orugas) y de biomasa (fitoplancton) sí.</p>
      <div class="box alert">Los descomponedores no devuelven energía a los productores. La energía no se conserva dentro del ecosistema.</div>` },
    { t: 'Ciclos del carbono y del oxígeno', b: r`
      <p><b>Retira CO<sub>2</sub></b>: solo la fotosíntesis. <b>Devuelve CO<sub>2</sub></b>: respiración de productores, consumidores y descomponedores, y combustión. Restos sepultados por millones de años → combustibles fósiles.</p>
      <p><b>Oxígeno</b>: la fotosíntesis libera O<sub>2</sub> desde el agua; la respiración lo consume y forma agua.</p>
      <p><b>Curva de CO<sub>2</sub> (Hawái)</b>: sube por combustibles fósiles y deforestación; oscila cada año por la fotosíntesis (baja en el verano del norte). Quemar un bosque: libera su carbono y deja de fijarse CO<sub>2</sub>.</p>` }
  ],

  bio_hab_investigacion: [
    { t: 'Pregunta, hipótesis y predicción', b: r`
      <p>Observación → pregunta → hipótesis → predicción → procedimiento → resultados → conclusión → comunicar.</p>
      <ul><li><b>Pregunta investigable</b>: se responde midiendo; calza con lo que se varió y lo que se midió («¿cómo varía la frecuencia cardíaca durante y después del ejercicio en deportistas y no deportistas?»). Opiniones o el futuro lejano no.</li>
      <li><b>Hipótesis</b>: respuesta tentativa, antes del experimento, que relaciona la variable que cambia con la medida («la temperatura influye en la producción de CO<sub>2</sub> de la levadura»). No habla de variables que se mantuvieron iguales.</li>
      <li><b>Predicción</b>: resultado concreto esperado, «si…, entonces…».</li></ul>
      <p><b>Buen procedimiento</b>: varios valores de la independiente bien separados (10, 20, 30, 40 °C), todo lo demás igual, medición definida de la dependiente y repeticiones de cada condición.</p>
      <div class="box alert">El experimento apoya o contradice la hipótesis; no la «demuestra» para siempre.</div>` },
    { t: 'Variables, control e instrumentos', b: r`
      <table><tbody>
      <tr><td>Independiente</td><td>la que se cambia a propósito (distancia de la lámpara, concentración, especie, filtros de color)</td></tr>
      <tr><td>Dependiente</td><td>la que se mide al final (burbujas, semillas germinadas, largo de la raíz)</td></tr>
      <tr><td>Controladas</td><td>las que quedan iguales (tiempo en el medio, temperatura, n.º inicial de células)</td></tr></tbody></table>
      <p>Frase: «el efecto de [independiente] sobre [dependiente]». <b>Grupo control</b>: igual a los demás, sin el factor (discos solo con el agua del extracto; placebo). Compara solo grupos que difieren en <b>una</b> variable; ensayos que cambian dos o tres no sirven.</p>
      <p>Instrumentos: masa → balanza; longitud → regla; volumen de líquido → probeta; gas → jeringa o probeta invertida; temperatura → termómetro; tiempo → cronómetro; pH → pHmetro.</p>
      <div class="box alert"><b>Error de procedimiento</b> Cambiar una variable que debía ser controlada (distinta cantidad inicial de hongos) impide concluir. Para resolver una discusión, mide lo que la decide (masa del árbol y del suelo al inicio y al final). Controla la temperatura que agrega la lámpara (agua entre lámpara y vaso).</div>` },
    { t: 'Componentes de la investigación', b: r`
      <table><tbody>
      <tr><td>Teoría</td><td>explica por qué; mucha evidencia (teoría celular, selección natural)</td></tr>
      <tr><td>Ley</td><td>describe qué pasa (leyes de Mendel)</td></tr>
      <tr><td>Modelo</td><td>representación simplificada (doble hélice, mosaico fluido)</td></tr>
      <tr><td>Marco conceptual</td><td>lo que ya se sabe</td></tr>
      <tr><td>Objetivo</td><td>verbo en infinitivo: determinar, evaluar, comparar</td></tr>
      <tr><td>Procedimiento</td><td>«se cortó, se tiñó, se midió»</td></tr>
      <tr><td>Resultado</td><td>datos: «se contaron 42 células»</td></tr>
      <tr><td>Inferencia</td><td>va más allá de lo observado: «podría indicar»</td></tr>
      <tr><td>Conclusión</td><td>responde la pregunta con los resultados</td></tr></tbody></table>` }
  ],

  bio_hab_evidencia: [
    { t: 'Tablas, gráficos y relaciones', b: r`
      <p>Lee encabezados, ejes, unidades y escala; recorre la variable que crece y mira la otra en <b>todas</b> las filas. Si la alternativa dice «al disminuir…», recórrela al revés.</p>
      <table><tbody>
      <tr><td>Directa</td><td>suben juntas</td></tr>
      <tr><td>Directamente proporcional</td><td>y/x constante; recta por el origen</td></tr>
      <tr><td>Inversa</td><td>una sube, la otra baja (masa corporal y frecuencia cardíaca)</td></tr>
      <tr><td>Inversamente proporcional</td><td>x·y constante (catalasa 1·80 = 2·40 = 4·20 = 8·10)</td></tr></tbody></table>
      <p><b>Óptimo</b>: x donde la curva es máxima (enzima humana 37 °C, termófila 70 °C; pepsina pH 2, amilasa pH 7). Sobre el óptimo la enzima se desnaturaliza. Compara curvas en el mismo x.</p>
      <div class="box alert">Inferencia de tablas +/−: «X es necesaria pero no suficiente» si sin X nunca ocurre y con X a veces no. Una asociación en un gráfico de dispersión no prueba causa.</div>` },
    { t: 'Tendencias y predicción', b: r`
      <p><b>Interpolar</b> (dentro del rango) es seguro: si se duplica cada 10 °C (0,10; 0,20; 0,40), a 25 °C ≈ 0,3. <b>Extrapolar</b> lejos del rango no vale. Si los aumentos se achican (+12, +12, +6, +1), se acerca a una <b>meseta</b>: a 10 % ≈ el último valor. En una curva de bacterias: fase sin cambio, fase que se duplica cada hora, meseta.</p>
      <p>Varias curvas: con poco factor X coinciden (limita X); en la meseta limita otro factor, y con más de ese factor la meseta sube.</p>
      <p>Dos especies con óptimos distintos (A a 20 °C, B a 30 °C): «en el rango estudiado, A germina mejor a temperaturas más bajas». Predicción dentro del rango: néctar de 35 % entre los valores de 30 y 40 % → más visitas que con 20 %.</p>
      <div class="box alert">Una conclusión no agrega variables que no se midieron ni valores fuera del rango.</div>` },
    { t: 'Cálculos simples', b: r`
      <table><tbody>
      <tr><td>Promedio</td><td>suma / cantidad (compara promedios, no un valor aislado de 19 cm)</td></tr>
      <tr><td>Variación porcentual</td><td>(final − inicial) / <b>inicial</b> · 100 (400 → 640: 240/400 = 60 %)</td></tr>
      <tr><td>Eficiencia</td><td>obtenido / usado (kg de grano por m<sup>3</sup> de agua)</td></tr></tbody></table>
      <div class="box alert">«Más eficiente» o «mayor aumento porcentual» piden un cociente, no el número más grande. Dividir por el valor final es el error típico.</div>` }
  ],

  bio_hab_evaluar: [
    { t: 'Validez, confiabilidad y diseño', b: r`
      <p><b>Validez</b>: se mide lo que se quiere medir y el diseño permite concluir (medir frecuencia cardíaca cuando el objetivo es la respiratoria no es válido). <b>Confiabilidad</b>: al repetir se obtiene algo parecido; mejora con <b>más individuos de la misma especie</b>, repeticiones e instrumentos precisos (pulsómetro con valores cercanos entre sí). Preciso = valores cercanos entre sí; exacto = cercanos al real.</p>
      <table><thead><tr><th>Limitación</th><th>Mejora</th></tr></thead><tbody>
      <tr><td>un solo individuo o ensayo</td><td>más individuos y repeticiones</td></tr>
      <tr><td>falta grupo control</td><td>grupo igual sin el factor (mismo jarabe sin insecticida)</td></tr>
      <tr><td>grupos difieren en dos variables (ventana y pasillo)</td><td>mismo lugar, luz, riego, edad</td></tr>
      <tr><td>no se alcanza el efecto</td><td>ampliar el rango (más NaCl)</td></tr>
      <tr><td>se probaron solo casos positivos</td><td>incluir casos negativos (alimentos sin almidón)</td></tr></tbody></table>` },
    { t: 'Conclusiones y alcance', b: r`
      <p>Una conclusión sale de los datos, habla solo de lo medido y vale para esa especie, rango, tipo de muestra (in vitro ≠ organismo) y condiciones. Expresiones correctas: «en las condiciones del estudio», «en el rango estudiado», «podría».</p>
      <ul><li><b>Resultado</b> = datos. <b>Conclusión</b> = responde la pregunta («en las personas estudiadas, reducir la sal disminuyó la presión»). <b>Inferencia</b> = va más allá, «podría».</li>
      <li>Estudio de <b>observación</b> (solo registra): muestra asociación, no causa; para causa hace falta un experimento que controle las demás variables.</li>
      <li>Frascos abierto, con gasa y sellado: las larvas vienen de huevos de mosca.</li></ul>
      <div class="box alert">Desconfía de «todas las bacterias», «cura», «siempre», «demuestra», o de un valor fuera del rango medido.</div>` },
    { t: 'Comunicar', b: r`
      <table><tbody>
      <tr><td>cambio en el tiempo o con otra variable continua</td><td>gráfico de líneas (independiente en el eje x)</td></tr>
      <tr><td>comparar categorías o tratamientos</td><td>barras</td></tr>
      <tr><td>reparto de un total (100 %)</td><td>circular</td></tr>
      <tr><td>relación entre dos variables medidas en muchos individuos</td><td>dispersión</td></tr>
      <tr><td>valores exactos / estructura o proceso</td><td>tabla / esquema o modelo</td></tr></tbody></table>
      <p>Un procedimiento descrito con detalle es <b>replicable</b>; un resultado que se repite es <b>reproducible</b>.</p>` }
  ]
});
