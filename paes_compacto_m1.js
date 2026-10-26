/* Versión compacta de las clases de M1 (Números, Álgebra, Funciones, Geometría, Probabilidad y Estadística): ver COMPACTO en paes.html. */
var COMPACTO = COMPACTO || {};

/* Versión compacta · M1 Números */
Object.assign(COMPACTO, {
  enteros: [
    { t: 'Recta, suma y resta', b: r`
      <p>$\mathbb{Z} = \{\dots, -2, -1, 0, 1, 2, \dots\}$. Más a la derecha, mayor: $-12 < -7 < 0 < 3$. $|a|$ = distancia al cero.</p>
      <ul><li>Mismo signo: se suman. Distinto: se restan, signo del de mayor $|\ |$.</li>
      <li>Restar es sumar el opuesto: $3 - (-5) = 8$. Cambio = final − inicial: $-212 - (-287) = 75$.</li></ul>
      <div class="box alert"><b>Entre negativos</b> mayor valor absoluto = <b>menor</b>: $-12 < -7$.</div>` },
    { t: 'Signos y prioridad', b: r`
      <p>Signos iguales: $+$; distintos: $-$. N.º par de factores negativos: $+$; impar: $-$. Inicial + (veces)·(cambio con signo): $4 + 6\cdot(-3)$.</p>
      <p>Orden: paréntesis, potencias, $\cdot$ y $:$ <b>de izquierda a derecha</b>, $+$ y $-$. $1 - (-3)(-8) = 1 - 24 = -23$; $20 - 8 : 4\cdot 2 = 16$.</p>
      <div class="box alert">$(-2)^4 = 16$, pero $-2^4 = -16$. Reemplaza con paréntesis: $p = -2 \Rightarrow p^3 = -8$. "¿Siempre?": basta un contraejemplo.</div>` }
  ],

  racionales: [
    { t: 'Fracciones y operaciones', b: r`
      <p>$\mathbb{Q} = \left\{\tfrac{a}{b} : a, b \in \mathbb{Z},\ b \neq 0\right\}$. Mixto: $2\tfrac{1}{3} = 2 + \tfrac{1}{3} = \tfrac{7}{3}$.</p>
      <ul><li>$\pm$: denominador común. Entero: $3 - \tfrac{1}{2} = \tfrac{6}{2} - \tfrac{1}{2}$.</li>
      <li>$\tfrac{a}{b}\cdot\tfrac{c}{d} = \tfrac{ac}{bd}$; dividir = multiplicar por el inverso.</li>
      <li>Comparar: a decimal o a denominador común. Prioridad igual que en enteros.</li></ul>
      <div class="box alert">Solo se simplifican factores: $\tfrac{2 + 5}{2} = \tfrac{7}{2}$. Nunca sumar denominadores: $\tfrac{1}{3} + \tfrac{1}{3} = \tfrac{2}{3}$.</div>` },
    { t: 'Problemas', b: r`
      <ul><li>"$\tfrac{2}{3}$ de 45" $= \tfrac{2}{3}\cdot 45$; "¿cuántas caben?" $= 12 : \tfrac{3}{4} = 16$.</li>
      <li>Escalar: por nuevo/original exacto. Si $x$ es la fracción $f$ del total: total $= x : f$.</li>
      <li>Por $q \in (0, 1)$: multiplicar achica, dividir agranda.</li></ul>
      <div class="box alert"><b>¿De qué?</b> Gasta $\tfrac{3}{5}$: ahorra $\tfrac{2}{5}$. Recorre $\tfrac{1}{3}$ de lo que falta ($\tfrac{3}{5}$): quedan $\tfrac{2}{3}\cdot\tfrac{3}{5}$.</div>` }
  ],

  decimales_orden: [
    { t: 'Decimal a fracción', b: r`
      <table><tbody>
      <tr><td>Finito</td><td>$0{,}075 = \dfrac{75}{1000}$</td></tr>
      <tr><td>Periódico</td><td>$0{,}\overline{27} = \dfrac{27}{99}$; $0{,}\overline{9} = 1$</td></tr>
      <tr><td>Semiperiódico</td><td>$\dfrac{\text{todo sin coma} - \text{lo que no se repite}}{9\ldots 9\,0\ldots 0}$: $1{,}2\overline{5} = \dfrac{125 - 12}{90}$</td></tr></tbody></table>
      <div class="box">Fracción <b>irreducible</b> con denominador solo de 2 y 5: decimal finito; otro factor: periódico. Simplifica antes: $\dfrac{3}{15} = \dfrac{1}{5}$.</div>` },
    { t: 'Operar', b: r`
      <ul><li>$\cdot$: decimales del producto = suma de decimales ($0{,}3\cdot 0{,}02 = 0{,}006$).</li>
      <li>$:$: amplifica hasta divisor entero ($2{,}4 : 0{,}15 = 240 : 15$). $:0{,}1 = \cdot 10$.</li>
      <li>Periódicos: siempre como fracción.</li></ul>
      <div class="box alert">Si la cuarta parte es $0{,}06$, el número es $4\cdot 0{,}06 = 0{,}24$.</div>` },
    { t: 'Ordenar', b: r`
      <p>Iguala la cantidad de decimales: $12{,}008 < 12{,}08 < 12{,}1$. Negativos: $-0{,}7 < -0{,}69$. Punto medio de $a$ y $b$: $\dfrac{a + b}{2}$.</p>
      <div class="box alert">$0{,}3 < 0{,}\overline{3} = \dfrac{1}{3}$: no está "entre" $\tfrac{1}{3}$ y otro.</div>` }
  ],

  porcentaje: [
    { t: 'Concepto', b: r`
      <p>$p\% = \dfrac{p}{100}$. $50\% = \tfrac{1}{2}$, $25\% = \tfrac{1}{4}$, $20\% = \tfrac{1}{5}$, $10\% = \tfrac{1}{10}$, $12{,}5\% = \tfrac{1}{8}$, $75\% = \tfrac{3}{4}$. $200\%$ de 15 = 30. El $a\%$ de $b$ = el $b\%$ de $a$.</p>` },
    { t: 'Los tres cálculos', b: r`
      <table><tbody>
      <tr><td>$p\%$ de $C$</td><td>$\dfrac{p}{100}\cdot C$</td></tr>
      <tr><td>Qué % es $A$ de $B$</td><td>$\dfrac{A}{B}\cdot 100\%$</td></tr>
      <tr><td>$A$ es el $p\%$ de $T$</td><td>$T = \dfrac{100\cdot A}{p}$ (también si $p > 100$)</td></tr></tbody></table>
      <p>Mental: 10 % corre la coma; 5 % es su mitad; 15 % = 10 % + 5 %.</p>` },
    { t: 'Trampas', b: r`
      <div class="box alert"><b>Total de referencia</b> "con respecto a…" es el denominador. "% de un %": se multiplica, $60\%$ de $70\% = 0{,}6\cdot 0{,}7 = 42\%$. Mezcla: cantidad de sustancia / nuevo total. Compara grupos por %, no por cantidad; una diferencia de % se aplica al mismo total.</div>
      <div class="box alert">"El 150 % de $A$" $= 1{,}5A$; "$A$ aumentado en 150 %" $= 2{,}5A$.</div>` }
  ],

  variacion_pct: [
    { t: 'Factor de cambio', b: r`
      <p>Aumento $p\%$: $\cdot\left(1 + \dfrac{p}{100}\right)$; descuento $p\%$: $\cdot\left(1 - \dfrac{p}{100}\right)$. Sucesivos: multiplicar factores (orden da igual).</p>
      <p>Deshacer: dividir por el factor ($18.000 : 0{,}75$; neto = total $: 1{,}19$).</p>
      <div class="box alert">Descuento de 20 % = pagar $0{,}8$. $0{,}8\cdot 0{,}75 = 0{,}6$: 40 %, no 45 %. $1{,}2\cdot 0{,}8 = 0{,}96$: baja 4 %. Volver tras $-20\%$: $\tfrac{1}{0{,}8} = 1{,}25$, +25 %. Revisa condiciones y sobre qué monto se aplica.</div>` },
    { t: 'Variación e interés', b: r`
      <p>Variación $= \dfrac{\text{final} - \text{inicial}}{\text{inicial}}\cdot 100\%$ (siempre sobre el inicial).</p>
      <table><tbody>
      <tr><td>Simple</td><td>$C_i\left(1 + \dfrac{i\cdot n}{100}\right)$</td></tr>
      <tr><td>Compuesto / "respecto del año anterior"</td><td>$C_i\left(1 \pm \dfrac{i}{100}\right)^n$</td></tr></tbody></table>
      <div class="box alert">Intereses ganados = final − inicial.</div>` }
  ],

  potencias: [
    { t: 'Propiedades', b: r`
      <table><tbody>
      <tr><td>$a^m a^n = a^{m+n}$, $a^m : a^n = a^{m-n}$</td><td>$(a^m)^n = a^{mn}$</td></tr>
      <tr><td>$(ab)^n = a^n b^n$, $\left(\dfrac{a}{b}\right)^n = \dfrac{a^n}{b^n}$</td><td>$a^0 = 1$</td></tr>
      <tr><td>$a^{-n} = \dfrac{1}{a^n}$, $\left(\dfrac{2}{3}\right)^{-2} = \dfrac{9}{4}$</td><td>$a^{\frac{m}{n}} = \left(\sqrt[n]{a}\right)^m$: $8^{\frac{2}{3}} = 4$</td></tr></tbody></table>
      <div class="box alert">$2^3 \neq 2\cdot 3$; $-3^2 = -9$; $(a + b)^2 \neq a^2 + b^2$; exponente negativo no da resultado negativo; potencia de potencia <b>multiplica</b>. Solo con igual base: descompón en primos ($4 = 2^2$, $27 = 3^3$). Comparar: iguala bases o exponentes ($3^{20} = 9^{10} > 8^{10} = 2^{30}$).</div>` },
    { t: 'Notación científica y duplicación', b: r`
      <p>$a\cdot 10^n$, $1 \le a < 10$: $150.000.000 = 1{,}5\cdot 10^8$. Producto: coeficientes por coeficientes, exponentes se suman, y se ajusta: $20\cdot 10^3 = 2\cdot 10^4$; $0{,}5\cdot 10^3 = 5\cdot 10^2$. $1$ seguido de $k$ ceros $= 10^k$.</p>
      <p>Se duplica $t$ veces: $P\cdot 2^t$ ($128 = 2^7$: 7 duplicaciones).</p>` }
  ],

  raices: [
    { t: 'Definición y propiedades', b: r`
      <p>$\sqrt[n]{a} = b \iff b^n = a$; $\sqrt[n]{a^m} = a^{\frac{m}{n}}$. Índice par de negativo: no existe en $\mathbb{R}$; $\sqrt[3]{-8} = -2$. $\sqrt{a^2} = |a|$.</p>
      <table><tbody>
      <tr><td>$\sqrt[n]{ab} = \sqrt[n]{a}\sqrt[n]{b}$, $\sqrt[n]{\tfrac{a}{b}} = \tfrac{\sqrt[n]{a}}{\sqrt[n]{b}}$</td><td>$\sqrt{a}\cdot\sqrt{a} = a$</td></tr>
      <tr><td>$\sqrt[m]{\sqrt[n]{a}} = \sqrt[mn]{a}$</td><td>distinto índice: a potencias, $x^{\frac{2}{3}}x^{\frac{1}{2}} = x^{\frac{7}{6}}$</td></tr></tbody></table>
      <div class="box alert">No se reparte en sumas: $\sqrt{9 + 16} = 5 \neq 7$.</div>` },
    { t: 'Simplificar, operar, racionalizar', b: r`
      <ul><li>Saca el mayor factor potencia del índice: $\sqrt{72} = 6\sqrt{2}$, $\sqrt[3]{54} = 3\sqrt[3]{2}$.</li>
      <li>Solo se suman semejantes: $\sqrt{8} + \sqrt{18} = 5\sqrt{2}$. Producto: $a\sqrt{b}\cdot c\sqrt{d} = ac\sqrt{bd}$.</li>
      <li>Racionalizar: $\dfrac{k}{\sqrt{a}} = \dfrac{k\sqrt{a}}{a}$. Comparar: mete el coeficiente, $2\sqrt{5} = \sqrt{20}$.</li>
      <li>Lado = $\sqrt{\text{área}}$, arista = $\sqrt[3]{V}$; si $\sqrt{A} = \sqrt{B}$, $A = B$.</li></ul>
      <div class="box alert">Sale la <b>raíz</b> del factor: $\sqrt{25\cdot 2} = 5\sqrt{2}$, no $25\sqrt{2}$. $\sqrt{2} + \sqrt{3} \neq \sqrt{5}$.</div>` }
  ]
});

