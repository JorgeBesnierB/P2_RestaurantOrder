const router = require('express').Router();
const menu = require('../models/Menu');

// route to get all dishes
router.get('/menu', async (req, res) => {
  // Get all books from the book table
  menu.findAll().then((menuData) => {
    // res.json(menuData);
    const plainMenuData = menuData.map((data) => data.get({plain:true}))
<<<<<<< HEAD
    //console.log(plainMenuData);
    res.render('menu', {layout: 'menu-layout', plainMenuData});
  });
  
=======
    // console.log(plainMenuData);
    res.render('menu', {layout: 'menu-layout', plainMenuData});

  });
>>>>>>> 7496b496d7ee19d534ca1a9bb2f484d668744aaf
});
  

module.exports = router;

