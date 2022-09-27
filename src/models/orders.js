const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class orders extends Model {}

orders.init(
  {
    orderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    customerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    tableId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    isCooked: {
      type: DataTypes.BOOLEAN
    },
    isDelivered: {
      type: DataTypes.BOOLEAN
    },
    orderDate: {
      type: DataTypes.DATE
    },
    totalCost: {
      type: DataTypes.DECIMAL
    },
    references: {
        model: 'customers',
        key: 'id',
      }
    },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'orders',
  }
);

module.exports = orders;