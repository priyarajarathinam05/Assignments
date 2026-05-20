//trim functionality 
let inputWord="    fly me to the moon "
let wordAfterTrim=inputWord.trim().toString()
let strArray=wordAfterTrim.split(" ")
console.log(strArray)
let lenOfLastWord=strArray[strArray.length-1].length
console.log(lenOfLastWord)
