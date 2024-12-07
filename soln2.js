const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function SpeedChecker(speed) {
    const speedLimit = 70;
    const demeritPointMark = 5;
    

    //Prompt the driver to enter the speed
    rl.question("Enter the speed ", (input) => {

        let speed = parseInt(input);

        const excessSpeed = speed- speedLimit;
        const demeritPoints = Math.floor(excessSpeed / demeritPointMark);


    if (speed <= speedLimit) {
        console.log("Ok");
    }

    else if(demeritPoints > 12) {
        console.log("License suspended");
    }

    else {
        console.log(`Points: ${demeritPoints}`);

    }

    rl.close(); // Close the readline interface after the input
  });

}
SpeedChecker()