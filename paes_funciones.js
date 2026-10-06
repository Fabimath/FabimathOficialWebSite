/* Contenido de "PAES Funciones" (Fabimath).
   Temario oficial PAES M1 Admisión 2027, eje Álgebra y funciones (parte de funciones):
     1. Función lineal y afín (concepto, tablas y gráficos, problemas en diversos contextos).
     2. Función cuadrática (ecuaciones de segundo grado, tablas y gráficos con variación de
        parámetros, vértice, ceros e intersección con los ejes, problemas en diversos contextos).
   Estilo de preguntas tomado de las tres últimas pruebas publicadas por el DEMRE
   (PAES Invierno 2026, PAES Regular 2026 y PAES Invierno 2027), en paes/fuentes/.
   Notación chilena: coma decimal, punto de miles; montos en pesos dentro de <span class="peso">.
   Se carga después de paes_data.js: reutiliza r (String.raw) y SLIDE_FIGS.
   Figuras de funciones: { type: 'plot', x: [min, max, paso], y: [min, max, paso], fns, marks, vline } (fig() en paes.html).
   Cada pregunta: enun (HTML + $latex$), fig opcional, alts (4), ok (índice correcto), sol, conc. */

const TOPICS_FUN = [

/* =====================================================================
   UNIDAD 1 · FUNCIÓN LINEAL Y AFÍN
   ===================================================================== */
{
  id: 'funcion_concepto', unit: 'Unidad 1 · Función lineal y afín', icon: '🔣',
  title: 'Concepto de función',
  desc: 'Qué es una función, cómo se evalúa (también con negativos), imagen y preimagen, y cómo leerla en una tabla o en un gráfico.',
  slides: [
    { t: '¿Qué es una función?', b: r`
      <div class="cols"><div>
      <p>Piensa en una máquina: tú le das un número, la máquina hace siempre lo mismo con él y te devuelve otro número.</p>
      <p>Eso es una <b>función</b>: una regla que a cada número que entra le da <b>un solo</b> número que sale.</p>
      <p>Al número que entra lo llamamos $x$. Al que sale lo llamamos $f(x)$, que se lee «f de x».</p>
      <p><b>Ejemplo.</b> El kilo de pan cuesta <span class="peso">$2.000</span>. Si compro $x$ kilos, pago $f(x) = 2.000\cdot x$.</p>
      <p>Si compro 2 kilos, entra el 2 y sale $f(2) = 2.000\cdot 2 = 4.000$ pesos.</p>
      </div><div>
      <div class="qfig"><svg class="dibujo" viewBox="0 0 360 150" width="360" role="img" aria-label="Máquina de la función: entra x = 2 y sale f(2) = 4000">
        <line x1="20" y1="70" x2="120" y2="70" stroke="#c7c7cc" stroke-width="3" stroke-dasharray="6 5"/><line x1="240" y1="70" x2="345" y2="70" stroke="#c7c7cc" stroke-width="3" stroke-dasharray="6 5"/>
        <rect x="120" y="28" width="120" height="84" rx="16" fill="#e8680c"/><circle cx="150" cy="44" r="4" fill="#ffd166"><animate attributeName="opacity" values="1;.2;1" dur="1s" repeatCount="indefinite"/></circle>
        <text x="180" y="76" font-size="26" font-weight="800" font-style="italic" text-anchor="middle" fill="#fff">f</text><text x="180" y="98" font-size="12" text-anchor="middle" fill="#fff">× 2000</text>
        <text x="60" y="130" font-size="12" text-anchor="middle" fill="#6e6e73">entra x</text><text x="300" y="130" font-size="12" text-anchor="middle" fill="#6e6e73">sale f(x), en pesos</text>
        <g><circle r="17" fill="#ffd166" stroke="#c98a00" stroke-width="2"/><text y="6" font-size="17" font-weight="800" text-anchor="middle" fill="#1d1d1f">2</text>
          <animateTransform attributeName="transform" type="translate" values="35 70;112 70;112 70" keyTimes="0;.42;1" dur="4s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="1;1;0;0" keyTimes="0;.42;.47;1" dur="4s" repeatCount="indefinite"/></g>
        <g><rect x="-32" y="-15" width="64" height="30" rx="15" fill="#fff" stroke="#e8680c" stroke-width="2"/><text y="5" font-size="15" font-weight="800" text-anchor="middle" fill="#1d1d1f">4000</text>
          <animateTransform attributeName="transform" type="translate" values="248 70;248 70;305 70;305 70" keyTimes="0;.52;.85;1" dur="4s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="0;0;1;1;0" keyTimes="0;.52;.57;.93;1" dur="4s" repeatCount="indefinite"/></g>
      </svg></div>
      <div class="box"><b>Ojo con la escritura</b> $f(2)$ no es «f por 2». Significa «lo que sale cuando entra el 2».</div>
      </div></div>` },
    { t: 'Los nombres de las partes', b: r`
      <div class="cols"><div>
      <p>En la PAES aparecen tres palabras. Sigamos con el pan para entenderlas.</p>
      <p><b>Variable independiente</b>: es la $x$, el número que entra. La eliges tú: cuántos kilos compras.</p>
      <p><b>Variable dependiente</b>: es $y = f(x)$, el número que sale. Depende de la $x$: el precio cambia según los kilos.</p>
      <p><b>Dominio</b>: todos los números que se permite meter en la $x$.</p>
      </div><div>
      <div class="box"><b>Truco para recordar</b> La dependiente «depende» de la otra. El precio depende de los kilos, no al revés.</div>
      <div class="box alert"><b>En la PAES</b> Si no te dicen nada, la $x$ puede ser cualquier número real: el dominio son todos los números reales.</div>
      </div></div>` },
    { t: 'Una sola salida para cada entrada', b: r`
      <div class="cols"><div>
      <p>La regla de oro: a cada $x$ le corresponde <b>un solo</b> resultado. Un par $(x, y)$ dice «entra $x$, sale $y$».</p>
      <p><b>Ejemplo.</b> ¿Es función el conjunto $\{(2, 3),\ (5, 3),\ (2, 8)\}$?</p>
      <p><b>Paso 1.</b> Miro solo los primeros números de cada par, que son las entradas: $2$, $5$ y $2$.</p>
      <p><b>Paso 2.</b> El $2$ aparece dos veces, así que reviso sus salidas: en un par sale $3$ y en el otro sale $8$.</p>
      <p><b>Paso 3.</b> La entrada $2$ tiene dos salidas distintas. Entonces <b>no es función</b>.</p>
      </div><div>
      <div class="box"><b>Sí está permitido</b> Dos entradas con la misma salida: $(1, 5)$ y $(2, 5)$. Es como dos alumnos que sacan la misma nota.</div>
      <div class="box alert"><b>No está permitido</b> Una entrada con dos salidas: $(1, 5)$ y $(1, 7)$. Es como un alumno con dos notas distintas en la misma prueba.</div>
      </div></div>` },
    { t: 'Evaluar: reemplazar la x', b: r`
      <div class="cols"><div>
      <p><b>Evaluar</b> es calcular lo que sale cuando entra un número. Se hace cambiando cada $x$ de la fórmula por ese número.</p>
      <p><b>Ejemplo.</b> Si $f(x) = 3x + 2$, calcula $f(4)$.</p>
      <p><b>Paso 1.</b> Copio la fórmula y donde dice $x$ escribo $(4)$, entre paréntesis: $f(4) = 3\cdot(4) + 2$.</p>
      <p><b>Paso 2.</b> Primero multiplico, porque la multiplicación va antes que la suma: $3\cdot 4 = 12$. Queda $12 + 2$.</p>
      <p><b>Paso 3.</b> Sumo: $12 + 2 = 14$.</p>
      <p>Entonces $f(4) = 14$: cuando entra el 4, sale el 14.</p>
      </div><div>
      <div class="box"><b>Si la x aparece varias veces</b> Se reemplaza en todas. Con $f(x) = x^2 + x$: $f(4) = (4)^2 + (4) = 16 + 4 = 20$.</div>
      <div class="box alert"><b>Siempre con paréntesis</b> Parece un detalle, pero con números negativos es lo que evita casi todos los errores. Lo vemos en la próxima lámina.</div>
      </div></div>` },
    { t: 'Evaluar con números negativos', b: r`
      <div class="cols"><div>
      <p><b>Ejemplo.</b> Si $f(x) = 2x^2 - 7x + 1$, calcula $f(-3)$.</p>
      <p><b>Paso 1.</b> Cambio cada $x$ por $(-3)$, con paréntesis: $f(-3) = 2(-3)^2 - 7(-3) + 1$.</p>
      <p><b>Paso 2.</b> Primero la potencia: $(-3)^2 = (-3)\cdot(-3) = 9$. Queda $2\cdot 9 - 7(-3) + 1$.</p>
      <p><b>Paso 3.</b> Ahora las multiplicaciones: $2\cdot 9 = 18$ y $-7\cdot(-3) = +21$, porque menos por menos da más. Queda $18 + 21 + 1$.</p>
      <p><b>Paso 4.</b> Sumo de izquierda a derecha: $18 + 21 = 39$ y $39 + 1 = 40$.</p>
      <p>Entonces $f(-3) = 40$.</p>
      </div><div>
      <div class="box alert"><b>Trampa 1: el paréntesis</b> $(-3)^2 = (-3)\cdot(-3) = 9$. Pero $-3^2$, sin paréntesis, es $-(3\cdot 3) = -9$: el signo queda fuera de la potencia.</div>
      <div class="box alert"><b>Trampa 2: los signos</b> $-7\cdot(-3) = +21$. Menos por menos da más.</div>
      </div></div>` },
    { t: 'Cuidado con el menos de adelante', b: r`
      <div class="cols"><div>
      <p>Cuando la fórmula dice $-x^2$, se lee «menos (x al cuadrado)»: primero se eleva al cuadrado y después se pone el signo.</p>
      <p><b>Ejemplo.</b> Si $g(x) = -x^2 + 10$, calcula $g(-3)$.</p>
      <p><b>Paso 1.</b> Cambio la $x$ por $(-3)$. El menos de adelante se queda afuera: $g(-3) = -(-3)^2 + 10$.</p>
      <p><b>Paso 2.</b> Primero el cuadrado: $(-3)^2 = 9$.</p>
      <p><b>Paso 3.</b> Después el menos de adelante: $-(9) = -9$. Queda $-9 + 10$.</p>
      <p><b>Paso 4.</b> Sumo: $-9 + 10 = 1$. Entonces $g(-3) = 1$.</p>
      </div><div>
      <div class="box alert"><b>Error típico</b> Meter el menos dentro del cuadrado: $(+3)^2 = 9$ y luego $9 + 10 = 19$. Eso está mal: el cuadrado solo afecta a la $x$.</div>
      </div></div>` },
    { t: 'Evaluar dos veces y sumar', b: r`
      <div class="cols"><div>
      <p>A veces piden algo como $f(2) + f(3)$. Se evalúa cada uno por separado y al final se suma.</p>
      <p><b>Ejemplo.</b> Si $f(x) = 4x - 1$, calcula $f(2) + f(3)$.</p>
      <p><b>Paso 1.</b> Calculo $f(2)$: $4\cdot 2 - 1 = 8 - 1 = 7$.</p>
      <p><b>Paso 2.</b> Calculo $f(3)$: $4\cdot 3 - 1 = 12 - 1 = 11$.</p>
      <p><b>Paso 3.</b> Sumo los dos resultados: $7 + 11 = 18$.</p>
      </div><div>
      <div class="box alert"><b>No es lo mismo que f(5)</b> Si sumas primero las entradas, $2 + 3 = 5$, y evalúas: $f(5) = 4\cdot 5 - 1 = 20 - 1 = 19$. Da 19, no 18. Por eso no se pueden juntar.</div>
      </div></div>` },
    { t: 'Imagen: me dan la x', b: r`
      <div class="cols"><div>
      <p>La <b>imagen</b> de un número es lo que sale cuando ese número entra a la función.</p>
      <p>Si $f(a) = b$, decimos que $b$ es la imagen de $a$.</p>
      <p><b>Ejemplo.</b> Si $f(x) = 5x - 2$, ¿cuál es la imagen de $3$?</p>
      <p><b>Paso 1.</b> Me dan la entrada, el 3. Así que evalúo: $f(3) = 5\cdot 3 - 2$.</p>
      <p><b>Paso 2.</b> Multiplico: $5\cdot 3 = 15$. Queda $15 - 2$.</p>
      <p><b>Paso 3.</b> Resto: $15 - 2 = 13$. La imagen de 3 es 13.</p>
      </div><div>
      <div class="box"><b>En corto</b> Imagen = lo que sale. Si te piden la imagen, ya conoces la $x$: solo reemplaza.</div>
      </div></div>` },
    { t: 'Preimagen: me dan el resultado', b: r`
      <div class="cols"><div>
      <p>La <b>preimagen</b> de un número es lo que hay que meter a la función para que salga ese número. Si $f(a) = b$, entonces $a$ es una preimagen de $b$.</p>
      <p><b>Ejemplo.</b> Si $g(x) = 4x + 6$, ¿cuál es la preimagen de $26$?</p>
      <p><b>Paso 1.</b> Me dan lo que sale, el 26, y busco lo que entra. Así que igualo la fórmula a 26: $4x + 6 = 26$.</p>
      <p><b>Paso 2.</b> Resto 6 a los dos lados para dejar sola la parte con $x$: $4x = 26 - 6 = 20$.</p>
      <p><b>Paso 3.</b> La $x$ está multiplicada por 4, así que divido por 4: $x = \dfrac{20}{4} = 5$.</p>
      <p><b>Paso 4.</b> Compruebo: $g(5) = 4\cdot 5 + 6 = 20 + 6 = 26$. ✔</p>
      </div><div>
      <div class="box alert"><b>¿Evaluar o despejar?</b> Si te dan la $x$, evalúa. Si te dan el resultado, iguala y despeja.</div>
      </div></div>` },
    { t: 'Puede haber más de una preimagen', b: r`
      <div class="cols"><div>
      <p><b>Ejemplo.</b> Si $h(x) = x^2$, ¿cuáles son las preimágenes de $9$?</p>
      <p><b>Paso 1.</b> Me dan el resultado, así que igualo: $x^2 = 9$.</p>
      <p><b>Paso 2.</b> Me pregunto qué números multiplicados por sí mismos dan 9: $3\cdot 3 = 9$ y también $(-3)\cdot(-3) = 9$.</p>
      <p><b>Paso 3.</b> Entonces $x = 3$ o $x = -3$. El 9 tiene dos preimágenes.</p>
      </div><div>
      <div class="box"><b>¿Rompe la regla de oro?</b> No. Aquí son dos entradas con la misma salida, y eso está permitido. Lo prohibido es una entrada con dos salidas.</div>
      <div class="box alert"><b>Y puede no haber ninguna</b> $x^2 = -4$ no tiene solución, porque un número al cuadrado nunca da negativo. El $-4$ no tiene preimagen.</div>
      </div></div>` },
    { t: 'Funciones en una tabla', b: r`
      <div class="cols"><div>
      <p>En una tabla, cada fila dice «entra $x$, sale $f(x)$». Para saber si una fórmula corresponde a la tabla, se prueba fila por fila.</p>
      <p><b>Ejemplo.</b> ¿La fórmula $f(x) = 2x + 1$ corresponde a esta tabla?</p>
      <p><b>Paso 1.</b> Fila $x = 0$: $2\cdot 0 + 1 = 0 + 1 = 1$. ✔</p>
      <p><b>Paso 2.</b> Fila $x = 1$: $2\cdot 1 + 1 = 2 + 1 = 3$. ✔</p>
      <p><b>Paso 3.</b> Fila $x = 2$: $2\cdot 2 + 1 = 4 + 1 = 5$. ✔</p>
      <p><b>Paso 4.</b> Fila $x = 3$: $2\cdot 3 + 1 = 6 + 1 = 7$. ✔ Calzan todas, así que sí corresponde.</p>
      </div><div>
      <table><thead><tr><th>$x$</th><th>$f(x)$</th></tr></thead><tbody>
      <tr><td>0</td><td>1</td></tr><tr><td>1</td><td>3</td></tr><tr><td>2</td><td>5</td></tr><tr><td>3</td><td>7</td></tr></tbody></table>
      <div class="box alert"><b>¿Por qué todas las filas?</b> $f(x) = x + 1$ calza en la primera ($0 + 1 = 1$), pero falla en la segunda: $1 + 1 = 2$, no 3.</div>
      <div class="box"><b>Pista</b> Si la $x$ sube de 1 en 1 y $f(x)$ sube siempre lo mismo (aquí, de 2 en 2), prueba la fórmula «salto por $x$ más el valor en $x = 0$»: $2x + 1$.</div>
      </div></div>` },
    { t: 'Leer f(a) en un gráfico', b: r`
      <div class="cols"><div>
      <p>Cada punto del gráfico es un par (entrada, salida). La entrada se lee en el eje $X$ (horizontal) y la salida es la <b>altura</b>, que se lee en el eje $Y$ (vertical).</p>
      <p><b>Ejemplo.</b> Con el gráfico de la derecha, calcula $f(2)$.</p>
      <p><b>Paso 1.</b> Busco el 2 en el eje $X$.</p>
      <p><b>Paso 2.</b> Desde ahí subo en línea recta hasta tocar la curva (la línea punteada).</p>
      <p><b>Paso 3.</b> Desde ese punto voy en horizontal hasta el eje $Y$ y leo la altura: 4.</p>
      <p>Entonces $f(2) = 4$.</p>
      </div><div>
      <div class="qfig">${''}</div>
      <div class="box"><b>Subir o bajar</b> Si la curva está bajo el eje $X$, en vez de subir se baja, y la altura sale negativa.</div>
      </div></div>` },
    { t: 'Resolver f(x) = b en un gráfico', b: r`
      <div class="cols"><div>
      <p>Ahora es al revés: me dan la altura y busco las $x$.</p>
      <p><b>Ejemplo.</b> Con el gráfico, ¿para qué $x$ se cumple $f(x) = 4$?</p>
      <p><b>Paso 1.</b> Busco el 4 en el eje $Y$.</p>
      <p><b>Paso 2.</b> Trazo una línea horizontal a esa altura.</p>
      <p><b>Paso 3.</b> Marco dónde esa línea corta la curva: en dos puntos.</p>
      <p><b>Paso 4.</b> Desde cada punto bajo hasta el eje $X$ y leo: $x = -2$ y $x = 2$.</p>
      </div><div>
      <div class="qfig">${''}</div>
      <div class="box alert"><b>No los confundas</b> $f(2)$ te pide una altura. $f(x) = 4$ te pide las $x$ que tienen esa altura.</div>
      </div></div>` },
    { t: '¿Es función? Mirando el gráfico', b: r`
      <div class="cols"><div>
      <p>En un gráfico, la regla de oro se revisa con una <b>recta vertical</b>.</p>
      <p><b>Paso 1.</b> Imagina una regla parada (vertical) y muévela de izquierda a derecha por el gráfico.</p>
      <p><b>Paso 2.</b> Fíjate si en algún lugar la regla toca la curva en dos puntos o más.</p>
      <p><b>Paso 3.</b> Si pasa, esa $x$ tiene dos salidas, así que <b>no es función</b>. Si siempre toca un solo punto, sí es función.</p>
      <p>En el dibujo, la recta $x = 1$ toca la curva en $(1, 1)$ y en $(1, -1)$: no es función.</p>
      </div><div>
      <div class="qfig">${''}</div>
      <div class="box"><b>Una recta horizontal sí puede cortar varias veces</b> Eso son varias entradas con la misma salida, y está permitido (como en $f(x) = x^2$).</div>
      </div></div>` },
    { t: 'Gráficos en contexto', b: r`
      <div class="cols"><div>
      <p>El gráfico muestra la distancia, en km, que lleva recorrida un bus a medida que pasan las horas.</p>
      <p><b>Ejemplo.</b> ¿Cuánto tiempo estuvo detenido?</p>
      <p><b>Paso 1.</b> Leo los ejes: el horizontal es el tiempo, en horas; el vertical es la distancia, en km.</p>
      <p><b>Paso 2.</b> Detenido quiere decir que pasa el tiempo y la distancia no cambia. En el gráfico eso se ve como un tramo <b>plano</b>.</p>
      <p><b>Paso 3.</b> El tramo plano empieza en $t = 1$ y termina en $t = 3$.</p>
      <p><b>Paso 4.</b> Resto: $3 - 1 = 2$. Estuvo detenido 2 horas.</p>
      </div><div>
      <div class="qfig">${''}</div>
      <div class="box"><b>Cómo leer la forma</b> Tramo que sube: avanza. Tramo plano: quieto. Tramo que baja: vuelve hacia el inicio.</div>
      </div></div>` },
    { t: 'Resumen', b: r`
      <table><thead><tr><th>Me piden</th><th>Hago</th></tr></thead><tbody>
      <tr><td>$f(a)$, la imagen de $a$</td><td>cambio cada $x$ por $(a)$, con paréntesis, y calculo</td></tr>
      <tr><td>$x$ tal que $f(x) = b$ (preimagen de $b$)</td><td>igualo la fórmula a $b$ y despejo la $x$</td></tr>
      <tr><td>$f(a)$ en un gráfico</td><td>subo o bajo desde $x = a$ hasta la curva y leo la altura</td></tr>
      <tr><td>$f(x) = b$ en un gráfico</td><td>trazo una horizontal a la altura $b$ y bajo desde cada corte al eje $X$</td></tr>
      <tr><td>Fórmula a partir de una tabla</td><td>pruebo la fórmula con <b>todas</b> las filas, no solo con una</td></tr>
      <tr><td>¿Es función?</td><td>reviso que ninguna $x$ tenga dos salidas (en un gráfico, con una recta vertical)</td></tr></tbody></table>
      <div class="box" style="margin-top:14px"><b>Método PAES</b> Primero mira qué te dan. Si te dan la $x$, evalúa. Si te dan el resultado, iguala y despeja. Al final, reemplaza tu respuesta para comprobar.</div>` }
  ],
  example: {
    src: 'PAES Invierno 2026',
    enun: r`<p>Considera la función $g$ definida por $g(x) = 8x - 5$, con dominio el conjunto de los números reales.</p><p>Si $g(x) = 35$, ¿cuál es el valor de $x$?</p>`,
    alts: [r`$\dfrac{15}{4}$`, r`$5$`, r`$240$`, r`$275$`], ok: 1,
    sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Nos dan el resultado de la función, 35, y buscamos la $x$ que lo produce. Como conocemos lo que sale y no lo que entra, igualamos la fórmula a 35 y despejamos la $x$.</p>
      <p><b>Paso 2.</b> Escribimos la ecuación: $8x - 5 = 35$.</p>
      <p><b>Paso 3.</b> Sumamos 5 a los dos lados, para dejar sola la parte con $x$: $8x = 35 + 5 = 40$.</p>
      <p><b>Paso 4.</b> La $x$ está multiplicada por 8, así que dividimos por 8 los dos lados: $x = \dfrac{40}{8} = 5$.</p>
      <p><b>Respuesta:</b> $x = 5$, la segunda alternativa.</p>
      <p><b>Comprobación:</b> $g(5) = 8\cdot 5 - 5 = 40 - 5 = 35$. ✔</p>
      <p><b>¿Por qué no las otras?</b> $\dfrac{15}{4}$ sale de restar 5 en vez de sumarlo: $8x = 35 - 5 = 30$ y $x = \dfrac{30}{8} = \dfrac{15}{4}$. $275$ sale de evaluar en vez de despejar: $g(35) = 8\cdot 35 - 5 = 280 - 5 = 275$. $240$ sale de restar 5 y además multiplicar por 8 en vez de dividir: $8\cdot 30 = 240$.</p>`,
    conc: 'Si te dan el resultado, iguala y despeja la x; si te dan la x, evalúa.'
  },
  bank: [
    { enun: r`<p>Considera la función $f$ definida por $f(x) = 2x^2 - 7x + 1$.</p><p>¿Cuál es el valor de $f(-3)$?</p>`, src: 'PAES Invierno 2027, adaptada',
      alts: [r`$40$`, r`$4$`, r`$-2$`, r`$58$`], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Nos dan la entrada, $x = -3$, y buscamos lo que sale. Eso es evaluar: cambiar cada $x$ por $(-3)$, con paréntesis.</p>
      <p><b>Paso 2.</b> Reemplazamos: $f(-3) = 2(-3)^2 - 7(-3) + 1$.</p>
      <p><b>Paso 3.</b> Primero la potencia: $(-3)^2 = (-3)\cdot(-3) = 9$. Queda $2\cdot 9 - 7(-3) + 1$.</p>
      <p><b>Paso 4.</b> Ahora las multiplicaciones: $2\cdot 9 = 18$ y $-7\cdot(-3) = +21$, porque menos por menos da más. Queda $18 + 21 + 1$.</p>
      <p><b>Paso 5.</b> Sumamos: $18 + 21 = 39$ y $39 + 1 = 40$.</p>
      <p><b>Respuesta:</b> $f(-3) = 40$.</p>
      <p><b>¿Por qué no las otras?</b> $4$ sale de escribir $-3^2$ sin paréntesis, que da $-9$: $2\cdot(-9) + 21 + 1 = -18 + 22 = 4$. $-2$ sale de calcular $-7\cdot(-3)$ como $-21$: $18 - 21 + 1 = -2$. $58$ sale de meter el 2 dentro del cuadrado: $(2\cdot(-3))^2 = (-6)^2 = 36$ y $36 + 21 + 1 = 58$.</p>`, conc: 'Reemplaza siempre con paréntesis: (−3)² = 9 y menos por menos da más.' },
    { enun: r`<p>Sea $f(x) = 3x - 4$. ¿Cuál es el valor de $f(2) + f(-1)$?</p>`,
      alts: [r`$-5$`, r`$-1$`, r`$9$`, r`$3$`], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Dos evaluaciones, $f(2)$ y $f(-1)$, y después sumarlas. Cada una se calcula por separado.</p>
      <p><b>Paso 2.</b> Calculamos $f(2)$: $3\cdot 2 - 4 = 6 - 4 = 2$.</p>
      <p><b>Paso 3.</b> Calculamos $f(-1)$: $3\cdot(-1) - 4 = -3 - 4 = -7$.</p>
      <p><b>Paso 4.</b> Sumamos los dos resultados: $2 + (-7) = 2 - 7 = -5$.</p>
      <p><b>Respuesta:</b> $-5$.</p>
      <p><b>¿Por qué no las otras?</b> $-1$ sale de sumar primero las entradas, $2 + (-1) = 1$, y evaluar: $f(1) = 3 - 4 = -1$; eso no se puede hacer. $9$ sale de equivocarse en el signo de $f(-1)$ y tomarlo como $7$: $2 + 7 = 9$. $3$ sale de olvidar los dos $-4$: $6 + (-3) = 3$.</p>`, conc: 'f(a) + f(b) no es f(a + b): evalúa cada uno por separado y después suma.' },
    { enun: r`<p>Considera la función $h(x) = x^2 - 5$.</p><p>¿Cuáles son todas las preimágenes de $4$?</p>`,
      alts: [r`Solo $3$`, r`$3$ y $-3$`, r`$11$`, r`$-1$`], ok: 1,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Nos dan lo que sale, el 4, y buscamos todas las $x$ que lo producen. Como conocemos el resultado, igualamos y despejamos.</p>
      <p><b>Paso 2.</b> Escribimos la ecuación: $x^2 - 5 = 4$.</p>
      <p><b>Paso 3.</b> Sumamos 5 a los dos lados: $x^2 = 4 + 5 = 9$.</p>
      <p><b>Paso 4.</b> Buscamos qué números multiplicados por sí mismos dan 9: $3\cdot 3 = 9$ y también $(-3)\cdot(-3) = 9$. Entonces $x = 3$ o $x = -3$.</p>
      <p><b>Respuesta:</b> las preimágenes de 4 son $3$ y $-3$.</p>
      <p><b>Comprobación:</b> $h(3) = 9 - 5 = 4$ ✔ y $h(-3) = (-3)^2 - 5 = 9 - 5 = 4$ ✔.</p>
      <p><b>¿Por qué no las otras?</b> «Solo 3» olvida que un negativo al cuadrado también da 9. $11$ es $h(4) = 16 - 5 = 11$: evalúa en 4, o sea calcula la imagen de 4 en vez de la preimagen. $-1$ es $4 - 5$: resta los números sin plantear la ecuación.</p>`, conc: 'Si x² = 9, la x puede ser 3 o −3: no olvides la negativa.' },
    { enun: r`<p>En la siguiente tabla se muestran algunos valores de una función $f$.</p><p>¿Cuál de las siguientes expresiones puede corresponder a $f(x)$?</p>`,
      fig: { type: 'table', head: ['$x$', '$f(x)$'], rows: [['0', '5'], ['1', '8'], ['2', '11'], ['3', '14']] },
      alts: [r`$f(x) = 5x + 3$`, r`$f(x) = 3x + 5$`, r`$f(x) = x + 5$`, r`$f(x) = 8x$`], ok: 1,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> La fórmula que sirve para <b>todas</b> las filas de la tabla. Para saberlo, reemplazamos cada $x$ de la tabla en la fórmula y vemos si da el $f(x)$ de esa fila.</p>
      <p><b>Paso 2.</b> Miramos la tabla: en $x = 0$ sale 5, y cada vez que la $x$ sube 1, el resultado sube 3 ($5$, $8$, $11$, $14$). Eso apunta a «3 por $x$ más 5», o sea $3x + 5$.</p>
      <p><b>Paso 3.</b> Probamos $3x + 5$ en las primeras filas: $x = 0$: $3\cdot 0 + 5 = 0 + 5 = 5$ ✔; $x = 1$: $3\cdot 1 + 5 = 3 + 5 = 8$ ✔.</p>
      <p><b>Paso 4.</b> Seguimos con las otras: $x = 2$: $3\cdot 2 + 5 = 6 + 5 = 11$ ✔; $x = 3$: $3\cdot 3 + 5 = 9 + 5 = 14$ ✔. Calzan todas.</p>
      <p><b>Respuesta:</b> $f(x) = 3x + 5$.</p>
      <p><b>¿Por qué no las otras?</b> $5x + 3$ cambia de lugar los números: en $x = 0$ da $5\cdot 0 + 3 = 3$, no 5. $x + 5$ calza en $x = 0$, pero en $x = 1$ da $1 + 5 = 6$, no 8. $8x$ calza en $x = 1$, pero en $x = 0$ da $8\cdot 0 = 0$, no 5.</p>`, conc: 'Prueba la fórmula con todas las filas de la tabla, no solo con una.' },
    { enun: r`<p>En el gráfico se representa la función $f$.</p><p>¿Para qué valor de $x$ se cumple que $f(x) = 3$?</p>`,
      fig: { type: 'plot', x: [-2, 4], y: [-3, 6], fns: [{ f: x => 2 * x - 1, lab: 'f', at: [3.3, 5.6] }] },
      alts: [r`$2$`, r`$5$`, r`$3$`, r`$1$`], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Nos dan lo que sale, $f(x) = 3$, y buscamos la $x$. En un gráfico, lo que sale es la altura. Así que buscamos dónde la recta tiene altura 3 y leemos su $x$.</p>
      <p><b>Paso 2.</b> Ubicamos el 3 en el eje $Y$, el vertical.</p>
      <p><b>Paso 3.</b> Desde ahí avanzamos en horizontal hasta tocar la recta. La tocamos en el punto $(2, 3)$.</p>
      <p><b>Paso 4.</b> Desde ese punto bajamos en línea recta hasta el eje $X$, el horizontal. Llegamos a $x = 2$.</p>
      <p><b>Respuesta:</b> $x = 2$.</p>
      <p><b>Comprobación:</b> hacemos el camino al revés: subimos desde $x = 2$ hasta la recta y llegamos a la altura 3. ✔</p>
      <p><b>¿Por qué no las otras?</b> $5$ sale de leer al revés: subir desde $x = 3$ y leer la altura, o sea calcular $f(3)$. $3$ confunde la altura con la $x$. $1$ corresponde al punto $(1, 1)$, donde la altura es 1, no 3.</p>`, conc: 'Para f(x) = b: busca la altura b en el eje Y, ve hasta la curva y baja a leer la x.' },
    { enun: r`<p>¿Cuál de los siguientes conjuntos de pares $(x, y)$ <b>no</b> puede representar una función de $x$?</p>`,
      alts: [r`$\{(1, 2),\ (2, 2),\ (3, 2)\}$`, r`$\{(1, 4),\ (2, 5),\ (1, 6)\}$`, r`$\{(-1, 1),\ (0, 0),\ (1, 1)\}$`, r`$\{(0, 3),\ (5, -3),\ (7, 0)\}$`], ok: 1,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El conjunto que <b>no</b> es función. La regla: cada $x$ (el primer número de cada par) debe tener una sola salida. Así que en cada alternativa revisamos si alguna $x$ se repite con salidas distintas.</p>
      <p><b>Paso 2.</b> Primera alternativa: las $x$ son $1$, $2$ y $3$, ninguna se repite. Es función. Que todas tengan salida 2 está permitido.</p>
      <p><b>Paso 3.</b> Segunda alternativa: las $x$ son $1$, $2$ y $1$. El 1 se repite: en un par sale 4 y en el otro sale 6. Una entrada con dos salidas: no es función.</p>
      <p><b>Paso 4.</b> Tercera alternativa: las $x$ son $-1$, $0$ y $1$, ninguna se repite. Es función. La salida 1 se repite, y eso está permitido.</p>
      <p><b>Paso 5.</b> Cuarta alternativa: las $x$ son $0$, $5$ y $7$, ninguna se repite. Es función.</p>
      <p><b>Respuesta:</b> $\{(1, 4),\ (2, 5),\ (1, 6)\}$.</p>
      <p><b>¿Por qué no las otras?</b> La primera y la tercera pueden confundir porque se repite la $y$, pero eso significa varias entradas con la misma salida, y está permitido. La cuarta no repite nada.</p>`, conc: 'Función: cada x tiene una sola salida; una y sí puede repetirse.' },
    { enun: r`<p>Sea $f(x) = \dfrac{x + 1}{2}$. Si $f(a) = 6$, ¿cuál es el valor de $a$?</p>`,
      alts: [r`$11$`, r`$\dfrac{7}{2}$`, r`$13$`, r`$5$`], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Nos dan lo que sale, 6, y buscamos lo que entra, $a$. Así que igualamos la fórmula a 6 y despejamos.</p>
      <p><b>Paso 2.</b> Escribimos la ecuación: $\dfrac{a + 1}{2} = 6$.</p>
      <p><b>Paso 3.</b> Todo está dividido por 2, así que multiplicamos por 2 los dos lados: $a + 1 = 6\cdot 2 = 12$.</p>
      <p><b>Paso 4.</b> Restamos 1 a los dos lados: $a = 12 - 1 = 11$.</p>
      <p><b>Respuesta:</b> $a = 11$.</p>
      <p><b>Comprobación:</b> $f(11) = \dfrac{11 + 1}{2} = \dfrac{12}{2} = 6$. ✔</p>
      <p><b>¿Por qué no las otras?</b> $\dfrac{7}{2}$ es $f(6) = \dfrac{6 + 1}{2}$: evalúa en vez de despejar. $13$ sale de sumar 1 en vez de restarlo: $12 + 1 = 13$. $5$ es $6 - 1$: olvida multiplicar por 2.</p>`, conc: 'Para despejar, deshaz las operaciones en orden inverso: primero la división, después la suma.' },
    { enun: r`<p>La temperatura del aire, en °C, a $h$ kilómetros de altura sobre cierta ciudad se modela con $T(h) = 20 - 6h$.</p><p>¿Cuál es la temperatura a 2,5 km de altura?</p>`,
      alts: ['5 °C', '35 °C', '14 °C', '17,5 °C'], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Nos dan la altura, $h = 2{,}5$, que es lo que entra, y buscamos la temperatura, que es lo que sale. Así que evaluamos.</p>
      <p><b>Paso 2.</b> Reemplazamos: $T(2{,}5) = 20 - 6\cdot 2{,}5$.</p>
      <p><b>Paso 3.</b> Primero la multiplicación: $6\cdot 2{,}5 = 6\cdot 2 + 6\cdot 0{,}5 = 12 + 3 = 15$.</p>
      <p><b>Paso 4.</b> Después la resta: $20 - 15 = 5$.</p>
      <p><b>Respuesta:</b> 5 °C.</p>
      <p><b>¿Por qué no las otras?</b> 35 °C sale de sumar en vez de restar: $20 + 15 = 35$. 14 °C sale de restar solo el 6, olvidando el 2,5: $20 - 6 = 14$. 17,5 °C sale de restar el 2,5 sin multiplicarlo por 6: $20 - 2{,}5 = 17{,}5$.</p>`, conc: 'Evaluar en contexto: reemplaza el dato y haz la multiplicación antes que la resta.' },
    { enun: r`<p>Considera la función $f(x) = x^2 - 2x$.</p><p>¿Cuál(es) de las siguientes afirmaciones es (son) verdadera(s)?</p><p>I) $f(0) = 0$<br>II) $f(2) = 0$<br>III) $f(-1) = -1$</p>`,
      alts: ['Solo I', 'Solo I y II', 'Solo III', 'I, II y III'], ok: 1,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Revisar tres afirmaciones. En cada una evaluamos la función en el número que dice y comparamos con el resultado que propone.</p>
      <p><b>Paso 2. Afirmación I.</b> $f(0) = 0^2 - 2\cdot 0 = 0 - 0 = 0$. Dice 0: <b>Verdadera</b>.</p>
      <p><b>Paso 3. Afirmación II.</b> $f(2) = 2^2 - 2\cdot 2 = 4 - 4 = 0$. Dice 0: <b>Verdadera</b>.</p>
      <p><b>Paso 4. Afirmación III.</b> $f(-1) = (-1)^2 - 2\cdot(-1) = 1 + 2 = 3$, porque menos por menos da más. Dice $-1$: <b>Falsa</b>.</p>
      <p><b>Respuesta:</b> Solo I y II.</p>
      <p><b>¿Por qué no las otras?</b> «Solo I» deja fuera la II, que también es verdadera: $4 - 4 = 0$. «Solo III» e «I, II y III» dan por buena la III; ese $-1$ sale de calcular $-2\cdot(-1)$ como $-2$: $1 - 2 = -1$.</p>`, conc: 'Cuidado con los signos: −2·(−1) = +2.' },
    { enun: r`<p>Considera la función $g(x) = -x^2 + 4$. ¿Cuál es el valor de $g(-2)$?</p>`,
      alts: [r`$0$`, r`$8$`, r`$-8$`, r`$4$`], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Nos dan la entrada, $x = -2$, así que evaluamos. Ojo: $-x^2$ significa «menos (x al cuadrado)».</p>
      <p><b>Paso 2.</b> Reemplazamos con paréntesis. El menos de adelante se queda afuera: $g(-2) = -(-2)^2 + 4$.</p>
      <p><b>Paso 3.</b> Primero el cuadrado: $(-2)^2 = (-2)\cdot(-2) = 4$.</p>
      <p><b>Paso 4.</b> Después el menos de adelante: $-(4) = -4$. Queda $-4 + 4$.</p>
      <p><b>Paso 5.</b> Sumamos: $-4 + 4 = 0$.</p>
      <p><b>Respuesta:</b> $g(-2) = 0$.</p>
      <p><b>¿Por qué no las otras?</b> $8$ sale de meter el menos de adelante dentro del cuadrado: $(+2)^2 = 4$ y $4 + 4 = 8$. $-8$ sale de cambiarle también el signo al 4: $-4 - 4 = -8$. $4$ sale de olvidar el término $-x^2$ y dejar solo el $+4$.</p>`, conc: '−x² significa −(x²): primero el cuadrado, después el signo.' },
    { enun: r`<p>Sea $f(x) = ax + 3$, con $a$ constante. Si $f(2) = 11$, ¿cuál es el valor de $a$?</p>`,
      alts: [r`$4$`, r`$7$`, r`$8$`, r`$25$`], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El número $a$ que falta en la fórmula. El dato $f(2) = 11$ dice: «cuando entra 2, sale 11». Si reemplazamos $x = 2$ y lo igualamos a 11, queda una ecuación donde la única incógnita es $a$.</p>
      <p><b>Paso 2.</b> Reemplazamos $x = 2$: $f(2) = a\cdot 2 + 3 = 2a + 3$.</p>
      <p><b>Paso 3.</b> Igualamos a 11: $2a + 3 = 11$.</p>
      <p><b>Paso 4.</b> Restamos 3 a los dos lados: $2a = 11 - 3 = 8$.</p>
      <p><b>Paso 5.</b> Dividimos por 2: $a = \dfrac{8}{2} = 4$.</p>
      <p><b>Respuesta:</b> $a = 4$.</p>
      <p><b>Comprobación:</b> con $a = 4$ la función es $f(x) = 4x + 3$, y $f(2) = 4\cdot 2 + 3 = 8 + 3 = 11$. ✔</p>
      <p><b>¿Por qué no las otras?</b> $7$ sale de sumar el 3 en vez de restarlo: $\dfrac{11 + 3}{2} = \dfrac{14}{2} = 7$. $8$ es el valor de $2a$: faltó dividir por 2. $25$ sale de poner el 11 en lugar de la $x$: $2\cdot 11 + 3 = 22 + 3 = 25$.</p>`, conc: 'Un dato como f(2) = 11 se convierte en una ecuación: reemplaza x = 2 e iguala a 11.' },
    { enun: r`<p>En la siguiente gráfica se representa la posición de un automóvil, en km, en distintos tiempos, en horas.</p><p>¿Cuánto tiempo estuvo detenido el automóvil?</p>`, src: 'PAES Invierno 2027, adaptada',
      fig: { type: 'plot', x: [0, 4, 0.5], y: [0, 160, 20], xlab: 't (h)', ylab: 'km', fns: [{ pts: [[0, 0], [1, 60], [2.5, 60], [4, 150]] }] },
      alts: ['1 hora', '1,5 horas', '2,5 horas', '4 horas'], ok: 1,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Cuánto duró la detención. Detenido quiere decir que pasa el tiempo y la posición no cambia. En el gráfico eso se ve como un tramo plano (horizontal). Buscamos ese tramo y medimos cuánto dura en el eje del tiempo.</p>
      <p><b>Paso 2.</b> Leemos los ejes: el horizontal es el tiempo, en horas; el vertical es la posición, en km.</p>
      <p><b>Paso 3.</b> Recorremos el gráfico de izquierda a derecha. De $t = 0$ a $t = 1$ la línea sube de 0 a 60 km: se mueve. De $t = 1$ a $t = 2{,}5$ la línea se queda en 60 km: está plana, el auto está detenido. De $t = 2{,}5$ a $t = 4$ sube de 60 a 150 km: se mueve de nuevo.</p>
      <p><b>Paso 4.</b> La detención va de $t = 1$ a $t = 2{,}5$. Restamos: $2{,}5 - 1 = 1{,}5$ horas.</p>
      <p><b>Respuesta:</b> 1,5 horas.</p>
      <p><b>¿Por qué no las otras?</b> 1 hora es lo que dura el primer tramo, cuando el auto sí se movía. 2,5 horas es el instante en que vuelve a moverse, no lo que duró la detención. 4 horas es el viaje completo.</p>`, conc: 'En un gráfico posición-tiempo, un tramo plano significa detenido; su duración se lee restando en el eje del tiempo.' }
  ]
},

{
  id: 'lineal_afin', unit: 'Unidad 1 · Función lineal y afín', icon: '📈',
  title: 'Función lineal y afín',
  desc: 'La pendiente como "cuánto sube por cada paso", cómo sacar la fórmula desde dos puntos, una tabla o un gráfico, dónde corta a los ejes, lineal o afín y rectas paralelas.',
  slides: [
    { t: 'Una cantidad que crece de a poco', b: r`
      <div class="cols"><div>
      <p>Una planta mide 3 cm el día que la plantas y crece 2 cm cada semana. Anotemos su altura.</p>
      <p><b>Paso 1.</b> Semana 0: mide $3$ cm, lo que mide al comienzo.</p>
      <p><b>Paso 2.</b> Semana 1: $3 + 2 = 5$ cm.</p>
      <p><b>Paso 3.</b> Semana 2: $5 + 2 = 7$ cm. Semana 3: $7 + 2 = 9$ cm.</p>
      <p><b>Paso 4.</b> Después de $x$ semanas, a los 3 cm del comienzo se le suma $x$ veces el 2. La altura es $f(x) = 2x + 3$.</p>
      <p>Probemos con la semana 3: $f(3) = 2\cdot 3 + 3 = 6 + 3 = 9$. ✔</p>
      </div><div>
      <div class="qfig">${''}</div>
      <div class="box"><b>Función afín</b> Es una función de la forma $f(x) = mx + n$. Su gráfico es una línea recta.<br>· $n$ es el <b>valor de partida</b>: lo que vale cuando $x = 0$ (aquí, los 3 cm).<br>· $m$ es lo que <b>cambia por cada paso</b>: cuánto se suma cada vez que $x$ aumenta en 1 (aquí, los 2 cm por semana).</div>
      </div></div>` },
    { t: 'Función lineal: parte desde cero', b: r`
      <div class="cols"><div>
      <p>Ahora piensa en comprar pan a <span class="peso">$2000</span> el kilo.</p>
      <p><b>Paso 1.</b> Si no compras nada, pagas $0$. El valor de partida es $0$.</p>
      <p><b>Paso 2.</b> Cada kilo suma <span class="peso">$2000</span>: 1 kg cuesta <span class="peso">$2000</span> y 2 kg cuestan $2\cdot 2000 = 4000$ pesos.</p>
      <p><b>Paso 3.</b> La fórmula es $f(x) = 2000x$: no hay ningún número sumado al final.</p>
      <p>Si compras el doble, pagas el doble. Eso se llama <b>proporcionalidad directa</b>.</p>
      </div><div>
      <div class="qfig">${''}</div>
      <div class="box"><b>Función lineal</b> Es la de la forma $f(x) = mx$: una función afín en la que el número sumado $n$ es $0$. Su recta pasa por el origen, el punto $(0, 0)$.</div>
      <div class="box alert"><b>Ojo</b> $f(x) = 2x + 3$ no es proporcional: $f(1) = 2\cdot 1 + 3 = 5$ y $f(2) = 2\cdot 2 + 3 = 7$. La $x$ se duplicó, pero $7$ no es el doble de $5$.</div>
      </div></div>` },
    { t: '¿Lineal o afín? Mirando una tabla', b: r`
      <div class="cols"><div>
      <p>En una función lineal, $y$ es siempre $m$ veces $x$. Por eso, si divides cada $y$ por su $x$, tiene que dar siempre el mismo número.</p>
      <p><b>Paso 1.</b> Tabla A: $\dfrac{6}{2} = 3$, $\dfrac{12}{4} = 3$ y $\dfrac{18}{6} = 3$.</p>
      <p><b>Paso 2.</b> Siempre da 3, así que es lineal: $f(x) = 3x$.</p>
      <p><b>Paso 3.</b> Tabla B: $\dfrac{5}{1} = 5$ y $\dfrac{7}{2} = 3{,}5$.</p>
      <p><b>Paso 4.</b> Ya dio distinto, así que no es lineal: es afín (de hecho es $f(x) = 2x + 3$).</p>
      </div><div>
      <div class="box"><b>Tabla A</b><table><thead><tr><th>$x$</th><th>2</th><th>4</th><th>6</th></tr></thead><tbody><tr><td>$y$</td><td>6</td><td>12</td><td>18</td></tr></tbody></table></div>
      <div class="box"><b>Tabla B</b><table><thead><tr><th>$x$</th><th>1</th><th>2</th><th>4</th></tr></thead><tbody><tr><td>$y$</td><td>5</td><td>7</td><td>11</td></tr></tbody></table></div>
      <div class="box alert"><b>Atajo</b> Si la tabla trae $x = 0$, mira su $y$: si no es $0$, la función no es lineal, porque no pasa por el origen.</div>
      </div></div>` },
    { t: 'La pendiente: cuánto sube por cada paso', b: r`
      <div class="cols"><div>
      <p>Volvamos a la planta, $f(x) = 2x + 3$. Mira la recta como si fuera una escalera.</p>
      <p><b>Paso 1.</b> Parte en un punto de la recta: $(0, 3)$.</p>
      <p><b>Paso 2.</b> Avanza 1 hacia la derecha: llegas a $x = 1$.</p>
      <p><b>Paso 3.</b> Sube hasta tocar otra vez la recta: llegas a $f(1) = 5$. Subiste $5 - 3 = 2$.</p>
      <p><b>Paso 4.</b> Repite desde $(1, 5)$: avanzas 1 y subes de $5$ a $7$, otra vez 2. Siempre es 2, y es justo el número que acompaña a la $x$.</p>
      </div><div>
      <div class="qfig">${''}</div>
      <div class="box"><b>Pendiente</b> La <b>pendiente</b> $m$ es cuánto sube (o baja) la recta por cada paso de 1 hacia la derecha. En $f(x) = mx + n$ es el número que multiplica a la $x$.</div>
      </div></div>` },
    { t: 'Sube, baja o queda plana', b: r`
      <div class="cols"><div>
      <p>Lee la recta de izquierda a derecha, como lees un texto.</p>
      <p>· Si $m$ es <b>positiva</b>, la recta sube. Se dice que la función es <b>creciente</b>: cuando $x$ aumenta, $y$ también aumenta.</p>
      <p>· Si $m$ es <b>negativa</b>, la recta baja. Se dice que es <b>decreciente</b>. Con $f(x) = -x + 1$, por cada paso a la derecha baja 1.</p>
      <p>· Si $m = 0$, la recta es plana (horizontal). Se dice que es <b>constante</b>: con $f(x) = 3$, siempre vale 3.</p>
      </div><div>
      <div class="qfig">${''}</div>
      <div class="box"><b>¿Qué tan empinada?</b> Mira el número sin su signo: mientras más grande, más empinada. $y = 3x$ sube 3 por paso e $y = x$ sube solo 1, así que $y = 3x$ es más empinada. Lo mismo con $y = -3x$ e $y = -x$, solo que bajan.</div>
      </div></div>` },
    { t: 'La pendiente con dos puntos', b: r`
      <div class="cols"><div>
      <p>A veces los dos puntos no están a un paso de distancia. Ejemplo: la recta pasa por $(1, 4)$ y $(3, 10)$.</p>
      <p><b>Paso 1. ¿Cuánto avanza?</b> De $x = 1$ a $x = 3$: $3 - 1 = 2$ pasos a la derecha.</p>
      <p><b>Paso 2. ¿Cuánto sube?</b> De $y = 4$ a $y = 10$: $10 - 4 = 6$.</p>
      <p><b>Paso 3. Reparte.</b> En 2 pasos subió 6, así que en cada paso sube $6 \div 2 = 3$. La pendiente es $m = 3$.</p>
      <p>Lo que hicimos, escrito como fórmula, es "lo que sube dividido por lo que avanza":</p>
      $$m = \dfrac{y_2 - y_1}{x_2 - x_1} = \dfrac{10 - 4}{3 - 1} = \dfrac{6}{2} = 3$$
      </div><div>
      <div class="qfig">${''}</div>
      <div class="box alert"><b>Las y van arriba</b> Arriba va lo que sube (resta de las $y$) y abajo lo que avanza (resta de las $x$). Al revés da $\dfrac{2}{6}$, y eso está mal.</div>
      </div></div>` },
    { t: 'Pendiente negativa: cuando la recta baja', b: r`
      <div class="cols"><div>
      <p>Ejemplo: la recta pasa por $(-1, 5)$ y $(2, -1)$.</p>
      <p><b>Paso 1. ¿Cuánto avanza?</b> De $x = -1$ a $x = 2$: $2 - (-1) = 2 + 1 = 3$ pasos.</p>
      <p><b>Paso 2. ¿Cuánto cambia la altura?</b> De $y = 5$ a $y = -1$: $-1 - 5 = -6$. El signo menos dice que bajó 6.</p>
      <p><b>Paso 3. Reparte.</b> $m = \dfrac{-6}{3} = -2$. Por cada paso a la derecha, la recta baja 2.</p>
      </div><div>
      <div class="qfig">${''}</div>
      <div class="box alert"><b>El mismo orden arriba y abajo</b> Si arriba haces "segundo punto menos primero", abajo también. Si los mezclas, por ejemplo $\dfrac{5 - (-1)}{2 - (-1)} = \dfrac{6}{3} = 2$, te sale el signo cambiado.</div>
      <div class="box"><b>Restar un negativo</b> $2 - (-1) = 2 + 1 = 3$: menos por menos es más.</div>
      </div></div>` },
    { t: 'De la tabla a la fórmula', b: r`
      <div class="cols"><div>
      <p>Buscamos $f(x) = mx + n$. Primero la pendiente, después el valor de partida.</p>
      <p><b>Paso 1.</b> Toma dos filas: $(1, 5)$ y $(3, 11)$. Avanza $3 - 1 = 2$ y sube $11 - 5 = 6$.</p>
      <p><b>Paso 2.</b> Pendiente: $m = \dfrac{6}{2} = 3$. Ya sabemos que $f(x) = 3x + n$.</p>
      <p><b>Paso 3.</b> Para hallar $n$, reemplaza un punto, por ejemplo $(1, 5)$: $5 = 3\cdot 1 + n$, o sea $5 = 3 + n$.</p>
      <p><b>Paso 4.</b> Despeja restando 3: $n = 5 - 3 = 2$. La fórmula es $f(x) = 3x + 2$.</p>
      <p><b>Paso 5. Comprueba</b> con la fila que no usaste: $f(5) = 3\cdot 5 + 2 = 15 + 2 = 17$. ✔</p>
      </div><div>
      <div class="box"><b>La tabla</b><table><thead><tr><th>$x$</th><th>1</th><th>3</th><th>5</th></tr></thead><tbody><tr><td>$f(x)$</td><td>5</td><td>11</td><td>17</td></tr></tbody></table></div>
      <div class="box"><b>Atajo</b> Si la tabla trae $x = 0$, el valor de esa fila es directamente $n$, porque $f(0) = m\cdot 0 + n = n$.</div>
      <div class="box alert"><b>Un punto no basta</b> Muchas rectas distintas pasan por $(1, 5)$. Comprueba siempre con otra fila.</div>
      </div></div>` },
    { t: 'Del gráfico a la fórmula', b: r`
      <div class="cols"><div>
      <p><b>Paso 1.</b> Mira dónde la recta corta al eje $Y$: en $(0, -1)$. Ese es el valor de partida, así que $n = -1$.</p>
      <p><b>Paso 2.</b> Busca otro punto donde la recta pase justo por una esquina de la cuadrícula: $(2, 3)$.</p>
      <p><b>Paso 3.</b> De $(0, -1)$ a $(2, 3)$ avanza $2 - 0 = 2$ y sube $3 - (-1) = 3 + 1 = 4$.</p>
      <p><b>Paso 4.</b> Pendiente: $m = \dfrac{4}{2} = 2$.</p>
      <p><b>Paso 5.</b> La fórmula es $f(x) = 2x - 1$.</p>
      <p><b>Comprobación:</b> $f(2) = 2\cdot 2 - 1 = 4 - 1 = 3$. ✔</p>
      </div><div>
      <div class="qfig">${''}</div>
      <div class="box alert"><b>Elige puntos exactos</b> Usa puntos donde la recta cruza justo una esquina de la cuadrícula. Si lees un valor "a ojo", la pendiente sale mal.</div>
      </div></div>` },
    { t: 'Dónde corta al eje Y', b: r`
      <div class="cols"><div>
      <p>Todo punto del eje $Y$ tiene $x = 0$. Por eso, para saber dónde la recta corta al eje $Y$, se reemplaza $x$ por $0$.</p>
      <p><b>Paso 1.</b> Con $f(x) = -3x + 6$: $f(0) = -3\cdot 0 + 6$.</p>
      <p><b>Paso 2.</b> Como $-3\cdot 0 = 0$, queda $f(0) = 0 + 6 = 6$.</p>
      <p><b>Paso 3.</b> El punto es $(0, 6)$: primero la $x$, que es 0, y después la altura.</p>
      <p>Siempre pasa lo mismo: la recta corta al eje $Y$ en $(0, n)$, donde $n$ es el número que va sumado.</p>
      </div><div>
      <div class="qfig">${''}</div>
      <div class="box"><b>El signo de n</b> · $n > 0$: corta al eje $Y$ arriba del origen.<br>· $n < 0$: corta abajo del origen.<br>· $n = 0$: pasa por el origen, o sea, es lineal.</div>
      </div></div>` },
    { t: 'Dónde corta al eje X', b: r`
      <div class="cols"><div>
      <p>Todo punto del eje $X$ tiene altura $0$. Por eso se iguala la función a $0$ y se despeja la $x$.</p>
      <p><b>Paso 1.</b> Con $f(x) = -3x + 6$, plantea $-3x + 6 = 0$.</p>
      <p><b>Paso 2.</b> Resta 6 a ambos lados: $-3x = -6$.</p>
      <p><b>Paso 3.</b> Divide por $-3$: $x = \dfrac{-6}{-3} = 2$.</p>
      <p><b>Paso 4.</b> El punto es $(2, 0)$: la $x$ que encontraste y altura $0$.</p>
      <p><b>Comprobación:</b> $f(2) = -3\cdot 2 + 6 = -6 + 6 = 0$. ✔</p>
      <p>Si haces lo mismo con letras, $mx + n = 0$ da $x = -\dfrac{n}{m}$. Aquí: $x = -\dfrac{6}{-3} = 2$.</p>
      </div><div>
      <div class="qfig">${''}</div>
      <div class="box alert"><b>No los inviertas</b> Corte con el eje $Y$: $(0, n)$, la $x$ es 0. Corte con el eje $X$: $(x, 0)$, la altura es 0.</div>
      </div></div>` },
    { t: 'Rectas paralelas', b: r`
      <div class="cols"><div>
      <p>Dos rectas <b>paralelas</b> nunca se cortan: van siempre igual de inclinadas, una al lado de la otra. Por eso tienen la <b>misma pendiente</b>.</p>
      <p>Ejemplo: la recta paralela a $y = 2x - 3$ que pasa por $(0, 1)$.</p>
      <p><b>Paso 1.</b> Es paralela, así que copia la pendiente: $m = 2$.</p>
      <p><b>Paso 2.</b> Pasa por $(0, 1)$, que está en el eje $Y$, así que $n = 1$.</p>
      <p><b>Paso 3.</b> La recta es $y = 2x + 1$.</p>
      </div><div>
      <div class="qfig">${''}</div>
      <div class="box"><b>Si el punto no está en el eje Y</b> Paralela a $y = -x + 2$ que pasa por $(2, 5)$.<br>Paso 1. Misma pendiente: $m = -1$, así que $y = -x + n$.<br>Paso 2. Reemplaza el punto: $5 = -1\cdot 2 + n$, o sea $5 = -2 + n$.<br>Paso 3. Suma 2 a ambos lados: $n = 5 + 2 = 7$. La recta es $y = -x + 7$.</div>
      </div></div>` },
    { t: 'Mover la recta: cambiar m o n', b: r`
      <div class="cols"><div>
      <p><b>Si cambias m</b> y dejas $n$ igual, la recta <b>gira</b> en torno al punto $(0, n)$. Ejemplo: $y = x + 1$ e $y = 3x + 1$ pasan las dos por $(0, 1)$, pero la segunda es más empinada.</p>
      <p><b>Si cambias n</b> y dejas $m$ igual, la recta se <b>traslada</b>: sube o baja sin girar y queda paralela a la de antes. Ejemplo: $y = x + 4$ es $y = x + 1$ subida 3.</p>
      </div><div>
      <p><b>Pruébalo tú.</b> Deja $a = 0$ y el graficador dibuja la recta $y = bx + c$: aquí $b$ hace de pendiente $m$ y $c$ es donde corta al eje $Y$, o sea $n$. Cambia los valores o aprieta ▶ b para ver cómo gira y ▶ c para ver cómo se traslada.</p>
      <div class="graf" data-a="0" data-b="2" data-c="1"></div>
      </div></div>` },
    { t: 'Resumen', b: r`
      <table><thead><tr><th>Idea</th><th>Cómo se hace o se ve</th></tr></thead><tbody>
      <tr><td>Afín $f(x) = mx + n$</td><td>recta que parte en $n$ y cambia $m$ por cada paso a la derecha</td></tr>
      <tr><td>Lineal $f(x) = mx$</td><td>recta por el origen; $y$ dividido por $x$ da siempre lo mismo (proporcional)</td></tr>
      <tr><td>Pendiente con dos puntos</td><td>lo que sube dividido por lo que avanza: $\dfrac{y_2 - y_1}{x_2 - x_1}$</td></tr>
      <tr><td>Signo de $m$</td><td>positivo sube, negativo baja, cero queda plana</td></tr>
      <tr><td>Corte con el eje $Y$</td><td>reemplazo $x = 0$: punto $(0, n)$</td></tr>
      <tr><td>Corte con el eje $X$</td><td>igualo a $0$ y despejo: punto $\left(-\dfrac{n}{m}, 0\right)$</td></tr>
      <tr><td>Fórmula desde tabla o gráfico</td><td>primero $m$, después $n$ con un punto, y compruebo con otro</td></tr>
      <tr><td>Paralelas</td><td>misma $m$</td></tr></tbody></table>
      <div class="box" style="margin-top:14px"><b>Método PAES</b> Con una tabla, primero divide cada $y$ por su $x$: si siempre da lo mismo, es lineal y basta una regla de tres. Si no, es afín: saca la pendiente, después el valor de partida, y comprueba con un punto que no usaste.</div>` }
  ],
  example: {
    src: 'PAES Invierno 2026',
    enun: r`<p>La distancia de reacción es la distancia recorrida por un vehículo desde que el conductor se percata de un obstáculo hasta que comienza a pisar el pedal de freno. La distancia de reacción $f$ y la rapidez del vehículo se relacionan mediante una función de la forma $f(x) = ax$, con $a$ constante.</p><p>En la siguiente tabla se presentan algunos ejemplos.</p><p>¿Cuál es la distancia de reacción de un vehículo que tiene una rapidez de 30 km/h?</p>`,
    fig: { type: 'table', head: ['Rapidez del vehículo', 'Distancia de reacción'], rows: [['110 km/h', '33 m'], ['70 km/h', '21 m']] },
    alts: ['15 m', '10 m', '9 m', '1 m'], ok: 2,
    sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> La distancia de reacción cuando la rapidez es 30 km/h, o sea $f(30)$. Nos dicen que $f(x) = ax$: es lineal, así que la distancia es siempre $a$ veces la rapidez. Primero buscamos $a$ con la tabla y después reemplazamos $x = 30$.</p><p><b>Paso 2.</b> Primera fila: a 110 km/h la distancia es 33 m, así que $33 = a\cdot 110$.</p><p><b>Paso 3.</b> Despeja dividiendo por 110: $a = \dfrac{33}{110}$. Simplifica dividiendo arriba y abajo por 11: $a = \dfrac{3}{10} = 0{,}3$.</p><p><b>Paso 4.</b> Revisa con la segunda fila: $0{,}3\cdot 70 = 21$. ✔ Da los 21 m de la tabla, así que $a = 0{,}3$ está bien.</p><p><b>Paso 5.</b> Reemplaza $x = 30$: $f(30) = 0{,}3\cdot 30 = 9$.</p><p><b>Respuesta:</b> 9 m.</p><p><b>Comprobación:</b> la distancia dividida por la rapidez debe dar siempre lo mismo: $\dfrac{9}{30} = 0{,}3$, igual que $\dfrac{33}{110} = 0{,}3$. ✔</p><p><b>¿Por qué no las otras?</b> 15 m es la mitad de 30, como si $a = 0{,}5$. 10 m es $30 \div 3$, como si $a = \dfrac{1}{3}$. 1 m daría $\dfrac{1}{30}$, muy lejos de $0{,}3$. Ninguna mantiene la razón $0{,}3$ de la tabla.</p>`,
    conc: 'Función lineal: y dividido por x da siempre el mismo número a; búscalo con la tabla y después evalúa.'
  },
  bank: [
    { enun: r`<p>¿Cuál es la pendiente de la recta que pasa por los puntos $(1, 3)$ y $(3, 7)$?</p>`,
      alts: [r`$2$`, r`$\dfrac{1}{2}$`, r`$5$`, r`$4$`], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> La pendiente: cuánto sube la recta por cada paso a la derecha. Con dos puntos, vemos cuánto avanza, cuánto sube y repartimos.</p><p><b>Paso 2. ¿Cuánto avanza?</b> De $x = 1$ a $x = 3$: $3 - 1 = 2$.</p><p><b>Paso 3. ¿Cuánto sube?</b> De $y = 3$ a $y = 7$: $7 - 3 = 4$.</p><p><b>Paso 4. Reparte.</b> Subió 4 en 2 pasos: $m = \dfrac{4}{2} = 2$.</p><p><b>Respuesta:</b> $2$.</p><p><b>Comprobación:</b> desde $(1, 3)$, un paso a la derecha sube 2 y llegas a $(2, 5)$; otro paso más y llegas a $(3, 7)$. ✔</p><p><b>¿Por qué no las otras?</b> $\dfrac{1}{2}$ divide al revés: lo que avanza dividido por lo que sube. 5 es el promedio de 3 y 7, que no tiene nada que ver con la pendiente. 4 es solo lo que sube: falta dividir por los 2 pasos.</p>`, conc: 'Pendiente = lo que sube dividido por lo que avanza: las y van arriba.' },
    { enun: r`<p>¿En qué punto la gráfica de $f(x) = -2x + 6$ corta al eje $X$?</p>`,
      alts: [r`$(3, 0)$`, r`$(0, 6)$`, r`$(-3, 0)$`, r`$(6, 0)$`], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El punto donde la recta toca el eje $X$. Ahí la altura es 0, así que igualamos $f(x)$ a 0 y despejamos la $x$.</p><p><b>Paso 2.</b> Plantea: $-2x + 6 = 0$.</p><p><b>Paso 3.</b> Resta 6 a ambos lados: $-2x = -6$.</p><p><b>Paso 4.</b> Divide por $-2$: $x = \dfrac{-6}{-2} = 3$. Menos dividido por menos da más.</p><p><b>Paso 5.</b> El punto lleva esa $x$ y altura 0: $(3, 0)$.</p><p><b>Respuesta:</b> $(3, 0)$.</p><p><b>Comprobación:</b> $f(3) = -2\cdot 3 + 6 = -6 + 6 = 0$. ✔</p><p><b>¿Por qué no las otras?</b> $(0, 6)$ es donde corta al eje $Y$ (se reemplazó $x = 0$). $(-3, 0)$ se equivoca de signo al dividir: $-6 \div (-2)$ es $+3$. $(6, 0)$ toma el número sumado 6 como si fuera el corte con el eje $X$.</p>`, conc: 'Corte con el eje X: iguala f(x) a 0 y despeja.' },
    { enun: r`<p>¿Cuál de las siguientes funciones es <b>lineal</b>?</p>`,
      alts: [r`$f(x) = 3x + 2$`, r`$g(x) = -\dfrac{2}{5}x$`, r`$h(x) = x^2$`, r`$k(x) = 7$`], ok: 1,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Reconocer la función lineal, que es de la forma $mx$: un número por $x$, sin nada sumado y sin $x^2$. Revisamos cada una.</p><p><b>Paso 2.</b> $f(x) = 3x + 2$ tiene un $+2$ sumado: $f(0) = 3\cdot 0 + 2 = 2$, no pasa por el origen. Es afín, no lineal.</p><p><b>Paso 3.</b> $g(x) = -\dfrac{2}{5}x$ es solo un número por $x$, con $m = -\dfrac{2}{5}$. Además $g(0) = 0$: pasa por el origen. Es lineal. Que la pendiente sea negativa o una fracción no importa.</p><p><b>Paso 4.</b> $h(x) = x^2$ tiene la $x$ al cuadrado: su gráfico no es una recta.</p><p><b>Paso 5.</b> $k(x) = 7$ no tiene $x$: es una recta plana a altura 7. Como $k(0) = 7$, no pasa por el origen: es constante, no lineal.</p><p><b>Respuesta:</b> $g(x) = -\dfrac{2}{5}x$.</p><p><b>Comprobación:</b> $g(5) = -\dfrac{2}{5}\cdot 5 = -2$ y $g(10) = -\dfrac{2}{5}\cdot 10 = -4$. La $x$ se duplicó y el resultado también: es proporcional. ✔</p><p><b>¿Por qué no las otras?</b> $3x + 2$ es afín, por el $+2$; $x^2$ es cuadrática; $7$ es constante.</p>`, conc: 'Lineal = un número por x, sin nada sumado.' },
    { enun: r`<p>En el gráfico se representa una función afín $f$.</p><p>¿Cuál es la expresión de $f(x)$?</p>`,
      fig: { type: 'plot', x: [-2, 4], y: [-3, 4], fns: [{ f: x => -x + 2, lab: 'f', at: [-1.6, 3.6] }], marks: [[0, 2], [3, -1]] },
      alts: [r`$f(x) = -x + 2$`, r`$f(x) = x + 2$`, r`$f(x) = 2x - 1$`, r`$f(x) = -2x + 2$`], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> La fórmula $f(x) = mx + n$. Del gráfico sacamos $n$ (donde corta al eje $Y$) y $m$ (cuánto sube o baja por cada paso a la derecha).</p><p><b>Paso 2.</b> Mira el eje $Y$: la recta lo corta en el punto marcado $(0, 2)$. Entonces $n = 2$.</p><p><b>Paso 3.</b> El otro punto marcado es $(3, -1)$: desde $x = 3$ en el eje $X$ baja hasta la recta y queda a altura $-1$.</p><p><b>Paso 4.</b> De $(0, 2)$ a $(3, -1)$ avanza $3 - 0 = 3$.</p><p><b>Paso 5.</b> La altura cambia $-1 - 2 = -3$: bajó 3.</p><p><b>Paso 6.</b> Pendiente: $m = \dfrac{-3}{3} = -1$.</p><p><b>Paso 7.</b> La fórmula es $f(x) = -1\cdot x + 2 = -x + 2$.</p><p><b>Respuesta:</b> $f(x) = -x + 2$.</p><p><b>Comprobación:</b> $f(0) = -0 + 2 = 2$ ✔ y $f(3) = -3 + 2 = -1$ ✔.</p><p><b>¿Por qué no las otras?</b> $x + 2$ tiene pendiente $+1$, así que subiría, pero la recta del gráfico baja. $2x - 1$ intercambia los números: corta al eje $Y$ en $-1$, no en 2. $-2x + 2$ da $f(3) = -2\cdot 3 + 2 = -6 + 2 = -4$, no $-1$.</p>`, conc: 'n = donde corta al eje Y; m = lo que sube o baja dividido por lo que avanza.' },
    { enun: r`<p>La siguiente tabla muestra valores de una función afín $f$.</p><p>¿Cuál es la expresión de $f(x)$?</p>`,
      fig: { type: 'table', head: ['$x$', '$f(x)$'], rows: [['2', '7'], ['4', '11'], ['6', '15']] },
      alts: [r`$f(x) = 3x + 1$`, r`$f(x) = 2x + 3$`, r`$f(x) = x + 5$`, r`$f(x) = 4x - 1$`], ok: 1,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> La fórmula $f(x) = mx + n$ a partir de la tabla. Primero sacamos la pendiente con dos filas, después $n$ con un punto, y al final comprobamos con la fila que sobra.</p><p><b>Paso 2.</b> Filas $(2, 7)$ y $(4, 11)$: avanza $4 - 2 = 2$ y sube $11 - 7 = 4$.</p><p><b>Paso 3.</b> Pendiente: $m = \dfrac{4}{2} = 2$. Ya sabemos que $f(x) = 2x + n$.</p><p><b>Paso 4.</b> Reemplaza el punto $(2, 7)$: $7 = 2\cdot 2 + n$, o sea $7 = 4 + n$.</p><p><b>Paso 5.</b> Resta 4 a ambos lados: $n = 7 - 4 = 3$.</p><p><b>Paso 6.</b> La fórmula es $f(x) = 2x + 3$.</p><p><b>Respuesta:</b> $f(x) = 2x + 3$.</p><p><b>Comprobación:</b> $f(4) = 2\cdot 4 + 3 = 8 + 3 = 11$ ✔ y $f(6) = 2\cdot 6 + 3 = 12 + 3 = 15$ ✔.</p><p><b>¿Por qué no las otras?</b> Las cuatro dan 7 en $x = 2$, por eso un solo punto no basta. Pero en $x = 4$: $3\cdot 4 + 1 = 13$, $4 + 5 = 9$ y $4\cdot 4 - 1 = 15$. Ninguna da 11.</p>`, conc: 'Un solo punto no basta: comprueba con dos o más filas.' },
    { enun: r`<p>El peso $p$ de un cuerpo, en newtons, se modela con $p = g\cdot m$, donde $m$ es su masa en kg y $g$ depende del planeta: en Mercurio $g \approx 3{,}7$ y en la Tierra $g \approx 10$.</p><p>¿Cuál de las siguientes afirmaciones sobre los gráficos de $p$ en función de $m$ es verdadera?</p>`, src: 'PAES Invierno 2027, adaptada',
      alts: ['Ambos pasan por el origen y el de la Tierra es más inclinado.', 'Ambos pasan por el origen y el de Mercurio es más inclinado.', 'Son rectas paralelas.', 'El de la Tierra corta al eje del peso en 10.'], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Comparar dos rectas: $p = 3{,}7m$ (Mercurio) y $p = 10m$ (Tierra). Ojo: aquí la letra $m$ es la masa, no la pendiente. Las dos son un número por la masa, sin nada sumado: son lineales.</p><p><b>Paso 2. ¿Pasan por el origen?</b> Con masa 0: $3{,}7\cdot 0 = 0$ y $10\cdot 0 = 0$. Las dos pasan por $(0, 0)$.</p><p><b>Paso 3. Pendientes.</b> En Mercurio, por cada kg el peso sube $3{,}7$; en la Tierra sube $10$.</p><p><b>Paso 4.</b> Como $10$ es mayor que $3{,}7$, la recta de la Tierra sube más por cada paso: es más inclinada.</p><p><b>Respuesta:</b> Ambos pasan por el origen y el de la Tierra es más inclinado.</p><p><b>Comprobación:</b> con 1 kg, en Mercurio el peso es $3{,}7$ N y en la Tierra $10$ N. La recta de la Tierra va más arriba. ✔</p><p><b>¿Por qué no las otras?</b> La de Mercurio no puede ser más inclinada, porque $3{,}7$ es menor que $10$. Para ser paralelas necesitarían la misma pendiente, y $3{,}7$ no es igual a $10$. La de la Tierra corta al eje del peso en 0, no en 10: el 10 es su pendiente.</p>`, conc: 'Más pendiente = recta más inclinada.' },
    { enun: r`<p>El gráfico de $f(x) = mx + n$ es una recta decreciente que corta al eje $Y$ sobre el origen.</p><p>¿Qué se puede afirmar de $m$ y $n$?</p>`,
      alts: [r`$m > 0$ y $n > 0$`, r`$m < 0$ y $n > 0$`, r`$m < 0$ y $n < 0$`, r`$m > 0$ y $n < 0$`], ok: 1,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El signo de $m$ y el de $n$. El signo de $m$ dice si la recta sube o baja; el de $n$ dice si corta al eje $Y$ arriba o abajo del origen.</p><p><b>Paso 2.</b> "Decreciente" quiere decir que la recta baja al leerla de izquierda a derecha. Eso pasa cuando la pendiente es negativa: $m < 0$.</p><p><b>Paso 3.</b> La recta corta al eje $Y$ en $(0, n)$. "Sobre el origen" quiere decir arriba del 0, así que $n > 0$.</p><p><b>Respuesta:</b> $m < 0$ y $n > 0$.</p><p><b>Comprobación:</b> con un ejemplo así, $f(x) = -x + 2$: $f(0) = 2$, corta arriba del origen ✔; $f(1) = -1 + 2 = 1$, bajó ✔.</p><p><b>¿Por qué no las otras?</b> Con $m > 0$ y $n > 0$ la recta sube. Con $m < 0$ y $n < 0$ baja, pero corta al eje $Y$ abajo del origen. Con $m > 0$ y $n < 0$ sube y además corta abajo.</p>`, conc: 'Signo de m = sube o baja; signo de n = dónde corta al eje Y.' },
    { enun: r`<p>Una función afín cumple $f(0) = 4$ y $f(2) = 10$.</p><p>¿Cuál es el valor de $f(5)$?</p>`,
      alts: [r`$19$`, r`$25$`, r`$20$`, r`$14$`], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> $f(5)$. Conocemos dos puntos, $(0, 4)$ y $(2, 10)$. Con ellos armamos la fórmula $f(x) = mx + n$ y después reemplazamos $x = 5$.</p><p><b>Paso 2.</b> $f(0) = 4$ es el valor de partida: $n = 4$.</p><p><b>Paso 3.</b> De $(0, 4)$ a $(2, 10)$ avanza $2 - 0 = 2$ y sube $10 - 4 = 6$.</p><p><b>Paso 4.</b> Pendiente: $m = \dfrac{6}{2} = 3$. La fórmula es $f(x) = 3x + 4$.</p><p><b>Paso 5.</b> Reemplaza $x = 5$: $f(5) = 3\cdot 5 + 4 = 15 + 4 = 19$.</p><p><b>Respuesta:</b> $19$.</p><p><b>Comprobación:</b> $f(2) = 3\cdot 2 + 4 = 6 + 4 = 10$ ✔, igual que el dato.</p><p><b>¿Por qué no las otras?</b> 25 usa regla de tres: $\dfrac{10}{2}\cdot 5 = 5\cdot 5 = 25$, como si fuera proporcional, pero la función parte en 4, no en 0. 20 es $4\cdot 5$. 14 es $10 + 4$.</p>`, conc: 'Afín no es proporcional: no sirve la regla de tres.' },
    { enun: r`<p>En una feria, 4 kg de manzanas cuestan <span class="peso">$6000</span> y el precio es directamente proporcional a la cantidad.</p><p>¿Qué función modela el precio $f(x)$, en pesos, de $x$ kg de manzanas?</p>`,
      alts: [r`$f(x) = 1500x$`, r`$f(x) = 6000x$`, r`$f(x) = 4x + 6000$`, r`$f(x) = \dfrac{x}{1500}$`], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> La fórmula del precio. Como es directamente proporcional, es lineal: $f(x) = ax$, donde $a$ es el precio de 1 kg.</p><p><b>Paso 2.</b> Si 4 kg cuestan <span class="peso">$6000</span>, 1 kg cuesta la cuarta parte: $6000 \div 4 = 1500$ pesos.</p><p><b>Paso 3.</b> Entonces $a = 1500$ y la función es $f(x) = 1500x$.</p><p><b>Respuesta:</b> $f(x) = 1500x$.</p><p><b>Comprobación:</b> $f(4) = 1500\cdot 4 = 6000$ pesos, igual que el dato. ✔</p><p><b>¿Por qué no las otras?</b> $6000x$ usa el precio de 4 kg como si fuera el de 1 kg: daría $f(4) = 6000\cdot 4 = 24.000$ pesos. $4x + 6000$ no es proporcional: sin comprar nada pagarías <span class="peso">$6000</span>. $\dfrac{x}{1500}$ divide en vez de multiplicar: 4 kg costarían menos de un peso.</p>`, conc: 'Proporcional: la constante es el precio de una unidad.' },
    { enun: r`<p>¿Cuál es la ecuación de la recta paralela a $y = 3x - 1$ que pasa por el punto $(0, 5)$?</p>`,
      alts: [r`$y = 3x + 5$`, r`$y = -3x + 5$`, r`$y = \dfrac{1}{3}x + 5$`, r`$y = 5x + 3$`], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Una recta paralela a $y = 3x - 1$. Paralela quiere decir igual de inclinada, o sea, la misma pendiente. Además debe pasar por $(0, 5)$, que está en el eje $Y$.</p><p><b>Paso 2.</b> La pendiente de $y = 3x - 1$ es el número que multiplica a la $x$: $m = 3$. La nueva recta también tiene $m = 3$.</p><p><b>Paso 3.</b> El punto $(0, 5)$ es donde corta al eje $Y$, así que $n = 5$.</p><p><b>Paso 4.</b> La recta es $y = 3x + 5$.</p><p><b>Respuesta:</b> $y = 3x + 5$.</p><p><b>Comprobación:</b> con $x = 0$: $y = 3\cdot 0 + 5 = 5$, pasa por $(0, 5)$ ✔. Su pendiente es 3, igual que la otra ✔.</p><p><b>¿Por qué no las otras?</b> $-3x + 5$ cambia el signo: baja mientras la otra sube, así que se cortan. $\dfrac{1}{3}x + 5$ tiene otra pendiente, $\dfrac{1}{3}$ no es 3. $5x + 3$ intercambia los números: pendiente 5 y corte en 3.</p>`, conc: 'Paralelas = misma pendiente.' },
    { enun: r`<p>Considera la función $f(x) = -\dfrac{1}{2}x + 4$.</p><p>¿Cuál(es) de las siguientes afirmaciones es (son) verdadera(s)?</p><p>I) $f$ es decreciente.<br>II) Su gráfica corta al eje $X$ en $(8, 0)$.<br>III) $f(2) = 5$</p>`,
      alts: ['Solo I', 'Solo I y II', 'Solo II y III', 'I, II y III'], ok: 1,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Revisar cada afirmación por separado. En $f(x) = -\dfrac{1}{2}x + 4$, la pendiente es $m = -\dfrac{1}{2}$ y el valor de partida es $n = 4$.</p><p><b>Paso 2. Afirmación I.</b> La pendiente $-\dfrac{1}{2}$ es negativa: por cada paso a la derecha la recta baja $\dfrac{1}{2}$. Es decreciente. <b>Verdadera.</b></p><p><b>Paso 3. Afirmación II.</b> En el eje $X$ la altura es 0: $-\dfrac{1}{2}x + 4 = 0$. Resta 4: $-\dfrac{1}{2}x = -4$. Multiplica por $-2$: $x = (-4)\cdot(-2) = 8$. El punto es $(8, 0)$. <b>Verdadera.</b></p><p><b>Paso 4. Afirmación III.</b> $f(2) = -\dfrac{1}{2}\cdot 2 + 4 = -1 + 4 = 3$. Da 3, no 5. <b>Falsa.</b></p><p><b>Respuesta:</b> Solo I y II.</p><p><b>Comprobación:</b> $f(8) = -\dfrac{1}{2}\cdot 8 + 4 = -4 + 4 = 0$. ✔</p><p><b>¿Por qué no las otras?</b> "Solo I" deja fuera la II, que también es verdadera. "Solo II y III" deja fuera la I e incluye la III, que es falsa (el 5 sale de sumar $1 + 4$, olvidando el signo menos). "I, II y III" incluye la III.</p>`, conc: 'Pendiente negativa = decreciente; corte con X: iguala a 0.' },
    { enun: r`<p>En la función $f(x) = mx + n$ se aumenta el valor de $m$ y se mantiene el de $n$, con $m > 0$.</p><p>¿Qué le ocurre a su gráfica?</p>`,
      alts: ['Gira en torno al punto (0, n) y queda más inclinada.', 'Se traslada hacia arriba.', 'Se traslada hacia la derecha.', 'Queda paralela al eje X.'], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Cómo cambia la recta si $m$ aumenta y $n$ no cambia. Miramos qué hace cada número: $n$ dice dónde corta al eje $Y$ y $m$ cuánto sube por cada paso.</p><p><b>Paso 2.</b> Como $n$ no cambia, el punto $(0, n)$ queda fijo: la recta sigue pasando por ahí.</p><p><b>Paso 3.</b> Como $m$ aumenta, por cada paso a la derecha la recta sube más: queda más empinada.</p><p><b>Paso 4.</b> Un punto fijo y la recta más empinada: la recta gira en torno a ese punto.</p><p><b>Respuesta:</b> Gira en torno al punto $(0, n)$ y queda más inclinada.</p><p><b>Comprobación:</b> $y = x + 1$ e $y = 3x + 1$ pasan las dos por $(0, 1)$. En $x = 1$ la primera vale $1 + 1 = 2$ y la segunda $3 + 1 = 4$: la segunda es más empinada. ✔</p><p><b>¿Por qué no las otras?</b> Trasladarse hacia arriba pasa cuando cambia $n$, no $m$. Trasladarse hacia la derecha movería el corte con el eje $Y$, pero ese punto quedó fijo. Paralela al eje $X$ sería $m = 0$, y aquí $m$ aumenta.</p>`, conc: 'Cambia m: la recta gira. Cambia n: se traslada.' }
  ]
},

