// --------------- If else Statement ---------------


// Q no 1: Write a JavaScript program that takes a number and prints "Even" if it is even, otherwise prints "Odd".

let num = 1;

if (num % 2 == 0) {
    console.log("Even");
    
} else{
    console.log("Odd");
    
};

// Q no 2: Write a program that checks if a given number is positive, negative, or zero and prints the result.

let number = 5;

if (number<0) {
    console.log("Negative");

}else if(number==0){
    console.log("Zero");
    
}else{
    console.log("Positive");
    
}


// Q no 3: Ask the user for their age. If they are 18 or older, print "You are eligible to vote." Otherwise, print "You are not eligible to vote."

let age = 18;

if (age<18) {
    console.log("Sorry, You are not eligible to caste your vote");
    
}else{
    console.log("Congratulation! You are eligible for casting your vote.");
    
}


// Q no 4: Take two numbers as input and print the greater number. If both are equal, print "Both numbers are equal."

let num1 = prompt("Enter the first number:");
let num2 = prompt("Enter the second number:");

num1 = Number(num1);
num2 = Number(num2);

if (num1 > num2) {
    console.log(num1 + " is greater.");
} else if (num2 > num1) {
    console.log(num2 + " is greater.");
} else {
    console.log("Both numbers are equal.");
}


// Q no 5: Write a program that takes a student's marks (out of 100) and assigns a grade:

// 90 and above → "A"
// 80 to 89 → "B"
// 70 to 79 → "C"
// 60 to 69 → "D"
// Below 60 → "F"


let marks = 80;

if (marks==90 && marks>90) {
    console.log("A");
    
}else if(marks>=80 && marks<=89){
    console.log("B");
    
}else if(marks>=70 && makrs<=79){
    console.log("C");
    
}else if(marks>=60 && marks<=69){
    console.log("D");
    
}else{
    console.log("F");
    
}

// -------------------- End ---------------------