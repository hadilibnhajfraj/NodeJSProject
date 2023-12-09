var mongo=require("mongoose");
const Schema=mongo.Schema;
const Operation= new Schema(
    {
        Donneur :String,
        Beneficiaire : String,
        Type_Organe : {
            type:String,
            enum : ['Cœur', 'Poumons', 'Foie', 'Reins', 'Intestin'],
            required:true
        }, 
     
        date : Date,
        Hopital : String,
        Statut : {
            type:String,
            enum : ['reussite', 'echec'],
            required:true
        },
        Notes : String
    }
)

module.exports=mongo.model("operation",Operation)