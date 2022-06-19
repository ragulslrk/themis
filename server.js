//final t2t
const  express=require("express")
const mongoose=require("mongoose")  
const bcrypt=require("bcrypt")
const passport=require("passport")
const localstrategy=require("passport-local").Strategy
const  session=require("express-session")
const MongoStore=require("connect-mongo")
const  flash=require("connect-flash")
const app=express()
const crypto = require('crypto');
require("dotenv").config()
app.use(express.urlencoded({extended:true}));
app.use(flash())
app.set("view engine","ejs")
app.use(express.static('views'))
app.use(express.static('assets'))


//mongo db connection 
const db_uri="mongodb+srv://ragulNolan:%23Ragul4444@cluster0.6qh9t.mongodb.net/themis?retryWrites=true&w=majority"

mongoose.connect( db_uri,{useNewUrlParser: true,useUnifiedTopology: true})
    .then((res)=>{
        app.listen(process.env.port,()=>{
        console.log("listening themis")
    })
  
    console.log("success themis")})
    .catch((err)=>{console.log(err)})


app.get('/',(req,res)=>{
    res.send("this is  home  page")
})
    //route  to signup  
    const signup=require("./controller/signup")
    app.use(signup)

  //route  to signup  
  const login=require("./controller/login")
  app.use(login)

//route  to faqs
const faq_js=require("./controller/faqs")
app.use(faq_js)