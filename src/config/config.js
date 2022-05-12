const { url } = require("inspector");

//====PORT=====
process.env.PORT = process.env.PORT ||3000;


//====ENVIRONMENT=====

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//=====DATABASE=====

let urlDB;
if (process.env.NODE_ENV === 'dev'){
    urlDB = 'mongodb://0.0.0.0:27017/Movies';
}else{
    urlDB = process.env.MONGO_URI;
}
process.env.URLDB = urlDB;