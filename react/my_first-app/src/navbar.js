import React from "react";

class Navbar extends React.Component {
    render () {
        return (
            <div className="navbar">
                <span>Company Logo</span>
                <div className="navbar-links">
                <span><a href="#">HOME</a></span>
                <span><a href="#">ABOUT</a></span>
                <span><a href="#">TEAM</a></span>
                </div>
            </div>
        );
    }
}

export default Navbar;