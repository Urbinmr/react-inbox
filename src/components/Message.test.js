import React from 'react';

import { shallow } from 'enzyme'
import Message from './Message'

describe('renders with proper components', () => {
    let message
    beforeEach(() => {
        message = shallow(<Message checkBox={true} />)
    })

    it('renders Message component without crashing', () => {
        expect(message).toBeTruthy()
    });

    it('should contain a list of message', () => {
        const store = mockStore()
        console.log('props log:', message.props())
        expect(message.props().checkBox).toBeDefined();
        // expect(message.props().starred).toBeDefined();
        // expect(message.props().read).toBeDefined();
        // expect(message.props().labels).toBeDefined();
    })

});