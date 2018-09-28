const initialState = {
    messageList: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ON_CHECK': return onCheck(state, action);
        case 'ON_STAR': return onStar(state, action);
        case 'GET_MESSAGES': return getMessages(state, action);
        case 'ON_SELECTOR': return onSelector(state, action);
        case 'ON_READ': return onRead(state, action);
        case 'ON_UNREAD': return onUnread(state, action);
        case 'ADD_LABEL': return addLabel(state, action)
        default:
            return state;
    }
}

const onCheck = (state, action) => {
    const newState = JSON.parse(JSON.stringify(state))
    newState.messageList = newState.messageList.map((message) => {
        if (message.id === action.message.id) {
            message.selected = !action.message.selected
        }
        return message
    })
    return newState;
}

const onStar = (state, action) => {
    const newState = JSON.parse(JSON.stringify(state))
    newState.messageList = newState.messageList.map((message) => {
        if (message.id === action.message.id) {
            message.starred = !action.message.starred
        }
        return message
    })
    return newState;
}

const getMessages = (state, action) => {
    return {
        ...state,
        messageList: action.messageList
    }
}

const onSelector = (state, action) => {
    const newState = JSON.parse(JSON.stringify(state))
    let isAllTrue = true
    newState.messageList = newState.messageList.map((message) => {
        if (!message.selected) {
            isAllTrue = false
            message.selected = true
        }
        return message
    })
    if (isAllTrue) {
        newState.messageList = newState.messageList.map((message) => {
            message.selected = false
            return message
        })
    }
    return newState;
}

const onRead = (state, action) => {
    const newState = JSON.parse(JSON.stringify(state))
    newState.messageList = newState.messageList.map((message) => {
        if (message.selected) {
            message.read = true
        }
        return message
    })
    return newState;
}

const onUnread = (state, action) => {
    const newState = JSON.parse(JSON.stringify(state))
    newState.messageList = newState.messageList.map((message) => {
        if (message.selected) {
            message.read = false
        }
        return message
    })
    return newState;
}

const addLabel = (state, action) => {
    const newState = JSON.parse(JSON.stringify(state))
    newState.messageList = newState.messageList.map((message) => {
        if (message.selected) {
            if (!message.labels.includes(action.label))
                message.labels.push(action.label)
        }
        return message
    })
    return newState;
}


export default reducer;