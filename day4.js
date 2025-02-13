console.log(typeof 42);
console.log(typeof 3.14);
console.log(typeof 'Hello, World!'
);
console.log(typeof true);
console.log(typeof [1, 2, 3, 4]);
console.log(typeof { name: 'Alice', age: 25 });
console.log(typeof null);
console.log(typeof undefined);




// Type Conversion


let a = [1, 2, 3];

let b = String(a)
console.log(b);
console.log(typeof b);

'4' * 2
8
> true + false
1
> null == undefined
true
> typeof NaN
'number'


console.log('5' - 2);
console.log('5' + 2);
console.log(true == 1);
console.log(false === 0);



let name = "Syed Muhammad Junaid Shah";
console.log(name.length)
console.log(name.toUpperCase())
console.log(name.toLowerCase())

let str = "JavaScript";
console.log(str[9])

console.log("Hello "+"World");


let text = "JavaScript is awesome";

console.log(text.substring(4,10));
console.log(text.slice(14,21));


let sentence = "I love JavaScript";

console.log(sentence.includes("Java"));
console.log(sentence.replace("JavaScript", "python"));
console.log(sentence.reverseString("I love JavaScript"));

let a = 14

if (a%2==0) {
    console.log("Even");
}else{
    console.log("Odd");    
}


let a = -4

if (a>0) {
    console.log("Positive");
    
}else if(a==0){
    console.log("Zero");
    
}else{
    console.log("Negative");
    
}


let age = prompt("Enter Your Age")
if (age>=18) {
    console.log("You can vote");
    
}else{
    console.log("You cannot vote");
    
}


// FizzBuzz from 1 to 50

for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz"); // Multiples of both 3 and 5
    } else if (i % 3 === 0) {
        console.log("Fizz");     // Multiples of 3
    } else if (i % 5 === 0) {
        console.log("Buzz");     // Multiples of 5
    } else {
        console.log(i);          // Not a multiple of 3 or 5
    }
}


// Basic Calculator


let num1 = 20;
let num2 = 5;
let operator = '/'; // Change to '+', '-', '*', or '/'

Calculator Logic
if (operator === '+') {
    console.log(`${num1} + ${num2} = ${num1 + num2}`);
} else if (operator === '-') {
    console.log(`${num1} - ${num2} = ${num1 - num2}`);
} else if (operator === '*') {
    console.log(`${num1} * ${num2} = ${num1 * num2}`);
} else if (operator === '/') {
    if (num2 !== 0) { // Check to avoid division by zero
        console.log(`${num1} / ${num2} = ${num1 / num2}`);
    } else {
        console.log("Error: Cannot divide by zero.");
    }
} else {
    console.log("Invalid operator. Please use +, -, *, or /");
}


// Basic Calculator with User Input

let num1 = parseFloat(prompt("Enter the first number:"));
let operator = prompt("Enter an operator (+, -, *, /):");
let num2 = parseFloat(prompt("Enter the second number:"));

// Calculator Logic
if (isNaN(num1) || isNaN(num2)) {
    console.log("Error: Please enter valid numbers.");
} else {
    if (operator === '+') {
        console.log(`${num1} + ${num2} = ${num1 + num2}`);
    } else if (operator === '-') {
        console.log(`${num1} - ${num2} = ${num1 - num2}`);
    } else if (operator === '*') {
        console.log(`${num1} * ${num2} = ${num1 * num2}`);
    } else if (operator === '/') {
        if (num2 !== 0) {
            console.log(`${num1} / ${num2} = ${num1 / num2}`);
        } else {
            console.log("Error: Cannot divide by zero.");
        }
    } else {
        console.log("Invalid operator. Please use +, -, *, or /");
    }
}


const quotes = [
    "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    "You've gotta dance like there's nobody watching",
    "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
    "“In three words I can sum up everything I've learned about life: it goes on.”",
    "“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”",
    "“Friendship ... is born at the moment when one man says to another "
]

function quoteGenerator() {
    let index = Math.floor(Math.random()*quotes.length)
    console.log(index);
    
    return quotes[index] 
}
console.log(quoteGenerator());




1:

for (let i = 1; i <= 10; i++) {
    console.log(i);
}


2:

let sum = 0;

for (let i = 1; i <= 100; i++) {
    sum += i; // Adds the current number (i) to the sum
}

console.log("The sum of numbers from 1 to 100 is:", sum);

3:

for (let i = 1; i <= 50; i++) {
    if (i%2!=0 && i<=50) {
        console.log(i);
        
    }
}


4:

for (let i = 10; i >0; i--) {
    console.log(i);
    
}

5:

let numbers = [23, 45, 12, 78, 34, 90, 56]; // Example array
let largest = numbers[0]; // Assume the first number is the largest

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
        largest = numbers[i]; // Update the largest number
    }
}

console.log("The largest number is:", largest);



let number = prompt("Enter your number");

if (number==0) {
    console.log("Zero");
    
}else if(number>0){
    console.log("Positve");
    
}else{
    console.log("Negative");
    
}

let num1 = prompt("Enter first number")
let num2 = prompt("Enter second number")

if(num1>num2){
    console.log("The num1 value is grater", num1);
    
}else if(num2>num1){
    console.log("The num2 value is grater ", num2);
    
}else if(num1==num2){
    console.log("both are equal");
    
}


let sum = 0

for (let i = 10; i>= 1; i--) {
console.log(i);

}



let sum = 0;

while (i>=50) {
    console.log(i);
    sum +=i
}


let fruits = ["apple", "banana","orange","grape"]

fruits.pop();
console.log(fruits.length);


function call(params) {
    let name= "World";
    console.log(`Hello ${name}`);
    
}

call();


function addNumbers(a,b) {
    let sum = a+b;
    return sum;
}

console.log(addNumbers(3,4));


function isEven(number) { 
    if (number % 2 === 0) { 
        console.log("Even");
    } else {
        console.log("Odd");
    }
}

isEven(6); 
isEven(7); 



function sayHello() {

    let name = "junaid";
    console.log(`Hello, ${name}`);
    
}


console.log(sayHello("Hamza"));





     name = "Junaid" 
    age = 24;
    pii = 3.14;
    isVirgin = true;
    x = undefined;
    z = null;

    console.log(typeof name);
    console.log(typeof age);
    console.log(typeof pii);
    console.log(typeof isVirgin);
    console.log(typeof x);
    console.log(typeof z);
    

    const pen = {
        name: "Parker pen",
        color: "Black",
        Rating: 4,
        Price: 270
    }

    pen ["Price"] = pen["Price"]+30
    console.log(pen);



    const person= {
        name:"Junaid",
        age: 24,
        city:"Multan"
    }

    person["age"] = person["age"]+6
    person.hobby = "Games"
    delete person.city
    console.log(person);
    


    for (let i = 2; i <= 100; i++) {
        if(i%2===0){
            console.log(i);
            
        }
    }
    


    let componies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"]

    // componies.shift();
    // componies.splice(2, 1, "Ola")
    componies.push("Amazon")
    console.log(componies);
    