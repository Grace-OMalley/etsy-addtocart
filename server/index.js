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
  let counter = 0;
  for (let i = 0; i < 100; i++) {
    db.save(fakeData.gen(), (err, data) => {
      if (err) {
        console.log('Error!');
      } else {
        counter++
        console.log(counter);
      }
    })
  }
  // res.status(200).send('SUCCESS!');
});

app.listen(port, () => {
  console.log(`Listening to Port: ${port}`);
});
//Server Design by Devon Poston