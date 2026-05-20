//code to return the length of last word
let word="Hello World"
let valueAfter=word.split(" ")
let lenAftersplit=valueAfter.length
let lenOfLastWord=valueAfter[lenAftersplit-1].length
console.log(lenOfLastWord)