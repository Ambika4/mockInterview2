const mongoose = require('mongoose');

//schema for the post
const resultSchema= new mongoose.Schema({
    result:{
        type:String,
        required:true
    },
    interview:{
        //reffered to user schema
        type:mongoose.Schema.Types.ObjectId,
        //Schema of the user we are reffering
        ref:'Interview'
    }
});

//the is a collection i.e is a model
const Result=mongoose.model('Result',resultSchema);
module.exports=Result;