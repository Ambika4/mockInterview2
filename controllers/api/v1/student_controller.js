const Student=require('../../../models/student');
module.exports.home=function(req,res){
	return res.render('student',{
        	title:"Home"
        	
    	});
    
}
module.exports.allStudent=function(req,res){
    Student.find({},function(err,students){
        if(err){
            console.log("Error in fetching the content");
            return;
        }
       // console.log(students);

	return res.render('interview',{
        	title:"Interview",
        	students:students
    	});
    });
    
}

module.exports.addStudent=function(req,res)
{
    if(req.body.status=="on")
    x=true;
    else
    x=false;
    console.log(req.body);
    Student.collection.insertOne({
        name:req.body.name,
        email:req.body.email,
        college:req.body.college,
        batch:req.body.batch,
        webDScore:req.body.webDScore,
        dsaScore:req.body.dsaScore,
        reactScore:req.body.reactScore,
        status:x

    },function(err,newStudent){
        if(err)
        {
            console.log("error in creating a Student");
            return;
        }

    });
    return res.redirect('back');
}