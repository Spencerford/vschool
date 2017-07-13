import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

//import components
import Navbar from "./navbar.js";
import Footer from "./footer.js";
import Content from "./content.js";

class App extends React.Component {
    render() {
        return (
            <div>
                <Navbar brand="CustomNav" links={
                    [
                        {
                            text: "History",
                            link: "http://google.com"
                        },
                        {
                            text: "Blog",
                            link: "http://yahoo.com"
                        },
                        {
                            text: "Contact",
                            link: "http://youtube.com"
                        }
                    ]}/>
                <content>
                <h1 className="title">I really like this whole react thing</h1>
                <p className="text-center">this is a paragraph explaining how much better react is than anything else</p>
                </content>
                <Footer/>
            </div>
        );
    }
}

ReactDOM.render(
    <App/>, document.querySelector("#root"));