/* Versión compacta · M1 Álgebra */
Object.assign(COMPACTO, {
  ec_lineal: [
    { t: 'Despejar', b: r`
      <div class="cols"><div>
      <p><b>Regla de oro:</b> lo que haces a un lado lo haces al otro. Lo que <b>suma</b> pasa <b>restando</b>; lo que <b>multiplica</b> pasa <b>dividiendo</b> (con su signo), y al revés.</p>
      <p><b>Orden:</b> 1. Quita paréntesis. 2. Quita fracciones (multiplica <b>todos</b> los términos, de ambos lados, por el mcm). 3. $x$ a un lado, números al otro. 4. Divide por el número de la $x$.</p>
      <p>$7x - 4 = 3x + 12 \Rightarrow 4x = 16 \Rightarrow x = 4$. &nbsp; $\dfrac{x}{2} + \dfrac{x - 1}{3} = 3 \;\overset{\cdot 6}{\Rightarrow}\; 3x + 2(x - 1) = 18$.</p>
      </div><div>
      <div class="box alert"><b>Trampas</b><br>· $4(x - 1) = 4x - 4$, no $4x - 1$.<br>· $-(x + 4) = -x - 4$ y $-(2x - 6) = -2x + 6$: el menos cambia <b>todos</b> los signos.<br>· $-3x = 12 \Rightarrow x = \dfrac{12}{-3} = -4$.<br>· Con mcm 6: $6\cdot 3 = 18$ también; $\dfrac{x - 1}{3}\cdot 6 = 2(x - 1)$, con paréntesis.<br>· $3x = 15 \Rightarrow x = 5$, no $15 - 3$.</div>
      <div class="box"><b>Encontrar el paso con error:</b> rehaz cada paso; el primero que no coincide es el error (los siguientes solo lo arrastran).</div>
      </div></div>` },
    { t: 'Plantear un problema', b: r`
      <div class="cols"><div>
      <p>1. Llama $x$ a lo que no sabes. 2. Escribe todo lo demás con $x$. 3. "es / da / será" es $=$. 4. Resuelve. 5. <b>Responde lo que piden</b> (no siempre es $x$). 6. Comprueba en el enunciado o reemplaza las alternativas.</p>
      <table><thead><tr><th>Frase</th><th>Con $x$</th></tr></thead><tbody>
      <tr><td>el doble del número, más 3</td><td>$2x + 3$</td></tr>
      <tr><td>el doble de la suma del número y 3</td><td>$2(x + 3)$</td></tr>
      <tr><td>5 menos que el número</td><td>$x - 5$</td></tr>
      <tr><td>tres consecutivos</td><td>$x,\ x + 1,\ x + 2$</td></tr>
      <tr><td>dos tipos que suman 14</td><td>$x$ y $14 - x$</td></tr></tbody></table>
      </div><div>
      <div class="box"><b>Moldes típicos</b><br>· (valor de cada unidad)$\cdot x$ + lo fijo = total: $45x + 90 = 405$.<br>· Dos personas con lo mismo: $7p + 900 = 6p + 2330$.<br>· Encadenado: Teresa 9 más que Joaquín $= (x + 8) + 9$.<br>· Edades: en 12 años <b>ambos</b> suman 12; "será el doble" $\Rightarrow 3x + 12 = 2(x + 12)$.</div>
      <div class="box alert"><b>No olvides a nadie</b> al sumar los aportes, y divide al final: $3x = 36$ da $x = 12$, no 36.</div>
      </div></div>` },
    { t: 'Una, ninguna o infinitas', b: r`
      <table><thead><tr><th>Al final queda</th><th>Soluciones</th><th>Ejemplo</th></tr></thead><tbody>
      <tr><td>$x$ = un número</td><td>una</td><td>$5x = 0 \Rightarrow x = 0$</td></tr>
      <tr><td>algo falso ($1 = 6$)</td><td>ninguna</td><td>$3x - 1 = 3(x + 1) \Rightarrow -1 = 3$</td></tr>
      <tr><td>algo verdadero ($6 = 6$)</td><td>infinitas</td><td>$2(x + 3) = 2x + 6$</td></tr></tbody></table>
      <div class="box alert"><b>$x = 0$ sí es solución</b>: no lo confundas con "no tiene solución".</div>` }
  ],
  inec_lineal: [
    { t: 'Resolver', b: r`
      <div class="cols"><div>
      <p>Igual que una ecuación, con <b>una regla extra</b>: si multiplicas o divides por un <b>negativo</b>, el símbolo se da vuelta ($<\ \leftrightarrow\ >$, $\leq\ \leftrightarrow\ \geq$). Sumar, restar o dividir por un positivo no lo cambia.</p>
      <p>$-2x + 1 > 7 \Rightarrow -2x > 6 \Rightarrow x < -3$.</p>
      <p><b>Inecuación doble:</b> opera en las tres partes. $-3 < 2x + 1 \leq 9 \Rightarrow -4 < 2x \leq 8 \Rightarrow -2 < x \leq 4$: enteros $-1, 0, 1, 2, 3, 4$ (son 6).</p>
      </div><div>
      <div class="box"><b>Si $a < b$:</b> $a - 3 < b - 3$ y $\dfrac{a}{5} < \dfrac{b}{5}$, pero $-2a > -2b$.</div>
      <div class="box alert"><b>Trampas</b><br>· $-3x < 12$ da $x > -4$.<br>· $-3(x - 2) = -3x + 6$.<br>· Comprueba con el borde y con un número de afuera; con $>$ o $<$ el borde <b>no</b> es solución.</div>
      </div></div>` },
    { t: 'Intervalos y recta numérica', b: r`
      <table><thead><tr><th>Desigualdad</th><th>Intervalo</th><th>Recta</th></tr></thead><tbody>
      <tr><td>$x \geq -1$</td><td>$[-1, +\infty[$</td><td>punto lleno en $-1$, flecha a la derecha</td></tr>
      <tr><td>$x > -1$</td><td>$]-1, +\infty[$</td><td>punto vacío en $-1$, flecha a la derecha</td></tr>
      <tr><td>$x \leq 2$</td><td>$]-\infty, 2]$</td><td>punto lleno en 2, flecha a la izquierda</td></tr>
      <tr><td>$1 \leq x < 3$</td><td>$[1, 3[$</td><td><svg class="dibujo" viewBox="0 0 320 64" width="220" role="img" aria-label="Recta numérica: punto lleno en 1 y punto vacío en 3"><line x1="4" y1="36" x2="316" y2="36" stroke="#424245" stroke-width="1.5"/><line x1="70.7" y1="32" x2="70.7" y2="40" stroke="#424245" stroke-width="1.2"/><line x1="115.3" y1="32" x2="115.3" y2="40" stroke="#424245" stroke-width="1.2"/><line x1="160.0" y1="32" x2="160.0" y2="40" stroke="#424245" stroke-width="1.2"/><line x1="204.7" y1="32" x2="204.7" y2="40" stroke="#424245" stroke-width="1.2"/><rect x="115.3" y="22" width="89.4" height="14" fill="#ffe1c4" stroke="#e8680c" stroke-width="1.5"/><circle cx="115.3" cy="36" r="6" fill="#e8680c" stroke="#e8680c" stroke-width="2.5"/><circle cx="204.7" cy="36" r="6" fill="#fff" stroke="#e8680c" stroke-width="2.5"/><text x="70.7" y="58" font-size="13" text-anchor="middle" fill="#1d1d1f">0</text><text x="115.3" y="58" font-size="13" text-anchor="middle" fill="#1d1d1f">1</text><text x="204.7" y="58" font-size="13" text-anchor="middle" fill="#1d1d1f">3</text></svg></td></tr></tbody></table>
      <div class="box alert"><b>Lleno = incluido</b> ($\leq$, $\geq$, corchete que abraza). <b>Vacío = no incluido</b> ($<$, $>$, corchete hacia afuera). Junto a $\pm\infty$ el corchete va siempre abierto.</div>` },
    { t: 'Problemas: traducir y redondear', b: r`
      <div class="cols"><div>
      <table><thead><tr><th>Frase</th><th>Símbolo</th></tr></thead><tbody>
      <tr><td>a lo menos, como mínimo, al menos</td><td>$\geq$</td></tr>
      <tr><td>como máximo, a lo más, no puede ser mayor que</td><td>$\leq$</td></tr>
      <tr><td>más de, supera</td><td>$>$</td></tr>
      <tr><td>menos de</td><td>$<$</td></tr></tbody></table>
      <p><b>Moldes:</b> $25x \leq 2.000$ (dosis); $10.000 - 800 \geq 1.800x$ (lo que queda $\geq$ precio$\cdot$kilos); promedio $\dfrac{15{,}6 + x}{4} \geq 5{,}5 \Rightarrow x \geq 6{,}4$.</p>
      </div><div>
      <div class="box alert"><b>Respuestas enteras</b><br>· "Como máximo": redondea hacia abajo. $80 + 35x \leq 600 \Rightarrow x \leq 14{,}86$: 14 cajas.<br>· "Como mínimo": hacia arriba ($x \geq 7{,}2$: 8).<br>· Con $\geq$/$\leq$ el borde sirve: la nota mínima es justo $6{,}4$.</div>
      <div class="box"><b>Comparar planes:</b> B más barato que A: $14.000 + 20x < 8.000 + 50x \Rightarrow x > 200$. En 200 cuestan lo mismo (empate no cuenta): desde 201.</div>
      </div></div>` }
  ],
  alg_expresiones: [
    { t: 'Reducir y valorizar', b: r`
      <div class="cols"><div>
      <p><b>Términos semejantes:</b> mismas letras con los mismos exponentes. Solo esos se juntan: se operan los coeficientes y el factor literal se copia. $x = 1x$, $-x = -1x$.</p>
      <p>$3x - 2y + 5x + 7y - x = 7x + 5y$. &nbsp; $x^2 + 3x - 2x^2 + x = -x^2 + 4x$.</p>
      <p><b>Paréntesis:</b> un menos delante cambia <b>todos</b> los signos; un más no cambia ninguno: $2a - (3a - 4b) + (a - b) = 3b$.</p>
      </div><div>
      <p><b>Valorizar:</b> reemplaza con paréntesis. Orden: paréntesis, potencias, multiplicaciones/divisiones, sumas/restas.</p>
      <div class="box alert"><b>Trampas</b><br>· $3x + 2y \ne 5xy$; $x^2 + x^2 = 2x^2$, no $x^4$.<br>· $(-2)^2 = 4$, pero $-2^2 = -4$.<br>· Dividir por $\dfrac{1}{2}$ es multiplicar por 2.<br>· Con fracciones, calcula numerador y denominador por separado.</div>
      </div></div>` },
    { t: 'Multiplicar', b: r`
      <div class="cols"><div>
      <p><b>Monomios:</b> coeficientes se multiplican; exponentes de la misma letra se <b>suman</b>: $(-3x^2y)(4xy^3) = -12x^3y^4$.</p>
      <p><b>Monomio por polinomio:</b> multiplica a <b>cada</b> término: $-2x(3x^2 - 5x + 1) = -6x^3 + 10x^2 - 2x$.</p>
      <p><b>Binomio por binomio:</b> cuatro productos y se reduce: $(2x - 3)(x + 4) = 2x^2 + 8x - 3x - 12 = 2x^2 + 5x - 12$.</p>
      </div><div>
      <div class="box alert"><b>Signos y exponentes</b> $(-)(-) = +$: $-2(x - 5) = -2x + 10$. Al sumar el exponente no cambia; al multiplicar se suman: $x^3\cdot x^2 = x^5$, $3x\cdot 2x = 6x^2$.</div>
      </div></div>` },
    { t: 'Traducir y geometría', b: r`
      <div class="cols"><div>
      <p>Lee de adentro hacia afuera; lo que se multiplica o eleva entero va con paréntesis.</p>
      <table><tbody>
      <tr><td>el doble de la edad en 5 años, disminuido en 3</td><td>$2(k + 5) - 3$</td></tr>
      <tr><td>el cuadrado de la diferencia</td><td>$(a - b)^2$</td></tr>
      <tr><td>la diferencia de los cuadrados</td><td>$a^2 - b^2$</td></tr>
      <tr><td>4 menos que $x$</td><td>$x - 4$</td></tr>
      <tr><td>$n$ respuestas, $c$ correctas</td><td>incorrectas: $n - c$</td></tr>
      <tr><td>lápiz 300 menos que $p$; 3 cuadernos y 5 lápices</td><td>$3p + 5(p - 300)$</td></tr></tbody></table>
      </div><div>
      <div class="box"><b>Rectángulo</b> Perímetro $= 2(\text{largo}) + 2(\text{ancho})$ (sin $x^2$). Área $=$ largo $\cdot$ ancho (aparece $x^2$).</div>
      <div class="box alert"><b>Restar todo</b> Lo que sobra o un despeje como $C = I - G$ se resta entero con paréntesis: $(20x + 20) - (10x - 10) = 10x + 30$.</div>
      </div></div>` }
  ],
  alg_productos: [
    { t: 'Los productos notables', b: r`
      <table><thead><tr><th>Producto</th><th>Resultado</th></tr></thead><tbody>
      <tr><td>$(a + b)^2$</td><td>$a^2 + 2ab + b^2$</td></tr>
      <tr><td>$(a - b)^2$</td><td>$a^2 - 2ab + b^2$ &nbsp;(el último siempre $+$)</td></tr>
      <tr><td>$(a + b)(a - b)$</td><td>$a^2 - b^2$</td></tr>
      <tr><td>$(x + p)(x + q)$</td><td>$x^2 + (p + q)x + pq$</td></tr></tbody></table>
      <div class="cols"><div>
      <p>$a$ y $b$ son moldes: $(3x - 2)^2 = 9x^2 - 12x + 4$; $(2a + 5b)(2a - 5b) = 4a^2 - 25b^2$; $(x + 7)(x - 3) = x^2 + 4x - 21$; $\left(x + \tfrac{1}{2}\right)^2 = x^2 + x + \tfrac{1}{4}$.</p>
      <p>$(a - b)^2 = (b - a)^2$.</p>
      </div><div>
      <div class="box alert"><b>Trampas</b><br>· $(a + b)^2 \ne a^2 + b^2$: falta $2ab$.<br>· El doble lleva el 2: $(x + 5)^2$ tiene $10x$.<br>· $(2x)^2 = 4x^2$.<br>· $(x - 3)^2 \ne x^2 - 9$.</div>
      </div></div>` },
    { t: 'Usarlos', b: r`
      <div class="cols"><div>
      <p><b>Restar productos:</b> desarrolla cada uno y resta con paréntesis: $(2x - 3)^2 - (2x - 3)(2x + 3) = 4x^2 - 12x + 9 - 4x^2 + 9 = -12x + 18$.</p>
      <p><b>Cálculo mental:</b> $102\cdot 98 = 100^2 - 2^2 = 9996$; $31^2 = 900 + 60 + 1 = 961$.</p>
      <p><b>Sin despejar:</b> $(a + b)^2 = (a^2 + b^2) + 2ab$.</p>
      </div><div>
      <div class="box"><b>Áreas</b><br>· Marco de ancho 2 alrededor de un cuadrado $x$: $(x + 4)^2 - x^2 = 8x + 16$.<br>· Lado $a$ aumenta en 3: el área aumenta $(a + 3)^2 - a^2 = 6a + 9$.<br>· Un lado $+5$ y el otro $-5$: $(x + 5)(x - 5) = x^2 - 25$, el área baja 25.</div>
      <div class="box alert">Comprueba con $x = 1$: el original y tu resultado deben dar lo mismo.</div>
      </div></div>` }
  ],
  alg_factorizacion: [
    { t: 'Los cuatro casos', b: r`
      <p>Factorizar es escribir como multiplicación (deshacer el desarrollo). <b>Primero el factor común</b>; después revisa si el paréntesis se factoriza otra vez.</p>
      <table><thead><tr><th>Mira esto</th><th>Factoriza</th><th>Ejemplo</th></tr></thead><tbody>
      <tr><td>algo en todos los términos</td><td>MCD y cada letra común con su <b>menor</b> exponente</td><td>$15a^2b - 10ab^2 = 5ab(3a - 2b)$</td></tr>
      <tr><td>dos cuadrados con un menos</td><td>$a^2 - b^2 = (a + b)(a - b)$</td><td>$4x^2 - 9y^2 = (2x + 3y)(2x - 3y)$</td></tr>
      <tr><td>extremos cuadrados y medio $= 2ab$</td><td>$(a \pm b)^2$</td><td>$x^2 - 8x + 16 = (x - 4)^2$</td></tr>
      <tr><td>$x^2 + bx + c$</td><td>dos números: producto $c$, suma $b$</td><td>$x^2 + 2x - 15 = (x + 5)(x - 3)$</td></tr></tbody></table>
      <div class="cols"><div>
      <p><b>Signos:</b> $c > 0$: los dos con el signo de $b$ ($x^2 - 9x + 20 = (x - 4)(x - 5)$). $c < 0$: signos distintos.</p>
      <p><b>Completa:</b> $3x^2 - 12 = 3(x + 2)(x - 2)$; $2x^3 - 8x^2 + 8x = 2x(x - 2)^2$.</p>
      </div><div>
      <div class="box alert"><b>Trampas</b><br>· El factor común se saca <b>una vez</b>: $12x^2 + 20x = 4x(3x + 5)$, no $2^4x(\dots)$.<br>· Raíces, no mitades: $x^2 - 64 = (x + 8)(x - 8)$.<br>· $a^2 - b^2 \ne (a - b)^2$; $x^2 + 9$ no se factoriza así.<br>· Comprueba multiplicando.</div>
      </div></div>` },
    { t: 'Simplificar y aplicar', b: r`
      <div class="cols"><div>
      <p><b>Fracciones:</b> factoriza arriba y abajo y tacha solo <b>factores</b>: $\dfrac{x^2 + 3x}{x^2 - 9} = \dfrac{x(x + 3)}{(x + 3)(x - 3)} = \dfrac{x}{x - 3}$.</p>
      <p><b>Producto igual a cero:</b> algún factor es 0. $(p - 3)^2 - 36 = (p + 3)(p - 9) = 0 \Rightarrow p = -3$ o $p = 9$.</p>
      <p><b>Cálculo mental:</b> $51^2 - 49^2 = 100\cdot 2 = 200$; $47\cdot 23 + 47\cdot 77 = 47\cdot 100$.</p>
      </div><div>
      <div class="box"><b>Áreas</b><br>· Área $x^2 + 7x + 12$, un lado $x + 3$: el otro es $x + 4$.<br>· Cuadrado de área $(x + 6)^2$: lado $x + 6$, perímetro $4x + 24$.<br>· $x(x + 5) = 104 \Rightarrow (x + 13)(x - 8) = 0$: descarta la medida negativa, $x = 8$.</div>
      <div class="box alert">$\dfrac{x + 6}{x + 2} \ne 3$: los sumandos no se tachan.</div>
      </div></div>` }
  ],
  alg_prop_directa: [
    { t: 'Razón, proporción y reparto', b: r`
      <div class="cols"><div>
      <p><b>Razón</b> $a : b = \dfrac{a}{b}$. "Respectivamente": el primer número va con lo primero nombrado. <b>Proporción:</b> $\dfrac{a}{b} = \dfrac{c}{d} \Leftrightarrow a\cdot d = b\cdot c$ (numerador de una por denominador de la otra).</p>
      <p>Rojo : amarillo $= 3 : 5$ con 30 de amarillo: $\dfrac{3}{5} = \dfrac{x}{30} \Rightarrow x = 18$.</p>
      </div><div>
      <div class="box"><b>Reparto en $a : b$</b> Total $\div (a + b)$ = una parte; cada uno recibe sus partes. $840.000$ en $3 : 4$: $7$ partes de $120.000$; la mayor, $480.000$. Según aportes: simplifica la razón ($1400 : 700 = 2 : 1$) y reparte igual.</div>
      <div class="box alert">No dividas por 2 ni por $a$: se divide por $a + b$. La parte $a$ es $\dfrac{a}{a + b}$ del total.</div>
      </div></div>` },
    { t: 'Proporcionalidad directa', b: r`
      <div class="cols"><div>
      <p>Si una se multiplica por un número, la otra se multiplica por el <b>mismo</b>. $\dfrac{y}{x} = k$ constante, $y = kx$.</p>
      <p><b>$k$</b> = valor de <b>una</b> unidad (precio de 1, gramos por 1 kg). En $p = 0{,}025m$: $0{,}025$ kg $= 25$ g por cada kg.</p>
      <p><b>Tabla:</b> divide $y$ por $x$ en <b>todas</b> las columnas. <b>Gráfico:</b> recta que pasa por $(0, 0)$; un punto $(a, b)$ está en ella si $\dfrac{b}{a} = k$.</p>
      </div><div>
      <div class="box alert"><b>No es directa</b><br>· Que ambas crezcan no basta: $y = 2x + 1$ (o con cobro fijo, como el taxi) no pasa por el origen.<br>· Si $x$ se duplica, $y$ se duplica; no se suma lo mismo.</div>
      </div></div>` },
    { t: 'Regla de tres directa', b: r`
      <div class="cols"><div>
      <p><b>Valor unitario:</b> 12 h $\to$ 54.000: 1 h $\to$ 4500; 20 h $\to$ 90.000.</p>
      <p><b>Factor:</b> 75 km $\to$ 6 L; 225 km es el triple: 18 L.</p>
      <p><b>Escala:</b> 2 cm $=$ 200 m $\Rightarrow$ 1 cm $=$ 100 m; 11 cm $=$ 1100 m.</p>
      <p><b>Tabla con huecos:</b> $k = \dfrac{10}{4} = 2{,}5$: $p = 2{,}5\cdot 6$ y $q = \dfrac{25}{2{,}5}$.</p>
      </div><div>
      <div class="box alert"><b>Trampas</b><br>· Si una aumenta en 100, la otra no aumenta en 100: usa $k$ ($600\cdot 0{,}4 = 240$).<br>· Mismo orden en las dos razones: $\dfrac{4}{7200} = \dfrac{6}{x}$.<br>· Revisa el sentido: más de una, más de la otra.<br>· Cambia de unidad al final (gramos $\to$ cucharadas).</div>
      </div></div>` }
  ],
  alg_prop_inversa: [
    { t: 'Proporcionalidad inversa', b: r`
      <div class="cols"><div>
      <p>Si una se multiplica por un número, la otra se <b>divide</b> por el mismo. $x\cdot y = k$ constante, $y = \dfrac{k}{x}$. $k$ es el total: trabajo, distancia, comida, premio.</p>
      <table><thead><tr><th></th><th>Directa</th><th>Inversa</th></tr></thead><tbody>
      <tr><td>Constante</td><td>$\dfrac{y}{x} = k$</td><td>$x\cdot y = k$</td></tr>
      <tr><td>Fórmula</td><td>$y = kx$</td><td>$y = \dfrac{k}{x}$</td></tr>
      <tr><td>$x$ se duplica</td><td>$y$ se duplica</td><td>$y$ se divide por 2</td></tr>
      <tr><td>Gráfico</td><td>recta por el origen</td><td>hipérbola que no toca los ejes</td></tr></tbody></table>
      </div><div>
      <div class="box alert"><b>"Una sube y la otra baja" no basta</b> $y = 10 - x$ baja, pero $1\cdot 9 \ne 2\cdot 8$. Revisa $x\cdot y$ en <b>todas</b> las columnas o puntos.</div>
      <div class="box"><b>Ninguna:</b> edad y estatura, cobro con cargo fijo.</div>
      </div></div>` },
    { t: 'Problemas', b: r`
      <div class="cols"><div>
      <p>1. ¿Más de una da menos de la otra? 2. $k$ = producto conocido. 3. Divide por la nueva cantidad.</p>
      <p>8 obreros, 15 días: $k = 120$; 12 obreros: $10$ días. 80 km/h en 3 h: 240 km; a 60 km/h, 4 h. 30 personas, 12 días; llegan 6: $\dfrac{360}{36} = 10$. 3 llaves en 8 h; en 6 h: $\dfrac{24}{6} = 4$ llaves.</p>
      <p><b>Dos a la vez:</b> ve a lo que hace <b>una</b> unidad en <b>una</b> unidad de tiempo. 6 máquinas, 1200 piezas, 4 h: $\dfrac{1200}{4\cdot 6} = 50$ por máquina-hora; 1800 piezas en 3 h necesitan $\dfrac{600}{50} = 12$.</p>
      </div><div>
      <div class="box alert"><b>Trampas</b><br>· Regla de tres directa en un problema inverso (con menos obreros terminarían antes).<br>· Lo que hace <b>uno</b> se obtiene <b>dividiendo</b> por los trabajadores, no multiplicando.<br>· $k$ no es la respuesta: falta dividir.<br>· Ni sumes ni restes: 4 obreros más no son 4 días menos.</div>
      </div></div>` }
  ],
  alg_sistemas: [
    { t: 'Sistema y métodos', b: r`
      <p>Dos ecuaciones con $x$ e $y$ que se cumplen <b>a la vez</b>. La solución es el par $(x, y)$ que cumple <b>las dos</b> (primero $x$).</p>
      <table><thead><tr><th>Método</th><th>Cuándo</th><th>Cómo</th></tr></thead><tbody>
      <tr><td>Sustitución</td><td>una letra con coeficiente $\pm 1$</td><td>despeja y reemplaza <b>con paréntesis</b>: $x - 3(11 - 2x)$</td></tr>
      <tr><td>Igualación</td><td>las dos en forma $y = \dots$</td><td>$2x + 1 = -x + 7$</td></tr>
      <tr><td>Reducción</td><td>coeficientes opuestos</td><td>suma (o multiplica <b>toda</b> una ecuación y suma)</td></tr></tbody></table>
      <div class="box alert"><b>Trampas</b><br>· Multiplica también el lado derecho: $3x - y = 7$ por 3 es $9x - 3y = 21$.<br>· $-(9 - 2x) = -9 + 2x$.<br>· Con fracciones, multiplica la ecuación por el mcm.<br>· Termina: calcula la otra letra y responde lo pedido ($x$, $y$, $x + y$...).<br>· Si te dan la solución $(3, -1)$, reemplázala en cada ecuación para hallar parámetros.</div>` },
    { t: 'Una, ninguna o infinitas', b: r`
      <div class="cols"><div>
      <p>Cada ecuación es una recta; la solución es el <b>punto de corte</b>. Despeja $y$ y compara:</p>
      <table><thead><tr><th>Rectas</th><th>Pendiente y corte</th><th>Soluciones</th><th>Al resolver</th></tr></thead><tbody>
      <tr><td>se cortan</td><td>pendientes distintas</td><td>una</td><td>$x =$, $y =$</td></tr>
      <tr><td>paralelas</td><td>igual pendiente, distinto corte</td><td>ninguna</td><td>falso ($0 = 2$)</td></tr>
      <tr><td>coincidentes</td><td>todo igual</td><td>infinitas</td><td>$0 = 0$</td></tr></tbody></table>
      </div><div>
      <div class="box">$x + 2y = 5$ y $2x + 4y = 8$: la primera por 2 da $= 10$, no 8: paralelas. Con $= 10$ serían coincidentes (una es la otra multiplicada en <b>todos</b> sus términos).</div>
      <div class="box alert">Nunca exactamente dos soluciones.</div>
      </div></div>` }
  ],
  alg_sistemas_problemas: [
    { t: 'Plantear', b: r`
      <p>Nombra las dos incógnitas <b>con su unidad</b>. Busca dos totales: uno de <b>cantidades</b> y otro de <b>valor</b>; cada uno da una ecuación. Resuelve y comprueba en el enunciado.</p>
      <table><thead><tr><th>Contexto</th><th>Sistema</th></tr></thead><tbody>
      <tr><td>80 entradas a 5000 y 3000; 300.000</td><td>$x + y = 80$; $5000x + 3000y = 300.000$</td></tr>
      <tr><td>mezcla: 12 kg de 6000 y 10.000 a 7000 el kg</td><td>$x + y = 12$; $6000x + 10.000y = 12\cdot 7000$</td></tr>
      <tr><td>edades: suman 44; en 4 años, el triple</td><td>$a + h = 44$; $a + 4 = 3(h + 4)$</td></tr>
      <tr><td>tarifa fija $f$ + $v$ por minuto</td><td>$f + 40v = 2300$; $f + 70v = 3800$ (resta)</td></tr>
      <tr><td>suma 56, diferencia 18</td><td>$x + y = 56$; $x - y = 18$ (suma)</td></tr>
      <tr><td>40 autos y motos, 130 ruedas</td><td>$a + m = 40$; $4a + 2m = 130$</td></tr>
      <tr><td>planes: ¿cuándo cuestan lo mismo?</td><td>iguala: $10.000 + 45m = 16.000 + 30m$</td></tr></tbody></table>
      <div class="box">Divide la ecuación de dinero por el valor menor para achicar cuentas: $100x + 500y = 7400 \Rightarrow x + 5y = 74$.</div>` },
    { t: 'Interpretar', b: r`
      <div class="cols"><div>
      <p>· La <b>letra</b> es una cantidad: mira con qué precio va y en qué unidad está el total (precio por kilo $\Rightarrow$ $x$ son <b>kilos</b> de manzanas).<br>· <b>Precio $\cdot$ letra</b> es dinero: $2500x$ = dinero de las entradas de estudiante.<br>· $\dfrac{80}{100}\cdot B$ = lo pagado con 20 % de descuento: $B$ es el precio <b>original</b>.<br>· El <b>corte de dos rectas</b> es donde las dos cantidades valen lo mismo (ingresos = gastos).</p>
      </div><div>
      <div class="box alert"><b>Trampas</b><br>· No mezcles: $x + y = 300.000$ no tiene sentido.<br>· Cada incógnita con su propio precio.<br>· Edades: $p - 5 = 4(h - 5)$; el tiempo pasa para todos.<br>· No sumes lo que el enunciado excluye ("solo por las poleras": sin envíos).<br>· Responde la incógnita pedida, no la otra.</div>
      </div></div>` }
  ]
});

