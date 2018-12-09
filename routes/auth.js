// user will be able to login 
//user will be able to signup
const User = require('..//models/user');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = (app) => {

    app.post('/signup', (req, res) => {
        //this route will signup user

        console.log('this is the value of req.body.email', req.body.email)
        console.log('password has been saved', req.body.password)

        let newBody = req.body;
        console.log('this is the value of req.body.search', newBody.email)


        //This route will handle how artist are signed up
        bcrypt.hash(req.body.password, 10, (err, hash) => {
            if (err) {
                return res.status(500).json({
                    error: err
                });
            } else {
                const user = new User({
                    Account_id: new mongoose.Types.ObjectId(),
                    email: req.body.email,
                    password: hash,
                    userName: req.body.username
                });
                user.save().then(result => {
                    const JWTToken = jwt.sign({

                            _id: result.Account_id
                        },
                        process.env.SECRET, {
                            expiresIn: '2h'
                        });
                    console.log(result);
                    return res.json(JWTToken).status(200);
                }).catch(error => {
                    console.log(error);
                    res.status(500).json({
                        error: err
                    });

                });
            }
        })


    })


    app.post('/login', (req, res) => {
        // this route will login users

        User.findOne({
                //checks database to see if email is a match
                email: req.body.email
            })
            .exec()
            .then(user => {
                //decrypts password in database and compares password user submit to find match 
                bcrypt.compare(req.body.password, user.password, (err, result) => {
                    if (err) {
                        //if the email or password dose't match throw error 
                        return res.status(401).json({
                            failed: 'Unauthorized Acess'
                        });
                    }
                    if (result) {
                        //if password and email exist in database create a jwt token
                        let token = jwt.sign({
                            id: user.Account_id
                        }, process.env.SECRET, {
                            expiresIn: "60 days"
                        });




                        res.status(200).json(token)



                        console.log(user);
                    }



                });
            }).catch(error => {
                //handles error on server side
                res.status(500).json({
                    error: "hitting catch"
                });
                console.log('this is an error:', error)
            });


    });

}