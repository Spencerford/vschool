import React from "react";

class Score extends React.Component {

    render() {
        return (
            <div className="teams">
                <h1>{this.props.counter}</h1>
                <button
                    style={{
                    color: this.props.color
                }}
                    onClick=
                    {() => {this.props.handleClick(this.props.color)}}>{this.props.color}</button>
            </div>
        )
    }
}

export default Score;