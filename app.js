if(process.env.NODE_ENV != "production"){
    require("dotenv").config()
}
const express=require("express");
const app=express();
const path=require("path")
const ejsMate=require("ejs-mate");
const mongoose=require("mongoose");
const Recipe=require("./models/recipe.js") 
const methodOverride = require('method-override')
const Review=require("./models/review.js")
const homeRouter=require("./routes/home.js")
const reviewRouter=require("./routes/review.js")
const userRouter=require("./routes/user.js")
const session=require("express-session")
const MongoStore = require('connect-mongo');
const passport=require("passport")
const LocalStrategy=require("passport-local")
const User=require("./models/user.js")
const flash = require("connect-flash");

app.use(express.static('public'))
app.use(methodOverride('_method'))
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,"/public")))
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views")) 
app.engine("ejs",ejsMate)

//mongoURL="mongodb://127.0.0.1:27017/recipe";
const dbUrl=process.env.ATLASDB_URL;
main().then(()=>{
    console.log("connected to DB")
}).catch((err)=>{
    console.log(err)
})

async function main(){
    await mongoose.connect(dbUrl)
}

const store=MongoStore.create({
    mongoUrl:dbUrl,
    crypto:{
        secret:process.env.SECRET,
    },
    touchAfter:24*3600,
})
store.on("error",()=>{
    console.log("error in session store")
})
const sessionOptions = {
    store,
    secret: process.env.SECRET, 
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000, 
        maxAge: 7 * 24 * 60 * 60 * 1000,    
        httpOnly:true,           
    },
};

app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.currUser=req.user;
  next();
});


app.use("/home",homeRouter)
app.use("/home/:id/reviews",reviewRouter)
app.use("/",userRouter)

//reviews
// Error handler middleware
app.use((err, req, res, next) => {
    console.error(err.stack); // logs to console
    res.status(err.status || 500).render("./pages/error.ejs", { err });
});

app.listen(8080,()=>{
    console.log("listening")
})