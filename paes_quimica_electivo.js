/* Contenido de "PAES Química" (Fabimath, beta) · Unidad 5 · Profundización electivo.
   Temas del Módulo Electivo de Química (preguntas 55 a 80) que piden ir más allá de las unidades 1 a 3: moléculas
   complejas (hidrógenos implícitos, insaturaciones, enlaces sigma y pi, hibridación), isómeros y propiedades físicas
   de compuestos orgánicos, estequiometría con datos experimentales y masa total, y soluciones en varios pasos
   (conversiones con densidad, diluciones encadenadas, mezclas y estequiometría en solución). Todo dentro de las áreas
   «Química orgánica» y «Reacciones químicas y estequiometría» del temario 2027. Tipos de pregunta modelados en la
   PAES Invierno 2026, PAES Regular 2026 y PAES Invierno 2027 (Módulo Electivo). Cálculos verificados en
   _tmp/verifica_electivo.py. Sin figuras TikZ: estructuras escritas en fórmula semidesarrollada y tablas HTML.
   Se carga después de paes_data.js: reutiliza r (String.raw). */
const QUI_ELECTIVO = [

/* =====================================================================
   TEMA 1 · MOLÉCULAS COMPLEJAS: INSATURACIONES, ENLACES Y FÓRMULAS
   ===================================================================== */
{
  id: 'qui_e_moleculas', unit: 'Unidad 5 · Profundización electivo',
  icon: '🧩', title: 'Moléculas complejas: insaturaciones, enlaces e hibridación',
  desc: 'Para el Módulo Electivo: contar los hidrógenos que no se dibujan, usar las insaturaciones (anillos + enlaces π) para conectar la fórmula molecular con la estructura, y contar enlaces σ, π y carbonos sp², sp o sp³ en moléculas reales con anillos y grupos funcionales.',
  slides: [
    { t: 'Los hidrógenos que no se dibujan', b: r`
      <div class="cols"><div>
      <p>En el Módulo Electivo casi todas las moléculas vienen en fórmula topológica o con anillos de benceno, y los H no aparecen. Para escribir la fórmula molecular hay que <b>reponerlos</b>:</p>
      <div class="box"><b>Regla</b> H de un carbono $= 4 -$ (enlaces que ya tiene dibujados). Un doble cuenta 2 y un triple cuenta 3.</div>
      <p><b>Ejemplo: cinamaldehído</b> (aroma de la canela), C<sub>6</sub>H<sub>5</sub>–CH=CH–CHO.</p>
      <table><thead><tr><th>Parte</th><th>C</th><th>H</th></tr></thead><tbody>
      <tr><td>anillo con un sustituyente, C<sub>6</sub>H<sub>5</sub>–</td><td>6</td><td>5</td></tr>
      <tr><td>–CH=CH–</td><td>2</td><td>2</td></tr>
      <tr><td>–CHO (aldehído)</td><td>1</td><td>1</td></tr>
      <tr><td><b>Total</b></td><td><b>9</b></td><td><b>8</b></td></tr></tbody></table>
      <p>Con el O del aldehído: <b>C<sub>9</sub>H<sub>8</sub>O</b>.</p>
      </div><div>
      <div class="box"><b>El anillo de benceno según sus sustituyentes</b><br>· 1 sustituyente: C<sub>6</sub>H<sub>5</sub>– (5 H)<br>· 2 sustituyentes: –C<sub>6</sub>H<sub>4</sub>– (4 H)<br>· 3 sustituyentes: C<sub>6</sub>H<sub>3</sub> (3 H)<br>Cada sustituyente le quita un H al anillo.</div>
      <div class="box alert"><b>Error típico</b> Contar el anillo siempre como C<sub>6</sub>H<sub>6</sub> o C<sub>6</sub>H<sub>5</sub>, aunque tenga dos o tres grupos pegados. El vértice que lleva un sustituyente no tiene H.</div>
      <div class="box alert"><b>Otro error</b> Olvidar los H de los grupos: el –OH tiene 1 H, el –OCH<sub>3</sub> tiene 3, el –CHO tiene 1 y el –COOH tiene 1.</div>
      </div></div>` },
    { t: 'Insaturaciones: anillos y enlaces π', b: r`
      <div class="cols"><div>
      <p>Un alcano de cadena abierta tiene el máximo de H posible: C<sub>n</sub>H<sub>2n+2</sub>. Cada <b>anillo</b> o cada <b>enlace π</b> le quita 2 H. Ese «faltante» se mide con las <b>insaturaciones</b>:</p>
      $$I = \dfrac{2C + 2 + N - H - X}{2}$$
      <p>C = carbonos, H = hidrógenos, N = nitrógenos, X = halógenos (F, Cl, Br, I). <b>El O y el S no cuentan.</b></p>
      <table><thead><tr><th>Compuesto</th><th>Fórmula</th><th>$I$</th><th>Qué significa</th></tr></thead><tbody>
      <tr><td>hexano</td><td>C<sub>6</sub>H<sub>14</sub></td><td>0</td><td>solo simples, sin anillo</td></tr>
      <tr><td>hex-1-eno</td><td>C<sub>6</sub>H<sub>12</sub></td><td>1</td><td>un doble</td></tr>
      <tr><td>ciclohexano</td><td>C<sub>6</sub>H<sub>12</sub></td><td>1</td><td>un anillo</td></tr>
      <tr><td>benceno</td><td>C<sub>6</sub>H<sub>6</sub></td><td>4</td><td>1 anillo + 3 dobles</td></tr>
      <tr><td>cinamaldehído</td><td>C<sub>9</sub>H<sub>8</sub>O</td><td>6</td><td>1 anillo + 3 dobles del anillo + 1 C=C + 1 C=O</td></tr></tbody></table>
      </div><div>
      <div class="box"><b>Cuánto vale cada cosa</b> Anillo: 1. Doble (C=C, C=O o C=N): 1. Triple: 2. Un anillo de benceno completo: 4.</div>
      <div class="box"><b>Ejemplo resuelto</b> C<sub>9</sub>H<sub>8</sub>O: $I = \dfrac{2\cdot 9 + 2 - 8}{2} = \dfrac{12}{2} = 6$. El benceno aporta 4; quedan 2: un C=C y un C=O. ✔ Coincide con C<sub>6</sub>H<sub>5</sub>–CH=CH–CHO.</div>
      <div class="box alert"><b>Error típico</b> Restar el O en la fórmula. El oxígeno forma 2 enlaces y se «intercala» sin cambiar el número de H: el etanol C<sub>2</sub>H<sub>6</sub>O tiene $I = 0$, igual que el etano C<sub>2</sub>H<sub>6</sub>.</div>
      </div></div>` },
    { t: 'De la fórmula a la estructura (y al revés)', b: r`
      <div class="cols"><div>
      <p>Cuando te dan una fórmula molecular y cuatro estructuras posibles, las insaturaciones descartan opciones en segundos.</p>
      <p><b>Ejemplo.</b> ¿Qué estructura corresponde a C<sub>4</sub>H<sub>8</sub>O<sub>2</sub>?</p>
      <p><b>Paso 1.</b> $I = \dfrac{2\cdot 4 + 2 - 8}{2} = 1$: la estructura tiene <b>un</b> doble enlace (C=C o C=O) <b>o</b> un anillo.</p>
      <p><b>Paso 2.</b> Revisa cada opción:</p>
      <table><thead><tr><th>Estructura</th><th>Fórmula</th><th>¿Sirve?</th></tr></thead><tbody>
      <tr><td>CH<sub>3</sub>–CH<sub>2</sub>–CH<sub>2</sub>–COOH (ácido butanoico)</td><td>C<sub>4</sub>H<sub>8</sub>O<sub>2</sub></td><td>✔</td></tr>
      <tr><td>CH<sub>3</sub>–COO–CH<sub>2</sub>–CH<sub>3</sub> (etanoato de etilo)</td><td>C<sub>4</sub>H<sub>8</sub>O<sub>2</sub></td><td>✔</td></tr>
      <tr><td>HO–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>2</sub>–OH</td><td>C<sub>4</sub>H<sub>10</sub>O<sub>2</sub></td><td>✘ ($I = 0$)</td></tr>
      <tr><td>CH<sub>3</sub>–CO–CO–CH<sub>3</sub></td><td>C<sub>4</sub>H<sub>6</sub>O<sub>2</sub></td><td>✘ ($I = 2$)</td></tr></tbody></table>
      </div><div>
      <div class="box"><b>Pistas que da el enunciado</b> «Tiene un anillo aromático» = 4 insaturaciones. «Es un aldehído, cetona, ácido o éster» = un C=O, 1 insaturación. «Tiene n dobles C=C» = n insaturaciones. Suma todo y compara con la fórmula.</div>
      <div class="box alert"><b>Ojo con «dobles C–C»</b> En la PAES, al contar dobles enlaces C=C de un compuesto con benceno, se cuentan los 3 del anillo dibujado. Si te dicen «4 dobles C=C» y hay un anillo, el cuarto está en la cadena.</div>
      </div></div>` },
    { t: 'Contar σ y π en moléculas con anillos', b: r`
      <div class="cols"><div>
      <p>Dos atajos sirven para cualquier molécula, por grande que sea:</p>
      <div class="box"><b>Enlaces σ</b> $\sigma = \text{átomos} - 1 + \text{anillos}$</div>
      <div class="box"><b>Enlaces π</b> $\pi = I - \text{anillos}$ (1 por cada doble, 2 por cada triple)</div>
      <table><thead><tr><th>Molécula</th><th>Átomos</th><th>Anillos</th><th>$\sigma$</th><th>$\pi$</th><th>$\sigma : \pi$</th></tr></thead><tbody>
      <tr><td>propeno, C<sub>3</sub>H<sub>6</sub></td><td>9</td><td>0</td><td>8</td><td>1</td><td>8 : 1</td></tr>
      <tr><td>propino, C<sub>3</sub>H<sub>4</sub></td><td>7</td><td>0</td><td>6</td><td>2</td><td>3 : 1</td></tr>
      <tr><td>benceno, C<sub>6</sub>H<sub>6</sub></td><td>12</td><td>1</td><td>12</td><td>3</td><td>4 : 1</td></tr>
      <tr><td>ciclohexeno, C<sub>6</sub>H<sub>10</sub></td><td>16</td><td>1</td><td>16</td><td>1</td><td>16 : 1</td></tr></tbody></table>
      </div><div>
      <div class="box"><b>Ejemplo resuelto</b> ¿Cuántos $\sigma$ y $\pi$ tiene el tolueno, C<sub>6</sub>H<sub>5</sub>–CH<sub>3</sub>?<br><b>Paso 1.</b> Fórmula: C<sub>7</sub>H<sub>8</sub>, 15 átomos, 1 anillo.<br><b>Paso 2.</b> $\sigma = 15 - 1 + 1 = 15$.<br><b>Paso 3.</b> $I = \dfrac{14 + 2 - 8}{2} = 4$; $\pi = 4 - 1 = 3$.<br><b>Comprobación:</b> 7 enlaces C–C (6 del anillo + 1 al CH<sub>3</sub>) + 8 C–H = 15 $\sigma$. ✔</div>
      <div class="box alert"><b>Error típico</b> Olvidar sumar el anillo. En una cadena abierta hay un enlace menos que átomos; al cerrar el anillo se agrega un enlace más.</div>
      </div></div>` },
    { t: 'Hibridación en moléculas reales', b: r`
      <div class="cols"><div>
      <p>Para contar carbonos sp<sup>2</sup>, sp o sp<sup>3</sup> en una molécula grande, recorre <b>los enlaces múltiples</b>: cada doble C=C «pinta» de sp<sup>2</sup> a sus <b>dos</b> carbonos; cada C=O pinta de sp<sup>2</sup> a su carbono; cada triple pinta de sp a sus dos carbonos. Los carbonos que quedan sin pintar son sp<sup>3</sup>.</p>
      <p><b>Ejemplo: limoneno</b> (C<sub>10</sub>H<sub>16</sub>, olor a cítricos). Tiene un anillo de seis carbonos con un C=C, y un grupo –C(CH<sub>3</sub>)=CH<sub>2</sub>.</p>
      <p>Dobles: 2 → carbonos sp<sup>2</sup>: $2\cdot 2 = 4$. Los otros 6 son sp<sup>3</sup>.</p>
      <table><thead><tr><th>Grupo</th><th>Carbonos y su hibridación</th></tr></thead><tbody>
      <tr><td>anillo de benceno</td><td>los 6 C son sp<sup>2</sup></td></tr>
      <tr><td>–CHO, –CO–, –COOH, –COO–, –CONH<sub>2</sub></td><td>el C del C=O es sp<sup>2</sup></td></tr>
      <tr><td>–C≡N, –C≡C–</td><td>sp</td></tr>
      <tr><td>–CH<sub>3</sub>, –CH<sub>2</sub>–, C con OH o con O de éter</td><td>sp<sup>3</sup> (si no tiene dobles)</td></tr></tbody></table>
      </div><div>
      <div class="box"><b>Ejemplo resuelto</b> Estireno, C<sub>6</sub>H<sub>5</sub>–CH=CH<sub>2</sub>: anillo (6 sp<sup>2</sup>) + C=C de la cadena (2 sp<sup>2</sup>) = <b>8 carbonos sp<sup>2</sup></b>, ninguno sp<sup>3</sup>. Fórmula C<sub>8</sub>H<sub>8</sub>.</div>
      <div class="box alert"><b>Error típico</b> Contar enlaces π en vez de carbonos. El limoneno tiene 2 enlaces π pero 4 carbonos sp<sup>2</sup>: cada doble involucra a dos carbonos.</div>
      <div class="box alert"><b>Otro error</b> Decir que el C de un –COOH es sp<sup>3</sup> porque tiene un OH. Mira todos sus enlaces: tiene un C=O, así que es sp<sup>2</sup>.</div>
      </div></div>` },
    { t: 'Lo clave del tema', b: r`
      <table><thead><tr><th>Herramienta</th><th>Fórmula o regla</th><th>Para qué sirve</th></tr></thead><tbody>
      <tr><td>H implícitos</td><td>H = 4 − enlaces dibujados del C</td><td>pasar de topológica a fórmula molecular</td></tr>
      <tr><td>Insaturaciones</td><td>$I = \dfrac{2C + 2 + N - H - X}{2}$ (sin O ni S)</td><td>saber cuántos anillos + π hay; descartar estructuras</td></tr>
      <tr><td>Enlaces σ</td><td>átomos − 1 + anillos</td><td>contar σ sin dibujar todos los H</td></tr>
      <tr><td>Enlaces π</td><td>$I$ − anillos</td><td>contar π de una vez</td></tr>
      <tr><td>Hibridación</td><td>doble → sus 2 C son sp²; triple → sus 2 C son sp; el resto sp³</td><td>contar carbonos de cada tipo</td></tr></tbody></table>
      <div class="cols"><div>
      <div class="box" style="margin-top:14px"><b>Recuerda</b><br>· Benceno = 4 insaturaciones (1 anillo + 3 π).<br>· Cada sustituyente le quita un H al anillo: C<sub>6</sub>H<sub>5</sub>–, –C<sub>6</sub>H<sub>4</sub>–.<br>· Propino: 6 $\sigma$ y 2 $\pi$, razón 3 : 1.<br>· Limoneno: 2 dobles, 4 carbonos sp<sup>2</sup>.</div>
      </div><div>
      <div class="box" style="margin-top:14px"><b>Método PAES</b> 1. Calcula la fórmula molecular de cada opción (repón los H). 2. Calcula $I$ y compáralo con lo que pide el enunciado. 3. Para $\sigma$ y $\pi$ usa los atajos y comprueba contando un tipo de enlace. 4. Para hibridación, recorre los enlaces múltiples.</div>
      </div></div>` }
  ],
  example: {
    src: 'PAES Invierno 2027, adaptada',
    enun: r`<p>El aceite esencial de anís contiene un compuesto X de fórmula molecular C<sub>10</sub>H<sub>12</sub>O. Mediante análisis químicos se determinó que la molécula X:</p><p>· tiene un grupo metoxi (–O–CH<sub>3</sub>) unido a un anillo de benceno;<br>· tiene, unida al mismo anillo, una cadena de 3 átomos de carbono con un doble enlace.</p><p>¿Cuál de las siguientes estructuras es coherente con esta información?</p>`,
    alts: ['CH<sub>3</sub>O–C<sub>6</sub>H<sub>4</sub>–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>3</sub>', 'HO–C<sub>6</sub>H<sub>4</sub>–CH=CH–CH<sub>3</sub>', 'CH<sub>3</sub>O–C<sub>6</sub>H<sub>4</sub>–CH=CH–CH<sub>3</sub>', 'CH<sub>3</sub>O–C<sub>6</sub>H<sub>4</sub>–C≡C–CH<sub>3</sub>'],
    ok: 2,
    sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> La estructura que cumple las dos características y además tiene la fórmula C<sub>10</sub>H<sub>12</sub>O.</p><p><b>Paso 2. Insaturaciones de la fórmula.</b> $I = \dfrac{2\cdot 10 + 2 - 12}{2} = \dfrac{10}{2} = 5$. El benceno aporta 4: queda <b>1</b>, justo un doble enlace en la cadena. ✔ Coincide con la descripción.</p><p><b>Paso 3. Revisa la opción CH<sub>3</sub>O–C<sub>6</sub>H<sub>4</sub>–CH=CH–CH<sub>3</sub>.</b> Tiene metoxi y una cadena de 3 C con un doble. C: $1 + 6 + 3 = 10$. H: $3 + 4 + 1 + 1 + 3 = 12$. O: 1. Fórmula C<sub>10</sub>H<sub>12</sub>O. ✔</p><p><b>Respuesta:</b> CH<sub>3</sub>O–C<sub>6</sub>H<sub>4</sub>–CH=CH–CH<sub>3</sub> (el anetol).</p><p><b>Comprobación:</b> anillo (4) + un C=C (1) = 5 insaturaciones, las mismas que da la fórmula. ✔</p><p><b>¿Por qué no las otras?</b> La de cadena –CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>3</sub> no tiene doble enlace: es C<sub>10</sub>H<sub>14</sub>O, con 4 insaturaciones. La que tiene HO– es un fenol, no un éter metílico: le falta un carbono y es C<sub>9</sub>H<sub>10</sub>O. La del triple tiene 2 insaturaciones en la cadena: es C<sub>10</sub>H<sub>10</sub>O.</p>`,
    conc: 'Calcula las insaturaciones de la fórmula, réstale 4 por el benceno y lo que queda te dice cuántos dobles hay en la cadena.'
  },
  bank: [
    /* Tipo 1 · fórmula molecular de una estructura con anillo y grupos (Invierno 2026 P70, Invierno 2027 P67) */
    { src: 'PAES Invierno 2026, adaptada',
      enun: r`<p>El eugenol es el principal componente del aceite de clavo de olor. Su molécula tiene un anillo de benceno con <b>tres</b> sustituyentes: un grupo –OH, un grupo –O–CH<sub>3</sub> y una cadena –CH<sub>2</sub>–CH=CH<sub>2</sub>.</p><p>¿Cuál es la fórmula molecular del eugenol?</p>`,
      alts: ['C<sub>10</sub>H<sub>14</sub>O<sub>2</sub>', 'C<sub>10</sub>H<sub>12</sub>O<sub>2</sub>', 'C<sub>10</sub>H<sub>11</sub>O<sub>2</sub>', 'C<sub>9</sub>H<sub>12</sub>O<sub>2</sub>'], ok: 1,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Contar C, H y O, reponiendo los H del anillo según cuántos sustituyentes tiene.</p><p><b>Paso 2. El anillo.</b> Con 3 sustituyentes le quedan 3 H: C<sub>6</sub>H<sub>3</sub>.</p><p><b>Paso 3. Los grupos.</b> –OH: 1 O y 1 H. –O–CH<sub>3</sub>: 1 C, 3 H y 1 O. –CH<sub>2</sub>–CH=CH<sub>2</sub>: 3 C y $2 + 1 + 2 = 5$ H.</p><p><b>Paso 4. Suma.</b> C: $6 + 1 + 3 = 10$. H: $3 + 1 + 3 + 5 = 12$. O: 2.</p><p><b>Respuesta:</b> C<sub>10</sub>H<sub>12</sub>O<sub>2</sub>.</p><p><b>Comprobación:</b> $I = \dfrac{20 + 2 - 12}{2} = 5$: benceno (4) + el C=C de la cadena (1). ✔</p><p><b>¿Por qué no las otras?</b> C<sub>10</sub>H<sub>14</sub>O<sub>2</sub> cuenta el anillo como C<sub>6</sub>H<sub>5</sub>, como si tuviera un solo sustituyente. C<sub>10</sub>H<sub>11</sub>O<sub>2</sub> olvida el H del –OH. C<sub>9</sub>H<sub>12</sub>O<sub>2</sub> olvida el carbono del metoxi.</p>`,
      conc: 'Un anillo con tres sustituyentes es C₆H₃: cada grupo pegado le quita un H.' },
    { src: 'PAES Invierno 2027, adaptada',
      enun: r`<p>El ibuprofeno es un antiinflamatorio. Su molécula tiene un anillo de benceno con dos sustituyentes en posiciones opuestas: –CH<sub>2</sub>–CH(CH<sub>3</sub>)<sub>2</sub> y –CH(CH<sub>3</sub>)–COOH.</p><p>Si se quiere escribir la fórmula molecular del ibuprofeno, ¿cuál es la representación correcta?</p>`,
      alts: ['C<sub>13</sub>H<sub>20</sub>O<sub>2</sub>', 'C<sub>12</sub>H<sub>18</sub>O<sub>2</sub>', 'C<sub>13</sub>H<sub>16</sub>O<sub>2</sub>', 'C<sub>13</sub>H<sub>18</sub>O<sub>2</sub>'], ok: 3,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> La fórmula molecular: contar todos los C, H y O.</p><p><b>Paso 2. El anillo.</b> Dos sustituyentes: –C<sub>6</sub>H<sub>4</sub>–, 6 C y 4 H.</p><p><b>Paso 3. Primer sustituyente.</b> –CH<sub>2</sub>–CH(CH<sub>3</sub>)<sub>2</sub>: 4 C y $2 + 1 + 6 = 9$ H.</p><p><b>Paso 4. Segundo sustituyente.</b> –CH(CH<sub>3</sub>)–COOH: 3 C, $1 + 3 + 1 = 5$ H y 2 O.</p><p><b>Paso 5. Suma.</b> C: $6 + 4 + 3 = 13$. H: $4 + 9 + 5 = 18$. O: 2.</p><p><b>Respuesta:</b> C<sub>13</sub>H<sub>18</sub>O<sub>2</sub>.</p><p><b>Comprobación:</b> $I = \dfrac{26 + 2 - 18}{2} = 5$: benceno (4) + C=O del ácido (1). ✔</p><p><b>¿Por qué no las otras?</b> C<sub>13</sub>H<sub>20</sub>O<sub>2</sub> cuenta el anillo con 6 H, como benceno sin sustituir. C<sub>12</sub>H<sub>18</sub>O<sub>2</sub> olvida el carbono del grupo COOH. C<sub>13</sub>H<sub>16</sub>O<sub>2</sub> resta 2 H de más, como si hubiera otro doble enlace.</p>`,
      conc: 'Revisa la fórmula con las insaturaciones: benceno + C=O del ácido = 5.' },
    { src: 'PAES Invierno 2026, adaptada',
      enun: r`<p>El paracetamol es un analgésico de uso común. Su molécula tiene un anillo de benceno con dos sustituyentes: un grupo –OH y un grupo –NH–CO–CH<sub>3</sub> (amida).</p><p>Un docente pregunta por la fórmula molecular del paracetamol. ¿Cuál de las respuestas dadas por los estudiantes es correcta?</p>`,
      alts: ['C<sub>8</sub>H<sub>9</sub>NO<sub>2</sub>', 'C<sub>8</sub>H<sub>11</sub>NO<sub>2</sub>', 'C<sub>8</sub>H<sub>8</sub>NO<sub>2</sub>', 'C<sub>7</sub>H<sub>9</sub>NO<sub>2</sub>'], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Contar todos los átomos, reponiendo los H del anillo.</p><p><b>Paso 2. El anillo.</b> Dos sustituyentes: C<sub>6</sub>H<sub>4</sub>.</p><p><b>Paso 3. Los grupos.</b> –OH: 1 O y 1 H. –NH–CO–CH<sub>3</sub>: 1 N, 1 H (del NH), 2 C, 1 O y 3 H (del CH<sub>3</sub>).</p><p><b>Paso 4. Suma.</b> C: $6 + 2 = 8$. H: $4 + 1 + 1 + 3 = 9$. N: 1. O: 2.</p><p><b>Respuesta:</b> C<sub>8</sub>H<sub>9</sub>NO<sub>2</sub>.</p><p><b>Comprobación:</b> $I = \dfrac{2\cdot 8 + 2 + 1 - 9}{2} = 5$: benceno (4) + C=O de la amida (1). ✔</p><p><b>¿Por qué no las otras?</b> C<sub>8</sub>H<sub>11</sub>NO<sub>2</sub> cuenta el anillo con 6 H. C<sub>8</sub>H<sub>8</sub>NO<sub>2</sub> olvida el H del NH. C<sub>7</sub>H<sub>9</sub>NO<sub>2</sub> olvida el carbono del C=O.</p>`,
      conc: 'El N suma 1 en la fórmula de insaturaciones; el O no cuenta.' },
    /* Tipo 2 · insaturaciones: de la fórmula molecular a la estructura (Invierno 2026 P68, Regular 2026 P67) */
    { src: 'PAES Regular 2026, adaptada',
      enun: r`<p>Una docente presenta la fórmula molecular C<sub>4</sub>H<sub>8</sub>O<sub>2</sub> y pregunta por una representación estructural de un compuesto que tenga esa fórmula. ¿Cuál de las siguientes respuestas es correcta?</p>`,
      alts: ['CH<sub>3</sub>–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>2</sub>–OH', 'HO–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>2</sub>–OH', 'CH<sub>3</sub>–CH<sub>2</sub>–CH<sub>2</sub>–COOH', 'CH<sub>3</sub>–CO–CO–CH<sub>3</sub>'], ok: 2,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> La estructura con 4 C, 8 H y 2 O.</p><p><b>Paso 2. Insaturaciones.</b> $I = \dfrac{8 + 2 - 8}{2} = 1$: la estructura debe tener un solo doble enlace (o un anillo) y 2 oxígenos.</p><p><b>Paso 3. Revisa el ácido butanoico.</b> CH<sub>3</sub>–CH<sub>2</sub>–CH<sub>2</sub>–COOH: C = 4; H = $3 + 2 + 2 + 1 = 8$; O = 2; un C=O. ✔</p><p><b>Respuesta:</b> CH<sub>3</sub>–CH<sub>2</sub>–CH<sub>2</sub>–COOH.</p><p><b>Comprobación:</b> masa molar $4\cdot 12 + 8 + 2\cdot 16 = 88$ g/mol, la de C<sub>4</sub>H<sub>8</sub>O<sub>2</sub>. ✔</p><p><b>¿Por qué no las otras?</b> El butan-1-ol tiene un solo O: es C<sub>4</sub>H<sub>10</sub>O. El butano-1,4-diol tiene 2 O pero ningún doble enlace: C<sub>4</sub>H<sub>10</sub>O<sub>2</sub> ($I = 0$). La butanodiona tiene dos C=O: C<sub>4</sub>H<sub>6</sub>O<sub>2</sub> ($I = 2$).</p>`,
      conc: 'Una insaturación con dos oxígenos: un ácido carboxílico o un éster.' },
    { src: 'PAES Invierno 2026, adaptada',
      enun: r`<p>Una estudiante extrae el aceite esencial de la canela y analiza su componente principal. Los datos obtenidos son:</p><p>¿Cuál de las siguientes estructuras es coherente con la información obtenida?</p>`,
      fig: { type: 'table', head: ['Dato', 'Resultado'], rows: [['Fórmula molecular', 'C<sub>9</sub>H<sub>8</sub>O'], ['N.º de enlaces dobles C=C', '4 (contando los del anillo)'], ['Grupo funcional', 'aldehído']] },
      alts: ['C<sub>6</sub>H<sub>5</sub>–CH<sub>2</sub>–CH<sub>2</sub>–CHO', 'C<sub>6</sub>H<sub>5</sub>–CH=CH–CO–CH<sub>3</sub>', 'C<sub>6</sub>H<sub>5</sub>–C≡C–CHO', 'C<sub>6</sub>H<sub>5</sub>–CH=CH–CHO'], ok: 3,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> La estructura con fórmula C<sub>9</sub>H<sub>8</sub>O, 4 dobles C=C y un grupo –CHO.</p><p><b>Paso 2. Insaturaciones.</b> $I = \dfrac{18 + 2 - 8}{2} = 6$. Anillo (1) + 3 dobles del anillo + 1 doble C=C en la cadena + 1 C=O del aldehído = 6. ✔</p><p><b>Paso 3. Revisa C<sub>6</sub>H<sub>5</sub>–CH=CH–CHO.</b> C: $6 + 3 = 9$. H: $5 + 1 + 1 + 1 = 8$. O: 1. Dobles C=C: 3 + 1 = 4. Termina en –CHO. ✔</p><p><b>Respuesta:</b> C<sub>6</sub>H<sub>5</sub>–CH=CH–CHO (cinamaldehído).</p><p><b>¿Por qué no las otras?</b> C<sub>6</sub>H<sub>5</sub>–CH<sub>2</sub>–CH<sub>2</sub>–CHO no tiene el doble de la cadena: solo 3 dobles C=C y fórmula C<sub>9</sub>H<sub>10</sub>O. C<sub>6</sub>H<sub>5</sub>–CH=CH–CO–CH<sub>3</sub> es una cetona y tiene 10 C. C<sub>6</sub>H<sub>5</sub>–C≡C–CHO tiene un triple en vez de un doble: C<sub>9</sub>H<sub>6</sub>O.</p>`,
      conc: 'Tres datos, tres filtros: fórmula, número de dobles y grupo funcional.' },
    { src: 'PAES Invierno 2026, adaptada',
      enun: r`<p>Un compuesto de fórmula molecular C<sub>5</sub>H<sub>8</sub> no tiene anillos en su estructura. ¿Cuál de los siguientes compuestos puede ser?</p>`,
      alts: ['Pent-1-ino, HC≡C–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>3</sub>', 'Pent-1-eno, CH<sub>2</sub>=CH–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>3</sub>', 'Ciclopenteno', 'Pentano, CH<sub>3</sub>–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>3</sub>'], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Un compuesto C<sub>5</sub>H<sub>8</sub> de cadena abierta.</p><p><b>Paso 2. Insaturaciones.</b> $I = \dfrac{10 + 2 - 8}{2} = 2$. Sin anillos, las 2 insaturaciones deben ser enlaces $\pi$: un triple o dos dobles.</p><p><b>Paso 3. Revisa el pent-1-ino.</b> Un triple = 2 $\pi$. H: $1 + 2 + 2 + 3 = 8$. ✔ C<sub>5</sub>H<sub>8</sub>, sin anillo.</p><p><b>Respuesta:</b> pent-1-ino.</p><p><b>¿Por qué no las otras?</b> El pent-1-eno tiene un solo doble: C<sub>5</sub>H<sub>10</sub>, $I = 1$. El ciclopenteno sí es C<sub>5</sub>H<sub>8</sub> (1 anillo + 1 doble), pero el enunciado dice que no hay anillos. El pentano no tiene insaturaciones: C<sub>5</sub>H<sub>12</sub>.</p>`,
      conc: 'Dos insaturaciones sin anillo = un triple o dos dobles.' },
    /* Tipo 3 · contar enlaces sigma y pi (Invierno 2026 P64, Invierno 2027 P65, Regular 2026 P63) */
    { src: 'PAES Invierno 2026, adaptada',
      enun: r`<p>En un libro, Alejandro encuentra un ejercicio que pregunta por una molécula que presenta, en total, <b>tres enlaces sigma por cada enlace pi</b>. ¿Cuál es la respuesta correcta?</p>`,
      alts: ['Propeno, CH<sub>2</sub>=CH–CH<sub>3</sub>', 'Propino, HC≡C–CH<sub>3</sub>', 'Etino, HC≡CH', 'Buta-1,3-dieno, CH<sub>2</sub>=CH–CH=CH<sub>2</sub>'], ok: 1,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> La molécula con razón $\sigma : \pi = 3 : 1$. Hay que contar todos los enlaces, incluidos los C–H.</p><p><b>Paso 2. Propino, C<sub>3</sub>H<sub>4</sub>.</b> 7 átomos, sin anillo: $\sigma = 7 - 1 = 6$. El triple aporta 2 $\pi$. Razón $6 : 2 = 3 : 1$. ✔</p><p><b>Respuesta:</b> propino.</p><p><b>Comprobación:</b> enlaces uno por uno: 4 C–H + 1 C–C + 1 C≡C = 6 enlaces, cada uno con 1 $\sigma$. ✔</p><p><b>¿Por qué no las otras?</b> Propeno, C<sub>3</sub>H<sub>6</sub>: $\sigma = 8$, $\pi = 1$, razón 8 : 1. Etino, C<sub>2</sub>H<sub>2</sub>: $\sigma = 3$, $\pi = 2$, razón 3 : 2. Buta-1,3-dieno, C<sub>4</sub>H<sub>6</sub>: $\sigma = 9$, $\pi = 2$, razón 9 : 2.</p>`,
      conc: 'σ = átomos − 1 (sin anillos); el triple aporta 2 π.' },
    { src: 'PAES Invierno 2027, adaptada',
      enun: r`<p>Una empresa busca moléculas orgánicas con enlaces $\pi$ para fabricar dispositivos fotovoltaicos. La molécula elegida debe tener <b>3 enlaces $\pi$ y 16 enlaces $\sigma$</b>. ¿Cuál de las siguientes moléculas cumple esa condición?</p>`,
      alts: ['Tolueno, C<sub>6</sub>H<sub>5</sub>–CH<sub>3</sub>', 'Benceno, C<sub>6</sub>H<sub>6</sub>', 'Hepta-1,3,5-trieno, CH<sub>2</sub>=CH–CH=CH–CH=CH–CH<sub>3</sub>', 'Hept-1-ino, HC≡C–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>3</sub>'], ok: 2,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> La molécula con exactamente 3 $\pi$ y 16 $\sigma$.</p><p><b>Paso 2. Hepta-1,3,5-trieno.</b> H: $2 + 1 + 1 + 1 + 1 + 1 + 3 = 10$, fórmula C<sub>7</sub>H<sub>10</sub>: 17 átomos, sin anillo. $\sigma = 17 - 1 = 16$. Tres dobles: 3 $\pi$. ✔</p><p><b>Respuesta:</b> hepta-1,3,5-trieno.</p><p><b>Comprobación:</b> 10 C–H + 6 enlaces C–C = 16 $\sigma$. ✔</p><p><b>¿Por qué no las otras?</b> Tolueno, C<sub>7</sub>H<sub>8</sub>: 15 átomos y 1 anillo, $\sigma = 15$, aunque sí tiene 3 $\pi$. Benceno: $\sigma = 12 - 1 + 1 = 12$ y 3 $\pi$. Hept-1-ino, C<sub>7</sub>H<sub>12</sub>: $\sigma = 18$ y solo 2 $\pi$.</p>`,
      conc: 'Revisa las dos condiciones: varias opciones cumplen una sola.' },
    { src: 'PAES Regular 2026, adaptada',
      enun: r`<p>Una docente escribe en la pizarra el ciclohexeno, C<sub>6</sub>H<sub>10</sub>, materia prima en la fabricación de compuestos cíclicos y polímeros: un anillo de seis carbonos con un solo enlace doble. Luego pregunta por el número total de enlaces sigma del compuesto. ¿Cuál es la respuesta correcta?</p>`,
      alts: ['6', '15', '16', '17'], ok: 2,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Todos los enlaces $\sigma$: C–C y C–H.</p><p><b>Paso 2. Atajo.</b> 16 átomos y 1 anillo: $\sigma = 16 - 1 + 1 = 16$.</p><p><b>Paso 3. Comprueba contando.</b> El anillo tiene 6 enlaces C–C (uno de ellos doble), cada uno con 1 $\sigma$: 6. Enlaces C–H: 10. Total: $6 + 10 = 16$. ✔</p><p><b>Respuesta:</b> 16.</p><p><b>¿Por qué no las otras?</b> 6 cuenta solo los enlaces C–C. 15 usa «átomos − 1» y olvida sumar el anillo. 17 cuenta el doble enlace como dos $\sigma$, pero un doble tiene 1 $\sigma$ y 1 $\pi$.</p>`,
      conc: 'σ = átomos − 1 + anillos.' },
    /* Tipo 4 · hibridación en moléculas reales (Invierno 2027 P64 y P66, Regular 2026 P64) */
    { src: 'PAES Invierno 2027, adaptada',
      enun: r`<p>El mirceno es un terpeno presente en el lúpulo y en el laurel. Su fórmula semidesarrollada es:</p><p style="text-align:center">CH<sub>2</sub>=CH–C(=CH<sub>2</sub>)–CH<sub>2</sub>–CH<sub>2</sub>–CH=C(CH<sub>3</sub>)<sub>2</sub></p><p>¿Cuántos átomos de carbono con hibridación sp<sup>2</sup> tiene una molécula de mirceno?</p>`,
      alts: ['3', '4', '10', '6'], ok: 3,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Contar carbonos sp<sup>2</sup>: los que participan en un doble enlace.</p><p><b>Paso 2. Cuenta los dobles.</b> CH<sub>2</sub>=CH, C=CH<sub>2</sub> y CH=C: 3 dobles C=C.</p><p><b>Paso 3. Carbonos sp<sup>2</sup>.</b> Cada doble involucra 2 carbonos y ningún carbono está en dos dobles: $3\cdot 2 = 6$.</p><p><b>Respuesta:</b> 6.</p><p><b>Comprobación:</b> la molécula tiene 10 C: 6 sp<sup>2</sup> + 4 sp<sup>3</sup> (los dos CH<sub>2</sub> del centro y los dos CH<sub>3</sub>). ✔</p><p><b>¿Por qué no las otras?</b> 3 cuenta los enlaces $\pi$, no los carbonos. 4 olvida el doble del =CH<sub>2</sub> ramificado. 10 son todos los carbonos, incluidos los sp<sup>3</sup>.</p>`,
      conc: 'Cada doble C=C aporta dos carbonos sp²; no confundas carbonos con enlaces π.' },
    { src: 'PAES Regular 2026, adaptada',
      enun: r`<p>Una docente presenta el ácido pent-3-inoico , HOOC–CH<sub>2</sub>–C≡C–CH<sub>3</sub>, y numera sus carbonos desde el grupo funcional:</p><p>¿Cuál de las siguientes opciones indica correctamente la hibridación de los carbonos C1, C2, C3 y C4, en ese orden?</p>`,
      fig: { type: 'table', head: ['Carbono', 'C1', 'C2', 'C3', 'C4', 'C5'], rows: [['Grupo', '–COOH', '–CH<sub>2</sub>–', '–C≡', '≡C–', '–CH<sub>3</sub>']] },
      alts: ['sp<sup>3</sup>, sp<sup>3</sup>, sp, sp', 'sp<sup>2</sup>, sp<sup>3</sup>, sp, sp', 'sp<sup>2</sup>, sp<sup>3</sup>, sp<sup>2</sup>, sp<sup>2</sup>', 'sp<sup>2</sup>, sp<sup>2</sup>, sp, sp'], ok: 1,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> La hibridación de cada carbono, mirando todos sus enlaces.</p><p><b>Paso 2. C1 (COOH).</b> Tiene un C=O, un C–OH y un enlace a C2: 3 vecinos → sp<sup>2</sup>.</p><p><b>Paso 3. C2 (CH<sub>2</sub>).</b> Solo simples: 4 vecinos → sp<sup>3</sup>.</p><p><b>Paso 4. C3 y C4.</b> Forman el triple: cada uno tiene 2 vecinos → sp.</p><p><b>Respuesta:</b> sp<sup>2</sup>, sp<sup>3</sup>, sp, sp.</p><p><b>Comprobación:</b> C5 (CH<sub>3</sub>) es sp<sup>3</sup>. Hay 5 C: un sp<sup>2</sup>, dos sp<sup>3</sup> y dos sp. ✔</p><p><b>¿Por qué no las otras?</b> La primera trata al C del COOH como sp<sup>3</sup> por su OH, pero tiene un C=O. La tercera da sp<sup>2</sup> a los carbonos del triple. La cuarta da sp<sup>2</sup> al CH<sub>2</sub>, que solo tiene simples.</p>`,
      conc: 'El C del COOH es sp²; los dos C del triple son sp.' },
    { src: 'PAES Invierno 2027, adaptada',
      enun: r`<p>En un informe de laboratorio, un estudiante reporta que un compuesto desconocido es un <b>hidrocarburo de cadena abierta</b>, con <b>6 átomos de carbono</b>, todos con hibridación sp<sup>3</sup>. ¿Cuál de los siguientes compuestos coincide con esas características?</p>`,
      alts: ['Hex-2-eno, CH<sub>3</sub>–CH=CH–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>3</sub>', 'Ciclohexano, C<sub>6</sub>H<sub>12</sub>', 'Pentano, CH<sub>3</sub>–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>3</sub>', '2-metilpentano, CH<sub>3</sub>–CH(CH<sub>3</sub>)–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>3</sub>'], ok: 3,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Tres condiciones a la vez: cadena abierta, 6 C y todos sp<sup>3</sup> (solo enlaces simples).</p><p><b>Paso 2. Revisa el 2-metilpentano.</b> 5 C en la cadena + 1 CH<sub>3</sub> ramificado = 6 C. Solo simples: todos sp<sup>3</sup>. Cadena abierta (ramificada). ✔</p><p><b>Respuesta:</b> 2-metilpentano.</p><p><b>Comprobación:</b> fórmula C<sub>6</sub>H<sub>14</sub> = C<sub>n</sub>H<sub>2n+2</sub>, $I = 0$: sin dobles ni anillos. ✔</p><p><b>¿Por qué no las otras?</b> El hex-2-eno tiene 2 carbonos sp<sup>2</sup> por su doble enlace. El ciclohexano tiene 6 C sp<sup>3</sup>, pero es cíclico. El pentano es de cadena abierta y sp<sup>3</sup>, pero tiene solo 5 C.</p>`,
      conc: 'Todos sp³ y cadena abierta = alcano C₆H₁₄; una ramificación no la cierra.' },
    /* Tipo 5 · longitud, energía y ángulo según la hibridación (Invierno 2026 P63, Invierno 2027 P63) */
    { src: 'PAES Invierno 2026, adaptada',
      enun: r`<p>Un grupo de estudiantes dispone de las siguientes longitudes de enlace entre átomos de carbono:</p><p>Considerando solo los enlaces carbono–carbono y que las moléculas están extendidas, ¿cuál de las siguientes moléculas tiene la <b>menor</b> suma de longitudes de enlace C–C?</p>`,
      fig: { type: 'table', head: ['Enlace', 'Longitud (nm)'], rows: [['C–C', '0,154'], ['C=C', '0,134'], ['C≡C', '0,120']] },
      alts: ['Butano, CH<sub>3</sub>–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>3</sub>', 'But-2-eno, CH<sub>3</sub>–CH=CH–CH<sub>3</sub>', 'But-2-ino, CH<sub>3</sub>–C≡C–CH<sub>3</sub>', 'Buta-1,3-dieno, CH<sub>2</sub>=CH–CH=CH<sub>2</sub>'], ok: 3,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Sumar las longitudes de los 3 enlaces C–C de cada molécula y elegir la menor.</p><p><b>Paso 2. Suma cada una.</b><br>Butano: $3\cdot 0{,}154 = 0{,}462$ nm.<br>But-2-eno: $2\cdot 0{,}154 + 0{,}134 = 0{,}442$ nm.<br>But-2-ino: $2\cdot 0{,}154 + 0{,}120 = 0{,}428$ nm.<br>Buta-1,3-dieno: $2\cdot 0{,}134 + 0{,}154 = 0{,}422$ nm.</p><p><b>Respuesta:</b> buta-1,3-dieno.</p><p><b>Comprobación:</b> el triple acorta un enlace en $0{,}154 - 0{,}120 = 0{,}034$ nm; dos dobles acortan dos enlaces en $0{,}020$ cada uno: $0{,}040$ nm. Acortan más los dos dobles. ✔</p><p><b>¿Por qué no las otras?</b> El butano tiene solo simples: es la más larga. El but-2-eno acorta un solo enlace. El but-2-ino es la trampa: el triple es el enlace más corto, pero la molécula tiene un solo enlace múltiple; el dieno tiene dos.</p>`,
      conc: 'Compara la suma total, no solo el enlace más corto.' },
    { src: 'PAES Invierno 2027, adaptada',
      enun: r`<p>Una estudiante investiga la energía de los enlaces entre carbonos y encuentra los siguientes datos:</p><p>A partir de los datos, ¿cuál de las siguientes conclusiones es correcta?</p>`,
      fig: { type: 'table', head: ['Enlace', 'Hibridación de los C', 'Energía de enlace (kJ/mol)'], rows: [['C–C', 'sp<sup>3</sup>', '347'], ['C=C', 'sp<sup>2</sup>', '614'], ['C≡C', 'sp', '839']] },
      alts: ['La energía de un enlace doble es el doble de la de un enlace simple.', 'Un enlace $\\pi$ requiere menos energía para romperse que un enlace $\\sigma$.', 'Los carbonos sp forman los enlaces más débiles y más largos.', 'La energía de enlace disminuye al aumentar el número de enlaces entre los carbonos.'], ok: 1,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> La conclusión que se apoya en los datos.</p><p><b>Paso 2. Energía de un $\pi$.</b> El doble es 1 $\sigma$ + 1 $\pi$; el simple es 1 $\sigma$. El $\pi$ aporta $614 - 347 = 267$ kJ/mol, menos que los 347 del $\sigma$.</p><p><b>Paso 3. El segundo $\pi$ del triple.</b> $839 - 614 = 225$ kJ/mol, también menos que 347.</p><p><b>Respuesta:</b> un enlace $\pi$ requiere menos energía para romperse que un enlace $\sigma$.</p><p><b>Comprobación:</b> si el $\pi$ fuera tan fuerte como el $\sigma$, el doble valdría $2\cdot 347 = 694$ kJ/mol, y vale 614. ✔</p><p><b>¿Por qué no las otras?</b> «El doble vale el doble del simple»: $2\cdot 347 = 694 \neq 614$. «Los carbonos sp forman los enlaces más débiles y más largos»: el C≡C es el más fuerte (839) y el más corto. «La energía disminuye al aumentar los enlaces»: aumenta, de 347 a 614 y a 839.</p>`,
      conc: 'Más enlaces entre dos C: más energía y menor longitud; pero cada π es más débil que el σ.' },
    { src: 'PAES Invierno 2027, adaptada',
      enun: r`<p>El but-1-en-3-ino, CH<sub>2</sub>=CH–C≡CH, se usa en la síntesis de polímeros. Numerando sus carbonos de izquierda a derecha (C1 a C4), ¿qué ángulo de enlace aproximado hay alrededor de cada carbono?</p>`,
      alts: ['C1 y C2: 120°; C3 y C4: 180°', 'C1: 120°; C2: 109,5°; C3: 180°; C4: 109,5°', 'C1: 109,5°; C2 y C3: 120°; C4: 180°', 'C1 y C2: 180°; C3 y C4: 120°'], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El ángulo que corresponde a la hibridación de cada carbono.</p><p><b>Paso 2. C1 y C2.</b> Forman el doble enlace: sp<sup>2</sup>, geometría trigonal plana, 120°.</p><p><b>Paso 3. C3 y C4.</b> Forman el triple: sp, geometría lineal, 180°.</p><p><b>Respuesta:</b> C1 y C2: 120°; C3 y C4: 180°.</p><p><b>Comprobación:</b> la molécula no tiene ningún carbono con solo enlaces simples, así que no aparece 109,5°. ✔</p><p><b>¿Por qué no las otras?</b> La segunda asigna 109,5° a C2 y C4, que tienen enlaces múltiples. La tercera trata a C1 como sp<sup>3</sup> y a C3 como sp<sup>2</sup>. La cuarta intercambia los ángulos del doble y del triple.</p>`,
      conc: 'sp³: 109,5°; sp²: 120°; sp: 180°.' }
  ]
},

