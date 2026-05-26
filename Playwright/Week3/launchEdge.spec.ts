import { test, expect } from '@playwright/test';



    test("Launching Browser in Edge",async( {page} ,testInfo) => {  

        test.skip(testInfo.project.name !== "edge") //if the browser name not edge then below steps will be skipped

         await page.goto("https://www.redbus.in")

        console.log("title is :", await page.title())//to get the title of the page

        console.log("Current URL is:",   page.url()); // to get the current url

})

//to launch the browser in Webkit 
    test("Launching Browser in Webkit ",async( {page} ,testInfo) => {  

        test.skip(testInfo.project.name !== "webkit") //if the browser name not webkit  then below steps will be skipped

         await page.goto("https://www.flipkart.com")

        console.log("title is :", await page.title())//to get the title of the page

        console.log("Current URL is:",   page.url()); // to get the current url

})