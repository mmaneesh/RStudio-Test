import {PlaywrightTestConfig} from '@playwright/test';
import 'dotenv/config';

const config: PlaywrightTestConfig = {
    timeout: 60000,
    retries: 0,
    testDir: 'tests/apiTests/swapi',
    use: {
        headless: true,
        viewport: { width: 1280, height: 720 },
        actionTimeout: 10000,
        ignoreHTTPSErrors: true,
        video: 'off',
        screenshot: 'off',
        baseURL: process.env.SWAPI_BASE_URL,
    },
    reporter: [
        ['line'],
        ['allure-playwright'],
        ['html']
    ],
};

export default config;