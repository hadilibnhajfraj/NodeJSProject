const yup= require("yup");
const Operation =require("../model/operation");
const validateSuivie=async(req,res,next)=>{
    try{
     const Schema=yup.object().shape(
        {
            Operation: yup.string().test('isValidOperation', 'Opération invalide', async function (value) {
                // Vérifier si l'opération existe en consultant la base de données
                if (!value) {
                    return this.createError({ message: 'Le champ Operation est requis.' });
                }

                const operationExists = await Operation.exists({ _id: value });
                if (!operationExists) {
                    return this.createError({ message: 'L\'opération spécifiée n\'existe pas.' });
                }

                return true; // La validation réussit
            }).required('Le champ Operation est requis.'),
            Patient: yup.string().required('Le champ Patient est requis.'),
            Notes: yup.string().max(1000, 'Les notes ne peuvent pas dépasser 1000 caractères.'),
        }
     )
     await Schema.validate(req.body);
     next();
    }catch (err){
    console.log(err);
    }
}

module.exports=validateSuivie;