// Types in TypeScript
/*
### What are Types?

Types define the shape and behavior of data in TypeScript. They allow you to specify what kind of data a variable, function, or object can hold, making your code more predictable and error-resistant.

### Why use Types?

- **Static Typing**: Catch errors during development, not runtime.
- **Improved Readability**: Makes code easier to understand.
- **Refactoring**: Simplifies maintaining and scaling codebases.

### Common Types:
1. **Primitive Types**: string, number, boolean, null, undefined
2. **Array and Tuple**
3. **Object**
4. **Union and Intersection**
5. **Any, Unknown, and Never**
*/
console.log("Types in TypeScript");
// 1. Primitive Types
var username = "John"; // String type
var age = 25; // Number type
var isActive = true; // Boolean type
console.log("Username:", username);
console.log("Age:", age);
console.log("Is Active:", isActive);
// 2. Arrays
var numbers = [1, 2, 3, 4, 5];
console.log("Numbers Array:", numbers);
// 3. Tuples
//Tuples are a "special" kind of array where the compiler tracks exactly what type is at each position and prevents you from accessing an index that doesn't exist (e.g., user[2] on a 2-item tuple will throw a compile error)
var user = ["Alice", 30]; // Tuple with string and number
console.log("User Tuple:", user);
// 4. Objects
//Define the structure of objects using type annotations.
var person = {
    name: "Bob",
    age: 40,
    isEmployed: true,
};
console.log("Person Object:", person);
// 5. Union Types
//Combine multiple types: string | number
var id; // Can be a string or number
id = "123";
console.log("ID (string):", id);
id = 456;
console.log("ID (number):", id);
var anotherUser = { name: "Charlie", age: 35 };
console.log("Another User:", anotherUser);
/*
any: Accepts any type (use sparingly).

unknown: Requires type checking before use.

never: Represents unreachable code or functions that never return.
*/
// 7. Any Type
var randomData = "Hello"; // Can be any type
randomData = 42;
randomData = true;
console.log("Random Data:", randomData);
// 8. Unknown Type
var input = "Some data";
if (typeof input === "string") {
    console.log("Input is a string:", input);
}
// 9. Never Type
function throwError(message) {
    throw new Error(message);
}
//throwError("Something went wrong!"); // Uncomment to test
// 10. Enums
//Define a set of named constants: enum Role { Admin, User, Guest }
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["User"] = 1] = "User";
    Role[Role["Guest"] = 2] = "Guest";
})(Role || (Role = {}));
var myRole = Role.Admin;
console.log("Role:", myRole); // Output: 0 (Admin is the first index)
