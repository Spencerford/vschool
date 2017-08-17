import React, { Component } from 'react';

class Color extends Component {
    render() {
        return (
            <div style={{backgroundColor: `${this.props.color}`}} className="col-md-offset-3 col-md-6 box">
                <h1 className="col-md-12 text-center">{this.props.name}</h1>
                <button onClick={() => {this.props.handleClick()}} className="col-md-offset-4 col-md-4 btn btn-danger">CHANGE COLOR</button>
            </div>
        );
    }
}

export default Color;

