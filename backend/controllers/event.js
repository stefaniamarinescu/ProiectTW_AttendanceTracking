const eventDB = require("../models").event;

const controller = {
  addEvent: async (req, res) => {
    try {
      const { name, text, isOpen, EventGroupId } = req.body;

      const addEvent = await eventDB.create({
        name,
        text,
        isOpen,
        EventGroupId,
      });
      res.status(201).send(addEvent);
    } catch (error) {
      console.error(error);
      return res.status(500).send({
        message: "Server error to addEvent!",
      });
    }
  },
  getEvent: async (req, res) => {
    try {
      const getEvent = await eventDB.findAll();
      res.status(200).send(getEvent);
    } catch (error) {
      console.error(error);
      return res.status(500).send({
        message: "Server error to getEvent!",
      });
    }
  },
  getEventById: async (req, res) => {
    try {
      const { text } = req.query;
      const findEvent = await eventDB.findOne({
        where: {
          text: text,
        },
      });
      if (findEvent == null) {
        res.status(200).send({ result: "No" });
      } else if (findEvent.isOpen == 0) {
        res.status(200).send({ result: "isClosed" });
      } else {
        res.status(200).send(findEvent);
      }
    } catch (error) {
      return res.status(500).send({ message: "Server error to getEventById!" });
    }
  },
  updateEvent: async (req, res) => {
    const id = req.params.id;
    const { isOpen } = req.body;

    try {
      const event = await eventDB.findOne({
        where: {
          id: id,
        },
      });

      if (!event) {
        return res.status(404).send({ message: "The event doesn't exist!" });
      }

      event.isOpen = isOpen;
      await event.save();

      return res.status(200).send(event);
    } catch (error) {
      console.error(error);
      return res.status(500).send({ message: "Server error to updateEvent!" });
    }
  },
  deleteEvent: async (req, res) => {
    const id = req.params.id;
    try {
      const event = await eventDB.findByPk(id);

      if (!event) {
        return res.status(404).send({ message: "Event doesn't exist!" });
      }

      await event.destroy();
      return res.status(200).send(event);
    } catch (error) {
      console.error(error);
      return res.status(500).send({ message: "Server error to deleteEvent!" });
    }
  },
  toggleEventStatus: async (req, res) => {
    const id = req.params.id;

    try {
   
      const event = await eventDB.findByPk(id);
      if (!event) {
        return res.status(404).send({ message: "Event not found!" });
      }

    
      event.isOpen = !event.isOpen;
      await event.save();

      res.status(200).send({
        message: "Event status toggled successfully!",
        event,
      });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .send({ message: "Server error to toggleEventStatus!" });
    }
  },
};

module.exports = controller;
