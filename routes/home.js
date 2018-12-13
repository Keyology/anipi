module.exports = (app) => {

    app.get('/', (req, res) => {
        res.send("<h1>Welcome to the my anime api by keoni murray")
    });
}