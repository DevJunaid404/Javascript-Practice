// 1: Create a Number variable num with some value Now, print "good" if number is divisible by 10 and print "bad" if it is not

let num = 20;

if (num%10==0) {
    console.log("good");
    
}else{
    console.log("bad");
    
}

// 2: Take the user's name and age as input using prompt. Then return back the following statement to the user as an alert.

// name is age years old. --> try it with tempelate literals


let name = prompt("Enter your name");
let age = prompt("Enter your age");

console.log(alert(`${name} is ${age} years old`));


// 3: A string is a golden string if its start with the character 'A' or 'a' and has a total length greater than 5. for a given string print if it is golden or Notification.


let str = 'Apple';

if ((str[0]=='A' || str[0]=='a') && (str.length>=5)) {
    console.log(`${str} is a golden string`);
} else{
    console.log(`${str} is not a golden string`);
    
}

// 4: Write a program to check if 2 numbers have the same last digit like 12345 12575 have the same last digit i.e 1;

let num1 = 5458;
let num2 = 94638;

if (num1%10 == num2%10) {
    console.log("The number is same");
    
}else{
    console.log("The number is not same");
    
}