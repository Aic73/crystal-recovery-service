// clean-deploy.js
const fs = require("fs");

console.log("🚀 Starting clean deployment...");

// Remove old build files
try {
  if (fs.existsSync(".next")) {
    fs.rmSync(".next", { recursive: true, force: true });
    console.log("✅ Removed .next directory");
  }
  
  if (fs.existsSync("node_modules/.cache")) {
    fs.rmSync("node_modules/.cache", { recursive: true, force: true });
    console.log("✅ Cleared cache");
  }
} catch (error) {
  console.log("⚠️ Cleanup note:", error.message);
}

console.log("\n📦 Deployment ready!");
console.log("Run these commands:");
console.log("1. npm install");
console.log("2. npm run build");
console.log("3. git add .");
console.log('4. git commit -m "Fix mobile layout & security"');
console.log("5. git push");
console.log("6. Check Vercel for auto-deploy");
