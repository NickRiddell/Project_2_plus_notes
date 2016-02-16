var sortFlights = function(flights, sortBy) {
  if (sortBy === "price") {
    flights.sort(function(a, b) {
     return a.price-b.price;
    })
    return flights;
  }
  else if (sortBy === "journey time") {
    // hotels.sort(function(a, b) {
    //  return b.stars-a.stars;
    // })
    // return flights;
  };
}

module.exports = sortFlights;