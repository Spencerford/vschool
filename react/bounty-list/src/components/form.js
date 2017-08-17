import React, { Component } from 'react';

class Form extends Component {
    render() {
        return (
            <div className="col-md-12 text-center">
                <input value={this.props.input.name} onChange={(event) => {this.props.handleChange("name", event);}} placeholder="Name" type="text"/>
                <input value={this.props.input.location} onChange={(event) => {this.props.handleChange("location", event);}} placeholder="Location" type="text"/>
                <input value={this.props.input.price} onChange={(event) => {this.props.handleChange("price", event);}} placeholder="Price" type="number"/>
                <input value={this.props.input.wanted} onChange={(event) => {this.props.handleChange("wanted", event);}} placeholder="Wanted" type="text"/>
                <div className="col-md-12">
                <button onClick={() => {
                    this.props.handleClick(this.props.input)
                }} className="btn btn-success">Submit Here</button>
                </div>
            </div>
        );
    }
}

export default Form;