import { connect } from 'react-redux';

import Message from '../components/Message.js';
import { onCheck, onStar } from '../actions/index.js'

const mapStateToProps = (state) => {
    return {
        messageList: state.messageList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        'onCheck': (message) => dispatch(onCheck(message)),
        'onStar': (message) => dispatch(onStar(message))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Message);