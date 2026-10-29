// Banco de 20 ejercicios de Probabilidades con la Distribucion Normal (guia oficial Fabimath)
const NM_QUESTIONS = [
{
"tipo": "P(X<x) — cola inferior",
"ctx": "Veterinaria · Biometría felina",
"enun": "Sea X el peso corporal de gatos domésticos adultos, con X ~ N(μ=4,5 kg; σ=0,9 kg). ¿Cuál es la probabilidad de que un gato pese menos de 3,8 kg?",
"ask": "La probabilidad pedida es:",
"alts": [
"$P = 0{,}2177$",
"$P = 0{,}7823$",
"$P = 0{,}1949$",
"$P = 0{,}8051$"
],
"correct": 0,
"pautaHead": "\\textbf{Datos:}\\ \\mu=4{,}5,\\ \\sigma=0{,}9,\\ x=3{,}8.",
"pautaSteps": [
"Z=\\dfrac{X-\\mu}{\\sigma}=\\dfrac{3{,}8-4{,}5}{0{,}9}=−0{,}778\\approx −0{,}78",
"\\Phi(−0{,}78)=0{,}2177\\quad\\text{(tabla normal estándar)}",
"P(X<3{,}8)=\\Phi(−0{,}78)=0{,}2177"
],
"conc": "La probabilidad de que un gato pese menos de 3,8 kg es 0,2177 (≈ 21,77%)."
},
{
"tipo": "P(X>x) — complemento 1−Φ(z)",
"ctx": "Veterinaria · Fisiología canina",
"enun": "Sea X la frecuencia cardíaca en reposo de perros Golden Retriever, con X ~ N(μ=85 lpm; σ=7 lpm). ¿Cuál es la probabilidad de que un perro tenga una frecuencia mayor a 96 lpm?",
"ask": "La probabilidad pedida es:",
"alts": [
"$P = 0{,}0582$",
"$P = 0{,}9418$",
"$P = 0{,}4129$",
"$P = 0{,}5871$"
],
"correct": 0,
"pautaHead": "\\textbf{Datos:}\\ \\mu=85,\\ \\sigma=7,\\ x=96.",
"pautaSteps": [
"Z=\\dfrac{X-\\mu}{\\sigma}=\\dfrac{96-85}{7}=1{,}571\\approx 1{,}57",
"\\Phi(1{,}57)=0{,}9418\\quad\\text{(tabla normal estándar)}",
"P(X>96)=1-\\Phi(1{,}57)=0{,}0582"
],
"conc": "La probabilidad de que un perro tenga una frecuencia mayor a 96 lpm es 0,0582 (≈ 5,82%)."
},
{
"tipo": "P(x₁<X<x₂) — Φ(z₂)−Φ(z₁)",
"ctx": "Veterinaria · Bienestar animal",
"enun": "Sea X la temperatura rectal de bovinos sanos, con X ~ N(μ=38,5 °C; σ=0,8 °C). ¿Cuál es la probabilidad de que un bovino tenga una temperatura entre 37,9 °C y 39,3 °C?",
"ask": "La probabilidad pedida es:",
"alts": [
"$P = 0{,}6147$",
"$P = 0{,}8413$",
"$P = 0{,}3853$",
"$P = 0{,}2266$"
],
"correct": 0,
"pautaHead": "\\textbf{Datos:}\\ \\mu=38{,}5,\\ \\sigma=0{,}8,\\ x_1=37{,}9,\\ x_2=39{,}3.",
"pautaSteps": [
"Z_1=\\dfrac{37{,}9-38{,}5}{0{,}8}=−0{,}75\\;;\\quad Z_2=\\dfrac{39{,}3-38{,}5}{0{,}8}=1{,}00",
"\\Phi(−0{,}75)=0{,}2266\\;;\\quad \\Phi(1{,}00)=0{,}8413",
"P(37{,}9<X<39{,}3)=\\Phi(1{,}00)-\\Phi(−0{,}75)=0{,}6147"
],
"conc": "La probabilidad de que un bovino tenga una temperatura entre 37,9 °C y 39,3 °C es 0,6147 (≈ 61,47%)."
},
{
"tipo": "P(X<x) — cola inferior",
"ctx": "Veterinaria · Producción bovina",
"enun": "Sea X el peso al nacer de terneros Holstein, con X ~ N(μ=39 kg; σ=4 kg). ¿Cuál es la probabilidad de que un ternero pese menos de 33 kg?",
"ask": "La probabilidad pedida es:",
"alts": [
"$P = 0{,}0668$",
"$P = 0{,}9332$",
"$P = 0{,}3520$",
"$P = 0{,}6480$"
],
"correct": 0,
"pautaHead": "\\textbf{Datos:}\\ \\mu=39,\\ \\sigma=4,\\ x=33.",
"pautaSteps": [
"Z=\\dfrac{X-\\mu}{\\sigma}=\\dfrac{33-39}{4}=−1{,}50",
"\\Phi(−1{,}50)=0{,}0668\\quad\\text{(tabla normal estándar)}",
"P(X<33)=\\Phi(−1{,}50)=0{,}0668"
],
"conc": "La probabilidad de que un ternero pese menos de 33 kg es 0,0668 (≈ 6,68%)."
},
{
"tipo": "P(x₁<X<x₂) — Φ(z₂)−Φ(z₁)",
"ctx": "Veterinaria · Química clínica",
"enun": "Sea X la glucemia de conejos de laboratorio, con X ~ N(μ=150 mg/dL; σ=18 mg/dL). ¿Cuál es la probabilidad de que la glucemia esté entre 132 y 168 mg/dL?",
"ask": "La probabilidad pedida es:",
"alts": [
"$P = 0{,}6826$",
"$P = 0{,}8413$",
"$P = 0{,}3174$",
"$P = 0{,}1587$"
],
"correct": 0,
"pautaHead": "\\textbf{Datos:}\\ \\mu=150,\\ \\sigma=18,\\ x_1=132,\\ x_2=168.",
"pautaSteps": [
"Z_1=\\dfrac{132-150}{18}=−1{,}00\\;;\\quad Z_2=\\dfrac{168-150}{18}=1{,}00",
"\\Phi(−1{,}00)=0{,}1587\\;;\\quad \\Phi(1{,}00)=0{,}8413",
"P(132<X<168)=\\Phi(1{,}00)-\\Phi(−1{,}00)=0{,}6826"
],
"conc": "La probabilidad de que la glucemia esté entre 132 y 168 mg/dL es 0,6826 (≈ 68,26%)."
},
{
"tipo": "P(X>x) — complemento 1−Φ(z)",
"ctx": "Enfermería · Cardiología",
"enun": "Sea X la presión arterial sistólica de adultos mayores, con X ~ N(μ=138 mmHg; σ=15 mmHg). ¿Cuál es la probabilidad de que un paciente tenga una presión mayor a 160 mmHg?",
"ask": "La probabilidad pedida es:",
"alts": [
"$P = 0{,}0708$",
"$P = 0{,}9292$",
"$P = 0{,}4602$",
"$P = 0{,}5398$"
],
"correct": 0,
"pautaHead": "\\textbf{Datos:}\\ \\mu=138,\\ \\sigma=15,\\ x=160.",
"pautaSteps": [
"Z=\\dfrac{X-\\mu}{\\sigma}=\\dfrac{160-138}{15}=1{,}467\\approx 1{,}47",
"\\Phi(1{,}47)=0{,}9292\\quad\\text{(tabla normal estándar)}",
"P(X>160)=1-\\Phi(1{,}47)=0{,}0708"
],
"conc": "La probabilidad de que un paciente tenga una presión mayor a 160 mmHg es 0,0708 (≈ 7,08%)."
},
{
"tipo": "P(x₁<X<x₂) — Φ(z₂)−Φ(z₁)",
"ctx": "Enfermería · Neumología",
"enun": "Sea X la saturación de oxígeno (SpO2) en pacientes con EPOC leve, con X ~ N(μ=93%; σ=3,1%). ¿Cuál es la probabilidad de que la SpO2 esté entre 89,9% y 96,1%?",
"ask": "La probabilidad pedida es:",
"alts": [
"$P = 0{,}6826$",
"$P = 0{,}8413$",
"$P = 0{,}3174$",
"$P = 0{,}1587$"
],
"correct": 0,
"pautaHead": "\\textbf{Datos:}\\ \\mu=93,\\ \\sigma=3{,}1,\\ x_1=89{,}9,\\ x_2=96{,}1.",
"pautaSteps": [
"Z_1=\\dfrac{89{,}9-93}{3{,}1}=−1{,}00\\;;\\quad Z_2=\\dfrac{96{,}1-93}{3{,}1}=1{,}00",
"\\Phi(−1{,}00)=0{,}1587\\;;\\quad \\Phi(1{,}00)=0{,}8413",
"P(89{,}9<X<96{,}1)=\\Phi(1{,}00)-\\Phi(−1{,}00)=0{,}6826"
],
"conc": "La probabilidad de que la SpO2 esté entre 89,9% y 96,1% es 0,6826 (≈ 68,26%)."
},
{
"tipo": "P(X<x) — cola inferior",
"ctx": "Enfermería · Endocrinología",
"enun": "Sea X la hemoglobina glicosilada (HbA1c) en diabéticos tipo 2, con X ~ N(μ=7,8%; σ=1,2%). ¿Cuál es la probabilidad de que un paciente tenga una HbA1c menor a 6,5%?",
"ask": "La probabilidad pedida es:",
"alts": [
"$P = 0{,}1401$",
"$P = 0{,}8599$",
"$P = 0{,}1841$",
"$P = 0{,}8159$"
],
"correct": 0,
"pautaHead": "\\textbf{Datos:}\\ \\mu=7{,}8,\\ \\sigma=1{,}2,\\ x=6{,}5.",
"pautaSteps": [
"Z=\\dfrac{X-\\mu}{\\sigma}=\\dfrac{6{,}5-7{,}8}{1{,}2}=−1{,}083\\approx −1{,}08",
"\\Phi(−1{,}08)=0{,}1401\\quad\\text{(tabla normal estándar)}",
"P(X<6{,}5)=\\Phi(−1{,}08)=0{,}1401"
],
"conc": "La probabilidad de que un paciente tenga una HbA1c menor a 6,5% es 0,1401 (≈ 14,01%)."
},
{
"tipo": "P(X>x) — complemento 1−Φ(z)",
"ctx": "Enfermería · Gestión clínica",
"enun": "Sea X el tiempo de administración de medicamentos endovenosos, con X ~ N(μ=12,5 min; σ=2,5 min). ¿Cuál es la probabilidad de que un procedimiento demore más de 16 minutos?",
"ask": "La probabilidad pedida es:",
"alts": [
"$P = 0{,}0808$",
"$P = 0{,}9192$",
"$P = 0{,}2877$",
"$P = 0{,}7123$"
],
"correct": 0,
"pautaHead": "\\textbf{Datos:}\\ \\mu=12{,}5,\\ \\sigma=2{,}5,\\ x=16.",
"pautaSteps": [
"Z=\\dfrac{X-\\mu}{\\sigma}=\\dfrac{16-12{,}5}{2{,}5}=1{,}40",
"\\Phi(1{,}40)=0{,}9192\\quad\\text{(tabla normal estándar)}",
"P(X>16)=1-\\Phi(1{,}40)=0{,}0808"
],
"conc": "La probabilidad de que un procedimiento demore más de 16 minutos es 0,0808 (≈ 8,08%)."
},
{
"tipo": "P(x₁<X<x₂) — Φ(z₂)−Φ(z₁)",
"ctx": "Enfermería · Manejo del dolor",
"enun": "Sea X el dolor postoperatorio (EVA 0–10) en cirugía abdominal, con X ~ N(μ=5,2; σ=1,9). ¿Cuál es la probabilidad de que el puntaje esté entre 3,3 y 7,1?",
"ask": "La probabilidad pedida es:",
"alts": [
"$P = 0{,}6826$",
"$P = 0{,}8413$",
"$P = 0{,}3174$",
"$P = 0{,}1587$"
],
"correct": 0,
"pautaHead": "\\textbf{Datos:}\\ \\mu=5{,}2,\\ \\sigma=1{,}9,\\ x_1=3{,}3,\\ x_2=7{,}1.",
"pautaSteps": [
"Z_1=\\dfrac{3{,}3-5{,}2}{1{,}9}=−1{,}00\\;;\\quad Z_2=\\dfrac{7{,}1-5{,}2}{1{,}9}=1{,}00",
"\\Phi(−1{,}00)=0{,}1587\\;;\\quad \\Phi(1{,}00)=0{,}8413",
"P(3{,}3<X<7{,}1)=\\Phi(1{,}00)-\\Phi(−1{,}00)=0{,}6826"
],
"conc": "La probabilidad de que el puntaje esté entre 3,3 y 7,1 es 0,6826 (≈ 68,26%)."
},
{
"tipo": "P(X<x) — cola inferior",
"ctx": "Obstetricia · Neonatología",
"enun": "Sea X el peso al nacer de recién nacidos de término, con X ~ N(μ=3.400 g; σ=450 g). ¿Cuál es la probabilidad de que un recién nacido pese menos de 2.500 g (bajo peso al nacer)?",
"ask": "La probabilidad pedida es:",
"alts": [
"$P = 0{,}0228$",
"$P = 0{,}9772$",
"$P = 0{,}4772$",
"$P = 0{,}0456$"
],
"correct": 0,
"pautaHead": "\\textbf{Datos:}\\ \\mu=3400,\\ \\sigma=450,\\ x=2500.",
"pautaSteps": [
"Z=\\dfrac{X-\\mu}{\\sigma}=\\dfrac{2500-3400}{450}=−2{,}00",
"\\Phi(−2{,}00)=0{,}0228\\quad\\text{(tabla normal estándar)}",
"P(X<2500)=\\Phi(−2{,}00)=0{,}0228"
],
"conc": "La probabilidad de que un recién nacido pese menos de 2.500 g (bajo peso al nacer) es 0,0228 (≈ 2,28%)."
},
{
"tipo": "P(x₁<X<x₂) — Φ(z₂)−Φ(z₁)",
"ctx": "Obstetricia · Edad gestacional",
"enun": "Sea X la edad gestacional al parto, con X ~ N(μ=39,2 sem; σ=1,4 sem). ¿Cuál es la probabilidad de que el parto ocurra entre las 37 y las 41 semanas?",
"ask": "La probabilidad pedida es:",
"alts": [
"$P = 0{,}8433$",
"$P = 0{,}9015$",
"$P = 0{,}1567$",
"$P = 0{,}0582$"
],
"correct": 0,
"pautaHead": "\\textbf{Datos:}\\ \\mu=39{,}2,\\ \\sigma=1{,}4,\\ x_1=37,\\ x_2=41.",
"pautaSteps": [
"Z_1=\\dfrac{37-39{,}2}{1{,}4}=−1{,}571\\approx −1{,}57\\;;\\quad Z_2=\\dfrac{41-39{,}2}{1{,}4}=1{,}286\\approx 1{,}29",
"\\Phi(−1{,}57)=0{,}0582\\;;\\quad \\Phi(1{,}29)=0{,}9015",
"P(37<X<41)=\\Phi(1{,}29)-\\Phi(−1{,}57)=0{,}8433"
],
"conc": "La probabilidad de que el parto ocurra entre las 37 y las 41 semanas es 0,8433 (≈ 84,33%)."
},
{
"tipo": "P(X>x) — complemento 1−Φ(z)",
"ctx": "Obstetricia · Puerperio",
"enun": "Sea X el volumen de loquios en las primeras 24 h postparto, con X ~ N(μ=320 mL; σ=90 mL). ¿Cuál es la probabilidad de que una puérpera presente más de 500 mL (hemorragia postparto)?",
"ask": "La probabilidad pedida es:",
"alts": [
"$P = 0{,}0228$",
"$P = 0{,}9772$",
"$P = 0{,}4772$",
"$P = 0{,}0456$"
],
"correct": 0,
"pautaHead": "\\textbf{Datos:}\\ \\mu=320,\\ \\sigma=90,\\ x=500.",
"pautaSteps": [
"Z=\\dfrac{X-\\mu}{\\sigma}=\\dfrac{500-320}{90}=2{,}00",
"\\Phi(2{,}00)=0{,}9772\\quad\\text{(tabla normal estándar)}",
"P(X>500)=1-\\Phi(2{,}00)=0{,}0228"
],
"conc": "La probabilidad de que una puérpera presente más de 500 mL (hemorragia postparto) es 0,0228 (≈ 2,28%)."
},
{
"tipo": "P(X<x) — cola inferior",
"ctx": "Obstetricia · Biometría neonatal",
"enun": "Sea X el perímetro cefálico al nacer, con X ~ N(μ=34,5 cm; σ=1,6 cm). ¿Cuál es la probabilidad de que un neonato tenga un perímetro menor a 32,1 cm (compatible con microcefalia)?",
"ask": "La probabilidad pedida es:",
"alts": [
"$P = 0{,}0668$",
"$P = 0{,}9332$",
"$P = 0{,}1736$",
"$P = 0{,}8264$"
],
"correct": 0,
"pautaHead": "\\textbf{Datos:}\\ \\mu=34{,}5,\\ \\sigma=1{,}6,\\ x=32{,}1.",
"pautaSteps": [
"Z=\\dfrac{X-\\mu}{\\sigma}=\\dfrac{32{,}1-34{,}5}{1{,}6}=−1{,}50",
"\\Phi(−1{,}50)=0{,}0668\\quad\\text{(tabla normal estándar)}",
"P(X<32{,}1)=\\Phi(−1{,}50)=0{,}0668"
],
"conc": "La probabilidad de que un neonato tenga un perímetro menor a 32,1 cm (compatible con microcefalia) es 0,0668 (≈ 6,68%)."
},
{
"tipo": "P(x₁<X<x₂) — Φ(z₂)−Φ(z₁)",
"ctx": "Obstetricia · Nutrición gestacional",
"enun": "Sea X la ganancia de peso gestacional total (IMC normal), con X ~ N(μ=12,5 kg; σ=4 kg). ¿Cuál es la probabilidad de que una embarazada gane entre 8,5 kg y 16,5 kg?",
"ask": "La probabilidad pedida es:",
"alts": [
"$P = 0{,}6826$",
"$P = 0{,}8413$",
"$P = 0{,}3174$",
"$P = 0{,}1587$"
],
"correct": 0,
"pautaHead": "\\textbf{Datos:}\\ \\mu=12{,}5,\\ \\sigma=4,\\ x_1=8{,}5,\\ x_2=16{,}5.",
"pautaSteps": [
"Z_1=\\dfrac{8{,}5-12{,}5}{4}=−1{,}00\\;;\\quad Z_2=\\dfrac{16{,}5-12{,}5}{4}=1{,}00",
"\\Phi(−1{,}00)=0{,}1587\\;;\\quad \\Phi(1{,}00)=0{,}8413",
"P(8{,}5<X<16{,}5)=\\Phi(1{,}00)-\\Phi(−1{,}00)=0{,}6826"
],
"conc": "La probabilidad de que una embarazada gane entre 8,5 kg y 16,5 kg es 0,6826 (≈ 68,26%)."
},
{
"tipo": "P(X>x) — complemento 1−Φ(z)",
"ctx": "Kinesiología · Rehabilitación",
"enun": "Sea X el rango de flexión de rodilla a 8 semanas post-LCA, con X ~ N(μ=110°; σ=10°). ¿Cuál es la probabilidad de que un paciente supere los 125° de flexión?",
"ask": "La probabilidad pedida es:",
"alts": [
"$P = 0{,}0668$",
"$P = 0{,}9332$",
"$P = 0{,}4404$",
"$P = 0{,}5596$"
],
"correct": 0,
"pautaHead": "\\textbf{Datos:}\\ \\mu=110,\\ \\sigma=10,\\ x=125.",
"pautaSteps": [
"Z=\\dfrac{X-\\mu}{\\sigma}=\\dfrac{125-110}{10}=1{,}50",
"\\Phi(1{,}50)=0{,}9332\\quad\\text{(tabla normal estándar)}",
"P(X>125)=1-\\Phi(1{,}50)=0{,}0668"
],
"conc": "La probabilidad de que un paciente supere los 125° de flexión es 0,0668 (≈ 6,68%)."
},
{
"tipo": "P(X<x) — cola inferior",
"ctx": "Kinesiología · Geriatría",
"enun": "Sea X la fuerza de prensión palmar en adultos mayores, con X ~ N(μ=18,5 kg; σ=4,3 kg). ¿Cuál es la probabilidad de que un residente tenga una fuerza menor a 12 kg (sarcopenia severa)?",
"ask": "La probabilidad pedida es:",
"alts": [
"$P = 0{,}0655$",
"$P = 0{,}9345$",
"$P = 0{,}3632$",
"$P = 0{,}6368$"
],
"correct": 0,
"pautaHead": "\\textbf{Datos:}\\ \\mu=18{,}5,\\ \\sigma=4{,}3,\\ x=12.",
"pautaSteps": [
"Z=\\dfrac{X-\\mu}{\\sigma}=\\dfrac{12-18{,}5}{4{,}3}=−1{,}512\\approx −1{,}51",
"\\Phi(−1{,}51)=0{,}0655\\quad\\text{(tabla normal estándar)}",
"P(X<12)=\\Phi(−1{,}51)=0{,}0655"
],
"conc": "La probabilidad de que un residente tenga una fuerza menor a 12 kg (sarcopenia severa) es 0,0655 (≈ 6,55%)."
},
{
"tipo": "P(x₁<X<x₂) — Φ(z₂)−Φ(z₁)",
"ctx": "Kinesiología · Respiratoria",
"enun": "Sea X el VEF1 en hombres de 40 años sanos, con X ~ N(μ=3,8 L; σ=0,55 L). ¿Cuál es la probabilidad de que el VEF1 esté entre 3,25 L y 4,35 L?",
"ask": "La probabilidad pedida es:",
"alts": [
"$P = 0{,}6826$",
"$P = 0{,}8413$",
"$P = 0{,}3174$",
"$P = 0{,}1587$"
],
"correct": 0,
"pautaHead": "\\textbf{Datos:}\\ \\mu=3{,}8,\\ \\sigma=0{,}55,\\ x_1=3{,}25,\\ x_2=4{,}35.",
"pautaSteps": [
"Z_1=\\dfrac{3{,}25-3{,}8}{0{,}55}=−1{,}00\\;;\\quad Z_2=\\dfrac{4{,}35-3{,}8}{0{,}55}=1{,}00",
"\\Phi(−1{,}00)=0{,}1587\\;;\\quad \\Phi(1{,}00)=0{,}8413",
"P(3{,}25<X<4{,}35)=\\Phi(1{,}00)-\\Phi(−1{,}00)=0{,}6826"
],
"conc": "La probabilidad de que el VEF1 esté entre 3,25 L y 4,35 L es 0,6826 (≈ 68,26%)."
},
{
"tipo": "P(X>x) — complemento 1−Φ(z)",
"ctx": "Kinesiología · Neurología",
"enun": "Sea X el tiempo de ciclo de marcha en adultos sanos, con X ~ N(μ=1,08 s; σ=0,08 s). ¿Cuál es la probabilidad de que una persona presente un tiempo mayor a 1,24 s (riesgo de caída)?",
"ask": "La probabilidad pedida es:",
"alts": [
"$P = 0{,}0228$",
"$P = 0{,}9772$",
"$P = 0{,}4772$",
"$P = 0{,}0456$"
],
"correct": 0,
"pautaHead": "\\textbf{Datos:}\\ \\mu=1{,}08,\\ \\sigma=0{,}08,\\ x=1{,}24.",
"pautaSteps": [
"Z=\\dfrac{X-\\mu}{\\sigma}=\\dfrac{1{,}24-1{,}08}{0{,}08}=2{,}00",
"\\Phi(2{,}00)=0{,}9772\\quad\\text{(tabla normal estándar)}",
"P(X>1{,}24)=1-\\Phi(2{,}00)=0{,}0228"
],
"conc": "La probabilidad de que una persona presente un tiempo mayor a 1,24 s (riesgo de caída) es 0,0228 (≈ 2,28%)."
},
{
"tipo": "P(x₁<X<x₂) — Φ(z₂)−Φ(z₁)",
"ctx": "Kinesiología · Deporte",
"enun": "Sea X la potencia anaeróbica pico (Wingate) en ciclistas recreativos, con X ~ N(μ=680 W; σ=98 W). ¿Cuál es la probabilidad de que la potencia esté entre 582 W y 778 W?",
"ask": "La probabilidad pedida es:",
"alts": [
"$P = 0{,}6826$",
"$P = 0{,}8413$",
"$P = 0{,}3174$",
"$P = 0{,}1587$"
],
"correct": 0,
"pautaHead": "\\textbf{Datos:}\\ \\mu=680,\\ \\sigma=98,\\ x_1=582,\\ x_2=778.",
"pautaSteps": [
"Z_1=\\dfrac{582-680}{98}=−1{,}00\\;;\\quad Z_2=\\dfrac{778-680}{98}=1{,}00",
"\\Phi(−1{,}00)=0{,}1587\\;;\\quad \\Phi(1{,}00)=0{,}8413",
"P(582<X<778)=\\Phi(1{,}00)-\\Phi(−1{,}00)=0{,}6826"
],
"conc": "La probabilidad de que la potencia esté entre 582 W y 778 W es 0,6826 (≈ 68,26%)."
}
];
