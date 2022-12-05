const express =require("express");
const routes =express.Router();
const path =require('path');
const rootdir = require('../Util/path')
routes.get('/',(req,res,next)=>{
    // console.log("in another middleware");
    // res.sendFile(path.join(__dirname,'../','views','shop.html'))
    res.sendFile(path.join(rootdir,'views','shop.html'))
   
   
   
    })
module.exports=routes;