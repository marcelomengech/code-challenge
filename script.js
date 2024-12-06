function studentGrades(){
    const input = prompt(`enter student marks(0-100):`)
    const marks = Number(input);
  
    // Validate Marks
  
    if (isNaN(marks) || marks < 0 || marks > 100) {
        console.log(`Invalid input. Enter a number between 0 and 100`);
        return;
    }
    //Determine the Grades
  
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
  
    //Output
    console.log(`marks: ${marks}, Grade: ${grade}`);
  
  }
  // Second Challenge
  function carSpeed(speed){
    const speedLimit =70;
    const perKm =5;
  
    //Validate Input
  
    if (isNaN(speed) || speed < 0){
        console.log(`Invalid speed. Enter a positive number.`);
        return;
    }
  
    // Check speed and Calculate Demerit Points
  
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
  
    // Validate Input
    if (isNaN(basicSalary) || isNaN(benefits)) {
        console.log("Invalid input. Please enter numeric values.");
        return;
  
        // Calculate Gross Salary
  
        const grossSalary = basicSalary + benefits;
  
        //Calculate (PAYE) tax
  
        let tax = 0;
        if (grossSalary <=24000){
            tax = grossSalary + 0.1;
  
        }else if (grossSalary <=32333){
            tax = grossSalary + 0.25;
  
        }else {
            tax = grossSalary + 0.3;
  
    }
  }
  }
  
  // Calculate Nhif Deductions
  const nhifRates = [
    {min:0, max: 5999, deduction: 150},
    {min:6000, max: 7999, deductio: 300},
    {min:8000, max: 11999, deduction: 400},
    {min:12000, max: 14999, deduction: 500},
    {min:15000, max: 19999, deduction: 600},
    {min:20000, max: 24999, deduction: 750},
    {min:25000, max:29999, deduction: 850},
    {min:30000, max:34999, deduction: 900},
    {min:35000, max:39999, deduction: 950},
    {min:40000, max: Infinity, deduction: 1000},
  
  ];
  const rate = nhifRates.find(rate => grossSalary >= rate.min && grossSalary <= rate.max);
  const nhifDeduction = rate ? rate.deduction : null; 
  
  
  
  
  // Calculate Nssf Deductions
  
  const nssfDeduction = Math.min(grossSalary * 0.06,1800);
  
  // Calculate Net Salary
  const netSalary = grossSalary - tax - nhifDeduction - nssfDeduction;
  
  // Output
  console.log(`Gross Salary: ${grossSalary.toFixed(2)}`);
  console.log(`Tax (PAYE): ${tax.toFixed(2)}`);
  console.log(`NHIF Deduction: ${nhifDeduction.toFixed(2)}`);
  console.log(`NSSF Deduction: ${nssfDeduction.toFixed(2)}`);
  console.log(`Net Salary: ${netSalary.toFixed(2)}`);
  
  