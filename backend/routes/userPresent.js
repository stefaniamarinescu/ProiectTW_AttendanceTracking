const express = require("express");
const router = express.Router();
const userPresentController = require("../controllers").userPresent;

router.post("/",userPresentController.addUserEvent);
router.get("/",userPresentController.getUsersEvent);

module.exports = router;
