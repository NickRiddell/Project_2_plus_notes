var AccomView = require('./accommodation/accomView.js');
var FlightView = require('./flight/flightView.js');
var PackageView = require('./package/packageView.js');
var populateDropdown = require('./dropdowns.js').populateDropdown;
var sortAccommodation = require('./accommodation/sortAccommodation.js');
var sortFlights = require('./flight/sortFlights.js');
var displayMap = require('./maps/displayMap.js');
var flights = undefined;
var hotels = undefined; 

var userChoices = {
  outgoingFlight: undefined,
  returnFlight: undefined
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


    var createDisplayFunction = function(flight){
      var display = function(){
        
        userChoices.outgoingFlight = flight;
        console.log("(user choices) return flights: ", userChoices)
        populateDropdown("return-", "departure", flights, null, userChoices);
        populateDropdown("return-", "arrival", flights, null, userChoices);
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
      return display;
    }

    flightView.button.onclick = createDisplayFunction(flight);
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
    var minFlightPrice = document.querySelector('#return-min-flight-price-select');
    var maxFlightPrice = document.querySelector('#return-max-flight-price-select');
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


    var createDisplayFunction = function(flight){
      var display = function(){
        userChoices.returnFlight = flight;
        var accomPicker = document.querySelector('#accomPicker');
        accomPicker.style.display = "block";
        var goButton = document.querySelector('#accom-go')
        goButton.type = 'button';

        goButton.onclick = function(event){
          event.preventDefault();
          var rooms_dropdown = document.querySelector('#rooms-select');
          var nights_dropdown = document.querySelector('#nights-select');
          if(rooms_dropdown.selectedIndex != "0" && nights_dropdown.selectedIndex != "0"){
            displayHotels();
          }
        }
      }
      return display;
    }

    flightView.button.onclick = createDisplayFunction(flight);

  }
  displayReturnFlightSortButtons();
}

var displayHotels = function() {
  console.log("displaying hotels");
  var div = document.querySelector('#accomList');
  div.innerHTML = "";
  var arrivalSelect = document.querySelector("#arrival-select");
  var minAccomPrice = document.querySelector('#min-accom-price-select');
  var maxAccomPrice = document.querySelector('#max-accom-price-select');
  var city = arrivalSelect.value;
  console.log(city);
  console.log(arrivalSelect);
  
  console.log("HOTELS: ", hotels);
  for (var i = 0; i < hotels.length; i++) {
    var hotel = hotels[i];
    console.log("Hotel: " + hotel.name + i);
    hotel.rendered = false;
    console.log("Hotel: " + hotel.name + i);
    if (hotel.address.city == city && hotel.pricePerPerson >= minAccomPrice.value && hotel.pricePerPerson <= maxAccomPrice.value ) {
      console.log("Hotel: " + hotel.name + i);
      var view = new AccomView(hotel);
      console.log("Hotel: " + hotel.name + i);
      view.render(div);
      console.log("Hotel: " + hotel.name + i);
      // console.log("THE CURRENT HOTEL", hotel);
      console.log("Hotel: " + hotel.name + i);


      if(hotel.rendered){
        // var hotel = hotel;

        var createDisplayFunction = function(hotel){
          var display = function(){
            console.log("Hotel: " + hotel.name);
            userChoices.hotel = hotel;
            displayPackage(userChoices.outgoingFlight, userChoices.returnFlight, hotel);
          }
          return display;
        }

        view.button.onclick = createDisplayFunction(hotel);
        
      }
    }
    console.log("****NEW HOTEL****")
  }
  displayAccomSortButtons(userChoices.outgoingFlight);
}

var displayPackage = function(outgoingFlight, returnFlight, hotel) {
  var div = document.querySelector('#packageDetails');
  div.innerHTML = "";
  var view = new PackageView(outgoingFlight, returnFlight, hotel);
  view.render(div);

}

var displayFlightSortButtons = function() {
  var flightSortButton = document.querySelector('#flightSortButtons');
  flightSortButton.innerHTML = "";

  var priceSortButton = document.createElement('button');
  priceSortButton.type = 'button';
  priceSortButton.className = "btn btn-hg btn-primary sort";
  priceSortButton.innerText = "Sort by price";
  flightSortButton.appendChild(priceSortButton);
  priceSortButton.onclick = function() {
    console.log("CLICKED PRICE SORT", flights);
    sortFlights(flights, "price");
    displayFlights(displayHotels);
  }
  var journeySortButton = document.createElement('button');
  journeySortButton.type = 'button';
  journeySortButton.className = "btn btn-hg btn-primary sort";
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
  priceSortButton.className = "btn btn-hg btn-primary sort";
  priceSortButton.innerText = "Sort by price";
  flightSortButton.appendChild(priceSortButton);
  priceSortButton.onclick = function() {
    console.log("CLICKED PRICE SORT", flights);
    sortFlights(flights, "price");
    displayReturnFlights();
  }
  var journeySortButton = document.createElement('button');
  journeySortButton.type = 'button';
  journeySortButton.className = "btn btn-hg btn-primary sort";
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
  priceSortButton.className = "btn btn-hg btn-primary sort";
  priceSortButton.innerText = "Sort by price";
  accomSortButtons.appendChild(priceSortButton);
  priceSortButton.onclick = function() {
    sortAccommodation(hotels, "price");
    displayHotels(flight);
  }

  var starsSortButton = document.createElement('button');
  starsSortButton.type = 'button';
  starsSortButton.className = "btn btn-hg btn-primary sort";
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