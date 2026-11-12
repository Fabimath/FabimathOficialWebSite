"""Materia de cada gato y formulario combinado → materia_gatos.js (window.MATERIA, window.FORMULARIO).
Uso: python gen_gatos/materia.py. En las fórmulas usar \\lt y \\gt en vez de < y > (el HTML los corta)."""
import json
from comun import RAIZ


def box(h):
    return f'<div class="box">{h}</div>'


def warn(h):
    return f'<div class="warn"><b>Errores típicos.</b> {h}</div>'


def ej(titulo, h):
    return f'<div class="ej"><b>Ejemplo.</b> {titulo}<br>{h}</div>'


def tabla(head, rows):
    th = ''.join(f'<th>{x}</th>' for x in head)
    tr = ''.join('<tr>' + ''.join(f'<td>{c}</td>' for c in r) + '</tr>' for r in rows)
    return f'<div class="tw"><table><thead><tr>{th}</tr></thead><tbody>{tr}</tbody></table></div>'


M = {}

M['vc'] = r"""
<h3>Población, muestra y variable</h3>
<p>La <b>población</b> es el conjunto completo de unidades que interesa estudiar; la <b>muestra</b> es la parte que efectivamente se observa. La <b>variable</b> es la característica que se mide en cada unidad. Antes de calcular cualquier cosa hay que identificar la variable, porque su tipo decide qué tablas, gráficos y medidas tienen sentido.</p>
""" + tabla(['Tipo', 'Qué la distingue', 'Ejemplos'], [
    ['Cualitativa nominal', 'Categorías sin orden', 'Tipo de sangre, comuna, medio de pago'],
    ['Cualitativa ordinal', 'Categorías con orden natural', 'Nivel de satisfacción, etapa de un cáncer, nivel educacional'],
    ['Cuantitativa discreta', 'Valores numéricos contables (saltos)', 'N.º de hijos, reclamos por día, hospitalizaciones'],
    ['Cuantitativa continua', 'Cualquier valor en un intervalo', 'Peso, tiempo de espera, glicemia, sueldo']]) + warn(
    "Confundir la unidad (el paciente) con la variable (su tipo de sangre). Creer que un código numérico (1 = sí, 0 = no) vuelve cuantitativa a una variable: sigue siendo cualitativa. Una variable continua redondeada (edad en años) se sigue tratando como continua.")

M['cn'] = r"""
<h3>Tablas para datos cualitativos</h3>
<p>Para una variable nominal se cuenta cuántas veces aparece cada categoría. Con $n$ datos y $k$ categorías:</p>
""" + box(r"$$f_i=\text{n.º de datos en la categoría } i,\qquad h_i=\frac{f_i}{n},\qquad h_i\%=100\,h_i,\qquad \sum f_i=n,\ \sum h_i=1$$") + r"""
<p>En una variable nominal <b>no</b> se usan frecuencias acumuladas, porque las categorías no tienen orden. La única medida de tendencia central válida es la <b>moda</b> (la categoría más frecuente). Los gráficos adecuados son el de barras y el circular; en el circular, cada categoría ocupa $360^\circ\cdot h_i$.</p>
""" + warn("Acumular frecuencias en datos nominales. Calcular la «media» de categorías codificadas con números. Olvidar que los porcentajes deben sumar 100 %.") + ej(
    "En 40 pacientes: tipo O = 18, A = 14, B = 6, AB = 2.", r"$h_O=18/40=0{,}45$ (45 %). La moda es O.")

M['cd'] = r"""
<h3>Datos discretos: tabla con acumuladas</h3>
""" + box(r"$$F_i=f_1+\dots+f_i,\qquad H_i=\frac{F_i}{n},\qquad \bar x=\frac{1}{n}\sum f_i\,x_i$$") + r"""
<p>La acumulada responde preguntas del tipo «a lo más» ($\le$) o «menos de» ($\lt$). «Más de $a$» se obtiene como $n-F(a)$. La <b>mediana</b> es el primer valor con $F_i\ge n/2$ (o, con datos sueltos, el dato central ordenado); la <b>moda</b> es el valor con mayor $f_i$.</p>
""" + warn("Confundir «a lo más 3» ($\\le 3$) con «menos de 3» ($\\le 2$). Calcular la media sumando los $x_i$ sin multiplicar por sus frecuencias. Tomar como mediana el valor con mayor frecuencia.")

M['mv'] = r"""
<h3>Medidas de variabilidad</h3>
""" + box(r"$$R=x_{\max}-x_{\min},\qquad s^2=\frac{1}{n-1}\sum (x_i-\bar x)^2=\frac{1}{n-1}\left[\sum x_i^2-n\bar x^2\right],\qquad s=\sqrt{s^2},\qquad CV=\frac{s}{\bar x}$$") + r"""
<p>Con tabla de frecuencias se ponderan los cuadrados por $f_i$: $s^2=\frac{1}{n-1}\left[\sum f_ix_i^2-n\bar x^2\right]$. La desviación estándar está en las mismas unidades que los datos; la varianza, en unidades al cuadrado. El <b>coeficiente de variación</b> no tiene unidades y sirve para comparar la homogeneidad de variables distintas: <b>menor CV, más homogénea</b>.</p>
""" + warn("Dividir por $n$ en vez de $n-1$. Comparar desviaciones estándar de variables con unidades o medias muy distintas (para eso está el CV). Olvidar sacar la raíz para pasar de $s^2$ a $s$.")

M['cc'] = r"""
<h3>Datos agrupados en clases</h3>
<p>Con clases $[L_i,L_s)$ de amplitud $a$ se trabaja con la <b>marca de clase</b> $m_i=\frac{L_i+L_s}{2}$.</p>
""" + box(r"""$$\bar x=\frac{1}{n}\sum f_i m_i,\qquad Me=L_i+\frac{\frac n2-F_{i-1}}{f_i}\,a,\qquad Mo=L_i+\frac{f_i-f_{i-1}}{(f_i-f_{i-1})+(f_i-f_{i+1})}\,a$$
$$P_k=L_i+\frac{\frac{nk}{100}-F_{i-1}}{f_i}\,a,\qquad s^2=\frac{1}{n-1}\left[\sum f_i m_i^2-n\bar x^2\right]$$""") + r"""
<p>La clase mediana es la primera con $F_i\ge n/2$; la clase modal, la de mayor $f_i$. Si $\bar x>Me$ la distribución es asimétrica a la derecha.</p>
""" + warn("Usar el límite superior en vez del inferior en la interpolación. Usar $F_i$ de la propia clase en vez de la anterior ($F_{i-1}$). Olvidar la amplitud $a$.")

