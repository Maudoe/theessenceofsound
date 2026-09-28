/* ============ The Essence of Sound — diccionario de acordes ============
   Una wiki chica: elegís una tónica y una calidad (mayor, m7, maj9…) y
   te muestra qué notas tiene, la fórmula de grados, y TODAS las
   digitaciones que encuentra a lo largo de todo el mástil — no una sola
   posición, el mapa completo de dónde tocarlo.

   No dibuja nada propio: reusa diagramasDeAcorde()/dibujarPosicion() de
   instrumentos.js, así que cualquier cambio en la búsqueda de
   digitaciones o en el dibujo del mástil se refleja acá solo. */

const CATEGORIAS_ACORDES = [
  { id: "triadas", nombre: "Tríadas" },
  { id: "septimas", nombre: "Con séptima" },
  { id: "sextas", nombre: "Sextas y color" },
  { id: "extendidas", nombre: "Extendidas (9ª, 11ª, 13ª)" },
  { id: "agregadas", nombre: "Con nota agregada" },
  { id: "alterados", nombre: "Dominantes alterados y suspendidos" },
  { id: "inversiones", nombre: "Inversiones (bajo distinto)" },
];

/* sufijo: el mismo que entiende spellChord (chords.js). formula: los
   grados tal como se explican en teoría, separados por " – ". */
