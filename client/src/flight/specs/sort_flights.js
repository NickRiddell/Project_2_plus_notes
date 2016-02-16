var sortFlights = function(flights, sortBy) {
  if (sortBy === "price") {
    flights.sort(function(a, b) {
    return a.price-b.price;
    })
    return flights;
  };
}

module.exports = sortFlights;