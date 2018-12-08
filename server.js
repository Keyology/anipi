// user will be able to login 
//user will be able to signup 
//use will be able to view profile 
// user will be able to search for anime 
// user will be able to view anime 
//user will be able to add anime 
// user will be able to delete  account

const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

require('./db/anime-db');

app.get('/', (req, res) => {
    res.send("<h1>Welcome to anime</h1>")
})


app.listen(port, () => console.log(`listening on port ${port}`))