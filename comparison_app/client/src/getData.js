var Flight = require('./flight/flight.js');
var Accommodation = require('./accommodation/accommodation.js');
var populateDropdown = require('./dropdowns.js').populateDropdown;
var populateFlightMinMaxDropdown = require('./dropdowns.js').populateFlightMinMaxDropdown;
var populateAccomMinMaxDropdown = require('./dropdowns.js').populateAccomMinMaxDropdown;

var getData = function(flights, hotels, callback){

  var url = 'https://raw.githubusercontent.com/MichaelMacLeod/project_2/develop/updated_data.json';
  var request = new XMLHttpRequest();
  request.open('GET', url);

  request.onload = function() {
    if (request.status === 200) { 
      console.log("Got the DATA");
      appData = JSON.parse(request.responseText); 

      for (var i = 0; i < appData.flights.length; i++) {
        var flightData = appData.flights[i];
        var flight = new Flight(
          flightData.departureTZ,
          flightData.arrivalTZ,
          flightData.departure,
          flightData.departureLatLng,
          flightData.arrival,
          flightData.arrivalLatLng,
          flightData.departing,
          flightData.arriving,         
          flightData.stopover,         
          flightData.price
        );
        console.log("flight", flight);
        flights.push(flight);
      }
      for (var i = 0; i < appData.hotels.length; i++) {
        var hotelData = appData.hotels[i];
        var hotel = new Accommodation(
          hotelData.name,
          hotelData.pricePerPerson,
          hotelData.rooms,
          hotelData.stars,
          hotelData.latlng,
          hotelData.address
        );
        hotels.push(hotel);
      }


      populateFlightMinMaxDropdown("min-flight-price", 1000);
      populateFlightMinMaxDropdown("max-flight-price", 1000);
      populateAccomMinMaxDropdown("min-accom-price", 200);
      populateAccomMinMaxDropdown("max-accom-price", 200);

      populateFlightMinMaxDropdown("return-min-flight-price", 1000);
      populateFlightMinMaxDropdown("return-max-flight-price", 1000);

      populateDropdown("", "departure", flights);
      populateDropdown("", "arrival", flights);
      populateDropdown("", "passengers", null, 21);
      populateDropdown("", "nights", null, 21);
      populateDropdown("", "rooms", null, 21);

      // populateDropdown("return-", "departure", flights);
      // populateDropdown("return-", "arrival", flights);

      callback();

    }
  }
  request.send(null);
}

module.exports = getData;