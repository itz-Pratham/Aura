const express=require("express");
const fs=require('fs');
const path=require("path")
const app=express();
const pug= require("pug");
// const Register=require("./models/logindetail.js")
// require("./db/conn");
const port= 5000;
function jsonReader(filePath, cb) {
    fs.readFile(filePath, (err, fileData) => {
      if (err) {
        return cb && cb(err);
      }
      try {
        const object = JSON.parse(fileData);
        return cb && cb(null, object);
      } catch (err) {
        return cb && cb(err);
      }
    });
}

const static_path=path.join(__dirname,"../templates/views")
const static_path1=path.join(__dirname,"../public")
app.use(express.urlencoded({extended:false}));
app.use(express.static(static_path));
app.use(express.static(static_path1));
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
app.get("/cart1",(req,res)=>{
    const object=require("../public/js/products.json");
    res.render("cart1.pug");
});
app.get("/login",(req,res)=>{
  
  res.render("login.pug");
});
app.get("/signup",(req,res)=>{
  
  res.render("signup.pug");
});
app.get("/filter",(req,res)=>{
  
  res.render("filter.pug");
});
app.get("/customize",(req,res)=>{
  
  res.render("customize.pug");
});
app.listen(port,()=>{
    console.log(`server is running at port ${port}`)
})