const faker = require('faker');
const moment = require('moment');

module.exports = {
  gen: () => (
    {
      brandName: faker.company.companyName(),
      numberOfSales: faker.datatype.number(),
      reviewAvg: Math.floor(Math.random() * 6),
      itemName: faker.commerce.productName(),
      price: faker.commerce.price(),
      specifications: ['Extra Small', 'Small', 'Medium', 'Large', 'Extra Large'],
      inventoryCount: faker.datatype.number(),
      shippingHandlingTime: moment(new Date(), "DD-MM-YYYY").add(14, 'days'),
      itemDetails: faker.commerce.productMaterial(),
      itemDescription: faker.commerce.productDescription()
   }
  )
};