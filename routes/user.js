const express=require("express")
const router=express.Router({ mergeParams: true })
const Recipe=require("../models/recipe.js") 
const Review=require("../models/review.js")
const User=require("../models/user.js")
const passport = require("passport")
const { isLoggedIn } = require("../middleware/middleware");
router.get("/signup",(req,res)=>{
    res.render("./pages/signup")

})
router.post("/signup",async (req,res,next)=>{
    try{
        let{username,email,password }=req.body;
        const newUser= new User({username,email})
        const registeredUser=await User.register(newUser,password)
        req.logIn(registeredUser,(err)=>{
            if (err) {
            return next(err);
            }
            req.flash("success", " welcome!");
            res.redirect("/home");
        })
    
      

    }catch(e){
        console.log(e)
        next(e)
    }
    
})

router.get("/login",(req,res)=>{
    res.render("./pages/login.ejs")
})
router.post("/login", 
    passport.authenticate("local", {
        failureRedirect: "/login",
        failureFlash: true
    }),
    (req, res) => {
        
        res.redirect("/home");
    }
);

router.get("/logout", (req, res, next) => {
    req.logout(function(err) {
        if (err) {
            return next(err);
        }
        req.flash("success", "You have logged out successfully!");
        res.redirect("/home");
    });
});
module.exports=router