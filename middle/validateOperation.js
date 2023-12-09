const yup= require("yup");
const validateOperation=async(req,res,next)=>{
    try{
     const Schema=yup.object().shape(
        {
            Donneur: yup.string().required('Le champ Donneur est requis.'),
            Beneficiaire: yup.string().required('Le champ Beneficiaire est requis.'),
            Type_Organe: yup.string().required(),
            date: yup.date().required('Le champ date est requis.').max(new Date(), 'La date doit être postérieure à aujourd\'hui.'),
            Hopital: yup.string().required('Le champ Hopital est requis.').max(255, 'Le nom de l\'hôpital ne peut pas dépasser 255 caractères.'),
            Statut: yup.string().required(),
            Notes: yup.string().max(255, 'Les notes ne peuvent pas dépasser 1000 caractères.'),
        }
     )
     await Schema.validate(req.body);
     next();
    }catch (err){
    console.log(err);
    }
}

module.exports=validateOperation;