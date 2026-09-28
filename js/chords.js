/* ============ The Essence of Sound — teoría mínima de acordes ============
   Convierte un cifrado de acorde en sus notas. No intenta cubrir el 100%
   de la notación posible (esto no es un parser de jazz completo): cubre
   tríadas, séptimas, sextas, sus, add, y extensiones básicas (9/11/13),
   con bajo opcional (slash chord). Lo que no reconoce, lo deja sin
   notas — mejor omitir que inventar. */

const NOTAS_SOSTENIDOS = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
const NOTAS_BEMOLES = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"];

const INDICE_NOTA = {};
NOTAS_SOSTENIDOS.forEach((n, i) => (INDICE_NOTA[n] = i));
NOTAS_BEMOLES.forEach((n, i) => (INDICE_NOTA[n] = i));
INDICE_NOTA["E#"] = 5; INDICE_NOTA["B#"] = 0; INDICE_NOTA["Cb"] = 11; INDICE_NOTA["Fb"] = 4;

/* Intervalos en semitonos desde la fundamental, por calidad de acorde.
   Ordenadas las claves más largas primero donde hay ambigüedad de prefijo. */
const CALIDADES = [
  ["maj13", [0, 4, 7, 11, 14, 21]],
  ["maj11", [0, 4, 7, 11, 14, 17]],
  ["maj9", [0, 4, 7, 11, 14]],
  ["maj7", [0, 4, 7, 11]],
  ["m7b5", [0, 3, 6, 10]],
  ["m9", [0, 3, 7, 10, 14]],
  ["m11", [0, 3, 7, 10, 14, 17]],
  ["m13", [0, 3, 7, 10, 14, 21]],
  ["m7", [0, 3, 7, 10]],
  ["m6", [0, 3, 7, 9]],
  ["mmaj7", [0, 3, 7, 11]],
  ["min", [0, 3, 7]],
  ["m", [0, 3, 7]],
  ["dim7", [0, 3, 6, 9]],
  ["dim", [0, 3, 6]],
  ["°7", [0, 3, 6, 9]],
  ["°", [0, 3, 6]],
  ["ø7", [0, 3, 6, 10]],
  ["ø", [0, 3, 6, 10]],
  ["aug", [0, 4, 8]],
  ["+", [0, 4, 8]],
  ["sus2", [0, 2, 7]],
  ["sus4", [0, 5, 7]],
  ["sus", [0, 5, 7]],
  ["add9", [0, 4, 7, 14]],
  ["add2", [0, 2, 4, 7]],
  ["6/9", [0, 4, 7, 9, 14]],
  ["6", [0, 4, 7, 9]],
  ["13", [0, 4, 7, 10, 14, 21]],
  ["11", [0, 4, 7, 10, 14, 17]],
  ["9", [0, 4, 7, 10, 14]],
  ["7", [0, 4, 7, 10]],
  ["5", [0, 7]],
  ["", [0, 4, 7]],
];

/* Alteraciones típicas entre paréntesis: no cambian la tríada base que
   usamos para el dibujo, pero si aparecen b5/#5 solas sí las aplicamos. */
