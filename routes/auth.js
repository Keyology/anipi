// user will be able to login 
//user will be able to signup
const User = require('..//models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = (app) => {

    app.post('/signup', (req, res) => {
        //this route will signup user

        console.log('this is the value of req.body.email', req.body.email)
        console.log('password has been saved', req.body.password)

        bcrypt.hash(req.body.password, 10, (err, hash) => {
            console.log('password has been saved', req.body.password)
            if (err) {
                return res.status(500).json({
                    error: err


                });
            } else {
                const user = new User({
                    //might throw error 
                    email: req.body.email,
                    password: hash
                });
                user.save().then(user => {
                    let token = jwt.sign({
                        id: user.Account_id
                    }, process.env.SECRET, {
                        expiresIn: "60 days"
                    });
                    res.json(token)

                    console.log(user);

                }).catch(error => {
                    res.status(500).json({
                        error: err
                    });
                });
            }

        });



    });


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




                        res.json(token);



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