const express = require('express');
// import express from "express";
const app = express();
const mongoose = require('mongoose');
const Item = require('./models/items');
// import item from "./models/items.js";
// import mongoose from "mongoose";
const mongodb ='mongodb+srv://ravi:Hello1234@cluster0.xbfwm.mongodb.net/item-database?retryWrites=true&w=majority ';

mongoose.connect(mongodb,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
    console.log('connected')
    app.listen(3000);

}).catch(err=>console.log(err))

app.set("view engine", "ejs");

app.get('/create-item',(req,res)=>{

    const item =new Item({
        name:'phone',
        price:2000
    });

    item.save().then(result=>res.send(result))

})





app.get("/", (req, res) => {
  const items = [
    { name: "mobile phone", price: 10000 },
    { name: "book", price: 300 },
    { name: "computer", price: 5000 },
    { name: "monitor", price: 6000 },
  ];
  res.render("index", { items });
});
app.get("/add-item", (req, res) => {
  res.render("add-item");
});
app.use((req, res) => {
  res.render("error");
});
