var assert = require("chai").assert;
var check = require("../lib/luhnAlg");

describe("lughAlg", function() {
  it("should return true if a series of digits is valid", function() {
    var result = check(79927398713);
    assert.isTrue(result)
  });
  it("should return false if a series of digits is invalid", function() {
    var result = check(79927398710);
    assert.isFalse(result);
  });

it("should return false if a series of digits is invalid", function() {
    var result = check(79927398711);
    assert.isFalse(result);
  });
it("should return false if a series of digits is invalid", function() {
    var result = check(79927398712);
    assert.isFalse(result);
  });
it("should return false if a series of digits is invalid", function() {
    var result = check(79927398714);
    assert.isFalse(result);
  });
it("should return false if a series of digits is invalid", function() {
    var result = check(79927398715);
    assert.isFalse(result);
  });


it("should return true if a series of digits is valid", function() {
    var result = check(49927398716);
    assert.isTrue(result);
  });
it("should return false if a series of digits is invalid", function() {
    var result = check(49927398717);
    assert.isFalse(result);
  });
it("should return false if a series of digits is invalid", function() {
    var result = check(1234567812345678);
    assert.isFalse(result);
  });
it("should return true if a series of digits is invalid", function() {
    var result = check(1234567812345670);
    assert.isTrue(result);
  });

});

