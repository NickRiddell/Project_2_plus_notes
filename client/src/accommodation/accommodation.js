var Accommodation = function(name, pricePerPerson, rooms, stars, address) {
  this.name = name;
  this.pricePerPerson = pricePerPerson;
  this.rooms = rooms;
  this.stars = stars;
  this.address = address;
  // this.bookings = [];
}

Accommodation.prototype = {
  bookRoom: function(rooms) {
    if(rooms <= this.rooms) {
      this.rooms -= rooms
    }
    else(console.log("Not enough rooms"))
  },
  isAvailable: function(desiredRooms) {
    if (desiredRooms > this.rooms) {
      return(false); 
    }else{
      return(true);
    }
  }
}
 
module.exports = Accommodation;