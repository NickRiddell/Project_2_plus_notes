var populateDropdown = function(returnID, selectID, flights, amount){
  if(flights){
    flightDropdown(returnID, selectID, flights);
  }else{
    numberDropdown(returnID, selectID, amount);
  }
}

var flightDropdown = function(returnID, selectID, flights){
  var select = document.querySelector("#" + returnID + selectID + "-select");
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

var numberDropdown = function(returnID, selectID, amount){
  console.log(selectID);
  var select = document.querySelector("#" + returnID + selectID + "-select");
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

    selectElement(0, 'min-flight-price-select');
    selectElement(1000, 'max-flight-price-select');
  }
}

var populateAccomMinMaxDropdown = function(selectID, amount){
  console.log(selectID);
  var select = document.querySelector("#" + selectID + "-select");
  for (var i = 0; i <= amount; i+=10) {
    var option = document.createElement("option");
    option.innerText = i;
    select.appendChild(option);

    selectElement(0, 'min-accom-price-select');
    selectElement(200, 'max-accom-price-select');
  }
}

var selectElement = function(valueToSelect, selected) {    
  var element = document.getElementById(selected);
  element.value = valueToSelect;
}

module.exports = {
  populateDropdown,
  populateFlightMinMaxDropdown,
  populateAccomMinMaxDropdown
}











