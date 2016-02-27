var populateDropdown = function(returnID, selectID, flights, amount, userChoices){
  if(flights){
    flightDropdown(returnID, selectID, flights, userChoices);
  }else{
    numberDropdown(returnID, selectID, amount);
  }
}

var flightDropdown = function(returnID, selectID, flights, userChoices){
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

  if(userChoices){
    console.log("SELECTID: ", selectID);
    if(selectID == "departure"){
      select.selectedIndex = names.indexOf(userChoices.outgoingFlight.arrival) + 1;
    }else{
      console.log("set arrival to flight.departure");
      console.log("NAMES: ", names);
      console.log("outgoing flight", userChoices.outgoingFlight)
      select.selectedIndex = names.indexOf(userChoices.outgoingFlight.departure) + 1;
    }

    setDefaultReturnSelectElement(select, userChoices)
  }

}

var setDefaultReturnSelectElement = function(select, userChoices){

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
    selectElement(selectID + "-select");
  }
}

var populateAccomMinMaxDropdown = function(selectID, amount){
  console.log(selectID);
  var select = document.querySelector("#" + selectID + "-select");
  for (var i = 0; i <= amount; i+=10) {
    var option = document.createElement("option");
    option.innerText = i;
    select.appendChild(option);

    selectElement(selectID + "-select");
  }
}

var selectElement = function(selected) {    
  var element = document.getElementById(selected);
  console.log("THE ELEMENT: ", element);
  if(selected == 'min-accom-price-select' || selected == 'min-flight-price-select' || selected == 'return-min-flight-price-select'){
    element.selectedIndex = 1;
    console.log("234");
  }else{
    element.selectedIndex = element.children.length - 1
    console.log("999");
  }

}

module.exports = {
  populateDropdown,
  populateFlightMinMaxDropdown,
  populateAccomMinMaxDropdown
}











