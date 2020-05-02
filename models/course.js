const mongoose = require('mongoose');

//schema for the post
const courseSchema= new mongoose.Schema({
    dsaScore:{
        type:Number,
        required:true
    },
    webDScore:{
        type:Number,
        required:true
    },
    reactScore:{
        type:Number,
        required:true
    },
    student:{
        //reffered to user schema
        type:mongoose.Schema.Types.ObjectId,
        //Schema of the user we are reffering
        ref:'Student'
    }
    
});

//the is a collection i.e is a model
const Course=mongoose.model('Course',courseSchema);
module.exports=Course;