/*
!Question 4:
Create an HTML form which asks users to provide their First name, Last name and Email
address. All the fields should be labeled as required. Once the user submits, write a JavaScript
function that checks if all the fields are provided. If not, it should show an error message above
the form.

*/
const formList= $('#fild');


formList.on('click', (e)=>{
  e.preventDefolt();

  const fName = $('#fname');
  const lName= $('#lname');
  const eMail = $('#email');
  if(fName.value===""){
    fName.css('background-color','blue');

  }else{
    fName.css("background-color", "");
  }
  if (lName.value === "") {
    lName.css("background-color", "blue");
  } else {
    lName.css("background-color", "");
  }
  if (eMail.value === "") {
    eMail.css("background-color", "blue");
  } else {
    eMail.css("background-color", "");
  }
  
  

})