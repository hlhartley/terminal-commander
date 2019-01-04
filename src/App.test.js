import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

// reactDOM only on App.test.js

let wrapper;
describe('App', () => {

  beforeEach(() => {
    wrapper = shallow(
      <App/>
    );
  })

  it('should match the snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  })
})