const mongoose=require('mongoose')

const cartSchema=new mongoose.Schema({

    source:{
        type:Object,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    url:{
        type:String,
        required:true
    },
    urlToImage:{
        type:String,
        required:true
    },
    publishedAt:{
       type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    }


})

module.exports=mongoose.model("Carts",cartSchema);