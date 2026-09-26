/* ============ The Essence of Sound — asignación de color por nodo ============
   Los mapas traen un "esquema_colores" (categoría -> color) pero no dicen
   explícitamente a qué categoría pertenece cada nodo. Reconstruimos esa
   relación con pistas de texto (las anotaciones entre paréntesis, o la
   calidad del acorde) y, si no hay ninguna pista, repartimos los colores
   restantes en orden estable para que el gráfico nunca quede monocromo. */

function quitarAcentos(s) {
  return s.normalize("NFD").replace(/[̀-ͯ]/g, "");
}

function normalizarClave(s) {
  return quitarAcentos(String(s)).toLowerCase().replace(/[_-]/g, " ").trim();
}

const PISTA_TONICA = ["tonica", "tónica"];

const PISTAS_CALIDAD = [
  { test: (a) => a && a.esDisminuido, palabras: ["disminu", "dim"] },
  { test: (a) => a && a.esAumentado, palabras: ["aumentad", "aug"] },
  { test: (a) => a && a.esSus, palabras: ["suspend", "sus"] },
  { test: (a) => a && a.esDominante, palabras: ["dominante", "septima", "7ma", "7"] },
  { test: (a) => a && a.esMenor, palabras: ["menor", "min"] },
  // "tónica" queda afuera de esta lista a propósito: sin eso, cualquier
  // acorde mayor (no sólo el que de verdad es la tónica del mapa) se
  // pintaba con el color de "tónica" apenas ese key existía en el esquema.
  { test: (a) => a && !a.esMenor && !a.esDisminuido && !a.esAumentado, palabras: ["mayor"] },
];

/* Devuelve { colorKey, color } para un nodo, dado el esquema de colores
   del mapa (objeto categoría->hex) y un acorde ya parseado (o null). */
function elegirColorNodo(label, esquemaColores, acordeParseado, indice, estado) {
  const claves = Object.keys(esquemaColores);
  if (!claves.length) return { colorKey: null, color: "#8a8a99" };

  const labelNorm = normalizarClave(label);
  const clavesNorm = claves.map((c) => ({ c, n: normalizarClave(c) }));
  const menciona = (n, palabras) => palabras.some((p) => n.includes(p));

  // 1) coincidencia directa: alguna palabra de la clave aparece en el label
  //    (o viceversa), típicamente vía las anotaciones "(Tónica)", "(Dórico)".
  for (const { c, n } of clavesNorm) {
    const palabras = n.split(" ").filter((w) => w.length > 3);
    for (const p of palabras) {
      if (labelNorm.includes(p)) {
        return { colorKey: c, color: esquemaColores[c] };
      }
    }
  }

  // 2) el primer nodo del mapa suele ser la tónica: si el esquema trae una
  //    categoría de tónica y este acorde no es claramente otra cosa
  //    (menor/disminuido/aumentado), se la lleva él y sólo él.
  if (indice === 0 && (!acordeParseado || (!acordeParseado.esMenor && !acordeParseado.esDisminuido && !acordeParseado.esAumentado))) {
    const tonica = clavesNorm.find(({ n }) => menciona(n, PISTA_TONICA));
    if (tonica) return { colorKey: tonica.c, color: esquemaColores[tonica.c] };
  }

  // 3) coincidencia por calidad de acorde (mayor/menor/dominante/etc.),
  //    saltando la categoría de tónica para que no se la lleve cualquiera.
  for (const pista of PISTAS_CALIDAD) {
    if (!pista.test(acordeParseado)) continue;
    for (const { c, n } of clavesNorm) {
      if (menciona(n, PISTA_TONICA)) continue;
      if (pista.palabras.some((p) => n.includes(p))) {
        return { colorKey: c, color: esquemaColores[c] };
      }
    }
  }

  // 4) reparto estable: rota por las categorías restantes (evitando la de
  //    tónica, reservada para el nodo 0) para que el gráfico no quede
  //    monocromo aunque no haya podido clasificar nada.
  const rotables = clavesNorm.filter(({ n }) => !menciona(n, PISTA_TONICA));
  const pool = rotables.length ? rotables : clavesNorm;
  const elegido = pool[indice % pool.length];
  return { colorKey: elegido.c, color: esquemaColores[elegido.c] };
}

/* Deriva un color RGBA con transparencia a partir de un hex, para halos. */
function hexConAlpha(hex, alpha) {
  const h = hex.replace("#", "");
  const bigint = parseInt(h.length === 3
    ? h.split("").map((c) => c + c).join("")
    : h, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
