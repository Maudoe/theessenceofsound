/* ============ The Essence of Sound — guía por estilo musical ============

   Cada estilo trae lo mismo: con qué acordes se arma, qué escalas se
   tocan encima, cuáles son sus transiciones típicas (el truco que lo hace
   sonar a ese género y no a otro) y algunos licks escritos en tablatura.

   Los licks son secuencias reales sobre el mástil: {cuerda, traste} en
   orden, donde cuerda 0 es la 6ta (Mi grave) y 5 la 1ra (Mi agudo). Todos
   están escritos en afinación estándar y verificados contra la escala que
   dicen usar — si un número no diera la nota que corresponde, el test lo
   canta. */

const ESTILOS = {
  pop: {
    nombre: "Pop",
    resumen: "Cuatro acordes que ya te sabés, y todo el trabajo puesto en que la melodía entre a la primera.",
    acento: "#ff6fae",
    tonalidadEjemplo: "C",
    progresiones: [
      { grados: "I – V – vi – IV", ejemplo: "C – G – Am – F", nota: "La más usada de la música popular. Funciona porque nunca llega a irse del todo: el vi te hace creer que se puso triste y el IV te devuelve." },
      { grados: "vi – IV – I – V", ejemplo: "Am – F – C – G", nota: "La misma rueda arrancando por el menor. Suena más melancólica sin cambiar una nota." },
      { grados: "I – vi – IV – V", ejemplo: "C – Am – F – G", nota: "La de los años 50. Más inocente, más redonda." },
    ],
    acordes: ["C", "G", "Am", "F", "Csus4", "Gsus4", "Fmaj7", "Cadd9"],
    escalas: ["jonico", "pentaMayor", "eolico"],
    transiciones: [
      { de: "IV", a: "I", como: "Cadencia plagal", porque: "El 'amén'. Resuelve sin el empuje del V, más suave y abierto — por eso tantos estribillos terminan ahí." },
      { de: "V", a: "vi", como: "Resolución rota", porque: "Prometés la tónica y caés en el relativo menor. Es el truco para que un estribillo no termine y siga girando." },
      { de: "I", a: "IV", como: "Con sus4 en el medio", porque: "Meté un Isus4 antes del IV: la cuarta ya te adelanta la nota del acorde que viene y el cambio se siente inevitable." },
    ],
    licks: [
      {
        nombre: "Remate de estribillo en Do",
        escala: "pentaMayor", raiz: "C",
        nota: "Baja por la pentatónica mayor y cae en la tónica. Es el relleno entre dos frases cantadas.",
        notas: [
          { cuerda: 5, traste: 8 }, { cuerda: 5, traste: 5 }, { cuerda: 4, traste: 8 },
          { cuerda: 4, traste: 5 }, { cuerda: 3, traste: 7 }, { cuerda: 3, traste: 5 },
        ],
      },
    ],
  },

  rock: {
    nombre: "Rock",
    resumen: "El bVII prestado del mixolidio, quintas sin tercera y la pentatónica menor encima de todo.",
    acento: "#ffa53d",
    tonalidadEjemplo: "E",
    progresiones: [
      { grados: "I – bVII – IV", ejemplo: "E – D – A", nota: "La progresión mixolidia. Ese Re mayor no pertenece a Mi mayor: viene del modo mixolidio y es exactamente lo que suena a rock y no a pop." },
      { grados: "i – bVII – bVI", ejemplo: "Em – D – C", nota: "La bajada eólica. Desciende sola, sirve de riff y de estribillo." },
      { grados: "I – IV – V", ejemplo: "E – A – B", nota: "El esqueleto de siempre, tocado con quintas y distorsión." },
    ],
    acordes: ["E5", "A5", "D5", "E", "A", "D", "Em", "C"],
    escalas: ["pentaMenor", "mixolidio", "blues", "eolico"],
    transiciones: [
      { de: "bVII", a: "I", como: "Cadencia doble plagal", porque: "Sube un tono entero hasta la tónica sin pasar por el V. No tiene sensible, y esa falta de urgencia es la que suena a rock." },
      { de: "I", a: "bIII", como: "Salto al relativo prestado", porque: "De Mi a Sol: te lleva al terreno menor sin cambiar de tónica. Clásico para el puente." },
      { de: "V", a: "IV", como: "Bajada de blues", porque: "Del V al IV en vez de resolver. Rompe la regla clásica y por eso empuja." },
    ],
    licks: [
      {
        nombre: "Riff en quintas sobre Mi",
        escala: "pentaMenor", raiz: "E",
        nota: "Las notas graves del riff: tónica, séptima menor y cuarta. Con palm mute y todo abajo.",
        notas: [
          { cuerda: 0, traste: 0 }, { cuerda: 0, traste: 0 }, { cuerda: 0, traste: 3 },
          { cuerda: 0, traste: 0 }, { cuerda: 0, traste: 5 }, { cuerda: 0, traste: 3 },
          { cuerda: 0, traste: 0 },
        ],
      },
      {
        nombre: "Respuesta en pentatónica de Mi",
        escala: "pentaMenor", raiz: "E",
        nota: "La caja de la 12va posición, subiendo y bajando. El bend del traste 15 va un tono entero.",
        notas: [
          { cuerda: 5, traste: 12 }, { cuerda: 5, traste: 15, tecnica: "b" },
          { cuerda: 5, traste: 12 }, { cuerda: 4, traste: 15 }, { cuerda: 4, traste: 12 },
          { cuerda: 3, traste: 14 }, { cuerda: 3, traste: 12 },
        ],
      },
    ],
  },

  blues: {
    nombre: "Blues",
    resumen: "Doce compases, tres acordes dominantes y una tercera que nunca se decide entre mayor y menor.",
    acento: "#5bc8f5",
    tonalidadEjemplo: "A",
    progresiones: [
      { grados: "I7 – IV7 – I7 – V7", ejemplo: "A7 – D7 – A7 – E7", nota: "Los doce compases. Lo raro y lo bueno es que la tónica también es dominante: no resuelve nunca del todo." },
      { grados: "I7 – IV7 – I7 – V7 – IV7 – I7", ejemplo: "A7 – D7 – A7 – E7 – D7 – A7", nota: "El turnaround completo: los dos últimos compases te devuelven al principio." },
      { grados: "i7 – iv7 – V7alt", ejemplo: "Am7 – Dm7 – E7#9", nota: "Blues menor. El mismo esqueleto con acordes menores y la dominante alterada al final." },
    ],
    acordes: ["A7", "D7", "E7", "A9", "E7#9", "Am7", "Dm7"],
    escalas: ["blues", "pentaMenor", "mixolidio", "bluesMayor", "bebopDominante"],
    transiciones: [
      { de: "I7", a: "IV7", como: "El cambio del compás 5", porque: "Es el momento donde el blues 'abre'. Anticipalo tocando la b7 del I en el compás anterior: esa nota ya pertenece al IV." },
      { de: "V7", a: "IV7", como: "Bajada del turnaround", porque: "En vez de resolver al I, baja al IV. Es lo que estira los últimos compases." },
      { de: "I7", a: "#Idim7", como: "Paso cromático", porque: "Un disminuido medio tono arriba conecta el I con el ii o de vuelta al IV sin que se note la costura." },
    ],
    licks: [
      {
        nombre: "Caja de La, quinta posición",
        escala: "pentaMenor", raiz: "A",
        nota: "El lick que todos aprenden primero. El bend del traste 8 en la primera cuerda sube un tono hasta la tónica.",
        notas: [
          { cuerda: 5, traste: 8, tecnica: "b" }, { cuerda: 5, traste: 5 },
          { cuerda: 4, traste: 5 }, { cuerda: 3, traste: 7 }, { cuerda: 3, traste: 5 },
          { cuerda: 2, traste: 7 }, { cuerda: 2, traste: 5 },
        ],
      },
      {
        nombre: "Quejido con la b5",
        escala: "blues", raiz: "A",
        nota: "La nota azul es el traste 8 de la tercera cuerda (Mib). Pasá por ella rápido, no te quedes.",
        notas: [
          { cuerda: 2, traste: 7 }, { cuerda: 3, traste: 5 }, { cuerda: 3, traste: 7 },
          { cuerda: 3, traste: 8 }, { cuerda: 3, traste: 7 }, { cuerda: 4, traste: 5 },
        ],
      },
    ],
  },

  metal: {
    nombre: "Metal",
    resumen: "Frigio, tritonos y la sexta cuerda abajo. La tensión no se resuelve: se sostiene.",
    acento: "#dc143c",
    tonalidadEjemplo: "E",
    progresiones: [
      { grados: "i – bII", ejemplo: "Em – F", nota: "El salto frigio. Medio tono arriba de la tónica: es la distancia más corta y la más incómoda, y de ahí sale todo el género." },
      { grados: "i – bVI – bVII", ejemplo: "Em – C – D", nota: "La bajada épica. Sirve de estribillo cuando el riff necesita abrirse." },
      { grados: "i – bV", ejemplo: "Em – Bb5", nota: "El tritono directo. Sin preparar, sin resolver." },
    ],
    acordes: ["E5", "F5", "G5", "Bb5", "Em", "C", "D"],
    escalas: ["frigio", "pentaMenor", "eolico", "frigioDominante", "disminuida"],
    transiciones: [
      { de: "i", a: "bII", como: "Semitono frigio", porque: "Es la firma del estilo. Tocá las dos quintas con la misma forma corrida un traste: el movimiento físico es el sonido." },
      { de: "bVII", a: "i", como: "Cierre modal", porque: "Vuelve a la tónica sin sensible. Más pesado que el V-i porque no te lo anuncia." },
      { de: "i", a: "bV", como: "Salto de tritono", porque: "Parte la octava justo al medio. No pertenece a ninguna tonalidad y por eso suena a amenaza." },
    ],
    licks: [
      {
        nombre: "Riff frigio en Mi",
        escala: "frigio", raiz: "E",
        nota: "Tónica y b2 en la cuerda grave, con palm mute. La forma es la misma corrida un traste.",
        notas: [
          { cuerda: 0, traste: 0 }, { cuerda: 0, traste: 0 }, { cuerda: 0, traste: 1 },
          { cuerda: 0, traste: 0 }, { cuerda: 0, traste: 3 }, { cuerda: 0, traste: 1 },
          { cuerda: 0, traste: 0 },
        ],
      },
      {
        nombre: "Galope con tritono",
        escala: "blues", raiz: "E",
        nota: "El traste 6 de la sexta cuerda es la b5 (Sib). Entra y sale rápido: es un golpe, no un lugar.",
        notas: [
          { cuerda: 0, traste: 0 }, { cuerda: 0, traste: 0 }, { cuerda: 0, traste: 0 },
          { cuerda: 0, traste: 6 }, { cuerda: 0, traste: 0 }, { cuerda: 0, traste: 5 },
        ],
      },
    ],
  },

  country: {
    nombre: "Country",
    resumen: "Mayor y luminoso, con bends que imitan al pedal steel y bajos que caminan entre acordes.",
    acento: "#ffc94a",
    tonalidadEjemplo: "G",
    progresiones: [
      { grados: "I – IV – V", ejemplo: "G – C – D", nota: "El esqueleto. Lo que lo hace country no son los acordes sino cómo se llega a ellos: caminando con el bajo." },
      { grados: "I – V – IV – I", ejemplo: "G – D – C – G", nota: "Con el V antes del IV, que le da el balanceo de honky-tonk." },
      { grados: "I – vi – IV – V", ejemplo: "G – Em – C – D", nota: "La balada. El vi abre el espacio para la letra triste." },
    ],
    acordes: ["G", "C", "D", "D7", "Em", "Cadd9", "G6"],
    escalas: ["pentaMayor", "jonico", "mixolidio", "bluesMayor"],
    transiciones: [
      { de: "I", a: "IV", como: "Walk-up por el bajo", porque: "En vez de saltar, caminás las notas intermedias en las cuerdas graves. El oyente llega al acorde antes que vos." },
      { de: "V", a: "I", como: "Con doble cuerda", porque: "Resolvé tocando dos cuerdas a la vez en intervalo de tercera o sexta: es el sonido de dos guitarras o del pedal steel." },
      { de: "IV", a: "I", como: "Bend de tercera", porque: "Estirá la segunda hasta la tercera mayor mientras sostenés otra cuerda fija. Eso imita el pedal." },
    ],
    licks: [
      {
        nombre: "Doble cuerda en Sol",
        escala: "pentaMayor", raiz: "G",
        nota: "Terceras sobre la tónica. Tocá las dos cuerdas juntas, es el sonido de dos guitarras.",
        notas: [
          { cuerda: 2, traste: 7 }, { cuerda: 3, traste: 7 }, { cuerda: 2, traste: 9 },
          { cuerda: 3, traste: 9 }, { cuerda: 2, traste: 12 }, { cuerda: 3, traste: 12 },
        ],
      },
      {
        nombre: "Walk-up de Sol a Do",
        escala: "jonico", raiz: "G",
        nota: "Las notas que conectan un acorde con el siguiente, en las cuerdas graves. Termina en el Do del acorde que llega.",
        notas: [
          { cuerda: 0, traste: 3 }, { cuerda: 1, traste: 0 }, { cuerda: 1, traste: 2 },
          { cuerda: 1, traste: 3 },
        ],
      },
    ],
  },

  western: {
    nombre: "Dark Western",
    resumen: "Menor armónica, trémolo y reverb de muelle. El desierto antes del duelo.",
    acento: "#b98bff",
    tonalidadEjemplo: "Dm",
    progresiones: [
      { grados: "i – bVI – V7", ejemplo: "Dm – Bb – A7", nota: "El bucle de Morricone. Ese A7 con la sensible viene de la menor armónica y es lo que pone el peligro." },
      { grados: "i – bII – bIII – bII", ejemplo: "Dm – Eb – F – Eb", nota: "Péndulo frigio. No va a ningún lado: se mece, y esa quietud es la tensión." },
      { grados: "i – iv – V7 – i", ejemplo: "Dm – Gm – A7 – Dm", nota: "La cadencia trágica completa." },
    ],
    acordes: ["Dm", "Bb", "A7", "Gm", "Eb", "F", "Dm(add9)"],
    escalas: ["menorArmonica", "frigio", "frigioDominante", "eolico", "pentaMenor"],
    transiciones: [
      { de: "bVI", a: "V7", como: "Aproximación descendente", porque: "De Bb a A7 baja medio tono. Es la mecha: el V7 ya está cargado y sólo falta que caiga." },
      { de: "V7", a: "i", como: "Resolución con sensible", porque: "El Do# del A7 empuja al Re. Esa nota no está en la menor natural: por eso se usa la armónica." },
      { de: "i", a: "bV", como: "Tritono del cazador", porque: "Salto directo sin preparación, como un disparo. Sirve para cortar la frase en seco." },
    ],
    licks: [
      {
        nombre: "Línea de menor armónica en Re",
        escala: "menorArmonica", raiz: "D",
        nota: "El salto de b6 a 7ma (traste 6 al 9 en la tercera cuerda) es la firma del estilo. Con trémolo.",
        notas: [
          { cuerda: 3, traste: 12 }, { cuerda: 3, traste: 10 }, { cuerda: 3, traste: 9 },
          { cuerda: 3, traste: 7 }, { cuerda: 4, traste: 10 }, { cuerda: 4, traste: 8 },
          { cuerda: 4, traste: 6 },
        ],
      },
      {
        nombre: "Respuesta grave con slide",
        escala: "eolico", raiz: "D",
        nota: "Notas largas en las cuerdas graves, con reverb de muelle al máximo.",
        notas: [
          { cuerda: 0, traste: 10 }, { cuerda: 0, traste: 12, tecnica: "/" },
          { cuerda: 1, traste: 10 }, { cuerda: 1, traste: 8 }, { cuerda: 0, traste: 10 },
        ],
      },
    ],
  },
};

/* ---- dibujo de tablatura ----
   Seis líneas, un número por nota, en orden de izquierda a derecha. No es
   el mástil: acá el eje horizontal es el tiempo, no los trastes. */
function svgTablatura(lick, afinacion) {
  const cuerdas = (afinacion || AFINACION_GUITARRA).length;
  const x0 = 26, yTop = 14, dy = 17;
  const pasoX = 30;
  const ancho = x0 + lick.notas.length * pasoX + 20;
  const altoCuerdas = (cuerdas - 1) * dy;
  const alto = yTop + altoCuerdas + 16;
  const yDe = (c) => yTop + (cuerdas - 1 - c) * dy; // la aguda arriba, como en una tab

  const partes = [];
  const nombres = nombresCuerdasDe("guitarra", false);
  for (let c = 0; c < cuerdas; c++) {
    const y = yDe(c);
    partes.push(`<line x1="${x0}" y1="${y}" x2="${ancho - 12}" y2="${y}" class="tab-linea"/>`);
    partes.push(`<text x="10" y="${y + 3}" class="tab-cuerda">${nombres[c] || ""}</text>`);
  }

  lick.notas.forEach((n, i) => {
    const x = x0 + i * pasoX + pasoX / 2;
    const y = yDe(n.cuerda);
    const texto = String(n.traste) + (n.tecnica || "");
    // el fondo tapa la línea para que el número se lea. data-idx: para
    // poder resaltar la nota que está sonando en sincro con el audio
    // (ver resaltarLickEnTab en licks_vista.js) sin tocar el resto de
    // los llamados a esta función, que no usan ese atributo.
    partes.push(`<rect x="${x - 9}" y="${y - 6}" width="18" height="12" class="tab-fondo" data-idx="${i}"/>`);
    partes.push(`<text x="${x}" y="${y + 3.4}" class="tab-num" data-idx="${i}">${texto}</text>`);
  });

  return `<svg class="tab-svg" viewBox="0 0 ${ancho} ${alto}" role="img" aria-label="Tablatura de ${lick.nombre}">${partes.join("")}</svg>`;
}

/* Las notas que produce un lick, para poder comprobar que caen donde dice. */
function notasDelLick(lick, afinacion) {
  const cuerdasMidi = afinacion || AFINACION_GUITARRA;
  return lick.notas.map((n) => (cuerdasMidi[n.cuerda] + n.traste) % 12);
}


/* --- biblioteca ampliada -------------------------------------------------
   Diez progresiones, ocho transiciones y seis licks más por estilo. Se
   agregan a lo que ya tenía cada estilo en lugar de reemplazarlo, y se
   descartan los repetidos para que la lista no muestre dos veces la misma
   progresión. Cada nota de cada lick está verificada contra su escala. */
