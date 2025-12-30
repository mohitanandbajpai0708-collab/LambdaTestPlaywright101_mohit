import { test, expect } from '@playwright/test';

test('LambdaTest Simple Form Demo Validation', async ({ page }) => {

  // Step 1: Open LambdaTest Selenium Playground
  await page.goto('https://www.lambdatest.com/selenium-playground');

  // Step 2: Click "Simple Form Demo"
  await page.click('text=Simple Form Demo');

  // Step 3: Validate URL contains "simple-form-demo"
  await expect(page).toHaveURL(/simple-form-demo/);

  // Step 4: Create a variable for string value
  const message = 'Welcome to LambdaTest';

  // Step 5: Enter value in "Enter Message" text box
  await page.fill('input#user-message', message);

  // Step 6: Click "Get Checked Value"
  await page.click('button#showInput');

  // Step 7: Validate displayed message
  const displayedMessage = page.locator('#message');
  await expect(displayedMessage).toHaveText(message);

});
