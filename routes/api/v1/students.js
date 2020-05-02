const express = require('express');

const router = express.Router();

const studentController=require('../../../controllers/api/v1/student_controller');
router.post('/createStudent',studentController.addStudent);
router.get('/',studentController.home);
console.log("After hm");


module.exports = router;