/* ============ The Essence of Sound — qué escala tocar encima de un acorde ============

   Sobre cada acorde entran varias escalas, y dentro de cada escala no todas
   las notas pesan igual. Acá se clasifica nota por nota en cuatro papeles:

     · base      — son notas del acorde. Caés parado siempre.
     · puente    — el resto de la escala. Conectan, se usan de paso.
     · tensión   — chocan con una nota del acorde y piden resolver.
     · resolución— a dónde va esa tensión.

   La tensión no la elegimos a dedo: una nota es tensa cuando está a un
   SEMITONO POR ARRIBA de una nota del acorde. Eso es la "avoid note" de
   toda la vida, y sale sola de la aritmética. En Do mayor da Fa (roza el
   Mi), en Do menor da Lab (roza el Sol), en el frigio da Reb y Lab. La
   resolución es la nota del acorde que está justo debajo. */

/* Las escalas, en semitonos desde la fundamental del acorde. */
const ESCALAS = {
  jonico:        { nombre: "Jónica (mayor)",        grados: [0, 2, 4, 5, 7, 9, 11], sabor: "La mayor de toda la vida. Suena a casa, a resuelto." },
  lidio:         { nombre: "Lidia",                 grados: [0, 2, 4, 6, 7, 9, 11], sabor: "Mayor pero flotando: la #11 le da aire de banda sonora." },
  mixolidio:     { nombre: "Mixolidia",             grados: [0, 2, 4, 5, 7, 9, 10], sabor: "Mayor con 7ma menor. Es la escala del dominante y del rock." },
  lidioDominante:{ nombre: "Lidia dominante",       grados: [0, 2, 4, 6, 7, 9, 10], sabor: "Dominante con #11. Jazz moderno, sin el roce de la 4ta justa." },
  eolico:        { nombre: "Eólica (menor natural)",grados: [0, 2, 3, 5, 7, 8, 10], sabor: "El menor clásico, con la 6ta bemol que lo pone melancólico." },
  dorico:        { nombre: "Dórica",                grados: [0, 2, 3, 5, 7, 9, 10], sabor: "Menor con 6ta mayor. Más luminoso: Santana, funk, jazz modal." },
  frigio:        { nombre: "Frigia",                grados: [0, 1, 3, 5, 7, 8, 10], sabor: "Menor con b2. Sabor español y oscuro, muy tenso." },
  frigioDominante:{nombre: "Frigia dominante",      grados: [0, 1, 4, 5, 7, 8, 10], sabor: "La del flamenco y el metal oriental: b2 y 3ra mayor." },
  locrio:        { nombre: "Locria",                grados: [0, 1, 3, 5, 6, 8, 10], sabor: "La del m7b5. Inestable por definición, no tiene reposo." },
  menorArmonica: { nombre: "Menor armónica",        grados: [0, 2, 3, 5, 7, 8, 11], sabor: "Menor con sensible. El salto de 6ta a 7ma es su firma." },
  menorMelodica: { nombre: "Menor melódica",        grados: [0, 2, 3, 5, 7, 9, 11], sabor: "Menor con 6ta y 7ma mayores. Suena a jazz cuando sube." },
  alterada:      { nombre: "Alterada (súper locria)",grados: [0, 1, 3, 4, 6, 8, 10], sabor: "Todas las tensiones alteradas juntas. Máxima tirantez antes de resolver." },
  /* Las bebop son las del swing: la escala de siempre con UNA nota
     cromática de más, metida justo para que los tiempos fuertes caigan en
     notas del acorde cuando bajás corcheas. Esa nota extra no se aguanta
     nunca — se pasa por arriba, y de ahí el balanceo. */
  bebopDominante:{ nombre: "Bebop dominante (swing)", grados: [0, 2, 4, 5, 7, 9, 10, 11], sabor: "Mixolidia con la 7ma mayor de paso. Es EL sonido del swing sobre un dominante." },
  bebopMayor:    { nombre: "Bebop mayor (swing)",    grados: [0, 2, 4, 5, 7, 8, 9, 11], sabor: "Mayor con la b6 de paso. Swing sobre acordes de tónica mayor." },
  bebopMenor:    { nombre: "Bebop dórica (swing)",   grados: [0, 2, 3, 4, 5, 7, 9, 10], sabor: "Dórica con la 3ra mayor de paso. Swing sobre los menores del ii-V." },
  bluesMayor:    { nombre: "Blues mayor",            grados: [0, 2, 3, 4, 7, 9], sabor: "Pentatónica mayor + la b3 que roza. Suena dulce y sucia a la vez." },
  pentaMayor:    { nombre: "Pentatónica mayor",     grados: [0, 2, 4, 7, 9], sabor: "Cinco notas, ninguna choca. Es la red de seguridad." },
  pentaMenor:    { nombre: "Pentatónica menor",     grados: [0, 3, 5, 7, 10], sabor: "La del blues y el rock. Directa, sin notas incómodas." },
  blues:         { nombre: "Blues",                 grados: [0, 3, 5, 6, 7, 10], sabor: "Pentatónica menor + la b5 de paso. El quejido." },
  tonosEnteros:  { nombre: "Tonos enteros",         grados: [0, 2, 4, 6, 8, 10], sabor: "Todo a distancia de tono: no hay centro, flota." },
  disminuida:    { nombre: "Disminuida (T-S)",      grados: [0, 2, 3, 5, 6, 8, 9, 11], sabor: "Simétrica, para los acordes disminuidos. Suspenso." },
  disminuidaST:  { nombre: "Disminuida (S-T)",      grados: [0, 1, 3, 4, 6, 7, 9, 10], sabor: "La misma simetría arrancando por el semitono: es la de los dominantes con b9. Te da b9, #9, #11 y 13 sin salirte." },

  /* Pentatónicas japonesas: cada una es la escala "yo" o "in" de un modo
     distinto, todas de cinco notas. No tienen tercera clásica en varios
     casos — es parte del sabor, no falta nada. */
  hirajoshi:     { nombre: "Hirajoshi",             grados: [0, 2, 3, 7, 8], sabor: "Koto japonés: tiene 3ra menor pero salta directo a la b6, sin 4ta ni 7ma. Suena a jardín de piedras." },
  inSen:         { nombre: "In (In Sen)",           grados: [0, 1, 5, 7, 8], sabor: "Sin tercera: b2, 4ta, 5ta y b6. Es la más oscura de las japonesas, casi un lamento." },
  iwato:         { nombre: "Iwato",                 grados: [0, 1, 5, 6, 10], sabor: "La In con la 5ta bajada a b5. Muy inestable, ideal para algo inquietante y ceremonial." },
  kumoi:         { nombre: "Kumoi",                 grados: [0, 2, 3, 7, 9], sabor: "Como la Hirajoshi pero con 6ta en vez de b6: más dulce, menos tensa." },

  egipcia:       { nombre: "Egipcia (suspendida)",  grados: [0, 2, 5, 7, 10], sabor: "Pentatónica sin ninguna tercera: 2da, 4ta, 5ta y b7. Todo suena en suspenso, ni mayor ni menor — la escala del oud sobre una nota pedal." },

  bizantina:     { nombre: "Bizantina (doble armónica)", grados: [0, 1, 4, 5, 7, 8, 11], sabor: "b2 y b6 alrededor de una 3ra y 7ma mayores: dos saltos de tercera aumentada. Es el maqam Hijaz Kar y también la raga Bhairav de la India." },
  persa:         { nombre: "Persa",                 grados: [0, 1, 4, 5, 6, 8, 11], sabor: "Como la bizantina pero con la 5ta bajada: no hay quinta justa desde la raíz. Muy filosa — pensada para cuartos de tono que acá se aproximan en 12." },
  hungaraMenor:  { nombre: "Húngara menor (gitana)", grados: [0, 2, 3, 6, 7, 8, 11], sabor: "Menor armónica con la 4ta subida: dos saltos de tercera (b3 a #4, b6 a 7ma). El sonido de la música klezmer y gitana de Europa del este." },
  hungaraMayor:  { nombre: "Húngara mayor",         grados: [0, 3, 4, 6, 7, 9, 10], sabor: "Tiene la 2da subida (#2) Y la 3ra mayor al mismo tiempo, más la 4ta subida. Rarísima y colorida, poco pisada fuera de Europa del este." },

  enigmatica:    { nombre: "Enigmática",            grados: [0, 1, 4, 6, 8, 10, 11], sabor: "b2, 3ra mayor, tritono, quinta y sexta aumentadas, y 7ma mayor: no tiene quinta justa. Verdiana y rarísima, más un experimento armónico que una escala de uso diario." },
  napolitanaMenor:{ nombre: "Napolitana menor",     grados: [0, 1, 3, 5, 7, 8, 11], sabor: "Menor con la 2da bajada y la 7ma subida: b2 le da el color oscuro, la 7ma mayor le da tensión hacia la tónica." },
  napolitanaMayor:{ nombre: "Napolitana mayor",     grados: [0, 1, 3, 5, 7, 9, 11], sabor: "La napolitana menor con 6ta mayor en vez de b6: menos pesada, casi luminosa a pesar de la b2." },
};

