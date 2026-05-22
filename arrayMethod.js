//different array method without using loops



let arraydata=["apple","Banana","Cherry","Dates","Kiwi"]

//adding elements into array 
arraydata.push("Mango")

console.log (arraydata) 

//remove the last element
arraydata.pop()
console.log (arraydata)

//remove the first element 
arraydata.shift()
console.log (arraydata)

//add an element as first 
arraydata.unshift("Orange")
console.log (arraydata)

//include to check whether element exists
if(arraydata.includes ("Orange")){
    console.log("element exits")
}

//print the poistion of Element 

  console.log("The position of the element is  "+ arraydata.indexOf("Kiwi"))

  //To reverse the array element 
 
  console.log(arraydata.reverse()) 

  //sort the array 

  console.log(arraydata.sort()) //ascending order


  //convert array into string 

  console.log(arraydata.join())