{
  id: 'afin_modelos', unit: 'Unidad 1 · Función lineal y afín', icon: '🧾',
  title: 'Modelar con funciones afines',
  desc: 'Armar el modelo con una tabla: cargo fijo más cargo por unidad, cantidades que bajan, costo, ingreso y ganancia, comparar planes y leer gráficos de situaciones.',
  slides: [
    { t: 'Lo fijo y lo que se paga por cada uno', b: r`
      <div class="cols"><div>
      <p>Muchas cuentas de la vida diaria tienen dos partes:</p>
      <p>· Un <b>cargo fijo</b>: lo que se paga <b>una sola vez</b>, uses mucho o poco.<br>· Un <b>cargo por unidad</b>: lo que se paga <b>por cada</b> página, minuto, kilómetro o video.</p>
      <p>Ejemplo: una imprenta cobra <span class="peso">$27.000</span> por preparar el trabajo (eso se paga una vez) y <span class="peso">$115</span> por cada página impresa.</p>
      <p><b>Modelar</b> es escribir esa cuenta como una fórmula, para calcular el precio de cualquier cantidad sin empezar desde cero cada vez.</p>
      </div><div>
      <div class="box"><b>La pregunta clave</b> ¿Qué se paga <b>una vez</b>? Eso es lo fijo. ¿Qué se paga <b>por cada</b> unidad? Eso es lo que se multiplica por la cantidad.</div>
      <div class="box"><b>Otros ejemplos</b> Taxi: bajada de bandera (fijo) más un precio por cada tramo. Gimnasio: matrícula (fijo) más la mensualidad de cada mes. Arriendo de bicicleta: un fijo más un precio por cada hora.</div>
      </div></div>` },
    { t: 'Armar el modelo con una tabla', b: r`
      <div class="cols"><div>
      <p>Antes de escribir la fórmula, hagamos la cuenta de la imprenta para 0, 1, 2 y 3 páginas.</p>
      <table><thead><tr><th>Páginas</th><th>Cuenta</th><th>Total</th></tr></thead><tbody>
      <tr><td>0</td><td>$27.000$</td><td>$27.000$</td></tr>
      <tr><td>1</td><td>$27.000 + 1\cdot 115$</td><td>$27.115$</td></tr>
      <tr><td>2</td><td>$27.000 + 2\cdot 115$</td><td>$27.230$</td></tr>
      <tr><td>3</td><td>$27.000 + 3\cdot 115$</td><td>$27.345$</td></tr></tbody></table>
      <p><b>Paso 1.</b> Mira la columna "Cuenta": el 27.000 está siempre; lo único que cambia es el número que multiplica a 115, y ese número es la cantidad de páginas.</p>
      <p><b>Paso 2.</b> Si son $x$ páginas, la cuenta es $27.000 + x\cdot 115$.</p>
      <p><b>Paso 3.</b> Lo ordenamos dejando adelante lo que multiplica a $x$:</p>
      $$f(x) = 115x + 27.000$$
      </div><div>
      <div class="qfig">${''}</div>
      <div class="box"><b>La forma general</b> $$f(x) = (\text{precio por unidad})\cdot x + \text{cargo fijo}$$ El precio por unidad es la <b>pendiente</b>: cuánto sube la cuenta por cada unidad más. El cargo fijo es lo que se paga con 0 unidades: donde la recta corta al eje Y.</div>
      </div></div>` },
    { t: 'Usar el modelo: calcular y despejar', b: r`
      <div class="cols"><div>
      <p><b>Pregunta 1:</b> ¿cuánto cuestan 100 páginas?</p>
      <p><b>Paso 1.</b> Nos dan la cantidad, así que reemplazamos $x = 100$: $f(100) = 115\cdot 100 + 27.000$.</p>
      <p><b>Paso 2.</b> Primero la multiplicación: $115\cdot 100 = 11.500$.</p>
      <p><b>Paso 3.</b> Después la suma: $11.500 + 27.000 = 38.500$. Cuestan <span class="peso">$38.500</span>.</p>
      <p><b>Pregunta 2:</b> pagué <span class="peso">$50.000</span>, ¿cuántas páginas imprimí?</p>
      <p><b>Paso 1.</b> Ahora nos dan el total y buscamos $x$, así que igualamos: $115x + 27.000 = 50.000$.</p>
      <p><b>Paso 2.</b> Sacamos el cargo fijo restando 27.000 a los dos lados: $115x = 50.000 - 27.000 = 23.000$.</p>
      <p><b>Paso 3.</b> Dividimos por 115: $x = \dfrac{23.000}{115} = 200$ páginas.</p>
      </div><div>
      <div class="box"><b>Comprobación</b> $f(200) = 115\cdot 200 + 27.000 = 23.000 + 27.000 = 50.000$. ✔</div>
      <div class="box alert"><b>Errores típicos</b><br>· Escribir $(115 + 27.000)x$: cobra el cargo fijo en cada página.<br>· Escribir $115 + 27.000x$: cambia lo fijo por lo variable.<br>· Hacer $\dfrac{50.000}{115}$ sin restar antes el cargo fijo.</div>
      </div></div>` },
    { t: 'Cuidado con la unidad del cobro', b: r`
      <div class="cols"><div>
      <p>A veces el precio no es "por cada hora", sino "por cada media hora" o "por cada 200 metros". Primero hay que contar cuántas de esas unidades hay.</p>
      <p>Ejemplo: arrendar una bicicleta cuesta <span class="peso">$1.500</span> fijos más <span class="peso">$400</span> por cada media hora. ¿Cuánto se paga por 2 horas?</p>
      <p><b>Paso 1.</b> Contamos medias horas: una hora tiene 2 medias horas, así que 2 horas son $2\cdot 2 = 4$ medias horas.</p>
      <p><b>Paso 2.</b> Lo que se paga por las medias horas: $4\cdot 400 = 1.600$.</p>
      <p><b>Paso 3.</b> Le sumamos lo fijo: $1.500 + 1.600 = 3.100$. Se pagan <span class="peso">$3.100</span>.</p>
      </div><div>
      <div class="box alert"><b>Error típico</b> Hacer $2\cdot 400 = 800$, como si cobraran por hora. Da $1.500 + 800 = 2.300$, que está mal.</div>
      <div class="box"><b>Consejo</b> Antes de multiplicar, completa la frase "cobran por cada ___" y luego cuenta cuántos ___ hay.</div>
      </div></div>` },
    { t: 'Cantidades que disminuyen', b: r`
      <div class="cols"><div>
      <p>Un estanque tiene 720 litros y se vacía a 3 litros por minuto. Ahora la cantidad <b>baja</b>: cada minuto se <b>resta</b> 3.</p>
      <table><thead><tr><th>Minutos</th><th>Cuenta</th><th>Litros</th></tr></thead><tbody>
      <tr><td>0</td><td>$720$</td><td>$720$</td></tr>
      <tr><td>1</td><td>$720 - 1\cdot 3$</td><td>$717$</td></tr>
      <tr><td>2</td><td>$720 - 2\cdot 3$</td><td>$714$</td></tr>
      <tr><td>3</td><td>$720 - 3\cdot 3$</td><td>$711$</td></tr></tbody></table>
      <p><b>Paso 1.</b> Lo que se resta es 3 por la cantidad de minutos.</p>
      <p><b>Paso 2.</b> Con $x$ minutos quedan $720 - 3x$ litros. Ordenado:</p>
      $$f(x) = -3x + 720$$
      <p>La pendiente es $-3$, negativa, porque el agua disminuye. El 720 es lo que había al comienzo.</p>
      </div><div>
      <div class="qfig">${''}</div>
      <div class="box"><b>Cómo reconocerlo</b> Palabras como "se vacía", "se gasta", "se consume" o "pierde" indican que la cantidad baja: el número que multiplica a $x$ lleva signo menos.</div>
      </div></div>` },
    { t: '¿Cuándo llega a cierto valor?', b: r`
      <div class="cols"><div>
      <p><b>Pregunta 1:</b> ¿a los cuántos minutos quedan 600 litros?</p>
      <p><b>Paso 1.</b> Nos dan el resultado (600) y buscamos los minutos, así que igualamos: $720 - 3x = 600$.</p>
      <p><b>Paso 2.</b> ¿Cuánta agua salió? $720 - 600 = 120$ litros. O sea, $3x = 120$.</p>
      <p><b>Paso 3.</b> Dividimos por 3: $x = \dfrac{120}{3} = 40$ minutos.</p>
      <p><b>Pregunta 2:</b> ¿cuándo queda vacío?</p>
      <p><b>Paso 1.</b> Vacío quiere decir 0 litros: $720 - 3x = 0$.</p>
      <p><b>Paso 2.</b> Salió toda el agua: $3x = 720$.</p>
      <p><b>Paso 3.</b> Dividimos por 3: $x = \dfrac{720}{3} = 240$ minutos.</p>
      </div><div>
      <div class="box"><b>Comprobación</b> $f(40) = 720 - 3\cdot 40 = 720 - 120 = 600$ ✔<br>$f(240) = 720 - 3\cdot 240 = 720 - 720 = 0$ ✔</div>
      <div class="box alert"><b>No confundas</b> 240 son <b>minutos</b> (cuándo se vacía). Los litros del comienzo son 720.</div>
      </div></div>` },
    { t: 'Aumentos iguales cada año', b: r`
      <div class="cols"><div>
      <p>Un pueblo tenía 4.300 habitantes en 2020 y 4.450 en 2021. Si aumenta lo mismo cada año, ¿cuántos tendrá en 2028?</p>
      <p><b>Paso 1.</b> Aumento de un año: $4.450 - 4.300 = 150$ habitantes.</p>
      <table><thead><tr><th>Año</th><th>Años desde 2020</th><th>Habitantes</th></tr></thead><tbody>
      <tr><td>2020</td><td>0</td><td>$4.300$</td></tr>
      <tr><td>2021</td><td>1</td><td>$4.300 + 1\cdot 150 = 4.450$</td></tr>
      <tr><td>2022</td><td>2</td><td>$4.300 + 2\cdot 150 = 4.600$</td></tr>
      <tr><td>2023</td><td>3</td><td>$4.300 + 3\cdot 150 = 4.750$</td></tr></tbody></table>
      <p><b>Paso 2.</b> Contamos los años que pasan: $2028 - 2020 = 8$.</p>
      <p><b>Paso 3.</b> Aumento total: $8\cdot 150 = 1.200$.</p>
      <p><b>Paso 4.</b> Lo sumamos a lo inicial: $4.300 + 1.200 = 5.500$ habitantes.</p>
      </div><div>
      <div class="box"><b>Es el mismo modelo</b> Con $x$ = años desde 2020: $P(x) = 150x + 4.300$. Lo inicial hace de cargo fijo y el aumento anual hace de precio por unidad.</div>
      <div class="box alert"><b>Cuenta bien los años</b> De 2020 a 2028 hay $2028 - 2020 = 8$ aumentos, no 9. De 2020 a 2021 hay un solo aumento.</div>
      </div></div>` },
    { t: 'Si te dan dos datos', b: r`
      <div class="cols"><div>
      <p>Un gasfíter cobra un fijo por la visita más un tanto por hora. Por 2 horas cobró <span class="peso">$35.000</span> y por 5 horas, <span class="peso">$65.000</span>. ¿Cuál es el fijo y cuánto cobra por hora?</p>
      <p><b>Paso 1.</b> Comparamos los dos trabajos: $5 - 2 = 3$ horas más y $65.000 - 35.000 = 30.000$ pesos más. El fijo se pagó en los dos, así que esos 30.000 son solo las 3 horas extra.</p>
      <p><b>Paso 2.</b> Por hora: $\dfrac{30.000}{3} = 10.000$.</p>
      <p><b>Paso 3.</b> En el trabajo de 2 horas, las horas costaron $2\cdot 10.000 = 20.000$.</p>
      <p><b>Paso 4.</b> El resto es el fijo: $35.000 - 20.000 = 15.000$.</p>
      <p><b>Paso 5.</b> El modelo es $f(x) = 10.000x + 15.000$.</p>
      </div><div>
      <div class="box"><b>Comprobación</b> $f(5) = 10.000\cdot 5 + 15.000 = 50.000 + 15.000 = 65.000$. ✔</div>
      <div class="box"><b>Esto es la pendiente</b> Lo que hiciste en los pasos 1 y 2 es calcular la pendiente: $$m = \dfrac{65.000 - 35.000}{5 - 2} = \dfrac{30.000}{3} = 10.000$$</div>
      </div></div>` },
    { t: 'Costo, ingreso y ganancia', b: r`
      <div class="cols"><div>
      <p>Tres palabras que la PAES usa mucho:</p>
      <p>· <b>Costo</b> $C$: lo que se <b>gasta</b> para producir o vender.<br>· <b>Ingreso</b> $I$: lo que <b>entra</b> por las ventas.<br>· <b>Ganancia</b> $G$: lo que <b>queda</b>, o sea, lo que entra menos lo que se gasta: $G = I - C$.</p>
      <p>Ejemplo: en un puesto de empanadas el arriendo del puesto es <span class="peso">$20.000</span>, hacer cada empanada cuesta <span class="peso">$600</span> y cada una se vende a <span class="peso">$1.500</span>. Sea $x$ la cantidad de empanadas vendidas.</p>
      <p><b>Paso 1.</b> Costo: el arriendo se paga una vez y los 600 por cada empanada: $C(x) = 600x + 20.000$.</p>
      <p><b>Paso 2.</b> Ingreso: entran 1.500 por cada empanada: $I(x) = 1.500x$.</p>
      </div><div>
      <div class="qfig">${''}</div>
      </div></div>` },
    { t: 'Calcular la ganancia', b: r`
      <div class="cols"><div>
      <p>Seguimos con las empanadas: $I(x) = 1.500x$ y $C(x) = 600x + 20.000$.</p>
      <p><b>Paso 1.</b> Ganancia es ingreso menos costo, con el costo completo entre paréntesis: $G(x) = 1.500x - (600x + 20.000)$.</p>
      <p><b>Paso 2.</b> El menos afecta a todo el paréntesis: $G(x) = 1.500x - 600x - 20.000$.</p>
      <p><b>Paso 3.</b> Juntamos los términos con $x$: $1.500x - 600x = 900x$. Queda $G(x) = 900x - 20.000$.</p>
      <p><b>Paso 4.</b> Con 30 empanadas: $G(30) = 900\cdot 30 - 20.000 = 27.000 - 20.000 = 7.000$. Gana <span class="peso">$7.000</span>.</p>
      </div><div>
      <div class="box"><b>¿Desde cuántas empanadas gana?</b> $900x = 20.000$ da $x = \dfrac{20.000}{900} \approx 22{,}2$. Con 22: $900\cdot 22 - 20.000 = 19.800 - 20.000 = -200$ (pierde). Con 23: $900\cdot 23 - 20.000 = 20.700 - 20.000 = 700$ (gana). Desde 23 empanadas.</div>
      <div class="box alert"><b>Error típico</b> Olvidar el paréntesis y escribir $1.500x - 600x + 20.000$: así el arriendo se suma en vez de restarse.</div>
      </div></div>` },
    { t: 'Si te piden el costo', b: r`
      <div class="cols"><div>
      <p>A veces dan el ingreso y la ganancia, y piden el costo.</p>
      <p><b>Paso 1.</b> Pensemos con números chicos: si entraron 10 y quedaron 3 de ganancia, se gastaron $10 - 3 = 7$. O sea, costo es ingreso menos ganancia: $C = I - G$.</p>
      <p><b>Paso 2.</b> Con las empanadas: $I(x) = 1.500x$ y $G(x) = 900x - 20.000$. Entonces $C(x) = 1.500x - (900x - 20.000)$.</p>
      <p><b>Paso 3.</b> El menos cambia el signo de todo lo de adentro: $C(x) = 1.500x - 900x + 20.000$.</p>
      <p><b>Paso 4.</b> Juntamos los términos con $x$: $C(x) = 600x + 20.000$. Volvimos al costo del puesto. ✔</p>
      </div><div>
      <div class="box alert"><b>Menos por menos</b> Restar un número negativo es sumar: $-(-20.000) = +20.000$. Es el error más común en este tipo de pregunta.</div>
      <div class="box"><b>Para recordar</b> $G = I - C$ y $C = I - G$. En las dos, el ingreso va primero.</div>
      </div></div>` },
    { t: 'Comparar dos planes: la tabla', b: r`
      <div class="cols"><div>
      <p>Plan A: <span class="peso">$6.000</span> fijos más <span class="peso">$30</span> por minuto. Plan B: <span class="peso">$80</span> por minuto, sin cargo fijo.</p>
      <p><b>Paso 1.</b> Escribimos cada plan: $A(x) = 30x + 6.000$ y $B(x) = 80x$.</p>
      <p><b>Paso 2.</b> Probamos algunos minutos:</p>
      <table><thead><tr><th>Minutos</th><th>Plan A</th><th>Plan B</th></tr></thead><tbody>
      <tr><td>0</td><td>$6.000$</td><td>$0$</td></tr>
      <tr><td>100</td><td>$3.000 + 6.000 = 9.000$</td><td>$8.000$</td></tr>
      <tr><td>200</td><td>$6.000 + 6.000 = 12.000$</td><td>$16.000$</td></tr></tbody></table>
      <p><b>Paso 3.</b> Con 100 minutos conviene B; con 200, conviene A. Así que en algún punto entre 100 y 200 los dos cuestan lo mismo.</p>
      </div><div>
      <div class="qfig">${''}</div>
      <div class="box"><b>¿Por qué cambian?</b> B parte en 0 pero sube 80 por minuto; A parte en 6.000 pero sube solo 30. Al principio gana B, y con muchos minutos gana A.</div>
      </div></div>` },
    { t: 'Comparar dos planes: igualar', b: r`
      <div class="cols"><div>
      <p>Para hallar dónde cuestan lo mismo, igualamos las dos fórmulas.</p>
      <p><b>Paso 1.</b> $30x + 6.000 = 80x$.</p>
      <p><b>Paso 2.</b> Restamos $30x$ a los dos lados para juntar las $x$: $6.000 = 80x - 30x = 50x$.</p>
      <p><b>Paso 3.</b> Dividimos por 50: $x = \dfrac{6.000}{50} = 120$ minutos.</p>
      <p><b>Paso 4.</b> Conclusión: con menos de 120 minutos conviene B; con más de 120 minutos conviene A.</p>
      </div><div>
      <div class="box"><b>Comprobación</b> $A(120) = 30\cdot 120 + 6.000 = 3.600 + 6.000 = 9.600$ y $B(120) = 80\cdot 120 = 9.600$. Iguales. ✔</div>
      <div class="box alert"><b>Si sale con decimales</b> Si al igualar sale, por ejemplo, $x \approx 333{,}3$ y preguntan por minutos enteros, el cambio ocurre en el entero siguiente: 334.</div>
      </div></div>` },
    { t: 'Leer gráficos de situaciones', b: r`
      <div class="cols"><div>
      <p>Un gráfico distancia-tiempo cuenta un viaje. En el eje horizontal va el tiempo; en el vertical, los kilómetros recorridos desde la partida.</p>
      <p>Qué mirar en cada tramo:</p>
      <p>· Si <b>sube</b>: el auto avanza.<br>· Si es <b>horizontal</b> (plano): pasa el tiempo pero los kilómetros no cambian, así que está detenido.<br>· Si es <b>más inclinado</b>: avanza más kilómetros en el mismo tiempo, o sea, va más rápido.</p>
      <p>Para leer un punto: parte en el tiempo que te interesa en el eje horizontal, sube derecho hasta tocar la línea y mira a la izquierda cuántos kilómetros marca.</p>
      </div><div>
      <div class="qfig">${''}</div>
      <div class="box"><b>Si cambia el ritmo, cambia la inclinación</b> Si una máquina pinta un muro y después de 4 horas se suma otra igual de rápida, desde ese momento se pinta el doble por hora: la línea sigue, pero el doble de inclinada.</div>
      </div></div>` },
    { t: 'Calcular la rapidez de cada tramo', b: r`
      <div class="cols"><div>
      <p>La <b>rapidez</b> de un tramo es cuántos kilómetros avanzó dividido por cuántas horas duró. Es la pendiente del tramo.</p>
      <p><b>Paso 1.</b> Tramo de 0 a 1 h: sube de 0 a 60 km. Avanzó $60 - 0 = 60$ km en $1 - 0 = 1$ h. Rapidez: $\dfrac{60}{1} = 60$ km/h.</p>
      <p><b>Paso 2.</b> Tramo de 1 a 2,5 h: se queda en 60 km. Estuvo detenido $2{,}5 - 1 = 1{,}5$ horas.</p>
      <p><b>Paso 3.</b> Tramo de 2,5 a 4 h: sube de 60 a 180 km. Avanzó $180 - 60 = 120$ km en $4 - 2{,}5 = 1{,}5$ h. Rapidez: $\dfrac{120}{1{,}5} = 80$ km/h.</p>
      <p><b>Paso 4.</b> Comparamos: 80 es más que 60; por eso el último tramo se ve más inclinado que el primero.</p>
      </div><div>
      <div class="qfig">${''}</div>
      <div class="box alert"><b>Distancia total</b> Es la altura del último punto: 180 km. No se suman las alturas de los puntos ($60 + 60 + 180$), porque cada punto ya muestra todo lo recorrido hasta ese momento.</div>
      </div></div>` },
    { t: 'Resumen', b: r`
      <table><thead><tr><th>Situación</th><th>Qué hacer</th></tr></thead><tbody>
      <tr><td>Fijo + por unidad</td><td>$f(x) = (\text{precio por unidad})\cdot x + \text{fijo}$</td></tr>
      <tr><td>Disminuye a ritmo constante</td><td>$f(x) = \text{inicial} - (\text{ritmo})\cdot x$</td></tr>
      <tr><td>Me dan el total y piden la cantidad</td><td>igualar al total, restar lo fijo y dividir</td></tr>
      <tr><td>Me dan dos datos</td><td>por unidad $= \dfrac{\text{diferencia de totales}}{\text{diferencia de cantidades}}$; luego despejar lo fijo</td></tr>
      <tr><td>Ganancia y costo</td><td>$G = I - C$ y $C = I - G$, con paréntesis</td></tr>
      <tr><td>¿Cuándo cuestan igual?</td><td>igualar las dos fórmulas y despejar $x$</td></tr>
      <tr><td>Gráfico de un viaje</td><td>plano: detenido; más inclinado: más rápido</td></tr></tbody></table>
      <div class="box" style="margin-top:14px"><b>Método PAES</b> Antes de marcar, prueba tu fórmula con 0 y con 1 unidad: con $x = 0$ debe dar lo fijo (o lo que había al comienzo), y con $x = 1$ debe sumar (o restar) una sola vez el precio por unidad. Si no calza, la fórmula está mal.</div>` }
  ],
  example: {
    src: 'PAES Invierno 2027',
    enun: r`<p>Una empresa contrata a una persona para que publique videos mostrando los beneficios de sus productos. La empresa le paga <span class="peso">$150.000</span>, más <span class="peso">$100.000</span> por cada video publicado.</p><p>¿Cuál de las siguientes funciones modela el dinero que recibirá la persona tras publicar $x$ videos para la empresa?</p>`,
    alts: [r`$f(x) = 150.000x + 100.000$`, r`$g(x) = 100.000x + 150.000$`, r`$h(x) = 100.000\cdot(x + 150.000)$`, r`$k(x) = x\cdot(100.000 + 150.000)$`], ok: 1,
    sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Una fórmula que diga cuánto dinero recibe la persona según la cantidad $x$ de videos. Para armarla separamos lo que se paga una sola vez de lo que se paga por cada video.</p><p><b>Paso 2.</b> Lo fijo: los <span class="peso">$150.000</span> se pagan una vez, publique muchos o pocos videos. Se suman una sola vez.</p><p><b>Paso 3.</b> Lo variable: <span class="peso">$100.000</span> por cada video. Con $x$ videos son $100.000\cdot x$.</p><p><b>Paso 4.</b> Hacemos la tabla. Con 0 videos: $150.000$. Con 1 video: $150.000 + 100.000 = 250.000$. Con 2 videos: $150.000 + 2\cdot 100.000 = 150.000 + 200.000 = 350.000$. Con $x$ videos: $150.000 + 100.000x$.</p><p><b>Paso 5.</b> Ordenado, con lo que multiplica a $x$ adelante: $100.000x + 150.000$.</p><p><b>Respuesta:</b> $g(x) = 100.000x + 150.000$, la segunda alternativa.</p><p><b>Comprobación:</b> $g(0) = 100.000\cdot 0 + 150.000 = 150.000$ ✔ (sin videos recibe solo lo fijo) y $g(2) = 200.000 + 150.000 = 350.000$ ✔, igual que en la tabla.</p><p><b>¿Por qué no las otras?</b> $f$ intercambia lo fijo con lo variable: $f(2) = 300.000 + 100.000 = 400.000$, no 350.000. $h$ multiplica el fijo por 100.000: $h(0) = 100.000\cdot 150.000$, una cantidad absurda. $k$ paga el fijo por cada video: $k(0) = 0$ (sin videos no recibiría los 150.000) y $k(2) = 2\cdot 250.000 = 500.000$.</p>`,
    conc: 'Lo que se paga por cada video multiplica a x; lo fijo se suma una sola vez.'
  },
  bank: [
    { enun: r`<p>Un estanque contiene 720 litros de agua y, cada vez que se abre la llave, se vacía a razón de 3 litros por minuto.</p><p>¿Cuál de las siguientes funciones modela la cantidad de agua que queda en el estanque, si $x$ son los minutos transcurridos desde que se abre la llave?</p>`, src: 'PAES Regular 2026',
      alts: [r`$f(x) = -3x + 720$`, r`$g(x) = 3x - 720$`, r`$p(x) = \dfrac{x - 720}{3}$`, r`$h(x) = \dfrac{-x + 720}{3}$`], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Una fórmula para los litros que quedan después de $x$ minutos. El estanque parte con 720 litros y pierde 3 por minuto; como el agua baja, cada minuto se resta 3.</p><p><b>Paso 2.</b> Hacemos la tabla. Con 0 minutos: 720. Con 1 minuto: $720 - 3 = 717$. Con 2 minutos: $720 - 2\cdot 3 = 720 - 6 = 714$. Con 3 minutos: $720 - 3\cdot 3 = 720 - 9 = 711$.</p><p><b>Paso 3.</b> Lo que se resta es 3 por la cantidad de minutos. Con $x$ minutos quedan $720 - 3x$ litros.</p><p><b>Paso 4.</b> Ordenado: $-3x + 720$.</p><p><b>Respuesta:</b> $f(x) = -3x + 720$, la primera alternativa.</p><p><b>Comprobación:</b> $f(0) = -3\cdot 0 + 720 = 720$ ✔ (lo del comienzo) y $f(1) = -3 + 720 = 717$ ✔ (perdió 3 litros).</p><p><b>¿Por qué no las otras?</b> $g(0) = 3\cdot 0 - 720 = -720$: no puede haber litros negativos, y además $g$ sube en vez de bajar. $p(0) = \dfrac{0 - 720}{3} = -240$, también negativo. $h(0) = \dfrac{720}{3} = 240$: eso son los minutos que tarda en vaciarse, no los litros; $p$ y $h$ dividen por 3 en vez de multiplicar.</p>`, conc: 'Si la cantidad baja, el número que multiplica a x es negativo, y con x = 0 debe dar lo inicial.' },
    { enun: r`<p>En el año 2021 se produjeron 57,4 millones de toneladas de basura tecnológica y en el año 2022, 59,4 millones.</p><p>Si el aumento es el mismo cada año, ¿cuántos millones de toneladas se producirían en el año 2030?</p>`, src: 'PAES Invierno 2026',
      alts: ['77,4', '75,4', '73,4', '71,4'], ok: 1,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> La cantidad del año 2030. Nos dan dos años seguidos y nos dicen que el aumento es igual cada año, así que calculamos cuánto aumenta en un año y cuántos años pasan.</p><p><b>Paso 2.</b> Aumento de un año: $59{,}4 - 57{,}4 = 2$ millones.</p><p><b>Paso 3.</b> Años que pasan desde 2021 hasta 2030: $2030 - 2021 = 9$. Son 9 aumentos.</p><p><b>Paso 4.</b> Aumento total: $9\cdot 2 = 18$ millones.</p><p><b>Paso 5.</b> Lo sumamos a lo de 2021: $57{,}4 + 18 = 75{,}4$.</p><p><b>Respuesta:</b> 75,4 millones de toneladas, la segunda alternativa.</p><p><b>Comprobación:</b> Partiendo de 2022: $2030 - 2022 = 8$ años, y $59{,}4 + 8\cdot 2 = 59{,}4 + 16 = 75{,}4$ ✔.</p><p><b>¿Por qué no las otras?</b> 77,4 es $57{,}4 + 10\cdot 2$: cuenta 10 aumentos, uno de más. 73,4 es $57{,}4 + 8\cdot 2$: cuenta 8 aumentos desde 2021, uno de menos. 71,4 es $57{,}4 + 7\cdot 2$: cuenta 7 aumentos.</p>`, conc: 'Cuenta bien los años: de 2021 a 2030 hay 9 aumentos.' },
    { enun: r`<p>El ingreso y la ganancia de una empresa, en pesos, se modelan según la cantidad $x$ de artículos producidos:</p><p>· Ingreso: $I(x) = 1000x + 600.000$<br>· Ganancia: $G(x) = 750x + 450.000$</p><p>Si $G(x) = I(x) - C(x)$, ¿cuál es la función de costo $C$?</p>`, src: 'PAES Regular 2026',
      alts: [r`$C(x) = 250x + 150.000$`, r`$C(x) = 250x - 150.000$`, r`$C(x) = 1750x - 1.050.000$`, r`$C(x) = 1750x + 1.050.000$`], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El costo $C$. Nos dan el ingreso y la ganancia. Como la ganancia es lo que entra menos lo que se gasta, lo que se gastó es lo que entró menos lo que se ganó: $C = I - G$. (Con números chicos: si entran 10 y se ganan 3, se gastaron $10 - 3 = 7$.)</p><p><b>Paso 2.</b> Reemplazamos, cada función completa entre paréntesis: $C(x) = (1000x + 600.000) - (750x + 450.000)$.</p><p><b>Paso 3.</b> El menos afecta a todo el segundo paréntesis: $C(x) = 1000x + 600.000 - 750x - 450.000$.</p><p><b>Paso 4.</b> Juntamos los términos con $x$: $1000x - 750x = 250x$.</p><p><b>Paso 5.</b> Juntamos los números solos: $600.000 - 450.000 = 150.000$.</p><p><b>Respuesta:</b> $C(x) = 250x + 150.000$, la primera alternativa.</p><p><b>Comprobación:</b> $I(x) - C(x) = (1000x + 600.000) - (250x + 150.000) = 750x + 450.000$, que es justo $G(x)$ ✔.</p><p><b>¿Por qué no las otras?</b> $250x - 150.000$ resta bien los términos con $x$ pero se equivoca en el signo del número solo. $1750x + 1.050.000$ es $I + G$: suma en vez de restar. $1750x - 1.050.000$ también suma $1000 + 750$ y además le cambia el signo al número solo.</p>`, conc: 'Si G = I − C, entonces C = I − G, restando todo el paréntesis.' },
    { enun: r`<p>Un taxi cobra <span class="peso">$500</span> de bajada de bandera más <span class="peso">$150</span> por cada 200 metros recorridos.</p><p>¿Cuánto cuesta un viaje de 3 km?</p>`,
      alts: ['<span class="peso">$2750</span>', '<span class="peso">$950</span>', '<span class="peso">$2250</span>', '<span class="peso">$2900</span>'], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El precio de un viaje de 3 km. El taxi cobra un fijo (la bajada de bandera) y un precio por cada 200 metros, así que primero contamos cuántos tramos de 200 metros hay en 3 km.</p><p><b>Paso 2.</b> Pasamos a metros: un kilómetro tiene 1000 metros, así que $3\cdot 1000 = 3000$ metros.</p><p><b>Paso 3.</b> Contamos los tramos: $\dfrac{3000}{200} = 15$ tramos.</p><p><b>Paso 4.</b> Lo que se paga por los tramos: $15\cdot 150 = 2250$.</p><p><b>Paso 5.</b> Le sumamos la bajada de bandera: $500 + 2250 = 2750$.</p><p><b>Respuesta:</b> <span class="peso">$2750</span>, la primera alternativa.</p><p><b>Comprobación:</b> Hacia atrás: $2750 - 500 = 2250$; $\dfrac{2250}{150} = 15$ tramos; $15\cdot 200 = 3000$ metros, que son 3 km ✔.</p><p><b>¿Por qué no las otras?</b> 950 es $500 + 3\cdot 150 = 500 + 450$: cobra 150 por kilómetro en vez de por cada 200 metros. 2250 olvida sumar la bajada de bandera. 2900 es $500 + 16\cdot 150 = 500 + 2400$: cuenta un tramo de más.</p>`, conc: 'Primero cuenta cuántas unidades del cobro hay (tramos de 200 m) y después multiplica.' },
    { enun: r`<p>El plan A de un celular cobra <span class="peso">$10.000</span> fijos más <span class="peso">$20</span> por minuto, y el plan B cobra <span class="peso">$50</span> por minuto, sin cargo fijo.</p><p>¿Desde cuántos minutos enteros el plan A es más barato que el B?</p>`,
      alts: ['Desde 334 minutos', 'Desde 200 minutos', 'Desde 500 minutos', 'Desde 143 minutos'], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Desde cuántos minutos conviene el plan A. Armamos el precio de cada plan, los igualamos para ver dónde cuestan lo mismo y después vemos qué pasa con más minutos.</p><p><b>Paso 2.</b> Plan A: $A(x) = 20x + 10.000$. Plan B: $B(x) = 50x$.</p><p><b>Paso 3.</b> Igualamos: $20x + 10.000 = 50x$.</p><p><b>Paso 4.</b> Restamos $20x$ a los dos lados para juntar las $x$: $10.000 = 50x - 20x = 30x$.</p><p><b>Paso 5.</b> Dividimos por 30: $x = \dfrac{10.000}{30} \approx 333{,}3$ minutos.</p><p><b>Paso 6.</b> Antes de ese punto conviene B (parte en 0); después conviene A (sube solo 20 por minuto, en vez de 50). Como piden minutos enteros, el primero después de 333,3 es 334.</p><p><b>Respuesta:</b> desde 334 minutos, la primera alternativa.</p><p><b>Comprobación:</b> Con 333 minutos: $A = 20\cdot 333 + 10.000 = 6.660 + 10.000 = 16.660$ y $B = 50\cdot 333 = 16.650$; todavía B es más barato. Con 334 minutos: $A = 20\cdot 334 + 10.000 = 6.680 + 10.000 = 16.680$ y $B = 50\cdot 334 = 16.700$; ahora A es más barato ✔.</p><p><b>¿Por qué no las otras?</b> 200 es $\dfrac{10.000}{50}$: olvida los 20 por minuto del plan A. 500 es $\dfrac{10.000}{20}$: olvida el plan B. 143 es $\dfrac{10.000}{70} \approx 142{,}9$: suma $50 + 20$ en vez de restar.</p>`, conc: 'Iguala los dos planes completos y, si sale con decimales, toma el entero siguiente.' },
    { enun: r`<p>Una vela de 30 cm se consume a razón de 2 cm por hora.</p><p>¿Después de cuántas horas medirá 12 cm?</p>`,
      alts: ['9 horas', '6 horas', '21 horas', '15 horas'], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Las horas que pasan hasta que la vela mide 12 cm. Nos dan la altura final y buscamos el tiempo, así que armamos el modelo, lo igualamos a 12 y despejamos.</p><p><b>Paso 2.</b> Tabla: con 0 horas mide 30; con 1 hora, $30 - 2 = 28$; con 2 horas, $30 - 2\cdot 2 = 26$. Con $t$ horas mide $h(t) = 30 - 2t$.</p><p><b>Paso 3.</b> Igualamos a 12: $30 - 2t = 12$.</p><p><b>Paso 4.</b> ¿Cuántos centímetros se consumieron? $30 - 12 = 18$. O sea, $2t = 18$.</p><p><b>Paso 5.</b> Dividimos por 2: $t = \dfrac{18}{2} = 9$ horas.</p><p><b>Respuesta:</b> 9 horas, la primera alternativa.</p><p><b>Comprobación:</b> $h(9) = 30 - 2\cdot 9 = 30 - 18 = 12$ ✔.</p><p><b>¿Por qué no las otras?</b> 6 horas es $\dfrac{12}{2}$: divide lo que queda, no lo que se consumió. 21 horas es $\dfrac{30 + 12}{2}$: suma en vez de restar. 15 horas es $\dfrac{30}{2}$: lo que tarda en consumirse entera.</p>`, conc: 'Modelo: lo inicial menos el ritmo por el tiempo; se iguala al valor pedido.' },
    { enun: r`<p>El gráfico muestra la distancia, en km, recorrida por un automóvil según el tiempo, en horas.</p><p>¿Cuál de las siguientes afirmaciones es verdadera?</p>`,
      fig: { type: 'plot', x: [0, 5, 1], y: [0, 200, 40], xlab: 't (h)', ylab: 'km', fns: [{ pts: [[0, 0], [2, 120], [3, 120], [5, 200]] }] },
      alts: ['En las primeras 2 horas viajó a 60 km/h.', 'Estuvo detenido 3 horas.', 'Entre las 3 y las 5 horas viajó más rápido que al inicio.', 'Recorrió 320 km en total.'], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Cuál afirmación es verdadera. Hay que leer cada tramo del gráfico: si es plano el auto está detenido, y la rapidez es kilómetros avanzados divididos por las horas del tramo.</p><p><b>Paso 2.</b> Leemos las esquinas: partiendo en cada tiempo del eje horizontal, subimos hasta la línea y miramos a la izquierda. Quedan los puntos $(0, 0)$, $(2, 120)$, $(3, 120)$ y $(5, 200)$.</p><p><b>Paso 3.</b> Primera afirmación. De 0 a 2 horas avanzó $120 - 0 = 120$ km en $2 - 0 = 2$ horas: $\dfrac{120}{2} = 60$ km/h. Verdadera.</p><p><b>Paso 4.</b> Segunda afirmación. El tramo plano va de 2 a 3 horas: estuvo detenido $3 - 2 = 1$ hora, no 3. Falsa.</p><p><b>Paso 5.</b> Tercera afirmación. De 3 a 5 horas avanzó $200 - 120 = 80$ km en $5 - 3 = 2$ horas: $\dfrac{80}{2} = 40$ km/h. Es menos que 60, así que fue más lento. Falsa.</p><p><b>Paso 6.</b> Cuarta afirmación. La distancia total es la altura del último punto: 200 km. Falsa.</p><p><b>Respuesta:</b> "En las primeras 2 horas viajó a 60 km/h", la primera alternativa.</p><p><b>Comprobación:</b> Sumando lo avanzado en cada tramo: $120 + 0 + 80 = 200$ km, igual a la altura final ✔.</p><p><b>¿Por qué no las otras?</b> "3 horas detenido" confunde el instante en que termina la pausa (las 3 h) con lo que duró (1 h). "Más rápido al final" no mira la inclinación: el último tramo es menos inclinado. "320 km" suma dos alturas, $120 + 200$, pero cada punto ya muestra el total recorrido hasta ese momento.</p>`, conc: 'Tramo plano es detenido; la rapidez es km avanzados dividido por horas del tramo.' },
    { enun: r`<p>La temperatura en grados Fahrenheit se obtiene de la temperatura en grados Celsius con $F(C) = 1{,}8C + 32$.</p><p>¿A cuántos °F equivalen 25 °C?</p>`,
      alts: ['77 °F', '45 °F', '57 °F', '102,6 °F'], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Pasar 25 °C a Fahrenheit. Nos dan la fórmula y el valor de $C$, así que reemplazamos y calculamos, primero la multiplicación y después la suma.</p><p><b>Paso 2.</b> Reemplazamos $C = 25$: $F(25) = 1{,}8\cdot 25 + 32$.</p><p><b>Paso 3.</b> Multiplicación: $1{,}8\cdot 25 = 45$ (porque $18\cdot 25 = 450$ y luego se divide por 10).</p><p><b>Paso 4.</b> Suma: $45 + 32 = 77$.</p><p><b>Respuesta:</b> 77 °F, la primera alternativa.</p><p><b>Comprobación:</b> Hacia atrás: $77 - 32 = 45$ y $\dfrac{45}{1{,}8} = 25$ ✔.</p><p><b>¿Por qué no las otras?</b> 45 °F olvida sumar 32. 57 °F es $25 + 32$: olvida multiplicar por 1,8. 102,6 °F es $1{,}8\cdot(25 + 32) = 1{,}8\cdot 57$: suma antes de multiplicar.</p>`, conc: 'Primero la multiplicación, después la suma.' },
    { enun: r`<p>Para calcular el valor de la estadía en dos estacionamientos se usa $p\cdot(t - 15)$, donde $p$ es la tarifa por minuto y $t$ los minutos de estadía. El estacionamiento R cobra <span class="peso">$16</span> por minuto y el Q, <span class="peso">$30</span> por minuto.</p><p>En una estadía de 55 minutos, ¿cuánto más caro es Q que R?</p>`, src: 'PAES Invierno 2027',
      alts: ['<span class="peso">$1200</span>', '<span class="peso">$770</span>', '<span class="peso">$640</span>', '<span class="peso">$560</span>'], ok: 3,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> La diferencia entre lo que cobra Q y lo que cobra R por 55 minutos. En la fórmula $p\cdot(t - 15)$, el paréntesis $t - 15$ quiere decir que los primeros 15 minutos no se cobran. Calculamos cada cobro y los restamos.</p><p><b>Paso 2.</b> Minutos que se cobran: $55 - 15 = 40$.</p><p><b>Paso 3.</b> Estacionamiento R: $16\cdot 40 = 640$.</p><p><b>Paso 4.</b> Estacionamiento Q: $30\cdot 40 = 1200$.</p><p><b>Paso 5.</b> Diferencia: $1200 - 640 = 560$.</p><p><b>Respuesta:</b> <span class="peso">$560</span>, la cuarta alternativa.</p><p><b>Comprobación:</b> Por cada minuto cobrado, Q cobra $30 - 16 = 14$ pesos más; en 40 minutos son $14\cdot 40 = 560$ ✔.</p><p><b>¿Por qué no las otras?</b> 1200 es lo que cobra Q, no la diferencia. 640 es lo que cobra R. 770 es $14\cdot 55$: olvida que los primeros 15 minutos no se cobran.</p>`, conc: 'Lee la fórmula completa: aquí los primeros 15 minutos no se cobran.' },
    { enun: r`<p>Un gimnasio cobra una matrícula más una mensualidad fija. Por 3 meses se pagan <span class="peso">$55.000</span> en total y por 7 meses, <span class="peso">$115.000</span>.</p><p>¿Cuánto cuesta la matrícula?</p>`,
      alts: ['<span class="peso">$10.000</span>', '<span class="peso">$15.000</span>', '<span class="peso">$18.333</span>', '<span class="peso">$40.000</span>'], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> La matrícula, que se paga una sola vez. El total es matrícula más mensualidad por la cantidad de meses. Con los dos datos primero hallamos la mensualidad y después la matrícula.</p><p><b>Paso 2.</b> Comparamos los dos casos: $7 - 3 = 4$ meses más y $115.000 - 55.000 = 60.000$ pesos más. La matrícula se paga en los dos casos, así que esos 60.000 son solo 4 mensualidades.</p><p><b>Paso 3.</b> Mensualidad: $\dfrac{60.000}{4} = 15.000$.</p><p><b>Paso 4.</b> En 3 meses, las mensualidades suman $3\cdot 15.000 = 45.000$.</p><p><b>Paso 5.</b> El resto del total de 3 meses es la matrícula: $55.000 - 45.000 = 10.000$.</p><p><b>Respuesta:</b> <span class="peso">$10.000</span>, la primera alternativa.</p><p><b>Comprobación:</b> 7 meses: $10.000 + 7\cdot 15.000 = 10.000 + 105.000 = 115.000$ ✔.</p><p><b>¿Por qué no las otras?</b> 15.000 es la mensualidad, no la matrícula. 18.333 es $\dfrac{55.000}{3}$: reparte el total en 3 meses como si no hubiera matrícula. 40.000 es $55.000 - 15.000$: resta una sola mensualidad en vez de tres.</p>`, conc: 'La diferencia entre los dos totales son solo mensualidades; lo que sobra es la matrícula.' },
    { enun: r`<p>La cantidad de agua, en litros, en un bidón que se está llenando se modela con $f(x) = 0{,}5x + 2$, donde $x$ son los minutos transcurridos.</p><p>¿Qué representa el número 2 en el modelo?</p>`,
      alts: ['Los litros de agua que había en el bidón al comenzar.', 'Los litros que entran por minuto.', 'Los minutos que tarda en llenarse.', 'La capacidad total del bidón.'], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Qué significa el 2. En una fórmula de "fijo + por unidad", el número que va solo es lo que hay cuando $x = 0$, o sea, al comienzo. Lo comprobamos reemplazando.</p><p><b>Paso 2.</b> Con $x = 0$ (al comenzar): $f(0) = 0{,}5\cdot 0 + 2 = 0 + 2 = 2$. Al comenzar hay 2 litros.</p><p><b>Paso 3.</b> Miramos qué hace el 0,5. Con 1 minuto: $f(1) = 0{,}5 + 2 = 2{,}5$. Con 2 minutos: $f(2) = 0{,}5\cdot 2 + 2 = 1 + 2 = 3$. Cada minuto entra medio litro: eso es el 0,5, no el 2.</p><p><b>Respuesta:</b> los litros de agua que había en el bidón al comenzar, la primera alternativa.</p><p><b>Comprobación:</b> La tabla parte en 2 y sube de 0,5 en 0,5, así que el 2 es el punto de partida ✔.</p><p><b>¿Por qué no las otras?</b> Los litros que entran por minuto son el 0,5, el número que multiplica a $x$. La fórmula no dice cuánto le cabe al bidón, así que no sabemos ni su capacidad ni cuánto tarda en llenarse.</p>`, conc: 'El número solo es lo que hay al comienzo; el que multiplica a x es lo que cambia por minuto.' },
    { enun: r`<p>El arriendo de una bicicleta cuesta $f(x) = 1000x + 2000$ pesos por $x$ horas. Juan pagó <span class="peso">$9000</span>.</p><p>¿Cuántas horas arrendó la bicicleta?</p>`,
      alts: ['7 horas', '9 horas', '11 horas', '4,5 horas'], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Las horas. Nos dan lo que pagó (el resultado) y buscamos $x$, así que igualamos la fórmula a 9000 y despejamos.</p><p><b>Paso 2.</b> Igualamos: $1000x + 2000 = 9000$.</p><p><b>Paso 3.</b> Sacamos el cargo fijo restando 2000 a los dos lados: $1000x = 9000 - 2000 = 7000$.</p><p><b>Paso 4.</b> Dividimos por 1000: $x = \dfrac{7000}{1000} = 7$.</p><p><b>Respuesta:</b> 7 horas, la primera alternativa.</p><p><b>Comprobación:</b> $f(7) = 1000\cdot 7 + 2000 = 7000 + 2000 = 9000$ ✔.</p><p><b>¿Por qué no las otras?</b> 9 horas es $\dfrac{9000}{1000}$: olvida restar el cargo fijo. 11 horas es $\dfrac{9000 + 2000}{1000}$: suma el cargo fijo en vez de restarlo. 4,5 horas es $\dfrac{9000}{2000}$: divide por el cargo fijo.</p>`, conc: 'Resta el cargo fijo antes de dividir.' }
  ]
},

/* =====================================================================
   UNIDAD 2 · FUNCIÓN CUADRÁTICA
   ===================================================================== */
{
  id: 'ec_cuadratica', unit: 'Unidad 2 · Función cuadrática', icon: '🟰',
  title: 'Ecuaciones de segundo grado',
  desc: 'Paso a paso: qué es una ecuación cuadrática, cómo ordenarla, los casos fáciles, factorizar con dos números, la fórmula general, lo que va dentro de la raíz y problemas de áreas.',
  slides: [
    { t: '¿Qué es una ecuación de segundo grado?', b: r`
      <div class="cols"><div>
      <p>Una <b>ecuación de segundo grado</b> (también se dice <b>ecuación cuadrática</b>) es una ecuación donde la $x$ aparece <b>al cuadrado</b>, o sea $x^2$, y no aparece $x^3$ ni nada más grande. "Segundo grado" quiere decir justamente eso: la potencia más grande es 2.</p>
      <p>Siempre se puede ordenar así:</p>
      $$ax^2 + bx + c = 0$$
      <p>· $a$ es el número que acompaña a $x^2$.<br>· $b$ es el número que acompaña a $x$.<br>· $c$ es el número solo, el que no tiene $x$.</p>
      <p><b>Ejemplo.</b> En $2x^2 - 3x - 2 = 0$, el número que acompaña a $x^2$ es $a = 2$, el que acompaña a $x$ es $b = -3$ y el número solo es $c = -2$.</p>
      </div><div>
      <div class="box"><b>El signo va pegado al número</b> Si delante hay un menos, el número es negativo: en $-3x$ el número que acompaña a $x$ es $-3$, no $3$.</div>
      <div class="box alert"><b>El número de x² nunca es 0</b> Si $a$ fuera $0$, el $x^2$ desaparecería, porque $0\cdot x^2 = 0$, y la ecuación ya no sería de segundo grado.</div>
      <div class="box"><b>¿Es o no es?</b><br>· $x^2 - 9 = 0$: sí, tiene $x^2$.<br>· $3x + 1 = 0$: no, no tiene $x^2$.<br>· $x^3 + x = 0$: no, tiene $x^3$.</div>
      </div></div>` },
    { t: '¿Qué es una solución?', b: r`
      <div class="cols"><div>
      <p>Una <b>solución</b> es un número que, puesto en lugar de la $x$, hace que la cuenta dé exactamente $0$.</p>
      <p>Probemos con $x^2 - 5x + 6 = 0$.</p>
      <p><b>Paso 1.</b> Probamos $x = 2$. Primero el cuadrado: $2^2 = 4$. Después la multiplicación: $5\cdot 2 = 10$. Juntamos: $4 - 10 + 6 = -6 + 6 = 0$. ✔ Da 0, así que $2$ es solución.</p>
      <p><b>Paso 2.</b> Probamos $x = 3$: $3^2 = 9$ y $5\cdot 3 = 15$. Juntamos: $9 - 15 + 6 = -6 + 6 = 0$. ✔ También es solución.</p>
      <p><b>Paso 3.</b> Probamos $x = 1$: $1^2 = 1$ y $5\cdot 1 = 5$. Juntamos: $1 - 5 + 6 = -4 + 6 = 2$. No da 0, así que $1$ no es solución.</p>
      </div><div>
      <div class="qfig">${''}</div>
      <div class="box"><b>¿Cuántas tiene?</b> Normalmente <b>dos</b>, a veces una y a veces ninguna. Por eso, cuando encuentres una, sigue buscando la otra.</div>
      <div class="box"><b>Truco para la PAES</b> Si te quedas en blanco, reemplaza las alternativas en la ecuación: la correcta es la que hace que todo dé 0.</div>
      </div></div>` },
    { t: 'Primer paso: dejar un 0 a un lado', b: r`
      <div class="cols"><div>
      <p>Todos los métodos que vas a aprender necesitan lo mismo al comienzo: <b>todo a un lado del igual y un 0 al otro</b>.</p>
      <p>Ejemplo: $x^2 + 6 = 5x$.</p>
      <p><b>Paso 1.</b> El $5x$ está a la derecha sumando. Lo pasamos a la izquierda restando: $x^2 + 6 - 5x = 0$.</p>
      <p><b>Paso 2.</b> Ordenamos: primero el $x^2$, después la $x$ y al final el número solo: $x^2 - 5x + 6 = 0$.</p>
      <p><b>Paso 3.</b> Ahora leemos los tres números: $a = 1$, $b = -5$, $c = 6$.</p>
      </div><div>
      <div class="box"><b>¿Por qué a = 1?</b> Cuando no hay número escrito delante de $x^2$, hay un 1 escondido: $x^2 = 1\cdot x^2$.</div>
      <div class="box alert"><b>Si falta un término, su número es 0</b><br>· En $x^2 - 3x = 0$ no hay número solo: $c = 0$.<br>· En $2x^2 - 50 = 0$ no hay término con $x$: $b = 0$.<br>Estos dos casos son los más fáciles, y los vemos primero.</div>
      </div></div>` },
    { t: 'Caso 1: falta el término con x', b: r`
      <div class="cols"><div>
      <p>Son ecuaciones como $2x^2 = 50$: solo hay $x^2$ y números. Se resuelven <b>despejando</b>: dejamos $x^2$ solo y después sacamos raíz.</p>
      <p><b>Paso 1.</b> El 2 está multiplicando a $x^2$, así que pasa al otro lado dividiendo: $x^2 = \dfrac{50}{2}$.</p>
      <p><b>Paso 2.</b> Hacemos la división: $\dfrac{50}{2} = 25$. Queda $x^2 = 25$.</p>
      <p><b>Paso 3.</b> Nos preguntamos: ¿qué número multiplicado por sí mismo da 25? Hay <b>dos</b>: $5\cdot 5 = 25$ y $(-5)\cdot(-5) = 25$.</p>
      <p><b>Paso 4.</b> Respuesta: $x = 5$ o $x = -5$. Se escribe corto $x = \pm 5$, y el $\pm$ se lee "más o menos".</p>
      </div><div>
      <div class="box alert"><b>El error más común</b> Quedarse solo con el $5$ positivo. Al sacar raíz en una ecuación siempre aparecen el $+$ y el $-$.</div>
      <div class="box"><b>Comprueba</b> Con $x = -5$: $2\cdot(-5)^2 = 2\cdot 25 = 50$. ✔</div>
      <div class="box"><b>Casos especiales</b><br>· $x^2 = 0$: una sola solución, $x = 0$.<br>· $x^2 = -9$: ninguna solución, porque ningún número multiplicado por sí mismo da negativo: $3\cdot 3 = 9$ y $(-3)\cdot(-3) = 9$.</div>
      </div></div>` },
    { t: 'La regla del cero', b: r`
      <div class="cols"><div>
      <p>Antes de los otros casos necesitamos una idea sencilla: <b>si una multiplicación da 0, al menos uno de los números que se multiplican es 0</b>.</p>
      <p>Mira: $3\cdot 0 = 0$ y $0\cdot(-7) = 0$. En cambio, si ninguno es 0, el resultado nunca es 0: $3\cdot 5 = 15$.</p>
      <p>Ejemplo: $(x - 4)(x + 1) = 0$.</p>
      <p><b>Paso 1.</b> Hay dos paréntesis multiplicándose y el resultado es 0. Entonces uno de los dos vale 0.</p>
      <p><b>Paso 2.</b> Si el primero vale 0: $x - 4 = 0$. Sumamos 4 a los dos lados: $x = 4$.</p>
      <p><b>Paso 3.</b> Si el segundo vale 0: $x + 1 = 0$. Restamos 1 a los dos lados: $x = -1$.</p>
      <p><b>Paso 4.</b> Las soluciones son $x = 4$ y $x = -1$.</p>
      </div><div>
      <div class="box"><b>Comprueba</b><br>· $x = 4$: $(4 - 4)(4 + 1) = 0\cdot 5 = 0$. ✔<br>· $x = -1$: $(-1 - 4)(-1 + 1) = (-5)\cdot 0 = 0$. ✔</div>
      <div class="box alert"><b>Solo funciona con 0</b> Si fuera $(x - 4)(x + 1) = 6$, no sirve: el 6 sale de muchas multiplicaciones ($2\cdot 3$, $1\cdot 6$, ...) y no sabemos cuál es. Por eso siempre dejamos un 0 al otro lado.</div>
      </div></div>` },
    { t: 'Caso 2: falta el número solo', b: r`
      <div class="cols"><div>
      <p>Son ecuaciones como $x^2 = 3x$: todos los términos tienen $x$ y no hay número solo. Se resuelven <b>sacando la $x$ afuera</b> (a esto se le llama "factor común").</p>
      <p><b>Paso 1.</b> El $3x$ pasa al otro lado restando: $x^2 - 3x = 0$.</p>
      <p><b>Paso 2.</b> Mira los dos términos: $x^2 = x\cdot x$ y $3x = 3\cdot x$. Los dos tienen una $x$, así que la sacamos afuera de un paréntesis: $x(x - 3) = 0$.</p>
      <p><b>Paso 3.</b> Comprobamos que no cambiamos nada, multiplicando de vuelta: $x\cdot x - x\cdot 3 = x^2 - 3x$. ✔</p>
      <p><b>Paso 4.</b> Usamos la regla del cero: $x = 0$ o $x - 3 = 0$.</p>
      <p><b>Paso 5.</b> En $x - 3 = 0$ sumamos 3 a los dos lados: $x = 3$.</p>
      <p><b>Paso 6.</b> Las soluciones son $x = 0$ y $x = 3$.</p>
      </div><div>
      <div class="box alert"><b>No dividas por x</b> Si divides $x^2 = 3x$ por $x$ te queda $x = 3$ y pierdes la solución $x = 0$.</div>
      <div class="box"><b>Siempre sale un 0</b> En este caso una de las soluciones es <b>siempre</b> $x = 0$: con $x = 0$ queda $0^2 = 3\cdot 0$, o sea $0 = 0$. ✔</div>
      </div></div>` },
    { t: 'Caso 3: factorizar buscando dos números', b: r`
      <div class="cols"><div>
      <p>Sirve cuando no hay número delante de $x^2$ (o sea, $a = 1$).</p>
      <p><b>¿De dónde sale el truco?</b> Mira esta multiplicación:<br>$(x + 2)(x + 3) = x\cdot x + 3x + 2x + 2\cdot 3 = x^2 + 5x + 6$.<br>El $5$ es $2 + 3$ y el $6$ es $2\cdot 3$. Para volver atrás buscamos dos números que <b>sumados</b> den el número que acompaña a $x$ y <b>multiplicados</b> den el número solo.</p>
      <p>Ejemplo: $x^2 - 5x + 6 = 0$.</p>
      <p><b>Paso 1.</b> Buscamos dos números que sumados den $-5$ y multiplicados den $6$.</p>
      <p><b>Paso 2.</b> Probamos parejas que multiplicadas dan 6:<br>$1$ y $6$ suman $7$; $2$ y $3$ suman $5$; $-1$ y $-6$ suman $-7$; $-2$ y $-3$ suman $-5$. ✔</p>
      <p><b>Paso 3.</b> Ponemos esos números en dos paréntesis: $(x - 2)(x - 3) = 0$.</p>
      <p><b>Paso 4.</b> Regla del cero con el primero: $x - 2 = 0$, así que $x = 2$.</p>
      <p><b>Paso 5.</b> Regla del cero con el segundo: $x - 3 = 0$, así que $x = 3$.</p>
      </div><div>
      <div class="box alert"><b>Ojo con el signo final</b> Los números que encontramos fueron $-2$ y $-3$, pero las soluciones son $2$ y $3$: el signo se da vuelta al despejar.</div>
      <div class="box"><b>Comprueba</b> Con $x = 3$: $3^2 - 5\cdot 3 + 6 = 9 - 15 + 6 = 0$. ✔</div>
      </div></div>` },
    { t: 'Cómo elegir los signos de los dos números', b: r`
      <div class="cols"><div>
      <p>Probar todas las parejas cansa. Mirando dos signos sabes de inmediato cómo son los números. <b>Mira primero el signo del número solo.</b></p>
      <p><b>Si el número solo es positivo</b>, los dos números tienen el <b>mismo signo</b>, y ese signo es el del número que acompaña a $x$.<br>· $x^2 + 7x + 10 = 0$: los dos positivos, $2$ y $5$, porque $2\cdot 5 = 10$ y $2 + 5 = 7$. Queda $(x + 2)(x + 5) = 0$.<br>· $x^2 - 7x + 10 = 0$: los dos negativos, $-2$ y $-5$, porque $(-2)\cdot(-5) = 10$ y $-2 - 5 = -7$. Queda $(x - 2)(x - 5) = 0$.</p>
      <p><b>Si el número solo es negativo</b>, los números tienen <b>signos distintos</b>: uno positivo y otro negativo. Busca la pareja que al <b>restarse</b> dé el número que acompaña a $x$ (sin fijarte en su signo). El <b>más grande</b> se queda con el signo del número que acompaña a $x$.<br>· $x^2 + 3x - 10 = 0$: $5$ y $2$ multiplican 10 y se restan $5 - 2 = 3$. El que acompaña a $x$ es $+3$, así que el grande es positivo: $5$ y $-2$. Queda $(x + 5)(x - 2) = 0$.<br>· $x^2 - 3x - 10 = 0$: ahora el que acompaña a $x$ es $-3$, así que el grande es negativo: $-5$ y $2$. Queda $(x - 5)(x + 2) = 0$.</p>
      </div><div>
      <div class="box"><b>Los signos en una mirada</b><br>· Número solo $+$, número de $x$ $+$: los dos $+$.<br>· Número solo $+$, número de $x$ $-$: los dos $-$.<br>· Número solo $-$: uno $+$ y uno $-$; el más grande lleva el signo del número de $x$.</div>
      <div class="box alert"><b>Las soluciones van al revés</b> $(x + 5)(x - 2) = 0$ da $x = -5$ y $x = 2$: el signo se da vuelta al despejar.</div>
      <div class="box"><b>Comprueba</b> $5\cdot(-2) = -10$ y $5 + (-2) = 3$. ✔</div>
      </div></div>` },
    { t: 'La fórmula general: una receta que sirve siempre', b: r`
      <div class="cols"><div>
      <p>El truco de los dos números no siempre funciona: si hay un número delante de $x^2$, como en $2x^2 - 3x - 2 = 0$, o si las soluciones no son enteras, adivinar es muy difícil.</p>
      <p>Para eso existe la <b>fórmula general</b>. Es una receta: le entregas los tres números $a$, $b$ y $c$, y ella te entrega las soluciones, sin adivinar nada.</p>
      $$x = \dfrac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$
      <p>Cómo se lee, pedazo por pedazo:<br>· $-b$: el número que acompaña a $x$, con el signo cambiado.<br>· $b^2 - 4ac$: lo que va dentro de la raíz. Se calcula primero.<br>· $\pm$: "más o menos". Se hacen dos cuentas, una sumando y otra restando; por eso salen dos soluciones.<br>· $2a$: el doble del número que acompaña a $x^2$. Divide a <b>todo</b> lo de arriba.</p>
      </div><div>
      <div class="box"><b>Pruébala con algo que ya sabes</b> En $x^2 - 5x + 6 = 0$ ya sabemos que las soluciones son 2 y 3. Con $a = 1$, $b = -5$, $c = 6$:<br>· dentro de la raíz: $(-5)^2 - 4\cdot 1\cdot 6 = 25 - 24 = 1$, y $\sqrt{1} = 1$;<br>· $-b = 5$ y $2a = 2$;<br>· sumando: $\dfrac{5 + 1}{2} = \dfrac{6}{2} = 3$; restando: $\dfrac{5 - 1}{2} = \dfrac{4}{2} = 2$. ✔ Las mismas.</div>
      <div class="box alert"><b>¿Cuándo usarla?</b> Cuando no encuentras rápido los dos números, o cuando hay un número delante de $x^2$. Es más larga, pero nunca falla.</div>
      </div></div>` },
    { t: 'La fórmula general: un ejemplo completo', b: r`
      <div class="cols"><div>
      <p>Resolvamos $2x^2 - 3x - 2 = 0$.</p>
      <p><b>Paso 1.</b> Anotamos los tres números con su signo: $a = 2$, $b = -3$, $c = -2$.</p>
      <p><b>Paso 2.</b> Empezamos por lo de dentro de la raíz. Primero $b^2 = (-3)^2 = 9$.</p>
      <p><b>Paso 3.</b> Después $4ac = 4\cdot 2\cdot(-2) = 8\cdot(-2) = -16$.</p>
      <p><b>Paso 4.</b> Restamos: $b^2 - 4ac = 9 - (-16) = 9 + 16 = 25$.</p>
      <p><b>Paso 5.</b> Sacamos la raíz: $\sqrt{25} = 5$.</p>
      <p><b>Paso 6.</b> Lo demás: $-b = -(-3) = 3$ y $2a = 2\cdot 2 = 4$. Queda $x = \dfrac{3 \pm 5}{4}$.</p>
      <p><b>Paso 7.</b> Cuenta sumando: $\dfrac{3 + 5}{4} = \dfrac{8}{4} = 2$.</p>
      <p><b>Paso 8.</b> Cuenta restando: $\dfrac{3 - 5}{4} = \dfrac{-2}{4} = -\dfrac{1}{2}$.</p>
      </div><div>
      <div class="qfig">${''}</div>
      <div class="box alert"><b>Tres trampas</b><br>· $-b$ cambia el signo: si $b = -3$, entonces $-b = +3$.<br>· Los negativos van entre paréntesis: $(-3)^2 = 9$, no $-9$.<br>· El $2a$ divide a <b>todo</b> lo de arriba, no solo a la raíz.</div>
      <div class="box"><b>Comprueba</b> Con $x = 2$: $2\cdot 2^2 - 3\cdot 2 - 2 = 2\cdot 4 - 6 - 2 = 8 - 6 - 2 = 0$. ✔</div>
      </div></div>` },
    { t: 'Lo que va dentro de la raíz: el discriminante', b: r`
      <div class="cols"><div>
      <p>En la fórmula general, lo que va dentro de la raíz, $b^2 - 4ac$, tiene nombre propio: se llama <b>discriminante</b> y se escribe con la letra griega $\Delta$ (se lee "delta"). "Discriminar" quiere decir distinguir: este número distingue cuántas soluciones hay.</p>
      <p><b>Si da positivo</b>, por ejemplo 25: la raíz da 5, y el $\pm$ hace dos cuentas distintas, una con $+5$ y otra con $-5$. Hay <b>dos</b> soluciones.</p>
      <p><b>Si da 0</b>: $\sqrt{0} = 0$, y sumar 0 o restar 0 da lo mismo. Hay <b>una</b> sola solución.</p>
      <p><b>Si da negativo</b>, por ejemplo $-16$: ningún número multiplicado por sí mismo da negativo ($4\cdot 4 = 16$ y $(-4)\cdot(-4) = 16$), así que esa raíz no existe. No hay <b>ninguna</b> solución real.</p>
      </div><div>
      <div class="qfig">${''}</div>
      <div class="box"><b>Para qué sirve</b> Si solo te preguntan <b>cuántas</b> soluciones hay, no resuelvas todo: calcula lo de dentro de la raíz y mira su signo.</div>
      </div></div>` },
    { t: 'Lo que va dentro de la raíz: un ejemplo completo', b: r`
      <div class="cols"><div>
      <p>¿Cuántas soluciones tiene $x^2 - 4x + 4 = 0$?</p>
      <p><b>Paso 1.</b> Anotamos los números: $a = 1$, $b = -4$, $c = 4$.</p>
      <p><b>Paso 2.</b> Calculamos $b^2 = (-4)^2 = 16$.</p>
      <p><b>Paso 3.</b> Calculamos $4ac = 4\cdot 1\cdot 4 = 16$.</p>
      <p><b>Paso 4.</b> Restamos: $b^2 - 4ac = 16 - 16 = 0$.</p>
      <p><b>Paso 5.</b> Dio 0, así que hay <b>una sola</b> solución.</p>
      <p><b>Paso 6.</b> Si además piden cuál es, usamos la fórmula: $-b = 4$, $2a = 2$ y $\sqrt{0} = 0$. Queda $x = \dfrac{4 \pm 0}{2} = \dfrac{4}{2} = 2$.</p>
      </div><div>
      <div class="qfig">${''}</div>
      <div class="box"><b>Comprueba</b> Con $x = 2$: $2^2 - 4\cdot 2 + 4 = 4 - 8 + 4 = 0$. ✔</div>
      <div class="box"><b>Otro: $x^2 + 2x + 5 = 0$</b><br>· $b^2 = 2^2 = 4$.<br>· $4ac = 4\cdot 1\cdot 5 = 20$.<br>· $b^2 - 4ac = 4 - 20 = -16$.<br>Dio negativo: no tiene ninguna solución real.</div>
      </div></div>` },
    { t: 'Problemas con enunciado: plantear la ecuación', b: r`
      <div class="cols"><div>
      <p>Un terreno rectangular tiene un largo 5 m mayor que el ancho y un área de 104 m². ¿Cuánto mide su perímetro?</p>
      <p><b>Paso 1. Nombra lo que no sabes.</b> No sabemos el ancho: lo llamamos $x$.</p>
      <p><b>Paso 2. Escribe lo demás con $x$.</b> El largo mide 5 más que el ancho: largo $= x + 5$.</p>
      <p><b>Paso 3. Usa el dato.</b> El área de un rectángulo es largo por ancho, y vale 104: $x(x + 5) = 104$.</p>
      <p><b>Paso 4. Multiplica.</b> $x\cdot x = x^2$ y $x\cdot 5 = 5x$. Queda $x^2 + 5x = 104$.</p>
      <p><b>Paso 5. Deja un 0 a un lado.</b> El 104 pasa restando: $x^2 + 5x - 104 = 0$.</p>
      </div><div>
      <div class="qfig"><svg class="dibujo" viewBox="0 0 280 180" width="280" role="img" aria-label="Terreno rectangular de ancho x, largo x + 5 y área 104 metros cuadrados">
        <rect x="50" y="20" width="200" height="120" rx="4" fill="#fff3e6" stroke="#e8680c" stroke-width="3"/>
        <text x="72" y="44" font-size="20">🌱</text><text x="214" y="128" font-size="20">🌳</text>
        <text x="150" y="86" font-size="17" font-weight="800" text-anchor="middle" fill="#b84f06">Área = 104 m²</text>
        <text x="150" y="166" font-size="15" font-style="italic" text-anchor="middle" fill="#1d1d1f">largo = x + 5</text>
        <text x="40" y="85" font-size="15" font-style="italic" text-anchor="end" fill="#1d1d1f">x</text>
      </svg></div>
      <div class="box"><b>Traducciones útiles</b><br>· "5 más que $x$": $x + 5$.<br>· "4 menos que $L$": $L - 4$.<br>· "el doble de $x$": $2x$.<br>· "el cuadrado de $x$": $x^2$.<br>· "dos números consecutivos": $x$ y $x + 1$.</div>
      </div></div>` },
    { t: 'Problemas con enunciado: resolver y responder', b: r`
      <div class="cols"><div>
      <p>Seguimos con el terreno: $x^2 + 5x - 104 = 0$.</p>
      <p><b>Paso 6. Mira los signos.</b> El número solo, $-104$, es negativo: los dos números tienen signos distintos. El que acompaña a $x$ es $+5$: el más grande es positivo.</p>
      <p><b>Paso 7. Busca la pareja.</b> Parejas que multiplicadas dan 104, y su resta: $1$ y $104$ (resta 103); $2$ y $52$ (resta 50); $4$ y $26$ (resta 22); $8$ y $13$ (resta 5). ✔ Los números son $13$ y $-8$.</p>
      <p><b>Paso 8. Factoriza y despeja.</b> $(x + 13)(x - 8) = 0$, así que $x = -13$ o $x = 8$.</p>
      <p><b>Paso 9. Descarta.</b> Un lado no puede medir $-13$ metros. El ancho es $8$ y el largo es $8 + 5 = 13$.</p>
      <p><b>Paso 10. Responde lo que piden.</b> El perímetro es la suma de los cuatro lados: $8 + 13 + 8 + 13 = 42$ m.</p>
      </div><div>
      <div class="box"><b>Comprueba</b> Área: $8\cdot 13 = 104$. ✔ Y el largo es 5 más que el ancho: $13 - 8 = 5$. ✔</div>
      <div class="box alert"><b>Descarta con criterio</b> Una medida o un tiempo no pueden ser negativos. Pero si la pregunta es por "un número", el negativo sí puede servir.</div>
      <div class="box"><b>Lee otra vez la pregunta</b> Aquí piden el perímetro, no el ancho ni el largo. En las alternativas suelen aparecer 8, 13 o 21 para quien se detiene antes.</div>
      </div></div>` },
    { t: 'Resumen', b: r`
      <table><thead><tr><th>Si la ecuación se ve así</th><th>Haz esto</th></tr></thead><tbody>
      <tr><td>$ax^2 = k$ (no hay término con $x$)</td><td>deja $x^2$ solo y saca raíz: salen dos, con $+$ y con $-$</td></tr>
      <tr><td>$ax^2 + bx = 0$ (no hay número solo)</td><td>saca la $x$ afuera: una solución siempre es $0$</td></tr>
      <tr><td>$x^2 + bx + c = 0$ (sin número delante de $x^2$)</td><td>busca dos números: multiplicados dan el número solo, sumados dan el número que acompaña a $x$</td></tr>
      <tr><td>Cualquier otra</td><td>fórmula general</td></tr>
      <tr><td>¿Cuántas soluciones?</td><td>mira el signo de lo que va dentro de la raíz, $b^2 - 4ac$: positivo, dos; cero, una; negativo, ninguna</td></tr></tbody></table>
      <div class="box" style="margin-top:14px"><b>Método PAES</b> 1. Deja un 0 a un lado. 2. Mira qué forma tiene y elige el caso. 3. Resuelve paso a paso. 4. Comprueba reemplazando. 5. Lee de nuevo qué te piden: en las alternativas suelen estar la solución negativa que había que descartar y los números de los pasos intermedios.</div>` }
  ],
  example: {
    src: 'PAES Regular 2026',
    enun: r`<p>Una persona dispone de un terreno de forma rectangular. Se sabe que el terreno tiene un área de 192 m² y que su ancho mide 4 m menos que su largo.</p><p>¿Cuánto mide el largo del terreno?</p>`,
    alts: ['12 m', '16 m', '20 m', '24 m'], ok: 1,
    sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El largo del terreno. Nos dan el área (192 m²) y nos dicen que el ancho mide 4 m menos que el largo. Como no sabemos el largo, le ponemos una letra, armamos una ecuación con el área y la resolvemos. Va a salir una ecuación de segundo grado, porque el largo se multiplica por algo que también tiene el largo.</p><p><b>Paso 2. Nombra lo que no sabes.</b> Largo $= L$. El ancho es 4 menos que el largo: ancho $= L - 4$.</p><p><b>Paso 3. Plantea la ecuación.</b> El área de un rectángulo es largo por ancho, y vale 192: $L(L - 4) = 192$.</p><p><b>Paso 4. Multiplica el paréntesis.</b> $L\cdot L = L^2$ y $L\cdot 4 = 4L$. Queda $L^2 - 4L = 192$.</p><p><b>Paso 5. Deja un 0 a un lado.</b> El 192 pasa restando: $L^2 - 4L - 192 = 0$.</p><p><b>Paso 6. Mira los signos.</b> El número solo, $-192$, es negativo: los dos números tienen signos distintos. El que acompaña a $L$ es $-4$: el más grande es negativo. Buscamos dos números que multiplicados den 192 y que al restarse den 4.</p><p><b>Paso 7. Busca la pareja.</b> Parejas que multiplicadas dan 192: $1$ y $192$, $2$ y $96$, $3$ y $64$, $4$ y $48$, $6$ y $32$, $8$ y $24$, $12$ y $16$. La única que se resta 4 es $16 - 12 = 4$. ✔ Con los signos: $-16$ y $12$, porque $(-16)\cdot 12 = -192$ y $-16 + 12 = -4$.</p><p><b>Paso 8. Factoriza.</b> $(L - 16)(L + 12) = 0$.</p><p><b>Paso 9. Regla del cero.</b> $L - 16 = 0$, así que $L = 16$; o bien $L + 12 = 0$, así que $L = -12$.</p><p><b>Paso 10. Descarta.</b> Un largo no puede medir $-12$ metros. Entonces $L = 16$.</p><p><b>Respuesta:</b> el largo mide 16 m (segunda alternativa).</p><p><b>Comprobación:</b> el ancho es $16 - 4 = 12$ y el área es $16\cdot 12 = 192$. ✔</p><p><b>¿Por qué no las otras?</b> 12 m es el ancho, no el largo (o el 12 de la factorización): con largo 12 el ancho sería 8 y el área $12\cdot 8 = 96$. Con 20 m el ancho sería 16 y el área $20\cdot 16 = 320$, no 192. Con 24 m el ancho sería 20 y el área $24\cdot 20 = 480$.</p>`,
    conc: 'Nombra el largo, plantea el área, deja un 0 a un lado, factoriza y descarta el negativo.'
  },
  bank: [
    { enun: r`<p>¿Cuáles son las soluciones de $x^2 - 7x + 12 = 0$?</p>`,
      alts: [r`$3$ y $4$`, r`$-3$ y $-4$`, r`$2$ y $6$`, r`$1$ y $12$`], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Los valores de $x$ que hacen que la cuenta dé 0. La ecuación ya tiene un 0 a un lado y no hay número delante de $x^2$, así que usamos el truco de los dos números.</p><p><b>Paso 2. Anota los números.</b> El que acompaña a $x$ es $-7$ y el número solo es $12$. Buscamos dos números que sumados den $-7$ y multiplicados den $12$.</p><p><b>Paso 3. Mira los signos.</b> El número solo, 12, es positivo: los dos números tienen el mismo signo. El que acompaña a $x$ es negativo: los dos son negativos.</p><p><b>Paso 4. Busca la pareja.</b> Parejas negativas que multiplicadas dan 12: $-1$ y $-12$ suman $-13$; $-2$ y $-6$ suman $-8$; $-3$ y $-4$ suman $-7$. ✔</p><p><b>Paso 5. Factoriza.</b> $(x - 3)(x - 4) = 0$.</p><p><b>Paso 6. Regla del cero.</b> $x - 3 = 0$, así que $x = 3$; o bien $x - 4 = 0$, así que $x = 4$.</p><p><b>Respuesta:</b> las soluciones son 3 y 4 (primera alternativa).</p><p><b>Comprobación:</b> con $x = 3$: $3^2 - 7\cdot 3 + 12 = 9 - 21 + 12 = 0$. ✔ Con $x = 4$: $4^2 - 7\cdot 4 + 12 = 16 - 28 + 12 = 0$. ✔</p><p><b>¿Por qué no las otras?</b> $-3$ y $-4$ son los números que encontramos, pero no se les dio vuelta el signo al despejar: con $x = -3$ queda $9 + 21 + 12 = 42$, no 0. $2$ y $6$ multiplican 12 pero suman 8, no 7. $1$ y $12$ multiplican 12 pero suman 13.</p>`, conc: 'Busca dos números que multipliquen el número solo y sumen el que acompaña a x; después dales vuelta el signo.' },
    { enun: r`<p>¿Cuáles son las soluciones de $2x^2 = 50$?</p>`,
      alts: [r`$5$ y $-5$`, r`Solo $5$`, r`$25$ y $-25$`, r`$10$ y $-10$`], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Los valores de $x$ que cumplen la igualdad. La ecuación solo tiene $x^2$ y números, sin término con $x$, así que despejamos: dejamos $x^2$ solo y después sacamos raíz.</p><p><b>Paso 2. Deja x² solo.</b> El 2 está multiplicando a $x^2$, así que pasa al otro lado dividiendo: $x^2 = \dfrac{50}{2}$.</p><p><b>Paso 3. Divide.</b> $\dfrac{50}{2} = 25$, así que $x^2 = 25$.</p><p><b>Paso 4. Saca raíz.</b> ¿Qué número multiplicado por sí mismo da 25? Hay dos: $5\cdot 5 = 25$ y $(-5)\cdot(-5) = 25$. Entonces $x = 5$ o $x = -5$.</p><p><b>Respuesta:</b> las soluciones son 5 y $-5$ (primera alternativa).</p><p><b>Comprobación:</b> con $x = 5$: $2\cdot 5^2 = 2\cdot 25 = 50$. ✔ Con $x = -5$: $2\cdot(-5)^2 = 2\cdot 25 = 50$. ✔</p><p><b>¿Por qué no las otras?</b> "Solo 5" olvida que el $-5$ al cuadrado también da 25. $25$ y $-25$ se quedan en $x^2 = 25$ sin sacar la raíz: $2\cdot 25^2 = 2\cdot 625 = 1250$, no 50. $10$ y $-10$ pasan el 2 multiplicando en vez de dividiendo ($x^2 = 100$): $2\cdot 10^2 = 2\cdot 100 = 200$, no 50.</p>`, conc: 'Deja x² solo y saca raíz: siempre salen dos, una positiva y una negativa.' },
    { enun: r`<p>¿Cuáles son todas las soluciones de $x^2 = 3x$?</p>`,
      alts: [r`$0$ y $3$`, r`Solo $3$`, r`$0$ y $-3$`, r`$3$ y $-3$`], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Todas las soluciones. Los dos términos tienen $x$ y no hay número solo, así que dejamos un 0 a un lado y sacamos la $x$ afuera. No dividimos por $x$, porque así se pierde una solución.</p><p><b>Paso 2. Deja un 0 a un lado.</b> El $3x$ pasa restando: $x^2 - 3x = 0$.</p><p><b>Paso 3. Saca la x afuera.</b> $x^2 = x\cdot x$ y $3x = 3\cdot x$: los dos tienen una $x$. Queda $x(x - 3) = 0$.</p><p><b>Paso 4. Revisa multiplicando.</b> $x\cdot x - x\cdot 3 = x^2 - 3x$. ✔</p><p><b>Paso 5. Regla del cero.</b> Una multiplicación da 0 solo si uno de sus factores es 0: $x = 0$ o $x - 3 = 0$.</p><p><b>Paso 6. Despeja.</b> En $x - 3 = 0$ sumamos 3 a los dos lados: $x = 3$.</p><p><b>Respuesta:</b> las soluciones son 0 y 3 (primera alternativa).</p><p><b>Comprobación:</b> con $x = 0$: $0^2 = 0$ y $3\cdot 0 = 0$, así que $0 = 0$. ✔ Con $x = 3$: $3^2 = 9$ y $3\cdot 3 = 9$, así que $9 = 9$. ✔</p><p><b>¿Por qué no las otras?</b> "Solo 3" sale de dividir los dos lados por $x$, y así se pierde el 0. "$0$ y $-3$" se equivoca de signo al despejar $x - 3 = 0$: con $x = -3$ queda $(-3)^2 = 9$ y $3\cdot(-3) = -9$, y $9$ no es $-9$. "$3$ y $-3$" trata la ecuación como si fuera $x^2 = 9$; el $-3$ falla igual que antes.</p>`, conc: 'No dividas por x: saca la x afuera y una solución será 0.' },
    { enun: r`<p>¿Para qué valor de $k$ la ecuación $x^2 - 4x + k = 0$ tiene exactamente una solución real?</p>`,
      alts: [r`$4$`, r`$-4$`, r`$16$`, r`$2$`], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El valor de $k$ que deja <b>una sola</b> solución. Lo que va dentro de la raíz de la fórmula general, $b^2 - 4ac$ (el discriminante), dice cuántas soluciones hay: hay una sola cuando vale 0, porque sumar 0 o restar 0 da lo mismo. Así que calculamos lo de dentro de la raíz y lo igualamos a 0.</p><p><b>Paso 2. Anota los números.</b> $a = 1$, $b = -4$ y el número solo es $c = k$.</p><p><b>Paso 3. Calcula b².</b> $(-4)^2 = 16$.</p><p><b>Paso 4. Calcula 4ac.</b> $4\cdot 1\cdot k = 4k$.</p><p><b>Paso 5. Lo de dentro de la raíz.</b> $b^2 - 4ac = 16 - 4k$.</p><p><b>Paso 6. Iguala a 0.</b> $16 - 4k = 0$.</p><p><b>Paso 7. Despeja.</b> El $4k$ pasa sumando: $16 = 4k$. Dividimos por 4: $k = \dfrac{16}{4} = 4$.</p><p><b>Respuesta:</b> $k = 4$ (primera alternativa).</p><p><b>Comprobación:</b> con $k = 4$ la ecuación es $x^2 - 4x + 4 = 0$. Dentro de la raíz: $16 - 4\cdot 1\cdot 4 = 16 - 16 = 0$. ✔ La única solución es $x = \dfrac{4 \pm 0}{2} = 2$, y $2^2 - 4\cdot 2 + 4 = 4 - 8 + 4 = 0$. ✔</p><p><b>¿Por qué no las otras?</b> Con $k = -4$: $16 - 4\cdot(-4) = 16 + 16 = 32$, positivo, así que hay dos soluciones (error de signo). Con $k = 16$: $16 - 4\cdot 16 = 16 - 64 = -48$, negativo, ninguna solución (sale de olvidar dividir por 4). Con $k = 2$: $16 - 4\cdot 2 = 16 - 8 = 8$, positivo, dos soluciones; además 2 es la solución $x$, no el valor de $k$.</p>`, conc: 'Una sola solución cuando lo de dentro de la raíz vale 0.' },
    { enun: r`<p>La empresa CIELOS construye casas en terrenos rectangulares, en los que siempre el largo mide 5 m más que el ancho.</p><p>Si el área de uno de los terrenos es 104 m², ¿cuál es el perímetro del terreno?</p>`, src: 'PAES Invierno 2026',
      alts: ['62 m', '42 m', '31 m', '21 m'], ok: 1,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El perímetro, que es la suma de los cuatro lados. Nos dan el área (104 m²) y que el largo mide 5 m más que el ancho. Primero buscamos los lados con una ecuación del área y al final los sumamos.</p><p><b>Paso 2. Nombra lo que no sabes.</b> Ancho $= x$. El largo es 5 más: largo $= x + 5$.</p><p><b>Paso 3. Plantea la ecuación.</b> Área = largo por ancho: $x(x + 5) = 104$.</p><p><b>Paso 4. Multiplica.</b> $x\cdot x = x^2$ y $x\cdot 5 = 5x$. Queda $x^2 + 5x = 104$.</p><p><b>Paso 5. Deja un 0 a un lado.</b> El 104 pasa restando: $x^2 + 5x - 104 = 0$.</p><p><b>Paso 6. Mira los signos.</b> El número solo, $-104$, es negativo: signos distintos. El que acompaña a $x$ es $+5$: el más grande es positivo. Buscamos dos números que multiplicados den 104 y que se resten 5.</p><p><b>Paso 7. Busca la pareja.</b> $1$ y $104$ (resta 103); $2$ y $52$ (resta 50); $4$ y $26$ (resta 22); $8$ y $13$ (resta 5). ✔ Con los signos: $13$ y $-8$, porque $13\cdot(-8) = -104$ y $13 + (-8) = 5$.</p><p><b>Paso 8. Factoriza y despeja.</b> $(x + 13)(x - 8) = 0$, así que $x = -13$ o $x = 8$.</p><p><b>Paso 9. Descarta.</b> Un ancho no puede medir $-13$ metros: el ancho es 8 m y el largo es $8 + 5 = 13$ m.</p><p><b>Paso 10. Calcula lo que piden.</b> Perímetro $= 8 + 13 + 8 + 13 = 42$ m.</p><p><b>Respuesta:</b> el perímetro es 42 m (segunda alternativa).</p><p><b>Comprobación:</b> área $8\cdot 13 = 104$ ✔ y el largo es 5 más que el ancho: $13 - 8 = 5$. ✔</p><p><b>¿Por qué no las otras?</b> 21 m es $8 + 13$: suma solo dos lados, la mitad del perímetro. 62 m toma 13 como ancho: largo 18 y perímetro $13 + 18 + 13 + 18 = 62$, pero el área sería $13\cdot 18 = 234$, no 104. 31 m es la mitad de ese error: $13 + 18$.</p>`, conc: 'Responde lo que preguntan: aquí el perímetro, no el lado.' },
    { enun: r`<p>¿Cuáles son las soluciones de $3x^2 - 5x - 2 = 0$?</p>`,
      alts: [r`$2$ y $-\dfrac{1}{3}$`, r`$-2$ y $\dfrac{1}{3}$`, r`$4$ y $-\dfrac{2}{3}$`, r`$6$ y $-1$`], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Las soluciones de la ecuación. Hay un 3 delante de $x^2$, así que el truco de los dos números no sirve directo. Usamos la fórmula general, que sirve siempre.</p><p><b>Paso 2. Anota los números con su signo.</b> $a = 3$, $b = -5$, $c = -2$.</p><p><b>Paso 3. Calcula b².</b> $(-5)^2 = 25$.</p><p><b>Paso 4. Calcula 4ac.</b> $4\cdot 3\cdot(-2) = 12\cdot(-2) = -24$.</p><p><b>Paso 5. Lo de dentro de la raíz.</b> $25 - (-24) = 25 + 24 = 49$.</p><p><b>Paso 6. Saca la raíz.</b> $\sqrt{49} = 7$.</p><p><b>Paso 7. Lo demás.</b> $-b = -(-5) = 5$ y $2a = 2\cdot 3 = 6$. Queda $x = \dfrac{5 \pm 7}{6}$.</p><p><b>Paso 8. Cuenta sumando.</b> $\dfrac{5 + 7}{6} = \dfrac{12}{6} = 2$.</p><p><b>Paso 9. Cuenta restando.</b> $\dfrac{5 - 7}{6} = \dfrac{-2}{6} = -\dfrac{1}{3}$ (simplificamos dividiendo arriba y abajo por 2).</p><p><b>Respuesta:</b> las soluciones son 2 y $-\dfrac{1}{3}$ (primera alternativa).</p><p><b>Comprobación:</b> con $x = 2$: $3\cdot 2^2 - 5\cdot 2 - 2 = 3\cdot 4 - 10 - 2 = 12 - 10 - 2 = 0$. ✔ Con $x = -\dfrac{1}{3}$: $3\cdot\dfrac{1}{9} - 5\cdot\left(-\dfrac{1}{3}\right) - 2 = \dfrac{1}{3} + \dfrac{5}{3} - 2 = \dfrac{6}{3} - 2 = 2 - 2 = 0$. ✔</p><p><b>¿Por qué no las otras?</b> "$-2$ y $\dfrac{1}{3}$" usa $b$ en vez de $-b$: $\dfrac{-5 + 7}{6} = \dfrac{2}{6} = \dfrac{1}{3}$ y $\dfrac{-5 - 7}{6} = \dfrac{-12}{6} = -2$. "$4$ y $-\dfrac{2}{3}$" divide por $a = 3$ en vez de por $2a = 6$: $\dfrac{12}{3} = 4$ y $\dfrac{-2}{3}$. "$6$ y $-1$" divide por 2 en vez de por 6: $\dfrac{12}{2} = 6$ y $\dfrac{-2}{2} = -1$.</p>`, conc: 'Con la fórmula general, cambia el signo de b y divide todo por el doble de a.' },
    { enun: r`<p>¿Cuántas soluciones reales tiene la ecuación $x^2 + 2x + 5 = 0$?</p>`,
      alts: ['Ninguna', 'Una', 'Dos', 'Infinitas'], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> No las soluciones, sino <b>cuántas</b> hay. Para eso no hace falta resolver: basta calcular lo que va dentro de la raíz de la fórmula general, $b^2 - 4ac$, y mirar su signo.</p><p><b>Paso 2. Anota los números.</b> $a = 1$, $b = 2$, $c = 5$.</p><p><b>Paso 3. Calcula b².</b> $2^2 = 4$.</p><p><b>Paso 4. Calcula 4ac.</b> $4\cdot 1\cdot 5 = 20$.</p><p><b>Paso 5. Lo de dentro de la raíz.</b> $4 - 20 = -16$.</p><p><b>Paso 6. Mira el signo.</b> Dio negativo. Ningún número multiplicado por sí mismo da negativo ($4\cdot 4 = 16$ y $(-4)\cdot(-4) = 16$), así que $\sqrt{-16}$ no existe y la fórmula no entrega ningún número.</p><p><b>Respuesta:</b> ninguna solución real (primera alternativa).</p><p><b>Comprobación:</b> la ecuación se puede escribir como $(x + 1)^2 + 4$, porque $(x + 1)^2 = x^2 + 2x + 1$ y $x^2 + 2x + 1 + 4 = x^2 + 2x + 5$. Un cuadrado nunca es negativo, así que la expresión vale 4 o más y nunca llega a 0. ✔</p><p><b>¿Por qué no las otras?</b> "Una" sería si lo de dentro de la raíz diera 0. "Dos" sería si diera positivo; sale, por ejemplo, de sumar $4 + 20 = 24$ en vez de restar. "Infinitas" no pasa nunca: una ecuación de segundo grado tiene como máximo dos soluciones.</p>`, conc: 'Si lo de dentro de la raíz da negativo, no hay soluciones reales.' },
    { enun: r`<p>La distancia $d$, en metros, que recorre un móvil que parte del reposo está dada por $d(t) = a\cdot\dfrac{t^2}{2}$, donde $t$ es el tiempo en segundos y $a$ la aceleración en m/s².</p><p>Si el móvil acelera a 10 m/s², ¿cuántos segundos tardará en recorrer 45 metros?</p>`, src: 'PAES Regular 2026',
      alts: ['3', '4,5', '9', r`$\sqrt{4{,}5}$`], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El tiempo $t$. Nos dan la aceleración ($a = 10$) y la distancia ($d = 45$). Reemplazamos esos datos en la fórmula y despejamos $t$. Como $t$ está al cuadrado, al final sacamos raíz.</p><p><b>Paso 2. Reemplaza.</b> $45 = 10\cdot\dfrac{t^2}{2}$.</p><p><b>Paso 3. Simplifica.</b> $\dfrac{10}{2} = 5$, así que $45 = 5t^2$.</p><p><b>Paso 4. Deja t² solo.</b> El 5 multiplica, así que pasa dividiendo: $t^2 = \dfrac{45}{5} = 9$.</p><p><b>Paso 5. Saca raíz.</b> ¿Qué número multiplicado por sí mismo da 9? $3\cdot 3 = 9$ y $(-3)\cdot(-3) = 9$. Entonces $t = 3$ o $t = -3$.</p><p><b>Paso 6. Descarta.</b> Un tiempo no puede ser negativo: $t = 3$.</p><p><b>Respuesta:</b> tarda 3 segundos (primera alternativa).</p><p><b>Comprobación:</b> $10\cdot\dfrac{3^2}{2} = 10\cdot\dfrac{9}{2} = \dfrac{90}{2} = 45$ metros. ✔</p><p><b>¿Por qué no las otras?</b> 4,5 es $\dfrac{45}{10}$: divide por la aceleración y se olvida del 2 y de la raíz. 9 es $t^2$: falta sacar la raíz; con $t = 9$ se recorren $10\cdot\dfrac{81}{2} = 405$ m. $\sqrt{4{,}5}$ se olvida del 2 de la fórmula ($10t^2 = 45$, $t^2 = 4{,}5$): con ese tiempo se recorren $10\cdot\dfrac{4{,}5}{2} = 22{,}5$ m, no 45.</p>`, conc: 'Reemplaza, deja t² solo y saca raíz; el tiempo es positivo.' },
    { enun: r`<p>El cuadrado de un número más el doble del mismo número es 48.</p><p>¿Cuáles son los números que cumplen esta condición?</p>`,
      alts: [r`$6$ y $-8$`, r`$-6$ y $8$`, r`Solo $6$`, r`$4$ y $-12$`], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Todos los números que cumplen la frase. No sabemos el número, así que lo llamamos $x$, traducimos la frase a una ecuación y la resolvemos. Como es "un número" y no una medida, los negativos sí sirven.</p><p><b>Paso 2. Traduce.</b> El cuadrado del número es $x^2$; el doble es $2x$. La frase dice $x^2 + 2x = 48$.</p><p><b>Paso 3. Deja un 0 a un lado.</b> El 48 pasa restando: $x^2 + 2x - 48 = 0$.</p><p><b>Paso 4. Mira los signos.</b> El número solo, $-48$, es negativo: signos distintos. El que acompaña a $x$ es $+2$: el más grande es positivo. Buscamos dos números que multiplicados den 48 y que se resten 2.</p><p><b>Paso 5. Busca la pareja.</b> $1$ y $48$ (resta 47); $2$ y $24$ (resta 22); $3$ y $16$ (resta 13); $4$ y $12$ (resta 8); $6$ y $8$ (resta 2). ✔ Con los signos: $8$ y $-6$, porque $8\cdot(-6) = -48$ y $8 + (-6) = 2$.</p><p><b>Paso 6. Factoriza.</b> $(x + 8)(x - 6) = 0$.</p><p><b>Paso 7. Regla del cero.</b> $x + 8 = 0$, así que $x = -8$; o bien $x - 6 = 0$, así que $x = 6$. No se descarta ninguna.</p><p><b>Respuesta:</b> los números son 6 y $-8$ (primera alternativa).</p><p><b>Comprobación:</b> con 6: $6^2 + 2\cdot 6 = 36 + 12 = 48$. ✔ Con $-8$: $(-8)^2 + 2\cdot(-8) = 64 - 16 = 48$. ✔</p><p><b>¿Por qué no las otras?</b> "$-6$ y $8$" son los números de la factorización sin darles vuelta el signo: $8^2 + 2\cdot 8 = 64 + 16 = 80$, no 48. "Solo 6" descarta el $-8$, pero aquí es un número, no una medida, y sí sirve. "$4$ y $-12$" multiplican $-48$ pero suman $-8$: $4^2 + 2\cdot 4 = 16 + 8 = 24$, no 48.</p>`, conc: 'Descarta negativos solo si el contexto lo exige.' },
    { enun: r`<p>El producto de dos números enteros positivos consecutivos es 132.</p><p>¿Cuál es la suma de ambos números?</p>`,
      alts: [r`$23$`, r`$25$`, r`$21$`, r`$66$`], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> La suma de los dos números. Sabemos que son positivos, consecutivos (uno justo después del otro) y que multiplicados dan 132. Llamamos $x$ al menor, armamos la ecuación, la resolvemos y al final sumamos.</p><p><b>Paso 2. Traduce.</b> Los números son $x$ y $x + 1$.</p><p><b>Paso 3. Plantea.</b> Su producto es 132: $x(x + 1) = 132$.</p><p><b>Paso 4. Multiplica.</b> $x\cdot x = x^2$ y $x\cdot 1 = x$. Queda $x^2 + x = 132$.</p><p><b>Paso 5. Deja un 0 a un lado.</b> $x^2 + x - 132 = 0$.</p><p><b>Paso 6. Mira los signos.</b> El número solo, $-132$, es negativo: signos distintos. El que acompaña a $x$ es $+1$: el más grande es positivo. Buscamos dos números que multiplicados den 132 y que se resten 1: son $12$ y $11$, porque $12\cdot 11 = 132$ y $12 - 11 = 1$. Con los signos: $12$ y $-11$.</p><p><b>Paso 7. Factoriza y despeja.</b> $(x + 12)(x - 11) = 0$, así que $x = -12$ o $x = 11$.</p><p><b>Paso 8. Descarta.</b> Piden números positivos: $x = 11$. El siguiente es $11 + 1 = 12$.</p><p><b>Paso 9. Calcula lo que piden.</b> $11 + 12 = 23$.</p><p><b>Respuesta:</b> la suma es 23 (primera alternativa).</p><p><b>Comprobación:</b> 11 y 12 son consecutivos y $11\cdot 12 = 132$. ✔</p><p><b>¿Por qué no las otras?</b> 25 es $12 + 13$, pero $12\cdot 13 = 156$. 21 es $10 + 11$, pero $10\cdot 11 = 110$. 66 es $\dfrac{132}{2}$: divide el producto por 2 en vez de resolver la ecuación.</p>`, conc: 'Consecutivos se escriben x y x + 1; al final responde la suma.' },
    { enun: r`<p>Para resolver $x^2 - 6x + 5 = 0$ con la fórmula general se realizó el siguiente procedimiento, cometiéndose un error.</p><p>Paso 1: se identifican $a = 1$, $b = -6$ y $c = 5$.<br>Paso 2: se calcula el discriminante, obteniéndose $36 - 20 = 16$.<br>Paso 3: se reemplaza en la fórmula, obteniéndose $x = \dfrac{-6 \pm 4}{2}$.<br>Paso 4: se calculan las soluciones, obteniéndose $x = -1$ y $x = -5$.</p><p>¿En cuál de los pasos se cometió el error?</p>`,
      alts: ['En el Paso 1', 'En el Paso 2', 'En el Paso 3', 'En el Paso 4'], ok: 2,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Encontrar en qué paso del procedimiento está el error. Lo revisamos rehaciendo cada paso nosotros y comparando con lo que se escribió.</p><p><b>Paso 2. Revisa el Paso 1 del procedimiento.</b> En $x^2 - 6x + 5 = 0$: el número que acompaña a $x^2$ es 1, el que acompaña a $x$ es $-6$ y el número solo es 5. Coincide: <b>correcto</b>.</p><p><b>Paso 3. Revisa el Paso 2.</b> Lo de dentro de la raíz: $b^2 = (-6)^2 = 36$ y $4ac = 4\cdot 1\cdot 5 = 20$, así que $36 - 20 = 16$. Coincide: <b>correcto</b>.</p><p><b>Paso 4. Revisa el Paso 3.</b> $\sqrt{16} = 4$ y $2a = 2\cdot 1 = 2$, bien. Pero la fórmula empieza con $-b$, y $-b = -(-6) = 6$. Se escribió $-6$: <b>aquí está el error</b>. Debió quedar $x = \dfrac{6 \pm 4}{2}$.</p><p><b>Paso 5. Revisa el Paso 4.</b> Con lo que recibió, las cuentas están bien hechas: $\dfrac{-6 + 4}{2} = \dfrac{-2}{2} = -1$ y $\dfrac{-6 - 4}{2} = \dfrac{-10}{2} = -5$. Los resultados son malos porque el error venía del Paso 3.</p><p><b>Paso 6. Lo correcto.</b> $\dfrac{6 + 4}{2} = \dfrac{10}{2} = 5$ y $\dfrac{6 - 4}{2} = \dfrac{2}{2} = 1$.</p><p><b>Respuesta:</b> el error está en el Paso 3 (tercera alternativa).</p><p><b>Comprobación:</b> con $x = 5$: $25 - 30 + 5 = 0$. ✔ Con $x = 1$: $1 - 6 + 5 = 0$. ✔ En cambio, con $x = -1$: $1 + 6 + 5 = 12$, no 0, así que $-1$ no era solución.</p><p><b>¿Por qué no las otras?</b> El Paso 1 y el Paso 2 los rehicimos y coinciden. El Paso 4 opera bien con lo que recibió: su resultado está malo, pero el error lo arrastra del Paso 3.</p>`, conc: 'Si b es negativo, menos b es positivo.' },
    { enun: r`<p>Una de las soluciones de $x^2 + bx - 10 = 0$ es $x = 2$.</p><p>¿Cuál es la otra solución?</p>`,
      alts: [r`$-5$`, r`$5$`, r`$-2$`, r`$3$`], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> La otra solución. Nos falta el número que acompaña a $x$, que se llama $b$. Como $x = 2$ es solución, al reemplazarlo la cuenta tiene que dar 0: eso nos permite encontrar $b$. Después resolvemos la ecuación completa.</p><p><b>Paso 2. Reemplaza x = 2.</b> $2^2 + b\cdot 2 - 10 = 0$.</p><p><b>Paso 3. Calcula.</b> $2^2 = 4$, así que $4 + 2b - 10 = 0$.</p><p><b>Paso 4. Junta los números.</b> $4 - 10 = -6$, así que $2b - 6 = 0$.</p><p><b>Paso 5. Despeja b.</b> El 6 pasa sumando: $2b = 6$. El 2 pasa dividiendo: $b = \dfrac{6}{2} = 3$.</p><p><b>Paso 6. Escribe la ecuación completa.</b> $x^2 + 3x - 10 = 0$.</p><p><b>Paso 7. Busca la pareja.</b> El número solo es negativo: signos distintos. El que acompaña a $x$ es $+3$: el más grande es positivo. Dos números que multiplicados den 10 y se resten 3: $5$ y $2$. Con los signos: $5$ y $-2$, porque $5\cdot(-2) = -10$ y $5 + (-2) = 3$.</p><p><b>Paso 8. Factoriza y despeja.</b> $(x + 5)(x - 2) = 0$, así que $x = -5$ o $x = 2$.</p><p><b>Paso 9. Elige la nueva.</b> El 2 ya lo conocíamos; la otra solución es $-5$.</p><p><b>Respuesta:</b> la otra solución es $-5$ (primera alternativa).</p><p><b>Comprobación:</b> $(-5)^2 + 3\cdot(-5) - 10 = 25 - 15 - 10 = 0$. ✔ También: cuando no hay número delante de $x^2$, las dos soluciones multiplicadas dan el número solo: $2\cdot(-5) = -10$. ✔</p><p><b>¿Por qué no las otras?</b> 5 tiene el signo al revés: $5^2 + 3\cdot 5 - 10 = 25 + 15 - 10 = 30$, no 0. 3 es el valor de $b$, no una solución: $3^2 + 3\cdot 3 - 10 = 9 + 9 - 10 = 8$. $-2$ supone que las soluciones son opuestas: $(-2)^2 + 3\cdot(-2) - 10 = 4 - 6 - 10 = -12$.</p>`, conc: 'Reemplaza la solución conocida para hallar el número que falta y luego resuelve.' }
  ]
},

