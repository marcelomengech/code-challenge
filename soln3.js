const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function calculateNetSalary() {
    
    rl.question("Enter Basic Salary: ", (basicSalaryInput) => {
        rl.question("Enter Benefits: ", (benefitsInput) => {

            let basicSalary = parseFloat(basicSalaryInput);
            let benefits = parseFloat(benefitsInput);

            if (isNaN(basicSalary) || isNaN(benefits)) {
                console.log("Please enter valid numbers.");
                rl.close();
                return;
            }

            
            let grossSalary = basicSalary + benefits;

            // Calculate PAYE 
            let payee = 0;
            if (grossSalary <= 24000) {
                payee = grossSalary * 0.1;
            } else if (grossSalary <= 32333) {
                payee = 24000 * 0.1 + (grossSalary - 24000) * 0.25;
            } else if (grossSalary <= 500000) {
                payee = 24000 * 0.1 + (32333 - 24000) * 0.25 + (grossSalary - 32333) * 0.3;
            } else if (grossSalary <= 800000) {
                payee = 24000 * 0.1 + (32333 - 24000) * 0.25 + (500000 - 32333) * 0.3 + (grossSalary - 500000) * 0.325;
            } else {
                payee = 24000 * 0.1 + (32333 - 24000) * 0.25 + (500000 - 32333) * 0.3 + (800000 - 500000) * 0.325 + (grossSalary - 800000) * 0.35;
            }

            // NHIF Deduction based on gross salary
            let nhif = 0;
            if (grossSalary <= 5999) {
                nhif = 150;
            } else if (grossSalary <= 7999) {
                nhif = 300;
            } else if (grossSalary <= 11999) {
                nhif = 400;
            } else if (grossSalary <= 14999) {
                nhif = 500;
            } else if (grossSalary <= 19999) {
                nhif = 600;
            } else if (grossSalary <= 24999) {
                nhif = 750;
            } else if (grossSalary <= 29999) {
                nhif = 850;
            } else if (grossSalary <= 34999) {
                nhif = 900;
            } else if (grossSalary <= 39999) {
                nhif = 950;
            } else if (grossSalary <= 44999) {
                nhif = 1000;
            } else if (grossSalary <= 49999) {
                nhif = 1100;
            } else if (grossSalary <= 59999) {
                nhif = 1200;
            } else if (grossSalary <= 69999) {
                nhif = 1300;
            } else if (grossSalary <= 79999) {
                nhif = 1400;
            } else if (grossSalary <= 89999) {
                nhif = 1500;
            } else if (grossSalary <= 99999) {
                nhif = 1600;
            } else {
                nhif = 1700;
            }

            // NSSF Deduction(6%)
            let nssf = basicSalary * 0.06;

            // Calculate Net Salary
            let totalDeductions = payee + nhif + nssf;
            let netSalary = grossSalary - totalDeductions;

            // output results
            console.log("\n--- Salary Breakdown ---");
console.log(`Basic Salary: ${basicSalary}`);
console.log(`Benefits: ${benefits}`);
console.log(`Gross Salary: ${grossSalary}`);
console.log(`PAYE Tax: ${payee}`);
console.log(`NHIF Deduction: ${nhif}`);
console.log(`NSSF Deduction: ${nssf}`);
console.log(`Total Deductions: ${totalDeductions}`);
console.log(`Net Salary: ${netSalary}`);

            rl.close(); 
        });
    });
}

calculateNetSalary();