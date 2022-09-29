const router = require('express').Router();

const dishes = [
    {
        dish_ID: 001,
        dish_name: 'Bros burger',
        description: 'Sesame seed bun, quarter pounder and cheese.'
    },
    {
        dish_ID: 002,
        dish_name: 'Bros Pineapple bacon burger',
        description: 'Brioche bread bun, quarter pounder, pineapple slice and cheese.'
    },
    {
        dish_ID: 003,
        dish_name: 'Bros 3 cheese burger',
        description: 'Brioche bread bun, quarter pounder, cheddar, gouda and mozzarella.'
    },
    {
        dish_ID: 004,
        dish_name: 'Bros chicken burger',
        description: 'Onion bun, fried chicken and cheese.'
    },
];

router.get('/', async (req, res) => {
    res.render('all');
});
  
  // Get a dish
router.get('/dish/:num', async (req, res) => {
    return res.render('dish', dishes[req.params.num - 1]);
});

const snacks = [
    {
        snack_ID: 001,
        snack_name: 'French fries',
        description: 'French fries salted and served with ketchup.'
    },
    {
        snack_ID: 002,
        snack_name: 'BBQ chicken wings',
        description: 'Chicken wings coated with spicy and sweet barbecue sauce.'
    },
    {
        snack_ID: 003,
        snack_name: 'Boneless',
        description: 'Crispy breaded pieces of tender boneless chicken tossed in your choice of sauce.'
    },
    {
        snack_ID: 004,
        snack_name: 'Onion rings',
        description: 'Sliced white onions, battered with a subtle blend of spices.'
    },
];

router.get('/', async (req, res) => {
    res.render('all');
});
  
router.get('/dish/:num', async (req, res) => {
    return res.render('dish', snacks[req.params.num - 1]);
});

const desserts = [
    {
        dessert_ID: 001,
        dessert_name: 'Ice cream',
        description: '7oz of vanilla ice cream covered with melted chocolate.'
    },
    {
        dessert_ID: 002,
        dessert_name: 'Brownies',
        description: 'Portion of chocolate brownie (1 person).'
    },
    {
        dessert_ID: 003,
        dessert_name: 'Strawberries and cream',
        description: 'Strawberries covered  with sweetened condensed milk, whipping cream and sour cream.'
    },
];

router.get('/', async (req, res) => {
    res.render('all');
});
  
router.get('/dish/:num', async (req, res) => {
    return res.render('dish', desserts[req.params.num - 1]);
});

const drinks = [
    {
        drink: 001,
        drink_name: 'Vanilla Milkshake',
        description: '350ml'
    },
    {
        drink: 002,
        drink_name: 'Soda',
        description: '350ml'
    },
    {
        drink: 003,
        drink_name: 'Water',
        description: '350ml',
    },
];

router.get('/', async (req, res) => {
    res.render('all');
});
  
router.get('/dish/:num', async (req, res) => {
    return res.render('dish', drinks[req.params.num - 1]);
});



module.exports = router;