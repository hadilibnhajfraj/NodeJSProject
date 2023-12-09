const express = require("express");
const router = express.Router();
const donneurcontroller = require("../controller/donneurcontroller");

router.post('/add',donneurcontroller.add);
router.get('/showall',donneurcontroller.show);
router.put('/update/:id',donneurcontroller.update);
router.delete('/delete/:id',donneurcontroller.deleteDonneur);
router.get('/find/:id',donneurcontroller.findDonneur);
router.get('/findName/:name',donneurcontroller.findDonneurName);
router.get('/affichetous/:id1',donneurcontroller.AfficherTous);
router.get('/donneur',(req,res,next)=>{
    res.render("donneur")
})
router.get('/unseuldonneur',(req,res,next)=>{
  res.render("unseuldonneur")
})
router.get('/tous',(req,res,next)=>{
  res.render("tous")
})
router.get('/affiche',(req,res,next)=>{
  res.render("affiche")
})
module.exports = router;
