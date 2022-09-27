const { application } = require('express');
const nodemailer = require('nodemailer')

const router = require('express').Router();

router.get('/', async (req, res) => {
  // TODO: Render template with Sequelize data
  res.render('login');
});

module.exports = router;
