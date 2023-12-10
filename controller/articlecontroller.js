const Article = require("../model/Article");
const Comment = require("../model/Comment");
const mongoose = require('mongoose');
async function add(req, res, next) {
  try {
    const article = new Article(req.body);
    await article.save();
    res.status(200).send("article added successfully");
  } catch (err) {
    console.error(err);
  }
}
async function addArticle(data) {
  try {
    const article = new Article({
      titre: data.titre,
      auteur: data.auteur,
      source: data.source,
      contenu:data.contenu,
      date: data.date
    });
    await article.save();
    //res.status(200).send("donneur added successfully");
  } catch (err) {
    console.error(err);
  }
}


async function show(req, res, next) {
  try {
    const data = await Article.find();
    //res.json(data);
    return data;
  } catch (err) {
    console.log(err);
  }
}
async function update(req, res, next) {
  try {
    const data = await Article.findByIdAndUpdate(req.params.id, req.body);
    res.send("updated");
  } catch (err) {}
}
async function deleteArticle(req, res, next) {
    try{
     const data = await Article.findByIdAndDelete(req.params.id,req.body);
     res.send("removed");
    }
    catch(err){}
   }
   async function findArticle(req, res, next) {
    try{
     const data = await Article.findById(req.params.id,req.body);
     res.send(data);
    }
    catch(err){}
   }
   async function findArticleName(req, res, next) {
    try{
      
     const data = await Article.findOne(req.params);
     res.send(data);
    }
    catch(err){
  
    }
   }
   async function AfficherTous(req, res, next) {
    try{
      
      const data1 = await Donneur.findById(req.params.id1,req.body);
      const data2 = await Donnation.findById(req.params.id2,req.body);
      res.send('le'+data1+ 'effectue'+data2);
    }
    catch(err){
  
    }
   }
module.exports = { show, add, update,deleteArticle,
  findArticle,findArticleName,addArticle,AfficherTous};
