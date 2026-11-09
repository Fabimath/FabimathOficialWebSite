/* Gatos de la Oscuridad: 16 gatos extra (4 raros, 4 épicos, 4 legendarios, 4 míticos) para el portal oscuro.
   Se carga después de gacha.js: agrega sus accesorios a ACC y deja la lista GATOS_OSC_DEF
   ([id, nombre, cuerpo, sombra, patrón, accesorios, rareza, descripción]) para que otro código la integre.
   Se dibujan con gatoSVG igual que los demás; después se les aplica un filtro oscuro, por eso llevan detalles brillantes. */

// ojos con marco oscuro (ring) y brillo (glow) sobre los ojos del gato: 4 × 4 desde (3, 5), simétrico
const OJO_OSC = (ring, glow, w = '#ffffff') => [3, 5, { N: ring, G: glow, W: w }, ['.NN.', 'NGWN', 'NGGN', '.NN.'], 1];

const ACC_OSC = {
  // calavera de Día de Muertos
  os_cal_ojos:    OJO_OSC('#1a0f24', '#ff9a1f', '#fff3c0'),
  os_cal_mejilla: [2, 8, { M: '#ff4fa8', C: '#3fe0d0' }, ['MC'], 1],
  os_cal_nariz:   [9, 9, { N: '#1a0f24' }, ['NN']],
  os_cal_dientes: [6, 10, { K: '#1a1008' }, ['KKKK', '.K.K'], 1],
  os_cempasuchil: [7, 1, { O: '#ff8a1f', Y: '#ffd23f', L: '#ffb347' }, ['.OLLO.', 'OOYYOO', '.OLLO.']],
  os_costillas:   [7, 12, { W: '#f0ecdc' }, ['WWWWWW', '......', '.WWWW.']],
  // cuervo
  os_cuervo_ojos: OJO_OSC('#12132a', '#ffd23f', '#fff6c0'),
  os_cuervo_pico: [8, 8, { O: '#ffa82e', o: '#c06a12' }, ['OOOO', '.OO.', '.oo.']],
  os_cuervo_cresta: [7, 0, { N: '#262a4e', V: '#8f96ec' }, ['..N.N.', '.NVNVN', 'NNNNNN']],
  os_cuervo_alas: [0, 9, { N: '#1f2145', V: '#8f96ec' }, ['N..', 'NV.', 'NNV', 'NVN', '.NV', '..N'], 1],
  // vela derretida
  os_vela_llama:  [8, -3, { O: '#ff7a1f', Y: '#ffe45c', K: '#1a1008' }, ['..O.', '.OO.', 'OYYO', 'OYYO', '.OO.', '.KK.']],
  os_vela_goteo:  [1, 4, { C: '#fff3c8' }, ['C..', 'CC.', 'C..', 'CC.', 'C..'], 1],
  os_vela_charco: [2, 13, { C: '#fff3c8' }, ['C.', 'C.', 'CC'], 1],
  os_vela_ojos:   OJO_OSC('#3a2410', '#ffb347', '#fff6d8'),
  // brujo con caldero
  os_brujo_sombrero: [3, -4, { N: '#2a1a46', P: '#a05ae8', Y: '#ffd23f', V: '#5a3a9a' },
    ['......NN......', '.....NNNN.....', '.....NVNN.....', '....PPYYPP....', '....NNNNNN....', '...NNNNNNNN...', 'NNNNNNNNNNNNNN']],
  os_brujo_ojos:  OJO_OSC('#12301a', '#5dff6a', '#e8ffe0'),
  os_brujo_caldero: [5, 11, { I: '#2a2a36', i: '#5a5a6e', G: '#5dff6a', g: '#c4ffbc' },
    ['..g....g..', 'iGGgGGgGGi', 'IIIIIIIIII', '.IIIIIIII.', '..I....I..']],
  // momia
  os_momia_frente: [1, 4, { W: '#f2e8c4', L: '#8a7a4c' }, ['WWWWWWWWW', 'WLWWLWWLW']],
  os_momia_mejilla: [1, 8, { W: '#f2e8c4', L: '#8a7a4c' }, ['WWW', 'LWL', '.WW'], 1],
  os_momia_cuerpo: [1, 12, { W: '#f2e8c4', L: '#8a7a4c' }, ['WWWLWWWLW', '.........', 'WLWWWLWWW'], 1],
  os_momia_ojos:  OJO_OSC('#2a2214', '#b4ff3a', '#f4ffd0'),
  // murciélago
  os_mur_alas:    [0, 8, { V: '#b878ff', M: '#6a3aa8' }, ['V...', 'VV..', 'VMV.', 'VMMV', 'VMMV', 'VMVM', '.V.V'], 1],
  os_mur_orejas:  [2, -3, { K: '#1a1008', B: '#5b4a82', P: '#ff9ecb' }, ['.KK.', 'KBBK', 'KPBK', 'KPBK'], 1],
  os_mur_colmillos: [8, 10, { K: '#1a1008', W: '#ffffff' }, ['KKKK', 'W..W']],
  os_mur_ojos:    OJO_OSC('#2a0a14', '#ff2d3d', '#ffd0d0'),
  // kraken
  os_kra_tentaculos: [0, 12, { T: '#3fc2b8', S: '#ffe6f2' }, ['.TTTTTTTTT', 'TSTTSTTSTT', 'TS.TS.TS.T', 'T..T..T..T'], 1],
  os_kra_burbujas: [1, -4, { W: '#d8fbff' }, ['.W.', 'W.W', '.W.', '...', '..W'], 1],
  os_kra_ojos:    OJO_OSC('#0a2a3a', '#7dffea', '#e8fffb'),
  os_kra_perla:   [9, 3, { W: '#ffffff', P: '#ffc0e8' }, ['WP', 'PP']],
  // eclipse
  os_ecl_frente:  [7, 3, { N: '#0e0a1e', Y: '#ffcf40', O: '#ff7a1f' }, ['.OYYO.', 'OYNNYO', '.OYYO.']],
  os_ecl_pecho:   [7, 12, { N: '#0e0a1e', Y: '#ffcf40', O: '#ff7a1f' }, ['.OYYO.', 'YNNNNY', '.OYYO.']],
  os_ecl_rayos:   [0, -4, { Y: '#ffd23f', O: '#ff7a1f' }, ['Y.Y', '.O.', 'Y.Y'], 1],
  os_ecl_ojos:    OJO_OSC('#1a1030', '#ffd23f', '#fff6c0'),
  // segador
  os_seg_capa:    [0, 4, { N: '#1e1a2e', V: '#7a4fd8' }, ['.NN', 'NNN', 'NNN', 'NNN', 'NVN', 'NVN', 'NNN', 'NNN', 'NVN', 'NNN', '.NN', '..N'], 1],
  os_seg_guadana: [13, -4, { S: '#c8dcff', s: '#7f9ad8', H: '#8a6a3f' },
    ['.SSSSSS', 'SSsSHSS', 'Ss..HS.', 'S...H..', ...Array(12).fill('....H..')]],
  os_seg_ojos:    OJO_OSC('#12082a', '#59f0ff', '#e0ffff'),
  os_seg_calavera: [8, 12, { W: '#f0ecdc', N: '#1a1030' }, ['WWWW', 'WNNW', '.WW.']],
  // lich
  os_lich_fuego:  [3, 2, { C: '#3fd8ff', W: '#e6fdff' }, ['.C..', 'CWC.', 'CCWC'], 1],
  os_lich_ojos:   OJO_OSC('#0b1a2e', '#3fd8ff', '#e6fdff'),
  os_lich_grieta: [10, 4, { K: '#1a1008' }, ['K.', 'KK', '.K']],
  os_lich_filacteria: [8, 12, { G: '#3dff9a', W: '#e8fff0' }, ['.GG.', 'GWWG', '.GG.']],
  os_lich_espinas: [0, 10, { W: '#e8e8d8' }, ['W..', 'WW.', '.WW'], 1],
  os_lich_runas:  [0, -4, { C: '#3fd8ff' }, ['C.C', '.C.', 'C.C'], 1],
  // conde
  os_con_pelo:    [6, 4, { N: '#1a1224' }, ['NNNNNNNN', '.NNNNNN.', '...NN...']],
  os_con_ojos:    OJO_OSC('#2a0a14', '#ff2d3d', '#ffd0d0'),
  os_con_colmillos: [8, 10, { K: '#1a1008', W: '#ffffff' }, ['KKKK', 'W..W']],
  os_con_capa:    [0, 6, { N: '#1a1224', R: '#c0243a' }, ['N..', 'NN.', 'NRN', 'NRN', 'NRR', 'NRR', 'NRR', 'NRR', 'NNR', '.NN'], 1],
  os_con_rubi:    [9, 12, { Y: '#f5c542', R: '#ff3b5c' }, ['YY', 'RR', 'YY']],
  // sombra de un solo ojo
  os_som_borra:   [3, 6, { B: '#4b3a78' }, ['BBBB', 'BBBB'], 1],
  os_som_ojo:     [7, 4, { G: '#b46cff', W: '#f4ecff', I: '#ff4fd8', P: '#1a0030' },
    ['.GGGG.', 'GWWWWG', 'GIPPIG', 'GIPPIG', '.GGGG.']],
  os_som_volutas: [0, -3, { S: '#8a68d8' }, ['.S.', 'S..', '.S.', 'S..'], 1],
  os_som_goteo:   [2, 13, { S: '#8a68d8' }, ['S.S', '.S.'], 1],
  // abismo de muchas pupilas
  os_abi_ojos:    OJO_OSC('#0b0824', '#ff4fd8', '#ffe0f8'),
  os_abi_frente:  [7, 4, { K: '#0b0824', W: '#eafcff', P: '#ff2aa0' }, ['KKK', 'WPW'], 1],
  os_abi_mejilla: [2, 8, { K: '#0b0824', W: '#eafcff', P: '#2ad8ff' }, ['KKK', 'WPW'], 1],
  os_abi_cuerpo:  [4, 12, { K: '#0b0824', W: '#eafcff', P: '#ff2aa0' }, ['KKK', 'WPW'], 1],
  os_abi_pecho:   [8, 12, { K: '#0b0824', W: '#eafcff', P: '#2ad8ff' }, ['KKKK', 'WPPW']],
  // fantasma de faroles
  os_far_farol:   [0, 6, { c: '#9aa6b2', H: '#2a2f3a', F: '#4a5a6a', G: '#6fffd8', W: '#f4fffb' },
    ['.c.', 'HHH', 'GGG', 'GWG', 'GGG', 'HHH'], 1],
  os_far_cola:    [1, 14, { F: '#bfe8f4' }, ['FFFFFFFFF', 'F.FF.FF.F'], 1],
  os_far_ojos:    OJO_OSC('#0a1a24', '#9bffd0', '#f0fff8'),
  // espantapájaros calabaza
  os_cala_ojos:   OJO_OSC('#2a1408', '#ffe45c', '#fffbd0'),
  os_cala_boca:   [5, 10, { N: '#2a1408', Y: '#ffe45c' }, ['NYNYYYYNYN']],
  os_cala_nariz:  [9, 9, { N: '#2a1408' }, ['NN']],
  os_cala_paja:   [1, -2, { S: '#f2cf5a', s: '#c9a22b' }, ['S.S.', 'sSsS', '.SS.'], 1],
  os_cala_poste:  [0, 13, { H: '#8a5a2b', h: '#5a3a18' }, ['HhHHHHhHHHHHHHhHHHHH']],
  os_cala_cuervo: [16, 11, { N: '#1d1a2e', O: '#ffa82e', E: '#ffe45c' }, ['..NN', 'ONEN']],
  // rey del inframundo
  os_inf_llamas:  [2, -4, { C: '#3fd8ff', W: '#e6fdff', B: '#1f7de0' }, ['.C.', '.CC', 'CWC', 'CBC'], 1],
  os_inf_ojos:    OJO_OSC('#0a1230', '#3fd8ff', '#e6fdff'),
  os_inf_hombreras: [0, 9, { S: '#cfd3dc', G: '#d9a82a', g: '#8a6a10' }, ['S..', 'SG.', 'GGg', 'Ggg'], 1],
  os_inf_cadenas: [2, 13, { C: '#b8bcc8', c: '#6a6e7c' }, ['CcCcCcCcCcCcCcCc']],
  os_inf_runas:   [5, 12, { C: '#3fd8ff' }, ['C.C', '.C.'], 1],
  os_inf_candado: [9, 12, { Y: '#f5c542', K: '#1a1008' }, ['YY', 'KK']]
};
Object.assign(ACC, ACC_OSC);

