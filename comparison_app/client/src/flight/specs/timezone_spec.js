var chai = require('chai');
var assert = chai.assert;
var Flight = require('./../flight.js');
var momentString = require('./../momentString.js');

describe('momentString', function() {
  it('should take in a date string and return a correctly formatted string for the time zone', function() { 
    var flight = new Flight("Europe/London", "Australia/Melbourne", "Edinburgh", null, "Melbourne", null, "28-03-2016 T08:00:00", "29-03-2016 T10:00:00", 248);
    var convertedDate = momentString(flight.departing, flight.departureTZ);
    assert.equal(convertedDate, "March 28th 2016, 9:00:00 am BST");
  })
})