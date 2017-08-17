import React, { Component } from 'react';

class Artist extends Component {
    render() {
        return (
            <div>
                <div>
                    <p>{this.props.list.artist}</p>
                    <p>{this.props.list.genre}</p>
                    <p>{this.props.list.from}</p>
                    <p>{this.props.list.song}</p>
                    <button className="btn btn-danger"
                    onClick={() => {
                        this.props.handleRemove(this.props.list.id)
                    }}>Remove</button>
                </div>
                
            </div>
        );
    }
}

export default Artist;