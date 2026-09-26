/* ============ The Essence of Sound — la rueda completa ============
   El problema de dibujar sólo los acordes que menciona un mapa es que te
   quedás con tres círculos sueltos: ves la progresión, pero no ves DÓNDE
   está parada dentro del sistema. Así que el gráfico ahora dibuja siempre
   las 12 tonalidades completas — el círculo de quintas de toda la vida —
   con sus tres anillos:

     · anillo externo : los 12 menores relativos  (Am, Em, Bm…)
     · anillo medio   : las 12 mayores            (C, G, D…)
     · anillo interno : los 12 dominantes         (G7 resuelve a C, etc.)

   Encima de ese mapa fijo se enciende la progresión del mapa elegido: sus
   acordes quedan grandes y con color, el resto del sistema queda tenue
   pero visible, y las flechas cruzan la rueda mostrando el camino. */

/* Orden del círculo de quintas, en sentido horario desde arriba, y el
   relativo menor de cada tonalidad (tabla fija: es teoría, no heurística). */
const ORDEN_QUINTAS = ["C", "G", "D", "A", "E", "B", "F#", "Db", "Ab", "Eb", "Bb", "F"];
const RELATIVOS_MENORES = ["Am", "Em", "Bm", "F#m", "C#m", "G#m", "D#m", "Bbm", "Fm", "Cm", "Gm", "Dm"];

const RUEDA_VIEW = 860;
const RUEDA_CENTRO = { x: RUEDA_VIEW / 2, y: RUEDA_VIEW / 2 };
const RADIO_ANILLO = { menor: 352, mayor: 268, dominante: 186 };
const R_NODO_TENUE = 19;
const R_NODO_ACTIVO = 26;
const RADIO_SATELITE = 405;

/* Las extensiones que de verdad suenan a dominante (llevan 7ma menor).
   "6", "maj7" o "add9" NO entran acá: suenan a tónica, no a dominante. */
const CALIDADES_DOMINANTES = new Set(["7", "9", "11", "13"]);

function semitonoDe(nombreNota) {
  return typeof INDICE_NOTA !== "undefined" ? INDICE_NOTA[nombreNota] : undefined;
}

function anguloDeColumna(i) {
  return -Math.PI / 2 + (i * 2 * Math.PI) / 12;
}

function puntoEnAnillo(i, radio) {
  const a = anguloDeColumna(i);
  return { x: RUEDA_CENTRO.x + radio * Math.cos(a), y: RUEDA_CENTRO.y + radio * Math.sin(a) };
}

/* Los 36 nodos del sistema, calculados una sola vez. */
function construirRueda() {
  const nodos = [];
  for (let i = 0; i < 12; i++) {
    const mayor = ORDEN_QUINTAS[i];
    const menor = RELATIVOS_MENORES[i];
    const menorRaiz = menor.replace(/m$/, "");
    // el V7 de esta tonalidad es la quinta de arriba, o sea la columna siguiente
    const dominanteRaiz = ORDEN_QUINTAS[(i + 1) % 12];

    nodos.push({
      id: `may-${i}`, columna: i, anillo: "mayor",
      etiqueta: mayor, raiz: mayor, semitono: semitonoDe(mayor),
      ...puntoEnAnillo(i, RADIO_ANILLO.mayor),
    });
    nodos.push({
      id: `men-${i}`, columna: i, anillo: "menor",
      etiqueta: menor, raiz: menorRaiz, semitono: semitonoDe(menorRaiz),
      ...puntoEnAnillo(i, RADIO_ANILLO.menor),
    });
    nodos.push({
      id: `dom-${i}`, columna: i, anillo: "dominante",
      etiqueta: dominanteRaiz + "7", raiz: dominanteRaiz, semitono: semitonoDe(dominanteRaiz),
      ...puntoEnAnillo(i, RADIO_ANILLO.dominante),
    });
  }
  return nodos;
}

const RUEDA_NODOS = construirRueda();
const RUEDA_POR_ID = new Map(RUEDA_NODOS.map((n) => [n.id, n]));

/* Dado un acorde ya parseado, ¿en qué nodo del sistema cae? Se resuelve por
   altura real (semitonos), así que Do# y Reb caen en el mismo lugar. */
