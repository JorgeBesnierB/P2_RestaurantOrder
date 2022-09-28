const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class orderDetails extends Model {

}

orderDetails.init(
  {
    orderId: {
        type: DataTypes.INTEGER,
    },
    dishId: {
        type: DataTypes.INTEGER,
        foreignKey: true,
    },
    quantity: {
        type: DataTypes.INTEGER,
        foreignKey: true,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'orderDetails',
  }
);

module.exports = orderDetails;
