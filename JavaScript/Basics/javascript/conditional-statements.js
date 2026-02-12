// Conditional Statements in JavaScript

// 1. If Statement
const age = 18;
if (age >= 18) {
    console.log("You are eligible to vote.");
}

// 2. If-Else Statement
const temperature = 30;
if (temperature > 35) {
    console.log("It's too hot outside!");
} else {
    console.log("The weather is pleasant.");
}

// 3. If-Else If-Else Statement
const score = 85;
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 75) {
    console.log("Grade: B");
} else if (score >= 50) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}

// 4. Switch Statement
const day = "Monday";
switch (day) {
    case "Monday":
        console.log("Start of the work week!");
        break;
    case "Friday":
        console.log("Almost weekend!");
        break;
    case "Saturday":
    case "Sunday":
        console.log("Weekend vibes!");
        break;
    default:
        console.log("Midweek hustle!");
}

// 5. Ternary Operator
const isLoggedIn = true;
const message = isLoggedIn ? "Welcome back!" : "Please log in.";
console.log(message);

// 6. Logical Operators
const hasDrivingLicense = true;
const hasCar = false;
if (hasDrivingLicense && hasCar) {
    console.log("You can drive your car.");
} else if (hasDrivingLicense || hasCar) {
    console.log("You can drive, but you need a car.");
} else {
    console.log("You cannot drive.");
}

// 7. Short-Circuit Evaluation
const userName = "Ramesh";
const displayName = userName || "Guest";
console.log(`Hello, ${displayName}!`);

// 8. Nested Conditionals
const time = 14;
if (time >= 6 && time < 12) {
    console.log("Good morning!");
} else {
    if (time >= 12 && time < 18) {
        console.log("Good afternoon!");
    } else {
        console.log("Good evening!");
    }
}

//Comparing two JavaScript objects always returns false.