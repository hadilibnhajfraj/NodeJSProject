var mongo=require("mongoose");
const Schema=mongo.Schema;
const Admin= new Schema(
    {
        name:String,
        email:String,
        dateNaissance:Date,
        isActivate:Boolean,
        password:String,  
    }
)

module.exports=mongo.model("admin",Admin)