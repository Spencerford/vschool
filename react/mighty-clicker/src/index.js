import React from "react";
import ReactDOM from "react-dom";

//import other components
import ScoreContainer from "./containers/score-container";


//import css
import "./index.css";

class App extends React.Component{
    render(){
        return(
            <div>
                <h1>Team Mighty</h1>
                <ScoreContainer />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));