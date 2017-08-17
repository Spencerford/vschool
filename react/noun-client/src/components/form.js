import React, { Component } from 'react';

class Form extends Component {
    render() {
        return (
            <div>
                <h1>Submit a new artist/song</h1>
                <input value={this.props.input.artist} onChange={(event) => {this.props.handleChange("artist", event);}} placeholder="Artist" type="text"/>
                <input value={this.props.input.genre} onChange={(event) => {this.props.handleChange("genre", event);}} placeholder="Genre" type="text"/>
                <input value={this.props.input.from} onChange={(event) => {this.props.handleChange("from", event);}} placeholder="From" type="text"/>
                <input value={this.props.input.song} onChange={(event) => {this.props.handleChange("song", event);}} placeholder="Song" type="text"/>
                <button onClick={() => {
                    this.props.handleClick(this.props.input)
                }} className="btn btn-success">Submit</button>
                
            </div>
        );
    }
}

export default Form;