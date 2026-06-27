import {test,expect} from '@playwright/test'
//declaring variables globally to accept any data type 
let access_Token :any
let instance_Url :any
let token_Type:any
let opp_ID:any


test("Generate access token",async({request}) =>{

    let tokenrequest=await request.post("https://login.salesforce.com/services/oauth2/token",{

    headers:{

    "Content-Type":"application/x-www-form-urlencoded",
    "Connection":"keep-alive"
},
form:{
    "grant_type":"password",
    "username":"gauthami.vn@testleaf.com",
    "password":"TestLeaf@123",
    "client_id":"3MVG9rZjd7MXFdLhTFd7jYNtTiu5DzDqdNCte5DvFnv7tbIspjQ9CGPizYGUq7h6T69VSmfqxT9yY2NS7tz84",
    "client_secret":"09FE1EF4BDD93B17821073243A441F8A780A639C21D925B575C1112A3F5E0DBE",
}
})


let response=await tokenrequest.json()
console.log(response)
access_Token=response.access_token
instance_Url=response.instance_url
token_Type=response.token_type
})



test("Create New Opportunity",async({request})=>{
let createopportunity= await request.post(`${instance_Url}/services/data/v67.0/sobjects/Opportunity`,{
headers:{
    "Content-Type":"application/json",
    "Authorization":`${token_Type} ${access_Token}`
},
data:{
   
    "Name":"testLeaf Automation",
    "CloseDate":"2026-12-05",
    "StageName":"Need Analysis"
}
})


let createoppresponse= await createopportunity.json()
console.log(createoppresponse)
opp_ID=createoppresponse.id//storing the created ID in opp_ID
console.log(opp_ID)
expect(createopportunity.status()).toBe(201)
expect(createoppresponse.id).toEqual(opp_ID)
})



//changing the staging Name  and type 
test("updating the Opportunity details ",async({request})=>{

let updateopp= await request.patch(`${instance_Url}/services/data/v67.0/sobjects/Opportunity/${opp_ID}`,{
headers:{
    "Content-Type":"application/json",
    "Authorization":`${token_Type} ${access_Token}`
},

data:{
    "Type":"New Customer",
    "StageName":"Prospecting"
}
})
expect(updateopp.status()).toBe(204)



})

test("Get Opportunity ",async({request})=>{
let getopportunity= await request.get(`${instance_Url}/services/data/v67.0/sobjects/Opportunity/${opp_ID}`,{
headers:{
    "Content-Type":"application/json",
    "Authorization":`${token_Type} ${access_Token}`
}

})


let getoppresponse= await getopportunity.json()
console.log(getoppresponse)

expect(getoppresponse.Id).toEqual(opp_ID)
expect(getoppresponse.StageName).toEqual("Prospecting")
expect(getoppresponse.Type).toEqual("New Customer")

})
test("delete opportunity",async({request})=>{


let deleteopportunity= await request.delete(`${instance_Url}/services/data/v67.0/sobjects/Opportunity/${opp_ID}`,{
headers:{
    "Content-Type":"application/json",
    "Authorization":`${token_Type} ${access_Token}`
}


})
expect(deleteopportunity.status()).toBe(204)
})




