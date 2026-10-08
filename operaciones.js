/* Michi operaciones: los gatos de la colección trabajan en tres escenarios y producen 🐟 cada minuto según su rareza.
   Colegio (michis estudiantes, abierto desde el inicio, con el Michi Profesor), Fábrica (obreros) y Oficina (oficinistas):
   estos dos se desbloquean para siempre con pescados, igual que cada puesto extra. El oficio de cada gato está en OFICIO (gacha.js).
   Cada puesto guarda { k: "gato:variante", t: última cosecha }: lo producido se calcula con la hora, así que sigue sumando
   con la página cerrada, hasta OPS_TOPE minutos sin recoger. Estado en p.ops = { colegio: { n: puestos, s: [puesto | null] }, … }.
   Se carga después de tamagotchi.js (usa pez, sumaPez, updPez, flota, mmss y renderHuevos). */

const OPS = [
  { id: 'colegio', of: 'estudiante', quien: 'michis estudiantes', name: 'Colegio', ico: '🏫', abre: 0, puesto: '📚', fondo: 'linear-gradient(#fff8e7, #f6e5bd)' },
  { id: 'fabrica', of: 'obrero', quien: 'michis obreros', name: 'Fábrica', ico: '🏭', abre: 100, puesto: '⚙️', fondo: 'linear-gradient(#eef1f4, #cfd6de)' },
  { id: 'oficina', of: 'oficinista', quien: 'michis oficinistas', name: 'Oficina', ico: '🏢', abre: 250, puesto: '💻', fondo: 'linear-gradient(#f0f7ff, #d6e7f8)' }
];
const OPS_MIN = 60e3, OPS_TOPE = 60, OPS_INI = 2, OPS_MAX = 6;
const pezMin = k => pieza(k).r + 1;                   // por minuto: común 1 … mítico 5
const costoPuesto = n => 20 * 2 ** (n - OPS_INI);     // 3.er puesto 20, 4.º 40, 5.º 80, 6.º 160
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
const txtAcum = x => ciclos(x) >= OPS_TOPE ? `🐟 ${acum(x)} · ¡lleno, recoge!` : `🐟 ${acum(x)} · otro en ${mmss(OPS_MIN - (Date.now() - x.t) % OPS_MIN)}`;

