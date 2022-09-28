const { Model, DataTypes } = require('sequelize');
<<<<<<< HEAD
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Orders extends Model {

}

Orders.init(
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
        foreignKey: true,
        autoIncrement: true,
    },
    tableId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    isCooked: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    orderDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    totalCost: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
  },
  {
    hooks: {

    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Orders',
  }
);

module.exports = Orders;
=======
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
>>>>>>> cf603d81b1e1f4a1e107583699d3289071b1513f
