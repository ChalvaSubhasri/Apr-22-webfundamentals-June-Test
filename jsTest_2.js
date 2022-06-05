/* Answer.1: 
    Function is a block of code that is design to perform specific task. Function is executed 
    when it is been called. The major advantage of function is that Functions allow us to 
    create block of code that can easily executed many times without rewriting them.
    Means Function reduce the code redundancy of any program.
    There are 3 type of writing a function:-
1.  Function Declaration:-
    --------------------
    It is the most common way to declaring a function. we declare the function with the help of 
    "Function" Keyword and then name of the function and parameter inside the parathesis.
    syntax:
        function function_name(params) {
            
        }
2.  Function Expression:- 
    --------------------
    It is another way to declaring a function. in this we declare the function by using a variable
    instead of function name and store the return value in that variable.
    syntax:
        const var_name = function (params) {
                
        }
3.  Arrow Function:-
    -----------------
    Arrow functions are been introduced in the ES6 version of JavaScript. It is used to shorten the code.
    Here we do not use the “function” keyword and use the arrow symbol. 
    syntax:
                const var_name = (params) => {
                }*/

// ===========================================================================================>

//Answer.2:  program to display the cube of the number upto given an integer.
function cubeOfNumbers(n) {
    for (let i = 1; i <= n; i++) {
        console.log(`${i} = ${i}x${i}x${i} = ${i**3}`);        
    }
}
cubeOfNumbers(5);

// ==========================================================================================>

//Answer.3:  program to display the n terms of odd natural number and their sum.
function sumOfOddNaturalNuber(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum += (i*2)-1
    }
    console.log(sum);

}
sumOfOddNaturalNuber(5)

// ===========================================================================================>

// Answer.4: Program to print Nth prime number.(Input: 5, Output: 11, since 11 is the 5th prime number)

let nthPrimeNum = parseInt(prompt("Enter the Position number of a  prime number:"))
let num = 2
let latestNum = 0
let i = 0

while (i !== nthPrimeNum) {
    let count = 0;
    for (let j = 2; j < num; j++) {
        if (num % j === 0){
            count+=1
            // console.log(count);
            break
        }
    }
    if (count === 0){
        i+=1
        latestNum = num
        // console.log(latestNum);
    }
    num = num+1
} 
console.log(`${nthPrimeNum}th prime number is ${latestNum}`);
 15  