const express = require("express");
const router = express.Router();
const eventGroupController = require("../controllers").eventGroup;

router.post("/", eventGroupController.addEventGroup);
router.get("/", eventGroupController.getEventGroup);
router.delete("/:id", eventGroupController.deleteEventGroup);

module.exports = router;
