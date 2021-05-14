import React from 'react';
import fakeData from '../sampleDataAPI.js';
import BestSeller from '../client/src/components/BestSeller.jsx';
import {mount, shallow, render} from 'enzyme';

describe('Bestseller Icon', () => {

  it('Renders Bestseller Icon if Sales Numbers are Greater Than 1000', () => {
    const wrapper = mount(<BestSeller item={fakeData[0]}/>);
    const bestSeller = wrapper.find('.bestseller').props().value;
    expect(bestSeller).toBe('Bestseller');
  });

  it('Does Not Render Bestseller Icon if Sales Numbers are Less Than 1000', () => {
    const wrapper = mount(<BestSeller item={fakeData[1]}/>);
    const bestSeller = wrapper.find('.bestseller').exists();
    expect(bestSeller).toBe(false);
  });

});