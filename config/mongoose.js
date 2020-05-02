//require the libray
const mongoose= require('mongoose');
const autoIncrement = require('mongodb-autoincrement');

//connect to the database
mongoose.connect('mongodb://localhost/mocktest2_db');

//acquire the connection(to check if it is successful)
const db=mongoose.connection;

//error
db.on('error',console.error.bind(console,'error connecting to db'));

//up and running then print up and running 
db.once('open',function(){
    console.log("successfully connceted to the database");
});

module.exports=db;