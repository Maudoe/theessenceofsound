/* ============ The Essence of Sound — temas ============
   Un tema es sólo un juego de valores para las mismas variables CSS que
   ya usa todo el sitio (--acento, --carta, --blanco, --font-titulo…) —
   por eso cambiar de tema no rearma nada, sólo pisa esas variables en
   <html data-tema="…"> y el resto se repinta solo.

   Aviso honesto: esto retema la paleta y la tipografía centrales, no
   cada color suelto de cada componente puntual — no es un re-theme
   pixel por pixel de absolutamente todo el sitio. */

const TEMA_GUARDADO = "sh_tema";
const estadoTema = { actual: "oscuro" };

const TEMAS = [
  { id: "oscuro", grupo: "oscuro", nombre: "Oscuro", fuente: "Michroma",
    colores: ["#07070a", "#5be8d8", "#b98bff", "#ff6fae"] },
  { id: "tactico", grupo: "oscuro", nombre: "Táctico", fuente: "Black Ops One",
    colores: ["#12140d", "#e8a23d", "#8fae5a", "#d1553a"] },
  { id: "vino", grupo: "oscuro", nombre: "Vino", fuente: "Cinzel",
    colores: ["#140a0d", "#d9b45c", "#8a5a7a", "#b23a52"] },
  { id: "claro-dorado", grupo: "claro", nombre: "Dorado", fuente: "Playfair Display",
    colores: ["#faf7f0", "#b8860b", "#3b4d7a", "#2f6fb0"] },
  { id: "claro-papel", grupo: "claro", nombre: "Papel", fuente: "Libre Baskerville",
    colores: ["#f4efe4", "#7a5a33", "#8a4a4a", "#3f7d78"] },
  { id: "claro-esmeralda", grupo: "claro", nombre: "Esmeralda", fuente: "Poppins",
    colores: ["#f1f7f5", "#1f8a6f", "#4a5fb0", "#d1637a"] },
];

/* Las fuentes son independientes del tema: cada tema trae una elegida
   por default, pero acá se puede pisar esa elección a mano — son las
   mismas 6 que ya se cargan para los temas, ninguna nueva. "Automática"
   (sin selección) vuelve a dejar que decida el tema. */
const FUENTE_GUARDADA = "sh_fuente";
const estadoFuente = { actual: "" };
const FUENTES = [
  { id: "michroma", nombre: "Michroma", pila: '"Michroma", "Space Grotesk", "Segoe UI", sans-serif' },
  { id: "black-ops-one", nombre: "Black Ops One", pila: '"Black Ops One", "Space Grotesk", sans-serif' },
  { id: "cinzel", nombre: "Cinzel", pila: '"Cinzel", "Space Grotesk", serif' },
  { id: "playfair-display", nombre: "Playfair Display", pila: '"Playfair Display", "Space Grotesk", serif' },
  { id: "libre-baskerville", nombre: "Libre Baskerville", pila: '"Libre Baskerville", "Space Grotesk", serif' },
  { id: "poppins", nombre: "Poppins", pila: '"Poppins", "Space Grotesk", sans-serif' },
];

(function inicializarTema() {
  try {
    const guardado = localStorage.getItem(TEMA_GUARDADO);
    if (guardado && TEMAS.some((t) => t.id === guardado)) estadoTema.actual = guardado;
    const fuenteGuardada = localStorage.getItem(FUENTE_GUARDADA);
    if (fuenteGuardada && FUENTES.some((f) => f.id === fuenteGuardada)) estadoFuente.actual = fuenteGuardada;
  } catch (e) { /* localStorage bloqueado, o corriendo fuera del navegador (script de extracción de traducciones): seguimos en oscuro */ }
  if (typeof document !== "undefined") {
    document.documentElement.dataset.tema = estadoTema.actual;
    if (estadoFuente.actual) document.documentElement.dataset.fuente = estadoFuente.actual;
  }
})();

