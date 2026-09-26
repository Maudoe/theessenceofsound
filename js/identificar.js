/* ============ The Essence of Sound — identificador de acordes ============
   Al revés de todo lo demás: en vez de elegir un cifrado y ver dónde
   tocarlo, acá tocás las notas VOS en un mástil en blanco (marcás en qué
   traste de qué cuerda estás apoyando el dedo) y la app:
   1) te dice qué acorde es eso — puede tener más de un nombre válido,
      las mismas cuatro notas a veces son dos acordes distintos según
      cuál sea la raíz (Am7 y C6 son las mismas cuatro notas);
   2) te sugiere para dónde seguir, con la misma lógica de relacionEntre()
      que ya usa el resto del sitio (dominante, relativo, mediante...),
      sólo que acá no hace falta que sea el acorde de un mapa: se prueba
      en abstracto sobre las 12 raíces. */

const TRASTES_IDENTIFICAR = 12;
let estadoIdentificar = { marcas: new Set() }; // claves "cuerda-traste"

function limpiarIdentificar() {
  estadoIdentificar.marcas = new Set();
  pintarIdentificar();
}

/* Todas las clases de altura (0-11) que hay marcadas ahora mismo. */
function clasesMarcadas() {
  const cuerdas = cuerdasDe("guitarra");
  const clases = new Set();
  estadoIdentificar.marcas.forEach((clave) => {
    const [c, f] = clave.split("-").map(Number);
    clases.add((cuerdas[c] + f) % 12);
  });
  return clases;
}

/* La nota más grave marcada, para preferir esa raíz cuando hay más de un
   nombre válido — es lo que de verdad "suena" como raíz en la guitarra. */
function claseMasGrave() {
  const cuerdas = cuerdasDe("guitarra");
  let mejor = null;
  estadoIdentificar.marcas.forEach((clave) => {
    const [c, f] = clave.split("-").map(Number);
    const midi = cuerdas[c] + f;
    if (mejor === null || midi < mejor.midi) mejor = { midi, clase: midi % 12 };
  });
  return mejor ? mejor.clase : null;
}

/* Busca, entre las 12 raíces y todas las calidades conocidas (la misma
   tabla que usa el parser), cuáles arman EXACTAMENTE el conjunto de
   notas marcado — ni una de más ni de menos. Puede haber varias: son
   nombres distintos para el mismo puñado de teclas. */
function reconocerAcordes() {
  const clases = clasesMarcadas();
  if (clases.size < 3) return [];
  const graveId = claseMasGrave();

  // ojo: "C6/9" como sufijo lo interpreta el parser como slash chord
  // ("C6" con bajo "9", que no es una nota válida y se descarta), así
  // que puede terminar dando exactamente el mismo resultado que "C6"
  // sola — se deduplica por raíz+calidad ya resuelta, no por el texto
  // del cifrado, para no mostrar el mismo acorde dos veces con dos
  // nombres distintos.
  const vistosCifrado = new Set();
  const vistosResueltos = new Set();
  const resultados = [];
  for (let raiz = 0; raiz < 12; raiz++) {
    CALIDADES.forEach(([sufijo]) => {
      const raizNota = NOTAS_SOSTENIDOS[raiz];
      const cifrado = raizNota + sufijo;
      if (vistosCifrado.has(cifrado)) return;
      vistosCifrado.add(cifrado);
      const acorde = spellChord(cifrado);
      if (!acorde) return;
      const claveResuelta = acorde.raiz + ":" + acorde.calidad + ":" + (acorde.bajo || "");
      if (vistosResueltos.has(claveResuelta)) return;
      const clasesAcorde = new Set(acorde.notas.map((n) => INDICE_NOTA[n]));
      if (clasesAcorde.size !== clases.size) return;
      let coincide = true;
      clasesAcorde.forEach((c) => { if (!clases.has(c)) coincide = false; });
      if (!coincide) return;
      vistosResueltos.add(claveResuelta);
      resultados.push({ cifrado, acorde, esRaizGrave: raiz === graveId });
    });
  }
  // el que tiene como raíz la nota más grave que tocaste va primero: es
  // el nombre más probable de los que encontramos
  resultados.sort((a, b) => (b.esRaizGrave ? 1 : 0) - (a.esRaizGrave ? 1 : 0));
  return resultados;
}

