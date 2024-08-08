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
function simulateData(message, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(message);
      resolve();
    }, delay);
  });
}
// simulateData("Fetching user data", 1000)
//   .then(() => simulateData("Fetching orders data...", 2000))
//   .then(() => simulateData("Fetching products data...", 1500))
//   .then(() => simulateData("Fetching reviews data...", 500))
//   .then(() => {
//     console.log("All data fetched!");
//   });

// ========== Activity-3: Using Async/Await ===========

// Task-4: Write an async function that waits for a promise to resolve and then logs the resolved value.
// Function that returns a promise
const fetchData = (message, delay) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(message);
    }, delay);
  });
};

// Async function that waits for the promise to resolve and logs the value
const logResolvedValue = async () => {
  try {
    const resolvedValue = await fetchData("Data fetched successfully!", 2000);
    console.log(resolvedValue);
  } catch (error) {
    console.error("An error occurred:", error);
  }
};

// logResolvedValue();

// Task-5: Write an async function that handles a rejected promise using try-catch and logs the error message.
function handleRejectedPromise(message, delay, shouldReject = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldReject) {
        reject(new Error("Failed to fetch data"));
      } else {
        resolve(message);
      }
    }, delay);
  });
}

async function logRejectedValue() {
  try {
    const resolvedValue = await fetchDataWithError(
      "Data fetched successfully!",
      2000,
      true
    );
    console.log(resolvedValue);
  } catch (error) {
    console.error("An error occurred:", error.message);
  }
}
// logRejectedValue();

// ========== Activity-4: Fetching Data from an api ===========

// Task-6: Use the fetch api to get data from a public api and log the response data to the console using promise.
const fetchApi = "https://disease.sh/v3/covid-19/all";

function fetchApiData(url) {
  fetch(url)
    .then((Response) => {
      if (Response) {
        return Response.json();
      } else {
        throw new Error("Network response was not ok");
      }
    })
    .then((data) => {
      console.log("Response data:", data);
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
}
// fetchApiData(fetchApi);

// Task-7: Use the fetch API to get data from a public API and log the response data to the console using async/await.
async function fetchAsyncData(url) {
  try {
    const { data } = await fetch(url);
    if (data) {
      return data.json();
    } else {
      throw Error("Data is not get, try again");
    }
  } catch (error) {
    console.log(error);
  }
}
// fetchApiData(fetchApi);

// ========== Activity-5: Concurrent Promises ===========

// Task-8: Use Promise.all to wait for multiple promises to resolve and then log all their values.
let allPromise = Promise.all([
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("3 second");
    }, 3000);
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("4 second");
    }, 4000);
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("1 second");
    }, 1000);
  }),
]);

// allPromise
//   .then((data) => {
//     console.warn("Promise resolve successfully", data);
//   })
//   .catch((err) => {
//     console.warn("Catch block", err);
//   });

// Task-9: Use Promise.race to log the value of the first promise that resolves among multiple promises.
let racePromise = Promise.race([
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("3 second");
    }, 3000);
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("4 second");
    }, 4000);
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("1 second");
    }, 1000);
  }),
]);

racePromise
  .then((data) => {
    console.warn("Promise resolve successfully", data);
  })
  .catch((err) => {
    console.warn("Catch block", err);
  });
