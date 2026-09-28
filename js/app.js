/* ============ The Essence of Sound — app ============ */

const COLECCION_NOMBRE = {
  armonia: "Armonía & Jazz",
  country: "Country & Guitar Licks",
  western: "Dark Western",
};

const estado = {
  coleccion: "todas",
  busqueda: "",
  mapaActivo: null,
  pagina: 0,      // la grilla de mapas va de a diez
  tonica: null,   // a qué tonalidad está transportado el mapa abierto
  modo: "mapa",   // "mapa" = la forma propia del mapa · "rueda" = círculo de quintas
};

const $ = (sel, root) => (root || document).querySelector(sel);
const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));

function normalizar(s) {
  return String(s)
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase();
}


/* ============ a qué estilo pertenece cada mapa ============
   Los 67 mapas no vienen etiquetados por género, pero sus nombres,
   propósitos y sensaciones lo dicen ("Jazz / Fusion", "Blues / Rock",
   "Suspenso / Terror"). Acá se leen esas pistas para poder filtrar por
   lo que uno va a tocar, en vez de por la colección de la que salieron.

   Es una clasificación por palabras, o sea aproximada: un mapa puede
   caer en varios géneros, y alguno puede quedar sólo en "otros". */
const ESTILOS_MAPA = {
  jazz:     { nombre: "Jazz", claves: ["jazz", "bebop", "swing", "coltrane", "fusion", "modal", "ii-v", "tritonal", "cuartal", "voces abiertas", "upper structure", "politonal"] },
  blues:    { nombre: "Blues", claves: ["blues", "doce compases", "12 compases", "turnaround", "shuffle"] },
  rock:     { nombre: "Rock", claves: ["rock", "psicodélic", "pink floyd", "santana", "hendrix", "power", "quintas abiertas", "post-rock", "neoclásic"] },
  pop:      { nombre: "Pop", claves: ["pop", "j-pop", "anime", "balada", "comercial", "royal", "elton", "estribillo"] },
  metal:    { nombre: "Metal & oscuro", claves: ["metal", "terror", "suspenso", "oscur", "disminuid", "clúster", "cluster", "pánico", "demonía", "maldición", "tritono", "locrio", "alterada"] },
  country:  { nombre: "Country & folk", claves: ["country", "bluegrass", "folk", "banjo", "pedal steel", "chicken", "twang", "honky", "americana", "tejano", "nórdico", "vikingo"] },
  western:  { nombre: "Dark Western", claves: ["western", "morricone", "desierto", "forajido", "duelo", "gótico", "vaquero", "pueblo fantasma", "horca"] },
  cine:     { nombre: "Cine & épica", claves: ["cine", "épic", "epic", "fantasía", "aventura", "banda sonora", "zimmer", "mediante", "heroic", "monumental", "thriller", "flashback"] },
  clasico:  { nombre: "Clásico & barroco", claves: ["barroc", "clásic", "renacent", "folia", "sacra", "coral", "operístic", "napolitana", "sexta aumentada", "retardo", "contrapunto", "contrario", "sinfónic"] },
  soul:     { nombre: "Soul, funk & R&B", claves: ["soul", "funk", "gospel", "r&b", "neo-soul", "disco", "groove", "slap", "sensual", "plagal"] },
  ambient:  { nombre: "Ambient & electrónica", claves: ["edm", "sintetizador", "ambient", "etére", "ingravidez", "meditat", "impresionis", "debussy", "sueño", "flotabilidad", "pentatónic", "suspendid", "sus2", "sus4", "hipnosis", "trance"] },
};

/* Devuelve los estilos de un mapa, leyendo sus textos. */
function estilosDelMapa(mapa) {
  const texto = quitarAcentos([
    tm(mapa.key, "nombre", mapa.nombre), tm(mapa.key, "proposito", mapa.proposito),
    tm(mapa.key, "sensacion_emocional", mapa.sensacion_emocional),
    mapa.geometria, tm(mapa.key, "tecnica_o_ejecucion", mapa.tecnica_o_ejecucion || ""),
  ].join(" ")).toLowerCase();

  const encontrados = Object.keys(ESTILOS_MAPA).filter((id) =>
    ESTILOS_MAPA[id].claves.some((k) => texto.includes(quitarAcentos(k).toLowerCase()))
  );

  // la colección de origen también cuenta, y el prefijo del key: los mapas
  // de la tanda de blues son de blues aunque el texto no repita la palabra
  const pistas = [mapa.coleccion, String(mapa.key || "").split("-")[0]];
  pistas.forEach((p) => {
    if (ESTILOS_MAPA[p] && !encontrados.includes(p)) encontrados.push(p);
  });

  return encontrados.length ? encontrados : ["otros"];
}

/* Se calcula una vez y queda cacheado en el propio mapa. */
function cacheEstilosDeMapas() {
  MAPAS_ARMONICOS.forEach((m) => { m._estilos = estilosDelMapa(m); });
}

function coincideBusqueda(mapa, termino) {
  if (!termino) return true;
  const t = normalizar(termino);
  const campos = [
    tm(mapa.key, "nombre", mapa.nombre),
    tm(mapa.key, "proposito", mapa.proposito),
    tm(mapa.key, "sensacion_emocional", mapa.sensacion_emocional),
    mapa.geometria,
    (mapa.nodos_principales || []).join(" "),
  ];
  return campos.some((c) => c && normalizar(c).includes(t));
}

function mapasFiltrados() {
  return MAPAS_ARMONICOS.filter((m) => {
    if (estado.coleccion !== "todas" && !(m._estilos || []).includes(estado.coleccion)) return false;
    return coincideBusqueda(m, estado.busqueda);
  });
}


/* El símbolo de la carta de un mapa sale de su propia geometría: si el
   mapa dice ser un embudo, la carta dibuja un embudo. */