const EXTRAS = {
  pop: {
    progresiones: [
      { grados: "I – V – vi – IV", ejemplo: "C – G – Am – F", nota: "El ciclo de cuatro acordes más usado en estribillos: arranca en la tónica y se va al vi, que suena melancólico sin salir de la tonalidad. Al no haber dominante al final, el loop nunca cierra y se repite sin cansar." },
      { grados: "vi – IV – I – V", ejemplo: "Am – F – C – G", nota: "Los mismos cuatro acordes rotados para empezar en el relativo menor: la estrofa suena más oscura y el V del final empuja de vuelta al vi o abre al estribillo en I." },
      { grados: "I – vi – IV – V", ejemplo: "C – Am – F – G", nota: "Movimiento por terceras del I al vi y después subdominante-dominante. El V final deja la frase abierta, así que funciona como estrofa que pide estribillo." },
      { grados: "IV – I – V – vi", ejemplo: "F – C – G – Am", nota: "Empezar en el IV le saca peso al primer compás: la tónica llega recién en el segundo y el estribillo suena como si ya estuviera en marcha." },
      { grados: "I – iii – vi – IV", ejemplo: "C – Em – Am – F", nota: "Bajo descendente por terceras con dos acordes menores en el medio. Sirve para puentes porque baja la energía sin cambiar de tonalidad." },
      { grados: "I – bVII – IV – I", ejemplo: "C – Bb – F – C", nota: "El bVII es un préstamo del mixolidio: trae la séptima menor y saca el semitono de la cadencia clásica, por eso suena más plano y más rockero que un V – I." },
      { grados: "i – bVI – bIII – bVII", ejemplo: "Am – F – C – G", nota: "El mismo loop de cuatro acordes leído en menor. Todos son grados naturales del eólico, así que no hay dominante y la progresión gira sin resolver." },
      { grados: "I – IV – iv – I", ejemplo: "C – F – Fm – C", nota: "El iv prestado del menor baja la tercera del IV un semitono y ese movimiento contra la tónica es el que produce el efecto agridulce típico del final de estribillo." },
      { grados: "vi – V – IV – V", ejemplo: "Am – G – F – G", nota: "Puente en bajada por grados conjuntos que se frena en el V y se queda ahí. Al no tocar la tónica, cuando vuelve el estribillo en I el alivio es evidente." },
      { grados: "I – vi – II7 – V", ejemplo: "C – Am – D7 – G", nota: "El II7 es la dominante de la dominante: mete una nota ajena al tono que empuja fuerte al V. Es el camino más corto para modular al tono del V en el último estribillo." },
    ],
    transiciones: [
      { de: "IV", a: "I", como: "Cadencia plagal", porque: "Las dos notas comunes hacen que el cierre sea suave: no hay tritono ni semitono resolviendo, así que suena conclusivo pero sin drama. Va bien en estribillos que se repiten." },
      { de: "V", a: "vi", como: "Cadencia interrumpida", porque: "El oído espera la tónica y llega el relativo menor, que comparte dos notas con ella. Es un cierre falso y sirve para estirar el estribillo un ciclo más." },
      { de: "vi", a: "IV", como: "Descenso de tercera", porque: "Comparten dos notas, así que el cambio se siente como color nuevo y no como modulación. El bajo baja una tercera y arrastra la frase hacia abajo." },
      { de: "I", a: "IV", como: "I7 de paso", porque: "Convertir la tónica en dominante agrega la séptima menor, que está un semitono arriba de la tercera del IV y resuelve ahí. Empuja al IV en vez de simplemente llegar." },
      { de: "bVII", a: "I", como: "Cadencia mixolidia", porque: "El bajo sube un tono entero en lugar de un semitono, así que no hay tensión de dominante: cierra por peso y no por resolución. Suena moderno y algo modal." },
      { de: "iv", a: "I", como: "Plagal menor", porque: "La sexta menor del iv baja un semitono hasta la quinta de la tónica. Es un cierre plagal con una nota prestada del menor y por eso suena nostálgico." },
      { de: "III7", a: "vi", como: "Dominante secundaria", porque: "Trata al vi como tónica momentánea: el III7 es su dominante y trae el semitono que lo confirma. Le da entidad al relativo menor antes de volver al I." },
      { de: "V", a: "I un tono arriba", como: "Modulación por dominante nueva", porque: "En vez de resolver, se usa la dominante del tono nuevo: el estribillo final entra un tono más arriba y todo suena más brillante y con más aire para la voz." },
    ],
    licks: [
      { nombre: "Relleno en pentatónica mayor de C", escala: "pentaMayor", raiz: "C", nota: "Frase corta para meter entre dos versos: baja de E a C en la primera cuerda y cierra con un hammer-on que devuelve a la tónica. Al ser pentatónica mayor no choca con ningún acorde de la tonalidad.", notas: [ {cuerda:5, traste:12}, {cuerda:5, traste:10, tecnica:"p"}, {cuerda:5, traste:8}, {cuerda:4, traste:10}, {cuerda:4, traste:8}, {cuerda:4, traste:10, tecnica:"h"}, {cuerda:5, traste:8} ] },
      { nombre: "Contorno en G, posición baja", escala: "pentaMayor", raiz: "G", nota: "Sube D-E-G-A y vuelve por el mismo camino: una curva simétrica que funciona como respuesta a una frase cantada. El hammer-on y el pull-off la hacen sonar ligada y no picada.", notas: [ {cuerda:4, traste:3}, {cuerda:4, traste:5, tecnica:"h"}, {cuerda:5, traste:3}, {cuerda:5, traste:5}, {cuerda:5, traste:3, tecnica:"p"}, {cuerda:4, traste:5}, {cuerda:4, traste:3} ] },
      { nombre: "Subida jónica en D hacia la tónica", escala: "jonico", raiz: "D", nota: "Sube por grados conjuntos desde el F# hasta el D agudo: al usar la escala completa aparece el semitono C#-D del final, que es el que confirma la tonalidad mayor.", notas: [ {cuerda:4, traste:7}, {cuerda:4, traste:8}, {cuerda:4, traste:10}, {cuerda:5, traste:7}, {cuerda:5, traste:9}, {cuerda:5, traste:10}, {cuerda:5, traste:9, tecnica:"p"}, {cuerda:4, traste:10} ] },
      { nombre: "Arco en A, quinta posición", escala: "pentaMayor", raiz: "A", nota: "Cinco notas subiendo y tres bajando dentro de la misma caja. Sirve de puente entre dos frases porque empieza y termina en notas del acorde de tónica.", notas: [ {cuerda:4, traste:5}, {cuerda:4, traste:7}, {cuerda:5, traste:5}, {cuerda:5, traste:7}, {cuerda:5, traste:9}, {cuerda:5, traste:7, tecnica:"p"}, {cuerda:4, traste:7}, {cuerda:4, traste:5} ] },
      { nombre: "Frase en F jónico con la cuarta", escala: "jonico", raiz: "F", nota: "Llega hasta el F agudo pasando por el Bb, la cuarta de la escala: esa nota roza la tercera del acorde de tónica, así que hay que soltarla rápido hacia el E.", notas: [ {cuerda:4, traste:8}, {cuerda:4, traste:10}, {cuerda:5, traste:8}, {cuerda:5, traste:10}, {cuerda:5, traste:12}, {cuerda:5, traste:13}, {cuerda:5, traste:12, tecnica:"p"}, {cuerda:4, traste:10} ] },
      { nombre: "Relleno amplio en E", escala: "pentaMayor", raiz: "E", nota: "Usa tres cuerdas para abrir el registro: sube del E de la tercera cuerda al E agudo y vuelve. Al moverse por terceras en lugar de grados conjuntos suena cantable y no escalístico.", notas: [ {cuerda:3, traste:9}, {cuerda:3, traste:11}, {cuerda:4, traste:9}, {cuerda:4, traste:12}, {cuerda:5, traste:9}, {cuerda:5, traste:12}, {cuerda:4, traste:12}, {cuerda:4, traste:9} ] },
    ],
  },

  rock: {
    progresiones: [
      { grados: "I – bVII – IV – I", ejemplo: "A – G – D – A", nota: "Progresión mixolidia por excelencia: el bVII reemplaza al V y deja la tonalidad mayor pero sin cadencia clásica. Arriba cae bien la pentatónica menor de la tónica." },
      { grados: "i – bVII – bVI – bVII", ejemplo: "Em – D – C – D", nota: "Los tres primeros grados descendentes del eólico y vuelta. Al no llegar nunca al V, el loop se sostiene solo con el peso del bajo bajando por grados." },
      { grados: "i – bVI – bIII – bVII", ejemplo: "Em – C – G – D", nota: "El loop menor más común del rock: todos los acordes son mayores salvo la tónica, así que suena grande y abierto pese a estar en menor." },
      { grados: "I – IV – V", ejemplo: "E – A – B", nota: "Los tres acordes mayores de la tonalidad. Tocados como power chords no tienen tercera, así que arriba entran tanto la pentatónica mayor como la menor." },
      { grados: "i – iv – v", ejemplo: "Am – Dm – Em", nota: "La versión modal del I-IV-V: el v menor, sin séptima mayor, evita la cadencia clásica y mantiene el color eólico oscuro de punta a punta." },
      { grados: "I – bIII – IV", ejemplo: "A – C – D", nota: "El bIII es un préstamo de la pentatónica menor sobre una tonalidad mayor: ese choque entre tercera menor y mayor es la base del sonido blues-rock." },
      { grados: "I – IV – bVII – I", ejemplo: "E5 – A5 – D5 – E5", nota: "Riff en quintas donde el bajo se mueve por cuartas descendentes. Al ser power chords la misma digitación se corre por el mástil sin pensar calidades." },
      { grados: "i – v – bVI – bVII", ejemplo: "Am – Em – F – G", nota: "Baja al v y después sube por grados desde el bVI. El ascenso final genera impulso hacia la tónica sin usar dominante." },
      { grados: "i – bVII – bVI – V", ejemplo: "Am – G – F – E", nota: "Descenso andaluz: los tres primeros son del eólico y el acorde mayor del final viene de la menor armónica. Ese G# prestado hace que el ciclo se reinicie con fuerza." },
      { grados: "I – Isus4 – bVII – IV", ejemplo: "A – Asus4 – G – D", nota: "El sus4 suspende la tercera y la devuelve al resolver: es un truco de riff para que la tónica se mueva sin cambiar de acorde antes de bajar al bVII." },
    ],
    transiciones: [
      { de: "bVII", a: "I", como: "Cadencia mixolidia", porque: "El bajo sube un tono entero en lugar de un semitono: cierra con peso pero sin la tensión del tritono, que es justo lo que separa el rock modal del pop tonal." },
      { de: "V", a: "i", como: "Dominante prestada", porque: "En una progresión eólica el V mayor mete la séptima mayor del tono, ajena al modo. Ese semitono resolviendo a la tónica hace que el reinicio del riff suene inevitable." },
      { de: "bVI", a: "bVII", como: "Ascenso por grados", porque: "Dos acordes mayores separados por un tono empujan hacia la tónica solo por movimiento paralelo. Es la forma más directa de armar un crescendo armónico." },
      { de: "i", a: "bIII", como: "Salto al relativo mayor", porque: "Comparten dos notas, así que el cambio abre el sonido sin modular. Sirve para que el estribillo suene más luminoso que la estrofa." },
      { de: "IV", a: "I", como: "Quintas paralelas", porque: "Con power chords las dos voces se mueven en paralelo y no hay conducción de voces: el efecto es de bloque que se desplaza, característico del riff de rock." },
      { de: "I", a: "IV", como: "Riff transportado", porque: "El mismo dibujo de dedos corrido cinco trastes arriba mantiene la identidad del riff y cambia la armonía. Ahorra pensar dos figuras distintas." },
      { de: "bVI", a: "V", como: "Descenso de semitono", porque: "El bajo baja medio tono y el acorde pasa de modal a dominante: es el punto donde una progresión eólica se vuelve tensa y pide la tónica." },
      { de: "i", a: "iv", como: "Subdominante menor", porque: "Sube una cuarta manteniendo la tercera menor del modo. No hay notas ajenas, así que el cambio oscurece sin sacar la progresión del eólico." },
    ],
    licks: [
      { nombre: "Riff grave en E con cuerda al aire", escala: "pentaMenor", raiz: "E", nota: "Alterna la sexta al aire con notas de la pentatónica menor: el E al aire funciona como pedal rítmico y el resto es la respuesta. Púa alterna y palm mute suave.", notas: [ {cuerda:0, traste:0}, {cuerda:0, traste:3}, {cuerda:0, traste:5}, {cuerda:0, traste:0}, {cuerda:1, traste:0}, {cuerda:1, traste:2}, {cuerda:0, traste:0} ] },
      { nombre: "Riff mixolidio en A", escala: "mixolidio", raiz: "A", nota: "Sube por las tres cuerdas graves hasta el G, la séptima menor, y vuelve: esa nota es la que define el color mixolidio frente a una escala mayor.", notas: [ {cuerda:0, traste:5}, {cuerda:0, traste:7}, {cuerda:1, traste:5}, {cuerda:1, traste:7}, {cuerda:2, traste:4}, {cuerda:2, traste:5}, {cuerda:1, traste:7}, {cuerda:0, traste:5} ] },
      { nombre: "Solo con bend en A pentatónica menor", escala: "pentaMenor", raiz: "A", nota: "Sube por la caja de quinta posición y el bend del G lo lleva un tono arriba, hasta la tónica: ese gesto resuelve la frase sin cambiar de posición.", notas: [ {cuerda:3, traste:5}, {cuerda:3, traste:7}, {cuerda:4, traste:5}, {cuerda:4, traste:8, tecnica:"b"}, {cuerda:5, traste:5}, {cuerda:5, traste:8}, {cuerda:5, traste:5} ] },
      { nombre: "Frase eólica en E, doceava posición", escala: "eolico", raiz: "E", nota: "Usa la escala completa para que aparezca el C, la sexta menor, que es la nota que distingue el eólico de la pentatónica menor. Termina en la tónica una octava arriba.", notas: [ {cuerda:3, traste:12}, {cuerda:3, traste:14}, {cuerda:4, traste:12}, {cuerda:4, traste:13}, {cuerda:5, traste:12}, {cuerda:5, traste:14}, {cuerda:5, traste:15}, {cuerda:5, traste:12} ] },
      { nombre: "Caja de G con bend de cuarta", escala: "pentaMenor", raiz: "G", nota: "El bend del F sube un tono hasta el G: en la segunda cuerda se controla fácil y deja la frase apuntando a la tónica antes de bajar a la caja.", notas: [ {cuerda:3, traste:3}, {cuerda:3, traste:5}, {cuerda:4, traste:3}, {cuerda:4, traste:6, tecnica:"b"}, {cuerda:5, traste:3}, {cuerda:5, traste:6}, {cuerda:5, traste:3} ] },
      { nombre: "Riff medio en D mixolidio", escala: "mixolidio", raiz: "D", nota: "Trabaja entre la cuarta y la tercera cuerda en torno al C y el G: la séptima menor y la cuarta dan ese sonido de riff plano, sin resolución tonal.", notas: [ {cuerda:2, traste:10}, {cuerda:2, traste:12}, {cuerda:3, traste:9}, {cuerda:3, traste:11}, {cuerda:3, traste:12}, {cuerda:2, traste:12}, {cuerda:2, traste:10}, {cuerda:2, traste:12} ] },
    ],
  },

  blues: {
    progresiones: [
      { grados: "I7 – IV7 – I7 – V7", ejemplo: "A7 – D7 – A7 – E7", nota: "El esqueleto del blues de doce compases. Los tres acordes son dominantes, así que la séptima menor está siempre presente y ninguno suena como tónica estable." },
      { grados: "I7 – IV7 – I7 – I7", ejemplo: "C7 – F7 – C7 – C7", nota: "Quick change: el IV7 aparece ya en el segundo compás y después se vuelve al I7. Rompe la monotonía de cuatro compases iguales al arranque." },
      { grados: "V7 – IV7 – I7 – V7", ejemplo: "E7 – D7 – A7 – E7", nota: "Los últimos cuatro compases del blues clásico. Que el V7 vaya al IV7 sería raro en armonía tonal, pero acá es la firma del estilo; el V7 final reinicia la vuelta." },
      { grados: "I7 – vi7 – ii7 – V7", ejemplo: "C7 – Am7 – Dm7 – G7", nota: "Turnaround de jazz-blues: en lugar de quedarse en el V7 arma un ciclo de cuartas que aterriza en la dominante. Da más movimiento armónico para improvisar." },
      { grados: "i7 – iv7 – i7 – bVI7 – V7 – i7", ejemplo: "Am7 – Dm7 – Am7 – F7 – E7 – Am7", nota: "Blues menor: todo el ciclo en menor salvo el bVI7 y el V7, que bajan por semitono hasta la tónica. Esa bajada es lo que le da el carácter dramático." },
      { grados: "ii7 – V7 – I7 – VI7", ejemplo: "Dm7 – G7 – C7 – A7", nota: "Compases 9 a 12 en clave de jazz-blues: resuelve al I7 y el VI7 del final vuelve a abrir el ciclo hacia el ii7, encadenando dominantes." },
      { grados: "IV7 – #ivdim7 – I7 – VI7", ejemplo: "F7 – F#dim7 – C7 – A7", nota: "El disminuido cromático entre el IV7 y el I7 aprovecha que comparten tres notas: sube el bajo un semitono y funciona como puente sin cambiar de color." },
      { grados: "ii7 – bII7 – I7", ejemplo: "Dm7 – Db7 – C7", nota: "Sustitución tritonal del V7: el bII7 tiene el mismo tritono que la dominante pero el bajo baja por semitono hasta la tónica, lo que suena más liso y más jazzero." },
      { grados: "I7 – V7 – IV7 – I7", ejemplo: "G7 – D7 – C7 – G7", nota: "Blues de ocho compases: la dominante llega mucho antes y el ciclo se cierra en la mitad del tiempo. Muy usado en blues cantado a tempo medio." },
      { grados: "III7 – VI7 – II7 – V7", ejemplo: "E7 – A7 – D7 – G7", nota: "Cadena de dominantes secundarias: cada acorde es la dominante del siguiente. Es el recurso ragtime que se usa para introducciones y puentes dentro del blues." },
    ],
    transiciones: [
      { de: "I7", a: "IV7", como: "Entrada al compás 5", porque: "La séptima menor del I7 está un semitono arriba de la tercera del IV7 y resuelve ahí. Es el movimiento más tonal del blues y por eso marca el cambio de sección." },
      { de: "V7", a: "IV7", como: "Retroceso de dominante", porque: "Va de la dominante a la subdominante, al revés de lo que pide la armonía clásica. Suena a caída controlada y prepara la llegada al I7." },
      { de: "IV7", a: "#ivdim7", como: "Puente cromático", porque: "El disminuido comparte tres notas con el IV7 y sube el bajo un semitono, así que el cambio se siente como tensión creciente y no como acorde nuevo." },
      { de: "ii7", a: "V7", como: "Cadencia de jazz-blues", porque: "Convierte el compás 9 en un dos-cinco: aparece la conducción por semitonos que el blues básico no tiene, y habilita frases con notas fuera de la pentatónica." },
      { de: "bVI7", a: "V7", como: "Bajada de semitono", porque: "Dos dominantes a distancia de semitono: el descenso paralelo es la manera más directa de generar tensión en un blues menor antes de volver a la tónica." },
      { de: "I7", a: "VI7", como: "Dominante secundaria", porque: "El VI7 es la dominante del ii7, así que anticipa el turnaround. Mete una tercera mayor ajena al tono que llama la atención justo antes del final de la vuelta." },
      { de: "bII7", a: "I7", como: "Sustitución tritonal", porque: "Comparte el tritono con el V7 pero el bajo cae un semitono hasta la tónica. Mismo grado de tensión con un movimiento más suave." },
      { de: "I7", a: "IV7", como: "Walk-up cromático en el bajo", porque: "Subir por semitonos desde la tónica hasta la fundamental del IV7 llena el compás sin cambiar de acorde: la tensión la produce el bajo, no la armonía." },
    ],
    licks: [
      { nombre: "Caja de A con blue note", escala: "blues", raiz: "A", nota: "Sube D-Eb-E en la tercera cuerda: el Eb es la quinta bemol, la blue note, y se cruza rápido porque su función es rozar la quinta, no quedarse. Cierra en la tónica.", notas: [ {cuerda:3, traste:7}, {cuerda:3, traste:8}, {cuerda:3, traste:9}, {cuerda:4, traste:5}, {cuerda:4, traste:8}, {cuerda:5, traste:5}, {cuerda:5, traste:8}, {cuerda:5, traste:5} ] },
      { nombre: "Llamada en E, doceava posición", escala: "pentaMenor", raiz: "E", nota: "Caja clásica con el bend del D un tono arriba hasta el E: es el gesto de llamada que después se responde en el registro grave. Todo cae en la misma posición.", notas: [ {cuerda:3, traste:12}, {cuerda:3, traste:14}, {cuerda:4, traste:12}, {cuerda:4, traste:15, tecnica:"b"}, {cuerda:5, traste:12}, {cuerda:5, traste:15}, {cuerda:5, traste:12} ] },
      { nombre: "Ascenso cromático en C blues", escala: "blues", raiz: "C", nota: "F-F#-G en la tercera cuerda: la quinta bemol aparece entre la cuarta y la quinta y arma el deslizamiento cromático que define la escala de blues.", notas: [ {cuerda:3, traste:10}, {cuerda:3, traste:11}, {cuerda:3, traste:12}, {cuerda:4, traste:8}, {cuerda:4, traste:11}, {cuerda:5, traste:8}, {cuerda:5, traste:11}, {cuerda:5, traste:8} ] },
      { nombre: "Respuesta descendente en G", escala: "pentaMenor", raiz: "G", nota: "Baja desde el Bb agudo hasta la tónica atravesando la caja: sirve como respuesta a una frase ascendente porque invierte el contorno y termina abajo.", notas: [ {cuerda:5, traste:6}, {cuerda:5, traste:3}, {cuerda:4, traste:6}, {cuerda:4, traste:3}, {cuerda:3, traste:5}, {cuerda:3, traste:3}, {cuerda:4, traste:3}, {cuerda:5, traste:3} ] },
      { nombre: "Tercera menor y mayor en A", escala: "bluesMayor", raiz: "A", nota: "El paso C-C# es el corazón del asunto: roza la tercera menor y la resuelve en la mayor, que es lo que hace sonar a blues sobre un acorde mayor sin salirse del acorde.", notas: [ {cuerda:3, traste:2}, {cuerda:3, traste:4}, {cuerda:3, traste:5}, {cuerda:3, traste:6}, {cuerda:4, traste:5}, {cuerda:5, traste:2}, {cuerda:5, traste:5} ] },
      { nombre: "Turnaround en D", escala: "blues", raiz: "D", nota: "G-G#-A en la tercera cuerda arma la subida cromática y después salta a la caja aguda para cerrar en la tónica: frase típica de los últimos dos compases.", notas: [ {cuerda:3, traste:12}, {cuerda:3, traste:13}, {cuerda:3, traste:14}, {cuerda:4, traste:10}, {cuerda:4, traste:13}, {cuerda:5, traste:10}, {cuerda:5, traste:13}, {cuerda:5, traste:10} ] },
    ],
  },

  metal: {
    progresiones: [
      { grados: "i – bII", ejemplo: "Em – F", nota: "Los dos acordes que definen el frigio: el bII está a un semitono de la tónica y ese roce sostenido alcanza para un riff entero sin más armonía." },
      { grados: "i – bVI – bVII – i", ejemplo: "Em – C – D – Em", nota: "Ciclo eólico cerrado: el bVI y el bVII son mayores y suben por grados hasta la tónica menor. Es el loop más usado en estrofas de metal melódico." },
      { grados: "i – bVII – bVI – V", ejemplo: "Am – G – F – E", nota: "Descenso andaluz con el V mayor tomado de la menor armónica: el G# prestado agrega el semitono que reinicia el ciclo con tensión." },
      { grados: "i – iv – bII – V", ejemplo: "Am – Dm – Bb – E", nota: "Progresión de menor armónica: el bII y el V mayor comparten notas y encadenan dos tensiones seguidas antes de volver a la tónica." },
      { grados: "i – bV – i", ejemplo: "E5 – Bb5 – E5", nota: "Tritono puro en quintas: la distancia de tres tonos no pertenece a ninguna tonalidad estable, así que el acorde de paso suena disonante por definición. Va con palm mute." },
      { grados: "i – bIII – bVII – iv", ejemplo: "Em – G – D – Am", nota: "Grados naturales del eólico ordenados para que el bajo se mueva por cuartas y terceras. El iv del final oscurece y evita que el loop suene resuelto." },
      { grados: "i – bVI – bII – i", ejemplo: "Em – C – F – Em", nota: "Combina el color eólico del bVI con el bII frigio: el salto de uno a otro contra un pedal de tónica mantiene el centro tonal mientras la armonía se corre." },
      { grados: "i – V7(b9) – i", ejemplo: "Am – E7(b9) – Am", nota: "La b9 está a un semitono de la tónica y las cuatro notas superiores del acorde forman un disminuido: máxima tensión con mínimo movimiento." },
      { grados: "I – bII – II – bIII", ejemplo: "E5 – F5 – F#5 – G5", nota: "Riff cromático en quintas: no hay función armónica, la lógica es el desplazamiento por semitonos. Funciona porque los power chords no tienen tercera que defina el modo." },
      { grados: "i – bVII – bVI – bII", ejemplo: "Em – D – C – F", nota: "Baja por el eólico y termina en el bII frigio, que está un semitono arriba de la tónica: el corte es abrupto y sirve como final de sección." },
    ],
    transiciones: [
      { de: "bII", a: "i", como: "Cadencia frigia", porque: "El bajo baja un semitono hasta la tónica. Es el movimiento más corto posible y por eso suena pesado y definitivo, sin necesidad de dominante." },
      { de: "i", a: "bV", como: "Salto de tritono", porque: "Tres tonos justos, la distancia que parte la octava en dos: no hay notas en común y el oído no puede ubicar la relación, que es exactamente el efecto buscado." },
      { de: "bVI", a: "bVII", como: "Ascenso modal", porque: "Dos acordes mayores separados por un tono empujan a la tónica menor sin usar el semitono de la dominante. Da impulso sin volver la progresión tonal." },
      { de: "V7(b9)", a: "i", como: "Cadencia de menor armónica", porque: "La séptima mayor del modo resuelve a la tónica y la b9 baja un semitono a la quinta. Dos semitonos a la vez: la resolución es inmediata." },
      { de: "i", a: "bVI", como: "Pedal en la sexta cuerda", porque: "Mantener la tónica al aire mientras la armonía se mueve arriba genera la disonancia sola: el bVI contra el pedal deja una segunda que tensiona sin mover el bajo." },
      { de: "bVII", a: "i", como: "Aproximación cromática", porque: "Si se intercala el acorde un semitono debajo del objetivo, la llegada se refuerza por proximidad y no por función. Es la lógica de los riffs cromáticos." },
      { de: "i", a: "iv", como: "Subdominante menor", porque: "Sube una cuarta manteniendo el modo menor. No aporta notas nuevas, así que sirve para cambiar de sección sin perder el color oscuro." },
      { de: "i", a: "bIII", como: "Apertura al relativo mayor", porque: "Comparten dos notas y la tercera menor de la tónica pasa a ser fundamental. El estribillo suena más amplio sin dejar la tonalidad." },
    ],
    licks: [
      { nombre: "Riff frigio en E con palm mute", escala: "frigio", raiz: "E", nota: "Todo en la sexta cuerda: el F del primer traste es la segunda menor, y alternarlo con la tónica al aire es lo que produce el roce frigio. Púa hacia abajo y palm mute.", notas: [ {cuerda:0, traste:0}, {cuerda:0, traste:0}, {cuerda:0, traste:1}, {cuerda:0, traste:0}, {cuerda:0, traste:3}, {cuerda:0, traste:1}, {cuerda:0, traste:0} ] },
      { nombre: "Galope eólico en E", escala: "eolico", raiz: "E", nota: "Tres golpes en la tónica al aire, que es la figura de galope, y después un giro G-F# y un salto a A-B. La séptima menor y la sexta mayor son las que dan el aire épico.", notas: [ {cuerda:0, traste:0}, {cuerda:0, traste:0}, {cuerda:0, traste:0}, {cuerda:0, traste:3}, {cuerda:0, traste:2}, {cuerda:0, traste:0}, {cuerda:0, traste:5}, {cuerda:0, traste:7} ] },
      { nombre: "Riff en A frigio, quinta posición", escala: "frigio", raiz: "A", nota: "Alterna la tónica con el Bb, la segunda menor, y después sube a E-F en la quinta cuerda: el mismo semitono repetido en otra octava refuerza el color del modo.", notas: [ {cuerda:0, traste:5}, {cuerda:0, traste:5}, {cuerda:0, traste:6}, {cuerda:0, traste:5}, {cuerda:1, traste:7}, {cuerda:1, traste:8}, {cuerda:1, traste:7}, {cuerda:0, traste:5} ] },
      { nombre: "Lead de menor armónica en A", escala: "menorArmonica", raiz: "A", nota: "Sube por la escala hasta el G#, la séptima mayor, que resuelve a la tónica un semitono arriba. El salto F-G# es una segunda aumentada y es lo que suena neoclásico.", notas: [ {cuerda:3, traste:5}, {cuerda:3, traste:7}, {cuerda:4, traste:5}, {cuerda:4, traste:6}, {cuerda:4, traste:9}, {cuerda:5, traste:5}, {cuerda:5, traste:8}, {cuerda:5, traste:7}, {cuerda:5, traste:5} ] },
      { nombre: "Riff de tritono en E locrio", escala: "locrio", raiz: "E", nota: "El Bb del sexto traste es la quinta bemol: alternarlo con la tónica al aire deja el tritono expuesto. Al final baja A-G-F para aterrizar en la segunda menor.", notas: [ {cuerda:0, traste:0}, {cuerda:0, traste:6}, {cuerda:0, traste:0}, {cuerda:0, traste:6}, {cuerda:0, traste:0}, {cuerda:0, traste:5}, {cuerda:0, traste:3}, {cuerda:0, traste:1} ] },
      { nombre: "Pedal en D frigio", escala: "frigio", raiz: "D", nota: "La cuarta cuerda al aire funciona como pedal y entre golpe y golpe entran Eb, F y G: la nota fija hace que todo lo demás se escuche como tensión contra la tónica.", notas: [ {cuerda:2, traste:0}, {cuerda:2, traste:1}, {cuerda:2, traste:0}, {cuerda:2, traste:3}, {cuerda:2, traste:0}, {cuerda:2, traste:5}, {cuerda:2, traste:0}, {cuerda:2, traste:1} ] },
    ],
  },

  country: {
    progresiones: [
      { grados: "I – IV – V – I", ejemplo: "G – C – D – G", nota: "Los tres acordes básicos en el orden más directo. En country el interés no está en la armonía sino en lo que hace el bajo entre acorde y acorde." },
      { grados: "I – IV – I – V", ejemplo: "G – C – G – D", nota: "Vuelve a la tónica antes de la dominante, así que la estrofa respira dos veces en el I. El V del final queda abierto para repetir." },
      { grados: "I – vi – ii – V", ejemplo: "C – Am – Dm – G7", nota: "Ciclo de cuartas típico del western swing: cada acorde está una cuarta arriba del anterior y eso da movimiento constante para improvisar por acordes." },
      { grados: "I – I7 – IV – I", ejemplo: "G – G7 – C – G", nota: "Convertir la tónica en dominante antes del IV agrega la séptima menor, que resuelve un semitono abajo a la tercera del IV. Es el empujón clásico al cuarto grado." },
      { grados: "I – II7 – V7", ejemplo: "G – A7 – D7", nota: "El II7 es la dominante de la dominante: mete una tercera mayor ajena al tono y encadena dos dominantes seguidas, sonido honky-tonk de bar." },
      { grados: "ii7 – V7 – I6", ejemplo: "Am7 – D7 – G6", nota: "Cadencia de swing: el I6 en lugar de la tríada simple agrega la sexta, que suaviza el cierre y es la voz típica de las guitarras de western swing." },
      { grados: "I – I/III – ii7 – V7", ejemplo: "G – G/B – Am7 – D7", nota: "El bajo camina por grados en lugar de saltar entre fundamentales: el slash chord permite mover el bajo sin cambiar de armonía." },
      { grados: "I – bVII – IV – I", ejemplo: "G – F – C – G", nota: "Préstamo mixolidio muy usado en country rock: el bVII reemplaza la dominante y deja la progresión sin semitono de resolución, más relajada." },
      { grados: "I – VI7 – II7 – V7", ejemplo: "G – E7 – A7 – D7", nota: "Cadena completa de dominantes secundarias: cada acorde prepara al siguiente. Sirve de turnaround largo al final de la estrofa." },
      { grados: "I6/9 – IV6 – V9 – I6/9", ejemplo: "G6/9 – C6 – D9 – G6/9", nota: "Las mismas tres funciones con voces extendidas: sextas y novenas en lugar de tríadas. Es el color de las orquestas de western swing, más jazz que folk." },
    ],
    transiciones: [
      { de: "I", a: "IV", como: "Walk-up cromático en el bajo", porque: "Subir del I al IV pasando por las notas intermedias llena el compás y anuncia el cambio antes de que llegue. El acorde no cambia hasta el final del recorrido." },
      { de: "I7", a: "IV", como: "Dominante secundaria", porque: "La séptima menor agregada a la tónica resuelve un semitono abajo a la tercera del IV. Convierte una llegada neutra en una resolución." },
      { de: "V7", a: "I", como: "Cierre con dobles cuerdas", porque: "Tocar la tercera y la sexta del acorde juntas duplica la conducción de voces: dos líneas resolviendo en paralelo suenan como una sección de dos guitarras." },
      { de: "II7", a: "V7", como: "Cadena de dominantes", porque: "Cada dominante resuelve a la siguiente por cuartas, así que el oído siempre tiene a dónde ir. Es lo que mantiene el swing en movimiento." },
      { de: "IV", a: "I", como: "Plagal con relleno", porque: "El cierre plagal no tiene tensión propia, así que se rellena con un lick de dobles cuerdas: el interés lo aporta la línea, no la armonía." },
      { de: "I", a: "vi", como: "Salto al relativo menor", porque: "Comparten dos notas, así que el puente cambia de ánimo sin modular. El bajo baja una tercera y la sección se vuelve más introspectiva." },
      { de: "V7", a: "I", como: "Bend de pedal steel", porque: "Subir la cuarta hasta la quinta con un bend mientras suena otra nota fija imita el efecto del pedal steel: una voz se mueve y la otra se queda quieta." },
      { de: "bVII", a: "I", como: "Cadencia mixolidia", porque: "El bajo sube un tono entero en vez de un semitono. Cierra sin la formalidad del V7 y por eso suena más campero y menos de salón." },
    ],
    licks: [
      { nombre: "Chicken pickin' en G", escala: "pentaMayor", raiz: "G", nota: "Sube D-E-G-A-B y baja por el mismo camino, todo en tercera posición. El sonido lo da la mano derecha: nota apagada con la palma y después pellizcada con el dedo.", notas: [ {cuerda:4, traste:3}, {cuerda:4, traste:5}, {cuerda:5, traste:3}, {cuerda:5, traste:5}, {cuerda:5, traste:7}, {cuerda:5, traste:5, tecnica:"p"}, {cuerda:4, traste:5}, {cuerda:4, traste:3} ] },
      { nombre: "Bend de pedal steel en A", escala: "pentaMayor", raiz: "A", nota: "El bend del E al F# en la segunda cuerda, con las notas vecinas quietas, imita el pedal del steel: una voz sube y las otras sostienen el acorde.", notas: [ {cuerda:3, traste:4}, {cuerda:3, traste:6}, {cuerda:3, traste:9}, {cuerda:4, traste:5}, {cuerda:4, traste:7, tecnica:"b"}, {cuerda:5, traste:5}, {cuerda:5, traste:9}, {cuerda:5, traste:7} ] },
      { nombre: "Walk-up abierto en E", escala: "pentaMayor", raiz: "E", nota: "Escalera ascendente que atraviesa cuatro cuerdas desde la sexta al aire: sirve de introducción porque va sumando registro hasta llegar al acorde.", notas: [ {cuerda:0, traste:0}, {cuerda:0, traste:2}, {cuerda:0, traste:4}, {cuerda:1, traste:2}, {cuerda:1, traste:4}, {cuerda:2, traste:2}, {cuerda:2, traste:4}, {cuerda:3, traste:1} ] },
      { nombre: "Walk-up mixolidio en D", escala: "mixolidio", raiz: "D", nota: "Sube por grados conjuntos desde la cuarta cuerda al aire hasta el D de la segunda: el C natural de la séptima menor es el que le saca formalidad al recorrido.", notas: [ {cuerda:2, traste:0}, {cuerda:2, traste:2}, {cuerda:2, traste:4}, {cuerda:2, traste:5}, {cuerda:3, traste:2}, {cuerda:3, traste:4}, {cuerda:3, traste:5}, {cuerda:4, traste:3} ] },
      { nombre: "Honky-tonk en C con bend", escala: "pentaMayor", raiz: "C", nota: "El bend sube un tono del G al A y después la frase cae a la caja de octava posición. El pull-off del final le da el ataque irregular típico del estilo.", notas: [ {cuerda:3, traste:9}, {cuerda:4, traste:8}, {cuerda:4, traste:10, tecnica:"b"}, {cuerda:5, traste:8}, {cuerda:5, traste:10}, {cuerda:5, traste:8, tecnica:"p"}, {cuerda:4, traste:10}, {cuerda:4, traste:8} ] },
      { nombre: "Frase de swing en G mixolidio", escala: "mixolidio", raiz: "G", nota: "Incluye el F natural, séptima menor, que es la nota que hace que la frase suene sobre un G7 y no sobre un G mayor. Termina con pull-off para ligar el final.", notas: [ {cuerda:3, traste:10}, {cuerda:3, traste:12}, {cuerda:4, traste:10}, {cuerda:4, traste:12}, {cuerda:5, traste:8}, {cuerda:5, traste:10}, {cuerda:5, traste:12}, {cuerda:5, traste:10, tecnica:"p"} ] },
    ],
  },

  western: {
    progresiones: [
      { grados: "i – bVI – V7 – i", ejemplo: "Am – F – E7 – Am", nota: "El bVI y el V7 están a un semitono: esa caída del bajo es el gesto que define el sonido. El V7 trae la séptima mayor prestada de la menor armónica." },
      { grados: "bVI – V7 – i", ejemplo: "F – E7 – Am", nota: "Cadencia reducida al mínimo. Se usa como final de tema porque concentra toda la tensión en el semitono descendente del bajo." },
      { grados: "i – bVII – bVI – V", ejemplo: "Am – G – F – E", nota: "Descenso andaluz completo: tres grados del eólico bajando y el V mayor al final. El G# del dominante contra el G natural anterior da el contraste característico." },
      { grados: "i – V7", ejemplo: "Am – E7", nota: "Péndulo de dos acordes: se alterna tensión y reposo sin avanzar. Al no haber tercer acorde la sensación es de espera, justo lo que se busca en pasajes de suspenso." },
      { grados: "i – iv – V7 – i", ejemplo: "Am – Dm – E7 – Am", nota: "Cadencia menor clásica. El iv menor oscurece antes de la dominante y hace que la llegada del V7 se escuche todavía más brillante por contraste." },
      { grados: "i – bII – i", ejemplo: "Em – F – Em", nota: "Balanceo frigio: el bII a un semitono de la tónica se pone y se saca. No hay progresión, hay roce, y eso alcanza para sostener una sección entera." },
      { grados: "i – bIII – bVI – V7", ejemplo: "Am – C – F – E7", nota: "Sube por terceras hasta el bVI y cae al V7. La primera mitad suena mayor y la segunda cierra la puerta con la dominante: el cambio de luz es el recurso." },
      { grados: "i – V7(b9) – i – bVI", ejemplo: "Am – E7(b9) – Am – F", nota: "La b9 está a un semitono de la tónica y suena a disminuido; después el bVI abre el registro. El ciclo alterna angustia y amplitud." },
      { grados: "i – immaj7 – i7 – i6", ejemplo: "Am – Ammaj7 – Am7 – Am6", nota: "Línea descendente sobre bajo fijo: la voz superior baja por semitonos mientras la tónica no se mueve. Cada paso cambia el color sin cambiar de acorde." },
      { grados: "i – bVI – bII – V7", ejemplo: "Am – F – Bb – E7", nota: "El bII entre el bVI y el V7 agrega una segunda tensión: dos acordes ajenos seguidos antes de la dominante hacen que la resolución final pese más." },
    ],
    transiciones: [
      { de: "bVI", a: "V7", como: "Descenso de semitono", porque: "La fundamental baja medio tono y el acorde pasa de reposo a máxima tensión. Es el movimiento más reconocible del estilo y funciona incluso sin tónica después." },
      { de: "V7", a: "i", como: "Cadencia de menor armónica", porque: "La séptima mayor del dominante resuelve un semitono arriba a la tónica. Esa nota no existe en el menor natural y es lo que hace que el cierre suene antiguo y definitivo." },
      { de: "i", a: "bVI", como: "Apertura por terceras", porque: "Comparten dos notas, así que el cambio no modula: solo ensancha el registro. Sirve para pasar de un pasaje tenso a uno de paisaje." },
      { de: "i", a: "V7 y vuelta", como: "Péndulo sin resolver", porque: "Repetir tensión y reposo sin agregar acordes deja la armonía congelada. Queda la sensación de que algo está por pasar y no pasa." },
      { de: "bII", a: "i", como: "Cadencia frigia", porque: "El bajo baja un semitono hasta la tónica sin usar dominante. Como no hay tritono, el cierre suena áspero en lugar de resuelto." },
      { de: "V7(b9)", a: "i", como: "Tensión disminuida", porque: "Las cuatro notas superiores del acorde forman un disminuido y la b9 está a un semitono de la tónica: dos voces resuelven por semitono al mismo tiempo." },
      { de: "i", a: "iv", como: "Subdominante menor", porque: "Sube una cuarta manteniendo la tercera menor. No hay notas nuevas, así que oscurece el pasaje sin sacarlo de la tonalidad." },
      { de: "i", a: "bIII", como: "Giro al relativo mayor", porque: "La tercera menor de la tónica pasa a ser fundamental y el color se aclara de golpe. Se usa para los temas principales, antes de volver al menor." },
    ],
    licks: [
      { nombre: "Trémolo en A menor armónica", escala: "menorArmonica", raiz: "A", nota: "Gira alrededor de la tónica y sube a B y C; el G# de la segunda cuerda es la séptima mayor que empuja de vuelta a A. Se toca con trémolo de púa, una nota por vez.", notas: [ {cuerda:5, traste:5}, {cuerda:5, traste:7}, {cuerda:5, traste:8}, {cuerda:5, traste:7}, {cuerda:5, traste:5}, {cuerda:4, traste:9}, {cuerda:5, traste:5} ] },
      { nombre: "Slide grave en E menor armónica", escala: "menorArmonica", raiz: "E", nota: "Sube por las dos cuerdas graves desde la sexta al aire: el D# del final es la séptima mayor y el slide hasta el E lo convierte en una llegada, no en una nota más.", notas: [ {cuerda:0, traste:0}, {cuerda:0, traste:2}, {cuerda:0, traste:3}, {cuerda:0, traste:5}, {cuerda:1, traste:2}, {cuerda:1, traste:3}, {cuerda:1, traste:6}, {cuerda:1, traste:7, tecnica:"/"} ] },
      { nombre: "Frase con séptima mayor en D", escala: "menorArmonica", raiz: "D", nota: "El C# es la séptima mayor de la menor armónica: aparece dos veces, primero como aproximación desde abajo y al final colgando a un semitono de la tónica.", notas: [ {cuerda:4, traste:10}, {cuerda:4, traste:11}, {cuerda:4, traste:14}, {cuerda:5, traste:10}, {cuerda:5, traste:13}, {cuerda:5, traste:12}, {cuerda:5, traste:10}, {cuerda:4, traste:14} ] },
      { nombre: "Trémolo frigio en E", escala: "frigio", raiz: "E", nota: "Alterna E y F, el semitono que define el modo, y después baja D-C-B para cerrar en la tónica. En posición abierta, con trémolo constante y mucha reverb.", notas: [ {cuerda:5, traste:0}, {cuerda:5, traste:1}, {cuerda:5, traste:0}, {cuerda:4, traste:3}, {cuerda:4, traste:1}, {cuerda:4, traste:0}, {cuerda:5, traste:0} ] },
      { nombre: "Línea grave en A frigio", escala: "frigio", raiz: "A", nota: "Sube A-Bb-C en la sexta cuerda y sigue por la quinta hasta el F: los dos semitonos del modo aparecen seguidos y el regreso cierra en la tónica.", notas: [ {cuerda:0, traste:5}, {cuerda:0, traste:6}, {cuerda:0, traste:8}, {cuerda:1, traste:5}, {cuerda:1, traste:7}, {cuerda:1, traste:8}, {cuerda:0, traste:6}, {cuerda:0, traste:5} ] },
      { nombre: "Frigio dominante en E", escala: "frigioDominante", raiz: "E", nota: "Tiene el bII frigio y la tercera mayor al mismo tiempo: el salto F-G# es una segunda aumentada y es lo que suena a desierto. Cierra bajando hasta la tónica.", notas: [ {cuerda:4, traste:1}, {cuerda:4, traste:3}, {cuerda:5, traste:0}, {cuerda:5, traste:1}, {cuerda:5, traste:4}, {cuerda:5, traste:5}, {cuerda:5, traste:4}, {cuerda:5, traste:1}, {cuerda:5, traste:0} ] },
    ],
  },
};

