import {test, expect} from '@playwright/test';
import{LandingPage} from '../../page-objects/landing_page';
import 'dotenv/config';

test.describe('Open Cart Login/Logout Functionality', () => {
    let landingPage : LandingPage;

    // Before Each Hook
    test.beforeEach(async({page, baseURL}) => {
        landingPage = new LandingPage(page);
        await landingPage.goToPageAndWaitForLoad('/', 'RStudio Cloud', baseURL);
    });

    test('Validating The Landing Page Elements', async() => {

        await landingPage.validateElementPresent(landingPage.rStudioHeaderBanner);
        await landingPage.validateElementPresent(landingPage.rStudioHeroBand);
        await landingPage.validateElementPresent(landingPage.rStudioFreeBanner);
        await landingPage.validateElementPresent(landingPage.rStudioFooter);

        await landingPage.page.close();
    });

    test('Validating The Side Nav Bar Elements', async() => {

        await landingPage.validateElementPresent(landingPage.availablePricingPlansLink);
        await landingPage.compareElementAttributeValue(landingPage.availablePricingPlansLink, 'href', '/plans');
        await landingPage.validateElementPresent(landingPage.rStudioCloudGuideLink);
        await landingPage.compareElementAttributeValue(landingPage.rStudioCloudGuideLink, 'href', '/learn/guide');
        await landingPage.validateElementPresent(landingPage.rStudioDotComLink);
        await landingPage.compareElementAttributeValue(landingPage.rStudioDotComLink, 'href', 'https://rstudio.com/');

        await landingPage.page.close();
    });

    test('Validating Get Started For Free Functionality',async() => {
        await landingPage.validateElementPresent(landingPage.getStartedForFreeButton);
        await landingPage.getStartedForFreeButton.click();
        await landingPage.validateElementPresent(landingPage.freePlanCard);
        await expect(landingPage.page.url()).toContain('/plans/free');

        await landingPage.page.close();
    });

    test('Validating Already A User Functionality', async() => {
        await landingPage.validateElementPresent(landingPage.alreadyAUserButton);
        await landingPage.alreadyAUserButton.click();
        await landingPage.validateElementPresent(landingPage.logInContainer);
        await expect(landingPage.page.url()).toContain('/login');
    });

});