const SIMBOLOS_GEOMETRIA = {
  circulo:    `<circle cx="50" cy="50" r="34" class="sim-fig"/><circle cx="50" cy="50" r="18" class="sim-aro"/><circle cx="50" cy="16" r="5" class="sim-fig sim-relleno"/>`,
  estrella:   `<circle cx="50" cy="50" r="34" class="sim-aro"/><circle cx="50" cy="50" r="9" class="sim-fig sim-relleno"/><g class="sim-linea"><path d="M50 41 L50 16"/><path d="M58 55 L80 68"/><path d="M42 55 L20 68"/><path d="M57 45 L79 32"/><path d="M43 45 L21 32"/><path d="M50 59 L50 84"/></g>`,
  grilla:     `<g class="sim-fig"><rect x="18" y="18" width="64" height="64" rx="2"/></g><g class="sim-linea"><path d="M39 18 L39 82"/><path d="M61 18 L61 82"/><path d="M18 39 L82 39"/><path d="M18 61 L82 61"/></g>`,
  triangulo:  `<circle cx="50" cy="50" r="36" class="sim-aro"/><path d="M50 16 L81 70 L19 70 Z" class="sim-fig"/><circle cx="50" cy="52" r="7" class="sim-fig sim-relleno"/>`,
  diamante:   `<circle cx="50" cy="50" r="36" class="sim-aro"/><path d="M50 14 L82 50 L50 86 L18 50 Z" class="sim-fig"/><path d="M18 50 L82 50 M50 14 L50 86" class="sim-linea"/>`,
  hexagono:   `<path d="M50 14 L81 32 L81 68 L50 86 L19 68 L19 32 Z" class="sim-fig"/><circle cx="50" cy="50" r="13" class="sim-aro"/>`,
  pentagono:  `<path d="M50 14 L84 39 L71 79 L29 79 L16 39 Z" class="sim-fig"/><circle cx="50" cy="52" r="12" class="sim-aro"/>`,
  octagono:   `<path d="M36 16 L64 16 L84 36 L84 64 L64 84 L36 84 L16 64 L16 36 Z" class="sim-fig"/><circle cx="50" cy="50" r="14" class="sim-aro"/>`,
  cascada:    `<g class="sim-fig"><path d="M22 20 L48 20 L48 44 L74 44 L74 68 L48 68"/></g><g class="sim-linea"><circle cx="22" cy="20" r="5"/><circle cx="48" cy="44" r="5"/><circle cx="74" cy="68" r="5"/></g>`,
  espiral:    `<path d="M50 50 m0 -6 a6 6 0 1 1 -6 6 a12 12 0 1 0 12 -12 a20 20 0 1 1 -20 20 a30 30 0 1 0 30 -30" class="sim-fig"/>`,
  cruz:       `<circle cx="50" cy="50" r="36" class="sim-aro"/><path d="M50 14 L50 86 M14 50 L86 50" class="sim-fig"/><circle cx="50" cy="50" r="8" class="sim-fig sim-relleno"/>`,
  embudo:     `<path d="M16 20 L84 20 L56 58 L56 84 L44 84 L44 58 Z" class="sim-fig"/><path d="M28 20 L72 20" class="sim-linea sim-grueso"/>`,
  arbol:      `<g class="sim-fig"><path d="M50 18 L50 38"/><path d="M26 62 L50 38 L74 62"/><path d="M26 62 L26 78 M74 62 L74 78"/></g><g class="sim-linea"><circle cx="50" cy="18" r="5"/><circle cx="26" cy="78" r="5"/><circle cx="74" cy="78" r="5"/></g>`,
  espejo:     `<path d="M50 12 L50 88" class="sim-linea sim-grueso"/><g class="sim-fig"><path d="M38 26 L18 50 L38 74"/><path d="M62 26 L82 50 L62 74"/></g>`,
  piramide:   `<g class="sim-fig"><path d="M50 16 L68 42 L32 42 Z"/><path d="M32 46 L86 46 L68 72 L14 72 Z"/></g>`,
  nube:       `<g class="sim-fig"><circle cx="50" cy="50" r="7"/><circle cx="30" cy="38" r="5"/><circle cx="70" cy="40" r="5"/><circle cx="36" cy="68" r="5"/><circle cx="68" cy="66" r="5"/><circle cx="50" cy="24" r="4"/><circle cx="22" cy="56" r="4"/><circle cx="80" cy="58" r="4"/></g>`,
  linea:      `<path d="M12 50 L88 50" class="sim-fig"/><g class="sim-linea"><circle cx="20" cy="50" r="6"/><circle cx="40" cy="50" r="6"/><circle cx="60" cy="50" r="6"/><circle cx="80" cy="50" r="6"/></g>`,
  onda:       `<path d="M12 50 Q26 20 40 50 T68 50 T88 50" class="sim-fig"/><path d="M12 68 L88 68" class="sim-linea"/>`,
  concentrico:`<circle cx="50" cy="50" r="36" class="sim-aro"/><circle cx="50" cy="50" r="24" class="sim-fig"/><circle cx="50" cy="50" r="12" class="sim-fig"/><circle cx="50" cy="50" r="4" class="sim-fig sim-relleno"/>`,
};

function simboloDeMapa(mapa) {
  const g = typeof detectarGeometria === "function" ? detectarGeometria(mapa.geometria) : "circulo";
  return SIMBOLOS_GEOMETRIA[g] || SIMBOLOS_GEOMETRIA.circulo;
}

/* El color de la carta sale del primer color del propio mapa. */
function acentoDeMapa(mapa) {
  const cols = Object.values(mapa.esquema_colores || {});
  return cols[0] || "#5be8d8";
}

const POR_PAGINA = 10;

function pintarGrilla() {
  const lista = mapasFiltrados();
  const grilla = $("#grilla-mapas");
  const vacio = $("#vacio");
  const nav = $("#paginacion");

  if (!lista.length) {
    grilla.innerHTML = "";
    nav.hidden = true;
    vacio.classList.remove("oculto");
    return;
  }
  vacio.classList.add("oculto");

  const totalPaginas = Math.max(1, Math.ceil(lista.length / POR_PAGINA));
  if (estado.pagina >= totalPaginas) estado.pagina = totalPaginas - 1;
  if (estado.pagina < 0) estado.pagina = 0;
  const desde = estado.pagina * POR_PAGINA;
  const pagina = lista.slice(desde, desde + POR_PAGINA);

  grilla.innerHTML = pagina.map((m, i) => `
    <button class="carta-tarot carta-mapa" data-key="${m.key}" style="--acento-estilo:${acentoDeMapa(m)}">
      <span class="carta-marco" aria-hidden="true"></span>
      <span class="carta-numero">${desde + i + 1}</span>
      <span class="carta-simbolo">
        <svg viewBox="0 0 100 100" aria-hidden="true">${simboloDeMapa(m)}</svg>
      </span>
      <span class="carta-nombre carta-nombre-mapa">${tm(m.key, "nombre", m.nombre)}</span>
      <span class="carta-resumen">${tm(m.key, "sensacion_emocional", m.sensacion_emocional) || tm(m.key, "proposito", m.proposito) || ""}</span>
      <span class="carta-pie">${m.geometria || ""}</span>
    </button>
  `).join("");

  $$(".carta-mapa", grilla).forEach((b) => {
    b.addEventListener("click", () => abrirMapa(b.dataset.key));
  });

  // paginación: de a diez, con el rango a la vista
  nav.hidden = totalPaginas <= 1;
  $("#pag-info").textContent =
    `${desde + 1}–${Math.min(desde + POR_PAGINA, lista.length)} de ${lista.length}`;
  $("#pag-anterior").disabled = estado.pagina === 0;
  $("#pag-siguiente").disabled = estado.pagina >= totalPaginas - 1;
  $("#pag-puntos").innerHTML = Array.from({ length: totalPaginas }, (_, p) =>
    `<button class="pag-punto${p === estado.pagina ? " activo" : ""}" data-pag="${p}" title="Página ${p + 1}"></button>`
  ).join("");
  $$(".pag-punto", nav).forEach((b) => {
    b.addEventListener("click", () => { estado.pagina = Number(b.dataset.pag); pintarGrilla(); subirAGrilla(); });
  });
}

function subirAGrilla() {
  const b = $("#vista-explorar").getBoundingClientRect();
  if (b.top < 0) window.scrollTo({ top: window.scrollY + b.top - 12, behavior: "smooth" });
}

function cambiarPagina(paso) {
  estado.pagina += paso;
  pintarGrilla();
  subirAGrilla();
}

/* Los chips ahora son por estilo musical, que es como uno decide qué va a
   tocar — no por la colección de la que salió el mapa. */
