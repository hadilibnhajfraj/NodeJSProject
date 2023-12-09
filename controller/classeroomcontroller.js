const Classeroom = require("../model/Classeroom");

async function add(req, res, next) {
  try {
    const classeroom = new Classeroom(req.body);
    await classeroom.save();
    res.status(200).send("Classeroom added successfully");
  } catch (err) {
    console.error(err);
  }
}
async function show(req, res, next) {
  try {
    const data = await Classeroom.find();
    res.json(data);
  } catch (err) {
    console.log(err);
  }
}
async function update(req, res, next) {
  try {
    const data = await Classeroom.findByIdAndUpdate(req.params.id, req.body);
    res.send("updated");
  } catch (err) {}
}
async function deleteClasseroom(req, res, next) {
    try{
     const data = await Classeroom.findByIdAndDelete(req.params.id,req.body);
     res.send("removed");
    }
    catch(err){}
   }
   async function findClasseroom(req, res, next) {
    try{
     const data = await Classeroom.findById(req.params.id,req.body);
     res.send(data);
    }
    catch(err){}
   }
   async function findClasseroomName(req, res, next) {
    try{
      
     const data = await Classeroom.findOne(req.params);
     res.send(data);
    }
    catch(err){
  
    }
   }
module.exports = { show, add, update,deleteClasseroom,findClasseroom,findClasseroomName };
