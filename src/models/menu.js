const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class menu extends Model {}

menu.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    dishName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    dishDesc: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dishPrice: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    dishType: {
        type: DataTypes.INTEGER,
        allowNull: false,    
    },
    dishImg: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
  
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'menu',
  }
);

module.exports = menu;


