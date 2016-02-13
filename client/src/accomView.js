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