import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center title">
                        <h1>Type in your information to create a badge!</h1>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;