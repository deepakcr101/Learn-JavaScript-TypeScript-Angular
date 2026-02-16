// Namespaces in TypeScript

/*
### What are Namespaces?

Namespaces are a way to group related code together under a single name. They help organize code and avoid naming collisions in large projects.

### Why use Namespaces?

- **Code Organization**: Group related functionality together.
- **Avoid Naming Collisions**: Prevent conflicts in global scope.
- **Logical Grouping**: Create modular and reusable code.

### Common Use Cases:
1. Grouping utility functions
2. Defining reusable types and interfaces
3. Organizing large projects
*/

console.log("Namespaces in TypeScript");

// 1. Defining a Namespace
namespace MathUtils {
    export const PI = 3.14;

    export function calculateArea(radius: number): number {
        return PI * radius * radius;
    }

    export function calculatePerimeter(radius: number): number {
        return 2 * PI * radius;
    }
}

// 2. Using a Namespace
console.log("Circle Area:", MathUtils.calculateArea(10)); // Output: 314
console.log("Circle Perimeter:", MathUtils.calculatePerimeter(10)); // Output: 62.8

// 3. Nested Namespaces
namespace App {
    export namespace Models {
        export interface User {
            name: string;
            age: number;
        }
    }

    export namespace Services {
        export function getUser(): Models.User {
            return { name: "Alice", age: 25 };
        }
    }
}

const user = App.Services.getUser();
console.log("User from Nested Namespace:", user); // Output: { name: 'Alice', age: 25 }