M['pb'] = r"""
<h3>Experimento, espacio muestral y eventos</h3>
<p>Un experimento aleatorio tiene resultados que no se pueden predecir con certeza. El <b>espacio muestral</b> $\Omega$ reúne todos los resultados posibles y un <b>evento</b> es un subconjunto de $\Omega$. Las operaciones con eventos se leen así: $A\cup B$ «ocurre $A$ o $B$ (al menos uno)», $A\cap B$ «ocurren ambos», $A^c$ «no ocurre $A$», $A\cap B^c$ «ocurre $A$ pero no $B$».</p>
""" + box(r"""<b>Axiomas y propiedades.</b> $P(A)\ge 0$, $P(\Omega)=1$, y para eventos disjuntos la probabilidad de la unión es la suma.
$$P(A^c)=1-P(A),\qquad P(A\cup B)=P(A)+P(B)-P(A\cap B),\qquad P(A\cap B^c)=P(A)-P(A\cap B)$$
<b>De Morgan:</b> $(A\cup B)^c=A^c\cap B^c$ y $(A\cap B)^c=A^c\cup B^c$.<br>
<b>Laplace</b> (resultados equiprobables): $P(A)=\dfrac{\#A}{\#\Omega}=\dfrac{\text{casos favorables}}{\text{casos totales}}$.""") + r"""
<h4>Tres eventos</h4>
""" + box(r"$$P(A\cup B\cup C)=P(A)+P(B)+P(C)-P(A\cap B)-P(A\cap C)-P(B\cap C)+P(A\cap B\cap C)$$Exactamente dos $=\big[P(AB)+P(AC)+P(BC)\big]-3P(ABC)$. Al menos dos $=$ exactamente dos $+P(ABC)$. Ninguno $=1-P(A\cup B\cup C)$.") + r"""
<h4>Conteo</h4>
<p>Para elegir $r$ objetos de $n$ sin orden ni reemplazo hay $\binom{n}{r}=\frac{n!}{r!(n-r)!}$ formas. Si en un lote de $N$ hay $D$ defectuosos y se sacan $n$ sin reemplazo, $P(\text{exactamente }k\text{ defectuosos})=\dfrac{\binom{D}{k}\binom{N-D}{n-k}}{\binom{N}{n}}$. En probabilidad geométrica, la medida de un evento es un largo o un área: $P(A)=\frac{\text{área}(A)}{\text{área}(\Omega)}$.</p>
<h4>Independencia frente a incompatibilidad</h4>
""" + tabla(['', 'Definición', 'Se comprueba con'], [
    ['Incompatibles (disjuntos)', 'No pueden ocurrir juntos', '$P(A\\cap B)=0$'],
    ['Independientes', 'Uno no cambia la probabilidad del otro', '$P(A\\cap B)=P(A)P(B)$, o $P(A|B)=P(A)$']]) + r"""
<p>Si $P(A)>0$ y $P(B)>0$, dos eventos incompatibles <b>nunca</b> son independientes: saber que ocurrió uno deja en cero la probabilidad del otro.</p>
""" + warn("Sumar $P(A)+P(B)$ sin restar la intersección. Creer que «incompatibles» significa «independientes». Contar «al menos uno» sumando en vez de usar el complemento $1-P(\\text{ninguno})$.") + ej(
    "En 300 clientes, 120 tienen tarjeta ($T$), 90 cuenta de ahorro ($C$) y 40 ambas.",
    r"$P(T\cup C)=\frac{120+90-40}{300}=\frac{170}{300}=0{,}5666$; $P(T\cap C^c)=\frac{80}{300}=0{,}2666$; ninguna: $\frac{300-170}{300}=0{,}4333$.")

M['pc'] = r"""
<h3>Probabilidad condicional</h3>
""" + box(r"$$P(A|B)=\frac{P(A\cap B)}{P(B)},\qquad P(A\cap B)=P(A|B)\,P(B)=P(B|A)\,P(A)\quad\text{(regla multiplicativa)}$$") + r"""
<p>Condicionar es <b>reducir el espacio muestral</b> a lo que se sabe que ocurrió. En una tabla de contingencia: el denominador es el total de la fila o columna de la condición, y el numerador, la celda de la intersección. Si la condición es una unión de filas, se suman los totales de esas filas.</p>
<h4>Tablas de diagnóstico</h4>
""" + tabla(['Medida', 'Fórmula', 'Lectura'], [
    ['Sensibilidad', '$P(+|E)$', 'Proporción de enfermos que el test detecta'],
    ['Especificidad', '$P(-|E^c)$', 'Proporción de sanos que el test descarta'],
    ['Valor predictivo positivo', '$P(E|+)$', 'De los positivos, cuántos están enfermos'],
    ['Valor predictivo negativo', '$P(E^c|-)$', 'De los negativos, cuántos están sanos']]) + r"""
<h4>Extracciones sin reemplazo</h4>
<p>Se encadenan condicionales: $P(R_1\cap B_2)=P(R_1)\,P(B_2|R_1)$. Sin información de la primera extracción, la segunda tiene la misma probabilidad que la primera: $P(B_2)=P(B_1)$.</p>
""" + warn("Invertir la condición: $P(A|B)\\ne P(B|A)$. Usar el total general como denominador. En sin reemplazo, olvidar que el total baja en uno.") + ej(
    "De 250 registros, 100 son del turno nocturno y 32 de ellos tuvieron una caída.", r"$P(\text{caída}|\text{nocturno})=\frac{32}{100}=0{,}32$, mientras que $P(\text{caída}\cap\text{nocturno})=\frac{32}{250}=0{,}128$.")

M['bt'] = r"""
<h3>Probabilidad total y teorema de Bayes</h3>
<p>Si $A_1,\dots,A_k$ forman una <b>partición</b> de $\Omega$ (no se superponen y cubren todo), cualquier evento $B$ se puede descomponer según la causa que lo produjo.</p>
""" + box(r"""$$P(B)=\sum_{i=1}^{k}P(B|A_i)\,P(A_i)\qquad\text{(probabilidad total)}$$
$$P(A_j|B)=\frac{P(B|A_j)\,P(A_j)}{\sum_i P(B|A_i)\,P(A_i)}\qquad\text{(Bayes)}$$""") + r"""
<p>En el árbol: las primeras ramas son las causas $P(A_i)$ (probabilidades «a priori»), las segundas son $P(B|A_i)$. La probabilidad total suma los caminos que terminan en $B$; Bayes divide el camino de interés por esa suma y entrega la probabilidad «a posteriori». Las posteriores de todas las causas suman 1.</p>
<p><b>Bayes inverso:</b> si se conoce $P(B)$ y no la previa, la fórmula de probabilidad total se usa como ecuación: $P(B)=P(B|A)p+P(B|A^c)(1-p)$ y se despeja $p$.</p>
""" + warn("Leer «el 6 % de los pedidos web se devuelve» como $P(\\text{web}|D)$: es $P(D|\\text{web})$. Olvidar el complemento: $P(A|B^c)$ usa $1-P(B|A)$ en el numerador y $1-P(B)$ en el denominador. En tamizajes con prevalencia baja, el VPP puede ser pequeño aunque el test sea muy bueno.") + ej(
    "Tres proveedores entregan el 45 %, el 35 % y el 20 % de los repuestos; fallan el 3 %, el 5 % y el 8 % de cada uno.",
    r"$P(F)=0{,}03\cdot0{,}45+0{,}05\cdot0{,}35+0{,}08\cdot0{,}2=0{,}047$. $P(\text{prov. 3}|F)=\frac{0{,}016}{0{,}047}=0{,}3404$.")

