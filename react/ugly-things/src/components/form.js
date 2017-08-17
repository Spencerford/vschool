import React, { Component } from 'react';

class Form extends Component {
    render() {
        console.log(this.props.input)
        return (
            <div className="row input">
                <div className="col-md-12 text-center input-lg">
                <input value={this.props.input.title} onChange={(event) => {
                    this.props.handleChange("title", event)
                }} className="col-md-offset-2 col-md-2" placeholder="Title" type="text"/>
                <input value={this.props.input.info} onChange={(event) => {
                    this.props.handleChange("info", event)
                }} className="col-md-offset-1 col-md-2 description" placeholder="Description" type="text"/>
                <input  value={this.props.input.url} onChange={(event) => {
                    this.props.handleChange("url", event)
                }}className="col-md-offset-1 col-md-2" placeholder="URL " type="text"/>
                </div>
                <div className="col-md-offset-4 col-md-4 text-center">
                <button onClick={() => {
                    this.props.handleClick(this.props.input.desc);
                    this.props.handleEmptyInput();
                }} className="btn btn-success form-control">SUBMIT</button> 
                </div>
            </div>
        );
    }
}

export default Form;