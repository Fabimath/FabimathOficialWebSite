/* Michi operaciones: los gatos de la colección trabajan en tres escenarios de pixel art y producen pescados cada minuto.
   Colegio (michis estudiantes, abierto desde el inicio, con el Michi Profesor), Fábrica (obreros) y Oficina (oficinistas):
   estos dos se desbloquean para siempre con pescados, igual que cada puesto extra. El oficio de cada gato está en OFICIO (gacha.js).
   Producción por minuto = la mitad del multiplicador del gato (multGato: sube con la rareza y la variante), de 1 a 50.
   Cada puesto guarda { k: "gato:variante", t: última cosecha }: lo producido se calcula con la hora, así que sigue sumando
   con la página cerrada, hasta OPS_TOPE minutos sin recoger. Estado en p.ops = { colegio: { n: puestos, s: [puesto | null] }, … }.
   El escenario es un SVG de 192 × 120 píxeles; gatos, muebles y carteles van encima en HTML, medidos en cqw para escalar juntos.
   Se carga después de tamagotchi.js (usa pez, sumaPez, updPez, mmss, pxSVG y renderHuevos). */

/* ---------- sprites: cada letra es un color de la paleta que se pasa al dibujar ---------- */
const S_PEZ = ["...KKKK....", ".KKBBBBK.KK", "KBKBBBBBKBK", "KBBBBBBBBBK", ".KKBBBBK.KK", "...KKKK...."];
const S_CANDADO = ["..KKK..", ".K...K.", ".K...K.", "KKKKKKK", "KYYYYYK", "KYYKYYK", "KYYKYYK", "KYYYYYK", "KKKKKKK"];
const S_BIRRETE = [".....KKKK.....", "..KKKNNNNKKK..", "KKNNNNNNNNNNKK", "..KKKNNNNKKKY.", ".....KNNK...Y.", ".....KKKK...Y."];
const S_RELOJ = ["..KKKKKK..", ".KWWWWWWK.", "KWWWKWWWWK", "KWWWKWWWWK", "KWWWKKKWWK", "KWWWWWWWWK", "KWWWWWWWWK", ".KWWWWWWK.", "..KKKKKK.."];
const S_ENGRANE = ["....KKK....", ".KK.KGK.KK.", ".KGKKGKKGK.", "..KGGGGGK..", "KKKGGKGGKKK", "KGGGKKKGGGK", "KKKGGKGGKKK", "..KGGGGGK..", ".KGKKGKKGK.", ".KK.KGK.KK.", "....KKK...."];
const S_CAJA = ["KKKKKKKK", "KLLYYLLK", "KBBYYBBK", "KBBBBBBK", "KBBBBBBK", "KKKKKKKK"];
const S_PLANTA = ["...K.K...", "..KGKGK..", ".KGgKgGK.", "KGgGKGgGK", ".KGgKgGK.", "KGGgKgGGK", ".KKGKGKK.", "...KKK...", ".KKKKKKK.", ".KPPPPPK.", "..KPPPK..", "..KPPPK..", "..KKKKK.."];
const S_PUPITRE = ["..KKKKKK..............", "..KRRRRK..............", "..KWWWWK..............", "KKKKKKKKKKKKKKKKKKKKKK", "KLLLLLLLLLLLLLLLLLLLLK", "KMMMMMMMMMMMMMMMMMMMMK",
  "KKKKKKKKKKKKKKKKKKKKKK", ".KDDDDDDDDDDDDDDDDDDK.", ".KDMMMMMMMMMMMMMMMMDK.", ".KDMMMMMMMMMMMMMMMMDK.", ".KDDDDDDDDDDDDDDDDDDK.", ".KKKKKKKKKKKKKKKKKKKK.", ".KGK..............KGK.", "KKGKK............KKGKK"];
