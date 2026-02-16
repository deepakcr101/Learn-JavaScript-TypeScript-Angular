// 1. Named Exports and Imports
export const add = (a: number, b: number): number => a + b;
export const subtract = (a: number, b: number): number => a - b;

// 2. Default Exports and Imports
export default class Calculator {
    multiply(a: number, b: number): number {
        return a * b;
    }
}

// 3. Re-exporting Modules
export { add as addition, subtract as subtraction } from "./math";