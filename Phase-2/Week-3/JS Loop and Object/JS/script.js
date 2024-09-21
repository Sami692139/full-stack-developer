//validation chacking functions

const validationCheckisArre = (x) => {
  return (
    !Array.isArray(x) || x.some(isNaN) || typeof (x[0] || x[1]) !== "number"
  );
};

function validationForoneargument(x) {
  if (isNaN(x) || x > 100 || x < 0 || typeof x !== "number") {
    return true;
  }
}

function validationaCheckForarr(x) {
  if (
    isNaN(x[0] || x[1]) ||
    x[0] == [] ||
    x[1] == [] ||
    x > 100 ||
    x < 0 ||
    typeof x[0] !== "number" ||
    typeof x[1] !== "number"
  ) {
    return true;
  }
}
function validationforTwoargument(x, y) {
  if (
    isNaN(x || y) ||
    x == [] ||
    y == [] ||
    x == "" ||
    y == "" ||
    typeof x !== "number" ||
    typeof y !== "number"
  ) {
    return true;
  }
}
//+++++++++++++++++++*************+++++++++++++++++**********+++++++

//Questions on decision loops
console.log("Question 1 Answer");
//!Question 1
/* 
todo: Write a function that prints the first 10 integers on the console starting from the number 1 using the JavaScript for loop.
*/

const listOf = () => { 
  
  for (i = 1; i <= 10; i++) {
    console.log(i);
  }
};
listOf();
//! Question 2
/*
todo:Write a function that takes a single number as an argument and prints the next 5 numbers in the
? console. Note: each output should be displayed on a new line.
! ○ Test case: If you give 7 to the function,  output should look like this:
8
9
10
11
12
*/

console.log("Question 2 Answer");
let printNum = (x) => {
  if (validationForoneargument(x) == true) {
    return "You have to Enter Only number!!"
  }
    for (i = x; i < x + 5; i++) {
      console.log(i + 1, "\n");
    }
  
};
 printNum(7) ;

//!Question 3
/*
todo: Write a function that takes a single number and prints the sum of the next 10 numbers after the
 todo     given number. Test case: If you give 7 to the function, output should be: 125 - because 
          !     (8 + 9 + 10+11+ 12+ 13+ 14+ 15+ 16+ 17 = 125)
*/

console.log("Question 3 Answer");
const singlPrint = (num) => {
  if(validationForoneargument(num)==true){
    return "Pleas Enter only number!!"
  }
  let sum = 0;
  for (i = 1; i <= 10; i++) {
    sum += num + i;
  }
  console.log(sum);
};
singlPrint(7);

//! Question 4
/*  
 todo:  Write a function that takes an array as an argument and prints every element of the array on the console.
! Test case: given the array a = [1, "Hello", 8, 44], output should look like this:
   !           1
    !          Hello
     !         8
      !        44


  */

console.log("Question 4 Answer");

var list = (x) => {
  if(validationCheckisArre(x)==true){
    return "the Input not to be empty!! "
  }
  for (i = 0; i < x.length; i++) {
    console.log(x[i]);
  }
};
const sample = [1, "Hello", 8, 44];
list(sample);

//! Question 5
/*
todo:  Write a function that takes an array as an argument and prints the total number of elements found in the array. Hint: use a property of the Array object to solve this question.

! Test case 1: Given the array a = [1, "Hello", 8, 44], output should be: 4
!  Test case 2: Given the array a = ["world", 13], output should be: 2
*/

console.log("Question 5 Answer");
const countOff = x => {
  let count = 0;
  for (i = 0; i < x.length; i++) {
    count++;
  }
  console.log(count);
};
const num = [1, "Hello", 8, 44];
countOff(num);

//! Question 6
/*
todo: Write a function that takes an array of numbers as a parameter and logs in the console the sum of all the numbers in the array.
? Test case 1: If you give this array, [5, 6, 99, 8, 76, 4, 68, 44],  to the function, output
 !  should be: 310 because 5 + 6 + 99 + 8 + 76 + 4 + 68 + 44
 !  Test case 2: If you give this array, [3, 0], to the function, output should be: 3 because 3 + 0
 !=========+++++++++==========++++++++++++========+++
  ? 1. creat a function name addNumberoffArre
  ? 2. declaring a varible whcich the insual value let sum=0;
  ? 3. using the for loope to itrate the 
  ? 4. update the sum variable 
  ? 5 display the resul  

*/

