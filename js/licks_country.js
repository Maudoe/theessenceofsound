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

  /* ---- tanda 5 ---- */
  {
    id: "cp-g-09",
    nombre: "Slide largo en Sol",
    tonalidad: "G", raiz: "G", escala: "pentaMayor",
    tecnica: "slide (ligado largo)", dificultad: "intermedio",
    nota: "Dos deslizamientos largos (más de un tono cada uno) en vez de hammer-ons cortos: el dedo no se levanta en ningún momento, así que la frase suena continua, casi como un lamento de steel en vez de picada nota por nota.",
    notas: [
      { cuerda: 3, traste: 2 }, { cuerda: 3, traste: 4, tecnica: "/" }, { cuerda: 4, traste: 0 },
      { cuerda: 2, traste: 0 }, { cuerda: 4, traste: 3, tecnica: "/" }, { cuerda: 3, traste: 0 },
    ],
  },
  {
    id: "cp-g-10",
    nombre: "Tresillos con pull-off en Sol",
    tonalidad: "G", raiz: "G", escala: "jonico",
    tecnica: "tresillos con pull-off", dificultad: "avanzado",
    nota: "Dos grupos de tresillo, cada uno con un pull-off doble: picás la primera nota de cada grupo y las otras dos salen solas del ligado. Es el patrón rítmico que hace que una corrida de bluegrass 'ruede' en vez de sonar a notas sueltas.",
    notas: [
      { cuerda: 5, traste: 3 }, { cuerda: 5, traste: 2, tecnica: "p" }, { cuerda: 5, traste: 0, tecnica: "p" },
      { cuerda: 4, traste: 3 }, { cuerda: 4, traste: 1, tecnica: "p" }, { cuerda: 4, traste: 0, tecnica: "p" },
    ],
  },
  {
    id: "cp-c-08",
    nombre: "Cascada de hammers en Do (cuatro cuerdas)",
    tonalidad: "C", raiz: "C", escala: "pentaMayor",
    tecnica: "hammer-on en cascada (4 cuerdas)", dificultad: "intermedio",
    nota: "Una nota por cuerda, subiendo por cuatro cuerdas distintas, con un solo hammer-on en el medio para romper la monotonía de 'una nota, una cuerda' — buena para practicar cambios de cuerda limpios con la mano derecha.",
    notas: [
      { cuerda: 1, traste: 3 }, { cuerda: 2, traste: 0 }, { cuerda: 2, traste: 2, tecnica: "h" },
      { cuerda: 3, traste: 0 }, { cuerda: 4, traste: 1 },
    ],
  },
  {
    id: "cp-d-08",
    nombre: "Chicken scratch percusivo en Re",
    tonalidad: "D", raiz: "D", escala: "mixolidio",
    tecnica: "chicken scratch percusivo", dificultad: "intermedio-avanzado",
    nota: "La quinta (A) se repite como si fuera un rasguido percusivo entre cada nota de la melodía: es el recurso de 'Nashville chicken scratch' que rellena el espacio sin ensuciar la armonía, porque la quinta entra en casi cualquier acorde de la tonalidad.",
    notas: [
      { cuerda: 1, traste: 0 }, { cuerda: 2, traste: 0 }, { cuerda: 1, traste: 0 },
      { cuerda: 2, traste: 2 }, { cuerda: 1, traste: 0 }, { cuerda: 2, traste: 0, tecnica: "h" },
    ],
  },
  {
    id: "cp-a-07",
    nombre: "Vuelta de balada country en La menor (eólica)",
    tonalidad: "A", raiz: "A", escala: "eolico",
    tecnica: "balada country (menor)", dificultad: "intermedio",
    nota: "El country también tiene su lado triste: acá la eólica (menor natural) en vez de la mixolidia de siempre, para el tipo de balada lenta donde la letra habla de perder algo. Frase abierta, espaciada, sin apuro.",
    notas: [
      { cuerda: 1, traste: 0 }, { cuerda: 2, traste: 2 }, { cuerda: 1, traste: 3 },
      { cuerda: 2, traste: 0 }, { cuerda: 3, traste: 0 }, { cuerda: 2, traste: 3, tecnica: "h" },
    ],
  },
  {
    id: "cp-a-08",
    nombre: "Corrida rápida de semicorcheas en La",
    tonalidad: "A", raiz: "A", escala: "pentaMayor",
    tecnica: "flatpicking (semicorcheas x8)", dificultad: "avanzado",
    nota: "Ocho notas subiendo y bajando en espejo, para tocar como un solo grupo de semicorcheas a tempo rápido: la simetría (sube 4, baja las mismas 4) hace que sea mucho más fácil de memorizar que una corrida al azar.",
    notas: [
      { cuerda: 1, traste: 0 }, { cuerda: 1, traste: 2 }, { cuerda: 1, traste: 4 }, { cuerda: 2, traste: 2 },
      { cuerda: 2, traste: 4 }, { cuerda: 2, traste: 2 }, { cuerda: 1, traste: 4 }, { cuerda: 1, traste: 2 },
    ],
  },
  {
    id: "cp-e-08",
    nombre: "Doble parada simulada en Mi",
    tonalidad: "E", raiz: "E", escala: "pentaMayor",
    tecnica: "hybrid picking (dobles)", dificultad: "intermedio",
    nota: "El mismo recurso de cp-g-04 pero en Mi, la tonalidad más cómoda de la guitarra para este tipo de salto: aprovechá las cuerdas al aire donde caigan para que la mano izquierda tenga que moverse lo menos posible.",
    notas: [
      { cuerda: 0, traste: 0 }, { cuerda: 1, traste: 2 }, { cuerda: 0, traste: 4 },
      { cuerda: 1, traste: 4 }, { cuerda: 0, traste: 2 }, { cuerda: 1, traste: 2 },
    ],
  },
  {
    id: "cp-e-09",
    nombre: "Turnaround de walk descendente en Mi",
    tonalidad: "E", raiz: "E", escala: "jonico",
    tecnica: "turnaround (walk descendente)", dificultad: "intermedio-avanzado",
    nota: "Baja por grados desde la tónica hasta la quinta (E-D#-C#-B), sugiriendo por el camino un I-vi-ii-V sin necesidad de tocar los acordes: es la misma lógica armónica de un turnaround de jazz, sólo que en una sola línea.",
    notas: [
      { cuerda: 0, traste: 0 }, { cuerda: 1, traste: 6 }, { cuerda: 1, traste: 4 },
      { cuerda: 1, traste: 2 }, { cuerda: 2, traste: 2 }, { cuerda: 1, traste: 2 },
    ],
  },
  {
    id: "cp-c-09",
    nombre: "Lick de dominante en Do (chicken pickin')",
    tonalidad: "C", raiz: "C", escala: "mixolidio",
    tecnica: "chicken pickin' (dominante)", dificultad: "avanzado",
    nota: "La tónica y la séptima menor (Bb) se turnan picadas secas antes de que entren la 3ra y la 5ta: remarca que el acorde es un C7, no un C mayor liso, algo clave cuando este lick suena justo antes de resolver a F.",
    notas: [
      { cuerda: 1, traste: 3 }, { cuerda: 1, traste: 1 }, { cuerda: 1, traste: 3, tecnica: "h" },
      { cuerda: 2, traste: 2 }, { cuerda: 3, traste: 0 }, { cuerda: 1, traste: 1 },
    ],
  },
  {
    id: "cp-d-09",
    nombre: "Cierre final de tema en Re (fingerstyle)",
    tonalidad: "D", raiz: "D", escala: "jonico",
    tecnica: "fingerstyle (cierre final)", dificultad: "intermedio",
    nota: "Un arpegio corto de Dmaj (5ta, 3ra, tónica grave, tónica aguda) para cerrar el tema entero: dejalo resonar con las cuerdas al aire y no apures el último traste — el silencio después también es parte de la frase.",
    notas: [
      { cuerda: 2, traste: 0 }, { cuerda: 2, traste: 4 }, { cuerda: 1, traste: 0 },
      { cuerda: 2, traste: 12 },
    ],
  },

  /* ---- tanda 6 ---- */
  {
    id: "cp-g-11",
    nombre: "Fill de bajo caminando en Sol",
    tonalidad: "G", raiz: "G", escala: "jonico",
    tecnica: "walking bass fill", dificultad: "intermedio",
    nota: "Cuatro notas subiendo por grados, del I al IV: el mismo camino que haría el bajo entre dos acordes, tocado acá como relleno de guitarra en el espacio que deja la voz entre frases.",
    notas: [
      { cuerda: 0, traste: 3 }, { cuerda: 1, traste: 0 }, { cuerda: 1, traste: 2 }, { cuerda: 1, traste: 3 },
    ],
  },
  {
    id: "cp-g-12",
    nombre: "Turnaround de blues de doce compases en Sol",
    tonalidad: "G", raiz: "G", escala: "bluesMayor",
    tecnica: "turnaround de blues (12 compases)", dificultad: "intermedio-avanzado",
    nota: "El cierre típico del último compás de un blues de doce: sube con un hammer-on pasando por la tercera menor 'sucia' hasta la mayor, y después baja directo a la tónica para que el ciclo vuelva a arrancar.",
    notas: [
      { cuerda: 3, traste: 0 }, { cuerda: 3, traste: 3, tecnica: "h" }, { cuerda: 3, traste: 4 },
      { cuerda: 2, traste: 0 }, { cuerda: 4, traste: 0 }, { cuerda: 3, traste: 0 },
    ],
  },
  {
    id: "cp-c-10",
    nombre: "Tresillos ligados en Do",
    tonalidad: "C", raiz: "C", escala: "pentaMayor",
    tecnica: "tresillos ligados", dificultad: "avanzado",
    nota: "Dos grupos de tresillo con un hammer-on cada uno, cruzando de la pentatónica baja a la alta: pensado para tocar con metrónomo lento primero y después llevarlo a tempo, porque el segundo grupo depende de que el primero termine parejo.",
    notas: [
      { cuerda: 1, traste: 3 }, { cuerda: 1, traste: 5, tecnica: "h" }, { cuerda: 2, traste: 2 },
      { cuerda: 3, traste: 0 }, { cuerda: 3, traste: 2, tecnica: "h" }, { cuerda: 1, traste: 3 },
    ],
  },
  {
    id: "cp-d-10",
    nombre: "Roll de banjo en Re (variación aguda)",
    tonalidad: "D", raiz: "D", escala: "pentaMayor",
    tecnica: "roll de banjo (fingerstyle)", dificultad: "intermedio-avanzado",
    nota: "La misma idea de forward roll que cp-d-03, pero un registro más arriba (E-A-F# en vez de A-D-B): cambiar de registro sin cambiar el patrón es un truco típico de banjo para variar sin complicarse la mano.",
    notas: [
      { cuerda: 2, traste: 2 }, { cuerda: 1, traste: 0 }, { cuerda: 2, traste: 4 },
      { cuerda: 2, traste: 2 }, { cuerda: 1, traste: 0 }, { cuerda: 2, traste: 4 },
    ],
  },
  {
    id: "cp-a-09",
    nombre: "Nota pedal contra Mi agudo en La",
    tonalidad: "A", raiz: "A", escala: "mixolidio",
    tecnica: "nota pedal (cuerda al aire)", dificultad: "intermedio",
    nota: "La primera cuerda al aire (Mi, la quinta de La) se repite fija entre cada nota que cambia en la cuerda de al lado: el mismo recurso de las gaitas y las cornamusas, trasladado a la guitarra de country.",
    notas: [
      { cuerda: 5, traste: 0 }, { cuerda: 1, traste: 0 }, { cuerda: 5, traste: 0 },
      { cuerda: 1, traste: 2 }, { cuerda: 5, traste: 0 }, { cuerda: 1, traste: 4 },
    ],
  },
  {
    id: "cp-a-10",
    nombre: "Corrida con doble hammer-on en La",
    tonalidad: "A", raiz: "A", escala: "jonico",
    tecnica: "doble hammer-on", dificultad: "intermedio-avanzado",
    nota: "Dos hammer-ons seguidos en la misma cuerda (tónica-2da-3ra) antes de cruzar a la cuerda de al lado: hay que dejar que el dedo que pisa la tónica se quede quieto mientras los otros dos van cayendo encima.",
    notas: [
      { cuerda: 1, traste: 0 }, { cuerda: 1, traste: 2, tecnica: "h" }, { cuerda: 1, traste: 4, tecnica: "h" },
      { cuerda: 2, traste: 0 }, { cuerda: 2, traste: 2 }, { cuerda: 1, traste: 0 },
    ],
  },
  {
    id: "cp-e-10",
    nombre: "Remate de blues de doce compases en Mi",
    tonalidad: "E", raiz: "E", escala: "bluesMayor",
    tecnica: "remate de blues (12 compases)", dificultad: "intermedio-avanzado",
    nota: "Sube toda la escala de blues mayor de un tirón, con un hammer-on justo en el medio (la tercera menor de paso): el remate de manual para terminar un solo de blues-country antes de que vuelva a entrar la voz.",
    notas: [
      { cuerda: 0, traste: 0 }, { cuerda: 0, traste: 2 }, { cuerda: 0, traste: 3, tecnica: "h" },
      { cuerda: 0, traste: 4 }, { cuerda: 1, traste: 2 }, { cuerda: 0, traste: 0 },
    ],
  },
  {
    id: "cp-e-11",
    nombre: "Llamada y respuesta en Mi",
    tonalidad: "E", raiz: "E", escala: "mixolidio",
    tecnica: "llamada y respuesta (call & response)", dificultad: "intermedio",
    nota: "Dos notas cortas de 'pregunta' arriba, y cuatro de 'respuesta' que bajan y resuelven: pensado como diálogo entre dos frases de una melodía cantada, no como una corrida continua.",
    notas: [
      { cuerda: 0, traste: 0 }, { cuerda: 0, traste: 2 },
      { cuerda: 3, traste: 1 }, { cuerda: 4, traste: 0 }, { cuerda: 2, traste: 0 }, { cuerda: 0, traste: 0 },
    ],
  },
  {
    id: "cp-c-11",
    nombre: "Bend corto expresivo en Do",
    tonalidad: "C", raiz: "C", escala: "bluesMayor",
    tecnica: "bend corto (microtonal aprox.)", dificultad: "avanzado",
    nota: "Un bend chiquito (menos de medio tono, sólo 'ensucia' la afinación un instante) justo antes de la tónica: el gesto expresivo que separa a un guitarrista que 'canta' con el instrumento de uno que sólo pisa trastes.",
    notas: [
      { cuerda: 4, traste: 1, tecnica: "b" }, { cuerda: 4, traste: 1 }, { cuerda: 5, traste: 0 },
      { cuerda: 5, traste: 3 }, { cuerda: 4, traste: 1 }, { cuerda: 5, traste: 0 },
    ],
  },
  {
    id: "cp-d-11",
    nombre: "Cascada final en Re (cierre de solo)",
    tonalidad: "D", raiz: "D", escala: "pentaMayor",
    tecnica: "cascada descendente (cierre de solo)", dificultad: "intermedio",
    nota: "Baja desde la séptima hasta la tercera cruzando cuatro cuerdas distintas: el tipo de frase larga y descendente que cierra un solo entero, dejando la última nota (la tercera mayor) colgando sin resolver del todo.",
    notas: [
      { cuerda: 4, traste: 0 }, { cuerda: 2, traste: 4 }, { cuerda: 2, traste: 0 },
      { cuerda: 1, traste: 0 }, { cuerda: 2, traste: 2 }, { cuerda: 2, traste: 0 },
    ],
  },

  /* ---- tanda 7 ---- */
  {
    id: "cp-g-13",
    nombre: "Lick sobre el IV (Do) dentro de Sol",
    tonalidad: "C", raiz: "C", escala: "jonico",
    tecnica: "lick sobre el IV", dificultad: "intermedio",
    nota: "Cuando la vuelta de Sol pasa por el acorde de Do (el IV), este lick cambia de centro tonal sin que se note el corte: pensalo como una frase aparte que sólo aparece mientras suena ese acorde.",
    notas: [
      { cuerda: 1, traste: 3 }, { cuerda: 2, traste: 0 }, { cuerda: 2, traste: 2 },
      { cuerda: 3, traste: 0 }, { cuerda: 2, traste: 0 }, { cuerda: 1, traste: 3 },
    ],
  },
  {
    id: "cp-g-14",
    nombre: "Lick sobre el V (Re7) dentro de Sol",
    tonalidad: "D", raiz: "D", escala: "mixolidio",
    tecnica: "lick sobre el V", dificultad: "intermedio-avanzado",
    nota: "El acorde de Re7 (el V de Sol) pide su propia mixolidia por un compás: la séptima menor (Do) aparece justo antes de resolver, marcando con claridad que ahí hay tensión que quiere volver a casa.",
    notas: [
      { cuerda: 2, traste: 0 }, { cuerda: 2, traste: 4 }, { cuerda: 3, traste: 0 },
      { cuerda: 2, traste: 0 }, { cuerda: 1, traste: 3 }, { cuerda: 2, traste: 0 },
    ],
  },
  {
    id: "cp-c-12",
    nombre: "Chicken pickin' sincopado en Do",
    tonalidad: "C", raiz: "C", escala: "mixolidio",
    tecnica: "chicken pickin' sincopado", dificultad: "avanzado",
    nota: "Las notas caen fuera del tiempo fuerte a propósito, adelantadas medio pulso: esa sensación de 'tropezón controlado' es lo que hace que el chicken pickin' suene vivo y no a metrónomo.",
    notas: [
      { cuerda: 1, traste: 3 }, { cuerda: 2, traste: 0 }, { cuerda: 1, traste: 1 },
      { cuerda: 5, traste: 0 }, { cuerda: 1, traste: 3 }, { cuerda: 0, traste: 3 },
    ],
  },
  {
    id: "cp-c-13",
    nombre: "Arpegio de novena en Do (Cmaj9, fingerstyle)",
    tonalidad: "C", raiz: "C", escala: "jonico",
    tecnica: "fingerstyle (arpegio de 9na)", dificultad: "intermedio",
    nota: "Tónica, séptima mayor, quinta, tercera y novena: el arpegio completo de un Cmaj9 tocado nota por nota con los dedos, de agudo a grave, para un intro fingerpicking tranquilo.",
    notas: [
      { cuerda: 1, traste: 3 }, { cuerda: 4, traste: 0 }, { cuerda: 3, traste: 0 },
      { cuerda: 5, traste: 0 }, { cuerda: 2, traste: 0 }, { cuerda: 5, traste: 0 },
    ],
  },
  {
    id: "cp-d-12",
    nombre: "Corrida veloz de ocho notas en Re",
    tonalidad: "D", raiz: "D", escala: "mixolidio",
    tecnica: "flatpicking veloz (ocho notas)", dificultad: "avanzado",
    nota: "La mixolidia completa subiendo, ocho notas parejas de punta a punta: buen ejercicio para conectar tres cuerdas sin que se note el cambio, algo que todo solo de flatpicking rápido necesita tarde o temprano.",
    notas: [
      { cuerda: 2, traste: 0 }, { cuerda: 2, traste: 2 }, { cuerda: 2, traste: 4 }, { cuerda: 3, traste: 0 },
      { cuerda: 3, traste: 2 }, { cuerda: 4, traste: 0 }, { cuerda: 1, traste: 3 }, { cuerda: 2, traste: 0 },
    ],
  },
  {
    id: "cp-d-13",
    nombre: "Sextas por salto de cuerda en Re",
    tonalidad: "D", raiz: "D", escala: "pentaMayor",
    tecnica: "sextas (salto de cuerda)", dificultad: "intermedio-avanzado",
    nota: "El mismo salto de cuerda de cp-g-06 y cp-e-13 pero en Re: el patrón es idéntico en cualquier tonalidad, sólo cambia dónde empieza — una vez que lo agarrás en una cuerda, lo tenés en todas.",
    notas: [
      { cuerda: 4, traste: 0 }, { cuerda: 2, traste: 4 }, { cuerda: 1, traste: 0 },
      { cuerda: 2, traste: 2 }, { cuerda: 4, traste: 0 }, { cuerda: 2, traste: 4 },
    ],
  },
  {
    id: "cp-a-11",
    nombre: "Cascada de tresillos en La",
    tonalidad: "A", raiz: "A", escala: "pentaMayor",
    tecnica: "tresillos en cascada", dificultad: "avanzado",
    nota: "Dos grupos de tresillo con hammer-on doble cada uno: la mano izquierda hace casi todo el trabajo, la derecha sólo pica la primera nota de cada grupo de tres.",
    notas: [
      { cuerda: 1, traste: 0 }, { cuerda: 1, traste: 2, tecnica: "h" }, { cuerda: 1, traste: 4, tecnica: "h" },
      { cuerda: 2, traste: 2 }, { cuerda: 2, traste: 4, tecnica: "h" }, { cuerda: 1, traste: 4 },
    ],
  },
  {
    id: "cp-a-12",
    nombre: "Arpegio de dominante en La (A7, chicken pickin')",
    tonalidad: "A", raiz: "A", escala: "mixolidio",
    tecnica: "chicken pickin' (dominante)", dificultad: "avanzado",
    nota: "Tónica, tercera mayor, quinta y otra vez la tercera: el arpegio de A7 recortado y picado seco, para remarcar que el acorde de base es un dominante y no un La mayor liso.",
    notas: [
      { cuerda: 1, traste: 0 }, { cuerda: 1, traste: 4 }, { cuerda: 2, traste: 2 },
      { cuerda: 3, traste: 0 }, { cuerda: 2, traste: 2 }, { cuerda: 1, traste: 4 },
    ],
  },
  {
    id: "cp-e-12",
    nombre: "Vibrato final sostenido en Mi",
    tonalidad: "E", raiz: "E", escala: "jonico",
    tecnica: "vibrato ancho (nota sostenida)", dificultad: "intermedio",
    nota: "Una frase corta de tres notas que sube hasta la tónica aguda para quedarse ahí con vibrato ancho y sostenido: el tipo de final que se usa para rematar el último verso de una balada country.",
    notas: [
      { cuerda: 0, traste: 0 }, { cuerda: 3, traste: 1 }, { cuerda: 4, traste: 0 }, { cuerda: 5, traste: 0 },
    ],
  },
  {
    id: "cp-e-13",
    nombre: "Cascada de sextas en Mi",
    tonalidad: "E", raiz: "E", escala: "pentaMayor",
    tecnica: "sextas (salto de cuerda)", dificultad: "intermedio-avanzado",
    nota: "El mismo salto de cuerda de cp-g-06, ahora en Mi: útil para comparar cómo suena exactamente el mismo patrón en distintas tonalidades y notar que el 'color' del salto no cambia, sólo la altura.",
    notas: [
      { cuerda: 4, traste: 0 }, { cuerda: 2, traste: 6 }, { cuerda: 1, traste: 4 },
      { cuerda: 0, traste: 2 }, { cuerda: 4, traste: 0 }, { cuerda: 0, traste: 0 },
    ],
  },

  /* ---- tanda 8 ---- */
  {
    id: "cp-f-03",
    nombre: "Cross-picking en Fa (bluegrass)",
    tonalidad: "F", raiz: "F", escala: "jonico",
    tecnica: "cross-picking (arpegio bluegrass)", dificultad: "avanzado",
    nota: "El patrón de tres notas por cuerda que usa el cross-picking de bluegrass: la púa dibuja un triángulo entre tres cuerdas sin parar, arpegiando un Fa mayor una y otra vez hasta que suena casi como un banjo.",
    notas: [
      { cuerda: 0, traste: 1 }, { cuerda: 1, traste: 0 }, { cuerda: 1, traste: 3 },
      { cuerda: 0, traste: 1 }, { cuerda: 1, traste: 0 }, { cuerda: 1, traste: 3 },
    ],
  },
  {
    id: "cp-f-04",
    nombre: "Bend de medio tono en Fa",
    tonalidad: "F", raiz: "F", escala: "mixolidio",
    tecnica: "bend de medio tono", dificultad: "intermedio-avanzado",
    nota: "Un bend corto (medio tono nomás) de la tercera mayor a la cuarta: mucho más sutil que el clásico bend de tono entero, pensado para 'ensuciar' apenas una nota sin que se note el truco.",
    notas: [
      { cuerda: 1, traste: 1, tecnica: "b" }, { cuerda: 1, traste: 1 }, { cuerda: 0, traste: 1 },
      { cuerda: 1, traste: 3 }, { cuerda: 1, traste: 0 }, { cuerda: 0, traste: 1 },
    ],
  },
  {
    id: "cp-bb-03",
    nombre: "Terceras en movimiento en Sib",
    tonalidad: "Bb", raiz: "Bb", escala: "jonico",
    tecnica: "terceras (movimiento paralelo, simulado)", dificultad: "avanzado",
    nota: "Aunque acá suenan una por una, la idea es la de un dúo en terceras: cada nota está pensada como si tuviera otra sonando una tercera abajo, típico de los arreglos de guitarra doble del western swing.",
    notas: [
      { cuerda: 1, traste: 1 }, { cuerda: 2, traste: 0 }, { cuerda: 1, traste: 3 },
      { cuerda: 2, traste: 1 }, { cuerda: 1, traste: 5 }, { cuerda: 2, traste: 3 },
    ],
  },
  {
    id: "cp-b-02",
    nombre: "Corrida rápida alternada en Si",
    tonalidad: "B", raiz: "B", escala: "mixolidio",
    tecnica: "flatpicking (alternado rápido)", dificultad: "avanzado",
    nota: "Todo en la cuarta posición, sin cuerdas al aire: buen ejercicio para tocar afinado en una tonalidad incómoda sin la ayuda de las cuerdas sueltas de siempre.",
    notas: [
      { cuerda: 4, traste: 0 }, { cuerda: 4, traste: 2 }, { cuerda: 3, traste: 8 },
      { cuerda: 4, traste: 0 }, { cuerda: 4, traste: 2 }, { cuerda: 2, traste: 4 },
    ],
  },
  {
    id: "cp-g-15",
    nombre: "Drone en posición abierta en Sol (variación)",
    tonalidad: "G", raiz: "G", escala: "jonico",
    tecnica: "drone (bordón al aire, variación)", dificultad: "intermedio",
    nota: "Otra vez la cuerda de Sol como bordón fijo, esta vez contra la séptima y la cuarta en vez de la segunda: cambiá qué nota se mueve alrededor del bordón y tenés un lick nuevo con el mismo recurso de base.",
    notas: [
      { cuerda: 3, traste: 0 }, { cuerda: 4, traste: 0 }, { cuerda: 3, traste: 0 },
      { cuerda: 4, traste: 3 }, { cuerda: 3, traste: 0 }, { cuerda: 4, traste: 1 },
    ],
  },
  {
    id: "cp-c-14",
    nombre: "Resolución de ii-V-I en Do (frase corta)",
    tonalidad: "C", raiz: "C", escala: "jonico",
    tecnica: "resolución ii-V-I (frase)", dificultad: "intermedio-avanzado",
    nota: "Cinco notas que dibujan Dm-G7-C sin necesidad de tocar los acordes: la raíz del ii, la tercera del ii, la raíz del V, la tercera del V, y la tónica final — el esqueleto armónico de cualquier ii-V-I, country o jazz.",
    notas: [
      { cuerda: 2, traste: 0 }, { cuerda: 2, traste: 3 }, { cuerda: 3, traste: 0 },
      { cuerda: 4, traste: 0 }, { cuerda: 1, traste: 3 },
    ],
  },
  {
    id: "cp-d-14",
    nombre: "Arpegio extendido en Re (sabor de 13ª)",
    tonalidad: "D", raiz: "D", escala: "mixolidio",
    tecnica: "arpegio extendido (sabor 13)", dificultad: "avanzado",
    nota: "Tónica, tercera, séptima menor y trecena (B) en ese orden: el mismo arpegio ampliado que un pianista de western swing tocaría con la mano izquierda, acá desplegado en una sola línea de guitarra.",
    notas: [
      { cuerda: 2, traste: 0 }, { cuerda: 2, traste: 4 }, { cuerda: 1, traste: 3 },
      { cuerda: 4, traste: 0 }, { cuerda: 3, traste: 2 },
    ],
  },
  {
    id: "cp-a-13",
    nombre: "Lick en posición alta en La",
    tonalidad: "A", raiz: "A", escala: "pentaMayor",
    tecnica: "posición alta (cowboy lick agudo)", dificultad: "avanzado",
    nota: "La misma pentatónica mayor de siempre, pero una octava arriba, cerca del traste 12: el registro agudo y brillante que se usa para el último estribillo de un tema, cuando la energía tiene que subir un cambio.",
    notas: [
      { cuerda: 1, traste: 12 }, { cuerda: 2, traste: 9 }, { cuerda: 2, traste: 11 },
      { cuerda: 1, traste: 12 }, { cuerda: 2, traste: 9 }, { cuerda: 1, traste: 9 },
    ],
  },
  {
    id: "cp-e-14",
    nombre: "Descendente sólo con slides en Mi",
    tonalidad: "E", raiz: "E", escala: "pentaMayor",
    tecnica: "sólo slides (sin púa nueva)", dificultad: "avanzado",
    nota: "Una sola púa al principio, y de ahí todo el descenso se hace deslizando por la misma cuerda sin picar de nuevo: control puro de mano izquierda, sin ayuda de la derecha para disimular los cambios de volumen.",
    notas: [
      { cuerda: 5, traste: 12 }, { cuerda: 5, traste: 9, tecnica: "\\" }, { cuerda: 5, traste: 7, tecnica: "\\" },
      { cuerda: 5, traste: 4, tecnica: "\\" }, { cuerda: 5, traste: 0, tecnica: "\\" },
    ],
  },
  {
    id: "cp-e-15",
    nombre: "Bend largo con release final en Mi",
    tonalidad: "E", raiz: "E", escala: "jonico",
    tecnica: "bend + release (final largo)", dificultad: "avanzado",
    nota: "El bend sube hasta la sexta y se queda ahí colgado antes de soltar (release) hasta la séptima: ese momento de tensión sostenida es el que más se acerca al lamento de una pedal steel de verdad.",
    notas: [
      { cuerda: 0, traste: 0 }, { cuerda: 3, traste: 1 }, { cuerda: 4, traste: 2, tecnica: "b" },
      { cuerda: 4, traste: 2 }, { cuerda: 4, traste: 0 },
    ],
  },
];
