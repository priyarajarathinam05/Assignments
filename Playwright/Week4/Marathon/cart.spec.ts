

test.use({ storageState: "data/serviceNow_login.json" })//used strorage state for login 

import test, { expect } from '@playwright/test'

test("test login for serviceNow" ,async({page})=>{

  await page.goto("https://dev296651.service-now.com/now/nav/ui/classic/params/target/ui_page.do%3Fsys_id%3D9017bae183cd0f1042bdeec0deaad3e5")
   await page.waitForTimeout(2000)
  await page.getByLabel("All",{ exact: true }).click()
  await page.waitForTimeout(2000)
  await page.getByLabel("Service Catalog 3 of 23",{ exact: true }).click()//clicking service Catalog
  await page.waitForTimeout(2000)
  //using framelocator locating the instance
 await page.frameLocator("#gsft_main").getByLabel("Mobiles. Cell phones to meet your business needs.").click()
   await page.waitForTimeout(2000)
 
  await page.frameLocator("#gsft_main").locator("//h3[@class='h2']/strong").nth(1).click()
    
  await page.waitForTimeout(2000)

  //selecting the mobile and filling mandatory details 
    const outerframe=await page.frameLocator("#gsft_main")
    await outerframe.locator("//label[@class='radio-label']").first().check()
    await page.waitForTimeout(1000)
   await outerframe.locator("[name='IO:4afecf4e9747011021983d1e6253af34']").fill("99")
  
   await outerframe.locator("//select[@class='form-control cat_item_option ']").selectOption({ value: "unlimited" })
   //await outerframe.locator("//select[@class='form-control cat_item_option ']").selectOption("Unlimited")
  await outerframe.locator("//label[text()='Sierra Blue']").click()
   await outerframe.locator("//label[text()='512 GB [add $300.00]']").click()
   //ordering the mobile 
    await outerframe.locator("#oi_order_now_button").click()
    await page.waitForTimeout(2000)

     const outerframe1= page.frameLocator("#gsft_main")
    const message=outerframe1.locator("//div[@class='notification notification-success']")
  console.log("confirmationmessage" +await message.innerText())
  //Screenshot of full page
  await page.screenshot({path:"screenshots/servicenowcart.png",fullPage:true})

})

