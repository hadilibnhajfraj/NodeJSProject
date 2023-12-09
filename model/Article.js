var mongo=require("mongoose");
const Schema=mongo.Schema;
const Article= new Schema(
    {
        titre:String,
        auteur:String,
        source:String,
        contenu:String,
        date:Date
    }
)

module.exports=mongo.model("article",Article)