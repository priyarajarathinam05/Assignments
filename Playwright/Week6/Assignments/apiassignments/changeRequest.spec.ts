import test, { expect } from '@playwright/test'
let username="admin"
let password="FGf1Zodo==R5"
let login=`${username}:${password}`
//btoa
let loginInfo=btoa(login)
console.log(loginInfo)

let   sys_Id :any[]
test("Post Request In SN",async({request})=>{
let postReq= await request.post('https://dev212269.service-now.com/api/now/table/change_request',{

    headers:{
        "Content-Type":"application/json",
        "Authorization":`Basic ${loginInfo}`
    },


    //request body -> raw/ json
    data:{
   "short_description":"creationofIncident",
   "caller_id":"Priya",
    }
}
)
//response body
let res= await postReq.json()
console.log(res)
sys_Id=res.result.sys_id
console.log(sys_Id)

expect(postReq.status()).toBe(201)
})

//GET Request 

test("Get Request",async({request})=>{
    let getReq= await request.get(`https://dev212269.service-now.com/api/now/table/change_request/${sys_Id}`,{
        headers:{
            "Content-Type":"application/json",
        "Authorization":`Basic ${loginInfo}`
        }
        

    })
    //response body
let getRes=await getReq.json()
console.log(getRes)

})

//patch
test("Patch Request",async({request})=>{
    let patchreq= await request.patch(`https://dev212269.service-now.com/api/now/table/change_request/${sys_Id}`,{
        headers:{
            "Content-Type":"application/json",
        "Authorization":`Basic ${loginInfo}`
        },
         //request body -> raw/ json
    data:{
   "short_description":"updatingthedescription",
   "caller_id":"Priya",
    }
    })
    //response body
let patchres=await patchreq.json()
console.log(patchres)
console.log(patchres.result.short_description)
expect (patchreq.status()).toBe(200)

})
//delete
test("Delete Request",async({request})=>{
    let delreq= await request.delete(`https://dev212269.service-now.com/api/now/table/change_request/${sys_Id}`,{
        headers:{
            "Content-Type":"application/json",
        "Authorization":`Basic ${loginInfo}`
        }

    })


expect (delreq.status()).toBe(204)

})