// [id, nombre, cuerpo, sombra, patrón, [accesorios], rareza, descripción corta y graciosa de su temática]
const GATOS_OSC_DEF = [
  // ---- raros ----
  ['calavera', 'Gato Calavera', '#d8ccb4', '#a07fc4', 'liso', ['os_cal_ojos', 'os_cal_mejilla', 'os_cal_nariz', 'os_cal_dientes', 'os_cempasuchil', 'os_costillas'], 'raro', 'Vuelve cada Día de Muertos por su ofrenda de pescado y pan de muerto.'],
  ['cuervo', 'Gato Cuervo', '#4b4f7a', '#2d3052', 'liso', ['os_cuervo_cresta', 'os_cuervo_alas', 'os_cuervo_ojos', 'os_cuervo_pico'], 'raro', 'Se cree pájaro, grazna en vez de maullar y te roba los lápices brillantes.'],
  ['vela', 'Gato Vela', '#e3d3a8', '#b99a5a', 'rayas', ['os_vela_goteo', 'os_vela_charco', 'os_vela_ojos', 'os_vela_llama'], 'raro', 'Estudia de noche y se derrite de sueño: su pabilo ilumina el apunte.'],
  ['brujo', 'Gato Brujo', '#7048a8', '#4a2d78', 'rayas', ['os_brujo_sombrero', 'os_brujo_ojos', 'os_brujo_caldero'], 'raro', 'Prepara una poción para aprobar la PAES; por ahora solo sale sopa verde.'],
  // ---- épicos ----
  ['momia', 'Gato Momia', '#c8b98c', '#8e7e52', 'liso', ['os_momia_cuerpo', 'os_momia_frente', 'os_momia_mejilla', 'os_momia_ojos'], 'epico', 'Lleva cuatro mil años vendado y sigue entregando la tarea a tiempo.'],
  ['murcielago', 'Gato Murciélago', '#5b4a82', '#3a2d5e', 'liso', ['os_mur_alas', 'os_mur_orejas', 'os_mur_ojos', 'os_mur_colmillos'], 'epico', 'Duerme colgado de cabeza y entiende los gráficos del revés.'],
  ['kraken', 'Gato Kraken', '#2f8a96', '#1f5a6a', 'manchas', ['os_kra_tentaculos', 'os_kra_burbujas', 'os_kra_ojos', 'os_kra_perla'], 'epico', 'Se escapó del fondo del mar porque ahí no había wifi.'],
  ['eclipse', 'Gato Eclipse', '#4a3f8a', '#2e2760', 'liso', ['os_ecl_rayos', 'os_ecl_frente', 'os_ecl_pecho', 'os_ecl_ojos'], 'epico', 'Aparece una vez cada muchos años, justo cuando hay prueba.'],
  // ---- legendarios ----
  ['segador', 'Gato Segador', '#686b8a', '#43455e', 'liso', ['os_seg_capa', 'os_seg_guadana', 'os_seg_ojos', 'os_seg_calavera'], 'legendario', 'Cosecha tus errores del control anterior, pero solo los chiquitos.'],
  ['lich', 'Gato Lich', '#6f8f86', '#40605f', 'liso', ['os_lich_runas', 'os_lich_espinas', 'os_lich_fuego', 'os_lich_ojos', 'os_lich_grieta', 'os_lich_filacteria'], 'legendario', 'Guardó su alma en un frasco y el frasco en un cajón que no encuentra.'],
  ['conde', 'Gato Conde', '#8a79ad', '#5f4d80', 'liso', ['os_con_capa', 'os_con_pelo', 'os_con_ojos', 'os_con_colmillos', 'os_con_rubi', 'monoculo'], 'legendario', 'Conde de Transilvania, solo bebe leche con sabor a frutilla.'],
  ['sombra', 'Gato Sombra', '#4b3a78', '#2e2352', 'liso', ['os_som_volutas', 'os_som_goteo', 'os_som_borra', 'os_som_ojo'], 'legendario', 'Te mira desde el rincón con su único ojo, sin parpadear, esperando su comida.'],
  // ---- míticos ----
  ['abismo', 'Gato Abismo', '#3a3f8f', '#232866', 'manchas', ['os_abi_frente', 'os_abi_mejilla', 'os_abi_cuerpo', 'os_abi_pecho', 'os_abi_ojos'], 'mitico', 'Tiene ojos hasta donde no deberían caber, y todos vieron tu nota.'],
  ['faroles', 'Gato Faroles', '#7fa3b8', '#4f6f88', 'liso', ['os_far_cola', 'os_far_farol', 'os_far_ojos'], 'mitico', 'Fantasma guía de pasillos: con sus faroles encuentra tu sala en la U.'],
  ['calabaza', 'Gato Espantapájaros', '#d9731c', '#a84a10', 'rayas', ['os_cala_paja', 'os_cala_poste', 'os_cala_cuervo', 'os_cala_ojos', 'os_cala_nariz', 'os_cala_boca'], 'mitico', 'Cabeza de calabaza y relleno de paja: espanta cuervos y también a la hora del examen.'],
  ['inframundo', 'Gato Rey del Inframundo', '#6b2a60', '#44193f', 'liso', ['os_inf_llamas', 'os_inf_hombreras', 'os_inf_cadenas', 'os_inf_runas', 'os_inf_candado', 'os_inf_ojos'], 'mitico', 'Gobierna el inframundo desde un trono y exige pagar tributo en atún.']
];

// lista aparte de GATOS (no entra en sorteos): rareza como objeto de RAR, solo variante oscuro; tema = descripción
const GATOS_OSC = GATOS_OSC_DEF.map(([id, name, body, shade, pat, acc, rar, tema], i) =>
  ({ id, name, body, shade, pat, acc, rar: RAR.find(r => r.id === rar), pos: 6 + (i % 4), w: 1, of: undefined, oscuro: true, tema }));
