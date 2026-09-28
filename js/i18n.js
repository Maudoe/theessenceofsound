/* ============ The Essence of Sound — internacionalización ============
   El texto que ve el usuario vive en locales/*.json (compilados a
   js/idiomas.js por scripts/compilar_idiomas.js). Este archivo sólo sabe
   leerlo, con español como red de seguridad: si falta una clave en el
   idioma elegido, o directamente falta el idioma entero, se muestra el
   español antes que dejar un hueco vacío.

   t(ruta)          — texto de interfaz, ej. t("nav.mapas")
   tm(key, campo)   — texto de un mapa armónico, por su `key`
   te(id, tipo, i, campo) — texto de un estilo: tipo = progresiones|transiciones|licks
   tem(id, campo)   — texto de una emoción
   tesc(id, campo)  — nombre/sabor de una escala
   tafin(instr, id) — nombre de una afinación
*/

const IDIOMA_GUARDADO = "sh_idioma";
const estadoIdioma = { actual: "es" };

(function inicializarIdioma() {
  try {
    const guardado = localStorage.getItem(IDIOMA_GUARDADO);
    if (guardado && typeof IDIOMAS !== "undefined" && IDIOMAS[guardado]) {
      estadoIdioma.actual = guardado;
    }
  } catch (e) { /* localStorage bloqueado (privado, etc): seguimos en es */ }
})();

function _idiomaActivo() {
  return (typeof IDIOMAS !== "undefined" && IDIOMAS[estadoIdioma.actual]) || (typeof IDIOMAS !== "undefined" && IDIOMAS.es) || null;
}
function _idiomaBase() {
  return (typeof IDIOMAS !== "undefined" && IDIOMAS.es) || null;
}

function _porRuta(obj, ruta) {
  if (!obj) return undefined;
  return ruta.split(".").reduce((o, k) => (o && o[k] !== undefined ? o[k] : undefined), obj);
}

/* Texto de interfaz: nav, botones, rótulos fijos. */
function t(ruta) {
  const propio = _porRuta(_idiomaActivo() && _idiomaActivo().ui, ruta);
  if (propio !== undefined) return propio;
  const base = _porRuta(_idiomaBase() && _idiomaBase().ui, ruta);
  if (base !== undefined) return base;
  return ruta;
}

/* Texto de un mapa armónico. `original` es el valor que ya está en
   data.js (el español "de fábrica"): si el idioma activo o el campo
   puntual no existen todavía, se cae ahí en vez de mostrar vacío. */
function tm(key, campo, original) {
  const propio = _idiomaActivo() && _idiomaActivo().mapas && _idiomaActivo().mapas[key];
  if (propio && propio[campo] !== undefined && propio[campo] !== "") return propio[campo];
  const base = _idiomaBase() && _idiomaBase().mapas && _idiomaBase().mapas[key];
  if (base && base[campo] !== undefined && base[campo] !== "") return base[campo];
  return original !== undefined ? original : "";
}

/* Texto de un estilo. tipo = "progresiones" | "transiciones" | "licks",
   indexado por posición (el orden de esas listas no cambia entre
   idiomas: viene siempre del mismo ESTILOS[id][tipo] en estilos.js). */
function te(id, tipo, indice, campo, original) {
  const de = (idi) => {
    const est = idi && idi.estilos && idi.estilos[id];
    const lista = est && est[tipo];
    const item = lista && lista[indice];
    return item ? item[campo] : undefined;
  };
  const propio = de(_idiomaActivo());
  if (propio !== undefined && propio !== "") return propio;
  const base = de(_idiomaBase());
  if (base !== undefined && base !== "") return base;
  return original !== undefined ? original : "";
}

/* nombre / resumen del estilo en sí (no de sus progresiones/licks). */
function teEstilo(id, campo, original) {
  const propio = _idiomaActivo() && _idiomaActivo().estilos && _idiomaActivo().estilos[id];
  if (propio && propio[campo] !== undefined && propio[campo] !== "") return propio[campo];
  const base = _idiomaBase() && _idiomaBase().estilos && _idiomaBase().estilos[id];
  if (base && base[campo] !== undefined && base[campo] !== "") return base[campo];
  return original !== undefined ? original : "";
}

function tem(id, campo, original) {
  const propio = _idiomaActivo() && _idiomaActivo().emociones && _idiomaActivo().emociones[id];
  if (propio && propio[campo] !== undefined && propio[campo] !== "") return propio[campo];
  const base = _idiomaBase() && _idiomaBase().emociones && _idiomaBase().emociones[id];
  if (base && base[campo] !== undefined && base[campo] !== "") return base[campo];
  return original !== undefined ? original : "";
}