/* Para dónde seguir desde el acorde identificado: se prueban las 12
   raíces con tríada mayor, menor y dominante7, y se le pregunta a
   relacionEntre() (graph.js) si esa combinación tiene una relación
   reconocida — la misma que ya explica los movimientos en los mapas. */
function sugerirSiguientes(acordeBase) {
  const porRaiz = new Map();
  for (let r = 0; r < 12; r++) {
    const raizNota = NOTAS_SOSTENIDOS[r];
    ["", "m", "7"].forEach((suf) => {
      if (porRaiz.has(r)) return;
      const candidato = spellChord(raizNota + suf);
      if (!candidato) return;
      const rel = relacionEntre(acordeBase, candidato);
      if (!rel) return;
      porRaiz.set(r, { cifrado: raizNota + suf, acorde: candidato, etiqueta: rel.etiqueta });
    });
  }
  return [...porRaiz.values()];
}

function pintarIdentificar() {
  const cont = $("#identificar-cuerpo");
  if (!cont) return;

  const cuerdas = cuerdasDe("guitarra");
  const nombresCuerdas = nombresCuerdasDe("guitarra", false);
  cont.innerHTML = `
    <p class="seccion-intro">${t("identificar.intro")}</p>
    <div class="id-mastil-wrap">
      <div class="id-mastil-svg">${svgMastilTocable(cuerdas, nombresCuerdas)}</div>
      <button class="id-limpiar" id="id-limpiar">${t("identificar.limpiar")}</button>
    </div>
    <div class="dic-detalle" id="id-resultado"></div>`;

  $$(".id-punto", cont).forEach((p) => {
    p.addEventListener("click", () => {
      const clave = p.dataset.clave;
      if (estadoIdentificar.marcas.has(clave)) estadoIdentificar.marcas.delete(clave);
      else estadoIdentificar.marcas.add(clave);
      pintarIdentificar();
    });
  });
  $("#id-limpiar").addEventListener("click", limpiarIdentificar);

  pintarResultadoIdentificar();
}

/* Un mástil en blanco, tocable: un punto grande y transparente en cada
   cruce de cuerda/traste (más el 0 = al aire), que se enciende al
   tocarlo. Mismas coordenadas que svgMastil, pero sin acorde de fondo:
   acá el usuario es el que arma la digitación, no al revés. */
