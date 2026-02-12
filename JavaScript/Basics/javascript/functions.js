// Functions in JavaScript

// 1. Function Declaration
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("John")); // Output: Hello, John!

// 2. Function Expression
const add = function (a, b) {
    return a + b;
};
console.log(add(5, 3)); // Output: 8

// 3. Arrow Functions (ES6+)
const multiply = (a, b) => a * b; // Implicit return for single-line arrow functions
console.log(multiply(4, 2)); // Output: 8

// Arrow function with multiple lines
const divide = (a, b) => {
    if (b === 0) {
        return "Cannot divide by zero!";
    }
    return a / b;
};
console.log(divide(10, 2)); // Output: 5
console.log(divide(10, 0)); // Output: Cannot divide by zero!

// 4. Default Parameters
function greetWithDefault(name = "Stranger") {
    return `Hello, ${name}!`;
}
console.log(greetWithDefault()); // Output: Hello, Stranger!
console.log(greetWithDefault("Rahul Batra")); // Output: Hello, Rahul Batra!

// 5. Rest Parameters
function sumAll(...numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}
console.log(sumAll(1, 2, 3, 4)); // Output: 10

// 6. Callback Functions
function processNumbers(numbers, callback) {
    return numbers.map(callback);
}
const numbers = [1, 2, 3, 4];
const squaredNumbers = processNumbers(numbers, (num) => num * num);
console.log(squaredNumbers); // Output: [1, 4, 9, 16]

// 7. Immediately Invoked Function Expression (IIFE)
(function () {
    console.log("IIFE executed!");
})(); // Output: IIFE executed!

// 8. Function Scope and Closures
function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        return `Outer: ${outerVariable}, Inner: ${innerVariable}`;
    };
}
const closureExample = outerFunction("outside");
console.log(closureExample("inside")); // Output: Outer: outside, Inner: inside