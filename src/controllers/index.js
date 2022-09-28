const router = require('express').Router();
const homeRoutes = require('./homeRoutes.js');
const nodeMailer = require('./nodeMailer.js');
const menu = require('./menu.js');

router.use('/', homeRoutes);
router.use('/', nodeMailer);
router.use('/', menu);

module.exports = router;
