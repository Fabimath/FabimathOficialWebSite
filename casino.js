/* Casino de pescados (PAES Fabimath): todo se paga con 🐟 (p.pez).
   · Blackjack michi: tú solo contra la casa, que es un gato superior (BJ_CASAS) elegido al azar al sentarte.
     Apuestas pescados; la casa tiene una carta boca abajo hasta que juega y se planta en 17.
     Ganar paga 2 a 1, blackjack paga 3 a 1, empate devuelve la apuesta. Cada victoria lanza confeti y suma racha.
   · Ticket de mejora (TICKET_COST): sube un gato de la colección a la variante siguiente, hasta estelar.
     Se guarda en p.tickets y se usa desde el menú del gato en el gachapón (menuGato en gacha.js).
   · Súper duper ruleta (SUPER_COST): minijuego de pesca. Sale un gato al azar en platino asegurado; un pez recorre
     una barra y, si aprietas justo en la zona dorada, sube a galáctico, y si vuelves a acertar, a estelar.
     Cada lance va más rápido y con la zona más chica (PESCA).
   Se carga después de tamagotchi.js: usa pez, sumaPez, updPez (tamagotchi.js) y modal, revelar, gatoSVG, sortear (gacha.js). */

const TICKET_COST = 1e4, SUPER_COST = 1e4, BJ_MIN = 10;
const miles = n => n === Infinity ? '∞' : Math.round(n).toLocaleString('es-CL');

/* ---------- ticket de mejora ---------- */
function comprarTicket() {
  const p = store.get(); if (pez(p) < TICKET_COST) return;
  sumaPez(p, -TICKET_COST); p.tickets = (p.tickets || 0) + 1; store.set(p); updPez();
  alert(`🎫 ¡Ticket comprado! Tienes ${p.tickets}. Para usarlo, haz clic en un gato de tu colección en el gachapón y elige «Usar ticket».`);
}
async function usarTicket(k) {
  const p = store.get(), pz = pieza(k);
  if (!(p.tickets > 0) || !(p.col || {})[k] || pz.v >= VAR.length - 1) return;
  const v = VAR[pz.v + 1], k2 = pz.g.id + ':' + v.id, nuevo = !p.col[k2];
  quitar(p, k); p.col[k2] = (p.col[k2] || 0) + 1; p.tickets--;
  if (!p.col[k] && p.acomp) p.acomp = p.acomp.map(x => x === k ? k2 : x);   // si te acompañaba, sigue haciéndolo mejorado
  store.set(p); updPez();   // guardado antes de la animación
  const m = modal('Ticket de mejora', `<div class="g-fx"><div class="v-${VAR[pz.v].id}">${gatoSVG(pz.g, 110)}</div></div><p style="color:var(--ink-3)">🎫 Mejorando a ${VAR[pz.v + 1].name.toLowerCase()}…</p>`);
  if (!rapido()) { sonMoneda(); musicaMaquina(1.6); await espera(1700); }
  revelar(m, pz.g, v, `¡Ticket usado! ${pz.g.name} subió de ${VAR[pz.v].name.toLowerCase()} a ${v.name.toLowerCase()}${nuevo ? '' : ` (ya tienes ${p.col[k2]})`}. Te quedan ${p.tickets} ticket${p.tickets === 1 ? '' : 's'}.`);
}

