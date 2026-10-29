// Vuelca a temas.json la materia (slides + example) de Química, Física y Biología, en el orden de paes.html.
const fs = require('fs'), vm = require('vm'), path = require('path');
const raiz = path.resolve(__dirname, '../../..');
const ctx = { r: String.raw }; vm.createContext(ctx);
const areas = {
  qui: ['atomo', 'organica', 'reacciones', 'soluciones', 'habilidades', 'electivo'].map(x => 'paes_quimica_' + x),
  fis: ['ondas', 'movimiento', 'fuerzas', 'tierra', 'electricidad', 'habilidades'].map(x => 'paes_fisica_' + x),
  bio: ['celula', 'nervioso', 'reproduccion', 'division', 'evolucion', 'ambiente', 'habilidades'].map(x => 'paes_biologia_' + x)
};
const out = {};
for (const [a, fs_] of Object.entries(areas)) {
  out[a] = [];
  for (const f of fs_) {
    const src = fs.readFileSync(path.join(raiz, f + '.js'), 'utf8');
    const nombre = src.match(/const (\w+) = \[/)[1];
    vm.runInContext(src + `\n;this.__t = ${nombre};`, ctx);
    for (const t of ctx.__t) out[a].push({ id: t.id, unit: t.unit, title: t.title, desc: t.desc, slides: t.slides, example: t.example });
  }
}
fs.writeFileSync(path.join(__dirname, 'temas.json'), JSON.stringify(out, null, 1));
console.log(Object.entries(out).map(([a, ts]) => a + ': ' + ts.length).join(', '));