/* =====================================================================
   TEMA 2 · ISÓMEROS Y PROPIEDADES FÍSICAS DE COMPUESTOS ORGÁNICOS
   ===================================================================== */
{
  id: 'qui_e_isomeros', unit: 'Unidad 5 · Profundización electivo',
  icon: '🪞', title: 'Isómeros y propiedades físicas de compuestos orgánicos',
  desc: 'Para el Módulo Electivo: reconocer isómeros de cadena, de posición, de función y geométricos (cis y trans), saber qué representación los distingue, y predecir la temperatura de ebullición y la solubilidad en agua según el largo de la cadena, la ramificación y el grupo funcional.',
  slides: [
    { t: 'Misma fórmula, distinta estructura', b: r`
      <div class="cols"><div>
      <p>Dos compuestos son <b>isómeros</b> si tienen la <b>misma fórmula molecular</b> (y por eso la misma masa molar) pero <b>distinta estructura</b>. Son sustancias distintas, con propiedades distintas.</p>
      <table><thead><tr><th>Tipo</th><th>Qué cambia</th><th>Ejemplo</th></tr></thead><tbody>
      <tr><td>De cadena</td><td>el esqueleto de carbonos</td><td>pentano y 2-metilbutano (C<sub>5</sub>H<sub>12</sub>)</td></tr>
      <tr><td>De posición</td><td>dónde está el grupo o el doble enlace</td><td>propan-1-ol y propan-2-ol (C<sub>3</sub>H<sub>8</sub>O)</td></tr>
      <tr><td>De función</td><td>el grupo funcional</td><td>etanol y metoximetano (C<sub>2</sub>H<sub>6</sub>O)</td></tr>
      <tr><td>Geométricos</td><td>la disposición en el espacio</td><td>cis- y trans-but-2-eno (C<sub>4</sub>H<sub>8</sub>)</td></tr></tbody></table>
      </div><div>
      <div class="box"><b>Cómo comprobar</b> 1. Escribe la fórmula molecular de cada uno. 2. Si son distintas, <b>no</b> son isómeros. 3. Si son iguales, mira qué cambió: cadena, posición, función o espacio.</div>
      <div class="box alert"><b>Error típico</b> Llamar isómeros a dos dibujos del mismo compuesto. CH<sub>3</sub>–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>3</sub> dibujado recto o «doblado» sigue siendo butano: si al nombrarlos sale el mismo nombre, es la misma sustancia.</div>
      <div class="box alert"><b>Otro error</b> Llamar isómeros a compuestos de la misma familia con distinto número de C. Etanol (C<sub>2</sub>H<sub>6</sub>O) y propan-1-ol (C<sub>3</sub>H<sub>8</sub>O) no son isómeros: son de la misma serie homóloga.</div>
      </div></div>` },
    { t: 'Isómeros de función: las parejas que se repiten', b: r`
      <div class="cols"><div>
      <p>Las insaturaciones explican por qué ciertas familias comparten fórmula general:</p>
      <table><thead><tr><th>Fórmula general</th><th>Pareja de familias</th><th>Ejemplo</th></tr></thead><tbody>
      <tr><td>C<sub>n</sub>H<sub>2n+2</sub>O</td><td>alcohol ↔ éter</td><td>butan-1-ol y etoxietano (C<sub>4</sub>H<sub>10</sub>O)</td></tr>
      <tr><td>C<sub>n</sub>H<sub>2n</sub>O</td><td>aldehído ↔ cetona</td><td>propanal y propanona (C<sub>3</sub>H<sub>6</sub>O)</td></tr>
      <tr><td>C<sub>n</sub>H<sub>2n</sub>O<sub>2</sub></td><td>ácido carboxílico ↔ éster</td><td>ácido propanoico y etanoato de metilo (C<sub>3</sub>H<sub>6</sub>O<sub>2</sub>)</td></tr>
      <tr><td>C<sub>n</sub>H<sub>2n</sub></td><td>alqueno ↔ cicloalcano</td><td>hex-1-eno y ciclohexano (C<sub>6</sub>H<sub>12</sub>)</td></tr>
      <tr><td>C<sub>n</sub>H<sub>2n−2</sub></td><td>alquino ↔ dieno</td><td>but-1-ino y buta-1,3-dieno (C<sub>4</sub>H<sub>6</sub>)</td></tr></tbody></table>
      </div><div>
      <div class="box"><b>Ejemplo resuelto</b> ¿Es el etanoato de metilo, CH<sub>3</sub>–COO–CH<sub>3</sub>, isómero del ácido propanoico, CH<sub>3</sub>–CH<sub>2</sub>–COOH?<br><b>Paso 1.</b> Etanoato de metilo: C = 3, H = $3 + 3 = 6$, O = 2.<br><b>Paso 2.</b> Ácido propanoico: C = 3, H = $3 + 2 + 1 = 6$, O = 2.<br><b>Paso 3.</b> Misma fórmula, C<sub>3</sub>H<sub>6</sub>O<sub>2</sub>, y distinto grupo funcional: <b>isómeros de función</b>.</div>
      <div class="box alert"><b>Ojo</b> Los isómeros tienen la misma masa molar, pero eso no basta: dos compuestos pueden tener igual masa molar con fórmulas distintas (el propan-1-ol, C<sub>3</sub>H<sub>8</sub>O, y el ácido acético, C<sub>2</sub>H<sub>4</sub>O<sub>2</sub>, pesan 60 g/mol).</div>
      </div></div>` },
    { t: 'Isómeros geométricos: cis y trans', b: r`
      <div class="cols"><div>
      <p>Un doble enlace C=C <b>no puede girar</b>: el enlace $\pi$ lo traba. Si cada carbono del doble tiene dos grupos <b>distintos</b>, hay dos formas de ordenarlos:</p>
      <ul><li><b>cis</b>: los grupos iguales quedan del <b>mismo lado</b> del doble enlace.</li>
      <li><b>trans</b>: quedan en lados <b>opuestos</b>.</li></ul>
      <table><thead><tr><th>Compuesto</th><th>¿Tiene cis/trans?</th><th>Por qué</th></tr></thead><tbody>
      <tr><td>but-2-eno, CH<sub>3</sub>–CH=CH–CH<sub>3</sub></td><td>sí</td><td>cada C del doble tiene H y CH<sub>3</sub></td></tr>
      <tr><td>but-1-eno, CH<sub>2</sub>=CH–CH<sub>2</sub>–CH<sub>3</sub></td><td>no</td><td>el C1 tiene dos H iguales</td></tr>
      <tr><td>2-metilbut-2-eno, (CH<sub>3</sub>)<sub>2</sub>C=CH–CH<sub>3</sub></td><td>no</td><td>el C2 tiene dos CH<sub>3</sub> iguales</td></tr>
      <tr><td>1,2-dicloroeteno, CHCl=CHCl</td><td>sí</td><td>cada C tiene H y Cl</td></tr></tbody></table>
      </div><div>
      <div class="box"><b>¿Qué representación los distingue?</b> La fórmula molecular, la empírica, la condensada y la semidesarrollada son <b>iguales</b> para el cis y el trans (CH<sub>3</sub>–CH=CH–CH<sub>3</sub> en ambos). Solo una representación que muestre el espacio los separa: el <b>modelo de esferas y varillas</b>, el modelo compacto o una fórmula desarrollada dibujada con los ángulos.</div>
      <div class="box"><b>Propiedades distintas</b> cis-1,2-dicloroeteno: ebulle a 60 °C. trans-1,2-dicloroeteno: ebulle a 48 °C. En los fármacos, dos formas que solo difieren en el espacio pueden tener efectos biológicos muy distintos.</div>
      </div></div>` },
    { t: 'Temperatura de ebullición: tamaño y forma', b: r`
      <div class="cols"><div>
      <p>Para hervir, las moléculas deben separarse de sus vecinas. Mientras más se atraen, más alta es la temperatura de ebullición. En los hidrocarburos la atracción depende de la <b>superficie de contacto</b>:</p>
      <div class="box"><b>Regla 1. Largo de cadena</b> En una serie de alcanos lineales, a más carbonos, mayor temperatura de ebullición.</div>
      <div class="box"><b>Regla 2. Ramificación</b> Entre isómeros, a más ramificación, la molécula es más compacta (más «esférica»), toca menos a sus vecinas y hierve a menor temperatura.</div>
      </div><div>
      <table><thead><tr><th>Isómero</th><th>Fórmula</th><th>T. de ebullición (°C)</th></tr></thead><tbody>
      <tr><td>pentano</td><td>C<sub>5</sub>H<sub>12</sub></td><td>36,1</td></tr>
      <tr><td>2-metilbutano</td><td>C<sub>5</sub>H<sub>12</sub></td><td>27,8</td></tr>
      <tr><td>2,2-dimetilpropano</td><td>C<sub>5</sub>H<sub>12</sub></td><td>9,5</td></tr>
      <tr><td>hexano</td><td>C<sub>6</sub>H<sub>14</sub></td><td>68,7</td></tr>
      <tr><td>2-metilpentano</td><td>C<sub>6</sub>H<sub>14</sub></td><td>60,3</td></tr>
      <tr><td>2,2-dimetilbutano</td><td>C<sub>6</sub>H<sub>14</sub></td><td>49,7</td></tr></tbody></table>
      <div class="box alert"><b>Para predecir con una tabla</b> Ubica la molécula nueva entre las conocidas: mismo número de C que una fila y ramificación intermedia → temperatura intermedia. Nunca puede pasar al isómero lineal ni quedar bajo el más ramificado de su grupo.</div>
      </div></div>` },
    { t: 'Temperatura de ebullición: el grupo funcional', b: r`
      <div class="cols"><div>
      <p>Con masas molares parecidas, lo que decide es el <b>grupo funcional</b>:</p>
      <table><thead><tr><th>Compuesto</th><th>Familia</th><th>M (g/mol)</th><th>T. eb. (°C)</th></tr></thead><tbody>
      <tr><td>butano</td><td>alcano</td><td>58</td><td>−0,5</td></tr>
      <tr><td>metoxietano</td><td>éter</td><td>60</td><td>7</td></tr>
      <tr><td>propanal</td><td>aldehído</td><td>58</td><td>48</td></tr>
      <tr><td>propanona</td><td>cetona</td><td>58</td><td>56</td></tr>
      <tr><td>propan-1-ol</td><td>alcohol</td><td>60</td><td>97</td></tr>
      <tr><td>ácido etanoico</td><td>ácido carboxílico</td><td>60</td><td>118</td></tr></tbody></table>
      </div><div>
      <div class="box"><b>Por qué</b> Los grupos –OH (alcoholes y ácidos) y –NH forman <b>puentes de hidrógeno</b> entre moléculas: la atracción más fuerte. El C=O de aldehídos y cetonas es polar, pero no forma puentes de hidrógeno entre sus moléculas. Éteres y alcanos casi no tienen polaridad.</div>
      <div class="box"><b>Más grupos –OH, más alta</b> propan-1-ol 97 °C; propano-1,2-diol 188 °C; propano-1,2,3-triol (glicerina) 290 °C.</div>
      <div class="box"><b>Solubilidad en agua</b> «Lo semejante disuelve a lo semejante». Los alcoholes y ácidos pequeños se mezclan con el agua por sus puentes de hidrógeno; los hidrocarburos no. Al alargar la cadena (parte apolar) la solubilidad baja: el metanol se mezcla en cualquier proporción y el pentan-1-ol apenas se disuelve (unos 2 g por 100 mL).</div>
      </div></div>` },
    { t: 'Lo clave del tema', b: r`
      <table><thead><tr><th>Pregunta</th><th>Cómo responderla</th></tr></thead><tbody>
      <tr><td>¿Son isómeros?</td><td>misma fórmula molecular y distinta estructura</td></tr>
      <tr><td>¿De qué tipo?</td><td>cadena (esqueleto), posición (lugar del grupo), función (grupo distinto), geométrico (cis/trans)</td></tr>
      <tr><td>¿Tiene cis/trans?</td><td>doble C=C con dos grupos distintos en cada carbono</td></tr>
      <tr><td>¿Qué los distingue?</td><td>cis/trans: modelo de esferas y varillas o compacto; nunca la fórmula molecular</td></tr>
      <tr><td>¿Cuál hierve más alto?</td><td>1.º grupo funcional (ácido &gt; alcohol &gt; cetona/aldehído &gt; éter &gt; alcano); 2.º más C; 3.º menos ramificado</td></tr></tbody></table>
      <div class="cols"><div>
      <div class="box" style="margin-top:14px"><b>Recuerda</b><br>· Etanol (78 °C) y metoximetano (−24 °C) son isómeros: misma masa molar, ebullición muy distinta.<br>· Pentano 36,1 °C &gt; 2-metilbutano 27,8 °C &gt; 2,2-dimetilpropano 9,5 °C.<br>· Más grupos –OH, más alta la ebullición y más soluble en agua.</div>
      </div><div>
      <div class="box" style="margin-top:14px"><b>Método PAES</b> 1. Escribe la fórmula molecular de cada compuesto. 2. Agrupa por grupo funcional. 3. Dentro de cada grupo, ordena por número de C y luego por ramificación. 4. Si la pregunta trae tabla, ubica el compuesto nuevo entre los datos conocidos.</div>
      </div></div>` }
  ],
  example: {
    src: 'PAES Invierno 2026, adaptada',
    enun: r`<p>Durante la clase de química orgánica, cuatro estudiantes analizan los siguientes compuestos:</p><p>X: CH<sub>3</sub>–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>2</sub>–OH<br>Y: CH<sub>3</sub>–CH<sub>2</sub>–O–CH<sub>2</sub>–CH<sub>3</sub><br>Z: CH<sub>3</sub>–CH<sub>2</sub>–CH<sub>2</sub>–COOH</p><p>Luego, cada estudiante escribe en su cuaderno:</p><p>Estudiante 1: X e Y son isómeros de posición.<br>Estudiante 2: X e Y tienen la misma masa molar, y X tiene mayor temperatura de ebullición que Y.<br>Estudiante 3: Z tiene más átomos de carbono que X.<br>Estudiante 4: X y Z son isómeros de función.</p><p>¿Cuál de los estudiantes escribe una conclusión correcta?</p>`,
    alts: ['El estudiante 1.', 'El estudiante 2.', 'El estudiante 3.', 'El estudiante 4.'],
    ok: 1,
    sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Revisar cada afirmación. Primero, la fórmula molecular de cada compuesto.</p><p><b>Paso 2. Fórmulas.</b> X (butan-1-ol): C<sub>4</sub>H<sub>10</sub>O, 74 g/mol. Y (etoxietano): C<sub>4</sub>H<sub>10</sub>O, 74 g/mol. Z (ácido butanoico): C<sub>4</sub>H<sub>8</sub>O<sub>2</sub>, 88 g/mol.</p><p><b>Paso 3. Estudiante 2.</b> X e Y tienen la misma fórmula, así que la misma masa molar. X es un alcohol: forma puentes de hidrógeno entre sus moléculas y hierve más alto (118 °C) que el éter Y (35 °C). <b>Correcta.</b></p><p><b>Respuesta:</b> el estudiante 2.</p><p><b>¿Por qué no las otras?</b> Estudiante 1: X e Y sí son isómeros, pero de <b>función</b> (alcohol y éter), no de posición. Estudiante 3: los dos tienen 4 C. Estudiante 4: X y Z tienen fórmulas distintas (C<sub>4</sub>H<sub>10</sub>O y C<sub>4</sub>H<sub>8</sub>O<sub>2</sub>), así que no son isómeros.</p>`,
    conc: 'Primero las fórmulas moleculares: deciden quién es isómero de quién; después el grupo funcional decide quién hierve más alto.'
  },
  bank: [
    /* Tipo 1 · reconocer isómeros y su tipo (Invierno 2026 P65, Regular 2026 P67) */
    { src: 'PAES Invierno 2026, adaptada',
      enun: r`<p>¿Cuál de los siguientes pares de compuestos corresponde a <b>isómeros de función</b>?</p>`,
      alts: ['But-1-eno y but-2-eno.', 'Butano y metilpropano.', 'Etanol y propan-1-ol.', 'Propanal y propanona.'], ok: 3,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Un par con la misma fórmula molecular y distinto grupo funcional.</p><p><b>Paso 2. Propanal y propanona.</b> CH<sub>3</sub>–CH<sub>2</sub>–CHO y CH<sub>3</sub>–CO–CH<sub>3</sub>: los dos son C<sub>3</sub>H<sub>6</sub>O. Uno es aldehído y el otro cetona. ✔</p><p><b>Respuesta:</b> propanal y propanona.</p><p><b>¿Por qué no las otras?</b> But-1-eno y but-2-eno son isómeros (C<sub>4</sub>H<sub>8</sub>), pero de posición: cambia el lugar del doble. Butano y metilpropano son isómeros de cadena (C<sub>4</sub>H<sub>10</sub>). Etanol (C<sub>2</sub>H<sub>6</sub>O) y propan-1-ol (C<sub>3</sub>H<sub>8</sub>O) no son isómeros: tienen distinto número de C.</p>`,
      conc: 'Aldehído y cetona con el mismo número de C son isómeros de función.' },
    { src: 'PAES Regular 2026, adaptada',
      enun: r`<p>¿Cuál de los siguientes compuestos es isómero del ácido propanoico, CH<sub>3</sub>–CH<sub>2</sub>–COOH?</p>`,
      alts: ['Etanoato de metilo, CH<sub>3</sub>–COO–CH<sub>3</sub>', 'Propanal, CH<sub>3</sub>–CH<sub>2</sub>–CHO', 'Propano-1,2-diol, CH<sub>2</sub>OH–CHOH–CH<sub>3</sub>', 'Ácido etanoico, CH<sub>3</sub>–COOH'], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Un compuesto con la misma fórmula molecular que el ácido propanoico, C<sub>3</sub>H<sub>6</sub>O<sub>2</sub>.</p><p><b>Paso 2. Etanoato de metilo.</b> C: $2 + 1 = 3$. H: $3 + 3 = 6$. O: 2. C<sub>3</sub>H<sub>6</sub>O<sub>2</sub>. ✔ Es un éster: isómero de función del ácido.</p><p><b>Respuesta:</b> etanoato de metilo.</p><p><b>Comprobación:</b> los dos tienen una insaturación (un C=O) y 74 g/mol. ✔</p><p><b>¿Por qué no las otras?</b> El propanal tiene un solo O: C<sub>3</sub>H<sub>6</sub>O. El propano-1,2-diol tiene 2 O pero ningún doble enlace: C<sub>3</sub>H<sub>8</sub>O<sub>2</sub>. El ácido etanoico tiene 2 C: C<sub>2</sub>H<sub>4</sub>O<sub>2</sub>.</p>`,
      conc: 'Ácido carboxílico y éster con el mismo número de C son isómeros de función.' },
    { src: 'PAES Invierno 2026, adaptada',
      enun: r`<p>Se analizan cuatro hidrocarburos: but-1-eno, but-2-eno, ciclobutano y metilpropeno, CH<sub>2</sub>=C(CH<sub>3</sub>)–CH<sub>3</sub>. Al respecto, ¿cuál(es) de las siguientes afirmaciones es (son) correcta(s)?</p><p>I) But-1-eno y but-2-eno son isómeros de posición.<br>II) Ciclobutano y but-1-eno son isómeros.<br>III) Metilpropeno y but-2-eno tienen distinta fórmula molecular.</p>`,
      alts: ['Solo I', 'Solo III', 'Solo I y II', 'I, II y III'], ok: 2,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Revisar cada afirmación con las fórmulas moleculares.</p><p><b>Paso 2. Fórmulas.</b> But-1-eno, but-2-eno y metilpropeno: C<sub>4</sub>H<sub>8</sub> (un doble). Ciclobutano: C<sub>4</sub>H<sub>8</sub> (un anillo). Los cuatro tienen 1 insaturación.</p><p><b>Paso 3. I.</b> Misma cadena, distinto lugar del doble: isómeros de posición. <b>Correcta.</b></p><p><b>Paso 4. II.</b> Ambos son C<sub>4</sub>H<sub>8</sub> con distinta estructura: son isómeros (alqueno y cicloalcano). <b>Correcta.</b></p><p><b>Paso 5. III.</b> Los dos son C<sub>4</sub>H<sub>8</sub>: misma fórmula. <b>Incorrecta.</b></p><p><b>Respuesta:</b> solo I y II.</p><p><b>¿Por qué no las otras?</b> «Solo I» deja fuera II, que también es correcta. «Solo III» y «I, II y III» aceptan III: el metilpropeno es isómero de cadena del but-2-eno.</p>`,
      conc: 'Un anillo y un doble enlace valen lo mismo: alqueno y cicloalcano de igual C son isómeros.' },
    /* Tipo 2 · isómeros geométricos y su representación (Invierno 2026 P66) */
    { src: 'PAES Invierno 2026, adaptada',
      enun: r`<p>¿Cuál de los siguientes compuestos presenta isomería geométrica (cis y trans)?</p>`,
      alts: ['Pent-1-eno, CH<sub>2</sub>=CH–CH<sub>2</sub>–CH<sub>2</sub>–CH<sub>3</sub>', '2-metilbut-2-eno, (CH<sub>3</sub>)<sub>2</sub>C=CH–CH<sub>3</sub>', 'Pent-2-eno, CH<sub>3</sub>–CH=CH–CH<sub>2</sub>–CH<sub>3</sub>', 'Propeno, CH<sub>2</sub>=CH–CH<sub>3</sub>'], ok: 2,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Un doble enlace en el que <b>cada</b> carbono tenga dos grupos distintos.</p><p><b>Paso 2. Pent-2-eno.</b> C2 tiene H y CH<sub>3</sub>; C3 tiene H y CH<sub>2</sub>–CH<sub>3</sub>. Los dos carbonos tienen grupos distintos: existen cis-pent-2-eno y trans-pent-2-eno. ✔</p><p><b>Respuesta:</b> pent-2-eno.</p><p><b>¿Por qué no las otras?</b> En el pent-1-eno y en el propeno, el C1 es =CH<sub>2</sub>: tiene dos H iguales, así que girar los grupos da la misma molécula. En el 2-metilbut-2-eno, el C2 tiene dos CH<sub>3</sub> iguales.</p>`,
      conc: 'Si un carbono del doble tiene dos grupos iguales, no hay cis/trans.' },
    { src: 'PAES Invierno 2026, adaptada',
      enun: r`<p>Un grupo de estudiantes encuentra dos sustancias con la misma fórmula condensada, CHCl=CHCl. Una de ellas ebulle a 60 °C y la otra a 48 °C, ambas a 1 atm. ¿Cuál de las siguientes conclusiones es correcta?</p>`,
      alts: ['Son el mismo compuesto, porque tienen la misma fórmula condensada.', 'Son isómeros de cadena, porque tienen distinto esqueleto de carbonos.', 'Son isómeros de función, porque tienen distinta temperatura de ebullición.', 'Son isómeros geométricos, con los átomos de Cl dispuestos de distinta forma en el espacio.'], ok: 3,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Explicar cómo dos sustancias con la misma fórmula tienen propiedades distintas.</p><p><b>Paso 2. Analiza la estructura.</b> CHCl=CHCl tiene un doble enlace y cada carbono lleva H y Cl, dos grupos distintos. Puede tener los dos Cl del mismo lado (cis) o en lados opuestos (trans).</p><p><b>Paso 3. Relaciona con los datos.</b> Distinta temperatura de ebullición indica sustancias distintas; misma fórmula indica isómeros. Lo único que puede cambiar es la disposición espacial.</p><p><b>Respuesta:</b> son isómeros geométricos (cis-1,2-dicloroeteno, 60 °C, y trans-1,2-dicloroeteno, 48 °C).</p><p><b>¿Por qué no las otras?</b> «El mismo compuesto»: un compuesto puro tiene una sola temperatura de ebullición; la fórmula condensada no muestra la geometría. «De cadena»: ambos tienen 2 C, el esqueleto es el mismo. «De función»: los dos tienen los mismos grupos (C=C y C–Cl); la temperatura de ebullición no define la función.</p>`,
      conc: 'Misma fórmula condensada no significa mismo compuesto: la geometría cis/trans no se ve en ella.' },
    { src: 'PAES Invierno 2026, adaptada',
      enun: r`<p>Se comparan el cis-but-2-eno y el trans-but-2-eno. ¿Cuál(es) de las siguientes afirmaciones es (son) correcta(s)?</p><p>I) Tienen la misma fórmula molecular.<br>II) Tienen la misma fórmula semidesarrollada, CH<sub>3</sub>–CH=CH–CH<sub>3</sub>.<br>III) Se pueden distinguir mediante un modelo de esferas y varillas.</p>`,
      alts: ['Solo I', 'Solo I y II', 'Solo I y III', 'I, II y III'], ok: 3,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Revisar qué representaciones son iguales y cuál los separa.</p><p><b>Paso 2. I.</b> Ambos son C<sub>4</sub>H<sub>8</sub>. <b>Correcta.</b></p><p><b>Paso 3. II.</b> La semidesarrollada muestra qué átomos están unidos, no hacia dónde apuntan: es CH<sub>3</sub>–CH=CH–CH<sub>3</sub> para los dos. <b>Correcta.</b></p><p><b>Paso 4. III.</b> El modelo de esferas y varillas muestra la posición de los CH<sub>3</sub> en el espacio: del mismo lado (cis) o en lados opuestos (trans). <b>Correcta.</b></p><p><b>Respuesta:</b> I, II y III.</p><p><b>¿Por qué no las otras?</b> «Solo I», «Solo I y II» y «Solo I y III» dejan fuera afirmaciones correctas. Lo clave es que II y III no se contradicen: la semidesarrollada no los distingue y el modelo 3D sí.</p>`,
      conc: 'Para distinguir cis y trans se necesita una representación tridimensional.' },
    /* Tipo 3 · temperatura de ebullición: cadena y ramificación con datos (Invierno 2026 P67) */
    { src: 'PAES Invierno 2026, adaptada',
      enun: r`<p>Un grupo de estudiantes recopila las temperaturas de ebullición, a 1 atm, de algunos alcanos:</p><p>Luego encuentran el 3-metilpentano, CH<sub>3</sub>–CH<sub>2</sub>–CH(CH<sub>3</sub>)–CH<sub>2</sub>–CH<sub>3</sub>. Según la tabla, ¿cuál es su temperatura de ebullición aproximada?</p>`,
      fig: { type: 'table', head: ['Alcano', 'Fórmula', 'T. de ebullición (°C)'], rows: [['pentano', 'C<sub>5</sub>H<sub>12</sub>', '36,1'], ['2-metilbutano', 'C<sub>5</sub>H<sub>12</sub>', '27,8'], ['hexano', 'C<sub>6</sub>H<sub>14</sub>', '68,7'], ['2,2-dimetilbutano', 'C<sub>6</sub>H<sub>14</sub>', '49,7']] },
      alts: ['27,8 °C', '42,0 °C', '63,3 °C', '76,7 °C'], ok: 2,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Predecir la temperatura de ebullición de un C<sub>6</sub>H<sub>14</sub> con una ramificación.</p><p><b>Paso 2. Ubícalo entre sus isómeros.</b> Tiene 6 C, como el hexano y el 2,2-dimetilbutano. Tiene una ramificación: más compacto que el hexano (0 ramificaciones) y menos que el 2,2-dimetilbutano (2 ramificaciones).</p><p><b>Paso 3. Rango.</b> Debe estar entre 49,7 °C y 68,7 °C. La única opción en ese rango es 63,3 °C.</p><p><b>Respuesta:</b> 63,3 °C.</p><p><b>¿Por qué no las otras?</b> 27,8 °C es el valor del 2-metilbutano, que tiene solo 5 C. 42,0 °C queda bajo el isómero más ramificado. 76,7 °C supera al hexano, que es el isómero lineal: ningún isómero ramificado puede hervir más alto que él.</p>`,
      conc: 'Un isómero con ramificación intermedia hierve entre el lineal y el más ramificado.' },
    { src: 'PAES Invierno 2026, adaptada',
      enun: r`<p>El octano, el 2-metilheptano y el 2,2,4-trimetilpentano (isooctano) son isómeros de fórmula C<sub>8</sub>H<sub>18</sub>. ¿Cuál de las siguientes opciones los ordena de <b>mayor</b> a <b>menor</b> temperatura de ebullición?</p>`,
      alts: ['2,2,4-trimetilpentano &gt; 2-metilheptano &gt; octano', 'Octano &gt; 2-metilheptano &gt; 2,2,4-trimetilpentano', 'Los tres tienen la misma temperatura de ebullición, porque tienen la misma masa molar.', '2-metilheptano &gt; octano &gt; 2,2,4-trimetilpentano'], ok: 1,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Ordenar isómeros según su temperatura de ebullición.</p><p><b>Paso 2. Cuenta ramificaciones.</b> Octano: 0. 2-metilheptano: 1. 2,2,4-trimetilpentano: 3.</p><p><b>Paso 3. Aplica la regla.</b> A más ramificación, menos superficie de contacto y menor temperatura de ebullición.</p><p><b>Respuesta:</b> octano &gt; 2-metilheptano &gt; 2,2,4-trimetilpentano.</p><p><b>Comprobación:</b> valores reales: 126 °C, 118 °C y 99 °C. ✔</p><p><b>¿Por qué no las otras?</b> La primera invierte la regla. La tercera supone que la masa molar lo decide todo, pero la forma también importa. La cuarta pone al 2-metilheptano sobre el octano, que es lineal.</p>`,
      conc: 'Entre isómeros: menos ramificado, mayor temperatura de ebullición.' },
    { src: 'PAES Invierno 2026, adaptada',
      enun: r`<p>La tabla muestra las temperaturas de ebullición, a 1 atm, de los primeros alcanos lineales:</p><p>¿Cuál(es) de estos alcanos es (son) gas(es) a 25 °C y 1 atm?</p><p>I) Propano<br>II) Butano<br>III) Pentano</p>`,
      fig: { type: 'table', head: ['Alcano', 'N.º de C', 'T. de ebullición (°C)'], rows: [['metano', '1', '−162'], ['etano', '2', '−89'], ['propano', '3', '−42'], ['butano', '4', '−0,5'], ['pentano', '5', '36']] },
      alts: ['Solo I', 'Solo III', 'Solo I y II', 'I, II y III'], ok: 2,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Los alcanos que a 25 °C ya están sobre su temperatura de ebullición.</p><p><b>Paso 2. Compara con 25 °C.</b> Propano: $-42 &lt; 25$, gas. Butano: $-0{,}5 &lt; 25$, gas. Pentano: $36 &gt; 25$, todavía no hierve: líquido.</p><p><b>Respuesta:</b> solo I y II.</p><p><b>Comprobación:</b> la tendencia es creciente con el número de C; el cambio de gas a líquido a 25 °C ocurre entre 4 y 5 carbonos. ✔</p><p><b>¿Por qué no las otras?</b> «Solo I» deja fuera el butano, que hierve bajo 0 °C. «Solo III» y «I, II y III» consideran gas al pentano, pero a 25 °C no ha llegado a su temperatura de ebullición.</p>`,
      conc: 'Una sustancia es gas a una temperatura mayor que su temperatura de ebullición.' },
    /* Tipo 4 · temperatura de ebullición y grupo funcional (Invierno 2027 P69) */
    { src: 'PAES Invierno 2027, adaptada',
      enun: r`<p>Los siguientes compuestos tienen masas molares parecidas (58 a 60 g/mol): butano, propanal, propan-1-ol y ácido etanoico. ¿Cuál de las siguientes opciones los ordena de <b>menor</b> a <b>mayor</b> temperatura de ebullición?</p>`,
      alts: ['Butano &lt; propanal &lt; propan-1-ol &lt; ácido etanoico', 'Ácido etanoico &lt; propan-1-ol &lt; propanal &lt; butano', 'Propanal &lt; butano &lt; ácido etanoico &lt; propan-1-ol', 'Butano &lt; propan-1-ol &lt; propanal &lt; ácido etanoico'], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Ordenar según la atracción entre moléculas, que depende del grupo funcional (las masas son casi iguales).</p><p><b>Paso 2. Clasifica.</b> Butano: alcano, casi sin polaridad. Propanal: C=O polar, sin puentes de hidrógeno entre sus moléculas. Propan-1-ol: un –OH, forma puentes de hidrógeno. Ácido etanoico: –COOH, forma puentes de hidrógeno más fuertes (dos por par de moléculas).</p><p><b>Respuesta:</b> butano &lt; propanal &lt; propan-1-ol &lt; ácido etanoico.</p><p><b>Comprobación:</b> valores reales: −0,5 °C, 48 °C, 97 °C y 118 °C. ✔</p><p><b>¿Por qué no las otras?</b> La segunda es el orden al revés. La tercera pone al propanal bajo el butano y al alcohol sobre el ácido. La cuarta pone al aldehído sobre el alcohol, pero el C=O no forma puentes de hidrógeno entre sus moléculas.</p>`,
      conc: 'Con masas parecidas: ácido > alcohol > aldehído o cetona > alcano.' },
    { src: 'PAES Invierno 2027, adaptada',
      enun: r`<p>En una clase, la profesora pide a sus estudiantes una revisión bibliográfica sobre la temperatura de ebullición de algunos compuestos orgánicos. La información recopilada es:</p><p>De acuerdo con la situación descrita, ¿cuál fue el propósito de la búsqueda?</p>`,
      fig: { type: 'table', head: ['Compuesto', 'Fórmula semidesarrollada', 'T. de ebullición (°C), a 1 atm'], rows: [['propan-1-ol', 'CH<sub>3</sub>–CH<sub>2</sub>–CH<sub>2</sub>OH', '97'], ['propano-1,2-diol', 'CH<sub>3</sub>–CHOH–CH<sub>2</sub>OH', '188'], ['propano-1,2,3-triol', 'CH<sub>2</sub>OH–CHOH–CH<sub>2</sub>OH', '290']] },
      alts: ['Comparar la temperatura de ebullición de compuestos con diferente largo de cadena.', 'Analizar el efecto de la cantidad de grupos alcohol en la temperatura de ebullición.', 'Analizar el efecto de la posición del grupo alcohol en la temperatura de ebullición.', 'Comparar la temperatura de ebullición de isómeros de función.'], ok: 1,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Reconocer qué variable cambia entre los compuestos de la tabla: esa es la que se quería estudiar.</p><p><b>Paso 2. Qué se mantiene.</b> Los tres tienen 3 C en cadena lineal.</p><p><b>Paso 3. Qué cambia.</b> El número de grupos –OH: 1, 2 y 3. Y la temperatura de ebullición sube: 97, 188 y 290 °C.</p><p><b>Respuesta:</b> analizar el efecto de la cantidad de grupos alcohol en la temperatura de ebullición.</p><p><b>¿Por qué no las otras?</b> El largo de cadena es el mismo (3 C). La posición no es la variable: cambia cuántos –OH hay, no dónde está uno solo. No son isómeros: tienen distinto número de O (C<sub>3</sub>H<sub>8</sub>O, C<sub>3</sub>H<sub>8</sub>O<sub>2</sub> y C<sub>3</sub>H<sub>8</sub>O<sub>3</sub>).</p>`,
      conc: 'El propósito de una búsqueda se lee en lo que cambia de una fila a otra.' },
    { src: 'PAES Invierno 2027, adaptada',
      enun: r`<p>El etanol, CH<sub>3</sub>–CH<sub>2</sub>–OH, ebulle a 78 °C, y el metoximetano, CH<sub>3</sub>–O–CH<sub>3</sub>, ebulle a −24 °C, ambos a 1 atm. Los dos tienen fórmula molecular C<sub>2</sub>H<sub>6</sub>O. ¿Qué explica esta diferencia?</p>`,
      alts: ['El etanol tiene mayor masa molar que el metoximetano.', 'El etanol forma puentes de hidrógeno entre sus moléculas por su grupo –OH; el éter no.', 'El metoximetano tiene más átomos de carbono en su cadena.', 'El metoximetano tiene un doble enlace que debilita la atracción entre moléculas.'], ok: 1,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> La causa de la diferencia entre dos isómeros de función.</p><p><b>Paso 2. Qué tienen igual.</b> Misma fórmula (C<sub>2</sub>H<sub>6</sub>O), misma masa molar (46 g/mol), mismo número de C.</p><p><b>Paso 3. Qué cambia.</b> El etanol tiene un H unido a O (–OH): sus moléculas se unen por puentes de hidrógeno. En el éter, el O está entre dos carbonos y no tiene H unido a él.</p><p><b>Respuesta:</b> el etanol forma puentes de hidrógeno entre sus moléculas por su grupo –OH; el éter no.</p><p><b>¿Por qué no las otras?</b> La masa molar y el número de C son iguales: son isómeros. El metoximetano no tiene dobles enlaces: $I = \dfrac{4 + 2 - 6}{2} = 0$.</p>`,
      conc: 'Entre isómeros de función, el que tiene –OH hierve mucho más alto.' },
    /* Tipo 5 · predecir con series de datos: ebullición y solubilidad (Invierno 2026 P67, Invierno 2027 P56) */
    { src: 'PAES Invierno 2026, adaptada',
      enun: r`<p>La tabla muestra las temperaturas de ebullición, a 1 atm, de algunos alcoholes lineales:</p><p>Según la tendencia, ¿cuál es la temperatura de ebullición aproximada del pentan-1-ol?</p>`,
      fig: { type: 'table', head: ['Alcohol', 'N.º de C', 'T. de ebullición (°C)'], rows: [['metanol', '1', '65'], ['etanol', '2', '78'], ['propan-1-ol', '3', '97'], ['butan-1-ol', '4', '118']] },
      alts: ['100 °C', '118 °C', '138 °C', '236 °C'], ok: 2,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Extender la tendencia de la serie un carbono más.</p><p><b>Paso 2. Diferencias.</b> $78 - 65 = 13$; $97 - 78 = 19$; $118 - 97 = 21$. Cada carbono agrega unos 20 °C.</p><p><b>Paso 3. Predice.</b> $118 + 20 \approx 138$ °C.</p><p><b>Respuesta:</b> 138 °C.</p><p><b>Comprobación:</b> el valor real del pentan-1-ol es 138 °C. ✔</p><p><b>¿Por qué no las otras?</b> 100 °C es menor que el butan-1-ol, pero con un C más la ebullición sube. 118 °C es el mismo valor del butan-1-ol: no sigue la tendencia. 236 °C duplica el valor del butanol, como si fuera proporcional al número de C; la serie sube de a unos 20 °C.</p>`,
      conc: 'En una serie homóloga, cada CH₂ extra sube la ebullición en una cantidad parecida.' },
    { src: 'PAES Invierno 2027, adaptada',
      enun: r`<p>Un grupo de estudiantes investiga la solubilidad en agua de algunos alcoholes lineales a 20 °C:</p><p>¿Cuál de las siguientes conclusiones es coherente con los datos?</p>`,
      fig: { type: 'table', head: ['Alcohol', 'N.º de C', 'Solubilidad en agua (g/100 mL)'], rows: [['etanol', '2', 'miscible en toda proporción'], ['propan-1-ol', '3', 'miscible en toda proporción'], ['butan-1-ol', '4', '7,7'], ['pentan-1-ol', '5', '2,2']] },
      alts: ['A mayor cadena carbonada, menor solubilidad del alcohol en agua.', 'A mayor cadena carbonada, mayor número de grupos –OH y mayor solubilidad.', 'La solubilidad no depende del alcohol, solo de la temperatura.', 'El pentan-1-ol es más soluble que el butan-1-ol porque tiene mayor masa molar.'], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> La relación entre el largo de la cadena y la solubilidad.</p><p><b>Paso 2. Lee la tabla.</b> Hasta 3 C se mezclan con el agua en cualquier proporción. Con 4 C la solubilidad baja a 7,7 g/100 mL y con 5 C, a 2,2 g/100 mL.</p><p><b>Paso 3. Explica.</b> Todos tienen un solo –OH (la parte que se une al agua); al alargar la cadena crece la parte apolar, que no se mezcla con el agua.</p><p><b>Respuesta:</b> a mayor cadena carbonada, menor solubilidad del alcohol en agua.</p><p><b>¿Por qué no las otras?</b> Todos tienen un solo grupo –OH: el número de –OH no aumenta. La temperatura es la misma en todos los ensayos (20 °C), así que no explica las diferencias. El pentan-1-ol es el <b>menos</b> soluble de la tabla.</p>`,
      conc: 'La cadena carbonada es la parte apolar: mientras más larga, menos se disuelve en agua.' },
    { src: 'PAES Invierno 2027, adaptada',
      enun: r`<p>Se agregan, por separado, 5 mL de hexano (C<sub>6</sub>H<sub>14</sub>), 5 mL de hexan-1-ol (C<sub>6</sub>H<sub>13</sub>OH) y 5 mL de etanol (C<sub>2</sub>H<sub>5</sub>OH) a tres tubos con 10 mL de agua cada uno. ¿Cuál de las siguientes opciones ordena las sustancias de <b>menor</b> a <b>mayor</b> solubilidad en agua?</p>`,
      alts: ['Etanol &lt; hexan-1-ol &lt; hexano', 'Hexan-1-ol &lt; hexano &lt; etanol', 'Hexano &lt; etanol &lt; hexan-1-ol', 'Hexano &lt; hexan-1-ol &lt; etanol'], ok: 3,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Ordenar según cuánto se parece cada sustancia al agua (polar, con puentes de hidrógeno).</p><p><b>Paso 2. Hexano.</b> Solo C e H: apolar, no se disuelve. Forma dos fases.</p><p><b>Paso 3. Hexan-1-ol.</b> Tiene un –OH, pero una cadena de 6 C: muy poco soluble (menos de 1 g por 100 mL).</p><p><b>Paso 4. Etanol.</b> Un –OH y solo 2 C: se mezcla con el agua en cualquier proporción.</p><p><b>Respuesta:</b> hexano &lt; hexan-1-ol &lt; etanol.</p><p><b>¿Por qué no las otras?</b> La primera es el orden inverso. La segunda deja al hexanol bajo el hexano, pero el –OH algo de solubilidad le da. La tercera pone al hexan-1-ol sobre el etanol, aunque su parte apolar es tres veces más larga.</p>`,
      conc: 'Lo semejante disuelve a lo semejante: –OH ayuda, cadena larga perjudica.' }
  ]
},

