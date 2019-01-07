import React from 'react';
import GameContainer from '../GameContainer';
import { shallow } from 'enzyme';

let wrapper;
describe('GameContainer', () => {

  beforeEach(() => {
    wrapper = shallow(
      <GameContainer />
    );
  })

  it('should exist', () => {
     expect(wrapper).toBeDefined()
  })

  it('should match the snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should render the Progress Bar component', () => {
    expect(wrapper.find('ProgressBar').length).toEqual(1)
  })
})

