// generar-indice.js
// Lee todos los .md de /articulos y genera articles-index.json
// Se ejecuta automáticamente en cada push via GitHub Actions

const fs   = require('fs');
const path = require('path');

const carpeta = path.join(__dirname, 'articulos');
const salida  = path.join(__dirname, 'articles-index.json');

try {
  const archivos = fs.readdirSync(carpeta)
    .filter(f => f.endsWith('.md'))
    .sort()
    .reverse(); // más recientes primero por nombre de archivo

  fs.writeFileSync(salida, JSON.stringify(archivos, null, 2));
  console.log('articles-index.json generado con ' + archivos.length + ' artículo(s):');
  archivos.forEach(f => console.log('  - ' + f));
} catch(e) {
  console.error('Error:', e.message);
  process.exit(1);
}
