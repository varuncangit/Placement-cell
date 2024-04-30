const express = require('express');

const router = express.Router();
const userRoutes = require('./userRoutes.js');
const studentRoutes = require('./studentRoute.js');
const homeController = require('../controllers/home.controller.js');
const companyRoutes = require('./companyRoute.js');
const passport = require('passport');

router.get('/', passport.checkAuthentication, homeController.homePage);
router.use('/users', userRoutes);
router.use('/students', studentRoutes);
router.use('/company', companyRoutes);

module.exports = router;
