import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme'
import Messages from './Messages'

describe('renders with proper components', () => {
    let messages
    beforeEach(() => {
        messages = shallow(<Messages />)
    })

    it('renders Messages component without crashing', () => {
        expect(messages).toBeTruthy()
    });

    it('should contain a list of message', () => {
        expect(messages.props().messageList).toBeDefined();
    })

});