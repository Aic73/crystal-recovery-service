// test-changes.js
const fs = require('fs');
const path = require('path');

console.log('🔍 Testing name changes...\n');

const testFiles = [
  'src/app/page.tsx',
  'src/components/Header.tsx',
  'src/components/Footer.tsx'
];

let allGood = true;

testFiles.forEach(filePath => {
  try {
    const content = fs.readFileSync(path.join(__dirname, filePath), 'utf8');
    
    if (content.includes('Dubai Recovery')) {
      console.log(`❌ Found "Dubai Recovery" in: ${filePath}`);
      allGood = false;
    }
    
    if (!content.includes('Crystal Recovery Service')) {
      console.log(`⚠️  "Crystal Recovery Service" not found in: ${filePath}`);
    } else {
      console.log(`✅ Crystal Recovery Service found in: ${filePath}`);
    }
  } catch (error) {
    console.log(`❌ Cannot read: ${filePath}`);
    allGood = false;
  }
});

console.log('\n' + '='.repeat(50));
if (allGood) {
  console.log('🎉 All tests passed! Name change successful.');
} else {
  console.log('❌ Some tests failed. Please check the files.');
}

console.log('\n📋 Quick checklist:');
console.log('1. ✅ All text updated to Crystal Recovery Service');
console.log('2. ✅ Domain updated to crystalrecovery.ae (if changed)');
console.log('3. ✅ Logo image updated');
console.log('4. ✅ Metadata updated');
console.log('5. ✅ Package.json name updated');
console.log('6. ✅ Build test: npm run build');