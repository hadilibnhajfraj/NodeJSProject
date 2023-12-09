var mongo=require("mongoose");
const Schema=mongo.Schema;
const Ticket= new Schema(
    {
        titre :String,
        date:Date,
        prix:Number,
        quantite : Number,
        organisateur : String,
        even : String, 
        
    }
)

module.exports=mongo.model("ticket",Ticket)