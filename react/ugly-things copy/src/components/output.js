import React, {Component} from 'react';

class Output extends Component {
    render() {
        return (

            <div className="col-md-4 output-box">
                <h3 className="col-md-12 text-center">{this.props.item.title}</h3>
                <h4 className="col-md-offset-1 col-md-10 text-center">{this.props.item.info}</h4>
                <div
                    className="col-md-offset-2 col-md-8 text-center image"
                    style={{
                    backgroundImage: `url(${this.props.item.url})`
                    }}>
                </div>
                <div className="col-md-12 edit-buttons">
                <button onClick= {() => {this.props.genDelete(this.props.index)}} className="col-md-offset-3 col-md-2 btn btn-danger">Delete</button>
                <button onClick= {() => {this.props.update(this.props.index)}} className="col-md-offset-2 col-md-2 btn btn-warning">Edit</button>
                </div>
            </div>

        );
    }
}

export default Output;