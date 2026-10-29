"""Compila a PDF las figuras TikZ que usa el libro de Ciencias (color en fig/, gris en fig_bn/).

Fuentes: paes/{quimica,fisica,biologia}/tikz/<nombre>.tex, las mismas que build_figs.py de cada área pasa a SVG
para la web. Solo se compilan las que aparecen en temas.json (slides y example) y solo si cambiaron.
La versión gris es la misma fuente con \\PassOptionsToPackage{gray}{xcolor}, como en el libro M1.

Uso: node dump_temas.js && python build_figs.py
"""
import json, pathlib, re, shutil, subprocess, sys, tempfile
from concurrent.futures import ThreadPoolExecutor

AQUI = pathlib.Path(__file__).resolve().parent
PAES = AQUI.parent.parent
CARPETA = {'quimica': 'qui', 'fisica': 'fis', 'biologia': 'bio'}


def usadas():
    texto = (AQUI / 'temas.json').read_text(encoding='utf8')
    return sorted(set(re.findall(r'paes/(quimica|fisica|biologia)/fig/([\w-]+)\.svg', texto)))


def compila(area, nombre, bn):
    tex = PAES / area / 'tikz' / (nombre + '.tex')
    dest = AQUI / ('fig_bn' if bn else 'fig') / CARPETA[area] / (nombre + '.pdf')
    if dest.exists() and dest.stat().st_mtime > tex.stat().st_mtime:
        return None
    dest.parent.mkdir(parents=True, exist_ok=True)
    with tempfile.TemporaryDirectory() as d:
        shutil.copy(tex, d)
        orden = (r'\PassOptionsToPackage{gray}{xcolor}\input{' + tex.name + '}') if bn else tex.name
        r = subprocess.run(['pdflatex', '-interaction=nonstopmode', '-halt-on-error', '-jobname=f', orden],
                           cwd=d, capture_output=True, text=True, errors='replace', timeout=300)
        pdf = pathlib.Path(d) / 'f.pdf'
        if r.returncode or not pdf.exists():
            err = [l for l in r.stdout.splitlines() if l.startswith('!') or l.startswith('l.')]
            return f'{area}/{nombre}{" (bn)" if bn else ""}: ' + ' | '.join(err[:4])
        shutil.copy(pdf, dest)
    return None


if __name__ == '__main__':
    trabajos = [(a, n, bn) for a, n in usadas() for bn in (False, True)]
    with ThreadPoolExecutor(8) as ex:
        fallos = [f for f in ex.map(lambda t: compila(*t), trabajos) if f]
    print(f'{len(trabajos)} figuras revisadas, {len(fallos)} fallos')
    for f in fallos:
        print('ERROR', f)
    sys.exit(1 if fallos else 0)
