import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../actions/index.js";

import ArtistList from "../components/artist-list.js";

class ArtistListContainer extends Component {
    componentWillMount(){
        this.props.loadData();
    }
    render() {
        return (
            <div className="row">
                <h1>Check out these Artists</h1>
                <ArtistList handleUpdate={this.props.updateData} list={this.props.list} handleRemove={this.props.deleteData}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(ArtistListContainer);