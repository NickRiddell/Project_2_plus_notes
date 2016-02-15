var Flight = function(departureTZ, arrivalTZ, departure, arrival, departing, arriving, price){
  this.departureTZ = departureTZ;
  this.arrivalTZ = arrivalTZ;
  this.departure = departure;
  this.arrival = arrival;
  this.departing = this.convertDateString(departing);
  this.arriving = this.convertDateString(arriving);
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
  }
}

module.exports = Flight;