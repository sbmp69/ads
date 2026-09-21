const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--ignore-certificate-errors']
  });
  const page = await browser.newPage();
  
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36');
  
  try {
    await page.goto('https://ad-genius-ai-dashboard--ajudiameet11.replit.app/', {
      waitUntil: 'domcontentloaded',
      timeout: 30000
    });
    
    await new Promise(r => setTimeout(r, 5000));
    
    const content = await page.evaluate(() => {
      function extractText(node) {
        if (node.nodeType === Node.TEXT_NODE) return node.textContent.trim();
        if (node.nodeType !== Node.ELEMENT_NODE) return '';
        const tag = node.tagName.toLowerCase();
        if (['script', 'style', 'noscript', 'svg', 'img'].includes(tag)) return '';
        let text = '';
        for (const child of node.childNodes) {
          const childText = extractText(child);
          if (childText) text += childText + ' | ';
        }
        return text.trim().replace(/\|\s*$/, '');
      }
      return { html: document.body.innerHTML, text: extractText(document.body) };
    });
    
    const fs = require('fs');
    fs.writeFileSync('scraped_html.html', content.html);
    fs.writeFileSync('scraped_text.txt', content.text);
    console.log("Scraping complete.");
  } catch (err) {
    console.error("Error:", err);
  } finally {
    await browser.close();
  }
})();
