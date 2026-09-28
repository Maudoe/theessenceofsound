/* ============ The Essence of Sound — escalas en todo el mástil ============
   El diccionario de acordes contesta "¿cómo toco este acorde?". Esta
   sección contesta la otra mitad: "¿qué escala me muevo arriba, y con
   qué acorde de base?" — elegís una tónica y una escala, ves TODAS las
   notas de esa escala en todo el mástil (reusando el mismo dibujo con
   colores por función que ya usa el modal — base/puente/tensión/
   resolución), y abajo una lista de acordes que armonizan con esa
   escala, no sólo el de la tónica: para una menor podés tocar con la
   propia menor de base, pero también con su relativo mayor, con el ii,
   etc — cada uno con la relación real que tiene con la tónica.

   No dibuja nada propio tampoco: reusa svgMastil() pasándole sólo
   `papeles`, sin digitación — es el mismo mecanismo que ya pinta la
   escala completa en el modal "Cómo tocar", sólo que acá es el punto de
   entrada en vez de un agregado. */

const CATEGORIAS_ESCALAS = [
  { id: "mayores", nombre: "Modos mayores", escalas: ["jonico", "lidio", "mixolidio", "lidioDominante"] },
  { id: "menores", nombre: "Modos menores", escalas: ["dorico", "frigio", "eolico", "locrio"] },
  { id: "menorArmMel", nombre: "Menor armónica, melódica y parientes", escalas: ["menorArmonica", "menorMelodica", "alterada", "frigioDominante"] },
  { id: "pentaBlues", nombre: "Pentatónicas y blues", escalas: ["pentaMayor", "pentaMenor", "blues", "bluesMayor"] },
  { id: "bebop", nombre: "Bebop (swing)", escalas: ["bebopDominante", "bebopMayor", "bebopMenor"] },
  { id: "simetricas", nombre: "Simétricas", escalas: ["tonosEnteros", "disminuida", "disminuidaST"] },
  { id: "asiatico", nombre: "Sonido asiático", escalas: SONIDOS_ESCALAS.asiatico },
  { id: "egipcio", nombre: "Sonido egipcio", escalas: SONIDOS_ESCALAS.egipcio },
  { id: "oriental", nombre: "Sonido de Medio Oriente / flamenco", escalas: SONIDOS_ESCALAS.oriental },
  { id: "exotico", nombre: "Otras exóticas", escalas: SONIDOS_ESCALAS.exotico },
];

/* Calidad de acorde por defecto para tocar de base sobre cada escala —
   el punto de partida antes de mostrar las demás opciones. */
const TONICA_POR_ESCALA = {
  jonico: "maj7", lidio: "maj7", mixolidio: "7", lidioDominante: "7",
  dorico: "m7", frigio: "m7", eolico: "m7", locrio: "m7b5",
  menorArmonica: "m", menorMelodica: "m", alterada: "7", frigioDominante: "7",
  pentaMayor: "", pentaMenor: "m", blues: "m7", bluesMayor: "7",
  bebopDominante: "7", bebopMayor: "maj7", bebopMenor: "m7",
  tonosEnteros: "aug", disminuida: "dim7", disminuidaST: "7",
  hirajoshi: "m", inSen: "5", iwato: "5", kumoi: "m",
  egipcia: "sus4", bizantina: "maj7", persa: "",
  hungaraMenor: "m", hungaraMayor: "",
  enigmatica: "aug", napolitanaMenor: "m", napolitanaMayor: "m",
};

/* Para escalas de 7 notas: arma los 7 acordes diatónicos apilando
   terceras dentro de la propia escala (grado 1-3-5 de cada nota, dentro
   de la escala, no cromáticos). Si alguna combinación no da una tríada
   reconocida (no debería pasar en una escala de 7 notas bien formada)
   ese grado se salta en vez de inventar algo raro. */
