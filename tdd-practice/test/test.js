var chai = require("chai");
var assert = chai.assert;

var problems = require("../app.js");
var lastDigit = problems.lastDigit;
var withoutEnd = problems.withoutEnd;

describe("testing last number", function(){
    it("last num should be the same", function(){
        assert.equal(lastDigit(44, 34), true);
        assert.equal(lastDigit(23, 23), true)
    }); 
    it("last num should be the same", function(){
        assert.equal(lastDigit(24, 18), false);
        assert.equal(lastDigit(38, 21), false)
    })
});


describe("testing remove string app", function(){
    it("answer should return string without first & last", function(){
        assert.equal(withoutEnd("hello"), "ell");
        assert.equal(withoutEnd("hey what up"), "ey what u")
    })
});