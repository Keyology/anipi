 const chai = require('chai');
 const chaiHttp = require("chai-http");
 const should = chai.should();
 const app = require('../server');
 const Anime = require('../models/animeshows');

 chai.use(chaiHttp);
 const agent = chai.request.agent(app);


 const fakeSearch = {
     search: "Naruto"
 }


 describe("search route", function () {
     it('should query anime a return result in json format', done => {

         Anime.findOne(fakeSearch, function () {
             agent
                 .post('/search')
                 .send(fakeSearch)
                 .end(function (err, res) {
                     res.should.have.status(200);
                 });
             done();
         })


     })
 })