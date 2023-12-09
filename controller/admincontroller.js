const Admin = require("../model/Admin");

async function add(req, res, next) {
  try {
    const admin = new Admin(req.body);
    await admin.save();
    res.status(200).send("admin added successfully");
  } catch (err) {
    console.error(err);
  }
}
async function show(req, res, next) {
  try {
    const data = await Admin.find();
    res.json(data);
  } catch (err) {
    console.log(err);
  }
}
async function update(req, res, next) {
  try {
    const data = await Admin.findByIdAndUpdate(req.params.id, req.body);
    res.send("updated");
  } catch (err) {}
}
async function deleteAdmin(req, res, next) {
    try{
     const data = await Admin.findByIdAndDelete(req.params.id,req.body);
     res.send("removed");
    }
    catch(err){}
   }
   async function findAdmin(req, res, next) {
    try{
     const data = await Admin.findById(req.params.id,req.body);
     res.send(data);
    }
    catch(err){}
   }
   async function findAdminName(req, res, next) {
    try{
      
     const data = await Admin.findOne(req.params);
     res.send(data);
    }
    catch(err){
  
    }
   }
module.exports = { show, add, update,deleteAdmin,findAdmin,findAdminName };
