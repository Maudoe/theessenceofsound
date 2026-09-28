/* ============ The Essence of Sound — qué acordes tocar para transmitir algo ============
   El diccionario contesta "¿cómo se toca este acorde?", Escalas contesta
   "¿por dónde me muevo arriba de esto?". Esta sección contesta la tercera
   pregunta: "quiero que suene sensual/oscuro/épico… ¿qué toco?" — sin
   partir de un acorde ya elegido, como si fuera al revés: elegís primero
   la emoción, después una tónica, y te muestra las versiones concretas
   del acorde (mayor, menor y dominante) que le dan ese color, más las
   escalas que van arriba de cada una.

   Reusa por completo emociones.js (EMOCIONES, versionesConColor,
   escalasConColor): esto es sólo la vidriera para navegarlo sin tener
   que abrir primero un mapa o un acorde puntual. */

const FAMILIAS_EMOCION = ["mayor", "menor", "dominante"];

let estadoEmocionesVista = { raiz: "A", emocion: "sensual" };

function acordeBaseDeFamilia(raiz, familia) {
  const sufijo = familia === "menor" ? "m" : familia === "dominante" ? "7" : "";
  return spellChord(raiz + sufijo);
}

function pintarSelectorEmocionesVista() {
  const raices = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"];
  return `
    <div class="dic-raiz">
      <label for="sel-raiz-emociones">${t("diccionario.tonica")}</label>
      <select id="sel-raiz-emociones">
        ${raices.map((r) => `<option value="${r}"${r === estadoEmocionesVista.raiz ? " selected" : ""}>${r}</option>`).join("")}
      </select>
    </div>`;
}

function tarjetasDeEmocion() {
  return Object.entries(EMOCIONES).map(([id, e]) => {
    const activo = estadoEmocionesVista.emocion === id;
    return `<button class="tarjeta-acorde emo-tarjeta${activo ? " activo" : ""}" data-emocion="${id}">
      <span class="tarjeta-acorde-cifrado">${tem(id, "nombre", e.nombre)}</span>
      <span class="tarjeta-acorde-nombre">${tem(id, "resumen", e.resumen)}</span>
    </button>`;
  }).join("");
}