function armarChipsEstilo() {
  const cont = $("#chips-coleccion");
  const cuenta = { todas: MAPAS_ARMONICOS.length };
  Object.keys(ESTILOS_MAPA).forEach((id) => { cuenta[id] = 0; });
  cuenta.otros = 0;
  MAPAS_ARMONICOS.forEach((m) => (m._estilos || []).forEach((e) => { cuenta[e] = (cuenta[e] || 0) + 1; }));

  const chip = (id, nombre) =>
    `<button class="chip${estado.coleccion === id ? " activo" : ""}" data-col="${id}">${nombre} <span class="chip-n">${cuenta[id] || 0}</span></button>`;

  cont.innerHTML = chip("todas", "Todos") +
    Object.entries(ESTILOS_MAPA)
      .filter(([id]) => cuenta[id] > 0)
      .map(([id, e]) => chip(id, t("estilosMapa." + id) || e.nombre)).join("") +
    (cuenta.otros > 0 ? chip("otros", "Otros") : "");

  $$(".chip", cont).forEach((c) => {
    c.addEventListener("click", () => {
      estado.coleccion = c.dataset.col;
      estado.pagina = 0;
      armarChipsEstilo();
      pintarGrilla();
    });
  });
}

/* --- vista de detalle --- */
/* Las claves del esquema de colores vienen sin acentos (son identificadores).
   Esta tabla los devuelve para que la leyenda no diga "Sustitucion Tritonal". */
const ACENTOS_LEYENDA = {
  tonica: "tónica", dominante: "dominante", subdominante: "subdominante",
  sustitucion: "sustitución", tritonal: "tritonal", tension: "tensión",
  resolucion: "resolución", armonica: "armónica", cromatica: "cromática",
  cromatico: "cromático", modulacion: "modulación", disminuido: "disminuido",
  mediante: "mediante", frigio: "frigio", modal: "modal", pedal: "pedal",
  septima: "séptima", novena: "novena", quinta: "quinta", tercera: "tercera",
  menor: "menor", mayor: "mayor", suspension: "suspensión", pivote: "pivote",
  prestamo: "préstamo", secundaria: "secundaria", relativo: "relativo",
  cadencia: "cadencia", tonico: "tónico", dominantes: "dominantes",
  tensiones: "tensiones", color: "color", puente: "puente", paso: "paso",
};

function etiquetaColor(clave) {
  return String(clave)
    .split("_")
    .map((p) => t("leyenda." + p.toLowerCase()) !== "leyenda." + p.toLowerCase() ? t("leyenda." + p.toLowerCase()) : (ACENTOS_LEYENDA[p.toLowerCase()] || p))
    .join(" ");
}

function abrirMapa(key) {
  const mapa = MAPAS_ARMONICOS.find((m) => m.key === key);
  if (!mapa) return;
  estado.mapaActivo = key;
  estado.tonica = tonicaOriginal(mapa);
  estado.modo = "mapa";
  $$(".vista-btn").forEach((b) => b.classList.toggle("activo", b.dataset.modo === "mapa"));
  armarSelectorTonica(mapa);

  // el encabezado muestra los estilos donde entra el mapa, no la tanda de
  // origen: "armonía" no le dice nada a alguien que busca blues o metal
  const estilos = (mapa._estilos || estilosDelMapa(mapa))
    .map((e) => (ESTILOS_MAPA[e] ? t("estilosMapa." + e) : null))
    .filter(Boolean);
  $("#d-coleccion").textContent = estilos.length
    ? estilos.join(" · ")
    : COLECCION_NOMBRE[mapa.coleccion] || "";
  $("#d-nombre").textContent = tm(mapa.key, "nombre", mapa.nombre);
  $("#d-geometria").textContent = mapa.geometria || "";
  $("#d-proposito").textContent = tm(mapa.key, "proposito", mapa.proposito) || "";
  $("#d-sensacion").textContent = tm(mapa.key, "sensacion_emocional", mapa.sensacion_emocional) || "";

  const tecWrap = $("#bloque-tecnica-wrap");
  if (mapa.tecnica_o_ejecucion) {
    tecWrap.hidden = false;
    $("#d-tecnica").textContent = tm(mapa.key, "tecnica_o_ejecucion", mapa.tecnica_o_ejecucion);
  } else {
    tecWrap.hidden = true;
  }

  const leyenda = $("#leyenda-colores");
  leyenda.innerHTML = Object.entries(mapa.esquema_colores || {})
    .map(([nombre, color]) => `
      <span class="leyenda-item">
        <span class="leyenda-punto" style="--c:${color}"></span>
        ${etiquetaColor(nombre)}
      </span>
    `)
    .join("");

  dibujarGrafoYRecorrido();

  cambiarVista("detalle");
  window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
}

/* El mapa tal como hay que mostrarlo ahora: en la tonalidad elegida. */
function mapaEnUso() {
  const base = MAPAS_ARMONICOS.find((m) => m.key === estado.mapaActivo);
  if (!base) return null;
  return estado.tonica ? transportarMapa(base, estado.tonica) : base;
}

function dibujarGrafoYRecorrido() {
  const mapa = mapaEnUso();
  if (!mapa) return;

  const conWrap = $("#bloque-conexiones-wrap");
  const lista = $("#lista-conexiones");
  if (mapa.conexiones_flechas && mapa.conexiones_flechas.length) {
    conWrap.hidden = false;
    lista.innerHTML = mapa.conexiones_flechas
      .map((c) => `<li><strong>${c.origen} → ${c.destino}</strong><br>${c.tipo || ""}</li>`)
      .join("");
  } else {
    conWrap.hidden = true;
  }

  $("#bloque-explorar-wrap").hidden = true;
  // el panel de "cómo tocar" ahora es un modal: si quedó abierto de un
  // acorde anterior, se cierra al cambiar de mapa o de tonalidad
  mostrarComoTocar(null);
  renderMapa(mapa, $("#svg-grafo"), estado.modo);
  $("#grafo-pista").hidden = false;
}

/* --- selector de tonalidad --- */
function armarSelectorTonica(mapa) {
  const original = tonicaOriginal(mapa);
  // si el mapa está en menor, las opciones se muestran como "Gm": es la
  // tonalidad que vas a escuchar, no sólo el nombre de la nota
  const sufijo = mapaEsMenor(mapa) ? "m" : "";
  const sel = $("#sel-tonica");
  sel.innerHTML = NOMBRES_TONALIDAD
    .map((t) => `<option value="${t}"${t === original ? " selected" : ""}>${t}${sufijo}</option>`)
    .join("");
  $("#tonica-original").textContent = `escrito en ${original}${sufijo}`;
}

/* --- navegación entre vistas --- */
function cambiarVista(nombre) {
  $$(".vista").forEach((v) => v.classList.add("oculto"));
  $(`#vista-${nombre}`).classList.remove("oculto");
  $$(".nav-btn").forEach((b) => b.classList.remove("activo"));
  // las vistas de detalle iluminan el botón de su sección padre
  const padre = { detalle: "explorar", estilo: "estilos" }[nombre] || nombre;
  const navBtn = $(`.nav-btn[data-vista="${padre}"]`);
  if (navBtn) navBtn.classList.add("activo");
  $("#cabecera").classList.toggle("compacta", nombre !== "estilos");
}

/* El panel de "desde este acorde podés ir a…" lo llena la rueda cuando el
   usuario pasa por un nodo; con null, se cierra. */
