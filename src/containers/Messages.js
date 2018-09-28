import { connect } from 'react-redux';

import Messages from '../components/Messages.js';
import { getMessages } from '../actions/index.js'

const mapStateToProps = (state) => {
    return {
        'messageList': state.messageList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        'getMessages': () => dispatch(getMessages())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Messages);