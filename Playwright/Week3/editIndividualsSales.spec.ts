import test from '@playwright/test';

test("edit Individuals in SalesForce", async ({ page }) => {

//launching the url and login credentials for the app
    
    await page.goto("https://login.salesforce.com/")

    await page.locator("#username").fill("dilipkumar.rajendran@testleaf.com")

    await page.locator("[id ='password']").fill("TestLeaf@2025")

    await page.locator("#Login").click();//locating using id and clicking the button 

    // selecting individuals from APP launcher

    await page.locator("//span[text() ='App Launcher']").click();

    await page.locator("//button[@class ='slds-button']").last().click()

    await page.waitForTimeout(2000)

    await page.locator("//p[text() ='Individuals']").click()

    await page.waitForTimeout(2000)

    //selecting individuals tab from home page
    await page.locator("//span[text() ='Individuals']").first().click()

    await page.waitForTimeout(2000)

    await page.locator("//span[contains(text(),'PriyaIndividual')]").first().click()

    await page.waitForTimeout(2000)

    //selecting the data and editing it 
    await page.locator("//div[contains(text(),'Edit')]").click();

    //adding salutation 
    await page.locator(".select").first().click()

    await page.locator("//li[@class ='uiMenuItem uiRadioMenuItem']").nth(1).click()

    await page.locator("//span[text() ='Save']").click()

})