function mostrarMovimientos(info) {
  const wrap = $("#bloque-explorar-wrap");
  if (!info) { wrap.hidden = true; return; }
  wrap.hidden = false;
  $("#d-explorar-acorde").textContent = info.origen.etiquetaFijada || info.origen.etiqueta;
  $("#d-explorar-grado").textContent = info.origen.grado ? `(${info.origen.grado})` : "";

  // si el mapa usa un cifrado más rico en ese lugar (Cmaj7 en vez de C),
  // mostramos ese, para que la lista diga lo mismo que la rueda
  const fila = (m) => `
    <li>
      <span class="mov-punto" style="--c:${m.color}"></span>
      <span class="mov-acorde" style="color:${m.color}">${m.nodo.etiquetaFijada || m.nodo.etiqueta}</span>
      <span class="mov-cuerpo">
        ${m.grado ? `<span class="mov-grado">${m.grado}</span>` : ""}
        <span class="mov-razon">${m.etiqueta}</span>
      </span>
    </li>`;

  const partes = [];
  if (info.propios.length) {
    partes.push(`<li class="mov-titulo">${t("detalle.enEsteMapa")}</li>`);
    partes.push(info.propios.map(fila).join(""));
  }
  if (info.generales.length) {
    partes.push(`<li class="mov-titulo">${t("detalle.otrosCaminos")}</li>`);
    partes.push(info.generales.map(fila).join(""));
  }
  $("#lista-movimientos").innerHTML = partes.join("");
}

/* --- cómo se toca el acorde: modal que se abre al click --- */
const instrumento = {
  cifrado: null,
  diagramas: null,
  activo: "guitarra",
  mostrar: "notas",
  escala: "",              // "" = sólo el acorde, sin escala encima
  emocion: "",             // "" = el acorde como está, sin recolorear
  posicion: { guitarra: 0, bajo: 0 },
};

function pintarInstrumento() {
  const cont = $("#instrumento-diagrama");
  const pie = $("#instrumento-pie");
  if (!instrumento.diagramas) { cont.innerHTML = ""; pie.hidden = true; return; }

  const inst = instrumento.activo;
  const svg = dibujarPosicion(
    instrumento.diagramas, inst, instrumento.posicion[inst] || 0,
    instrumento.mostrar, instrumento.escala || null
  );
  cont.innerHTML = svg
    || `<p class="instrumento-vacio">${t("modalInstrumento.vacio")}</p>`;

  // el piano no tiene posiciones que recorrer, y tampoco afinación
  const lista = instrumento.diagramas[inst];
  const hayPosiciones = Array.isArray(lista) && lista.length > 0;
  pie.hidden = !svg;
  $("#posiciones-nav").hidden = !hayPosiciones;
  $("#ctrl-afinacion").hidden = inst === "piano";
  $("#leyenda-papeles").hidden = !instrumento.escala;

  if (hayPosiciones) {
    const i = Math.min(instrumento.posicion[inst] || 0, lista.length - 1);
    const traste = lista[i].trasteBase;
    const dondeEmpieza = traste <= 1 ? t("modalInstrumento.posicionAbierta") : `${t("modalInstrumento.traste")} ${traste}`;
    $("#pos-info").textContent = `${dondeEmpieza} · ${i + 1} ${t("modalInstrumento.de")} ${lista.length}`;
    $("#pos-anterior").disabled = i === 0;
    $("#pos-siguiente").disabled = i >= lista.length - 1;
  }

  pintarExplicacionEscala();
  pintarColorEmocional();
}

/* El texto que explica qué hacer con la escala elegida. */
function pintarExplicacionEscala() {
  const caja = $("#escala-explica");
  if (!instrumento.escala || !instrumento.diagramas) { caja.hidden = true; return; }
  const texto = explicacionDeEscala(
    instrumento.escala, instrumento.diagramas.acorde, instrumento.diagramas.bemoles
  );
  if (!texto) { caja.hidden = true; return; }
  caja.hidden = false;
  caja.innerHTML = `<div class="escala-explica-titulo">Cómo funciona</div><p>${texto}</p>`;
}

/* --- color emocional: qué versión de este acorde suena a X --- */
function armarSelectorEmocion() {
  const sel = $("#sel-emocion");
  sel.innerHTML = `<option value="">${t("modalInstrumento.comoEsta")}</option>` +
    Object.entries(EMOCIONES).map(([id, e]) => `<option value="${id}">${tem(id, "nombre", e.nombre)}</option>`).join("");
  sel.value = instrumento.emocion || "";
}

function pintarColorEmocional() {
  const caja = $("#color-emocional");
  const emoId = instrumento.emocion;
  const acorde = instrumento.diagramas && instrumento.diagramas.acorde;
  if (!emoId || !acorde) { caja.hidden = true; return; }

  const emo = EMOCIONES[emoId];
  const versiones = versionesConColor(acorde, emoId);
  const escalas = escalasConColor(acorde, emoId);
  const ubicacion = dondeUsarloEnElMapa(instrumento.cifrado);

  const chips = versiones.map((v) => `
    <button class="acorde-color" data-cifrado="${v.cifrado}">
      <span class="ac-cifrado">${v.cifrado}</span>
      <span class="ac-notas">${v.notas}</span>
    </button>`).join("");

  const chipsEscalas = escalas.map((id) => `
    <button class="escala-color" data-escala="${id}">${tesc(id, "nombre", ESCALAS[id].nombre)}</button>`).join("");

  const donde = ubicacion && ubicacion.length
    ? `<p class="ce-donde"><b>${t("emocion.enEstaProgresion")}</b> ${t("emocion.deAcaSalisHacia")}
       ${ubicacion.map((u) => `<b>${u.destino}</b>`).join(" y ")}. ${t("emocion.eseEsElLugar")} <b>${instrumento.cifrado}</b> ${t("emocion.yDejaQueElCambio")}
       ${ubicacion.map((u) => u.destino).join(" / ")} ${t("emocion.laResuelva")}</p>`
    : "";

  caja.hidden = false;
  caja.innerHTML = `
    <div class="ce-titulo">${t("emocion.queSuene")} <b>${tem(emoId, "nombre", emo.nombre).toLowerCase()}</b></div>
    <p class="ce-resumen">${tem(emoId, "resumen", emo.resumen)}</p>
    ${versiones.length ? `
      <div class="ce-bloque">
        <div class="ce-rotulo">${t("emocion.tocaAsi")} <span class="ce-pista">${t("emocion.clickVerlo")}</span></div>
        <div class="ce-chips">${chips}</div>
      </div>` : ""}
    ${escalas.length ? `
      <div class="ce-bloque">
        <div class="ce-rotulo">${t("emocion.yEncimaEstasEscalas")}</div>
        <div class="ce-chips">${chipsEscalas}</div>
      </div>` : ""}
    <p class="ce-como"><b>${t("emocion.comoSeToca")}</b> ${tem(emoId, "comoUsar", emo.comoUsar)}</p>
    ${donde}
  `;

  // click en una versión: se abre ese acorde en el mismo modal
  $$(".acorde-color", caja).forEach((b) => {
    b.addEventListener("click", () => cambiarAcordeDelModal(b.dataset.cifrado));
  });
  $$(".escala-color", caja).forEach((b) => {
    b.addEventListener("click", () => {
      instrumento.escala = b.dataset.escala;
      $("#sel-escala").value = b.dataset.escala;
      pintarInstrumento();
    });
  });
}

