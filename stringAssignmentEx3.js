//code to find a word anagaram or not 

function isAnagram(a,b){
      a=a.toLowerCase()
      a=a.split(" ").join("")
      console.log(a)
         b=b.toLowerCase()
      b=b.split(" ").join("")
        let finalcount=0
    if(a.length==b.length)
    {
        for(let i=0;i<a.length;i++)
        {
             let count=0
            for(let j=0;j<a.length;j++)
            {
                if(a[i]==b[j])              
                {
                    count++
                                      
               }
            }
            if(count==0){
                finalcount=0               
                 console.log("The letter  "+ a[i]  +"  is not present")
            }
            else if (count>1) {             
                 let countdupli=1                
               finalcount=finalcount+countdupli               
            } 
            else{            
               finalcount++
            }          
        }
                    
    }
console.log(finalcount)  
if(finalcount==a.length){
    console.log("the word is anagram")
}
else{
 console.log("the word is not anagram")
}
}
res=isAnagram("the eyes","they see")

