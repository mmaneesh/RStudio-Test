import {PlaywrightTestConfig} from '@playwright/test';
import 'dotenv/config';

const config: PlaywrightTestConfig = {
    globalTimeout: 60*60*1000,
    timeout: 60000,
    retries: 0,
    testDir: 'tests/ui-tests',
    use: {
        headless: false,
        viewport: { width:1280, height:720},
        actionTimeout: 30000,
        navigationTimeout: 30000,
        ignoreHTTPSErrors: true,
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
        // storageState: './automationPracticeState.json',
        launchOptions: {
            args: ['--start-maximized']
        },
        baseURL: process.env.RSTUDIO_BASE_URL,
    },
    projects: [
        {
            name: 'Chromium',
            use: { browserName: 'chromium' }
        },
        {
            name: 'Firefox',
            use:{ browserName: 'firefox' }
        },
        {
            name: 'Safari',
            use:{ browserName: 'webkit' }
        }
    ],
    reporter: [
        ['line'],
        ['allure-playwright'],
        ['html']
    ],
};

export default config;