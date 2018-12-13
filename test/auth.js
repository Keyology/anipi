const chai = require('chai');
const chaiHttp = require("chai-http");
const should = chai.should();
const app = require('../server');


const User = require('../models/user');

chai.use(chaiHttp);


const fakeUser = {
    email: 'Johnadams123@gmail.com',
    password: '1234567'

}

const fakeloginUser = {
    email: "keonimurray123@gmail",
    password: "12345"

}

const agent = chai.request.agent(app);


before(done => {
    agent
        .post("/login")
        .send(fakeUser)
        .end(function (err, res) {
            done();
        });
});

describe("User", function () {
    // TESTS WILL GO HERE.

    it("should not be able to login if they have not registered", done => {
        agent.post("/login", {
            // Sending the wrong credentials
            email: "wrong@wrong.com",
            password: "nope"
        }).end(function (err, res) {
            res.status.should.be.equal(500);

        });
        done()
    });

    // signup
    it("should be able to signup", done => {
        User.findOneAndDelete(fakeUser,
            function () {
                agent
                    .post("/signup")
                    .send(fakeUser)
                    .end(function (err, res) {
                        console.log(res.body);
                        // Response should have a status of 200 and the response should bre present on the request 
                        res.should.have.status(200);
                        // res.should.have.json(token);
                    });
                done();
            });
    });



    // login
    it("should be able to login", done => {
        agent
            .post("/login")
            .send(fakeloginUser)
            .end(function (err, res) {
                res.should.have.status(200);

            });
        done();
    });



});