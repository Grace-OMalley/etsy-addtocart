const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;

app.use(express.static('client/dist'));

// app.get('/', (req, res) => {
//   res.status(200).send('Welcome to Etsy');
// });

app.listen(port, () => {
  console.log(`Listening to Port: ${port}`);
});