const fs = require('fs');
let data = fs.readFileSync('src/App.tsx', 'utf8');
data = data.replace('const Play = lazy(() => import("./pages/Play"));\r\n', '');
data = data.replace(/\s*<Route\s+path="\/play"\s+element=\{\s*<Suspense fallback=\{<div>Carregando...<\/div>\}>\s*<Play \/>\s*<\/Suspense>\s*\}\s*\/>/g, '');
fs.writeFileSync('src/App.tsx', data);
