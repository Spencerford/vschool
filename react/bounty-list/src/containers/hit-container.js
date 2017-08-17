import React, { Component } from 'react';
import Hit from "../components/hit.js";
import autoBind from "react-autobind";

class HitContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
           ...this.props.hit,
           edit: false
        }
        autoBind(this);
    }

    handleChange(key, event){
        this.setState({
            [key]: event.target.value
        });
    }

    toggleEdit(){
        this.setState({
            edit: !this.state.edit
        });
    }

    render() {
        return (
            <div>
                
                <Hit toggleEdit={this.toggleEdit} handleUpdate={this.props.handleUpdate} input={this.state} handleChange={this.handleChange} handleRemove={this.props.handleRemove} hit={this.props.hit}/>
            </div>
        );
    }
}

export default HitContainer;