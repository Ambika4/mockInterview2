const express = require('express');

const router = express.Router();

const interviewController=require('../../../controllers/api/v1/interview_controller');
const studentController=require('../../../controllers/api/v1/student_controller');

 router.post('/createinterview',interviewController.createInterview);
 router.post('/scheduleinterview',interviewController.scheduleInterview);
 router.post('/setResult',interviewController.setResult);
 router.get('/studentsList',interviewController.studentsList);
 router.get('/',interviewController.home);





module.exports = router;