import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  let errors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') errors.push('CONSOLE ERROR: ' + msg.text());
  });
  page.on('pageerror', err => errors.push('PAGE ERROR: ' + err.toString()));
  
  await page.goto('http://localhost:5173', { waitUntil: 'networkidle0' });
  
  const content = await page.evaluate(() => {
    return {
      bodyLength: document.body.innerHTML.length,
      hasProjects: !!document.getElementById('projects'),
      hasMagneticBtn: !!document.querySelector('.inline-block'),
      framerMotionElement: !!document.querySelector('.fixed.top-0.left-0.right-0')
    };
  });
  
  console.log("ERRORS:", errors);
  console.log("CONTENT:", content);
  
  await browser.close();
})();
