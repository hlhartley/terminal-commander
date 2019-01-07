import React from 'react';
import ProgressBar from '../ProgressBar';
import { shallow } from 'enzyme';

let wrapper;
describe('ProgressBar', () => {

  beforeEach(() => {
    wrapper = shallow(
      <ProgressBar />
    );
  })

  it('should exist', () => {  
    expect(wrapper).toBeDefined()
  })

  it('should match the snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  })
})