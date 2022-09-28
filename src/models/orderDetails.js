const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {

}

User.init(
  {
    orderId: {
        type: DataTypes.INTEGER,
    },
    orderId: {
        type: DataTypes.INTEGER,
        foreignKey: true,
    },
    orderId: {
        type: DataTypes.INTEGER,
        foreignKey: true,
    },
   
  },
  {
    hooks: {

    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
);

module.exports = User;