function nodoRuedaParaAcorde(acorde) {
  if (!acorde) return null;
  const semi = semitonoDe(acorde.raiz);
  if (semi === undefined) return null;

  const columnaDeSemitono = (s, tabla) => tabla.findIndex((r) => semitonoDe(r) === s);

  if (CALIDADES_DOMINANTES.has(acorde.calidad)) {
    // un X7 vive en la columna a la que resuelve: una quinta abajo
    const colDeLaRaiz = columnaDeSemitono(semi, ORDEN_QUINTAS);
    if (colDeLaRaiz < 0) return null;
    return `dom-${(colDeLaRaiz - 1 + 12) % 12}`;
  }
  if (acorde.esMenor) {
    const col = RELATIVOS_MENORES.findIndex((m) => semitonoDe(m.replace(/m$/, "")) === semi);
    return col < 0 ? null : `men-${col}`;
  }
  const col = columnaDeSemitono(semi, ORDEN_QUINTAS);
  return col < 0 ? null : `may-${col}`;
}

/* Arco sobre un anillo, de una columna a la siguiente, respetando el hueco
   que ocupan los dos nodos en las puntas. */
function arcoDeAnillo(i, j, radio, rNodo) {
  const hueco = (rNodo + 6) / radio;
  const a1 = anguloDeColumna(i) + hueco;
  const a2 = anguloDeColumna(j) - hueco;
  const p1 = { x: RUEDA_CENTRO.x + radio * Math.cos(a1), y: RUEDA_CENTRO.y + radio * Math.sin(a1) };
  const p2 = { x: RUEDA_CENTRO.x + radio * Math.cos(a2), y: RUEDA_CENTRO.y + radio * Math.sin(a2) };
  return `M ${p1.x} ${p1.y} A ${radio} ${radio} 0 0 1 ${p2.x} ${p2.y}`;
}

function dibujarEsqueleto(capa) {
  // anillos guía, muy tenues, para que se lea que son tres órbitas
  Object.values(RADIO_ANILLO).forEach((radio) => {
    capa.appendChild(crearSVGEl("circle", {
      cx: RUEDA_CENTRO.x, cy: RUEDA_CENTRO.y, r: radio,
      class: "sh-anillo-guia", fill: "none",
    }));
  });

  for (let i = 0; i < 12; i++) {
    const may = RUEDA_POR_ID.get(`may-${i}`);
    const men = RUEDA_POR_ID.get(`men-${i}`);
    const dom = RUEDA_POR_ID.get(`dom-${i}`);

    // V7 -> I : la resolución más fuerte del sistema
    const ini = bordeDesde(dom, R_NODO_TENUE + 2, may);
    const fin = bordeDesde(may, R_NODO_TENUE + 7, dom);
    capa.appendChild(crearSVGEl("path", {
      d: `M ${ini.x} ${ini.y} L ${fin.x} ${fin.y}`,
      class: "sh-fondo-linea sh-fondo-resolucion", fill: "none",
    }));

    // I <-> vi : relativo menor
    const ini2 = bordeDesde(may, R_NODO_TENUE + 2, men);
    const fin2 = bordeDesde(men, R_NODO_TENUE + 2, may);
    capa.appendChild(crearSVGEl("path", {
      d: `M ${ini2.x} ${ini2.y} L ${fin2.x} ${fin2.y}`,
      class: "sh-fondo-linea sh-fondo-relativo", fill: "none",
    }));

    // los dos aros de quintas
    const sig = (i + 1) % 12;
    capa.appendChild(crearSVGEl("path", {
      d: arcoDeAnillo(i, sig, RADIO_ANILLO.mayor, R_NODO_TENUE),
      class: "sh-fondo-linea sh-fondo-quintas", fill: "none",
    }));
    capa.appendChild(crearSVGEl("path", {
      d: arcoDeAnillo(i, sig, RADIO_ANILLO.menor, R_NODO_TENUE),
      class: "sh-fondo-linea sh-fondo-quintas", fill: "none",
    }));
  }
}

