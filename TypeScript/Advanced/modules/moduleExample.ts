import {add, addition, subtract, subtraction} from "./math";
import Calculator from "./math"

console.log("Addition:", add(5, 3)); // Output: 8
console.log("Subtraction:", subtract(5, 3)); // Output: 2
console.log("Addition (aliased):", addition(5, 3)); // Output: 8
console.log("Subtraction (aliased):", subtraction(5, 3)); // Output: 2

const calculator = new Calculator();
console.log("Multiplication:", calculator.multiply(5, 3)); // Output: 15
