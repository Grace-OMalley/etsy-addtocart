import React from 'react';
import fakeData from '../sampleDataAPI.js';
import Specifications from '../client/src/components/Specifications.jsx';
import {mount, shallow, render} from 'enzyme';

describe('Specifications Test', () => {

  it('Should render a list of specifications if item has options', () => {
    const wrapper = mount(<Specifications item={fakeData[3]}/>);
    const specs = wrapper.find('.sizetext').exists();
    expect(specs).toBe(false);
  });

  it('Should render a list of specifications if item has options', () => {
    const wrapper = mount(<Specifications item={fakeData[1]}/>);
    const specs = wrapper.find('.sizetext').exists();
    expect(specs).toBe(true);
  });

});