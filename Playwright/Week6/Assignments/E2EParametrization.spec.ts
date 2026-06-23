import test from '@playwright/test'
import {parse} from 'csv-parse/sync'
import fs from 'fs'
import dotenv from 'dotenv'

import { createLeadlocators } from '../../utils/leadLocator'
import editdata from '../../utils/EditLead.json'

const leaddata :any[]=parse(fs.readFileSync('utils/createLead.csv'),{skip_empty_lines: true,columns:true})
//reading environment details and login to application 
dotenv.config({path:`utils/Dev.env`})
  
    let url=process.env.url as string
    let userName=process.env.LT_username as string
    let password=process.env.LT_password as string


   //reading CSV file and entering the details 
    for(const createdata of leaddata){
         test(`use parameterization file testcase  ${createdata.Firstname}` ,async({page}) =>{


    await page.goto(url)
    //using locator file imported the locators and used here 
    //Login 
    await page.locator(createLeadlocators.username).fill(userName)
    await page.locator(createLeadlocators.password).fill(password)
    await page.locator(createLeadlocators.loginbutton).click()
    await page.waitForTimeout(2000)
    await page.getByRole('link',{name:createLeadlocators.crmsfmlink}).click()
    await page.waitForTimeout(2000)

    //create Lead and data read from CSV file
    await page.getByRole("link",{name:createLeadlocators.leadclick}).click()
    await page.getByRole("link",{name:createLeadlocators.createlead}).click()
    await page.waitForTimeout(1000)
    await page.locator(createLeadlocators.leadCompanyName).fill(createdata.Companyname)
    await page.locator(createLeadlocators.leadFirstname).fill(createdata.Firstname)
    await page.locator(createLeadlocators.leadLastName).fill(createdata.Lastname)
 await page.getByRole("button",{name:createLeadlocators.createLeadbutton}).click()
    await page.waitForTimeout(2000)
      //Edit the  Lead that has been created .data read from Json File
     await page.getByRole("link",{name:createLeadlocators.Editleadlink}).click()

       await page.locator(createLeadlocators.updateCompanyName).fill(editdata.companyName)
    await page.locator(createLeadlocators.updateFirstName).fill(editdata.firstName)
    await page.locator(createLeadlocators.updateLastName).fill(editdata.lastName)
  await page.getByRole("button",{name:createLeadlocators.EditLeadbutton}).click()
    

    
         })
        }

     