function dibujarNodoRueda(capa, nodo, activo, color, notas) {
  const r = activo ? R_NODO_ACTIVO : R_NODO_TENUE;
  const attrs = {
    class: "sh-nodo" + (activo ? " sh-nodo-activo" : " sh-nodo-tenue"),
    tabindex: "0", role: "button",
  };
  if (nodo.id) attrs["data-rueda-id"] = nodo.id;
  const g = crearSVGEl("g", attrs);
  g.appendChild(crearSVGEl("circle", {
    cx: nodo.x, cy: nodo.y, r,
    class: "sh-nodo-circulo",
    stroke: activo ? color : "",
  }));
  const texto = crearSVGEl("text", {
    x: nodo.x, y: nodo.y + (activo ? 4.6 : 3.8),
    class: "sh-nodo-texto",
    "font-size": activo ? 14 : 11,
    fill: activo ? color : "",
  });
  texto.textContent = nodo.etiquetaVisible || nodo.etiqueta;
  g.appendChild(texto);

  if (activo && notas) {
    const sub = crearSVGEl("text", {
      x: nodo.x, y: nodo.y + r + 12,
      class: "sh-nodo-notas", "font-size": 9,
    });
    sub.textContent = notas;
    g.appendChild(sub);
  }

  const tip = crearSVGEl("title", {});
  tip.textContent = nodo.tooltip || nodo.etiqueta;
  g.appendChild(tip);

  // los círculos que este mapa de verdad invoca (los "activos", con
  // color propio) laten solos, cada uno a su ritmo — los tenues del
  // resto de la rueda se quedan quietos, son fondo, no protagonistas.
  if (activo) {
    g.classList.add("sh-vivo");
    g.style.setProperty("--sh-pulso-dur", (2.1 + Math.random() * 1.5).toFixed(2) + "s");
    g.style.setProperty("--sh-pulso-delay", (-Math.random() * 3).toFixed(2) + "s");
    g.style.setProperty("--sh-pulso-amp", (1.09 + Math.random() * 0.1).toFixed(3));
  }

  capa.appendChild(g);
}

/* Dibuja la rueda completa con la progresión del mapa encendida encima. */
/* Lo que se está mostrando ahora: el mapa abierto y sus conexiones, para
   que la exploración por hover sepa qué propone este mapa en particular. */
let estadoRueda = { mapa: null, conexionesPorNodo: new Map(), idsDeSatelites: [] };

