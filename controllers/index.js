const express = require('express');
const router = express.Router();

const dashboardRoutes = require('./dashboardRoutes');
const homeRoutes = require('./homeRoutes');

router.use('/dashboard', dashboardRoutes);
router.use('/', homeRoutes);

module.exports = router;
