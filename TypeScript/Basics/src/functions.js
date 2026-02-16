// Functions in TypeScript
/*
### What are Functions?

Functions are reusable blocks of code that perform specific tasks. In TypeScript, functions can be strongly typed, providing better error detection and code clarity.

### Why use Functions in TypeScript?

- **Type Safety**: TypeScript ensures that parameters and return values match their specified types.
- **Optional and Default Parameters**: Simplify function calls with flexible parameter handling.
- **Function Overloading**: Define multiple function signatures for the same function.

### Common Use Cases:
1. Perform calculations
2. Process data
3. Encapsulate reusable logic
*/
console.log("Functions in TypeScript");
// 1. Function with Type Annotations
function add(a, b) {
    return a + b;
}
console.log("Addition Result:", add(5, 3)); // Output: 8
// 2. Optional Parameters
function greet(name, age) {
    if (age) {
        return "Hello, ".concat(name, ". You are ").concat(age, " years old.");
    }
    return "Hello, ".concat(name, ".");
}
console.log(greet("Priyam Maini")); // Output: Hello, Priyam Maini.
console.log(greet("Rahul Batra", 45)); // Output: Hello, Rahul Batra. You are 45 years old.
// 3. Default Parameters
function multiply(a, b) {
    if (b === void 0) { b = 1; }
    return a * b;
}
console.log("Multiplication Result:", multiply(5)); // Output: 5
console.log("Multiplication Result:", multiply(5, 2)); // Output: 10
// 4. Rest Parameters
function sumAll() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (sum, num) { return sum + num; }, 0);
}
console.log("Sum of Numbers:", sumAll(1, 2, 3, 4, 5)); // Output: 15
function getInfo(value) {
    if (typeof value === "string") {
        return "Name: ".concat(value);
    }
    return "Age: ".concat(value);
}
console.log(getInfo("Alice")); // Output: Name: Alice
console.log(getInfo(25)); // Output: Age: 25
// 6. Arrow Functions
var divide = function (a, b) { return a / b; };
console.log("Division Result:", divide(10, 2)); // Output: 5
// 7. Callback Functions
function processNumbers(numbers, callback) {
    return numbers.map(callback);
}
var squaredNumbers = processNumbers([1, 2, 3, 4], function (num) { return num * num; });
console.log("Squared Numbers:", squaredNumbers); // Output: [1, 4, 9, 16]
// 8. Higher-Order Functions
function createMultiplier(multiplier) {
    return function (num) { return num * multiplier; };
}
var double = createMultiplier(2);
console.log("Double Result:", double(5)); // Output: 10
// 9. Void and Never Types
function logMessage(message) {
    console.log("Message:", message);
}
logMessage("Hello, TypeScript!"); // Output: Message: Hello, TypeScript!
function throwError(message) {
    throw new Error(message);
}
// throwError("Something went wrong!"); // Uncomment to test
// 10. Generic Functions
function identity(value) {
    return value;
}
console.log("Generic Identity:", identity("Hello")); // Output: Hello
console.log("Generic Identity:", identity(42)); // Output: 42
