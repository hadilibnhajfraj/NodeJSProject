const express = require("express");
const validateOperation = require("../middle/validateOperation");
const validateSuivie = require("../middle/validateSuivie");
const router = express.Router();
const operationcontroller = require("../controller/operationController");
router.post('/addoperation', validateOperation, operationcontroller.addOperation);
router.get('/showalloperation', operationcontroller.showOperation);
router.put('/updateoperation/:id', validateOperation, operationcontroller.updateOperation);
router.delete('/deleteoperation/:id', operationcontroller.deleteOperation);
router.get('/findoperation/:id', operationcontroller.findOperation);
router.post('/addsuivie', validateSuivie, operationcontroller.addSuivie);
router.get('/showallsuivie', operationcontroller.showSuivie);
router.put('/updatesuivie/:id', validateSuivie, operationcontroller.updateSuivie);
router.delete('/deletesuivie/:id', operationcontroller.deleteSuivie);
router.get('/findsuivie/:id', operationcontroller.findsuivie);
router.get("/operation", (req, res, next) => {
  res.render("operation");
});
router.get("/affiche", (req, res, next) => {
  res.render("affiche");
});
router.get("/suivie", (req, res, next) => {
  res.render("suivie");
});
router.get("/affichesuivies", (req, res, next) => {
  res.render("affichesuivies");
});
module.exports = router;
