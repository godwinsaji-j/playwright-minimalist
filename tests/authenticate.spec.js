import { test } from '@playwright/test';

test('login and save state', async ({ page }) => {
    await page.goto('https://github.com/login');

    // Perform login
    await page.waitForSelector("#contextregion-basiccrumb-dashboard-link", { state: 'attached' });

    // Save state
    await page.context().storageState({ path: './state-storage/state-storage.json' });

    console.log('Saved login session to state-storage.json');
});
