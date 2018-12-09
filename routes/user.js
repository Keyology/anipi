//use will be able to view profile info
// user will be able to delete  account
//user will be able to add anime

const Useranime = require('../models/useranime');
const User = require('../models/user');

module.exports = (app) => {

    app.get('/userprofile/:email', (req, res) => {
        // this route will return user profile

        // This route will send a query to the mongodb and return the user  profile info in a json object
        User.findOne({
            email: req.params.email
        }, (err, user) => {
            if (err) {
                res.json({
                    error: err
                }).status(500)
            } else {
                res.json(user).status(200)
            }
        })




    });


    app.delete('/userprofile', (req, res) => {

        User.findOneAndDelete({
            email: req.body.email
        }, (err) => {
            if (err) {
                res.json({
                    err: err,
                    message: "account could not be deleted"
                }).status(500)
            } else {
                res.json({
                    message: "account has been deleted"
                }).status(200)
            }
        })

    });

    app.post('addanime', (req, res) => {

    })
}