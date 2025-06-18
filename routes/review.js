const express=require("express")
const router=express.Router({ mergeParams: true })
const mongoose=require("mongoose")
const Recipe=require("../models/recipe.js") 
const Review=require("../models/review.js")
const { isLoggedIn } = require("../middleware/middleware"); 
router.post("/",isLoggedIn,async(req,res)=>{
    let {id}=req.params;
    const recipe = await Recipe.findById(id);
    const newReview=new Review(req.body.review)
    newReview.author=req.user._id;
    recipe.reviews.push(newReview)

    await newReview.save()
    await recipe.save()

    res.redirect(`/home/${id}`)
    
})
//delete review

router.delete("/:reviewId",isLoggedIn,async (req,res)=>{
    let {id,reviewId}=req.params;

    await Recipe.findByIdAndUpdate(id,{$pull:{reviews:reviewId}})
    await Review.findByIdAndDelete(reviewId)

    res.redirect(`/home/${id}`)
})



module.exports=router