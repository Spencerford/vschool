import React, { Component } from 'react';

class Form extends Component {
    render() {
        return (
            <div>
                <input value={this.props.input.username} onChange={(event) => {
                    this.props.handleChange("username", event);
                }} placeholder="Username" type="text"/>
                <textarea value={this.props.input.message} onChange={(event) => {
                    this.props.handleChange("message", event);
                }} placeholder="Message" name="" id="" cols="30" rows="5"></textarea>
                <button onClick={() => {
                    this.props.handleClick({username: this.props.input.username, message: this.props.input.message}, this.props.input.socket)
                }}>Send</button>
            </div>
        );
    }
}

export default Form;