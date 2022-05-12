const express = require('express');
const path = require('./config/config');
const {mongoose} = require('./database');
//const bodyParser = require('body-parser');
const app = express();

//Middleware
app.use(express.json());

 //bodyparser
//app.use(bodyParser.urlencoded({extends: false}));

//global route
app.use('api/movies' , require('./router/index-router'));

//listening port 
app.listen(process.env.PORT, () => {

    console.log(`Server on port ${process.env.PORT}`);
});



