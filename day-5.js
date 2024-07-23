// funcstions

// ========== Activity-1: Function Declaration ===========

// Task-1: Write a function to check if a number is even or odd and log the result to the console.
function checkEvenOrOdd(num) {
  if (num % 2 == 0 && num % num == 0) {
    console.log(`${num} is the Even`);
  } else console.log(`${num} is the Odd`);
}
// checkEvenOrOdd(109);

// Task-2: Write a function to calculate the square of a number and return the result.
function findSquare(num) {
  return num * num;
}
// console.log(findSquare(10));

// ========== Activity-2: Function Expression ===========

// Task-3: write a function expression to find the maximum of two numbers and log the result to the console.
function findMaximum(num1, num2) {
  num1 > num2 ? console.log(num1) : console.log(num2);
}
// findMaximum(32, 12);

// Task-4: write a function expression to concatenate two strings and return the result.
function concatenateString(str1, str2) {
  let result = str1.concat(str2);
  console.log(result);
}
// concatenateString("kamal", "sharma");

// ========== Activity-3: Arrow Function ===========

// Task-5: Write an arrow function to calculate the sum of two numbers and return the result.
const sumOfTwoNumbers = (a, b) => {
  let sum = a + b;
  console.log(sum);
};
// sumOfTwoNumbers(21, 30);

// Task-6: Write an arrow function to check if a string contains a specific characters and return a boolean value.
const checkString = (str) => {
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "@" || "/" || "#") {
      return false;
    } else {
      return true;
    }
  }
};
// console.log(checkString("kamal@sharma"));

// ========== Activity-4: Function Parameters And Default Values ===========

// Task-7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.

function product(product1, product2 = "Kamal") {
  return product1 + product2;
}
// console.log(product("pandit"));

// Task-8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.
function greeting(name, age = 25) {
  return `Hello, ${name}, I am ${age} year old`;
}
// console.log(greeting("kamal sharma"));

// ========== Activity-4: Higher-Order Function ===========

// Task-9: Write a higher-order function that takes a function and a number, and calls the function that many times.
function higherOrderFunction(otherFunction, times) {
  for (let i = 0; i <= times; i++) {
    otherFunction();
  }
}
function otherFunction() {
  console.log("This is the higher-order function");
}
// higherOrderFunction(otherFunction, 5);

// Task-10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.
function secondHigherOrderFunction(func1, func2, val) {
  let result1 = func1(val);
  let result2 = func2(result1);
  console.log(result2);
}

const func1 = (num) => num * num;
const func2 = (num) => num * 3;
// secondHigherOrderFunction(func1, func2, 5);

// =========******** Feature Request *******==========
