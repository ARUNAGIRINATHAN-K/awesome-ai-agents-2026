const fs = require('fs');
const path = require('path');

console.log("Vercel-safe Extract Wrapper: Running build hooks...");

// Resolve path to the workspace root extraction script
const parentScript = path.resolve(__dirname, '..', '..', 'scripts', 'extract.js');

if (fs.existsSync(parentScript)) {
  console.log(`Parent extraction script found at ${parentScript}. Executing...`);
  try {
    // Run the root extract script directly
    require(parentScript);
  } catch (err) {
    console.error("Error executing parent script:", err);
    process.exit(1);
  }
} else {
  console.log("Parent extraction script not found (Vercel subdirectory isolation active).");
  console.log("Using pre-compiled JSON databases committed inside web/src/data/.");
  process.exit(0);
}