/* ---------- súper duper ruleta: pesca estelar ---------- */
// un lance por cada mejora: vel en barras por segundo (ida o vuelta), zona dorada en % del ancho
const PESCA = [{ vel: 2.2, zona: 22 }, { vel: 3.5, zona: 15 }];
async function superRuleta() {
  const p = store.get(); if (pez(p) < SUPER_COST) return;
  const vs = VAR.slice(VAR.findIndex(v => v.id === 'platino'));
  const rar = sortear(RAR.slice(evRar())), g = sortear(GATOS.filter(c => c.rar === rar));
  p.col = p.col || {};
  const nuevo = !VAR.some(x => p.col[g.id + ':' + x.id]);
  let nv = 0, k = g.id + ':' + vs[0].id;
  p.col[k] = (p.col[k] || 0) + 1; sumaPez(p, -SUPER_COST); store.set(p); updPez();   // platino guardado antes de pescar
  sonMoneda();
  const m = modal('Súper duper ruleta', '');
  // cada acierto cambia el gato guardado por la variante siguiente, así cerrar la pestaña no hace perder lo ganado
  while (nv < PESCA.length && await lance(m, g, vs[nv], vs[nv + 1], PESCA[nv], nv)) {
    const q = store.get(); quitar(q, k); k = g.id + ':' + vs[++nv].id; q.col[k] = (q.col[k] || 0) + 1; store.set(q);
  }
  const v = vs[nv], n = store.get().col[k];
  revelar(m, g, v, `${nv === PESCA.length ? '¡Pesca perfecta! ' : nv ? '¡Buena pesca! ' : 'Se escapó el pez, pero el platino es tuyo. '}${nuevo ? '¡Gato nuevo para tu colección!' : `Ya tienes ${n} de este gato en ${v.name.toLowerCase()}.`}`,
    { txt: `Otra vez 🐟 ${miles(SUPER_COST)}`, ok: pez(store.get()) >= SUPER_COST, fn: superRuleta });
}
// un lance: el pez va y vuelve por la barra; clic, toque o espacio para pescar. Resuelve true si cae en la zona dorada
function lance(m, g, v, sig, { vel, zona }, nv) {
  const box = m.querySelector('.g-box'), ini = 4 + Math.random() * (92 - zona);
  box.classList.remove('p-bien', 'p-mal');
  box.innerHTML = `<h3 style="font-size:22px">🎣 Pesca estelar</h3>
    <div class="sub" style="font-size:14px;margin:4px 0 10px">${g.name} · lance ${nv + 1} de ${PESCA.length} · aprieta cuando el pez esté en la zona dorada para subir a <b>${sig.name.toLowerCase()}</b></div>
    <div class="p-gato v-${v.id}">${gatoSVG(g, 120)}</div>${tagVar(v)}
    <div class="p-agua"><div class="p-zona" style="left:${ini}%;width:${zona}%"></div><div class="p-pez">🐟</div></div>
    <button class="btn btn-primary g-btn-est p-btn">¡Pescar! 🎣</button>
    <div class="p-msg" role="status" aria-live="polite">Clic, toque o barra espaciadora</div>`;
  const pz = box.querySelector('.p-pez'), t0 = performance.now();
  let x = 0, fin = false, raf;
  const mueve = t => { const f = ((t - t0) / 1000 * vel) % 2; x = 100 * (f < 1 ? f : 2 - f); pz.style.left = x + '%'; pz.style.scale = f < 1 ? '-1 1' : '1 1'; raf = requestAnimationFrame(mueve); };
  raf = requestAnimationFrame(mueve);
  return new Promise(ok => {
    const tira = async e => {
      if (fin || (e.type === 'keydown' && e.code !== 'Space')) return;
      e.preventDefault(); fin = true; cancelAnimationFrame(raf); document.removeEventListener('keydown', tira);
      const bien = x >= ini && x <= ini + zona;
      box.querySelector('.p-msg').textContent = bien ? `¡Lo pescaste! Sube a ${sig.name.toLowerCase()} ✨` : 'Uy, se escapó…';
      box.querySelector('.p-btn').disabled = true; box.classList.add(bien ? 'p-bien' : 'p-mal');
      if (!mudo()) { if (bien) musicaPremio(nv + 3); else { audio(); nota(HZ(52), 0, 0.3, 'sawtooth', 0.05); nota(HZ(47), 0.2, 0.45, 'sawtooth', 0.05); } }
      await espera(1100); ok(bien);
    };
    box.querySelector('.p-btn').addEventListener('click', tira);
    box.querySelector('.p-agua').addEventListener('click', tira);
    document.addEventListener('keydown', tira);
  });
}

