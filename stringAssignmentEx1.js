//code to return the length of last word
function lengthOf(word){

    let afterSplit = word.split(" ")//returns the value after split applied

    let lenOfSplit = afterSplit.length;

    let lastWordlen = afterSplit[lenOfSplit-1].length//gives the length of the lastword
 
    return lastWordlen;

}
result = lengthOf("Hello World")
console.log(result)