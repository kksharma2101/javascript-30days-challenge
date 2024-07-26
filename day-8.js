// ES6+ Features

// ========== Activity-1: Template Literals ===========

// Task-1. Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.
let template1 = "We will use template literal";
let template2 = "after the use string";
let result = `${template1} or ${template2}`;
// console.log(result);

// Task-2. Create a multi-line string using template literals and log it to the console.
let multiLineStr = `${result}.
and before use this one we need to study about it.`;
// console.log(multiLineStr);

// ========== Activity-2: Destructuring ===========

// Task-3. Use array destructuring to extract the first and second element from an array of numbers and log them to the console.
let arr = [21, 32, 45, 67, 89, 99];
const [first, second] = arr;

// console.log(`The first element is ${first}`);
// console.log(`The second element is ${second}`);

// Task-4. Use object destructuring to extract the title and author from a book object and log them to the console.
let obj = {
  title: "Ras leela",
  author: "Shree banbari lala",
  year: 1947,
};
let { title, author } = obj;
// console.log(`The book title name is ${title}`);
// console.log(`The book author name is ${author}`);

// ========== Activity-3: Spread and rest Operators ===========

// Task-5. Use the spread operators to create a new array that includes all elements of an exiting array plus additional elements, and log the new array to the console.
let newArr = [214, 456, ...arr];
// console.log(newArr);

// Task-6. Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.
function sum(...newArr) {
  let res = newArr.reduce((pre, crr) => pre + crr, 0);
  console.log(res);
}
// sum(1, 2, 3, 4, 5, 8);

// ========== Activity-4: Default Parameters ===========

// Task-7. Write a function that takes two parameters and return their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.
function defaultPara(num1, num2 = 1) {
  console.log(num1 * num2);
  return num1 * num2;
}
// defaultPara(9);

// ========== Activity-4: Enhanced Object Literals ===========

// Task-8. Use enhance object literal to create an object with methods and properties, and log the result to the console.
let name = "kamal sharma";
let age = 24;

let person = {
  name,
  age,
  greet() {
    return `Hello, My name is ${this.name} and I am ${this.age} year old`;
  },
  celebrateBirthday() {
    this.age += 1;
    return `Happy Birthday, I am now ${this.age} year old`;
  },
};

// console.log(person);
// console.log(person.greet());
// console.log(person.celebrateBirthday());

// Task-9. Create an object with computed property names based on variables and log the object to the console.
const propertyName1 = "firstName";
const propertyName2 = "lastName";
const propertyName3 = "age";

const persons = {
  [propertyName1]: "Alice",
  [propertyName2]: "Johnson",
  [propertyName3]: 30,
};

// console.log(persons);
