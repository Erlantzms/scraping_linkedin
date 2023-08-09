require('dotenv').config();
const puppeteer = require('puppeteer');

const get_cookies = (async () => {
  const browser = await puppeteer.launch({headless: "new", args: ['--no-sandbox', '--disable-setuid-sandbox'], ignoreDefaultArgs: ['--disable-extensions'] });

  const page = await browser.newPage();
  
  await page.goto('https://www.linkedin.com/login/es?fromSignIn=true&amp;trk=guest_homepage-basic_nav-header-signin');

  await page.waitForTimeout(2000);
  await page.type('#username', process.env.USER_USERNAME);
  await page.type('#password', process.env.USER_PASSWORD);
  
  await page.waitForTimeout(2000);
  await page.click('button.btn__primary--large');
  await page.waitForTimeout(5000);

  const client = await page.target().createCDPSession();
  const cookies = (await client.send('Network.getAllCookies')).cookies;
  await page.waitForTimeout(2000);
  await browser.close();

  const filteredCookies = cookies.filter(cookie => {
    return cookie.name === 'bcookie' || cookie.name === 'bscookie' || cookie.name === 'li_alerts' || cookie.name === 'li_gc' || cookie.name === 'JSESSIONID' || cookie.name === 'lang' || cookie.name === 'lidc'
  });

  const result = {};
  filteredCookies.forEach(cookie => {
    result[cookie.name] = cookie.value;
  });

  return result;
});

module.exports = {
  get_cookies: get_cookies
}