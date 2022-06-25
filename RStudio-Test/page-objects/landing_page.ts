import {Locator, Page} from '@playwright/test';
import BasePage from './base_page';

export class LandingPage extends BasePage {

    //LOCATOR TYPE VARIABLES
    readonly page : Page;
    readonly alreadyAUserButton : Locator;
    readonly availablePricingPlansLink : Locator;
    readonly freePlanCard : Locator;
    readonly getStartedForFreeButton : Locator;
    readonly logInContainer : Locator;
    readonly logInErrorMessage : Locator;
    readonly logInLink : Locator;
    readonly rStudioCloudGuideLink : Locator;
    readonly rStudioDotComLink : Locator;
    readonly rStudioFreeBanner : Locator;
    readonly rStudioHeaderBanner : Locator;
    readonly rStudioHeroBand : Locator;
    readonly rStudioProductLogo : Locator;
    readonly rStudioFooter : Locator;
    readonly signInLink : Locator;

    //STRING TYPE VARIABLES
    readonly loginErrorMessageValue = 'Login failed - please verify that your email and password are correct.';

    //Initializing Constructor
    constructor(page: Page) {
        super(page);
        this.page = page;
        this.alreadyAUserButton = page.locator('(//a[@class=\'bigButton\'])[2]');
        this.availablePricingPlansLink = page.locator('//ul[@class=\'sidebarNav\']//li[1]//a');
        this.freePlanCard = page.locator('(//div[@class=\'planCard\'])');
        this.getStartedForFreeButton = page.locator('(//a[@class=\'bigButton\'])[1]');
        this.rStudioHeaderBanner = page.locator('//div[@id=\'rStudioHeader\']');
        this.rStudioHeroBand = page.locator('(//div[@class=\'band hero\']//div)[1]');
        this.logInContainer = page.locator('#entry');
        this.logInErrorMessage = page.locator('//span[text()=\'Login failed - please verify that your email and password are correct.\']');
        this.logInLink = page.locator('//span[text()=\'Log In\']');
        this.signInLink = page.locator('//span[text()=\'Sign Up\']');
        this.rStudioCloudGuideLink = page.locator('//li[@class=\'navGuide\']//a[1]');
        this.rStudioDotComLink = page.locator('//li[@class=\'navRStudioDotCom\']//a[1]');
        this.rStudioFreeBanner = page.locator('//div[@class=\'band freeBanner\']');
        this.rStudioProductLogo = page.locator('(//div[@class=\'productLogo\'])[1]');
        this.rStudioFooter = page.locator('//div[@class=\'band rstudioFooter\']');


    }

}