const express = require("express");
const app = express ();

app.get("/",function(req,res){
  res.send("<h1>Hello World</h>");
})

app.get("/about",function(req,res){
  res.send("My name is Raj. I am the owner of this site");
})

app.get("/hobbies",function(req,res){
  res.send("<ol><li>TT</li><li>Gym</li><li>TV</li></ol>")
})
app.listen(3000, function() {
  console.log("Port 3000 is connected");
})
