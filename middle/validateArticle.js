const yup= require("yup");
const validate=async(req,res,next)=>{
    try{
     const Schema=yup.object().shape(
        {
            titre:yup.string().required(),
            auteur:yup.string().required(),
            source:yup.string().required(),
            date:yup.date().required()
        }
     )
     await Schema.validate(req.body);
     next();
    }catch (err){
    console.log(err);
    }
}



module.exports=validate;