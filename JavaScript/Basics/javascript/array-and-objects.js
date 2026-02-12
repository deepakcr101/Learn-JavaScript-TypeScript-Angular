// Arrays and Objects in JavaScript

// 1. Arrays
const fruits = ["Apple", "Banana", "Cherry"];
console.log("Array:", fruits);

// Accessing elements
console.log("First Fruit:", fruits[0]); // Output: Apple

// Adding elements
fruits.push("Orange");
console.log("After Push:", fruits); // Output: ["Apple", "Banana", "Cherry", "Orange"]

// Removing elements
fruits.pop();
console.log("After Pop:", fruits); // Output: ["Apple", "Banana", "Cherry"]

// Iterating over arrays
fruits.forEach((fruit, index) => {
    console.log(`Fruit ${index + 1}: ${fruit}`);
});

// Array methods
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map((num) => num * num);
console.log("Squared Numbers:", squaredNumbers); // Output: [1, 4, 9, 16, 25]

const filteredNumbers = numbers.filter((num) => num > 3);
console.log("Filtered Numbers:", filteredNumbers); // Output: [4, 5]

const sum = numbers.reduce((accumulator, num) => accumulator + num, 0);
console.log("Sum of Numbers:", sum); // Output: 15

// 2. Objects
const person = {
    name: "John",
    age: 30,
    country: "USA",
};
console.log("Object:", person);

// Accessing properties
console.log("Name:", person.name); // Output: John

// Adding properties
person.gender = "Male";
console.log("After Adding Property:", person);

// Removing properties
delete person.age;
console.log("After Deleting Property:", person);

// Iterating over objects
for (const key in person) {
    console.log(`${key}: ${person[key]}`);
}

// Object methods
const keys = Object.keys(person);
console.log("Keys:", keys); // Output: ["name", "country", "gender"]

const values = Object.values(person);
console.log("Values:", values); // Output: ["John", "USA", "Male"]

const entries = Object.entries(person);
console.log("Entries:", entries); // Output: [["name", "John"], ["country", "USA"], ["gender", "Male"]]

// 3. Combining Arrays and Objects
const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
];

// Filtering people based on age
const adults = people.filter((person) => person.age >= 30);
console.log("Adults:", adults);

// Mapping names
const names = people.map((person) => person.name);
console.log("Names:", names);

// Reducing to total age
const totalAge = people.reduce((sum, person) => sum + person.age, 0);
console.log("Total Age:", totalAge);