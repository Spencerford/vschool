import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actionCreators from "../actions/index.js";

import HitList from "../components/hit-list.js";

class HitListContainer extends Component {
    componentWillMount(){
        this.props.loadData();
    }
    render() {
        return (
            <div className="row">
                <h1 className="text-center">Hitlist</h1>
                <HitList handleUpdate={this.props.updateData} hits={this.props.hits} handleRemove={this.props.deleteData}/>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return state;
}



export default connect(mapStateToProps, actionCreators)(HitListContainer);