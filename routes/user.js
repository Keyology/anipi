//use will be able to view profile info
// user will be able to delete  account
//user will be able to add anime


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

    app.put('/userprofile', (req, res) => {
        // this route will update user profile

        User.findOneAndUpdate(req.body.email, {
            email: req.body.newemail
        }, (err) => {
            if (err) {
                res.json({
                    message: "could not update email"
                }).status(500);
            } else {
                res.json({
                    message: "email updated"
                }).status(200)

            }
        })
    })
}