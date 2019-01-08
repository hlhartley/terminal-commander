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

  it('should call resetGame when button is clicked', () => {
    wrapper.instance().updateScore();
    expect(wrapper.state('score')).toEqual(1);
    wrapper.find('.reset-button').simulate('click');
    expect(wrapper.state('score')).toEqual(0);
  })

  it('should call toggleAllKeysMethod when button is clicked', () => {
    wrapper.instance().toggleAllKeysModal();
    expect(wrapper.state('showKeys')).toEqual(true);
    wrapper.find('.keys-button').simulate('click')
    expect(wrapper.state('showKeys')).toEqual(false);

  })

  it('should call toggleAllCommandsMethod when button is clicked', () => {
    wrapper.instance().toggleAllCommandsModal();
    expect(wrapper.state('showCommands')).toEqual(true);
    wrapper.find('.allcommands-button').simulate('click')
    expect(wrapper.state('showCommands')).toEqual(false);
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

  it('updateScore method should change App score state to +1 when the updateScore method is called', () => {
    expect(wrapper.state('score')).toEqual(0)
    wrapper.instance().updateScore();
    expect(wrapper.state('score')).toEqual(1)
  })
})
