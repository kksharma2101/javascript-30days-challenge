// Promise and Async/Await

// ========== Activity-1: Understanding Promises ===========

// Task-1: Create a promise that resolve with a message after a 2-second time-out and log the message to the console.
function delayMessage() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("This message display after 2 second");
    }, 2000);
  });
}
// delayMessage().then((message) => console.log(message));

// Task-2: Create a promise that reject with an error message after a 2-second time-out and handle the error using .catch().

function rejectMessage() {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error("The message reject after 2 second"));
    }, 2000);
  });
}
// rejectMessage().catch((error) => console.log(error.message));

// ========== Activity-2: Chaining Promises ===========

// Task-3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.
