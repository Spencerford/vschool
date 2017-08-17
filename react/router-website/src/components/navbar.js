import React, { Component } from 'react';

import {Link} from "react-router-dom";

class Navbar extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-12 text-center bar">
                    <Link to="/">Home</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/blog">Blog</Link>
                </div>
                
            </div>
        );
    }
}

export default Navbar;