import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme'
import Messages from './Messages'
import Message from '../containers/Message'

describe('renders with proper components', () => {
    let messages
    const testMessageList = [{
        "id": 1,
        "subject": "You can't input the protocol without calculating the mobile RSS protocol!",
        "read": false,
        "starred": true,
        "labels": ["dev", "personal"]
    },
    {
        "id": 2,
        "subject": "connecting the system won't do anything, we need to input the mobile AI panel!",
        "read": false,
        "starred": false,
        "selected": true,
        "labels": []
    }]
    beforeEach(() => {
        messages = shallow(<Messages messageList={testMessageList} getMessages={jest.fn()} />)
    })

    it('renders Messages component without crashing', () => {
        expect(messages).toBeTruthy()
    });

    it('should have the same number of messages as length of messageList', () => {
        expect(messages.find(Message)).toHaveLength(testMessageList.length)
    })

});