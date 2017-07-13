var chai = require("chai");
var assert = chai.assert;


var cal = require("../app.js");
var add = cal.add;
var sub = cal.sub;
var mult = cal.mult;
var divide = cal.divide;

describe("test calculator", function(){
    it("should return the sum of two numbers", function(){
        assert.equal(add(2, 2), 4);
        assert.equal(add(-3, -2), -5);
    }); 
    it("should return difference of two numbers", function(){
        assert.equal(sub(2, 4), -2);
        assert.equal(sub(-1, -4), 3);
    });
    it("should return total of mult two numbers", function(){
        assert.equal(mult(4, 4), 16);
    });
    it("should be total of dividing two numbers", function(){
        assert.equal(divide(16, 4), 4);
    })
});