//use will be able to view profile info
// user will be able to delete  account
//user will be able to add anime
const Useranime = require('../models/useranime');

module.exports = (app) => {

    app.get('/userprofile/:email', (req, res) => {
        // this route will return user profile

        // This route will send a query to the mongodb and return the artist profile info in a json object
        Artist.findOne({
            email: req.params.email
        }, (err, Artist) => {
            if (err) {
                res.json({
                    error: err
                })
            } else {
                res.json(Artist)
            }
        })




    });


    app.delete('userprofile', (req, res) => {

    });

    app.post('addanime', (req, res) => {

    })
}