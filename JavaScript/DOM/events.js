// Events in JavaScript

/*
### What are Events?

Events are actions or occurrences that happen in the browser, such as:
- User interactions (clicks, typing, hovering, etc.)
- Browser actions (loading, resizing, scrolling)
- System events (errors, network requests)

### Why use Events?

Events allow us to create interactive and dynamic web pages by responding to user actions or system changes.

### Common Use Cases:
- Handling clicks, form submissions, or key presses
- Validating user input
- Creating animations or dynamic behavior
*/

console.log("Events in JavaScript");

// 1. Adding Event Listeners
const button = document.getElementById("myButton");
button.addEventListener("click", () => {
    console.log("Button was clicked!");
});

// 2. Removing Event Listeners
const logClick = () => console.log("Button clicked!");
button.addEventListener("click", logClick);
button.removeEventListener("click", logClick); // Removes the event listener

// 3. Event Object
button.addEventListener("click", (event) => {
    console.log("Event Object:", event);
    console.log("Event Type:", event.type);
    console.log("Target Element:", event.target);
});

// 4. Mouse Events
const box = document.getElementById("box");
box.addEventListener("mouseover", () => {
    box.style.backgroundColor = "lightblue";
});
box.addEventListener("mouseout", () => {
    box.style.backgroundColor = "white";
});

// 5. Keyboard Events
document.addEventListener("keydown", (event) => {
    console.log(`Key Pressed: ${event.key}`);
});

// 6. Form Events
const form = document.getElementById("myForm");
form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevents the default form submission
    console.log("Form submitted!");
});

// 7. Event Propagation: Bubbling and Capturing
const parent = document.getElementById("parent");
const child = document.getElementById("child");

parent.addEventListener(
    "click",
    () => {
        console.log("Parent clicked! (Bubbling)");
    },
    false // Bubbling phase
);

child.addEventListener(
    "click",
    () => {
        console.log("Child clicked! (Capturing)");
    },
    true // Capturing phase
);

// 8. Event Delegation
const myList = document.getElementById("myList");
myList.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        console.log(`List item clicked: ${event.target.textContent}`);
    }
});

// 9. Custom Events
const customEvent = new Event("customEvent");
button.addEventListener("customEvent", () => {
    console.log("Custom event triggered!");
});
button.dispatchEvent(customEvent);