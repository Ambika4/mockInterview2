const Student=require('../../../models/student');
const Interview=require('../../../models/interview');
const Result=require('../../../models/result');

module.exports.home=async function(req,res){
     
   let students=await Student.find({});
   let interviews=await Interview.find({});

     return res.render('interview',{
         title:"Interview",
         students:students,
         interviews:interviews
     })
}

//function to create interview
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


//schedule interview for student in company
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

//List of student for selected company interview
module.exports.studentsList=async function(req,res){
  // console.log(req.query);
    try{
      let interview = await Interview.findById(req.query.interview).populate('students','name');
  
          if (interview){
            console.log(interview.students)
            return res.render('interview_result',{
                title:"Interview",
                studentList:interview.students,
                interview:interview
               
            })
              
          }
    }catch(err)
    {
        console.log(err);
        return;
    }
  }
//funtion to set result of student
  module.exports.setResult= async function(req,res)
  {
    try{
      let result= await Result.create({
       result:req.body.option,
       interview:req.body.interview,
       student:req.body.student
    });
     
      return res.redirect('back');
    
    }catch(err){
     console.log(err);
      return res.redirect('back');
    }
  }