import test, { expect } from '@playwright/test'

test.use({ storageState: "data/salesforce_login.json" })

test("upload file and storage state", async ({ page }) => {

    await page.goto("https://testleaf.lightning.force.com/lightning/page/home")
    await page.locator("//span[text() ='App Launcher']").click();
    await page.waitForTimeout(2000)
    await page.locator("//button[text()='View All']").click()
    await page.locator("(//input[@class='slds-input'])[4]").fill("Accounts")//searching for Accounts

    await page.locator("//mark[text()='Accounts']").click()

    await page.waitForTimeout(2000)
    //Creating New Account
    await page.getByTitle("New").last().click()
    await page.waitForTimeout(2000)
    const fileName="PW_uploadFiletest"
    await page.locator("[name='Name']").fill(fileName)
    await page.getByLabel("Type").first().click()
    await page.getByTitle("Prospect").click()
    await page.getByLabel("Industry").first().click()
    await page.getByTitle("Banking").click()
    await page.locator("//button[text()='Save']").last().click()
await page.waitForTimeout(2000)
//Assertion for account created
    const msg = await page.locator(".slds-hyphenate").innerText()

    console.log(msg)
    expect(msg).toContain(fileName)
    await page.waitForTimeout(5000)
    //Uploading the file 
    await page.keyboard.press('End');
    await page.locator("//input[contains(@class,'file')]").setInputFiles("testData/test.docx")
    await page.waitForTimeout(2000)
    await page.locator("//span[text()='Done']").click()
    const filemessage = await page.locator(".slds-hyphenate").innerText()
    console.log(filemessage)

})