/* =====================================================================
   TEMA 3 · ESTEQUIOMETRÍA A FONDO: DATOS EXPERIMENTALES Y MASA TOTAL
   ===================================================================== */
{
  id: 'qui_e_estequiometria', unit: 'Unidad 5 · Profundización electivo',
  icon: '📊', title: 'Estequiometría a fondo: datos experimentales y masa total',
  desc: 'Para el Módulo Electivo: deducir la razón molar de una reacción a partir de masas medidas, balancear y calcular las cantidades de todas las sustancias de una vez, usar la conservación de la masa total, resolver el reactivo limitante cuando el dato es el producto y obtener la fórmula empírica a partir de una combustión.',
  slides: [
    { t: 'De los datos a la razón molar', b: r`
      <div class="cols"><div>
      <p>En el Módulo Electivo a veces no te dan la ecuación: te dan <b>masas medidas</b> y debes descubrir en qué proporción reaccionan las sustancias.</p>
      <p><b>Ejemplo.</b> Y (27 g/mol) reacciona con un exceso de Z (32 g/mol) y forma un único producto X (102 g/mol). Con 13,5 g de Y se obtienen 25,5 g de X.</p>
      <p><b>Paso 1. Mol de Y y de X.</b> $n_Y = \dfrac{13{,}5}{27} = 0{,}5$ mol; $n_X = \dfrac{25{,}5}{102} = 0{,}25$ mol.</p>
      <p><b>Paso 2. Masa de Z (Lavoisier).</b> $25{,}5 - 13{,}5 = 12$ g, o sea $\dfrac{12}{32} = 0{,}375$ mol.</p>
      <p><b>Paso 3. Divide por el menor.</b> $0{,}5 : 0{,}375 : 0{,}25 = 2 : 1{,}5 : 1$. Multiplica por 2 para tener enteros: <b>4 Y + 3 Z → 2 X</b>.</p>
      </div><div>
      <div class="box"><b>Es la reacción</b> 4 Al + 3 O<sub>2</sub> → 2 Al<sub>2</sub>O<sub>3</sub>: Al = 27, O<sub>2</sub> = 32 y Al<sub>2</sub>O<sub>3</sub> = 102 g/mol.</div>
      <div class="box"><b>Con varias experiencias</b> Si duplicas la masa de Y y el producto también se duplica, la razón es la misma: basta con calcular una fila completa y comprobar con otra.</div>
      <div class="box alert"><b>Error típico</b> Comparar gramos en vez de mol: «13,5 g de Y dan 25,5 g de X, casi el doble, entonces 1 Y forma 2 X». La razón molar sale de los <b>mol</b>, y aquí es al revés: 2 mol de Y forman 1 mol de X.</div>
      </div></div>` },
    { t: 'Todas las cantidades de una vez', b: r`
      <div class="cols"><div>
      <p>Con la ecuación balanceada puedes escribir una <b>fila de mol</b> y otra de <b>masas</b> para todas las sustancias. Combustión de la glucosa:</p>
      <p style="text-align:center">C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6 O<sub>2</sub> → 6 CO<sub>2</sub> + 6 H<sub>2</sub>O</p>
      <table><thead><tr><th></th><th>C<sub>6</sub>H<sub>12</sub>O<sub>6</sub></th><th>O<sub>2</sub></th><th>CO<sub>2</sub></th><th>H<sub>2</sub>O</th></tr></thead><tbody>
      <tr><td>mol</td><td>1</td><td>6</td><td>6</td><td>6</td></tr>
      <tr><td>masa (g)</td><td>180</td><td>$6\cdot 32 = 192$</td><td>$6\cdot 44 = 264$</td><td>$6\cdot 18 = 108$</td></tr></tbody></table>
      <p>Reactivos: $180 + 192 = 372$ g. Productos: $264 + 108 = 372$ g. ✔</p>
      </div><div>
      <div class="box"><b>Para qué sirve</b> Si te dicen «se obtienen 372 g de productos», ya sabes que reaccionó 1 mol de glucosa con 6 mol de O<sub>2</sub> y se formaron 6 mol de CO<sub>2</sub> y 6 mol de H<sub>2</sub>O. Si te dan la mitad, todo se divide por 2.</div>
      <div class="box alert"><b>Ojo</b> La masa total se conserva, los mol no siempre. En N<sub>2</sub> + 3 H<sub>2</sub> → 2 NH<sub>3</sub> entran 4 mol y salen 2, pero entran $28 + 6 = 34$ g y salen $2\cdot 17 = 34$ g.</div>
      <div class="box alert"><b>Si la ecuación no viene balanceada</b> Balancéala primero. La PAES puede dar «C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + O<sub>2</sub> → CO<sub>2</sub> + H<sub>2</sub>O» sin coeficientes justamente para ver si lo haces.</div>
      </div></div>` },
    { t: 'Limitante cuando el dato es el producto', b: r`
      <div class="cols"><div>
      <p>A veces el enunciado da las cantidades iniciales <b>y</b> la cantidad de producto obtenida, y pregunta cuánto se consumió de un reactivo.</p>
      <p><b>Ejemplo.</b> 2 Fe + 6 HCl → 2 FeCl<sub>3</sub> + 3 H<sub>2</sub>. Se usan 0,1 mol de HCl y 0,1 mol de Fe, y se obtienen 0,05 mol de H<sub>2</sub>. ¿Cuánto Fe se consumió?</p>
      <p><b>Paso 1. Limitante.</b> Fe: $\dfrac{0{,}1}{2} = 0{,}05$. HCl: $\dfrac{0{,}1}{6} \approx 0{,}017$. Limita el HCl.</p>
      <p><b>Paso 2. Confirma con el producto.</b> $0{,}1\cdot\dfrac{3}{6} = 0{,}05$ mol de H<sub>2</sub>. ✔ Coincide con el dato.</p>
      <p><b>Paso 3. Fe consumido.</b> $0{,}1\cdot\dfrac{2}{6} \approx 0{,}03$ mol. Sobran unos 0,07 mol de Fe.</p>
      </div><div>
      <div class="box"><b>Atajo</b> Si conoces el producto formado, úsalo directamente: $0{,}05$ mol de H<sub>2</sub> $\cdot\dfrac{2}{3} \approx 0{,}03$ mol de Fe. Lo que reaccionó siempre está en proporción con lo que se formó.</div>
      <div class="box alert"><b>Error típico</b> Responder 0,1 mol de Fe, «porque se usaron 0,1 mol». Se <b>pusieron</b> 0,1 mol; se <b>consumió</b> solo lo que alcanzó a reaccionar con el HCl.</div>
      </div></div>` },
    { t: 'Fórmula empírica por combustión', b: r`
      <div class="cols"><div>
      <p>Al quemar un compuesto orgánico, <b>todo su C termina en CO<sub>2</sub></b> y <b>todo su H termina en H<sub>2</sub>O</b>. Midiendo esas masas se obtiene su composición.</p>
      <p><b>Ejemplo.</b> Se queman 2,3 g de un compuesto de C, H y O y se obtienen 4,4 g de CO<sub>2</sub> y 2,7 g de H<sub>2</sub>O.</p>
      <p><b>Paso 1. Carbono.</b> En 44 g de CO<sub>2</sub> hay 12 g de C: $4{,}4\cdot\dfrac{12}{44} = 1{,}2$ g de C.</p>
      <p><b>Paso 2. Hidrógeno.</b> En 18 g de H<sub>2</sub>O hay 2 g de H: $2{,}7\cdot\dfrac{2}{18} = 0{,}3$ g de H.</p>
      <p><b>Paso 3. Oxígeno, por diferencia.</b> $2{,}3 - 1{,}2 - 0{,}3 = 0{,}8$ g de O.</p>
      <p><b>Paso 4. Mol y razón.</b> C: $\dfrac{1{,}2}{12} = 0{,}1$; H: $\dfrac{0{,}3}{1} = 0{,}3$; O: $\dfrac{0{,}8}{16} = 0{,}05$. Dividiendo por 0,05: <b>C<sub>2</sub>H<sub>6</sub>O</b>.</p>
      </div><div>
      <div class="box alert"><b>Error típico</b> Calcular el O desde el CO<sub>2</sub> o el H<sub>2</sub>O. Ese oxígeno viene en parte del O<sub>2</sub> del aire: el O del compuesto se obtiene <b>restando</b> C y H a la masa de la muestra.</div>
      <div class="box"><b>Si es un hidrocarburo</b> Solo hay C e H: no hay que restar nada. Y si te dan la masa molar, divide por la masa de la fórmula empírica para obtener la molecular.</div>
      <div class="box"><b>Porcentaje de C</b> $\%\text{C} = \dfrac{\text{masa de C}}{\text{masa de muestra}}\cdot 100$. En el ejemplo: $\dfrac{1{,}2}{2{,}3}\cdot 100 \approx 52\,\%$.</div>
      </div></div>` },
    { t: 'Balancear y calcular en un solo problema', b: r`
      <div class="cols"><div>
      <p>Muchos problemas del Electivo mezclan los pasos: la ecuación viene sin balancear y te piden una masa.</p>
      <p><b>Ejemplo.</b> Fe<sub>2</sub>O<sub>3</sub> + CO → Fe + CO<sub>2</sub>. ¿Qué masa de Fe se obtiene de 320 g de Fe<sub>2</sub>O<sub>3</sub> (160 g/mol) con exceso de CO?</p>
      <p><b>Paso 1. Balancea.</b> Fe<sub>2</sub>O<sub>3</sub> + 3 CO → 2 Fe + 3 CO<sub>2</sub>.</p>
      <p><b>Paso 2. Mol del dato.</b> $\dfrac{320}{160} = 2$ mol de Fe<sub>2</sub>O<sub>3</sub>.</p>
      <p><b>Paso 3. Razón molar.</b> $2\cdot\dfrac{2}{1} = 4$ mol de Fe.</p>
      <p><b>Paso 4. A gramos.</b> $4\cdot 56 = 224$ g de Fe.</p>
      </div><div>
      <div class="box"><b>Comprobación con átomos</b> 320 g de Fe<sub>2</sub>O<sub>3</sub> tienen $320\cdot\dfrac{112}{160} = 224$ g de hierro. Todo ese hierro pasa al producto. ✔</div>
      <div class="box alert"><b>Error típico</b> Saltarse el balance y usar 1 : 1: daría 2 mol de Fe, o sea 112 g. Cada Fe<sub>2</sub>O<sub>3</sub> tiene <b>dos</b> átomos de hierro.</div>
      </div></div>` },
    { t: 'Lo clave del tema', b: r`
      <table><thead><tr><th>Situación</th><th>Qué hacer</th></tr></thead><tbody>
      <tr><td>Te dan masas medidas, no la ecuación</td><td>pasa todo a mol (el reactivo que falta, por Lavoisier) y divide por el menor</td></tr>
      <tr><td>Te dan la masa total de productos</td><td>arma las filas de mol y de masa de la ecuación balanceada y escala</td></tr>
      <tr><td>Te dan el producto obtenido</td><td>lo que reaccionó = producto × razón molar; lo que sobra = inicial − reaccionó</td></tr>
      <tr><td>Combustión de un compuesto orgánico</td><td>C desde el CO<sub>2</sub> (×12/44), H desde el H<sub>2</sub>O (×2/18), O por diferencia</td></tr>
      <tr><td>Ecuación sin coeficientes</td><td>balancea antes de cualquier cálculo</td></tr></tbody></table>
      <div class="cols"><div>
      <div class="box" style="margin-top:14px"><b>Recuerda</b><br>· La masa total se conserva; los mol no.<br>· 1 mol de glucosa + 6 mol de O<sub>2</sub> = 372 g de productos.<br>· «Se usaron» no es «se consumió».<br>· El O del compuesto no se calcula desde el CO<sub>2</sub>.</div>
      </div><div>
      <div class="box" style="margin-top:14px"><b>Método PAES</b> 1. Balancea. 2. Pasa todos los datos a mol. 3. Si hay dos reactivos, busca el limitante. 4. Calcula con la razón molar. 5. Comprueba con la conservación de la masa o de los átomos.</div>
      </div></div>` }
  ],
  example: {
    src: 'PAES Invierno 2026, adaptada',
    enun: r`<p>Un estudiante hace reaccionar un metal Y (masa molar = 24 g/mol) con un exceso de un gas Z (masa molar = 32 g/mol) para formar un único producto X (masa molar = 40 g/mol). En tres experiencias hace reaccionar completamente distintas masas de Y y registra la masa de X obtenida:</p><p>Según esta información, ¿cuál de las siguientes conclusiones es correcta sobre la estequiometría de la reacción?</p>`,
    fig: { type: 'table', head: ['Experiencia', 'Masa de Y (g)', 'Masa de X (g)'], rows: [['1', '12', '20'], ['2', '24', '40'], ['3', '48', '80']] },
    alts: ['Por cada 1 mol de Y se producen 2 mol de X.', 'Por cada 2 mol de Y se requiere 1 mol de Z.', 'Por cada 1 mol de Y se requieren 2 mol de Z.', 'Por cada 2 mol de Y se produce 1 mol de X.'],
    ok: 1,
    sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> La razón molar entre Y, Z y X. Hay que pasar las masas a mol, incluida la de Z, que no aparece en la tabla.</p><p><b>Paso 2. Experiencia 1 en mol.</b> Y: $\dfrac{12}{24} = 0{,}5$ mol. X: $\dfrac{20}{40} = 0{,}5$ mol.</p><p><b>Paso 3. Masa de Z (Lavoisier).</b> Todo Y reaccionó y se formó solo X: $20 - 12 = 8$ g de Z, o sea $\dfrac{8}{32} = 0{,}25$ mol.</p><p><b>Paso 4. Razón.</b> $0{,}5 : 0{,}25 : 0{,}5 = 2 : 1 : 2$. La ecuación es 2 Y + Z → 2 X (es 2 Mg + O<sub>2</sub> → 2 MgO).</p><p><b>Respuesta:</b> por cada 2 mol de Y se requiere 1 mol de Z.</p><p><b>Comprobación:</b> experiencia 3: 48 g de Y son 2 mol, que forman 2 mol de X = 80 g. ✔ Y se gastan $80 - 48 = 32$ g de Z = 1 mol. ✔</p><p><b>¿Por qué no las otras?</b> «1 mol de Y produce 2 mol de X» y «2 mol de Y producen 1 mol de X» contradicen la razón Y : X = 1 : 1. «1 mol de Y requiere 2 mol de Z» invierte la razón: es 1 mol de Z por cada 2 de Y.</p>`,
    conc: 'Pasa a mol todo, incluso el reactivo que no aparece (por diferencia de masas), y simplifica la razón.'
  },
  bank: [
    /* Tipo 1 · razón molar a partir de datos experimentales (Invierno 2026 P73) */
    { src: 'PAES Invierno 2026, adaptada',
      enun: r`<p>Un estudiante hace reaccionar completamente 11,2 g de un metal Y (masa molar = 56 g/mol) con un exceso de un gas Z (masa molar = 71 g/mol) y obtiene 32,5 g de un único producto X (masa molar = 162,5 g/mol). ¿Cuál de las siguientes conclusiones es correcta?</p>`,
      alts: ['Por cada 1 mol de Y se producen 2 mol de X.', 'Por cada 1 mol de Y se requiere 1 mol de Z.', 'Por cada 2 mol de Y se requieren 3 mol de Z.', 'Por cada 3 mol de Y se producen 2 mol de X.'], ok: 2,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> La razón molar entre Y, Z y X.</p><p><b>Paso 2. Mol de Y y X.</b> Y: $\dfrac{11{,}2}{56} = 0{,}2$ mol. X: $\dfrac{32{,}5}{162{,}5} = 0{,}2$ mol.</p><p><b>Paso 3. Z por diferencia.</b> $32{,}5 - 11{,}2 = 21{,}3$ g, o sea $\dfrac{21{,}3}{71} = 0{,}3$ mol.</p><p><b>Paso 4. Razón.</b> $0{,}2 : 0{,}3 : 0{,}2 = 2 : 3 : 2$: 2 Y + 3 Z → 2 X.</p><p><b>Respuesta:</b> por cada 2 mol de Y se requieren 3 mol de Z.</p><p><b>Comprobación:</b> es 2 Fe + 3 Cl<sub>2</sub> → 2 FeCl<sub>3</sub>: $2\cdot 56 + 3\cdot 71 = 325 = 2\cdot 162{,}5$. ✔</p><p><b>¿Por qué no las otras?</b> Y y X están en razón 1 : 1, no 1 : 2 ni 3 : 2. «1 mol de Y con 1 mol de Z» olvida calcular el Z en mol: hay 0,3 mol de Z por 0,2 de Y.</p>`,
      conc: 'El reactivo en exceso que no se mide se obtiene restando: producto − reactivo medido.' },
    { src: 'PAES Invierno 2026, adaptada',
      enun: r`<p>En un laboratorio se hacen reaccionar completamente 2,8 g de un gas Y (masa molar = 28 g/mol) con un exceso de un gas Z (masa molar = 2 g/mol), y se obtienen 3,4 g de un único producto X (masa molar = 17 g/mol). ¿Cuál de las siguientes ecuaciones es coherente con estos resultados?</p>`,
      alts: ['Y + Z → X', 'Y + 3 Z → 2 X', 'Y + 3 Z → X', '2 Y + 3 Z → 2 X'], ok: 1,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Los coeficientes que calzan con los mol medidos.</p><p><b>Paso 2. Mol.</b> Y: $\dfrac{2{,}8}{28} = 0{,}1$. X: $\dfrac{3{,}4}{17} = 0{,}2$. Z: $\dfrac{3{,}4 - 2{,}8}{2} = \dfrac{0{,}6}{2} = 0{,}3$.</p><p><b>Paso 3. Razón.</b> $0{,}1 : 0{,}3 : 0{,}2 = 1 : 3 : 2$.</p><p><b>Respuesta:</b> Y + 3 Z → 2 X (es N<sub>2</sub> + 3 H<sub>2</sub> → 2 NH<sub>3</sub>).</p><p><b>Comprobación:</b> masas: $28 + 3\cdot 2 = 34 = 2\cdot 17$. ✔</p><p><b>¿Por qué no las otras?</b> «Y + Z → X» y «Y + 3 Z → X» no conservan la masa: $28 + 2 = 30 \neq 17$ y $28 + 6 = 34 \neq 17$. «2 Y + 3 Z → 2 X» tampoco: $56 + 6 = 62 \neq 34$.</p>`,
      conc: 'Comprueba la ecuación con las masas molares: reactivos y productos deben sumar lo mismo.' },
    { src: 'PAES Invierno 2026, adaptada',
      enun: r`<p>Un estudiante hace reaccionar completamente distintas masas de Y con un exceso de Z para formar un único producto X. Registra sus resultados en la tabla, pero olvida anotar un dato:</p><p>¿Qué masa de Z reaccionó en la experiencia 2?</p>`,
      fig: { type: 'table', head: ['Experiencia', 'Masa de Y (g)', 'Masa de X (g)'], rows: [['1', '5,4', '10,2'], ['2', '21,6', '—']] },
      alts: ['4,8 g', '19,2 g', '40,8 g', '62,4 g'], ok: 1,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> La masa de Z en la experiencia 2. Primero falta la masa de X.</p><p><b>Paso 2. Proporción definida.</b> 21,6 g es 4 veces 5,4 g: el producto también se cuadruplica, $4\cdot 10{,}2 = 40{,}8$ g de X.</p><p><b>Paso 3. Lavoisier.</b> Z que reaccionó: $40{,}8 - 21{,}6 = 19{,}2$ g.</p><p><b>Respuesta:</b> 19,2 g.</p><p><b>Comprobación:</b> en la experiencia 1 reaccionan $10{,}2 - 5{,}4 = 4{,}8$ g de Z, y $4\cdot 4{,}8 = 19{,}2$ g. ✔</p><p><b>¿Por qué no las otras?</b> 4,8 g es el Z de la experiencia 1. 40,8 g es la masa de X. 62,4 g suma Y y X en vez de restarlos.</p>`,
      conc: 'Si un reactivo se multiplica por k, el otro reactivo y el producto también.' },
    /* Tipo 2 · masa total y conservación con la ecuación completa (Regular 2026 P73) */
    { src: 'PAES Regular 2026, adaptada',
      enun: r`<p>En una clase se estudian las relaciones de masa en la combustión del propano, según la ecuación no balanceada:</p><p style="text-align:center">C<sub>3</sub>H<sub>8</sub> + O<sub>2</sub> → CO<sub>2</sub> + H<sub>2</sub>O</p><p>Si se desea obtener un total de 204 g de productos, ¿cuál de las siguientes afirmaciones es correcta?</p><p>Masas molares (g/mol): C<sub>3</sub>H<sub>8</sub> = 44; O<sub>2</sub> = 32; CO<sub>2</sub> = 44; H<sub>2</sub>O = 18.</p>`,
      alts: ['Debería reaccionar completamente 1 mol de C<sub>3</sub>H<sub>8</sub> con 5 mol de O<sub>2</sub>.', 'Debería reaccionar completamente 1 mol de C<sub>3</sub>H<sub>8</sub> con 1 mol de O<sub>2</sub>.', 'Se deberían formar 3 mol de CO<sub>2</sub> y 3 mol de H<sub>2</sub>O.', 'Se deberían formar 1 mol de CO<sub>2</sub> y 1 mol de H<sub>2</sub>O.'], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Las cantidades que dan 204 g de productos. Primero, balancear.</p><p><b>Paso 2. Balancea.</b> C<sub>3</sub>H<sub>8</sub> + 5 O<sub>2</sub> → 3 CO<sub>2</sub> + 4 H<sub>2</sub>O.</p><p><b>Paso 3. Masa de productos por mol de propano.</b> $3\cdot 44 + 4\cdot 18 = 132 + 72 = 204$ g. Justo lo pedido: 1 mol de propano.</p><p><b>Respuesta:</b> debería reaccionar completamente 1 mol de C<sub>3</sub>H<sub>8</sub> con 5 mol de O<sub>2</sub>.</p><p><b>Comprobación:</b> reactivos $44 + 5\cdot 32 = 204$ g = productos. ✔</p><p><b>¿Por qué no las otras?</b> «1 mol con 1 mol de O<sub>2</sub>» usa la ecuación sin balancear. «3 mol de CO<sub>2</sub> y 3 de H<sub>2</sub>O» da $132 + 54 = 186$ g y no cuadra el H (8 átomos piden 4 H<sub>2</sub>O). «1 mol y 1 mol» da solo 62 g.</p>`,
      conc: 'Balancea primero; después la fila de masas te dice cuánto producto sale por mol.' },
    { src: 'PAES Regular 2026, adaptada',
      enun: r`<p>La glucosa se quema según C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6 O<sub>2</sub> → 6 CO<sub>2</sub> + 6 H<sub>2</sub>O. ¿Qué masa total de productos se obtiene al quemar completamente 90 g de glucosa con suficiente oxígeno?</p><p>Masas molares (g/mol): C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> = 180; O<sub>2</sub> = 32; CO<sub>2</sub> = 44; H<sub>2</sub>O = 18.</p>`,
      alts: ['90 g', '132 g', '186 g', '372 g'], ok: 2,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> La masa total de CO<sub>2</sub> y H<sub>2</sub>O.</p><p><b>Paso 2. Mol de glucosa.</b> $\dfrac{90}{180} = 0{,}5$ mol.</p><p><b>Paso 3. Oxígeno que reacciona.</b> $0{,}5\cdot 6 = 3$ mol = $3\cdot 32 = 96$ g.</p><p><b>Paso 4. Lavoisier.</b> Productos = reactivos que reaccionaron: $90 + 96 = 186$ g.</p><p><b>Respuesta:</b> 186 g.</p><p><b>Comprobación:</b> 3 mol de CO<sub>2</sub> (132 g) + 3 mol de H<sub>2</sub>O (54 g) = 186 g. ✔</p><p><b>¿Por qué no las otras?</b> 90 g olvida que el oxígeno también pasa a los productos. 132 g es solo el CO<sub>2</sub>. 372 g corresponde a 1 mol de glucosa, no a medio.</p>`,
      conc: 'Masa de productos = masa de TODOS los reactivos que reaccionaron, incluido el O₂.' },
    { src: 'PAES Regular 2026, adaptada',
      enun: r`<p>En un recipiente cerrado reaccionan completamente 1 mol de N<sub>2</sub> y 3 mol de H<sub>2</sub> según N<sub>2</sub> (g) + 3 H<sub>2</sub> (g) → 2 NH<sub>3</sub> (g). Al respecto, ¿cuál(es) de las siguientes afirmaciones es (son) correcta(s)?</p><p>I) La masa total de los reactivos es igual a la masa total de los productos.<br>II) El número total de mol se conserva durante la reacción.<br>III) El número total de átomos se conserva durante la reacción.</p>`,
      alts: ['Solo I', 'Solo II', 'Solo I y III', 'I, II y III'], ok: 2,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Qué se conserva en la reacción.</p><p><b>Paso 2. I.</b> Reactivos: $28 + 3\cdot 2 = 34$ g. Productos: $2\cdot 17 = 34$ g. <b>Correcta.</b></p><p><b>Paso 3. II.</b> Entran $1 + 3 = 4$ mol y salen 2 mol. <b>Incorrecta.</b></p><p><b>Paso 4. III.</b> Antes: 2 N y 6 H. Después: $2\cdot 1 = 2$ N y $2\cdot 3 = 6$ H. <b>Correcta.</b></p><p><b>Respuesta:</b> solo I y III.</p><p><b>¿Por qué no las otras?</b> «Solo I» deja fuera III. «Solo II» y «I, II y III» aceptan II: los mol de moléculas cambian porque los átomos se reagrupan en menos moléculas.</p>`,
      conc: 'Se conservan la masa y los átomos; el número de moléculas (mol) puede cambiar.' },
    /* Tipo 3 · limitante cuando el dato es el producto o la masa final (Invierno 2026 P74, Regular 2026 P74 y P75) */
    { src: 'PAES Invierno 2026, adaptada',
      enun: r`<p>En una práctica se realiza la reacción 2 Al (s) + 6 HCl (ac) → 2 AlCl<sub>3</sub> (ac) + 3 H<sub>2</sub> (g), usando 0,2 mol de Al y 0,3 mol de HCl. Se determina que se obtienen 0,15 mol de H<sub>2</sub>.</p><p>Considerando que la reacción se llevó a cabo completamente, ¿qué cantidad de Al se consumió?</p>`,
      alts: ['0,05 mol', '0,10 mol', '0,15 mol', '0,20 mol'], ok: 1,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El aluminio que reaccionó, no el que se puso.</p><p><b>Paso 2. Limitante.</b> Al: $\dfrac{0{,}2}{2} = 0{,}1$. HCl: $\dfrac{0{,}3}{6} = 0{,}05$. Limita el HCl.</p><p><b>Paso 3. Confirma con el H<sub>2</sub>.</b> $0{,}3\cdot\dfrac{3}{6} = 0{,}15$ mol. ✔</p><p><b>Paso 4. Al consumido.</b> $0{,}3\cdot\dfrac{2}{6} = 0{,}10$ mol.</p><p><b>Respuesta:</b> 0,10 mol.</p><p><b>Comprobación:</b> desde el H<sub>2</sub>: $0{,}15\cdot\dfrac{2}{3} = 0{,}10$ mol. ✔ Sobran 0,10 mol de Al.</p><p><b>¿Por qué no las otras?</b> 0,05 mol es el cociente del HCl, solo sirve para comparar. 0,15 mol copia los mol de H<sub>2</sub> (razón 1 : 1). 0,20 mol es todo el Al que se puso: sobra la mitad.</p>`,
      conc: 'Lo consumido se calcula con el limitante o con el producto formado, nunca con lo que se puso.' },
    { src: 'PAES Regular 2026, adaptada',
      enun: r`<p>Una profesora hace reaccionar 13 g de Zn (masa molar = 65 g/mol) con 21,9 g de HCl (masa molar = 36,5 g/mol) según la ecuación Zn (s) + 2 HCl (ac) → ZnCl<sub>2</sub> (ac) + H<sub>2</sub> (g). ¿Qué masa de H<sub>2</sub> (masa molar = 2 g/mol) se forma como máximo?</p>`,
      alts: ['0,2 g', '0,4 g', '0,6 g', '1,2 g'], ok: 1,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El máximo de H<sub>2</sub>: hay que buscar el limitante.</p><p><b>Paso 2. Mol.</b> Zn: $\dfrac{13}{65} = 0{,}2$. HCl: $\dfrac{21{,}9}{36{,}5} = 0{,}6$.</p><p><b>Paso 3. Limitante.</b> Zn: $\dfrac{0{,}2}{1} = 0{,}2$. HCl: $\dfrac{0{,}6}{2} = 0{,}3$. Limita el Zn.</p><p><b>Paso 4. Producto.</b> 1 mol de Zn forma 1 mol de H<sub>2</sub>: 0,2 mol, o sea $0{,}2\cdot 2 = 0{,}4$ g.</p><p><b>Respuesta:</b> 0,4 g.</p><p><b>Comprobación:</b> reaccionan 0,4 mol de HCl de los 0,6: sobran 0,2 mol. El limitante termina en 0. ✔</p><p><b>¿Por qué no las otras?</b> 0,2 g son los mol de H<sub>2</sub> tomados como gramos. 0,6 g se calcula con el HCl, que está en exceso (0,3 mol de H<sub>2</sub>). 1,2 g usa los 0,6 mol de HCl con razón 1 : 1.</p>`,
      conc: 'Calcula el producto con el limitante y vuelve a gramos al final.' },
    { src: 'PAES Regular 2026, adaptada',
      enun: r`<p>Un grupo de estudiantes hace reaccionar 8 g de H<sub>2</sub> con 96 g de O<sub>2</sub> en un recipiente cerrado, según 2 H<sub>2</sub> (g) + O<sub>2</sub> (g) → 2 H<sub>2</sub>O (g). Una vez finalizada la reacción, ¿qué contiene el recipiente?</p><p>Masas molares (g/mol): H<sub>2</sub> = 2; O<sub>2</sub> = 32; H<sub>2</sub>O = 18.</p>`,
      alts: ['104 g de H<sub>2</sub>O', '108 g de H<sub>2</sub>O', '72 g de H<sub>2</sub>O y nada más', '72 g de H<sub>2</sub>O y 32 g de O<sub>2</sub>'], ok: 3,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Todo lo que hay al final: producto y sobrante.</p><p><b>Paso 2. Mol.</b> H<sub>2</sub>: $\dfrac{8}{2} = 4$. O<sub>2</sub>: $\dfrac{96}{32} = 3$.</p><p><b>Paso 3. Limitante.</b> H<sub>2</sub>: $\dfrac{4}{2} = 2$. O<sub>2</sub>: $\dfrac{3}{1} = 3$. Limita el H<sub>2</sub>.</p><p><b>Paso 4. Final.</b> Se forman 4 mol de H<sub>2</sub>O = 72 g. Reaccionan 2 mol de O<sub>2</sub>; sobra 1 mol = 32 g.</p><p><b>Respuesta:</b> 72 g de H<sub>2</sub>O y 32 g de O<sub>2</sub>.</p><p><b>Comprobación:</b> inicial $8 + 96 = 104$ g; final $72 + 32 = 104$ g. ✔</p><p><b>¿Por qué no las otras?</b> 104 g de agua supone que todo reaccionó. 108 g sale de calcular con el O<sub>2</sub> (6 mol de agua), que está en exceso. «72 g y nada más» olvida el oxígeno sobrante: la masa no se conservaría.</p>`,
      conc: 'Al final: producto + exceso; la suma debe dar la masa inicial.' },
    /* Tipo 4 · combustión y fórmula empírica (Invierno 2026 P75, Invierno 2027 P73) */
    { src: 'PAES Invierno 2026, adaptada',
      enun: r`<p>Se queman completamente 1,8 g de un compuesto formado por C, H y O, y se obtienen 2,64 g de CO<sub>2</sub> y 1,08 g de H<sub>2</sub>O. ¿Cuál es la fórmula empírica del compuesto?</p><p>Masas atómicas (g/mol): H = 1; C = 12; O = 16.</p>`,
      alts: ['CHO', 'CH<sub>2</sub>O', 'CH<sub>4</sub>O', 'C<sub>2</sub>H<sub>2</sub>O'], ok: 1,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> La razón entre los mol de C, H y O de la muestra.</p><p><b>Paso 2. Carbono.</b> $2{,}64\cdot\dfrac{12}{44} = 0{,}72$ g → $\dfrac{0{,}72}{12} = 0{,}06$ mol.</p><p><b>Paso 3. Hidrógeno.</b> $1{,}08\cdot\dfrac{2}{18} = 0{,}12$ g → 0,12 mol.</p><p><b>Paso 4. Oxígeno por diferencia.</b> $1{,}8 - 0{,}72 - 0{,}12 = 0{,}96$ g → $\dfrac{0{,}96}{16} = 0{,}06$ mol.</p><p><b>Paso 5. Razón.</b> $0{,}06 : 0{,}12 : 0{,}06 = 1 : 2 : 1$.</p><p><b>Respuesta:</b> CH<sub>2</sub>O.</p><p><b>Comprobación:</b> en CH<sub>2</sub>O el C es $\dfrac{12}{30} = 40\,\%$, y $\dfrac{0{,}72}{1{,}8} = 40\,\%$. ✔</p><p><b>¿Por qué no las otras?</b> CHO olvida que cada H<sub>2</sub>O trae 2 H. CH<sub>4</sub>O duplica de nuevo el H. C<sub>2</sub>H<sub>2</sub>O cambia la razón C : H.</p>`,
      conc: 'C desde el CO₂, H desde el H₂O (2 H por molécula) y O por diferencia.' },
    { src: 'PAES Invierno 2027, adaptada',
      enun: r`<p>Al quemar completamente una muestra de un hidrocarburo se obtienen 4,4 g de CO<sub>2</sub> y 1,8 g de H<sub>2</sub>O. Si la masa molar del hidrocarburo es 56 g/mol, ¿cuál es su fórmula molecular?</p><p>Masas atómicas (g/mol): H = 1; C = 12; O = 16.</p>`,
      alts: ['CH<sub>2</sub>', 'C<sub>2</sub>H<sub>4</sub>', 'C<sub>4</sub>H<sub>8</sub>', 'C<sub>4</sub>H<sub>10</sub>'], ok: 2,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> La fórmula molecular: primero la empírica, después la masa molar.</p><p><b>Paso 2. C e H.</b> C: $4{,}4\cdot\dfrac{12}{44} = 1{,}2$ g = 0,1 mol. H: $1{,}8\cdot\dfrac{2}{18} = 0{,}2$ g = 0,2 mol.</p><p><b>Paso 3. Empírica.</b> $0{,}1 : 0{,}2 = 1 : 2$: CH<sub>2</sub>, de masa 14 g/mol.</p><p><b>Paso 4. Molecular.</b> $\dfrac{56}{14} = 4$: (CH<sub>2</sub>)<sub>4</sub> = C<sub>4</sub>H<sub>8</sub>.</p><p><b>Respuesta:</b> C<sub>4</sub>H<sub>8</sub>.</p><p><b>Comprobación:</b> $4\cdot 12 + 8 = 56$ g/mol. ✔</p><p><b>¿Por qué no las otras?</b> CH<sub>2</sub> es la fórmula empírica, no la molecular. C<sub>2</sub>H<sub>4</sub> pesa 28 g/mol. C<sub>4</sub>H<sub>10</sub> pesa 58 g/mol y su razón C : H no es 1 : 2.</p>`,
      conc: 'Fórmula molecular = fórmula empírica × (masa molar / masa de la empírica).' },
    { src: 'PAES Invierno 2027, adaptada',
      enun: r`<p>Al quemar completamente 3,0 g de un compuesto orgánico se obtienen 8,8 g de CO<sub>2</sub>. ¿Cuál es el porcentaje en masa de carbono del compuesto?</p><p>Masas atómicas (g/mol): C = 12; O = 16.</p>`,
      alts: ['20 %', '27 %', '73 %', '80 %'], ok: 3,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> La masa de C de la muestra dividida por la masa de la muestra.</p><p><b>Paso 2. C en el CO<sub>2</sub>.</b> $8{,}8\cdot\dfrac{12}{44} = 2{,}4$ g. Todo ese carbono venía de la muestra.</p><p><b>Paso 3. Porcentaje.</b> $\dfrac{2{,}4}{3{,}0}\cdot 100 = 80\,\%$.</p><p><b>Respuesta:</b> 80 %.</p><p><b>Comprobación:</b> el etano, C<sub>2</sub>H<sub>6</sub>, tiene $\dfrac{24}{30} = 80\,\%$ de C. ✔</p><p><b>¿Por qué no las otras?</b> 20 % es lo que queda para los otros elementos. 27 % divide el carbono por la masa de CO<sub>2</sub> ($\dfrac{2{,}4}{8{,}8}$): es el % de C en el CO<sub>2</sub>. 73 % es el % de O en el CO<sub>2</sub>.</p>`,
      conc: 'El porcentaje se calcula sobre la masa de la muestra, no sobre la del CO₂.' },
    /* Tipo 5 · balancear y calcular en un solo problema (Regular 2026 P73, Invierno 2027 P72) */
    { src: 'PAES Invierno 2027, adaptada',
      enun: r`<p>En un alto horno ocurre la reacción no balanceada Fe<sub>2</sub>O<sub>3</sub> (s) + CO (g) → Fe (s) + CO<sub>2</sub> (g). ¿Qué masa de hierro se obtiene a partir de 320 g de Fe<sub>2</sub>O<sub>3</sub> con exceso de CO?</p><p>Masas molares (g/mol): Fe = 56; Fe<sub>2</sub>O<sub>3</sub> = 160.</p>`,
      alts: ['112 g', '160 g', '224 g', '320 g'], ok: 2,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> La masa de Fe. La ecuación no está balanceada.</p><p><b>Paso 2. Balancea.</b> Fe<sub>2</sub>O<sub>3</sub> + 3 CO → 2 Fe + 3 CO<sub>2</sub>.</p><p><b>Paso 3. Calcula.</b> $\dfrac{320}{160} = 2$ mol de Fe<sub>2</sub>O<sub>3</sub> → $2\cdot 2 = 4$ mol de Fe → $4\cdot 56 = 224$ g.</p><p><b>Respuesta:</b> 224 g.</p><p><b>Comprobación:</b> el Fe<sub>2</sub>O<sub>3</sub> tiene $\dfrac{112}{160} = 70\,\%$ de hierro: $0{,}7\cdot 320 = 224$ g. ✔</p><p><b>¿Por qué no las otras?</b> 112 g usa razón 1 : 1 sin balancear. 160 g es la masa de 1 mol de Fe<sub>2</sub>O<sub>3</sub>. 320 g supone que toda la masa del óxido pasa al hierro, olvidando el oxígeno que se va como CO<sub>2</sub>.</p>`,
      conc: 'Balancea antes de calcular: cada Fe₂O₃ entrega dos Fe.' },
    { src: 'PAES Invierno 2027, adaptada',
      enun: r`<p>El aluminio se oxida según la ecuación no balanceada Al (s) + O<sub>2</sub> (g) → Al<sub>2</sub>O<sub>3</sub> (s). ¿Qué masa de O<sub>2</sub> se necesita para que reaccionen completamente 10,8 g de Al?</p><p>Masas molares (g/mol): Al = 27; O<sub>2</sub> = 32; Al<sub>2</sub>O<sub>3</sub> = 102.</p>`,
      alts: ['9,6 g', '12,8 g', '19,2 g', '20,4 g'], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> La masa de O<sub>2</sub>. Primero, balancear.</p><p><b>Paso 2. Balancea.</b> 4 Al + 3 O<sub>2</sub> → 2 Al<sub>2</sub>O<sub>3</sub>.</p><p><b>Paso 3. Calcula.</b> $\dfrac{10{,}8}{27} = 0{,}4$ mol de Al → $0{,}4\cdot\dfrac{3}{4} = 0{,}3$ mol de O<sub>2</sub> → $0{,}3\cdot 32 = 9{,}6$ g.</p><p><b>Respuesta:</b> 9,6 g.</p><p><b>Comprobación:</b> se forman 0,2 mol de Al<sub>2</sub>O<sub>3</sub> = 20,4 g, y $10{,}8 + 9{,}6 = 20{,}4$ g. ✔</p><p><b>¿Por qué no las otras?</b> 12,8 g usa razón 1 : 1. 19,2 g cuenta 0,6 mol de O<sub>2</sub>, confundiendo los 0,6 mol de átomos de O con moléculas O<sub>2</sub>. 20,4 g es la masa del óxido formado.</p>`,
      conc: 'O₂ es diatómico: 0,6 mol de átomos de O son 0,3 mol de O₂.' },
    { src: 'PAES Regular 2026, adaptada',
      enun: r`<p>El propano arde según la ecuación no balanceada C<sub>3</sub>H<sub>8</sub> (g) + O<sub>2</sub> (g) → CO<sub>2</sub> (g) + H<sub>2</sub>O (g). ¿Qué cantidad de O<sub>2</sub> se requiere para producir 6 mol de H<sub>2</sub>O?</p>`,
      alts: ['4,8 mol', '5,0 mol', '6,0 mol', '7,5 mol'], ok: 3,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Mol de O<sub>2</sub> a partir de mol de H<sub>2</sub>O.</p><p><b>Paso 2. Balancea.</b> C<sub>3</sub>H<sub>8</sub> + 5 O<sub>2</sub> → 3 CO<sub>2</sub> + 4 H<sub>2</sub>O.</p><p><b>Paso 3. Razón molar.</b> 5 mol de O<sub>2</sub> por cada 4 mol de H<sub>2</sub>O: $6\cdot\dfrac{5}{4} = 7{,}5$ mol.</p><p><b>Respuesta:</b> 7,5 mol.</p><p><b>Comprobación:</b> 6 mol de agua son 1,5 veces la receta; el O<sub>2</sub> también: $1{,}5\cdot 5 = 7{,}5$. ✔</p><p><b>¿Por qué no las otras?</b> 4,8 mol da vuelta la fracción ($6\cdot\dfrac{4}{5}$). 5,0 mol copia el coeficiente. 6,0 mol usa la ecuación sin balancear (1 : 1).</p>`,
      conc: 'Sin coeficientes no hay razón molar: balancea siempre primero.' }
  ]
},

