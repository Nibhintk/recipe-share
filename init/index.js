const mongoose=require("mongoose")
const initdata=require("./data.js")
const Recipe=require("../models/recipe.js")

mongoURL="mongodb://127.0.0.1:27017/recipe";

main().then(()=>{
    console.log("connected to DB")
}).catch((err)=>{
    console.log(err)
})

async function main(){
    await mongoose.connect(mongoURL)
}

const initData=async ()=>{
    await Recipe.deleteMany({})
    await Recipe.insertMany(initdata.data)
    console.log("data initialised")
}
initData();