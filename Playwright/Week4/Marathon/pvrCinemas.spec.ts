import { test, expect } from '@playwright/test'

test("dynamic movie ticket booking flow in PVR Cinemas website", async ({ page }) => {

  await page.goto("https://www.pvrcinemas.com/.")
  await page.waitForTimeout(3000)
  await page.locator("//h6[text()='Chennai']").click()
  await page.waitForTimeout(2000)
  await page.locator("//span[text()='Cinema']").click()
  await page.locator("//span[text()='Select Cinema']").click()
  await page.waitForTimeout(2000)
  //selecting movie name theatre  and timings 
  await page.locator("//span[text()='INOX National,Virugambakkam Chennai']").click()
  await page.locator("//span[contains(text(),'Tomorrow')]").click()
  const movie = page.locator("(//span[text()='KARUPPU'])[2]")
  await movie.click()
  const moviename = await movie.innerText()
  await page.locator("//span[text()='10:30 PM']").click()
  await page.getByLabel("Submit").click()
  await page.waitForTimeout(2000)
  //selecting seats
  await page.getByRole("button", { name: "Accept" }).click()
  const seatnumber = page.locator("//span[@id='SL.SILVER|E:8']")
  await seatnumber.click()
  const bookedseat = await seatnumber.innerText()
  await page.waitForTimeout(2000)
  //validating the movie name 
  const actual = await page.locator("//h5[text()='KARUPPU']")
  await expect(actual).toHaveText("KARUPPU")

  //validating total ticket amount is displayed by checking grand total is visible or not
  await expect(page.locator("//h6[text()='Grand Total']")).toBeVisible()
  //printing movie summary 
  console.log("Booking details are ",await page.locator("//div[@class='movies-summary']").innerText())
  //assertion for selected seats 
  await expect(page.locator("//div[@class='seat-number']")).toContainText(bookedseat)
  //verifying page title
  await expect(page).toHaveTitle("PVR Cinemas")
  //printing the ticket price
  console.log("the ticket price is", await page.locator("//div[@class='grand-prices']/h6").innerText())

})