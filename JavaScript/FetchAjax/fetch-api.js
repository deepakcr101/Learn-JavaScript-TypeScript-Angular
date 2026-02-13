// Fetch API in JavaScript

/*
### What is the Fetch API?

The Fetch API is a modern way to make HTTP requests in JavaScript. It is built into browsers and provides a cleaner, 
promise-based interface compared to traditional AJAX.

### Why use Fetch API?

- **Promise-Based**: Simplifies handling asynchronous requests.
- **Built-In**: No need for external libraries or plugins.
- **Flexible**: Supports GET, POST, PUT, DELETE, and other HTTP methods.

### Common Use Cases:
- Fetching data from APIs
- Sending form data to servers
- Uploading files
*/

console.log("Fetch API in JavaScript");

// 1. Making a GET Request
fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json(); // Parse JSON response
    })
    .then((data) => {
        console.log("GET Response Data:", data);
    })
    .catch((error) => {
        console.error("Error:", error);
    });

// 2. Making a POST Request
fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        title: "New Post",
        body: "This is a new post created using Fetch API.",
        userId: 1,
    }),
})
    .then((response) => response.json())
    .then((data) => {
        console.log("POST Response Data:", data);
    })
    .catch((error) => {
        console.error("Error:", error);
    });

// 3. Error Handling
fetch("https://jsonplaceholder.typicode.com/invalid-endpoint")
    .then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .catch((error) => {
        console.error("Fetch Error:", error.message);
    });

// 4. Using Async/Await with Fetch API
const fetchData = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Async/Await GET Response:", data);
    } catch (error) {
        console.error("Error:", error);
    }
};

fetchData();