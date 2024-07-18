// Operators

// ========= Activity-1. Airthmetic operations =========

// Task-1. Write a program to add two numbers and log the result to the console.
function addNum(num1, num2) {
  return (num1 + num2);
}
// addNum(21, 87)

// Task-2. Write a program to subtract two numbers and log the result to the console.
function subtractNum(num1, num2) {
  return (num1 - num2);
}
// subtractNum(21, 87)

// Task-3. Write a program to multiply two numbers and log the result to the console.
function multiplytNum(num1, num2) {
    return num1 * num2;
}
// multiplytNum(21, 87)

// Task-4. Write a program to devide two numbers and log the result to the console.
function divideNum(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        console.error("Division by zero is not allowed.");
        return null;
    }
}
// divideNum(21, 87)

// Task-5. Write a program to find the remainder when one number is devided by another and log the result to the console.
function findRemainder(a, b) {
    if (b !== 0) {
        return a % b;
    } else {
        console.error("Division by zero is not allowed.");
        return null;
    }
}
// findRemainder(59, 11);

// ======= Activity-2. Assignment Operators ========

// Task-6. Use the += operator to add a number to a variable and log the result to the console.
let a = 2;
a += 1;

//  console.log(a)

// Task-7. Use the += operator to subtract a number to a variable and log the result to the console.
let b = 2;
b -= 1;

//  console.log(b)

// ======= Activity-3. Comparison Operators ========

// Task-8. Write a program to compare two numbers using > and < and log the result to the console.

function compareNum(x, y) {
  if (x > y) console.log(x);
  else console.log(y);
}
// compareNum(21, 200)

// Task-9. Write a program to compare two numbers using => and <= and log the result to the console.

function compareOtherNum(x, y) {
  if (x >= y) console.log(x);
  else console.log(y);
}
// compareNum(21, 21)

// Task-10. Write a program to compare two numbers using == and === and log the result to the console.

function compareEqualNum(x, y) {
  if (x.value == y.value) console.log("Value same but type is not same");
  else if (x.value === y.value) console.log("Value and Type same");
  else console.log(false);
}
// compareEqualNum(111,99)

// ======= Activity-4. Logical Operators ========

// Task-11. Write a program that uses the && operator to combine two conditions and log the result to the console.

function useAndOperator(a, b) {
 let x = a * 4;
 let y = b * 5;
 let z = a * b;
 if(x >= y && y >= z) {
    console.log(x)
 }else if(z >= y && x >= y) {
    console.log(z)
 }
}
// useAndOperator(120, 5);

// Task-12. Write a program that uses the || operator to combine two conditions and log the result to the console.

function useOrOperator(a, b) {
 let x = a * 4;
 let y = b * 5;
 let z = a * b;
 if(x >= y || y >= z) {
    console.log(x)
 }else if(z >= y || x >= y) {
    console.log(z)
 }
}
// useOrOperator(120, 5);

// Task-13. Write a program that uses the ! operator to negate conditions and log the result to the console.

function useNotOperator(a, b) {
 let x = a * 4;
 let y = b * 5;
 let z = a * b;
 if(x !== y || y !== z) {
    console.log(x)
 }else if(z != y || x != y) {
    console.log(z)
 }
}
// useNotOperator(120, 5);

// ======= Activity-5. Ternary Operators ========

// Task-14. Write a program to that use the ternary operator to check if a number is positive or negative and log the result to the console.

function useTernaryOperator(num) {
    num >= 0 ? console.log("This is a positive number") : console.log("This is a negative number");
}
// useTernaryOperator(76)

// =========******** Feature Request *******==========

// 1. AIRTHMETIC OPERATIONS SCRIPT: Write a script that performs basics arithmetic operations (addition, subtractions, divide, multiply, remainder) on two numbers and log the result.

function main() {
    let a = 21;
    let b = 10;

    console.log(`Addition of ${a} and ${b}: ${addNum(a, b)}`)
    console.log(`Subtract of ${a} and ${b}: ${subtractNum(a, b)}`)
    console.log(`Divide of ${a} and ${b}: ${divideNum(a, b)}`)
    console.log(`Multipy of ${a} and ${b}: ${multiplytNum(a, b)}`)
    console.log(`Remainder of ${a} and ${b}: ${findRemainder(a, b)}`)
}
// main()

// 2. COMPARISON AND LOGICAL OPERATOR SCRIPT: Create a script that compares two numbers using different comparison operators and combine conditions using logical operators, logging the result.

// 3. TERNARY OPERATOR SCRIPT: Write a script that uses the ternary operator to determine if a number is positive or negative and logs the result.


// =========******** Achievement *******==========
