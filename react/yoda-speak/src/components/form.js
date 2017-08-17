import React, { Component } from 'react';

class Form extends Component {
    render() {
        return (
            <div className="col-md-12 text-center">
            <h1 className="main-title">Yoda Speak</h1>
            <div className="col-md-offset-2 col-md-5">
            <input value={this.props.input} onChange={(e) => (this.props.handleChange(e))} className="form-control" placeholder="Type sentence here" type="text"/>
            </div>
            <button onClick={() => {
                this.props.handleClick(this.props.input);
            }} className="col-md-3 btn btn-success">Speak Like Yoda</button>
            <h1 className="col-md-12 text-center">{this.props.text}</h1>
                
            </div>
        );
    }
}

export default Form;