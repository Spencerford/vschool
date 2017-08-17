import React, { Component } from 'react';

import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as actionCreators from "../actions/"


//import compnent
import TodoList from "../components/todo-list.js";

class TodoListContainer extends Component {
    componentWillMount() {
        this.props.loadData();
    }
    render() {
        return (
            <div className="row">
                <TodoList handleUpdate={this.props.updateData} handleRemove={this.props.removeData} items={this.props.items}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchersToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchersToProps)(TodoListContainer);