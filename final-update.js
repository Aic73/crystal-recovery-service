// final-update.js
const fs = require('fs');
const path = require('path');

console.log('🔧 Finalizing Crystal Recovery Service updates...\n');

const updates = [
  {
    file: 'src/app/layout.tsx',
    changes: [
      {
        from: /const inter = Inter\({[\s\S]*?}\);/g,
        to: `const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: false,
  fallback: ['system-ui', 'arial']
});`
      },
      {
        from: /const poppins = Poppins\({[\s\S]*?}\);/g,
        to: `const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
  preload: false,
  fallback: ['system-ui', 'arial']
});`
      },
      {
        from: /https:\/\/CrystalRecovery\.com/g,
        to: 'https://crystalrecovery.com'
      }
    ]
  },
  {
    file: 'src/app/page.tsx',
    changes: [
      {
        from: /https:\/\/CrystalRecovery\.com/g,
        to: 'https://crystalrecovery.com'
      }
    ]
  },
  {
    file: 'package.json',
    changes: [
      {
        from: /info@CrystalRecovery\.com/g,
        to: 'info@crystalrecovery.com'
      }
    ]
  }
];

let updatedCount = 0;

updates.forEach(({ file, changes }) => {
  try {
    const filePath = path.join(__dirname, file);
    
    if (fs.existsSync(filePath)) {
      let content = fs.readFileSync(filePath, 'utf8');
      let originalContent = content;
      
      changes.forEach(({ from, to }) => {
        content = content.replace(from, to);
      });
      
      if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`✅ Updated: ${file}`);
        updatedCount++;
      } else {
        console.log(`➖ No changes: ${file}`);
      }
    } else {
      console.log(`⚠️  File not found: ${file}`);
    }
  } catch (error) {
    console.error(`❌ Error updating ${file}:`, error.message);
  }
});

console.log(`\n📊 Updated ${updatedCount} files`);
console.log('\n🎉 Now run: npm run build');