const S_BANCO = ["...KKK..........RK......", "..KRRRK..........K......", "..KRRRK..........KK.....", "KKKKKKKKKKKKKKKKKKKKKKKK", "KLLLLLLLLLLLLLLLLLLLLLLK", "KMMMMMMMMMMMMMMMMMMMMMMK",
  "KKKKKKKKKKKKKKKKKKKKKKKK", "KYYNNYYNNYYNNYYNNYYNNYYK", "KYNNYYNNYYNNYYNNYYNNYYNK", "KNNYYNNYYNNYYNNYYNNYYNNK", "KMMMMMMMMMMMMMMMMMMMMMMK", "KMMMMMKKKKKKKKKKKKMMMMMK", "KKKKKKKKKKKKKKKKKKKKKKKK", ".KGK................KGK."];
const S_ESCRITORIO = ["........................KKKKKKKK", "........................KCCCCCCK", "........................KCWCCCCK", "........................KCCCCCCK", "........................KKKKKKKK", "...........................KK...",
  "..........KKKKKKKKKK.......KK...", "..........KWGWGWGWGK.....KKKKKK.", "KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK", "KLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLK", "KMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMK", "KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK",
  ".KDDDDDDDDDDDDDDDDDDDDDDDDDDDDK.", ".KDDDDDDDDDDDDDDDDDDDDDDDDDDDDK.", ".KKKKKKKKKKKKKKKKKKKKKKKKKKKKKK.", ".KGK........................KGK."];
const C_PEZ = { K: '#1a1008', B: '#4fa8ff' }, C_CANDADO = { K: '#3a1a05', Y: '#f5c542' };
const C_PUPITRE = { K: '#3a1a05', R: '#e8342a', W: '#fff', L: '#e8b57a', M: '#c98f55', D: '#a86f3c', G: '#8e8e96' };
const C_BANCO = { K: '#22252b', R: '#e8342a', L: '#c9d0d8', M: '#8a94a0', Y: '#f5c542', N: '#2b2b2f', G: '#5a6270' };
const C_ESCRITORIO = { K: '#1d1d24', C: '#4fa8ff', W: '#fff', G: '#c7c7cc', L: '#8a6a52', M: '#6b4f3c', D: '#4a3426' };
// glifos de tiza de 3 × 5 para la pizarra
const TIZA = { 2: ["111", "001", "111", "100", "111"], '+': ["000", "010", "111", "010", "000"], '=': ["000", "111", "000", "111", "000"], 4: ["101", "101", "111", "001", "001"] };

// rect de 1 unidad del SVG; spr = sprite en (x, y) del escenario
const R = (x, y, w, h, c) => `<rect x="${x}" y="${y}" width="${w + .02}" height="${h + .02}" fill="${c}"/>`;
const spr = (rows, col, x0, y0) => rows.map((row, y) => [...row].map((ch, x) => col[ch] ? R(x0 + x, y0 + y, 1, 1, col[ch]) : '').join('')).join('');
const ico = (rows, col, clase = 'o-ico') => pxSVG(rows, col, 1).replace('<svg', `<svg class="${clase}"`);
const PEZ_ICO = ico(S_PEZ, C_PEZ), CANDADO_ICO = ico(S_CANDADO, C_CANDADO);

