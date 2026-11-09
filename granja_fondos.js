/* Fondos de la granja de gatos en pixel art (mismo estilo que los escenarios de operaciones.js).
   Cada rareza tiene su escenario: común = barrio con casitas, raro = puerto con faro, épico = jardín japonés,
   legendario = templo dorado, mítico = reino celestial de islas flotantes. Cada variante lo transforma: paleta de los
   materiales, cielo, astro, luces de las ventanas y efectos animados propios (oro al atardecer, diamante de hielo,
   arcoíris pastel, platino plateado bajo la luna, galáctico en el cosmos, estelar de noche con estrellas fugaces y
   oscuro con luna roja, niebla y murciélagos).
   gfEscena(r, v) -> { svg, suelo, oscura }: svg de 192 × 104 (slice, crispEdges); suelo = fracción del alto donde empieza
   el piso caminable; oscura = escena de noche (gacha.js les pone halo a los gatos). Las animaciones son clases gfe-* sobre
   <g>, solo con transform y opacity. Nombres con prefijo gfe/GFE_: todos los scripts comparten el ámbito global. */

const gfeR = (x, y, w, h, c) => `<rect x="${x}" y="${y}" width="${w + .02}" height="${h + .02}" fill="${c}"/>`;
const gfeRGB = h => [1, 3, 5].map(i => parseInt(h.slice(i, i + 2), 16));
const gfeHex = a => '#' + a.map(x => Math.round(Math.min(255, Math.max(0, x))).toString(16).padStart(2, '0')).join('');
const gfeMix = (a, b, t) => { const p = gfeRGB(a), q = gfeRGB(b); return gfeHex(p.map((x, i) => x + (q[i] - x) * t)); };
const gfeGris = (h, t) => { const p = gfeRGB(h), l = .3 * p[0] + .59 * p[1] + .11 * p[2]; return gfeHex(p.map(x => x + (l - x) * t)); };
const gfeLuz = (h, k) => gfeHex(gfeRGB(h).map(x => x * k));
const gfeAzar = s => () => (s = s * 16807 % 2147483647) / 2147483647;   // la misma escena siempre se dibuja igual
const gfeDisco = (cx, cy, r, c) => { let d = ''; for (let dy = -r; dy <= r; dy++) { const hw = Math.floor(Math.sqrt(r * r - dy * dy + r * .4)); d += gfeR(cx - hw, cy + dy, 2 * hw + 1, 1, c); } return d; };
const gfeElipse = (cx, cy, rx, ry, c) => { let d = ''; for (let dy = -ry; dy <= ry; dy++) { const hw = Math.round(rx * Math.sqrt(1 - (dy / (ry + .5)) ** 2)); d += gfeR(cx - hw, cy + dy, 2 * hw, 1, c); } return d; };
// partículas: n grupos <g class> con retraso y duración al azar; dib(x, y) dibuja una
const gfeParts = (cls, n, az, [x0, x1], [y0, y1], dib, d) => Array.from({ length: n }, () => {
  const x = Math.round(x0 + az() * (x1 - x0)), y = Math.round(y0 + az() * (y1 - y0));
  return `<g class="${cls}" style="animation-delay:${(-az() * d).toFixed(2)}s;animation-duration:${(d * (.75 + az() * .5)).toFixed(2)}s">${dib(x, y)}</g>`;
}).join('');
const gfeBrillo = c => (x, y) => gfeR(x, y - 2, 1, 5, c) + gfeR(x - 2, y, 5, 1, c);
const GFE_MURCI = ['KK..K.K..KK', 'KKKKKKKKKKK', '.KKKKKKKKK.', '..K.KKK.K..'];
const gfeSpr = (rows, c, x0, y0) => rows.map((f, y) => { let s = ''; f.replace(/K+/g, (m, x) => (s += gfeR(x0 + x, y0 + y, m.length, 1, c), m)); return s; }).join('');

