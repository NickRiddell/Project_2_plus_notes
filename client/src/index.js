var AccomView = require('./accomView.js');

var displayDepartureDropdown = function(flights) {
  console.log(flights);
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

var displayHotelsDropdown = function(hotels) { 
  names = [];
  var select = document.querySelector("#hotels-select");
  for (var i = 0; i < hotels.length; i++) {
    var hotel = hotels[i];
    if(!names.includes(hotel.name)){
      var option = document.createElement("option");
      option.innerText = hotel.name;
      select.appendChild(option);
      names.push(hotel.name);
    }
  }
}

window.onload = function(){
var departure_dropdown = document.getElementById('departure-select');
var arrival_dropdown = document.getElementById('arrival-select');

  console.log('loaded');
  var url = 'https://raw.githubusercontent.com/MichaelMacLeod/project_2/master/flight_data.json';
  var request = new XMLHttpRequest();
  request.open('GET', url);

  request.onload = function() {
    if (request.status === 200) { 
      console.log("Got the DATA");
      appData = JSON.parse(request.responseText); 
      console.log(appData);
      displayDepartureDropdown(appData.flights);
      displayArrivalDropdown(appData.flights);
    }
  }
  request.send(null)

  arrival_dropdown.onchange = function(event) {
    var div = document.querySelector('#accomList');
    div.innerHTML = "";
    var city = this.value;
    for (var i = 0; i < appData.hotels.length; i++) {
      var hotel = appData.hotels[i];
      if (hotel.address.city == city) {
        var view = new AccomView(hotel);
        view.render(div);
      }
    }
  }
}