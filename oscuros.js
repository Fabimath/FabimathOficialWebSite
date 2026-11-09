/* Portal oscuro (PAES Fabimath): minijuego del casino, la única fuente de la variante Oscuro y de los 16 gatos de gatos_oscuros.js.
   Cada intento cuesta OSC_COST 🐟 y son OSC_N tarjetas al azar de Biología (FLASH, paes_flash_bio.js): se escribe la palabra, un solo intento por tarjeta.
   Aciertos: 0–2 raro, 3 épico, 4 legendario, 5 mítico. Siempre sale un gato oscuro de esa rareza: de los de GATOS (w 1) o de GATOS_OSC (w 2.5 c/u, la mitad de las veces).
   El intento se guarda en p.oscPend = { c: [[tema, índice] ×5], i, ok } apenas se paga y avanza al responder: recargar no pierde lo pagado ni deja repetir una tarjeta.
   No da estrellas. Se carga después de casino.js: usa pez, sumaPez, updPez, renderCasino (casino.js), modal, revelar, sortear (gacha.js), normal, dist (paes.html). */

const OSC_COST = 2000, OSC_N = 5, OSC_RAR = [1, 1, 1, 2, 3, 4];   // aciertos → índice en RAR
const OSC_V = VAR.find(v => v.id === 'oscuro');
const oscEsc = ok => `<div class="o-esc" aria-label="Rareza alcanzada: ${RAR[OSC_RAR[ok]].name}">${RAR.slice(1).map((r, j) => `<i class="${j + 1 <= OSC_RAR[ok] ? 'on' : ''}" style="--c:${r.color}">${r.name}</i>`).join('')}</div>`;
const oscYa = () => window.cloudSaveYa && cloudSaveYa();   // sin esperar el segundo de cloudSave: recargar no deja repetir tarjeta ni volver a sortear el premio
const oscTarjetas = () => Object.entries(typeof FLASH === 'undefined' ? {} : FLASH).flatMap(([t, a]) => a.map((_, i) => [t, i]));

document.head.insertAdjacentHTML('beforeend', `<style>
  .casino .c-os { background: radial-gradient(circle at 50% 0%, #34195a, #0b0614 75%); color: #efe6fb; border: none; box-shadow: inset 0 0 0 1px #3a2260, 0 0 18px rgba(60,20,100,.5); }
  .casino .c-os p { color: #cdbde8; }
  .o-esc { display: flex; gap: 4px; justify-content: center; flex-wrap: wrap; }
  .o-esc i { font-style: normal; font-size: 11px; font-weight: 700; letter-spacing: .04em; padding: 3px 9px; border-radius: 99px; border: 1px solid var(--c); color: var(--c); opacity: .7; transition: all .4s var(--ease); }
  .o-esc i.on { opacity: 1; background: var(--c); color: #fff; box-shadow: 0 0 12px var(--c); }
  .g-box.o-portal { background: radial-gradient(circle at 50% 0%, #2c1450, #0d0716 70%); color: #efe6fb; width: min(520px, 100%); position: relative; }
  .o-portal h3 { font-size: 22px; } .o-portal .sub { color: #b9a8d6; font-size: 14px; margin: 6px 0 12px; }
  .o-portal .o-gato { display: inline-block; margin: 14px 0 6px; padding: 10px; }
  .o-fp { font-size: 20px; line-height: 1.5; margin: 18px 0; text-align: left; }
  .o-fp .hueco { display: inline-block; min-width: 90px; border-bottom: 2px solid #b46cff; margin: 0 3px; }
  .o-in { display: flex; gap: 8px; flex-wrap: wrap; }
  .o-in input { flex: 1; min-width: 150px; font: inherit; padding: 10px 14px; border-radius: 12px; border: 2px solid #4a2d78; background: #190d2c; color: #fff; }
  .o-in input.good { border-color: #3fdc8a; } .o-in input.bad { border-color: #ff5a6a; }
  .o-res { margin-top: 14px; min-height: 48px; text-align: left; line-height: 1.5; }
  .o-res.good { color: #7dffb4; } .o-res.bad { color: #ff9aa5; } .o-res b { color: #fff; }
  .o-portal .btn-ghost { color: #efe6fb; border-color: #4a2d78; }
  .o-portal .o-sig { margin-top: 6px; }
  .o-portal .o-x { position: absolute; top: 10px; right: 14px; background: none; border: none; color: #b9a8d6; font-size: 20px; cursor: pointer; }
</style>`);

