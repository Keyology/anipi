//use will be able to view profile info
// user will be able to delete  account
//user will be able to add anime

module.exports = (app) => {

    app.get('/userprofile/:email', (req, res) => {
        // this route will return user profile

    });

    app.delete('userprofile', (req, res) => {

    });

    app.post('addanime', (req, res) => {

    })
}