var mongo=require("mongoose");
const Schema=mongo.Schema;
const Donneur= new Schema(
    {
        nom:String,
        prenom:String,
        cin:String,
        email:String,
        adresse:String,  
    }
)

module.exports=mongo.model("donneur",Donneur)