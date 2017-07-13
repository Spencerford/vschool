import React from "react";
import FontAwesome from "react-fontawesome";

class Content extends React.Component {
    render() {
        return (
            <div className="container-fluid banner">
                <div className="row">
                    <div className="col-xs-offset-4 col-xs-5 col-md-offset-4 col-md-5 text-center spacing">
                        <img src="https://coursework.vschool.io/content/images/2015/07/profile.png"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-offset-4 col-xs-5 col-md-offset-4 col-md-5 text-center">
                        <h1>START BOOTSTRAP</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-offset-4 col-xs-5 col-md-offset-4 col-md-5 text-center">
                        <FontAwesome className="fa fa-minus" name="minus" size="3x"/>
                        <FontAwesome className="fa fa-star" name="star" size="3x"/>
                        <FontAwesome className="fa fa-minus" name="minus" size="3x"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-offset-4 col-xs-5 col-md-offset-4 col-md-5 text-center">
                        <h4>Web Developer - Graphic Artist - User Experience Designer</h4>
                    </div>
                </div>

            </div>
        )
    }
}

export default Content;