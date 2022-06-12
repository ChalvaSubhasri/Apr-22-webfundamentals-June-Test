"use strict"
/* Question.1: Write a function to check if geekster exists in your array var list = 
['geek', 'geekster', 'geeky'] .If it exists  add some code to find the  index of geekster and remove 
that item.*/


let list = ['geek', 'geekster', 'geeky'];
function findAndRemoveGeekster() {
    if (list.includes("geekster")) {
        for (let i = list.indexOf("geekster"); i < list.length; i++) {
            list[i]=list[i+1];
    }
    list.pop();
    return list;
    }else{
        return `"geekster" is not present in the given list`
    }
}
let result =findAndRemoveGeekster();
console.log(result);

// <===================================================================================================>

/*Question.2: In how many ways can we loop in an array describe each with an example ?
1. For loop:- we can iterate through an array with the help of for loop. In for loop declaration,
              initialization, conditon and incrementation all happen in one line.*/
//example: 
let forLoopArr = [10,20,30,40,50];
for (let i = 0; i < forLoopArr.length; i++) {
    console.log(forLoopArr[i]); 
}

/*2. While loop:- we can iterate through an array with the help of while loop. The while statement 
              generates a loop that gets executed over a particular block of code as long as the
              condition is true. Every time before executing the block of code the condition gets checked*/
//example:
let whileLoopArr = [1,2,3,4,5]
let i = 0;
while(i < whileLoopArr.length){
    console.log(whileLoopArr[i]);
    i++
}

/*3. for of Loop:- We can iterate through an array with the help For OF Loop. For of loop iterate through 
                the value of array. In this loop for every iteration the value of the next
                property is assigned to the variable.
ecample*/
let forOfArr = ["My","Name",'is','Chalva Subhasri']
let word = ""
for (let e of forOfArr) {
    word += e+" "
}
console.log(word);

// <=================================================================================================>

/* Question.3:- What is the length of these arraysA. var arr1 = [,,,]; B. var arr2 = new Array(3)C. var 
                arr3 = [1,2,3,4,5]D. var array = [ [1,2,3], [4,5,6]  ];E. var array[0].length = 
                [ [1,2,3], [4,5,6]  ];*/

var arr1 = [,,,];
var arr2 = new Array(3)
var arr3 = [1,2,3,4,5]
var array = [ [1,2,3], [4,5,6]  ]
console.log(`len of arr1 is: ${arr1.length}`);
console.log(`len of arr2 is: ${arr2.length}`);
console.log(`len of arr3 is: ${arr3.length}`);
console.log(`len of array is: ${array.length}`);
console.log(`len of array[0] is: ${array[0].length}`);

// <=================================================================================================>

// Question.4:- Find the index position of b in this array var arr= ['a','b','c','d'];

let arr= ['a','b','c','d'];
// 1st method:
console.log(arr.indexOf('b'));

//2nd method:
for (let i = 0; i < arr.length; i++) {
    if (arr[i]==='b') {
        console.log(i);
    }
}
// <================================================================================================>

//Question.5:- What will be returned if you look for the index of something that does not exist?
//Answer:- indexOf returns -1.

// <================================================================================================>

//Question.5:- Find the nth largest element in a sorted array
function nthlargest(array, highest) {
    array.sort();
    let l=array.length;
    console.log(array);
    if(highest>l)
        return("undefined");
    else
        return(array[(l-highest)]);
}
let res = nthlargest([10,40,60,30,50,20], 1);
console.log(res); 