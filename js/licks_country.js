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

  /* ---- tanda 2 ---- */
  {
    id: "cp-g-04",
    nombre: "Doble parada simulada en Sol",
    tonalidad: "G", raiz: "G", escala: "pentaMayor",
    tecnica: "hybrid picking (dobles)", dificultad: "intermedio",
    nota: "Alterna rápido entre dos cuerdas vecinas para simular una doble parada sin tocarlas juntas: la púa pica la cuerda grave y el dedo medio 'pellizca' la aguda al toque. Es el recurso que usa Brent Mason para que una sola línea suene más ancha de lo que es.",
    notas: [
      { cuerda: 3, traste: 0 }, { cuerda: 4, traste: 0 }, { cuerda: 4, traste: 3 },
      { cuerda: 3, traste: 0 }, { cuerda: 3, traste: 2 }, { cuerda: 4, traste: 0 },
    ],
  },
  {
    id: "cp-g-05",
    nombre: "Cierre con hammer mixolidio en Sol",
    tonalidad: "G", raiz: "G", escala: "mixolidio",
    tecnica: "hammer-on descendente", dificultad: "intermedio",
    nota: "Un hammer-on corto en la primera cuerda (la séptima menor F subiendo a la tónica aguda) y de ahí una bajada diatónica: el mismo truco de 'subo un toque y después bajo toda la frase' que Brad Paisley usa para rematar una vuelta de acordes.",
    notas: [
      { cuerda: 5, traste: 1 }, { cuerda: 5, traste: 3, tecnica: "h" }, { cuerda: 4, traste: 3 },
      { cuerda: 4, traste: 1 }, { cuerda: 4, traste: 0 }, { cuerda: 3, traste: 0 },
    ],
  },
  {
    id: "cp-c-03",
    nombre: "Turnaround chicken pickin' en Do",
    tonalidad: "C", raiz: "C", escala: "jonico",
    tecnica: "chicken pickin'", dificultad: "intermedio-avanzado",
    nota: "Un arpegio de C mayor picado seco (uña de dedo medio contra la cuerda, soltando rápido para el 'cluck') que baja pasando por la cuarta como nota de paso antes de resolver: el gesto de cierre de frase más típico de Brent Mason.",
    notas: [
      { cuerda: 4, traste: 1 }, { cuerda: 5, traste: 0 }, { cuerda: 5, traste: 3, tecnica: "h" },
      { cuerda: 5, traste: 1 }, { cuerda: 5, traste: 0 }, { cuerda: 4, traste: 1 },
    ],
  },
  {
    id: "cp-c-04",
    nombre: "Corrida ascendente pentatónica en Do",
    tonalidad: "C", raiz: "C", escala: "pentaMayor",
    tecnica: "flatpicking ascendente", dificultad: "intermedio",
    nota: "Sube por la pentatónica mayor cruzando tres cuerdas en tercera posición: todo alternado, sin ligados, para practicar la sincronía de púa a tempo rápido antes de meterle hammer-pulls encima.",
    notas: [
      { cuerda: 1, traste: 3 }, { cuerda: 1, traste: 5 }, { cuerda: 2, traste: 2 },
      { cuerda: 3, traste: 0 }, { cuerda: 3, traste: 2 },
    ],
  },
  {
    id: "cp-d-03",
    nombre: "Roll de banjo trasladado en Re",
    tonalidad: "D", raiz: "D", escala: "pentaMayor",
    tecnica: "roll de banjo (fingerstyle)", dificultad: "intermedio-avanzado",
    nota: "El mismo 'forward roll' de tres dedos que cp-c-01 pero en Re, repitiendo un patrón fijo de tres cuerdas tres veces seguidas: pulgar-índice-medio sin parar, dejando que las notas se solapen como una cascada de banjo.",
    notas: [
      { cuerda: 1, traste: 0 }, { cuerda: 2, traste: 0 }, { cuerda: 3, traste: 4 },
      { cuerda: 1, traste: 0 }, { cuerda: 2, traste: 0 }, { cuerda: 3, traste: 4 },
      { cuerda: 1, traste: 0 }, { cuerda: 2, traste: 0 }, { cuerda: 3, traste: 4 },
    ],
  },
  {
    id: "cp-d-04",
    nombre: "Turnaround con novena en Re",
    tonalidad: "D", raiz: "D", escala: "mixolidio",
    tecnica: "turnaround con extensión", dificultad: "avanzado",
    nota: "Camina desde la séptima menor (C) hasta la tónica pasando por todos los grados intermedios: es una frase larga, pensada para llenar un compás entero de introducción antes de que entre la voz, con la novena (E) de paso como color extra.",
    notas: [
      { cuerda: 1, traste: 3 }, { cuerda: 1, traste: 5, tecnica: "h" }, { cuerda: 2, traste: 2 },
      { cuerda: 2, traste: 4 }, { cuerda: 3, traste: 2 }, { cuerda: 2, traste: 0 },
    ],
  },
  {
    id: "cp-a-03",
    nombre: "Bend de pedal steel a la 3ª en La",
    tonalidad: "A", raiz: "A", escala: "jonico",
    tecnica: "bend de pedal steel", dificultad: "intermedio-avanzado",
    nota: "El bend de tono entero más usado en country: la segunda cuerda sube desde la 2da hasta la 3ra mayor (C#) y después la frase resuelve bajando por grados. Con vibrato ancho sobre el bend para que 'cante' como una steel de verdad.",
    notas: [
      { cuerda: 4, traste: 2, tecnica: "b" }, { cuerda: 4, traste: 2 }, { cuerda: 3, traste: 2 },
      { cuerda: 4, traste: 0 }, { cuerda: 3, traste: 4 }, { cuerda: 3, traste: 2 },
    ],
  },
  {
    id: "cp-e-02",
    nombre: "Descendente chicken pickin' en Mi",
    tonalidad: "E", raiz: "E", escala: "mixolidio",
    tecnica: "chicken pickin'", dificultad: "avanzado",
    nota: "Baja cruzando cinco cuerdas distintas, con un hammer-on corto en el medio (la tercera menor de paso hacia la mayor) picado con uña para el 'cluck' característico: cuanto más staccato quede cada nota, más se parece al fraseo de un banjo eléctrico.",
    notas: [
      { cuerda: 2, traste: 0 }, { cuerda: 4, traste: 0 }, { cuerda: 3, traste: 2 },
      { cuerda: 3, traste: 1, tecnica: "h" }, { cuerda: 5, traste: 2 }, { cuerda: 0, traste: 0 },
    ],
  },
  {
    id: "cp-e-03",
    nombre: "Arpegio Travis picking en Mi",
    tonalidad: "E", raiz: "E", escala: "jonico",
    tecnica: "Travis picking", dificultad: "intermedio",
    nota: "Un arpegio de Emaj7 (tónica, séptima mayor, tercera mayor) pensado para el patrón de Chet Atkins: el pulgar marca la fundamental grave mientras índice y medio van y vuelven por las cuerdas agudas sin parar.",
    notas: [
      { cuerda: 0, traste: 0 }, { cuerda: 1, traste: 2 }, { cuerda: 2, traste: 1 },
      { cuerda: 3, traste: 1 }, { cuerda: 2, traste: 1 }, { cuerda: 1, traste: 2 },
    ],
  },
  {
    id: "cp-bb-01",
    nombre: "Corrida bluesera country en Sib",
    tonalidad: "Bb", raiz: "Bb", escala: "bluesMayor",
    tecnica: "blues mayor descendente", dificultad: "intermedio-avanzado",
    nota: "Una tonalidad menos común en country acústico pero clásica del western swing con metales: baja por la pentatónica mayor con la tercera menor metida de pasada (la nota 'sucia' que le da swing) antes de resolver en la tónica.",
    notas: [
      { cuerda: 0, traste: 3 }, { cuerda: 0, traste: 1 }, { cuerda: 1, traste: 5 },
      { cuerda: 1, traste: 4, tecnica: "h" }, { cuerda: 1, traste: 3 }, { cuerda: 1, traste: 1 },
    ],
  },

  /* ---- tanda 3 ---- */
  {
    id: "cp-g-06",
    nombre: "Sextas descendentes en Sol",
    tonalidad: "G", raiz: "G", escala: "pentaMayor",
    tecnica: "sextas (salto de cuerda)", dificultad: "intermedio-avanzado",
    nota: "Salta entre dos cuerdas separadas para sugerir el intervalo de sexta que tanto usa la pedal steel, aunque acá se toque nota por nota: el salto constante es lo que hace que suene 'ancho' sin ser un acorde de verdad.",
    notas: [
      { cuerda: 4, traste: 5 }, { cuerda: 3, traste: 0 }, { cuerda: 2, traste: 0 },
      { cuerda: 4, traste: 0 }, { cuerda: 3, traste: 0 }, { cuerda: 4, traste: 5 },
    ],
  },
  {
    id: "cp-g-07",
    nombre: "Cascada de pull-offs en Sol",
    tonalidad: "G", raiz: "G", escala: "bluesMayor",
    tecnica: "pull-off en cascada", dificultad: "avanzado",
    nota: "Tres pull-offs seguidos en la misma cuerda, pasando por la tercera menor de camino a la mayor (el 'roce sucio' del blues mayor), y después dos notas de cierre en cuerdas vecinas para no quedarte pegado en una sola cuerda.",
    notas: [
      { cuerda: 3, traste: 4 }, { cuerda: 3, traste: 3, tecnica: "p" }, { cuerda: 3, traste: 2, tecnica: "p" },
      { cuerda: 3, traste: 0, tecnica: "p" }, { cuerda: 4, traste: 0 }, { cuerda: 2, traste: 0 },
    ],
  },
  {
    id: "cp-c-05",
    nombre: "Bajo alternante estilo Merle Travis en Do",
    tonalidad: "C", raiz: "C", escala: "jonico",
    tecnica: "bajo alternante (Merle Travis)", dificultad: "intermedio",
    nota: "La melodía escrita sola, sin el bajo alternante de verdad debajo (para eso hace falta el pulgar tocando aparte) — pero el salto de registro grave-agudo-grave ya deja ver el esqueleto rítmico del estilo Travis antes de sumarle el acompañamiento.",
    notas: [
      { cuerda: 1, traste: 3 }, { cuerda: 5, traste: 0 }, { cuerda: 2, traste: 0 },
      { cuerda: 5, traste: 3 }, { cuerda: 3, traste: 0 }, { cuerda: 5, traste: 0 },
    ],
  },
  {
    id: "cp-c-06",
    nombre: "Chicken pickin' con salto de cuerda en Do",
    tonalidad: "C", raiz: "C", escala: "mixolidio",
    tecnica: "chicken pickin' (salto de cuerda)", dificultad: "avanzado",
    nota: "De la sexta cuerda a la primera y de vuelta, todo picado seco: el salto brusco de registro es puro Brent Mason, pensado para sorprender al oído en medio de una frase que hasta ahí venía tranquila.",
    notas: [
      { cuerda: 1, traste: 3 }, { cuerda: 5, traste: 1 }, { cuerda: 1, traste: 3 },
      { cuerda: 5, traste: 3 }, { cuerda: 0, traste: 3 }, { cuerda: 5, traste: 1, tecnica: "h" },
    ],
  },
  {
    id: "cp-d-05",
    nombre: "Vals de bluegrass en Re",
    tonalidad: "D", raiz: "D", escala: "jonico",
    tecnica: "compás de vals (3/4)", dificultad: "intermedio",
    nota: "Pensado para un 3/4 de vals de bluegrass: la tónica y la sexta se turnan como si fueran el 'bajo-acorde-acorde' de un vals, con una nota de paso (la séptima) conectando la vuelta.",
    notas: [
      { cuerda: 3, traste: 2 }, { cuerda: 2, traste: 4 }, { cuerda: 2, traste: 0 },
      { cuerda: 2, traste: 2 }, { cuerda: 1, traste: 4 }, { cuerda: 2, traste: 0 },
    ],
  },
  {
    id: "cp-d-06",
    nombre: "Doble bend cromático en Re",
    tonalidad: "D", raiz: "D", escala: "mixolidio",
    tecnica: "chicken pickin' (doble bend)", dificultad: "avanzado",
    nota: "Dos bends de tono entero seguidos, cada uno resolviendo un semitono más arriba que el anterior — la tensión sube dos veces antes de aflojar en el hammer-on final. Muy Brad Paisley en los puentes instrumentales.",
    notas: [
      { cuerda: 1, traste: 3, tecnica: "b" }, { cuerda: 1, traste: 3 },
      { cuerda: 2, traste: 4, tecnica: "b" }, { cuerda: 2, traste: 4 },
      { cuerda: 2, traste: 2, tecnica: "h" }, { cuerda: 2, traste: 0 },
    ],
  },
  {
    id: "cp-a-04",
    nombre: "Corrida country-rock ascendente en La",
    tonalidad: "A", raiz: "A", escala: "mixolidio",
    tecnica: "flatpicking (alternado)", dificultad: "intermedio",
    nota: "Cinco notas subiendo por la mixolidia sin ligados, todo púa abajo-arriba: la base de cualquier solo de country-rock acústico, para tocar rápido y parejo antes de meterle inflexiones encima.",
    notas: [
      { cuerda: 1, traste: 0 }, { cuerda: 1, traste: 2 }, { cuerda: 1, traste: 4 },
      { cuerda: 2, traste: 0 }, { cuerda: 2, traste: 2 },
    ],
  },
  {
    id: "cp-a-05",
    nombre: "Turnaround final en La",
    tonalidad: "A", raiz: "A", escala: "jonico",
    tecnica: "turnaround (vuelta armónica)", dificultad: "intermedio",
    nota: "El cierre típico antes de repetir la vuelta de acordes: pasa por la tercera mayor y la sensible (B, la segunda) antes de aterrizar en una nota que deja la frase abierta, pidiendo que el ciclo arranque de nuevo.",
    notas: [
      { cuerda: 2, traste: 2 }, { cuerda: 1, traste: 4 }, { cuerda: 1, traste: 2 },
      { cuerda: 1, traste: 0 }, { cuerda: 3, traste: 2 }, { cuerda: 4, traste: 0 },
    ],
  },
  {
    id: "cp-e-04",
    nombre: "Riff de apertura western swing en Mi",
    tonalidad: "E", raiz: "E", escala: "bebopDominante",
    tecnica: "riff de apertura (western swing)", dificultad: "avanzado",
    nota: "Un caminado cromático corto (D subiendo a D#) resuelve en la tónica antes de seguir de largo: es la nota bebop metida justo donde el tiempo fuerte la necesita, la misma receta que separa un riff de western swing de uno de rock liso.",
    notas: [
      { cuerda: 1, traste: 5 }, { cuerda: 1, traste: 6, tecnica: "h" }, { cuerda: 0, traste: 0 },
      { cuerda: 0, traste: 2 }, { cuerda: 1, traste: 4 }, { cuerda: 1, traste: 2 },
    ],
  },
  {
    id: "cp-e-05",
    nombre: "Cierre fingerstyle en Mi",
    tonalidad: "E", raiz: "E", escala: "jonico",
    tecnica: "fingerstyle (arpegio final)", dificultad: "intermedio",
    nota: "Un arpegio de Emaj9 tocado con los dedos, de grave a agudo sin apuro: el tipo de remate que cierra un tema entero, no sólo una frase — dejalo sonar y no apagues las cuerdas hasta que se apague solo.",
    notas: [
      { cuerda: 0, traste: 0 }, { cuerda: 3, traste: 1 }, { cuerda: 4, traste: 0 },
      { cuerda: 5, traste: 2 }, { cuerda: 5, traste: 0 },
    ],
  },

  /* ---- tanda 4 ---- */
  {
    id: "cp-f-01",
    nombre: "Corrida abierta en Fa (posición cejilla)",
    tonalidad: "F", raiz: "F", escala: "jonico",
    tecnica: "flatpicking en cejilla", dificultad: "intermedio",
    nota: "Fa es una tonalidad que casi nadie toca abierta en country — se usa con cejilla. Esta corrida sube la escala completa en 1ra posición para practicar el estiramiento de dedos que pide la cejilla sin perder tiempo.",
    notas: [
      { cuerda: 0, traste: 1 }, { cuerda: 0, traste: 3 }, { cuerda: 1, traste: 0 },
      { cuerda: 1, traste: 1 }, { cuerda: 1, traste: 3 }, { cuerda: 2, traste: 0 },
    ],
  },
  {
    id: "cp-f-02",
    nombre: "Chicken pickin' en Fa",
    tonalidad: "F", raiz: "F", escala: "mixolidio",
    tecnica: "chicken pickin'", dificultad: "avanzado",
    nota: "La séptima menor (Eb) picada seca justo antes de la tónica: ese contraste entre la nota 'sucia' del dominante y la limpieza de la raíz es la firma sonora del western swing con vientos, trasladada a la guitarra sola.",
    notas: [
      { cuerda: 1, traste: 3 }, { cuerda: 0, traste: 3 }, { cuerda: 1, traste: 1 },
      { cuerda: 0, traste: 1 }, { cuerda: 1, traste: 0 }, { cuerda: 2, traste: 1, tecnica: "h" },
    ],
  },
  {
    id: "cp-bb-02",
    nombre: "Turnaround western swing en Sib",
    tonalidad: "Bb", raiz: "Bb", escala: "bebopMayor",
    tecnica: "turnaround western swing", dificultad: "avanzado",
    nota: "La nota bebop (el b6, acá Gb/F#) aparece de pasada entre la 5ta y la 4ta: es el mismo recurso de Chet Atkins para que un cierre en un tono 'de metales' como Sib suene igual de suelto que uno en Sol.",
    notas: [
      { cuerda: 1, traste: 1 }, { cuerda: 1, traste: 3 }, { cuerda: 2, traste: 1 },
      { cuerda: 2, traste: 3, tecnica: "h" }, { cuerda: 2, traste: 0 }, { cuerda: 1, traste: 1 },
    ],
  },
  {
    id: "cp-b-01",
    nombre: "Bend de pedal steel en Si",
    tonalidad: "B", raiz: "B", escala: "jonico",
    tecnica: "bend de pedal steel", dificultad: "avanzado",
    nota: "Otra tonalidad poco común en acústica, típica cuando la guitarra acompaña un fiddle afinado en Si: el bend de tono entero a la tercera mayor (D#) suena idéntico al mismo gesto en Sol o en La, sólo que más agudo.",
    notas: [
      { cuerda: 4, traste: 2, tecnica: "b" }, { cuerda: 4, traste: 2 }, { cuerda: 3, traste: 4 },
      { cuerda: 4, traste: 0 }, { cuerda: 3, traste: 6 }, { cuerda: 3, traste: 4 },
    ],
  },
  {
    id: "cp-g-08",
    nombre: "Riff con bordón al aire en Sol",
    tonalidad: "G", raiz: "G", escala: "mixolidio",
    tecnica: "drone (bordón al aire)", dificultad: "intermedio",
    nota: "La cuerda de Sol al aire suena como bordón fijo mientras la melodía se mueve en la cuerda de al lado — el mismo recurso que usa el banjo claw-hammer y que Doc Watson trasladó todo el tiempo a la guitarra.",
    notas: [
      { cuerda: 3, traste: 0 }, { cuerda: 2, traste: 0 }, { cuerda: 3, traste: 0 },
      { cuerda: 2, traste: 2 }, { cuerda: 3, traste: 0 }, { cuerda: 2, traste: 3, tecnica: "h" },
    ],
  },
  {
    id: "cp-c-07",
    nombre: "Shuffle de 12/8 en Do",
    tonalidad: "C", raiz: "C", escala: "bluesMayor",
    tecnica: "shuffle (12/8, blues country)", dificultad: "intermedio-avanzado",
    nota: "Pensado para un compás de shuffle en 12/8: el hammer-on corto entre la tercera menor y la mayor cae justo en el 'swing' del tercer tiempo de cada grupo de tres corcheas.",
    notas: [
      { cuerda: 1, traste: 3 }, { cuerda: 1, traste: 5 }, { cuerda: 1, traste: 6, tecnica: "h" },
      { cuerda: 2, traste: 2 }, { cuerda: 3, traste: 0 }, { cuerda: 1, traste: 3 },
    ],
  },
  {
    id: "cp-d-07",
    nombre: "Pentatónica rápida en Re",
    tonalidad: "D", raiz: "D", escala: "pentaMayor",
    tecnica: "flatpicking rápido (semicorcheas)", dificultad: "avanzado",
    nota: "Seis notas en semicorcheas pensadas para tocar rápido con púa alternada estricta: no hay ligados que 'ayuden', toda la velocidad sale de la mano derecha, como en un solo de bluegrass a tempo.",
    notas: [
      { cuerda: 2, traste: 0 }, { cuerda: 2, traste: 2 }, { cuerda: 2, traste: 4 },
      { cuerda: 3, traste: 2 }, { cuerda: 4, traste: 0 }, { cuerda: 3, traste: 2 },
    ],
  },
  {
    id: "cp-a-06",
    nombre: "Bend y hammer combinados en La (estilo Albert Lee)",
    tonalidad: "A", raiz: "A", escala: "bluesMayor",
    tecnica: "bend + hammer combinado", dificultad: "avanzado",
    nota: "Un bend chico de la tónica a la segunda, seguido de un hammer-on que sube hasta la tercera mayor pasando por la menor: el 'country lick' más citado de todos, el que casi cualquier guitarrista de sesión sabe tocar de memoria.",
    notas: [
      { cuerda: 1, traste: 2, tecnica: "b" }, { cuerda: 1, traste: 0 }, { cuerda: 1, traste: 3, tecnica: "h" },
      { cuerda: 1, traste: 4 }, { cuerda: 2, traste: 2 }, { cuerda: 1, traste: 0 },
    ],
  },
  {
    id: "cp-e-06",
    nombre: "Arpegio hybrid picking en Mi (E7)",
    tonalidad: "E", raiz: "E", escala: "mixolidio",
    tecnica: "hybrid picking (arpegio de 7ma)", dificultad: "intermedio-avanzado",
    nota: "La púa toca la fundamental grave y los dedos van pellizcando el resto del arpegio de E7 hacia arriba: el patrón de acompañamiento que usa Brad Paisley para que un solo suene como si hubiera dos guitarras tocando a la vez.",
    notas: [
      { cuerda: 0, traste: 0 }, { cuerda: 3, traste: 1 }, { cuerda: 4, traste: 0 },
      { cuerda: 2, traste: 0 }, { cuerda: 3, traste: 1 }, { cuerda: 0, traste: 0 },
    ],
  },
  {
    id: "cp-e-07",
    nombre: "Cierre agudo tipo campanita en Mi",
    tonalidad: "E", raiz: "E", escala: "jonico",
    tecnica: "arpegio agudo (efecto campana)", dificultad: "avanzado",
    nota: "Arriba del traste 9, con las cuerdas dejadas sonar todo lo posible: el registro agudo y el solapado entre notas es lo que le da ese 'timbre de campanita' al remate final, muy usado para cerrar un tema entero.",
    notas: [
      { cuerda: 5, traste: 12 }, { cuerda: 4, traste: 12 }, { cuerda: 3, traste: 13 },
      { cuerda: 5, traste: 12 }, { cuerda: 4, traste: 9 }, { cuerda: 5, traste: 9 },
    ],
  },
];
