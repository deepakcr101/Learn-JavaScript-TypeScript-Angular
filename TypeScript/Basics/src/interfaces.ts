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

// 1. Defining an Interface
interface User {
    name: string;
    age: number;
    isActive: boolean;
}

const user: User = {
    name: "John",
    age: 30,
    isActive: true,
};
console.log("User Object:", user);

// 2. Optional Properties
interface Product {
    id: number;
    name: string;
    price: number;
    description?: string; // Optional property
}

const product: Product = {
    id: 1,
    name: "Laptop",
    price: 999.99,
};
console.log("Product Object:", product);

// 3. Readonly Properties
interface Config {
    readonly apiKey: string;
    endpoint: string;
}

const config: Config = {
    apiKey: "12345-ABCDE",
    endpoint: "https://api.example.com",
};
// config.apiKey = "67890"; // Error: Cannot modify readonly property

console.log("Config Object:", config);

// 4. Function Interfaces
interface MathOperation {
    (a: number, b: number): number; // Defines the function signature
}

const add: MathOperation = (a, b) => a + b;
console.log("Addition Result:", add(5, 3)); // Output: 8

const multiply: MathOperation = (a, b) => a * b;
console.log("Multiplication Result:", multiply(5, 3)); // Output: 15

// 5. Extending Interfaces
interface Animal {
    name: string;
    age: number;
}

interface Dog extends Animal {
    breed: string;
}

const myDog: Dog = {
    name: "Buddy",
    age: 3,
    breed: "Golden Retriever",
};
console.log("Dog Object:", myDog);

// 6. Implementing Interfaces in Classes
interface Shape {
    area(): number;
    perimeter(): number;
}

class Rectangle implements Shape {
    constructor(public width: number, public height: number) {}

    area(): number {
        return this.width * this.height;
    }

    perimeter(): number {
        return 2 * (this.width + this.height);
    }
}

const rectangle = new Rectangle(10, 5);
console.log("Rectangle Area:", rectangle.area()); // Output: 50
console.log("Rectangle Perimeter:", rectangle.perimeter()); // Output: 30

// 7. Index Signatures
interface Dictionary {
    [key: string]: string; // Allows dynamic properties with string keys
}

const translations: Dictionary = {
    hello: "Hola",
    goodbye: "Adiós",
};
console.log("Translations Dictionary:", translations);

// 8. Interface vs Type Alias
type AliasUser = {
    name: string;
    age: number;
};

interface InterfaceUser {
    name: string;
    age: number;
}

const aliasUser: AliasUser = { name: "Alice", age: 25 };
const interfaceUser: InterfaceUser = { name: "Bob", age: 30 };

console.log("Alias User:", aliasUser);
console.log("Interface User:", interfaceUser);