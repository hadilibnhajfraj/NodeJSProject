const yup = require("yup");
const Donneur = require("../model/Donneur");

const validate = async (req, res, next) => {
  try {
    const Schema = yup.object().shape({
      nom: yup.string().required(),
      prenom: yup.string().required(),
      cin: yup.string().length(8).required(),
    });

    await Schema.validate(req.body);

    // Vérifier si le donneur existe déjà avec le même CIN
    const existingDonneur = await Donneur.findOne({ cin: req.body.cin });

    if (existingDonneur) {
      return res.status(400).send("Un donneur avec le même CIN existe déjà.");
    }

    next();
  } catch (err) {
    console.log(err);
    res.status(400).send("Validation failed");
  }
};

module.exports = validate;
