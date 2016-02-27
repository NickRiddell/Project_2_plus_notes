var Accommodation = require('../accommodation');
var chai = require('chai');
var assert = chai.assert;
var sortAccommodation = require('../sort_accom.js');

describe('hotel', function() {
  it('should have the cheapest result first', function() {
    hotels = [
    hotel1 = new Accommodation("Crowne Plaza", 32, 10, 1, [-37.822848, 144.955277], {"building":"3","street":"Park Avenue","city":"Melbourne","zip":3498890}),
    hotel2 = new Accommodation("Grand Hotel Melbourne", 142, 10, 3, [-37.822848, 144.955277], {"building":"3","street":"Park Avenue","city":"Melbourne","zip":3498890}),
    hotel3 = new Accommodation("Discovery Hostel", 12, 10, 5, [-37.822848, 144.955277], {"building":"3","street":"Park Avenue","city":"Melbourne","zip":3498890})
    ];

    var priceSortedHotels = [hotel3, hotel1, hotel2];

    assert.deepEqual(sortAccommodation(hotels, "price"), priceSortedHotels);
  });

  it('should rank by star rating, highest to lowest', function() {
    var starSortedHotels = [hotel3, hotel2, hotel1];
    assert.deepEqual(sortAccommodation(hotels, "stars"), starSortedHotels);
  });

});