function acordesDiatonicos(escalaId, raizSemitono) {
  const esc = ESCALAS[escalaId];
  if (!esc || !esc.grados || esc.grados.length !== 7) return null;
  const grados = esc.grados.map((g) => g % 12);
  const out = [];
  for (let i = 0; i < 7; i++) {
    const g1 = grados[i];
    const g3 = grados[(i + 2) % 7];
    const g5 = grados[(i + 4) % 7];
    const i3 = (g3 - g1 + 12) % 12;
    const i5 = (g5 - g1 + 12) % 12;
    let calidad;
    if (i3 === 4 && i5 === 7) calidad = "";
    else if (i3 === 3 && i5 === 7) calidad = "m";
    else if (i3 === 3 && i5 === 6) calidad = "dim";
    else if (i3 === 4 && i5 === 8) calidad = "aug";
    else continue;
    const raizNota = NOTAS_SOSTENIDOS[(raizSemitono + g1) % 12];
    const acorde = spellChord(raizNota + calidad);
    if (!acorde) continue;
    out.push({ acorde, cifrado: raizNota + calidad, esTonica: i === 0 });
  }
  return out;
}

/* Para escalas que no son de 7 notas (pentatónicas, blues, bebop,
   simétricas), no hay "grados diatónicos" en el sentido clásico — en
   cambio se prueban las calidades más comunes SOBRE LA MISMA raíz y se
   quedan las que la propia app ya recomienda para esta escala
   (escalasParaAcorde, la misma lista que arma el selector del modal). */
const CALIDADES_A_PROBAR = ["", "m", "7", "m7", "maj7", "dim", "dim7", "aug", "sus4", "m7b5", "9", "m9", "maj9", "6", "m6"];

/* A diferencia de las escalas de 7 notas (que tienen "grados" clásicos
   y se arman apilando terceras dentro de la propia escala), acá se
   prueban las 12 raíces posibles y nos quedamos con las que arman un
   acorde CUYAS NOTAS ESTÁN TODAS DENTRO de esta escala puntual — no
   alcanza con que la calidad "generalmente" recomiende esta familia de
   escala (un dim7 en cualquier lado sugiere "disminuida" en general,
   pero sólo un dim7 concreto formado con las notas de ESTA disminuida
   en particular es una raíz de verdad válida acá). Por raíz nos
   quedamos con una sola calidad: no hace falta listar Am, Am7 y Am6
   como si fueran tres opciones distintas cuando es la misma raíz
   vestida distinto. */
function acordesCompatibles(escalaId, raizSemitono) {
  const esc = ESCALAS[escalaId];
  const notasEscala = new Set(esc.grados.map((g) => (raizSemitono + g) % 12));
  const tonicaSufijo = TONICA_POR_ESCALA[escalaId];
  const porRaiz = new Map();
  for (let r = 0; r < 12; r++) {
    const raizNota = NOTAS_SOSTENIDOS[r];
    CALIDADES_A_PROBAR.forEach((suf) => {
      const acorde = spellChord(raizNota + suf);
      if (!acorde) return;
      const clases = acorde.notas.map((n) => INDICE_NOTA[n]);
      if (!clases.every((c) => notasEscala.has(c))) return;
      const esTonica = r === raizSemitono % 12 && suf === tonicaSufijo;
      const actual = porRaiz.get(r);
      // entre varias calidades válidas para la misma raíz, preferimos la
      // que tenga más notas (aprovecha mejor la escala) salvo que ya
      // hayamos guardado la de la tónica, esa siempre gana
      if (esTonica || !actual || (!actual.esTonica && clases.length > actual.acorde.notas.length)) {
        porRaiz.set(r, { acorde, cifrado: raizNota + suf, esTonica });
      }
    });
  }
  return [...porRaiz.values()];
}

let estadoEscalas = { raiz: "A", escala: "eolico", acordeElegido: null, vista: "mastil", posicion: 0 };

/* La secuencia de notas MIDI de la escala, para tocarla y para dibujar
   la partitura: sube del grado 1 hasta la octava y-cuando se pide
   idaVuelta-vuelve a bajar, así se escucha completa. Todo a partir de
   una base fija (no depende de instrumento ni afinación — es la escala
   en abstracto, no una digitación). */
function secuenciaMidiEscala(escalaId, raizSemitono, idaVuelta) {
  const esc = ESCALAS[escalaId];
  if (!esc) return [];
  const raizMidi = 48 + raizSemitono; // C3 como referencia de octava
  const subida = esc.grados.map((g) => raizMidi + g).concat([raizMidi + 12]);
  if (!idaVuelta) return subida;
  return subida.concat(subida.slice(0, -1).reverse());
}

