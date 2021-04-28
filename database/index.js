const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/addToCart');
let db = mongoose.connection;

db.once('open', () => {
  console.log('CONNECTED TO MongoDB!');
});
db.on('error', (error) => {
  console.log('FAILED TO CONNECT TO MongoDB...', error);
});

let addToCartItem = mongoose.Schema({
  //define schema
});

let Item = mongoose.model('Item', addToCartItem);

let save = (item) => {
  //save item
};

let find = (item) => {
  //find item
};

module.exports = {save, find};

