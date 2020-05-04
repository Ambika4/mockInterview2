const express = require('express');

const router = express.Router();

const employeeController=require('../../../controllers/api/v1/employee_controller');

//route of create
router.post('/create',employeeController.create);
//route for sign-up page
router.post
router.get('/sign-up',employeeController.signUp);
router.get('/sign-in',employeeController.signIn);
router.post('/create-session',employeeController.createSession);
module.exports = router;