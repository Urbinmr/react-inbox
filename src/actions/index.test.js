import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { onCheck, onStar, getMessages, read, unread, selector, addLabel } from ".";
//import fetchMock from 'fetch-mock'

//const mockStore = configureMockStore([thunk]);
describe('simple actions', () => {
    it('should create onCheck action object', () => {
        const message = {
            "id": 1,
            "subject": "You can't input the protocol without calculating the mobile RSS protocol!",
            "read": false,
            "starred": true,
            "labels": ["dev", "personal"]
        };

        const expectedActions = {
            type: 'ON_CHECK',
            message
        };

        expect(onCheck(message)).toEqual(expectedActions)
    });

    it('should create onStar action object', () => {
        const message = {
            "id": 1,
            "subject": "You can't input the protocol without calculating the mobile RSS protocol!",
            "read": false,
            "starred": true,
            "labels": ["dev", "personal"]
        };

        const expectedActions = {
            type: 'ON_STAR',
            message
        };

        expect(onStar(message)).toEqual(expectedActions)
    })

    it('should create read action object', () => {

        const expectedActions = {
            type: 'ON_READ',
        };

        expect(read()).toEqual(expectedActions)
    })

    it('should create unread action object', () => {

        const expectedActions = {
            type: 'ON_UNREAD',
        };

        expect(unread()).toEqual(expectedActions)
    })

    it('should create selector action object', () => {

        const expectedActions = {
            type: 'ON_SELECTOR',
        };

        expect(selector()).toEqual(expectedActions)
    })

    it('should create addLabel action object', () => {
        const label = 'dev'

        const expectedActions = {
            type: 'ADD_LABEL',
            label
        };

        expect(addLabel(label)).toEqual(expectedActions)
    })
})

describe('get message list', () => {
    it('gets people from a hard coded list', () => {
        expect(getMessages().messageList.length).toBeGreaterThan(0)
        expect(getMessages().type).toEqual('GET_MESSAGES')
    })
})

// describe('peopleGet', () => {
//     it('dispatches peopleSet with the response from the server', async () => {
//         // setup
//         const people = [{ firstName: 'test', lastName: 'test', id: '1234' }]
//         fetchMock.get('/users', { people });
//         const store = mockStore();
//         const expectedActions = [
//             { "people": { "people": [{ "firstName": "test", "id": "1234", "lastName": "test" }] }, "type": "PEOPLE_SET" }
//         ]

//         // exercise
//         await store.dispatch(peopleGet());

//         // assert
//         expect(store.getActions()).toEqual(expectedActions);

//     })
// })