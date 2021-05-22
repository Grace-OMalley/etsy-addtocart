import React from 'react';
import moment from 'moment';
import fakeData from '../sampleDataAPI.js';
import ArrivesBy from '../client/src/components/ArrivesBy.jsx';
import {mount, shallow, render} from 'enzyme';

describe('Arrives By Test', () => {

  it('Should show a default item ETA of 6-9 days', () => {
    let timestamp = moment(Date.now()).add(6, 'days').format('MMM Do YY').slice(0, -5);
    let timestampRange = Number(timestamp.slice(-2)) + 3;

    const wrapper = mount(<ArrivesBy/>);
    const date = wrapper.find('.timetest').text();
    expect(date).toContain(timestamp + '-' + timestampRange);
  });

});