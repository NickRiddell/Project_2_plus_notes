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