function renderRuedaCompleta(mapa, svgEl) {
  nodoFijado = null;
  // los satélites del mapa anterior no tienen que sobrevivir al cambio
  (estadoRueda.idsDeSatelites || []).forEach((id) => RUEDA_POR_ID.delete(id));
  svgEl.innerHTML = "";
  svgEl.setAttribute("viewBox", `0 0 ${RUEDA_VIEW} ${RUEDA_VIEW}`);
  asegurarDefs(svgEl);

  const capaFondo = crearSVGEl("g", { class: "sh-capa-fondo" });
  const capaFlechas = crearSVGEl("g", { class: "sh-capa-flechas" });
  const capaNodos = crearSVGEl("g", { class: "sh-capa-nodos" });
  svgEl.appendChild(capaFondo);
  svgEl.appendChild(capaFlechas);
  svgEl.appendChild(capaNodos);

  dibujarEsqueleto(capaFondo);

  // --- resolver los acordes del mapa contra el sistema ---
  const delMapa = construirNodos(mapa);
  const posicionPorNucleo = new Map(); // nucleo -> {x, y, r}
  const idPorNucleo = new Map();       // nucleo -> id de la rueda (si cayó en ella)
  const etiquetaPorNucleo = new Map(); // nucleo -> cómo mostrarlo
  const activos = new Map();           // idRueda -> datos para pintarlo encendido
  const satelites = [];

  delMapa.forEach((n) => {
    const idRueda = nodoRuedaParaAcorde(n.acorde);
    if (idRueda && RUEDA_POR_ID.has(idRueda)) {
      const base = RUEDA_POR_ID.get(idRueda);
      // si el cifrado del mapa es más rico que el del sistema (Cmaj9 vs C),
      // mandamos el del mapa: es el que el músico tiene que tocar
      const etiquetaVisible = n.acorde ? n.acorde.raiz + (n.acorde.calidad || "") : base.etiqueta;
      activos.set(idRueda, {
        color: n.color,
        etiquetaVisible,
        tooltip: n.etiqueta,
        notas: n.acorde && n.acorde.notas ? n.acorde.notas.join(" ") : "",
      });
      posicionPorNucleo.set(n.nucleo, { x: base.x, y: base.y, r: R_NODO_ACTIVO });
      idPorNucleo.set(n.nucleo, idRueda);
      etiquetaPorNucleo.set(n.nucleo, etiquetaVisible);
    } else {
      satelites.push(n);
    }
  });

  // los que no son un cifrado (textos descriptivos) van por fuera del aro
  satelites.forEach((n, k) => {
    const ang = anguloDeColumna(k % 12) + Math.PI / 12;
    const p = {
      x: RUEDA_CENTRO.x + RADIO_SATELITE * Math.cos(ang),
      y: RUEDA_CENTRO.y + RADIO_SATELITE * Math.sin(ang),
    };
    const idSat = `sat-${k}`;
    posicionPorNucleo.set(n.nucleo, { x: p.x, y: p.y, r: R_NODO_ACTIVO });
    idPorNucleo.set(n.nucleo, idSat);
    etiquetaPorNucleo.set(n.nucleo, n.etiqueta);
    // los satélites también tienen que poder resolverse como destino
    RUEDA_POR_ID.set(idSat, {
      id: idSat, x: p.x, y: p.y, anillo: "satelite",
      etiqueta: truncar(n.etiqueta, 7), etiquetaFijada: null, esSatelite: true,
    });
    dibujarNodoRueda(capaNodos, {
      ...p, id: idSat,
      etiqueta: truncar(n.etiqueta, 7),
      etiquetaVisible: truncar(n.etiqueta, 7),
      tooltip: n.etiqueta,
    }, true, n.color, "");
  });

  /* Las conexiones que propone ESTE mapa, indexadas por nodo de origen.
     Son las que manda el hover: si estás mirando "Intercambio Modal", lo
     que importa es que de C se va a Fm, no las quintas de siempre. */
  const conexionesPorNodo = new Map();
  let indiceFlechaRueda = 0;
  (mapa.conexiones_flechas || []).forEach((c) => {
    const nucO = nucleoEtiqueta(c.origen) || String(c.origen).trim().toLowerCase();
    const nucD = nucleoEtiqueta(c.destino) || String(c.destino).trim().toLowerCase();
    const idO = idPorNucleo.get(nucO);
    const idD = idPorNucleo.get(nucD);
    if (!idO || !idD || idO === idD) return;
    if (!conexionesPorNodo.has(idO)) conexionesPorNodo.set(idO, []);
    conexionesPorNodo.get(idO).push({
      destino: idD,
      etiqueta: c.tipo || "movimiento de este mapa",
      etiquetaDestino: etiquetaPorNucleo.get(nucD) || c.destino,
      clave: "mapa",
      color: colorDeMovimiento("mapa"),
      delMapa: true,
    });
  });
  estadoRueda = { mapa, conexionesPorNodo, idsDeSatelites: satelites.map((_, k) => `sat-${k}`) };

  // --- flechas del mapa, cruzando la rueda ---
  const vistoPar = new Map();
  (mapa.conexiones_flechas || []).forEach((c) => {
    const nucOrigen = nucleoEtiqueta(c.origen) || String(c.origen).trim().toLowerCase();
    const nucDestino = nucleoEtiqueta(c.destino) || String(c.destino).trim().toLowerCase();
    const p1 = posicionPorNucleo.get(nucOrigen);
    const p2 = posicionPorNucleo.get(nucDestino);
    if (!p1 || !p2 || (p1.x === p2.x && p1.y === p2.y)) return;

    const clave = `${nucOrigen}->${nucDestino}`;
    const repetido = vistoPar.get(clave) || 0;
    vistoPar.set(clave, repetido + 1);

    const nodoOrigen = delMapa.find((n) => n.nucleo === nucOrigen);
    const color = nodoOrigen ? nodoOrigen.color : "#ffffff";

    const mx = (p1.x + p2.x) / 2, my = (p1.y + p2.y) / 2;
    const dist = Math.hypot(p2.x - p1.x, p2.y - p1.y) || 1;
    // curva perpendicular al tramo: suficiente para que dos flechas entre el
    // mismo par no se pisen, pero sin dar la vuelta por afuera
    const nx = -(p2.y - p1.y) / dist, ny = (p2.x - p1.x) / dist;
    const curva = Math.min(dist * 0.12, 46) + repetido * 26;
    const cx = mx + nx * curva, cy = my + ny * curva;

    const ini = bordeDesde(p1, p1.r + 3, { x: cx, y: cy });
    const fin = bordeDesde(p2, p2.r + 11, { x: cx, y: cy });

    const path = crearSVGEl("path", {
      d: `M ${ini.x} ${ini.y} Q ${cx} ${cy} ${fin.x} ${fin.y}`,
      class: "sh-flecha", stroke: color, fill: "none",
    });
    const t = crearSVGEl("title", {});
    t.textContent = `${c.origen} → ${c.destino}${c.tipo ? " · " + c.tipo : ""}`;
    path.appendChild(t);
    capaFlechas.appendChild(path);

    const ang = Math.atan2(fin.y - cy, fin.x - cx);
    capaFlechas.appendChild(flechaPolígono(fin, ang, 10, color));

    // el mismo cometa de energía que ya viaja por las flechas del mapa
    // propio, acá también — para que se note hacia dónde se mueve.
    if (typeof agregarRayoEnergia === "function") {
      agregarRayoEnergia(path, capaFlechas, "sh-rayo-rueda", indiceFlechaRueda++);
    }
  });

  // si el mapa usa un cifrado más rico que el del sistema (Cmaj9 en vez de C),
  // ese es el que hay que mostrar en "cómo tocarlo"
  RUEDA_NODOS.forEach((nodo) => {
    const act = activos.get(nodo.id);
    nodo.etiquetaFijada = act ? act.etiquetaVisible : null;
  });

  // --- los 36 nodos del sistema: primero los tenues, después los encendidos ---
  RUEDA_NODOS.forEach((nodo) => {
    if (activos.has(nodo.id)) return;
    dibujarNodoRueda(capaNodos, nodo, false, null, "");
  });
  RUEDA_NODOS.forEach((nodo) => {
    const act = activos.get(nodo.id);
    if (!act) return;
    dibujarNodoRueda(
      capaNodos,
      { ...nodo, etiquetaVisible: act.etiquetaVisible, tooltip: act.tooltip },
      true, act.color, act.notas
    );
  });

  engancharInteraccion(svgEl);
  return delMapa;
}

