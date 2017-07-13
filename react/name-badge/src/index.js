import React from "react";
import ReactDOM from "react-dom";

//import css
import "./index.css";

//import additional containers
import BadgeContainer from "./containers/badge-container";
import Header from "./header";
import Footer from "./footer";

class App extends React.Component {
    render() {
        return (
            <div>
            <div className="container">
                <Header />
                <BadgeContainer />
                
            </div>
            <div className="container-fluid">
                <Footer />
            </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));