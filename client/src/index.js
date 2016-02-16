var AccomView = require('./accommodation/accomView.js');
var Accommodation = require('./accommodation/accommodation.js');
var Flight = require('./flight/flight.js');
var FlightView = require('./flight/flightView.js');
var sortAccommodation = require('./accommodation/sortAccommodation.js');


var flights = [];
var hotels = [];

var displayDepartureDropdown = function(flights) {
  var names = [];
  var select = document.querySelector("#departure-select");
  for (var i = 0; i < flights.length; i++) {
    var flight = flights[i];
    if(!names.includes(flight.departure)){
      var option = document.createElement("option");
      option.innerText = flight.departure;
      select.appendChild(option);
      names.push(flight.departure);
    }
  }
}

var displayArrivalDropdown = function(flights) {
  var names = [];
  var select = document.querySelector("#arrival-select");
  for (var i = 0; i < flights.length; i++) {
    var flight = flights[i];
    if(!names.includes(flight.arrival)){
      var option = document.createElement("option");
      option.innerText = flight.arrival;
      select.appendChild(option);
      names.push(flight.arrival);
    }
  }
}

var displayPassengerDropdown = function() {
  var select = document.querySelector("#passenger-select");
  for (var i = 1; i < 21; i++) {
    var option = document.createElement("option");
    option.innerText = i;
    select.appendChild(option);
  };
}

var displayNightsDropdown = function() {
  var select = document.querySelector("#nights-select");
  for (var i = 1; i < 22; i++) {
    var option = document.createElement("option");
    option.innerText = i;
    select.appendChild(option);
  };
}

var displayRoomsDropdown = function() {
  var select = document.querySelector("#rooms-select");
  for (var i = 1; i < 21; i++) {
    var option = document.createElement("option");
    option.innerText = i;
    select.appendChild(option);
  };
}

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
}


window.onload = function(){
var departure_dropdown = document.getElementById('departure-select');
var arrival_dropdown = document.getElementById('arrival-select');

  var button = document.querySelector('#go')
  button.type = 'button';
  button.onclick = function(event){
    event.preventDefault();
    displayFlights(displayHotels);
  }


  console.log('loaded');
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
          flightData.arrival,
          flightData.departing,
          flightData.arriving,
          flightData.price
        );
        flights.push(flight);
      }
      for (var i = 0; i < appData.hotels.length; i++) {
        var hotelData = appData.hotels[i];
        var hotel = new Accommodation(
          hotelData.name,
          hotelData.pricePerPerson,
          hotelData.rooms,
          hotelData.stars,
          hotelData.address
        );
        hotels.push(hotel);
      }


      displayDepartureDropdown(flights);
      displayArrivalDropdown(flights);
      displayPassengerDropdown();
      displayNightsDropdown();
      displayRoomsDropdown();


    }
  }
  request.send(null)

  var displayHotels = function() {
    console.log("displaying hotels");
    var div = document.querySelector('#accomList');
    div.innerHTML = "";
    var arrivalSelect = document.querySelector("#arrival-select");
    var city = arrivalSelect.value;
    console.log(city);
    console.log(arrivalSelect);
    displaySortButtons();
    for (var i = 0; i < hotels.length; i++) {
      var hotel = hotels[i];
      if (hotel.address.city == city) {
        var view = new AccomView(hotel);
        view.render(div);
      }
    }
    console.log(hotels);
  }

  var displaySortButtons = function() {
    var priceSortButton = document.querySelector('#accomSortButtons');
    priceSortButton.type = 'button';
    priceSortButton.className = "btn btn-hg btn-primary";
    priceSortButton.innerText = "Sort by stars";
    priceSortButton.onclick = function() {
      sortAccommodation(hotels, "stars");
      displayHotels();
    }
  }
}