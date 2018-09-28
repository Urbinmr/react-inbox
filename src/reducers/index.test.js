import reducer from './index.js'
import deepfreeze from 'deep-freeze'

describe('reducer', () => {
    it('has initial state', () => {
        //setup
        const expectedState = {
            messageList: []
        }

        //exercise
        const actual = reducer(undefined, {})

        //assert
        expect(actual).toEqual(expectedState)
    })

    it('should update message property checked when called', () => {
        //setup
        const previousState = deepfreeze({
            messageList: [{
                "id": 1,
                "subject": "You can't input the protocol without calculating the mobile RSS protocol!",
                "read": false,
                "starred": true,
                "labels": ["dev", "personal"],
                "selected": true
            }]
        })
        const message = {
            "id": 1,
            "subject": "You can't input the protocol without calculating the mobile RSS protocol!",
            "read": false,
            "starred": true,
            "labels": ["dev", "personal"],
            "selected": true
        };

        //exercise
        const actualMessage = reducer(previousState, { type: 'ON_CHECK', message })

        //assert
        expect(actualMessage.messageList[0].selected).toEqual(false)
    });

    it('should update message property starred when called', () => {
        //setup
        const previousState = deepfreeze({
            messageList: [{
                "id": 1,
                "subject": "You can't input the protocol without calculating the mobile RSS protocol!",
                "read": false,
                "starred": true,
                "labels": ["dev", "personal"]
            }]
        })
        const message = {
            "id": 1,
            "subject": "You can't input the protocol without calculating the mobile RSS protocol!",
            "read": false,
            "starred": true,
            "labels": ["dev", "personal"],
        };

        //exercise
        const actualMessage = reducer(previousState, { type: 'ON_STAR', message })

        //assert
        expect(actualMessage.messageList[0].starred).toEqual(false)
    });

    it('should update message property read when read() is called', () => {
        //setup
        const previousState = deepfreeze({
            messageList: [{
                "selected": true,
                "id": 1,
                "subject": "You can't input the protocol without calculating the mobile RSS protocol!",
                "read": false,
                "starred": true,
                "labels": ["dev", "personal"]
            }]
        })

        //exercise
        const actualMessage = reducer(previousState, { type: 'ON_READ' })

        //assert
        expect(actualMessage.messageList[0].read).toEqual(true)
    });

    it('should update message property read when unread() is called', () => {
        //setup
        const previousState = deepfreeze({
            messageList: [{
                "selected": true,
                "id": 1,
                "subject": "You can't input the protocol without calculating the mobile RSS protocol!",
                "read": true,
                "starred": true,
                "labels": ["dev", "personal"]
            }]
        })

        //exercise
        const actualMessage = reducer(previousState, { type: 'ON_UNREAD' })

        //assert
        expect(actualMessage.messageList[0].read).toEqual(false)
    });


    it('should update selected property read when selector() is called', () => {
        //setup
        const previousState = deepfreeze({
            messageList: [{
                "selected": false,
                "id": 1,
                "subject": "You can't input the protocol without calculating the mobile RSS protocol!",
                "read": true,
                "starred": true,
                "labels": ["dev", "personal"]
            }]
        })

        //exercise
        let actualMessage = reducer(previousState, { type: 'ON_SELECTOR' })

        //assert
        expect(actualMessage.messageList[0].selected).toEqual(true)

        //testing deselect
        //exercise
        actualMessage = reducer(actualMessage, { type: 'ON_SELECTOR' })

        //assert
        expect(actualMessage.messageList[0].selected).toEqual(false)
    });

    it('should update messageList when called', () => {
        //setup
        const previousState = deepfreeze({})
        const messageList = [{
            "id": 1,
            "subject": "You can't input the protocol without calculating the mobile RSS protocol!",
            "read": false,
            "starred": true,
            "labels": ["dev", "personal"],
        }];

        //exercise
        const actualMessage = reducer(previousState, { type: 'GET_MESSAGES', messageList })

        //assert
        expect(actualMessage.messageList).toHaveLength(1)
    });

    it('should add label when called', () => {
        //setup
        const previousState = deepfreeze({
            messageList: [{
                "selected": true,
                "id": 1,
                "subject": "You can't input the protocol without calculating the mobile RSS protocol!",
                "read": false,
                "starred": true,
                "labels": ["dev"],
            }]
        })

        //exercise
        const actualMessage = reducer(previousState, { type: 'ADD_LABEL', label: 'personal' })

        //assert
        expect(actualMessage.messageList[0].labels).toHaveLength(2)
    });
})
