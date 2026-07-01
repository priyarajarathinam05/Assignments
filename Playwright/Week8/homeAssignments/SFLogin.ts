import {test as CF} from '@playwright/test'


export const customFixture= CF.extend<{SFlogin:any}>({

    SFlogin:async({page},use:any)=>{

         await page.goto("https://login.salesforce.com/")

    await page.locator("#username").fill("dilipkumar.rajendran@testleaf.com")

    await page.locator("[id ='password']").fill("TestLeaf@2025")

    await page.locator("#Login").click();
     await use(page)
     }


})