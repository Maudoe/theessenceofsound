/* ============ The Essence of Sound — la forma de cada mapa ============
   Cada mapa trae escrita su geometría ("Estrella Central con Órbitas
   Radial", "Matriz / Grilla de 7x4", "Diagrama en X", "Hexágono
   Flotante"…). Hasta ahora ese dato se ignoraba y todo terminaba siendo
   el mismo círculo. Acá se traduce a un reparto de posiciones distinto
   según lo que el mapa dice ser.

   No es una ilustración a medida por mapa — son familias de formas — pero
   un embudo se ve como un embudo y una cascada baja en zigzag. */

const LIENZO = { w: 720, h: 720, cx: 360, cy: 360 };

function detectarGeometria(texto) {
  const g = quitarAcentos(String(texto || "")).toLowerCase();
  const tiene = (...palabras) => palabras.some((p) => g.includes(p));

  if (tiene("estrella", "radial", "orbita", "ancla central", "nucleo")) return "estrella";
  if (tiene("matriz", "grilla", "rejilla", "bloques rectangulares", "12 bloques")) return "grilla";
  if (tiene("arbol", "bifurcacion", "decisiones")) return "arbol";
  if (tiene("embudo", "convergente")) return "embudo";
  if (tiene("cruz", "ortogonal", "eje")) return "cruz";
  if (tiene("espejo", "bi-planar", "biplanar", "contrario", "lineas cruzadas")) return "espejo";
  if (tiene("piramide", "superpuestas")) return "piramide";
  if (tiene("cascada", "zig-zag", "zigzag", "escalon", "escalera", "pasarela", "descendente")) return "cascada";
  if (tiene("espiral")) return "espiral";
  if (tiene("nube", "cluster", "densos", "flotantes sin centro")) return "nube";
  if (tiene("hexagono")) return "hexagono";
  if (tiene("pentagon")) return "pentagono";
  if (tiene("octagono")) return "octagono";
  if (tiene("triangulo", "triangular", "tripartito")) return "triangulo";
  if (tiene("diamante", "cuadrilatero", "diagonal", "rombo", "en x")) return "diamante";
  if (tiene("linea horizontal", "muro horizontal", "vectores paralelos", "vias paralelas", "pilares")) return "linea";
  if (tiene("onda", "sinusoidal")) return "onda";
  if (tiene("anillos concentricos", "concentrica")) return "concentrico";
  return "circulo";
}

/* --- repartos --- */
function poligono(n, radio, vueltaInicial) {
  const out = [];
  const inicio = vueltaInicial === undefined ? -Math.PI / 2 : vueltaInicial;
  for (let i = 0; i < n; i++) {
    const a = inicio + (i * 2 * Math.PI) / n;
    out.push({ x: LIENZO.cx + radio * Math.cos(a), y: LIENZO.cy + radio * Math.sin(a) });
  }
  return out;
}

function radioParaCantidad(n) {
  if (n <= 3) return 170;
  if (n <= 5) return 205;
  if (n <= 8) return 235;
  if (n <= 12) return 258;
  return 275;
}