function aplicarAlteracion(intervalos, alt) {
  const out = intervalos.slice();
  const set = (target, val) => {
    const i = out.indexOf(target);
    if (i >= 0) out[i] = val;
  };
  if (/b5/.test(alt)) set(7, 6);
  if (/#5/.test(alt)) set(7, 8);
  if (/#11/.test(alt) && !out.includes(18)) out.push(18);
  if (/b9/.test(alt) && !out.includes(13)) out.push(13);
  if (/#9/.test(alt) && !out.includes(15)) out.push(15);
  return out;
}

/* Algunos mapas escriben el nodo como "D (Dórico)" en vez de "Dm": el
   nombre del modo entre paréntesis, no un cifrado real. Si lo tiráramos
   sin más, "D (Dórico)" quedaría en Re MAYOR — que no es lo que dice el
   propio texto. Esta tabla traduce el nombre del modo a la calidad que
   realmente le corresponde a su acorde característico, así el "(Dórico)"
   no se pierde: se convierte en la "m" que hace que suene a Dórico. */
const CALIDAD_POR_MODO = {
  jonico: "", lidio: "", mixolidio: "7",
  dorico: "m", frigio: "m", eolico: "m", menor: "m",
  locrio: "m7b5",
};

function calidadDesdeNombreDeModo(texto) {
  const normalizado = String(texto)
    .normalize("NFD").replace(/[̀-ͯ]/g, "") // saca acentos: "Jónico" -> "Jonico"
    .toLowerCase().trim()
    .replace(/^modo\s+/, ""); // "Modo Dórico" -> "dórico"
  // coincidencia exacta con la primera palabra nomás — "Mixolidio" no
  // tiene que matchear "Lidio" por contener esas letras adentro.
  const primeraPalabra = normalizado.split(/\s+/)[0];
  if (Object.prototype.hasOwnProperty.call(CALIDAD_POR_MODO, primeraPalabra)) {
    return CALIDAD_POR_MODO[primeraPalabra];
  }
  return null;
}

/* ¿"s" es de verdad un cifrado (raíz + una calidad conocida), y no un
   texto que arranca casualmente con una letra A-G ("Eje Tónica" arranca
   con "E", pero no es la nota Mi)? Mismo criterio que parsearAcorde
   usa después, pero sin construir el acorde entero — sólo para decidir
   si conviene mirar en el paréntesis en vez de creerle a esto. */
function raizYCalidadValidas(s) {
  const m = String(s).match(/^([A-Ga-g])([#b]?)(.*)$/);
  if (!m) return false;
  const raiz = m[1].toUpperCase() + m[2];
  if (!(raiz in INDICE_NOTA)) return false;
  const resto = m[3].trim().replace(/\([^)]*\)\s*$/, "").trim();
  return CALIDADES.some(([suf]) => resto === suf || (suf !== "" && resto.startsWith(suf)));
}

/* Extrae el primer cifrado "parseable" de un string que puede traer
   anotaciones en español entre paréntesis, ej: "C (Jónico)" o
   "Fm6 (Subdominante menor)". */
function extraerCifrado(bruto) {
  if (!bruto) return null;
  let s = String(bruto).trim();
  // Si hay una barra de acorde compuesto tipo "F/G", la tratamos aparte.
  const parenExterno = s.match(/^([^(]+)\(([^)]*)\)\s*$/);
  let notaAlt = "";
  if (parenExterno) {
    s = parenExterno[1].trim();
    notaAlt = parenExterno[2];
    // si el texto antes del paréntesis es sólo la raíz pelada (sin
    // calidad propia) y el paréntesis nombra un modo conocido, esa
    // calidad es la que faltaba — no una alteración a ignorar.
    if (/^[A-Ga-g][#b]?$/.test(s)) {
      const calidad = calidadDesdeNombreDeModo(notaAlt);
      if (calidad !== null) s = s + calidad;
    } else if (!raizYCalidadValidas(s)) {
      // el texto de afuera no es un cifrado de verdad — es análisis en
      // números romanos ("I7", "ii", "bIIIo"), o una etiqueta que por
      // casualidad arranca con una letra A-G ("Eje Tónica", "Escala…")
      // — pero el cifrado real suele estar escrito adentro del
      // paréntesis. Si el primer término ahí adentro (separado por
      // coma, para listas tipo "C, Am, Dm") es un cifrado de verdad, es
      // ÉSE el acorde que hay que tocar.
      const primerTermino = notaAlt.split(",")[0].trim();
      if (raizYCalidadValidas(primerTermino)) s = primerTermino;
    }
  }
  return { texto: s, notaAlt };
}

/* Algunos mapas de armonía cuartal o de clústers no escriben un cifrado
   con raíz+calidad — escriben la voicing entera, nota por nota, unida
   con guiones: "E-A-D-G" (cuartas apiladas), "C-C#-D" (clúster). No es
   un acorde con nombre, así que no pasa por CALIDADES: se arma directo
   con esas notas tal cual están escritas. */
function parsearListaDeNotas(cifradoBruto) {
  const partes = String(cifradoBruto).trim().split("-").map((p) => p.trim());
  if (partes.length < 2) return null;
  if (!partes.every((p) => /^[A-G][#b]?$/.test(p) && p in INDICE_NOTA)) return null;
  const raiz = partes[0];
  return {
    raiz, calidad: "", notas: partes, bajo: null,
    esMenor: false, esDominante: false, esDisminuido: false, esAumentado: false, esSus: false,
  };
}

/* Parsea un cifrado tipo "Dm7", "Ab7#11", "G13(b9)", "C/E", "Cmaj7". */
function parsearAcorde(cifradoBruto) {
  const listaDeNotas = parsearListaDeNotas(cifradoBruto);
  if (listaDeNotas) return listaDeNotas;

  const ext = extraerCifrado(cifradoBruto);
  if (!ext) return null;
  let { texto } = ext;

  // separa bajo si hay slash
  let bajo = null;
  const partesSlash = texto.split("/");
  if (partesSlash.length === 2) {
    texto = partesSlash[0].trim();
    bajo = partesSlash[1].trim();
  }

  const m = texto.match(/^([A-Ga-g])([#b]?)(.*)$/);
  if (!m) return null;
  const raiz = m[1].toUpperCase() + m[2];
  if (!(raiz in INDICE_NOTA)) return null;
  let resto = m[3].trim();

  // separa alteraciones entre paréntesis, ej "13(b9)" -> "13", "b9"
  let alt = "";
  const conParen = resto.match(/^([^(]*)\(([^)]*)\)\s*(.*)$/);
  if (conParen) {
    resto = (conParen[1] + " " + conParen[3]).trim();
    alt = conParen[2];
  }
  // alteraciones sueltas tipo "#11" pegadas sin paréntesis
  const alteracionSuelta = resto.match(/(#11|b5|#5|#9|b9)/);
  if (alteracionSuelta) {
    alt += " " + alteracionSuelta[1];
    resto = resto.replace(alteracionSuelta[1], "").trim();
  }
  resto = resto.replace(/\(no5\)|\(no3\)/g, "").trim();

  let calidad = null, intervalos = null;
  for (const [suf, ints] of CALIDADES) {
    if (resto === suf || (suf !== "" && resto.startsWith(suf))) {
      calidad = suf; intervalos = ints; break;
    }
  }
  if (intervalos === null) return null;

  if (alt) intervalos = aplicarAlteracion(intervalos, alt);

  const raizIdx = INDICE_NOTA[raiz];
  const usaBemoles = raiz.includes("b") || ["F", "C", "Bb", "Eb", "Ab", "Db", "Gb"].includes(raiz);
  const tabla = usaBemoles ? NOTAS_BEMOLES : NOTAS_SOSTENIDOS;
  const notas = intervalos.map((semitonos) => tabla[(raizIdx + semitonos + 120) % 12]);

  let bajoNota = null;
  if (bajo && bajo in INDICE_NOTA) bajoNota = bajo;

  return {
    raiz,
    calidad,
    notas,
    bajo: bajoNota,
    esMenor: /^m(?!aj)/.test(calidad) || calidad === "min" || calidad === "dim7" || calidad === "dim" || calidad === "°" || calidad === "°7" || calidad === "ø" || calidad === "ø7",
    esDominante: /^\d/.test(calidad) && calidad !== "",
    esDisminuido: /dim|°/.test(calidad),
    esAumentado: /aug|\+/.test(calidad),
    esSus: /sus/.test(calidad),
  };
}

/* Punto de entrada usado por el resto de la app: intenta parsear, y si
   no puede (texto descriptivo, no un cifrado) devuelve null sin romper. */
function spellChord(label) {
  try {
    return parsearAcorde(label);
  } catch (e) {
    return null;
  }
}
