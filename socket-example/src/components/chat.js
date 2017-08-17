import React, { Component } from 'react';

class Chat extends Component {
    genChats(){
        return this.props.chats.map((item, i) =>  {
            return <div key={i + item.message}> {item.username} said {item.message}</div>
        })
    }
    render() {
        return (
            <div>
                {this.genChats()}
            </div>
        );
    }
}

export default Chat;