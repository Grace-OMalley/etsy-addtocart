import React from 'react';
import fakeData from '../sampleDataAPI.js';
import Price from '../client/src/components/Price.jsx';
import {mount, shallow, render} from 'enzyme';

describe('Inventory Test', () => {

  it('Should Render Out of Stock when inventory is equal to 0', ()=> {
    const wrapper = mount(<Price item={fakeData[2]}/>);
    const inStock = wrapper.find('.outofstock').exists();
    expect(inStock).toBe(true);
  });

  it('Should Render In Stock when inventory is greater than 0', ()=> {
    const wrapper = mount(<Price item={fakeData[1]}/>);
    const inStock = wrapper.find('.instock').exists();
    expect(inStock).toBe(true);
  });

});