/* ---------- variantes: cielo (bandas de arriba al horizonte), c = cómo cambian los materiales, astro, luz de ventanas ---------- */
const GFE_VAR = {
  normal: { cielo: ['#5aaef8', '#6fbcfb', '#88c9fd', '#a3d6ff', '#bfe3ff', '#dbf0ff'], c: h => h, ventana: '#cfeaff', astro: 'sol', nube: '#ffffff' },
  oro: { cielo: ['#40306e', '#7a3f7c', '#c2566c', '#ec7d52', '#ffa94e', '#ffd47a'], c: h => gfeLuz(gfeMix(h, '#ff9a3a', .32), 1.03), ventana: '#ffd36b', astro: 'poniente', nube: '#ffbd86', fx: 'oro' },
  diamante: { cielo: ['#78c2ea', '#93d1f1', '#addef6', '#c6eaf9', '#ddf4fc', '#f2fbff'], c: h => gfeMix(gfeGris(h, .75), '#bfe9ff', .45), ventana: '#eafcff', astro: 'solPalido', nube: '#f6fdff', fx: 'diamante' },
  arcoiris: { cielo: ['#a2c6ff', '#b8d2ff', '#d0daff', '#ecd6f6', '#ffd9e7', '#ffe8d6'], c: h => gfeMix(h, '#fff4fb', .35), ventana: '#ffffff', astro: 'sol', nube: '#fff8ff', fx: 'arcoiris' },
  platino: { cielo: ['#0f1429', '#18203d', '#232d52', '#313d67', '#45537d', '#5c6a92'], c: h => gfeLuz(gfeMix(gfeGris(h, .9), '#c3cdea', .4), .8), ventana: '#eef2ff', astro: 'luna', nube: '#56618a', noche: 1, fx: 'platino' },
  galactico: { cielo: ['#07021a', '#11052d', '#1d0a43', '#2e1059', '#43166c', '#581c7a'], c: h => gfeLuz(gfeMix(h, '#7a3cc0', .58), .66), ventana: '#ff9de8', astro: 'planeta', noche: 1, est: '#ffe6ff', nEst: 40, fx: 'galactico' },
  estelar: { cielo: ['#040818', '#081232', '#0d1b47', '#15275b', '#1f356e', '#2c4480'], c: h => gfeLuz(gfeMix(h, '#2a428a', .5), .64), ventana: '#ffd75e', astro: 'creciente', noche: 1, est: '#ffe27a', nEst: 34, fx: 'estelar' },
  oscuro: { cielo: ['#060309', '#0d0714', '#160b20', '#200f2a', '#2b1432', '#381a36'], c: h => gfeLuz(gfeMix(gfeGris(h, .7), '#2a1838', .45), .52), ventana: '#a6ff7a', astro: 'lunaRoja', nube: '#24142e', noche: 1, fx: 'oscuro' }
};

const gfeBanda = (P, hz, y) => P.cielo[Math.min(P.cielo.length - 1, Math.max(0, Math.floor(y / (hz / P.cielo.length))))];
function gfeCielo(P, hz) { const h = hz / P.cielo.length; return P.cielo.map((c, i) => gfeR(0, Math.floor(i * h), 192, Math.ceil(h) + 1, c)).join(''); }
function gfeEstrellas(P, hz, az) {
  if (!P.noche) return '';
  const c = P.est || '#fff7d6', g = ['', ''];
  for (let i = 0; i < (P.nEst || 26); i++) {
    const x = Math.floor(az() * 192), y = Math.floor(az() * (hz - 10)), cruz = az() < .22;
    g[i % 2] += gfeR(x, y, 1, 1, c) + (cruz ? gfeR(x - 1, y, 3, 1, c) + gfeR(x, y - 1, 1, 3, c) : '');
  }
  return `<g class="gfe-tw">${g[0]}</g><g class="gfe-tw gfe-tw2">${g[1]}</g>`;
}
function gfeAstro(P, hz, [sx, sy] = [30, 14]) {
  const D = gfeDisco;
  switch (P.astro) {
    case 'sol': return D(sx, sy, 11, gfeMix(P.cielo[1], '#fff6c0', .4)) + D(sx, sy, 8, '#fff2a0') + D(sx, sy, 6, '#ffe45c') + gfeR(sx - 3, sy - 4, 3, 2, '#fff8d8');
    case 'solPalido': return D(sx, sy, 12, gfeMix(P.cielo[1], '#ffffff', .45)) + D(sx, sy, 7, '#ffffff');
    case 'poniente': {   // sol grande en el horizonte, con franjas del cielo
      let s = D(96, hz - 4, 28, gfeMix(P.cielo[4], '#ffe08a', .45)) + D(96, hz - 4, 18, '#ffe7a0') + D(96, hz - 4, 15, '#ffc94a');
      for (let y = hz - 12; y < hz; y += 3) { const dy = y - hz + 4, hw = Math.floor(Math.sqrt(Math.max(0, 18 * 18 - dy * dy))); s += gfeR(96 - hw, y, 2 * hw + 1, 1, gfeMix(P.cielo[4], '#ffe08a', .45)); }
      return s;
    }
    case 'luna': return D(150, 18, 15, gfeMix(P.cielo[1], '#9aa6d6', .3)) + D(150, 18, 10, '#eef1ff') + gfeR(145, 13, 4, 3, '#cfd5ea') + gfeR(153, 20, 5, 4, '#cfd5ea') + gfeR(147, 23, 3, 2, '#cfd5ea') + gfeR(154, 12, 2, 2, '#dfe4f4');
    case 'creciente': return D(156, 16, 9, '#ffe9a0') + D(160, 13, 8, gfeBanda(P, hz, 13));
    case 'lunaRoja': return D(150, 20, 16, gfeMix(P.cielo[2], '#7a1f2a', .35)) + D(150, 20, 11, '#b8323a') + gfeR(144, 15, 4, 3, '#93252f') + gfeR(152, 22, 5, 4, '#93252f') + gfeR(146, 25, 3, 2, '#93252f') + gfeR(143, 21, 2, 1, '#d24c50');
    case 'planeta': return D(150, 22, 10, '#c86ad8') + gfeR(141, 19, 19, 2, '#e08ae6') + gfeR(142, 25, 17, 2, '#a24ec0') + gfeR(130, 23, 40, 1, '#ffd1f5') + gfeR(133, 24, 34, 1, '#e9a0de') + gfeR(136, 22, 28, 1, '#ffe6fa') + D(178, 9, 3, '#f0d8ff');
  }
  return '';
}
function gfeNubes(P, ys) {
  if (!P.nube) return '';
  const sb = gfeLuz(P.nube, .9), nube = (x, y) => gfeR(x + 4, y, 9, 2, P.nube) + gfeR(x + 1, y + 2, 17, 2, P.nube) + gfeR(x, y + 4, 22, 2, P.nube) + gfeR(x + 2, y + 6, 18, 1, sb);
  const capa = (xs, y) => [0, 192].map(o => xs.map((x, i) => nube(o + x, y + (i % 2) * 3)).join('')).join('');
  return `<g class="gfe-nubes">${capa([8, 92, 150], ys[0])}</g><g class="gfe-nubes gfe-nubes2">${capa([50, 120], ys[1])}</g>`;
}
function gfeArcoiris(hz) {   // arco de 6 colores, detrás del escenario
  const cx = 96, cy = hz + 6, cs = ['#ff6b6b', '#ffa64d', '#ffe45c', '#6ee07a', '#5aa8ff', '#a77bea']; let s = '';
  cs.forEach((c, i) => {
    const ro = 60 - i * 3, ri = ro - 3;
    for (let y = cy - ro; y < cy; y++) {
      const dy = cy - y, wo = Math.floor(Math.sqrt(ro * ro - dy * dy)), wi = dy < ri ? Math.floor(Math.sqrt(ri * ri - dy * dy)) : 0;
      s += wi ? gfeR(cx - wo, y, wo - wi, 1, c) + gfeR(cx + wi, y, wo - wi, 1, c) : gfeR(cx - wo, y, 2 * wo, 1, c);
    }
  });
  return `<g class="gfe-pulso" opacity=".7">${s}</g>`;
}
function gfeNebulosa() {
  const b = (cx, cy, rx, ry, c) => gfeElipse(cx, cy, rx, ry, c) + gfeElipse(cx + 3, cy - 1, rx * .55 | 0, ry * .55 | 0, gfeMix(c, '#ffffff', .35));
  return `<g class="gfe-pulso" opacity=".38">${b(46, 18, 34, 9, '#ff5ec8') + b(108, 30, 40, 8, '#8a4dff') + b(172, 40, 24, 6, '#5ec8ff')}</g>`;
}
const gfeCristales = (xs, y) => xs.map(x => gfeR(x + 2, y - 7, 1, 2, '#ffffff') + gfeR(x + 1, y - 5, 3, 5, '#bfeeff') + gfeR(x + 3, y - 5, 1, 5, '#8fd4ee') + gfeR(x + 5, y - 3, 2, 3, '#d8f6ff') + gfeR(x - 2, y - 2, 2, 2, '#a8e4f7')).join('');

