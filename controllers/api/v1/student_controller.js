const Student=require('../../../models/student');
const path=require('path');
const fs = require('fs');
const { parse } = require('json2csv');

//rendering home page
module.exports.home=function(req,res){
	return res.render('student',{
        	title:"Home"
        	
    	});
    
}
//all student list
module.exports.allStudent=async function(req,res){
    try{
  let students= await Student.find({});

	return res.render('display_student',{
        	title:"Career Camp|Students",
        	students:students
    	});
    }catch(err)
    {
        console.log(err);
        
    }
    
}

//function to add student
module.exports.addStudent=function(req,res)
{
    if(req.body.status=="on")
    x="placed";
    else
    x="not_placed";
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

//function to download csv file
//used json2csv to parse the data

module.exports.download=async function(req,res){
    try{
        let data=await Student.find({});
        const fields = ['name', 'email', 'batch','college','dsaScore','webDScore','reactScore','status'];
        const opts = { fields,delimiter:','};
         
        const result=parse(data,opts);

        //set for sending the file at client side
        res.setHeader('Content-disposition', 'attachment; filename=shifts-report.csv');
        res.set('Content-Type', 'text/csv');
        res.status(200).send(result);
      

    }catch(err){
        console.log(err); 
    }
}