/* ============ "desde este acorde, ¿a dónde puedo ir?" ============
   Todo lo de acá abajo es teoría fija, no heurística: son los movimientos
   que siempre existen desde un acorde, independientemente del mapa que
   estés mirando. Por eso se pueden calcular para los 36 nodos. */

function columnaValida(k) { return ((k % 12) + 12) % 12; }

function mayorPorSemitono(s) {
  const c = ORDEN_QUINTAS.findIndex((r) => semitonoDe(r) === s);
  return c < 0 ? null : `may-${c}`;
}
function menorPorSemitono(s) {
  const c = RELATIVOS_MENORES.findIndex((m) => semitonoDe(m.replace(/m$/, "")) === s);
  return c < 0 ? null : `men-${c}`;
}
/* El nodo del anillo dominante cuya raíz es ese semitono (X7). */
function dominantePorSemitono(s) {
  const c = ORDEN_QUINTAS.findIndex((r) => semitonoDe(r) === s);
  return c < 0 ? null : `dom-${columnaValida(c - 1)}`;
}

/* Lo que propone el mapa abierto desde este acorde. Tiene prioridad sobre
   la teoría general: si estás leyendo un mapa de intercambio modal, lo que
   te interesa es su camino, no las quintas de siempre. */
function movimientosDelMapa(id) {
  return (estadoRueda.conexionesPorNodo.get(id) || []).filter(
    (m) => m.destino !== id && RUEDA_POR_ID.has(m.destino)
  );
}

