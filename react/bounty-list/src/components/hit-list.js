import React, { Component } from 'react';
import HitContainer from "../containers/hit-container.js";


class HitList extends Component {
    genHits(){
        return this.props.hits.map((item, index) => {
            return <HitContainer handleUpdate={this.props.handleUpdate} handleRemove={this.props.handleRemove} item={index + item.name} hit={item}/>
        })
    }
    render() {
        return (
            <div>
                {this.genHits()}
            </div>
        );
    }
}

export default HitList;