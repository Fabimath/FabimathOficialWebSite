"""Compila las figuras TikZ de Química a SVG para la web.

Fuentes: paes/quimica/tikz/<nombre>.tex (documentclass standalone, tikz/chemfig).
Salida:  paes/quimica/fig/<nombre>.svg (latex -> dvi -> dvisvgm --no-fonts: glifos como trazos, sin fuentes externas).
Solo recompila lo que cambió. Con --preview además deja un PNG por figura en _tmp/tikz_preview/ para revisarlas.

Uso: python paes/quimica/build_figs.py [--preview] [nombre ...]
"""
import pathlib, subprocess, sys, tempfile, shutil

AQUI = pathlib.Path(__file__).resolve().parent
TIKZ, FIG = AQUI / 'tikz', AQUI / 'fig'
PREV = AQUI.parents[1] / '_tmp' / 'tikz_preview'


def compila(tex):
    svg = FIG / (tex.stem + '.svg')
    with tempfile.TemporaryDirectory() as d:
        shutil.copy(tex, d)
        r = subprocess.run(['latex', '-interaction=nonstopmode', '-halt-on-error', tex.name], cwd=d, capture_output=True, text=True, errors='replace', timeout=300)
        if r.returncode:
            err = [l for l in r.stdout.splitlines() if l.startswith('!') or l.startswith('l.')]
            return 'ERROR latex: ' + ' | '.join(err[:4])
        r = subprocess.run(['dvisvgm', '--no-fonts', '--exact-bbox', '--zoom=1.5', '-o', str(svg), tex.stem + '.dvi'], cwd=d, capture_output=True, text=True, errors='replace', timeout=120)
        if r.returncode or not svg.exists():
            return 'ERROR dvisvgm: ' + r.stderr[-300:]
    return 'ok'


def preview(svgs):
    from playwright.sync_api import sync_playwright
    PREV.mkdir(parents=True, exist_ok=True)
    with sync_playwright() as pw:
        nav = pw.chromium.launch(channel='msedge')
        pag = nav.new_page(viewport={'width': 900, 'height': 700}, device_scale_factor=2)
        for s in svgs:
            pag.goto(s.as_uri()); pag.wait_for_timeout(150)
            pag.locator('svg').first.screenshot(path=str(PREV / (s.stem + '.png')))
        nav.close()


if __name__ == '__main__':
    args = [a for a in sys.argv[1:] if not a.startswith('--')]
    FIG.mkdir(exist_ok=True)
    texs = [TIKZ / (a + '.tex') for a in args] if args else sorted(TIKZ.glob('*.tex'))
    hechos, fallos = [], 0
    for t in texs:
        svg = FIG / (t.stem + '.svg')
        if not args and svg.exists() and svg.stat().st_mtime > t.stat().st_mtime:
            continue
        res = compila(t)
        print(f'{t.stem}: {res}')
        if res == 'ok':
            hechos.append(svg)
        else:
            fallos += 1
    if '--preview' in sys.argv and hechos:
        preview(hechos)
        print(f'vistas previas en {PREV}')
    sys.exit(1 if fallos else 0)
