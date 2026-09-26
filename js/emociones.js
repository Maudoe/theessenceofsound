/* ============ The Essence of Sound — el color emocional de un acorde ============

   Un Dm y un Dm9 son el mismo acorde, pero no suenan igual: el segundo
   tiene otra ropa. Acá está esa ropa, ordenada por la sensación que
   produce, para poder pedir "quiero que esta parte suene sensual" y que
   te diga qué versión del acorde usar y con qué escala acompañarla.

   Aviso honesto: esto es convención, no física. Que una 9na suene sensual
   es un acuerdo cultural de la música popular del último siglo, no una
   propiedad del sonido. Son las opciones que de hecho se usan en ese
   contexto, no una verdad demostrable. */

const EMOCIONES = {
  sensual: {
    nombre: "Sensual",
    resumen: "Terciopelo: acordes anchos, sin aristas, que se quedan flotando.",
    // qué versión del acorde da ese color, según su familia
    menor: ["m9", "m11", "m6"],
    mayor: ["maj9", "6/9"],
    dominante: ["13", "9"],
    escalas: { menor: ["dorico", "menorMelodica"], mayor: ["lidio", "bluesMayor"], dominante: ["mixolidio", "bluesMayor"] },
    comoUsar: "Agregá la 9na y dejá el acorde sonar. Tocá poco y lento: lo sensual está en el espacio que dejás, no en las notas que metés. Evitá la fundamental en la melodía — buscá la 9na y la 6ta, que son las que dan ese aire.",
  },
  melancolico: {
    nombre: "Melancólico",
    resumen: "La nostalgia de lo que no volvió: menores con séptima, sin dramatismo.",
    menor: ["m7", "m9", "mmaj7"],
    mayor: ["maj7", "6"],
    dominante: ["9"],
    escalas: { menor: ["eolico", "dorico"], mayor: ["jonico", "lidio"], dominante: ["mixolidio"] },
    comoUsar: "El m7 es el punto de partida. Si querés apretar el nudo, pasá un compás por mmaj7: esa séptima mayor adentro de un menor es la que duele. Frases descendentes y notas largas.",
  },
  tenso: {
    nombre: "Tenso / inquietante",
    resumen: "Algo está por pasar: dominantes alterados y disminuidos que no dejan respirar.",
    menor: ["m7b5", "dim7"],
    mayor: ["aug"],
    dominante: ["7", "13"],
    escalas: { menor: ["locrio", "disminuida"], mayor: ["tonosEnteros"], dominante: ["alterada", "disminuida"] },
    comoUsar: "Meté el acorde alterado justo ANTES de resolver, nunca sobre el reposo. La tensión sirve si después soltás: un compás tenso y resolvés al siguiente. Si la dejás mucho, deja de ser tensión y pasa a ser ruido.",
  },
  luminoso: {
    nombre: "Luminoso / épico",
    resumen: "Cielo abierto: mayores con 9na y esa #11 que levanta todo.",
    menor: ["m9"],
    mayor: ["maj9", "maj7"],
    dominante: ["9", "13"],
    escalas: { menor: ["dorico"], mayor: ["lidio", "jonico"], dominante: ["lidioDominante", "mixolidio"] },
    comoUsar: "La nota clave es la #11 (la cuarta subida): es la que convierte un mayor común en algo cinematográfico. Dejala sonar arriba de todo, en la voz más aguda.",
  },
  oscuro: {
    nombre: "Oscuro / amenazante",
    resumen: "Sin adornos y con la segunda bemol: peso, tierra, amenaza.",
    menor: ["m", "m7"],
    mayor: ["5"],
    dominante: ["7"],
    escalas: { menor: ["frigio", "pentaMenor"], mayor: ["frigioDominante"], dominante: ["frigioDominante", "alterada"] },
    comoUsar: "Menos notas, más abajo. Sacá las extensiones: acá el acorde desnudo o directo la quinta sola pesa más que cualquier color. La b2 es la que da el sabor: usala como nota de arranque de la frase.",
  },
  nostalgico: {
    nombre: "Nostálgico / cálido",
    resumen: "Foto vieja: séptimas mayores y sextas, todo redondo.",
    menor: ["m7", "m9"],
    mayor: ["maj7", "6/9", "add9"],
    dominante: ["9"],
    escalas: { menor: ["dorico"], mayor: ["jonico", "pentaMayor"], dominante: ["mixolidio"] },
    comoUsar: "La 6ta en vez de la 7ma le saca el peso jazzero y lo deja más cálido y viejo. Arpegios lentos, nada de bloques.",
  },
  swing: {
    nombre: "Con swing",
    resumen: "Que camine: dominantes con 13na y el cromatismo del bebop.",
    menor: ["m6", "m7"],
    mayor: ["6", "6/9"],
    dominante: ["13", "9"],
    escalas: { menor: ["bebopMenor", "dorico"], mayor: ["bebopMayor", "pentaMayor"], dominante: ["bebopDominante", "mixolidio"] },
    comoUsar: "Las escalas bebop tienen una nota cromática de más justamente para que, bajando corcheas, los tiempos fuertes caigan en notas del acorde. Tocá corcheas parejas y dejá que la nota de paso caiga en el tiempo débil: ahí aparece el balanceo.",
  },
  desgarrado: {
    nombre: "Desgarrado / blues",
    resumen: "El quejido: la tercera peleándose consigo misma.",
    menor: ["m7"],
    mayor: ["7"],
    dominante: ["7", "9"],
    escalas: { menor: ["blues", "pentaMenor"], mayor: ["blues", "bluesMayor"], dominante: ["blues", "pentaMenor"] },
    comoUsar: "El truco del blues es tocar la tercera menor encima de un acorde con tercera mayor: esa fricción es el quejido. Bendeá la b3 hacia la 3ra mayor sin llegar del todo y quedate ahí.",
  },
};

