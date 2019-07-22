const fs = require('fs');
const reservationsFile = require('../data/reservations.json');
const waitlistFile = require('../data/waitlist.json');

module.exports.addReservation = function (data) {
  console.log(data);
  let newData = [];

  if (data && data.name) {
    data.routeName = data.name.toLowerCase();
  }
  
  if (reservationsFile.length < 5) {
    try {
      reservationsFile.forEach(function (reservation) {
        newData.push(reservation);
      });

      newData.push(data);
    } catch (error) {
      console.log(error);
    }

    fs.writeFile(
      './data/reservations.json',
      JSON.stringify(newData),
      'utf8',
      function (error) {
        if (error) throw error;
        console.log('Your reservation has been added!');
      }
    )
  } else {
    try {
      console.log(waitlistFile);
      waitlistFile.forEach(function (reservation) {
        newData.push(reservation);
      });

      newData.push(data);
    } catch (error) {
      console.log(error);
    }

    fs.writeFile(
      './data/waitlist.json',
      JSON.stringify(newData),
      'utf8',
      function (error) {
        if (error) throw error;
        console.log('Your reservation has been waitlisted due to an unforseen increase in customers.');
      }
    )
  }
}