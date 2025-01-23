const express = require("express");
const router = express.Router();
const userController = require("../controllers").user;

router.get("/loginUser/:username/:password", userController.loginUser);

module.exports = router;
