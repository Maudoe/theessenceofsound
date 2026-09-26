/* ============ The Essence of Sound — transportar un mapa ============
   Los mapas vienen escritos casi todos en Do (o La menor). Esto los
   reescribe a cualquier tonalidad, respetando la calidad de cada acorde y
   el texto que lo rodea: sólo se tocan los tokens que son de verdad un
   cifrado, así "Dominante secundaria al ii" no se convierte en otra cosa
   por empezar con D. */

const NOMBRES_TONALIDAD = ["C", "Db", "D", "Eb", "E", "F", "F#", "G", "Ab", "A", "Bb", "B"];

/* Tonalidades que se escriben con bemoles, por modo. El modo importa: Sol
   MAYOR lleva un sostenido, pero sol MENOR lleva dos bemoles — sin esta
   distinción un mapa en Dm pasado a Gm escribía "D#" donde va "Eb". */
const TONALIDADES_BEMOL_MAYOR = new Set(["F", "Bb", "Eb", "Ab", "Db", "Gb", "Cb"]);
const TONALIDADES_BEMOL_MENOR = new Set(["D", "G", "C", "F", "Bb", "Eb", "Ab"]);

function usaBemoles(tonica, esMenor) {
  return esMenor ? TONALIDADES_BEMOL_MENOR.has(tonica) : TONALIDADES_BEMOL_MAYOR.has(tonica);
}

/* Un token es un cifrado sólo si se parsea ENTERO. Sin esto, "Amet" se
   leería como La menor ("A" + "m") y terminaríamos transportando palabras
   sueltas del castellano. */
function esCifradoEstricto(token) {
  const limpio = String(token).trim();
  if (!limpio || !/^[A-G]/.test(limpio)) return false;

  const partes = limpio.split("/");
  if (partes.length > 2) return false;
  const cuerpo = partes[0];
  if (partes.length === 2 && !(partes[1] in INDICE_NOTA)) return false;

  const m = cuerpo.match(/^([A-G])([#b]?)(.*)$/);
  if (!m) return false;
  const resto = m[3];

  // el resto tiene que ser exactamente una calidad conocida (con o sin
  // alteraciones entre paréntesis al final)
  const sinParen = resto.replace(/\([^)]*\)\s*$/, "");
  return CALIDADES.some(([suf]) => suf === sinParen);
}

function transportarNota(nombreNota, semitonos, usarBemoles) {
  const base = INDICE_NOTA[nombreNota];
  if (base === undefined) return nombreNota;
  const destino = (base + semitonos + 144) % 12;
  return (usarBemoles ? NOTAS_BEMOLES : NOTAS_SOSTENIDOS)[destino];
}

function transportarCifrado(cifrado, semitonos, usarBemoles) {
  const partes = String(cifrado).split("/");
  const m = partes[0].match(/^([A-G][#b]?)(.*)$/);
  if (!m) return cifrado;
  let out = transportarNota(m[1], semitonos, usarBemoles) + m[2];
  if (partes.length === 2) {
    out += "/" + transportarNota(partes[1], semitonos, usarBemoles);
  }
  return out;
}

/* Recorre un texto libre y transporta sólo los cifrados que encuentra. */
function transportarTexto(texto, semitonos, usarBemoles) {
  if (!texto || !semitonos) return texto;
  // corta por separadores pero los conserva, para rearmar igual
  return String(texto)
    .split(/([^A-Za-z0-9#♭b()/+°ø]+)/)
    .map((tok) => (esCifradoEstricto(tok) ? transportarCifrado(tok, semitonos, usarBemoles) : tok))
    .join("");
}

/* El acorde en el que está escrito el mapa: el primero que se pueda leer.
   Casi todos arrancan por la tónica. Devuelve también si es menor, que es
   lo que decide después si la tonalidad se escribe con bemoles. */
function acordeTonicaOriginal(mapa) {
  const candidatos = (mapa.nodos_principales || []).concat(
    (mapa.conexiones_flechas || []).map((c) => c.origen)
  );
  for (const bruto of candidatos) {
    const ac = spellChord(bruto);
    if (ac && INDICE_NOTA[ac.raiz] !== undefined) {
      return { raiz: ac.raiz, esMenor: !!ac.esMenor };
    }
  }
  return { raiz: "C", esMenor: false };
}

function tonicaOriginal(mapa) {
  return acordeTonicaOriginal(mapa).raiz;
}

function mapaEsMenor(mapa) {
  return acordeTonicaOriginal(mapa).esMenor;
}

/* Devuelve una copia del mapa en otra tonalidad. Con semitonos = 0
   devuelve el mapa tal cual (misma referencia, no hace falta copiar). */
function transportarMapa(mapa, tonicaDestino) {
  const tonica = acordeTonicaOriginal(mapa);
  const desde = INDICE_NOTA[tonica.raiz];
  const hasta = INDICE_NOTA[tonicaDestino];
  if (desde === undefined || hasta === undefined) return mapa;
  const semitonos = (hasta - desde + 12) % 12;
  if (!semitonos) return mapa;

  const bemoles = usaBemoles(tonicaDestino, tonica.esMenor);
  const t = (txt) => transportarTexto(txt, semitonos, bemoles);

  return {
    ...mapa,
    _transportado: { desde: tonica.raiz, hasta: tonicaDestino, semitonos, esMenor: tonica.esMenor },
    nodos_principales: (mapa.nodos_principales || []).map(t),
    conexiones_flechas: (mapa.conexiones_flechas || []).map((c) => ({
      ...c,
      origen: t(c.origen),
      destino: t(c.destino),
    })),
  };
}
