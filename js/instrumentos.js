/* ============ The Essence of Sound — cómo se toca cada acorde ============
   Los diagramas no salen de una tabla de posiciones escrita a mano: se
   calculan desde las notas del acorde. Para guitarra y bajo se buscan
   digitaciones reales sobre el mástil (que la mano llegue, que la nota
   grave sea la fundamental, que no falten las notas que definen el
   acorde); para piano se marcan las teclas directamente.

   Si para algún acorde raro no aparece ninguna digitación cómoda, no se
   dibuja nada y se avisa — mejor eso que mostrar una posición impo-
   sible de tocar. */

/* Cuerdas al aire, en notas MIDI, de la 6ta a la 1ra. */
const AFINACION_GUITARRA = [40, 45, 50, 55, 59, 64]; // E2 A2 D3 G3 B3 E4
const AFINACION_BAJO = [28, 33, 38, 43];             // E1 A1 D2 G2

/* Afinaciones de guitarra. En las "drop" baja sólo la sexta un tono
   respecto de la estándar ya transportada: Drop D es Mi estándar con la
   sexta en Re, Drop C es todo un tono abajo con la sexta en Do, y así. */
const AFINACIONES_GUITARRA = {
  estandar:   { nombre: "Mi estándar (E)",       cuerdas: [40, 45, 50, 55, 59, 64] },
  ebEstandar: { nombre: "Mi bemol (Eb)",         cuerdas: [39, 44, 49, 54, 58, 63] },
  dEstandar:  { nombre: "Re estándar (D)",       cuerdas: [38, 43, 48, 53, 57, 62] },
  dropD:      { nombre: "Drop D",                cuerdas: [38, 45, 50, 55, 59, 64] },
  dropDb:     { nombre: "Drop Db",               cuerdas: [37, 44, 49, 54, 58, 63] },
  dropC:      { nombre: "Drop C",                cuerdas: [36, 43, 48, 53, 57, 62] },
  dropB:      { nombre: "Drop B",                cuerdas: [35, 42, 47, 52, 56, 61] },
  dropA:      { nombre: "Drop A",                cuerdas: [33, 40, 45, 50, 54, 59] },
  dadgad:     { nombre: "DADGAD",                cuerdas: [38, 45, 50, 55, 57, 62] },
  abiertoG:   { nombre: "Sol abierto (DGDGBD)",  cuerdas: [38, 43, 50, 55, 59, 62] },
};

const AFINACIONES_BAJO = {
  estandar: { nombre: "Mi estándar (E)", cuerdas: [28, 33, 38, 43] },
  ebBajo:   { nombre: "Mi bemol (Eb)",   cuerdas: [27, 32, 37, 42] },
  dropD:    { nombre: "Drop D",          cuerdas: [26, 33, 38, 43] },
  dropC:    { nombre: "Drop C",          cuerdas: [24, 31, 36, 41] },
  bGrave:   { nombre: "5 cuerdas (B)",   cuerdas: [23, 28, 33, 38, 43] },
};

/* La afinación elegida. Arranca en estándar. */
const afinacionActual = { guitarra: "estandar", bajo: "estandar" };

function cuerdasDe(instrumento) {
  const reg = instrumento === "bajo" ? AFINACIONES_BAJO : AFINACIONES_GUITARRA;
  const a = reg[afinacionActual[instrumento]] || reg.estandar;
  return a.cuerdas;
}

/* Los nombres de las cuerdas al aire salen de la afinación misma, así que
   en Drop C dice C G C F A D y no el E A D G B E de siempre. */
function nombresCuerdasDe(instrumento, usarBemoles) {
  const tabla = usarBemoles ? NOTAS_BEMOLES : NOTAS_SOSTENIDOS;
  return cuerdasDe(instrumento).map((m) => tabla[m % 12]);
}

/* Grado del acorde, no nombre de nota: "1" es la fundamental. (Decía "F"
   de fundamental y se confundía con la nota Fa.) */
const NOMBRE_INTERVALO = {
  0: "1", 1: "b9", 2: "9", 3: "b3", 4: "3", 5: "11",
  6: "b5", 7: "5", 8: "#5", 9: "6", 10: "b7", 11: "7",
};

function clasesDelAcorde(acorde) {
  if (!acorde || !acorde.notas) return null;
  const clases = [];
  acorde.notas.forEach((n) => {
    const s = INDICE_NOTA[n];
    if (s !== undefined && !clases.includes(s)) clases.push(s);
  });
  if (!clases.length) return null;
  const raiz = INDICE_NOTA[acorde.raiz];
  return { clases, set: new Set(clases), raiz };
}

