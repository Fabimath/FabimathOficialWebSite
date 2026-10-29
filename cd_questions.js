// Banco de 260 ejercicios de Tablas de Frecuencia para Datos Cuantitativos Discretos (guía oficial Fabimath)
// Parte I (60): tabla completa desde datos crudos -> valores f_i / F_i / h_i / H_i
// Parte II (80): lectura de tabla con frecuencias acumuladas
// Parte III (60): media, mediana y moda desde datos sin tabular
// Parte IV (60): media, mediana y moda desde tabla (x_i, f_i, F_i)
const CD_QUESTIONS = [
 {
  "tipo": "Tabla completa · f_i",
  "ctx": "Demografía · Familias",
  "enun": "Se registró el número de hijos en 20 familias. Datos: 2, 1, 0, 3, 2, 1, 2, 0, 4, 1, 2, 3, 1, 2, 0, 1, 2, 3, 1, 2. Los valores se ordenan de menor a mayor: $x_1 < x_2 < \\dots < x_{5}$.",
  "ask": "Construyendo la tabla de frecuencias, el valor de $f_{1}$ (frecuencia absoluta de $x_{1}=0$) es:",
  "alts": [
   "$6$",
   "$4$",
   "$3$",
   "$2$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Conteo ordenado de valores (}n=20\\text{):}",
  "pautaSteps": [
   "x_{1}=0,\\ x_{2}=1,\\ x_{3}=2,\\ x_{4}=3,\\ x_{5}=4",
   "f_{1}=3,\\ f_{2}=6,\\ f_{3}=7,\\ f_{4}=3,\\ f_{5}=1",
   "F_{1}=3,\\ F_{2}=9,\\ F_{3}=16,\\ F_{4}=19,\\ F_{5}=20",
   "h_{1}=0{,}15,\\ h_{2}=0{,}30,\\ h_{3}=0{,}35,\\ h_{4}=0{,}15,\\ h_{5}=0{,}05",
   "H_{i}=F_{i}/n:\\ H_{1}=0{,}15,\\ H_{2}=0{,}45,\\ H_{3}=0{,}80,\\ H_{4}=0{,}95,\\ H_{5}=1{,}00"
  ],
  "conc": "El valor $x_{1}=0$ aparece 3 veces en los datos: $f_{1} = 3$."
 },
 {
  "tipo": "Tabla completa · F_i acumulada",
  "ctx": "Demografía · Familias",
  "enun": "Se registró el número de hijos en 20 familias. Datos: 2, 1, 0, 3, 2, 1, 2, 0, 4, 1, 2, 3, 1, 2, 0, 1, 2, 3, 1, 2. Los valores se ordenan de menor a mayor: $x_1 < x_2 < \\dots < x_{5}$.",
  "ask": "Construyendo la tabla de frecuencias, el valor de $F_{3}$ (frecuencia absoluta acumulada hasta $x_{3}=2$) es:",
  "alts": [
   "$7$",
   "$9$",
   "$19$",
   "$16$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Conteo ordenado de valores (}n=20\\text{):}",
  "pautaSteps": [
   "x_{1}=0,\\ x_{2}=1,\\ x_{3}=2,\\ x_{4}=3,\\ x_{5}=4",
   "f_{1}=3,\\ f_{2}=6,\\ f_{3}=7,\\ f_{4}=3,\\ f_{5}=1",
   "F_{1}=3,\\ F_{2}=9,\\ F_{3}=16,\\ F_{4}=19,\\ F_{5}=20",
   "h_{1}=0{,}15,\\ h_{2}=0{,}30,\\ h_{3}=0{,}35,\\ h_{4}=0{,}15,\\ h_{5}=0{,}05",
   "H_{i}=F_{i}/n:\\ H_{1}=0{,}15,\\ H_{2}=0{,}45,\\ H_{3}=0{,}80,\\ H_{4}=0{,}95,\\ H_{5}=1{,}00"
  ],
  "conc": "$F_{3} = 16$: 16 de los 20 datos son menores o iguales a 2."
 },
 {
  "tipo": "Tabla completa · h_i",
  "ctx": "Demografía · Familias",
  "enun": "Se registró el número de hijos en 20 familias. Datos: 2, 1, 0, 3, 2, 1, 2, 0, 4, 1, 2, 3, 1, 2, 0, 1, 2, 3, 1, 2. Los valores se ordenan de menor a mayor: $x_1 < x_2 < \\dots < x_{5}$.",
  "ask": "Construyendo la tabla de frecuencias, el valor de $h_{4}$ (frecuencia relativa de $x_{4}=3$) es:",
  "alts": [
   "$h_{4} = 0{,}15$",
   "$h_{4} = 0{,}95$",
   "$h_{4} = 0{,}05$",
   "$h_{4} = 0{,}35$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Conteo ordenado de valores (}n=20\\text{):}",
  "pautaSteps": [
   "x_{1}=0,\\ x_{2}=1,\\ x_{3}=2,\\ x_{4}=3,\\ x_{5}=4",
   "f_{1}=3,\\ f_{2}=6,\\ f_{3}=7,\\ f_{4}=3,\\ f_{5}=1",
   "F_{1}=3,\\ F_{2}=9,\\ F_{3}=16,\\ F_{4}=19,\\ F_{5}=20",
   "h_{1}=0{,}15,\\ h_{2}=0{,}30,\\ h_{3}=0{,}35,\\ h_{4}=0{,}15,\\ h_{5}=0{,}05",
   "H_{i}=F_{i}/n:\\ H_{1}=0{,}15,\\ H_{2}=0{,}45,\\ H_{3}=0{,}80,\\ H_{4}=0{,}95,\\ H_{5}=1{,}00"
  ],
  "conc": "$h_{4} = \\dfrac{3}{20} = 0{,}15$: el 15% de los datos vale 3."
 },
 {
  "tipo": "Tabla completa · f_i",
  "ctx": "Educación · Estudiantes",
  "enun": "Se registró el número de hermanos en 18 estudiantes. Datos: 1, 0, 2, 1, 3, 2, 1, 0, 1, 2, 1, 4, 2, 1, 0, 2, 1, 1. Los valores se ordenan de menor a mayor: $x_1 < x_2 < \\dots < x_{5}$.",
  "ask": "Construyendo la tabla de frecuencias, el valor de $f_{1}$ (frecuencia absoluta de $x_{1}=0$) es:",
  "alts": [
   "$8$",
   "$4$",
   "$2$",
   "$3$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Conteo ordenado de valores (}n=18\\text{):}",
  "pautaSteps": [
   "x_{1}=0,\\ x_{2}=1,\\ x_{3}=2,\\ x_{4}=3,\\ x_{5}=4",
   "f_{1}=3,\\ f_{2}=8,\\ f_{3}=5,\\ f_{4}=1,\\ f_{5}=1",
   "F_{1}=3,\\ F_{2}=11,\\ F_{3}=16,\\ F_{4}=17,\\ F_{5}=18",
   "h_{1}=0{,}17,\\ h_{2}=0{,}44,\\ h_{3}=0{,}28,\\ h_{4}=0{,}06,\\ h_{5}=0{,}06",
   "H_{i}=F_{i}/n:\\ H_{1}=0{,}17,\\ H_{2}=0{,}61,\\ H_{3}=0{,}89,\\ H_{4}=0{,}94,\\ H_{5}=1{,}00"
  ],
  "conc": "El valor $x_{1}=0$ aparece 3 veces en los datos: $f_{1} = 3$."
 },
 {
  "tipo": "Tabla completa · F_i acumulada",
  "ctx": "Educación · Estudiantes",
  "enun": "Se registró el número de hermanos en 18 estudiantes. Datos: 1, 0, 2, 1, 3, 2, 1, 0, 1, 2, 1, 4, 2, 1, 0, 2, 1, 1. Los valores se ordenan de menor a mayor: $x_1 < x_2 < \\dots < x_{5}$.",
  "ask": "Construyendo la tabla de frecuencias, el valor de $F_{3}$ (frecuencia absoluta acumulada hasta $x_{3}=2$) es:",
  "alts": [
   "$5$",
   "$11$",
   "$16$",
   "$17$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Conteo ordenado de valores (}n=18\\text{):}",
  "pautaSteps": [
   "x_{1}=0,\\ x_{2}=1,\\ x_{3}=2,\\ x_{4}=3,\\ x_{5}=4",
   "f_{1}=3,\\ f_{2}=8,\\ f_{3}=5,\\ f_{4}=1,\\ f_{5}=1",
   "F_{1}=3,\\ F_{2}=11,\\ F_{3}=16,\\ F_{4}=17,\\ F_{5}=18",
   "h_{1}=0{,}17,\\ h_{2}=0{,}44,\\ h_{3}=0{,}28,\\ h_{4}=0{,}06,\\ h_{5}=0{,}06",
   "H_{i}=F_{i}/n:\\ H_{1}=0{,}17,\\ H_{2}=0{,}61,\\ H_{3}=0{,}89,\\ H_{4}=0{,}94,\\ H_{5}=1{,}00"
  ],
  "conc": "$F_{3} = 16$: 16 de los 18 datos son menores o iguales a 2."
 },
 {
  "tipo": "Tabla completa · H_i acumulada",
  "ctx": "Educación · Estudiantes",
  "enun": "Se registró el número de hermanos en 18 estudiantes. Datos: 1, 0, 2, 1, 3, 2, 1, 0, 1, 2, 1, 4, 2, 1, 0, 2, 1, 1. Los valores se ordenan de menor a mayor: $x_1 < x_2 < \\dots < x_{5}$.",
  "ask": "Construyendo la tabla de frecuencias, el valor de $H_{4}$ (frecuencia relativa acumulada hasta $x_{4}=3$, calculada como $F_{4}/n$ y redondeada a 2 decimales) es:",
  "alts": [
   "$H_{4} = 0{,}06$",
   "$H_{4} = 0{,}89$",
   "$H_{4} = 1{,}00$",
   "$H_{4} = 0{,}94$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Conteo ordenado de valores (}n=18\\text{):}",
  "pautaSteps": [
   "x_{1}=0,\\ x_{2}=1,\\ x_{3}=2,\\ x_{4}=3,\\ x_{5}=4",
   "f_{1}=3,\\ f_{2}=8,\\ f_{3}=5,\\ f_{4}=1,\\ f_{5}=1",
   "F_{1}=3,\\ F_{2}=11,\\ F_{3}=16,\\ F_{4}=17,\\ F_{5}=18",
   "h_{1}=0{,}17,\\ h_{2}=0{,}44,\\ h_{3}=0{,}28,\\ h_{4}=0{,}06,\\ h_{5}=0{,}06",
   "H_{i}=F_{i}/n:\\ H_{1}=0{,}17,\\ H_{2}=0{,}61,\\ H_{3}=0{,}89,\\ H_{4}=0{,}94,\\ H_{5}=1{,}00"
  ],
  "conc": "$H_{4} = \\dfrac{17}{18} \\approx 0{,}94$: cerca del 94% de los datos es menor o igual a 3."
 },
 {
  "tipo": "Tabla completa · f_i",
  "ctx": "Hogar · Mascotas",
  "enun": "Se registró el número de mascotas en 22 hogares. Datos: 1, 0, 2, 1, 0, 1, 3, 1, 0, 2, 1, 0, 1, 2, 0, 1, 1, 0, 2, 1, 0, 1. Los valores se ordenan de menor a mayor: $x_1 < x_2 < \\dots < x_{4}$.",
  "ask": "Construyendo la tabla de frecuencias, el valor de $f_{1}$ (frecuencia absoluta de $x_{1}=0$) es:",
  "alts": [
   "$7$",
   "$10$",
   "$8$",
   "$6$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Conteo ordenado de valores (}n=22\\text{):}",
  "pautaSteps": [
   "x_{1}=0,\\ x_{2}=1,\\ x_{3}=2,\\ x_{4}=3",
   "f_{1}=7,\\ f_{2}=10,\\ f_{3}=4,\\ f_{4}=1",
   "F_{1}=7,\\ F_{2}=17,\\ F_{3}=21,\\ F_{4}=22",
   "h_{1}=0{,}32,\\ h_{2}=0{,}45,\\ h_{3}=0{,}18,\\ h_{4}=0{,}05",
   "H_{i}=F_{i}/n:\\ H_{1}=0{,}32,\\ H_{2}=0{,}77,\\ H_{3}=0{,}95,\\ H_{4}=1{,}00"
  ],
  "conc": "El valor $x_{1}=0$ aparece 7 veces en los datos: $f_{1} = 7$."
 },
 {
  "tipo": "Tabla completa · F_i acumulada",
  "ctx": "Hogar · Mascotas",
  "enun": "Se registró el número de mascotas en 22 hogares. Datos: 1, 0, 2, 1, 0, 1, 3, 1, 0, 2, 1, 0, 1, 2, 0, 1, 1, 0, 2, 1, 0, 1. Los valores se ordenan de menor a mayor: $x_1 < x_2 < \\dots < x_{4}$.",
  "ask": "Construyendo la tabla de frecuencias, el valor de $F_{3}$ (frecuencia absoluta acumulada hasta $x_{3}=2$) es:",
  "alts": [
   "$21$",
   "$4$",
   "$17$",
   "$22$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Conteo ordenado de valores (}n=22\\text{):}",
  "pautaSteps": [
   "x_{1}=0,\\ x_{2}=1,\\ x_{3}=2,\\ x_{4}=3",
   "f_{1}=7,\\ f_{2}=10,\\ f_{3}=4,\\ f_{4}=1",
   "F_{1}=7,\\ F_{2}=17,\\ F_{3}=21,\\ F_{4}=22",
   "h_{1}=0{,}32,\\ h_{2}=0{,}45,\\ h_{3}=0{,}18,\\ h_{4}=0{,}05",
   "H_{i}=F_{i}/n:\\ H_{1}=0{,}32,\\ H_{2}=0{,}77,\\ H_{3}=0{,}95,\\ H_{4}=1{,}00"
  ],
  "conc": "$F_{3} = 21$: 21 de los 22 datos son menores o iguales a 2."
 },
 {
  "tipo": "Tabla completa · h_i",
  "ctx": "Hogar · Mascotas",
  "enun": "Se registró el número de mascotas en 22 hogares. Datos: 1, 0, 2, 1, 0, 1, 3, 1, 0, 2, 1, 0, 1, 2, 0, 1, 1, 0, 2, 1, 0, 1. Los valores se ordenan de menor a mayor: $x_1 < x_2 < \\dots < x_{4}$.",
  "ask": "Construyendo la tabla de frecuencias, el valor de $h_{3}$ (frecuencia relativa de $x_{3}=2$) es:",
  "alts": [
   "$h_{3} = 0{,}95$",
   "$h_{3} = 0{,}18$",
   "$h_{3} = 0{,}05$",
   "$h_{3} = 0{,}45$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Conteo ordenado de valores (}n=22\\text{):}",
  "pautaSteps": [
   "x_{1}=0,\\ x_{2}=1,\\ x_{3}=2,\\ x_{4}=3",
   "f_{1}=7,\\ f_{2}=10,\\ f_{3}=4,\\ f_{4}=1",
   "F_{1}=7,\\ F_{2}=17,\\ F_{3}=21,\\ F_{4}=22",
   "h_{1}=0{,}32,\\ h_{2}=0{,}45,\\ h_{3}=0{,}18,\\ h_{4}=0{,}05",
   "H_{i}=F_{i}/n:\\ H_{1}=0{,}32,\\ H_{2}=0{,}77,\\ H_{3}=0{,}95,\\ H_{4}=1{,}00"
  ],
  "conc": "$h_{3} = \\dfrac{4}{22} \\approx 0{,}18$: cerca del 18% de los datos vale 2."
 },
 {
  "tipo": "Tabla completa · f_i",
  "ctx": "Hogar · Vehículos",
  "enun": "Se registró el número de autos en 20 hogares. Datos: 1, 2, 1, 0, 1, 2, 1, 1, 0, 2, 1, 3, 1, 2, 1, 0, 1, 2, 1, 1. Los valores se ordenan de menor a mayor: $x_1 < x_2 < \\dots < x_{4}$.",
  "ask": "Construyendo la tabla de frecuencias, el valor de $f_{1}$ (frecuencia absoluta de $x_{1}=0$) es:",
  "alts": [
   "$11$",
   "$4$",
   "$3$",
   "$2$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Conteo ordenado de valores (}n=20\\text{):}",
  "pautaSteps": [
   "x_{1}=0,\\ x_{2}=1,\\ x_{3}=2,\\ x_{4}=3",
   "f_{1}=3,\\ f_{2}=11,\\ f_{3}=5,\\ f_{4}=1",
   "F_{1}=3,\\ F_{2}=14,\\ F_{3}=19,\\ F_{4}=20",
   "h_{1}=0{,}15,\\ h_{2}=0{,}55,\\ h_{3}=0{,}25,\\ h_{4}=0{,}05",
   "H_{i}=F_{i}/n:\\ H_{1}=0{,}15,\\ H_{2}=0{,}70,\\ H_{3}=0{,}95,\\ H_{4}=1{,}00"
  ],
  "conc": "El valor $x_{1}=0$ aparece 3 veces en los datos: $f_{1} = 3$."
 },
 {
  "tipo": "Tabla completa · F_i acumulada",
  "ctx": "Hogar · Vehículos",
  "enun": "Se registró el número de autos en 20 hogares. Datos: 1, 2, 1, 0, 1, 2, 1, 1, 0, 2, 1, 3, 1, 2, 1, 0, 1, 2, 1, 1. Los valores se ordenan de menor a mayor: $x_1 < x_2 < \\dots < x_{4}$.",
  "ask": "Construyendo la tabla de frecuencias, el valor de $F_{3}$ (frecuencia absoluta acumulada hasta $x_{3}=2$) es:",
  "alts": [
   "$5$",
   "$14$",
   "$20$",
   "$19$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Conteo ordenado de valores (}n=20\\text{):}",
  "pautaSteps": [
   "x_{1}=0,\\ x_{2}=1,\\ x_{3}=2,\\ x_{4}=3",
   "f_{1}=3,\\ f_{2}=11,\\ f_{3}=5,\\ f_{4}=1",
   "F_{1}=3,\\ F_{2}=14,\\ F_{3}=19,\\ F_{4}=20",
   "h_{1}=0{,}15,\\ h_{2}=0{,}55,\\ h_{3}=0{,}25,\\ h_{4}=0{,}05",
   "H_{i}=F_{i}/n:\\ H_{1}=0{,}15,\\ H_{2}=0{,}70,\\ H_{3}=0{,}95,\\ H_{4}=1{,}00"
  ],
  "conc": "$F_{3} = 19$: 19 de los 20 datos son menores o iguales a 2."
 },
 {
  "tipo": "Tabla completa · H_i acumulada",
  "ctx": "Hogar · Vehículos",
  "enun": "Se registró el número de autos en 20 hogares. Datos: 1, 2, 1, 0, 1, 2, 1, 1, 0, 2, 1, 3, 1, 2, 1, 0, 1, 2, 1, 1. Los valores se ordenan de menor a mayor: $x_1 < x_2 < \\dots < x_{4}$.",
  "ask": "Construyendo la tabla de frecuencias, el valor de $H_{3}$ (frecuencia relativa acumulada hasta $x_{3}=2$, calculada como $F_{3}/n$ y redondeada a 2 decimales) es:",
  "alts": [
   "$H_{3} = 0{,}95$",
   "$H_{3} = 0{,}25$",
   "$H_{3} = 0{,}70$",
   "$H_{3} = 1{,}00$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Conteo ordenado de valores (}n=20\\text{):}",
  "pautaSteps": [
   "x_{1}=0,\\ x_{2}=1,\\ x_{3}=2,\\ x_{4}=3",
   "f_{1}=3,\\ f_{2}=11,\\ f_{3}=5,\\ f_{4}=1",
   "F_{1}=3,\\ F_{2}=14,\\ F_{3}=19,\\ F_{4}=20",
   "h_{1}=0{,}15,\\ h_{2}=0{,}55,\\ h_{3}=0{,}25,\\ h_{4}=0{,}05",
   "H_{i}=F_{i}/n:\\ H_{1}=0{,}15,\\ H_{2}=0{,}70,\\ H_{3}=0{,}95,\\ H_{4}=1{,}00"
  ],
  "conc": "$H_{3} = \\dfrac{19}{20} = 0{,}95$: el 95% de los datos es menor o igual a 2."
 },
 {
  "tipo": "Tabla completa · f_i",
  "ctx": "Inmobiliaria · Arriendos",
  "enun": "Se registró el número de dormitorios en 19 departamentos en arriendo. Datos: 2, 3, 2, 1, 3, 2, 2, 4, 3, 2, 1, 2, 3, 2, 2, 1, 3, 2, 2. Los valores se ordenan de menor a mayor: $x_1 < x_2 < \\dots < x_{4}$.",
  "ask": "Construyendo la tabla de frecuencias, el valor de $f_{1}$ (frecuencia absoluta de $x_{1}=1$) es:",
  "alts": [
   "$10$",
   "$4$",
   "$2$",
   "$3$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Conteo ordenado de valores (}n=19\\text{):}",
  "pautaSteps": [
   "x_{1}=1,\\ x_{2}=2,\\ x_{3}=3,\\ x_{4}=4",
   "f_{1}=3,\\ f_{2}=10,\\ f_{3}=5,\\ f_{4}=1",
   "F_{1}=3,\\ F_{2}=13,\\ F_{3}=18,\\ F_{4}=19",
   "h_{1}=0{,}16,\\ h_{2}=0{,}53,\\ h_{3}=0{,}26,\\ h_{4}=0{,}05",
   "H_{i}=F_{i}/n:\\ H_{1}=0{,}16,\\ H_{2}=0{,}68,\\ H_{3}=0{,}95,\\ H_{4}=1{,}00"
  ],
  "conc": "El valor $x_{1}=1$ aparece 3 veces en los datos: $f_{1} = 3$."
 },
 {
  "tipo": "Tabla completa · F_i acumulada",
  "ctx": "Inmobiliaria · Arriendos",
  "enun": "Se registró el número de dormitorios en 19 departamentos en arriendo. Datos: 2, 3, 2, 1, 3, 2, 2, 4, 3, 2, 1, 2, 3, 2, 2, 1, 3, 2, 2. Los valores se ordenan de menor a mayor: $x_1 < x_2 < \\dots < x_{4}$.",
  "ask": "Construyendo la tabla de frecuencias, el valor de $F_{3}$ (frecuencia absoluta acumulada hasta $x_{3}=3$) es:",
  "alts": [
   "$5$",
   "$18$",
   "$13$",
   "$19$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Conteo ordenado de valores (}n=19\\text{):}",
  "pautaSteps": [
   "x_{1}=1,\\ x_{2}=2,\\ x_{3}=3,\\ x_{4}=4",
   "f_{1}=3,\\ f_{2}=10,\\ f_{3}=5,\\ f_{4}=1",
   "F_{1}=3,\\ F_{2}=13,\\ F_{3}=18,\\ F_{4}=19",
   "h_{1}=0{,}16,\\ h_{2}=0{,}53,\\ h_{3}=0{,}26,\\ h_{4}=0{,}05",
   "H_{i}=F_{i}/n:\\ H_{1}=0{,}16,\\ H_{2}=0{,}68,\\ H_{3}=0{,}95,\\ H_{4}=1{,}00"
  ],
  "conc": "$F_{3} = 18$: 18 de los 19 datos son menores o iguales a 3."
 },
 {
  "tipo": "Tabla completa · h_i",
  "ctx": "Inmobiliaria · Arriendos",
  "enun": "Se registró el número de dormitorios en 19 departamentos en arriendo. Datos: 2, 3, 2, 1, 3, 2, 2, 4, 3, 2, 1, 2, 3, 2, 2, 1, 3, 2, 2. Los valores se ordenan de menor a mayor: $x_1 < x_2 < \\dots < x_{4}$.",
  "ask": "Construyendo la tabla de frecuencias, el valor de $h_{3}$ (frecuencia relativa de $x_{3}=3$) es:",
  "alts": [
   "$h_{3} = 0{,}26$",
   "$h_{3} = 0{,}95$",
   "$h_{3} = 0{,}05$",
   "$h_{3} = 0{,}53$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Conteo ordenado de valores (}n=19\\text{):}",
  "pautaSteps": [
   "x_{1}=1,\\ x_{2}=2,\\ x_{3}=3,\\ x_{4}=4",
   "f_{1}=3,\\ f_{2}=10,\\ f_{3}=5,\\ f_{4}=1",
   "F_{1}=3,\\ F_{2}=13,\\ F_{3}=18,\\ F_{4}=19",
   "h_{1}=0{,}16,\\ h_{2}=0{,}53,\\ h_{3}=0{,}26,\\ h_{4}=0{,}05",
   "H_{i}=F_{i}/n:\\ H_{1}=0{,}16,\\ H_{2}=0{,}68,\\ H_{3}=0{,}95,\\ H_{4}=1{,}00"
  ],
  "conc": "$h_{3} = \\dfrac{5}{19} \\approx 0{,}26$: cerca del 26% de los datos vale 3."
 },
 {
  "tipo": "Tabla completa · f_i",
  "ctx": "Retail · Sucursales",
  "enun": "Se registró el número de empleados en 21 sucursales pequeñas. Datos: 4, 5, 3, 4, 6, 5, 4, 3, 5, 4, 7, 4, 5, 3, 4, 6, 5, 4, 3, 5, 4. Los valores se ordenan de menor a mayor: $x_1 < x_2 < \\dots < x_{5}$.",
  "ask": "Construyendo la tabla de frecuencias, el valor de $f_{1}$ (frecuencia absoluta de $x_{1}=3$) es:",
  "alts": [
   "$8$",
   "$5$",
   "$4$",
   "$3$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Conteo ordenado de valores (}n=21\\text{):}",
  "pautaSteps": [
   "x_{1}=3,\\ x_{2}=4,\\ x_{3}=5,\\ x_{4}=6,\\ x_{5}=7",
   "f_{1}=4,\\ f_{2}=8,\\ f_{3}=6,\\ f_{4}=2,\\ f_{5}=1",
   "F_{1}=4,\\ F_{2}=12,\\ F_{3}=18,\\ F_{4}=20,\\ F_{5}=21",
   "h_{1}=0{,}19,\\ h_{2}=0{,}38,\\ h_{3}=0{,}29,\\ h_{4}=0{,}10,\\ h_{5}=0{,}05",
   "H_{i}=F_{i}/n:\\ H_{1}=0{,}19,\\ H_{2}=0{,}57,\\ H_{3}=0{,}86,\\ H_{4}=0{,}95,\\ H_{5}=1{,}00"
  ],
  "conc": "El valor $x_{1}=3$ aparece 4 veces en los datos: $f_{1} = 4$."
 },
 {
  "tipo": "Tabla completa · F_i acumulada",
  "ctx": "Retail · Sucursales",
  "enun": "Se registró el número de empleados en 21 sucursales pequeñas. Datos: 4, 5, 3, 4, 6, 5, 4, 3, 5, 4, 7, 4, 5, 3, 4, 6, 5, 4, 3, 5, 4. Los valores se ordenan de menor a mayor: $x_1 < x_2 < \\dots < x_{5}$.",
  "ask": "Construyendo la tabla de frecuencias, el valor de $F_{3}$ (frecuencia absoluta acumulada hasta $x_{3}=5$) es:",
  "alts": [
   "$6$",
   "$18$",
   "$12$",
   "$20$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Conteo ordenado de valores (}n=21\\text{):}",
  "pautaSteps": [
   "x_{1}=3,\\ x_{2}=4,\\ x_{3}=5,\\ x_{4}=6,\\ x_{5}=7",
   "f_{1}=4,\\ f_{2}=8,\\ f_{3}=6,\\ f_{4}=2,\\ f_{5}=1",
   "F_{1}=4,\\ F_{2}=12,\\ F_{3}=18,\\ F_{4}=20,\\ F_{5}=21",
   "h_{1}=0{,}19,\\ h_{2}=0{,}38,\\ h_{3}=0{,}29,\\ h_{4}=0{,}10,\\ h_{5}=0{,}05",
   "H_{i}=F_{i}/n:\\ H_{1}=0{,}19,\\ H_{2}=0{,}57,\\ H_{3}=0{,}86,\\ H_{4}=0{,}95,\\ H_{5}=1{,}00"
  ],
  "conc": "$F_{3} = 18$: 18 de los 21 datos son menores o iguales a 5."
 },
 {
  "tipo": "Tabla completa · H_i acumulada",
  "ctx": "Retail · Sucursales",
  "enun": "Se registró el número de empleados en 21 sucursales pequeñas. Datos: 4, 5, 3, 4, 6, 5, 4, 3, 5, 4, 7, 4, 5, 3, 4, 6, 5, 4, 3, 5, 4. Los valores se ordenan de menor a mayor: $x_1 < x_2 < \\dots < x_{5}$.",
  "ask": "Construyendo la tabla de frecuencias, el valor de $H_{4}$ (frecuencia relativa acumulada hasta $x_{4}=6$, calculada como $F_{4}/n$ y redondeada a 2 decimales) es:",
  "alts": [
   "$H_{4} = 0{,}10$",
   "$H_{4} = 0{,}95$",
   "$H_{4} = 0{,}86$",
   "$H_{4} = 1{,}00$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Conteo ordenado de valores (}n=21\\text{):}",
  "pautaSteps": [
   "x_{1}=3,\\ x_{2}=4,\\ x_{3}=5,\\ x_{4}=6,\\ x_{5}=7",
   "f_{1}=4,\\ f_{2}=8,\\ f_{3}=6,\\ f_{4}=2,\\ f_{5}=1",
   "F_{1}=4,\\ F_{2}=12,\\ F_{3}=18,\\ F_{4}=20,\\ F_{5}=21",
   "h_{1}=0{,}19,\\ h_{2}=0{,}38,\\ h_{3}=0{,}29,\\ h_{4}=0{,}10,\\ h_{5}=0{,}05",
   "H_{i}=F_{i}/n:\\ H_{1}=0{,}19,\\ H_{2}=0{,}57,\\ H_{3}=0{,}86,\\ H_{4}=0{,}95,\\ H_{5}=1{,}00"
  ],
  "conc": "$H_{4} = \\dfrac{20}{21} \\approx 0{,}95$: cerca del 95% de los datos es menor o igual a 6."
 },
 {
  "tipo": "Tabla completa · f_i",
  "ctx": "Edición · Informes",
  "enun": "Se registró el número de errores de tipeo por página en 20 páginas de un informe. Datos: 1, 0, 2, 1, 3, 0, 1, 2, 1, 0, 4, 1, 2, 1, 0, 1, 5, 2, 1, 0. Los valores se ordenan de menor a mayor: $x_1 < x_2 < \\dots < x_{6}$.",
  "ask": "Construyendo la tabla de frecuencias, el valor de $f_{1}$ (frecuencia absoluta de $x_{1}=0$) es:",
  "alts": [
   "$5$",
   "$8$",
   "$6$",
   "$4$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Conteo ordenado de valores (}n=20\\text{):}",
  "pautaSteps": [
   "x_{1}=0,\\ x_{2}=1,\\ x_{3}=2,\\ x_{4}=3,\\ x_{5}=4,\\ x_{6}=5",
   "f_{1}=5,\\ f_{2}=8,\\ f_{3}=4,\\ f_{4}=1,\\ f_{5}=1,\\ f_{6}=1",
   "F_{1}=5,\\ F_{2}=13,\\ F_{3}=17,\\ F_{4}=18,\\ F_{5}=19,\\ F_{6}=20",
   "h_{1}=0{,}25,\\ h_{2}=0{,}40,\\ h_{3}=0{,}20,\\ h_{4}=0{,}05,\\ h_{5}=0{,}05,\\ h_{6}=0{,}05",
   "H_{i}=F_{i}/n:\\ H_{1}=0{,}25,\\ H_{2}=0{,}65,\\ H_{3}=0{,}85,\\ H_{4}=0{,}90,\\ H_{5}=0{,}95,\\ H_{6}=1{,}00"
  ],
  "conc": "El valor $x_{1}=0$ aparece 5 veces en los datos: $f_{1} = 5$."
 },
 {
  "tipo": "Tabla completa · F_i acumulada",
  "ctx": "Edición · Informes",
  "enun": "Se registró el número de errores de tipeo por página en 20 páginas de un informe. Datos: 1, 0, 2, 1, 3, 0, 1, 2, 1, 0, 4, 1, 2, 1, 0, 1, 5, 2, 1, 0. Los valores se ordenan de menor a mayor: $x_1 < x_2 < \\dots < x_{6}$.",
  "ask": "Construyendo la tabla de frecuencias, el valor de $F_{4}$ (frecuencia absoluta acumulada hasta $x_{4}=3$) es:",
  "alts": [
   "$1$",
   "$17$",
   "$19$",
   "$18$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Conteo ordenado de valores (}n=20\\text{):}",
  "pautaSteps": [
   "x_{1}=0,\\ x_{2}=1,\\ x_{3}=2,\\ x_{4}=3,\\ x_{5}=4,\\ x_{6}=5",
   "f_{1}=5,\\ f_{2}=8,\\ f_{3}=4,\\ f_{4}=1,\\ f_{5}=1,\\ f_{6}=1",
   "F_{1}=5,\\ F_{2}=13,\\ F_{3}=17,\\ F_{4}=18,\\ F_{5}=19,\\ F_{6}=20",
   "h_{1}=0{,}25,\\ h_{2}=0{,}40,\\ h_{3}=0{,}20,\\ h_{4}=0{,}05,\\ h_{5}=0{,}05,\\ h_{6}=0{,}05",
   "H_{i}=F_{i}/n:\\ H_{1}=0{,}25,\\ H_{2}=0{,}65,\\ H_{3}=0{,}85,\\ H_{4}=0{,}90,\\ H_{5}=0{,}95,\\ H_{6}=1{,}00"
  ],
  "conc": "$F_{4} = 18$: 18 de los 20 datos son menores o iguales a 3."
 },
 {
  "tipo": "Tabla completa · h_i",
  "ctx": "Edición · Informes",
  "enun": "Se registró el número de errores de tipeo por página en 20 páginas de un informe. Datos: 1, 0, 2, 1, 3, 0, 1, 2, 1, 0, 4, 1, 2, 1, 0, 1, 5, 2, 1, 0. Los valores se ordenan de menor a mayor: $x_1 < x_2 < \\dots < x_{6}$.",
  "ask": "Construyendo la tabla de frecuencias, el valor de $h_{5}$ (frecuencia relativa de $x_{5}=4$) es:",
  "alts": [
   "$h_{5} = 0{,}95$",
   "$h_{5} = 0{,}17$",
   "$h_{5} = 0{,}05$",
   "$h_{5} = 0{,}10$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Conteo ordenado de valores (}n=20\\text{):}",
  "pautaSteps": [
   "x_{1}=0,\\ x_{2}=1,\\ x_{3}=2,\\ x_{4}=3,\\ x_{5}=4,\\ x_{6}=5",
   "f_{1}=5,\\ f_{2}=8,\\ f_{3}=4,\\ f_{4}=1,\\ f_{5}=1,\\ f_{6}=1",
   "F_{1}=5,\\ F_{2}=13,\\ F_{3}=17,\\ F_{4}=18,\\ F_{5}=19,\\ F_{6}=20",
   "h_{1}=0{,}25,\\ h_{2}=0{,}40,\\ h_{3}=0{,}20,\\ h_{4}=0{,}05,\\ h_{5}=0{,}05,\\ h_{6}=0{,}05",
   "H_{i}=F_{i}/n:\\ H_{1}=0{,}25,\\ H_{2}=0{,}65,\\ H_{3}=0{,}85,\\ H_{4}=0{,}90,\\ H_{5}=0{,}95,\\ H_{6}=1{,}00"
  ],
  "conc": "$h_{5} = \\dfrac{1}{20} = 0{,}05$: el 5% de los datos vale 4."
 },
 {
  "tipo": "Tabla completa · f_i",
  "ctx": "Call center · Turnos",
  "enun": "Se registró el número de llamadas recibidas por hora en 22 turnos. Datos: 5, 6, 7, 5, 8, 6, 5, 7, 4, 6, 5, 9, 6, 5, 7, 6, 3, 5, 6, 7, 5, 6. Los valores se ordenan de menor a mayor: $x_1 < x_2 < \\dots < x_{7}$.",
  "ask": "Construyendo la tabla de frecuencias, el valor de $f_{1}$ (frecuencia absoluta de $x_{1}=3$) es:",
  "alts": [
   "$2$",
   "$3$",
   "$4$",
   "$1$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Conteo ordenado de valores (}n=22\\text{):}",
  "pautaSteps": [
   "x_{1}=3,\\ x_{2}=4,\\ x_{3}=5,\\ x_{4}=6,\\ x_{5}=7,\\ x_{6}=8,\\ x_{7}=9",
   "f_{1}=1,\\ f_{2}=1,\\ f_{3}=7,\\ f_{4}=7,\\ f_{5}=4,\\ f_{6}=1,\\ f_{7}=1",
   "F_{1}=1,\\ F_{2}=2,\\ F_{3}=9,\\ F_{4}=16,\\ F_{5}=20,\\ F_{6}=21,\\ F_{7}=22",
   "h_{1}=0{,}05,\\ h_{2}=0{,}05,\\ h_{3}=0{,}32,\\ h_{4}=0{,}32,\\ h_{5}=0{,}18,\\ h_{6}=0{,}05,\\ h_{7}=0{,}05",
   "H_{i}=F_{i}/n:\\ H_{1}=0{,}05,\\ H_{2}=0{,}09,\\ H_{3}=0{,}41,\\ H_{4}=0{,}73,\\ H_{5}=0{,}91,\\ H_{6}=0{,}95,\\ H_{7}=1{,}00"
  ],
  "conc": "El valor $x_{1}=3$ aparece 1 vez en los datos: $f_{1} = 1$."
 },
 {
  "tipo": "Tabla completa · F_i acumulada",
  "ctx": "Call center · Turnos",
  "enun": "Se registró el número de llamadas recibidas por hora en 22 turnos. Datos: 5, 6, 7, 5, 8, 6, 5, 7, 4, 6, 5, 9, 6, 5, 7, 6, 3, 5, 6, 7, 5, 6. Los valores se ordenan de menor a mayor: $x_1 < x_2 < \\dots < x_{7}$.",
  "ask": "Construyendo la tabla de frecuencias, el valor de $F_{4}$ (frecuencia absoluta acumulada hasta $x_{4}=6$) es:",
  "alts": [
   "$16$",
   "$7$",
   "$9$",
   "$20$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Conteo ordenado de valores (}n=22\\text{):}",
  "pautaSteps": [
   "x_{1}=3,\\ x_{2}=4,\\ x_{3}=5,\\ x_{4}=6,\\ x_{5}=7,\\ x_{6}=8,\\ x_{7}=9",
   "f_{1}=1,\\ f_{2}=1,\\ f_{3}=7,\\ f_{4}=7,\\ f_{5}=4,\\ f_{6}=1,\\ f_{7}=1",
   "F_{1}=1,\\ F_{2}=2,\\ F_{3}=9,\\ F_{4}=16,\\ F_{5}=20,\\ F_{6}=21,\\ F_{7}=22",
   "h_{1}=0{,}05,\\ h_{2}=0{,}05,\\ h_{3}=0{,}32,\\ h_{4}=0{,}32,\\ h_{5}=0{,}18,\\ h_{6}=0{,}05,\\ h_{7}=0{,}05",
   "H_{i}=F_{i}/n:\\ H_{1}=0{,}05,\\ H_{2}=0{,}09,\\ H_{3}=0{,}41,\\ H_{4}=0{,}73,\\ H_{5}=0{,}91,\\ H_{6}=0{,}95,\\ H_{7}=1{,}00"
  ],
  "conc": "$F_{4} = 16$: 16 de los 22 datos son menores o iguales a 6."
 },
 {
  "tipo": "Tabla completa · H_i acumulada",
  "ctx": "Call center · Turnos",
  "enun": "Se registró el número de llamadas recibidas por hora en 22 turnos. Datos: 5, 6, 7, 5, 8, 6, 5, 7, 4, 6, 5, 9, 6, 5, 7, 6, 3, 5, 6, 7, 5, 6. Los valores se ordenan de menor a mayor: $x_1 < x_2 < \\dots < x_{7}$.",
  "ask": "Construyendo la tabla de frecuencias, el valor de $H_{6}$ (frecuencia relativa acumulada hasta $x_{6}=8$, calculada como $F_{6}/n$ y redondeada a 2 decimales) es:",
  "alts": [
   "$H_{6} = 0{,}95$",
   "$H_{6} = 0{,}05$",
   "$H_{6} = 0{,}91$",
   "$H_{6} = 1{,}00$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Conteo ordenado de valores (}n=22\\text{):}",
  "pautaSteps": [
   "x_{1}=3,\\ x_{2}=4,\\ x_{3}=5,\\ x_{4}=6,\\ x_{5}=7,\\ x_{6}=8,\\ x_{7}=9",
   "f_{1}=1,\\ f_{2}=1,\\ f_{3}=7,\\ f_{4}=7,\\ f_{5}=4,\\ f_{6}=1,\\ f_{7}=1",
   "F_{1}=1,\\ F_{2}=2,\\ F_{3}=9,\\ F_{4}=16,\\ F_{5}=20,\\ F_{6}=21,\\ F_{7}=22",
   "h_{1}=0{,}05,\\ h_{2}=0{,}05,\\ h_{3}=0{,}32,\\ h_{4}=0{,}32,\\ h_{5}=0{,}18,\\ h_{6}=0{,}05,\\ h_{7}=0{,}05",
   "H_{i}=F_{i}/n:\\ H_{1}=0{,}05,\\ H_{2}=0{,}09,\\ H_{3}=0{,}41,\\ H_{4}=0{,}73,\\ H_{5}=0{,}91,\\ H_{6}=0{,}95,\\ H_{7}=1{,}00"
  ],
  "conc": "$H_{6} = \\dfrac{21}{22} \\approx 0{,}95$: cerca del 95% de los datos es menor o igual a 8."
 },
 {
  "tipo": "Tabla completa · f_i",
  "ctx": "Deporte · Torneo",
  "enun": "Se registró el número de goles anotados por partido en 20 encuentros. Datos: 1, 0, 2, 1, 0, 2, 3, 1, 0, 1, 2, 0, 1, 4, 1, 0, 2, 1, 0, 1. Los valores se ordenan de menor a mayor: $x_1 < x_2 < \\dots < x_{5}$.",
  "ask": "Construyendo la tabla de frecuencias, el valor de $f_{1}$ (frecuencia absoluta de $x_{1}=0$) es:",
  "alts": [
   "$8$",
   "$6$",
   "$7$",
   "$5$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Conteo ordenado de valores (}n=20\\text{):}",
  "pautaSteps": [
   "x_{1}=0,\\ x_{2}=1,\\ x_{3}=2,\\ x_{4}=3,\\ x_{5}=4",
   "f_{1}=6,\\ f_{2}=8,\\ f_{3}=4,\\ f_{4}=1,\\ f_{5}=1",
   "F_{1}=6,\\ F_{2}=14,\\ F_{3}=18,\\ F_{4}=19,\\ F_{5}=20",
   "h_{1}=0{,}30,\\ h_{2}=0{,}40,\\ h_{3}=0{,}20,\\ h_{4}=0{,}05,\\ h_{5}=0{,}05",
   "H_{i}=F_{i}/n:\\ H_{1}=0{,}30,\\ H_{2}=0{,}70,\\ H_{3}=0{,}90,\\ H_{4}=0{,}95,\\ H_{5}=1{,}00"
  ],
  "conc": "El valor $x_{1}=0$ aparece 6 veces en los datos: $f_{1} = 6$."
 },
 {
  "tipo": "Tabla completa · F_i acumulada",
  "ctx": "Deporte · Torneo",
  "enun": "Se registró el número de goles anotados por partido en 20 encuentros. Datos: 1, 0, 2, 1, 0, 2, 3, 1, 0, 1, 2, 0, 1, 4, 1, 0, 2, 1, 0, 1. Los valores se ordenan de menor a mayor: $x_1 < x_2 < \\dots < x_{5}$.",
  "ask": "Construyendo la tabla de frecuencias, el valor de $F_{3}$ (frecuencia absoluta acumulada hasta $x_{3}=2$) es:",
  "alts": [
   "$4$",
   "$14$",
   "$18$",
   "$19$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Conteo ordenado de valores (}n=20\\text{):}",
  "pautaSteps": [
   "x_{1}=0,\\ x_{2}=1,\\ x_{3}=2,\\ x_{4}=3,\\ x_{5}=4",
   "f_{1}=6,\\ f_{2}=8,\\ f_{3}=4,\\ f_{4}=1,\\ f_{5}=1",
   "F_{1}=6,\\ F_{2}=14,\\ F_{3}=18,\\ F_{4}=19,\\ F_{5}=20",
   "h_{1}=0{,}30,\\ h_{2}=0{,}40,\\ h_{3}=0{,}20,\\ h_{4}=0{,}05,\\ h_{5}=0{,}05",
   "H_{i}=F_{i}/n:\\ H_{1}=0{,}30,\\ H_{2}=0{,}70,\\ H_{3}=0{,}90,\\ H_{4}=0{,}95,\\ H_{5}=1{,}00"
  ],
  "conc": "$F_{3} = 18$: 18 de los 20 datos son menores o iguales a 2."
 },
 {
  "tipo": "Tabla completa · h_i",
  "ctx": "Deporte · Torneo",
  "enun": "Se registró el número de goles anotados por partido en 20 encuentros. Datos: 1, 0, 2, 1, 0, 2, 3, 1, 0, 1, 2, 0, 1, 4, 1, 0, 2, 1, 0, 1. Los valores se ordenan de menor a mayor: $x_1 < x_2 < \\dots < x_{5}$.",
  "ask": "Construyendo la tabla de frecuencias, el valor de $h_{4}$ (frecuencia relativa de $x_{4}=3$) es:",
  "alts": [
   "$h_{4} = 0{,}95$",
   "$h_{4} = 0{,}20$",
   "$h_{4} = 0{,}10$",
   "$h_{4} = 0{,}05$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Conteo ordenado de valores (}n=20\\text{):}",
  "pautaSteps": [
   "x_{1}=0,\\ x_{2}=1,\\ x_{3}=2,\\ x_{4}=3,\\ x_{5}=4",
   "f_{1}=6,\\ f_{2}=8,\\ f_{3}=4,\\ f_{4}=1,\\ f_{5}=1",
   "F_{1}=6,\\ F_{2}=14,\\ F_{3}=18,\\ F_{4}=19,\\ F_{5}=20",
   "h_{1}=0{,}30,\\ h_{2}=0{,}40,\\ h_{3}=0{,}20,\\ h_{4}=0{,}05,\\ h_{5}=0{,}05",
   "H_{i}=F_{i}/n:\\ H_{1}=0{,}30,\\ H_{2}=0{,}70,\\ H_{3}=0{,}90,\\ H_{4}=0{,}95,\\ H_{5}=1{,}00"
  ],
  "conc": "$h_{4} = \\dfrac{1}{20} = 0{,}05$: el 5% de los datos vale 3."
 },
 {
  "tipo": "Tabla completa · f_i",
  "ctx": "Educación · Lectura",
  "enun": "Se registró el número de libros leídos al mes en 18 estudiantes. Datos: 2, 1, 0, 3, 2, 1, 2, 0, 4, 1, 2, 5, 1, 2, 0, 1, 2, 3. Los valores se ordenan de menor a mayor: $x_1 < x_2 < \\dots < x_{6}$.",
  "ask": "Construyendo la tabla de frecuencias, el valor de $f_{1}$ (frecuencia absoluta de $x_{1}=0$) es:",
  "alts": [
   "$3$",
   "$5$",
   "$4$",
   "$2$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Conteo ordenado de valores (}n=18\\text{):}",
  "pautaSteps": [
   "x_{1}=0,\\ x_{2}=1,\\ x_{3}=2,\\ x_{4}=3,\\ x_{5}=4,\\ x_{6}=5",
   "f_{1}=3,\\ f_{2}=5,\\ f_{3}=6,\\ f_{4}=2,\\ f_{5}=1,\\ f_{6}=1",
   "F_{1}=3,\\ F_{2}=8,\\ F_{3}=14,\\ F_{4}=16,\\ F_{5}=17,\\ F_{6}=18",
   "h_{1}=0{,}17,\\ h_{2}=0{,}28,\\ h_{3}=0{,}33,\\ h_{4}=0{,}11,\\ h_{5}=0{,}06,\\ h_{6}=0{,}06",
   "H_{i}=F_{i}/n:\\ H_{1}=0{,}17,\\ H_{2}=0{,}44,\\ H_{3}=0{,}78,\\ H_{4}=0{,}89,\\ H_{5}=0{,}94,\\ H_{6}=1{,}00"
  ],
  "conc": "El valor $x_{1}=0$ aparece 3 veces en los datos: $f_{1} = 3$."
 },
 {
  "tipo": "Tabla completa · F_i acumulada",
  "ctx": "Educación · Lectura",
  "enun": "Se registró el número de libros leídos al mes en 18 estudiantes. Datos: 2, 1, 0, 3, 2, 1, 2, 0, 4, 1, 2, 5, 1, 2, 0, 1, 2, 3. Los valores se ordenan de menor a mayor: $x_1 < x_2 < \\dots < x_{6}$.",
  "ask": "Construyendo la tabla de frecuencias, el valor de $F_{4}$ (frecuencia absoluta acumulada hasta $x_{4}=3$) es:",
  "alts": [
   "$2$",
   "$14$",
   "$17$",
   "$16$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Conteo ordenado de valores (}n=18\\text{):}",
  "pautaSteps": [
   "x_{1}=0,\\ x_{2}=1,\\ x_{3}=2,\\ x_{4}=3,\\ x_{5}=4,\\ x_{6}=5",
   "f_{1}=3,\\ f_{2}=5,\\ f_{3}=6,\\ f_{4}=2,\\ f_{5}=1,\\ f_{6}=1",
   "F_{1}=3,\\ F_{2}=8,\\ F_{3}=14,\\ F_{4}=16,\\ F_{5}=17,\\ F_{6}=18",
   "h_{1}=0{,}17,\\ h_{2}=0{,}28,\\ h_{3}=0{,}33,\\ h_{4}=0{,}11,\\ h_{5}=0{,}06,\\ h_{6}=0{,}06",
   "H_{i}=F_{i}/n:\\ H_{1}=0{,}17,\\ H_{2}=0{,}44,\\ H_{3}=0{,}78,\\ H_{4}=0{,}89,\\ H_{5}=0{,}94,\\ H_{6}=1{,}00"
  ],
  "conc": "$F_{4} = 16$: 16 de los 18 datos son menores o iguales a 3."
 },
 {
  "tipo": "Tabla completa · H_i acumulada",
  "ctx": "Educación · Lectura",
  "enun": "Se registró el número de libros leídos al mes en 18 estudiantes. Datos: 2, 1, 0, 3, 2, 1, 2, 0, 4, 1, 2, 5, 1, 2, 0, 1, 2, 3. Los valores se ordenan de menor a mayor: $x_1 < x_2 < \\dots < x_{6}$.",
  "ask": "Construyendo la tabla de frecuencias, el valor de $H_{5}$ (frecuencia relativa acumulada hasta $x_{5}=4$, calculada como $F_{5}/n$ y redondeada a 2 decimales) es:",
  "alts": [
   "$H_{5} = 0{,}06$",
   "$H_{5} = 0{,}94$",
   "$H_{5} = 0{,}89$",
   "$H_{5} = 1{,}00$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Conteo ordenado de valores (}n=18\\text{):}",
  "pautaSteps": [
   "x_{1}=0,\\ x_{2}=1,\\ x_{3}=2,\\ x_{4}=3,\\ x_{5}=4,\\ x_{6}=5",
   "f_{1}=3,\\ f_{2}=5,\\ f_{3}=6,\\ f_{4}=2,\\ f_{5}=1,\\ f_{6}=1",
   "F_{1}=3,\\ F_{2}=8,\\ F_{3}=14,\\ F_{4}=16,\\ F_{5}=17,\\ F_{6}=18",
   "h_{1}=0{,}17,\\ h_{2}=0{,}28,\\ h_{3}=0{,}33,\\ h_{4}=0{,}11,\\ h_{5}=0{,}06,\\ h_{6}=0{,}06",
   "H_{i}=F_{i}/n:\\ H_{1}=0{,}17,\\ H_{2}=0{,}44,\\ H_{3}=0{,}78,\\ H_{4}=0{,}89,\\ H_{5}=0{,}94,\\ H_{6}=1{,}00"
  ],
  "conc": "$H_{5} = \\dfrac{17}{18} \\approx 0{,}94$: cerca del 94% de los datos es menor o igual a 4."
 },
 {
  "tipo": "Tabla completa · f_i",
  "ctx": "Tránsito · Intersección",
  "enun": "Se registró el número de accidentes de tránsito por mes en 20 meses. Datos: 1, 2, 0, 1, 3, 2, 1, 0, 1, 2, 4, 1, 0, 2, 1, 1, 0, 2, 1, 1. Los valores se ordenan de menor a mayor: $x_1 < x_2 < \\dots < x_{5}$.",
  "ask": "Construyendo la tabla de frecuencias, el valor de $f_{1}$ (frecuencia absoluta de $x_{1}=0$) es:",
  "alts": [
   "$9$",
   "$5$",
   "$4$",
   "$3$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Conteo ordenado de valores (}n=20\\text{):}",
  "pautaSteps": [
   "x_{1}=0,\\ x_{2}=1,\\ x_{3}=2,\\ x_{4}=3,\\ x_{5}=4",
   "f_{1}=4,\\ f_{2}=9,\\ f_{3}=5,\\ f_{4}=1,\\ f_{5}=1",
   "F_{1}=4,\\ F_{2}=13,\\ F_{3}=18,\\ F_{4}=19,\\ F_{5}=20",
   "h_{1}=0{,}20,\\ h_{2}=0{,}45,\\ h_{3}=0{,}25,\\ h_{4}=0{,}05,\\ h_{5}=0{,}05",
   "H_{i}=F_{i}/n:\\ H_{1}=0{,}20,\\ H_{2}=0{,}65,\\ H_{3}=0{,}90,\\ H_{4}=0{,}95,\\ H_{5}=1{,}00"
  ],
  "conc": "El valor $x_{1}=0$ aparece 4 veces en los datos: $f_{1} = 4$."
 },
 {
  "tipo": "Tabla completa · F_i acumulada",
  "ctx": "Tránsito · Intersección",
  "enun": "Se registró el número de accidentes de tránsito por mes en 20 meses. Datos: 1, 2, 0, 1, 3, 2, 1, 0, 1, 2, 4, 1, 0, 2, 1, 1, 0, 2, 1, 1. Los valores se ordenan de menor a mayor: $x_1 < x_2 < \\dots < x_{5}$.",
  "ask": "Construyendo la tabla de frecuencias, el valor de $F_{3}$ (frecuencia absoluta acumulada hasta $x_{3}=2$) es:",
  "alts": [
   "$5$",
   "$13$",
   "$18$",
   "$19$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Conteo ordenado de valores (}n=20\\text{):}",
  "pautaSteps": [
   "x_{1}=0,\\ x_{2}=1,\\ x_{3}=2,\\ x_{4}=3,\\ x_{5}=4",
   "f_{1}=4,\\ f_{2}=9,\\ f_{3}=5,\\ f_{4}=1,\\ f_{5}=1",
   "F_{1}=4,\\ F_{2}=13,\\ F_{3}=18,\\ F_{4}=19,\\ F_{5}=20",
   "h_{1}=0{,}20,\\ h_{2}=0{,}45,\\ h_{3}=0{,}25,\\ h_{4}=0{,}05,\\ h_{5}=0{,}05",
   "H_{i}=F_{i}/n:\\ H_{1}=0{,}20,\\ H_{2}=0{,}65,\\ H_{3}=0{,}90,\\ H_{4}=0{,}95,\\ H_{5}=1{,}00"
  ],
  "conc": "$F_{3} = 18$: 18 de los 20 datos son menores o iguales a 2."
 },
 {
  "tipo": "Tabla completa · h_i",
  "ctx": "Tránsito · Intersección",
  "enun": "Se registró el número de accidentes de tránsito por mes en 20 meses. Datos: 1, 2, 0, 1, 3, 2, 1, 0, 1, 2, 4, 1, 0, 2, 1, 1, 0, 2, 1, 1. Los valores se ordenan de menor a mayor: $x_1 < x_2 < \\dots < x_{5}$.",
  "ask": "Construyendo la tabla de frecuencias, el valor de $h_{4}$ (frecuencia relativa de $x_{4}=3$) es:",
  "alts": [
   "$h_{4} = 0{,}05$",
   "$h_{4} = 0{,}95$",
   "$h_{4} = 0{,}25$",
   "$h_{4} = 0{,}20$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Conteo ordenado de valores (}n=20\\text{):}",
  "pautaSteps": [
   "x_{1}=0,\\ x_{2}=1,\\ x_{3}=2,\\ x_{4}=3,\\ x_{5}=4",
   "f_{1}=4,\\ f_{2}=9,\\ f_{3}=5,\\ f_{4}=1,\\ f_{5}=1",
   "F_{1}=4,\\ F_{2}=13,\\ F_{3}=18,\\ F_{4}=19,\\ F_{5}=20",
   "h_{1}=0{,}20,\\ h_{2}=0{,}45,\\ h_{3}=0{,}25,\\ h_{4}=0{,}05,\\ h_{5}=0{,}05",
   "H_{i}=F_{i}/n:\\ H_{1}=0{,}20,\\ H_{2}=0{,}65,\\ H_{3}=0{,}90,\\ H_{4}=0{,}95,\\ H_{5}=1{,}00"
  ],
  "conc": "$h_{4} = \\dfrac{1}{20} = 0{,}05$: el 5% de los datos vale 3."
 },
 {
  "tipo": "Tabla completa · f_i",
  "ctx": "Producción · Control de calidad",
  "enun": "Se registró el número de defectos por lote en 21 lotes de producción. Datos: 2, 1, 0, 3, 2, 1, 0, 1, 4, 2, 1, 0, 3, 2, 1, 5, 2, 1, 0, 2, 1. Los valores se ordenan de menor a mayor: $x_1 < x_2 < \\dots < x_{6}$.",
  "ask": "Construyendo la tabla de frecuencias, el valor de $f_{1}$ (frecuencia absoluta de $x_{1}=0$) es:",
  "alts": [
   "$7$",
   "$4$",
   "$5$",
   "$3$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Conteo ordenado de valores (}n=21\\text{):}",
  "pautaSteps": [
   "x_{1}=0,\\ x_{2}=1,\\ x_{3}=2,\\ x_{4}=3,\\ x_{5}=4,\\ x_{6}=5",
   "f_{1}=4,\\ f_{2}=7,\\ f_{3}=6,\\ f_{4}=2,\\ f_{5}=1,\\ f_{6}=1",
   "F_{1}=4,\\ F_{2}=11,\\ F_{3}=17,\\ F_{4}=19,\\ F_{5}=20,\\ F_{6}=21",
   "h_{1}=0{,}19,\\ h_{2}=0{,}33,\\ h_{3}=0{,}29,\\ h_{4}=0{,}10,\\ h_{5}=0{,}05,\\ h_{6}=0{,}05",
   "H_{i}=F_{i}/n:\\ H_{1}=0{,}19,\\ H_{2}=0{,}52,\\ H_{3}=0{,}81,\\ H_{4}=0{,}90,\\ H_{5}=0{,}95,\\ H_{6}=1{,}00"
  ],
  "conc": "El valor $x_{1}=0$ aparece 4 veces en los datos: $f_{1} = 4$."
 },
 {
  "tipo": "Tabla completa · F_i acumulada",
  "ctx": "Producción · Control de calidad",
  "enun": "Se registró el número de defectos por lote en 21 lotes de producción. Datos: 2, 1, 0, 3, 2, 1, 0, 1, 4, 2, 1, 0, 3, 2, 1, 5, 2, 1, 0, 2, 1. Los valores se ordenan de menor a mayor: $x_1 < x_2 < \\dots < x_{6}$.",
  "ask": "Construyendo la tabla de frecuencias, el valor de $F_{4}$ (frecuencia absoluta acumulada hasta $x_{4}=3$) es:",
  "alts": [
   "$2$",
   "$19$",
   "$17$",
   "$20$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Conteo ordenado de valores (}n=21\\text{):}",
  "pautaSteps": [
   "x_{1}=0,\\ x_{2}=1,\\ x_{3}=2,\\ x_{4}=3,\\ x_{5}=4,\\ x_{6}=5",
   "f_{1}=4,\\ f_{2}=7,\\ f_{3}=6,\\ f_{4}=2,\\ f_{5}=1,\\ f_{6}=1",
   "F_{1}=4,\\ F_{2}=11,\\ F_{3}=17,\\ F_{4}=19,\\ F_{5}=20,\\ F_{6}=21",
   "h_{1}=0{,}19,\\ h_{2}=0{,}33,\\ h_{3}=0{,}29,\\ h_{4}=0{,}10,\\ h_{5}=0{,}05,\\ h_{6}=0{,}05",
   "H_{i}=F_{i}/n:\\ H_{1}=0{,}19,\\ H_{2}=0{,}52,\\ H_{3}=0{,}81,\\ H_{4}=0{,}90,\\ H_{5}=0{,}95,\\ H_{6}=1{,}00"
  ],
  "conc": "$F_{4} = 19$: 19 de los 21 datos son menores o iguales a 3."
 },
 {
  "tipo": "Tabla completa · H_i acumulada",
  "ctx": "Producción · Control de calidad",
  "enun": "Se registró el número de defectos por lote en 21 lotes de producción. Datos: 2, 1, 0, 3, 2, 1, 0, 1, 4, 2, 1, 0, 3, 2, 1, 5, 2, 1, 0, 2, 1. Los valores se ordenan de menor a mayor: $x_1 < x_2 < \\dots < x_{6}$.",
  "ask": "Construyendo la tabla de frecuencias, el valor de $H_{5}$ (frecuencia relativa acumulada hasta $x_{5}=4$, calculada como $F_{5}/n$ y redondeada a 2 decimales) es:",
  "alts": [
   "$H_{5} = 0{,}05$",
   "$H_{5} = 0{,}90$",
   "$H_{5} = 1{,}00$",
   "$H_{5} = 0{,}95$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Conteo ordenado de valores (}n=21\\text{):}",
  "pautaSteps": [
   "x_{1}=0,\\ x_{2}=1,\\ x_{3}=2,\\ x_{4}=3,\\ x_{5}=4,\\ x_{6}=5",
   "f_{1}=4,\\ f_{2}=7,\\ f_{3}=6,\\ f_{4}=2,\\ f_{5}=1,\\ f_{6}=1",
   "F_{1}=4,\\ F_{2}=11,\\ F_{3}=17,\\ F_{4}=19,\\ F_{5}=20,\\ F_{6}=21",
   "h_{1}=0{,}19,\\ h_{2}=0{,}33,\\ h_{3}=0{,}29,\\ h_{4}=0{,}10,\\ h_{5}=0{,}05,\\ h_{6}=0{,}05",
   "H_{i}=F_{i}/n:\\ H_{1}=0{,}19,\\ H_{2}=0{,}52,\\ H_{3}=0{,}81,\\ H_{4}=0{,}90,\\ H_{5}=0{,}95,\\ H_{6}=1{,}00"
  ],
  "conc": "$H_{5} = \\dfrac{20}{21} \\approx 0{,}95$: cerca del 95% de los datos es menor o igual a 4."
 },
 {
  "tipo": "Tabla completa · f_i",
  "ctx": "Salud · Pacientes",
  "enun": "Se registró el número de visitas al médico al año en 20 pacientes. Datos: 3, 2, 1, 4, 3, 2, 0, 3, 5, 2, 3, 1, 2, 3, 4, 2, 3, 6, 2, 3. Los valores se ordenan de menor a mayor: $x_1 < x_2 < \\dots < x_{7}$.",
  "ask": "Construyendo la tabla de frecuencias, el valor de $f_{1}$ (frecuencia absoluta de $x_{1}=0$) es:",
  "alts": [
   "$2$",
   "$3$",
   "$1$",
   "$4$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Conteo ordenado de valores (}n=20\\text{):}",
  "pautaSteps": [
   "x_{1}=0,\\ x_{2}=1,\\ x_{3}=2,\\ x_{4}=3,\\ x_{5}=4,\\ x_{6}=5,\\ x_{7}=6",
   "f_{1}=1,\\ f_{2}=2,\\ f_{3}=6,\\ f_{4}=7,\\ f_{5}=2,\\ f_{6}=1,\\ f_{7}=1",
   "F_{1}=1,\\ F_{2}=3,\\ F_{3}=9,\\ F_{4}=16,\\ F_{5}=18,\\ F_{6}=19,\\ F_{7}=20",
   "h_{1}=0{,}05,\\ h_{2}=0{,}10,\\ h_{3}=0{,}30,\\ h_{4}=0{,}35,\\ h_{5}=0{,}10,\\ h_{6}=0{,}05,\\ h_{7}=0{,}05",
   "H_{i}=F_{i}/n:\\ H_{1}=0{,}05,\\ H_{2}=0{,}15,\\ H_{3}=0{,}45,\\ H_{4}=0{,}80,\\ H_{5}=0{,}90,\\ H_{6}=0{,}95,\\ H_{7}=1{,}00"
  ],
  "conc": "El valor $x_{1}=0$ aparece 1 vez en los datos: $f_{1} = 1$."
 },
 {
  "tipo": "Tabla completa · F_i acumulada",
  "ctx": "Salud · Pacientes",
  "enun": "Se registró el número de visitas al médico al año en 20 pacientes. Datos: 3, 2, 1, 4, 3, 2, 0, 3, 5, 2, 3, 1, 2, 3, 4, 2, 3, 6, 2, 3. Los valores se ordenan de menor a mayor: $x_1 < x_2 < \\dots < x_{7}$.",
  "ask": "Construyendo la tabla de frecuencias, el valor de $F_{4}$ (frecuencia absoluta acumulada hasta $x_{4}=3$) es:",
  "alts": [
   "$7$",
   "$9$",
   "$18$",
   "$16$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Conteo ordenado de valores (}n=20\\text{):}",
  "pautaSteps": [
   "x_{1}=0,\\ x_{2}=1,\\ x_{3}=2,\\ x_{4}=3,\\ x_{5}=4,\\ x_{6}=5,\\ x_{7}=6",
   "f_{1}=1,\\ f_{2}=2,\\ f_{3}=6,\\ f_{4}=7,\\ f_{5}=2,\\ f_{6}=1,\\ f_{7}=1",
   "F_{1}=1,\\ F_{2}=3,\\ F_{3}=9,\\ F_{4}=16,\\ F_{5}=18,\\ F_{6}=19,\\ F_{7}=20",
   "h_{1}=0{,}05,\\ h_{2}=0{,}10,\\ h_{3}=0{,}30,\\ h_{4}=0{,}35,\\ h_{5}=0{,}10,\\ h_{6}=0{,}05,\\ h_{7}=0{,}05",
   "H_{i}=F_{i}/n:\\ H_{1}=0{,}05,\\ H_{2}=0{,}15,\\ H_{3}=0{,}45,\\ H_{4}=0{,}80,\\ H_{5}=0{,}90,\\ H_{6}=0{,}95,\\ H_{7}=1{,}00"
  ],
  "conc": "$F_{4} = 16$: 16 de los 20 datos son menores o iguales a 3."
 },
 {
  "tipo": "Tabla completa · h_i",
  "ctx": "Salud · Pacientes",
  "enun": "Se registró el número de visitas al médico al año en 20 pacientes. Datos: 3, 2, 1, 4, 3, 2, 0, 3, 5, 2, 3, 1, 2, 3, 4, 2, 3, 6, 2, 3. Los valores se ordenan de menor a mayor: $x_1 < x_2 < \\dots < x_{7}$.",
  "ask": "Construyendo la tabla de frecuencias, el valor de $h_{6}$ (frecuencia relativa de $x_{6}=5$) es:",
  "alts": [
   "$h_{6} = 0{,}95$",
   "$h_{6} = 0{,}05$",
   "$h_{6} = 0{,}10$",
   "$h_{6} = 0{,}14$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Conteo ordenado de valores (}n=20\\text{):}",
  "pautaSteps": [
   "x_{1}=0,\\ x_{2}=1,\\ x_{3}=2,\\ x_{4}=3,\\ x_{5}=4,\\ x_{6}=5,\\ x_{7}=6",
   "f_{1}=1,\\ f_{2}=2,\\ f_{3}=6,\\ f_{4}=7,\\ f_{5}=2,\\ f_{6}=1,\\ f_{7}=1",
   "F_{1}=1,\\ F_{2}=3,\\ F_{3}=9,\\ F_{4}=16,\\ F_{5}=18,\\ F_{6}=19,\\ F_{7}=20",
   "h_{1}=0{,}05,\\ h_{2}=0{,}10,\\ h_{3}=0{,}30,\\ h_{4}=0{,}35,\\ h_{5}=0{,}10,\\ h_{6}=0{,}05,\\ h_{7}=0{,}05",
   "H_{i}=F_{i}/n:\\ H_{1}=0{,}05,\\ H_{2}=0{,}15,\\ H_{3}=0{,}45,\\ H_{4}=0{,}80,\\ H_{5}=0{,}90,\\ H_{6}=0{,}95,\\ H_{7}=1{,}00"
  ],
  "conc": "$h_{6} = \\dfrac{1}{20} = 0{,}05$: el 5% de los datos vale 5."
 },
 {
  "tipo": "Tabla completa · f_i",
  "ctx": "Educación · Rendimiento",
  "enun": "Se registró el número de materias reprobadas por semestre en 19 estudiantes. Datos: 0, 1, 0, 2, 0, 1, 0, 3, 1, 0, 1, 0, 2, 0, 1, 0, 1, 0, 1. Los valores se ordenan de menor a mayor: $x_1 < x_2 < \\dots < x_{4}$.",
  "ask": "Construyendo la tabla de frecuencias, el valor de $f_{1}$ (frecuencia absoluta de $x_{1}=0$) es:",
  "alts": [
   "$9$",
   "$7$",
   "$10$",
   "$8$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Conteo ordenado de valores (}n=19\\text{):}",
  "pautaSteps": [
   "x_{1}=0,\\ x_{2}=1,\\ x_{3}=2,\\ x_{4}=3",
   "f_{1}=9,\\ f_{2}=7,\\ f_{3}=2,\\ f_{4}=1",
   "F_{1}=9,\\ F_{2}=16,\\ F_{3}=18,\\ F_{4}=19",
   "h_{1}=0{,}47,\\ h_{2}=0{,}37,\\ h_{3}=0{,}11,\\ h_{4}=0{,}05",
   "H_{i}=F_{i}/n:\\ H_{1}=0{,}47,\\ H_{2}=0{,}84,\\ H_{3}=0{,}95,\\ H_{4}=1{,}00"
  ],
  "conc": "El valor $x_{1}=0$ aparece 9 veces en los datos: $f_{1} = 9$."
 },
 {
  "tipo": "Tabla completa · F_i acumulada",
  "ctx": "Educación · Rendimiento",
  "enun": "Se registró el número de materias reprobadas por semestre en 19 estudiantes. Datos: 0, 1, 0, 2, 0, 1, 0, 3, 1, 0, 1, 0, 2, 0, 1, 0, 1, 0, 1. Los valores se ordenan de menor a mayor: $x_1 < x_2 < \\dots < x_{4}$.",
  "ask": "Construyendo la tabla de frecuencias, el valor de $F_{3}$ (frecuencia absoluta acumulada hasta $x_{3}=2$) es:",
  "alts": [
   "$2$",
   "$16$",
   "$18$",
   "$19$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Conteo ordenado de valores (}n=19\\text{):}",
  "pautaSteps": [
   "x_{1}=0,\\ x_{2}=1,\\ x_{3}=2,\\ x_{4}=3",
   "f_{1}=9,\\ f_{2}=7,\\ f_{3}=2,\\ f_{4}=1",
   "F_{1}=9,\\ F_{2}=16,\\ F_{3}=18,\\ F_{4}=19",
   "h_{1}=0{,}47,\\ h_{2}=0{,}37,\\ h_{3}=0{,}11,\\ h_{4}=0{,}05",
   "H_{i}=F_{i}/n:\\ H_{1}=0{,}47,\\ H_{2}=0{,}84,\\ H_{3}=0{,}95,\\ H_{4}=1{,}00"
  ],
  "conc": "$F_{3} = 18$: 18 de los 19 datos son menores o iguales a 2."
 },
 {
  "tipo": "Tabla completa · H_i acumulada",
  "ctx": "Educación · Rendimiento",
  "enun": "Se registró el número de materias reprobadas por semestre en 19 estudiantes. Datos: 0, 1, 0, 2, 0, 1, 0, 3, 1, 0, 1, 0, 2, 0, 1, 0, 1, 0, 1. Los valores se ordenan de menor a mayor: $x_1 < x_2 < \\dots < x_{4}$.",
  "ask": "Construyendo la tabla de frecuencias, el valor de $H_{3}$ (frecuencia relativa acumulada hasta $x_{3}=2$, calculada como $F_{3}/n$ y redondeada a 2 decimales) es:",
  "alts": [
   "$H_{3} = 0{,}11$",
   "$H_{3} = 0{,}84$",
   "$H_{3} = 0{,}95$",
   "$H_{3} = 1{,}00$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Conteo ordenado de valores (}n=19\\text{):}",
  "pautaSteps": [
   "x_{1}=0,\\ x_{2}=1,\\ x_{3}=2,\\ x_{4}=3",
   "f_{1}=9,\\ f_{2}=7,\\ f_{3}=2,\\ f_{4}=1",
   "F_{1}=9,\\ F_{2}=16,\\ F_{3}=18,\\ F_{4}=19",
   "h_{1}=0{,}47,\\ h_{2}=0{,}37,\\ h_{3}=0{,}11,\\ h_{4}=0{,}05",
   "H_{i}=F_{i}/n:\\ H_{1}=0{,}47,\\ H_{2}=0{,}84,\\ H_{3}=0{,}95,\\ H_{4}=1{,}00"
  ],
  "conc": "$H_{3} = \\dfrac{18}{19} \\approx 0{,}95$: cerca del 95% de los datos es menor o igual a 2."
 },
 {
  "tipo": "Tabla completa · f_i",
  "ctx": "Oficina · Correos",
  "enun": "Se registró el número de correos recibidos por hora en 22 registros de una oficina. Datos: 4, 5, 6, 4, 7, 5, 4, 6, 3, 5, 4, 8, 5, 4, 6, 5, 2, 4, 5, 6, 4, 5. Los valores se ordenan de menor a mayor: $x_1 < x_2 < \\dots < x_{7}$.",
  "ask": "Construyendo la tabla de frecuencias, el valor de $f_{1}$ (frecuencia absoluta de $x_{1}=2$) es:",
  "alts": [
   "$2$",
   "$3$",
   "$4$",
   "$1$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Conteo ordenado de valores (}n=22\\text{):}",
  "pautaSteps": [
   "x_{1}=2,\\ x_{2}=3,\\ x_{3}=4,\\ x_{4}=5,\\ x_{5}=6,\\ x_{6}=7,\\ x_{7}=8",
   "f_{1}=1,\\ f_{2}=1,\\ f_{3}=7,\\ f_{4}=7,\\ f_{5}=4,\\ f_{6}=1,\\ f_{7}=1",
   "F_{1}=1,\\ F_{2}=2,\\ F_{3}=9,\\ F_{4}=16,\\ F_{5}=20,\\ F_{6}=21,\\ F_{7}=22",
   "h_{1}=0{,}05,\\ h_{2}=0{,}05,\\ h_{3}=0{,}32,\\ h_{4}=0{,}32,\\ h_{5}=0{,}18,\\ h_{6}=0{,}05,\\ h_{7}=0{,}05",
   "H_{i}=F_{i}/n:\\ H_{1}=0{,}05,\\ H_{2}=0{,}09,\\ H_{3}=0{,}41,\\ H_{4}=0{,}73,\\ H_{5}=0{,}91,\\ H_{6}=0{,}95,\\ H_{7}=1{,}00"
  ],
  "conc": "El valor $x_{1}=2$ aparece 1 vez en los datos: $f_{1} = 1$."
 },
 {
  "tipo": "Tabla completa · F_i acumulada",
  "ctx": "Oficina · Correos",
  "enun": "Se registró el número de correos recibidos por hora en 22 registros de una oficina. Datos: 4, 5, 6, 4, 7, 5, 4, 6, 3, 5, 4, 8, 5, 4, 6, 5, 2, 4, 5, 6, 4, 5. Los valores se ordenan de menor a mayor: $x_1 < x_2 < \\dots < x_{7}$.",
  "ask": "Construyendo la tabla de frecuencias, el valor de $F_{4}$ (frecuencia absoluta acumulada hasta $x_{4}=5$) es:",
  "alts": [
   "$16$",
   "$7$",
   "$9$",
   "$20$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Conteo ordenado de valores (}n=22\\text{):}",
  "pautaSteps": [
   "x_{1}=2,\\ x_{2}=3,\\ x_{3}=4,\\ x_{4}=5,\\ x_{5}=6,\\ x_{6}=7,\\ x_{7}=8",
   "f_{1}=1,\\ f_{2}=1,\\ f_{3}=7,\\ f_{4}=7,\\ f_{5}=4,\\ f_{6}=1,\\ f_{7}=1",
   "F_{1}=1,\\ F_{2}=2,\\ F_{3}=9,\\ F_{4}=16,\\ F_{5}=20,\\ F_{6}=21,\\ F_{7}=22",
   "h_{1}=0{,}05,\\ h_{2}=0{,}05,\\ h_{3}=0{,}32,\\ h_{4}=0{,}32,\\ h_{5}=0{,}18,\\ h_{6}=0{,}05,\\ h_{7}=0{,}05",
   "H_{i}=F_{i}/n:\\ H_{1}=0{,}05,\\ H_{2}=0{,}09,\\ H_{3}=0{,}41,\\ H_{4}=0{,}73,\\ H_{5}=0{,}91,\\ H_{6}=0{,}95,\\ H_{7}=1{,}00"
  ],
  "conc": "$F_{4} = 16$: 16 de los 22 datos son menores o iguales a 5."
 },
 {
  "tipo": "Tabla completa · h_i",
  "ctx": "Oficina · Correos",
  "enun": "Se registró el número de correos recibidos por hora en 22 registros de una oficina. Datos: 4, 5, 6, 4, 7, 5, 4, 6, 3, 5, 4, 8, 5, 4, 6, 5, 2, 4, 5, 6, 4, 5. Los valores se ordenan de menor a mayor: $x_1 < x_2 < \\dots < x_{7}$.",
  "ask": "Construyendo la tabla de frecuencias, el valor de $h_{6}$ (frecuencia relativa de $x_{6}=7$) es:",
  "alts": [
   "$h_{6} = 0{,}95$",
   "$h_{6} = 0{,}18$",
   "$h_{6} = 0{,}14$",
   "$h_{6} = 0{,}05$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Conteo ordenado de valores (}n=22\\text{):}",
  "pautaSteps": [
   "x_{1}=2,\\ x_{2}=3,\\ x_{3}=4,\\ x_{4}=5,\\ x_{5}=6,\\ x_{6}=7,\\ x_{7}=8",
   "f_{1}=1,\\ f_{2}=1,\\ f_{3}=7,\\ f_{4}=7,\\ f_{5}=4,\\ f_{6}=1,\\ f_{7}=1",
   "F_{1}=1,\\ F_{2}=2,\\ F_{3}=9,\\ F_{4}=16,\\ F_{5}=20,\\ F_{6}=21,\\ F_{7}=22",
   "h_{1}=0{,}05,\\ h_{2}=0{,}05,\\ h_{3}=0{,}32,\\ h_{4}=0{,}32,\\ h_{5}=0{,}18,\\ h_{6}=0{,}05,\\ h_{7}=0{,}05",
   "H_{i}=F_{i}/n:\\ H_{1}=0{,}05,\\ H_{2}=0{,}09,\\ H_{3}=0{,}41,\\ H_{4}=0{,}73,\\ H_{5}=0{,}91,\\ H_{6}=0{,}95,\\ H_{7}=1{,}00"
  ],
  "conc": "$h_{6} = \\dfrac{1}{22} \\approx 0{,}05$: cerca del 5% de los datos vale 7."
 },
 {
  "tipo": "Tabla completa · f_i",
  "ctx": "Retail · Supermercado",
  "enun": "Se registró el número de productos comprados por boleta en 20 boletas. Datos: 3, 2, 4, 1, 3, 2, 5, 3, 2, 4, 1, 3, 6, 2, 3, 4, 2, 3, 1, 2. Los valores se ordenan de menor a mayor: $x_1 < x_2 < \\dots < x_{6}$.",
  "ask": "Construyendo la tabla de frecuencias, el valor de $f_{1}$ (frecuencia absoluta de $x_{1}=1$) es:",
  "alts": [
   "$6$",
   "$4$",
   "$3$",
   "$2$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Conteo ordenado de valores (}n=20\\text{):}",
  "pautaSteps": [
   "x_{1}=1,\\ x_{2}=2,\\ x_{3}=3,\\ x_{4}=4,\\ x_{5}=5,\\ x_{6}=6",
   "f_{1}=3,\\ f_{2}=6,\\ f_{3}=6,\\ f_{4}=3,\\ f_{5}=1,\\ f_{6}=1",
   "F_{1}=3,\\ F_{2}=9,\\ F_{3}=15,\\ F_{4}=18,\\ F_{5}=19,\\ F_{6}=20",
   "h_{1}=0{,}15,\\ h_{2}=0{,}30,\\ h_{3}=0{,}30,\\ h_{4}=0{,}15,\\ h_{5}=0{,}05,\\ h_{6}=0{,}05",
   "H_{i}=F_{i}/n:\\ H_{1}=0{,}15,\\ H_{2}=0{,}45,\\ H_{3}=0{,}75,\\ H_{4}=0{,}90,\\ H_{5}=0{,}95,\\ H_{6}=1{,}00"
  ],
  "conc": "El valor $x_{1}=1$ aparece 3 veces en los datos: $f_{1} = 3$."
 },
 {
  "tipo": "Tabla completa · F_i acumulada",
  "ctx": "Retail · Supermercado",
  "enun": "Se registró el número de productos comprados por boleta en 20 boletas. Datos: 3, 2, 4, 1, 3, 2, 5, 3, 2, 4, 1, 3, 6, 2, 3, 4, 2, 3, 1, 2. Los valores se ordenan de menor a mayor: $x_1 < x_2 < \\dots < x_{6}$.",
  "ask": "Construyendo la tabla de frecuencias, el valor de $F_{4}$ (frecuencia absoluta acumulada hasta $x_{4}=4$) es:",
  "alts": [
   "$3$",
   "$15$",
   "$18$",
   "$19$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Conteo ordenado de valores (}n=20\\text{):}",
  "pautaSteps": [
   "x_{1}=1,\\ x_{2}=2,\\ x_{3}=3,\\ x_{4}=4,\\ x_{5}=5,\\ x_{6}=6",
   "f_{1}=3,\\ f_{2}=6,\\ f_{3}=6,\\ f_{4}=3,\\ f_{5}=1,\\ f_{6}=1",
   "F_{1}=3,\\ F_{2}=9,\\ F_{3}=15,\\ F_{4}=18,\\ F_{5}=19,\\ F_{6}=20",
   "h_{1}=0{,}15,\\ h_{2}=0{,}30,\\ h_{3}=0{,}30,\\ h_{4}=0{,}15,\\ h_{5}=0{,}05,\\ h_{6}=0{,}05",
   "H_{i}=F_{i}/n:\\ H_{1}=0{,}15,\\ H_{2}=0{,}45,\\ H_{3}=0{,}75,\\ H_{4}=0{,}90,\\ H_{5}=0{,}95,\\ H_{6}=1{,}00"
  ],
  "conc": "$F_{4} = 18$: 18 de los 20 datos son menores o iguales a 4."
 },
 {
  "tipo": "Tabla completa · H_i acumulada",
  "ctx": "Retail · Supermercado",
  "enun": "Se registró el número de productos comprados por boleta en 20 boletas. Datos: 3, 2, 4, 1, 3, 2, 5, 3, 2, 4, 1, 3, 6, 2, 3, 4, 2, 3, 1, 2. Los valores se ordenan de menor a mayor: $x_1 < x_2 < \\dots < x_{6}$.",
  "ask": "Construyendo la tabla de frecuencias, el valor de $H_{5}$ (frecuencia relativa acumulada hasta $x_{5}=5$, calculada como $F_{5}/n$ y redondeada a 2 decimales) es:",
  "alts": [
   "$H_{5} = 0{,}95$",
   "$H_{5} = 0{,}05$",
   "$H_{5} = 0{,}90$",
   "$H_{5} = 1{,}00$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Conteo ordenado de valores (}n=20\\text{):}",
  "pautaSteps": [
   "x_{1}=1,\\ x_{2}=2,\\ x_{3}=3,\\ x_{4}=4,\\ x_{5}=5,\\ x_{6}=6",
   "f_{1}=3,\\ f_{2}=6,\\ f_{3}=6,\\ f_{4}=3,\\ f_{5}=1,\\ f_{6}=1",
   "F_{1}=3,\\ F_{2}=9,\\ F_{3}=15,\\ F_{4}=18,\\ F_{5}=19,\\ F_{6}=20",
   "h_{1}=0{,}15,\\ h_{2}=0{,}30,\\ h_{3}=0{,}30,\\ h_{4}=0{,}15,\\ h_{5}=0{,}05,\\ h_{6}=0{,}05",
   "H_{i}=F_{i}/n:\\ H_{1}=0{,}15,\\ H_{2}=0{,}45,\\ H_{3}=0{,}75,\\ H_{4}=0{,}90,\\ H_{5}=0{,}95,\\ H_{6}=1{,}00"
  ],
  "conc": "$H_{5} = \\dfrac{19}{20} = 0{,}95$: el 95% de los datos es menor o igual a 5."
 },
 {
  "tipo": "Tabla completa · f_i",
  "ctx": "E-commerce · Reclamos",
  "enun": "Se registró el número de reclamos recibidos por semana en 18 semanas de una tienda online. Datos: 1, 2, 0, 1, 3, 1, 2, 0, 1, 2, 4, 1, 0, 2, 1, 1, 2, 0. Los valores se ordenan de menor a mayor: $x_1 < x_2 < \\dots < x_{5}$.",
  "ask": "Construyendo la tabla de frecuencias, el valor de $f_{1}$ (frecuencia absoluta de $x_{1}=0$) es:",
  "alts": [
   "$4$",
   "$7$",
   "$5$",
   "$3$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Conteo ordenado de valores (}n=18\\text{):}",
  "pautaSteps": [
   "x_{1}=0,\\ x_{2}=1,\\ x_{3}=2,\\ x_{4}=3,\\ x_{5}=4",
   "f_{1}=4,\\ f_{2}=7,\\ f_{3}=5,\\ f_{4}=1,\\ f_{5}=1",
   "F_{1}=4,\\ F_{2}=11,\\ F_{3}=16,\\ F_{4}=17,\\ F_{5}=18",
   "h_{1}=0{,}22,\\ h_{2}=0{,}39,\\ h_{3}=0{,}28,\\ h_{4}=0{,}06,\\ h_{5}=0{,}06",
   "H_{i}=F_{i}/n:\\ H_{1}=0{,}22,\\ H_{2}=0{,}61,\\ H_{3}=0{,}89,\\ H_{4}=0{,}94,\\ H_{5}=1{,}00"
  ],
  "conc": "El valor $x_{1}=0$ aparece 4 veces en los datos: $f_{1} = 4$."
 },
 {
  "tipo": "Tabla completa · F_i acumulada",
  "ctx": "E-commerce · Reclamos",
  "enun": "Se registró el número de reclamos recibidos por semana en 18 semanas de una tienda online. Datos: 1, 2, 0, 1, 3, 1, 2, 0, 1, 2, 4, 1, 0, 2, 1, 1, 2, 0. Los valores se ordenan de menor a mayor: $x_1 < x_2 < \\dots < x_{5}$.",
  "ask": "Construyendo la tabla de frecuencias, el valor de $F_{3}$ (frecuencia absoluta acumulada hasta $x_{3}=2$) es:",
  "alts": [
   "$5$",
   "$16$",
   "$11$",
   "$17$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Conteo ordenado de valores (}n=18\\text{):}",
  "pautaSteps": [
   "x_{1}=0,\\ x_{2}=1,\\ x_{3}=2,\\ x_{4}=3,\\ x_{5}=4",
   "f_{1}=4,\\ f_{2}=7,\\ f_{3}=5,\\ f_{4}=1,\\ f_{5}=1",
   "F_{1}=4,\\ F_{2}=11,\\ F_{3}=16,\\ F_{4}=17,\\ F_{5}=18",
   "h_{1}=0{,}22,\\ h_{2}=0{,}39,\\ h_{3}=0{,}28,\\ h_{4}=0{,}06,\\ h_{5}=0{,}06",
   "H_{i}=F_{i}/n:\\ H_{1}=0{,}22,\\ H_{2}=0{,}61,\\ H_{3}=0{,}89,\\ H_{4}=0{,}94,\\ H_{5}=1{,}00"
  ],
  "conc": "$F_{3} = 16$: 16 de los 18 datos son menores o iguales a 2."
 },
 {
  "tipo": "Tabla completa · h_i",
  "ctx": "E-commerce · Reclamos",
  "enun": "Se registró el número de reclamos recibidos por semana en 18 semanas de una tienda online. Datos: 1, 2, 0, 1, 3, 1, 2, 0, 1, 2, 4, 1, 0, 2, 1, 1, 2, 0. Los valores se ordenan de menor a mayor: $x_1 < x_2 < \\dots < x_{5}$.",
  "ask": "Construyendo la tabla de frecuencias, el valor de $h_{4}$ (frecuencia relativa de $x_{4}=3$) es:",
  "alts": [
   "$h_{4} = 0{,}94$",
   "$h_{4} = 0{,}06$",
   "$h_{4} = 0{,}28$",
   "$h_{4} = 0{,}20$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Conteo ordenado de valores (}n=18\\text{):}",
  "pautaSteps": [
   "x_{1}=0,\\ x_{2}=1,\\ x_{3}=2,\\ x_{4}=3,\\ x_{5}=4",
   "f_{1}=4,\\ f_{2}=7,\\ f_{3}=5,\\ f_{4}=1,\\ f_{5}=1",
   "F_{1}=4,\\ F_{2}=11,\\ F_{3}=16,\\ F_{4}=17,\\ F_{5}=18",
   "h_{1}=0{,}22,\\ h_{2}=0{,}39,\\ h_{3}=0{,}28,\\ h_{4}=0{,}06,\\ h_{5}=0{,}06",
   "H_{i}=F_{i}/n:\\ H_{1}=0{,}22,\\ H_{2}=0{,}61,\\ H_{3}=0{,}89,\\ H_{4}=0{,}94,\\ H_{5}=1{,}00"
  ],
  "conc": "$h_{4} = \\dfrac{1}{18} \\approx 0{,}06$: cerca del 6% de los datos vale 3."
 },
 {
  "tipo": "Tabla completa · f_i",
  "ctx": "Finanzas · Facturación",
  "enun": "Se registró el número de días de atraso en el pago en 20 facturas. Datos: 0, 1, 0, 2, 1, 0, 3, 1, 0, 2, 1, 0, 1, 4, 0, 1, 2, 0, 1, 5. Los valores se ordenan de menor a mayor: $x_1 < x_2 < \\dots < x_{6}$.",
  "ask": "Construyendo la tabla de frecuencias, el valor de $f_{1}$ (frecuencia absoluta de $x_{1}=0$) es:",
  "alts": [
   "$8$",
   "$6$",
   "$9$",
   "$7$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Conteo ordenado de valores (}n=20\\text{):}",
  "pautaSteps": [
   "x_{1}=0,\\ x_{2}=1,\\ x_{3}=2,\\ x_{4}=3,\\ x_{5}=4,\\ x_{6}=5",
   "f_{1}=7,\\ f_{2}=7,\\ f_{3}=3,\\ f_{4}=1,\\ f_{5}=1,\\ f_{6}=1",
   "F_{1}=7,\\ F_{2}=14,\\ F_{3}=17,\\ F_{4}=18,\\ F_{5}=19,\\ F_{6}=20",
   "h_{1}=0{,}35,\\ h_{2}=0{,}35,\\ h_{3}=0{,}15,\\ h_{4}=0{,}05,\\ h_{5}=0{,}05,\\ h_{6}=0{,}05",
   "H_{i}=F_{i}/n:\\ H_{1}=0{,}35,\\ H_{2}=0{,}70,\\ H_{3}=0{,}85,\\ H_{4}=0{,}90,\\ H_{5}=0{,}95,\\ H_{6}=1{,}00"
  ],
  "conc": "El valor $x_{1}=0$ aparece 7 veces en los datos: $f_{1} = 7$."
 },
 {
  "tipo": "Tabla completa · F_i acumulada",
  "ctx": "Finanzas · Facturación",
  "enun": "Se registró el número de días de atraso en el pago en 20 facturas. Datos: 0, 1, 0, 2, 1, 0, 3, 1, 0, 2, 1, 0, 1, 4, 0, 1, 2, 0, 1, 5. Los valores se ordenan de menor a mayor: $x_1 < x_2 < \\dots < x_{6}$.",
  "ask": "Construyendo la tabla de frecuencias, el valor de $F_{4}$ (frecuencia absoluta acumulada hasta $x_{4}=3$) es:",
  "alts": [
   "$18$",
   "$1$",
   "$17$",
   "$19$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Conteo ordenado de valores (}n=20\\text{):}",
  "pautaSteps": [
   "x_{1}=0,\\ x_{2}=1,\\ x_{3}=2,\\ x_{4}=3,\\ x_{5}=4,\\ x_{6}=5",
   "f_{1}=7,\\ f_{2}=7,\\ f_{3}=3,\\ f_{4}=1,\\ f_{5}=1,\\ f_{6}=1",
   "F_{1}=7,\\ F_{2}=14,\\ F_{3}=17,\\ F_{4}=18,\\ F_{5}=19,\\ F_{6}=20",
   "h_{1}=0{,}35,\\ h_{2}=0{,}35,\\ h_{3}=0{,}15,\\ h_{4}=0{,}05,\\ h_{5}=0{,}05,\\ h_{6}=0{,}05",
   "H_{i}=F_{i}/n:\\ H_{1}=0{,}35,\\ H_{2}=0{,}70,\\ H_{3}=0{,}85,\\ H_{4}=0{,}90,\\ H_{5}=0{,}95,\\ H_{6}=1{,}00"
  ],
  "conc": "$F_{4} = 18$: 18 de los 20 datos son menores o iguales a 3."
 },
 {
  "tipo": "Tabla completa · H_i acumulada",
  "ctx": "Finanzas · Facturación",
  "enun": "Se registró el número de días de atraso en el pago en 20 facturas. Datos: 0, 1, 0, 2, 1, 0, 3, 1, 0, 2, 1, 0, 1, 4, 0, 1, 2, 0, 1, 5. Los valores se ordenan de menor a mayor: $x_1 < x_2 < \\dots < x_{6}$.",
  "ask": "Construyendo la tabla de frecuencias, el valor de $H_{5}$ (frecuencia relativa acumulada hasta $x_{5}=4$, calculada como $F_{5}/n$ y redondeada a 2 decimales) es:",
  "alts": [
   "$H_{5} = 0{,}05$",
   "$H_{5} = 0{,}90$",
   "$H_{5} = 1{,}00$",
   "$H_{5} = 0{,}95$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Conteo ordenado de valores (}n=20\\text{):}",
  "pautaSteps": [
   "x_{1}=0,\\ x_{2}=1,\\ x_{3}=2,\\ x_{4}=3,\\ x_{5}=4,\\ x_{6}=5",
   "f_{1}=7,\\ f_{2}=7,\\ f_{3}=3,\\ f_{4}=1,\\ f_{5}=1,\\ f_{6}=1",
   "F_{1}=7,\\ F_{2}=14,\\ F_{3}=17,\\ F_{4}=18,\\ F_{5}=19,\\ F_{6}=20",
   "h_{1}=0{,}35,\\ h_{2}=0{,}35,\\ h_{3}=0{,}15,\\ h_{4}=0{,}05,\\ h_{5}=0{,}05,\\ h_{6}=0{,}05",
   "H_{i}=F_{i}/n:\\ H_{1}=0{,}35,\\ H_{2}=0{,}70,\\ H_{3}=0{,}85,\\ H_{4}=0{,}90,\\ H_{5}=0{,}95,\\ H_{6}=1{,}00"
  ],
  "conc": "$H_{5} = \\dfrac{19}{20} = 0{,}95$: el 95% de los datos es menor o igual a 4."
 },
 {
  "tipo": "Tabla completa · f_i",
  "ctx": "Laboral · Horas extra",
  "enun": "Se registró el número de horas extra trabajadas en la semana en 21 empleados. Datos: 2, 0, 3, 1, 4, 2, 0, 3, 2, 1, 5, 2, 0, 3, 2, 1, 4, 2, 0, 6, 2. Los valores se ordenan de menor a mayor: $x_1 < x_2 < \\dots < x_{7}$.",
  "ask": "Construyendo la tabla de frecuencias, el valor de $f_{1}$ (frecuencia absoluta de $x_{1}=0$) es:",
  "alts": [
   "$3$",
   "$4$",
   "$5$",
   "$6$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Conteo ordenado de valores (}n=21\\text{):}",
  "pautaSteps": [
   "x_{1}=0,\\ x_{2}=1,\\ x_{3}=2,\\ x_{4}=3,\\ x_{5}=4,\\ x_{6}=5,\\ x_{7}=6",
   "f_{1}=4,\\ f_{2}=3,\\ f_{3}=7,\\ f_{4}=3,\\ f_{5}=2,\\ f_{6}=1,\\ f_{7}=1",
   "F_{1}=4,\\ F_{2}=7,\\ F_{3}=14,\\ F_{4}=17,\\ F_{5}=19,\\ F_{6}=20,\\ F_{7}=21",
   "h_{1}=0{,}19,\\ h_{2}=0{,}14,\\ h_{3}=0{,}33,\\ h_{4}=0{,}14,\\ h_{5}=0{,}10,\\ h_{6}=0{,}05,\\ h_{7}=0{,}05",
   "H_{i}=F_{i}/n:\\ H_{1}=0{,}19,\\ H_{2}=0{,}33,\\ H_{3}=0{,}67,\\ H_{4}=0{,}81,\\ H_{5}=0{,}90,\\ H_{6}=0{,}95,\\ H_{7}=1{,}00"
  ],
  "conc": "El valor $x_{1}=0$ aparece 4 veces en los datos: $f_{1} = 4$."
 },
 {
  "tipo": "Tabla completa · F_i acumulada",
  "ctx": "Laboral · Horas extra",
  "enun": "Se registró el número de horas extra trabajadas en la semana en 21 empleados. Datos: 2, 0, 3, 1, 4, 2, 0, 3, 2, 1, 5, 2, 0, 3, 2, 1, 4, 2, 0, 6, 2. Los valores se ordenan de menor a mayor: $x_1 < x_2 < \\dots < x_{7}$.",
  "ask": "Construyendo la tabla de frecuencias, el valor de $F_{4}$ (frecuencia absoluta acumulada hasta $x_{4}=3$) es:",
  "alts": [
   "$17$",
   "$3$",
   "$14$",
   "$19$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Conteo ordenado de valores (}n=21\\text{):}",
  "pautaSteps": [
   "x_{1}=0,\\ x_{2}=1,\\ x_{3}=2,\\ x_{4}=3,\\ x_{5}=4,\\ x_{6}=5,\\ x_{7}=6",
   "f_{1}=4,\\ f_{2}=3,\\ f_{3}=7,\\ f_{4}=3,\\ f_{5}=2,\\ f_{6}=1,\\ f_{7}=1",
   "F_{1}=4,\\ F_{2}=7,\\ F_{3}=14,\\ F_{4}=17,\\ F_{5}=19,\\ F_{6}=20,\\ F_{7}=21",
   "h_{1}=0{,}19,\\ h_{2}=0{,}14,\\ h_{3}=0{,}33,\\ h_{4}=0{,}14,\\ h_{5}=0{,}10,\\ h_{6}=0{,}05,\\ h_{7}=0{,}05",
   "H_{i}=F_{i}/n:\\ H_{1}=0{,}19,\\ H_{2}=0{,}33,\\ H_{3}=0{,}67,\\ H_{4}=0{,}81,\\ H_{5}=0{,}90,\\ H_{6}=0{,}95,\\ H_{7}=1{,}00"
  ],
  "conc": "$F_{4} = 17$: 17 de los 21 datos son menores o iguales a 3."
 },
 {
  "tipo": "Tabla completa · h_i",
  "ctx": "Laboral · Horas extra",
  "enun": "Se registró el número de horas extra trabajadas en la semana en 21 empleados. Datos: 2, 0, 3, 1, 4, 2, 0, 3, 2, 1, 5, 2, 0, 3, 2, 1, 4, 2, 0, 6, 2. Los valores se ordenan de menor a mayor: $x_1 < x_2 < \\dots < x_{7}$.",
  "ask": "Construyendo la tabla de frecuencias, el valor de $h_{6}$ (frecuencia relativa de $x_{6}=5$) es:",
  "alts": [
   "$h_{6} = 0{,}95$",
   "$h_{6} = 0{,}10$",
   "$h_{6} = 0{,}05$",
   "$h_{6} = 0{,}14$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Conteo ordenado de valores (}n=21\\text{):}",
  "pautaSteps": [
   "x_{1}=0,\\ x_{2}=1,\\ x_{3}=2,\\ x_{4}=3,\\ x_{5}=4,\\ x_{6}=5,\\ x_{7}=6",
   "f_{1}=4,\\ f_{2}=3,\\ f_{3}=7,\\ f_{4}=3,\\ f_{5}=2,\\ f_{6}=1,\\ f_{7}=1",
   "F_{1}=4,\\ F_{2}=7,\\ F_{3}=14,\\ F_{4}=17,\\ F_{5}=19,\\ F_{6}=20,\\ F_{7}=21",
   "h_{1}=0{,}19,\\ h_{2}=0{,}14,\\ h_{3}=0{,}33,\\ h_{4}=0{,}14,\\ h_{5}=0{,}10,\\ h_{6}=0{,}05,\\ h_{7}=0{,}05",
   "H_{i}=F_{i}/n:\\ H_{1}=0{,}19,\\ H_{2}=0{,}33,\\ H_{3}=0{,}67,\\ H_{4}=0{,}81,\\ H_{5}=0{,}90,\\ H_{6}=0{,}95,\\ H_{7}=1{,}00"
  ],
  "conc": "$h_{6} = \\dfrac{1}{21} \\approx 0{,}05$: cerca del 5% de los datos vale 5."
 },
 {
  "tipo": "Tabla completa · f_i",
  "ctx": "Hogar · Conectividad",
  "enun": "Se registró el número de dispositivos conectados a la red wifi en 20 hogares. Datos: 4, 5, 3, 6, 4, 5, 3, 4, 7, 5, 4, 3, 5, 4, 6, 5, 3, 4, 5, 4. Los valores se ordenan de menor a mayor: $x_1 < x_2 < \\dots < x_{5}$.",
  "ask": "Construyendo la tabla de frecuencias, el valor de $f_{1}$ (frecuencia absoluta de $x_{1}=3$) es:",
  "alts": [
   "$7$",
   "$4$",
   "$5$",
   "$3$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Conteo ordenado de valores (}n=20\\text{):}",
  "pautaSteps": [
   "x_{1}=3,\\ x_{2}=4,\\ x_{3}=5,\\ x_{4}=6,\\ x_{5}=7",
   "f_{1}=4,\\ f_{2}=7,\\ f_{3}=6,\\ f_{4}=2,\\ f_{5}=1",
   "F_{1}=4,\\ F_{2}=11,\\ F_{3}=17,\\ F_{4}=19,\\ F_{5}=20",
   "h_{1}=0{,}20,\\ h_{2}=0{,}35,\\ h_{3}=0{,}30,\\ h_{4}=0{,}10,\\ h_{5}=0{,}05",
   "H_{i}=F_{i}/n:\\ H_{1}=0{,}20,\\ H_{2}=0{,}55,\\ H_{3}=0{,}85,\\ H_{4}=0{,}95,\\ H_{5}=1{,}00"
  ],
  "conc": "El valor $x_{1}=3$ aparece 4 veces en los datos: $f_{1} = 4$."
 },
 {
  "tipo": "Tabla completa · F_i acumulada",
  "ctx": "Hogar · Conectividad",
  "enun": "Se registró el número de dispositivos conectados a la red wifi en 20 hogares. Datos: 4, 5, 3, 6, 4, 5, 3, 4, 7, 5, 4, 3, 5, 4, 6, 5, 3, 4, 5, 4. Los valores se ordenan de menor a mayor: $x_1 < x_2 < \\dots < x_{5}$.",
  "ask": "Construyendo la tabla de frecuencias, el valor de $F_{3}$ (frecuencia absoluta acumulada hasta $x_{3}=5$) es:",
  "alts": [
   "$6$",
   "$11$",
   "$19$",
   "$17$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Conteo ordenado de valores (}n=20\\text{):}",
  "pautaSteps": [
   "x_{1}=3,\\ x_{2}=4,\\ x_{3}=5,\\ x_{4}=6,\\ x_{5}=7",
   "f_{1}=4,\\ f_{2}=7,\\ f_{3}=6,\\ f_{4}=2,\\ f_{5}=1",
   "F_{1}=4,\\ F_{2}=11,\\ F_{3}=17,\\ F_{4}=19,\\ F_{5}=20",
   "h_{1}=0{,}20,\\ h_{2}=0{,}35,\\ h_{3}=0{,}30,\\ h_{4}=0{,}10,\\ h_{5}=0{,}05",
   "H_{i}=F_{i}/n:\\ H_{1}=0{,}20,\\ H_{2}=0{,}55,\\ H_{3}=0{,}85,\\ H_{4}=0{,}95,\\ H_{5}=1{,}00"
  ],
  "conc": "$F_{3} = 17$: 17 de los 20 datos son menores o iguales a 5."
 },
 {
  "tipo": "Tabla completa · H_i acumulada",
  "ctx": "Hogar · Conectividad",
  "enun": "Se registró el número de dispositivos conectados a la red wifi en 20 hogares. Datos: 4, 5, 3, 6, 4, 5, 3, 4, 7, 5, 4, 3, 5, 4, 6, 5, 3, 4, 5, 4. Los valores se ordenan de menor a mayor: $x_1 < x_2 < \\dots < x_{5}$.",
  "ask": "Construyendo la tabla de frecuencias, el valor de $H_{4}$ (frecuencia relativa acumulada hasta $x_{4}=6$, calculada como $F_{4}/n$ y redondeada a 2 decimales) es:",
  "alts": [
   "$H_{4} = 0{,}95$",
   "$H_{4} = 0{,}10$",
   "$H_{4} = 0{,}85$",
   "$H_{4} = 1{,}00$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Conteo ordenado de valores (}n=20\\text{):}",
  "pautaSteps": [
   "x_{1}=3,\\ x_{2}=4,\\ x_{3}=5,\\ x_{4}=6,\\ x_{5}=7",
   "f_{1}=4,\\ f_{2}=7,\\ f_{3}=6,\\ f_{4}=2,\\ f_{5}=1",
   "F_{1}=4,\\ F_{2}=11,\\ F_{3}=17,\\ F_{4}=19,\\ F_{5}=20",
   "h_{1}=0{,}20,\\ h_{2}=0{,}35,\\ h_{3}=0{,}30,\\ h_{4}=0{,}10,\\ h_{5}=0{,}05",
   "H_{i}=F_{i}/n:\\ H_{1}=0{,}20,\\ H_{2}=0{,}55,\\ H_{3}=0{,}85,\\ H_{4}=0{,}95,\\ H_{5}=1{,}00"
  ],
  "conc": "$H_{4} = \\dfrac{19}{20} = 0{,}95$: el 95% de los datos es menor o igual a 6."
 },
 {
  "tipo": "Lectura con frecuencias acumuladas",
  "ctx": "Demografía · Familias",
  "enun": "Se registró el número de hijos en $n=50$ familias. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "0",
     10,
     10,
     "0,20",
     "0,20",
     "20%"
    ],
    [
     "1",
     15,
     25,
     "0,30",
     "0,50",
     "50%"
    ],
    [
     "2",
     15,
     40,
     "0,30",
     "0,80",
     "80%"
    ],
    [
     "3",
     7,
     47,
     "0,14",
     "0,94",
     "94%"
    ],
    [
     "4",
     3,
     50,
     "0,06",
     "1,00",
     "100%"
    ],
    [
     "Total",
     50,
     "—",
     "1,00",
     "—",
     "100%"
    ]
   ],
   "N": 50
  },
  "ask": "¿Cuántas familias registran a lo más 2 hijos?",
  "alts": [
   "$25$",
   "$10$",
   "$15$",
   "$40$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Tabla con } n=50.\\ F_i\\text{ acumula desde el menor valor.}",
  "pautaSteps": [
   "\\text{\"a lo más } 2\\text{\"} = F(2) = 40"
  ],
  "conc": "<b>40</b> de las 50 familias registran a lo más 2 hijos."
 },
 {
  "tipo": "Lectura con frecuencias acumuladas",
  "ctx": "Demografía · Familias",
  "enun": "Se registró el número de hijos en $n=50$ familias. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "0",
     10,
     10,
     "0,20",
     "0,20",
     "20%"
    ],
    [
     "1",
     15,
     25,
     "0,30",
     "0,50",
     "50%"
    ],
    [
     "2",
     15,
     40,
     "0,30",
     "0,80",
     "80%"
    ],
    [
     "3",
     7,
     47,
     "0,14",
     "0,94",
     "94%"
    ],
    [
     "4",
     3,
     50,
     "0,06",
     "1,00",
     "100%"
    ],
    [
     "Total",
     50,
     "—",
     "1,00",
     "—",
     "100%"
    ]
   ],
   "N": 50
  },
  "ask": "¿Cuántas familias registran más de 2 hijos?",
  "alts": [
   "$25$",
   "$40$",
   "$10$",
   "$3$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Tabla con } n=50.\\ F_i\\text{ acumula desde el menor valor.}",
  "pautaSteps": [
   "\\text{\"más de } 2\\text{\"} = n - F(2) = 50 - 40 = 10"
  ],
  "conc": "<b>10</b> de las 50 familias registran más de 2 hijos."
 },
 {
  "tipo": "Lectura con frecuencias acumuladas",
  "ctx": "Demografía · Familias",
  "enun": "Se registró el número de hijos en $n=50$ familias. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "0",
     10,
     10,
     "0,20",
     "0,20",
     "20%"
    ],
    [
     "1",
     15,
     25,
     "0,30",
     "0,50",
     "50%"
    ],
    [
     "2",
     15,
     40,
     "0,30",
     "0,80",
     "80%"
    ],
    [
     "3",
     7,
     47,
     "0,14",
     "0,94",
     "94%"
    ],
    [
     "4",
     3,
     50,
     "0,06",
     "1,00",
     "100%"
    ],
    [
     "Total",
     50,
     "—",
     "1,00",
     "—",
     "100%"
    ]
   ],
   "N": 50
  },
  "ask": "¿Cuántas familias registran entre 1 y 3 hijos (inclusive)?",
  "alts": [
   "$22$",
   "$30$",
   "$15$",
   "$37$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Tabla con } n=50.\\ F_i\\text{ acumula desde el menor valor.}",
  "pautaSteps": [
   "\\text{\"entre } 1\\text{ y }3\\text{\" (inclusive)} = F(3) - F(0) = 47 - 10 = 37"
  ],
  "conc": "<b>37</b> de las 50 familias registran entre 1 y 3 hijos (inclusive)."
 },
 {
  "tipo": "Lectura con frecuencias acumuladas",
  "ctx": "Demografía · Familias",
  "enun": "Se registró el número de hijos en $n=50$ familias. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "0",
     10,
     10,
     "0,20",
     "0,20",
     "20%"
    ],
    [
     "1",
     15,
     25,
     "0,30",
     "0,50",
     "50%"
    ],
    [
     "2",
     15,
     40,
     "0,30",
     "0,80",
     "80%"
    ],
    [
     "3",
     7,
     47,
     "0,14",
     "0,94",
     "94%"
    ],
    [
     "4",
     3,
     50,
     "0,06",
     "1,00",
     "100%"
    ],
    [
     "Total",
     50,
     "—",
     "1,00",
     "—",
     "100%"
    ]
   ],
   "N": 50
  },
  "ask": "¿Qué porcentaje de familias registra menos de 2 hijos?",
  "alts": [
   "$50\\%$",
   "$80\\%$",
   "$20\\%$",
   "$30\\%$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Tabla con } n=50.\\ F_i\\text{ acumula desde el menor valor.}",
  "pautaSteps": [
   "\\text{\"menos de } 2\\text{\"} = \\dfrac{F(1)}{n}\\times 100 = \\dfrac{25}{50}\\times 100 = 50\\%"
  ],
  "conc": "El <b>50%</b> de las familias registra menos de 2 hijos (25 de 50)."
 },
 {
  "tipo": "Lectura con frecuencias acumuladas",
  "ctx": "Hogar · Mascotas",
  "enun": "Se registró el número de mascotas en $n=40$ hogares. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "0",
     12,
     12,
     "0,30",
     "0,30",
     "30%"
    ],
    [
     "1",
     16,
     28,
     "0,40",
     "0,70",
     "70%"
    ],
    [
     "2",
     8,
     36,
     "0,20",
     "0,90",
     "90%"
    ],
    [
     "3",
     4,
     40,
     "0,10",
     "1,00",
     "100%"
    ],
    [
     "Total",
     40,
     "—",
     "1,00",
     "—",
     "100%"
    ]
   ],
   "N": 40
  },
  "ask": "¿Cuántos hogares registran a lo más 1 mascota?",
  "alts": [
   "$28$",
   "$12$",
   "$16$",
   "$36$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Tabla con } n=40.\\ F_i\\text{ acumula desde el menor valor.}",
  "pautaSteps": [
   "\\text{\"a lo más } 1\\text{\"} = F(1) = 28"
  ],
  "conc": "<b>28</b> de los 40 hogares registran a lo más 1 mascota."
 },
 {
  "tipo": "Lectura con frecuencias acumuladas",
  "ctx": "Hogar · Mascotas",
  "enun": "Se registró el número de mascotas en $n=40$ hogares. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "0",
     12,
     12,
     "0,30",
     "0,30",
     "30%"
    ],
    [
     "1",
     16,
     28,
     "0,40",
     "0,70",
     "70%"
    ],
    [
     "2",
     8,
     36,
     "0,20",
     "0,90",
     "90%"
    ],
    [
     "3",
     4,
     40,
     "0,10",
     "1,00",
     "100%"
    ],
    [
     "Total",
     40,
     "—",
     "1,00",
     "—",
     "100%"
    ]
   ],
   "N": 40
  },
  "ask": "¿Cuántos hogares registran más de 1 mascota?",
  "alts": [
   "$28$",
   "$12$",
   "$4$",
   "$8$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Tabla con } n=40.\\ F_i\\text{ acumula desde el menor valor.}",
  "pautaSteps": [
   "\\text{\"más de } 1\\text{\"} = n - F(1) = 40 - 28 = 12"
  ],
  "conc": "<b>12</b> de los 40 hogares registran más de 1 mascota."
 },
 {
  "tipo": "Lectura con frecuencias acumuladas",
  "ctx": "Hogar · Mascotas",
  "enun": "Se registró el número de mascotas en $n=40$ hogares. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "0",
     12,
     12,
     "0,30",
     "0,30",
     "30%"
    ],
    [
     "1",
     16,
     28,
     "0,40",
     "0,70",
     "70%"
    ],
    [
     "2",
     8,
     36,
     "0,20",
     "0,90",
     "90%"
    ],
    [
     "3",
     4,
     40,
     "0,10",
     "1,00",
     "100%"
    ],
    [
     "Total",
     40,
     "—",
     "1,00",
     "—",
     "100%"
    ]
   ],
   "N": 40
  },
  "ask": "¿Cuántos hogares registran entre 0 y 2 mascotas (inclusive)?",
  "alts": [
   "$24$",
   "$28$",
   "$36$",
   "$16$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Tabla con } n=40.\\ F_i\\text{ acumula desde el menor valor.}",
  "pautaSteps": [
   "\\text{\"entre } 0\\text{ y }2\\text{\" (inclusive)} = F(2) = 36\\quad(\\text{0 es el menor valor})"
  ],
  "conc": "<b>36</b> de los 40 hogares registran entre 0 y 2 mascotas (inclusive)."
 },
 {
  "tipo": "Lectura con frecuencias acumuladas",
  "ctx": "Hogar · Mascotas",
  "enun": "Se registró el número de mascotas en $n=40$ hogares. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "0",
     12,
     12,
     "0,30",
     "0,30",
     "30%"
    ],
    [
     "1",
     16,
     28,
     "0,40",
     "0,70",
     "70%"
    ],
    [
     "2",
     8,
     36,
     "0,20",
     "0,90",
     "90%"
    ],
    [
     "3",
     4,
     40,
     "0,10",
     "1,00",
     "100%"
    ],
    [
     "Total",
     40,
     "—",
     "1,00",
     "—",
     "100%"
    ]
   ],
   "N": 40
  },
  "ask": "¿Qué porcentaje de hogares registra al menos 2 mascotas?",
  "alts": [
   "$10\\%$",
   "$70\\%$",
   "$20\\%$",
   "$30\\%$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Tabla con } n=40.\\ F_i\\text{ acumula desde el menor valor.}",
  "pautaSteps": [
   "\\text{\"al menos } 2\\text{\"} = \\dfrac{n - F(1)}{n}\\times 100 = \\dfrac{12}{40}\\times 100 = 30\\%"
  ],
  "conc": "El <b>30%</b> de los hogares registra al menos 2 mascotas (12 de 40)."
 },
 {
  "tipo": "Lectura con frecuencias acumuladas",
  "ctx": "Hogar · Vehículos",
  "enun": "Se registró el número de autos en $n=60$ hogares. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "0",
     9,
     9,
     "0,15",
     "0,15",
     "15%"
    ],
    [
     "1",
     27,
     36,
     "0,45",
     "0,60",
     "60%"
    ],
    [
     "2",
     18,
     54,
     "0,30",
     "0,90",
     "90%"
    ],
    [
     "3",
     6,
     60,
     "0,10",
     "1,00",
     "100%"
    ],
    [
     "Total",
     60,
     "—",
     "1,00",
     "—",
     "100%"
    ]
   ],
   "N": 60
  },
  "ask": "¿Cuántos hogares registran a lo más 1 auto?",
  "alts": [
   "$36$",
   "$9$",
   "$24$",
   "$27$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Tabla con } n=60.\\ F_i\\text{ acumula desde el menor valor.}",
  "pautaSteps": [
   "\\text{\"a lo más } 1\\text{\"} = F(1) = 36"
  ],
  "conc": "<b>36</b> de los 60 hogares registran a lo más 1 auto."
 },
 {
  "tipo": "Lectura con frecuencias acumuladas",
  "ctx": "Hogar · Vehículos",
  "enun": "Se registró el número de autos en $n=60$ hogares. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "0",
     9,
     9,
     "0,15",
     "0,15",
     "15%"
    ],
    [
     "1",
     27,
     36,
     "0,45",
     "0,60",
     "60%"
    ],
    [
     "2",
     18,
     54,
     "0,30",
     "0,90",
     "90%"
    ],
    [
     "3",
     6,
     60,
     "0,10",
     "1,00",
     "100%"
    ],
    [
     "Total",
     60,
     "—",
     "1,00",
     "—",
     "100%"
    ]
   ],
   "N": 60
  },
  "ask": "¿Cuántos hogares registran más de 2 autos?",
  "alts": [
   "$24$",
   "$54$",
   "$7$",
   "$6$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Tabla con } n=60.\\ F_i\\text{ acumula desde el menor valor.}",
  "pautaSteps": [
   "\\text{\"más de } 2\\text{\"} = n - F(2) = 60 - 54 = 6"
  ],
  "conc": "<b>6</b> de los 60 hogares registran más de 2 autos."
 },
 {
  "tipo": "Lectura con frecuencias acumuladas",
  "ctx": "Hogar · Vehículos",
  "enun": "Se registró el número de autos en $n=60$ hogares. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "0",
     9,
     9,
     "0,15",
     "0,15",
     "15%"
    ],
    [
     "1",
     27,
     36,
     "0,45",
     "0,60",
     "60%"
    ],
    [
     "2",
     18,
     54,
     "0,30",
     "0,90",
     "90%"
    ],
    [
     "3",
     6,
     60,
     "0,10",
     "1,00",
     "100%"
    ],
    [
     "Total",
     60,
     "—",
     "1,00",
     "—",
     "100%"
    ]
   ],
   "N": 60
  },
  "ask": "¿Cuántos hogares registran entre 1 y 2 autos (inclusive)?",
  "alts": [
   "$18$",
   "$45$",
   "$27$",
   "$54$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Tabla con } n=60.\\ F_i\\text{ acumula desde el menor valor.}",
  "pautaSteps": [
   "\\text{\"entre } 1\\text{ y }2\\text{\" (inclusive)} = F(2) - F(0) = 54 - 9 = 45"
  ],
  "conc": "<b>45</b> de los 60 hogares registran entre 1 y 2 autos (inclusive)."
 },
 {
  "tipo": "Lectura con frecuencias acumuladas",
  "ctx": "Hogar · Vehículos",
  "enun": "Se registró el número de autos en $n=60$ hogares. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "0",
     9,
     9,
     "0,15",
     "0,15",
     "15%"
    ],
    [
     "1",
     27,
     36,
     "0,45",
     "0,60",
     "60%"
    ],
    [
     "2",
     18,
     54,
     "0,30",
     "0,90",
     "90%"
    ],
    [
     "3",
     6,
     60,
     "0,10",
     "1,00",
     "100%"
    ],
    [
     "Total",
     60,
     "—",
     "1,00",
     "—",
     "100%"
    ]
   ],
   "N": 60
  },
  "ask": "¿Qué porcentaje de hogares registra menos de 3 autos?",
  "alts": [
   "$100\\%$",
   "$10\\%$",
   "$90\\%$",
   "$60\\%$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Tabla con } n=60.\\ F_i\\text{ acumula desde el menor valor.}",
  "pautaSteps": [
   "\\text{\"menos de } 3\\text{\"} = \\dfrac{F(2)}{n}\\times 100 = \\dfrac{54}{60}\\times 100 = 90\\%"
  ],
  "conc": "El <b>90%</b> de los hogares registra menos de 3 autos (54 de 60)."
 },
 {
  "tipo": "Lectura con frecuencias acumuladas",
  "ctx": "Inmobiliaria · Departamentos",
  "enun": "Se registró el número de dormitorios en $n=80$ departamentos. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "1",
     8,
     8,
     "0,10",
     "0,10",
     "10%"
    ],
    [
     "2",
     32,
     40,
     "0,40",
     "0,50",
     "50%"
    ],
    [
     "3",
     32,
     72,
     "0,40",
     "0,90",
     "90%"
    ],
    [
     "4",
     8,
     80,
     "0,10",
     "1,00",
     "100%"
    ],
    [
     "Total",
     80,
     "—",
     "1,00",
     "—",
     "100%"
    ]
   ],
   "N": 80
  },
  "ask": "¿Cuántos departamentos registran a lo más 2 dormitorios?",
  "alts": [
   "$8$",
   "$32$",
   "$40$",
   "$72$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Tabla con } n=80.\\ F_i\\text{ acumula desde el menor valor.}",
  "pautaSteps": [
   "\\text{\"a lo más } 2\\text{\"} = F(2) = 40"
  ],
  "conc": "<b>40</b> de los 80 departamentos registran a lo más 2 dormitorios."
 },
 {
  "tipo": "Lectura con frecuencias acumuladas",
  "ctx": "Inmobiliaria · Departamentos",
  "enun": "Se registró el número de dormitorios en $n=80$ departamentos. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "1",
     8,
     8,
     "0,10",
     "0,10",
     "10%"
    ],
    [
     "2",
     32,
     40,
     "0,40",
     "0,50",
     "50%"
    ],
    [
     "3",
     32,
     72,
     "0,40",
     "0,90",
     "90%"
    ],
    [
     "4",
     8,
     80,
     "0,10",
     "1,00",
     "100%"
    ],
    [
     "Total",
     80,
     "—",
     "1,00",
     "—",
     "100%"
    ]
   ],
   "N": 80
  },
  "ask": "¿Cuántos departamentos registran más de 3 dormitorios?",
  "alts": [
   "$40$",
   "$8$",
   "$72$",
   "$9$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Tabla con } n=80.\\ F_i\\text{ acumula desde el menor valor.}",
  "pautaSteps": [
   "\\text{\"más de } 3\\text{\"} = n - F(3) = 80 - 72 = 8"
  ],
  "conc": "<b>8</b> de los 80 departamentos registran más de 3 dormitorios."
 },
 {
  "tipo": "Lectura con frecuencias acumuladas",
  "ctx": "Inmobiliaria · Departamentos",
  "enun": "Se registró el número de dormitorios en $n=80$ departamentos. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "1",
     8,
     8,
     "0,10",
     "0,10",
     "10%"
    ],
    [
     "2",
     32,
     40,
     "0,40",
     "0,50",
     "50%"
    ],
    [
     "3",
     32,
     72,
     "0,40",
     "0,90",
     "90%"
    ],
    [
     "4",
     8,
     80,
     "0,10",
     "1,00",
     "100%"
    ],
    [
     "Total",
     80,
     "—",
     "1,00",
     "—",
     "100%"
    ]
   ],
   "N": 80
  },
  "ask": "¿Cuántos departamentos registran entre 2 y 3 dormitorios (inclusive)?",
  "alts": [
   "$32$",
   "$64$",
   "$72$",
   "$65$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Tabla con } n=80.\\ F_i\\text{ acumula desde el menor valor.}",
  "pautaSteps": [
   "\\text{\"entre } 2\\text{ y }3\\text{\" (inclusive)} = F(3) - F(1) = 72 - 8 = 64"
  ],
  "conc": "<b>64</b> de los 80 departamentos registran entre 2 y 3 dormitorios (inclusive)."
 },
 {
  "tipo": "Lectura con frecuencias acumuladas",
  "ctx": "Inmobiliaria · Departamentos",
  "enun": "Se registró el número de dormitorios en $n=80$ departamentos. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "1",
     8,
     8,
     "0,10",
     "0,10",
     "10%"
    ],
    [
     "2",
     32,
     40,
     "0,40",
     "0,50",
     "50%"
    ],
    [
     "3",
     32,
     72,
     "0,40",
     "0,90",
     "90%"
    ],
    [
     "4",
     8,
     80,
     "0,10",
     "1,00",
     "100%"
    ],
    [
     "Total",
     80,
     "—",
     "1,00",
     "—",
     "100%"
    ]
   ],
   "N": 80
  },
  "ask": "¿Qué porcentaje de departamentos registra al menos 3 dormitorios?",
  "alts": [
   "$50\\%$",
   "$10\\%$",
   "$40\\%$",
   "$90\\%$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Tabla con } n=80.\\ F_i\\text{ acumula desde el menor valor.}",
  "pautaSteps": [
   "\\text{\"al menos } 3\\text{\"} = \\dfrac{n - F(2)}{n}\\times 100 = \\dfrac{40}{80}\\times 100 = 50\\%"
  ],
  "conc": "El <b>50%</b> de los departamentos registra al menos 3 dormitorios (40 de 80)."
 },
 {
  "tipo": "Lectura con frecuencias acumuladas",
  "ctx": "Retail · Sucursales",
  "enun": "Se registró el número de empleados en $n=50$ sucursales. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "2",
     5,
     5,
     "0,10",
     "0,10",
     "10%"
    ],
    [
     "3",
     10,
     15,
     "0,20",
     "0,30",
     "30%"
    ],
    [
     "4",
     20,
     35,
     "0,40",
     "0,70",
     "70%"
    ],
    [
     "5",
     10,
     45,
     "0,20",
     "0,90",
     "90%"
    ],
    [
     "6",
     5,
     50,
     "0,10",
     "1,00",
     "100%"
    ],
    [
     "Total",
     50,
     "—",
     "1,00",
     "—",
     "100%"
    ]
   ],
   "N": 50
  },
  "ask": "¿Cuántas sucursales registran a lo más 3 empleados?",
  "alts": [
   "$5$",
   "$35$",
   "$10$",
   "$15$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Tabla con } n=50.\\ F_i\\text{ acumula desde el menor valor.}",
  "pautaSteps": [
   "\\text{\"a lo más } 3\\text{\"} = F(3) = 15"
  ],
  "conc": "<b>15</b> de las 50 sucursales registran a lo más 3 empleados."
 },
 {
  "tipo": "Lectura con frecuencias acumuladas",
  "ctx": "Retail · Sucursales",
  "enun": "Se registró el número de empleados en $n=50$ sucursales. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "2",
     5,
     5,
     "0,10",
     "0,10",
     "10%"
    ],
    [
     "3",
     10,
     15,
     "0,20",
     "0,30",
     "30%"
    ],
    [
     "4",
     20,
     35,
     "0,40",
     "0,70",
     "70%"
    ],
    [
     "5",
     10,
     45,
     "0,20",
     "0,90",
     "90%"
    ],
    [
     "6",
     5,
     50,
     "0,10",
     "1,00",
     "100%"
    ],
    [
     "Total",
     50,
     "—",
     "1,00",
     "—",
     "100%"
    ]
   ],
   "N": 50
  },
  "ask": "¿Cuántas sucursales registran más de 4 empleados?",
  "alts": [
   "$35$",
   "$5$",
   "$15$",
   "$10$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Tabla con } n=50.\\ F_i\\text{ acumula desde el menor valor.}",
  "pautaSteps": [
   "\\text{\"más de } 4\\text{\"} = n - F(4) = 50 - 35 = 15"
  ],
  "conc": "<b>15</b> de las 50 sucursales registran más de 4 empleados."
 },
 {
  "tipo": "Lectura con frecuencias acumuladas",
  "ctx": "Retail · Sucursales",
  "enun": "Se registró el número de empleados en $n=50$ sucursales. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "2",
     5,
     5,
     "0,10",
     "0,10",
     "10%"
    ],
    [
     "3",
     10,
     15,
     "0,20",
     "0,30",
     "30%"
    ],
    [
     "4",
     20,
     35,
     "0,40",
     "0,70",
     "70%"
    ],
    [
     "5",
     10,
     45,
     "0,20",
     "0,90",
     "90%"
    ],
    [
     "6",
     5,
     50,
     "0,10",
     "1,00",
     "100%"
    ],
    [
     "Total",
     50,
     "—",
     "1,00",
     "—",
     "100%"
    ]
   ],
   "N": 50
  },
  "ask": "¿Cuántas sucursales registran entre 3 y 5 empleados (inclusive)?",
  "alts": [
   "$30$",
   "$20$",
   "$45$",
   "$40$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Tabla con } n=50.\\ F_i\\text{ acumula desde el menor valor.}",
  "pautaSteps": [
   "\\text{\"entre } 3\\text{ y }5\\text{\" (inclusive)} = F(5) - F(2) = 45 - 5 = 40"
  ],
  "conc": "<b>40</b> de las 50 sucursales registran entre 3 y 5 empleados (inclusive)."
 },
 {
  "tipo": "Lectura con frecuencias acumuladas",
  "ctx": "Retail · Sucursales",
  "enun": "Se registró el número de empleados en $n=50$ sucursales. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "2",
     5,
     5,
     "0,10",
     "0,10",
     "10%"
    ],
    [
     "3",
     10,
     15,
     "0,20",
     "0,30",
     "30%"
    ],
    [
     "4",
     20,
     35,
     "0,40",
     "0,70",
     "70%"
    ],
    [
     "5",
     10,
     45,
     "0,20",
     "0,90",
     "90%"
    ],
    [
     "6",
     5,
     50,
     "0,10",
     "1,00",
     "100%"
    ],
    [
     "Total",
     50,
     "—",
     "1,00",
     "—",
     "100%"
    ]
   ],
   "N": 50
  },
  "ask": "¿Qué porcentaje de sucursales registra menos de 4 empleados?",
  "alts": [
   "$30\\%$",
   "$70\\%$",
   "$10\\%$",
   "$20\\%$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Tabla con } n=50.\\ F_i\\text{ acumula desde el menor valor.}",
  "pautaSteps": [
   "\\text{\"menos de } 4\\text{\"} = \\dfrac{F(3)}{n}\\times 100 = \\dfrac{15}{50}\\times 100 = 30\\%"
  ],
  "conc": "El <b>30%</b> de las sucursales registra menos de 4 empleados (15 de 50)."
 },
 {
  "tipo": "Lectura con frecuencias acumuladas",
  "ctx": "Edición · Revisión",
  "enun": "Se registró el número de errores por página en $n=100$ páginas. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "0",
     20,
     20,
     "0,20",
     "0,20",
     "20%"
    ],
    [
     "1",
     35,
     55,
     "0,35",
     "0,55",
     "55%"
    ],
    [
     "2",
     25,
     80,
     "0,25",
     "0,80",
     "80%"
    ],
    [
     "3",
     15,
     95,
     "0,15",
     "0,95",
     "95%"
    ],
    [
     "4",
     5,
     100,
     "0,05",
     "1,00",
     "100%"
    ],
    [
     "Total",
     100,
     "—",
     "1,00",
     "—",
     "100%"
    ]
   ],
   "N": 100
  },
  "ask": "¿Cuántas páginas registran a lo más 1 error?",
  "alts": [
   "$55$",
   "$20$",
   "$45$",
   "$35$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Tabla con } n=100.\\ F_i\\text{ acumula desde el menor valor.}",
  "pautaSteps": [
   "\\text{\"a lo más } 1\\text{\"} = F(1) = 55"
  ],
  "conc": "<b>55</b> de las 100 páginas registran a lo más 1 error."
 },
 {
  "tipo": "Lectura con frecuencias acumuladas",
  "ctx": "Edición · Revisión",
  "enun": "Se registró el número de errores por página en $n=100$ páginas. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "0",
     20,
     20,
     "0,20",
     "0,20",
     "20%"
    ],
    [
     "1",
     35,
     55,
     "0,35",
     "0,55",
     "55%"
    ],
    [
     "2",
     25,
     80,
     "0,25",
     "0,80",
     "80%"
    ],
    [
     "3",
     15,
     95,
     "0,15",
     "0,95",
     "95%"
    ],
    [
     "4",
     5,
     100,
     "0,05",
     "1,00",
     "100%"
    ],
    [
     "Total",
     100,
     "—",
     "1,00",
     "—",
     "100%"
    ]
   ],
   "N": 100
  },
  "ask": "¿Cuántas páginas registran más de 2 errores?",
  "alts": [
   "$45$",
   "$80$",
   "$20$",
   "$5$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Tabla con } n=100.\\ F_i\\text{ acumula desde el menor valor.}",
  "pautaSteps": [
   "\\text{\"más de } 2\\text{\"} = n - F(2) = 100 - 80 = 20"
  ],
  "conc": "<b>20</b> de las 100 páginas registran más de 2 errores."
 },
 {
  "tipo": "Lectura con frecuencias acumuladas",
  "ctx": "Edición · Revisión",
  "enun": "Se registró el número de errores por página en $n=100$ páginas. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "0",
     20,
     20,
     "0,20",
     "0,20",
     "20%"
    ],
    [
     "1",
     35,
     55,
     "0,35",
     "0,55",
     "55%"
    ],
    [
     "2",
     25,
     80,
     "0,25",
     "0,80",
     "80%"
    ],
    [
     "3",
     15,
     95,
     "0,15",
     "0,95",
     "95%"
    ],
    [
     "4",
     5,
     100,
     "0,05",
     "1,00",
     "100%"
    ],
    [
     "Total",
     100,
     "—",
     "1,00",
     "—",
     "100%"
    ]
   ],
   "N": 100
  },
  "ask": "¿Cuántas páginas registran entre 1 y 3 errores (inclusive)?",
  "alts": [
   "$40$",
   "$60$",
   "$75$",
   "$25$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Tabla con } n=100.\\ F_i\\text{ acumula desde el menor valor.}",
  "pautaSteps": [
   "\\text{\"entre } 1\\text{ y }3\\text{\" (inclusive)} = F(3) - F(0) = 95 - 20 = 75"
  ],
  "conc": "<b>75</b> de las 100 páginas registran entre 1 y 3 errores (inclusive)."
 },
 {
  "tipo": "Lectura con frecuencias acumuladas",
  "ctx": "Edición · Revisión",
  "enun": "Se registró el número de errores por página en $n=100$ páginas. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "0",
     20,
     20,
     "0,20",
     "0,20",
     "20%"
    ],
    [
     "1",
     35,
     55,
     "0,35",
     "0,55",
     "55%"
    ],
    [
     "2",
     25,
     80,
     "0,25",
     "0,80",
     "80%"
    ],
    [
     "3",
     15,
     95,
     "0,15",
     "0,95",
     "95%"
    ],
    [
     "4",
     5,
     100,
     "0,05",
     "1,00",
     "100%"
    ],
    [
     "Total",
     100,
     "—",
     "1,00",
     "—",
     "100%"
    ]
   ],
   "N": 100
  },
  "ask": "¿Qué porcentaje de páginas registra exactamente 0 errores?",
  "alts": [
   "$55\\%$",
   "$80\\%$",
   "$35\\%$",
   "$20\\%$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Tabla con } n=100.\\ F_i\\text{ acumula desde el menor valor.}",
  "pautaSteps": [
   "\\dfrac{f(x=0)}{n}\\times 100 = \\dfrac{20}{100}\\times 100 = 20\\%"
  ],
  "conc": "El <b>20%</b> de las páginas registra exactamente 0 errores (20 de 100)."
 },
 {
  "tipo": "Lectura con frecuencias acumuladas",
  "ctx": "Call center · Turnos",
  "enun": "Se registró el número de llamadas por hora en $n=90$ turnos. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "3",
     9,
     9,
     "0,10",
     "0,10",
     "10%"
    ],
    [
     "4",
     18,
     27,
     "0,20",
     "0,30",
     "30%"
    ],
    [
     "5",
     27,
     54,
     "0,30",
     "0,60",
     "60%"
    ],
    [
     "6",
     27,
     81,
     "0,30",
     "0,90",
     "90%"
    ],
    [
     "7",
     9,
     90,
     "0,10",
     "1,00",
     "100%"
    ],
    [
     "Total",
     90,
     "—",
     "1,00",
     "—",
     "100%"
    ]
   ],
   "N": 90
  },
  "ask": "¿Cuántos turnos registran a lo más 4 llamadas?",
  "alts": [
   "$27$",
   "$9$",
   "$63$",
   "$18$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Tabla con } n=90.\\ F_i\\text{ acumula desde el menor valor.}",
  "pautaSteps": [
   "\\text{\"a lo más } 4\\text{\"} = F(4) = 27"
  ],
  "conc": "<b>27</b> de los 90 turnos registran a lo más 4 llamadas."
 },
 {
  "tipo": "Lectura con frecuencias acumuladas",
  "ctx": "Call center · Turnos",
  "enun": "Se registró el número de llamadas por hora en $n=90$ turnos. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "3",
     9,
     9,
     "0,10",
     "0,10",
     "10%"
    ],
    [
     "4",
     18,
     27,
     "0,20",
     "0,30",
     "30%"
    ],
    [
     "5",
     27,
     54,
     "0,30",
     "0,60",
     "60%"
    ],
    [
     "6",
     27,
     81,
     "0,30",
     "0,90",
     "90%"
    ],
    [
     "7",
     9,
     90,
     "0,10",
     "1,00",
     "100%"
    ],
    [
     "Total",
     90,
     "—",
     "1,00",
     "—",
     "100%"
    ]
   ],
   "N": 90
  },
  "ask": "¿Cuántos turnos registran más de 5 llamadas?",
  "alts": [
   "$63$",
   "$54$",
   "$9$",
   "$36$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Tabla con } n=90.\\ F_i\\text{ acumula desde el menor valor.}",
  "pautaSteps": [
   "\\text{\"más de } 5\\text{\"} = n - F(5) = 90 - 54 = 36"
  ],
  "conc": "<b>36</b> de los 90 turnos registran más de 5 llamadas."
 },
 {
  "tipo": "Lectura con frecuencias acumuladas",
  "ctx": "Call center · Turnos",
  "enun": "Se registró el número de llamadas por hora en $n=90$ turnos. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "3",
     9,
     9,
     "0,10",
     "0,10",
     "10%"
    ],
    [
     "4",
     18,
     27,
     "0,20",
     "0,30",
     "30%"
    ],
    [
     "5",
     27,
     54,
     "0,30",
     "0,60",
     "60%"
    ],
    [
     "6",
     27,
     81,
     "0,30",
     "0,90",
     "90%"
    ],
    [
     "7",
     9,
     90,
     "0,10",
     "1,00",
     "100%"
    ],
    [
     "Total",
     90,
     "—",
     "1,00",
     "—",
     "100%"
    ]
   ],
   "N": 90
  },
  "ask": "¿Cuántos turnos registran entre 4 y 6 llamadas (inclusive)?",
  "alts": [
   "$54$",
   "$45$",
   "$72$",
   "$27$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Tabla con } n=90.\\ F_i\\text{ acumula desde el menor valor.}",
  "pautaSteps": [
   "\\text{\"entre } 4\\text{ y }6\\text{\" (inclusive)} = F(6) - F(3) = 81 - 9 = 72"
  ],
  "conc": "<b>72</b> de los 90 turnos registran entre 4 y 6 llamadas (inclusive)."
 },
 {
  "tipo": "Lectura con frecuencias acumuladas",
  "ctx": "Call center · Turnos",
  "enun": "Se registró el número de llamadas por hora en $n=90$ turnos. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "3",
     9,
     9,
     "0,10",
     "0,10",
     "10%"
    ],
    [
     "4",
     18,
     27,
     "0,20",
     "0,30",
     "30%"
    ],
    [
     "5",
     27,
     54,
     "0,30",
     "0,60",
     "60%"
    ],
    [
     "6",
     27,
     81,
     "0,30",
     "0,90",
     "90%"
    ],
    [
     "7",
     9,
     90,
     "0,10",
     "1,00",
     "100%"
    ],
    [
     "Total",
     90,
     "—",
     "1,00",
     "—",
     "100%"
    ]
   ],
   "N": 90
  },
  "ask": "¿Qué porcentaje de turnos registra al menos 6 llamadas?",
  "alts": [
   "$10\\%$",
   "$60\\%$",
   "$40\\%$",
   "$30\\%$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Tabla con } n=90.\\ F_i\\text{ acumula desde el menor valor.}",
  "pautaSteps": [
   "\\text{\"al menos } 6\\text{\"} = \\dfrac{n - F(5)}{n}\\times 100 = \\dfrac{36}{90}\\times 100 = 40\\%"
  ],
  "conc": "El <b>40%</b> de los turnos registra al menos 6 llamadas (36 de 90)."
 },
 {
  "tipo": "Lectura con frecuencias acumuladas",
  "ctx": "Deporte · Torneo",
  "enun": "Se registró el número de goles en $n=40$ partidos. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "0",
     10,
     10,
     "0,25",
     "0,25",
     "25%"
    ],
    [
     "1",
     14,
     24,
     "0,35",
     "0,60",
     "60%"
    ],
    [
     "2",
     10,
     34,
     "0,25",
     "0,85",
     "85%"
    ],
    [
     "3",
     4,
     38,
     "0,10",
     "0,95",
     "95%"
    ],
    [
     "4",
     2,
     40,
     "0,05",
     "1,00",
     "100%"
    ],
    [
     "Total",
     40,
     "—",
     "1,00",
     "—",
     "100%"
    ]
   ],
   "N": 40
  },
  "ask": "¿Cuántos partidos registran a lo más 1 gol?",
  "alts": [
   "$24$",
   "$10$",
   "$16$",
   "$14$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Tabla con } n=40.\\ F_i\\text{ acumula desde el menor valor.}",
  "pautaSteps": [
   "\\text{\"a lo más } 1\\text{\"} = F(1) = 24"
  ],
  "conc": "<b>24</b> de los 40 partidos registran a lo más 1 gol."
 },
 {
  "tipo": "Lectura con frecuencias acumuladas",
  "ctx": "Deporte · Torneo",
  "enun": "Se registró el número de goles en $n=40$ partidos. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "0",
     10,
     10,
     "0,25",
     "0,25",
     "25%"
    ],
    [
     "1",
     14,
     24,
     "0,35",
     "0,60",
     "60%"
    ],
    [
     "2",
     10,
     34,
     "0,25",
     "0,85",
     "85%"
    ],
    [
     "3",
     4,
     38,
     "0,10",
     "0,95",
     "95%"
    ],
    [
     "4",
     2,
     40,
     "0,05",
     "1,00",
     "100%"
    ],
    [
     "Total",
     40,
     "—",
     "1,00",
     "—",
     "100%"
    ]
   ],
   "N": 40
  },
  "ask": "¿Cuántos partidos registran más de 2 goles?",
  "alts": [
   "$16$",
   "$6$",
   "$34$",
   "$2$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Tabla con } n=40.\\ F_i\\text{ acumula desde el menor valor.}",
  "pautaSteps": [
   "\\text{\"más de } 2\\text{\"} = n - F(2) = 40 - 34 = 6"
  ],
  "conc": "<b>6</b> de los 40 partidos registran más de 2 goles."
 },
 {
  "tipo": "Lectura con frecuencias acumuladas",
  "ctx": "Deporte · Torneo",
  "enun": "Se registró el número de goles en $n=40$ partidos. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "0",
     10,
     10,
     "0,25",
     "0,25",
     "25%"
    ],
    [
     "1",
     14,
     24,
     "0,35",
     "0,60",
     "60%"
    ],
    [
     "2",
     10,
     34,
     "0,25",
     "0,85",
     "85%"
    ],
    [
     "3",
     4,
     38,
     "0,10",
     "0,95",
     "95%"
    ],
    [
     "4",
     2,
     40,
     "0,05",
     "1,00",
     "100%"
    ],
    [
     "Total",
     40,
     "—",
     "1,00",
     "—",
     "100%"
    ]
   ],
   "N": 40
  },
  "ask": "¿Cuántos partidos registran entre 1 y 2 goles (inclusive)?",
  "alts": [
   "$10$",
   "$24$",
   "$14$",
   "$34$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Tabla con } n=40.\\ F_i\\text{ acumula desde el menor valor.}",
  "pautaSteps": [
   "\\text{\"entre } 1\\text{ y }2\\text{\" (inclusive)} = F(2) - F(0) = 34 - 10 = 24"
  ],
  "conc": "<b>24</b> de los 40 partidos registran entre 1 y 2 goles (inclusive)."
 },
 {
  "tipo": "Lectura con frecuencias acumuladas",
  "ctx": "Deporte · Torneo",
  "enun": "Se registró el número de goles en $n=40$ partidos. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "0",
     10,
     10,
     "0,25",
     "0,25",
     "25%"
    ],
    [
     "1",
     14,
     24,
     "0,35",
     "0,60",
     "60%"
    ],
    [
     "2",
     10,
     34,
     "0,25",
     "0,85",
     "85%"
    ],
    [
     "3",
     4,
     38,
     "0,10",
     "0,95",
     "95%"
    ],
    [
     "4",
     2,
     40,
     "0,05",
     "1,00",
     "100%"
    ],
    [
     "Total",
     40,
     "—",
     "1,00",
     "—",
     "100%"
    ]
   ],
   "N": 40
  },
  "ask": "¿Qué porcentaje de partidos registra menos de 3 goles?",
  "alts": [
   "$85\\%$",
   "$95\\%$",
   "$15\\%$",
   "$60\\%$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Tabla con } n=40.\\ F_i\\text{ acumula desde el menor valor.}",
  "pautaSteps": [
   "\\text{\"menos de } 3\\text{\"} = \\dfrac{F(2)}{n}\\times 100 = \\dfrac{34}{40}\\times 100 = 85\\%"
  ],
  "conc": "El <b>85%</b> de los partidos registra menos de 3 goles (34 de 40)."
 },
 {
  "tipo": "Lectura con frecuencias acumuladas",
  "ctx": "Educación · Lectura",
  "enun": "Se registró el número de libros leídos al mes en $n=60$ estudiantes. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "0",
     6,
     6,
     "0,10",
     "0,10",
     "10%"
    ],
    [
     "1",
     12,
     18,
     "0,20",
     "0,30",
     "30%"
    ],
    [
     "2",
     18,
     36,
     "0,30",
     "0,60",
     "60%"
    ],
    [
     "3",
     12,
     48,
     "0,20",
     "0,80",
     "80%"
    ],
    [
     "4",
     9,
     57,
     "0,15",
     "0,95",
     "95%"
    ],
    [
     "5",
     3,
     60,
     "0,05",
     "1,00",
     "100%"
    ],
    [
     "Total",
     60,
     "—",
     "1,00",
     "—",
     "100%"
    ]
   ],
   "N": 60
  },
  "ask": "¿Cuántos estudiantes registran a lo más 2 libros?",
  "alts": [
   "$18$",
   "$24$",
   "$48$",
   "$36$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Tabla con } n=60.\\ F_i\\text{ acumula desde el menor valor.}",
  "pautaSteps": [
   "\\text{\"a lo más } 2\\text{\"} = F(2) = 36"
  ],
  "conc": "<b>36</b> de los 60 estudiantes registran a lo más 2 libros."
 },
 {
  "tipo": "Lectura con frecuencias acumuladas",
  "ctx": "Educación · Lectura",
  "enun": "Se registró el número de libros leídos al mes en $n=60$ estudiantes. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "0",
     6,
     6,
     "0,10",
     "0,10",
     "10%"
    ],
    [
     "1",
     12,
     18,
     "0,20",
     "0,30",
     "30%"
    ],
    [
     "2",
     18,
     36,
     "0,30",
     "0,60",
     "60%"
    ],
    [
     "3",
     12,
     48,
     "0,20",
     "0,80",
     "80%"
    ],
    [
     "4",
     9,
     57,
     "0,15",
     "0,95",
     "95%"
    ],
    [
     "5",
     3,
     60,
     "0,05",
     "1,00",
     "100%"
    ],
    [
     "Total",
     60,
     "—",
     "1,00",
     "—",
     "100%"
    ]
   ],
   "N": 60
  },
  "ask": "¿Cuántos estudiantes registran más de 3 libros?",
  "alts": [
   "$24$",
   "$12$",
   "$48$",
   "$3$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Tabla con } n=60.\\ F_i\\text{ acumula desde el menor valor.}",
  "pautaSteps": [
   "\\text{\"más de } 3\\text{\"} = n - F(3) = 60 - 48 = 12"
  ],
  "conc": "<b>12</b> de los 60 estudiantes registran más de 3 libros."
 },
 {
  "tipo": "Lectura con frecuencias acumuladas",
  "ctx": "Educación · Lectura",
  "enun": "Se registró el número de libros leídos al mes en $n=60$ estudiantes. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "0",
     6,
     6,
     "0,10",
     "0,10",
     "10%"
    ],
    [
     "1",
     12,
     18,
     "0,20",
     "0,30",
     "30%"
    ],
    [
     "2",
     18,
     36,
     "0,30",
     "0,60",
     "60%"
    ],
    [
     "3",
     12,
     48,
     "0,20",
     "0,80",
     "80%"
    ],
    [
     "4",
     9,
     57,
     "0,15",
     "0,95",
     "95%"
    ],
    [
     "5",
     3,
     60,
     "0,05",
     "1,00",
     "100%"
    ],
    [
     "Total",
     60,
     "—",
     "1,00",
     "—",
     "100%"
    ]
   ],
   "N": 60
  },
  "ask": "¿Cuántos estudiantes registran entre 2 y 4 libros (inclusive)?",
  "alts": [
   "$21$",
   "$30$",
   "$12$",
   "$39$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Tabla con } n=60.\\ F_i\\text{ acumula desde el menor valor.}",
  "pautaSteps": [
   "\\text{\"entre } 2\\text{ y }4\\text{\" (inclusive)} = F(4) - F(1) = 57 - 18 = 39"
  ],
  "conc": "<b>39</b> de los 60 estudiantes registran entre 2 y 4 libros (inclusive)."
 },
 {
  "tipo": "Lectura con frecuencias acumuladas",
  "ctx": "Educación · Lectura",
  "enun": "Se registró el número de libros leídos al mes en $n=60$ estudiantes. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "0",
     6,
     6,
     "0,10",
     "0,10",
     "10%"
    ],
    [
     "1",
     12,
     18,
     "0,20",
     "0,30",
     "30%"
    ],
    [
     "2",
     18,
     36,
     "0,30",
     "0,60",
     "60%"
    ],
    [
     "3",
     12,
     48,
     "0,20",
     "0,80",
     "80%"
    ],
    [
     "4",
     9,
     57,
     "0,15",
     "0,95",
     "95%"
    ],
    [
     "5",
     3,
     60,
     "0,05",
     "1,00",
     "100%"
    ],
    [
     "Total",
     60,
     "—",
     "1,00",
     "—",
     "100%"
    ]
   ],
   "N": 60
  },
  "ask": "¿Qué porcentaje de estudiantes registra menos de 2 libros?",
  "alts": [
   "$30\\%$",
   "$60\\%$",
   "$70\\%$",
   "$10\\%$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Tabla con } n=60.\\ F_i\\text{ acumula desde el menor valor.}",
  "pautaSteps": [
   "\\text{\"menos de } 2\\text{\"} = \\dfrac{F(1)}{n}\\times 100 = \\dfrac{18}{60}\\times 100 = 30\\%"
  ],
  "conc": "El <b>30%</b> de los estudiantes registra menos de 2 libros (18 de 60)."
 },
 {
  "tipo": "Lectura con frecuencias acumuladas",
  "ctx": "Tránsito · Intersección",
  "enun": "Se registró el número de accidentes por mes en $n=50$ meses. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "0",
     15,
     15,
     "0,30",
     "0,30",
     "30%"
    ],
    [
     "1",
     15,
     30,
     "0,30",
     "0,60",
     "60%"
    ],
    [
     "2",
     10,
     40,
     "0,20",
     "0,80",
     "80%"
    ],
    [
     "3",
     7,
     47,
     "0,14",
     "0,94",
     "94%"
    ],
    [
     "4",
     3,
     50,
     "0,06",
     "1,00",
     "100%"
    ],
    [
     "Total",
     50,
     "—",
     "1,00",
     "—",
     "100%"
    ]
   ],
   "N": 50
  },
  "ask": "¿Cuántos meses registran a lo más 1 accidente?",
  "alts": [
   "$30$",
   "$15$",
   "$20$",
   "$40$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Tabla con } n=50.\\ F_i\\text{ acumula desde el menor valor.}",
  "pautaSteps": [
   "\\text{\"a lo más } 1\\text{\"} = F(1) = 30"
  ],
  "conc": "<b>30</b> de los 50 meses registran a lo más 1 accidente."
 },
 {
  "tipo": "Lectura con frecuencias acumuladas",
  "ctx": "Tránsito · Intersección",
  "enun": "Se registró el número de accidentes por mes en $n=50$ meses. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "0",
     15,
     15,
     "0,30",
     "0,30",
     "30%"
    ],
    [
     "1",
     15,
     30,
     "0,30",
     "0,60",
     "60%"
    ],
    [
     "2",
     10,
     40,
     "0,20",
     "0,80",
     "80%"
    ],
    [
     "3",
     7,
     47,
     "0,14",
     "0,94",
     "94%"
    ],
    [
     "4",
     3,
     50,
     "0,06",
     "1,00",
     "100%"
    ],
    [
     "Total",
     50,
     "—",
     "1,00",
     "—",
     "100%"
    ]
   ],
   "N": 50
  },
  "ask": "¿Cuántos meses registran más de 2 accidentes?",
  "alts": [
   "$20$",
   "$40$",
   "$10$",
   "$3$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Tabla con } n=50.\\ F_i\\text{ acumula desde el menor valor.}",
  "pautaSteps": [
   "\\text{\"más de } 2\\text{\"} = n - F(2) = 50 - 40 = 10"
  ],
  "conc": "<b>10</b> de los 50 meses registran más de 2 accidentes."
 },
 {
  "tipo": "Lectura con frecuencias acumuladas",
  "ctx": "Tránsito · Intersección",
  "enun": "Se registró el número de accidentes por mes en $n=50$ meses. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "0",
     15,
     15,
     "0,30",
     "0,30",
     "30%"
    ],
    [
     "1",
     15,
     30,
     "0,30",
     "0,60",
     "60%"
    ],
    [
     "2",
     10,
     40,
     "0,20",
     "0,80",
     "80%"
    ],
    [
     "3",
     7,
     47,
     "0,14",
     "0,94",
     "94%"
    ],
    [
     "4",
     3,
     50,
     "0,06",
     "1,00",
     "100%"
    ],
    [
     "Total",
     50,
     "—",
     "1,00",
     "—",
     "100%"
    ]
   ],
   "N": 50
  },
  "ask": "¿Cuántos meses registran entre 0 y 2 accidentes (inclusive)?",
  "alts": [
   "$25$",
   "$40$",
   "$30$",
   "$15$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Tabla con } n=50.\\ F_i\\text{ acumula desde el menor valor.}",
  "pautaSteps": [
   "\\text{\"entre } 0\\text{ y }2\\text{\" (inclusive)} = F(2) = 40\\quad(\\text{0 es el menor valor})"
  ],
  "conc": "<b>40</b> de los 50 meses registran entre 0 y 2 accidentes (inclusive)."
 },
 {
  "tipo": "Lectura con frecuencias acumuladas",
  "ctx": "Tránsito · Intersección",
  "enun": "Se registró el número de accidentes por mes en $n=50$ meses. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "0",
     15,
     15,
     "0,30",
     "0,30",
     "30%"
    ],
    [
     "1",
     15,
     30,
     "0,30",
     "0,60",
     "60%"
    ],
    [
     "2",
     10,
     40,
     "0,20",
     "0,80",
     "80%"
    ],
    [
     "3",
     7,
     47,
     "0,14",
     "0,94",
     "94%"
    ],
    [
     "4",
     3,
     50,
     "0,06",
     "1,00",
     "100%"
    ],
    [
     "Total",
     50,
     "—",
     "1,00",
     "—",
     "100%"
    ]
   ],
   "N": 50
  },
  "ask": "¿Qué porcentaje de meses registra al menos 3 accidentes?",
  "alts": [
   "$6\\%$",
   "$80\\%$",
   "$14\\%$",
   "$20\\%$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Tabla con } n=50.\\ F_i\\text{ acumula desde el menor valor.}",
  "pautaSteps": [
   "\\text{\"al menos } 3\\text{\"} = \\dfrac{n - F(2)}{n}\\times 100 = \\dfrac{10}{50}\\times 100 = 20\\%"
  ],
  "conc": "El <b>20%</b> de los meses registra al menos 3 accidentes (10 de 50)."
 },
 {
  "tipo": "Lectura con frecuencias acumuladas",
  "ctx": "Producción · Lotes",
  "enun": "Se registró el número de defectos por lote en $n=80$ lotes. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "0",
     16,
     16,
     "0,20",
     "0,20",
     "20%"
    ],
    [
     "1",
     20,
     36,
     "0,25",
     "0,45",
     "45%"
    ],
    [
     "2",
     20,
     56,
     "0,25",
     "0,70",
     "70%"
    ],
    [
     "3",
     12,
     68,
     "0,15",
     "0,85",
     "85%"
    ],
    [
     "4",
     8,
     76,
     "0,10",
     "0,95",
     "95%"
    ],
    [
     "5",
     4,
     80,
     "0,05",
     "1,00",
     "100%"
    ],
    [
     "Total",
     80,
     "—",
     "1,00",
     "—",
     "100%"
    ]
   ],
   "N": 80
  },
  "ask": "¿Cuántos lotes registran a lo más 2 defectos?",
  "alts": [
   "$56$",
   "$36$",
   "$24$",
   "$20$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Tabla con } n=80.\\ F_i\\text{ acumula desde el menor valor.}",
  "pautaSteps": [
   "\\text{\"a lo más } 2\\text{\"} = F(2) = 56"
  ],
  "conc": "<b>56</b> de los 80 lotes registran a lo más 2 defectos."
 },
 {
  "tipo": "Lectura con frecuencias acumuladas",
  "ctx": "Producción · Lotes",
  "enun": "Se registró el número de defectos por lote en $n=80$ lotes. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "0",
     16,
     16,
     "0,20",
     "0,20",
     "20%"
    ],
    [
     "1",
     20,
     36,
     "0,25",
     "0,45",
     "45%"
    ],
    [
     "2",
     20,
     56,
     "0,25",
     "0,70",
     "70%"
    ],
    [
     "3",
     12,
     68,
     "0,15",
     "0,85",
     "85%"
    ],
    [
     "4",
     8,
     76,
     "0,10",
     "0,95",
     "95%"
    ],
    [
     "5",
     4,
     80,
     "0,05",
     "1,00",
     "100%"
    ],
    [
     "Total",
     80,
     "—",
     "1,00",
     "—",
     "100%"
    ]
   ],
   "N": 80
  },
  "ask": "¿Cuántos lotes registran más de 3 defectos?",
  "alts": [
   "$24$",
   "$68$",
   "$4$",
   "$12$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Tabla con } n=80.\\ F_i\\text{ acumula desde el menor valor.}",
  "pautaSteps": [
   "\\text{\"más de } 3\\text{\"} = n - F(3) = 80 - 68 = 12"
  ],
  "conc": "<b>12</b> de los 80 lotes registran más de 3 defectos."
 },
 {
  "tipo": "Lectura con frecuencias acumuladas",
  "ctx": "Producción · Lotes",
  "enun": "Se registró el número de defectos por lote en $n=80$ lotes. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "0",
     16,
     16,
     "0,20",
     "0,20",
     "20%"
    ],
    [
     "1",
     20,
     36,
     "0,25",
     "0,45",
     "45%"
    ],
    [
     "2",
     20,
     56,
     "0,25",
     "0,70",
     "70%"
    ],
    [
     "3",
     12,
     68,
     "0,15",
     "0,85",
     "85%"
    ],
    [
     "4",
     8,
     76,
     "0,10",
     "0,95",
     "95%"
    ],
    [
     "5",
     4,
     80,
     "0,05",
     "1,00",
     "100%"
    ],
    [
     "Total",
     80,
     "—",
     "1,00",
     "—",
     "100%"
    ]
   ],
   "N": 80
  },
  "ask": "¿Cuántos lotes registran entre 1 y 3 defectos (inclusive)?",
  "alts": [
   "$32$",
   "$40$",
   "$52$",
   "$20$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Tabla con } n=80.\\ F_i\\text{ acumula desde el menor valor.}",
  "pautaSteps": [
   "\\text{\"entre } 1\\text{ y }3\\text{\" (inclusive)} = F(3) - F(0) = 68 - 16 = 52"
  ],
  "conc": "<b>52</b> de los 80 lotes registran entre 1 y 3 defectos (inclusive)."
 },
 {
  "tipo": "Lectura con frecuencias acumuladas",
  "ctx": "Producción · Lotes",
  "enun": "Se registró el número de defectos por lote en $n=80$ lotes. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "0",
     16,
     16,
     "0,20",
     "0,20",
     "20%"
    ],
    [
     "1",
     20,
     36,
     "0,25",
     "0,45",
     "45%"
    ],
    [
     "2",
     20,
     56,
     "0,25",
     "0,70",
     "70%"
    ],
    [
     "3",
     12,
     68,
     "0,15",
     "0,85",
     "85%"
    ],
    [
     "4",
     8,
     76,
     "0,10",
     "0,95",
     "95%"
    ],
    [
     "5",
     4,
     80,
     "0,05",
     "1,00",
     "100%"
    ],
    [
     "Total",
     80,
     "—",
     "1,00",
     "—",
     "100%"
    ]
   ],
   "N": 80
  },
  "ask": "¿Qué porcentaje de lotes registra exactamente 0 defectos?",
  "alts": [
   "$20\\%$",
   "$45\\%$",
   "$80\\%$",
   "$25\\%$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Tabla con } n=80.\\ F_i\\text{ acumula desde el menor valor.}",
  "pautaSteps": [
   "\\dfrac{f(x=0)}{n}\\times 100 = \\dfrac{16}{80}\\times 100 = 20\\%"
  ],
  "conc": "El <b>20%</b> de los lotes registra exactamente 0 defectos (16 de 80)."
 },
 {
  "tipo": "Lectura con frecuencias acumuladas",
  "ctx": "Salud · Pacientes",
  "enun": "Se registró el número de visitas al médico al año en $n=100$ pacientes. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "0",
     10,
     10,
     "0,10",
     "0,10",
     "10%"
    ],
    [
     "1",
     20,
     30,
     "0,20",
     "0,30",
     "30%"
    ],
    [
     "2",
     30,
     60,
     "0,30",
     "0,60",
     "60%"
    ],
    [
     "3",
     20,
     80,
     "0,20",
     "0,80",
     "80%"
    ],
    [
     "4",
     10,
     90,
     "0,10",
     "0,90",
     "90%"
    ],
    [
     "5",
     10,
     100,
     "0,10",
     "1,00",
     "100%"
    ],
    [
     "Total",
     100,
     "—",
     "1,00",
     "—",
     "100%"
    ]
   ],
   "N": 100
  },
  "ask": "¿Cuántos pacientes registran a lo más 2 visitas?",
  "alts": [
   "$60$",
   "$30$",
   "$40$",
   "$80$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Tabla con } n=100.\\ F_i\\text{ acumula desde el menor valor.}",
  "pautaSteps": [
   "\\text{\"a lo más } 2\\text{\"} = F(2) = 60"
  ],
  "conc": "<b>60</b> de los 100 pacientes registran a lo más 2 visitas."
 },
 {
  "tipo": "Lectura con frecuencias acumuladas",
  "ctx": "Salud · Pacientes",
  "enun": "Se registró el número de visitas al médico al año en $n=100$ pacientes. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "0",
     10,
     10,
     "0,10",
     "0,10",
     "10%"
    ],
    [
     "1",
     20,
     30,
     "0,20",
     "0,30",
     "30%"
    ],
    [
     "2",
     30,
     60,
     "0,30",
     "0,60",
     "60%"
    ],
    [
     "3",
     20,
     80,
     "0,20",
     "0,80",
     "80%"
    ],
    [
     "4",
     10,
     90,
     "0,10",
     "0,90",
     "90%"
    ],
    [
     "5",
     10,
     100,
     "0,10",
     "1,00",
     "100%"
    ],
    [
     "Total",
     100,
     "—",
     "1,00",
     "—",
     "100%"
    ]
   ],
   "N": 100
  },
  "ask": "¿Cuántos pacientes registran más de 3 visitas?",
  "alts": [
   "$40$",
   "$20$",
   "$80$",
   "$10$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Tabla con } n=100.\\ F_i\\text{ acumula desde el menor valor.}",
  "pautaSteps": [
   "\\text{\"más de } 3\\text{\"} = n - F(3) = 100 - 80 = 20"
  ],
  "conc": "<b>20</b> de los 100 pacientes registran más de 3 visitas."
 },
 {
  "tipo": "Lectura con frecuencias acumuladas",
  "ctx": "Salud · Pacientes",
  "enun": "Se registró el número de visitas al médico al año en $n=100$ pacientes. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "0",
     10,
     10,
     "0,10",
     "0,10",
     "10%"
    ],
    [
     "1",
     20,
     30,
     "0,20",
     "0,30",
     "30%"
    ],
    [
     "2",
     30,
     60,
     "0,30",
     "0,60",
     "60%"
    ],
    [
     "3",
     20,
     80,
     "0,20",
     "0,80",
     "80%"
    ],
    [
     "4",
     10,
     90,
     "0,10",
     "0,90",
     "90%"
    ],
    [
     "5",
     10,
     100,
     "0,10",
     "1,00",
     "100%"
    ],
    [
     "Total",
     100,
     "—",
     "1,00",
     "—",
     "100%"
    ]
   ],
   "N": 100
  },
  "ask": "¿Cuántos pacientes registran entre 2 y 4 visitas (inclusive)?",
  "alts": [
   "$30$",
   "$60$",
   "$50$",
   "$20$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Tabla con } n=100.\\ F_i\\text{ acumula desde el menor valor.}",
  "pautaSteps": [
   "\\text{\"entre } 2\\text{ y }4\\text{\" (inclusive)} = F(4) - F(1) = 90 - 30 = 60"
  ],
  "conc": "<b>60</b> de los 100 pacientes registran entre 2 y 4 visitas (inclusive)."
 },
 {
  "tipo": "Lectura con frecuencias acumuladas",
  "ctx": "Salud · Pacientes",
  "enun": "Se registró el número de visitas al médico al año en $n=100$ pacientes. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "0",
     10,
     10,
     "0,10",
     "0,10",
     "10%"
    ],
    [
     "1",
     20,
     30,
     "0,20",
     "0,30",
     "30%"
    ],
    [
     "2",
     30,
     60,
     "0,30",
     "0,60",
     "60%"
    ],
    [
     "3",
     20,
     80,
     "0,20",
     "0,80",
     "80%"
    ],
    [
     "4",
     10,
     90,
     "0,10",
     "0,90",
     "90%"
    ],
    [
     "5",
     10,
     100,
     "0,10",
     "1,00",
     "100%"
    ],
    [
     "Total",
     100,
     "—",
     "1,00",
     "—",
     "100%"
    ]
   ],
   "N": 100
  },
  "ask": "¿Qué porcentaje de pacientes registra al menos 4 visitas?",
  "alts": [
   "$10\\%$",
   "$80\\%$",
   "$20\\%$",
   "$40\\%$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Tabla con } n=100.\\ F_i\\text{ acumula desde el menor valor.}",
  "pautaSteps": [
   "\\text{\"al menos } 4\\text{\"} = \\dfrac{n - F(3)}{n}\\times 100 = \\dfrac{20}{100}\\times 100 = 20\\%"
  ],
  "conc": "El <b>20%</b> de los pacientes registra al menos 4 visitas (20 de 100)."
 },
 {
  "tipo": "Lectura con frecuencias acumuladas",
  "ctx": "Educación · Rendimiento",
  "enun": "Se registró el número de materias reprobadas en $n=60$ estudiantes. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "0",
     30,
     30,
     "0,50",
     "0,50",
     "50%"
    ],
    [
     "1",
     18,
     48,
     "0,30",
     "0,80",
     "80%"
    ],
    [
     "2",
     9,
     57,
     "0,15",
     "0,95",
     "95%"
    ],
    [
     "3",
     3,
     60,
     "0,05",
     "1,00",
     "100%"
    ],
    [
     "Total",
     60,
     "—",
     "1,00",
     "—",
     "100%"
    ]
   ],
   "N": 60
  },
  "ask": "¿Cuántos estudiantes registran exactamente 0 materias?",
  "alts": [
   "$48$",
   "$18$",
   "$19$",
   "$30$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Tabla con } n=60.\\ F_i\\text{ acumula desde el menor valor.}",
  "pautaSteps": [
   "f(x=0) = 30"
  ],
  "conc": "<b>30</b> de los 60 estudiantes registran exactamente 0 materias."
 },
 {
  "tipo": "Lectura con frecuencias acumuladas",
  "ctx": "Educación · Rendimiento",
  "enun": "Se registró el número de materias reprobadas en $n=60$ estudiantes. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "0",
     30,
     30,
     "0,50",
     "0,50",
     "50%"
    ],
    [
     "1",
     18,
     48,
     "0,30",
     "0,80",
     "80%"
    ],
    [
     "2",
     9,
     57,
     "0,15",
     "0,95",
     "95%"
    ],
    [
     "3",
     3,
     60,
     "0,05",
     "1,00",
     "100%"
    ],
    [
     "Total",
     60,
     "—",
     "1,00",
     "—",
     "100%"
    ]
   ],
   "N": 60
  },
  "ask": "¿Cuántos estudiantes registran más de 1 materia?",
  "alts": [
   "$30$",
   "$12$",
   "$48$",
   "$3$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Tabla con } n=60.\\ F_i\\text{ acumula desde el menor valor.}",
  "pautaSteps": [
   "\\text{\"más de } 1\\text{\"} = n - F(1) = 60 - 48 = 12"
  ],
  "conc": "<b>12</b> de los 60 estudiantes registran más de 1 materia."
 },
 {
  "tipo": "Lectura con frecuencias acumuladas",
  "ctx": "Educación · Rendimiento",
  "enun": "Se registró el número de materias reprobadas en $n=60$ estudiantes. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "0",
     30,
     30,
     "0,50",
     "0,50",
     "50%"
    ],
    [
     "1",
     18,
     48,
     "0,30",
     "0,80",
     "80%"
    ],
    [
     "2",
     9,
     57,
     "0,15",
     "0,95",
     "95%"
    ],
    [
     "3",
     3,
     60,
     "0,05",
     "1,00",
     "100%"
    ],
    [
     "Total",
     60,
     "—",
     "1,00",
     "—",
     "100%"
    ]
   ],
   "N": 60
  },
  "ask": "¿Cuántos estudiantes registran entre 1 y 2 materias (inclusive)?",
  "alts": [
   "$9$",
   "$18$",
   "$57$",
   "$27$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Tabla con } n=60.\\ F_i\\text{ acumula desde el menor valor.}",
  "pautaSteps": [
   "\\text{\"entre } 1\\text{ y }2\\text{\" (inclusive)} = F(2) - F(0) = 57 - 30 = 27"
  ],
  "conc": "<b>27</b> de los 60 estudiantes registran entre 1 y 2 materias (inclusive)."
 },
 {
  "tipo": "Lectura con frecuencias acumuladas",
  "ctx": "Educación · Rendimiento",
  "enun": "Se registró el número de materias reprobadas en $n=60$ estudiantes. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "0",
     30,
     30,
     "0,50",
     "0,50",
     "50%"
    ],
    [
     "1",
     18,
     48,
     "0,30",
     "0,80",
     "80%"
    ],
    [
     "2",
     9,
     57,
     "0,15",
     "0,95",
     "95%"
    ],
    [
     "3",
     3,
     60,
     "0,05",
     "1,00",
     "100%"
    ],
    [
     "Total",
     60,
     "—",
     "1,00",
     "—",
     "100%"
    ]
   ],
   "N": 60
  },
  "ask": "¿Qué porcentaje de estudiantes registra al menos 2 materias?",
  "alts": [
   "$20\\%$",
   "$5\\%$",
   "$80\\%$",
   "$15\\%$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Tabla con } n=60.\\ F_i\\text{ acumula desde el menor valor.}",
  "pautaSteps": [
   "\\text{\"al menos } 2\\text{\"} = \\dfrac{n - F(1)}{n}\\times 100 = \\dfrac{12}{60}\\times 100 = 20\\%"
  ],
  "conc": "El <b>20%</b> de los estudiantes registra al menos 2 materias (12 de 60)."
 },
 {
  "tipo": "Lectura con frecuencias acumuladas",
  "ctx": "Oficina · Correos",
  "enun": "Se registró el número de correos por hora en $n=100$ registros. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "3",
     10,
     10,
     "0,10",
     "0,10",
     "10%"
    ],
    [
     "4",
     25,
     35,
     "0,25",
     "0,35",
     "35%"
    ],
    [
     "5",
     35,
     70,
     "0,35",
     "0,70",
     "70%"
    ],
    [
     "6",
     20,
     90,
     "0,20",
     "0,90",
     "90%"
    ],
    [
     "7",
     10,
     100,
     "0,10",
     "1,00",
     "100%"
    ],
    [
     "Total",
     100,
     "—",
     "1,00",
     "—",
     "100%"
    ]
   ],
   "N": 100
  },
  "ask": "¿Cuántos registros muestran a lo más 4 correos?",
  "alts": [
   "$10$",
   "$65$",
   "$35$",
   "$25$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Tabla con } n=100.\\ F_i\\text{ acumula desde el menor valor.}",
  "pautaSteps": [
   "\\text{\"a lo más } 4\\text{\"} = F(4) = 35"
  ],
  "conc": "<b>35</b> de los 100 registros muestran a lo más 4 correos."
 },
 {
  "tipo": "Lectura con frecuencias acumuladas",
  "ctx": "Oficina · Correos",
  "enun": "Se registró el número de correos por hora en $n=100$ registros. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "3",
     10,
     10,
     "0,10",
     "0,10",
     "10%"
    ],
    [
     "4",
     25,
     35,
     "0,25",
     "0,35",
     "35%"
    ],
    [
     "5",
     35,
     70,
     "0,35",
     "0,70",
     "70%"
    ],
    [
     "6",
     20,
     90,
     "0,20",
     "0,90",
     "90%"
    ],
    [
     "7",
     10,
     100,
     "0,10",
     "1,00",
     "100%"
    ],
    [
     "Total",
     100,
     "—",
     "1,00",
     "—",
     "100%"
    ]
   ],
   "N": 100
  },
  "ask": "¿Cuántos registros muestran más de 5 correos?",
  "alts": [
   "$65$",
   "$70$",
   "$30$",
   "$10$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Tabla con } n=100.\\ F_i\\text{ acumula desde el menor valor.}",
  "pautaSteps": [
   "\\text{\"más de } 5\\text{\"} = n - F(5) = 100 - 70 = 30"
  ],
  "conc": "<b>30</b> de los 100 registros muestran más de 5 correos."
 },
 {
  "tipo": "Lectura con frecuencias acumuladas",
  "ctx": "Oficina · Correos",
  "enun": "Se registró el número de correos por hora en $n=100$ registros. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "3",
     10,
     10,
     "0,10",
     "0,10",
     "10%"
    ],
    [
     "4",
     25,
     35,
     "0,25",
     "0,35",
     "35%"
    ],
    [
     "5",
     35,
     70,
     "0,35",
     "0,70",
     "70%"
    ],
    [
     "6",
     20,
     90,
     "0,20",
     "0,90",
     "90%"
    ],
    [
     "7",
     10,
     100,
     "0,10",
     "1,00",
     "100%"
    ],
    [
     "Total",
     100,
     "—",
     "1,00",
     "—",
     "100%"
    ]
   ],
   "N": 100
  },
  "ask": "¿Cuántos registros muestran entre 4 y 6 correos (inclusive)?",
  "alts": [
   "$55$",
   "$80$",
   "$60$",
   "$35$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Tabla con } n=100.\\ F_i\\text{ acumula desde el menor valor.}",
  "pautaSteps": [
   "\\text{\"entre } 4\\text{ y }6\\text{\" (inclusive)} = F(6) - F(3) = 90 - 10 = 80"
  ],
  "conc": "<b>80</b> de los 100 registros muestran entre 4 y 6 correos (inclusive)."
 },
 {
  "tipo": "Lectura con frecuencias acumuladas",
  "ctx": "Oficina · Correos",
  "enun": "Se registró el número de correos por hora en $n=100$ registros. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "3",
     10,
     10,
     "0,10",
     "0,10",
     "10%"
    ],
    [
     "4",
     25,
     35,
     "0,25",
     "0,35",
     "35%"
    ],
    [
     "5",
     35,
     70,
     "0,35",
     "0,70",
     "70%"
    ],
    [
     "6",
     20,
     90,
     "0,20",
     "0,90",
     "90%"
    ],
    [
     "7",
     10,
     100,
     "0,10",
     "1,00",
     "100%"
    ],
    [
     "Total",
     100,
     "—",
     "1,00",
     "—",
     "100%"
    ]
   ],
   "N": 100
  },
  "ask": "¿Qué porcentaje de registros muestra menos de 5 correos?",
  "alts": [
   "$70\\%$",
   "$65\\%$",
   "$10\\%$",
   "$35\\%$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Tabla con } n=100.\\ F_i\\text{ acumula desde el menor valor.}",
  "pautaSteps": [
   "\\text{\"menos de } 5\\text{\"} = \\dfrac{F(4)}{n}\\times 100 = \\dfrac{35}{100}\\times 100 = 35\\%"
  ],
  "conc": "El <b>35%</b> de los registros muestra menos de 5 correos (35 de 100)."
 },
 {
  "tipo": "Lectura con frecuencias acumuladas",
  "ctx": "Retail · Supermercado",
  "enun": "Se registró el número de productos por boleta en $n=90$ boletas. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "1",
     9,
     9,
     "0,10",
     "0,10",
     "10%"
    ],
    [
     "2",
     18,
     27,
     "0,20",
     "0,30",
     "30%"
    ],
    [
     "3",
     27,
     54,
     "0,30",
     "0,60",
     "60%"
    ],
    [
     "4",
     18,
     72,
     "0,20",
     "0,80",
     "80%"
    ],
    [
     "5",
     9,
     81,
     "0,10",
     "0,90",
     "90%"
    ],
    [
     "6",
     9,
     90,
     "0,10",
     "1,00",
     "100%"
    ],
    [
     "Total",
     90,
     "—",
     "1,00",
     "—",
     "100%"
    ]
   ],
   "N": 90
  },
  "ask": "¿Cuántas boletas registran a lo más 2 productos?",
  "alts": [
   "$27$",
   "$9$",
   "$63$",
   "$18$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Tabla con } n=90.\\ F_i\\text{ acumula desde el menor valor.}",
  "pautaSteps": [
   "\\text{\"a lo más } 2\\text{\"} = F(2) = 27"
  ],
  "conc": "<b>27</b> de las 90 boletas registran a lo más 2 productos."
 },
 {
  "tipo": "Lectura con frecuencias acumuladas",
  "ctx": "Retail · Supermercado",
  "enun": "Se registró el número de productos por boleta en $n=90$ boletas. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "1",
     9,
     9,
     "0,10",
     "0,10",
     "10%"
    ],
    [
     "2",
     18,
     27,
     "0,20",
     "0,30",
     "30%"
    ],
    [
     "3",
     27,
     54,
     "0,30",
     "0,60",
     "60%"
    ],
    [
     "4",
     18,
     72,
     "0,20",
     "0,80",
     "80%"
    ],
    [
     "5",
     9,
     81,
     "0,10",
     "0,90",
     "90%"
    ],
    [
     "6",
     9,
     90,
     "0,10",
     "1,00",
     "100%"
    ],
    [
     "Total",
     90,
     "—",
     "1,00",
     "—",
     "100%"
    ]
   ],
   "N": 90
  },
  "ask": "¿Cuántas boletas registran más de 4 productos?",
  "alts": [
   "$36$",
   "$72$",
   "$9$",
   "$18$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Tabla con } n=90.\\ F_i\\text{ acumula desde el menor valor.}",
  "pautaSteps": [
   "\\text{\"más de } 4\\text{\"} = n - F(4) = 90 - 72 = 18"
  ],
  "conc": "<b>18</b> de las 90 boletas registran más de 4 productos."
 },
 {
  "tipo": "Lectura con frecuencias acumuladas",
  "ctx": "Retail · Supermercado",
  "enun": "Se registró el número de productos por boleta en $n=90$ boletas. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "1",
     9,
     9,
     "0,10",
     "0,10",
     "10%"
    ],
    [
     "2",
     18,
     27,
     "0,20",
     "0,30",
     "30%"
    ],
    [
     "3",
     27,
     54,
     "0,30",
     "0,60",
     "60%"
    ],
    [
     "4",
     18,
     72,
     "0,20",
     "0,80",
     "80%"
    ],
    [
     "5",
     9,
     81,
     "0,10",
     "0,90",
     "90%"
    ],
    [
     "6",
     9,
     90,
     "0,10",
     "1,00",
     "100%"
    ],
    [
     "Total",
     90,
     "—",
     "1,00",
     "—",
     "100%"
    ]
   ],
   "N": 90
  },
  "ask": "¿Cuántas boletas registran entre 2 y 4 productos (inclusive)?",
  "alts": [
   "$45$",
   "$27$",
   "$63$",
   "$72$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Tabla con } n=90.\\ F_i\\text{ acumula desde el menor valor.}",
  "pautaSteps": [
   "\\text{\"entre } 2\\text{ y }4\\text{\" (inclusive)} = F(4) - F(1) = 72 - 9 = 63"
  ],
  "conc": "<b>63</b> de las 90 boletas registran entre 2 y 4 productos (inclusive)."
 },
 {
  "tipo": "Lectura con frecuencias acumuladas",
  "ctx": "Retail · Supermercado",
  "enun": "Se registró el número de productos por boleta en $n=90$ boletas. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "1",
     9,
     9,
     "0,10",
     "0,10",
     "10%"
    ],
    [
     "2",
     18,
     27,
     "0,20",
     "0,30",
     "30%"
    ],
    [
     "3",
     27,
     54,
     "0,30",
     "0,60",
     "60%"
    ],
    [
     "4",
     18,
     72,
     "0,20",
     "0,80",
     "80%"
    ],
    [
     "5",
     9,
     81,
     "0,10",
     "0,90",
     "90%"
    ],
    [
     "6",
     9,
     90,
     "0,10",
     "1,00",
     "100%"
    ],
    [
     "Total",
     90,
     "—",
     "1,00",
     "—",
     "100%"
    ]
   ],
   "N": 90
  },
  "ask": "¿Qué porcentaje de boletas registra al menos 5 productos?",
  "alts": [
   "$20\\%$",
   "$10\\%$",
   "$80\\%$",
   "$40\\%$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Tabla con } n=90.\\ F_i\\text{ acumula desde el menor valor.}",
  "pautaSteps": [
   "\\text{\"al menos } 5\\text{\"} = \\dfrac{n - F(4)}{n}\\times 100 = \\dfrac{18}{90}\\times 100 = 20\\%"
  ],
  "conc": "El <b>20%</b> de las boletas registra al menos 5 productos (18 de 90)."
 },
 {
  "tipo": "Lectura con frecuencias acumuladas",
  "ctx": "E-commerce · Reclamos",
  "enun": "Se registró el número de reclamos por semana en $n=50$ semanas. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "0",
     14,
     14,
     "0,28",
     "0,28",
     "28%"
    ],
    [
     "1",
     18,
     32,
     "0,36",
     "0,64",
     "64%"
    ],
    [
     "2",
     10,
     42,
     "0,20",
     "0,84",
     "84%"
    ],
    [
     "3",
     6,
     48,
     "0,12",
     "0,96",
     "96%"
    ],
    [
     "4",
     2,
     50,
     "0,04",
     "1,00",
     "100%"
    ],
    [
     "Total",
     50,
     "—",
     "1,00",
     "—",
     "100%"
    ]
   ],
   "N": 50
  },
  "ask": "¿Cuántas semanas registran a lo más 1 reclamo?",
  "alts": [
   "$32$",
   "$14$",
   "$18$",
   "$42$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Tabla con } n=50.\\ F_i\\text{ acumula desde el menor valor.}",
  "pautaSteps": [
   "\\text{\"a lo más } 1\\text{\"} = F(1) = 32"
  ],
  "conc": "<b>32</b> de las 50 semanas registran a lo más 1 reclamo."
 },
 {
  "tipo": "Lectura con frecuencias acumuladas",
  "ctx": "E-commerce · Reclamos",
  "enun": "Se registró el número de reclamos por semana en $n=50$ semanas. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "0",
     14,
     14,
     "0,28",
     "0,28",
     "28%"
    ],
    [
     "1",
     18,
     32,
     "0,36",
     "0,64",
     "64%"
    ],
    [
     "2",
     10,
     42,
     "0,20",
     "0,84",
     "84%"
    ],
    [
     "3",
     6,
     48,
     "0,12",
     "0,96",
     "96%"
    ],
    [
     "4",
     2,
     50,
     "0,04",
     "1,00",
     "100%"
    ],
    [
     "Total",
     50,
     "—",
     "1,00",
     "—",
     "100%"
    ]
   ],
   "N": 50
  },
  "ask": "¿Cuántas semanas registran más de 2 reclamos?",
  "alts": [
   "$18$",
   "$8$",
   "$42$",
   "$2$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Tabla con } n=50.\\ F_i\\text{ acumula desde el menor valor.}",
  "pautaSteps": [
   "\\text{\"más de } 2\\text{\"} = n - F(2) = 50 - 42 = 8"
  ],
  "conc": "<b>8</b> de las 50 semanas registran más de 2 reclamos."
 },
 {
  "tipo": "Lectura con frecuencias acumuladas",
  "ctx": "E-commerce · Reclamos",
  "enun": "Se registró el número de reclamos por semana en $n=50$ semanas. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "0",
     14,
     14,
     "0,28",
     "0,28",
     "28%"
    ],
    [
     "1",
     18,
     32,
     "0,36",
     "0,64",
     "64%"
    ],
    [
     "2",
     10,
     42,
     "0,20",
     "0,84",
     "84%"
    ],
    [
     "3",
     6,
     48,
     "0,12",
     "0,96",
     "96%"
    ],
    [
     "4",
     2,
     50,
     "0,04",
     "1,00",
     "100%"
    ],
    [
     "Total",
     50,
     "—",
     "1,00",
     "—",
     "100%"
    ]
   ],
   "N": 50
  },
  "ask": "¿Cuántas semanas registran entre 1 y 3 reclamos (inclusive)?",
  "alts": [
   "$16$",
   "$28$",
   "$34$",
   "$10$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Tabla con } n=50.\\ F_i\\text{ acumula desde el menor valor.}",
  "pautaSteps": [
   "\\text{\"entre } 1\\text{ y }3\\text{\" (inclusive)} = F(3) - F(0) = 48 - 14 = 34"
  ],
  "conc": "<b>34</b> de las 50 semanas registran entre 1 y 3 reclamos (inclusive)."
 },
 {
  "tipo": "Lectura con frecuencias acumuladas",
  "ctx": "E-commerce · Reclamos",
  "enun": "Se registró el número de reclamos por semana en $n=50$ semanas. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "0",
     14,
     14,
     "0,28",
     "0,28",
     "28%"
    ],
    [
     "1",
     18,
     32,
     "0,36",
     "0,64",
     "64%"
    ],
    [
     "2",
     10,
     42,
     "0,20",
     "0,84",
     "84%"
    ],
    [
     "3",
     6,
     48,
     "0,12",
     "0,96",
     "96%"
    ],
    [
     "4",
     2,
     50,
     "0,04",
     "1,00",
     "100%"
    ],
    [
     "Total",
     50,
     "—",
     "1,00",
     "—",
     "100%"
    ]
   ],
   "N": 50
  },
  "ask": "¿Qué porcentaje de semanas registra exactamente 0 reclamos?",
  "alts": [
   "$64\\%$",
   "$72\\%$",
   "$28\\%$",
   "$36\\%$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Tabla con } n=50.\\ F_i\\text{ acumula desde el menor valor.}",
  "pautaSteps": [
   "\\dfrac{f(x=0)}{n}\\times 100 = \\dfrac{14}{50}\\times 100 = 28\\%"
  ],
  "conc": "El <b>28%</b> de las semanas registra exactamente 0 reclamos (14 de 50)."
 },
 {
  "tipo": "Lectura con frecuencias acumuladas",
  "ctx": "Finanzas · Facturación",
  "enun": "Se registró el número de días de atraso en $n=80$ facturas. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "0",
     32,
     32,
     "0,40",
     "0,40",
     "40%"
    ],
    [
     "1",
     20,
     52,
     "0,25",
     "0,65",
     "65%"
    ],
    [
     "2",
     12,
     64,
     "0,15",
     "0,80",
     "80%"
    ],
    [
     "3",
     8,
     72,
     "0,10",
     "0,90",
     "90%"
    ],
    [
     "4",
     4,
     76,
     "0,05",
     "0,95",
     "95%"
    ],
    [
     "5",
     4,
     80,
     "0,05",
     "1,00",
     "100%"
    ],
    [
     "Total",
     80,
     "—",
     "1,00",
     "—",
     "100%"
    ]
   ],
   "N": 80
  },
  "ask": "¿Cuántas facturas registran exactamente 0 días de atraso?",
  "alts": [
   "$52$",
   "$48$",
   "$20$",
   "$32$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Tabla con } n=80.\\ F_i\\text{ acumula desde el menor valor.}",
  "pautaSteps": [
   "f(x=0) = 32"
  ],
  "conc": "<b>32</b> de las 80 facturas registran exactamente 0 días de atraso."
 },
 {
  "tipo": "Lectura con frecuencias acumuladas",
  "ctx": "Finanzas · Facturación",
  "enun": "Se registró el número de días de atraso en $n=80$ facturas. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "0",
     32,
     32,
     "0,40",
     "0,40",
     "40%"
    ],
    [
     "1",
     20,
     52,
     "0,25",
     "0,65",
     "65%"
    ],
    [
     "2",
     12,
     64,
     "0,15",
     "0,80",
     "80%"
    ],
    [
     "3",
     8,
     72,
     "0,10",
     "0,90",
     "90%"
    ],
    [
     "4",
     4,
     76,
     "0,05",
     "0,95",
     "95%"
    ],
    [
     "5",
     4,
     80,
     "0,05",
     "1,00",
     "100%"
    ],
    [
     "Total",
     80,
     "—",
     "1,00",
     "—",
     "100%"
    ]
   ],
   "N": 80
  },
  "ask": "¿Cuántas facturas registran más de 2 días de atraso?",
  "alts": [
   "$28$",
   "$16$",
   "$64$",
   "$8$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Tabla con } n=80.\\ F_i\\text{ acumula desde el menor valor.}",
  "pautaSteps": [
   "\\text{\"más de } 2\\text{\"} = n - F(2) = 80 - 64 = 16"
  ],
  "conc": "<b>16</b> de las 80 facturas registran más de 2 días de atraso."
 },
 {
  "tipo": "Lectura con frecuencias acumuladas",
  "ctx": "Finanzas · Facturación",
  "enun": "Se registró el número de días de atraso en $n=80$ facturas. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "0",
     32,
     32,
     "0,40",
     "0,40",
     "40%"
    ],
    [
     "1",
     20,
     52,
     "0,25",
     "0,65",
     "65%"
    ],
    [
     "2",
     12,
     64,
     "0,15",
     "0,80",
     "80%"
    ],
    [
     "3",
     8,
     72,
     "0,10",
     "0,90",
     "90%"
    ],
    [
     "4",
     4,
     76,
     "0,05",
     "0,95",
     "95%"
    ],
    [
     "5",
     4,
     80,
     "0,05",
     "1,00",
     "100%"
    ],
    [
     "Total",
     80,
     "—",
     "1,00",
     "—",
     "100%"
    ]
   ],
   "N": 80
  },
  "ask": "¿Cuántas facturas registran entre 1 y 3 días de atraso (inclusive)?",
  "alts": [
   "$20$",
   "$32$",
   "$12$",
   "$40$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Tabla con } n=80.\\ F_i\\text{ acumula desde el menor valor.}",
  "pautaSteps": [
   "\\text{\"entre } 1\\text{ y }3\\text{\" (inclusive)} = F(3) - F(0) = 72 - 32 = 40"
  ],
  "conc": "<b>40</b> de las 80 facturas registran entre 1 y 3 días de atraso (inclusive)."
 },
 {
  "tipo": "Lectura con frecuencias acumuladas",
  "ctx": "Finanzas · Facturación",
  "enun": "Se registró el número de días de atraso en $n=80$ facturas. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "0",
     32,
     32,
     "0,40",
     "0,40",
     "40%"
    ],
    [
     "1",
     20,
     52,
     "0,25",
     "0,65",
     "65%"
    ],
    [
     "2",
     12,
     64,
     "0,15",
     "0,80",
     "80%"
    ],
    [
     "3",
     8,
     72,
     "0,10",
     "0,90",
     "90%"
    ],
    [
     "4",
     4,
     76,
     "0,05",
     "0,95",
     "95%"
    ],
    [
     "5",
     4,
     80,
     "0,05",
     "1,00",
     "100%"
    ],
    [
     "Total",
     80,
     "—",
     "1,00",
     "—",
     "100%"
    ]
   ],
   "N": 80
  },
  "ask": "¿Qué porcentaje de facturas registra al menos 4 días de atraso?",
  "alts": [
   "$5\\%$",
   "$90\\%$",
   "$10\\%$",
   "$20\\%$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Tabla con } n=80.\\ F_i\\text{ acumula desde el menor valor.}",
  "pautaSteps": [
   "\\text{\"al menos } 4\\text{\"} = \\dfrac{n - F(3)}{n}\\times 100 = \\dfrac{8}{80}\\times 100 = 10\\%"
  ],
  "conc": "El <b>10%</b> de las facturas registra al menos 4 días de atraso (8 de 80)."
 },
 {
  "tipo": "Lectura con frecuencias acumuladas",
  "ctx": "Laboral · Horas extra",
  "enun": "Se registró el número de horas extra en la semana en $n=70$ empleados. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "0",
     14,
     14,
     "0,20",
     "0,20",
     "20%"
    ],
    [
     "1",
     21,
     35,
     "0,30",
     "0,50",
     "50%"
    ],
    [
     "2",
     21,
     56,
     "0,30",
     "0,80",
     "80%"
    ],
    [
     "3",
     7,
     63,
     "0,10",
     "0,90",
     "90%"
    ],
    [
     "4",
     7,
     70,
     "0,10",
     "1,00",
     "100%"
    ],
    [
     "Total",
     70,
     "—",
     "1,00",
     "—",
     "100%"
    ]
   ],
   "N": 70
  },
  "ask": "¿Cuántos empleados registran a lo más 1 hora extra?",
  "alts": [
   "$14$",
   "$21$",
   "$35$",
   "$56$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Tabla con } n=70.\\ F_i\\text{ acumula desde el menor valor.}",
  "pautaSteps": [
   "\\text{\"a lo más } 1\\text{\"} = F(1) = 35"
  ],
  "conc": "<b>35</b> de los 70 empleados registran a lo más 1 hora extra."
 },
 {
  "tipo": "Lectura con frecuencias acumuladas",
  "ctx": "Laboral · Horas extra",
  "enun": "Se registró el número de horas extra en la semana en $n=70$ empleados. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "0",
     14,
     14,
     "0,20",
     "0,20",
     "20%"
    ],
    [
     "1",
     21,
     35,
     "0,30",
     "0,50",
     "50%"
    ],
    [
     "2",
     21,
     56,
     "0,30",
     "0,80",
     "80%"
    ],
    [
     "3",
     7,
     63,
     "0,10",
     "0,90",
     "90%"
    ],
    [
     "4",
     7,
     70,
     "0,10",
     "1,00",
     "100%"
    ],
    [
     "Total",
     70,
     "—",
     "1,00",
     "—",
     "100%"
    ]
   ],
   "N": 70
  },
  "ask": "¿Cuántos empleados registran más de 2 horas extra?",
  "alts": [
   "$35$",
   "$14$",
   "$56$",
   "$7$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Tabla con } n=70.\\ F_i\\text{ acumula desde el menor valor.}",
  "pautaSteps": [
   "\\text{\"más de } 2\\text{\"} = n - F(2) = 70 - 56 = 14"
  ],
  "conc": "<b>14</b> de los 70 empleados registran más de 2 horas extra."
 },
 {
  "tipo": "Lectura con frecuencias acumuladas",
  "ctx": "Laboral · Horas extra",
  "enun": "Se registró el número de horas extra en la semana en $n=70$ empleados. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "0",
     14,
     14,
     "0,20",
     "0,20",
     "20%"
    ],
    [
     "1",
     21,
     35,
     "0,30",
     "0,50",
     "50%"
    ],
    [
     "2",
     21,
     56,
     "0,30",
     "0,80",
     "80%"
    ],
    [
     "3",
     7,
     63,
     "0,10",
     "0,90",
     "90%"
    ],
    [
     "4",
     7,
     70,
     "0,10",
     "1,00",
     "100%"
    ],
    [
     "Total",
     70,
     "—",
     "1,00",
     "—",
     "100%"
    ]
   ],
   "N": 70
  },
  "ask": "¿Cuántos empleados registran entre 1 y 3 horas extra (inclusive)?",
  "alts": [
   "$28$",
   "$49$",
   "$42$",
   "$21$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Tabla con } n=70.\\ F_i\\text{ acumula desde el menor valor.}",
  "pautaSteps": [
   "\\text{\"entre } 1\\text{ y }3\\text{\" (inclusive)} = F(3) - F(0) = 63 - 14 = 49"
  ],
  "conc": "<b>49</b> de los 70 empleados registran entre 1 y 3 horas extra (inclusive)."
 },
 {
  "tipo": "Lectura con frecuencias acumuladas",
  "ctx": "Laboral · Horas extra",
  "enun": "Se registró el número de horas extra en la semana en $n=70$ empleados. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "0",
     14,
     14,
     "0,20",
     "0,20",
     "20%"
    ],
    [
     "1",
     21,
     35,
     "0,30",
     "0,50",
     "50%"
    ],
    [
     "2",
     21,
     56,
     "0,30",
     "0,80",
     "80%"
    ],
    [
     "3",
     7,
     63,
     "0,10",
     "0,90",
     "90%"
    ],
    [
     "4",
     7,
     70,
     "0,10",
     "1,00",
     "100%"
    ],
    [
     "Total",
     70,
     "—",
     "1,00",
     "—",
     "100%"
    ]
   ],
   "N": 70
  },
  "ask": "¿Qué porcentaje de empleados registra exactamente 0 horas extra?",
  "alts": [
   "$20\\%$",
   "$50\\%$",
   "$80\\%$",
   "$30\\%$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Tabla con } n=70.\\ F_i\\text{ acumula desde el menor valor.}",
  "pautaSteps": [
   "\\dfrac{f(x=0)}{n}\\times 100 = \\dfrac{14}{70}\\times 100 = 20\\%"
  ],
  "conc": "El <b>20%</b> de los empleados registra exactamente 0 horas extra (14 de 70)."
 },
 {
  "tipo": "Lectura con frecuencias acumuladas",
  "ctx": "Hogar · Conectividad",
  "enun": "Se registró el número de dispositivos conectados a wifi en $n=50$ hogares. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "2",
     5,
     5,
     "0,10",
     "0,10",
     "10%"
    ],
    [
     "3",
     10,
     15,
     "0,20",
     "0,30",
     "30%"
    ],
    [
     "4",
     15,
     30,
     "0,30",
     "0,60",
     "60%"
    ],
    [
     "5",
     10,
     40,
     "0,20",
     "0,80",
     "80%"
    ],
    [
     "6",
     5,
     45,
     "0,10",
     "0,90",
     "90%"
    ],
    [
     "7",
     5,
     50,
     "0,10",
     "1,00",
     "100%"
    ],
    [
     "Total",
     50,
     "—",
     "1,00",
     "—",
     "100%"
    ]
   ],
   "N": 50
  },
  "ask": "¿Cuántos hogares registran a lo más 3 dispositivos?",
  "alts": [
   "$15$",
   "$5$",
   "$35$",
   "$10$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Tabla con } n=50.\\ F_i\\text{ acumula desde el menor valor.}",
  "pautaSteps": [
   "\\text{\"a lo más } 3\\text{\"} = F(3) = 15"
  ],
  "conc": "<b>15</b> de los 50 hogares registran a lo más 3 dispositivos."
 },
 {
  "tipo": "Lectura con frecuencias acumuladas",
  "ctx": "Hogar · Conectividad",
  "enun": "Se registró el número de dispositivos conectados a wifi en $n=50$ hogares. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "2",
     5,
     5,
     "0,10",
     "0,10",
     "10%"
    ],
    [
     "3",
     10,
     15,
     "0,20",
     "0,30",
     "30%"
    ],
    [
     "4",
     15,
     30,
     "0,30",
     "0,60",
     "60%"
    ],
    [
     "5",
     10,
     40,
     "0,20",
     "0,80",
     "80%"
    ],
    [
     "6",
     5,
     45,
     "0,10",
     "0,90",
     "90%"
    ],
    [
     "7",
     5,
     50,
     "0,10",
     "1,00",
     "100%"
    ],
    [
     "Total",
     50,
     "—",
     "1,00",
     "—",
     "100%"
    ]
   ],
   "N": 50
  },
  "ask": "¿Cuántos hogares registran más de 5 dispositivos?",
  "alts": [
   "$20$",
   "$40$",
   "$5$",
   "$10$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Tabla con } n=50.\\ F_i\\text{ acumula desde el menor valor.}",
  "pautaSteps": [
   "\\text{\"más de } 5\\text{\"} = n - F(5) = 50 - 40 = 10"
  ],
  "conc": "<b>10</b> de los 50 hogares registran más de 5 dispositivos."
 },
 {
  "tipo": "Lectura con frecuencias acumuladas",
  "ctx": "Hogar · Conectividad",
  "enun": "Se registró el número de dispositivos conectados a wifi en $n=50$ hogares. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "2",
     5,
     5,
     "0,10",
     "0,10",
     "10%"
    ],
    [
     "3",
     10,
     15,
     "0,20",
     "0,30",
     "30%"
    ],
    [
     "4",
     15,
     30,
     "0,30",
     "0,60",
     "60%"
    ],
    [
     "5",
     10,
     40,
     "0,20",
     "0,80",
     "80%"
    ],
    [
     "6",
     5,
     45,
     "0,10",
     "0,90",
     "90%"
    ],
    [
     "7",
     5,
     50,
     "0,10",
     "1,00",
     "100%"
    ],
    [
     "Total",
     50,
     "—",
     "1,00",
     "—",
     "100%"
    ]
   ],
   "N": 50
  },
  "ask": "¿Cuántos hogares registran entre 3 y 5 dispositivos (inclusive)?",
  "alts": [
   "$25$",
   "$35$",
   "$15$",
   "$40$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Tabla con } n=50.\\ F_i\\text{ acumula desde el menor valor.}",
  "pautaSteps": [
   "\\text{\"entre } 3\\text{ y }5\\text{\" (inclusive)} = F(5) - F(2) = 40 - 5 = 35"
  ],
  "conc": "<b>35</b> de los 50 hogares registran entre 3 y 5 dispositivos (inclusive)."
 },
 {
  "tipo": "Lectura con frecuencias acumuladas",
  "ctx": "Hogar · Conectividad",
  "enun": "Se registró el número de dispositivos conectados a wifi en $n=50$ hogares. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "2",
     5,
     5,
     "0,10",
     "0,10",
     "10%"
    ],
    [
     "3",
     10,
     15,
     "0,20",
     "0,30",
     "30%"
    ],
    [
     "4",
     15,
     30,
     "0,30",
     "0,60",
     "60%"
    ],
    [
     "5",
     10,
     40,
     "0,20",
     "0,80",
     "80%"
    ],
    [
     "6",
     5,
     45,
     "0,10",
     "0,90",
     "90%"
    ],
    [
     "7",
     5,
     50,
     "0,10",
     "1,00",
     "100%"
    ],
    [
     "Total",
     50,
     "—",
     "1,00",
     "—",
     "100%"
    ]
   ],
   "N": 50
  },
  "ask": "¿Qué porcentaje de hogares registra al menos 6 dispositivos?",
  "alts": [
   "$10\\%$",
   "$80\\%$",
   "$40\\%$",
   "$20\\%$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Tabla con } n=50.\\ F_i\\text{ acumula desde el menor valor.}",
  "pautaSteps": [
   "\\text{\"al menos } 6\\text{\"} = \\dfrac{n - F(5)}{n}\\times 100 = \\dfrac{10}{50}\\times 100 = 20\\%"
  ],
  "conc": "El <b>20%</b> de los hogares registra al menos 6 dispositivos (10 de 50)."
 },
 {
  "tipo": "Lectura con frecuencias acumuladas",
  "ctx": "Educación · Matrícula",
  "enun": "Se registró el número de hijos matriculados en $n=40$ familias. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "0",
     8,
     8,
     "0,20",
     "0,20",
     "20%"
    ],
    [
     "1",
     16,
     24,
     "0,40",
     "0,60",
     "60%"
    ],
    [
     "2",
     12,
     36,
     "0,30",
     "0,90",
     "90%"
    ],
    [
     "3",
     4,
     40,
     "0,10",
     "1,00",
     "100%"
    ],
    [
     "Total",
     40,
     "—",
     "1,00",
     "—",
     "100%"
    ]
   ],
   "N": 40
  },
  "ask": "¿Cuántas familias registran a lo más 1 hijo matriculado?",
  "alts": [
   "$24$",
   "$8$",
   "$16$",
   "$36$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Tabla con } n=40.\\ F_i\\text{ acumula desde el menor valor.}",
  "pautaSteps": [
   "\\text{\"a lo más } 1\\text{\"} = F(1) = 24"
  ],
  "conc": "<b>24</b> de las 40 familias registran a lo más 1 hijo matriculado."
 },
 {
  "tipo": "Lectura con frecuencias acumuladas",
  "ctx": "Educación · Matrícula",
  "enun": "Se registró el número de hijos matriculados en $n=40$ familias. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "0",
     8,
     8,
     "0,20",
     "0,20",
     "20%"
    ],
    [
     "1",
     16,
     24,
     "0,40",
     "0,60",
     "60%"
    ],
    [
     "2",
     12,
     36,
     "0,30",
     "0,90",
     "90%"
    ],
    [
     "3",
     4,
     40,
     "0,10",
     "1,00",
     "100%"
    ],
    [
     "Total",
     40,
     "—",
     "1,00",
     "—",
     "100%"
    ]
   ],
   "N": 40
  },
  "ask": "¿Cuántas familias registran más de 1 hijo matriculado?",
  "alts": [
   "$32$",
   "$16$",
   "$24$",
   "$4$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Tabla con } n=40.\\ F_i\\text{ acumula desde el menor valor.}",
  "pautaSteps": [
   "\\text{\"más de } 1\\text{\"} = n - F(1) = 40 - 24 = 16"
  ],
  "conc": "<b>16</b> de las 40 familias registran más de 1 hijo matriculado."
 },
 {
  "tipo": "Lectura con frecuencias acumuladas",
  "ctx": "Educación · Matrícula",
  "enun": "Se registró el número de hijos matriculados en $n=40$ familias. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "0",
     8,
     8,
     "0,20",
     "0,20",
     "20%"
    ],
    [
     "1",
     16,
     24,
     "0,40",
     "0,60",
     "60%"
    ],
    [
     "2",
     12,
     36,
     "0,30",
     "0,90",
     "90%"
    ],
    [
     "3",
     4,
     40,
     "0,10",
     "1,00",
     "100%"
    ],
    [
     "Total",
     40,
     "—",
     "1,00",
     "—",
     "100%"
    ]
   ],
   "N": 40
  },
  "ask": "¿Cuántas familias registran entre 1 y 2 hijos matriculados (inclusive)?",
  "alts": [
   "$12$",
   "$16$",
   "$28$",
   "$36$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Tabla con } n=40.\\ F_i\\text{ acumula desde el menor valor.}",
  "pautaSteps": [
   "\\text{\"entre } 1\\text{ y }2\\text{\" (inclusive)} = F(2) - F(0) = 36 - 8 = 28"
  ],
  "conc": "<b>28</b> de las 40 familias registran entre 1 y 2 hijos matriculados (inclusive)."
 },
 {
  "tipo": "Lectura con frecuencias acumuladas",
  "ctx": "Educación · Matrícula",
  "enun": "Se registró el número de hijos matriculados en $n=40$ familias. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$",
    "$h_i$",
    "$H_i$",
    "$H_i\\%$"
   ],
   "rows": [
    [
     "0",
     8,
     8,
     "0,20",
     "0,20",
     "20%"
    ],
    [
     "1",
     16,
     24,
     "0,40",
     "0,60",
     "60%"
    ],
    [
     "2",
     12,
     36,
     "0,30",
     "0,90",
     "90%"
    ],
    [
     "3",
     4,
     40,
     "0,10",
     "1,00",
     "100%"
    ],
    [
     "Total",
     40,
     "—",
     "1,00",
     "—",
     "100%"
    ]
   ],
   "N": 40
  },
  "ask": "¿Qué porcentaje de familias registra al menos 2 hijos matriculados?",
  "alts": [
   "$40\\%$",
   "$10\\%$",
   "$60\\%$",
   "$30\\%$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Tabla con } n=40.\\ F_i\\text{ acumula desde el menor valor.}",
  "pautaSteps": [
   "\\text{\"al menos } 2\\text{\"} = \\dfrac{n - F(1)}{n}\\times 100 = \\dfrac{16}{40}\\times 100 = 40\\%"
  ],
  "conc": "El <b>40%</b> de las familias registra al menos 2 hijos matriculados (16 de 40)."
 },
 {
  "tipo": "Media muestral",
  "ctx": "Demografía · Familias",
  "enun": "Se registró el número de hijos en 15 familias. Datos: 2, 1, 3, 0, 2, 1, 2, 4, 1, 2, 3, 1, 0, 2, 2.",
  "ask": "Calcule la media muestral $\\bar{x}$ (aproximada a 2 decimales).",
  "alts": [
   "$5{,}20$",
   "$2{,}00$",
   "$1{,}86$",
   "$1{,}73$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Datos con } n=15.",
  "pautaSteps": [
   "\\bar{x}=\\dfrac{1}{n}\\sum_{i=1}^{n} x_i = \\dfrac{26}{15} = 1{,}73"
  ],
  "conc": "La media muestral es $\\bar{x} = 1{,}73$."
 },
 {
  "tipo": "Mediana",
  "ctx": "Demografía · Familias",
  "enun": "Se registró el número de hijos en 15 familias. Datos: 2, 1, 3, 0, 2, 1, 2, 4, 1, 2, 3, 1, 0, 2, 2.",
  "ask": "Determine la mediana.",
  "alts": [
   "$4$",
   "$2$",
   "$8$",
   "$1{,}73$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Datos ordenados, } n=15.",
  "pautaSteps": [
   "n=15\\text{ impar} \\Rightarrow \\text{mediana} = \\text{dato en posición } 8",
   "\\text{Ordenando: } 0,\\, 0,\\, 1,\\, 1,\\, 1,\\, 1,\\, 2,\\, 2,\\, 2,\\, 2,\\, 2,\\, 2,\\, 3,\\, 3,\\, 4",
   "\\text{Mediana} = 2"
  ],
  "conc": "La mediana es <b>2</b>: al menos la mitad de los datos es menor o igual a 2 y al menos la mitad es mayor o igual."
 },
 {
  "tipo": "Moda",
  "ctx": "Demografía · Familias",
  "enun": "Se registró el número de hijos en 15 familias. Datos: 2, 1, 3, 0, 2, 1, 2, 4, 1, 2, 3, 1, 0, 2, 2.",
  "ask": "Determine la moda (si hay más de una, indíquelas todas).",
  "alts": [
   "$6$",
   "Bimodal: 1 y 2",
   "$4$",
   "$2$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Frecuencias por valor:}",
  "pautaSteps": [
   "f(0)=2,\\ f(1)=4,\\ f(2)=6,\\ f(3)=2,\\ f(4)=1",
   "\\text{El valor con mayor frecuencia es } 2\\ (f=6)"
  ],
  "conc": "La moda es <b>2</b>: es el valor con mayor frecuencia ($f=6$)."
 },
 {
  "tipo": "Media muestral",
  "ctx": "Hogar · Mascotas",
  "enun": "Se registró el número de mascotas en 13 hogares. Datos: 1, 0, 2, 1, 3, 0, 1, 2, 1, 0, 2, 1, 1.",
  "ask": "Calcule la media muestral $\\bar{x}$ (aproximada a 2 decimales).",
  "alts": [
   "$3{,}75$",
   "$1{,}50$",
   "$1{,}15$",
   "$1{,}00$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Datos con } n=13.",
  "pautaSteps": [
   "\\bar{x}=\\dfrac{1}{n}\\sum_{i=1}^{n} x_i = \\dfrac{15}{13} = 1{,}15"
  ],
  "conc": "La media muestral es $\\bar{x} = 1{,}15$."
 },
 {
  "tipo": "Mediana",
  "ctx": "Hogar · Mascotas",
  "enun": "Se registró el número de mascotas en 13 hogares. Datos: 1, 0, 2, 1, 3, 0, 1, 2, 1, 0, 2, 1, 1.",
  "ask": "Determine la mediana.",
  "alts": [
   "$7$",
   "$1{,}15$",
   "$1$",
   "$2$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Datos ordenados, } n=13.",
  "pautaSteps": [
   "n=13\\text{ impar} \\Rightarrow \\text{mediana} = \\text{dato en posición } 7",
   "\\text{Ordenando: } 0,\\, 0,\\, 0,\\, 1,\\, 1,\\, 1,\\, 1,\\, 1,\\, 1,\\, 2,\\, 2,\\, 2,\\, 3",
   "\\text{Mediana} = 1"
  ],
  "conc": "La mediana es <b>1</b>: al menos la mitad de los datos es menor o igual a 1 y al menos la mitad es mayor o igual."
 },
 {
  "tipo": "Moda",
  "ctx": "Hogar · Mascotas",
  "enun": "Se registró el número de mascotas en 13 hogares. Datos: 1, 0, 2, 1, 3, 0, 1, 2, 1, 0, 2, 1, 1.",
  "ask": "Determine la moda (si hay más de una, indíquelas todas).",
  "alts": [
   "$6$",
   "$1$",
   "Bimodal: 0 y 1",
   "$3$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Frecuencias por valor:}",
  "pautaSteps": [
   "f(0)=3,\\ f(1)=6,\\ f(2)=3,\\ f(3)=1",
   "\\text{El valor con mayor frecuencia es } 1\\ (f=6)"
  ],
  "conc": "La moda es <b>1</b>: es el valor con mayor frecuencia ($f=6$)."
 },
 {
  "tipo": "Media muestral",
  "ctx": "Hogar · Vehículos",
  "enun": "Se registró el número de autos en 17 hogares. Datos: 1, 2, 1, 0, 2, 1, 3, 1, 2, 0, 1, 1, 2, 1, 0, 2, 1.",
  "ask": "Calcule la media muestral $\\bar{x}$ (aproximada a 2 decimales).",
  "alts": [
   "$5{,}25$",
   "$1{,}24$",
   "$1{,}50$",
   "$1{,}00$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Datos con } n=17.",
  "pautaSteps": [
   "\\bar{x}=\\dfrac{1}{n}\\sum_{i=1}^{n} x_i = \\dfrac{21}{17} = 1{,}24"
  ],
  "conc": "La media muestral es $\\bar{x} = 1{,}24$."
 },
 {
  "tipo": "Mediana",
  "ctx": "Hogar · Vehículos",
  "enun": "Se registró el número de autos en 17 hogares. Datos: 1, 2, 1, 0, 2, 1, 3, 1, 2, 0, 1, 1, 2, 1, 0, 2, 1.",
  "ask": "Determine la mediana.",
  "alts": [
   "$1$",
   "$2$",
   "$9$",
   "$1{,}24$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Datos ordenados, } n=17.",
  "pautaSteps": [
   "n=17\\text{ impar} \\Rightarrow \\text{mediana} = \\text{dato en posición } 9",
   "\\text{Ordenando: } 0,\\, 0,\\, 0,\\, 1,\\, 1,\\, 1,\\, 1,\\, 1,\\, 1,\\, 1,\\, 1,\\, 2,\\, 2,\\, 2,\\, 2,\\, 2,\\, 3",
   "\\text{Mediana} = 1"
  ],
  "conc": "La mediana es <b>1</b>: al menos la mitad de los datos es menor o igual a 1 y al menos la mitad es mayor o igual."
 },
 {
  "tipo": "Moda",
  "ctx": "Hogar · Vehículos",
  "enun": "Se registró el número de autos en 17 hogares. Datos: 1, 2, 1, 0, 2, 1, 3, 1, 2, 0, 1, 1, 2, 1, 0, 2, 1.",
  "ask": "Determine la moda (si hay más de una, indíquelas todas).",
  "alts": [
   "$8$",
   "Bimodal: 1 y 2",
   "$1$",
   "$3$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Frecuencias por valor:}",
  "pautaSteps": [
   "f(0)=3,\\ f(1)=8,\\ f(2)=5,\\ f(3)=1",
   "\\text{El valor con mayor frecuencia es } 1\\ (f=8)"
  ],
  "conc": "La moda es <b>1</b>: es el valor con mayor frecuencia ($f=8$)."
 },
 {
  "tipo": "Media muestral",
  "ctx": "Deporte · Torneo",
  "enun": "Se registró el número de goles en 15 partidos. Datos: 1, 0, 2, 3, 1, 0, 2, 1, 0, 1, 2, 1, 0, 3, 1.",
  "ask": "Calcule la media muestral $\\bar{x}$ (aproximada a 2 decimales).",
  "alts": [
   "$4{,}50$",
   "$1{,}50$",
   "$1{,}00$",
   "$1{,}20$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Datos con } n=15.",
  "pautaSteps": [
   "\\bar{x}=\\dfrac{1}{n}\\sum_{i=1}^{n} x_i = \\dfrac{18}{15} = 1{,}20"
  ],
  "conc": "La media muestral es $\\bar{x} = 1{,}20$."
 },
 {
  "tipo": "Mediana",
  "ctx": "Deporte · Torneo",
  "enun": "Se registró el número de goles en 15 partidos. Datos: 1, 0, 2, 3, 1, 0, 2, 1, 0, 1, 2, 1, 0, 3, 1.",
  "ask": "Determine la mediana.",
  "alts": [
   "$8$",
   "$1$",
   "$1{,}2$",
   "$2$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Datos ordenados, } n=15.",
  "pautaSteps": [
   "n=15\\text{ impar} \\Rightarrow \\text{mediana} = \\text{dato en posición } 8",
   "\\text{Ordenando: } 0,\\, 0,\\, 0,\\, 0,\\, 1,\\, 1,\\, 1,\\, 1,\\, 1,\\, 1,\\, 2,\\, 2,\\, 2,\\, 3,\\, 3",
   "\\text{Mediana} = 1"
  ],
  "conc": "La mediana es <b>1</b>: al menos la mitad de los datos es menor o igual a 1 y al menos la mitad es mayor o igual."
 },
 {
  "tipo": "Moda",
  "ctx": "Deporte · Torneo",
  "enun": "Se registró el número de goles en 15 partidos. Datos: 1, 0, 2, 3, 1, 0, 2, 1, 0, 1, 2, 1, 0, 3, 1.",
  "ask": "Determine la moda (si hay más de una, indíquelas todas).",
  "alts": [
   "$6$",
   "Bimodal: 0 y 1",
   "$3$",
   "$1$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Frecuencias por valor:}",
  "pautaSteps": [
   "f(0)=4,\\ f(1)=6,\\ f(2)=3,\\ f(3)=2",
   "\\text{El valor con mayor frecuencia es } 1\\ (f=6)"
  ],
  "conc": "La moda es <b>1</b>: es el valor con mayor frecuencia ($f=6$)."
 },
 {
  "tipo": "Media muestral",
  "ctx": "Edición · Informes",
  "enun": "Se registró el número de errores por página en 13 informes. Datos: 0, 1, 2, 1, 0, 3, 1, 2, 0, 1, 1, 4, 0.",
  "ask": "Calcule la media muestral $\\bar{x}$ (aproximada a 2 decimales).",
  "alts": [
   "$1{,}23$",
   "$3{,}20$",
   "$2{,}00$",
   "$1{,}00$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Datos con } n=13.",
  "pautaSteps": [
   "\\bar{x}=\\dfrac{1}{n}\\sum_{i=1}^{n} x_i = \\dfrac{16}{13} = 1{,}23"
  ],
  "conc": "La media muestral es $\\bar{x} = 1{,}23$."
 },
 {
  "tipo": "Mediana",
  "ctx": "Edición · Informes",
  "enun": "Se registró el número de errores por página en 13 informes. Datos: 0, 1, 2, 1, 0, 3, 1, 2, 0, 1, 1, 4, 0.",
  "ask": "Determine la mediana.",
  "alts": [
   "$7$",
   "$2$",
   "$1$",
   "$1{,}23$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Datos ordenados, } n=13.",
  "pautaSteps": [
   "n=13\\text{ impar} \\Rightarrow \\text{mediana} = \\text{dato en posición } 7",
   "\\text{Ordenando: } 0,\\, 0,\\, 0,\\, 0,\\, 1,\\, 1,\\, 1,\\, 1,\\, 1,\\, 2,\\, 2,\\, 3,\\, 4",
   "\\text{Mediana} = 1"
  ],
  "conc": "La mediana es <b>1</b>: al menos la mitad de los datos es menor o igual a 1 y al menos la mitad es mayor o igual."
 },
 {
  "tipo": "Moda",
  "ctx": "Edición · Informes",
  "enun": "Se registró el número de errores por página en 13 informes. Datos: 0, 1, 2, 1, 0, 3, 1, 2, 0, 1, 1, 4, 0.",
  "ask": "Determine la moda (si hay más de una, indíquelas todas).",
  "alts": [
   "$5$",
   "Bimodal: 0 y 1",
   "$1$",
   "$4$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Frecuencias por valor:}",
  "pautaSteps": [
   "f(0)=4,\\ f(1)=5,\\ f(2)=2,\\ f(3)=1,\\ f(4)=1",
   "\\text{El valor con mayor frecuencia es } 1\\ (f=5)"
  ],
  "conc": "La moda es <b>1</b>: es el valor con mayor frecuencia ($f=5$)."
 },
 {
  "tipo": "Media muestral",
  "ctx": "Call center · Turnos",
  "enun": "Se registró el número de llamadas por hora en 15 turnos. Datos: 5, 6, 7, 5, 8, 6, 5, 4, 6, 7, 5, 6, 5, 9, 6.",
  "ask": "Calcule la media muestral $\\bar{x}$ (aproximada a 2 decimales).",
  "alts": [
   "$6{,}00$",
   "$15{,}00$",
   "$6{,}50$",
   "$6{,}43$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Datos con } n=15.",
  "pautaSteps": [
   "\\bar{x}=\\dfrac{1}{n}\\sum_{i=1}^{n} x_i = \\dfrac{90}{15} = 6{,}00"
  ],
  "conc": "La media muestral es $\\bar{x} = 6{,}00$."
 },
 {
  "tipo": "Mediana",
  "ctx": "Call center · Turnos",
  "enun": "Se registró el número de llamadas por hora en 15 turnos. Datos: 5, 6, 7, 5, 8, 6, 5, 4, 6, 7, 5, 6, 5, 9, 6.",
  "ask": "Determine la mediana.",
  "alts": [
   "$4$",
   "$8$",
   "$7$",
   "$6$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Datos ordenados, } n=15.",
  "pautaSteps": [
   "n=15\\text{ impar} \\Rightarrow \\text{mediana} = \\text{dato en posición } 8",
   "\\text{Ordenando: } 4,\\, 5,\\, 5,\\, 5,\\, 5,\\, 5,\\, 6,\\, 6,\\, 6,\\, 6,\\, 6,\\, 7,\\, 7,\\, 8,\\, 9",
   "\\text{Mediana} = 6"
  ],
  "conc": "La mediana es <b>6</b>: al menos la mitad de los datos es menor o igual a 6 y al menos la mitad es mayor o igual."
 },
 {
  "tipo": "Moda",
  "ctx": "Call center · Turnos",
  "enun": "Se registró el número de llamadas por hora en 15 turnos. Datos: 5, 6, 7, 5, 8, 6, 5, 4, 6, 7, 5, 6, 5, 9, 6.",
  "ask": "Determine la moda (si hay más de una, indíquelas todas).",
  "alts": [
   "5",
   "Bimodal: 5 y 6",
   "6",
   "9"
  ],
  "correct": 1,
  "pautaHead": "\\text{Frecuencias por valor:}",
  "pautaSteps": [
   "f(4)=1,\\ f(5)=5,\\ f(6)=5,\\ f(7)=2,\\ f(8)=1,\\ f(9)=1",
   "\\text{Hay empate en la frecuencia máxima } (f=5)\\text{: la distribución es bimodal, modas } 5\\text{ y }6"
  ],
  "conc": "La distribución es <b>bimodal</b>: modas 5 y 6."
 },
 {
  "tipo": "Media muestral",
  "ctx": "Educación · Lectura",
  "enun": "Se registró el número de libros leídos al mes en 13 estudiantes. Datos: 1, 2, 0, 3, 1, 2, 1, 0, 2, 4, 1, 2, 1.",
  "ask": "Calcule la media muestral $\\bar{x}$ (aproximada a 2 decimales).",
  "alts": [
   "$4{,}00$",
   "$2{,}00$",
   "$1{,}00$",
   "$1{,}54$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Datos con } n=13.",
  "pautaSteps": [
   "\\bar{x}=\\dfrac{1}{n}\\sum_{i=1}^{n} x_i = \\dfrac{20}{13} = 1{,}54"
  ],
  "conc": "La media muestral es $\\bar{x} = 1{,}54$."
 },
 {
  "tipo": "Mediana",
  "ctx": "Educación · Lectura",
  "enun": "Se registró el número de libros leídos al mes en 13 estudiantes. Datos: 1, 2, 0, 3, 1, 2, 1, 0, 2, 4, 1, 2, 1.",
  "ask": "Determine la mediana.",
  "alts": [
   "$7$",
   "$2$",
   "$1$",
   "$1{,}54$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Datos ordenados, } n=13.",
  "pautaSteps": [
   "n=13\\text{ impar} \\Rightarrow \\text{mediana} = \\text{dato en posición } 7",
   "\\text{Ordenando: } 0,\\, 0,\\, 1,\\, 1,\\, 1,\\, 1,\\, 1,\\, 2,\\, 2,\\, 2,\\, 2,\\, 3,\\, 4",
   "\\text{Mediana} = 1"
  ],
  "conc": "La mediana es <b>1</b>: al menos la mitad de los datos es menor o igual a 1 y al menos la mitad es mayor o igual."
 },
 {
  "tipo": "Moda",
  "ctx": "Educación · Lectura",
  "enun": "Se registró el número de libros leídos al mes en 13 estudiantes. Datos: 1, 2, 0, 3, 1, 2, 1, 0, 2, 4, 1, 2, 1.",
  "ask": "Determine la moda (si hay más de una, indíquelas todas).",
  "alts": [
   "$1$",
   "$5$",
   "Bimodal: 1 y 2",
   "$4$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Frecuencias por valor:}",
  "pautaSteps": [
   "f(0)=2,\\ f(1)=5,\\ f(2)=4,\\ f(3)=1,\\ f(4)=1",
   "\\text{El valor con mayor frecuencia es } 1\\ (f=5)"
  ],
  "conc": "La moda es <b>1</b>: es el valor con mayor frecuencia ($f=5$)."
 },
 {
  "tipo": "Media muestral",
  "ctx": "Tránsito · Intersecciones",
  "enun": "Se registró el número de accidentes por mes en 15 intersecciones. Datos: 1, 0, 2, 1, 3, 0, 1, 2, 1, 0, 1, 2, 4, 1, 0.",
  "ask": "Calcule la media muestral $\\bar{x}$ (aproximada a 2 decimales).",
  "alts": [
   "$3{,}80$",
   "$1{,}27$",
   "$2{,}00$",
   "$1{,}00$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Datos con } n=15.",
  "pautaSteps": [
   "\\bar{x}=\\dfrac{1}{n}\\sum_{i=1}^{n} x_i = \\dfrac{19}{15} = 1{,}27"
  ],
  "conc": "La media muestral es $\\bar{x} = 1{,}27$."
 },
 {
  "tipo": "Mediana",
  "ctx": "Tránsito · Intersecciones",
  "enun": "Se registró el número de accidentes por mes en 15 intersecciones. Datos: 1, 0, 2, 1, 3, 0, 1, 2, 1, 0, 1, 2, 4, 1, 0.",
  "ask": "Determine la mediana.",
  "alts": [
   "$2$",
   "$1$",
   "$8$",
   "$1{,}27$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Datos ordenados, } n=15.",
  "pautaSteps": [
   "n=15\\text{ impar} \\Rightarrow \\text{mediana} = \\text{dato en posición } 8",
   "\\text{Ordenando: } 0,\\, 0,\\, 0,\\, 0,\\, 1,\\, 1,\\, 1,\\, 1,\\, 1,\\, 1,\\, 2,\\, 2,\\, 2,\\, 3,\\, 4",
   "\\text{Mediana} = 1"
  ],
  "conc": "La mediana es <b>1</b>: al menos la mitad de los datos es menor o igual a 1 y al menos la mitad es mayor o igual."
 },
 {
  "tipo": "Moda",
  "ctx": "Tránsito · Intersecciones",
  "enun": "Se registró el número de accidentes por mes en 15 intersecciones. Datos: 1, 0, 2, 1, 3, 0, 1, 2, 1, 0, 1, 2, 4, 1, 0.",
  "ask": "Determine la moda (si hay más de una, indíquelas todas).",
  "alts": [
   "$6$",
   "Bimodal: 0 y 1",
   "$1$",
   "$4$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Frecuencias por valor:}",
  "pautaSteps": [
   "f(0)=4,\\ f(1)=6,\\ f(2)=3,\\ f(3)=1,\\ f(4)=1",
   "\\text{El valor con mayor frecuencia es } 1\\ (f=6)"
  ],
  "conc": "La moda es <b>1</b>: es el valor con mayor frecuencia ($f=6$)."
 },
 {
  "tipo": "Media muestral",
  "ctx": "Producción · Lotes",
  "enun": "Se registró el número de defectos por lote en 13 lotes. Datos: 2, 1, 0, 3, 2, 1, 0, 4, 2, 1, 1, 3, 2.",
  "ask": "Calcule la media muestral $\\bar{x}$ (aproximada a 2 decimales).",
  "alts": [
   "$4{,}40$",
   "$2{,}00$",
   "$1{,}69$",
   "$1{,}83$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Datos con } n=13.",
  "pautaSteps": [
   "\\bar{x}=\\dfrac{1}{n}\\sum_{i=1}^{n} x_i = \\dfrac{22}{13} = 1{,}69"
  ],
  "conc": "La media muestral es $\\bar{x} = 1{,}69$."
 },
 {
  "tipo": "Mediana",
  "ctx": "Producción · Lotes",
  "enun": "Se registró el número de defectos por lote en 13 lotes. Datos: 2, 1, 0, 3, 2, 1, 0, 4, 2, 1, 1, 3, 2.",
  "ask": "Determine la mediana.",
  "alts": [
   "$0$",
   "$7$",
   "$1{,}69$",
   "$2$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Datos ordenados, } n=13.",
  "pautaSteps": [
   "n=13\\text{ impar} \\Rightarrow \\text{mediana} = \\text{dato en posición } 7",
   "\\text{Ordenando: } 0,\\, 0,\\, 1,\\, 1,\\, 1,\\, 1,\\, 2,\\, 2,\\, 2,\\, 2,\\, 3,\\, 3,\\, 4",
   "\\text{Mediana} = 2"
  ],
  "conc": "La mediana es <b>2</b>: al menos la mitad de los datos es menor o igual a 2 y al menos la mitad es mayor o igual."
 },
 {
  "tipo": "Moda",
  "ctx": "Producción · Lotes",
  "enun": "Se registró el número de defectos por lote en 13 lotes. Datos: 2, 1, 0, 3, 2, 1, 0, 4, 2, 1, 1, 3, 2.",
  "ask": "Determine la moda (si hay más de una, indíquelas todas).",
  "alts": [
   "1",
   "Bimodal: 1 y 2",
   "2",
   "4"
  ],
  "correct": 1,
  "pautaHead": "\\text{Frecuencias por valor:}",
  "pautaSteps": [
   "f(0)=2,\\ f(1)=4,\\ f(2)=4,\\ f(3)=2,\\ f(4)=1",
   "\\text{Hay empate en la frecuencia máxima } (f=4)\\text{: la distribución es bimodal, modas } 1\\text{ y }2"
  ],
  "conc": "La distribución es <b>bimodal</b>: modas 1 y 2."
 },
 {
  "tipo": "Media muestral",
  "ctx": "Salud · Pacientes",
  "enun": "Se registró el número de visitas al médico al año en 15 pacientes. Datos: 3, 2, 1, 4, 3, 2, 0, 5, 3, 2, 1, 3, 4, 2, 3.",
  "ask": "Calcule la media muestral $\\bar{x}$ (aproximada a 2 decimales).",
  "alts": [
   "$6{,}33$",
   "$2{,}50$",
   "$3{,}00$",
   "$2{,}53$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Datos con } n=15.",
  "pautaSteps": [
   "\\bar{x}=\\dfrac{1}{n}\\sum_{i=1}^{n} x_i = \\dfrac{38}{15} = 2{,}53"
  ],
  "conc": "La media muestral es $\\bar{x} = 2{,}53$."
 },
 {
  "tipo": "Mediana",
  "ctx": "Salud · Pacientes",
  "enun": "Se registró el número de visitas al médico al año en 15 pacientes. Datos: 3, 2, 1, 4, 3, 2, 0, 5, 3, 2, 1, 3, 4, 2, 3.",
  "ask": "Determine la mediana.",
  "alts": [
   "$5$",
   "$8$",
   "$3$",
   "$2$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Datos ordenados, } n=15.",
  "pautaSteps": [
   "n=15\\text{ impar} \\Rightarrow \\text{mediana} = \\text{dato en posición } 8",
   "\\text{Ordenando: } 0,\\, 1,\\, 1,\\, 2,\\, 2,\\, 2,\\, 2,\\, 3,\\, 3,\\, 3,\\, 3,\\, 3,\\, 4,\\, 4,\\, 5",
   "\\text{Mediana} = 3"
  ],
  "conc": "La mediana es <b>3</b>: al menos la mitad de los datos es menor o igual a 3 y al menos la mitad es mayor o igual."
 },
 {
  "tipo": "Moda",
  "ctx": "Salud · Pacientes",
  "enun": "Se registró el número de visitas al médico al año en 15 pacientes. Datos: 3, 2, 1, 4, 3, 2, 0, 5, 3, 2, 1, 3, 4, 2, 3.",
  "ask": "Determine la moda (si hay más de una, indíquelas todas).",
  "alts": [
   "$5$",
   "Bimodal: 2 y 3",
   "$3$",
   "$0$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Frecuencias por valor:}",
  "pautaSteps": [
   "f(0)=1,\\ f(1)=2,\\ f(2)=4,\\ f(3)=5,\\ f(4)=2,\\ f(5)=1",
   "\\text{El valor con mayor frecuencia es } 3\\ (f=5)"
  ],
  "conc": "La moda es <b>3</b>: es el valor con mayor frecuencia ($f=5$)."
 },
 {
  "tipo": "Media muestral",
  "ctx": "Educación · Rendimiento",
  "enun": "Se registró el número de materias reprobadas en 13 estudiantes. Datos: 0, 1, 0, 2, 0, 1, 3, 0, 1, 0, 2, 0, 1.",
  "ask": "Calcule la media muestral $\\bar{x}$ (aproximada a 2 decimales).",
  "alts": [
   "$2{,}75$",
   "$0{,}85$",
   "$1{,}50$",
   "$1{,}00$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Datos con } n=13.",
  "pautaSteps": [
   "\\bar{x}=\\dfrac{1}{n}\\sum_{i=1}^{n} x_i = \\dfrac{11}{13} = 0{,}85"
  ],
  "conc": "La media muestral es $\\bar{x} = 0{,}85$."
 },
 {
  "tipo": "Mediana",
  "ctx": "Educación · Rendimiento",
  "enun": "Se registró el número de materias reprobadas en 13 estudiantes. Datos: 0, 1, 0, 2, 0, 1, 3, 0, 1, 0, 2, 0, 1.",
  "ask": "Determine la mediana.",
  "alts": [
   "$1$",
   "$3$",
   "$7$",
   "$0$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Datos ordenados, } n=13.",
  "pautaSteps": [
   "n=13\\text{ impar} \\Rightarrow \\text{mediana} = \\text{dato en posición } 7",
   "\\text{Ordenando: } 0,\\, 0,\\, 0,\\, 0,\\, 0,\\, 0,\\, 1,\\, 1,\\, 1,\\, 1,\\, 2,\\, 2,\\, 3",
   "\\text{Mediana} = 1"
  ],
  "conc": "La mediana es <b>1</b>: al menos la mitad de los datos es menor o igual a 1 y al menos la mitad es mayor o igual."
 },
 {
  "tipo": "Moda",
  "ctx": "Educación · Rendimiento",
  "enun": "Se registró el número de materias reprobadas en 13 estudiantes. Datos: 0, 1, 0, 2, 0, 1, 3, 0, 1, 0, 2, 0, 1.",
  "ask": "Determine la moda (si hay más de una, indíquelas todas).",
  "alts": [
   "$6$",
   "Bimodal: 0 y 1",
   "$1$",
   "$0$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Frecuencias por valor:}",
  "pautaSteps": [
   "f(0)=6,\\ f(1)=4,\\ f(2)=2,\\ f(3)=1",
   "\\text{El valor con mayor frecuencia es } 0\\ (f=6)"
  ],
  "conc": "La moda es <b>0</b>: es el valor con mayor frecuencia ($f=6$)."
 },
 {
  "tipo": "Media muestral",
  "ctx": "Oficina · Correos",
  "enun": "Se registró el número de correos por hora en 15 registros. Datos: 4, 5, 6, 4, 7, 5, 4, 3, 5, 6, 4, 5, 8, 4, 5.",
  "ask": "Calcule la media muestral $\\bar{x}$ (aproximada a 2 decimales).",
  "alts": [
   "$12{,}50$",
   "$5{,}00$",
   "$5{,}50$",
   "$5{,}36$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Datos con } n=15.",
  "pautaSteps": [
   "\\bar{x}=\\dfrac{1}{n}\\sum_{i=1}^{n} x_i = \\dfrac{75}{15} = 5{,}00"
  ],
  "conc": "La media muestral es $\\bar{x} = 5{,}00$."
 },
 {
  "tipo": "Mediana",
  "ctx": "Oficina · Correos",
  "enun": "Se registró el número de correos por hora en 15 registros. Datos: 4, 5, 6, 4, 7, 5, 4, 3, 5, 6, 4, 5, 8, 4, 5.",
  "ask": "Determine la mediana.",
  "alts": [
   "$3$",
   "$8$",
   "$6$",
   "$5$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Datos ordenados, } n=15.",
  "pautaSteps": [
   "n=15\\text{ impar} \\Rightarrow \\text{mediana} = \\text{dato en posición } 8",
   "\\text{Ordenando: } 3,\\, 4,\\, 4,\\, 4,\\, 4,\\, 4,\\, 5,\\, 5,\\, 5,\\, 5,\\, 5,\\, 6,\\, 6,\\, 7,\\, 8",
   "\\text{Mediana} = 5"
  ],
  "conc": "La mediana es <b>5</b>: al menos la mitad de los datos es menor o igual a 5 y al menos la mitad es mayor o igual."
 },
 {
  "tipo": "Moda",
  "ctx": "Oficina · Correos",
  "enun": "Se registró el número de correos por hora en 15 registros. Datos: 4, 5, 6, 4, 7, 5, 4, 3, 5, 6, 4, 5, 8, 4, 5.",
  "ask": "Determine la moda (si hay más de una, indíquelas todas).",
  "alts": [
   "Bimodal: 4 y 5",
   "4",
   "5",
   "8"
  ],
  "correct": 0,
  "pautaHead": "\\text{Frecuencias por valor:}",
  "pautaSteps": [
   "f(3)=1,\\ f(4)=5,\\ f(5)=5,\\ f(6)=2,\\ f(7)=1,\\ f(8)=1",
   "\\text{Hay empate en la frecuencia máxima } (f=5)\\text{: la distribución es bimodal, modas } 4\\text{ y }5"
  ],
  "conc": "La distribución es <b>bimodal</b>: modas 4 y 5."
 },
 {
  "tipo": "Media muestral",
  "ctx": "Retail · Compras",
  "enun": "Se registró el número de productos por boleta en 13 compras. Datos: 3, 2, 4, 1, 3, 5, 2, 3, 4, 1, 2, 3, 2.",
  "ask": "Calcule la media muestral $\\bar{x}$ (aproximada a 2 decimales).",
  "alts": [
   "$2{,}69$",
   "$7{,}00$",
   "$3{,}00$",
   "$2{,}92$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Datos con } n=13.",
  "pautaSteps": [
   "\\bar{x}=\\dfrac{1}{n}\\sum_{i=1}^{n} x_i = \\dfrac{35}{13} = 2{,}69"
  ],
  "conc": "La media muestral es $\\bar{x} = 2{,}69$."
 },
 {
  "tipo": "Mediana",
  "ctx": "Retail · Compras",
  "enun": "Se registró el número de productos por boleta en 13 compras. Datos: 3, 2, 4, 1, 3, 5, 2, 3, 4, 1, 2, 3, 2.",
  "ask": "Determine la mediana.",
  "alts": [
   "$2$",
   "$3$",
   "$7$",
   "$2{,}69$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Datos ordenados, } n=13.",
  "pautaSteps": [
   "n=13\\text{ impar} \\Rightarrow \\text{mediana} = \\text{dato en posición } 7",
   "\\text{Ordenando: } 1,\\, 1,\\, 2,\\, 2,\\, 2,\\, 2,\\, 3,\\, 3,\\, 3,\\, 3,\\, 4,\\, 4,\\, 5",
   "\\text{Mediana} = 3"
  ],
  "conc": "La mediana es <b>3</b>: al menos la mitad de los datos es menor o igual a 3 y al menos la mitad es mayor o igual."
 },
 {
  "tipo": "Moda",
  "ctx": "Retail · Compras",
  "enun": "Se registró el número de productos por boleta en 13 compras. Datos: 3, 2, 4, 1, 3, 5, 2, 3, 4, 1, 2, 3, 2.",
  "ask": "Determine la moda (si hay más de una, indíquelas todas).",
  "alts": [
   "2",
   "Bimodal: 2 y 3",
   "3",
   "4"
  ],
  "correct": 1,
  "pautaHead": "\\text{Frecuencias por valor:}",
  "pautaSteps": [
   "f(1)=2,\\ f(2)=4,\\ f(3)=4,\\ f(4)=2,\\ f(5)=1",
   "\\text{Hay empate en la frecuencia máxima } (f=4)\\text{: la distribución es bimodal, modas } 2\\text{ y }3"
  ],
  "conc": "La distribución es <b>bimodal</b>: modas 2 y 3."
 },
 {
  "tipo": "Media muestral",
  "ctx": "E-commerce · Reclamos",
  "enun": "Se registró el número de reclamos por semana en 15 semanas. Datos: 1, 2, 0, 1, 3, 1, 2, 0, 4, 1, 2, 1, 0, 2, 1.",
  "ask": "Calcule la media muestral $\\bar{x}$ (aproximada a 2 decimales).",
  "alts": [
   "$4{,}20$",
   "$2{,}00$",
   "$1{,}40$",
   "$1{,}00$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Datos con } n=15.",
  "pautaSteps": [
   "\\bar{x}=\\dfrac{1}{n}\\sum_{i=1}^{n} x_i = \\dfrac{21}{15} = 1{,}40"
  ],
  "conc": "La media muestral es $\\bar{x} = 1{,}40$."
 },
 {
  "tipo": "Mediana",
  "ctx": "E-commerce · Reclamos",
  "enun": "Se registró el número de reclamos por semana en 15 semanas. Datos: 1, 2, 0, 1, 3, 1, 2, 0, 4, 1, 2, 1, 0, 2, 1.",
  "ask": "Determine la mediana.",
  "alts": [
   "$1$",
   "$0$",
   "$8$",
   "$2$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Datos ordenados, } n=15.",
  "pautaSteps": [
   "n=15\\text{ impar} \\Rightarrow \\text{mediana} = \\text{dato en posición } 8",
   "\\text{Ordenando: } 0,\\, 0,\\, 0,\\, 1,\\, 1,\\, 1,\\, 1,\\, 1,\\, 1,\\, 2,\\, 2,\\, 2,\\, 2,\\, 3,\\, 4",
   "\\text{Mediana} = 1"
  ],
  "conc": "La mediana es <b>1</b>: al menos la mitad de los datos es menor o igual a 1 y al menos la mitad es mayor o igual."
 },
 {
  "tipo": "Moda",
  "ctx": "E-commerce · Reclamos",
  "enun": "Se registró el número de reclamos por semana en 15 semanas. Datos: 1, 2, 0, 1, 3, 1, 2, 0, 4, 1, 2, 1, 0, 2, 1.",
  "ask": "Determine la moda (si hay más de una, indíquelas todas).",
  "alts": [
   "$6$",
   "Bimodal: 1 y 2",
   "$4$",
   "$1$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Frecuencias por valor:}",
  "pautaSteps": [
   "f(0)=3,\\ f(1)=6,\\ f(2)=4,\\ f(3)=1,\\ f(4)=1",
   "\\text{El valor con mayor frecuencia es } 1\\ (f=6)"
  ],
  "conc": "La moda es <b>1</b>: es el valor con mayor frecuencia ($f=6$)."
 },
 {
  "tipo": "Media muestral",
  "ctx": "Finanzas · Facturación",
  "enun": "Se registró el número de días de atraso en 13 facturas. Datos: 0, 1, 0, 2, 1, 3, 0, 1, 2, 0, 1, 4, 0.",
  "ask": "Calcule la media muestral $\\bar{x}$ (aproximada a 2 decimales).",
  "alts": [
   "$3{,}00$",
   "$1{,}15$",
   "$2{,}00$",
   "$1{,}00$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Datos con } n=13.",
  "pautaSteps": [
   "\\bar{x}=\\dfrac{1}{n}\\sum_{i=1}^{n} x_i = \\dfrac{15}{13} = 1{,}15"
  ],
  "conc": "La media muestral es $\\bar{x} = 1{,}15$."
 },
 {
  "tipo": "Mediana",
  "ctx": "Finanzas · Facturación",
  "enun": "Se registró el número de días de atraso en 13 facturas. Datos: 0, 1, 0, 2, 1, 3, 0, 1, 2, 0, 1, 4, 0.",
  "ask": "Determine la mediana.",
  "alts": [
   "$0$",
   "$7$",
   "$2$",
   "$1$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Datos ordenados, } n=13.",
  "pautaSteps": [
   "n=13\\text{ impar} \\Rightarrow \\text{mediana} = \\text{dato en posición } 7",
   "\\text{Ordenando: } 0,\\, 0,\\, 0,\\, 0,\\, 0,\\, 1,\\, 1,\\, 1,\\, 1,\\, 2,\\, 2,\\, 3,\\, 4",
   "\\text{Mediana} = 1"
  ],
  "conc": "La mediana es <b>1</b>: al menos la mitad de los datos es menor o igual a 1 y al menos la mitad es mayor o igual."
 },
 {
  "tipo": "Moda",
  "ctx": "Finanzas · Facturación",
  "enun": "Se registró el número de días de atraso en 13 facturas. Datos: 0, 1, 0, 2, 1, 3, 0, 1, 2, 0, 1, 4, 0.",
  "ask": "Determine la moda (si hay más de una, indíquelas todas).",
  "alts": [
   "$5$",
   "Bimodal: 0 y 1",
   "$0$",
   "$1$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Frecuencias por valor:}",
  "pautaSteps": [
   "f(0)=5,\\ f(1)=4,\\ f(2)=2,\\ f(3)=1,\\ f(4)=1",
   "\\text{El valor con mayor frecuencia es } 0\\ (f=5)"
  ],
  "conc": "La moda es <b>0</b>: es el valor con mayor frecuencia ($f=5$)."
 },
 {
  "tipo": "Media muestral",
  "ctx": "Laboral · Horas extra",
  "enun": "Se registró el número de horas extra en 15 empleados. Datos: 2, 0, 3, 1, 4, 2, 0, 3, 2, 5, 1, 2, 0, 3, 2.",
  "ask": "Calcule la media muestral $\\bar{x}$ (aproximada a 2 decimales).",
  "alts": [
   "$5{,}00$",
   "$2{,}50$",
   "$2{,}00$",
   "$2{,}14$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Datos con } n=15.",
  "pautaSteps": [
   "\\bar{x}=\\dfrac{1}{n}\\sum_{i=1}^{n} x_i = \\dfrac{30}{15} = 2{,}00"
  ],
  "conc": "La media muestral es $\\bar{x} = 2{,}00$."
 },
 {
  "tipo": "Mediana",
  "ctx": "Laboral · Horas extra",
  "enun": "Se registró el número de horas extra en 15 empleados. Datos: 2, 0, 3, 1, 4, 2, 0, 3, 2, 5, 1, 2, 0, 3, 2.",
  "ask": "Determine la mediana.",
  "alts": [
   "$3$",
   "$2$",
   "$8$",
   "$1$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Datos ordenados, } n=15.",
  "pautaSteps": [
   "n=15\\text{ impar} \\Rightarrow \\text{mediana} = \\text{dato en posición } 8",
   "\\text{Ordenando: } 0,\\, 0,\\, 0,\\, 1,\\, 1,\\, 2,\\, 2,\\, 2,\\, 2,\\, 2,\\, 3,\\, 3,\\, 3,\\, 4,\\, 5",
   "\\text{Mediana} = 2"
  ],
  "conc": "La mediana es <b>2</b>: al menos la mitad de los datos es menor o igual a 2 y al menos la mitad es mayor o igual."
 },
 {
  "tipo": "Moda",
  "ctx": "Laboral · Horas extra",
  "enun": "Se registró el número de horas extra en 15 empleados. Datos: 2, 0, 3, 1, 4, 2, 0, 3, 2, 5, 1, 2, 0, 3, 2.",
  "ask": "Determine la moda (si hay más de una, indíquelas todas).",
  "alts": [
   "$2$",
   "$5$",
   "Bimodal: 0 y 2",
   "$0$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Frecuencias por valor:}",
  "pautaSteps": [
   "f(0)=3,\\ f(1)=2,\\ f(2)=5,\\ f(3)=3,\\ f(4)=1,\\ f(5)=1",
   "\\text{El valor con mayor frecuencia es } 2\\ (f=5)"
  ],
  "conc": "La moda es <b>2</b>: es el valor con mayor frecuencia ($f=5$)."
 },
 {
  "tipo": "Media muestral",
  "ctx": "Hogar · Conectividad",
  "enun": "Se registró el número de dispositivos conectados a wifi en 13 hogares. Datos: 4, 5, 3, 6, 4, 5, 3, 4, 7, 5, 4, 3, 5.",
  "ask": "Calcule la media muestral $\\bar{x}$ (aproximada a 2 decimales).",
  "alts": [
   "$4{,}46$",
   "$11{,}60$",
   "$5{,}00$",
   "$4{,}00$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Datos con } n=13.",
  "pautaSteps": [
   "\\bar{x}=\\dfrac{1}{n}\\sum_{i=1}^{n} x_i = \\dfrac{58}{13} = 4{,}46"
  ],
  "conc": "La media muestral es $\\bar{x} = 4{,}46$."
 },
 {
  "tipo": "Mediana",
  "ctx": "Hogar · Conectividad",
  "enun": "Se registró el número de dispositivos conectados a wifi en 13 hogares. Datos: 4, 5, 3, 6, 4, 5, 3, 4, 7, 5, 4, 3, 5.",
  "ask": "Determine la mediana.",
  "alts": [
   "$3$",
   "$7$",
   "$4$",
   "$5$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Datos ordenados, } n=13.",
  "pautaSteps": [
   "n=13\\text{ impar} \\Rightarrow \\text{mediana} = \\text{dato en posición } 7",
   "\\text{Ordenando: } 3,\\, 3,\\, 3,\\, 4,\\, 4,\\, 4,\\, 4,\\, 5,\\, 5,\\, 5,\\, 5,\\, 6,\\, 7",
   "\\text{Mediana} = 4"
  ],
  "conc": "La mediana es <b>4</b>: al menos la mitad de los datos es menor o igual a 4 y al menos la mitad es mayor o igual."
 },
 {
  "tipo": "Moda",
  "ctx": "Hogar · Conectividad",
  "enun": "Se registró el número de dispositivos conectados a wifi en 13 hogares. Datos: 4, 5, 3, 6, 4, 5, 3, 4, 7, 5, 4, 3, 5.",
  "ask": "Determine la moda (si hay más de una, indíquelas todas).",
  "alts": [
   "4",
   "5",
   "7",
   "Bimodal: 4 y 5"
  ],
  "correct": 3,
  "pautaHead": "\\text{Frecuencias por valor:}",
  "pautaSteps": [
   "f(3)=3,\\ f(4)=4,\\ f(5)=4,\\ f(6)=1,\\ f(7)=1",
   "\\text{Hay empate en la frecuencia máxima } (f=4)\\text{: la distribución es bimodal, modas } 4\\text{ y }5"
  ],
  "conc": "La distribución es <b>bimodal</b>: modas 4 y 5."
 },
 {
  "tipo": "Media muestral",
  "ctx": "Educación · Matrícula",
  "enun": "Se registró el número de hijos matriculados en 15 familias. Datos: 0, 1, 2, 1, 3, 0, 1, 2, 1, 0, 2, 1, 1, 3, 0.",
  "ask": "Calcule la media muestral $\\bar{x}$ (aproximada a 2 decimales).",
  "alts": [
   "$1{,}20$",
   "$4{,}50$",
   "$1{,}50$",
   "$1{,}00$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Datos con } n=15.",
  "pautaSteps": [
   "\\bar{x}=\\dfrac{1}{n}\\sum_{i=1}^{n} x_i = \\dfrac{18}{15} = 1{,}20"
  ],
  "conc": "La media muestral es $\\bar{x} = 1{,}20$."
 },
 {
  "tipo": "Mediana",
  "ctx": "Educación · Matrícula",
  "enun": "Se registró el número de hijos matriculados en 15 familias. Datos: 0, 1, 2, 1, 3, 0, 1, 2, 1, 0, 2, 1, 1, 3, 0.",
  "ask": "Determine la mediana.",
  "alts": [
   "$2$",
   "$8$",
   "$1{,}2$",
   "$1$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Datos ordenados, } n=15.",
  "pautaSteps": [
   "n=15\\text{ impar} \\Rightarrow \\text{mediana} = \\text{dato en posición } 8",
   "\\text{Ordenando: } 0,\\, 0,\\, 0,\\, 0,\\, 1,\\, 1,\\, 1,\\, 1,\\, 1,\\, 1,\\, 2,\\, 2,\\, 2,\\, 3,\\, 3",
   "\\text{Mediana} = 1"
  ],
  "conc": "La mediana es <b>1</b>: al menos la mitad de los datos es menor o igual a 1 y al menos la mitad es mayor o igual."
 },
 {
  "tipo": "Moda",
  "ctx": "Educación · Matrícula",
  "enun": "Se registró el número de hijos matriculados en 15 familias. Datos: 0, 1, 2, 1, 3, 0, 1, 2, 1, 0, 2, 1, 1, 3, 0.",
  "ask": "Determine la moda (si hay más de una, indíquelas todas).",
  "alts": [
   "$6$",
   "$1$",
   "Bimodal: 0 y 1",
   "$3$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Frecuencias por valor:}",
  "pautaSteps": [
   "f(0)=4,\\ f(1)=6,\\ f(2)=3,\\ f(3)=2",
   "\\text{El valor con mayor frecuencia es } 1\\ (f=6)"
  ],
  "conc": "La moda es <b>1</b>: es el valor con mayor frecuencia ($f=6$)."
 },
 {
  "tipo": "Media muestral",
  "ctx": "Deporte · Torneo",
  "enun": "Se registró el número de partidos ganados en 13 equipos. Datos: 5, 3, 4, 5, 2, 6, 4, 5, 3, 5, 4, 2, 5.",
  "ask": "Calcule la media muestral $\\bar{x}$ (aproximada a 2 decimales).",
  "alts": [
   "$10{,}60$",
   "$4{,}00$",
   "$4{,}08$",
   "$4{,}42$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Datos con } n=13.",
  "pautaSteps": [
   "\\bar{x}=\\dfrac{1}{n}\\sum_{i=1}^{n} x_i = \\dfrac{53}{13} = 4{,}08"
  ],
  "conc": "La media muestral es $\\bar{x} = 4{,}08$."
 },
 {
  "tipo": "Mediana",
  "ctx": "Deporte · Torneo",
  "enun": "Se registró el número de partidos ganados en 13 equipos. Datos: 5, 3, 4, 5, 2, 6, 4, 5, 3, 5, 4, 2, 5.",
  "ask": "Determine la mediana.",
  "alts": [
   "$7$",
   "$5$",
   "$4$",
   "$4{,}08$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Datos ordenados, } n=13.",
  "pautaSteps": [
   "n=13\\text{ impar} \\Rightarrow \\text{mediana} = \\text{dato en posición } 7",
   "\\text{Ordenando: } 2,\\, 2,\\, 3,\\, 3,\\, 4,\\, 4,\\, 4,\\, 5,\\, 5,\\, 5,\\, 5,\\, 5,\\, 6",
   "\\text{Mediana} = 4"
  ],
  "conc": "La mediana es <b>4</b>: al menos la mitad de los datos es menor o igual a 4 y al menos la mitad es mayor o igual."
 },
 {
  "tipo": "Moda",
  "ctx": "Deporte · Torneo",
  "enun": "Se registró el número de partidos ganados en 13 equipos. Datos: 5, 3, 4, 5, 2, 6, 4, 5, 3, 5, 4, 2, 5.",
  "ask": "Determine la moda (si hay más de una, indíquelas todas).",
  "alts": [
   "$5$",
   "Bimodal: 4 y 5",
   "$4$",
   "$6$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Frecuencias por valor:}",
  "pautaSteps": [
   "f(2)=2,\\ f(3)=2,\\ f(4)=3,\\ f(5)=5,\\ f(6)=1",
   "\\text{El valor con mayor frecuencia es } 5\\ (f=5)"
  ],
  "conc": "La moda es <b>5</b>: es el valor con mayor frecuencia ($f=5$)."
 },
 {
  "tipo": "Media muestral",
  "ctx": "Seguros · Pólizas",
  "enun": "Se registró el número de siniestros por póliza en 15 clientes de una aseguradora. Datos: 0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2, 0, 1, 0, 4.",
  "ask": "Calcule la media muestral $\\bar{x}$ (aproximada a 2 decimales).",
  "alts": [
   "$3{,}20$",
   "$2{,}00$",
   "$1{,}00$",
   "$1{,}07$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Datos con } n=15.",
  "pautaSteps": [
   "\\bar{x}=\\dfrac{1}{n}\\sum_{i=1}^{n} x_i = \\dfrac{16}{15} = 1{,}07"
  ],
  "conc": "La media muestral es $\\bar{x} = 1{,}07$."
 },
 {
  "tipo": "Mediana",
  "ctx": "Seguros · Pólizas",
  "enun": "Se registró el número de siniestros por póliza en 15 clientes de una aseguradora. Datos: 0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2, 0, 1, 0, 4.",
  "ask": "Determine la mediana.",
  "alts": [
   "$8$",
   "$1$",
   "$2$",
   "$0$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Datos ordenados, } n=15.",
  "pautaSteps": [
   "n=15\\text{ impar} \\Rightarrow \\text{mediana} = \\text{dato en posición } 8",
   "\\text{Ordenando: } 0,\\, 0,\\, 0,\\, 0,\\, 0,\\, 0,\\, 1,\\, 1,\\, 1,\\, 1,\\, 1,\\, 2,\\, 2,\\, 3,\\, 4",
   "\\text{Mediana} = 1"
  ],
  "conc": "La mediana es <b>1</b>: al menos la mitad de los datos es menor o igual a 1 y al menos la mitad es mayor o igual."
 },
 {
  "tipo": "Moda",
  "ctx": "Seguros · Pólizas",
  "enun": "Se registró el número de siniestros por póliza en 15 clientes de una aseguradora. Datos: 0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2, 0, 1, 0, 4.",
  "ask": "Determine la moda (si hay más de una, indíquelas todas).",
  "alts": [
   "$6$",
   "Bimodal: 0 y 1",
   "$1$",
   "$0$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Frecuencias por valor:}",
  "pautaSteps": [
   "f(0)=6,\\ f(1)=5,\\ f(2)=2,\\ f(3)=1,\\ f(4)=1",
   "\\text{El valor con mayor frecuencia es } 0\\ (f=6)"
  ],
  "conc": "La moda es <b>0</b>: es el valor con mayor frecuencia ($f=6$)."
 },
 {
  "tipo": "Media desde tabla",
  "ctx": "Demografía · Familias",
  "enun": "Se registró el número de hijos en $n=22$ familias. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$"
   ],
   "rows": [
    [
     "0",
     4,
     4
    ],
    [
     "1",
     8,
     12
    ],
    [
     "2",
     6,
     18
    ],
    [
     "3",
     3,
     21
    ],
    [
     "4",
     1,
     22
    ],
    [
     "Total",
     22,
     "—"
    ]
   ],
   "N": 22
  },
  "ask": "Calcule la media muestral $\\bar{x}$ (aproximada a 2 decimales).",
  "alts": [
   "$6{,}60$",
   "$2{,}00$",
   "$1{,}50$",
   "$1{,}00$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Datos con } n=22.",
  "pautaSteps": [
   "\\bar{x}=\\dfrac{1}{n}\\sum x_i f_i = \\dfrac{0\\cdot 4+1\\cdot 8+2\\cdot 6+3\\cdot 3+4\\cdot 1}{22} = \\dfrac{33}{22} = 1{,}50"
  ],
  "conc": "La media muestral es $\\bar{x} = 1{,}50$."
 },
 {
  "tipo": "Mediana desde tabla",
  "ctx": "Demografía · Familias",
  "enun": "Se registró el número de hijos en $n=22$ familias. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$"
   ],
   "rows": [
    [
     "0",
     4,
     4
    ],
    [
     "1",
     8,
     12
    ],
    [
     "2",
     6,
     18
    ],
    [
     "3",
     3,
     21
    ],
    [
     "4",
     1,
     22
    ],
    [
     "Total",
     22,
     "—"
    ]
   ],
   "N": 22
  },
  "ask": "Determine la mediana.",
  "alts": [
   "$11{,}5$",
   "$1$",
   "$2$",
   "$1{,}5$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Datos ordenados, } n=22.",
  "pautaSteps": [
   "n=22\\text{ par} \\Rightarrow \\text{mediana} = \\text{promedio de los datos en posiciones } 11\\text{ y } 12",
   "x_{(11)}=1\\quad(F_{1}=4<11\\le F_{2}=12)",
   "x_{(12)}=1\\quad(F_{1}=4<12\\le F_{2}=12)",
   "\\text{Mediana} = \\dfrac{1+1}{2} = 1"
  ],
  "conc": "La mediana es <b>1</b>: al menos la mitad de los datos es menor o igual a 1 y al menos la mitad es mayor o igual."
 },
 {
  "tipo": "Moda desde tabla",
  "ctx": "Demografía · Familias",
  "enun": "Se registró el número de hijos en $n=22$ familias. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$"
   ],
   "rows": [
    [
     "0",
     4,
     4
    ],
    [
     "1",
     8,
     12
    ],
    [
     "2",
     6,
     18
    ],
    [
     "3",
     3,
     21
    ],
    [
     "4",
     1,
     22
    ],
    [
     "Total",
     22,
     "—"
    ]
   ],
   "N": 22
  },
  "ask": "Determine la moda (si hay más de una, indíquelas todas).",
  "alts": [
   "$8$",
   "$1$",
   "Bimodal: 1 y 2",
   "$4$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Frecuencias por valor:}",
  "pautaSteps": [
   "f(0)=4,\\ f(1)=8,\\ f(2)=6,\\ f(3)=3,\\ f(4)=1",
   "\\text{El valor con mayor frecuencia es } 1\\ (f=8)"
  ],
  "conc": "La moda es <b>1</b>: es el valor con mayor frecuencia ($f=8$)."
 },
 {
  "tipo": "Media desde tabla",
  "ctx": "Hogar · Mascotas",
  "enun": "Se registró el número de mascotas en $n=24$ hogares. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$"
   ],
   "rows": [
    [
     "0",
     6,
     6
    ],
    [
     "1",
     10,
     16
    ],
    [
     "2",
     5,
     21
    ],
    [
     "3",
     3,
     24
    ],
    [
     "Total",
     24,
     "—"
    ]
   ],
   "N": 24
  },
  "ask": "Calcule la media muestral $\\bar{x}$ (aproximada a 2 decimales).",
  "alts": [
   "$1{,}21$",
   "$7{,}25$",
   "$1{,}50$",
   "$1{,}00$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Datos con } n=24.",
  "pautaSteps": [
   "\\bar{x}=\\dfrac{1}{n}\\sum x_i f_i = \\dfrac{0\\cdot 6+1\\cdot 10+2\\cdot 5+3\\cdot 3}{24} = \\dfrac{29}{24} = 1{,}21"
  ],
  "conc": "La media muestral es $\\bar{x} = 1{,}21$."
 },
 {
  "tipo": "Mediana desde tabla",
  "ctx": "Hogar · Mascotas",
  "enun": "Se registró el número de mascotas en $n=24$ hogares. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$"
   ],
   "rows": [
    [
     "0",
     6,
     6
    ],
    [
     "1",
     10,
     16
    ],
    [
     "2",
     5,
     21
    ],
    [
     "3",
     3,
     24
    ],
    [
     "Total",
     24,
     "—"
    ]
   ],
   "N": 24
  },
  "ask": "Determine la mediana.",
  "alts": [
   "$12{,}5$",
   "$1{,}21$",
   "$1$",
   "$2$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Datos ordenados, } n=24.",
  "pautaSteps": [
   "n=24\\text{ par} \\Rightarrow \\text{mediana} = \\text{promedio de los datos en posiciones } 12\\text{ y } 13",
   "x_{(12)}=1\\quad(F_{1}=6<12\\le F_{2}=16)",
   "x_{(13)}=1\\quad(F_{1}=6<13\\le F_{2}=16)",
   "\\text{Mediana} = \\dfrac{1+1}{2} = 1"
  ],
  "conc": "La mediana es <b>1</b>: al menos la mitad de los datos es menor o igual a 1 y al menos la mitad es mayor o igual."
 },
 {
  "tipo": "Moda desde tabla",
  "ctx": "Hogar · Mascotas",
  "enun": "Se registró el número de mascotas en $n=24$ hogares. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$"
   ],
   "rows": [
    [
     "0",
     6,
     6
    ],
    [
     "1",
     10,
     16
    ],
    [
     "2",
     5,
     21
    ],
    [
     "3",
     3,
     24
    ],
    [
     "Total",
     24,
     "—"
    ]
   ],
   "N": 24
  },
  "ask": "Determine la moda (si hay más de una, indíquelas todas).",
  "alts": [
   "$10$",
   "Bimodal: 0 y 1",
   "$1$",
   "$3$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Frecuencias por valor:}",
  "pautaSteps": [
   "f(0)=6,\\ f(1)=10,\\ f(2)=5,\\ f(3)=3",
   "\\text{El valor con mayor frecuencia es } 1\\ (f=10)"
  ],
  "conc": "La moda es <b>1</b>: es el valor con mayor frecuencia ($f=10$)."
 },
 {
  "tipo": "Media desde tabla",
  "ctx": "Inmobiliaria · Departamentos",
  "enun": "Se registró el número de habitaciones en $n=25$ departamentos. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$"
   ],
   "rows": [
    [
     "1",
     3,
     3
    ],
    [
     "2",
     10,
     13
    ],
    [
     "3",
     9,
     22
    ],
    [
     "4",
     3,
     25
    ],
    [
     "Total",
     25,
     "—"
    ]
   ],
   "N": 25
  },
  "ask": "Calcule la media muestral $\\bar{x}$ (aproximada a 2 decimales).",
  "alts": [
   "$15{,}50$",
   "$2{,}50$",
   "$2{,}00$",
   "$2{,}48$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Datos con } n=25.",
  "pautaSteps": [
   "\\bar{x}=\\dfrac{1}{n}\\sum x_i f_i = \\dfrac{1\\cdot 3+2\\cdot 10+3\\cdot 9+4\\cdot 3}{25} = \\dfrac{62}{25} = 2{,}48"
  ],
  "conc": "La media muestral es $\\bar{x} = 2{,}48$."
 },
 {
  "tipo": "Mediana desde tabla",
  "ctx": "Inmobiliaria · Departamentos",
  "enun": "Se registró el número de habitaciones en $n=25$ departamentos. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$"
   ],
   "rows": [
    [
     "1",
     3,
     3
    ],
    [
     "2",
     10,
     13
    ],
    [
     "3",
     9,
     22
    ],
    [
     "4",
     3,
     25
    ],
    [
     "Total",
     25,
     "—"
    ]
   ],
   "N": 25
  },
  "ask": "Determine la mediana.",
  "alts": [
   "$2$",
   "$13$",
   "$2{,}48$",
   "$3$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Datos ordenados, } n=25.",
  "pautaSteps": [
   "n=25\\text{ impar} \\Rightarrow \\text{mediana} = \\text{dato en posición } 13",
   "x_{(13)}=2\\quad(F_{1}=3<13\\le F_{2}=13)",
   "\\text{Mediana} = 2"
  ],
  "conc": "La mediana es <b>2</b>: al menos la mitad de los datos es menor o igual a 2 y al menos la mitad es mayor o igual."
 },
 {
  "tipo": "Moda desde tabla",
  "ctx": "Inmobiliaria · Departamentos",
  "enun": "Se registró el número de habitaciones en $n=25$ departamentos. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$"
   ],
   "rows": [
    [
     "1",
     3,
     3
    ],
    [
     "2",
     10,
     13
    ],
    [
     "3",
     9,
     22
    ],
    [
     "4",
     3,
     25
    ],
    [
     "Total",
     25,
     "—"
    ]
   ],
   "N": 25
  },
  "ask": "Determine la moda (si hay más de una, indíquelas todas).",
  "alts": [
   "$10$",
   "Bimodal: 2 y 3",
   "$4$",
   "$2$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Frecuencias por valor:}",
  "pautaSteps": [
   "f(1)=3,\\ f(2)=10,\\ f(3)=9,\\ f(4)=3",
   "\\text{El valor con mayor frecuencia es } 2\\ (f=10)"
  ],
  "conc": "La moda es <b>2</b>: es el valor con mayor frecuencia ($f=10$)."
 },
 {
  "tipo": "Media desde tabla",
  "ctx": "Hogar · Vehículos",
  "enun": "Se registró el número de autos en $n=28$ hogares. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$"
   ],
   "rows": [
    [
     "0",
     5,
     5
    ],
    [
     "1",
     12,
     17
    ],
    [
     "2",
     8,
     25
    ],
    [
     "3",
     3,
     28
    ],
    [
     "Total",
     28,
     "—"
    ]
   ],
   "N": 28
  },
  "ask": "Calcule la media muestral $\\bar{x}$ (aproximada a 2 decimales).",
  "alts": [
   "$9{,}25$",
   "$1{,}50$",
   "$1{,}32$",
   "$1{,}00$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Datos con } n=28.",
  "pautaSteps": [
   "\\bar{x}=\\dfrac{1}{n}\\sum x_i f_i = \\dfrac{0\\cdot 5+1\\cdot 12+2\\cdot 8+3\\cdot 3}{28} = \\dfrac{37}{28} = 1{,}32"
  ],
  "conc": "La media muestral es $\\bar{x} = 1{,}32$."
 },
 {
  "tipo": "Mediana desde tabla",
  "ctx": "Hogar · Vehículos",
  "enun": "Se registró el número de autos en $n=28$ hogares. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$"
   ],
   "rows": [
    [
     "0",
     5,
     5
    ],
    [
     "1",
     12,
     17
    ],
    [
     "2",
     8,
     25
    ],
    [
     "3",
     3,
     28
    ],
    [
     "Total",
     28,
     "—"
    ]
   ],
   "N": 28
  },
  "ask": "Determine la mediana.",
  "alts": [
   "$14{,}5$",
   "$1{,}32$",
   "$1$",
   "$2$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Datos ordenados, } n=28.",
  "pautaSteps": [
   "n=28\\text{ par} \\Rightarrow \\text{mediana} = \\text{promedio de los datos en posiciones } 14\\text{ y } 15",
   "x_{(14)}=1\\quad(F_{1}=5<14\\le F_{2}=17)",
   "x_{(15)}=1\\quad(F_{1}=5<15\\le F_{2}=17)",
   "\\text{Mediana} = \\dfrac{1+1}{2} = 1"
  ],
  "conc": "La mediana es <b>1</b>: al menos la mitad de los datos es menor o igual a 1 y al menos la mitad es mayor o igual."
 },
 {
  "tipo": "Moda desde tabla",
  "ctx": "Hogar · Vehículos",
  "enun": "Se registró el número de autos en $n=28$ hogares. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$"
   ],
   "rows": [
    [
     "0",
     5,
     5
    ],
    [
     "1",
     12,
     17
    ],
    [
     "2",
     8,
     25
    ],
    [
     "3",
     3,
     28
    ],
    [
     "Total",
     28,
     "—"
    ]
   ],
   "N": 28
  },
  "ask": "Determine la moda (si hay más de una, indíquelas todas).",
  "alts": [
   "$1$",
   "$12$",
   "Bimodal: 1 y 2",
   "$3$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Frecuencias por valor:}",
  "pautaSteps": [
   "f(0)=5,\\ f(1)=12,\\ f(2)=8,\\ f(3)=3",
   "\\text{El valor con mayor frecuencia es } 1\\ (f=12)"
  ],
  "conc": "La moda es <b>1</b>: es el valor con mayor frecuencia ($f=12$)."
 },
 {
  "tipo": "Media desde tabla",
  "ctx": "Deporte · Torneo",
  "enun": "Se registró el número de goles en $n=28$ partidos. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$"
   ],
   "rows": [
    [
     "0",
     6,
     6
    ],
    [
     "1",
     10,
     16
    ],
    [
     "2",
     7,
     23
    ],
    [
     "3",
     3,
     26
    ],
    [
     "4",
     2,
     28
    ],
    [
     "Total",
     28,
     "—"
    ]
   ],
   "N": 28
  },
  "ask": "Calcule la media muestral $\\bar{x}$ (aproximada a 2 decimales).",
  "alts": [
   "$1{,}46$",
   "$8{,}20$",
   "$2{,}00$",
   "$1{,}00$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Datos con } n=28.",
  "pautaSteps": [
   "\\bar{x}=\\dfrac{1}{n}\\sum x_i f_i = \\dfrac{0\\cdot 6+1\\cdot 10+2\\cdot 7+3\\cdot 3+4\\cdot 2}{28} = \\dfrac{41}{28} = 1{,}46"
  ],
  "conc": "La media muestral es $\\bar{x} = 1{,}46$."
 },
 {
  "tipo": "Mediana desde tabla",
  "ctx": "Deporte · Torneo",
  "enun": "Se registró el número de goles en $n=28$ partidos. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$"
   ],
   "rows": [
    [
     "0",
     6,
     6
    ],
    [
     "1",
     10,
     16
    ],
    [
     "2",
     7,
     23
    ],
    [
     "3",
     3,
     26
    ],
    [
     "4",
     2,
     28
    ],
    [
     "Total",
     28,
     "—"
    ]
   ],
   "N": 28
  },
  "ask": "Determine la mediana.",
  "alts": [
   "$14{,}5$",
   "$2$",
   "$1{,}46$",
   "$1$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Datos ordenados, } n=28.",
  "pautaSteps": [
   "n=28\\text{ par} \\Rightarrow \\text{mediana} = \\text{promedio de los datos en posiciones } 14\\text{ y } 15",
   "x_{(14)}=1\\quad(F_{1}=6<14\\le F_{2}=16)",
   "x_{(15)}=1\\quad(F_{1}=6<15\\le F_{2}=16)",
   "\\text{Mediana} = \\dfrac{1+1}{2} = 1"
  ],
  "conc": "La mediana es <b>1</b>: al menos la mitad de los datos es menor o igual a 1 y al menos la mitad es mayor o igual."
 },
 {
  "tipo": "Moda desde tabla",
  "ctx": "Deporte · Torneo",
  "enun": "Se registró el número de goles en $n=28$ partidos. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$"
   ],
   "rows": [
    [
     "0",
     6,
     6
    ],
    [
     "1",
     10,
     16
    ],
    [
     "2",
     7,
     23
    ],
    [
     "3",
     3,
     26
    ],
    [
     "4",
     2,
     28
    ],
    [
     "Total",
     28,
     "—"
    ]
   ],
   "N": 28
  },
  "ask": "Determine la moda (si hay más de una, indíquelas todas).",
  "alts": [
   "$10$",
   "$1$",
   "Bimodal: 1 y 2",
   "$4$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Frecuencias por valor:}",
  "pautaSteps": [
   "f(0)=6,\\ f(1)=10,\\ f(2)=7,\\ f(3)=3,\\ f(4)=2",
   "\\text{El valor con mayor frecuencia es } 1\\ (f=10)"
  ],
  "conc": "La moda es <b>1</b>: es el valor con mayor frecuencia ($f=10$)."
 },
 {
  "tipo": "Media desde tabla",
  "ctx": "Retail · Sucursales",
  "enun": "Se registró el número de empleados en $n=28$ sucursales. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$"
   ],
   "rows": [
    [
     "2",
     3,
     3
    ],
    [
     "3",
     6,
     9
    ],
    [
     "4",
     10,
     19
    ],
    [
     "5",
     6,
     25
    ],
    [
     "6",
     3,
     28
    ],
    [
     "Total",
     28,
     "—"
    ]
   ],
   "N": 28
  },
  "ask": "Calcule la media muestral $\\bar{x}$ (aproximada a 2 decimales).",
  "alts": [
   "$22{,}40$",
   "$4{,}15$",
   "$4{,}25$",
   "$4{,}00$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Datos con } n=28.",
  "pautaSteps": [
   "\\bar{x}=\\dfrac{1}{n}\\sum x_i f_i = \\dfrac{2\\cdot 3+3\\cdot 6+4\\cdot 10+5\\cdot 6+6\\cdot 3}{28} = \\dfrac{112}{28} = 4{,}00"
  ],
  "conc": "La media muestral es $\\bar{x} = 4{,}00$."
 },
 {
  "tipo": "Mediana desde tabla",
  "ctx": "Retail · Sucursales",
  "enun": "Se registró el número de empleados en $n=28$ sucursales. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$"
   ],
   "rows": [
    [
     "2",
     3,
     3
    ],
    [
     "3",
     6,
     9
    ],
    [
     "4",
     10,
     19
    ],
    [
     "5",
     6,
     25
    ],
    [
     "6",
     3,
     28
    ],
    [
     "Total",
     28,
     "—"
    ]
   ],
   "N": 28
  },
  "ask": "Determine la mediana.",
  "alts": [
   "$4$",
   "$14{,}5$",
   "$5$",
   "$3$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Datos ordenados, } n=28.",
  "pautaSteps": [
   "n=28\\text{ par} \\Rightarrow \\text{mediana} = \\text{promedio de los datos en posiciones } 14\\text{ y } 15",
   "x_{(14)}=4\\quad(F_{2}=9<14\\le F_{3}=19)",
   "x_{(15)}=4\\quad(F_{2}=9<15\\le F_{3}=19)",
   "\\text{Mediana} = \\dfrac{4+4}{2} = 4"
  ],
  "conc": "La mediana es <b>4</b>: al menos la mitad de los datos es menor o igual a 4 y al menos la mitad es mayor o igual."
 },
 {
  "tipo": "Moda desde tabla",
  "ctx": "Retail · Sucursales",
  "enun": "Se registró el número de empleados en $n=28$ sucursales. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$"
   ],
   "rows": [
    [
     "2",
     3,
     3
    ],
    [
     "3",
     6,
     9
    ],
    [
     "4",
     10,
     19
    ],
    [
     "5",
     6,
     25
    ],
    [
     "6",
     3,
     28
    ],
    [
     "Total",
     28,
     "—"
    ]
   ],
   "N": 28
  },
  "ask": "Determine la moda (si hay más de una, indíquelas todas).",
  "alts": [
   "$10$",
   "$4$",
   "Bimodal: 3 y 4",
   "$6$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Frecuencias por valor:}",
  "pautaSteps": [
   "f(2)=3,\\ f(3)=6,\\ f(4)=10,\\ f(5)=6,\\ f(6)=3",
   "\\text{El valor con mayor frecuencia es } 4\\ (f=10)"
  ],
  "conc": "La moda es <b>4</b>: es el valor con mayor frecuencia ($f=10$)."
 },
 {
  "tipo": "Media desde tabla",
  "ctx": "Edición · Revisión",
  "enun": "Se registró el número de errores por página en $n=30$ páginas. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$"
   ],
   "rows": [
    [
     "0",
     10,
     10
    ],
    [
     "1",
     12,
     22
    ],
    [
     "2",
     6,
     28
    ],
    [
     "3",
     2,
     30
    ],
    [
     "Total",
     30,
     "—"
    ]
   ],
   "N": 30
  },
  "ask": "Calcule la media muestral $\\bar{x}$ (aproximada a 2 decimales).",
  "alts": [
   "$7{,}50$",
   "$1{,}00$",
   "$1{,}50$",
   "$1{,}03$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Datos con } n=30.",
  "pautaSteps": [
   "\\bar{x}=\\dfrac{1}{n}\\sum x_i f_i = \\dfrac{0\\cdot 10+1\\cdot 12+2\\cdot 6+3\\cdot 2}{30} = \\dfrac{30}{30} = 1{,}00"
  ],
  "conc": "La media muestral es $\\bar{x} = 1{,}00$."
 },
 {
  "tipo": "Mediana desde tabla",
  "ctx": "Edición · Revisión",
  "enun": "Se registró el número de errores por página en $n=30$ páginas. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$"
   ],
   "rows": [
    [
     "0",
     10,
     10
    ],
    [
     "1",
     12,
     22
    ],
    [
     "2",
     6,
     28
    ],
    [
     "3",
     2,
     30
    ],
    [
     "Total",
     30,
     "—"
    ]
   ],
   "N": 30
  },
  "ask": "Determine la mediana.",
  "alts": [
   "$1$",
   "$15{,}5$",
   "$2$",
   "$0$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Datos ordenados, } n=30.",
  "pautaSteps": [
   "n=30\\text{ par} \\Rightarrow \\text{mediana} = \\text{promedio de los datos en posiciones } 15\\text{ y } 16",
   "x_{(15)}=1\\quad(F_{1}=10<15\\le F_{2}=22)",
   "x_{(16)}=1\\quad(F_{1}=10<16\\le F_{2}=22)",
   "\\text{Mediana} = \\dfrac{1+1}{2} = 1"
  ],
  "conc": "La mediana es <b>1</b>: al menos la mitad de los datos es menor o igual a 1 y al menos la mitad es mayor o igual."
 },
 {
  "tipo": "Moda desde tabla",
  "ctx": "Edición · Revisión",
  "enun": "Se registró el número de errores por página en $n=30$ páginas. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$"
   ],
   "rows": [
    [
     "0",
     10,
     10
    ],
    [
     "1",
     12,
     22
    ],
    [
     "2",
     6,
     28
    ],
    [
     "3",
     2,
     30
    ],
    [
     "Total",
     30,
     "—"
    ]
   ],
   "N": 30
  },
  "ask": "Determine la moda (si hay más de una, indíquelas todas).",
  "alts": [
   "$12$",
   "Bimodal: 0 y 1",
   "$1$",
   "$3$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Frecuencias por valor:}",
  "pautaSteps": [
   "f(0)=10,\\ f(1)=12,\\ f(2)=6,\\ f(3)=2",
   "\\text{El valor con mayor frecuencia es } 1\\ (f=12)"
  ],
  "conc": "La moda es <b>1</b>: es el valor con mayor frecuencia ($f=12$)."
 },
 {
  "tipo": "Media desde tabla",
  "ctx": "Call center · Turnos",
  "enun": "Se registró el número de llamadas por hora en $n=30$ turnos. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$"
   ],
   "rows": [
    [
     "4",
     4,
     4
    ],
    [
     "5",
     9,
     13
    ],
    [
     "6",
     10,
     23
    ],
    [
     "7",
     5,
     28
    ],
    [
     "8",
     2,
     30
    ],
    [
     "Total",
     30,
     "—"
    ]
   ],
   "N": 30
  },
  "ask": "Calcule la media muestral $\\bar{x}$ (aproximada a 2 decimales).",
  "alts": [
   "$34{,}40$",
   "$5{,}73$",
   "$6{,}00$",
   "$5{,}93$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Datos con } n=30.",
  "pautaSteps": [
   "\\bar{x}=\\dfrac{1}{n}\\sum x_i f_i = \\dfrac{4\\cdot 4+5\\cdot 9+6\\cdot 10+7\\cdot 5+8\\cdot 2}{30} = \\dfrac{172}{30} = 5{,}73"
  ],
  "conc": "La media muestral es $\\bar{x} = 5{,}73$."
 },
 {
  "tipo": "Mediana desde tabla",
  "ctx": "Call center · Turnos",
  "enun": "Se registró el número de llamadas por hora en $n=30$ turnos. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$"
   ],
   "rows": [
    [
     "4",
     4,
     4
    ],
    [
     "5",
     9,
     13
    ],
    [
     "6",
     10,
     23
    ],
    [
     "7",
     5,
     28
    ],
    [
     "8",
     2,
     30
    ],
    [
     "Total",
     30,
     "—"
    ]
   ],
   "N": 30
  },
  "ask": "Determine la mediana.",
  "alts": [
   "$15{,}5$",
   "$5{,}73$",
   "$7$",
   "$6$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Datos ordenados, } n=30.",
  "pautaSteps": [
   "n=30\\text{ par} \\Rightarrow \\text{mediana} = \\text{promedio de los datos en posiciones } 15\\text{ y } 16",
   "x_{(15)}=6\\quad(F_{2}=13<15\\le F_{3}=23)",
   "x_{(16)}=6\\quad(F_{2}=13<16\\le F_{3}=23)",
   "\\text{Mediana} = \\dfrac{6+6}{2} = 6"
  ],
  "conc": "La mediana es <b>6</b>: al menos la mitad de los datos es menor o igual a 6 y al menos la mitad es mayor o igual."
 },
 {
  "tipo": "Moda desde tabla",
  "ctx": "Call center · Turnos",
  "enun": "Se registró el número de llamadas por hora en $n=30$ turnos. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$"
   ],
   "rows": [
    [
     "4",
     4,
     4
    ],
    [
     "5",
     9,
     13
    ],
    [
     "6",
     10,
     23
    ],
    [
     "7",
     5,
     28
    ],
    [
     "8",
     2,
     30
    ],
    [
     "Total",
     30,
     "—"
    ]
   ],
   "N": 30
  },
  "ask": "Determine la moda (si hay más de una, indíquelas todas).",
  "alts": [
   "$6$",
   "$10$",
   "Bimodal: 5 y 6",
   "$8$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Frecuencias por valor:}",
  "pautaSteps": [
   "f(4)=4,\\ f(5)=9,\\ f(6)=10,\\ f(7)=5,\\ f(8)=2",
   "\\text{El valor con mayor frecuencia es } 6\\ (f=10)"
  ],
  "conc": "La moda es <b>6</b>: es el valor con mayor frecuencia ($f=10$)."
 },
 {
  "tipo": "Media desde tabla",
  "ctx": "Educación · Lectura",
  "enun": "Se registró el número de libros leídos al mes en $n=28$ estudiantes. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$"
   ],
   "rows": [
    [
     "0",
     3,
     3
    ],
    [
     "1",
     7,
     10
    ],
    [
     "2",
     9,
     19
    ],
    [
     "3",
     6,
     25
    ],
    [
     "4",
     3,
     28
    ],
    [
     "Total",
     28,
     "—"
    ]
   ],
   "N": 28
  },
  "ask": "Calcule la media muestral $\\bar{x}$ (aproximada a 2 decimales).",
  "alts": [
   "$11{,}00$",
   "$2{,}00$",
   "$2{,}04$",
   "$1{,}96$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Datos con } n=28.",
  "pautaSteps": [
   "\\bar{x}=\\dfrac{1}{n}\\sum x_i f_i = \\dfrac{0\\cdot 3+1\\cdot 7+2\\cdot 9+3\\cdot 6+4\\cdot 3}{28} = \\dfrac{55}{28} = 1{,}96"
  ],
  "conc": "La media muestral es $\\bar{x} = 1{,}96$."
 },
 {
  "tipo": "Mediana desde tabla",
  "ctx": "Educación · Lectura",
  "enun": "Se registró el número de libros leídos al mes en $n=28$ estudiantes. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$"
   ],
   "rows": [
    [
     "0",
     3,
     3
    ],
    [
     "1",
     7,
     10
    ],
    [
     "2",
     9,
     19
    ],
    [
     "3",
     6,
     25
    ],
    [
     "4",
     3,
     28
    ],
    [
     "Total",
     28,
     "—"
    ]
   ],
   "N": 28
  },
  "ask": "Determine la mediana.",
  "alts": [
   "$14{,}5$",
   "$1{,}96$",
   "$2$",
   "$3$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Datos ordenados, } n=28.",
  "pautaSteps": [
   "n=28\\text{ par} \\Rightarrow \\text{mediana} = \\text{promedio de los datos en posiciones } 14\\text{ y } 15",
   "x_{(14)}=2\\quad(F_{2}=10<14\\le F_{3}=19)",
   "x_{(15)}=2\\quad(F_{2}=10<15\\le F_{3}=19)",
   "\\text{Mediana} = \\dfrac{2+2}{2} = 2"
  ],
  "conc": "La mediana es <b>2</b>: al menos la mitad de los datos es menor o igual a 2 y al menos la mitad es mayor o igual."
 },
 {
  "tipo": "Moda desde tabla",
  "ctx": "Educación · Lectura",
  "enun": "Se registró el número de libros leídos al mes en $n=28$ estudiantes. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$"
   ],
   "rows": [
    [
     "0",
     3,
     3
    ],
    [
     "1",
     7,
     10
    ],
    [
     "2",
     9,
     19
    ],
    [
     "3",
     6,
     25
    ],
    [
     "4",
     3,
     28
    ],
    [
     "Total",
     28,
     "—"
    ]
   ],
   "N": 28
  },
  "ask": "Determine la moda (si hay más de una, indíquelas todas).",
  "alts": [
   "$9$",
   "Bimodal: 1 y 2",
   "$2$",
   "$4$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Frecuencias por valor:}",
  "pautaSteps": [
   "f(0)=3,\\ f(1)=7,\\ f(2)=9,\\ f(3)=6,\\ f(4)=3",
   "\\text{El valor con mayor frecuencia es } 2\\ (f=9)"
  ],
  "conc": "La moda es <b>2</b>: es el valor con mayor frecuencia ($f=9$)."
 },
 {
  "tipo": "Media desde tabla",
  "ctx": "Tránsito · Intersección",
  "enun": "Se registró el número de accidentes por mes en $n=28$ meses. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$"
   ],
   "rows": [
    [
     "0",
     9,
     9
    ],
    [
     "1",
     11,
     20
    ],
    [
     "2",
     6,
     26
    ],
    [
     "3",
     2,
     28
    ],
    [
     "Total",
     28,
     "—"
    ]
   ],
   "N": 28
  },
  "ask": "Calcule la media muestral $\\bar{x}$ (aproximada a 2 decimales).",
  "alts": [
   "$1{,}04$",
   "$7{,}25$",
   "$1{,}50$",
   "$1{,}00$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Datos con } n=28.",
  "pautaSteps": [
   "\\bar{x}=\\dfrac{1}{n}\\sum x_i f_i = \\dfrac{0\\cdot 9+1\\cdot 11+2\\cdot 6+3\\cdot 2}{28} = \\dfrac{29}{28} = 1{,}04"
  ],
  "conc": "La media muestral es $\\bar{x} = 1{,}04$."
 },
 {
  "tipo": "Mediana desde tabla",
  "ctx": "Tránsito · Intersección",
  "enun": "Se registró el número de accidentes por mes en $n=28$ meses. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$"
   ],
   "rows": [
    [
     "0",
     9,
     9
    ],
    [
     "1",
     11,
     20
    ],
    [
     "2",
     6,
     26
    ],
    [
     "3",
     2,
     28
    ],
    [
     "Total",
     28,
     "—"
    ]
   ],
   "N": 28
  },
  "ask": "Determine la mediana.",
  "alts": [
   "$1$",
   "$14{,}5$",
   "$1{,}04$",
   "$2$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Datos ordenados, } n=28.",
  "pautaSteps": [
   "n=28\\text{ par} \\Rightarrow \\text{mediana} = \\text{promedio de los datos en posiciones } 14\\text{ y } 15",
   "x_{(14)}=1\\quad(F_{1}=9<14\\le F_{2}=20)",
   "x_{(15)}=1\\quad(F_{1}=9<15\\le F_{2}=20)",
   "\\text{Mediana} = \\dfrac{1+1}{2} = 1"
  ],
  "conc": "La mediana es <b>1</b>: al menos la mitad de los datos es menor o igual a 1 y al menos la mitad es mayor o igual."
 },
 {
  "tipo": "Moda desde tabla",
  "ctx": "Tránsito · Intersección",
  "enun": "Se registró el número de accidentes por mes en $n=28$ meses. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$"
   ],
   "rows": [
    [
     "0",
     9,
     9
    ],
    [
     "1",
     11,
     20
    ],
    [
     "2",
     6,
     26
    ],
    [
     "3",
     2,
     28
    ],
    [
     "Total",
     28,
     "—"
    ]
   ],
   "N": 28
  },
  "ask": "Determine la moda (si hay más de una, indíquelas todas).",
  "alts": [
   "$11$",
   "Bimodal: 0 y 1",
   "$3$",
   "$1$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Frecuencias por valor:}",
  "pautaSteps": [
   "f(0)=9,\\ f(1)=11,\\ f(2)=6,\\ f(3)=2",
   "\\text{El valor con mayor frecuencia es } 1\\ (f=11)"
  ],
  "conc": "La moda es <b>1</b>: es el valor con mayor frecuencia ($f=11$)."
 },
 {
  "tipo": "Media desde tabla",
  "ctx": "Producción · Lotes",
  "enun": "Se registró el número de defectos por lote en $n=30$ lotes. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$"
   ],
   "rows": [
    [
     "0",
     8,
     8
    ],
    [
     "1",
     10,
     18
    ],
    [
     "2",
     7,
     25
    ],
    [
     "3",
     3,
     28
    ],
    [
     "4",
     2,
     30
    ],
    [
     "Total",
     30,
     "—"
    ]
   ],
   "N": 30
  },
  "ask": "Calcule la media muestral $\\bar{x}$ (aproximada a 2 decimales).",
  "alts": [
   "$8{,}20$",
   "$2{,}00$",
   "$1{,}37$",
   "$1{,}00$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Datos con } n=30.",
  "pautaSteps": [
   "\\bar{x}=\\dfrac{1}{n}\\sum x_i f_i = \\dfrac{0\\cdot 8+1\\cdot 10+2\\cdot 7+3\\cdot 3+4\\cdot 2}{30} = \\dfrac{41}{30} = 1{,}37"
  ],
  "conc": "La media muestral es $\\bar{x} = 1{,}37$."
 },
 {
  "tipo": "Mediana desde tabla",
  "ctx": "Producción · Lotes",
  "enun": "Se registró el número de defectos por lote en $n=30$ lotes. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$"
   ],
   "rows": [
    [
     "0",
     8,
     8
    ],
    [
     "1",
     10,
     18
    ],
    [
     "2",
     7,
     25
    ],
    [
     "3",
     3,
     28
    ],
    [
     "4",
     2,
     30
    ],
    [
     "Total",
     30,
     "—"
    ]
   ],
   "N": 30
  },
  "ask": "Determine la mediana.",
  "alts": [
   "$15{,}5$",
   "$2$",
   "$1{,}37$",
   "$1$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Datos ordenados, } n=30.",
  "pautaSteps": [
   "n=30\\text{ par} \\Rightarrow \\text{mediana} = \\text{promedio de los datos en posiciones } 15\\text{ y } 16",
   "x_{(15)}=1\\quad(F_{1}=8<15\\le F_{2}=18)",
   "x_{(16)}=1\\quad(F_{1}=8<16\\le F_{2}=18)",
   "\\text{Mediana} = \\dfrac{1+1}{2} = 1"
  ],
  "conc": "La mediana es <b>1</b>: al menos la mitad de los datos es menor o igual a 1 y al menos la mitad es mayor o igual."
 },
 {
  "tipo": "Moda desde tabla",
  "ctx": "Producción · Lotes",
  "enun": "Se registró el número de defectos por lote en $n=30$ lotes. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$"
   ],
   "rows": [
    [
     "0",
     8,
     8
    ],
    [
     "1",
     10,
     18
    ],
    [
     "2",
     7,
     25
    ],
    [
     "3",
     3,
     28
    ],
    [
     "4",
     2,
     30
    ],
    [
     "Total",
     30,
     "—"
    ]
   ],
   "N": 30
  },
  "ask": "Determine la moda (si hay más de una, indíquelas todas).",
  "alts": [
   "$1$",
   "$10$",
   "Bimodal: 0 y 1",
   "$4$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Frecuencias por valor:}",
  "pautaSteps": [
   "f(0)=8,\\ f(1)=10,\\ f(2)=7,\\ f(3)=3,\\ f(4)=2",
   "\\text{El valor con mayor frecuencia es } 1\\ (f=10)"
  ],
  "conc": "La moda es <b>1</b>: es el valor con mayor frecuencia ($f=10$)."
 },
 {
  "tipo": "Media desde tabla",
  "ctx": "Salud · Pacientes",
  "enun": "Se registró el número de visitas al médico al año en $n=30$ pacientes. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$"
   ],
   "rows": [
    [
     "0",
     2,
     2
    ],
    [
     "1",
     6,
     8
    ],
    [
     "2",
     10,
     18
    ],
    [
     "3",
     7,
     25
    ],
    [
     "4",
     3,
     28
    ],
    [
     "5",
     2,
     30
    ],
    [
     "Total",
     30,
     "—"
    ]
   ],
   "N": 30
  },
  "ask": "Calcule la media muestral $\\bar{x}$ (aproximada a 2 decimales).",
  "alts": [
   "$11{,}50$",
   "$2{,}30$",
   "$2{,}50$",
   "$2{,}00$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Datos con } n=30.",
  "pautaSteps": [
   "\\bar{x}=\\dfrac{1}{n}\\sum x_i f_i = \\dfrac{0\\cdot 2+1\\cdot 6+2\\cdot 10+3\\cdot 7+4\\cdot 3+5\\cdot 2}{30} = \\dfrac{69}{30} = 2{,}30"
  ],
  "conc": "La media muestral es $\\bar{x} = 2{,}30$."
 },
 {
  "tipo": "Mediana desde tabla",
  "ctx": "Salud · Pacientes",
  "enun": "Se registró el número de visitas al médico al año en $n=30$ pacientes. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$"
   ],
   "rows": [
    [
     "0",
     2,
     2
    ],
    [
     "1",
     6,
     8
    ],
    [
     "2",
     10,
     18
    ],
    [
     "3",
     7,
     25
    ],
    [
     "4",
     3,
     28
    ],
    [
     "5",
     2,
     30
    ],
    [
     "Total",
     30,
     "—"
    ]
   ],
   "N": 30
  },
  "ask": "Determine la mediana.",
  "alts": [
   "$15{,}5$",
   "$2$",
   "$2{,}3$",
   "$3$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Datos ordenados, } n=30.",
  "pautaSteps": [
   "n=30\\text{ par} \\Rightarrow \\text{mediana} = \\text{promedio de los datos en posiciones } 15\\text{ y } 16",
   "x_{(15)}=2\\quad(F_{2}=8<15\\le F_{3}=18)",
   "x_{(16)}=2\\quad(F_{2}=8<16\\le F_{3}=18)",
   "\\text{Mediana} = \\dfrac{2+2}{2} = 2"
  ],
  "conc": "La mediana es <b>2</b>: al menos la mitad de los datos es menor o igual a 2 y al menos la mitad es mayor o igual."
 },
 {
  "tipo": "Moda desde tabla",
  "ctx": "Salud · Pacientes",
  "enun": "Se registró el número de visitas al médico al año en $n=30$ pacientes. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$"
   ],
   "rows": [
    [
     "0",
     2,
     2
    ],
    [
     "1",
     6,
     8
    ],
    [
     "2",
     10,
     18
    ],
    [
     "3",
     7,
     25
    ],
    [
     "4",
     3,
     28
    ],
    [
     "5",
     2,
     30
    ],
    [
     "Total",
     30,
     "—"
    ]
   ],
   "N": 30
  },
  "ask": "Determine la moda (si hay más de una, indíquelas todas).",
  "alts": [
   "$10$",
   "Bimodal: 2 y 3",
   "$2$",
   "$5$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Frecuencias por valor:}",
  "pautaSteps": [
   "f(0)=2,\\ f(1)=6,\\ f(2)=10,\\ f(3)=7,\\ f(4)=3,\\ f(5)=2",
   "\\text{El valor con mayor frecuencia es } 2\\ (f=10)"
  ],
  "conc": "La moda es <b>2</b>: es el valor con mayor frecuencia ($f=10$)."
 },
 {
  "tipo": "Media desde tabla",
  "ctx": "Educación · Rendimiento",
  "enun": "Se registró el número de materias reprobadas en $n=30$ estudiantes. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$"
   ],
   "rows": [
    [
     "0",
     15,
     15
    ],
    [
     "1",
     9,
     24
    ],
    [
     "2",
     4,
     28
    ],
    [
     "3",
     2,
     30
    ],
    [
     "Total",
     30,
     "—"
    ]
   ],
   "N": 30
  },
  "ask": "Calcule la media muestral $\\bar{x}$ (aproximada a 2 decimales).",
  "alts": [
   "$5{,}75$",
   "$1{,}50$",
   "$0{,}77$",
   "$0{,}50$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Datos con } n=30.",
  "pautaSteps": [
   "\\bar{x}=\\dfrac{1}{n}\\sum x_i f_i = \\dfrac{0\\cdot 15+1\\cdot 9+2\\cdot 4+3\\cdot 2}{30} = \\dfrac{23}{30} = 0{,}77"
  ],
  "conc": "La media muestral es $\\bar{x} = 0{,}77$."
 },
 {
  "tipo": "Mediana desde tabla",
  "ctx": "Educación · Rendimiento",
  "enun": "Se registró el número de materias reprobadas en $n=30$ estudiantes. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$"
   ],
   "rows": [
    [
     "0",
     15,
     15
    ],
    [
     "1",
     9,
     24
    ],
    [
     "2",
     4,
     28
    ],
    [
     "3",
     2,
     30
    ],
    [
     "Total",
     30,
     "—"
    ]
   ],
   "N": 30
  },
  "ask": "Determine la mediana.",
  "alts": [
   "$15{,}5$",
   "$0{,}5$",
   "$1$",
   "$0$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Datos ordenados, } n=30.",
  "pautaSteps": [
   "n=30\\text{ par} \\Rightarrow \\text{mediana} = \\text{promedio de los datos en posiciones } 15\\text{ y } 16",
   "x_{(15)}=0\\quad(15\\le F_{1}=15)",
   "x_{(16)}=1\\quad(F_{1}=15<16\\le F_{2}=24)",
   "\\text{Mediana} = \\dfrac{0+1}{2} = 0{,}5"
  ],
  "conc": "La mediana es <b>0,5</b>: al menos la mitad de los datos es menor o igual a 0,5 y al menos la mitad es mayor o igual."
 },
 {
  "tipo": "Moda desde tabla",
  "ctx": "Educación · Rendimiento",
  "enun": "Se registró el número de materias reprobadas en $n=30$ estudiantes. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$"
   ],
   "rows": [
    [
     "0",
     15,
     15
    ],
    [
     "1",
     9,
     24
    ],
    [
     "2",
     4,
     28
    ],
    [
     "3",
     2,
     30
    ],
    [
     "Total",
     30,
     "—"
    ]
   ],
   "N": 30
  },
  "ask": "Determine la moda (si hay más de una, indíquelas todas).",
  "alts": [
   "$15$",
   "Bimodal: 0 y 1",
   "$3$",
   "$0$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Frecuencias por valor:}",
  "pautaSteps": [
   "f(0)=15,\\ f(1)=9,\\ f(2)=4,\\ f(3)=2",
   "\\text{El valor con mayor frecuencia es } 0\\ (f=15)"
  ],
  "conc": "La moda es <b>0</b>: es el valor con mayor frecuencia ($f=15$)."
 },
 {
  "tipo": "Media desde tabla",
  "ctx": "Oficina · Correos",
  "enun": "Se registró el número de correos por hora en $n=30$ registros. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$"
   ],
   "rows": [
    [
     "3",
     4,
     4
    ],
    [
     "4",
     9,
     13
    ],
    [
     "5",
     10,
     23
    ],
    [
     "6",
     5,
     28
    ],
    [
     "7",
     2,
     30
    ],
    [
     "Total",
     30,
     "—"
    ]
   ],
   "N": 30
  },
  "ask": "Calcule la media muestral $\\bar{x}$ (aproximada a 2 decimales).",
  "alts": [
   "$4{,}73$",
   "$28{,}40$",
   "$5{,}00$",
   "$4{,}90$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Datos con } n=30.",
  "pautaSteps": [
   "\\bar{x}=\\dfrac{1}{n}\\sum x_i f_i = \\dfrac{3\\cdot 4+4\\cdot 9+5\\cdot 10+6\\cdot 5+7\\cdot 2}{30} = \\dfrac{142}{30} = 4{,}73"
  ],
  "conc": "La media muestral es $\\bar{x} = 4{,}73$."
 },
 {
  "tipo": "Mediana desde tabla",
  "ctx": "Oficina · Correos",
  "enun": "Se registró el número de correos por hora en $n=30$ registros. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$"
   ],
   "rows": [
    [
     "3",
     4,
     4
    ],
    [
     "4",
     9,
     13
    ],
    [
     "5",
     10,
     23
    ],
    [
     "6",
     5,
     28
    ],
    [
     "7",
     2,
     30
    ],
    [
     "Total",
     30,
     "—"
    ]
   ],
   "N": 30
  },
  "ask": "Determine la mediana.",
  "alts": [
   "$15{,}5$",
   "$4{,}73$",
   "$6$",
   "$5$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Datos ordenados, } n=30.",
  "pautaSteps": [
   "n=30\\text{ par} \\Rightarrow \\text{mediana} = \\text{promedio de los datos en posiciones } 15\\text{ y } 16",
   "x_{(15)}=5\\quad(F_{2}=13<15\\le F_{3}=23)",
   "x_{(16)}=5\\quad(F_{2}=13<16\\le F_{3}=23)",
   "\\text{Mediana} = \\dfrac{5+5}{2} = 5"
  ],
  "conc": "La mediana es <b>5</b>: al menos la mitad de los datos es menor o igual a 5 y al menos la mitad es mayor o igual."
 },
 {
  "tipo": "Moda desde tabla",
  "ctx": "Oficina · Correos",
  "enun": "Se registró el número de correos por hora en $n=30$ registros. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$"
   ],
   "rows": [
    [
     "3",
     4,
     4
    ],
    [
     "4",
     9,
     13
    ],
    [
     "5",
     10,
     23
    ],
    [
     "6",
     5,
     28
    ],
    [
     "7",
     2,
     30
    ],
    [
     "Total",
     30,
     "—"
    ]
   ],
   "N": 30
  },
  "ask": "Determine la moda (si hay más de una, indíquelas todas).",
  "alts": [
   "$10$",
   "Bimodal: 4 y 5",
   "$5$",
   "$7$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Frecuencias por valor:}",
  "pautaSteps": [
   "f(3)=4,\\ f(4)=9,\\ f(5)=10,\\ f(6)=5,\\ f(7)=2",
   "\\text{El valor con mayor frecuencia es } 5\\ (f=10)"
  ],
  "conc": "La moda es <b>5</b>: es el valor con mayor frecuencia ($f=10$)."
 },
 {
  "tipo": "Media desde tabla",
  "ctx": "Retail · Supermercado",
  "enun": "Se registró el número de productos por boleta en $n=30$ boletas. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$"
   ],
   "rows": [
    [
     "1",
     4,
     4
    ],
    [
     "2",
     9,
     13
    ],
    [
     "3",
     10,
     23
    ],
    [
     "4",
     5,
     28
    ],
    [
     "5",
     2,
     30
    ],
    [
     "Total",
     30,
     "—"
    ]
   ],
   "N": 30
  },
  "ask": "Calcule la media muestral $\\bar{x}$ (aproximada a 2 decimales).",
  "alts": [
   "$16{,}40$",
   "$2{,}73$",
   "$3{,}00$",
   "$2{,}83$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Datos con } n=30.",
  "pautaSteps": [
   "\\bar{x}=\\dfrac{1}{n}\\sum x_i f_i = \\dfrac{1\\cdot 4+2\\cdot 9+3\\cdot 10+4\\cdot 5+5\\cdot 2}{30} = \\dfrac{82}{30} = 2{,}73"
  ],
  "conc": "La media muestral es $\\bar{x} = 2{,}73$."
 },
 {
  "tipo": "Mediana desde tabla",
  "ctx": "Retail · Supermercado",
  "enun": "Se registró el número de productos por boleta en $n=30$ boletas. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$"
   ],
   "rows": [
    [
     "1",
     4,
     4
    ],
    [
     "2",
     9,
     13
    ],
    [
     "3",
     10,
     23
    ],
    [
     "4",
     5,
     28
    ],
    [
     "5",
     2,
     30
    ],
    [
     "Total",
     30,
     "—"
    ]
   ],
   "N": 30
  },
  "ask": "Determine la mediana.",
  "alts": [
   "$3$",
   "$15{,}5$",
   "$2{,}73$",
   "$4$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Datos ordenados, } n=30.",
  "pautaSteps": [
   "n=30\\text{ par} \\Rightarrow \\text{mediana} = \\text{promedio de los datos en posiciones } 15\\text{ y } 16",
   "x_{(15)}=3\\quad(F_{2}=13<15\\le F_{3}=23)",
   "x_{(16)}=3\\quad(F_{2}=13<16\\le F_{3}=23)",
   "\\text{Mediana} = \\dfrac{3+3}{2} = 3"
  ],
  "conc": "La mediana es <b>3</b>: al menos la mitad de los datos es menor o igual a 3 y al menos la mitad es mayor o igual."
 },
 {
  "tipo": "Moda desde tabla",
  "ctx": "Retail · Supermercado",
  "enun": "Se registró el número de productos por boleta en $n=30$ boletas. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$"
   ],
   "rows": [
    [
     "1",
     4,
     4
    ],
    [
     "2",
     9,
     13
    ],
    [
     "3",
     10,
     23
    ],
    [
     "4",
     5,
     28
    ],
    [
     "5",
     2,
     30
    ],
    [
     "Total",
     30,
     "—"
    ]
   ],
   "N": 30
  },
  "ask": "Determine la moda (si hay más de una, indíquelas todas).",
  "alts": [
   "$3$",
   "$10$",
   "Bimodal: 2 y 3",
   "$5$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Frecuencias por valor:}",
  "pautaSteps": [
   "f(1)=4,\\ f(2)=9,\\ f(3)=10,\\ f(4)=5,\\ f(5)=2",
   "\\text{El valor con mayor frecuencia es } 3\\ (f=10)"
  ],
  "conc": "La moda es <b>3</b>: es el valor con mayor frecuencia ($f=10$)."
 },
 {
  "tipo": "Media desde tabla",
  "ctx": "E-commerce · Reclamos",
  "enun": "Se registró el número de reclamos por semana en $n=30$ semanas. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$"
   ],
   "rows": [
    [
     "0",
     8,
     8
    ],
    [
     "1",
     11,
     19
    ],
    [
     "2",
     6,
     25
    ],
    [
     "3",
     3,
     28
    ],
    [
     "4",
     2,
     30
    ],
    [
     "Total",
     30,
     "—"
    ]
   ],
   "N": 30
  },
  "ask": "Calcule la media muestral $\\bar{x}$ (aproximada a 2 decimales).",
  "alts": [
   "$8{,}00$",
   "$2{,}00$",
   "$1{,}33$",
   "$1{,}00$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Datos con } n=30.",
  "pautaSteps": [
   "\\bar{x}=\\dfrac{1}{n}\\sum x_i f_i = \\dfrac{0\\cdot 8+1\\cdot 11+2\\cdot 6+3\\cdot 3+4\\cdot 2}{30} = \\dfrac{40}{30} = 1{,}33"
  ],
  "conc": "La media muestral es $\\bar{x} = 1{,}33$."
 },
 {
  "tipo": "Mediana desde tabla",
  "ctx": "E-commerce · Reclamos",
  "enun": "Se registró el número de reclamos por semana en $n=30$ semanas. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$"
   ],
   "rows": [
    [
     "0",
     8,
     8
    ],
    [
     "1",
     11,
     19
    ],
    [
     "2",
     6,
     25
    ],
    [
     "3",
     3,
     28
    ],
    [
     "4",
     2,
     30
    ],
    [
     "Total",
     30,
     "—"
    ]
   ],
   "N": 30
  },
  "ask": "Determine la mediana.",
  "alts": [
   "$15{,}5$",
   "$2$",
   "$1$",
   "$1{,}33$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Datos ordenados, } n=30.",
  "pautaSteps": [
   "n=30\\text{ par} \\Rightarrow \\text{mediana} = \\text{promedio de los datos en posiciones } 15\\text{ y } 16",
   "x_{(15)}=1\\quad(F_{1}=8<15\\le F_{2}=19)",
   "x_{(16)}=1\\quad(F_{1}=8<16\\le F_{2}=19)",
   "\\text{Mediana} = \\dfrac{1+1}{2} = 1"
  ],
  "conc": "La mediana es <b>1</b>: al menos la mitad de los datos es menor o igual a 1 y al menos la mitad es mayor o igual."
 },
 {
  "tipo": "Moda desde tabla",
  "ctx": "E-commerce · Reclamos",
  "enun": "Se registró el número de reclamos por semana en $n=30$ semanas. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$"
   ],
   "rows": [
    [
     "0",
     8,
     8
    ],
    [
     "1",
     11,
     19
    ],
    [
     "2",
     6,
     25
    ],
    [
     "3",
     3,
     28
    ],
    [
     "4",
     2,
     30
    ],
    [
     "Total",
     30,
     "—"
    ]
   ],
   "N": 30
  },
  "ask": "Determine la moda (si hay más de una, indíquelas todas).",
  "alts": [
   "$11$",
   "Bimodal: 0 y 1",
   "$4$",
   "$1$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Frecuencias por valor:}",
  "pautaSteps": [
   "f(0)=8,\\ f(1)=11,\\ f(2)=6,\\ f(3)=3,\\ f(4)=2",
   "\\text{El valor con mayor frecuencia es } 1\\ (f=11)"
  ],
  "conc": "La moda es <b>1</b>: es el valor con mayor frecuencia ($f=11$)."
 },
 {
  "tipo": "Media desde tabla",
  "ctx": "Finanzas · Facturación",
  "enun": "Se registró el número de días de atraso en $n=30$ facturas. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$"
   ],
   "rows": [
    [
     "0",
     12,
     12
    ],
    [
     "1",
     9,
     21
    ],
    [
     "2",
     5,
     26
    ],
    [
     "3",
     3,
     29
    ],
    [
     "4",
     1,
     30
    ],
    [
     "Total",
     30,
     "—"
    ]
   ],
   "N": 30
  },
  "ask": "Calcule la media muestral $\\bar{x}$ (aproximada a 2 decimales).",
  "alts": [
   "$1{,}07$",
   "$6{,}40$",
   "$2{,}00$",
   "$1{,}00$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Datos con } n=30.",
  "pautaSteps": [
   "\\bar{x}=\\dfrac{1}{n}\\sum x_i f_i = \\dfrac{0\\cdot 12+1\\cdot 9+2\\cdot 5+3\\cdot 3+4\\cdot 1}{30} = \\dfrac{32}{30} = 1{,}07"
  ],
  "conc": "La media muestral es $\\bar{x} = 1{,}07$."
 },
 {
  "tipo": "Mediana desde tabla",
  "ctx": "Finanzas · Facturación",
  "enun": "Se registró el número de días de atraso en $n=30$ facturas. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$"
   ],
   "rows": [
    [
     "0",
     12,
     12
    ],
    [
     "1",
     9,
     21
    ],
    [
     "2",
     5,
     26
    ],
    [
     "3",
     3,
     29
    ],
    [
     "4",
     1,
     30
    ],
    [
     "Total",
     30,
     "—"
    ]
   ],
   "N": 30
  },
  "ask": "Determine la mediana.",
  "alts": [
   "$15{,}5$",
   "$2$",
   "$0$",
   "$1$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Datos ordenados, } n=30.",
  "pautaSteps": [
   "n=30\\text{ par} \\Rightarrow \\text{mediana} = \\text{promedio de los datos en posiciones } 15\\text{ y } 16",
   "x_{(15)}=1\\quad(F_{1}=12<15\\le F_{2}=21)",
   "x_{(16)}=1\\quad(F_{1}=12<16\\le F_{2}=21)",
   "\\text{Mediana} = \\dfrac{1+1}{2} = 1"
  ],
  "conc": "La mediana es <b>1</b>: al menos la mitad de los datos es menor o igual a 1 y al menos la mitad es mayor o igual."
 },
 {
  "tipo": "Moda desde tabla",
  "ctx": "Finanzas · Facturación",
  "enun": "Se registró el número de días de atraso en $n=30$ facturas. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$"
   ],
   "rows": [
    [
     "0",
     12,
     12
    ],
    [
     "1",
     9,
     21
    ],
    [
     "2",
     5,
     26
    ],
    [
     "3",
     3,
     29
    ],
    [
     "4",
     1,
     30
    ],
    [
     "Total",
     30,
     "—"
    ]
   ],
   "N": 30
  },
  "ask": "Determine la moda (si hay más de una, indíquelas todas).",
  "alts": [
   "$12$",
   "$0$",
   "Bimodal: 0 y 1",
   "$1$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Frecuencias por valor:}",
  "pautaSteps": [
   "f(0)=12,\\ f(1)=9,\\ f(2)=5,\\ f(3)=3,\\ f(4)=1",
   "\\text{El valor con mayor frecuencia es } 0\\ (f=12)"
  ],
  "conc": "La moda es <b>0</b>: es el valor con mayor frecuencia ($f=12$)."
 },
 {
  "tipo": "Media desde tabla",
  "ctx": "Laboral · Horas extra",
  "enun": "Se registró el número de horas extra trabajadas en $n=30$ empleados. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$"
   ],
   "rows": [
    [
     "0",
     7,
     7
    ],
    [
     "1",
     10,
     17
    ],
    [
     "2",
     8,
     25
    ],
    [
     "3",
     3,
     28
    ],
    [
     "4",
     2,
     30
    ],
    [
     "Total",
     30,
     "—"
    ]
   ],
   "N": 30
  },
  "ask": "Calcule la media muestral $\\bar{x}$ (aproximada a 2 decimales).",
  "alts": [
   "$8{,}60$",
   "$2{,}00$",
   "$1{,}43$",
   "$1{,}00$"
  ],
  "correct": 2,
  "pautaHead": "\\text{Datos con } n=30.",
  "pautaSteps": [
   "\\bar{x}=\\dfrac{1}{n}\\sum x_i f_i = \\dfrac{0\\cdot 7+1\\cdot 10+2\\cdot 8+3\\cdot 3+4\\cdot 2}{30} = \\dfrac{43}{30} = 1{,}43"
  ],
  "conc": "La media muestral es $\\bar{x} = 1{,}43$."
 },
 {
  "tipo": "Mediana desde tabla",
  "ctx": "Laboral · Horas extra",
  "enun": "Se registró el número de horas extra trabajadas en $n=30$ empleados. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$"
   ],
   "rows": [
    [
     "0",
     7,
     7
    ],
    [
     "1",
     10,
     17
    ],
    [
     "2",
     8,
     25
    ],
    [
     "3",
     3,
     28
    ],
    [
     "4",
     2,
     30
    ],
    [
     "Total",
     30,
     "—"
    ]
   ],
   "N": 30
  },
  "ask": "Determine la mediana.",
  "alts": [
   "$1$",
   "$15{,}5$",
   "$2$",
   "$1{,}43$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Datos ordenados, } n=30.",
  "pautaSteps": [
   "n=30\\text{ par} \\Rightarrow \\text{mediana} = \\text{promedio de los datos en posiciones } 15\\text{ y } 16",
   "x_{(15)}=1\\quad(F_{1}=7<15\\le F_{2}=17)",
   "x_{(16)}=1\\quad(F_{1}=7<16\\le F_{2}=17)",
   "\\text{Mediana} = \\dfrac{1+1}{2} = 1"
  ],
  "conc": "La mediana es <b>1</b>: al menos la mitad de los datos es menor o igual a 1 y al menos la mitad es mayor o igual."
 },
 {
  "tipo": "Moda desde tabla",
  "ctx": "Laboral · Horas extra",
  "enun": "Se registró el número de horas extra trabajadas en $n=30$ empleados. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$"
   ],
   "rows": [
    [
     "0",
     7,
     7
    ],
    [
     "1",
     10,
     17
    ],
    [
     "2",
     8,
     25
    ],
    [
     "3",
     3,
     28
    ],
    [
     "4",
     2,
     30
    ],
    [
     "Total",
     30,
     "—"
    ]
   ],
   "N": 30
  },
  "ask": "Determine la moda (si hay más de una, indíquelas todas).",
  "alts": [
   "$10$",
   "$1$",
   "Bimodal: 1 y 2",
   "$4$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Frecuencias por valor:}",
  "pautaSteps": [
   "f(0)=7,\\ f(1)=10,\\ f(2)=8,\\ f(3)=3,\\ f(4)=2",
   "\\text{El valor con mayor frecuencia es } 1\\ (f=10)"
  ],
  "conc": "La moda es <b>1</b>: es el valor con mayor frecuencia ($f=10$)."
 },
 {
  "tipo": "Media desde tabla",
  "ctx": "Hogar · Conectividad",
  "enun": "Se registró el número de dispositivos conectados a wifi en $n=30$ hogares. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$"
   ],
   "rows": [
    [
     "3",
     3,
     3
    ],
    [
     "4",
     9,
     12
    ],
    [
     "5",
     10,
     22
    ],
    [
     "6",
     5,
     27
    ],
    [
     "7",
     3,
     30
    ],
    [
     "Total",
     30,
     "—"
    ]
   ],
   "N": 30
  },
  "ask": "Calcule la media muestral $\\bar{x}$ (aproximada a 2 decimales).",
  "alts": [
   "$29{,}20$",
   "$5{,}00$",
   "$5{,}03$",
   "$4{,}87$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Datos con } n=30.",
  "pautaSteps": [
   "\\bar{x}=\\dfrac{1}{n}\\sum x_i f_i = \\dfrac{3\\cdot 3+4\\cdot 9+5\\cdot 10+6\\cdot 5+7\\cdot 3}{30} = \\dfrac{146}{30} = 4{,}87"
  ],
  "conc": "La media muestral es $\\bar{x} = 4{,}87$."
 },
 {
  "tipo": "Mediana desde tabla",
  "ctx": "Hogar · Conectividad",
  "enun": "Se registró el número de dispositivos conectados a wifi en $n=30$ hogares. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$"
   ],
   "rows": [
    [
     "3",
     3,
     3
    ],
    [
     "4",
     9,
     12
    ],
    [
     "5",
     10,
     22
    ],
    [
     "6",
     5,
     27
    ],
    [
     "7",
     3,
     30
    ],
    [
     "Total",
     30,
     "—"
    ]
   ],
   "N": 30
  },
  "ask": "Determine la mediana.",
  "alts": [
   "$5$",
   "$15{,}5$",
   "$4{,}87$",
   "$6$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Datos ordenados, } n=30.",
  "pautaSteps": [
   "n=30\\text{ par} \\Rightarrow \\text{mediana} = \\text{promedio de los datos en posiciones } 15\\text{ y } 16",
   "x_{(15)}=5\\quad(F_{2}=12<15\\le F_{3}=22)",
   "x_{(16)}=5\\quad(F_{2}=12<16\\le F_{3}=22)",
   "\\text{Mediana} = \\dfrac{5+5}{2} = 5"
  ],
  "conc": "La mediana es <b>5</b>: al menos la mitad de los datos es menor o igual a 5 y al menos la mitad es mayor o igual."
 },
 {
  "tipo": "Moda desde tabla",
  "ctx": "Hogar · Conectividad",
  "enun": "Se registró el número de dispositivos conectados a wifi en $n=30$ hogares. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$"
   ],
   "rows": [
    [
     "3",
     3,
     3
    ],
    [
     "4",
     9,
     12
    ],
    [
     "5",
     10,
     22
    ],
    [
     "6",
     5,
     27
    ],
    [
     "7",
     3,
     30
    ],
    [
     "Total",
     30,
     "—"
    ]
   ],
   "N": 30
  },
  "ask": "Determine la moda (si hay más de una, indíquelas todas).",
  "alts": [
   "$10$",
   "Bimodal: 4 y 5",
   "$7$",
   "$5$"
  ],
  "correct": 3,
  "pautaHead": "\\text{Frecuencias por valor:}",
  "pautaSteps": [
   "f(3)=3,\\ f(4)=9,\\ f(5)=10,\\ f(6)=5,\\ f(7)=3",
   "\\text{El valor con mayor frecuencia es } 5\\ (f=10)"
  ],
  "conc": "La moda es <b>5</b>: es el valor con mayor frecuencia ($f=10$)."
 },
 {
  "tipo": "Media desde tabla",
  "ctx": "Educación · Matrícula",
  "enun": "Se registró el número de hijos matriculados en $n=30$ familias. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$"
   ],
   "rows": [
    [
     "0",
     8,
     8
    ],
    [
     "1",
     12,
     20
    ],
    [
     "2",
     7,
     27
    ],
    [
     "3",
     3,
     30
    ],
    [
     "Total",
     30,
     "—"
    ]
   ],
   "N": 30
  },
  "ask": "Calcule la media muestral $\\bar{x}$ (aproximada a 2 decimales).",
  "alts": [
   "$8{,}75$",
   "$1{,}17$",
   "$1{,}50$",
   "$1{,}00$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Datos con } n=30.",
  "pautaSteps": [
   "\\bar{x}=\\dfrac{1}{n}\\sum x_i f_i = \\dfrac{0\\cdot 8+1\\cdot 12+2\\cdot 7+3\\cdot 3}{30} = \\dfrac{35}{30} = 1{,}17"
  ],
  "conc": "La media muestral es $\\bar{x} = 1{,}17$."
 },
 {
  "tipo": "Mediana desde tabla",
  "ctx": "Educación · Matrícula",
  "enun": "Se registró el número de hijos matriculados en $n=30$ familias. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$"
   ],
   "rows": [
    [
     "0",
     8,
     8
    ],
    [
     "1",
     12,
     20
    ],
    [
     "2",
     7,
     27
    ],
    [
     "3",
     3,
     30
    ],
    [
     "Total",
     30,
     "—"
    ]
   ],
   "N": 30
  },
  "ask": "Determine la mediana.",
  "alts": [
   "$15{,}5$",
   "$1$",
   "$1{,}17$",
   "$2$"
  ],
  "correct": 1,
  "pautaHead": "\\text{Datos ordenados, } n=30.",
  "pautaSteps": [
   "n=30\\text{ par} \\Rightarrow \\text{mediana} = \\text{promedio de los datos en posiciones } 15\\text{ y } 16",
   "x_{(15)}=1\\quad(F_{1}=8<15\\le F_{2}=20)",
   "x_{(16)}=1\\quad(F_{1}=8<16\\le F_{2}=20)",
   "\\text{Mediana} = \\dfrac{1+1}{2} = 1"
  ],
  "conc": "La mediana es <b>1</b>: al menos la mitad de los datos es menor o igual a 1 y al menos la mitad es mayor o igual."
 },
 {
  "tipo": "Moda desde tabla",
  "ctx": "Educación · Matrícula",
  "enun": "Se registró el número de hijos matriculados en $n=30$ familias. La tabla de frecuencias es:",
  "table": {
   "head": [
    "$x_i$",
    "$f_i$",
    "$F_i$"
   ],
   "rows": [
    [
     "0",
     8,
     8
    ],
    [
     "1",
     12,
     20
    ],
    [
     "2",
     7,
     27
    ],
    [
     "3",
     3,
     30
    ],
    [
     "Total",
     30,
     "—"
    ]
   ],
   "N": 30
  },
  "ask": "Determine la moda (si hay más de una, indíquelas todas).",
  "alts": [
   "$1$",
   "$12$",
   "Bimodal: 0 y 1",
   "$3$"
  ],
  "correct": 0,
  "pautaHead": "\\text{Frecuencias por valor:}",
  "pautaSteps": [
   "f(0)=8,\\ f(1)=12,\\ f(2)=7,\\ f(3)=3",
   "\\text{El valor con mayor frecuencia es } 1\\ (f=12)"
  ],
  "conc": "La moda es <b>1</b>: es el valor con mayor frecuencia ($f=12$)."
 }
];
