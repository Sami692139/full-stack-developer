"use strict"


//validation chacking functions

const validationCheckisArre =(x) =>{
  return !Array.isArray(x) || x.some(isNaN) ||  typeof(x[0]||x[1] )!=="number";
}


function validationForoneargument(x){
  if(isNaN(x)|| x>100 || x<0 || typeof x!=="number"){
    return true;
  }
}


function validationaCheckForarr(x) {
  
  if (isNaN(x[0] || x[1]) || (x[0] == [] || x[1] == []) ||( x > 100 || x < 0 ) ||  (typeof x[0]!=="number" || typeof x[1]!=="number")) {
    return true;
  }
}
function validationforTwoargument(x, y) {
  if (isNaN(x || y) || x == [] || y == [] || x == "" || y == "" || typeof x!=="number" || typeof y!=="number"  ) {
    return true;
  }
}
//+++++++++++++++++++*************+++++++++++++++++**********+++++++


//Question 1

function myFirst() {
  console.log(`Question 1:- ${"Hello"}`);
}
myFirst();

// Question 2
 
function mySecond(G) {
  // print the parameter to the console
  return G;
}
let answer = mySecond(12345);
console.log(`Question 2:- ${answer}`);

// Question 3

function myThird(r) {
  let y = mySecond(r); // call mySecond with the provided parameter
  console.log(`Question 3:- ${y}`);
}
myThird(45789);

// Question 4
let nameList = ["Ethiopia", "Mesklu", 234, "ambes"];

function myFourth(m) {
  
  console.log(`Question 4 :- ${m[0]}`);
}
myFourth(nameList);

// Question 5

const testing = (x) => {
     if(validationCheckisArre(x)){
      return "Please enter only number!!"
     }
     return `Question 5 is doning by arrow function:-  ${x[0] + x[1]} `;
} 
    
  
     let u = testing([6, 9]);

     console.log(u);


 
  




function myFifth(num) {
  
  if (validationaCheckForarr(num)==true) {
    return "Pleas enter only number!";
  }

  return `Question 5:-  ${(x[0]) + (x[1])}`;
}
let x = [7,7]
let w = myFifth(x);

console.log(w);

//Question 6

function time(T) {
  console.log(`Question 6 :- ${T * 60} second`);
}

time(45);

// Question 7
//defined a function name incriment its take an argument 
//check the argument where its number or not
//if the argument is not a number display error massage
//if not increment the agrument number by one

function incriment(x) {
  // if(validationForoneargument(x)==true){
  //   return "please enter only number!"
  // }
  // var x = ++x;
  // return x;
  // codition ? truevalue : falseValue

// let result =  typeof x !== "number" ? "please enter only number!" : ++x;
typeof x !== "number" ? console.log("please enter only number!")
  : console.log("Question 7:- ", ++x);;

//  return result
}
// console.log(`Question 7:- ${incriment(4)}`);
incriment(5)
// Question 8

function triangle(b, h) {
  if (validationforTwoargument(b, h) == true) {
    return "you have to enter a number !";
  }
  let area = (b * h) / 2;
  return area;
}
console.log(`Question 8 :- Area of the Triangle is= ${triangle(3, 8)}`);

// Question 9

function farmer(chickens, cows, pigs) {
  let total = chickens * 2 + cows * 4 + pigs * 4;
  console.log(`Question 9 :- Total number of animale's legs are: ${total}`);
}

farmer(3, 5, 9);

// Question 10
let number = [9, 5];
function multiplByThree(num1) {
  if (validationaCheckForarr(number) == true) {
    // I use the function who check the validation of the input!!
    return "your input must be a number!";
  }
  //  3 times the first element of the array.
  return number[0] * 3;
}

console.log(`Question 10 :-  ${multiplByThree(number)}`);

// Questions on Conditional statements and - practice exercise
// ***************************************************
// Question 11

function inequality(num1, num2) {
  if (validationforTwoargument(num1, num2) == true) {
    return "pleas enter only number! ";
  }
  if (num1 === num2) {
    // its cheack the two numbers are equal or not
    return true;
  } else {
    return false;
  }
}
let check = inequality(8, 7);
console.log(`Question 11:- ${check}`);

// Question 12

function divisibleBy100(num) {
  if (validationForoneargument(num)==true) {
    return "Your input is not a number Pleas enter a number!";
  } else if (num % 100 === 0) {
    return true;
  } else {
    return false;
  }
}
let div = divisibleBy100(87);
console.log(`Question 12:- ${div}`);

// Question 13

function even_Od(r) {
 
  if (validationForoneargument(r)==true) {
     return "Plese enter a Number!";
  } else if (r % 2 == 0) {
    return `the number ${r} is Even number!`
    
  } else {
    return `the number ${r} is Ode number!`
    ;
  }
}
let test=even_Od(58);
console.log(`Question 13:- ${test}`); //Template literals (Template strings)

// Question 14

function gradePoint(point) {
  
  if (validationForoneargument(point)==true) {
    return "You have to enter only number!";
  }       
   else if (point >= 90) {
    return "Grade A";
  } else if (point >= 80) {
    return "Grade B";
  } else {
    return "Grade C";
  }
}
let grade = gradePoint(89.6);
console.log(`Question 14:- ${grade}`);
