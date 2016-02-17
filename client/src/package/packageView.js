var PackageView = function(flight, hotel){
  this.hotel = hotel;
  this.flight = flight;

  var passengerSelect = document.querySelector("#passengers-select");
  var nightsSelect = document.querySelector("#nights-select");
  var flightTotal = flight.price * passengerSelect.value;
  var accomTotal = hotel.pricePerPerson * nightsSelect.value * passengerSelect.value;
  console.log("Package before discount: ", flightTotal + accomTotal);
  var discount = Math.floor((flightTotal + accomTotal) * 15/100);
  console.log("Package discount: ", discount);
  var packageTotal = (flightTotal + accomTotal) - discount;
  console.log("Package total: ", packageTotal);

  this.headline = document.createElement('h1');
  this.headline.innerText = "Package Deal"

  this.flightAmount = document.createElement('p');
  this.flightAmount.innerText = "Your flight total: £ " +flightTotal;

  this.hotelAmount = document.createElement('p');
  this.hotelAmount.innerText = "Your hotel total: £ " + accomTotal;

  this.discountAmount = document.createElement('p');
  this.discountAmount.innerText = "Your discount: £" + discount;

  this.packageAmount = document.createElement('p');
  this.packageAmount.innerText = "Your total: £ " + packageTotal;

};

PackageView.prototype = {
  render: function(parent) {
  var packageDiv = document.createElement("div");
  packageDiv.className = "package";
  packageDiv.appendChild(this.headline);
  packageDiv.appendChild(this.flightAmount);
  packageDiv.appendChild(this.hotelAmount);
  packageDiv.appendChild(this.discountAmount);
  packageDiv.appendChild(this.packageAmount);
  parent.appendChild(packageDiv);
  }
};


module.exports = PackageView;