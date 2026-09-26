/* ============ The Essence of Sound — fondo ambiental (three.js) ============
   Un campo de partículas quieto, muy tenue, detrás de todo. Es sólo
   atmósfera: no debe competir con el grafo, así que va oscuro, lento y
   con poco contraste. Si three.js no llega a cargar (sin conexión, CDN
   caído) la página sigue funcionando igual — el fondo es 100% decorativo.
   Carga como script clásico (no ES module): bajo file:// los módulos ES
   quedan bloqueados por CORS, un <script> normal no. */
const cont = document.getElementById("fondo-3d");
if (cont && window.THREE) {
  const THREE = window.THREE;
  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.6));
  cont.appendChild(renderer.domElement);

  const escena = new THREE.Scene();
  const camara = new THREE.PerspectiveCamera(55, 1, 0.1, 100);
  camara.position.z = 9;

  const N = 520;
  const geo = new THREE.BufferGeometry();
  const pos = new Float32Array(N * 3);
  const colorPaleta = [0x7de8d6, 0xff6fae, 0xc9a2ff, 0xffd873, 0x6fb8ff];
  const colores = new Float32Array(N * 3);
  const tmpColor = new THREE.Color();
  for (let i = 0; i < N; i++) {
    const r = 5 + Math.random() * 11;
    const th = Math.random() * Math.PI * 2;
    const ph = Math.acos(2 * Math.random() - 1);
    pos[i * 3] = r * Math.sin(ph) * Math.cos(th);
    pos[i * 3 + 1] = r * Math.sin(ph) * Math.sin(th) * 0.55;
    pos[i * 3 + 2] = r * Math.cos(ph) - 6;
    tmpColor.set(colorPaleta[i % colorPaleta.length]);
    colores[i * 3] = tmpColor.r;
    colores[i * 3 + 1] = tmpColor.g;
    colores[i * 3 + 2] = tmpColor.b;
  }
  geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
  geo.setAttribute("color", new THREE.BufferAttribute(colores, 3));

  const mat = new THREE.PointsMaterial({
    size: 0.045,
    vertexColors: true,
    transparent: true,
    opacity: 0.55,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });
  const puntos = new THREE.Points(geo, mat);
  escena.add(puntos);

  function ajustar() {
    const w = cont.clientWidth || window.innerWidth;
    const h = cont.clientHeight || window.innerHeight;
    renderer.setSize(w, h);
    camara.aspect = w / h;
    camara.updateProjectionMatrix();
  }
  window.addEventListener("resize", ajustar);
  ajustar();

  const reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Parallax muy suave: la cámara se corre un poquito hacia donde está el
  // mouse, como si el fondo tuviera profundidad. Nada de lookAt: al ser
  // sólo una traslación chica el efecto es un paneo, no un giro.
  let mouseX = 0, mouseY = 0;
  if (!reduceMotion) {
    window.addEventListener("mousemove", (e) => {
      mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseY = (e.clientY / window.innerHeight) * 2 - 1;
    }, { passive: true });
  }

  let t = 0;
  function loop() {
    if (!reduceMotion) {
      t += 0.0011;
      puntos.rotation.y = t;
      puntos.rotation.x = Math.sin(t * 0.6) * 0.12;
      camara.position.x += (mouseX * 0.6 - camara.position.x) * 0.03;
      camara.position.y += (-mouseY * 0.4 - camara.position.y) * 0.03;
    }
    renderer.render(escena, camara);
    requestAnimationFrame(loop);
  }
  loop();
}
