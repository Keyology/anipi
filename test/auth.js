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


describe("testing user  signup route", () => {
    it("should create a new user account", done => {
        User.findOneAndRemove(fakeUser, () => {
            User.find((err, user) => {

                chai
                    .request(app)
                    .post('/signup')
                    .send(fakeUser)
                    .then(res => {
                        res.should.have.status(200);
                        return done
                    }).catch(err => {
                        return done(err)
                    });
            });
        });

    });

});