M['vd'] = r"""
<h3>Variable aleatoria discreta</h3>
<p>Una variable aleatoria asigna un número a cada resultado del experimento. Es <b>discreta</b> si su recorrido es finito o numerable ($0,1,2,\dots$).</p>
""" + box(r"""<b>Cuantía:</b> $f_X(x)=P(X=x)\ge 0$ y $\sum_x f_X(x)=1$.&nbsp; <b>Acumulada:</b> $F_X(x)=P(X\le x)=\sum_{u\le x}f_X(u)$, escalonada.
$$E(X)=\sum x\,f_X(x),\qquad E(X^2)=\sum x^2 f_X(x),\qquad V(X)=E(X^2)-E(X)^2,\qquad d.e.(X)=\sqrt{V(X)},\qquad CV=\frac{d.e.(X)}{E(X)}$$
$$E(aX+b)=aE(X)+b,\qquad V(aX+b)=a^2V(X),\qquad E[g(X)]=\sum g(x)f_X(x)$$""") + r"""
<h4>Cómo se resuelve</h4>
<ol><li>Recorrido y cuantía (si hay una constante $k$, se despeja de $\sum f_X(x)=1$).</li>
<li>Probabilidades: se suman los valores incluidos. Cuidado con $\lt$ y $\le$: en discretas sí importa.</li>
<li>De $F$ a $f$: la cuantía es el salto, $P(X=x_i)=F(x_i)-F(x_{i-1})$.</li>
<li>Ganancia o costo lineal: se usan las propiedades, sin rehacer la tabla.</li></ol>
""" + warn("Usar $E(X)^2$ en vez de $E(X^2)$. Sumar la constante en la varianza: $V(aX+b)=a^2V(X)$, la $b$ desaparece. Interpretar $E(X)$ como el valor más probable (es un promedio a largo plazo).") + ej(
    "Reclamos por hora con $f_X(0..3)=0{,}4;\\ 0{,}3;\\ 0{,}2;\\ 0{,}1$ y un costo de 8.000 pesos por reclamo.",
    r"$E(X)=0(0{,}4)+1(0{,}3)+2(0{,}2)+3(0{,}1)=1$. Costo esperado $=8.000\cdot 1=8.000$ pesos por hora.")

M['vx'] = r"""
<h3>Variable aleatoria continua</h3>
<p>Una variable continua toma valores en un intervalo. Se describe con una <b>densidad</b> $f_X(x)\ge 0$ cuya área total es 1. La probabilidad es un <b>área</b>: $P(a\lt X\lt b)$ es el área bajo $f_X$ entre $a$ y $b$. Por eso $P(X=a)=0$ y da lo mismo usar $\lt$ o $\le$.</p>
<h4>Sin integrales: áreas y acumulada</h4>
<p>Cuando la densidad es constante, lineal o triangular, las áreas se calculan con figuras: rectángulo $b\cdot h$, triángulo $\frac{b\,h}{2}$, trapecio $\frac{(B+b)\,h}{2}$. Para hallar una constante $k$ se iguala el área total a 1. Si se entrega la acumulada $F_X$, las probabilidades salen de restas, $P(a\lt X\le b)=F_X(b)-F_X(a)$, y la densidad es su derivada, $f_X=F_X'$. Un percentil $x_p$ resuelve $F_X(x_p)=p$.</p>
""" + ej("$f_X(x)=\\frac{x}{8}$ en $[0,4]$.", r"$P(X\le 2)$ es un triángulo de base 2 y altura $f(2)=\frac14$: área $\frac{2\cdot 1/4}{2}=0{,}25$. La mediana cumple $\frac{x^2}{16}=0{,}5$, es decir, $x=2{,}8284$.") + r"""
<h4>Con integrales</h4>
""" + box(r"""$$\int_{-\infty}^{\infty}f_X(x)\,dx=1,\qquad F_X(x)=\int_{-\infty}^{x}f_X(t)\,dt,\qquad P(a\lt X\lt b)=\int_a^b f_X(x)\,dx=F_X(b)-F_X(a)$$
$$E(X)=\int x\,f_X(x)\,dx,\qquad E(X^2)=\int x^2f_X(x)\,dx,\qquad V(X)=E(X^2)-E(X)^2$$
$$P(X\gt b\,|\,X\gt a)=\frac{1-F_X(b)}{1-F_X(a)}\quad (b\gt a)$$""") + r"""
<p>Si los límites de un evento (por ejemplo $E(X)+3\,d.e.(X)$) salen del recorrido, se <b>truncan</b> al extremo del recorrido. Para $E[a+bX^2]$ basta $a+b\,E(X^2)$: no hace falta integrar de nuevo.</p>
""" + warn("Tratar la densidad como probabilidad ($f_X(2)$ no es $P(X=2)$). Integrar fuera del recorrido. Olvidar el 1 en la condicional: $P(X\\gt b|X\\gt a)$ usa colas, no $F$.")

M['bv'] = r"""
<h3>Vectores aleatorios $(X,Y)$</h3>
<h4>Caso discreto: tabla conjunta</h4>
""" + box(r"""$$p(x,y)=P(X=x,\,Y=y),\qquad P(X=x)=\sum_y p(x,y),\qquad P(Y=y)=\sum_x p(x,y)$$
$$P(Y=y\,|\,X=x)=\frac{p(x,y)}{P(X=x)},\qquad E(XY)=\sum_x\sum_y x\,y\,p(x,y)$$""") + r"""
<p>Las <b>marginales</b> son las sumas de filas y columnas. $X$ e $Y$ son <b>independientes</b> si $p(x,y)=P(X=x)P(Y=y)$ en <b>todas</b> las celdas; basta una celda que falle para concluir dependencia.</p>
""" + box(r"""$$Cov(X,Y)=E(XY)-E(X)E(Y),\qquad \rho(X,Y)=\frac{Cov(X,Y)}{\sqrt{V(X)V(Y)}}\in[-1,1]$$
$$E(aX+bY)=aE(X)+bE(Y),\qquad V(aX+bY)=a^2V(X)+b^2V(Y)+2ab\,Cov(X,Y)$$""") + r"""
<p>Independencia implica $Cov=0$, pero $Cov=0$ no implica independencia (solo ausencia de relación <i>lineal</i>).</p>
<h4>Caso continuo</h4>
<p>La densidad conjunta $f(x,y)$ cumple $\iint f(x,y)\,dx\,dy=1$ y $P((X,Y)\in R)=\iint_R f(x,y)\,dx\,dy$. Las marginales se obtienen integrando la otra variable: $f_X(x)=\int f(x,y)\,dy$. Si $(X,Y)$ es <b>uniforme</b> en una región, la probabilidad es un cociente de áreas y se resuelve sin integrales. Si el soporte es un rectángulo y $f(x,y)=g(x)h(y)$, las variables son independientes.</p>
""" + warn("Olvidar el término $2ab\\,Cov$ en la varianza de una suma. Decidir independencia mirando una sola celda que sí cumple. Dividir por el total en vez de por la marginal en la condicional.")

