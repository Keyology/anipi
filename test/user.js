const chai = require('chai');
const chaiHttp = require("chai-http");
const should = chai.should();
const app = require('../server');
const User = require('..//models/user');

chai.use(chaiHttp);
const agent = chai.request.agent(app);
const fakeemail = "Johnadams123@gmail.com";
const FakeEmail1 = "fakeemail@gmail.com";
const newFakeEmail = "fakeemail1234@gmail.com";
const fake_email2 = "updatethisemail@gmail.com";
describe("User", function () {
    it('should return user profile information in json format', done => {

        User.findOne(fakeemail, function () {
            agent
                .get('/userprofile/:email')
                .send(fakeemail)
                .end(function (err, res) {
                    res.should.have.status(200)
                    done()

                });

        })
    });
    it(" should delete user profile", done => {
        User.findOneAndDelete(FakeEmail1, function () {
            agent
                .delete('/userprofile')
                .send(FakeEmail1)
                .end(function (err, res) {
                    res.should.have.status(200)
                });
            done();
        });

    });

    it("should update user profile", done => {

        User.findOneAndUpdate(fakeemail, function (err, res) {
            agent
                .put('/userprofile')
                .send(fake_email2)
                .end(function (err, res) {
                    res.should.have.status(200)
                });
            done();
        })

    })

});