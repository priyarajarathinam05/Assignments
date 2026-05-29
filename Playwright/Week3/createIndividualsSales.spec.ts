import test from '@playwright/test';

test("create Individuals in SalesForce", async ({ page }) => {

  await page.goto("https://login.salesforce.com/")//launching the url 

  await page.locator("#username").fill("dilipkumar.rajendran@testleaf.com")//locating using  id and filling username 

  await page.locator("[id ='password']").fill("TestLeaf@2025")//locating using name and filling passoword

  await page.locator("#Login").click();
  //selecting individuals from app launcher
  await page.locator("//span[text() ='App Launcher']").click();

  await page.locator("//button[@class ='slds-button']").last().click()

  await page.waitForTimeout(2000)

  await page.locator("//p[text() ='Individuals']").click()

  await page.waitForTimeout(2000)

  //creating individuals from individual drop down   

  await page.locator("//span[text() ='Individuals List']").click()

  await page.locator("//span[text() ='New Individual']").click()

  await page.getByPlaceholder('Last Name').fill("PriyaIndividual")

  await page.locator("//span[text() ='Save']").click()

})