const yup= require("yup");
const validate=async(req,res,next)=>{
    try{
     const Schema=yup.object().shape(
        {
            type:yup.string().required(),
        }
     )
     await Schema.validate(req.body);
     next();
    }catch (err){
    console.log(err);
    }
}



module.exports=validate;