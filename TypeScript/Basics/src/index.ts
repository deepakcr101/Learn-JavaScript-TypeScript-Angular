function greet(name: string): string {
    return `Hello, ${name}! Welcome to TypeScript.`;
}

const userName: string = "Deepak Kumar";
console.log(greet(userName));
let age: number = 22;
console.log(`Age: ${age}`);

let myName = "Deepak Kumar"; // TypeScript infers this as a string
console.log("My Name:",myName);

interface User {
  name: string;
  id: number;
}
 
class UserAccount {
  name: string;
  id: number;
 
  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}
 
const user: User = new UserAccount("Murphy", 1);
console.log("User:", user);

