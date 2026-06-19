import test from '@playwright/test'

test("test login for serviceNow" ,async({page})=>{

  await page.goto("https://dev296651.service-now.com/")
  await page.locator("#user_name").fill("admin")
  await page.locator("#user_password").fill("E7i*7wNgX*mM")
  await page.locator("#sysverb_login").click()  
  await page.context().storageState({path:'data/serviceNow_login.json'})

})

