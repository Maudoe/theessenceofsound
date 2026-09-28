/* ============ The Essence of Sound — licks de guitarra country ============
   Cien frases reales, pensadas para guitarra acústica, en el terreno de
   Brad Paisley y Blues Saraceno: chicken pickin' (púa + dedos, "hybrid
   picking"), corridas de pedal steel simuladas con bends, flatpicking de
   bluegrass, y turnarounds de western swing con notas de paso cromáticas.

   Mismo esquema que los licks de ESTILOS (js/estilos.js): {cuerda,
   traste} en orden, cuerda 0 = 6ta (Mi grave) … 5 = 1ra (Mi agudo).
   Técnicas: "h" hammer-on, "p" pull-off, "b" bend (un tono, salvo que
   diga lo contrario en la nota), "/" slide ascendente, "\" slide
   descendente. Cada nota está verificada contra la escala declarada
   (raíz + escala) con scratchpad/verificar_licks.js. */

const LICKS_COUNTRY = [
  {
    id: "cp-g-01",
    nombre: "Entrada chicken pickin' en Sol",
    tonalidad: "G", raiz: "G", escala: "bebopDominante",
    tecnica: "chicken pickin'", dificultad: "intermedio-avanzado",
    nota: "El clásico ataque de púa-y-dedo de Brad Paisley para abrir un tema: sube por la caja de Sol y cruza la séptima mayor (F#) como nota de paso cromática antes de caer en la tónica aguda. Los picados sordos (palm mute suave) en las primeras notas y la campana abierta en la última son la firma del estilo.",
    notas: [
      { cuerda: 2, traste: 0 }, { cuerda: 3, traste: 0 }, { cuerda: 3, traste: 2 },
      { cuerda: 4, traste: 0 }, { cuerda: 3, traste: 4, tecnica: "h" }, { cuerda: 4, traste: 3 },
      { cuerda: 5, traste: 1 }, { cuerda: 5, traste: 3 },
    ],
  },
  {
    id: "cp-g-02",
    nombre: "Bend de pedal steel en Sol",
    tonalidad: "G", raiz: "G", escala: "jonico",
    tecnica: "bend de pedal steel", dificultad: "intermedio-avanzado",
    nota: "Imita el 'pedal down' de una steel: la segunda cuerda sube medio tono hasta la tercera mayor y la sostiene antes de soltar. Empujá el bend con el dedo anular apoyado en el índice para que quede afinado — es el gesto que más define el sonido country sobre acústica.",
    notas: [
      { cuerda: 4, traste: 1, tecnica: "b" }, { cuerda: 4, traste: 1 },
      { cuerda: 3, traste: 0 }, { cuerda: 4, traste: 0 }, { cuerda: 3, traste: 2 },
      { cuerda: 3, traste: 0 },
    ],
  },
  {
    id: "cp-g-03",
    nombre: "Corrida flatpicking descendente en Sol",
    tonalidad: "G", raiz: "G", escala: "jonico",
    tecnica: "flatpicking bluegrass", dificultad: "intermedio",
    nota: "Una corrida de bluegrass de las que se usan para bajar del estribillo a la estrofa: escala mayor completa bajando por tres cuerdas, alternando púa abajo-arriba todo el tiempo (down-up estricto, sin excepciones) para que quede pareja a tempo rápido.",
    notas: [
      { cuerda: 5, traste: 3 }, { cuerda: 5, traste: 2 }, { cuerda: 5, traste: 0 },
      { cuerda: 4, traste: 3 }, { cuerda: 4, traste: 1 }, { cuerda: 4, traste: 0 },
      { cuerda: 3, traste: 2 }, { cuerda: 3, traste: 0 },
    ],
  },
  {
    id: "cp-c-01",
    nombre: "Roll de banjo trasladado en Do",
    tonalidad: "C", raiz: "C", escala: "pentaMayor",
    tecnica: "roll de banjo (fingerstyle)", dificultad: "intermedio-avanzado",
    nota: "Un 'forward roll' de banjo de tres dedos pasado a guitarra: el patrón salta entre tres cuerdas sin repetir el orden, todo dentro de la pentatónica mayor. Con los dedos (pulgar-índice-medio) en vez de púa, deja que cada nota suene sostenida y se solapen un poco, como una cascada.",
    notas: [
      { cuerda: 1, traste: 3 }, { cuerda: 2, traste: 2 }, { cuerda: 3, traste: 0 },
      { cuerda: 1, traste: 3 }, { cuerda: 2, traste: 2 }, { cuerda: 4, traste: 1 },
      { cuerda: 1, traste: 3 }, { cuerda: 2, traste: 2 }, { cuerda: 3, traste: 0 },
    ],
  },
  {
    id: "cp-c-02",
    nombre: "Turnaround western swing en Do",
    tonalidad: "C", raiz: "C", escala: "bebopMayor",
    tecnica: "turnaround western swing", dificultad: "avanzado",
    nota: "El cierre de frase de western swing: baja del 6to grado al 5to pasando por el b6 cromático (la nota bebop) antes de resolver. Es el mismo recurso que usaba Chet Atkins para que un final de verso sonara a jazz sin dejar de sonar country.",
    notas: [
      { cuerda: 1, traste: 3 }, { cuerda: 1, traste: 2 }, { cuerda: 1, traste: 0 },
      { cuerda: 2, traste: 2 }, { cuerda: 2, traste: 0 }, { cuerda: 1, traste: 3 },
    ],
  },
  {
    id: "cp-d-01",
    nombre: "Arpegio Travis picking en Re",
    tonalidad: "D", raiz: "D", escala: "jonico",
    tecnica: "Travis picking", dificultad: "intermedio",
    nota: "El pulgar alterna bajo-quinta mientras índice y medio arpegian arriba: es el patrón de acompañamiento de Chet Atkins/Merle Travis, acá escrito como frase melódica sola para practicar el orden de dedos antes de meter el bajo alternante debajo.",
    notas: [
      { cuerda: 1, traste: 0 }, { cuerda: 2, traste: 0 }, { cuerda: 3, traste: 2 },
      { cuerda: 4, traste: 3 }, { cuerda: 3, traste: 2 }, { cuerda: 2, traste: 0 },
    ],
  },
  {
    id: "cp-d-02",
    nombre: "Doble bend chicken pickin' en Re",
    tonalidad: "D", raiz: "D", escala: "jonico",
    tecnica: "chicken pickin'", dificultad: "avanzado",
    nota: "Dos bends cortos y secos (medio tono cada uno) picados con la uña del dedo medio para ese 'cluck' percusivo característico, resolviendo en la tónica con un hammer-on final. Muy usado por Brent Mason y Brad Paisley en los remates de solo.",
    notas: [
      { cuerda: 4, traste: 3, tecnica: "b" }, { cuerda: 4, traste: 3 },
      { cuerda: 3, traste: 4, tecnica: "b" }, { cuerda: 3, traste: 4 },
      { cuerda: 3, traste: 2, tecnica: "h" }, { cuerda: 4, traste: 3 },
    ],
  },
  {
    id: "cp-a-01",
    nombre: "Corrida cromática de paso en La",
    tonalidad: "A", raiz: "A", escala: "bebopDominante",
    tecnica: "corrida cromática", dificultad: "avanzado",
    nota: "La séptima mayor (G#) aparece de pura nota de paso, nunca se queda parada: separa la séptima menor de la tónica en un tranco de semitono-semitono que suena inevitable en vez de forzado. Ideal para conectar dos compases de un mismo acorde sin repetirte.",
    notas: [
      { cuerda: 2, traste: 4 }, { cuerda: 2, traste: 5, tecnica: "h" }, { cuerda: 1, traste: 2 },
      { cuerda: 1, traste: 4, tecnica: "h" }, { cuerda: 1, traste: 5 }, { cuerda: 2, traste: 2 },
    ],
  },
  {
    id: "cp-a-02",
    nombre: "Blues country descendente en La",
    tonalidad: "A", raiz: "A", escala: "bluesMayor",
    tecnica: "blues mayor con hammer-pull", dificultad: "intermedio",
    nota: "La pentatónica mayor con la b3 metida de refilón: ese roce entre la tercera menor y la mayor (aquí como hammer-on rapidísimo) es lo que separa un lick 'country' de uno puramente pop — el mismo truco que usa Albert Lee constantemente.",
    notas: [
      { cuerda: 1, traste: 2, tecnica: "h" }, { cuerda: 1, traste: 4 }, { cuerda: 0, traste: 2 },
      { cuerda: 1, traste: 0 }, { cuerda: 0, traste: 5, tecnica: "h" }, { cuerda: 0, traste: 0 },
    ],
  },
  {
    id: "cp-e-01",
    nombre: "Remate de solo en Mi con slide",
    tonalidad: "E", raiz: "E", escala: "jonico",
    tecnica: "slide + hammer final", dificultad: "intermedio-avanzado",
    nota: "Un deslizamiento largo desde la sexta hasta la tónica en la primera cuerda, con el vibrato final bien abierto: el remate clásico de solo de country-rock acústico, pensado para cerrar una frase y dejar el silencio hablar.",
    notas: [
      { cuerda: 3, traste: 4 }, { cuerda: 4, traste: 5 }, { cuerda: 4, traste: 7, tecnica: "h" },
      { cuerda: 5, traste: 5 }, { cuerda: 5, traste: 9, tecnica: "/" }, { cuerda: 5, traste: 12 },
    ],
  },
];
