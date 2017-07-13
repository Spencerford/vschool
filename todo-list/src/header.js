import React from "react";

class Header extends React.Component {
    render() {
        return (
            <div className="container-fluid header">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h1 className="header-title">What do you need to do this week?</h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;