M['md'] = r"""
<h3>Modelos discretos</h3>
""" + tabla(['Modelo', 'Qué cuenta', 'Cuantía', '$E(X)$', '$V(X)$'], [
    ['$Ber(p)$', 'Un ensayo: éxito (1) o fracaso (0)', '$p^x(1-p)^{1-x}$', '$p$', '$p(1-p)$'],
    ['$Bin(n,p)$', 'Éxitos en $n$ ensayos independientes', '$\\binom{n}{x}p^x(1-p)^{n-x}$', '$np$', '$np(1-p)$'],
    ['$Geo(p)$', 'Ensayos hasta el primer éxito ($x=1,2,\\dots$)', '$p(1-p)^{x-1}$', '$1/p$', '$(1-p)/p^2$'],
    ['$BinNeg(k,p)$', 'Ensayos hasta el $k$-ésimo éxito ($x=k,k+1,\\dots$)', '$\\binom{x-1}{k-1}p^k(1-p)^{x-k}$', '$k/p$', '$k(1-p)/p^2$'],
    ['$Poi(\\lambda t)$', 'Ocurrencias en un tiempo o espacio', '$\\dfrac{e^{-\\lambda t}(\\lambda t)^x}{x!}$', '$\\lambda t$', '$\\lambda t$'],
    ['$Hiper(N,D,n)$', 'Éxitos en $n$ extracciones sin reemplazo', '$\\dfrac{\\binom{D}{x}\\binom{N-D}{n-x}}{\\binom{N}{n}}$', '$n\\frac{D}{N}$', '$n\\frac DN\\left(1-\\frac DN\\right)\\frac{N-n}{N-1}$']]) + r"""
<h4>Cómo elegir el modelo</h4>
<ul><li>¿Número fijo de ensayos y se cuentan éxitos? <b>Binomial</b> (con reemplazo o población grande); sin reemplazo de un lote chico, <b>hipergeométrica</b>.</li>
<li>¿Se repite hasta lograr el primer éxito? <b>Geométrica</b>; hasta el $k$-ésimo, <b>binomial negativa</b>.</li>
<li>¿Se cuentan eventos en un intervalo, con una tasa? <b>Poisson</b>, ajustando la tasa al largo del intervalo: $\lambda t$.</li></ul>
""" + box(r"""Geométrica: $P(X\gt x)=(1-p)^x$ y falta de memoria $P(X\gt a+b\,|\,X\gt a)=P(X\gt b)$.<br>
«Al menos uno»: $P(X\ge 1)=1-P(X=0)$. Si $n$ es grande y $p$ chico, $Bin(n,p)\approx Poi(np)$.""") + warn("Usar la tasa por hora para un intervalo de 20 minutos sin reescalarla. Confundir «hasta el primer éxito» (geométrica) con «número de éxitos» (binomial). Sumar muchos términos en vez de usar el complemento.")

M['mc'] = r"""
<h3>Uniforme</h3>
""" + box(r"$$X\sim Unif(a,b):\quad f_X(x)=\frac{1}{b-a},\quad F_X(x)=\frac{x-a}{b-a},\quad E(X)=\frac{a+b}{2},\quad V(X)=\frac{(b-a)^2}{12}$$") + r"""
<p>La probabilidad de un subintervalo es su largo dividido por $b-a$. Un percentil es $x_p=a+p(b-a)$.</p>
<h3>Exponencial</h3>
""" + box(r"""$$T\sim Exp(\lambda):\quad f_T(t)=\lambda e^{-\lambda t},\quad F_T(t)=1-e^{-\lambda t},\quad P(T\gt t)=e^{-\lambda t},\quad E(T)=\frac1\lambda,\quad V(T)=\frac{1}{\lambda^2}$$
$$x_p=-\frac{\ln(1-p)}{\lambda},\qquad Me=\frac{\ln 2}{\lambda},\qquad P(T\gt s+t\,|\,T\gt s)=P(T\gt t)$$""") + r"""
<p>La exponencial modela tiempos de espera y vidas útiles «sin desgaste»: no tiene memoria. Se relaciona con Poisson: si los eventos llegan como $Poi(\lambda t)$, el tiempo $T$ hasta el próximo cumple $P(T\gt t)=P(N(t)=0)=e^{-\lambda t}$, es decir, $T\sim Exp(\lambda)$ con la misma tasa.</p>
""" + warn("Confundir la media con la tasa: si la media es 5 minutos, $\\lambda=1/5$. Mezclar unidades (media en horas, tiempo en minutos). Pensar que la mediana es igual a la media: en la exponencial es menor.") + ej(
    "Servidores con vida media de 500 horas.", r"$\lambda=0{,}002$. $P(T\gt 500)=e^{-1}=0{,}3678$. Garantía para que solo falle el 5 %: $x=-\ln(0{,}95)/0{,}002=25{,}6466$ horas.")

M['nm'] = r"""
<h3>La distribución Normal</h3>
""" + box(r"""$$X\sim N(\mu,\sigma^2)\ \Rightarrow\ Z=\frac{X-\mu}{\sigma}\sim N(0,1),\qquad P(X\le x)=\Phi\!\left(\frac{x-\mu}{\sigma}\right),\qquad \Phi(-z)=1-\Phi(z)$$""") + r"""
<ul><li>$P(X\lt x)=\Phi(z)$; $P(X\gt x)=1-\Phi(z)$; $P(x_1\lt X\lt x_2)=\Phi(z_2)-\Phi(z_1)$.</li>
<li><b>Percentil inverso:</b> se busca en la tabla el $z$ con $\Phi(z)=p$ y se despeja $x=\mu+z\sigma$.</li>
<li>Entre $\mu\pm1\sigma$ queda el 68,26 %; entre $\mu\pm2\sigma$, el 95,44 %; entre $\mu\pm3\sigma$, el 99,74 %.</li></ul>
<h4>Combinaciones y aproximaciones</h4>
""" + box(r"""Si $X_1,\dots,X_n$ son normales independientes: $\sum X_i\sim N\left(\sum\mu_i,\ \sum\sigma_i^2\right)$ y $X_1-X_2\sim N(\mu_1-\mu_2,\ \sigma_1^2+\sigma_2^2)$ (las varianzas siempre se suman).<br>
Binomial con $np$ y $n(1-p)$ grandes: $X\approx N\big(np,\ np(1-p)\big)$ con corrección por continuidad, $P(X\le c)\approx\Phi\!\left(\frac{c+0{,}5-np}{\sqrt{np(1-p)}}\right)$.""") + warn("Si dice $N(36;\\ \\sigma^2=0{,}64)$, la desviación es $0{,}8$, no $0{,}64$. En la diferencia de normales, restar las varianzas. Redondear $z$ a más de 2 decimales y no encontrarlo en la tabla.")

M['tc'] = r"""
<h3>Distribuciones muestrales</h3>
<p>Un estadístico (como $\bar X$) cambia de muestra en muestra: tiene su propia distribución, la <b>distribución muestral</b>.</p>
""" + box(r"""$$E(\bar X)=\mu,\qquad EE(\bar X)=\frac{\sigma}{\sqrt n},\qquad \bar X\sim N\!\left(\mu,\ \frac{\sigma^2}{n}\right)\ \text{(población normal, o } n\ge 30\text{ por el TCL)}$$
$$\sum X_i\approx N(n\mu,\ n\sigma^2),\qquad \hat p\approx N\!\left(p,\ \frac{p(1-p)}{n}\right)\ (np\ge 5,\ n(1-p)\ge 5)$$
Como en el formulario, el segundo parámetro de $N$ es la <b>varianza</b>; al estandarizar se divide por la desviación: $\sigma/\sqrt n$, $\sigma\sqrt n$ o $\sqrt{p(1-p)/n}$.
$$\frac{\bar X-\mu}{S/\sqrt n}\sim t^{(n-1)},\qquad \frac{(n-1)S^2}{\sigma^2}\sim\chi^2_{(n-1)}\quad\text{(población normal)}$$""") + r"""
<p>El <b>teorema central del límite</b> dice que, con $n$ grande, el promedio es aproximadamente normal aunque la población no lo sea. Para dividir por 2 el error estándar hay que multiplicar $n$ por 4.</p>
""" + tabla(['Situación', 'Distribución'], [['$\\bar X$ con $\\sigma$ conocida', 'Normal $Z$'], ['$\\bar X$ con $S$, población normal', '$t$ con $n-1$ gl'],
                                          ['$S^2$, población normal', '$\\chi^2$ con $n-1$ gl'], ['$\\hat p$ con $n$ grande', 'Normal aproximada']]) + warn("Usar $\\sigma$ en vez de $\\sigma/\\sqrt n$ al estandarizar un promedio. Aplicar la $t$ con $n$ grados de libertad en vez de $n-1$.")

