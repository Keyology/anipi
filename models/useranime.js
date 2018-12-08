// this will model out the user anime collection 
// where user can add update and remove anime
// stretch goal asscoiate useranime with animeuser
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

animeshowsSchema = new Schema({

    _id: mongoose.Schema.Types.ObjectId,

    name: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },

    genre: {
        type: String,
        require: true

    },


    episode: Number



})

module.exports = mongoose.model('Animeshows', animeshowsSchema);