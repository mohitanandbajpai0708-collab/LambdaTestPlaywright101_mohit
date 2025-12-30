import { defineConfig } from '@playwright/test';

export default defineConfig({
  timeout: 60000,
  retries: 0,

  projects: [
    {
      name: 'LambdaTest-Chrome',
      use: {
        connectOptions: {
          wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=
          ${encodeURIComponent(JSON.stringify({
            browserName: 'Chrome',
            browserVersion: 'latest',
            platform: 'Windows 11',
            name: 'Playwright LambdaTest Execution',
            build: 'Playwright Build 1',
            user: process.env.LT_USERNAME,
            accessKey: process.env.LT_ACCESS_KEY
          }))}`
        }
      }
    }
  ]
});