console.log("Question 6 Answer");

let addNumberofArre = x => {
  let sum = 0;
  for (i = 0; i < x.length; i++) {
    sum += x[i];
  }

  console.log(sum);
};
const arr = [5, 6, 99, 8, 76, 4, 68, 44];
addNumberofArre(arr);

//! Question 7
/*
todo Write a function that takes an array of all numbers as a parameter, subtracts the total sum of all odd numbers of the array from the total sum of all even numbers and logs the result in the console.
 ? Test case: If you give these array, [5, 6, 99, 8, 76, 4, 68, 44], to the function, output should be: 102
     !Sum of odd numbers: 5 + 99 = 104
     ! ■ Sum of even numbers: 6 + 8 + 76 + 4 + 68 + 44 = 206
     ! ■ Difference between total even and total odd numbers: 206 - 104 = 102
! =================++++++++++++++++++===============+++++++++++++=++++++=========
? 1. define a function name is even_odsSub and thaking an argument              * 
?   2. declaring varible even , odd and totalsubtract then insalizing with 0    *
 ?   3. using for loop to itrate the  value                                     *
 ?    4. cheack the condion if first number is true even+= first number         *
 !        if not                                                                *
    ?      odd+= first number                                                   * 
    ?   then subtract even with odd and assign to totalsubtract                 *
    ? finaly displat totalsubtract                                              *
!*******************************************************************************                                                   

*/

console.log("Question 7 Answer");

const even_oddSub = x => {
  let even = 0;
  let odd = 0;
  for (i = 0; i < x.length; i++) {
    x[i] % 2 == 0 ? (even += x[i]) : (odd += x[i]);
  }
  let totalsubtract = even - odd;
  console.log(totalsubtract);
};
const evod = [5, 6, 99, 8, 76, 4, 68, 44];
even_oddSub(evod);

//! Question 8
/*
 ? Write a function that takes an array as a parameter and logs in the console the elements that have even indexes only. Notice: this question is not asking you to log elements with even value, but elements that are located on even indexes)
 todo: Test case 1: If you give this array to the function [5, 6, 99, 8, 76, 4, 68, 44], toutput should be:
                             !   5
                             !   99
                             !   76
                             !   68                               

 */

console.log("Question 8 Answer");

const evenOut = x => {
  for (i = 0; i < x.length; i += 2) {
    console.log(x[i]);
  }
};
const num1 = [5, 6, 99, 8, 76, 4, 68, 44];
evenOut(num1);
let num2 = [11, "Sam", 3, 7, "car"];
evenOut(num2);



//! Question 9
/*  
  ? Write a function that takes the sampleArray as a parameter, removes the last element from the array, adds a new value of "32" to the array .and prints the new array on the console. Hint: use an array method
    
  */
console.log("Question 9 Answer");
const sampleArre = x => {
  x.pop(); //Removing the last element
  x.push(32); // Add new value

  console.log(x);
};
let sampleArray = [5, 6, 99, 8, 76, 4, 68, 44];
sampleArre(sampleArray);

//!Question 10
/* 
     ? Write a function that takes the sampleArray as an argument, sorts the array in ascending order and prints the sorted array on the console  Use the sort method. Make sure you understand just using the sort() method alphabetically. You should use this sorting syntax - sort(function(a, b){return a-b});
     
     
     */

console.log("Question 10 Answer");

const sorting = x => {
  x.sort((a, b) => a - b); //Sort the array in ascending order
  console.log(x);
};
const rray = [5, 6, 99, 8, 76, 4, 68, 44];
sorting(rray);


// function sortingNumbers(x) {
//   let num = x;
//   let cheking = 1;
 //    while(cheking){
//   cheking = 0;
//   for (let i = 0; i <= num.lenght - 1; i++) {
//     console.log(num[i]);
//     if (x[i] > x[i + 1]) {
//       cheking = 1;
//       var temp = x[i];
//       x[i] = x[i + 1];
//       x[i + 1] = temp;
//       console.log(x[i]);
//     }
//   }}

//   return x;
// }
// let as = [8, 6, 8, 1, 3, 90];
// let result = sortingNumbers(as);
// console.log(result);

/*
 todo: /*!Questions on JavaScript objects
  todo     *****************************/

