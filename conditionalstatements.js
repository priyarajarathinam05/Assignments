function launchBrowser(browserName){
    if (browserName=="Chrome"||browserName=="chrome"){
        console.log(browserName +"   Browser is launched Successfully")
    }else{
        console.log(browserName + "  Browser launch is not successful.check the browser type")
    }

}


function testType(testName){
    switch (testName) {
        case "smoke":
            console.log(testName + "  Test has to be executed")
        break;
          case "sanity":
            console.log(testName + "  Test has to be executed")
        break;

        case "Regression":
            console.log(testName + "  Test has to be executed")
        break;

       default:
            console.log(testName + "  Test has to be executed")
        break;
    }

}
launchBrowser("chrome")
testType("endtoend")