/* ---------- escenarios por rareza: hz = fila donde empieza el suelo; dib dibuja lo que va delante del cielo (K tiñe materiales) ---------- */
const GFE_ESC = {
  comun: { hz: 56, nubes: [5, 15], dib(P, K, az) {   // barrio con casitas, árbol y reja blanca
    let s = '';
    for (let x = 0; x < 192; x += 2) { const h = Math.round(14 + 4 * Math.sin(x / 21) + 2 * Math.sin(x / 8)); s += gfeR(x, 56 - h, 2, h, K('#a3d790')); }
    for (let x = 0; x < 192; x += 2) { const h = Math.round(9 + 3 * Math.sin(x / 15 + 2)); s += gfeR(x, 56 - h, 2, h, K('#88c676')); }
    [[4, 24, '#f3d9b1', '#c4563f'], [36, 28, '#cfe0f0', '#3f6fa8'], [124, 26, '#f5e6a8', '#b5653a'], [158, 30, '#e8b4a0', '#7a5ea8']].forEach(([x, w, pa, te]) => {
      s += gfeR(x + w - 8, 25, 3, 7, K('#8a5a4a'));   // chimenea
      for (let j = 0; j < 12; j++) { const i = Math.floor(j * 1.4), ww = w + 4 - 2 * i; if (ww < 2) break; s += gfeR(x - 2 + i, 37 - j, ww, 1, K(j % 3 ? te : gfeLuz(te, .82))); }
      s += gfeR(x, 38, w, 14, K(pa)) + gfeR(x, 38, w, 1, K(gfeLuz(pa, .82)));
      [x + 3, x + w - 8].forEach(v => s += gfeR(v, 41, 5, 5, K(gfeLuz(pa, .6))) + gfeR(v + 1, 42, 3, 3, P.ventana));
      s += gfeR(x + w / 2 - 2 | 0, 44, 4, 8, K('#7a4a2e'));
    });
    s += gfeR(71, 40, 2, 12, K('#7a5233')) + gfeDisco(72, 36, 7, K('#4f9e3f')) + gfeDisco(70, 34, 4, K('#62b84c'));
    s += gfeR(94, 38, 4, 14, K('#7a5233')) + gfeDisco(96, 30, 12, K('#4f9e3f')) + gfeDisco(93, 27, 8, K('#62b84c')) + gfeDisco(91, 25, 3, K('#7fcc5f'));
    s += gfeDisco(114, 48, 5, K('#4f9e3f')) + gfeDisco(113, 47, 3, K('#62b84c'));
    const bl = K('#f6f1e7'), sb = K('#d6ccba');   // reja de estacas
    for (let x = 1; x < 192; x += 5) s += gfeR(x, 46, 3, 10, bl) + gfeR(x + 1, 45, 1, 1, bl) + gfeR(x + 2, 46, 1, 10, sb);
    s += gfeR(0, 48, 192, 2, bl) + gfeR(0, 53, 192, 1, bl) + gfeR(0, 50, 192, 1, sb);
    s += gfeR(0, 56, 192, 48, K('#8bcb6d')) + gfeR(0, 56, 192, 2, K('#76b75b')) + gfeR(0, 82, 192, 22, K('#85c568'));
    for (let i = 0; i < 36; i++) { const x = az() * 188 | 0, y = 61 + az() * 41 | 0; s += gfeR(x, y, 3, 1, K('#7fbf62')) + gfeR(x + 1, y - 1, 1, 1, K('#7fbf62')); }
    for (let i = 0; i < 8; i++) { const x = 6 + i * 24 + (az() * 10 | 0), y = 59 + (az() * 4 | 0); s += gfeR(x, y, 1, 1, K(['#ffffff', '#ffd84a', '#ff9ac0'][i % 3])) + gfeR(x, y + 1, 1, 1, K('#5f9e48')); }
    return s;
  } },
  raro: { hz: 54, nubes: [4, 13], dib(P, K, az) {   // puerto: mar con olas, velero, muelle y faro
    let s = '';
    ['#2f86c8', '#3a95d2', '#46a3db', '#54b1e2', '#63bde8'].forEach((c, i) => s += gfeR(0, 32 + i * 4.4, 192, 4.6, K(c)));
    for (let x = 56; x < 140; x += 2) { const h = Math.max(0, Math.round(6 * Math.sin((x - 56) / 84 * Math.PI) + 1.5 * Math.sin(x / 5))); s += gfeR(x, 32 - h, 2, h, K('#86a9c0')); }
    let o = ''; for (let y = 35; y < 52; y += 4) for (let x = -16 + (y * 7) % 16; x < 208; x += 16) o += gfeR(x, y, 5, 1, K('#c9eeff'));
    s += `<g class="gfe-ola" opacity=".7">${o}</g>`;
    const vela = (x, y, k) => { let v = gfeR(x - 9 * k, y + 13 * k, 20 * k, 2 * k, K('#7a4a2e')) + gfeR(x - 7 * k, y + 15 * k, 16 * k, k, K('#5a3420')) + gfeR(x, y, k, 13 * k, K('#5a3420')) + gfeR(x, y - 2 * k, 3 * k, 2 * k, K('#e8463a'));
      for (let j = 0; j < 11 * k; j++) v += gfeR(x + 1, y + 1 + j, Math.max(1, j * .7 | 0), 1, K('#fffaf0'));
      return v; };
    s += `<g class="gfe-bote" style="animation-delay:-1.4s">${vela(112, 22, 1)}</g><g class="gfe-bote">${vela(60, 25, 1)}</g>`;
    s += `<g class="gfe-gav">${[[20, 12], [28, 16], [36, 10]].map(([x, y]) => gfeR(x, y, 2, 1, K('#fbfbff')) + gfeR(x + 2, y + 1, 1, 1, K('#fbfbff')) + gfeR(x + 3, y, 2, 1, K('#fbfbff'))).join('')}</g>`;
    s += gfeR(0, 45, 40, 2, K('#a8764a')) + gfeR(0, 47, 40, 1, K('#7a5233'));   // muelle
    [2, 13, 24, 35].forEach(x => s += gfeR(x, 48, 2, 7, K('#6a4428')));
    for (let x = 144; x < 192; x += 2) { const h = Math.round(10 + 4 * Math.sin((x - 144) / 15) + (x % 6 ? 0 : 1)); s += gfeR(x, 54 - h, 2, h, K('#7c7f8c')) + gfeR(x, 54 - h, 2, 1, K('#9a9eab')); }
    for (let y = 14; y < 44; y++) { const w = 8 + ((y - 14) / 12 | 0); s += gfeR(168 - w / 2 | 0, y, w, 1, K(((y - 14) / 5 | 0) % 2 ? '#d8443a' : '#f4f4f8')); }
    s += gfeR(163, 12, 11, 2, K('#3a3a44')) + gfeR(165, 6, 7, 6, P.ventana) + gfeR(165, 6, 1, 6, K('#3a3a44')) + gfeR(171, 6, 1, 6, K('#3a3a44')) + gfeR(164, 4, 9, 2, K('#d8443a')) + gfeR(166, 2, 5, 2, K('#d8443a')) + gfeR(168, 1, 1, 1, K('#3a3a44'));
    if (P.noche) { let b = ''; for (let i = 1; i < 32; i++) b += gfeR(165 - i * 2, 9 - (i * .25 | 0), 2, 1 + (i * .35 | 0), P.ventana); s += `<g class="gfe-faro">${b}</g>`; }
    s += gfeR(0, 54, 192, 50, K('#f0dba4')) + gfeR(0, 54, 192, 2, K('#d9c08a')) + gfeR(0, 80, 192, 24, K('#ebd49b'));
    for (let x = 0; x < 192; x += 6) s += gfeR(x, 53 + (x / 6 % 2), 4, 1, K('#ffffff'));
    for (let i = 0; i < 30; i++) s += gfeR(az() * 190 | 0, 58 + az() * 44 | 0, 1, 1, K('#dcc287'));
    s += gfeR(48, 60, 3, 2, K('#f6a0a8')) + gfeR(49, 59, 1, 1, K('#f6a0a8')) + gfeR(120, 62, 1, 3, K('#ff9a5a')) + gfeR(119, 63, 3, 1, K('#ff9a5a')) + gfeR(160, 59, 2, 2, K('#ffffff'));
    return s;
  } },
  epico: { hz: 56, nubes: [6, 16], sol: [92, 11], dib(P, K, az) {   // jardín japonés: monte nevado, pagoda, torii y cerezos
    let s = '';
    const mo = K('#8396c8'), ms = K('#7084b8'), ni = K('#f4f6ff');
    for (let y = 12; y < 56; y++) { const hw = Math.round((y - 12) * 1.25) + 1; s += gfeR(140 - hw, y, hw, 1, y < 22 ? ni : mo) + gfeR(140, y, hw, 1, y < 22 ? gfeMix(ni, ms, .15) : ms); if (y >= 22 && y < 26) for (let x = 140 - hw; x < 140 + hw; x += 4) if ((x + y * 3) % 8 < 3) s += gfeR(x, y, 2, 1, ni); }
    s += `<g opacity=".55">${gfeR(0, 44, 192, 4, K('#e3e8f8'))}</g>`;
    for (let x = 0; x < 192; x += 2) { const h = Math.round(5 + 2 * Math.sin(x / 9) + Math.sin(x / 3)); s += gfeR(x, 56 - h, 2, h, K('#6f9a6a')); }
    const rojo = K('#c8463c'), teja = K('#3b2e40'), oro = K('#e8b84a');
    s += gfeR(29, 14, 2, 8, oro) + gfeR(28, 17, 4, 1, oro);
    [[12, 6, 25], [16, 7, 34], [20, 8, 44]].forEach(([w, h, y]) => {
      const rw = w + 10;
      s += gfeR(30 - w / 2, y, w, h, rojo) + gfeR(30 - w / 2, y, w, 1, K('#9a3530'));
      for (let k = 30 - w / 2 + 2; k < 30 + w / 2 - 2; k += 4) s += gfeR(k, y + 2, 2, h - 3, P.noche ? P.ventana : K('#f3dca0'));
      s += gfeR(30 - rw / 2, y - 2, rw, 2, teja) + gfeR(30 - rw / 2 + 2, y - 3, rw - 4, 1, teja) + gfeR(30 - rw / 2 - 1, y - 3, 1, 1, teja) + gfeR(30 + rw / 2, y - 3, 1, 1, teja);
    });
    s += gfeR(14, 52, 32, 4, K('#9a9aa6')) + gfeR(14, 52, 32, 1, K('#b4b4be'));
    const tr = K('#d8463a'), tn = K('#2b2230');
    s += gfeR(154, 30, 3, 26, tr) + gfeR(174, 30, 3, 26, tr) + gfeR(150, 33, 31, 2, tr) + gfeR(149, 28, 33, 2, tr) + gfeR(147, 26, 37, 2, tn) + gfeR(146, 25, 2, 1, tn) + gfeR(183, 25, 2, 1, tn) + gfeR(164, 30, 3, 3, tr);
    [[72, 36, 9], [110, 38, 8]].forEach(([x, y, r]) => s += gfeR(x - 1, y, 3, 56 - y, K('#5a3a40')) + gfeR(x + 1, y + 3, 4, 1, K('#5a3a40')) + gfeDisco(x - 4, y - 2, r - 2, K('#f39ab9')) + gfeDisco(x + 4, y - 3, r - 2, K('#f39ab9')) + gfeDisco(x, y - 5, r - 1, K('#f7b6cf')) + gfeDisco(x - 2, y - 7, r - 5, K('#fbd0e0')));
    const pi = K('#a8a8b2');   // farol de piedra
    s += gfeR(126, 52, 7, 4, pi) + gfeR(128, 47, 3, 5, pi) + gfeR(125, 43, 9, 4, pi) + gfeR(127, 44, 5, 2, P.noche ? P.ventana : K('#7a7a86')) + gfeR(124, 41, 11, 2, K('#8a8a96')) + gfeR(128, 39, 3, 2, K('#8a8a96'));
    s += gfeR(0, 56, 192, 48, K('#ddd6c4')) + gfeR(0, 56, 192, 3, K('#7fae6a')) + gfeR(0, 59, 192, 1, K('#c9c1ad'));
    for (let y = 64; y < 104; y += 5) s += gfeR(0, y, 192, 1, K('#d4ccb8'));
    [[28, 66], [62, 73], [150, 68]].forEach(([x, y]) => s += gfeR(x, y, 10, 3, K('#c4bca8')) + gfeR(x + 1, y - 1, 8, 1, K('#cfc8b5')));
    s += gfeParts('gfe-petalo', 14, az, [10, 200], [-6, 40], (x, y) => gfeR(x, y, 2, 1, K('#ffc0d6')) + gfeR(x + 1, y + 1, 1, 1, K('#f39ab9')), 10);
    return s;
  } },
  legendario: { hz: 56, nubes: [4, 12], dib(P, K, az) {   // templo dorado: pirámide escalonada, columnata y obeliscos
    let s = '';
    for (let x = 0; x < 192; x += 2) { const h = Math.round(10 + 3 * Math.sin(x / 26 + 1) + 2 * Math.sin(x / 11)); s += gfeR(x, 56 - h, 2, h, K('#e9c886')); }
    for (let x = 0; x < 192; x += 2) { const h = Math.round(5 + 2 * Math.sin(x / 17)); s += gfeR(x, 56 - h, 2, h, K('#dcb46e')); }
    const pi = K('#e3c48a'), pc = K('#f3dfae'), ps = K('#c8a366'), oro = K('#ffd34d');
    for (let k = 0; k < 5; k++) { const w = 70 - k * 12, y = 50 - k * 6; s += gfeR(96 - w / 2, y, w, 6, pi) + gfeR(96 - w / 2, y, w, 1, pc) + gfeR(96 + w / 2 - 3, y, 3, 6, ps); }
    for (let y = 26; y < 56; y += 2) s += gfeR(91, y, 10, 1, ps) + gfeR(91, y + 1, 10, 1, pc);
    s += gfeR(88, 16, 16, 10, pi) + gfeR(101, 16, 3, 10, ps) + gfeR(86, 13, 20, 3, oro) + gfeR(90, 11, 12, 2, oro) + gfeR(94, 9, 4, 2, oro) + gfeR(94, 19, 4, 7, P.noche ? P.ventana : K('#5a3a1e'));
    const ma = K('#f4ecda'), mb = K('#d8ccb0');
    for (let j = 0; j < 9; j++) s += gfeR(3 + j * 3, 24 - j, 54 - j * 6, 1, j ? ma : mb);
    s += gfeR(3, 25, 54, 4, ma) + gfeR(3, 28, 54, 1, mb) + gfeR(26, 19, 8, 2, oro);
    for (let x = 7; x < 56; x += 10) s += gfeR(x, 30, 5, 20, ma) + gfeR(x + 4, 30, 1, 20, mb) + gfeR(x - 1, 29, 7, 1, mb) + gfeR(x - 1, 49, 7, 1, mb);
    s += gfeR(4, 50, 52, 2, ma) + gfeR(2, 52, 56, 4, mb);
    [[160, 12, 6], [178, 24, 5]].forEach(([x, y, w]) => s += gfeR(x, y, w, 56 - y, pi) + gfeR(x + w - 2, y, 2, 56 - y, ps) + gfeR(x + 1, y - 3, w - 2, 3, oro) + gfeR(x + 2, y - 5, w - 4, 2, oro));
    s += gfeR(0, 56, 192, 48, K('#e7d2a2')) + gfeR(0, 56, 192, 2, K('#cdb07a'));
    const ys = [58, 64, 71, 79, 88, 98, 104];
    ys.slice(0, -1).forEach((y, i) => { s += gfeR(0, y, 192, 1, K('#dbc490')); for (let x = (i % 2) * (8 + i * 2); x < 192; x += 16 + i * 4) s += gfeR(x, y, 1, ys[i + 1] - y, K('#dbc490')); });
    return s;
  } },
  mitico: { hz: 60, nubes: [30, 40], sol: [64, 12], dib(P, K, az) {   // reino celestial: aurora, islas flotantes con cascada y castillo, mar de nubes
    let s = '', a = '';
    for (let x = 0; x < 192; x += 2) { const y = Math.round(16 + 5 * Math.sin(x / 17) + 2 * Math.sin(x / 7)); a += gfeR(x, y, 2, 4, K('#7dffcf')) + gfeR(x, y + 4, 2, 3, K('#8ab8ff')); }
    s += `<g class="gfe-aurora" opacity=".4">${a}</g>`;
    const isla = (x, y, w, enc = '') => {
      const n = Math.round(w / 3); let t = enc + gfeR(x, y, w, 2, K('#8ee07f')) + gfeR(x, y + 2, w, 1, K('#5fb05a'));
      for (let j = 0; j < n; j++) { const i = Math.round(j * w / (2 * n)); t += gfeR(x + i, y + 3 + j, w - 2 * i, 1, K(j % 3 ? '#a87a5a' : '#8d6248')); }
      return t;
    };
    const ca = K('#f2eeff'), te = K('#8b7bea');
    const castillo = gfeR(113, 13, 14, 9, ca) + gfeR(109, 8, 4, 14, ca) + gfeR(127, 8, 4, 14, ca) + gfeR(110, 6, 2, 2, te) + gfeR(109, 7, 4, 1, te) + gfeR(128, 6, 2, 2, te) + gfeR(127, 7, 4, 1, te) + gfeR(115, 11, 10, 2, te) + gfeR(117, 9, 6, 2, te) + gfeR(119, 7, 2, 2, te) + gfeR(118, 17, 4, 5, P.noche ? P.ventana : K('#6a5ac8')) + gfeR(110, 11, 2, 2, P.ventana) + gfeR(128, 11, 2, 2, P.ventana);
    let cas = gfeR(41, 30, 3, 30, K('#bfe9ff')); for (let y = 26; y < 64; y += 4) cas += gfeR(42, y, 1, 2, K('#ffffff'));
    const arbol = gfeR(24, 19, 2, 7, K('#7a5233')) + gfeDisco(25, 17, 4, K('#62b84c'));
    const cristal = gfeR(167, 29, 3, 7, K('#c3b4ff')) + gfeR(168, 26, 1, 3, K('#e6deff')) + gfeR(170, 31, 2, 5, K('#a593f5')) + gfeR(164, 32, 2, 4, K('#d7ccff'));
    s += `<g class="gfe-flota" style="animation-delay:-2s">${isla(14, 26, 34, arbol)}<g class="gfe-cascada">${cas}</g></g>`;
    s += `<g class="gfe-flota" style="animation-delay:-4s">${isla(104, 22, 32, castillo)}</g>`;
    s += `<g class="gfe-flota">${isla(156, 36, 26, cristal)}</g><g class="gfe-flota" style="animation-delay:-3s">${isla(72, 42, 12)}</g>`;
    for (let x = 0; x < 200; x += 11) s += gfeDisco(x, 58 - (x % 3), 7, K('#ffffff')) + gfeDisco(x + 2, 60, 5, K('#eef1ff'));
    s += gfeR(0, 60, 192, 44, K('#e3e7f9')) + gfeR(0, 60, 192, 2, K('#d6dcf3'));
    for (let i = 0; i < 12; i++) { const x = az() * 180 | 0, y = 66 + az() * 34 | 0; s += gfeR(x, y, 8, 1, K('#d8ddf3')) + gfeR(x + 2, y - 1, 4, 1, K('#d8ddf3')); }
    [[34, 64], [140, 62]].forEach(([x, y]) => s += gfeR(x, y - 4, 2, 4, K('#c3b4ff')) + gfeR(x + 2, y - 2, 1, 2, K('#a593f5')));
    return s;
  } }
};