/* Las notas que no se pueden dejar afuera: la fundamental, la tercera (o
   la cuarta si es sus) y la séptima si la hay. La quinta sí es descartable
   — es lo primero que sacan los guitarristas. */
function clasesEsenciales(info) {
  const { clases, raiz } = info;
  return clases.filter((c) => {
    const intervalo = (c - raiz + 12) % 12;
    return intervalo !== 7; // todo menos la quinta justa
  });
}

/* ---------------- un patrón para tocar una escala completa ---------------- */
/* A diferencia de un acorde (que se toca todo junto, en una zona chica
   del mástil), una escala se recorre: por eso acá no buscamos "la mejor"
   digitación sino UNA caja de un puñado de trastes que contenga la
   escala entera, cuerda por cuerda de la más grave a la más aguda — el
   mismo criterio que cualquier patrón de escala de guitarra ("cajas" de
   pentatónica, etc). Sirve tanto para dibujar la tablatura como para
   tocarla: los eventos ya vienen en el orden en que se tocarían. */
function cajaEscalaGuitarra(gradosSemitonos, raizSemitono, cuerdas, span, trasteBaseFijo) {
  span = span || 4;
  const claseSet = new Set(gradosSemitonos.map((g) => (raizSemitono + g) % 12));

  // si no se pide una posición puntual, la caja arranca donde la
  // fundamental cae en la cuerda más grave (preferimos posición abierta)
  let trasteBase = trasteBaseFijo;
  if (trasteBase === undefined) {
    trasteBase = 0;
    for (let f = 0; f <= 11; f++) {
      if ((cuerdas[0] + f) % 12 === raizSemitono) { trasteBase = Math.max(0, f - 1); break; }
    }
  }

  const notas = [];
  cuerdas.forEach((cuerdaMidi, i) => {
    for (let f = trasteBase; f <= trasteBase + span; f++) {
      if (f === 0 && trasteBase > 0) continue; // la caja no incluye la cuerda al aire si no arranca ahí
      const clase = (cuerdaMidi + f) % 12;
      if (claseSet.has(clase)) notas.push({ cuerda: i, traste: f, clase, midi: cuerdaMidi + f });
    }
  });
  return notas;
}

/* Varias cajas a lo largo de todo el mástil — una por cada nota de la
   escala que cae en la cuerda más grave, igual que los sistemas de
   "posiciones" que ya conoce cualquier guitarrista (las 5 cajas de la
   pentatónica, y lo mismo extendido a cualquier escala). */
function posicionesEscalaGuitarra(gradosSemitonos, raizSemitono, cuerdas, span) {
  span = span || 4;
  const clasesEscala = new Set(gradosSemitonos.map((g) => (raizSemitono + g) % 12));
  const vistas = new Set();
  const posiciones = [];
  for (let f = 0; f <= 11; f++) {
    const clase = (cuerdas[0] + f) % 12;
    if (!clasesEscala.has(clase)) continue;
    const trasteBase = Math.max(0, f - 1);
    if (vistas.has(trasteBase)) continue;
    vistas.add(trasteBase);
    posiciones.push({ trasteBase, notas: cajaEscalaGuitarra(gradosSemitonos, raizSemitono, cuerdas, span, trasteBase) });
  }
  return posiciones.sort((a, b) => a.trasteBase - b.trasteBase);
}

/* ---------------- digitaciones de guitarra / bajo ---------------- */
/* Todas las digitaciones razonables, una por zona del mástil: la abierta,
   la de la quinta, la de la octava… Así se puede tocar el mismo acorde
   donde caiga mejor la mano o donde esté la melodía. */
function buscarDigitaciones(info, afinacion, opciones) {
  const porZona = new Map();
  const maxTraste = (opciones && opciones.maxTraste) || 12;

  for (let desde = 0; desde <= maxTraste; desde++) {
    const d = buscarDigitacion(info, afinacion, { ...opciones, minBase: desde, maxTraste });
    if (!d) continue;
    // la firma evita repetir la misma posición encontrada desde otra ventana
    const firma = d.trastes.join(",");
    if (!porZona.has(firma)) porZona.set(firma, d);
  }

  const lista = [...porZona.values()].sort((a, b) => a.trasteBase - b.trasteBase);
  // una sola por zona, y no más de cinco: pasada esa cantidad son variantes
  // de lo mismo cada vez más arriba, no posiciones nuevas
  const vistas = new Set();
  return lista
    .filter((d) => {
      if (vistas.has(d.trasteBase)) return false;
      vistas.add(d.trasteBase);
      return true;
    })
    .slice(0, 5);
}

