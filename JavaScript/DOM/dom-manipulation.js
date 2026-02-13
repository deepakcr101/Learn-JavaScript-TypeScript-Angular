// DOM Manipulation in JavaScript

/*
### What is the DOM?

The DOM (Document Object Model) is a tree-like structure that represents the HTML document. It allows JavaScript to interact with and manipulate the structure, style, and content of web pages.

### Why use DOM Manipulation?

- **Dynamic Content**: Update content dynamically based on user interactions or data.
- **Styling**: Change styles dynamically.
- **Element Creation**: Add or remove elements from the DOM.

### Common Use Cases:
- Updating text or attributes
- Adding or removing elements
- Changing styles dynamically
*/

console.log("DOM Manipulation in JavaScript");

// 1. Selecting Elements
const heading = document.getElementById("heading");
console.log("Heading:", heading);

const paragraphs = document.getElementsByTagName("p");
console.log("Paragraphs:", paragraphs);

const items = document.querySelectorAll(".item");
console.log("Items:", items);

// 2. Changing Content
heading.textContent = "Updated Heading"; // Changes the text content
heading.innerHTML = "<span>Updated Heading with HTML</span>"; // Changes the inner HTML

// 3. Modifying Attributes
const link = document.querySelector("a");
link.setAttribute("href", "https://www.example.com");
link.setAttribute("target", "_blank");
console.log("Updated Link:", link);

// 4. Changing Styles
heading.style.color = "blue";
heading.style.fontSize = "24px";

// 5. Adding and Removing Classes
heading.classList.add("highlight");
heading.classList.remove("highlight");

// 6. Creating and Appending Elements
const newElement = document.createElement("div");
newElement.textContent = "I am a new div!";
document.body.appendChild(newElement);

// 7. Removing Elements
const firstItem = document.querySelector(".item");
firstItem.remove();

// 8. Traversing the DOM
const list = document.querySelector("ul");
console.log("Parent Node:", list.parentNode);
console.log("Child Nodes:", list.childNodes);
console.log("First Child:", list.firstChild);
console.log("Last Child:", list.lastChild);

// 9. Event Listeners (Intro)
heading.addEventListener("click", () => {
    heading.style.color = "red";
    console.log("Heading clicked!");
});
