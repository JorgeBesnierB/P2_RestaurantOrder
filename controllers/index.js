const router = require('express').Router();
const homeRoutes = require('./homeRoutes.js');
const nodeMailer = require('./nodeMailer.js');
const menu = require('./menu.js');

const apiRoutes = require('./api');


router.use('/', homeRoutes);
router.use('/', nodeMailer);
router.use('/', menu);
router.use('/api', apiRoutes);

module.exports = router;