/* ---------- fondos: 192 × 120, pared hasta y = 56 y piso abajo ---------- */
function fondoColegio() {
  let s = `<defs><pattern id="oPisoCol" width="24" height="16" patternUnits="userSpaceOnUse">${R(0, 0, 24, 16, '#d9a86a') + R(0, 7, 24, 1, '#b98848') + R(0, 15, 24, 1, '#b98848') + R(16, 0, 1, 7, '#b98848') + R(4, 8, 1, 7, '#b98848') + R(3, 2, 6, 1, '#e4b97f') + R(14, 11, 5, 1, '#e4b97f')}</pattern></defs>`;
  s += R(0, 0, 192, 56, '#f3dfb4') + R(0, 41, 192, 2, '#8a5a2b') + R(0, 43, 192, 12, '#c98f55');
  for (let x = 8; x < 192; x += 16) s += R(x, 44, 1, 10, '#b07a45');
  s += R(0, 55, 192, 2, '#5a3a1e') + `<rect y="57" width="192" height="63" fill="url(#oPisoCol)"/>`;
  // ventana con nubes
  s += R(8, 8, 30, 26, '#5a3a1e') + R(10, 10, 26, 22, '#9fd3ff') + R(13, 13, 7, 2, '#fff') + R(12, 15, 10, 2, '#fff') + R(26, 23, 6, 2, '#fff') + R(22, 10, 2, 22, '#8a5a2b') + R(10, 20, 26, 2, '#8a5a2b') + R(7, 33, 32, 2, '#8a5a2b');
  // pizarra con «2+2=4» y un pescado de tiza
  s += R(54, 5, 84, 34, '#3a1a05') + R(55, 6, 82, 32, '#8a5a2b') + R(57, 8, 78, 28, '#2f5e46') + R(57, 8, 78, 1, '#3d7558') + R(56, 38, 80, 2, '#6b4423') + R(70, 37, 4, 1, '#fff') + R(110, 37, 3, 1, '#ffd5e5');
  [...'2+2=4'].forEach((c, i) => TIZA[c].forEach((f, y) => [...f].forEach((b, x) => { if (b === '1') s += R(77 + i * 8 + x * 2, 13 + y * 2, 2, 2, '#f4f1ea'); })));
  s += spr(S_PEZ, { K: '#e9efe9', B: '#2f5e46' }, 91, 27);
  return s + spr(S_RELOJ, { K: '#3a1a05', W: '#fff' }, 168, 8);
}
function fondoFabrica() {
  let s = `<defs><pattern id="oLadrillo" width="24" height="12" patternUnits="userSpaceOnUse">${R(0, 0, 24, 12, '#b0674d') + R(0, 5, 24, 1, '#8a4a36') + R(0, 11, 24, 1, '#8a4a36') + R(11, 0, 1, 5, '#8a4a36') + R(23, 0, 1, 5, '#8a4a36') + R(5, 6, 1, 5, '#8a4a36') + R(17, 6, 1, 5, '#8a4a36') + R(1, 1, 6, 1, '#c27a5f') + R(13, 7, 6, 1, '#c27a5f')}</pattern>
    <pattern id="oPisoFab" width="16" height="16" patternUnits="userSpaceOnUse">${R(0, 0, 16, 16, '#9aa1a9') + R(0, 15, 16, 1, '#868d96') + R(15, 0, 1, 16, '#868d96') + R(5, 6, 1, 1, '#aab1b9') + R(10, 11, 1, 1, '#8d949c')}</pattern></defs>`;
  s += `<rect width="192" height="56" fill="url(#oLadrillo)"/>`;
  [12, 83, 154].forEach(x => s += R(x, 6, 26, 16, '#3a3f47') + R(x + 2, 8, 22, 12, '#a9d8ff') + R(x + 12, 8, 2, 12, '#3a3f47') + R(x + 4, 10, 3, 1, '#fff') + R(x + 16, 14, 2, 1, '#fff'));
  s += R(0, 26, 192, 4, '#6b7380') + R(0, 26, 192, 1, '#9aa3ae');
  for (let x = 10; x < 192; x += 32) s += R(x, 25, 3, 6, '#4a5160');
  s += spr(S_ENGRANE, { K: '#2b2f36', G: '#9aa3ae' }, 56, 32) + spr(S_ENGRANE, { K: '#2b2f36', G: '#d9a441' }, 128, 32);
  // cinta transportadora con cajas que avanzan
  s += R(0, 43, 192, 1, '#4a5160') + R(0, 44, 192, 4, '#2b2b2f');
  for (let x = 2; x < 192; x += 8) s += R(x, 48, 4, 2, '#6b7380');
  s += `<g class="o-cinta">${[-48, 0, 48, 96, 144].map(x => spr(S_CAJA, { K: '#3a1a05', L: '#e0b07a', B: '#c8935a', Y: '#ffd75e' }, x + 20, 37)).join('')}</g>`;
  s += R(0, 50, 192, 6, '#2b2b2f');
  for (let x = 0; x < 192; x += 6) s += R(x, 50, 3, 6, '#f5c542');
  return s + `<rect y="56" width="192" height="64" fill="url(#oPisoFab)"/>`;
}
function fondoOficina() {
  let s = `<defs><pattern id="oAlfombra" width="4" height="4" patternUnits="userSpaceOnUse">${R(0, 0, 4, 4, '#5e6f94') + R(0, 0, 2, 2, '#56668a') + R(2, 2, 2, 2, '#56668a')}</pattern></defs>`;
  s += R(0, 0, 192, 56, '#dfeaf6');
  for (let x = 24; x < 192; x += 24) s += R(x, 0, 1, 54, '#cddcec');
  s += R(0, 54, 192, 2, '#7b8aa3') + `<rect y="56" width="192" height="64" fill="url(#oAlfombra)"/>`;
  // ventanales con ciudad: edificios [x, ancho, alto] y ventanitas encendidas
  [8, 130].forEach(x0 => {
    s += R(x0, 6, 54, 32, '#4a5568') + R(x0 + 2, 8, 50, 28, '#a8d4ff');
    [[0, 8, 14], [9, 6, 20], [16, 10, 11], [27, 7, 24], [35, 9, 16], [45, 5, 19]].forEach(([x, w, h], i) => {
      s += R(x0 + 2 + x, 36 - h, w, h, '#6f87ad');
      for (let y = 38 - h; y < 34; y += 3) for (let k = 1; k < w - 1; k += 2) if ((i * 7 + y * 3 + k) % 4 === 0) s += R(x0 + 2 + x + k, y, 1, 1, '#ffe9a8');
    });
    s += R(x0 + 26, 8, 2, 28, '#4a5568');
  });
  // pizarra blanca con gráfico de barras que sube
  s += R(76, 8, 40, 28, '#9aa3ae') + R(78, 10, 36, 24, '#fff') + R(81, 31, 30, 1, '#3a3340');
  [['#4fa8ff', 6], ['#5fd97a', 10], ['#e8680c', 14], ['#e8342a', 19]].forEach(([c, h], i) => s += R(83 + i * 7, 31 - h, 5, h, c));
  return s + spr(S_PLANTA, { K: '#1f3d1a', G: '#5fb547', g: '#3f8f2f', P: '#c8935a' }, 65, 42) + spr(S_PLANTA, { K: '#1f3d1a', G: '#5fb547', g: '#3f8f2f', P: '#c8935a' }, 119, 42);
}