M['ep'] = r"""
<h3>Estimación puntual</h3>
<p>Un <b>estimador</b> es una fórmula que usa la muestra para aproximar un parámetro ($\hat\lambda$, $\hat p$, $\hat\theta$); la <b>estimación</b> es el número que resulta con datos concretos.</p>
<h4>Método de momentos</h4>
<p>Se igualan los momentos poblacionales con los muestrales y se despeja: $E(X)=\bar X$ (y, si hay dos parámetros, $E(X^2)=\frac1n\sum X_i^2$).</p>
<h4>Máxima verosimilitud</h4>
""" + box(r"""1. Verosimilitud: $L(\theta)=\prod_{i=1}^n f(x_i;\theta)$ (producto, por independencia).<br>
2. Log-verosimilitud: $\ell(\theta)=\ln L(\theta)=\sum\ln f(x_i;\theta)$.<br>
3. Se resuelve $\ell'(\theta)=0$ y se verifica que es un máximo.""") + tabla(['Modelo', 'Momentos', 'Máxima verosimilitud'], [
    ['$Poi(\\lambda)$', '$\\bar X$', '$\\bar X$'], ['$Exp(\\lambda)$', '$1/\\bar X$', '$1/\\bar X$'], ['$Ber(p)$', '$\\bar X$', '$\\bar X$'],
    ['$Geo(p)$', '$1/\\bar X$', '$1/\\bar X$'], ['$Unif(0,\\theta)$', '$2\\bar X$', '$\\max X_i$'],
    ['$N(\\mu,\\sigma^2)$', '$\\bar X$ y $\\frac1n\\sum(X_i-\\bar X)^2$', '$\\bar X$ y $\\frac1n\\sum(X_i-\\bar X)^2$'],
    ['$\\theta x^{\\theta-1}$ en $(0,1)$', '$\\dfrac{\\bar X}{1-\\bar X}$', '$-\\dfrac{n}{\\sum\\ln X_i}$']]) + r"""
<p><b>Invarianza:</b> si $\hat\theta$ es MV de $\theta$, entonces $g(\hat\theta)$ es MV de $g(\theta)$.</p>
<div class="ej"><b>Ejemplo.</b> Vehículos por minuto en un peaje, $X\sim Poi(\lambda)$, con datos $4,2,3$.<br>
$L(\lambda)=\prod\frac{e^{-\lambda}\lambda^{x_i}}{x_i!}=\frac{e^{-3\lambda}\lambda^{9}}{4!\,2!\,3!}$; $\ell(\lambda)=-3\lambda+9\ln\lambda-\ln(4!\,2!\,3!)$; $\ell'(\lambda)=-3+\frac{9}{\lambda}=0\Rightarrow\hat\lambda=3=\bar x$. Se estima que llegan en promedio 3 vehículos por minuto. Por momentos, $E(X)=\lambda=\bar x$ da el mismo resultado.</div>
<h4>Propiedades</h4>
""" + box(r"Insesgado: $E(\hat\theta)=\theta$. Sesgo $=E(\hat\theta)-\theta$. $ECM(\hat\theta)=V(\hat\theta)+\text{sesgo}^2$; entre dos estimadores conviene el de menor ECM. $S^2$ (con $n-1$) es insesgado; $\frac1n\sum(X_i-\bar X)^2$ subestima a $\sigma^2$.") + warn("Escribir $e^{-\\lambda}$ en vez de $e^{-n\\lambda}$ al multiplicar $n$ cuantías de Poisson. Derivar $L$ en vez de $\\ell$ (se puede, pero es más difícil). En la uniforme, derivar e igualar a cero: el máximo está en el borde, $\\max X_i$.")

M['ic'] = r"""
<h3>Intervalos de confianza</h3>
<p>Un intervalo de confianza de nivel $1-\alpha$ es un rango calculado con la muestra que, en muchas repeticiones del muestreo, contiene al parámetro en el $100(1-\alpha)\,\%$ de los casos. El parámetro es fijo; lo aleatorio es el intervalo.</p>
""" + tabla(['Parámetro', 'Intervalo', 'Supuestos'], [
    ['$\\mu$, $\\sigma$ conocida', '$\\bar x\\mp z_{1-\\alpha/2}\\dfrac{\\sigma}{\\sqrt n}$', 'Normal o $n\\ge 30$'],
    ['$\\mu$, $\\sigma$ desconocida', '$\\bar x\\mp t^{(n-1)}_{1-\\alpha/2}\\dfrac{s}{\\sqrt n}$', 'Población normal'],
    ['$p$', '$\\hat p\\mp z_{1-\\alpha/2}\\sqrt{\\dfrac{\\hat p(1-\\hat p)}{n}}$', '$n$ grande'],
    ['$\\sigma^2$', '$\\left[\\dfrac{(n-1)s^2}{\\chi^2_{1-\\alpha/2;(n-1)}}\\ ;\\ \\dfrac{(n-1)s^2}{\\chi^2_{\\alpha/2;(n-1)}}\\right]$', 'Población normal'],
    ['$\\sigma$', 'Raíz de los extremos del IC de $\\sigma^2$', 'Población normal'],
    ['$\\mu_1-\\mu_2$', '$(\\bar x_1-\\bar x_2)\\mp t^{(n_1+n_2-2)}_{1-\\alpha/2}\\,s_p\\sqrt{\\tfrac1{n_1}+\\tfrac1{n_2}}$', 'Normales, varianzas iguales']]) + r"""
<p>Con $s_p^2=\dfrac{(n_1-1)s_1^2+(n_2-1)s_2^2}{n_1+n_2-2}$. Los cuantiles $\chi^2$ son de cola inferior: $\chi^2_{\alpha/2;(n-1)}$ es el chico y va en el extremo <b>superior</b> del intervalo. El IC para $\sigma^2$ no es simétrico en torno a $s^2$.</p>
<h4>Tamaño de muestra y margen de error</h4>
""" + box(r"$$E=z_{1-\alpha/2}\frac{\sigma}{\sqrt n},\qquad n=\left(\frac{z_{1-\alpha/2}\,\sigma}{E}\right)^2,\qquad n=\frac{z_{1-\alpha/2}^2\,p(1-p)}{E^2}\ (\text{sin información, }p=0{,}5)$$Siempre se redondea hacia arriba.") + r"""
<p>Valores de $z_{1-\alpha/2}$: 90 % → 1,645; 95 % → 1,96; 98 % → 2,326; 99 % → 2,576. Un IC de $1-\alpha$ que no contiene a $\mu_0$ equivale a rechazar $H_0:\mu=\mu_0$ en un test bilateral de nivel $\alpha$.</p>
""" + warn("Usar $z$ cuando $\\sigma$ es desconocida y $n$ es chico. Invertir los cuantiles $\\chi^2$. Olvidar sacar raíz para $\\sigma$. Interpretar el IC como el rango del 95 % de los individuos.")

