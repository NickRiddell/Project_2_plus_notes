var moment = require('moment-timezone');

var Flight = function(departureTZ, arrivalTZ, departure, departureLatLng, arrival, arrivalLatLng, departing, arriving, stopover, price){
  this.departureTZ = departureTZ;
  this.arrivalTZ = arrivalTZ;
  this.departure = departure;
  this.departureLatLng = departureLatLng;
  this.arrival = arrival;
  this.arrivalLatLng = arrivalLatLng;
  this.departing = this.convertDateString(departing);
  this.arriving = this.convertDateString(arriving);
  this.stopover = stopover;
  this.price = price;
}

Flight.prototype = {
  convertDateString: function(date){
    if(!date)return;
    var newDate = "";

    newDate += date.substring(6, 10) + "-";
    newDate += date.substring(3, 5) + "-";
    newDate += date.substring(0, 2);
    newDate += date.substring(11, 20);
    newDate += "Z";
    console.log("passed in date: ", newDate);
    return(newDate);
  },
  duration: function() {
    var departDate = moment(this.departing);
    var arriveDate = moment(this.arriving);
    return(arriveDate.diff(departDate));
  }
}

module.exports = Flight;