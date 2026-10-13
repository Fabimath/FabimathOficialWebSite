/* Casino de pescados (PAES Fabimath): todo se paga con 🐟 (p.pez).
   · Blackjack michi: tú y cuatro gatos especiales contra la casa. Cada uno apuesta pescados; la casa se planta en 17.
     La segunda carta de cada gato y de la casa va boca abajo hasta que juega la casa (o hasta que el gato se pasa).
     Blackjack paga 3 a 2, ganar paga 1 a 1, empate devuelve la apuesta. Los gatos especiales juegan con su propio
     montón (solo dura la sesión de la mesa) y compiten contigo en la tabla de ganancias.
   · Ticket de mejora (TICKET_COST): sube un gato de la colección a la variante siguiente, hasta estelar.
     Se guarda en p.tickets y se usa desde el menú del gato en el gachapón (menuGato en gacha.js).
   · Súper duper ruleta (SUPER_COST): un gato al azar en variante platino o más (platino, galáctico, estelar),
     con las mismas proporciones de VAR entre esas variantes.
   Se carga después de tamagotchi.js: usa pez, sumaPez, updPez (tamagotchi.js) y modal, revelar, rueda, gatoSVG, sortear (gacha.js). */

const TICKET_COST = 1e6, SUPER_COST = 1e6, BJ_MIN = 10;
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

/* ---------- súper duper ruleta ---------- */
async function superRuleta() {
  const p = store.get(); if (pez(p) < SUPER_COST) return;
  const vs = VAR.slice(VAR.findIndex(v => v.id === 'platino'));
  const rar = sortear(RAR.slice(evRar())), g = sortear(GATOS.filter(c => c.rar === rar)), v = sortear(vs), k = g.id + ':' + v.id;
  p.col = p.col || {};
  const nuevo = !VAR.some(x => p.col[g.id + ':' + x.id]);
  p.col[k] = (p.col[k] || 0) + 1; sumaPez(p, -SUPER_COST); store.set(p); updPez();   // guardado antes de girar
  const tot = vs.reduce((s, x) => s + x.w, 0), pct = x => (x.w / tot * 100).toLocaleString('es-CL', { maximumFractionDigits: 1 });
  sonMoneda();
  const m = await rueda('Súper duper ruleta', `${g.name} · ${vs.map(x => `${x.name} ${pct(x)} %`).join(' · ')}`,
    vs.map(x => ({ w: x.w, fill: x.id === 'estelar' ? '#f5c542' : x.id === 'galactico' ? '#9b5de5' : '#c9cedf', html: (cx, cy) => `<g class="v-${x.id}" transform="translate(${cx - 18},${cy - 18})">${gatoSVG(g, 36)}</g>` })),
    vs.indexOf(v));
  revelar(m, g, v, nuevo ? '¡Gato nuevo para tu colección!' : `Ya tienes ${p.col[k]} de este gato en ${v.name.toLowerCase()}.`,
    { txt: `Otra vez 🐟 ${miles(SUPER_COST)}`, ok: pez(store.get()) >= SUPER_COST, fn: superRuleta });
}

