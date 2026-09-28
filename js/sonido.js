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

/* Reparte notas (nombres, sin octava) en alturas MIDI ascendentes a
   partir de una nota base, para que no queden amontonadas en la misma
   octava (eso sonaría a clúster, no a acorde). Se usa donde no hay una
   digitación real de mástil de la cual sacar la altura exacta (piano,
   o la progresión de la sección Emociones, que es abstracta). */
function notasMidiDesdeNombres(notas, midiBase) {
  let anterior = -1;
  return notas.map((n) => {
    const clase = INDICE_NOTA[n];
    if (clase === undefined) return null;
    let m = midiBase + clase;
    while (m <= anterior) m += 12;
    anterior = m;
    return m;
  }).filter((m) => m !== null);
}

/* La altura MIDI real de cada cuerda sonando en la posición del mástil
   que está mostrando el modal ahora mismo — ésta es la única forma de
   que "Escuchar" respete de verdad la posición (traste base) Y la
   afinación elegida: ambas ya están adentro de `dig.trastes` y
   `cuerdas` respectivamente, sólo hay que sumarlas. */
function notasMidiDePosicion(dig, cuerdas) {
  if (!dig || !cuerdas) return [];
  return cuerdas
    .map((cuerda, i) => (dig.trastes[i] == null ? null : cuerda + dig.trastes[i]))
    .filter((m) => m !== null);
}

/* Qué está mostrando el modal instrumento ahora mismo, traducido a
   notas MIDI reales: para guitarra/bajo, la posición y afinación
   puestas en el mástil; para piano (no tiene mástil ni afinación) las
   clases del acorde repartidas en octavas a partir de C4. */
function notasMidiDelInstrumentoActivo() {
  if (!instrumento.diagramas) return [];
  const inst = instrumento.activo;
  if (inst === "piano") {
    const clases = instrumento.diagramas.info ? instrumento.diagramas.info.clases : [];
    return notasMidiDesdeNombres(clases.map((c) => NOTAS_SOSTENIDOS[c]), 60);
  }
  const lista = instrumento.diagramas[inst];
  const dig = lista && lista[instrumento.posicion[inst] || 0];
  return notasMidiDePosicion(dig, cuerdasDe(inst));
}

/* Toca un acorde entero (todas las notas MIDI juntas). familia es
   "guitarra"/"piano"/"bajo", para saber qué patch usar. */
async function reproducirAcorde(notasMidi, familia) {
  if (!notasMidi || !notasMidi.length) return;
  const gmId = estadoSonido.elegido[familia] || estadoSonido.elegido.guitarra;
  const player = await instrumentoCargado(gmId);
  const ctx = contextoAudioSonido();
  const ahora = ctx.currentTime;
  notasMidi.forEach((n) => player.play(n, ahora, { duration: 1.8, gain: 2 }));
}

/* Toca notas UNA POR VEZ, en orden — para una escala, no un acorde
   (nada de simultáneo, esto es una línea melódica). */
async function reproducirSecuencia(notasMidi, familia, duracionNota) {
  if (!notasMidi || !notasMidi.length || estadoSonido.sonando) return;
  estadoSonido.sonando = true;
  const paso = duracionNota || 0.3;
  const gmId = estadoSonido.elegido[familia] || estadoSonido.elegido.guitarra;
  const player = await instrumentoCargado(gmId);
  const ctx = contextoAudioSonido();
  const ahora = ctx.currentTime;
  notasMidi.forEach((n, i) => player.play(n, ahora + i * paso, { duration: paso * 0.9, gain: 2 }));
  const totalMs = notasMidi.length * paso * 1000;
  setTimeout(() => { estadoSonido.sonando = false; }, totalMs);
}

/* Toca varios acordes uno atrás del otro — la "progresión" completa,
   no un acorde suelto. Cada paso es un array de notas MIDI. */
async function reproducirProgresion(pasos, familia, duracionPaso) {
  if (!pasos || !pasos.length || estadoSonido.sonando) return;
  estadoSonido.sonando = true;
  duracionPaso = duracionPaso || 0.85;
  const gmId = estadoSonido.elegido[familia] || estadoSonido.elegido.guitarra;
  const player = await instrumentoCargado(gmId);
  const ctx = contextoAudioSonido();
  const ahora = ctx.currentTime;
  pasos.forEach((notasMidi, i) => {
    const cuando = ahora + i * duracionPaso;
    notasMidi.forEach((n) => player.play(n, cuando, { duration: duracionPaso * 0.92, gain: 2 }));
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
