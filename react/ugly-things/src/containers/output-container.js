import React, {Component} from 'react';
import autoBind from "react-autobind";

import Output from "../components/output.js";

class OutputContainer extends Component {
    constructor() {
        super();
        this.state = {
            title: "",
            info: "",
            url: ""
        };
        autoBind(this);
    }
    handleChange(key, event){
        this.setState({
            [key]: event.target.value
        })
    }

    render() {
        return (<Output
            handleChange={this.handleChange}
            input={this.state}
            handleUpdate={this.props.handleUpdate}
            genDelete={this.props.genDelete}
            key={this.props.title + this.props.index}
            item={this.props.item}
            index={this.props.index}
            />);
    }
}

export default OutputContainer;