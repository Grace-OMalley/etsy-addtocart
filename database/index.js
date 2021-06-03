const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/addToCart', {useNewUrlParser: true, useUnifiedTopology: true});
let db = mongoose.connection;

db.once('open', () => {
  console.log('CONNECTED TO MongoDB!');
});
db.on('error', (error) => {
  console.log('FAILED TO CONNECT TO MongoDB...', error);
});

let addToCartItem = mongoose.Schema({
  itemId: Number,
  brandName: String,
  numberOfSales: Number,
  reviewAvg: Number,
  itemName: String,
  price: Number,
  specifications: [Array],
  inventoryCount: Number,
  itemDetails: String,
  itemDescription: String
});

let Item = mongoose.model('Item', addToCartItem);

let save = (item, callback) => {
  console.log('DB SAVE: ', item);
  let Doc = new Item({
    itemId: item.itemId,
    brandName: item.brandName,
    numberOfSales: item.numberOfSales,
    reviewAvg: item.reviewAvg,
    itemName: item.itemName,
    price: item.price,
    specifications: item.specifications,
    inventoryCount: item.inventoryCount,
    shippingHandlingTime: item.shippingHandlingTime,
    itemDetails: item.itemDetails,
    itemDescription: item.itemDescription
  });
  Doc.save()
    .then((data) => {
      console.log('SAVING TO DB...');
      callback(null, data);
    })
    .catch((error) => {
      console.log('FAILED TO SAVE TO DB', error);
      callback(error);
    });
};

let find = (item, callback) => {
  console.log('DB FIND: ', item);
  Item.find(item)
    .then((data) => {
      console.log('SEARCHING DB...');
      callback(null, data);
    })
    .catch((error) => {
      console.log('FAILED TO SEARCH DB', error);
      callback(error);
    });
};

module.exports = {save, find};

//Database Design by Devon Poston - SDC Team: Slack me for questions