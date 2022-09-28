const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
<<<<<<< HEAD
        len: [8],
=======
        len: [6],
>>>>>>> cf603d81b1e1f4a1e107583699d3289071b1513f
      },
    },
  },
  {
    hooks: {
<<<<<<< HEAD
      beforeCreate: async (newUserData) => {
=======
      async beforeCreate(newUserData) {
>>>>>>> cf603d81b1e1f4a1e107583699d3289071b1513f
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
<<<<<<< HEAD
    modelName: 'user',
  }
);

module.exports = User;
=======
    modelName: 'User',
  }
);

module.exports = User;
>>>>>>> cf603d81b1e1f4a1e107583699d3289071b1513f
