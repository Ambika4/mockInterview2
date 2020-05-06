const express = require('express');

const router = express.Router();

const employeeController=require('../../../controllers/api/v1/employee_controller');
//import passport
const passport=require('passport');
//route of create
router.post('/create',employeeController.create);
//route for sign-up page

router.get('/sign-up',employeeController.signUp);
router.get('/sign-in',employeeController.signIn);

// use passport as a middleware to authenticate
router.post('/create-session', passport.authenticate(
    'local',
    {failureRedirect: '/api/v1/employees/sign-in'},
), employeeController.createSession);
//sign out routes
router.get('/sign-out',employeeController.destorySession);
module.exports = router;