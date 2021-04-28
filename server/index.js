const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;
const db = require('../database/index.js');

app.use(express.static('client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// app.get('/', (req, res) => {
//   res.status(200).send('Welcome to Etsy');
// });

app.listen(port, () => {
  console.log(`Listening to Port: ${port}`);
});