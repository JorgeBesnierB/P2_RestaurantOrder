const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class menu extends Model {}

menu.init(
  {
    dishId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    dishName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dishPrice: {
      type: DataTypes.DECIMAL,
    },
    dishType: {
        type: DataTypes.DECIMAL,
      },
    },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'menu',
  }
);

module.exports = menu;