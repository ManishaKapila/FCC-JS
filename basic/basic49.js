function myLocalScope() {
    'use strict'; // you shouldn't need to edit this line
    
    console.log(myVar);
  }
  myLocalScope();
  var myVar;
  // Run and check the console
  // myVar is not defined outside of myLocalScope
  console.log(myVar);
  
  // Now remove the console log line to pass the test
  