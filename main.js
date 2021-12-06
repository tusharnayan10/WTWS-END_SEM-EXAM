require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.get("/",function(req,res){
    res.render("registration");
});

app.get("/registration",function(req,res){
    res.render("registration");
});

app.get("/login",function(req,res){
    res.render("login");
});