let express = require('express');
let port = process.env.PORT || 3000;
let DB = require('./Modules/database.js');
let Routes = require('./Modules/routes.js');
let app = express();

let data = {
  currentReservations : [
    {
      name: 'Snugglepuss',
      phone_number: 5555559876,
      email: 'snugglepuss@cartoons.com',
      unique_id: 1,
    },
    {
      name: 'Yogi Bear',
      phone_number: 5555559376,
      email: 'yogi@cartoons.com',
      unique_id: 2,
    },
    {
      name: 'Boo-Boo',
      phone_number: 5555552876,
      email: 'booboo@cartoons.com',
      unique_id: 3,
    },
    {
      name: 'Fred Flinstone',
      phone_number: 5555550294,
      email: 'snugglepuss@cartoons.com',
      unique_id: 4,
    },
    {
      name: 'Muttley',
      phone_number: 5555552844,
      email: 'muttley@cartoons.com',
      unique_id: 5,
    },
    {
      name: 'Scoobert Doo',
      phone_number: 5555559872,
      email: 'scooby@cartoons.com',
      unique_id: 6,
    },
    {
      name: 'Atom Ant',
      phone_number: 5555559826,
      email: 'atomant@cartoons.com',
      unique_id: 7,
    },
    {
      name: 'George Jetson',
      phone_number: 5555559376,
      email: 'gjetty@cartoons.com',
      unique_id: 8,
    },
    {
      name: 'Quick Draw McGraw',
      phone_number: 5555559826,
      email: 'quickie@cartoons.com',
      unique_id: 9,
    },
    {
      name: 'Dino Flinstone',
      phone_number: 5555559876,
      email: 'dinof@cartoons.com',
      unique_id: 10,
    },
  ],
  waitingList : []
};

//tell express to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', function (req, res) {
  res.send('Hi there!');
})

app.post('/api/make-reservation', function (req, res) {
  let newReservation = req.body;
  console.log(newReservation);
  //if total res > 5 deny res
  // return res.json(newReservation);
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