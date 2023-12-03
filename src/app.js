const express=require("express");
const path=require("path")
const app=express();
const pug= require("pug");
// const Register=require("./models/logindetail.js")
// require("./db/conn");
const port= 5500;

const static_path=path.join(__dirname,"../templates/views")
app.use(express.urlencoded({extended:false}));
app.use(express.static(static_path));
app.set("view-engine","pug");
app.set("views",static_path);

app.get("/home",(req,res)=>{
    res.render("home.pug")
});
app.get("/",(req,res)=>{
    res.render("home.pug")
});
app.get("/about",(req,res)=>{
    res.render("about.pug")
});
app.listen(port,()=>{
    console.log(`server is running at port ${port}`)
})