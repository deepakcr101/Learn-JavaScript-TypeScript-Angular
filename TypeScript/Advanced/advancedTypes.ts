// Advanced Types in TypeScript

/*
### What are Advanced Types?

Advanced types enable complex type manipulations, such as combining, transforming, or inferring types. These are useful for creating dynamic and reusable type definitions.

### Why use Advanced Types?

- **Flexibility**: Handle complex type scenarios.
- **Dynamic Type Manipulation**: Create adaptable type definitions.
- **Scalability**: Manage advanced type systems in large applications.

### Common Use Cases:
1. Union and Intersection Types
2. Conditional Types
3. Mapped Types
*/

console.log("Advanced Types in TypeScript");

// 1. Union Types
let id: string | number;
id = "123";
console.log("Union Type (string):", id); // Output: 123
id = 456;
console.log("Union Type (number):", id); // Output: 456

// 2. Intersection Types
interface Name {
    name: string;
}

interface Age {
    age: number;
}

type Person = Name & Age;
const person: Person = { name: "Alice", age: 25 };
console.log("Intersection Type:", person); // Output: { name: 'Alice', age: 25 }

// 3. Conditional Types
type IsString<T> = T extends string ? "String" : "Not String";
type Test1 = IsString<string>; // Output: "String"
type Test2 = IsString<number>; // Output: "Not String"

// 4. Mapped Types
type ReadOnly<T> = {
    readonly [Key in keyof T]: T[Key];
};

interface User {
    name: string;
    age: number;
}

const readonlyUser: ReadOnly<User> = {
    name: "John",
    age: 30,
};
// readonlyUser.age = 31; // Error: Cannot assign to 'age' because it is a read-only property

console.log("Mapped Type:", readonlyUser);