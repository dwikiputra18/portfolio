const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const websites = [
  { url: 'https://monstreation.com', name: 'monstreation-banner.png' },
  { url: 'https://balidivinetour.com', name: 'bali-divine-tours-banner.png' },
  { url: 'https://balivoyagerco.com', name: 'bali-voyager-banner.png' },
  { url: 'https://royalbaliescape.com', name: 'royal-bali-escape-banner.png' },
  { url: 'https://balhaventour.com', name: 'bali-haven-tour-banner.png' },
  { url: 'https://baliintourpackage.com', name: 'bali-in-tour-banner.png' }
];

(async () => {
  const browser = await puppeteer.launch();
  
  for (const site of websites) {
    try {
      const page = await browser.newPage();
      await page.goto(site.url, { waitUntil: 'networkidle2', timeout: 10000 });
      
      const screenshotPath = path.join('./public/images', site.name);
      await page.screenshot({ 
        path: screenshotPath, 
        fullPage: true,
        type: 'png'
      });
      
      console.log(`✓ Screenshot saved: ${site.name}`);
      await page.close();
    } catch (error) {
      console.log(`✗ Failed to capture ${site.name}: ${error.message}`);
    }
  }
  
  await browser.close();
  console.log('Done!');
})();