{
  id: 'cuadratica_grafico', unit: 'Unidad 2 · Función cuadrática', icon: '⛰️',
  title: 'Gráfico de la función cuadrática',
  desc: 'Paso a paso y con números: hacia dónde abre la parábola, qué tan abierta es, cortes con los ejes, tabla de valores, vértice, eje de simetría y cómo se mueve.',
  slides: [
    { t: 'La parábola: ¿hacia dónde abre?', b: r`
      <div class="cols"><div>
      <p>Una <b>función cuadrática</b> es una función como $f(x) = ax^2 + bx + c$, donde la $x$ aparece al cuadrado. El número $a$, el que acompaña a $x^2$, no puede ser $0$.</p>
      <p>Su dibujo es una curva con forma de U que se llama <b>parábola</b>.</p>
      <p><b>Paso 1.</b> Probemos con $f(x) = x^2$. Con $x = 2$: $f(2) = 2^2 = 4$. Con $x = -2$: $f(-2) = (-2)^2 = 4$. Los dos lados quedan arriba: la U abre hacia <b>arriba</b>.</p>
      <p><b>Paso 2.</b> Ahora $g(x) = -x^2$. Primero se hace el cuadrado y después se pone el signo. Con $x = 2$: $g(2) = -(2^2) = -4$. Con $x = -2$: $g(-2) = -((-2)^2) = -4$. Los dos lados quedan abajo: la U se da vuelta y abre hacia <b>abajo</b>.</p>
      <p><b>Paso 3.</b> La única diferencia es el signo del número de adelante: en $x^2$ es $a = 1$ y en $-x^2$ es $a = -1$.</p>
      </div><div>
      <div class="qfig">${''}</div>
      <div class="box"><b>La regla</b><br>· $a$ positivo: abre hacia arriba, como una U. Tiene un punto más bajo, que se llama <b>mínimo</b>.<br>· $a$ negativo: abre hacia abajo, como una U dada vuelta. Tiene un punto más alto, que se llama <b>máximo</b>.</div>
      <div class="box alert"><b>Mira solo el número de $x^2$</b> Para saber hacia dónde abre no importan $b$ ni $c$. En $3 + 5x - 2x^2$ el número que acompaña a $x^2$ es $-2$, negativo: abre hacia abajo.</div>
      </div></div>` },
    { t: '¿Qué tan abierta es?', b: r`
      <div class="cols"><div>
      <p>Comparemos $x^2$, $3x^2$ y $\dfrac{1}{2}x^2$. Las tres abren hacia arriba, porque el número de adelante es positivo. Pero no tienen el mismo ancho.</p>
      <p><b>Paso 1.</b> Con $x = 1$: $1^2 = 1$; $3\cdot 1^2 = 3\cdot 1 = 3$; $\dfrac{1}{2}\cdot 1^2 = \dfrac{1}{2}\cdot 1 = 0{,}5$.</p>
      <p><b>Paso 2.</b> Con $x = 2$: $2^2 = 4$; $3\cdot 2^2 = 3\cdot 4 = 12$; $\dfrac{1}{2}\cdot 2^2 = \dfrac{1}{2}\cdot 4 = 2$.</p>
      <p><b>Paso 3.</b> $3x^2$ sube el triple de rápido que $x^2$, así que se ve más cerrada: más <b>angosta</b>. $\dfrac{1}{2}x^2$ sube a la mitad de rápido, así que se ve más <b>ancha</b>.</p>
      </div><div>
      <div class="qfig">${''}</div>
      <div class="box"><b>La regla</b> Mientras más grande es el número $a$ (sin mirar su signo), más angosta es la parábola. Si $a$ está entre $0$ y $1$, como $\dfrac{1}{2}$, es más ancha que $x^2$.</div>
      <div class="box alert"><b>El signo no cuenta para el ancho</b> $-3x^2$ es igual de angosta que $3x^2$; la diferencia es que abre hacia abajo.</div>
      </div></div>` },
    { t: '¿Dónde corta al eje Y?', b: r`
      <div class="cols"><div>
      <p>El eje $Y$ es la línea vertical del plano. Todos sus puntos tienen $x = 0$. Por eso, para saber dónde lo cruza la parábola, reemplazamos $x = 0$.</p>
      <p>Ejemplo: $f(x) = x^2 - 6x + 8$.</p>
      <p><b>Paso 1.</b> Reemplaza $x = 0$: $f(0) = 0^2 - 6\cdot 0 + 8$.</p>
      <p><b>Paso 2.</b> Calcula: $0^2 = 0$ y $6\cdot 0 = 0$. Entonces $f(0) = 0 - 0 + 8 = 8$.</p>
      <p><b>Paso 3.</b> El punto donde cruza el eje $Y$ es $(0, 8)$.</p>
      </div><div>
      <div class="qfig">${''}</div>
      <div class="box"><b>Atajo</b> Al poner $x = 0$, todo lo que tiene $x$ se hace cero y solo queda $c$, el número suelto. Así que el corte con el eje $Y$ siempre es $(0, c)$.</div>
      <div class="box alert"><b>Ojo con el orden</b> Se escribe $(0, 8)$: primero la $x$, que es $0$, y después la altura. El punto $(8, 0)$ es otro, y está sobre el eje $X$.</div>
      </div></div>` },
    { t: 'Tabla de valores', b: r`
      <div class="cols"><div>
      <p>Para dibujar una parábola a mano se hace una <b>tabla de valores</b>: se eligen algunas $x$ y se calcula la altura $f(x)$ de cada una. Ejemplo: $f(x) = x^2 - 2x - 3$.</p>
      <p><b>Paso 1.</b> Elige algunas $x$ cerca del $0$: $-1$, $0$, $1$, $2$ y $3$.</p>
      <p><b>Paso 2.</b> Reemplaza cada una en la función y calcula. Con los negativos, usa paréntesis.</p>
      <table><thead><tr><th>$x$</th><th>reemplazo</th><th>cuenta</th><th>$f(x)$</th></tr></thead><tbody>
      <tr><td>$-1$</td><td>$(-1)^2 - 2\cdot(-1) - 3$</td><td>$1 + 2 - 3$</td><td>$0$</td></tr>
      <tr><td>$0$</td><td>$0^2 - 2\cdot 0 - 3$</td><td>$0 - 0 - 3$</td><td>$-3$</td></tr>
      <tr><td>$1$</td><td>$1^2 - 2\cdot 1 - 3$</td><td>$1 - 2 - 3$</td><td>$-4$</td></tr>
      <tr><td>$2$</td><td>$2^2 - 2\cdot 2 - 3$</td><td>$4 - 4 - 3$</td><td>$-3$</td></tr>
      <tr><td>$3$</td><td>$3^2 - 2\cdot 3 - 3$</td><td>$9 - 6 - 3$</td><td>$0$</td></tr></tbody></table>
      <p><b>Paso 3.</b> Cada fila es un punto: $(-1, 0)$, $(0, -3)$, $(1, -4)$, $(2, -3)$ y $(3, 0)$. Márcalos en el plano y únelos con una curva suave.</p>
      </div><div>
      <div class="qfig">${''}</div>
      <div class="box alert"><b>Con negativos, paréntesis</b> $(-1)^2 = (-1)\cdot(-1) = 1$, positivo. Y $-2\cdot(-1) = +2$, porque menos por menos da más.</div>
      <div class="box"><b>Fíjate</b> Las alturas se repiten como en un espejo: $0, -3, -4, -3, 0$. No es casualidad: lo vamos a usar en las próximas láminas.</div>
      </div></div>` },
    { t: 'Ceros: dónde corta al eje X', b: r`
      <div class="cols"><div>
      <p>Los <b>ceros</b> son los valores de $x$ donde la parábola cruza el eje $X$, la línea horizontal. Ahí la altura es $0$. Por eso, para encontrarlos, igualamos la función a $0$.</p>
      <p>Ejemplo: $f(x) = x^2 - 6x + 8$.</p>
      <p><b>Paso 1.</b> Iguala a cero: $x^2 - 6x + 8 = 0$.</p>
      <p><b>Paso 2.</b> Busca dos números que multiplicados den $8$ y sumados den $-6$. Son $-2$ y $-4$, porque $(-2)\cdot(-4) = 8$ y $-2 + (-4) = -6$.</p>
      <p><b>Paso 3.</b> Con ellos se factoriza: $(x - 2)(x - 4) = 0$.</p>
      <p><b>Paso 4.</b> Una multiplicación da $0$ solo si alguno de los factores es $0$. Si $x - 2 = 0$, entonces $x = 2$. Si $x - 4 = 0$, entonces $x = 4$.</p>
      <p><b>Paso 5.</b> Los puntos de corte con el eje $X$ son $(2, 0)$ y $(4, 0)$.</p>
      </div><div>
      <div class="qfig">${''}</div>
      <div class="box"><b>Comprobación</b> $f(2) = 2^2 - 6\cdot 2 + 8 = 4 - 12 + 8 = 0$ y $f(4) = 4^2 - 6\cdot 4 + 8 = 16 - 24 + 8 = 0$. ✔</div>
      <div class="box alert"><b>No confundas</b> En el corte con el eje $Y$ la $x$ vale $0$: el punto es $(0, c)$. En los cortes con el eje $X$ la altura vale $0$: los puntos son $(x, 0)$.</div>
      </div></div>` },
    { t: '¿Cuántas veces corta al eje X?', b: r`
      <div class="cols"><div>
      <p>No todas las parábolas cortan al eje $X$ dos veces. En el dibujo, las tres tienen $a = 1$ y $b = -4$; solo cambia el número suelto $c$.</p>
      <p>· $x^2 - 4x + 3$ lo corta <b>dos</b> veces.<br>· $x^2 - 4x + 4$ lo toca en <b>un</b> solo punto, justo en su punta.<br>· $x^2 - 4x + 6$ <b>no</b> lo toca: queda entera por arriba.</p>
      <p>Para saberlo sin dibujar se calcula el <b>discriminante</b>, $\Delta = b^2 - 4ac$. Es el número que va dentro de la raíz en la fórmula de la ecuación cuadrática.</p>
      <p><b>Paso 1.</b> En $x^2 - 4x + 3$: $\Delta = (-4)^2 - 4\cdot 1\cdot 3 = 16 - 12 = 4$. Es positivo.</p>
      <p><b>Paso 2.</b> En $x^2 - 4x + 4$: $\Delta = (-4)^2 - 4\cdot 1\cdot 4 = 16 - 16 = 0$.</p>
      <p><b>Paso 3.</b> En $x^2 - 4x + 6$: $\Delta = (-4)^2 - 4\cdot 1\cdot 6 = 16 - 24 = -8$. Es negativo.</p>
      </div><div>
      <div class="qfig">${''}</div>
      <div class="box"><b>La regla</b><br>· $\Delta$ positivo: corta al eje $X$ dos veces.<br>· $\Delta = 0$: lo toca en un solo punto, que es la punta.<br>· $\Delta$ negativo: no lo toca.</div>
      <div class="box alert"><b>Ojo con el cuadrado</b> $(-4)^2 = (-4)\cdot(-4) = 16$, positivo. Si escribes $-4^2$ sin paréntesis te da $-16$ y todo sale mal.</div>
      </div></div>` },
    { t: 'El vértice: la punta de la parábola', b: r`
      <div class="cols"><div>
      <p>El <b>vértice</b> es la punta de la parábola: su punto más bajo si abre hacia arriba, o su punto más alto si abre hacia abajo.</p>
      <p>En la tabla de $f(x) = x^2 - 2x - 3$ el punto más bajo fue $(1, -4)$. Ese es su vértice.</p>
      <p>Para no hacer una tabla cada vez, hay una fórmula que da la $x$ de la punta:</p>
      $$x_v = -\dfrac{b}{2a}$$
      <p>Se lee "menos $b$, dividido por dos veces $a$". Después, la altura de la punta se obtiene reemplazando esa $x$ en la función: $y_v = f(x_v)$.</p>
      <p><b>Probémosla.</b> En $x^2 - 2x - 3$ tenemos $a = 1$ y $b = -2$. Entonces $x_v = -\dfrac{-2}{2\cdot 1} = -\dfrac{-2}{2} = -(-1) = 1$. Es la misma $x$ que vimos en la tabla.</p>
      </div><div>
      <div class="qfig">${''}</div>
      <div class="box"><b>¿De dónde sale?</b> La parábola es pareja a ambos lados, así que su punta queda justo al medio de los ceros. En $x^2 - 2x - 3$ los ceros son $-1$ y $3$, y el punto medio es $\dfrac{-1 + 3}{2} = \dfrac{2}{2} = 1$. La fórmula da ese mismo punto medio sin tener que buscar los ceros.</div>
      </div></div>` },
    { t: 'Vértice: ejemplo completo', b: r`
      <div class="cols"><div>
      <p>Encontremos el vértice de $f(x) = x^2 + 2x - 1$.</p>
      <p><b>Paso 1.</b> Identifica los números: $a = 1$ (acompaña a $x^2$), $b = 2$ (acompaña a $x$) y $c = -1$ (el número suelto).</p>
      <p><b>Paso 2.</b> Calcula lo de abajo de la fracción: $2a = 2\cdot 1 = 2$.</p>
      <p><b>Paso 3.</b> Calcula la $x$ del vértice: $x_v = -\dfrac{b}{2a} = -\dfrac{2}{2} = -1$.</p>
      <p><b>Paso 4.</b> Reemplaza $x = -1$ en la función para obtener la altura: $y_v = (-1)^2 + 2\cdot(-1) - 1$.</p>
      <p><b>Paso 5.</b> Calcula por partes: $(-1)^2 = 1$ y $2\cdot(-1) = -2$. Entonces $y_v = 1 - 2 - 1 = -2$.</p>
      <p><b>Paso 6.</b> El vértice es $(-1, -2)$.</p>
      </div><div>
      <div class="qfig">${''}</div>
      <div class="box"><b>¿Mínimo o máximo?</b> Como $a = 1$ es positivo, la parábola abre hacia arriba y el vértice es su punto más bajo. El valor <b>mínimo</b> de la función es $-2$.</div>
      <div class="box alert"><b>Ojo con el signo</b> Si $b$ es negativo, el menos de la fórmula lo vuelve positivo. Con $a = 1$ y $b = -6$: $x_v = -\dfrac{-6}{2\cdot 1} = \dfrac{6}{2} = 3$.</div>
      </div></div>` },
    { t: 'Eje de simetría y el truco del espejo', b: r`
      <div class="cols"><div>
      <p>El <b>eje de simetría</b> es la línea vertical que pasa por el vértice. Parte la parábola en dos mitades iguales, como un espejo.</p>
      <p>En $f(x) = x^2 + 2x - 1$ el vértice es $(-1, -2)$, así que el eje es la recta $x = -1$.</p>
      <p><b>Paso 1.</b> Calcula dos alturas: $f(1) = 1^2 + 2\cdot 1 - 1 = 1 + 2 - 1 = 2$ y $f(-3) = (-3)^2 + 2\cdot(-3) - 1 = 9 - 6 - 1 = 2$. Los dos puntos tienen la misma altura.</p>
      <p><b>Paso 2.</b> Mide la distancia de cada uno al eje. De $-1$ a $1$ hay $1 - (-1) = 2$. De $-3$ a $-1$ hay $-1 - (-3) = 2$. Son iguales.</p>
      <p><b>Paso 3.</b> Entonces el eje queda justo al medio de los dos: $\dfrac{-3 + 1}{2} = \dfrac{-2}{2} = -1$.</p>
      </div><div>
      <div class="qfig">${''}</div>
      <div class="box"><b>El truco del espejo</b> Si dos valores $p$ y $q$ dan la misma altura, el eje está en el punto medio: $x = \dfrac{p + q}{2}$.</div>
      <div class="box"><b>Al revés también sirve</b> Si conoces el eje y un punto, su gemelo está a la misma distancia, al otro lado. Con el eje $x = -1$ y el punto $(1, 2)$: el $1$ está $2$ a la derecha del eje, así que el gemelo está $2$ a la izquierda, en $-1 - 2 = -3$.</div>
      </div></div>` },
    { t: 'Forma canónica: el vértice a la vista', b: r`
      <div class="cols"><div>
      <p>A veces la función viene escrita de otra manera, por ejemplo $f(x) = (x - 2)^2 + 1$. Hagamos su tabla.</p>
      <table><thead><tr><th>$x$</th><th>cuenta</th><th>$f(x)$</th></tr></thead><tbody>
      <tr><td>$0$</td><td>$(0 - 2)^2 + 1 = 4 + 1$</td><td>$5$</td></tr>
      <tr><td>$1$</td><td>$(1 - 2)^2 + 1 = 1 + 1$</td><td>$2$</td></tr>
      <tr><td>$2$</td><td>$(2 - 2)^2 + 1 = 0 + 1$</td><td>$1$</td></tr>
      <tr><td>$3$</td><td>$(3 - 2)^2 + 1 = 1 + 1$</td><td>$2$</td></tr>
      <tr><td>$4$</td><td>$(4 - 2)^2 + 1 = 4 + 1$</td><td>$5$</td></tr></tbody></table>
      <p><b>Paso 1.</b> La altura más baja es $1$ y aparece en $x = 2$. El vértice es $(2, 1)$.</p>
      <p><b>Paso 2.</b> ¿Por qué ahí? Un número al cuadrado nunca es negativo, así que $(x - 2)^2$ vale como mínimo $0$. Vale $0$ cuando $x - 2 = 0$, o sea en $x = 2$.</p>
      <p><b>Paso 3.</b> En ese punto la función vale $0 + 1 = 1$. El $+1$ de afuera es la altura del vértice.</p>
      </div><div>
      <div class="qfig">${''}</div>
      <div class="box"><b>La regla</b> Esta manera de escribir se llama <b>forma canónica</b>: $f(x) = a(x - h)^2 + k$, y su vértice es $(h, k)$. El número de <b>adentro</b> del paréntesis se toma con el signo <b>cambiado</b>; el de <b>afuera</b>, tal cual.</div>
      <div class="box"><b>Otro ejemplo</b> En $(x + 3)^2 - 4$, el paréntesis vale $0$ cuando $x = -3$, porque $-3 + 3 = 0$. El vértice es $(-3, -4)$.</div>
      </div></div>` },
    { t: 'Subir y bajar la parábola', b: r`
      <div class="cols"><div>
      <p>Comparemos $x^2$ con $x^2 + 3$ y con $x^2 - 2$, usando las mismas $x$.</p>
      <table><thead><tr><th>$x$</th><th>$x^2$</th><th>$x^2 + 3$</th><th>$x^2 - 2$</th></tr></thead><tbody>
      <tr><td>$0$</td><td>$0$</td><td>$0 + 3 = 3$</td><td>$0 - 2 = -2$</td></tr>
      <tr><td>$1$</td><td>$1$</td><td>$1 + 3 = 4$</td><td>$1 - 2 = -1$</td></tr>
      <tr><td>$2$</td><td>$4$</td><td>$4 + 3 = 7$</td><td>$4 - 2 = 2$</td></tr></tbody></table>
      <p><b>Paso 1.</b> Para cada $x$, $x^2 + 3$ da justo $3$ más que $x^2$. Todos los puntos suben $3$, y el vértice pasa de $(0, 0)$ a $(0, 3)$.</p>
      <p><b>Paso 2.</b> $x^2 - 2$ da siempre $2$ menos que $x^2$. Todos los puntos bajan $2$, y el vértice pasa a $(0, -2)$.</p>
      </div><div>
      <div class="qfig">${''}</div>
      <div class="box"><b>La regla</b> Un número sumado <b>afuera</b>, al final, mueve la parábola hacia arriba si es positivo y hacia abajo si es negativo. La forma no cambia.</div>
      </div></div>` },
    { t: 'Correr la parábola a los lados', b: r`
      <div class="cols"><div>
      <p>Ahora comparemos $x^2$ con $(x - 2)^2$. Fíjate en qué $x$ vale $0$ cada una.</p>
      <p><b>Paso 1.</b> $x^2$ vale $0$ en $x = 0$: su punta está en $(0, 0)$.</p>
      <p><b>Paso 2.</b> $(x - 2)^2$ vale $0$ cuando $x - 2 = 0$, o sea en $x = 2$: su punta está en $(2, 0)$. La parábola se corrió $2$ a la <b>derecha</b>.</p>
      <p><b>Paso 3.</b> Lo mismo pasa con todos los puntos. $x^2$ vale $1$ en $x = 1$, y $(x - 2)^2$ vale $1$ en $x = 3$, porque $(3 - 2)^2 = 1^2 = 1$. Todo ocurre $2$ lugares más a la derecha.</p>
      <p><b>Paso 4.</b> $(x + 3)^2$ vale $0$ cuando $x + 3 = 0$, o sea en $x = -3$. Esa parábola se corrió $3$ a la <b>izquierda</b>.</p>
      </div><div>
      <div class="qfig">${''}</div>
      <div class="box"><b>La regla</b> Un número <b>dentro</b> del paréntesis mueve la parábola a los lados. Con resta va a la derecha: $(x - 2)^2$ se corre $2$ a la derecha. Con suma va a la izquierda: $(x + 3)^2$ se corre $3$ a la izquierda. Parece al revés, pero es lo que dicen las cuentas.</div>
      <div class="box alert"><b>Las dos cosas juntas</b> $(x - 2)^2 + 1$ se corre $2$ a la derecha y sube $1$. Su vértice es $(2, 1)$, como vimos en la forma canónica.</div>
      </div></div>` },
    { t: 'Graficador: pruébalo tú', b: r`
      <p>Escribe los valores de $a$, $b$ y $c$ y mira cómo queda $f(x) = ax^2 + bx + c$. El graficador marca el vértice y los cortes con los ejes, y calcula el discriminante $\Delta$.</p>
      <div class="cols"><div>
      <div class="graf" data-a="1" data-b="-2" data-c="-3"></div>
      </div><div>
      <div class="box"><b>Experimentos</b><br>· Aprieta <b>▶ a</b>: la parábola se cierra, se abre y se da vuelta. Cuando $a = 0$ deja de ser parábola y queda una recta.<br>· Aprieta <b>▶ c</b>: la parábola sube y baja entera, sin cambiar de forma. Fíjate en el momento en que deja de cortar al eje $X$: ahí $\Delta$ se vuelve negativo.<br>· Aprieta <b>▶ b</b>: el vértice se mueve, pero la parábola siempre pasa por $(0, c)$.</div>
      <div class="box alert"><b>Desafío</b> Busca valores para que la parábola abra hacia abajo y su vértice sea $(1, 4)$. Pista: $a = -1$.</div>
      </div></div>` },
    { t: 'Resumen', b: r`
      <table><thead><tr><th>Quiero saber</th><th>Cómo lo obtengo</th></tr></thead><tbody>
      <tr><td>Hacia dónde abre</td><td>mira el signo de $a$: positivo, hacia arriba; negativo, hacia abajo</td></tr>
      <tr><td>Qué tan abierta es</td><td>mientras más grande es $a$ (sin mirar el signo), más angosta</td></tr>
      <tr><td>Corte con el eje $Y$</td><td>reemplaza $x = 0$; el punto es $(0, c)$</td></tr>
      <tr><td>Cortes con el eje $X$ (ceros)</td><td>iguala la función a cero y resuelve</td></tr>
      <tr><td>Cuántos cortes con el eje $X$</td><td>signo de $\Delta = b^2 - 4ac$: positivo dos, cero uno, negativo ninguno</td></tr>
      <tr><td>Vértice</td><td>$x_v = -\dfrac{b}{2a}$; después reemplaza esa $x$ para obtener $y_v$</td></tr>
      <tr><td>Eje de simetría</td><td>la recta vertical $x = x_v$; o el punto medio de dos $x$ con la misma altura</td></tr>
      <tr><td>Vértice en $a(x - h)^2 + k$</td><td>$(h, k)$: el de adentro con el signo cambiado, el de afuera tal cual</td></tr></tbody></table>
      <div class="box" style="margin-top:14px"><b>Método PAES</b> Para reconocer una parábola en un gráfico, revisa en este orden y ve descartando alternativas: 1. hacia dónde abre; 2. dónde cruza el eje $Y$; 3. dónde están la punta (el vértice) o los cortes con el eje $X$.</div>` }
  ],
  example: {
    src: 'PAES Regular 2026, adaptada',
    enun: r`<p>Considera la función cuadrática $f$, con dominio el conjunto de los números reales. En la figura se representa su gráfica, con su eje de simetría $x = -1$, y el punto $(2, 7)$.</p><p>¿Para cuál de los siguientes valores de $x$ se tiene que $f(x) = 7$?</p>`,
    fig: { type: 'plot', x: [-6, 4], y: [-3, 9], fns: [{ f: x => x * x + 2 * x - 1, lab: 'f', at: [2.6, 8.6] }], vline: -1, marks: [[2, 7, '(2, 7)']] },
    alts: [r`$4$`, r`$-3$`, r`$-4$`, r`$-5$`], ok: 2,
    sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Nos dan el eje de simetría, $x = -1$, y un punto, $(2, 7)$: en $x = 2$ la altura es $7$. Buscamos otra $x$ con la misma altura $7$. Usamos el truco del espejo: la parábola es igual a ambos lados del eje, así que el punto $(2, 7)$ tiene un gemelo al otro lado, a la misma distancia del eje.</p><p><b>Paso 2.</b> Mira el gráfico: la línea punteada vertical es el eje $x = -1$, y el punto $(2, 7)$ está a su derecha.</p><p><b>Paso 3.</b> Calcula la distancia del punto al eje: $2 - (-1) = 2 + 1 = 3$. El punto está $3$ unidades a la derecha del eje.</p><p><b>Paso 4.</b> El gemelo está $3$ unidades a la izquierda del eje: $-1 - 3 = -4$.</p><p><b>Paso 5.</b> Como el gemelo tiene la misma altura, $f(-4) = 7$.</p><p><b>Respuesta:</b> $x = -4$.</p><p><b>Comprobación:</b> el punto medio entre $-4$ y $2$ debe ser el eje: $\dfrac{-4 + 2}{2} = \dfrac{-2}{2} = -1$. ✔</p><p><b>¿Por qué no las otras?</b> $4$ sale de reflejar el $2$ respecto del eje $Y$ (cambiarle el signo) en vez de respecto del eje $x = -1$. $-3$ sale de contar solo $2$ unidades desde el eje: $-1 - 2 = -3$. $-5$ sale de contar $4$ unidades: $-1 - 4 = -5$.</p>`,
    conc: 'Dos puntos con la misma altura están a la misma distancia del eje de simetría, uno a cada lado.'
  },
  bank: [
    { enun: r`<p>¿Cuál es el vértice de la parábola $f(x) = -2x^2 + 8x - 3$?</p>`,
      alts: [r`$(2, 5)$`, r`$(-2, -27)$`, r`$(4, -3)$`, r`$(2, 21)$`], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El vértice, la punta de la parábola. La función viene como $ax^2 + bx + c$, así que primero calculamos la $x$ de la punta con $x_v = -\dfrac{b}{2a}$ y después reemplazamos para obtener la altura.</p><p><b>Paso 2.</b> Identifica los números: $a = -2$, $b = 8$ y $c = -3$.</p><p><b>Paso 3.</b> Calcula lo de abajo de la fracción: $2a = 2\cdot(-2) = -4$.</p><p><b>Paso 4.</b> Calcula $x_v = -\dfrac{8}{-4}$. Primero $\dfrac{8}{-4} = -2$; con el menos de adelante queda $-(-2) = 2$. Entonces $x_v = 2$.</p><p><b>Paso 5.</b> Reemplaza $x = 2$: $y_v = -2\cdot 2^2 + 8\cdot 2 - 3$. Primero la potencia: $2^2 = 4$, así que $-2\cdot 4 = -8$. Luego $8\cdot 2 = 16$.</p><p><b>Paso 6.</b> Suma todo: $y_v = -8 + 16 - 3 = 8 - 3 = 5$.</p><p><b>Respuesta:</b> el vértice es $(2, 5)$.</p><p><b>Comprobación:</b> con el truco del espejo, $x = 1$ y $x = 3$ deben tener la misma altura. $f(1) = -2\cdot 1^2 + 8\cdot 1 - 3 = -2 + 8 - 3 = 3$ y $f(3) = -2\cdot 3^2 + 8\cdot 3 - 3 = -18 + 24 - 3 = 3$. Su punto medio es $\dfrac{1 + 3}{2} = 2$. ✔</p><p><b>¿Por qué no las otras?</b> $(-2, -27)$ olvida el menos de la fórmula: calcula $\dfrac{8}{-4} = -2$ y se queda ahí. $(4, -3)$ divide por $a$ en vez de por $2a$: $-\dfrac{8}{-2} = 4$. $(2, 21)$ tiene bien la $x$, pero escribe $-2\cdot 4$ como $+8$: $8 + 16 - 3 = 21$.</p>`, conc: 'Primero x del vértice con −b/(2a); después reemplaza para la altura.' },
    { enun: r`<p>¿En qué valores de $x$ la gráfica de $f(x) = x^2 - 6x + 8$ corta al eje $X$?</p>`,
      alts: [r`$2$ y $4$`, r`$-2$ y $-4$`, r`$0$ y $8$`, r`Solo en $3$`], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Los puntos donde la parábola cruza el eje $X$. Ahí la altura es $0$, así que igualamos la función a $0$ y resolvemos la ecuación.</p><p><b>Paso 2.</b> Iguala a cero: $x^2 - 6x + 8 = 0$.</p><p><b>Paso 3.</b> Busca dos números que multiplicados den $8$ y sumados den $-6$: son $-2$ y $-4$, porque $(-2)\cdot(-4) = 8$ y $-2 + (-4) = -6$.</p><p><b>Paso 4.</b> Factoriza: $(x - 2)(x - 4) = 0$.</p><p><b>Paso 5.</b> Una multiplicación es $0$ si uno de los factores es $0$. Si $x - 2 = 0$, entonces $x = 2$. Si $x - 4 = 0$, entonces $x = 4$.</p><p><b>Respuesta:</b> corta al eje $X$ en $x = 2$ y $x = 4$.</p><p><b>Comprobación:</b> $f(2) = 4 - 12 + 8 = 0$ y $f(4) = 16 - 24 + 8 = 0$. ✔</p><p><b>¿Por qué no las otras?</b> $-2$ y $-4$ son los números de la factorización, pero falta despejar: $x - 2 = 0$ da $x = 2$, no $-2$. $0$ y $8$ salen del corte con el eje $Y$, el punto $(0, 8)$. $3$ es la $x$ del vértice, $-\dfrac{-6}{2} = 3$, que está entre los dos cortes pero no es uno de ellos.</p>`, conc: 'Para los cortes con el eje X, iguala la función a cero.' },
    { enun: r`<p>¿Cuál de las siguientes afirmaciones describe la gráfica de $f(x) = -x^2 + 3x + 4$?</p>`,
      alts: ['Abre hacia abajo y corta al eje Y en (0, 4).', 'Abre hacia arriba y corta al eje Y en (0, 4).', 'Abre hacia abajo y corta al eje Y en (0, 3).', 'Abre hacia arriba y corta al eje Y en (4, 0).'], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Dos cosas: hacia dónde abre, que lo dice el signo del número que acompaña a $x^2$, y dónde corta al eje $Y$, que se obtiene reemplazando $x = 0$.</p><p><b>Paso 2. ¿Hacia dónde abre?</b> $-x^2$ es lo mismo que $-1\cdot x^2$, así que $a = -1$. Es negativo: abre hacia abajo. Esto descarta las dos alternativas que dicen "hacia arriba".</p><p><b>Paso 3. ¿Dónde corta al eje Y?</b> Reemplaza $x = 0$: $f(0) = -0^2 + 3\cdot 0 + 4 = 0 + 0 + 4 = 4$.</p><p><b>Paso 4.</b> El punto es $(0, 4)$: primero la $x$, que es $0$, y después la altura, $4$.</p><p><b>Respuesta:</b> abre hacia abajo y corta al eje $Y$ en $(0, 4)$.</p><p><b>¿Por qué no las otras?</b> "Abre hacia arriba y corta en $(0, 4)$" lee mal el signo de $a$. "Corta en $(0, 3)$" confunde el corte con $3$, que es el número que acompaña a $x$. "Corta en $(4, 0)$" lee mal el signo y además da un punto con altura $0$, que está sobre el eje $X$, no sobre el eje $Y$.</p>`, conc: 'El signo de a dice hacia dónde abre; el número suelto c dice dónde cruza el eje Y.' },
    { enun: r`<p>En el gráfico se representa una función cuadrática $f$.</p><p>¿Cuál de las siguientes expresiones corresponde a $f(x)$?</p>`,
      fig: { type: 'plot', x: [-3, 5], y: [-5, 6], fns: [{ f: x => x * x - 2 * x - 3, lab: 'f', at: [4.2, 5.4] }], marks: [[-1, 0], [3, 0], [0, -3], [1, -4]] },
      alts: [r`$f(x) = x^2 - 2x - 3$`, r`$f(x) = -x^2 + 2x + 3$`, r`$f(x) = x^2 + 2x - 3$`, r`$f(x) = (x - 1)^2 + 4$`], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Elegir la fórmula que dibuja esta parábola. Leemos del gráfico hacia dónde abre, dónde cruza el eje $Y$ y dónde está la punta, y vamos descartando alternativas.</p><p><b>Paso 2. ¿Hacia dónde abre?</b> Los lados de la curva suben: abre hacia arriba, así que el número de $x^2$ es positivo. Se descarta $-x^2 + 2x + 3$, que tiene $a = -1$.</p><p><b>Paso 3. ¿Dónde cruza el eje Y?</b> Sigue el eje vertical hasta la curva: el punto marcado es $(0, -3)$. Reemplaza $x = 0$ en las que quedan: $x^2 - 2x - 3$ da $-3$ ✔; $x^2 + 2x - 3$ da $-3$ ✔; $(0 - 1)^2 + 4 = 1 + 4 = 5$ ✘. Se descarta $(x - 1)^2 + 4$.</p><p><b>Paso 4. ¿Dónde está la punta?</b> El punto más bajo marcado es $(1, -4)$. Reemplaza $x = 1$ en las dos que quedan: $1^2 - 2\cdot 1 - 3 = 1 - 2 - 3 = -4$ ✔; $1^2 + 2\cdot 1 - 3 = 1 + 2 - 3 = 0$ ✘. Se descarta $x^2 + 2x - 3$.</p><p><b>Paso 5.</b> Queda solo $x^2 - 2x - 3$.</p><p><b>Respuesta:</b> $f(x) = x^2 - 2x - 3$.</p><p><b>Comprobación:</b> el gráfico corta al eje $X$ en $-1$ y $3$. $f(-1) = (-1)^2 - 2\cdot(-1) - 3 = 1 + 2 - 3 = 0$ y $f(3) = 9 - 6 - 3 = 0$. ✔</p><p><b>¿Por qué no las otras?</b> $-x^2 + 2x + 3$ tiene los mismos cortes con el eje $X$, pero abre hacia abajo. $x^2 + 2x - 3$ corta al eje $X$ en $1$ y $-3$: es el dibujo reflejado en el eje $Y$. $(x - 1)^2 + 4$ tiene la punta en $(1, 4)$, arriba del eje $X$, y no en $(1, -4)$.</p>`, conc: 'En un gráfico revisa en orden: hacia dónde abre, corte con el eje Y y la punta.' },
    { enun: r`<p>Considera las funciones $f(x) = x^2$ y $g(x) = x^2 + 3$.</p><p>¿Cómo se obtiene la gráfica de $g$ a partir de la de $f$?</p>`,
      alts: ['Trasladándola 3 unidades hacia arriba.', 'Trasladándola 3 unidades hacia abajo.', 'Trasladándola 3 unidades a la derecha.', 'Trasladándola 3 unidades a la izquierda.'], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Cómo se mueve la parábola de $f$ para convertirse en la de $g$. Lo vemos con números: reemplazamos las mismas $x$ en las dos y comparamos las alturas.</p><p><b>Paso 2.</b> Con $x = 0$: $f(0) = 0^2 = 0$ y $g(0) = 0^2 + 3 = 0 + 3 = 3$.</p><p><b>Paso 3.</b> Con $x = 1$: $f(1) = 1^2 = 1$ y $g(1) = 1^2 + 3 = 1 + 3 = 4$.</p><p><b>Paso 4.</b> Con $x = 2$: $f(2) = 2^2 = 4$ y $g(2) = 2^2 + 3 = 4 + 3 = 7$.</p><p><b>Paso 5.</b> Para la misma $x$, $g$ siempre da $3$ más que $f$. Cada punto sube $3$ y la forma no cambia. Esto pasa porque el $+3$ está afuera, sumado al final.</p><p><b>Respuesta:</b> se traslada 3 unidades hacia arriba.</p><p><b>Comprobación:</b> el vértice de $f$ es $(0, 0)$ y el de $g$ es $(0, 3)$: subió $3$. ✔</p><p><b>¿Por qué no las otras?</b> Hacia abajo sería $x^2 - 3$. A la derecha sería $(x - 3)^2$, con el número dentro del paréntesis. A la izquierda sería $(x + 3)^2$.</p>`, conc: 'Un número sumado afuera mueve la parábola hacia arriba o hacia abajo.' },
    { enun: r`<p>¿Cuál es el vértice de la parábola $h(x) = (x - 2)^2 + 1$?</p>`,
      alts: [r`$(2, 1)$`, r`$(-2, 1)$`, r`$(2, -1)$`, r`$(1, 2)$`], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El vértice. La función viene en forma canónica, $a(x - h)^2 + k$, donde el vértice se ve directo. Igual lo razonamos para no equivocarnos con los signos.</p><p><b>Paso 2.</b> $(x - 2)^2$ es un número al cuadrado, así que nunca es negativo. Lo más chico que puede valer es $0$.</p><p><b>Paso 3.</b> Vale $0$ cuando $x - 2 = 0$, o sea cuando $x = 2$. Esa es la $x$ de la punta.</p><p><b>Paso 4.</b> Reemplaza $x = 2$: $h(2) = (2 - 2)^2 + 1 = 0^2 + 1 = 0 + 1 = 1$. Esa es la altura de la punta.</p><p><b>Paso 5.</b> Con la regla se llega a lo mismo: adentro hay $-2$ y se toma con el signo cambiado, $2$; afuera hay $+1$ y se toma tal cual, $1$.</p><p><b>Respuesta:</b> el vértice es $(2, 1)$.</p><p><b>Comprobación:</b> con el truco del espejo, $x = 1$ y $x = 3$ deben dar la misma altura: $h(1) = (1 - 2)^2 + 1 = 1 + 1 = 2$ y $h(3) = (3 - 2)^2 + 1 = 1 + 1 = 2$. Su punto medio es $2$. ✔</p><p><b>¿Por qué no las otras?</b> $(-2, 1)$ copia el $-2$ de adentro sin cambiarle el signo. $(2, -1)$ le cambia el signo también al número de afuera, que va tal cual. $(1, 2)$ escribe los dos números en el orden equivocado.</p>`, conc: 'En (x − h)² + k el vértice es (h, k): adentro signo cambiado, afuera tal cual.' },
    { enun: r`<p>Se compara la gráfica de $f(x) = x^2$ con la de $g(x) = 3x^2$.</p><p>¿Cuál de las siguientes afirmaciones es verdadera?</p>`,
      alts: ['La de g es más angosta y tiene el mismo vértice.', 'La de g es más ancha y tiene el mismo vértice.', 'La de g está trasladada 3 unidades hacia arriba.', 'La de g abre hacia abajo.'], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Comparar las dos parábolas: ancho, vértice y hacia dónde abren. Lo vemos con números, reemplazando las mismas $x$ en las dos.</p><p><b>Paso 2.</b> Con $x = 1$: $f(1) = 1^2 = 1$ y $g(1) = 3\cdot 1^2 = 3\cdot 1 = 3$.</p><p><b>Paso 3.</b> Con $x = 2$: $f(2) = 2^2 = 4$ y $g(2) = 3\cdot 2^2 = 3\cdot 4 = 12$.</p><p><b>Paso 4.</b> $g$ sube el triple de rápido que $f$, así que su U se ve más cerrada: es más angosta.</p><p><b>Paso 5.</b> Con $x = 0$: $f(0) = 0$ y $g(0) = 3\cdot 0 = 0$. Las dos tienen su punto más bajo en $(0, 0)$: mismo vértice.</p><p><b>Paso 6.</b> $a = 3$ es positivo, así que $g$ abre hacia arriba, igual que $f$.</p><p><b>Respuesta:</b> la de $g$ es más angosta y tiene el mismo vértice.</p><p><b>¿Por qué no las otras?</b> Más ancha sería con un número entre $0$ y $1$, como $\dfrac{1}{2}x^2$. Trasladarla $3$ hacia arriba sería $x^2 + 3$: el $3$ sumado afuera, no multiplicando. Abrir hacia abajo necesita un número negativo adelante, y aquí es $3$.</p>`, conc: 'Mientras más grande el número de adelante, más angosta la parábola.' },
    { enun: r`<p>¿Para qué valores de $c$ la gráfica de $f(x) = x^2 - 4x + c$ <b>no</b> corta al eje $X$?</p>`,
      alts: [r`$c > 4$`, r`$c < 4$`, r`$c = 4$`, r`$c > 16$`], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Los valores de $c$ con los que la parábola no toca el eje $X$. Eso pasa cuando el discriminante es negativo, $\Delta < 0$. Así que calculamos $\Delta$ dejando $c$ como letra y pedimos que sea negativo.</p><p><b>Paso 2.</b> Identifica los números: $a = 1$, $b = -4$ y $c$ queda como $c$.</p><p><b>Paso 3.</b> Calcula $\Delta = b^2 - 4ac = (-4)^2 - 4\cdot 1\cdot c = 16 - 4c$.</p><p><b>Paso 4.</b> Pide que sea negativo: $16 - 4c < 0$.</p><p><b>Paso 5.</b> Suma $4c$ a ambos lados para dejarlo positivo: $16 < 4c$.</p><p><b>Paso 6.</b> Divide ambos lados por $4$: $4 < c$, o sea $c > 4$.</p><p><b>Respuesta:</b> $c > 4$.</p><p><b>Comprobación:</b> con $c = 5$: $\Delta = 16 - 4\cdot 5 = 16 - 20 = -4$, negativo, no corta. ✔ Con $c = 4$: $\Delta = 16 - 16 = 0$, la toca en un punto; por eso el $4$ no sirve.</p><p><b>¿Por qué no las otras?</b> $c < 4$ da $\Delta$ positivo: por ejemplo $c = 3$ da $16 - 12 = 4$, y la parábola corta dos veces. $c = 4$ da $\Delta = 0$: toca el eje en un punto. $c > 16$ olvida dividir por $4$ en el último paso, y deja fuera valores como $c = 5$ que sí sirven.</p>`, conc: 'No corta al eje X cuando el discriminante es negativo.' },
    { enun: r`<p>La siguiente gráfica de una función cuadrática representa la altura, en cm, que alcanza un chorro de agua según la distancia horizontal, en cm, recorrida desde el punto en que emerge.</p><p>¿Cuál de las siguientes afirmaciones es verdadera?</p>`, src: 'PAES Invierno 2026, adaptada',
      fig: { type: 'plot', x: [0, 60, 10], y: [0, 30, 5], xlab: 'distancia', ylab: 'altura', fns: [{ f: x => -x * (x - 60) / 36 }] },
      alts: ['La distancia horizontal máxima recorrida es 25 cm.', 'La altura máxima alcanzada es 60 cm.', 'La altura a los 10 cm horizontales es igual a la altura a los 50 cm.', 'La altura máxima se alcanza a los 60 cm horizontales.'], ok: 2,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Decidir cuál afirmación es verdadera leyendo el gráfico. El eje horizontal es la distancia y el vertical es la altura. Leemos dónde sale y dónde cae el chorro, y dónde está su punta.</p><p><b>Paso 2. Dónde sale y dónde cae.</b> La curva parte en el suelo en $0$ y vuelve a tocar el eje horizontal en $60$. El chorro recorre $60$ cm de distancia.</p><p><b>Paso 3. Dónde está la punta.</b> El eje de simetría está justo al medio de $0$ y $60$: $\dfrac{0 + 60}{2} = \dfrac{60}{2} = 30$. Sube desde el $30$ del eje horizontal hasta la curva y mira hacia el eje vertical: marca $25$. La altura máxima es $25$ cm y se alcanza a los $30$ cm de distancia.</p><p><b>Paso 4. Revisa la alternativa de 10 y 50.</b> El $10$ está $30 - 10 = 20$ a la izquierda del eje. El $50$ está $50 - 30 = 20$ a la derecha. Están a la misma distancia del eje, uno a cada lado, así que por el truco del espejo tienen la misma altura.</p><p><b>Respuesta:</b> la altura a los 10 cm horizontales es igual a la altura a los 50 cm.</p><p><b>Comprobación:</b> en el gráfico, sube desde el $10$ y desde el $50$ hasta la curva: las dos alturas quedan iguales, cerca de $14$ cm. ✔</p><p><b>¿Por qué no las otras?</b> $25$ cm es la altura máxima, no la distancia; la distancia máxima es $60$ cm. $60$ cm es la distancia donde cae el chorro, no su altura. A los $60$ cm el chorro ya está en el suelo; la altura máxima se alcanza a los $30$ cm.</p>`, conc: 'El eje de simetría está al medio de los dos cortes con el eje X.' },
    { enun: r`<p>¿En qué punto la gráfica de $f(x) = 2x^2 - 3x - 5$ corta al eje $Y$?</p>`,
      alts: [r`$(0, -5)$`, r`$(-5, 0)$`, r`$(0, 2)$`, r`$\left(\dfrac{5}{2}, 0\right)$`], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El punto donde la parábola cruza el eje $Y$. En el eje $Y$ todos los puntos tienen $x = 0$, así que reemplazamos $x = 0$.</p><p><b>Paso 2.</b> Reemplaza: $f(0) = 2\cdot 0^2 - 3\cdot 0 - 5$.</p><p><b>Paso 3.</b> Calcula por partes: $0^2 = 0$, así que $2\cdot 0 = 0$; y $3\cdot 0 = 0$. Entonces $f(0) = 0 - 0 - 5 = -5$.</p><p><b>Paso 4.</b> El punto se escribe con la $x$ primero: $(0, -5)$. Fíjate que $-5$ es el número suelto $c$, como siempre.</p><p><b>Respuesta:</b> $(0, -5)$.</p><p><b>¿Por qué no las otras?</b> $(-5, 0)$ escribe los números al revés: ese punto tiene altura $0$ y estaría sobre el eje $X$. $(0, 2)$ usa el $2$, que es el número que acompaña a $x^2$. $\left(\dfrac{5}{2}, 0\right)$ es un corte con el eje $X$, no con el eje $Y$.</p>`, conc: 'El corte con el eje Y se obtiene con x = 0 y siempre es (0, c).' },
    { enun: r`<p>Considera la función $f(x) = -(x + 1)^2 + 4$.</p><p>¿Cuál(es) de las siguientes afirmaciones es (son) verdadera(s)?</p><p>I) Su vértice es $(-1, 4)$.<br>II) Su valor máximo es 4.<br>III) Sus ceros son $-3$ y $1$.</p>`,
      alts: ['Solo I', 'Solo I y II', 'Solo II y III', 'I, II y III'], ok: 3,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Revisar cada afirmación por separado. La función está en forma canónica, $a(x - h)^2 + k$, así que el vértice se lee directo; para los ceros, igualamos a cero.</p><p><b>Paso 2. Afirmación I.</b> El paréntesis $(x + 1)^2$ vale $0$ cuando $x + 1 = 0$, o sea en $x = -1$. Ahí $f(-1) = -(-1 + 1)^2 + 4 = -0 + 4 = 4$. El vértice es $(-1, 4)$. <b>Verdadera.</b></p><p><b>Paso 3. Afirmación II.</b> Adelante hay un signo menos, así que $a = -1$, negativo: la parábola abre hacia abajo y el vértice es su punto más alto. Su altura es $4$, así que el valor máximo es $4$. <b>Verdadera.</b></p><p><b>Paso 4. Afirmación III, primera parte.</b> Iguala a cero: $-(x + 1)^2 + 4 = 0$. Pasa el paréntesis sumando al otro lado: $4 = (x + 1)^2$.</p><p><b>Paso 5. Afirmación III, segunda parte.</b> ¿Qué números al cuadrado dan $4$? El $2$ y el $-2$. Si $x + 1 = 2$, entonces $x = 2 - 1 = 1$. Si $x + 1 = -2$, entonces $x = -2 - 1 = -3$. Los ceros son $-3$ y $1$. <b>Verdadera.</b></p><p><b>Respuesta:</b> I, II y III.</p><p><b>Comprobación:</b> $f(1) = -(1 + 1)^2 + 4 = -4 + 4 = 0$ y $f(-3) = -(-3 + 1)^2 + 4 = -(-2)^2 + 4 = -4 + 4 = 0$. ✔</p><p><b>¿Por qué no las otras?</b> "Solo I" y "Solo I y II" dejan fuera la III, por ejemplo al usar solo la raíz positiva y quedarse con un cero. "Solo II y III" descarta la I por copiar el $+1$ de adentro sin cambiarle el signo, como si el vértice fuera $(1, 4)$.</p>`, conc: 'Si el número de adelante es negativo, el vértice es el punto más alto.' },
    { enun: r`<p>Una función cuadrática $f$ cumple que $f(1) = f(7)$.</p><p>¿Cuál es la ecuación de su eje de simetría?</p>`,
      alts: [r`$x = 4$`, r`$x = 3$`, r`$x = 6$`, r`$x = 8$`], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El eje de simetría. El dato $f(1) = f(7)$ dice que en $x = 1$ y en $x = 7$ la parábola tiene la misma altura: son puntos gemelos. Usamos el truco del espejo: el eje está justo al medio de los dos.</p><p><b>Paso 2.</b> Escribe el punto medio: $x = \dfrac{1 + 7}{2}$.</p><p><b>Paso 3.</b> Suma arriba: $1 + 7 = 8$.</p><p><b>Paso 4.</b> Divide: $\dfrac{8}{2} = 4$.</p><p><b>Respuesta:</b> el eje de simetría es la recta $x = 4$.</p><p><b>Comprobación:</b> de $1$ a $4$ hay $4 - 1 = 3$, y de $4$ a $7$ hay $7 - 4 = 3$. Las dos distancias son iguales. ✔</p><p><b>¿Por qué no las otras?</b> $3$ es la distancia de cada punto al eje, no la posición del eje. $6$ es $7 - 1$, la distancia entre los dos puntos. $8$ es $1 + 7$ sin dividir por $2$.</p>`, conc: 'Si dos x tienen la misma altura, el eje está en su punto medio.' }
  ]
},

{
  id: 'cuadratica_problemas', unit: 'Unidad 2 · Función cuadrática', icon: '🏀',
  title: 'Problemas con función cuadrática',
  desc: 'Paso a paso: lanzamientos, áreas máximas (también contra un muro) y ganancias. Cada pregunta típica con su propia receta: valor inicial, cuándo se llega al máximo, cuál es el máximo y cuándo se llega a cero.',
  slides: [
    { t: 'Primero: ¿me piden una x o una y?', b: r`
      <div class="cols"><div>
      <p>En estos problemas siempre hay una fórmula. Por ejemplo, la altura de una pelota según el tiempo que pasa.</p>
      <p>· La letra de adentro ($x$ o $t$) es lo que tú eliges: el tiempo, las unidades vendidas, la medida de un lado.<br>· El resultado ($y$) es lo que sale de la fórmula: la altura, el área, la ganancia.</p>
      <p>Antes de calcular, lee la pregunta y decide qué buscas:</p>
      <p>· "¿<b>Cuándo</b>...?", "¿<b>cuántas</b> unidades...?", "¿<b>qué medida</b>...?": buscas una $x$.<br>· "¿<b>Qué altura</b>...?", "¿<b>cuánta</b> área o ganancia...?": buscas una $y$, el resultado.</p>
      </div><div>
      <div class="box"><b>Ejemplo</b> "¿A los cuántos segundos llega arriba la pelota?" pide un tiempo: es una $x$. "¿Qué altura alcanza?" pide una altura: es una $y$.</div>
      <div class="box alert"><b>Ojo</b> Muchas alternativas incorrectas de la PAES son la $x$ cuando te piden la $y$, o al revés. Decidir esto primero ya evita la mitad de los errores.</div>
      </div></div>` },
    { t: 'Las cuatro preguntas típicas', b: r`
      <div class="cols"><div>
      <p>Casi todos los problemas preguntan una de estas cuatro cosas. Cada una tiene su receta:</p>
      <p><b>1. ¿Cuál es el valor inicial?</b> Es el valor al comienzo, cuando todavía no pasa nada. Receta: reemplazar $x = 0$.</p>
      <p><b>2. ¿Cuándo se llega al máximo?</b> Es la $x$ del vértice. Receta: una fórmula corta que veremos.</p>
      <p><b>3. ¿Cuál es el máximo?</b> Es la $y$ del vértice. Receta: reemplazar en la fórmula la $x$ de la pregunta 2.</p>
      <p><b>4. ¿Cuándo llega al suelo o se hace cero?</b> Receta: igualar la fórmula a cero y despejar.</p>
      </div><div>
      <div class="box"><b>Vértice</b> Es la punta de la parábola: su punto más alto (si abre hacia abajo, como un cerro) o su punto más bajo (si abre hacia arriba, como un valle).</div>
      <div class="box"><b>Ceros</b> Son los puntos donde la parábola toca el eje $X$, o sea, donde el resultado vale 0.</div>
      <div class="box alert"><b>El orden importa</b> La pregunta 3 necesita la respuesta de la 2: primero se calcula "cuándo" y después "cuánto".</div>
      </div></div>` },
    { t: 'Lanzamientos: la fórmula de la altura', b: r`
      <div class="cols"><div>
      <p>Cuando se lanza una pelota hacia arriba, su altura después de $t$ segundos se calcula con una fórmula como esta:</p>
      $$h(t) = -5t^2 + 20t$$
      <p>· $t$ es el tiempo, en segundos (lo que eliges).<br>· $h(t)$ es la altura, en metros (lo que sale).</p>
      <p>Probémosla con un número. Al primer segundo, $t = 1$:</p>
      <p>$h(1) = -5\cdot 1^2 + 20\cdot 1 = -5\cdot 1 + 20 = -5 + 20 = 15$.</p>
      <p>O sea, al segundo 1 la pelota va a 15 m de altura.</p>
      </div><div>
      <div class="qfig">${''}</div>
      <div class="box"><b>¿Para qué sirve el −5?</b> El número que acompaña a $t^2$ es negativo. Eso hace que la parábola abra hacia abajo, como un cerro: la pelota sube, frena y vuelve a caer. Por eso el vértice es el punto más alto.</div>
      <div class="box"><b>La misma pelota</b> En las próximas cuatro láminas respondemos, una por una, las cuatro preguntas típicas con esta misma fórmula.</div>
      </div></div>` },
    { t: 'Pregunta 1: ¿desde qué altura parte?', b: r`
      <div class="cols"><div>
      <p>"¿Desde dónde parte?" pregunta por la altura al comienzo, cuando el reloj marca cero. Por eso reemplazamos $t = 0$.</p>
      <p><b>Paso 1.</b> Escribimos la fórmula con un 0 en cada $t$: $h(0) = -5\cdot 0^2 + 20\cdot 0$.</p>
      <p><b>Paso 2.</b> Primera parte: $0^2 = 0$, así que $-5\cdot 0 = 0$.</p>
      <p><b>Paso 3.</b> Segunda parte: $20\cdot 0 = 0$.</p>
      <p><b>Paso 4.</b> Sumamos: $h(0) = 0 + 0 = 0$. La pelota parte desde el suelo.</p>
      </div><div>
      <div class="box"><b>Atajo</b> Al poner $t = 0$, todo lo que tiene $t$ se vuelve 0. Solo queda el número que está solo, sin letra. Por ejemplo, en $h(t) = -5t^2 + 10t + 15$ la altura inicial es 15 m: la pelota se lanzó desde 15 m de altura, quizás desde un edificio.</div>
      <div class="box alert"><b>No es el máximo</b> La altura inicial no es la altura más alta: después de lanzarla, la pelota sigue subiendo.</div>
      </div></div>` },
    { t: 'Pregunta 2: ¿cuándo llega a lo más alto?', b: r`
      <div class="cols"><div>
      <p>Miremos dos momentos. Ya vimos que $h(1) = 15$. Ahora $t = 3$:</p>
      <p>$h(3) = -5\cdot 3^2 + 20\cdot 3 = -5\cdot 9 + 60 = -45 + 60 = 15$.</p>
      <p>La pelota está a 15 m al subir (segundo 1) y otra vez a 15 m al bajar (segundo 3). La parábola es simétrica, o sea, sus dos mitades son iguales como en un espejo. Entonces la punta está justo al medio: en $t = 2$.</p>
      <p>Hay una fórmula que hace este cálculo por ti. Si la parábola es $at^2 + bt + c$, la punta está en</p>
      $$t_v = -\dfrac{b}{2a}$$
      <p><b>Paso 1.</b> Buscamos los números: $a = -5$ (acompaña a $t^2$) y $b = 20$ (acompaña a $t$).</p>
      <p><b>Paso 2.</b> Calculamos el de abajo: $2a = 2\cdot(-5) = -10$.</p>
      <p><b>Paso 3.</b> Dividimos: $\dfrac{20}{-10} = -2$. El signo menos de adelante lo da vuelta: $-(-2) = 2$.</p>
      <p>Llega a lo más alto a los 2 segundos.</p>
      </div><div>
      <div class="qfig">${''}</div>
      <div class="box"><b>¿Qué es $t_v$?</b> Se lee "t del vértice": el momento en que la pelota está en la punta.</div>
      <div class="box alert"><b>Cuidado con los signos</b> $a$ es negativo, así que $2a$ también. Menos dividido por menos da más: el resultado es un tiempo positivo.</div>
      </div></div>` },
    { t: 'Pregunta 3: ¿qué altura máxima alcanza?', b: r`
      <div class="cols"><div>
      <p>Ya sabemos <b>cuándo</b> llega arriba: a los 2 segundos. Para saber <b>qué tan alto</b> llega, reemplazamos $t = 2$ en la fórmula.</p>
      <p><b>Paso 1.</b> Escribimos: $h(2) = -5\cdot 2^2 + 20\cdot 2$.</p>
      <p><b>Paso 2.</b> Primero la potencia: $2^2 = 4$. Entonces $-5\cdot 4 = -20$.</p>
      <p><b>Paso 3.</b> La otra parte: $20\cdot 2 = 40$.</p>
      <p><b>Paso 4.</b> Sumamos: $h(2) = -20 + 40 = 20$.</p>
      <p>La altura máxima es 20 m.</p>
      </div><div>
      <div class="qfig">${''}</div>
      <div class="box"><b>El vértice completo</b> Es el punto $(2, 20)$: el primer número es el tiempo y el segundo es la altura.</div>
      <div class="box alert"><b>No confundas</b> 2 s es <b>cuándo</b> llega arriba; 20 m es <b>qué tan alto</b> llega. Las dos suelen aparecer como alternativas.</div>
      </div></div>` },
    { t: 'Pregunta 4: ¿cuándo vuelve al suelo?', b: r`
      <div class="cols"><div>
      <p>En el suelo la altura es 0. Por eso igualamos la fórmula a cero:</p>
      $$-5t^2 + 20t = 0$$
      <p><b>Paso 1.</b> Las dos partes se pueden escribir con $-5t$: $-5t^2 = -5t\cdot t$ y $20t = -5t\cdot(-4)$. Lo sacamos como factor común: $-5t(t - 4) = 0$.</p>
      <p><b>Paso 2.</b> Si una multiplicación da 0, alguno de los factores vale 0. Entonces $-5t = 0$ o $t - 4 = 0$.</p>
      <p><b>Paso 3.</b> De $-5t = 0$ sale $t = 0$: es el momento del lanzamiento, cuando recién sale del suelo.</p>
      <p><b>Paso 4.</b> De $t - 4 = 0$ sale $t = 4$: vuelve al suelo a los 4 segundos.</p>
      </div><div>
      <div class="qfig">${''}</div>
      <div class="box"><b>Comprobación</b> $h(4) = -5\cdot 4^2 + 20\cdot 4 = -5\cdot 16 + 80 = -80 + 80 = 0$. ✔ Además, 4 es el doble de 2: sube durante 2 segundos y baja durante otros 2.</div>
      <div class="box alert"><b>¿Cuál cero elegir?</b> $t = 0$ es cuando parte. La respuesta a "¿cuándo vuelve al suelo?" es el otro.</div>
      </div></div>` },
    { t: 'Áreas máximas: armar la fórmula', b: r`
      <div class="cols"><div>
      <p>Con 40 m de cerca queremos armar un rectángulo. ¿Qué medidas dan el área más grande?</p>
      <p>Probemos rectángulos que usan los 40 m: $5$ por $15$ da $75$ m²; $8$ por $12$ da $96$ m²; $10$ por $10$ da $100$ m². La cerca es la misma, pero el área cambia.</p>
      <p><b>Paso 1.</b> Un rectángulo tiene dos largos y dos anchos. Así que un largo más un ancho es la mitad de la cerca: $\dfrac{40}{2} = 20$.</p>
      <p><b>Paso 2.</b> Llamamos $x$ a un lado. El otro mide lo que falta para llegar a 20: $20 - x$.</p>
      <p><b>Paso 3.</b> Área = lado por lado: $A(x) = x(20 - x)$.</p>
      <p><b>Paso 4.</b> Multiplicamos: $x\cdot 20 = 20x$ y $x\cdot(-x) = -x^2$. Queda $A(x) = -x^2 + 20x$.</p>
      </div><div>
      <svg viewBox="0 0 220 230" width="220" style="display:block;margin:0 auto;max-width:100%;height:auto" role="img" aria-label="Rectángulo de perímetro 40 metros que cambia de forma: el área más grande es el cuadrado de lado 10">
        <rect x="20" y="20" width="9" height="171" fill="#fff3e6" stroke="#e8680c" stroke-width="3">
          <animate attributeName="width" values="9;90;171;90;9" dur="8s" repeatCount="indefinite"/>
          <animate attributeName="height" values="171;90;9;90;171" dur="8s" repeatCount="indefinite"/>
          <animate attributeName="fill" values="#fff3e6;#ffd166;#fff3e6;#ffd166;#fff3e6" dur="8s" repeatCount="indefinite"/></rect>
        <text x="110" y="214" font-size="12.5" text-anchor="middle" fill="#6e6e73">Siempre 40 m de cerca;</text>
        <text x="110" y="228" font-size="12.5" text-anchor="middle" fill="#6e6e73">se pinta amarillo al ser cuadrado</text>
      </svg>
      <div class="box"><b>Probemos la fórmula</b> Con $x = 5$: el otro lado es $20 - 5 = 15$ y el área es $5\cdot 15 = 75$ m². Coincide con lo que calculamos a mano. ✔</div>
      </div></div>` },
    { t: 'Áreas máximas: encontrar el máximo', b: r`
      <div class="cols"><div>
      <p>Tenemos $A(x) = -x^2 + 20x$. El número que acompaña a $x^2$ es $-1$, negativo: la parábola abre hacia abajo y su punta es el área más grande.</p>
      <p><b>Paso 1.</b> Buscamos los números: $a = -1$ y $b = 20$.</p>
      <p><b>Paso 2.</b> El de abajo: $2a = 2\cdot(-1) = -2$.</p>
      <p><b>Paso 3.</b> Dividimos: $\dfrac{20}{-2} = -10$, y el menos de adelante lo da vuelta: $x_v = -(-10) = 10$. Un lado mide 10 m.</p>
      <p><b>Paso 4.</b> El otro lado: $20 - 10 = 10$ m.</p>
      <p><b>Paso 5.</b> El área: $10\cdot 10 = 100$ m².</p>
      </div><div>
      <div class="qfig">${''}</div>
      <div class="box"><b>Sale un cuadrado</b> Si toda la cerca rodea el terreno, el rectángulo de área más grande es siempre un cuadrado.</div>
      <div class="box alert"><b>¿Qué te piden?</b> "¿Cuánto mide el lado?" es 10 (la $x$). "¿Cuál es el área máxima?" es 100 m² (la $y$).</div>
      </div></div>` },
    { t: 'Contra un muro: armar la fórmula', b: r`
      <div class="cols"><div>
      <p>Ahora el corral va pegado a un muro, y el muro hace de cuarto lado. Con 60 m de malla cercamos solo los otros tres lados.</p>
      <p><b>Paso 1.</b> Los dos lados que salen del muro miden $x$ cada uno. Juntos usan $x + x = 2x$ metros de malla.</p>
      <p><b>Paso 2.</b> La malla que sobra va en el lado de enfrente, el paralelo al muro: mide $60 - 2x$.</p>
      <p><b>Paso 3.</b> Área = lado por lado: $A(x) = x(60 - 2x)$.</p>
      <p><b>Paso 4.</b> Multiplicamos: $x\cdot 60 = 60x$ y $x\cdot(-2x) = -2x^2$. Queda $A(x) = -2x^2 + 60x$.</p>
      </div><div>
      <svg viewBox="0 0 220 125" width="220" style="display:block;margin:0 auto;max-width:100%;height:auto" role="img" aria-label="Corral rectangular pegado a un muro: dos lados de medida x salen del muro y el lado de enfrente mide 60 menos 2x">
        <rect x="15" y="14" width="190" height="16" fill="#8e8e93"/>
        <text x="110" y="26" font-size="11" text-anchor="middle" fill="#fff">muro (sin malla)</text>
        <polyline points="50,30 50,92 170,92 170,30" fill="#fff3e6" stroke="#e8680c" stroke-width="3"/>
        <text x="38" y="66" font-size="14" text-anchor="middle" fill="#1d1d1f">x</text>
        <text x="182" y="66" font-size="14" text-anchor="middle" fill="#1d1d1f">x</text>
        <text x="110" y="112" font-size="14" text-anchor="middle" fill="#1d1d1f">60 − 2x</text>
      </svg>
      <div class="box alert"><b>Por qué cambia</b> Sin muro dividíamos la cerca por 2. Aquí no: un lado no lleva malla, así que la malla se reparte en $x + x + (60 - 2x) = 60$.</div>
      </div></div>` },
    { t: 'Contra un muro: encontrar el máximo', b: r`
      <div class="cols"><div>
      <p>Tenemos $A(x) = -2x^2 + 60x$. El número que acompaña a $x^2$ es $-2$, negativo: abre hacia abajo y la punta es el área más grande.</p>
      <p><b>Paso 1.</b> Buscamos los números: $a = -2$ y $b = 60$.</p>
      <p><b>Paso 2.</b> El de abajo: $2a = 2\cdot(-2) = -4$.</p>
      <p><b>Paso 3.</b> Dividimos: $\dfrac{60}{-4} = -15$, y el menos de adelante lo da vuelta: $x_v = -(-15) = 15$. Los lados que salen del muro miden 15 m.</p>
      <p><b>Paso 4.</b> El lado de enfrente: $60 - 2\cdot 15 = 60 - 30 = 30$ m.</p>
      <p><b>Paso 5.</b> El área: $15\cdot 30 = 450$ m².</p>
      </div><div>
      <div class="qfig">${''}</div>
      <div class="box alert"><b>No es un cuadrado</b> El lado de enfrente (30 m) es el doble de los otros (15 m). Con muro, el truco del cuadrado no sirve: hay que calcular.</div>
      <div class="box"><b>Comprobación</b> Con $x = 14$: $14\cdot(60 - 28) = 14\cdot 32 = 448$ m². Con $x = 16$: $16\cdot(60 - 32) = 16\cdot 28 = 448$ m². Los dos dan menos que 450. ✔</div>
      </div></div>` },
    { t: 'Ganancias: leer la fórmula', b: r`
      <div class="cols"><div>
      <p>Una empresa gana $G(x) = -x^2 + 40x - 300$ miles de pesos al vender $x$ unidades.</p>
      <p>· $x$ es la cantidad de unidades vendidas (lo que eliges).<br>· $G(x)$ es la ganancia, en miles de pesos (lo que sale). Si da negativa, la empresa pierde plata.</p>
      <p><b>Valor inicial.</b> Si no vende nada, $x = 0$:</p>
      <p>$G(0) = -0^2 + 40\cdot 0 - 300 = 0 + 0 - 300 = -300$.</p>
      <p>Sin vender nada pierde 300 mil pesos: son gastos que tiene que pagar igual, como el arriendo.</p>
      </div><div>
      <div class="qfig">${''}</div>
      <div class="box"><b>Abre hacia abajo</b> El número que acompaña a $x^2$ es $-1$, negativo: la parábola es un cerro y su punta es la ganancia más grande.</div>
      </div></div>` },
    { t: 'Ganancias: ¿cuántas unidades dan la ganancia máxima?', b: r`
      <div class="cols"><div>
      <p>"¿Cuántas unidades...?" pide una cantidad de unidades: una $x$. Es la $x$ del vértice, $x_v = -\dfrac{b}{2a}$.</p>
      <p><b>Paso 1.</b> Buscamos los números en $G(x) = -x^2 + 40x - 300$: $a = -1$ y $b = 40$. El $-300$ no se usa aquí.</p>
      <p><b>Paso 2.</b> El de abajo: $2a = 2\cdot(-1) = -2$.</p>
      <p><b>Paso 3.</b> Dividimos: $\dfrac{40}{-2} = -20$, y el menos de adelante lo da vuelta: $x_v = -(-20) = 20$.</p>
      <p>La ganancia máxima se logra vendiendo 20 unidades.</p>
      </div><div>
      <div class="box alert"><b>Esto es una x</b> 20 es una cantidad de unidades, no una cantidad de dinero. Si te preguntan cuánto se gana, falta un paso más (la próxima lámina).</div>
      </div></div>` },
    { t: 'Ganancias: ¿cuál es la ganancia máxima?', b: r`
      <div class="cols"><div>
      <p>Ahora piden dinero: una $y$. Reemplazamos $x = 20$ en la fórmula.</p>
      <p><b>Paso 1.</b> Escribimos: $G(20) = -20^2 + 40\cdot 20 - 300$.</p>
      <p><b>Paso 2.</b> Primero la potencia: $20^2 = 400$, así que $-20^2 = -400$.</p>
      <p><b>Paso 3.</b> La multiplicación: $40\cdot 20 = 800$.</p>
      <p><b>Paso 4.</b> Sumamos de izquierda a derecha: $-400 + 800 = 400$.</p>
      <p><b>Paso 5.</b> Restamos los gastos: $400 - 300 = 100$.</p>
      <p>La ganancia máxima es 100 mil pesos, o sea, <span class="peso">$100.000</span>.</p>
      </div><div>
      <div class="box alert"><b>Ojo con el signo</b> En $-x^2$ con $x = 20$, primero se eleva y después se pone el menos: da $-400$, no $+400$.</div>
      <div class="box"><b>El vértice</b> Es el punto $(20, 100)$: vendiendo 20 unidades se ganan 100 mil pesos.</div>
      </div></div>` },
    { t: 'Ganancias: ¿cuándo no se gana ni se pierde?', b: r`
      <div class="cols"><div>
      <p>"Ni se gana ni se pierde" quiere decir ganancia cero. Igualamos la fórmula a cero:</p>
      $$-x^2 + 40x - 300 = 0$$
      <p><b>Paso 1.</b> Multiplicamos todo por $-1$ para que $x^2$ quede positivo (el 0 sigue siendo 0): $x^2 - 40x + 300 = 0$.</p>
      <p><b>Paso 2.</b> Buscamos dos números que multiplicados den $300$ y sumados den $-40$. Son $-10$ y $-30$: $(-10)\cdot(-30) = 300$ y $-10 + (-30) = -40$.</p>
      <p><b>Paso 3.</b> Factorizamos: $(x - 10)(x - 30) = 0$.</p>
      <p><b>Paso 4.</b> Un factor tiene que valer 0. De $x - 10 = 0$ sale $x = 10$; de $x - 30 = 0$ sale $x = 30$.</p>
      <p>Vendiendo 10 o 30 unidades la ganancia es cero.</p>
      </div><div>
      <div class="qfig">${''}</div>
      <div class="box"><b>¿Dónde hay ganancia?</b> El cerro está sobre el eje $X$ entre los dos ceros: vendiendo entre 10 y 30 unidades se gana. Con menos de 10 o más de 30, se pierde.</div>
      </div></div>` },
    { t: 'Resumen', b: r`
      <table><thead><tr><th>Lo que preguntan</th><th>Dónde está en la parábola</th><th>Cómo se calcula</th></tr></thead><tbody>
      <tr><td>Valor inicial: ¿desde dónde parte?</td><td>donde la parábola corta al eje $Y$</td><td>reemplazar $x = 0$; queda el número solo</td></tr>
      <tr><td>¿Cuándo? ¿Cuántas unidades? ¿Qué medida?</td><td>la $x$ de la punta (vértice)</td><td>$x_v = -\dfrac{b}{2a}$</td></tr>
      <tr><td>¿Cuál es el máximo (o el mínimo)?</td><td>la $y$ de la punta (vértice)</td><td>reemplazar $x_v$ en la fórmula</td></tr>
      <tr><td>Llega al suelo, ni gana ni pierde</td><td>donde toca el eje $X$ (ceros)</td><td>igualar la fórmula a 0 y despejar</td></tr></tbody></table>
      <div class="box" style="margin-top:14px"><b>Método PAES</b> 1. Subraya la pregunta. 2. Decide si buscas una $x$ o una $y$. 3. Usa la receta de la tabla. 4. Revisa que la respuesta tenga sentido: un tiempo o una medida no pueden ser negativos.</div>` }
  ],
  example: {
    src: 'Ejemplo tipo PAES',
    enun: r`<p>La altura $h$, en metros, de una pelota lanzada verticalmente hacia arriba está dada por $h(t) = -5t^2 + 20t$, con $t$ en segundos.</p><p>¿Cuál es la altura máxima que alcanza la pelota?</p>`,
    alts: ['20 m', '2 m', '40 m', '15 m'], ok: 0,
    sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Nos dan la fórmula de la altura y nos piden la altura máxima. Una altura es un resultado de la fórmula, o sea una $y$: la $y$ del vértice, porque el vértice es el punto más alto. Para llegar a ella, primero buscamos cuándo llega arriba (la $x$ del vértice) y después reemplazamos ese tiempo en la fórmula.</p><p><b>Paso 2.</b> Buscamos los números: $a = -5$ (acompaña a $t^2$) y $b = 20$ (acompaña a $t$). Como $a$ es negativo, la parábola abre hacia abajo y el vértice sí es un máximo.</p><p><b>Paso 3.</b> Calculamos el de abajo de la fórmula del vértice: $2a = 2\cdot(-5) = -10$.</p><p><b>Paso 4.</b> Dividimos: $\dfrac{20}{-10} = -2$, y el menos de adelante lo da vuelta: $t_v = -(-2) = 2$. La pelota llega arriba a los 2 segundos.</p><p><b>Paso 5.</b> Reemplazamos $t = 2$ para saber qué tan alto está: $h(2) = -5\cdot 2^2 + 20\cdot 2$.</p><p><b>Paso 6.</b> Primero la potencia: $2^2 = 4$, así que $-5\cdot 4 = -20$.</p><p><b>Paso 7.</b> La otra parte: $20\cdot 2 = 40$.</p><p><b>Paso 8.</b> Sumamos: $h(2) = -20 + 40 = 20$.</p><p><b>Respuesta:</b> la altura máxima es 20 m.</p><p><b>Comprobación:</b> un segundo antes y un segundo después la pelota va más abajo: $h(1) = -5\cdot 1^2 + 20\cdot 1 = -5 + 20 = 15$ y $h(3) = -5\cdot 3^2 + 20\cdot 3 = -5\cdot 9 + 60 = -45 + 60 = 15$. Las dos alturas son menores que 20. ✔</p><p><b>¿Por qué no las otras?</b> 2 m sale de responder con el tiempo (2 s), que es la $x$ del vértice, cuando piden la $y$. 40 m sale de calcular solo $20\cdot 2$ y olvidar la parte $-5t^2$. 15 m es $h(1)$, la altura al primer segundo, cuando la pelota todavía va subiendo.</p>`,
    conc: 'Altura máxima: primero cuándo llega arriba, después la altura en ese momento.'
  },
  bank: [
    { enun: r`<p>La altura de una pelota, en metros, es $h(t) = -5t^2 + 20t$, con $t$ en segundos.</p><p>¿Después de cuántos segundos vuelve a tocar el suelo?</p>`,
      alts: ['4 s', '2 s', '20 s', '5 s'], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Nos piden un tiempo (una $x$): el momento en que la pelota toca el suelo. En el suelo la altura es 0, así que igualamos la fórmula a cero y despejamos $t$.</p><p><b>Paso 2.</b> Igualamos: $-5t^2 + 20t = 0$.</p><p><b>Paso 3.</b> Las dos partes se pueden escribir con $-5t$: $-5t^2 = -5t\cdot t$ y $20t = -5t\cdot(-4)$. Sacamos $-5t$ como factor común: $-5t(t - 4) = 0$.</p><p><b>Paso 4.</b> Si una multiplicación da 0, alguno de los factores vale 0: $-5t = 0$ o $t - 4 = 0$.</p><p><b>Paso 5.</b> De $-5t = 0$ sale $t = 0$: es el instante en que se lanza, todavía no ha vuelto.</p><p><b>Paso 6.</b> De $t - 4 = 0$ sale $t = 4$: este es el momento en que vuelve al suelo.</p><p><b>Respuesta:</b> vuelve a tocar el suelo a los 4 s.</p><p><b>Comprobación:</b> $h(4) = -5\cdot 4^2 + 20\cdot 4 = -5\cdot 16 + 80 = -80 + 80 = 0$. ✔</p><p><b>¿Por qué no las otras?</b> 2 s es cuando llega a la altura máxima, no cuando cae. 20 s toma el número que acompaña a $t$ (que además coincide con la altura máxima, 20 m) como si fuera un tiempo. 5 s toma el 5 de $-5t^2$ sin resolver la ecuación.</p>`, conc: 'Toca el suelo: altura cero, y se elige el tiempo distinto de 0.' },
    { enun: r`<p>La altura de un objeto lanzado desde un edificio es $h(t) = -5t^2 + 10t + 15$, en metros, con $t$ en segundos.</p><p>¿Desde qué altura se lanzó?</p>`,
      alts: ['15 m', '10 m', '20 m', '3 m'], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> "¿Desde qué altura se lanzó?" pregunta por la altura al comienzo, cuando el reloj marca cero. Es el valor inicial, así que reemplazamos $t = 0$.</p><p><b>Paso 2.</b> Escribimos la fórmula con un 0 en cada $t$: $h(0) = -5\cdot 0^2 + 10\cdot 0 + 15$.</p><p><b>Paso 3.</b> Primera parte: $0^2 = 0$, así que $-5\cdot 0 = 0$.</p><p><b>Paso 4.</b> Segunda parte: $10\cdot 0 = 0$.</p><p><b>Paso 5.</b> Sumamos: $h(0) = 0 + 0 + 15 = 15$. Es justo el número que estaba solo, sin letra.</p><p><b>Respuesta:</b> se lanzó desde 15 m de altura.</p><p><b>¿Por qué no las otras?</b> 10 es el número que acompaña a $t$, no una altura. 20 m es la altura máxima, $h(1) = -5 + 10 + 15 = 20$, que se alcanza después de lanzarlo. 3 es el tiempo en que llega al suelo: es una $x$, no una altura.</p>`, conc: 'Valor inicial: reemplazar t = 0, queda el número solo.' },
    { enun: r`<p>La altura de un objeto es $h(t) = -5t^2 + 10t + 15$, en metros, con $t$ en segundos.</p><p>¿Cuál es la altura máxima que alcanza?</p>`,
      alts: ['20 m', '15 m', '1 m', '30 m'], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Una altura, o sea una $y$: la del vértice, que es el punto más alto porque el número que acompaña a $t^2$ es negativo. Primero buscamos cuándo llega arriba y después reemplazamos ese tiempo.</p><p><b>Paso 2.</b> Buscamos los números: $a = -5$ y $b = 10$.</p><p><b>Paso 3.</b> El de abajo de la fórmula del vértice: $2a = 2\cdot(-5) = -10$.</p><p><b>Paso 4.</b> Dividimos: $\dfrac{10}{-10} = -1$, y el menos de adelante lo da vuelta: $t_v = -(-1) = 1$. Llega arriba al segundo 1.</p><p><b>Paso 5.</b> Reemplazamos $t = 1$: $h(1) = -5\cdot 1^2 + 10\cdot 1 + 15$.</p><p><b>Paso 6.</b> Calculamos cada parte: $1^2 = 1$, así que $-5\cdot 1 = -5$; y $10\cdot 1 = 10$.</p><p><b>Paso 7.</b> Sumamos de izquierda a derecha: $-5 + 10 = 5$, y $5 + 15 = 20$.</p><p><b>Respuesta:</b> la altura máxima es 20 m.</p><p><b>Comprobación:</b> en $t = 0$ y en $t = 2$ la altura es menor: $h(0) = 15$ y $h(2) = -5\cdot 4 + 20 + 15 = -20 + 20 + 15 = 15$. ✔</p><p><b>¿Por qué no las otras?</b> 15 m es la altura inicial, $h(0)$, desde donde se lanzó. 1 es el tiempo en que llega arriba (la $x$), no la altura. 30 m sale de sumar $5 + 10 + 15$ olvidando el signo menos del $-5$.</p>`, conc: 'Máximo: primero el tiempo del vértice, después la altura en ese tiempo.' },
    { enun: r`<p>Con 40 m de cerca se quiere cercar un terreno rectangular.</p><p>¿Cuál es el área máxima que se puede cercar?</p>`,
      alts: ['100 m²', '400 m²', '40 m²', '96 m²'], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Nos piden un área, el resultado de la fórmula: una $y$. Primero armamos la fórmula del área, después buscamos el lado que da la punta de la parábola (vértice) y al final calculamos el área.</p><p><b>Paso 2.</b> Un rectángulo tiene dos largos y dos anchos, así que un largo más un ancho es la mitad de la cerca: $\dfrac{40}{2} = 20$.</p><p><b>Paso 3.</b> Si un lado mide $x$, el otro mide lo que falta para 20: $20 - x$.</p><p><b>Paso 4.</b> Área = lado por lado: $A(x) = x(20 - x) = 20x - x^2 = -x^2 + 20x$.</p><p><b>Paso 5.</b> Los números son $a = -1$ y $b = 20$. Como $a$ es negativo, la parábola abre hacia abajo y el vértice es el máximo. El de abajo: $2a = 2\cdot(-1) = -2$.</p><p><b>Paso 6.</b> Dividimos: $\dfrac{20}{-2} = -10$, y el menos de adelante lo da vuelta: $x_v = -(-10) = 10$. Un lado mide 10 m.</p><p><b>Paso 7.</b> El otro lado: $20 - 10 = 10$ m.</p><p><b>Paso 8.</b> El área: $10\cdot 10 = 100$ m².</p><p><b>Respuesta:</b> el área máxima es 100 m² (un cuadrado de 10 m de lado).</p><p><b>Comprobación:</b> con lados 9 y 11 (también suman 20) el área es $9\cdot 11 = 99$ m², menor que 100. ✔</p><p><b>¿Por qué no las otras?</b> 400 m² es $20\cdot 20$: usa 20 como medida de cada lado, pero 20 es lo que suman un largo y un ancho. 40 m² confunde el área con los metros de cerca. 96 m² ($8\cdot 12$) es un rectángulo posible, pero no el más grande.</p>`, conc: 'Toda la cerca alrededor: el área máxima es un cuadrado.' },
    { enun: r`<p>Se quiere cercar un corral rectangular junto a un muro, con 60 m de malla para los otros tres lados. Si los lados perpendiculares al muro miden $x$, el área es $A(x) = x(60 - 2x)$.</p><p>¿Cuál es el área máxima?</p>`,
      alts: ['450 m²', '225 m²', '900 m²', '400 m²'], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Un área, o sea una $y$: la del vértice. Ya nos dan la fórmula. Buscamos el $x$ del vértice, después el lado de enfrente y al final el área.</p><p><b>Paso 2.</b> Multiplicamos para ver los números: $x\cdot 60 = 60x$ y $x\cdot(-2x) = -2x^2$. Queda $A(x) = -2x^2 + 60x$.</p><p><b>Paso 3.</b> Los números son $a = -2$ y $b = 60$. Como $a$ es negativo, abre hacia abajo y el vértice es el máximo. El de abajo: $2a = 2\cdot(-2) = -4$.</p><p><b>Paso 4.</b> Dividimos: $\dfrac{60}{-4} = -15$, y el menos de adelante lo da vuelta: $x_v = -(-15) = 15$. Los dos lados que salen del muro miden 15 m.</p><p><b>Paso 5.</b> El lado de enfrente: $60 - 2\cdot 15 = 60 - 30 = 30$ m.</p><p><b>Paso 6.</b> El área: $15\cdot 30 = 450$ m².</p><p><b>Respuesta:</b> el área máxima es 450 m².</p><p><b>Comprobación:</b> con $x = 14$ el área es $14\cdot(60 - 28) = 14\cdot 32 = 448$, y con $x = 16$ es $16\cdot(60 - 32) = 16\cdot 28 = 448$. Ambas son menores que 450. ✔</p><p><b>¿Por qué no las otras?</b> 225 m² es un cuadrado de lado 15 ($15\cdot 15$): olvida que el lado de enfrente mide 30. 900 m² es un cuadrado de lado 30 ($30\cdot 30$), que gastaría 90 m de malla. 400 m² sale de $x = 20$ (lados 20 y $60 - 40 = 20$): pensar que el máximo es un cuadrado, cosa que con muro no pasa.</p>`, conc: 'Junto a un muro, el área máxima no es un cuadrado.' },
    { enun: r`<p>La ganancia de una empresa, en miles de pesos, al vender $x$ unidades es $G(x) = -x^2 + 40x - 300$.</p><p>¿Cuántas unidades debe vender para obtener la ganancia máxima?</p>`,
      alts: ['20', '100', '10', '40'], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> "¿Cuántas unidades?" pide una cantidad de unidades, una $x$: la $x$ del vértice, porque ahí está la punta de la parábola (la ganancia más grande). Usamos $x_v = -\dfrac{b}{2a}$.</p><p><b>Paso 2.</b> Buscamos los números: $a = -1$ (acompaña a $x^2$) y $b = 40$ (acompaña a $x$). Como $a$ es negativo, la parábola abre hacia abajo y el vértice es un máximo.</p><p><b>Paso 3.</b> El de abajo: $2a = 2\cdot(-1) = -2$.</p><p><b>Paso 4.</b> Dividimos: $\dfrac{40}{-2} = -20$, y el menos de adelante lo da vuelta: $x_v = -(-20) = 20$.</p><p><b>Respuesta:</b> debe vender 20 unidades.</p><p><b>Comprobación:</b> $G(19) = -361 + 760 - 300 = 99$ y $G(21) = -441 + 840 - 300 = 99$, los dos menores que $G(20) = -400 + 800 - 300 = 100$. ✔</p><p><b>¿Por qué no las otras?</b> 100 es la ganancia máxima, $G(20)$: es una $y$ (dinero), no unidades. 10 es un cero: con 10 unidades la ganancia es 0. 40 sale de dividir $b$ por $a$ olvidando el 2: $-\dfrac{40}{-1} = 40$.</p>`, conc: '¿Cuántas unidades? Es la x del vértice.' },
    { enun: r`<p>La ganancia de una empresa, en miles de pesos, al vender $x$ unidades es $G(x) = -x^2 + 40x - 300$.</p><p>¿Para qué cantidades de unidades vendidas la ganancia es positiva?</p>`,
      alts: ['Entre 10 y 30 unidades, sin incluirlas.', 'Menos de 10 unidades.', 'Más de 30 unidades.', 'Solo con 20 unidades.'], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Para qué cantidades de unidades la ganancia es mayor que cero. Primero buscamos dónde es exactamente cero (los ceros) y después miramos la forma de la parábola para ver de qué lado queda sobre el eje $X$.</p><p><b>Paso 2.</b> Igualamos a cero: $-x^2 + 40x - 300 = 0$.</p><p><b>Paso 3.</b> Multiplicamos todo por $-1$ para que $x^2$ quede positivo (el 0 sigue siendo 0): $x^2 - 40x + 300 = 0$.</p><p><b>Paso 4.</b> Buscamos dos números que multiplicados den $300$ y sumados den $-40$: son $-10$ y $-30$, porque $(-10)\cdot(-30) = 300$ y $-10 + (-30) = -40$.</p><p><b>Paso 5.</b> Factorizamos: $(x - 10)(x - 30) = 0$. De $x - 10 = 0$ sale $x = 10$, y de $x - 30 = 0$ sale $x = 30$.</p><p><b>Paso 6.</b> Miramos la forma. En la fórmula original $a = -1$ es negativo: la parábola abre hacia abajo, como un cerro. El cerro queda sobre el eje $X$ (ganancia positiva) solo entre los dos ceros, o sea $10 < x < 30$.</p><p><b>Respuesta:</b> la ganancia es positiva vendiendo entre 10 y 30 unidades, sin incluirlas (en 10 y en 30 la ganancia es justo 0).</p><p><b>Comprobación:</b> adentro, $G(20) = -400 + 800 - 300 = 100$, positiva. ✔ Afuera, $G(5) = -25 + 200 - 300 = -125$ y $G(35) = -1225 + 1400 - 300 = -125$, negativas. ✔</p><p><b>¿Por qué no las otras?</b> Con menos de 10 unidades la ganancia es negativa (como $G(5) = -125$): se pierde plata. Con más de 30 también es negativa (como $G(35) = -125$). Con 20 unidades la ganancia es la más grande, pero no es la única positiva: con 15, por ejemplo, $G(15) = -225 + 600 - 300 = 75$.</p>`, conc: 'Si la parábola abre hacia abajo, es positiva entre los dos ceros.' },
    { enun: r`<p>La trayectoria de un chorro de agua se modela con $h(x) = -0{,}1x^2 + 2x$, donde $x$ es la distancia horizontal y $h$ la altura, ambas en metros.</p><p>¿A qué distancia horizontal cae el agua al suelo?</p>`,
      alts: ['20 m', '10 m', '2 m', '40 m'], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Una distancia (una $x$): dónde el agua toca el suelo. En el suelo la altura es 0, así que igualamos la fórmula a cero y despejamos $x$.</p><p><b>Paso 2.</b> Igualamos: $-0{,}1x^2 + 2x = 0$.</p><p><b>Paso 3.</b> Las dos partes tienen $x$, así que la sacamos como factor común: $x(-0{,}1x + 2) = 0$.</p><p><b>Paso 4.</b> Si una multiplicación da 0, alguno de los factores vale 0: $x = 0$ o $-0{,}1x + 2 = 0$.</p><p><b>Paso 5.</b> $x = 0$ es donde sale el chorro, no donde cae.</p><p><b>Paso 6.</b> Resolvemos la otra: $-0{,}1x + 2 = 0$. Pasamos el $-0{,}1x$ al otro lado: $2 = 0{,}1x$.</p><p><b>Paso 7.</b> Multiplicamos los dos lados por 10 para sacar la coma: $2\cdot 10 = 0{,}1x\cdot 10$, o sea $20 = x$.</p><p><b>Respuesta:</b> el agua cae a 20 m de donde sale.</p><p><b>Comprobación:</b> $h(20) = -0{,}1\cdot 20^2 + 2\cdot 20 = -0{,}1\cdot 400 + 40 = -40 + 40 = 0$. ✔</p><p><b>¿Por qué no las otras?</b> 10 m es donde el chorro alcanza su altura máxima, a mitad del camino. 2 es el número que acompaña a $x$, no una distancia. 40 m es el doble del alcance: con $x = 40$ la altura sería $h(40) = -0{,}1\cdot 1600 + 80 = -160 + 80 = -80$, bajo el suelo.</p>`, conc: 'Donde cae: altura cero, y se elige la distancia distinta de 0.' },
    { enun: r`<p>El área de un cuadrado de lado $\ell$ es $A(\ell) = \ell^2$.</p><p>Si el lado se triplica, ¿qué le ocurre al área?</p>`,
      alts: ['Se multiplica por 9.', 'Se multiplica por 3.', 'Se multiplica por 6.', 'Se multiplica por 27.'], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Comparar el área nueva con la antigua cuando el lado pasa de $\ell$ a $3\ell$. Reemplazamos el lado nuevo en la fórmula y vemos por cuánto quedó multiplicado $\ell^2$.</p><p><b>Paso 2.</b> El lado nuevo es $3\ell$. Su área es $A(3\ell) = (3\ell)^2$.</p><p><b>Paso 3.</b> Elevar al cuadrado es multiplicar por sí mismo: $(3\ell)^2 = 3\ell\cdot 3\ell$.</p><p><b>Paso 4.</b> Multiplicamos números con números y letras con letras: $3\cdot 3 = 9$ y $\ell\cdot\ell = \ell^2$. Queda $9\ell^2$.</p><p><b>Paso 5.</b> El área antes era $\ell^2$ y ahora es $9\ell^2$: quedó multiplicada por 9.</p><p><b>Respuesta:</b> el área se multiplica por 9.</p><p><b>Comprobación:</b> con lado 2 el área es $2^2 = 4$. Triplicando, el lado es 6 y el área es $6^2 = 36$. Y $36 = 9\cdot 4$. ✔</p><p><b>¿Por qué no las otras?</b> Por 3 supone que el área crece igual que el lado, pero el lado está al cuadrado. Por 6 sale de hacer $3\cdot 2$ (confundir "al cuadrado" con "por 2"). Por 27 es $3^3$: lo que le pasa al volumen de un cubo, no al área.</p>`, conc: 'Si el lado se multiplica por k, el área se multiplica por k al cuadrado.' },
    { enun: r`<p>La distancia de frenado de un auto, en metros, es aproximadamente $d(v) = \dfrac{v^2}{100}$, con $v$ en km/h.</p><p>¿Cuál es la distancia de frenado a 80 km/h?</p>`,
      alts: ['64 m', '0,8 m', '6,4 m', '160 m'], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Nos dan la velocidad ($v = 80$) y piden la distancia, el resultado de la fórmula. Solo hay que reemplazar y calcular, primero la potencia y después la división.</p><p><b>Paso 2.</b> Reemplazamos: $d(80) = \dfrac{80^2}{100}$.</p><p><b>Paso 3.</b> La potencia: $80^2 = 80\cdot 80 = 6400$.</p><p><b>Paso 4.</b> La división: $\dfrac{6400}{100} = 64$.</p><p><b>Respuesta:</b> la distancia de frenado es 64 m.</p><p><b>Comprobación:</b> $64\cdot 100 = 6400$, que es $80\cdot 80$. ✔</p><p><b>¿Por qué no las otras?</b> 0,8 m sale de olvidar el cuadrado: $\dfrac{80}{100} = 0{,}8$. 6,4 m sale de dividir por 1000 en vez de 100. 160 m es $80\cdot 2$: confunde "al cuadrado" con "por 2".</p>`, conc: 'Reemplaza y calcula primero la potencia.' },
    { enun: r`<p>Un objeto se deja caer desde 80 m de altura. Su altura es $h(t) = 80 - 5t^2$, con $t$ en segundos.</p><p>¿Cuánto tarda en llegar al suelo?</p>`,
      alts: ['4 s', '16 s', '8 s', '15 s'], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Un tiempo (una $x$): cuándo el objeto llega al suelo. En el suelo la altura es 0, así que igualamos la fórmula a cero y despejamos $t$.</p><p><b>Paso 2.</b> Igualamos: $80 - 5t^2 = 0$.</p><p><b>Paso 3.</b> Pasamos el $-5t^2$ al otro lado, donde queda positivo: $80 = 5t^2$.</p><p><b>Paso 4.</b> El 5 está multiplicando, así que pasa dividiendo: $t^2 = \dfrac{80}{5} = 16$.</p><p><b>Paso 5.</b> Buscamos un número que al cuadrado dé 16: $t = 4$ o $t = -4$, porque $4\cdot 4 = 16$ y $(-4)\cdot(-4) = 16$.</p><p><b>Paso 6.</b> Un tiempo no puede ser negativo, así que descartamos $-4$.</p><p><b>Respuesta:</b> tarda 4 s en llegar al suelo.</p><p><b>Comprobación:</b> $h(4) = 80 - 5\cdot 4^2 = 80 - 5\cdot 16 = 80 - 80 = 0$. ✔</p><p><b>¿Por qué no las otras?</b> 16 s es $t^2$: falta sacar la raíz. 8 s sale de dividir 80 por 10. 15 s sale de restar $80 - 5 = 75$ y dividir por 5, sin respetar que el 5 multiplica a $t^2$.</p>`, conc: 'Despeja t al cuadrado, saca la raíz y quédate con la positiva.' },
    { enun: r`<p>En una reunión, cada persona saluda una vez a cada una de las demás. Con $n$ personas, la cantidad de saludos es $S(n) = \dfrac{n(n - 1)}{2}$.</p><p>Si hubo 45 saludos, ¿cuántas personas había?</p>`,
      alts: ['10', '9', '15', '90'], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Nos dan el resultado (45 saludos) y buscamos la cantidad de personas, $n$. Así que igualamos la fórmula a 45 y despejamos.</p><p><b>Paso 2.</b> Igualamos: $\dfrac{n(n - 1)}{2} = 45$.</p><p><b>Paso 3.</b> El 2 está dividiendo, así que pasa multiplicando: $n(n - 1) = 45\cdot 2 = 90$.</p><p><b>Paso 4.</b> Multiplicamos: $n\cdot n = n^2$ y $n\cdot(-1) = -n$. Queda $n^2 - n = 90$.</p><p><b>Paso 5.</b> Pasamos el 90 restando para igualar a cero: $n^2 - n - 90 = 0$.</p><p><b>Paso 6.</b> Buscamos dos números que multiplicados den $-90$ y sumados den $-1$: son $-10$ y $9$, porque $(-10)\cdot 9 = -90$ y $-10 + 9 = -1$.</p><p><b>Paso 7.</b> Factorizamos: $(n - 10)(n + 9) = 0$. De $n - 10 = 0$ sale $n = 10$; de $n + 9 = 0$ sale $n = -9$.</p><p><b>Paso 8.</b> No puede haber una cantidad negativa de personas, así que descartamos $-9$.</p><p><b>Respuesta:</b> había 10 personas.</p><p><b>Comprobación:</b> $S(10) = \dfrac{10\cdot 9}{2} = \dfrac{90}{2} = 45$. ✔</p><p><b>¿Por qué no las otras?</b> 9 es $n - 1$, la cantidad de personas que saluda cada uno. 15 es $\dfrac{45}{3}$, una división sin relación con la fórmula. 90 es $n(n - 1)$, el doble de los saludos: falta resolver la ecuación.</p>`, conc: 'Iguala al dato, resuelve la ecuación cuadrática y descarta la solución negativa.' }
  ]
}
];

