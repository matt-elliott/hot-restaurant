//Dependencies
var express = require("express");
var path = require("path");
//set up the express
var app = express();
var PORT = 3000;
//set up the express to handle the parseing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//set up the variables
var data = {
	currentReservations: [],
	waitinglist: [],
};

var customerCount = 0;
//routes


