import React, { Component } from 'react';
import ReactDOM from "react-dom";

//import css
import "./css/index.css";

//import redux
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers/index.js";

//import containers
import Header from "./header.js";
import FormContainer from "./containers/form-container.js";
import OutputContainer from "./containers/output-container";
import Footer from "./footer";

const store = createStore(reducers)

class App extends Component {
    render() {
        return (
            <div className="container-fluid">
                <Header />
                <FormContainer />
                <OutputContainer />
                <Footer />
            </div>
        );
    }
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.querySelector("#root"));