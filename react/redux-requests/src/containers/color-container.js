import React, { Component } from 'react';
import autoBind from "react-autobind";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../actions/index.js";

import Color from "../components/color.js";

class ColorContainer extends Component {
    render() {
        return (
            <div className="row">
                <Color handleClick={this.props.loadColor} color={this.props.color} name={this.props.name}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(ColorContainer);