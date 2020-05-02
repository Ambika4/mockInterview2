const express = require('express');
const app = express();
const port=8001;/** On port 80 all website hosts */
/*app listen to the port*/

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(port,function(err){
    if(err){
        console.log('Error: ',err);
    }
    console.log(`server is running on port${port}`);
});
module.exports = app;