/* Hace brillar en el mástil, en sincro con el audio, la nota que está
   sonando en cada instante — el mismo timing que reproducirSecuencia()
   usa por lo bajo, sólo que acá se dispara sobre el propio DOM en vez
   de sobre el AudioContext. Resalta TODAS las apariciones de esa clase
   de altura en el diagrama (no sólo una cuerda), así se ve clarito
   dónde está esa nota se mire donde se mire. */
function resaltarSecuenciaEnMastil(contenedor, secuenciaMidi, pasoSeg) {
  secuenciaMidi.forEach((midi, i) => {
    const clase = ((midi % 12) + 12) % 12;
    setTimeout(() => {
      $$(`[data-clase="${clase}"]`, contenedor).forEach((el) => {
        el.classList.remove("en-sonido");
        void el.getBBox(); // reinicia la animación si la misma nota se repite seguida
        el.classList.add("en-sonido");
        setTimeout(() => el.classList.remove("en-sonido"), pasoSeg * 950);
      });
    }, i * pasoSeg * 1000);
  });
}

const RAICES_ESCALA = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"];

function pintarSelectorEscalas() {
  return `
    <div class="dic-raiz">
      <label for="sel-raiz-escalas">${t("diccionario.tonica")}</label>
      <button type="button" class="esc-transportar" id="esc-transportar-abajo" title="${t("escalas.transportarAbajo")}" aria-label="${t("escalas.transportarAbajo")}">−</button>
      <select id="sel-raiz-escalas">
        ${RAICES_ESCALA.map((r) => `<option value="${r}"${r === estadoEscalas.raiz ? " selected" : ""}>${r}</option>`).join("")}
      </select>
      <button type="button" class="esc-transportar" id="esc-transportar-arriba" title="${t("escalas.transportarArriba")}" aria-label="${t("escalas.transportarArriba")}">+</button>
    </div>`;
}

function tarjetasDeCategoriaEscala(cat) {
  return cat.escalas.map((id) => {
    const activo = estadoEscalas.escala === id;
    const nombre = tesc(id, "nombre", ESCALAS[id].nombre);
    return `<button class="tarjeta-acorde${activo ? " activo" : ""}" data-escala="${id}">
      <span class="tarjeta-acorde-cifrado">${nombre}</span>
    </button>`;
  }).join("");
}

function pintarVistaEscalas() {
  const cont = $("#escalas-cuerpo");
  if (!cont) return;

  const categorias = CATEGORIAS_ESCALAS.map((c) => `
    <section class="dic-categoria">
      <div class="bloque-titulo">${t("escalas.categorias." + c.id)}</div>
      <div class="dic-tarjetas">${tarjetasDeCategoriaEscala(c)}</div>
    </section>`).join("");

  cont.innerHTML = `
    <p class="seccion-intro">${t("escalas.intro")}</p>
    ${pintarSelectorEscalas()}
    ${categorias}`;

  $("#sel-raiz-escalas").addEventListener("change", (e) => {
    estadoEscalas.raiz = e.target.value;
    estadoEscalas.acordeElegido = null;
    pintarVistaEscalas();
  });

  const transportar = (delta) => {
    const i = RAICES_ESCALA.indexOf(estadoEscalas.raiz);
    estadoEscalas.raiz = RAICES_ESCALA[(i + delta + 12) % 12];
    estadoEscalas.acordeElegido = null;
    pintarVistaEscalas();
  };
  $("#esc-transportar-abajo").addEventListener("click", () => transportar(-1));
  $("#esc-transportar-arriba").addEventListener("click", () => transportar(1));

  // las escalas se ven en su propio modal — la lista de categorías de
  // acá al lado queda para elegir, no para mostrar el detalle expandido
  // abajo de la página (mismo criterio que el diccionario de acordes).
  $$(".tarjeta-acorde", cont).forEach((b) => {
    b.addEventListener("click", () => {
      estadoEscalas.escala = b.dataset.escala;
      estadoEscalas.acordeElegido = null;
      estadoEscalas.vista = "mastil";
      estadoEscalas.posicion = 0;
      pintarDetalleEscala();
      abrirModalEscala();
    });
  });
}

function abrirModalEscala() {
  const modal = $("#modal-escala");
  modal.hidden = false;
  requestAnimationFrame(() => modal.classList.add("abierto"));
}

function cerrarModalEscala() {
  const modal = $("#modal-escala");
  modal.classList.remove("abierto");
  setTimeout(() => { modal.hidden = true; }, 200);
}

