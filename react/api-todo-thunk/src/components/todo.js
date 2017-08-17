import React, {Component} from 'react';


class Todo extends Component {
    

    render() {
        return (
            <div className="col-md-6 content">

                <div className="col-md-offset-1 col-md-10 list-box">
                    <button
                        onClick={() => {
                        this
                            .props
                            .handleRemove(this.props.item._id)
                    }}
                        className="deleteButton">X</button>
                    <div className="col-md-5 list-item">
                        <h2>{this.props.item.title}</h2>
                        <p>$ {this.props.item.price}</p>
                    </div>
                    <p className="col-md-7 list-description">{this.props.item.description}</p>
                    <div className="col-md-12 editInput">
                        <input style={{display: this.props.input.edit ? "inherit" : "none"}}
                            value={this.props.input.title}
                            onChange={(event) => {
                            this
                                .props
                                .handleChange("title", event);
                        }}
                            className="col-md-3"
                            placeholder="Type Edit"
                            type="text"/>
                        <input style={{display: this.props.input.edit ? "inherit" : "none"}}
                            value={this.props.input.price}
                            onChange={(event) => {
                            this
                                .props
                                .handleChange("price", event);
                        }}
                            className="col-md-2"
                            placeholder="$$$"
                            type="number"/>
                        <input style={{display: this.props.input.edit ? "inherit" : "none"}}
                            value={this.props.input.description}
                            onChange={(event) => {
                            this
                                .props
                                .handleChange("description", event);
                        }}
                            className="col-md-5"
                            placeholder="description"
                            type="text"/>
                        <button style={{display: this.props.input.edit ? "inherit" : "none"}}
                            onClick={() => {
                            this
                                .props
                                .handleUpdate(this.props.item._id, this.props.input);
                        }}>Update
                        </button>
                        <button onClick={() => {
                            this
                                .props
                                .toggleEdit();
                        }}>Toggle edit</button>
                    </div>
                </div>

            </div>
        );
    }
}

export default Todo;