import React, {Component} from 'react';

class Form extends Component {
    render() {
        return (
            <div className="col-md-12">
                <div className="col-md-12 text-center">
                    <h1 className="col-md-12 text-center list-title">Start your list</h1>

                    <input
                        value={this.props.input.title}
                        onChange={(event) => {
                        this
                            .props
                            .handleChange("title", event);
                    }}
                        className="col-md-offset-2 col-md-2 form"
                        placeholder="Todo Item"
                        type="text"/>
                    <input
                        value={this.props.input.price}
                        onChange={(event) => {
                        this
                            .props
                            .handleChange("price", event);
                    }}
                        className="col-md-2 form"
                        placeholder="Price"
                        type="number"/>
                    <input
                        value={this.props.input.description}
                        onChange={(event) => {
                        this
                            .props
                            .handleChange("description", event);
                    }}
                        className="col-md-2 form"
                        placeholder="description"
                        type="text"/>
                    <button onClick={() => {
                        this.props.handleAdd(this.props.input);
                    }} className="btn btn-success">ADD</button>

                </div>
                <div className="col-md-offset-1 text-center total">
                    <div className="col-md-12">
                            <h1>How many items you have to do...</h1>
                            <h2>{this.props.totalItems}</h2>
                            <h1>Total Price:</h1>
                            <h2>${this.props.total}</h2>
                    </div>
                </div>
            </div>
        );
    }
}

export default Form;