/* ---------- blackjack michi ---------- */
// gatos superiores que hacen de casa: al sentarte a la mesa te toca uno al azar; no son de la colección
const BJ_CASAS = [
  { id: 'bigotes', name: 'Don Bigotes', apodo: 'el tahúr', body: '#2d2a32', shade: '#f5c542', pat: 'tuxedo', rar: RAR[4], v: 'estelar',
    gana: ['Estadística pura, mi querido humano.', 'La casa siempre gana.', '¡Otra mano para el bigote!'], pierde: ['Hasta el mejor pierde una mano.', 'Varianza, nada más.', 'Mmm… barajen de nuevo.'] },
  { id: 'mishi', name: 'Lady Mishi', apodo: 'la elegante', body: '#efe0c8', shade: '#5b4030', pat: 'siames', rar: RAR[4], v: 'platino',
    gana: ['Despacito y con elegancia.', 'Un pescadito más para mi colección.', 'Paciencia, querido.'], pierde: ['Qué descortés esa carta.', 'No me volverá a pasar.', 'Sigo siendo la más elegante.'] },
  { id: 'kamikaze', name: 'Kamikaze', apodo: 'el que va por todo', body: '#ff6a3d', shade: '#ffb400', pat: 'rayas', rar: RAR[4], v: 'galactico',
    gana: ['¡¡TODO PARA LA CASA, MIAU!!', '¡Te dije que iba por todo!', '¡Más fuego, más pescado!'], pierde: ['¡¡NOOO, MI PESCADO!!', 'Valió la pena el intento.', 'La próxima va doble.'] },
  { id: 'espejo', name: 'Profe Espejo', apodo: 'el profe crupier', body: '#7c5cf0', shade: '#5a3cc9', pat: 'manchas', rar: RAR[4], v: 'arcoiris',
    gana: ['Q.E.D.', 'Teorema demostrado.', 'La probabilidad estaba de mi lado.'], pierde: ['Error de cálculo, lo reviso.', 'Hipótesis rechazada.', 'Me faltó un decimal.'] }
];
const PALOS = ['♠', '♥', '♦', '♣'], RANGOS = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
const valorCarta = r => r === 'A' ? 11 : ['J', 'Q', 'K'].includes(r) ? 10 : +r;
function mano(cs) {
  let t = 0, ases = 0;
  cs.forEach(c => { t += valorCarta(c.r); if (c.r === 'A') ases++; });
  while (t > 21 && ases) { t -= 10; ases--; }
  return { t, blanda: ases > 0, bj: cs.length === 2 && t === 21 };
}
// pago total que se devuelve sobre una apuesta a (ya descontada): 0 pierde, a empate, 3a gana (2 a 1), 4a blackjack (3 a 1)
function pago(a, jug, casa) {
  const j = mano(jug), c = mano(casa);
  if (j.t > 21) return 0;
  if (j.bj && !c.bj) return 4 * a;
  if (c.bj && !j.bj) return 0;
  if (c.t > 21 || j.t > c.t) return 3 * a;
  return j.t === c.t ? a : 0;
}
// zapato de 6 mazos; se rebaraja cuando quedan menos de 52 cartas
let zapato = [];
const carta = () => { if (zapato.length < 52) zapato = shuffle(Array.from({ length: 6 }, () => PALOS.flatMap(s => RANGOS.map(r => ({ r, s })))).flat()); return zapato.pop(); };

