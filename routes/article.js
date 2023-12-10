const express = require("express");
const router = express.Router();
const Article = require("../model/Article");
const articlecontroller = require("../controller/articlecontroller");
const validate=require("../middle/validateArticle");
router.post('/add', validate,articlecontroller.add);
router.get('/showall',articlecontroller.show);
router.put('/update/:id',validate,articlecontroller.update);
router.delete('/delete/:id',articlecontroller.deleteArticle);
router.get('/find/:id',articlecontroller.findArticle);
router.get('/findName/:name',articlecontroller.findArticleName);
router.get('/affichetous/:id1/:id2',articlecontroller.AfficherTous);
router.get('/article/unseularticle', async (req, res) => {
    try {
      // Récupération de l'ID de l'article depuis les paramètres de la requête
      const articleId = req.query.articleId;
  
      // Vérifiez si l'ID de l'article est fourni dans la requête
      if (!articleId) {
        return res.status(400).json({ error: 'ID de l\'article manquant dans la requête' });
      }
  
      // Récupération de l'article par son ID
      const articleData = await Article.findById(articleId);
  
      // Vérifiez si l'article a été trouvé
      if (!articleData) {
        return res.status(404).json({ error: 'Article non trouvé' });
      }
  
      // Envoi des données de l'article en tant que JSON
      res.json(articleData);
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
      res.status(500).json({ error: 'Erreur lors de la récupération des données' });
    }
  });
router.get('/article',(req,res,next)=>{
    res.render("article")
})
router.get('/simplearticle',(req,res,next)=>{
    res.render("simplearticle")
})
router.get('/blog',(req,res,next)=>{
    res.render("blog")
})
router.get('/unseularticle',(req,res,next)=>{
    res.render("unseularticle")
})

module.exports = router;
