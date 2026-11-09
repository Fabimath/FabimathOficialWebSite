/* Portal oscuro (PAES Fabimath): minijuego del casino; con las Garritas oscuras del gachapón (abajo) son las únicas fuentes de la variante Oscuro y de los 16 gatos de gatos_oscuros.js.
   Cada intento cuesta OSC_COST 🐟 y son OSC_N tarjetas al azar de Biología (FLASH, paes_flash_bio.js): se escribe la palabra, un solo intento por tarjeta.
   Aciertos: 0 común, 1 raro, 2 épico, 3 legendario, 4–5 mítico. Siempre sale un gato oscuro de esa rareza: de los de GATOS (w 1) o de GATOS_OSC (w 2.5 c/u; no hay oscuros exclusivos comunes, así que con 0 aciertos sale un común de GATOS en variante Oscuro).
   El intento se guarda en p.oscPend = { c: [[tema, índice] ×5], i, ok } apenas se paga y avanza al responder: recargar no pierde lo pagado ni deja repetir una tarjeta.
   No da estrellas. Se carga después de casino.js: usa pez, sumaPez, updPez, renderCasino (casino.js), modal, revelar, sortear (gacha.js), normal, dist (paes.html). */

const OSC_COST = 2000, OSC_N = 5, OSC_RAR = [0, 1, 2, 3, 4, 4];   // aciertos → índice en RAR
const OSC_V = VAR.find(v => v.id === 'oscuro');
const oscEsc = ok => `<div class="o-esc" aria-label="Rareza alcanzada: ${RAR[OSC_RAR[ok]].name}">${RAR.map((r, j) => `<i class="${j <= OSC_RAR[ok] ? 'on' : ''}" style="--c:${r.color}">${r.name}</i>`).join('')}</div>`;
const oscYa = () => window.cloudSaveYa && cloudSaveYa();   // sin esperar el segundo de cloudSave: recargar no deja repetir tarjeta ni volver a sortear el premio
const oscTarjetas = () => Object.entries(typeof FLASH === 'undefined' ? {} : FLASH).flatMap(([t, a]) => a.map((_, i) => [t, i]));

