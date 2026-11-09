/* Tarjetas «Memoriza» de PAES Biología (Fabimath): completar la frase con una palabra, sin alternativas.
   Una lista por tema (id de paes_biologia_*.js); cada tarjeta { p: frase con ___, r: [respuesta canónica, otras aceptadas] }.
   Salen solo de lo que dicen las diapositivas del tema. El motor está en paes.html (startFlash). */
const FLASH = {
 "bio_celulas": [
  {
   "p": "Robert Hooke llamó ___ a las pequeñas cavidades que vio en una lámina de corcho.",
   "r": [
    "células",
    "célula"
   ]
  },
  {
   "p": "Según la teoría celular, toda célula proviene de otra célula ___.",
   "r": [
    "preexistente"
   ]
  },
  {
   "p": "La teoría celular afirma que la célula es la unidad estructural y ___ de los seres vivos.",
   "r": [
    "funcional"
   ]
  },
  {
   "p": "La teoría celular dependió del avance de la ___, porque casi todas las células son muy pequeñas.",
   "r": [
    "microscopía",
    "microscopia"
   ]
  },
  {
   "p": "Las células procariontes se caracterizan por no tener ___.",
   "r": [
    "núcleo",
    "nucleo"
   ]
  },
  {
   "p": "En las células procariontes, el ADN circular está en una zona del citoplasma llamada ___.",
   "r": [
    "nucleoide"
   ]
  },
  {
   "p": "La pared celular de las bacterias está hecha de ___.",
   "r": [
    "peptidoglicano"
   ]
  },
  {
   "p": "La ___ es una capa externa de polisacáridos de algunas bacterias que evita que las fagociten los glóbulos blancos.",
   "r": [
    "cápsula",
    "capsula"
   ]
  },
  {
   "p": "Los ___ son pequeñas moléculas de ADN circular extra de las bacterias, con genes como los de resistencia a antibióticos.",
   "r": [
    "plásmidos",
    "plasmidos",
    "plásmido"
   ]
  },
  {
   "p": "En las células eucariontes, el ADN lineal está asociado a proteínas llamadas ___.",
   "r": [
    "histonas",
    "histona"
   ]
  },
  {
   "p": "Lynn Margulis propuso la teoría ___, según la cual mitocondrias y cloroplastos fueron procariontes incorporados por otra célula.",
   "r": [
    "endosimbiótica",
    "endosimbiotica",
    "endosimbiosis"
   ]
  },
  {
   "p": "La pared celular de las células vegetales está hecha de ___.",
   "r": [
    "celulosa"
   ]
  },
  {
   "p": "Los cloroplastos de la célula vegetal realizan la ___.",
   "r": [
    "fotosíntesis",
    "fotosintesis"
   ]
  },
  {
   "p": "La vacuola central de la célula vegetal mantiene la firmeza o ___ de la célula.",
   "r": [
    "turgencia"
   ]
  },
  {
   "p": "Los ___ son estructuras que la célula animal tiene y las plantas con flor no.",
   "r": [
    "centriolos",
    "centriolo"
   ]
  }
 ],
 "bio_organelos": [
  {
   "p": "La membrana plasmática es una bicapa de ___ con proteínas.",
   "r": [
    "fosfolípidos",
    "fosfolipidos"
   ]
  },
  {
   "p": "Los tres tipos de filamentos del citoesqueleto son los microfilamentos, los filamentos intermedios y los ___.",
   "r": [
    "microtúbulos",
    "microtubulos"
   ]
  },
  {
   "p": "Los microfilamentos del citoesqueleto están formados por la proteína ___.",
   "r": [
    "actina"
   ]
  },
  {
   "p": "Los ___ son cilindros de microtúbulos que organizan los microtúbulos durante la división celular en células animales.",
   "r": [
    "centriolos",
    "centriolo"
   ]
  },
  {
   "p": "En el nucléolo se fabrica el ARN ___ y se arman las subunidades de los ribosomas.",
   "r": [
    "ribosomal"
   ]
  },
  {
   "p": "Los ribosomas sintetizan proteínas leyendo el ARN ___.",
   "r": [
    "mensajero"
   ]
  },
  {
   "p": "El retículo endoplasmático ___ está cubierto de ribosomas y sintetiza proteínas de secreción y de membrana.",
   "r": [
    "rugoso",
    "RER"
   ]
  },
  {
   "p": "El retículo endoplasmático liso sintetiza lípidos y hormonas ___, como testosterona y cortisol.",
   "r": [
    "esteroidales",
    "esteroides"
   ]
  },
  {
   "p": "En el músculo, el retículo endoplasmático liso que almacena calcio se llama retículo ___.",
   "r": [
    "sarcoplásmico",
    "sarcoplasmico"
   ]
  },
  {
   "p": "El complejo de ___ modifica, clasifica y empaqueta las proteínas en vesículas según su destino.",
   "r": [
    "Golgi"
   ]
  },
  {
   "p": "Los ___ contienen enzimas digestivas que trabajan en medio ácido.",
   "r": [
    "lisosomas",
    "lisosoma"
   ]
  },
  {
   "p": "En los peroxisomas, la enzima ___ descompone el peróxido de hidrógeno en agua y oxígeno.",
   "r": [
    "catalasa"
   ]
  },
  {
   "p": "Las mitocondrias realizan la ___ celular para producir ATP.",
   "r": [
    "respiración",
    "respiracion"
   ]
  },
  {
   "p": "En el marcaje radiactivo, la proteína marcada aparece primero en el RER, luego en el Golgi y al final en las vesículas de ___.",
   "r": [
    "secreción",
    "secrecion"
   ]
  }
 ],
 "bio_especializadas": [
  {
   "p": "Una célula que secreta proteínas tendrá abundantes vesículas de secreción, Golgi y retículo endoplasmático ___.",
   "r": [
    "rugoso",
    "RER"
   ]
  },
  {
   "p": "Una célula que fabrica hormonas esteroidales o detoxifica tendrá abundante retículo endoplasmático ___.",
   "r": [
    "liso",
    "REL"
   ]
  },
  {
   "p": "Una célula que gasta mucha energía tendrá muchas ___.",
   "r": [
    "mitocondrias",
    "mitocondria"
   ]
  },
  {
   "p": "Los ___ recubren el interior del intestino delgado y absorben los nutrientes ya digeridos.",
   "r": [
    "enterocitos",
    "enterocito"
   ]
  },
  {
   "p": "Las ___ del enterocito multiplican la superficie de absorción y forman el borde en cepillo.",
   "r": [
    "microvellosidades",
    "microvellosidad"
   ]
  },
  {
   "p": "En el enterocito, las microvellosidades están sostenidas por microfilamentos de ___.",
   "r": [
    "actina"
   ]
  },
  {
   "p": "En el enterocito, las uniones ___ sellan el espacio entre células vecinas.",
   "r": [
    "estrechas"
   ]
  },
  {
   "p": "Las células ___ del páncreas fabrican las enzimas digestivas del jugo pancreático.",
   "r": [
    "acinares",
    "acinar"
   ]
  },
  {
   "p": "En la célula acinar, el núcleo y el RER abundante están en la ___ de la célula.",
   "r": [
    "base"
   ]
  },
  {
   "p": "En la célula acinar, los gránulos de secreción se ubican en el ___.",
   "r": [
    "ápice",
    "apice"
   ]
  },
  {
   "p": "Los gránulos de secreción de la célula acinar liberan las enzimas por ___.",
   "r": [
    "exocitosis"
   ]
  },
  {
   "p": "La célula ___ secreta anticuerpos y tiene abundantes RER y Golgi.",
   "r": [
    "plasmática",
    "plasmatica"
   ]
  },
  {
   "p": "Las células de ___ del testículo fabrican testosterona y tienen abundante REL.",
   "r": [
    "Leydig"
   ]
  },
  {
   "p": "Los neutrófilos y macrófagos fagocitan y por eso tienen abundantes ___.",
   "r": [
    "lisosomas",
    "lisosoma"
   ]
  }
 ],
 "bio_neurona": [
  {
   "p": "El sistema nervioso tiene una función sensitiva, una función ___ y una función motora.",
   "r": [
    "integradora"
   ]
  },
  {
   "p": "En la función sensitiva, los ___ captan el estímulo.",
   "r": [
    "receptores",
    "receptor"
   ]
  },
  {
   "p": "En la función motora, la respuesta llega a un efector, que es un músculo o una ___.",
   "r": [
    "glándula",
    "glandula"
   ]
  },
  {
   "p": "El sistema nervioso central está formado por el encéfalo y la ___ espinal.",
   "r": [
    "médula",
    "medula"
   ]
  },
  {
   "p": "El encéfalo está formado por el cerebro, el cerebelo y el tronco ___.",
   "r": [
    "encefálico",
    "encefalico"
   ]
  },
  {
   "p": "El sistema nervioso central está protegido por el cráneo, la columna vertebral, las meninges y el líquido ___.",
   "r": [
    "cefalorraquídeo",
    "cefalorraquideo"
   ]
  },
  {
   "p": "El sistema nervioso periférico está formado por los nervios y los ___.",
   "r": [
    "ganglios",
    "ganglio"
   ]
  },
  {
   "p": "El sistema nervioso periférico tiene 12 pares de nervios craneales y 31 pares de nervios ___.",
   "r": [
    "raquídeos",
    "raquideos"
   ]
  },
  {
   "p": "La división ___ del sistema nervioso periférico controla los músculos esqueléticos y es voluntaria.",
   "r": [
    "somática",
    "somatica"
   ]
  },
  {
   "p": "La división ___ del sistema nervioso periférico controla el corazón, el músculo liso y las glándulas, y es involuntaria.",
   "r": [
    "autónoma",
    "autonoma"
   ]
  },
  {
   "p": "El sistema nervioso ___ prepara para la acción o «lucha o huida».",
   "r": [
    "simpático",
    "simpatico"
   ]
  },
  {
   "p": "El sistema nervioso ___ favorece el «reposo y digestión».",
   "r": [
    "parasimpático",
    "parasimpatico"
   ]
  },
  {
   "p": "El simpático aumenta la frecuencia ___, dilata las pupilas y los bronquios y frena la digestión.",
   "r": [
    "cardíaca",
    "cardiaca"
   ]
  },
  {
   "p": "El parasimpático ___ las pupilas y estimula la salivación.",
   "r": [
    "contrae"
   ]
  }
 ],
 "bio_sinapsis": [
  {
   "p": "Un ___ es una respuesta rápida, involuntaria y predecible frente a un estímulo.",
   "r": [
    "reflejo"
   ]
  },
  {
   "p": "En el arco reflejo, la vía ___ lleva el impulso hacia el SNC mediante una neurona sensitiva.",
   "r": [
    "aferente"
   ]
  },
  {
   "p": "En el arco reflejo, la vía ___ lleva la orden hacia el efector mediante una neurona motora.",
   "r": [
    "eferente"
   ]
  },
  {
   "p": "En el arco reflejo, la información suele pasar de la neurona sensitiva a la motora a través de una ___.",
   "r": [
    "interneurona"
   ]
  },
  {
   "p": "El centro elaborador del arco reflejo es la ___ espinal.",
   "r": [
    "médula",
    "medula"
   ]
  },
  {
   "p": "El reflejo ___ es el arco más simple, sin interneurona.",
   "r": [
    "rotuliano"
   ]
  },
  {
   "p": "Durante la vigilia, el encéfalo acumula ___, que disminuye la actividad neuronal y produce sueño.",
   "r": [
    "adenosina"
   ]
  },
  {
   "p": "La cafeína se une a los receptores de adenosina sin activarlos y los ___, por eso da menos sueño.",
   "r": [
    "bloquea"
   ]
  },
  {
   "p": "La cafeína tarda unas ___ horas en reducirse a la mitad en la sangre.",
   "r": [
    "5",
    "cinco"
   ]
  },
  {
   "p": "Con el consumo diario de cafeína aparece ___: se necesita más para el mismo efecto.",
   "r": [
    "tolerancia"
   ]
  },
  {
   "p": "El alcohol es un ___ del sistema nervioso central y hace más lentos los reflejos.",
   "r": [
    "depresor"
   ]
  },
  {
   "p": "Las drogas de abuso activan el circuito de ___ del encéfalo.",
   "r": [
    "recompensa"
   ]
  },
  {
   "p": "Al dejar una droga tras el consumo repetido aparece el síndrome de ___.",
   "r": [
    "abstinencia"
   ]
  },
  {
   "p": "Durante el sueño, el encéfalo consolida lo aprendido, es decir, la ___.",
   "r": [
    "memoria"
   ]
  },
  {
   "p": "Un adolescente de 13 a 18 años debe dormir de 8 a ___ horas.",
   "r": [
    "10",
    "diez"
   ]
  },
  {
   "p": "El ___ y el cinturón de seguridad previenen traumatismos encefalocraneanos.",
   "r": [
    "casco"
   ]
  }
 ],
 "bio_reproduccion": [
  {
   "p": "En los ovarios maduran los ovocitos dentro de los ___.",
   "r": [
    "folículos",
    "foliculos"
   ]
  },
  {
   "p": "La fecundación ocurre normalmente en el tercio externo de la ___ uterina.",
   "r": [
    "trompa",
    "trompas",
    "trompa de Falopio",
    "oviducto"
   ]
  },
  {
   "p": "La capa interna del útero, donde se implanta el embrión y que se desprende en la menstruación, es el ___.",
   "r": [
    "endometrio"
   ]
  },
  {
   "p": "La capa muscular del útero, que se contrae en el parto, se llama ___.",
   "r": [
    "miometrio"
   ]
  },
  {
   "p": "Los espermatozoides se forman en los túbulos ___ de los testículos.",
   "r": [
    "seminíferos",
    "seminiferos"
   ]
  },
  {
   "p": "Las células de Leydig de los testículos producen la hormona ___.",
   "r": [
    "testosterona"
   ]
  },
  {
   "p": "Los espermatozoides maduran, adquieren movilidad y se almacenan en el ___.",
   "r": [
    "epidídimo",
    "epididimo"
   ]
  },
  {
   "p": "La vasectomía corta los conductos ___.",
   "r": [
    "deferentes"
   ]
  },
  {
   "p": "La glándula anexa que aporta un líquido que protege a los espermatozoides de la acidez vaginal es la ___.",
   "r": [
    "próstata",
    "prostata"
   ]
  },
  {
   "p": "Las enzimas que digieren las cubiertas del ovocito están en una vesícula de la cabeza del espermatozoide llamada ___.",
   "r": [
    "acrosoma"
   ]
  },
  {
   "p": "La liberación del contenido de los gránulos corticales cambia la zona pelúcida y evita la ___.",
   "r": [
    "polispermia"
   ]
  },
  {
   "p": "Una esfera maciza de células que se forma hacia el día 3 o 4 tras la fecundación es la ___.",
   "r": [
    "mórula",
    "morula"
   ]
  },
  {
   "p": "El blastocisto produce la hormona ___, que detectan las pruebas de embarazo.",
   "r": [
    "hCG",
    "gonadotropina coriónica humana",
    "gonadotropina corionica humana"
   ]
  },
  {
   "p": "Si el embrión se implanta fuera del útero, se habla de embarazo ___.",
   "r": [
    "ectópico",
    "ectopico"
   ]
  },
  {
   "p": "Las tres dimensiones de la sexualidad son la biológica, la psicológica y afectiva, y la ___.",
   "r": [
    "social"
   ]
  }
 ],
 "bio_ciclo": [
  {
   "p": "Por convención, el día 1 del ciclo es el primer día de la ___.",
   "r": [
    "menstruación",
    "menstruacion"
   ]
  },
  {
   "p": "El ciclo femenino dura en promedio ___ días.",
   "r": [
    "28",
    "veintiocho"
   ]
  },
  {
   "p": "La hormona de la hipófisis que hace crecer los folículos es la ___.",
   "r": [
    "FSH",
    "hormona folículo estimulante",
    "hormona foliculo estimulante"
   ]
  },
  {
   "p": "El pico de ___ provoca la ovulación y la formación del cuerpo lúteo.",
   "r": [
    "LH",
    "hormona luteinizante"
   ]
  },
  {
   "p": "El cuerpo lúteo secreta sobre todo ___, que prepara y mantiene el endometrio.",
   "r": [
    "progesterona"
   ]
  },
  {
   "p": "El estrógeno del folículo hace que el endometrio se engrose en la fase ___.",
   "r": [
    "proliferativa"
   ]
  },
  {
   "p": "En la fase secretora del ciclo uterino actúa la hormona ___.",
   "r": [
    "progesterona"
   ]
  },
  {
   "p": "La ovulación ocurre cerca del día ___ de un ciclo de 28 días.",
   "r": [
    "14",
    "catorce"
   ]
  },
  {
   "p": "La menstruación comienza cuando cae la ___.",
   "r": [
    "progesterona"
   ]
  },
  {
   "p": "El hipotálamo libera la hormona ___, que estimula a la hipófisis anterior.",
   "r": [
    "GnRH"
   ]
  },
  {
   "p": "Cuando el estrógeno y la progesterona están altos, frenan la liberación de FSH y LH por retroalimentación ___.",
   "r": [
    "negativa"
   ]
  },
  {
   "p": "El nivel alto y sostenido de estrógeno a mitad del ciclo provoca el pico de LH por retroalimentación ___.",
   "r": [
    "positiva"
   ]
  },
  {
   "p": "Si hay fecundación, el embrión implantado produce hCG, que mantiene vivo el cuerpo ___.",
   "r": [
    "lúteo",
    "luteo"
   ]
  },
  {
   "p": "Si no hay fecundación, el cuerpo lúteo degenera en una cicatriz llamada cuerpo ___.",
   "r": [
    "albicans"
   ]
  },
  {
   "p": "La fase ___ del ciclo ovárico dura casi siempre unos 14 días.",
   "r": [
    "lútea",
    "lutea"
   ]
  }
 ],
 "bio_natalidad": [
  {
   "p": "El único método que previene el embarazo y además protege de las ITS es el ___.",
   "r": [
    "preservativo",
    "condón",
    "condon"
   ]
  },
  {
   "p": "Usar un preservativo junto a otro método se llama doble ___.",
   "r": [
    "protección",
    "proteccion"
   ]
  },
  {
   "p": "En el método Billings, cerca de la ovulación el moco ___ es abundante, transparente y elástico.",
   "r": [
    "cervical"
   ]
  },
  {
   "p": "El método del calendario se conoce también como Ogino-___.",
   "r": [
    "Knaus"
   ]
  },
  {
   "p": "En el método de la temperatura ___, se mide la temperatura al despertar, antes de levantarse.",
   "r": [
    "basal"
   ]
  },
  {
   "p": "Después de la ovulación la temperatura basal sube por acción de la ___.",
   "r": [
    "progesterona"
   ]
  },
  {
   "p": "Los métodos hormonales impiden la ovulación porque frenan la FSH y la LH por retroalimentación ___.",
   "r": [
    "negativa"
   ]
  },
  {
   "p": "La anticoncepción de emergencia se toma idealmente dentro de ___ horas después de una relación sin protección.",
   "r": [
    "72",
    "setenta y dos"
   ]
  },
  {
   "p": "El ___ es una copa flexible que cubre el cuello uterino y se usa con espermicida.",
   "r": [
    "diafragma"
   ]
  },
  {
   "p": "El DIU de ___ impide la fecundación porque es tóxico para los espermatozoides.",
   "r": [
    "cobre"
   ]
  },
  {
   "p": "La ___ consiste en cortar y ligar los conductos deferentes.",
   "r": [
    "vasectomía",
    "vasectomia"
   ]
  },
  {
   "p": "La ___ de trompas corta, liga o bloquea las trompas uterinas.",
   "r": [
    "ligadura"
   ]
  },
  {
   "p": "El VIH destruye los linfocitos T ___ y debilita el sistema inmune.",
   "r": [
    "CD4"
   ]
  },
  {
   "p": "El herpes genital y el VIH son causados por virus, mientras que la gonorrea y la clamidia son causadas por ___.",
   "r": [
    "bacterias",
    "bacteria"
   ]
  },
  {
   "p": "Las ITS bacterianas, como la gonorrea y la clamidia, se tratan con ___.",
   "r": [
    "antibióticos",
    "antibioticos"
   ]
  }
 ],
 "bio_evidencias": [
  {
   "p": "La idea de que las especies actuales descienden de especies anteriores se llama descendencia con ___.",
   "r": [
    "modificación",
    "modificacion"
   ]
  },
  {
   "p": "Evolucionan las ___, a lo largo de muchas generaciones, y no los individuos.",
   "r": [
    "poblaciones",
    "población",
    "poblacion"
   ]
  },
  {
   "p": "Las estructuras ___ tienen el mismo origen embrionario y plan básico, aunque cumplan funciones distintas.",
   "r": [
    "homólogas",
    "homologas"
   ]
  },
  {
   "p": "El brazo humano y el ala del murciélago tienen la misma secuencia de huesos, que empieza con el ___.",
   "r": [
    "húmero",
    "humero"
   ]
  },
  {
   "p": "La evolución ___ ocurre cuando linajes con un ancestro común se adaptan a ambientes distintos.",
   "r": [
    "divergente",
    "divergencia"
   ]
  },
  {
   "p": "Las estructuras ___ cumplen la misma función, pero tienen distinto origen.",
   "r": [
    "análogas",
    "analogas"
   ]
  },
  {
   "p": "El ala de una mariposa y el ala de un ave son un ejemplo de evolución ___.",
   "r": [
    "convergente",
    "convergencia"
   ]
  },
  {
   "p": "El cóccix humano y la pelvis de las ballenas son estructuras ___.",
   "r": [
    "vestigiales"
   ]
  },
  {
   "p": "Los embriones de peces, aves y mamíferos tienen arcos y hendiduras ___ y una cola.",
   "r": [
    "faríngeos",
    "faringeos",
    "faríngeas",
    "faringeas"
   ]
  },
  {
   "p": "Todos los seres vivos usan el ADN como material hereditario y prácticamente el mismo código ___.",
   "r": [
    "genético",
    "genetico"
   ]
  },
  {
   "p": "Mientras menos diferencias haya entre las secuencias de dos especies, más ___ es su ancestro común.",
   "r": [
    "reciente"
   ]
  },
  {
   "p": "El ___ c es una proteína de la respiración celular que es idéntica en el ser humano y el chimpancé.",
   "r": [
    "citocromo"
   ]
  },
  {
   "p": "La mayoría de los fósiles se forma en rocas ___, depositadas en capas o estratos.",
   "r": [
    "sedimentarias"
   ]
  },
  {
   "p": "En estratos no alterados, los de abajo son más ___.",
   "r": [
    "antiguos"
   ]
  },
  {
   "p": "La datación absoluta usa isótopos radiactivos, como el carbono-___.",
   "r": [
    "14",
    "catorce"
   ]
  },
  {
   "p": "Archaeopteryx y Tiktaalik son fósiles de ___ porque tienen rasgos de dos grupos.",
   "r": [
    "transición",
    "transicion"
   ]
  }
 ],
 "bio_seleccion": [
  {
   "p": "Darwin viajó alrededor del mundo en el barco ___ entre 1831 y 1836.",
   "r": [
    "Beagle"
   ]
  },
  {
   "p": "Alfred Russel ___ llegó por su cuenta a la selección natural estudiando la fauna del Amazonas y del archipiélago malayo.",
   "r": [
    "Wallace"
   ]
  },
  {
   "p": "En 1859 Darwin publicó El origen de las ___.",
   "r": [
    "especies"
   ]
  },
  {
   "p": "Wallace estudió la distribución geográfica de las especies, es decir, la ___.",
   "r": [
    "biogeografía",
    "biogeografia"
   ]
  },
  {
   "p": "La genética se unió a la selección natural en la teoría ___ de la evolución.",
   "r": [
    "sintética",
    "sintetica"
   ]
  },
  {
   "p": "La selección natural exige variación ___, es decir, que parte de las diferencias entre individuos se herede.",
   "r": [
    "heredable"
   ]
  },
  {
   "p": "Nacen más individuos de los que el ambiente puede sostener; esto se llama ___.",
   "r": [
    "sobreproducción",
    "sobreproduccion"
   ]
  },
  {
   "p": "Una ___ es una característica heredable que aumenta la supervivencia o la reproducción en un ambiente determinado.",
   "r": [
    "adaptación",
    "adaptacion"
   ]
  },
  {
   "p": "La variación surge al azar por mutaciones y ___.",
   "r": [
    "recombinación",
    "recombinacion"
   ]
  },
  {
   "p": "En la polilla moteada, el hollín de las fábricas favoreció a las polillas de color ___.",
   "r": [
    "oscuro",
    "oscuras",
    "oscura"
   ]
  },
  {
   "p": "Peter y Rosemary ___ midieron los cambios del pico de los pinzones en la isla Daphne Mayor.",
   "r": [
    "Grant"
   ]
  },
  {
   "p": "Tras la sequía de 1977, los pinzones con pico más ___ sobrevivieron más.",
   "r": [
    "profundo",
    "grande",
    "grueso"
   ]
  },
  {
   "p": "Los antibióticos actúan como presión de ___ sobre las bacterias.",
   "r": [
    "selección",
    "seleccion"
   ]
  },
  {
   "p": "El antibiótico no crea la resistencia: ___ a las bacterias que ya la tenían.",
   "r": [
    "selecciona"
   ]
  },
  {
   "p": "Los caracteres ___ durante la vida no se heredan.",
   "r": [
    "adquiridos"
   ]
  }
 ],
 "bio_ciclo_celular": [
  {
   "p": "El ADN se enrolla en proteínas llamadas ___ para formar la cromatina.",
   "r": [
    "histonas",
    "histona"
   ]
  },
  {
   "p": "Un tramo de ADN que da casi dos vueltas alrededor de ocho histonas forma un ___.",
   "r": [
    "nucleosoma",
    "nucleosomas"
   ]
  },
  {
   "p": "Una hilera de nucleosomas parece un «collar de ___».",
   "r": [
    "perlas"
   ]
  },
  {
   "p": "La cromatina alcanza su máxima compactación cuando la célula se divide y forma el ___.",
   "r": [
    "cromosoma",
    "cromosomas"
   ]
  },
  {
   "p": "En la interfase la cromatina está más ___, lo que permite a las enzimas leer los genes y replicar el ADN.",
   "r": [
    "descondensada",
    "descondensado"
   ]
  },
  {
   "p": "Un cromosoma duplicado tiene dos cromátidas ___ unidas por el centrómero.",
   "r": [
    "hermanas"
   ]
  },
  {
   "p": "Las cromátidas hermanas están unidas por una estructura llamada ___.",
   "r": [
    "centrómero",
    "centromero"
   ]
  },
  {
   "p": "Los dos cromosomas de un par, uno materno y otro paterno, se llaman ___.",
   "r": [
    "homólogos",
    "cromosomas homólogos",
    "homologos"
   ]
  },
  {
   "p": "Una célula humana en G2 tiene 46 cromosomas y ___ cromátidas.",
   "r": [
    "92",
    "noventa y dos"
   ]
  },
  {
   "p": "La etapa del ciclo celular en que se replica el ADN es la fase ___.",
   "r": [
    "S",
    "síntesis"
   ]
  },
  {
   "p": "En la etapa ___ de la interfase la célula crece, fabrica proteínas y organelos y cumple su función.",
   "r": [
    "G1"
   ]
  },
  {
   "p": "La fase M del ciclo celular incluye la mitosis y la ___.",
   "r": [
    "citocinesis"
   ]
  },
  {
   "p": "Las células que salen del ciclo desde G1 a un estado de reposo, como la mayoría de las neuronas, están en ___.",
   "r": [
    "G0"
   ]
  },
  {
   "p": "Si el daño del ADN no tiene arreglo, la célula activa la ___, o muerte celular programada.",
   "r": [
    "apoptosis"
   ]
  },
  {
   "p": "El punto de control de metafase comprueba que todos los cromosomas estén unidos al ___ mitótico.",
   "r": [
    "huso",
    "huso mitótico"
   ]
  },
  {
   "p": "El gen supresor de tumores más conocido, que detiene el ciclo en G1 si el ADN está dañado, es ___.",
   "r": [
    "p53"
   ]
  }
 ],
 "bio_mitosis": [
  {
   "p": "La mitosis es la división del ___ celular.",
   "r": [
    "núcleo",
    "nucleo"
   ]
  },
  {
   "p": "Después de la mitosis, la ___ reparte el citoplasma y da dos células hijas.",
   "r": [
    "citocinesis"
   ]
  },
  {
   "p": "Si la célula madre es 2n, las dos células hijas de la mitosis son ___.",
   "r": [
    "2n",
    "diploides"
   ]
  },
  {
   "p": "La mitosis ocurre en las células del cuerpo, llamadas ___.",
   "r": [
    "somáticas",
    "somaticas"
   ]
  },
  {
   "p": "Los gametos no se forman por mitosis, sino por ___.",
   "r": [
    "meiosis"
   ]
  },
  {
   "p": "En la ___ la cromatina se condensa, desaparece el nucléolo y se arma el huso mitótico.",
   "r": [
    "profase"
   ]
  },
  {
   "p": "El huso mitótico está hecho de ___.",
   "r": [
    "microtúbulos",
    "microtubulos"
   ]
  },
  {
   "p": "Los microtúbulos se unen al cromosoma en el centrómero, en estructuras de proteína llamadas ___.",
   "r": [
    "cinetocoros",
    "cinetocoro"
   ]
  },
  {
   "p": "En la ___ los cromosomas se ordenan en el plano ecuatorial formando la placa metafásica.",
   "r": [
    "metafase"
   ]
  },
  {
   "p": "En la ___ se separan las cromátidas hermanas y van a polos opuestos.",
   "r": [
    "anafase"
   ]
  },
  {
   "p": "La etapa más corta de la mitosis es la ___.",
   "r": [
    "anafase"
   ]
  },
  {
   "p": "En la ___ los cromosomas se descondensan, se forma una envoltura nuclear y reaparece el nucléolo.",
   "r": [
    "telofase"
   ]
  },
  {
   "p": "En células animales, un anillo de actina y miosina forma el surco de ___.",
   "r": [
    "segmentación",
    "segmentacion"
   ]
  },
  {
   "p": "En células vegetales, vesículas del aparato de Golgi forman en el centro la placa ___.",
   "r": [
    "celular"
   ]
  },
  {
   "p": "En un dibujo, los cromosomas con forma de ___ tienen dos cromátidas y todavía no se han separado.",
   "r": [
    "X"
   ]
  },
  {
   "p": "Dos grupos de cromosomas simples en forma de V que van hacia los polos indican una ___.",
   "r": [
    "anafase"
   ]
  }
 ],
 "bio_meiosis": [
  {
   "p": "La meiosis forma las células sexuales en las células ___ de las gónadas.",
   "r": [
    "germinales"
   ]
  },
  {
   "p": "La meiosis tiene una sola replicación del ADN seguida de ___ divisiones.",
   "r": [
    "dos",
    "2"
   ]
  },
  {
   "p": "En la meiosis, de una célula 2n salen células ___, con un cromosoma de cada par.",
   "r": [
    "n",
    "haploides",
    "haploide"
   ]
  },
  {
   "p": "La meiosis produce ___ células genéticamente distintas entre sí.",
   "r": [
    "cuatro",
    "4"
   ]
  },
  {
   "p": "En la fecundación se unen dos gametos n y el cigoto vuelve a ser ___.",
   "r": [
    "2n",
    "diploide"
   ]
  },
  {
   "p": "En humanos, los gametos tienen ___ cromosomas.",
   "r": [
    "23",
    "veintitrés"
   ]
  },
  {
   "p": "La etapa más larga de la meiosis I es la ___ I.",
   "r": [
    "profase",
    "profase I"
   ]
  },
  {
   "p": "El apareamiento a lo largo de los homólogos en la profase I se llama ___.",
   "r": [
    "sinapsis"
   ]
  },
  {
   "p": "Cada par de homólogos apareados forma un bivalente o ___, con cuatro cromátidas.",
   "r": [
    "tétrada",
    "tetrada"
   ]
  },
  {
   "p": "En la anafase I se separan los cromosomas ___.",
   "r": [
    "homólogos",
    "homologos"
   ]
  },
  {
   "p": "La meiosis I se llama división ___ porque reduce el número de cromosomas de 2n a n.",
   "r": [
    "reduccional"
   ]
  },
  {
   "p": "Entre la meiosis I y la meiosis II ___ replicación del ADN.",
   "r": [
    "no hay",
    "no ocurre",
    "no existe",
    "no se produce"
   ]
  },
  {
   "p": "En la anafase II se separan las cromátidas ___.",
   "r": [
    "hermanas"
   ]
  },
  {
   "p": "El intercambio de segmentos entre cromátidas de homólogos en la profase I se llama ___.",
   "r": [
    "entrecruzamiento",
    "crossing-over",
    "crossing over"
   ]
  },
  {
   "p": "El punto en forma de X donde los homólogos quedan unidos tras el entrecruzamiento se llama ___.",
   "r": [
    "quiasma",
    "quiasmas"
   ]
  },
  {
   "p": "La orientación al azar de cada par de homólogos en la metafase I se llama permutación ___.",
   "r": [
    "cromosómica",
    "cromosomica"
   ]
  }
 ],
 "bio_ingenieria": [
  {
   "p": "Cambiar a propósito el ADN de un organismo se llama ingeniería ___.",
   "r": [
    "genética",
    "genetica"
   ]
  },
  {
   "p": "El ADN formado al unir ADN de dos orígenes distintos se llama ADN ___.",
   "r": [
    "recombinante"
   ]
  },
  {
   "p": "Un organismo que lleva en su ADN un gen de otra especie es un organismo ___.",
   "r": [
    "transgénico",
    "transgenico"
   ]
  },
  {
   "p": "Un organismo transgénico es un tipo de organismo genéticamente ___, abreviado OGM.",
   "r": [
    "modificado"
   ]
  },
  {
   "p": "Una bacteria puede fabricar una proteína humana porque el código genético es ___.",
   "r": [
    "universal"
   ]
  },
  {
   "p": "Una copia genética de otro individuo, como la oveja Dolly, es un ___.",
   "r": [
    "clon"
   ]
  },
  {
   "p": "La ___ se extraía antes del páncreas de cerdos y vacas, hasta que se produjo con bacterias.",
   "r": [
    "insulina"
   ]
  },
  {
   "p": "En 1982 se aprobó la primera insulina ___ fabricada por bacterias con el gen humano.",
   "r": [
    "humana"
   ]
  },
  {
   "p": "La insulina producida por bacterias se fabrica en grandes cantidades en ___.",
   "r": [
    "fermentadores",
    "fermentador"
   ]
  },
  {
   "p": "El maíz y la soya resistentes a insectos reciben el gen de la toxina ___.",
   "r": [
    "Bt"
   ]
  },
  {
   "p": "La toxina Bt proviene de la bacteria Bacillus ___.",
   "r": [
    "thuringiensis"
   ]
  },
  {
   "p": "El arroz dorado contiene provitamina ___.",
   "r": [
    "A"
   ]
  },
  {
   "p": "En los detergentes, las ___ eliminan las manchas de proteínas.",
   "r": [
    "proteasas",
    "proteasa"
   ]
  },
  {
   "p": "En los detergentes, las lipasas digieren las ___.",
   "r": [
    "grasas",
    "grasa"
   ]
  },
  {
   "p": "En los detergentes, las amilasas digieren el ___.",
   "r": [
    "almidón",
    "almidon"
   ]
  },
  {
   "p": "Un riesgo investigado es que un gen transgénico pase por ___ a plantas silvestres emparentadas.",
   "r": [
    "polinización",
    "polinizacion"
   ]
  }
 ],
 "bio_fotosintesis": [
  {
   "p": "La fotosíntesis usa la energía de la ___ para fabricar glucosa a partir de CO2 y agua.",
   "r": [
    "luz",
    "luz solar"
   ]
  },
  {
   "p": "Los organismos que hacen fotosíntesis, como plantas, algas y cianobacterias, son autótrofos ___.",
   "r": [
    "fotosintéticos",
    "fotosintético"
   ]
  },
  {
   "p": "En la ecuación global de la fotosíntesis, los productos son glucosa y ___.",
   "r": [
    "O2",
    "oxígeno"
   ]
  },
  {
   "p": "El CO2 entra a la hoja por los ___.",
   "r": [
    "estomas",
    "estoma"
   ]
  },
  {
   "p": "En la fotosíntesis, la energía luminosa queda guardada como energía ___ en los enlaces de la glucosa.",
   "r": [
    "química"
   ]
  },
  {
   "p": "En plantas y algas, la fotosíntesis ocurre en los ___.",
   "r": [
    "cloroplastos",
    "cloroplasto"
   ]
  },
  {
   "p": "El pigmento de los cloroplastos que capta la luz se llama ___.",
   "r": [
    "clorofila"
   ]
  },
  {
   "p": "El O2 que libera la fotosíntesis viene del ___.",
   "r": [
    "agua",
    "H2O"
   ]
  },
  {
   "p": "El carbono de la glucosa que se fabrica en la fotosíntesis viene del ___.",
   "r": [
    "CO2",
    "dióxido de carbono"
   ]
  },
  {
   "p": "La planta guarda la glucosa que le sobra como ___.",
   "r": [
    "almidón"
   ]
  },
  {
   "p": "Al aumentar la intensidad de luz, la tasa fotosintética sube hasta un punto de ___.",
   "r": [
    "saturación"
   ]
  },
  {
   "p": "Las enzimas de la fotosíntesis tienen una temperatura ___, bajo la cual trabajan lento.",
   "r": [
    "óptima",
    "óptimo"
   ]
  },
  {
   "p": "El factor que está en menor cantidad respecto de lo que se necesita y fija la tasa se llama factor ___.",
   "r": [
    "limitante"
   ]
  },
  {
   "p": "En el experimento con Elodea, la distancia de la lámpara es la variable ___.",
   "r": [
    "independiente"
   ]
  },
  {
   "p": "En el experimento con oxígeno pesado, si se marca el agua, el O2 liberado sale marcado; si se marca el CO2, el O2 ___ sale marcado.",
   "r": [
    "no"
   ]
  },
  {
   "p": "El ___ tiñe de azul oscuro el almidón de una hoja.",
   "r": [
    "lugol"
   ]
  }
 ],
 "bio_respiracion": [
  {
   "p": "Los organismos que fabrican su propia materia orgánica a partir de materia inorgánica tienen nutrición ___.",
   "r": [
    "autótrofa",
    "autótrofo"
   ]
  },
  {
   "p": "Los autótrofos que usan la energía de reacciones químicas con sustancias inorgánicas son los ___.",
   "r": [
    "quimiosintéticos",
    "quimiosintético"
   ]
  },
  {
   "p": "Los animales, los hongos y la mayoría de las bacterias tienen nutrición ___.",
   "r": [
    "heterótrofa",
    "heterótrofo"
   ]
  },
  {
   "p": "En el ecosistema, los autótrofos cumplen el rol de ___.",
   "r": [
    "productores",
    "productor"
   ]
  },
  {
   "p": "La respiración celular aeróbica degrada la glucosa usando ___.",
   "r": [
    "O2",
    "oxígeno"
   ]
  },
  {
   "p": "La moneda energética de la célula, en que la respiración guarda parte de la energía, es el ___.",
   "r": [
    "ATP"
   ]
  },
  {
   "p": "Además del ATP, el resto de la energía de la respiración se libera como ___.",
   "r": [
    "calor"
   ]
  },
  {
   "p": "La respiración celular comienza en el citoplasma con la ___.",
   "r": [
    "glucólisis"
   ]
  },
  {
   "p": "La respiración celular se completa en la ___.",
   "r": [
    "mitocondria",
    "mitocondrias"
   ]
  },
  {
   "p": "La respiración celular es un proceso ___ porque rompe una molécula grande en moléculas pequeñas.",
   "r": [
    "catabólico"
   ]
  },
  {
   "p": "En la glucólisis, la glucosa se divide en dos moléculas de ___.",
   "r": [
    "piruvato"
   ]
  },
  {
   "p": "El ciclo de Krebs ocurre en la matriz ___.",
   "r": [
    "mitocondrial"
   ]
  },
  {
   "p": "La mayor parte del ATP se produce en la cadena transportadora de la membrana interna o ___ de la mitocondria.",
   "r": [
    "crestas",
    "cresta"
   ]
  },
  {
   "p": "En la cadena transportadora, el O2 recibe los electrones y forma ___.",
   "r": [
    "agua",
    "H2O"
   ]
  },
  {
   "p": "Algunas células, como las levaduras o las musculares, obtienen energía sin O2 por ___.",
   "r": [
    "fermentación"
   ]
  },
  {
   "p": "Un tubo con azul de bromotimol que se vuelve amarillo indica que se liberó mucho ___.",
   "r": [
    "CO2",
    "dióxido de carbono"
   ]
  }
 ],
 "bio_flujo": [
  {
   "p": "Los productores son la puerta de entrada de la energía y del ___ en el ecosistema.",
   "r": [
    "carbono"
   ]
  },
  {
   "p": "Los consumidores primarios son los ___, que comen productores.",
   "r": [
    "herbívoros",
    "herbívoro"
   ]
  },
  {
   "p": "Los hongos y bacterias que degradan restos y cadáveres de todos los niveles son los ___.",
   "r": [
    "descomponedores",
    "descomponedor"
   ]
  },
  {
   "p": "En una cadena trófica, las flechas van desde el alimento hacia quien lo ___.",
   "r": [
    "come",
    "consume"
   ]
  },
  {
   "p": "Varias cadenas que se entrecruzan forman una trama ___.",
   "r": [
    "trófica"
   ]
  },
  {
   "p": "La energía entra al ecosistema como ___ y los productores la transforman en energía química.",
   "r": [
    "luz"
   ]
  },
  {
   "p": "En cada nivel trófico, la mayor parte de la energía se pierde como ___.",
   "r": [
    "calor"
   ]
  },
  {
   "p": "Solo cerca del ___ % de la energía de un nivel queda en el siguiente.",
   "r": [
    "10",
    "diez"
   ]
  },
  {
   "p": "El flujo de energía es ___, porque el calor no se puede volver a usar para la fotosíntesis.",
   "r": [
    "unidireccional"
   ]
  },
  {
   "p": "Las cadenas tróficas son cortas porque en los niveles de arriba queda muy poca ___.",
   "r": [
    "energía"
   ]
  },
  {
   "p": "De las tres pirámides ecológicas, solo la pirámide de ___ nunca se invierte.",
   "r": [
    "energía"
   ]
  },
  {
   "p": "La fotosíntesis fija el ___ del aire en moléculas orgánicas.",
   "r": [
    "CO2",
    "dióxido de carbono",
    "carbono"
   ]
  },
  {
   "p": "Además de la respiración y la descomposición, el carbono regresa a la atmósfera como CO2 por la ___ de combustibles.",
   "r": [
    "combustión"
   ]
  },
  {
   "p": "Restos sepultados durante millones de años formaron carbón, petróleo y ___ natural.",
   "r": [
    "gas"
   ]
  },
  {
   "p": "La quema de combustibles fósiles y la deforestación aumentan el CO2, un gas de efecto ___.",
   "r": [
    "invernadero"
   ]
  },
  {
   "p": "A diferencia de la energía, la materia como el carbono se ___ una y otra vez.",
   "r": [
    "recicla",
    "reciclan"
   ]
  }
 ],
 "bio_hab_investigacion": [
  {
   "p": "Una pregunta que se puede responder midiendo u observando algo es una pregunta ___.",
   "r": [
    "investigable"
   ]
  },
  {
   "p": "La explicación o respuesta tentativa a la pregunta de investigación es la ___.",
   "r": [
    "hipótesis"
   ]
  },
  {
   "p": "La hipótesis se escribe ___ del experimento.",
   "r": [
    "antes"
   ]
  },
  {
   "p": "La ___ dice qué resultado concreto se espera si la hipótesis es cierta y suele tener la forma «si…, entonces…».",
   "r": [
    "predicción"
   ]
  },
  {
   "p": "La variable que el investigador cambia a propósito es la variable ___.",
   "r": [
    "independiente"
   ]
  },
  {
   "p": "La variable que se mide como respuesta es la variable ___.",
   "r": [
    "dependiente"
   ]
  },
  {
   "p": "Las variables que se dejan iguales para que no influyan son las variables ___.",
   "r": [
    "controladas",
    "controlada",
    "constantes",
    "constante"
   ]
  },
  {
   "p": "El grupo de comparación, igual a los demás pero sin el factor estudiado, es el grupo ___.",
   "r": [
    "control"
   ]
  },
  {
   "p": "En estudios con personas, el grupo control suele recibir un ___, una pastilla sin el fármaco.",
   "r": [
    "placebo"
   ]
  },
  {
   "p": "Para medir la masa de una semilla se usa una ___.",
   "r": [
    "balanza"
   ]
  },
  {
   "p": "Para medir el volumen de un gas como CO2 u O2 se usa una jeringa o una probeta ___.",
   "r": [
    "invertida"
   ]
  },
  {
   "p": "La ___ explica por qué pasa algo y está respaldada por mucha evidencia.",
   "r": [
    "teoría"
   ]
  },
  {
   "p": "La ___ describe una regularidad: qué pasa, sin explicar por qué.",
   "r": [
    "ley"
   ]
  },
  {
   "p": "Una representación simplificada para explicar o predecir es un ___.",
   "r": [
    "modelo"
   ]
  },
  {
   "p": "El ___ de una investigación es lo que se quiere lograr y empieza con un verbo en infinitivo.",
   "r": [
    "objetivo"
   ]
  },
  {
   "p": "La interpretación que va más allá de lo observado, con frases como «podría indicar», es la ___.",
   "r": [
    "inferencia"
   ]
  }
 ],
 "bio_hab_evidencia": [
  {
   "p": "En la tabla del pez, al aumentar la temperatura, el oxígeno disuelto ___.",
   "r": [
    "disminuye",
    "baja",
    "decrece"
   ]
  },
  {
   "p": "En una relación inversa, si una variable baja, la otra ___.",
   "r": [
    "sube",
    "aumenta"
   ]
  },
  {
   "p": "En un gráfico, la variable independiente va en el eje ___.",
   "r": [
    "horizontal",
    "X",
    "eje X",
    "abscisas"
   ]
  },
  {
   "p": "La temperatura en que la actividad enzimática es máxima es la temperatura ___.",
   "r": [
    "óptima",
    "óptimo"
   ]
  },
  {
   "p": "Sobre el óptimo, la enzima se ___, es decir, pierde su forma y deja de funcionar.",
   "r": [
    "desnaturaliza"
   ]
  },
  {
   "p": "Para mostrar cómo cambia una variable a lo largo de otra continua, como el tiempo, se usa un gráfico de ___.",
   "r": [
    "líneas"
   ]
  },
  {
   "p": "Para comparar valores entre categorías separadas se usa un gráfico de ___.",
   "r": [
    "barras"
   ]
  },
  {
   "p": "Para mostrar cómo se reparte un total (100 %) entre sus partes se usa un gráfico ___.",
   "r": [
    "circular"
   ]
  },
  {
   "p": "Para ver si dos variables medidas en muchos individuos se relacionan se usa un gráfico de ___.",
   "r": [
    "dispersión"
   ]
  },
  {
   "p": "En una relación directamente proporcional, el ___ y/x es constante.",
   "r": [
    "cociente"
   ]
  },
  {
   "p": "En una relación inversamente proporcional, el ___ x·y es constante.",
   "r": [
    "producto"
   ]
  },
  {
   "p": "Estimar un valor dentro del rango medido se llama ___.",
   "r": [
    "interpolar",
    "interpolación"
   ]
  },
  {
   "p": "Estimar un valor fuera del rango medido es arriesgado y se llama ___.",
   "r": [
    "extrapolar",
    "extrapolación"
   ]
  },
  {
   "p": "La variación porcentual se calcula dividiendo por el valor ___.",
   "r": [
    "inicial"
   ]
  },
  {
   "p": "Que dos variables cambien juntas no prueba que una ___ a la otra.",
   "r": [
    "cause",
    "causa"
   ]
  }
 ],
 "bio_hab_evaluar": [
  {
   "p": "La ___ indica que la investigación mide de verdad lo que dice medir y que su diseño permite sacar la conclusión.",
   "r": [
    "validez"
   ]
  },
  {
   "p": "La ___ indica que al repetir las mediciones se obtienen resultados parecidos.",
   "r": [
    "confiabilidad"
   ]
  },
  {
   "p": "Mediciones cercanas entre sí son ___.",
   "r": [
    "precisas",
    "precisa",
    "preciso"
   ]
  },
  {
   "p": "Mediciones cercanas al valor real son ___.",
   "r": [
    "exactas",
    "exacta",
    "exacto"
   ]
  },
  {
   "p": "Un termómetro mal calibrado que siempre marca 2 °C de más es preciso, pero no ___.",
   "r": [
    "exacto",
    "exacta"
   ]
  },
  {
   "p": "La confiabilidad mejora con más repeticiones y con muestras más ___.",
   "r": [
    "grandes",
    "grande"
   ]
  },
  {
   "p": "Para afirmar que un tratamiento produce un efecto, hace falta comparar con un grupo ___ que no lo recibe.",
   "r": [
    "control"
   ]
  },
  {
   "p": "Una conclusión vale para las condiciones y el ___ en que se obtuvo.",
   "r": [
    "rango"
   ]
  },
  {
   "p": "Un estudio con células en cultivo se llama in ___.",
   "r": [
    "vitro"
   ]
  },
  {
   "p": "En un estudio de ___, el investigador solo registra lo que ya ocurre y, si dos variables cambian juntas, hay una asociación.",
   "r": [
    "observación"
   ]
  },
  {
   "p": "Para mostrar que una variable causa otra se necesita un ___ que cambie esa variable y controle las demás.",
   "r": [
    "experimento"
   ]
  },
  {
   "p": "Si el diseño no tiene grupo control, la mejora es agregar un grupo igual pero sin el factor ___.",
   "r": [
    "estudiado"
   ]
  },
  {
   "p": "El ___ da los datos, con números o con lo observado.",
   "r": [
    "resultado",
    "resultados"
   ]
  },
  {
   "p": "La ___ interpreta los resultados y responde la pregunta del estudio.",
   "r": [
    "conclusión"
   ]
  },
  {
   "p": "Un procedimiento descrito con tanto detalle que otra persona puede repetirlo es ___.",
   "r": [
    "replicable"
   ]
  }
 ]
};
