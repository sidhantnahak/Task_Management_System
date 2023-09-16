const mongoose=require('mongoose')

const taskSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    user:{
        type:String,
        default:"Admin"

    },
    cart:{
        type:Array,
        default:[]
    }
})

module.exports=mongoose.model("Task",taskSchema);