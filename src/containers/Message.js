import { connect } from 'react-redux';

import Message from '../components/Message.js';

const mapStateToProps = (state) => {
    console.log('state: ', state)
    return {
        'checked': state.checked,
        'starred': state.starred,
        'read': state.read,
        'labels': state.labels
    }
}

export default connect(mapStateToProps)(Message);