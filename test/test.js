var request = require('request');
var assert = require('assert');

describe("Baya API Test", function() {
    describe("Sign Up API", function() {
        it("Should return user object", function(done) {
            this.timeout(120000);
            request.post({url: 'http://baya.whatall.com/api/users/signup', form: {
                    "user_type": "business_user",
                    "first_name": "Ankit",
                    "last_name": "Jain",
                    "email": "ankit"+(new Date()).getTime()+"@baya.com",
                    "password": "test123",
                    "phone_number": "9888988989",
                    "address": "3574 East Moline",
                    "state": "Illnious",
                    "city": "East Moline",
                    "device_type": "",
                    "device_id": ""
                }}, function(err, httpResponse, body) { 
                   if(err)
                       throw err;
                   else{
                       if(JSON.parse(body).success)
                       {
                            assert.equal('object',typeof(JSON.parse(body).data));
                           done();
                       }
                       else {
                          // throw new Error(JSON.parse(body).message);
                          assert.equal('object',typeof(JSON.parse(body).data));
                           
                       }
                   }
                   
            });
           
        });
    });


});