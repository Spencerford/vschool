import React from 'react';

import { connect } from "react-redux";

import {bindActionCreators } from "redux"

import * as actionCreators from "../actions/";



import Meme from "../components/meme";

class MemeContainer extends React.Component {
    render() {
        return (
            <div>
                <Meme top={this.props.top} url={this.props.url} bottom={this.props.bottom}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state;
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actionCreators, dispatch);
    };

export default connect(mapStateToProps, mapDispatchToProps)(MemeContainer);