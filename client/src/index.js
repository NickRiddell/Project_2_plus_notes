var AccomView = require('./accommodation/accomView.js');
var Flight = require('./flight/flight.js');
var FlightView = require('./flight/flightView.js');


var flights = [];

var displayDepartureDropdown = function(flights) {
  names = [];
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
  names = [];
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

var displayFlights = function(callback) {
  console.log("button clicked");
  var div = document.querySelector('#flightList');
  div.innerHTML = "";
  var filteredArray = flights.filter(function(flight) {
    var arrivalSelect = document.querySelector("#arrival-select");
    var departureSelect = document.querySelector("#departure-select");
    var dateSelect = document.querySelector("#date-input")
    console.log(dateSelect.value);
    if (flight.departure == departureSelect.value && flight.arrival == arrivalSelect.value && flight.departing.toDateString() === new Date(dateSelect.value).toDateString() ) {
      return true
    }else{
      return false
    }
  });
  for (var i = 0; i < filteredArray.length; i++) {
    var flight = filteredArray[i];
    var flightView = new FlightView(flight);
    flightView.render(div);
  }
  callback();
}

window.onload = function(){
var departure_dropdown = document.getElementById('departure-select');
var arrival_dropdown = document.getElementById('arrival-select');

  var button = document.querySelector('#go')
  button.type = 'button';
  button.onclick = function(){
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
      console.log(appData);

      for (var i = 0; i < appData.flights.length; i++) {
        var flightData = appData.flights[i];
        var flight = new Flight(
          flightData.departure,
          flightData.arrival,
          flightData.departing,
          flightData.arriving,
          flightData.price
        );
        flights.push(flight);
      }

      displayDepartureDropdown(flights);
      displayArrivalDropdown(flights);


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
    for (var i = 0; i < appData.hotels.length; i++) {
      var hotel = appData.hotels[i];
      if (hotel.address.city == city) {
        var view = new AccomView(hotel);
        view.render(div);
      }
    }
  }
}