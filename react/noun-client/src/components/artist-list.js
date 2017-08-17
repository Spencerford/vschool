import React, { Component } from 'react';

import ArtistContainer from "../containers/artist-container.js";

class ArtistList extends Component {
    genList(){
        return this.props.list.map((item, index) => {
            return <ArtistContainer handleUpdate={this.props.handleUpdate} handleRemove={this.props.handleRemove} item={index + item.artist} list={item}/>
        })
    }
    render() {
        return (
            <div>
                {this.genList()}
            </div>
        );
    }
}

export default ArtistList;