/* ---------- efectos encima del escenario, según la variante ---------- */
function gfeFX(P, hz, az) {
  const pastel = ['#ff9ab0', '#ffd27a', '#fff59a', '#a6f0b0', '#9ccfff', '#d0a8ff'];
  switch (P.fx) {
    case 'oro': return gfeParts('gfe-glit', 22, az, [0, 190], [-6, -2], (x, y) => gfeR(x, y, 2, 2, '#ffd84a') + gfeR(x, y, 1, 1, '#fff6c0'), 7) + gfeParts('gfe-dest', 8, az, [4, 188], [4, hz], gfeBrillo('#fff1a8'), 3);
    case 'diamante': return gfeCristales([22, 64, 150, 180], hz + 6) + gfeParts('gfe-dest', 18, az, [4, 188], [3, 100], gfeBrillo('#ffffff'), 2.6) + gfeParts('gfe-glit gfe-nieve', 16, az, [0, 190], [-6, -2], (x, y) => gfeR(x, y, 1, 1, '#ffffff'), 9);
    case 'arcoiris': return gfeParts('gfe-dest', 16, az, [4, 188], [3, 100], (x, y) => gfeBrillo(pastel[(x + y) % 6])(x, y), 3);
    case 'platino': return gfeParts('gfe-dest', 10, az, [4, 188], [3, hz], gfeBrillo('#e8ecff'), 3.4) + gfeParts('gfe-mota', 16, az, [0, 190], [hz, 100], (x, y) => gfeR(x, y, 1, 1, '#e8ecff'), 9);
    case 'galactico': return gfeParts('gfe-dest', 12, az, [4, 188], [3, 100], gfeBrillo('#ff9de8'), 3) + gfeParts('gfe-mota', 14, az, [0, 190], [hz, 100], (x, y) => gfeR(x, y, 1, 1, '#d6a8ff'), 9);
    case 'estelar': return gfeParts('gfe-fugaz', 3, az, [80, 190], [2, 22], (x, y) => [0, 1, 2, 3, 4, 5, 6].map(i => gfeR(x + i * 2, y - i, 2, 1, gfeMix('#fffbe6', P.cielo[1], i / 7))).join(''), 9) + gfeParts('gfe-mota', 14, az, [0, 190], [hz, 100], (x, y) => gfeR(x, y, 1, 1, '#ffe27a'), 9);
    case 'oscuro': {
      const bruma = (y, k) => `<g class="${k}" opacity=".14">${[-192, 0].map(o => [0, 64, 128].map(x => gfeR(o + x, y, 40, 3, '#b9a6e8') + gfeR(o + x + 6, y - 2, 26, 2, '#b9a6e8') + gfeR(o + x + 10, y + 3, 20, 2, '#b9a6e8')).join('')).join('')}</g>`;
      return bruma(hz + 4, 'gfe-niebla') + bruma(hz + 26, 'gfe-niebla gfe-niebla2') + bruma(hz + 40, 'gfe-niebla')
        + gfeParts('gfe-murci', 3, az, [-24, -14], [6, hz - 20], (x, y) => gfeSpr(GFE_MURCI, '#08040e', x, y), 14)
        + gfeParts('gfe-fuego', 6, az, [6, 186], [hz + 2, 98], (x, y) => gfeR(x, y, 2, 2, '#a6ff7a') + gfeR(x - 1, y + 1, 4, 1, '#5fd65a') + gfeR(x, y - 1, 1, 1, '#e4ffd0'), 5);
    }
  }
  return '';
}

