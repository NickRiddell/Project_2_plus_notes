var PackageView = function(outgoingFlight, returnFlight, hotel){
  this.hotel = hotel;
  this.outgoingFlight = outgoingFlight;
  this.returnFlight = returnFlight;

  var passengerSelect = document.querySelector("#passengers-select");
  var nightsSelect = document.querySelector("#nights-select");
  var roomsSelect = document.querySelector("#rooms-select");
  var flightTotal = (outgoingFlight.price * passengerSelect.value) + (returnFlight.price * passengerSelect.value);
  console.log("****", hotel.pricePerPerson);
  console.log("****", nightsSelect.value);
  console.log("****", roomsSelect.value);
  var accomTotal = hotel.pricePerPerson * nightsSelect.value * roomsSelect.value;
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