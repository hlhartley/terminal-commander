import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
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
describe('App', () => {

  beforeEach(() => {
    wrapper = shallow(
      <App {...hhTerminalCommands}/>
    );
  })

  it('should match the snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should have a proper default state', () => {
    expect(wrapper.state()).toEqual({
      hhTerminalCommands: [],
      score: 0,
      showCommands: false,
      showKeys: false,
    })
  })
})

// Remaining Tests:
// updateScore
// resetGame
// toggleAllCommandsModal
// toggleAllKeysModal
// renderModals
// buttons?
