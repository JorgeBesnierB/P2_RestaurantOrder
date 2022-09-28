const router = require('express').Router();
const menu = require('../models/Menu');

// route to get all dishes
router.get('/menu', async (req, res) => {
  // Get all books from the book table
  menu.findAll().then((menuData) => {
    res.json(menuData);
  });
});
  

module.exports = router;

