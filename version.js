/* Versión del sitio: la sube sola el hook pre-commit de git (+0.01 por cada commit).
   Cada página muestra este número en los elementos con class="version". */
const FABIMATH_VERSION = '2.02';
document.addEventListener('DOMContentLoaded', () =>
  document.querySelectorAll('.version').forEach(el => { el.textContent = 'v' + FABIMATH_VERSION; }));
