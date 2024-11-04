    //!Express methode
    
    
    const path = require("path");
  
      const random= require("./webserver/randomNumber");
        
        

const express = require("express");//importing express


const app = express();// creating server

//!Q 6
// app.get('*', (req, res)=>{ // feching the file from the *
//     res.send("Request received and processed");//responding 
// });
// app.listen(5432, ()=>{
//     console.log("Server running");
// });

//!Q 7

// app.get('*', (req, res)=>{
  //  const value = random.random();

//     res.send(`The randome number is:- ${value}`);
// });
// app.listen(1234,()=>{
//     console.log("Server running 2 times");
// });

// //! Q8

app.use(express.static("webserver/static/apple-html-css-replica"));
 
app.listen(1254, ()=>{
    console.log("Q 8");
});

