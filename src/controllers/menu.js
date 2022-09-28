const router = require('express').Router();
const menu = require('../models/menu');

// route to get all dishes
router.get('/menu', async (req, res) => {
    const menuData = await menu.findAll().catch((err) => { 
        res.json(err);
      });
        const dishes = menuData.map((dish) => dish.get({ plain: true }));
        res.render('all', { dishes });
        console.log(dishes);
      });
  

module.exports = router;