document.head.insertAdjacentHTML('beforeend', `<style>
  .casino .c-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(230px, 1fr)); gap: 12px; }
  .casino .c-card { background: var(--bg); border: 1px solid var(--line); border-radius: 18px; padding: 16px; display: flex; flex-direction: column; gap: 8px; }
  .casino .c-card h4 { font-size: 18px; }
  .casino .c-card p { font-size: 13.5px; color: var(--ink-3); line-height: 1.45; flex: 1; }
  .casino .c-card .btn { align-self: flex-start; }
  .casino .c-bj { background: radial-gradient(circle at 30% 20%, #1f7a4d, #0f4d2f); color: #fff; border: none; }
  .casino .c-bj p { color: #d6f5e3; }
  .casino .c-tk { background: linear-gradient(160deg, #fffdf2, #fff3c4); border-color: #f0d27a; }
  .casino .c-sr { background: radial-gradient(circle at 50% 0%, #3a1a78, #120a2a); color: #fff; border: none; }
  .casino .c-sr p { color: #e6dcff; }
  .casino .c-gatos { display: flex; gap: 4px; }
  .g-modal[aria-label="Súper duper ruleta"] .g-box { background: radial-gradient(circle at 50% 30%, #3a1a78, #120a2a 70%); color: #fff; box-shadow: 0 0 0 3px #f5c542, 0 0 40px #f5c542, 0 0 90px rgba(255,255,255,.5); }
  .g-modal[aria-label="Súper duper ruleta"] .g-box .sub { color: #e6dcff !important; }
  .g-modal[aria-label="Súper duper ruleta"] .g-rev p { color: #e6dcff; }
  .g-modal[aria-label="Súper duper ruleta"] .btn-ghost, .bj-box .btn-ghost { background: rgba(255,255,255,.16); color: #fff; }
  .p-gato { width: max-content; margin: 4px auto; }
  .p-agua { position: relative; height: 56px; margin: 16px 0 12px; border-radius: 99px; cursor: pointer; overflow: hidden;
    background: repeating-linear-gradient(100deg, rgba(255,255,255,.12) 0 8px, transparent 8px 26px), linear-gradient(180deg, #3dd6ff, #1a5fd1); box-shadow: inset 0 3px 8px rgba(0,0,0,.4), 0 0 0 3px #f5c542; }
  .p-zona { position: absolute; top: 0; bottom: 0; background: linear-gradient(90deg, rgba(255,215,94,.3), #ffd75e 25% 75%, rgba(255,215,94,.3)); box-shadow: 0 0 20px #ffd75e; animation: p-brilla .8s ease-in-out infinite alternate; }
  @keyframes p-brilla { to { opacity: .6; } }
  .p-pez { position: absolute; top: 50%; translate: -50% -50%; font-size: 36px; line-height: 1; filter: drop-shadow(0 2px 3px rgba(0,0,0,.4)); }
  .p-btn { font-size: 18px; padding: 12px 28px; }
  .p-msg { min-height: 22px; margin-top: 10px; font-weight: 800; color: #ffd75e; }
  .g-box.p-bien { animation: bj-salta .5s var(--ease); } .g-box.p-mal { animation: bj-tiembla .4s; }
  .g-box.bj-box { width: min(720px, 100%); max-height: 96vh; overflow: auto; padding: 18px; color: #fff; text-align: center;
    background: radial-gradient(ellipse at 50% 30%, #2bb070, #0f4d2f 70%, #082a1a); animation: bj-neon 4s linear infinite; }
  @keyframes bj-neon {
    0%, 100% { box-shadow: 0 0 0 6px #6b3a12, 0 0 0 9px #ff3d7f, 0 0 50px #ff3d7f, 0 30px 80px rgba(0,0,0,.5); }
    33% { box-shadow: 0 0 0 6px #6b3a12, 0 0 0 9px #3dd6ff, 0 0 50px #3dd6ff, 0 30px 80px rgba(0,0,0,.5); }
    66% { box-shadow: 0 0 0 6px #6b3a12, 0 0 0 9px #ffd75e, 0 0 50px #ffd75e, 0 30px 80px rgba(0,0,0,.5); } }
  .bj-box.bj-win { animation: bj-neon 4s linear infinite, bj-salta .5s var(--ease); }
  .bj-box.bj-mega { animation: bj-neon .6s linear infinite, bj-salta .5s var(--ease) 3; }
  .bj-box.bj-mal { animation: bj-neon 4s linear infinite, bj-tiembla .4s; }
  @keyframes bj-salta { 40% { transform: scale(1.04) rotate(-1deg); filter: brightness(1.4) saturate(1.6); } }
  @keyframes bj-tiembla { 25% { transform: translateX(-8px); } 75% { transform: translateX(8px); } }
  .bj-top { display: flex; justify-content: space-between; align-items: center; gap: 10px; flex-wrap: wrap; text-align: left; }
  .bj-top h3 { font-size: 24px; background: linear-gradient(90deg, #ffd75e, #ff7ae0, #3dd6ff, #7cff6b, #ffd75e) 0 0 / 200% 100%; -webkit-background-clip: text; background-clip: text; color: transparent; animation: bj-arco 3s linear infinite; }
  @keyframes bj-arco { to { background-position: 200% 0; } }
  .bj-top small { color: #c9eed9; }
  .bj-mesa { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-top: 34px; }
  .bj-seat { position: relative; background: rgba(0,0,0,.18); border: 1px solid rgba(255,255,255,.15); border-radius: 16px; padding: 8px 6px; min-height: 290px; display: flex; flex-direction: column; align-items: center; gap: 4px; }
  .bj-seat.yo { background: rgba(255,215,94,.15); border-color: #ffd75e; }
  .bj-seat.turno { box-shadow: 0 0 0 2px #fff, 0 0 18px rgba(255,255,255,.6); }
  .bj-seat b { font-size: 16px; line-height: 1.1; } .bj-seat small { font-size: 12px; color: #c9eed9; }
  .bj-seat.casa { background: rgba(0,0,0,.28); border-color: rgba(255,215,94,.5); }
  .bj-cartas { display: flex; justify-content: center; min-height: 76px; margin-top: 10px; }
  .bj-c { width: 50px; height: 72px; border-radius: 6px; background: #fff; color: #1d1d1f; font-weight: 800; font-size: 19px; line-height: 1.05; display: flex; flex-direction: column; align-items: center; justify-content: center;
    box-shadow: 0 2px 6px rgba(0,0,0,.35); margin-left: -12px; animation: bj-da .35s var(--ease) both; }
  .bj-c:first-child { margin-left: 0; }
  .bj-c.r { color: #d62828; }
  .bj-c.dorso { background: repeating-linear-gradient(45deg, #e8680c 0 5px, #ffb35c 5px 10px); box-shadow: inset 0 0 0 3px #fff, 0 2px 6px rgba(0,0,0,.35); }
  @keyframes bj-da { from { transform: translateY(-60px) rotate(-12deg); opacity: 0; } }
  .bj-tot { font-size: 15px; font-weight: 700; min-height: 18px; }
  .bj-ficha { font-size: 12px; font-weight: 700; background: #ffd75e; color: #3a2400; border-radius: 99px; padding: 2px 9px; min-height: 20px; }
  .bj-res { font-size: 12.5px; font-weight: 800; border-radius: 99px; padding: 2px 9px; }
  .bj-res.gana { background: linear-gradient(90deg, #ffd75e, #ff7ae0, #3dd6ff, #7cff6b) 0 0 / 200% 100%; color: #1d1d1f; font-size: 15px; padding: 4px 12px; box-shadow: 0 0 18px #ffd75e; animation: g-pop .5s var(--ease), bj-arco 1.5s linear infinite; } .bj-res.pierde { background: #e8342a; color: #fff; } .bj-res.empata { background: #e3e3ea; color: #1d1d1f; }
  .bj-bur { position: absolute; left: 50%; top: -12px; translate: -50% -100%; width: max-content; max-width: 220px; background: #fff; color: #1d1d1f; font-size: 12px; font-weight: 600; padding: 6px 9px; border-radius: 12px; z-index: 2;
    box-shadow: 0 4px 12px rgba(0,0,0,.3); animation: g-pop .3s var(--ease) both; }
  .bj-ctl { margin-top: 12px; display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; align-items: center; }
  .bj-ctl .btn { padding: 9px 16px; font-size: 15px; }
  .bj-chip { width: 50px; height: 50px; border-radius: 50%; border: 4px dashed #fff; font: inherit; font-weight: 800; font-size: 12px; cursor: pointer; color: #fff; box-shadow: 0 2px 6px rgba(0,0,0,.4); transition: transform .25s var(--ease), box-shadow .25s; }
  .bj-chip:not(:disabled):hover { transform: translateY(-5px) rotate(25deg) scale(1.12); box-shadow: 0 0 16px #fff, 0 6px 12px rgba(0,0,0,.4); }
  .bj-chip:disabled { opacity: .35; cursor: default; }
  .bj-ctl [data-dar]:not(:disabled) { background: linear-gradient(90deg, #ffd75e, #ff7ae0); color: #3a0030; animation: bj-late 1.2s ease-in-out infinite; }
  @keyframes bj-late { 50% { transform: scale(1.07); box-shadow: 0 0 22px #ff7ae0; } }
  .bj-msg { min-height: 22px; margin-top: 8px; font-weight: 700; }
  .bj-tabla { margin-top: 10px; font-size: 12.5px; color: #c9eed9; }
  .bj-racha { color: #ffd75e; font-weight: 800; }
  .bj-fx { position: fixed; inset: 0; pointer-events: none; z-index: 10; overflow: hidden; }
  .bj-fx i { position: absolute; left: 50%; top: 45%; width: 10px; height: 14px; border-radius: 3px; font-style: normal; font-size: 24px; line-height: 1; animation: bj-boom 1.5s cubic-bezier(.2,.8,.3,1) forwards; }
  .bj-fx i.e { width: auto; height: auto; background: none !important; }
  @keyframes bj-boom { 50% { transform: translate(calc(var(--x) * .8), var(--y)) rotate(calc(var(--r) / 2)); } to { transform: translate(var(--x), calc(var(--y) + 320px)) rotate(var(--r)); opacity: 0; } }
  .bj-plus { position: absolute; left: 50%; top: 40%; translate: -50% -50%; white-space: nowrap; font-size: clamp(40px, 9vw, 72px); font-weight: 900; color: #ffd75e;
    text-shadow: 0 0 12px #ff7ae0, 0 0 30px #ffd75e, 0 4px 0 #6b3a12; animation: bj-sube 1.8s var(--ease) forwards; }
  @keyframes bj-sube { from { transform: scale(.2); opacity: 0; } 20% { transform: scale(1.25); opacity: 1; } 70% { transform: scale(1); opacity: 1; } to { transform: translateY(-120px); opacity: 0; } }
  @media (max-width: 600px) { .bj-mesa { grid-template-columns: 1fr; } }
  @media (prefers-reduced-motion: reduce) { .bj-c, .bj-bur, .bj-box, .bj-top h3, .bj-res.gana, .bj-ctl [data-dar] { animation: none !important; } }
</style>`);

