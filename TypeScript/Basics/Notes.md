# Object-Oriented Programming (OOP) in TypeScript 
It allows you to model real-world entities using structured, reusable code. Unlike standard JavaScript, TypeScript provides strict type checking and full support for access modifiers.
## 1. Classes and Objects
* **Class**: A blueprint or template that defines properties (data) and methods (behavior).
* **Object**: A specific instance created from a class using the new keyword.
* **Use Case**: In an E-commerce App, a Product class defines properties like price and id, while laptop and phone are individual objects created from it.
## 2. Access Modifiers (Encapsulation)
Used to control visibility and protect internal data:
* **public:** Accessible from anywhere (default).
* **private:** Accessible only within the same class.
* **protected:** Accessible within the class and its subclasses.
* Use Case: In a Banking System, a UserAccount class would have a private balance property, ensuring it can only be modified through controlled methods like deposit().
## 3. Interfaces
An interface defines a contract or "shape" that an object must follow. They do not exist at runtime (they are removed during compilation).
* **Key Feature**: A class can implement multiple interfaces.
* **Use Case**: In a Payment System, you might have an interface PaymentProcessor with a process() method. Different classes like StripeProcessor or PayPalProcessor implement this, allowing the app to swap them easily.
## 4. Abstract Classes
A base class that cannot be instantiated directly. It can contain both implemented methods (concrete) and methods without bodies (abstract) that subclasses **must** implement.
* **Key Feature:** Provides shared code for a family of related objects.
* **Use Case:** In a Game Engine, an abstract class Character might have a concrete move() method used by everyone, but an abstract attack() method that Warrior and Mage must implement differently.

###  Comparison: Interface vs. Abstract Class
| Feature	| Interface	| Abstract Class|
|---|---|---|
| Purpose |	Defines a "can-do" contract (behavior).	|Defines an "is-a" base (identity/shared state).
|Implementation	|No logic; only structure.	|Can have a mix of logic and declarations.
|Inheritance	|A class can implement many.	| A class can only extend one.
|Runtime	| Removed from compiled JS.	| Remains as a constructor/function in JS.

### Summary of Principles
Inheritance: Using extends to reuse code from a parent class.
Polymorphism: Treating different child objects as their parent type (e.g., calling .makeSound() on any Animal regardless of whether it's a Dog or Cat).