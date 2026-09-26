/* ============ The Essence of Sound — efectos de entrada y ambiente ============
   Cuatro cosas independientes entre sí:
   1) el loader de arranque (video/imagen que se revela sobre negro, con
      viñeta, y elige desktop o mobile solo);
   2) la antorcha que sigue al mouse;
   3) un parallax chico en unos pocos contenedores, atado al mouse;
   4) el pulso orgánico de una nota cuando le hacés hover — cada una con su
      propio ritmo, para que no todas lateen juntas.
   Todo respeta prefers-reduced-motion: quien lo pide no ve nada de esto
   animado, va directo al contenido. */

/* ---------------- 1) loader ---------------- */
(function loaderDeEntrada() {
  const loader = document.getElementById("loader");
  const escena = document.getElementById("loader-escena");
  const titulo = document.getElementById("loader-titulo");
  if (!loader || !escena) return;

  const reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) { loader.remove(); return; }

  const SVG_NS = "http://www.w3.org/2000/svg";
  const ladoLienzo = (typeof LIENZO !== "undefined" && LIENZO.w) || 720;

  // el fondo (astrolabio + estrellas) va en su propio <svg>, detrás; el
  // gráfico de acordes es el de verdad — el mismo renderMapaPropio que
  // dibuja cualquier mapa cuando lo abrís desde "Mapas armónicos", no una
  // versión de marketing aparte. Así tiene la telaraña, las flechas
  // curvas con su punta y las notas debajo de cada nodo, igual que en la
  // app.
  const fondo = document.createElementNS(SVG_NS, "svg");
  fondo.setAttribute("viewBox", `0 0 ${ladoLienzo} ${ladoLienzo}`);
  fondo.setAttribute("preserveAspectRatio", "xMidYMid meet");
  fondo.setAttribute("class", "loader-fondo-svg");

  const capaMarco = document.createElementNS(SVG_NS, "g");
  capaMarco.setAttribute("opacity", "0.22");
  capaMarco.setAttribute("stroke", "#e9dcb8");
  capaMarco.setAttribute("fill", "none");
  const cx = ladoLienzo / 2, cy = ladoLienzo / 2;
  const eje = document.createElementNS(SVG_NS, "line");
  eje.setAttribute("x1", cx); eje.setAttribute("y1", 0);
  eje.setAttribute("x2", cx); eje.setAttribute("y2", ladoLienzo);
  eje.setAttribute("stroke-width", "1");
  capaMarco.appendChild(eje);

  // los aros no son fijos: cada uno gira a su propia velocidad y en su
  // propio sentido, con el trazo punteado para que el giro se note.
  [0.2, 0.34, 0.48].forEach((frac, i) => {
    const aro = document.createElementNS(SVG_NS, "circle");
    aro.setAttribute("cx", cx); aro.setAttribute("cy", cy);
    aro.setAttribute("r", ladoLienzo * frac);
    aro.setAttribute("stroke-width", "1");
    aro.setAttribute("stroke-dasharray", i === 1 ? "2 10" : "1 3 9 3");
    aro.setAttribute("class", "loader-marco-giro");
    aro.style.setProperty("--giro-dur", (55 + i * 28) + "s");
    aro.style.setProperty("--giro-dir", i % 2 ? "-1" : "1");
    capaMarco.appendChild(aro);
  });

  // un par de figuras geométricas más, como si fueran otros engranajes
  // del mismo instrumento — un hexágono y un triángulo, bien tenues.
  function poligono(lados, radio, rotarInicial) {
    const pts = [];
    for (let p = 0; p < lados; p++) {
      const ang = rotarInicial + (p / lados) * Math.PI * 2;
      pts.push((cx + Math.cos(ang) * radio).toFixed(1) + "," + (cy + Math.sin(ang) * radio).toFixed(1));
    }
    const fig = document.createElementNS(SVG_NS, "polygon");
    fig.setAttribute("points", pts.join(" "));
    fig.setAttribute("stroke-width", "1");
    return fig;
  }
  const hexagono = poligono(6, ladoLienzo * 0.4, 0);
  hexagono.setAttribute("class", "loader-marco-giro");
  hexagono.style.setProperty("--giro-dur", "140s");
  hexagono.style.setProperty("--giro-dir", "-1");
  capaMarco.appendChild(hexagono);

  const triangulo = poligono(3, ladoLienzo * 0.29, -Math.PI / 2);
  triangulo.setAttribute("class", "loader-marco-giro");
  triangulo.style.setProperty("--giro-dur", "95s");
  triangulo.style.setProperty("--giro-dir", "1");
  capaMarco.appendChild(triangulo);

  [0.04, 0.96].forEach((frac) => {
    const marca = document.createElementNS(SVG_NS, "circle");
    marca.setAttribute("cx", cx); marca.setAttribute("cy", ladoLienzo * frac);
    marca.setAttribute("r", "6");
    marca.setAttribute("stroke-width", "1.2");
    capaMarco.appendChild(marca);
  });

  const capaEstrellas = document.createElementNS(SVG_NS, "g");
  for (let e = 0; e < 40; e++) {
    const estrella = document.createElementNS(SVG_NS, "circle");
    estrella.setAttribute("cx", (Math.random() * ladoLienzo).toFixed(1));
    estrella.setAttribute("cy", (Math.random() * ladoLienzo).toFixed(1));
    estrella.setAttribute("r", (Math.random() * 1.1 + 0.3).toFixed(2));
    estrella.setAttribute("fill", "#cfe8ff");
    estrella.setAttribute("opacity", (Math.random() * 0.5 + 0.15).toFixed(2));
    capaEstrellas.appendChild(estrella);
  }
  fondo.appendChild(capaEstrellas);
  fondo.appendChild(capaMarco);
  escena.appendChild(fondo);

  // el mapa real. "Préstamo Modal (bVI y bVII)": C-Ab-Bb-F-G, el mismo
  // que se ve al abrir ese mapa desde la app.
  const svgMapa = document.createElementNS(SVG_NS, "svg");
  svgMapa.setAttribute("class", "sh-svg loader-mapa-svg");
  escena.appendChild(svgMapa);

  try {
    const mapa = MAPAS_ARMONICOS.find((m) => m.key === "pop-306") || MAPAS_ARMONICOS[0];
    renderMapaPropio(mapa, svgMapa);

    // cada nota, viva desde el arranque, cada una con su propio pulso —
    // reusa la misma animación que ya usa el sitio cuando le hacés hover.
    svgMapa.querySelectorAll(".sh-nodo").forEach((g) => {
      g.classList.add("sh-vivo");
      g.style.setProperty("--sh-pulso-dur", (2.1 + Math.random() * 1.3).toFixed(2) + "s");
      g.style.setProperty("--sh-pulso-delay", (-Math.random() * 2.4).toFixed(2) + "s");
    });

    // rayos de energía: una chispa que recorre cada flecha real, con su
    // propio arranque para que no viajen todas juntas.
    const capaFlechas = svgMapa.querySelector(".sh-capa-flechas");
    if (capaFlechas) {
      svgMapa.querySelectorAll("path.sh-flecha").forEach((path, i) => {
        const id = "loader-flecha-" + i;
        path.setAttribute("id", id);
        const chispa = document.createElementNS(SVG_NS, "circle");
        chispa.setAttribute("r", "3.6");
        chispa.setAttribute("fill", path.getAttribute("stroke") || "#fff");
        chispa.setAttribute("filter", "url(#sh-glow)");
        const mov = document.createElementNS(SVG_NS, "animateMotion");
        mov.setAttribute("dur", (2.4 + Math.random() * 1.6).toFixed(2) + "s");
        mov.setAttribute("repeatCount", "indefinite");
        mov.setAttribute("begin", (Math.random() * 2).toFixed(2) + "s");
        const mpath = document.createElementNS(SVG_NS, "mpath");
        mpath.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + id);
        mov.appendChild(mpath);
        chispa.appendChild(mov);
        capaFlechas.appendChild(chispa);
      });
    }
  } catch (e) {
    // si esto falla (cambió la forma de los datos), el loader se sigue
    // viendo bien: queda el fondo con el título, sin el mapa.
  }

  let salida = null;
  function mostrarSaltear() {
    if (salida) return;
    salida = document.createElement("button");
    salida.className = "loader-saltear";
    salida.type = "button";
    salida.textContent = "Saltear";
    loader.appendChild(salida);
    requestAnimationFrame(() => salida.classList.add("visible"));
    salida.addEventListener("click", cerrarLoader);
  }

  let cerrado = false;
  function cerrarLoader() {
    if (cerrado) return;
    cerrado = true;
    loader.classList.add("oculto");
    document.body.classList.remove("loader-activo");
    setTimeout(() => loader.remove(), 1300);
  }

  document.body.classList.add("loader-activo");
  loader.addEventListener("click", (e) => {
    if (e.target === salida) return;
    cerrarLoader();
  });

  requestAnimationFrame(() => {
    escena.classList.add("visible");
    if (titulo) titulo.classList.add("visible");
  });

  setTimeout(mostrarSaltear, 2200);
  setTimeout(cerrarLoader, 6200);
})();

