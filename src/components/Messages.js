import React, { Component } from 'react';
import '../App.css';
import Message from '../containers/Message'

export default class Messages extends Component {

    componentDidMount() {
        this.props.getMessages()
    }

    render() {
        return (
            <div>
                {this.props.messageList.map((message, index) => <Message key={index} message={message} />)}
            </div>
        );
    }
}