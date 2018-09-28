import React, { Component } from 'react';
import '../App.css';

export default class Message extends Component {
    render() {
        let style = 'message'
        let devLabel = ''
        let personalLabel = ''

        if (this.props.message.selected) {
            style += ' selected'
        }

        if (this.props.message.read) {
            style += ' read'
        }
        else {
            style += ' unread'
        }

        if (this.props.message.labels.includes('dev')) {
            devLabel = <div className="label label-warning">dev</div>
        }

        if (this.props.message.labels.includes('personal')) {
            personalLabel = <div className="label label-warning">personal</div>
        }

        return (
            <div className={style}>
                <input id="checkbox" type="checkbox" onChange={() => this.props.onCheck(this.props.message)} checked={Boolean(this.props.message.selected)} />
                <input id="star" className="star" type="checkbox" onChange={() => this.props.onStar(this.props.message)} checked={Boolean(this.props.message.starred)} />
                {devLabel}
                {personalLabel}
                {this.props.message.subject}
            </div>
        );
    }
}