/* Cambia el acorde que muestra el modal sin cerrarlo (para saltar de C a
   Cmaj9 cuando elegís un color). */
function cambiarAcordeDelModal(cifrado) {
  const d = diagramasDeAcorde(cifrado);
  if (!d) return;
  instrumento.cifrado = cifrado;
  instrumento.diagramas = d;
  instrumento.posicion = { guitarra: 0, bajo: 0 };
  $("#d-instrumento-acorde").textContent = cifrado;
  $("#d-instrumento-notas").textContent = `Notas: ${d.notas}`;
  // las escalas disponibles cambian con el acorde
  const escalaPrevia = instrumento.escala;
  armarSelectorEscalas();
  if (escalaPrevia && escalasParaAcorde(d.acorde).includes(escalaPrevia)) {
    instrumento.escala = escalaPrevia;
    $("#sel-escala").value = escalaPrevia;
  } else {
    instrumento.escala = "";
  }
  pintarInstrumento();
}

/* Las escalas que entran sobre este acorde, en el desplegable. */
function armarSelectorEscalas() {
  const sel = $("#sel-escala");
  const acorde = instrumento.diagramas && instrumento.diagramas.acorde;
  const ids = acorde ? escalasParaAcorde(acorde) : [];
  sel.innerHTML = `<option value="">${t("modalInstrumento.soloElAcorde")}</option>` +
    ids.map((id) => `<option value="${id}">${tesc(id, "nombre", ESCALAS[id].nombre)}</option>`).join("");
  sel.value = instrumento.escala || "";
}

/* Las afinaciones del instrumento activo. */
function armarSelectorAfinacion() {
  const inst = instrumento.activo === "bajo" ? "bajo" : "guitarra";
  const reg = inst === "bajo" ? AFINACIONES_BAJO : AFINACIONES_GUITARRA;
  const sel = $("#sel-afinacion");
  sel.innerHTML = Object.entries(reg)
    .map(([id, a]) => `<option value="${id}">${tafin(inst, id, a.nombre)}</option>`)
    .join("");
  sel.value = afinacionActual[inst];
}

/* Recalcula las digitaciones: hace falta cada vez que cambia la afinación,
   porque las posiciones dependen de cómo estén las cuerdas. */
function recalcularDiagramas() {
  if (!instrumento.cifrado) return;
  const d = diagramasDeAcorde(instrumento.cifrado);
  if (!d) return;
  instrumento.diagramas = d;
  instrumento.posicion = { guitarra: 0, bajo: 0 };
  pintarInstrumento();
}

function abrirModalInstrumento() {
  const modal = $("#modal-instrumento");
  modal.hidden = false;
  requestAnimationFrame(() => modal.classList.add("abierto"));
}

function cerrarModalInstrumento() {
  const modal = $("#modal-instrumento");
  modal.classList.remove("abierto");
  setTimeout(() => { modal.hidden = true; }, 200);
  // el acorde deja de estar fijado en el gráfico
  const svg = $("#svg-grafo");
  if (estado.modo === "rueda" && typeof soltarNodoFijado === "function") soltarNodoFijado(svg);
  else if (typeof soltarFijadoMapa === "function") soltarFijadoMapa(svg);
}

function moverPosicion(paso) {
  const inst = instrumento.activo;
  const lista = instrumento.diagramas && instrumento.diagramas[inst];
  if (!Array.isArray(lista) || !lista.length) return;
  const actual = instrumento.posicion[inst] || 0;
  instrumento.posicion[inst] = Math.max(0, Math.min(lista.length - 1, actual + paso));
  pintarInstrumento();
}

function mostrarComoTocar(cifrado) {
  if (!cifrado) {
    instrumento.cifrado = null;
    instrumento.diagramas = null;
    const modal = $("#modal-instrumento");
    if (!modal.hidden) { modal.classList.remove("abierto"); setTimeout(() => { modal.hidden = true; }, 200); }
    return;
  }

  const diagramas = typeof diagramasDeAcorde === "function" ? diagramasDeAcorde(cifrado) : null;
  if (!diagramas) return;

  instrumento.cifrado = cifrado;
  instrumento.diagramas = diagramas;
  instrumento.posicion = { guitarra: 0, bajo: 0 };
  instrumento.escala = "";
  instrumento.emocion = "";
  $("#d-instrumento-acorde").textContent = cifrado;
  $("#d-instrumento-notas").textContent = `Notas: ${diagramas.notas}`;
  armarSelectorEscalas();
  armarSelectorAfinacion();
  armarSelectorEmocion();
  pintarInstrumento();
  abrirModalInstrumento();
}

/* Como mostrarComoTocar(), pero entrando ya con un color emocional
   elegido — lo usa la sección de Emociones para que al abrir el acorde
   se vea directo el "Que suene…" aplicado, en vez de que el usuario
   tenga que elegirlo de nuevo en el selector. */
function mostrarComoTocarConEmocion(cifrado, emocionId) {
  mostrarComoTocar(cifrado);
  if (!instrumento.diagramas || !EMOCIONES[emocionId]) return;
  instrumento.emocion = emocionId;
  armarSelectorEmocion();
  pintarColorEmocional();
}

/* En Mapas armónicos, fijar un acorde (click o Enter sobre un nodo del
   grafo o de la rueda) además de abrir el modal lo hace sonar una vez
   con piano — así se escucha cómo queda antes de mirar la digitación.
   Sólo acá: el resto de las secciones (Diccionario, Identificar,
   Escalas, Emociones) siguen abriendo el modal en silencio. */
function alFijarNodoConPreviewPiano(cifrado) {
  mostrarComoTocar(cifrado);
  if (!cifrado || !instrumento.diagramas || typeof reproducirAcorde !== "function") return;
  const clases = instrumento.diagramas.info ? instrumento.diagramas.info.clases : [];
  const notasMidi = notasMidiDesdeNombres(clases.map((c) => NOTAS_SOSTENIDOS[c]), 60);
  reproducirAcorde(notasMidi, "piano");
}



/* ============ los símbolos de las cartas ============
   Uno por estilo, en el mismo lenguaje: líneas finas, todo dentro de un
   círculo, simetría. Cada figura dice algo del estilo — los cuatro
   acordes del pop, los doce compases del blues, el tritono del metal —
   así que no son adornos intercambiables. */
