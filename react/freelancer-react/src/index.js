import React from "react";
import ReactDOM from "react-dom";
import FontAwesome from "react-fontawesome";

import "./index.css";


//import other files
import NavbarCustom from "./navbarCustom.js";
import Content from "./content.js";

class App extends React.Component {
    render (){
        let myLinks = [
            {
                text: "PORTFOLIO",
                link: "#"
            },
            {
                text: "ABOUT",
                link: "#"
            },
            {
                text: "CONTACT",
                link: "#"
            }
        ];
        return (
            <div>
                <NavbarCustom  brand="START BOOTSTRAP" links={myLinks}/>
                <Content />
            </div>
        );
    };
};

ReactDOM.render(<App />, document.querySelector("#root"));