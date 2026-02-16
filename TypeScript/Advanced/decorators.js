// Decorators in TypeScript
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*
### What are Decorators?

Decorators are special functions that can be attached to classes, methods, properties, or parameters. They allow you to modify or enhance the behavior of the target.

### Why use Decorators?

- **Angular Integration**: Angular uses decorators for components, directives, services, and modules.
- **Reusability**: Add reusable logic to classes and methods.
- **Code Simplification**: Remove boilerplate code.

### Common Use Cases:
1. Angular components and services
2. Logging and debugging
3. Dependency injection
*/
console.log("Decorators in TypeScript");
// 1. Class Decorator
function LogClass(target) {
    console.log("Class Decorator Applied:", target.name);
}
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person = __decorate([
        LogClass
    ], Person);
    return Person;
}());
// 2. Method Decorator
function LogMethod(target, propertyKey, descriptor) {
    var originalMethod = descriptor.value;
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log("Method Called: ".concat(propertyKey));
        console.log("Arguments:", args);
        return originalMethod.apply(this, args);
    };
}
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.add = function (a, b) {
        return a + b;
    };
    __decorate([
        LogMethod
    ], Calculator.prototype, "add", null);
    return Calculator;
}());
var calc = new Calculator();
console.log("Addition Result:", calc.add(5, 3)); // Logs method call and arguments
// 3. Property Decorator
function LogProperty(target, propertyKey) {
    var value;
    var getter = function () {
        console.log("Getting value of ".concat(propertyKey, ": ").concat(value));
        return value;
    };
    var setter = function (newValue) {
        console.log("Setting value of ".concat(propertyKey, " to: ").concat(newValue));
        value = newValue;
    };
    Object.defineProperty(target, propertyKey, {
        get: getter,
        set: setter,
    });
}
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    __decorate([
        LogProperty
    ], User.prototype, "name", void 0);
    return User;
}());
var user = new User("Alice");
user.name = "Bob"; // Logs property access
console.log("User Name:", user.name); // Logs property retrieval
