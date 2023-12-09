var mongo=require("mongoose");
const Schema=mongo.Schema;
const Donnation= new Schema(
    {
        type: {
            type: String,
            enum: ['don_monetaire', 'don_organe'],
            required: true
        },
        nom:String,
        montant:Number,  
        date:Date,  
    }
)

module.exports=mongo.model("donnation",Donnation)