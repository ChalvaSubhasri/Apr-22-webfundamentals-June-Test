//Question.1: An array is given, return the sum of all the positives numbers. const input
// = [ 1, -5, 2, 10, -30, 29, 50]

const input = [1, -5, 2, 10, -30, 29, 50];
let positiveNumSum = 0;
input.forEach(function (element) {
  if (element > 0) {
    positiveNumSum += element;
  }
});
console.log(positiveNumSum);

// <==================================================================================================>

// Question.2: Multiple records of people are given, you have to print the first name and last name .
// let friends = [{fname: 'Rachal', lname:"Green" ,id: 1, marks : 98 },
// {fname: 'Ross',lname:"Geller" , id: 2, marks : 23 },
// {fname: 'Monica ',lname:"Geller" , id: 3, marks : 75 },
//  {fname: 'Joey',lname:" Tribbiani" , id: 4, marks : 46 },
//  {fname: 'Chandler  ',lname:"Bing" , id: 5, marks : 78 },
//  {fname: 'Phoebe',lname:"Buffay" , id: 6, marks : 45 }           ]

let friends = [
  { fname: "Rachal", lname: "Green", id: 1, marks: 98 },
  { fname: "Ross", lname: "Geller", id: 2, marks: 23 },
  { fname: "Monica ", lname: "Geller", id: 3, marks: 75 },
  { fname: "Joey", lname: " Tribbiani", id: 4, marks: 46 },
  { fname: "Chandler  ", lname: "Bing", id: 5, marks: 78 },
  { fname: "Phoebe", lname: "Buffay", id: 6, marks: 45 },
];

friends.filter(function (element) {
    console.log(element.fname, element.lname);
})

// <===================================================================================================>

// Question.3 : 3.You are given some names of different cities and a ordered list html element; 
// add a list item for each to the ordered list.   
// city = ['Delhi', 'Mumbai', 'Jaipur','Kolkata','Indore' ]; 
// (below html code and output is given)

city = ['Delhi', 'Hyderabad', 'Bangalore','Kolkata','Indore' ]; 

let olref = document.getElementById("olref")

city.forEach(element => {
    olref.innerHTML += `<li>${element}</li>`
}); 