const SIMBOLOS = {
  // cuatro acordes girando alrededor de un centro: la rueda del pop
  pop: `
    <circle cx="50" cy="50" r="34" class="sim-aro"/>
    <circle cx="50" cy="16" r="7" class="sim-fig"/>
    <circle cx="84" cy="50" r="7" class="sim-fig"/>
    <circle cx="50" cy="84" r="7" class="sim-fig"/>
    <circle cx="16" cy="50" r="7" class="sim-fig"/>
    <circle cx="50" cy="50" r="10" class="sim-fig sim-relleno"/>
    <path d="M50 26 L50 40 M60 50 L74 50 M50 60 L50 74 M26 50 L40 50" class="sim-linea"/>`,

  // triángulo con el rayo: el empuje del rock
  rock: `
    <circle cx="50" cy="50" r="36" class="sim-aro"/>
    <path d="M50 14 L82 72 L18 72 Z" class="sim-fig"/>
    <path d="M54 30 L40 52 L50 52 L44 72" class="sim-linea sim-grueso"/>`,

  // doce marcas: los doce compases, y la media luna del quejido
  blues: `
    <circle cx="50" cy="50" r="36" class="sim-aro"/>
    <g class="sim-linea">
      <path d="M50 14 L50 22"/><path d="M68 19 L64 26"/><path d="M81 32 L74 36"/>
      <path d="M86 50 L78 50"/><path d="M81 68 L74 64"/><path d="M68 81 L64 74"/>
      <path d="M50 86 L50 78"/><path d="M32 81 L36 74"/><path d="M19 68 L26 64"/>
      <path d="M14 50 L22 50"/><path d="M19 32 L26 36"/><path d="M32 19 L36 26"/>
    </g>
    <path d="M62 30 A24 24 0 1 0 62 70 A19 19 0 1 1 62 30 Z" class="sim-fig sim-relleno"/>`,

  // hexagrama y el tritono que parte la octava al medio
  metal: `
    <circle cx="50" cy="50" r="36" class="sim-aro"/>
    <path d="M50 16 L79 66 L21 66 Z" class="sim-fig"/>
    <path d="M50 84 L21 34 L79 34 Z" class="sim-fig"/>
    <path d="M14 50 L86 50" class="sim-linea sim-grueso"/>`,

  // el sol de rayos rectos: la rueda de carreta
  country: `
    <circle cx="50" cy="50" r="20" class="sim-fig"/>
    <circle cx="50" cy="50" r="36" class="sim-aro"/>
    <g class="sim-linea">
      <path d="M50 8 L50 30"/><path d="M92 50 L70 50"/>
      <path d="M50 92 L50 70"/><path d="M8 50 L30 50"/>
      <path d="M80 20 L64 36"/><path d="M80 80 L64 64"/>
      <path d="M20 80 L36 64"/><path d="M20 20 L36 36"/>
    </g>
    <circle cx="50" cy="50" r="5" class="sim-fig sim-relleno"/>`,

  // el sol poniéndose detrás del horizonte
  western: `
    <circle cx="50" cy="50" r="36" class="sim-aro"/>
    <path d="M26 52 A24 24 0 0 1 74 52 Z" class="sim-fig sim-relleno"/>
    <path d="M12 52 L88 52" class="sim-linea sim-grueso"/>
    <g class="sim-linea">
      <path d="M32 60 L28 72"/><path d="M50 62 L50 76"/><path d="M68 60 L72 72"/>
    </g>`,
};

const ROMANOS = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"];

/* ============ vista de estilos ============ */
function pintarGrillaEstilos() {
  const cont = $("#grilla-estilos");
  cont.innerHTML = Object.entries(ESTILOS).map(([id, e], i) => `
    <button class="carta-tarot" data-estilo="${id}" style="--acento-estilo:${e.acento}">
      <span class="carta-marco" aria-hidden="true"></span>
      <span class="carta-numero">${ROMANOS[i] || i + 1}</span>
      <span class="carta-simbolo">
        <svg viewBox="0 0 100 100" aria-hidden="true">${SIMBOLOS[id] || ""}</svg>
      </span>
      <span class="carta-nombre">${teEstilo(id, "nombre", e.nombre)}</span>
      <span class="carta-resumen">${teEstilo(id, "resumen", e.resumen)}</span>
      <span class="carta-pie">${e.progresiones.length} ${t("estilosVista.progresionesCuenta")} · ${e.licks.length} ${t(e.licks.length > 1 ? "estilosVista.licks" : "estilosVista.lick")}</span>
    </button>
  `).join("");
  $$(".carta-tarot", cont).forEach((b) => {
    b.addEventListener("click", () => abrirEstilo(b.dataset.estilo));
  });
}

function abrirEstilo(id) {
  const e = ESTILOS[id];
  if (!e) return;
  estado.estiloActivo = id;

  $("#e-nombre").textContent = teEstilo(id, "nombre", e.nombre);
  $("#e-resumen").textContent = teEstilo(id, "resumen", e.resumen);
  $("#vista-estilo").style.setProperty("--acento-estilo", e.acento);

  const progresiones = e.progresiones.map((p, i) => `
    <div class="prog">
      <div class="prog-grados">${p.grados}</div>
      <div class="prog-ejemplo">${p.ejemplo.split(" – ").map((a) =>
        `<button class="prog-acorde" data-cifrado="${a.trim()}">${a.trim()}</button>`).join('<span class="prog-flecha">→</span>')}</div>
      <p class="prog-nota">${te(id, "progresiones", i, "nota", p.nota)}</p>
    </div>`).join("");

  const acordes = e.acordes.map((a) =>
    `<button class="acorde-chip" data-cifrado="${a}">${a}</button>`).join("");

  const escalas = e.escalas.filter((s) => ESCALAS[s]).map((s) => `
    <div class="escala-item">
      <div class="escala-item-nombre">${tesc(s, "nombre", ESCALAS[s].nombre)}</div>
      <p class="escala-item-sabor">${tesc(s, "sabor", ESCALAS[s].sabor)}</p>
    </div>`).join("");

  const transiciones = e.transiciones.map((tr, i) => `
    <div class="trans">
      <div class="trans-mov"><b>${tr.de}</b> <span class="trans-flecha">→</span> <b>${tr.a}</b>
        <span class="trans-como">${te(id, "transiciones", i, "como", tr.como)}</span></div>
      <p class="trans-porque">${te(id, "transiciones", i, "porque", tr.porque)}</p>
    </div>`).join("");

  const licks = e.licks.map((l, i) => `
    <div class="lick">
      <div class="lick-cima">
        <div class="lick-nombre">${te(id, "licks", i, "nombre", l.nombre)}</div>
        <div class="lick-escala">${l.raiz} · ${ESCALAS[l.escala] ? tesc(l.escala, "nombre", ESCALAS[l.escala].nombre) : l.escala}</div>
      </div>
      <p class="lick-nota">${te(id, "licks", i, "nota", l.nota)}</p>
      <div class="lick-tab">${svgTablatura(l, AFINACION_GUITARRA)}</div>
      <div class="lick-notas">Notas: ${notasDelLick(l, AFINACION_GUITARRA).map((c) => NOTAS_BEMOLES[c]).join(" · ")}</div>
    </div>`).join("");

  $("#e-cuerpo").innerHTML = `
    <div class="estilo-col">
      <section class="bloque">
        <div class="bloque-titulo">${t("estilosVista.progresiones")}</div>
        <p class="bloque-pista">${t("estilosVista.progresionesPista")}</p>
        ${progresiones}
      </section>
      <section class="bloque">
        <div class="bloque-titulo">${t("estilosVista.licksTitulo")}</div>
        <p class="bloque-pista">${t("estilosVista.licksPista")}</p>
        ${licks}
      </section>
    </div>
    <div class="estilo-col">
      <section class="bloque">
        <div class="bloque-titulo">${t("estilosVista.acordesDelEstilo")}</div>
        <div class="acorde-chips">${acordes}</div>
      </section>
      <section class="bloque">
        <div class="bloque-titulo">${t("estilosVista.escalasYModos")}</div>
        ${escalas}
      </section>
      <section class="bloque">
        <div class="bloque-titulo">${t("estilosVista.transicionesTitulo")}</div>
        ${transiciones}
      </section>
    </div>`;

  // cualquier acorde de la guía abre el modal del mástil
  $$("[data-cifrado]", $("#e-cuerpo")).forEach((b) => {
    b.addEventListener("click", () => mostrarComoTocar(b.dataset.cifrado));
  });

  cambiarVista("estilo");
  window.scrollTo({ top: 0, behavior: "auto" });
}

