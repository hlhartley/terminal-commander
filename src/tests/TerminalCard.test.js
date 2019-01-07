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
    // console.log(wrapper.instance().props)
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

  // it('should append the correct number of Terminal Commands to the DOM', () => {
  //   const firstCommand = wrapper.find('ToDontCard').first()
  //   const lastCommand = wrapper.find('ToDontCard').last()

  //   expect(wrapper.find('ToDontCard').length).toEqual(2)
  //   expect firstCommand.props().toDont.title).toEqual('title1')
  //   expect firstCommand.props().toDont.body).toEqual('body1')
  //   expect(lastCommand.props().toDont.title).toEqual('title2')
  //   expect(lastCommand.props().toDont.body).toEqual('body2')
  // })
})

// Remaining methods to test: 
    // displayCommandDescription(), 
  // mock functions being passed as props
  // test 1st if block - possible paths
    // displayCommandInput(),

    // updateScore()
  