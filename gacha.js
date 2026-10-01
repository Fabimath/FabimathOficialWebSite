/* Gachapón de gatitos (PAES Fabimath): se canjean 10 ⭐ por un gato al azar sacado de una máquina de garras.
   Solo coleccionables: no dan pistas. 25 gatos (5 por rareza) y 5 variantes de color por gato.
   Colección guardada en el mismo objeto del avance: col = { "idGato:variante": veces }.
   Se carga antes del script principal; usa $, store, CAT_PX y updPts solo al ejecutarse. */

const G_COST = 10;
// w = peso. Cada rareza, cada gato dentro de su rareza y cada variante es menos probable que la anterior.
const RAR = [
  { id: 'comun',      name: 'Común',      w: 55, color: '#8e8e93' },
  { id: 'raro',       name: 'Raro',       w: 27, color: '#2f7de1' },
  { id: 'epico',      name: 'Épico',      w: 12, color: '#8a4fe0' },
  { id: 'legendario', name: 'Legendario', w: 5,  color: '#e0a000' },
  { id: 'mitico',     name: 'Mítico',     w: 1,  color: '#e8342a' }
];
const CAT_W = [30, 25, 20, 15, 10];
const VAR = [
  { id: 'normal',   name: 'Normal',   w: 70, dot: '#d8d8dc' },
  { id: 'oro',      name: 'Oro',      w: 15, dot: '#f5c542' },
  { id: 'diamante', name: 'Diamante', w: 9,  dot: '#7fe0ff' },
  { id: 'arcoiris', name: 'Arcoíris', w: 5,  dot: 'linear-gradient(90deg,#ff5e5e,#ffe45c,#5fd97a,#4fa8ff,#b57be0)' },
  { id: 'platino',  name: 'Platino',  w: 1,  dot: '#e8e8ec' }
];
// [id, nombre, cuerpo, sombra, patrón]; patrón: liso, rayas, manchas, calico, siames, tuxedo
const GATOS = [
  ['naranjo', 'Michi Naranjo', '#ff9a3c', '#e07a1f', 'liso'],
  ['gris', 'Gato Gris', '#a7a7ad', '#7d7d84', 'rayas'],
  ['pelusa', 'Pelusa Blanca', '#f4f1ea', '#d8d2c4', 'liso'],
  ['negrito', 'Negrito', '#3a3340', '#241f29', 'liso'],
  ['atigrado', 'Atigrado', '#c8935a', '#8a5a2b', 'rayas'],
  ['calico', 'Calicó', '#f2e6d8', '#e8892c', 'calico'],
  ['siames', 'Siamés', '#efe0c8', '#5b4030', 'siames'],
  ['tuxedo', 'Tuxedo', '#2d2a32', '#1b1920', 'tuxedo'],
  ['carey', 'Carey', '#5a3b2a', '#d98a3a', 'manchas'],
  ['ruso', 'Azul Ruso', '#7f93a8', '#5d7085', 'liso'],
  ['mate', 'Gato Matemático', '#7c5cf0', '#5a3cc9', 'rayas'],
  ['astro', 'Gato Astronauta', '#dfe7f5', '#9fb3d6', 'tuxedo'],
  ['sakura', 'Gato Sakura', '#ffb3cf', '#e98ab0', 'manchas'],
  ['lima', 'Gato Lima', '#9be564', '#62b33a', 'rayas'],
  ['nube', 'Gato Nube', '#cfe9ff', '#9ccbf0', 'manchas'],
  ['fenix', 'Gato Fénix', '#ff6a3d', '#ffb400', 'rayas'],
  ['dragon', 'Gato Dragón', '#2fbf8f', '#1b8a65', 'manchas'],
  ['lunar', 'Gato Lunar', '#2b3a67', '#f5e6a8', 'manchas'],
  ['samurai', 'Gato Samurái', '#c0392b', '#7f1d14', 'rayas'],
  ['faraon', 'Gato Faraón', '#e6c27a', '#2c5aa0', 'rayas'],
  ['galaxia', 'Gato Galaxia', '#2a1458', '#ff7ae0', 'manchas'],
  ['fantasma', 'Gato Fantasma', '#e9f2ff', '#b8c8e8', 'liso'],
  ['lava', 'Gato Lava', '#3a0d0d', '#ff5a1f', 'rayas'],
  ['cristal', 'Gato Cristal', '#bff6ff', '#ffffff', 'manchas'],
  ['fabimath', 'Gato Fabimath', '#e8680c', '#ffd166', 'rayas']
].map(([id, name, body, shade, pat], i) => ({ id, name, body, shade, pat, rar: RAR[Math.floor(i / 5)], w: CAT_W[i % 5] }));