const GF_ESC_CSS = `
  .gfe-svg { position: absolute; inset: 0; width: 100%; height: 100%; display: block; }
  .gfe-nubes { animation: gfe-deriva 140s linear infinite; } .gfe-nubes2 { animation-duration: 80s; }
  @keyframes gfe-deriva { to { transform: translateX(-192px); } }
  .gfe-tw { animation: gfe-tw 3s ease-in-out infinite alternate; } .gfe-tw2 { animation-duration: 2.2s; animation-delay: -1.1s; }
  @keyframes gfe-tw { to { opacity: .25; } }
  .gfe-ola { animation: gfe-ola 2.6s linear infinite; }
  @keyframes gfe-ola { to { transform: translateX(-16px); } }
  .gfe-bote { animation: gfe-bote 3.2s ease-in-out infinite; }
  @keyframes gfe-bote { 50% { transform: translateY(1px); } }
  .gfe-gav { animation: gfe-gav 30s linear infinite; }
  @keyframes gfe-gav { from { transform: translateX(-50px); } to { transform: translateX(200px); } }
  .gfe-faro { animation: gfe-faro 4s ease-in-out infinite; }
  @keyframes gfe-faro { 0%, 100% { opacity: .1; } 50% { opacity: .35; } }
  .gfe-petalo { animation: gfe-petalo 10s linear infinite; }
  @keyframes gfe-petalo { 0% { transform: translate(0, 0); opacity: 0; } 10% { opacity: 1; } 90% { opacity: 1; } 100% { transform: translate(-34px, 66px); opacity: 0; } }
  .gfe-flota { animation: gfe-flota 6s ease-in-out infinite alternate; }
  @keyframes gfe-flota { to { transform: translateY(-2px); } }
  .gfe-cascada { animation: gfe-cascada .8s linear infinite; }
  @keyframes gfe-cascada { to { transform: translateY(4px); } }
  .gfe-aurora { animation: gfe-aurora 7s ease-in-out infinite alternate; }
  @keyframes gfe-aurora { from { opacity: .22; } to { opacity: .55; } }
  .gfe-pulso { animation: gfe-pulso 5s ease-in-out infinite alternate; }
  @keyframes gfe-pulso { from { opacity: .45; } to { opacity: .8; } }
  .gfe-glit { animation: gfe-glit 7s linear infinite; }
  @keyframes gfe-glit { 0% { transform: translate(0, 0); } 50% { transform: translate(3px, 56px); } 100% { transform: translate(0, 112px); } }
  .gfe-dest { transform-box: fill-box; transform-origin: center; animation: gfe-dest 2.6s ease-in-out infinite; }
  @keyframes gfe-dest { 0%, 100% { opacity: 0; transform: scale(.3); } 50% { opacity: 1; transform: scale(1); } }
  .gfe-mota { animation: gfe-mota 9s ease-in-out infinite; }
  @keyframes gfe-mota { 0% { transform: translate(0, 0); opacity: 0; } 30% { opacity: 1; } 100% { transform: translate(6px, -26px); opacity: 0; } }
  .gfe-fugaz { opacity: 0; animation: gfe-fugaz 9s linear infinite; }
  @keyframes gfe-fugaz { 0% { transform: translate(0, 0); opacity: 0; } 2% { opacity: 1; } 12% { transform: translate(-70px, 35px); opacity: 0; } 100% { transform: translate(-70px, 35px); opacity: 0; } }
  .gfe-niebla { animation: gfe-niebla 50s linear infinite; } .gfe-niebla2 { animation-duration: 34s; animation-direction: reverse; }
  @keyframes gfe-niebla { to { transform: translateX(192px); } }
  .gfe-murci { animation: gfe-murci 14s linear infinite; }
  @keyframes gfe-murci { 0% { transform: translate(0, 0); } 25% { transform: translate(55px, -4px); } 50% { transform: translate(110px, 5px); } 75% { transform: translate(165px, -3px); } 100% { transform: translate(230px, 3px); } }
  .gfe-fuego { animation: gfe-fuego 5s ease-in-out infinite alternate; }
  @keyframes gfe-fuego { 0% { transform: translate(0, 0); opacity: .3; } 100% { transform: translate(4px, -6px); opacity: 1; } }
  @media (prefers-reduced-motion: reduce) {
    [class^="gfe-"], [class*=" gfe-"] { animation: none !important; }
    .gfe-fugaz { display: none; }
  }`;
document.head.insertAdjacentHTML('beforeend', `<style>${GF_ESC_CSS}</style>`);

function gfEscena(r, v) {
  const E = GFE_ESC[r] || GFE_ESC.comun, P = GFE_VAR[v] || GFE_VAR.normal, az = gfeAzar(7 + r.length * 131 + v.length * 17), hz = E.hz;
  const s = gfeCielo(P, hz) + (P.fx === 'galactico' ? gfeNebulosa() : '') + gfeEstrellas(P, hz, az) + gfeAstro(P, hz, E.sol)
    + (P.fx === 'arcoiris' ? gfeArcoiris(hz) : '') + gfeNubes(P, E.nubes) + E.dib(P, P.c, az) + gfeFX(P, hz, az);
  return { svg: `<svg class="gfe-svg" viewBox="0 0 192 104" preserveAspectRatio="xMidYMid slice" shape-rendering="crispEdges" aria-hidden="true">${s}</svg>`, suelo: hz / 104, oscura: !!P.noche };
}
