var mongo=require("mongoose");
const Schema=mongo.Schema;
const Evenement= new Schema(
    {
        nom :String,
        date:Date,
        lieu:String,
        description : String,
        organisateur : String,
        type_even : {
            type : String, 
            enum : ['Collecte de fonds' , 'Conférence', 'Campagne', 'Cérémonie' , 'Ateliers' , 'Course'],
            required : true
        }    
    }
)

module.exports=mongo.model("evenement",Evenement)