/* ---------- dibujo: el mismo gato pixel de la tienda, con patrón y accesorio según la rareza ---------- */
function gatoSVG(g, size, oculto) {
  const col = { K: '#1a1008', B: g.body, b: g.shade, W: '#ffffff', E: '#1a1008', P: '#ff9ecb', Y: '#ffd75e', R: '#e8342a' };
  if (g.rar.id !== 'comun') col.Y = { raro: '#4fa8ff', epico: '#b57be0', legendario: '#f5c542', mitico: '#ff7ae0' }[g.rar.id];
  const color = (ch, x, y) => {
    if (oculto) return ch === 'K' ? '#b9b9bf' : '#d6d6db';
    if (ch !== 'B') return col[ch];
    const p = g.pat;
    if (p === 'rayas' && y >= 4 && y <= 13 && x % 4 === 1) return g.shade;
    if (p === 'manchas' && (x * 7 + y * 13) % 11 < 2) return g.shade;
    if (p === 'calico') { if ((x * 7 + y * 13) % 11 < 3) return g.shade; if ((x * 5 + y * 3) % 13 < 2) return '#2d2a32'; }
    if (p === 'siames' && (y <= 3 || (y >= 7 && y <= 10 && x >= 6 && x <= 13) || y >= 14)) return g.shade;
    if (p === 'tuxedo' && y >= 11 && x >= 7 && x <= 12) return '#ffffff';
    return g.body;
  };
  let r = '';
  CAT_PX.forEach((row, y) => [...row].forEach((ch, x) => { if (col[ch]) r += `<rect x="${x}" y="${y}" width="1.02" height="1.02" fill="${color(ch, x, y)}"/>`; }));
  const px = (pts, c) => pts.map(([x, y]) => `<rect x="${x}" y="${y}" width="1.02" height="1.02" fill="${c}"/>`).join('');
  let extra = '';
  if (!oculto && g.rar.id === 'epico') extra = px([[7, -1], [8, -1], [11, -1], [12, -1], [7, -2], [12, -2], [9, -1], [10, -1]], '#ff5ea8') + px([[9, -2], [10, -2]], '#c2185b');
  if (!oculto && g.rar.id === 'legendario') extra = px([[6, -1], [7, -1], [8, -1], [9, -1], [10, -1], [11, -1], [12, -1], [13, -1], [6, -2], [9, -2], [10, -2], [13, -2], [6, -3], [9, -3], [10, -3], [13, -3]], '#f5c542') + px([[8, -2], [11, -2]], '#e8342a');
  if (!oculto && g.rar.id === 'mitico') extra = px([[7, -3], [8, -3], [9, -3], [10, -3], [11, -3], [12, -3], [6, -2], [13, -2]], '#ffe45c') + px([[2, -2], [17, -1], [1, 2]], '#ffffff');
  const q = oculto ? '<text x="10" y="11" font-size="7" font-weight="800" text-anchor="middle" fill="#8e8e93" font-family="system-ui">?</text>' : '';
  return `<svg viewBox="0 -4 20 20" width="${size}" height="${size}" shape-rendering="crispEdges" role="img" aria-label="${oculto ? 'Gato por descubrir' : g.name}">${r}${extra}${q}</svg>`;
}

