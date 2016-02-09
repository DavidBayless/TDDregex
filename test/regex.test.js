var regexjs = require('../regex.js');
var expect = require('chai').expect;

describe('The valid password check!', function() {

  it('Should return false on an invalid password', function() {
    expect(regexjs('hello')).to.equal(false);
  });

  it('Should return true on a valid password', function() {
    expect(regexjs('1Ab#alkjsdfla')).to.equal(true);
  });

  it('Should return false on a valid password with invalid characters included', function() {
    expect(regexjs('1Ab#alkjsdfla,')).to.equal(false);
  });

  it('Should return false on a password that is less than 8 characters', function() {
    expect(regexjs('1Ab#alk')).to.equal(false);
  });
  
});
