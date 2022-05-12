const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const movieSchema = new Schema({

    title: {type : String, required: [true, 'Title is required']},
    description: {type: String}
});

module.exports = mongoose.model('Movies', movieSchema);
