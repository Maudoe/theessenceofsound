/* ============ The Essence of Sound — dibujo de un mapa ============
   Dibuja SÓLO los acordes que el mapa invoca, con la forma que el propio
   mapa declara (estrella, grilla, embudo, cascada…). Nada de acordes de
   relleno: si al pasar el mouse te ofrece un camino, ese camino existe
   acá adentro y lo vas a poder seguir en el gráfico.

   La rueda completa del círculo de quintas sigue disponible aparte, como
   vista opcional (rueda.js), pero ya no es lo que se ve por defecto. */

const SVG_NS = "http://www.w3.org/2000/svg";

function nucleoEtiqueta(s) {
  return normalizarClave(String(s).replace(/\(.*$/, "")).trim();
}

function truncar(s, max) {
  return s.length > max ? s.slice(0, max - 1) + "…" : s;
}

function envolverTexto(texto, maxCharsPorLinea, maxLineas) {
  const palabras = String(texto).split(/\s+/);
  const lineas = [];
  let actual = "";
  for (const palabra of palabras) {
    const candidata = actual ? actual + " " + palabra : palabra;
    if (candidata.length > maxCharsPorLinea && actual) {
      lineas.push(actual);
      actual = palabra;
    } else {
      actual = candidata;
    }
    if (lineas.length === maxLineas) break;
  }
  if (lineas.length < maxLineas && actual) lineas.push(actual);
  return lineas.map((l) => truncar(l, maxCharsPorLinea));
}

function crearSVGEl(tag, attrs) {
  const el = document.createElementNS(SVG_NS, tag);
  for (const k in attrs) el.setAttribute(k, attrs[k]);
  return el;
}

/* Une nodos_principales + todo lo que aparezca en conexiones_flechas,
   deduplicando por "núcleo" (el cifrado sin las anotaciones). */
function construirNodos(mapa) {
  const orden = [];
  const vistos = new Map();

  const agregar = (etiquetaBruta) => {
    const etiqueta = String(etiquetaBruta).trim();
    const nucleo = nucleoEtiqueta(etiqueta) || etiqueta.toLowerCase();
    if (vistos.has(nucleo)) return vistos.get(nucleo);
    const idx = orden.length;
    orden.push({ etiqueta, nucleo });
    vistos.set(nucleo, idx);
    return idx;
  };

  (mapa.nodos_principales || []).forEach((n) => agregar(n));
  (mapa.conexiones_flechas || []).forEach((c) => {
    agregar(c.origen);
    agregar(c.destino);
  });

  const esquema = mapa.esquema_colores || {};
  return orden.map((n, i) => {
    const acorde = spellChord(n.etiqueta);
    const { colorKey, color } = elegirColorNodo(n.etiqueta, esquema, acorde, i);
    return { ...n, indice: i, acorde, colorKey, color };
  });
}

function indiceDeNucleo(nodos, etiquetaBruta) {
  const nucleo = nucleoEtiqueta(etiquetaBruta) || String(etiquetaBruta).trim().toLowerCase();
  return nodos.findIndex((n) => n.nucleo === nucleo);
}

function bordeDesde(pos, r, hacia) {
  const dx = hacia.x - pos.x;
  const dy = hacia.y - pos.y;
  const d = Math.hypot(dx, dy) || 1;
  return { x: pos.x + (dx / d) * r, y: pos.y + (dy / d) * r };
}

function flechaPolígono(punta, angulo, tam, color) {
  const a1 = angulo + Math.PI * 0.82;
  const a2 = angulo - Math.PI * 0.82;
  const p1 = { x: punta.x + tam * Math.cos(a1), y: punta.y + tam * Math.sin(a1) };
  const p2 = { x: punta.x + tam * Math.cos(a2), y: punta.y + tam * Math.sin(a2) };
  return crearSVGEl("path", {
    d: `M ${punta.x} ${punta.y} L ${p1.x} ${p1.y} L ${p2.x} ${p2.y} Z`,
    fill: color,
  });
}

function asegurarDefs(svg) {
  let defs = svg.querySelector("defs");
  if (defs) return defs;
  defs = crearSVGEl("defs", {});
  const filtro = crearSVGEl("filter", { id: "sh-glow", x: "-60%", y: "-60%", width: "220%", height: "220%" });
  filtro.appendChild(crearSVGEl("feGaussianBlur", { stdDeviation: "3.2", result: "blur" }));
  const merge = crearSVGEl("feMerge", {});
  merge.appendChild(crearSVGEl("feMergeNode", { in: "blur" }));
  merge.appendChild(crearSVGEl("feMergeNode", { in: "SourceGraphic" }));
  filtro.appendChild(merge);
  defs.appendChild(filtro);
  svg.appendChild(defs);
  return defs;
}

/* ============ paleta de movimientos ============
   Cada tipo de movimiento tiene su color, para distinguirlos de un
   vistazo. Acá hay bastante más que quintas: intercambio modal,
   mediantes, sustitución tritonal, backdoor, cromatismos… */
const COLOR_MOVIMIENTO = {
  mapa: "#ffffff",
  quintaArriba: "#5be8d8",
  quintaAbajo: "#6fb8ff",
  relativo: "#ff6fae",
  paralelo: "#b98bff",
  dominante: "#ffa53d",
  resolucion: "#7dff9e",
  tritonal: "#ff4d6d",
  cadena: "#ffe066",
  secundaria: "#9cff7a",
  mediante: "#ff9ff3",
  cromatico: "#ff8a5c",
  tono: "#8ab6ff",
};
const COLOR_HOVER = "#ffc94a"; // dorado: el acorde donde estás parado

function colorDeMovimiento(clave) {
  return COLOR_MOVIMIENTO[clave] || "#9ff3e8";
}

/* La app engancha acá para llenar los paneles laterales. */
let alExplorarNodo = null;
let alFijarNodo = null;
function setExploradorDeRueda(fn) { alExplorarNodo = fn; }
function setFijadorDeRueda(fn) { alFijarNodo = fn; }

/* ============ relaciones entre dos acordes DEL MISMO mapa ============
   Sirve para contestar "si me paro acá, ¿a qué otra cosa de este gráfico
   puedo ir y por qué?" — sin salirse de lo que el mapa invoca. */
const SET_DOMINANTES = new Set(["7", "9", "11", "13"]);

/* El grado del acorde dentro de la tonalidad del mapa. Es lo que de verdad
   ubica a un músico: "Fm" no dice mucho, "el ii" sí. Mayúscula para los
   mayores/dominantes, minúscula para los menores, y los que no son de la
   escala se marcan con su alteración (bIII, bVI, bVII…). */
const GRADOS_MAYOR = ["I", "bII", "II", "bIII", "III", "IV", "#IV", "V", "bVI", "VI", "bVII", "VII"];

function gradoDe(acorde, tonicaSemi) {
  if (!acorde || tonicaSemi === undefined) return null;
  const r = INDICE_NOTA[acorde.raiz];
  if (r === undefined) return null;
  let grado = GRADOS_MAYOR[(r - tonicaSemi + 12) % 12];
  if (acorde.esMenor) grado = grado.toLowerCase();
  if (SET_DOMINANTES.has(acorde.calidad)) grado += "7";
  return grado;
}

function relacionEntre(a, b) {
  if (!a || !b) return null;
  const ra = INDICE_NOTA[a.raiz], rb = INDICE_NOTA[b.raiz];
  if (ra === undefined || rb === undefined) return null;
  const salto = (rb - ra + 12) % 12;

  const aDom = SET_DOMINANTES.has(a.calidad);
  const bDom = SET_DOMINANTES.has(b.calidad);

  if (salto === 0) {
    if (a.esMenor !== b.esMenor) return { etiqueta: t("relacion.paralelo"), clave: "paralelo" };
    if (aDom !== bDom) return { etiqueta: aDom ? t("relacion.sinTension") : t("relacion.dominantizar"), clave: "dominante" };
    return null;
  }
  if (aDom && salto === 5) return { etiqueta: t("relacion.resuelveV7I"), clave: "resolucion" };
  if (aDom && bDom && salto === 6) return { etiqueta: t("relacion.subV7"), clave: "tritonal" };
  if (aDom && bDom && salto === 5) return { etiqueta: t("relacion.cadenaDominantes"), clave: "cadena" };
  if (bDom && salto === 7) return { etiqueta: t("relacion.suDominante"), clave: "dominante" };
  if (aDom && salto === 2 && !b.esMenor) return { etiqueta: t("relacion.backdoor"), clave: "resolucion" };
  if (!a.esMenor && b.esMenor && salto === 9) return { etiqueta: t("relacion.relativoMenor"), clave: "relativo" };
  if (a.esMenor && !b.esMenor && salto === 3) return { etiqueta: t("relacion.relativoMayor"), clave: "relativo" };
  if (aDom && b.esMenor && salto === 9) return { etiqueta: t("relacion.resolucionRota"), clave: "relativo" };
  if (salto === 7) return { etiqueta: t("relacion.quintaArriba"), clave: "quintaArriba" };
  if (salto === 5) return { etiqueta: t("relacion.quintaAbajo"), clave: "quintaAbajo" };
  if (salto === 2) return { etiqueta: t("relacion.tonoArriba"), clave: "tono" };
  if (salto === 10) return { etiqueta: t("relacion.tonoAbajo"), clave: "tono" };
  if (salto === 1) return { etiqueta: t("relacion.semitonoArriba"), clave: "cromatico" };
  if (salto === 11) return { etiqueta: t("relacion.semitonoAbajo"), clave: "cromatico" };
  if (salto === 4 || salto === 3) return { etiqueta: t("relacion.mediante"), clave: "mediante" };
  if (salto === 8 || salto === 9) return { etiqueta: t("relacion.medianteInferior"), clave: "mediante" };
  if (salto === 6) return { etiqueta: t("relacion.tritono"), clave: "tritonal" };
  return null;
}

/* ============ estado de la exploración ============ */
let mapaEnPantalla = null;   // { nodos, posiciones, radio, salientes }
let nodoFijadoMapa = null;

function limpiarExploracionMapa(svgEl) {
  const capa = svgEl.querySelector(".sh-capa-explorar");
  if (capa) capa.remove();
  svgEl.classList.remove("sh-explorando");
  svgEl.querySelectorAll(".sh-nodo-origen, .sh-nodo-destino").forEach((el) => {
    el.classList.remove("sh-nodo-origen", "sh-nodo-destino", "sh-nodo-destino-mapa");
    const c = el.querySelector(".sh-nodo-circulo");
    const t = el.querySelector(".sh-nodo-texto");
    if (c) c.style.stroke = "";
    if (t) t.style.fill = "";
  });
}

/* Desde el nodo i: primero lo que dice el mapa, después las relaciones
   que existen con OTROS acordes de este mismo gráfico. */
function movimientosEnMapa(i) {
  if (!mapaEnPantalla) return { propios: [], generales: [], todos: [] };
  const { nodos, salientes } = mapaEnPantalla;
  const propios = (salientes.get(i) || []).map((s) => ({
    destino: s.destino,
    etiqueta: s.tipo || t("relacion.movimientoGenerico"),
    clave: "mapa",
    color: colorDeMovimiento("mapa"),
    delMapa: true,
  }));
  const yaEstan = new Set(propios.map((p) => p.destino));

  const generales = [];
  const origen = nodos[i];
  const tonicaSemi = mapaEnPantalla.tonicaSemi;
  nodos.forEach((otro, j) => {
    if (j === i || yaEstan.has(j)) return;
    const rel = relacionEntre(origen.acorde, otro.acorde);
    if (!rel) return;
    // el grado ubica el acorde dentro de la tonalidad; la relación explica
    // cómo se llega. Juntos dicen bastante más que cualquiera de los dos.
    const grado = gradoDe(otro.acorde, tonicaSemi);
    generales.push({
      destino: j,
      etiqueta: rel.etiqueta,
      grado,
      clave: rel.clave,
      color: colorDeMovimiento(rel.clave),
      delMapa: false,
    });
  });

  // ordenados por cercanía funcional: primero lo que resuelve, después el resto
  const peso = { resolucion: 0, dominante: 1, tritonal: 2, cadena: 3, relativo: 4, paralelo: 5 };
  generales.sort((x, y) => (peso[x.clave] ?? 9) - (peso[y.clave] ?? 9));

  return { propios, generales, todos: propios.concat(generales) };
}

function explorarNodoMapa(svgEl, i) {
  limpiarExploracionMapa(svgEl);
  if (!mapaEnPantalla) return;
  const { nodos, posiciones, radio } = mapaEnPantalla;
  const origen = posiciones[i];
  if (!origen) return;

  const movs = movimientosEnMapa(i);
  const capa = crearSVGEl("g", { class: "sh-capa-explorar" });
  svgEl.insertBefore(capa, svgEl.querySelector(".sh-capa-nodos"));

  movs.todos.forEach(({ destino, etiqueta, delMapa, color }) => {
    const d = posiciones[destino];
    if (!d) return;
    const mx = (origen.x + d.x) / 2, my = (origen.y + d.y) / 2;
    const dist = Math.hypot(d.x - origen.x, d.y - origen.y) || 1;
    const nx = -(d.y - origen.y) / dist, ny = (d.x - origen.x) / dist;
    const curva = Math.min(dist * 0.14, 42);
    const cx = mx + nx * curva, cy = my + ny * curva;

    const ini = bordeDesde(origen, radio + 4, { x: cx, y: cy });
    const fin = bordeDesde(d, radio + 12, { x: cx, y: cy });

    const path = crearSVGEl("path", {
      d: `M ${ini.x} ${ini.y} Q ${cx} ${cy} ${fin.x} ${fin.y}`,
      class: delMapa ? "sh-flecha-explorar es-del-mapa" : "sh-flecha-explorar",
      fill: "none", stroke: color,
    });
    const t = crearSVGEl("title", {});
    t.textContent = `${nodos[i].etiqueta} → ${nodos[destino].etiqueta} · ${etiqueta}`;
    path.appendChild(t);
    capa.appendChild(path);

    const ang = Math.atan2(fin.y - cy, fin.x - cx);
    const cabeza = flechaPolígono(fin, ang, delMapa ? 12 : 10, color);
    cabeza.setAttribute("class", "sh-cabeza-explorar");
    capa.appendChild(cabeza);

    const g = svgEl.querySelector(`[data-nodo-idx="${destino}"]`);
    if (g) {
      g.classList.add("sh-nodo-destino");
      if (delMapa) g.classList.add("sh-nodo-destino-mapa");
      const c = g.querySelector(".sh-nodo-circulo");
      const tx = g.querySelector(".sh-nodo-texto");
      if (c) c.style.stroke = color;
      if (tx) tx.style.fill = color;
    }
  });

  const gOrigen = svgEl.querySelector(`[data-nodo-idx="${i}"]`);
  if (gOrigen) {
    gOrigen.classList.add("sh-nodo-origen");
    const c = gOrigen.querySelector(".sh-nodo-circulo");
    const tx = gOrigen.querySelector(".sh-nodo-texto");
    if (c) c.style.stroke = COLOR_HOVER;
    if (tx) tx.style.fill = COLOR_HOVER;
  }

  svgEl.classList.add("sh-explorando");

  if (alExplorarNodo) {
    const conNodo = (m) => ({
      ...m,
      nodo: { etiqueta: nodos[m.destino].etiqueta },
      grado: m.grado || gradoDe(nodos[m.destino].acorde, mapaEnPantalla.tonicaSemi),
    });
    alExplorarNodo({
      origen: {
        etiqueta: nodos[i].etiqueta,
        grado: gradoDe(nodos[i].acorde, mapaEnPantalla.tonicaSemi),
      },
      propios: movs.propios.map(conNodo),
      generales: movs.generales.map(conNodo),
    });
  }
}

function soltarFijadoMapa(svgEl) {
  nodoFijadoMapa = null;
  limpiarExploracionMapa(svgEl);
  if (alExplorarNodo) alExplorarNodo(null);
  if (alFijarNodo) alFijarNodo(null);
}

function engancharInteraccionMapa(svgEl) {
  if (svgEl.dataset.mapaEnganchado === "1") return;
  svgEl.dataset.mapaEnganchado = "1";
  const nodoDe = (ev) => (ev.target.closest ? ev.target.closest("[data-nodo-idx]") : null);
  const idxDe = (g) => Number(g.getAttribute("data-nodo-idx"));

  svgEl.addEventListener("mouseover", (ev) => {
    if (nodoFijadoMapa !== null) return;
    const g = nodoDe(ev);
    if (!g || g.classList.contains("sh-nodo-origen")) return;
    explorarNodoMapa(svgEl, idxDe(g));
  });

  svgEl.addEventListener("mouseout", (ev) => {
    if (nodoFijadoMapa !== null) return;
    const g = nodoDe(ev);
    if (!g) return;
    const haciaOtro = ev.relatedTarget && ev.relatedTarget.closest && ev.relatedTarget.closest("[data-nodo-idx]");
    if (haciaOtro) return;
    limpiarExploracionMapa(svgEl);
    if (alExplorarNodo) alExplorarNodo(null);
  });

  svgEl.addEventListener("click", (ev) => {
    const g = nodoDe(ev);
    if (!g) { soltarFijadoMapa(svgEl); return; }
    const i = idxDe(g);
    if (nodoFijadoMapa === i) { soltarFijadoMapa(svgEl); return; }
    nodoFijadoMapa = i;
    explorarNodoMapa(svgEl, i);
    if (alFijarNodo && mapaEnPantalla) {
      const n = mapaEnPantalla.nodos[i];
      alFijarNodo(n.acorde ? n.acorde.raiz + (n.acorde.calidad || "") : null);
    }
  });

  svgEl.addEventListener("keydown", (ev) => {
    if (ev.key === "Escape") { soltarFijadoMapa(svgEl); return; }
    if (ev.key !== "Enter" && ev.key !== " ") return;
    const g = nodoDe(ev);
    if (!g) return;
    ev.preventDefault();
    nodoFijadoMapa = idxDe(g);
    explorarNodoMapa(svgEl, nodoFijadoMapa);
    if (alFijarNodo && mapaEnPantalla) {
      const n = mapaEnPantalla.nodos[nodoFijadoMapa];
      alFijarNodo(n.acorde ? n.acorde.raiz + (n.acorde.calidad || "") : null);
    }
  });
}

/* ============ el dibujo ============ */
function renderMapaPropio(mapa, svgEl) {
  nodoFijadoMapa = null;
  svgEl.innerHTML = "";
  svgEl.setAttribute("viewBox", `0 0 ${LIENZO.w} ${LIENZO.h}`);
  asegurarDefs(svgEl);

  const nodos = construirNodos(mapa);

  // hijos por índice, para el layout de árbol y para las flechas
  const salientes = new Map();
  (mapa.conexiones_flechas || []).forEach((c) => {
    const i = indiceDeNucleo(nodos, c.origen);
    const j = indiceDeNucleo(nodos, c.destino);
    if (i < 0 || j < 0 || i === j) return;
    if (!salientes.has(i)) salientes.set(i, []);
    salientes.get(i).push({ destino: j, tipo: c.tipo });
  });
  const hijos = new Map();
  salientes.forEach((lista, i) => hijos.set(i, lista.map((s) => s.destino)));

  const posiciones = posicionesDelMapa(mapa, nodos, hijos);
  const n = nodos.length;
  const radio = n <= 4 ? 42 : n <= 7 ? 37 : n <= 11 ? 32 : n <= 16 ? 27 : 23;
  const fuenteNombre = n <= 7 ? 16 : n <= 11 ? 14 : n <= 16 ? 12 : 10.5;
  const fuenteNotas = n <= 11 ? 9 : 8;

  const primerAcorde = nodos.find((x) => x.acorde);
  const tonicaSemi = primerAcorde ? INDICE_NOTA[primerAcorde.acorde.raiz] : undefined;
  mapaEnPantalla = { nodos, posiciones, radio, salientes, tonicaSemi };

  // la telaraña va primero: es el papel sobre el que se dibuja el resto
  const capaTela = crearSVGEl("g", { class: "sh-capa-tela" });
  const capaFlechas = crearSVGEl("g", { class: "sh-capa-flechas" });
  const capaNodos = crearSVGEl("g", { class: "sh-capa-nodos" });
  svgEl.appendChild(capaTela);
  svgEl.appendChild(capaFlechas);
  svgEl.appendChild(capaNodos);

  const esqueleto = posiciones.esqueleto || { trazos: [], aros: [] };
  esqueleto.aros.forEach((a) => {
    capaTela.appendChild(crearSVGEl("circle", {
      cx: a.cx, cy: a.cy, r: a.r, fill: "none", class: "sh-tela-aro",
    }));
  });
  esqueleto.trazos.forEach((t) => {
    capaTela.appendChild(crearSVGEl("path", {
      d: t.d, fill: "none", class: `sh-tela sh-tela-${t.tipo}`,
    }));
  });

  // --- flechas del mapa ---
  const vistoPar = new Map();
  salientes.forEach((lista, i) => {
    lista.forEach(({ destino: j, tipo }) => {
      const clave = `${i}-${j}`;
      const repetido = vistoPar.get(clave) || 0;
      vistoPar.set(clave, repetido + 1);

      const p1 = posiciones[i], p2 = posiciones[j];
      const mx = (p1.x + p2.x) / 2, my = (p1.y + p2.y) / 2;
      const dist = Math.hypot(p2.x - p1.x, p2.y - p1.y) || 1;
      const nx = -(p2.y - p1.y) / dist, ny = (p2.x - p1.x) / dist;
      const curva = Math.min(dist * 0.13, 44) + repetido * 26;
      const cx = mx + nx * curva, cy = my + ny * curva;

      const ini = bordeDesde(p1, radio + 3, { x: cx, y: cy });
      const fin = bordeDesde(p2, radio + 11, { x: cx, y: cy });
      const color = nodos[i].color;

      const path = crearSVGEl("path", {
        d: `M ${ini.x} ${ini.y} Q ${cx} ${cy} ${fin.x} ${fin.y}`,
        class: "sh-flecha", stroke: color, fill: "none",
      });
      const t = crearSVGEl("title", {});
      t.textContent = `${nodos[i].etiqueta} → ${nodos[j].etiqueta}${tipo ? " · " + tipo : ""}`;
      path.appendChild(t);
      capaFlechas.appendChild(path);

      const ang = Math.atan2(fin.y - cy, fin.x - cx);
      capaFlechas.appendChild(flechaPolígono(fin, ang, 10, color));
    });
  });

  // --- nodos ---
  nodos.forEach((nodo, i) => {
    const p = posiciones[i];
    const g = crearSVGEl("g", {
      class: "sh-nodo sh-nodo-activo",
      tabindex: "0", role: "button",
      "data-nodo-idx": String(i),
    });
    g.appendChild(crearSVGEl("circle", {
      cx: p.x, cy: p.y, r: radio,
      class: "sh-nodo-circulo", stroke: nodo.color,
    }));

    const charsAdentro = Math.max(3, Math.floor((radio * 1.75) / (fuenteNombre * 0.56)));
    const nombreCorto = nodo.acorde
      ? nodo.acorde.raiz + (nodo.acorde.calidad || "")
      : truncar(nodo.etiqueta, charsAdentro);

    const texto = crearSVGEl("text", {
      x: p.x, y: p.y + fuenteNombre * 0.35,
      class: "sh-nodo-texto",
      "font-size": nodo.acorde
        ? fuenteNombre
        : Math.min(fuenteNombre, (radio * 3.2) / Math.max(nombreCorto.length, 1)),
      fill: nodo.color,
    });
    texto.textContent = nombreCorto;
    g.appendChild(texto);

    const charsAbajo = Math.max(8, Math.floor((radio * 2.8) / (fuenteNotas * 0.56)));
    let lineas = [];
    if (nodo.acorde && nodo.acorde.notas && nodo.acorde.notas.length) {
      lineas = [nodo.acorde.notas.join(" ") + (nodo.acorde.bajo ? ` /${nodo.acorde.bajo}` : "")];
    } else if (nodo.etiqueta.length > nombreCorto.replace("…", "").length) {
      lineas = envolverTexto(nodo.etiqueta, charsAbajo, 3);
    }
    lineas.forEach((linea, li) => {
      const sub = crearSVGEl("text", {
        x: p.x, y: p.y + radio + fuenteNotas + 6 + li * (fuenteNotas + 3),
        class: "sh-nodo-notas", "font-size": fuenteNotas,
      });
      sub.textContent = linea;
      g.appendChild(sub);
    });

    const tip = crearSVGEl("title", {});
    tip.textContent = nodo.etiqueta;
    g.appendChild(tip);
    capaNodos.appendChild(g);
  });

  engancharInteraccionMapa(svgEl);
  return nodos;
}

/* Punto de entrada. `modo` viene de la app: "mapa" (por defecto) o
   "rueda" (el círculo de quintas completo, como referencia). */
function renderMapa(mapa, svgEl, modo) {
  if (modo === "rueda" && typeof mapaEsArmonico === "function" && mapaEsArmonico(mapa)) {
    return renderRuedaCompleta(mapa, svgEl);
  }
  return renderMapaPropio(mapa, svgEl);
}
