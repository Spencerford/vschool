import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

//import components
import CounterContainer from "./container/counter-container";

class App extends React.Component{
    render (){
        return(
            <div>
                <CounterContainer />
            </div>
        )
    };
};

ReactDOM.render(<App />, document.querySelector("#root"));