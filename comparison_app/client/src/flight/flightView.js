var momentString = require('./momentString');
var moment = require('moment-timezone');

var FlightView = function(flight){
  this.flight = flight;
  this.title = document.createElement('h2');
  this.title.innerText = flight.departure + "-" + flight.arrival;
  this.times = document.createElement('p');
  this.times.innerHTML = "Departure: " + momentString(flight.departing, flight.departureTZ) + "<br>" + "Arrival: " + momentString(flight.arriving, flight.arrivalTZ);
  this.price = document.createElement('p');
  this.price.innerText = "£" + flight.price;

  var durationTime = moment.duration(flight.duration());
  this.duration = document.createElement('p');
  this.duration.innerText = "Journey time: " + durationTime.asHours() + " hours";

  this.button = document.createElement('button');
  this.button.className = "btn btn-hg btn-primary";
  this.button.innerText = "Choose Flight";
};


FlightView.prototype = {
  render: function(parent) {
    var flightDiv = document.createElement("div");
    flightDiv.className = "flight";
    flightDiv.appendChild(this.title);
    flightDiv.appendChild(this.times);
    flightDiv.appendChild(this.price);
    flightDiv.appendChild(this.duration);
    flightDiv.appendChild(this.button);
    parent.appendChild(flightDiv);
  }
};




module.exports = FlightView;