function movimientosTeoricos(id) {
  const n = RUEDA_POR_ID.get(id);
  if (!n || n.esSatelite || n.columna === undefined) return [];
  const i = n.columna;
  const out = [];
  const push = (destino, etiqueta, clave) => {
    if (destino && destino !== id && RUEDA_POR_ID.has(destino)) {
      out.push({ destino, etiqueta, clave, color: colorDeMovimiento(clave) });
    }
  };

  if (n.anillo === "mayor") {
    push(`may-${columnaValida(i + 1)}`, "una quinta arriba — el V", "quintaArriba");
    push(`may-${columnaValida(i - 1)}`, "una quinta abajo — el IV", "quintaAbajo");
    push(`men-${i}`, "su relativo menor — el vi", "relativo");
    push(`dom-${i}`, "el V7 que lo prepara", "dominante");
    push(menorPorSemitono(n.semitono), "su paralelo menor (mismo nombre, otro modo)", "paralelo");
    push(dominantePorSemitono((n.semitono + 9) % 12), "dominante secundaria: V7/ii", "secundaria");
  } else if (n.anillo === "menor") {
    push(`may-${i}`, "su relativo mayor", "relativo");
    push(mayorPorSemitono(n.semitono), "su paralelo mayor (mismo nombre, otro modo)", "paralelo");
    push(`men-${columnaValida(i + 1)}`, "una quinta arriba", "quintaArriba");
    push(`men-${columnaValida(i - 1)}`, "una quinta abajo", "quintaAbajo");
    push(dominantePorSemitono((n.semitono + 7) % 12), "su dominante — el V7 que lo prepara", "dominante");
  } else {
    push(`may-${i}`, "resuelve acá — V7 → I", "resolucion");
    push(`men-${i}`, "resolución rota — V7 → vi", "relativo");
    push(dominantePorSemitono((n.semitono + 6) % 12), "sustitución tritonal — el subV7", "tritonal");
    push(`dom-${columnaValida(i - 1)}`, "sigue la cadena de dominantes", "cadena");
  }
  return out;
}

/* Los dos grupos juntos, sin repetir destinos: primero lo del mapa. */
function movimientosDesde(id) {
  const propios = movimientosDelMapa(id);
  const yaEstan = new Set(propios.map((m) => m.destino));
  const generales = movimientosTeoricos(id).filter((m) => !yaEstan.has(m.destino));
  return { propios, generales, todos: propios.concat(generales) };
}


function avisarFijado(id) {
  if (!alFijarNodo) return;
  if (!id) { alFijarNodo(null); return; }
  const n = RUEDA_POR_ID.get(id);
  alFijarNodo(n ? (n.etiquetaFijada || n.etiqueta) : null);
}

/* Un acorde queda "fijado" al hacerle click: así la exploración no se va
   cuando movés el mouse, y en pantallas táctiles (donde no hay hover)
   sigue funcionando igual. */
let nodoFijado = null;

function limpiarExploracion(svgEl) {
  const previa = svgEl.querySelector(".sh-capa-explorar");
  if (previa) previa.remove();
  svgEl.classList.remove("sh-explorando");
  svgEl.querySelectorAll(".sh-nodo-origen, .sh-nodo-destino").forEach((el) => {
    el.classList.remove("sh-nodo-origen", "sh-nodo-destino", "sh-nodo-destino-mapa");
    // los colores de la exploración se pintan inline: hay que sacarlos a mano
    const circulo = el.querySelector(".sh-nodo-circulo");
    const texto = el.querySelector(".sh-nodo-texto");
    if (circulo) circulo.style.stroke = "";
    if (texto) texto.style.fill = "";
  });
}

