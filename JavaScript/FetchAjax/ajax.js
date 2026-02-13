// AJAX in JavaScript

/*
### What is AJAX?

AJAX (Asynchronous JavaScript and XML) is a technique for making HTTP requests asynchronously without refreshing the page. 
It uses the `XMLHttpRequest` object to communicate with servers.

### Why use AJAX?

- **Legacy Support**: Supported in older browsers.
- **Asynchronous Requests**: Fetch data without reloading the page.

### Common Use Cases:
- Fetching data from APIs
- Sending form data
- Updating parts of a webpage dynamically
*/

console.log("AJAX in JavaScript");

// 1. Making a GET Request
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1", true);
xhr.onload = function () {
    if (xhr.status === 200) {
        console.log("GET Response Data:", JSON.parse(xhr.responseText));
    } else {
        console.error("Error:", xhr.statusText);
    }
};
xhr.onerror = function () {
    console.error("Request Error");
};
xhr.send();

// 2. Making a POST Request
const xhrPost = new XMLHttpRequest();
xhrPost.open("POST", "https://jsonplaceholder.typicode.com/posts", true);
xhrPost.setRequestHeader("Content-Type", "application/json");
xhrPost.onload = function () {
    if (xhrPost.status === 201) {
        console.log("POST Response Data:", JSON.parse(xhrPost.responseText));
    } else {
        console.error("Error:", xhrPost.statusText);
    }
};
xhrPost.onerror = function () {
    console.error("Request Error");
};
xhrPost.send(
    JSON.stringify({
        title: "New Post",
        body: "This is a new post created using AJAX.",
        userId: 1,
    })
);