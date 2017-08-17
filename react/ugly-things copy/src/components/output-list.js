import React, {Component} from 'react';

import Output from "../components/output";

class OutputList extends Component {
    genList() {
        return this
            .props
            .posts
            .map((item, index) => {
                return (<Output
                    
                    input={this.props.input}
                    handleUpdate={this.props.handleUpdate}
                    genDelete={this.props.genDelete}
                    item={item}
                    index={index}
                    key={item + index}/>)
            })
    }

    render() {
        return (
            <div className="row">
                {this.genList()}
            </div>
        );
    }
}

export default OutputList;