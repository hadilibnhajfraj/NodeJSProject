const express = require("express");
const router = express.Router();
const donnationcontroller = require("../controller/donnationcontroller");

router.post('/add',donnationcontroller.add);
router.get('/showall',donnationcontroller.show);
router.put('/update/:id',donnationcontroller.update);
router.delete('/delete/:id',donnationcontroller.deleteDonnation);
router.get('/find/:id',donnationcontroller.findDonnation);
router.get('/findName/:name',donnationcontroller.findDonnationName);

router.get('/donnation',(req,res,next)=>{
    res.render("donnation")
})
router.get('/tous',(req,res,next)=>{
    res.render("tousdonnations")
})

module.exports = router;
