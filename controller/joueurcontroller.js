const Joueur = require("../model/Joueur");

async function add(req, res, next) {
  try {
    const joueur = new Joueur(req.body);
    await joueur.save();
    res.status(200).send("Joueur added successfully");
  } catch (err) {
    console.error(err);
  }
}
async function show(req, res, next) {
  try {
    const data = await Joueur.find();
    res.json(data);
  } catch (err) {
    console.log(err);
  }
}
async function update(req, res, next) {
  try {
    const data = await Joueur.findByIdAndUpdate(req.params.id, req.body);
    res.send("updated");
  } catch (err) {}
}
async function deleteJoueur(req, res, next) {
    try{
     const data = await Joueur.findByIdAndDelete(req.params.id,req.body);
     res.send("removed");
    }
    catch(err){}
   }
   async function findJoueur(req, res, next) {
    try{
     const data = await Joueur.findById(req.params.id,req.body);
     res.send(data);
    }
    catch(err){}
   }
   async function findJoueurName(req, res, next) {
    try{
      
     const data = await Joueur.findOne(req.params);
     res.send(data);
    }
    catch(err){
  
    }
   }
module.exports = { show, add, update,deleteJoueur,findJoueur,findJoueurName };
