const express = require('express');
const app = express();
const db=require('./config/mongoose');
const port=8080;/** On port 80 all website hosts */
/*app listen to the port*/
//set up view engine
app.set('view engine','ejs');
app.set('views','./views');

//for reading key value pair in the html form add it before routes.
app.use(express.urlencoded());

app.use('/downloads',express.static(__dirname+'/downloads'));

//going to use express router
//It is pointing to index file in routes folder
//app.use signify middlewares
app.use('/',require('./routes'));

app.listen(port,function(err){
    if(err){
        console.log('Error: ',err);
    }
    console.log(`server is running on port${port}`);
});
module.exports = app;