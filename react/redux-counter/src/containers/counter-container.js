import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../actions/index";

//import components
import Counter from "../components/counter";

class CounterContainer extends React.Component {
    render() {
        return (
            <div>
                <Counter handleAdd={this.props.addAction} handleSub={this.props.subAction} counter={this.props.counter}/>
            </div>
        )
    }
}

//handles putting are state into react
    const mapStateToProps = (state) => {
        return state;
    }

//handles putting are actionCreators into react
    const mapDispatchToProps = (dispatch) =>  {
        return bindActionCreators(actionCreators, dispatch);
    }


export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);