function tSon(gmId, original) {
  const propio = _idiomaActivo() && _idiomaActivo().sonido && _idiomaActivo().sonido[gmId];
  if (propio !== undefined && propio !== '') return propio;
  const base = _idiomaBase() && _idiomaBase().sonido && _idiomaBase().sonido[gmId];
  if (base !== undefined && base !== '') return base;
  return original !== undefined ? original : '';
}
function tesc(id, campo, original) {
  const propio = _idiomaActivo() && _idiomaActivo().escalas && _idiomaActivo().escalas[id];
  if (propio && propio[campo] !== undefined && propio[campo] !== "") return propio[campo];
  const base = _idiomaBase() && _idiomaBase().escalas && _idiomaBase().escalas[id];
  if (base && base[campo] !== undefined && base[campo] !== "") return base[campo];
  return original !== undefined ? original : "";
}

function tafin(instrumento, id, original) {
  const de = (idi) => idi && idi.afinaciones && idi.afinaciones[instrumento] && idi.afinaciones[instrumento][id];
  return de(_idiomaActivo()) || de(_idiomaBase()) || original || id;
}

function tCatAcorde(id, original) {
  const de = (idi) => idi && idi.categoriasAcordes && idi.categoriasAcordes[id];
  return de(_idiomaActivo()) || de(_idiomaBase()) || original || id;
}

function tEntradaAcorde(categoria, sufijo, campo, original) {
  const clave = categoria + ":" + sufijo;
  const de = (idi) => {
    const e = idi && idi.diccionarioAcordes && idi.diccionarioAcordes[clave];
    return e ? e[campo] : undefined;
  };
  const propio = de(_idiomaActivo());
  if (propio !== undefined && propio !== "") return propio;
  const base = de(_idiomaBase());
  if (base !== undefined && base !== "") return base;
  return original !== undefined ? original : "";
}

/* "1" → t("ruta.0.titulo") no alcanza para arrays; ruta[] y puentes[] se
   acceden por índice numérico directo. */
function tRuta(i, campo) {
  const propio = _porRuta(_idiomaActivo() && _idiomaActivo().ui, "ruta." + i + "." + campo);
  if (propio !== undefined) return propio;
  return _porRuta(_idiomaBase() && _idiomaBase().ui, "ruta." + i + "." + campo);
}
function tPuente(i, campo) {
  const propio = _porRuta(_idiomaActivo() && _idiomaActivo().ui, "puentes." + i + "." + campo);
  if (propio !== undefined) return propio;
  return _porRuta(_idiomaBase() && _idiomaBase().ui, "puentes." + i + "." + campo);
}

/* Recorre el DOM y aplica t() a todo lo que tenga data-i18n. Se llama una
   vez al arrancar y de nuevo cada vez que cambia el idioma. */
function aplicarTextosEstaticos(raiz) {
  const base = raiz || document;
  base.querySelectorAll("[data-i18n]").forEach((el) => {
    const val = t(el.getAttribute("data-i18n"));
    if (el.hasAttribute("data-i18n-html")) el.innerHTML = val;
    else el.textContent = val;
  });
  base.querySelectorAll("[data-i18n-title]").forEach((el) => {
    el.setAttribute("title", t(el.getAttribute("data-i18n-title")));
  });
  base.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    el.setAttribute("aria-label", t(el.getAttribute("data-i18n-aria")));
  });
}

function idiomasDisponibles() {
  return typeof IDIOMAS !== "undefined" ? Object.keys(IDIOMAS) : ["es"];
}

function cambiarIdioma(codigo) {
  if (typeof IDIOMAS === "undefined" || !IDIOMAS[codigo]) return;
  estadoIdioma.actual = codigo;
  try { localStorage.setItem(IDIOMA_GUARDADO, codigo); } catch (e) { /* nada que hacer */ }
  document.documentElement.lang = codigo;
  aplicarTextosEstaticos();
  const sel = document.getElementById("sel-idioma-drop");
  if (sel) sel.value = codigo;
  if (typeof alCambiarIdioma === "function") alCambiarIdioma();
}

/* Dropdown de idioma — antes eran chips (uno por idioma), ahora es un
   <select> con la etiqueta fija "Language" (a propósito no se traduce:
   así se reconoce sea cual sea el idioma actual del sitio). */
function armarSelectorIdioma(sel) {
  const disponibles = idiomasDisponibles();
  sel.innerHTML = disponibles.map((cod) =>
    `<option value="${cod}"${cod === estadoIdioma.actual ? " selected" : ""}>${t("idioma." + cod)}</option>`
  ).join("");
  sel.onchange = () => cambiarIdioma(sel.value);
}
