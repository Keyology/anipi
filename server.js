const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const bodyParser = require('body-parser');
const auth = require('./routes/auth')
const animeSearch = require('./routes/main');




app.use(bodyParser.json())



app.use(bodyParser.json({
    type: ''
}));

app.use(bodyParser.urlencoded({
    extended: true
}));

require('dotenv').config()

require('./db/anime-db');


auth(app);
animeSearch(app);



app.listen(port, () => console.log(`listening on port ${port}`))

module.exports = app;