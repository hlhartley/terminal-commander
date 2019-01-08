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
      <TerminalCard 
        terminalCommands = {hhTerminalCommands}
        score = {0}
        updateScore = { () => {} }
      />
    );
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
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
 
  it('clearInput method should change inputValue state to blank string when the enterCommand method is called', () => {
    wrapper.find('.command-input').simulate('click', { inputValue: ''})
    expect(wrapper.state('inputValue')).toEqual('')
  })

  it('displayCommandInput method should return when called', () => {
    const displayCommandInput = jest.fn(() => true);
    displayCommandInput();
    expect(displayCommandInput).toHaveReturned();
  })

  it('displayCommandDescription method should return when called', () => {
    const displayCommandDescription = jest.fn(() => true);
    displayCommandDescription();
    expect(displayCommandDescription).toHaveReturned();
  })

  it('updateScore method should return when called', () => {
    const updateScore = jest.fn(() => true);
    updateScore();
    expect(updateScore).toHaveReturned();
  })
})
  