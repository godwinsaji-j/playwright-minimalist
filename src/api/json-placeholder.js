import { expect } from '@playwright/test';

/**
 * Executes steps on the landing page for user search.
 * * @param {import('@playwright/test').APIRequestContext} request - The Playwright Page object.
 * @param {object} testData - The data object for the current test case.
 */
async function posts(request, testData) {
    let response = await request.get('http://jsonplaceholder.typicode.com/posts/1',{
        headers:{
            'content-type': 'application/json'
        }
    });
    expect(response.status()).toBe(200);
}

export default {
    posts
}