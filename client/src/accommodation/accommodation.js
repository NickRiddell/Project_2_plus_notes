var Accommodation = function() {
  this.name = String;
  this.pricePerPerson = Number;
  this.rooms = Number;
  this.stars = Number;
  this.address = {};
  this.bookings = [];
}

Accommodation.prototype = {
  bookRoom: function(rooms) {
    if(rooms <= this.rooms) {
      this.rooms -= rooms
    }
    else(console.log("Not enough rooms"))
  }
}
 
module.exports = Accommodation;