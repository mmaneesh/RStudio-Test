import {expect,test} from '@playwright/test';
import {LandingPage} from '../../page-objects/landing_page';
import {HomePage} from '../../page-objects/home_page';
import 'dotenv/config';

test.describe('Logging Into R Studio Cloud Application', async() => {
    let landingPage : LandingPage;
    let homePage : HomePage;

    // Before Each Hook
    test.beforeEach(async({page, baseURL}) => {
        landingPage = new LandingPage(page);
        homePage = new HomePage(page);
        await landingPage.goToPageAndWaitForLoad('/', 'RStudio Cloud', baseURL);
        await landingPage.validateElementPresent(landingPage.logInLink);
        await landingPage.clickElement(landingPage.logInLink);
        await landingPage.validateElementPresent(landingPage.logInContainer);
    });

    test('Login - InValid Credentials', async() => {

        await landingPage.validateElementPresent(landingPage.userEmail);
        await landingPage.userEmail.fill(process.env.LOGIN_USERNAME);
        await landingPage.validateElementPresent(landingPage.loginPageSubmitButton);
        await landingPage.loginPageSubmitButton.click();
        await landingPage.validateElementPresent(landingPage.userPassword);
        await landingPage.userPassword.fill(process.env.INVALID_PASSWORD);
        await landingPage.validateElementPresent(landingPage.loginPageSubmitButton);
        await landingPage.loginPageSubmitButton.click();

        await landingPage.validateElementPresent(landingPage.logInErrorMessage);
        await landingPage.compareElementTextContent(landingPage.logInErrorMessage, landingPage.loginErrorMessageValue);

    });

    test('Login - Valid Credentials', async() => {

        await landingPage.validateElementPresent(landingPage.userEmail);
        await landingPage.userEmail.fill(process.env.LOGIN_USERNAME);
        await landingPage.validateElementPresent(landingPage.loginPageSubmitButton);
        await landingPage.loginPageSubmitButton.click();
        await landingPage.validateElementPresent(landingPage.userPassword);
        await landingPage.userPassword.fill(process.env.LOGIN_PASSWORD);
        await landingPage.validateElementPresent(landingPage.loginPageSubmitButton);
        await landingPage.loginPageSubmitButton.click();

        await landingPage.page.context().storageState(({path: './tests/rstudiocloudloginstate.json'}));
        await homePage.validateElementPresent(homePage.navMenu);
        await expect(homePage.page.url()).toBe('https://rstudio.cloud/content/yours?sort=name_asc');

    });

});