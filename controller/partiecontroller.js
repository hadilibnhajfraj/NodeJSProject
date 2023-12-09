const Partie = require("../model/Partie");

async function add(req, res, next) {
  try {
    const partie = new Partie(req.body);
    await partie.save();
    res.status(200).send("partie added successfully");
  } catch (err) {
    console.error(err);
  }
}
async function show(req, res, next) {
  try {
    const data = await Partie.find();
    res.json(data);
  } catch (err) {
    console.log(err);
  }
}
async function update(req, res, next) {
  try {
    const data = await Partie.findByIdAndUpdate(req.params.id, req.body);
    res.send("updated");
  } catch (err) {}
}
async function deletePartie(req, res, next) {
    try{
     const data = await Partie.findByIdAndDelete(req.params.id,req.body);
     res.send("removed");
    }
    catch(err){}
   }
   async function findPartie(req, res, next) {
    try{
     const data = await Partie.findById(req.params.id,req.body);
     res.send(data);
    }
    catch(err){}
   }
   async function findPartieName(req, res, next) {
    try{
      
     const data = await Partie.findOne(req.params);
     res.send(data);
    }
    catch(err){
  
    }
   }
module.exports = { show, add, update,deletePartie,findPartie,findPartieName };
