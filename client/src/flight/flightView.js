var momentString = require('./momentString');

var FlightView = function(flight){
  this.title = document.createElement('h2');
  this.title.innerText = flight.departure + "-" + flight.arrival;

  this.times = document.createElement('p');
  this.times.innerHTML = "Departure: " + momentString(flight.departing, flight.departureTZ) + "<br>" + "Arrival: " + momentString(flight.arriving, flight.arrivalTZ);

  // this.times = document.createElement('p');
  // this.times.innerHTML = "Departure: " + flight.departing + "<br>" + "Arrival: " + flight.arriving;

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