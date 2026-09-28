/* ============ The Essence of Sound — sección de licks de guitarra ============
   Navega la biblioteca de LICKS_COUNTRY (js/licks_country.js): filtro por
   tonalidad y por técnica, grilla de tarjetas, y al hacer click en una
   se abre en un modal (mismo patrón que "Cómo tocar") con la tablatura
   y dos formas de escucharlo: solo, una vuelta, o con un fondo de
   acordes I-IV-I-V7 en loop (reproducirLickConAcompanamiento en
   sonido.js) para que se escuche como una frase real dentro de un tema
   y no como un fragmento aislado. */

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
    <div id="licks-tarjetas">${tarjetasDeLicks()}</div>`;

  $("#sel-licks-tonalidad").addEventListener("change", (e) => {
    estadoLicks.tonalidad = e.target.value;
    pintarLicks();
  });
  $("#sel-licks-tecnica").addEventListener("change", (e) => {
    estadoLicks.familia = e.target.value;
    pintarLicks();
  });

  engancharTarjetasDeLicks(cont);
}

function engancharTarjetasDeLicks(cont) {
  $$(".tarjeta-acorde", cont).forEach((b) => {
    b.addEventListener("click", () => {
      const l = LICKS_COUNTRY.find((x) => x.id === b.dataset.lick);
      if (!l) return;
      estadoLicks.activo = l.id;
      $$(".tarjeta-acorde", cont).forEach((x) => x.classList.toggle("activo", x.dataset.lick === l.id));
      abrirModalLick(l);
    });
  });
}

/* Resalta, sincronizada con el audio, qué nota de la tablatura está
   sonando ahora — mismo mecanismo que resaltarSecuenciaEnMastil en
   escalas_vista.js, pero apuntando a los elementos data-idx del SVG de
   tablatura en vez de a notas del mástil por clase de altura.
   `vueltas` > 1 repite el barrido (para la versión con acompañamiento,
   que toca el lick dos veces seguidas). */
function resaltarLickEnTab(contenedor, cantidadNotas, pasoSeg, vueltas) {
  vueltas = vueltas || 1;
  for (let v = 0; v < vueltas; v++) {
    for (let i = 0; i < cantidadNotas; i++) {
      const offsetMs = (v * cantidadNotas + i) * pasoSeg * 1000;
      setTimeout(() => {
        $$(`[data-idx="${i}"]`, contenedor).forEach((el) => el.classList.add("en-sonido"));
        setTimeout(() => {
          $$(`[data-idx="${i}"]`, contenedor).forEach((el) => el.classList.remove("en-sonido"));
        }, pasoSeg * 950);
      }, offsetMs);
    }
  }
}

function abrirModalLick(l) {
  const modal = $("#modal-lick");
  const cuerpo = $("#modal-lick-cuerpo");
  if (!modal || !cuerpo) return;

  cuerpo.innerHTML = `
    <div class="dic-detalle-cabeza">
      <h3>${l.nombre}</h3>
      <p class="dic-detalle-formula">
        <b>${t("licksVista.tonalidad")}:</b> ${l.tonalidad}
        &nbsp;·&nbsp; <b>${t("licksVista.tecnica")}:</b> ${l.tecnica}
        &nbsp;·&nbsp; <b>${t("licksVista.dificultad")}:</b> ${l.dificultad}
      </p>
      <p class="dic-detalle-descripcion">${l.nota}</p>
      <div class="lick-botones">
        <button class="btn-escuchar" id="btn-escuchar-lick" type="button">
          <span class="btn-escuchar-icono">▶</span>
          <span>${t("licksVista.escuchar")}</span>
        </button>
        <button class="btn-escuchar btn-escuchar-acomp" id="btn-escuchar-lick-acomp" type="button">
          <span class="btn-escuchar-icono">▶</span>
          <span>${t("licksVista.escucharConAcompanamiento")}</span>
        </button>
      </div>
    </div>
    <div class="lick-tab">${svgTablatura(l, AFINACION_GUITARRA)}</div>
    <p class="lick-notas">${t("licksVista.notas")}: ${notasDelLick(l, AFINACION_GUITARRA).map((c) => NOTAS_BEMOLES[c]).join(" · ")}</p>
    <p class="dic-pista">${t("licksVista.leyendaTecnicas")}</p>`;

  const btnSolo = $("#btn-escuchar-lick", cuerpo);
  if (btnSolo) {
    btnSolo.addEventListener("click", async () => {
      btnSolo.disabled = true;
      btnSolo.classList.add("sonando");
      const midi = l.notas.map((n) => AFINACION_GUITARRA[n.cuerda] + n.traste);
      const pasoSeg = 0.32;
      resaltarLickEnTab(cuerpo, midi.length, pasoSeg, 1);
      try {
        await reproducirSecuencia(midi, "guitarra", pasoSeg);
      } finally {
        setTimeout(() => { btnSolo.disabled = false; btnSolo.classList.remove("sonando"); }, 400);
      }
    });
  }

  const btnAcomp = $("#btn-escuchar-lick-acomp", cuerpo);
  if (btnAcomp) {
    btnAcomp.addEventListener("click", async () => {
      btnAcomp.disabled = true;
      btnAcomp.classList.add("sonando");
      const pasoSeg = 0.32;
      try {
        const info = await reproducirLickConAcompanamiento(l, pasoSeg);
        if (info) resaltarLickEnTab(cuerpo, info.cantidadNotas, info.pasoSeg, info.vueltasMelodia);
      } finally {
        const espera = l.notas.length * pasoSeg * 2 * 1000 + 400;
        setTimeout(() => { btnAcomp.disabled = false; btnAcomp.classList.remove("sonando"); }, Math.min(espera, 6000));
      }
    });
  }

  modal.hidden = false;
  requestAnimationFrame(() => modal.classList.add("abierto"));
}

function cerrarModalLick() {
  const modal = $("#modal-lick");
  if (!modal || modal.hidden) return;
  modal.classList.remove("abierto");
  setTimeout(() => { modal.hidden = true; }, 200);
}