function buscarDigitacion(info, afinacion, opciones) {
  const { set, raiz } = info;
  const span = opciones.span || 4;
  const maxTraste = opciones.maxTraste || 12;
  const minSonando = opciones.minSonando || 4;
  const minBase = opciones.minBase || 0;
  const esenciales = clasesEsenciales(info);

  let mejor = null;

  for (let base = minBase; base <= maxTraste; base++) {
    // por cuerda: al aire (si sirve), o los trastes de la ventana que sean del acorde
    const porCuerda = afinacion.map((cuerda) => {
      const ops = [null]; // null = cuerda muteada
      if (set.has(cuerda % 12)) ops.push(0);
      for (let f = Math.max(base, 1); f <= base + span; f++) {
        if (set.has((cuerda + f) % 12)) ops.push(f);
      }
      return ops;
    });

    const combo = new Array(afinacion.length).fill(null);
    const recorrer = (i) => {
      if (i === afinacion.length) {
        const evaluado = evaluarDigitacion(combo, afinacion, info, esenciales, minSonando, span);
        if (evaluado && (!mejor || evaluado.puntaje > mejor.puntaje)) {
          mejor = { ...evaluado, trastes: combo.slice() };
        }
        return;
      }
      for (const op of porCuerda[i]) {
        combo[i] = op;
        recorrer(i + 1);
      }
      combo[i] = null;
    };
    recorrer(0);
  }

  if (!mejor) return null;
  const sonando = mejor.trastes.filter((f) => f !== null);
  const pisados = sonando.filter((f) => f > 0);
  return {
    trastes: mejor.trastes,
    trasteBase: pisados.length ? Math.min(...pisados) : 0,
    raiz,
  };
}

function evaluarDigitacion(trastes, afinacion, info, esenciales, minSonando, span) {
  const notas = [];
  trastes.forEach((f, i) => {
    if (f === null) return;
    notas.push({ cuerda: i, midi: afinacion[i] + f, traste: f });
  });
  if (notas.length < minSonando) return null;

  // no dejamos cuerdas muteadas en el medio: se apagan sólo las graves
  const indices = notas.map((n) => n.cuerda);
  const min = Math.min(...indices), max = Math.max(...indices);
  if (max - min + 1 !== notas.length) return null;

  const pisados = notas.filter((n) => n.traste > 0).map((n) => n.traste);
  if (pisados.length) {
    const ancho = Math.max(...pisados) - Math.min(...pisados);
    if (ancho > span - 1) return null;
    // demasiadas cuerdas distintas en el mismo traste alto = cejilla imposible
  }

  const clasesSonando = new Set(notas.map((n) => n.midi % 12));
  for (const e of esenciales) if (!clasesSonando.has(e)) return null;

  // la nota más grave: idealmente la fundamental
  const grave = notas.reduce((a, b) => (a.midi <= b.midi ? a : b));
  const graveEsRaiz = grave.midi % 12 === info.raiz;

  const alAire = notas.filter((n) => n.traste === 0).length;
  const trasteMin = pisados.length ? Math.min(...pisados) : 0;
  const ancho = pisados.length ? Math.max(...pisados) - trasteMin : 0;

  /* El peso de cada cosa importa más de lo que parece: si se premia
     demasiado "que suenen muchas cuerdas", el buscador devuelve acordes
     válidos en teoría pero que nadie toca (un Do en el traste 8 en vez del
     Do abierto de toda la vida). La posición baja y las cuerdas al aire
     son las que llevan el resultado hacia las digitaciones de verdad. */
  let puntaje = 0;
  puntaje += notas.length * 6;          // que suenen varias cuerdas
  puntaje += graveEsRaiz ? 30 : 0;      // fundamental en el bajo
  puntaje += clasesSonando.size * 6;    // que no falte ninguna nota del acorde
  puntaje -= trasteMin * 4;             // cuanto más cerca de la cejuela, mejor
  puntaje -= ancho * 3;                 // que la mano no tenga que abrirse
  puntaje -= pisados.length * 0.5;      // menos dedos, mejor

  /* Las cuerdas al aire son gratis abajo, pero arriba del cuarto traste
     mezclarlas con notas pisadas suena a otra cosa y la mano queda lejos:
     ahí lo que se toca son formas cerradas (cejilla). Sin esta penalización
     el buscador devolvía cosas como 8-7-10-0-8-0 para un Do. */
  const posicionAlta = trasteMin >= 4;
  puntaje += posicionAlta ? -alAire * 7 : alAire * 3;

  return { puntaje };
}