document.head.insertAdjacentHTML('beforeend', `<style>
  .casino .c-os { background: radial-gradient(circle at 50% 0%, #34195a, #0b0614 75%); color: #efe6fb; border: none; box-shadow: inset 0 0 0 1px #3a2260, 0 0 18px rgba(60,20,100,.5); }
  .casino .c-os p { color: #cdbde8; }
  .o-esc { display: flex; gap: 4px; justify-content: center; flex-wrap: wrap; }
  .o-esc i { font-style: normal; font-size: 11px; font-weight: 700; letter-spacing: .04em; padding: 3px 9px; border-radius: 99px; border: 1px solid var(--c); color: var(--c); opacity: .7; transition: all .4s var(--ease); }
  .o-esc i.on { opacity: 1; background: var(--c); color: #fff; box-shadow: 0 0 12px var(--c); }
  /* aviso en la tarjeta Gatos del inicio: tarjeta oscura con aura que late, humo y un gato oscuro que cambia */
  .big.o-card { position: relative; isolation: isolate; background: radial-gradient(circle at 50% 0%, #34195a, #0b0614 78%); color: #efe6fb; border-color: #3a2260; padding-top: 26px; gap: 4px; animation: o-lat 3s ease-in-out infinite; }
  .big.o-card small { color: #cdbde8; }
  .o-av { position: absolute; inset: 0; z-index: -1; border-radius: inherit; overflow: hidden; pointer-events: none; background: radial-gradient(circle at 85% 22%, rgba(160,70,255,.55), transparent 55%); animation: o-aura 3s ease-in-out infinite; }
  .o-av i { position: absolute; left: -10%; bottom: -30%; width: 70%; height: 80%; border-radius: 50%; filter: blur(14px); background: radial-gradient(circle, rgba(4,1,9,.95) 20%, rgba(70,20,120,.55) 60%, transparent 75%); animation: o-humo 6s ease-in-out infinite; }
  .o-av i + i { left: 45%; width: 65%; animation-duration: 8s; animation-delay: -3s; }
  .o-gato-av { position: absolute; top: 8px; right: 8px; width: 52px; height: 52px; }
  .o-gato-av .o-l { position: absolute; inset: 0; opacity: 0; transition: opacity 1s; }
  .o-gato-av .v-oscuro.o-l { position: absolute; --m0: 120,60,190; --m1: 84,34,140; --m2: 60,20,110; }
  .o-gato-av .o-l.on { opacity: 1; }
  .o-msg { font-family: var(--font-text); font-size: 12.5px; font-weight: 700; letter-spacing: 0; color: #ead7ff; text-shadow: 0 0 8px #a855f7; margin: 0 0 -8px; line-height: 1.25; text-wrap: balance; text-align: center; }
  @media (max-width: 640px) { .big.o-card { padding-top: 12px; } .o-msg { font-size: 11.5px; margin: 0 0 -6px; } .o-gato-av { width: 44px; height: 44px; } }
  @keyframes o-lat { 0%, 100% { box-shadow: 0 0 0 1px #3a2260, 0 0 14px rgba(110,40,200,.45); } 50% { box-shadow: 0 0 0 1px #6a2fa0, 0 0 30px rgba(150,70,255,.8); } }
  @keyframes o-aura { 50% { opacity: .55; } }
  @keyframes o-humo { 0%, 100% { transform: translate(0, 0) scale(1); } 50% { transform: translate(14%, -22%) scale(1.25); } }
  @media (prefers-reduced-motion: reduce) { .big.o-card, .o-av, .o-av i { animation: none; } .o-gato-av .o-l { transition: none; } }
  /* Garritas oscuras: máquina de vitrina negra con niebla; la animación no se puede saltar ni siquiera con menos movimiento */
  .g-btn-osc { background: linear-gradient(135deg, #0b0614, #3a1a6a 55%, #0b0614); color: #efe6fb; box-shadow: inset 0 0 0 1px #6a2fa0, 0 0 12px rgba(150,70,255,.6); animation: o-lat 3s ease-in-out infinite; }
  .g-btn-osc:disabled { animation: none; box-shadow: inset 0 0 0 1px #3a2260; }
  .g-box.o-garra { background: #0d0716; width: min(460px, 100%); padding: 16px; box-shadow: 0 0 60px rgba(120,50,220,.5); }
  .o-mach { height: 400px; background: linear-gradient(#2a1450, #08040f); box-shadow: inset 0 0 0 2px #4a2d78, 0 0 24px rgba(130,60,220,.5); }
  .o-mach .g-glass { background: radial-gradient(circle at 50% 100%, #2c1650, #07030d 75%); box-shadow: inset 0 0 0 3px #4a2d78, inset 0 0 40px rgba(150,70,255,.35); }
  .o-mach .g-rail { background: #3a2260; }
  .o-mach .g-chute { background: rgba(0,0,0,.6); box-shadow: inset 0 0 14px #8a4fe0; }
  .o-mach .g-label { color: #cdb0ff; text-shadow: 0 0 10px #a855f7; }
  .o-mach .g-claw .cab { background: #4a2d78; }
  .o-mach .g-claw .hd, .o-mach .g-claw .l, .o-mach .g-claw .r { background: #7a3cc8; filter: drop-shadow(0 0 5px #b46cff); }
  .o-fog { position: absolute; width: 70%; height: 60%; border-radius: 50%; filter: blur(22px); background: radial-gradient(circle, rgba(150,70,255,.55), transparent 70%); animation: o-fog 7s ease-in-out infinite; pointer-events: none; }
  .o-fog.a { left: -15%; bottom: -10%; } .o-fog.b { right: -15%; bottom: 10%; animation-duration: 9s; animation-delay: -4s; }
  @keyframes o-fog { 0%, 100% { transform: translate(0, 0) scale(1); opacity: .6; } 50% { transform: translate(30%, -25%) scale(1.3); opacity: 1; } }
  .o-mach .g-cap { background: linear-gradient(180deg, var(--cc) 50%, #1a1024 50%); border-color: rgba(180,108,255,.4); }
  .o-mach .g-cap::before { content: ''; position: absolute; left: 9px; top: 9px; width: 4px; height: 6px; border-radius: 50%; background: #f4ff6a; box-shadow: 12px 0 #f4ff6a, 0 0 6px 1px #b6ff3a, 12px 0 6px 1px #b6ff3a; animation: o-parp 4s infinite; animation-delay: var(--d, 0s); }
  @keyframes o-parp { 0%, 90%, 100% { transform: scaleY(1); } 94% { transform: scaleY(.1); } }
  .o-rayo { position: absolute; inset: 0; background: radial-gradient(circle at 50% 0%, #fff, #b46cff 40%, transparent 75%); opacity: 0; pointer-events: none; }
  .o-mach .g-glass.rayo .o-rayo { animation: o-rayo .7s linear; }
  @keyframes o-rayo { 0% { opacity: 0; } 8% { opacity: .85; } 16% { opacity: .1; } 28% { opacity: .65; } 100% { opacity: 0; } }
  .o-open { background: radial-gradient(circle, #34195a, #05020a); }
  .o-open .g-ball { animation-iteration-count: 3; filter: drop-shadow(0 0 14px #b46cff); }
  .o-open .g-ball .b { background: #1a1024; }
  .o-open .g-ball i { border-color: rgba(180,108,255,.5); }
  .o-humo { width: 220px; height: 220px; pointer-events: none; }
  .o-humo i { position: absolute; left: 50%; top: 50%; width: 120px; height: 120px; margin: -60px; border-radius: 50%; filter: blur(12px); background: radial-gradient(circle, #000 30%, rgba(30,8,52,.85) 65%, transparent 75%); opacity: 0; }
  .o-open.abre .o-humo i { animation: o-estalla 1.6s ease-out forwards; }
  .o-humo i:nth-child(1) { --x: -90px; --y: -70px; } .o-humo i:nth-child(2) { --x: 95px; --y: -60px; } .o-humo i:nth-child(3) { --x: -70px; --y: 70px; } .o-humo i:nth-child(4) { --x: 80px; --y: 80px; } .o-humo i:nth-child(5) { --x: 0; --y: -110px; }
  @keyframes o-estalla { 0% { opacity: 1; transform: scale(.3); } 40% { opacity: 1; } 100% { opacity: 0; transform: translate(var(--x), var(--y)) scale(2.4); } }
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
    <p>Responde 5 tarjetas de Biología escribiendo la palabra que falta. Cada acierto sube un nivel de rareza (0 común, 1 raro, 2 épico, 3 legendario, 4 o 5 mítico) y siempre sale un gato oscuro: 16 gatos exclusivos, y la variante Oscuro solo se consigue aquí y en las Garritas oscuras del gachapón.</p>
    ${oscEsc(0).replace(/ aria-label="[^"]*"/, '')}
    <button class="btn btn-white" data-c="os" ${puede ? '' : 'disabled'}>${pend ? 'Continuar intento' : '🐟 ' + miles(OSC_COST)}</button></div>`);
  grid.querySelector('[data-c="os"]').addEventListener('click', portalOsc);
};
renderCasino();

