import React, { Component } from 'react';
import Artist from "../components/artist.js";
import autoBind from "react-autobind";

class AristContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            ...this.props.list,

        }
        autoBind(this);
    }

    handleChange(key, event){
        this.setState({
            [key]: event.target.value
        });
    }

    render() {
        return (
            <div>
                <Artist handleUpdate={this.props.handleUpdate} handleRemove={this.props.handleRemove} input={this.state} handleChange={this.handleChange} list={this.props.list}/>
            </div>
        );
    }
}

export default AristContainer;