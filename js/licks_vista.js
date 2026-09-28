/* ============ The Essence of Sound — sección de licks de guitarra ============
   Navega la biblioteca de LICKS_COUNTRY (js/licks_country.js): filtro por
   tonalidad y por técnica, grilla de tarjetas, y un detalle con la
   tablatura + un botón "Escuchar" que toca el lick nota por nota
   (reproducirSecuencia, igual que las escalas) resaltando en la propia
   tablatura cuál nota está sonando en cada instante. */

let estadoLicks = { tonalidad: "todas", familia: "todas", activo: null };

function tonalidadesDeLicks() {
  return [...new Set(LICKS_COUNTRY.map((l) => l.tonalidad))];
}

/* El filtro agrupa por "familia" (11 categorías amplias: chicken
   pickin', bend/pedal steel, slide, etc.) en vez de por el campo
   "tecnica" de cada lick, que es un texto descriptivo único por lick
   (más de 80 valores distintos entre 100 licks) — útil para leer en el
   detalle, inútil como filtro porque casi nada matchea con nada más. */
function familiasDeLicks() {
  return [...new Set(LICKS_COUNTRY.map((l) => l.familia))];
}

function licksFiltrados() {
  return LICKS_COUNTRY.filter((l) =>
    (estadoLicks.tonalidad === "todas" || l.tonalidad === estadoLicks.tonalidad) &&
    (estadoLicks.familia === "todas" || l.familia === estadoLicks.familia));
}

function tarjetasDeLicks() {
  const lista = licksFiltrados();
  if (!lista.length) return `<p class="dic-pista">${t("licksVista.sinResultados")}</p>`;
  return `<div class="dic-tarjetas">${lista.map((l) => {
    const activo = estadoLicks.activo === l.id;
    return `
      <button class="tarjeta-acorde${activo ? " activo" : ""}" data-lick="${l.id}">
        <span class="tarjeta-acorde-cifrado">${l.tonalidad}</span>
        <span class="tarjeta-acorde-nombre">${l.nombre}</span>
      </button>`;
  }).join("")}</div>`;
}

function pintarLicks() {
  const cont = $("#licks-cuerpo");
  if (!cont) return;

  const opcionesTonalidad = ["todas", ...tonalidadesDeLicks()];
  const opcionesFamilia = ["todas", ...familiasDeLicks()];

  const selTonalidad = `
    <div class="dic-raiz">
      <label for="sel-licks-tonalidad">${t("licksVista.filtrarTonalidad")}</label>
      <select id="sel-licks-tonalidad">
        ${opcionesTonalidad.map((v) => `<option value="${v}"${v === estadoLicks.tonalidad ? " selected" : ""}>${v === "todas" ? t("licksVista.todas") : v}</option>`).join("")}
      </select>
    </div>`;
  const selFamilia = `
    <div class="dic-raiz">
      <label for="sel-licks-tecnica">${t("licksVista.filtrarTecnica")}</label>
      <select id="sel-licks-tecnica">
        ${opcionesFamilia.map((v) => `<option value="${v}"${v === estadoLicks.familia ? " selected" : ""}>${v === "todas" ? t("licksVista.todas") : v}</option>`).join("")}
      </select>
    </div>`;

  cont.innerHTML = `
    <p class="seccion-intro">${t("licksVista.intro")}</p>
    <div class="dic-raiz-fila">${selTonalidad}${selFamilia}</div>
    <p class="dic-pista">${t("licksVista.contador").replace("{n}", licksFiltrados().length).replace("{total}", LICKS_COUNTRY.length)}</p>
    <div id="licks-tarjetas">${tarjetasDeLicks()}</div>
    <div class="dic-detalle" id="licks-detalle"></div>`;

  $("#sel-licks-tonalidad").addEventListener("change", (e) => {
    estadoLicks.tonalidad = e.target.value;
    pintarLicks();
  });
  $("#sel-licks-tecnica").addEventListener("change", (e) => {
    estadoLicks.familia = e.target.value;
    pintarLicks();
  });

  engancharTarjetasDeLicks(cont);

  if (estadoLicks.activo) {
    const l = LICKS_COUNTRY.find((x) => x.id === estadoLicks.activo);
    if (l) pintarDetalleLick(l);
  }
}

function engancharTarjetasDeLicks(cont) {
  $$(".tarjeta-acorde", cont).forEach((b) => {
    b.addEventListener("click", () => {
      const l = LICKS_COUNTRY.find((x) => x.id === b.dataset.lick);
      if (!l) return;
      estadoLicks.activo = l.id;
      $$(".tarjeta-acorde", cont).forEach((x) => x.classList.toggle("activo", x.dataset.lick === l.id));
      pintarDetalleLick(l);
      const detalle = $("#licks-detalle");
      if (detalle) detalle.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

/* Resalta, sincronizada con el audio, qué nota de la tablatura está
   sonando ahora — mismo mecanismo que resaltarSecuenciaEnMastil en
   escalas_vista.js, pero apuntando a los elementos data-idx del SVG de
   tablatura en vez de a notas del mástil por clase de altura. */
function resaltarLickEnTab(contenedor, cantidadNotas, pasoSeg) {
  for (let i = 0; i < cantidadNotas; i++) {
    setTimeout(() => {
      $$(`[data-idx="${i}"]`, contenedor).forEach((el) => el.classList.add("en-sonido"));
      setTimeout(() => {
        $$(`[data-idx="${i}"]`, contenedor).forEach((el) => el.classList.remove("en-sonido"));
      }, pasoSeg * 950);
    }, i * pasoSeg * 1000);
  }
}

function pintarDetalleLick(l) {
  const detalle = $("#licks-detalle");
  if (!detalle) return;

  detalle.innerHTML = `
    <div class="dic-detalle-cabeza">
      <h3>${l.nombre}</h3>
      <p class="dic-detalle-formula">
        <b>${t("licksVista.tonalidad")}:</b> ${l.tonalidad}
        &nbsp;·&nbsp; <b>${t("licksVista.tecnica")}:</b> ${l.tecnica}
        &nbsp;·&nbsp; <b>${t("licksVista.dificultad")}:</b> ${l.dificultad}
      </p>
      <p class="dic-detalle-descripcion">${l.nota}</p>
      <button class="btn-escuchar" id="btn-escuchar-lick" type="button">
        <span class="btn-escuchar-icono">▶</span>
        <span>${t("licksVista.escuchar")}</span>
      </button>
    </div>
    <div class="lick-tab">${svgTablatura(l, AFINACION_GUITARRA)}</div>
    <p class="lick-notas">${t("licksVista.notas")}: ${notasDelLick(l, AFINACION_GUITARRA).map((c) => NOTAS_BEMOLES[c]).join(" · ")}</p>
    <p class="dic-pista">${t("licksVista.leyendaTecnicas")}</p>`;

  const btn = $("#btn-escuchar-lick", detalle);
  if (btn) {
    btn.addEventListener("click", async () => {
      btn.disabled = true;
      btn.classList.add("sonando");
      const midi = l.notas.map((n) => AFINACION_GUITARRA[n.cuerda] + n.traste);
      const pasoSeg = 0.32;
      resaltarLickEnTab(detalle, midi.length, pasoSeg);
      try {
        await reproducirSecuencia(midi, "guitarra", pasoSeg);
      } finally {
        setTimeout(() => { btn.disabled = false; btn.classList.remove("sonando"); }, 400);
      }
    });
  }
}
