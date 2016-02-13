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
	var Flight = __webpack_require__(2);
	
	var flights = [];
	
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
	
	window.onload = function(){
	var departure_dropdown = document.getElementById('departure-select');
	var arrival_dropdown = document.getElementById('arrival-select');
	
	  console.log('loaded');
	  var url = 'https://raw.githubusercontent.com/MichaelMacLeod/project_2/develop/flight_data.json';
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

/***/ },
/* 1 */
/***/ function(module, exports) {

	var AccomView = function(hotel){
	  this.name = document.createElement('h2');
	  this.name.innerText = hotel.name;
	
	  this.pricePerPerson = document.createElement('p');
	  this.pricePerPerson.innerText = hotel.pricePerPerson;
	
	  this.stars = document.createElement('p');
	  this.stars.innerText = hotel.stars;
	};
	
	AccomView.prototype = {
	  render: function(parent) {
	  parent.appendChild(this.name);
	  parent.appendChild(this.pricePerPerson);
	  parent.appendChild(this.stars);
	  }
	};
	
	module.exports = AccomView;

/***/ },
/* 2 */
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

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map