const Employee=require('../../../models/employee');

//get the sign up data
module.exports.create=async function(req,res){
    if(req.body.password!=req.body.confirm_password){
        return res.redirect('back');
    }  
    
try{
    let employee=await Employee.findOne({email:req.body.email});

    if(!employee)
    {
        let newEmployee= await Employee.create({
            email:req.body.email,
            name:req.body.name,
            password:req.body.password
        })
        console.log(newEmployee);
    }
    
    return res.redirect('back');
}
catch(err)
{
    console.log("error in finding Employee",err);
    return ;
}
 }

 //render the signin page
module.exports.signUp=function(req,res){
    if(req.isAuthenticated()){
       return res.redirect('/api/v1/employees/');
    }
    return res.render('employee_sign_up',{
        title:"Employee| Signup"
    });
}
module.exports.signIn=function(req,res){
    if(req.isAuthenticated()){
        return res.redirect('/api/v1/employees/');
     }
    return res.render('employee_sign_in',{
        title:"Employee | Signin"
    });
}
module.exports.createSession = async function(req, res){
    let employee=await Employee.findOne({email:req.body.email});
    if(req.body.password==employee.password)
    return res.redirect('/api/v1/employees/');

    return res.redirect('back');
}
//destory current session
module.exports.destorySession=function(req,res){
    //logout function is due to passport js

    req.logout();
    return res.redirect('/api/v1/employees/');
}