const DICCIONARIO_ACORDES = [
  { categoria: "triadas", sufijo: "", nombre: "Mayor", formula: "1 – 3 – 5",
    descripcion: "La base de todo: fundamental, tercera mayor y quinta justa. Suena resuelto, sin tensión — el punto de descanso de casi cualquier progresión." },
  { categoria: "triadas", sufijo: "m", nombre: "Menor", formula: "1 – b3 – 5",
    descripcion: "La tercera baja un semitono y cambia todo el color: de resuelto a melancólico. Misma quinta que el mayor, la diferencia entera está en esa tercera." },
  { categoria: "triadas", sufijo: "dim", nombre: "Disminuido", formula: "1 – b3 – b5",
    descripcion: "Tercera menor y quinta también bajada: dos intervalos de tercera menor apilados. Inestable por definición — no es un acorde para quedarse, es de paso." },
  { categoria: "triadas", sufijo: "aug", nombre: "Aumentado", formula: "1 – 3 – #5",
    descripcion: "La quinta sube en vez de bajar. Dos terceras mayores apiladas, simétrico como el disminuido pero con otro sabor: flotante, sin quinta justa que ancle el acorde." },
  { categoria: "triadas", sufijo: "5", nombre: "Power chord (quinta)", formula: "1 – 5",
    descripcion: "Fundamental y quinta, sin tercera. Al no decir si es mayor o menor, funciona con cualquier escala encima — por eso es la base del riff de rock y metal." },
  { categoria: "triadas", sufijo: "sus2", nombre: "Suspendido en 2ª", formula: "1 – 2 – 5",
    descripcion: "La tercera se reemplaza por la segunda. Queda un acorde abierto, sin definir mayor/menor, con un aire más aéreo que el sus4." },
  { categoria: "triadas", sufijo: "sus4", nombre: "Suspendido en 4ª", formula: "1 – 4 – 5",
    descripcion: "La tercera se reemplaza por la cuarta, que casi siempre resuelve bajando a la tercera. Es el 'suspenso' real: pide resolución." },

  { categoria: "septimas", sufijo: "7", nombre: "Dominante (7)", formula: "1 – 3 – 5 – b7",
    descripcion: "Tríada mayor + séptima menor. El acorde de la tensión que quiere resolver a la tónica — es el V7 de cualquier tonalidad, y la base del blues." },
  { categoria: "septimas", sufijo: "maj7", nombre: "Mayor con 7ª mayor", formula: "1 – 3 – 5 – 7",
    descripcion: "Tríada mayor + séptima mayor (un semitono debajo de la octava). Suena a reposo elegante, jazzero — no tira hacia ningún lado como el dominante." },
  { categoria: "septimas", sufijo: "m7", nombre: "Menor con 7ª menor", formula: "1 – b3 – 5 – b7",
    descripcion: "El menor de todos los días: aparece en el ii de cualquier ii-V-I, y en las progresiones de soul y funk como acorde de reposo." },
  { categoria: "septimas", sufijo: "m7b5", nombre: "Semidisminuido (m7b5)", formula: "1 – b3 – b5 – b7",
    descripcion: "Un m7 con la quinta bajada. Es el vii de una tonalidad mayor y el ii de una menor — casi siempre de paso hacia un V7, nunca acorde de reposo." },
  { categoria: "septimas", sufijo: "dim7", nombre: "Disminuido con 7ª disminuida", formula: "1 – b3 – b5 – bb7",
    descripcion: "Simétrico: todo el acorde son terceras menores apiladas (esa 'bb7' sa oído es la misma tecla que una 6ta, pero se escribe distinto porque cumple otra función). Funciona como comodín para pasar de una tonalidad a otra." },
  { categoria: "septimas", sufijo: "mmaj7", nombre: "Menor con 7ª mayor", formula: "1 – b3 – 5 – 7",
    descripcion: "Tercera menor pero séptima mayor: la mezcla rara que usa el cine de suspenso y el jazz modal. Tenso y oscuro sin sonar a dominante." },

  { categoria: "sextas", sufijo: "6", nombre: "Mayor con 6ª", formula: "1 – 3 – 5 – 6",
    descripcion: "Como un maj7 pero sin el peso jazzero: la 6ta en vez de la 7ma mayor lo deja más cálido y menos 'acorde de piano de bar'. Típico del country y el swing." },
  { categoria: "sextas", sufijo: "m6", nombre: "Menor con 6ª", formula: "1 – b3 – 5 – 6",
    descripcion: "El menor con la misma 6ta agregada. Suena a menor de película antigua — es el color que usa el western oscuro cuando no quiere ir directo al m7." },
  { categoria: "sextas", sufijo: "6/9", nombre: "Sexta con 9ª", formula: "1 – 3 – 5 – 6 – 9",
    descripcion: "El 6 de arriba con una 9na sumada: queda un acorde ancho y sin tensión, muy usado como acorde final de un tema — resuelve pero no aburre." },

  { categoria: "extendidas", sufijo: "9", nombre: "Dominante con 9ª", formula: "1 – 3 – 5 – b7 – 9",
    descripcion: "Un 7 con una 9na arriba. Sigue siendo un dominante (quiere resolver) pero con más color — funk y soul lo usan constantemente." },
  { categoria: "extendidas", sufijo: "m9", nombre: "Menor con 9ª", formula: "1 – b3 – 5 – b7 – 9",
    descripcion: "Un m7 con la 9na sumada: es EL acorde 'sensual' de este sitio — ancho, sin aristas, sin nada que choque." },
  { categoria: "extendidas", sufijo: "maj9", nombre: "Mayor con 9ª", formula: "1 – 3 – 5 – 7 – 9",
    descripcion: "El maj7 de siempre con la 9na arriba. Es el sonido 'cielo abierto' de un acorde de reposo mayor bien vestido." },
  { categoria: "extendidas", sufijo: "11", nombre: "Dominante con 11ª", formula: "1 – 3 – 5 – b7 – 9 – 11",
    descripcion: "Un 9 con la 11na sumada. En la práctica la 11na choca contra la tercera mayor, así que casi siempre se toca sin la 3ra o se deja que la 11na haga de color de paso." },
  { categoria: "extendidas", sufijo: "m11", nombre: "Menor con 11ª", formula: "1 – b3 – 5 – b7 – 9 – 11",
    descripcion: "La versión menor del 11: acá la 11na no choca con nada (no hay tercera mayor que la contradiga), así que suena mucho más natural que el dominante 11." },
  { categoria: "extendidas", sufijo: "13", nombre: "Dominante con 13ª", formula: "1 – 3 – 5 – b7 – 9 – 13",
    descripcion: "El dominante más vestido: 7 + 9 + 13 (la 11na se omite casi siempre, por la misma fricción que en el 11 simple). Sonido grande de big band y jazz-funk." },

  { categoria: "agregadas", sufijo: "add9", nombre: "Mayor con 9ª agregada (sin 7ª)", formula: "1 – 3 – 5 – 9",
    descripcion: "Una tríada mayor con la 9na sumada directo, SIN pasar por la séptima. Distinto del acorde de 9na de verdad: acá no hay ningún dominante escondido, sólo color agregado a un mayor en reposo." },
  { categoria: "agregadas", sufijo: "madd9", nombre: "Menor con 9ª agregada", formula: "1 – b3 – 5 – 9",
    descripcion: "El mismo truco que el add9 pero sobre una tríada menor: la 9na sumada directo, sin séptima de por medio. El color melancólico del menor, un poco más abierto." },
  { categoria: "agregadas", sufijo: "add2", nombre: "Mayor con 2ª agregada", formula: "1 – 2 – 3 – 5",
    descripcion: "La 2da sumada en la misma octava del acorde, no una octava arriba como en el add9: queda un roce más apretado y percusivo, muy típico del pop y el rock de guitarras." },
  { categoria: "agregadas", sufijo: "add4", nombre: "Mayor con 4ª agregada", formula: "1 – 3 – 4 – 5",
    descripcion: "La 4ta agregada sin sacar la 3ra: un roce breve entre las dos que le da textura sin perder el carácter mayor del acorde." },

  { categoria: "extendidas", sufijo: "maj11", nombre: "Mayor con 7ª mayor y 11ª", formula: "1 – 3 – 5 – 7 – 9 – 11",
    descripcion: "El maj9 con la 11na arriba. En la práctica se toca casi siempre como #11 porque la 11na natural choca con la 3ra mayor — acá se deja tal cual, sin alterar." },
  { categoria: "extendidas", sufijo: "maj13", nombre: "Mayor con 7ª mayor y 13ª", formula: "1 – 3 – 5 – 7 – 9 – 13",
    descripcion: "El acorde mayor más vestido de todos: séptima mayor, novena y trecena juntas. Sonido de acorde final de balada o de big band." },
  { categoria: "extendidas", sufijo: "m13", nombre: "Menor con 13ª", formula: "1 – b3 – 5 – b7 – 9 – 13",
    descripcion: "El m11 con la 13na sumada arriba: un menor bien extendido, típico del jazz-funk y la fusión." },

  { categoria: "alterados", sufijo: "7b9", nombre: "Dominante con 9ª menor", formula: "1 – 3 – 5 – b7 – b9",
    descripcion: "Un dominante con la 9na bajada un semitono: la tensión más oscura y filosa que existe sobre un V7, típica del jazz y del flamenco." },
  { categoria: "alterados", sufijo: "7#9", nombre: "Dominante con 9ª aumentada", formula: "1 – 3 – 5 – b7 – #9",
    descripcion: "El llamado 'acorde de Hendrix': una 9na subida que choca a propósito contra la 3ra mayor de abajo — mayor y menor en el mismo acorde, muy usado en funk y blues-rock." },
  { categoria: "alterados", sufijo: "7b5", nombre: "Dominante con 5ª disminuida", formula: "1 – 3 – b5 – b7",
    descripcion: "La quinta baja un semitono: un dominante más inestable y simétrico, que en jazz suele aparecer en sustituciones tritonales." },
  { categoria: "alterados", sufijo: "7#5", nombre: "Dominante con 5ª aumentada", formula: "1 – 3 – #5 – b7",
    descripcion: "La quinta sube en vez de bajar: le da al dominante un color flotante, casi de acorde aumentado con la séptima menor arriba." },
  { categoria: "alterados", sufijo: "7alt", nombre: "Dominante alterado", formula: "1 – 3 – b7 – b9 – #9 – #11",
    descripcion: "El dominante con casi todas las tensiones alteradas a la vez — b9, #9 y #11, sin la quinta natural. El sonido característico del jazz moderno resolviendo con máxima tensión." },
  { categoria: "alterados", sufijo: "7sus4", nombre: "Dominante suspendido en 4ª", formula: "1 – 4 – 5 – b7",
    descripcion: "Un dominante sin tercera, con la 4ta en su lugar: acorde de paso muy usado antes de resolver al V7 de verdad, o como acorde de reposo abierto en el pop." },
  { categoria: "alterados", sufijo: "7sus2", nombre: "Dominante suspendido en 2ª", formula: "1 – 2 – 5 – b7",
    descripcion: "La misma idea del sus4 pero con la 2da en vez de la 4ta: un dominante más abierto y menos 'urgente', frecuente en el pop y el rock alternativo." },

  { categoria: "inversiones", sufijo: "/3", intervaloBajo: 4, nombre: "Con bajo en la 3ª", formula: "1 – 3 – 5, con la 3ª en el bajo",
    descripcion: "El mismo acorde mayor de siempre, pero con la 3ra sonando abajo de todo en vez de la fundamental: primera inversión — más suave, menos 'plantado' que el acorde en estado fundamental." },
  { categoria: "inversiones", sufijo: "/5", intervaloBajo: 7, nombre: "Con bajo en la 5ª", formula: "1 – 3 – 5, con la 5ª en el bajo",
    descripcion: "Segunda inversión: la 5ta abajo de todo. Un color de paso, muy usado en líneas de bajo que suben o bajan por grados." },
  { categoria: "inversiones", sufijo: "/b7", intervaloBajo: 10, nombre: "Con bajo en la 7ª menor", formula: "1 – 3 – 5 – b7, con la b7 en el bajo",
    descripcion: "Un acorde dominante con la séptima menor en el bajo en vez de la fundamental: típico de líneas de walking bass cromáticas en jazz." },
];