// xy: dónde queda la base de cada puesto, en % del escenario; top: fila del mueble donde está la cubierta (el gato asoma tras ella)
const OPS = [
  { id: 'colegio', of: 'estudiante', quien: 'michis estudiantes', name: 'Colegio', abre: 0, mueble: S_PUPITRE, col: C_PUPITRE, top: 3, fondo: fondoColegio,
    xy: [[15, 58], [41, 58], [67, 58], [15, 87], [41, 87], [67, 87]] },
  { id: 'fabrica', of: 'obrero', quien: 'michis obreros', name: 'Fábrica', abre: 100, mueble: S_BANCO, col: C_BANCO, top: 3, fondo: fondoFabrica,
    xy: [[20, 58], [50, 58], [80, 58], [20, 87], [50, 87], [80, 87]] },
  { id: 'oficina', of: 'oficinista', quien: 'michis oficinistas', name: 'Oficina', abre: 250, mueble: S_ESCRITORIO, col: C_ESCRITORIO, top: 8, fondo: fondoOficina,
    xy: [[20, 58], [50, 58], [80, 58], [20, 87], [50, 87], [80, 87]] }
];
const MU = .42;   // cqw por píxel de mueble (el gato mide 8.5 cqw: 20 px de 0.425)
const OPS_MIN = 60e3, OPS_TOPE = 60, OPS_INI = 2, OPS_MAX = 6;
const pezMin = k => Math.max(1, Math.round(multGato(k) / 2));   // común normal ×2 → 1 por minuto … mítico galáctico ×100 → 50
const costoPuesto = n => 20 * 2 ** (n - OPS_INI);                 // 3.er puesto 20, 4.º 40, 5.º 80, 6.º 160
const PROFE = { name: 'Michi Profesor', body: '#9c7a5b', shade: '#6b4f3a', pat: 'rayas', rar: RAR[0] };