function pintarVistaEmociones() {
  const cont = $("#emociones-cuerpo");
  if (!cont) return;

  cont.innerHTML = `
    <p class="seccion-intro">${t("emocionesVista.intro")}</p>
    ${pintarSelectorEmocionesVista()}
    <div class="dic-tarjetas emo-grilla">${tarjetasDeEmocion()}</div>
    <div class="dic-detalle" id="emo-detalle"></div>`;

  $("#sel-raiz-emociones").addEventListener("change", (e) => {
    estadoEmocionesVista.raiz = e.target.value;
    pintarDetalleEmocion();
  });

  $$(".emo-tarjeta", cont).forEach((b) => {
    b.addEventListener("click", () => {
      estadoEmocionesVista.emocion = b.dataset.emocion;
      pintarVistaEmociones();
      pintarDetalleEmocion();
      const detalle = $("#emo-detalle");
      if (detalle) detalle.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  pintarDetalleEmocion();
}

function bloqueFamiliaEmocion(familia, emocionId, raiz) {
  const acordeBase = acordeBaseDeFamilia(raiz, familia);
  if (!acordeBase) return "";
  const versiones = versionesConColor(acordeBase, emocionId);
  const escalas = escalasConColor(acordeBase, emocionId);
  if (!versiones.length) return "";

  const chipsAcordes = versiones.map((v) => `
    <button class="tarjeta-acorde tarjeta-acorde-chica" data-cifrado="${v.cifrado}">
      <span class="tarjeta-acorde-cifrado">${v.cifrado}</span>
      <span class="tarjeta-acorde-nombre">${v.notas}</span>
    </button>`).join("");

  const chipsEscalas = escalas.map((id) => `
    <button class="chip emo-chip-escala" data-raiz="${raiz}" data-escala="${id}">
      ${tesc(id, "nombre", ESCALAS[id].nombre)}
    </button>`).join("") || `<span class="dic-vacio">${t("emocionesVista.sinEscalas")}</span>`;

  return `
    <div class="emo-familia">
      <div class="bloque-titulo">${t("emocionesVista.familia." + familia)}</div>
      <div class="dic-tarjetas">${chipsAcordes}</div>
      <p class="bloque-pista">${t("emocionesVista.escalasQueAcompanan")}</p>
      <div class="emo-chips-escalas">${chipsEscalas}</div>
    </div>`;
}

/* Un grupo de 4 acordes reales para armar una estrofa o estribillo
   entero con este color — no un acorde suelto. emo.progresion trae los
   grados en semitonos + a qué familia pertenece cada uno; acá se
   transporta a la tónica elegida y se le aplica el color de la emoción
   (la primera versión de versionesConColor, la más representativa). */
function pasosDeProgresionEmocion(emocionId, raiz) {
  const emo = EMOCIONES[emocionId];
  if (!emo || !emo.progresion) return [];

  return emo.progresion.map((paso) => {
    const raizAcorde = transportarNota(raiz, paso.semitonos, false);
    const sufijoBase = paso.familia === "menor" ? "m" : paso.familia === "dominante" ? "7" : "";
    const acordeBase = spellChord(raizAcorde + sufijoBase);
    if (!acordeBase) return null;
    const versiones = versionesConColor(acordeBase, emocionId);
    const elegido = versiones[0] || { cifrado: raizAcorde + sufijoBase, notas: acordeBase.notas.join(" ") };
    const notasArray = elegido.cifrado === acordeBase.raiz + sufijoBase
      ? acordeBase.notas
      : (spellChord(elegido.cifrado) || acordeBase).notas;
    return { grado: paso.grado, cifrado: elegido.cifrado, notas: elegido.notas, notasArray };
  }).filter(Boolean);
}

function chipsDeProgresionEmocion(pasos) {
  if (!pasos.length) return "";
  return pasos.map((p, i) => `
    ${i > 0 ? '<span class="emo-progresion-flecha">→</span>' : ""}
    <button class="tarjeta-acorde tarjeta-acorde-chica emo-paso" data-cifrado="${p.cifrado}">
      <span class="emo-paso-grado">${p.grado}</span>
      <span class="tarjeta-acorde-cifrado">${p.cifrado}</span>
      <span class="tarjeta-acorde-nombre">${p.notas}</span>
    </button>`).join("");
}

function pintarDetalleEmocion() {
  const detalle = $("#emo-detalle");
  if (!detalle) return;

  const emocionId = estadoEmocionesVista.emocion;
  const raiz = estadoEmocionesVista.raiz;
  const emo = EMOCIONES[emocionId];
  if (!emo) { detalle.innerHTML = ""; return; }

  const pasosProgresion = pasosDeProgresionEmocion(emocionId, raiz);
  const bloqueProgresion = pasosProgresion.length ? `
    <div class="emo-progresion-bloque">
      <div class="bloque-titulo">${t("emocionesVista.progresionTitulo")}</div>
      <p class="bloque-pista">${t("emocionesVista.progresionPista")}</p>
      <div class="emo-progresion">${chipsDeProgresionEmocion(pasosProgresion)}</div>
      <button class="btn-escuchar emo-progresion-escuchar" id="btn-escuchar-progresion" type="button">
        <span class="btn-escuchar-icono">▶</span>
        <span>${t("emocionesVista.escucharProgresion")}</span>
      </button>
    </div>` : "";

  const familias = FAMILIAS_EMOCION.map((f) => bloqueFamiliaEmocion(f, emocionId, raiz)).filter(Boolean).join("");

  detalle.innerHTML = `
    <div class="dic-detalle-cabeza">
      <h3>${tem(emocionId, "nombre", emo.nombre)}</h3>
      <p class="dic-detalle-descripcion">${tem(emocionId, "resumen", emo.resumen)}</p>
    </div>
    ${bloqueProgresion}
    ${familias || `<p class="dic-vacio">${t("emocionesVista.sinVersiones")}</p>`}
    <p class="dic-pista emo-como-usar"><b>${t("emocion.comoSeToca")}</b> ${tem(emocionId, "comoUsar", emo.comoUsar)}</p>`;

  $$(".tarjeta-acorde-chica", detalle).forEach((b) => {
    b.addEventListener("click", () => mostrarComoTocarConEmocion(b.dataset.cifrado, emocionId));
  });

  const btnEscucharProgresion = $("#btn-escuchar-progresion");
  if (btnEscucharProgresion) {
    btnEscucharProgresion.addEventListener("click", async (ev) => {
      ev.stopPropagation();
      btnEscucharProgresion.classList.add("sonando");
      try {
        await reproducirProgresion(pasosProgresion.map((p) => notasMidiDesdeNombres(p.notasArray, 48)), "piano");
      } finally {
        setTimeout(() => btnEscucharProgresion.classList.remove("sonando"), 400);
      }
    });
  }

  $$(".emo-chip-escala", detalle).forEach((b) => {
    b.addEventListener("click", () => {
      estadoEscalas.raiz = b.dataset.raiz;
      estadoEscalas.escala = b.dataset.escala;
      estadoEscalas.acordeElegido = null;
      cambiarVista("escalas");
      pintarVistaEscalas();
      const det = $("#esc-detalle");
      if (det) det.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}
