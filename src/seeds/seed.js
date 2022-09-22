const sequelize = require('../config/connection');
const { User } = require('../models');

const customerData = require('./customerData.json');
const menuData = require('./menuData.json');
const orderDetailData = require('./orderDetailData.json');
const orderData = require('./orderData.json');


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(customerData, {
    individualHooks: true,
    returning: true,
  });

  await User.bulkCreate(menuData, {
    individualHooks: true,
    returning: true,
  });

  await User.bulkCreate(orderDetailData, {
    individualHooks: true,
    returning: true,
  });

  await User.bulkCreate(orderData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
