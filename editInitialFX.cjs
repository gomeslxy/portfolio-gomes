const fs = require('fs');
let data = fs.readFileSync('src/components/utils/initialFX.ts', 'utf8');

data = data.replace(/import \{ lenis \} from "\.\.\/Navbar";\r\n/g, '');
data = data.replace(/\s*if \(lenis\) \{\s*lenis\.start\(\);\s*\}/, '');

fs.writeFileSync('src/components/utils/initialFX.ts', data);