/* ---------- Garritas oscuras: ⭐ G_OSC asegura uno de los 16 gatos de GATOS_OSC en variante Oscuro ----------
   Rareza con los pesos de RAR entre raro y mítico, dentro de la rareza uniforme. Se cobra y se guarda ANTES de la animación (~11 s). */
function oscElige() {
  const r = sortear(RAR.slice(1)), lista = GATOS_OSC.filter(g => g.rar === r);
  return lista[Math.random() * lista.length | 0];
}
async function garritas() {
  if (garritas.m && garritas.m.isConnected) return;   // doble clic: una sola máquina y un solo cobro
  const p = store.get();
  if ((p.pts || 0) < G_OSC) return;
  const g = oscElige(), k = g.id + ':oscuro', nivel = RAR.indexOf(g.rar);
  p.col = p.col || {};
  const gatoNuevo = !VAR.some(x => p.col[g.id + ':' + x.id]), veces = (p.col[k] || 0) + 1;
  p.col[k] = veces; p.pts -= G_OSC; store.set(p); oscYa(); updPts();   // pagado y guardado antes de animar: recargar no pierde ni repite el premio
  const oscuras = ['#3b1d6e', '#5a2a9a', '#2a2a3a', '#7a1f5c', '#1f3a6e', '#4a1d4a'];
  const pila = Array.from({ length: 36 }, (_, i) => `<div class="g-cap" style="--cc:${oscuras[i * 7 % 6]};--d:${(i * 0.37 % 3.5).toFixed(2)}s;left:${66 + i % 9 * 28 + (i / 9 | 0) % 2 * 14}px;bottom:${(i / 9 | 0) * 24}px"></div>`).join('');
  const m = garritas.m = modal('Garritas oscuras', `<div class="g-mach o-mach"><div class="g-glass"><div class="o-fog a"></div><div class="o-fog b"></div><div class="g-rail"></div>
    <div class="g-pile">${pila}</div><div class="g-chute"></div>
    <div class="g-claw" id="gClaw"><div class="cab"></div><div class="hd"></div><i class="l"></i><i class="r"></i></div><div class="o-rayo"></div></div>
    <div class="g-label">GARRITAS OSCURAS</div></div>`, 'o-garra');
  renderGacha(store.get());
  // sin saltos: mientras anima, el resto de la página queda inerte (ni Tab ni Enter llegan a otros botones)
  const fondo = [...document.body.children].filter(e => e !== m && !e.inert); fondo.forEach(e => e.inert = true);
  m.tabIndex = -1; m.focus();
  try {
  const claw = m.querySelector('#gClaw'), glass = m.querySelector('.g-glass');
  const rayo = () => { glass.classList.remove('rayo'); void glass.offsetWidth; glass.classList.add('rayo'); if (!mudo()) { audio(); nota(HZ(34), 0, 0.5, 'sawtooth', 0.05); } };
  musicaPrem(11); await espera(600); sonMoneda(); await espera(500);
  for (let i = 0; i < 2; i++) { claw.style.left = 70 + Math.random() * (glass.clientWidth - 110) + 'px'; await espera(1000); if (i) rayo(); }   // la garra duda
  const cabe = c => c.offsetLeft + c.offsetWidth <= glass.clientWidth - 4, todas = [...m.querySelectorAll('.g-pile .g-cap')];
  const arriba = todas.slice(27).filter(cabe).length ? todas.slice(27).filter(cabe) : todas.filter(cabe).length ? todas.filter(cabe) : todas, bola = arriba[Math.random() * arriba.length | 0], cc = bola.style.getPropertyValue('--cc');
  claw.style.left = bola.offsetLeft + 17 + 'px'; await espera(1000);
  claw.style.top = bola.offsetTop - 22 + 'px'; await espera(1100);
  claw.classList.add('cerrada');
  const cap = document.createElement('div'); cap.className = 'g-cap'; cap.style.setProperty('--cc', cc); claw.appendChild(cap); bola.style.visibility = 'hidden';
  await espera(500); claw.style.top = '4px'; await espera(1100);
  claw.style.left = '38px'; await espera(1000);
  claw.classList.remove('cerrada'); cap.style.top = glass.clientHeight + 20 + 'px'; rayo(); await espera(800);
  const box = m.querySelector('.g-box');
  box.innerHTML = `<div class="g-open o-open" style="--rc:${g.rar.color};--cc:${cc};--gs:${0.6 + nivel * 0.12}"><div class="g-glow"></div><div class="o-humo"><i></i><i></i><i></i><i></i><i></i></div>
    <div class="g-gato v-oscuro">${gatoSVG(g, 150)}</div><div class="g-ball"><i class="t"></i><i class="b"></i></div></div><p style="color:#b9a8d6;margin-top:12px">¿Qué gatito saldrá?</p>`;
  redoble(1.6); await espera(1600);
  m.querySelector('.g-open').classList.add('abre'); sonAbre(); await espera(1800);
  box.classList.remove('o-garra');   // la revelación usa la caja clara de siempre
  } finally { fondo.forEach(e => e.inert = false); }
  revelar(m, g, OSC_V, msgTirada({ gatoNuevo, veces, v: OSC_V }), { txt: `Otra vez ⭐ ${G_OSC}`, ok: (store.get().pts || 0) >= G_OSC, fn: garritas });
}

/* ---------- aviso en el inicio: gato oscuro que cambia cada pocos segundos en la tarjeta Gatos ---------- */
function oscAviso() {
  const a = document.querySelector('#v_menu a.big[href="#gatos"]');
  if (!a || a.querySelector('.o-av')) return;
  a.classList.add('o-card');
  a.insertAdjacentHTML('beforeend', `<span class="o-av" aria-hidden="true"><i></i><i></i></span><span class="o-gato-av" aria-hidden="true"><span class="o-l v-oscuro"></span><span class="o-l v-oscuro"></span></span><span class="o-msg">🌑 ¡Llegaron los gatos oscuros!</span>`);
  const capas = a.querySelectorAll('.o-l'), orden = GATOS_OSC.map(g => [Math.random(), g]).sort((x, y) => x[0] - y[0]).map(x => x[1]);
  let i = 0, act = 0;
  capas[0].innerHTML = gatoSVG(orden[0], 52); capas[0].classList.add('on');
  setInterval(() => {
    const sig = 1 - act; i = (i + 1) % orden.length;
    capas[sig].innerHTML = gatoSVG(orden[i], 52); capas[sig].classList.add('on'); capas[act].classList.remove('on'); act = sig;
  }, 3600);
}
oscAviso();
