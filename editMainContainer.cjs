const fs = require('fs');
let data = fs.readFileSync('src/components/MainContainer.tsx', 'utf8');
data = data.replace('import CallToAction from "./CallToAction";\r\n', '');
data = data.replace('<CallToAction />\r\n        ', '');
fs.writeFileSync('src/components/MainContainer.tsx', data);