/* ============ vista de aprendizaje ============ */
const RUTA_APRENDIZAJE = [
  {
    paso: "1", titulo: "Los cuatro acordes y el oído",
    que: "Aprendete una sola progresión — I–V–vi–IV — en dos tonalidades distintas.",
    porque: "No es para tocar pop: es para que la mano deje de pensar y puedas escuchar lo que estás haciendo. Hasta que no tengas eso automatizado, todo lo demás es ruido.",
    donde: "Estilo Pop, primera progresión.",
    listo: "Podés cambiar de acorde sin mirar la mano y cantando encima.",
  },
  {
    paso: "2", titulo: "Una escala, todo el mástil",
    que: "La pentatónica menor en las cinco posiciones, en una sola tonalidad.",
    porque: "Cinco notas sin ninguna que choque: podés improvisar desde el primer día sin sonar mal. Es la red que te deja equivocarte.",
    donde: "Estilo Blues, lick de la caja de La.",
    listo: "Podés arrancar una frase en cualquier parte del mástil sin buscar.",
  },
  {
    paso: "3", titulo: "Los doce compases",
    que: "El blues completo en A, tocando el acompañamiento y el solo.",
    porque: "Es el primer formato donde acompañás y solás sobre la misma estructura. Y te obliga a escuchar el cambio al IV, que es la primera transición que hay que sentir, no contar.",
    donde: "Estilo Blues, progresión de doce compases.",
    listo: "Sabés en qué compás estás sin contar.",
  },
  {
    paso: "4", titulo: "El modo que cambia el color",
    que: "Mixolidio sobre un dominante, y dórico sobre un menor.",
    porque: "Acá dejás de tocar 'la escala de la canción' y empezás a tocar la escala de cada acorde. Es el salto más grande: una nota distinta cambia el género entero.",
    donde: "Estilos Rock (mixolidio) y Blues (dórico sobre el ii).",
    listo: "Escuchás la diferencia entre mixolidio y jónico sin mirar.",
  },
  {
    paso: "5", titulo: "La tensión y su resolución",
    que: "Identificar en cada escala cuál es la nota que choca y a dónde baja.",
    porque: "Es lo que separa tocar notas correctas de tocar música. La tensión bien usada es lo que hace que una frase tenga dirección en vez de dar vueltas.",
    donde: "Cualquier acorde: abrí el mástil y elegí una escala. Lo crimson choca, lo dorado resuelve.",
    listo: "Podés meter la nota tensa a propósito y sacarla cuando querés.",
  },
  {
    paso: "6", titulo: "Sustituir y recolorear",
    que: "Cambiar un acorde por otro que cumpla la misma función: tritonal, relativo, prestado del paralelo.",
    porque: "Es cómo se reescribe una progresión sin romperla. Y es lo que te deja poner el color que querés — sensual, tenso, luminoso — sin cambiar la canción.",
    donde: "Mapas armónicos: sustitución tritonal e intercambio modal. Y el selector 'Que suene…' del mástil.",
    listo: "Podés tomar una progresión ajena y hacerla sonar tuya.",
  },
];

const PUENTES_ENTRE_ESTILOS = [
  { de: "Blues", a: "Rock", comparten: "La pentatónica menor y los dominantes.", cambia: "El rock endurece el acorde (quintas sin tercera) y suma el bVII del mixolidio. Mismo solo, otra base." },
  { de: "Blues", a: "Country", comparten: "Los tres acordes y el formato.", cambia: "El country se va a la pentatónica MAYOR y cambia el quejido por bends dobles. La misma caja, tres trastes más arriba." },
  { de: "Rock", a: "Metal", comparten: "Las quintas y la pentatónica menor.", cambia: "El metal baja la afinación y reemplaza el bVII por el bII frigio. El salto de medio tono es todo el cambio." },
  { de: "Blues", a: "Jazz", comparten: "El blues de doce compases, que en jazz se toca igual pero con más acordes.", cambia: "Aparecen los ii-V y las escalas bebop: la misma estructura con una nota cromática de paso." },
  { de: "Metal", a: "Dark Western", comparten: "El modo frigio y la tensión sin resolver.", cambia: "El western cambia la distorsión por trémolo y reverb, y usa la menor armónica para tener sensible. Es el mismo miedo, con otra ropa." },
];

function pintarAprender() {
  const pasos = RUTA_APRENDIZAJE.map((p, i) => `
    <div class="paso">
      <div class="paso-num">${p.paso}</div>
      <div class="paso-cont">
        <h3 class="paso-titulo">${tRuta(i, "titulo") || p.titulo}</h3>
        <p class="paso-que"><b>${t("aprender.que")}</b> ${tRuta(i, "que") || p.que}</p>
        <p class="paso-porque"><b>${t("aprender.porque")}</b> ${tRuta(i, "porque") || p.porque}</p>
        <p class="paso-donde"><b>${t("aprender.donde")}</b> ${tRuta(i, "donde") || p.donde}</p>
        <p class="paso-listo"><b>${t("aprender.listo")}</b> ${tRuta(i, "listo") || p.listo}</p>
      </div>
    </div>`).join("");

  const puentes = PUENTES_ENTRE_ESTILOS.map((p, i) => `
    <div class="puente">
      <div class="puente-mov"><b>${p.de}</b> <span class="trans-flecha">→</span> <b>${p.a}</b></div>
      <p class="puente-comparten"><b>${t("aprender.yaSabes")}</b> ${tPuente(i, "comparten") || p.comparten}</p>
      <p class="puente-cambia"><b>${t("aprender.cambia")}</b> ${tPuente(i, "cambia") || p.cambia}</p>
    </div>`).join("");

  $("#aprender-cuerpo").innerHTML = `
    <div class="bloque bloque-ancho">
      <div class="bloque-titulo">${t("aprender.porDondeEmpezar")}</div>
      <p class="bloque-pista">${t("aprender.pistaRuta")}</p>
      <div class="pasos-ruta">${pasos}</div>
    </div>
    <div class="bloque bloque-ancho">
      <div class="bloque-titulo">${t("aprender.pasarDeEstilo")}</div>
      <p class="bloque-pista">${t("aprender.pistaPuentes")}</p>
      <div class="puentes">${puentes}</div>
    </div>`;
}

function alCambiarIdioma() {
  armarChipsEstilo();
  pintarGrilla();
  pintarGrillaEstilos();
  pintarAprender();
  if (typeof pintarDiccionario === "function") pintarDiccionario();
  if (typeof pintarVistaEscalas === "function") pintarVistaEscalas();
  if (typeof pintarIdentificar === "function") pintarIdentificar();
  if (typeof pintarVistaEmociones === "function") pintarVistaEmociones();
  if (typeof pintarVistaTemas === "function") pintarVistaTemas();
  if (estado.mapaActivo) abrirMapa(estado.mapaActivo);
  if (estado.estiloActivo) abrirEstilo(estado.estiloActivo);
}

