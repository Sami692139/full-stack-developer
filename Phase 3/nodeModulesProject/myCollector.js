const first= require("./myFirst");//importing first module
const second = require("./mySecond") ;//importing second module

first.myMultiplier(5);
second.myMultiplier(5);
const dis = first.myMultiplier(14);

const fs= require('fs');//fs:- file systume module
const text = `The value of 14 when passed through the myMultiplier function is  ${ dis}`;
fs.writeFile('results.txt',text ,(err)=>{
    if(err){
         return console.error(err, "File not found");
    }else{
        console.log("working!!");
    }
}  );

const diva = second.myMultiplier(14);

const text2 =  `\nThe value of 14 when passed through the myMultiplier function is ${ diva}`;

fs.appendFile('results.txt', text2,(err)=>{
    if(err)  throw err;        
    })

    