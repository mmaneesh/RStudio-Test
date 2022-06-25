import {test, expect} from '@playwright/test';
import {LandingPage} from '../../page-objects/landing_page';
import 'dotenv/config';

test.describe.parallel('R Studio Snapshot Tests', () => {
    let landingPage : LandingPage;

    test.beforeEach(async({page,baseURL}) => {
        landingPage = new LandingPage(page);
        await page.goto(baseURL);
    });

    test('Launch Page Header Snapshot', async() => {
        expect(await landingPage.rStudioHeaderBanner.screenshot()).toMatchSnapshot('R_Studio_Cloud_Header.png');
    });

    test('Launch Page Hero Band Snapshot', async() => {
        expect(await landingPage.rStudioHeroBand.screenshot()).toMatchSnapshot('R_Studio_Band_Hero.png');
    });

    test('Launch Page Band Free Banner Snapshot', async() => {
        expect(await landingPage.rStudioFreeBanner.screenshot()).toMatchSnapshot('R_Studio_Band_Free_Banner.png');
    });

});