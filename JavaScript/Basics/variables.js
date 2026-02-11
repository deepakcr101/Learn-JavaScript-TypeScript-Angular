let x=10;
let y=20;
let sum=x+y;

console.log("The sum of x and y is: " + sum);

function myFunction() {
  document.getElementById("demo1").innerHTML = "Hello Dolly!";
  document.getElementById("demo2").innerHTML = "How are you?";
}

//Variables = Data Containers
// Declaring a variable using let
let age = 25;
console.log("Let Example:", age);

// Declaring a constant using const
const country = "USA";
console.log("Const Example:", country);

let uname = "John";
let surname= "Sharma";
let fullName = uname +" "+surname;
console.log("Full Name: " + fullName);

//Always use const if the value should not be changed

const price1 = 5;
const price2 = 6;
let total = price1 + price2;

console.log("Total Price: "+total);
/*
1. Always declare variables

2. Always use const if the value should not be changed

3. Always use const if the type should not be changed (Arrays and Objects)

4. Only use let if you cannot use const

5. Never use var if you can use let or const.
 */

let x1 = "5" + 2 + 3;
console.log(x1); // Output: "523"
let x2 = 2 + 3 + "5";
console.log(x2); // Output: "55"

/*Variables declared with let have Block Scope

Variables declared with let must be Declared before use

Variables declared with let cannot be Redeclared in the same scope*/

//Variables defined with const have Block Scope
//JavaScript const variables must be assigned a value when they are declared:


//does not define a constant value. It defines a constant reference to a value.

// String
let color = "Yellow";
let lastName = "Johnson";
console.log("Color: "+color);
console.log("Last Name: "+lastName);
console.log("Type of color: "+typeof color);

// Number
//All JavaScript numbers are stored as decimal numbers (floating point).
let length = 16;
let weight = 7.5;

// BigInt
x = 1234567890123456789012345n;
y = BigInt(1234567890123456789012345)

// Boolean
x = true;
y = false;

// Object
const person = {firstName:"John", lastName:"Doe"};

// Array object
const cars = ["Saab", "Volvo", "BMW"];

// Date object
const date = new Date("2022-03-25");

// Undefined
let x4;
let y2;

// Null
let x6 = null;
let y7 = null;

// Symbol
const x5 = Symbol();
const y5 = Symbol();

// Reassigning variables
let mname = "Jane"; // Works with var and let
age = 30;
// country = "Canada"; // Error: Cannot reassign a const variable

// Variable scope
function testScope() {
    var localVar = "I am local to this function";
    let blockVar = "I am local to this block";
    console.log(localVar); // Accessible
    console.log(blockVar); // Accessible
}
// console.log(localVar); // Error: localVar is not accessible outside the function
// console.log(blockVar); // Error: blockVar is not accessible outside the block

// Hoisting
console.log(hoistedVar); // Undefined (var is hoisted)
var hoistedVar = "I am hoisted";
// console.log(hoistedLet); // Error: Cannot access 'hoistedLet' before initialization
let hoistedLet = "I am not hoisted";