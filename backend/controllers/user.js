const usersDB = require('../models').users;

const controller = {
  loginUser: async (req, res) => {
    const { username, password } = req.params;

    try {
      const user = await usersDB.findOne({
        where: { username, password },
      });

      if (!user) {
        return res.status(200).send("DoesntExist");
      }
      return res.status(200).send(user);
    } catch (error) {
      console.error(error);
      return res.status(500).send({
        message: "Server error to loginUser!",
      });
    }
  },
};

module.exports = controller;
