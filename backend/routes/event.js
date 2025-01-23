const express = require("express");
const router = express.Router();
const eventController = require("../controllers").event;

router.post("/", eventController.addEvent);
router.get("/", eventController.getEvent);
router.get("/getEventById", eventController.getEventById);
router.patch("/:id", eventController.updateEvent);
router.patch("/:id/toggle", eventController.toggleEventStatus);
router.delete("/:id", eventController.deleteEvent);

module.exports = router;
