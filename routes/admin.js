const express = require("express");
const router = express.Router();
const admincontroller = require("../controller/admincontroller");
const validate=require("../middle/validate");
router.post('/add', validate,admincontroller.add);
router.get('/showall',admincontroller.show);
router.put('/update/:id',validate,admincontroller.update);
router.delete('/delete/:id',admincontroller.deleteAdmin);
router.get('/find/:id',admincontroller.findAdmin);
router.get('/findName/:name',admincontroller.findAdminName);

module.exports = router;
