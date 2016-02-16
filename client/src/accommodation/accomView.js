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
  var roomsSelect = document.querySelector("#rooms-select")
  if (!this.hotel.isAvailable(roomsSelect.value)){return};
  var accomDiv = document.createElement("div");
  accomDiv.className = "hotel";
  accomDiv.appendChild(this.name);
  accomDiv.appendChild(this.pricePerPerson);
  accomDiv.appendChild(this.stars);
  accomDiv.appendChild(this.rooms);
  parent.appendChild(accomDiv);
  
  }
};


module.exports = AccomView;