const userPresentDB = require("../models").userPresent;
const userDB = require("../models").users;
const eventDB = require("../models").event;

const controller = {
  addUserEvent: async (req, res) => {
    try {
      const { userId, eventId } = req.body;

      
      if (!userId || !eventId) {
        return res.status(400).send({ message: "Missing userId or eventId." });
      }

      
      const user = await userDB.findByPk(userId);
      if (!user) {
        return res.status(404).send({ message: "User not found." });
      }

     
      const event = await eventDB.findByPk(eventId);
      if (!event) {
        return res.status(404).send({ message: "Event not found." });
      }

      
      const addUserPresent = await userPresentDB.create({
        lastName: user.lastName,
        firstName: user.firstName,
        email: user.email,
        phone: user.phone,
        EventId: event.id,
      });

      return res.status(201).send(addUserPresent);
      
    } catch (error) {
      console.error("Error in addUserEvent:", error);
      return res.status(500).send({ message: "Server error in addUserEvent." });
    }
  },

  getUsersEvent: async (req, res) => {
    try {
      const getUserPresent = await userPresentDB.findAll();

      
      if (getUserPresent.length === 0) {
        return res.status(404).send({ message: "No user attendance records found." });
      }

      return res.status(200).send(getUserPresent);
      
    } catch (error) {
      console.error("Error in getUsersEvent:", error);
      return res.status(500).send({ message: "Server error in getUsersEvent." });
    }
  },
};

module.exports = controller;
