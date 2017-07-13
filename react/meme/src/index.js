import React from 'react';
import ReactDOM from "react-dom";
import "./index.css";

import MemeContainer from "./containers/meme-container";
import FormContainer from "./containers/form-container";
import Header from "./header";

//this provides store to your app
import { Provider } from "react-redux";

//creating the store from redux
import { createStore } from "redux";

//get reducer to handle state
import reducers from "./reducers/";


//make the store
const store = createStore(reducers);

//import containers


class App extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <Header/>
                <FormContainer />
                <MemeContainer/>
            </div>
        );
    }
}

//give it to the app
ReactDOM.render(
    <Provider store={store}><App/></Provider>, document.querySelector("#root"));