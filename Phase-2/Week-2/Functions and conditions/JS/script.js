//Question 1

function myFirst() {
  console.log(`Question 1:- ${"Hello"}`);
}
myFirst();

// Question 2

function mySecond(G) {
  console.log(`Question 2:- ${G}`); // print the parameter to the console
}
mySecond(12345);

// Question 3

function myThird(r) {
  mySecond(r); // call mySecond with the provided parameter
}
myThird(45789);   

// Question 4
let nameList = ["mola", "kebede", "fufa", "ambes"];

function myFourth(m) {
  console.log(`Question 4 :- ${m[0]}`);
}
myFourth(nameList);

// Question 5

let x = [3, 5];

function myFifth(num) {
  console.log(`Question 5:-  ${x[0] + x[1]}`);
}

myFifth(x);

// Question 6

function time(T) {
  console.log(`Question 6 :- ${T * 60} second`);
}

time(45);

// Question 7

function incriment(x) {
  var x = ++x;
   return(x);
}
  console.log(`Question 7:- ${incriment(4)}`); 

// Question 8

function triangle(b, h) {
  let area= (b*h)/2
  return area;
}
console.log(`Question 8 :- Area of the Triangle is= ${triangle(12, 14)}`);


// Question 9

function farmer(chickens, cows, pigs) {
  let total = chickens * 2 + cows * 4 + pigs * 4;
  console.log(`Question 9 :- Total number of animale's legs are: ${total}`);
}

farmer(3, 5, 9);

// Question 10
let number = [9, 11];
function multiplByThree(num1) {
  //  3 times the first element of the array.
  return number[0] * 3;
}

 console.log(`Question 10 :-  ${multiplByThree(number)}`);

// Questions on Conditional statements and - practice exercise
// ***************************************************
// Question 11
var num1 = 5,
  num2 = 9;
if (num1 === num2){ // its cheack the two numbers are equal or not
  console.log(`Question 11 :- ${true}`);
} else {
  console.log(`Question 11:-  ${false}`);
}

// Question 12


function divisibleBy100(num){
  if (num % 100 === 0) {
    console.log(`Question 12 :- ${true}`);
  } else {
    console.log(`Question 12:-  ${false}`);
  }

}
divisibleBy100(50);


// Question 13

function even_Od(r) {
  if(typeof(r)!=="number"){
    console.log("Question 13:- ", "Plese enter a Number!"); 
  }
  else if (r % 2 == 0) {
    console.log(
      `Question 13:- 
      The number you enter
      ${r}
      is Even number!!`
    );
  } else {
    console.log(
      `Question 13:- 
      The number you enter
      ${r}
       is Odd number!!`
    );
  }
}
even_Od(56);


// Question 14

function gradePoint(point){

    if(isNaN(point)){
       console.log("You Enter a String pls Enter a number!");
    }else if(point<0){
      console.log("you Enterr negative number!");

    }
    else if(point>100 || point<0){
        console.log("Question 14:-  ", "Invalide Grade!!");
    } else if (point<=100 && point>=90){
        console.log("Question 14:-  ", "Grade A");
    } else if(point<=89 && point>=80){
       console.log("Question 14:-  ", "Grade B");
    }else{
        console.log("Question 14:-  ", "Grade C");
    }
}
gradePoint(89);