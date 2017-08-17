import React, { Component } from 'react';

import Chat from "../components/chat.js";

import {connect} from "react-redux";
import * as actionCreators from "../actions/index.js";

class ChatContainer extends Component {
    componentWillMount(){
        this.props.loadInitChats();
    }
    render() {
        return (
            <Chat chats={this.props.chats} />
        );
    }
};

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps, actionCreators)(ChatContainer);