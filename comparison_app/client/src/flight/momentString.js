var moment = require('moment-timezone');

var momentString = function(date, tz){

  var dateMoment = moment(date);
  var newDate = dateMoment.tz(tz);

  console.log("moment  ", tz);
  return(newDate.format('MMMM Do YYYY, h:mm:ss a z'));
}

module.exports = momentString;