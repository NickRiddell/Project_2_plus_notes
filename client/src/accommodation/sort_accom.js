var sortAccommodation = function(hotels, sortBy) {
  if (sortBy === "price") {
    hotels.sort(function(a, b) {
    return a.pricePerPerson-b.pricePerPerson;
    })
    return hotels;
  }
  else if (sortBy === "stars") {
    hotels.sort(function(a, b) {
    return b.stars-a.stars;
    })
    return hotels;
  };
}

module.exports = sortAccommodation;