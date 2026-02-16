// Utility Types in TypeScript

/*
### What are Utility Types?

Utility types are built-in TypeScript types that allow you to transform and manipulate existing types. They are particularly useful for creating dynamic and reusable type definitions.

### Why use Utility Types?

- **Simplify Type Definitions**: Reduce boilerplate code.
- **Dynamic Type Manipulation**: Modify existing types based on your needs.
- **Error Prevention**: Ensure type safety even with complex type operations.

### Common Utility Types:
1. Partial<T>
2. Required<T>
3. Readonly<T>
4. Pick<T, K>
5. Omit<T, K>
6. Record<K, T>
*/

console.log("Utility Types in TypeScript");

// 1. Partial<T>  Makes all properties of type T optional.
interface User {
    name: string;
    age: number;
    email: string;
}

const partialUser: Partial<User> = {
    name: "John",
};
console.log("Partial User:", partialUser); // Output: { name: 'John' }

// 2. Required<T> The opposite of Partial; it makes every optional property mandatory
const fullUser: Required<User> = {
    name: "Alice",
    age: 25,
    email: "alice@example.com",
};
console.log("Required User:", fullUser); // Output: { name: 'Alice', age: 25, email: 'alice@example.com' }

// 3. Readonly<T>  Makes all properties immutable; they cannot be reassigned after being set.
const readonlyUser: Readonly<User> = {
    name: "Bob",
    age: 30,
    email: "bob@example.com",
};
// readonlyUser.age = 31; // Error: Cannot assign to 'age' because it is a read-only property

console.log("Readonly User:", readonlyUser);

// 4. Pick<T, K>  Creates a new type by selecting a specific set of keys K from type T and constructing a new type with those keys and their corresponding types.

const pickedUser: Pick<User, "name" | "email"> = {
    name: "Charlie",
    email: "charlie@example.com",
};
console.log("Picked User:", pickedUser); // Output: { name: 'Charlie', email: 'charlie@example.com' }

// 5. Omit<T, K> The opposite of Pick; it creates a type by removing specific keys K from type T
const omittedUser: Omit<User, "email"> = {
    name: "Dave",
    age: 35,
};
console.log("Omitted User:", omittedUser); // Output: { name: 'Dave', age: 35 }

// 6. Record<K, T> Constructs an object type with specific keys K and a uniform value type T
const userRoles: Record<string, string> = {
    admin: "Alice",
    editor: "Bob",
    viewer: "Charlie",
};
console.log("User Roles:", userRoles); // Output: { admin: 'Alice', editor: 'Bob', viewer: 'Charlie' }