/* Tamagotchi de gatitos (beta): consola fija a la derecha con un huevo que tarda de 30 min (común) a 8 h (mítico) en abrir
   (cada clic le quita 5 s). Al nacer el gato hace popó y pide churu; «Guardar» lo manda a la colección
   del gachapón y da 🐟 según su rareza (PEZ_GUARDA); cada evolución da PEZ_EVO 🐟. Pescados (p.pez) solo salen de aquí y de la granja, y compran huevos.
   También tiene el estilo de la variante Galáctico de gacha.js (morada, estrellas moradas y aura rosa).
   Se carga después de gacha.js; estado en p.tama = { huevo, nace } o { gato, comio, popo, racha, evo }.
   Con el gato en la consola, cada respuesta (tamaRespuesta) da un mensaje y las rachas de 10 correctas lo hacen evolucionar de variante. */

const T_HUEVO = r => 30 * 60e3 * 2 ** r, T_CLIC = 5e3;   // común 30 min, raro 1 h, épico 2 h, legendario 4 h, mítico 8 h
// pierde un corazón (de 4) y hace popó (hasta POPO_MAX) cada 5 a 10 min, al azar: t.ritmo se sortea al comer, t.proxPopo tras cada popó
const azarMs = () => (5 + Math.random() * 5) * 60e3, POPO_MAX = 3;
const HUEVO_COST = [2, 5, 12, 30, 80];
const PEZ_GUARDA = r => r + 1, PEZ_EVO = 2, PEZ_CUIDA = 1;   // común 1 … mítico 5
const PEZ_GRANJA = 0.3;               // cada 3 s, prob. de que un gato de la granja suelte un pescado

const pez = p => window.esAdmin ? Infinity : p.pez || 0;
function sumaPez(p, n) { if (!window.esAdmin) p.pez = (p.pez || 0) + n; }
function updPez() { const el = $('pezPill'); if (el) el.textContent = '🐟 ' + (window.esAdmin ? '∞' : store.get().pez || 0); }
function flota(txt, x, y) {
  const s = document.createElement('span'); s.className = 't-flota'; s.textContent = txt;
  s.style.left = x + 'px'; s.style.top = y + 'px'; document.body.appendChild(s); setTimeout(() => s.remove(), 1000);
}

/* ---------- huevo pixel, con grietas a medida que se acerca la hora ---------- */
const HUEVO_PX = ["....KKKK....", "...KAAAAK...", "..KAWAAAAK..", "..KWAASAAK..", ".KAAAAAAAAK.", ".KASAAAASAK.", "KAAAAAAAAAAK", "KAAAASAAAAAK",
  "KAAAAAAAAAAK", "KASAAAAASAAK", "KAAAAAAAAAAK", ".KAAAASAAAK.", ".KAAAAAAAAK.", "..KAAAAAAK..", "...KKKKKK..."];
const GRIETAS = [[[5, 3], [6, 4], [5, 5], [6, 6]], [[2, 8], [3, 9], [4, 8], [8, 9], [9, 10], [8, 11]]];
function huevoSVG(r, grietas, size) {
  const col = { K: '#1a1008', A: RAR[r].color, S: '#ffffffaa', W: '#ffffff' };
  let s = '';
  HUEVO_PX.forEach((row, y) => [...row].forEach((ch, x) => { if (col[ch]) s += `<rect x="${x}" y="${y}" width="1.02" height="1.02" fill="${col[ch]}"/>`; }));
  GRIETAS.slice(0, grietas).flat().forEach(([x, y]) => s += `<rect x="${x}" y="${y}" width="1.02" height="1.02" fill="#1a1008"/>`);
  return `<svg viewBox="0 0 12 15" width="${size}" height="${size * 1.25}" shape-rendering="crispEdges" role="img" aria-label="Huevo ${RAR[r].name.toLowerCase()}">${s}</svg>`;
}