/* ---------- blackjack michi ---------- */
// gatos especiales de la mesa: no son de la colección; cada uno tiene su estilo de juego y de apuesta
const BJ_GATOS = [
  { id: 'bigotes', name: 'Don Bigotes', apodo: 'el tahúr', body: '#2d2a32', shade: '#f5c542', pat: 'tuxedo', rar: RAR[4], v: 'estelar',
    juega: (t, blanda, up, dos) => dos && (t === 11 || (t === 10 && up < 10)) ? 'doblar' : blanda ? (t >= 19 || (t === 18 && up < 9) ? 'plantar' : 'pedir')
      : t >= 17 || (t >= 13 && up <= 6) || (t === 12 && up >= 4 && up <= 6) ? 'plantar' : 'pedir',
    apuesta: s => Math.max(BJ_MIN, Math.round(s * 0.1 / 10) * 10),
    gana: ['Estadística pura, mi querido humano.', 'La casa siempre gana… salvo contra mí.', '¡Otra mano para el bigote!'], pierde: ['Hasta el mejor pierde una mano.', 'Varianza, nada más.', 'Mmm… barajen de nuevo.'] },
  { id: 'mishi', name: 'Lady Mishi', apodo: 'la prudente', body: '#efe0c8', shade: '#5b4030', pat: 'siames', rar: RAR[3], v: 'platino',
    juega: t => t >= 13 ? 'plantar' : 'pedir', apuesta: () => 20,
    gana: ['Despacito y con elegancia.', 'Un pescadito más para mi colección.', 'Paciencia, querido.'], pierde: ['Qué descortés esa carta.', 'No me volverá a pasar.', 'Sigo siendo la más elegante.'] },
  { id: 'kamikaze', name: 'Kamikaze', apodo: 'el que va por todo', body: '#ff6a3d', shade: '#ffb400', pat: 'rayas', rar: RAR[4], v: 'galactico',
    juega: (t, blanda, up, dos) => dos && t >= 9 && t <= 11 ? 'doblar' : t >= 18 ? 'plantar' : 'pedir',
    apuesta: s => s <= 100 ? s : Math.round(s * 0.25 / 10) * 10,
    gana: ['¡¡TODO O NADA, MIAU!!', '¡Te dije que iba por todo!', '¡Más fuego, más pescado!'], pierde: ['¡¡NOOO, MI PESCADO!!', 'Valió la pena el intento.', 'La próxima va doble.'] },
  { id: 'espejo', name: 'Profe Espejo', apodo: 'copia a la casa', body: '#7c5cf0', shade: '#5a3cc9', pat: 'manchas', rar: RAR[3], v: 'arcoiris',
    juega: t => t >= 17 ? 'plantar' : 'pedir', apuesta: () => 50,
    gana: ['Lo que hace la casa, lo hago yo… mejor.', 'Q.E.D.', 'Teorema demostrado.'], pierde: ['Error de cálculo, lo reviso.', 'Hipótesis rechazada.', 'Me faltó un decimal.'] }
];
const BJ_STACK = 1000;
const PALOS = ['♠', '♥', '♦', '♣'], RANGOS = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
const valorCarta = r => r === 'A' ? 11 : ['J', 'Q', 'K'].includes(r) ? 10 : +r;
function mano(cs) {
  let t = 0, ases = 0;
  cs.forEach(c => { t += valorCarta(c.r); if (c.r === 'A') ases++; });
  while (t > 21 && ases) { t -= 10; ases--; }
  return { t, blanda: ases > 0, bj: cs.length === 2 && t === 21 };
}
// pago total que se devuelve sobre una apuesta a (ya descontada): 0 pierde, a empate, 2a gana, 2,5a blackjack
function pago(a, jug, casa) {
  const j = mano(jug), c = mano(casa);
  if (j.t > 21) return 0;
  if (j.bj && !c.bj) return Math.floor(a * 2.5);
  if (c.bj && !j.bj) return 0;
  if (c.t > 21 || j.t > c.t) return 2 * a;
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
  .g-modal[aria-label="Súper duper ruleta"] .g-ruleta::before { content: ''; position: absolute; inset: -8%; border-radius: 50%; background: repeating-conic-gradient(rgba(255,215,94,.8) 0 6deg, transparent 6deg 20deg);
    -webkit-mask: radial-gradient(circle, transparent 45%, #000 50%, transparent 72%); mask: radial-gradient(circle, transparent 45%, #000 50%, transparent 72%); animation: g-gira 6s linear infinite; }
  .g-box.bj-box { width: min(1040px, 100%); max-height: 96vh; overflow: auto; padding: 18px; color: #fff; text-align: center;
    background: radial-gradient(ellipse at 50% 30%, #23895a, #0f4d2f 75%); box-shadow: 0 0 0 6px #6b3a12, 0 0 0 9px #c08a3e, 0 30px 80px rgba(0,0,0,.5); }
  .bj-top { display: flex; justify-content: space-between; align-items: center; gap: 10px; flex-wrap: wrap; text-align: left; }
  .bj-top h3 { font-size: 22px; } .bj-top small { color: #c9eed9; }
  .bj-casa { margin: 10px auto 4px; }
  .bj-casa .bj-gato { display: inline-flex; align-items: center; gap: 8px; font-weight: 700; }
  .bj-mesa { display: grid; grid-template-columns: repeat(5, 1fr); gap: 8px; margin-top: 10px; }
  .bj-seat { position: relative; background: rgba(0,0,0,.18); border: 1px solid rgba(255,255,255,.15); border-radius: 16px; padding: 8px 6px; min-height: 230px; display: flex; flex-direction: column; align-items: center; gap: 4px; }
  .bj-seat.yo { background: rgba(255,215,94,.15); border-color: #ffd75e; }
  .bj-seat.turno { box-shadow: 0 0 0 2px #fff, 0 0 18px rgba(255,255,255,.6); }
  .bj-seat b { font-size: 13.5px; line-height: 1.1; } .bj-seat small { font-size: 11px; color: #c9eed9; }
  .bj-cartas { display: flex; justify-content: center; min-height: 58px; margin-top: 10px; }
  .bj-c { width: 38px; height: 54px; border-radius: 6px; background: #fff; color: #1d1d1f; font-weight: 800; font-size: 15px; line-height: 1; display: flex; flex-direction: column; align-items: center; justify-content: center;
    box-shadow: 0 2px 6px rgba(0,0,0,.35); margin-left: -12px; animation: bj-da .35s var(--ease) both; }
  .bj-c:first-child { margin-left: 0; }
  .bj-c.r { color: #d62828; }
  .bj-c.dorso { background: repeating-linear-gradient(45deg, #e8680c 0 5px, #ffb35c 5px 10px); box-shadow: inset 0 0 0 3px #fff, 0 2px 6px rgba(0,0,0,.35); }
  @keyframes bj-da { from { transform: translateY(-60px) rotate(-12deg); opacity: 0; } }
  .bj-tot { font-size: 13px; font-weight: 700; min-height: 18px; }
  .bj-ficha { font-size: 12px; font-weight: 700; background: #ffd75e; color: #3a2400; border-radius: 99px; padding: 2px 9px; min-height: 20px; }
  .bj-res { font-size: 12.5px; font-weight: 800; border-radius: 99px; padding: 2px 9px; }
  .bj-res.gana { background: #5fd97a; color: #0b3a1c; } .bj-res.pierde { background: #e8342a; color: #fff; } .bj-res.empata { background: #e3e3ea; color: #1d1d1f; }
  .bj-bur { position: absolute; left: 50%; top: -12px; translate: -50% -100%; width: max-content; max-width: 170px; background: #fff; color: #1d1d1f; font-size: 12px; font-weight: 600; padding: 6px 9px; border-radius: 12px; z-index: 2;
    box-shadow: 0 4px 12px rgba(0,0,0,.3); animation: g-pop .3s var(--ease) both; }
  .bj-ctl { margin-top: 12px; display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; align-items: center; }
  .bj-ctl .btn { padding: 9px 16px; font-size: 15px; }
  .bj-chip { width: 50px; height: 50px; border-radius: 50%; border: 4px dashed #fff; font: inherit; font-weight: 800; font-size: 12px; cursor: pointer; color: #fff; box-shadow: 0 2px 6px rgba(0,0,0,.4); }
  .bj-chip:disabled { opacity: .35; cursor: default; }
  .bj-msg { min-height: 22px; margin-top: 8px; font-weight: 700; }
  .bj-tabla { margin-top: 10px; font-size: 12.5px; color: #c9eed9; }
  @media (max-width: 700px) { .bj-mesa { grid-template-columns: repeat(3, 1fr); } .bj-seat { min-height: 200px; } }
  @media (prefers-reduced-motion: reduce) { .bj-c, .bj-bur { animation: none; } }
</style>`);

function blackjack() {
  const CHIPS = [[10, '#2f7de1'], [50, '#e8342a'], [100, '#1d1d1f'], [1000, '#8a4fe0'], [10000, '#e0a000'], [100000, '#17a673']];
  const jug = [...BJ_GATOS.slice(0, 2).map(g => ({ g, s: BJ_STACK, neto: 0 })), { yo: true, neto: 0 }, ...BJ_GATOS.slice(2).map(g => ({ g, s: BJ_STACK, neto: 0 }))];
  let apuesta = BJ_MIN, tocada = false, casa = [], oculta = true, jugando = false, turno = -1;
  const m = modal('Blackjack michi', '', 'bj-box'), box = m.querySelector('.g-box');
  const fichas = () => pez(store.get());
  const cartaHTML = c => `<div class="bj-c ${'♥♦'.includes(c.s) ? 'r' : ''}">${c.r}<span>${c.s}</span></div>`;
  const totTxt = cs => { if (!cs.length) return ''; const h = mano(cs); return h.bj ? 'Blackjack' : h.t > 21 ? `${h.t} · se pasó` : (h.blanda && h.t < 21 ? `${h.t - 10}/${h.t}` : h.t); };
  const caraCasa = () => GATOS.find(g => g.id === 'tuxedo');

  function pinta(msg) {
    const yo = jug[2];
    box.innerHTML = `<div class="bj-top"><div><h3>🃏 Blackjack michi</h3><small>La casa se planta en 17 · blackjack paga 3 a 2 · ganar paga 1 a 1</small></div>
      <div style="display:flex;gap:8px;align-items:center"><span class="pill">🐟 ${miles(fichas())}</span><button class="btn btn-ghost" data-x ${jugando ? 'disabled' : ''}>Cerrar</button></div></div>
      <div class="bj-casa"><div class="bj-gato">${gatoSVG(caraCasa(), 46)}La casa · Michi crupier</div>
        <div class="bj-cartas">${casa.map((c, i) => i === 1 && oculta ? '<div class="bj-c dorso"></div>' : cartaHTML(c)).join('')}</div>
        <div class="bj-tot">${oculta ? (casa[0] ? valorCarta(casa[0].r) + ' + ?' : '') : totTxt(casa)}</div></div>
      <div class="bj-mesa">${jug.map((j, i) => `<div class="bj-seat ${j.yo ? 'yo' : ''} ${turno === i ? 'turno' : ''}">
        ${j.bur ? `<div class="bj-bur">${j.bur}</div>` : ''}
        ${j.yo ? `<div style="font-size:34px;line-height:46px">🧑‍🎓</div><b>Tú</b><small>🐟 ${miles(fichas())}</small>`
          : `<div class="v-${j.g.v}">${gatoSVG(j.g, 46)}</div><b>${j.g.name}</b><small>${j.g.apodo} · ${VAR.find(v => v.id === j.g.v).name.toLowerCase()}</small><small>🐟 ${miles(j.s)}</small>`}
        <span class="bj-ficha">${j.a ? '🐟 ' + miles(j.a) : ''}</span>
        <div class="bj-cartas">${(j.cs || []).map((c, k) => k === 1 && j.oculta ? '<div class="bj-c dorso"></div>' : cartaHTML(c)).join('')}</div>
        <div class="bj-tot">${j.oculta ? (j.cs.length > 2 ? 'cartas ocultas' : '?') : totTxt(j.cs || [])}</div>
        ${j.res ? `<span class="bj-res ${j.res[0]}">${j.res[1]}</span>` : ''}</div>`).join('')}</div>
      <div class="bj-msg" role="status" aria-live="polite">${msg || ''}</div>
      <div class="bj-ctl" id="bjCtl">${jugando ? (turno === 2 ? `<button class="btn btn-white" data-acc="pedir">Pedir carta</button><button class="btn btn-white" data-acc="plantar">Plantarse</button>
          ${yo.cs.length === 2 && fichas() >= yo.a ? `<button class="btn btn-white" data-acc="doblar">Doblar 🐟 ${miles(yo.a)}</button>` : ''}` : '')
        : `${CHIPS.map(([n, c]) => `<button class="bj-chip" style="background:${c}" data-chip="${n}" ${apuesta + n > fichas() ? 'disabled' : ''}>+${n >= 1000 ? n / 1000 + 'k' : n}</button>`).join('')}
          <button class="btn btn-ghost" data-ap="min">Mínimo</button><button class="btn btn-ghost" data-ap="max">Todo</button>
          <span class="pill" style="background:#ffd75e;color:#3a2400">Apuesta 🐟 ${miles(apuesta)}</span>
          <button class="btn btn-white" data-dar ${apuesta > fichas() || apuesta < BJ_MIN ? 'disabled' : ''}>Repartir ▶</button>`}</div>
      <div class="bj-tabla">Ganancias en esta mesa: ${[...jug].sort((a, b) => b.neto - a.neto).map(j => `${j.yo ? '<b>Tú</b>' : j.g.name} ${j.neto >= 0 ? '+' : ''}${miles(j.neto)}`).join(' · ')}</div>`;
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
  const di = (j, txt) => { j.bur = txt; setTimeout(() => { if (j.bur === txt) { j.bur = ''; if (!jugando) pinta(box.querySelector('.bj-msg')?.textContent); } }, 2600); };
  const al = arr => arr[Math.random() * arr.length | 0];

  async function turnoGato(i) {
    const j = jug[i], up = valorCarta(casa[0].r);
    turno = i; pinta(`Juega ${j.g.name}…`); await pausa(600);
    while (mano(j.cs).t < 21) {
      const h = mano(j.cs), d = j.g.juega(h.t, h.blanda, up, j.cs.length === 2);
      if (d === 'doblar' && j.s >= j.a) { j.s -= j.a; j.a *= 2; j.cs.push(carta()); clac(); pinta(`${j.g.name} dobla la apuesta.`); await pausa(700); break; }
      if (d !== 'pedir' && d !== 'doblar') break;
      j.cs.push(carta()); clac(); pinta(`${j.g.name} pide carta.`); await pausa(650);
    }
    if (mano(j.cs).t > 21) { j.oculta = false; di(j, al(['¡Me pasé!', '¡Miau, no!', 'Ups…'])); pinta(`${j.g.name} se pasó.`); await pausa(600); }
  }
  function turnoMio() {
    const yo = jug[2];
    if (mano(yo.cs).t >= 21) return Promise.resolve();
    turno = 2; pinta('Tu turno: ¿pides carta o te plantas?');
    return new Promise(fin => {
      accion = acc => {
        const p = store.get();
        if (acc === 'doblar') { if (pez(p) < yo.a) return; sumaPez(p, -yo.a); store.set(p); updPez(); yo.a *= 2; }
        if (acc === 'pedir' || acc === 'doblar') { yo.cs.push(carta()); clac(); }
        if (acc === 'plantar' || acc === 'doblar' || mano(yo.cs).t >= 21) { accion = null; pinta(); fin(); }
        else pinta('¿Otra carta?');
      };
    });
  }
  async function ronda() {
    const p = store.get();
    if (apuesta < BJ_MIN || pez(p) < apuesta) return;
    sumaPez(p, -apuesta); store.set(p); updPez();   // la apuesta se descuenta al repartir
    jugando = true; oculta = true; casa = [];
    jug.forEach(j => { j.cs = []; j.res = null; j.bur = ''; j.oculta = !j.yo;   // la segunda carta de cada gato va boca abajo hasta el final
      if (j.yo) { j.a = apuesta; return; }
      if (j.s < BJ_MIN) { j.s = BJ_STACK / 2; di(j, 'Me recargo con 500 🐟. ¡Revancha!'); }
      j.a = Math.min(j.s, j.g.apuesta(j.s)); j.s -= j.a; });
    pinta('Repartiendo…');
    for (let r = 0; r < 2; r++) {
      for (const j of jug) { j.cs.push(carta()); clac(); pinta('Repartiendo…'); await pausa(220); }
      casa.push(carta()); clac(); pinta('Repartiendo…'); await pausa(260);
    }
    if (!mano(casa).bj) {
      for (const i of [0, 1]) await turnoGato(i);
      await turnoMio();
      for (const i of [3, 4]) await turnoGato(i);
    }
    // la casa
    turno = -1; oculta = false; jug.forEach(j => j.oculta = false); pinta(mano(casa).bj ? '¡La casa tiene blackjack!' : 'Juega la casa…'); await pausa(700);
    const vivos = jug.some(j => mano(j.cs).t <= 21 && !mano(j.cs).bj);
    while (vivos && !mano(casa).bj && mano(casa).t < 17) { casa.push(carta()); clac(); pinta('La casa pide carta…'); await pausa(650); }
    // pagos
    const q = store.get();
    jug.forEach(j => {
      const vuelve = pago(j.a, j.cs, casa), neto = vuelve - j.a;
      j.neto += neto;
      j.res = neto > 0 ? ['gana', mano(j.cs).bj ? `Blackjack +${miles(neto)}` : `Gana +${miles(neto)}`] : neto < 0 ? ['pierde', `Pierde −${miles(j.a)}`] : ['empata', 'Empate'];
      if (j.yo) sumaPez(q, vuelve);
      else { j.s += vuelve; di(j, al(neto > 0 ? j.g.gana : neto < 0 ? j.g.pierde : ['Empate, nadie llora.', 'Tablas.'])); }
    });
    store.set(q); updPez();
    const mio = jug[2].res[0];
    if (!mudo()) { if (mio === 'gana') musicaPremio(mano(jug[2].cs).bj ? 4 : 2); else if (mio === 'pierde') { audio(); nota(HZ(48), 0, 0.4, 'sawtooth', 0.05); nota(HZ(43), 0.25, 0.5, 'sawtooth', 0.05); } }
    jugando = false; accion = null;
    if (apuesta > fichas()) apuesta = Math.max(BJ_MIN, Math.min(apuesta, fichas()));
    pinta(mio === 'gana' ? '¡Ganaste la mano! 🎉' : mio === 'pierde' ? 'La casa se lleva tus pescados. ¿Otra mano?' : 'Empate: recuperas tu apuesta.');
  }
  const cerrar = () => { if (jugando) return; m.remove(); document.removeEventListener('keydown', esc); renderGacha(store.get()); };
  const esc = e => { if (e.key === 'Escape') cerrar(); };
  document.addEventListener('keydown', esc);
  pinta(fichas() < BJ_MIN ? `Necesitas al menos 🐟 ${BJ_MIN} para sentarte a jugar.` : 'Elige tu apuesta y reparte. Don Bigotes, Lady Mishi, Kamikaze y Profe Espejo ya están sentados.');
}

/* ---------- vitrina del casino en la página ---------- */
function renderCasino() {
  const el = $('casino'); if (!el) return;
  const p = store.get(), f = pez(p);
  el.innerHTML = `<h3>🎰 Casino de pescados</h3><div class="sub">Se juega y se compra con 🐟 pescados. Tienes <b>🐟 ${miles(f)}</b>${p.tickets ? ` y <b>🎫 ${p.tickets} ticket${p.tickets === 1 ? '' : 's'} de mejora</b>` : ''}.</div>
    <div class="c-grid">
      <div class="c-card c-bj"><h4>🃏 Blackjack michi</h4><div class="c-gatos">${BJ_GATOS.map(g => `<span class="v-${g.v}" title="${g.name}">${gatoSVG(g, 40)}</span>`).join('')}</div>
        <p>Tú y cuatro gatos especiales contra la casa: Don Bigotes, Lady Mishi, Kamikaze y Profe Espejo. Cada uno apuesta pescados y juega a su manera. Apuesta desde 🐟 ${BJ_MIN}; blackjack paga 3 a 2.</p>
        <button class="btn btn-white" data-c="bj" ${f < BJ_MIN ? 'disabled' : ''}>Sentarse a la mesa</button></div>
      <div class="c-card c-tk"><h4>🎫 Ticket de mejora</h4>
        <p>Sube un gato de tu colección a la variante siguiente: ${VAR.slice(1).map(v => v.name.toLowerCase()).join(' → ')}. El tope es <b>estelar</b>, el dorado metálico más brillante. Se usa desde el gachapón: clic en un gato y «Usar ticket».</p>
        <button class="btn btn-primary g-btn-est" data-c="tk" ${f < TICKET_COST ? 'disabled' : ''}>Comprar 🐟 ${miles(TICKET_COST)}</button></div>
      <div class="c-card c-sr"><h4>🌟 Súper duper ruleta</h4><div class="c-gatos"><span class="v-platino">${gatoSVG(GATOS[24], 40)}</span><span class="v-galactico">${gatoSVG(GATOS[24], 40)}</span><span class="v-estelar">${gatoSVG(GATOS[24], 40)}</span></div>
        <p>Solo salen gatos platino, galáctico o estelar.</p>
        <button class="btn btn-primary g-btn-est" data-c="sr" ${f < SUPER_COST ? 'disabled' : ''}>Girar 🐟 ${miles(SUPER_COST)}</button></div>
    </div>`;
  el.querySelector('[data-c="bj"]').addEventListener('click', blackjack);
  el.querySelector('[data-c="tk"]').addEventListener('click', comprarTicket);
  el.querySelector('[data-c="sr"]').addEventListener('click', superRuleta);
}
// cada vez que cambian los pescados se actualiza la vitrina
const updPezBase = updPez;
updPez = function () { updPezBase(); renderCasino(); };
renderCasino();
