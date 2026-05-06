const fs = require('fs');
let data = fs.readFileSync('src/index.css', 'utf8');

// remove body { overflow: hidden; }
data = data.replace(/body \{\s*overflow: hidden;\s*\}/g, 'body {\n  overflow-x: hidden;\n}');

// remove html/body overflow rules from mobile media query since it will be auto
data = data.replace(/overflow: auto !important;/g, '');
data = data.replace(/overflow-y: auto !important;/g, '');

if (!data.includes('scroll-snap-type')) {
  data = data.replace(':root {', 'html {\n  scroll-snap-type: y mandatory;\n  overflow-y: scroll;\n  height: 100vh;\n}\n\nbody {\n  margin: 0;\n}\n\n:root {');
  
  // add snap to sections
  data += `
.section-container, .landing-section, .techstack, .contact-section {
  scroll-snap-align: start;
  scroll-snap-stop: always;
  min-height: 100vh;
}

.container-main {
  scroll-snap-type: y mandatory;
  overflow-y: auto;
  height: 100vh;
}
`;
  
  fs.writeFileSync('src/index.css', data);
}
