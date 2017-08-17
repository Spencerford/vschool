import React, { Component } from 'react';
import autoBind from "react-autobind";

import { connect } from "react-redux";
import * as actionCreators from "../actions/index.js";

import Form from "../components/form.js";

class FormContainer extends Component {
    constructor(){
        super();
        this.state = {
            name: "",
            location: "",
            price: "",
            wanted: ""
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
            <div className="row">
                <Form input={this.state} handleChange={this.handleChange} handleClick={this.props.addData}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state;
}




export default connect(mapStateToProps, actionCreators)(FormContainer);