M['th'] = r"""
<h3>Test de hipótesis</h3>
<ol><li>Plantear $H_0$ (con igualdad, sobre el parámetro) y $H_1$ (lo que se quiere probar: $\ne$, $\gt$ o $\lt$).</li>
<li>Elegir el estadístico y su distribución bajo $H_0$.</li><li>Calcular el valor observado.</li>
<li>Comparar con la región crítica (o el valor p con $\alpha$) y decidir.</li><li>Concluir en el contexto.</li></ol>
""" + tabla(['Parámetro', 'Estadístico', 'Distribución bajo $H_0$'], [
    ['$\\mu$, $\\sigma$ conocida', '$z^*=\\dfrac{\\bar x-\\mu_0}{\\sigma/\\sqrt n}$', '$N(0,1)$'],
    ['$\\mu$, $\\sigma$ desconocida', '$t^*=\\dfrac{\\bar x-\\mu_0}{s/\\sqrt n}$', '$t^{(n-1)}$'],
    ['$p$', '$z^*=\\dfrac{\\hat p-p_0}{\\sqrt{p_0(1-p_0)/n}}$', '$N(0,1)$ aprox.'],
    ['$\\sigma^2$', '$\\chi^{2*}=\\dfrac{(n-1)s^2}{\\sigma_0^2}$', '$\\chi^2_{(n-1)}$'],
    ['$\\mu_1-\\mu_2$', '$t^*=\\dfrac{\\bar x_1-\\bar x_2}{s_p\\sqrt{1/n_1+1/n_2}}$', '$t^{(n_1+n_2-2)}$'],
    ['Pareadas', '$t^*=\\dfrac{\\bar d}{s_d/\\sqrt n}$', '$t^{(n-1)}$']]) + r"""
<p>Región crítica: bilateral $|z^*|\ge z_{1-\alpha/2}$; derecha $z^*\ge z_{1-\alpha}$; izquierda $z^*\le -z_{1-\alpha}$ (igual con $t$). Para la varianza, con cuantiles $\chi^2$ de cola inferior: derecha $\chi^{2*}\ge\chi^2_{1-\alpha;(n-1)}$; izquierda $\chi^{2*}\le\chi^2_{\alpha;(n-1)}$; bilateral, fuera de $\left[\chi^2_{\alpha/2;(n-1)};\ \chi^2_{1-\alpha/2;(n-1)}\right]$. El <b>valor p</b> es la probabilidad, si $H_0$ fuera cierta, de obtener un resultado tan extremo o más que el observado: se rechaza $H_0$ si $p\lt\alpha$.</p>
""" + tabla(['', '$H_0$ verdadera', '$H_0$ falsa'], [['Rechazar $H_0$', 'Error tipo I ($\\alpha$)', 'Correcto (potencia $1-\\beta$)'],
                                                   ['No rechazar $H_0$', 'Correcto', 'Error tipo II ($\\beta$)']]) + warn("Escribir las hipótesis con $\\bar x$ en vez de $\\mu$. Decir «se acepta $H_0$» como si se hubiera probado: se dice «no se rechaza». En el test de proporción, usar $\\hat p$ en el error estándar (va $p_0$).")

M['bd'] = r"""
<h3>Tablas de doble entrada</h3>
<p>Cuando en cada unidad se registran dos variables cualitativas o discretas, los datos se ordenan en una tabla de doble entrada (tabla de contingencia). Cada celda trae la <b>frecuencia conjunta</b> $f_{ij}$: cuántas unidades tienen a la vez la categoría $i$ de la primera variable y la $j$ de la segunda.</p>
""" + box(r"""$$f_{i\cdot}=\sum_j f_{ij}\ \text{(total de la fila)},\qquad f_{\cdot j}=\sum_i f_{ij}\ \text{(total de la columna)},\qquad n=\sum_i\sum_j f_{ij}$$
$$h_{ij}=\frac{f_{ij}}{n}\ \text{(relativa conjunta)},\qquad h_{j|i}=\frac{f_{ij}}{f_{i\cdot}}\ \text{(condicional por fila)},\qquad h_{i|j}=\frac{f_{ij}}{f_{\cdot j}}\ \text{(condicional por columna)}$$""") + r"""
<p>Los totales de fila y de columna forman las <b>distribuciones marginales</b>: describen cada variable por separado. Las <b>distribuciones condicionales</b> describen una variable dentro de un grupo de la otra y son las que permiten comparar grupos de distinto tamaño. Si las distribuciones condicionales son iguales en todas las filas (o, lo que es lo mismo, $f_{ij}=\frac{f_{i\cdot}\,f_{\cdot j}}{n}$ en cada celda), las variables <b>no están asociadas</b>.</p>
""" + ej("De 200 estudiantes, 120 son de primer año y 70 de ellos trabajan.", r"Frecuencia conjunta $f_{11}=70$; marginal $f_{1\cdot}=120$; $h_{11}=\frac{70}{200}=0{,}35$; condicional: el $\frac{70}{120}=58{,}33\ \%$ de los de primer año trabaja.") + r"""
<h3>Covarianza y correlación</h3>
<p>Con dos variables cuantitativas se empieza por el <b>gráfico de dispersión</b>: si la nube sube, la relación es directa; si baja, inversa; si no tiene forma, no hay relación lineal.</p>
""" + box(r"""$$Cov(x,y)=\frac{1}{n-1}\sum (x_i-\bar x)(y_i-\bar y)=\frac{1}{n-1}\left(\sum x_iy_i-n\bar x\bar y\right)$$
$$s_x^2=\frac{1}{n-1}\left(\sum x_i^2-n\bar x^2\right),\qquad r=\frac{Cov(x,y)}{s_x\,s_y}\in[-1,1]$$""") + tabla(['$|r|$', 'Relación lineal'], [['$\\lt 0{,}3$', 'Débil'], ['$0{,}3$ a $0{,}7$', 'Moderada'],
                                                                                                                  ['$0{,}7$ a $1$', 'Fuerte'], ['$1$', 'Perfecta']]) + r"""
<p>El signo indica la dirección: $r\gt 0$ directa, $r\lt 0$ inversa. La covarianza depende de las unidades (si $Y$ se expresa en miles, la covarianza se divide por mil); $r$ no cambia con cambios de escala positivos. Correlación no implica causalidad: dos variables pueden moverse juntas por una tercera.</p>
""" + warn("Usar la suma de la fila como denominador cuando se pide un porcentaje por columna. Dividir la covarianza por $n$ en vez de $n-1$. Decir que $r=0{,}2$ indica «relación fuerte» o que una correlación alta prueba causa y efecto.")

