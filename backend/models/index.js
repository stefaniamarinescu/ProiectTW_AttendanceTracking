const Sequelize = require("sequelize");
const db = require("../config/db");

const userModel = require("./user");
const eventGroupModel = require("./EventGroup");
const eventModel = require("./event");
const userPresentModel=require("./userPresent");

const users = userModel(db, Sequelize);
const eventGroups = eventGroupModel(db, Sequelize);
const event = eventModel(db, Sequelize);
const userPresent=userPresentModel(db,Sequelize);



eventGroups.hasMany(event, {
  foreignKey: "EventGroupId",
  as: "Event",
  onDelete: "CASCADE",
});

event.hasMany(userPresent,{
    foreignKey:"EventId",
    as:"UserPresent",
    onDelete:"CASCADE",
})

module.exports = {
  connection: db,
  users,
  eventGroups,
  event,
  userPresent,
};