/* Versión compacta · M1 Funciones */
Object.assign(COMPACTO, {
  funcion_concepto: [
    { t: 'Función, imagen y preimagen', b: r`
      <p>Una <b>función</b> asigna a cada $x$ (variable independiente) <b>un solo</b> valor $y = f(x)$ (variable dependiente). Si no se dice nada, el dominio son todos los reales.</p>
      <table><thead><tr><th>Me dan</th><th>Hago</th></tr></thead><tbody>
      <tr><td>la $x$: piden $f(a)$, la <b>imagen</b> de $a$</td><td><b>evalúo</b>: cambio cada $x$ por $(a)$</td></tr>
      <tr><td>el resultado: $f(x) = b$, la <b>preimagen</b> de $b$</td><td><b>igualo</b> la fórmula a $b$ y despejo</td></tr></tbody></table>
      <p>Mini ejemplo: $g(x) = 8x - 5 = 35 \Rightarrow 8x = 40 \Rightarrow x = 5$. Para despejar, deshaz en orden inverso: $\dfrac{a + 1}{2} = 6 \Rightarrow a + 1 = 12 \Rightarrow a = 11$.</p>
      <p>Si falta una constante, el dato la entrega: $f(x) = ax + 3$ y $f(2) = 11$ dan $2a + 3 = 11$, o sea $a = 4$.</p>
      <div class="box alert"><b>Trampas</b> · Puede haber dos preimágenes: $x^2 = 9$ da $x = 3$ y $x = -3$; $x^2 = -4$ no tiene ninguna.<br>· Calcular la imagen cuando piden la preimagen (o al revés) es la alternativa incorrecta más típica.</div>` },
    { t: 'Evaluar sin errores de signo', b: r`
      <p>Reemplaza <b>siempre con paréntesis</b> y respeta el orden: potencia, multiplicación, suma.</p>
      <p>$f(x) = 2x^2 - 7x + 1$: $\ f(-3) = 2(-3)^2 - 7(-3) + 1 = 18 + 21 + 1 = 40$.</p>
      <div class="box alert"><b>Trampas</b> · $(-3)^2 = 9$, pero $-3^2 = -9$.<br>· $-x^2$ es $-(x^2)$: con $g(x) = -x^2 + 4$, $\ g(-2) = -(4) + 4 = 0$ (no $8$).<br>· Menos por menos da más: $-2\cdot(-1) = +2$.<br>· $f(a) + f(b) \neq f(a + b)$: evalúa cada uno y después suma.</div>` },
    { t: '¿Es función? Tablas y pares', b: r`
      <p><b>Pares</b> $(x, y)$: es función si ninguna $x$ se repite con salidas distintas. $\{(1, 4),\ (2, 5),\ (1, 6)\}$ <b>no</b> es función; $\{(1, 2),\ (2, 2),\ (3, 2)\}$ sí (repetir la $y$ está permitido).</p>
      <p><b>Gráfico</b>: si una recta vertical corta la curva dos veces, no es función. Una horizontal sí puede cortarla varias veces.</p>
      <p><b>Tabla</b>: la fórmula correcta debe calzar en <b>todas</b> las filas. Si $x$ sube de 1 en 1 y $f(x)$ sube siempre $m$, prueba $mx + f(0)$: la tabla $5, 8, 11, 14$ da $3x + 5$.</p>
      <div class="box alert"><b>Trampa</b> Una fórmula que calza en una sola fila no sirve: revisa al menos dos.</div>` },
    { t: 'Leer un gráfico', f: 12, b: r`
      <p><b>$f(a)$</b>: desde $x = a$ sube (o baja) hasta la curva y lee la altura en el eje $Y$.</p>
      <p><b>$f(x) = b$</b>: traza la horizontal a altura $b$ y, desde cada corte, baja al eje $X$ a leer las $x$.</p>
      <div class="qfig"></div>
      <p><b>Contexto (posición o distancia vs. tiempo)</b>: tramo que sube, avanza; tramo <b>plano</b>, detenido. La duración de la detención es la resta en el eje del tiempo: plano de $t = 1$ a $t = 2{,}5$ son $1{,}5$ h.</p>
      <div class="box alert"><b>No confundas</b> $f(2)$ pide una altura; $f(x) = 4$ pide las $x$ con esa altura.</div>` }
  ],

  lineal_afin: [
    { t: 'Lineal y afín', b: r`
      <p><b>Afín</b>: $f(x) = mx + n$, su gráfico es una recta. $n = f(0)$ es el valor de partida y $m$ lo que cambia por cada paso de 1 en $x$.</p>
      <p><b>Lineal</b>: $f(x) = mx$ ($n = 0$). Pasa por el origen y es proporcional: $\dfrac{y}{x}$ da siempre $m$ (con $m$ entero, fracción o negativo, como $-\dfrac{2}{5}x$).</p>
      <p>No son lineales: $3x + 2$ (afín), $x^2$ (cuadrática), $k(x) = 7$ (constante).</p>
      <p>Mini ejemplo: $110$ km/h $\to 33$ m y la función es $f(x) = ax$: $\ a = \dfrac{33}{110} = 0{,}3$, así que $f(30) = 9$. Si 4 kg cuestan $6.000$ pesos y es proporcional, $f(x) = 1.500x$ (precio de 1 kg).</p>
      <div class="box alert"><b>Trampa</b> Afín no es proporcional: con $f(0) = 4$ y $f(2) = 10$, la regla de tres da 25, pero $f(x) = 3x + 4$ y $f(5) = 19$.</div>` },
    { t: 'Pendiente', f: 4, b: r`
      <p>$$m = \dfrac{y_2 - y_1}{x_2 - x_1} = \dfrac{\text{lo que sube}}{\text{lo que avanza}}$$ Por $(1, 3)$ y $(3, 7)$: $m = \dfrac{4}{2} = 2$.</p>
      <p>$m > 0$: creciente (sube). $m < 0$: decreciente (baja). $m = 0$: constante (horizontal). Mientras más grande $|m|$, más inclinada: $y = 10x$ es más inclinada que $y = 3{,}7x$.</p>
      <div class="qfig"></div>
      <div class="box alert"><b>Trampas</b> · Las $y$ van arriba; al revés da $\dfrac{1}{2}$.<br>· Mismo orden arriba y abajo, y $2 - (-1) = 3$.<br>· Solo lo que sube (4) no es la pendiente: falta dividir.</div>` },
    { t: 'Cortes y fórmula de la recta', b: r`
      <p><b>Eje $Y$</b>: $x = 0$, punto $(0, n)$. $n > 0$ corta sobre el origen, $n < 0$ bajo el origen.</p>
      <p><b>Eje $X$</b>: iguala a $0$ y despeja: $-2x + 6 = 0 \Rightarrow x = 3$, punto $(3, 0)$. En general $x = -\dfrac{n}{m}$.</p>
      <p><b>Fórmula desde tabla o gráfico</b>: 1) $m$ con dos puntos; 2) $n$ reemplazando un punto; 3) comprueba con otro. Tabla $(2, 7), (4, 11), (6, 15)$: $m = 2$, $7 = 4 + n$, $n = 3$, $f(x) = 2x + 3$. En un gráfico, $n$ se lee donde corta al eje $Y$ y se usan puntos exactos de la cuadrícula.</p>
      <div class="box alert"><b>Trampas</b> · No inviertas: corte con $Y$ es $(0, n)$; con $X$ es $(x, 0)$.<br>· $-6 \div (-2) = +3$.<br>· Varias fórmulas calzan con un solo punto: comprueba con dos.</div>` },
    { t: 'Paralelas y cambios de m y n', b: r`
      <p><b>Paralelas</b>: misma pendiente. Paralela a $y = 3x - 1$ por $(0, 5)$: $y = 3x + 5$. Si el punto no está en el eje $Y$, reemplázalo para hallar $n$.</p>
      <p>Si cambia $m$ (con $n$ fijo), la recta <b>gira</b> en torno a $(0, n)$: más $m$, más inclinada. Si cambia $n$, se <b>traslada</b> arriba o abajo, paralela.</p>
      <p>Del dibujo a los signos: «decreciente y corta al eje $Y$ sobre el origen» es $m < 0$ y $n > 0$.</p>
      <div class="graf" data-a="0" data-b="2" data-c="1"></div>` }
  ],

  afin_modelos: [
    { t: 'Fijo más por unidad', b: r`
      <p>$$f(x) = (\text{por unidad})\cdot x + \text{fijo} \qquad\quad f(x) = \text{inicial} - (\text{ritmo})\cdot x$$ Lo que se paga <b>una vez</b> se suma; lo que se paga <b>por cada</b> unidad multiplica a $x$. Si algo se vacía, gasta o consume, el número de $x$ es negativo: estanque de 720 L que pierde 3 L/min, $f(x) = -3x + 720$.</p>
      <p>En $f(x) = 0{,}5x + 2$ (litros según minutos), el $2$ es lo que había al comenzar y el $0{,}5$ lo que entra por minuto.</p>
      <p>Cobro «por cada 200 m» o «por media hora»: cuenta primero las unidades. 3 km son $\dfrac{3.000}{200} = 15$ tramos.</p>
      <div class="box alert"><b>Prueba x = 0 y x = 1</b> Con $x = 0$ debe dar lo fijo (o lo inicial). Así se descartan $(100.000 + 150.000)x$, $150.000x + 100.000$ y fórmulas que dan litros negativos. Lee la fórmula completa: en $p(t - 15)$ los primeros 15 minutos no se cobran.</div>` },
    { t: 'Usar el modelo', b: r`
      <p><b>Calcular</b>: reemplaza y haz la multiplicación antes que la suma: $F(25) = 1{,}8\cdot 25 + 32 = 77$.</p>
      <p><b>Despejar</b>: iguala al total, <b>resta lo fijo</b> y divide: $1.000x + 2.000 = 9.000 \Rightarrow x = 7$. Vela $30 - 2t = 12 \Rightarrow 2t = 18 \Rightarrow t = 9$.</p>
      <p><b>Aumento igual cada año</b>: aumento anual por los años que pasan. De 2021 a 2030 hay $2030 - 2021 = 9$ aumentos.</p>
      <p><b>Dos datos</b> (3 meses: 55.000; 7 meses: 115.000): por unidad $= \dfrac{115.000 - 55.000}{7 - 3} = 15.000$; fijo $= 55.000 - 3\cdot 15.000 = 10.000$.</p>
      <div class="box alert"><b>Trampas</b> · Dividir el total sin restar antes lo fijo.<br>· Contar un año de más o de menos.<br>· Dar la mensualidad cuando piden la matrícula.</div>` },
    { t: 'Costo, ingreso y ganancia', b: r`
      <p>$$G = I - C \qquad C = I - G$$ Siempre con la función completa entre paréntesis.</p>
      <p>$I(x) = 1000x + 600.000$, $G(x) = 750x + 450.000$: $\ C(x) = (1000x + 600.000) - (750x + 450.000) = 250x + 150.000$.</p>
      <div class="box alert"><b>Trampa</b> El menos afecta a todo el paréntesis: $-(600x + 20.000) = -600x - 20.000$ y $-(-20.000) = +20.000$.</div>` },
    { t: 'Comparar dos planes', b: r`
      <p>Iguala las dos fórmulas completas: $A(x) = 20x + 10.000$, $B(x) = 50x$: $\ 10.000 = 30x$, $x \approx 333{,}3$. Antes conviene el que parte más abajo (B); después, el de menor pendiente (A).</p>
      <div class="box alert"><b>Entero siguiente</b> Si piden minutos enteros y sale $333{,}3$, el cambio ocurre en 334. Error típico: $\dfrac{10.000}{50}$ o $\dfrac{10.000}{70}$ en vez de $\dfrac{10.000}{50 - 20}$.</div>` },
    { t: 'Gráficos de un viaje', f: 14, b: r`
      <p>Distancia vs. tiempo: tramo <b>plano</b> = detenido; más inclinado = más rápido. Rapidez del tramo $= \dfrac{\text{km avanzados}}{\text{horas del tramo}}$ (es la pendiente).</p>
      <div class="qfig"></div>
      <div class="box alert"><b>Trampas</b> · La distancia total es la altura del último punto: no se suman alturas.<br>· Detenido de $t = 2$ a $t = 3$ es 1 hora, no «3 horas».</div>` }
  ],

  ec_cuadratica: [
    { t: 'Ordenar y casos fáciles', b: r`
      <p>Ecuación de segundo grado: $ax^2 + bx + c = 0$ con $a \neq 0$. Primero deja <b>un 0 a un lado</b> y lee $a$, $b$, $c$ con su signo ($x^2 = 1\cdot x^2$; si falta un término, su número es 0).</p>
      <p><b>Sin término en $x$</b>: despeja $x^2$ y saca raíz con $\pm$. $2x^2 = 50 \Rightarrow x^2 = 25 \Rightarrow x = \pm 5$. ($x^2 = -9$: sin solución.)</p>
      <p><b>Sin número solo</b>: saca $x$ factor común. $x^2 = 3x \Rightarrow x(x - 3) = 0 \Rightarrow x = 0$ o $x = 3$.</p>
      <p><b>Regla del cero</b>: si un producto da 0, algún factor es 0 (solo funciona igualado a 0).</p>
      <div class="box alert"><b>Trampas</b> · Olvidar la raíz negativa.<br>· Dividir por $x$: se pierde $x = 0$.<br>· Quedarse en $x^2 = 25$ sin sacar raíz.</div>` },
    { t: 'Factorizar con dos números', b: r`
      <p>Si $a = 1$: busca dos números que <b>multiplicados</b> den $c$ y <b>sumados</b> den $b$. $x^2 - 7x + 12$: $-3$ y $-4$, así que $(x - 3)(x - 4) = 0$ y $x = 3$ o $x = 4$.</p>
      <p><b>Signos</b>: $c > 0$: mismo signo, el de $b$. $\ c < 0$: signos distintos, se <b>restan</b> para dar $|b|$ y el más grande lleva el signo de $b$. $x^2 + 2x - 48$: $8$ y $-6$, $(x + 8)(x - 6) = 0$.</p>
      <p>Con $a = 1$, las dos soluciones multiplicadas dan $c$. Si conoces una solución, reemplázala para hallar el coeficiente que falta: $x = 2$ en $x^2 + bx - 10 = 0$ da $b = 3$, y la otra es $-5$.</p>
      <div class="box alert"><b>Trampa</b> El signo se da vuelta al despejar: $(x - 3)(x - 4) = 0$ da $3$ y $4$, no $-3$ y $-4$.</div>` },
    { t: 'Fórmula general y discriminante', b: r`
      <p>$$x = \dfrac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$ $3x^2 - 5x - 2 = 0$: $\Delta = 25 + 24 = 49$, $x = \dfrac{5 \pm 7}{6}$, o sea $2$ y $-\dfrac{1}{3}$.</p>
      <p><b>Discriminante</b> $\Delta = b^2 - 4ac$: positivo, <b>dos</b> soluciones; cero, <b>una</b>; negativo, <b>ninguna</b> real. Para «exactamente una»: $x^2 - 4x + k$ da $16 - 4k = 0$, $k = 4$.</p>
      <div class="box alert"><b>Trampas</b> · $-b$ cambia el signo: si $b = -6$, $-b = +6$.<br>· $(-5)^2 = 25$, no $-25$.<br>· $2a$ divide a <b>todo</b> lo de arriba (no solo a la raíz, ni dividir por $a$).<br>· $4ac$ con signo: $25 - (-24) = 49$.</div>` },
    { t: 'Problemas con enunciado', b: r`
      <p>1) Nombra la incógnita. 2) Traduce: «5 más que $x$» es $x + 5$; «el doble» $2x$; «el cuadrado» $x^2$; consecutivos $x$ y $x + 1$. 3) Plantea, deja un 0 a un lado y resuelve.</p>
      <p>Mini ejemplo: largo $x + 5$, área 104: $x^2 + 5x - 104 = 0 \Rightarrow (x + 13)(x - 8) = 0$; ancho 8, largo 13.</p>
      <p>Fórmulas dadas: reemplaza y despeja. $45 = 10\cdot\dfrac{t^2}{2} \Rightarrow t^2 = 9 \Rightarrow t = 3$.</p>
      <div class="box alert"><b>Trampas</b> · Descarta el negativo si es medida, tiempo o «positivo»; si es «un número», sirve.<br>· Responde lo pedido: perímetro $8 + 13 + 8 + 13 = 42$, no un lado ni la mitad (21); la suma de los consecutivos, no uno de ellos.</div>` }
  ],

  cuadratica_grafico: [
    { t: 'Forma de la parábola y corte con Y', f: 1, b: r`
      <p>$f(x) = ax^2 + bx + c$ ($a \neq 0$) dibuja una <b>parábola</b>.</p>
      <p>$a > 0$: abre hacia arriba (vértice = mínimo). $a < 0$: hacia abajo (vértice = máximo). Mientras más grande $|a|$, más angosta: $3x^2$ es más angosta que $x^2$ (mismo vértice); $\dfrac{1}{2}x^2$ más ancha.</p>
      <div class="qfig"></div>
      <p><b>Corte con el eje $Y$</b>: $x = 0$, siempre $(0, c)$. En $2x^2 - 3x - 5$: $(0, -5)$.</p>
      <div class="box alert"><b>Trampas</b> · Solo el signo de $a$ dice hacia dónde abre: $-x^2 + 3x + 4$ abre hacia abajo.<br>· $(0, c)$ no es $(c, 0)$, y $c$ no es el número de $x$ ni el de $x^2$.</div>` },
    { t: 'Ceros y discriminante', f: 5, b: r`
      <p><b>Ceros</b> (cortes con el eje $X$): iguala a 0 y resuelve. $x^2 - 6x + 8 = 0 \Rightarrow (x - 2)(x - 4) = 0$: corta en $x = 2$ y $x = 4$.</p>
      <p><b>¿Cuántos cortes?</b> $\Delta = b^2 - 4ac$: positivo dos, cero uno (toca en el vértice), negativo ninguno.</p>
      <div class="qfig"></div>
      <p>Con parámetro: $x^2 - 4x + c$ no corta al eje $X$ si $16 - 4c < 0$, o sea $c > 4$ (con $c = 4$ lo toca).</p>
      <div class="box alert"><b>Trampas</b> · Los ceros son $2$ y $4$: no $-2$ y $-4$ (falta despejar), ni $0$ y $8$ (eso es el corte con $Y$), ni la $x$ del vértice.<br>· $(-4)^2 = 16$, no $-16$.<br>· En $16 - 4c < 0$, divide por 4: $c > 4$, no $c > 16$.</div>` },
    { t: 'Vértice y eje de simetría', f: 8, b: r`
      <p>$$x_v = -\dfrac{b}{2a} \qquad y_v = f(x_v)$$ $-2x^2 + 8x - 3$: $x_v = -\dfrac{8}{-4} = 2$, $y_v = -8 + 16 - 3 = 5$; vértice $(2, 5)$, máximo 5.</p>
      <p><b>Eje de simetría</b>: la recta $x = x_v$. <b>Espejo</b>: si $f(p) = f(q)$, el eje es $x = \dfrac{p + q}{2}$ (también el punto medio de los ceros). $f(1) = f(7)$ da $x = 4$. El gemelo de un punto está a la misma distancia al otro lado: eje $x = -1$ y punto $(2, 7)$ dan $f(-4) = 7$.</p>
      <div class="qfig"></div>
      <div class="box alert"><b>Trampas</b> · No olvides el menos de $-\dfrac{b}{2a}$ ni el 2 del denominador.<br>· Refleja respecto del eje, no del eje $Y$.<br>· La distancia entre los puntos ($7 - 1$) no es la posición del eje.</div>` },
    { t: 'Forma canónica y traslaciones', b: r`
      <p>$f(x) = a(x - h)^2 + k$ tiene vértice $(h, k)$: el de <b>adentro</b> con signo cambiado, el de <b>afuera</b> tal cual. $(x - 2)^2 + 1 \to (2, 1)$; $\ -(x + 1)^2 + 4 \to (-1, 4)$, máximo 4, ceros $x + 1 = \pm 2$: $1$ y $-3$.</p>
      <p>Número sumado afuera: $x^2 + 3$ sube 3, $x^2 - 2$ baja 2. Dentro del paréntesis: $(x - 2)^2$ va 2 a la <b>derecha</b>, $(x + 3)^2$ 3 a la <b>izquierda</b>.</p>
      <div class="box alert"><b>Reconocer en un gráfico</b> Descarta en orden: 1) hacia dónde abre; 2) corte con $Y$ $(0, c)$; 3) vértice o ceros (reemplaza esas $x$ en las alternativas).</div>` }
  ],

  cuadratica_problemas: [
    { t: 'Las cuatro preguntas', b: r`
      <p>Primero decide si piden una $x$ («¿cuándo?», «¿cuántas unidades?», «¿qué medida?») o una $y$ («¿qué altura?», «¿cuánta área o ganancia?»).</p>
      <table><thead><tr><th>Pregunta</th><th>Receta</th></tr></thead><tbody>
      <tr><td>Valor inicial, ¿desde dónde parte?</td><td>$x = 0$: queda el número solo</td></tr>
      <tr><td>¿Cuándo llega al máximo?</td><td>$x_v = -\dfrac{b}{2a}$</td></tr>
      <tr><td>¿Cuál es el máximo?</td><td>reemplaza $x_v$ en la fórmula</td></tr>
      <tr><td>¿Cuándo llega al suelo o vale 0?</td><td>iguala a 0; elige el cero que no es el de partida</td></tr></tbody></table>
      <div class="box alert"><b>Trampa</b> Las alternativas incorrectas suelen ser la $x$ cuando piden la $y$ (o al revés), la altura inicial cuando piden la máxima, o un coeficiente de la fórmula.</div>` },
    { t: 'Lanzamientos', f: 5, b: r`
      <p>$h(t) = -5t^2 + 20t$: $a < 0$, abre hacia abajo. $t_v = -\dfrac{20}{-10} = 2$ s; máximo $h(2) = -20 + 40 = 20$ m. Suelo: $-5t(t - 4) = 0$, $t = 4$ s.</p>
      <div class="qfig"></div>
      <p>$h(t) = -5t^2 + 10t + 15$: parte a 15 m; $t_v = 1$, máximo $h(1) = 20$ m. Se deja caer: $80 - 5t^2 = 0 \Rightarrow t^2 = 16 \Rightarrow t = 4$ s. Chorro $-0{,}1x^2 + 2x = 0 \Rightarrow x(-0{,}1x + 2) = 0$: cae a 20 m.</p>
      <div class="box alert"><b>Trampas</b> · $t^2 = 16$ no es la respuesta: saca raíz y quédate con la positiva.<br>· En $-5t^2$ con $t = 2$: $-5\cdot 4 = -20$.</div>` },
    { t: 'Áreas máximas', b: r`
      <p><b>Cerca alrededor</b> (perímetro $P$): un lado $x$, el otro $\dfrac{P}{2} - x$. Con 40 m: $A(x) = x(20 - x)$, máximo en $x = 10$: un <b>cuadrado</b>, área 100 m².</p>
      <p><b>Contra un muro</b> (malla $L$ en tres lados): $A(x) = x(L - 2x)$. Con 60 m: $A = -2x^2 + 60x$, $x_v = 15$, frente $60 - 30 = 30$, área $450$ m². <b>No</b> es cuadrado.</p>
      <p><b>Escala</b>: si el lado se multiplica por $k$, el área se multiplica por $k^2$ (triplicar: por 9).</p>
      <div class="box alert"><b>Trampas</b> · Usar 20 como cada lado ($20\cdot 20 = 400$).<br>· Con muro, tomar $15\cdot 15$ o suponer cuadrado.</div>` },
    { t: 'Ganancias y otras fórmulas', f: 14, b: r`
      <p>$G(x) = -x^2 + 40x - 300$: sin vender, $G(0) = -300$. Unidades de ganancia máxima $x_v = 20$; ganancia máxima $G(20) = 100$. Ni gana ni pierde: multiplica por $-1$, $x^2 - 40x + 300 = (x - 10)(x - 30) = 0$.</p>
      <div class="qfig"></div>
      <p>Si $a < 0$, la función es <b>positiva entre los dos ceros</b>: gana con $10 < x < 30$.</p>
      <p>Otras fórmulas: reemplaza y haz primero la potencia ($d(80) = \dfrac{80^2}{100} = 64$), o iguala al dato y resuelve: $\dfrac{n(n - 1)}{2} = 45 \Rightarrow n^2 - n - 90 = 0 \Rightarrow n = 10$ (descarta $-9$).</p>
      <div class="box alert"><b>Trampa</b> 20 son unidades y 100 es dinero: no los cambies.</div>` }
  ]
});

