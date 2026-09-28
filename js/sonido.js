/* ============ The Essence of Sound — que el sitio suene, literal ============
   Todo lo demás es visual: mástil, colores, cifrados. Esto es lo único
   que produce sonido de verdad, con samples reales (soundfont-player +
   los soundfonts de midi-js-soundfonts, cargados por CDN como <script>,
   no por fetch — así no hay problema de CORS ni corriendo desde file://).

   Aviso honesto: son samples MIDI genéricos, no una guitarra grabada por
   un guitarrista de verdad — alcanza para "entender las notas" (que es
   el pedido), no reemplaza escuchar una grabación real. */

/* Nombres de instrumento General MIDI que entiende soundfont-player, uno
   por cada pestaña del modal "Cómo tocar". El primero de cada lista es
   el que se usa por default. */
const INSTRUMENTOS_SONIDO = {
  guitarra: [
    { id: "acoustic_guitar_nylon", nombre: "Acústica (nylon)" },
    { id: "acoustic_guitar_steel", nombre: "Acústica (steel)" },
    { id: "electric_guitar_clean", nombre: "Eléctrica limpia" },
    { id: "distortion_guitar", nombre: "Eléctrica distorsionada" },
  ],
  piano: [
    { id: "acoustic_grand_piano", nombre: "Piano de cola" },
    { id: "electric_piano_1", nombre: "Piano eléctrico" },
  ],
  bajo: [
    { id: "electric_bass_finger", nombre: "Bajo eléctrico (dedos)" },
    { id: "electric_bass_pick", nombre: "Bajo eléctrico (púa)" },
    { id: "acoustic_bass", nombre: "Bajo acústico" },
    { id: "fretless_bass", nombre: "Bajo fretless" },
  ],
};

const estadoSonido = {
  // qué patch eligió el usuario para cada familia — se acuerda entre
  // aperturas del modal aunque cambie de acorde o de pestaña
  elegido: {
    guitarra: INSTRUMENTOS_SONIDO.guitarra[0].id,
    piano: INSTRUMENTOS_SONIDO.piano[0].id,
    bajo: INSTRUMENTOS_SONIDO.bajo[0].id,
  },
  audioCtx: null,
  cache: {},   // gmId -> Promise<player>
  sonando: false,
};

/* El AudioContext se crea recién en el primer click (política de
   autoplay de los navegadores: no se puede arrancar audio sin un gesto
   del usuario antes). */
function contextoAudioSonido() {
  if (!estadoSonido.audioCtx) {
    const AC = window.AudioContext || window.webkitAudioContext;
    estadoSonido.audioCtx = new AC();
  }
  if (estadoSonido.audioCtx.state === "suspended") estadoSonido.audioCtx.resume();
  return estadoSonido.audioCtx;
}

function instrumentoCargado(gmId) {
  if (!estadoSonido.cache[gmId]) {
    const ctx = contextoAudioSonido();
    estadoSonido.cache[gmId] = Soundfont.instrument(ctx, gmId);
  }
  return estadoSonido.cache[gmId];
}

/* Reparte las notas de un acorde en octavas ascendentes a partir de una
   base, para que no queden todas amontonadas en la misma octava (eso
   sonaría a clúster, no a acorde). Cada vez que la siguiente nota "da la
   vuelta" (su clase de altura es menor o igual a la anterior), sube una
   octava. */
function notasConOctava(notas, octavaBase) {
  let anterior = -1;
  return notas.map((n) => {
    const clase = INDICE_NOTA[n];
    if (clase === undefined) return null;
    if (clase <= anterior) octavaBase++;
    anterior = clase;
    return n.replace("♯", "#") + octavaBase;
  }).filter(Boolean);
}

/* Toca un acorde entero (todas las notas juntas). familia es
   "guitarra"/"piano"/"bajo", para saber qué patch y qué octava de base
   usar (el bajo una octava más abajo, así suena a bajo de verdad). */
async function reproducirAcorde(notas, familia) {
  if (!notas || !notas.length) return;
  const gmId = estadoSonido.elegido[familia] || estadoSonido.elegido.guitarra;
  const octavaBase = familia === "bajo" ? 2 : 3;
  const conOctava = notasConOctava(notas, octavaBase);
  const player = await instrumentoCargado(gmId);
  const ctx = contextoAudioSonido();
  const ahora = ctx.currentTime;
  conOctava.forEach((n) => player.play(n, ahora, { duration: 1.8, gain: 2 }));
}

/* Toca varios acordes uno atrás del otro — la "progresión" completa,
   no un acorde suelto. */
async function reproducirProgresion(pasos, familia) {
  if (!pasos || !pasos.length || estadoSonido.sonando) return;
  estadoSonido.sonando = true;
  const gmId = estadoSonido.elegido[familia] || estadoSonido.elegido.guitarra;
  const octavaBase = familia === "bajo" ? 2 : 3;
  const player = await instrumentoCargado(gmId);
  const ctx = contextoAudioSonido();
  const duracionPaso = 0.85;
  const ahora = ctx.currentTime;
  pasos.forEach((notas, i) => {
    const conOctava = notasConOctava(notas, octavaBase);
    const cuando = ahora + i * duracionPaso;
    conOctava.forEach((n) => player.play(n, cuando, { duration: duracionPaso * 0.92, gain: 2 }));
  });
  const totalMs = pasos.length * duracionPaso * 1000;
  setTimeout(() => { estadoSonido.sonando = false; }, totalMs);
}

/* Arma el <select> de patches para una familia de instrumento y lo deja
   sincronizado con estadoSonido.elegido. */
function armarSelectorSonido(sel, familia) {
  const opciones = INSTRUMENTOS_SONIDO[familia] || [];
  sel.innerHTML = opciones.map((o) => `<option value="${o.id}">${tSon(o.id, o.nombre)}</option>`).join("");
  sel.value = estadoSonido.elegido[familia];
  sel.onchange = () => { estadoSonido.elegido[familia] = sel.value; };
}