function explorarNodo(svgEl, id) {
  limpiarExploracion(svgEl);
  const origen = RUEDA_POR_ID.get(id);
  if (!origen) return;

  const movs = movimientosDesde(id);
  const capa = crearSVGEl("g", { class: "sh-capa-explorar" });
  // va debajo de los nodos pero encima del resto
  const capaNodos = svgEl.querySelector(".sh-capa-nodos");
  svgEl.insertBefore(capa, capaNodos);

  let indiceExplorar = 0;
  movs.todos.forEach(({ destino, etiqueta, delMapa, color }) => {
    const d = RUEDA_POR_ID.get(destino);
    const colorMov = color || colorDeMovimiento(delMapa ? "mapa" : null);
    const mx = (origen.x + d.x) / 2, my = (origen.y + d.y) / 2;
    const dist = Math.hypot(d.x - origen.x, d.y - origen.y) || 1;
    const nx = -(d.y - origen.y) / dist, ny = (d.x - origen.x) / dist;
    const curva = Math.min(dist * 0.14, 40);
    const cx = mx + nx * curva, cy = my + ny * curva;

    const ini = bordeDesde(origen, R_NODO_ACTIVO + 4, { x: cx, y: cy });
    const fin = bordeDesde(d, (d.esSatelite ? R_NODO_ACTIVO : R_NODO_TENUE) + 12, { x: cx, y: cy });

    const path = crearSVGEl("path", {
      d: `M ${ini.x} ${ini.y} Q ${cx} ${cy} ${fin.x} ${fin.y}`,
      class: delMapa ? "sh-flecha-explorar es-del-mapa" : "sh-flecha-explorar",
      fill: "none",
      stroke: colorMov,
    });
    const t = crearSVGEl("title", {});
    t.textContent = `${origen.etiqueta} → ${d.etiqueta} · ${etiqueta}`;
    path.appendChild(t);
    capa.appendChild(path);

    const ang = Math.atan2(fin.y - cy, fin.x - cx);
    const cabeza = flechaPolígono(fin, ang, delMapa ? 12 : 10, colorMov);
    cabeza.setAttribute("class", delMapa ? "sh-cabeza-explorar es-del-mapa" : "sh-cabeza-explorar");
    capa.appendChild(cabeza);

    // acá también: mientras señala a dónde podés ir, un cometa viajando
    // por esa flecha muestra el movimiento, no sólo la puntita fija.
    if (typeof agregarRayoEnergia === "function") {
      agregarRayoEnergia(path, capa, "sh-rayo-explorar", indiceExplorar++);
    }

    const nodoDestino = svgEl.querySelector(`[data-rueda-id="${destino}"]`);
    if (nodoDestino) {
      nodoDestino.classList.add("sh-nodo-destino");
      if (delMapa) nodoDestino.classList.add("sh-nodo-destino-mapa");
      // el destino se tiñe con el color de la flecha que llega
      const circulo = nodoDestino.querySelector(".sh-nodo-circulo");
      const texto = nodoDestino.querySelector(".sh-nodo-texto");
      if (circulo) circulo.style.stroke = colorMov;
      if (texto) texto.style.fill = colorMov;
    }
  });

  const nodoOrigen = svgEl.querySelector(`[data-rueda-id="${id}"]`);
  if (nodoOrigen) {
    nodoOrigen.classList.add("sh-nodo-origen");
    const circulo = nodoOrigen.querySelector(".sh-nodo-circulo");
    const texto = nodoOrigen.querySelector(".sh-nodo-texto");
    if (circulo) circulo.style.stroke = COLOR_HOVER;
    if (texto) texto.style.fill = COLOR_HOVER;
  }

  // apaga todo lo demás: queda a la vista sólo desde dónde salís y a dónde podés ir
  svgEl.classList.add("sh-explorando");

  if (alExplorarNodo) {
    const conNodo = (m) => ({ ...m, nodo: RUEDA_POR_ID.get(m.destino) });
    alExplorarNodo({
      origen,
      propios: movs.propios.map(conNodo),
      generales: movs.generales.map(conNodo),
      nombreMapa: estadoRueda.mapa ? estadoRueda.mapa.nombre : "",
    });
  }
}

function soltarNodoFijado(svgEl) {
  nodoFijado = null;
  limpiarExploracion(svgEl);
  if (alExplorarNodo) alExplorarNodo(null);
  avisarFijado(null);
}

/* Hover para mirar, click para dejarlo fijo (y para que ande en táctil,
   donde no hay hover). Los listeners se enganchan una sola vez por <svg>:
   el mismo elemento se reusa cada vez que abrís un mapa. */
