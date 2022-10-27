const router = require("express").Router();
const menu = require("../models/Menu");

// route to get all dishes
router.get("/menu", async (req, res) => {
  // Get all books from the book table
  menu.findAll().then((menuData) => {
    // res.json(menuData);
    const plainMenuData = menuData.map((data) => data.get({ plain: true }));
    const dishes = plainMenuData.filter((menu) => menu.dishType === "1");
    const snacks = plainMenuData.filter((menu) => menu.dishType === "2");
    const desserts = plainMenuData.filter((menu) => menu.dishType === "3");
    const drinks = plainMenuData.filter((menu) => menu.dishType === "4");
    // console.log(dishes, plainMenuData);
    res.render("menu", {
      layout: "menu-layout",
      dishes,
      snacks,
      desserts,
      drinks,
    });
  });
});

module.exports = router;
