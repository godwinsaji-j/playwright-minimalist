import { test as base, expect } from '@playwright/test';
import os from 'os';
import path from 'path';

const chromeExe = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";//will rum without this as well

// Windows Chrome default user data directory
const userDataDir = path.join(
  os.homedir(),
  'AppData',
  'Local',
  'Google',
  'Chrome',
  'User Data'
);

export const test = base.extend({
  chromePage: async ({ playwright }, use) => {
    const context = await playwright.chromium.launchPersistentContext(
      userDataDir,
      {
        headless: false,
        executablePath: chromeExe,//will rum without this as well
        args: ['--start-maximized',"--profile-directory=AutomationProfile"],
      }
    );

    const page = context.pages()[0] || await context.newPage();

    await use(page);

    await context.close();
  },
});

export default {expect}