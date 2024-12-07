// Since my environment(Node.js) won't does not support prompt function
// I've to import the readline module and create an interface for reading input from the console.
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


// a function to write student grade generator
function gradeGenrator() {

    //Input Handling
    rl.question("Enter the student marks: ", (input) => {

    let marks = parseInt(input);

    //Validation
    if (marks >= 0 && marks <=100) {
        
        
        if (marks > 79) {
        console.log("A");
    } 
    else if (marks >= 60 && marks <= 79) {
        console.log("B");
    } 
    
    else if (marks >= 50 &&  marks <=59) {
        console.log("C");
    } 
    
    else if (marks >= 40 && marks <= 49) {
        console.log("D");
    } 
    
    else {
    console.log("E");
    }
}
    else {
        console.log("Enter the marks between 0 and 100:");
    }
    rl.close(); // Close the readline interface after the input
  });
}

gradeGenrator();