  var Flight = require('../flight.js');
  var chai = require('chai');
  var assert = chai.assert;
  var sortFlights = require('./sort_flights.js');

  describe('flight', function() {
    it('should have the cheapest result first', function() {
      flights = [
      flight1 = new Flight("Europe/London", "Australia/Melbourne", "Edinburgh", "Melbourne", "28-03-2016 T08:00:00", "29-03-2016 T10:00:00", null, 300),

      flight2 = new Flight("Europe/London", "Australia/Melbourne", "Edinburgh", "Melbourne", "28-03-2016 T08:00:00", "29-03-2016 T10:00:00", null, 200),

      flight3 = new Flight("Europe/London", "Australia/Melbourne", "Edinburgh", "Melbourne", "28-03-2016 T08:00:00", "29-03-2016 T10:00:00", null, 800),
      ];

      var priceSortedFlights = [flight2, flight1, flight3];
      console.log(priceSortedFlights);

      assert.deepEqual(sortFlights(flights, "price"), priceSortedFlights);
    });
  });










