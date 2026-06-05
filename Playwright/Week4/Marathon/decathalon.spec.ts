import { test, expect } from '@playwright/test'

test("Search product, apply filters, add to cart in Decathlon", async ({ page }) => {

    await page.goto("https://www.decathlon.in/")
    //Verify the user is navigated to the Decathlon"  
    await expect(page.getByLabel("Decathlon Home")).toBeVisible()
    await expect(page.getByPlaceholder("search")).toBeEnabled()//checking the field is enabled
    await page.getByPlaceholder("search").click()
    await page.getByPlaceholder("Search").fill("shoes")
    await page.waitForTimeout(2000)
    await page.getByPlaceholder("Search").press('Enter')
    console.log("Page Title is", await page.title())
    await page.waitForTimeout(2000)
    //selecting the filters
    await page.locator("//span[text()='Gender']").click()
    await page.locator("(//span[text()='Men'])[2]").click()
    await page.locator("//span[text()='Sport']").click()
    await page.locator("//span[text()='Running']").click()
    await page.locator("//span[text()='Size']").click()
    await page.locator("//span[text()='Uk 10.5 - eu 45']").click()
    //printing the filters selected 
    const filters = await page.locator("//span[@class='leading-6 font-medium text-rock-900']").all()
    for (const data of filters) {
        console.log("Filters selected", await data.innerText())
    }
    // //sorting is not working in the ui itself so commented this part of code 
    // await page.locator("data-test-id=sort-bar-desktop:chevron-down-icon").click()
    // await page.locator("//span[text()='Price (high → low) ']").click()
    // await page.waitForTimeout(2000)
    //adding to cart 
    await page.getByLabel("Add to cart").first().click()
    await page.waitForTimeout(2000)
    await page.locator("//span[text()='UK 10.5 - EU 45']").click()
    await page.locator("//span[text()='Add to cart']").click()

    const cartmsg = await page.locator("//h3[contains(text(),'Prod')]").innerText()

    console.log("after adding to cart", cartmsg)
    //going to cart and checking the price

    await page.locator("//span[text()='Cart']").click()
    await page.waitForTimeout(2000)
    const price = await page.locator("data-test-id=cart:cart-checkout-total-cart-value").innerText()
    console.log("The total price is", price)
})