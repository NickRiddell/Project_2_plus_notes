var FlightView = function(flight){
  this.title = document.createElement('h2');
  this.title.innerText = flight.departure + "-" + flight.arrival;

  this.times = document.createElement('p');
  this.times.innerText = flight.departing + "-" + flight.arriving;

  this.price = document.createElement('p');
  this.price.innerText = flight.price;
};

FlightView.prototype = {
  render: function(parent) {
  parent.appendChild(this.title);
  parent.appendChild(this.times);
  parent.appendChild(this.price);
  }
};

module.exports = FlightView;