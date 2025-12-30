import { test, expect } from '@playwright/test';

test('Input Form Submit – Validation & Success Message', async ({ page }) => {

  // Step 1: Open Selenium Playground
  await page.goto('https://www.lambdatest.com/selenium-playground');

  // Click "Input Form Submit"
  await page.click('text=Input Form Submit');

  // Validate URL
  await expect(page).toHaveURL(/input-form-demo/);

  // Step 2: Click Submit without filling any data
  await page.click('button[type="submit"]');

  // Step 3: Assert validation error message
  // HTML5 validation message is browser-handled
  const nameField = page.locator('input#name');
  const validationMessage = await nameField.evaluate(el => el.validationMessage);

  expect(validationMessage).toContain('Please fill');

  // Step 4: Fill in all form fields
  await page.fill('#name', 'Mohit Bajpai');
  await page.fill('#inputEmail4', 'mohit.bajpai@example.com');
  await page.fill('#inputPassword4', 'Password@123');
  await page.fill('#company', 'LambdaTest');
  await page.fill('#websitename', 'https://www.example.com');
  await page.fill('#inputCity', 'Bangalore');
  await page.fill('#inputAddress1', 'MG Road');
  await page.fill('#inputAddress2', 'Near Metro Station');
  await page.fill('#inputState', 'Karnataka');
  await page.fill('#inputZip', '560001');

  // Step 5: Select "United States" from Country dropdown
  await page.selectOption('select[name="country"]', {
    label: 'United States'
  });

  // Step 6: Click Submit
  await page.click('button[type="submit"]');

  // Step 7: Validate success message
  const successMessage = page.locator('.success-msg');
  await expect(successMessage).toHaveText(
    'Thanks for contacting us, we will get back to you shortly.'
  );

});
