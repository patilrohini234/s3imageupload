const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const ImageInfo = sequelize.define("ImageInfo", {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER,
  },
  key: {
    allowNull: false,
    type: Sequelize.STRING,
  },
  originalname: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  location: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = ImageInfo;
