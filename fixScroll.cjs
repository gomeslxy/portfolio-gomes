const fs = require('fs');
let data = fs.readFileSync('src/index.css', 'utf8');

data = data.replace(/\.container-main \{\s*scroll-snap-type: y mandatory;\s*overflow-y: auto;\s*height: 100vh;\s*\}/, '');

fs.writeFileSync('src/index.css', data);