/* ---------------- dibujo: mástil ----------------
   Horizontal y entero, de la cejuela al traste 12: así se ve de una dónde
   cae la posición y cómo se corre la misma forma al transportarla. Las
   cuerdas van como en una tablatura — la primera (aguda) arriba, la sexta
   abajo.

   Además de la digitación elegida, se marcan tenues TODAS las notas del
   acorde a lo largo del mástil: son las que tenés disponibles si querés
   armar la forma en otro lado. */
const TRASTES_VISIBLES = 12;
const MARCAS_MASTIL = [3, 5, 7, 9];

/* Si el mismo traste (que no sea al aire) aparece en tres cuerdas o más,
   es cejilla — un dedo cruzado, no varios dedos sueltos. Devuelve el
   traste y qué cuerdas cruza, o null si esta digitación no tiene. */
function detectarCejilla(trastes) {
  const porTraste = new Map();
  trastes.forEach((f, c) => {
    if (f === null || f === 0) return;
    if (!porTraste.has(f)) porTraste.set(f, []);
    porTraste.get(f).push(c);
  });
  let mejor = null;
  porTraste.forEach((cuerdas, traste) => {
    if (cuerdas.length >= 3 && (!mejor || cuerdas.length > mejor.cuerdas.length)) {
      mejor = { traste, cuerdas };
    }
  });
  return mejor;
}

