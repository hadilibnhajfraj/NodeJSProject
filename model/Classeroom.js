var mongo=require("mongoose");
const Schema=mongo.Schema;
const Classeroom= new Schema(
    {
        name:String,
        email:String,
        nbrstudent:Number,  
    }
)

module.exports=mongo.model("classeroom",Classeroom)