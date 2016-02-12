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
    var flight = new Flight("Edinburgh", "Melbourne", "28-03-2016 T08:00:00", "29-03-2016 T10:00:00");
    assert.equal(flight.departing, "Mon Mar 28 2016 09:00:00 GMT+0100 (BST)");
    assert.equal(flight.arriving, "Tue Mar 29 2016 11:00:00 GMT+0100 (BST)");
  });
})