var chai = require('chai');
var assert = chai.assert;
var Flight = require('./../flight.js');

describe('flight', function() {
  it('should have departure and arrival locations', function() {
    var flight = new Flight(null, null, "Edinburgh", "Melbourne");
    assert.equal(flight.departure, "Edinburgh");
    assert.equal(flight.arrival, "Melbourne");
  });
  it('should have departing date and arriving date', function() {
    var flight = new Flight(null, null, "Edinburgh", "Melbourne", "28-03-2016 T08:00:00", "29-03-2016 T10:00:00");
    assert.equal(flight.departing, "2016-03-28T08:00:00Z");
    assert.equal(flight.arriving, "2016-03-29T10:00:00Z");
  });
  it('should have a price', function() { 
    var flight = new Flight(null, null, "Edinburgh", "Melbourne", "28-03-2016 T08:00:00", "29-03-2016 T10:00:00", 248);
    assert.equal(flight.price, 248);
  })
})