function blackjack() {
  const CHIPS = [[10, '#2f9bff'], [50, '#ff3d7f'], [100, '#ff8a3d'], [1000, '#b26bff'], [10000, '#e0a000'], [100000, '#17c98a']];
  const dueno = BJ_CASAS[Math.random() * BJ_CASAS.length | 0], vDueno = VAR.find(v => v.id === dueno.v);
  const yo = { cs: [], a: 0 };
  let apuesta = BJ_MIN, tocada = false, casa = [], oculta = true, jugando = false, miTurno = false, res = null, bur = '', neto = 0, manos = 0, racha = 0;
  const m = modal('Blackjack michi', '', 'bj-box'), box = m.querySelector('.g-box');
  const fichas = () => pez(store.get());
  const cartaHTML = c => `<div class="bj-c ${'♥♦'.includes(c.s) ? 'r' : ''}">${c.r}<span>${c.s}</span></div>`;
  // blanda: muestra las dos cuentas del as (7/17) mientras el jugador decide
  const totTxt = (cs, blanda) => { if (!cs.length) return ''; const h = mano(cs); return h.bj ? 'Blackjack' : h.t > 21 ? `${h.t} · se pasó` : (blanda && h.blanda && h.t < 21 ? `${h.t - 10}/${h.t}` : h.t); };

  function pinta(msg) {
    box.innerHTML = `<div class="bj-top"><div><h3>🃏 Blackjack michi</h3><small>La casa se planta en 17 · ganar paga 2 a 1 · blackjack paga 3 a 1 🤑</small></div>
      <div style="display:flex;gap:8px;align-items:center"><span class="pill">🐟 ${miles(fichas())}</span><button class="btn btn-ghost" data-x ${jugando ? 'disabled' : ''}>Cerrar</button></div></div>
      <div class="bj-mesa">
        <div class="bj-seat casa">${bur ? `<div class="bj-bur">${bur}</div>` : ''}
          <div class="v-${dueno.v}">${gatoSVG(dueno, 84)}</div><b>La casa: ${dueno.name}</b><small>${dueno.apodo} · ${vDueno.name.toLowerCase()}</small>
          <div class="bj-cartas">${casa.map((c, i) => i === 1 && oculta ? '<div class="bj-c dorso"></div>' : cartaHTML(c)).join('')}</div>
          <div class="bj-tot">${oculta ? (casa[0] ? valorCarta(casa[0].r) + ' + ?' : '') : totTxt(casa)}</div></div>
        <div class="bj-seat yo ${miTurno ? 'turno' : ''}">
          <div style="font-size:52px;line-height:84px">🧑‍🎓</div><b>Tú</b><small>🐟 ${miles(fichas())}</small>
          <span class="bj-ficha">${yo.a ? '🐟 ' + miles(yo.a) : ''}</span>
          <div class="bj-cartas">${yo.cs.map(cartaHTML).join('')}</div><div class="bj-tot">${totTxt(yo.cs, jugando)}</div>
          ${res ? `<span class="bj-res ${res[0]}">${res[1]}</span>` : ''}</div></div>
      <div class="bj-msg" role="status" aria-live="polite">${msg || ''}</div>
      <div class="bj-ctl">${jugando ? (miTurno ? `<button class="btn btn-white" data-acc="pedir">Pedir carta</button><button class="btn btn-white" data-acc="plantar">Plantarse</button>` : '')
        : `${CHIPS.map(([n, c]) => `<button class="bj-chip" style="background:${c}" data-chip="${n}" ${apuesta + n > fichas() ? 'disabled' : ''}>+${n >= 1000 ? n / 1000 + 'k' : n}</button>`).join('')}
          <button class="btn btn-ghost" data-ap="min">Mínimo</button><button class="btn btn-ghost" data-ap="max">Todo</button>
          <span class="pill" style="background:#ffd75e;color:#3a2400">Apuesta 🐟 ${miles(apuesta)}</span>
          <button class="btn btn-white" data-dar ${apuesta > fichas() || apuesta < BJ_MIN ? 'disabled' : ''}>Repartir ▶</button>`}</div>
      ${manos ? `<div class="bj-tabla">En esta mesa: ${manos} mano${manos === 1 ? '' : 's'} · ${neto >= 0 ? 'vas ganando' : 'vas perdiendo'} 🐟 ${miles(Math.abs(neto))}${racha > 1 ? ` · <span class="bj-racha">🔥 racha de ${racha}</span>` : ''}</div>` : ''}`;
    box.querySelector('[data-x]')?.addEventListener('click', cerrar);
    // la primera ficha reemplaza la apuesta mínima de partida; las siguientes suman
    box.querySelectorAll('[data-chip]').forEach(b => b.addEventListener('click', () => { apuesta = (tocada ? apuesta : 0) + +b.dataset.chip; tocada = true; pinta(); }));
    box.querySelectorAll('[data-ap]').forEach(b => b.addEventListener('click', () => { apuesta = b.dataset.ap === 'min' ? BJ_MIN : Math.min(fichas(), 1e9); tocada = b.dataset.ap !== 'min'; pinta(); }));
    box.querySelector('[data-dar]')?.addEventListener('click', ronda);
    box.querySelectorAll('[data-acc]').forEach(b => b.addEventListener('click', () => accion && accion(b.dataset.acc)));
  }
  let accion = null;
  const pausa = ms => espera(rapido() ? Math.min(ms, 120) : ms);
  const clac = () => { if (!mudo()) { audio(); nota(HZ(76), 0, 0.05, 'square', 0.03); } };
  const al = arr => arr[Math.random() * arr.length | 0];
  const di = txt => { bur = txt; setTimeout(() => { if (bur === txt) { bur = ''; if (!jugando) pinta(box.querySelector('.bj-msg')?.textContent); } }, 3000); };
  // sacudida de la mesa; si ganas, además confeti, emojis y el premio en grande (va en el modal: pinta() reescribe la caja)
  function fiesta(gano, bj) {
    box.classList.remove('bj-win', 'bj-mega', 'bj-mal'); void box.offsetWidth;
    box.classList.add(gano > 0 ? (bj ? 'bj-mega' : 'bj-win') : 'bj-mal');
    if (gano <= 0 || rapido()) return;
    const cols = ['#ff3d7f', '#ffd75e', '#3dd6ff', '#7cff6b', '#b26bff', '#ff8a3d'], fx = document.createElement('div');
    fx.className = 'bj-fx';
    fx.innerHTML = `<div class="bj-plus">+${miles(gano)} 🐟${racha > 1 ? ` 🔥x${racha}` : ''}</div>` + Array.from({ length: bj ? 110 : 60 }, (_, i) => {
      const ang = Math.random() * Math.PI * 2, d = 120 + Math.random() * 320, e = i % 5 === 0;
      return `<i class="${e ? 'e' : ''}" style="--x:${Math.cos(ang) * d | 0}px;--y:${Math.sin(ang) * d - 160 | 0}px;--r:${Math.random() * 1080 - 540 | 0}deg;background:${cols[i % cols.length]};animation-delay:${Math.random() * .2}s">${e ? al(['🐟', '✨', '💰', '😺', '🎉', '⭐']) : ''}</i>`;
    }).join('');
    m.appendChild(fx); setTimeout(() => fx.remove(), 2000);
  }

  function turnoMio() {
    if (mano(yo.cs).t >= 21) return Promise.resolve();
    miTurno = true; pinta('Tu turno: ¿pides carta o te plantas?');
    return new Promise(fin => {
      accion = acc => {
        if (acc === 'pedir') { yo.cs.push(carta()); clac(); }
        if (acc === 'plantar' || mano(yo.cs).t >= 21) { accion = null; miTurno = false; pinta(); fin(); }
        else pinta('¿Otra carta?');
      };
    });
  }
  async function ronda() {
    const p = store.get();
    if (apuesta < BJ_MIN || pez(p) < apuesta) return;
    sumaPez(p, -apuesta); store.set(p); updPez();   // la apuesta se descuenta al repartir
    jugando = true; oculta = true; casa = []; yo.cs = []; yo.a = apuesta; res = null; bur = '';
    pinta('Repartiendo…');
    for (let r = 0; r < 2; r++) {
      yo.cs.push(carta()); clac(); pinta('Repartiendo…'); await pausa(260);
      casa.push(carta()); clac(); pinta('Repartiendo…'); await pausa(260);
    }
    if (!mano(casa).bj) await turnoMio();
    // la casa da vuelta su carta y pide hasta 17, salvo que ya te hayas pasado o tengas blackjack
    oculta = false; pinta(mano(casa).bj ? `¡${dueno.name} tiene blackjack!` : `Juega ${dueno.name}…`); await pausa(700);
    while (mano(yo.cs).t <= 21 && !mano(yo.cs).bj && mano(casa).t < 17) { casa.push(carta()); clac(); pinta(`${dueno.name} pide carta…`); await pausa(650); }
    const vuelve = pago(yo.a, yo.cs, casa), gano = vuelve - yo.a;
    const q = store.get(); sumaPez(q, vuelve); store.set(q); updPez();
    const bj = mano(yo.cs).bj;
    neto += gano; manos++; racha = gano > 0 ? racha + 1 : gano < 0 ? 0 : racha;
    res = gano > 0 ? ['gana', bj ? `🃏 BLACKJACK +${miles(gano)} 🐟` : `🎉 Ganas +${miles(gano)} 🐟`] : gano < 0 ? ['pierde', `Pierdes −${miles(yo.a)}`] : ['empata', 'Empate'];
    di(al(gano > 0 ? dueno.pierde : gano < 0 ? dueno.gana : ['Empate, nadie llora.', 'Tablas, por ahora.']));
    if (!mudo()) { if (gano > 0) musicaPremio(bj ? 4 : Math.min(2 + racha - 1, 4)); else if (gano < 0) { audio(); nota(HZ(48), 0, 0.4, 'sawtooth', 0.05); nota(HZ(43), 0.25, 0.5, 'sawtooth', 0.05); } }
    jugando = false; accion = null;
    if (apuesta > fichas()) apuesta = Math.max(BJ_MIN, Math.min(apuesta, fichas()));
    pinta(gano > 0 ? (bj ? '¡¡BLACKJACK!! Triplicaste tu apuesta 🤑' : racha > 1 ? `¡${racha} seguidas! Estás on fire 🔥` : '¡Ganaste la mano! Doble de lo apostado 🎉') : gano < 0 ? `${dueno.name} se lleva tus pescados. ¿Otra mano?` : 'Empate: recuperas tu apuesta.');
    fiesta(gano, bj);
  }
  const cerrar = () => { if (jugando) return; m.remove(); document.removeEventListener('keydown', esc); renderGacha(store.get()); };
  const esc = e => { if (e.key === 'Escape') cerrar(); };
  document.addEventListener('keydown', esc);
  pinta(fichas() < BJ_MIN ? `Necesitas al menos 🐟 ${BJ_MIN} para sentarte a jugar.` : `Hoy la casa es ${dueno.name}, ${dueno.apodo}. Elige tu apuesta y reparte.`);
}

