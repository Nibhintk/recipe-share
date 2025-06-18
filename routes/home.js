const express=require("express")
const router=express.Router()
const mongoose=require("mongoose");
const Recipe=require("../models/recipe.js") 
const Review=require("../models/review.js")
const { isLoggedIn } = require("../middleware/middleware");
//index
router.get("/", async (req, res) => {
  const query = req.query.q;
  let recipes;

  if (query) {
    const regex = new RegExp(query, "i"); 
    recipes = await Recipe.find({ title: regex });
  } else {
    recipes = await Recipe.find({});
  }

  res.render("./pages/index.ejs", { recipes, query });
});


//new
router.get("/new",isLoggedIn,(req,res)=>{
    
    res.render("./pages/new.ejs")
})
//show
router.get("/:id",async(req,res)=>{
    let {id}=req.params;
    let recipe=await Recipe.findById(id).populate({path:"reviews",populate:{path:"author"}}).populate("owner");
    res.render("./pages/show.ejs",{recipe})
})

router.post("/",isLoggedIn,async(req,res)=>{
    try{
        const newRecipe=new Recipe(req.body.recipe) 
        newRecipe.owner=req.user._id;
        await newRecipe.save()
        console.log(newRecipe)
        res.redirect("/home")
    }catch(err){
        console.error(err)
        res.status(500).send("Server Error.");
    }
})
//edit
router.get("/:id/edit",isLoggedIn,async(req,res)=>{
    let {id}=req.params
    const recipe=await Recipe.findById(id)
    res.render("./pages/edit.ejs",{recipe})
})

router.put("/:id",async(req,res)=>{
    let {id}=req.params
    let recipe=await Recipe.findByIdAndUpdate(id,{...req.body.recipe},{new:true})
    console.log(recipe)
    res.redirect(`/home/${id}`)
})

//delete
router.delete("/:id",isLoggedIn,async(req,res)=>{
    let {id}=req.params;
    await Recipe.findByIdAndDelete(id)
    res.redirect("/home")
})

module.exports=router