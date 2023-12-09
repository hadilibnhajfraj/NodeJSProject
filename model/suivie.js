var mongo=require("mongoose");
const Schema=mongo.Schema;
const Suivie= new Schema(
    {
        Operation : String,
        Patient :String,
        date : Date,
        Notes : String
    }
)

module.exports=mongo.model("suivie",Suivie)