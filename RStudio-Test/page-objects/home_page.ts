import {Locator, Page} from '@playwright/test';
import BasePage from './base_page';

export class HomePage extends BasePage {

    //LOCATOR TYPE VARIABLES
    readonly page : Page;
    readonly navMenu : Locator;

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.navMenu = page.locator('//div[@class=\'navMenu\']');
    }
}