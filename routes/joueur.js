const express = require("express");
const router = express.Router();
const joueurcontroller = require("../controller/joueurcontroller");
//const validate=require("../middle/validate");
router.post('/add', joueurcontroller.add);
router.get('/showall',joueurcontroller.show);
router.put('/update/:id',joueurcontroller.update);
router.delete('/delete/:id',joueurcontroller.deleteJoueur);
router.get('/find/:id',joueurcontroller.findJoueur);
router.get('/findName/:name',joueurcontroller.findJoueur);
router.get('/chat',(req,res,next)=>{
    res.render("chat")
})
module.exports = router;