/* ---------- vitrina del casino en la página ---------- */
function renderCasino() {
  const el = $('casino'); if (!el) return;
  const p = store.get(), f = pez(p);
  el.innerHTML = `<h3>🎰 Casino de pescados</h3><div class="sub">Se juega y se compra con 🐟 pescados. Tienes <b>🐟 ${miles(f)}</b>${p.tickets ? ` y <b>🎫 ${p.tickets} ticket${p.tickets === 1 ? '' : 's'} de mejora</b>` : ''}.</div>
    <div class="c-grid">
      <div class="c-card c-bj"><h4>🃏 Blackjack michi</h4><div class="c-gatos">${BJ_CASAS.map(g => `<span class="v-${g.v}" title="${g.name}">${gatoSVG(g, 40)}</span>`).join('')}</div>
        <p>Tú contra la casa, y la casa es un gato superior al azar: Don Bigotes, Lady Mishi, Kamikaze o Profe Espejo. Apuesta desde 🐟 ${BJ_MIN}; ganar paga el doble y blackjack el triple.</p>
        <button class="btn btn-white" data-c="bj" ${f < BJ_MIN ? 'disabled' : ''}>Sentarse a la mesa</button></div>
      <div class="c-card c-tk"><h4>🎫 Ticket de mejora</h4>
        <p>Sube un gato de tu colección a la variante siguiente: ${VAR.slice(1).map(v => v.name.toLowerCase()).join(' → ')}. El tope es <b>estelar</b>, el dorado metálico más brillante. Se usa desde el gachapón: clic en un gato y «Usar ticket».</p>
        <button class="btn btn-primary g-btn-est" data-c="tk" ${f < TICKET_COST ? 'disabled' : ''}>Comprar 🐟 ${miles(TICKET_COST)}</button></div>
      <div class="c-card c-sr"><h4>🌟 Súper duper ruleta</h4><div class="c-gatos"><span class="v-platino">${gatoSVG(GATOS[24], 40)}</span><span class="v-galactico">${gatoSVG(GATOS[24], 40)}</span><span class="v-estelar">${gatoSVG(GATOS[24], 40)}</span></div>
        <p>🎣 Minijuego de pesca: el platino es seguro. Aprieta justo cuando el pez pase por la zona dorada y sube a galáctico; acierta otra vez, más rápido, y es estelar.</p>
        <button class="btn btn-primary g-btn-est" data-c="sr" ${f < SUPER_COST ? 'disabled' : ''}>Pescar 🐟 ${miles(SUPER_COST)}</button></div>
    </div>`;
  el.querySelector('[data-c="bj"]').addEventListener('click', blackjack);
  el.querySelector('[data-c="tk"]').addEventListener('click', comprarTicket);
  el.querySelector('[data-c="sr"]').addEventListener('click', superRuleta);
}
// cada vez que cambian los pescados se actualiza la vitrina
const updPezBase = updPez;
updPez = function () { updPezBase(); renderCasino(); };
renderCasino();