/* ---------- estrellas moradas de la variante galáctica ---------- */
const ESTRELLAS = encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">${
  [[12, 18, 6], [86, 14, 7], [80, 84, 5], [16, 80, 6], [50, 4, 4], [96, 52, 4], [4, 48, 5], [66, 30, 3], [32, 62, 3]].map(([x, y, r]) =>
    `<path d="M${x} ${y - r}L${x + r / 4} ${y - r / 4}L${x + r} ${y}L${x + r / 4} ${y + r / 4}L${x} ${y + r}L${x - r / 4} ${y + r / 4}L${x - r} ${y}L${x - r / 4} ${y - r / 4}Z" fill="${r > 5 ? '#b57be0' : '#e0b8ff'}"/>`).join('')}</svg>`);

document.head.insertAdjacentHTML('beforeend', `<style>
  .v-galactico svg { filter: sepia(1) saturate(5) hue-rotate(235deg) brightness(.95) drop-shadow(0 0 3px #ff9be8) drop-shadow(0 0 10px #ff5ec4); }
  .v-galactico:not(.g-gato) { position: relative; }
  .v-galactico { isolation: isolate; }
  .v-galactico::before, .v-galactico::after { content: ''; position: absolute; pointer-events: none; }
  .v-galactico::before { inset: -12%; z-index: -1; border-radius: 50%; background: radial-gradient(circle, rgba(255,122,224,.75), rgba(255,94,196,.35) 40%, transparent 68%); animation: t-aura 2.2s ease-in-out infinite; }
  .v-galactico::after { inset: -8%; z-index: 1; background: url("data:image/svg+xml,${ESTRELLAS}") center / 100% 100% no-repeat; animation: t-titila 1.4s ease-in-out infinite alternate; }
  @keyframes t-aura { 50% { transform: scale(1.12); opacity: .7; } }
  @keyframes t-titila { from { opacity: .3; transform: rotate(-4deg) scale(.95); } to { opacity: 1; transform: rotate(4deg) scale(1.05); } }
  .g-card.v-galactico { background: linear-gradient(160deg, #fff, #f6ecff); box-shadow: inset 0 0 0 1px var(--rc), 0 0 16px rgba(255,122,224,.6); }

  /* consola pixelada con forma de tamagotchi: la cáscara es un SVG de píxeles (cascaraSVG); marco, botones y globos
     tienen esquinas en escalón con .pxc y el contorno oscuro sale de un drop-shadow en el contenedor */
  .pxc { --p: 4px; clip-path: polygon(0 calc(var(--p) * 2), var(--p) calc(var(--p) * 2), var(--p) var(--p), calc(var(--p) * 2) var(--p), calc(var(--p) * 2) 0,
    calc(100% - var(--p) * 2) 0, calc(100% - var(--p) * 2) var(--p), calc(100% - var(--p)) var(--p), calc(100% - var(--p)) calc(var(--p) * 2), 100% calc(var(--p) * 2),
    100% calc(100% - var(--p) * 2), calc(100% - var(--p)) calc(100% - var(--p) * 2), calc(100% - var(--p)) calc(100% - var(--p)), calc(100% - var(--p) * 2) calc(100% - var(--p)),
    calc(100% - var(--p) * 2) 100%, calc(var(--p) * 2) 100%, calc(var(--p) * 2) calc(100% - var(--p)), var(--p) calc(100% - var(--p)), var(--p) calc(100% - var(--p) * 2), 0 calc(100% - var(--p) * 2)); }
  .t-borde { filter: drop-shadow(2px 0 0 #3a1a05) drop-shadow(-2px 0 0 #3a1a05) drop-shadow(0 2px 0 #3a1a05) drop-shadow(0 -2px 0 #3a1a05); }
  .tama { position: fixed; right: 10px; bottom: 10px; scale: .8; transform-origin: right bottom; z-index: 50; width: 224px; user-select: none;
    font-family: ui-monospace, "Cascadia Mono", Consolas, "Courier New", monospace; font-weight: 700; }
  .tama .cascara { position: relative; height: 304px; }
  .tama .t-svg { position: absolute; inset: 0; filter: drop-shadow(4px 6px 0 rgba(58,26,5,.25)); }
  .tama .marca { position: absolute; top: 66px; left: 0; right: 0; text-align: center; color: #fff; font-size: 11px; letter-spacing: .12em; text-shadow: 2px 2px 0 #a94707; }
  .tama .marco { position: absolute; top: 86px; left: 36px; width: 152px; padding: 4px; background: #3a1a05; }
  .tama .marco-in { padding: 8px; background: #fff3e6; box-shadow: inset -4px -4px 0 #f0d2b4; }
  .tama .lcd { position: relative; height: 112px; overflow: hidden; cursor: pointer;
    background: linear-gradient(rgba(58,51,64,.05) 1px, transparent 1px) 0 0 / 4px 4px, linear-gradient(90deg, rgba(58,51,64,.05) 1px, transparent 1px) 0 0 / 4px 4px, #c4dc96;
    box-shadow: inset 0 0 0 4px #3a3340, inset 8px 8px 0 0 #aec77c; }
  .tama .fx { position: absolute; inset: 0; pointer-events: none; z-index: 3; }
  .tama .t-capa { position: absolute; }
  .tama .t-txt { color: #fff; font-size: 13px; text-shadow: 2px 0 0 #3a3340, -2px 0 0 #3a3340, 0 2px 0 #3a3340, 0 -2px 0 #3a3340; white-space: nowrap; }
  .tama .vida { position: absolute; top: 8px; left: 8px; display: flex; gap: 2px; }
  .tama .bicho { position: absolute; left: 50%; bottom: 10px; translate: -50% 0; }
  .tama .bicho.pasea { animation: t-pasea 7s steps(28) infinite; }
  .tama .bicho.triste svg { filter: grayscale(.6); }
  .tama .mueve { animation: t-mueve .35s steps(4); }
  @keyframes t-pasea { 0%, 100% { translate: -95% 0; scale: 1 1; } 45% { translate: -5% 0; scale: 1 1; } 50% { translate: -5% 0; scale: -1 1; } 95% { translate: -95% 0; scale: -1 1; } }
  @keyframes t-mueve { 25% { rotate: -14deg; } 75% { rotate: 14deg; } }
  .tama .popo { position: absolute; bottom: 6px; }
  .tama .dice { position: absolute; top: 26px; left: 50%; translate: -50% 0; z-index: 2; }
  .tama .dice span { display: block; --p: 2px; background: #fff; padding: 2px 7px; font-size: 10px; white-space: nowrap; color: #3a3340; }
  .tama .vacio { position: absolute; inset: 0; display: grid; place-items: center; padding: 14px; text-align: center; font-size: 11px; line-height: 1.4; color: #3a3340; }
  .tama .btns { position: absolute; top: 234px; left: 0; right: 0; display: flex; justify-content: center; gap: 10px; }
  .tama .btns button { --p: 6px; width: 38px; height: 38px; padding: 0; border: none; cursor: pointer; display: grid; place-items: center;
    background: #fff3e6; box-shadow: inset -4px -4px 0 #e0b48a, inset 4px 4px 0 #fff; }
  .tama .btns button:nth-child(2) { translate: 0 8px; }
  .tama .btns button:active:not(:disabled) { transform: translateY(3px); box-shadow: inset 4px 4px 0 #e0b48a; }
  .tama .btns button:disabled { opacity: .45; cursor: default; }
  .tama .info-w { width: fit-content; max-width: 224px; margin: 2px auto 0; }
  .tama .info { --p: 3px; background: #fff; color: #3a3340; font-size: 11px; line-height: 1.4; text-align: center; padding: 6px 10px; }
  .tama .info:empty { display: none; }
  .tama .nace { position: absolute; inset: 0; background: #fff; animation: g-flash .8s steps(6) forwards; }
  .tama .globo { position: absolute; right: calc(100% - 4px); top: 34px; width: 172px; animation: t-globo .3s steps(3); }
  .tama .globo > div { --p: 3px; background: var(--gc); padding: 8px 10px; font-size: 12px; line-height: 1.35; color: #3a3340; }
  .tama .globo::after { content: ''; position: absolute; right: -8px; top: 20px; width: 8px; height: 8px; background: var(--gc); }
  @keyframes t-globo { from { scale: .3; opacity: 0; } }
  @media (max-width: 760px) { .tama { scale: .5; bottom: 6px; right: 4px; } .g-acomp { scale: .8; transform-origin: left bottom; } }
  .t-flota { position: fixed; z-index: 200; font-weight: 800; font-size: 16px; color: #c2530a; pointer-events: none; translate: -50% -50%; animation: t-sube 1s ease-out forwards; text-shadow: 0 1px 0 #fff; }
  @keyframes t-sube { to { translate: -50% -180%; opacity: 0; } }
  .t-pez { position: absolute; z-index: 5; font-size: 24px; background: none; border: none; cursor: pointer; padding: 0; animation: t-cae .5s var(--ease); }
  @keyframes t-cae { from { translate: 0 -24px; opacity: 0; } }
  .huevos .g-card .btn { padding: 6px 14px; font-size: 14px; margin-top: 8px; }
  @media (prefers-reduced-motion: reduce) { .v-galactico::before, .v-galactico::after { animation: none; } }
</style>`);

/* ---------- consola ---------- */
const pxSVG = (rows, col, s) => {
  let r = '';
  rows.forEach((row, y) => [...row].forEach((ch, x) => { if (col[ch]) r += `<rect x="${x}" y="${y}" width="1.02" height="1.02" fill="${col[ch]}"/>`; }));
  return `<svg viewBox="0 0 ${rows[0].length} ${rows.length}" width="${rows[0].length * s}" height="${rows.length * s}" shape-rendering="crispEdges" aria-hidden="true">${r}</svg>`;
};
const K = '#3a1a05';
const CORAZON = [".KK.KK.", "KRRKRRK", "KRWRRRK", "KRRRRRK", ".KRRRK.", "..KRK..", "...K..."];
const POPO = ["....K....", "...KBK...", "..KBBBK..", "..KKKKK..", ".KBWBBBK.", ".KKKKKKK.", "KBBWBBBBK", "KKKKKKKKK"];
const CHURU = [".KKK.", "KWWWK", "KKKKK", "KPPPK", "KPYPK", "KPPPK", "KPYPK", "KPPPK", "KPPPK", ".KPK.", ".KPK.", "..K.."];
const ESCOBA = ["..HH..", "..HH..", "..HH..", "..HH..", "..HH..", "..HH..", "KKKKKK", "KRRRRK", "KYYYYK", "KYYYYK", "KYYYYK", "Y.Y.Y."];
const CAJA = [".KKKKKK.", "KLLLLLLK", "KKKKKKKK", "KBBYYBBK", "KBBYYBBK", "KBBBBBBK", "KKKKKKKK"];
const BRILLO = ["..Y..", "..W..", "YWWWY", "..W..", "..Y.."];
const C_CORAZON = { K, R: '#e8342a', W: '#fff' }, C_VACIO = { K, R: '#e8e3d6', W: '#e8e3d6' }, C_POPO = { K, B: '#8a5a2b', W: '#c8935a' };
const C_CHURU = { K, W: '#fff', P: '#ff9ecb', Y: '#ffd75e' }, C_ESCOBA = { K, H: '#8a5a2b', R: '#e8342a', Y: '#e6b84a' };
const C_CAJA = { K, L: '#e0b07a', B: '#c8935a', Y: '#ffd75e' }, C_BRILLO = { W: '#fff', Y: '#ffe45c' };

// cáscara de huevo de 56 × 76 píxeles (4 px c/u) con argolla, borde, luz arriba a la izquierda, sombra abajo y lunares
function cascaraSVG() {
  const W = 56, H = 76, yc = 46;
  const ancho = y => { const t = y < yc ? (yc - y) / 40 : (y - yc) / 30; return t >= 1 ? 0 : 27 * Math.sqrt(1 - t * t) * (y < yc ? 1 - 0.12 * t : 1); };
  const dentro = (x, y) => y >= 6 && y < H && Math.abs(x + 0.5 - 28) < ancho(y + 0.5);
  let r = '';
  for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
    let c = null;
    if (dentro(x, y)) {
      const w = ancho(y + 0.5), nx = (x + 0.5 - 28) / w, ny = (y + 0.5 - yc) / (y < yc ? 40 : 30);
      c = !dentro(x - 1, y) || !dentro(x + 1, y) || !dentro(x, y - 1) || !dentro(x, y + 1) ? K
        : nx * 0.7 + ny > 0.8 ? '#c2530a' : nx + ny * 0.8 < -0.85 ? '#ffb35c' : x % 6 === 3 && y % 6 === 3 ? '#ffc488' : '#f07c1e';
    } else if (y < 11) {
      const dd = Math.hypot(x + 0.5 - 28, y + 0.5 - 6);
      c = dd < 2.4 ? null : dd < 3.1 ? K : dd < 4.4 ? '#e4e4ea' : dd < 5.3 ? '#8e8e96' : dd < 6.1 ? K : null;
    }
    if (c) r += `<rect x="${x}" y="${y}" width="1.02" height="1.02" fill="${c}"/>`;
  }
  [[16, 14], [17, 14], [15, 15], [14, 16], [14, 17]].forEach(([x, y]) => r += `<rect x="${x}" y="${y}" width="1.02" height="1.02" fill="#fff"/>`);
  return `<svg class="t-svg" viewBox="0 0 ${W} ${H}" width="${W * 4}" height="${H * 4}" shape-rendering="crispEdges" aria-hidden="true">${r}</svg>`;
}

document.body.insertAdjacentHTML('beforeend', `<div class="tama" id="tama" aria-label="Consola de gatito">
  <div class="cascara">${cascaraSVG()}<div class="marca">FABI·MICHI</div>
    <div class="marco pxc"><div class="marco-in pxc"><div class="lcd" id="tLcd"></div></div></div>
    <div class="btns t-borde"><button class="pxc" id="tCome" title="Darle churu" aria-label="Darle churu">${pxSVG(CHURU, C_CHURU, 2.4)}</button><button class="pxc" id="tLimpia" title="Limpiar popó" aria-label="Limpiar popó">${pxSVG(ESCOBA, C_ESCOBA, 2.4)}</button><button class="pxc" id="tGuarda" title="Guardar en la colección (da 🐟 según su rareza)" aria-label="Guardar gatito">${pxSVG(CAJA, C_CAJA, 3)}</button></div></div>
  <div class="info-w t-borde"><div class="info pxc" id="tInfo"></div></div><div id="tGlobo"></div></div>`);

/* racha: cada RACHA correctas seguidas suma 1 al contador de evolución; con evoMeta(v) rachas el gato sube a la variante siguiente.
   Las rachas que pide se duplican en cada variante: normal → oro 10, oro → diamante 20, … platino → galáctico 160. */
const RACHA = 2, evoMeta = v => 10 * 2 ** v;
const MSG_BIEN = ['¡Miau! Así se hace 🐾', '¡Eres un crack!', '¡Purrfecto!', '¡Esa estuvo buenísima!', '¡Sigue así, humano!', '¡Me tienes orgulloso!', '¡Bien ahí, otra más!', '¡Cerebro de gato galáctico!'];
const MSG_MAL = ['Tranqui, de los errores se aprende 🐾', '¡Tú puedes! La próxima sale', 'Respira y lee con calma', 'Casi… revisa la pauta y sigue', 'Yo creo en ti, miau', 'Equivocarse también es practicar', 'Ánimo, que yo te acompaño'];
const azar = a => a[Math.random() * a.length | 0];

const hambre = t => Math.max(0, 4 - Math.floor((Date.now() - t.comio) / (t.ritmo || 7.5 * 60e3)));
const mmss = ms => { const s = Math.ceil(ms / 1000), d = n => String(n).padStart(2, '0'); return s >= 3600 ? `${s / 3600 | 0}:${d((s / 60 | 0) % 60)}:${d(s % 60)}` : `${s / 60 | 0}:${d(s % 60)}`; };
let firma = '';   // el LCD solo se redibuja cuando cambia lo que se ve: así no se cortan las animaciones
let ocupado = false;   // mientras corre la animación de comer o limpiar
function pinta() {
  const p = store.get(), t = p.tama;
  if (t && t.huevo !== undefined && Date.now() >= t.nace) return nacer();
  const lcd = $('tLcd'), info = $('tInfo');
  $('tCome').disabled = $('tGuarda').disabled = !t || !t.gato || ocupado;
  $('tLimpia').disabled = !t || !t.popo || ocupado;
  let f, html;
  if (!t) { f = 'vacio'; html = '<div class="vacio">CONSOLA VACÍA<br>compra un huevo<br>en la tienda</div>'; info.textContent = ''; }
  else if (t.gato === undefined) {
    const falta = t.nace - Date.now(), tot = T_HUEVO(t.huevo), gr = falta < tot / 3 ? 2 : falta < tot * 2 / 3 ? 1 : 0;
    f = 'huevo' + t.huevo + gr; html = `<div class="bicho" id="tBicho">${huevoSVG(t.huevo, gr, 64)}</div>`;
    info.innerHTML = `Huevo ${RAR[t.huevo].name.toLowerCase()} · ${mmss(falta)}<br>clic para que nazca antes`;
  } else {
    const pz = pieza(t.gato), v = VAR[pz.v], h = hambre(t), triste = !h || t.popo >= 2;
    f = [t.gato, h, t.popo].join();
    html = `<div class="vida">${[0, 1, 2, 3].map(i => pxSVG(CORAZON, i < h ? C_CORAZON : C_VACIO, 2)).join('')}</div>` +
      (triste ? `<div class="dice t-borde"><span class="pxc">${!h ? '¡TENGO HAMBRE!' : '¡LIMPIA AQUÍ!'}</span></div>` : '') +
      `<div class="bicho pasea ${triste ? 'triste' : ''}" id="tBicho"><div class="v-${v.id}" style="position:relative">${gatoSVG(pz.g, 64)}</div></div>` +
      Array.from({ length: t.popo }, (_, i) => `<span class="popo" style="left:${6 + i * 40}px">${pxSVG(POPO, C_POPO, 2)}</span>`).join('');
    const sig = VAR[pz.v + 1];
    info.innerHTML = `${pz.g.name}<br>${pz.g.rar.name} · ${v.name}<br>🔥 racha ${t.racha || 0}/${RACHA} · ` +
      (sig ? `⬆ ${t.evo || 0}/${evoMeta(pz.v)} a ${sig.name.toLowerCase()}` : 'nivel máximo');
  }
  if (f !== firma) { firma = f; lcd.innerHTML = html + '<div class="fx" id="tFx"></div>'; }
}
function nacer() {
  const p = store.get(), t = p.tama, g = sortear(GATOS.filter(c => c.rar === RAR[t.huevo])), v = sortear(VAR);
  p.tama = { gato: g.id + ':' + v.id, comio: Date.now(), ritmo: azarMs(), popo: 0, proxPopo: Date.now() + azarMs(), racha: 0, evo: 0 }; store.set(p);
  firma = ''; pinta(); destello();
  if (window.musicaPremio) musicaPremio(RAR.indexOf(g.rar));
}
function cambia(fn) { const p = store.get(); if (!p.tama) return; fn(p.tama, p); store.set(p); pinta(); }
const gatoEl = () => $('tBicho') && $('tBicho').firstElementChild;   // el hijo: el padre ya tiene la animación de pasear
function capa(html, x, y) {
  const d = document.createElement('div'); d.className = 't-capa'; d.innerHTML = html;
  d.style.left = x + 'px'; d.style.top = y + 'px'; $('tFx').appendChild(d); return d;
}
function destello() { const d = capa('', 0, 0); d.className = 'nace'; setTimeout(() => d.remove(), 900); }
function globo(txt, bien) {
  $('tGlobo').innerHTML = `<div class="globo t-borde" style="--gc:${bien ? '#e3f7cf' : '#ffe9d6'}"><div class="pxc">${txt}</div></div>`;
  clearTimeout(globo.t); globo.t = setTimeout(() => $('tGlobo').innerHTML = '', 3500);
}

/* ---------- animaciones de comer y limpiar: cortas y pedidas a propósito, así que corren aunque el sistema pida menos movimiento ----------
   Cuidarlo cuando lo necesita da PEZ_CUIDA 🐟: comer con algún corazón vacío, o limpiar popó (el botón solo se activa si hay). */
function premio(boton) {
  const p = store.get(); sumaPez(p, PEZ_CUIDA); store.set(p); updPez(); renderHuevos();
  const r = boton.getBoundingClientRect(); flota(`+${PEZ_CUIDA} 🐟`, r.left + r.width / 2, r.top - 10);
}
async function darComida() {
  if (ocupado) return;
  const necesita = hambre(store.get().tama) < 4;
  ocupado = true; pinta();
  const b = $('tBicho'), fx = $('tFx').getBoundingClientRect(), r = b.getBoundingClientRect();
  b.style.animationPlayState = 'paused';
  const x = r.left - fx.left + r.width / 2 - 6, y = r.top - fx.top + r.height * 0.3 - 29;
  const ch = capa(pxSVG(CHURU, C_CHURU, 2.4), x, -36);
  ch.style.transformOrigin = '50% 100%';
  await ch.animate([{ transform: 'translateY(0)' }, { transform: `translateY(${y + 36}px)` }], { duration: 550, easing: 'steps(8)', fill: 'forwards' }).finished;
  const nam = capa('<span class="t-txt">ÑAM ÑAM</span>', x - 22, y - 10);
  nam.animate([{ transform: 'translateY(0)', opacity: 1 }, { transform: 'translateY(-16px)', opacity: 0 }], { duration: 900, easing: 'steps(6)', fill: 'forwards' });
  ch.animate([{ transform: `translateY(${y + 36}px) scaleY(1)` }, { transform: `translateY(${y + 36}px) scaleY(.15)` }], { duration: 750, easing: 'steps(5)', fill: 'forwards' });
  const g = gatoEl(); if (g) await g.animate([{ transform: 'scale(1)' }, { transform: 'scale(1.15, .88)' }, { transform: 'scale(1)' }], { duration: 250, iterations: 3, easing: 'steps(3)' }).finished;
  ch.remove(); nam.remove();
  ocupado = false; b.style.animationPlayState = '';
  cambia(t => { t.comio = Date.now(); t.ritmo = azarMs(); }); if (necesita) premio($('tCome'));
  document.querySelectorAll('#tLcd .vida svg').forEach((h, i) => h.animate([{ transform: 'scale(.2)' }, { transform: 'scale(1.5)' }, { transform: 'scale(1)' }], { duration: 360, delay: i * 110, easing: 'steps(4)', fill: 'backwards' }));
}
async function limpiar() {
  if (ocupado) return;
  ocupado = true; pinta();
  const fx = $('tFx'), W = fx.clientWidth, H = fx.clientHeight, dur = 1100;
  const esc = capa(pxSVG(ESCOBA, C_ESCOBA, 2.4), -24, H - 38);
  esc.animate([{ transform: 'translateX(0) rotate(-25deg)' }, { transform: `translateX(${W / 2}px) rotate(25deg)` }, { transform: `translateX(${W + 30}px) rotate(-25deg)` }], { duration: dur, easing: 'steps(14)', fill: 'forwards' });
  document.querySelectorAll('#tLcd .popo').forEach(pp => {
    const d = (pp.offsetLeft + 24) / (W + 54) * dur;
    pp.animate([{ transform: 'none', opacity: 1 }, { transform: 'translateX(46px) rotate(90deg)', opacity: 0 }], { duration: 400, delay: d, easing: 'steps(4)', fill: 'forwards' });
    setTimeout(() => {
      const s = capa(pxSVG(BRILLO, C_BRILLO, 3), pp.offsetLeft + 2, pp.offsetTop - 12);
      s.animate([{ transform: 'scale(0)', opacity: 1 }, { transform: 'scale(1.5)', opacity: 0 }], { duration: 650, easing: 'steps(5)' }).finished.then(() => s.remove());
    }, d + 150);
  });
  await espera(dur + 150);
  esc.remove(); ocupado = false; cambia(t => { t.popo = 0; t.proxPopo = Date.now() + azarMs(); }); premio($('tLimpia'));
}

/* ---------- respuestas: mensaje, racha y evolución. paes.html llama tamaRespuesta(bien) en cada respuesta ---------- */
function tamaRespuesta(bien) {
  const p = store.get(), t = p.tama;
  if (!t || !t.gato) return;
  const v = pieza(t.gato).v;
  let msg = azar(bien ? MSG_BIEN : MSG_MAL), evo = null;
  t.racha = bien ? (t.racha || 0) + 1 : 0;
  if (t.racha >= RACHA && v < VAR.length - 1) {
    t.racha = 0; t.evo = (t.evo || 0) + 1;
    msg = `¡${RACHA} seguidas! Contador ${t.evo}/${evoMeta(v)} para ${VAR[v + 1].name.toLowerCase()}`;
    if (t.evo >= evoMeta(v)) { t.evo = 0; evo = VAR[v + 1]; t.gato = t.gato.split(':')[0] + ':' + evo.id; sumaPez(p, PEZ_EVO); msg = `¡EVOLUCIONÉ A ${evo.name.toUpperCase()}! ✨ +${PEZ_EVO} 🐟`; }
  } else if (t.racha >= RACHA) t.racha = 0;   // galáctico: ya no sube más
  store.set(p); pinta(); if (evo) { updPez(); renderHuevos(); }
  globo(msg, bien);
  const g = gatoEl(); if (!g) return;
  if (evo) {
    destello();
    gatoEl().animate([{ transform: 'scale(1) rotate(0)' }, { transform: 'scale(1.4) rotate(360deg)' }, { transform: 'scale(1) rotate(720deg)' }], { duration: 1200, easing: 'steps(12)' });
    if (window.musicaPremio) musicaPremio(Math.min(4, v + 1));
  } else g.animate(bien ? [{ transform: 'none' }, { transform: 'translateY(-14px)' }, { transform: 'none' }] : [{ transform: 'none' }, { transform: 'translateX(-5px)' }, { transform: 'translateX(5px)' }, { transform: 'none' }],
    { duration: 420, iterations: 2, easing: 'steps(4)' });
}

$('tLcd').addEventListener('click', e => {
  const t = store.get().tama; if (!t || ocupado) return;
  const b = gatoEl(); if (b) { b.classList.remove('mueve'); void b.offsetWidth; b.classList.add('mueve'); }
  if (t.gato === undefined) { cambia(t => t.nace -= T_CLIC); flota('−5 s', e.clientX, e.clientY); }
  else flota('❤', e.clientX, e.clientY);
});
$('tCome').addEventListener('click', darComida);
$('tLimpia').addEventListener('click', limpiar);
$('tGuarda').addEventListener('click', e => {
  const p = store.get(), t = p.tama; if (!t || !t.gato || ocupado) return;
  const n = PEZ_GUARDA(pieza(t.gato).r);
  p.col = p.col || {}; p.col[t.gato] = (p.col[t.gato] || 0) + 1; sumaPez(p, n); delete p.tama; store.set(p);
  flota(`+${n} 🐟`, e.clientX, e.clientY - 20); updPez(); renderHuevos(); renderGacha(store.get()); pinta();
});
setInterval(() => {
  const t = store.get().tama;
  if (!ocupado && t && t.gato && t.popo < POPO_MAX && Date.now() >= (t.proxPopo || 0)) cambia(t => { if (t.proxPopo) t.popo++; t.proxPopo = Date.now() + azarMs(); });   // gatos de antes: solo agenda
  else pinta();
}, 1000);

/* ---------- tienda de huevos ---------- */
function renderHuevos() {
  const el = $('huevos'); if (!el) return;
  const p = store.get(), ocupada = !!p.tama;
  el.innerHTML = `<h3>🥚 Tienda de huevos</h3><div class="sub">Se pagan con 🐟 pescados. El huevo va a la consola de la derecha; cada clic le quita 5 segundos.
    Los pescados salen al guardar un gatito (de 1 el común a 5 el mítico), cuando evoluciona (+2), al cuidarlo (+1 por darle churu cuando tiene hambre o limpiar su popó) y en la granja, donde los gatos los sueltan al azar.${ocupada ? ' <b>La consola ya tiene un michi: guárdalo para comprar otro huevo.</b>' : ''}</div>
    <div class="g-grid">${RAR.map((r, i) => `<div class="g-card si" style="--rc:${r.color}">${huevoSVG(i, 0, 56)}<b>Huevo ${r.name.toLowerCase()}</b>
      <small>gato ${r.name.toLowerCase()} al azar<br>abre en ${i ? 2 ** (i - 1) + (i > 1 ? ' horas' : ' hora') : '30 min'}</small><button class="btn btn-primary" data-huevo="${i}" ${ocupada || pez(p) < HUEVO_COST[i] ? 'disabled' : ''}>🐟 ${HUEVO_COST[i]}</button></div>`).join('')}</div>`;
  el.querySelectorAll('[data-huevo]').forEach(b => b.addEventListener('click', () => {
    const p = store.get(), i = +b.dataset.huevo;
    if (p.tama || pez(p) < HUEVO_COST[i]) return;
    sumaPez(p, -HUEVO_COST[i]); p.tama = { huevo: i, nace: Date.now() + T_HUEVO(i) }; store.set(p);
    updPez(); renderHuevos(); pinta();
  }));
}

/* ---------- granja: los gatos sueltan pescados al azar; clic para recogerlos ---------- */
const granjaBase = granja;
granja = function () {
  granjaBase();
  const park = $('gPark');
  const t = setInterval(() => {
    if (!park.isConnected) return clearInterval(t);
    const gs = park.querySelectorAll('.gt');
    if (!gs.length || Math.random() > PEZ_GRANJA) return;
    const c = gs[Math.random() * gs.length | 0], b = document.createElement('button');
    b.className = 't-pez'; b.textContent = '🐟'; b.title = 'Recoger pescado';
    b.style.left = parseFloat(c.style.left) + 16 + 'px'; b.style.top = parseFloat(c.style.top) + 40 + 'px';
    b.addEventListener('click', e => {
      e.stopPropagation();   // que no cuente como dejar comida en el pasto
      const p = store.get(); sumaPez(p, 1); store.set(p); updPez(); renderHuevos();
      flota('+1 🐟', e.clientX, e.clientY); b.remove();
    });
    park.appendChild(b); setTimeout(() => b.remove(), 10e3);
  }, 3000);
};

renderHuevos(); updPez(); pinta();
