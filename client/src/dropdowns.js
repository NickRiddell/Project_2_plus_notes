var populateDropdown = function(selectID, flights, amount){
  if(flights){
    flightDropdown(selectID, flights);
  }else{
    numberDropdown(selectID, amount);
  }
}

var flightDropdown = function(selectID, flights){
  var select = document.querySelector("#" + selectID + "-select");
  var names = [];
  for (var i = 0; i < flights.length; i++) {
    var flight = flights[i];
    if(!names.includes(flight[selectID])){
      var option = document.createElement("option");
      option.innerText = flight[selectID];
      select.appendChild(option);
      names.push(flight[selectID]);
    }
  }
}

var numberDropdown = function(selectID, amount){
  console.log(selectID);
  var select = document.querySelector("#" + selectID + "-select");
  for (var i = 0; i < amount; i++) {
    var option = document.createElement("option");
    option.innerText = i + 1;
    select.appendChild(option);
  }
}

var populateFlightMinMaxDropdown = function(selectID, amount){
  console.log(selectID);
  var select = document.querySelector("#" + selectID + "-select");
  for (var i = 0; i <= amount; i+=100) {
    var option = document.createElement("option");
    option.innerText = i;
    select.appendChild(option);
  }
}

var populateAccomMinMaxDropdown = function(selectID, amount){
  console.log(selectID);
  var select = document.querySelector("#" + selectID + "-select");
  for (var i = 0; i <= amount; i+=10) {
    var option = document.createElement("option");
    option.innerText = i;
    select.appendChild(option);
  }
}

module.exports = {
  populateDropdown,
  populateFlightMinMaxDropdown,
  populateAccomMinMaxDropdown
}











