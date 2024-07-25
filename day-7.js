// Objects

// ========== Activity-1: Object Creation and access ===========

// Task-1: Create an object representing a book with properties like title, author and year and log the object to the console.

let book = Object();
book.title = "Raj Mahal";
book.author = "kamal sharma";
book.year = 2020;
// console.log(book);

// Task-2: Access and log the title and author properties of the book object.
// console.log(book.title, book.author);

// ========== Activity-2: Object Methods ===========

// Task-3: Add a method to the book object that returns a string with the book's title and author and log the result of calling this method.

book.getSummary = function () {
  return `The book '${this.title}' written by ${this.author}`;
};
// console.log(book.getSummary());

// Task-4: Add a method to the book object that takes a parameters (year) and updates the book's year property, then log the updated object.
book.addMethod = function (val) {
  let res = (this.year = val);
  //   console.log(res);
};
book.addMethod(2024);

// ========== Activity-3: Nested Object ===========

// Task-5: Create a nested object representing a library with properties like name and books (an array of book objects) and log the library object to the console.
let book1 = {
  title: "Web Developer",
  author: "Ridhiman Shah",
  year: 1997,
};

let library = {
  name: "This is library object",
  books: [book, book1],
};
// console.log(librarys);

// Task-6: Access and log the name of the library and the titles of all the books in the library.
library.books.forEach((item) => {
  // console.log(item.title);
});

// ========== Activity-4: The this keyword ===========

// Task-7: Add a method to the book object that uses the 'this' keyword to return a string with the book's title and year and log, the result of calling this method.
function newMethod() {}

// ========== Activity-4: Object Iteration ===========

// Task-8: Use a for....in loop to iterate over the properties of the book object and log each property and its value.
for (const i in book) {
  // console.log(book[i]);
}

// Task-9: Use 'Object.keys' and 'Object.values' methods to log all the keys and values of the book object.
// Log all the keys
console.log("Keys: ", Object.keys(book1));

// Log all the values
console.log("Values: ", Object.values(book1));