/* Las tarjetas de "inversiones" no pegan el sufijo tal cual (sería
   "C/3", que no es un cifrado real) — calculan la nota de bajo real
   transportando la raíz elegida el intervalo que le corresponde, así
   "C" + intervaloBajo:4 da "C/E", pero con cualquier tónica sigue
   siendo la misma relación (ej. "D" + intervaloBajo:4 da "D/F#"). */
function cifradoDeEntrada(d, raiz) {
  if (d.intervaloBajo == null) return raiz + d.sufijo;
  const usaBemoles = raiz.includes("b") || ["F", "C", "Bb", "Eb", "Ab", "Db", "Gb"].includes(raiz);
  const bajo = transportarNota(raiz, d.intervaloBajo, usaBemoles);
  return raiz + "/" + bajo;
}

let estadoDiccionario = { raiz: "C", activo: null };

function tarjetasDeCategoria(catId) {
  return DICCIONARIO_ACORDES
    .filter((d) => d.categoria === catId)
    .map((d) => {
      const cifrado = cifradoDeEntrada(d, estadoDiccionario.raiz);
      const activo = estadoDiccionario.activo === cifrado;
      const nombre = tEntradaAcorde(d.categoria, d.sufijo, "nombre", d.nombre);
      return `
        <button class="tarjeta-acorde${activo ? " activo" : ""}" data-cifrado="${cifrado}">
          <span class="tarjeta-acorde-cifrado">${cifrado}</span>
          <span class="tarjeta-acorde-nombre">${nombre}</span>
        </button>`;
    }).join("");
}