// 5 tarjetas distintas al azar
function oscSortea() {
  const t = oscTarjetas();
  for (let i = t.length - 1; i > 0; i--) { const j = Math.random() * (i + 1) | 0; [t[i], t[j]] = [t[j], t[i]]; }
  return t.slice(0, OSC_N);
}
// botón de la tarjeta del casino: paga una vez y deja el intento guardado; si ya hay uno pendiente, solo lo retoma
// intento guardado sano: 5 tarjetas [tema, índice] distintas e i, ok enteros con 0 ≤ ok ≤ i ≤ 5; si no, se repara sin volver a cobrar
function oscRepara(pd) {
  const ent = (x, a, b) => Number.isInteger(x) ? Math.min(b, Math.max(a, x)) : a;
  if (!(Array.isArray(pd.c) && pd.c.length === OSC_N && pd.c.every(x => Array.isArray(x) && x.length === 2))) return { ...pd, c: oscSortea(), i: 0, ok: 0 };   // tarjetas rotas: parte de cero
  const i = ent(pd.i, 0, OSC_N);
  return { ...pd, i, ok: ent(pd.ok, 0, i) };
}
function portalOsc() {
  if (oscJuega.m && oscJuega.m.isConnected) return;   // ya hay una ventana del portal abierta (doble clic)
  const p = store.get();
  if (!p.oscPend) {
    if (pez(p) < OSC_COST || oscTarjetas().length < OSC_N) return;
    sumaPez(p, -OSC_COST); p.oscPend = { id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6), c: oscSortea(), i: 0, ok: 0 }; store.set(p); oscYa(); updPez();   // pagado y guardado antes de jugar
  } else { const r = oscRepara(p.oscPend); if (JSON.stringify(r) !== JSON.stringify(p.oscPend)) { p.oscPend = r; store.set(p); } }
  oscJuega();
}
function oscJuega() {
  const m = oscJuega.m = modal('Portal oscuro', '', 'o-portal');
  const box = m.querySelector('.g-box');
  const cerrar = () => { m.remove(); document.removeEventListener('keydown', esc); renderGacha(store.get()); renderCasino(); };
  const esc = e => { if (e.key === 'Escape') cerrar(); };
  document.addEventListener('keydown', esc);
  const tarjeta = () => {
    const pd = store.get().oscPend;
    if (!pd) return cerrar();
    if (pd.i >= OSC_N) return oscFin(m, esc);
    const ya = new Set(pd.c.map(x => x.join()));
    if (!(FLASH[pd.c[pd.i][0]] || [])[pd.c[pd.i][1]]) { const nueva = oscTarjetas().find(x => !ya.has(x.join())); if (!nueva) return cerrar(); const q = store.get(); q.oscPend.c[pd.i] = nueva; store.set(q); return tarjeta(); }   // tarjeta borrada de FLASH: se cambia por otra
    const [t, n] = pd.c[pd.i], lista = FLASH[t], c = lista[n], id = pd.id, idx = pd.i;
    box.innerHTML = `<button class="o-x" aria-label="Salir (el intento queda guardado)" title="Salir: el intento queda guardado">✕</button><h3>🌑 Portal oscuro</h3>${oscEsc(pd.ok)}
      <div class="sub">Tarjeta ${pd.i + 1} de ${OSC_N} · ${pd.ok} acierto${pd.ok === 1 ? '' : 's'}</div>
      <div class="o-fp">${c.p.replace('___', '<span class="hueco"></span>')}</div>
      <div class="o-in"><input id="oIn" type="text" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Escribe lo que falta" aria-label="Respuesta">
        <button class="btn btn-primary" id="oChk">Comprobar</button><button class="btn btn-ghost" id="oNo">No sé</button></div>
      <div class="o-res" id="oRes" role="status" aria-live="polite"></div><button class="btn btn-primary o-sig hidden" id="oNext"></button>`;
    const $o = id => box.querySelector('#' + id);
    let hecho = false;
    const comprueba = ver => {
      if (hecho) return;
      const inp = $o('oIn'), v = normal(inp.value);
      if (!ver && !v) return inp.focus();
      // misma regla que flashCheck: exacta, o 1 error de tipeo con 6+ letras si no es la respuesta de otra tarjeta del tema
      const rs = c.r.map(normal), otras = new Set(lista.filter(k => k !== c).flatMap(k => k.r.map(normal)));
      const exacta = rs.includes(v), casi = !exacta && v.length >= 6 && !otras.has(v) && rs.some(r => dist(v, r) <= 1), ok = !ver && (exacta || casi);
      hecho = true; inp.disabled = true; inp.classList.add(ok ? 'good' : 'bad'); $o('oChk').disabled = $o('oNo').disabled = true;
      const q = store.get();
      if (!q.oscPend || q.oscPend.id !== id || q.oscPend.i !== idx) return cerrar();   // otra pestaña ya respondió, terminó o empezó otro intento
      q.oscPend.i++; q.oscPend.ok += ok ? 1 : 0; store.set(q); oscYa();   // se cuenta al responder: recargar no deja repetir la tarjeta
      if (!mudo()) { audio(); if (ok) nota(HZ(70 + 3 * q.oscPend.ok), 0, 0.25, 'triangle', 0.05); else { nota(HZ(48), 0, 0.3, 'sawtooth', 0.04); nota(HZ(43), 0.2, 0.4, 'sawtooth', 0.04); } }
      $o('oRes').className = 'o-res ' + (ok ? 'good' : 'bad');
      $o('oRes').innerHTML = (ok ? (casi ? `✔ Casi perfecto, se escribe <b>${c.r[0]}</b>.` : '✔ ¡Correcto!') : (ver ? '👀 Era así:' : '✘ No era eso. Era así:')) + `<br>${c.p.replace('___', `<b>${c.r[0]}</b>`)}`;
      box.querySelector('.o-esc').outerHTML = oscEsc(q.oscPend.ok);
      const sig = $o('oNext'); sig.textContent = q.oscPend.i >= OSC_N ? 'Abrir el portal 🌑' : 'Siguiente ▶'; sig.classList.remove('hidden'); sig.focus();
    };
    $o('oChk').addEventListener('click', () => comprueba(false));
    $o('oNo').addEventListener('click', () => comprueba(true));
    $o('oIn').addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); comprueba(false); } });
    $o('oNext').addEventListener('click', () => { $o('oNext').disabled = true; tarjeta(); });   // doble clic o Enter repetido no abre el premio dos veces
    box.querySelector('.o-x').addEventListener('click', cerrar);
    $o('oIn').focus();
  };
  tarjeta();
}
// rareza según aciertos; el gato se guarda antes de la animación
async function oscFin(m, esc) {
  document.removeEventListener('keydown', esc);
  const p = store.get();
  if (!p.oscPend || p.oscPend.i < OSC_N) { m.remove(); renderGacha(p); renderCasino(); return; }   // sin intento terminado no hay premio (otra pestaña ya lo cobró)
  const ok = oscRepara(p.oscPend).ok, rar = RAR[OSC_RAR[ok]];
  p.col = p.col || {};
  const pool = [...GATOS.filter(g => g.rar === rar).map(g => ({ g, w: 1 })), ...GATOS_OSC.filter(g => g.rar === rar).map(g => ({ g, w: 2.5 }))];
  const g = sortear(pool).g, k = g.id + ':oscuro', gatoNuevo = !VAR.some(x => p.col[g.id + ':' + x.id]), veces = (p.col[k] || 0) + 1;
  p.col[k] = veces; delete p.oscPend; store.set(p); oscYa(); updPez();
  const box = m.querySelector('.g-box');
  if (!rapido()) {
    box.innerHTML = `<h3>🌑 Portal oscuro</h3>${oscEsc(ok)}<div class="o-gato v-oscuro">${gatoSVG(g, 120, true)}</div><p class="sub">${ok} de ${OSC_N} aciertos: sale un gato ${rar.name.toLowerCase()}…</p>`;
    musicaMaquina(1.6); await espera(1800);
  }
  box.classList.remove('o-portal');   // la revelación usa la caja clara de siempre
  revelar(m, g, OSC_V, `${ok} de ${OSC_N} aciertos. ${msgTirada({ gatoNuevo, veces, v: OSC_V })}`,
    { txt: `Otra vez 🐟 ${miles(OSC_COST)}`, ok: pez(store.get()) >= OSC_COST, fn: portalOsc });
}

