import React from "react";
import FontAwesome from "react-fontawesome";
import {} from "react-bootstrap";

class Articles extends React.Component {
    render() {
        return (
            <div className="article">
                <h2>{this.props.name}</h2>
                <h4>{this.props.desc}</h4>
                <p>
                    <em>Posted by Spencer on {this.props.date}</em>
                </p>
                <button onClick={() => {this.props.handleDescription(this.props.desc)}}>Description</button>
                
                <hr/>

            </div>
        );
    };
}

export default Articles;