/* ---------- sorteo y guardado ---------- */
const sortear = list => { let x = Math.random() * list.reduce((s, o) => s + o.w, 0); return list.find(o => (x -= o.w) < 0) || list[list.length - 1]; };
function tirar() {
  const p = store.get();
  if ((p.pts || 0) < G_COST) return null;
  const rar = sortear(RAR), g = sortear(GATOS.filter(c => c.rar === rar)), v = sortear(VAR), k = g.id + ':' + v.id;
  p.col = p.col || {};
  const antes = p.col[k] || 0, gatoNuevo = !VAR.some(x => p.col[g.id + ':' + x.id]);
  p.col[k] = antes + 1; p.pts -= G_COST; store.set(p); updPts();   // se guarda antes de la animación: recargar no pierde el gato
  return { g, v, veces: antes + 1, gatoNuevo };
}

/* ---------- música: chiptune con Web Audio, sin archivos ---------- */
let AC = null;
const mudo = () => localStorage.getItem('gacha_mute') === '1';
function nota(f, t, d, tipo = 'square', vol = 0.04) {
  const o = AC.createOscillator(), g = AC.createGain();
  o.type = tipo; o.frequency.value = f;
  g.gain.setValueAtTime(vol, AC.currentTime + t); g.gain.exponentialRampToValueAtTime(0.0001, AC.currentTime + t + d);
  o.connect(g).connect(AC.destination); o.start(AC.currentTime + t); o.stop(AC.currentTime + t + d + 0.02);
}
const HZ = n => 440 * Math.pow(2, (n - 69) / 12);   // número MIDI a frecuencia
const audio = () => { AC = AC || new (window.AudioContext || window.webkitAudioContext)(); AC.resume(); };
function musicaMaquina(seg) {
  if (mudo()) return;
  audio();
  const mel = [72, 76, 79, 76, 74, 77, 81, 77], baj = [48, 48, 50, 50];
  for (let i = 0; i * 0.15 < seg; i++) { nota(HZ(mel[i % 8]), i * 0.15, 0.12); if (i % 2 === 0) nota(HZ(baj[(i / 2 | 0) % 4]), i * 0.15, 0.25, 'triangle', 0.06); }
}
function musicaPremio(nivel) {
  if (mudo()) return;
  audio();
  const fan = [[72, 76, 79], [72, 76, 79, 84], [72, 76, 79, 84, 88], [72, 76, 79, 84, 88, 91, 96], [72, 76, 79, 84, 88, 91, 96, 100, 103]][nivel];
  fan.forEach((n, i) => { nota(HZ(n), i * 0.09, 0.18, 'square', 0.05); nota(HZ(n - 12), i * 0.09, 0.18, 'triangle', 0.05); });
  nota(HZ(fan[fan.length - 1]), fan.length * 0.09, 0.6, 'square', 0.05);
}

