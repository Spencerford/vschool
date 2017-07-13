import React from 'react';

class Badge extends React.Component {
    render() {
        return (
            <div className="row nameBadge">
                <div className="col-md-12 nameTag-title">
                    <h3>BADGE:</h3>
                    
                </div>
                <div className="col-md-12 badgeContent">
                    <div className="col-md-offset-2 col-md-4">
                        <div><span className="key"><b>First Name:</b> </span>{this.props.item.firstName}</div>
                        <div><span className="key"><b>Email:</b> </span>{this.props.item.email}</div>
                        <div><span className="key"><b>Phone:</b> </span>{this.props.item.phone}</div>
                    </div>
                    <div className="col-md-offset-1 col-md-5">
                        <div><span className="key"><b>Last Name:</b> </span>{this.props.item.lastName}</div>
                        <div><span className="key"><b>Place of Birth:</b> </span>{this.props.item.placeOfBirth}</div>
                        <div><span className="key"><b>Favorite Food:</b> </span>{this.props.item.favoriteFood}</div>
                    </div>
                    <div className="col-md-offset-2 col-md-8 aboutSec">
                        <div><span className="key"><b>About {this.props.item.firstName}:</b> </span>{this.props.item.tellUs}</div>
                    </div>
                    
                </div>
            </div>
            
        );
    }
}

export default Badge;