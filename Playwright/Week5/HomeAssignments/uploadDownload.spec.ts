import test, { expect } from '@playwright/test'

test("upload file",async({page}) =>{

    page.goto("https://the-internet.herokuapp.com/upload")
    await page.locator("//input[@id='file-upload']").setInputFiles("testData/Resume_Bhuvanesh.pdf")
    await page.locator("#file-submit").click()
   const msg= await page.locator("//div[@class='example']").innerText()
   expect (msg).toContain("File") 

})

test("upload image",async({page}) =>{
    page.goto("https://the-internet.herokuapp.com/upload")
      const uploadimage= page.waitForEvent('filechooser')
    await page.locator("#drag-drop-upload").click()
    const file= await uploadimage

    await file.setFiles("testData/Capture.PNG")
})

test.only("download image",async({page}) =>{
    page.goto("https://the-internet.herokuapp.com/download")
      const downloadimage= page.waitForEvent('download')
    await page.getByRole("link" ,{name:'Python Selenium Day 7 Notes.docx'}).click()
    const fileDownload=await downloadimage

    await fileDownload.saveAs("testData/"+fileDownload.suggestedFilename())

    await page.waitForTimeout(2000)
})