# Challenge 1: STudent Grade Generator


This is a simple Node.js application that prompts the user to input a student's marks and then outputs the corresponding grade based on predefined grading criteria. The program uses the `readline` module to read user input from the console.

## Requirements

- Node.js (version 14 or higher recommended)

## How to Run

1. Ensure you have Node.js installed on your machine. 
2. Save the provided code into a file, for example `gradeGenerator.js`.
3. Open a terminal or command prompt.
4. Navigate to the directory where the file is located.
The program will prompt you to enter the student's marks. Once entered, it will print the grade based on the following scale:

- Marks > 79: Grade "A"
- Marks between 60 and 79: Grade "B"
- Marks between 50 and 59: Grade "C"
- Marks between 40 and 49: Grade "D"
- Marks < 40: Grade "E"
If the input is invalid (i.e., not a number or out of range), the program will ask you to enter a valid number between 0 and 100.

// Code Explanation
- The code uses the built-in readline module to create an interface for reading input from the user via the command line.
- The function gradeGenerator() handles the input, validates the marks, and outputs the appropriate grade.
- Input is validated to ensure it is within the range of 0 to 100. If invalid input is provided, the program asks for a valid number.
- After processing the input, the readline interface is closed using rl.close()


## Challenge 2: Speed Detector
// Overview

- The Speed Checker program is a simple JavaScript application that allows a user to input their driving speed. Based on the input speed, the program calculates the demerit points according to a given speed limit and demerit point rules. If the speed exceeds the limit significantly, the program will either display the demerit points or a warning message about license suspension.

// Features

- Prompts the user to enter a speed.
- Checks if the speed is within the legal limit (set to 70 km/h).
- Calculates the number of demerit points based on the excess speed.
- Suspends the license if the demerit points exceed a threshold.
- Displays "Ok" if the speed is within the limit.
- Provides feedback on demerit points or license suspension if applicable.

//Requirements

- Node.js: This script uses Node.js' built-in readline module to interact with the user via the command line.
 // How it works

- Speed Limit: The speed limit is set to 70 km/h.
- Demerit Points: For every 5 km/h over the speed limit, 1 demerit point is issued.
- License Suspension: If a driver accumulates more than 12 demerit points, their license is suspended.
- The program calculates and outputs:
"Ok" if the speed is within the limit.
- The number of demerit points if the speed exceeds the limit but is under the threshold for suspension.

// How to run

1. Clone this repository to your local machine.
2. Open the terminal and navigate to the project directory.
3. Run the program using Node.js:


## Challenge3: Net Salary Calculator
// Description

- This is a Node.js application that calculates the net salary of an individual based on their basic salary and benefits. The application takes input from the user and processes the following deductions:

- PAYE 
- NHIF 
- NSSF 
 // Features

Input: Basic Salary and Benefits.
Deductions:
- PAYE Tax based on the gross salary.
- NHIF Deduction based on gross salary bands.
- NSSF Deduction (6% of the basic salary).
- Output: Breakdown of the salary, including basic salary, benefits, gross salary, individual deductions, and the final net salary.
Setup and Usage
Prerequisites:

Node.js should be installed on your machine.
Installation:

Clone or download this project to your local machine.
Running the Application:

Open a terminal in the project directory.
Run the command:
Copy code
node salaryCalculator.js
You will be prompted to enter the basic salary and benefits. The program will output the salary breakdown and net salary.
Example
yaml
Copy code
Enter Basic Salary: 50000
Enter Benefits: 10000

--- Salary Breakdown ---
- Basic Salary: 50000
- Benefits: 10000
- Gross Salary: 60000
- PAYE Tax: 9500
- NHIF Deduction: 1200
- NSSF Deduction: 3000
- Total Deductions: 13700
- Net Salary: 46300
Code Explanation

// Input Handling:

- The application uses the readline module to interact with the user, asking for basic salary and benefits.
Gross Salary Calculation:

- The gross salary is calculated by adding the basic salary and benefits.
PAYE Calculation:

- The application applies a progressive tax rate based on the gross salary.
NHIF Deduction:

- The NHIF deduction is determined by a set of salary bands, with higher salaries leading to higher deductions.
NSSF Deduction:

- A fixed 6% of the basic salary is deducted for the NSSF.
Net Salary:

The total deductions (PAYE, NHIF, and NSSF) are subtracted from the gross salary to give the net salary.