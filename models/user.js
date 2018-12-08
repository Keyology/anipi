//this will model out the user who will signup/login
//user collection

const mongoose = require('mongoose')
const Schema = mongoose.Schema;

UserSchema = new Schema({

    Account_id: mongoose.Schema.ObjectId,

    createdAt: {
        type: Date,
        default: Date.now
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true

    },

    userName: {
        type: String,
        trim: true,
        unique: true

    },

    password: {
        type: String,
        required: true,

    },



})


module.exports = mongoose.model('User', UserSchema);