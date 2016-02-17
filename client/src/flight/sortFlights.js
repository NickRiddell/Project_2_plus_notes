var sortFlights = function(flights, sortBy) {
  if (sortBy === "price") {
    flights.sort(function(a, b) {
     return a.price-b.price;
    })
  }
  else if (sortBy === "journey time") {
    flights.sort(function(a, b) {
      var aStartTime = new Date(a.departing);
      var aStartTimeUTC = aStartTime.getTime() + aStartTime.getTimezoneOffset()*60000;
      var aEndTime = new Date(a.arriving);
      var aEndTimeUTC = aEndTime.getTime() + aEndTime.getTimezoneOffset()*60000;
      var aJourneyTime = aEndTimeUTC - aStartTimeUTC;
      var aJourneyTimeHours = aJourneyTime/(60*60*1000);
      console.log("a's journey time: ", aJourneyTimeHours);
      var bStartTime = new Date(b.departing);
      var bStartTimeUTC = bStartTime.getTime() + bStartTime.getTimezoneOffset()*60000;
      var bEndTime = new Date(b.arriving);
      var bEndTimeUTC = bEndTime.getTime() + bEndTime.getTimezoneOffset()*60000;
      var bJourneyTime = bEndTimeUTC - bStartTimeUTC;
      var bJourneyTimeHours = bJourneyTime/(60*60*1000);
      console.log("b's journey time: ", bJourneyTimeHours);
      return aJourneyTime-bJourneyTime;
    })  
  }

  // filter for min and max requested flight prices
  var filteredFlights = flights.filter(byMinAndMaxPrice);
  return filteredFlights;
}

var byMinAndMaxPrice = function(obj) {
  return (obj.price >= minFlightPrice) && (obj.price <= maxFlightPrice);
}

module.exports = sortFlights;

var minFlightPrice = 17;
var maxFlightPrice = 60;
var flights=[];
flights[0]={name:"CCC", price:32, departing: "2016-03-28T08:00:00Z", arriving: "2016-03-29T10:00:00Z"};
flights[1]={name:"BBB", price:17, departing: "2016-03-28T12:00:00Z", arriving: "2016-03-29T13:00:00Z"};
flights[2]={name:"AAA", price:58, departing: "2016-03-28T10:00:00Z", arriving: "2016-03-29T11:00:00Z"};
flights[3]={name:"DDD", price:62, departing: "2016-03-28T04:00:00Z", arriving: "2016-03-29T06:00:00Z"};

var sorted = sortFlights(flights, "price");
console.log("Sorted by price", sorted);
sorted = sortFlights(flights, "journey time");
console.log("Sorted by journey time",sorted);