/* Versión compacta · M1 Geometría */
Object.assign(COMPACTO, {
  geo_pitagoras: [
    { t: 'El teorema', b: r`
      <div class="cols"><div>
      <p>Solo en triángulos <b>rectángulos</b>. Catetos $a$, $b$ (forman el ángulo recto); hipotenusa $c$ (al frente del ángulo recto, la más larga):
      $$a^2 + b^2 = c^2$$</p>
      <ul><li>Falta la hipotenusa: <b>suma</b>, $c = \sqrt{a^2 + b^2}$.</li>
      <li>Falta un cateto: <b>resta</b>, $a = \sqrt{c^2 - b^2}$.</li>
      <li>Escalera, rampa, tensor: hipotenusa.</li></ul>
      </div><div>
      <div class="qfig"><img class="tikz" src="paes/m1/fig/geo_pit_cuadrados.svg" alt="Triángulo rectángulo de catetos 3 y 4 e hipotenusa 5, con un cuadrado cuadriculado sobre cada lado: 9, 16 y 25 cuadraditos"></div>
      <div class="box alert">$\sqrt{36 + 64} \neq 6 + 8$. No olvides la raíz. Cateto mayor que la hipotenusa: sumaste en vez de restar ($x^2 + 9 = 16 \Rightarrow x^2 = 7$).</div>
      </div></div>` },
    { t: 'Tríos y recíproco', b: r`
      <p><b>Tríos:</b> 3, 4, 5 · 5, 12, 13 · 8, 15, 17 · 7, 24, 25 · 9, 40, 41 · 12, 35, 37. Sus múltiplos también: 6, 8, 10; 10, 24, 26; 0,7; 2,4; 2,5.</p>
      <div class="box"><b>Recíproco</b> Si (lado mayor)$^2$ = suma de los cuadrados de los otros dos, el triángulo es rectángulo y el ángulo recto está al frente del <b>lado mayor</b>. 4, 5, 6: $16 + 25 = 41 \neq 36$, no.</div>` },
    { t: 'Diagonales y figuras', b: r`
      <div class="cols"><div>
      <ul><li>Rectángulo $a \times b$: $d = \sqrt{a^2 + b^2}$ (la diagonal no es parte del perímetro). Cuadrado: $d = \ell\sqrt{2}$.</li>
      <li>Caja: $D = \sqrt{a^2 + b^2 + c^2}$. Si te dan $D$, eleva al cuadrado y despeja.</li>
      <li>Razón $9 : 16$: alto $9x$, ancho $16x$ ($x$: factor de proporcionalidad).</li>
      <li>Isósceles: la altura cae al medio de la base (cateto $\tfrac{\text{base}}{2}$). Rombo: diagonales se cortan por la mitad en ángulo recto.</li>
      <li>Trapecio rectángulo: cateto vertical = diferencia de los lados paralelos.</li></ul>
      </div><div>
      <div class="qfig"><img class="tikz" src="paes/m1/fig/geo_pit_diagonales.svg" alt="A la izquierda un rectángulo de lados a y b con su diagonal d; a la derecha una caja de aristas a, b y c con la diagonal del piso y la diagonal interior D"></div>
      </div></div>` },
    { t: 'Distancia entre puntos', b: r`
      <p>$d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$; $(-2, 1)$ a $(4, 9)$: catetos 6 y 8, $d = 10$. Recorridos: junta lo horizontal y lo vertical, y Pitágoras una vez.</p>
      <div class="box alert">$4 - (-2) = 6$. Lee qué piden: ¿la diagonal o lo que se ahorra?</div>` }
  ],

  geo_areas: [
    { t: 'Perímetro y área', b: r`
      <p><b>Perímetro</b>: suma del borde (cm). <b>Área</b>: superficie (cm$^2$). Pasa todo a la misma unidad antes de operar.</p>
      <table><thead><tr><th>Figura</th><th>Perímetro</th><th>Área</th></tr></thead><tbody>
      <tr><td>Rectángulo $a \times b$</td><td>$2(a + b)$</td><td>$a \cdot b$</td></tr>
      <tr><td>Cuadrado de lado $\ell$</td><td>$4\ell$</td><td>$\ell^2$ ($\ell = \sqrt{A}$)</td></tr>
      <tr><td>Triángulo</td><td>suma de los 3 lados</td><td>$\dfrac{b \cdot h}{2}$, $h = \dfrac{2A}{b}$</td></tr>
      <tr><td>Paralelogramo</td><td>$2(b + \text{lado})$</td><td>$b \cdot h$</td></tr>
      <tr><td>Rombo</td><td>$4\ell$</td><td>$\dfrac{D \cdot d}{2}$</td></tr>
      <tr><td>Trapecio</td><td>suma de los 4 lados</td><td>$\dfrac{(B + b)\, h}{2}$, $h = \dfrac{2A}{B + b}$</td></tr></tbody></table>` },
    { t: 'La altura', b: r`
      <div class="cols"><div>
      <p>La altura es <b>perpendicular</b> a la base, nunca el lado inclinado. En el obtusángulo cae fuera; en el rectángulo son los catetos. Base sobre un eje: la altura es la otra coordenada del vértice opuesto.</p>
      <p>Trapecio isósceles sin altura: cada esquina mide $\tfrac{B - b}{2}$ y $h$ sale con Pitágoras. Trapecio rectángulo: el lado perpendicular es la altura.</p>
      </div><div>
      <div class="qfig"><img class="tikz" src="paes/m1/fig/geo_ar_alturas.svg" alt="Tres triángulos con su base b y su altura h: en el acutángulo la altura cae dentro, en el rectángulo es un cateto y en el obtusángulo cae fuera, sobre la prolongación de la base"></div>
      <div class="box alert">No olvides el "$\div 2$" del triángulo, rombo y trapecio (el paralelogramo no lo lleva).</div>
      </div></div>` },
    { t: 'Compuestas y trampas', b: r`
      <ul><li>Sumar partes o <b>restar</b>: sombreado = total − blanco; L = rectángulo − esquina.</li>
      <li>Perímetro: solo el borde de afuera. Cuadraditos: lados del borde × lado.</li>
      <li>Triángulo inscrito con base y vértice en lados opuestos: mitad del rectángulo.</li>
      <li>Camino de ancho 2 por dentro: le quita 4 a cada medida.</li>
      <li>Perímetro dado: $2(a + b) = P$, no $P - a$.</li></ul>
      <div class="box alert">Medidas $\times k$: área $\times k^2$. Mismo perímetro no implica misma área.</div>` }
  ],

  geo_circulo: [
    { t: 'Fórmulas', b: r`
      <p>Radio $r$, diámetro $d = 2r$. Perímetro $P = 2\pi r = \pi d$; área $A = \pi r^2$. Al revés: $r = \dfrac{P}{2\pi}$. Deja en $\pi$ o usa $\pi \approx 3{,}14$ si lo piden.</p>
      <ul><li>Rueda: una vuelta avanza $\pi d$; vueltas = distancia ÷ perímetro.</li>
      <li>Cercar = perímetro; cubrir = área. Comparar círculos: por $r^2$, no por diámetros.</li>
      <li>Radio $\times k$: perímetro $\times k$, área $\times k^2$.</li></ul>
      <div class="box alert"><b>¿Me dieron $r$ o $d$?</b> $d = 12 \Rightarrow A = 36\pi$, no $144\pi$. $r^2 \neq 2r$; $2\pi r$ es perímetro (cm), $\pi r^2$ área (cm$^2$).</div>` },
    { t: 'Partes del círculo', b: r`
      <div class="cols"><div>
      <p>Sector de ángulo $\alpha$: $A = \dfrac{\alpha}{360°}\pi r^2$, arco $= \dfrac{\alpha}{360°}2\pi r$. Semicírculo $\tfrac{1}{2}$, cuarto $\tfrac{1}{4}$, $n$ trozos iguales $\tfrac{1}{n}$.</p>
      <p>Minutero: $\tfrac{15}{60} = \tfrac{1}{4}$ de vuelta.</p>
      </div><div>
      <div class="qfig"><img class="tikz" src="paes/m1/fig/geo_ci_sectores.svg" alt="Un semicírculo, un cuarto de círculo y un sector de 60 grados, con la fracción del área del círculo que representa cada uno"></div>
      <div class="box alert">Borde del semicírculo: $\pi r + 2r$. Dos semicircunferencias iguales = una circunferencia; cuatro cuartos iguales = un círculo.</div>
      </div></div>` },
    { t: 'Sombreados', b: r`
      <ul><li>Total − blanco. Círculo inscrito en cuadrado: lado = diámetro ($100 - 25\pi$).</li>
      <li>Corona: $\pi(R^2 - r^2)$, nunca $\pi(R - r)^2$.</li>
      <li>Círculos que caben justos: cuenta cuántos diámetros entran en el lado.</li></ul>` }
  ],

  geo_area_cuerpos: [
    { t: 'Cuerpos y redes', b: r`
      <div class="cols"><div>
      <p>Cubo y paralelepípedo: 6 caras, 12 aristas, 8 vértices. Cilindro: 2 bases circulares + cara curva. Área de superficie = área de la red.</p>
      <p>Red de cubo: en una fila de 4 (las paredes), tapa y fondo van <b>uno a cada lado</b> de la fila. No sirven el bloque $2 \times 3$ ni dos cuadrados al mismo lado.</p>
      </div><div>
      <div class="qfig"><img class="tikz" src="paes/m1/fig/geo_ac_red_cil.svg" alt="Cilindro de radio r y altura h y su red: un rectángulo de largo 2 pi r y alto h, con dos círculos de radio r"></div>
      </div></div>` },
    { t: 'Fórmulas', b: r`
      <table><thead><tr><th>Cuerpo</th><th>Área lateral</th><th>Área total</th></tr></thead><tbody>
      <tr><td>Cubo de arista $a$</td><td>$4a^2$</td><td>$6a^2$ (arista $= \sqrt{A/6}$)</td></tr>
      <tr><td>Paralelepípedo $a \times b \times c$</td><td>$2(a + b)\,c$</td><td>$2(ab + bc + ac)$</td></tr>
      <tr><td>Cilindro</td><td>$2\pi r h = \pi d h$</td><td>$2\pi r h + 2\pi r^2$</td></tr></tbody></table>
      <p>Red del cilindro: rectángulo de $2\pi r$ por $h$ (etiqueta de la lata). Con incógnita: plantea y despeja ($32 + 16h = 160$).</p>` },
    { t: 'Qué caras se cuentan', b: r`
      <ul><li>Sin tapa / sin base: total − una cara ($5a^2$; lateral + 1 base). Pieza: paredes + techo, sin piso.</li>
      <li>Cuerpos pegados: se pierden <b>las dos</b> caras que se tocan.</li>
      <li>Objetos que caben justo: pelotas de radio 3 → tubo de $r = 3$, $h = 3 \cdot 6$.</li>
      <li>Aristas $\times k$: área $\times k^2$.</li></ul>
      <div class="box alert">Cada cara va <b>dos veces</b> (falta el "por 2"). No confundas $6a^2$ (cm$^2$) con $a^3$ (cm$^3$). Diámetro no es radio.</div>` }
  ],

  geo_volumen: [
    { t: 'Fórmulas', b: r`
      <p>Volumen = base × altura (cm$^3$). Cubo $a^3$ (no $3a$); paralelepípedo $a \cdot b \cdot c$; cilindro $\pi r^2 h$ (acostado: $h$ = largo).</p>
      <p>Al revés: altura $= \dfrac{V}{\text{base}}$; arista $= \sqrt[3]{V}$.</p>
      <div class="box alert">Se multiplica, nunca se suma. $2\pi r h$ es área lateral, no volumen. Diámetro como radio: volumen $\times 4$.</div>` },
    { t: 'Capacidad y agua', b: r`
      <p>$1\text{ L} = 1\text{ dm}^3 = 1000\text{ cm}^3$; $1\text{ cm}^3 = 1\text{ mL}$; $1\text{ m}^3 = 1000\text{ L}$. Un cubo de 10 cm de arista es 1 L.</p>
      <ul><li>Agua en caja: base × <b>altura del agua</b> (no la del recipiente). Altura $= V \div$ base.</li>
      <li>Objeto sumergido: $V$ = base × lo que sube el agua.</li>
      <li>Caudal $Q = \dfrac{V}{t}$; tiempo $= V \div Q$ con unidades iguales.</li>
      <li>"Vasos completos": redondea hacia abajo.</li></ul>
      <div class="box alert">Pasa a la misma unidad <b>antes</b> de multiplicar: de m$^3$ a cm$^3$ es $\times 1.000.000$.</div>` },
    { t: 'Escalas y conteos', b: r`
      <div class="cols"><div>
      <ul><li>Una medida $\times k$: $V \times k$ (+20 % de altura: $V \times 1{,}2$). Radio $\times 2$: $V \times 4$. Todas las aristas $\times k$: $V \times k^3$.</li>
      <li>Cajas en un contenedor: cuántas caben por cada medida y multiplica.</li>
      <li>Fundir y rehacer: el volumen se conserva ($216 \div 8 = 27$).</li>
      <li>Espacio vacío: recipiente − contenido.</li>
      <li>Lámina $L \times A$ con cuadrado $x$ en cada esquina: $x(L - 2x)(A - 2x)$.</li></ul>
      </div><div>
      <div class="qfig"><img class="tikz" src="paes/m1/fig/geo_vo_escala.svg" alt="Un cubo de arista 1 y un cubo de arista 2 formado por 8 cubos como el primero"></div>
      </div></div>` }
  ],

  geo_vectores: [
    { t: 'Puntos', b: r`
      <p>$(x, y)$: primero horizontal, luego vertical. Cuadrantes: I $(+, +)$, II $(-, +)$, III $(-, -)$, IV $(+, -)$. Eje X: $y = 0$; eje Y: $x = 0$ (no son de ningún cuadrante).</p>
      <div class="box alert">$(2, 5) \neq (5, 2)$. Con letras, anota signos: $P(a, b)$ en IV $\Rightarrow a > 0$, $b < 0$, y $Q(-a, b)$ está en III. Cuadrícula con escala: casillas × lo que vale cada una.</div>` },
    { t: 'Vectores', b: r`
      <div class="cols"><div>
      <p>$\vec{u} = (a, b)$ = desplazamiento. Magnitud (largo) $= \sqrt{a^2 + b^2}$, dirección (inclinación), sentido (hacia dónde apunta). Opuesto: $(-a, -b)$, mismo largo y dirección, sentido contrario.</p>
      <ul><li>$\overrightarrow{AB} = B - A$ (final − inicial); $\overrightarrow{BA} = -\overrightarrow{AB}$.</li>
      <li>Suma y resta coordenada a coordenada; $k\vec{u} = (ka, kb)$.</li>
      <li>Paralelogramo $ABCD$: $D = A + (C - B)$.</li></ul>
      </div><div>
      <div class="qfig"><img class="tikz" src="paes/m1/fig/tra_vector_ab.svg" alt="Vector de A(1, 2) a B(5, -1); en línea segmentada, 4 unidades a la derecha y 3 hacia abajo"></div>
      <div class="box alert">No se multiplican coordenadas ni se suman los puntos. $|(6, 8)| = 10$, no 14.</div>
      </div></div>` },
    { t: 'Trasladar', b: r`
      <ul><li>$P' = P + \vec{v}$; al revés $P = P' - \vec{v}$; vector de una figura = imagen − original (de un vértice).</li>
      <li>Dos traslaciones = una con la suma de los vectores.</li>
      <li>Este $+x$, oeste $-x$, norte $+y$, sur $-y$: suma con signo lo horizontal y lo vertical por separado. Si no parte del origen, súmale el punto inicial.</li>
      <li>Imagen sobre el eje Y: su $x$ vale 0.</li></ul>` }
  ],

  geo_traslacion_reflexion: [
    { t: 'Isometrías', b: r`
      <p>Traslación, reflexión y rotación conservan lados, ángulos, perímetro y área. Solo la <b>reflexión invierte la orientación</b> (imagen "de espejo").</p>
      <p>Traslación según $(a, b)$: $(x, y) \to (x + a, y + b)$; el vector sale de un vértice y su imagen.</p>` },
    { t: 'Reflexiones', b: r`
      <div class="cols"><div>
      <table><thead><tr><th>Respecto de</th><th>Regla</th></tr></thead><tbody>
      <tr><td>eje X</td><td>$(x, -y)$</td></tr>
      <tr><td>eje Y</td><td>$(-x, y)$</td></tr>
      <tr><td>recta $x = a$</td><td>$(2a - x, y)$</td></tr>
      <tr><td>recta $y = b$</td><td>$(x, 2b - y)$</td></tr>
      <tr><td>recta $y = x$</td><td>$(y, x)$</td></tr>
      <tr><td>origen</td><td>$(-x, -y)$</td></tr></tbody></table>
      <p>El eje queda en el <b>punto medio</b> entre punto e imagen: $(-3, 4)$ y $(5, 4)$ dan $x = 1$. Regla $(x, 6 - y)$: recta $y = 3$.</p>
      </div><div>
      <div class="qfig"><img class="tikz" src="paes/m1/fig/tra_refl_ejes.svg" alt="Una figura con forma de letra F en el primer cuadrante, su reflejo respecto del eje Y en el segundo cuadrante y su reflejo respecto del eje X en el cuarto cuadrante"></div>
      <div class="box alert">Respecto del eje X cambia la $y$ (y viceversa). Con $y = x$ solo se intercambian, con su signo: $(4, -1) \to (-1, 4)$.</div>
      </div></div>` },
    { t: 'Dos transformaciones', b: r`
      <ul><li>Aplica la primera y al resultado la segunda: <b>el orden importa</b>. Deshacer: orden inverso.</li>
      <li>Regla dada, como $(x - 3, 4 - y)$: reemplaza con cuidado; $4 - (-5) = 9$.</li>
      <li>Mismo eje dos veces: vuelve. Eje X y luego eje Y: origen. Dos rectas paralelas a distancia $d$: traslación de $2d$.</li>
      <li>Doblar papel o asientos simétricos = reflejar respecto del doblez (misma fila, misma distancia).</li>
      <li>Flechas: aplica la regla a la dirección, NE $= (1, 1)$.</li></ul>` }
  ],

  geo_rotacion: [
    { t: 'Reglas (centro en el origen)', b: r`
      <div class="cols"><div>
      <table><thead><tr><th>Rotación</th><th>Regla</th><th>$(4, 2)$</th></tr></thead><tbody>
      <tr><td>$90^\circ$ antihorario</td><td>$(-y, x)$</td><td>$(-2, 4)$</td></tr>
      <tr><td>$180^\circ$</td><td>$(-x, -y)$</td><td>$(-4, -2)$</td></tr>
      <tr><td>$90^\circ$ horario $= 270^\circ$ antihorario</td><td>$(y, -x)$</td><td>$(2, -4)$</td></tr></tbody></table>
      <p>Antihorario = contrario al reloj. Rotaciones seguidas se suman. $180^\circ$ = reflexión respecto del centro (igual en cualquier sentido). Deshacer: mismo ángulo, sentido contrario. Solo el centro queda fijo.</p>
      </div><div>
      <div class="qfig"><img class="tikz" src="paes/m1/fig/tra_rot_tabla.svg" alt="El punto P(4, 2) y sus imágenes al rotarlo en torno al origen 90 grados (-2, 4), 180 grados (-4, -2) y 270 grados (2, -4), todas en sentido antihorario"></div>
      <div class="box alert"><b>Comprueba con el cuadrante</b> $90^\circ$ antihorario avanza I → II → III → IV; horario retrocede; $180^\circ$ va al opuesto. Signos: $(4, -1) \to (1, 4)$, pues $-(-1) = 1$.</div>
      </div></div>` },
    { t: 'Otro centro y reconocer', b: r`
      <ul><li>Centro $C$: resta $C$, gira con la regla, suma $C$. $P(6, 3)$, $C(2, 1)$: $(4, 2) \to (-2, 4) \to (0, 5)$.</li>
      <li>Con $180^\circ$: $P' = 2C - P$ y $C$ es el punto medio entre $P$ y $P'$.</li>
      <li>¿Qué transformación? Dada vuelta: reflexión. Girada: rotación (el cuadrante da el sentido). Solo movida: traslación. Confirma con un vértice.</li>
      <li>Direcciones: E $0^\circ$, NE $45^\circ$, N $90^\circ$, S $270^\circ$; rotar suma ángulos. Minutero: $6^\circ$ por minuto, horario.</li></ul>` }
  ],

  geo_semejanza: [
    { t: 'Semejanza', b: r`
      <div class="cols"><div>
      <p>Semejantes ($\sim$): misma forma; ángulos iguales y lados <b>proporcionales</b> (todos $\times k$). Homólogos según el orden de las letras: $\triangle ABC \sim \triangle DEF$ ⇒ $AB$ con $DE$, $BC$ con $EF$.</p>
      <p>$k = \dfrac{DE}{AB}$ con un par conocido; luego $EF = k \cdot BC$, o proporción y producto cruzado.</p>
      <p>Triángulos: basta con <b>dos ángulos iguales</b> (AA). Casos: $DE \parallel BC$ (encajados), ángulo recto compartido, opuestos por el vértice.</p>
      </div><div>
      <div class="qfig"><img class="tikz" src="paes/m1/fig/sem_encajados.svg" alt="Triángulo ABC con el segmento DE paralelo a BC; AD = 2, DB = 4, DE = 3 y BC = x"></div>
      <div class="box alert">Se <b>multiplica</b>, no se suma ($3 \times 2$ no pasa a $6 \times 5$). Encajados: $AD$ con $AB$ completo, no con el pedazo $DB$.</div>
      </div></div>` },
    { t: 'Sombras y alturas', b: r`
      <p>Misma hora: $\dfrac{\text{altura}}{\text{sombra}}$ igual para todos. $\dfrac{h}{9} = \dfrac{1{,}5}{2} \Rightarrow h = 6{,}75$. Igual con espejo, rampa o río: altura sobre base en los dos triángulos.</p>
      <div class="box alert">Misma razón arriba y abajo en las dos fracciones. Revisa: lo grande queda grande.</div>` },
    { t: 'Escalas, perímetro y área', b: r`
      <ul><li>Escala $1 : n$: 1 cm del dibujo son $n$ cm reales. Mapa → real: $\times n$; real → maqueta: $\div n$.</li>
      <li>Escala: real en cm ÷ medida del mapa ($1.200.000 \div 8 = 150.000$). "3 cm = 150 m": 1 cm = 50 m. Barra "2 cm = 1 km": cuenta cuántas caben.</li>
      <li>1 m = 100 cm; 1 km = 100.000 cm; 1 m$^2$ = 10.000 cm$^2$.</li>
      <li>Longitudes y perímetro $\times k$; área $\times k^2$ (plano 1 : 100: área $\times 10.000$; mejor pasa lados a la realidad y multiplica). Razón de áreas 4 ⇒ $k = 2$.</li></ul>` }
  ]
});

