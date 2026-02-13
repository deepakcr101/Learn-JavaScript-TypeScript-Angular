// greetings.js

// Named exports
export const sayHello = (name) => `Hello, ${name}!`;
export const sayGoodbye = (name) => `Goodbye, ${name}!`;

// Default export
const greet = (name) => `Greetings, ${name}!`;
export default greet;