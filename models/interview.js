const mongoose = require('mongoose');

//schema for the post
const interviewSchema= new mongoose.Schema({
    companyName:{
        type:String,
        required:true
    },
  students:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Student'
        }
    ],
  
    interviewDate:{
        type:String,
        required:true
    }
});

//the is a collection i.e is a model
const Interview=mongoose.model('Interview',interviewSchema);
module.exports=Interview;