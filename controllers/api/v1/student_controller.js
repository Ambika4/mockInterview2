const Student=require('../../../models/student');
const path=require('path');
const fs = require('fs');
const { parse } = require('json2csv');
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

module.exports.download=async function(req,res){
    try{
        let data=await Student.find({});
        const fields = ['name', 'email', 'batch','college','status','dsaScore','webDScore','reactScore','reesult'];
        const opts = { fields,delimiter:','};
         
        const result=parse(data,opts);

        res.setHeader('Content-disposition', 'attachment; filename=shifts-report.csv');
        res.set('Content-Type', 'text/csv');
        res.status(200).send(result);
      

    }catch(err){
        console.log(err); 
    }
}

