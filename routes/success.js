const express =require("express");
const routes =express.Router();
const path =require('path');
const rootdir = require('../Util/path')
routes.get('/success',(req,res,next)=>{
   
    res.sendFile(path.join(rootdir,'views','success.html'))
   
   
   
    })
   
module.exports=routes;