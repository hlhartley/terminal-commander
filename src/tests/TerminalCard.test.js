import React from 'react';
import TerminalCard from '../TerminalCard';
import { shallow } from 'enzyme';

const hhTerminalCommands = [{
    id: 1,
    description: "Reset terminal screen",
    command: "reset"
    },
    {
    id: 2,
    description: "Clear screen",
    command: "clear"
    }]

let wrapper;
describe('TerminalCard', () => {

  beforeEach(() => {
    wrapper = shallow(
      <TerminalCard {...hhTerminalCommands}/>
    );
  })

  it('should match the snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should have a proper default state', () => {
      expect(wrapper.state()).toEqual({
        score: 0,
        inputValue: '',
      })
  })
})

    // Remaining methods to test: 
    // displayCommandDescription(), 
    // displayCommandInput(),
    // enterCommand,
    // updateScore
    // clearInput