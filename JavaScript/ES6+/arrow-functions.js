// Arrow Functions in JavaScript
//Arrow Functions allow a shorter syntax for function expressions.
// 1. Basic Syntax
const greet = (name) => `Hello, ${name}!`;
console.log(greet("Harsh Rawat")); // Output: Hello, Harsh Rawat!

// 2. Implicit Return
const add = (a, b) => a + b; // No need for 'return' keyword
console.log(add(5, 3)); // Output: 8

// 3. Single Parameter
const square = x => x * x; // Parentheses can be omitted for single parameters
console.log(square(4)); // Output: 16

// 4. No Parameters
const sayHello = () => "Hello, World!";
console.log(sayHello()); // Output: Hello, World!

// 5. Arrow Functions and 'this'
const person = {
    name: "Alice",
    greet: function () {
        console.log(`Hello, I am ${this.name}`);
    },
    greetArrow: () => {
        console.log(`Hello, I am ${typeof this.name}`); // 'this' refers to the global object, not 'person'
    },
};
person.greet(); // Output: Hello, I am Alice
person.greetArrow(); // Output: Hello, I am undefined

// 6. Using Arrow Functions in Callbacks
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map((num) => num * num);
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

// 7. Arrow Functions in Promises
const fetchData = () => new Promise((resolve) => {
    setTimeout(() => resolve("Data fetched!"), 1000);
});
fetchData().then((data) => console.log(data)); // Output: Data fetched! (after 1 second)