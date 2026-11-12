// Valida todos los bancos de quiz.html: esquema, alternativas, y que cada fórmula compile en KaTeX.
// Uso: node gen_gatos/validar.mjs   (desde la raíz del sitio)
import fs from 'node:fs';
import vm from 'node:vm';
import path from 'node:path';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const katex = require('./node_modules/katex');

const raiz = path.resolve(path.dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1')), '..');
const html = fs.readFileSync(path.join(raiz, 'quiz.html'), 'utf8');
const files = [...html.matchAll(/<script src="([a-z_]+_questions\.js|materia_gatos\.js)"><\/script>/g)].map(m => m[1]);
const ctx = { window: {} }; ctx.window = ctx; vm.createContext(ctx);
let errores = 0, total = 0, casos = 0;
const err = (f, i, msg) => { errores++; if (errores < 80) console.log(`✗ ${f} #${i}: ${msg}`); };

function mathSegs(s) {          // $…$, $$…$$, \(…\) dentro de texto mixto
  const out = []; const re = /\$\$([\s\S]+?)\$\$|\$([^$]+?)\$|\\\(([\s\S]+?)\\\)|\\\[([\s\S]+?)\\\]/g; let m;
  while ((m = re.exec(s))) out.push(m[1] || m[2] || m[3] || m[4]);
  return out;
}
let MIX = true;
function tex(f, i, s, entero) {
  const segs = entero ? [s] : mathSegs(s);
  for (const x of segs) {
    try { katex.renderToString(x, { throwOnError: true, strict: false }); }
    catch (e) { err(f, i, `KaTeX: ${e.message.slice(0, 120)} en «${x.slice(0, 80)}»`); }
  }
  if (!entero && MIX) {
    const sinMath = s.replace(/\$\$[\s\S]+?\$\$|\$[^$]+?\$/g, '');
    if (sinMath.includes('$')) err(f, i, `signo $ desbalanceado en «${s.slice(0, 80)}»`);
  }
  if (/[\x00-\x08\x0b\x0c\x0e-\x1f]/.test(s)) err(f, i, `carácter de control (¿escape mal escrito?) en «${s.slice(0, 80)}»`);
  if (/NaN|undefined|\bNone\b|\bnan\b|Infinity/.test(s)) err(f, i, `valor inválido en «${s.slice(0, 80)}»`);
}
function parte(f, i, q, p, mix) {
  if (!Array.isArray(p.alts) || p.alts.length < 4 || p.alts.length > 5) return err(f, i, 'alts debe tener 4 o 5');
  if (new Set(p.alts.map(a => a.trim())).size !== p.alts.length) err(f, i, `alternativas repetidas: ${p.alts.join(' | ')}`);
  if (!(Number.isInteger(p.correct) && p.correct >= 0 && p.correct < p.alts.length)) err(f, i, 'correct fuera de rango');
  if (!p.ask) err(f, i, 'falta ask');
  for (const a of p.alts) tex(f, i, a, false);
  tex(f, i, p.ask || '', false);
  if (p.pautaHead) tex(f, i, p.pautaHead, !mix);
  if (!Array.isArray(p.pautaSteps)) err(f, i, 'pautaSteps no es lista');
  else for (const st of p.pautaSteps) tex(f, i, st, !mix);
  tex(f, i, p.conc || '', false);
}

for (const f of files) {
  if (!fs.existsSync(path.join(raiz, f))) { err(f, '-', 'el archivo no existe'); continue; }
  const src = fs.readFileSync(path.join(raiz, f), 'utf8').replace(/^const (\w+) =/gm, 'window.$1 =');
  try { vm.runInContext(src, ctx, { filename: f }); } catch (e) { err(f, '-', 'no carga: ' + e.message); }
}
for (const [k, bank] of Object.entries(ctx)) {
  if (!/_(QUESTIONS|EXTRA)$/.test(k) || !Array.isArray(bank)) continue;
  bank.forEach((q, i) => {
    total++;
    MIX = !!q.mix || Array.isArray(q.parts);
    for (const c of ['tipo', 'enun']) if (!q[c]) err(k, i, 'falta ' + c);
    tex(k, i, q.enun || '', false);
    if (Array.isArray(q.parts)) {
      casos++;
      if (q.parts.length < 2) err(k, i, 'caso con menos de 2 incisos');
      q.parts.forEach(p => parte(k, i, q, p, true));
    } else parte(k, i, q, q, !!q.mix);
    if (q.table) for (const r of [q.table.head, ...q.table.rows]) for (const c of r) tex(k, i, String(c), false);
  });
}
MIX = true;
if (ctx.MATERIA) for (const [id, h] of Object.entries(ctx.MATERIA)) tex('MATERIA', id, h, false);
if (ctx.FORMULARIO) ctx.FORMULARIO.forEach((s, i) => tex('FORMULARIO', i, s[1], false));
console.log(`${files.length} archivos · ${total} preguntas (${casos} casos) · ${errores} errores`);
process.exit(errores ? 1 : 0);
