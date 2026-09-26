/* Junta locales/es.json + en.json + th.json en js/idiomas.js, que es lo que
   el navegador realmente carga. Hace falta este paso intermedio porque
   Chrome bloquea fetch() de archivos JSON locales al abrir con file:// (ver
   el resto del proyecto: por eso todo son <script> clásicos, nunca fetch
   ni módulos ES). Para traducir: editás el .json y volvés a correr esto.

   Uso: node scripts/compilar_idiomas.js
*/
const fs = require("fs");
const path = require("path");

const DIR = __dirname.replace(/[\\/]scripts$/, "");
const LOCALES_DIR = path.join(DIR, "locales");
const SALIDA = path.join(DIR, "js", "idiomas.js");

const idiomas = ["es", "en", "th"];
const datos = {};
const faltantes = [];

idiomas.forEach((cod) => {
  const archivo = path.join(LOCALES_DIR, cod + ".json");
  if (!fs.existsSync(archivo)) { faltantes.push(cod); return; }
  try {
    datos[cod] = JSON.parse(fs.readFileSync(archivo, "utf8"));
  } catch (e) {
    console.error("ERROR: " + cod + ".json no es JSON válido: " + e.message);
    process.exit(1);
  }
});

if (faltantes.length) {
  console.log("(sin traducir todavía, se omiten): " + faltantes.join(", "));
}

const cabecera = `/* Generado automáticamente por scripts/compilar_idiomas.js a partir de
   locales/*.json — NO editar a mano, los cambios se pierden en el próximo
   "node scripts/compilar_idiomas.js". Para traducir, editá el .json. */\n`;

const cuerpo = "const IDIOMAS = " + JSON.stringify(datos, null, 2) + ";\n";
fs.writeFileSync(SALIDA, cabecera + cuerpo);

console.log("escrito js/idiomas.js con: " + Object.keys(datos).join(", "));
Object.entries(datos).forEach(([cod, d]) => {
  console.log("  " + cod + ": mapas=" + Object.keys(d.mapas || {}).length +
    " estilos=" + Object.keys(d.estilos || {}).length +
    " emociones=" + Object.keys(d.emociones || {}).length +
    " escalas=" + Object.keys(d.escalas || {}).length);
});
