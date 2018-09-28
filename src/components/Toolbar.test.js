import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme'
import Toolbar from './Toolbar'


describe('toolbar test', () => {
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
    }];
    const selector = jest.fn();
    const read = jest.fn();
    const unread = jest.fn();
    const addLabel = jest.fn();
    let toolbar
    beforeEach(() => {
        toolbar = shallow(<Toolbar messageList={testMessageList} selector={selector} read={read} unread={unread} addLabel={addLabel} />);
    })

    it('should call selector when button is clicked', () => {
        toolbar.find('#selector').simulate('click')
        expect(selector.mock.calls.length).toEqual(1)
    })

    it('should call read when button is clicked', () => {
        toolbar.find('#read').simulate('click')
        expect(read.mock.calls.length).toEqual(1)
    })

    it('should call unread when button is clicked', () => {
        toolbar.find('#unread').simulate('click')
        expect(unread.mock.calls.length).toEqual(1)
    })

    it('should find a dropdown with 2 options', () => {
        expect(toolbar.find('#addLabel')).toHaveLength(1)
        expect(toolbar.find('#dev')).toHaveLength(1)
        expect(toolbar.find('#personal')).toHaveLength(1)
    })

    it('should call addLabel when option from add label dopdown is clicked', () => {
        toolbar.find('#addLabel').simulate('change')
        expect(addLabel.mock.calls.length).toEqual(1)
    })

})
