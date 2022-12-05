const express =require("express");
const routes =express.Router();
const path =require('path');
const rootdir = require('../Util/path')
routes.get('/contact',(req,res,next)=>{
  
    res.sendFile(path.join(rootdir,'views','contact.html'))
   
   
   
    })
    routes.post('/contact',(req,res,next)=>{
        console.log(req.body);
        
        res.redirect('/success')
       
        })
module.exports=routes;