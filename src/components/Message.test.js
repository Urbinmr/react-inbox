import React from 'react';

import { shallow } from 'enzyme'
import Message from './Message'

describe('renders with proper components', () => {
    let message
    const onChecked = jest.fn();
    const onStarred = jest.fn();
    const testMessage = {
        "id": 1,
        "subject": "You can't input the protocol without calculating the mobile RSS protocol!",
        "read": false,
        "starred": true,
        "labels": ["dev", "personal"],
        "selected": true
    }
    beforeEach(() => {
        message = shallow(<Message message={testMessage} onCheck={onChecked} onStar={onStarred} />)
    })

    it('should render check box and star on a message', () => {
        expect(message).toBeTruthy()
        expect(message.find('input')).toHaveLength(2)
    });

    it('should call on checked when check box is clicked', () => {
        message.find('#checkbox').simulate('change')

        expect(onChecked.mock.calls.length).toEqual(1)
    });

    it('should call on checked when check box is clicked', () => {
        message.find('#star').simulate('change')

        expect(onStarred.mock.calls.length).toEqual(1)
    });

    it('should apply selected style when a message is selected', () => {
        expect(message.find('div').props().className).toBe('message selected unread')
    })

    it('should apply selected style when a message is selected', () => {
        expect(message.find('div').props().className).toBe('message selected unread')
    })


});