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
    // cuatro acordes para armar una estrofa o estribillo entero con este
    // color, no sólo un acorde suelto: i - iv - bVII - bIII (soul/R&B),
    // cada grado con la familia que le corresponde de verdad.
    progresion: [
      { semitonos: 0, familia: "menor", grado: "i" },
      { semitonos: 5, familia: "menor", grado: "iv" },
      { semitonos: 10, familia: "dominante", grado: "bVII" },
      { semitonos: 3, familia: "mayor", grado: "bIII" },
    ],
  },
  melancolico: {
    nombre: "Melancólico",
    resumen: "La nostalgia de lo que no volvió: menores con séptima, sin dramatismo.",
    menor: ["m7", "m9", "mmaj7"],
    mayor: ["maj7", "6"],
    dominante: ["9"],
    escalas: { menor: ["eolico", "dorico"], mayor: ["jonico", "lidio"], dominante: ["mixolidio"] },
    comoUsar: "El m7 es el punto de partida. Si querés apretar el nudo, pasá un compás por mmaj7: esa séptima mayor adentro de un menor es la que duele. Frases descendentes y notas largas.",
    // i - bVI - bIII - bVII: la progresión de las baladas melancólicas
    // de toda la vida ("Zombie", incontables covers acústicos).
    progresion: [
      { semitonos: 0, familia: "menor", grado: "i" },
      { semitonos: 8, familia: "mayor", grado: "bVI" },
      { semitonos: 3, familia: "mayor", grado: "bIII" },
      { semitonos: 10, familia: "mayor", grado: "bVII" },
    ],
  },
  tenso: {
    nombre: "Tenso / inquietante",
    resumen: "Algo está por pasar: dominantes alterados y disminuidos que no dejan respirar.",
    menor: ["m7b5", "dim7"],
    mayor: ["aug"],
    dominante: ["7", "13"],
    escalas: { menor: ["locrio", "disminuida"], mayor: ["tonosEnteros"], dominante: ["alterada", "disminuida"] },
    comoUsar: "Meté el acorde alterado justo ANTES de resolver, nunca sobre el reposo. La tensión sirve si después soltás: un compás tenso y resolvés al siguiente. Si la dejás mucho, deja de ser tensión y pasa a ser ruido.",
    // i - bII - V - i: el acorde napolitano (el semitono arriba) antes
    // del dominante es el recurso clásico de "algo se acerca" — cine de
    // terror y suspenso lo usan desde siempre.
    progresion: [
      { semitonos: 0, familia: "menor", grado: "i" },
      { semitonos: 1, familia: "mayor", grado: "bII" },
      { semitonos: 7, familia: "dominante", grado: "V" },
      { semitonos: 0, familia: "menor", grado: "i" },
    ],
  },
  luminoso: {
    nombre: "Luminoso / épico",
    resumen: "Cielo abierto: mayores con 9na y esa #11 que levanta todo.",
    menor: ["m9"],
    mayor: ["maj9", "maj7"],
    dominante: ["9", "13"],
    escalas: { menor: ["dorico"], mayor: ["lidio", "jonico"], dominante: ["lidioDominante", "mixolidio"] },
    comoUsar: "La nota clave es la #11 (la cuarta subida): es la que convierte un mayor común en algo cinematográfico. Dejala sonar arriba de todo, en la voz más aguda.",
    // I - V - vi - IV: la progresión más "himno" que existe, la de
    // incontables estribillos épicos y pop-rock luminoso.
    progresion: [
      { semitonos: 0, familia: "mayor", grado: "I" },
      { semitonos: 7, familia: "dominante", grado: "V" },
      { semitonos: 9, familia: "menor", grado: "vi" },
      { semitonos: 5, familia: "mayor", grado: "IV" },
    ],
  },
  oscuro: {
    nombre: "Oscuro / amenazante",
    resumen: "Sin adornos y con la segunda bemol: peso, tierra, amenaza.",
    menor: ["m", "m7"],
    mayor: ["5"],
    dominante: ["7"],
    escalas: { menor: ["frigio", "pentaMenor"], mayor: ["frigioDominante"], dominante: ["frigioDominante", "alterada"] },
    comoUsar: "Menos notas, más abajo. Sacá las extensiones: acá el acorde desnudo o directo la quinta sola pesa más que cualquier color. La b2 es la que da el sabor: usala como nota de arranque de la frase.",
    // i - bII - iv - i: el vamp frigio de siempre — flamenco, metal
    // oriental, bandas sonoras de amenaza. bII como power chord pesa.
    progresion: [
      { semitonos: 0, familia: "menor", grado: "i" },
      { semitonos: 1, familia: "mayor", grado: "bII" },
      { semitonos: 5, familia: "menor", grado: "iv" },
      { semitonos: 0, familia: "menor", grado: "i" },
    ],
  },
  nostalgico: {
    nombre: "Nostálgico / cálido",
    resumen: "Foto vieja: séptimas mayores y sextas, todo redondo.",
    menor: ["m7", "m9"],
    mayor: ["maj7", "6/9", "add9"],
    dominante: ["9"],
    escalas: { menor: ["dorico"], mayor: ["jonico", "pentaMayor"], dominante: ["mixolidio"] },
    comoUsar: "La 6ta en vez de la 7ma le saca el peso jazzero y lo deja más cálido y viejo. Arpegios lentos, nada de bloques.",
    // I - vi - IV - V: la "progresión de los 50" — doo-wop, baladas
    // viejas, todo lo que suena a foto vieja usa esta vuelta.
    progresion: [
      { semitonos: 0, familia: "mayor", grado: "I" },
      { semitonos: 9, familia: "menor", grado: "vi" },
      { semitonos: 5, familia: "mayor", grado: "IV" },
      { semitonos: 7, familia: "dominante", grado: "V" },
    ],
  },
  swing: {
    nombre: "Con swing",
    resumen: "Que camine: dominantes con 13na y el cromatismo del bebop.",
    menor: ["m6", "m7"],
    mayor: ["6", "6/9"],
    dominante: ["13", "9"],
    escalas: { menor: ["bebopMenor", "dorico"], mayor: ["bebopMayor", "pentaMayor"], dominante: ["bebopDominante", "mixolidio"] },
    comoUsar: "Las escalas bebop tienen una nota cromática de más justamente para que, bajando corcheas, los tiempos fuertes caigan en notas del acorde. Tocá corcheas parejas y dejá que la nota de paso caiga en el tiempo débil: ahí aparece el balanceo.",
    // I - vi - ii - V: la vuelta de jazz de toda la vida, la que
    // caminan los standards antes de volver a la tónica.
    progresion: [
      { semitonos: 0, familia: "mayor", grado: "I" },
      { semitonos: 9, familia: "menor", grado: "vi" },
      { semitonos: 2, familia: "menor", grado: "ii" },
      { semitonos: 7, familia: "dominante", grado: "V" },
    ],
  },
  desgarrado: {
    nombre: "Desgarrado / blues",
    resumen: "El quejido: la tercera peleándose consigo misma.",
    menor: ["m7"],
    mayor: ["7"],
    dominante: ["7", "9"],
    escalas: { menor: ["blues", "pentaMenor"], mayor: ["blues", "bluesMayor"], dominante: ["blues", "pentaMenor"] },
    comoUsar: "El truco del blues es tocar la tercera menor encima de un acorde con tercera mayor: esa fricción es el quejido. Bendeá la b3 hacia la 3ra mayor sin llegar del todo y quedate ahí.",
    // I7 - IV7 - I7 - V7: el quick-change del blues de doce compases,
    // resumido a cuatro acordes. Acá TODO grado es dominante — así se
    // toca blues de verdad, no como acordes de función clásica.
    progresion: [
      { semitonos: 0, familia: "dominante", grado: "I7" },
      { semitonos: 5, familia: "dominante", grado: "IV7" },
      { semitonos: 0, familia: "dominante", grado: "I7" },
      { semitonos: 7, familia: "dominante", grado: "V7" },
    ],
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
