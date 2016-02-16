// sortAccommodation should go inside displayHotels function in index.js (just before for loop - this file should be required by index.js)

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

var hotels=[];
hotels[0]={name:"CCC", pricePerPerson:32, stars: 3};
hotels[1]={name:"BBB", pricePerPerson:17, stars: 2};
hotels[2]={name:"AAA", pricePerPerson:58, stars: 1};
hotels[3]={name:"DDD", pricePerPerson:62, stars: 4};

var sorted = sortAccommodation(hotels, "price");
console.log(sorted);
sorted = sortAccommodation(hotels, "stars");
console.log(sorted);