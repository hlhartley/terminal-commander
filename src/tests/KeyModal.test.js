import React from 'react';
import KeyModal from '../KeyModal';
import { shallow } from 'enzyme';

let wrapper;
describe('KeyModal', () => {

  beforeEach(() => {
    wrapper = shallow(
        <KeyModal toggleModal = { () => {} }/>
    );
  })

  it('should exist', () => {  
    expect(wrapper).toBeDefined()
  })

  it('should match the snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  })
})