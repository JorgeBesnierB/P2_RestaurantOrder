const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class orderDetails extends Model {

}

orderDetails.init(
  {
    orderId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Orders',
          key: 'id',
        },
    },
    dishId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'menu',
          key: 'id',
        },
    },
    quantity: {
        type: DataTypes.INTEGER,
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
