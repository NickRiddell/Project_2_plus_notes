var AccomView = require('./accommodation/accomView.js');
var FlightView = require('./flight/flightView.js');
var sortAccommodation = require('./accommodation/sortAccommodation.js');
var sortFlights = require('./flight/sortFlights.js');
var displayMap = require('./maps/displayMap.js');
var flights = undefined;
var hotels = undefined;

var populateFlightsHotelsArray = function(flightsArray, hotelsArray){
  console.log("Start FLIGHTS HOTELS", flights, hotels);
  flights = flightsArray;
  hotels = hotelsArray;
  console.log("END FLIGHTS HOTELS", flights, hotels);
}

var displayFlights = function(displayHotels) {
  console.log("button clicked");
  document.querySelector('#accomSortButtons').innerHTML = "";
  document.querySelector('#mapContainer').innerHTML = "";
  document.querySelector('#accomList').innerHTML = "";
  var div = document.querySelector('#flightList');
  div.innerHTML = "";
  var filteredArray = flights.filter(function(flight) {
    var arrivalSelect = document.querySelector("#arrival-select");
    var departureSelect = document.querySelector("#departure-select");
    var dateSelect = document.querySelector("#date-input")
    var minFlightPrice = document.querySelector('#min-flight-price-select');
    var maxFlightPrice = document.querySelector('#max-flight-price-select');
    console.log(dateSelect.value);
    if (flight.departure == departureSelect.value && flight.arrival == arrivalSelect.value && new Date(flight.departing).toDateString() === new Date(dateSelect.value).toDateString() && flight.price >= minFlightPrice.value && flight.price <= maxFlightPrice.value) {
      return true
    }else{
      return false
    }
  });
  for (var i = 0; i < filteredArray.length; i++) {
    var flight = filteredArray[i];
    var flightView = new FlightView(flight);
    flightView.render(div);
    flightView.button.onclick = function(){
      displayHotels(flight);
    }
  }
  displayFlightSortButtons();
}

var displayHotels = function(flight) {
  console.log("displaying hotels");
  var div = document.querySelector('#accomList');
  div.innerHTML = "";
  var arrivalSelect = document.querySelector("#arrival-select");
  var city = arrivalSelect.value;
  console.log(city);
  console.log(arrivalSelect);
  
  for (var i = 0; i < hotels.length; i++) {
    var hotel = hotels[i];
    hotel.rendered = false;
    if (hotel.address.city == city) {
      var view = new AccomView(hotel);
      view.render(div);
    }
  }
  displayAccomSortButtons(flight);
  console.log(hotels);
}

var displayFlightSortButtons = function() {
  var flightSortButton = document.querySelector('#flightSortButtons');
  flightSortButton.innerHTML = "";

  var priceSortButton = document.createElement('button');
  priceSortButton.type = 'button';
  priceSortButton.className = "btn btn-hg btn-primary";
  priceSortButton.innerText = "Sort by price";
  flightSortButton.appendChild(priceSortButton);
  priceSortButton.onclick = function() {
    console.log("CLICKED PRICE SORT", flights);
    sortFlights(flights, "price");
    displayFlights(displayHotels);
  }
  var journeySortButton = document.createElement('button');
  journeySortButton.type = 'button';
  journeySortButton.className = "btn btn-hg btn-primary";
  journeySortButton.innerText = "Sort by journey length";
  flightSortButton.appendChild(journeySortButton);
  journeySortButton.onclick = function() {
    sortFlights(flights, "journey time");
    displayFlights(displayHotels);
  }
}

var displayAccomSortButtons = function(flight) {
  var accomSortButtons = document.querySelector('#accomSortButtons');
  accomSortButtons.innerHTML = "";

  var priceSortButton = document.createElement('button');
    priceSortButton.type = 'button';
    priceSortButton.className = "btn btn-hg btn-primary";
    priceSortButton.innerText = "Sort by price";
    accomSortButtons.appendChild(priceSortButton);
    priceSortButton.onclick = function() {
      sortAccommodation(hotels, "price");
      displayHotels(flight);
  }

  var starsSortButton = document.createElement('button');
  starsSortButton.type = 'button';
  starsSortButton.className = "btn btn-hg btn-primary";
  starsSortButton.innerText = "Sort by stars";
  accomSortButtons.appendChild(starsSortButton);
  starsSortButton.onclick = function() {
    sortAccommodation(hotels, "stars");
    displayHotels(flight);
  }

  var showOnMap = document.createElement('button');
  showOnMap.type = 'button';
  showOnMap.className = "btn btn-hg btn-primary";
  showOnMap.innerText = "Show on Map";
  accomSortButtons.appendChild(showOnMap);
  showOnMap.onclick = function() {
    displayMap(flight, hotels);
  }

}

module.exports = {
  populateFlightsHotelsArray: populateFlightsHotelsArray,
  displayFlights: displayFlights,
  displayHotels: displayHotels
}