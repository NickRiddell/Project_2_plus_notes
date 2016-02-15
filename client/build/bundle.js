/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var AccomView = __webpack_require__(1);
	var Accommodation = __webpack_require__(2);
	var Flight = __webpack_require__(3);
	var FlightView = __webpack_require__(4);
	
	
	var flights = [];
	var hotels = [];
	
	var selectedValues = {
	  roomsWanted: 0,
	  nights: 0,
	  arrival: 0
	}
	
	
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
	    flightView.button.onclick = displayHotels;
	  }
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
	      for (var i = 0; i < appData.hotels.length; i++) {
	        var hotelData = appData.hotels[i];
	        var hotel = new Accommodation(
	          hotelData.name,
	          hotelData.pricePerPerson,
	          hotelData.rooms,
	          hotelData.stars,
	          hotelData.address
	        );
	        console.log(hotel);
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
	    for (var i = 0; i < hotels.length; i++) {
	      var hotel = hotels[i];
	      if (hotel.address.city == city) {
	        var view = new AccomView(hotel);
	        view.render(div);
	      }
	    }
	    console.log(hotels);
	  }
	}

/***/ },
/* 1 */
/***/ function(module, exports) {

	var AccomView = function(hotel){
	  this.hotel = hotel;
	
	  this.name = document.createElement('h2');
	  this.name.innerText = hotel.name;
	
	  this.pricePerPerson = document.createElement('p');
	  this.pricePerPerson.innerText = "£" +hotel.pricePerPerson;
	
	  this.stars = document.createElement('p');
	  this.stars.innerText = "Stars: " +hotel.stars;
	
	  this.rooms = document.createElement('p');
	  this.rooms.innerText = "Rooms: " + hotel.rooms;
	
	
	  // this.bookings = document.createElement('p');
	  // this.bookings.innerText = "Room availability: " + hotel.bookings;
	
	
	};
	
	AccomView.prototype = {
	  render: function(parent) {
	  console.log(this.hotel);
	  var roomsSelect = document.querySelector("#rooms-select")
	
	  if (!this.hotel.isAvailable(roomsSelect.value)){return};
	  parent.appendChild(this.name);
	  parent.appendChild(this.pricePerPerson);
	  parent.appendChild(this.stars);
	  parent.appendChild(this.rooms);
	  
	  }
	};
	
	module.exports = AccomView;

/***/ },
/* 2 */
/***/ function(module, exports) {

	var Accommodation = function(name, pricePerPerson, rooms, stars, address) {
	  this.name = name;
	  this.pricePerPerson = pricePerPerson;
	  this.rooms = rooms;
	  this.stars = stars;
	  this.address = address;
	  // this.bookings = [];
	}
	
	Accommodation.prototype = {
	  bookRoom: function(rooms) {
	    if(rooms <= this.rooms) {
	      this.rooms -= rooms
	    }
	    else(console.log("Not enough rooms"))
	  },
	  isAvailable: function(desiredRooms) {
	    if (desiredRooms > this.rooms) {
	      return(false); 
	    }else{
	      return(true);
	    }
	  }
	}
	 
	module.exports = Accommodation;

/***/ },
/* 3 */
/***/ function(module, exports) {

	var Flight = function(departure, arrival, departing, arriving, price){
	  this.departure = departure;
	  this.arrival = arrival;
	  this.departing = new Date(this.convertDate(departing));
	  this.arriving = new Date(this.convertDate(arriving));
	  this.price = price;
	}
	
	Flight.prototype = {
	  convertDate: function(date){
	    if(!date)return;
	    var newDate = "";
	
	    newDate += date.substring(6, 10) + "-";
	    newDate += date.substring(3, 5) + "-";
	    newDate += date.substring(0, 2);
	    newDate += date.substring(11, 20);
	    return(newDate);
	  }
	}
	
	module.exports = Flight;

/***/ },
/* 4 */
/***/ function(module, exports) {

	var FlightView = function(flight){
	  this.title = document.createElement('h2');
	  this.title.innerText = flight.departure + "-" + flight.arrival;
	
	  this.times = document.createElement('p');
	  this.times.innerHTML = "Departure: " + flight.departing + "<br>" + "Arrival: " + flight.arriving;
	
	  this.price = document.createElement('p');
	  this.price.innerText = "£" + flight.price;
	
	  this.button = document.createElement('button');
	  this.button.innerText = "Choose Flight";
	};
	
	FlightView.prototype = {
	  render: function(parent) {
	  parent.appendChild(this.title);
	  parent.appendChild(this.times);
	  parent.appendChild(this.price);
	  parent.appendChild(this.button);
	  }
	};
	
	module.exports = FlightView;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map