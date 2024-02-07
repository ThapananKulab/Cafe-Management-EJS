const express = require('express');
const app = express()
const ejs = require('ejs');

let port = process.env.PORT || 4000;

 app.set('view engine','ejs')

 app.get('/',(req,res)=>{
  res.render('home')
 })

 app.get('/about',(req,res)=>{
  res.render('about')
 })

 app.listen(port,()=>{
console.log(`App listening on port ${process.env.PORT || 4000}`)
 })

