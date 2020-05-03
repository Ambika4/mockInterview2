const Student=require('../../../models/student');
const Interview=require('../../../models/interview');

module.exports.home=async function(req,res){
     
   let students=await Student.find({});
   let interviews=await Interview.find({});

     return res.render('interview',{
         title:"Interview",
         students:students,
         interviews:interviews
     })
}

module.exports.createInterview= async function(req,res){
   // console.log(req.body);
 try{
        let interview = await Interview.create({
            companyName: req.body.companyName,
            interviewDate: req.body.interviewDate
        }); 
        //console.log(interview);

        res.redirect('back');
    
}catch(err){
   console.log(err);
    return;
}
      
}

module.exports.scheduleInterview=async function(req,res){
    console.log(req.body);
    
  try{
    let interview = await Interview.findById(req.body.interview)

        if (interview){
            //push the student in array of students in interview
            
            //console.log(student);
            interview.students.push(req.body.student);
            //after making changes push the save 
            interview.save();
           

            res.redirect('back');
        }
  }catch(err)
  {
      console.log(err);
      return;
  }
}
module.exports.studentsList=async function(req,res){
  // console.log(req.query);
    try{
      let interview = await Interview.findById(req.query.interview).populate('students','name');
  
          if (interview){
            console.log(interview.students)
            return res.render('interview_result',{
                title:"Interview",
                studentList:interview.students,
               
            })
              
          }
    }catch(err)
    {
        console.log(err);
        return;
    }
  }

  module.exports.setResult=async function(req,res)
  {
    console.log(req.body);
   
  }