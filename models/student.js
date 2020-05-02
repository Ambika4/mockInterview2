const mongoose = require('mongoose');

//schema for the post
const studentSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    batch:{
        type:String,
        required:true
    },
    college:{
        type:String,
        required:true
    },
    status:{
        type:Boolean,
        required:true
    }
});

//the is a collection i.e is a model
const Student=mongoose.model('Student',studentSchema);
module.exports=Student;