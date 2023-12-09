const express = require("express");
const router = express.Router();
const evenementcontroller = require("../controller/evenementController");
//const validate=require("../middle/validate");
router.post('/addevenement', evenementcontroller.addevenement);
router.get('/showallevenement',evenementcontroller.showevenement);
router.put('/updateevenement/:id',evenementcontroller.updateEvenement);
router.delete('/deleteevenement/:id',evenementcontroller.deleteEvenement);
router.get('/findevenement/:id',evenementcontroller.findEvenement);
router.get('/findevenementName/:name',evenementcontroller.findEvenementName);
router.post('/addticket', evenementcontroller.addTicket);
router.get('/showallticket',evenementcontroller.showticket);
router.put('/updateticket/:id',evenementcontroller.updateTicket);
router.delete('/deleteticket/:id',evenementcontroller.deleteTicket);
router.get('/findticket/:id',evenementcontroller.findTicket);
router.get('/findticketName/:name',evenementcontroller.findTicketName);
//router.get('/chat',(req,res,next)=>{
  //  res.render("chat")
//})

router.get("/evenement", (req, res, next) => {
    res.render("ajout");
  });

  router.get("/affiche", (req, res, next) => {
    res.render("affiche");
  });
module.exports = router;