/* Escalas agrupadas por el "sonido" que evocan más que por su función
   armónica clásica — mismo criterio honesto que en emociones.js: esto es
   una asociación cultural/de género musical, no una propiedad física del
   sonido. Sirve para explorar por oído, no como taxonomía académica. */
const SONIDOS_ESCALAS = {
  asiatico: ["hirajoshi", "inSen", "iwato", "kumoi"],
  egipcio: ["egipcia"],
  oriental: ["frigioDominante", "bizantina", "persa", "hungaraMenor"],
  exotico: ["hungaraMayor", "enigmatica", "napolitanaMenor", "napolitanaMayor"],
};

/* Qué escalas entran sobre qué acorde. El orden importa: la primera es la
   opción más segura, las de abajo son las que colorean más. */
function escalasParaAcorde(acorde) {
  if (!acorde) return [];
  const cal = acorde.calidad || "";
  const esDom = ["7", "9", "11", "13"].includes(cal);

  if (acorde.esDisminuido) return ["disminuida", "locrio"];
  if (acorde.esAumentado) return ["tonosEnteros", "lidioDominante"];
  if (cal === "m7b5" || cal === "ø" || cal === "ø7") return ["locrio", "menorMelodica"];
  if (esDom) return ["mixolidio", "bebopDominante", "pentaMenor", "blues", "bluesMayor", "lidioDominante", "alterada", "frigioDominante", "disminuidaST"];
  if (acorde.esMenor) return ["dorico", "bebopMenor", "pentaMenor", "eolico", "frigio", "menorArmonica", "menorMelodica", "blues"];
  if (acorde.esSus) return ["mixolidio", "dorico", "pentaMayor"];
  // mayores, maj7, 6, add9…
  return ["jonico", "bebopMayor", "pentaMayor", "bluesMayor", "lidio", "mixolidio"];
}

