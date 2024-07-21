// Control Structures

// ========== Activity-1: If/Else  Statements ===========

// Task-1: Write a program to check if a number is positive, negative or zero and log the result to the console.

function checkIfElse(num) {
  if (num > 0) {
    console.log("Number is positive");
  } else if (num < 0) {
    console.log("Number is Negative");
  } else {
    console.log("Number is Zero");
  }
}
// checkIfElse(0)

// Task-2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.

function validForVote(age) {
  if (age >= 18 && age <= 90) {
    console.log("You are valid doing for vote");
  } else {
    console.log("You are not eligible");
  }
}
// validForVote(56)

// ========== Activity-2: Nested If/Else  Statements ===========

// Task-3: Write a program to find the largest of three numbers using nested if-else statements.

function nestedIfElse(a, b, c) {
  if (a > b) {
    if (a > c) {
      return a;
    } else {
      return c;
    }
  } else {
    if (b > c) {
      return b;
    } else {
      return c;
    }
  }
}
const num1 = 32;
const num2 = 29;
const num3 = 14;

const largestNumber = nestedIfElse(num1, num2, num3);
// console.log(`The largest number is ${largestNumber}`)

// ========== Activity-3: Switch Case ===========

// Task-4: Write a program that use a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.

function findDay(day) {
  switch (day) {
    case 1:
      console.log("Monday");
      break;
    case 2:
      console.log("Tuesday");
      break;
    case 3:
      console.log("Wednesday");
      break;
    case 4:
      console.log("Thursday");
      break;
    case 5:
      console.log("Friay");
      break;
    case 6:
      console.log("Saturday");
      break;
    case 7:
      console.log("Sunday");
      break;
    default:
      break;
  }
}
// findDay(2)

// Task-5: Write a program that use a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.

function assignGrade(score) {
  switch (true) {
    case score > 80 && score <= 100:
      console.log("A");
      break;
    case score > 65 && score <= 80:
      console.log("B");
      break;
    case score > 50 && score <= 65:
      console.log("C");
      break;
    case score > 35 && score <= 50:
      console.log("D");
      break;
    case score > 25 && score <= 35:
      console.log("F");
      break;
    default:
      console.log("Invalid");
  }
}
// assignGrade(55)

// ========== Activity-4: Conditional (ternary) Operator ===========

// Task-6: Writer a program that use the ternary operator to chack if a number is even or odd and log the result to the console.

function findOddAndEven(num) {
  num % 2 == 0 && num % num == 0
    ? console.log(`${num} is the Even number`)
    : console.log(`${num} is the odd number`);
}
// findOddAndEven(576)

// ========== Activity-4: Combining Conditions ===========

// Task-7: write a program to check if a year is a leap year using multiple conditions (dibisible by 4, but not 100 unless also dibisile by 400) and log the result to the console.

function findLeapYear(year) {
  let isYear = Boolean;
  if (year % 4 == 0) {
    if (year % 100 == 0) {
      if (year % 400 == 0) {
      } else {
        isYear = false;
      }
    }
    isYear = true;
  } else {
    isYear = false;
  }
  console.log(`The ${year} is the ${isYear ? "LEAP year" : "NOT Leap year"}`);
}
// findLeapYear(2000);

// =========******** Feature Request *******==========

// 1. Number Check Script: Write a scripts that checks if a number is positive, negative or zero using if-else statements and logs the result.

function main(numVal) {
  console.log(checkIfElse(numVal));
}
// main(23);
