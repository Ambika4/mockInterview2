const express = require('express');

const router = express.Router();

const passport=require('passport')

const homeController=require('../../../controllers/api/v1/home_controller')
router.use('/students',passport.checkAuthentication,require('./students'));
router.use('/interviews',passport.checkAuthentication,require('./interviews'));
router.use('/employees',require('./employees'));
router.use('/',homeController.home)

module.exports = router;