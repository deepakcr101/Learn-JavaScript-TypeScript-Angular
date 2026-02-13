// Async/Await in JavaScript

/*
### What is Async/Await?

Async/Await is a modern way to handle asynchronous operations in JavaScript. It simplifies working with Promises and makes asynchronous code look more like synchronous code.

- **Async**: A keyword used to declare a function that returns a Promise.
- **Await**: A keyword used inside an async function to pause execution until a Promise resolves or rejects.

### Why use Async/Await?

- **Readability**: Makes asynchronous code easier to read and write.
- **Error Handling**: Use `try...catch` blocks for clean error handling.
- **Sequential Execution**: Easily perform operations in sequence.

### Common Use Cases:
- Fetching data from APIs
- Performing sequential asynchronous tasks 
- Error handling in asynchronous operations
*/

console.log("Async/Await in JavaScript");

// 1. Basic Syntax
const fetchData = async () => {
    return "Data fetched!";
};

fetchData().then((data) => console.log(data)); // Output: Data fetched!

// 2. Using Await with Promises
const getData = async () => {
    const promise = new Promise((resolve) => {
        setTimeout(() => resolve("Data resolved after 2 seconds"), 2000);
    });
    const result = await promise; // Waits for the promise to resolve
    console.log(result); // Output: Data resolved after 2 seconds
};

getData();

// 3. Sequential Async Operations
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

const executeSteps = async () => {
    console.log(await step1()); // Output: Step 1 completed
    console.log(await step2()); // Output: Step 2 completed
    console.log(await step3()); // Output: Step 3 completed
};

executeSteps();

// 4. Error Handling with try...catch
const fetchWithError = async () => {
    try {
        const promise = new Promise((_, reject) => {
            setTimeout(() => reject("Failed to fetch data"), 2000);
        });
        const result = await promise; // Will throw an error
        console.log(result);
    } catch (error) {
        console.error("Error:", error); // Output: Error: Failed to fetch data
    }
};

fetchWithError();

// 5. Parallel Execution with Promise.all
const fetchData1 = () => {
    return new Promise((resolve) => setTimeout(() => resolve("Data 1"), 1000));
};

const fetchData2 = () => {
    return new Promise((resolve) => setTimeout(() => resolve("Data 2"), 2000));
};

const fetchData3 = () => {
    return new Promise((resolve) => setTimeout(() => resolve("Data 3"), 3000));
};

const fetchAllData = async () => {
    const results = await Promise.all([fetchData1(), fetchData2(), fetchData3()]);
    console.log("All Data:", results); // Output: All Data: ["Data 1", "Data 2", "Data 3"]
};

fetchAllData();

// 6. Using Async/Await in Loops
const fetchItem = (item) => {
    return new Promise((resolve) => setTimeout(() => resolve(`Fetched ${item}`), 1000));
};

const fetchItems = async () => {
    const items = ["Item 1", "Item 2", "Item 3"];
    for (const item of items) {
        const result = await fetchItem(item);
        console.log(result); // Output: Fetched Item 1, Fetched Item 2, Fetched Item 3 (sequentially)
    }
};

fetchItems();