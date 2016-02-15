var AccomView = function(hotel){
  this.name = document.createElement('h2');
  this.name.innerText = hotel.name;

  this.pricePerPerson = document.createElement('p');
  this.pricePerPerson.innerText = "£" +hotel.pricePerPerson;

  this.stars = document.createElement('p');
  this.stars.innerText = "Stars: " +hotel.stars;

  this.rooms = document.createElement('p');
  this.rooms.innerText = "Rooms: " + hotel.rooms;

  var button = document.createElement('button');

  // this.bookings = document.createElement('p');
  // this.bookings.innerText = "Room availability: " + hotel.bookings;


};

AccomView.prototype = {
  render: function(parent) {
  parent.appendChild(this.name);
  parent.appendChild(this.pricePerPerson);
  parent.appendChild(this.stars);
  parent.appendChild(this.rooms);
  // parent.appendChild(this.bookings);
  }
};

module.exports = AccomView;