/* =====================================================================
   TEMA 4 · SOLUCIONES EN VARIOS PASOS
   ===================================================================== */
{
  id: 'qui_e_soluciones', unit: 'Unidad 5 · Profundización electivo',
  icon: '🧫', title: 'Soluciones en varios pasos: conversiones, diluciones y reacciones',
  desc: 'Para el Módulo Electivo: pasar entre % m/m, % m/v, mol/L y mol/kg usando la densidad, encadenar una conversión con una dilución, mezclar soluciones de distinta concentración y usar n = C · V para hacer estequiometría con reactivos en solución.',
  slides: [
    { t: 'El mapa de las unidades', b: r`
      <div class="cols"><div>
      <p>Todas las unidades de concentración dicen lo mismo, «cuánto soluto hay en cuánta solución», pero cuentan distinto. Para pasar de una a otra, <b>imagina una cantidad cómoda de solución</b> y calcula todo en ella.</p>
      <table><thead><tr><th>Si te dan…</th><th>Imagina…</th><th>Y calcula</th></tr></thead><tbody>
      <tr><td>% m/v o mol/L</td><td>1 L de solución</td><td>gramos o mol de soluto en ese litro</td></tr>
      <tr><td>% m/m</td><td>100 g de solución (o 1 L, con la densidad)</td><td>gramos de soluto y de solvente</td></tr>
      <tr><td>mol/kg</td><td>1 kg de solvente</td><td>mol de soluto</td></tr></tbody></table>
      </div><div>
      <div class="box"><b>Los tres puentes</b><br>· gramos ↔ mol: masa molar, $n = \dfrac{m}{M}$.<br>· volumen ↔ masa de solución: densidad, $m = d\cdot V$.<br>· solución ↔ solvente: masa de solvente = masa de solución − masa de soluto.</div>
      <div class="box"><b>Atajo conocido</b> $C\ (\text{mol/L}) = \dfrac{\%\,\text{m/v}\cdot 10}{M}$. NaOH al 4 % m/v: $\dfrac{40}{40} = 1$ mol/L.</div>
      <div class="box alert"><b>Error típico</b> Tratar un % m/m como si fuera % m/v. Solo coinciden si la densidad de la solución es 1 g/mL.</div>
      </div></div>` },
    { t: 'De % m/m con densidad a mol/L y mol/kg', b: r`
      <div class="cols"><div>
      <p><b>Ejemplo.</b> Solución de NaOH al 20 % m/m, de densidad 1,2 g/mL ($M$ = 40 g/mol).</p>
      <p><b>Paso 1. Toma 1 L de solución.</b> Masa: $1{,}2\cdot 1.000 = 1.200$ g.</p>
      <p><b>Paso 2. Soluto.</b> 20 % de 1.200 g = 240 g de NaOH = $\dfrac{240}{40} = 6$ mol.</p>
      <p><b>Paso 3. Molaridad.</b> 6 mol en 1 L: <b>6 mol/L</b>.</p>
      <p><b>Paso 4. Molalidad.</b> Solvente: $1.200 - 240 = 960$ g = 0,96 kg. $\dfrac{6}{0{,}96} = $ <b>6,25 mol/kg</b>.</p>
      </div><div>
      <div class="box"><b>Ejemplo resuelto</b> HCl comercial al 37 % m/m, d = 1,19 g/mL ($M$ = 36,5 g/mol).<br>1 L pesa 1.190 g; HCl: $0{,}37\cdot 1.190 \approx 440$ g; $\dfrac{440}{36{,}5} \approx 12$ mol/L.</div>
      <div class="box alert"><b>Error típico</b> En la molalidad, dividir por la masa de toda la solución. El denominador es <b>solo el solvente</b>: hay que restarle el soluto.</div>
      </div></div>` },
    { t: 'Diluciones en cadena', b: r`
      <div class="cols"><div>
      <p>Al diluir, los mol de soluto no cambian: $C_1\cdot V_1 = C_2\cdot V_2$. Si la concentración viene en otra unidad, <b>conviértela primero</b>.</p>
      <p><b>Ejemplo (PAES Invierno 2026).</b> ¿Qué volumen de agua hay que agregar a 50 mL de NaOH al 4 % m/v para dejarlo en 0,5 mol/L?</p>
      <p><b>Paso 1. Convierte.</b> 4 % m/v = 40 g/L = 1 mol/L.</p>
      <p><b>Paso 2. Volumen final.</b> $V_2 = \dfrac{1\cdot 50}{0{,}5} = 100$ mL.</p>
      <p><b>Paso 3. Agua.</b> $100 - 50 = 50$ mL.</p>
      </div><div>
      <div class="box"><b>Varias diluciones seguidas</b> Multiplica los factores. 500 mL de NaCl 1,5 mol/L + 1 L de agua: factor $\dfrac{500}{1.500} = \dfrac{1}{3}$ → 0,5 mol/L. Luego 10 mL llevados a 50 mL: factor $\dfrac{1}{5}$ → 0,1 mol/L. Total: $1{,}5\cdot\dfrac{1}{3}\cdot\dfrac{1}{5} = 0{,}1$ mol/L.</div>
      <div class="box alert"><b>Error típico</b> Entregar el volumen final cuando preguntan por el agua agregada, o al revés. Lee bien: «llevar a 100 mL» es el final; «agregar 100 mL» es el agua.</div>
      </div></div>` },
    { t: 'Mezclar soluciones de distinta concentración', b: r`
      <div class="cols"><div>
      <p>Al mezclar dos soluciones del mismo soluto, <b>se suman los mol</b> y <b>se suman los volúmenes</b> (si son aditivos):</p>
      $$C_f = \dfrac{C_1 V_1 + C_2 V_2}{V_1 + V_2}$$
      <p><b>Ejemplo.</b> 200 mL de KCl 0,5 mol/L + 300 mL de KCl 1,0 mol/L.</p>
      <p>Mol: $0{,}5\cdot 0{,}2 + 1{,}0\cdot 0{,}3 = 0{,}1 + 0{,}3 = 0{,}4$ mol. Volumen: 0,5 L. $C_f = \dfrac{0{,}4}{0{,}5} = 0{,}8$ mol/L.</p>
      </div><div>
      <div class="box"><b>Cómo revisar</b> La concentración final queda <b>entre</b> las dos iniciales, más cerca de la que aporta más volumen. Si agregas agua a la mezcla, cuenta el agua como una solución de concentración 0.</div>
      <div class="box alert"><b>Error típico</b> Promediar las concentraciones sin mirar los volúmenes: $\dfrac{0{,}5 + 1{,}0}{2} = 0{,}75$ mol/L. Solo sirve si los volúmenes son iguales.</div>
      <div class="box alert"><b>Igual concentración</b> Si las dos soluciones tienen la misma concentración, la mezcla también la tiene, aunque tenga más mol y más masa de soluto.</div>
      </div></div>` },
    { t: 'Estequiometría con soluciones: n = C · V', b: r`
      <div class="cols"><div>
      <p>Cuando un reactivo está disuelto, sus mol salen de $n = C\cdot V$ (con V en litros). Después, todo sigue como en cualquier cálculo estequiométrico.</p>
      <p><b>Ejemplo: neutralización.</b> 2 NaOH + H<sub>2</sub>SO<sub>4</sub> → Na<sub>2</sub>SO<sub>4</sub> + 2 H<sub>2</sub>O. ¿Qué volumen de NaOH 0,2 mol/L neutraliza 50 mL de H<sub>2</sub>SO<sub>4</sub> 0,1 mol/L?</p>
      <p><b>Paso 1.</b> $n(\text{H}_2\text{SO}_4) = 0{,}1\cdot 0{,}05 = 0{,}005$ mol.</p>
      <p><b>Paso 2.</b> Razón 2 : 1: $n(\text{NaOH}) = 0{,}01$ mol.</p>
      <p><b>Paso 3.</b> $V = \dfrac{0{,}01}{0{,}2} = 0{,}05$ L = 50 mL.</p>
      </div><div>
      <div class="box"><b>Ejemplo: precipitado</b> AgNO<sub>3</sub> + NaCl → AgCl (s) + NaNO<sub>3</sub>. Con 100 mL de NaCl 0,2 mol/L y exceso de AgNO<sub>3</sub>: $0{,}2\cdot 0{,}1 = 0{,}02$ mol de AgCl, o sea $0{,}02\cdot 143{,}5 = 2{,}87$ g.</div>
      <div class="box alert"><b>Error típico</b> Usar $C_1 V_1 = C_2 V_2$ entre dos sustancias distintas que reaccionan. Esa fórmula es para diluir el <b>mismo</b> soluto; en una reacción manda la razón molar.</div>
      </div></div>` },
    { t: 'Lo clave del tema', b: r`
      <table><thead><tr><th>Situación</th><th>Herramienta</th></tr></thead><tbody>
      <tr><td>% m/m → mol/L</td><td>1 L de solución: masa = $d\cdot V$; soluto = % de esa masa; ÷ M</td></tr>
      <tr><td>% m/m → mol/kg</td><td>100 g de solución: soluto en mol ÷ solvente en kg</td></tr>
      <tr><td>Diluir</td><td>convierte a mol/L y usa $C_1 V_1 = C_2 V_2$; agua = $V_2 - V_1$</td></tr>
      <tr><td>Mezclar</td><td>suma mol y suma volúmenes</td></tr>
      <tr><td>Reacción en solución</td><td>$n = C\cdot V$ → razón molar → lo que piden</td></tr></tbody></table>
      <div class="cols"><div>
      <div class="box" style="margin-top:14px"><b>Recuerda</b><br>· Molal divide por kg de <b>solvente</b>.<br>· Varias diluciones: multiplica los factores.<br>· Mezcla de igual concentración: la concentración no cambia.<br>· $C_1 V_1 = C_2 V_2$ no sirve entre reactivos distintos.</div>
      </div><div>
      <div class="box" style="margin-top:14px"><b>Método PAES</b> 1. Lleva todo a mol/L (o a mol). 2. Identifica si es dilución, mezcla o reacción. 3. Aplica la herramienta. 4. Revisa si piden volumen final o agua agregada, concentración o masa.</div>
      </div></div>` }
  ],
  example: {
    src: 'PAES Invierno 2026, adaptada',
    enun: r`<p>Algunos productos de limpieza contienen KOH (masa molar = 56 g/mol), cuya concentración no debe superar los 0,4 mol/L. Considerando volúmenes aditivos, ¿qué volumen de agua se debe agregar a 100 mL de una solución de KOH al 5,6 % m/v para obtener una solución con la concentración máxima permitida?</p>`,
    alts: ['40 mL', '150 mL', '250 mL', '1.300 mL'],
    ok: 1,
    sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El agua que hay que agregar. La concentración inicial viene en % m/v y la final en mol/L: hay que convertir primero.</p><p><b>Paso 2. Convierte.</b> 5,6 % m/v = 5,6 g en 100 mL = 56 g en 1 L. $\dfrac{56}{56} = 1$ mol/L.</p><p><b>Paso 3. Volumen final.</b> $V_2 = \dfrac{C_1 V_1}{C_2} = \dfrac{1\cdot 100}{0{,}4} = 250$ mL.</p><p><b>Paso 4. Agua.</b> $250 - 100 = 150$ mL.</p><p><b>Respuesta:</b> 150 mL.</p><p><b>Comprobación:</b> mol de KOH: $1\cdot 0{,}1 = 0{,}1$ mol; en 0,25 L: $\dfrac{0{,}1}{0{,}25} = 0{,}4$ mol/L. ✔</p><p><b>¿Por qué no las otras?</b> 250 mL es el volumen final, no el agua agregada. 40 mL invierte la fórmula ($\dfrac{0{,}4\cdot 100}{1}$): concentraría en vez de diluir. 1.300 mL usa 5,6 como si fueran mol/L, sin convertir.</p>`,
    conc: 'Convierte a la misma unidad antes de usar C₁·V₁ = C₂·V₂, y fíjate si piden agua o volumen final.'
  },
  bank: [
    /* Tipo 1 · % m/m con densidad → mol/L o mol/kg (Invierno 2027 P76 y P78, Invierno 2026 P78) */
    { src: 'PAES Invierno 2026, adaptada',
      enun: r`<p>El ácido sulfúrico comercial es una solución acuosa al 98 % m/m de H<sub>2</sub>SO<sub>4</sub> (masa molar = 98 g/mol), con una densidad de 1,84 g/mL. ¿Cuál es su concentración molar?</p>`,
      alts: ['1,84 mol/L', '10,0 mol/L', '18,4 mol/L', '18,8 mol/L'], ok: 2,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Mol de H<sub>2</sub>SO<sub>4</sub> en 1 L de solución.</p><p><b>Paso 2. Masa de 1 L.</b> $1{,}84\cdot 1.000 = 1.840$ g.</p><p><b>Paso 3. Soluto.</b> $0{,}98\cdot 1.840 = 1.803{,}2$ g → $\dfrac{1.803{,}2}{98} = 18{,}4$ mol.</p><p><b>Respuesta:</b> 18,4 mol/L.</p><p><b>Comprobación:</b> $18{,}4\cdot 98 = 1.803{,}2$ g de ácido en 1.840 g de solución: $\dfrac{1.803{,}2}{1.840} = 98\,\%$. ✔</p><p><b>¿Por qué no las otras?</b> 1,84 mol/L confunde la densidad con la concentración. 10,0 mol/L usa el atajo del % m/v ($\dfrac{98\cdot 10}{98}$) con un % m/m, ignorando la densidad. 18,8 mol/L divide toda la masa de la solución por 98, olvidando el 98 %.</p>`,
      conc: '% m/m → mol/L: 1 L pesa d · 1.000 g; el soluto es el % de esa masa.' },
    { src: 'PAES Invierno 2027, adaptada',
      enun: r`<p>Una solución acuosa de NaOH (masa molar = 40 g/mol) tiene una concentración de 20 % m/m. ¿Cuál es su concentración molal?</p>`,
      alts: ['0,25 mol/kg', '0,5 mol/kg', '5,0 mol/kg', '6,25 mol/kg'], ok: 3,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Mol de NaOH por kg de agua.</p><p><b>Paso 2. Toma 100 g de solución.</b> 20 g de NaOH y $100 - 20 = 80$ g de agua.</p><p><b>Paso 3. Mol.</b> $\dfrac{20}{40} = 0{,}5$ mol.</p><p><b>Paso 4. Molalidad.</b> $\dfrac{0{,}5}{0{,}080} = 6{,}25$ mol/kg.</p><p><b>Respuesta:</b> 6,25 mol/kg.</p><p><b>Comprobación:</b> en 1 kg de agua habría $6{,}25\cdot 40 = 250$ g de NaOH; $\dfrac{250}{1.250} = 20\,\%$. ✔</p><p><b>¿Por qué no las otras?</b> 0,25 divide gramos de soluto por gramos de agua. 0,5 son los mol, sin dividir por el solvente. 5,0 mol/kg divide por los 100 g de solución, no por los 80 g de agua.</p>`,
      conc: 'Molal: el denominador es solo el solvente, en kg.' },
    { src: 'PAES Invierno 2027, adaptada',
      enun: r`<p>Para preparar 500 g de una solución acuosa al 12 % m/m de un compuesto soluble en agua, se deben mezclar:</p>`,
      alts: ['12 g del compuesto y 488 g de agua.', '60 g del compuesto y 440 g de agua.', '60 g del compuesto y 500 g de agua.', '12 g del compuesto y 88 g de agua.'], ok: 1,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Las masas de soluto y de agua para 500 g de solución.</p><p><b>Paso 2. Soluto.</b> 12 % de 500 g = 60 g.</p><p><b>Paso 3. Agua.</b> $500 - 60 = 440$ g.</p><p><b>Respuesta:</b> 60 g del compuesto y 440 g de agua.</p><p><b>Comprobación:</b> $\dfrac{60}{60 + 440}\cdot 100 = 12\,\%$. ✔</p><p><b>¿Por qué no las otras?</b> «12 g y 488 g» usa 12 g como si fuera para 100 g de solución. «60 g y 500 g» da 560 g de solución y $\dfrac{60}{560}\approx 10{,}7\,\%$. «12 g y 88 g» está al 12 %, pero son solo 100 g.</p>`,
      conc: 'En % m/m, la masa de solución = soluto + solvente.' },
    /* Tipo 2 · conversión y dilución en un mismo problema (Invierno 2026 P79) */
    { src: 'PAES Invierno 2026, adaptada',
      enun: r`<p>Considerando volúmenes aditivos, ¿qué volumen de agua se debe agregar a 25 mL de una solución de NaCl (masa molar = 58,5 g/mol) al 11,7 % m/v para obtener una solución 0,5 mol/L?</p>`,
      alts: ['6,25 mL', '75 mL', '100 mL', '560 mL'], ok: 1,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El agua agregada. Primero, la concentración inicial en mol/L.</p><p><b>Paso 2. Convierte.</b> 11,7 % m/v = 117 g/L → $\dfrac{117}{58{,}5} = 2$ mol/L.</p><p><b>Paso 3. Volumen final.</b> $V_2 = \dfrac{2\cdot 25}{0{,}5} = 100$ mL.</p><p><b>Paso 4. Agua.</b> $100 - 25 = 75$ mL.</p><p><b>Respuesta:</b> 75 mL.</p><p><b>Comprobación:</b> $0{,}05$ mol de NaCl en 0,1 L = 0,5 mol/L. ✔</p><p><b>¿Por qué no las otras?</b> 6,25 mL invierte la fórmula. 100 mL es el volumen final. 560 mL usa 11,7 como si fuera mol/L.</p>`,
      conc: 'Primero convierte a mol/L; después diluye y resta el volumen inicial.' },
    { src: 'PAES Invierno 2026, adaptada',
      enun: r`<p>Un estudiante tiene 200 mL de una solución de glucosa (masa molar = 180 g/mol) al 9 % m/v y necesita diluirla hasta 0,1 mol/L. Considerando volúmenes aditivos, ¿qué volumen de agua debe agregar?</p>`,
      alts: ['40 mL', '800 mL', '1.000 mL', '17.800 mL'], ok: 1,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El agua que hay que agregar.</p><p><b>Paso 2. Convierte.</b> 9 % m/v = 90 g/L → $\dfrac{90}{180} = 0{,}5$ mol/L.</p><p><b>Paso 3. Volumen final.</b> $V_2 = \dfrac{0{,}5\cdot 200}{0{,}1} = 1.000$ mL.</p><p><b>Paso 4. Agua.</b> $1.000 - 200 = 800$ mL.</p><p><b>Respuesta:</b> 800 mL.</p><p><b>Comprobación:</b> la concentración baja 5 veces (de 0,5 a 0,1), así que el volumen sube 5 veces: $5\cdot 200 = 1.000$ mL. ✔</p><p><b>¿Por qué no las otras?</b> 40 mL invierte la fórmula. 1.000 mL es el volumen final. 17.800 mL usa 9 como si fueran mol/L.</p>`,
      conc: 'Si la concentración baja k veces, el volumen final es k veces el inicial.' },
    { src: 'PAES Regular 2026, adaptada',
      enun: r`<p>Se toman 10 mL de una solución de HNO<sub>3</sub> 6 mol/L y se llevan a un matraz aforado de 250 mL, completando con agua (solución X). Luego, 25 mL de la solución X se llevan a 100 mL con agua (solución Y). ¿Cuál es la concentración de la solución Y?</p>`,
      alts: ['0,06 mol/L', '0,24 mol/L', '0,6 mol/L', '1,5 mol/L'], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> La concentración después de dos diluciones.</p><p><b>Paso 2. Primera dilución.</b> $C_X = \dfrac{6\cdot 10}{250} = 0{,}24$ mol/L.</p><p><b>Paso 3. Segunda dilución.</b> $C_Y = \dfrac{0{,}24\cdot 25}{100} = 0{,}06$ mol/L.</p><p><b>Respuesta:</b> 0,06 mol/L.</p><p><b>Comprobación:</b> factores $\dfrac{10}{250} = \dfrac{1}{25}$ y $\dfrac{25}{100} = \dfrac{1}{4}$: $6\cdot\dfrac{1}{25}\cdot\dfrac{1}{4} = 0{,}06$. ✔</p><p><b>¿Por qué no las otras?</b> 0,24 mol/L es la solución X: falta la segunda dilución. 1,5 mol/L aplica solo la segunda dilución a la solución original. 0,6 mol/L corre la coma.</p>`,
      conc: 'Diluciones seguidas: multiplica los factores de dilución.' },
    /* Tipo 3 · mezclas de soluciones (Invierno 2026 P77, Regular 2026 P80) */
    { src: 'PAES Invierno 2026, adaptada',
      enun: r`<p>Se mezclan 300 mL de una solución de KCl 0,2 mol/L con 200 mL de una solución de KCl 0,7 mol/L. Considerando volúmenes aditivos, ¿cuál es la concentración de la mezcla?</p>`,
      alts: ['0,2 mol/L', '0,4 mol/L', '0,45 mol/L', '0,9 mol/L'], ok: 1,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Mol totales sobre volumen total.</p><p><b>Paso 2. Mol.</b> $0{,}2\cdot 0{,}3 = 0{,}06$ y $0{,}7\cdot 0{,}2 = 0{,}14$: total 0,20 mol.</p><p><b>Paso 3. Volumen.</b> $0{,}3 + 0{,}2 = 0{,}5$ L.</p><p><b>Paso 4.</b> $C = \dfrac{0{,}20}{0{,}5} = 0{,}4$ mol/L.</p><p><b>Respuesta:</b> 0,4 mol/L.</p><p><b>Comprobación:</b> queda entre 0,2 y 0,7, más cerca de 0,2, que aporta más volumen. ✔</p><p><b>¿Por qué no las otras?</b> 0,2 mol/L confunde los 0,20 mol totales con la concentración. 0,45 mol/L promedia sin considerar los volúmenes. 0,9 mol/L suma las concentraciones.</p>`,
      conc: 'Mezcla: suma mol, suma litros y divide.' },
    { src: 'PAES Invierno 2026, adaptada',
      enun: r`<p>Se mezclan 100 mL de una solución de NaOH 0,5 mol/L con 400 mL de una solución de NaOH al 2 % m/v (masa molar del NaOH = 40 g/mol). Considerando volúmenes aditivos, ¿cuál(es) de las siguientes afirmaciones es (son) correcta(s)?</p><p>I) La mezcla contiene 0,25 mol de NaOH.<br>II) La concentración de la mezcla es 0,5 mol/L.<br>III) La concentración de la mezcla es 2,5 % m/v.</p>`,
      alts: ['Solo I', 'Solo II', 'Solo I y II', 'I, II y III'], ok: 2,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Revisar mol, mol/L y % m/v de la mezcla.</p><p><b>Paso 2. Convierte la segunda.</b> 2 % m/v = 20 g/L → $\dfrac{20}{40} = 0{,}5$ mol/L. ¡Las dos soluciones tienen la misma concentración!</p><p><b>Paso 3. I.</b> $0{,}5\cdot 0{,}1 + 0{,}5\cdot 0{,}4 = 0{,}05 + 0{,}20 = 0{,}25$ mol. <b>Correcta.</b></p><p><b>Paso 4. II.</b> $\dfrac{0{,}25}{0{,}5} = 0{,}5$ mol/L. <b>Correcta.</b></p><p><b>Paso 5. III.</b> 0,25 mol = 10 g en 500 mL: $\dfrac{10}{500}\cdot 100 = 2\,\%$ m/v. <b>Incorrecta.</b></p><p><b>Respuesta:</b> solo I y II.</p><p><b>¿Por qué no las otras?</b> «Solo I» y «Solo II» dejan fuera una afirmación correcta. «I, II y III» acepta 2,5 %, que suma 0,5 + 2 como si fueran la misma unidad.</p>`,
      conc: 'Dos soluciones de igual concentración, aunque escritas en otra unidad, dan una mezcla de esa misma concentración.' },
    { src: 'PAES Regular 2026, adaptada',
      enun: r`<p>Se mezclan 200 mL de una solución de NaCl 1,5 mol/L, 300 mL de una solución de NaCl 0,5 mol/L y 500 mL de agua destilada. Considerando volúmenes aditivos, ¿cuál es la concentración final?</p>`,
      alts: ['0,45 mol/L', '0,67 mol/L', '0,9 mol/L', '1,0 mol/L'], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Mol totales sobre el volumen total, contando el agua.</p><p><b>Paso 2. Mol.</b> $1{,}5\cdot 0{,}2 + 0{,}5\cdot 0{,}3 = 0{,}30 + 0{,}15 = 0{,}45$ mol.</p><p><b>Paso 3. Volumen.</b> $0{,}2 + 0{,}3 + 0{,}5 = 1{,}0$ L.</p><p><b>Paso 4.</b> $C = \dfrac{0{,}45}{1{,}0} = 0{,}45$ mol/L.</p><p><b>Respuesta:</b> 0,45 mol/L.</p><p><b>Comprobación:</b> sin el agua serían $\dfrac{0{,}45}{0{,}5} = 0{,}9$ mol/L; el agua duplica el volumen y la concentración baja a la mitad. ✔</p><p><b>¿Por qué no las otras?</b> 0,67 mol/L promedia 1,5, 0,5 y 0 sin volúmenes. 0,9 mol/L olvida el agua. 1,0 mol/L promedia 1,5 y 0,5.</p>`,
      conc: 'El agua agregada es una «solución» de concentración 0: suma volumen, no mol.' },
    /* Tipo 4 · estequiometría con reactivos en solución (Regular 2026 P71 y P78) */
    { src: 'PAES Regular 2026, adaptada',
      enun: r`<p>Se neutralizan 25 mL de una solución de H<sub>2</sub>SO<sub>4</sub> 0,2 mol/L con una solución de NaOH 0,5 mol/L, según 2 NaOH (ac) + H<sub>2</sub>SO<sub>4</sub> (ac) → Na<sub>2</sub>SO<sub>4</sub> (ac) + 2 H<sub>2</sub>O (l). ¿Qué volumen de la solución de NaOH se necesita?</p>`,
      alts: ['5 mL', '10 mL', '20 mL', '62,5 mL'], ok: 2,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El volumen de NaOH que reacciona exactamente con el ácido.</p><p><b>Paso 2. Mol de ácido.</b> $0{,}2\cdot 0{,}025 = 0{,}005$ mol.</p><p><b>Paso 3. Razón molar.</b> 2 NaOH por cada H<sub>2</sub>SO<sub>4</sub>: $0{,}005\cdot 2 = 0{,}01$ mol de NaOH.</p><p><b>Paso 4. Volumen.</b> $\dfrac{0{,}01}{0{,}5} = 0{,}02$ L = 20 mL.</p><p><b>Respuesta:</b> 20 mL.</p><p><b>Comprobación:</b> $0{,}5\cdot 0{,}02 = 0{,}01$ mol de NaOH = el doble de los 0,005 mol de ácido. ✔</p><p><b>¿Por qué no las otras?</b> 10 mL usa razón 1 : 1 (o $C_1 V_1 = C_2 V_2$, que no sirve entre sustancias distintas). 5 mL invierte la razón molar. 62,5 mL invierte la fórmula de dilución.</p>`,
      conc: 'En una reacción en solución: n = C · V, luego la razón molar de la ecuación.' },
    { src: 'PAES Regular 2026, adaptada',
      enun: r`<p>A 50 mL de una solución de KI 0,4 mol/L se agrega un exceso de Pb(NO<sub>3</sub>)<sub>2</sub>, y precipita PbI<sub>2</sub> según Pb(NO<sub>3</sub>)<sub>2</sub> (ac) + 2 KI (ac) → PbI<sub>2</sub> (s) + 2 KNO<sub>3</sub> (ac). ¿Qué masa de PbI<sub>2</sub> (masa molar = 461 g/mol) se forma?</p>`,
      alts: ['2,31 g', '4,61 g', '9,22 g', '4.610 g'], ok: 1,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> La masa de precipitado. El KI limita (el otro está en exceso).</p><p><b>Paso 2. Mol de KI.</b> $0{,}4\cdot 0{,}05 = 0{,}02$ mol.</p><p><b>Paso 3. Razón molar.</b> 2 KI forman 1 PbI<sub>2</sub>: 0,01 mol.</p><p><b>Paso 4. Masa.</b> $0{,}01\cdot 461 = 4{,}61$ g.</p><p><b>Respuesta:</b> 4,61 g.</p><p><b>¿Por qué no las otras?</b> 2,31 g divide los mol de KI por 4 en vez de por 2. 9,22 g usa razón 1 : 1. 4.610 g no pasa los 50 mL a litros ($0{,}4\cdot 50 = 20$ «mol»).</p>`,
      conc: 'Volumen en litros para n = C · V; después, la razón molar.' },
    { src: 'PAES Regular 2026, adaptada',
      enun: r`<p>Se agregan 2,4 g de Mg (masa molar = 24 g/mol) a 100 mL de una solución de HCl 1,5 mol/L. Ocurre la reacción Mg (s) + 2 HCl (ac) → MgCl<sub>2</sub> (ac) + H<sub>2</sub> (g). ¿Cuál es el reactivo limitante y qué cantidad de H<sub>2</sub> se forma?</p>`,
      alts: ['Mg; 0,10 mol de H<sub>2</sub>', 'Mg; 0,05 mol de H<sub>2</sub>', 'HCl; 0,15 mol de H<sub>2</sub>', 'HCl; 0,075 mol de H<sub>2</sub>'], ok: 3,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> El limitante y el producto. Un reactivo viene en gramos y el otro en solución.</p><p><b>Paso 2. Mol.</b> Mg: $\dfrac{2{,}4}{24} = 0{,}1$. HCl: $1{,}5\cdot 0{,}1 = 0{,}15$.</p><p><b>Paso 3. Limitante.</b> Mg: $\dfrac{0{,}1}{1} = 0{,}1$. HCl: $\dfrac{0{,}15}{2} = 0{,}075$. Limita el HCl.</p><p><b>Paso 4. Producto.</b> 2 HCl forman 1 H<sub>2</sub>: $\dfrac{0{,}15}{2} = 0{,}075$ mol.</p><p><b>Respuesta:</b> HCl; 0,075 mol de H<sub>2</sub>.</p><p><b>Comprobación:</b> reaccionan 0,075 mol de Mg; sobran 0,025 mol. ✔</p><p><b>¿Por qué no las otras?</b> «Mg; 0,10 mol» elige el que tiene menos mol sin dividir por los coeficientes. «Mg; 0,05 mol» también elige mal y además divide por 2. «HCl; 0,15 mol» acierta el limitante pero olvida la razón 2 : 1.</p>`,
      conc: 'Con un reactivo en solución, sus mol salen de C · V; el limitante se elige igual que siempre.' },
    /* Tipo 5 · comparar y convertir unidades: molal, fracción molar, densidad (Invierno 2027 P76, Invierno 2026 P76) */
    { src: 'PAES Invierno 2027, adaptada',
      enun: r`<p>Una solución acuosa de glucosa (masa molar = 180 g/mol) tiene una concentración de 1 mol/kg. ¿Cuál es, aproximadamente, la fracción molar de la glucosa? (Masa molar del agua = 18 g/mol.)</p>`,
      alts: ['0,018', '0,056', '0,15', '1,0'], ok: 0,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Mol de glucosa sobre mol totales.</p><p><b>Paso 2. Toma 1 kg de agua.</b> Contiene 1 mol de glucosa (por la molalidad) y $\dfrac{1.000}{18} \approx 55{,}6$ mol de agua.</p><p><b>Paso 3. Fracción molar.</b> $X = \dfrac{1}{1 + 55{,}6} \approx 0{,}018$.</p><p><b>Respuesta:</b> 0,018.</p><p><b>¿Por qué no las otras?</b> 0,056 divide 1 por 18, confundiendo la masa molar del agua con sus mol. 0,15 es una fracción de masa: $\dfrac{180}{1.180}$. 1,0 confunde la molalidad con la fracción molar.</p>`,
      conc: 'De molal a fracción molar: 1 kg de agua son unos 55,6 mol.' },
    { src: 'PAES Invierno 2026, adaptada',
      enun: r`<p>Un grupo de estudiantes compara tres soluciones acuosas de NaOH (masa molar = 40 g/mol):</p><p>¿Cuál de las siguientes opciones compara correctamente sus concentraciones?</p>`,
      fig: { type: 'table', head: ['Solución', 'Descripción'], rows: [['1', 'NaOH 0,5 mol/L'], ['2', 'NaOH al 4 % m/v'], ['3', '8 g de NaOH en 400 mL de solución']] },
      alts: ['Solución 1 = Solución 2 = Solución 3', 'Solución 2 &lt; Solución 1 = Solución 3', 'Solución 1 = Solución 3 &lt; Solución 2', 'Solución 1 &lt; Solución 2 &lt; Solución 3'], ok: 2,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Comparar: hay que llevar las tres a mol/L.</p><p><b>Paso 2. Solución 2.</b> 4 % m/v = 40 g/L = 1 mol/L.</p><p><b>Paso 3. Solución 3.</b> $\dfrac{8}{40} = 0{,}2$ mol en 0,4 L: 0,5 mol/L.</p><p><b>Respuesta:</b> Solución 1 = Solución 3 &lt; Solución 2.</p><p><b>Comprobación:</b> en % m/v: solución 1 = 2 %, solución 3 = $\dfrac{8}{400}\cdot 100 = 2\,\%$, solución 2 = 4 %. ✔</p><p><b>¿Por qué no las otras?</b> «Todas iguales» no convierte las unidades. «Solución 2 &lt; …» invierte la comparación. «1 &lt; 2 &lt; 3» trata la solución 3 como la más concentrada porque tiene más gramos, sin dividir por el volumen.</p>`,
      conc: 'Para comparar concentraciones, llévalas todas a la misma unidad.' },
    { src: 'PAES Invierno 2027, adaptada',
      enun: r`<p>Una solución acuosa de NaOH (masa molar = 40 g/mol) tiene una concentración de 2 mol/L y una densidad de 1,08 g/mL. ¿Cuál es su concentración molal?</p>`,
      alts: ['0,002 mol/kg', '1,85 mol/kg', '2,0 mol/kg', '2,16 mol/kg'], ok: 2,
      sol: r`<p><b>Paso 1. ¿Qué nos piden?</b> Mol de NaOH por kg de agua.</p><p><b>Paso 2. Toma 1 L de solución.</b> Masa: $1{,}08\cdot 1.000 = 1.080$ g. Soluto: 2 mol = 80 g.</p><p><b>Paso 3. Solvente.</b> $1.080 - 80 = 1.000$ g = 1 kg.</p><p><b>Paso 4.</b> $b = \dfrac{2}{1} = 2{,}0$ mol/kg.</p><p><b>Respuesta:</b> 2,0 mol/kg.</p><p><b>¿Por qué no las otras?</b> 0,002 mol/kg divide por gramos en vez de kilogramos. 1,85 mol/kg divide por la masa de toda la solución (1,08 kg). 2,16 mol/kg multiplica por la densidad.</p>`,
      conc: 'De mol/L a mol/kg: masa de 1 L con la densidad, réstale el soluto y divide por el solvente en kg.' }
  ]
}
];
