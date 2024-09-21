// Question 1: Change Background Color Based on Radio Button Selection

// Add a list of radio buttons to the page, each corresponding to a different color option. When a user selects one of these radio buttons, the background color of the page should change to the chosen color.

// Note: When the user selects "Night mode", the background should change to black with white text. When "Sunny mode" is selected, the background should change to light blue with black text.

// *****************************************

// Question 2 : Increase or Decrease Number When Buttons are Clicked

// Create two functions, one for each button, to increase and decrease the value displayed in the middle of the page.
// note: the number shouldn't go below 0 and above 20

// *****************************************

// Question 3 : Simple Form Validation

// Implement form validation for a login form. When the user tries to submit the form with any empty input fields, change the background color of those empty input boxes to pink. If all input fields are filled correctly and the form is submitted, display an alert box with the message "Form submitted."
//!blue

const blueElemnt = document.getElementById("themeChoice");
blueElemnt.addEventListener("change", function (event) {
  const selectedChange = event.target.value;

  if (selectedChange === "blue") {
    document.body.style.backgroundColor = "blue";
    document.body.style.color = "#000";// Changing the color to black
  } else if (selectedChange === "green") {
    document.body.style.backgroundColor = "green";
    document.body.style.color = "#000";//Changing the color to black
  } else if (selectedChange === "purple") {
    document.body.style.backgroundColor = "purple";
    document.body.style.color = "#000"; //Changing the color to black
  } else if (selectedChange === "sunny") {
    document.body.style.backgroundColor = "#f2f27a";
    document.body.style.color = "#000"; //Changing the color to black
  } else {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "#fff";
  }
});

//

const adderEvent = document.getElementById("plus");
const miniusEvent = document.getElementById("minus");
const resultValue = document.getElementById("result");

let result = 0;

adderEvent.addEventListener("click", (e) => {
  e.preventDefault();
  if (result < 20) {
    result++;
    resultValue.innerHTML = result;
  }
});
miniusEvent.addEventListener("click", (e) => {
  e.preventDefault();
  if (result > 0) {
    result--;
    resultValue.innerHTML = result;
  }
});

//!3

const formList = document.getElementById("form");

formList.addEventListener("submit", (e) => {
  e.preventDefault();
  const fName = document.getElementsByName("user-name")[0];
  const passWord = document.getElementsByName("password")[0];
  let valid = true;

  if (fName.value === "") {
    fName.style.backgroundColor = "pink";
    valid = false;
  } else {
    fName.style.backgroundColor = "";
  }
  if (passWord.value === "") {
    passWord.style.backgroundColor = "pink";
    valid = false;
  } else {
    passWord.style.backgroundColor = "";
  }
  if (valid) {
    alert("form submited");
  }
});


