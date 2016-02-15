var AccomView = function(hotel){
  this.name = document.createElement('h2');
  this.name.innerText = hotel.name;

  this.pricePerPerson = document.createElement('p');
  this.pricePerPerson.innerText = "£" +hotel.pricePerPerson;

  this.stars = document.createElement('p');
  this.stars.innerText = "Stars: " +hotel.stars;

  this.rooms = document.createElement('p');
  this.rooms.innerText = "Rooms available: " + hotel.rooms;

};

AccomView.prototype = {
  render: function(parent) {
  parent.appendChild(this.name);
  parent.appendChild(this.pricePerPerson);
  parent.appendChild(this.stars);
  parent.appendChild(this.rooms);

  }
};

module.exports = AccomView;