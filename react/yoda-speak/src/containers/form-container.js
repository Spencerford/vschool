import React, { Component } from 'react';
import autoBind from "react-autobind";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../actions/index.js";

import Form from "../components/form.js";

class FormContainer extends Component {
    constructor(){
        super();
        this.state = {
            text: ""
        };
        autoBind(this);
    }
    handleChange(event) {
        this.setState({
            text: event.target.value
        });
        console.log(this.state.text)
    }



    render() {
        return (
            <div className="row">
                <Form input={this.state.text} text={this.props.text} handleChange={this.handleChange} handleClick={this.props.convertText}/>
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