const REPARTOS = {
  circulo: (n) => poligono(n, radioParaCantidad(n)),

  triangulo: (n) => (n <= 3 ? poligono(n, 200) : REPARTOS.perimetro(n, 3)),
  diamante: (n) => (n <= 4 ? poligono(n, 215) : REPARTOS.perimetro(n, 4)),
  pentagono: (n) => (n <= 5 ? poligono(n, 225) : REPARTOS.perimetro(n, 5)),
  hexagono: (n) => (n <= 6 ? poligono(n, 235) : REPARTOS.perimetro(n, 6)),
  octagono: (n) => (n <= 8 ? poligono(n, 250) : REPARTOS.perimetro(n, 8)),

  /* Reparte los nodos sobre el perímetro de un polígono de L lados: así
     una figura de 3 lados con 7 acordes sigue leyéndose como un triángulo. */
  perimetro: (n, lados) => {
    const radio = radioParaCantidad(n);
    const vertices = poligono(lados, radio);
    const out = [];
    for (let i = 0; i < n; i++) {
      const t = (i / n) * lados;
      const lado = Math.floor(t) % lados;
      const f = t - Math.floor(t);
      const a = vertices[lado], b = vertices[(lado + 1) % lados];
      out.push({ x: a.x + (b.x - a.x) * f, y: a.y + (b.y - a.y) * f });
    }
    return out;
  },

  /* El primero (casi siempre la tónica) queda en el centro y el resto
     orbita alrededor. */
  estrella: (n) => {
    if (n <= 1) return [{ x: LIENZO.cx, y: LIENZO.cy }];
    const fuera = poligono(n - 1, radioParaCantidad(n - 1) + 10);
    return [{ x: LIENZO.cx, y: LIENZO.cy }].concat(fuera);
  },

  concentrico: (n) => {
    if (n <= 1) return [{ x: LIENZO.cx, y: LIENZO.cy }];
    const interno = Math.ceil(n / 2);
    return poligono(interno, 150).concat(poligono(n - interno, 265));
  },

  grilla: (n) => {
    const cols = Math.ceil(Math.sqrt(n * 1.35));
    const filas = Math.ceil(n / cols);
    const pasoX = Math.min(190, 560 / Math.max(cols - 1, 1));
    const pasoY = Math.min(150, 480 / Math.max(filas - 1, 1));
    const out = [];
    for (let i = 0; i < n; i++) {
      const c = i % cols, f = Math.floor(i / cols);
      out.push({
        x: LIENZO.cx + (c - (cols - 1) / 2) * pasoX,
        y: LIENZO.cy + (f - (filas - 1) / 2) * pasoY,
      });
    }
    return out;
  },

  cascada: (n) => {
    const pasoY = Math.min(130, 540 / Math.max(n - 1, 1));
    return Array.from({ length: n }, (_, i) => ({
      x: LIENZO.cx + (i % 2 === 0 ? -1 : 1) * Math.min(190, 60 + i * 18),
      y: 110 + i * pasoY,
    }));
  },

  escalera: (n) => REPARTOS.cascada(n),

  onda: (n) => {
    const pasoX = Math.min(170, 580 / Math.max(n - 1, 1));
    return Array.from({ length: n }, (_, i) => ({
      x: LIENZO.cx + (i - (n - 1) / 2) * pasoX,
      y: LIENZO.cy + Math.sin((i / Math.max(n - 1, 1)) * Math.PI * 2) * 150,
    }));
  },

  linea: (n) => {
    const pasoX = Math.min(180, 580 / Math.max(n - 1, 1));
    return Array.from({ length: n }, (_, i) => ({
      x: LIENZO.cx + (i - (n - 1) / 2) * pasoX,
      y: LIENZO.cy,
    }));
  },

  espiral: (n) => Array.from({ length: n }, (_, i) => {
    const t = i / Math.max(n - 1, 1);
    const a = -Math.PI / 2 + t * Math.PI * 2.4;
    const r = 90 + t * 190;
    return { x: LIENZO.cx + r * Math.cos(a), y: LIENZO.cy + r * Math.sin(a) };
  }),

  /* Boca ancha arriba, todo cayendo hacia un punto abajo. */
  embudo: (n) => {
    if (n <= 1) return [{ x: LIENZO.cx, y: LIENZO.cy }];
    const arriba = n - 1;
    const pasoX = Math.min(180, 520 / Math.max(arriba - 1, 1));
    const out = [];
    for (let i = 0; i < arriba; i++) {
      out.push({
        x: LIENZO.cx + (i - (arriba - 1) / 2) * pasoX,
        y: 150 + Math.abs(i - (arriba - 1) / 2) * 42,
      });
    }
    out.push({ x: LIENZO.cx, y: 600 });
    return out;
  },

  /* Cuatro brazos desde el centro. */
  cruz: (n) => {
    const out = [];
    const brazos = [[0, -1], [1, 0], [0, 1], [-1, 0]];
    for (let i = 0; i < n; i++) {
      const b = brazos[i % 4];
      const paso = Math.floor(i / 4) + 1;
      out.push({ x: LIENZO.cx + b[0] * paso * 115, y: LIENZO.cy + b[1] * paso * 115 });
    }
    return out;
  },

  /* Dos columnas enfrentadas: lo original a la izquierda, el reflejo a la
     derecha. */
  espejo: (n) => {
    const porLado = Math.ceil(n / 2);
    const pasoY = Math.min(140, 460 / Math.max(porLado - 1, 1));
    const out = [];
    for (let i = 0; i < n; i++) {
      const lado = i % 2 === 0 ? -1 : 1;
      const fila = Math.floor(i / 2);
      out.push({
        x: LIENZO.cx + lado * 185,
        y: 160 + fila * pasoY,
      });
    }
    return out;
  },

  piramide: (n) => {
    const out = [];
    let fila = 0, puestos = 0;
    while (puestos < n) {
      const enFila = Math.min(fila + 1, n - puestos);
      for (let i = 0; i < enFila; i++) {
        out.push({
          x: LIENZO.cx + (i - (enFila - 1) / 2) * 150,
          y: 150 + fila * 135,
        });
      }
      puestos += enFila;
      fila++;
    }
    return out;
  },

  /* Dispersión estable (sin Math.random: el mismo mapa se dibuja siempre
     igual). */
  nube: (n) => Array.from({ length: n }, (_, i) => {
    const a = i * 2.39996; // ángulo áureo
    const r = 70 + Math.sqrt(i / Math.max(n, 1)) * 230;
    return { x: LIENZO.cx + r * Math.cos(a), y: LIENZO.cy + r * Math.sin(a) };
  }),

  /* Por niveles, siguiendo las flechas desde el primer nodo. */
  arbol: (n, ctx) => {
    const nivel = new Array(n).fill(-1);
    const hijos = (ctx && ctx.hijos) || new Map();
    const cola = [0];
    nivel[0] = 0;
    while (cola.length) {
      const actual = cola.shift();
      (hijos.get(actual) || []).forEach((h) => {
        if (nivel[h] === -1) { nivel[h] = nivel[actual] + 1; cola.push(h); }
      });
    }
    let sueltos = Math.max(...nivel) + 1;
    for (let i = 0; i < n; i++) if (nivel[i] === -1) nivel[i] = sueltos;

    const porNivel = new Map();
    nivel.forEach((lv, i) => {
      if (!porNivel.has(lv)) porNivel.set(lv, []);
      porNivel.get(lv).push(i);
    });
    const niveles = Math.max(...nivel) + 1;
    const pasoY = Math.min(150, 520 / Math.max(niveles - 1, 1));
    const out = new Array(n);
    porNivel.forEach((indices, lv) => {
      indices.forEach((idx, k) => {
        out[idx] = {
          x: LIENZO.cx + (k - (indices.length - 1) / 2) * Math.min(200, 560 / Math.max(indices.length, 1)),
          y: 120 + lv * pasoY,
        };
      });
    });
    return out;
  },
};

