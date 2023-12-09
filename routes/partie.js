const express = require("express");
const router = express.Router();
const partiecontroller = require("../controller/partiecontroller");
//const validate=require("../middle/validate");
router.post('/add', partiecontroller.add);
router.get('/showall',partiecontroller.show);
router.put('/update/:id',partiecontroller.update);
router.delete('/delete/:id',partiecontroller.deletePartie);
router.get('/find/:id',partiecontroller.findPartie);
router.get('/findName/:name',partiecontroller.findPartieName);
router.get('/chat',(req,res,next)=>{
    res.render("chat")
})
module.exports = router;