M['rl'] = r"""
<h3>Regresión lineal simple</h3>
<p>Si el gráfico de dispersión y la correlación (gato Bivariado Descriptivo) muestran una relación lineal, se ajusta la recta de mínimos cuadrados para predecir $Y$ a partir de $X$.</p>
""" + box(r"""$$\hat y=\hat\beta_0+\hat\beta_1x,\qquad \hat\beta_1=\frac{Cov(x,y)}{s_x^2},\qquad \hat\beta_0=\bar y-\hat\beta_1\bar x,\qquad R^2=r^2$$
$$\hat\sigma^2_\varepsilon=s_y^2(1-r^2)\frac{n-1}{n-2},\qquad EE(\hat\beta_1)=\sqrt{\frac{\hat\sigma^2_\varepsilon}{(n-1)s_x^2}},\qquad t^*=\frac{\hat\beta_1}{EE(\hat\beta_1)}\sim t^{(n-2)}$$
$$IC(\beta_1)=\hat\beta_1\mp t^{(n-2)}_{1-\alpha/2}\,EE(\hat\beta_1)$$""") + r"""
<ul><li><b>Pendiente:</b> cambio promedio de $Y$ por cada unidad adicional de $X$.</li>
<li><b>Intercepto:</b> valor promedio estimado de $Y$ cuando $X=0$ (solo tiene sentido si $X=0$ está cerca de los datos).</li>
<li><b>$R^2$:</b> proporción de la variabilidad de $Y$ explicada por el modelo.</li>
<li><b>Predicción:</b> se reemplaza $x$ en la recta; fuera del rango observado es una extrapolación poco confiable.</li></ul>
<p>Para validar el modelo se revisan los residuos: media cero, varianza constante, independencia y normalidad. En la salida de R, la columna <i>Estimate</i> trae los coeficientes y <i>Pr(&gt;|t|)</i> los valores p.</p>
""" + warn("Confundir $r$ con $R^2$. Intercambiar $\\hat\\beta_0$ y $\\hat\\beta_1$. Dividir por $s_y^2$ en vez de $s_x^2$. Interpretar la pendiente como porcentaje.")

M['re'] = r"""
<h3>Regresión exponencial</h3>
<p>Cuando $Y$ crece (o decrece) en un porcentaje constante por unidad de $X$, la nube de puntos se curva y conviene el modelo $y=\alpha e^{\beta x}$. Se <b>linealiza</b> con logaritmo natural: $\ln y=\ln\alpha+\beta x$.</p>
""" + box(r"""Con $w=\ln y$: $$\hat\beta_1=\frac{Cov(x,w)}{s_x^2},\qquad \hat\beta_0=\bar w-\hat\beta_1\bar x,\qquad \hat\alpha=e^{\hat\beta_0},\qquad \hat y=\hat\alpha\,e^{\hat\beta_1x}$$
Factor por unidad de $X$: $e^{\hat\beta}$; cambio porcentual $100(e^{\hat\beta}-1)\,\%$. Tiempo de duplicación (o vida media) $=\dfrac{\ln 2}{|\hat\beta|}$.""") + r"""
<p>$\hat\beta\gt 0$ indica crecimiento y $\hat\beta\lt 0$, decaimiento. El $R^2$ que entrega el ajuste en $(x,\ln y)$ mide la recta en escala logarítmica; para comparar con el modelo lineal hay que calcular ambos $R^2$ con los residuos en la escala original de $y$ ($1-\sum(y_i-\hat y_i)^2/\sum(y_i-\bar y)^2$) y mirar además el gráfico de dispersión.</p>
""" + warn("Olvidar exponenciar: el modelo es $\\hat y=e^{\\hat\\beta_0}e^{\\hat\\beta_1x}$, no $\\hat\\beta_0e^{\\hat\\beta_1x}$. Interpretar $\\hat\\beta$ como cambio absoluto. Usar logaritmo en base 10 en vez de $\\ln$.")

M['rm'] = r"""
<h3>Regresión lineal múltiple</h3>
""" + box(r"$$\hat y=\hat\beta_0+\hat\beta_1x_1+\hat\beta_2x_2+\dots+\hat\beta_kx_k$$") + r"""
<ul><li>Cada $\hat\beta_j$ es el cambio promedio de $Y$ por unidad de $x_j$ <b>manteniendo constantes las demás variables</b> (efecto parcial, «ceteris paribus»).</li>
<li>Una <b>variable dummy</b> (0/1) desplaza la recta: su coeficiente es la diferencia promedio entre los grupos, con lo demás fijo.</li>
<li><b>Test t individual:</b> $H_0:\beta_j=0$; $t=\hat\beta_j/EE(\hat\beta_j)$ con $n-k-1$ gl. Si el valor p es menor que $\alpha$, la variable es significativa.</li>
<li><b>Test F global:</b> $H_0:\beta_1=\dots=\beta_k=0$. Si se rechaza, al menos una variable aporta.</li></ul>
""" + box(r"$$R^2=1-\frac{SC_{res}}{SC_T},\qquad R^2_{aj}=1-(1-R^2)\frac{n-1}{n-k-1},\qquad F=\frac{R^2/k}{(1-R^2)/(n-k-1)}$$") + r"""
<p>$R^2$ nunca baja al agregar variables; el $R^2$ ajustado penaliza las que no aportan y sirve para comparar modelos con distinto número de variables. Para simplificar se saca, de a una, la variable con mayor valor p no significativo, y se reajusta.</p>
""" + warn("Interpretar un coeficiente sin «manteniendo constantes las demás». Decidir qué variable importa más por el tamaño del coeficiente (depende de las unidades). Leer el valor p del intercepto como si fuera el de una variable.")

M['an'] = r"""
<h3>ANOVA de un factor</h3>
<p>Compara las medias de $k$ grupos independientes: $H_0:\mu_1=\dots=\mu_k$ frente a $H_1$: al menos una media difiere. Separa la variabilidad total en la que hay <b>entre</b> grupos ($SC_E$, «E» de entre) y la que hay <b>dentro</b> de ellos ($SC_D$, también llamada error o residual).</p>
""" + box(r"""$$SC_E=\sum n_i(\bar y_i-\bar y)^2,\qquad SC_D=\sum (n_i-1)s_i^2,\qquad SC_T=SC_E+SC_D$$
$$CM_E=\frac{SC_E}{k-1},\qquad CM_D=\frac{SC_D}{N-k},\qquad F=\frac{CM_E}{CM_D}\sim F_{(k-1,\ N-k)}\ \text{bajo } H_0$$""") + tabla(['Fuente', 'SC', 'gl', 'CM', 'F'], [['Entre grupos', '$SC_E$', '$k-1$', '$SC_E/(k-1)$', '$CM_E/CM_D$'],
                                                                                                                                         ['Dentro (error)', '$SC_D$', '$N-k$', '$SC_D/(N-k)$', ''], ['Total', '$SC_T$', '$N-1$', '', '']]) + r"""
<p>Se rechaza $H_0$ si $F\ge F_{1-\alpha;(k-1,N-k)}$ (o si el valor p es menor que $\alpha$). La proporción de variabilidad explicada por el factor es $\eta^2=SC_E/SC_T$.</p>
<p><b>Supuestos:</b> observaciones independientes, normalidad en cada grupo y varianzas iguales. Si se rechaza $H_0$, se usan comparaciones múltiples (por ejemplo, Tukey) para saber qué pares difieren, controlando el error global.</p>
""" + warn("Intercambiar los grados de libertad del numerador y del denominador. Concluir que «todas las medias son distintas» al rechazar $H_0$. Calcular $SC_D$ con $n_i s_i^2$ en vez de $(n_i-1)s_i^2$.")

