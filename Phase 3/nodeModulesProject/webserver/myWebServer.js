
// const randnum = require("./randomNumber");
// let x= randnum.random();

// const http = require('http');

// const myServer = http.createServer(function(req , res){
//          res.writeHead(200);
//          res.end(`Request received and processed! ${x}`);
// });

// myServer.listen(1234, ()=>{
//     console.log("The server is running! ");
// });

/*
Create a new folder called "static"
a. Inside the "static" folder, save the “apple html css replica” folder by
downloading and extracting it
b. Add a sample "about.html" page inside of your “apple html css replica” folder
you just downloaded. Open your "about.html” file and add the text ‘This is
coming from my "about page ” ’
c. Modify your request listener function in a way it would serve the "about.html"
page when users request it on the browser
■ Hint: You will need to import additional node modules to display your
“about.html” page when users request it on the browser
d. Don’t forget to run your module on your terminal to keep your server running.
Now, go to your browser and type “localhost:1234” to see the ‘This is coming
from my "about page ” ’ text sent to your browser
e. Now, modify your listener function in a way that it serves any of the pages inside
of your "static" folder when requested
*/

var http = require("http");
var fs = require("fs");
var url = require("url");
var mimeTypes = require("mime-types");
var mimeTypeLookUp = mimeTypes.lookup;
var myServer = http.createServer(function (req, res) {
  var parsedUrl = url.parse(req.url, true);
  var parsedURLsPath = parsedUrl.pathname;
  if (parsedURLsPath == "/") {
    parsedURLsPath = "/about.html";
  }
  var setMimeOfFileToServe = mimeTypeLookUp(parsedURLsPath);
  var locationOfFileToServe =
    __dirname + "/static/apple-html-css-replica" + parsedURLsPath;
  fs.readFile(locationOfFileToServe, function (err, data) {
    res.writeHead(200, { "content-type": setMimeOfFileToServe });
    res.end(data);
  });
});
myServer.listen(1234, function () {
  console.log("Server listening at port 1234");
});
