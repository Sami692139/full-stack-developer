//Question 1:
console.log("Question 1: All Answers!!" );
//A. 24 > 3

console.log("Q A. :- ",24 > 3);// out put is True

//B. 2 < "12"
console.log("Q B. :- ", 2 < "12");// out put is True B/c in javascrip when number compare to string the interpreter thinks we try to comput number with number .

//C. 0 == 2

console.log("Q C. :- ", 0 == 2);//out pute is false b/c 0 is not equal to 2

//D. 2.0 === 2

console.log("Q D. :- ", 2.0 == 2);// out put is True b/c there number 2 compare with number 2 on javascript there is no duble or floatiing data type all are number.


//E. 2.0 == "2"

console.log("Q E. :- ", 2.0 == "2");// out put is True b/c Interpreter thinks in this time we try to compute number with number!!


 //F. 2 < "John"

 console.log("Q E. :- ", 2  < "john");// out put is False b/c now  interpreter thinks we compare string with number.

//G. 2 > "John"

console.log("Q G. :- ", 2 > "john");// out put is False b/c now  interpreter thinks we compare string with number

//H. "2" < "2".

console.log("Q H. :- ", "2" < "2");//out put is False b/c 2 in not greator than with 2

//I. "2" > "12"

console.log("Q I. :- ", "2" > "12");// out put is True b/c on this time it compare 2 with 1 so 2 is greator than 1.
 
//J. 1 == 1 || 3 == 2 || 3 == 7

console.log("Q J. :- ", 1 == 1 || 3 == 2 || 3 == 7);// out put is True on OR conjaction if there is one of the condition is true the result will be true.

//K. 1 == 1 && 2 == 2 && 3 == 7

console.log("Q K. :- ", 1 == 1 && 2 == 2 && 3 == 7);// out put is False. On AND conjaction there must be all condition must be true. 

// L. 1 == 1 || 2 == 2 && 3 == 7

console.log("Q L. :- ", 1 == 1 || (2 == 2 && 3 == 7));// out put is True b/c on this time the condtion chaking startes from && conjaction then gose to OR Conjaction.

// M . (1 == true && 0 > true) || "31" > "9" || 10 > 5 || !("2" == "two" || 1 == "1");

console.log("Q M. :- ",1 == true && 0 > true || "31" > "9" || 10 > 5 || !("2" == "two" || 1 == "1"));//out put is True .

//Question 2:

console.log("Question 2: All Answers!!");

// 1. Which expression returns true?
// A/ ‘1’ === 1 // on this case: its chaking data and type also so they are equal on data but not type.

// B/ 1 == 1// 1 is equal to 1 So. its True
// C/ 1 === 1// 1 is equal to 1 by data and type aslo , So its True
// D/ B and C from above// my answer is this <----

// 2. What is the value of x in this statement?
// let x = (1 == true);
// A/ 1
// B/ true// my answer is this b/c true is 1 so 1==1 is true
// C/ false
// D/ undefined

// 3. What is the value of y from the following statements?
// let x = 10;
// let y = (x > 5) && (x < 15)// on this time x is 10 so 10 is 5 and 10 is  less 15; bothe conditon is true
// A/ 10
// B/ 5
// C/ 15
// D/ true my answer

// 4. What is the value of x from the following statements?
// let x = 5;
// x += 3;   this minis x= x+3 so x is 5 +3=8;
// A/ 3
// B/ 8// my answer
// C/ 15
// D/ 5

// 5. What is the value of y from the following statements?
let x = 10;
let y = x++; // x is post increment so the y result is 10
// A/ 10 my answer
// B/ 11
// C/ 12
// D/ 13
console.log("Q 5. :-  ",y);


// 6. What is the value of y in the following statements?
{
let x = 1;
let y = (x !== 2);// ! nagation chanhe the result to true
// A/ 1
// B/ 2
// C/ false
// D/ true answer

console.log("Q. 6:- ",y);}

// 7. What is the output of (+”2”+2)

console.log("Q. 7:- ", +"2" + 2);// out put is 4 b/c + (unery operator)befor string change to numeric value so 2+2= 4.

// 8. What is the output of (7 % 3)

console.log("Q. 8:- ", 7 % 3);// out put is 1 b/c its % modules operator return the remander valur

// Question 3:

{
 let a=1,b=2,c;
c= a+b;
console.log("Q .3 :- ", c);

}
// Question 4:

{
    let f_name="S@mi";
    let l_name= "Tassew";
    let fulName = `fulName : ${f_name} ${l_name}`; // using backtick

    console.log("Q .4 :- ", fulName);

}

