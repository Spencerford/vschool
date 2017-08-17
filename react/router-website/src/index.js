import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'

import "./index.css";

import HomeContainer from "./containers/home-container.js";
import ContactContainer from "./containers/contact-container.js";
import BlogContainer from "./containers/blog-container.js";
import Navbar from "./components/navbar.js";
import ArticleContainer from "./containers/article-container.js";

class App extends Component {
    render() {
        return (
            <div className="container-fluid">
                <BrowserRouter>
                <div>
                    <Navbar />
                    <Switch>
                        <Route exact path="/" component={HomeContainer}/>
                        <Route exact path="/contact" component={ContactContainer}/>
                        <Route exact path="/blog" component={BlogContainer}/>
                        <Route exact path="/article/:index" component={ArticleContainer}/>
                    </Switch>
                </div>
                    
                </BrowserRouter>

            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));