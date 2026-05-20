//trim functionality 

function lengthOfString(value){

    let afterSplit = value.trim().toString().split(" ")//returns the value after split applied

    let lenOfSplit = afterSplit.length;

    let lastWordlen = afterSplit[lenOfSplit-1].length//gives the length of the lastword
 
    return lastWordlen;

}
result = lengthOfString("   fly me to the moon  ")
console.log(result)