// escenarios abiertos (el colegio siempre); suelta los puestos cuyo gato ya no está (vendido o fusionado)
function ops(p) {
  p.ops = p.ops || {}; p.ops.colegio = p.ops.colegio || { n: OPS_INI, s: [] };
  const usa = {}, col = p.col || {};
  Object.values(p.ops).forEach(o => { o.s = o.s.map(x => x && (usa[x.k] = (usa[x.k] || 0) + 1) <= (col[x.k] || 0) ? x : null); });
  return p.ops;
}
const trabajando = (p, k) => Object.values(ops(p)).reduce((s, o) => s + o.s.filter(x => x && x.k === k).length, 0);
const ciclos = x => Math.min(OPS_TOPE, Math.floor((Date.now() - x.t) / OPS_MIN));
const acum = x => ciclos(x) * pezMin(x.k);
// cobra lo producido; el minuto en curso sigue contando, salvo que estuviera lleno
function cobrar(x) { const c = ciclos(x); x.t = c >= OPS_TOPE ? Date.now() : x.t + c * OPS_MIN; return c * pezMin(x.k); }
const txtAcum = x => ciclos(x) >= OPS_TOPE ? `${acum(x)} ${PEZ_ICO} ¡lleno!` : `${acum(x)} ${PEZ_ICO} · ${mmss(OPS_MIN - (Date.now() - x.t) % OPS_MIN)}`;
function flotaPez(n, x, y) {
  const s = document.createElement('span'); s.className = 't-flota'; s.innerHTML = `+${n} ${PEZ_ICO}`;
  s.style.left = x + 'px'; s.style.top = y + 'px'; document.body.appendChild(s); setTimeout(() => s.remove(), 1000);
}

