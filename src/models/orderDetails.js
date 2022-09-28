const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class orderDetails extends Model {}

orderDetails.init(
  {
    orderId: {
      type: DataTypes.INTEGER,
    },
    dishId: {
      type: DataTypes.INTEGER,
    },
    quantity: {
      type: DataTypes.INTEGER,
    },
    references: {
        model: 'orders',
        key: 'orderId',
      }
    },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'orderDetails',
  }
);

module.exports = orderDetails;
