import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme'
import Toolbar from './Toolbar'

it('renders Toolbar component without crashing', () => {
    const toolbar = shallow(<Toolbar />);
    expect(toolbar).toBeTruthy()
});