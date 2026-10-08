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
  { id: 'platino',  name: 'Platino',  w: 1,  dot: '#e8e8ec' },
  { id: 'galactico', name: 'Galáctico', w: 0.3, dot: 'linear-gradient(135deg,#3b0a6b,#9b5de5,#ff7ae0)' }   // estilo en tamagotchi.js
];
// oficio de cada gato: en qué escenario de Michi operaciones (operaciones.js) puede trabajar
const OFICIO = {
  estudiante: ['naranjo', 'pelusa', 'calico', 'mate', 'sakura', 'lunar', 'galaxia', 'cristal', 'fabimath'],
  obrero: ['negrito', 'atigrado', 'carey', 'astro', 'lima', 'fenix', 'dragon', 'lava'],
  oficinista: ['gris', 'siames', 'tuxedo', 'ruso', 'nube', 'samurai', 'faraon', 'fantasma']
};
const OF_TXT = { estudiante: 'Estudiante', obrero: 'Obrero', oficinista: 'Oficinista' };
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
].map(([id, name, body, shade, pat], i) => ({ id, name, body, shade, pat, rar: RAR[Math.floor(i / 5)], w: CAT_W[i % 5], of: Object.keys(OFICIO).find(o => OFICIO[o].includes(id)) }));

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
// mínimos de rareza y variante que asegura el evento (EVENTO en paes.html)
const evRar = () => eventoActivo() ? EVENTO.rar || 0 : 0, evVar = () => eventoActivo() ? EVENTO.vari || 0 : 0;
const evTxt = () => `el gachapón y las ruletas solo entregan gatos ${RAR.slice(evRar()).map(r => r.name.toLowerCase()).join(', ')}` +
  (evVar() ? ` en variante ${VAR.slice(evVar()).map(v => v.name.toLowerCase()).join(', ')}` : '');
// desde = índice de la variante mínima asegurada (las ruletas de variante); el evento puede subir rareza y variante mínimas
function tirar(cost = G_COST, desde = 0) {
  const p = store.get();
  if ((p.pts || 0) < cost) return null;
  const vs = VAR.slice(Math.max(desde, evVar()));
  const rar = sortear(RAR.slice(evRar())), g = sortear(GATOS.filter(c => c.rar === rar)), v = sortear(vs), k = g.id + ':' + v.id;
  p.col = p.col || {};
  const antes = p.col[k] || 0, gatoNuevo = !VAR.some(x => p.col[g.id + ':' + x.id]);
  p.col[k] = antes + 1; p.pts -= cost; store.set(p); updPts();   // se guarda antes de la animación: recargar no pierde el gato
  return { g, v, vs, veces: antes + 1, gatoNuevo };
}
const msgTirada = r => r.gatoNuevo ? '¡Gato nuevo para tu colección!' : r.veces === 1 ? '¡Variante nueva de este gato!' : `Repetido: ya tienes ${r.veces} de este gato en ${r.v.name.toLowerCase()}.`;
// gachapones de variante: [variante mínima asegurada, costo]
const GACHA_VAR = [[1, 50], [2, 100], [3, 1000]];   // desde arcoíris (3) es el gacha épico interactivo: gachaEpico

/* ---------- venta y fusión ----------
   Valor = rareza × variante × posición del gato en su rareza (el más difícil vale más).
   Un diamante de una rareza ≈ un normal de la siguiente. Valor esperado de una tirada ≈ ⭐ 7, bajo el costo de 10:
   vender lo que sale nunca da más estrellas de las que se gastaron. */
const RAR_VAL = [1.5, 3, 7.5, 18, 45], VAR_VAL = [1, 1.6, 2.5, 4, 8, 16], CAT_F = [1, 1.1, 1.25, 1.4, 1.6];
const FUS_COST = [5, 15, 40, 100, 250];   // por rareza de los tres gatos, × VAR_VAL de la variante más baja
const pieza = k => { const [c, v] = k.split(':'); const g = GATOS.find(x => x.id === c); return { g, v: VAR.findIndex(x => x.id === v), r: RAR.indexOf(g.rar) }; };
const valor = k => { const p = pieza(k); return Math.max(1, Math.round(RAR_VAL[p.r] * VAR_VAL[p.v] * CAT_F[GATOS.indexOf(p.g) % 5])); };
function quitar(p, k, n = 1) { p.col[k] -= n; if (p.col[k] <= 0) delete p.col[k]; }
function vender(k) {
  const p = store.get();
  if (!p.col || !p.col[k]) return;
  if (p.col[k] === 1 && !confirm(`Es tu único ${pieza(k).g.name} ${VAR[pieza(k).v].name.toLowerCase()}. ¿Venderlo por ⭐ ${valor(k)}?`)) return;
  quitar(p, k); p.pts = (p.pts || 0) + valor(k); store.set(p); updPts(); renderGacha(p); renderShop(p);
}
// Tres iguales (mismo gato y variante): el mismo gato con la variante siguiente.
// Tres de la misma rareza (sin ser iguales): un gato al azar de la rareza siguiente, con la variante más baja de los tres.
function fusion(keys) {
  if (keys.length < 3) return { err: `Pon ${3 - keys.length} gato${keys.length === 2 ? '' : 's'} más.` };
  const ps = keys.map(pieza), r = ps[0].r, v = Math.min(...ps.map(p => p.v));
  if (ps.some(p => p.r !== r)) return { err: 'Los tres gatos deben ser de la misma rareza.' };
  const cost = Math.round(FUS_COST[r] * VAR_VAL[v]);
  if (keys.every(k => k === keys[0])) return v === VAR.length - 1 ? { err: `${VAR[VAR.length - 1].name} es la variante más alta: no puede subir más.` } : { tipo: 'var', g: ps[0].g, v: v + 1, cost };
  if (r === RAR.length - 1) return { err: 'Mítico es la rareza más alta: aquí solo sirven tres iguales para subir la variante.' };
  return { tipo: 'linea', r: r + 1, v, cost };
}
let fus = [];   // claves "gato:variante" puestas en la máquina de fusión
const libres = (col, k) => (col[k] || 0) - fus.filter(x => x === k).length;

/* ---------- gatos que te acompañan: hasta ACOMP_MAX de la colección, abajo a la izquierda ----------
   Cada uno tiene ACOMP_P de probabilidad de multiplicar un acierto por multGato: crece con rareza + variante
   (r + v de 0 a 9), de ×2 (común normal) a ×100 (mítico galáctico), 2 · 50^((r + v) / 9).
   Si salen los dos, se multiplican entre sí, con tope ×MULT_MAX. */
