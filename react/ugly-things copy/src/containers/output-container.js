import React, { Component } from 'react';
import autoBind from "react-autobind";

import OutputList from "../components/output-list";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../actions/index.js";

class OutputListContainer extends Component {
    constructor() {
        super();
        this.state = {
            title: "",
            info: "",
            url: ""
        };
        autoBind(this);
    }
    handleChange(key, event){
        this.setState({
            [key]: event.target.value
        })
    }
 
    render() {
        console.log(this.props);
        return (
            <div>
                <OutputList handleInputs={this.handleInput} posts={this.props.posts} genDelete={this.props.genDelete} handleUpdate={this.props.update}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(OutputListContainer);