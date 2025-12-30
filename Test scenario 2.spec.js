import { test, expect } from '@playwright/test';

test('Drag & Drop Slider to 95', async ({ page }) => {

  // Step 1: Open Selenium Playground
  await page.goto('https://www.lambdatest.com/selenium-playground');

  // Click "Drag & Drop Sliders"
  await page.click('text=Drag & Drop Sliders');

  // Step 2: Validate URL
  await expect(page).toHaveURL(/drag-drop-range-sliders-demo/);

  // Locate slider with default value 95
  const slider = page.locator('input[value="95"]');
  const output = slider.locator('xpath=following-sibling::output');

  // Drag slider to value 95
  await slider.evaluate((el) => {
    el.value = 95;
    el.dispatchEvent(new Event('input'));
    el.dispatchEvent(new Event('change'));
  });

  // Validate the displayed value is 95
  await expect(output).toHaveText('95');

});
