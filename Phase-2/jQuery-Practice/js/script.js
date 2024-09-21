//!Question 1:
//todo:The following three questions are based on the two paragraphs under the section which says, "For Question 1".
//! 1.1. Select the el

const sampleElement = $("#sample1");
//!1.2 Print the element itself on the console upon page refresh.

console.log(sampleElement);

//!1.3 Print the content of the element on the console upon page refresh. Use jQuery to select the content of the element

console.log(sampleElement.text());
//! Question 2:
//? The following questions are based on the HTML code found under the section labeled "For question 2"
console.log($("#techCompanies"));
//! 2.1. Select the element with an ID of "techCompanies" and display it on your console

let techSelection = $("#techCompanies").children('li');
console.log(techSelection.length);
//! 2.2



//! Select all elements with a class of "red" and display them on the console

let redClass = $("#techCompanies .red");
console.log(redClass);

//! 2.4. Create a new li HTML element with a content of "Facebook" and display it on console

const newElement = $("<li></li>").text("Facebook");
console.log(newElement);
//!2.5. Give the newly created element a class of "blue" using jQuery

newElement.addClass("blue");
// other metode
// newElement.toggleClass("blue");

//! Append the newly created element next to the the "Sony" <li> element

$('li:contains("Sony")').after(newElement);

//!2.7. How many of the tech companies are labeled blue? Find the result using jQuery and display the result inside the "blueCompanies" div.

const listOfBlue = $(".blue").length;
const blueCompaniesDiv = $("#blueCompanies");
blueCompaniesDiv.text(`Number of tech companies labeled blue: ${listOfBlue}`);

/*
!Question 3:
A form with two text fields is provided under the section which says "For question 3". Write a
jQuery code which takes the values of the two fields, checks if they are number values and
calculate the sum and average of the two numbers.
3.1. Display the result on the console
3.2. Display the result underneath the form
3.3. If any of the numbers provided is not a number, display a message that says "Please
enter numerical values only" underneath the form

*/
let calculateSum = (e) => {
  e.preventDefault();

  const num1 = $('input[name="first-value"]').val();
  console.log(num1);

  const num2 = $('input[name="second-value"]').val();

  let resutDiv = $("#sum");

  if (isNaN(num1) || isNaN(num2) || num1 == "" || num2 == "") {
    resutDiv.text("Please enter numerical values only...!");
  } else {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);
    const sum = number1 + number2;
    const ave = sum / 2;

    console.log(`The Sum is: ${sum}`);

    resutDiv
      .text(`the sum of the numbers is: ${sum}`)
      .append("<br>", `Average of the numbers is: ${ave}`);
  }
};
$("#adder").on("submit", calculateSum);

/*
!Question 4:
Create an HTML form which asks users to provide their First name, Last name and Email
address. All the fields should be labeled as required. Once the user submits, write a JavaScript
function that checks if all the fields are provided. If not, it should show an error message above
the form.
todo: If the user provides all the values, hide the form input fields, and display all the values provided by the user on the browser.



*/

let userInput = (e) => {
  e.preventDefault();

  const fname = $("#fname").val();
  //   console.log(fname);
  const lname = $("#lname").val();
  // console.log(lanme);
  const eMail = $("#email").val();

  if (fname.length === 0) { // it check the input is valide
    $("#error").text("Plese Insert First Name!!");
  } else if (lname.length === 0) {
    $("#error").text("Plese Insert Last Name!!");
  } else if (eMail.length === 0) {
    $("#error").text("Plese Insert Email Addres!!");
  } else {
    $("#fild").toggle(2000);
    $("#error").html(
      `full Name : ${fname} <br> Last Name : ${lname} <br> Eamil: ${eMail}`
    );
  }
};
$("#fild").on("submit", userInput);
