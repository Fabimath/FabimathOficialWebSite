"""Genera los bancos de los gatos nuevos. Uso: python gen_gatos/generar.py [ids…]"""
import importlib
import random
import sys

from comun import escribir

BANCOS = {  # id: (módulo, variable JS, archivo, título)
    'pb': ('tema_pb', 'PB_QUESTIONS', 'pb_questions.js', 'Gato Clásico: probabilidad clásica y eventos'),
    'pc': ('tema_pc', 'PC_EXTRA', 'pc_extra_questions.js', 'Gato Condicional: ejercicios y casos agregados'),
    'bt': ('tema_bt', 'BT_EXTRA', 'bt_extra_questions.js', 'Gato de Bayes: ejercicios y casos agregados'),
    'vd': ('tema_vd', 'VD_QUESTIONS', 'vd_questions.js', 'Gato Aleatorio Discreto'),
    'vx': ('tema_vx', 'VX_QUESTIONS', 'vx_questions.js', 'Gato Aleatorio Continuo'),
    'bv': ('tema_bv', 'BV_QUESTIONS', 'bv_questions.js', 'Gato Bivariado'),
    'md': ('tema_md', 'MD_QUESTIONS', 'md_questions.js', 'Gato de los Modelos Discretos'),
    'mc': ('tema_mc', 'MC_QUESTIONS', 'mc_questions.js', 'Gato de los Modelos Continuos'),
    'nm': ('tema_nm', 'NM_EXTRA', 'nm_extra_questions.js', 'Gato de la Normal: ejercicios y casos agregados'),
    'tc': ('tema_tc', 'TC_QUESTIONS', 'tc_questions.js', 'Gato Muestral'),
    'ep': ('tema_ep', 'EP_QUESTIONS', 'ep_questions.js', 'Gato Estimador'),
    'ic': ('tema_ic', 'IC_EXTRA', 'ic_extra_questions.js', 'Gato de Intervalos: ejercicios y casos agregados'),
    'th': ('tema_th', 'TH_EXTRA', 'th_extra_questions.js', 'Gato de Test: ejercicios y casos agregados'),
    'rl': ('tema_rl', 'RL_QUESTIONS', 'rl_questions.js', 'Gato Lineal'),
    're': ('tema_re', 'RE_QUESTIONS', 're_questions.js', 'Gato Exponencial'),
    'rm': ('tema_rm', 'RM_QUESTIONS', 'rm_questions.js', 'Gato Múltiple'),
    'an': ('tema_an', 'AN_QUESTIONS', 'an_questions.js', 'Gato ANOVA'),
}

ids = sys.argv[1:] or list(BANCOS)
for i in ids:
    mod, var, archivo, titulo = BANCOS[i]
    try:
        m = importlib.import_module(mod)
    except ModuleNotFoundError as e:
        if e.name == mod:
            print(f'· {mod} todavía no existe')
            continue
        raise
    rng = random.Random(f'gatos-{i}-2026')   # semilla fija: el banco se regenera igual
    escribir(var, m.generar(rng), archivo, titulo)
