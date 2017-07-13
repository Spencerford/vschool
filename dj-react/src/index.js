import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import ContentContainer from "./container/contentContainer.js";

class App extends React.Component {
    render (){
        return (
            <div>
                <ContentContainer />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));