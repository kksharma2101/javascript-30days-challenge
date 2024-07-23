// Loops

// ========== Activity-1: For Loop ===========

// Task-1: Write a program to print numbers from 1 to 10 using for loops.
function printOneToTen() {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
}
// printOneToTen();

// Task-2: Write a program to print the multiplication table of 5 using for loops.
function multiplication() {
  for (let i = 1; i <= 10; i++) {
    console.log(5 * i);
  }
}
// multiplication();

// ========== Activity-2: While Loop ===========

// Task-3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop.
function calculateSum() {
  let number = 1;
  let sum = null;
  while (number <= 10) {
    sum += number;
    number += 1;
  }
  console.log(sum);
}
// calculateSum();

// Task-4: Write a program to print numbers from 10 to 1 using a while loop.
function printTenToOne() {
  let num = 10;
  let result = null;
  while (num >= 1) {
    result = num;
    console.log(result);
    num--;
  }
}
// printTenToOne();

// ========== Activity-3: Do....While Loop ===========

// Task-5: Write a program to print numbers from 1 to 5 using a do....while loop.
function useDoWhileLoop() {
  let num = 1;
  let result = null;
  do {
    result = num;
    console.log(result);
    num++;
  } while (num <= 5);
}
// useDoWhileLoop();

// Task-6: Write a program to calculate the factorial of a number using a do....while loop.
function findFactorial(val) {
  let num = 1;
  let result = null;
  do {
    if (result == 0) result = 1;
    result *= num;
    num++;
  } while (num <= val);
  console.log(result);
}
// findFactorial(5);

// ========== Activity-4: Nested Loop ===========

// Task-7: Write a program to print a pattern using nested for loop.
// *
// **
// ***
// ****
// *****

function nestedForLoop(val) {
  for (let i = 1; i <= val; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "* ";
    }
    console.log(row);
  }
}
// nestedForLoop(5);

// ========== Activity-5: Loop Control Statements ===========

// Task-8: Write a program to print numbers from 1 to 10, but skip the number 5 using the 'continue' statement.
function continueStatement(val, skipVal) {
  for (let i = 1; i <= val; i++) {
    if (i == skipVal) continue;
    console.log(i);
  }
}
// continueStatement(10, 5);

// Task-8: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the 'break' statement.
function breakStatement(val, skipVal) {
  for (let i = 1; i <= val; i++) {
    if (i == skipVal + 1) break;
    console.log(i);
  }
}
// breakStatement(10, 7);

// =========******** Feature Request *******==========

// 1. Number Printing Script: Write a script that prints numbers from 1 to 10 using a for loop and a while loop.
