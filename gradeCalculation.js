
function gradeCalculation(marks){ 

       
    switch (true) {
        case (marks>=35 && marks < 50):        
            console.log("Grade is D")
        break;
           case (marks>=50 && marks < 75):        
            console.log("Grade is C")
        break;

        case   (marks>=75 && marks < 90):        
            console.log("Grade is B")
        break;
        case   (marks>=90 && marks <=100):        
            console.log("Grade is A")
        break;
       default:
            console.log("Better Luck next time")
                      break;
    }

}
gradeCalculation(60)