let evangadiClass = {
  lengthOfCourse: "1 Month",
  website: "https://www.evangadi.com/",
  isChallenging: false,
  topicsCovered: ["HTML", "CSS", "Media Query", "JavaScript"],
  students: [
    {
      name: "Abebe",
      age: 34,
      sex: "M",
    },
    {
      name: "Kebede",
      age: 44,
      sex: "M",
    },
    {
      name: "Almaz",
      age: 27,
      sex: "F",
    },
    {
      name: "Challa",
      age: 22,
      sex: "M",
    },
    {
      name: "Chaltu",
      age: 19,
      sex: "F",
    },
  ],
};

//!Question 11
/*
  todo:  Change the lengthOfCourse property of the object to "5 Month" and print the new object on the console
  !  Use the dot notation "." to call the property you want to change
  */
console.log(
  `Question 11 Answer:- ${(evangadiClass.lengthOfCourse = "5 Month")}`
);

//!Question 12

console.log(`Question 12 :- ${evangadiClass.topicsCovered.push("Bootstrap")}`);

//!Question 13
/*
? Write a function that takes the "evangadiClass" object as an argument and calculates the average age of the class. Print the result on the console


*/

console.log("Question 13 Answer");

let claculatAverage=(evangadiClass)=> {
  const student = evangadiClass.students;
  const totalAge = student.reduce((sum, students) => sum + students.age, 0);
  const averageAge = totalAge / student.length;
  console.log(`The average age of the class is ${averageAge.toFixed(2)}`);
}
claculatAverage(evangadiClass);

//!Question 14
/*
 ? Write a function that takes the "evangadiClass" object as an argument and calculates the percentage of male students in the class. Print the result on the console

*/

console.log("Question 14:- ");
function calculateMalePercentage(evangadiClass) {
  // Extract the students array
  const students = evangadiClass.students;

  // Calculate the total number of students
  const totalStudents = students.length;

  // Calculate the number of male students
  const maleStudents = students.filter((student) => student.sex === "M").length;

  // Calculate the percentage of male students
  const malePercentage = (maleStudents / totalStudents) * 100;

  // Print the result to the console
  console.log(
    `The percentage of male students is ${malePercentage.toFixed(2)}%`
  );
}
calculateMalePercentage(evangadiClass);

//!Question 15

/*
? Write a function that takes 2 parameters: a low and high number. Your goal is to print allnumbers (on the console) between low and high, and for each of these numbers print whether or not the number is divisible by 3. If the number is divisible by 3, print the word"div3" directly after the number.
*/
const printNumbersWithDiv3 = (low, high) => {
  for (let i = low; i <= high; i++) {
    i % 3 === 0 ? console.log(`${i} div3`) : console.log(i);
  }
};
printNumbersWithDiv3(1, 10);

//!Question 16
/*
todo: Write a function that prints in the console the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz” and for numbers which are multiples of both three and five print "FizzBuzz".

*/

console.log("Question 16 Answer");
const printNumbersWithDiv3andDiv5 = (low, high) => {
  for (let i = low; i <= high; i++) {
    i % 3 === 0 && i % 5 === 0 //check the number are multiples of 5 & 3
      ? console.log(`FizzBuzz`)
      : i % 5 === 0 //check the number is mulitiple of 5
      ? console.log(`Buzz`)
      : i % 3 === 0 // check the number is mulitiple of 3
      ? console.log(`Fizz`)
      : console.log(i); // is not a multiple of 3 & 5 print the number!
  }
};
printNumbersWithDiv3andDiv5(1, 100);

//!Question 17

/*
todo: An Evens number is an integer whose digits are all even. For example 2426 is an Evens number but 3224 is not. Write a function named isEvens that prints on the console 1 if its integer argument is an Evens number. The function prints 0 otherwise.

*/
console.log("Question 17:-");

function isEvens(number) {
  // Convert the number to a string to iterate through its digits
  const digits = number.toString();

  // Check if all digits are even
  for (let digit of digits) {
    if (parseInt(digit) % 2 !== 0) {
      console.log(0);
      return;
    }
  }

  // If all digits are even, print 1
  console.log(1);
}

// Example usage:
isEvens(2426); // Should print 1
isEvens(3224); // Should print 0

const iseven=x =>{
  let all = x.toString();
  for(let i=0; i<=all.length; i++){
   if( parseInt(all[i] % 2 !==0)){
     return 0;   
  }
  }
  return 1;
}          
 console.log(`Question 17:-  ${iseven(3456)}`);                