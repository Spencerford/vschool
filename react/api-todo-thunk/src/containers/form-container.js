import React, { Component } from 'react';
import autoBind from "react-autobind";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../actions/index.js";

import Form from "../components/form.js";

class FormContainer extends Component {
    constructor(){
        super();
        this.state ={
            title: "",
            description: "",
            price: ""
        }
        autoBind(this);
    }

    handleChange(key, event) {
    this.setState({
      [key]: event.target.value
    });
  }

    render() {
        return (
            <div className="row">
                <Form totalItems={this.props.totalItems} total={this.props.totalCost} handleRemove={this.props.removeData} handleAdd={this.props.addData} input={this.state} handleChange={this.handleChange}/>
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