/* El papel de cada una de las 12 notas dentro de una escala, sobre un
   acorde concreto. Devuelve un mapa clase(0-11) -> papel. */
function papelesDeEscala(escalaId, acorde) {
  const escala = ESCALAS[escalaId];
  if (!escala || !acorde) return null;

  const raiz = INDICE_NOTA[acorde.raiz];
  if (raiz === undefined) return null;

  const enEscala = new Set(escala.grados.map((g) => (raiz + g) % 12));
  const delAcorde = new Set(
    (acorde.notas || []).map((n) => INDICE_NOTA[n]).filter((n) => n !== undefined)
  );

  const papeles = {};
  const tensiones = [];

  enEscala.forEach((clase) => {
    if (delAcorde.has(clase)) { papeles[clase] = "base"; return; }
    // una nota es tensa si roza por arriba a una nota del acorde
    const debajo = (clase + 11) % 12;
    if (delAcorde.has(debajo)) {
      papeles[clase] = "tension";
      tensiones.push({ tension: clase, resuelveEn: debajo });
    } else {
      papeles[clase] = "puente";
    }
  });

  // la nota del acorde donde cae cada tensión se marca como resolución
  tensiones.forEach((t) => { papeles[t.resuelveEn] = "resolucion"; });

  return { papeles, tensiones, enEscala, delAcorde, escala, raiz };
}

