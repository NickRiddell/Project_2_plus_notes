var AccomView = require('./accommodation/accomView.js');
var FlightView = require('./flight/flightView.js');
var sortAccommodation = require('./accommodation/sortAccommodation.js');
var sortFlights = require('./flight/sortFlights.js');
var displayMap = require('./maps/displayMap.js');
var flights = undefined;
var hotels = undefined; 

var userChoices = {
  outgoingFlight: undefined
}

var populateFlightsHotelsArray = function(flightsArray, hotelsArray){
  console.log("Start FLIGHTS HOTELS", flights, hotels);
  flights = flightsArray;
  hotels = hotelsArray;
  console.log("END FLIGHTS HOTELS", flights, hotels);
}

var displayFlights = function() {
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
    flightView.button.onclick = function(){
      userChoices.outgoingFlight = flight;
      // displayHotels(flight);
      var returnFlightDiv = document.querySelector("#returnFlightPicker");
      returnFlightDiv.style.display = "block";
      var departure_dropdown = document.getElementById('return-departure-select');
      var arrival_dropdown = document.getElementById('return-arrival-select');
      var goButton = document.querySelector('#return-go')
      goButton.type = 'button';
      goButton.onclick = function(event){
        event.preventDefault();
        if(departure_dropdown.selectedIndex != "0" && arrival_dropdown.selectedIndex != "0" && document.querySelector("#return-date-input").value !=""){
          console.log(document.querySelector('#return-date-input').value);
          // displayFlights(displayHotels);
          displayReturnFlights();
        }
      }
    }
  }
  displayFlightSortButtons();
}


var displayReturnFlights = function() {
  console.log("button clicked");
  var div = document.querySelector('#returnFlightList');
  div.innerHTML = "";
  var filteredArray = flights.filter(function(flight) {
    var arrivalSelect = document.querySelector("#return-arrival-select");
    var departureSelect = document.querySelector("#return-departure-select");
    var dateSelect = document.querySelector("#return-date-input")
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
    flightView.button.onclick = function(){
      displayHotels(flight);
    }
  }
  displayReturnFlightSortButtons();
}

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
    hotel.rendered = false;
    if (hotel.address.city == city) {
      var view = new AccomView(hotel);
      view.render(div);
    }
  }
  displayAccomSortButtons(userChoices.outgoingFlight);
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

var displayReturnFlightSortButtons = function() {
  var flightSortButton = document.querySelector('#returnFlightSortButtons');
  flightSortButton.innerHTML = "";

  var priceSortButton = document.createElement('button');
  priceSortButton.type = 'button';
  priceSortButton.className = "btn btn-hg btn-primary";
  priceSortButton.innerText = "Sort by price";
  flightSortButton.appendChild(priceSortButton);
  priceSortButton.onclick = function() {
    console.log("CLICKED PRICE SORT", flights);
    sortFlights(flights, "price");
    displayReturnFlights();
  }
  var journeySortButton = document.createElement('button');
  journeySortButton.type = 'button';
  journeySortButton.className = "btn btn-hg btn-primary";
  journeySortButton.innerText = "Sort by journey length";
  flightSortButton.appendChild(journeySortButton);
  journeySortButton.onclick = function() {
    sortFlights(flights, "journey time");
    displayReturnFlights();
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