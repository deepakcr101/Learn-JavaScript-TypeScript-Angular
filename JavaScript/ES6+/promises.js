// Promises in JavaScript

/*
### What are Promises?

Promises are objects that represent the eventual completion (or failure) of an asynchronous operation and its resulting value. 
They allow us to write asynchronous code in a more manageable and readable way.

A Promise has three states:
1. **Pending**: The initial state, neither fulfilled nor rejected.
2. **Fulfilled**: The operation completed successfully.
3. **Rejected**: The operation failed.

### Why use Promises?

Promises simplify handling asynchronous operations like API calls, file reading, or timers. They help avoid "callback hell" 
and make chaining asynchronous operations easier.

### Common Use Cases:
- Fetching data from APIs
- Reading files or performing I/O operations
- Waiting for timers (e.g., `setTimeout`)
- Chaining multiple asynchronous operations
*/

console.log("Promises in JavaScript");

// 1. Creating a Promise
const myPromise = new Promise((resolve, reject) => {
    const success = true; // Simulating success or failure
    if (success) {
        resolve("The operation was successful!");
    } else {
        reject("The operation failed!");
    }
});

// Handling the Promise
myPromise
    .then((message) => {
        console.log("Fulfilled:", message); // Output: Fulfilled: The operation was successful!
    })
    .catch((error) => {
        console.error("Rejected:", error);
    });

// 2. Using Promises with Asynchronous Operations
const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { id: 1, name: "John Doe" };
            resolve(data);
        }, 2000); // Simulates a 2-second delay
    });
};

fetchData()
    .then((data) => {
        console.log("Data fetched:", data); // Output: Data fetched: { id: 1, name: 'John Doe' }
    })
    .catch((error) => {
        console.error("Error fetching data:", error);
    });

// 3. Chaining Promises
const step1 = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Step 1 completed"), 1000);
    });
};

const step2 = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Step 2 completed"), 1000);
    });
};

const step3 = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Step 3 completed"), 1000);
    });
};

step1()
    .then((result1) => {
        console.log(result1); // Output: Step 1 completed
        return step2();
    })
    .then((result2) => {
        console.log(result2); // Output: Step 2 completed
        return step3();
    })
    .then((result3) => {
        console.log(result3); // Output: Step 3 completed
    });

// 4. Promise.all
const promise1 = new Promise((resolve) => setTimeout(() => resolve("Promise 1"), 1000));
const promise2 = new Promise((resolve) => setTimeout(() => resolve("Promise 2"), 2000));
const promise3 = new Promise((resolve) => setTimeout(() => resolve("Promise 3"), 3000));

Promise.all([promise1, promise2, promise3])
    .then((results) => {
        console.log("Promise.all Results:", results); // Output: ["Promise 1", "Promise 2", "Promise 3"]
    })
    .catch((error) => {
        console.error("Error in Promise.all:", error);
    });

// 5. Promise.race
Promise.race([promise1, promise2, promise3])
    .then((result) => {
        console.log("Promise.race Winner:", result); // Output: Promise 1 (the fastest promise)
    })
    .catch((error) => {
        console.error("Error in Promise.race:", error);
    });