/* El texto que explica qué hacer con todo eso. Se arma con las notas
   reales del caso, no es un párrafo genérico. */
function explicacionDeEscala(escalaId, acorde, usarBemoles) {
  const info = papelesDeEscala(escalaId, acorde);
  if (!info) return null;
  const tabla = usarBemoles ? NOTAS_BEMOLES : NOTAS_SOSTENIDOS;
  const nombre = (c) => tabla[c];

  const porPapel = (papel) =>
    Object.keys(info.papeles)
      .filter((c) => info.papeles[c] === papel)
      .map(Number)
      .sort((a, b) => ((a - info.raiz + 12) % 12) - ((b - info.raiz + 12) % 12))
      .map(nombre);

  // las notas de resolución siguen siendo notas del acorde: se pintan
  // doradas por su otro papel, pero no dejan de ser tierra firme
  const base = porPapel("base").concat(porPapel("resolucion"));
  const puente = porPapel("puente");
  const tension = info.tensiones.map((t) => nombre(t.tension));

  const partes = [];
  partes.push(
    `Sobre <b>${acorde.raiz}${acorde.calidad || ""}</b> podés tocar la escala ` +
    `<b>${info.escala.nombre}</b>. ${info.escala.sabor}`
  );
  if (base.length) {
    partes.push(
      `Las <b class="p-base">notas del acorde</b> (${base.join(" · ")}) son tierra firme: ` +
      `caen bien en cualquier momento, y son donde conviene parar una frase.`
    );
  }
  if (puente.length) {
    partes.push(
      `Las <b class="p-puente">notas puente</b> (${puente.join(" · ")}) son el resto de la escala. ` +
      `Sirven para moverte entre las del acorde; de paso suenan bien, pero quedarte ahí deja la frase colgada.`
    );
  }
  if (info.tensiones.length) {
    const detalle = info.tensiones
      .map((t) => `<b class="p-tension">${nombre(t.tension)}</b> baja medio tono a <b class="p-resolucion">${nombre(t.resuelveEn)}</b>`)
      .join(", y ");
    partes.push(
      `Ojo con ${tension.map((n) => `<b class="p-tension">${n}</b>`).join(" y ")}: ` +
      `${tension.length > 1 ? "están" : "está"} a medio tono de una nota del acorde, así que ` +
      `${tension.length > 1 ? "chocan" : "choca"}. No ${tension.length > 1 ? "están" : "está"} mal — ` +
      `${tension.length > 1 ? "son" : "es"} la tensión de la escala, y suena buenísim${tension.length > 1 ? "as" : "a"} ` +
      `si la usás de paso o la dejás sonar un momento y después resolvés: ${detalle}. ` +
      `Lo que no conviene es terminar la frase ahí. Las notas ` +
      `<b class="p-resolucion">doradas</b> son justamente ese destino — también son del acorde, ` +
      `así que caer ahí siempre cierra bien.`
    );
  } else {
    partes.push(
      `Esta escala no tiene ninguna nota que choque con el acorde: podés pisar cualquiera de las ` +
      `${info.enEscala.size} y aguantarla el tiempo que quieras. Por eso es la más segura para arrancar.`
    );
  }
  return partes.join(" ");
}
