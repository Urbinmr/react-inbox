import React, { Component } from 'react';
import '../App.css';
import Message from '../containers/Message'

export default class Messages extends Component {
    render() {
        return (
            <div>
                <Message checkBox={true} starred={true} read={false} labels={['dev']} />
            </div>
        );
    }
}