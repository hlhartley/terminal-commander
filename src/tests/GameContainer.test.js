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

  it('should match the snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  })
})