/* ---------- interfaz ---------- */
document.head.insertAdjacentHTML('beforeend', `<style>
  .gacha .top { display: flex; flex-wrap: wrap; gap: 10px; align-items: center; margin-bottom: 16px; }
  .gacha .prog { font-size: 14px; color: var(--ink-3); }
  .gacha details { font-size: 13px; color: var(--ink-3); margin-bottom: 14px; }
  .gacha details summary { cursor: pointer; }
  .gacha details p { margin-top: 6px; line-height: 1.6; }
  .g-rar { font-size: 13px; font-weight: 700; letter-spacing: .04em; text-transform: uppercase; margin: 18px 0 8px; }
  .g-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(118px, 1fr)); gap: 10px; }
  .g-card { background: var(--bg); border: 1px solid var(--line); border-radius: 16px; padding: 10px 6px 8px; text-align: center; font: inherit; cursor: default; }
  .g-card.si { cursor: pointer; border-color: var(--rc); box-shadow: inset 0 0 0 1px var(--rc); }
  .g-card b { display: block; font-size: 13px; line-height: 1.2; margin-top: 4px; min-height: 2.4em; }
  .g-card small { display: block; font-size: 11.5px; color: var(--ink-3); }
  .g-dots { display: flex; gap: 4px; justify-content: center; margin-top: 6px; }
  .g-dots i { width: 9px; height: 9px; border-radius: 50%; background: #ececf0; border: 1px solid rgba(0,0,0,.12); }
  .v-oro svg { filter: sepia(1) saturate(4) hue-rotate(-12deg) brightness(1.08) drop-shadow(0 0 5px #f5c542); }
  .v-diamante svg { filter: sepia(1) saturate(3) hue-rotate(150deg) brightness(1.18) drop-shadow(0 0 5px #7fe0ff); }
  .v-platino svg { filter: grayscale(1) brightness(1.7) contrast(1.05) drop-shadow(0 0 5px #9a9aa2); }
  .v-arcoiris svg { animation: g-rb 2.5s linear infinite; }
  @keyframes g-rb { from { filter: saturate(1.8) hue-rotate(0deg) drop-shadow(0 0 5px #ff7ae0); } to { filter: saturate(1.8) hue-rotate(360deg) drop-shadow(0 0 5px #ff7ae0); } }
  .g-modal { position: fixed; inset: 0; z-index: 60; background: rgba(0,0,0,.55); display: grid; place-items: center; padding: 16px; }
  .g-box { background: var(--paper); border-radius: 24px; padding: 22px; width: min(420px, 100%); text-align: center; box-shadow: 0 30px 80px rgba(0,0,0,.35); }
  .g-mach { position: relative; height: 330px; border-radius: 18px; background: linear-gradient(#ffb35c, #e8680c); padding: 14px 14px 52px; }
  .g-glass { position: relative; height: 100%; border-radius: 10px; overflow: hidden; background: linear-gradient(160deg, #eaf6ff, #c9e6ff); box-shadow: inset 0 0 0 3px rgba(255,255,255,.6); }
  .g-rail { position: absolute; top: 0; left: 0; right: 0; height: 10px; background: #8e8e93; }
  .g-claw { position: absolute; top: 4px; left: 70%; width: 44px; margin-left: -22px; transition: left .9s var(--ease), top 1s ease-in-out; }
  .g-claw .cab { position: absolute; bottom: 100%; left: 21px; width: 2px; height: 400px; background: #555; }
  .g-claw .hd { height: 14px; background: #6e6e73; border-radius: 4px 4px 2px 2px; }
  .g-claw .l, .g-claw .r { position: absolute; top: 12px; width: 5px; height: 26px; background: #6e6e73; border-radius: 3px; transition: transform .3s; }
  .g-claw .l { left: 4px; transform-origin: top; transform: rotate(28deg); }
  .g-claw .r { right: 4px; transform-origin: top; transform: rotate(-28deg); }
  .g-claw.cerrada .l { transform: rotate(8deg); } .g-claw.cerrada .r { transform: rotate(-8deg); }
  .g-cap { width: 34px; height: 34px; border-radius: 50%; border: 2px solid rgba(0,0,0,.25); background: linear-gradient(180deg, var(--cc) 50%, #fff 50%); }
  .g-claw .g-cap { position: absolute; top: 22px; left: 5px; transition: top .5s ease-in; }
  .g-pile .g-cap { position: absolute; }
  .g-chute { position: absolute; bottom: 0; left: 8px; width: 60px; height: 34px; background: rgba(0,0,0,.25); border-radius: 8px 8px 0 0; }
  .g-mach .g-label { position: absolute; bottom: 14px; left: 0; right: 0; color: #fff; font-weight: 800; letter-spacing: .12em; font-size: 15px; }
  .g-rev h3 { font-size: 26px; margin-top: 8px; }
  .g-rev .tag { display: inline-block; color: #fff; font-size: 12px; font-weight: 700; letter-spacing: .05em; padding: 4px 10px; border-radius: 99px; margin: 6px 3px 0; }
  .g-rev p { color: var(--ink-2); margin: 10px 0 16px; }
  .g-rev .pop { animation: g-pop .6s var(--ease) both; display: inline-block; }
  @keyframes g-pop { from { transform: scale(.2) rotate(-12deg); opacity: 0; } to { transform: none; opacity: 1; } }
  @media (prefers-reduced-motion: reduce) { .v-arcoiris svg { animation: none; filter: saturate(1.8) drop-shadow(0 0 5px #ff7ae0); } .g-rev .pop { animation: none; } }
</style>`);

