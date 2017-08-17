import React, { Component } from 'react';
import autoBind from "react-autobind";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../actions/index.js";

import Form from "../components/form";

class FormContainer extends Component {
    constructor(){
        super();
        this.state = {
            artist: "",
            genre: "",
            from: "",
            song: ""
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

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actionCreators, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);