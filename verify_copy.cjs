const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Viewport for high quality
  await page.setViewportSize({ width: 1280, height: 1080 });

  const baseUrl = 'http://localhost:4173/MindSeeds';

  // Home Page
  await page.goto(`${baseUrl}/`);
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'homepage.png' });

  // CogniSeeds Page
  await page.goto(`${baseUrl}/cogni`);
  await page.waitForTimeout(1000);

  // Hover over the first seed card to show the copy button
  await page.hover('div.group');
  await page.screenshot({ path: 'cogni_with_copy.png' });

  // Click the copy button
  await page.click('button[title="Copy Seed"]');
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'cogni_copied.png' });

  // LinguaSeeds Page
  await page.goto(`${baseUrl}/lingua`);
  await page.waitForTimeout(1000);
  await page.hover('div.group');
  await page.screenshot({ path: 'lingua_with_copy.png' });

  // ArchSeeds Page
  await page.goto(`${baseUrl}/arch`);
  await page.waitForTimeout(1000);
  await page.hover('div.group');
  await page.screenshot({ path: 'arch_with_copy.png' });

  await browser.close();
})();
