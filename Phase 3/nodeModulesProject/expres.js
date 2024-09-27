     const path = require("path");
  
      const random= require("./webserver/randomNumber");
         const value = random.random();

const express = require("express");

//!Q 6
const app = express();// creating server
// app.get('*', (req, res)=>{
//     res.send("Request received and processed");
// });
// app.listen(1234, ()=>{
//     console.log("Server running");
// });

//!Q 7

// app.get('*', (req, res)=>{

//     // res.send(`The randome number is:- ${value}`);
// })
// app.listen(1234,()=>{
//     console.log("Server running 2 times");
// })

//! Q8

app.get("/", (req, res) => {
  res.sendFile(
    path.join(__dirname + "/webserver/static/apple-html-css-replica/" +"about.html")
  );
});
app.listen(1234, ()=>{
    console.log("Q 8");
});