function pintarDiccionario() {
  const cont = $("#diccionario-cuerpo");
  if (!cont) return;

  const raices = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"];
  const selRaiz = `
    <div class="dic-raiz">
      <label for="sel-raiz-diccionario">${t("diccionario.tonica")}</label>
      <select id="sel-raiz-diccionario">
        ${raices.map((r) => `<option value="${r}"${r === estadoDiccionario.raiz ? " selected" : ""}>${r}</option>`).join("")}
      </select>
    </div>`;

  const categorias = CATEGORIAS_ACORDES.map((c) => `
    <section class="dic-categoria">
      <div class="bloque-titulo">${tCatAcorde(c.id, c.nombre)}</div>
      <div class="dic-tarjetas">${tarjetasDeCategoria(c.id)}</div>
    </section>`).join("");

  cont.innerHTML = `
    <p class="seccion-intro">${t("diccionario.intro")}</p>
    ${selRaiz}
    ${categorias}
    <div class="dic-detalle" id="dic-detalle"></div>`;

  $("#sel-raiz-diccionario").addEventListener("change", (e) => {
    // si había un acorde abierto, lo volvemos a armar con la raíz nueva
    // en vez de perder la selección (el sufijo es lo que identifica la
    // calidad; la raíz vieja ya no importa una vez que la cambiamos)
    const raizAnterior = estadoDiccionario.raiz;
    const activoPrevio = estadoDiccionario.activo
      ? DICCIONARIO_ACORDES.find((d) => cifradoDeEntrada(d, raizAnterior) === estadoDiccionario.activo)
      : null;
    estadoDiccionario.raiz = e.target.value;
    pintarDiccionario();
    if (activoPrevio) abrirEntradaDiccionario(activoPrevio);
  });

  $$(".tarjeta-acorde", cont).forEach((b) => {
    b.addEventListener("click", () => {
      const d = DICCIONARIO_ACORDES.find((x) => cifradoDeEntrada(x, estadoDiccionario.raiz) === b.dataset.cifrado);
      if (!d) return;
      abrirEntradaDiccionario(d);
      // las digitaciones (posiciones, instrumento, escala encima, sonido)
      // se ven en el modal "Cómo tocar" — el mismo que usa el resto del
      // sitio — no expandidas abajo de las tarjetas.
      mostrarComoTocar(b.dataset.cifrado);
    });
  });

  if (estadoDiccionario.activo) {
    const d = DICCIONARIO_ACORDES.find((x) => cifradoDeEntrada(x, estadoDiccionario.raiz) === estadoDiccionario.activo);
    if (d) pintarDetalleDiccionario(d);
  }
}

