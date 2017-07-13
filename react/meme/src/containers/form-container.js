import React, { Component } from 'react';
import autoBind from "react-autobind";

//get the 'connect' to connect react to the store
import { connect } from "react-redux";

//get 'bindActionCreators' to bind the 'this' to the store 
import { bindActionCreators } from "redux";

//get all the action and put them in an object 'actionCreators'
import * as actionCreators from "../actions/";

import Form from "../components/form";

class FormContainer extends Component {
    constructor(){
        super();
        this.state = {
            top: "",
            url: "",
            bottom: ""
        };
        autoBind(this);
    }

    handleChange(key, event){
        this.setState({
            [key]: event.target.value
        })
        
        
    }

    render() {
        console.log(this.state);
        return (
            <Form handleClick={this.props.makeMeme} handleChange={this.handleChange} info={this.state} />
        );
    };
};
//tell redux how to connect the state to component ia props
const mapStateToProps = (state) => {
    return state;
};

//tell it how to turn actions into functions that can be called in react via props
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actionCreators, dispatch);
    };

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);