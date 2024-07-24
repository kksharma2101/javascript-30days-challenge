// Arrays

// ========== Activity-1: Array Creation and access ===========

// Task-1: Create an array of numbers from 1 to 5 and log the array to the console.

let array1 = [1, 2, 3, 4, 50, 56];
// console.log(array1);

// Task-2: Access the first and last elements of the array and log them to the console.
// console.log(array1[0]);
// console.log(array1[array1.length - 1]);

// ========== Activity-2: Array Methods (Basix) ===========

// Task-3: Use the 'push' method to add a new number to the end of the array and log the updated array.

array1.push(60);
// console.log(array1);

// Task-4: Use the 'Pop' method to remove the last element from the array and log the updated array.
array1.pop();
// console.log(array1);

// Task-5: Use the shift method to remove the first element from the array and log the updated array.
array1.shift();
// console.log(array1);

// Task-6: Use the unshift method to add a new number to the beginning of the array and log the updated array.
array1.unshift(21);
// console.log(array1);

// ========== Activity-3: Array Methods (Intermediate) ===========

// Task-7: Use the 'map' method to create a new array where each number is doubled and log the new array.
function useMap(data) {
  let newArr = new Array();
  data.map((item) => {
    newArr.push(item * 2);
  });
  console.log(newArr);
}
// useMap(array1);

// Task-8: Use the "filter" method to create a new array with only even numbers and log the new array.
function useFilter(data) {
  let newArr = [];
  data.filter((item) => {
    if (item % 2 == 0) newArr.push(item);
  });
  console.log(newArr);
}
// useFilter(array1);

// Task-9: Use the 'reduce' method to calculate tha sum of all numbers in the array and log the result.
function useReduce(data) {
  let sum = null;
  data.reduce((preVal, currVal) => {
    sum + preVal;
    sum += currVal;
  }, 0);
  console.log(sum);
}
// useReduce(array1);

// ========== Activity-4: Array Iteration ===========

// Task-10: Use a for loop to iterate over the array and log each element to the console.
for (let i = 0; i <= array1.length - 1; i++) {
  //   console.log(array1[i]);
}

// Task-11: Use the forEach method to iterate over the array and log each element to the console.
array1.forEach((element) => {
  //   console.log(element);
});

// ========== Activity-5: Multi-Dimensional Arrays ===========

// Task-12: Create a two dimensional array (matrix) and log the entire array to the console.
let twoDimensionalArray = [
  [1, 2, 3, 4, 5],
  [10, 20, 30, 40],
];
for (let i = 0; i <= twoDimensionalArray.length - 1; i++) {
  for (let j = 0; j <= twoDimensionalArray[i].length - 1; j++) {
    // console.log(twoDimensionalArray[i][j]);
  }
}
// console.log(twoDimensionalArray);

// Task-13: Access and log a specific element from the two dimensional array.
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// Accessing and logging the element at row 1, column 2
const specificElement = matrix[1][2];
console.log(specificElement); // Outputs: 6

// =========******** Feature Request *******==========
