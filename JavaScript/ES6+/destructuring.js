// Destructuring in JavaScript

/*
### What is Destructuring?

Destructuring is an ES6 feature that allows you to unpack values from arrays and properties from objects into distinct variables. 
It simplifies the process of extracting data and makes the code cleaner and more readable.

### Why use Destructuring?

- **Concise Syntax**: Reduces the need for repetitive code when accessing values.
- **Improved Readability**: Makes code easier to understand.
- **Flexible Data Handling**: Works with arrays, objects, and nested structures.

### Common Use Cases:
- Extracting values from arrays and objects
- Handling API responses
- Assigning default values
*/

console.log("Destructuring in JavaScript");

// 1. Array Destructuring
const fruits = ["Apple", "Banana", "Cherry"];
const [firstFruit, secondFruit] = fruits; // Unpacking array elements
console.log("First Fruit:", firstFruit); // Output: Apple
console.log("Second Fruit:", secondFruit); // Output: Banana

// Skipping elements
const [, , thirdFruit] = fruits;
console.log("Third Fruit:", thirdFruit); // Output: Cherry

// Using default values
const [fruit1, fruit2, fruit3 = "Default Fruit"] = ["Mango", "Orange"];
console.log("Fruit3:", fruit3); // Output: Default Fruit

// 2. Object Destructuring
const person = {
    name: "John",
    age: 30,
    country: "USA",
};
const { name, age } = person; // Unpacking object properties
console.log("Name:", name); // Output: John
console.log("Age:", age); // Output: 30

// Renaming variables
const { country: nationality } = person;
console.log("Nationality:", nationality); // Output: USA

// Using default values
const { gender = "Male" } = person;
console.log("Gender:", gender); // Output: Male

// 3. Nested Destructuring
const user = {
    id: 1,
    profile: {
        username: "johndoe",
        email: "johndoe@example.com",
    },
};
const {
    profile: { username, email },
} = user;
console.log("Username:", username); // Output: johndoe
console.log("Email:", email); // Output: johndoe@example.com

// 4. Destructuring Function Parameters
const printUserDetails = ({ name, age }) => {
    console.log(`Name: ${name}, Age: ${age}`);
};
printUserDetails(person); // Output: Name: John, Age: 30

// 5. Destructuring with Rest Operator
const numbers = [1, 2, 3, 4, 5];
const [num1, num2, ...rest] = numbers;
console.log("Num1:", num1); // Output: 1
console.log("Num2:", num2); // Output: 2
console.log("Rest:", rest); // Output: [3, 4, 5]

// 6. Default Values in Objects and Arrays
const settings = { theme: "dark" };
const { theme, fontSize = "16px" } = settings;
console.log("Theme:", theme); // Output: dark
console.log("Font Size:", fontSize); // Output: 16px

// 7. Combining Arrays and Objects
const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
];
people.forEach(({ name, age }) => {
    console.log(`Name: ${name}, Age: ${age}`);
});
// Output:
// Name: Alice, Age: 25
// Name: Bob, Age: 30