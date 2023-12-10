var mongo=require("mongoose");
const Schema=mongo.Schema;
const Comment= new Schema(
    {
        nom_auteur:String,
        contenu:String,  
        date:Date,  
    }
)

module.exports=mongo.model("comment",Comment)