document.head.insertAdjacentHTML('beforeend', `<style>
  .g-box.o-box { max-height: 94vh; overflow: auto; }
  .o-tabs { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 10px; }
  .o-tab { font: inherit; font-size: 14px; font-weight: 600; border: 1px solid var(--line); background: var(--bg); border-radius: 99px; padding: 6px 14px; cursor: pointer; }
  .o-tab.on { background: #e8680c; border-color: #e8680c; color: #fff; }
  .o-escena { border-radius: 18px; padding: 14px; min-height: 300px; }
  .o-cab { display: flex; justify-content: center; align-items: flex-end; gap: 18px; margin-bottom: 14px; font-size: 30px; }
  .o-pizarra { background: #2f4f3a; color: #f4f1ea; border: 6px solid #8a5a2b; border-radius: 8px; padding: 14px 22px; font: 600 20px/1.2 "Comic Sans MS", system-ui; }
  .o-profe { position: relative; display: flex; flex-direction: column; align-items: center; }
  .o-profe small { font-size: 12px; font-weight: 700; color: var(--ink-2); }
  .o-gorro { position: absolute; top: -20px; font-size: 30px; }
  .o-cinta { padding: 6px; border-radius: 10px; background: repeating-linear-gradient(90deg, #5a5a60 0 14px, #77777e 14px 28px); animation: o-cinta 1.5s linear infinite; }
  @keyframes o-cinta { to { background-position: 28px 0; } }
  .o-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); gap: 10px; }
  .o-seat { font: inherit; min-height: 180px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 2px; padding: 10px 6px;
    background: rgba(255,255,255,.7); border: 2px dashed #b9b9c0; border-radius: 16px; color: var(--ink-3); text-align: center; }
  button.o-seat { cursor: pointer; } button.o-seat:disabled { cursor: default; opacity: .55; }
  .o-seat.lleno { background: #fff; border-style: solid; border-color: var(--rc); color: var(--ink); }
  .o-seat b { font-size: 13px; line-height: 1.2; } .o-seat small { font-size: 11.5px; color: var(--ink-3); }
  .o-mesa { font-size: 34px; }
  .o-rate { display: inline-block; margin: 3px 0; padding: 2px 8px; border-radius: 99px; background: var(--tint); color: #c4540a; font-size: 12px; font-weight: 800; }
  .o-saca { font: inherit; font-size: 11.5px; font-weight: 600; margin-top: 4px; padding: 4px 10px; border: none; border-radius: 99px; background: #ececf0; color: var(--ink-2); cursor: pointer; }
  .o-lock { padding: 40px 10px; text-align: center; } .o-lock h4 { font-size: 20px; } .o-lock p { color: var(--ink-2); margin: 8px 0 16px; }
  .o-pie { display: flex; flex-wrap: wrap; gap: 10px; align-items: center; justify-content: space-between; margin-top: 12px; font-size: 14px; color: var(--ink-3); }
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

function operaciones(sel = 'colegio') {
  const { m, cerrar } = ventana('Michi operaciones', '', 'g-farm o-box'), box = m.querySelector('.g-box');
  const total = ab => ab.s.reduce((s, x) => s + (x ? acum(x) : 0), 0);
  function dibuja() {
    const p = store.get(), o = ops(p), e = OPS.find(x => x.id === sel), ab = o[sel];
    let escena;
    if (!ab) escena = `<div class="o-lock"><div style="font-size:60px">${e.ico}</div><h4>${e.name} cerrada</h4>
      <p>Aquí trabajan los ${e.quien}. Ábrela para siempre por 🐟 ${e.abre}.</p>
      <button class="btn btn-primary" data-abre ${pez(p) < e.abre ? 'disabled' : ''}>🔓 Abrir ${e.name.toLowerCase()} 🐟 ${e.abre}</button></div>`;
    else {
      const cab = sel === 'colegio' ? `<div class="o-cab"><div class="o-pizarra">2 + 2 = 🐟🐟🐟🐟</div><div class="o-profe">${gatoSVG(PROFE, 64)}<span class="o-gorro">🎓</span><small>Michi Profesor</small></div></div>`
        : sel === 'fabrica' ? '<div class="o-cab o-cinta">📦 ⚙️ 📦 ⚙️ 📦</div>' : '<div class="o-cab">🪴 🗄️ ☕ 🖨️ 🪴</div>';
      const puestos = Array.from({ length: ab.n }, (_, i) => {
        const x = ab.s[i];
        if (!x) return `<button class="o-seat" data-pon="${i}"><span class="o-mesa">${e.puesto}</span><b>+ Poner michi</b><small>puesto libre</small></button>`;
        const pz = pieza(x.k);
        return `<div class="o-seat lleno" style="--rc:${pz.g.rar.color}"><div class="v-${VAR[pz.v].id}">${gatoSVG(pz.g, 56)}</div><b>${pz.g.name}</b>
          <small>${pz.g.rar.name} · ${VAR[pz.v].name}</small><span class="o-rate">+${pezMin(x.k)} 🐟/min</span>
          <small data-acum="${i}">${txtAcum(x)}</small><button class="o-saca" data-saca="${i}">Sacar</button></div>`;
      }).join('') + (ab.n < OPS_MAX ? `<button class="o-seat" data-puesto ${pez(p) < costoPuesto(ab.n) ? 'disabled' : ''}><span class="o-mesa">🔒</span><b>Nuevo puesto</b><small>🐟 ${costoPuesto(ab.n)}</small></button>` : '');
      escena = cab + `<div class="o-grid">${puestos}</div>`;
    }
    box.innerHTML = `<div class="top"><div style="flex:1;min-width:260px"><h3 style="font-size:24px">🏢 Michi operaciones</h3><div class="sub" style="margin:0;color:var(--ink-3);font-size:14px">Pon a trabajar a tus gatos: cada uno produce 🐟 cada minuto según su rareza (común 1 … mítico 5), aunque cierres la página, hasta ${OPS_TOPE} minutos sin recoger.</div></div>
      <div style="display:flex;gap:8px;align-items:center"><span class="pill">🐟 ${window.esAdmin ? '∞' : p.pez || 0}</span><button class="btn btn-ghost" data-x>Cerrar</button></div></div>
      <div class="o-tabs">${OPS.map(x => `<button class="o-tab ${x.id === sel ? 'on' : ''}" data-tab="${x.id}">${x.ico} ${x.name}${o[x.id] ? '' : ' 🔒'}</button>`).join('')}</div>
      <div class="o-escena" style="background:${e.fondo}">${escena}</div>
      ${ab ? `<div class="o-pie"><span>${ab.s.filter(Boolean).length}/${ab.n} puestos ocupados · solo ${e.quien}</span><button class="btn btn-primary" data-recoge ${total(ab) ? '' : 'disabled'}>🐟 Recoger ${total(ab)}</button></div>` : ''}`;
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
    if (n) flota(`+${n} 🐟`, ev.clientX, ev.clientY);
  });
  const reloj = setInterval(() => {   // solo los contadores: redibujar todo cortaría los clics
    if (!m.isConnected) return clearInterval(reloj);
    const ab = ops(store.get())[sel]; if (!ab) return;
    box.querySelectorAll('[data-acum]').forEach(s => { const x = ab.s[+s.dataset.acum]; if (x) s.textContent = txtAcum(x); });
    const r = box.querySelector('[data-recoge]'); if (r) { r.textContent = `🐟 Recoger ${total(ab)}`; r.disabled = !total(ab); }
  }, 1000);
  dibuja();
  box.querySelector('[data-x]').focus();
}

// selector de gatos libres con el oficio del escenario; listo() redibuja las operaciones
function elegirMichi(sel, i, listo) {
  const p = store.get(), e = OPS.find(x => x.id === sel), col = p.col || {}, libre = k => col[k] - trabajando(p, k);
  const ks = Object.keys(col).filter(k => pieza(k).g.of === e.of && libre(k) > 0).sort((a, b) => pezMin(b) - pezMin(a) || pieza(b).v - pieza(a).v);
  const { m, cerrar } = ventana('Elegir michi', `<h3 style="font-size:22px">${e.ico} ¿Quién trabaja aquí?</h3>
    <div class="sub" style="color:var(--ink-3);font-size:14px;margin:4px 0 12px">Solo ${e.quien}. Cada uno produce según su rareza.</div>
    ${ks.length ? `<div class="g-grid">${ks.map(k => { const pz = pieza(k);
      return `<button class="g-card si v-${VAR[pz.v].id}" style="--rc:${pz.g.rar.color}" data-k="${k}">${gatoSVG(pz.g, 56)}<b>${pz.g.name}</b><small>${VAR[pz.v].name} · libres ${libre(k)}</small><span class="o-rate">+${pezMin(k)} 🐟/min</span></button>`; }).join('')}</div>`
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
