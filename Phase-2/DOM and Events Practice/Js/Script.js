// //! Question 1
// const selct = document.getElementById("sample1");
// console.log(selct.textContent);

// //! Question 2:
// //todo 2.1 Select the element with an ID of "techCompanies" and display it on your console. (Do not use "querySelector" for this question)

// let x = document.getElementById("techCompanies");
// console.log(x);

// //todo: 2.2 todo: Use "querySelector" to select the element with an ID of "techCompanies" and display it on your console.

// let byQuery = document.querySelector("#techCompanies");
// console.log(byQuery);

// //? 2.3  How many tech companies are listed under the ul element with an id of "techCompanies"? Use "querySelectorAll" to count the total.

// let byAllQuery = document.querySelectorAll("#techCompanies li");
// console.log(byAllQuery.length);

// //todo: 2.4 Select all elements with a class name of "red" and display them on the console. Use both "querySelectorAll" and "getElementByClass"

// let getRed = document.querySelectorAll(".red");
// //  getRed.forEach(x =>{
// //     console.log(x);

// //  });
// console.log(getRed);

// const other = document.getElementsByClassName("red");
// // Array.from(other).forEach((element) => {
// //   console.log(element);
// // });
// console.log(other);

// //! 2.5 Create a new li HTML element with a content of "Facebook" and display it on console

// // Create a new li element
// const newListItem = document.createElement("li");

// // Set the content of the new li element
// newListItem.textContent = "Facebook";
// // Display the new li element on the console
// console.log(newListItem);

// //!2.6 Give the newly created element a class of "blue" using JavaScript

// // Add a class of "blue" to the new li element
// newListItem.classList.add("blue");
// // Display the new li element on the console
// console.log(newListItem);

// //!2.7 Append the newly created element next to the the "Sony" li element

// // Find the "Sony" li element
// const sonyListItem = Array.from(document.getElementsByTagName("li")).find(
//   (li) => li.textContent === "Sony"
// );
// // console.log(sonyListItem);

// // Append the new li element next to the "Sony" li element
// if (sonyListItem) {
//   sonyListItem.insertAdjacentElement("afterend", newListItem);
// }

// // Display the new li element on the console
// console.log(newListItem);

// //!2.8 How many of the tech companies are labeled blue? Find the result using JavaScript and display the result inside the "blueCompanies" div.

// // Select all elements with the class name "blue"
// const blueElements = document.querySelectorAll(".blue");

// // Count the number of elements with the class name "blue"
// const blueCount = blueElements.length;

// // Display the result inside the "blueCompanies" div
// const blueCompaniesDiv = document.getElementById("blueCompanies");

// blueCompaniesDiv.textContent = `Number of tech companies labeled blue: ${blueCount} `;

// //console.log(blueCompaniesDiv);

// //Including on bluecompany

// const newUlElement = document.createElement("ul");

// blueElements.forEach((x) => {
//   newUlElement.appendChild(x);
// });

// blueCompaniesDiv.appendChild(newUlElement);
// console.log(blueCompaniesDiv);

// /*
// ! Question 3:
// ? Change the background color of the page to light-blue (#99ecff) when clicked on the text
// ?that says "Yes". If there is a background color set already, change it to none when clicked  on "No

// */

// // Select the elements with the text "Yes" and "No"

// const yesElement = document.getElementById("yesBackground");

// const noElement = document.getElementById("noBackground");

// // Add click event listener to the "Yes" element

// yesElement.onclick = () => {
//   document.body.style.backgroundColor = "#99ecff";
// };

// // Add click event listener to the "No" element

// noElement.onclick = () => {
//   document.body.style.backgroundColor = "";
// };

// /*
// !Question 4:
// A form with two text fields is provided under the section which says "For question 4".
// Write a JavaScript code which takes the values of the two fields, checks if they are
// number values and calculate the sum of the two numbers.
// 1. Display the result on the console
// 2. Display the result underneath the form
// 3. If any of the numbers provided is not a number, display a message that says
// "Please enter numerical values only" underneath the form

// */

// let calculateSum = (e) => {
//   e.preventDefault();

//   const num1 = document.getElementsByName("first-value")[0].value;

//   const num2 = document.getElementsByName("second-value")[0].value;

//   //convert the value to number
//   const number1 = parseFloat(num1);
//   //    console.log(number1);
//   const number2 = parseFloat(num2);
//   //    console.log(number2);
//   //Get the result div
//   let resutDiv = document.getElementById("sum");
//   console.log(resutDiv);

//   //Check if the values are numbers
//   if (isNaN(number1) || isNaN(number2)) {
//     resutDiv.textContent = "Please enter numerical values only...!";
//   } else {
//     const sum = number1 + number2;

//     console.log(`The Sum is: ${sum}`);

//     resutDiv.textContent = `The sum is: ${sum}`;
//   }
// };
// document.getElementById("adder").addEventListener("submit", calculateSum);


//
