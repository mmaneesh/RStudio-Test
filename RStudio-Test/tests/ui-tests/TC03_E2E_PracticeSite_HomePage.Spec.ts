import {test, expect} from '@playwright/test';
import 'dotenv/config';

test.describe('Validating Create New Project Functionality', () => {

    test('Validating Account Holder Name', async({browser, baseURL}) => {
        const context = await browser.newContext({
            storageState: './tests/rstudiocloudloginstate.json'
        });

        const page = await context.newPage();
        await page.goto(`${baseURL}/content/yours?sort=name_asc`);
        await expect(page).toHaveTitle('RStudio Cloud');
        await expect(page.locator('//div[@class=\'navMenu\']')).toBeVisible();
        const acctHolderName = await page.locator('//div[@class=\'userName\']').textContent();
        expect(acctHolderName).toBe('RStudio Test');

        await page.close();
    });

    test.skip('Creating New Space', async({browser, baseURL}) => {
        const context = await browser.newContext({
            storageState: './tests/rstudiocloudloginstate.json'
        });

        const page = await context.newPage();
        await page.goto(`${baseURL}/content/yours?sort=name_asc`);
        await expect(page).toHaveTitle('RStudio Cloud');
        await expect(page.locator('//div[@class=\'navMenu\']')).toBeVisible();
        await expect(page.locator('//button[@class=\'menuItem newSpace\']')).toBeVisible();
        await page.locator('//button[@class=\'menuItem newSpace\']').click();

        await expect(page.locator('(//div[@class=\'dialogContainer\']//div[@class=\'modalDialog\'])')).toBeVisible();
        await page.locator('//input[@id=\'name\']').fill(process.env.SPACE_NAME);
        await page.locator('//button[@type=\'submit\']').click();

        await expect(page.locator('//div[@class=\'spaceNameWithOwner\']')).toBeVisible();
        const spaceName = await page.locator('//div[@class=\'spaceNameWithOwner\']').textContent();
        expect(spaceName.trim()).toEqual(process.env.SPACE_NAME);

        await page.close();
    });

    test('Creating New Project', async({browser, baseURL}) => {
        const context = await browser.newContext({
            storageState: './tests/rstudiocloudloginstate.json'
        });

        const page = await context.newPage();
        await page.goto(`${baseURL}/content/yours?sort=name_asc`);
        await expect(page.locator('//div[@class=\'spaceNameWithOwner\']')).toBeVisible();
        await page.locator('//div[@class=\'spaceNameWithOwner\']').click();

        await page.locator('//button[contains(@class,\'action menuDropDown\')]').click();
        await expect(page.locator('//div[@class=\'popupMenu open\']')).toBeVisible();

        // await page.locator('//span[text()=\'New RStudio Project\']').click();
        await Promise.all([
            page.waitForNavigation(),
            page.locator('button:has-text("New RStudio Project")').click()
        ]);

        await expect(page.locator('//span[text()=\'Preparing Project\']')).toBeVisible();
        await page.waitForLoadState('load');
        await page.waitForTimeout(10000);
        await expect(page.frameLocator('#contentIFrame').locator('#rstudio_shell_widget')).toBeVisible({timeout:15000});

        await page.locator('#currentLocation >> text=Untitled Project').click();
        await page.locator('input[type="text"]').fill(process.env.PROJECT_NAME);

        await expect(page.locator('//div[@class=\'rsc-breadcrumb\']//a')).toBeVisible();
        await page.locator('//div[@class=\'rsc-breadcrumb\']//a').click();

        await page.waitForSelector('//div[@class=\'itemTitle\']');
        const projectName = await page.locator('//div[@class=\'itemTitle\']').textContent();
        expect(projectName.trim()).toEqual(process.env.PROJECT_NAME);

        await page.locator('//button[@class=\'action trashProject\']').click();
        await expect(page.locator('//div[contains(@class,\'statusMessage info\')]//div[1]')).toBeVisible();

        await page.close();


    });

});