function engancharInteraccion(svgEl) {
  if (svgEl.dataset.ruedaEnganchada === "1") return;
  svgEl.dataset.ruedaEnganchada = "1";

  const nodoDe = (ev) => (ev.target.closest ? ev.target.closest("[data-rueda-id]") : null);

  // mismo mecanismo que el mapa propio: mantener presionado hasta que el
  // anillo se llena hace de preview en touch, donde no hay hover.
  const DURACION_PRESION = 480;
  let temporizadorPresion = null;
  let anilloPresion = null;
  let fuePresionLarga = false;
  let ignorarProximoClick = false;
  let suprimirMouseoutHasta = 0;

  const soltarPresion = () => {
    clearTimeout(temporizadorPresion);
    if (anilloPresion) { anilloPresion.remove(); anilloPresion = null; }
  };

  svgEl.addEventListener("touchstart", (ev) => {
    const g = nodoDe(ev);
    if (!g) return;
    fuePresionLarga = false;
    anilloPresion = typeof crearAnilloPresion === "function" ? crearAnilloPresion(g, DURACION_PRESION) : null;
    const id = g.getAttribute("data-rueda-id");
    temporizadorPresion = setTimeout(() => {
      fuePresionLarga = true;
      try { if (navigator.vibrate) navigator.vibrate(12); } catch (e) { /* algunos navegadores lo bloquean sin gesto previo */ }
      explorarNodo(svgEl, id);
    }, DURACION_PRESION);
  }, { passive: true });

  svgEl.addEventListener("touchend", () => {
    soltarPresion();
    if (fuePresionLarga) {
      ignorarProximoClick = true;
      setTimeout(() => { ignorarProximoClick = false; }, 400);
      // al soltar, el navegador dispara un mouseout "de compatibilidad"
      // (para sitios viejos que sólo escuchan mouse) — sin esto, ese
      // mouseout fantasma cierra el preview que recién mostramos.
      suprimirMouseoutHasta = Date.now() + 500;
    }
  });

  svgEl.addEventListener("touchmove", () => {
    soltarPresion();
    fuePresionLarga = false;
  }, { passive: true });

  svgEl.addEventListener("touchcancel", () => {
    soltarPresion();
    fuePresionLarga = false;
  });

  svgEl.addEventListener("mouseover", (ev) => {
    if (Date.now() < suprimirMouseoutHasta) return;
    if (nodoFijado) return;
    const g = nodoDe(ev);
    if (!g) return;
    const id = g.getAttribute("data-rueda-id");
    if (g.classList.contains("sh-nodo-origen")) return;
    explorarNodo(svgEl, id);
  });

  svgEl.addEventListener("mouseout", (ev) => {
    if (Date.now() < suprimirMouseoutHasta) return;
    if (nodoFijado) return;
    const g = nodoDe(ev);
    if (!g) return;
    // si el mouse pasó directo a otro acorde, que lo maneje el mouseover
    const haciaOtroNodo = ev.relatedTarget && ev.relatedTarget.closest
      && ev.relatedTarget.closest("[data-rueda-id]");
    if (haciaOtroNodo) return;
    limpiarExploracion(svgEl);
    if (alExplorarNodo) alExplorarNodo(null);
  });

  svgEl.addEventListener("click", (ev) => {
    // el mismo <svg> se reusa para "este mapa" y para la rueda; si ahora
    // mismo está el mapa propio dibujado, estos listeners no hacen nada.
    if (!svgEl.querySelector("[data-rueda-id]")) return;
    if (ignorarProximoClick) { ignorarProximoClick = false; return; }
    const g = nodoDe(ev);
    if (!g) { soltarNodoFijado(svgEl); return; }
    const id = g.getAttribute("data-rueda-id");
    if (nodoFijado === id) { soltarNodoFijado(svgEl); return; }
    nodoFijado = id;
    explorarNodo(svgEl, id);
    avisarFijado(id);
  });

  svgEl.addEventListener("keydown", (ev) => {
    if (!svgEl.querySelector("[data-rueda-id]")) return;
    if (ev.key === "Escape") { soltarNodoFijado(svgEl); return; }
    if (ev.key !== "Enter" && ev.key !== " ") return;
    const g = nodoDe(ev);
    if (!g) return;
    ev.preventDefault();
    nodoFijado = g.getAttribute("data-rueda-id");
    explorarNodo(svgEl, nodoFijado);
    avisarFijado(nodoFijado);
  });

  svgEl.addEventListener("focusin", (ev) => {
    if (!svgEl.querySelector("[data-rueda-id]")) return;
    if (nodoFijado) return;
    const g = nodoDe(ev);
    if (g) explorarNodo(svgEl, g.getAttribute("data-rueda-id"));
  });
}

/* ¿Vale la pena dibujar la rueda para este mapa? Sólo si de verdad es una
   progresión de acordes. Los mapas de técnica (bends, tremolo, palm muting)
   no tienen acordes que ubicar: para esos sigue el dibujo simple. */
function mapaEsArmonico(mapa) {
  if (!mapa.conexiones_flechas || !mapa.conexiones_flechas.length) return false;
  const nodos = construirNodos(mapa);
  if (!nodos.length) return false;
  const conAcorde = nodos.filter((n) => nodoRuedaParaAcorde(n.acorde)).length;
  return conAcorde / nodos.length >= 0.5;
}
