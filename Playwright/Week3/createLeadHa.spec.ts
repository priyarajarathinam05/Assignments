import test from '@playwright/test';

test("login And Create Lead" , async({page}) => {
    
    await page.goto ("https://leaftaps.com/opentaps/control/main")//launching the url 

    await page.locator("#username").fill("democsr")//locating using  id and filling username 

    await page.locator("[name='PASSWORD']").fill("crmsfa")//locating using name and filling passoword

    await page.locator(".decorativeSubmit").click();//locating using class and clicking the button 

    await page.waitForTimeout(12000) //timeout for the page to load 

    console.log("title is " ,await page.title())

     await page.locator(`text='CRM/SFA'`).click();//locating using link text  and clicking the link

     await page.waitForTimeout(10000) //timeout for the page to load 
     
      console.log("title after clicking link " ,await page.title())

      await page.locator(`text ='Leads'`).click(); //clicking the  leads tab
      
      await page.locator(`text ='Create Lead'`).first().click(); //clicking the first create lead link      
   
//Fillin all the details neccessary for creating lead
    await page.locator("#createLeadForm_companyName").fill("testleaftech");
           
    await page.locator("#createLeadForm_firstName").fill("PriyaQA");
               
    await page.locator("#createLeadForm_lastName").fill("testing");
            
    await page.locator("#createLeadForm_personalTitle").fill("Mrs ");
                       
    await page.locator("#createLeadForm_generalProfTitle").fill("Lead");
                        
    await page.locator("#createLeadForm_annualRevenue").fill("100000000");
                           
    await page.locator("#createLeadForm_departmentName").fill("Quality");

    await page.locator("#createLeadForm_primaryPhoneNumber").fill("9977876890");

    await page.locator("[name='submitButton']").last().click();

    await page.locator(`text='Logout'`).first().click();

            

})