/* Figuras de las diapositivas de funciones */
Object.assign(SLIDE_FIGS, {
  funcion_concepto: {
  11: { type: 'plot', x: [-3, 3], y: [-1, 9], fns: [{ f: x => x * x, lab: 'f(x) = x²', at: [1.1, 8.4] }], vline: 2, marks: [[2, 4, '(2, 4)']], cap: 'Subo desde x = 2 hasta la curva: la altura es 4.' },
  12: { type: 'plot', x: [-3, 3], y: [-1, 9], fns: [{ f: x => x * x, lab: 'f(x) = x²', at: [1.1, 8.4] }, { f: x => 4, lab: 'altura 4', at: [-2.9, 3.2] }], marks: [[2, 4, '(2, 4)'], [-2, 4, '(−2, 4)']], cap: 'La horizontal a altura 4 corta la curva en x = −2 y en x = 2.' },
  13: { type: 'plot', x: [-1, 5], y: [-3, 3], fns: [{ pts: Array.from({ length: 21 }, (_, k) => { const y = -2.2 + 0.22 * k; return [y * y, y]; }) }], vline: 1, marks: [[1, 1, '(1, 1)'], [1, -1, '(1, −1)']], cap: 'La recta vertical x = 1 toca la curva dos veces: no es función.' },
  14: { type: 'plot', x: [0, 5], y: [0, 160, 20], xlab: 't (h)', ylab: 'km', fns: [{ pts: [[0, 0], [1, 40], [3, 40], [5, 140]] }], marks: [[1, 40], [3, 40]], cap: 'Tramo plano: de t = 1 a t = 3 la distancia no cambia.' }
  },
  lineal_afin: {
    0: { type: 'plot', x: [0, 4], y: [0, 12, 2], xlab: 'semanas', ylab: 'cm', fns: [{ f: x => 2 * x + 3, lab: 'f(x) = 2x + 3', at: [0.2, 11] }], marks: [[0, 3, '(0, 3)'], [1, 5, '(1, 5)'], [2, 7, '(2, 7)'], [3, 9, '(3, 9)']], cap: 'Cada semana la altura sube 2 cm: los puntos quedan sobre una recta que parte en 3.' },
    1: { type: 'plot', x: [-3, 3], y: [-4, 8, 2], fns: [{ f: x => 2 * x, lab: 'lineal: 2x', at: [0.6, -2.6] }, { f: x => 2 * x + 3, lab: 'afín: 2x + 3', at: [-2.9, 4.6] }], marks: [[0, 0], [0, 3, '(0, 3)']], cap: 'Misma pendiente: la afín es la lineal subida 3 unidades. Solo la lineal pasa por el origen.' },
    3: { type: 'plot', x: [0, 4], y: [0, 12, 2], fns: [{ f: x => 2 * x + 3 }, { pts: [[0, 3], [1, 3], [1, 5], [2, 5], [2, 7], [3, 7], [3, 9]] }], marks: [[0, 3], [1, 5], [2, 7], [3, 9]], cap: 'Cada escalón avanza 1 a la derecha y sube 2: la pendiente es 2.' },
    4: { type: 'plot', x: [-3, 3], y: [-4, 6], fns: [{ f: x => 2 * x, lab: 'm = 2', at: [1.7, 5.4] }, { f: x => -x + 1, lab: 'm = −1', at: [-2.9, 5.4] }, { f: () => 3, lab: 'm = 0', at: [1.9, 3.5] }], cap: 'm = 2 sube, m = −1 baja y m = 0 queda plana.' },
    5: { type: 'plot', x: [0, 4], y: [0, 14, 2], fns: [{ f: x => 3 * x + 1 }, { pts: [[1, 4], [3, 4], [3, 10]] }], marks: [[1, 4, '(1, 4)'], [3, 10, '(3, 10)']], cap: 'De (1, 4) a (3, 10): avanza 2 y sube 6, así que sube 6 ÷ 2 = 3 por cada paso.' },
    6: { type: 'plot', x: [-2, 3], y: [-4, 8, 2], fns: [{ f: x => -2 * x + 3 }, { pts: [[-1, 5], [2, 5], [2, -1]] }], marks: [[-1, 5, '(−1, 5)'], [2, -1, '(2, −1)']], cap: 'Avanza 3 y baja 6: por cada paso baja 2, así que m = −2.' },
    8: { type: 'plot', x: [-2, 4], y: [-5, 7], fns: [{ f: x => 2 * x - 1 }, { pts: [[0, -1], [2, -1], [2, 3]] }], marks: [[0, -1, '(0, −1)'], [2, 3, '(2, 3)']], cap: 'Corta al eje Y en −1; de (0, −1) a (2, 3) avanza 2 y sube 4.' },
    9: { type: 'plot', x: [-1, 4], y: [-2, 8, 2], fns: [{ f: x => -3 * x + 6, lab: 'f(x) = −3x + 6', at: [2.2, 5.4] }], marks: [[0, 6, '(0, 6)']], cap: 'En el eje Y la x vale 0: la recta lo corta en (0, 6).' },
    10: { type: 'plot', x: [-1, 4], y: [-2, 8, 2], fns: [{ f: x => -3 * x + 6, lab: 'f(x) = −3x + 6', at: [2.2, 5.4] }], marks: [[0, 6, '(0, 6)'], [2, 0, '(2, 0)']], cap: 'Corta al eje Y en (0, 6) y al eje X en (2, 0), donde la altura es 0.' },
    11: { type: 'plot', x: [-3, 3], y: [-8, 8, 2], fns: [{ f: x => 2 * x - 3 }, { f: x => 2 * x + 1 }], marks: [[0, -3, '(0, −3)'], [0, 1, '(0, 1)']], cap: 'Paralelas: y = 2x − 3 e y = 2x + 1 tienen la misma pendiente y nunca se cortan.' }
  },
  afin_modelos: {
    1: { type: 'plot', x: [0, 200, 50], y: [0, 60, 10], xlab: 'páginas', ylab: 'miles de pesos', fns: [{ f: x => (115 * x + 27000) / 1000 }], marks: [[0, 27, 'cargo fijo'], [100, 38.5, '100 páginas: 38.500']], cap: 'La recta parte en el cargo fijo (27 mil) y sube 115 pesos por cada página.' },
    4: { type: 'plot', x: [0, 300, 50], y: [0, 800, 100], xlab: 'minutos', ylab: 'litros', fns: [{ f: x => -3 * x + 720, anim: 5 }], marks: [[0, 720, '720 L al inicio'], [240, 0, '240 min']], cap: 'Pendiente negativa: el estanque pierde 3 litros por minuto hasta quedar vacío.' },
    8: { type: 'plot', x: [0, 40, 10], y: [0, 60, 10], xlab: 'empanadas', ylab: 'miles de pesos', fns: [{ f: x => 1.5 * x, lab: 'Ingreso', at: [24, 48] }, { f: x => (600 * x + 20000) / 1000, lab: 'Costo', at: [30, 32] }], marks: [[0, 20, 'arriendo'], [22.2, 33.3, 'ni gana ni pierde']], cap: 'Antes del cruce el costo va más arriba (pierde plata); después del cruce, el ingreso va más arriba (gana).' },
    11: { type: 'plot', x: [0, 250, 50], y: [0, 20, 5], xlab: 'minutos', ylab: 'miles de pesos', fns: [{ f: x => (6000 + 30 * x) / 1000, lab: 'Plan A', at: [10, 8] }, { f: x => 80 * x / 1000, lab: 'Plan B', at: [150, 15] }], marks: [[120, 9.6, 'cuestan igual']], cap: 'Antes del cruce la recta del plan B va más abajo (más barato); después, la del plan A.' },
    13: { type: 'plot', x: [0, 4, 0.5], y: [0, 200, 40], xlab: 't (h)', ylab: 'km', fns: [{ pts: [[0, 0], [1, 60], [2.5, 60], [4, 180]], anim: 6 }], cap: 'El punto rojo es el auto: en el tramo horizontal pasa el tiempo pero no avanza.' },
    14: { type: 'plot', x: [0, 4, 0.5], y: [0, 200, 40], xlab: 't (h)', ylab: 'km', fns: [{ pts: [[0, 0], [1, 60], [2.5, 60], [4, 180]] }], marks: [[1, 60, '(1, 60)'], [2.5, 60, '(2,5; 60)'], [4, 180, '(4, 180)']], cap: 'Tramo 1: 60 km/h. Tramo 2: detenido. Tramo 3: 80 km/h, más inclinado.' }
  },
  ec_cuadratica: {
    1: { type: 'plot', x: [-1, 6], y: [-2, 8, 2], fns: [{ f: x => x * x - 5 * x + 6, lab: 'x² − 5x + 6', at: [4.1, 6.6] }], marks: [[2, 0, 'x = 2'], [3, 0, 'x = 3']], cap: 'Las soluciones de x² − 5x + 6 = 0 son los puntos donde la parábola corta al eje X.' },
    9: { type: 'plot', x: [-2, 3], y: [-4, 8, 2], fns: [{ f: x => 2 * x * x - 3 * x - 2 }], marks: [[2, 0, 'x = 2'], [-0.5, 0, 'x = −1/2']], cap: '2x² − 3x − 2 = 0: la parábola corta al eje X justo en las dos soluciones de la fórmula.' },
    10: { type: 'plot', x: [-1, 5], y: [-2, 8, 2], fns: [{ f: x => x * x - 4 * x + 3, lab: 'Δ > 0', at: [1.7, -1.6] }, { f: x => x * x - 4 * x + 4, lab: 'Δ = 0', at: [1.55, 0.9] }, { f: x => x * x - 4 * x + 6, lab: 'Δ < 0', at: [1.7, 3] }], cap: 'x² − 4x + 3 corta al eje X dos veces, x² − 4x + 4 lo toca una vez y x² − 4x + 6 no lo toca.' },
    11: { type: 'plot', x: [-4, 4], y: [-1, 9], fns: [{ f: x => x * x - 4 * x + 4, lab: 'x² − 4x + 4', at: [2.3, 6.5] }, { f: x => x * x + 2 * x + 5, lab: 'x² + 2x + 5', at: [-3.9, 2.4] }], marks: [[2, 0, 'x = 2']], cap: 'x² − 4x + 4 toca el eje X en un solo punto, x = 2; x² + 2x + 5 queda entera arriba del eje X y no lo toca.' }
  },
  cuadratica_grafico: {
    0: { type: 'plot', x: [-3, 3], y: [-6, 6, 2], fns: [{ f: x => x * x, lab: 'x²', at: [1.3, 4.6] }, { f: x => -x * x, lab: '−x²', at: [1.2, -5.2] }], marks: [[2, 4, '(2, 4)'], [-2, 4, '(−2, 4)'], [2, -4, '(2, −4)'], [-2, -4, '(−2, −4)']], cap: 'x² (a = 1, positivo) abre hacia arriba; −x² (a = −1, negativo) abre hacia abajo.' },
    1: { type: 'plot', x: [-3, 3], y: [-1, 9], fns: [{ f: x => x * x, lab: 'x²', at: [2.15, 3.6] }, { f: x => 3 * x * x, lab: '3x²', at: [0.9, 8.4] }, { f: x => x * x / 2, lab: '½x²', at: [2.0, 0.9] }], marks: [[1, 3], [1, 1], [1, 0.5]], cap: 'Con x = 1: 3x² vale 3, x² vale 1 y ½x² vale 0,5. Mientras más grande el número de adelante, más angosta.' },
    2: { type: 'plot', x: [-1, 6], y: [-2, 10, 2], fns: [{ f: x => x * x - 6 * x + 8 }], marks: [[0, 8, '(0, 8)']], cap: 'Con x = 0 la función vale 8: la parábola cruza el eje Y en (0, 8).' },
    3: { type: 'plot', x: [-2, 4], y: [-5, 6], fns: [{ f: x => x * x - 2 * x - 3 }], marks: [[-1, 0, '(−1, 0)'], [0, -3, '(0, −3)'], [1, -4, '(1, −4)'], [2, -3, '(2, −3)'], [3, 0, '(3, 0)']], cap: 'Cada fila de la tabla es un punto. Al unirlos con una curva suave aparece la parábola.' },
    4: { type: 'plot', x: [0, 6], y: [-2, 8, 2], fns: [{ f: x => x * x - 6 * x + 8 }], marks: [[2, 0, '(2, 0)'], [4, 0, '(4, 0)'], [0, 8, '(0, 8)']], cap: 'Ceros en 2 y 4; el corte con el eje Y es (0, c) = (0, 8).' },
    5: { type: 'plot', x: [-1, 5], y: [-2, 8, 2], fns: [{ f: x => x * x - 4 * x + 3, lab: 'Δ > 0', at: [1.7, -1.6] }, { f: x => x * x - 4 * x + 4, lab: 'Δ = 0', at: [1.55, 0.9] }, { f: x => x * x - 4 * x + 6, lab: 'Δ < 0', at: [1.7, 3] }], cap: 'x² − 4x + 3 corta al eje X dos veces, x² − 4x + 4 lo toca una vez y x² − 4x + 6 no lo toca.' },
    6: { type: 'plot', x: [-2, 4], y: [-5, 6], fns: [{ f: x => x * x - 2 * x - 3 }], marks: [[1, -4, 'vértice (1, −4)'], [-1, 0], [3, 0]], cap: 'La punta queda justo al medio de los ceros −1 y 3, en x = 1.' },
    7: { type: 'plot', x: [-4, 2], y: [-3, 6], fns: [{ f: x => x * x + 2 * x - 1 }], marks: [[-1, -2, 'vértice (−1, −2)']], cap: 'Abre hacia arriba, así que el vértice (−1, −2) es el punto más bajo.' },
    8: { type: 'plot', x: [-5, 3], y: [-3, 7], fns: [{ f: x => x * x + 2 * x - 1 }], vline: -1, marks: [[-1, -2, 'vértice'], [1, 2, '(1, 2)'], [-3, 2, '(−3, 2)']], cap: '(−3, 2) y (1, 2) tienen la misma altura y están a 2 pasos del eje x = −1, uno a cada lado.' },
    9: { type: 'plot', x: [-1, 5], y: [-1, 7], fns: [{ f: x => (x - 2) ** 2 + 1 }], marks: [[0, 5, '(0, 5)'], [1, 2, '(1, 2)'], [2, 1, '(2, 1)'], [3, 2, '(3, 2)'], [4, 5, '(4, 5)']], cap: 'La tabla de (x − 2)² + 1: la altura más baja es 1 y se da en x = 2.' },
    10: { type: 'plot', x: [-3, 3], y: [-3, 9], fns: [{ f: x => x * x + 3, lab: 'x² + 3', at: [0.15, 5.6] }, { f: x => x * x, lab: 'x²', at: [0.15, 2.0] }, { f: x => x * x - 2, lab: 'x² − 2', at: [0.15, -0.6] }], marks: [[0, 3], [0, 0], [0, -2]], cap: 'Misma forma, a distinta altura: x² + 3 está 3 más arriba y x² − 2 está 2 más abajo.' },
    11: { type: 'plot', x: [-6, 4], y: [-2, 8, 2], fns: [{ f: x => (x + 3) ** 2, lab: '(x + 3)²', at: [-3.65, -1.7] }, { f: x => x * x, lab: 'x²', at: [0.1, -1.7] }, { f: x => (x - 2) ** 2, lab: '(x − 2)²', at: [1.35, -1.7] }], marks: [[-3, 0], [0, 0], [2, 0]], cap: 'La misma forma corrida a los lados: (x + 3)² tiene la punta en x = −3 y (x − 2)² en x = 2.' }
  },
  cuadratica_problemas: {
    2: { type: 'plot', x: [0, 4, 0.5], y: [0, 25, 5], xlab: 't (s)', ylab: 'altura (m)', fns: [{ f: t => -5 * t * t + 20 * t, anim: 4 }], marks: [[1, 15, 't = 1: 15 m']], cap: 'La pelota sube, frena en la punta y vuelve a caer.' },
    4: { type: 'plot', x: [0, 4, 0.5], y: [0, 25, 5], xlab: 't (s)', ylab: 'altura (m)', fns: [{ f: t => -5 * t * t + 20 * t }], vline: 2, marks: [[1, 15, '(1, 15)'], [3, 15, '(3, 15)']], cap: 'En t = 1 y en t = 3 la pelota está a la misma altura: la punta queda justo al medio, en t = 2.' },
    5: { type: 'plot', x: [0, 4, 0.5], y: [0, 25, 5], xlab: 't (s)', ylab: 'altura (m)', fns: [{ f: t => -5 * t * t + 20 * t }], marks: [[2, 20, 'altura máxima (2, 20)']], cap: 'La punta es el punto (2, 20): a los 2 segundos está a 20 metros.' },
    6: { type: 'plot', x: [0, 4, 0.5], y: [0, 25, 5], xlab: 't (s)', ylab: 'altura (m)', fns: [{ f: t => -5 * t * t + 20 * t }], marks: [[0, 0, 't = 0'], [4, 0, 't = 4']], cap: 'La curva toca el suelo dos veces: al salir (t = 0) y al volver (t = 4).' },
    8: { type: 'plot', x: [0, 20, 5], y: [0, 120, 20], xlab: 'lado x (m)', ylab: 'área (m²)', fns: [{ f: x => -x * x + 20 * x, anim: 6 }], marks: [[10, 100, 'máximo (10, 100)']], cap: 'A(x) = x(20 − x): el área más grande se logra con x = 10.' },
    10: { type: 'plot', x: [0, 30, 5], y: [0, 500, 100], xlab: 'lado x (m)', ylab: 'área (m²)', fns: [{ f: x => -2 * x * x + 60 * x, anim: 6 }], marks: [[15, 450, 'máximo (15, 450)']], cap: 'A(x) = x(60 − 2x): el área más grande se logra con x = 15.' },
    11: { type: 'plot', x: [0, 40, 5], y: [-300, 150, 50], xlab: 'unidades', ylab: 'ganancia', fns: [{ f: x => -x * x + 40 * x - 300 }], marks: [[0, -300, 'sin vender: −300']], cap: 'Sin vender nada se pierden 300 mil pesos; después la ganancia sube hasta la punta y vuelve a bajar.' },
    14: { type: 'plot', x: [0, 40, 5], y: [-300, 150, 50], xlab: 'unidades', ylab: 'ganancia', fns: [{ f: x => -x * x + 40 * x - 300 }], marks: [[10, 0, '10'], [30, 0, '30'], [20, 100, 'máximo (20, 100)']], cap: 'Entre 10 y 30 unidades la curva está sobre el eje X: hay ganancia.' }
  }
});
