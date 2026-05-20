//code to find a word anagaram or not 

function isAnagram(string1,string2){
     const str1=string1.toLowerCase().split("").join("") //converts the char into lower case and remove any spaces in between
      
     const str2=string2.toLowerCase().split("").join("")

    if(str1.length === str2.length)//comparing the length and sorting
         {
          const  strsorted1=str1.split("").sort().join("");
           
           const  strsorted2=str2.split("").sort().join("");

          const result= strsorted1 === strsorted2//comparing the sorted strings 

          if(result === true)
               {
            console.log(result  +"     the words given are   anagram")
          }
          else
            {      
    
             console.log(result  +"     the words given are not  anagram")
          }
        return result
        }                      

    else
        {
        console.log("the strings are not Anagram")
    }
}
 result = isAnagram("the eyes","they see")
