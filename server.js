const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const bodyParser = require('body-parser');
const auth = require('./routes/auth')




app.use(bodyParser.json())



app.use(bodyParser.json({
    type: ''
}));

app.use(bodyParser.urlencoded({
    extended: true
}));



require('./db/anime-db');
require('dotenv').config()

auth(app);




app.listen(port, () => console.log(`listening on port ${port}`))

module.exports = app;