document.head.insertAdjacentHTML('beforeend', `<style>
  .o-ico { width: 1.25em; height: auto; vertical-align: -.2em; }
  .o-tab .o-ico { width: 2em; } .o-lk { width: .8em; height: auto; }
  .g-box.o-box { max-height: 94vh; overflow: auto; }
  .o-tabs { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 10px; }
  .o-tab { font: inherit; font-size: 14px; font-weight: 600; border: 1px solid var(--line); background: var(--bg); border-radius: 99px; padding: 6px 14px; cursor: pointer; display: inline-flex; gap: 6px; align-items: center; }
  .o-tab.on { background: #e8680c; border-color: #e8680c; color: #fff; }
  .o-marco { overflow-x: auto; border-radius: 14px; border: 4px solid #3a1a05; }
  .o-escena { position: relative; min-width: 720px; aspect-ratio: 192 / 120; container-type: inline-size; overflow: hidden;
    font-family: ui-monospace, "Cascadia Mono", Consolas, "Courier New", monospace; font-weight: 700; }
  .o-escena > svg { position: absolute; inset: 0; width: 100%; height: 100%; }
  .o-escena.cerrada > svg { filter: grayscale(.85) brightness(.6); }
  .o-pos { position: absolute; translate: -50% -100%; display: flex; flex-direction: column; align-items: center; padding: 0; border: none; background: none; font: inherit; color: inherit; }
  button.o-pos { cursor: pointer; } button.o-pos:disabled { cursor: default; }
  .o-gato > svg { display: block; width: 8.5cqw; height: auto; }
  .o-pos.libre .o-gato { opacity: .45; } .o-pos.libre:hover .o-gato { opacity: .8; }
  .o-mueble svg { display: block; height: auto; }
  .o-pos.compra .o-mueble { filter: grayscale(1); opacity: .45; }
  .o-pos.compra .o-gato > svg { width: 3.6cqw; margin-bottom: 1.4cqw; }
  .o-cartel { position: absolute; top: calc(100% + .5cqw); left: 50%; translate: -50% 0; white-space: nowrap; }
  .o-cartel > div { --p: 2px; display: flex; flex-direction: column; align-items: center; gap: .15cqw; padding: .45cqw .8cqw; background: #fff; color: #3a3340; font-size: 1.25cqw; line-height: 1.3; }
  .o-cartel .rate { color: #c4540a; }
  .o-pos.libre .o-cartel > div, .o-pos.compra .o-cartel > div { background: #fff3e6; }
  .o-saca { --p: 2px; font: inherit; font-size: 1.05cqw; margin-left: .5cqw; padding: .1cqw .7cqw; border: none; background: #3a3340; color: #fff; cursor: pointer; }
  .o-prof .birrete { position: absolute; top: -1.5cqw; left: 50%; translate: -50% 0; width: 6.2cqw; height: auto; }
  .o-cerrada { position: absolute; left: 50%; top: 50%; translate: -50% -50%; text-align: center; }
  .o-cerrada > div { --p: 4px; padding: 2cqw 3cqw; background: #fff3e6; color: #3a3340; font-size: 1.5cqw; line-height: 1.4; }
  .o-cerrada .o-ico { width: 4cqw; display: block; margin: 0 auto 1cqw; }
  .o-cerrada .btn { margin-top: 1.2cqw; font-family: inherit; }
  .o-cinta { animation: o-cinta 3s linear infinite; }
  @keyframes o-cinta { to { transform: translateX(48px); } }
  .o-pie { display: flex; flex-wrap: wrap; gap: 10px; align-items: center; justify-content: space-between; margin-top: 12px; font-size: 14px; color: var(--ink-3); }
  .o-rate { display: inline-block; margin: 3px 0; padding: 2px 8px; border-radius: 99px; background: var(--tint); color: #c4540a; font-size: 12px; font-weight: 800; }
  .g-box.o-pick { width: min(640px, 100%); max-height: 90vh; overflow: auto; }
  @media (prefers-reduced-motion: reduce) { .o-cinta { animation: none; } }
</style>`);

// modal cuyo Esc o clic afuera cierra solo el de más arriba (el selector se abre sobre las operaciones)
function ventana(etiqueta, html, clase) {
  const m = modal(etiqueta, html, clase);
  const cerrar = () => { m.remove(); document.removeEventListener('keydown', esc); };
  const esc = e => { if (e.key === 'Escape' && [...document.querySelectorAll('.g-modal')].pop() === m) cerrar(); };
  document.addEventListener('keydown', esc);
  m.addEventListener('click', e => { if (e.target === m) cerrar(); });
  return { m, cerrar };
}

// un puesto del escenario: gato (o silueta, o candado) detrás del mueble y un cartel debajo
function puestoHTML(e, ab, i, p) {
  const [x, y] = e.xy[i], x0 = ab.s[i], pos = `style="left:${x}%;top:${y}%"`;
  const mueble = `<div class="o-mueble" style="margin-top:calc(-1cqw * (1.87 + ${e.top * MU}))">${pxSVG(e.mueble, e.col, 1).replace('<svg', `<svg style="width:${e.mueble[0].length * MU}cqw"`)}</div>`;
  const cartel = (html, cls = 'pxc') => `<div class="o-cartel t-borde"><div class="${cls}">${html}</div></div>`;
  if (i >= ab.n) return `<button class="o-pos compra" data-puesto ${pos} ${pez(p) < costoPuesto(ab.n) ? 'disabled' : ''}><div class="o-gato">${ico(S_CANDADO, C_CANDADO, '')}</div>${mueble}${cartel(`Nuevo puesto<span>${costoPuesto(ab.n)} ${PEZ_ICO}</span>`)}</button>`;
  if (!x0) return `<button class="o-pos libre" data-pon="${i}" ${pos}><div class="o-gato">${gatoSVG(GATOS[0], 56, true)}</div>${mueble}${cartel('+ Poner michi')}</button>`;
  const pz = pieza(x0.k);
  return `<div class="o-pos" ${pos} title="${pz.g.name} ${VAR[pz.v].name.toLowerCase()} · ×${multGato(x0.k)}"><div class="o-gato v-${VAR[pz.v].id}">${gatoSVG(pz.g, 56)}</div>${mueble}
    ${cartel(`<span class="rate">+${pezMin(x0.k)} ${PEZ_ICO}/min</span><span><span data-acum="${i}">${txtAcum(x0)}</span><button class="o-saca pxc" data-saca="${i}">SACAR</button></span>`)}</div>`;
}

