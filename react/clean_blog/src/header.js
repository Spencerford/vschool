import React from "react";
import {} from "react-bootstrap";
import FontAwesome from "react-fontawesome";

class Header extends React.Component {
    render (){
        return (
            <div className="header">
                <h1 className="header-title text-center">CLEAN BLOG</h1>
                <hr className="specialHr"/>
                <h2 className="header-body text-center">A Clean Blog Theme by Spencer</h2>
            </div>
        )
    }
}

export default Header;