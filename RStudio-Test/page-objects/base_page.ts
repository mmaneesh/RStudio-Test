import {expect, Locator, Page} from '@playwright/test';

export default class BasePage {

    //PAGE TYPE VARIABLES
    readonly page : Page;
    readonly loginPageSubmitButton : Locator;
    readonly userEmail : Locator;
    readonly userPassword : Locator;

    //STRING TYPE VARIABLES
    readonly rStudioUrl : string;

    //Initializing Constructor
    constructor(page: Page) {
        this.page = page;
        this.loginPageSubmitButton = page.locator('(//fieldset[@class=\'actions noMarginAbove\']//button)[1]');
        this.userEmail = page.locator('//input[@placeholder=\'Email\']');
        this.userPassword = page.locator('//input[@placeholder=\'Password\']');
        this.rStudioUrl = 'https://rstudio.cloud/';
    }

    //method declarations
    async validateElementPresent(selector: Locator) {
        await expect(selector).toBeVisible();
    }

    async getElementTextContent(selector: Locator) {
        await expect(selector).toBeVisible();
        return selector.textContent();
    }

    async clickElement(selector: Locator) {
        await expect(selector).toBeVisible();
        await selector.click();
    }

    async compareElementTextContent(selector: Locator, value: string) {
        await expect(selector).toBeVisible();
        const elementTextContent = await this.getElementTextContent(selector);
        expect(elementTextContent.trim()).toBe(value);
    }

    async compareElementCount(selector: Locator, count: number) {
        const elementCount = await selector.count();
        expect(elementCount).toEqual(count);
    }

    async compareElementAttributeValue(selector: Locator, attrType: string, attrValue: string) {
        await expect(selector).toBeVisible();
        const eleAttributeValue = await selector.getAttribute(attrType);
        expect(eleAttributeValue).toBe(attrValue);
    }

    async goToPageAndWaitForLoad(path: string, title: string, baseUrl: string) {
        await this.page.goto(`${baseUrl}${path}`);
        const pageUrl = this.page.url();
        expect(pageUrl).toContain(path);
        await expect(this.page).toHaveTitle(title);
    }

}