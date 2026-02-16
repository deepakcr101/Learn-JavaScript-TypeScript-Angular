// Classes in TypeScript

/*
### What are Classes?

Classes are templates for creating objects. They encapsulate data (properties) and behaviors (methods) into a single unit.

### Why use Classes?

- **Encapsulation**: Group related data and methods together.
- **Reusability**: Create reusable blueprints for objects.
- **Type Safety**: TypeScript ensures the class adheres to its defined structure.

### Common Use Cases:
1. Modeling real-world entities (e.g., users, products)
2. Encapsulating logic and behavior
3. Implementing object-oriented programming principles (OOP)
*/

console.log("Classes in TypeScript");

// 1. Basic Class
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet(): string {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

const john = new Person("John", 30);
console.log(john.greet()); // Output: Hello, my name is John and I am 30 years old.

// 2. Access Modifiers
class Employee {
    public name: string; // Accessible everywhere
    private salary: number; // Accessible only within the class
    protected department: string; // Accessible within the class and subclasses

    constructor(name: string, salary: number, department: string) {
        this.name = name;
        this.salary = salary;
        this.department = department;
    }

    getSalary(): number {
        return this.salary; // Accessing private property within the class
    }
}

const employee1 = new Employee("Rahul Batra", 5000000, "Engineering Manager");
console.log("Employee Name:", employee1.name); // Output: Rahul Batra
console.log("Employee Salary:", employee1.getSalary()); // Output: 5000000
// console.log(employee1.salary); // Error: Property 'salary' is private

// 3. Inheritance
class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    makeSound(): string {
        return `${this.name} makes a sound.`;
    }
}

class Dog extends Animal {
    breed: string;

    constructor(name: string, breed: string) {
        super(name); // Call the parent class constructor
        this.breed = breed;
    }

    makeSound(): string {
        return `${this.name}, a ${this.breed}, barks.`;
    }
}

const buddy = new Dog("Buddy", "Golden Retriever");
console.log(buddy.makeSound()); // Output: Buddy, a Golden Retriever, barks.

// 4. Getters and Setters
class Product {
    private _price: number;

    constructor(price: number) {
        this._price = price;
    }

    get price(): number {
        return this._price;
    }

    set price(value: number) {
        if (value < 0) {
            throw new Error("Price cannot be negative.");
        }
        this._price = value;
    }
}

const laptop = new Product(100000);
console.log("Product Price:", laptop.price); // Output: 100000
laptop.price = 1200; // Update price
console.log("Updated Price:", laptop.price); // Output: 1200
// laptop.price = -500; // Error: Price cannot be negative

// 5. Static Properties and Methods
class Utility {
    static PI: number = 3.14;

    static calculateArea(radius: number): number {
        return this.PI * radius * radius;
    }
}

console.log("Static PI:", Utility.PI); // Output: 3.14
console.log("Area of Circle:", Utility.calculateArea(10)); // Output: 314

// 6. Abstract Classes
abstract class Shape {
    abstract area(): number; // Abstract method
    abstract perimeter(): number;

    describe(): string {
        return `This is a shape.`;
    }
}

class Circle extends Shape {
    radius: number;

    constructor(radius: number) {
        super();
        this.radius = radius;
    }

    area(): number {
        return Math.PI * this.radius * this.radius;
    }

    perimeter(): number {
        return 2 * Math.PI * this.radius;
    }
}

const circle = new Circle(5);
console.log("Circle Area:", circle.area()); // Output: 78.53981633974483
console.log("Circle Perimeter:", circle.perimeter()); // Output: 31.41592653589793

// 7. Implementing Interfaces in Classes
interface Vehicle {
    start(): void;
    stop(): void;
}

class Car implements Vehicle {
    start(): void {
        console.log("Car started.");
    }

    stop(): void {
        console.log("Car stopped.");
    }
}

const myCar = new Car();
myCar.start(); // Output: Car started.
myCar.stop(); // Output: Car stopped.