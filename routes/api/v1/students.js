const express = require('express');

const router = express.Router();

const studentController=require('../../../controllers/api/v1/student_controller');
router.post('/createStudent',studentController.addStudent);
router.post('/download',studentController.download);
router.get('/display',studentController.allStudent);
router.get('/',studentController.home);



module.exports = router;