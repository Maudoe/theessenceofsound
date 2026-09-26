const MAPAS_ARMONICOS = [
  {
    "key": "armonia-1",
    "coleccion": "armonia",
    "id": 1,
    "nombre": "Red de Intercambio Modal (Dramatismo y Cine)",
    "geometria": "Matriz / Grilla de 7x4",
    "proposito": "Mezclar acordes de modo Mayor y Menor Paralelo (por ejemplo, Do Mayor y Do Menor) para lograr transiciones emotivas y cinemáticas.",
    "nodos_principales": [
      "C",
      "Cm",
      "Fm",
      "Ab",
      "Bb",
      "Eb"
    ],
    "conexiones_flechas": [
      {
        "origen": "C",
        "destino": "Fm",
        "tipo": "Intercambio Modal (Subdominante menor)"
      },
      {
        "origen": "Fm",
        "destino": "Bb",
        "tipo": "Paso armónico"
      },
      {
        "origen": "Bb",
        "destino": "C",
        "tipo": "Resolución de Cadencia Backdoor"
      }
    ],
    "esquema_colores": {
      "tonica": "#00FFC8",
      "acordes_mayores": "#4A90E2",
      "acordes_menores": "#E74C3C",
      "prestados_del_menor": "#9B59B6"
    },
    "sensacion_emocional": "Nostalgia, melancolía heroica, giros inesperados."
  },
  {
    "key": "armonia-2",
    "coleccion": "armonia",
    "id": 2,
    "nombre": "Estrella de Dominantes Secundarias (Jazz y Pop Avanzado)",
    "geometria": "Estrella Central con Órbitas Radial",
    "proposito": "Mapear los 'acordes puente' (acordes 7) que te llevan temporalmente a cualquier otro grado de la escala.",
    "nodos_principales": [
      "C",
      "A7",
      "Dm",
      "D7",
      "G7",
      "E7",
      "Am",
      "B7",
      "Em"
    ],
    "conexiones_flechas": [
      {
        "origen": "C",
        "destino": "A7",
        "tipo": "Dominante secundaria al ii"
      },
      {
        "origen": "A7",
        "destino": "Dm",
        "tipo": "Resolución natural"
      },
      {
        "origen": "Dm",
        "destino": "D7",
        "tipo": "Dominante secundaria al V"
      },
      {
        "origen": "D7",
        "destino": "G7",
        "tipo": "Resolución V/V"
      },
      {
        "origen": "G7",
        "destino": "C",
        "tipo": "Resolución Tónica"
      }
    ],
    "esquema_colores": {
      "tonica": "#00FFC8",
      "dominantes_secundarias": "#F39C12",
      "acordes_destino": "#3498DB"
    },
    "sensacion_emocional": "Sofisticación, tensión de resolución inmediata, movimiento continuo."
  },
  {
    "key": "armonia-3",
    "coleccion": "armonia",
    "id": 3,
    "nombre": "Mapa de Sustitución Tritonal y Cadencias Alteradas (Jazz / Fusion)",
    "geometria": "Diagrama en X (Diamante Intersectado)",
    "proposito": "Reemplazar el acorde dominante tradicional por uno a distancia de tritono para tensión extrema.",
    "nodos_principales": [
      "Dm7",
      "G7",
      "Db7",
      "Cmaj7"
    ],
    "conexiones_flechas": [
      {
        "origen": "Dm7",
        "destino": "G7",
        "tipo": "Progresión estándar ii-V"
      },
      {
        "origen": "Dm7",
        "destino": "Db7",
        "tipo": "Sustitución Tritonal (SubV7)"
      },
      {
        "origen": "Db7",
        "destino": "Cmaj7",
        "tipo": "Resolución cromática descendente"
      }
    ],
    "esquema_colores": {
      "subdominante": "#2ECC71",
      "dominante_original": "#F1C40F",
      "sustituto_tritonal": "#E67E22",
      "tonica": "#00FFC8"
    },
    "sensacion_emocional": "Tensión flotante, misterio urbano, elegancia técnica."
  },
  {
    "key": "armonia-4",
    "coleccion": "armonia",
    "id": 4,
    "nombre": "Rueda de Modos Griegos y Color Modal (Fantasía y Aventura)",
    "geometria": "Anillos Concentricos",
    "proposito": "Navegar entre el centro (Modo Jónico/Eólico) y sus modulaciones de brillo/oscuridad (Lidio, Dórico, Frigio).",
    "nodos_principales": [
      "C (Jónico)",
      "D (Dórico)",
      "E (Frigio)",
      "F (Lidio)",
      "G (Mixolidio)",
      "A (Eólico)"
    ],
    "conexiones_flechas": [
      {
        "origen": "C",
        "destino": "Fmaj7(#11)",
        "tipo": "Paso a Modo Lidio (Brillo/Magia)"
      },
      {
        "origen": "C",
        "destino": "Dm7-G7",
        "tipo": "Paso a Modo Dórico (Misterio Épico)"
      },
      {
        "origen": "C",
        "destino": "Esus4(b9)",
        "tipo": "Paso a Modo Frigio (Tensión/Étnico)"
      }
    ],
    "esquema_colores": {
      "modos_brillantes_mayores": "#FFF176",
      "modos_neutros": "#81D4FA",
      "modos_oscuros_menores": "#B388FF"
    },
    "sensacion_emocional": "Épica, misticismo, mundos fantásticos, aventura."
  },
  {
    "key": "armonia-5",
    "coleccion": "armonia",
    "id": 5,
    "nombre": "Red de Acordes Diminutos y Ejes de Simetría (Suspenso / Terror)",
    "geometria": "Octágono de Enlaces Simétricos",
    "proposito": "Utilizar acordes disminuidos ($7^\\circ$) como 'comodines' para conectar tonalidades lejanas sin pasar por el círculo clásico.",
    "nodos_principales": [
      "C",
      "C#dim7",
      "Edim7",
      "Gdim7",
      "Adim7",
      "D",
      "Eb",
      "F#"
    ],
    "conexiones_flechas": [
      {
        "origen": "C",
        "destino": "C#dim7",
        "tipo": "Paso cromático de tensión"
      },
      {
        "origen": "C#dim7",
        "destino": "D",
        "tipo": "Resolución ascendente"
      },
      {
        "origen": "C#dim7",
        "destino": "Eb",
        "tipo": "Pivot simétrico a tonalidad lejana"
      }
    ],
    "esquema_colores": {
      "tonicas": "#00FFC8",
      "acordes_disminuidos": "#D50000",
      "resoluciones_inesperadas": "#AA00FF"
    },
    "sensacion_emocional": "Incertidumbre, peligro, suspenso, terror psicológico."
  },
  {
    "key": "armonia-6",
    "coleccion": "armonia",
    "id": 6,
    "nombre": "Círculo de la Cadencia de Blues y Dominantes Continuas (Blues / Rock)",
    "geometria": "Bucle Triangular Continuo",
    "proposito": "Mapear la estructura de 12 compases con acordes dominantes que rompen la regla clásica de la tónica mayor.",
    "nodos_principales": [
      "I7 (C7)",
      "IV7 (F7)",
      "V7 (G7)"
    ],
    "conexiones_flechas": [
      {
        "origen": "C7",
        "destino": "F7",
        "tipo": "Tránsito al IV grado dominantizado"
      },
      {
        "origen": "F7",
        "destino": "C7",
        "tipo": "Retorno a la tónica"
      },
      {
        "origen": "C7",
        "destino": "G7",
        "tipo": "Paso al Turnaround"
      },
      {
        "origen": "G7",
        "destino": "F7",
        "tipo": "Bajada clásica de Blues"
      }
    ],
    "esquema_colores": {
      "tonica_7": "#FF6D00",
      "subdominante_7": "#FFAB00",
      "dominante_7": "#FFD600"
    },
    "sensacion_emocional": "Energía, ritmo, tensión terrenal, groove."
  },
  {
    "key": "armonia-7",
    "coleccion": "armonia",
    "id": 7,
    "nombre": "Círculo de Terceras Mayores (Coltrane Changes)",
    "geometria": "Triángulo Equilátero Rotativo",
    "proposito": "Modular rápidamente dividiendo la octava en tres partes iguales, evitando la progresión tradicional por quintas.",
    "nodos_principales": [
      "Cmaj7",
      "Abmaj7",
      "Emaj7",
      "B7",
      "Eb7",
      "G7"
    ],
    "conexiones_flechas": [
      {
        "origen": "B7",
        "destino": "Emaj7",
        "tipo": "Resolución V-I local"
      },
      {
        "origen": "Emaj7",
        "destino": "G7",
        "tipo": "Salto de tercera menor"
      },
      {
        "origen": "G7",
        "destino": "Cmaj7",
        "tipo": "Resolución V-I local"
      },
      {
        "origen": "Cmaj7",
        "destino": "Eb7",
        "tipo": "Salto cromático para reiniciar el ciclo"
      }
    ],
    "esquema_colores": {
      "centros_tonales": "#2980B9",
      "dominantes_puente": "#C0392B"
    },
    "sensacion_emocional": "Vértigo, genialidad matemática, cascada sonora, jazz de vanguardia."
  },
  {
    "key": "armonia-8",
    "coleccion": "armonia",
    "id": 8,
    "nombre": "Red de Armonía Cuartal",
    "geometria": "Escalera de Pilares Paralelos",
    "proposito": "Construir acordes apilando cuartas en lugar de terceras para crear armonías suspendidas y sin un centro tonal agresivo.",
    "nodos_principales": [
      "E-A-D-G",
      "D-G-C-F",
      "A-D-G-C"
    ],
    "conexiones_flechas": [
      {
        "origen": "E-A-D-G",
        "destino": "D-G-C-F",
        "tipo": "Desplazamiento diatónico descendente"
      },
      {
        "origen": "D-G-C-F",
        "destino": "A-D-G-C",
        "tipo": "Salto interválico modal"
      }
    ],
    "esquema_colores": {
      "acordes_cuartales": "#16A085",
      "tonos_pedal": "#8E44AD"
    },
    "sensacion_emocional": "Espacio abierto, gravedad cero, meditación, jazz modal."
  },
  {
    "key": "armonia-9",
    "coleccion": "armonia",
    "id": 9,
    "nombre": "Matriz de Cadencias Rotas (Deceptive Cadences)",
    "geometria": "Bifurcaciones (Árbol de Decisiones)",
    "proposito": "Preparar al oyente para una resolución en la tónica, pero desviar la armonía hacia acordes inesperados para extender la frase.",
    "nodos_principales": [
      "Dm7",
      "G7",
      "Am",
      "Abmaj7",
      "F#m7b5",
      "C"
    ],
    "conexiones_flechas": [
      {
        "origen": "Dm7",
        "destino": "G7",
        "tipo": "Preparación de tensión (ii-V)"
      },
      {
        "origen": "G7",
        "destino": "Am",
        "tipo": "Resolución rota clásica (al vi)"
      },
      {
        "origen": "G7",
        "destino": "Abmaj7",
        "tipo": "Resolución rota modal (al bVI)"
      },
      {
        "origen": "G7",
        "destino": "C",
        "tipo": "Resolución auténtica postergada"
      }
    ],
    "esquema_colores": {
      "acordes_preparacion": "#F39C12",
      "resolucion_esperada": "#27AE60",
      "resoluciones_falsas": "#D35400"
    },
    "sensacion_emocional": "Sorpresa, revelación, continuación narrativa, épica pop."
  },
  {
    "key": "armonia-10",
    "coleccion": "armonia",
    "id": 10,
    "nombre": "Sistema del Eje (Teoría de Bartók)",
    "geometria": "Círculo Dividido en Ejes Ortogonales (Cruz)",
    "proposito": "Agrupar los 12 tonos en tres ejes funcionales (Tónica, Subdominante, Dominante) separados por terceras menores, permitiendo intercambiar acordes dentro del mismo eje.",
    "nodos_principales": [
      "Eje Tónica (C, A, F#, Eb)",
      "Eje Dominante (G, E, Db, Bb)",
      "Eje Subdominante (F, D, B, Ab)"
    ],
    "conexiones_flechas": [
      {
        "origen": "C",
        "destino": "F#",
        "tipo": "Sustitución en el Eje de Tónica (Contrapolo)"
      },
      {
        "origen": "F#",
        "destino": "G",
        "tipo": "Paso de Tónica a Dominante"
      },
      {
        "origen": "E",
        "destino": "C",
        "tipo": "Resolución de Eje Dominante a Tónica"
      }
    ],
    "esquema_colores": {
      "eje_tonica": "#34495E",
      "eje_dominante": "#E74C3C",
      "eje_subdominante": "#2ECC71"
    },
    "sensacion_emocional": "Tensión geométrica, disonancia estructurada, música contemporánea/cine thriller."
  },
  {
    "key": "armonia-11",
    "coleccion": "armonia",
    "id": 11,
    "nombre": "Acordes de Sexta Aumentada y Napolitana",
    "geometria": "Embudo Convergente",
    "proposito": "Crear una tensión cromática extrema que converge desde arriba y desde abajo hacia el acorde dominante.",
    "nodos_principales": [
      "Fm",
      "Db (Sexta Napolitana)",
      "Ab7#11 (Sexta Francesa)",
      "G (Dominante)",
      "Cm (Tónica)"
    ],
    "conexiones_flechas": [
      {
        "origen": "Fm",
        "destino": "Db",
        "tipo": "Preparación Subdominante alterada"
      },
      {
        "origen": "Db",
        "destino": "G",
        "tipo": "Aproximación cromática descendente a la dominante"
      },
      {
        "origen": "Ab7#11",
        "destino": "G",
        "tipo": "Resolución de sexta aumentada a octava"
      },
      {
        "origen": "G",
        "destino": "Cm",
        "tipo": "Resolución trágica final"
      }
    ],
    "esquema_colores": {
      "sextas_alteradas": "#8E44AD",
      "dominante_objetivo": "#F1C40F",
      "tonica_menor": "#2C3E50"
    },
    "sensacion_emocional": "Dramatismo operístico, tragedia clásica, fatalidad inminente."
  },
  {
    "key": "armonia-12",
    "coleccion": "armonia",
    "id": 12,
    "nombre": "Red de Armonía Paralela (Planing)",
    "geometria": "Líneas Diagonales Sincronizadas",
    "proposito": "Mover la misma estructura de acorde (ej. Maj7 o m9) exacta arriba o abajo por el mástil/teclado sin respetar la escala diatónica.",
    "nodos_principales": [
      "Cmaj7",
      "Dbmaj7",
      "Ebmaj7",
      "Fmaj7"
    ],
    "conexiones_flechas": [
      {
        "origen": "Cmaj7",
        "destino": "Dbmaj7",
        "tipo": "Deslizamiento cromático paralelo (Planing)"
      },
      {
        "origen": "Dbmaj7",
        "destino": "Ebmaj7",
        "tipo": "Ascenso de tono entero paralelo"
      }
    ],
    "esquema_colores": {
      "bloques_acordes": "#A3E4D7",
      "movimiento_paralelo": "#1ABC9C"
    },
    "sensacion_emocional": "Flotabilidad, sueño lúcido, impresionismo (estilo Debussy), misterio etéreo."
  },
  {
    "key": "armonia-13",
    "coleccion": "armonia",
    "id": 13,
    "nombre": "Ciclo de Cadencia Andaluza",
    "geometria": "Cascada Descendente de 4 Pasos",
    "proposito": "Una progresión menor que desciende por grados conjuntos creando un ciclo continuo de tensión que nunca resuelve completamente en paz.",
    "nodos_principales": [
      "Am",
      "G",
      "F",
      "E"
    ],
    "conexiones_flechas": [
      {
        "origen": "Am",
        "destino": "G",
        "tipo": "Descenso diatónico"
      },
      {
        "origen": "G",
        "destino": "F",
        "tipo": "Descenso diatónico"
      },
      {
        "origen": "F",
        "destino": "E",
        "tipo": "Descenso al dominante (tensión máxima)"
      },
      {
        "origen": "E",
        "destino": "Am",
        "tipo": "Reinicio del ciclo flamenco"
      }
    ],
    "esquema_colores": {
      "acorde_origen": "#78281F",
      "acordes_paso": "#B03A2E",
      "dominante_frigia": "#E74C3C"
    },
    "sensacion_emocional": "Pasión terrenal, furia controlada, desierto, folclore español y rock neoclásico."
  },
  {
    "key": "armonia-14",
    "coleccion": "armonia",
    "id": 14,
    "nombre": "Malla de la Escala de Tonos Enteros",
    "geometria": "Hexágono Flotante",
    "proposito": "Utilizar acordes aumentados derivados de la escala de tonos enteros, eliminando cualquier sensación de tónica o semitono directriz.",
    "nodos_principales": [
      "Caug",
      "Daug",
      "Eaug",
      "F#aug",
      "G#aug",
      "Bbaug"
    ],
    "conexiones_flechas": [
      {
        "origen": "Caug",
        "destino": "Daug",
        "tipo": "Paso de tono entero sin dirección funcional"
      },
      {
        "origen": "Eaug",
        "destino": "Bbaug",
        "tipo": "Intercambio de equivalentes simétricos"
      }
    ],
    "esquema_colores": {
      "nodos_aumentados": "#F4D03F",
      "conexiones_difusas": "#FDEBD0"
    },
    "sensacion_emocional": "Desorientación total, magia, ambiente alienígena, transición a un sueño o flashback."
  },
  {
    "key": "armonia-15",
    "coleccion": "armonia",
    "id": 15,
    "nombre": "Diagrama de Acordes de Paso Cromáticos (Bebop)",
    "geometria": "Camino en Zig-Zag",
    "proposito": "Insertar acordes disminuidos o séptimas dominantes entre los acordes diatónicos principales para crear líneas de bajo continuas (Walking Bass).",
    "nodos_principales": [
      "I (Cmaj7)",
      "I#dim7 (C#dim7)",
      "ii (Dm7)",
      "bIIIo (Ebdim7)",
      "iii (Em7)"
    ],
    "conexiones_flechas": [
      {
        "origen": "Cmaj7",
        "destino": "C#dim7",
        "tipo": "Tensión cromática ascendente"
      },
      {
        "origen": "C#dim7",
        "destino": "Dm7",
        "tipo": "Resolución suave al segundo grado"
      },
      {
        "origen": "Dm7",
        "destino": "Ebdim7",
        "tipo": "Tensión cromática ascendente"
      },
      {
        "origen": "Ebdim7",
        "destino": "Em7",
        "tipo": "Resolución suave al tercer grado"
      }
    ],
    "esquema_colores": {
      "acordes_diatonicos": "#5DADE2",
      "acordes_paso_dim": "#C39BD3"
    },
    "sensacion_emocional": "Movimiento constante, sofisticación urbana, swing fluido."
  },
  {
    "key": "armonia-16",
    "coleccion": "armonia",
    "id": 16,
    "nombre": "Vamp Armónico de Ostinato (Pedal Point)",
    "geometria": "Bucle Circular Fijo sobre un Ancla",
    "proposito": "Mantener una nota constante en el bajo (Nota Pedal) mientras los acordes cambian en las voces superiores para generar una tensión acumulativa.",
    "nodos_principales": [
      "C/G",
      "D/G",
      "Eb/G",
      "F/G"
    ],
    "conexiones_flechas": [
      {
        "origen": "C/G",
        "destino": "D/G",
        "tipo": "Expansión armónica sobre pedal"
      },
      {
        "origen": "D/G",
        "destino": "Eb/G",
        "tipo": "Incursión modal sobre pedal"
      },
      {
        "origen": "Eb/G",
        "destino": "F/G",
        "tipo": "Clímax de tensión modal"
      },
      {
        "origen": "F/G",
        "destino": "C/G",
        "tipo": "Liberación parcial"
      }
    ],
    "esquema_colores": {
      "nota_pedal_ancla": "#17202A",
      "estructuras_superiores": "#F1C40F"
    },
    "sensacion_emocional": "Hipnosis, anticipación monstruosa, trance, crescendo épico de cine."
  },
  {
    "key": "armonia-17",
    "coleccion": "armonia",
    "id": 17,
    "nombre": "Cadencia Plagal Expandida (Gospel y Soul)",
    "geometria": "Arco Flotante de Retorno",
    "proposito": "Extender la llegada a la tónica mediante el uso de la subdominante menor y sus variaciones de color sin pasar por la dominante clásica.",
    "nodos_principales": [
      "C",
      "F",
      "Fm",
      "Fm6",
      "Dbmaj7"
    ],
    "conexiones_flechas": [
      {
        "origen": "C",
        "destino": "F",
        "tipo": "Apertura a la Subdominante"
      },
      {
        "origen": "F",
        "destino": "Fm",
        "tipo": "Intercambio modal cromático (Subdominante menor)"
      },
      {
        "origen": "Fm",
        "destino": "Fm6",
        "tipo": "Adición de tensión de 6ta"
      },
      {
        "origen": "Fm6",
        "destino": "C",
        "tipo": "Resolución suave 'Amen'"
      }
    ],
    "esquema_colores": {
      "tonica": "#00FFC8",
      "subdominante_mayor": "#3498DB",
      "subdominante_menor": "#9B59B6"
    },
    "sensacion_emocional": "Redención, calidez espiritual, nostalgia confortante."
  },
  {
    "key": "armonia-18",
    "coleccion": "armonia",
    "id": 18,
    "nombre": "Círculo de Cromaticismo Contrapuntístico (Line Cliché)",
    "geometria": "Espiral Descendente Interna",
    "proposito": "Mantener la tónica o acorde base fijo mientras una sola voz interior o de bajo desciende semitono a semitono.",
    "nodos_principales": [
      "Am",
      "Am(maj7)",
      "Am7",
      "Am6",
      "Fmaj7"
    ],
    "conexiones_flechas": [
      {
        "origen": "Am",
        "destino": "Am(maj7)",
        "tipo": "Descenso cromático de la voz superior (Sol#)"
      },
      {
        "origen": "Am(maj7)",
        "destino": "Am7",
        "tipo": "Descenso a la 7ma menor (Sol)"
      },
      {
        "origen": "Am7",
        "destino": "Am6",
        "tipo": "Descenso a la 6ta mayor (Fa#)"
      },
      {
        "origen": "Am6",
        "destino": "Fmaj7",
        "tipo": "Resolución a la subdominante"
      }
    ],
    "esquema_colores": {
      "acorde_base": "#2980B9",
      "pasos_cromaticos": "#E74C3C"
    },
    "sensacion_emocional": "Misterio detectivesco, melancolía elegante, tensión de espionaje/noir."
  },
  {
    "key": "armonia-19",
    "coleccion": "armonia",
    "id": 19,
    "nombre": "Red de Cadencia Royal / J-Pop (IV - V - iii - vi)",
    "geometria": "Bucle en Zigma (Z-Loop)",
    "proposito": "Crear una sensación de movimiento melódico continuo e ininterrumpido muy popular en la música anime y pop moderno.",
    "nodos_principales": [
      "Fmaj7",
      "G7",
      "Em7",
      "Am7",
      "Dm7",
      "C"
    ],
    "conexiones_flechas": [
      {
        "origen": "Fmaj7",
        "destino": "G7",
        "tipo": "Ascenso Subdominante a Dominante"
      },
      {
        "origen": "G7",
        "destino": "Em7",
        "tipo": "Resolución engañosa al relativo menor del V"
      },
      {
        "origen": "Em7",
        "destino": "Am7",
        "tipo": "Caída por 4tas (ii-V local)"
      },
      {
        "origen": "Am7",
        "destino": "Fmaj7",
        "tipo": "Reinicio del bucle sin tocar la tónica C"
      }
    ],
    "esquema_colores": {
      "apertura_emocional": "#FF7675",
      "tension_paso": "#FDCB6E",
      "descanso_relativo": "#6C5CE7"
    },
    "sensacion_emocional": "Nostalgia heroica, euforia, marcha juvenil, dinamismo constante."
  },
  {
    "key": "armonia-20",
    "coleccion": "armonia",
    "id": 20,
    "nombre": "Matriz de Acordes Suspendidos (Sus2 / Sus4)",
    "geometria": "Red de Nodos Flotantes Sin Centro",
    "proposito": "Eliminar la tercera del acorde para crear armonías ambiguas que no son ni mayores ni menores, ideales para texturas ambientales.",
    "nodos_principales": [
      "Csus4",
      "Csus2",
      "Gsus4",
      "Dsus2",
      "Fsus2"
    ],
    "conexiones_flechas": [
      {
        "origen": "Csus4",
        "destino": "Csus2",
        "tipo": "Oscilación de tensión sin resolución"
      },
      {
        "origen": "Csus2",
        "destino": "Gsus4",
        "tipo": "Salto por 5tas en acordes abiertos"
      },
      {
        "origen": "Gsus4",
        "destino": "Dsus2",
        "tipo": "Modulación fluida ambiental"
      }
    ],
    "esquema_colores": {
      "nodos_suspendidos": "#00CEC9",
      "lineas_de_flujo": "#81ECEC"
    },
    "sensacion_emocional": "Eteriedad, aire, calma meditativa, ingravidez."
  },
  {
    "key": "armonia-21",
    "coleccion": "armonia",
    "id": 21,
    "nombre": "Progresión Épica Pop/Rock de 4 Acordes",
    "geometria": "Cuadrilátero Rotativo Continuo",
    "proposito": "Estructurar las progresiones más utilizadas en la música comercial (I - V - vi - IV y vi - IV - I - V).",
    "nodos_principales": [
      "C",
      "G",
      "Am",
      "F"
    ],
    "conexiones_flechas": [
      {
        "origen": "C",
        "destino": "G",
        "tipo": "Movimiento a la Dominante"
      },
      {
        "origen": "G",
        "destino": "Am",
        "tipo": "Resolución engañosa al relativo menor"
      },
      {
        "origen": "Am",
        "destino": "F",
        "tipo": "Paso a la Subdominante"
      },
      {
        "origen": "F",
        "destino": "C",
        "tipo": "Resolución plagal a la Tónica"
      }
    ],
    "esquema_colores": {
      "tonica": "#00FFC8",
      "dominante": "#F1C40F",
      "relativo_menor": "#E74C3C",
      "subdominante": "#3498DB"
    },
    "sensacion_emocional": "Trunfo, familiaridad, motivación, emotividad universal."
  },
  {
    "key": "armonia-22",
    "coleccion": "armonia",
    "id": 22,
    "nombre": "Mapa de Modulación por Acorde Pivote",
    "geometria": "Puente Interdimensional entre dos Círculos",
    "proposito": "Conectar dos tonalidades distantes utilizando un acorde que sea común a ambas escalas.",
    "nodos_principales": [
      "Tonalidad A (C, Am, Dm)",
      "Acorde Pivote (Am)",
      "Tonalidad B (G, Em, Bm)"
    ],
    "conexiones_flechas": [
      {
        "origen": "C",
        "destino": "Am",
        "tipo": "Uso del vi grado en Tonalidad A"
      },
      {
        "origen": "Am",
        "destino": "D7",
        "tipo": "Reinterpretación del Am como ii grado en la nueva Tonalidad (G)"
      },
      {
        "origen": "D7",
        "destino": "G",
        "tipo": "Resolución V-I en la nueva Tonalidad B"
      }
    ],
    "esquema_colores": {
      "tonalidad_origen": "#34495E",
      "acorde_pivote": "#F39C12",
      "tonalidad_destino": "#2ECC71"
    },
    "sensacion_emocional": "Transición orgánica, cambio de paisaje, evolución de la historia."
  },
  {
    "key": "armonia-23",
    "coleccion": "armonia",
    "id": 23,
    "nombre": "Malla de Extensiones R&B / Neo-Soul (9nas, 11nas y 13nas)",
    "geometria": "Matriz Poligonada de Capas Superpuestas",
    "proposito": "Enriquecer las progresiones simples agregando capas superiores de notas para un sonido sofisticado y sedoso.",
    "nodos_principales": [
      "Cmaj9",
      "Am11",
      "Dm9",
      "G13(b9)"
    ],
    "conexiones_flechas": [
      {
        "origen": "Cmaj9",
        "destino": "Am11",
        "tipo": "Paso fluido de tónica extendida a relativo menor"
      },
      {
        "origen": "Am11",
        "destino": "Dm9",
        "tipo": "Movimiento ii-V extendido"
      },
      {
        "origen": "Dm9",
        "destino": "G13(b9)",
        "tipo": "Tensión máxima con alteración"
      },
      {
        "origen": "G13(b9)",
        "destino": "Cmaj9",
        "tipo": "Resolución suave y colorida"
      }
    ],
    "esquema_colores": {
      "base_triada": "#2C3E50",
      "septimas": "#2980B9",
      "extensiones_altas": "#E67E22"
    },
    "sensacion_emocional": "Cálida, urbana, sensual, relajante, de producción moderna."
  },
  {
    "key": "armonia-24",
    "coleccion": "armonia",
    "id": 24,
    "nombre": "Círculo de Inversiones y Líneas de Bajo Cantables",
    "geometria": "Onda Sinusoidal sobre un Eje Central",
    "proposito": "Conectar acordes no por sus raíces, sino creando una melodía continua en las notas graves usando notas pisadas por la tercera o quinta.",
    "nodos_principales": [
      "C",
      "G/B",
      "Am",
      "C/G",
      "F",
      "C/E",
      "Dm",
      "G"
    ],
    "conexiones_flechas": [
      {
        "origen": "C",
        "destino": "G/B",
        "tipo": "Bajo desciende a Si"
      },
      {
        "origen": "G/B",
        "destino": "Am",
        "tipo": "Bajo desciende a La"
      },
      {
        "origen": "Am",
        "destino": "C/G",
        "tipo": "Bajo desciende a Sol"
      },
      {
        "origen": "C/G",
        "destino": "F",
        "tipo": "Bajo desciende a Fa"
      }
    ],
    "esquema_colores": {
      "acordes_raiz": "#8E44AD",
      "inversiones_bajo": "#1ABC9C"
    },
    "sensacion_emocional": "Fluidez barroca, elegancia, continuidad orgánica, profundidad."
  },
  {
    "key": "armonia-25",
    "coleccion": "armonia",
    "id": 25,
    "nombre": "Red Politonales / Superposición de Triadas (Upper Structures)",
    "geometria": "Pirámides Dobles Superpuestas",
    "proposito": "Tocar una triada mayor sobre un acorde dominante diferente para generar disonancias jazzísticas complejas.",
    "nodos_principales": [
      "C7",
      "D/C7",
      "F#/C7",
      "Eb/C7"
    ],
    "conexiones_flechas": [
      {
        "origen": "C7",
        "destino": "D/C7",
        "tipo": "Añade 9ma, #11 y 13ma (Sonido Lidio Dominante)"
      },
      {
        "origen": "C7",
        "destino": "F#/C7",
        "tipo": "Añade tritono y tensiones alteradas (b9, #11)"
      },
      {
        "origen": "C7",
        "destino": "Eb/C7",
        "tipo": "Añade #9, b13 (Sonido alterado puro)"
      }
    ],
    "esquema_colores": {
      "bajo_base": "#34495E",
      "triada_superior": "#E74C3C"
    },
    "sensacion_emocional": "Complejidad cerebral, vanguardia, tensión eléctrica, virtuosismo."
  },
  {
    "key": "armonia-26",
    "coleccion": "armonia",
    "id": 26,
    "nombre": "Matriz de Pentatónicas Armonizadas (Sintetizadores y EDM)",
    "geometria": "Red Pentagonal Conectada",
    "proposito": "Construir acordes únicamente utilizando las notas de la escala pentatónica mayor o menor para evitar choques armónicos.",
    "nodos_principales": [
      "Cadd9",
      "F9(no3)",
      "Am7",
      "Gsus4"
    ],
    "conexiones_flechas": [
      {
        "origen": "Cadd9",
        "destino": "Am7",
        "tipo": "Intercambio dentro del bloque pentatónico"
      },
      {
        "origen": "Am7",
        "destino": "F9(no3)",
        "tipo": "Desplazamiento modal limpio"
      },
      {
        "origen": "F9(no3)",
        "destino": "Gsus4",
        "tipo": "Ascenso de fuerza sin disonancia"
      }
    ],
    "esquema_colores": {
      "nodos_pentatonicos": "#FF007F",
      "enlaces_puros": "#00F0FF"
    },
    "sensacion_emocional": "Brillo futurista, energía electrónica, euforia limpia."
  },
  {
    "key": "armonia-27",
    "coleccion": "armonia",
    "id": 27,
    "nombre": "Mapa de la Armonía Negativa (Simetría Invertida)",
    "geometria": "Espejo Bi-Planar Horizontal",
    "proposito": "Invertir la polaridad de las relaciones armónicas sobre un eje fijo (Eje Do-Sol) para convertir progresiones mayores en versiones menores oscuras espejo.",
    "nodos_principales": [
      "C (Original)",
      "Fm (Espejo Negativo)",
      "G7 (Original)",
      "Ebm6 (Espejo Negativo)"
    ],
    "conexiones_flechas": [
      {
        "origen": "Dm7 -> G7 -> C",
        "destino": "Fm6 -> Ebm6 -> Ab",
        "tipo": "Conversión por espejo cromático"
      }
    ],
    "esquema_colores": {
      "armonia_positiva": "#F39C12",
      "armonia_negativa": "#8E44AD",
      "eje_simetria": "#ECF0F1"
    },
    "sensacion_emocional": "Mundo del revés, extrañeza familiar, sombra psicológica."
  },
  {
    "key": "armonia-28",
    "coleccion": "armonia",
    "id": 28,
    "nombre": "Diagrama de Acordes de Bloque / Slap (Funk y Disco)",
    "geometria": "Bloques Rectangulares de Impacto",
    "proposito": "Mover pequeños bloques de acordes de 3 o 4 notas en rítmicas sincopadas con pausas secas.",
    "nodos_principales": [
      "E9",
      "A13",
      "B7(#9)",
      "D9"
    ],
    "conexiones_flechas": [
      {
        "origen": "E9",
        "destino": "A13",
        "tipo": "Salto I9 - IV13 clásico"
      },
      {
        "origen": "A13",
        "destino": "B7(#9)",
        "tipo": "Subida al acorde 'Jimi Hendrix' para tensión"
      }
    ],
    "esquema_colores": {
      "acordes_dominantes_funk": "#2ECC71",
      "acordes_alterados_acento": "#E74C3C"
    },
    "sensacion_emocional": "Groove, baile, actitud, ritmo bailable irresistible."
  },
  {
    "key": "armonia-29",
    "coleccion": "armonia",
    "id": 29,
    "nombre": "Mapa de Clústers y Sonoridades Microtonales (Cine de Terror / Thriller)",
    "geometria": "Nube de Puntos Densos",
    "proposito": "Agrupar notas a distancia de semitono o microtono para crear muros de sonido llenos de disonancia disonante.",
    "nodos_principales": [
      "C-C#-D",
      "F-F#-G",
      "B-C-C#"
    ],
    "conexiones_flechas": [
      {
        "origen": "C-C#-D",
        "destino": "F-F#-G",
        "tipo": "Transposición de la nube sonora"
      },
      {
        "origen": "F-F#-G",
        "destino": "B-C-C#",
        "tipo": "Expansión del clúster a rango agudo"
      }
    ],
    "esquema_colores": {
      "cluster_denso": "#4A0E17",
      "extension_aguda": "#900C3F"
    },
    "sensacion_emocional": "Claustrofobia, pánico, locura, peligro inminente."
  },
  {
    "key": "armonia-30",
    "coleccion": "armonia",
    "id": 30,
    "nombre": "Sistema de Voces Abiertas (Drop 2 y Drop 3 para Cuerdas)",
    "geometria": "Diagrama de Expansión Vertical",
    "proposito": "Separar las notas de un acorde dejando espacio en el centro para que suene más amplio y claro en arreglos orquestales.",
    "nodos_principales": [
      "Cmaj7 (Cerrado: C-E-G-B)",
      "Cmaj7 (Drop 2: G-C-E-B)",
      "Cmaj7 (Drop 3: B-C-E-G)"
    ],
    "conexiones_flechas": [
      {
        "origen": "Cmaj7 Cerrado",
        "destino": "Cmaj7 Drop 2",
        "tipo": "Bajar la segunda voz más alta una octava"
      },
      {
        "origen": "Cmaj7 Drop 2",
        "destino": "Cmaj7 Drop 3",
        "tipo": "Bajar la tercera voz más alta una octava"
      }
    ],
    "esquema_colores": {
      "voces_agudas": "#F1C40F",
      "voces_medias": "#E67E22",
      "voces_graves": "#34495E"
    },
    "sensacion_emocional": "Majestuosidad, claridad sinfónica, amplitud de sala de concierto."
  },
  {
    "key": "armonia-31",
    "coleccion": "armonia",
    "id": 31,
    "nombre": "Red de Intercambio Modal Paralelo Completo (Los 7 Modos en Do)",
    "geometria": "Estrella Octagonal Múltiple de 7 Capas",
    "proposito": "Tener acceso directo a los acordes principales de los 7 modos griegos partiendo de la misma nota tónica (Do Jónico, Do Dórico, Do Frigio, etc.).",
    "nodos_principales": [
      "C (Jónico)",
      "Cm7 (Dórico)",
      "Cm (Frigio)",
      "Cmaj7(#11) (Lidio)",
      "C7 (Mixolidio)",
      "Cm (Eólico)",
      "Cdim (Lócrio)"
    ],
    "conexiones_flechas": [
      {
        "origen": "C (Jónico)",
        "destino": "Cmaj7(#11) (Lidio)",
        "tipo": "Paso hacia la luz/brillo máximo"
      },
      {
        "origen": "C (Jónico)",
        "destino": "Cm7 (Dórico)",
        "tipo": "Paso hacia el tono menor melancólico/cool"
      },
      {
        "origen": "Cm7 (Dórico)",
        "destino": "Cm (Frigio)",
        "tipo": "Paso hacia la oscuridad hispana/étnica"
      },
      {
        "origen": "Cm (Frigio)",
        "destino": "Cdim (Lócrio)",
        "tipo": "Paso hacia la inestabilidad total"
      }
    ],
    "esquema_colores": {
      "lidio_maximo_brillo": "#FFF9C4",
      "jonico_luz": "#FFF59D",
      "mixolidio_calido": "#FFE082",
      "dorico_sofisticado": "#81D4FA",
      "eolico_sombra": "#9FA8DA",
      "frigio_oscuridad": "#B39DDB",
      "locrio_abismo": "#4A148C"
    },
    "sensacion_emocional": "Espectro completo del color armónico humano, desde la luz divina hasta la oscuridad absoluta."
  },
  {
    "key": "armonia-32",
    "coleccion": "armonia",
    "id": 32,
    "nombre": "Malla de Mediantes Cromáticas (Cine Épico y Fantasía)",
    "geometria": "Hexágono de Saltos de Tercera",
    "proposito": "Conectar acordes del mismo tipo (mayores o menores) separados por una tercera mayor o menor que no pertenecen a la misma tonalidad, creando giros cinemáticos drásticos.",
    "nodos_principales": [
      "C",
      "E",
      "Ab",
      "Eb",
      "A",
      "C#m"
    ],
    "conexiones_flechas": [
      {
        "origen": "C",
        "destino": "E",
        "tipo": "Salto de Mediante Cromática Superior (Tercera Mayor)"
      },
      {
        "origen": "C",
        "destino": "Ab",
        "tipo": "Salto de Mediante Cromática Inferior (Tercera Mayor)"
      },
      {
        "origen": "C",
        "destino": "Eb",
        "tipo": "Mediante Cromática de Tercera Menor"
      }
    ],
    "esquema_colores": {
      "acorde_base": "#2C3E50",
      "mediantes_brillantes": "#E67E22",
      "mediantes_oscuras": "#8E44AD"
    },
    "sensacion_emocional": "Asombro, revelación heroica, magia, escala monumental (estilo Hans Zimmer)."
  },
  {
    "key": "armonia-33",
    "coleccion": "armonia",
    "id": 33,
    "nombre": "Red Neo-Riemanniana (Diagrama Tonnetz)",
    "geometria": "Red Triangular Infiniti-Malla",
    "proposito": "Conectar acordes cambiando solo una nota por paso mediante transformaciones P (Paralelo), L (Leitnodo/Tercera) y R (Relativo), sin necesidad de dominantes.",
    "nodos_principales": [
      "C",
      "Cm",
      "Em",
      "E",
      "Am",
      "Ab"
    ],
    "conexiones_flechas": [
      {
        "origen": "C",
        "destino": "Cm",
        "tipo": "Transformación P (Paralelo: Do-Mi-Sol a Do-Mib-Sol)"
      },
      {
        "origen": "C",
        "destino": "Em",
        "tipo": "Transformación L (Leadin-Tone: Do-Mi-Sol a Si-Mi-Sol)"
      },
      {
        "origen": "C",
        "destino": "Am",
        "tipo": "Transformación R (Relativo: Do-Mi-Sol a Do-Mi-La)"
      }
    ],
    "esquema_colores": {
      "nodos_mayores": "#2ECC71",
      "nodos_menores": "#E74C3C",
      "malla_relaciones": "#BDC3C7"
    },
    "sensacion_emocional": "Fluidez geométrica, gravedad cero, belleza matemática, cine de ciencia ficción."
  },
  {
    "key": "armonia-34",
    "coleccion": "armonia",
    "id": 34,
    "nombre": "Cadencia Backdoor / Puerta Trasera (Bb7 -> C)",
    "geometria": "Ruta en Diagonal Inversa",
    "proposito": "Resolver a la tónica mayor utilizando el subV7 prestado del modo menor (bVII7) en lugar de la dominante clásica (V7).",
    "nodos_principales": [
      "Fm7",
      "Bb7",
      "Cmaj7",
      "Am7"
    ],
    "conexiones_flechas": [
      {
        "origen": "Fm7",
        "destino": "Bb7",
        "tipo": "ii-V prestado de la tónica menor"
      },
      {
        "origen": "Bb7",
        "destino": "Cmaj7",
        "tipo": "Resolución Backdoor (paso de un tono entero abajo a la tónica)"
      }
    ],
    "esquema_colores": {
      "preparacion_menor": "#34495E",
      "dominante_backdoor": "#D35400",
      "tonica_llegada": "#00FFC8"
    },
    "sensacion_emocional": "Triunfo suave, resolución inesperada pero reconfortante, pop ochentero y soul."
  },
  {
    "key": "armonia-35",
    "coleccion": "armonia",
    "id": 35,
    "nombre": "Círculo de las Tres Sombras Menores (Natural, Armónica y Melódica)",
    "geometria": "Espiral Triple Concéntrica",
    "proposito": "Alternar entre las variaciones de la escala menor para obtener tensión melódica (Armónica) o fluidez de jazz (Melódica) en una sola pieza.",
    "nodos_principales": [
      "Am (Natural)",
      "E7 (Armónica)",
      "F#m7b5 (Melódica)",
      "B7"
    ],
    "conexiones_flechas": [
      {
        "origen": "Am",
        "destino": "E7",
        "tipo": "Uso de la sensible (Sol#) de la Menor Armónica"
      },
      {
        "origen": "E7",
        "destino": "F#m7b5",
        "tipo": "Acceso a acordes de la Menor Melódica"
      },
      {
        "origen": "F#m7b5",
        "destino": "Am",
        "tipo": "Retorno a la tónica menor"
      }
    ],
    "esquema_colores": {
      "menor_natural": "#2980B9",
      "menor_armonica": "#C0392B",
      "menor_melodica": "#16A085"
    },
    "sensacion_emocional": "Misterio clásico, tensión dramática, virtuosismo técnico."
  },
  {
    "key": "armonia-36",
    "coleccion": "armonia",
    "id": 36,
    "nombre": "Red de Acordes Híbridos y Slash Chords (Pop Balada / Elton John)",
    "geometria": "Pasarela de Escalones Paralelos",
    "proposito": "Mantener una nota fija o un bajo caminando mientras la triada superior cambia, generando acordes de tipo F/G, Eb/F o G/C.",
    "nodos_principales": [
      "F/G",
      "G/C",
      "Bb/C",
      "C"
    ],
    "conexiones_flechas": [
      {
        "origen": "F/G",
        "destino": "C",
        "tipo": "Resolución de dominante suspendida suave"
      },
      {
        "origen": "Bb/C",
        "destino": "F/C",
        "tipo": "Paso de pedal de tónica en el bajo"
      },
      {
        "origen": "F/C",
        "destino": "C",
        "tipo": "Resolución de tónica"
      }
    ],
    "esquema_colores": {
      "triada_superior": "#F39C12",
      "bajo_independiente": "#2980B9"
    },
    "sensacion_emocional": "Sofisticación pop, emotividad de piano, calidez, nostalgia televisiva."
  },
  {
    "key": "armonia-37",
    "coleccion": "armonia",
    "id": 37,
    "nombre": "Mapa del Acorde Mu / 'Mu Major' (Estilo Steely Dan / Jazz Rock)",
    "geometria": "Triángulo con Núcleo Incrustado",
    "proposito": "Añadir la segunda nota (add2/add9) inmediatamente al lado de la tercera mayor dentro del acorde para crear una disonancia sutil pero brillante.",
    "nodos_principales": [
      "C(add2)",
      "F(add2)",
      "G(add2)",
      "Am7"
    ],
    "conexiones_flechas": [
      {
        "origen": "C(add2)",
        "destino": "F(add2)",
        "tipo": "Movimiento I-IV con fricción cromática interna"
      },
      {
        "origen": "F(add2)",
        "destino": "G(add2)",
        "tipo": "Ascenso de paso modal en bloque"
      }
    ],
    "esquema_colores": {
      "acorde_mu": "#F1C40F",
      "friccion_segunda": "#E74C3C"
    },
    "sensacion_emocional": "Ironía, elegancia compleja, pulidez de estudio, jazz-rock setentero."
  },
  {
    "key": "armonia-38",
    "coleccion": "armonia",
    "id": 38,
    "nombre": "Circuito de la Subdominante Mayor en Modo Menor (Efecto Dórico)",
    "geometria": "Bucle en Bucle Oculto",
    "proposito": "Introducir el IV grado mayor (como D7 o D mayor) dentro de una canción en tonalidad menor (como Am), elevando el sexto grado de la escala.",
    "nodos_principales": [
      "Am",
      "D7",
      "F",
      "G"
    ],
    "conexiones_flechas": [
      {
        "origen": "Am",
        "destino": "D7",
        "tipo": "Paso del i menor al IV mayor (Sabor Dórico)"
      },
      {
        "origen": "D7",
        "destino": "F",
        "tipo": "Contraste volviendo a la subdominante menor/natural"
      },
      {
        "origen": "F",
        "destino": "G",
        "tipo": "Empuje hacia la tónica"
      }
    ],
    "esquema_colores": {
      "tonica_menor": "#34495E",
      "iv_dorico_brillante": "#F1C40F"
    },
    "sensacion_emocional": "Misterio psicodélico, vuelo espacial, rock británico (estilo Pink Floyd / Santana)."
  },
  {
    "key": "armonia-39",
    "coleccion": "armonia",
    "id": 39,
    "nombre": "Red de Dominantes Encadenadas (Circle of Dominants)",
    "geometria": "Círculo de Engranajes Consecutivos",
    "proposito": "Encadenar múltiples acordes de séptima dominante donde cada uno es el V7 del siguiente, viajando largas distancias antes de resolver.",
    "nodos_principales": [
      "E7",
      "A7",
      "D7",
      "G7",
      "C"
    ],
    "conexiones_flechas": [
      {
        "origen": "E7",
        "destino": "A7",
        "tipo": "Resolución V7/V7"
      },
      {
        "origen": "A7",
        "destino": "D7",
        "tipo": "Resolución V7/V7"
      },
      {
        "origen": "D7",
        "destino": "G7",
        "tipo": "Resolución V7/V7"
      },
      {
        "origen": "G7",
        "destino": "C",
        "tipo": "Resolución final a Tónica"
      }
    ],
    "esquema_colores": {
      "cadena_dominantes": "#E67E22",
      "meta_tonica": "#00FFC8"
    },
    "sensacion_emocional": "Aceleración, empuje implacable, ragtime, swing clásico, comedia."
  },
  {
    "key": "armonia-40",
    "coleccion": "armonia",
    "id": 40,
    "nombre": "Matriz Neoclásica 'La Folia de España'",
    "geometria": "Zig-Zag Barroco Simétrico",
    "proposito": "Estructura armónica renacentista y barroca basada en la alternancia constante entre la tónica menor y su relativa mayor a través de la dominante.",
    "nodos_principales": [
      "Dm",
      "A7",
      "Dm",
      "C",
      "F",
      "C",
      "Dm",
      "A7"
    ],
    "conexiones_flechas": [
      {
        "origen": "Dm",
        "destino": "A7",
        "tipo": "Tensión dominante menor"
      },
      {
        "origen": "A7",
        "destino": "Dm",
        "tipo": "Resolución"
      },
      {
        "origen": "Dm",
        "destino": "C",
        "tipo": "Paso al relativo mayor"
      },
      {
        "origen": "C",
        "destino": "F",
        "tipo": "Confirmación del relativo mayor"
      }
    ],
    "esquema_colores": {
      "eje_menor": "#78281F",
      "eje_mayor": "#D4AC0D"
    },
    "sensacion_emocional": "Dramatismo antiguo, danza aristocrática, tensión solemne, guitarra neoclásica."
  },
  {
    "key": "armonia-41",
    "coleccion": "armonia",
    "id": 41,
    "nombre": "Diagrama de Retardos e Inversiones (Resoluciones 4-3 y 9-8)",
    "geometria": "Casada de Módulos Caídos",
    "proposito": "Retrasar la nota armónica esperada manteniendo una nota del acorde anterior para que resuelva un paso más tarde.",
    "nodos_principales": [
      "Csus4",
      "C",
      "Gsus4",
      "G",
      "Fsus2",
      "F"
    ],
    "conexiones_flechas": [
      {
        "origen": "Csus4",
        "destino": "C",
        "tipo": "Resolución de la 4ta a la 3ra mayor"
      },
      {
        "origen": "Gsus4",
        "destino": "G",
        "tipo": "Resolución de la 4ta a la 3ra mayor"
      }
    ],
    "esquema_colores": {
      "retardo_tension": "#E74C3C",
      "resolucion": "#2ECC71"
    },
    "sensacion_emocional": "Alivio, devoción, música sacra, coral barroco, emotividad contenida."
  },
  {
    "key": "armonia-42",
    "coleccion": "armonia",
    "id": 42,
    "nombre": "Mapa de Armonización Pentatónica Exótica (Hirajoshi / Insen)",
    "geometria": "Estrella Asimétrica de 5 Puntas",
    "proposito": "Crear acordes a partir de escalas pentatónicas tradicionales japonesas o del medio oriente para evitar sonoridades occidentales estándar.",
    "nodos_principales": [
      "Am(no5)",
      "Bbsus2",
      "F#dim/A",
      "Dm(b5)"
    ],
    "conexiones_flechas": [
      {
        "origen": "Am(no5)",
        "destino": "Bbsus2",
        "tipo": "Salto de semitono dramático sin tercera"
      },
      {
        "origen": "Bbsus2",
        "destino": "F#dim/A",
        "tipo": "Tensión modal exótica"
      }
    ],
    "esquema_colores": {
      "nodos_exoticos": "#9B59B6",
      "puentes_modales": "#8E44AD"
    },
    "sensacion_emocional": "Misterio oriental, folclore lejano, naturaleza ancestral, meditación oscura."
  },
  {
    "key": "armonia-43",
    "coleccion": "armonia",
    "id": 43,
    "nombre": "Red de Armonización por Movimiento Contrario (Contrapunto de Bloques)",
    "geometria": "Líneas Cruzadas en X",
    "proposito": "Diseñar progresiones donde la melodía superior sube mientras el bajo desciende de forma estrictamente simétrica.",
    "nodos_principales": [
      "C (Bajo C)",
      "Dm/B (Bajo B)",
      "C/A (Bajo A)",
      "G/G (Bajo G)"
    ],
    "conexiones_flechas": [
      {
        "origen": "C",
        "destino": "Dm/B",
        "tipo": "Bajo bota Si / Melodía sube Re"
      },
      {
        "origen": "Dm/B",
        "destino": "C/A",
        "tipo": "Bajo bota La / Melodía sube Mi"
      }
    ],
    "esquema_colores": {
      "linea_melodica": "#F1C40F",
      "linea_bajo": "#2980B9"
    },
    "sensacion_emocional": "Equilibrio perfecto, conducción de voces clásica, solidez coral."
  },
  {
    "key": "armonia-44",
    "coleccion": "armonia",
    "id": 44,
    "nombre": "Circuito de Blues Menor Urbano (12 Compases Menores)",
    "geometria": "Matriz Rectangular de 12 Bloques",
    "proposito": "Estructurar la progresión de blues utilizando acordes menores con séptima y un turnaround con quinta aumentada o novena alterada.",
    "nodos_principales": [
      "Cm7",
      "Fm7",
      "Ab7",
      "G7alt"
    ],
    "conexiones_flechas": [
      {
        "origen": "Cm7",
        "destino": "Fm7",
        "tipo": "Tránsito al IVm7 (compás 5)"
      },
      {
        "origen": "Fm7",
        "destino": "Cm7",
        "tipo": "Retorno a tónica menor"
      },
      {
        "origen": "Cm7",
        "destino": "Ab7",
        "tipo": "Paso al bVI7 en el Turnaround"
      },
      {
        "origen": "Ab7",
        "destino": "G7alt",
        "tipo": "Dominante alterada de máxima tensión"
      }
    ],
    "esquema_colores": {
      "tonica_blues_menor": "#1B2631",
      "subdominante_menor": "#283747",
      "turnaround_alterado": "#C0392B"
    },
    "sensacion_emocional": "Melancolía urbana, lamento, lluvia, club nocturno de jazz."
  },
  {
    "key": "armonia-45",
    "coleccion": "armonia",
    "id": 45,
    "nombre": "Mapa de Acordes Aumentados como Nodos Wormhole (Caug / Eaug / Abaug)",
    "geometria": "Triángulo Simétrico de Portales",
    "proposito": "Usar la simetría del acorde aumentado (división de la octava en 3 partes iguales) para saltar instantáneamente a tonalidades completamente desconectadas.",
    "nodos_principales": [
      "C",
      "Caug",
      "E",
      "Ab"
    ],
    "conexiones_flechas": [
      {
        "origen": "C",
        "destino": "Caug",
        "tipo": "Elevación de la 5ta (Sol a Sol#)"
      },
      {
        "origen": "Caug",
        "destino": "E",
        "tipo": "Reinterpretación de Sol# como 3ra de Mi Mayor"
      },
      {
        "origen": "Caug",
        "destino": "Ab",
        "tipo": "Reinterpretación de Do como 3ra de La bemol Mayor"
      }
    ],
    "esquema_colores": {
      "tonicas_origen": "#34495E",
      "nodo_aumentado_portal": "#F1C40F",
      "destinos_modulares": "#9B59B6"
    },
    "sensacion_emocional": "Teletransportación sonora, sorpresa, surrealismo, viaje en el tiempo."
  },
  {
    "key": "armonia-46",
    "coleccion": "armonia",
    "id": 46,
    "nombre": "Red de Bordones y Quintas Abiertas (Folk Nórdico / Post-Rock)",
    "geometria": "Ancla Central con Líneas Radiales Largas",
    "proposito": "Mantener acordes sin tercera (Power Chords / 5) sobre una nota grave retumbante para lograr sonoridades primitivas o épicas sin definir mayor/menor.",
    "nodos_principales": [
      "D5",
      "C5/D",
      "G5/D",
      "Bb5/D"
    ],
    "conexiones_flechas": [
      {
        "origen": "D5",
        "destino": "C5/D",
        "tipo": "Movimiento de bloque sobre pedal continuo en Re"
      },
      {
        "origen": "C5/D",
        "destino": "Bb5/D",
        "tipo": "Caída modal épica sobre el pedal"
      }
    ],
    "esquema_colores": {
      "pedal_ancla_grave": "#111111",
      "bloques_quintas": "#7F8C8D"
    },
    "sensacion_emocional": "Frío, paisaje vikingo, inmensidad, peso hipnótico, atmósfera post-rock."
  },
  {
    "key": "armonia-47",
    "coleccion": "armonia",
    "id": 47,
    "nombre": "Matriz de Sustitución Por Grados Colindantes (Neighboring Chords)",
    "geometria": "Órbita de Escudo Protector",
    "proposito": "Reemplazar un acorde principal por su vecino inmediato en la escala (ej. cambiar C por Dm/C o Em/C) para suavizar las transiciones.",
    "nodos_principales": [
      "C",
      "Dm/C",
      "Em/C",
      "F/C"
    ],
    "conexiones_flechas": [
      {
        "origen": "C",
        "destino": "Dm/C",
        "tipo": "Sustitución de paso por acorde vecino"
      },
      {
        "origen": "Dm/C",
        "destino": "Em/C",
        "tipo": "Desplazamiento ascendente en la misma tónica de bajo"
      }
    ],
    "esquema_colores": {
      "centro_tonal": "#00FFC8",
      "vecinos_colindantes": "#1ABC9C"
    },
    "sensacion_emocional": "Suavidad extrema, elegancia contemplativa, textura ambiental."
  },
  {
    "key": "country-1",
    "coleccion": "country",
    "id": 1,
    "nombre": "El Círculo 'Bakersfield Sound' (I - IV - V7 con Twang)",
    "geometria": "Triángulo de Ataque Agudo",
    "proposito": "Armonía básica del country moderno y clásico. Uso de acordes dominantes brillantes para dar el empuje directo y bailable.",
    "nodos_principales": [
      "A (Tónica)",
      "D (Subdominante)",
      "E7 (Dominante)"
    ],
    "tecnica_o_ejecucion": "Uso de cápsula del puente (Telecaster), ataque con púa de metal/plástico duro cerca del puente.",
    "esquema_colores": {
      "tonica": "#FFD700",
      "subdominante": "#FF8C00",
      "dominante_7": "#FF4500"
    },
    "sensacion_emocional": "Brillo, energía de Honky-Tonk, baile directo, ritmo caminante."
  },
  {
    "key": "country-2",
    "coleccion": "country",
    "id": 2,
    "nombre": "Lick de Pedal Steel Bend (Bends de Doble Cuerda / Double Stops)",
    "geometria": "Vectores Paralelos con Curva de Presión",
    "proposito": "Imitar el sonido del Pedal Steel Guitar estirando una cuerda mientras mantienes otra fija en su nota.",
    "nodos_principales": [
      "3ra de la cuerda B (estirada 1 tono)",
      "5ta de la cuerda E (fija)"
    ],
    "tecnica_o_ejecucion": "Dedo anular/medio estira la cuerda B hacia arriba mientras el meñique sostiene la cuerda E en un traste fijo.",
    "esquema_colores": {
      "nota_fija": "#00E5FF",
      "nota_bend": "#FF007F"
    },
    "sensacion_emocional": "Lamento vaquero, nostalgia, dulzura country, transición suave entre acordes."
  },
  {
    "key": "country-3",
    "coleccion": "country",
    "id": 3,
    "nombre": "Matriz de Mezcla Pentatónica (Pentatónica Mayor + Bluenote Menor)",
    "geometria": "Rejilla Intercalada de 5x6 Trastes",
    "proposito": "Combinar la Pentatónica Mayor (sonido dulce country) con la 3ra menor / b5 cromática para dar el sonido 'picante' del solo country.",
    "nodos_principales": [
      "1 - 2 - b3 (paso) - 3 - 5 - 6"
    ],
    "tecnica_o_ejecucion": "Martillados (hammer-ons) rápidos pasando de la 3ra menor a la 3ra mayor inmediatamente.",
    "esquema_colores": {
      "pentatonica_mayor": "#00FFC8",
      "notas_blue_paso": "#E74C3C"
    },
    "sensacion_emocional": "Sabor campero, picardía, fluidez, virtuosidad ágil."
  },
  {
    "key": "country-4",
    "coleccion": "country",
    "id": 4,
    "nombre": "Malla Chicken Pickin' (Rítmica y Solos Percusivos)",
    "geometria": "Puntos Disparados en Zig-Zag Apretado",
    "proposito": "Crear notas 'fantasma' ahogando las cuerdas con la mano derecha/izquierda para lograr un chasquido rítmico percusivo.",
    "nodos_principales": [
      "Nota chasqueada (Muted)",
      "Nota acentuada en agudos",
      "Bajo pulsado"
    ],
    "tecnica_o_ejecucion": "Hybrid Picking (Púa golpea abajo, dedo medio/anular jala la cuerda hacia afuera para que chaste contra los trastes).",
    "esquema_colores": {
      "nota_percusiva_mutada": "#7F8C8D",
      "chasquido_agudo": "#F1C40F"
    },
    "sensacion_emocional": "Aceleración, ritmo frenético, estilo 'gallina', destreza rítmica."
  },
  {
    "key": "country-5",
    "coleccion": "country",
    "id": 5,
    "nombre": "Cascadas de Cuerda Aire / Banjo Rolls en Guitarra",
    "geometria": "Onda Arpegiada Descendente Continua",
    "proposito": "Utilizar cuerdas al aire como notas de paso mientras la mano izquierda se mueve por el mástil, creando un efecto de arpa o banjo.",
    "nodos_principales": [
      "E3 (Aire)",
      "B2 (Aire)",
      "Notas pisadas en cuerdas G y D"
    ],
    "tecnica_o_ejecucion": "Patrones arpegiados continuos (Púa - Medio - Anular) manteniendo cuerdas abiertas afinadas en la escala.",
    "esquema_colores": {
      "cuerdas_aire": "#A29BFE",
      "cuerdas_pisadas": "#6C5CE7"
    },
    "sensacion_emocional": "Velocidad deslumbrante, fluidez cristalina, ambiente Bluegrass."
  },
  {
    "key": "country-6",
    "coleccion": "country",
    "id": 6,
    "nombre": "Cromatismos de Aproximación a la 3ra (The Ultimate Twang Lick)",
    "geometria": "Escalón Cromático Tripartito",
    "proposito": "Llegar a la nota clave del acorde (la 3ra mayor) deslizando dos notas cromáticas desde abajo.",
    "nodos_principales": [
      "b2 -> 2 -> 3ra mayor (ejemplo en Sol: Mib -> Mi -> Fa# -> Sol)"
    ],
    "tecnica_o_ejecucion": "Slide (deslizamiento) ultrarrápido con el dedo índice o medio hacia la tónica o 3ra.",
    "esquema_colores": {
      "aproximacion_cromatica": "#D35400",
      "nota_de_llegada": "#2ECC71"
    },
    "sensacion_emocional": "Firma clásica del solista country, resolución satisfactoria."
  },
  {
    "key": "country-7",
    "coleccion": "country",
    "id": 7,
    "nombre": "Red Armónica Western Swing (Sustituciones Jazz-Country)",
    "geometria": "Círculo con Acordes Sextos y Novenas Reorganizados",
    "proposito": "Mezclar el ritmo country con la sofisticación del Swing mediante acordes 6, 9 y disminuidos de paso.",
    "nodos_principales": [
      "C6",
      "C#dim7",
      "Dm7",
      "G9"
    ],
    "conexiones_flechas": [
      {
        "origen": "C6",
        "destino": "C#dim7",
        "tipo": "Paso cromático de bajo"
      },
      {
        "origen": "C#dim7",
        "destino": "Dm7",
        "tipo": "Resolución suave"
      },
      {
        "origen": "Dm7",
        "destino": "G9",
        "tipo": "Cadencia ii-V de swing"
      }
    ],
    "esquema_colores": {
      "acordes_6": "#34495E",
      "disminuidos_paso": "#E74C3C",
      "novenas": "#F39C12"
    },
    "sensacion_emocional": "Elegancia bailable, swing tejano, sofisticación retro."
  },
  {
    "key": "country-8",
    "coleccion": "country",
    "id": 8,
    "nombre": "Líneas de Bajo Walk-ups y Walk-downs (Tradición Bluegrass)",
    "geometria": "Escalera Descendente/Ascendente de Cuerdas Graves",
    "proposito": "Conectar un acorde con el siguiente mediante notas individuales en las cuerdas 5ta y 6ta antes de rasguear.",
    "nodos_principales": [
      "G (Bajo)",
      "A (Paso)",
      "B (Paso)",
      "C (Llegada al nuevo acorde)"
    ],
    "tecnica_o_ejecucion": "Punteo con púa apoyada en cuerdas graves seguido de rasgueo 'boom-chick'.",
    "esquema_colores": {
      "notas_de_paso_bajo": "#8E44AD",
      "acorde_destino": "#1ABC9C"
    },
    "sensacion_emocional": "Caminata rítmica, conducción clara, sabor tradicional folk."
  },
  {
    "key": "country-9",
    "coleccion": "country",
    "id": 9,
    "nombre": "Armonización de Guitarras Gemelas en Sexteadas (6ths Double Stops)",
    "geometria": "Diagonales Dobles en Cuerdas Separadas",
    "proposito": "Tocar dos notas separadas por un intervalo de 6ta para crear una melodía armonizada típica de duo de guitarras.",
    "nodos_principales": [
      "Nota grave en cuerda D",
      "Nota aguda en cuerda B (salteando la cuerda G)"
    ],
    "tecnica_o_ejecucion": "Púa en cuerda grave + Dedo medio pulsando cuerda B (o apagando la cuerda G del medio).",
    "esquema_colores": {
      "par_de_sextas": "#FF7675",
      "cuerda_silenciada": "#2D3436"
    },
    "sensacion_emocional": "Canto a dos voces, sonido tejano-mexicano, dulzura melódica."
  },
  {
    "key": "country-10",
    "coleccion": "country",
    "id": 10,
    "nombre": "Mapa de Balada Country / Americana (I - IVadd9 - V - vi)",
    "geometria": "Anillo de Acordes Abiertos con Notas Suspendidas",
    "proposito": "Progresión emotiva para baladas acústicas con notas que quedan sonando libres (cuerdas al aire).",
    "nodos_principales": [
      "G",
      "Cadd9",
      "Dsus4",
      "Em7"
    ],
    "conexiones_flechas": [
      {
        "origen": "G",
        "destino": "Cadd9",
        "tipo": "Manteniendo los dedos 3 y 4 fijos en los trastes 3 de cuerdas B y E"
      },
      {
        "origen": "Cadd9",
        "destino": "Em7",
        "tipo": "Transición a la melancolía del relativo menor"
      },
      {
        "origen": "Em7",
        "destino": "Dsus4",
        "tipo": "Empuje de tensión flotante"
      }
    ],
    "esquema_colores": {
      "acorde_abierto": "#00CEC9",
      "notas_fijas_anchor": "#FDCB6E"
    },
    "sensacion_emocional": "Intimidad, carretera abierta, nostalgia, storytelling."
  },
  {
    "key": "western-1",
    "coleccion": "western",
    "id": 1,
    "nombre": "El Bucle 'Desierto Gótico' (Escala Menor Armónica / Morricone)",
    "geometria": "Círculo Oscuro con Espiral Interna",
    "proposito": "Armonía base para secuencias de duelo, suspenso o caminatas bajo el sol. Usa el V7 mayor en una tonalidad menor para dar ese sabor 'clásico' y peligroso.",
    "nodos_principales": [
      "Dm (Tónica)",
      "Am (Dominante menor)",
      "Bb (Submediante)",
      "A7 (Dominante mayor con tensión)"
    ],
    "conexiones_flechas": [
      {
        "origen": "Dm",
        "destino": "Bb",
        "tipo": "Caída a la submediante (sensación de inmensidad)"
      },
      {
        "origen": "Bb",
        "destino": "A7",
        "tipo": "Paso a la dominante armónica (tensión máxima)"
      },
      {
        "origen": "A7",
        "destino": "Dm",
        "tipo": "Resolución dramática al duelo"
      }
    ],
    "esquema_colores": {
      "tonica_oscura": "#1C2833",
      "submediante_dramatica": "#78281F",
      "dominante_peligrosa": "#C0392B"
    },
    "sensacion_emocional": "Peligro inminente, juicio final, calor sofocante, suspenso de duelo."
  },
  {
    "key": "western-2",
    "coleccion": "western",
    "id": 2,
    "nombre": "Riff Barítono de Cuerdas Graves (Palm Muting + Spring Reverb)",
    "geometria": "Línea Horizontal Grave con Pulsación Ocular",
    "proposito": "Líneas melódicas graves y amenazantes ejecutadas en guitarra barítona o cuerdas 5ta y 6ta en afinación caída (Drop D / Drop C).",
    "nodos_principales": [
      "D (Abierta)",
      "F (3er traste)",
      "G (5to traste)",
      "G# (Tritono/b5)",
      "A (5ta justa)"
    ],
    "tecnica_o_ejecucion": "Palm muting denso + Púa dura cerca del puente + Reverb de muelle (Spring Reverb) al máximo con un toque de Tremolo lento.",
    "esquema_colores": {
      "nota_grave_ancla": "#0B0C10",
      "tritono_peligro": "#E63946"
    },
    "sensacion_emocional": "Pasos de un forajido, amenaza latente, peso, marcha fúnebre."
  },
  {
    "key": "western-3",
    "coleccion": "western",
    "id": 3,
    "nombre": "Cadencia Frigia del Homicida (i - bII - bIII - bII)",
    "geometria": "Pendulo de Oscilación Asimétrica",
    "proposito": "Generar una tensión 'española/árabe' muy oscura típica de emboscadas, cambiando entre el acorde raíz y su medio tono superior.",
    "nodos_principales": [
      "Em",
      "F",
      "G",
      "F"
    ],
    "conexiones_flechas": [
      {
        "origen": "Em",
        "destino": "F",
        "tipo": "Salto de semitono dramático (Modo Frigio)"
      },
      {
        "origen": "F",
        "destino": "G",
        "tipo": "Ascenso de paso modal"
      },
      {
        "origen": "G",
        "destino": "F",
        "tipo": "Caída de retorno"
      },
      {
        "origen": "F",
        "destino": "Em",
        "tipo": "Resolución de fricción extrema"
      }
    ],
    "esquema_colores": {
      "tonica_frigia": "#2C3E50",
      "semitono_friccion": "#D35400"
    },
    "sensacion_emocional": "Ataque, desesperación, desierto sin ley, venganza."
  },
  {
    "key": "western-4",
    "coleccion": "western",
    "id": 4,
    "nombre": "Slide Guitar Gótico en Dm Abierto (Open Dm Tuning: D-A-D-F-A-D)",
    "geometria": "Línea Cóncava Glissando",
    "proposito": "Tocar líneas melódicas flotantes y desoladas usando un slide de cristal o metal sobre una afinación abierta en menor.",
    "nodos_principales": [
      "Acorde abierto Dm",
      "Traste 3 (F)",
      "Traste 5 (G)",
      "Traste 7 (A)",
      "Traste 10 (C)"
    ],
    "tecnica_o_ejecucion": "Slide con la mano izquierda + vibrato amplio al final de cada nota + eco de cinta (Tape Delay).",
    "esquema_colores": {
      "afinacion_abierta": "#34495E",
      "desplazamiento_slide": "#8E44AD"
    },
    "sensacion_emocional": "Viento en un pueblo fantasma, soledad absoluta, lamento distante."
  },
  {
    "key": "western-5",
    "coleccion": "western",
    "id": 5,
    "nombre": "Arpegio de Sombras con Segunda Añadida (Dmadd9 / Amadd9)",
    "geometria": "Triángulo de Puntas Afiladas",
    "proposito": "Crear armonías de guitarra acústica o de caja de pulso lento donde las cuerdas al aire generan disonancias frías.",
    "nodos_principales": [
      "Dm(add9) (Re - Fa - La - Mi)",
      "Am(add9) (La - Do - Mi - Si)"
    ],
    "tecnica_o_ejecucion": "Arpegio lento con dedos (Fingerpicking) dejando que la nota Mi (segunda) resuene directamente contra la tercera menor.",
    "esquema_colores": {
      "base_triada": "#111111",
      "friccion_novena": "#E74C3C"
    },
    "sensacion_emocional": "Melancolía helada, trauma del pasado, historia trágica alrededor de la fogata."
  },
  {
    "key": "western-6",
    "coleccion": "western",
    "id": 6,
    "nombre": "Tremolo Picking 'Grit & Pluck' (Lick de Alta Tensión en Agudos)",
    "geometria": "Descarga de Rayos Paralelos",
    "proposito": "Hacer trémolo ultrarrápido con la púa en la primera cuerda mientras se varía la nota en la escala menor melódica.",
    "nodos_principales": [
      "Cuerda E alta: Traste 10 (D) -> Traste 9 (C#) -> Traste 12 (E)"
    ],
    "tecnica_o_ejecucion": "Punteo alternado a máxima velocidad en una sola cuerda combinado con pedal de Tremolo rápido de onda cuadrada.",
    "esquema_colores": {
      "nota_fija_tremolo": "#F1C40F",
      "alteracion_sensible": "#FF0055"
    },
    "sensacion_emocional": "Histerismo, clímax de persecución a caballo, locura."
  },
  {
    "key": "western-7",
    "coleccion": "western",
    "id": 7,
    "nombre": "Sextas Macabras en Tonalidad Menor (Gothic Double Stops)",
    "geometria": "Vías Paralelas Desplazadas",
    "proposito": "Tocar armonías en intervalos de 6ta descendentes sobre la 1ra y 3ra cuerda en clave menor.",
    "nodos_principales": [
      "Par 1: F (Cuerda 1) / D (Cuerda 3)",
      "Par 2: E (Cuerda 1) / C# (Cuerda 3)",
      "Par 3: D (Cuerda 1) / B (Cuerda 3)"
    ],
    "tecnica_o_ejecucion": "Pulsar ambas cuerdas simultáneamente dejando la 2da cuerda silenciada con el borde del dedo.",
    "esquema_colores": {
      "par_armonico": "#5D6D7E",
      "resolucion_oscura": "#1B2631"
    },
    "sensacion_emocional": "Romance trágico, funeral en la frontera, belleza macabra."
  },
  {
    "key": "western-8",
    "coleccion": "western",
    "id": 8,
    "nombre": "Cromatismo 'Tritono del Cazador' (Uso de la b5 como ancla)",
    "geometria": "Cruz Discontinua",
    "proposito": "Utilizar la quinta disminuida no solo como nota de paso rápido, sino como acorde de parada (Powerchord con b5).",
    "nodos_principales": [
      "Em",
      "Bb5 (Tritono directo)",
      "B7"
    ],
    "conexiones_flechas": [
      {
        "origen": "Em",
        "destino": "Bb5",
        "tipo": "Salto directo al tritono sin preparación"
      },
      {
        "origen": "Bb5",
        "destino": "B7",
        "tipo": "Deslizamiento de medio tono a la dominante"
      }
    ],
    "esquema_colores": {
      "tonica": "#212F3D",
      "tritono_maldito": "#900C3F"
    },
    "sensacion_emocional": "Maldición, brujería del desierto, presencia demoníaca o sobrenatural."
  },
  {
    "key": "western-9",
    "coleccion": "western",
    "id": 9,
    "nombre": "Marcha Fúnebre 'Pedal Point' (Bajo Fijo + Acordes Flotantes)",
    "geometria": "Muro Horizontal Base con Bloques Cayendo",
    "proposito": "Mantener la nota grave Re tocándose rítmicamente sin parar mientras la mano derecha cambia mini-triadas mayores y menores en las cuerdas agudas.",
    "nodos_principales": [
      "Bajo: D fijo continuo",
      "Voces altas: Dm -> Eb/D -> F/D -> C/D"
    ],
    "tecnica_o_ejecucion": "Pulse de bajo constante en octavas mientras se rasguean o puntean acordes de dos notas en la parte superior.",
    "esquema_colores": {
      "pedal_infinito": "#0F0F0F",
      "acordes_flotantes": "#A6ACAF"
    },
    "sensacion_emocional": "Inexorabilidad, marcha hacia la horca, destino fatal implacable."
  },
  {
    "key": "western-10",
    "coleccion": "western",
    "id": 10,
    "nombre": "Lick 'Whammy Dip' (Caída de Tonalidad con Palanca de Vibrato)",
    "geometria": "Arco Descendente de Presión",
    "proposito": "Tocar un acorde menor o acorde de 5ta con saturación suave y presionar la palanca de vibrato hacia abajo para desafinar la nota intencionalmente.",
    "nodos_principales": [
      "Acorde Am (o powerchord A5) dejándose sonar"
    ],
    "tecnica_o_ejecucion": "Ataque seco al acorde + presión física inmediata sobre la palanca de la Bigsby o Fender Stratocaster para bajar 1/2 o 1 tono la afinación completa.",
    "esquema_colores": {
      "impacto_acorde": "#D4AC0D",
      "caida_pitch": "#4A235A"
    },
    "sensacion_emocional": "Instabilidad mental, mareo por calor, alucinación, desesperanza."
  },

  /* --- biblioteca ampliada: 87 mapas más por estilo --- */
  {
    "key": "blues-101",
    "coleccion": "armonia",
    "id": 101,
    "nombre": "Blues de Chicago (Shuffle en La)",
    "geometria": "Bucle Triangular Continuo",
    "proposito": "Fijar el esqueleto de tres acordes del blues de 12 compases en La, tocado con subdivisión de shuffle. Sirve para que el alumno escuche el ciclo I-IV-V sin adornos antes de agregar sustituciones.",
    "nodos_principales": [
      "A7",
      "D7",
      "E7"
    ],
    "conexiones_flechas": [
      {
        "origen": "A7",
        "destino": "D7",
        "tipo": "Cambio al IV del compás 5"
      },
      {
        "origen": "D7",
        "destino": "A7",
        "tipo": "Vuelta al I del compás 7"
      },
      {
        "origen": "A7",
        "destino": "E7",
        "tipo": "Salida al V del compás 9"
      },
      {
        "origen": "E7",
        "destino": "D7",
        "tipo": "Descenso V-IV del compás 10"
      },
      {
        "origen": "D7",
        "destino": "E7",
        "tipo": "Turnaround final que relanza el ciclo"
      }
    ],
    "esquema_colores": {
      "tonica": "#FF6D00",
      "subdominante": "#FFAB00",
      "dominante": "#FFD600"
    },
    "sensacion_emocional": "Groove terrenal, sudor, empuje."
  },
  {
    "key": "blues-102",
    "coleccion": "armonia",
    "id": 102,
    "nombre": "Blues de 12 compases con quick change (Blues en Do)",
    "geometria": "Matriz Rectangular de 12 Bloques",
    "proposito": "Mostrar la variante donde el IV aparece ya en el compás 2 y recién después vuelve el I. Te entrena el oído para anticipar el movimiento temprano al IV.",
    "nodos_principales": [
      "C7",
      "F7",
      "G7"
    ],
    "conexiones_flechas": [
      {
        "origen": "C7",
        "destino": "F7",
        "tipo": "Quick change al IV en el compás 2"
      },
      {
        "origen": "F7",
        "destino": "C7",
        "tipo": "Regreso al I en el compás 3"
      },
      {
        "origen": "C7",
        "destino": "G7",
        "tipo": "Apertura al V en el compás 9"
      },
      {
        "origen": "G7",
        "destino": "F7",
        "tipo": "Caída V-IV en el compás 10"
      },
      {
        "origen": "F7",
        "destino": "C7",
        "tipo": "Resolución al I en el compás 11"
      }
    ],
    "esquema_colores": {
      "tonica": "#1E88E5",
      "subdominante": "#42A5F5",
      "dominante": "#FFC107"
    },
    "sensacion_emocional": "Claridad, movimiento, respiración amplia."
  },
  {
    "key": "blues-103",
    "coleccion": "armonia",
    "id": 103,
    "nombre": "Blues menor (Blues en Do menor)",
    "geometria": "Cascada Descendente",
    "proposito": "Trabajar el blues menor: i y iv con séptima menor y un V7 alterado que aprieta la vuelta. Sirve para solear con menor natural y frigio dominante sobre el V.",
    "nodos_principales": [
      "Cm7",
      "Fm7",
      "Ab7",
      "G7(b9)"
    ],
    "conexiones_flechas": [
      {
        "origen": "Cm7",
        "destino": "Fm7",
        "tipo": "Cambio al iv menor del compás 5"
      },
      {
        "origen": "Fm7",
        "destino": "Cm7",
        "tipo": "Vuelta al i del compás 7"
      },
      {
        "origen": "Cm7",
        "destino": "Ab7",
        "tipo": "Ascenso al bVI7 del compás 9"
      },
      {
        "origen": "Ab7",
        "destino": "G7(b9)",
        "tipo": "Descenso cromático bVI7-V7"
      },
      {
        "origen": "G7(b9)",
        "destino": "Cm7",
        "tipo": "Resolución dominante alterada al i"
      }
    ],
    "esquema_colores": {
      "tonica": "#5E35B1",
      "subdominante": "#7E57C2",
      "dominante": "#EF5350"
    },
    "sensacion_emocional": "Oscuro, resignado, tenso."
  },
  {
    "key": "blues-104",
    "coleccion": "armonia",
    "id": 104,
    "nombre": "Blues jazz con ii-V (Blues en Fa)",
    "geometria": "Círculo de Engranajes Consecutivos",
    "proposito": "Rellenar el blues de 12 con cadenas ii-V para que cada dominante llegue preparado. Base para improvisar con voice leading en lugar de escala pentatónica sola.",
    "nodos_principales": [
      "F7",
      "Bb7",
      "Gm7",
      "C7",
      "Am7",
      "D7"
    ],
    "conexiones_flechas": [
      {
        "origen": "F7",
        "destino": "Bb7",
        "tipo": "Cambio al IV7 del compás 5"
      },
      {
        "origen": "Bb7",
        "destino": "Am7",
        "tipo": "Enlace cromático al iii del compás 7"
      },
      {
        "origen": "Am7",
        "destino": "D7",
        "tipo": "ii-V hacia el vi (VI7 secundario)"
      },
      {
        "origen": "D7",
        "destino": "Gm7",
        "tipo": "Resolución al ii del compás 9"
      },
      {
        "origen": "Gm7",
        "destino": "C7",
        "tipo": "ii-V del compás 9 al 10"
      },
      {
        "origen": "C7",
        "destino": "F7",
        "tipo": "Resolución V-I del compás 11"
      }
    ],
    "esquema_colores": {
      "tonica": "#00897B",
      "dominante": "#FFB300",
      "dominante_secundaria": "#F4511E",
      "subdominante": "#26A69A"
    },
    "sensacion_emocional": "Elegante, hablado, sofisticado."
  },
  {
    "key": "blues-105",
    "coleccion": "armonia",
    "id": 105,
    "nombre": "Catálogo de turnarounds (Blues en Sol)",
    "geometria": "Camino en Zig-Zag",
    "proposito": "Comparar tres salidas distintas para los compases 11 y 12: el I-VI-II-V, el I-IV-I-V y el descenso cromático hacia el V. Elegís el turnaround según cuánta tensión querés dejar abierta.",
    "nodos_principales": [
      "G7",
      "E7",
      "A7",
      "D7",
      "C7",
      "Ab7"
    ],
    "conexiones_flechas": [
      {
        "origen": "G7",
        "destino": "E7",
        "tipo": "Turnaround I-VI7"
      },
      {
        "origen": "E7",
        "destino": "A7",
        "tipo": "Cadena de dominantes VI7-II7"
      },
      {
        "origen": "A7",
        "destino": "D7",
        "tipo": "Cierre II7-V7 del turnaround"
      },
      {
        "origen": "G7",
        "destino": "C7",
        "tipo": "Turnaround alternativo I-IV7"
      },
      {
        "origen": "C7",
        "destino": "D7",
        "tipo": "Vuelta IV7-V7 sin pasar por el vi"
      },
      {
        "origen": "Ab7",
        "destino": "G7",
        "tipo": "Aproximación cromática bII7 al I"
      },
      {
        "origen": "D7",
        "destino": "Ab7",
        "tipo": "Sustitución tritonal del V7"
      }
    ],
    "esquema_colores": {
      "tonica": "#3949AB",
      "dominante": "#FDD835",
      "dominante_secundaria": "#E53935"
    },
    "sensacion_emocional": "Curiosidad, suspenso, decisión."
  },
  {
    "key": "blues-106",
    "coleccion": "armonia",
    "id": 106,
    "nombre": "Blues de 8 compases (Blues en Mi)",
    "geometria": "Línea Horizontal Grave",
    "proposito": "Practicar la forma corta de 8 compases, donde el V aparece muy temprano y la vuelta llega antes de que el oído la espere. Ideal para frases de dos compases.",
    "nodos_principales": [
      "E7",
      "B7",
      "A7",
      "F#7"
    ],
    "conexiones_flechas": [
      {
        "origen": "E7",
        "destino": "B7",
        "tipo": "Salto temprano al V del compás 2"
      },
      {
        "origen": "B7",
        "destino": "A7",
        "tipo": "Bajada al IV del compás 3"
      },
      {
        "origen": "A7",
        "destino": "E7",
        "tipo": "Vuelta al I del compás 5"
      },
      {
        "origen": "E7",
        "destino": "F#7",
        "tipo": "Ascenso al II7 del compás 6"
      },
      {
        "origen": "F#7",
        "destino": "B7",
        "tipo": "Cierre II7-V7 del compás 7"
      }
    ],
    "esquema_colores": {
      "tonica": "#6D4C41",
      "subdominante": "#8D6E63",
      "dominante": "#FFA726"
    },
    "sensacion_emocional": "Conciso, campero, directo."
  },
  {
    "key": "blues-107",
    "coleccion": "armonia",
    "id": 107,
    "nombre": "Blues de 16 compases (Blues extendido en Sol)",
    "geometria": "Escalera de Pilares Paralelos",
    "proposito": "Estirar la forma con cuatro compases extra sobre el IV antes del V, para que puedas desarrollar una idea melódica larga sin que el ciclo te corte.",
    "nodos_principales": [
      "G7",
      "C7",
      "D7",
      "Cm7"
    ],
    "conexiones_flechas": [
      {
        "origen": "G7",
        "destino": "C7",
        "tipo": "Cambio al IV del compás 5"
      },
      {
        "origen": "C7",
        "destino": "Cm7",
        "tipo": "Ensombrecido del IV a iv menor en la zona extendida"
      },
      {
        "origen": "Cm7",
        "destino": "G7",
        "tipo": "Vuelta al I del compás 11"
      },
      {
        "origen": "G7",
        "destino": "D7",
        "tipo": "Salida al V del compás 13"
      },
      {
        "origen": "D7",
        "destino": "C7",
        "tipo": "Descenso V-IV del compás 14"
      },
      {
        "origen": "C7",
        "destino": "G7",
        "tipo": "Resolución al I del compás 15"
      }
    ],
    "esquema_colores": {
      "tonica": "#00695C",
      "subdominante": "#00ACC1",
      "dominante": "#FFD54F",
      "color_modal": "#5C6BC0"
    },
    "sensacion_emocional": "Paciencia, relato, respiro largo."
  },
  {
    "key": "blues-108",
    "coleccion": "armonia",
    "id": 108,
    "nombre": "Blues de novenas y bajo caminante (Blues en Mi)",
    "geometria": "Onda Sinusoidal",
    "proposito": "Trabajar el blues lento y ondulante con acordes de novena en lugar de séptima seca. La novena suaviza el color y deja espacio para el bajo caminante.",
    "nodos_principales": [
      "E9",
      "A9",
      "B9"
    ],
    "conexiones_flechas": [
      {
        "origen": "E9",
        "destino": "A9",
        "tipo": "Cambio al IV9 del compás 5"
      },
      {
        "origen": "A9",
        "destino": "E9",
        "tipo": "Vuelta al I9 del compás 7"
      },
      {
        "origen": "E9",
        "destino": "B9",
        "tipo": "Salida al V9 del compás 9"
      },
      {
        "origen": "B9",
        "destino": "E9",
        "tipo": "Resolución directa V-I sin pasar por el IV"
      }
    ],
    "esquema_colores": {
      "tonica": "#455A64",
      "subdominante": "#78909C",
      "dominante": "#FFCA28"
    },
    "sensacion_emocional": "Hipnótico, perezoso, balanceado."
  },
  {
    "key": "blues-109",
    "coleccion": "armonia",
    "id": 109,
    "nombre": "Blues con paradas (Stop-time en La)",
    "geometria": "Diagrama en X (Diamante Intersectado)",
    "proposito": "Organizar los cortes de banda: los primeros compases quedan en silencio salvo los golpes, y el groove vuelve entero al llegar al IV. Sirve para ensayar dinámica de conjunto.",
    "nodos_principales": [
      "A7",
      "D7",
      "E7",
      "A7(#9)"
    ],
    "conexiones_flechas": [
      {
        "origen": "A7",
        "destino": "A7(#9)",
        "tipo": "Golpe de parada sobre el I con novena aumentada"
      },
      {
        "origen": "A7(#9)",
        "destino": "A7",
        "tipo": "Reentrada del groove sobre el I"
      },
      {
        "origen": "A7",
        "destino": "D7",
        "tipo": "Cambio al IV del compás 5 con banda completa"
      },
      {
        "origen": "D7",
        "destino": "A7",
        "tipo": "Vuelta al I del compás 7"
      },
      {
        "origen": "A7",
        "destino": "E7",
        "tipo": "Parada final antes del V del compás 9"
      },
      {
        "origen": "E7",
        "destino": "D7",
        "tipo": "Descenso V-IV del compás 10"
      }
    ],
    "esquema_colores": {
      "tonica": "#C62828",
      "subdominante": "#EF6C00",
      "dominante": "#FBC02D"
    },
    "sensacion_emocional": "Suspenso, golpe, expectativa."
  },
  {
    "key": "blues-110",
    "coleccion": "armonia",
    "id": 110,
    "nombre": "Gospel blues con iv menor (Blues en Fa)",
    "geometria": "Anillos Concéntricos",
    "proposito": "Meter el color de iglesia en el blues: acordes mayores en lugar de séptimas dominantes, el iv menor como bisagra emotiva y un VI7 que empuja el turnaround.",
    "nodos_principales": [
      "F",
      "Bb",
      "Bbm",
      "C7",
      "Dm7",
      "D7"
    ],
    "conexiones_flechas": [
      {
        "origen": "F",
        "destino": "Bb",
        "tipo": "Cambio al IV mayor del compás 5"
      },
      {
        "origen": "Bb",
        "destino": "Bbm",
        "tipo": "Ensombrecido IV-iv menor característico del gospel"
      },
      {
        "origen": "Bbm",
        "destino": "F",
        "tipo": "Resolución plagal del iv menor al I"
      },
      {
        "origen": "F",
        "destino": "D7",
        "tipo": "Salida al VI7 del turnaround"
      },
      {
        "origen": "D7",
        "destino": "Dm7",
        "tipo": "Relajación del VI7 al vi menor"
      },
      {
        "origen": "Dm7",
        "destino": "C7",
        "tipo": "Camino al V7 del compás 12"
      },
      {
        "origen": "C7",
        "destino": "F",
        "tipo": "Cadencia V-I de cierre"
      }
    ],
    "esquema_colores": {
      "tonica": "#8E24AA",
      "subdominante": "#AB47BC",
      "dominante": "#FFB74D",
      "color_modal": "#4527A0"
    },
    "sensacion_emocional": "Elevación, consuelo, calor."
  },
  {
    "key": "blues-111",
    "coleccion": "armonia",
    "id": 111,
    "nombre": "Blues con sustitución tritonal (Blues en Si bemol)",
    "geometria": "Espiral Descendente",
    "proposito": "Reemplazar dominantes por su tritono para conseguir bajos que bajan de medio tono. Te obliga a pensar el V7 y su sustituto como la misma función.",
    "nodos_principales": [
      "Bb7",
      "Eb7",
      "F7",
      "B7",
      "Cm7",
      "Db7"
    ],
    "conexiones_flechas": [
      {
        "origen": "Bb7",
        "destino": "Eb7",
        "tipo": "Cambio al IV7 del compás 5"
      },
      {
        "origen": "Eb7",
        "destino": "Bb7",
        "tipo": "Vuelta al I7 del compás 7"
      },
      {
        "origen": "Bb7",
        "destino": "Cm7",
        "tipo": "Preparación del ii del compás 9"
      },
      {
        "origen": "Cm7",
        "destino": "F7",
        "tipo": "ii-V7 convencional"
      },
      {
        "origen": "Cm7",
        "destino": "B7",
        "tipo": "Sustitución tritonal del V7"
      },
      {
        "origen": "B7",
        "destino": "Bb7",
        "tipo": "Resolución cromática bII7 al I"
      },
      {
        "origen": "F7",
        "destino": "Db7",
        "tipo": "Intercambio tritonal dentro del turnaround"
      },
      {
        "origen": "Db7",
        "destino": "Bb7",
        "tipo": "Cierre descendente al I"
      }
    ],
    "esquema_colores": {
      "tonica": "#283593",
      "dominante": "#FDD835",
      "sustitucion_tritonal": "#D81B60",
      "subdominante": "#3F51B5"
    },
    "sensacion_emocional": "Resbaladizo, moderno, inquieto."
  },
  {
    "key": "blues-112",
    "coleccion": "armonia",
    "id": 112,
    "nombre": "Blues en menor armónica (Blues en La menor)",
    "geometria": "Pentágono Conectado",
    "proposito": "Usar la menor armónica para que el V7 tenga tercera mayor y sensible real. El contraste entre el iv menor y ese dominante es el corazón del mapa.",
    "nodos_principales": [
      "Am",
      "Dm",
      "E7(b9)",
      "Bm7b5",
      "F"
    ],
    "conexiones_flechas": [
      {
        "origen": "Am",
        "destino": "Dm",
        "tipo": "Cambio al iv menor del compás 5"
      },
      {
        "origen": "Dm",
        "destino": "Am",
        "tipo": "Vuelta al i del compás 7"
      },
      {
        "origen": "Am",
        "destino": "Bm7b5",
        "tipo": "Salida al ii semidisminuido del compás 9"
      },
      {
        "origen": "Bm7b5",
        "destino": "E7(b9)",
        "tipo": "ii-V menor con novena bemol"
      },
      {
        "origen": "E7(b9)",
        "destino": "Am",
        "tipo": "Resolución de la menor armónica al i"
      },
      {
        "origen": "F",
        "destino": "E7(b9)",
        "tipo": "Descenso bVI-V7 del turnaround"
      },
      {
        "origen": "Am",
        "destino": "F",
        "tipo": "Apoyo en el bVI antes del cierre"
      }
    ],
    "esquema_colores": {
      "tonica": "#4A148C",
      "subdominante": "#6A1B9A",
      "dominante": "#FF7043"
    },
    "sensacion_emocional": "Dramático, español, filoso."
  },
  {
    "key": "blues-113",
    "coleccion": "armonia",
    "id": 113,
    "nombre": "Slow blues con novenas y trecenas (Blues en Do)",
    "geometria": "Embudo Convergente",
    "proposito": "Armar un blues lento de doce compases donde cada dominante se enriquece con novena o trecena, y el V llega alterado para maximizar la tensión antes del cierre.",
    "nodos_principales": [
      "C9",
      "F9",
      "G13",
      "G13(b9)",
      "Fm7"
    ],
    "conexiones_flechas": [
      {
        "origen": "C9",
        "destino": "F9",
        "tipo": "Cambio al IV9 del compás 5"
      },
      {
        "origen": "F9",
        "destino": "Fm7",
        "tipo": "Ensombrecido del IV a iv menor en el compás 6"
      },
      {
        "origen": "Fm7",
        "destino": "C9",
        "tipo": "Vuelta plagal al I del compás 7"
      },
      {
        "origen": "C9",
        "destino": "G13",
        "tipo": "Salida al V13 del compás 9"
      },
      {
        "origen": "G13",
        "destino": "G13(b9)",
        "tipo": "Alteración del V para apretar la resolución"
      },
      {
        "origen": "G13(b9)",
        "destino": "C9",
        "tipo": "Resolución dominante alterada al I"
      }
    ],
    "esquema_colores": {
      "tonica": "#01579B",
      "subdominante": "#0288D1",
      "dominante": "#FFB300",
      "color_modal": "#7B1FA2"
    },
    "sensacion_emocional": "Lamento, terciopelo, peso."
  },
  {
    "key": "blues-114",
    "coleccion": "armonia",
    "id": 114,
    "nombre": "Jump blues de sección de vientos (Blues en Si bemol)",
    "geometria": "Octágono de Enlaces Simétricos",
    "proposito": "Blues rápido con armonía de big band chica: cadenas de dominantes y ii-V que dan a los vientos algo que morder en cada riff de dos compases.",
    "nodos_principales": [
      "Bb7",
      "Eb7",
      "F7",
      "Cm7",
      "Gm7",
      "D7",
      "G7"
    ],
    "conexiones_flechas": [
      {
        "origen": "Bb7",
        "destino": "Eb7",
        "tipo": "Cambio al IV7 del compás 5"
      },
      {
        "origen": "Eb7",
        "destino": "Bb7",
        "tipo": "Vuelta al I7 del compás 7"
      },
      {
        "origen": "Bb7",
        "destino": "D7",
        "tipo": "Salida al VI7 del compás 8"
      },
      {
        "origen": "D7",
        "destino": "Gm7",
        "tipo": "Resolución VI7 al vi menor"
      },
      {
        "origen": "Gm7",
        "destino": "Cm7",
        "tipo": "Ciclo de cuartas vi-ii"
      },
      {
        "origen": "Cm7",
        "destino": "F7",
        "tipo": "ii-V del compás 9 al 10"
      },
      {
        "origen": "F7",
        "destino": "Bb7",
        "tipo": "Cadencia V-I del compás 11"
      },
      {
        "origen": "G7",
        "destino": "Cm7",
        "tipo": "Dominante secundaria que relanza el ii"
      }
    ],
    "esquema_colores": {
      "tonica": "#E65100",
      "dominante": "#FFD600",
      "dominante_secundaria": "#D84315",
      "subdominante": "#FB8C00"
    },
    "sensacion_emocional": "Fiesta, velocidad, brillo."
  },
  {
    "key": "blues-115",
    "coleccion": "armonia",
    "id": 115,
    "nombre": "Blues con disminuidos de paso (Blues en Do)",
    "geometria": "Hexágono Flotante",
    "proposito": "Insertar acordes disminuidos cromáticos entre los grados del blues para que el bajo suba de medio tono en lugar de saltar. Recurso clásico de piano y guitarra de acompañamiento.",
    "nodos_principales": [
      "C7",
      "C#dim7",
      "F7",
      "F#dim7",
      "G7",
      "Dm7"
    ],
    "conexiones_flechas": [
      {
        "origen": "C7",
        "destino": "F7",
        "tipo": "Cambio al IV7 del compás 5"
      },
      {
        "origen": "F7",
        "destino": "F#dim7",
        "tipo": "Disminuido de paso entre el IV y el I"
      },
      {
        "origen": "F#dim7",
        "destino": "C7",
        "tipo": "Llegada al I del compás 7 con bajo cromático"
      },
      {
        "origen": "C7",
        "destino": "C#dim7",
        "tipo": "Disminuido ascendente hacia el ii"
      },
      {
        "origen": "C#dim7",
        "destino": "Dm7",
        "tipo": "Resolución del disminuido al ii del compás 9"
      },
      {
        "origen": "Dm7",
        "destino": "G7",
        "tipo": "ii-V del compás 9 al 10"
      },
      {
        "origen": "G7",
        "destino": "C7",
        "tipo": "Cadencia V-I de cierre"
      }
    ],
    "esquema_colores": {
      "tonica": "#00838F",
      "subdominante": "#00ACC1",
      "dominante": "#FFC400",
      "acorde_de_paso": "#8E24AA"
    },
    "sensacion_emocional": "Deslizante, artesanal, pícaro."
  },
  {
    "key": "blues-116",
    "coleccion": "armonia",
    "id": 116,
    "nombre": "Texas shuffle (Blues en Sol)",
    "geometria": "Bucle Triangular Continuo",
    "proposito": "Shuffle de tres acordes con riff en el bajo y mezcla de séptima, novena y trecena sobre el mismo grado. Sirve para pensar el color del acorde como decisión de arreglo.",
    "nodos_principales": [
      "G7",
      "C9",
      "D9",
      "G13"
    ],
    "conexiones_flechas": [
      {
        "origen": "G7",
        "destino": "C9",
        "tipo": "Cambio al IV del compás 5"
      },
      {
        "origen": "C9",
        "destino": "G7",
        "tipo": "Vuelta al I del compás 7"
      },
      {
        "origen": "G7",
        "destino": "D9",
        "tipo": "Salida al V del compás 9"
      },
      {
        "origen": "D9",
        "destino": "C9",
        "tipo": "Descenso V-IV del compás 10"
      },
      {
        "origen": "C9",
        "destino": "G13",
        "tipo": "Llegada al I enriquecido del compás 11"
      },
      {
        "origen": "G13",
        "destino": "D9",
        "tipo": "Turnaround que deja el V abierto"
      }
    ],
    "esquema_colores": {
      "tonica": "#BF360C",
      "subdominante": "#E64A19",
      "dominante": "#FFA000"
    },
    "sensacion_emocional": "Polvoriento, ancho, insistente."
  },
  {
    "key": "blues-117",
    "coleccion": "armonia",
    "id": 117,
    "nombre": "Blues funk de un acorde (Vamp en Mi)",
    "geometria": "Estrella Central con Órbitas Radial",
    "proposito": "Sostener un vamp funk sobre el I y salir sólo lo indispensable al IV y al V. El interés melódico viene de las alteraciones del acorde central, no del cambio.",
    "nodos_principales": [
      "E9",
      "E7(#9)",
      "A13",
      "B7(#9)"
    ],
    "conexiones_flechas": [
      {
        "origen": "E9",
        "destino": "E7(#9)",
        "tipo": "Tensado del I con novena aumentada"
      },
      {
        "origen": "E7(#9)",
        "destino": "E9",
        "tipo": "Relajación al I con novena natural"
      },
      {
        "origen": "E9",
        "destino": "A13",
        "tipo": "Salida breve al IV13"
      },
      {
        "origen": "A13",
        "destino": "E9",
        "tipo": "Regreso inmediato al vamp del I"
      },
      {
        "origen": "E9",
        "destino": "B7(#9)",
        "tipo": "Golpe de V7 alterado antes de reiniciar"
      },
      {
        "origen": "B7(#9)",
        "destino": "E9",
        "tipo": "Resolución V-I que cierra el ciclo del vamp"
      }
    ],
    "esquema_colores": {
      "tonica": "#212121",
      "dominante": "#FDD835",
      "subdominante": "#43A047"
    },
    "sensacion_emocional": "Grasa, cadera, insistencia."
  },
  {
    "key": "blues-118",
    "coleccion": "armonia",
    "id": 118,
    "nombre": "Blues bebop con densidad armónica (Blues en Fa)",
    "geometria": "Árbol de Decisiones",
    "proposito": "Versión de doce compases con cambios cada dos tiempos: disminuido en el compás 6, ii-V encadenados y sustituto tritonal opcional. Es el mapa para elegir camino en tiempo real.",
    "nodos_principales": [
      "F7",
      "Bb7",
      "Bdim7",
      "Am7",
      "D7",
      "Gm7",
      "C7",
      "Db7"
    ],
    "conexiones_flechas": [
      {
        "origen": "F7",
        "destino": "Bb7",
        "tipo": "Cambio al IV7 del compás 5"
      },
      {
        "origen": "Bb7",
        "destino": "Bdim7",
        "tipo": "Disminuido del compás 6 sobre el bajo del IV"
      },
      {
        "origen": "Bdim7",
        "destino": "F7",
        "tipo": "Llegada al I del compás 7"
      },
      {
        "origen": "F7",
        "destino": "Am7",
        "tipo": "Desvío al iii del compás 8"
      },
      {
        "origen": "Am7",
        "destino": "D7",
        "tipo": "ii-V hacia el vi"
      },
      {
        "origen": "D7",
        "destino": "Gm7",
        "tipo": "Resolución al ii del compás 9"
      },
      {
        "origen": "Gm7",
        "destino": "C7",
        "tipo": "ii-V del compás 9 al 10"
      },
      {
        "origen": "C7",
        "destino": "F7",
        "tipo": "Cadencia V-I del compás 11"
      },
      {
        "origen": "Gm7",
        "destino": "Db7",
        "tipo": "Sustitución tritonal del V7"
      },
      {
        "origen": "Db7",
        "destino": "F7",
        "tipo": "Resolución cromática del sustituto al I"
      }
    ],
    "esquema_colores": {
      "tonica": "#1A237E",
      "dominante": "#FFC107",
      "sustitucion_tritonal": "#C2185B",
      "acorde_de_paso": "#00897B"
    },
    "sensacion_emocional": "Vertiginoso, cerebral, brillante."
  },
  {
    "key": "rock-201",
    "coleccion": "armonia",
    "id": 201,
    "nombre": "Mixolidio I-bVII-IV (Rock modal en Re)",
    "geometria": "Bucle Triangular Continuo",
    "proposito": "Fijar el bucle mixolidio más usado del rock: la tónica mayor con el bVII que evita la sensible y el IV como respiro. Sirve para riffs sin cadencia clásica.",
    "nodos_principales": [
      "D",
      "C",
      "G"
    ],
    "conexiones_flechas": [
      {
        "origen": "D",
        "destino": "C",
        "tipo": "Descenso de tono al bVII mixolidio"
      },
      {
        "origen": "C",
        "destino": "G",
        "tipo": "Movimiento bVII-IV por cuartas"
      },
      {
        "origen": "G",
        "destino": "D",
        "tipo": "Vuelta plagal IV-I sin sensible"
      },
      {
        "origen": "D",
        "destino": "G",
        "tipo": "Salida directa al IV en las variantes del riff"
      }
    ],
    "esquema_colores": {
      "tonica": "#D32F2F",
      "subdominante": "#F57C00",
      "color_modal": "#FBC02D"
    },
    "sensacion_emocional": "Abierto, ruta, confianza."
  },
  {
    "key": "rock-202",
    "coleccion": "armonia",
    "id": 202,
    "nombre": "Eólico i-bVII-bVI (Rock menor en Mi menor)",
    "geometria": "Cascada Descendente",
    "proposito": "Trabajar el descenso eólico por grados enteros y decidir si volvés al i directamente o pasás por un V7 prestado para cerrar con más fuerza.",
    "nodos_principales": [
      "Em",
      "D",
      "C",
      "B7"
    ],
    "conexiones_flechas": [
      {
        "origen": "Em",
        "destino": "D",
        "tipo": "Descenso i-bVII"
      },
      {
        "origen": "D",
        "destino": "C",
        "tipo": "Descenso bVII-bVI"
      },
      {
        "origen": "C",
        "destino": "Em",
        "tipo": "Vuelta modal bVI-i"
      },
      {
        "origen": "C",
        "destino": "B7",
        "tipo": "Descenso bVI-V7 con sensible prestada"
      },
      {
        "origen": "B7",
        "destino": "Em",
        "tipo": "Cadencia V7-i de cierre"
      }
    ],
    "esquema_colores": {
      "tonica": "#37474F",
      "color_modal": "#607D8B",
      "dominante": "#E64A19"
    },
    "sensacion_emocional": "Épico, melancólico, inevitable."
  },
  {
    "key": "rock-203",
    "coleccion": "armonia",
    "id": 203,
    "nombre": "Power chords sin tercera (Riff en La)",
    "geometria": "Línea Horizontal Grave",
    "proposito": "Pensar el riff con quintas puras, donde la ausencia de tercera deja la tonalidad ambigua y el orden de los bloques define el carácter. Base para distorsión pesada.",
    "nodos_principales": [
      "A5",
      "D5",
      "E5",
      "G5",
      "C5"
    ],
    "conexiones_flechas": [
      {
        "origen": "A5",
        "destino": "D5",
        "tipo": "Movimiento I-IV por quintas paralelas"
      },
      {
        "origen": "D5",
        "destino": "E5",
        "tipo": "Ascenso IV-V del riff"
      },
      {
        "origen": "E5",
        "destino": "A5",
        "tipo": "Vuelta V-I sin tercera"
      },
      {
        "origen": "A5",
        "destino": "G5",
        "tipo": "Caída al bVII del estribillo"
      },
      {
        "origen": "G5",
        "destino": "C5",
        "tipo": "Enlace bVII-bIII por cuartas"
      },
      {
        "origen": "C5",
        "destino": "A5",
        "tipo": "Regreso al pilar tonal"
      }
    ],
    "esquema_colores": {
      "tonica": "#263238",
      "color_modal": "#546E7A",
      "dominante": "#FF7043"
    },
    "sensacion_emocional": "Crudo, macizo, ambiguo."
  },
  {
    "key": "rock-204",
    "coleccion": "armonia",
    "id": 204,
    "nombre": "Rock de los cincuenta I-vi-IV-V (Progresión en Do)",
    "geometria": "Círculo de Engranajes Consecutivos",
    "proposito": "Fijar el ciclo de cuatro acordes que sostiene el rock and roll temprano y las baladas doo-wop, y ver cómo cambia si sustituís el vi por su dominante.",
    "nodos_principales": [
      "C",
      "Am",
      "F",
      "G",
      "A7"
    ],
    "conexiones_flechas": [
      {
        "origen": "C",
        "destino": "Am",
        "tipo": "Descenso I-vi por terceras"
      },
      {
        "origen": "Am",
        "destino": "F",
        "tipo": "Enlace vi-IV con nota común"
      },
      {
        "origen": "F",
        "destino": "G",
        "tipo": "Ascenso IV-V"
      },
      {
        "origen": "G",
        "destino": "C",
        "tipo": "Cadencia V-I que reinicia el ciclo"
      },
      {
        "origen": "Am",
        "destino": "A7",
        "tipo": "Tensado del vi a VI7 secundario"
      },
      {
        "origen": "A7",
        "destino": "G",
        "tipo": "Paso del VI7 al V por descenso de tono"
      }
    ],
    "esquema_colores": {
      "tonica": "#F06292",
      "subdominante": "#BA68C8",
      "dominante": "#FFD54F",
      "dominante_secundaria": "#7986CB"
    },
    "sensacion_emocional": "Nostálgico, inocente, luminoso."
  },
  {
    "key": "rock-205",
    "coleccion": "armonia",
    "id": 205,
    "nombre": "Hard rock con bIII prestado (Riff en La)",
    "geometria": "Pirámides Superpuestas",
    "proposito": "Mezclar la tónica mayor del blues rock con los grados bIII y bVII del menor natural. El choque entre tercera mayor del riff y bIII del acorde es el sonido buscado.",
    "nodos_principales": [
      "A",
      "C",
      "D",
      "G",
      "E"
    ],
    "conexiones_flechas": [
      {
        "origen": "A",
        "destino": "C",
        "tipo": "Salto al bIII prestado del menor"
      },
      {
        "origen": "C",
        "destino": "D",
        "tipo": "Ascenso bIII-IV del riff"
      },
      {
        "origen": "D",
        "destino": "A",
        "tipo": "Vuelta plagal IV-I"
      },
      {
        "origen": "A",
        "destino": "G",
        "tipo": "Caída al bVII mixolidio"
      },
      {
        "origen": "G",
        "destino": "D",
        "tipo": "Enlace bVII-IV por cuartas"
      },
      {
        "origen": "E",
        "destino": "A",
        "tipo": "Cadencia V-I al final de la sección"
      },
      {
        "origen": "D",
        "destino": "E",
        "tipo": "Ascenso IV-V que prepara el cierre"
      }
    ],
    "esquema_colores": {
      "tonica": "#B71C1C",
      "color_modal": "#5D4037",
      "subdominante": "#EF6C00",
      "dominante": "#FDD835"
    },
    "sensacion_emocional": "Pesado, arrogante, filoso."
  },
  {
    "key": "rock-206",
    "coleccion": "armonia",
    "id": 206,
    "nombre": "Rock progresivo en compases irregulares (Centro en Re menor)",
    "geometria": "Cruz de Ejes Ortogonales",
    "proposito": "Sostener un centro tonal menor mientras la métrica cambia de 7/8 a 5/4. Los acordes se eligen para que cada cabeza de compás caiga en una nota común.",
    "nodos_principales": [
      "Dm",
      "Bbmaj7",
      "Gm7",
      "A7(b9)",
      "C",
      "Fmaj7"
    ],
    "conexiones_flechas": [
      {
        "origen": "Dm",
        "destino": "Bbmaj7",
        "tipo": "Descenso i-bVI con nota común en la tercera"
      },
      {
        "origen": "Bbmaj7",
        "destino": "Gm7",
        "tipo": "Enlace bVI-iv en el cambio de métrica"
      },
      {
        "origen": "Gm7",
        "destino": "A7(b9)",
        "tipo": "iv-V7 alterado sobre compás de 7/8"
      },
      {
        "origen": "A7(b9)",
        "destino": "Dm",
        "tipo": "Resolución V7-i en la vuelta al 5/4"
      },
      {
        "origen": "Dm",
        "destino": "C",
        "tipo": "Descenso i-bVII de la sección instrumental"
      },
      {
        "origen": "C",
        "destino": "Fmaj7",
        "tipo": "Enlace bVII-bIII que aleja el centro"
      },
      {
        "origen": "Fmaj7",
        "destino": "Bbmaj7",
        "tipo": "Ciclo de cuartas de regreso al bVI"
      }
    ],
    "esquema_colores": {
      "tonica": "#311B92",
      "subdominante": "#512DA8",
      "dominante": "#F4511E",
      "color_modal": "#0097A7"
    },
    "sensacion_emocional": "Laberíntico, ambicioso, inestable."
  },
  {
    "key": "rock-207",
    "coleccion": "armonia",
    "id": 207,
    "nombre": "Grunge i-bIII-bVI (Progresión en Mi menor)",
    "geometria": "Camino en Zig-Zag",
    "proposito": "Encadenar grados menores con saltos de tercera en lugar de cadencias, y dejar el bVI sonando de más para que la resolución llegue tarde y sucia.",
    "nodos_principales": [
      "Em",
      "G",
      "C",
      "A5",
      "D"
    ],
    "conexiones_flechas": [
      {
        "origen": "Em",
        "destino": "G",
        "tipo": "Salto i-bIII por terceras"
      },
      {
        "origen": "G",
        "destino": "C",
        "tipo": "Movimiento bIII-bVI por cuartas"
      },
      {
        "origen": "C",
        "destino": "Em",
        "tipo": "Vuelta modal bVI-i sin sensible"
      },
      {
        "origen": "Em",
        "destino": "A5",
        "tipo": "Golpe al iv mayorizado sin tercera"
      },
      {
        "origen": "A5",
        "destino": "D",
        "tipo": "Enlace al bVII del estribillo"
      },
      {
        "origen": "D",
        "destino": "Em",
        "tipo": "Regreso bVII-i con distorsión abierta"
      }
    ],
    "esquema_colores": {
      "tonica": "#455A64",
      "color_modal": "#8D6E63",
      "subdominante": "#33691E"
    },
    "sensacion_emocional": "Áspero, resentido, resignado."
  },
  {
    "key": "rock-208",
    "coleccion": "armonia",
    "id": 208,
    "nombre": "Stoner con nota pedal (Riff en Re)",
    "geometria": "Anillos Concéntricos",
    "proposito": "Mantener el bajo clavado en la tónica mientras las quintas de arriba se mueven cromáticamente. El pedal genera fricción sin abandonar el centro.",
    "nodos_principales": [
      "D5",
      "F5",
      "G5",
      "Bb5",
      "C5"
    ],
    "conexiones_flechas": [
      {
        "origen": "D5",
        "destino": "F5",
        "tipo": "Ascenso al bIII sobre pedal de tónica"
      },
      {
        "origen": "F5",
        "destino": "G5",
        "tipo": "Ascenso bIII-IV del riff"
      },
      {
        "origen": "G5",
        "destino": "D5",
        "tipo": "Colapso al pedal de tónica"
      },
      {
        "origen": "D5",
        "destino": "Bb5",
        "tipo": "Caída al bVI en la sección lenta"
      },
      {
        "origen": "Bb5",
        "destino": "C5",
        "tipo": "Ascenso bVI-bVII"
      },
      {
        "origen": "C5",
        "destino": "D5",
        "tipo": "Resolución modal bVII-i sobre el pedal"
      }
    ],
    "esquema_colores": {
      "tonica": "#4E342E",
      "color_modal": "#795548",
      "pedal": "#212121",
      "subdominante": "#FF8F00"
    },
    "sensacion_emocional": "Denso, hipnótico, mineral."
  },
  {
    "key": "rock-209",
    "coleccion": "armonia",
    "id": 209,
    "nombre": "Punk I-IV-V a toda velocidad (Progresión en Sol)",
    "geometria": "Pentágono Conectado",
    "proposito": "Reducir la armonía a tres o cuatro bloques repetidos a tempo alto, con el vi como única sombra. Sirve para trabajar precisión rítmica antes que color armónico.",
    "nodos_principales": [
      "G",
      "C",
      "D",
      "Em",
      "A"
    ],
    "conexiones_flechas": [
      {
        "origen": "G",
        "destino": "C",
        "tipo": "Movimiento I-IV en negras rápidas"
      },
      {
        "origen": "C",
        "destino": "D",
        "tipo": "Ascenso IV-V"
      },
      {
        "origen": "D",
        "destino": "G",
        "tipo": "Cadencia V-I que reinicia el riff"
      },
      {
        "origen": "G",
        "destino": "Em",
        "tipo": "Descenso I-vi del puente"
      },
      {
        "origen": "Em",
        "destino": "C",
        "tipo": "Enlace vi-IV del puente"
      },
      {
        "origen": "A",
        "destino": "D",
        "tipo": "Dominante secundaria II7-V del último estribillo"
      },
      {
        "origen": "G",
        "destino": "A",
        "tipo": "Salto al II mayorizado para subir la energía"
      }
    ],
    "esquema_colores": {
      "tonica": "#212121",
      "subdominante": "#F44336",
      "dominante": "#FFEB3B"
    },
    "sensacion_emocional": "Urgente, tosco, eufórico."
  },
  {
    "key": "rock-210",
    "coleccion": "armonia",
    "id": 210,
    "nombre": "Rock sureño con doble guitarra (Jam en Sol)",
    "geometria": "Espiral Descendente",
    "proposito": "Alternar el color mixolidio del jam largo con un ii menor con séptima para las armonías de terceras. Pensado para solos extendidos sobre pocos acordes.",
    "nodos_principales": [
      "G",
      "F",
      "C",
      "Am7",
      "D",
      "Em"
    ],
    "conexiones_flechas": [
      {
        "origen": "G",
        "destino": "F",
        "tipo": "Descenso I-bVII mixolidio"
      },
      {
        "origen": "F",
        "destino": "C",
        "tipo": "Enlace bVII-IV por cuartas"
      },
      {
        "origen": "C",
        "destino": "G",
        "tipo": "Vuelta plagal IV-I del jam"
      },
      {
        "origen": "G",
        "destino": "Em",
        "tipo": "Desvío al vi de la sección cantada"
      },
      {
        "origen": "Em",
        "destino": "Am7",
        "tipo": "Descenso vi-ii por cuartas"
      },
      {
        "origen": "Am7",
        "destino": "D",
        "tipo": "ii-V que devuelve el impulso"
      },
      {
        "origen": "D",
        "destino": "G",
        "tipo": "Cadencia V-I antes de retomar el solo"
      }
    ],
    "esquema_colores": {
      "tonica": "#F9A825",
      "color_modal": "#6D4C41",
      "subdominante": "#558B2F",
      "dominante": "#EF6C00"
    },
    "sensacion_emocional": "Soleado, fraterno, extendido."
  },
  {
    "key": "rock-211",
    "coleccion": "armonia",
    "id": 211,
    "nombre": "Arena rock con suspensiones (Estribillo en Re)",
    "geometria": "Estrella Central con Órbitas Radial",
    "proposito": "Retrasar la resolución de la tónica con sus4 y add9 para que el estribillo suene enorme en las cuerdas al aire. El sus siempre cae al acorde plano.",
    "nodos_principales": [
      "Dsus4",
      "D",
      "A",
      "Bm",
      "G",
      "Gadd9"
    ],
    "conexiones_flechas": [
      {
        "origen": "Dsus4",
        "destino": "D",
        "tipo": "Resolución de la cuarta suspendida a la tercera"
      },
      {
        "origen": "D",
        "destino": "A",
        "tipo": "Movimiento I-V del estribillo"
      },
      {
        "origen": "A",
        "destino": "Bm",
        "tipo": "Ascenso V-vi que evita la cadencia"
      },
      {
        "origen": "Bm",
        "destino": "G",
        "tipo": "Descenso vi-IV por terceras"
      },
      {
        "origen": "G",
        "destino": "Gadd9",
        "tipo": "Coloreado del IV con novena agregada"
      },
      {
        "origen": "Gadd9",
        "destino": "Dsus4",
        "tipo": "Vuelta al I suspendido que reabre el ciclo"
      }
    ],
    "esquema_colores": {
      "tonica": "#1565C0",
      "subdominante": "#00897B",
      "dominante": "#FFD600",
      "color_suspendido": "#7E57C2"
    },
    "sensacion_emocional": "Enorme, luminoso, triunfal."
  },
  {
    "key": "rock-212",
    "coleccion": "armonia",
    "id": 212,
    "nombre": "Psicodélico modal en dórico (Vamp en Mi)",
    "geometria": "Onda Sinusoidal",
    "proposito": "Girar sobre un vamp dórico donde el IV mayor y el bIII con séptima mayor cuestionan el centro tonal. Ideal para drones, sitar y solos sin resolución.",
    "nodos_principales": [
      "Em",
      "A",
      "Cmaj7",
      "Bm7",
      "D"
    ],
    "conexiones_flechas": [
      {
        "origen": "Em",
        "destino": "A",
        "tipo": "Movimiento i-IV mayor característico del dórico"
      },
      {
        "origen": "A",
        "destino": "Em",
        "tipo": "Vuelta al i del vamp"
      },
      {
        "origen": "Em",
        "destino": "D",
        "tipo": "Descenso i-bVII del puente"
      },
      {
        "origen": "D",
        "destino": "Cmaj7",
        "tipo": "Descenso bVII-bVI con séptima mayor"
      },
      {
        "origen": "Cmaj7",
        "destino": "Bm7",
        "tipo": "Descenso bVI-v menor que niega la sensible"
      },
      {
        "origen": "Bm7",
        "destino": "Em",
        "tipo": "Cadencia modal v-i sin tensión dominante"
      }
    ],
    "esquema_colores": {
      "tonica": "#6A1B9A",
      "color_modal": "#00838F",
      "subdominante": "#43A047",
      "color_suspendido": "#EC407A"
    },
    "sensacion_emocional": "Flotante, caleidoscópico, suspendido."
  },
  {
    "key": "pop-301",
    "coleccion": "armonia",
    "id": 301,
    "nombre": "Los Cuatro Acordes y sus Rotaciones (I-V-vi-IV)",
    "geometria": "Círculo de Engranajes Consecutivos",
    "proposito": "Mostrar el bucle de cuatro acordes más usado del pop y cómo cambia el carácter según dónde arranques. Sirve para entender que vi-IV-I-V, IV-I-V-vi y I-V-vi-IV son el mismo círculo con otro punto de entrada.",
    "nodos_principales": [
      "C",
      "G",
      "Am",
      "F"
    ],
    "conexiones_flechas": [
      {
        "origen": "C",
        "destino": "G",
        "tipo": "Tónica a dominante (I-V)"
      },
      {
        "origen": "G",
        "destino": "Am",
        "tipo": "Dominante desviada a la relativa menor"
      },
      {
        "origen": "Am",
        "destino": "F",
        "tipo": "Descenso de tercera al subdominante"
      },
      {
        "origen": "F",
        "destino": "C",
        "tipo": "Resolución plagal que cierra el bucle"
      },
      {
        "origen": "Am",
        "destino": "C",
        "tipo": "Entrada alternativa: rotación que empieza en vi"
      }
    ],
    "esquema_colores": {
      "apertura": "#74B9FF",
      "tension": "#FDCB6E",
      "reposo": "#6C5CE7"
    },
    "sensacion_emocional": "Optimismo simple, arrastre colectivo"
  },
  {
    "key": "pop-302",
    "coleccion": "armonia",
    "id": 302,
    "nombre": "Doo-Wop de los 50 (I-vi-IV-V)",
    "geometria": "Cuadrilátero Rotativo",
    "proposito": "Fijar el bucle doo-wop, motor de las baladas de los años 50 y de medio siglo de pop posterior. Sirve para practicar el descenso I-vi y la tensión final del V que empuja a repetir.",
    "nodos_principales": [
      "C",
      "Am",
      "F",
      "G7"
    ],
    "conexiones_flechas": [
      {
        "origen": "C",
        "destino": "Am",
        "tipo": "Caída a la relativa menor"
      },
      {
        "origen": "Am",
        "destino": "F",
        "tipo": "Descenso al subdominante"
      },
      {
        "origen": "F",
        "destino": "G7",
        "tipo": "Ascenso subdominante a dominante"
      },
      {
        "origen": "G7",
        "destino": "C",
        "tipo": "Cadencia perfecta que reinicia la vuelta"
      }
    ],
    "esquema_colores": {
      "apertura": "#FAB1A0",
      "tension": "#E17055",
      "reposo": "#0984E3"
    },
    "sensacion_emocional": "Inocencia retro, baile lento"
  },
  {
    "key": "pop-303",
    "coleccion": "armonia",
    "id": 303,
    "nombre": "Cadencia Royal (IV-V-iii-vi)",
    "geometria": "Camino en Zig-Zag",
    "proposito": "Trabajar el giro de cuatro acordes típico del pop japonés y del anime, que arranca ya en movimiento sobre el IV y aterriza en el vi. Sirve para escribir estribillos épicos sin tocar la tónica.",
    "nodos_principales": [
      "Fmaj7",
      "G7",
      "Em7",
      "Am7"
    ],
    "conexiones_flechas": [
      {
        "origen": "Fmaj7",
        "destino": "G7",
        "tipo": "Ascenso IV-V"
      },
      {
        "origen": "G7",
        "destino": "Em7",
        "tipo": "Dominante frustrada al iii"
      },
      {
        "origen": "Em7",
        "destino": "Am7",
        "tipo": "Descenso de cuarta al vi"
      },
      {
        "origen": "Am7",
        "destino": "Fmaj7",
        "tipo": "Vuelta al subdominante para repetir el ciclo"
      }
    ],
    "esquema_colores": {
      "apertura": "#FF7675",
      "tension": "#FDCB6E",
      "reposo": "#6C5CE7"
    },
    "sensacion_emocional": "Nostalgia heroica, euforia juvenil"
  },
  {
    "key": "pop-304",
    "coleccion": "armonia",
    "id": 304,
    "nombre": "Suspensiones Abiertas (sus4 y sus2)",
    "geometria": "Onda Sinusoidal",
    "proposito": "Practicar el retardo de la tercera: cada acorde llega suspendido y recién después se define. Sirve para estrofas de pop luminoso donde querés evitar que se sienta mayor o menor demasiado rápido.",
    "nodos_principales": [
      "Dsus4",
      "D",
      "Asus2",
      "A",
      "Gadd9"
    ],
    "conexiones_flechas": [
      {
        "origen": "Dsus4",
        "destino": "D",
        "tipo": "Resolución de la cuarta a la tercera"
      },
      {
        "origen": "D",
        "destino": "Asus2",
        "tipo": "Paso al V con novena suspendida"
      },
      {
        "origen": "Asus2",
        "destino": "A",
        "tipo": "Definición del acorde dominante"
      },
      {
        "origen": "A",
        "destino": "Gadd9",
        "tipo": "Descenso al IV con color añadido"
      },
      {
        "origen": "Gadd9",
        "destino": "Dsus4",
        "tipo": "Retorno plagal a la suspensión inicial"
      }
    ],
    "esquema_colores": {
      "apertura": "#81ECEC",
      "tension": "#00B894",
      "reposo": "#0984E3"
    },
    "sensacion_emocional": "Amplitud, aire, expectativa suave"
  },
  {
    "key": "pop-305",
    "coleccion": "armonia",
    "id": 305,
    "nombre": "Salto de Semitono al Estribillo",
    "geometria": "Escalera de Pilares Paralelos",
    "proposito": "Modular un semitono arriba justo al entrar el estribillo, sin acorde de transición. Sirve para levantar la energía de golpe cuando la estrofa ya agotó su registro.",
    "nodos_principales": [
      "C",
      "F",
      "G",
      "Db",
      "Gb",
      "Ab"
    ],
    "conexiones_flechas": [
      {
        "origen": "C",
        "destino": "F",
        "tipo": "Movimiento I-IV de la estrofa"
      },
      {
        "origen": "F",
        "destino": "G",
        "tipo": "Ascenso al dominante que deja la frase abierta"
      },
      {
        "origen": "G",
        "destino": "Db",
        "tipo": "Salto directo por semitono ascendente a la tonalidad nueva"
      },
      {
        "origen": "Db",
        "destino": "Gb",
        "tipo": "Movimiento I-IV ya en el tono nuevo"
      },
      {
        "origen": "Gb",
        "destino": "Ab",
        "tipo": "Ascenso al dominante del tono nuevo"
      },
      {
        "origen": "Ab",
        "destino": "Db",
        "tipo": "Cadencia que afirma la modulación"
      }
    ],
    "esquema_colores": {
      "apertura": "#A29BFE",
      "tension": "#E84393",
      "reposo": "#00B894"
    },
    "sensacion_emocional": "Vértigo, empuje, subidón"
  },
  {
    "key": "pop-306",
    "coleccion": "armonia",
    "id": 306,
    "nombre": "Préstamo Modal (bVI y bVII)",
    "geometria": "Diagrama en X (Diamante Intersectado)",
    "proposito": "Meter acordes prestados del modo menor paralelo dentro de un pop mayor. Sirve para oscurecer un estribillo sin cambiar de tono y para lograr finales que suenan anchos y cinematográficos.",
    "nodos_principales": [
      "C",
      "Ab",
      "Bb",
      "F",
      "G"
    ],
    "conexiones_flechas": [
      {
        "origen": "C",
        "destino": "Ab",
        "tipo": "Préstamo del bVI desde el menor paralelo"
      },
      {
        "origen": "Ab",
        "destino": "Bb",
        "tipo": "Ascenso bVI-bVII por grado conjunto"
      },
      {
        "origen": "Bb",
        "destino": "C",
        "tipo": "Cadencia modal bVII-I sin sensible"
      },
      {
        "origen": "C",
        "destino": "F",
        "tipo": "Salida diatónica al subdominante"
      },
      {
        "origen": "F",
        "destino": "G",
        "tipo": "Ascenso al dominante para contrastar con la versión modal"
      }
    ],
    "esquema_colores": {
      "apertura": "#636E72",
      "tension": "#D63031",
      "reposo": "#FDCB6E"
    },
    "sensacion_emocional": "Épica gris, fuerza contenida"
  },
  {
    "key": "pop-307",
    "coleccion": "armonia",
    "id": 307,
    "nombre": "Balada de Bajo Descendente",
    "geometria": "Cascada Descendente",
    "proposito": "Armonizar una línea de bajo que baja por grados conjuntos usando inversiones. Sirve para baladas de piano donde la mano izquierda camina y la armonía parece moverse sola.",
    "nodos_principales": [
      "C",
      "G/B",
      "Am",
      "C/G",
      "Fmaj7",
      "G7"
    ],
    "conexiones_flechas": [
      {
        "origen": "C",
        "destino": "G/B",
        "tipo": "Dominante en inversión sobre bajo descendente"
      },
      {
        "origen": "G/B",
        "destino": "Am",
        "tipo": "Llegada al vi con el bajo en escalera"
      },
      {
        "origen": "Am",
        "destino": "C/G",
        "tipo": "Tónica en segunda inversión como paso"
      },
      {
        "origen": "C/G",
        "destino": "Fmaj7",
        "tipo": "Apoyo en el subdominante al fondo del descenso"
      },
      {
        "origen": "Fmaj7",
        "destino": "G7",
        "tipo": "Giro al dominante que corta la caída"
      },
      {
        "origen": "G7",
        "destino": "C",
        "tipo": "Resolución a la tónica en estado fundamental"
      }
    ],
    "esquema_colores": {
      "apertura": "#DFE6E9",
      "tension": "#B2BEC3",
      "reposo": "#6C5CE7"
    },
    "sensacion_emocional": "Melancolía serena, despedida"
  },
  {
    "key": "pop-308",
    "coleccion": "armonia",
    "id": 308,
    "nombre": "Pop Punk de Quintas",
    "geometria": "Matriz Rectangular",
    "proposito": "Tocar el bucle pop clásico con acordes de quinta y distorsión, donde importa el empuje más que el color. Sirve para estribillos rápidos en los que la guitarra apenas cambia de forma.",
    "nodos_principales": [
      "E5",
      "B5",
      "C#m",
      "A5"
    ],
    "conexiones_flechas": [
      {
        "origen": "E5",
        "destino": "B5",
        "tipo": "Tónica a dominante en quintas"
      },
      {
        "origen": "B5",
        "destino": "C#m",
        "tipo": "Único acorde menor del bucle, llegada al vi"
      },
      {
        "origen": "C#m",
        "destino": "A5",
        "tipo": "Descenso al subdominante"
      },
      {
        "origen": "A5",
        "destino": "E5",
        "tipo": "Resolución plagal a máquina"
      }
    ],
    "esquema_colores": {
      "apertura": "#00CEC9",
      "tension": "#FD79A8",
      "reposo": "#2D3436"
    },
    "sensacion_emocional": "Urgencia, rebeldía adolescente"
  },
  {
    "key": "pop-309",
    "coleccion": "armonia",
    "id": 309,
    "nombre": "Synthpop con el vi como Centro",
    "geometria": "Estrella Central con Órbitas Radial",
    "proposito": "Tratar el acorde menor relativo como tónica real y hacer girar todo alrededor. Sirve para pistas de sintetizador donde querés un centro melancólico que igual baile.",
    "nodos_principales": [
      "Am",
      "F",
      "C",
      "G",
      "Em",
      "Dm7"
    ],
    "conexiones_flechas": [
      {
        "origen": "Am",
        "destino": "F",
        "tipo": "Salida al bVI del centro menor"
      },
      {
        "origen": "F",
        "destino": "Am",
        "tipo": "Retorno radial al centro"
      },
      {
        "origen": "Am",
        "destino": "C",
        "tipo": "Salida al bIII, relativo mayor"
      },
      {
        "origen": "C",
        "destino": "Am",
        "tipo": "Retorno radial al centro"
      },
      {
        "origen": "Am",
        "destino": "G",
        "tipo": "Salida al bVII modal"
      },
      {
        "origen": "G",
        "destino": "Am",
        "tipo": "Cadencia modal bVII-i"
      },
      {
        "origen": "Am",
        "destino": "Em",
        "tipo": "Dominante menor sin sensible"
      },
      {
        "origen": "Em",
        "destino": "Dm7",
        "tipo": "Descenso al iv menor"
      },
      {
        "origen": "Dm7",
        "destino": "Am",
        "tipo": "Resolución plagal menor al centro"
      }
    ],
    "esquema_colores": {
      "apertura": "#6C5CE7",
      "tension": "#E84393",
      "reposo": "#2D3436",
      "brillo": "#00CEC9"
    },
    "sensacion_emocional": "Neón frío, tristeza bailable"
  },
  {
    "key": "pop-310",
    "coleccion": "armonia",
    "id": 310,
    "nombre": "Pre-Estribillo que Aprieta",
    "geometria": "Pirámides Superpuestas",
    "proposito": "Construir el puente de cuatro compases que acumula tensión antes del estribillo, subiendo por grados y frenando en una suspensión. Sirve para que la entrada del estribillo se sienta ganada.",
    "nodos_principales": [
      "Dm7",
      "Em7",
      "Fmaj7",
      "Gsus4",
      "G7"
    ],
    "conexiones_flechas": [
      {
        "origen": "Dm7",
        "destino": "Em7",
        "tipo": "Ascenso por grados ii-iii"
      },
      {
        "origen": "Em7",
        "destino": "Fmaj7",
        "tipo": "Ascenso por grados iii-IV"
      },
      {
        "origen": "Fmaj7",
        "destino": "Gsus4",
        "tipo": "Llegada al dominante con la tercera retenida"
      },
      {
        "origen": "Gsus4",
        "destino": "G7",
        "tipo": "Apertura de la suspensión y séptima de dominante"
      },
      {
        "origen": "G7",
        "destino": "Dm7",
        "tipo": "Corte antes de resolver para reiniciar el ascenso"
      }
    ],
    "esquema_colores": {
      "apertura": "#FFEAA7",
      "tension": "#E17055",
      "reposo": "#D63031"
    },
    "sensacion_emocional": "Aceleración, ansiedad linda"
  },
  {
    "key": "pop-311",
    "coleccion": "armonia",
    "id": 311,
    "nombre": "Acorde Pivote para Cambiar de Tono",
    "geometria": "Árbol de Decisiones",
    "proposito": "Usar un acorde que pertenece a las dos tonalidades como bisagra: el Am es vi en Do y ii en Sol. Sirve para modular sin que se escuche la costura.",
    "nodos_principales": [
      "C",
      "F",
      "Am",
      "D7",
      "G"
    ],
    "conexiones_flechas": [
      {
        "origen": "C",
        "destino": "F",
        "tipo": "Movimiento I-IV en la tonalidad de partida"
      },
      {
        "origen": "F",
        "destino": "Am",
        "tipo": "Llegada al acorde pivote, todavía oído como vi"
      },
      {
        "origen": "Am",
        "destino": "D7",
        "tipo": "Pivote reinterpretado como ii de la tonalidad nueva"
      },
      {
        "origen": "D7",
        "destino": "G",
        "tipo": "Cadencia que confirma el tono nuevo"
      },
      {
        "origen": "Am",
        "destino": "C",
        "tipo": "Rama alternativa: quedarse en el tono original"
      }
    ],
    "esquema_colores": {
      "apertura": "#55EFC4",
      "tension": "#FDCB6E",
      "reposo": "#0984E3"
    },
    "sensacion_emocional": "Giro inesperado, claridad nueva"
  },
  {
    "key": "pop-312",
    "coleccion": "armonia",
    "id": 312,
    "nombre": "Gancho de Dos Acordes",
    "geometria": "Línea Horizontal",
    "proposito": "Sostener una canción entera con un vaivén de dos acordes y reservar un tercero sólo para el final de la sección. Sirve cuando el interés tiene que venir de la melodía, el ritmo y la producción.",
    "nodos_principales": [
      "Cadd9",
      "Fmaj7",
      "G"
    ],
    "conexiones_flechas": [
      {
        "origen": "Cadd9",
        "destino": "Fmaj7",
        "tipo": "Vaivén I-IV con novena agregada"
      },
      {
        "origen": "Fmaj7",
        "destino": "Cadd9",
        "tipo": "Resolución plagal que reinicia el vaivén"
      },
      {
        "origen": "Fmaj7",
        "destino": "G",
        "tipo": "Escape al dominante sólo en el último compás"
      },
      {
        "origen": "G",
        "destino": "Cadd9",
        "tipo": "Cadencia de cierre de sección"
      }
    ],
    "esquema_colores": {
      "apertura": "#74B9FF",
      "reposo": "#00B894"
    },
    "sensacion_emocional": "Hipnosis amable, repetición"
  },
  {
    "key": "pop-313",
    "coleccion": "armonia",
    "id": 313,
    "nombre": "Mediante Cromática (I-III)",
    "geometria": "Pentágono Conectado",
    "proposito": "Saltar a un acorde mayor construido sobre el tercer grado, que no pertenece a la tonalidad y comparte una sola nota con la tónica. Sirve para abrir una puerta de color y después volver por el vi.",
    "nodos_principales": [
      "C",
      "E",
      "Am",
      "Fmaj7",
      "G"
    ],
    "conexiones_flechas": [
      {
        "origen": "C",
        "destino": "E",
        "tipo": "Mediante cromática mayor, tercera alterada"
      },
      {
        "origen": "E",
        "destino": "Am",
        "tipo": "Reinterpretación como dominante secundaria del vi"
      },
      {
        "origen": "Am",
        "destino": "Fmaj7",
        "tipo": "Descenso de tercera al subdominante"
      },
      {
        "origen": "Fmaj7",
        "destino": "G",
        "tipo": "Ascenso al dominante"
      },
      {
        "origen": "G",
        "destino": "C",
        "tipo": "Cadencia perfecta de regreso"
      }
    ],
    "esquema_colores": {
      "apertura": "#FD79A8",
      "tension": "#6C5CE7",
      "reposo": "#FFEAA7"
    },
    "sensacion_emocional": "Deslumbre, extrañeza dulce"
  },
  {
    "key": "soul-401",
    "coleccion": "armonia",
    "id": 401,
    "nombre": "ii-V-I con Novenas de Neo-Soul",
    "geometria": "Bucle Triangular Continuo",
    "proposito": "Tocar la cadencia básica del jazz con las extensiones que usa el neo-soul: novenas en el menor, trecena en el dominante, novena mayor en la tónica. Sirve para que un ii-V-I suene moderno y no a ejercicio.",
    "nodos_principales": [
      "Dm9",
      "G13",
      "Cmaj9",
      "Em9"
    ],
    "conexiones_flechas": [
      {
        "origen": "Dm9",
        "destino": "G13",
        "tipo": "Movimiento ii-V por cuartas"
      },
      {
        "origen": "G13",
        "destino": "Cmaj9",
        "tipo": "Resolución de dominante con extensiones"
      },
      {
        "origen": "Cmaj9",
        "destino": "Em9",
        "tipo": "Deslizamiento al iii como tónica sustituta"
      },
      {
        "origen": "Em9",
        "destino": "Dm9",
        "tipo": "Descenso por grados que reinicia la cadencia"
      }
    ],
    "esquema_colores": {
      "apertura": "#A29BFE",
      "tension": "#E17055",
      "reposo": "#00B894"
    },
    "sensacion_emocional": "Terciopelo, calma sensual"
  },
  {
    "key": "soul-402",
    "coleccion": "armonia",
    "id": 402,
    "nombre": "Vamp Funk de Dos Acordes",
    "geometria": "Onda Sinusoidal",
    "proposito": "Sostener un groove indefinido alternando un menor con novena y su dominante a distancia de cuarta. Sirve para jams, intros largas y todo lo que se construya sobre el ritmo antes que sobre el movimiento armónico.",
    "nodos_principales": [
      "Am9",
      "D13",
      "Bm7"
    ],
    "conexiones_flechas": [
      {
        "origen": "Am9",
        "destino": "D13",
        "tipo": "Vamp i-IV dórico"
      },
      {
        "origen": "D13",
        "destino": "Am9",
        "tipo": "Retorno al centro menor sin resolver"
      },
      {
        "origen": "Am9",
        "destino": "Bm7",
        "tipo": "Desvío al ii dórico como variación del vamp"
      },
      {
        "origen": "Bm7",
        "destino": "D13",
        "tipo": "Reingreso al vamp por el lado del IV"
      }
    ],
    "esquema_colores": {
      "apertura": "#00B894",
      "tension": "#FDCB6E",
      "reposo": "#2D3436"
    },
    "sensacion_emocional": "Cadera, insistencia, sudor"
  },
  {
    "key": "soul-403",
    "coleccion": "armonia",
    "id": 403,
    "nombre": "Cadencia Plagal Gospel (IV-iv-I)",
    "geometria": "Embudo Convergente",
    "proposito": "Oscurecer el subdominante antes de volver a la tónica: primero mayor, después menor, y recién entonces el reposo. Sirve para los finales de himno y para cualquier cierre que pida gravedad.",
    "nodos_principales": [
      "Fmaj7",
      "Fm7",
      "C",
      "C/G"
    ],
    "conexiones_flechas": [
      {
        "origen": "Fmaj7",
        "destino": "Fm7",
        "tipo": "Conversión del IV en subdominante menor"
      },
      {
        "origen": "Fm7",
        "destino": "C",
        "tipo": "Resolución plagal con sexta menor descendente"
      },
      {
        "origen": "C",
        "destino": "C/G",
        "tipo": "Tónica en segunda inversión para prolongar el reposo"
      },
      {
        "origen": "C/G",
        "destino": "Fmaj7",
        "tipo": "Vuelta al subdominante para repetir el amén"
      }
    ],
    "esquema_colores": {
      "apertura": "#FFEAA7",
      "tension": "#636E72",
      "reposo": "#0984E3"
    },
    "sensacion_emocional": "Recogimiento, consuelo, altura"
  },
  {
    "key": "soul-404",
    "coleccion": "armonia",
    "id": 404,
    "nombre": "Cadena de Dominantes Secundarias",
    "geometria": "Espiral Descendente",
    "proposito": "Encadenar dominantes que se resuelven uno en otro por cuartas hasta llegar a la tónica. Sirve para los puentes de gospel y soul donde cada acorde empuja al siguiente sin descanso.",
    "nodos_principales": [
      "C",
      "A7",
      "D7",
      "G7",
      "Em7"
    ],
    "conexiones_flechas": [
      {
        "origen": "C",
        "destino": "A7",
        "tipo": "Dominante secundaria del ii"
      },
      {
        "origen": "A7",
        "destino": "D7",
        "tipo": "Dominante secundaria del V, eslabón de la cadena"
      },
      {
        "origen": "D7",
        "destino": "G7",
        "tipo": "Resolución a otro dominante por cuarta"
      },
      {
        "origen": "G7",
        "destino": "C",
        "tipo": "Cadencia perfecta que cierra la espiral"
      },
      {
        "origen": "C",
        "destino": "Em7",
        "tipo": "Salida al iii para volver a empezar más arriba"
      },
      {
        "origen": "Em7",
        "destino": "A7",
        "tipo": "Reingreso a la cadena de dominantes"
      }
    ],
    "esquema_colores": {
      "apertura": "#E17055",
      "tension": "#D63031",
      "reposo": "#FFEAA7"
    },
    "sensacion_emocional": "Arrastre, fervor, vértigo"
  },
  {
    "key": "soul-405",
    "coleccion": "armonia",
    "id": 405,
    "nombre": "R&B de Acordes Once",
    "geometria": "Matriz Rectangular",
    "proposito": "Trabajar con acordes de undécima, donde la cuarta reemplaza a la tercera y todo queda flotando. Sirve para R&B de tempo medio en el que la armonía tiene que sonar borrosa y no dirigida.",
    "nodos_principales": [
      "Am11",
      "Dm11",
      "G11",
      "Cmaj9"
    ],
    "conexiones_flechas": [
      {
        "origen": "Am11",
        "destino": "Dm11",
        "tipo": "Movimiento por cuartas entre menores con undécima"
      },
      {
        "origen": "Dm11",
        "destino": "G11",
        "tipo": "Dominante con la tercera tapada por la cuarta"
      },
      {
        "origen": "G11",
        "destino": "Cmaj9",
        "tipo": "Resolución blanda a la tónica mayor"
      },
      {
        "origen": "Cmaj9",
        "destino": "Am11",
        "tipo": "Descenso de tercera al vi que reabre el ciclo"
      }
    ],
    "esquema_colores": {
      "apertura": "#81ECEC",
      "tension": "#A29BFE",
      "reposo": "#0984E3"
    },
    "sensacion_emocional": "Bruma, intimidad, suspensión"
  },
  {
    "key": "soul-406",
    "coleccion": "armonia",
    "id": 406,
    "nombre": "Slow Jam con Maj9",
    "geometria": "Cascada Descendente",
    "proposito": "Bajar por acordes de novena mayor y menor, sin dominantes fuertes, para sostener un tempo lento. Sirve para la balada de soul donde cada acorde tiene que durar dos compases sin aburrir.",
    "nodos_principales": [
      "Fmaj9",
      "Em7",
      "Dm9",
      "Cmaj9",
      "Bbmaj7"
    ],
    "conexiones_flechas": [
      {
        "origen": "Fmaj9",
        "destino": "Em7",
        "tipo": "Descenso por grado conjunto IV-iii"
      },
      {
        "origen": "Em7",
        "destino": "Dm9",
        "tipo": "Descenso por grado conjunto iii-ii"
      },
      {
        "origen": "Dm9",
        "destino": "Cmaj9",
        "tipo": "Llegada a la tónica sin pasar por el dominante"
      },
      {
        "origen": "Cmaj9",
        "destino": "Bbmaj7",
        "tipo": "Préstamo del bVII que prolonga la caída"
      },
      {
        "origen": "Bbmaj7",
        "destino": "Fmaj9",
        "tipo": "Resolución plagal al comienzo de la cascada"
      }
    ],
    "esquema_colores": {
      "apertura": "#FAB1A0",
      "tension": "#B2BEC3",
      "reposo": "#6C5CE7"
    },
    "sensacion_emocional": "Sábanas, lentitud, deseo"
  },
  {
    "key": "soul-407",
    "coleccion": "armonia",
    "id": 407,
    "nombre": "Dominantes Nueve Estáticos de Funk",
    "geometria": "Cuadrilátero Rotativo",
    "proposito": "Usar acordes de novena dominante como colores fijos, sin función de resolución: cada uno es un lugar donde quedarse. Sirve para riffs de metales y rasgueos de guitarra en dieciseisavos.",
    "nodos_principales": [
      "E9",
      "A9",
      "B9",
      "D9"
    ],
    "conexiones_flechas": [
      {
        "origen": "E9",
        "destino": "A9",
        "tipo": "Salto al IV manteniendo la estructura de novena"
      },
      {
        "origen": "A9",
        "destino": "E9",
        "tipo": "Regreso al centro sin resolución real"
      },
      {
        "origen": "E9",
        "destino": "B9",
        "tipo": "Apertura al V como otro color estático"
      },
      {
        "origen": "B9",
        "destino": "D9",
        "tipo": "Deslizamiento cromático descendente entre dominantes"
      },
      {
        "origen": "D9",
        "destino": "E9",
        "tipo": "Cadencia modal bVII-I del funk"
      }
    ],
    "esquema_colores": {
      "apertura": "#FDCB6E",
      "tension": "#D63031",
      "reposo": "#2D3436"
    },
    "sensacion_emocional": "Brillo metálico, chispa, calle"
  },
  {
    "key": "soul-408",
    "coleccion": "armonia",
    "id": 408,
    "nombre": "Turnaround Gospel de Cuatro Compases",
    "geometria": "Círculo de Engranajes Consecutivos",
    "proposito": "Rellenar los últimos compases de una sección para devolverla al principio, alterando el vi para que empuje más. Sirve para acompañar vueltas de coro y solos de órgano.",
    "nodos_principales": [
      "Cmaj7",
      "A7(b9)",
      "Dm7",
      "G13",
      "Ab7"
    ],
    "conexiones_flechas": [
      {
        "origen": "Cmaj7",
        "destino": "A7(b9)",
        "tipo": "Dominante secundaria del ii con novena menor"
      },
      {
        "origen": "A7(b9)",
        "destino": "Dm7",
        "tipo": "Resolución al ii diatónico"
      },
      {
        "origen": "Dm7",
        "destino": "G13",
        "tipo": "Movimiento ii-V del turnaround"
      },
      {
        "origen": "G13",
        "destino": "Cmaj7",
        "tipo": "Resolución que cierra la vuelta"
      },
      {
        "origen": "Dm7",
        "destino": "Ab7",
        "tipo": "Sustituto tritonal del dominante"
      },
      {
        "origen": "Ab7",
        "destino": "Cmaj7",
        "tipo": "Resolución cromática descendente a la tónica"
      }
    ],
    "esquema_colores": {
      "apertura": "#FFEAA7",
      "tension": "#E84393",
      "reposo": "#00B894"
    },
    "sensacion_emocional": "Vuelta caliente, arenga, gozo"
  },
  {
    "key": "soul-409",
    "coleccion": "armonia",
    "id": 409,
    "nombre": "Amén Extendido",
    "geometria": "Anillos Concéntricos",
    "proposito": "Estirar el cierre plagal de dos acordes en una sucesión de subdominantes cada vez más oscuros antes del reposo final. Sirve para terminar un tema con cuatro u ocho compases de pura cadencia.",
    "nodos_principales": [
      "F6",
      "Fm6",
      "Bb9",
      "C/G",
      "C6"
    ],
    "conexiones_flechas": [
      {
        "origen": "F6",
        "destino": "Fm6",
        "tipo": "Subdominante mayor que se vuelve menor"
      },
      {
        "origen": "Fm6",
        "destino": "Bb9",
        "tipo": "Rodeo por el subdominante del subdominante"
      },
      {
        "origen": "Bb9",
        "destino": "C/G",
        "tipo": "Cadencia modal bVII-I sobre el bajo del dominante"
      },
      {
        "origen": "C/G",
        "destino": "F6",
        "tipo": "Reapertura del anillo para otro amén"
      },
      {
        "origen": "C/G",
        "destino": "C6",
        "tipo": "Asentamiento final en la tónica con sexta"
      }
    ],
    "esquema_colores": {
      "apertura": "#FAB1A0",
      "tension": "#636E72",
      "reposo": "#0984E3",
      "brillo": "#FFEAA7"
    },
    "sensacion_emocional": "Solemnidad, gratitud, cierre"
  },
  {
    "key": "soul-410",
    "coleccion": "armonia",
    "id": 410,
    "nombre": "Vuelta Motown (I-vi-ii-V)",
    "geometria": "Camino en Zig-Zag",
    "proposito": "Rodar el bucle de cuatro acordes del soul clásico, con el ii en lugar del IV para que el bajo camine por cuartas. Sirve para temas de tempo medio con bajo protagónico.",
    "nodos_principales": [
      "C6",
      "Am7",
      "Dm7",
      "G7"
    ],
    "conexiones_flechas": [
      {
        "origen": "C6",
        "destino": "Am7",
        "tipo": "Descenso de tercera a la relativa menor"
      },
      {
        "origen": "Am7",
        "destino": "Dm7",
        "tipo": "Movimiento vi-ii por cuarta ascendente"
      },
      {
        "origen": "Dm7",
        "destino": "G7",
        "tipo": "Movimiento ii-V por cuarta ascendente"
      },
      {
        "origen": "G7",
        "destino": "C6",
        "tipo": "Cadencia perfecta que reinicia el bucle"
      }
    ],
    "esquema_colores": {
      "apertura": "#FD79A8",
      "tension": "#E17055",
      "reposo": "#00B894"
    },
    "sensacion_emocional": "Alegría vintage, swing liviano"
  },
  {
    "key": "soul-411",
    "coleccion": "armonia",
    "id": 411,
    "nombre": "Disco de Menores Séptima Paralelos",
    "geometria": "Escalera de Pilares Paralelos",
    "proposito": "Mover una misma estructura de menor séptima por grados de la escala, sin cambiar de forma en la guitarra o el teclado. Sirve para pistas de disco y house donde la armonía sube y baja como un bloque.",
    "nodos_principales": [
      "Am7",
      "Bm7",
      "Cmaj7",
      "Dm7",
      "Em7"
    ],
    "conexiones_flechas": [
      {
        "origen": "Am7",
        "destino": "Bm7",
        "tipo": "Traslado paralelo por grado conjunto"
      },
      {
        "origen": "Bm7",
        "destino": "Cmaj7",
        "tipo": "Ascenso al relativo mayor"
      },
      {
        "origen": "Cmaj7",
        "destino": "Dm7",
        "tipo": "Continuación del ascenso por grados"
      },
      {
        "origen": "Dm7",
        "destino": "Em7",
        "tipo": "Llegada al menor dominante sin sensible"
      },
      {
        "origen": "Em7",
        "destino": "Am7",
        "tipo": "Caída de cuarta al centro modal"
      }
    ],
    "esquema_colores": {
      "apertura": "#E84393",
      "tension": "#FDCB6E",
      "reposo": "#6C5CE7"
    },
    "sensacion_emocional": "Luces, giro, euforia nocturna"
  },
  {
    "key": "soul-412",
    "coleccion": "armonia",
    "id": 412,
    "nombre": "Quiet Storm con Extensiones",
    "geometria": "Hexágono Flotante",
    "proposito": "Armar una progresión de tempo lento donde ningún acorde es una tríada simple y los dominantes llegan siempre con trecena. Sirve para el soul nocturno de radio, con saxo y guitarra limpia.",
    "nodos_principales": [
      "Fmaj9",
      "Gm9",
      "C13",
      "Bbmaj9",
      "Am7",
      "D7(#9)"
    ],
    "conexiones_flechas": [
      {
        "origen": "Fmaj9",
        "destino": "Gm9",
        "tipo": "Ascenso I-ii con novenas"
      },
      {
        "origen": "Gm9",
        "destino": "C13",
        "tipo": "Movimiento ii-V con trecena"
      },
      {
        "origen": "C13",
        "destino": "Fmaj9",
        "tipo": "Resolución a la tónica mayor extendida"
      },
      {
        "origen": "Fmaj9",
        "destino": "Bbmaj9",
        "tipo": "Apertura plagal al IV"
      },
      {
        "origen": "Bbmaj9",
        "destino": "Am7",
        "tipo": "Descenso al iii como zona de paso"
      },
      {
        "origen": "Am7",
        "destino": "D7(#9)",
        "tipo": "Dominante secundaria alterada del ii"
      },
      {
        "origen": "D7(#9)",
        "destino": "Gm9",
        "tipo": "Resolución al ii que reingresa a la cadencia"
      }
    ],
    "esquema_colores": {
      "apertura": "#6C5CE7",
      "tension": "#E17055",
      "reposo": "#0984E3",
      "brillo": "#81ECEC"
    },
    "sensacion_emocional": "Noche, seda, confidencia"
  },
  {
    "key": "soul-413",
    "coleccion": "armonia",
    "id": 413,
    "nombre": "Groove sobre Pedal de Bajo",
    "geometria": "Estrella Central con Órbitas Radial",
    "proposito": "Dejar el bajo clavado en una nota mientras los acordes de arriba cambian, escritos como inversiones sobre ese pedal. Sirve para construir tensión en intros y puentes sin mover el groove.",
    "nodos_principales": [
      "Dm9",
      "G/D",
      "Bbmaj7/D",
      "F/D",
      "Dm11"
    ],
    "conexiones_flechas": [
      {
        "origen": "Dm9",
        "destino": "G/D",
        "tipo": "Subdominante dórico sobre pedal de tónica"
      },
      {
        "origen": "G/D",
        "destino": "Dm9",
        "tipo": "Retorno al acorde base del pedal"
      },
      {
        "origen": "Dm9",
        "destino": "Bbmaj7/D",
        "tipo": "bVI mayor sobre el mismo bajo"
      },
      {
        "origen": "Bbmaj7/D",
        "destino": "F/D",
        "tipo": "Deslizamiento al bIII sin mover el bajo"
      },
      {
        "origen": "F/D",
        "destino": "Dm11",
        "tipo": "Vuelta al centro menor con undécima"
      },
      {
        "origen": "Dm11",
        "destino": "Dm9",
        "tipo": "Alternancia interna del acorde de pedal"
      }
    ],
    "esquema_colores": {
      "apertura": "#00CEC9",
      "tension": "#FDCB6E",
      "reposo": "#2D3436"
    },
    "sensacion_emocional": "Trance, presión baja, acecho"
  },
  {
    "key": "soul-414",
    "coleccion": "armonia",
    "id": 414,
    "nombre": "Soul con Subdominante Menor",
    "geometria": "Cruz de Ejes Ortogonales",
    "proposito": "Comparar las tres versiones del subdominante en un mismo tono: mayor, dominante y menor, para elegir cuánto quiere doler el acorde antes de la tónica. Sirve para estribillos de soul con giro agridulce.",
    "nodos_principales": [
      "Cmaj7",
      "F7",
      "Fm7",
      "Bb9",
      "G7"
    ],
    "conexiones_flechas": [
      {
        "origen": "Cmaj7",
        "destino": "F7",
        "tipo": "Subdominante con séptima, color de blues"
      },
      {
        "origen": "F7",
        "destino": "Fm7",
        "tipo": "Conversión en subdominante menor prestada"
      },
      {
        "origen": "Fm7",
        "destino": "Cmaj7",
        "tipo": "Resolución plagal menor a la tónica"
      },
      {
        "origen": "Fm7",
        "destino": "Bb9",
        "tipo": "Extensión del área de subdominante menor"
      },
      {
        "origen": "Bb9",
        "destino": "Cmaj7",
        "tipo": "Cadencia modal bVII-I"
      },
      {
        "origen": "Cmaj7",
        "destino": "G7",
        "tipo": "Contraste con el eje dominante"
      },
      {
        "origen": "G7",
        "destino": "Cmaj7",
        "tipo": "Cadencia perfecta que reafirma el centro"
      }
    ],
    "esquema_colores": {
      "apertura": "#FFEAA7",
      "tension": "#636E72",
      "reposo": "#D63031"
    },
    "sensacion_emocional": "Dulzura herida, hondura"
  },
  {
    "key": "country-501",
    "coleccion": "armonia",
    "id": 501,
    "nombre": "Walk-up de bluegrass (I-IV con bajo caminante)",
    "geometria": "Escalera de Pilares Paralelos",
    "proposito": "Practicar el paso de I a IV rellenando el hueco con notas de paso en el bajo, como hace la guitarra rítmica en bluegrass. Sirve para que el cambio de acorde suene empujado y no cortado.",
    "nodos_principales": [
      "G",
      "C",
      "D7"
    ],
    "conexiones_flechas": [
      {
        "origen": "G",
        "destino": "C",
        "tipo": "Walk-up diatónico por el bajo (G-A-B-C)"
      },
      {
        "origen": "C",
        "destino": "D7",
        "tipo": "Ascenso por grado conjunto al dominante"
      },
      {
        "origen": "D7",
        "destino": "G",
        "tipo": "Cadencia auténtica V7-I"
      }
    ],
    "esquema_colores": {
      "tonica": "#FFD700",
      "subdominante": "#FF8C00",
      "dominante": "#C62828"
    },
    "sensacion_emocional": "Brillo, ruta abierta, baile directo."
  },
  {
    "key": "country-502",
    "coleccion": "armonia",
    "id": 502,
    "nombre": "Honky-tonk I-V-IV (vuelta invertida)",
    "geometria": "Bucle Triangular Continuo",
    "proposito": "Fijar el giro típico de honky-tonk donde el IV llega después del V y no antes, generando ese balanceo de bar. Ideal para tocar sobre un shuffle en dos tiempos.",
    "nodos_principales": [
      "A",
      "E7",
      "D"
    ],
    "conexiones_flechas": [
      {
        "origen": "A",
        "destino": "E7",
        "tipo": "Salto directo al dominante sin preparación"
      },
      {
        "origen": "E7",
        "destino": "D",
        "tipo": "Resolución desviada al subdominante"
      },
      {
        "origen": "D",
        "destino": "A",
        "tipo": "Cadencia plagal IV-I"
      }
    ],
    "esquema_colores": {
      "tonica": "#F9A825",
      "dominante": "#B71C1C",
      "subdominante": "#EF6C00"
    },
    "sensacion_emocional": "Cerveza, madera, swing torcido."
  },
  {
    "key": "country-503",
    "coleccion": "armonia",
    "id": 503,
    "nombre": "Western swing con sextas y disminuido de paso",
    "geometria": "Círculo de Engranajes Consecutivos",
    "proposito": "Entrenar el vocabulario de western swing: tónica con sexta, disminuido cromático como bisagra y turnaround ii-V. Sirve para armonizar melodías con sabor de orquesta de baile.",
    "nodos_principales": [
      "C6",
      "C#dim7",
      "Dm7",
      "G7"
    ],
    "conexiones_flechas": [
      {
        "origen": "C6",
        "destino": "C#dim7",
        "tipo": "Ascenso cromático de semitono al disminuido de paso"
      },
      {
        "origen": "C#dim7",
        "destino": "Dm7",
        "tipo": "Bisagra disminuida que desemboca en el ii"
      },
      {
        "origen": "Dm7",
        "destino": "G7",
        "tipo": "Movimiento ii-V por cuarta ascendente"
      },
      {
        "origen": "G7",
        "destino": "C6",
        "tipo": "Cadencia V7-I con sexta añadida"
      }
    ],
    "esquema_colores": {
      "tonica": "#FFB300",
      "acorde_de_paso": "#6D4C41",
      "predominante": "#EF6C00"
    },
    "sensacion_emocional": "Elegante, polvoriento, bailable."
  },
  {
    "key": "country-504",
    "coleccion": "armonia",
    "id": 504,
    "nombre": "Balada country I-vi-IV-V",
    "geometria": "Matriz Rectangular",
    "proposito": "Sostener una balada lenta con el giro más clásico de la canción country: tónica, relativo menor, subdominante y dominante. Sirve para versos largos y letras narrativas.",
    "nodos_principales": [
      "D",
      "Bm",
      "G",
      "A7"
    ],
    "conexiones_flechas": [
      {
        "origen": "D",
        "destino": "Bm",
        "tipo": "Descenso a la relativa menor por terceras"
      },
      {
        "origen": "Bm",
        "destino": "G",
        "tipo": "Caída de tercera al subdominante"
      },
      {
        "origen": "G",
        "destino": "A7",
        "tipo": "Ascenso de segunda al dominante"
      },
      {
        "origen": "A7",
        "destino": "D",
        "tipo": "Cadencia auténtica V7-I"
      }
    ],
    "esquema_colores": {
      "tonica": "#FFD54F",
      "relativa_menor": "#5C6BC0",
      "subdominante": "#FB8C00",
      "dominante": "#C62828"
    },
    "sensacion_emocional": "Nostalgia tibia, ruta nocturna."
  },
  {
    "key": "country-505",
    "coleccion": "armonia",
    "id": 505,
    "nombre": "Bluegrass con dominantes encadenadas",
    "geometria": "Espiral Descendente",
    "proposito": "Encadenar dominantes por quintas para armar el puente de un tema de bluegrass rápido. Sirve para entender cómo cada acorde prepara al siguiente sin escalas raras.",
    "nodos_principales": [
      "G",
      "E7",
      "A7",
      "D7"
    ],
    "conexiones_flechas": [
      {
        "origen": "G",
        "destino": "E7",
        "tipo": "Salida al dominante secundario (VI7)"
      },
      {
        "origen": "E7",
        "destino": "A7",
        "tipo": "Dominante de dominante por quinta descendente"
      },
      {
        "origen": "A7",
        "destino": "D7",
        "tipo": "Cadena de quintas hacia el V7"
      },
      {
        "origen": "D7",
        "destino": "G",
        "tipo": "Cierre V7-I"
      }
    ],
    "esquema_colores": {
      "tonica": "#FFC107",
      "dominante_secundario": "#8D6E63",
      "dominante": "#C62828"
    },
    "sensacion_emocional": "Velocidad, chispa, competencia."
  },
  {
    "key": "country-506",
    "coleccion": "armonia",
    "id": 506,
    "nombre": "Country modal en mixolidio (bVII sin tensión)",
    "geometria": "Camino en Zig-Zag",
    "proposito": "Trabajar el color mixolidio del country rockero, donde el bVII reemplaza al dominante y la tensión baja. Sirve para riffs de estrofa que no quieren resolver todo el tiempo.",
    "nodos_principales": [
      "G",
      "F",
      "C",
      "Dm"
    ],
    "conexiones_flechas": [
      {
        "origen": "G",
        "destino": "F",
        "tipo": "Descenso de tono al bVII mixolidio"
      },
      {
        "origen": "F",
        "destino": "C",
        "tipo": "Cadencia plagal interna bVII-IV"
      },
      {
        "origen": "C",
        "destino": "Dm",
        "tipo": "Ascenso de tono al v menor modal"
      },
      {
        "origen": "Dm",
        "destino": "G",
        "tipo": "Vuelta al centro modal sin dominante"
      }
    ],
    "esquema_colores": {
      "tonica_modal": "#FDD835",
      "grado_bvii": "#795548",
      "subdominante": "#EF6C00"
    },
    "sensacion_emocional": "Terroso, relajado, campo abierto."
  },
  {
    "key": "country-507",
    "coleccion": "armonia",
    "id": 507,
    "nombre": "Cadencia con sus4 tipo pedal steel",
    "geometria": "Onda Sinusoidal",
    "proposito": "Imitar el efecto de la pedal steel: retardar la tercera con un sus4 y dejar que caiga. Sirve para intros y finales donde querés que el acorde respire antes de definirse.",
    "nodos_principales": [
      "E",
      "Esus4",
      "A",
      "B7"
    ],
    "conexiones_flechas": [
      {
        "origen": "E",
        "destino": "Esus4",
        "tipo": "Suspensión de la tercera hacia la cuarta"
      },
      {
        "origen": "Esus4",
        "destino": "E",
        "tipo": "Resolución descendente de la suspensión"
      },
      {
        "origen": "E",
        "destino": "A",
        "tipo": "Salto de cuarta al subdominante"
      },
      {
        "origen": "A",
        "destino": "B7",
        "tipo": "Ascenso de tono al dominante"
      },
      {
        "origen": "B7",
        "destino": "E",
        "tipo": "Cadencia V7-I"
      }
    ],
    "esquema_colores": {
      "tonica": "#FFEB3B",
      "suspension": "#26A69A",
      "dominante": "#C62828"
    },
    "sensacion_emocional": "Suspiro metálico, amanecer lento."
  },
  {
    "key": "country-508",
    "coleccion": "armonia",
    "id": 508,
    "nombre": "Train beat sobre I-IV",
    "geometria": "Línea Horizontal Grave",
    "proposito": "Mantener el motor de un train beat con un vaivén mínimo entre I y IV, usando el I7 como pivote bluesero. Sirve para practicar rasgueo constante sin perder el pulso.",
    "nodos_principales": [
      "G",
      "G7",
      "C",
      "C6"
    ],
    "conexiones_flechas": [
      {
        "origen": "G",
        "destino": "G7",
        "tipo": "Bluesificación de la tónica con séptima menor"
      },
      {
        "origen": "G7",
        "destino": "C",
        "tipo": "Resolución de dominante local al IV"
      },
      {
        "origen": "C",
        "destino": "C6",
        "tipo": "Coloreado del IV con sexta"
      },
      {
        "origen": "C6",
        "destino": "G",
        "tipo": "Regreso plagal al I"
      }
    ],
    "esquema_colores": {
      "tonica": "#FFD600",
      "tonica_septima": "#F57F17",
      "subdominante": "#EF6C00"
    },
    "sensacion_emocional": "Traqueteo, avance, kilómetros."
  },
  {
    "key": "country-509",
    "coleccion": "armonia",
    "id": 509,
    "nombre": "Folk de acordes abiertos con pedal en D",
    "geometria": "Estrella Central con Órbitas Radial",
    "proposito": "Explotar la cuerda grave de D como pedal fijo mientras cambian los acordes arriba. Sirve para fingerpicking folk y afinaciones abiertas donde el bajo nunca se mueve.",
    "nodos_principales": [
      "D",
      "Dsus2",
      "G/D",
      "A/D"
    ],
    "conexiones_flechas": [
      {
        "origen": "D",
        "destino": "Dsus2",
        "tipo": "Apertura de la tríada quitando la tercera"
      },
      {
        "origen": "Dsus2",
        "destino": "G/D",
        "tipo": "Cambio de armonía sobre bajo pedal"
      },
      {
        "origen": "G/D",
        "destino": "A/D",
        "tipo": "Planing sobre pedal invariable"
      },
      {
        "origen": "A/D",
        "destino": "D",
        "tipo": "Resolución al I con el pedal ya presente"
      }
    ],
    "esquema_colores": {
      "tonica": "#FFCA28",
      "pedal_de_bajo": "#4E342E",
      "color_suspendido": "#00897B"
    },
    "sensacion_emocional": "Madera, calma, amplitud."
  },
  {
    "key": "country-510",
    "coleccion": "armonia",
    "id": 510,
    "nombre": "Outlaw country en menor",
    "geometria": "Cascada Descendente",
    "proposito": "Armar el clima áspero del country en modo menor con descenso natural y un dominante mayor prestado que aprieta el final. Sirve para letras duras y tempos medios.",
    "nodos_principales": [
      "Am",
      "G",
      "F",
      "E7"
    ],
    "conexiones_flechas": [
      {
        "origen": "Am",
        "destino": "G",
        "tipo": "Descenso diatónico i-bVII"
      },
      {
        "origen": "G",
        "destino": "F",
        "tipo": "Descenso diatónico bVII-bVI"
      },
      {
        "origen": "F",
        "destino": "E7",
        "tipo": "Caída de semitono al dominante mayor prestado"
      },
      {
        "origen": "E7",
        "destino": "Am",
        "tipo": "Cadencia V7-i con tercera mayor"
      }
    ],
    "esquema_colores": {
      "tonica_menor": "#607D8B",
      "grados_descendentes": "#8D6E63",
      "dominante_prestado": "#B71C1C"
    },
    "sensacion_emocional": "Polvo, rencor, camino sin vuelta."
  },
  {
    "key": "ambient-601",
    "coleccion": "armonia",
    "id": 601,
    "nombre": "Pedal point con acordes flotando",
    "geometria": "Anillos Concéntricos",
    "proposito": "Fijar un bajo inmóvil en C y hacer girar armonías encima para lograr quietud con movimiento interno. Sirve para camas de sintetizador y transiciones largas.",
    "nodos_principales": [
      "Cmaj9",
      "F/C",
      "G/C",
      "Dm7/C"
    ],
    "conexiones_flechas": [
      {
        "origen": "Cmaj9",
        "destino": "F/C",
        "tipo": "Cambio de tríada sobre pedal fijo"
      },
      {
        "origen": "F/C",
        "destino": "G/C",
        "tipo": "Planing de tono sobre pedal"
      },
      {
        "origen": "G/C",
        "destino": "Dm7/C",
        "tipo": "Rotación modal sin mover el bajo"
      },
      {
        "origen": "Dm7/C",
        "destino": "Cmaj9",
        "tipo": "Retorno a la tónica extendida"
      }
    ],
    "esquema_colores": {
      "pedal_de_bajo": "#1A237E",
      "armonia_flotante": "#4FC3F7",
      "tonica_extendida": "#B2EBF2"
    },
    "sensacion_emocional": "Suspensión, niebla, quietud amplia."
  },
  {
    "key": "ambient-602",
    "coleccion": "armonia",
    "id": 602,
    "nombre": "Cadena de sus2 y sus4 sin tercera",
    "geometria": "Hexágono Flotante",
    "proposito": "Trabajar armonía ambigua eliminando la tercera de todos los acordes, así nada suena claramente mayor ni menor. Sirve para pads que no comprometen el color de la melodía.",
    "nodos_principales": [
      "Dsus2",
      "Asus4",
      "Esus2",
      "Gsus2"
    ],
    "conexiones_flechas": [
      {
        "origen": "Dsus2",
        "destino": "Asus4",
        "tipo": "Deslizamiento de quinta entre suspendidos"
      },
      {
        "origen": "Asus4",
        "destino": "Esus2",
        "tipo": "Cambio de tipo de suspensión por quinta"
      },
      {
        "origen": "Esus2",
        "destino": "Gsus2",
        "tipo": "Planing de tercera menor sin resolver"
      },
      {
        "origen": "Gsus2",
        "destino": "Dsus2",
        "tipo": "Cierre circular sobre estructura abierta"
      }
    ],
    "esquema_colores": {
      "suspension_de_segunda": "#80DEEA",
      "suspension_de_cuarta": "#9FA8DA",
      "centro_ambiguo": "#ECEFF1"
    },
    "sensacion_emocional": "Vidrio, ambigüedad, aire frío."
  },
  {
    "key": "ambient-603",
    "coleccion": "armonia",
    "id": 603,
    "nombre": "Planing de maj7 paralelos",
    "geometria": "Camino en Zig-Zag",
    "proposito": "Mover la misma estructura de maj7 por semitonos y tonos sin función tonal, dejando que el color se imponga sobre la gramática. Sirve para escenas sin centro definido.",
    "nodos_principales": [
      "Cmaj7",
      "Dbmaj7",
      "Ebmaj7",
      "Fmaj7"
    ],
    "conexiones_flechas": [
      {
        "origen": "Cmaj7",
        "destino": "Dbmaj7",
        "tipo": "Planing cromático ascendente"
      },
      {
        "origen": "Dbmaj7",
        "destino": "Ebmaj7",
        "tipo": "Planing paralelo de tono"
      },
      {
        "origen": "Ebmaj7",
        "destino": "Fmaj7",
        "tipo": "Planing paralelo de tono"
      },
      {
        "origen": "Fmaj7",
        "destino": "Cmaj7",
        "tipo": "Caída de quinta que simula reposo"
      }
    ],
    "esquema_colores": {
      "estructura_paralela": "#4DD0E1",
      "punto_de_partida": "#B39DDB",
      "punto_de_llegada": "#E1BEE7"
    },
    "sensacion_emocional": "Deriva luminosa, ingravidez."
  },
  {
    "key": "ambient-604",
    "coleccion": "armonia",
    "id": 604,
    "nombre": "Lidio flotante para cine",
    "geometria": "Nube de Puntos Densos",
    "proposito": "Sostener el brillo lidio usando el II mayor como color permanente sobre tónica de F. Sirve para planos aéreos, asombro y descubrimiento.",
    "nodos_principales": [
      "Fmaj7",
      "G",
      "Am7",
      "Em7"
    ],
    "conexiones_flechas": [
      {
        "origen": "Fmaj7",
        "destino": "G",
        "tipo": "Ascenso al II mayor característico del lidio"
      },
      {
        "origen": "G",
        "destino": "Am7",
        "tipo": "Paso diatónico ascendente sin dominante"
      },
      {
        "origen": "Am7",
        "destino": "Em7",
        "tipo": "Rotación de terceras dentro del modo"
      },
      {
        "origen": "Em7",
        "destino": "Fmaj7",
        "tipo": "Retorno de semitono al centro lidio"
      }
    ],
    "esquema_colores": {
      "tonica_lidia": "#81D4FA",
      "grado_caracteristico": "#FFF59D",
      "grados_diatonicos": "#B3E5FC"
    },
    "sensacion_emocional": "Asombro, altura, luz limpia."
  },
  {
    "key": "ambient-605",
    "coleccion": "armonia",
    "id": 605,
    "nombre": "Mediantes cromáticas cinematográficas",
    "geometria": "Diagrama en X (Diamante Intersectado)",
    "proposito": "Conectar acordes mayores a distancia de tercera con una sola nota en común, el recurso más directo para que una escena cambie de escala sin modular formalmente.",
    "nodos_principales": [
      "C",
      "Ab",
      "E",
      "Eb"
    ],
    "conexiones_flechas": [
      {
        "origen": "C",
        "destino": "Ab",
        "tipo": "Mediante cromática descendente (bVI mayor)"
      },
      {
        "origen": "Ab",
        "destino": "E",
        "tipo": "Salto de mediante con nota común"
      },
      {
        "origen": "E",
        "destino": "Eb",
        "tipo": "Descenso cromático de semitono"
      },
      {
        "origen": "Eb",
        "destino": "C",
        "tipo": "Mediante ascendente de vuelta al centro"
      }
    ],
    "esquema_colores": {
      "centro_tonal": "#CE93D8",
      "mediante_baja": "#5C6BC0",
      "mediante_alta": "#FFB74D"
    },
    "sensacion_emocional": "Épico, extraño, escala enorme."
  },
  {
    "key": "ambient-606",
    "coleccion": "armonia",
    "id": 606,
    "nombre": "Loop hipnótico de dos acordes (con variante)",
    "geometria": "Bucle Triangular Continuo",
    "proposito": "Sostener un vaivén de dos acordes durante minutos y usar un tercer acorde sólo como desvío ocasional. Sirve para música de estado, no de narración.",
    "nodos_principales": [
      "Am9",
      "Fmaj7",
      "Dm9"
    ],
    "conexiones_flechas": [
      {
        "origen": "Am9",
        "destino": "Fmaj7",
        "tipo": "Vaivén de tercera menor descendente"
      },
      {
        "origen": "Fmaj7",
        "destino": "Am9",
        "tipo": "Regreso inmediato al loop base"
      },
      {
        "origen": "Fmaj7",
        "destino": "Dm9",
        "tipo": "Desvío ocasional al iv relativo"
      },
      {
        "origen": "Dm9",
        "destino": "Am9",
        "tipo": "Reinserción en el loop"
      }
    ],
    "esquema_colores": {
      "loop_base": "#4DB6AC",
      "acorde_de_desvio": "#7986CB",
      "fondo_modal": "#CFD8DC"
    },
    "sensacion_emocional": "Trance, repetición, respiración lenta."
  },
  {
    "key": "ambient-607",
    "coleccion": "armonia",
    "id": 607,
    "nombre": "Armonía cuartal ambiental",
    "geometria": "Pirámides Superpuestas",
    "proposito": "Apilar cuartas en lugar de terceras para obtener acordes sin jerarquía, escritos como sus4. Sirve para texturas de sintetizador que suenan modernas y neutras.",
    "nodos_principales": [
      "Dsus4",
      "Gsus4",
      "Csus4",
      "Asus4"
    ],
    "conexiones_flechas": [
      {
        "origen": "Dsus4",
        "destino": "Gsus4",
        "tipo": "Transporte de la estructura cuartal por cuarta"
      },
      {
        "origen": "Gsus4",
        "destino": "Csus4",
        "tipo": "Cadena de cuartas ascendentes"
      },
      {
        "origen": "Csus4",
        "destino": "Asus4",
        "tipo": "Salto cuartal que rompe la cadena"
      },
      {
        "origen": "Asus4",
        "destino": "Dsus4",
        "tipo": "Retorno cuartal al punto inicial"
      }
    ],
    "esquema_colores": {
      "estructura_cuartal": "#4FC3F7",
      "eje_de_transporte": "#7E57C2",
      "textura_de_fondo": "#E0E0E0"
    },
    "sensacion_emocional": "Cristalino, neutro, flotante."
  },
  {
    "key": "ambient-608",
    "coleccion": "armonia",
    "id": 608,
    "nombre": "Tonos enteros para transición onírica",
    "geometria": "Octágono de Enlaces Simétricos",
    "proposito": "Usar acordes aumentados y mayores separados por tono para borrar el centro tonal en un pasaje de sueño o desmayo. Sirve para cruzar de una escena a otra sin cadencia.",
    "nodos_principales": [
      "Caug",
      "D",
      "E",
      "Gb"
    ],
    "conexiones_flechas": [
      {
        "origen": "Caug",
        "destino": "D",
        "tipo": "Salida del aumentado por tono ascendente"
      },
      {
        "origen": "D",
        "destino": "E",
        "tipo": "Planing de tono entero"
      },
      {
        "origen": "E",
        "destino": "Gb",
        "tipo": "Planing de tono entero"
      },
      {
        "origen": "Gb",
        "destino": "Caug",
        "tipo": "Cierre simétrico sobre el aumentado"
      }
    ],
    "esquema_colores": {
      "acorde_aumentado": "#9575CD",
      "escala_simetrica": "#4DD0E1",
      "punto_de_fuga": "#F48FB1"
    },
    "sensacion_emocional": "Sueño, mareo, irrealidad."
  },
  {
    "key": "ambient-609",
    "coleccion": "armonia",
    "id": 609,
    "nombre": "Menores paralelos descendentes",
    "geometria": "Cascada Descendente",
    "proposito": "Bajar la misma tríada menor por grados conjuntos para producir una caída emocional continua sin resolución. Sirve para escenas de pérdida o desgaste.",
    "nodos_principales": [
      "Am",
      "Gm",
      "Fm",
      "Em"
    ],
    "conexiones_flechas": [
      {
        "origen": "Am",
        "destino": "Gm",
        "tipo": "Planing menor descendente de tono"
      },
      {
        "origen": "Gm",
        "destino": "Fm",
        "tipo": "Planing menor descendente de tono"
      },
      {
        "origen": "Fm",
        "destino": "Em",
        "tipo": "Planing menor descendente de semitono"
      },
      {
        "origen": "Em",
        "destino": "Am",
        "tipo": "Salto de cuarta que reinicia la caída"
      }
    ],
    "esquema_colores": {
      "inicio_de_caida": "#78909C",
      "descenso_paralelo": "#455A64",
      "punto_mas_bajo": "#263238"
    },
    "sensacion_emocional": "Duelo, hundimiento, gris."
  },
  {
    "key": "ambient-610",
    "coleccion": "armonia",
    "id": 610,
    "nombre": "Drone con tríadas superpuestas sobre D",
    "geometria": "Estrella Central con Órbitas Radial",
    "proposito": "Mantener una quinta vacía como drone y superponer tríadas encima para que el color cambie sin que el fondo se mueva. Sirve para intros largas y diseño sonoro.",
    "nodos_principales": [
      "D5",
      "A/D",
      "Bm/D",
      "G/D"
    ],
    "conexiones_flechas": [
      {
        "origen": "D5",
        "destino": "A/D",
        "tipo": "Superposición de tríada sobre drone"
      },
      {
        "origen": "A/D",
        "destino": "Bm/D",
        "tipo": "Rotación de tríada superior sobre bajo fijo"
      },
      {
        "origen": "Bm/D",
        "destino": "G/D",
        "tipo": "Planing de tríadas sobre drone"
      },
      {
        "origen": "G/D",
        "destino": "D5",
        "tipo": "Vuelta a la quinta desnuda"
      }
    ],
    "esquema_colores": {
      "drone_de_quinta": "#37474F",
      "triadas_superpuestas": "#4FC3F7",
      "color_pasajero": "#B39DDB"
    },
    "sensacion_emocional": "Vasto, ritual, inmóvil."
  },
  {
    "key": "metal-701",
    "coleccion": "armonia",
    "id": 701,
    "nombre": "Frigio i-bII (el choque de semitono)",
    "geometria": "Camino en Zig-Zag",
    "proposito": "Instalar el sonido frigio con el bII a un semitono de la tónica, el recurso más económico para que algo suene oscuro. Sirve para riffs de estrofa y tremolo picking.",
    "nodos_principales": [
      "Em",
      "F",
      "G",
      "Am"
    ],
    "conexiones_flechas": [
      {
        "origen": "Em",
        "destino": "F",
        "tipo": "Salto frigio de semitono al bII"
      },
      {
        "origen": "F",
        "destino": "Em",
        "tipo": "Regreso del bII a la tónica"
      },
      {
        "origen": "Em",
        "destino": "G",
        "tipo": "Ascenso al bIII relativo"
      },
      {
        "origen": "G",
        "destino": "Am",
        "tipo": "Paso diatónico al iv menor"
      },
      {
        "origen": "Am",
        "destino": "Em",
        "tipo": "Cadencia modal iv-i sin dominante"
      }
    ],
    "esquema_colores": {
      "tonica_frigia": "#212121",
      "grado_bii": "#B71C1C",
      "grados_modales": "#455A64"
    },
    "sensacion_emocional": "Amenaza, tensión seca, encierro."
  },
  {
    "key": "metal-702",
    "coleccion": "armonia",
    "id": 702,
    "nombre": "Power chords con tritono",
    "geometria": "Diagrama en X (Diamante Intersectado)",
    "proposito": "Usar el salto de tritono entre quintas paralelas como eje del riff, sin terceras que suavicen. Sirve para riffs de drop tuning donde importa la distancia, no la función.",
    "nodos_principales": [
      "E5",
      "Bb5",
      "A5",
      "F5"
    ],
    "conexiones_flechas": [
      {
        "origen": "E5",
        "destino": "Bb5",
        "tipo": "Salto de tritono entre quintas paralelas"
      },
      {
        "origen": "Bb5",
        "destino": "A5",
        "tipo": "Descenso cromático de semitono"
      },
      {
        "origen": "A5",
        "destino": "F5",
        "tipo": "Caída de tercera mayor"
      },
      {
        "origen": "F5",
        "destino": "E5",
        "tipo": "Cierre frigio de semitono descendente"
      }
    ],
    "esquema_colores": {
      "tonica_de_quintas": "#263238",
      "tritono": "#D32F2F",
      "grados_cromaticos": "#616161"
    },
    "sensacion_emocional": "Violencia, desequilibrio, filo."
  },
  {
    "key": "metal-703",
    "coleccion": "armonia",
    "id": 703,
    "nombre": "Eólico i-bVI-bVII",
    "geometria": "Bucle Triangular Continuo",
    "proposito": "Fijar el bucle menor natural más usado del metal melódico, donde el bVII reemplaza al dominante y todo queda dentro del modo. Sirve para estribillos épicos.",
    "nodos_principales": [
      "Am",
      "F",
      "G",
      "Dm"
    ],
    "conexiones_flechas": [
      {
        "origen": "Am",
        "destino": "F",
        "tipo": "Descenso de tercera al bVI"
      },
      {
        "origen": "F",
        "destino": "G",
        "tipo": "Ascenso de tono al bVII"
      },
      {
        "origen": "G",
        "destino": "Am",
        "tipo": "Cadencia modal bVII-i"
      },
      {
        "origen": "Am",
        "destino": "Dm",
        "tipo": "Apertura al iv menor"
      },
      {
        "origen": "Dm",
        "destino": "G",
        "tipo": "Enlace de cuarta hacia el bVII"
      }
    ],
    "esquema_colores": {
      "tonica_menor": "#1A237E",
      "grado_bvi": "#4527A0",
      "grado_bvii": "#00695C"
    },
    "sensacion_emocional": "Épico, melancólico, marcha."
  },
  {
    "key": "metal-704",
    "coleccion": "armonia",
    "id": 704,
    "nombre": "Frigio dominante (tónica mayor con bII)",
    "geometria": "Pentágono Conectado",
    "proposito": "Trabajar el modo frigio dominante: tónica mayor, segunda bemol y séptima menor, para riffs con sabor oriental y tensión constante. Sirve para solos exóticos sobre pedal.",
    "nodos_principales": [
      "E",
      "F",
      "Am",
      "G",
      "Bdim"
    ],
    "conexiones_flechas": [
      {
        "origen": "E",
        "destino": "F",
        "tipo": "Salto frigio de semitono con tónica mayor"
      },
      {
        "origen": "F",
        "destino": "Am",
        "tipo": "Enlace de tercera dentro del modo"
      },
      {
        "origen": "Am",
        "destino": "G",
        "tipo": "Descenso de tono al bVII"
      },
      {
        "origen": "G",
        "destino": "Bdim",
        "tipo": "Tensión al disminuido sobre el quinto grado"
      },
      {
        "origen": "Bdim",
        "destino": "E",
        "tipo": "Resolución al centro frigio dominante"
      }
    ],
    "esquema_colores": {
      "tonica_mayor_modal": "#EF6C00",
      "grado_bii": "#B71C1C",
      "acorde_disminuido": "#4A148C"
    },
    "sensacion_emocional": "Exótico, ardiente, inquietante."
  },
  {
    "key": "metal-705",
    "coleccion": "armonia",
    "id": 705,
    "nombre": "Disminuidos simétricos (ciclo de terceras menores)",
    "geometria": "Octágono de Enlaces Simétricos",
    "proposito": "Rotar el mismo acorde disminuido por terceras menores para generar tensión sin dirección, ideal para puentes y pasajes de barrido. Sirve para entender simetría en el mástil.",
    "nodos_principales": [
      "Cdim7",
      "Ebdim7",
      "Gbdim7",
      "Adim7"
    ],
    "conexiones_flechas": [
      {
        "origen": "Cdim7",
        "destino": "Ebdim7",
        "tipo": "Rotación simétrica por tercera menor"
      },
      {
        "origen": "Ebdim7",
        "destino": "Gbdim7",
        "tipo": "Rotación simétrica por tercera menor"
      },
      {
        "origen": "Gbdim7",
        "destino": "Adim7",
        "tipo": "Rotación simétrica por tercera menor"
      },
      {
        "origen": "Adim7",
        "destino": "Cdim7",
        "tipo": "Cierre del ciclo disminuido"
      }
    ],
    "esquema_colores": {
      "acorde_disminuido": "#4A148C",
      "eje_simetrico": "#212121",
      "tension_flotante": "#7B1FA2"
    },
    "sensacion_emocional": "Vértigo, caos ordenado, pánico."
  },
  {
    "key": "metal-706",
    "coleccion": "armonia",
    "id": 706,
    "nombre": "Doom lento con quintas desnudas",
    "geometria": "Línea Horizontal Grave",
    "proposito": "Sostener acordes de quinta durante compases enteros y moverlos lo mínimo, dejando que el peso lo haga el tempo y la distorsión. Sirve para riffs de doom y sludge.",
    "nodos_principales": [
      "D5",
      "Bb5",
      "C5",
      "G5"
    ],
    "conexiones_flechas": [
      {
        "origen": "D5",
        "destino": "Bb5",
        "tipo": "Descenso de tercera mayor al bVI"
      },
      {
        "origen": "Bb5",
        "destino": "C5",
        "tipo": "Ascenso de tono al bVII"
      },
      {
        "origen": "C5",
        "destino": "D5",
        "tipo": "Cadencia modal bVII-i en quintas"
      },
      {
        "origen": "D5",
        "destino": "G5",
        "tipo": "Caída al iv en registro grave"
      },
      {
        "origen": "G5",
        "destino": "D5",
        "tipo": "Regreso plagal en quintas"
      }
    ],
    "esquema_colores": {
      "tonica_grave": "#263238",
      "grado_bvi": "#3E2723",
      "grado_bvii": "#5D4037"
    },
    "sensacion_emocional": "Pesadez, lentitud, plomo."
  },
  {
    "key": "metal-707",
    "coleccion": "armonia",
    "id": 707,
    "nombre": "Progresión cromática descendente en quintas",
    "geometria": "Espiral Descendente",
    "proposito": "Bajar power chords semitono a semitono para crear una caída mecánica e inevitable. Sirve para pre-estribillos y breakdowns donde la armonía sólo tiene que empujar hacia abajo.",
    "nodos_principales": [
      "E5",
      "Eb5",
      "D5",
      "Db5"
    ],
    "conexiones_flechas": [
      {
        "origen": "E5",
        "destino": "Eb5",
        "tipo": "Descenso cromático de semitono"
      },
      {
        "origen": "Eb5",
        "destino": "D5",
        "tipo": "Descenso cromático de semitono"
      },
      {
        "origen": "D5",
        "destino": "Db5",
        "tipo": "Descenso cromático de semitono"
      },
      {
        "origen": "Db5",
        "destino": "E5",
        "tipo": "Salto de retorno que reinicia la caída"
      }
    ],
    "esquema_colores": {
      "punto_de_partida": "#37474F",
      "descenso_cromatico": "#212121",
      "reinicio": "#C62828"
    },
    "sensacion_emocional": "Derrumbe, presión, inevitable."
  },
  {
    "key": "metal-708",
    "coleccion": "armonia",
    "id": 708,
    "nombre": "Menor armónica con V7",
    "geometria": "Árbol de Decisiones",
    "proposito": "Meter el dominante mayor con séptima en un contexto menor para tener una resolución dura, más clásica que modal. Sirve para metal neoclásico y finales de estribillo.",
    "nodos_principales": [
      "Dm",
      "Gm",
      "A7",
      "Bb"
    ],
    "conexiones_flechas": [
      {
        "origen": "Dm",
        "destino": "Gm",
        "tipo": "Enlace i-iv por cuarta ascendente"
      },
      {
        "origen": "Gm",
        "destino": "A7",
        "tipo": "Ascenso de tono al dominante de la menor armónica"
      },
      {
        "origen": "A7",
        "destino": "Dm",
        "tipo": "Cadencia V7-i con tercera mayor"
      },
      {
        "origen": "Dm",
        "destino": "Bb",
        "tipo": "Desvío al bVI mayor"
      },
      {
        "origen": "Bb",
        "destino": "A7",
        "tipo": "Descenso de semitono al dominante"
      }
    ],
    "esquema_colores": {
      "tonica_menor": "#1B1B1B",
      "dominante_mayor": "#C62828",
      "grado_bvi": "#4527A0"
    },
    "sensacion_emocional": "Dramático, barroco, filoso."
  },
  {
    "key": "metal-709",
    "coleccion": "armonia",
    "id": 709,
    "nombre": "Thrash con pedal en la cuerda grave",
    "geometria": "Estrella Central con Órbitas Radial",
    "proposito": "Alternar la nota grave fija con quintas que se disparan hacia otros grados, el motor rítmico del thrash. Sirve para riffs de galope y palm mute constante.",
    "nodos_principales": [
      "E5",
      "G5",
      "F5",
      "Bb5"
    ],
    "conexiones_flechas": [
      {
        "origen": "E5",
        "destino": "G5",
        "tipo": "Disparo de tercera menor desde el pedal"
      },
      {
        "origen": "G5",
        "destino": "E5",
        "tipo": "Regreso inmediato al pedal grave"
      },
      {
        "origen": "E5",
        "destino": "F5",
        "tipo": "Golpe frigio de semitono"
      },
      {
        "origen": "F5",
        "destino": "Bb5",
        "tipo": "Salto de cuarta entre quintas"
      },
      {
        "origen": "Bb5",
        "destino": "E5",
        "tipo": "Vuelta al pedal por tritono"
      }
    ],
    "esquema_colores": {
      "pedal_grave": "#212121",
      "quintas_moviles": "#607D8B",
      "acento_de_tritono": "#D32F2F"
    },
    "sensacion_emocional": "Galope, furia, precisión."
  },
  {
    "key": "metal-710",
    "coleccion": "armonia",
    "id": 710,
    "nombre": "Djent con suspendidos y disonancias añadidas",
    "geometria": "Embudo Convergente",
    "proposito": "Combinar quintas de octavas bajas con acordes suspendidos y notas añadidas que chocan, para riffs rítmicos de métrica irregular. Sirve para trabajar color disonante sin perder groove.",
    "nodos_principales": [
      "F#5",
      "Gadd9",
      "Bsus4",
      "Dmaj7(#11)"
    ],
    "conexiones_flechas": [
      {
        "origen": "F#5",
        "destino": "Gadd9",
        "tipo": "Golpe de semitono hacia acorde con novena añadida"
      },
      {
        "origen": "Gadd9",
        "destino": "Bsus4",
        "tipo": "Enlace de tercera con suspensión sin resolver"
      },
      {
        "origen": "Bsus4",
        "destino": "Dmaj7(#11)",
        "tipo": "Apertura a estructura con oncena aumentada"
      },
      {
        "origen": "Dmaj7(#11)",
        "destino": "F#5",
        "tipo": "Colapso a la quinta desnuda inicial"
      }
    ],
    "esquema_colores": {
      "quinta_base": "#212121",
      "color_anadido": "#00838F",
      "disonancia_alterada": "#AD1457"
    },
    "sensacion_emocional": "Angular, mecánico, brillante y áspero."
  },

  /* --- biblioteca ampliada: 10 mapas más de Dark Western --- */
  {
    "key": "western-801",
    "coleccion": "western",
    "id": "western-801",
    "nombre": "Cabalgata al amanecer (Am)",
    "geometria": "escalera descendente en cascada",
    "proposito": "Sirve para armar el trote largo de una cabalgata: cuatro peldaños que bajan solos y nunca dejan de empujar hacia adelante. Se usa repitiendo el ciclo con galope constante en el bajo y dejando la melodía arriba en negras con puntillo. Al llegar al último peldaño se puede frenar la cabalgata o volver a arrancar sin cortar el pulso.",
    "nodos_principales": [
      "Am",
      "G",
      "F",
      "E7"
    ],
    "conexiones_flechas": [
      {
        "origen": "Am",
        "destino": "G",
        "tipo": "descenso de tono"
      },
      {
        "origen": "G",
        "destino": "F",
        "tipo": "descenso de tono"
      },
      {
        "origen": "F",
        "destino": "E7",
        "tipo": "descenso de semitono al dominante"
      },
      {
        "origen": "E7",
        "destino": "Am",
        "tipo": "cierre del ciclo, vuelta al galope"
      }
    ],
    "esquema_colores": {
      "tonica": "#8B2F1A",
      "dominante": "#D98324",
      "pasaje": "#A67C52",
      "polvo": "#E4CFA3"
    },
    "sensacion_emocional": "Arenoso, obstinado y sudado, con una urgencia seca que no se apura pero tampoco perdona."
  },
  {
    "key": "western-802",
    "coleccion": "western",
    "id": "western-802",
    "nombre": "Duelo a tres bandas (E frigio dominante)",
    "geometria": "triángulo equilátero con vértices enfrentados",
    "proposito": "Es el mapa del cara a cara: tres acordes que se miran sin bajar la mano, uno por cada pistolero. Se usa alternando los vértices en silencios largos, sin resolver nunca del todo, para estirar la tensión antes del disparo. El segundo grado napolitano es el que arma el sudor frío.",
    "nodos_principales": [
      "E7",
      "F",
      "Dm"
    ],
    "conexiones_flechas": [
      {
        "origen": "E7",
        "destino": "F",
        "tipo": "ascenso de semitono frigio"
      },
      {
        "origen": "F",
        "destino": "Dm",
        "tipo": "relativo menor, giro de mirada"
      },
      {
        "origen": "Dm",
        "destino": "E7",
        "tipo": "dominante recargado sin resolver"
      }
    ],
    "esquema_colores": {
      "tonica": "#4A1C1C",
      "dominante": "#C1272D",
      "tension": "#F2B33D"
    },
    "sensacion_emocional": "Inmóvil, filoso y sudoroso, como tres sombras clavadas al mediodía esperando el primer parpadeo."
  },
  {
    "key": "western-803",
    "coleccion": "western",
    "id": "western-803",
    "nombre": "Bajo cromático del enterrador (Dm)",
    "geometria": "línea horizontal en diagonal descendente",
    "proposito": "Mapa de línea de bajo cromática bajo un acorde que casi no se mueve: el bajo camina un semitono por compás mientras arriba queda el trémolo. Se usa para acompañar caminatas lentas, entierros y llegadas al pueblo. Cada escalón cromático cambia el color sin cambiar de tonalidad.",
    "nodos_principales": [
      "Dm",
      "Dm/C#",
      "Dm/C",
      "Dm/B",
      "Bb",
      "A7"
    ],
    "conexiones_flechas": [
      {
        "origen": "Dm",
        "destino": "Dm/C#",
        "tipo": "bajo baja un semitono"
      },
      {
        "origen": "Dm/C#",
        "destino": "Dm/C",
        "tipo": "bajo baja un semitono"
      },
      {
        "origen": "Dm/C",
        "destino": "Dm/B",
        "tipo": "bajo baja un semitono"
      },
      {
        "origen": "Dm/B",
        "destino": "Bb",
        "tipo": "el bajo cae en raíz propia"
      },
      {
        "origen": "Bb",
        "destino": "A7",
        "tipo": "descenso de semitono al dominante"
      },
      {
        "origen": "A7",
        "destino": "Dm",
        "tipo": "cadencia menor de vuelta"
      }
    ],
    "esquema_colores": {
      "tonica": "#2E2A26",
      "dominante": "#8C3B1E",
      "cromatismo": "#6B705C",
      "sombra": "#B7A98B"
    },
    "sensacion_emocional": "Fúnebre, resbaladizo y pesado, como un cajón arrastrado por la calle principal."
  },
  {
    "key": "western-804",
    "coleccion": "western",
    "id": "western-804",
    "nombre": "Tríadas aumentadas al mediodía (C / Am)",
    "geometria": "espiral de terceras mayores",
    "proposito": "Usa tríadas aumentadas para girar sin centro: cada una repite la anterior desplazada una tercera mayor, así que la espiral nunca aterriza. Se usa en planos de calor, alucinación y sed, con trémolo de guitarra y silbido arriba. Los dos acordes naturales al final son la única salida hacia tierra firme.",
    "nodos_principales": [
      "Caug",
      "Eaug",
      "Abaug",
      "Am",
      "C"
    ],
    "conexiones_flechas": [
      {
        "origen": "Caug",
        "destino": "Eaug",
        "tipo": "giro de tercera mayor"
      },
      {
        "origen": "Eaug",
        "destino": "Abaug",
        "tipo": "giro de tercera mayor"
      },
      {
        "origen": "Abaug",
        "destino": "Am",
        "tipo": "aterrizaje por voz cromática"
      },
      {
        "origen": "Am",
        "destino": "C",
        "tipo": "apertura al relativo mayor"
      },
      {
        "origen": "C",
        "destino": "Caug",
        "tipo": "quinta que se estira y vuelve a marear"
      }
    ],
    "esquema_colores": {
      "tonica": "#B8860B",
      "aumentado": "#E8C44A",
      "vertigo": "#F5EBC8",
      "sombra": "#7A5C1E"
    },
    "sensacion_emocional": "Deslumbrante, mareado y reverberante, como mirar el horizonte hasta que tiembla."
  },
  {
    "key": "western-805",
    "coleccion": "western",
    "id": "western-805",
    "nombre": "Pedal de tónica en el pueblo fantasma (Am)",
    "geometria": "núcleo con órbita radial alrededor del pedal",
    "proposito": "El bajo se clava en la tónica y toda la armonía gira arriba: el núcleo es Am y los satélites cambian una sola voz por vez. Se usa para sostener escenas de pueblo vacío, persianas golpeando y planos largos sin acción. Volver siempre al núcleo antes de pasar al satélite siguiente mantiene el vacío intacto.",
    "nodos_principales": [
      "Am",
      "Ammaj7",
      "Am7",
      "Am6",
      "Dm/A",
      "E7/A"
    ],
    "conexiones_flechas": [
      {
        "origen": "Am",
        "destino": "Ammaj7",
        "tipo": "la voz superior sube un semitono"
      },
      {
        "origen": "Ammaj7",
        "destino": "Am7",
        "tipo": "la voz superior baja un semitono"
      },
      {
        "origen": "Am7",
        "destino": "Am6",
        "tipo": "descenso de tono en la voz de arriba"
      },
      {
        "origen": "Am6",
        "destino": "Dm/A",
        "tipo": "subdominante sobre el mismo pedal"
      },
      {
        "origen": "Dm/A",
        "destino": "E7/A",
        "tipo": "dominante sin bajo propio"
      },
      {
        "origen": "E7/A",
        "destino": "Am",
        "tipo": "resolución que no mueve el bajo"
      }
    ],
    "esquema_colores": {
      "tonica": "#3B3A36",
      "dominante": "#9E4B2B",
      "orbita": "#7D8A79",
      "viento": "#D9D2BF"
    },
    "sensacion_emocional": "Hueco, suspendido y polvoriento, con una quietud que raspa como madera reseca."
  },
  {
    "key": "western-806",
    "coleccion": "western",
    "id": "western-806",
    "nombre": "Menor armónica en el cañón (Gm)",
    "geometria": "hexágono cerrado de menor armónica",
    "proposito": "Recorre los seis grados más útiles de la menor armónica en Gm, con la séptima aumentada como filo permanente. Se usa cuando hace falta amenaza sin resolver rápido: cada lado del hexágono es un paso legal y cualquier diagonal funciona como corte brusco. El dominante con novena bemol es la puerta de salida.",
    "nodos_principales": [
      "Gm",
      "Cm",
      "D7(b9)",
      "Eb",
      "F#dim7",
      "Gmmaj7"
    ],
    "conexiones_flechas": [
      {
        "origen": "Gm",
        "destino": "Cm",
        "tipo": "subdominante menor"
      },
      {
        "origen": "Cm",
        "destino": "D7(b9)",
        "tipo": "dominante de menor armónica"
      },
      {
        "origen": "D7(b9)",
        "destino": "Gm",
        "tipo": "cadencia menor tensa"
      },
      {
        "origen": "Gm",
        "destino": "Eb",
        "tipo": "sexta mayor prestada"
      },
      {
        "origen": "Eb",
        "destino": "F#dim7",
        "tipo": "disminuido que reemplaza al dominante"
      },
      {
        "origen": "F#dim7",
        "destino": "Gmmaj7",
        "tipo": "séptima aumentada que queda como filo"
      },
      {
        "origen": "Gmmaj7",
        "destino": "Gm",
        "tipo": "la séptima cae a la sexta y descansa"
      }
    ],
    "esquema_colores": {
      "tonica": "#2B3A45",
      "dominante": "#B5432A",
      "disminuido": "#5E4B7A",
      "roca": "#9C8B6E"
    },
    "sensacion_emocional": "Angosto, amenazante y metálico, como un eco de piedra que devuelve el disparo antes del disparo."
  },
  {
    "key": "western-807",
    "coleccion": "western",
    "id": "western-807",
    "nombre": "Sextas menores del sepulturero (Em)",
    "geometria": "rombo de cuatro esquinas",
    "proposito": "Mapa de acordes de sexta menor, ese color medio disminuido que suena a cruz de madera. Se usa en tempo lento, arpegiado, dejando la sexta sonando más de lo cómodo. Las diagonales del rombo permiten saltar directo del reposo al dominante cuando la escena necesita un golpe seco.",
    "nodos_principales": [
      "Em",
      "Em6",
      "Am6",
      "B7"
    ],
    "conexiones_flechas": [
      {
        "origen": "Em",
        "destino": "Em6",
        "tipo": "la quinta se abre a la sexta"
      },
      {
        "origen": "Em6",
        "destino": "Am6",
        "tipo": "misma calidad, cuarta arriba"
      },
      {
        "origen": "Am6",
        "destino": "B7",
        "tipo": "la sexta menor funciona como dominante disfrazado"
      },
      {
        "origen": "B7",
        "destino": "Em",
        "tipo": "cadencia menor al reposo"
      },
      {
        "origen": "Em",
        "destino": "B7",
        "tipo": "salto diagonal directo a la tensión"
      }
    ],
    "esquema_colores": {
      "tonica": "#3F4A3A",
      "dominante": "#8E2C2C",
      "sexta": "#C4A46B"
    },
    "sensacion_emocional": "Solemne, agrio y resignado, con el peso de una pala que ya cavó demasiado."
  },
  {
    "key": "western-808",
    "coleccion": "western",
    "id": "western-808",
    "nombre": "Suspensiones que el viento no resuelve (Dm)",
    "geometria": "clúster en nube, sin centro fijo",
    "proposito": "Todos los nodos son suspensiones y añadidos que jamás resuelven a tríada: la nube flota y se mueve por cercanía, no por función. Se usa en pasajes de espera, arena volando y decisiones que no se toman. La regla es que ningún acorde puede caer a su resolución obvia mientras el mapa esté activo.",
    "nodos_principales": [
      "Dsus4",
      "Dsus2",
      "Gsus2",
      "Asus4",
      "Bbadd9"
    ],
    "conexiones_flechas": [
      {
        "origen": "Dsus4",
        "destino": "Dsus2",
        "tipo": "la cuarta baja a la segunda sin pasar por la tercera"
      },
      {
        "origen": "Dsus2",
        "destino": "Gsus2",
        "tipo": "deriva por nota común"
      },
      {
        "origen": "Gsus2",
        "destino": "Asus4",
        "tipo": "traslado lateral de la suspensión"
      },
      {
        "origen": "Asus4",
        "destino": "Bbadd9",
        "tipo": "ascenso de semitono que evita la resolución"
      },
      {
        "origen": "Bbadd9",
        "destino": "Dsus4",
        "tipo": "vuelta a la nube por nota común"
      }
    ],
    "esquema_colores": {
      "tonica": "#6E7B8B",
      "suspension": "#A8B5A2",
      "aire": "#E6E1D3",
      "arena": "#C9B183"
    },
    "sensacion_emocional": "Flotante, incompleto y reseco, como una pregunta que se queda colgada en el aire caliente."
  },
  {
    "key": "western-809",
    "coleccion": "western",
    "id": "western-809",
    "nombre": "Emboscada en el desfiladero (Bm)",
    "geometria": "embudo convergente hacia el dominante",
    "proposito": "Cinco entradas anchas que se van angostando hasta caer todas en el mismo dominante: el mapa del cerco que se cierra. Se usa acelerando el ritmo armónico a medida que se avanza por el embudo, de cuatro compases a uno. Nada sale del embudo salvo por la boca final.",
    "nodos_principales": [
      "Bm",
      "G",
      "Em6",
      "C",
      "F#7(b9)"
    ],
    "conexiones_flechas": [
      {
        "origen": "Bm",
        "destino": "G",
        "tipo": "apertura al relativo mayor"
      },
      {
        "origen": "G",
        "destino": "Em6",
        "tipo": "estrechamiento hacia la sexta menor"
      },
      {
        "origen": "Em6",
        "destino": "C",
        "tipo": "napolitano que aparece de costado"
      },
      {
        "origen": "C",
        "destino": "F#7(b9)",
        "tipo": "salto de tritono al cierre del cerco"
      },
      {
        "origen": "F#7(b9)",
        "destino": "Bm",
        "tipo": "boca del embudo, resolución inevitable"
      }
    ],
    "esquema_colores": {
      "tonica": "#332C3F",
      "dominante": "#A32E2E",
      "cerco": "#5C6B5A",
      "luz": "#D8C7A0"
    },
    "sensacion_emocional": "Opresivo, acelerado y sin salida, con el pulso apretándose contra la pared de piedra."
  },
  {
    "key": "western-810",
    "coleccion": "western",
    "id": "western-810",
    "nombre": "Galope cruzado en zig-zag (Cm)",
    "geometria": "zig-zag entre dos ejes contrarios",
    "proposito": "Alterna en zig-zag entre el eje menor y los acordes prestados del mayor, sin quedarse dos veces del mismo lado. Se usa para persecuciones donde el terreno cambia: cada rebote del zig-zag es un corte de plano. El dominante aparece siempre en el rebote de arriba para que el golpe caiga a contratiempo.",
    "nodos_principales": [
      "Cm",
      "Ab",
      "G7",
      "Fm",
      "Bb"
    ],
    "conexiones_flechas": [
      {
        "origen": "Cm",
        "destino": "Ab",
        "tipo": "rebote a la sexta mayor prestada"
      },
      {
        "origen": "Ab",
        "destino": "G7",
        "tipo": "descenso de semitono al dominante"
      },
      {
        "origen": "G7",
        "destino": "Fm",
        "tipo": "resolución esquivada al subdominante menor"
      },
      {
        "origen": "Fm",
        "destino": "Bb",
        "tipo": "séptima prestada del modo eólico"
      },
      {
        "origen": "Bb",
        "destino": "Cm",
        "tipo": "cadencia plagal de vuelta al galope"
      },
      {
        "origen": "Cm",
        "destino": "G7",
        "tipo": "atajo diagonal a la tensión"
      }
    ],
    "esquema_colores": {
      "tonica": "#412F2A",
      "dominante": "#D9581E",
      "prestado": "#7E8C4A",
      "polvo": "#E0CCA8"
    },
    "sensacion_emocional": "Trepidante, brusco y desprolijo, con la energía de cascos cambiando de dirección sobre pedregullo."
  }
];