(function fusionarExtras() {
  const clave = {
    progresiones: (p) => p.grados,
    transiciones: (t) => t.de + ">" + t.a + ":" + t.como,
    licks: (l) => l.nombre,
  };
  Object.entries(EXTRAS).forEach(([id, extra]) => {
    const estilo = ESTILOS[id];
    if (!estilo) return;
    Object.keys(clave).forEach((lista) => {
      const actual = estilo[lista] || (estilo[lista] = []);
      const vistos = new Set(actual.map(clave[lista]));
      (extra[lista] || []).forEach((item) => {
        const k = clave[lista](item);
        if (vistos.has(k)) return;
        vistos.add(k);
        actual.push(item);
      });
    });
    // las escalas que usan los licks nuevos también tienen que estar listadas
    const escalas = estilo.escalas || (estilo.escalas = []);
    (extra.licks || []).forEach((l) => {
      if (l.escala && !escalas.includes(l.escala)) escalas.push(l.escala);
    });
  });
})();


/* --- biblioteca ampliada, segunda tanda ---------------------------------
   Otras quince progresiones, diez transiciones y ocho licks por estilo:
   intercambio modal, dominantes secundarias, pre-estribillos, blues de
   dieciséis compases, sustitución por terceras mayores, tonos enteros,
   bluegrass y western swing. Se fusionan con lo anterior descartando lo
   repetido. Cada nota de cada lick verificada contra su escala. */
