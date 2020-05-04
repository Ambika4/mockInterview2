const mongoose = require('mongoose');

//schema for the post
const employeeSchema= new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true 
    },
    password:{
        type:String,
        required:true
    }
});

//the is a collection i.e is a model
const Employee=mongoose.model('Employee',employeeSchema);
module.exports=Employee;