/* Contenido de "PAES Expresiones algebraicas" (Fabimath).
   Temario oficial PAES M1 Admisión 2027, eje Álgebra y funciones, unidad Expresiones algebraicas:
     Productos notables. Factorizaciones y desarrollo de expresiones algebraicas.
     Operatoria con expresiones algebraicas. Problemas que involucren expresiones algebraicas
     en diversos contextos.
   Estilo de preguntas tomado de las tres últimas pruebas publicadas por el DEMRE
   (PAES Invierno 2026, PAES Regular 2026 y PAES Invierno 2027), en paes/fuentes/.
   El cubo de binomio no aparece en esas pruebas: no se incluye.
   Notación chilena: coma decimal, punto de miles; montos en pesos dentro de <span class="peso">.
   Figuras en TikZ: fuentes en paes/m1/tikz/expr_*.tex, compiladas a paes/m1/fig/expr_*.svg
   con paes/m1/build_figs.py.
   Se carga después de paes_data.js: reutiliza r (String.raw).
   Cada pregunta: enun (HTML + $latex$), fig opcional, alts (4), ok (índice correcto), sol, conc. */

const ALG_EXPRESIONES = [

/* =====================================================================
   UNIDAD 2 · EXPRESIONES ALGEBRAICAS
   ===================================================================== */
{
  id: 'alg_expresiones', unit: 'Unidad 2 · Expresiones algebraicas', icon: '🔤',
  title: 'Operatoria con expresiones algebraicas',
  desc: 'Paso a paso: términos y términos semejantes, reducir, valorizar, multiplicar monomios y polinomios, traducir del lenguaje natural al algebraico y calcular perímetros y áreas con expresiones.',
  slides: [
    { t: 'Las piezas de una expresión algebraica', b: r`
      <div class="cols"><div>
      <p>Una <b>expresión algebraica</b> mezcla números y letras con operaciones. Las letras representan números que no conocemos o que pueden cambiar.</p>
      <p>Ejemplo: $5x^2y - 3x + 7$. Tiene tres <b>términos</b>, separados por los signos $+$ y $-$: $5x^2y$, $-3x$ y $7$.</p>
      <p>En cada término se distinguen dos partes:</p>
      <ul><li>el <b>coeficiente</b>, que es el número (con su signo): en $5x^2y$ es $5$; en $-3x$ es $-3$;</li>
      <li>el <b>factor literal</b>, que son las letras con sus exponentes: en $5x^2y$ es $x^2y$.</li></ul>
      <p>Si una letra no muestra coeficiente, el coeficiente es 1: $x = 1\cdot x$ y $-x = -1\cdot x$.</p>
      </div><div>
      <div class="box"><b>Términos semejantes</b> Son los que tienen <b>exactamente el mismo factor literal</b>: las mismas letras con los mismos exponentes. Solo esos se pueden juntar.</div>
      <table><thead><tr><th>Términos</th><th>¿Semejantes?</th></tr></thead><tbody>
      <tr><td>$4x$ y $-9x$</td><td>sí</td></tr>
      <tr><td>$3ab$ y $7ba$</td><td>sí ($ab = ba$)</td></tr>
      <tr><td>$2x^2$ y $2x$</td><td>no: distinto exponente</td></tr>
      <tr><td>$5xy$ y $5x$</td><td>no: distintas letras</td></tr></tbody></table>
      <div class="box alert"><b>Monomio, binomio, trinomio</b> Una expresión con un término es un <b>monomio</b> ($6x^2$); con dos, un <b>binomio</b> ($x + 3$); con tres, un <b>trinomio</b> ($x^2 + 5x + 6$). En general, un <b>polinomio</b>.</div>
      </div></div>` },
    { t: 'Reducir términos semejantes', b: r`
      <div class="cols"><div>
      <p><b>Reducir</b> es juntar los términos semejantes: se suman o restan los coeficientes y el factor literal se copia igual.</p>
      <p>Ejemplo: $7x + 3y - 2x + 5y - y$.</p>
      <p><b>Paso 1. Agrupa por factor literal.</b> Las $x$: $7x - 2x$. Las $y$: $3y + 5y - y$.</p>
      <p><b>Paso 2. Opera los coeficientes.</b> $7 - 2 = 5$, así que $5x$. $3 + 5 - 1 = 7$, así que $7y$.</p>
      <p><b>Resultado:</b> $5x + 7y$. No se puede reducir más: $x$ e $y$ no son semejantes.</p>
      <p><b>Con paréntesis.</b> $3a - (2a - 5b) + (a + b)$. Un menos delante del paréntesis cambia el signo de <b>todo</b> lo de adentro: $-(2a - 5b) = -2a + 5b$. Un más lo deja igual: $+(a + b) = a + b$. Queda $3a - 2a + 5b + a + b = 2a + 6b$.</p>
      </div><div>
      <div class="box"><b>Como contar objetos</b> $3$ manzanas $+ 2$ manzanas $= 5$ manzanas, pero $3$ manzanas $+ 2$ peras no son $5$ "manzaperas". Igual: $3x + 2x = 5x$, pero $3x + 2y$ se queda así.</div>
      <div class="box alert"><b>Los exponentes no se suman al reducir</b> $x^2 + x^2 = 2x^2$, no $x^4$. Al sumar se cuentan las piezas; el factor literal no cambia.</div>
      <div class="box"><b>Para comprobar</b> Reemplaza las letras por números pequeños en la expresión original y en la reducida. Con $a = 1$ y $b = 1$: $3 - (2 - 5) + (1 + 1) = 3 + 3 + 2 = 8$ y $2\cdot 1 + 6\cdot 1 = 8$. ✔</div>
      </div></div>` },
    { t: 'Valorizar: reemplazar con paréntesis', b: r`
      <div class="cols"><div>
      <p><b>Valorizar</b> una expresión es reemplazar cada letra por el número que te dan y calcular.</p>
      <p>Ejemplo: valor de $3a^2 - 2ab + b$ si $a = -2$ y $b = 3$.</p>
      <p><b>Paso 1. Reemplaza con paréntesis.</b> $3(-2)^2 - 2(-2)(3) + 3$.</p>
      <p><b>Paso 2. Primero las potencias.</b> $(-2)^2 = (-2)(-2) = 4$. Queda $3\cdot 4 - 2(-2)(3) + 3$.</p>
      <p><b>Paso 3. Después las multiplicaciones.</b> $3\cdot 4 = 12$ y $-2\cdot(-2)\cdot 3 = 12$. Queda $12 + 12 + 3$.</p>
      <p><b>Paso 4. Al final sumas y restas.</b> $12 + 12 + 3 = 27$.</p>
      </div><div>
      <div class="box alert"><b>El paréntesis salva el signo</b> $(-2)^2 = 4$, pero $-2^2 = -4$: sin paréntesis, el cuadrado afecta solo al 2. Por eso, al reemplazar un número negativo, escríbelo siempre entre paréntesis.</div>
      <div class="box"><b>Orden de las operaciones</b> 1. Paréntesis. 2. Potencias. 3. Multiplicaciones y divisiones. 4. Sumas y restas.</div>
      <div class="box"><b>Con fracciones</b> Si $x = \dfrac{1}{2}$: $4x^2 = 4\cdot\dfrac{1}{4} = 1$. Eleva primero y multiplica después.</div>
      </div></div>` },
    { t: 'Multiplicar monomios y polinomios', b: r`
      <div class="cols"><div>
      <p><b>Monomio por monomio.</b> Se multiplican los coeficientes y, en las letras iguales, se <b>suman los exponentes</b>: $(2x^3y)(-5xy^2) = -10x^{3+1}y^{1+2} = -10x^4y^3$.</p>
      <p><b>Monomio por polinomio.</b> El monomio multiplica a <b>cada</b> término (propiedad distributiva): $3a(2a + 4) = 3a\cdot 2a + 3a\cdot 4 = 6a^2 + 12a$. En la figura, el rectángulo grande se parte en dos: sus áreas suman el total.</p>
      <p><b>Polinomio por polinomio.</b> Cada término del primero multiplica a cada término del segundo, y después se reduce:</p>
      <p>$(x + 3)(2x - 5) = 2x^2 - 5x + 6x - 15 = 2x^2 + x - 15$.</p>
      </div><div>
      <div class="qfig"><img class="tikz" src="paes/m1/fig/expr_distributiva.svg" alt="Rectángulo de alto 3a y largo 2a + 4, partido en un rectángulo de 3a por 2a, de área 6a al cuadrado, y otro de 3a por 4, de área 12a"></div>
      <div class="box alert"><b>Signos</b> $(+)(+) = +$, $(-)(-) = +$, $(+)(-) = -$. En $-2x(x - 4)$: $-2x\cdot x = -2x^2$ y $-2x\cdot(-4) = +8x$. Queda $-2x^2 + 8x$.</div>
      </div></div>` },
    { t: 'Del lenguaje natural al algebraico', b: r`
      <div class="cols"><div>
      <p>Muchas preguntas PAES piden la expresión que representa una frase. Lee la frase <b>de afuera hacia adentro</b>: la última operación que se nombra es la que manda.</p>
      <p>Ejemplo (PAES Invierno 2026): si la edad actual de Pedro es $m$ años, "la edad de Pedro hace $n$ años disminuida en 3 años".</p>
      <p><b>Paso 1.</b> La edad de Pedro hace $n$ años: $m - n$.</p>
      <p><b>Paso 2.</b> Esa edad disminuida en 3: $m - n - 3$.</p>
      <p>Ejemplo: "el doble de la suma de un número y 5". Lo último es "el doble de", y lo que se duplica es la suma: $2(x + 5)$. En cambio, "el doble de un número, más 5" es $2x + 5$.</p>
      </div><div>
      <div class="box"><table><thead><tr><th>En palabras</th><th>Expresión</th></tr></thead><tbody>
      <tr><td>el cuadrado de un número</td><td>$x^2$</td></tr>
      <tr><td>la suma de los cuadrados de $a$ y $b$</td><td>$a^2 + b^2$</td></tr>
      <tr><td>el cuadrado de la suma de $a$ y $b$</td><td>$(a + b)^2$</td></tr>
      <tr><td>la diferencia entre $a$ y $b$</td><td>$a - b$</td></tr>
      <tr><td>el triple de un número disminuido en 2</td><td>$3x - 2$</td></tr>
      <tr><td>el triple de la diferencia entre un número y 2</td><td>$3(x - 2)$</td></tr>
      <tr><td>dos números consecutivos</td><td>$n$ y $n + 1$</td></tr>
      <tr><td>un número par</td><td>$2n$</td></tr></tbody></table></div>
      <div class="box alert"><b>"Menos que" va al revés</b> "4 menos que $x$" es $x - 4$, no $4 - x$.</div>
      </div></div>` },
    { t: 'Perímetros y áreas con expresiones', b: r`
      <div class="cols"><div>
      <p>Si los lados de una figura son expresiones, el perímetro y el área también lo son.</p>
      <p>Ejemplo: un rectángulo mide $(2x + 3)$ cm de largo y $(x - 1)$ cm de ancho.</p>
      <p><b>Perímetro.</b> Suma de los cuatro lados: $2(2x + 3) + 2(x - 1) = 4x + 6 + 2x - 2 = 6x + 4$ cm.</p>
      <p><b>Área.</b> Largo por ancho: $(2x + 3)(x - 1) = 2x^2 - 2x + 3x - 3 = 2x^2 + x - 3$ cm².</p>
      <p><b>Comprueba con un número.</b> Si $x = 4$, el rectángulo mide 11 cm por 3 cm. Perímetro: $2\cdot 11 + 2\cdot 3 = 28$, y $6\cdot 4 + 4 = 28$. ✔ Área: $11\cdot 3 = 33$, y $2\cdot 16 + 4 - 3 = 33$. ✔</p>
      </div><div>
      <div class="box"><b>Lo que sobra o falta</b> Si tienes $(10x + 8)$ metros de cinta y el perímetro es $6x + 4$, sobran $(10x + 8) - (6x + 4) = 10x + 8 - 6x - 4 = 4x + 4$ metros. El paréntesis es obligatorio: se resta <b>todo</b> el perímetro.</div>
      <div class="box alert"><b>No confundas</b> El perímetro suma lados (queda de grado 1 si los lados son de grado 1). El área multiplica lados (aparece $x^2$). Si en las alternativas ves $x^2$ y te piden un perímetro, desconfía.</div>
      </div></div>` },
    { t: 'Errores típicos y resumen', b: r`
      <table><thead><tr><th>Error</th><th>Así no</th><th>Así sí</th></tr></thead><tbody>
      <tr><td>Juntar términos no semejantes</td><td>$3x + 2y = 5xy$</td><td>se queda $3x + 2y$</td></tr>
      <tr><td>Sumar exponentes al reducir</td><td>$x^2 + x^2 = x^4$</td><td>$x^2 + x^2 = 2x^2$</td></tr>
      <tr><td>Multiplicar exponentes al multiplicar</td><td>$x^2\cdot x^3 = x^6$</td><td>$x^2\cdot x^3 = x^5$</td></tr>
      <tr><td>Cambiar solo el primer signo</td><td>$-(a - b) = -a - b$</td><td>$-(a - b) = -a + b$</td></tr>
      <tr><td>Distribuir solo al primer término</td><td>$2(x + 3) = 2x + 3$</td><td>$2(x + 3) = 2x + 6$</td></tr>
      <tr><td>Reemplazar sin paréntesis</td><td>$a = -3$: $a^2 = -9$</td><td>$(-3)^2 = 9$</td></tr></tbody></table>
      <div class="box" style="margin-top:14px"><b>Método PAES</b> 1. Quita paréntesis cuidando los signos. 2. Junta solo términos semejantes. 3. Al multiplicar, distribuye a todos los términos. 4. Si dudas entre alternativas, reemplaza la letra por un número sencillo (como 2) en el enunciado y en cada alternativa: la correcta da lo mismo.</div>` }
  ],
  example: {
    src: 'PAES Regular 2026',
    fig: { type: 'img', src: 'paes/m1/fig/expr_pista.svg', alt: 'Pista de baile rectangular de (3x + 4) m de largo y (2x − 9) m de ancho, con el borde marcado' },
    enun: r`<p>Una pista de baile de forma rectangular tiene dimensiones de $(3x + 4)$ metros de largo y $(2x - 9)$ metros de ancho. Se cuenta con $(20x + 20)$ metros de una cinta luminosa para demarcar el borde de la pista de baile.</p><p>¿Cuántos metros de cinta luminosa sobran luego de demarcar el borde de la pista?</p>`,
    alts: ['$(10x + 30)$ metros', '$(10x + 10)$ metros', '$(15x + 15)$ metros', '$(15x + 25)$ metros'], ok: 0,
    sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Lo que sobra de cinta. Demarcar el borde es recorrer el perímetro: lo que sobra es la cinta total menos el perímetro.</p><p><b>Paso 2. Perímetro.</b> Un rectángulo tiene dos largos y dos anchos: $2(3x + 4) + 2(2x - 9)$.</p><p><b>Paso 3. Quita los paréntesis.</b> $2(3x + 4) = 6x + 8$ y $2(2x - 9) = 4x - 18$.</p><p><b>Paso 4. Reduce.</b> Las $x$: $6x + 4x = 10x$. Los números: $8 - 18 = -10$. El perímetro es $10x - 10$.</p><p><b>Paso 5. Resta todo el perímetro.</b> $(20x + 20) - (10x - 10) = 20x + 20 - 10x + 10$. El menos cambia los dos signos del paréntesis.</p><p><b>Paso 6. Reduce.</b> $20x - 10x = 10x$ y $20 + 10 = 30$.</p><p><b>Respuesta:</b> sobran $(10x + 30)$ metros.</p><p><b>Comprobación:</b> con $x = 10$ la pista mide $34$ m por $11$ m y su perímetro es $2\cdot 34 + 2\cdot 11 = 90$ m. La cinta mide $20\cdot 10 + 20 = 220$ m. Sobran $220 - 90 = 130$ m, y $10\cdot 10 + 30 = 130$. ✔</p><p><b>¿Por qué no las otras?</b> $(10x + 10)$ cambia solo el primer signo del paréntesis: $20x + 20 - 10x - 10$. $(15x + 25)$ resta solo medio perímetro, un largo y un ancho: $(20x + 20) - (5x - 5)$. $(15x + 15)$ resta medio perímetro y además se equivoca en el signo: $20x + 20 - 5x - 5$.</p>`,
    conc: 'El borde es el perímetro: suma los cuatro lados y réstalo entero, con paréntesis.'
  },
  bank: [
    { enun: r`<p>¿Cuál de las siguientes expresiones es igual a $3x - 2y + 5x + 7y - x$?</p>`,
      alts: ['$9x + 5y$', '$7x + 5y$', '$7x - 9y$', '$12xy$'], ok: 1,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Reducir la expresión: juntar los términos semejantes.</p><p><b>Paso 2. Las x.</b> $3x + 5x - x$. Recuerda que $-x = -1x$: $3 + 5 - 1 = 7$. Queda $7x$.</p><p><b>Paso 3. Las y.</b> $-2y + 7y$: $-2 + 7 = 5$. Queda $5y$.</p><p><b>Respuesta:</b> $7x + 5y$.</p><p><b>Comprobación:</b> con $x = 1$ e $y = 1$: $3 - 2 + 5 + 7 - 1 = 12$ y $7 + 5 = 12$. ✔</p><p><b>¿Por qué no las otras?</b> $9x + 5y$ suma el último $x$ en vez de restarlo: $3 + 5 + 1 = 9$. $7x - 9y$ trata el $+7y$ como si restara: $-2 - 7 = -9$. $12xy$ junta términos que no son semejantes; $x$ e $y$ no se pueden sumar entre sí.</p>`, conc: 'Solo se suman los coeficientes de términos con el mismo factor literal.' },
    { enun: r`<p>¿Cuál de las siguientes expresiones es igual a $2a - (3a - 4b) + (a - b)$?</p>`,
      alts: ['$-5b$', '$6a - 5b$', '$3b$', '$-2a + 5b$'], ok: 2,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Reducir. Primero se quitan los paréntesis y después se juntan los términos semejantes.</p><p><b>Paso 2. Primer paréntesis.</b> Tiene un menos delante: cambia el signo de todo lo de adentro. $-(3a - 4b) = -3a + 4b$.</p><p><b>Paso 3. Segundo paréntesis.</b> Tiene un más delante: queda igual. $+(a - b) = a - b$.</p><p><b>Paso 4. Junta.</b> $2a - 3a + 4b + a - b$. Las $a$: $2 - 3 + 1 = 0$. Las $b$: $4 - 1 = 3$.</p><p><b>Respuesta:</b> $3b$.</p><p><b>Comprobación:</b> con $a = 2$ y $b = 1$: $4 - (6 - 4) + (2 - 1) = 4 - 2 + 1 = 3$, y $3\cdot 1 = 3$. ✔</p><p><b>¿Por qué no las otras?</b> $-5b$ cambia solo el primer signo: escribe $-3a - 4b$. $6a - 5b$ no cambia ningún signo: escribe $+3a - 4b$. $-2a + 5b$ cambia también los signos del segundo paréntesis, que tiene un más delante.</p>`, conc: 'El menos delante del paréntesis cambia todos los signos; el más no cambia ninguno.' },
    { enun: r`<p>Si $a = -2$ y $b = 3$, ¿cuál es el valor de la expresión $a^2 - 3ab + b$?</p>`,
      alts: ['$25$', '$17$', '$-11$', '$22$'], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Reemplazar las letras por sus valores y calcular. Los negativos van entre paréntesis.</p><p><b>Paso 2. Reemplaza.</b> $(-2)^2 - 3(-2)(3) + 3$.</p><p><b>Paso 3. Potencia.</b> $(-2)^2 = (-2)(-2) = 4$.</p><p><b>Paso 4. Producto.</b> $-3\cdot(-2)\cdot 3$: menos por menos da más, así que $+18$.</p><p><b>Paso 5. Suma.</b> $4 + 18 + 3 = 25$.</p><p><b>Respuesta:</b> $25$.</p><p><b>¿Por qué no las otras?</b> $17$ calcula $(-2)^2$ como $-4$: $-4 + 18 + 3$. $-11$ se equivoca en el signo del producto: $4 - 18 + 3$. $22$ olvida el último término, $+b$: $4 + 18$.</p>`, conc: 'Reemplaza los negativos con paréntesis: (−2)² = 4.' },
    { enun: r`<p>¿Cuál es el resultado de $(-3x^2y)\cdot(4xy^3)$?</p>`,
      alts: ['$12x^3y^4$', '$-12x^2y^3$', '$x^3y^4$', '$-12x^3y^4$'], ok: 3,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Multiplicar dos monomios: coeficiente por coeficiente y, en cada letra, se suman los exponentes.</p><p><b>Paso 2. Coeficientes.</b> $(-3)\cdot 4 = -12$.</p><p><b>Paso 3. La x.</b> $x^2\cdot x^1 = x^{2+1} = x^3$.</p><p><b>Paso 4. La y.</b> $y^1\cdot y^3 = y^{1+3} = y^4$.</p><p><b>Respuesta:</b> $-12x^3y^4$.</p><p><b>¿Por qué no las otras?</b> $12x^3y^4$ pierde el signo: menos por más da menos. $-12x^2y^3$ multiplica los exponentes ($2\cdot 1$ y $1\cdot 3$) en vez de sumarlos. $x^3y^4$ suma los coeficientes ($-3 + 4 = 1$) en vez de multiplicarlos.</p>`, conc: 'Al multiplicar: coeficientes se multiplican, exponentes de la misma letra se suman.' },
    { enun: r`<p>¿Cuál de las siguientes expresiones es igual a $-2x(3x^2 - 5x + 1)$?</p>`,
      alts: ['$-6x^3 - 10x^2 - 2x$', '$-6x^3 + 10x^2 - 2x$', '$-6x^3 + 10x^2 + 1$', '$-6x^2 + 10x - 2$'], ok: 1,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Multiplicar el monomio $-2x$ por cada uno de los tres términos del paréntesis.</p><p><b>Paso 2. Primer término.</b> $-2x\cdot 3x^2 = -6x^3$.</p><p><b>Paso 3. Segundo término.</b> $-2x\cdot(-5x) = +10x^2$: menos por menos da más.</p><p><b>Paso 4. Tercer término.</b> $-2x\cdot 1 = -2x$.</p><p><b>Respuesta:</b> $-6x^3 + 10x^2 - 2x$.</p><p><b>Comprobación:</b> con $x = 1$: $-2(3 - 5 + 1) = -2\cdot(-1) = 2$, y $-6 + 10 - 2 = 2$. ✔</p><p><b>¿Por qué no las otras?</b> $-6x^3 - 10x^2 - 2x$ se equivoca en $(-2x)(-5x)$, que es positivo. $-6x^3 + 10x^2 + 1$ no multiplica el último término. $-6x^2 + 10x - 2$ multiplica solo por $-2$ y se olvida de la $x$.</p>`, conc: 'El monomio multiplica a todos los términos del paréntesis, con su signo.' },
    { enun: r`<p>¿Cuál de las siguientes expresiones es igual a $(2x - 3)(x + 4)$?</p>`,
      alts: ['$2x^2 - 12$', '$2x^2 - 5x - 12$', '$2x^2 + 11x - 12$', '$2x^2 + 5x - 12$'], ok: 3,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Multiplicar dos binomios: cada término del primero por cada término del segundo, y después reducir.</p><p><b>Paso 2. Los cuatro productos.</b> $2x\cdot x = 2x^2$; $2x\cdot 4 = 8x$; $-3\cdot x = -3x$; $-3\cdot 4 = -12$.</p><p><b>Paso 3. Reduce.</b> $8x - 3x = 5x$. Queda $2x^2 + 5x - 12$.</p><p><b>Respuesta:</b> $2x^2 + 5x - 12$.</p><p><b>Comprobación:</b> con $x = 1$: $(2 - 3)(1 + 4) = -5$, y $2 + 5 - 12 = -5$. ✔</p><p><b>¿Por qué no las otras?</b> $2x^2 - 12$ multiplica solo primero por primero y último por último. $2x^2 + 11x - 12$ toma $-3x$ como $+3x$. $2x^2 - 5x - 12$ cambia los signos de los términos del medio: $-8x + 3x$.</p>`, conc: 'Binomio por binomio son cuatro productos; después se reducen los del medio.' },
    { enun: r`<p>Si la edad actual de Camila es $k$ años, ¿cuál de las siguientes expresiones representa "el doble de la edad que tendrá Camila en 5 años más, disminuido en 3 años"?</p>`, src: 'PAES Invierno 2026, adaptada',
      alts: ['$2k + 5 - 3$', '$2(k + 5) - 3$', '$2(k + 5 - 3)$', '$2(k - 5) - 3$'], ok: 1,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Traducir la frase por partes, de adentro hacia afuera.</p><p><b>Paso 2. La edad en 5 años más.</b> $k + 5$.</p><p><b>Paso 3. El doble de esa edad.</b> Se duplica toda la edad futura: $2(k + 5)$.</p><p><b>Paso 4. Disminuido en 3.</b> Al doble se le restan 3: $2(k + 5) - 3$.</p><p><b>Respuesta:</b> $2(k + 5) - 3$.</p><p><b>Comprobación:</b> si Camila tiene 10 años, en 5 años tendrá 15; el doble es 30 y disminuido en 3 da 27. Con la expresión: $2(10 + 5) - 3 = 27$. ✔</p><p><b>¿Por qué no las otras?</b> $2k + 5 - 3$ duplica solo la edad actual: falta el paréntesis. $2(k + 5 - 3)$ resta los 3 antes de duplicar. $2(k - 5) - 3$ usa la edad de hace 5 años.</p>`, conc: 'Si se duplica una suma, la suma va entre paréntesis.' },
    { enun: r`<p>¿Cuál de las siguientes expresiones representa "el cuadrado de la diferencia entre $a$ y $b$"?</p>`,
      alts: ['$a^2 - b^2$', '$a - b^2$', '$(a - b)^2$', '$2(a - b)$'], ok: 2,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Traducir. Lo último que se nombra es "el cuadrado de", y lo que se eleva es la diferencia.</p><p><b>Paso 2. La diferencia entre a y b.</b> $a - b$.</p><p><b>Paso 3. Su cuadrado.</b> Toda la diferencia va entre paréntesis: $(a - b)^2$.</p><p><b>Respuesta:</b> $(a - b)^2$.</p><p><b>¿Por qué no las otras?</b> $a^2 - b^2$ es "la diferencia de los cuadrados": primero eleva cada uno y después resta. Con $a = 5$ y $b = 3$: $(5 - 3)^2 = 4$, pero $25 - 9 = 16$. $a - b^2$ eleva solo la $b$. $2(a - b)$ confunde el cuadrado con el doble.</p>`, conc: '"El cuadrado de la diferencia" es (a − b)²; "la diferencia de los cuadrados" es a² − b².' },
    { enun: r`<p>El ingreso y la ganancia de una empresa, ambos en pesos, se modelan con respecto a la cantidad de artículos producidos ($x$) de la siguiente manera:</p><p>· Ingreso: $I(x) = 1200x + 500.000$<br>· Ganancia: $G(x) = 800x + 350.000$</p><p>Considera que la ganancia se puede calcular como $G(x) = I(x) - C(x)$, tal que $C$ es la función de costo. ¿Cuál es la función costo de la empresa?</p>`, src: 'PAES Regular 2026, adaptada',
      alts: ['$C(x) = -400x - 150.000$', '$C(x) = 2000x + 850.000$', '$C(x) = 400x - 150.000$', '$C(x) = 400x + 150.000$'], ok: 3,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El costo. Si la ganancia es el ingreso menos el costo, el costo es el ingreso menos la ganancia: $C(x) = I(x) - G(x)$.</p><p><b>Paso 2. Plantea.</b> $C(x) = (1200x + 500.000) - (800x + 350.000)$.</p><p><b>Paso 3. Quita el paréntesis.</b> El menos cambia los dos signos: $1200x + 500.000 - 800x - 350.000$.</p><p><b>Paso 4. Reduce.</b> $1200x - 800x = 400x$ y $500.000 - 350.000 = 150.000$.</p><p><b>Respuesta:</b> $C(x) = 400x + 150.000$.</p><p><b>Comprobación:</b> $I(x) - C(x) = 1200x + 500.000 - 400x - 150.000 = 800x + 350.000 = G(x)$. ✔</p><p><b>¿Por qué no las otras?</b> $-400x - 150.000$ resta al revés: $G(x) - I(x)$. $2000x + 850.000$ suma ingreso y ganancia. $400x - 150.000$ resta mal los números fijos: $350.000 - 500.000$.</p>`, conc: 'Despeja el costo: C = I − G, restando la ganancia completa.' },
    { enun: r`<p>Un rectángulo mide $(2x + 5)$ cm de largo y $(x - 1)$ cm de ancho. ¿Cuál es su perímetro?</p>`,
      alts: ['$(6x + 8)$ cm', '$(3x + 4)$ cm', '$(6x + 9)$ cm', '$(2x^2 + 3x - 5)$ cm'], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El perímetro: la suma de los cuatro lados, dos largos y dos anchos.</p><p><b>Paso 2. Plantea.</b> $2(2x + 5) + 2(x - 1)$.</p><p><b>Paso 3. Quita paréntesis.</b> $4x + 10 + 2x - 2$.</p><p><b>Paso 4. Reduce.</b> $6x + 8$.</p><p><b>Respuesta:</b> $(6x + 8)$ cm.</p><p><b>Comprobación:</b> con $x = 3$ el rectángulo mide 11 cm por 2 cm: perímetro $2\cdot 11 + 2\cdot 2 = 26$, y $6\cdot 3 + 8 = 26$. ✔</p><p><b>¿Por qué no las otras?</b> $(3x + 4)$ suma solo un largo y un ancho: es medio perímetro. $(6x + 9)$ multiplica el 2 solo por la $x$ en $2(x - 1)$. $(2x^2 + 3x - 5)$ es el área, no el perímetro.</p>`, conc: 'Perímetro: dos largos más dos anchos. Área: largo por ancho.' },
    { enun: r`<p>Un terreno rectangular mide $4b$ metros de ancho y $(3b + 5)$ metros de largo. ¿Cuál de las siguientes expresiones representa su área, en m²?</p>`,
      alts: ['$12b^2 + 5$', '$7b + 5$', '$14b + 10$', '$12b^2 + 20b$'], ok: 3,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El área de un rectángulo: largo por ancho.</p><p><b>Paso 2. Plantea.</b> $4b(3b + 5)$.</p><p><b>Paso 3. Distribuye.</b> $4b\cdot 3b = 12b^2$ y $4b\cdot 5 = 20b$.</p><p><b>Respuesta:</b> $12b^2 + 20b$.</p><p><b>Comprobación:</b> con $b = 1$ el terreno mide 4 m por 8 m: área 32 m², y $12 + 20 = 32$. ✔</p><p><b>¿Por qué no las otras?</b> $12b^2 + 5$ multiplica el $4b$ solo por el primer término. $7b + 5$ suma los lados en vez de multiplicarlos. $14b + 10$ es el perímetro: $2\cdot 4b + 2(3b + 5)$.</p>`, conc: 'El monomio multiplica a cada término del binomio.' },
    { enun: r`<p>Para reducir la expresión $3(x - 2) - 2(x - 5)$, una persona realizó el siguiente procedimiento, cometiendo un error.</p><p>Paso 1: multiplica el 3 por el primer paréntesis, obteniendo $3x - 6$.<br>Paso 2: multiplica el $-2$ por el segundo paréntesis, obteniendo $-2x - 10$.<br>Paso 3: junta los resultados, obteniendo $3x - 6 - 2x - 10$.<br>Paso 4: reduce y concluye que la expresión es igual a $x - 16$.</p><p>¿En cuál de los pasos se cometió el error?</p>`,
      alts: ['En el Paso 1', 'En el Paso 2', 'En el Paso 3', 'En el Paso 4'], ok: 1,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El paso con el error. Rehacemos cada paso y lo comparamos.</p><p><b>Paso 2. Revisa el Paso 1.</b> $3\cdot x = 3x$ y $3\cdot(-2) = -6$. <b>Correcto</b>.</p><p><b>Paso 3. Revisa el Paso 2.</b> $-2\cdot x = -2x$ y $(-2)\cdot(-5) = +10$, porque menos por menos da más. Se escribió $-10$. <b>Aquí está el error.</b></p><p><b>Paso 4. Revisa los Pasos 3 y 4.</b> Juntar y reducir lo que venía está bien hecho: $3x - 2x = x$ y $-6 - 10 = -16$. El resultado es malo solo porque arrastra el error.</p><p><b>Lo correcto:</b> $3x - 6 - 2x + 10 = x + 4$.</p><p><b>Respuesta:</b> en el Paso 2.</p><p><b>Comprobación:</b> con $x = 0$: $3(-2) - 2(-5) = -6 + 10 = 4$, y $0 + 4 = 4$. ✔ En cambio, $x - 16$ daría $-16$.</p><p><b>¿Por qué no las otras?</b> Los Pasos 1, 3 y 4 están bien hechos con lo que recibieron.</p>`, conc: 'Un número negativo fuera del paréntesis cambia el signo de cada término de adentro.' },
    { enun: r`<p>Si $x = -1$ e $y = \dfrac{1}{2}$, ¿cuál es el valor de $\dfrac{x^2 - 4y}{x + y}$?</p>`,
      alts: ['$2$', '$-2$', '$6$', r`$\dfrac{1}{2}$`], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Reemplazar y calcular. Conviene calcular aparte el numerador y el denominador.</p><p><b>Paso 2. Numerador.</b> $(-1)^2 - 4\cdot\dfrac{1}{2} = 1 - 2 = -1$.</p><p><b>Paso 3. Denominador.</b> $-1 + \dfrac{1}{2} = -\dfrac{1}{2}$.</p><p><b>Paso 4. Divide.</b> $\dfrac{-1}{-\frac{1}{2}} = (-1)\cdot(-2) = 2$. Dividir por $\dfrac{1}{2}$ es multiplicar por 2.</p><p><b>Respuesta:</b> $2$.</p><p><b>¿Por qué no las otras?</b> $-2$ calcula mal el denominador como $+\dfrac{1}{2}$. $6$ calcula $(-1)^2$ como $-1$: $\dfrac{-1 - 2}{-\frac{1}{2}} = 6$. $\dfrac{1}{2}$ multiplica numerador por denominador en vez de dividir.</p>`, conc: 'Calcula numerador y denominador por separado; dividir por ½ es multiplicar por 2.' },
    { enun: r`<p>En un concurso, cada respuesta correcta suma 3 puntos y cada respuesta incorrecta resta 1 punto. Una persona respondió $n$ preguntas, de las cuales $c$ fueron correctas y el resto incorrectas.</p><p>¿Cuál de las siguientes expresiones representa el puntaje de esta persona?</p>`, src: 'PAES Invierno 2026, adaptada',
      alts: ['$3c - n$', '$2c + n$', '$4c - n$', '$3c - 1$'], ok: 2,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El puntaje: lo que suman las correctas menos lo que restan las incorrectas.</p><p><b>Paso 2. Las incorrectas.</b> Respondió $n$ y $c$ fueron correctas: incorrectas son $n - c$.</p><p><b>Paso 3. Plantea.</b> $3c - 1\cdot(n - c)$.</p><p><b>Paso 4. Reduce.</b> $3c - n + c = 4c - n$.</p><p><b>Respuesta:</b> $4c - n$.</p><p><b>Comprobación:</b> con 10 respuestas y 7 correctas: $7\cdot 3 = 21$ puntos y 3 incorrectas restan 3; total 18. Con la expresión: $4\cdot 7 - 10 = 18$. ✔</p><p><b>¿Por qué no las otras?</b> $3c - n$ resta un punto por cada pregunta respondida, también por las correctas. $2c + n$ escribe las incorrectas al revés: $3c - (c - n)$. $3c - 1$ resta un solo punto en total.</p>`, conc: 'Escribe cada grupo con las letras dadas (incorrectas = n − c) y reduce.' },
    { enun: r`<p>Un cuaderno cuesta $p$ pesos y un lápiz cuesta <span class="peso">$300</span> menos que el cuaderno. ¿Cuál de las siguientes expresiones representa lo que se paga, en pesos, por 3 cuadernos y 5 lápices?</p>`,
      alts: ['$8p - 1500$', '$8p - 300$', '$8p + 1500$', '$3p - 1500$'], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El total: lo de los cuadernos más lo de los lápices.</p><p><b>Paso 2. Precio de un lápiz.</b> 300 menos que el cuaderno: $p - 300$.</p><p><b>Paso 3. Plantea.</b> $3p + 5(p - 300)$.</p><p><b>Paso 4. Distribuye y reduce.</b> $3p + 5p - 1500 = 8p - 1500$.</p><p><b>Respuesta:</b> $8p - 1500$.</p><p><b>Comprobación:</b> si el cuaderno cuesta 1000, el lápiz cuesta 700: $3000 + 3500 = 6500$, y $8\cdot 1000 - 1500 = 6500$. ✔</p><p><b>¿Por qué no las otras?</b> $8p - 300$ multiplica el 5 solo por la $p$. $8p + 1500$ suma los 300 en vez de restarlos. $3p - 1500$ olvida los $5p$ de los lápices.</p>`, conc: 'El precio unitario va entre paréntesis cuando se multiplica por la cantidad.' },
    { enun: r`<p>¿Cuál de las siguientes expresiones es igual a $x^2 + 3x - 2x^2 + x$?</p>`,
      alts: ['$3x^2 + 4x$', '$-x^2 + 3x$', '$-x^4 + 4x$', '$-x^2 + 4x$'], ok: 3,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Reducir: $x^2$ y $x$ no son semejantes, se juntan por separado.</p><p><b>Paso 2. Los x².</b> $x^2 - 2x^2$: $1 - 2 = -1$. Queda $-x^2$.</p><p><b>Paso 3. Las x.</b> $3x + x$: $3 + 1 = 4$. Queda $4x$.</p><p><b>Respuesta:</b> $-x^2 + 4x$.</p><p><b>Comprobación:</b> con $x = 2$: $4 + 6 - 8 + 2 = 4$, y $-4 + 8 = 4$. ✔</p><p><b>¿Por qué no las otras?</b> $3x^2 + 4x$ suma el $2x^2$ en vez de restarlo. $-x^2 + 3x$ olvida que $x$ vale $1x$. $-x^4 + 4x$ suma los exponentes al reducir; al sumar términos semejantes el exponente no cambia.</p>`, conc: 'Al reducir se operan los coeficientes; los exponentes se copian.' },
    { enun: r`<p>¿Cuál(es) de las siguientes igualdades es (son) verdadera(s) para todo valor de $x$?</p><p>I) $3x + 2x = 5x$<br>II) $3x\cdot 2x = 6x$<br>III) $x^3\cdot x^2 = x^5$</p>`,
      alts: ['Solo I', 'Solo I y II', 'Solo I y III', 'I, II y III'], ok: 2,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Revisar cada igualdad por separado.</p><p><b>Paso 2. I.</b> Son términos semejantes: $3 + 2 = 5$. <b>Verdadera.</b></p><p><b>Paso 3. II.</b> $3x\cdot 2x = 6x^{1+1} = 6x^2$, no $6x$. Con $x = 2$: $6\cdot 4 = 24$, pero $6\cdot 2 = 12$. <b>Falsa.</b></p><p><b>Paso 4. III.</b> Misma base: se suman los exponentes, $3 + 2 = 5$. <b>Verdadera.</b></p><p><b>Respuesta:</b> Solo I y III.</p><p><b>¿Por qué no las otras?</b> "Solo I" deja fuera III, que es verdadera. "Solo I y II" y "I, II y III" incluyen II, que es falsa.</p>`, conc: 'Al sumar, el exponente no cambia; al multiplicar, se suman los exponentes.' },
    { enun: r`<p>El largo de un rectángulo es el triple de su ancho $a$, en centímetros. Si el largo aumenta en 2 cm y el ancho disminuye en 1 cm, ¿cuál de las siguientes expresiones representa el área del nuevo rectángulo, en cm²?</p>`,
      alts: ['$3a^2 - a - 2$', '$3a^2 - 2$', '$3a^2 + a - 2$', '$3a^2 - 5a - 2$'], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El área del rectángulo nuevo: nuevo largo por nuevo ancho.</p><p><b>Paso 2. Medidas nuevas.</b> Largo: $3a + 2$. Ancho: $a - 1$.</p><p><b>Paso 3. Multiplica.</b> $(3a + 2)(a - 1) = 3a^2 - 3a + 2a - 2$.</p><p><b>Paso 4. Reduce.</b> $-3a + 2a = -a$. Queda $3a^2 - a - 2$.</p><p><b>Respuesta:</b> $3a^2 - a - 2$.</p><p><b>Comprobación:</b> con $a = 5$: largo 17, ancho 4, área 68. Y $75 - 5 - 2 = 68$. ✔</p><p><b>¿Por qué no las otras?</b> $3a^2 - 2$ olvida los productos del medio. $3a^2 + a - 2$ se equivoca en los signos del medio: $+3a - 2a$. $3a^2 - 5a - 2$ toma $+2a$ como $-2a$.</p>`, conc: 'Escribe las medidas nuevas, multiplica los binomios y reduce.' }
  ]
},
{
  id: 'alg_productos', unit: 'Unidad 2 · Expresiones algebraicas', icon: '🟧',
  title: 'Productos notables',
  desc: 'Paso a paso y con dibujos de áreas: cuadrado de binomio, suma por diferencia y binomios con término común; cómo combinarlos, usarlos para calcular mentalmente y evitar el error (a + b)² = a² + b².',
  slides: [
    { t: '¿Qué es un producto notable?', b: r`
      <div class="cols"><div>
      <p>Algunas multiplicaciones aparecen tanto que conviene conocer su resultado de memoria. Se llaman <b>productos notables</b>. Todas salen de multiplicar término a término, como cualquier binomio por binomio.</p>
      <p>Ejemplo: $(x + 3)(x + 3)$. Los cuatro productos son $x\cdot x = x^2$, $x\cdot 3 = 3x$, $3\cdot x = 3x$ y $3\cdot 3 = 9$. Reduciendo: $x^2 + 6x + 9$.</p>
      <p>Si reconoces el patrón, te saltas los cuatro productos y escribes el resultado directo. En la PAES eso ahorra tiempo y errores de signo.</p>
      </div><div>
      <table><thead><tr><th>Producto</th><th>Resultado</th></tr></thead><tbody>
      <tr><td>$(a + b)^2$</td><td>$a^2 + 2ab + b^2$</td></tr>
      <tr><td>$(a - b)^2$</td><td>$a^2 - 2ab + b^2$</td></tr>
      <tr><td>$(a + b)(a - b)$</td><td>$a^2 - b^2$</td></tr>
      <tr><td>$(x + p)(x + q)$</td><td>$x^2 + (p + q)x + pq$</td></tr></tbody></table>
      <div class="box"><b>Las letras son moldes</b> En $(a + b)^2$, la $a$ y la $b$ pueden ser cualquier cosa: un número, $2x$, $3y^2$... En $(2x + 5)^2$, $a = 2x$ y $b = 5$.</div>
      </div></div>` },
    { t: 'Cuadrado de binomio (suma)', b: r`
      <div class="cols"><div>
      <p>$$(a + b)^2 = a^2 + 2ab + b^2$$</p>
      <p>En palabras: <b>el cuadrado del primero, más el doble del primero por el segundo, más el cuadrado del segundo</b>.</p>
      <p>El dibujo lo muestra: un cuadrado de lado $a + b$ se parte en un cuadrado $a^2$, un cuadrado $b^2$ y <b>dos</b> rectángulos $ab$.</p>
      <p><b>Ejemplo 1.</b> $(x + 5)^2 = x^2 + 2\cdot x\cdot 5 + 5^2 = x^2 + 10x + 25$.</p>
      <p><b>Ejemplo 2.</b> $(2x + 3)^2$. Aquí $a = 2x$ y $b = 3$: $(2x)^2 + 2\cdot 2x\cdot 3 + 3^2 = 4x^2 + 12x + 9$.</p>
      </div><div>
      <div class="qfig"><img class="tikz" src="paes/m1/fig/expr_cuadrado_binomio.svg" alt="Cuadrado de lado a + b dividido en un cuadrado de área a al cuadrado, un cuadrado de área b al cuadrado y dos rectángulos de área ab"></div>
      <div class="box alert"><b>El error más común de la PAES</b> $(a + b)^2 \ne a^2 + b^2$. Faltan los dos rectángulos. Con números: $(3 + 4)^2 = 49$, pero $3^2 + 4^2 = 25$.</div>
      </div></div>` },
    { t: 'Cuadrado de binomio (resta)', b: r`
      <div class="cols"><div>
      <p>$$(a - b)^2 = a^2 - 2ab + b^2$$</p>
      <p>Es igual que el anterior, pero el término del medio es negativo. El último término <b>siempre es positivo</b>, porque es un cuadrado.</p>
      <p><b>Ejemplo 1.</b> $(x - 4)^2 = x^2 - 2\cdot x\cdot 4 + 4^2 = x^2 - 8x + 16$.</p>
      <p><b>Ejemplo 2.</b> $(3x - 2y)^2 = 9x^2 - 12xy + 4y^2$.</p>
      <p><b>Cálculo mental.</b> $99^2 = (100 - 1)^2 = 10.000 - 200 + 1 = 9801$. Y $21^2 = (20 + 1)^2 = 400 + 40 + 1 = 441$.</p>
      </div><div>
      <div class="box"><b>Un dato útil</b> $(a - b)^2 = (b - a)^2$: un número y su opuesto tienen el mismo cuadrado. Por ejemplo, $(x - 3)^2 = (3 - x)^2$.</div>
      <div class="box alert"><b>Revisa los tres términos</b><br>· $(x - 4)^2 \ne x^2 - 16$: falta el término del medio.<br>· $(x - 4)^2 \ne x^2 - 8x - 16$: el último es $+16$.<br>· $(x - 4)^2 \ne x^2 - 4x + 16$: falta el doble.</div>
      </div></div>` },
    { t: 'Suma por diferencia', b: r`
      <div class="cols"><div>
      <p>$$(a + b)(a - b) = a^2 - b^2$$</p>
      <p>Al multiplicar, los términos del medio se cancelan: $(a + b)(a - b) = a^2 - ab + ab - b^2 = a^2 - b^2$.</p>
      <p>En el dibujo, a un cuadrado de lado $a$ se le quita un cuadrado de lado $b$. Lo que queda (piezas I y II) se reordena en un rectángulo de lados $a + b$ y $a - b$.</p>
      <p><b>Ejemplo 1.</b> $(x + 7)(x - 7) = x^2 - 49$.</p>
      <p><b>Ejemplo 2.</b> $(3x + 2y)(3x - 2y) = 9x^2 - 4y^2$.</p>
      <p><b>Cálculo mental.</b> $103\cdot 97 = (100 + 3)(100 - 3) = 10.000 - 9 = 9991$.</p>
      </div><div>
      <div class="qfig"><img class="tikz" src="paes/m1/fig/expr_suma_diferencia.svg" alt="Cuadrado de lado a al que se le quita un cuadrado de lado b en una esquina; las dos piezas restantes, I y II, se reordenan en un rectángulo de largo a + b y ancho a − b"></div>
      <div class="box alert"><b>Los dos binomios deben tener los mismos términos</b> y solo distinto el signo de uno. $(x + 3)(x - 2)$ <b>no</b> es suma por diferencia.</div>
      </div></div>` },
    { t: 'Binomios con término común', b: r`
      <div class="cols"><div>
      <p>$$(x + p)(x + q) = x^2 + (p + q)x + pq$$</p>
      <p>Los dos binomios comparten la $x$. El resultado: $x^2$, más <b>la suma</b> de los números por $x$, más <b>el producto</b> de los números.</p>
      <p>En el dibujo, el rectángulo de lados $x + 4$ y $x + 3$ se parte en $x^2$, $4x$, $3x$ y $12$: $(x + 4)(x + 3) = x^2 + 7x + 12$.</p>
      <p><b>Ejemplo con signos.</b> $(x - 5)(x + 2)$: suma $-5 + 2 = -3$; producto $(-5)\cdot 2 = -10$. Resultado: $x^2 - 3x - 10$.</p>
      <p><b>Ejemplo.</b> $(x - 2)(x - 6)$: suma $-8$; producto $+12$. Resultado: $x^2 - 8x + 12$.</p>
      </div><div>
      <div class="qfig"><img class="tikz" src="paes/m1/fig/expr_binomios_comun.svg" alt="Rectángulo de lados x + 4 y x + 3 dividido en un cuadrado x al cuadrado y rectángulos de áreas 4x, 3x y 12"></div>
      <div class="box"><b>Los cuadrados son casos especiales</b> Si $p = q$, es un cuadrado de binomio. Si $q = -p$, es suma por diferencia: la suma da 0 y desaparece el término del medio.</div>
      </div></div>` },
    { t: 'Combinar productos notables', b: r`
      <div class="cols"><div>
      <p>En la PAES suelen restar dos productos. Ejemplo: $(x + 3)^2 - (x + 3)(x - 3)$.</p>
      <p><b>Paso 1. Desarrolla cada producto por separado.</b> $(x + 3)^2 = x^2 + 6x + 9$ y $(x + 3)(x - 3) = x^2 - 9$.</p>
      <p><b>Paso 2. Resta con paréntesis.</b> $(x^2 + 6x + 9) - (x^2 - 9)$.</p>
      <p><b>Paso 3. Quita el paréntesis.</b> El menos cambia todos los signos: $x^2 + 6x + 9 - x^2 + 9$.</p>
      <p><b>Paso 4. Reduce.</b> $x^2 - x^2 = 0$, y $9 + 9 = 18$. Queda $6x + 18$.</p>
      <p><b>Comprobación:</b> con $x = 1$: $16 - 4\cdot(-2) = 16 + 8 = 24$, y $6 + 18 = 24$. ✔</p>
      </div><div>
      <div class="box alert"><b>El paréntesis al restar</b> Si escribes $x^2 + 6x + 9 - x^2 - 9$, te equivocas: el $-9$ que restas se vuelve $+9$.</div>
      <div class="box"><b>Usar datos sin despejar</b> Si $a + b = 7$ y $ab = 10$: $a^2 + b^2 = (a + b)^2 - 2ab = 49 - 20 = 29$. No hace falta saber cuánto valen $a$ y $b$.</div>
      </div></div>` },
    { t: 'Errores típicos y resumen', b: r`
      <table><thead><tr><th>Error</th><th>Así no</th><th>Así sí</th></tr></thead><tbody>
      <tr><td>Olvidar el doble producto</td><td>$(x + 5)^2 = x^2 + 25$</td><td>$x^2 + 10x + 25$</td></tr>
      <tr><td>Olvidar el 2 del doble</td><td>$(x + 5)^2 = x^2 + 5x + 25$</td><td>$x^2 + 10x + 25$</td></tr>
      <tr><td>No elevar el coeficiente</td><td>$(2x)^2 = 2x^2$</td><td>$(2x)^2 = 4x^2$</td></tr>
      <tr><td>Último término negativo</td><td>$(x - 3)^2 = x^2 - 6x - 9$</td><td>$x^2 - 6x + 9$</td></tr>
      <tr><td>Suma por diferencia con más</td><td>$(x + 4)(x - 4) = x^2 + 16$</td><td>$x^2 - 16$</td></tr>
      <tr><td>Restar sin paréntesis</td><td>$A - (x^2 - 9) = A - x^2 - 9$</td><td>$A - x^2 + 9$</td></tr></tbody></table>
      <div class="box" style="margin-top:14px"><b>Método PAES</b> 1. Identifica el molde: ¿cuadrado, suma por diferencia o término común? 2. Identifica $a$ y $b$ (con su coeficiente). 3. Escribe el resultado término a término. 4. Si hay resta entre productos, usa paréntesis. 5. Comprueba con $x = 1$.</div>` }
  ],
  example: {
    src: 'PAES Invierno 2026',
    enun: r`<p>¿Cuál de las siguientes expresiones es igual a $(2x - 3)^2 - (2x - 3)(2x + 3)$?</p>`,
    alts: ['$18$', '$0$', '$-6x + 18$', '$-12x + 18$'], ok: 3,
    sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Desarrollar y reducir. Hay dos productos notables: un cuadrado de binomio y una suma por diferencia.</p><p><b>Paso 2. Cuadrado de binomio.</b> $(2x - 3)^2$ con $a = 2x$ y $b = 3$: $(2x)^2 - 2\cdot 2x\cdot 3 + 3^2 = 4x^2 - 12x + 9$.</p><p><b>Paso 3. Suma por diferencia.</b> $(2x - 3)(2x + 3) = (2x)^2 - 3^2 = 4x^2 - 9$.</p><p><b>Paso 4. Resta con paréntesis.</b> $(4x^2 - 12x + 9) - (4x^2 - 9) = 4x^2 - 12x + 9 - 4x^2 + 9$.</p><p><b>Paso 5. Reduce.</b> $4x^2 - 4x^2 = 0$ y $9 + 9 = 18$. Queda $-12x + 18$.</p><p><b>Respuesta:</b> $-12x + 18$.</p><p><b>Comprobación:</b> con $x = 1$: $(2 - 3)^2 - (2 - 3)(2 + 3) = 1 - (-5) = 6$, y $-12 + 18 = 6$. ✔</p><p><b>¿Por qué no las otras?</b> $18$ desarrolla $(2x - 3)^2$ como $4x^2 + 9$, sin término del medio. $0$ cree que los dos productos son iguales, o desarrolla $(2x - 3)^2$ como $4x^2 - 9$. $-6x + 18$ olvida el 2 del doble producto: escribe $-6x$ en vez de $-12x$.</p>`,
    conc: 'Desarrolla cada producto notable por separado y resta con paréntesis.'
  },
  bank: [
    { enun: r`<p>¿Cuál de las siguientes expresiones es igual a $(x + 6)^2$?</p>`,
      alts: ['$x^2 + 36$', '$x^2 + 6x + 36$', '$x^2 + 12x + 36$', '$x^2 + 12x + 12$'], ok: 2,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Desarrollar un cuadrado de binomio: $a^2 + 2ab + b^2$ con $a = x$ y $b = 6$.</p><p><b>Paso 2. Cuadrado del primero.</b> $x^2$.</p><p><b>Paso 3. Doble del primero por el segundo.</b> $2\cdot x\cdot 6 = 12x$.</p><p><b>Paso 4. Cuadrado del segundo.</b> $6^2 = 36$.</p><p><b>Respuesta:</b> $x^2 + 12x + 36$.</p><p><b>Comprobación:</b> con $x = 1$: $7^2 = 49$ y $1 + 12 + 36 = 49$. ✔</p><p><b>¿Por qué no las otras?</b> $x^2 + 36$ olvida el doble producto. $x^2 + 6x + 36$ olvida el 2 del doble. $x^2 + 12x + 12$ calcula $6^2$ como $2\cdot 6$.</p>`, conc: '(a + b)² tiene tres términos: a², 2ab y b².' },
    { enun: r`<p>¿Cuál de las siguientes expresiones es igual a $(3x - 2)^2$?</p>`,
      alts: ['$9x^2 - 12x + 4$', '$9x^2 - 4$', '$3x^2 - 12x + 4$', '$9x^2 - 6x + 4$'], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Desarrollar $(a - b)^2 = a^2 - 2ab + b^2$ con $a = 3x$ y $b = 2$.</p><p><b>Paso 2. Cuadrado del primero.</b> $(3x)^2 = 9x^2$: se eleva también el 3.</p><p><b>Paso 3. Doble producto.</b> $-2\cdot 3x\cdot 2 = -12x$.</p><p><b>Paso 4. Cuadrado del segundo.</b> $2^2 = 4$, positivo.</p><p><b>Respuesta:</b> $9x^2 - 12x + 4$.</p><p><b>Comprobación:</b> con $x = 1$: $1^2 = 1$ y $9 - 12 + 4 = 1$. ✔</p><p><b>¿Por qué no las otras?</b> $9x^2 - 4$ confunde el cuadrado con una suma por diferencia. $3x^2 - 12x + 4$ no eleva el coeficiente 3. $9x^2 - 6x + 4$ olvida el 2 del doble producto.</p>`, conc: 'Eleva todo el primer término, coeficiente incluido: (3x)² = 9x².' },
    { enun: r`<p>¿Cuál de las siguientes expresiones es igual a $(2a + 5b)(2a - 5b)$?</p>`,
      alts: ['$4a^2 + 25b^2$', '$4a^2 - 25b^2$', '$4a^2 - 20ab - 25b^2$', '$2a^2 - 5b^2$'], ok: 1,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Es una suma por diferencia: mismos términos, distinto signo. El resultado es $a^2 - b^2$ con $a = 2a$ y $b = 5b$.</p><p><b>Paso 2. Cuadrado del primero.</b> $(2a)^2 = 4a^2$.</p><p><b>Paso 3. Cuadrado del segundo.</b> $(5b)^2 = 25b^2$.</p><p><b>Paso 4. Resta.</b> $4a^2 - 25b^2$.</p><p><b>Respuesta:</b> $4a^2 - 25b^2$.</p><p><b>Comprobación:</b> con $a = 1$ y $b = 1$: $7\cdot(-3) = -21$, y $4 - 25 = -21$. ✔</p><p><b>¿Por qué no las otras?</b> $4a^2 + 25b^2$ se equivoca en el signo: $(5b)(-5b)$ es negativo. $4a^2 - 20ab - 25b^2$ no cancela los términos del medio: $-10ab + 10ab = 0$. $2a^2 - 5b^2$ no eleva los coeficientes.</p>`, conc: 'Suma por diferencia: cuadrado del primero menos cuadrado del segundo.' },
    { enun: r`<p>¿Cuál de las siguientes expresiones es igual a $(x + 7)(x - 3)$?</p>`,
      alts: ['$x^2 - 4x - 21$', '$x^2 + 10x - 21$', '$x^2 - 21$', '$x^2 + 4x - 21$'], ok: 3,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Binomios con término común: $x^2 + (p + q)x + pq$ con $p = 7$ y $q = -3$.</p><p><b>Paso 2. Suma.</b> $7 + (-3) = 4$: el término del medio es $4x$.</p><p><b>Paso 3. Producto.</b> $7\cdot(-3) = -21$.</p><p><b>Respuesta:</b> $x^2 + 4x - 21$.</p><p><b>Comprobación:</b> con $x = 1$: $8\cdot(-2) = -16$ y $1 + 4 - 21 = -16$. ✔</p><p><b>¿Por qué no las otras?</b> $x^2 - 4x - 21$ cambia el signo de la suma. $x^2 + 10x - 21$ suma $7 + 3$ sin el signo del 3. $x^2 - 21$ olvida el término del medio: no es suma por diferencia, porque los números son distintos.</p>`, conc: 'En (x + p)(x + q): suma p + q para el medio y multiplica pq para el final.' },
    { enun: r`<p>¿Cuál es el valor de $102\cdot 98$?</p>`,
      alts: ['$9998$', '$10.004$', '$9996$', '$10.000$'], ok: 2,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Multiplicar sin calculadora. 102 y 98 están a la misma distancia de 100: es una suma por diferencia.</p><p><b>Paso 2. Escríbelo así.</b> $102\cdot 98 = (100 + 2)(100 - 2)$.</p><p><b>Paso 3. Aplica.</b> $100^2 - 2^2 = 10.000 - 4 = 9996$.</p><p><b>Respuesta:</b> $9996$.</p><p><b>Comprobación:</b> $102\cdot 98 = 102\cdot 100 - 102\cdot 2 = 10.200 - 204 = 9996$. ✔</p><p><b>¿Por qué no las otras?</b> $9998$ resta 2 en vez de $2^2$. $10.004$ suma el cuadrado en vez de restarlo. $10.000$ cree que lo que se suma y se resta se compensa.</p>`, conc: 'Dos números a igual distancia de uno redondo: (n + d)(n − d) = n² − d².' },
    { enun: r`<p>¿Cuál es el valor de $31^2$?</p>`,
      alts: ['$901$', '$931$', '$62$', '$961$'], ok: 3,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Elevar al cuadrado sin calculadora. Escribimos $31 = 30 + 1$ y usamos el cuadrado de binomio.</p><p><b>Paso 2. Aplica.</b> $(30 + 1)^2 = 30^2 + 2\cdot 30\cdot 1 + 1^2 = 900 + 60 + 1$.</p><p><b>Respuesta:</b> $961$.</p><p><b>Comprobación:</b> $31\cdot 31 = 31\cdot 30 + 31 = 930 + 31 = 961$. ✔</p><p><b>¿Por qué no las otras?</b> $901$ olvida el doble producto: $900 + 1$. $931$ olvida el 2 del doble: $900 + 30 + 1$. $62$ calcula el doble en vez del cuadrado.</p>`, conc: 'Para elevar números cercanos a uno redondo, usa (a + b)².' },
    { enun: r`<p>Un jardín cuadrado de $x$ metros de lado está rodeado por un camino de 2 metros de ancho, como se representa en la figura.</p><p>¿Cuál de las siguientes expresiones representa el área del camino, en m²?</p>`,
      fig: { type: 'img', src: 'paes/m1/fig/expr_marco.svg', alt: 'Jardín cuadrado de lado x rodeado por un camino de ancho 2 en todo su contorno' },
      alts: ['$8x + 16$', '$16$', '$4x + 4$', '$x^2 + 8x + 16$'], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El área del camino: el cuadrado grande menos el jardín.</p><p><b>Paso 2. Lado del cuadrado grande.</b> El camino agrega 2 m a cada lado: $x + 2 + 2 = x + 4$.</p><p><b>Paso 3. Área grande.</b> $(x + 4)^2 = x^2 + 8x + 16$.</p><p><b>Paso 4. Resta el jardín.</b> $x^2 + 8x + 16 - x^2 = 8x + 16$.</p><p><b>Respuesta:</b> $8x + 16$.</p><p><b>Comprobación:</b> con $x = 6$: grande $10^2 = 100$, jardín $36$, camino $64$. Y $8\cdot 6 + 16 = 64$. ✔</p><p><b>¿Por qué no las otras?</b> $16$ desarrolla $(x + 4)^2$ como $x^2 + 16$. $4x + 4$ suma solo un ancho de camino: usa $(x + 2)^2$. $x^2 + 8x + 16$ es el área total, con el jardín incluido.</p>`, conc: 'Área de un marco: cuadrado grande menos cuadrado chico.' },
    { enun: r`<p>¿Cuál de las siguientes expresiones <b>no</b> es igual a $(x - 3)^2$?</p>`,
      alts: ['$x^2 - 6x + 9$', '$(3 - x)^2$', '$x^2 - 9$', '$(x - 3)(x - 3)$'], ok: 2,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> La única alternativa que no es igual a $(x - 3)^2$.</p><p><b>Paso 2. Desarrolla.</b> $(x - 3)^2 = x^2 - 6x + 9$: la primera sí es igual.</p><p><b>Paso 3. Revisa las demás.</b> $(3 - x)^2 = 9 - 6x + x^2$: igual. $(x - 3)(x - 3)$ es la definición de elevar al cuadrado: igual.</p><p><b>Paso 4.</b> $x^2 - 9$ no tiene término del medio: es $(x + 3)(x - 3)$.</p><p><b>Respuesta:</b> $x^2 - 9$.</p><p><b>Comprobación:</b> con $x = 0$: $(0 - 3)^2 = 9$, pero $0 - 9 = -9$. ✔</p><p><b>¿Por qué no las otras?</b> Las otras tres valen lo mismo para cualquier $x$. En particular, $(a - b)^2 = (b - a)^2$.</p>`, conc: '(x − 3)² ≠ x² − 9; en cambio (x − 3)² = (3 − x)².' },
    { enun: r`<p>¿Cuál de las siguientes expresiones es igual a $(x + 4)^2 - (x - 4)^2$?</p>`,
      alts: ['$0$', '$32$', '$8x$', '$16x$'], ok: 3,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Desarrollar los dos cuadrados y restar con paréntesis.</p><p><b>Paso 2. Primero.</b> $(x + 4)^2 = x^2 + 8x + 16$.</p><p><b>Paso 3. Segundo.</b> $(x - 4)^2 = x^2 - 8x + 16$.</p><p><b>Paso 4. Resta.</b> $(x^2 + 8x + 16) - (x^2 - 8x + 16) = x^2 + 8x + 16 - x^2 + 8x - 16 = 16x$.</p><p><b>Respuesta:</b> $16x$.</p><p><b>Comprobación:</b> con $x = 1$: $25 - 9 = 16$, y $16\cdot 1 = 16$. ✔</p><p><b>¿Por qué no las otras?</b> $0$ desarrolla los dos como $x^2 + 16$. $32$ cambia solo el signo del primer término del paréntesis. $8x$ olvida el 2 del doble en los dos desarrollos: $4x - (-4x)$.</p>`, conc: 'Al restar un cuadrado desarrollado, cambia los signos de sus tres términos.' },
    { enun: r`<p>¿Cuál de las siguientes expresiones es igual a $(x - 5)^2 - x(x - 10)$?</p>`,
      alts: ['$10x - 25$', '$25$', '$-20x + 25$', '$2x^2 - 20x + 25$'], ok: 1,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Desarrollar cada parte y restar.</p><p><b>Paso 2. Cuadrado.</b> $(x - 5)^2 = x^2 - 10x + 25$.</p><p><b>Paso 3. Producto.</b> $x(x - 10) = x^2 - 10x$.</p><p><b>Paso 4. Resta.</b> $x^2 - 10x + 25 - x^2 + 10x = 25$.</p><p><b>Respuesta:</b> $25$. La expresión vale 25 para cualquier $x$.</p><p><b>Comprobación:</b> con $x = 2$: $9 - 2\cdot(-8) = 9 + 16 = 25$. ✔</p><p><b>¿Por qué no las otras?</b> $10x - 25$ desarrolla el cuadrado como $x^2 - 25$. $-20x + 25$ cambia solo el primer signo: escribe $-x^2 - 10x$. $2x^2 - 20x + 25$ suma en vez de restar.</p>`, conc: 'Desarrolla, resta con paréntesis y reduce: a veces todo se cancela salvo un número.' },
    { enun: r`<p>¿Cuál(es) de las siguientes igualdades es (son) verdadera(s) para todos los números reales $a$ y $b$?</p><p>I) $(a + b)^2 = a^2 + b^2$<br>II) $(a + b)(a - b) = a^2 - b^2$<br>III) $(a - b)^2 = (b - a)^2$</p>`,
      alts: ['Solo II y III', 'Solo II', 'Solo III', 'I, II y III'], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Revisar cada igualdad. Si falla con un par de números, es falsa.</p><p><b>Paso 2. I.</b> Con $a = 1$ y $b = 1$: $(1 + 1)^2 = 4$, pero $1 + 1 = 2$. Falta $2ab$. <b>Falsa.</b></p><p><b>Paso 3. II.</b> Es la suma por diferencia. <b>Verdadera.</b></p><p><b>Paso 4. III.</b> $b - a = -(a - b)$, y un número y su opuesto tienen el mismo cuadrado. <b>Verdadera.</b></p><p><b>Respuesta:</b> Solo II y III.</p><p><b>¿Por qué no las otras?</b> "Solo II" y "Solo III" dejan fuera una verdadera. "I, II y III" incluye I, que es falsa.</p>`, conc: 'Un contraejemplo basta para descartar una igualdad.' },
    { enun: r`<p>¿Cuál de las siguientes expresiones es igual a $\left(x + \dfrac{1}{2}\right)^2$?</p>`,
      alts: [r`$x^2 + \dfrac{1}{4}$`, r`$x^2 + x + \dfrac{1}{4}$`, r`$x^2 + \dfrac{1}{2}x + \dfrac{1}{4}$`, r`$x^2 + x + \dfrac{1}{2}$`], ok: 1,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Cuadrado de binomio con $a = x$ y $b = \dfrac{1}{2}$.</p><p><b>Paso 2. Doble producto.</b> $2\cdot x\cdot\dfrac{1}{2} = x$.</p><p><b>Paso 3. Cuadrado del segundo.</b> $\left(\dfrac{1}{2}\right)^2 = \dfrac{1}{4}$.</p><p><b>Respuesta:</b> $x^2 + x + \dfrac{1}{4}$.</p><p><b>Comprobación:</b> con $x = 1$: $\left(\dfrac{3}{2}\right)^2 = \dfrac{9}{4}$, y $1 + 1 + \dfrac{1}{4} = \dfrac{9}{4}$. ✔</p><p><b>¿Por qué no las otras?</b> $x^2 + \dfrac{1}{4}$ olvida el doble producto. $x^2 + \dfrac{1}{2}x + \dfrac{1}{4}$ olvida el 2 del doble. $x^2 + x + \dfrac{1}{2}$ no eleva el $\dfrac{1}{2}$.</p>`, conc: 'Con fracciones, el doble producto puede simplificarse: 2·x·½ = x.' },
    { enun: r`<p>Un cuadrado mide $a$ cm de lado. Si su lado aumenta en 3 cm, ¿en cuánto aumenta su área, en cm²?</p>`,
      alts: ['$6a + 9$', '$9$', '$3a + 9$', '$12$'], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El aumento: área nueva menos área original.</p><p><b>Paso 2. Área nueva.</b> $(a + 3)^2 = a^2 + 6a + 9$.</p><p><b>Paso 3. Resta la original.</b> $a^2 + 6a + 9 - a^2 = 6a + 9$.</p><p><b>Respuesta:</b> $6a + 9$.</p><p><b>Comprobación:</b> con $a = 5$: de 25 cm² pasa a 64 cm², aumenta 39. Y $6\cdot 5 + 9 = 39$. ✔</p><p><b>¿Por qué no las otras?</b> $9$ desarrolla $(a + 3)^2$ como $a^2 + 9$. $3a + 9$ olvida el 2 del doble. $12$ es lo que aumenta el perímetro, no el área.</p>`, conc: 'Aumento de área: (a + d)² − a² = 2ad + d².' },
    { enun: r`<p>Un cuadrado mide $x$ cm de lado, con $x > 5$. Se forma un rectángulo aumentando uno de sus lados en 5 cm y disminuyendo el otro en 5 cm.</p><p>¿Cuál de las siguientes afirmaciones es verdadera?</p>`,
      alts: ['El área no cambia.', 'El área disminuye en 25 cm².', 'El área aumenta en 25 cm².', 'El área disminuye en $10x$ cm².'], ok: 1,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Comparar el área del rectángulo con la del cuadrado, $x^2$.</p><p><b>Paso 2. Área del rectángulo.</b> $(x + 5)(x - 5) = x^2 - 25$: suma por diferencia.</p><p><b>Paso 3. Compara.</b> $x^2 - 25$ es 25 menos que $x^2$.</p><p><b>Respuesta:</b> el área disminuye en 25 cm².</p><p><b>Comprobación:</b> con $x = 10$: cuadrado de 100 cm², rectángulo de $15\cdot 5 = 75$ cm². Disminuye 25. ✔</p><p><b>¿Por qué no las otras?</b> "No cambia" supone que lo que se agrega se compensa con lo que se quita; no es así. "Aumenta en 25" se equivoca en el signo. "Disminuye en $10x$" inventa un término del medio que en la suma por diferencia se cancela.</p>`, conc: '(x + d)(x − d) = x² − d²: siempre queda d² menos que el cuadrado.' },
    { enun: r`<p>¿Qué término falta en $x^2 + \;\square\; + 49$ para que la expresión sea igual a $(x - 7)^2$?</p>`,
      alts: ['$-7x$', '$14x$', '$-49x$', '$-14x$'], ok: 3,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El término del medio de $(x - 7)^2$.</p><p><b>Paso 2. Doble producto.</b> $-2\cdot x\cdot 7 = -14x$. Es negativo porque el binomio es una resta.</p><p><b>Respuesta:</b> $-14x$.</p><p><b>Comprobación:</b> con $x = 1$: $(1 - 7)^2 = 36$, y $1 - 14 + 49 = 36$. ✔</p><p><b>¿Por qué no las otras?</b> $-7x$ olvida el doble. $14x$ se equivoca en el signo: daría $(x + 7)^2$. $-49x$ usa el cuadrado de 7 en vez del doble.</p>`, conc: 'En (a − b)² el término del medio es −2ab.' },
    { enun: r`<p>Para reducir la expresión $(2x + 3)^2 - (x + 1)(x - 1)$, una persona realizó el siguiente procedimiento, cometiendo un error.</p><p>Paso 1: desarrolla el cuadrado de binomio, obteniendo $4x^2 + 12x + 9$.<br>Paso 2: desarrolla la suma por diferencia, obteniendo $x^2 - 1$.<br>Paso 3: resta los resultados, obteniendo $4x^2 + 12x + 9 - x^2 - 1$.<br>Paso 4: reduce y concluye que la expresión es igual a $3x^2 + 12x + 8$.</p><p>¿En cuál de los pasos se cometió el error?</p>`,
      alts: ['En el Paso 1', 'En el Paso 2', 'En el Paso 3', 'En el Paso 4'], ok: 2,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El paso con el error. Rehacemos cada uno.</p><p><b>Paso 2. Revisa el Paso 1.</b> $(2x)^2 + 2\cdot 2x\cdot 3 + 9 = 4x^2 + 12x + 9$. <b>Correcto.</b></p><p><b>Paso 3. Revisa el Paso 2.</b> $(x + 1)(x - 1) = x^2 - 1$. <b>Correcto.</b></p><p><b>Paso 4. Revisa el Paso 3.</b> Se resta todo $x^2 - 1$: $-(x^2 - 1) = -x^2 + 1$. Se escribió $-1$. <b>Aquí está el error.</b></p><p><b>Paso 5. Revisa el Paso 4.</b> Con lo que recibió, la reducción está bien hecha.</p><p><b>Lo correcto:</b> $4x^2 + 12x + 9 - x^2 + 1 = 3x^2 + 12x + 10$.</p><p><b>Respuesta:</b> en el Paso 3.</p><p><b>Comprobación:</b> con $x = 0$: $9 - (1)(-1) = 10$, y la expresión correcta da $10$. La de la persona da $8$.</p><p><b>¿Por qué no las otras?</b> Los Pasos 1, 2 y 4 están bien hechos con lo que recibieron.</p>`, conc: 'Al restar un producto desarrollado, ponlo entre paréntesis antes de quitar signos.' },
    { enun: r`<p>¿Cuál de las siguientes expresiones es igual a $(x - 2)(x - 6)$?</p>`,
      alts: ['$x^2 - 8x + 12$', '$x^2 + 8x + 12$', '$x^2 - 8x - 12$', '$x^2 + 12$'], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Binomios con término común, con $p = -2$ y $q = -6$.</p><p><b>Paso 2. Suma.</b> $-2 + (-6) = -8$: término del medio $-8x$.</p><p><b>Paso 3. Producto.</b> $(-2)\cdot(-6) = +12$.</p><p><b>Respuesta:</b> $x^2 - 8x + 12$.</p><p><b>Comprobación:</b> con $x = 1$: $(-1)(-5) = 5$, y $1 - 8 + 12 = 5$. ✔</p><p><b>¿Por qué no las otras?</b> $x^2 + 8x + 12$ pierde el signo de la suma. $x^2 - 8x - 12$ se equivoca en el producto: menos por menos da más. $x^2 + 12$ olvida el término del medio.</p>`, conc: 'Suma con signos para el medio; producto con signos para el final.' },
    { enun: r`<p>Si $a^2 + b^2 = 20$ y $ab = 8$, ¿cuál es el valor de $(a + b)^2$?</p>`,
      alts: ['$28$', '$36$', '$4$', '$160$'], ok: 1,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El valor de $(a + b)^2$ sin conocer $a$ ni $b$. Desarrollamos y reemplazamos lo que nos dan.</p><p><b>Paso 2. Desarrolla.</b> $(a + b)^2 = a^2 + 2ab + b^2 = (a^2 + b^2) + 2ab$.</p><p><b>Paso 3. Reemplaza.</b> $20 + 2\cdot 8 = 20 + 16 = 36$.</p><p><b>Respuesta:</b> $36$.</p><p><b>Comprobación:</b> con $a = 2$ y $b = 4$: $4 + 16 = 20$ ✔, $2\cdot 4 = 8$ ✔ y $(2 + 4)^2 = 36$ ✔.</p><p><b>¿Por qué no las otras?</b> $28$ suma $ab$ una sola vez: falta el doble. $4$ es $(a - b)^2 = 20 - 16$. $160$ multiplica los datos.</p>`, conc: '(a + b)² = (a² + b²) + 2ab: no hace falta encontrar a y b.' }
  ]
},
{
  id: 'alg_factorizacion', unit: 'Unidad 2 · Expresiones algebraicas', icon: '🧱',
  title: 'Factorización',
  desc: 'Paso a paso: factor común, diferencia de cuadrados, trinomio cuadrado perfecto y trinomio x² + bx + c; simplificar fracciones algebraicas y usar la factorización para calcular mentalmente, como 51² − 49².',
  slides: [
    { t: 'Factorizar es deshacer la multiplicación', b: r`
      <div class="cols"><div>
      <p><b>Factorizar</b> es escribir una suma como una multiplicación. Es el camino inverso de desarrollar:</p>
      <p>desarrollar: $3a(2a + 4) \;\to\; 6a^2 + 12a$<br>factorizar: $6a^2 + 12a \;\to\; 6a(a + 2)$</p>
      <p>Con números ya lo haces: $12 + 20 = 4\cdot 3 + 4\cdot 5 = 4(3 + 5)$. El 4 está en los dos sumandos y "sale" como factor.</p>
      <p>En el dibujo, el área $6a^2 + 12a$ es un rectángulo. Factorizar es encontrar sus lados.</p>
      </div><div>
      <div class="qfig"><img class="tikz" src="paes/m1/fig/expr_distributiva.svg" alt="Rectángulo de alto 3a y largo 2a + 4, partido en un rectángulo de área 6a al cuadrado y otro de área 12a"></div>
      <div class="box alert"><b>Factoriza completo</b> $3a(2a + 4)$ es igual a $6a^2 + 12a$, pero dentro del paréntesis todavía hay un factor común, el 2. La factorización completa saca el <b>mayor</b> factor común: $6a(a + 2)$.</div>
      <div class="box"><b>Siempre se puede comprobar</b> Multiplica lo que obtuviste: debe volver a dar la expresión original.</div>
      </div></div>` },
    { t: 'Factor común', b: r`
      <div class="cols"><div>
      <p>Ejemplo: factorizar $12x^3 - 18x^2$.</p>
      <p><b>Paso 1. Números.</b> El mayor número que divide a 12 y a 18 (su MCD) es 6.</p>
      <p><b>Paso 2. Letras.</b> Cada letra que está en <b>todos</b> los términos, con su <b>menor</b> exponente: $x^2$.</p>
      <p><b>Paso 3. Factor común:</b> $6x^2$.</p>
      <p><b>Paso 4. Divide cada término por el factor común.</b> $\dfrac{12x^3}{6x^2} = 2x$ y $\dfrac{-18x^2}{6x^2} = -3$.</p>
      <p><b>Resultado:</b> $6x^2(2x - 3)$. Comprueba: $6x^2\cdot 2x - 6x^2\cdot 3 = 12x^3 - 18x^2$. ✔</p>
      </div><div>
      <div class="box"><b>Si un término "desaparece"</b> En $5x + 5$, al dividir $5$ por $5$ queda $1$, no $0$: $5x + 5 = 5(x + 1)$.</div>
      <div class="box"><b>El factor común puede ser un paréntesis</b> $x(a + b) + 3(a + b) = (a + b)(x + 3)$.</div>
      <div class="box alert"><b>Cálculo mental</b> $37\cdot 13 + 37\cdot 87 = 37(13 + 87) = 37\cdot 100 = 3700$.</div>
      </div></div>` },
    { t: 'Diferencia de cuadrados', b: r`
      <div class="cols"><div>
      <p>$$a^2 - b^2 = (a + b)(a - b)$$</p>
      <p>Es la suma por diferencia leída al revés. Se reconoce porque son <b>dos cuadrados</b> separados por un <b>menos</b>.</p>
      <p><b>Ejemplo 1.</b> $x^2 - 49$. Las raíces son $x$ y $7$: $(x + 7)(x - 7)$.</p>
      <p><b>Ejemplo 2.</b> $9x^2 - 16y^2$. Las raíces son $3x$ y $4y$: $(3x + 4y)(3x - 4y)$.</p>
      <p><b>Ejemplo 3.</b> $2x^2 - 50$. Primero el factor común: $2(x^2 - 25)$. Después la diferencia: $2(x + 5)(x - 5)$.</p>
      <p><b>Cálculo mental.</b> $51^2 - 49^2 = (51 + 49)(51 - 49) = 100\cdot 2 = 200$.</p>
      </div><div>
      <div class="qfig"><img class="tikz" src="paes/m1/fig/expr_suma_diferencia.svg" alt="Cuadrado de lado a sin un cuadrado de lado b en la esquina; las piezas restantes forman un rectángulo de lados a + b y a − b"></div>
      <div class="box alert"><b>La suma de cuadrados no se factoriza así</b> $x^2 + 9 \ne (x + 3)(x - 3)$, que da $x^2 - 9$. Tampoco es $(x + 3)^2$, que da $x^2 + 6x + 9$.</div>
      </div></div>` },
    { t: 'Trinomio cuadrado perfecto', b: r`
      <div class="cols"><div>
      <p>$$a^2 + 2ab + b^2 = (a + b)^2 \qquad a^2 - 2ab + b^2 = (a - b)^2$$</p>
      <p>Es el cuadrado de binomio al revés. Se reconoce en tres pasos:</p>
      <p><b>Paso 1.</b> El primer y el último término son cuadrados positivos.</p>
      <p><b>Paso 2.</b> Saca sus raíces.</p>
      <p><b>Paso 3.</b> El término del medio debe ser el <b>doble</b> del producto de esas raíces. Su signo dice si es suma o resta.</p>
      <p><b>Ejemplo 1.</b> $x^2 + 10x + 25$: raíces $x$ y $5$; doble producto $2\cdot x\cdot 5 = 10x$ ✔. Es $(x + 5)^2$.</p>
      <p><b>Ejemplo 2.</b> $4x^2 - 12x + 9$: raíces $2x$ y $3$; doble producto $2\cdot 2x\cdot 3 = 12x$ ✔, con menos. Es $(2x - 3)^2$.</p>
      </div><div>
      <div class="qfig"><img class="tikz" src="paes/m1/fig/expr_cuadrado_binomio.svg" alt="Cuadrado de lado a + b formado por a al cuadrado, b al cuadrado y dos rectángulos ab"></div>
      <div class="box alert"><b>Si el medio no calza, no es cuadrado perfecto</b> $x^2 + 6x + 25$: raíces $x$ y $5$, pero el doble producto sería $10x$, no $6x$.</div>
      </div></div>` },
    { t: 'Trinomio x² + bx + c', b: r`
      <div class="cols"><div>
      <p>$$x^2 + bx + c = (x + p)(x + q) \quad\text{con}\quad p + q = b,\;\; pq = c$$</p>
      <p>Hay que buscar <b>dos números que multiplicados den c y sumados den b</b>.</p>
      <p><b>Ejemplo 1.</b> $x^2 + 7x + 12$. Parejas que multiplican 12: $1\cdot 12$, $2\cdot 6$, $3\cdot 4$. La que suma 7 es $3$ y $4$. Resultado: $(x + 3)(x + 4)$. Es el rectángulo del dibujo.</p>
      <p><b>Ejemplo 2.</b> $x^2 - 2x - 15$. Producto $-15$: los números tienen distinto signo. Suma $-2$: el negativo es el mayor. Son $-5$ y $3$. Resultado: $(x - 5)(x + 3)$.</p>
      <p><b>Ejemplo 3.</b> $x^2 - 9x + 20$. Producto $+20$ y suma $-9$: los dos son negativos, $-4$ y $-5$. Resultado: $(x - 4)(x - 5)$.</p>
      </div><div>
      <div class="qfig"><img class="tikz" src="paes/m1/fig/expr_binomios_comun.svg" alt="Rectángulo de lados x + 4 y x + 3 dividido en x al cuadrado, 4x, 3x y 12"></div>
      <div class="box"><b>Regla de signos</b><br>· $c$ positivo: los dos números tienen el signo de $b$.<br>· $c$ negativo: tienen signos distintos.</div>
      </div></div>` },
    { t: 'Simplificar fracciones algebraicas', b: r`
      <div class="cols"><div>
      <p>Solo se pueden tachar <b>factores</b> (cosas que multiplican), nunca sumandos. Por eso primero se factoriza.</p>
      <p><b>Ejemplo 1.</b> $\dfrac{x^2 - 9}{x + 3}$.</p>
      <p><b>Paso 1. Factoriza.</b> $x^2 - 9 = (x + 3)(x - 3)$.</p>
      <p><b>Paso 2. Tacha el factor repetido.</b> $\dfrac{(x + 3)(x - 3)}{x + 3} = x - 3$, con $x \ne -3$.</p>
      <p><b>Ejemplo 2.</b> $\dfrac{x^2 + 5x}{x^2 - 25} = \dfrac{x(x + 5)}{(x + 5)(x - 5)} = \dfrac{x}{x - 5}$.</p>
      </div><div>
      <div class="box alert"><b>Así no</b> $\dfrac{x + 6}{x + 2} \ne \dfrac{6}{2} = 3$. Con $x = 2$: $\dfrac{8}{4} = 2$, no 3. La $x$ es un sumando y no se puede tachar.</div>
      <div class="box"><b>¿Por qué el x ≠ −3?</b> En la fracción original no se puede dividir por cero. El valor que anula el denominador queda fuera también después de simplificar.</div>
      </div></div>` },
    { t: '¿Qué factorización uso? Resumen', b: r`
      <table><thead><tr><th>Mira esto</th><th>Usa</th><th>Ejemplo</th></tr></thead><tbody>
      <tr><td>Algo se repite en todos los términos</td><td>Factor común (siempre primero)</td><td>$4x^2 + 6x = 2x(2x + 3)$</td></tr>
      <tr><td>Dos cuadrados con un menos</td><td>Diferencia de cuadrados</td><td>$x^2 - 36 = (x + 6)(x - 6)$</td></tr>
      <tr><td>Tres términos, extremos cuadrados y medio $= 2ab$</td><td>Trinomio cuadrado perfecto</td><td>$x^2 - 8x + 16 = (x - 4)^2$</td></tr>
      <tr><td>Tres términos $x^2 + bx + c$</td><td>Dos números: producto $c$, suma $b$</td><td>$x^2 + x - 12 = (x + 4)(x - 3)$</td></tr></tbody></table>
      <div class="box alert" style="margin-top:14px"><b>Errores típicos</b> Sacar un factor común que no es el mayor. Escribir $a^2 - b^2 = (a - b)^2$. Elegir dos números que multiplican bien pero suman mal. Tachar sumandos en una fracción.</div>
      <div class="box"><b>Método PAES</b> 1. Factor común. 2. Cuenta los términos y elige el caso. 3. Revisa si algún paréntesis se puede factorizar de nuevo. 4. Comprueba multiplicando o con $x = 1$.</div>` }
  ],
  example: {
    src: 'PAES Regular 2026, adaptada',
    enun: r`<p>Una persona realiza el siguiente procedimiento para factorizar $12x^2 + 20x$, cometiendo un error.</p><p>Paso 1: escribe cada término como un producto, obteniendo $4\cdot 3\cdot x\cdot x + 4\cdot 5\cdot x$.<br>Paso 2: descompone cada número en factores primos, obteniendo $2\cdot 2\cdot 3\cdot x\cdot x + 2\cdot 2\cdot 5\cdot x$.<br>Paso 3: escribe las potencias correspondientes, obteniendo $2^2\cdot 3\cdot x^2 + 2^2\cdot 5\cdot x$.<br>Paso 4: factoriza la suma, obteniendo $2^4x(3x + 5)$.</p><p>¿En cuál de los pasos la persona cometió el error?</p>`,
    alts: ['En el Paso 1', 'En el Paso 2', 'En el Paso 3', 'En el Paso 4'], ok: 3,
    sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El paso con el error. Revisamos cada paso: ¿lo escrito es igual a lo anterior?</p><p><b>Paso 2. Revisa el Paso 1.</b> $4\cdot 3\cdot x\cdot x = 12x^2$ y $4\cdot 5\cdot x = 20x$. <b>Correcto.</b></p><p><b>Paso 3. Revisa el Paso 2.</b> $4 = 2\cdot 2$. <b>Correcto.</b></p><p><b>Paso 4. Revisa el Paso 3.</b> $2\cdot 2 = 2^2$ y $x\cdot x = x^2$. <b>Correcto.</b></p><p><b>Paso 5. Revisa el Paso 4.</b> El factor común es lo que se repite en los dos términos: $2^2$ y $x$, o sea $4x$. La persona sumó los exponentes de los dos $2^2$ y escribió $2^4 = 16$. Se saca <b>una vez</b> lo que se repite, no se multiplica. <b>Aquí está el error.</b></p><p><b>Lo correcto:</b> $12x^2 + 20x = 4x(3x + 5)$.</p><p><b>Respuesta:</b> en el Paso 4.</p><p><b>Comprobación:</b> $4x\cdot 3x + 4x\cdot 5 = 12x^2 + 20x$ ✔. En cambio, $2^4x(3x + 5) = 48x^2 + 80x$, el cuádruple de lo pedido.</p><p><b>¿Por qué no las otras?</b> En los Pasos 1, 2 y 3 cada expresión es igual a $12x^2 + 20x$: solo se reescriben los números.</p>`,
    conc: 'El factor común se saca una sola vez: lo que se repite en todos los términos, con el menor exponente.'
  },
  bank: [
    { enun: r`<p>¿Cuál de las siguientes expresiones es una factorización de $15a^2b - 10ab^2$?</p>`,
      alts: ['$5ab(3a + 2b)$', '$5ab(3a - 2b)$', '$5ab(3a - 2b^2)$', '$15ab(a - b)$'], ok: 1,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Sacar el factor común.</p><p><b>Paso 2. Números.</b> El MCD de 15 y 10 es 5.</p><p><b>Paso 3. Letras.</b> La $a$ está en los dos términos, con menor exponente 1; la $b$ también. Factor común: $5ab$.</p><p><b>Paso 4. Divide.</b> $\dfrac{15a^2b}{5ab} = 3a$ y $\dfrac{-10ab^2}{5ab} = -2b$.</p><p><b>Respuesta:</b> $5ab(3a - 2b)$.</p><p><b>Comprobación:</b> $5ab\cdot 3a - 5ab\cdot 2b = 15a^2b - 10ab^2$. ✔</p><p><b>¿Por qué no las otras?</b> $5ab(3a + 2b)$ pierde el signo menos. $5ab(3a - 2b^2)$ no divide la $b$ del segundo término. $15ab(a - b)$ usa 15 como factor común, pero 15 no divide a 10.</p>`, conc: 'Factor común: MCD de los números y cada letra repetida con su menor exponente.' },
    { enun: r`<p>¿Cuál de las siguientes expresiones es igual a $x^2 - 64$?</p>`,
      alts: ['$(x + 8)^2$', '$(x - 8)^2$', '$(x + 32)(x - 32)$', '$(x + 8)(x - 8)$'], ok: 3,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Factorizar. Son dos cuadrados con un menos: diferencia de cuadrados.</p><p><b>Paso 2. Raíces.</b> $\sqrt{x^2} = x$ y $\sqrt{64} = 8$.</p><p><b>Paso 3. Aplica.</b> $(x + 8)(x - 8)$.</p><p><b>Respuesta:</b> $(x + 8)(x - 8)$.</p><p><b>Comprobación:</b> $x^2 - 8x + 8x - 64 = x^2 - 64$. ✔</p><p><b>¿Por qué no las otras?</b> $(x + 8)^2$ y $(x - 8)^2$ tienen término del medio ($\pm 16x$) y el 64 positivo. $(x + 32)(x - 32)$ divide 64 por 2 en vez de sacar la raíz: da $x^2 - 1024$.</p>`, conc: 'a² − b² = (a + b)(a − b): usa las raíces, no las mitades.' },
    { enun: r`<p>¿Cuál de las siguientes expresiones es igual a $4x^2 - 9y^2$?</p>`,
      alts: ['$(2x + 3y)(2x - 3y)$', '$(2x - 3y)^2$', '$(4x + 9y)(4x - 9y)$', '$(2x + 3y)^2$'], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Factorizar una diferencia de cuadrados.</p><p><b>Paso 2. Raíces.</b> $\sqrt{4x^2} = 2x$ y $\sqrt{9y^2} = 3y$.</p><p><b>Paso 3. Aplica.</b> $(2x + 3y)(2x - 3y)$.</p><p><b>Respuesta:</b> $(2x + 3y)(2x - 3y)$.</p><p><b>Comprobación:</b> $(2x)^2 - (3y)^2 = 4x^2 - 9y^2$. ✔</p><p><b>¿Por qué no las otras?</b> $(2x - 3y)^2$ y $(2x + 3y)^2$ tienen término del medio $\mp 12xy$ y el último positivo. $(4x + 9y)(4x - 9y)$ no saca raíz a los coeficientes: da $16x^2 - 81y^2$.</p>`, conc: 'Saca la raíz de cada término completo, coeficiente incluido.' },
    { enun: r`<p>¿Cuál de las siguientes expresiones es igual a $x^2 + 10x + 25$?</p>`,
      alts: ['$(x - 5)^2$', '$(x + 5)(x - 5)$', '$(x + 5)^2$', '$(x + 25)(x + 1)$'], ok: 2,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Factorizar un trinomio. Los extremos $x^2$ y $25$ son cuadrados: puede ser cuadrado perfecto.</p><p><b>Paso 2. Raíces.</b> $x$ y $5$.</p><p><b>Paso 3. Revisa el medio.</b> $2\cdot x\cdot 5 = 10x$ ✔, y es positivo.</p><p><b>Respuesta:</b> $(x + 5)^2$.</p><p><b>Comprobación:</b> con $x = 1$: $36$ y $(1 + 5)^2 = 36$. ✔</p><p><b>¿Por qué no las otras?</b> $(x - 5)^2$ da $-10x$ en el medio. $(x + 5)(x - 5)$ da $x^2 - 25$, sin medio. $(x + 25)(x + 1)$ multiplica 25 pero suma 26: da $x^2 + 26x + 25$.</p>`, conc: 'Trinomio cuadrado perfecto: extremos cuadrados y medio igual al doble producto de las raíces.' },
    { enun: r`<p>¿Cuál de las siguientes expresiones es igual a $x^2 + 2x - 15$?</p>`,
      alts: ['$(x - 5)(x + 3)$', '$(x + 5)(x - 3)$', '$(x + 15)(x - 1)$', '$(x - 5)(x - 3)$'], ok: 1,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Dos números que multiplicados den $-15$ y sumados den $2$.</p><p><b>Paso 2. Signos.</b> El producto es negativo: un número positivo y otro negativo. La suma es positiva: el positivo es el mayor.</p><p><b>Paso 3. Prueba.</b> $5$ y $-3$: $5\cdot(-3) = -15$ ✔ y $5 + (-3) = 2$ ✔.</p><p><b>Respuesta:</b> $(x + 5)(x - 3)$.</p><p><b>Comprobación:</b> con $x = 1$: $1 + 2 - 15 = -12$ y $6\cdot(-2) = -12$. ✔</p><p><b>¿Por qué no las otras?</b> $(x - 5)(x + 3)$ suma $-2$: da $x^2 - 2x - 15$. $(x + 15)(x - 1)$ multiplica bien pero suma 14. $(x - 5)(x - 3)$ multiplica $+15$.</p>`, conc: 'Busca dos números: producto c y suma b, cuidando los signos.' },
    { enun: r`<p>¿Cuál de las siguientes expresiones es igual a $x^2 - 9x + 20$?</p>`,
      alts: ['$(x - 4)(x - 5)$', '$(x + 4)(x + 5)$', '$(x - 2)(x - 10)$', '$(x + 4)(x - 5)$'], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Dos números que multiplicados den $20$ y sumados den $-9$.</p><p><b>Paso 2. Signos.</b> Producto positivo y suma negativa: los dos son negativos.</p><p><b>Paso 3. Prueba parejas.</b> $-2$ y $-10$ suman $-12$. $-4$ y $-5$ suman $-9$ ✔.</p><p><b>Respuesta:</b> $(x - 4)(x - 5)$.</p><p><b>Comprobación:</b> con $x = 1$: $1 - 9 + 20 = 12$ y $(-3)(-4) = 12$. ✔</p><p><b>¿Por qué no las otras?</b> $(x + 4)(x + 5)$ suma $+9$. $(x - 2)(x - 10)$ multiplica 20 pero suma $-12$. $(x + 4)(x - 5)$ multiplica $-20$.</p>`, conc: 'Si c es positivo y b negativo, los dos números son negativos.' },
    { enun: r`<p>¿Cuál es el valor de $51^2 - 49^2$?</p>`,
      alts: ['$4$', '$100$', '$200$', '$10.000$'], ok: 2,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Calcular sin calculadora. Es una diferencia de cuadrados.</p><p><b>Paso 2. Factoriza.</b> $51^2 - 49^2 = (51 + 49)(51 - 49)$.</p><p><b>Paso 3. Calcula.</b> $100\cdot 2 = 200$.</p><p><b>Respuesta:</b> $200$.</p><p><b>Comprobación:</b> $51^2 = 2601$ y $49^2 = 2401$; $2601 - 2401 = 200$. ✔</p><p><b>¿Por qué no las otras?</b> $4$ es $(51 - 49)^2$: confunde $a^2 - b^2$ con $(a - b)^2$. $100$ es solo $51 + 49$: falta multiplicar por la diferencia. $10.000$ es $(51 + 49)^2$.</p>`, conc: 'a² − b² = (a + b)(a − b) convierte cuadrados grandes en una cuenta corta.' },
    { enun: r`<p>¿Cuál es el valor de $47\cdot 23 + 47\cdot 77$?</p>`,
      alts: ['$4700$', '$147$', '$1081$', '$9400$'], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Calcular. El 47 se repite: es factor común.</p><p><b>Paso 2. Factoriza.</b> $47(23 + 77)$.</p><p><b>Paso 3. Calcula.</b> $47\cdot 100 = 4700$.</p><p><b>Respuesta:</b> $4700$.</p><p><b>Comprobación:</b> $47\cdot 23 = 1081$ y $47\cdot 77 = 3619$; $1081 + 3619 = 4700$. ✔</p><p><b>¿Por qué no las otras?</b> $147$ suma 47 y 100 en vez de multiplicarlos. $1081$ es solo el primer producto. $9400$ cuenta el 47 dos veces: $2\cdot 47\cdot 100$.</p>`, conc: 'Un factor que se repite en todos los sumandos sale una sola vez.' },
    { enun: r`<p>Para $x \ne -5$, ¿cuál de las siguientes expresiones es igual a $\dfrac{x^2 - 25}{x + 5}$?</p>`,
      alts: ['$x + 5$', r`$\dfrac{1}{x - 5}$`, '$(x - 5)^2$', '$x - 5$'], ok: 3,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Simplificar. Primero se factoriza; después se tacha el factor repetido.</p><p><b>Paso 2. Factoriza el numerador.</b> $x^2 - 25 = (x + 5)(x - 5)$.</p><p><b>Paso 3. Simplifica.</b> $\dfrac{(x + 5)(x - 5)}{x + 5} = x - 5$.</p><p><b>Respuesta:</b> $x - 5$.</p><p><b>Comprobación:</b> con $x = 3$: $\dfrac{9 - 25}{8} = -2$ y $3 - 5 = -2$. ✔</p><p><b>¿Por qué no las otras?</b> $x + 5$ tacha el factor equivocado. $\dfrac{1}{x - 5}$ deja el factor abajo en vez de arriba. $(x - 5)^2$ factoriza mal el numerador como un cuadrado.</p>`, conc: 'Factoriza y tacha solo factores iguales arriba y abajo.' },
    { enun: r`<p>Para $x \ne 3$ y $x \ne -3$, ¿cuál de las siguientes expresiones es igual a $\dfrac{x^2 + 3x}{x^2 - 9}$?</p>`,
      alts: [r`$\dfrac{x}{x + 3}$`, r`$\dfrac{x}{x - 3}$`, r`$-\dfrac{x}{3}$`, r`$\dfrac{x + 3}{x - 3}$`], ok: 1,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Simplificar: factorizar numerador y denominador.</p><p><b>Paso 2. Numerador.</b> Factor común $x$: $x(x + 3)$.</p><p><b>Paso 3. Denominador.</b> Diferencia de cuadrados: $(x + 3)(x - 3)$.</p><p><b>Paso 4. Simplifica.</b> $\dfrac{x(x + 3)}{(x + 3)(x - 3)} = \dfrac{x}{x - 3}$.</p><p><b>Respuesta:</b> $\dfrac{x}{x - 3}$.</p><p><b>Comprobación:</b> con $x = 1$: $\dfrac{4}{-8} = -\dfrac{1}{2}$ y $\dfrac{1}{-2} = -\dfrac{1}{2}$. ✔</p><p><b>¿Por qué no las otras?</b> $\dfrac{x}{x + 3}$ tacha el $x - 3$ que no está arriba. $-\dfrac{x}{3}$ tacha sumandos: el $x^2$ de arriba con el de abajo. $\dfrac{x + 3}{x - 3}$ tacha la $x$ del numerador en vez del factor $x + 3$.</p>`, conc: 'Factoriza arriba y abajo antes de simplificar; nunca taches sumandos.' },
    { enun: r`<p>Si $(p - 3)^2 - 36 = 0$, ¿cuál de los siguientes valores puede ser un valor de $p$?</p>`, src: 'PAES Invierno 2027',
      alts: ['$-15$', '$-9$', '$9$', '$15$'], ok: 2,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Un valor de $p$ que cumpla la igualdad. El lado izquierdo es una diferencia de cuadrados: $(p - 3)^2 - 6^2$.</p><p><b>Paso 2. Factoriza.</b> $\big((p - 3) + 6\big)\big((p - 3) - 6\big) = (p + 3)(p - 9)$.</p><p><b>Paso 3. Producto igual a cero.</b> Uno de los factores es 0: $p + 3 = 0$, o sea $p = -3$; o $p - 9 = 0$, o sea $p = 9$.</p><p><b>Paso 4.</b> De las alternativas, solo aparece $9$.</p><p><b>Respuesta:</b> $9$.</p><p><b>Comprobación:</b> $(9 - 3)^2 - 36 = 36 - 36 = 0$. ✔</p><p><b>¿Por qué no las otras?</b> $-9$ cambia el signo de la solución: $(-12)^2 - 36 = 108$. $15$ toma $p - 3 = 12$, el doble de 6 en vez de 6: da $12^2 - 36 = 108$. $-15$ da $(-18)^2 - 36 = 288$.</p>`, conc: 'Si una expresión es diferencia de cuadrados igualada a 0, factoriza y anula cada factor.' },
    { enun: r`<p>Un rectángulo tiene área $(x^2 + 7x + 12)$ cm² y uno de sus lados mide $(x + 3)$ cm. ¿Cuánto mide el otro lado?</p>`,
      alts: ['$(x + 4)$ cm', '$(x^2 + 6x + 9)$ cm', '$(x + 9)$ cm', '$(x + 7)$ cm'], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El otro lado. El área es lado por lado: factorizamos el área y vemos qué acompaña a $x + 3$.</p><p><b>Paso 2. Factoriza.</b> Dos números que multiplicados den 12 y sumados den 7: $3$ y $4$. Queda $(x + 3)(x + 4)$.</p><p><b>Paso 3. Lee el otro factor.</b> $x + 4$.</p><p><b>Respuesta:</b> $(x + 4)$ cm.</p><p><b>Comprobación:</b> $(x + 3)(x + 4) = x^2 + 7x + 12$. ✔</p><p><b>¿Por qué no las otras?</b> $(x^2 + 6x + 9)$ resta el lado al área en vez de dividir. $(x + 9)$ resta $12 - 3$. $(x + 7)$ copia el coeficiente del medio.</p>`, conc: 'Si conoces el área y un lado, factoriza el área: el otro factor es el otro lado.' },
    { enun: r`<p>¿Cuál es la factorización completa de $3x^2 - 12$?</p>`,
      alts: ['$3(x^2 - 4)$', '$3(x - 2)^2$', '$3(x + 4)(x - 4)$', '$3(x + 2)(x - 2)$'], ok: 3,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Factorizar hasta que no quede nada por factorizar.</p><p><b>Paso 2. Factor común.</b> $3x^2 - 12 = 3(x^2 - 4)$.</p><p><b>Paso 3. El paréntesis es diferencia de cuadrados.</b> $x^2 - 4 = (x + 2)(x - 2)$.</p><p><b>Respuesta:</b> $3(x + 2)(x - 2)$.</p><p><b>Comprobación:</b> $3(x^2 - 4) = 3x^2 - 12$. ✔</p><p><b>¿Por qué no las otras?</b> $3(x^2 - 4)$ es igual, pero no está completa: el paréntesis aún se factoriza. $3(x - 2)^2$ da $3x^2 - 12x + 12$. $3(x + 4)(x - 4)$ usa 4 en vez de su raíz: da $3x^2 - 48$.</p>`, conc: 'Primero el factor común; después revisa si el paréntesis se puede factorizar.' },
    { enun: r`<p>¿Cuál de las siguientes expresiones es igual a $2x^3 - 8x^2 + 8x$?</p>`,
      alts: ['$2x(x - 2)^2$', '$2x(x + 2)^2$', '$2x(x + 2)(x - 2)$', '$2x(x - 4)^2$'], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Factorizar. Primero el factor común.</p><p><b>Paso 2. Factor común.</b> MCD de 2, 8 y 8 es 2; la $x$ con menor exponente es $x$. Queda $2x(x^2 - 4x + 4)$.</p><p><b>Paso 3. El paréntesis.</b> Extremos $x^2$ y $4$, raíces $x$ y $2$; doble producto $4x$ con menos ✔. Es $(x - 2)^2$.</p><p><b>Respuesta:</b> $2x(x - 2)^2$.</p><p><b>Comprobación:</b> con $x = 1$: $2 - 8 + 8 = 2$ y $2\cdot 1\cdot 1 = 2$. ✔</p><p><b>¿Por qué no las otras?</b> $2x(x + 2)^2$ se equivoca en el signo del medio. $2x(x + 2)(x - 2)$ da $2x^3 - 8x$: sin el término $x^2$. $2x(x - 4)^2$ toma el 4 del medio como raíz.</p>`, conc: 'Saca el factor común y reconoce el trinomio que queda.' },
    { enun: r`<p>¿Cuál(es) de las siguientes igualdades es (son) verdadera(s) para todo valor de las variables?</p><p>I) $a^2 - b^2 = (a - b)^2$<br>II) $6x + 9 = 3(2x + 3)$<br>III) $x^2 - x - 6 = (x + 3)(x - 2)$</p>`,
      alts: ['Solo I', 'Solo II', 'Solo I y II', 'Solo II y III'], ok: 1,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Revisar cada igualdad.</p><p><b>Paso 2. I.</b> $(a - b)^2 = a^2 - 2ab + b^2$, no $a^2 - b^2$. Con $a = 2$ y $b = 1$: $3$ contra $1$. <b>Falsa.</b></p><p><b>Paso 3. II.</b> $3\cdot 2x + 3\cdot 3 = 6x + 9$. <b>Verdadera.</b></p><p><b>Paso 4. III.</b> $(x + 3)(x - 2) = x^2 + x - 6$: el medio es $+x$, no $-x$. Lo correcto es $(x - 3)(x + 2)$. <b>Falsa.</b></p><p><b>Respuesta:</b> Solo II.</p><p><b>¿Por qué no las otras?</b> Las demás incluyen I o III, que son falsas.</p>`, conc: 'Comprueba cada factorización multiplicando: debe volver a la expresión original.' },
    { enun: r`<p>Un terreno cuadrado tiene un área de $(x^2 + 12x + 36)$ m². ¿Cuál es su perímetro?</p>`,
      alts: ['$(x + 6)$ m', '$(2x + 12)$ m', '$(4x + 6)$ m', '$(4x + 24)$ m'], ok: 3,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El perímetro. Primero hay que encontrar el lado, factorizando el área.</p><p><b>Paso 2. Factoriza.</b> Raíces $x$ y $6$; doble producto $12x$ ✔. Área $= (x + 6)^2$: el lado mide $x + 6$.</p><p><b>Paso 3. Perímetro.</b> Cuatro lados: $4(x + 6) = 4x + 24$.</p><p><b>Respuesta:</b> $(4x + 24)$ m.</p><p><b>Comprobación:</b> con $x = 4$: área $16 + 48 + 36 = 100$, lado 10, perímetro 40. Y $4\cdot 4 + 24 = 40$. ✔</p><p><b>¿Por qué no las otras?</b> $(x + 6)$ es el lado, no el perímetro. $(2x + 12)$ suma solo dos lados. $(4x + 6)$ multiplica el 4 solo por la $x$.</p>`, conc: 'Del área de un cuadrado se obtiene el lado factorizando como cuadrado perfecto.' },
    { enun: r`<p>Una empresa construye casas en terrenos rectangulares de distintas áreas, cumpliéndose siempre que el largo de cada terreno mide 5 m más que su ancho.</p><p>Si el área de uno de los terrenos es 104 m², ¿cuál es el perímetro del terreno?</p>`, src: 'PAES Invierno 2026, adaptada',
      alts: ['21 m', '26 m', '42 m', '52 m'], ok: 2,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El perímetro. Necesitamos el ancho y el largo.</p><p><b>Paso 2. Plantea.</b> Ancho $x$, largo $x + 5$. Área: $x(x + 5) = 104$, o sea $x^2 + 5x - 104 = 0$.</p><p><b>Paso 3. Factoriza.</b> Dos números que multiplicados den $-104$ y sumados den $5$: $13$ y $-8$. Queda $(x + 13)(x - 8) = 0$.</p><p><b>Paso 4. Elige.</b> $x = -13$ o $x = 8$. Un ancho no puede ser negativo: $x = 8$. El largo es $13$.</p><p><b>Paso 5. Perímetro.</b> $2\cdot 8 + 2\cdot 13 = 16 + 26 = 42$.</p><p><b>Respuesta:</b> 42 m.</p><p><b>Comprobación:</b> $8\cdot 13 = 104$ ✔ y $13 - 8 = 5$ ✔.</p><p><b>¿Por qué no las otras?</b> 21 m es medio perímetro: un largo más un ancho. 26 m suma solo los dos largos. 52 m toma el terreno como un cuadrado de lado 13.</p>`, conc: 'Plantea el área con una incógnita, factoriza y descarta la medida negativa.' },
    { enun: r`<p>Para simplificar $\dfrac{x^2 - 4}{x^2 - 4x + 4}$, una persona realizó el siguiente procedimiento, cometiendo un error.</p><p>Paso 1: factoriza el numerador, obteniendo $(x + 2)(x - 2)$.<br>Paso 2: factoriza el denominador, obteniendo $(x + 2)(x - 2)$.<br>Paso 3: simplifica los factores iguales del numerador y del denominador.<br>Paso 4: concluye que la fracción es igual a 1.</p><p>¿En cuál de los pasos se cometió el error?</p>`,
      alts: ['En el Paso 1', 'En el Paso 2', 'En el Paso 3', 'En el Paso 4'], ok: 1,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El paso con el error. Revisamos cada factorización multiplicando.</p><p><b>Paso 2. Revisa el Paso 1.</b> $(x + 2)(x - 2) = x^2 - 4$. <b>Correcto.</b></p><p><b>Paso 3. Revisa el Paso 2.</b> $(x + 2)(x - 2) = x^2 - 4$, pero el denominador es $x^2 - 4x + 4$. Es un trinomio cuadrado perfecto: $(x - 2)^2$. <b>Aquí está el error.</b></p><p><b>Paso 4. Revisa los Pasos 3 y 4.</b> Con lo que recibieron, simplificar y concluir 1 está bien hecho.</p><p><b>Lo correcto:</b> $\dfrac{(x + 2)(x - 2)}{(x - 2)^2} = \dfrac{x + 2}{x - 2}$.</p><p><b>Respuesta:</b> en el Paso 2.</p><p><b>Comprobación:</b> con $x = 3$: $\dfrac{9 - 4}{9 - 12 + 4} = \dfrac{5}{1} = 5$ y $\dfrac{3 + 2}{3 - 2} = 5$. ✔ La fracción no vale 1.</p><p><b>¿Por qué no las otras?</b> Los Pasos 1, 3 y 4 están bien hechos con lo que recibieron.</p>`, conc: 'Comprueba cada factorización multiplicando antes de simplificar.' }
  ]
}
];
