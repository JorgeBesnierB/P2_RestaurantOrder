const sequelize = require('../config/connection');
const { User } = require('../models');

const customers = require('./customers.json');
const menu = require('./menu.json');
const orders = require('./orders.json');
const orderDetails = require('./orderDetails.json');


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(customers, {
    individualHooks: true,
    returning: true,
  });

  await User.bulkCreate(menu, {
    individualHooks: true,
    returning: true,
  });

  await User.bulkCreate(orders, {
    individualHooks: true,
    returning: true,
  });

  await User.bulkCreate(orderDetails, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
