const Comment = require("../model/Comment");

async function add(req, res, next) {
  try {
    const comment = new Comment(req.body);
    await comment.save();
    res.status(200).send("comment added successfully");
  } catch (err) {
    console.error(err);
  }
}
async function show(req, res, next) {
  try {
    const data = await Comment.find();
    res.json(data);
  } catch (err) {
    console.log(err);
  }
}
async function update(req, res, next) {
  try {
    const data = await Comment.findByIdAndUpdate(req.params.id, req.body);
    res.send("updated");
  } catch (err) {}
}
async function deleteComment(req, res, next) {
    try{
     const data = await Comment.findByIdAndDelete(req.params.id,req.body);
     res.send("removed");
    }
    catch(err){}
   }
   async function findComment(req, res, next) {
    try{
     const data = await Comment.findById(req.params.id,req.body);
     res.send(data);
    }
    catch(err){}
   }
   async function findCommentName(req, res, next) {
    try{
      
     const data = await Comment.findOne(req.params);
     res.send(data);
    }
    catch(err){
  
    }
   }
   async function addComment(data) {
    try {
      const comment = new Comment({
        nom_auteur: data.nom_auteur,
        contenu: data.contenu,
        date: data.date
      });
      await comment.save();
      //res.status(200).send("donneur added successfully");
    } catch (err) {
      console.error(err);
    }
  }
module.exports = { show, add, update,deleteComment,findComment,findCommentName,addComment };