function operaciones(sel = 'colegio') {
  const { m, cerrar } = ventana('Michi operaciones', '', 'g-farm o-box'), box = m.querySelector('.g-box');
  const total = ab => ab.s.reduce((s, x) => s + (x ? acum(x) : 0), 0);
  function dibuja() {
    const p = store.get(), o = ops(p), e = OPS.find(x => x.id === sel), ab = o[sel];
    let encima;
    if (!ab) encima = `<div class="o-cerrada t-borde"><div class="pxc">${CANDADO_ICO}${e.name.toUpperCase()} CERRADA<br>Aquí trabajan los ${e.quien}.<br>
      <button class="btn btn-primary" data-abre ${pez(p) < e.abre ? 'disabled' : ''}>Abrir para siempre · ${e.abre} ${PEZ_ICO}</button></div></div>`;
    else encima = (sel === 'colegio' ? `<div class="o-pos o-prof" style="left:88%;top:47%"><div class="o-gato" style="position:relative">${gatoSVG(PROFE, 56)}${ico(S_BIRRETE, { K: '#111', N: '#2b2b33', Y: '#f5c542' }, 'birrete')}</div>
        <div class="o-cartel t-borde"><div class="pxc">Michi Profesor</div></div></div>` : '') +
      Array.from({ length: Math.min(ab.n + 1, OPS_MAX) }, (_, i) => puestoHTML(e, ab, i, p)).join('');
    box.innerHTML = `<div class="top"><div style="flex:1;min-width:260px"><h3 style="font-size:24px;display:flex;gap:8px;align-items:center">${gatoSVG(GATOS[0], 34)} Michi operaciones</h3><div class="sub" style="margin:0;color:var(--ink-3);font-size:14px">Pon a trabajar a tus gatos: cada minuto producen la mitad de su multiplicador en pescados (de 1 a 50, según rareza y variante), aunque cierres la página, hasta ${OPS_TOPE} minutos sin recoger.</div></div>
      <div style="display:flex;gap:8px;align-items:center"><span class="pill">${window.esAdmin ? '∞' : p.pez || 0} ${PEZ_ICO}</span><button class="btn btn-ghost" data-x>Cerrar</button></div></div>
      <div class="o-tabs">${OPS.map(x => `<button class="o-tab ${x.id === sel ? 'on' : ''}" data-tab="${x.id}">${ico(x.mueble, x.col)}${x.name}${o[x.id] ? '' : ico(S_CANDADO, C_CANDADO, 'o-lk')}</button>`).join('')}</div>
      <div class="o-marco"><div class="o-escena ${ab ? '' : 'cerrada'}"><svg viewBox="0 0 192 120" shape-rendering="crispEdges" aria-hidden="true">${e.fondo()}</svg>${encima}</div></div>
      ${ab ? `<div class="o-pie"><span>${ab.s.filter(Boolean).length}/${ab.n} puestos ocupados · solo ${e.quien}</span><button class="btn btn-primary" data-recoge ${total(ab) ? '' : 'disabled'}>Recoger ${total(ab)} ${PEZ_ICO}</button></div>` : ''}`;
  }
  box.addEventListener('click', ev => {
    const b = ev.target.closest('button'); if (!b || b.disabled) return;
    const d = b.dataset, p = store.get(), o = ops(p), ab = o[sel], e = OPS.find(x => x.id === sel);
    if ('x' in d) return cerrar();
    if (d.tab) { sel = d.tab; return dibuja(); }
    if (d.pon) return elegirMichi(sel, +d.pon, dibuja);
    let n = 0;
    if ('abre' in d) { if (o[sel] || pez(p) < e.abre) return; sumaPez(p, -e.abre); o[sel] = { n: OPS_INI, s: [] }; }
    else if ('puesto' in d) { const c = costoPuesto(ab.n); if (ab.n >= OPS_MAX || pez(p) < c) return; sumaPez(p, -c); ab.n++; }
    else if (d.saca) { n = cobrar(ab.s[+d.saca]); ab.s[+d.saca] = null; }   // al sacarlo cobra lo que llevaba
    else if ('recoge' in d) n = ab.s.reduce((s, x) => s + (x ? cobrar(x) : 0), 0);
    else return;
    sumaPez(p, n); store.set(p); updPez(); renderHuevos(); dibuja();
    if (n) flotaPez(n, ev.clientX, ev.clientY);
  });
  const reloj = setInterval(() => {   // solo los contadores: redibujar todo cortaría los clics
    if (!m.isConnected) return clearInterval(reloj);
    const ab = ops(store.get())[sel]; if (!ab) return;
    box.querySelectorAll('[data-acum]').forEach(s => { const x = ab.s[+s.dataset.acum]; if (x) s.innerHTML = txtAcum(x); });
    const r = box.querySelector('[data-recoge]'); if (r) { r.innerHTML = `Recoger ${total(ab)} ${PEZ_ICO}`; r.disabled = !total(ab); }
  }, 1000);
  dibuja();
  box.querySelector('[data-x]').focus();
}

