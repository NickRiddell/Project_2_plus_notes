var chai = require('chai');
var assert = chai.assert;
var Flight = require('./../flight.js');

describe('flight', function() {
  it('should have departure and arrival locations', function() {
    var flight = new Flight("Edinburgh", "Melbourne");
    assert.equal(flight.departure, "Edinburgh");
    assert.equal(flight.arrival, "Melbourne");
  });
  it('should have departing date and arriving date', function() {
    var flight = new Flight("Edinburgh", "Melbourne", new Date("28-03-2016T08:00:00"), new Date("29-03-2016T10:00:00"));
    assert.equal(flight.departing, new Date("28-03-2016T08:00:00"));
    assert.equal(flight.arriving, new Date("29-03-2016T10:00:00"));
  });
})