function pintarDetalleEscala() {
  const detalle = $("#esc-modal-cuerpo");
  if (!detalle) return;

  const escalaId = estadoEscalas.escala;
  const raizSemitono = INDICE_NOTA[estadoEscalas.raiz];
  const esc = ESCALAS[escalaId];
  const diatonicos = acordesDiatonicos(escalaId, raizSemitono);
  const sugerencias = diatonicos || acordesCompatibles(escalaId, raizSemitono);

  const tonicaSufijo = TONICA_POR_ESCALA[escalaId] || "";
  const tonicaCifrado = estadoEscalas.raiz + tonicaSufijo;
  const tonicaAcorde = spellChord(tonicaCifrado);
  const entradaTonica = sugerencias.find((s) => s.esTonica) || { acorde: tonicaAcorde, cifrado: tonicaCifrado, esTonica: true };
  const elegido = estadoEscalas.acordeElegido
    ? sugerencias.find((s) => s.cifrado === estadoEscalas.acordeElegido) || entradaTonica
    : entradaTonica;

  const chipsAcordes = sugerencias.map((s) => {
    const esTonica = s.esTonica;
    const activo = s.cifrado === elegido.cifrado;
    const rel = esTonica ? t("escalas.tonicaLabel") : (relacionEntre(tonicaAcorde, s.acorde) || {}).etiqueta;
    return `<button class="tarjeta-acorde tarjeta-acorde-chica${activo ? " activo" : ""}" data-cifrado="${s.cifrado}">
      <span class="tarjeta-acorde-cifrado">${s.cifrado}</span>
      <span class="tarjeta-acorde-nombre">${rel || ""}</span>
    </button>`;
  }).join("") || `<p class="dic-vacio">${t("escalas.sinSugerencias")}</p>`;

  const info = clasesDelAcorde(elegido.acorde);
  const papeles = info ? papelesDeEscala(escalaId, elegido.acorde) : null;
  const cuerdas = cuerdasDe("guitarra");
  const nombreEscala = tesc(escalaId, "nombre", esc.nombre);

  const vista = estadoEscalas.vista;

  // las posiciones (cajas) son las mismas para Mástil y Tablatura: el
  // mástil resalta la caja activa sin perder el resto de la escala de
  // vista, la tablatura dibuja esa caja puntual.
  const posiciones = posicionesEscalaGuitarra(esc.grados, raizSemitono, cuerdas);
  const indicePosicion = Math.min(estadoEscalas.posicion || 0, Math.max(0, posiciones.length - 1));
  const posicionElegida = posiciones[indicePosicion];

  let diagrama = "";
  if (vista === "tablatura") {
    diagrama = svgTablaturaEscala(posicionElegida ? posicionElegida.notas : [], { alt: `${nombreEscala} en tablatura` });
  } else if (vista === "partitura") {
    const secuencia = secuenciaMidiEscala(escalaId, raizSemitono, false);
    diagrama = svgPartitura(secuencia, { alt: `${nombreEscala} en partitura` });
  } else {
    const posicionActiva = posicionElegida
      ? new Set(posicionElegida.notas.map((n) => `${n.cuerda}-${n.traste}`))
      : null;
    diagrama = papeles
      ? svgMastil(null, cuerdas, elegido.acorde, {
          nombresCuerdas: nombresCuerdasDe("guitarra", false),
          mostrar: "notas",
          papeles: papeles.papeles,
          posicionActiva,
          alt: `${nombreEscala} sobre ${elegido.cifrado}`,
        })
      : "";
  }

  const navPosicion = posiciones.length > 1 && vista !== "partitura" ? `
    <div class="posiciones esc-posiciones-nav">
      <button class="pos-flecha" id="esc-posicion-anterior" ${indicePosicion === 0 ? "disabled" : ""} title="${t("modalInstrumento.posicionAnterior")}">&lsaquo;</button>
      <span class="pos-info">${t("escalas.posicionEnMastil")} · ${indicePosicion + 1} ${t("modalInstrumento.de")} ${posiciones.length}</span>
      <button class="pos-flecha" id="esc-posicion-siguiente" ${indicePosicion === posiciones.length - 1 ? "disabled" : ""} title="${t("modalInstrumento.posicionSiguiente")}">&rsaquo;</button>
    </div>` : "";

  const explicacion = papeles ? explicacionDeEscala(escalaId, elegido.acorde, false) : "";

  const leyenda = `
    <div class="esc-leyenda">
      <span class="esc-leyenda-item"><i class="esc-leyenda-punto p-base"></i>${t("modalInstrumento.delAcorde")}</span>
      <span class="esc-leyenda-item"><i class="esc-leyenda-punto p-puente"></i>${t("modalInstrumento.puente")}</span>
      <span class="esc-leyenda-item"><i class="esc-leyenda-punto p-tension"></i>${t("modalInstrumento.tension")}</span>
      <span class="esc-leyenda-item"><i class="esc-leyenda-punto p-resolucion"></i>${t("modalInstrumento.resuelve")}</span>
    </div>`;

  const switchVista = `
    <div class="esc-vista-switch">
      <button class="etq-tab${vista === "mastil" ? " activo" : ""}" data-vista-escala="mastil">${t("escalas.vistaMastil")}</button>
      <button class="etq-tab${vista === "partitura" ? " activo" : ""}" data-vista-escala="partitura">${t("escalas.vistaPartitura")}</button>
      <button class="etq-tab${vista === "tablatura" ? " activo" : ""}" data-vista-escala="tablatura">${t("escalas.vistaTablatura")}</button>
    </div>`;

  detalle.innerHTML = `
    <div class="dic-detalle-cabeza">
      <h3 id="esc-modal-titulo">${estadoEscalas.raiz} <span class="dic-detalle-nombre">${nombreEscala}</span></h3>
      <p class="dic-detalle-descripcion">${tesc(escalaId, "sabor", esc.sabor)}</p>
      <button class="btn-escuchar" id="btn-escuchar-escala" type="button">
        <span class="btn-escuchar-icono">▶</span>
        <span>${t("escalas.escucharEscala")}</span>
      </button>
    </div>
    <div class="esc-acordes-bloque">
      <div class="bloque-titulo">${t("escalas.acordesQueArmonizan")}</div>
      <p class="bloque-pista">${t("escalas.pistaAcordes")}</p>
      <div class="dic-tarjetas">${chipsAcordes}</div>
    </div>
    <p class="dic-pista">${t("escalas.pistaMastil")} <b>${elegido.cifrado}</b>.</p>
    ${switchVista}
    ${navPosicion}
    ${vista === "mastil" && papeles ? leyenda : ""}
    <div class="dic-posicion-svg esc-mastil-completo esc-vista-${vista}">${diagrama}</div>
    ${vista === "mastil" ? `<div class="escala-explica">${explicacion || ""}</div>` : ""}`;

  const btnEscuchar = $("#btn-escuchar-escala", detalle);
  if (btnEscuchar) {
    btnEscuchar.addEventListener("click", async () => {
      btnEscuchar.disabled = true;
      btnEscuchar.classList.add("sonando");
      const secuencia = secuenciaMidiEscala(escalaId, raizSemitono, true);
      const pasoSeg = 0.28;
      if (vista === "mastil") resaltarSecuenciaEnMastil(detalle, secuencia, pasoSeg);
      try {
        await reproducirSecuencia(secuencia, "guitarra", pasoSeg);
      } finally {
        setTimeout(() => { btnEscuchar.disabled = false; btnEscuchar.classList.remove("sonando"); }, 400);
      }
    });
  }

  const irAPosicion = (delta) => {
    estadoEscalas.posicion = Math.max(0, Math.min(posiciones.length - 1, indicePosicion + delta));
    pintarDetalleEscala();
  };
  const btnPosAnterior = $("#esc-posicion-anterior", detalle);
  const btnPosSiguiente = $("#esc-posicion-siguiente", detalle);
  if (btnPosAnterior) btnPosAnterior.addEventListener("click", () => irAPosicion(-1));
  if (btnPosSiguiente) btnPosSiguiente.addEventListener("click", () => irAPosicion(1));

  $$("[data-vista-escala]", detalle).forEach((b) => {
    b.addEventListener("click", () => {
      estadoEscalas.vista = b.dataset.vistaEscala;
      pintarDetalleEscala();
    });
  });

  $$(".tarjeta-acorde-chica", detalle).forEach((b) => {
    b.addEventListener("click", () => {
      estadoEscalas.acordeElegido = b.dataset.cifrado;
      pintarDetalleEscala();
    });
  });
}