// selector de gatos libres con el oficio del escenario; listo() redibuja las operaciones
function elegirMichi(sel, i, listo) {
  const p = store.get(), e = OPS.find(x => x.id === sel), col = p.col || {}, libre = k => col[k] - trabajando(p, k);
  const ks = Object.keys(col).filter(k => pieza(k).g.of === e.of && libre(k) > 0).sort((a, b) => pezMin(b) - pezMin(a));
  const { m, cerrar } = ventana('Elegir michi', `<h3 style="font-size:22px;display:flex;gap:8px;align-items:center;justify-content:center">${ico(e.mueble, e.col)} ¿Quién trabaja aquí?</h3>
    <div class="sub" style="color:var(--ink-3);font-size:14px;margin:4px 0 12px">Solo ${e.quien}. Producen más según su rareza y su variante.</div>
    ${ks.length ? `<div class="g-grid">${ks.map(k => { const pz = pieza(k);
      return `<button class="g-card si v-${VAR[pz.v].id}" style="--rc:${pz.g.rar.color}" data-k="${k}">${gatoSVG(pz.g, 56)}<b>${pz.g.name}</b><small>${VAR[pz.v].name} · libres ${libre(k)}</small><span class="o-rate">+${pezMin(k)} ${PEZ_ICO}/min</span></button>`; }).join('')}</div>`
      : `<p style="color:var(--ink-2)">No tienes ${e.quien} libres. Consíguelos en el gachapón o en los huevos.</p>`}
    <div class="qnav" style="justify-content:center;margin-top:14px"><button class="btn btn-ghost">Cerrar</button></div>`, 'o-pick');
  m.querySelector('.g-box').addEventListener('click', ev => {
    const b = ev.target.closest('button'); if (!b) return;
    const k = b.dataset.k, q = store.get(), ab = ops(q)[sel];
    if (k && ab && !ab.s[i] && (q.col[k] || 0) - trabajando(q, k) > 0) { ab.s[i] = { k, t: Date.now() }; store.set(q); }
    cerrar(); listo();
  });
  (m.querySelector('[data-k]') || m.querySelector('.btn')).focus();
}
