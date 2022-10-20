const { application } = require('express');
const nodemailer = require('nodemailer')
const orderModel = require("../models/orders")
const orderDetailModel = require("../models/orderDetails")


const router = require('express').Router();
const User = require('../models/User');
const withAuth = require('../utils/auth');


// Prevent non logged in users from viewing the homepage
router.get('/', withAuth, async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ['password'] },
      order: [['name', 'ASC']],
    });

    const users = userData.map((project) => project.get({ plain: true }));

    res.render('homepage', {
      users,
      // Pass the logged in flag to the template
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Login route
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect to the homepage
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  // Otherwise, render the 'login' template
  res.render('login');
});

// CREATE an order and order details
router.post('/createOrder', async (req, res) => {
  try {
    const orderData = await orderModel.create({
      customerId: req.body.customerId,
      tableId: req.body.tableId,
      isCooked: req.body.isCooked,
      isDelivered: req.body.isDelivered,
      orderDate: req.body.orderDate,
      totalCost: req.body.totalCost,
    });
    
    auxJson = req.body.jsonData
    auxJson.forEach((node) => node.orderId = orderData.id);
  
    const createOrderDetails = await orderDetailModel.bulkCreate(auxJson, {
      individualHooks: true,
      returning: true,
    });


    console.log("aqui jorge", auxJson)
    res.status(200).json(orderData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
