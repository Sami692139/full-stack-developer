//validation chacking functions

function validationCheckisArre(x){
  if (
    !Array.isArray(x) || x.some(isNaN) || typeof (x[0] || x[1]) !== "number"
  ){
    return true;
  }
};

function validationForoneargument(x) {
  if (isNaN(x) || typeof x !== "number") {
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

/*
todo: Question 1 Given an array of numbers, write a function that prints in the console another array
? which contains all the even numbers in the original array, which also have even indexes only.
! Test 1: getOnlyEvens([1, 2, 3, 6, 4, 8]) prints [ 4]
! Test 2: getOnlyEvens([0, 1, 2, 3, 4]) prints [0, 2, 4]
  
*/

const printEvennumbers = (x) => {
  if(validationCheckisArre(x)==true){
    return "pleas enter the correct format "
  }
  let list = []; //creating empity arrey
  for (let i = 0; i < x.length; i++) {
    if (x[i] % 2 === 0 && i % 2 === 0) {
      list.push(x[i]); // adding a value to the empity arrya one by one
    }
  }
  return list;
};
console.log(`question 1: - ${printEvennumbers([1,2, 3, 6, 4, 8])}`);
console.log(printEvennumbers([0, 1, 2, 3, 4]));

// // ! Other methode

// const otherEvenNumber= arr =>{

//  if(!Array.isArray(arr)){
//   return "Please Enter Arrey Only!!"
//  }
//  let evenList = arr.filter((x,y)=> x%2===0 && y%2===0) ;
//  return evenList;

// }
// console.log(`Other Methodes, ${otherEvenNumber([0, 1, 2, 3, 4])}`);

/*
! Question 2
todo Create a function that takes a two-digit number as an parameter and prints "Ok" in  the console if the given string is greater than its reversed digit version. If not, the function will print "Not ok"
! Test 1: reverseCompare(72) prints "ok" because 72 > 27
!  reverseCompare(23) prints "Not ok", because 23 is not greater than 32



*/

const reversNumber = (x) => {
  let flage=false;
  console.log(x);
  if(x<0){
     flage=true;
  }
  console.log(flage);
  let w= Math.abs(x);
  console.log(w);
  let arr = w.toString(); //changing the given parameter to string

  for (let i = 0; i < arr.length; i++) {
    if(flage){
      console.log(flage);
      arr[i]*= -1;
      arr[i+1]*= -1;
      console.log(arr[i]);
      console.log(arr[i+1]);
    }
    if ((arr[i]) > (arr[i + 1])) {
      
        //converting the giving arry to intiger by using parseInt
      return " Not Ok"; //if the condition is true it return "ok"
    }
    return "ok"; //if the condition is not true it return "not ok"
  }
};
console.log(reversNumber(-65)); //calling the function

//! Other Method

let reversingNumbers = (x) => {
  //creating the function
  if(validationForoneargument(x)==true){
    return "Pleas provide only Numbers!";
  }
  let num1 = x; //assigning the given paramerte to the varible
  let result = num1.toString().split("").reverse().join("");
  if (num1 < result) {
    return " ok";
  }
  return "Not ok";
};

let numberoflist = reversingNumbers(923453467);
console.log(numberoflist);

/*
!  Question 3

 todo   Write a function that takes a positive   integer and returns the factorial of the number.
    Notes: The factorial of 0 is 1. Ex: factorial seven is : 1 × 2 × 3 × 4 × 5 × 6 × 7. The
factorial of any positive integer x is x * (x - 1) * (x - 2) * . . . . . . * 1 (ex: factorial of 4 is
4 * 3 * 2 * 1 = 24)
! Test 1: returnFactorial(5) outputs 120
! Test 2: returnFactorial(6) outputs 720
! Test 3: returnFactorial(0) outputs 1

*/
const factorialNumber = (x) => {
  if(validationForoneargument(x)==true){
    return "Pleas provide only Numbers!";
  }
  let r = 1;
  if (x === 0) {
    return 1;
  } else {
    for (let i = 1; i <= x; i++) {
      r *= i;
    }
  }
  return r;
};
console.log(factorialNumber(1));


//! Question 4(Meera array)
/*
  A Meera array is defined to be an array containing only numbers as its elements and for
  all n values in the array, the value n*2 is not in the array. So [3, 5, -2] is a Meera array
 because 3*2, 5*2 or 2*2 are not in the array.     But [8, 3, 4] is not a Meera array because
2*4=8 and both 4 and 8 are elements found in the array. Write a function that takes an
array of numbered elements and prints “I am a Meera array” in the console if its array
does NOT contain n and also n*2 as value. Otherwise, the function prints “I am NOT a
Meera array”
! Test 1: checkMeera([10, 4, 0, 5]) outputs “I am NOT a Meera array” because 5 *
2 is 10
! Test 2: checkMeera([7, 4, 9]) outputs “I am a Meera array”
! Test 1: checkMeera([1, -6, 4, -3]) outputs “I am NOT a Meera array” because -3 *2 is -6

 */
console.log("Q 4");
function isMeeraArray(arr) {
   
  for (let i = 0; i < arr.length; i++) {
    if (arr.includes(arr[i] * 2)) {
      console.log("I am NOT a Meera array");
      return;
    }
  }
  console.log("I am a Meera array");
}

// Example usage:
isMeeraArray([3, 5, -2]); // I am a Meera array
isMeeraArray([8, 3, 4]); // I am NOT a Meera array

//! Question 5 (Dual array)
/*
Define a Dual array to be an array where every value occurs exactly twice. For example,
{1, 2, 1, 3, 3, 2} is a dual array.The following arrays are not Dual arrays {2, 5, 2, 5, 5} (5
occurs three times instead of two times) {3, 1, 1, 2, 2} (3 occurs once instead of two
times) Write a function named isDual that returns 1 if its array argument is a Dual array.
Otherwise it returns 0.
*/
const isDual = (arr) => {
  // Create an object to count occurrences of each element
  let count = {};

  // Iterate through the array and count occurrences

  for (let i = 0; i < arr.length; i++) {
    if (count[arr[i]]) {
      count[arr[i]]++;
    } else {
      count[arr[i]] = 1;
    }
  }
  // Check if every element occurs exactly twice
  for (let key in count) {
    if (count[key] !== 2) {
      return 0; // Not a Dual array
    }
  }

  return 1; // Is a Dual array
};

// Example usage:
console.log(isDual([1, 2, 1, 3, 3, 2])); // Output: 1
console.log(isDual([2, 5, 2, 5, 5])); // Output: 0

//! Question 6

/*
todo Write a function that takes the number of seconds and returns the digital format clock time as a string. Time should be counted from 00:00:00.
? Examples: digitalClock(5025) as "01:23:45" 5025 seconds is 1 hour, 23 mins, 45
secs.
? digitalClock(61201) as "17:00:01" No AM/PM. 24h format.
? digitalClock(87000) as "00:10:00" It's 00:10 next day.
*/

function digitalClock(seconds) {
  // Calculate hours, minutes, and remaining seconds
  let hours = Math.floor(seconds / 3600) % 24; //Changing  to houre
  let minutes = Math.floor((seconds % 3600) / 60); // changing  to minutes
  let remainingSeconds = seconds % 60; // Changing to second

  // Format hours, minutes, and seconds to be two digits
  let formattedHours = String(hours).padStart(2, "0");
  let formattedMinutes = String(minutes).padStart(2, "0");
  let formattedSeconds = String(remainingSeconds).padStart(2, "0");

  // Return the formatted time
  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

// Example usage:
console.log(digitalClock(5025)); // Output: "01:23:45"
console.log(digitalClock(61201)); // Output: "17:00:01"
console.log(digitalClock(87000)); // Output: "00:10:00"
