const express=require("express");
const path=require("path");
const bycript=require("bcrypt");
const collection=require("./config");
const fs =require("fs");
const { name } = require("ejs");
const users =require('./mydata');
const { log } = require("console");
const app= express();
let ab=0;
let ac=0;
let gmail=[];
let pascode=[];



app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.set('view engine', 'ejs');
app.use(express.static("public"));


app.get("/", (req, res)=>{
    res.render("login")
});

app.get("/signup",(req, res)=>{
    res.render("signup")
});
app.get("/admin",(req, res)=>{

    res.render("admin", {Udata:gmail,Upass:pascode})
});
app.get("/forgot",(req, res)=>{

    res.render("forgot");
});

app.get("/contact",(req, res)=>{

    res.render("contact");
});
app.get("/about", (req, res)=>{
    res.render("about");
});

app.get("/profile",(req, res)=>{
    res.render("profile");
});

app.post("/admin",(req, res)=>{
   
   console.log(gmail[req.body.bt]); 
   gmail.splice(req.body.bt,1);
   res.redirect("/admin");
});

app.post("/sucessLogin",(req,res)=>{
    res.redirect("/signup");
});

app.post("/login", async (req,res)=>{
    ac=req.body.username;
    ab=req.body.password;
 
        
         for(i=0;i<gmail.length;i++){
            if(gmail[i]===ac&&pascode[i]===ab){
                
                res.render("sucessLogin", {users})
            }
        
        else{
            res.render("sucessSignup", {info: "Wrong"})
         
           }
            }
/*  
            fs.appendFile("./file/save.txt","\n"+ac,(err)=>{
                if (err) throw err;
               console.log("done");
        
            });
          */
    
   /*  try{
     const check =await collection.findOne({name: req.body.username} );
     if(!check){
     res.send("user name canot find");
    }
    const ispassword =await compare(req.body.password, check.password );
    if(ispassword){
                
        res.send("you do it");

    }
}

    catch{
      
    } */
}); 
const sucsess="Sucessfull";
const fail="there is an account with this gmail";

app.post("/signup", async (req,res)=>{
    ac=req.body.username;
    ab=req.body.password;
    const check=gmail.find( function(gm){
       if(gm===ac){
        return true 
       }
       else{
        return false;
       }
    });

   if(check){
   console.log("there is an acount");
   res.render("sucessSignup",{info:fail} )
 
   }
   else{
    gmail.push(ac)
    pascode.push(ab)
    res.render("sucessSignup",{info:sucsess} )
   }

   
/*  const data={
    name: req.body.username,
    password: req.body.password
 }
 //chek if user is already sign up
 const exsistingUser =await collection.findOne({name: data.name});
 if(exsistingUser)
 {res.send ("!theris a user with this email ")}
 else{
const userdata = await collection.insertMany(data);
 console.log(userdata); 
  }*/

});











app.listen(3000, function(){
console.log("sever is starting");
});