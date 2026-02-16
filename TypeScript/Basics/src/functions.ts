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
function add(a: number, b: number): number {
    return a + b;
}
console.log("Addition Result:", add(5, 3)); // Output: 8

// 2. Optional Parameters
function greet(name: string, age?: number): string {
    if (age) {
        return `Hello, ${name}. You are ${age} years old.`;
    }
    return `Hello, ${name}.`;
}
console.log(greet("Priyam Maini")); // Output: Hello, Priyam Maini.
console.log(greet("Rahul Batra", 45)); // Output: Hello, Rahul Batra. You are 45 years old.

// 3. Default Parameters
function multiply(a: number, b: number = 1): number {
    return a * b;
}
console.log("Multiplication Result:", multiply(5)); // Output: 5
console.log("Multiplication Result:", multiply(5, 2)); // Output: 10

// 4. Rest Parameters
function sumAll(...numbers: number[]): number {
    return numbers.reduce((sum, num) => sum + num, 0);
}
console.log("Sum of Numbers:", sumAll(1, 2, 3, 4, 5)); // Output: 15

// 5. Function Overloading
function getInfo(name: string): string;
function getInfo(age: number): string;
function getInfo(value: string | number): string {
    if (typeof value === "string") {
        return `Name: ${value}`;
    }
    return `Age: ${value}`;
}
console.log(getInfo("Alice")); // Output: Name: Alice
console.log(getInfo(25)); // Output: Age: 25

// 6. Arrow Functions
const divide = (a: number, b: number): number => a / b;
console.log("Division Result:", divide(10, 2)); // Output: 5

// 7. Callback Functions
function processNumbers(numbers: number[], callback: (num: number) => number): number[] {
    return numbers.map(callback);
}
const squaredNumbers = processNumbers([1, 2, 3, 4], (num) => num * num);
console.log("Squared Numbers:", squaredNumbers); // Output: [1, 4, 9, 16]

// 8. Higher-Order Functions
function createMultiplier(multiplier: number): (num: number) => number {
    return (num: number) => num * multiplier;
}
const double = createMultiplier(2);
console.log("Double Result:", double(5)); // Output: 10

// 9. Void and Never Types
function logMessage(message: string): void {
    console.log("Message:", message);
}
logMessage("Hello, TypeScript!"); // Output: Message: Hello, TypeScript!

function throwError(message: string): never {
    throw new Error(message);
}
// throwError("Something went wrong!"); // Uncomment to test

// 10. Generic Functions
function identity<T>(value: T): T {
    return value;
}
console.log("Generic Identity:", identity<string>("Hello")); // Output: Hello
console.log("Generic Identity:", identity<number>(42)); // Output: 42