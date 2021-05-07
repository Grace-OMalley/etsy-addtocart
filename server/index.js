const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;
const db = require('../database/index.js');
const fakeData = require('../fakeData/fakeData.js');

app.use(express.static('client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/addtocart', (req, res) => {
  let query = {};
  db.find(query, (err, data) => {
    if (err) {
      res.status(400).send(err);
    } else {
      console.log('SERVER GET DATA:', data[1]);
      res.status(200).send(data[1]);
    }
  });
});

app.post('/addtocart', (req, res) => {
  let query = {};
  db.find(query, (err, data) => {
    if (err) {
      res.status(400).send(err);
    } else {
      console.log('SERVER POST DATA:', data[0]);
      res.status(200).send(data[0]);
    }
  });
});

app.listen(port, () => {
  console.log(`Listening to Port: ${port}`);
});

//Server Design by Devon Poston