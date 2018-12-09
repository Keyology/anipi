// This will model out our anime tv show collection
//aniem tv show collection

const mongoose = require('mongoose')
const Schema = mongoose.Schema;

animeshowsSchema = new Schema({

    _id: mongoose.Schema.Types.ObjectId,
    anime_id: Number,
    name: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },

    genre: {
        type: String

    },
    type: String,

    episode: Number,
    rating: Number,
    members: Number


})

module.exports = mongoose.model('Animeshows', animeshowsSchema);