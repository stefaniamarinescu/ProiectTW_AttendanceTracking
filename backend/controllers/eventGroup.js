const eventGroupsDB = require("../models").eventGroups;

const controller = {
  addEventGroup: async (req, res) => {
    try {
      const name = req.body.name;

      const addEventGroup = await eventGroupsDB.create({
        name,
      });
      res.status(201).send(addEventGroup);
    } catch (error) {
      console.error(error);
      return res.status(500).send({
        message: "Server error to addEventGroup!",
      });
    }
  },
  getEventGroup: async (req, res) => {
    try {
      const getEventGroups = await eventGroupsDB.findAll();
      res.status(200).send(getEventGroups);
    } catch (error) {
      console.error(error);
      return res.status(500).send({
        message: "Server error to getEventGroup!",
      });
    }
  },
  deleteEventGroup: async (req, res) => {
    const id = req.params.id;
    try {
      const eventGroup = await eventGroupsDB.findByPk(id);

      if (!eventGroup) {
        return res.status(404).send({ message: "EventGroup doesn't exist!" });
      }

      await eventGroup.destroy();
      return res
        .status(200)
        .send({ message: "EventGroup was successfully deleted!" });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .send({ message: "Server error to deleteEventGroup!" });
    }
  },
};

module.exports = controller;
