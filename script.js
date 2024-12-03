// First Challenge
function studentGrades(){
    const input = prompt(`enter student marks(0-100):`)
    const marks = Number(input);

    if (isNaN(marks) || marks < 0 || marks > 100) {
        console.log(`Invalid input. Enter a number between 0 and 100`);
        return;
    }
    let grade;
    if(marks >=79){
        grade = `A`;

    }else if(marks >=60){
        grade = `B`;

    }else if (marks >=50){
        grade = `C`;
    }else if (marks >=40){
        grade = `D`;

    }else {
        grade = `E`
    }
    console.log(`marks: ${marks}, Grade: ${grade}`);
    
}
// Second Challenge
function carSpeed(speed){
    const speedLimit =70;
    const perKm =5;

    if (isNaN(speed) || speed < 0){
        console.log(`Invalid speed. Enter a positive number.`);
        return;
    }
    if (speed <= speedLimit){
        console.log("Ok");

    }else {
        const demeritPoints = Math.floor((speed - speedLimit) / perKm);

        if (demeritPoints > 12) {
            console.log(`Licence suspended`);

        }else {
            console.log(`Points: ${demeritPoints}`);
        }
    }

}

// Third Challenge
function netSalaryCalculator(){
    const basicSalary = parseFloat(prompt("Enter your basic salary:"));
    const benefits = parseFloat(prompt("Enter your benefits:"));
    if (isNaN(basicSalary) || isNaN(benefits)) {
        console.log("Invalid input. Please enter numeric values.");
        return;
        
    }
}