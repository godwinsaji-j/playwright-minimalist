import { expect } from '@playwright/test';
/**
 * Executes steps on the landing page for user search.
 * * @param {import('@playwright/test').Page} page - The Playwright Page object.
 * @param {object} testData - The data object for the current test case.
 */
async function landingPage(page, testData){
    await page.goto('https://gh-users-search.netlify.app/');
    await expect(page.getByRole('heading', { name: 'Welcome' })).toBeVisible();
    await page.getByTestId('search-bar').click();
    await page.getByTestId('search-bar').fill(testData.userName);
    await page.getByTestId('search-bar').press('Enter');
    await expect(page.locator('header')).toContainText('@nikolay_a00');
}

export default {landingPage}