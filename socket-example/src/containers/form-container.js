import React, { Component } from 'react';
import autoBind from "react-autobind";

import Form from "../components/form.js";

import {connect} from "react-redux";
import * as actionCreators from "../actions/index.js";

import io from "socket.io-client";


class FormContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: "",
            message: "",
            socket: io.connect("http://localhost:9000")
        }
        this.state.socket.on("chat-added", (data) => {
            this.props.receiveChat(data);
        });
        autoBind(this);
    };

    handleChange(key, event){
        this.setState({
            [key]: event.target.value
        });
    };

    render() {
        return (
            <div>
                <Form handleClick={this.props.addChat} input={this.state} handleChange={this.handleChange}/>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps, actionCreators)(FormContainer);