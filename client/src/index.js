var AccomView = require('./accommodation/accomView.js');
var FlightView = require('./flight/flightView.js');
var sortAccommodation = require('./accommodation/sortAccommodation.js');
var sortFlights = require('./flight/sortFlights.js');
var getData = require('./getData.js');

var flights = [];
var hotels = [];

var displayFlights = function(displayHotels) {
  console.log("button clicked");
  var div = document.querySelector('#flightList');
  div.innerHTML = "";
  var filteredArray = flights.filter(function(flight) {
    var arrivalSelect = document.querySelector("#arrival-select");
    var departureSelect = document.querySelector("#departure-select");
    var dateSelect = document.querySelector("#date-input")
    console.log(dateSelect.value);
    if (flight.departure == departureSelect.value && flight.arrival == arrivalSelect.value && new Date(flight.departing).toDateString() === new Date(dateSelect.value).toDateString() ) {
      return true
    }else{
      return false
    }
  });
  for (var i = 0; i < filteredArray.length; i++) {
    var flight = filteredArray[i];
    var flightView = new FlightView(flight);
    flightView.render(div);
    flightView.button.onclick = displayHotels;
  }
  displayFlightSortButtons();
}


window.onload = function(){
var departure_dropdown = document.getElementById('departure-select');
var arrival_dropdown = document.getElementById('arrival-select');



  console.log('loaded');

  getData(flights, hotels, function(){
    console.log("flights: ", flights);
    var goButton = document.querySelector('#go')
    goButton.type = 'button';
    goButton.onclick = function(event){
      event.preventDefault();
      displayFlights(displayHotels);
    }
  });


  var displayHotels = function() {
    console.log("displaying hotels");
    var div = document.querySelector('#accomList');
    div.innerHTML = "";
    var arrivalSelect = document.querySelector("#arrival-select");
    var city = arrivalSelect.value;
    console.log(city);
    console.log(arrivalSelect);
    
    for (var i = 0; i < hotels.length; i++) {
      var hotel = hotels[i];
      if (hotel.address.city == city) {
        var view = new AccomView(hotel);
        view.render(div);
      }
    }
    displayAccomSortButtons();
    console.log(hotels);
  }

  var displayAccomSortButtons = function() {
    var accomSortButton = document.querySelector('#accomSortButtons');
    accomSortButton.innerHTML = "";

    var priceSortButton = document.createElement('button');
    priceSortButton.type = 'button';
    priceSortButton.className = "btn btn-hg btn-primary";
    priceSortButton.innerText = "Sort by price";
    accomSortButton.appendChild(priceSortButton);
    priceSortButton.onclick = function() {
      sortAccommodation(hotels, "price");
      displayHotels();
    }
    var starsSortButton = document.createElement('button');
    starsSortButton.type = 'button';
    starsSortButton.className = "btn btn-hg btn-primary";
    starsSortButton.innerText = "Sort by stars";
    accomSortButton.appendChild(starsSortButton);
    starsSortButton.onclick = function() {
      sortAccommodation(hotels, "stars");
      displayHotels();
    }
  }
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
    sortFlights(flights, "price");
    displayFlights();
  }
  var journeySortButton = document.createElement('button');
  journeySortButton.type = 'button';
  journeySortButton.className = "btn btn-hg btn-primary";
  journeySortButton.innerText = "Sort by journey length";
  flightSortButton.appendChild(journeySortButton);
  journeySortButton.onclick = function() {
    sortFlights(flights, "journey time");
    displayFlights();
  }
}