// const http = require('http');
// const fs = require('fs');
// const url = require('url');
// const mimeTypes = require('mime-types');
// const mimeTypeLookUp = mimeTypes.lookup;
// const myServer = http.createServer(function(req, res){

//     let parsedUrl = url.parse(req.url, true);
//     let parsedURLsPath = parsedUrl.pathname;
//     if(parsedURLsPath === "/"){
//         parsedURLsPath = "./index.html";
//     }
//     let setMimeOff = mimeTypeLookUp(parsedURLsPath);
//     let locationOff = __dirname + "/AppleProject/Project/" + parsedURLsPath;

//     fs.readFile(locationOff , function(err, data){
//         res.writeHead(200, {"conten-type": setMimeOff});
//         res.end(data);
//     });

// });
// myServer.listen(1234, function(){
//     console.log("Server Listening at port 1234");
// });

var http = require("http");
var fs = require("fs");
var url = require("url");
var mimeTypes = require("mime-types");
var mimeTypeLookUp = mimeTypes.lookup;
var myServer = http.createServer(function (req, res) {
  var parsedUrl = url.parse(req.url, true);
  var parsedURLsPath = parsedUrl.pathname;
  if (parsedURLsPath == "/") {
    parsedURLsPath = "/index.html";
  }
  var setMimeOfFileToServe = mimeTypeLookUp(parsedURLsPath);
  var locationOfFileToServe = __dirname + "/Project" + parsedURLsPath;
  fs.readFile(locationOfFileToServe, function (err, data) {
    res.writeHead(200, { "content-type": setMimeOfFileToServe });
    res.end(data);
  });
});
myServer.listen(5678, function () {
  console.log("Server listening at port 1234");
});
