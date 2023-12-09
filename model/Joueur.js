var mongo=require("mongoose");
const Schema=mongo.Schema;
const Joueur= new Schema(
    {
        pseudo:String,
        sante:number,
        score:number,  
    
    }
)

module.exports=mongo.model("joueur",Joueur)