// app.js

// Importing named exports
import { add, subtract } from "./math.js";
import { sayHello, sayGoodbye } from "./greetings.js";

// Importing default exports
import multiply from "./math.js";
import greet from "./greetings.js";

// Using math.js functions
console.log("Addition:", add(5, 3)); // Output: Addition: 8
console.log("Subtraction:", subtract(5, 3)); // Output: Subtraction: 2
console.log("Multiplication:", multiply(5, 3)); // Output: Multiplication: 15

// Using greetings.js functions
console.log(sayHello("John")); // Output: Hello, John!
console.log(sayGoodbye("John")); // Output: Goodbye, John!
console.log(greet("John")); // Output: Greetings, John!