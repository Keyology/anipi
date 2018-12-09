 const chai = require('chai');
 const chaiHttp = require("chai-http");
 const should = chai.should();
 const app = require('../server');
 const Anime = require('..//models/animeshows');

 chai.use(chaiHttp);
 const agent = chai.request.agent(app);


 const fakeSearch = {
     search: "Naruto"
 }

 const output = {
     "_id": "5c06e97a455aebb0fe62ba63",
     "anime_id": 20,
     "name": "Naruto",
     "genre": "Action, Comedy, Martial Arts, Shounen, Super Power",
     "type": "TV",
     "episodes": 220,
     "rating": 7.81,
     "members": 683297
 }


 describe("search route", function () {
     it('should query anime and  return result in json format', done => {

         Anime.findOne(fakeSearch, function () {
             agent
                 .post('/search')
                 .send(fakeSearch)
                 .end(function (err, res) {
                     res.should.have.json(output);
                 });
             done();
         })


     })
 })