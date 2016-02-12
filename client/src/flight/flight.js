var Flight = function(departure, arrival, departing, arriving, price){
  this.departure = departure;
  this.arrival = arrival;
  this.departing = new Date(this.convertDate(departing));
  this.arriving = new Date(this.convertDate(arriving));
}

Flight.prototype = {
  convertDate: function(date){
    if(!date)return;
    var newDate = "";

    newDate += date.substring(6, 10) + "-";
    newDate += date.substring(3, 5) + "-";
    newDate += date.substring(0, 2);
    newDate += date.substring(11, 20);
    return(newDate);
  }
}

module.exports = Flight;