function iniciar() {
  document.documentElement.lang = estadoIdioma.actual;
  aplicarTextosEstaticos();
  const selIdioma = $("#sel-idioma-drop");
  if (selIdioma) armarSelectorIdioma(selIdioma);

  const btnAjustes = $("#btn-ajustes");
  const modalAjustes = $("#modal-ajustes");
  if (btnAjustes && modalAjustes) {
    const abrirAjustes = () => {
      modalAjustes.hidden = false;
      requestAnimationFrame(() => modalAjustes.classList.add("abierto"));
      btnAjustes.setAttribute("aria-expanded", "true");
    };
    const cerrarAjustes = () => {
      modalAjustes.classList.remove("abierto");
      setTimeout(() => { modalAjustes.hidden = true; }, 200);
      btnAjustes.setAttribute("aria-expanded", "false");
    };
    btnAjustes.addEventListener("click", () => {
      if (modalAjustes.hidden) abrirAjustes(); else cerrarAjustes();
    });
    $("#btn-cerrar-ajustes").addEventListener("click", cerrarAjustes);
    modalAjustes.addEventListener("click", (ev) => {
      if (ev.target === modalAjustes) cerrarAjustes();
    });
    document.addEventListener("keydown", (ev) => {
      if (ev.key === "Escape" && !modalAjustes.hidden) cerrarAjustes();
    });
  }
  cacheEstilosDeMapas();
  armarChipsEstilo();
  pintarGrilla();
  pintarGrillaEstilos();
  pintarAprender();
  if (typeof pintarDiccionario === "function") pintarDiccionario();
  if (typeof pintarVistaEscalas === "function") pintarVistaEscalas();
  if (typeof pintarIdentificar === "function") pintarIdentificar();
  if (typeof pintarVistaEmociones === "function") pintarVistaEmociones();
  if (typeof pintarVistaTemas === "function") pintarVistaTemas();
  if (typeof setExploradorDeRueda === "function") setExploradorDeRueda(mostrarMovimientos);
  if (typeof setFijadorDeRueda === "function") setFijadorDeRueda(alFijarNodoConPreviewPiano);

  $$(".inst-tab", $("#instrumento-tabs")).forEach((tab) => {
    tab.addEventListener("click", () => {
      instrumento.activo = tab.dataset.inst;
      $$(".inst-tab").forEach((t) => t.classList.remove("activo"));
      tab.classList.add("activo");
      armarSelectorAfinacion();
      if (typeof armarSelectorSonido === "function") armarSelectorSonido($("#sel-sonido"), instrumento.activo);
      pintarInstrumento();
    });
  });

  if (typeof armarSelectorSonido === "function") {
    armarSelectorSonido($("#sel-sonido"), instrumento.activo);
  }
  $("#btn-escuchar-acorde").addEventListener("click", async () => {
    if (!instrumento.diagramas || !instrumento.diagramas.acorde) return;
    const btn = $("#btn-escuchar-acorde");
    btn.disabled = true;
    btn.classList.add("sonando");
    try {
      await reproducirAcorde(notasMidiDelInstrumentoActivo(), instrumento.activo);
    } finally {
      setTimeout(() => { btn.disabled = false; btn.classList.remove("sonando"); }, 900);
    }
  });

  $("#sel-emocion").addEventListener("change", (e) => {
    instrumento.emocion = e.target.value;
    pintarInstrumento();
  });

  $("#sel-escala").addEventListener("change", (e) => {
    instrumento.escala = e.target.value;
    pintarInstrumento();
  });

  $("#sel-afinacion").addEventListener("change", (e) => {
    const inst = instrumento.activo === "bajo" ? "bajo" : "guitarra";
    afinacionActual[inst] = e.target.value;
    // cambiar las cuerdas cambia las digitaciones, hay que buscarlas de nuevo
    recalcularDiagramas();
  });

  $$(".etq-tab", $("#etiqueta-tabs")).forEach((tab) => {
    tab.addEventListener("click", () => {
      instrumento.mostrar = tab.dataset.mostrar;
      $$(".etq-tab").forEach((t) => t.classList.remove("activo"));
      tab.classList.add("activo");
      pintarInstrumento();
    });
  });

  $("#pos-anterior").addEventListener("click", () => moverPosicion(-1));
  $("#pos-siguiente").addEventListener("click", () => moverPosicion(1));
  $("#btn-cerrar-instrumento").addEventListener("click", cerrarModalInstrumento);
  // clic en el fondo y Escape también cierran
  $("#modal-instrumento").addEventListener("click", (ev) => {
    if (ev.target === $("#modal-instrumento")) cerrarModalInstrumento();
  });
  document.addEventListener("keydown", (ev) => {
    if (ev.key === "Escape" && !$("#modal-instrumento").hidden) cerrarModalInstrumento();
  });

  if (typeof cerrarModalEscala === "function") {
    $("#btn-cerrar-escala").addEventListener("click", cerrarModalEscala);
    $("#modal-escala").addEventListener("click", (ev) => {
      if (ev.target === $("#modal-escala")) cerrarModalEscala();
    });
    document.addEventListener("keydown", (ev) => {
      if (ev.key === "Escape" && !$("#modal-escala").hidden) cerrarModalEscala();
    });
  }

  $("#sel-tonica").addEventListener("change", (e) => {
    estado.tonica = e.target.value;
    dibujarGrafoYRecorrido();
  });

  $$(".vista-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      estado.modo = btn.dataset.modo;
      $$(".vista-btn").forEach((b) => b.classList.remove("activo"));
      btn.classList.add("activo");
      dibujarGrafoYRecorrido();
    });
  });

  const btnEscucharMapa = $("#btn-escuchar-mapa");
  if (btnEscucharMapa) {
    btnEscucharMapa.addEventListener("click", async () => {
      // se lee mapaEnUso() recién acá, al clickear — no antes — así que
      // si cambiaste la tónica la progresión suena transportada, sea
      // cual sea el modo (grafo o rueda) en el que estés parado
      const mapa = typeof mapaEnUso === "function" ? mapaEnUso() : null;
      const cifrados = mapa && mapa.nodos_principales;
      if (!cifrados || !cifrados.length) return;
      const pasos = cifrados
        .map((c) => spellChord(c))
        .filter(Boolean)
        .map((acorde) => notasMidiDesdeNombres(acorde.notas, 48));
      if (!pasos.length) return;
      btnEscucharMapa.disabled = true;
      btnEscucharMapa.classList.add("sonando");
      try {
        await reproducirProgresion(pasos, "piano");
      } finally {
        setTimeout(() => { btnEscucharMapa.disabled = false; btnEscucharMapa.classList.remove("sonando"); }, 400);
      }
    });
  }

  $("#buscador").addEventListener("input", (e) => {
    estado.busqueda = e.target.value;
    estado.pagina = 0;
    pintarGrilla();
    $("#cabecera").classList.toggle("compacta", !!estado.busqueda);
  });

  $$(".nav-btn").forEach((btn) => {
    btn.addEventListener("click", () => cambiarVista(btn.dataset.vista));
  });

  $("#btn-volver").addEventListener("click", () => cambiarVista("explorar"));
  $("#pag-anterior").addEventListener("click", () => cambiarPagina(-1));
  $("#pag-siguiente").addEventListener("click", () => cambiarPagina(1));
  $("#btn-volver-estilos").addEventListener("click", () => cambiarVista("estilos"));
}

document.addEventListener("DOMContentLoaded", iniciar);
