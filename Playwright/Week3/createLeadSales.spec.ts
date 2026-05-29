import test from '@playwright/test';

test("create Lead in SalesForce" , async({page}) => {
    
    //lanunching url and logging into SalesForce application 
    await page.goto ("https://login.salesforce.com/")

    await page.locator("#username").fill("dilipkumar.rajendran@testleaf.com" )//locating using  id and filling username 

    await page.locator("[id ='password']").fill("TestLeaf@2025")//locating using name and filling passoword

    await page.locator("#Login").click();
//selecting Sales from App launcher Menu 
     await page.locator("//span[text() ='App Launcher']").click();

     await page.locator("//button[@class ='slds-button']").last().click()

    await page.waitForTimeout(2000)
    
       await page.locator("//p[text() ='Sales']").click()

//clicking on leads and creating new lead
       await page.locator("//span[text() ='Leads']").first().click()
       
       await page.waitForTimeout(2000)

      await page.locator("//a[@class ='forceActionLink']/div").first().click();

      await page.waitForTimeout(2000)

       await page.locator("//button [@name ='salutation']").click()

       await page.locator("//lightning-base-combobox-item[@class ='slds-media slds-listbox__option slds-media_center slds-media_small slds-listbox__option_plain']").nth(1).click()

       await page.locator("[name ='lastName']").fill("Priyatest")

        await page.locator("[name ='Company']").fill("Priya")

         await page.locator("[name ='SaveEdit']").click()

        

})

