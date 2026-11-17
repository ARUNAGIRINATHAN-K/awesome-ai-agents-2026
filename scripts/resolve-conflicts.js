const { execSync } = require('child_process');
const path = require('path');

console.log('🔄 [Registry Conflict Resolver] Resolving data registry conflicts from README.md...');

const buildScript = path.join(__dirname, 'build-data.js');

try {
  // 1. Recompile clean data from README.md
  execSync(`node "${buildScript}"`, { stdio: 'inherit' });
} catch (err) {
  console.error('❌ Failed to regenerate datasets from README.md:', err.message);
  process.exit(1);
}

// 2. Stage data files in git if git is available
try {
  execSync('git add data/resources.json data/categories.json', { stdio: 'inherit' });
  console.log('✅ Staged data/resources.json and data/categories.json in git.');
  console.log('🎉 Data conflicts successfully resolved!');
} catch (err) {
  console.log('ℹ️ Generated files updated. Git staging skipped.');
}

