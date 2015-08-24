var body_Parser = require('body-parser'); //Load Modules for bodyparser
var path = require('path'); //Load 'path' the File base module 
var express = require('express'); //Load express module
var http = require('http'); //Load Http module for Http operation

var app = express(); //The Express object

// app.use(body_Parser());
app.use(body_Parser.urlencoded({ extended: true }));

var rwOperation = require('./ReadWrite.js'); //Load the File

var communicationPort = 8080; //The Communication port

//The REST API

app.get('/EmployeeList/api/employees', rwOperation.get);

app.post('/EmployeeList/api/employees', rwOperation.add);


app.listen(communicationPort);
console.log('listening....');