function svgMastilTocable(cuerdas, nombresCuerdas) {
  const x0 = 52, yTop = 20, dx = 30, dy = 21;
  const ancho = x0 + TRASTES_IDENTIFICAR * dx + 14;
  const altoCuerdas = (cuerdas.length - 1) * dy;
  const alto = yTop + altoCuerdas + 30;
  const yDeCuerda = (c) => yTop + (cuerdas.length - 1 - c) * dy;
  const xDeTraste = (f) => (f === 0 ? x0 - 15 : x0 + (f - 0.5) * dx);

  const partes = [];
  [3, 5, 7, 9].forEach((f) => {
    if (f > TRASTES_IDENTIFICAR) return;
    partes.push(`<circle cx="${xDeTraste(f)}" cy="${yTop + altoCuerdas / 2}" r="3.6" class="mast-marca-pos"/>`);
  });
  const x12 = xDeTraste(12);
  partes.push(`<circle cx="${x12}" cy="${yTop + altoCuerdas * 0.25}" r="3.6" class="mast-marca-pos"/>`);
  partes.push(`<circle cx="${x12}" cy="${yTop + altoCuerdas * 0.75}" r="3.6" class="mast-marca-pos"/>`);

  for (let f = 0; f <= TRASTES_IDENTIFICAR; f++) {
    const x = x0 + f * dx;
    partes.push(`<line x1="${x}" y1="${yTop}" x2="${x}" y2="${yTop + altoCuerdas}" class="${f === 0 ? "mast-cejuela-linea" : "mast-traste"}"/>`);
  }
  for (let c = 0; c < cuerdas.length; c++) {
    const y = yDeCuerda(c);
    partes.push(`<line x1="${x0}" y1="${y}" x2="${x0 + TRASTES_IDENTIFICAR * dx}" y2="${y}" class="mast-cuerda"/>`);
    partes.push(`<text x="12" y="${y + 3.2}" class="mast-cuerda-nombre">${nombresCuerdas[c] || ""}</text>`);
  }
  for (let f = 1; f <= TRASTES_IDENTIFICAR; f++) {
    partes.push(`<text x="${xDeTraste(f)}" y="${yTop + altoCuerdas + 17}" class="mast-num">${f}</text>`);
  }

  for (let c = 0; c < cuerdas.length; c++) {
    for (let f = 0; f <= TRASTES_IDENTIFICAR; f++) {
      const clave = `${c}-${f}`;
      const marcado = estadoIdentificar.marcas.has(clave);
      const clase = (cuerdas[c] + f) % 12;
      const nombre = NOTAS_SOSTENIDOS[clase];
      partes.push(`
        <g class="id-punto${marcado ? " marcado" : ""}" data-clave="${clave}" tabindex="0" role="button">
          <circle cx="${xDeTraste(f)}" cy="${yDeCuerda(c)}" r="9.5" class="id-punto-circulo"/>
          ${marcado ? `<text x="${xDeTraste(f)}" y="${yDeCuerda(c) + 3.2}" class="id-punto-texto">${nombre}</text>` : ""}
        </g>`);
    }
  }

  return `<svg class="diag-svg diag-mastil id-mastil" viewBox="0 0 ${ancho} ${alto}" role="img" aria-label="${t("identificar.altMastil")}">${partes.join("")}</svg>`;
}

function pintarResultadoIdentificar() {
  const cont = $("#id-resultado");
  if (!cont) return;

  const clases = clasesMarcadas();
  if (clases.size === 0) { cont.innerHTML = ""; return; }
  if (clases.size < 3) {
    cont.innerHTML = `<p class="dic-vacio">${t("identificar.pocasNotas")}</p>`;
    return;
  }

  const notas = [...clases].sort((a, b) => a - b).map((c) => NOTAS_SOSTENIDOS[c]).join(" · ");
  const encontrados = reconocerAcordes();

  if (!encontrados.length) {
    cont.innerHTML = `
      <p class="dic-detalle-notas"><b>${t("diccionario.notas")}:</b> ${notas}</p>
      <p class="dic-vacio">${t("identificar.sinCoincidencia")}</p>`;
    return;
  }

  const principal = encontrados[0];
  const otros = encontrados.slice(1);

  const sugerencias = sugerirSiguientes(principal.acorde);
  const chipsSugerencias = sugerencias.map((s) => `
    <button class="tarjeta-acorde tarjeta-acorde-chica" data-cifrado="${s.cifrado}">
      <span class="tarjeta-acorde-cifrado">${s.cifrado}</span>
      <span class="tarjeta-acorde-nombre">${s.etiqueta}</span>
    </button>`).join("") || `<p class="dic-vacio">${t("identificar.sinSugerencias")}</p>`;

  cont.innerHTML = `
    <div class="dic-detalle-cabeza">
      <h3 class="id-principal-cifrado" data-cifrado="${principal.cifrado}" tabindex="0" role="button">${principal.cifrado}</h3>
      <p class="dic-detalle-notas"><b>${t("diccionario.notas")}:</b> ${notas}</p>
      ${otros.length ? `<p class="id-tambien">${t("identificar.tambien")} ${otros.map((o) => o.cifrado).join(" · ")}</p>` : ""}
    </div>
    <div class="esc-acordes-bloque">
      <div class="bloque-titulo">${t("identificar.paraSeguir")}</div>
      <p class="bloque-pista">${t("identificar.pistaSeguir")}</p>
      <div class="dic-tarjetas">${chipsSugerencias}</div>
    </div>`;

  $$(".tarjeta-acorde-chica, .id-principal-cifrado", cont).forEach((el) => {
    el.addEventListener("click", () => mostrarComoTocar(el.dataset.cifrado));
  });
}
