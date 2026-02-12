// Loops in JavaScript

// 1. For Loop
for (let i = 0; i < 5; i++) {
    console.log(`For Loop: Iteration ${i}`);
}

// 2. While Loop
let count = 0;
while (count < 5) {
    console.log(`While Loop: Count is ${count}`);
    count++;
}

// 3. Do-While Loop
let num = 0;
do {
    console.log(`Do-While Loop: Num is ${num}`);
    num++;
} while (num < 5);

// 4. For...of Loop (ES6+)
const fruits = ["Apple", "Banana", "Cherry"];
for (const fruit of fruits) {
    console.log(`For...of Loop: ${fruit}`);
}

// 5. For...in Loop
const person = { name: "John", age: 30, country: "USA" };
for (const key in person) {
    console.log(`For...in Loop: ${key} = ${person[key]}`);
}

// 6. Looping through Arrays
const numbers1 = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers1.length; i++) {
    console.log(`Array Loop (For): ${numbers1[i]}`);
}

// Using forEach
numbers1.forEach((num, index) => {
    console.log(`Array Loop (forEach): Index ${index}, Value ${num}`);
});

// 7. Breaking and Continuing in Loops
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        console.log("Breaking the loop");
        break;
    }
    if (i % 2 === 0) {
        console.log(`Skipping even number: ${i}`);
        continue;
    }
    console.log(`Odd number: ${i}`);
}

// 8. Nested Loops
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(`Nested Loop: i = ${i}, j = ${j}`);
    }
}
