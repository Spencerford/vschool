import React from "react";
import ReactDOM from "react-dom";

import MapContainer from "./containers/map-container.js";

import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import reducers from "./reducers";
import thunk from "redux-thunk";

import "./css/index.css";

const store = createStore(reducers, applyMiddleware(thunk));

class App extends React.Component {
  render() {
    return (
      <div>
        <h3>Google Map Example With React/Redux</h3>
        <MapContainer/>
      </div>

    )
  }
}

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById("root"));
