const Anime = require('../models/animeshows');

module.exports = (app) => {



    app.post('/search', (req, res) => {
        //this route will query db for anime data and return it in json fromat
        // to use this route you need make sure you are using localhost:7000/anmime/search



        Anime.find({
            name: req.body.search


        }, (err, anime) => {
            console.log("this is an error1:", err)
            if (err) {
                console.log("this is an error2:", err)
                res.json({
                    error: err
                }).status(500)
            } else {
                res.status(200).json(anime)

                console.log(anime)
            }
        })


    })


}