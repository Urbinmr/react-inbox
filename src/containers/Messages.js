import { connect } from 'react-redux';

import Messages from '../components/Messages.js';

const mapStateToProps = (state) => {

    return {
        'messageList': state.messageList
    }
}

export default connect(mapStateToProps)(Messages);