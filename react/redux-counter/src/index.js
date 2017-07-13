import React from 'react';
import ReactDOM from "react-dom";


import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers/index";

//import components
import CounterContainer from "./containers/counter-container.js";

//create store
const store = createStore(reducers);


class App extends React.Component {
    render() {
        return (
            <div>
                <CounterContainer />
            </div>
        );
    }
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.querySelector("#root"));
