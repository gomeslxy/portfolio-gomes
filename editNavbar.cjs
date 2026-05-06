const fs = require('fs');
let data = fs.readFileSync('src/components/Navbar.tsx', 'utf8');

// remove lenis import and initialization
data = data.replace(/import Lenis from "lenis";\r\n/g, '');
data = data.replace(/export let lenis: Lenis \| null = null;\r\n/g, 'export let lenis: any = null;\r\n');

// remove the entire lenis initialization block inside useEffect
data = data.replace(/\/\/ Initialize Lenis smooth scroll[\s\S]*?\/\/ Start paused\s*lenis\.stop\(\);\s*\/\/ Handle smooth scroll animation frame\s*function raf\(time: number\) \{\s*lenis\?\.raf\(time\);\s*requestAnimationFrame\(raf\);\s*\}\s*requestAnimationFrame\(raf\);\s*/, '');

// handle the resize and destroy
data = data.replace(/\/\/ Handle resize\s*window\.addEventListener\("resize", \(\) => \{\s*lenis\?\.resize\(\);\s*\}\);\s*return \(\) => \{\s*lenis\?\.destroy\(\);\s*\};\s*/, '');

// handle the scrollTo
data = data.replace(/if \(section && lenis\) \{\s*const target = document\.querySelector\(section\) as HTMLElement;\s*if \(target\) \{\s*lenis\.scrollTo\(target, \{\s*offset: 0,\s*duration: 1\.5,\s*\}\);\s*\}\s*\}/, `if (section) {
            const target = document.querySelector(section) as HTMLElement;
            if (target) {
              target.scrollIntoView({ behavior: 'smooth' });
            }
          }`);

fs.writeFileSync('src/components/Navbar.tsx', data);