function aplicarFuente(id) {
  estadoFuente.actual = id && FUENTES.some((f) => f.id === id) ? id : "";
  if (estadoFuente.actual) document.documentElement.dataset.fuente = estadoFuente.actual;
  else delete document.documentElement.dataset.fuente;
  try {
    if (estadoFuente.actual) localStorage.setItem(FUENTE_GUARDADA, estadoFuente.actual);
    else localStorage.removeItem(FUENTE_GUARDADA);
  } catch (e) { /* nada que hacer */ }
  if (typeof pintarSelectorFuentes === "function") pintarSelectorFuentes();
}

function pintarSelectorFuentes() {
  const cont = document.getElementById("fuentes-ajustes-cuerpo");
  if (!cont) return;

  const automatica = `
    <button class="chip chip-fuente${!estadoFuente.actual ? " activo" : ""}" data-fuente-id="" style="font-family:var(--font-titulo)">
      ${t("temas.fuenteAutomatica")}
    </button>`;
  const opciones = FUENTES.map((f) => `
    <button class="chip chip-fuente${estadoFuente.actual === f.id ? " activo" : ""}" data-fuente-id="${f.id}" style="font-family:${f.pila}">
      ${f.nombre}
    </button>`).join("");

  cont.innerHTML = `<div class="fuentes-grilla">${automatica}${opciones}</div>`;
  cont.querySelectorAll("[data-fuente-id]").forEach((b) => {
    b.addEventListener("click", () => aplicarFuente(b.dataset.fuenteId));
  });
}

function aplicarTema(id) {
  if (!TEMAS.some((t) => t.id === id)) return;
  estadoTema.actual = id;
  document.documentElement.dataset.tema = id;
  try { localStorage.setItem(TEMA_GUARDADO, id); } catch (e) { /* nada que hacer */ }
  if (typeof pintarVistaTemas === "function") pintarVistaTemas();
  if (typeof pintarSelectorFuentes === "function") pintarSelectorFuentes();
}

function tarjetaDeTema(tema) {
  const activo = estadoTema.actual === tema.id;
  const swatches = tema.colores.map((c) => `<span class="tema-swatch" style="background:${c}"></span>`).join("");
  return `
    <button class="tarjeta-tema${activo ? " activo" : ""}" data-tema-id="${tema.id}">
      <span class="tema-swatches">${swatches}</span>
      <span class="tema-nombre" style="font-family:'${tema.fuente}', sans-serif">${tem2(tema.id, "nombre", tema.nombre)}</span>
      <span class="tema-fuente">${tema.fuente}</span>
      ${activo ? `<span class="tema-activo-marca">${t("temas.activo")}</span>` : ""}
    </button>`;
}

/* nombre traducido de un tema — se llama tem2 (no tem) porque ya existe
   tem() para las emociones y son namespaces distintos en el idioma. */
function tem2(id, campo, original) {
  const propio = typeof _idiomaActivo === "function" && _idiomaActivo() && _idiomaActivo().temas && _idiomaActivo().temas[id];
  if (propio && propio[campo]) return propio[campo];
  const base = typeof _idiomaBase === "function" && _idiomaBase() && _idiomaBase().temas && _idiomaBase().temas[id];
  if (base && base[campo]) return base[campo];
  return original;
}

function pintarVistaTemas() {
  const cont = document.getElementById("temas-ajustes-cuerpo");
  if (!cont) return;

  const oscuros = TEMAS.filter((t) => t.grupo === "oscuro").map(tarjetaDeTema).join("");
  const claros = TEMAS.filter((t) => t.grupo === "claro").map(tarjetaDeTema).join("");

  cont.innerHTML = `
    <div class="temas-subgrupo-titulo">${t("temas.grupoOscuro")}</div>
    <div class="temas-grilla temas-grilla-ajustes">${oscuros}</div>
    <div class="temas-subgrupo-titulo">${t("temas.grupoClaro")}</div>
    <div class="temas-grilla temas-grilla-ajustes">${claros}</div>`;

  cont.querySelectorAll("[data-tema-id]").forEach((b) => {
    b.addEventListener("click", () => aplicarTema(b.dataset.temaId));
  });
}
