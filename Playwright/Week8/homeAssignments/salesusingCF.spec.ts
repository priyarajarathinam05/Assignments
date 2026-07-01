import { customFixture } from "./SFLogin";

customFixture("using custom fixture", async ({ SFlogin }) => { //using customfixture name instead of page


    await SFlogin.locator("//span[text() ='App Launcher']").click();

    await SFlogin.locator("//button[@class ='slds-button']").last().click()

    await SFlogin.waitForTimeout(2000)

    await SFlogin.locator("//p[text() ='Sales']").click()

    //clicking on leads and creating new lead
    await SFlogin.locator("//span[text() ='Leads']").first().click()

    await SFlogin.waitForTimeout(2000)

    await SFlogin.locator("//a[@class ='forceActionLink']/div").first().click();

    await SFlogin.waitForTimeout(2000)

    await SFlogin.locator("//button [@name ='salutation']").click()

    await SFlogin.locator("//lightning-base-combobox-item[@class ='slds-media slds-listbox__option slds-media_center slds-media_small slds-listbox__option_plain']").nth(1).click()

    await SFlogin.locator("[name ='lastName']").fill("Priyatest")

    await SFlogin.locator("[name ='Company']").fill("Priya")

    await SFlogin.locator("[name ='SaveEdit']").click()



})
