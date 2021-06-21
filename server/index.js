const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const shrinkRay = require('shrink-ray-current');
const db = require('../database/index.js');
const fakeData = require('../fakeData/fakeData.js');
const faker = require('faker');
const cors = require('cors');
const morgan = require('morgan');
const port = 3000;

app.use(shrinkRay());
app.use(express.static('client/dist'));
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/addtocart', (req, res) => {
  //=====================SEEDING FUNCTION: Part 2 of 2 ============================//
  // for (let i = 1; i < 101; i++) {
  //   let dummyData = {
  //     itemId: i,
  //     brandName: faker.company.companyName(),
  //     numberOfSales: faker.datatype.number(),
  //     reviewAvg: Math.floor(Math.random() * 6),
  //     itemName: faker.commerce.productName(),
  //     price: faker.commerce.price(),
  //     specifications: ['Extra Small', 'Small', 'Medium', 'Large', 'Extra Large'],
  //     inventoryCount: faker.datatype.number(),
  //     itemDetails: faker.commerce.productMaterial(),
  //     itemDescription: faker.commerce.productDescription()
  //   };
  //   db.save(dummyData, (err, data) => {
  //     if (err) {
  //       res.status(400).send('SERVER - Failed to save');
  //     } else {
  //       console.log('SERVER - Saved to DB...');
  //     }
  //   });
  // }
  // res.status(201).send('success');
  //===============================================================//
});

app.get('/addtocart/:itemId', (req, res) => {
  console.log('Server Query:', req.params.itemId);
  db.find({itemId: req.params.itemId}, (err, data) => {
    if (err) {
      res.status(400).send(err);
    } else {
      console.log('SERVER POST-DATA:', data[0]);
      res.status(200).send(data[0]);
    }
  });
  // res.setHeader('Content-Type', 'text/event-stream');
  // res.setHeader('Cache-Control', 'no-cache');

  // // send a ping approx every 2 seconds
  // const timer = setInterval(() => {
  //   db.find({itemId: req.params.itemId}, (err, data) => {
  //     if (err) {
  //       res.status(400).send(err);
  //     } else {
  //       console.log('SERVER POST-DATA:', data[0]);
  //       res.status(200).send(data[0]);
  //     }
  //   });

  //   // !!! this is the important part
  //   res.flush();
  // }, 2000);

  // res.on('close', () => {
  //   clearInterval(timer);
  // });
});

app.listen(port, () => {
  console.log(`Listening to Port: ${port}`);
});

//Server Design by Devon Poston - SDC Team: Slack me for questions