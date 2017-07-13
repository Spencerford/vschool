import React from "react";

import Counter from "../component/counter.js";
import autoBind from "react-autobind";

class CounterContainer extends React.Component{
    constructor() {
        super(); 
            this.state = {
                counter: 100,
                style: {
                    color: "crimson",
                    backgroundColor: "lightGray"
                }
            };
        autoBind(this);
    };
    up(){
        this.setState({
            counter: this.state.counter + 1,
            style: {
                ...this.state.style,
                color: "purple"
            }
        })
    };
    down(){
        this.setState({
            counter: this.state.counter - 1,
            style: {
                ...this.state.style, 
                color: "green"
            }
        });
    };

    render (){
        return (
            <div>
                <Counter style={this.state.style} counter={this.state.counter} handleUp={this.up} handleDown={this.down}/>
            </div>
        )
    }
}

export default CounterContainer;