/* ---------------- 2) antorcha del cursor ---------------- */
(function antorchaDelCursor() {
  const antorcha = document.getElementById("cursor-antorcha");
  if (!antorcha) return;
  if (!window.matchMedia || !window.matchMedia("(pointer: fine)").matches) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  let rx = innerWidth / 2, ry = innerHeight / 2, cx = rx, cy = ry, raf = null;
  document.body.classList.add("con-antorcha");

  window.addEventListener("mousemove", (e) => {
    rx = e.clientX; ry = e.clientY;
    if (!raf) raf = requestAnimationFrame(tick);
  }, { passive: true });

  function tick() {
    cx += (rx - cx) * 0.18;
    cy += (ry - cy) * 0.18;
    antorcha.style.transform = `translate(${cx.toFixed(1)}px, ${cy.toFixed(1)}px) translate(-50%, -50%)`;
    raf = (Math.abs(rx - cx) > 0.4 || Math.abs(ry - cy) > 0.4) ? requestAnimationFrame(tick) : null;
  }
})();

/* ---------------- 3) parallax chico atado al mouse ---------------- */
(function parallaxDeMouse() {
  if (!window.matchMedia || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  if (!window.matchMedia("(pointer: fine)").matches) return;

  const objetivos = [
    { selector: "#cabecera", fuerza: 5 },
    { selector: "#nav", fuerza: 3 },
    { selector: ".grilla-estilos", fuerza: 7 },
    { selector: ".grilla-mapas", fuerza: 7 },
  ];

  let mx = 0, my = 0, activos = [];

  function refrescarObjetivos() {
    activos = objetivos
      .map((o) => ({ el: document.querySelector(o.selector), fuerza: o.fuerza }))
      .filter((o) => o.el);
  }
  refrescarObjetivos();
  // la grilla activa cambia de vista todo el tiempo: se vuelve a buscar
  // cada tanto en vez de sólo una vez al arrancar.
  setInterval(refrescarObjetivos, 2000);

  window.addEventListener("mousemove", (e) => {
    mx = (e.clientX / window.innerWidth) * 2 - 1;
    my = (e.clientY / window.innerHeight) * 2 - 1;
  }, { passive: true });

  const estado = new Map();
  function loop() {
    activos.forEach((o) => {
      const prev = estado.get(o.el) || { x: 0, y: 0 };
      const tx = -mx * o.fuerza, ty = -my * o.fuerza * 0.6;
      const x = prev.x + (tx - prev.x) * 0.06;
      const y = prev.y + (ty - prev.y) * 0.06;
      estado.set(o.el, { x, y });
      o.el.style.transform = `translate(${x.toFixed(2)}px, ${y.toFixed(2)}px)`;
    });
    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);
})();

/* ---------------- 4) pulso orgánico de una nota al hover ---------------- */
(function pulsoOrganico() {
  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const SELECTOR = ".sh-nodo, .acorde-chip, .prog-acorde, .escala-color, .acorde-color";

  function randomizar(el) {
    // cada nota tiene su propio ritmo: si dos laten a la vez, no se ve
    // como un solo bloque respirando sino como dos cosas vivas separadas.
    el.style.setProperty("--sh-pulso-dur", (1.9 + Math.random() * 1.1).toFixed(2) + "s");
    el.style.setProperty("--sh-pulso-delay", (-Math.random() * 2).toFixed(2) + "s");
  }

  document.addEventListener("pointerenter", (e) => {
    const el = e.target.closest && e.target.closest(SELECTOR);
    if (!el) return;
    randomizar(el);
    el.classList.add("sh-vivo");
  }, true);

  document.addEventListener("pointerleave", (e) => {
    const el = e.target.closest && e.target.closest(SELECTOR);
    if (!el) return;
    el.classList.remove("sh-vivo");
  }, true);
})();
