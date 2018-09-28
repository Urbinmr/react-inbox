import React, { Component } from 'react';
import '../App.css';

export default class Toolbar extends Component {

    render() {
        return (
            <div className='toolbar'>
                <button id='selector' onClick={() => this.props.selector()}>SELECTOR</button>
                <button id='read' onClick={() => this.props.read()}>Mark as Read</button>
                <button id='unread' onClick={() => this.props.unread()}>Mark as Unread</button>
                <button onClick={() => this.props.addLabel('dev')}>Dev</button>
                <button onClick={() => this.props.addLabel('personal')}>Personal</button>
            </div>
        );
    }
}