/* ============ el esqueleto de la figura ============
   Sin esto los acordes quedan como puntos sueltos flotando. Estas líneas
   no son movimientos musicales — son la forma que el mapa declara ser:
   el contorno del polígono, los radios al centro, los anillos, la
   cuadrícula. Van muy tenues y no reciben el mouse: son el papel sobre el
   que están dibujadas las flechas, no las flechas. */

const FORMAS_RADIALES = new Set([
  "circulo", "triangulo", "diamante", "pentagono", "hexagono", "octagono",
  "estrella", "concentrico", "nube", "espiral", "perimetro",
]);

function centroide(puntos) {
  if (!puntos.length) return { x: LIENZO.cx, y: LIENZO.cy };
  const s = puntos.reduce((a, p) => ({ x: a.x + p.x, y: a.y + p.y }), { x: 0, y: 0 });
  return { x: s.x / puntos.length, y: s.y / puntos.length };
}

function linea(a, b) {
  return `M ${a.x} ${a.y} L ${b.x} ${b.y}`;
}

function esqueletoDeForma(clave, pos, ctx) {
  const trazos = [];   // { d, tipo }
  const aros = [];     // { cx, cy, r }
  if (pos.length < 2) return { trazos, aros };

  const centro = centroide(pos);

  if (FORMAS_RADIALES.has(clave)) {
    // en la estrella el primero es el eje: no entra en el contorno
    const hub = clave === "estrella" ? pos[0] : centro;
    const aro = clave === "estrella" ? pos.slice(1) : pos;

    aro.forEach((p) => trazos.push({ d: linea(hub, p), tipo: "radio" }));

    // contorno: uniendo los nodos por ángulo alrededor del eje
    const ordenados = aro
      .map((p) => ({ p, a: Math.atan2(p.y - hub.y, p.x - hub.x) }))
      .sort((u, v) => u.a - v.a)
      .map((o) => o.p);
    if (ordenados.length >= 3) {
      const d = ordenados.map((p, i) => `${i ? "L" : "M"} ${p.x} ${p.y}`).join(" ") + " Z";
      trazos.push({ d, tipo: "contorno" });
    } else if (ordenados.length === 2) {
      trazos.push({ d: linea(ordenados[0], ordenados[1]), tipo: "contorno" });
    }

    // anillos de referencia, como en un radar
    const radioMax = Math.max(...aro.map((p) => Math.hypot(p.x - hub.x, p.y - hub.y)));
    [0.45, 0.75].forEach((f) => aros.push({ cx: hub.x, cy: hub.y, r: radioMax * f }));
    return { trazos, aros };
  }

  if (clave === "grilla") {
    // una línea por fila y por columna, agrupando por coordenada
    const agrupar = (clave) => {
      const g = new Map();
      pos.forEach((p) => {
        const k = Math.round(p[clave]);
        if (!g.has(k)) g.set(k, []);
        g.get(k).push(p);
      });
      return [...g.values()].filter((l) => l.length > 1);
    };
    agrupar("y").forEach((fila) => {
      const xs = fila.map((p) => p.x);
      trazos.push({ d: linea({ x: Math.min(...xs), y: fila[0].y }, { x: Math.max(...xs), y: fila[0].y }), tipo: "malla" });
    });
    agrupar("x").forEach((col) => {
      const ys = col.map((p) => p.y);
      trazos.push({ d: linea({ x: col[0].x, y: Math.min(...ys) }, { x: col[0].x, y: Math.max(...ys) }), tipo: "malla" });
    });
    // diagonales suaves, para que se lea como malla y no como tabla
    pos.forEach((p, i) => {
      const sig = pos[i + 1];
      if (sig && Math.abs(sig.y - p.y) > 1) trazos.push({ d: linea(p, sig), tipo: "malla" });
    });
    return { trazos, aros };
  }

  if (clave === "cruz") {
    const xs = pos.map((p) => p.x), ys = pos.map((p) => p.y);
    trazos.push({ d: linea({ x: Math.min(...xs), y: centro.y }, { x: Math.max(...xs), y: centro.y }), tipo: "eje" });
    trazos.push({ d: linea({ x: centro.x, y: Math.min(...ys) }, { x: centro.x, y: Math.max(...ys) }), tipo: "eje" });
    pos.forEach((p) => trazos.push({ d: linea(centro, p), tipo: "radio" }));
    return { trazos, aros };
  }

  if (clave === "embudo") {
    const vertice = pos[pos.length - 1];
    pos.slice(0, -1).forEach((p) => trazos.push({ d: linea(p, vertice), tipo: "radio" }));
    const boca = pos.slice(0, -1);
    if (boca.length > 1) {
      const d = boca.map((p, i) => `${i ? "L" : "M"} ${p.x} ${p.y}`).join(" ");
      trazos.push({ d, tipo: "contorno" });
    }
    return { trazos, aros };
  }

  if (clave === "arbol" && ctx && ctx.hijos) {
    ctx.hijos.forEach((lista, padre) => {
      lista.forEach((h) => {
        if (pos[padre] && pos[h]) trazos.push({ d: linea(pos[padre], pos[h]), tipo: "rama" });
      });
    });
    return { trazos, aros };
  }

  if (clave === "espejo") {
    const izq = pos.filter((_, i) => i % 2 === 0);
    const der = pos.filter((_, i) => i % 2 === 1);
    [izq, der].forEach((col) => {
      if (col.length > 1) {
        trazos.push({ d: col.map((p, i) => `${i ? "L" : "M"} ${p.x} ${p.y}`).join(" "), tipo: "malla" });
      }
    });
    izq.forEach((p, i) => { if (der[i]) trazos.push({ d: linea(p, der[i]), tipo: "eje" }); });
    return { trazos, aros };
  }

  // secuenciales: cascada, línea, onda, escalera, pirámide…
  const d = pos.map((p, i) => `${i ? "L" : "M"} ${p.x} ${p.y}`).join(" ");
  trazos.push({ d, tipo: "recorrido" });
  return { trazos, aros };
}

/* Punto de entrada: dado el mapa y sus nodos, dónde va cada uno. */
function posicionesDelMapa(mapa, nodos, conexionesPorIndice) {
  const clave = detectarGeometria(mapa.geometria);
  const fn = REPARTOS[clave] || REPARTOS.circulo;
  const ctx = { hijos: conexionesPorIndice };
  let pos;
  try {
    pos = fn(nodos.length, ctx);
  } catch (e) {
    pos = REPARTOS.circulo(nodos.length);
  }
  // red de seguridad: ningún nodo fuera del lienzo
  const margen = 70;
  const posiciones = pos.map((p) => ({
    x: Math.max(margen, Math.min(LIENZO.w - margen, p.x)),
    y: Math.max(margen, Math.min(LIENZO.h - margen, p.y)),
  }));
  posiciones.forma = clave;
  posiciones.esqueleto = esqueletoDeForma(clave, posiciones, ctx);
  return posiciones;
}
