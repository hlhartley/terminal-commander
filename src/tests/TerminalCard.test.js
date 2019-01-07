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
        inputValue: '',
      })
  })

  it('enterCommand method should set state.inputValue with search string', () => {
    const mockedEvent = {
      target: {
        value: 'mockInput',
      }
    };
    expect(wrapper.state().inputValue).toEqual('');
    wrapper.instance().enterCommand(mockedEvent);
    expect(wrapper.state().inputValue).toEqual('mockInput');
  })
      // clearInput
  it('should change inputValue state to blank string when the enterCommand method is called', () => {
    wrapper.find('.command-input').simulate('click', { inputValue: ''})
    expect(wrapper.state('inputValue')).toEqual('')
  })
})
  

    // Remaining methods to test: 
    // displayCommandDescription(), 

    // displayCommandInput(),

    // updateScore

  // input?