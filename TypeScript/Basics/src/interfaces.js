// Interfaces in TypeScript
/*
### What are Interfaces?

Interfaces in TypeScript define the structure of objects, functions, or classes. They act as contracts that specify the shape and behavior of data.

### Why use Interfaces?

- **Consistency**: Ensure objects, functions, and classes adhere to specific structures.
- **Code Reusability**: Define reusable contracts for data structures.
- **Static Typing**: Catch errors during development.

### Common Use Cases:
1. Define object shapes
2. Enforce structure in function parameters
3. Implement contracts in classes
*/
console.log("Interfaces in TypeScript");
var user = {
    name: "John",
    age: 30,
    isActive: true,
};
console.log("User Object:", user);
var product = {
    id: 1,
    name: "Laptop",
    price: 999.99,
};
console.log("Product Object:", product);
var config = {
    apiKey: "12345-ABCDE",
    endpoint: "https://api.example.com",
};
// config.apiKey = "67890"; // Error: Cannot modify readonly property
console.log("Config Object:", config);
var add = function (a, b) { return a + b; };
console.log("Addition Result:", add(5, 3)); // Output: 8
var multiply = function (a, b) { return a * b; };
console.log("Multiplication Result:", multiply(5, 3)); // Output: 15
var myDog = {
    name: "Buddy",
    age: 3,
    breed: "Golden Retriever",
};
console.log("Dog Object:", myDog);
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.area = function () {
        return this.width * this.height;
    };
    Rectangle.prototype.perimeter = function () {
        return 2 * (this.width + this.height);
    };
    return Rectangle;
}());
var rectangle = new Rectangle(10, 5);
console.log("Rectangle Area:", rectangle.area()); // Output: 50
console.log("Rectangle Perimeter:", rectangle.perimeter()); // Output: 30
var translations = {
    hello: "Hola",
    goodbye: "Adiós",
};
console.log("Translations Dictionary:", translations);
var aliasUser = { name: "Alice", age: 25 };
var interfaceUser = { name: "Bob", age: 30 };
console.log("Alias User:", aliasUser);
console.log("Interface User:", interfaceUser);
