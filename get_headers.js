const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  
  await page.goto('https://www.linkedin.com');

  page.on('response', async response => {
    const url = response.url();
    if (url.includes("https://www.linkedin.com/checkpoint/lg/login-submit")) {

        const headers = response.headers();

        console.log(`URL: ${url}`);
        console.log('Headers:', headers);
        console.log('---');

        const cookies = await page.cookies();
        console.log('Cookies:', cookies);
    }
  });

  

  // await page.waitForTimeout(120000);
  // await browser.close();
})();