/* La familia del acorde, para saber qué columna de la tabla mirar. */
function familiaDeAcorde(acorde) {
  if (!acorde) return "mayor";
  if (["7", "9", "11", "13"].includes(acorde.calidad)) return "dominante";
  if (acorde.esMenor) return "menor";
  return "mayor";
}

/* Las versiones de ESTE acorde que dan ese color, con sus notas. Sólo
   devuelve las que se pueden cifrar de verdad (si una no parsea, se cae
   de la lista en vez de inventar un acorde que no existe). */
function versionesConColor(acorde, emocionId) {
  const emo = EMOCIONES[emocionId];
  if (!emo || !acorde) return [];
  const familia = familiaDeAcorde(acorde);
  const sufijos = emo[familia] || [];
  const vistos = new Set();

  return sufijos
    .map((suf) => {
      const cifrado = acorde.raiz + suf;
      const parseado = spellChord(cifrado);
      if (!parseado || vistos.has(cifrado)) return null;
      vistos.add(cifrado);
      return { cifrado, notas: parseado.notas.join(" "), acorde: parseado };
    })
    .filter(Boolean);
}

/* Las escalas que acompañan ese color sobre este acorde. */
function escalasConColor(acorde, emocionId) {
  const emo = EMOCIONES[emocionId];
  if (!emo || !acorde) return [];
  const familia = familiaDeAcorde(acorde);
  return (emo.escalas[familia] || []).filter((id) => ESCALAS[id]);
}

/* Dónde conviene meterlo dentro de la progresión que estás mirando. Usa
   las conexiones reales del mapa abierto: si de este acorde sale una
   flecha a otro, el lugar natural del color es justo antes de ese salto. */
function dondeUsarloEnElMapa(cifradoOriginal) {
  if (typeof mapaEnPantalla === "undefined" || !mapaEnPantalla) return null;
  const { nodos, salientes } = mapaEnPantalla;
  if (!nodos) return null;

  const nucleo = nucleoEtiqueta(cifradoOriginal);
  const i = nodos.findIndex((n) => n.nucleo === nucleo ||
    (n.acorde && spellChord(cifradoOriginal) &&
     INDICE_NOTA[n.acorde.raiz] === INDICE_NOTA[spellChord(cifradoOriginal).raiz]));
  if (i < 0) return null;

  const salidas = salientes.get(i) || [];
  if (!salidas.length) return null;

  return salidas.map((s) => ({
    destino: nodos[s.destino].etiqueta,
    tipo: s.tipo || "",
  }));
}
