import React from "react";
import {DropdownButton, MenuItem} from "react-bootstrap";

class Navbar extends React.Component {
    render() {
        let links = this.props.links.map((item) => {
            return (
                <li key={item.text}>
                <a href={item.link}>
                    {item.text}
                </a>
                </li>
            )
        });
        return (
            <div>
                <div className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand">{this.props.brand}</a>
                        </div>
                        <ul className="nav navbar-nav navbar-right">
                            {links}
                        </ul>
                    </div>

                </div>
            </div>
        )
    }
}

export default Navbar;
