
const path=require('path');
const express =require("express");

const bodyParser=require("body-parser");
const app = express();
const admin =require("./routes/admin");
const shop =require("./routes/shop");
const contact=require("./routes/contact")
const success=require("./routes/success")
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin',admin);
app.use(shop);
app.use(contact);
app.use(success);

// app.use('/',(req,res,next)=>{
//     console.log("this always run");
//     next();
    
//     })


app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','filenotfound.html'))
    
    })

 

       


app.listen(7000);
