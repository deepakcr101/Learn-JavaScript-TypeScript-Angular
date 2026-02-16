// Classes in TypeScript
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.greet = function () {
        return "Hello, my name is ".concat(this.name, " and I am ").concat(this.age, " years old.");
    };
    return Person;
}());
var john = new Person("John", 30);
console.log(john.greet()); // Output: Hello, my name is John and I am 30 years old.
// 2. Access Modifiers
var Employee = /** @class */ (function () {
    function Employee(name, salary, department) {
        this.name = name;
        this.salary = salary;
        this.department = department;
    }
    Employee.prototype.getSalary = function () {
        return this.salary; // Accessing private property within the class
    };
    return Employee;
}());
var alice = new Employee("Alice", 50000, "Engineering");
console.log("Employee Name:", alice.name); // Output: Alice
console.log("Employee Salary:", alice.getSalary()); // Output: 50000
// console.log(alice.salary); // Error: Property 'salary' is private
// 3. Inheritance
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.makeSound = function () {
        return "".concat(this.name, " makes a sound.");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, breed) {
        var _this = _super.call(this, name) || this; // Call the parent class constructor
        _this.breed = breed;
        return _this;
    }
    Dog.prototype.makeSound = function () {
        return "".concat(this.name, ", a ").concat(this.breed, ", barks.");
    };
    return Dog;
}(Animal));
var buddy = new Dog("Buddy", "Golden Retriever");
console.log(buddy.makeSound()); // Output: Buddy, a Golden Retriever, barks.
// 4. Getters and Setters
var Product = /** @class */ (function () {
    function Product(price) {
        this._price = price;
    }
    Object.defineProperty(Product.prototype, "price", {
        get: function () {
            return this._price;
        },
        set: function (value) {
            if (value < 0) {
                throw new Error("Price cannot be negative.");
            }
            this._price = value;
        },
        enumerable: false,
        configurable: true
    });
    return Product;
}());
var laptop = new Product(1000);
console.log("Product Price:", laptop.price); // Output: 1000
laptop.price = 1200; // Update price
console.log("Updated Price:", laptop.price); // Output: 1200
// laptop.price = -500; // Error: Price cannot be negative
// 5. Static Properties and Methods
var Utility = /** @class */ (function () {
    function Utility() {
    }
    Utility.calculateArea = function (radius) {
        return this.PI * radius * radius;
    };
    Utility.PI = 3.14;
    return Utility;
}());
console.log("Static PI:", Utility.PI); // Output: 3.14
console.log("Area of Circle:", Utility.calculateArea(10)); // Output: 314
// 6. Abstract Classes
var Shape = /** @class */ (function () {
    function Shape() {
    }
    Shape.prototype.describe = function () {
        return "This is a shape.";
    };
    return Shape;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(radius) {
        var _this = _super.call(this) || this;
        _this.radius = radius;
        return _this;
    }
    Circle.prototype.area = function () {
        return Math.PI * this.radius * this.radius;
    };
    Circle.prototype.perimeter = function () {
        return 2 * Math.PI * this.radius;
    };
    return Circle;
}(Shape));
var circle = new Circle(5);
console.log("Circle Area:", circle.area()); // Output: 78.53981633974483
console.log("Circle Perimeter:", circle.perimeter()); // Output: 31.41592653589793
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.start = function () {
        console.log("Car started.");
    };
    Car.prototype.stop = function () {
        console.log("Car stopped.");
    };
    return Car;
}());
var myCar = new Car();
myCar.start(); // Output: Car started.
myCar.stop(); // Output: Car stopped.