function abrirEntradaDiccionario(d) {
  estadoDiccionario.activo = cifradoDeEntrada(d, estadoDiccionario.raiz);
  $$(".tarjeta-acorde").forEach((b) => b.classList.toggle("activo", b.dataset.cifrado === estadoDiccionario.activo));
  pintarDetalleDiccionario(d);
  const detalle = $("#dic-detalle");
  if (detalle) detalle.scrollIntoView({ behavior: "smooth", block: "start" });
}

/* Sólo la referencia de teoría (fórmula, notas, descripción) — las
   digitaciones y posiciones se ven en el modal "Cómo tocar" (mismo que
   usa el resto del sitio), no expandidas acá abajo. */
function pintarDetalleDiccionario(d) {
  const detalle = $("#dic-detalle");
  if (!detalle) return;
  const cifrado = cifradoDeEntrada(d, estadoDiccionario.raiz);
  const diagramas = diagramasDeAcorde(cifrado);
  if (!diagramas) { detalle.innerHTML = ""; return; }

  const nombreTraducido = tEntradaAcorde(d.categoria, d.sufijo, "nombre", d.nombre);
  const descripcionTraducida = tEntradaAcorde(d.categoria, d.sufijo, "descripcion", d.descripcion);
  detalle.innerHTML = `
    <div class="dic-detalle-cabeza">
      <h3>${cifrado}<span class="dic-detalle-nombre"> — ${nombreTraducido}</span></h3>
      <p class="dic-detalle-formula"><b>${t("diccionario.formula")}:</b> ${d.formula}</p>
      <p class="dic-detalle-notas"><b>${t("diccionario.notas")}:</b> ${diagramas.notas}</p>
      <p class="dic-detalle-descripcion">${descripcionTraducida}</p>
      <button class="btn-escuchar dic-ver-modal" type="button" data-cifrado="${cifrado}">
        <span class="btn-escuchar-icono">▶</span>
        <span>${t("diccionario.verComoTocarlo")}</span>
      </button>
    </div>`;

  const btnModal = $(".dic-ver-modal", detalle);
  if (btnModal) btnModal.addEventListener("click", () => mostrarComoTocar(btnModal.dataset.cifrado));
}