const EXTRAS2 = {
pop: {
    progresiones: [
      {
        grados: "ii – V – I – vi",
        ejemplo: "Dm7 – G7 – Cmaj7 – Am7",
        nota: "La fundamental baja por quintas de D a G a C, y el tritono F–B del G7 resuelve por semitonos a E–C. El paso a Am7 mantiene tres notas comunes con Cmaj7, así que el ciclo vuelve a empezar sin corte."
      },
      {
        grados: "I – iii – IV – iv",
        ejemplo: "C – Em – F – Fm",
        nota: "Em comparte E y G con C, por eso el movimiento es casi un cambio de bajo. El paso de F a Fm baja la tercera A a Ab, un semitonito que apunta directo a G o vuelve a E del acorde de tónica."
      },
      {
        grados: "vi – iii – IV – I",
        ejemplo: "Am – Em – F – C",
        nota: "Los dos primeros acordes son menores con quinta descendente y comparten la nota E. Después F sube a C por movimiento plagal, y la sensible nunca aparece: el color queda suspendido entre menor y mayor."
      },
      {
        grados: "IV – V – vi – iii",
        ejemplo: "F – G – Am – Em",
        nota: "El arranque en IV empuja por grados conjuntos hasta vi, que actúa como tónica sustituta. El cierre en iii deja la tercera mayor de la tónica (G) en el bajo del oído, así que la vuelta a I no necesita dominante."
      },
      {
        grados: "I – II7 – V – I",
        ejemplo: "C – D7 – G – C",
        nota: "D7 es dominante secundaria de G: su F# es una sensible prestada que resuelve al G. Sirve para tonizar el V un compás antes de volver a I, sin salir de la tonalidad."
      },
      {
        grados: "vi – bVI – bVII – I",
        ejemplo: "Am – Ab – Bb – C",
        nota: "Ab viene del menor paralelo y hace que el bajo baje A–Ab, medio tono. Desde ahí Bb y C suben por tonos enteros, así que la llegada a la tónica es por grado conjunto y no por quinta."
      },
      {
        grados: "ii – iii – IV – V",
        ejemplo: "Dm – Em – F – G",
        nota: "Cuatro acordes con el bajo subiendo por grados de la escala: la tensión crece sólo por altura, sin cambio de función fuerte. Funciona como pre-estribillo porque deja el V abierto esperando el I."
      },
      {
        grados: "IV – iv – I – V",
        ejemplo: "F – Fm – C – G",
        nota: "El intercambio modal cambia A por Ab dentro del mismo bajo F. Ese Ab baja luego a G, la quinta de la tónica, y ahí el I aparece resuelto aunque no haya habido dominante."
      },
      {
        grados: "I – I7 – IV – iv",
        ejemplo: "C – C7 – F – Fm",
        nota: "Agregar Bb a C lo convierte en dominante de F, así que el IV llega tonizado. El Fm que sigue baja A a Ab y prepara un descenso cromático hacia G o hacia el E de la tónica."
      },
      {
        grados: "vi – ii – V – I",
        ejemplo: "Am7 – Dm7 – G7 – C6",
        nota: "Tres pasos de quinta descendente encadenados, con séptimas que resuelven bajando un grado en cada cambio. El C6 final evita el reposo total porque la sexta A sigue sonando como nota común con Am7."
      },
      {
        grados: "bVII – IV – I – V",
        ejemplo: "Bb – F – C – G",
        nota: "Arranca fuera de la tonalidad mayor: el Bb aporta la séptima menor y hace que todo sea una cadena de quintas ascendentes. Como cada acorde es dominante del siguiente por posición, el impulso no se detiene hasta el V."
      },
      {
        grados: "I – vi – iii – V",
        ejemplo: "C – Am – Em – G",
        nota: "Los tres primeros acordes comparten dos notas cada uno, así que la voz superior puede quedarse quieta en E. El salto a V al final introduce la sensible B recién en el último compás."
      },
      {
        grados: "ii – IV – I – iii",
        ejemplo: "Dm – F – C – Em",
        nota: "Dm y F tienen las mismas notas menos una, es un cambio de color más que de función. El cierre en iii mantiene el G común con la tónica y deja la frase entreabierta para repetir el ciclo."
      },
      {
        grados: "i – iv – bVI – V",
        ejemplo: "Am – Dm – F – E7",
        nota: "Todo en menor natural hasta el final, donde el E7 trae G# de la menor armónica. Ese G# está a un semitono del A de la tónica y a un semitono del bajo de F, así que cierra por conducción mínima."
      },
      {
        grados: "I – IV – II7 – V",
        ejemplo: "C – F – D7 – G",
        nota: "El D7 aparece justo después del IV, con el que comparte el bajo a distancia de quinta descendente invertida. Su F# contradice el F anterior y ese choque cromático es lo que empuja hacia el V."
      }
    ],
    transiciones: [
      {
        de: "estrofa en C mayor",
        a: "estribillo en C mayor",
        como: "Dm7 – Gsus4 – G7",
        porque: "El sus4 retrasa la tercera B y la deja caer recién en el último tiempo. Cuando entra el estribillo la sensible ya está activa y el I llega sin necesidad de golpe rítmico."
      },
      {
        de: "estribillo en C mayor",
        a: "puente en A menor",
        como: "F – E7 – Am",
        porque: "F y Am comparten A y C, así que el centro tonal se corre sin cambiar de material. El G# del E7 es la única nota nueva y funciona como sensible del nuevo eje."
      },
      {
        de: "pre-estribillo",
        a: "estribillo un tono arriba",
        como: "G – Bb – F/A – Bb",
        porque: "Bb es el bVII de la tonalidad original y el IV de la nueva, o sea un acorde pivote. El bajo G–Bb–A–Bb encierra la nueva tónica por arriba y por abajo antes de afirmarla."
      },
      {
        de: "intro en G mayor",
        a: "estrofa en E menor",
        como: "G – D/F# – Em",
        porque: "El bajo baja por grados conjuntos G–F#–E y llega a la relativa menor por paso, no por salto. G y Em comparten G y B, así que sólo cambia la nota más grave del arreglo."
      },
      {
        de: "estrofa",
        a: "estribillo con intercambio modal",
        como: "F – Fm7 – C/E",
        porque: "El Ab del Fm7 baja a G y el Eb implícito del color menor tironea hacia el E del bajo. La llegada a I en primera inversión mantiene el movimiento sin sonar a final."
      },
      {
        de: "estribillo",
        a: "solo sobre los mismos acordes",
        como: "C – Am7 – D7 – G",
        porque: "El D7 tonaliza el V y avisa que arranca una sección nueva sin cambiar de tonalidad. Sus notas F# y C forman tritono, que resuelve a G y B al empezar el solo."
      },
      {
        de: "puente en A menor",
        a: "último estribillo en C mayor",
        como: "Am – F6 – G – C",
        porque: "F6 mete la sexta D, que es nota común con el G siguiente y suaviza el cambio de función. De ahí el bajo sube por grados F–G–C y la tónica mayor vuelve sin contraste brusco."
      },
      {
        de: "estribillo",
        a: "outro sobre vamp",
        como: "C – Cmaj7 – C6 – Cadd9",
        porque: "La fundamental queda fija y sólo se mueve la voz superior B–A–D dentro de la misma armonía. Al no haber cambio de función, la sección se disuelve en lugar de cerrar."
      },
      {
        de: "estrofa en D mayor",
        a: "estribillo en B menor",
        como: "D – A/C# – Bm7",
        porque: "El bajo cromático D–C#–B llega a la relativa menor por semitono y tono. A/C# funciona como dominante invertida de Bm, con el C# a un semitono del nuevo centro."
      },
      {
        de: "medio tiempo instrumental",
        a: "vuelta de la estrofa",
        como: "Fmaj7 – Em7 – Dm7 – G7",
        porque: "Las séptimas bajan por grados conjuntos en tres acordes seguidos, así que el descenso es lineal. El G7 al final reinstala el tritono y devuelve la tensión que la estrofa necesita al arrancar."
      }
    ],
    licks: [
      {
        nombre: "Resolución de pre-estribillo",
        escala: "pentaMayor",
        raiz: "G",
        nota: "Sube por la caja de pentatónica mayor apoyando en las terceras B y E. Al no haber cuarta ni séptima, ninguna nota choca con el IV ni con el V de la progresión.",
        notas: [
          { cuerda: 0, traste: 3 },
          { cuerda: 0, traste: 5 },
          { cuerda: 1, traste: 2 },
          { cuerda: 1, traste: 5 },
          { cuerda: 2, traste: 2 },
          { cuerda: 2, traste: 5 },
          { cuerda: 3, traste: 2 },
          { cuerda: 3, traste: 4 }
        ]
      },
      {
        nombre: "Línea de estrofa con cuerdas al aire",
        escala: "jonico",
        raiz: "C",
        nota: "Alterna notas pisadas con cuerdas al aire, así que las alturas se superponen y suenan como arpegio. El apoyo está en E y G, tercera y quinta de la tónica.",
        notas: [
          { cuerda: 2, traste: 2 },
          { cuerda: 2, traste: 3 },
          { cuerda: 3, traste: 0 },
          { cuerda: 3, traste: 2 },
          { cuerda: 3, traste: 4, tecnica: "h" },
          { cuerda: 4, traste: 1 },
          { cuerda: 4, traste: 3 },
          { cuerda: 5, traste: 0 }
        ]
      },
      {
        nombre: "Vamp dórico de puente",
        escala: "dorico",
        raiz: "A",
        nota: "La sexta mayor F# es lo que separa este color del menor natural y aparece como nota de paso hacia G. La séptima menor G deja la frase abierta, sin sensible.",
        notas: [
          { cuerda: 0, traste: 5 },
          { cuerda: 0, traste: 7 },
          { cuerda: 0, traste: 8, tecnica: "p" },
          { cuerda: 1, traste: 5 },
          { cuerda: 1, traste: 7 },
          { cuerda: 2, traste: 5 },
          { cuerda: 2, traste: 7 },
          { cuerda: 3, traste: 5 }
        ]
      },
      {
        nombre: "Relleno sobre dominante",
        escala: "mixolidio",
        raiz: "D",
        nota: "La séptima menor C y la tercera mayor F# forman el intervalo que define el acorde de dominante. La frase termina en la novena E para que la resolución quede pendiente.",
        notas: [
          { cuerda: 1, traste: 5 },
          { cuerda: 1, traste: 7 },
          { cuerda: 2, traste: 5 },
          { cuerda: 2, traste: 7, tecnica: "b" },
          { cuerda: 2, traste: 9 },
          { cuerda: 3, traste: 7 },
          { cuerda: 3, traste: 9 }
        ]
      },
      {
        nombre: "Arranque de intro en menor",
        escala: "eolico",
        raiz: "E",
        nota: "Usa la primera posición para que el bajo E al aire funcione como pedal. El G natural fija la tercera menor y el D evita cualquier sensación de sensible.",
        notas: [
          { cuerda: 0, traste: 0 },
          { cuerda: 0, traste: 2 },
          { cuerda: 0, traste: 3 },
          { cuerda: 1, traste: 0 },
          { cuerda: 1, traste: 2 },
          { cuerda: 2, traste: 0 },
          { cuerda: 2, traste: 2 },
          { cuerda: 3, traste: 0 }
        ]
      },
      {
        nombre: "Roce de tercera mayor y menor",
        escala: "bluesMayor",
        raiz: "A",
        nota: "El par C–C# pone la tercera menor y la mayor pegadas, y ese semitono es todo el efecto. Al resolver siempre en C# la frase sigue sonando mayor.",
        notas: [
          { cuerda: 1, traste: 7 },
          { cuerda: 2, traste: 7 },
          { cuerda: 2, traste: 9 },
          { cuerda: 3, traste: 5 },
          { cuerda: 3, traste: 6, tecnica: "h" },
          { cuerda: 3, traste: 9 },
          { cuerda: 4, traste: 5 },
          { cuerda: 4, traste: 7 }
        ]
      },
      {
        nombre: "Contracanto de estribillo",
        escala: "pentaMayor",
        raiz: "C",
        nota: "Se queda en las cuerdas agudas para no pelearse con la voz en el registro medio. Las notas cargadas son G y A, quinta y sexta, que son comunes al I y al vi.",
        notas: [
          { cuerda: 2, traste: 7 },
          { cuerda: 2, traste: 10 },
          { cuerda: 3, traste: 7 },
          { cuerda: 3, traste: 9, tecnica: "/" },
          { cuerda: 4, traste: 8 },
          { cuerda: 4, traste: 10 },
          { cuerda: 5, traste: 8 }
        ]
      },
      {
        nombre: "Cierre con sensible",
        escala: "jonico",
        raiz: "G",
        nota: "La frase pasa por F# y cae en G, o sea sensible a tónica por semitono ascendente. Antes se apoya en C y E, cuarta y sexta, que son las notas del IV y bajan al acorde de tónica.",
        notas: [
          { cuerda: 3, traste: 2 },
          { cuerda: 3, traste: 4 },
          { cuerda: 3, traste: 5 },
          { cuerda: 4, traste: 3 },
          { cuerda: 4, traste: 5 },
          { cuerda: 5, traste: 2 },
          { cuerda: 5, traste: 3, tecnica: "h" },
          { cuerda: 5, traste: 5 }
        ]
      }
    ]
  },
  rock: {
    progresiones: [
      {
        grados: "i – bIII – bVII – iv",
        ejemplo: "Am – C – G – Dm",
        nota: "Los tres primeros acordes son los del menor natural con el bajo bajando por terceras y cuartas. El iv al final trae de nuevo el F, que baja medio tono al E del acorde de tónica cuando vuelve el ciclo."
      },
      {
        grados: "i – iv – bIII – bVII",
        ejemplo: "Em – Am – G – D",
        nota: "Cada acorde está a una cuarta ascendente del anterior, así que es una cadena de quintas descendentes disfrazada. Al no haber sensible, el D funciona como reposo temporal y no como dominante."
      },
      {
        grados: "I – V – bVII – IV",
        ejemplo: "A – E – G – D",
        nota: "El G contradice el G# que traía el E mayor, y ese semitono es el punto de giro de la progresión. Después el D baja por quinta al I y cierra la vuelta sin necesidad de dominante."
      },
      {
        grados: "i – bVI – iv – V",
        ejemplo: "Am – F – Dm – E",
        nota: "F y Dm comparten F y A, por eso el movimiento del medio es casi estático. El E mayor al final introduce G# como sensible y resuelve por semitono al A."
      },
      {
        grados: "I – IV – ii – bVII",
        ejemplo: "D – G – Em – C",
        nota: "El ii menor aparece donde se esperaba un V, así que la tensión se deja abierta. El C es un bVII prestado del mixolidio y baja por tono al bajo D cuando vuelve la vuelta."
      },
      {
        grados: "bVI – bVII – v – i",
        ejemplo: "F – G – Em – Am",
        nota: "El bajo sube por tonos enteros F–G y después cae por terceras hasta la tónica. Como el v es menor, la llegada a i no tiene sensible y suena por descenso de quinta, no por atracción."
      },
      {
        grados: "i – bIII – bVI – bVII",
        ejemplo: "Em – G – C – D",
        nota: "Sube por terceras y después por cuartas, recorriendo casi toda la escala menor natural en cuatro pasos. El D deja la séptima menor arriba y vuelve al i por movimiento descendente de tono."
      },
      {
        grados: "I – bIII – bVII – IV",
        ejemplo: "E – G – D – A",
        nota: "El G choca con el G# de la tríada mayor de tónica: ese roce de tercera menor sobre acorde mayor es el motor del riff. Después D y A bajan por quintas y devuelven el foco al I."
      },
      {
        grados: "i – V – iv – i",
        ejemplo: "Am – E – Dm – Am",
        nota: "El E trae G# de la menor armónica y forma un salto de segunda aumentada con el F del iv. La vuelta a i es por descenso de cuarta y deja el color menor intacto."
      },
      {
        grados: "I – iii – IV – I",
        ejemplo: "A – C#m – D – A",
        nota: "C#m comparte C# y E con el acorde de tónica, así que el cambio es de bajo más que de armonía. El D sube al A por cuarta y mantiene todo dentro del mayor, sin bVII."
      },
      {
        grados: "i – bVII – v – bVI",
        ejemplo: "Em – D – Bm – C",
        nota: "El bajo baja E–D y sigue bajando hasta B, todo por grados de la escala menor. El C al final sube medio tono al B previo invertido y empuja de vuelta al i."
      },
      {
        grados: "I5 – bIII5 – IV5 – I5",
        ejemplo: "A5 – C5 – D5 – A5",
        nota: "Sin terceras, la progresión no es mayor ni menor y las quintas paralelas mantienen todo abierto. El C aporta el intervalo de tercera menor sobre la tónica sólo como movimiento de bajo."
      },
      {
        grados: "i – iv – bVII – bIII",
        ejemplo: "Bm – Em – A – D",
        nota: "Cuatro quintas descendentes seguidas, así que cada acorde prepara al siguiente por la fundamental. Al llegar al bIII el oído lo toma como tónica relativa y la repetición reencuadra el Bm."
      },
      {
        grados: "I – II – IV – I",
        ejemplo: "D – E – G – D",
        nota: "El E mayor mete G#, la cuarta aumentada de la tonalidad, y eso es lo que da el color brillante. El G que sigue devuelve la cuarta natural y el contraste de ese semitono sostiene el riff."
      },
      {
        grados: "bIII – bVII – IV – I",
        ejemplo: "C – G – D – A",
        nota: "Cadena de quintas ascendentes que llega a la tónica desde abajo en la escala de fundamentales. Como cada acorde es mayor, la séptima menor del bIII se resuelve recién al final."
      }
    ],
    transiciones: [
      {
        de: "riff de estrofa en E",
        a: "estribillo en A",
        como: "E5 – D5 – A",
        porque: "El D es el bVII de la tonalidad de partida y el IV de la que llega, o sea un pivote directo. El bajo baja por tonos E–D y después sube por cuarta, así que la llegada tiene golpe."
      },
      {
        de: "estribillo en A menor",
        a: "solo en A mixolidio",
        como: "Am – A7 – D",
        porque: "Cambiar C por C# convierte la tónica menor en dominante y habilita la tercera mayor en el solo. El D que sigue confirma la nueva cuarta y deja el C natural como séptima."
      },
      {
        de: "puente",
        a: "último estribillo",
        como: "F – G – A5",
        porque: "Los bajos suben por tonos enteros F–G–A sin acordes de dominante. La subida por grado conjunto da el empuje que en este contexto haría el V, y no aparece ninguna sensible."
      },
      {
        de: "intro con pedal",
        a: "estrofa en D",
        como: "D5 – C5 – G5 – D5",
        porque: "Las quintas sin tercera dejan la modalidad sin definir hasta que entra la voz. El bajo recorre D–C–G, que son las fundamentales del mixolidio, y vuelve al centro por cuarta descendente."
      },
      {
        de: "estrofa en E menor",
        a: "puente en G mayor",
        como: "Em – D/F# – G",
        porque: "El bajo sube cromáticamente E–F#–G hasta la relativa mayor. Em y G comparten G y B, así que sólo se corre el centro de gravedad, no las notas."
      },
      {
        de: "estribillo",
        a: "medio tiempo instrumental",
        como: "A – Asus4 – A – G",
        porque: "El sus4 saca la tercera y afloja el color mayor antes de bajar al bVII. Cuando llega el G la sección ya perdió la sensible y suena más grave sin cambiar la fundamental de referencia."
      },
      {
        de: "solo",
        a: "vuelta del riff principal",
        como: "C – D – E5",
        porque: "Dos acordes mayores subiendo por tonos y llegada a la quinta de tónica. El movimiento paralelo evita la resolución funcional y por eso el riff vuelve a entrar como si nunca se hubiera ido."
      },
      {
        de: "estrofa en A",
        a: "estribillo medio tono arriba en Bb",
        como: "A5 – F5 – Bb",
        porque: "El F es el bVI de la tonalidad vieja y el V de la nueva, así que sirve de pivote. Su tercera A es a la vez la tónica que se abandona y la sensible del nuevo centro."
      },
      {
        de: "puente en tonos enteros",
        a: "estribillo en G",
        como: "Bb – C – D – G",
        porque: "Las fundamentales suben por tonos hasta el D, que recién ahí se comporta como dominante. La sensible F# aparece sólo en ese último acorde y resuelve por semitono al G."
      },
      {
        de: "outro",
        a: "vamp de cierre",
        como: "Em – Em7 – Em6",
        porque: "La fundamental queda fija y baja la voz interna D–C#, que convierte la séptima en sexta. Sin cambio de bajo ni de función, la sección se sostiene hasta el corte."
      }
    ],
    licks: [
      {
        nombre: "Caja menor con bend",
        escala: "pentaMenor",
        raiz: "A",
        nota: "La séptima menor G tira hacia el A por tono descendente y el bend sobre la quinta E carga la frase. Sin segunda ni sexta, ninguna nota interfiere con el bVII ni con el iv.",
        notas: [
          { cuerda: 0, traste: 5 },
          { cuerda: 0, traste: 8 },
          { cuerda: 1, traste: 5 },
          { cuerda: 1, traste: 7 },
          { cuerda: 2, traste: 5 },
          { cuerda: 2, traste: 7, tecnica: "b" },
          { cuerda: 3, traste: 5 },
          { cuerda: 3, traste: 7 }
        ]
      },
      {
        nombre: "Blues grave en primera posición",
        escala: "blues",
        raiz: "E",
        nota: "El Bb es la cuarta aumentada y aparece siempre entre A y B, como nota de paso cromática. La resolución cae en el E al aire, que funciona de pedal.",
        notas: [
          { cuerda: 0, traste: 0 },
          { cuerda: 0, traste: 3 },
          { cuerda: 1, traste: 0 },
          { cuerda: 1, traste: 1, tecnica: "h" },
          { cuerda: 1, traste: 2 },
          { cuerda: 2, traste: 0 },
          { cuerda: 2, traste: 2 }
        ]
      },
      {
        nombre: "Frase mixolidia sobre riff mayor",
        escala: "mixolidio",
        raiz: "A",
        nota: "La tercera mayor C# y la séptima menor G conviven, que es exactamente el color de dominante sostenida. El G baja por tono al F# y de ahí a E, quinta de la tónica.",
        notas: [
          { cuerda: 0, traste: 5 },
          { cuerda: 0, traste: 7 },
          { cuerda: 0, traste: 9 },
          { cuerda: 1, traste: 5 },
          { cuerda: 1, traste: 7 },
          { cuerda: 2, traste: 5 },
          { cuerda: 2, traste: 7 }
        ]
      },
      {
        nombre: "Descenso eólico de puente",
        escala: "eolico",
        raiz: "D",
        nota: "La sexta menor Bb baja por semitono al A, y ese movimiento es lo que fija el color menor natural. La frase evita la sensible, así que el bVII suena como reposo y no como tensión.",
        notas: [
          { cuerda: 0, traste: 3 },
          { cuerda: 0, traste: 5 },
          { cuerda: 1, traste: 1 },
          { cuerda: 1, traste: 3 },
          { cuerda: 1, traste: 5 },
          { cuerda: 2, traste: 3 },
          { cuerda: 2, traste: 5 }
        ]
      },
      {
        nombre: "Vamp dórico de dos acordes",
        escala: "dorico",
        raiz: "G",
        nota: "La sexta mayor E es la nota que distingue este color del menor natural y cae siempre sobre el acorde de IV. La séptima menor F sube al G por tono y cierra la vuelta.",
        notas: [
          { cuerda: 1, traste: 3 },
          { cuerda: 1, traste: 5 },
          { cuerda: 2, traste: 2 },
          { cuerda: 2, traste: 3, tecnica: "h" },
          { cuerda: 2, traste: 5 },
          { cuerda: 3, traste: 2 },
          { cuerda: 3, traste: 3 },
          { cuerda: 3, traste: 5 }
        ]
      },
      {
        nombre: "Pentatónica abierta en agudos",
        escala: "pentaMenor",
        raiz: "E",
        nota: "Combina cuerdas al aire con notas pisadas, así que las alturas se solapan y la frase suena continua. El apoyo está en G y D, tercera menor y séptima menor.",
        notas: [
          { cuerda: 3, traste: 2 },
          { cuerda: 3, traste: 4 },
          { cuerda: 4, traste: 0 },
          { cuerda: 4, traste: 3 },
          { cuerda: 4, traste: 5, tecnica: "b" },
          { cuerda: 5, traste: 0 },
          { cuerda: 5, traste: 3 }
        ]
      },
      {
        nombre: "Relleno mayor entre riffs",
        escala: "pentaMayor",
        raiz: "D",
        nota: "La tercera mayor F# y la sexta B dan un color abierto sin séptima, así que sirve sobre I y sobre IV. La frase termina en E, la novena, y queda suspendida para que entre el riff.",
        notas: [
          { cuerda: 0, traste: 5 },
          { cuerda: 0, traste: 7 },
          { cuerda: 1, traste: 5 },
          { cuerda: 1, traste: 7 },
          { cuerda: 2, traste: 4 },
          { cuerda: 2, traste: 7 },
          { cuerda: 3, traste: 7 }
        ]
      },
      {
        nombre: "Blues con desliz",
        escala: "blues",
        raiz: "G",
        nota: "El Db entre C y D funciona como cuarta aumentada de paso y el desliz remarca ese semitono. El F baja por tono al Eb implícito o sube al G, según cómo se cierre la frase.",
        notas: [
          { cuerda: 0, traste: 3 },
          { cuerda: 0, traste: 6 },
          { cuerda: 1, traste: 3 },
          { cuerda: 1, traste: 4, tecnica: "/" },
          { cuerda: 1, traste: 5 },
          { cuerda: 2, traste: 3 },
          { cuerda: 2, traste: 5 }
        ]
      }
    ]
  },
blues: {
    progresiones: [
      {
        grados: "I7 – IV7 – I7 – IV7 – I7 – V7 – IV7 – I7",
        ejemplo: "G7 – C7 – G7 – C7 – G7 – D7 – C7 – G7",
        nota: "Formato de 16 compases: el IV7 vuelve a aparecer en la segunda frase antes de que el I7 se afirme. Cada movimiento I7–IV7 mueve la séptima del I (F) un semitono a la tercera del IV (E), así que el salto de cuarta suena por conducción cromática y no por fuerza."
      },
      {
        grados: "I7 – IV7 – iv7 – I7",
        ejemplo: "A7 – D7 – Dm7 – A7",
        nota: "El iv7 menoriza el IV y baja su tercera (F# a F) medio tono, que es la séptima menor del I. Ese F queda como nota común con el A7 siguiente y cierra la frase sin necesidad de dominante."
      },
      {
        grados: "Imaj7 – bIII7 – bVImaj7 – VII7 – IIImaj7 – V7 – Imaj7",
        ejemplo: "Cmaj7 – Eb7 – Abmaj7 – B7 – Emaj7 – G7 – Cmaj7",
        nota: "Sustitución por terceras mayores: cada dominante resuelve una tercera mayor abajo y encadena tres centros a distancia de 4 semitonos. Las séptimas de los dominantes bajan medio tono a la tercera del maj7 siguiente, así que la cadena se sostiene por resolución de tritono en cada eslabón."
      },
      {
        grados: "I7 – VI7(b9) – ii7 – V7 – I7",
        ejemplo: "C7 – A7(b9) – Dm7 – G7 – C7",
        nota: "El VI7 con b9 funciona como dominante secundaria del ii: su b9 (Bb) baja a la quinta A del Dm7 y su tercera C# sube a la fundamental D. Después el ii–V ordinario devuelve el tritono al I."
      },
      {
        grados: "I7 – bVII9 – VI7(#9) – ii9 – V13 – I7",
        ejemplo: "F7 – Eb9 – D7(#9) – Gm9 – C13 – F7",
        nota: "Los últimos compases del slow blues bajan por tonos desde el I hasta el VI7 y ahí entra el ii–V. El #9 del D7 es el F que venía sonando como fundamental del I, así que el cambio de función se escucha sin mover esa voz."
      },
      {
        grados: "i7 – V7(b9) – iv7 – i7 – bVImaj7 – V7(b9)",
        ejemplo: "Am7 – E7(b9) – Dm7 – Am7 – Fmaj7 – E7(b9)",
        nota: "Blues menor con dominante alterada: el b9 (F) del E7 es nota común con el bVImaj7 y baja a la quinta E del Am7. El bVImaj7 antes del V7 aporta movimiento de fundamental por semitono descendente (F a E)."
      },
      {
        grados: "I6 – VI7 – ii7 – V9 – I6",
        ejemplo: "Bb6 – G7 – Cm7 – F9 – Bb6",
        nota: "Giro de jump blues: la sexta del I evita la séptima y deja la sonoridad abierta para el VI7, cuya tercera B sube a la fundamental C del ii7. El V9 agrega la novena G, que es nota común con el G7 del compás anterior."
      },
      {
        grados: "I7 – bIII7 – IV7 – I7",
        ejemplo: "E7 – G7 – A7 – E7",
        nota: "El bIII7 es un dominante de paso entre I y IV: su tercera B es la quinta del I y su séptima F sube por semitono a la fundamental... más exacto, su fundamental G sube un tono a la fundamental A del IV. La tercera común B une los tres acordes."
      },
      {
        grados: "I7 – bVII7 – VI7 – bVI7 – V7",
        ejemplo: "G7 – F7 – E7 – Eb7 – D7",
        nota: "Descenso cromático de dominantes hacia el V. Cada fundamental baja medio tono o un tono y las séptimas dibujan una línea paralela descendente, así que la tensión se acumula sin resolver hasta el V7."
      },
      {
        grados: "ii9 – bII13 – Imaj9",
        ejemplo: "Gm9 – Db13 – Cmaj9",
        nota: "El bII13 es el sustituto de tritono del V: comparte tercera y séptima con el G7 invertidas (F y Cb/B). Su fundamental Db baja medio tono al C final, que es la conducción más directa posible al I."
      },
      {
        grados: "I9 – IV13 – I9 – #ivdim7 – I9",
        ejemplo: "A9 – D13 – A9 – D#dim7 – A9",
        nota: "El #ivdim7 aparece como acorde de paso entre IV y I: sus cuatro voces están a un semitono o un tono de las del I con la quinta en el bajo. El D# resuelve subiendo a E, quinta del I."
      },
      {
        grados: "Imaj7 – vi7 – ii7 – V13 – Imaj7",
        ejemplo: "Ebmaj7 – Cm7 – Fm7 – Bb13 – Ebmaj7",
        nota: "Versión de blues gospel con el I en maj7: el vi7 comparte tres notas con el I y baja una tercera hasta el ii7. El 13 del V (G) es la tercera del I y ya está presente antes de la resolución."
      },
      {
        grados: "i7 – bVII7 – bVI7 – V7(b9) – i7",
        ejemplo: "Cm7 – Bb7 – Ab7 – G7(b9) – Cm7",
        nota: "Descenso diatónico de la menor natural con los grados convertidos en dominantes. El paso bVI7–V7 mueve la fundamental por semitono y el b9 del V (Ab) es nota común con el acorde anterior."
      },
      {
        grados: "i6 – V7(b9) – iv7 – V7(b9) – i6",
        ejemplo: "Am6 – E7(b9) – Dm7 – E7(b9) – Am6",
        nota: "Blues sobre menor armónica: la sexta del i (F#) contrasta con el F natural del b9 del V y genera el movimiento cromático que define la sonoridad. El G# del dominante sube medio tono a la fundamental del i cada vez que vuelve."
      },
      {
        grados: "I7 – #Idim7 – ii7 – V7 – I7",
        ejemplo: "C7 – C#dim7 – Dm7 – G7 – C7",
        nota: "El dim7 sobre #I camina el bajo de I a ii por semitonos y funciona como dominante del ii sin fundamental. Sus notas E, G y Bb ya estaban en el C7, así que sólo el bajo se mueve."
      }
    ],
    transiciones: [
      {
        de: "G7",
        a: "C7",
        como: "Mantené el F del G7 y bajá el B a Bb en la voz de arriba.",
        porque: "El F es séptima del I y tercera del IV, así que queda fijo; el B baja medio tono a la séptima del IV y produce el único movimiento audible."
      },
      {
        de: "C7",
        a: "C#dim7",
        como: "Subí sólo el bajo un semitono y dejá quietas las tres voces superiores.",
        porque: "E, G y Bb pertenecen a los dos acordes; con el bajo en C# el conjunto se lee como dominante del ii y el movimiento queda en una sola voz."
      },
      {
        de: "A7",
        a: "Dm7",
        como: "Bajá la tercera C# a C y subí la séptima G a A.",
        porque: "El tritono C#–G se abre a C–A, que son la séptima y la quinta del Dm7; el intervalo se resuelve hacia afuera por semitono y tono."
      },
      {
        de: "D7",
        a: "Db7",
        como: "Deslizá todo el voicing un semitono abajo antes de resolver al I.",
        porque: "El Db7 es sustituto de tritono del V alternativo y su séptima Cb/B baja al Bb; el paralelismo cromático conserva la estructura interválica y sólo cambia el nivel."
      },
      {
        de: "Bb7",
        a: "Ab7",
        como: "Bajá la tercera D a C y la séptima Ab a Gb, en bloque.",
        porque: "Las dos voces caen un tono y mantienen el tritono intacto, así que el color dominante se preserva mientras la fundamental desciende un tono hacia el bVI."
      },
      {
        de: "Am7",
        a: "E7(b9)",
        como: "Subí la quinta E a F y la fundamental A a G#.",
        porque: "El F es el b9 del dominante y aparece por movimiento ascendente de semitono; el G# entra como tercera y crea el cromatismo A–G# que anuncia el retorno al i."
      },
      {
        de: "F9",
        a: "Bb6",
        como: "Bajá la séptima Eb a D y dejá sonando el G como novena convertida en sexta.",
        porque: "El Eb resuelve medio tono abajo a la tercera del I y el G pasa de novena del V a sexta del I sin moverse, lo que suaviza el corte entre los dos acordes."
      },
      {
        de: "Eb7",
        a: "D7",
        como: "Bajá las cuatro voces un semitono sin cambiar la digitación.",
        porque: "Todas las tensiones se mueven en paralelo y el tritono desciende un semitono, así que la llegada al V se escucha como empuje cromático y no como cambio de función."
      },
      {
        de: "Cm7",
        a: "Fmaj7",
        como: "Mantené el Eb como nota superior y bajá el G a F en el bajo.",
        porque: "El Eb del i7 es la novena del F si se lo sostiene, y el descenso de quinta en el bajo deja tres notas comunes entre los dos acordes."
      },
      {
        de: "Db13",
        a: "Cmaj9",
        como: "Bajá fundamental y séptima un semitono y sostené el Bb como novena.",
        porque: "El Db baja a C y el Cb baja a Bb, que pasa a ser la novena del acorde final; dos semitonos descendentes bastan para cerrar la cadencia."
      }
    ],
    licks: [
      {
        nombre: "Caja uno en La",
        escala: "pentaMenor",
        raiz: "A",
        nota: "Las notas se concentran en la cuarta y la séptima menor, los grados que definen el color pentatónico. El bend sobre la tercera menor la lleva hacia la tercera mayor y crea la ambigüedad típica del blues.",
        notas: [
          { cuerda: 3, traste: 7 },
          { cuerda: 4, traste: 5 },
          { cuerda: 4, traste: 8, tecnica: "b" },
          { cuerda: 5, traste: 5 },
          { cuerda: 5, traste: 8 },
          { cuerda: 5, traste: 5 }
        ]
      },
      {
        nombre: "Ascenso abierto en Mi",
        escala: "blues",
        raiz: "E",
        nota: "El paso La–Sib–Si recorre la quinta disminuida entre cuarta y quinta, que es la nota que distingue la escala de blues de la pentatónica. Resolver del Sib al Si por semitono descarga esa tensión."
        ,
        notas: [
          { cuerda: 0, traste: 0 },
          { cuerda: 0, traste: 3 },
          { cuerda: 1, traste: 0 },
          { cuerda: 1, traste: 1, tecnica: "h" },
          { cuerda: 1, traste: 2 },
          { cuerda: 2, traste: 0 },
          { cuerda: 2, traste: 2 }
        ]
      },
      {
        nombre: "Mixolidio en Sol, zona baja",
        escala: "mixolidio",
        raiz: "G",
        nota: "La línea sube por grados conjuntos y apoya en la séptima menor y la cuarta, que son las notas que sostienen el I7. El Fa natural evita el color mayor y mantiene la función dominante."
        ,
        notas: [
          { cuerda: 0, traste: 3 },
          { cuerda: 1, traste: 2 },
          { cuerda: 1, traste: 3 },
          { cuerda: 1, traste: 5 },
          { cuerda: 2, traste: 2 },
          { cuerda: 2, traste: 3 },
          { cuerda: 2, traste: 5 }
        ]
      },
      {
        nombre: "Bebop dominante en Do",
        escala: "bebopDominante",
        raiz: "C",
        nota: "El tramo Sib–Si–Do encadena las dos séptimas y aterriza en la fundamental a tiempo fuerte. Ese cromatismo es lo que permite correr ocho notas seguidas sin que ninguna caiga fuera del acorde en los apoyos."
        ,
        notas: [
          { cuerda: 3, traste: 9 },
          { cuerda: 3, traste: 10 },
          { cuerda: 3, traste: 12 },
          { cuerda: 4, traste: 10 },
          { cuerda: 4, traste: 12 },
          { cuerda: 4, traste: 13 },
          { cuerda: 5, traste: 10 },
          { cuerda: 5, traste: 12 }
        ]
      },
      {
        nombre: "Dórico descendente en Re",
        escala: "dorico",
        raiz: "D",
        nota: "El descenso pasa por la sexta mayor y la séptima menor, el par que define el dórico sobre un ii7. Cada nota está a un grado conjunto de la siguiente, así que la línea se escucha como conducción de voces y no como arpegio."
        ,
        notas: [
          { cuerda: 4, traste: 12 },
          { cuerda: 4, traste: 10 },
          { cuerda: 3, traste: 12 },
          { cuerda: 3, traste: 9 },
          { cuerda: 2, traste: 12 },
          { cuerda: 2, traste: 10 },
          { cuerda: 1, traste: 12 }
        ]
      },
      {
        nombre: "Blues mayor en Sib",
        escala: "bluesMayor",
        raiz: "Bb",
        nota: "El ligado entre la tercera menor y la tercera mayor es el eje de la escala: dos notas a semitono que funcionan como apoyatura. La sexta mayor cierra la frase sobre la quinta sin tocar la séptima."
        ,
        notas: [
          { cuerda: 1, traste: 1 },
          { cuerda: 1, traste: 3 },
          { cuerda: 1, traste: 4, tecnica: "h" },
          { cuerda: 1, traste: 5 },
          { cuerda: 2, traste: 3 },
          { cuerda: 2, traste: 5 },
          { cuerda: 3, traste: 3 }
        ]
      },
      {
        nombre: "Blues en Do, zona media",
        escala: "blues",
        raiz: "C",
        nota: "El ligado Fa–Fa#–Sol atraviesa la quinta disminuida y la deja como nota de paso entre cuarta y quinta. Terminar en la fundamental una octava arriba cierra el recorrido sin ambigüedad."
        ,
        notas: [
          { cuerda: 2, traste: 10 },
          { cuerda: 2, traste: 13 },
          { cuerda: 3, traste: 10 },
          { cuerda: 3, traste: 11, tecnica: "h" },
          { cuerda: 3, traste: 12 },
          { cuerda: 4, traste: 11 },
          { cuerda: 4, traste: 13 }
        ]
      },
      {
        nombre: "Descenso pentatónico en Mi",
        escala: "pentaMenor",
        raiz: "E",
        nota: "La frase baja de dos en dos notas por cuerda y cada par forma una tercera menor o un tono. El bend inicial sobre la tercera menor sube hacia la cuarta y da el impulso para todo el descenso."
        ,
        notas: [
          { cuerda: 5, traste: 15, tecnica: "b" },
          { cuerda: 5, traste: 12 },
          { cuerda: 4, traste: 15 },
          { cuerda: 4, traste: 12 },
          { cuerda: 3, traste: 14 },
          { cuerda: 3, traste: 12 },
          { cuerda: 2, traste: 14 },
          { cuerda: 2, traste: 12 }
        ]
      }
    ]
  },
  metal: {
    progresiones: [
      {
        grados: "i – bVI – iv – i",
        ejemplo: "Em – C – Am – Em",
        nota: "El bVI comparte dos notas con el i y su fundamental está a una tercera mayor abajo, así que el cambio se produce moviendo una sola voz. El iv reintroduce la cuarta como bajo y prepara el retorno por movimiento de quinta."
      },
      {
        grados: "I5 – II5 – III5 – #IV5",
        ejemplo: "E5 – F#5 – G#5 – A#5",
        nota: "Riff construido sobre tonos enteros: todas las fundamentales están a un tono y ninguna define tercera, así que no hay tonalidad. El tritono entre la primera y la última fundamental cierra el ciclo sin resolución."
      },
      {
        grados: "i5 – bVI5 – bII5 – bVII5",
        ejemplo: "F#5 – D5 – G5 – E5",
        nota: "Con la fundamental sonando como pedal abajo, el bII5 produce un semitono contra el pedal y es el punto de máxima tensión. El bVII5 la descarga bajando un tono y dejando el intervalo de séptima con el pedal."
      },
      {
        grados: "i – bvidim – bII – i",
        ejemplo: "Em – Cdim – F – Em",
        nota: "La tríada disminuida sobre el bVI aporta un tritono que no existe en la escala menor natural y empuja al bII. Del bII al i la fundamental baja un semitono, la conducción más corta posible hacia la tónica."
      },
      {
        grados: "i5 – bIII5 – IV5 – i5",
        ejemplo: "A5 – C5 – D5 – A5",
        nota: "Los tres grados provienen de la pentatónica menor y las fundamentales se mueven por tercera menor y tono. Al no haber terceras en los acordes, el peso queda en el intervalo entre fundamentales."
      },
      {
        grados: "i – bVII – i – bVI – bVII",
        ejemplo: "Dm – C – Dm – Bb – C",
        nota: "Ciclo sin dominante: el bVII y el bVI están a un tono y a un tono y medio del i y comparten notas con él. Terminar en bVII deja la frase abierta porque su tercera no conduce a la tónica."
      },
      {
        grados: "i – iv – V7(b9) – bVI – V7",
        ejemplo: "Am – Dm – E7(b9) – F – E7",
        nota: "El b9 del dominante es la misma nota que la fundamental del bVI, así que el paso entre esos dos acordes no mueve la voz superior. La séptima del V baja medio tono a la tercera del i cuando la cadencia finalmente resuelve."
      },
      {
        grados: "I5 – bII5 – bIII5 – bV5",
        ejemplo: "B5 – C5 – D5 – F5",
        nota: "Las fundamentales trazan el tetracordio locrio con su quinta disminuida incluida. La ausencia de quinta justa sobre la tónica es lo que impide cualquier sensación de reposo."
      },
      {
        grados: "i – bVI – bIII – bVII",
        ejemplo: "Gm – Eb – Bb – F",
        nota: "Las cuatro fundamentales encadenan quintas descendentes salvo el primer salto, y cada acorde comparte dos notas con el siguiente. A tempo lento esa cadena de notas comunes sostiene el movimiento sin necesidad de dominante."
      },
      {
        grados: "i5 – bII5 – i5 – bVII5 – VII5",
        ejemplo: "E5 – F5 – E5 – D5 – D#5",
        nota: "El bII y el VII rodean la tónica por semitono desde arriba y desde abajo. Ese cerco cromático es el que produce la tensión, porque ninguna de las dos notas pertenece a la escala menor natural."
      },
      {
        grados: "i – bIII+ – iv – V7",
        ejemplo: "Am – Caug – Dm – E7",
        nota: "La tríada aumentada sobre el bIII aparece al elevar la séptima de la escala: su nota G# es la sensible y sube medio tono a la fundamental del i o a la tercera del V7. Los dos acordes centrales comparten el C."
      },
      {
        grados: "i5 – #IV5 – i5 – bII5",
        ejemplo: "E5 – A#5 – E5 – F5",
        nota: "El #IV está a un tritono de la tónica, el intervalo más lejano del ciclo, y volver a ella se escucha como caída. El bII final deja la frase a un semitono de la tónica y obliga a repetir el ciclo."
      },
      {
        grados: "i5 – bIII5 – #IV5 – VI5",
        ejemplo: "E5 – G5 – A#5 – C#5",
        nota: "Las fundamentales forman un arpegio disminuido: cada salto es una tercera menor y el patrón se repite cada tres semitonos. Esa simetría permite empezar el riff en cualquiera de las cuatro notas sin cambiar el color."
      },
      {
        grados: "Isus4 – i – bVI – bVII",
        ejemplo: "F#sus4 – F#m – D – E",
        nota: "El sus4 retrasa la tercera y al resolver baja un semitono hasta la tercera menor, que es el gesto que define la tonalidad. Después bVI y bVII bajan y suben un tono manteniendo la fundamental del i como nota común."
      },
      {
        grados: "i – bVI – bIII – bVII – iv – V7",
        ejemplo: "Em – C – G – D – Am – B7",
        nota: "La primera mitad se mueve por terceras y quintas dentro de la menor natural; la segunda introduce la sensible en el V7 para cerrar. La tercera D# del dominante es la única nota ajena a la escala y sube medio tono al E."
      }
    ],
    transiciones: [
      {
        de: "Em",
        a: "Cdim",
        como: "Sostené el G y bajá el E a Eb con el bajo en C.",
        porque: "El G es nota común entre las dos tríadas y el descenso de semitono E–Eb crea el tritono C–Gb cuando aparece el bajo, que es lo que genera la tensión."
      },
      {
        de: "F#5",
        a: "G5",
        como: "Movés la forma de quinta un semitono arriba y dejás la sexta cuerda al aire como pedal.",
        porque: "La fundamental G queda a semitono del pedal F# y su quinta D forma una sexta con él, así que el choque se concentra en una sola relación interválica."
      },
      {
        de: "E5",
        a: "A#5",
        como: "Saltá la forma seis trastes arriba sobre la misma cuerda.",
        porque: "Seis semitonos es el tritono: la quinta del primer acorde queda a semitono de la fundamental del segundo, y ninguna nota es común entre los dos."
      },
      {
        de: "Am",
        a: "Caug",
        como: "Subí el G a G# y dejá A y C donde están.",
        porque: "Un solo semitono ascendente convierte el menor en aumentado y produce la sensible; A y C se mantienen como notas comunes, así que el cambio se percibe como coloración y no como acorde nuevo."
      },
      {
        de: "E7(b9)",
        a: "F",
        como: "Dejá el F arriba y bajá el resto al voicing de tríada mayor.",
        porque: "El b9 del dominante es la fundamental del bVI, así que esa voz no se mueve; el G# baja a A y el D baja a C, dos semitonos descendentes."
      },
      {
        de: "F#sus4",
        a: "F#m",
        como: "Bajá el B a A sin tocar la fundamental ni la quinta.",
        porque: "La cuarta resuelve un semitono abajo a la tercera menor, que es el movimiento que define la tonalidad; al no moverse las otras voces, la atención queda en esa sola nota."
      },
      {
        de: "Dm",
        a: "Bb",
        como: "Mantené D y F y bajá el bajo a Bb.",
        porque: "El bVI contiene la fundamental y la tercera del i, así que dos de tres voces quedan fijas y el cambio ocurre sólo en el bajo por tercera descendente."
      },
      {
        de: "B5",
        a: "F5",
        como: "Cruzá a la cuerda siguiente conservando el mismo traste relativo, seis semitonos arriba.",
        porque: "La quinta disminuida entre las fundamentales no tiene resolución implícita, y eso permite alternar los dos acordes indefinidamente sin que ninguno funcione como tónica."
      },
      {
        de: "Gm",
        a: "Eb",
        como: "Sostené G y Bb y bajá el bajo una tercera mayor.",
        porque: "Las dos voces superiores son la tercera y la quinta del bVI, así que sólo se mueve la fundamental; a tempo lento eso mantiene la continuidad armónica."
      },
      {
        de: "E5",
        a: "D#5",
        como: "Bajá la forma un semitono al final de la frase.",
        porque: "La fundamental queda medio tono abajo de la tónica y funciona como sensible sin tercera, lo que fuerza el retorno al i por movimiento ascendente de semitono."
      }
    ],
    licks: [
      {
        nombre: "Frigio abierto en Mi",
        escala: "frigio",
        raiz: "E",
        nota: "El semitono entre fundamental y segunda menor aparece en las dos primeras notas y marca el modo desde el arranque. El resto asciende por grados conjuntos hasta la octava sin tocar ninguna nota alterada."
        ,
        notas: [
          { cuerda: 0, traste: 0 },
          { cuerda: 0, traste: 1 },
          { cuerda: 0, traste: 3 },
          { cuerda: 1, traste: 0 },
          { cuerda: 1, traste: 2 },
          { cuerda: 1, traste: 3 },
          { cuerda: 2, traste: 0 },
          { cuerda: 2, traste: 2 }
        ]
      },
      {
        nombre: "Frigio dominante en Mi",
        escala: "frigioDominante",
        raiz: "E",
        nota: "La segunda menor y la tercera mayor forman un intervalo de tercera menor entre sí, y ese salto es lo que separa este modo del frigio. La tercera mayor lo vuelve compatible con un acorde dominante sobre la tónica."
        ,
        notas: [
          { cuerda: 0, traste: 0 },
          { cuerda: 0, traste: 1 },
          { cuerda: 0, traste: 4 },
          { cuerda: 1, traste: 0 },
          { cuerda: 1, traste: 2 },
          { cuerda: 1, traste: 3 },
          { cuerda: 2, traste: 2 }
        ]
      },
      {
        nombre: "Menor armónica en La",
        escala: "menorArmonica",
        raiz: "A",
        nota: "El tramo final G#–A resuelve la sensible a la tónica por semitono. Entre la sexta menor y la séptima mayor hay una segunda aumentada, el salto de tono y medio que caracteriza la escala."
        ,
        notas: [
          { cuerda: 2, traste: 7 },
          { cuerda: 2, traste: 9 },
          { cuerda: 2, traste: 10 },
          { cuerda: 3, traste: 7 },
          { cuerda: 3, traste: 9 },
          { cuerda: 3, traste: 10 },
          { cuerda: 4, traste: 9 },
          { cuerda: 4, traste: 10 }
        ]
      },
      {
        nombre: "Locrio en Si",
        escala: "locrio",
        raiz: "B",
        nota: "La quinta disminuida está en la mitad de la frase y nunca se resuelve hacia arriba, así que la tónica no se afirma. La segunda menor inicial refuerza la inestabilidad desde el primer intervalo."
        ,
        notas: [
          { cuerda: 0, traste: 7 },
          { cuerda: 0, traste: 8 },
          { cuerda: 0, traste: 10 },
          { cuerda: 1, traste: 7 },
          { cuerda: 1, traste: 8 },
          { cuerda: 1, traste: 10 },
          { cuerda: 2, traste: 7 },
          { cuerda: 2, traste: 9 }
        ]
      },
      {
        nombre: "Tonos enteros en Do",
        escala: "tonosEnteros",
        raiz: "C",
        nota: "Todos los intervalos son de un tono, así que no hay semitonos que orienten el oído hacia una tónica. Llegar a la octava después de seis pasos iguales cierra la frase por simetría y no por resolución."
        ,
        notas: [
          { cuerda: 2, traste: 10 },
          { cuerda: 2, traste: 12 },
          { cuerda: 3, traste: 9 },
          { cuerda: 3, traste: 11 },
          { cuerda: 4, traste: 9 },
          { cuerda: 4, traste: 11 },
          { cuerda: 5, traste: 8 }
        ]
      },
      {
        nombre: "Disminuida semitono-tono en Re",
        escala: "disminuidaST",
        raiz: "D",
        nota: "El patrón alterna semitono y tono, así que cada par de notas repite el mismo diseño una tercera menor arriba. Eso permite mover la frase en bloques de tres trastes sin salir de la escala."
        ,
        notas: [
          { cuerda: 0, traste: 10 },
          { cuerda: 0, traste: 11 },
          { cuerda: 0, traste: 13 },
          { cuerda: 1, traste: 9 },
          { cuerda: 1, traste: 11 },
          { cuerda: 1, traste: 12 },
          { cuerda: 2, traste: 9 },
          { cuerda: 2, traste: 10 }
        ]
      },
      {
        nombre: "Pentatónica alta en Fa#",
        escala: "pentaMenor",
        raiz: "F#",
        nota: "Sin segundas ni sextas, todos los intervalos son de tono o tercera menor y la frase no roza ningún semitono. El bend sobre la cuarta la empuja hacia la quinta, que es el único apoyo estable de la escala junto a la tónica."
        ,
        notas: [
          { cuerda: 0, traste: 14 },
          { cuerda: 0, traste: 17 },
          { cuerda: 1, traste: 14, tecnica: "b" },
          { cuerda: 1, traste: 16 },
          { cuerda: 2, traste: 14 },
          { cuerda: 2, traste: 16 }
        ]
      },
      {
        nombre: "Eólico en Do, zona media",
        escala: "eolico",
        raiz: "C",
        nota: "La sexta menor y la séptima menor están a un tono entre sí y evitan cualquier sensible, así que la tónica se sostiene por repetición y no por atracción. La frase sube por grados conjuntos hasta la octava."
        ,
        notas: [
          { cuerda: 0, traste: 8 },
          { cuerda: 0, traste: 10 },
          { cuerda: 0, traste: 11 },
          { cuerda: 1, traste: 8 },
          { cuerda: 1, traste: 10 },
          { cuerda: 1, traste: 11 },
          { cuerda: 1, traste: 13 },
          { cuerda: 2, traste: 10 }
        ]
      }
    ]
  },
country: {
    progresiones: [
      {
        grados: "I – iii – IV – Vsus4 – V",
        ejemplo: "G – Bm – C – Dsus4 – D",
        nota: "El iii comparte tercera y quinta con el I, así que el bajo sube un tercera mayor sin mover las voces internas. El sus4 retrasa la tercera del V un tiempo y la resolución 4–3 cae justo antes de volver al I."
      },
      {
        grados: "I – IV – ii7 – V7",
        ejemplo: "C – F – Dm7 – G7",
        nota: "El IV y el ii7 comparten tres notas, por eso el paso entre ellos se siente como un cambio de bajo más que como un cambio de acorde. La séptima del ii7 baja un semitono a la tercera del V7 y el círculo se cierra solo."
      },
      {
        grados: "I – V – vi – IV",
        ejemplo: "D – A – Bm – G",
        nota: "La tercera del V es la fundamental del vi, así que el movimiento V–vi es una nota común que se convierte en raíz. El IV final deja la sexta del tono en el bajo del acorde anterior resuelta hacia abajo por tercera."
      },
      {
        grados: "IV – V – I – vi",
        ejemplo: "G – A – D – Bm",
        nota: "Arrancar en IV pone la tónica en la quinta del acorde, lo que deja la resolución pendiente hasta el tercer compás. El vi final es el relativo menor del I: cambian una sola voz y el ciclo puede repetirse sin cadencia."
      },
      {
        grados: "I – I7 – IV – iv",
        ejemplo: "C – C7 – F – Fm",
        nota: "La séptima menor agregada al I lo convierte en dominante del IV y baja por semitono a la tercera de ese acorde. El iv prestado baja la sexta mayor del tono a sexta menor, y esa nota empuja por semitono hacia la quinta del I cuando vuelve."
      },
      {
        grados: "I – vi – IV – V",
        ejemplo: "G – Em – C – D",
        nota: "El vi conserva dos notas del I y solo baja la fundamental una tercera menor. Después el bajo se mueve por grados conjuntos hasta el V, que llega con la séptima del tono lista para resolver."
      },
      {
        grados: "I – V – IV – I",
        ejemplo: "A – E – D – A",
        nota: "La cadencia plagal invertida evita la séptima del tono en el acorde final y deja un cierre sin tensión de semitono. El V hacia IV mueve el bajo un tono abajo y libera la sensible antes de que resuelva."
      },
      {
        grados: "I – bIII – IV – I",
        ejemplo: "E – G – A – E",
        nota: "El bIII trae la tercera menor del tono como fundamental y choca a propósito con la tercera mayor del I. Su quinta es la fundamental del IV, así que el enlace se resuelve por nota común y el bajo sube por tono."
      },
      {
        grados: "I6 – vi7 – ii7 – V13",
        ejemplo: "C6 – Am7 – Dm7 – G13",
        nota: "El I6 y el vi7 tienen las mismas cuatro notas: solo cambia cuál está en el bajo. Desde ahí el círculo de quintas descendente encadena séptimas que bajan por semitono, y la trece del V agrega la tercera del tono arriba de la dominante."
      },
      {
        grados: "Imaj7 – vi7 – IV6/9 – V9",
        ejemplo: "Gmaj7 – Em7 – C6/9 – D9",
        nota: "La séptima mayor del I se sostiene como quinta del vi7, así que la voz superior queda quieta dos acordes. El 6/9 sobre el IV evita la séptima y mantiene la sonoridad abierta hasta que la novena del V pide el regreso al I."
      },
      {
        grados: "III7 – VI7 – II7 – V7",
        ejemplo: "E7 – A7 – D7 – G7",
        nota: "Cada acorde es dominante del siguiente, y las séptimas bajan por semitono en cadena hasta la tercera del acorde que sigue. Al ser todos mayores, cada raíz introduce una nota ajena al tono que se justifica por la resolución inmediata."
      },
      {
        grados: "I – #Idim7 – ii7 – V7",
        ejemplo: "C – C#dim7 – Dm7 – G7",
        nota: "El disminuido cromático pone la fundamental un semitono debajo del ii7 y empuja el bajo hacia arriba. Sus notas son todas terceras menores, así que funciona como dominante de paso sin definir tonalidad propia."
      },
      {
        grados: "I – IV – I – bVII – IV – I",
        ejemplo: "G – C – G – F – C – G",
        nota: "El bVII baja la séptima del tono un semitono y crea un giro modal mixolidio. Su tercera es la fundamental del IV, por eso el descenso bVII–IV–I suena como una cadena de quintas hacia abajo."
      },
      {
        grados: "I – V – bVII – IV",
        ejemplo: "A – E – G – D",
        nota: "El bVII aparece después del V, así que la sensible se escucha primero y luego se cancela por semitono. El bajo baja por tono y por cuarta, y el IV final queda como reposo suspendido en vez de cadencia."
      },
      {
        grados: "I5 – IV5 – V5 – IV5",
        ejemplo: "A5 – D5 – E5 – D5",
        nota: "Sin terceras, los tres acordes son solo fundamental y quinta, y la progresión queda ambigua entre mayor y menor. El movimiento es paralelo por cuartas, por eso la conducción de voces es un traslado de bloque y no un enlace."
      }
    ],
    transiciones: [
      {
        de: "I – IV – ii7 – V7",
        a: "I – iii – IV – Vsus4 – V",
        como: "En el último tiempo del V7 poné la tercera del acorde en el bajo y subí un semitono a la fundamental del iii.",
        porque: "La tercera del V7 es la séptima del iii, así que el cambio se hace por nota común y solo el bajo se mueve."
      },
      {
        de: "I – V – vi – IV",
        a: "I – I7 – IV – iv",
        como: "Sobre el IV agregá la fundamental del tono en la voz superior y bajala un semitono cuando entra el iv.",
        porque: "Esa nota es la quinta del IV y se vuelve tercera menor del iv, de modo que el pasaje se define con un solo semitono."
      },
      {
        de: "I – vi – IV – V",
        a: "III7 – VI7 – II7 – V7",
        como: "Reemplazá el V final por el III7 y entrá a la cadena de dominantes desde ahí.",
        porque: "El III7 y el V comparten la quinta del tono, y la séptima nueva del III7 baja por semitono a la tercera del VI7."
      },
      {
        de: "I6 – vi7 – ii7 – V13",
        a: "Imaj7 – vi7 – IV6/9 – V9",
        como: "Dejá la sexta del I6 quieta y subila un semitono para convertirla en séptima mayor.",
        porque: "Las dos progresiones comparten el vi7, así que la única voz que cambia es la que define la calidad del primer acorde."
      },
      {
        de: "I – IV – I – bVII – IV – I",
        a: "I – bIII – IV – I",
        como: "En lugar de volver al I después del bVII, subí el bajo una tercera menor desde la tónica al bIII.",
        porque: "El bVII y el bIII comparten dos notas, y la tercera menor que trae el bIII ya estaba presente como séptima del bVII."
      },
      {
        de: "I – V – IV – I",
        a: "I5 – IV5 – V5 – IV5",
        como: "Sacá las terceras de los tres acordes y mantené solo fundamental y quinta.",
        porque: "Al quedar sin tercera, los acordes pierden función y la progresión pasa a leerse como movimiento paralelo de quintas."
      },
      {
        de: "I – #Idim7 – ii7 – V7",
        a: "I6 – vi7 – ii7 – V13",
        como: "En vez del disminuido cromático, bajá la fundamental una tercera menor al vi7 y agregá la sexta al I.",
        porque: "El I6 ya contiene las cuatro notas del vi7, así que el reemplazo no mueve ninguna voz interna."
      },
      {
        de: "IV – V – I – vi",
        a: "I – V – bVII – IV",
        como: "Desde el vi bajá la fundamental un tono hasta el V y seguí con el descenso al bVII.",
        porque: "El vi y el V comparten la séptima del tono como nota común, y desde el V el bVII cancela esa misma nota por semitono."
      },
      {
        de: "I – bIII – IV – I",
        a: "I – V – IV – I",
        como: "Cambiá el bIII por el V manteniendo la quinta del tono, que está en los dos acordes.",
        porque: "El bIII usa la tercera menor y el V la sensible: sustituir uno por otro mueve una sola voz un semitono en cada dirección."
      },
      {
        de: "Imaj7 – vi7 – IV6/9 – V9",
        a: "I – IV – ii7 – V7",
        como: "Sacá la novena del V y bajá la séptima mayor del I a la sexta y después a la quinta.",
        porque: "El IV6/9 y el ii7 comparten fundamental y quinta del IV, por eso la reducción a acordes de cuatro notas no rompe la línea del bajo."
      }
    ],
    licks: [
      {
        nombre: "Rodada de pentatónica en tercera cuerda",
        escala: "pentaMayor",
        raiz: "G",
        nota: "La frase encadena terceras mayores y menores de la pentatónica sin tocar la cuarta ni la séptima, así que ningún grado pide resolución. El salto final de sexta menor entre cuerdas deja la quinta del acorde arriba.",
        notas: [
          { cuerda: 3, traste: 7 },
          { cuerda: 3, traste: 9, tecnica: "h" },
          { cuerda: 4, traste: 8 },
          { cuerda: 4, traste: 10, tecnica: "h" },
          { cuerda: 5, traste: 7 },
          { cuerda: 5, traste: 10 },
          { cuerda: 4, traste: 8 }
        ]
      },
      {
        nombre: "Ascenso mixolidio sobre dominante",
        escala: "mixolidio",
        raiz: "A",
        nota: "El ascenso pasa por la séptima menor y la tercera mayor en la misma frase, que es el par de intervalos que define la dominante. La sexta mayor entra como paso conjunto y evita el salto de tritono directo.",
        notas: [
          { cuerda: 2, traste: 5 },
          { cuerda: 2, traste: 7 },
          { cuerda: 3, traste: 4 },
          { cuerda: 3, traste: 6 },
          { cuerda: 4, traste: 5 },
          { cuerda: 4, traste: 7 },
          { cuerda: 5, traste: 5 }
        ]
      },
      {
        nombre: "Escala jónica en posición octava",
        escala: "jonico",
        raiz: "C",
        nota: "La línea sube por grados conjuntos y usa la cuarta como apoyatura que baja a la tercera. La séptima mayor aparece antes de la tónica, así que el semitono final define el reposo.",
        notas: [
          { cuerda: 2, traste: 10 },
          { cuerda: 3, traste: 9 },
          { cuerda: 3, traste: 10, tecnica: "h" },
          { cuerda: 4, traste: 8 },
          { cuerda: 4, traste: 10 },
          { cuerda: 5, traste: 7 },
          { cuerda: 5, traste: 8 }
        ]
      },
      {
        nombre: "Arranque honky-tonk en cuerdas graves",
        escala: "bluesMayor",
        raiz: "E",
        nota: "El tramo cromático entre la segunda mayor y la tercera mayor pasa por la tercera menor, que funciona como nota de paso y no como grado estable. Al terminar en la sexta mayor la frase queda abierta hacia la dominante.",
        notas: [
          { cuerda: 0, traste: 0 },
          { cuerda: 0, traste: 2 },
          { cuerda: 0, traste: 3, tecnica: "h" },
          { cuerda: 0, traste: 4 },
          { cuerda: 1, traste: 2 },
          { cuerda: 2, traste: 2 },
          { cuerda: 2, traste: 4 },
          { cuerda: 3, traste: 1 }
        ]
      },
      {
        nombre: "Dórico en pares de trastes",
        escala: "dorico",
        raiz: "D",
        nota: "Cada cuerda aporta dos notas separadas por un tono, lo que reparte la escala en segundas mayores y evita semitonos consecutivos. La sexta mayor es lo que diferencia este pasaje de un menor natural.",
        notas: [
          { cuerda: 2, traste: 10 },
          { cuerda: 2, traste: 12 },
          { cuerda: 3, traste: 10 },
          { cuerda: 3, traste: 12 },
          { cuerda: 4, traste: 10 },
          { cuerda: 4, traste: 12 },
          { cuerda: 5, traste: 10 }
        ]
      },
      {
        nombre: "Bebop mayor con quinta menor de paso",
        escala: "bebopMayor",
        raiz: "G",
        nota: "La sexta menor se intercala entre la quinta y la sexta mayor, de modo que el tramo queda cromático y los grados estables caen en tiempo fuerte. La séptima mayor queda para la nota final y cierra el semitono hacia la tónica.",
        notas: [
          { cuerda: 2, traste: 5 },
          { cuerda: 3, traste: 2 },
          { cuerda: 3, traste: 4 },
          { cuerda: 3, traste: 5 },
          { cuerda: 4, traste: 3 },
          { cuerda: 4, traste: 4, tecnica: "h" },
          { cuerda: 4, traste: 5 },
          { cuerda: 5, traste: 3 }
        ]
      },
      {
        nombre: "Pentatónica abierta con cuerdas al aire",
        escala: "pentaMayor",
        raiz: "C",
        nota: "Las cuerdas al aire duplican grados de la escala en otra octava, así que la línea alterna registros sin cambiar de posición. Sin cuarta ni séptima, cualquier orden de las notas sigue sonando consonante sobre el acorde de tónica.",
        notas: [
          { cuerda: 1, traste: 3 },
          { cuerda: 2, traste: 0 },
          { cuerda: 2, traste: 2 },
          { cuerda: 3, traste: 0 },
          { cuerda: 3, traste: 2 },
          { cuerda: 4, traste: 1 },
          { cuerda: 5, traste: 0 },
          { cuerda: 5, traste: 3 }
        ]
      },
      {
        nombre: "Subida mixolidia hacia la novena",
        escala: "mixolidio",
        raiz: "E",
        nota: "La frase sube desde la cuarta hasta la segunda mayor de la octava siguiente, pasando por la tercera mayor y la séptima menor. Ese par de notas es el intervalo de tritono del acorde dominante y es lo que le da el empuje.",
        notas: [
          { cuerda: 2, traste: 7 },
          { cuerda: 3, traste: 6 },
          { cuerda: 3, traste: 7 },
          { cuerda: 4, traste: 5 },
          { cuerda: 4, traste: 7 },
          { cuerda: 5, traste: 4 },
          { cuerda: 5, traste: 5, tecnica: "h" },
          { cuerda: 5, traste: 7 }
        ]
      }
    ]
  },
  western: {
    progresiones: [
      {
        grados: "i – iv – bVI – V7 – i",
        ejemplo: "Am – Dm – F – E7 – Am",
        nota: "El bVI y el iv comparten dos notas, así que el bajo baja una tercera mayor con mínima conducción. Desde el bVI la fundamental cae un semitono a la del V7, y la sensible cierra el semitono hacia la tónica."
      },
      {
        grados: "i – bVI – iv – V7",
        ejemplo: "Am – F – Dm – E7",
        nota: "Poner el bVI antes del iv deja la sexta menor en el bajo y retarda la subdominante. La séptima del V7 baja por semitono a la tercera del i y la sensible sube, por eso la cadencia cierra con dos semitonos opuestos."
      },
      {
        grados: "bVI – bVII – i",
        ejemplo: "F – G – Am",
        nota: "Los tres acordes suben por grados conjuntos y ninguno trae sensible, así que la llegada al i es modal y no cadencial. El bVII contiene la séptima menor, que sube un tono entero a la tónica en vez de un semitono."
      },
      {
        grados: "i – bIIIaug – iv – V7",
        ejemplo: "Am – Caug – Dm – E7",
        nota: "El aumentado es la tríada de la tercera menor con la quinta subida un semitono, y esa nota es la sensible del tono. Al estar en terceras mayores superpuestas no define fundamental, por eso puede caer tanto en el iv como en el V7."
      },
      {
        grados: "i – i7/bVII – bVI6 – V7",
        ejemplo: "Am – Am7/G – F6 – E7",
        nota: "El bajo desciende por grados conjuntos mientras las voces de arriba quedan fijas sobre las notas del i. Cada nota del bajo pasa a ser séptima, quinta y después fundamental, así que un mismo acorde cambia de función tres veces."
      },
      {
        grados: "i – bVII – i – bVII",
        ejemplo: "Dm – C – Dm – C",
        nota: "Dos acordes mayores y menores a distancia de tono entero, sin sensible y sin cadencia: la repetición sostiene el pulso en lugar de resolver. La tercera menor del i baja un semitono a la séptima del bVII y vuelve a subir."
      },
      {
        grados: "iv – bVI – V7 – i",
        ejemplo: "Dm – F – E7 – Am",
        nota: "El iv y el bVI comparten tercera y quinta, así que el arranque es un cambio de bajo sobre la misma sonoridad. El paso bVI–V7 baja la fundamental un semitono, que es el movimiento más fuerte de toda la progresión."
      },
      {
        grados: "i – bIImaj7 – V7 – i",
        ejemplo: "Am – Bbmaj7 – E7 – Am",
        nota: "La séptima mayor del bII es la sensible del tono, por eso ese acorde ya contiene la nota que empuja al i. Su fundamental está un semitono arriba de la tónica y un cuarta arriba de la del V7, lo que permite las dos resoluciones."
      },
      {
        grados: "i – iv6 – V7(#9) – i",
        ejemplo: "Am – Dm6 – E7(#9) – Am",
        nota: "La sexta del iv es la sensible del tono anticipada dentro de un acorde menor. La novena aumentada del V7 es enarmónica con la tercera menor del i, así que el acorde de dominante ya trae el color menor de la resolución."
      },
      {
        grados: "i – bVI – bVII – bVI",
        ejemplo: "Am – F – G – F",
        nota: "El bVII y el bVI se alternan a distancia de tono y ninguno contiene sensible, por eso el bloque puede repetirse sin pedir cierre. Los tres acordes se explican por la escala menor natural y comparten al menos una nota de a pares."
      },
      {
        grados: "i – bIII – iv – bVI – V7",
        ejemplo: "Am – C – Dm – F – E7",
        nota: "El bIII es el relativo mayor y comparte dos notas con el i, así que la progresión arranca con una sola voz moviéndose. Después el bajo sube por segundas y terceras hasta el V7, cuya sensible es la única nota ajena a la escala menor natural."
      },
      {
        grados: "iim7b5 – V7(b13) – i",
        ejemplo: "Bm7b5 – E7(b13) – Am",
        nota: "El ii de la menor armónica es semidisminuido porque su quinta es la sexta menor del tono. Esa misma nota reaparece como b13 del V7 y baja un semitono a la quinta del i."
      },
      {
        grados: "i – bVII7 – bVI7 – V7",
        ejemplo: "Am – G7 – F7 – E7",
        nota: "Las fundamentales bajan por tono, tono y semitono, y cada acorde mantiene la estructura de séptima de dominante. Los tritonos se desplazan en paralelo, así que ninguno resuelve hasta que el V7 llega a la tónica."
      },
      {
        grados: "i5 – bVI5 – bVII5 – i5",
        ejemplo: "A5 – F5 – G5 – A5",
        nota: "Sin terceras solo quedan fundamentales y quintas, de modo que la sonoridad es la línea de bajo y nada más. El perfil sexta menor–séptima menor–tónica define el modo aunque no haya ningún acorde completo."
      },
      {
        grados: "i – iv – bVII – bIII – bVI – V7",
        ejemplo: "Am – Dm – G – C – F – E7",
        nota: "Es un círculo de quintas descendente dentro de la menor natural, así que cada séptima baja por semitono a la tercera del acorde siguiente. El V7 rompe la serie al subir la sensible y corta el descenso."
      }
    ],
    transiciones: [
      {
        de: "i – iv – bVI – V7 – i",
        a: "i – bVII7 – bVI7 – V7",
        como: "En vez de ir al iv, bajá la fundamental un tono y agregá séptima menor para armar el bVII7.",
        porque: "El iv y el bVII7 comparten dos notas, y la séptima nueva instala el patrón de dominantes paralelas que sigue bajando."
      },
      {
        de: "bVI – bVII – i",
        a: "i – bVI – bVII – bVI",
        como: "Al llegar al i volvé al bVI manteniendo la tónica en la voz superior, que es la tercera de ese acorde.",
        porque: "La tónica es nota común entre el i y el bVI, así que el retorno no interrumpe la voz de arriba y el ciclo se cierra sin cadencia."
      },
      {
        de: "i – bIII – iv – bVI – V7",
        a: "i – bIIIaug – iv – V7",
        como: "Subí un semitono la quinta del bIII antes de pasar al iv.",
        porque: "Esa quinta se convierte en la sensible del tono, y el aumentado resultante ya apunta al V7 sin cambiar de fundamental."
      },
      {
        de: "i – bVII – i – bVII",
        a: "i5 – bVI5 – bVII5 – i5",
        como: "Sacá las terceras de los dos acordes y sumá el bVI entre el i y el bVII.",
        porque: "Al quedar solo fundamental y quinta el contraste queda en el bajo, y el bVI completa el descenso por semitono desde la séptima menor."
      },
      {
        de: "iv – bVI – V7 – i",
        a: "iim7b5 – V7(b13) – i",
        como: "Reemplazá el iv por el iim7b5, que es el mismo acorde con la fundamental bajada un tercera menor.",
        porque: "El iim7b5 contiene las notas del iv más la segunda del tono, y su quinta disminuida es la misma nota que después funciona como b13 del V7."
      },
      {
        de: "i – i7/bVII – bVI6 – V7",
        a: "i – iv – bVII – bIII – bVI – V7",
        como: "En lugar de bajar el bajo por grados, salteá al iv y seguí el círculo de quintas hasta el bVI.",
        porque: "Las dos versiones llegan al mismo bVI antes del V7, pero una mueve el bajo por segundas y la otra por cuartas ascendentes."
      },
      {
        de: "i – iv6 – V7(#9) – i",
        a: "i – bIImaj7 – V7 – i",
        como: "Sostené la sensible que trae el iv6 y usala como séptima mayor del bII.",
        porque: "Esa nota es común a los dos acordes, así que el cambio de fundamental de una cuarta no mueve la voz superior."
      },
      {
        de: "i – bVI – iv – V7",
        a: "i – iv – bVI – V7 – i",
        como: "Invertí el orden de los dos acordes del medio para que el bajo suba una tercera mayor en vez de bajarla.",
        porque: "El iv y el bVI comparten tercera y quinta, así que el intercambio solo cambia qué nota queda en el bajo y cómo se llega al V7."
      },
      {
        de: "i – bVII7 – bVI7 – V7",
        a: "i – bIII – iv – bVI – V7",
        como: "Saltá del bVII7 al bIII bajando la séptima del acorde a la tercera del siguiente.",
        porque: "El bVII7 es la dominante del bIII, y esa resolución por semitono corta la cadena de dominantes paralelas en un punto estable."
      },
      {
        de: "i – bVI – bVII – bVI",
        a: "bVI – bVII – i",
        como: "Dejá el bVI final como punto de partida y subí al bVII sin volver al i.",
        porque: "El ostinato ya contiene los dos acordes, así que la transición es solo dejar de repetir y cerrar el ascenso por grados conjuntos."
      }
    ],
    licks: [
      {
        nombre: "Menor armónica con salto de segunda aumentada",
        escala: "menorArmonica",
        raiz: "A",
        nota: "El paso de la sexta menor a la séptima mayor es una segunda aumentada, el intervalo que separa esta escala del menor natural. La frase la cruza dos veces, así que la tensión no se disuelve aunque el contorno sea ascendente.",
        notas: [
          { cuerda: 1, traste: 7 },
          { cuerda: 1, traste: 8 },
          { cuerda: 2, traste: 6 },
          { cuerda: 2, traste: 7 },
          { cuerda: 3, traste: 5 },
          { cuerda: 3, traste: 7 },
          { cuerda: 4, traste: 5 },
          { cuerda: 4, traste: 6 }
        ]
      },
      {
        nombre: "Frigio dominante en posición abierta",
        escala: "frigioDominante",
        raiz: "E",
        nota: "La segunda menor y la tercera mayor conviven en la misma frase, y ese semitono sobre la tónica es lo que fuerza el sonido de dominante. El salto de la segunda menor a la tercera mayor abre una segunda aumentada en el registro grave.",
        notas: [
          { cuerda: 0, traste: 0 },
          { cuerda: 0, traste: 1, tecnica: "h" },
          { cuerda: 0, traste: 4 },
          { cuerda: 1, traste: 0 },
          { cuerda: 1, traste: 2 },
          { cuerda: 1, traste: 3 },
          { cuerda: 2, traste: 0 },
          { cuerda: 2, traste: 2 }
        ]
      },
      {
        nombre: "Ascenso frigio sobre pedal",
        escala: "frigio",
        raiz: "D",
        nota: "La escala trae segunda menor y sexta menor, así que hay dos semitonos que empujan hacia abajo aunque la línea suba. La frase termina en la séptima menor y deja el descenso de tono hacia la tónica pendiente.",
        notas: [
          { cuerda: 2, traste: 10 },
          { cuerda: 2, traste: 12 },
          { cuerda: 3, traste: 8 },
          { cuerda: 3, traste: 10 },
          { cuerda: 4, traste: 8 },
          { cuerda: 4, traste: 10 },
          { cuerda: 4, traste: 11 },
          { cuerda: 5, traste: 10 }
        ]
      },
      {
        nombre: "Eólico por grados conjuntos",
        escala: "eolico",
        raiz: "A",
        nota: "Tres notas por cuerda en segundas mayores y menores, sin sensible, así que la octava se completa sin ninguna atracción hacia la tónica. El semitono entre quinta y sexta menor es el único punto de tensión y cae en el medio de la frase.",
        notas: [
          { cuerda: 0, traste: 5 },
          { cuerda: 0, traste: 7 },
          { cuerda: 0, traste: 8 },
          { cuerda: 1, traste: 5 },
          { cuerda: 1, traste: 7 },
          { cuerda: 1, traste: 8 },
          { cuerda: 2, traste: 5 },
          { cuerda: 2, traste: 7 }
        ]
      },
      {
        nombre: "Pentatónica menor con bend en la séptima",
        escala: "pentaMenor",
        raiz: "E",
        nota: "La pentatónica menor deja fuera la segunda y la sexta, por eso el contorno queda en cuartas y terceras menores sin semitonos. El bend sube la quinta hacia la séptima menor, que es el intervalo que carga la frase.",
        notas: [
          { cuerda: 4, traste: 12 },
          { cuerda: 4, traste: 15 },
          { cuerda: 5, traste: 12 },
          { cuerda: 5, traste: 15, tecnica: "b" },
          { cuerda: 5, traste: 12 },
          { cuerda: 4, traste: 15, tecnica: "b" },
          { cuerda: 4, traste: 12 }
        ]
      },
      {
        nombre: "Dórico ascendente en registro medio",
        escala: "dorico",
        raiz: "E",
        nota: "La sexta mayor sobre una tercera menor es lo que separa este pasaje del menor natural y le quita la caída del semitono. La línea sube por grados conjuntos y termina en la cuarta, que queda suspendida sobre el acorde de tónica.",
        notas: [
          { cuerda: 2, traste: 9 },
          { cuerda: 2, traste: 11 },
          { cuerda: 2, traste: 12 },
          { cuerda: 3, traste: 9 },
          { cuerda: 3, traste: 11 },
          { cuerda: 3, traste: 12 },
          { cuerda: 4, traste: 10 }
        ]
      },
      {
        nombre: "Menor armónica hacia la sensible",
        escala: "menorArmonica",
        raiz: "D",
        nota: "La frase sube desde la tónica hasta la séptima mayor pasando por la sexta menor, así que el último tramo es una segunda aumentada seguida de semitono. Ese cierre deja la sensible apuntando a la tónica una octava arriba.",
        notas: [
          { cuerda: 1, traste: 5 },
          { cuerda: 1, traste: 7 },
          { cuerda: 1, traste: 8 },
          { cuerda: 2, traste: 5 },
          { cuerda: 2, traste: 7 },
          { cuerda: 2, traste: 8 },
          { cuerda: 3, traste: 6 },
          { cuerda: 3, traste: 7 }
        ]
      },
      {
        nombre: "Descenso frigio dominante",
        escala: "frigioDominante",
        raiz: "A",
        nota: "Bajar la escala pone la segunda menor justo antes de la tónica, y ese semitono descendente es la resolución más fuerte del modo. La sexta menor y la tercera mayor forman una segunda aumentada que aparece al cruzar de cuerda.",
        notas: [
          { cuerda: 5, traste: 10 },
          { cuerda: 5, traste: 9, tecnica: "p" },
          { cuerda: 5, traste: 6 },
          { cuerda: 5, traste: 5 },
          { cuerda: 4, traste: 8 },
          { cuerda: 4, traste: 6 },
          { cuerda: 4, traste: 5 },
          { cuerda: 3, traste: 6 }
        ]
      }
    ]
  }
};

(function fusionarExtras2() {
  const clave = {
    progresiones: (p) => p.grados,
    transiciones: (t) => t.de + ">" + t.a + ":" + t.como,
    licks: (l) => l.nombre,
  };
  Object.entries(EXTRAS2).forEach(([id, extra]) => {
    const estilo = ESTILOS[id];
    if (!estilo) return;
    Object.keys(clave).forEach((lista) => {
      const actual = estilo[lista] || (estilo[lista] = []);
      const vistos = new Set(actual.map(clave[lista]));
      (extra[lista] || []).forEach((item) => {
        const k = clave[lista](item);
        if (vistos.has(k)) return;
        vistos.add(k);
        actual.push(item);
      });
    });
    const escalas = estilo.escalas || (estilo.escalas = []);
    (extra.licks || []).forEach((l) => {
      if (l.escala && !escalas.includes(l.escala)) escalas.push(l.escala);
    });
  });
})();
