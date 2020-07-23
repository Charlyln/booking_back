const Sequelize = require("sequelize");

const sequelizeInstance = require("../sequelize");

const Booking = sequelizeInstance.define("Booking", {
  uuid: {
    type: Sequelize.UUID,
    allowNull: false,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
  },
  startDate: Sequelize.STRING,
  endDate: Sequelize.STRING,
  accepted: Sequelize.STRING,
});

module.exports = Booking;
