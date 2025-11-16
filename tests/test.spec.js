// @ts-check
import { test, expect } from '@playwright/test';
import { loadData } from '../src/utils/data-loader';
import gitUserSearch from '../src/ui/git-user-search';
import jsonPlaceholder from '../src/api/json-placeholder';

const testData = loadData('data.json','TC01_HappyPath') 

test('UI Test', async ({ page}) => {
  await gitUserSearch.landingPage(page, testData);
});

test('Api Test', async ({ request}) => {
  await jsonPlaceholder.posts(request, testData);
});