const ACOMP_MAX = 2, ACOMP_P = 0.5, MULT_MAX = 100;
const multGato = k => { const p = pieza(k); return Math.round(2 * 50 ** ((p.r + p.v) / 9)); };
const acompanantes = p => (p.acomp || []).filter(k => p.col && p.col[k]);   // vendido o fusionado ya no acompaña
// estrellas de un acierto (antes del ×evento); anima a los gatos que multiplicaron
function estrellasAcierto() {
  const sale = acompanantes(store.get()).filter(() => Math.random() < ACOMP_P);
  sale.forEach(k => {
    const el = document.querySelector(`#gAcomp [data-k="${k}"]`); if (!el) return;
    el.animate([{ transform: 'none' }, { transform: 'translateY(-16px) scale(1.15)' }, { transform: 'none' }], { duration: 500 });
    el.insertAdjacentHTML('beforeend', `<span class="g-x">×${multGato(k)}</span>`); setTimeout(() => el.querySelector('.g-x')?.remove(), 1200);
  });
  return Math.min(MULT_MAX, sale.reduce((m, k) => m * multGato(k), 1));
}
function renderAcomp() {
  let el = $('gAcomp');
  if (!el) { el = document.createElement('div'); el.id = 'gAcomp'; el.className = 'g-acomp'; document.body.appendChild(el); }
  el.innerHTML = acompanantes(store.get()).map(k => { const pz = pieza(k);
    return `<div class="g-ac v-${VAR[pz.v].id}" data-k="${k}" title="${pz.g.name} ${VAR[pz.v].name.toLowerCase()}: ${ACOMP_P * 100} % de que un acierto valga ×${multGato(k)}">${gatoSVG(pz.g, 60)}<b>×${multGato(k)}</b></div>`; }).join('');
}
// clic en un gato de la colección: acompañar, vender o llevar a la fusión
function menuGato(k) {
  const p = store.get(), pz = pieza(k), v = VAR[pz.v], ac = acompanantes(p), esta = ac.includes(k);
  const m = modal(pz.g.name, `<div class="g-rev"><div class="pop v-${v.id}">${gatoSVG(pz.g, 130)}</div><h3>${pz.g.name}</h3>
    <span class="tag" style="background:${pz.g.rar.color}">${pz.g.rar.name}</span>${tagVar(v)}<span class="tag" style="background:#6e6e73">${OF_TXT[pz.g.of]}</span>
    <p>Tienes ${p.col[k]}. Si te acompaña, cada acierto tiene ${ACOMP_P * 100} % de probabilidad de valer <b>×${multGato(k)}</b>.</p>
    <div class="g-menu"><button class="btn btn-primary" data-a="acomp">${esta ? '🐾 Dejar de acompañar' : ac.length >= ACOMP_MAX ? `🐾 Acompañar (sale ${pieza(ac[0]).g.name})` : '🐾 Acompañar'}</button>
      <button class="btn btn-ghost" data-a="vende">Vender ⭐ ${valor(k)}</button>
      <button class="btn btn-ghost" data-a="fus" ${fus.length >= 3 || libres(p.col, k) < 1 ? 'disabled' : ''}>⚗️ Fusionar</button>
      <button class="btn btn-ghost" data-a="x">Cerrar</button></div></div>`);
  const cerrar = () => { m.remove(); document.removeEventListener('keydown', esc); };
  const esc = e => { if (e.key === 'Escape') cerrar(); };
  document.addEventListener('keydown', esc);
  m.addEventListener('click', e => { if (e.target === m) cerrar(); });
  m.querySelectorAll('[data-a]').forEach(b => b.addEventListener('click', () => {
    cerrar();
    if (b.dataset.a === 'acomp') { const q = store.get(); q.acomp = esta ? ac.filter(x => x !== k) : [...ac, k].slice(-ACOMP_MAX); store.set(q); renderGacha(q); }
    if (b.dataset.a === 'vende') vender(k);
    if (b.dataset.a === 'fus') { fus.push(k); renderGacha(store.get()); }
  }));
  m.querySelector('[data-a="acomp"]').focus();
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
// gachapón especial: melodía menor más lenta, bajo de sierra, moneda, redoble y destello al abrir
function musicaPrem(seg) {
  if (mudo()) return;
  audio();
  const mel = [69, 72, 76, 81, 79, 76, 72, 74, 77, 81, 84, 81, 77, 74], baj = [45, 45, 41, 41, 43, 43, 40, 40];
  for (let i = 0; i * 0.18 < seg; i++) { nota(HZ(mel[i % mel.length]), i * 0.18, 0.16, 'triangle', 0.07); if (i % 2 === 0) nota(HZ(baj[(i / 2 | 0) % baj.length]), i * 0.18, 0.34, 'sawtooth', 0.025); }
}
const sonMoneda = () => { if (mudo()) return; audio(); nota(HZ(88), 0, 0.09, 'square', 0.05); nota(HZ(95), 0.09, 0.4, 'square', 0.05); };
const redoble = seg => { if (mudo()) return; audio(); for (let i = 0; i * 0.07 < seg; i++) nota(HZ(60 + i % 12 + (i / 12 | 0) * 2), i * 0.07, 0.06, 'square', 0.03); };
const sonAbre = () => { if (mudo()) return; audio(); [84, 88, 91, 96, 100, 103, 108].forEach((n, i) => nota(HZ(n), i * 0.04, 0.5, 'triangle', 0.05)); };
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
  .v-platino svg { filter: grayscale(1) brightness(1.8) contrast(1.1) drop-shadow(0 0 3px #fff) drop-shadow(0 0 9px #e4e9ff) drop-shadow(0 0 18px #b8c3ff); animation: g-pt 1.8s ease-in-out infinite; }
  svg[aria-label="Gato platino"] { filter: drop-shadow(0 0 3px #fff) drop-shadow(0 0 9px #e4e9ff) drop-shadow(0 0 18px #b8c3ff); }
  @keyframes g-pt { 50% { filter: grayscale(1) brightness(2.1) contrast(1.1) drop-shadow(0 0 6px #fff) drop-shadow(0 0 16px #eef1ff) drop-shadow(0 0 30px #c6ceff); } }
  /* aura que gira detrás del gato y destellos que titilan alrededor */
  .v-platino:not(.g-gato) { position: relative; }
  .v-platino { isolation: isolate; }
  .v-platino::before, .v-platino::after { content: ''; position: absolute; pointer-events: none; z-index: -1; }
  .v-platino::before { inset: -14%; border-radius: 50%; background: radial-gradient(circle, rgba(255,255,255,.95), rgba(225,232,255,.55) 30%, transparent 62%), repeating-conic-gradient(rgba(255,255,255,.7) 0 6deg, transparent 6deg 24deg); -webkit-mask: radial-gradient(circle, #000 30%, transparent 70%); mask: radial-gradient(circle, #000 30%, transparent 70%); animation: g-gira 7s linear infinite; }
  .v-platino::after { inset: -6%; z-index: 1; background:
      radial-gradient(circle at 14% 20%, #fff 0 2px, rgba(230,236,255,.7) 3px, transparent 7px),
      radial-gradient(circle at 86% 16%, #fff 0 2.5px, rgba(230,236,255,.7) 4px, transparent 8px),
      radial-gradient(circle at 78% 82%, #fff 0 2px, rgba(230,236,255,.7) 3px, transparent 7px),
      radial-gradient(circle at 20% 78%, #fff 0 1.5px, rgba(230,236,255,.7) 2.5px, transparent 6px),
      radial-gradient(circle at 50% 4%, #fff 0 1.5px, rgba(230,236,255,.7) 2.5px, transparent 6px),
      radial-gradient(circle at 96% 50%, #fff 0 1.5px, rgba(230,236,255,.7) 2.5px, transparent 6px),
      radial-gradient(circle at 4% 50%, #fff 0 2px, rgba(230,236,255,.7) 3px, transparent 7px);
    animation: g-chispa 1.1s ease-in-out infinite alternate; }
  @keyframes g-chispa { from { opacity: .25; transform: scale(.94) rotate(-3deg); } to { opacity: 1; transform: scale(1.06) rotate(3deg); } }
  .g-card.v-platino { background: linear-gradient(160deg, #fff, #eef1fa); box-shadow: inset 0 0 0 1px var(--rc), 0 0 16px rgba(200,210,255,.9); }
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
  .g-card .g-dots button { width: 13px; height: 13px; border-radius: 50%; border: 1px solid rgba(0,0,0,.18); cursor: pointer; padding: 0; }
  .g-card .g-dots button.on { outline: 2px solid var(--ink); outline-offset: 1px; }
  .g-card.ac { background: #fff7f0; }
  .g-acbadge { display: inline-block; margin-top: 6px; font-size: 11.5px; font-weight: 700; color: #c4540a; background: var(--tint); padding: 2px 8px; border-radius: 99px; }
  .g-menu { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; }
  .g-acomp { position: fixed; left: 14px; bottom: 14px; z-index: 55; display: flex; gap: 10px; }
  .g-ac { position: relative; background: rgba(255,255,255,.85); border: 1px solid var(--line); border-radius: 16px; padding: 6px 6px 4px; text-align: center; box-shadow: 0 6px 18px rgba(0,0,0,.08); }
  .g-ac b { display: block; font-size: 13px; color: #c4540a; }
  .g-x { position: absolute; left: 50%; top: -8px; translate: -50% 0; font-weight: 800; font-size: 20px; color: #e8680c; text-shadow: 0 1px 0 #fff; animation: t-sube 1.2s ease-out forwards; }
  .g-acts { display: flex; gap: 4px; justify-content: center; margin-top: 8px; }
  .g-acts button { font: inherit; font-size: 11.5px; font-weight: 600; border: none; border-radius: 99px; padding: 4px 8px; cursor: pointer; background: var(--tint); color: #c4540a; white-space: nowrap; }
  .g-acts button:disabled { opacity: .4; cursor: default; }
  .g-fus { background: var(--bg); border: 1px solid var(--line); border-radius: 18px; padding: 16px; margin: 6px 0 10px; }
  .g-fus h4 { font-size: 17px; margin-bottom: 4px; }
  .g-fus .sub { margin-bottom: 12px; }
  .g-slots { display: flex; gap: 10px; align-items: center; flex-wrap: wrap; }
  .g-slot { width: 84px; height: 84px; border-radius: 16px; border: 2px dashed #c7c7cc; background: var(--paper); display: grid; place-items: center; cursor: pointer; font: inherit; color: var(--ink-3); }
  .g-slot.lleno { border-style: solid; border-color: var(--rc); }
  .g-res { font-size: 14px; color: var(--ink-2); flex: 1; min-width: 180px; }
  .g-res b { color: var(--ink); }
  .g-fx { display: flex; justify-content: center; gap: 6px; height: 150px; align-items: center; }
  .g-fx > div { animation: g-junta 1.6s var(--ease) forwards; }
  .g-fx > div:nth-child(1) { --dx: 90px; } .g-fx > div:nth-child(3) { --dx: -90px; }
  @keyframes g-junta { 0% { transform: none; } 60% { transform: translateX(var(--dx, 0)) rotate(360deg) scale(.8); opacity: 1; } 100% { transform: translateX(var(--dx, 0)) scale(0); opacity: 0; } }
  .g-farm { width: min(960px, 100%); padding: 16px; }
  .g-park { position: relative; height: min(70vh, 560px); border-radius: 18px; overflow: hidden; cursor: pointer; background: radial-gradient(circle at 30% 20%, #b9ef8f, #7fcf5a 60%, #5fb547); }
  .g-park .deco { position: absolute; font-size: 34px; pointer-events: none; user-select: none; }
  .g-park .gt { position: absolute; transition-property: left, top; transition-timing-function: linear; pointer-events: none; }
  .g-park .gt > div { transition: transform .2s; }
  .g-park .gt.izq > div { transform: scaleX(-1); }
  .g-park .gt .cor { position: absolute; left: 50%; top: -10px; font-size: 18px; animation: g-cor 1.2s ease-out forwards; }
  @keyframes g-cor { from { transform: translate(-50%, 0); opacity: 1; } to { transform: translate(-50%, -34px); opacity: 0; } }
  .g-park .pez { position: absolute; font-size: 22px; transform: translate(-50%, -50%); pointer-events: none; }
  .g-farm .top { display: flex; flex-wrap: wrap; gap: 10px; align-items: center; justify-content: space-between; margin-bottom: 12px; text-align: left; }
  .g-ruleta { position: relative; width: 300px; max-width: 100%; margin: 0 auto 8px; }
  .g-ruleta svg { max-width: 100%; height: auto; }
  .g-rueda { transition: transform 4.5s cubic-bezier(.15,.7,.15,1); }
  .g-flecha { position: absolute; top: -14px; left: 50%; transform: translateX(-50%); z-index: 1; font-size: 26px; color: #e8342a; text-shadow: 0 2px 3px rgba(0,0,0,.3); }
  .g-mach.prem { height: 400px; background: linear-gradient(rgba(255,255,255,.45), rgba(0,0,0,.2)), var(--mc); }
  .g-mach.prem .g-glass { transition: box-shadow .5s; }
  .g-mach.prem.luz .g-glass { box-shadow: inset 0 0 0 3px #fff, inset 0 0 30px rgba(255,255,255,.9); }
  .g-ranura { position: absolute; right: 22px; bottom: 12px; width: 30px; height: 28px; border-radius: 6px; background: #3a3340; }
  .g-ranura::after { content: ''; position: absolute; left: 13px; top: 5px; width: 4px; height: 18px; border-radius: 2px; background: #000; }
  .g-moneda { position: absolute; right: 22px; bottom: 140px; width: 30px; height: 30px; border-radius: 50%; z-index: 2; background: radial-gradient(circle at 35% 35%, #fff4b0, #f5c542 55%, #b8860b); box-shadow: 0 0 0 2px #b8860b; animation: g-moneda 1.5s ease-in forwards; }
  @keyframes g-moneda { 0% { transform: translateY(-40px) rotateY(0); opacity: 0; } 15% { opacity: 1; } 75% { transform: translateY(126px) rotateY(900deg); opacity: 1; } 100% { transform: translateY(132px) rotateY(990deg) scale(.4); opacity: 0; } }
  .g-open { position: relative; height: 340px; overflow: hidden; border-radius: 18px; background: radial-gradient(circle, #2a2440, #120f1c); }
  .g-open > div { position: absolute; left: 50%; top: 50%; translate: -50% -50%; }
  .g-ball { width: 120px; height: 120px; animation: g-shake .5s ease-in-out 4; }
  .g-ball i { position: absolute; left: 0; width: 120px; height: 60px; box-sizing: border-box; border: 3px solid rgba(0,0,0,.3); transition: transform .9s var(--ease), opacity .9s; }
  .g-ball .t { top: 0; border-radius: 60px 60px 0 0; background: var(--cc); }
  .g-ball .b { bottom: 0; border-radius: 0 0 60px 60px; background: #fff; }
  .g-open.abre .g-ball { animation: none; }
  .g-open.abre .t { transform: translate(-40px, -120px) rotate(-35deg); opacity: 0; }
  .g-open.abre .b { transform: translate(40px, 120px) rotate(25deg); opacity: 0; }
  .g-glow { width: 380px; height: 380px; border-radius: 50%; opacity: 0; transform: scale(.1); transition: transform 1.2s var(--ease), opacity .6s; -webkit-mask: radial-gradient(circle, #000 25%, transparent 70%); mask: radial-gradient(circle, #000 25%, transparent 70%); }
  .g-glow::before, .g-glow::after { content: ''; position: absolute; inset: 0; border-radius: 50%; }
  .g-glow::before { background: repeating-conic-gradient(var(--rc) 0 10deg, transparent 10deg 20deg); animation: g-gira 6s linear infinite; }
  .g-glow::after { background: radial-gradient(circle, #fff, var(--rc) 30%, transparent 65%); }
  .g-open.abre .g-glow { opacity: 1; transform: scale(var(--gs)); }
  .g-gato { transform: scale(0) translateY(40px); transition: transform .9s var(--ease) .3s; }
  .g-open.abre .g-gato { transform: none; }
  .g-open::after { content: ''; position: absolute; inset: 0; background: #fff; opacity: 0; pointer-events: none; }
  .g-open.abre::after { animation: g-flash .8s ease-out; }
  @keyframes g-shake { 0%, 100% { transform: rotate(0); } 25% { transform: rotate(-14deg); } 75% { transform: rotate(14deg); } }
  @keyframes g-gira { to { transform: rotate(360deg); } }
  @keyframes g-flash { 15% { opacity: .9; } 100% { opacity: 0; } }
  @media (prefers-reduced-motion: reduce) { .v-arcoiris svg { animation: none; filter: saturate(1.8) drop-shadow(0 0 5px #ff7ae0); } .g-rev .pop, .g-fx > div, .v-platino svg, .v-platino::before, .v-platino::after { animation: none; } }
</style>`);

const vista = {};   // gato -> variante mostrada en la galería (se elige con los puntitos)
const tagVar = v => `<span class="tag" style="background:${v.id === 'normal' ? '#8e8e93' : v.dot};color:${['oro', 'diamante', 'platino'].includes(v.id) ? '#1d1d1f' : '#fff'}">${v.name}</span>`;
function renderGacha(prog) {
  const el = $('gacha'); if (!el) return;
  const col = prog.col || {}, pts = prog.pts || 0;
  fus = fus.filter((k, i) => fus.slice(0, i + 1).filter(x => x === k).length <= (col[k] || 0));   // por si vendió lo que estaba en la máquina
  const tiene = g => VAR.filter(v => col[g.id + ':' + v.id]);
  const nGatos = GATOS.filter(g => tiene(g).length).length, nVar = Object.keys(col).length;
  const pctR = r => (r.w / RAR.reduce((s, x) => s + x.w, 0) * 100).toLocaleString('es-CL', { maximumFractionDigits: 1 });
  const f = fusion(fus);
  const resTxt = f.err ? f.err : f.tipo === 'var' ? `Resultado: <b>${f.g.name} ${VAR[f.v].name.toLowerCase()}</b>.` : `Resultado: <b>un gato ${RAR[f.r].name.toLowerCase()} al azar, ${VAR[f.v].name.toLowerCase()}</b>.`;
  el.innerHTML = `<h3>🎰 Gachapón de gatitos</h3>
    ${eventoActivo() ? `<div class="sub" style="color:#7c5cf0;font-weight:600">🎉 Evento activo: ${evTxt()}.</div>` : ''}<div class="sub">Canjea ⭐ ${G_COST} por un gato al azar de la máquina de garras. Clic en un gato de tu colección para que te acompañe (hasta ${ACOMP_MAX}), venderlo o fusionarlo. Cada respuesta correcta da ⭐ 1 (multiplicada por los gatos que te acompañan); bonos: 5 de 5 en un cuestionario da ⭐ 50, y en el ensayo 20, 19 y 18 correctas dan ⭐ 200, 150 y 100. Pueden salir repetidos, y los repetidos se venden o se fusionan.</div>
    <div class="top"><button class="btn btn-primary" id="gPlay" ${pts < G_COST ? 'disabled' : ''}>Jugar ⭐ ${G_COST}</button>
      ${GACHA_VAR.map(([d, c]) => `<button class="btn btn-primary ${d >= 3 ? 'g-btn-arco' : ''}" data-gvar="${d}" ${pts < c ? 'disabled' : ''}>${d >= 3 ? '🌈' : '🎰'} Gacha ${VAR[d].name.toLowerCase()} o más ⭐ ${c}</button>`).join('')}
      <button class="btn btn-ghost" id="gFarm" ${nVar ? '' : 'disabled'}>🌳 Granja de gatos</button>
      <button class="btn btn-ghost" id="gOps">${gatoSVG(GATOS[0], 20)} Michi operaciones</button>
      <button class="btn btn-ghost" id="gMute" aria-label="Sonido">${mudo() ? '🔇' : '🔊'}</button>
      <span class="prog">${nGatos}/${GATOS.length} gatos · ${nVar}/${GATOS.length * VAR.length} con variantes${pts < G_COST ? ` · te faltan ⭐ ${G_COST - pts}` : ''}</span></div>
    <details><summary>Probabilidades, precios y fusiones</summary><p>Rareza: ${RAR.map(r => `${r.name} ${pctR(r)} %`).join(' · ')}.<br>
      Dentro de cada rareza, cada gato sale menos que el anterior (${CAT_W.join(', ')} %).<br>
      Variante: ${VAR.map(v => `${v.name} ${v.w} %`).join(' · ')}.<br>
      Gachapones especiales: ${GACHA_VAR.map(([d, c]) => `⭐ ${c} asegura ${VAR[d].name.toLowerCase()} o más`).join(', ')} (este último es interactivo); entre esas variantes se mantienen las mismas proporciones y la rareza sale igual que en la máquina normal.<br>
      Venta: un común normal vale ⭐ 2 y sube con la rareza, la variante y lo difícil que es el gato; un diamante vale más o menos lo que un normal de la rareza siguiente.<br>
      Fusión: tres iguales dan el mismo gato con la variante siguiente (normal → oro → diamante → arcoíris → platino → galáctico). Tres de la misma rareza dan un gato al azar de la rareza siguiente con la variante más baja de los tres. Cuesta ⭐ ${FUS_COST.map((c, i) => `${c} ${RAR[i].name.toLowerCase()}`).join(', ')}, multiplicado por la variante.</p></details>
    <div class="g-fus"><h4>⚗️ Máquina de fusión</h4><div class="sub">Clic en un gato de la galería y «Fusionar» para agregarlo; clic en una casilla para sacarlo.</div>
      <div class="g-slots">${[0, 1, 2].map(i => { const k = fus[i]; if (!k) return `<div class="g-slot">+</div>`; const pz = pieza(k);
        return `<button class="g-slot lleno v-${VAR[pz.v].id}" style="--rc:${pz.g.rar.color}" data-quita="${i}" title="Sacar ${pz.g.name} ${VAR[pz.v].name.toLowerCase()}">${gatoSVG(pz.g, 60)}</button>`; }).join('')}
        <div class="g-res">${resTxt}${f.cost ? ` Costo: ⭐ ${f.cost}.` : ''}</div>
        <button class="btn btn-primary" id="gFus" ${f.err || pts < f.cost ? 'disabled' : ''}>Fusionar${f.cost ? ' ⭐ ' + f.cost : ''}</button></div></div>` +
    RAR.map(r => `<div class="g-rar" style="color:${r.color}">${r.name}</div><div class="g-grid">` +
      GATOS.filter(g => g.rar === r).map(g => {
        const vs = tiene(g);
        if (!vs.length) return `<div class="g-card">${gatoSVG(g, 72, true)}<b>???</b><small>sin descubrir</small></div>`;
        const v = vs.find(x => x.id === vista[g.id]) || vs[0], k = g.id + ':' + v.id;
        return `<div class="g-card si v-${v.id} ${acompanantes(prog).includes(k) ? 'ac' : ''}" style="--rc:${r.color}" data-card="${k}" role="button" tabindex="0" aria-label="${g.name} ${v.name}: opciones">${gatoSVG(g, 72)}<b>${g.name}</b><small>${v.name} · tienes ${col[k]} · ×${multGato(k)}</small>
          <span class="g-dots">${VAR.map(x => col[g.id + ':' + x.id] ? `<button class="${x === v ? 'on' : ''}" style="background:${x.dot}" data-ver="${g.id}:${x.id}" title="${x.name} ×${col[g.id + ':' + x.id]}" aria-label="Ver ${x.name}"></button>` : `<i title="${x.name} (falta)"></i>`).join('')}</span>
          ${acompanantes(prog).includes(k) ? '<span class="g-acbadge">🐾 te acompaña</span>' : ''}</div>`;
      }).join('') + '</div>').join('');
  $('gPlay').addEventListener('click', jugar);
  el.querySelectorAll('[data-gvar]').forEach(b => b.addEventListener('click', () => { const r = GACHA_VAR.find(x => x[0] === +b.dataset.gvar); (r[0] >= 3 ? gachaEpico : gachaPrem)(r); }));
  $('gFarm').addEventListener('click', () => granja());   // tamagotchi.js la reemplaza después del primer dibujo
  $('gOps').addEventListener('click', () => operaciones());
  $('gFus').addEventListener('click', fusionar);
  $('gMute').addEventListener('click', () => { localStorage.setItem('gacha_mute', mudo() ? '0' : '1'); renderGacha(store.get()); });
  el.querySelectorAll('[data-ver]').forEach(b => b.addEventListener('click', e => { e.stopPropagation(); const [g, v] = b.dataset.ver.split(':'); vista[g] = v; renderGacha(store.get()); }));
  el.querySelectorAll('[data-card]').forEach(c => { const abre = () => menuGato(c.dataset.card); c.addEventListener('click', abre); c.addEventListener('keydown', e => { if (e.key === 'Enter') abre(); }); });
  renderAcomp();
  el.querySelectorAll('[data-quita]').forEach(b => b.addEventListener('click', () => { fus.splice(+b.dataset.quita, 1); renderGacha(store.get()); }));
}

const espera = ms => new Promise(r => setTimeout(r, ms));
const rapido = () => matchMedia('(prefers-reduced-motion: reduce)').matches;
function modal(etiqueta, html, clase = '') {
  const m = document.createElement('div');
  m.className = 'g-modal'; m.setAttribute('role', 'dialog'); m.setAttribute('aria-modal', 'true'); m.setAttribute('aria-label', etiqueta);
  m.innerHTML = `<div class="g-box ${clase}">${html}</div>`;
  document.body.appendChild(m);
  return m;
}
// pantalla final con el gato obtenido; otra = { txt, ok, fn } para el botón de repetir
function revelar(m, g, v, msg, otra) {
  musicaPremio(RAR.indexOf(g.rar));
  m.querySelector('.g-box').innerHTML = `<div class="g-rev"><div class="pop v-${v.id}">${gatoSVG(g, 170)}</div>
    <h3>${g.name}</h3><span class="tag" style="background:${g.rar.color}">${g.rar.name}</span>${tagVar(v)}
    <p>${msg}</p>
    <div class="qnav" style="justify-content:center"><button class="btn btn-ghost" id="gClose">Cerrar</button>${otra ? `<button class="btn btn-primary" id="gAgain" ${otra.ok ? '' : 'disabled'}>${otra.txt}</button>` : ''}</div></div>`;
  const cerrar = () => { m.remove(); document.removeEventListener('keydown', esc); renderGacha(store.get()); renderShop(store.get()); };
  const esc = e => { if (e.key === 'Escape') cerrar(); };
  document.addEventListener('keydown', esc);
  m.querySelector('#gClose').addEventListener('click', cerrar);
  if (otra) m.querySelector('#gAgain').addEventListener('click', () => { cerrar(); otra.fn(); });
  m.querySelector('#gClose').focus();
}

async function jugar() {
  const res = tirar(); if (!res) return;
  const { g, v } = res, nivel = RAR.indexOf(g.rar);
  const capCol = ['#ff9a3c', '#4fa8ff', '#e85ad2', '#5fd97a', '#ffd75e'];
  const pila = Array.from({ length: 14 }, (_, i) => `<div class="g-cap" style="--cc:${capCol[i % 5]};left:${70 + (i % 7) * 34 + (i > 6 ? 17 : 0)}px;bottom:${i > 6 ? 28 : 0}px"></div>`).join('');
  const m = modal('Gachapón', `<div class="g-mach"><div class="g-glass"><div class="g-rail"></div>
    <div class="g-pile">${pila}</div><div class="g-chute"></div>
    <div class="g-claw" id="gClaw"><div class="cab"></div><div class="hd"></div><i class="l"></i><i class="r"></i></div></div>
    <div class="g-label">FABI · GACHA</div></div>`);
  const claw = m.querySelector('#gClaw'), glass = m.querySelector('.g-glass');
  if (!rapido()) {
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
  revelar(m, g, v, msgTirada(res), { txt: `Otra vez ⭐ ${G_COST}`, ok: (store.get().pts || 0) >= G_COST, fn: jugar });
}

// gachapón especial (~15 s): moneda, garra que pasea y elige una de 36 pelotas, la pelota tiembla, se abre con el brillo de la rareza y sale el gato
async function gachaPrem([desde, cost]) {
  const res = tirar(cost, desde); if (!res) return;
  const { g, v } = res, nivel = RAR.indexOf(g.rar), dot = VAR[desde].dot;
  const bolCol = [dot, '#ff9a3c', '#4fa8ff', '#e85ad2', '#5fd97a', '#ffd75e'];
  const pila = Array.from({ length: 36 }, (_, i) => `<div class="g-cap" style="--cc:${bolCol[i * 7 % 6]};left:${66 + i % 9 * 28 + (i / 9 | 0) % 2 * 14}px;bottom:${(i / 9 | 0) * 24}px"></div>`).join('');
  const m = modal('Gachapón ' + VAR[desde].name, `<div class="g-mach prem" style="--mc:${dot}"><div class="g-glass"><div class="g-rail"></div>
    <div class="g-pile">${pila}</div><div class="g-chute"></div>
    <div class="g-claw" id="gClaw"><div class="cab"></div><div class="hd"></div><i class="l"></i><i class="r"></i></div></div>
    <div class="g-label">GACHA ${VAR[desde].name.toUpperCase()}</div><div class="g-ranura"></div></div>`);
  if (!rapido()) {
    const claw = m.querySelector('#gClaw'), glass = m.querySelector('.g-glass'), mach = m.querySelector('.g-mach');
    await espera(500);
    const coin = document.createElement('div'); coin.className = 'g-moneda'; mach.appendChild(coin);
    await espera(1100); sonMoneda(); await espera(500); coin.remove();
    mach.classList.add('luz'); musicaPrem(10); await espera(800);
    for (let i = 0; i < 3; i++) { claw.style.left = 70 + Math.random() * (glass.clientWidth - 110) + 'px'; await espera(1000); }   // la garra duda
    const arriba = [...m.querySelectorAll('.g-pile .g-cap')].slice(27), bola = arriba[Math.random() * arriba.length | 0], cc = bola.style.getPropertyValue('--cc');
    claw.style.left = bola.offsetLeft + 17 + 'px'; await espera(1000);
    claw.style.top = bola.offsetTop - 22 + 'px'; await espera(1100);
    claw.classList.add('cerrada');
    const cap = document.createElement('div'); cap.className = 'g-cap'; cap.style.setProperty('--cc', cc); claw.appendChild(cap); bola.style.visibility = 'hidden';
    await espera(500); claw.style.top = '4px'; await espera(1100);
    claw.style.left = '38px'; await espera(1000);
    claw.classList.remove('cerrada'); cap.style.top = glass.clientHeight + 20 + 'px'; await espera(800);
    m.querySelector('.g-box').innerHTML = `<div class="g-open" style="--rc:${g.rar.color};--cc:${cc};--gs:${0.6 + nivel * 0.12}"><div class="g-glow"></div>
      <div class="g-gato v-${v.id}">${gatoSVG(g, 150)}</div><div class="g-ball"><i class="t"></i><i class="b"></i></div></div><p style="color:var(--ink-3);margin-top:12px">¿Qué gatito saldrá?</p>`;
    redoble(2); await espera(2100);
    m.querySelector('.g-open').classList.add('abre'); sonAbre(); await espera(3000);
  }
  revelar(m, g, v, msgTirada(res), { txt: `Otra vez ⭐ ${cost}`, ok: (store.get().pts || 0) >= cost, fn: () => gachaPrem([desde, cost]) });
}

/* ---------- gacha épico (arcoíris o más): el jugador lo hace andar a clics ----------
   moneda → 5 cristales → manivela ×3 → cápsula que se rompe con 5 toques → explosión y gato.
   Tiene su propia música en loop y un botón «Saltar». Corre aunque el sistema pida menos movimiento:
   las animaciones van con cada clic del jugador. */
function bombo(t) {
  const o = AC.createOscillator(), g = AC.createGain(), t0 = AC.currentTime + t;
  o.frequency.setValueAtTime(150, t0); o.frequency.exponentialRampToValueAtTime(40, t0 + 0.25);
  g.gain.setValueAtTime(0.22, t0); g.gain.exponentialRampToValueAtTime(0.001, t0 + 0.3);
  o.connect(g).connect(AC.destination); o.start(t0); o.stop(t0 + 0.32);
}
// la menor – fa – do – sol con arpegio, bajo de sierra, bombo en cada pulso y campanas; devuelve la función que la detiene
function musicaEpica() {
  if (mudo()) return () => {};
  audio();
  const acordes = [[57, 60, 64], [53, 57, 60], [48, 52, 55], [55, 59, 62]], paso = 0.13;
  let c = 0;
  const compas = () => {
    const ac = acordes[c++ % 4];
    for (let i = 0; i < 16; i++) {
      const t = i * paso;
      nota(HZ(ac[i % 3] + (i % 6 < 3 ? 12 : 24)), t, 0.11, 'square', 0.028);
      if (i % 4 === 0) { bombo(t); nota(HZ(ac[0] - 24), t, paso * 3.6, 'sawtooth', 0.035); }
      if (i === 6 || i === 14) nota(HZ(ac[2] + 24), t, 0.35, 'triangle', 0.045);
    }
  };
  compas(); const id = setInterval(compas, 16 * paso * 1000);
  return () => clearInterval(id);
}
const sonCristal = n => { if (mudo()) return; audio(); nota(HZ(84 + n * 3), 0, 0.3, 'triangle', 0.07); nota(HZ(91 + n * 3), 0.05, 0.3, 'square', 0.03); };
const sonManivela = n => { if (mudo()) return; audio(); [0, 1, 2].forEach(i => nota(HZ(48 + n * 5 + i * 4), i * 0.05, 0.12, 'sawtooth', 0.05)); };
const sonGrieta = n => { if (mudo()) return; audio(); nota(HZ(40 + n * 6), 0, 0.12, 'sawtooth', 0.09); nota(HZ(96 - n * 2), 0.02, 0.08, 'square', 0.03); };

document.head.insertAdjacentHTML('beforeend', `<style>
  .g-btn-arco { background: linear-gradient(90deg, #ff5e5e, #ffa53d, #ffe45c, #5fd97a, #4fa8ff, #b57be0, #ff5e5e) 0 0 / 200% 100%; color: #fff; text-shadow: 0 1px 2px rgba(0,0,0,.45); animation: g-arco 3s linear infinite; }
  .g-btn-arco:disabled { animation: none; }
  @keyframes g-arco { to { background-position: 200% 0; } }
  .g-box.g-epbox { background: radial-gradient(circle at 50% 25%, #3a1a78, #120a2a 60%, #07040f); color: #fff; width: min(500px, 100%); position: relative; overflow: hidden;
    box-shadow: 0 0 0 3px rgba(255,255,255,.15), 0 0 40px rgba(181,123,224,.7), 0 0 90px rgba(255,122,224,.45); }
  .g-ep { position: relative; height: 400px; user-select: none; }
  .g-ep .cielo { position: absolute; inset: -40%; opacity: .8; animation: g-gira 80s linear infinite; background:
    radial-gradient(1.5px 1.5px at 10% 20%, #fff, transparent), radial-gradient(1px 1px at 30% 80%, #fff, transparent), radial-gradient(2px 2px at 55% 35%, #ffe9a8, transparent),
    radial-gradient(1px 1px at 70% 60%, #fff, transparent), radial-gradient(1.5px 1.5px at 85% 15%, #cfe0ff, transparent), radial-gradient(1px 1px at 45% 55%, #fff, transparent),
    radial-gradient(2px 2px at 20% 50%, #ffc8f0, transparent), radial-gradient(1px 1px at 90% 85%, #fff, transparent), radial-gradient(1.5px 1.5px at 62% 92%, #fff, transparent); }
  .g-ep h3 { position: relative; font-size: 26px; letter-spacing: .08em; background: linear-gradient(90deg, #ff5e5e, #ffa53d, #ffe45c, #5fd97a, #4fa8ff, #b57be0, #ff5e5e) 0 0 / 200% 100%;
    -webkit-background-clip: text; background-clip: text; color: transparent; animation: g-arco 2.5s linear infinite; }
  .g-ep .barra { position: relative; height: 10px; margin: 10px 30px 0; border-radius: 99px; background: rgba(255,255,255,.12); overflow: hidden; }
  .g-ep .barra i { display: block; height: 100%; width: 0; border-radius: 99px; transition: width .4s; background: linear-gradient(90deg, #ff5e5e, #ffe45c, #5fd97a, #4fa8ff, #b57be0); box-shadow: 0 0 12px #fff; }
  .g-ep .paso { position: absolute; left: 0; right: 0; bottom: 6px; font-weight: 800; font-size: 17px; text-shadow: 0 0 10px #b57be0; animation: g-latido 1s ease-in-out infinite; }
  @keyframes g-latido { 50% { scale: 1.06; } }
  .g-ep .obj { position: absolute; translate: -50% -50%; border: none; background: none; padding: 0; cursor: pointer; }
  .g-ep .moneda { width: 88px; height: 88px; border-radius: 50%; font-size: 38px; background: radial-gradient(circle at 35% 35%, #fff4b0, #f5c542 55%, #b8860b);
    box-shadow: 0 0 0 4px #b8860b, 0 0 30px #ffd75e; animation: g-flota 1.6s ease-in-out infinite; }
  @keyframes g-flota { 50% { translate: -50% calc(-50% - 10px); } }
  .g-ep .cristal { animation: g-flota 1.4s ease-in-out infinite; animation-delay: var(--d); filter: drop-shadow(0 0 10px var(--c)) drop-shadow(0 0 4px #fff); }
  .g-ep .cristal i { display: block; width: 44px; height: 58px; clip-path: polygon(50% 0, 100% 40%, 50% 100%, 0 40%); background: linear-gradient(135deg, #fff, var(--c) 45%, #1a0f30 130%); }
  .g-ep .maquina { position: absolute; left: 50%; top: 52%; translate: -50% -50%; width: 150px; height: 150px; border-radius: 50%;
    background: conic-gradient(#ff5e5e, #ffa53d, #ffe45c, #5fd97a, #4fa8ff, #b57be0, #ff5e5e); box-shadow: 0 0 40px rgba(255,255,255,.5); }
  .g-ep .maquina::after { content: ''; position: absolute; inset: 14px; border-radius: 50%; background: radial-gradient(circle at 40% 35%, #3a2a6a, #120a2a); }
  .g-ep .manivela { left: 50%; top: 52%; width: 150px; height: 150px; z-index: 2; transition: rotate .5s cubic-bezier(.3,1.6,.5,1); }
  .g-ep .manivela::before { content: ''; position: absolute; left: 50%; top: 50%; width: 64px; height: 12px; translate: 0 -50%; border-radius: 6px; background: #e8e8ec; box-shadow: 0 0 8px #fff; }
  .g-ep .manivela::after { content: ''; position: absolute; left: calc(50% + 52px); top: 50%; width: 30px; height: 30px; translate: 0 -50%; border-radius: 50%; background: radial-gradient(circle at 35% 35%, #fff, #ff7ae0); box-shadow: 0 0 14px #ff7ae0; }
  .g-ep .capsula { left: 50%; top: 52%; width: 140px; height: 140px; border-radius: 50%; overflow: hidden; box-shadow: 0 0 calc(20px + var(--k, 0) * 14px) rgba(255,255,255,.9);
    background: linear-gradient(transparent 48%, #3a2a6a 48% 52%, transparent 52%), linear-gradient(#fff 50%, #fff 50%) 0 100% / 100% 50% no-repeat, conic-gradient(#ff5e5e, #ffe45c, #5fd97a, #4fa8ff, #b57be0, #ff5e5e); }
  .g-ep .capsula svg { position: absolute; inset: 0; }
  .g-ep .capsula path { opacity: 0; transition: opacity .15s; }
  .g-ep .rayos { position: absolute; left: 50%; top: 52%; width: 700px; height: 700px; translate: -50% -50%; border-radius: 50%; scale: 0; pointer-events: none;
    background: repeating-conic-gradient(var(--r1) 0 8deg, transparent 8deg 16deg, var(--r2) 16deg 24deg, transparent 24deg 32deg);
    -webkit-mask: radial-gradient(circle, #000 15%, transparent 65%); mask: radial-gradient(circle, #000 15%, transparent 65%); }
  .g-ep .confeti { position: absolute; left: 50%; top: 52%; width: 9px; height: 14px; border-radius: 2px; pointer-events: none; }
  .g-saltar { position: absolute; top: 12px; right: 14px; z-index: 5; border: none; border-radius: 99px; padding: 4px 12px; font: inherit; font-size: 12px; font-weight: 700; cursor: pointer; background: rgba(255,255,255,.15); color: #fff; }
</style>`);

async function gachaEpico([desde, cost]) {
  const res = tirar(cost, desde); if (!res) return;   // el gato ya quedó guardado
  const { g, v } = res, gal = v.id === 'galactico';
  const m = modal('Gacha ' + VAR[desde].name.toLowerCase() + ' épico', `<div class="g-ep"><div class="cielo"></div><h3>✦ GACHA ${VAR[desde].name.toUpperCase()} ✦</h3>
    <div class="barra"><i id="gEn"></i></div><div id="gEsc"></div><div class="paso" id="gPaso" role="status" aria-live="polite"></div></div><button class="g-saltar" id="gSalta">Saltar ⏭</button>`, 'g-epbox');
  const esc = m.querySelector('#gEsc'), ep = m.querySelector('.g-ep');
  const paso = t => m.querySelector('#gPaso').textContent = t, energia = f => m.querySelector('#gEn').style.width = f * 100 + '%';
  const obj = (html, x, y, clase, etiqueta) => {
    const b = document.createElement('button'); b.className = 'obj ' + clase; b.innerHTML = html; b.setAttribute('aria-label', etiqueta);
    b.style.left = x + '%'; b.style.top = y + '%'; esc.appendChild(b); return b;
  };
  const clic = el => new Promise(r => el.addEventListener('click', r, { once: true }));
  const sacude = (fuerza, ms = 350) => ep.animate([0, 1, 2, 3, 4].map(i => ({ transform: `translate(${(i % 2 ? 1 : -1) * fuerza}px, ${(i % 3 - 1) * fuerza}px)` })).concat({ transform: 'none' }), { duration: ms });
  const parar = musicaEpica();
  let saltado = false;
  const salto = new Promise(r => m.querySelector('#gSalta').addEventListener('click', () => { saltado = true; r(); }, { once: true }));

  const escena = async () => {
    // 1 · moneda a la ranura
    paso('Toca la moneda para insertarla');
    const mon = obj('⭐', 50, 50, 'moneda', 'Insertar moneda'); mon.focus();
    await clic(mon); if (saltado) return;
    sonMoneda(); mon.style.animation = 'none';
    await mon.animate([{ transform: 'none' }, { transform: 'translateY(-60px) rotateY(720deg) scale(.3)', opacity: 0 }], { duration: 700, easing: 'ease-in', fill: 'forwards' }).finished;
    mon.remove(); energia(0.1);
    // 2 · cinco cristales arcoíris
    paso('¡Rompe los 5 cristales arcoíris!');
    const cols = gal ? ['#b57be0', '#ff7ae0', '#9b5de5', '#e0b8ff', '#ff5ec4'] : ['#ff5e5e', '#ffa53d', '#ffe45c', '#5fd97a', '#4fa8ff'];
    const pos = shuffle([[18, 38], [82, 34], [26, 76], [74, 74], [50, 58]]);
    let rotos = 0;
    await Promise.all(cols.map((c, i) => {
      const b = obj('<i></i>', pos[i][0], pos[i][1], 'cristal', 'Romper cristal'); b.style.setProperty('--c', c); b.style.setProperty('--d', i * 0.2 + 's');
      return clic(b).then(() => {
        sonCristal(rotos++); energia(0.1 + rotos * 0.12); sacude(4, 200);
        b.style.animation = 'none';
        return b.animate([{ scale: 1, opacity: 1 }, { scale: 2.2, opacity: 0, rotate: '45deg' }], { duration: 350, fill: 'forwards' }).finished.then(() => b.remove());
      });
    }));
    if (saltado) return;
    // 3 · manivela, tres vueltas
    paso('¡Gira la manivela 3 veces!');
    const maq = document.createElement('div'); maq.className = 'maquina'; esc.appendChild(maq);
    const man = obj('', 50, 52, 'manivela', 'Girar manivela'); man.focus();
    for (let i = 1; i <= 3; i++) {
      await clic(man); if (saltado) return;
      man.style.rotate = i * 360 + 'deg'; sonManivela(i); sacude(3 + i * 3, 450); energia(0.7 + i * 0.1);
      maq.animate([{ filter: 'brightness(1)' }, { filter: `brightness(${1.4 + i * 0.3})` }, { filter: 'brightness(1)' }], { duration: 450 });
    }
    await espera(400); man.remove(); maq.remove();
    // 4 · cápsula que se rompe a toques
    paso('¡Toca la cápsula hasta romperla!');
    const grietas = ['M70 8 L62 30 L74 44 L64 60', 'M20 52 L40 60 L36 78 L52 88', 'M118 40 L100 58 L112 74 L96 92', 'M60 132 L66 110 L54 96 L70 82', 'M30 104 L50 98 L58 112 L80 106'];
    const cap = obj(`<svg viewBox="0 0 140 140">${grietas.map(d => `<path d="${d}" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round"/>`).join('')}</svg>`, 50, 52, 'capsula', 'Romper cápsula');
    await cap.animate([{ transform: 'translateY(-260px)' }, { transform: 'translateY(12px)' }, { transform: 'none' }], { duration: 650, easing: 'ease-in' }).finished;
    cap.focus();
    for (let k = 1; k <= 5; k++) {
      await clic(cap); if (saltado) return;
      sonGrieta(k); cap.querySelectorAll('path')[k - 1].style.opacity = 1; cap.style.setProperty('--k', k); sacude(2 + k * 2);
      cap.animate([{ rotate: '0deg' }, { rotate: `${-6 - k * 3}deg` }, { rotate: `${6 + k * 3}deg` }, { rotate: '0deg' }], { duration: 300 });
    }
    // 5 · explosión
    redoble(1.2); await espera(1200); if (saltado) return;
    sonAbre(); cap.remove(); paso('');
    const rayos = document.createElement('div'); rayos.className = 'rayos';
    rayos.style.setProperty('--r1', gal ? '#b57be0' : '#ffe45c'); rayos.style.setProperty('--r2', gal ? '#ff7ae0' : '#4fa8ff'); esc.appendChild(rayos);
    rayos.animate([{ scale: 0, rotate: '0deg' }, { scale: 1, rotate: '90deg' }], { duration: 1400, easing: 'ease-out', fill: 'forwards' });
    ep.animate([{ background: '#fff' }, { background: 'transparent' }], { duration: 700 });
    for (let i = 0; i < 46; i++) {
      const c = document.createElement('i'); c.className = 'confeti'; c.style.background = cols[i % 5]; esc.appendChild(c);
      const a = Math.random() * Math.PI * 2, d = 120 + Math.random() * 180;
      c.animate([{ transform: 'translate(-50%, -50%)', opacity: 1 }, { transform: `translate(${Math.cos(a) * d}px, ${Math.sin(a) * d + 80}px) rotate(${Math.random() * 720}deg)`, opacity: 0 }],
        { duration: 1300 + Math.random() * 700, easing: 'cubic-bezier(.1,.7,.3,1)', fill: 'forwards' });
    }
    await espera(1600);
  };
  await Promise.race([escena(), salto]);
  parar(); m.querySelector('.g-box').classList.remove('g-epbox');
  revelar(m, g, v, msgTirada(res), { txt: `Otra vez ⭐ ${cost}`, ok: (store.get().pts || 0) >= cost, fn: () => gachaEpico([desde, cost]) });
}

async function fusionar() {
  const f = fusion(fus), p = store.get();
  if (f.err || (p.pts || 0) < f.cost) return;
  const g = f.tipo === 'var' ? f.g : sortear(GATOS.filter(c => c.rar === RAR[f.r])), v = VAR[f.v], k = g.id + ':' + v.id;
  const entran = fus.map(pieza);
  fus.forEach(x => quitar(p, x));
  const nuevo = !p.col[k];
  p.col[k] = (p.col[k] || 0) + 1; p.pts -= f.cost; store.set(p); updPts();   // guardado antes de la animación
  fus = [];
  const m = modal('Fusión', `<div class="g-fx">${entran.map(e => `<div class="v-${VAR[e.v].id}">${gatoSVG(e.g, 90)}</div>`).join('')}</div><p style="color:var(--ink-3)">Fusionando…</p>`);
  if (!rapido()) { musicaMaquina(1.6); await espera(1700); }
  revelar(m, g, v, nuevo ? '¡Fusión lista! Es nuevo en tu colección.' : `¡Fusión lista! Ahora tienes ${p.col[k]} de este gato en ${v.name.toLowerCase()}.`);
}

/* ---------- ruleta del eje mixto: 5 gatos fijos por ruleta, tajadas de 30, 25, 20, 15 y 10 % (CAT_W) ----------
   Más correctas, ruleta con gatos de más rareza. [mínimo de correctas, nombre, gatos]; la primera que calce manda. */
const RULETAS = [
  [10, 'Ruleta mítica', ['faraon', 'fantasma', 'lava', 'cristal', 'fabimath']],
  [8, 'Ruleta legendaria', ['nube', 'dragon', 'lunar', 'samurai', 'galaxia']],
  [6, 'Ruleta épica', ['carey', 'astro', 'sakura', 'lima', 'fenix']],
  [4, 'Ruleta rara', ['atigrado', 'calico', 'siames', 'tuxedo', 'mate']],
  [0, 'Ruleta común', ['naranjo', 'gris', 'pelusa', 'negrito', 'ruso']]
].map(([min, name, ids]) => ({ min, name, gs: ids.map((id, i) => ({ g: GATOS.find(x => x.id === id), w: CAT_W[i] })) }));
// RULETAS[i] es de rareza 4 - i: el evento corta en la ruleta de su rareza mínima
const ruletaDe = n => RULETAS.find((r, i) => n >= r.min || 4 - i <= evRar());
// correctas = null: giro de regalo del evento; vi = variante con que sale el gato
async function girarRuleta(correctas, vi = 0) {
  const R = ruletaDe(correctas), sale = sortear(R.gs), g = sale.g, v = VAR[Math.max(vi, evVar())], k = g.id + ':' + v.id;
  const p = store.get(); p.col = p.col || {};
  const nuevo = !VAR.some(x => p.col[g.id + ':' + x.id]);
  p.col[k] = (p.col[k] || 0) + 1; store.set(p);   // guardado antes de girar: recargar no pierde el gato
  const m = await rueda(R.name + (v.id === 'normal' ? '' : ' ' + v.name.toLowerCase()), `${correctas === null ? 'Regalo del evento' : correctas + ' correctas'} · ${R.gs.map(x => `${x.g.name} ${x.w} %`).join(' · ')}`,
    R.gs.map(x => ({ w: x.w, fill: x.g.rar.color, html: (cx, cy) => `<g class="v-${v.id}" transform="translate(${cx - 22},${cy - 22})">${gatoSVG(x.g, 44)}</g>` })), R.gs.indexOf(sale));
  revelar(m, g, v, nuevo ? '¡Gato nuevo para tu colección!' : `Repetido: ya tienes ${p.col[k]} de este gato en ${v.name.toLowerCase()}.`);
}
// abre un modal con una rueda de tajadas { w, fill, html(cx, cy) } y la gira hasta la tajada i
async function rueda(titulo, sub, tajadas, i) {
  const C = 150, Rr = 140, pt = (a, r) => `${C + r * Math.sin(a * Math.PI / 180)},${C - r * Math.cos(a * Math.PI / 180)}`;
  const tot = tajadas.reduce((s, x) => s + x.w, 0);
  let a = 0, svg = '';
  const taj = tajadas.map((x, j) => { const a0 = a; a += x.w / tot * 360; const mid = (a0 + a) / 2;
    svg += `<path d="M${C},${C} L${pt(a0, Rr)} A${Rr},${Rr} 0 0 1 ${pt(a, Rr)} Z" fill="${x.fill}" fill-opacity="${j % 2 ? .3 : .55}" stroke="#fff" stroke-width="3"/>`;
    const [cx, cy] = pt(mid, Rr * 0.64).split(',').map(Number);
    svg += x.html(cx, cy);
    return { a0, a1: a }; });
  const t = taj[i], fin = 360 * 6 - ((t.a0 + t.a1) / 2 + (Math.random() - 0.5) * (t.a1 - t.a0) * 0.7);
  const m = modal(titulo, `<h3 style="font-size:22px">🎡 ${titulo}</h3><div class="sub" style="color:var(--ink-3);font-size:14px;margin:4px 0 12px">${sub}</div>
    <div class="g-ruleta"><div class="g-flecha">▼</div><div class="g-rueda" id="gRueda"><svg viewBox="0 0 300 300" width="300" height="300">${svg}<circle cx="${C}" cy="${C}" r="16" fill="#fff" stroke="#e8680c" stroke-width="4"/></svg></div></div>`);
  if (!rapido()) {
    musicaMaquina(4.5);
    await espera(50); m.querySelector('#gRueda').style.transform = `rotate(${fin}deg)`; await espera(4700);
  }
  return m;
}

/* ---------- granja: los gatos que tiene pasean por un parque; clic en el pasto deja un pescado ---------- */
function granja() {
  const col = store.get().col || {};
  // ponytail: tope de 60 gatos en pantalla; con más, el parque se vuelve una masa ilegible
  const copias = Object.entries(col).flatMap(([k, n]) => Array(n).fill(k)).slice(0, 60);
  const deco = ['🌳', '🌳', '🌲', '🌷', '🌼', '🌻', '⛲', '🌳', '🌷', '🪨'].map((e, i) => `<span class="deco" style="left:${(i * 37 + 5) % 92}%;top:${(i * 53 + 8) % 85}%">${e}</span>`).join('');
  const total = Object.values(col).reduce((s, n) => s + n, 0);
  const m = modal('Granja de gatos', `<div class="top"><div><h3 style="font-size:24px">🌳 Granja de gatos</h3><div class="sub" style="margin:0;color:var(--ink-3);font-size:14px">${copias.length < total ? `${copias.length} de tus ${total}` : copias.length} gatos paseando · clic en el pasto para dejar un pescado.</div></div>
    <div style="display:flex;gap:8px"><button class="btn btn-primary" id="gFeed">🐟 Dar comida a todos</button><button class="btn btn-ghost" id="gOpsF">${gatoSVG(GATOS[0], 20)} Michi operaciones</button><button class="btn btn-ghost" id="gClose">Cerrar</button></div></div>
    <div class="g-park" id="gPark">${deco}</div>`, 'g-farm');
  const park = m.querySelector('#gPark'), W = () => park.clientWidth - 56, H = () => park.clientHeight - 56;
  const gatos = copias.map(k => {
    const pz = pieza(k), el = document.createElement('div');
    el.className = 'gt'; el.title = pz.g.name; el.innerHTML = `<div class="v-${VAR[pz.v].id}">${gatoSVG(pz.g, 52)}</div>`;
    const c = { el, x: Math.random() * W(), y: Math.random() * H(), ocupado: false };
    el.style.left = c.x + 'px'; el.style.top = c.y + 'px'; park.appendChild(el);
    return c;
  });
  const ir = (c, x, y) => {   // camina a (x, y) y devuelve los ms que tarda
    const ms = Math.max(300, Math.hypot(x - c.x, y - c.y) / 70 * 1000);
    c.el.classList.toggle('izq', x < c.x);
    c.el.style.transitionDuration = ms + 'ms'; c.x = x; c.y = y; c.el.style.left = x + 'px'; c.el.style.top = y + 'px';
    return ms;
  };
  const comer = (c, x, y) => {
    const pez = document.createElement('span'); pez.className = 'pez'; pez.textContent = '🐟'; pez.style.left = x + 'px'; pez.style.top = y + 'px'; park.appendChild(pez);
    c.ocupado = true;
    setTimeout(() => { pez.remove(); const cor = document.createElement('span'); cor.className = 'cor'; cor.textContent = '❤'; c.el.appendChild(cor); setTimeout(() => cor.remove(), 1200); c.ocupado = false; }, ir(c, x - 26, y - 26));
  };
  const paseo = rapido() ? 0 : setInterval(() => gatos.forEach(c => { if (!c.ocupado && Math.random() < 0.35) ir(c, Math.random() * W(), Math.random() * H()); }), 1500);
  park.addEventListener('click', e => {
    const r = park.getBoundingClientRect(), x = e.clientX - r.left, y = e.clientY - r.top;
    const c = gatos.filter(c => !c.ocupado).sort((a, b) => Math.hypot(a.x - x, a.y - y) - Math.hypot(b.x - x, b.y - y))[0];
    if (c) comer(c, x, y);
  });
  m.querySelector('#gFeed').addEventListener('click', () => gatos.forEach(c => { if (!c.ocupado) comer(c, 26 + Math.random() * W(), 26 + Math.random() * H()); }));
  const cerrar = () => { clearInterval(paseo); m.remove(); document.removeEventListener('keydown', esc); };
  const esc = e => { if (e.key === 'Escape') cerrar(); };
  document.addEventListener('keydown', esc);
  m.querySelector('#gClose').addEventListener('click', cerrar);
  m.querySelector('#gOpsF').addEventListener('click', () => { cerrar(); operaciones(); });
  m.querySelector('#gClose').focus();
}
