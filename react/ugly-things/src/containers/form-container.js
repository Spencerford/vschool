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
            output: [],
            desc: {
                title: "",
                info: "",
                url: ""
            }
        }
        autoBind(this);
    }

    handleChange(key, event){
        this.setState({
            desc: {
                ...this.state.desc,
                [key]: event.target.value
            },  
        }) 
    }

    emptyInput(){
        let copy = {...this.state.desc};
        for(let key in this.state.desc){
            copy[key] = ""
        }
        this.setState({
            desc: copy
        })
    }


    render() {
        return (
            <div>
                <Form handleEmptyInput={this.emptyInput} handleClick={()=>{this.props.genUgly(this.state.desc)}} handleChange={this.handleChange} input={this.state.desc}/>
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