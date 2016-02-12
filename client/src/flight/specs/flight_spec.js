var chai = require('chai');
var assert = chai.assert;
var Flight = require('./../flight.js');

describe('flight', function() {
  it('should have departure and arrival locations', function() {
    var flight = new Flight("Edinburgh", "Melbourne");
    assert.equal(flight.departure, "Edinburgh");
    assert.equal(flight.departure, "Melbourne");
  });
})