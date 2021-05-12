import TestRenderer from 'react-test-renderer';
import React from 'react';
import renderer from 'react-test-renderer';
import Title from '../client/src/components/Title.jsx';
import styles from '../client/src/styles.css';

const item = {
  specifications: [
    [ 'Extra Small' ],
    [ 'Small' ],
    [ 'Medium' ],
    [ 'Large' ],
    [ 'Extra Large' ]
  ],
  // _id: 6088edca4912fe3bada3375f,
  brandName: 'Jones - Morar',
  numberOfSales: 53156,
  reviewAvg: 3,
  itemName: 'Incredible Concrete Chicken',
  price: 297,
  inventoryCount: 11656,
  shippingHandlingTime: 1620796106543,
  itemDetails: 'Metal',
  itemDescription: 'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients',
  __v: 0
};

test('First Jest-React Test', () => {
  const component = renderer.create(
    <Title item={item}/>
  );
  let tree = component.toJSON();
  expect(component).toMatchSnapshot();
});