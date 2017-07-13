import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import FormContainer from "./containers/form-container";
import Header from "./header";

class App extends React.Component{
    render (){
        return (
            <div>
                <Header />
                <FormContainer />
            </div>

        )
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));