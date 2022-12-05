const express = require("express");
const path =require('path')
const routes = express.Router();
//  /admin/add-product - for get request
const rootdir = require('../Util/path')
routes.get('/add-product',(req,res,next)=>{
   
    // res.sendFile(path.join(__dirname,'../','views','add-product.html'))
    res.sendFile(path.join(rootdir,'views','add-product.html'))
   
    
    })
    //  /admin/add-product - for post request
    routes.post('/add-product',(req,res,next)=>{
        console.log(req.body);
        
        res.redirect('/shop')
       
        })
module.exports=routes;