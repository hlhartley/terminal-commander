import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { shallow } from 'enzyme';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App/>); 
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
// it('should change App score state to +1 when the updateScore method is called', () => {
//   wrapper.find('').simulate('click', { score: 1})
//   expect(wrapper.state('')).toEqual(1)
// })

// resetGame
// it('should change App score state to 0 when the resetGame method is called', () => {
//   wrapper.find('').simulate('click', { score: 0})
//   expect(wrapper.state('')).toEqual(0)
// })

// toggleAllCommandsModal
// it('should change App showCommands state to opposite when the toggleAllCommandsModal method is called', () => {
//   wrapper.find('').simulate('click', { showCommands: true})
//   expect(wrapper.state('')).toEqual(true)
// })

// toggleAllKeysModal
// it('should change App showKeysstate to opposite when the toggleAllKeysModal method is called', () => {
//   wrapper.find('').simulate('click', { showCommands: true})
//   expect(wrapper.state('')).toEqual(true)
// })

// renderModals

// buttons?
