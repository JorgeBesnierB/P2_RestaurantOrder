const router = require('express').Router();
const homeRoutes = require('./homeRoutes.js');
const nodeMailer = require('./nodeMailer.js');
const menue = require('./menue.js');

router.use('/', homeRoutes);
router.use('/', nodeMailer);
router.use('/', menue);

module.exports = router;
