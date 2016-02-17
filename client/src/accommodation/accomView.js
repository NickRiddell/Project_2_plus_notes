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

  this.button = document.createElement('button');
  this.button.className = "btn btn-hg btn-primary";
  this.button.innerText = "Choose Accommodation";
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
  accomDiv.appendChild(this.button);
  parent.appendChild(accomDiv);
  this.hotel.rendered = true;
  }
};


module.exports = AccomView;