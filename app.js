const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

var users = [];

app.get("/",function(req,res){
    res.render("registration");
});

app.post("/register",function(req,res){
   
    const data = ({
        name: req.body.fname,
        username: req.body.uname,
        password: req.body.password
    });
    users.push(data);
    // console.log(users);
    console.log("Registration Done");
    res.render("login");
});

app.post("/login",function(req,res){
    const Reqestedusername = req.body.uname;
    const ReqestedPassword = req.body.password;
    // console.log("Login "+ ReqestedPassword + " " + Reqestedusername);
    users.forEach(function(user){
        // console.log(user);
        if((user.username === Reqestedusername) && (user.password === ReqestedPassword)){
            console.log("Login Success");
            res.render("success");
        }else{
            console.log("Login Fail");
            res.render("failure");        
        }
    });
});

app.get("/login",function(req,res){
    res.render("login");
});

app.get("/registration",function(req,res){
    res.render("registration");
});

app.get("/success",function(req,res){
    res.render("success");
});

app.get("/failure",function(req,res){
    res.render("/failure");
});

app.listen(3000 || process.env.PORT , function() {
    console.log("Server running on port 3000");
});