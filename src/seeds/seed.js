const sequelize = require("../config/connection");
const User = require("../models/User");
const menu = require("../models/menu");
// const { orderDetails } = require('../models/orderDetails');
// const { orders } = require('../models/orders');

const UserData = require("./customers.json");
const menuData = require("./menu.json");
const ordersData = require("./orders.json");
const orderDetailsData = require("./orderDetails.json");

const seedDatabase = async () => {
  // await sequelize.sync({ force: true });

  await User.bulkCreate(UserData, {
    individualHooks: true,
    returning: true,
  });

  // await orders.bulkCreate(orders, {
  //   individualHooks: true,
  //   returning: true,
  // });

  // await orderDetails.bulkCreate(orderDetails, {
  //   individualHooks: true,
  //   returning: true,
  // });

  await menu.bulkCreate(menuData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
