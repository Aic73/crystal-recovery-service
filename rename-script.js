// rename-script.js
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting name update: Dubai Recovery → Crystal Recovery Service\n');

// Files to update with their paths
const filesToUpdate = [
  'src/app/page.tsx',
  'src/app/about/page.tsx',
  'src/app/services/page.tsx',
  'src/app/services/[slug]/page.tsx',
  'src/app/contact/page.tsx',
  'src/app/booking/page.tsx',
  'src/app/areas/page.tsx',
  'src/components/Header.tsx',
  'src/components/Footer.tsx',
  'src/components/HeroSection.tsx',
  'src/components/WhyChooseSection.tsx',
  'src/components/ServiceAreasSection.tsx',
  'src/components/ContactForm.tsx',
  'src/app/layout.tsx',
  'src/app/robots.ts',
  'src/app/sitemap.ts',
  'next-sitemap.config.js',
  'README.md',
  'package.json'
];

// Replacement patterns
const replacements = [
  { from: /Dubai Recovery/gi, to: 'Crystal Recovery Service' },
  { from: /DubaiRecovery/gi, to: 'CrystalRecovery' },
  { from: /dubai-recovery/gi, to: 'crystal-recovery' },
  { from: /dubairecovery\.com/gi, to: 'crystalrecovery.ae' },
  { from: /"dubairecovery"/gi, to: '"crystalrecovery"' },
  { from: /Dubai's Most Trusted/gi, to: "Dubai's Most Trusted Crystal Recovery Service" },
  { from: /Professional 24\/7 car recovery and roadside assistance across Dubai/gi, to: "Professional 24/7 car recovery and roadside assistance across Dubai - Crystal Recovery Service" },
];

let updatedCount = 0;
let errorCount = 0;

filesToUpdate.forEach(filePath => {
  try {
    const absolutePath = path.join(__dirname, filePath);
    
    if (fs.existsSync(absolutePath)) {
      let content = fs.readFileSync(absolutePath, 'utf8');
      let originalContent = content;
      
      replacements.forEach(({ from, to }) => {
        content = content.replace(from, to);
      });
      
      if (content !== originalContent) {
        fs.writeFileSync(absolutePath, content, 'utf8');
        console.log(`✅ Updated: ${filePath}`);
        updatedCount++;
      } else {
        console.log(`➖ No changes: ${filePath}`);
      }
    } else {
      console.log(`⚠️  File not found: ${filePath}`);
    }
  } catch (error) {
    console.error(`❌ Error updating ${filePath}:`, error.message);
    errorCount++;
  }
});

console.log('\n📊 Summary:');
console.log(`✅ Files updated: ${updatedCount}`);
console.log(`❌ Errors: ${errorCount}`);
console.log('\n🎉 Next steps:');
console.log('1. Update image assets in /public folder');
console.log('2. Update folder name if needed: dubai-recovery → crystal-recovery');
console.log('3. Update domain in vercel.json');
console.log('4. Test all pages');
console.log('5. Run: npm run build to check for errors');
console.log('6. Deploy when ready');