function svgMastil(digitacion, afinacion, info, opts) {
  const cuerdas = afinacion.length;
  const x0 = 52, yTop = 20;
  const dx = 30, dy = 21;
  const ancho = x0 + TRASTES_VISIBLES * dx + 14;
  const altoCuerdas = (cuerdas - 1) * dy;
  const alto = yTop + altoCuerdas + 30;

  const yDeCuerda = (c) => yTop + (cuerdas - 1 - c) * dy; // la aguda arriba
  const xDeTraste = (f) => (f === 0 ? x0 - 15 : x0 + (f - 0.5) * dx);
  const nombreDe = (clase) => (opts.bemoles ? NOTAS_BEMOLES : NOTAS_SOSTENIDOS)[clase];
  const gradoDe = (clase) => NOMBRE_INTERVALO[(clase - info.raiz + 12) % 12] || "";

  const partes = [];

  // marcas de posición del mástil (los puntitos de la madera)
  MARCAS_MASTIL.forEach((f) => {
    if (f > TRASTES_VISIBLES) return;
    partes.push(`<circle cx="${xDeTraste(f)}" cy="${yTop + altoCuerdas / 2}" r="3.6" class="mast-marca-pos"/>`);
  });
  if (TRASTES_VISIBLES >= 12) {
    const x12 = xDeTraste(12);
    partes.push(`<circle cx="${x12}" cy="${yTop + altoCuerdas * 0.25}" r="3.6" class="mast-marca-pos"/>`);
    partes.push(`<circle cx="${x12}" cy="${yTop + altoCuerdas * 0.75}" r="3.6" class="mast-marca-pos"/>`);
  }

  // trastes y cejuela
  for (let f = 0; f <= TRASTES_VISIBLES; f++) {
    const x = x0 + f * dx;
    const clase = f === 0 ? "mast-cejuela-linea" : "mast-traste";
    partes.push(`<line x1="${x}" y1="${yTop}" x2="${x}" y2="${yTop + altoCuerdas}" class="${clase}"/>`);
  }
  // cuerdas
  for (let c = 0; c < cuerdas; c++) {
    const y = yDeCuerda(c);
    partes.push(`<line x1="${x0}" y1="${y}" x2="${x0 + TRASTES_VISIBLES * dx}" y2="${y}" class="mast-cuerda"/>`);
    partes.push(`<text x="12" y="${y + 3.2}" class="mast-cuerda-nombre">${(opts.nombresCuerdas || [])[c] || ""}</text>`);
  }
  // números de traste
  for (let f = 1; f <= TRASTES_VISIBLES; f++) {
    partes.push(`<text x="${xDeTraste(f)}" y="${yTop + altoCuerdas + 17}" class="mast-num">${f}</text>`);
  }

  /* Con una escala elegida el mástil deja de mostrar sólo el acorde y
     pinta la escala entera, cada nota con el color de su papel: base,
     puente, tensión o resolución. Si además viene una posición activa
     (posicionActiva: un Set de "cuerda-traste"), las notas que no son de
     esa caja se atenúan — así se ve en qué zona del mástil estás parado
     sin perder la vista completa de la escala. */
  const papeles = opts.papeles || null;
  const posicionActiva = opts.posicionActiva || null;

  for (let c = 0; c < cuerdas; c++) {
    for (let f = 0; f <= TRASTES_VISIBLES; f++) {
      const clase = (afinacion[c] + f) % 12;
      if (digitacion && digitacion.trastes[c] === f) continue; // esa la dibuja la digitación

      if (papeles) {
        const papel = papeles[clase];
        if (!papel) continue;
        const esRaiz = clase === info.raiz;
        const enPosicion = !posicionActiva || posicionActiva.has(`${c}-${f}`);
        partes.push(
          `<circle cx="${xDeTraste(f)}" cy="${yDeCuerda(c)}" r="${esRaiz ? 8 : 7}" data-clase="${clase}" class="mast-grado p-${papel}${esRaiz ? " es-raiz" : ""}${enPosicion ? "" : " fuera-posicion"}"/>`
        );
        partes.push(
          `<text x="${xDeTraste(f)}" y="${yDeCuerda(c) + 2.6}" class="mast-grado-texto${enPosicion ? "" : " fuera-posicion"}">${opts.mostrar === "grados" ? gradoDe(clase) : nombreDe(clase)}</text>`
        );
      } else {
        if (!info.set.has(clase)) continue;
        partes.push(`<circle cx="${xDeTraste(f)}" cy="${yDeCuerda(c)}" r="5" class="mast-disponible${clase === info.raiz ? " es-raiz" : ""}"/>`);
      }
    }
  }

  // la digitación elegida, encima de todo. Si el mismo traste se repite
  // en tres cuerdas o más es cejilla: un dedo cruzado, no tres dedos
  // separados — así que se dibuja como una sola cápsula en vez de un
  // punto por cuerda, que es lo que hacía difícil identificarla de un
  // vistazo.
  if (digitacion) {
    const cejilla = detectarCejilla(digitacion.trastes);
    if (cejilla) {
      const ys = cejilla.cuerdas.map(yDeCuerda);
      const yMin = Math.min(...ys), yMax = Math.max(...ys);
      const x = xDeTraste(cejilla.traste);
      const tieneRaiz = cejilla.cuerdas.some((c) => (afinacion[c] + cejilla.traste) % 12 === info.raiz);
      partes.push(
        `<rect x="${x - 9.5}" y="${yMin - 9.5}" width="19" height="${yMax - yMin + 19}" rx="9.5" class="mast-cejilla${tieneRaiz ? " es-raiz" : ""}"/>`
      );
    }
    digitacion.trastes.forEach((f, c) => {
      const y = yDeCuerda(c);
      if (f === null) {
        partes.push(`<text x="${x0 - 15}" y="${y + 3.4}" class="mast-muda">×</text>`);
        return;
      }
      const clase = (afinacion[c] + f) % 12;
      const esRaiz = clase === info.raiz;
      const dentro = opts.mostrar === "grados" ? gradoDe(clase) : nombreDe(clase);
      const enCejilla = cejilla && cejilla.traste === f && cejilla.cuerdas.includes(c);
      if (!enCejilla) {
        partes.push(`<circle cx="${xDeTraste(f)}" cy="${y}" r="9.5" class="mast-dedo${esRaiz ? " es-raiz" : ""}"/>`);
      }
      partes.push(`<text x="${xDeTraste(f)}" y="${y + 3.2}" class="mast-dedo-texto${enCejilla ? " en-cejilla" : ""}">${dentro}</text>`);
    });
  }

  return `<svg class="diag-svg diag-mastil" viewBox="0 0 ${ancho} ${alto}" role="img" aria-label="${opts.alt || ""}">${partes.join("")}</svg>`;
}

/* ---------------- dibujo: piano ---------------- */
const PATRON_BLANCAS = [0, 2, 4, 5, 7, 9, 11];
const PATRON_NEGRAS = { 1: 0, 3: 1, 6: 3, 8: 4, 10: 5 }; // clase -> índice de blanca a su izquierda

