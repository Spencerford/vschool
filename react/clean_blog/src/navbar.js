import React from "react";
import {Navbar, NavItem, Nav} from "react-bootstrap";
import FontAwesome from "react-fontawesome";

class NavbarCustom extends React.Component {
    render() {
        let navLinks = this.props.links.map((item) => {
            return (
                <NavItem eventKey={1} href={item.link}>{item.text}</NavItem>
            );
        });
        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a className="headernav" href="#">{this.props.brand}</a>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        {navLinks}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default NavbarCustom;