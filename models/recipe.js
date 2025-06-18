const mongoose=require("mongoose");
const Review = require("./review.js");
const Schema=mongoose.Schema;

const recipeSchema=new Schema({
   title: { type: String, required: true },
   description: { type: String },
   ingredients: [
    {
      name: { type: String, required: true },
      quantity: { type: String, required: true }
    }
   ],
   instructions:{
    type:[String],
    required:true
   },
   cookingTime: Number,
   servings: Number,
   category: {
    type:String,
    enum:["vegetarian","non-vegetarian"],
   },
   image:{
    type:String,
    default:"https://images.unsplash.com/photo-1528712306091-ed0763094c98?q=80&w=740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
   },
   owner: 
   { 
    type: Schema.Types.ObjectId,
     ref: "User"
     },
   reviews:[
    {
      type:Schema.Types.ObjectId,
      ref:"Review"
    }
   ]
} )

recipeSchema.post("findOneAndDelete",async(recipe)=>{
  if(recipe){
    await Review.deleteMany({_id:{$in:recipe.reviews}})
  }
})

const Recipe=mongoose.model("Recipe",recipeSchema)
module.exports=Recipe;