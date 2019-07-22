let express = require('express');
let fs = require('fs');
let port = process.env.PORT || 3000;
let Routes = require('./Modules/routes.js');
let Services = require('./Modules/Services.js');
let app = express(); 


//tell express to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', express.static('Views'));

app.get('/', function (req, res) {
  res.send('Hi there!');
})

app.post('/api/make-reservation', function (req, res) {
  let newReservation = req.body;
  Services.addReservation(newReservation);
  res.end();
});

app.get('/api/all-reservations', function (req, res) {
  return res.json(data.currentReservations);
});

app.get('/api/all-waitinglist', function (req, res) {
  return res.json(data.waitingList);
});

app.listen(port, function () {
  console.log(`Listening on ${port}`);
});