const vista = {};   // gato -> índice de variante mostrada en la galería (clic para cambiar)
function renderGacha(prog) {
  const el = $('gacha'); if (!el) return;
  const col = prog.col || {}, pts = prog.pts || 0;
  const tiene = g => VAR.filter(v => col[g.id + ':' + v.id]);
  const nGatos = GATOS.filter(g => tiene(g).length).length, nVar = Object.keys(col).length;
  const pctR = r => (r.w / RAR.reduce((s, x) => s + x.w, 0) * 100).toLocaleString('es-CL', { maximumFractionDigits: 1 });
  el.innerHTML = `<h3>🎰 Gachapón de gatitos</h3>
    <div class="sub">Canjea ⭐ ${G_COST} por un gato al azar de la máquina de garras. Son solo de colección: no dan pistas. Pueden salir repetidos.</div>
    <div class="top"><button class="btn btn-primary" id="gPlay" ${pts < G_COST ? 'disabled' : ''}>Jugar ⭐ ${G_COST}</button>
      <button class="btn btn-ghost" id="gMute" aria-label="Sonido">${mudo() ? '🔇' : '🔊'}</button>
      <span class="prog">${nGatos}/${GATOS.length} gatos · ${nVar}/${GATOS.length * VAR.length} con variantes${pts < G_COST ? ` · te faltan ⭐ ${G_COST - pts}` : ''}</span></div>
    <details><summary>Probabilidades</summary><p>Rareza: ${RAR.map(r => `${r.name} ${pctR(r)} %`).join(' · ')}.<br>
      Dentro de cada rareza, cada gato sale menos que el anterior (${CAT_W.join(', ')} %).<br>
      Variante: ${VAR.map(v => `${v.name} ${v.w} %`).join(' · ')}.</p></details>` +
    RAR.map(r => `<div class="g-rar" style="color:${r.color}">${r.name}</div><div class="g-grid">` +
      GATOS.filter(g => g.rar === r).map(g => {
        const vs = tiene(g);
        if (!vs.length) return `<div class="g-card">${gatoSVG(g, 72, true)}<b>???</b><small>sin descubrir</small></div>`;
        const v = vs[(vista[g.id] || 0) % vs.length], total = vs.reduce((s, x) => s + col[g.id + ':' + x.id], 0);
        return `<button class="g-card si v-${v.id}" style="--rc:${r.color}" data-g="${g.id}" title="${vs.length > 1 ? 'Clic para ver otra variante' : ''}">${gatoSVG(g, 72)}<b>${g.name}</b><small>${v.name} · tienes ${total}</small>
          <span class="g-dots">${VAR.map(x => `<i title="${x.name}${col[g.id + ':' + x.id] ? ' ×' + col[g.id + ':' + x.id] : ' (falta)'}" style="${col[g.id + ':' + x.id] ? 'background:' + x.dot : ''}"></i>`).join('')}</span></button>`;
      }).join('') + '</div>').join('');
  $('gPlay').addEventListener('click', jugar);
  $('gMute').addEventListener('click', () => { localStorage.setItem('gacha_mute', mudo() ? '0' : '1'); renderGacha(store.get()); });
  el.querySelectorAll('[data-g]').forEach(b => b.addEventListener('click', () => { vista[b.dataset.g] = (vista[b.dataset.g] || 0) + 1; renderGacha(store.get()); }));
}

