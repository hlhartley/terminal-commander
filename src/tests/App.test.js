import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { shallow } from 'enzyme';

let wrapper;
describe('App', () => {

  beforeEach(() => {
    wrapper = shallow(<App/>); 
  })

  it('should exist', () => {   
    expect(wrapper).toBeDefined()
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

  it('should render the Game Container and Terminal Card component', () => {
    expect(wrapper.find('GameContainer').length).toEqual(1)
    expect(wrapper.find('TerminalCard').length).toEqual(1)
  })

  xit('should call resetGame when button is clicked', () => {
    console.log(wrapper.debug())
    wrapper.instance().resetGame = jest.fn()
    wrapper
      .find('.reset-button')
      .simulate('click')
    // expect(wrapper.instance().toggleAllKeysModal).toHaveBeenCalled()
    expect(wrapper.instance().resetGame).toHaveBeenCalledTimes(1)
  })

  // const clickFn = jest.fn();
  // it('button click should hide component', () => {
  //   wrapper
  //     .find('.reset-button')
  //     .simulate('click');
  //   expect(clickFn).toHaveBeenCalled();
  // });

  xit('should call toggleAllKeysMethod when button is clicked', () => {
    wrapper.instance().toggleAllKeysModal = jest.fn()
    const keysButton = wrapper.find('.keys-button')
    keysButton.simulate('click')
    expect(wrapper.instance().toggleAllKeysModal).toHaveBeenCalled()
    expect(wrapper.instance().toggleAllKeysModal).toHaveBeenCalledTimes(1)
  })

  xit('should call toggleAllKeysMethod when button is clicked', () => {
    wrapper.instance().toggleAllCommandsModal = jest.fn()
    const commandsButton = wrapper.find('.allcommands-button')
    commandsButton.simulate('click')
    expect(wrapper.instance().toggleAllCommandsModal).toHaveBeenCalled()
    expect(wrapper.instance().toggleAllCommandsModal).toHaveBeenCalledTimes(1)
  })

  it('resetGame method should change App score state to 0 when the resetGame method is called', () => {
    wrapper.find('.reset-button').simulate('click')
    expect(wrapper.state('score')).toEqual(0)
  })

  it('should change App showCommands state to opposite when the toggleAllCommandsModal method is called', () => {
    wrapper.find('.allcommands-button').simulate('click', { showCommands: false})
    expect(wrapper.state('showCommands')).toEqual(true)
  })

  it('should change App showKeys state to opposite when the toggleAllKeysModal method is called', () => {
    wrapper.find('.keys-button').simulate('click', { showKeys: false})
    expect(wrapper.state('showKeys')).toEqual(true)
  })

  xit('updateScore method should change App score state to +1 when the updateScore method is called', () => {
    wrapper.find('.command-input').simulate('click', { score: 1})
    expect(wrapper.state('score')).toEqual(2)
  })
})