# ---------------------------------------------------------------- formulario
F = []
F.append(['Descriptiva', box(r"""$$\bar x=\frac1n\sum x_i=\frac1n\sum f_ix_i=\frac1n\sum f_im_i,\qquad s^2=\frac{1}{n-1}\left[\sum x_i^2-n\bar x^2\right],\qquad CV=\frac{s}{\bar x}$$
Datos sueltos ordenados: $Me=x_{\left(\frac{n+1}{2}\right)}$, $P_k=x_{\left(\frac{k}{100}(n+1)\right)}$. Variación modal: $V_{Mo}=1-h_{Mo}$.
$$Me=L_i+\frac{\frac n2-F_{i-1}}{f_i}\,a,\qquad Mo=L_i+\frac{f_i-f_{i-1}}{(f_i-f_{i-1})+(f_i-f_{i+1})}\,a,\qquad P_k=L_i+\frac{\frac{nk}{100}-F_{i-1}}{f_i}\,a$$
$$RIQ=Q_3-Q_1,\quad BI=\max\{x_{(1)},\,Q_1-1{,}5\,RIQ\},\quad BS=\min\{x_{(n)},\,Q_3+1{,}5\,RIQ\},\quad m_r=\frac1n\sum(x_i-\bar x)^r,\quad \gamma_1=\frac{m_3}{s^3},\quad \gamma_2=\frac{m_4}{s^4}-3$$""")])
F.append(['Estadística bivariada', box(r"""$$f_{i\cdot}=\sum_j f_{ij},\quad f_{\cdot j}=\sum_i f_{ij},\quad h_{ij}=\frac{f_{ij}}{n},\quad h_{j|i}=\frac{f_{ij}}{f_{i\cdot}}$$
$$Cov(x,y)=\frac{1}{n-1}\left(\sum x_iy_i-n\bar x\bar y\right),\qquad r=\frac{Cov(x,y)}{s_x\,s_y}$$""")])
F.append(['Probabilidad', box(r"""$$P(A^c)=1-P(A),\quad P(A\cup B)=P(A)+P(B)-P(A\cap B),\quad P(A|B)=\frac{P(A\cap B)}{P(B)},\quad P(A\cap B)=P(A|B)P(B)$$
Clásica: $P(A)=\dfrac{\#A}{\#\Omega}$; geométrica: $P(A)=\dfrac{m(A)}{m(\Omega)}$ con $m$ = largo, área o volumen; frecuentista: $P(A)=\lim\limits_{n\to\infty}\dfrac{n(A)}{n}$.
$$P(B)=\sum P(B|A_i)P(A_i),\qquad P(A_j|B)=\frac{P(B|A_j)P(A_j)}{\sum P(B|A_i)P(A_i)},\qquad A\perp B\iff P(A\cap B)=P(A)P(B)$$""")])
F.append(['Variables aleatorias', box(r"""$$F_X(x)=P(X\le x),\quad E(X)=\sum xf_X(x)\ \text{ó}\int xf_X(x)dx,\quad E(g(X))=\sum g(x)f_X(x)\ \text{ó}\int g(x)f_X(x)dx$$
$$V(X)=E(X^2)-E(X)^2,\quad E(aX+b)=aE(X)+b,\quad V(aX+b)=a^2V(X),\quad CV(X)=\frac{d.e.(X)}{E(X)}$$
Percentil $x_p$: $P(X\le x_p)\ge\frac{p}{100}$ y $P(X\ge x_p)\ge 1-\frac{p}{100}$ (en continuas, $F_X(x_p)=\frac{p}{100}$).
$$Cov(X,Y)=E(XY)-E(X)E(Y),\quad \rho=\frac{Cov(X,Y)}{\sqrt{V(X)V(Y)}},\quad V(aX+bY)=a^2V(X)+b^2V(Y)+2ab\,Cov(X,Y)$$""")])
F.append(['Modelos', M['md'].split('<h4>')[0].split('</h3>')[1] + box(r"""Geométrica: $F_X(x)=1-(1-p)^x$ y $P(X\gt a+b\,|\,X\gt a)=P(X\gt b)$.
$$Unif(a,b):\ F=\frac{x-a}{b-a},\ \mathbb{E}=\frac{a+b}2,\ \mathbb{V}=\frac{(b-a)^2}{12}\qquad Exp(\lambda):\ F=1-e^{-\lambda x},\ \mathbb{E}=\frac1\lambda,\ \mathbb{V}=\frac1{\lambda^2},\ P(X\gt s+t\,|\,X\gt s)=P(X\gt t)$$
$$N(\mu,\sigma^2):\ Z=\frac{X-\mu}{\sigma},\quad F_X(x)=\Phi\left(\frac{x-\mu}{\sigma}\right),\quad \Phi(-z)=1-\Phi(z)$$""")])
F.append(['Distribuciones muestrales', box(r"""$$\bar X\sim N\!\left(\mu,\frac{\sigma^2}{n}\right),\quad \hat p\approx N\!\left(p,\frac{p(1-p)}n\right),\quad \frac{\bar X-\mu}{S/\sqrt n}\sim t^{(n-1)},\quad \frac{(n-1)S^2}{\sigma^2}\sim\chi^2_{(n-1)}$$""")])
F.append(['Estimación', box(r"""Momentos: $E(X)=\bar X$. Máxima verosimilitud: $L(\theta)=\prod f(x_i;\theta)$, $\ell=\ln L$, $\ell'(\theta)=0$. $ECM(\hat\theta)=V(\hat\theta)+\text{sesgo}^2$.""")])
F.append(['Intervalos y tests', M['ic'].split('<p>Con')[0].split('</p>', 1)[1] + M['th'].split('<p>Región')[0].split('</ol>')[1]])
F.append(['Regresión y ANOVA', box(r"""$$\hat\beta_1=\frac{Cov(x,y)}{s_x^2},\quad \hat\beta_0=\bar y-\hat\beta_1\bar x,\quad R^2=r^2,\quad \hat\sigma^2_\varepsilon=s_y^2(1-r^2)\frac{n-1}{n-2},\quad V(\hat\beta_1)=\frac{\hat\sigma^2_\varepsilon}{(n-1)s_x^2}$$
$$\text{Exponencial: } w=\ln y,\ \hat\alpha=e^{\hat\beta_0}.\qquad R^2_{aj}=1-(1-R^2)\frac{n-1}{n-k-1}.\qquad F=\frac{SC_E/(k-1)}{SC_D/(N-k)}$$""")])

# notación del formulario: ℙ, 𝔼 y 𝕍 en letra de pizarra
from comun import pizarra
M = {k: pizarra(v) for k, v in M.items()}
F = [[a, pizarra(b)] for a, b in F]

out = 'window.MATERIA = ' + json.dumps(M, ensure_ascii=False, indent=0) + ';\nwindow.FORMULARIO = ' + json.dumps(F, ensure_ascii=False, indent=0) + ';\n'
(RAIZ / 'materia_gatos.js').write_text('// Materia y formulario de los Gatos de Estadística. Generado por gen_gatos/materia.py.\n' + out, encoding='utf-8')
print('materia_gatos.js:', len(M), 'temas,', len(F), 'secciones de formulario')