function svgPiano(info, escalaInfo) {
  const octavas = 2;
  const blancasPorOctava = 7;
  const totalBlancas = octavas * blancasPorOctava;
  const wB = 22, hB = 92, wN = 13, hN = 57;
  const ancho = totalBlancas * wB + 2;
  const alto = hB + 22;

  const partes = [];
  // con una escala elegida se marcan sus notas con el color de su papel;
  // sin escala, sólo las del acorde
  const papeles = escalaInfo ? escalaInfo.papeles : null;
  const marcada = (clase) => (papeles ? !!papeles[clase] : info.set.has(clase));
  const esRaiz = (clase) => clase === info.raiz;
  const papelDe = (clase) => (papeles && papeles[clase] ? ` p-${papeles[clase]}` : "");

  for (let i = 0; i < totalBlancas; i++) {
    const clase = PATRON_BLANCAS[i % blancasPorOctava];
    const x = 1 + i * wB;
    const cls = marcada(clase)
      ? (esRaiz(clase) ? "tecla blanca activa raiz" : "tecla blanca activa") + papelDe(clase)
      : "tecla blanca";
    partes.push(`<rect x="${x}" y="10" width="${wB}" height="${hB}" rx="3" class="${cls}"/>`);
    if (marcada(clase)) {
      const nombre = NOTAS_BEMOLES[clase];
      partes.push(`<text x="${x + wB / 2}" y="${10 + hB - 9}" class="tecla-nombre">${nombre}</text>`);
    }
  }

  for (let o = 0; o < octavas; o++) {
    Object.entries(PATRON_NEGRAS).forEach(([claseStr, blancaIdx]) => {
      const clase = Number(claseStr);
      const x = 1 + (o * blancasPorOctava + Number(blancaIdx)) * wB + wB - wN / 2;
      const cls = marcada(clase)
        ? (esRaiz(clase) ? "tecla negra activa raiz" : "tecla negra activa") + papelDe(clase)
        : "tecla negra";
      partes.push(`<rect x="${x}" y="10" width="${wN}" height="${hN}" rx="2" class="${cls}"/>`);
    });
  }

  return `<svg class="diag-svg diag-piano" viewBox="0 0 ${ancho} ${alto}" role="img" aria-label="${t("modalInstrumento.tecladoAlt")}">${partes.join("")}</svg>`;
}

/* ---------------- entrada pública ---------------- */
/* Devuelve, para un cifrado, las digitaciones disponibles en cada zona del
   mástil (guitarra y bajo) más las teclas del piano. El dibujo concreto se
   pide después con dibujarPosicion(), según la posición y el modo de
   etiqueta que esté eligiendo el usuario. */
function diagramasDeAcorde(cifrado) {
  const acorde = spellChord(cifrado);
  const info = clasesDelAcorde(acorde);
  if (!info) return null;

  const bemoles = acorde.notas.some((n) => n.includes("b"));

  return {
    cifrado,
    acorde,
    notas: acorde.notas.join(" "),
    bemoles,
    info,
    // las digitaciones dependen de la afinación elegida, así que se buscan
    // acá con las cuerdas que estén puestas en ese momento
    guitarra: buscarDigitaciones(info, cuerdasDe("guitarra"), { span: 4, minSonando: 4 }),
    bajo: buscarDigitaciones(info, cuerdasDe("bajo"), { span: 4, minSonando: 3 }),
    piano: svgPiano(info),
  };
}

/* Dibuja una de las posiciones encontradas. Con `escalaId` el mástil
   además pinta la escala entera detrás de la digitación. */
function dibujarPosicion(diagramas, instrumento, indice, mostrar, escalaId) {
  if (instrumento === "piano") {
    return escalaId
      ? svgPiano(diagramas.info, papelesDeEscala(escalaId, diagramas.acorde))
      : diagramas.piano;
  }
  const lista = diagramas[instrumento] || [];
  const dig = lista[Math.min(indice, lista.length - 1)];
  if (!dig) return null;
  const info = escalaId ? papelesDeEscala(escalaId, diagramas.acorde) : null;
  return svgMastil(dig, cuerdasDe(instrumento), diagramas.info, {
    nombresCuerdas: nombresCuerdasDe(instrumento, diagramas.bemoles),
    bemoles: diagramas.bemoles,
    mostrar: mostrar || "notas",
    papeles: info ? info.papeles : null,
    alt: `${diagramas.cifrado} en ${instrumento}`,
  });
}
