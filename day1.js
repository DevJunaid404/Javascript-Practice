// ---------Variables-----------

// variables is a container to store data.

// Declaring Variables in Javascript:

// 1: var (old way, avoide using it)
// 2: let (recommended for variables that can change)
// 3: const (for variables that should not change)

// For Example:

let name = "Junaid";
const age = 25;
var country = "Pakistan";


// Rules for Naming Variables:

// 1: Must start with a letter, _, or $ (cannot start with a number)
// 2: Can contains letters, _, $.
// 3: Javascript is case-sensitive (name and Name are different variables)
// 4: Cannot use reserved keywords let, const, var, etc.




// ------------- Data Types ---------------

//  Primitive Data Types (Stores single values)

// 1: String → Represents text values.

let myName = "Junaid";

// 2: Number → Represents numeric values (both integers and decimals).

let myAge = 25;

// 3: Boolean → Represents true or false values

let isStudent = false;

// 4: Undefined → A variable that has been declared but not assigned a value

let x;

// 5: Null → Represents an empty or unknown value.

let y = null;

// 6: BigInt → Used for very large numbers

let bigNumber = 123456789012345678901234567890n;

// 7: Symbol → Used to create unique values (rarely used)

let symbol1 = Symbol("id");


// Non-Primitive Data Types (Stores complex structures)

// 1: Object → Stores key-value pairs

let person = { name: "Junaid", age: 25 };

// 2: Array → Stores multiple values in a list

let numbers = [10, 20, 30, 40];

// 3: Function → A block of code that performs a task

function greet() {
    return "Hello, Junaid!";
}


// ------------- TypeOf Operator--------------

// The typeof operator is used to determine the data type of a variable in JavaScript.

console.log(typeof "Hello");      // Output: string
console.log(typeof 42);           // Output: number
console.log(typeof true);         // Output: boolean
console.log(typeof undefined);    // Output: undefined
console.log(typeof null);         // Output: object (this is a known JavaScript bug)
console.log(typeof 123n);         // Output: bigint
console.log(typeof Symbol("id")); // Output: symbol
console.log(typeof {});           // Output: object
console.log(typeof []);           // Output: object (arrays are special objects)
console.log(typeof function(){}); // Output: function



                // -------------- End --------------    