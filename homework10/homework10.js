/*const http = require("http");
const os = require("os");
const path = require("path");
let user = os.userInfo()

http.createServer(function(req,res){
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write("<h1>System Information</h1>");
    res.write("Current user name: " + `${user.username}`);
    res.write("<br>");
    res.write("OS type: " + os.type());
    res.write("<br>");
    res.write("System work time: " + os.uptime());
    res.write("<br>");
    res.write("Current work directory: " + path.dirname("/Users/npast/Desktop/JavaScript-For-TA-Training/homework10.js"));
    res.write("<br>");
    res.write("Server file name: " + path.basename("/Users/npast/Desktop/JavaScript-For-TA-Training/homework10.js"));
    res.end();
}).listen(5000);

console.log("Server is listening at http://localhost:5000");*/

//Task2
const http = require("http");
const personalModule = require("./personalmodule");
const currentDate = new Date();

http.createServer(function(req,res){
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write("Date of request: " + currentDate);
    res.write("<br>");
    res.write(personalModule.helloUser());
    res.end();
}).listen(8000);

console.log("Server is listening at http://localhost:8000");