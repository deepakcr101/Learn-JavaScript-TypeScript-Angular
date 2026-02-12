/*The Logical AND assignment operator is used between two values.

If the first value is true, the second value is assigned.*/

let x = true;
let y= x &&=20 ;

console.log("Value of y: " + y); // Output: 20

//The Logical OR assignment operator is used between two values.

//If the first value is false, the second value is assigned.

/*The Nullish coalescing assignment operator is used between two values.

If the first value is undefined or null, the second value is assigned.
*/

//The ... operator splits iterables into individual elements.

let text = "12345";

let min = Math.min(...text);
let max = Math.max(...text);
console.log("Minimum value: " + min);
console.log("Maximum value: " + max);

switch(new Date().getDay()){
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
}