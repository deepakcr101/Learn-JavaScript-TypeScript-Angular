// Generics in TypeScript
/*
### What are Generics?

Generics allow you to create reusable components that work with multiple types while maintaining type safety. They enable you to define functions, classes, and interfaces that can operate on a variety of data types without sacrificing type checking.

### Why use Generics?

- **Reusability**: Write code that works with multiple types.
- **Type Safety**: Ensure type correctness while working with generic data.
- **Flexibility**: Adapt to different data structures and types.

### Common Use Cases:
1. Generic functions
2. Generic classes
3. Generic interfaces
*/
console.log("Generics in TypeScript");
// 1. Generic Functions
function identity(value) {
    return value;
}
console.log("Generic Identity (string):", identity("Hello")); // Output: Hello
console.log("Generic Identity (number):", identity(42)); // Output: 42
// 2. Generic Arrays
function getFirstElement(array) {
    return array[0];
}
console.log("First Element (string):", getFirstElement(["Apple", "Banana", "Cherry"])); // Output: Apple
console.log("First Element (number):", getFirstElement([1, 2, 3, 4])); // Output: 1
// 3. Generic Classes
class Box {
    constructor(content) {
        this._content = content;
    }
    getContent() {
        return this._content;
    }
}
const stringBox = new Box("TypeScript");
console.log("String Box Content:", stringBox.getContent()); // Output: TypeScript
const numberBox = new Box(123);
console.log("Number Box Content:", numberBox.getContent()); // Output: 123
const pair = {
    key: "Age",
    value: 30,
};
console.log("Generic Pair:", pair); // Output: { key: 'Age', value: 30 }
function logLength(item) {
    console.log("Length:", item.length);
}
logLength("Hello"); // Output: Length: 5
logLength([1, 2, 3]); // Output: Length: 3
// logLength(42); // Error: Type 'number' does not satisfy the constraint 'Lengthwise'
// 6. Default Type Parameters
function createArray(length, value) {
    return Array(length).fill(value);
}
console.log("Default Type Array:", createArray(3, "Default")); // Output: ['Default', 'Default', 'Default']
console.log("Number Array:", createArray(3, 42)); // Output: [42, 42, 42]
// 7. Combining Generics with Other Features
function mergeObjects(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
const merged = mergeObjects({ name: "Shivamshu" }, { age: 25 });
console.log("Merged Object:", merged); // Output: { name: 'Shivamshu', age: 25 }
