const { Model, DataTypes } = require('sequelize');
<<<<<<< HEAD
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
=======
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
>>>>>>> cf603d81b1e1f4a1e107583699d3289071b1513f
