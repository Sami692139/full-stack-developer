//Questions on decision loops
console.log("Question 1 Answer");
//Question 1
 function listOf(){
    for(i=1; i<=10; i++){
        console.log(i);
    }
 }
 listOf();

 //Question 2
console.log("Question 2 Answer");
 function printNum(x){
    for (i = x; i < x+5 ; i++) {
      console.log(i + 1);
    }
 }
 printNum(7);

  //Question 3
console.log("Question 3 Answer");
  function singlPrint(num){
    let sum=0;
    for(i=1; i<=10; i++){
        sum += num+i;
    }
     console.log(sum);
  }
  singlPrint(7);

  //Question 4
console.log("Question 4 Answer");

function list(x) {
  for (i = 0; i < x.length; i++) {
    console.log(x[i]);
  }
}
const sample = [1, "Hello", 8, 44];
list(sample);

 //Question 5
console.log("Question 5 Answer");
 function countOff(x){
    let count=0;
    for(i=0; i<x.length; i++){
        count++
    }
    console.log(count);
 }
 const num=[1,"Hello",8,44]
 countOff(num);

 //Question 6
 console.log("Question 6 Answer");

 function addNumberofArre(x){
    let sum = 0;
    for (i = 0; i < x.length; i++) {
      sum += x[i];
    }

    console.log(sum);

 }
 const arr = [5, 6, 99, 8, 76, 4, 68, 44];
 addNumberofArre(arr);

  //Question 7
  console.log("Question 7 Answer");

  function even_oddSub(x){
    let even=0; 
    let odd=0;
    for(i=0; i<x.length; i++){
        if(x[i]%2==0){
            even+=x[i];
        }else{ odd+=x[i]}
    }
    let totalsubtract= even-odd;
    console.log(totalsubtract);
  }
  const evod = [5, 6, 99, 8, 76, 4, 68, 44];
  even_oddSub(evod);

    //Question 8
    console.log("Question 8 Answer");

    function evenOut(x){
        for(i=0; i<x.length; i+=2){
            console.log(x[i]);
        }

    }
    const num1 = [5, 6, 99, 8, 76, 4, 68, 44];
    evenOut(num1);

      //Question 9
      console.log("Question 9 Answer");
      function ampleArre(x){
         x.pop()//Removing the last element
         x.push(32);// Add new value 
         
         console.log(x);
      }
     let sampleArray = [5,6,99,8,76,4,68,44];
     ampleArre(sampleArray);

       //Question 10
       console.log("Question 10 Answer");

       function sorting(x){
        x.sort((a,b)=> a-b);//Sort the array in ascending order
        console.log(x);
       }
       const rray = [5,6,99,8,76,4,68,44];
       sorting(rray);
        /*Questions on JavaScript objects
          *****************************/

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

//Question 11
console.log("Question 11 Answer");

console.log((evangadiClass.lengthOfCourse = "5 Month"));

//Question 12
console.log("Question 12 Answer");
 
console.log(evangadiClass.topicsCovered.push("Bootstrap"));

//Question 13
console.log("Question 13 Answer");

function claculatAverage(evangadiClass) {
  const student = evangadiClass.students;
  const totalAge = student.reduce((sum, students) => sum + students.age, 0);
  const averageAge = totalAge / student.length;
  console.log(`The average age of the class is ${averageAge.toFixed(2)}`);
}
claculatAverage(evangadiClass);