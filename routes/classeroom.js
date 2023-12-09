const express = require("express");
const router = express.Router();
const classeroomcontroller = require("../controller/classeroomcontroller");
const validate=require("../middle/validate");
router.post('/add', validate,classeroomcontroller.add);
router.get('/showall',classeroomcontroller.show);
router.put('/update/:id',validate,classeroomcontroller.update);
router.delete('/delete/:id',classeroomcontroller.deleteClasseroom);
router.get('/find/:id',classeroomcontroller.findClasseroom);
router.get('/findName/:name',classeroomcontroller.findClasseroomName);
router.get('/chat',(req,res,next)=>{
    res.render("chat")
})
module.exports = router;
