const express = require("express");
const router = express.Router();
const commentcontroller = require("../controller/commentcontroller");
const validate=require("../middle/validatecomment");
router.post('/add', validate,commentcontroller.add);
router.get('/showall',commentcontroller.show);
router.put('/update/:id',validate,commentcontroller.update);
router.delete('/delete/:id',commentcontroller.deleteComment);
router.get('/find/:id',commentcontroller.findComment);
router.get('/findName/:name',commentcontroller.findCommentName);

router.get('/affiche',(req,res,next)=>{
    res.render("affiche")
})
router.get('/tousarticle',(req,res,next)=>{
    res.render("tousarticle")
})
module.exports = router;
