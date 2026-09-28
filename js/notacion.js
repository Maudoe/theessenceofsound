/* ============ The Essence of Sound — partitura y tablatura ============
   Todo lo demás del sitio dibuja "puntos de colores sobre el mástil".
   Esto es la otra forma de escribir lo mismo, las dos que se usan de
   verdad en una clase o una partitura: el pentagrama (dónde cae cada
   nota en clave de sol) y la tablatura de guitarra (en qué cuerda y qué
   traste, en el orden en que se toca).

   No inventa digitaciones nuevas: la tablatura dibuja exactamente la
   caja que arma cajaEscalaGuitarra() (instrumentos.js), y la partitura
   ubica cada nota por su nombre real (letra + alteración), no por el
   número de traste. */

/* Letra natural y si lleva sostenido, para cada una de las 12 clases —
   siempre deletreado con sostenidos (mismo criterio que el resto de la
   sección de escalas, que no usa bemoles acá). */
const LETRA_POR_CLASE = ["C", "C", "D", "D", "E", "F", "F", "G", "G", "A", "A", "B"];
const ALTERADA_POR_CLASE = [false, true, false, true, false, false, true, false, true, false, true, false];
const INDICE_LETRA = { C: 0, D: 1, E: 2, F: 3, G: 4, A: 5, B: 6 };

/* Posición en el pentagrama (clave de sol): 0 = la línea de abajo (Mi4),
   sube de a un paso por cada letra (no por semitono) — así una nota y su
   sostenido caen en el mismo lugar, sólo cambia el símbolo de alteración. */
function pasoDePentagrama(midi) {
  const clase = ((midi % 12) + 12) % 12;
  const letra = LETRA_POR_CLASE[clase];
  const octava = Math.floor((midi - clase) / 12) - 1;
  const pasoGlobal = octava * 7 + INDICE_LETRA[letra];
  return { paso: pasoGlobal - (4 * 7 + 2), alterada: ALTERADA_POR_CLASE[clase] }; // referencia: Mi4 = paso 0
}

/* Dibuja una secuencia de notas (una detrás de la otra, sin acordes
   simultáneos — es lo que hace falta para mostrar una escala) como
   pentagrama en clave de sol, con líneas adicionales si se van del
   pentagrama y el sostenido cuando corresponde. */
function svgPartitura(notasMidi, opciones) {
  const opts = opciones || {};
  const porNota = 46;
  const ancho = Math.max(220, 70 + notasMidi.length * porNota);
  const alto = 140;
  const gapLinea = 11;
  const yLineaAbajo = 96; // Mi4, paso 0

  const yDePaso = (paso) => yLineaAbajo - paso * (gapLinea / 2);

  const lineas = [0, 2, 4, 6, 8].map((paso) => {
    const y = yDePaso(paso);
    return `<line x1="34" y1="${y}" x2="${ancho - 16}" y2="${y}" class="part-linea"/>`;
  }).join("");

  const clave = `<text x="8" y="${yDePaso(4) + 15}" class="part-clave">𝄞</text>`;

  const notas = notasMidi.map((midi, i) => {
    const { paso, alterada } = pasoDePentagrama(midi);
    const x = 62 + i * porNota;
    const y = yDePaso(paso);
    const ledger = [];
    if (paso < 0) {
      for (let p = -2; p >= paso; p -= 2) {
        const yl = yDePaso(p);
        ledger.push(`<line x1="${x - 11}" y1="${yl}" x2="${x + 11}" y2="${yl}" class="part-linea-adicional"/>`);
      }
    } else if (paso > 8) {
      for (let p = 10; p <= paso; p += 2) {
        const yl = yDePaso(p);
        ledger.push(`<line x1="${x - 11}" y1="${yl}" x2="${x + 11}" y2="${yl}" class="part-linea-adicional"/>`);
      }
    }
    const alteracion = alterada
      ? `<text x="${x - 18}" y="${y + 6}" class="part-alteracion">♯</text>` : "";
    return `${ledger.join("")}${alteracion}<ellipse cx="${x}" cy="${y}" rx="7" ry="5.4" class="part-nota"/>`;
  }).join("");

  return `<svg class="not-svg not-partitura" viewBox="0 0 ${ancho} ${alto}" role="img"
      aria-label="${opts.alt || ""}">${lineas}${clave}${notas}</svg>`;
}

/* Dibuja una tablatura de guitarra: una línea por cuerda (la más aguda
   arriba, mismo criterio que el resto del sitio), un número de traste
   por nota, en el orden en que cajaEscalaGuitarra() las va tocando.
   Se llama "...Escala" y no simplemente svgTablatura porque estilos.js
   ya tenía una función con ese nombre para los licks — mismo scope
   global, dos definiciones con el mismo nombre se pisan entre sí. */
function svgTablaturaEscala(notasCaja, opciones) {
  const opts = opciones || {};
  const nCuerdas = 6;
  const porNota = 40;
  const ancho = Math.max(220, 60 + notasCaja.length * porNota);
  const alto = 30 + nCuerdas * 22;
  const gap = 22;
  const yDeCuerda = (i) => 24 + i * gap; // i=0 es la cuerda más grave (abajo en el dibujo)

  const lineas = Array.from({ length: nCuerdas }, (_, i) => {
    const y = yDeCuerda(nCuerdas - 1 - i); // invertido: cuerda aguda arriba
    return `<line x1="16" y1="${y}" x2="${ancho - 10}" y2="${y}" class="tab-linea"/>`;
  }).join("");

  const numeros = notasCaja.map((n, i) => {
    const x = 46 + i * porNota;
    const y = yDeCuerda(nCuerdas - 1 - n.cuerda) + 4.5;
    return `<rect x="${x - 10}" y="${y - 13}" width="20" height="17" class="tab-tapa"/>
      <text x="${x}" y="${y}" class="tab-numero">${n.traste}</text>`;
  }).join("");

  return `<svg class="not-svg not-tablatura" viewBox="0 0 ${ancho} ${alto}" role="img"
      aria-label="${opts.alt || ""}">${lineas}${numeros}</svg>`;
}
