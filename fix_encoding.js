const fs = require('fs');
const path = require('path');

const files = [
  'src/content/cli-content.tsx',
  'src/content/migration-guide-content.tsx',
  'src/content/templates-content.tsx'
];

files.forEach(relativePath => {
  const filePath = path.resolve('d:/Code/unicorn-ui', relativePath);
  if (fs.existsSync(filePath)) {
    console.log(`Processing ${relativePath}...`);
    try {
      const buffer = fs.readFileSync(filePath);
      // Decode as UTF-8, replacing invalid sequences with the replacement character
      const decoder = new TextDecoder('utf-8', { fatal: false, ignoreBOM: true }); 
      let content = decoder.decode(buffer);

      // Heuristic replacements for the specific corruption patterns observed
      // G -> ✓ (Checkmark)
      // = -> → (Right Arrow)
      //  -> (Empty, just remove stray replacement chars if they don't match patterns)
      
      let fixed = content
        .replace(/G\uFFFD/g, "✓") // G followed by Replacement Character
        .replace(/=\uFFFD/g, "→") // = followed by Replacement Character
        .replace(/\uFFFD/g, "");  // Remove any remaining Replacement Characters

      // Check if we actually changed anything
      if (fixed !== content) {
          console.log(`Fixed content in ${relativePath}`);
          fs.writeFileSync(filePath, fixed, 'utf-8');
      } else {
          // Even if string looks same, re-writing ensures valid UTF-8 encoding
          console.log(`Re-writing ${relativePath} to ensure valid UTF-8`);
          fs.writeFileSync(filePath, fixed, 'utf-8');
      }
      
    } catch (e) {
      console.error(`Error processing ${relativePath}:`, e);
    }
  } else {
    console.warn(`File not found: ${filePath}`);
  }
});