const espera = ms => new Promise(r => setTimeout(r, ms));
async function jugar() {
  const res = tirar(); if (!res) return;
  const { g, v, veces, gatoNuevo } = res, nivel = RAR.indexOf(g.rar);
  const capCol = ['#ff9a3c', '#4fa8ff', '#e85ad2', '#5fd97a', '#ffd75e'];
  const pila = Array.from({ length: 14 }, (_, i) => `<div class="g-cap" style="--cc:${capCol[i % 5]};left:${70 + (i % 7) * 34 + (i > 6 ? 17 : 0)}px;bottom:${i > 6 ? 28 : 0}px"></div>`).join('');
  const m = document.createElement('div');
  m.className = 'g-modal'; m.setAttribute('role', 'dialog'); m.setAttribute('aria-modal', 'true'); m.setAttribute('aria-label', 'Gachapón');
  m.innerHTML = `<div class="g-box"><div class="g-mach"><div class="g-glass"><div class="g-rail"></div>
    <div class="g-pile">${pila}</div><div class="g-chute"></div>
    <div class="g-claw" id="gClaw"><div class="cab"></div><div class="hd"></div><i class="l"></i><i class="r"></i></div></div>
    <div class="g-label">FABI · GACHA</div></div></div>`;
  document.body.appendChild(m);
  const claw = m.querySelector('#gClaw'), glass = m.querySelector('.g-glass'), box = m.querySelector('.g-box');
  const rapido = matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!rapido) {
    musicaMaquina(5);
    const objetivo = 90 + Math.random() * (glass.clientWidth - 140);
    await espera(50); claw.style.left = objetivo + 'px'; await espera(950);
    claw.style.top = (glass.clientHeight - 95) + 'px'; await espera(1050);
    claw.classList.add('cerrada');
    const cap = document.createElement('div'); cap.className = 'g-cap'; cap.style.setProperty('--cc', capCol[nivel]); claw.appendChild(cap);
    const cerca = [...m.querySelectorAll('.g-pile .g-cap')].sort((a, b) => Math.abs(a.offsetLeft - objetivo) - Math.abs(b.offsetLeft - objetivo))[0];
    if (cerca) cerca.style.visibility = 'hidden';
    await espera(350); claw.style.top = '4px'; await espera(1050);
    claw.style.left = '38px'; await espera(950);
    claw.classList.remove('cerrada'); cap.style.top = (glass.clientHeight + 20) + 'px'; await espera(650);
  }
  musicaPremio(nivel);
  box.innerHTML = `<div class="g-rev"><div class="pop v-${v.id}">${gatoSVG(g, 170)}</div>
    <h3>${g.name}</h3><span class="tag" style="background:${g.rar.color}">${g.rar.name}</span><span class="tag" style="background:${v.id === 'arcoiris' ? v.dot : v.id === 'normal' ? '#8e8e93' : v.dot};color:${['oro', 'diamante', 'platino'].includes(v.id) ? '#1d1d1f' : '#fff'}">${v.name}</span>
    <p>${gatoNuevo ? '¡Gato nuevo para tu colección!' : veces === 1 ? '¡Variante nueva de este gato!' : `Repetido: ya tienes ${veces} de este gato en ${v.name.toLowerCase()}.`}</p>
    <div class="qnav" style="justify-content:center"><button class="btn btn-ghost" id="gClose">Cerrar</button><button class="btn btn-primary" id="gAgain" ${(store.get().pts || 0) < G_COST ? 'disabled' : ''}>Otra vez ⭐ ${G_COST}</button></div></div>`;
  const cerrar = () => { m.remove(); document.removeEventListener('keydown', esc); renderGacha(store.get()); renderShop(store.get()); };
  const esc = e => { if (e.key === 'Escape') cerrar(); };
  document.addEventListener('keydown', esc);
  m.querySelector('#gClose').addEventListener('click', cerrar);
  m.querySelector('#gAgain').addEventListener('click', () => { cerrar(); jugar(); });
  m.querySelector('#gClose').focus();
}
