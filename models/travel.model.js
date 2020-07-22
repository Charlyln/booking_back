const Sequelize = require("sequelize");

const sequelizeInstance = require("../sequelize");

const Travel = sequelizeInstance.define("Travel", {
  uuid: {
    type: Sequelize.UUID,
    allowNull: false,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
  },
  title: Sequelize.STRING,
  imageUrl: Sequelize.STRING,
  localisation: Sequelize.STRING,
  content: Sequelize.STRING,
});

module.exports = Travel;
