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
var MathUtils;
(function (MathUtils) {
    MathUtils.PI = 3.14;
    function calculateArea(radius) {
        return MathUtils.PI * radius * radius;
    }
    MathUtils.calculateArea = calculateArea;
    function calculatePerimeter(radius) {
        return 2 * MathUtils.PI * radius;
    }
    MathUtils.calculatePerimeter = calculatePerimeter;
})(MathUtils || (MathUtils = {}));
// 2. Using a Namespace
console.log("Circle Area:", MathUtils.calculateArea(10)); // Output: 314
console.log("Circle Perimeter:", MathUtils.calculatePerimeter(10)); // Output: 62.8
// 3. Nested Namespaces
var App;
(function (App) {
    var Services;
    (function (Services) {
        function getUser() {
            return { name: "Alice", age: 25 };
        }
        Services.getUser = getUser;
    })(Services = App.Services || (App.Services = {}));
})(App || (App = {}));
var user = App.Services.getUser();
console.log("User from Nested Namespace:", user); // Output: { name: 'Alice', age: 25 }