/* Versión compacta · M1 Probabilidad y Estadística */
Object.assign(COMPACTO, {
  tablas: [
    { t: 'Frecuencias', b: r`
      <table><tbody>
      <tr><td>$f_i$</td><td>cuántos datos tienen ese valor</td></tr>
      <tr><td>$n$</td><td>$\sum f_i$ (suma de frecuencias, nunca de valores)</td></tr>
      <tr><td>$h_i$</td><td>$\dfrac{f_i}{n}$ o $\dfrac{f_i}{n}\cdot 100\%$; suman $1$. Al revés: $f_i = h_i\cdot n$</td></tr>
      <tr><td>$F_i$, $H_i$</td><td>acumuladas: $f_1 + \dots + f_i$ y $F_i/n$. $f_i = F_i - F_{i-1}$</td></tr></tbody></table>
      <div class="box alert"><b>Grupos de distinto tamaño</b> se comparan con $h_i\%$ (cada uno sobre su propio total), no con cantidades.</div>` },
    { t: '"Al menos", "a lo más" e intervalos', b: r`
      <div class="cols"><div>
      <div class="box">· "a lo más 2", "no supera 2" = 2 o menos $\Rightarrow F$ hasta la fila del 2.<br>· "al menos 6", "como mínimo 6" = 6 o más (el 6 entra) $= n - F_5$.<br>· "más de 3" = 4 o más; "menos de 3" = 0, 1, 2.</div>
      </div><div>
      <div class="box alert"><b>Límite dentro de un intervalo</b> (40 en 35 – 44): para la <b>mayor</b> cantidad posible la fila cuenta entera; para la <b>menor</b>, cuenta 0.</div>
      <p>Si piden la expresión: favorables sobre $n$, $\frac{37}{50}\cdot 100\%$.</p>
      </div></div>` }
  ],

  graficos: [
    { t: 'Qué gráfico y cómo leerlo', b: r`
      <table><tbody>
      <tr><td>Barras</td><td>comparar categorías; altura $= f_i$ o $h_i\%$. "Más frecuente" = barra más alta ($Mo$)</td></tr>
      <tr><td>Circular</td><td>partes de un total; ángulo $= h_i\cdot 360^\circ$</td></tr>
      <tr><td>Líneas</td><td>cambio en el tiempo</td></tr>
      <tr><td>Pictograma</td><td>íconos $\times$ valor de cada ícono</td></tr></tbody></table>
      <div class="box alert"><b>Eje en %</b> la altura no es la cantidad: $f_i = h_i\cdot n$.</div>` },
    { t: 'Circular: porcentaje, ángulo, total', b: r`
      $$h_i = \frac{\text{ángulo}}{360^\circ} \qquad f_i = h_i\cdot n \qquad n = \frac{f_i}{h_i}$$
      <p>$90^\circ = 25\%$; si 85 artículos son el $25\%$, $n = 85/0{,}25 = 340$.</p>` },
    { t: 'Líneas y gráficos engañosos', b: r`
      <div class="cols"><div>
      <p><b>Mayor aumento</b>: mayor diferencia entre puntos <b>consecutivos</b>, no el punto más alto. "Aumentó mes a mes" se cae con una bajada.</p>
      </div><div>
      <div class="box alert"><b>Trampas</b> Dato ausente no es cero. Dos gráficos con <b>escalas distintas</b> (o eje que no parte en 0) no se comparan a ojo: compara números.</div>
      </div></div>` }
  ],

  promedio: [
    { t: 'Fórmulas', b: r`
      <table><tbody>
      <tr><td>Datos sueltos</td><td>$\bar{x} = \dfrac{\sum x_i}{n}$ (solo los datos que pide la pregunta)</td></tr>
      <tr><td>Tabla</td><td>$\bar{x} = \dfrac{\sum f_i x_i}{\sum f_i}$, p. ej. $\dfrac{0\cdot P + 1\cdot Q + 2\cdot R}{P+Q+R}$</td></tr>
      <tr><td>Dato que falta</td><td>$x = n\bar{x} - (\text{suma conocida})$: $4\cdot 5{,}5 - 15{,}5 = 6{,}5$</td></tr>
      <tr><td>Grupos</td><td>$\dfrac{n_A\bar{x}_A + n_B\bar{x}_B}{n_A + n_B}$; promediar promedios directo solo si $n_A = n_B$</td></tr></tbody></table>
      <div class="box alert"><b>Crecimiento promedio</b> sobre el cambio: de 2 a 14 cm en 5 semanas $= \frac{12}{5} = 2{,}4$ cm/semana.</div>` },
    { t: 'Cómo cambia el promedio', b: r`
      <div class="cols"><div>
      <ul><li>Sumar $k$ a todos: $\bar{x}$ sube $k$ (por $k$: $\bar{x}\cdot k$).</li>
      <li>Agregar dato $> \bar{x}$: sube; $< \bar{x}$: baja.</li>
      <li>Quitar dato $< \bar{x}$: sube; $> \bar{x}$: baja.</li></ul>
      </div><div>
      <div class="box"><b>Mover una persona</b> ($\bar{x}_A = 30$, $\bar{x}_B = 40$): para que ambos suban, debe salir de B siendo $< 40$ y entrar a A siendo $> 30$, p. ej. 35 de B a A.</div>
      </div></div>` }
  ],

  cuartiles: [
    { t: 'Mediana y cuartiles', b: r`
      <div class="cols"><div>
      <p><b>Ordena primero.</b> $Me = Q_2$: $n$ impar, el central; $n$ par, promedio de los dos centrales (3, 5, 7, 8, 10, 12 $\Rightarrow 7{,}5$).</p>
      <p>$Q_1$ / $Q_3$ = mediana de la mitad inferior / superior. Con $n$ impar la mediana <b>no</b> entra en las mitades.</p>
      <p>$RIC = Q_3 - Q_1$.</p>
      </div><div>
      <div class="box alert"><b>Error típico</b> $Q_1$ no es el punto medio entre mínimo y $Me$: sale de los datos. 0,0,0,1,<b>2</b>,3,3,3,4 $\Rightarrow Q_1 = 0$, $Q_3 = 3$. Un cuartil puede no ser un dato (10 y 12 $\Rightarrow 11$).</div>
      </div></div>` },
    { t: 'Percentiles', b: r`
      <div class="cols"><div>
      <p>$P_k$ = valor que deja <b>al menos el $k\%$</b> de los datos en él o por debajo. $P_{25} = Q_1$, $P_{50} = Me$, $P_{75} = Q_3$.</p>
      <p>$P_{80} = 65$: al menos el 80 % obtuvo 65 o menos.</p>
      </div><div>
      <div class="box alert"><b>No mezclar</b> valor (65) y porcentaje (80 %). Supera a 30 de 40 $\Rightarrow$ percentil 75.</div>
      </div></div>` },
    { t: 'Desde una tabla', b: r`
      <p>Posición $k$: primera fila con $F_i \ge k$. $n = 30$: posiciones 15 y 16 caen en 4 y 5 $\Rightarrow Me = 4{,}5$.</p>` }
  ],

  cajon: [
    { t: 'Cinco números', b: r`
      <div class="cols"><div>
      <p>Bigote izquierdo = mínimo · caja de $Q_1$ a $Q_3$ · línea interior = $Me$ · bigote derecho = máximo. Ancho de la caja $= RIC$.</p>
      <div class="box"><b>Cada tramo tiene al menos 25 %</b> de los datos. Hasta $Q_3$: al menos 75 %; desde $Q_3$: al menos 25 %.</div>
      </div><div>
      <div class="qfig"></div>
      </div></div>`, f: 0 },
    { t: 'Qué no dice y cómo comparar', b: r`
      <div class="cols"><div>
      <div class="box alert"><b>No informa</b> el promedio, cuántos datos hay, ni que "la mitad vale $Me$". Un valor del cajón no es un porcentaje ni una posición.</div>
      </div><div>
      <ul><li>Construir o elegir: compara extremos, luego $Me$, luego $Q_1$ y $Q_3$.</li>
      <li>Mediana mayor: valores mayores. Caja más ancha: 50 % central más disperso.</li>
      <li>Si el mínimo de B es menor que el máximo de A, no "todos los de B son mayores".</li></ul>
      </div></div>` }
  ],

  laplace: [
    { t: 'Regla de Laplace', b: r`
      <div class="cols"><div>
      $$\mathbb{P}(A) = \frac{\#A}{\#\Omega}, \qquad 0 \le \mathbb{P}(A) \le 1, \qquad \mathbb{P}(A^c) = 1 - \mathbb{P}(A)$$
      <p>Dos dados: $36$ casos; suma 7 en 6 (la más probable), 6 en 5, 10 en 3, 12 en 1. $k$ monedas: $2^k$.</p>
      </div><div>
      <div class="box alert"><b>Denominador de ahora</b> Lo que ya salió cambia $\Omega$: 20 tarjetas, ya volteaste un rayo $\Rightarrow \frac{1}{19}$.</div>
      </div></div>` },
    { t: 'Tablas, gráficos y probabilidades dadas', b: r`
      <ul><li>Frecuencias: favorables = frecuencia; totales = $n$ (suma de todas las barras).</li>
      <li>Doble entrada: "mujer <b>y</b> artística" = una celda sobre el total; una condición = fila o columna. Solo si dice "si se elige una mujer…" el denominador cambia.</li>
      <li>"O" entre categorías distintas: $\frac{64 + 51}{441}$.</li>
      <li>Dado cargado: se <b>suman</b> las probabilidades de los resultados favorables (suman 1 en total).</li></ul>` }
  ],

  reglas: [
    { t: '"O": regla aditiva', b: r`
      $$\mathbb{P}(A\cup B) = \mathbb{P}(A) + \mathbb{P}(B) - \mathbb{P}(A\cap B)$$
      <p>Excluyentes: sin la resta. Par o mayor que 4: $\frac{3}{6} + \frac{2}{6} - \frac{1}{6} = \frac{4}{6}$.</p>` },
    { t: '"Y": regla multiplicativa', b: r`
      <div class="cols"><div>
      <p>Independientes: $\mathbb{P}(A\cap B) = \mathbb{P}(A)\cdot\mathbb{P}(B)$. Dos seis: $\frac{1}{36}$.</p>
      <div class="box">3 rojas, 2 azules, dos rojas.<br>Con reposición: $\frac{3}{5}\cdot\frac{3}{5} = \frac{9}{25}$.<br>Sin reposición: $\frac{3}{5}\cdot\frac{2}{4} = \frac{3}{10}$.</div>
      </div><div>
      <p><b>Árbol</b>: multiplica a lo largo de la rama, suma las ramas que sirven: $0{,}3\cdot 0{,}5 + 0{,}7\cdot 0{,}1 = 0{,}22$.</p>
      <p>Cada factor de un producto es una etapa en orden: $\frac{4}{9}\cdot\frac{4}{9}\cdot\frac{2}{9}$ = estrella, estrella, fantasma.</p>
      </div></div>` },
    { t: '"Al menos uno"', b: r`
      <p>$\mathbb{P}(\text{al menos uno}) = 1 - \mathbb{P}(\text{ninguno})$: al menos una cara en dos monedas $= 1 - \frac{1}{4} = \frac{3}{4}$.</p>
      <div class="box alert"><b>Trampas</b> "o" se suma, "y" se multiplica; si se solapan, resta lo común.</div>` }
  ]
});
