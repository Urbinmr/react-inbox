import { connect } from 'react-redux';

import Toolbar from '../components/Toolbar.js';

import { selector, read, unread, addLabel } from '../actions/index.js'

const mapStateToProps = (state) => {
    return {
        messageList: state.messageList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        'selector': () => dispatch(selector()),
        'read': () => dispatch(read()),
        'unread': () => dispatch(unread()),
        'addLabel': (label) => dispatch(addLabel(label))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);