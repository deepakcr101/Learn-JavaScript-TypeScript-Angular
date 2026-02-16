// Decorators in TypeScript

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
function LogClass(target: any) {
    console.log("Class Decorator Applied:", target.name);
}

@LogClass
class Person {
    constructor(public name: string, public age: number) {}
}

// 2. Method Decorator
function LogMethod(target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        console.log(`Method Called: ${propertyKey}`);
        console.log(`Arguments:`, args);
        return originalMethod.apply(this, args);
    };
}

class Calculator {
    @LogMethod
    add(a: number, b: number): number {
        return a + b;
    }
}

const calc = new Calculator();
console.log("Addition Result:", calc.add(5, 3)); // Logs method call and arguments

// 3. Property Decorator
function LogProperty(target: Object, propertyKey: string) {
    let value: any;

    const getter = () => {
        console.log(`Getting value of ${propertyKey}: ${value}`);
        return value;
    };

    const setter = (newValue: any) => {
        console.log(`Setting value of ${propertyKey} to: ${newValue}`);
        value = newValue;
    };

    Object.defineProperty(target, propertyKey, {
        get: getter,
        set: setter,
    });
}

class User {
    @LogProperty
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

const user = new User("Alice");
user.name = "Bob"; // Logs property access
console.log("User Name:", user.name); // Logs property retrieval