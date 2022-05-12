const mongoose = require('mongoose');

const URI = process.env.URLDB;

mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology:true})
            .then(db => console.log('---->Database is connected<----'))
            .catch(err => console.error(err));

module.exports = mongoose;           