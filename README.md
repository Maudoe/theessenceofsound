# The Essence of Sound — by Mau

Una herramienta visual de teoría musical para guitarristas: mapas armónicos con
flechas de a qué acorde podés ir desde cada uno, escalas para tocar encima de
cada acorde (con las notas coloreadas según su función), diagramas de mástil,
piano y bajo, y una biblioteca de progresiones, transiciones y licks organizada
por estilo (blues, rock, pop, metal, country, dark western, jazz, ambient,
cine, clásico, soul).

Es una app estática: HTML + CSS + JS puro, sin backend, sin build step. Se abre
directamente con doble click en `index.html` (funciona con `file://`, no hace
falta levantar un servidor).

## Cómo abrirla

Doble click en `index.html`, o desde una terminal:

```
start index.html      # Windows
```

No hay `npm install` ni nada que compilar para usarla.

## Estructura del proyecto

```
index.html            La página. Todo el markup de las cuatro vistas
                       (Estilos, Mapas armónicos, Aprender, Cómo leer esto)
                       y el modal del instrumento.
css/style.css          Todos los estilos.
js/
  data.js               Los 164 mapas armónicos (MAPAS_ARMONICOS).
  estilos.js            Progresiones, transiciones y licks por estilo (ESTILOS).
  chords.js             Parser de cifrados de acorde (spellChord, parsearAcorde).
  escalas.js            Las 22 escalas/modos y qué notas son tensión/resolución
                         sobre cada acorde (escalasParaAcorde, papelesDeEscala).
  emociones.js           Las 8 "emociones" (sensual, tenso, etc) y qué versión
                         de cada acorde/escala les corresponde.
  instrumentos.js        Afinaciones de guitarra/bajo, búsqueda de digitaciones,
                         dibujo del mástil y del piano en SVG.
  layouts.js             Qué geometría (círculo, estrella, cascada...) usa cada
                         mapa y cómo se calculan las posiciones de sus nodos.
  graph.js               El dibujo del mapa armónico propiamente dicho: nodos,
                         flechas, hover, click para fijar un acorde.
  rueda.js                El círculo de quintas (vista de referencia alternativa).
  app.js                  Todo lo demás: navegación entre vistas, filtros,
                         paginación, armado de selects, apertura de modales.
  colors.js               Utilidades de color.
  transporte.js           Transposición de un mapa a otra tonalidad.
  three-bg.js             El fondo animado (three.js).
  i18n.js                 Motor de traducción — ver la sección de abajo.
  idiomas.js              Generado, NO se edita a mano — ver abajo.
locales/
  es.json, en.json, th.json   El texto de la app en cada idioma.
scripts/
  compilar_idiomas.js     Junta locales/*.json en js/idiomas.js.
assets/                   El SVG de fondo y otros recursos estáticos.
```

## Traducciones / idiomas

Todo el texto que ve el usuario —la interfaz, los 164 mapas armónicos, las
progresiones, transiciones y licks de cada estilo, las escalas, las
emociones, las afinaciones— vive en `locales/<idioma>.json`. Agregar o
corregir una traducción es editar ese archivo, nada de código.

**Por qué hay un paso intermedio.** El navegador bloquea `fetch()` de
archivos locales cuando la página se abre con `file://` (por eso, como el
resto del proyecto, todo son `<script>` clásicos y no módulos ES ni fetch).
Entonces los `.json` de `locales/` no se cargan directo: hay que compilarlos
a `js/idiomas.js`, que es un `<script>` común y corriente.

**Flujo para traducir o corregir texto:**

1. Editá `locales/es.json` (el original) o `locales/en.json` / `th.json`
   (las traducciones). Es JSON común, un archivo por idioma.
2. Corré:
   ```
   node scripts/compilar_idiomas.js
   ```
3. Recargá `index.html`. Listo — `js/idiomas.js` es generado, no se toca a mano
   (el comentario en la cabecera del archivo lo recuerda).

**Cómo está armado `es.json`:**

- `ui` — todo el texto fijo de la interfaz (nav, botones, rótulos, los
  párrafos de "Cómo leer esto", la ruta de aprendizaje, los puentes entre
  estilos), en claves anidadas tipo `nav.mapas`, `detalle.proposito`.
- `mapas` — uno por cada mapa armónico, indexado por su `key` (ej.
  `"blues-101"`), con `nombre`, `geometria`, `proposito`,
  `sensacion_emocional` y a veces `tecnica_o_ejecucion`.
- `estilos` — uno por estilo (`pop`, `rock`, `blues`, `metal`, `country`,
  `western`), con `nombre`, `resumen` y los textos de sus `progresiones`,
  `transiciones` y `licks` (los cifrados de acorde y grados numéricos NO se
  traducen ahí, sólo la prosa).
- `emociones`, `escalas`, `afinaciones` — igual, textos indexados por id.

**Para agregar un idioma nuevo:** copiá `es.json` a `locales/<código>.json`,
traducilo respetando exactamente las mismas claves (nada de agregar, quitar
o renombrar), corré `compilar_idiomas.js`, y el selector de idioma de la
esquina superior derecha lo va a mostrar solo (agarra automáticamente
cualquier archivo que haya en `locales/`).

**Red de seguridad:** si una traducción tiene una clave faltante o vacía,
`js/i18n.js` cae al español antes que mostrar un hueco en blanco — así un
idioma a medio traducir nunca rompe la página, sólo dexa sin traducir esa
parte puntual.

## Cómo se generó/valida el contenido

Los mapas armónicos y el contenido de los estilos se arman y verifican con
scripts propios (no se confía en que un texto generado "esté bien" sólo
porque dice estarlo): cada cifrado de acorde tiene que poder deletrearse
con el parser real (`spellChord`), cada nota de cada lick se valida contra
la escala que declara, cada flecha de un mapa tiene que apuntar a un nodo
que existe en ese mismo mapa, y cada geometría declarada tiene que ser una
de las que el motor de dibujo reconoce.

## Sin build step

No hay `package.json`, ni bundler, ni transpilado. Es HTML/CSS/JS servidos
tal cual. La única excepción es `scripts/compilar_idiomas.js`, que es un
script de Node.js sin dependencias (usa sólo `fs`/`path` del stdlib) y sólo
hace falta correrlo después de tocar un archivo de `locales/`.