// tarjeta del Portal en la vitrina del casino
const renderCasinoBase = renderCasino;
renderCasino = function () {
  renderCasinoBase();
  const grid = document.querySelector('#casino .c-grid'); if (!grid) return;
  const p = store.get(), pend = !!p.oscPend, puede = pend || (pez(p) >= OSC_COST && oscTarjetas().length >= OSC_N);
  grid.insertAdjacentHTML('beforeend', `<div class="c-card c-os"><h4>🌑 Portal oscuro</h4>
    <div class="c-gatos">${RAR.slice(1).map(r => { const g = GATOS_OSC.find(x => x.rar === r); return `<span class="v-oscuro" title="${g.name}">${gatoSVG(g, 40)}</span>`; }).join('')}</div>
    <p>Responde 5 tarjetas de Biología escribiendo la palabra que falta. Cada acierto sube la rareza y siempre sale un gato oscuro: 16 gatos exclusivos, y la variante Oscuro no se consigue en ningún otro lado.</p>
    ${oscEsc(0).replace(/ aria-label="[^"]*"/, '')}
    <button class="btn btn-white" data-c="os" ${puede ? '' : 'disabled'}>${pend ? 'Continuar intento' : '🐟 ' + miles(OSC_COST)}</button></div>`);
  grid.querySelector('[data-c="os"]').addEventListener('click', portalOsc);
};
renderCasino();
