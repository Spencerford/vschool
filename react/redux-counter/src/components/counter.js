import React, { Component } from 'react';


class Counter extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.counter}</h1>
                <button onClick={() => {
                    this.props.handleAdd()
                }}>ADD</button>
                <button onClick={() => {
                    this.props.handleSub()
                }}>SUB</button>
                
            </div>
        );
    }
}

export default Counter;