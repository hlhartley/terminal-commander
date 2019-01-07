import React from 'react';
import AllCommandsModal from '../AllCommandsModal';
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
describe('AllCommandsModal', () => {

  beforeEach(() => {
    wrapper = shallow(
        <AllCommandsModal 
            terminalCommands = {hhTerminalCommands} 
            toggleModal = { () => {} }
        />
    );
  })

  it('should exist', () => {  
    expect(wrapper).toBeDefined()
  })

  it('should match the snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  })
})