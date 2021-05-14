import React from 'react';
import fakeData from '../sampleDataAPI.js';
import Title from '../client/src/components/Title.jsx';
import {mount, shallow, render} from 'enzyme';

describe('Title Div Tests', () => {

  it('Brand Name Renders Text', () => {
    const wrapper = mount(<Title item={fakeData[0]}/>);
    const brandName = wrapper.find('.title').text();
    expect(brandName).toBe('Jones - Morar');
  });

  it('Total Sales Number Renders with Commas', () => {
    const wrapper = mount(<Title item={fakeData[0]}/>);
    const totalSales = wrapper.find('.salestotal').text();
    const salesNum = totalSales.slice(0, -9);
    expect(salesNum).toBe('53,156');
  });

  it('Dynamic Render of Review Avg Stars', () => {
    const wrapper = mount(<Title item={fakeData[0]}/>);
    const solidStars = wrapper.find('.solidstar').exists();
    const hollowStars = wrapper.find('.hollowstar').exists();
    expect(solidStars).toBe(true);
    expect(hollowStars).toBe(true);
  });

});